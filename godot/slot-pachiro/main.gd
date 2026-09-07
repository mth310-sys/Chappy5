extends Node2D

const SPEED := 80.0
var direction := Vector2(1, 0.5).normalized()

@onready var student: Node2D = $Student
@onready var status: Label = $UI/Status

func _ready() -> void:
	status.text = "Godot Lab / indexed student 48x48 / walk test"
	student.set_motion(direction)

func _process(delta: float) -> void:
	student.position += direction * SPEED * delta
	var bounced := false
	if student.position.x > 340.0 or student.position.x < 50.0:
		direction.x *= -1.0
		bounced = true
	if student.position.y > 700.0 or student.position.y < 180.0:
		direction.y *= -1.0
		bounced = true
	if bounced:
		student.set_motion(direction)
