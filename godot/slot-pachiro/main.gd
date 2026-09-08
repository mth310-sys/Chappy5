extends Node2D

@onready var student: Node2D = $Student
@onready var status: Label = $UI/Status

func _ready() -> void:
	# Character-first inspection mode: neutral body only.
	status.text = "Character Master / BODY BASE / 48x48 x3"
	student.position = Vector2(195.0, 470.0)
	student.scale = Vector2(3.0, 3.0)
	student.set_motion(Vector2.ZERO)
