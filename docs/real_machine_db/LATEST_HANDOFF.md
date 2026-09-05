# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **704**
- latestMachineAdded: **バイオハザード5**（エンターライズ）
- latestRecord: `docs/real_machine_db/machines/2012-12-03_biohazard-5.md`
- chronologicalFrontier: **2012-12-03**
- frontierLatestExactDateMachine: **バイオハザード5**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-12-03_GROUP__NEXT_HIHODEN_TAIYO**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-11-19_qrogos-2.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **703** / chronologicalFrontier **2012-11-19** / 11-19群CLOSED / 次候補バイオハザード5。
- repo重複検索で「バイオハザード5」既存レコードなしを確認。
- 2012-11-20〜12-02境界を日付表記・新台一覧・HAZUSE/K-Navi系統で再監査し、今回範囲では12/03より前の未登録機を新規確認できなかったため、**704件目: バイオハザード5（エンターライズ）** を登録。

## 今回追加 — バイオハザード5

### 性能コア

- releaseDate本線: **2012-12-03**。HAZUSE・K-Naviが一致。パチビー・パチスロ解析ガイド等は **2012-12-10**、フィールズ公式は2012年12月導入予定までのため `CONFLICT_2012-12-03_VS_2012-12-10` を保持。
- modelName: **バイオハザード5Z** / approvalNumber: **2S0907**。
- 機械割: **97.2 / 98.9 / 100.3 / 104.4 / 110.8 / 119.2%**。複数解析・5号機クロニクルで一致。
- ART「HAZARD RUSH」初当たり: **1/273.9 / 247.1 / 263.2 / 229.2 / 202.0 / 152.8**。P-WORLD・パチスロ解析ガイド一致。
- ART「HAZARD RUSH」: **初期50～300G+α / 純増約+2.3枚/G**。
- 通常時モード: **通常A / 通常B / 通常C / 天国 / 超天国**。通常A～Cは最大999G、天国系は99G天井。
- 50枚ベースは2012年版に限定した直接値を、機種名/型式/略称×「50枚/1000円/コイン持ち/ベース/回転数」で再探索したが確定できず **UNVERIFIED_AFTER_RESEARCH**。2025年スマスロ版33G/50枚は流用していない。

### resetBehavior v0.7

- `settingChangeBehavior`: **天井G再セット / モード再抽選 / 内部状態再抽選**。
- `powerCycleBehavior`: **天井G引継ぎ / モード引継ぎ / 内部状態引継ぎ**。
- `gameCounterReset`: 設定変更 **CLEAR** / 電源OFF→ON **CARRY_OVER**。
- `carryOverBehavior`: 「据え置き」と明記した独立契約は今回未確認だが、純電断時の3項目引継ぎは直接確認。
- `ceilingAfterReset`: 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。ただしリセット時天国25%により99G系モード開始が存在。
- `modeAfterReset`: **通常A 0 / 通常B 62.5 / 通常C 12.5 / 天国25.0%**（当時解析表のラベルを保持）。
- `stateAfterReset`: **ロー0 / ミドル25.0 / ハイ37.5 / スペシャル37.5%**。ハイ以上 **75.0%**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: 朝一 **天国25% / ハイ以上75%**。
- `resetPenalties`: 設定変更で前日天井進捗・モード・内部状態を失う。一方で上記朝一優遇あり。
- `resetDetection`: 設定変更・純電断とも **集会場ステージ / サブ液晶クリス**の初期表示で、表示単独判別不可。103G以内ART当選はリセット期待を上げる材料だが確定ではない。ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **通常B62.5% / 通常C12.5% / 天国25.0% / ミドル25.0% / ハイ37.5% / スペシャル37.5%**。

## CONFLICT / 注意

- 導入日: **2012-12-03**（HAZUSE/K-Navi） vs **2012-12-10**（パチビー/複数解析）。フィールズ公式は2012年12月導入予定。本線は12/03、競合は保持。
- モード名は資料により天国/超天国、天国A/天国B等の表記差があるため、設定変更数値は当該解析表ラベルを優先し、名称を無理に統合しない。
- 2025年「スマスロ バイオハザード5」は同名復刻機だが別機種。50枚33G、リセット666G等を2012年版へ混入させない。

## 2012-12-03同日群

- **バイオハザード5**を登録済み。
- K-Navi・パチビーで **秘宝伝 ～太陽を求める者達～（大都技研）** が2012-12-03導入で一致し、repo重複検索では既存レコードなし。
- 12/03同日群はまだ **OPEN**。秘宝伝を次に処理し、その後HAZUSE・K-Navi・メーカー公式・当時新台一覧・P-WORLD/パチビーで同日群の残存機を監査する。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 704 / chronologicalFrontier 2012-12-03 / 12-03群OPEN** から開始。
2. **「秘宝伝 ～太陽を求める者達～」（大都技研）** をrepo重複確認→性能コア＋resetBehavior v0.7調査→未登録なら705件目として登録。
3. その後12/03同日群をHAZUSE、K-Navi、メーカー公式、業界/当時新台一覧、P-WORLD、パチビー等で監査し、未登録機を導入日順に処理。
4. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### バイオハザード5
- フィールズ公式2012-09-26発売資料: `https://www.tsuburaya-fields.co.jp/ir/j/files/press/2012/press_20120926a.pdf`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0907/`
- K-Navi: `https://p-kn.com/slot/1741/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6893`
- パチビー: `https://www.pachibee.jp/machines/index/212110001`
- パチスロ解析ガイド: `https://www.pachislot-guide.net/2012/biohazard5/`
- 当時解析 / リセット表: `https://smaslo.man-soft.com/slot-kaiseki/biohazard5.html`
- 5号機クロニクル エンターライズ一覧: `https://5goki.com/enterrise`
- pachinko's blog: `https://pachinko.hatenablog.jp/entry/2012/12/bioHazard-5`

### 境界監査 / 次候補
- HAZUSE 新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- K-Navi 秘宝伝 ～太陽を求める者達～: `https://p-kn.com/slot/1748/`
- パチビー 秘宝伝 ～太陽を求める者達～: `https://www.pachibee.jp/movies/index/8754`
