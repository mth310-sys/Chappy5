# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: next introduction date after CLOSED 2025-02-03 boundary
- existing target duplicate check performed before write

## Previous boundary
### 2025-02-03 — CLOSED
Confirmed LT-positive records already processed:
- e閃乱カグラ
- Pとある魔術の禁書目録2 Light PREMIUM 2000ver.
- Pフィーバー戦姫絶唱シンフォギア4 199 ver.
- eルパン三世 ONE COLLECTION 超ブチヌキLTver.
- ぱちんこ シン・エヴァンゲリオン 129 LT ver.
- PLT OVERLORD魔導王光臨129ver.
- e蒼天の拳 羅龍

Do not redo these unless later QA finds a concrete defect.

## This relay — advance to 2025-02-17
Independent chronological calendar/search checks found the next LT-positive introduction boundary at **2025-02-17**.

2025-02-17 candidate queue confirmed:
1. `P緋弾のアリア ～緋緋神降臨～199Ver.` — LT-positive — **processed this relay**
2. `Pこの素晴らしい世界に祝福を！ラッキートリガー129緊急クエスト` — LT-positive — next
3. `Pデビルマン THE FINAL` — LT-positive — queued
4. `Pクイーンズブレイド4 ナナエルver.` — **LT非搭載** confirmed; boundary exclusion, do not register

### Added record
`docs/lt_pachinko_db/machines/2025-02-17_p_hidan_no_aria_hihishin_kourin_199ver.md`

Status: **COMPLETE_CORE**

Core facts:
- manufacturer: 藤商事
- formalModel: `P緋弾のアリア～緋緋神降臨～199Ver.FQU`
- canonical release: 2025-02-17
- game type: 1種2種混合 / 普図抽選 / LT
- normal: 約1/199.8
- 強襲任務: 約1/199.9, 104回, 当選期待度約41%
- initial payout: 約300個
- LBR total entry: 約44%（5%直行 + 強襲任務引き戻し込み）
- LBR: 約1/88.2, 120回, 継続約75%
- LT: `超LIGHTNING BULLET RUSH（超LBR）`
- LT route: 強襲任務/LBR中大当りの約15.5%「1500個+α」
- 超LBR: 198回, 継続約90%
- LT payout: 1500個 50% / 450個 50%（払出、V入賞時）
- total LT reach from normal initial jackpot: direct published value not found after multi-source research; **UNVERIFIED**, not inferred

Definition QA:
- 強襲任務約41% is its 104-spin hit expectation, not the same denominator as total LBR entry 約44%.
- LT 約15.5% is the right-side jackpot allocation in 強襲任務/LBR, not total LT reach from a normal initial jackpot.
- `1500個+α` is retained as published; α is not guessed into a fixed payout.
- 2024-03 original LT version is a separate spec and was not mixed.

## 2025-02-17 boundary status
**OPEN** — one record completed; continue same-date queue before moving forward.

### Explicit LT-negative exclusion
`Pクイーンズブレイド4 ナナエルver.`
- 2025-02-17
- model `Pクイーンズブレイド4V1A`
- HAZUSE explicitly states `ラッキートリガー 非搭載`
- do not create DB record

## Effective DB state
Previous effective state: 67 records / 66 COMPLETE_CORE / 1 CONFLICT.

Current effective state:
- machine records: **68**
- COMPLETE_CORE: **67**
- CONFLICT: **1**
- 2025-02-03 boundary: **CLOSED**
- 2025-02-17 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
Re-sync latest main first. Continue the **2025-02-17 same-date queue** with:

**NEXT: `Pこの素晴らしい世界に祝福を！ラッキートリガー129緊急クエスト`**

Already confirmed before handoff:
- 2025-02-17 introduction
- 豊丸産業
- normal 1/129.8 / right 1/39.9
- initial → このすばチャレンジ 100%, ST12 + 残保留4, 突破約33%
- lower `このすばRUSH`: ST55 + 残保留4, 約78%
- LT `祝福RUSH`: 実質次回, 継続92%
- routes: このすばチャレンジ中10R or このすばRUSH中大当りの一部

Do full source cross-check and distributions before writing; do not rely only on these pre-confirmed notes.

After that process `Pデビルマン THE FINAL`, then independently re-enumerate the complete 2025-02-17 pachinko candidate list before closing the boundary.

## Sources used / cross-checked this relay
- https://news.p-world.co.jp/articles/30024/yugitsushin — P緋弾のアリア199 industry announcement
- https://hisshobon.com/machineinfo/95975/ — P緋弾のアリア199 distributions
- https://p.hisshobon.jp/machine/4467/1/107335 — P緋弾のアリア199 basic spec
- https://www.p-world.co.jp/machine/database/10202 — P緋弾のアリア199 game flow/distributions
- https://hazuse.com/machine/pachinko/PX0266/ — P緋弾のアリア199 cross-check
- https://www.pachirinko.com/kishu.nen/kishujyouhou2025.top.html — chronological 2025 candidate calendar
- https://www.p-world.co.jp/machine/database/10201 — next candidate Pこのすば129 core structure pre-check
- https://news.p-world.co.jp/articles/30009/greenbelt — Pこのすば129 industry pre-check
- https://news.p-world.co.jp/articles/29921/yugitsushin — Pデビルマン THE FINAL industry pre-check
- https://hisshobon.com/machineinfo/96011/ — Pデビルマン THE FINAL basic spec pre-check
- https://hazuse.com/hd/4p1060/ — Pクイーンズブレイド4 ナナエルver. explicitly LT非搭載
