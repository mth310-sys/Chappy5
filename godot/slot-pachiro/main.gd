extends Node2D

const SPEED := 80.0
var direction := Vector2(1, 0.5).normalized()

@onready var student: Node2D = $Student
@onready var status: Label = $UI/Status

func _ready() -> void:
	status.text = "Godot Lab / iPhone 12 viewport 390x844"

func _process(delta: float) -> void:
	student.position += direction * SPEED * delta
	if student.position.x > 340.0 or student.position.x < 50.0:
		direction.x *= -1.0
	if student.position.y > 700.0 or student.position.y < 180.0:
		direction.y *= -1.0
	student.queue_redraw()
