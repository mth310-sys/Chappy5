更新日: 2026-09-12

## 現在地点
- recordCount: **1421**
- latestRecordAdded: **新ハナビ — No.1421**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-07-05_shin-hanabi.md`
- chronologicalFrontier: **2021-07-05**
- frontierLatestMachine: **新ハナビ — No.1421**
- schema: **resetBehavior v0.7**
- status: **2021-07-05_GROUP_OPEN_1_OF_2_KNOWN_DONE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1420「ノーゲーム・ノーライフ THE SLOT」を確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 2021-06-15〜07-04境界を再確認し、次の本線を2021-07-05群と固定。
- No.1421「新ハナビ」を追加。A+RT機のため、AT機向けの有利区間・天井項目を推測で埋めず、RT状態の設定変更/据え置き/純電断契約をresetBehaviorの中心として記録。
- 2021-07-05群は既知2機（新ハナビ / パチスロ零）のうち新ハナビのみ完了。群はOPENを維持。

## No.1421 — 新ハナビ
- path: `docs/real_machine_db/machines/2021-07-05_shin-hanabi.md`
- manufacturer: **エレコ**
- formalModel: **S／新ハナビR／HA**
- certificationNumber: **1S0226**
- releaseDate: **2021-07-05**
- generation/system: **6.1号機 / A+RT / リアルボーナス＋RT**
- settings: **1 / 2 / 5 / 6**
- BIG: **1/277.7 / 1/268.6 / 1/256.0 / 1/248.2**
- REG: **1/356.2 / 1/331.0 / 1/306.2 / 1/280.1**
- combined: **1/156.0 / 1/148.3 / 1/139.4 / 1/131.6**
- payoutRate market average: **98.1 / 99.9 / 102.3 / 104.6%**
- payoutRate full strategy: **102.0 / 104.0 / 106.5 / 109.0%**
- baseGamesPer50: **約44G/50枚**
- BIG max: **202枚**
- REG max: **112枚**
- RT: **花火チャレンジ最大20G（約0.3枚/G）→JAC IN後 花火GAME 20G（約0.6枚/G）**
- ceiling: **NONE**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_RT_STATE**

### resetBehavior v0.7 — No.1421
- 設定変更: **RT状態を通常状態へRESET**。天井は非搭載。朝一専用の固定短縮・モード優遇・初当たり優遇は確認できず。
- 据え置き/純電断: **RT状態CARRY_OVER**。前日RT中閉店かつ朝一RT継続なら据え置き材料になり得る。
- 有利区間: A+RTの公開ゲームフロー上、物差しDBとして有用な独立リセット契約を確認できないため **NOT_APPLICABLE_TO_PUBLIC_GAME_FLOW**。推測補完しない。
- ガックン: 設定変更・電源OFF→ONとも朝一1G目は **しない** とする解析を採用。
- ユニメモ: 設定変更でも残るため単独判別不可。
- 公開朝一数値: 固定短縮天井・専用モード振り分け・専用初当たり率などは資料系統を変えて再探索しても確認できず `NO_PUBLIC_FIXED_RESET_SPECIFIC_NUMERIC_TABLE_FOUND_AFTER_RESEARCH`。
- 日付競合: イチカツの導入日欄 `2020-07-05` は誤記。2021-07-05を当時業界記事・HAZUSE・複数DBで照合しcanonical採用。

## 2021-07-05群 — OPEN
1. **新ハナビ — No.1421 / DONE**
2. **パチスロ零 — No.1422候補 / TODO**

## 次回本線の再開地点
- 最新main再同期後、**2021-07-05群「パチスロ零」＝No.1422候補**から継続。
- パチスロ零処理後、2021-07-05群をメーカー別一覧・別型式/PB・地域先行・延期/段階導入で再監査し、CLOSED可否を判定する。
- 群CLOSED後は次の導入日境界へ進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_aqua-venus-30.md`（アクアビーナス30）→ `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_harem-ace.md`（もえろ!ハーレムエース）**。
- 既存性能値をやり直さず、既存 `COMPLETE_CORE` 判定を不用意に崩さずreset側のみ正式再探索する。

## GitHub保存
- No.1421追加 commit: `19653459f1d90cbf87bbdd9202226ecdef14cb5a`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1421 新ハナビ
- https://hazuse.com/machine/pachislot/1S0226/genre/201/
- https://hazuse.com/machine/pachislot/1S0226/genre/203/
- https://news.p-world.co.jp/articles/17137/nippon
- https://ichikatsu.com/shinhanabi/
- https://www.nankaikoya.jp/shinhanabi-settei/
- https://slotters.jp/shinhanabi/

### 群監査 / 次回境界
- https://ichikatsu.com/newslot/
- https://www.all7.jp/plans/index/2021/07
