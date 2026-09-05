# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **674**
- latestMachineAdded: **パチスロ パトラッシュ**（SANKYO）
- latestRecord: `docs/real_machine_db/machines/2012-07-16_pachislot-patrush.md`
- chronologicalFrontier: **2012-07-16**
- frontierLatestExactDateMachine: **パチスロ パトラッシュ**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-07-16__NEXT_2012-07-23_SHIOSAI_A30**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「シンデレラブレイド」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 673 / frontier 2012-07-09。
- LATEST_HANDOFF指定の次候補「パチスロ パトラッシュ」をrepo検索し未登録を確認。
- K-Navi 2012年7月導入カレンダーでは2012-07-10～07-15に具体日付きパチスロ追加なし、2012-07-16はSANKYO「パチスロ パトラッシュ」のみ。674件目として追加し07-16同日群をCLOSED。
- 2012-07-17～07-22にはK-Navi上のパチスロ具体日追加なし。次の具体日アンカーは2012-07-23 パイオニア「シオサイA-30」。

## 今回の本線追加 — パチスロ パトラッシュ

### 識別

- manufacturer: **SANKYO**
- releaseDate key: **2012-07-16**
- generation: **5号機**
- systemType: **ボーナス非搭載 / ゲーム数管理ART・セットストック型**
- modelName: **パチスロ パトラッシュV**
- approvalNumber: **2S0385**
- releaseDate: K-Naviが全国一斉導入開始日2012-07-16、SANKYO公式が導入年月2012.07を確認。

### 性能コア

- 機械割: **96.8 / 98.6 / 100.8 / 104.3 / 108.1 / 113.4%**
- ART初当り: **1/292 / 1/286 / 1/272 / 1/260 / 1/249 / 1/228**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART「パトラッシュ」: **20G / 70G / 140G、約+2.4枚/G**
- ロングフリーズ7揃い: **1/8192**（SANKYO公式）
- モード別ART間天井: **天国51G / ゾロ目999G / 通常1111G**

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PERIOD_ANALYSIS** — 設定変更で天井G数/消化G数をリセット、ART当選状況をクリア、内部モード再セット。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 当時狙い目資料は「宵越し×」とするが、純据え置き時のゲーム数/モード/状態の保持契約を本機固有本文で直接確定できず。過剰一般化しない。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 設定変更なしの電源OFF→ONのみの処理は直接確定できず。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- `ceilingAfterReset`: **CONFIRMED_MODE_DEPENDENT_AFTER_RESET** — 再抽選モードに応じ51/999/1111G。
- `modeAfterReset`: **CONFIRMED_RESELECT_WITH_NUMERIC_DISTRIBUTION**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **CONFIRMED_NUMERIC** — 朝一設定変更後20%で天国モード→51G天井。
- `resetPenalties`: **CONFIRMED_PARTIAL** — 前日天井進捗/消化G数は変更時に失われる。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH** — ガックン/ランプ/初期出目等の本機固有契約は確定できず。
- `publicMorningNumbers`: **CONFIRMED**

### 設定変更後の公開朝一数値

全設定共通の内部モード選択率:

- 天国モード: **20%** → ART間天井 **51G**
- ゾロ目モード: **30%** → ART間天井 **999G**
- 通常モード: **50%** → ART間天井 **1111G**

### 主要CONFLICT / 品質メモ

- ART基本G数はSANKYO公式、P-WORLD、パチマガスロマガARTフローで **20/70/140G** が一致。一方、パチマガスロマガ別スペックページに **20/40/140G** 表記があるため、後者をSOURCE_TEXT_CONFLICT_OR_TYPOとして保持し平均・統合しない。
- 「パチスロ パトラッシュ / パトラッシュV / PAT-RUSH / SANKYO / 三共」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード選択率 / ガックン / 50枚 / 1000円」を組み替えて再探索。
- SANKYO公式、K-Navi、P-WORLD、パチマガスロマガ、5号機クロニクル、2012年当時の天井攻略資料を横断。
- 50枚ベース、純据え置き、単純電断、内部状態、ガックン等は十分再探索後も確定できず一般論で補完していない。

## 次回再開地点

1. **recordCount 674 / chronologicalFrontier 2012-07-16 / 07-16 group CLOSED**から開始。
2. **2012-07-17～07-22境界監査済み**。次は **2012-07-23「シオサイA-30」（パイオニア）**をrepo重複確認 → 導入日照合 → 性能コア＋resetBehavior v0.7を収集。
3. K-Navi 2012年7月導入カレンダーは2012-07-23のパチスロとして「シオサイA-30」を掲載。
4. 07-23同日群を完全に閉じてから07-24以降へ進む。
5. 既知の後続アンカーは2012-07-30「メガミリオネア」（ウィンネット）、「マイジャグラーII」（北電子）。
6. 「夜王」は既存方針どおり2012年8月地点で再監査。
7. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- SANKYO公式オンライン博物館: `https://www.sankyo-fever.jp/collection/544/`
- K-Navi 2012年7月導入カレンダー: `https://p-kn.com/calendar/201207/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6756`
- パチマガスロマガ ART突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/28/l.php`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/28/a.php`
- 5号機クロニクル SANKYO全機種: `https://5goki.com/sankyo`
- 2012年当時 天井ハイエナ期待値リスト: `https://macerate.seesaa.net/article/288333617.html`

## GitHub commits

- パチスロ パトラッシュ machine record: `1d9349fd8d1ed6eba7dd6c317aead46bec40bf3f`
