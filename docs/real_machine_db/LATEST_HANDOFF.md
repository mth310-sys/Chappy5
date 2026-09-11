更新日: 2026-09-11

## 現在地点
- recordCount: **1347**
- latestRecordAdded: **パチスロ 新鬼武者～DAWN OF DREAMS～ — No.1347**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-23_shin-onimusha-dawn-of-dreams.md`
- chronologicalFrontier: **2020-03-23**
- frontierLatestMachine: **パチスロ 新鬼武者～DAWN OF DREAMS～ — No.1347**
- schema: **resetBehavior v0.7**
- status: **2020-03-23_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1346を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正とした。
- 直前handoff指定の **2020-03-23「新鬼武者～DAWN OF DREAMS～」**をNo.1347として追加。
- 遊技日本、HAZUSE、1geki、K-Navi、当時導入一覧を再照合し、導入日・型式・検定番号・性能コア・resetBehaviorを固定。
- 2020-03-23同日群は複数導入一覧で同機1機と一致したため **CLOSED**。
- 次の明確な全国導入群は **2020-04-06**。現時点の確認候補は **スナイパイ71 / パチスロ 咲-Saki-**。

## No.1347 — パチスロ 新鬼武者～DAWN OF DREAMS～
- path: `docs/real_machine_db/machines/2020-03-23_shin-onimusha-dawn-of-dreams.md`
- manufacturer: **エンターライズ**
- formalModel: **S新鬼武者ZC**
- certificationNumber: **9S1474**
- releaseDate canonical: **2020-03-23**
- generation/system: **6号機 / AT / 疑似ボーナス**
- payoutRate: **97.9 / 99.4 / 100.8 / 103.6 / 105.7 / 110.0%**
- BONUSInitialHit: **1/299.8 / 297.8 / 272.7 / 258.3 / 226.3 / 161.0**
- ATInitialHit: **1/786.0 / 603.7 / 694.7 / 495.3 / 562.6 / 324.7**
- base: **約51G/50枚**
- netIncrease: **約3.0枚/G**
- ceiling: **有利区間移行後777G+前兆**
- coreStatus: **COMPLETE_CORE**
- overallReliability: **ANALYSIS_HIGH_WITH_INDUSTRY_CONFIRMATION**

### resetBehavior v0.7 — No.1347
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- **設定変更=天井G数RESET / 内部状態RESET / 有利区間RESET / 非有利区間開始**。
- **電源OFF→ON=天井G数 / 内部状態 / 有利区間CARRY_OVER**。
- 据え置きは設定変更を伴わない電断契約に基づき主要内部進行をCARRY_OVERとして整理し、独立語の直接表がない点を注記。
- 設定変更・純電断とも液晶開始は **桜道ステージ（昼）**。
- 通常時は有利区間ランプ消灯型のため、ランプ単独で変更判別不可。
- **設定変更でもガックンしない**（1geki）。期待値見える化も実戦上ガックン判別不可とする。
- リセット専用固定短縮天井・朝一専用当選率は確認できず、推測補完していない。
- 有利区間移行時の低確/高確/超高確振り分けは公開値として保存。ただし設定変更専用値ではなく共通契約として分離。

## 2020-03-23群監査
- 1. パチスロ 新鬼武者～DAWN OF DREAMS～ — **No.1347 / 処理済み**
- 遊技日本は2020-03-23全国導入開始を明記。
- K-Navi、当時導入直前一覧も3/23群を同機として掲載。
- 同日パチスロ追加候補を複数系統で再探索したが確認できず。
- 群判定: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- `2007-04-15_yattane-harumi-chan.md`（やったネ！はるみちゃん）は最新mainで **PARTIAL_RESEARCH_EXHAUSTED** へ正式化済みであることを確認。
- Git追加履歴を再確認し、次の未formalized候補は **`docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）**。
- 同ファイルは `status: COMPLETE_CORE` / `qaResetBehavior: PARTIAL`。性能完了判定は維持し、次回reset側のみ再探索・正式化する。
- その次のGit追加候補として **`docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）** も確認。こちらも既存COMPLETE_COREを崩さずreset QAを独立処理する。

## 次導入群監査
- 2020-04-06候補: **スナイパイ71 / パチスロ 咲-Saki-**。
- 当時導入直前情報は4/6パチスロを上記2機と明記。
- 4月導入一覧も併用し、次回は全メーカー・別型式・別スペック・PB・地域差まで再監査して最初の未処理をNo.1348候補として処理する。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1347を再取得。
2. **2020-04-06群を再監査し、最初の未処理（現時点候補: スナイパイ71）をNo.1348候補として処理。**
3. 続いてパチスロ 咲-Saki-を処理し、4/6群CLOSED可否を判定。
4. 遡及QAは **`2007-04-15_yattane-harumi-chan4.md`** から再開し、resetBehaviorをv0.7で正式化。既存`COMPLETE_CORE`は維持。
5. その後 **`2007-04-15_yattane-harumi-chan-30.md`** へGit追加順で進む。

## 主要出典 — 取得日 2026-09-11
### No.1347
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-33962/
- HAZUSE 機種DB/天井: https://hazuse.com/machine/pachislot/9S1474/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_sonimusya/3/
- 1geki 状態移行: https://1geki.jp/slot/s_sonimusya/44/
- スロパチクエスト 天井/朝一: https://www.slopachi-quest.com/article/shinonimusha-dawn-of-dreams-tenjou/
- K-Navi: https://p-kn.com/slot/3372/
- すろぬー: https://slonuu.com/pg/s-sinonidod
- 期待値見える化: https://slotjin.com/tenjoukitaichi/shinonimusha/

### 2020-03-23 / 次導入群監査
- 当時3/23導入直前情報: https://pachi-jyouhoukyoku.hatenablog.com/entry/2020/03/23/224927
- 当時4/6導入直前情報: https://pachi-jyouhoukyoku.hatenablog.com/entry/2020/04/06/190000
- ALL7 2020年4月導入一覧: https://www.all7.jp/plans/index/2020/04
