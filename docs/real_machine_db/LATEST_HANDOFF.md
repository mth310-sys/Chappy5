更新日: 2026-09-11

## 現在地点
- recordCount: **1349**
- latestRecordAdded: **パチスロ 咲-Saki- — No.1349**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-04-06_saki.md`
- chronologicalFrontier: **2020-04-06**
- frontierLatestMachine: **パチスロ 咲-Saki- — No.1349**
- schema: **resetBehavior v0.7**
- status: **2020-04-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1348を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 開始時点で並行リレーにより前回チャット地点1344からmainが1348まで進行済みだったため、古い再開地点を捨てて最新mainへ同期。
- 2020-04-06群の残り **パチスロ 咲-Saki-** をNo.1349として追加。
- 4/6群は「スナイパイ71 / パチスロ 咲-Saki-」の2機で複数導入一覧が一致したためCLOSED。

## No.1349 — パチスロ 咲-Saki-
- path: `docs/real_machine_db/machines/2020-04-06_saki.md`
- manufacturer: **サンスリー（三洋グループ）**
- formalModel: **S咲-Saki-SH**
- certificationNumber: **9S1511**
- releaseDate canonical: **2020-04-06**
- generation/system: **6号機 / AT / 疑似ボーナスループ**
- payoutRate: **97.9 / 99.1 / 101.4 / 105.3 / 108.1 / 112.1%**
- BIG initial: **1/621.4 / 593.2 / 566.2 / 513.1 / 481.3 / 433.2**
- REG initial: **1/749.2 / 726.7 / 705.9 / 662.8 / 633.2 / 586.0**
- combined initial: **1/339.7 / 326.6 / 314.2 / 289.2 / 273.4 / 249.1**
- CZ: **1/498.4 / 482.8 / 472.4 / 445.2 / 424.5 / 391.2**
- base: **約51G/50枚**
- netIncrease: **約4.0枚/G**
- basicPayout: **REG 15G・平均約60枚 / BIG 30G・平均約120枚**
- ceiling: **有利区間移行後最大999G → BIG**
- coreStatus: **COMPLETE_CORE**
- overallReliability: **ANALYSIS_HIGH_WITH_OFFICIAL_AND_INDUSTRY_CONFIRMATION**

### resetBehavior v0.7 — No.1349
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- **設定変更=天井RESET / 内部状態RESET / 有利区間RESET**。
- **据え置き・電源OFF→ON=天井 / 内部状態CARRY_OVER**。
- 設定変更後は有利区間移行時に清澄モードと内部状態を再抽選。
- 通常時は有利区間ランプ消灯タイプのため、朝一消灯だけでは変更判別不可。
- 朝一の液晶カン牌数は見た目上0個。初回スイカ成立時に据え置きなら前日の内部カン数を加算した表示になり得る。
- 有利区間移行時に初期カン3個の振り分けが無いため、**朝一最初のスイカでカン成立なら据え置き濃厚**という当時解析を保存。
- 有利区間移行時の設定1清澄モード: 通常40.38 / 優希12.18 / まこ9.58 / 久13.53 / 和11.85 / 咲3.02 / のどっち9.45%。
- 優希モードは設定1 12.18%→設定6 23.71%、和モードは11.85%→24.17%。
- 有利区間移行時ボーナス高確は設定1 43.74%→設定6 60.78%。
- モード別天井は99〜999G。設定変更専用短縮テーブルではなく、有利区間移行時共通モード抽選として分離保存。
- 朝一開始ステージ、本機固有ガックン条件/率、設定2〜6の全モード完全振り分けは再探索後も固定できずUNVERIFIED/PUBLIC_FULL_TABLE_NOT_FOUND。

## No.1349 data-quality notes
- メーカー表記は「三洋」と「サンスリー」が混在。SANYO公式2020年機種一覧とPiDEA Xの「三洋物産の新台・サンスリー製」を根拠に canonical manufacturer を **サンスリー（三洋グループ）** とした。
- 有利区間ランプは通常時消灯仕様のため、朝一消灯=リセットという誤った一般化を避けた。

## 2020-04-06群監査
- 1. スナイパイ71 — **No.1348 / 処理済み**
- 2. パチスロ 咲-Saki- — **No.1349 / 処理済み**
- 当時導入直前情報、2020年導入日一覧、ぱちガブ当時動画説明で2機が一致。
- 群判定: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 次導入群の境界監査
- 次の明確な本線導入日は **2020-04-20**。
- 現時点の未処理候補:
  1. **押忍！サラリーマン番長2** — 2020-04-20
  2. **サンダーVライトニング** — 2020-04-20
- ALL7の当時予定一覧には「回胴黙示録カイジ～沼～」も4/20予定として残るが、実導入は後に延期され **2020-10-19**。4/20本線には登録しない。10月到達時に戻す。
- 4/20候補は処理時に同日全メーカー・延期機・別型式・PBを再監査してからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次の未formalized候補は `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）。
- その次は `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 既存COMPLETE_COREは崩さずreset側のみv0.7で正式化する。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1349を再取得。
2. **2020-04-20群の「押忍！サラリーマン番長2」をNo.1350候補として処理する。**
3. 続いて **サンダーVライトニング** を処理。
4. 同日全メーカー・別型式・別スペック・PB・延期機を監査して4/20群CLOSED可否を判定。
5. 遡及QAは `2007-04-15_yattane-harumi-chan4.md` から継続。

## 主要出典 — 取得日 2026-09-11
### No.1349
- SANYO公式機種一覧: https://www.sanyobussan.co.jp/products/slot.html
- PiDEA X: https://www.pidea.jp/articles/46%E5%B0%8E%E5%85%A5%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%92%B2-saki-%E7%B4%94%E5%A2%97%E7%B4%8440%E6%9E%9A%E3%81%AEat%E3%82%BF%E3%82%A4%E3%83%97
- HAZUSE: https://hazuse.com/machine/pachislot/9S1511/
- P-WORLD: https://www.p-world.co.jp/machine/database/9152
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/104557/
- スロナビ東京: https://noslotnolife.com/45297
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/santhree_slot/01/atg.php
- なな徹 清澄モード: https://nana-press.com/kaiseki/machine/56/1025/
- おスロおパチおいでやす: https://oslo-opachi.com/2020/03/19/saki-tennjyou/

### 4/6群・次群監査
- パチパチ情報部 4/6: https://pachi-jyouhoukyoku.hatenablog.com/entry/2020/04/06/190000
- スロパチクエスト 2020導入日一覧: https://www.slopachi-quest.com/article/2020-dounyuukishu/
- ALL7 2020年4月予定一覧: https://www.all7.jp/plans/index/2020/04
- サミーネットワークス（カイジ沼・2020年10月導入確認）: https://www.sammy-net.jp/news/2020/11/777townnet-37.html
