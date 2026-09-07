extends Node2D

func _draw() -> void:
	# Temporary full-body placeholder. Replace with the converted university-student sprite next.
	draw_circle(Vector2(0, -22), 13, Color("7a4a2f"))
	draw_rect(Rect2(-10, -12, 20, 20), Color("3f78b5"), true)
	draw_rect(Rect2(-3, -11, 6, 16), Color("f3f2ea"), true)
	draw_rect(Rect2(-8, 8, 6, 12), Color("2f3440"), true)
	draw_rect(Rect2(2, 8, 6, 12), Color("2f3440"), true)
	draw_rect(Rect2(-11, 18, 9, 5), Color("f5f5f5"), true)
	draw_rect(Rect2(2, 18, 9, 5), Color("f5f5f5"), true)
