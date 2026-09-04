# DESIGN ASSET AUDIT — Slot Pachiro

## Purpose
External assets are inputs, not a visual direction. The visual target remains **Kairosoft / Pocket Arcade Story (ゲームセンター倶楽部)**. An asset is useful only when it can move the existing Slot Pachiro foundation toward that target without replacing the established grid, facility, island, or spatial rules.

## Hard gate
A candidate must satisfy all of the following before runtime adoption:

1. License permits the intended use and modification; CC0 is preferred for art.
2. Provenance and exact source URL are recorded.
3. Actual package/image contents are inspected before claiming it is usable.
4. Geometry can be reconciled with the existing logical grid and 2:1-ish oblique view.
5. It can survive Kairo-style transformation: reduced detail, stronger silhouette, compact proportions, controlled palette, pixel/block treatment, and consistent outline/shading.
6. It does not force the game toward generic low-poly, realistic 3D, or a foreign camera system.
7. Existing approved assets—especially the canonical 9-unit island—are not redesigned to match the external pack. External material must be adapted to Slot Pachiro.

## Reference hierarchy
1. **Pocket Arcade Story / ゲームセンター倶楽部** — visual grammar, density, proportions, store readability.
2. Existing Slot Pachiro approved work — spatial and equipment continuity.
3. Permissive assets — source geometry, silhouettes, object inventory, directional variants, rendering reference.
4. Real pachislot halls — physical relationships and equipment semantics.

## Candidate audit

| Candidate | License verified | Native form | Useful traits | Kairo-style conversion | Decision |
|---|---|---|---|---|---|
| Kenney Mini Arcade | CC0 | 20 low-poly 3D models; OBJ/FBX/glTF | Arcade cabinets, vending, ticket/prize machines, walls/floor, counter, characters; coherent object family | **High as geometry/reference, low as direct visual**. Render to fixed oblique angle, simplify/re-proportion, pixelize/resprite, replace generic low-poly surface language | **B — modify/resprite candidate** |
| OpenGameArt Isometric Furniture and Walls / hawkbirdtree | CC0 | 2D PNG pixel/isometric sheet | Already pixel-art and isometric; walls/furniture useful for edge, outline, and shading study | **High** if projection and scale match after inspection; palette and proportions still need Slot Pachiro treatment | **B — inspect then modify** |
| OpenGameArt Isometric Furniture / RatMoleRat | CC0 | 2D sprites cropped for 64×32 tiles; several directions | Explicit 64×32 basis and directional furniture; useful for footprint/orientation study | **High structurally**; subject matter is generic furniture, so mainly transformation/reference | **B/C — modify or dimensional reference** |
| Kenney Furniture Kit | CC0 | 120 3D objects + 4-angle isometric renders | Large furniture vocabulary and four directions; good source for orientation/occupancy | **Medium-high** after aggressive resprite; direct render is not the target style | **B — modify/resprite candidate** |
| Kenney Isometric Miniature Library | CC0 | 2D isometric/top-down PNG; 30°×45° viewpoint; 256px tile width, 128px base floor height | Explicit projection, walls/floors/tables/bookcases; useful camera/tile reference | **Medium**; cleaner/larger than target, so use geometry/projection more than final art | **C — structural reference** |
| OpenGameArt Isometric Building Interiors / RatMoleRat | CC0 | 64px-wide interior tiles; walls, floors, doors | Interior wall/floor construction and replaceable patterns | **Medium-high** for wall/floor grammar after rescale/resprite | **B/C — modify/reference** |
| OpenGameArt 1800+ Isometric Wall Tiles | CC0 | true 2:1 isometric wall tiles | Large wall-variant vocabulary; useful for wall edge/junction cases | **Medium**; quantity is useful but style must be rebuilt | **C — wall-system reference** |
| Kenney Isometric Blocks | CC0 | 130+ 2D isometric tiles + sheets/vector | Generic isometric tile construction and edge cases | **Low-medium visually**, useful for tile mechanics/reference | **C — structural reference** |

## Rejection rule
Do not import an asset merely because it is CC0. Reject or reference-only when:
- the low-poly/realistic identity remains visible after conversion;
- object proportions cannot coexist with Pocket Arcade Story-like compact density;
- projection fights the existing grid;
- rescaling destroys readability;
- it requires changing approved Slot Pachiro geometry to fit the pack.

## Transformation pipeline
For an accepted candidate:

`source asset → inspect silhouette/footprint/directions → map to logical footprint → fixed Slot Pachiro oblique projection → simplify geometry → compact/deform proportions → reduce palette → pixel/block edges → Slot Pachiro outline/shadow rules → compare against Pocket Arcade Story reference → runtime QA`

No external visual asset reaches production by skipping this pipeline.

## First practical targets
1. **Floor/wall grammar:** inspect 2D CC0 isometric pixel sets first because they are closest to the target representation.
2. **Small store equipment:** use Mini Arcade geometry only as source material for cabinets/vending/counter shapes, not as final low-poly art.
3. **Orientation library:** use Furniture Kit / 64×32 furniture for multi-direction footprint and silhouette reference.
4. **Canonical island:** retain approved geometry; apply only a common rendering language around/over it when a Kairo-style rule is proven.

## Runtime rule
Do not create another detached showroom. The next visual experiment must be applied to the existing Cell Lab / established game foundation, one coherent change at a time, followed by iPhone visual inspection and interaction QA before the next change.