extends Node2D

const GRID_SIZE := 48
const CELL := 6.0
const ORIGIN := Vector2(51.0, 132.0)
const CANVAS_SIZE := GRID_SIZE * CELL

const EMPTY := -1
const PALETTE := [
	Color8(21, 20, 22, 255),
	Color8(252, 214, 183, 255),
	Color8(232, 177, 145, 255),
	Color8(205, 207, 214, 255),
	Color8(153, 158, 169, 255),
	Color8(185, 188, 196, 255),
]

var pixels: Array = []
var undo_stack: Array = []
var selected_color := 1
var eraser := false
var painting := false
var last_cell := Vector2i(-1, -1)

func _ready() -> void:
	_reset_grid()
	_seed_traced_body()
	queue_redraw()

func _reset_grid() -> void:
	pixels.clear()
	for y in range(GRID_SIZE):
		var row: Array[int] = []
		for x in range(GRID_SIZE):
			row.append(EMPTY)
		pixels.append(row)

func _seed_traced_body() -> void:
	# Base-body trace derived from the approved 48x48 university-student design.
	# Covered anatomy is intentionally neutral and editable.
	_fill(15, 5, 16, 1, 0)
	_fill(12, 6, 22, 2, 0)
	_fill(10, 8, 25, 4, 0)
	_fill(9, 12, 26, 8, 0)
	_fill(10, 20, 24, 3, 0)
	_fill(12, 23, 20, 2, 0)
	_fill(14, 7, 16, 2, 2)
	_fill(12, 9, 21, 4, 1)
	_fill(11, 13, 22, 7, 1)
	_fill(12, 20, 20, 3, 1)
	_fill(14, 23, 16, 1, 2)
	_fill(20, 24, 7, 3, 0)
	_fill(21, 24, 5, 3, 1)
	_fill(16, 27, 15, 2, 0)
	_fill(14, 29, 18, 10, 0)
	_fill(16, 28, 13, 10, 3)
	_fill(16, 36, 13, 2, 4)
	_fill(11, 29, 5, 10, 0)
	_fill(12, 30, 3, 8, 3)
	_fill(11, 38, 5, 4, 0)
	_fill(12, 38, 3, 3, 1)
	_fill(31, 29, 4, 10, 0)
	_fill(31, 30, 3, 8, 4)
	_fill(31, 38, 4, 4, 0)
	_fill(31, 38, 3, 3, 2)
	_fill(16, 38, 14, 3, 0)
	_fill(17, 38, 12, 2, 4)
	_fill(17, 40, 6, 6, 0)
	_fill(18, 40, 4, 5, 3)
	_fill(25, 40, 6, 6, 0)
	_fill(26, 40, 4, 5, 4)
	_fill(15, 45, 9, 3, 0)
	_fill(16, 45, 7, 2, 5)
	_fill(25, 45, 9, 3, 0)
	_fill(26, 45, 7, 2, 5)

func _fill(x0: int, y0: int, w: int, h: int, color_index: int) -> void:
	for y in range(y0, min(y0 + h, GRID_SIZE)):
		for x in range(x0, min(x0 + w, GRID_SIZE)):
			pixels[y][x] = color_index

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
	for row in pixels:
		snapshot.append(row.duplicate())
	undo_stack.append(snapshot)
	if undo_stack.size() > 20:
		undo_stack.pop_front()

func _undo() -> void:
	if undo_stack.is_empty():
		return
	pixels = undo_stack.pop_back()
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
			_mirror()
		queue_redraw()
		return
	if pos.y >= 452.0 and pos.y <= 500.0:
		var index := int(pos.x / 65.0)
		if index >= 0 and index < PALETTE.size():
			selected_color = index
			eraser = false
			queue_redraw()

func _draw() -> void:
	# Header and tool bar.
	draw_string(ThemeDB.fallback_font, Vector2(18, 34), "BODY PIXEL EDITOR 48x48", HORIZONTAL_ALIGNMENT_LEFT, -1, 20, Color.WHITE)
	draw_string(ThemeDB.fallback_font, Vector2(18, 58), "Tap/drag pixels directly on iPhone", HORIZONTAL_ALIGNMENT_LEFT, -1, 13, Color(0.82, 0.86, 0.9))
	_draw_button(Rect2(8, 76, 89, 36), "PENCIL", not eraser)
	_draw_button(Rect2(101, 76, 89, 36), "ERASER", eraser)
	_draw_button(Rect2(194, 76, 89, 36), "UNDO", false)
	_draw_button(Rect2(287, 76, 95, 36), "MIRROR", false)

	# Checkerboard and grid.
	for y in range(GRID_SIZE):
		for x in range(GRID_SIZE):
			var rect := Rect2(ORIGIN + Vector2(x * CELL, y * CELL), Vector2(CELL, CELL))
			var bg := Color(0.83, 0.83, 0.83) if ((x + y) % 2 == 0) else Color(0.72, 0.72, 0.72)
			draw_rect(rect, bg, true)
			var idx: int = pixels[y][x]
			if idx != EMPTY:
				draw_rect(rect, PALETTE[idx], true)
	# Major grid guides every 8 pixels.
	for i in range(0, GRID_SIZE + 1, 8):
		var p := i * CELL
		draw_line(ORIGIN + Vector2(p, 0), ORIGIN + Vector2(p, CANVAS_SIZE), Color(0, 0, 0, 0.28), 1.0)
		draw_line(ORIGIN + Vector2(0, p), ORIGIN + Vector2(CANVAS_SIZE, p), Color(0, 0, 0, 0.28), 1.0)
	draw_rect(Rect2(ORIGIN, Vector2(CANVAS_SIZE, CANVAS_SIZE)), Color(0.08, 0.1, 0.12), false, 2.0)

	# Palette.
	draw_string(ThemeDB.fallback_font, Vector2(18, 440), "PALETTE", HORIZONTAL_ALIGNMENT_LEFT, -1, 14, Color.WHITE)
	for i in range(PALETTE.size()):
		var r := Rect2(i * 65.0 + 6.0, 452.0, 53.0, 42.0)
		draw_rect(r, PALETTE[i], true)
		draw_rect(r, Color.WHITE if i == selected_color and not eraser else Color(0.25, 0.28, 0.32), false, 3.0 if i == selected_color and not eraser else 1.0)

	# 2x preview of the edited data.
	draw_string(ThemeDB.fallback_font, Vector2(18, 532), "PREVIEW x2", HORIZONTAL_ALIGNMENT_LEFT, -1, 14, Color.WHITE)
	var preview_origin := Vector2(147, 548)
	for y in range(GRID_SIZE):
		for x in range(GRID_SIZE):
			var idx: int = pixels[y][x]
			if idx != EMPTY:
				draw_rect(Rect2(preview_origin + Vector2(x * 2, y * 2), Vector2(2, 2)), PALETTE[idx], true)
	draw_rect(Rect2(preview_origin, Vector2(96, 96)), Color(0.75, 0.78, 0.82), false, 1.0)

func _draw_button(rect: Rect2, text: String, active: bool) -> void:
	draw_rect(rect, Color(0.24, 0.42, 0.62) if active else Color(0.12, 0.16, 0.21), true)
	draw_rect(rect, Color(0.62, 0.7, 0.8), false, 1.0)
	draw_string(ThemeDB.fallback_font, rect.position + Vector2(10, 24), text, HORIZONTAL_ALIGNMENT_LEFT, -1, 13, Color.WHITE)
