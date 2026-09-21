# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- existing target duplicate checks performed before writes

## This relay — completed 2025-02-17 queue
Added two COMPLETE_CORE records:

1. `docs/lt_pachinko_db/machines/2025-02-17_p_konosuba_lt129_emergency_quest.md`
2. `docs/lt_pachinko_db/machines/2025-02-17_p_devilman_the_final.md`

### Pこの素晴らしい世界に祝福を！ラッキートリガー129緊急クエスト
- formalModel: `Pこの素晴らしい世界に祝福を！VLT1`
- 豊丸産業 / 2025-02-17
- 1種2種混合 / normal 1/129.8 / right 1/39.9
- initial 7R約490個 → このすばチャレンジ100%
- このすばチャレンジ ST12+残4 / 突破約33%
- このすばRUSH ST55+残4 / 約78%
- LT `祝福RUSH` / 実質次回 / 92%
- チャレンジ中大当り33%が10R+LT、67%が4R+下位RUSH
- 下位RUSH中大当り1%が10R+LT（最終変動+残保留はチャレンジ振り分け）
- LT中は33% 10R+LT / 59% 4R+LT / 8% 4R+下位復帰
- normal initial jackpot基準の総LT到達率は直接値未確認、推測せずUNVERIFIED

### Pデビルマン THE FINAL
- formalModel: `PデビルマンN4-S`
- ニューギン / 2025-02-17
- 1種2種混合 / normal 1/129.77 / right 1/1.0
- RUSH total entry 56% = LT直行2% + 真悪魔RUSH54%
- 真悪魔RUSH継続88%
- LT `デデデRUSH BONUS` 継続94.5%
- 真悪魔RUSH中全大当りの2.00%でLT。7R当り分母では約7%と説明されるため分母差として整理
- LT中94.5%継続 / 5.5%で真悪魔RUSHへ復帰
- normal initial jackpot基準の最終的な総LT到達率は直接値未確認、推測せずUNVERIFIED
- 後発デカスタ179ver.とは分離

## 2025-02-17 boundary
**CLOSED** after independent calendar re-enumeration.

LT-positive machines at this boundary:
- P緋弾のアリア ～緋緋神降臨～199Ver. — existing COMPLETE_CORE
- Pこの素晴らしい世界に祝福を！ラッキートリガー129緊急クエスト — COMPLETE_CORE this relay
- Pデビルマン THE FINAL — COMPLETE_CORE this relay
- PLT OVERLORD魔導王光臨129ver. — already exists in current DB; do not duplicate. Note: one independent 2025 calendar lists this at 2025-02-17 while earlier handoff grouped it under 2025-02-03. Treat release-date discrepancy as a future date-QA item, not a reason to duplicate the machine record.

Explicit LT-negative exclusion:
- Pクイーンズブレイド4 ナナエルver. — LT非搭載; do not register.

## Effective DB state
Previous state from handoff: 68 records / 67 COMPLETE_CORE / 1 CONFLICT.

After this relay:
- machine records: **70**
- COMPLETE_CORE: **69**
- CONFLICT: **1**
- 2025-02-17 boundary: **CLOSED**
- INDEX remains stale and must not override this handoff/current machine files.

## Next chronological boundary — 2025-03-03
Independent search confirms multiple LT-positive machines introduced 2025-03-03. Start with the queue below and re-enumerate the full same-date calendar before closing it.

**NEXT: `P FAIRY TAIL これが七炎竜の力だ 89ver.`**
Pre-confirmed only; full cross-check required before write:
- 藤商事
- normal about 1/89 / right about 1/59
- RUSH entry 50%
- FAIRY RUSH ST50 + 残4, continuation about 60%
- LT `七炎竜RUSH` ST120 + 残4, continuation about 88%
- lower RUSH 10R+α allocation 12.5% → 一夜モード → LT

Other confirmed LT-positive 2025-03-03 candidates to process after FAIRY TAIL:
- `PA大海物語5ブラックLT99ver.` — 三洋 / 1/99.9 / LT `GOLDパールRUSH HYPER` about 93%
- `P俺の妹がこんなに可愛いわけがない。` — 京楽 / 1/199.9 / lower RUSH about 80% / LT long RUSH TOTAL about 92%
- `Pリングにかけろ1` — ニューギン / LT-positive; full source QA required
- `eFダンジョンに出会いを求めるのは間違っているだろうか2` — SANKYO / direct-LT smart pachinko; full source QA required

Do not assume this list is exhaustive. Re-enumerate all 2025-03-03 pachinko introductions from independent calendars before closing boundary.

## Sources used / cross-checked this relay
Pこのすば129:
- https://news.p-world.co.jp/articles/30009/greenbelt
- https://www.p-world.co.jp/machine/database/10201
- https://1geki.jp/pachinko/p_konosuba129/
- https://1geki.jp/pachinko/p_konosuba129/51/
- https://1geki.jp/pachinko/p_konosuba129/54/
- https://nana-press.com/kaiseki/machine/902/27007/

Pデビルマン THE FINAL:
- https://news.p-world.co.jp/articles/29921/yugitsushin
- https://hisshobon.com/machineinfo/96011/
- https://hisshobon.com/machineinfo/96012/
- https://1geki.jp/pachinko/p_devilman_tf129/
- https://www.p-world.co.jp/machine/database/10200
- https://amusement-japan.co.jp/article/detail/10004692/

Boundary / next-date discovery:
- https://pachinko-spec.info/start/149205/ — 2025-02-17 calendar re-enumeration
- https://chonborista.com/pachinko/fujishouji/230680/ — FAIRY TAIL 89 2025-03-03 pre-check
- https://hazuse.com/machine/pachinko/PX0270/ — PA大海5ブラックLT99 pre-check
- https://marutto-w.com/industry_news/20250304-3 — P俺妹 2025-03-03 pre-check
