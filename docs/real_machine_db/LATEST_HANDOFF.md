# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **660**
- latestMachineAdded: **パイレーツワールド**（大都技研）
- latestRecord: `docs/real_machine_db/machines/2012-06-04_pirates-world.md`
- chronologicalFrontier: **2012-06-04**
- frontierLatestExactDateMachine: **パイレーツワールド**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-06-04_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「GTO ～Limit Break～」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFと実レコードを優先。開始時正本は recordCount 659 / frontier 2012-06-04。
- 前回HANDOFF指定の大都技研「パイレーツワールド」をrepo検索し未登録確認後、660件目として追加。
- 導入日はK-Navi/2012-06-04当時新台一覧=2012-06-04、HAZUSE=2012-06-03、大都技研公式=2012年6月。日付定義差を保持し、時系列キーは2012-06-04を採用。
- 性能コアは大都技研公式、K-Navi、HAZUSE、パチマガスロマガ、当時新台一覧、当時天井資料、後年整理資料を横断照合。
- resetBehaviorは本機専用の当時天井資料から、設定変更時の天井消化Gクリア/天井再セット、内部モード移行抽選、ART中設定変更時のART状態クリア、電源ON/OFF時の液晶ステージ引継ぎ、特定ステージを用いた変更推測まで回収。
- 据え置き時の天井進捗・内部モード完全契約、単純電断時の天井/モード/ART契約、設定変更時の100/300/600/900G振り分け率、ガックンは検索語・表記揺れ・資料系統を変えても直接根拠未取得のため、その範囲だけUNVERIFIED_AFTER_RESEARCH。

## 今回の本線追加 — パイレーツワールド

### 導入・分類

- manufacturer: **大都技研**。
- releaseDate: **2012-06-04**（K-Navi/当時新台一覧基準）。
- generation: **5号機**。
- systemType: **A+ART / 押し順ART / 継続ポイント・ストック型ART**。
- formalModelName: **パイレーツワールドU**。
- approvalNumber: **2S0091**。

### 性能コア

- 機械割: **97.67 / 99.11 / 101.91 / 105.78 / 110.89 / 117.40%**。
- BIG: **1/799.2 / 789.6 / 780.2 / 771.0 / 762.1 / 744.7**。
- ART初当り: **1/340.7 / 320.8 / 301.2 / 262.0 / 219.3 / 181.2**。
- BIG+ART合算: **1/238.9 / 228.1 / 217.3 / 195.5 / 170.3 / 145.7**。
- 50枚ベース: **約31G**。
- BIG: **約203枚**（280枚超払い出し終了）。
- ART「OCEAN DRIVE」: **1セット30G+α、約+2.0枚/G**。
- 通常天井: **100G / 300G / 600G / 900Gのいずれか**、最大900Gで天井ART。

### resetBehavior v0.7

- `settingChangeBehavior`: **VERIFIED_PERIOD_SOURCE**。天井消化Gクリア、天井G再セット、内部モード移行抽選。ART中の設定変更はART状態クリア。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗/内部モード完全契約を直接確定できず。
- `powerCycleBehavior`: **PARTIAL_VERIFIED**。単純電源OFF→ONで液晶ステージ引継ぎを確認。天井/モード/ART状態の電断契約は未確定。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。
- `ceilingAfterReset`: **RESELECT_CONFIRMED**。公開天井候補は100/300/600/900G。設定変更時専用の選択率は未取得。
- `modeAfterReset`: **RESELECT_CONFIRMED_NUMERIC_DISTRIBUTION_UNVERIFIED**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **POSSIBLE_EARLY_CEILING_VIA_RESELECTION_NOT_RESET_EXCLUSIVE**。設定変更専用保証とは断定しない。
- `resetPenalties`: **PREVIOUS_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE / ART_STATE_LOST_IF_CHANGED_DURING_ART**。
- `resetDetection`: **STAGE_BASED_POSSIBLE_DETECTION_CONFIRMED_WITH_CAVEAT**。前日「栄光の大海原」閉店時は、電源ON/OFFならステージ引継ぎのため朝一ステージ差で設定変更を見抜ける可能性あり。確定判別ではない。
- `publicMorningNumbers`: 天井候補 **100 / 300 / 600 / 900G**。設定変更専用振り分け率・朝一特定G以内当選率は未確認。

## CONFLICT / 品質メモ

- releaseDate: K-Navi/当時新台一覧=2012-06-04、HAZUSE=2012-06-03、大都技研公式=2012年6月。平均せず定義差として保持。
- パチマガスロマガ別表示の設定1/2 PAY OUT「197.67 / 199.11%」は、同サイト精密表97.67 / 99.11%および設定3〜6の連続性と矛盾するため `SOURCE_DISPLAY_CORRUPTION` として性能値から除外。

## 次回再開地点

1. **recordCount 660 / chronologicalFrontier 2012-06-04**から開始。
2. **2012-06-04同日群を継続**。最優先候補は **山佐「ニューパルサーSP」**。repo重複確認後、未登録なら661件目候補として性能コア+resetBehavior v0.7を処理。
3. その後、同日候補 **パイオニア「オアシス」 → ディ・ライト「パチスロ 熱血！華成学園ヒーロー部」** を既存repoと照合し、未登録のみ順に収集。
4. 同日群をメーカー別・当時新台一覧・K-Navi/P-WORLD/HAZUSE等で最終監査し、漏れがなければ閉じて2012-06-05以降へ前進。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- 大都技研 公式製品一覧: `https://www.daitogiken.com/products/slot/`
- K-Navi パイレーツワールド: `https://p-kn.com/slot/1636/`
- HAZUSE: `https://hazuse.com/machine/pachislot/SX0043/`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/51/h-1.php`
- パチマガスロマガ スペック別表: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/51/h.php`
- パチマガスロマガ 小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/51/c.php`
- パチマガスロマガ 機種TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/51/daitogiken_slot_51.php`
- 2012-06-04当時新台一覧: `https://macerate.seesaa.net/article/273495238.html`
- 当時天井・設定変更資料: `https://macerate.seesaa.net/article/288333617.html`
- 2-9伝説: `https://29den.com/piratesworld/`

## GitHub commits

- GTO ～Limit Break～ machine record: `439ff5113afc1d6adc29a026f36d7a595855572b`
- パイレーツワールド machine record: `8438f88fdb02f4d5b42146ddca8b661a75aaddd5`
