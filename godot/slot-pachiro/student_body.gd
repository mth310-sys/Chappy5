extends Node2D

# Canonical base body for the approved university-student character.
# 48x48 logical pixel canvas, no image files, no hair/clothes/shoes.
# Hidden anatomy under the reference clothing is intentionally simplified into a neutral mannequin base.

const OUTLINE := Color8(21, 20, 22, 255)
const SKIN := Color8(252, 214, 183, 255)
const SKIN_SHADOW := Color8(232, 177, 145, 255)
const BODY_BASE := Color8(205, 207, 214, 255)
const BODY_SHADOW := Color8(153, 158, 169, 255)
const FOOT_BASE := Color8(185, 188, 196, 255)

func _ready() -> void:
	texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	queue_redraw()

func set_motion(_motion: Vector2) -> void:
	# Body inspection mode is intentionally static.
	pass

func _px(x: int, y: int, w: int, h: int, color: Color) -> void:
	draw_rect(Rect2(-24 + x, -48 + y, w, h), color, true)

func _draw() -> void:
	# Head / face silhouette: large chibi head, slight right-down quarter-view bias.
	_px(15, 5, 16, 1, OUTLINE)
	_px(12, 6, 22, 2, OUTLINE)
	_px(10, 8, 25, 4, OUTLINE)
	_px(9, 12, 26, 8, OUTLINE)
	_px(10, 20, 24, 3, OUTLINE)
	_px(12, 23, 20, 2, OUTLINE)

	_px(14, 7, 16, 2, SKIN_SHADOW)
	_px(12, 9, 21, 4, SKIN)
	_px(11, 13, 22, 7, SKIN)
	_px(12, 20, 20, 3, SKIN)
	_px(14, 23, 16, 1, SKIN_SHADOW)

	# Minimal facial anchors, kept separate from expressions.
	_px(17, 16, 2, 4, OUTLINE)
	_px(27, 15, 2, 4, OUTLINE)
	_px(23, 21, 2, 1, SKIN_SHADOW)

	# Neck.
	_px(20, 24, 7, 3, OUTLINE)
	_px(21, 24, 5, 3, SKIN)

	# Torso mannequin base.
	_px(16, 27, 15, 2, OUTLINE)
	_px(14, 29, 18, 10, OUTLINE)
	_px(16, 28, 13, 10, BODY_BASE)
	_px(16, 36, 13, 2, BODY_SHADOW)

	# Left arm.
	_px(11, 29, 5, 10, OUTLINE)
	_px(12, 30, 3, 8, BODY_BASE)
	_px(11, 38, 5, 4, OUTLINE)
	_px(12, 38, 3, 3, SKIN)

	# Right arm, slightly rearward for quarter view.
	_px(31, 29, 4, 10, OUTLINE)
	_px(31, 30, 3, 8, BODY_SHADOW)
	_px(31, 38, 4, 4, OUTLINE)
	_px(31, 38, 3, 3, SKIN_SHADOW)

	# Hips.
	_px(16, 38, 14, 3, OUTLINE)
	_px(17, 38, 12, 2, BODY_SHADOW)

	# Legs.
	_px(17, 40, 6, 6, OUTLINE)
	_px(18, 40, 4, 5, BODY_BASE)
	_px(25, 40, 6, 6, OUTLINE)
	_px(26, 40, 4, 5, BODY_SHADOW)

	# Neutral feet placeholders; shoes will be a separate layer later.
	_px(15, 45, 9, 3, OUTLINE)
	_px(16, 45, 7, 2, FOOT_BASE)
	_px(25, 45, 9, 3, OUTLINE)
	_px(26, 45, 7, 2, FOOT_BASE)
