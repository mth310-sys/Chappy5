extends Node2D

@onready var student: Node2D = $Student
@onready var status: Label = $UI/Status

var body_scale := 3.0
var body_rotation := 0.0
var dragging := false

func _ready() -> void:
	student.position = Vector2(195.0, 430.0)
	_apply_body_transform()
	_update_status()

func _input(event: InputEvent) -> void:
	if event is InputEventScreenTouch:
		if event.pressed:
			if event.position.y >= 720.0:
				_handle_control_tap(event.position)
			else:
				dragging = true
				student.position = event.position
		else:
			dragging = false
	elif event is InputEventScreenDrag and dragging:
		student.position = event.position
	elif event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT:
		if event.pressed:
			if event.position.y >= 720.0:
				_handle_control_tap(event.position)
			else:
				dragging = true
				student.position = event.position
		else:
			dragging = false
	elif event is InputEventMouseMotion and dragging:
		student.position = event.position

func _handle_control_tap(pos: Vector2) -> void:
	# Bottom control strip: SIZE-, SIZE+, ROTATE, CENTER.
	if pos.x < 97.5:
		body_scale = max(1.0, body_scale - 0.5)
	elif pos.x < 195.0:
		body_scale = min(6.0, body_scale + 0.5)
	elif pos.x < 292.5:
		body_rotation = fmod(body_rotation + 45.0, 360.0)
	else:
		student.position = Vector2(195.0, 430.0)
	_apply_body_transform()
	_update_status()

func _apply_body_transform() -> void:
	student.scale = Vector2(body_scale, body_scale)
	student.rotation_degrees = body_rotation

func _update_status() -> void:
	status.text = "BODY DEV | drag body | scale %.1fx | rot %.0f deg" % [body_scale, body_rotation]
