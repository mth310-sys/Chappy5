class_name StudentTraceReference
extends RefCounted

# Canonical trace guide for the approved university-student sprite sheet.
# Source: user-approved 48x48 quarter-view student reference.
# This file stores design/trace anchors only; no runtime image dependency.
# Hidden anatomy under hair/clothes/shoes is NOT claimed as visible source data.

const CANVAS_SIZE := Vector2i(48, 48)
const VIEW := "SE_QUARTER"
const HEADS_TALL_APPROX := 2.2

# Character occupancy and construction anchors on the 48x48 logical grid.
# These are the baseline targets used when refining the editable BODY layer.
const BOUNDS := Rect2i(9, 2, 29, 44)
const HEAD_BOUNDS := Rect2i(9, 2, 27, 24)
const FACE_BOUNDS := Rect2i(13, 10, 20, 15)
const NECK_ANCHOR := Vector2i(23, 25)
const SHOULDER_LINE_Y := 27
const TORSO_BOUNDS := Rect2i(13, 27, 21, 13)
const HIP_LINE_Y := 39
const LEG_BOUNDS := Rect2i(16, 39, 16, 7)
const FOOT_LINE_Y := 45

# Quarter-view asymmetry: screen-right side is slightly rearward/narrower.
const FRONT_SIDE := "LEFT_SCREEN_SIDE"
const REAR_SIDE := "RIGHT_SCREEN_SIDE"

# Layer order planned for the editable character master.
const LAYERS := [
	"BODY",
	"HAIR",
	"CLOTHES",
	"PANTS",
	"SHOES",
	"FACE"
]

# Visible canonical traits to preserve when later layers are added.
const CANONICAL_TRAITS := {
	"hair": "fluffy jagged brown mass, larger than face",
	"face": "small face, vertical dark eyes",
	"top": "blue hoodie over white T-shirt",
	"bottom": "short dark pants silhouette",
	"shoes": "oversized white sneakers",
	"proportion": "large head, compact torso, short legs",
	"view": "quarter-view with readable left/right asymmetry"
}
