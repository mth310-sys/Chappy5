# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **630**
- latestMachineAdded: **不二子～100億$の女神～**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2012-01-03_fujiko-100oku-dollar-no-megami.md`
- chronologicalFrontier: **2012-01-03**
- frontierLatestExactDateMachine: **不二子～100億$の女神～**
- schema: **resetBehavior v0.7**
- status: **2012-01-03_SAME_DAY_AUDIT**

## 今回の本線追加 — 不二子～100億$の女神～

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「トリプルチャンスV-30」を再取得して開始。
- 開始時正本は **recordCount 629 / chronologicalFrontier 2011-12-19**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 2011年12月末境界を再監査し、前handoffで既知の2011年12月BACKFILL「トリプルチャンスV-30」以降に具体日が古い未処理機を追加確認できなかったため、2012年1月へ前進。
- 2012年回顧一覧で1月機として「不二子～100億$の女神～」「パチスロ鉄拳2nd」「パチスロ サクラ大戦3 ～Loop ver.～」を確認。
- K-Naviで不二子のホール導入開始 **2012-01-03**、当時グリーンべるとで **2012-01-02から納品予定**を確認。日付定義差として分離し、本線時系列キーはホール導入日の2012-01-03を採用。
- GitHub code searchと想定実パス直接fetchで開始時未登録を確認して630件目として追加。

### 性能コア

- systemType: **ノーマル / A+RT**。
- 設定別主機械割: **97.7 / 98.7 / 100.0 / 105.1 / 107.7 / 113.0%**。
- BIG合算: **1/331.0 / 1/331.0 / 1/331.0 / 1/318.1 / 1/295.2 / 1/258.0**。
- REG: **1/504.0～504.1 / 1/496.5 / 1/489.1 / 1/481.9 / 1/474.9 / 1/455.1**。
- ボーナス合算: **1/199.8 / 1/198.6 / 1/197.4 / 1/191.6 / 1/182.0 / 1/164.7**。
- 50枚ベース: **37.41 / 38.31 / 39.51 / 43.54 / 43.67 / 43.95G/50枚**。単一解析値のため `ANALYSIS_SINGLE`。
- SBB最大**402枚**、NBB最大**259枚**、SEXY BONUS最大**51枚**。
- SEXY BONUS後は50G RT、RT中の特殊リプレイで次回ボーナスまでの無限RTへ昇格。両RTとも約**+0.4枚/G**。
- 型式名: **不二子100億$の女神Y**（中古実機DBで確認）。検定番号は今回直接確定できずUNVERIFIED。

### resetBehavior v0.7

- `settingChangeBehavior`: **NORMAL_STATE_AFTER_SETTING_CHANGE_ANALYSIS_SINGLE**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `modeAfterReset`: **NONE_CONFIRMED_NO_GAME_COUNT_MODE_SYSTEM**。
- `stateAfterReset`: **NORMAL_STATE_AFTER_SETTING_CHANGE_ANALYSIS_SINGLE**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有解析で「天井なし」「設定変更時は通常状態」を直接確認。K-Naviにも「設定変更後の挙動」専用解析項目が存在するが、具体本文は現存キャッシュから回収できなかったため、それ以上は推測しない。
- 据え置き・単純電源OFF→ON・ガックン/初期出目/液晶等は、機種名・型式名・メーカー名と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/RT」を組み替えて再探索したが本機固有の直接根拠を確定できずUNVERIFIED。

## conflicts

1. `CONFLICT_PAYOUT_RATE_SIMULATION_OR_CONDITION_DIFFERENCE`
   - K-Navi / P-WORLD / 当時業界系: **97.7 / 98.7 / 100.0 / 105.1 / 107.7 / 113.0%**。
   - けんのスロットシミュレーション: **98.0 / 99.1 / 100.3 / 104.9 / 107.5 / 112.8%**。
   - 平均せず双方を保持。
2. `CONFLICT_BASIC_PAYOUT_RETROSPECTIVE_DATABASE`
   - 当時業界記事/P-WORLD: SBB最大402枚 / NBB最大259枚 / SEXY BONUS最大51枚。
   - 後年回顧DBの一部には異なる概算獲得枚数表記があるため主値へ混ぜない。
3. `DATE_DEFINITION_DIFFERENCE`
   - 2012-01-02: 納品予定開始（当時業界記事）。
   - 2012-01-03: ホール導入開始（K-Navi等）。

## 時系列監査

- 2011年12月末境界から2012年1月へ前進。
- HAZUSE系カレンダー上の2012年1月日付ブロックは **01/03, 01/06, 01/10, 01/13, 01/16, 01/20, 01/23, 01/27**。
- 2012年1月の独立一覧で確認できる主要本線候補は **不二子～100億$の女神～ / パチスロ鉄拳2nd / パチスロ サクラ大戦3 ～Loop ver.～**。
- 不二子は01/03で登録済み。
- 鉄拳2ndはHAZUSE系で **2012-01-10**を確認済み。
- サクラ大戦3 Loop Ver.はパチビーで **2012-01-23**を確認済み。
- 次回は01/03同日群の残存を最終監査し、追加がなければ **01/06 → 01/10**へ進む。01/10では鉄拳2ndの既登録有無を実パスまで確認して未登録なら収集する。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 630 / chronologicalFrontier 2012-01-03**から開始。
2. 2012-01-03同日群の残存漏れをメーカー別一覧/P-WORLD/HAZUSE/当時業界で最終監査。
3. 01/03に追加がなければ **01/06群**を監査。
4. 次に **01/10群**へ進み、既知候補「パチスロ鉄拳2nd」（2012-01-10）のGitHub実レコードを直接確認。未登録なら次の本線レコードとして収集。
5. 以降 **01/13 → 01/16 → 01/20 → 01/23（サクラ大戦3 Loop Ver.）→ 01/27** の順を維持。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

### 不二子～100億$の女神～
- K-Navi: `https://p-kn.com/slot/1535/`
- グリーンべると: `https://web-greenbelt.jp/00002407/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6542`
- けんのスロットシミュレーション: `https://kenslo65536.com/sp/kaiseki/fujiko100.html`
- 中一商事 型式情報: `https://www.nakaiti.com/html/sOlympia004.html`

### 2012年1月境界
- 2012年回顧一覧: `https://www.dorubako.biz/year/2012.html`
- パチビー サクラ大戦3 Loop Ver.: `https://www.pachibee.jp/machines/lecture/211120004`

### 次回順序確認
- **2012-01-03同日群最終監査 → 01/06 → 01/10（鉄拳2nd）→ 01/13 → 01/16 → 01/20 → 01/23（サクラ大戦3 Loop Ver.）→ 01/27。**
