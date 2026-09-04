# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **641**
- latestMachineAdded: **天誅～Deadly Blow～**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2012-03-05_tenchu-deadly-blow.md`
- chronologicalFrontier: **2012-03-05**
- frontierLatestExactDateMachine: **天誅～Deadly Blow～**
- schema: **resetBehavior v0.7**
- status: **2012-03-05_SAME_DAY_GROUP_AUDIT_REQUIRED__TENCHU_RESET_BODY_UNAVAILABLE_AFTER_EXTENDED_RESEARCH__NEXT_SISTER_QUEST3_OR_ON_2012-03-05**

## 今回の本線追加 — 天誅～Deadly Blow～

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ヱヴァンゲリヲン～生命の鼓動～」を確認して開始。
- INDEXは旧地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 640 / chronologicalFrontier 2012-02-27**。
- 2012年2月のP-WORLD月別掲載9機種と既存レコードを突合し、02-27以降の2月残存候補を監査。3月候補をK-Navi/P-WORLD/パチビー/HAZUSE/業界記事で照合し、最古の具体的ホール導入日として2012-03-05群へ前進。
- main再確認で同名/想定パスの既存レコードなしを確認後、641件目として追加。

### 導入日・型式

- 時系列キー: **2012-03-05**。
- K-Navi / パチビーはホール導入開始を2012-03-05と記録。
- グリーンべるとは納品開始予定を2012-03-04と記録。日付定義差として分離し、時系列キーはホール導入日を採用。
- 型式名: **天誅DeadlyBlow-Z**。
- 検定番号: **1S1124**。

### 性能コア

- systemType: **A+ART / ボーナス+ART**。
- 5号機クロニクル機械割: **96.8 / 98.7 / 101.2 / 104.4 / 108.0 / 112.1%**。
- 別回顧解析: **96.8 / 98.7 / 101.2 / 104.3 / 107.9 / 111.9%**。設定4～6は平均せずCONFLICT_OR_ROUNDING_SOURCE_DIFFERENCEとして双方保持。
- P-WORLD一覧下部の「14.4%～112.1%」は下限が他資料と著しく不整合のためSOURCE_DISPLAY_CORRUPTIONとして採用除外。
- ボーナス合算: **1/268.6 / 260.1 / 252.1 / 244.5 / 232.4 / 219.9**。
- 天誅BIG: 全設定 **1/16384.0**。
- NBIG（各2種とも）: **1/897.8 / 873.8 / 851.1 / 829.6 / 780.2 / 728.2**。
- REG（各2種とも）: **1/1394.4 / 1337.5 / 1285.0 / 1236.5 / 1191.6 / 1149.8**。
- ART「天誅RUSH」: **1セット40G+α / 純増約+1.5枚/G**。
- 基本獲得: 天誅BIG約204枚 / BIG約204枚 / 忍BONUS約54枚。
- 通常天井: **ボーナス間1400G**。到達後のレア役/BIGはART40G・90%ループ、忍BONUSはART200G・90%ループ。
- ART設定別初当たり、50枚ベースは検索語・資料系統を変えても直接値を確定できずUNVERIFIED_AFTER_RESEARCH。

### resetBehavior v0.7

- K-Navi本機専用ページに **「狙い目・天井・朝一 > 設定変更後の挙動」** の個別解析ページが存在することは確認。
- ただし取得可能なインデックスにはリンク見出しのみで、個別ページ本文の設定変更時具体値/挙動は今回回収不能。
- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: 1400G天井自体は確定するが設定変更時CLEAR/RETAINは **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `modeAfterReset`: 通常時/ART中に内部モードが存在するが設定変更時再抽選/初期モードは **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: ガックン/初期出目/液晶・ステージ等の本機固有判別は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 検索は「天誅～Deadly Blow～ / 天誅 Deadly Blow / 天誅DeadlyBlow-Z / 1S1124 / ニューギン」×「設定変更 / 設定変更後 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井リセット / 天井短縮 / モード / 高確 / 低確 / ガックン」を組み替えて横断。一般的な5号機ART機からの推定転記はしていない。

## 時系列監査

- 2012年2月P-WORLD月別パチスロ9機種と既存進捗を突合し、640件地点までで2月主要候補が収録済みであることを確認。
- HAZUSEの3月アンカーは03/02・03/05等だが、03/02の具体的ホール導入機を今回確定できず、K-Navi/パチビーで具体日一致する03/05群を最古の次候補とした。
- 2012-03-05同日群には少なくとも **シスタークエスト3～黄金の大地と東の勇者～** と **女番長** が残存候補として確認済み。
- 同日群を閉じるまでは後日へ進まない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 641 / chronologicalFrontier 2012-03-05**から開始。
2. **2012-03-05同日群**を継続し、最優先で **シスタークエスト3～黄金の大地と東の勇者～** のrepo重複確認→未登録なら性能コア+resetBehavior v0.7を収集。
3. 次候補 **女番長**。同日群の残存をK-Navi/P-WORLD/パチビー/HAZUSE/当時業界記事で再監査。
4. 03/05群を閉じた後のみ03/06以降の最古未処理機へ前進。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- K-Navi: `https://p-kn.com/slot/1568/`
- パチビー: `https://www.pachibee.jp/machines/index/212010001`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6616`
- グリーンべると: `https://web-greenbelt.jp/00001285/`
- 5号機クロニクル: `https://5goki.com/newgin-excite`

## GitHub commits

- machine record: `d3fa4654e5733b504b614f1122545f6ef47b4081`
