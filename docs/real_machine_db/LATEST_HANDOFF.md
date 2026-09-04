# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **642**
- latestMachineAdded: **シスタークエスト3～黄金の大地と東の勇者～**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2012-03-05_sister-quest3.md`
- chronologicalFrontier: **2012-03-05**
- frontierLatestExactDateMachine: **シスタークエスト3～黄金の大地と東の勇者～**
- schema: **resetBehavior v0.7**
- status: **2012-03-05_SAME_DAY_GROUP_AUDIT_REQUIRED__NEXT_SUKeban_ON_2012-03-05**

## 今回の本線追加 — シスタークエスト3～黄金の大地と東の勇者～

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「天誅～Deadly Blow～」を確認して開始。
- INDEXは旧地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 641 / chronologicalFrontier 2012-03-05**。
- 直前handoff指定の最優先候補「シスタークエスト3」をrepo検索し未登録を確認後、642件目として追加。

### 導入日・型式

- 時系列キー: **2012-03-05**。
- K-Navi / HAZUSEは2012-03-05導入開始で一致。
- SNK公式は2012年3月稼働と記録。
- 型式名: **シスタークエスト3E**。
- 検定番号: **1S1072**。

### 性能コア

- systemType: **A+ART / ボーナス+ART**。
- 機械割: **96.9 / 98.5 / 99.9 / 105.3 / 109.7 / 114.1%**（P-WORLD / 5号機クロニクル一致）。
- BIG合算: **1/439.8 / 434.0 / 428.3 / 422.8 / 417.2 / 402.1**。
- REG合算: **1/574.9 / 565.0 / 555.4 / 546.1 / 537.2 / 512.0**。
- ボーナス合算: **1/249.2 / 245.5 / 241.8 / 238.3 / 234.9 / 225.2**。
- ART初当たり: **1/612.9 / 581.5 / 545.2 / 429.5 / 350.9 / 306.5**。
- 50枚ベース: **約32G/50枚**（旧解析単一ソース。ANALYSIS_SINGLE）。
- ART「冒険RUSH」: **1セット44Gまたは304G / 純増約+1.6枚/G**。
- 基本獲得: 十勇士伝説約204枚 / BIG約204枚 / 錬金チャンス約42枚。
- 通常天井: **ボーナス後1000GでARTストック確定**。

### resetBehavior v0.7

- 本機固有の旧解析で **設定変更時に1000G天井までのゲーム数クリア**を直接確認。
- 設定変更後は内部状態を再振り分けし、**高確以上スタート約10%～20%**。高設定ほど高確以上スタート率が高い。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: 通常1000G天井を0Gから再スタート。リセット専用短縮天井は確認なし。
- `stateAfterReset`: **RESELECTED_ON_SETTING_CHANGE__HIGH_OR_ABOVE_APPROX_10_TO_20_PERCENT_BY_SETTING**。
- `resetBenefits`: 設定変更後、高確以上約10%～20%。
- `resetPenalties`: 前日1000G天井進捗を設定変更で失う。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: ガックン/初期出目/液晶等は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 後継2025年スマスロ「Sister Quest」のリセット仕様は流用していない。

## 時系列監査

- 2012-03-05同日群は未閉鎖。
- 次の既知未処理候補 **女番長（TAKASAGO / 高砂電器産業）** はK-Naviで2012-03-05ホール導入開始、KONAMI機種アーカイブで2012年3月稼働を確認済み。
- 同日群を閉じるまでは03/06以降へ進まない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 642 / chronologicalFrontier 2012-03-05**から開始。
2. **2012-03-05同日群**を継続し、最優先で **女番長** のrepo重複確認→未登録なら性能コア+resetBehavior v0.7を収集。
3. 女番長追加後もK-Navi/P-WORLD/HAZUSE/当時業界記事/メーカーアーカイブで03/05同日残存を再監査。
4. 03/05群を閉じた後のみ03/06以降の最古未処理機へ前進。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- SNK公式: `https://slot.snk-corp.co.jp/official/sister-quest3/`
- K-Navi: `https://p-kn.com/slot/1573/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S1072/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6620`
- 5号機クロニクル: `https://5goki.com/snkplaymore`
- CrankySeven: `https://crankyseven.com/sisterquest3-pc.htm`
- 次候補女番長K-Navi: `https://p-kn.com/slot/1571/`
- 次候補女番長KONAMIアーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2012/sukeban/`

## GitHub commits

- machine record: `f16e63294e2677af5a0dcafff8a70083f67d2f6f`
