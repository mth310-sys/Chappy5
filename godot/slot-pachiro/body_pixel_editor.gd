extends Node2D

const TraceData = preload("res://student_trace_data.gd")
const GRID_SIZE := 48
const CELL := 6.0
const ORIGIN := Vector2(51.0, 132.0)
const CANVAS_SIZE := GRID_SIZE * CELL
const EMPTY := -1
const SWATCH_COLS := 8
const SWATCH_W := 46.0
const SWATCH_H := 30.0
const SWATCH_ORIGIN := Vector2(11.0, 454.0)

var pixels: Array = []
var undo_stack: Array = []
var selected_color := 0
var eraser := false
var painting := false
var last_cell := Vector2i(-1, -1)

func _ready() -> void:
	_load_converter_trace()
	queue_redraw()

func _palette() -> Array:
	return TraceData.PALETTE

func _load_converter_trace() -> void:
	pixels.clear()
	for y in range(GRID_SIZE):
		var row: Array = []
		var encoded := String(TraceData.ROWS[y])
		for x in range(GRID_SIZE):
			var token := encoded.substr(x, 1)
			if token == ".":
				row.append(EMPTY)
			else:
				row.append(TraceData.INDEX_ALPHABET.find(token))
		pixels.append(row)

func _input(event: InputEvent) -> void:
	if event is InputEventScreenTouch:
		if event.pressed:
			if _inside_canvas(event.position):
				_push_undo()
				painting = true
				_paint_at(event.position)
			else:
				_handle_ui(event.position)
		else:
			painting = false
			last_cell = Vector2i(-1, -1)
	elif event is InputEventScreenDrag and painting:
		_paint_at(event.position)
	elif event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT:
		if event.pressed:
			if _inside_canvas(event.position):
				_push_undo()
				painting = true
				_paint_at(event.position)
			else:
				_handle_ui(event.position)
		else:
			painting = false
			last_cell = Vector2i(-1, -1)
	elif event is InputEventMouseMotion and painting:
		_paint_at(event.position)

func _inside_canvas(pos: Vector2) -> bool:
	return Rect2(ORIGIN, Vector2(CANVAS_SIZE, CANVAS_SIZE)).has_point(pos)

func _paint_at(pos: Vector2) -> void:
	if not _inside_canvas(pos):
		return
	var cell := Vector2i(int((pos.x - ORIGIN.x) / CELL), int((pos.y - ORIGIN.y) / CELL))
	if cell == last_cell:
		return
	last_cell = cell
	pixels[cell.y][cell.x] = EMPTY if eraser else selected_color
	queue_redraw()

func _push_undo() -> void:
	var snapshot: Array = []
	for source_row in pixels:
		snapshot.append(source_row.duplicate())
	undo_stack.append(snapshot)
	if undo_stack.size() > 20:
		undo_stack.pop_front()

func _undo() -> void:
	if undo_stack.is_empty():
		return
	pixels = undo_stack.pop_back()
	queue_redraw()

func _reset_trace() -> void:
	_push_undo()
	_load_converter_trace()
	queue_redraw()

func _mirror() -> void:
	_push_undo()
	for y in range(GRID_SIZE):
		pixels[y].reverse()
	queue_redraw()

func _handle_ui(pos: Vector2) -> void:
	if pos.y >= 76.0 and pos.y <= 112.0:
		if pos.x < 97.5:
			eraser = false
		elif pos.x < 195.0:
			eraser = true
		elif pos.x < 292.5:
			_undo()
		else:
			_reset_trace()
		queue_redraw()
		return
	var palette := _palette()
	var palette_rows := int(ceil(float(palette.size()) / float(SWATCH_COLS)))
	var palette_height := float(palette_rows) * SWATCH_H
	if pos.y >= SWATCH_ORIGIN.y and pos.y < SWATCH_ORIGIN.y + palette_height:
		var col := int((pos.x - SWATCH_ORIGIN.x) / SWATCH_W)
		var row_index := int((pos.y - SWATCH_ORIGIN.y) / SWATCH_H)
		if col >= 0 and col < SWATCH_COLS and row_index >= 0:
			var index := row_index * SWATCH_COLS + col
			if index >= 0 and index < palette.size():
				selected_color = index
				eraser = false
				queue_redraw()
	if pos.y >= 760.0 and pos.x >= 280.0:
		_mirror()

func _draw() -> void:
	var palette := _palette()
	draw_string(ThemeDB.fallback_font, Vector2(18, 32), "STUDENT TRACE EDITOR 48x48", HORIZONTAL_ALIGNMENT_LEFT, -1, 19, Color.WHITE)
	draw_string(ThemeDB.fallback_font, Vector2(18, 55), "PixelArtConverter trace -> Godot editable data", HORIZONTAL_ALIGNMENT_LEFT, -1, 12, Color(0.82, 0.86, 0.9))
	_draw_button(Rect2(8, 76, 89, 36), "PENCIL", not eraser)
	_draw_button(Rect2(101, 76, 89, 36), "ERASER", eraser)
	_draw_button(Rect2(194, 76, 89, 36), "UNDO", false)
	_draw_button(Rect2(287, 76, 95, 36), "RESET", false)

	for y in range(GRID_SIZE):
		for x in range(GRID_SIZE):
			var rect := Rect2(ORIGIN + Vector2(x * CELL, y * CELL), Vector2(CELL, CELL))
			var bg := Color(0.83, 0.83, 0.83) if ((x + y) % 2 == 0) else Color(0.72, 0.72, 0.72)
			draw_rect(rect, bg, true)
			var idx := int(pixels[y][x])
			if idx != EMPTY and idx >= 0 and idx < palette.size():
				draw_rect(rect, palette[idx], true)
	for i in range(0, GRID_SIZE + 1, 8):
		var p := float(i) * CELL
		draw_line(ORIGIN + Vector2(p, 0), ORIGIN + Vector2(p, CANVAS_SIZE), Color(0, 0, 0, 0.25), 1.0)
		draw_line(ORIGIN + Vector2(0, p), ORIGIN + Vector2(CANVAS_SIZE, p), Color(0, 0, 0, 0.25), 1.0)
	draw_rect(Rect2(ORIGIN, Vector2(CANVAS_SIZE, CANVAS_SIZE)), Color(0.08, 0.1, 0.12), false, 2.0)

	draw_string(ThemeDB.fallback_font, Vector2(18, 444), "TRACE PALETTE (24)", HORIZONTAL_ALIGNMENT_LEFT, -1, 13, Color.WHITE)
	for i in range(palette.size()):
		var col := i % SWATCH_COLS
		var row_index := int(i / SWATCH_COLS)
		var r := Rect2(SWATCH_ORIGIN + Vector2(float(col) * SWATCH_W, float(row_index) * SWATCH_H), Vector2(40, 24))
		draw_rect(r, palette[i], true)
		draw_rect(r, Color.WHITE if i == selected_color and not eraser else Color(0.25, 0.28, 0.32), false, 2.0 if i == selected_color and not eraser else 1.0)

	draw_string(ThemeDB.fallback_font, Vector2(18, 570), "PREVIEW x3", HORIZONTAL_ALIGNMENT_LEFT, -1, 13, Color.WHITE)
	var preview_origin := Vector2(123, 586)
	for y in range(GRID_SIZE):
		for x in range(GRID_SIZE):
			var idx := int(pixels[y][x])
			if idx != EMPTY and idx >= 0 and idx < palette.size():
				draw_rect(Rect2(preview_origin + Vector2(x * 3, y * 3), Vector2(3, 3)), palette[idx], true)
	draw_rect(Rect2(preview_origin, Vector2(144, 144)), Color(0.75, 0.78, 0.82), false, 1.0)
	_draw_button(Rect2(280, 760, 102, 42), "MIRROR", false)

func _draw_button(rect: Rect2, text: String, active: bool) -> void:
	draw_rect(rect, Color(0.24, 0.42, 0.62) if active else Color(0.12, 0.16, 0.21), true)
	draw_rect(rect, Color(0.62, 0.7, 0.8), false, 1.0)
	draw_string(ThemeDB.fallback_font, rect.position + Vector2(9, 24), text, HORIZONTAL_ALIGNMENT_LEFT, -1, 12, Color.WHITE)
