# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX is stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-01-20 same-date boundary audit (`Pハネモノ ファミリースタジアム` + re-enumeration)
- duplicate check performed before write

## This relay
### 2025-01-20 boundary audit
- `Pハネモノ ファミリースタジアム`: **LT非搭載**を解析資料で明示確認したためDB登録対象外。必勝本基本スペックが「ラッキートリガー 非搭載」と明記。2025-01-20導入も複数資料一致。
- 1/20の再列挙を実施し、既登録のLT対象（花の慶次 裂 蓮極129Ver.、ブラックラグーン4 EXTRA BULLET 129ver.等）以外に新規LT-positiveを確認できなかった。
- よって **2025-01-20 boundary CLOSED**。

### Added: e蒼天の拳 羅龍
- path: `docs/lt_pachinko_db/machines/2025-02-03_e_souten_no_ken_raryu.md`
- manufacturer: サミー
- formalModel: e蒼天の拳羅龍SREN
- release: 2025-02-03
- type: スマパチ / 一種二種混合 / 普図ST / 直LT
- 図柄揃い: 約1/399.1
- 羅龍チャージ: 約1/372.8（約0.2%でLT）
- LT: `真・蒼拳RUSH`
- LT route: 図柄揃い50%直行 / 非突入後時短50回の引き戻し / 羅龍チャージ約0.2%
- LT total entry: 約57%（時短引き戻し込み。詳細資料約57.3%）
- LT: ST140回、約80%継続（詳細約79.5%、2連目以降1G連込み）
- LT payout: ALL約2400個（約1200個×2）、うち10%は1G連でさらに約2400個
- status: COMPLETE_CORE
- conflicts: none

Cross-check: Amusement Japan、必勝本、一撃、なな徹を横断。約57%は図柄揃い50%直行率と混同せず、時短引き戻し込みTOTALとして保存。

## 2025-02-03 same-date discovery
導入候補を再列挙。
- `e蒼天の拳 羅龍`: LT-positive → 今回登録済み。
- `e閃乱カグラ`: **LT-positive**。一撃でスマパチ/LT/一種二種混合、導入2025-02-03、型式 e閃乱カグラLTM-JF、RUSH突入=LT発動を確認。次回最優先。
- `P愛の不時着`: LT非搭載。HAZUSEが型式P愛の不時着MF、導入2025-02-03、ラッキートリガー非搭載と明記。登録対象外。
- `P冬のソナタ My Memory`: LT-positive根拠なし。既存資料では確変/時短型として確認。DBへ先行登録しない。

## Effective DB state
Previous handoff:
- machine records: 59
- COMPLETE_CORE: 58
- CONFLICT: 1

After this relay:
- machine records: **60**
- COMPLETE_CORE: **59**
- CONFLICT: **1**
- 2025-01-20 boundary: **CLOSED**
- 2025-02-03 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
Re-sync latest main first. Continue **2025-02-03** with **`e閃乱カグラ`** as the next confirmed LT-positive machine. Collect full core/LT structure and cross-check before write. Then independently re-enumerate the remaining 2025-02-03 introductions; register only positive-LT machines. If none remain, close 2025-02-03 and advance chronologically.

## Sources used this relay
- https://hisshobon.com/machineinfo/95453/ — Pハネモノ ファミリースタジアム LT非搭載
- https://www.all7.jp/plans/index/2025/01 — 2025-01-20導入列挙
- https://www.all7.jp/plans/index/2025/02 — 2025-02-03導入列挙
- https://www.amusement-japan.co.jp/article/detail/10004627/ — e蒼天の拳 羅龍
- https://hisshobon.com/machineinfo/95631/ — e蒼天の拳 羅龍 基本スペック
- https://hisshobon.com/machineinfo/95633/ — e蒼天の拳 羅龍 LT経路
- https://nana-press.com/kaiseki/machine/881/26080/ — e蒼天の拳 羅龍 振り分け
- https://1geki.jp/pachinko/e_soutenraryu/ — e蒼天の拳 羅龍 型式/照合
- https://1geki.jp/pachinko/e_senrankagura/ — e閃乱カグラ LT-positive / 次回候補
- https://hazuse.com/hd/4p1252/ — P愛の不時着 LT非搭載
