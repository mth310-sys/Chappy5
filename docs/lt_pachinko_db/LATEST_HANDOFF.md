# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: 2025-02-03 `PLT OVERLORD魔導王光臨129ver.`
- existing target duplicate check performed before write

## This relay
### Added: PLT OVERLORD魔導王光臨129ver.
- path: `docs/lt_pachinko_db/machines/2025-02-03_plt_overlord_129.md`
- manufacturer: サンセイアールアンドディ
- formalModel: PLT OVERLORD魔導王光臨ARC
- canonical release: 2025-02-03
- type: 一種二種混合 / 1回転下位RUSH→LTループ型
- 通常時実質: 約1/129.7
- 右打ち実質: 約1/1.398
- 下位 `シャルティアバトル`: 突入約50%、時短1回、継続約71.5%
- LT `OVERMAX`: 時短200回、継続約89.5%
- LT entry: シャルティアバトル中大当り時 約9.5%
- payout: 初当り2R約200個。右打ちはALL10R約1000個（払出）
- 下位振り分け: 10R+LT200回 約9.5% / 10R+下位1回 約90.5%
- LT振り分け: 10R+LT200回 約89.5% / 10R+通常 約10.5%
- status: COMPLETE_CORE
- conflicts: none
- missing: 通常初当り基準の総LT到達率のみ直接公表値未確認のためUNVERIFIED。経路値から独自合算しない。

Cross-check: 遊技通信/P-WORLD業界ニュース、P-WORLD機種DB、必勝本、HAZUSE、パチセブン、なな徹、一撃を横断。型式、導入日、確率、下位/LT継続、時短1/200回、特図1/特図2振り分けは複数一致。CLIMAX BATTLE2000の勝利期待度約89.5%はLT継続側の定義であり、LT突入振り分け約9.5%とは分離した。

## 2025-02-03 boundary remains OPEN
Same-date re-enumeration continues. Search confirms previously registered/processed LT-positive candidates including `e閃乱カグラ`, `Pとある魔術の禁書目録2 Light PREMIUM 2000ver.`, `eルパン三世 ONE COLLECTION 超ブチヌキLTver.`, `ぱちんこ シン・エヴァンゲリオン 129 LT ver.` and this OVERLORD129. Do not close the boundary until an independent complete same-date candidate sweep is finished against existing machine files.

## Effective DB state
Previous handoff:
- machine records: 65
- COMPLETE_CORE: 64
- CONFLICT: 1

After this relay:
- machine records: **66**
- COMPLETE_CORE: **65**
- CONFLICT: **1**
- 2025-02-03 boundary: **OPEN**
- `INDEX.md` remains stale and must not override this handoff/current machine files.

## Next restart point
Re-sync latest main first. Continue **2025-02-03 same-date omission audit**. Cross-check a complete 2025-02-03 new-machine list against `docs/lt_pachinko_db/machines/`; register only LT-positive omissions. If no further LT-positive omissions remain after multi-source enumeration, mark 2025-02-03 CLOSED and advance chronologically to the next introduction date.

## Sources used this relay
- https://news.p-world.co.jp/articles/29830/yugitsushin
- https://www.p-world.co.jp/machine/database/10194
- https://hisshobon.com/machineinfo/95544/
- https://p.hisshobon.jp/machine/4447/1/106732
- https://p.hisshobon.jp/machine/4447/1/106735
- https://hazuse.com/machine/pachinko/PX0259/
- https://pachiseven.jp/machines_v2/7092
- https://nana-press.com/kaiseki/machine/905/26556/
- https://1geki.jp/pachinko/p_lt_overlord129/52/

## Same-date audit evidence sampled
- https://1geki.jp/pachinko/e_senrankagura/
- https://hazuse.com/machine/pachinko/PX0262/
