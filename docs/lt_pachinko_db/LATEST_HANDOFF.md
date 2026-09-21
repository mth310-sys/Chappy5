# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- current machine files searched for duplicate `Pゾンビランドサガ` before write; no existing record found

## This relay — Added COMPLETE_CORE
### Pゾンビランドサガ
path: `docs/lt_pachinko_db/machines/2025-04-21_p_zombieland_saga.md`
- サミー / 型式 `PゾンビランドサガSCPC` / 2025-04-21 / 一種二種混合・ライトミドル。
- 通常約1/159.8。サガRUSH / LTチャンス中は約1/71.4、LT中約1/36.6。右打ち値はいずれも公開資料の定義を維持。
- 初当り3R約405個、50%でサガRUSHへ。
- サガRUSH: 90回＋残保留4、継続約76%。
- サガRUSH中10Rの約1/3で `サガRUSH LTチャンス`。同じ90回＋残保留4・約76%だが、10R比率とLT到達機会が異なるため別状態として保存。
- LT正式名称 `七福ヘドバンRUSH`。LTチャンス中10R時のヘドバンチャレンジ成功約1/2で突入。
- LTは10000回＋残保留4（実質次回まで）で、TOTAL継続約89.4%。定義はLT継続振り分け約87.8%＋残保留4個の引き戻し約12.8%を加味したもの。
- LT中大当りALL 10R（実質9R）約1215個払出。END停止→復活なし後も10R出玉を獲得し、残保留4個で非当選なら通常へ。
- 通常初当り基準の総LT到達率は高信頼資料で直接値を確認できなかったため、経路値から独自計算せずUNVERIFIED。
- P-WORLD/遊技通信、必勝本、一撃、なな徹、HAZUSEで照合。新規CONFLICTなし。

Sources:
- https://news.p-world.co.jp/articles/30213/yugitsushin
- https://hisshobon.com/machineinfo/96805/
- https://1geki.jp/pachinko/p_zonsaga/
- https://1geki.jp/pachinko/p_zonsaga/51/
- https://1geki.jp/pachinko/p_zonsaga/54/
- https://nana-press.com/kaiseki/machine/932/28036/
- https://hazuse.com/machine/pachinko/4P1637/

## Boundary state
### 2025-04-07 — CLOSED
Do not reprocess absent concrete QA issue.

### 2025-04-21 — OPEN
Regular schedule queue:
1. e東京喰種 — COMPLETE_CORE
2. Pゾンビランドサガ — **COMPLETE_CORE this relay**
3. P痛いのは嫌なので防御力に極振りしたいと思います。 — LT-positive candidate; **next machine**
4. PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver. — verify LT/non-LT before registration

Boundary special case still unresolved:
- `P【超甘LT】江頭2：50 in ナナシー 奇跡の99％` had limited Tokyo/Shinjuku advance introduction from 2025-04-21. Before closing 4/21, resolve canonical chronology treatment against later nationwide rollout using existing DB convention; do not silently omit or guess date.

## Effective DB state
Previous effective state: 85 records / 84 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE.
- machine records: **86**
- COMPLETE_CORE: **85**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth.

## Next restart point
**Continue 2025-04-21 with `P痛いのは嫌なので防御力に極振りしたいと思います。`. Then verify `PA異世界魔王と召喚少女の奴隷魔術 敏感99Ver.` for LT/non-LT; resolve `P【超甘LT】江頭2：50 in ナナシー 奇跡の99％` advance-introduction chronology; re-enumerate the full 2025-04-21 boundary from independent release calendars before closing it.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, search current machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate unpublished total LT arrival rates from route probabilities.
