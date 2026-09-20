# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 2 / boundary QA + chronological queue advance

## Read before work
- latest main README: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked (INDEX is stale relative to relay records)
- previous `LATEST_HANDOFF.md` / Relay 1: checked
- `2024-11-18_p_nyanko_daisensou_tayousei_no_neko.md`: checked

## This relay
Closed the 2024-11-18 same-day boundary and advanced the chronological queue to 2024-12-02 discovery.

### 2024-11-18 boundary closure
Calendar re-enumeration found only one pachinko introduction on 2024-11-18 among the enumerated new machines: `P にゃんこ大戦争 多様性のネコ`; the other listed 11/18 introductions were slots. Multiple independent pachinko sources also identify this machine as the 11/18 LT introduction. No additional 2024-11-18 LT pachinko model was found after alternate date/name/LT searches.

Therefore the currently enumerated **2024-11-18 boundary is closed** with one LT machine already registered COMPLETE_CORE:
- `P にゃんこ大戦争 多様性のネコ` / 京楽産業.

Cross-check retained:
- 11/18 introduction
- LT equipped / lower RUSH absent
- 降臨ガチャ about 1/155, success about 1/4
- SUNRISE BONUS 3000 payout, then LT judgment about 50%
- LT `神域ULTIMATE`: symbol hit about 1/26.4, end symbol about 1/155, continuation about 88% including residual-hold return, ALL 1500 payout
- no new conflict found

### Next chronological introduction date discovered: 2024-12-02
Confirmed LT candidates requiring one-by-one record collection / QA:
1. `P GO!GO!郷～豪遊の5～` / ニューギン — LT confirmed; 1/99.9, lower RUSH about70%, LT about92.3%; notable route: 遊タイム299回転消化からLT直行.
2. `e大工の源さん超韋駄天2 フルスイングLT` / 三洋物産 — LT confirmed; RUSH entry equals LT activation; total normal probability about1/199.8, RUSH about52%, continuation about96%.
3. `P ToLOVEるダークネス 199ver.` / 平和 — LT confirmed; 1/199.8, RUSH60% / about76.7%, LT about88.5%; LT route includes RUSH-side 10R sequencing/direct allocation details requiring careful source definition.
4. `PシャカラッシュZ` / マルホン工業 — LT confirmed; 1/197.4, RUSH100%, lower about70%, `Z超RUSH` about93.5%.
5. `P真・一騎当千～桃園の誓い～199LTver.` / D-light / 大一商会系 — LT candidate confirmed by multiple detailed LT sources; full core/LT allocation still to collect.
6. `Pえとたま2 神祭` / ユニバーサル系 — LT confirmed; 1/199.8, RUSH about50%, lower about80%, RUSH-side hit 12% route to LT, LT about90%; full allocation still to collect.

Do not assume this six-item discovery list is exhaustive until the 2024-12-02 calendar boundary is re-enumerated during collection.

## Effective DB state
- machine records remain **36**
- COMPLETE_CORE remains **35**
- CONFLICT remains **1** (`P GO!GO!郷 革命の5`)
- no new machine record was added this relay because the work product was boundary closure + next-date discovery
- INDEX remains stale relative to relay records; integrate after the next batch/date boundary to avoid overwriting newer relay state

## Next restart point
Start **2024-12-02**, beginning with `P GO!GO!郷～豪遊の5～`, while first re-reading latest main and re-enumerating the 12/02 boundary.

Collection requirements remain: basic spec, RUSH structure, LT name/route/rate/continuation, payout allocation, time-shortening/ST/special systems, game flow, sources, retrieved date, confidence; no inferred missing values; conflicts stay CONFLICT.

## Sources used this relay
### 2024-11-18 boundary
- https://www.all7.jp/plans/index/2024/11 — monthly introduction calendar; 11/18 enumerates Pにゃんこ大戦争 as the pachinko introduction among listed machines
- https://www.pachibee.jp/machines/index/124100002 — 11/18 date, LT equipment, basic spec and residual-hold definitions
- https://www.p-world.co.jp/machine/database/10122 — 11/18 machine page / LT cross-check
- https://1geki.jp/pachinko/p_nyankod_tn/ — date/type/model cross-check
- https://nana-press.com/kaiseki/machine/840/ — one-kind/two-kind, LT, game-flow cross-check

### 2024-12-02 discovery
- https://web-greenbelt.jp/post-90880/ — P GO!GO!郷 豪遊の5: 12/2, LT, 遊タイム→LT, RUSH/LT continuation
- https://news.p-world.co.jp/articles/29687/greenbelt — e大工の源さん超韋駄天2 フルスイングLT: 12/2, RUSH=LT, 96%
- https://chonborista.com/pachinko/sanyo/224306/ — e源さん detailed basic spec cross-check
- https://pachinko-curation.com/50701/ — P ToLOVEるダークネス 199: 12/2 and LT confirmation
- https://pachinkoslot-saisoku.online/ptoloveru-lt/ — ToLOVEる detailed RUSH/LT structure
- https://1geki.jp/pachinko/p_shakarushz/ — PシャカラッシュZ: 12/2, LT, RUSH/LT rates
- https://hide-expectedvalue.com/2024/7086/patinko/ — P真・一騎当千199LT: 12/2 LT-spec discovery
- https://pachinkoslot-saisoku.online/petotama2-kami/ — Pえとたま2 神祭: 12/2 LT-spec discovery
