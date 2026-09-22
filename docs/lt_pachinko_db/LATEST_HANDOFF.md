# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: after CLOSED 2025-08-04 boundary
- duplicate search performed before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9

## This relay — next chronological boundary
Independent calendar re-enumeration identifies **2025-08-18** as the next pachinko introduction boundary after 2025-08-04. Candidate list confirmed from calendar evidence:
1. `e女神のカフェテラス`
2. `eGODZILLA7 TYPE-CRASH`
3. `P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39`

Calendar evidence:
- https://pachinko-curation.com/shindai_calendar/2/
- https://1geki.jp/newmachinecalender/202508/

### e女神のカフェテラス — COMPLETE_CORE
- JFJ（藤商事グループ） / 2025-08-18 / LT3.0 PLUS / BIGスタート。
- 図柄揃い約1/399（解析1/399.8）。大当り約1/348はTERRACE CHARGEからの突入を含む別定義。TERRACE CHARGE約1/2721。
- 下位RUSHなし。RUSH=LT `女神の交響曲 TIME`。図柄揃い時LT突入約40%。7図柄直行、その他図柄はハーレムチャレンジ成功、TERRACE CHARGEの一部にもLT昇格経路あり。
- LTはST100回、当選約1/73、継続約75%。
- 右打ち主要振り分け: 4500個+α 25% / 3000個 50% / 1500個 25%、すべてLT継続。3000/4500+αは複数回大当り合計表記として分離。
- 通常遊技全体基準の総LT到達率、TERRACE CHARGE→LT具体割合は直接値未確認。独自算出せずUNVERIFIED。
- 正式型式名は今回確認できずUNVERIFIED。
- record: `docs/lt_pachinko_db/machines/2025-08-18_e_megami_no_cafe_terrace.md`
- commit: `bba85fd0f0034e6919274d959daa04f85991fd68`

Sources:
- https://p-johojima.jp/new_machine/post-10306/
- https://p-johojima.jp/machine_spec/post-10366/
- https://www.atari7.com/pachinko/e-megamicafe.php
- https://slothack.net/matome/166344/

## Discovery already verified for next candidates
### eGODZILLA7 TYPE-CRASH — LT eligible, NOT YET WRITTEN
- Newgin / 型式 `eGODZILLA7M5` / 2025-08-18 / LT3.0 PLUS / 一種二種混合。
- 通常1/229.95、G-RUSH/LT中約1/107。
- 初当り50% G-RUSH ST80（突破約53%） / 50% G-TURN時短50（突破約20%）。両経路とも右打ち当選でLT `ULTIMATE G-RUSH`。
- LT ST160、継続約77.7%。解析資料にLT突入率約37%、別資料に約1/635（初当りから約36.2%）の表記あり。丸め/定義を確認して保存すること。
- LT中約37.5% 1000個、約62.5% ULTIMATE CHARGE。UC内訳2000個36.6% / 3000個38.5% / 4000個19.1% / 5000個+α5.8%。
Sources:
- https://1geki.jp/pachinko/e_godzilla7_tc/
- https://www.p-world.co.jp/machine/database/10320
- https://chonborista.com/pachinko/newgin/238597/

### P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39 — LT eligible, NOT YET WRITTEN
- 豊丸産業 / 型式 `P豊丸のとあるパチンコにしみけん参戦 AX2` / 2025-08-18 / LT3.0 PLUS。
- 通常1/39.9、右1/35.4。通常内部モードA-DでRUSH突入/性能が変化。A-C突入25%、D突入100%。
- RUSHは10/20/40/75回。継続約33% / 50% / 72% / 90%。LT正式名称 `超満開JOURNEY`、75回、約90%。
- モードD初当りの約50%またはRUSH中大当り約7.4%からLT。
- 右打ち大当り50%が約1500個。モードアップ構造をゲームフローに正確に保存すること。
Sources:
- https://news.p-world.co.jp/articles/31719/greenbelt
- https://www.p-world.co.jp/machine/database/10294
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/317/kh02.php
- https://p-kn.com/pachinko/4363/

## Effective DB state
Previous effective state: 122 machine records / 121 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **123**
- COMPLETE_CORE: **122**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-08-18 `eGODZILLA7 TYPE-CRASH` is the next unprocessed LT machine. Complete it first, then `P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39`. After both are written, re-audit the full 2025-08-18 pachinko candidate boundary against at least two independent calendars; if no additional candidates exist, mark 2025-08-18 CLOSED and advance chronologically to the next actual introduction date.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.