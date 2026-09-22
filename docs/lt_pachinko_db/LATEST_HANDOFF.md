# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9

## Current boundary — 2025-08-18
Candidate queue retained:
1. `e女神のカフェテラス` — COMPLETE_CORE
2. `eGODZILLA7 TYPE-CRASH` — COMPLETE_CORE
3. `P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39` — LT eligible, NOT YET WRITTEN

Calendar evidence retained:
- https://pachinko-curation.com/shindai_calendar/2/
- https://1geki.jp/newmachinecalender/202508/

### eGODZILLA7 TYPE-CRASH — COMPLETE_CORE this relay
- ニューギン / 型式 `eGODZILLA7M5` / 2025-08-18 / LT3.0 PLUS / 一種二種混合。
- 通常1/229.95、G-RUSH/LT中約1/107、UC中1/2.67。
- 初当り約300個。50% G-RUSH ST80（大当り突破約53%） / 50% G-TURN時短50（大当り突破約20%）。どちらも右打ち中1回大当りでLT `ULTIMATE G-RUSH`。
- LT ST160、継続約77.7%。通常遊技基準LT突入約1/635、初当りから約36.2%。パチマガスロマガ50億回転シミュレート約1/635.48。別解析「約37%」は丸め表記でCONFLICT扱いしない。
- LT中 1000個+LT 37.5% / ULTIMATE CHARGE+LT 62.5%。UC内訳 2000個36.6% / 3000個38.5% / 4000個19.1% / 5000個+α5.8%。2000～5000個は1000個×2～5回の一連の大当り合計払い出し。
- 遊タイム非搭載、コンプリート機能搭載。
- record: `docs/lt_pachinko_db/machines/2025-08-18_e_godzilla7_type_crash.md`
- commit: `46bee26eee4d9303f04aa2213ec9000d16498854`

Sources:
- https://p-johojima.jp/new_machine/post-9302/
- https://p-johojima.jp/machine_spec/post-9312/
- https://www.p-world.co.jp/machine/database/10320
- https://p.hisshobon.jp/machine/4569/1/110291
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/504/sm01.php
- https://p-johojima.jp/new_machine/post-7984/

## Next candidate already verified
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
Previous effective state: 123 machine records / 122 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **124**
- COMPLETE_CORE: **123**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-08-18 `P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39` is the next unprocessed LT machine. Complete it first. Then re-audit the full 2025-08-18 pachinko candidate boundary against at least two independent calendars; if no additional LT candidates exist, mark 2025-08-18 CLOSED and advance chronologically to the next actual introduction date.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.