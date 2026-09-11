更新日: 2026-09-12

## 現在地点
- recordCount: **1422**
- latestRecordAdded: **パチスロ零 — No.1422**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-07-05_pachislot-zero.md`
- chronologicalFrontier: **2021-07-05**
- frontierLatestMachine: **パチスロ零 — No.1422**
- schema: **resetBehavior v0.7**
- status: **2021-07-05_GROUP_CLOSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1421「新ハナビ」を確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおりNo.1422「パチスロ零」を追加。
- 2021-07-05群を再監査。ALL7は「新ハナビ / パチスロ零 / ぱちスロ沖ハナ-30」を同日欄に載せるが、「沖ハナ-30」は京楽発表・PiDEA・P-WORLD・パチビー・K-Naviで2021-04-19一部店舗テスト導入開始を確認済みの既出機。別型式/別スペック新台として重複追加しない。
- 同日群の別メーカー・別型式/PB・地域先行・延期/段階導入を再確認し、新規ユニーク候補を追加確認できなかったため **2021-07-05_GROUP_CLOSED**。
- 次の本線は2021-07-19。ALL7・イチカツ・当時動画/解析で **パチスロ東京レイヴンズ** を確認。次回No.1423候補とする。

## No.1422 — パチスロ零
- path: `docs/real_machine_db/machines/2021-07-05_pachislot-zero.md`
- manufacturer: **山佐**
- brand: **山佐ネクスト**
- formalModel: **Sパチスロ零YTFF**
- certificationNumber: **0S1431**
- releaseDate: **2021-07-05**
- generation/system: **6.1号機 / AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- firstHit: **1/265.1 / 1/247.7 / 1/231.6 / 1/212.6 / 1/197.0 / 1/181.6**
- payoutRate: **97.8 / 98.7 / 100.4 / 103.1 / 105.9 / 109.3%**
- baseGamesPer50: **約42G/50枚**
- AT純増: **約2.8枚/G（準備中約1.0枚/G）**
- normalCeiling: **有利区間移行後最大800G+αで逢魔刻**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_UNVERIFIED**

### resetBehavior v0.7 — No.1422
- 設定変更: **有利区間RESET / 天井G再計数 / 有利区間移行時にモード再抽選**。設定変更専用の固定短縮天井は十分な再探索後も確認できず。
- 通常モード: 通常は最大800G、チャンスA-Dは最大400G。引き戻しは有利区間引継ぎ時のみで最大300Gかつ逢魔刻。
- 朝一/公開数値: 有利区間移行後の設定1実戦/解析値は **1-100G累積18.46%（約20%） / 1-200G累積40.55%（約40%）**。設定変更専用値ではなく有利区間移行時共通値として保存。
- 据え置き: 有利区間継続中のゲーム数・モードは継続挙動として扱うが、本機専用の独立リセット表が見つからない箇所は `CARRY_OVER_EXPECTED` と明示し、断定を避けた。
- 純電源OFF→ON: 本機固有の天井G・モード/状態・有利区間の直接契約を、表記/型式/電断/据え置き/朝一で再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。据え置き一般論から補完しない。
- 変更判別: 通常時有利区間ランプ点灯型。未対策なら **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚** の推測材料。ただし前日消灯閉店・店舗対策等の例外があるため確定条件にはしない。
- ガックン: 本機固有の条件・発生率を十分な再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- reset専用モード振り分け: 公開表は有利区間移行時共通であり、設定変更専用表とは扱わない。

## 2021-07-05群 — CLOSED
1. **新ハナビ — No.1421 / DONE**
2. **パチスロ零 — No.1422 / DONE**
- `ぱちスロ沖ハナ-30` は2021-04-19一部店舗テスト導入開始の既出同一機。2021-07-05カレンダー掲載を新規レコードとして重複追加しない。

## 次回本線の再開地点
- 最新main再同期後、**2021-07-19群「パチスロ東京レイヴンズ」＝No.1423候補**から継続。
- 2021-07-19導入はALL7、イチカツ、1geki、当時紹介動画等で先行確認済み。
- 東京レイヴンズ処理後、同日群を全メーカー・別型式/PB・地域先行・延期/段階導入で再監査しCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_aqua-venus-30.md`（アクアビーナス30）→ `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_harem-ace.md`（もえろ!ハーレムエース）**。
- 既存性能値をやり直さず、既存 `COMPLETE_CORE` 判定を不用意に崩さずreset側のみ正式再探索する。

## GitHub保存
- No.1422追加 commit: `5fc3115a14fd3565c6d814f53e7a42507053d8d6`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1422 パチスロ零
- https://hazuse.com/machine/pachislot/0S1431/
- https://p-kn.com/slot/3612/
- https://nana-press.com/kaiseki/machine/135/
- https://nana-press.com/kaiseki/machine/135/4475/
- https://nana-press.com/kaiseki/machine/135/4165/
- https://nana-press.com/kaiseki/machine/135/4278/
- https://www.slopachi-quest.com/article/zero-tenjou/
- https://slotmethod.jp/archives/6948/
- https://www.pidea.jp/articles/1621323538
- https://web-greenbelt.jp/post-48704/

### 2021-07-05群監査 / 沖ハナ重複判定
- https://www.all7.jp/plans/index/2021/07
- https://www.pidea.jp/articles/1617860806
- https://news.p-world.co.jp/articles/16255/amusement
- https://www.pachibee.jp/machines/about/221040001
- https://p-kn.com/slot/3594/

### 次回境界 2021-07-19
- https://www.all7.jp/plans/index/2021/07
- https://ichikatsu.com/newslot/
- https://1geki.jp/slot/s_tokyoravens/
