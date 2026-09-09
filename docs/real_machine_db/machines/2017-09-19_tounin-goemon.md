machineName: 盗忍！剛衛門
manufacturer: 大都技研
releaseDate: 2017-09-19
recordNumber: 1140
generation: 5号機（5.5号機世代）
systemType: A+ART / プレミアムボーナス搭載 / ゲーム数上乗せ型ART
formalModelName: 番長外伝 盗忍！剛衛門／A8
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_CONFLICT

## identity
- 大都技研の番長シリーズ外伝。グリーンべると当時業界記事、一撃、パチビー、複数解析資料で大都技研製を照合。
- ホール導入日は2017-09-19で、一撃、パチビー、ちょんぼりすた、当時すろかい等が一致。業界事前情報の納品開始予定日は2017-09-18。
- 型式表記は `番長外伝 盗忍！剛衛門／A8` をcanonicalとする。資料に `盗忍！剛衛門/A8`、`盗忍！剛衛門／A8` の省略表記あり。
- 検定番号は「番長外伝 盗忍！剛衛門/A8」「盗忍！剛衛門/A8」「大都技研」「検定番号」「公安委員会」「7S」等を組み合わせ、公的資料・HAZUSE系・中古DB・当時資料を横断したが直接固定できず、推測しない。
reliability: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE / UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
- 設定1: **98.1%**
- 設定2: **99.5%**
- 設定3: **101.2%**
- 設定4: **104.0%**
- 設定5: **109.3%**
- 設定6: **114.9%**
- 一撃、ちょんぼりすた、スロパチネット、当時すろかいで一致。より精密な二次資料表記は98.09〜114.89%で、上記は通常掲載の丸め値として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「粋三昧」初当たり
- 設定1: **1/492.8**
- 設定2: **1/457.4**
- 設定3: **1/438.1**
- 設定4: **1/369.7**
- 設定5: **1/317.5**
- 設定6: **1/237.9**

### 超絶景ボーナス
- 全設定: **1/32768.0**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical yardstick: **約45G/50枚**。
- ちょんぼりすた、パチマガスロマガ、当時すろかい、業界事前情報で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「粋三昧」: **約2.0枚/G**（ボーナス込み表記を含む）。
- グリーンべると、一撃、P-WORLD、パチビー等で約2.0枚/Gを確認。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## basicPayout
- 超絶景ボーナス: **270枚を超える払い出しで終了 / 実獲得目安約200枚**。
- ART「粋三昧」: 初期ゲーム数 **20G以上 + 上乗せ特化ゾーン**。P-WORLDでは初期20〜500G+特化ゾーンと整理。
- ART初当たり時は上乗せ特化ゾーン「鬼粋」を経由して初期性能を決定。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は「盗目」の成立総回数が天井管理の主要軸。
- 通常時の最大天井は **総盗目99回成立 → ART**。7回/33回/66回/99回の振り分けが存在。
- 盗目は平均約1/15で、99盗目はゲーム数換算で概ね1500G程度とされるが、天井契約はG数ではなく盗目成立回数で管理する。
- ART終了後の通常天井振り分けは設定差が大きいが、全設定の通常テーブルは設定判別用詳細のため本DBでは必要最小限として「最大99盗目」を主契約とする。
reliability: DATABASE_PLUS_ANALYSIS_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_VS_POWER_CYCLE_COMPARISON_PUBLIC_RESET_TABLE_AND_SOURCE_CONFLICT
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は **盗目天井をRESET/RESELECT**。
- 内部状態は **再抽選**。ちょんぼりすたでは朝一状態を「通常」と明記しており、設定変更後のcanonical開始状態は **通常スタート**として扱う。
- 盗目ST状態は **初期化**。
- 液晶ステージは **温泉宿ステージ**。
- 一撃では「液晶情報や滞在状態は全てリセット」と整理。
- 鬼賽については資料間競合があるため下記CONFLICTを参照。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_EXCEPT_ONISAI_CONFLICT

### carryOverBehavior
- 据え置き時は設定変更を伴わないため、天井進捗・内部状態・ART等の主要内部進行はCARRYOVER扱い。
- 純電源OFF→ONの直接比較で、盗目天井回数と内部状態の引継ぎが明記されている。
- 表示上の盗目回数やSTランプ等は電源OFF→ONでリセット表示される項目があるため、見た目と内部値を分離する。
reliability: ANALYSIS_HIGH_BY_DIRECT_POWER_CYCLE_COMPARISON

### powerCycleBehavior
- 純電源OFF→ON: **盗目天井回数CARRYOVER**。
- 純電源OFF→ON: **内部状態CARRYOVER**。
- 通常ステージ中なら液晶は温泉宿ステージへ移る。連続演出中/奪盗中は引き継ぐ。
- 盗目表示回数は表面上リセットされるが **内部回数はCARRYOVER**。
- 盗目ポイント/STランプは表示上リセット。
- 義賊目中は表面上リセットされるが内部状態は引き継ぐ。
- ART中は引き継ぐ。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- settingChange: **RESET / RESELECT**。
- stay setting: **CARRYOVER**。
- pure power OFF→ON: **CARRYOVER（表示上は盗目回数0相当へ戻るが内部回数は引継ぎ）**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- normalCeiling: **最大99盗目成立 → ART**。
- settingChange: **66盗目以下が基本**。設定1〜3では99盗目選択なし。
- 設定変更時の公開天井振り分け:
  - 設定1〜3: 7回 **1.56%** / 33回 **0.39%** / 66回 **98.05%** / 99回 **0%**
  - 設定4・5: 7回 **3.13%** / 33回 **0.78%** / 66回 **91.02%** / 99回 **5.08%**
  - 設定6: 7回 **1.95%** / 33回 **10.16%** / 66回 **82.81%** / 99回 **5.08%**
- 一撃の簡略表では設定1〜3は「66回100%」、設定4〜6は「66回94.9% / 67回以上5.1%」と整理される。これは上記精密表の7/33を66回以下へまとめた実用表現と解釈できるため数値CONFLICTとはしない。
- 設定変更後に **67盗目以上で天井到達**した場合は設定4以上確定となる解析が複数一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PUBLIC_RESET_NUMERIC_TABLE

### modeAfterReset
- 通常のG数モード型ではなく、盗目回数天井・鬼賽モード・内部状態が主要管理軸。
- 設定変更時の盗目天井テーブルは上記の通り再選択。
- 鬼賽モード/鬼賽ストックの設定変更時契約は資料が競合するためcanonicalを固定しない。
- 通常時の鬼賽モード全移行テーブルは実機完全再現用詳細のため収集対象外。
reliability: ANALYSIS_HIGH_FOR_CEILING_MODE / CONFLICT_FOR_ONISAI_RESET_CONTRACT

### stateAfterReset
- settingChange: **RESELECT / 通常スタート**。
- 盗目ST状態: **INITIALIZED**。
- pure power OFF→ON: **内部状態CARRYOVER / STは内部的にCARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大99盗目の通常天井に対し、設定変更後は **66盗目以下が基本**で大幅短縮。
- 設定1〜3は設定変更後99盗目天井が選ばれない。
- 設定変更後の短縮テーブルに7回/33回の早い天井振り分けも存在。
- ART終了画面に **リセット確定画面（五奉行・青）** が存在し、変更後の一定回数まで客側がリセットを事後確定できる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日の盗目天井進捗および有利な内部状態/ST状態は設定変更で失われる。
- 鬼賽ストックについては「再抽選」と「引継ぎ」の競合があるため、失効/保持を確定ペナルティとして扱わない。
- 設定変更専用の固定追加不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_LOST_CARRYOVER / CONFLICT_FOR_ONISAI

### resetDetection
- **ART終了画面にリセット確定パターン**が存在。
- 「五奉行（青）」の出現条件について、期待値見える化とすろぱちくえすとでは、設定変更後ART1〜2回目は **10%**、3回目は **20%**（それまで未出現が条件）と掲載。4回目以降はリセット確定画面の専用抽選対象外として扱われる整理。
- 設定変更後に盗目天井が **67回以上**まで到達した場合、変更済みであることが前提なら設定4以上確定材料となる。
- 設定変更・電源OFF→ONとも通常時の朝一液晶は温泉宿ステージとなり得るため、温泉宿ステージ単独では変更判別不可。
- 「盗忍！剛衛門 / A8 / 大都技研」と「ガックン / リールガックン / 朝一出目 / 据え置き / 電源OFF ON」を組み合わせて再探索したが、本機固有の確定ガックン発生契約は固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_END_SCREEN_DETECTION / UNVERIFIED_FOR_GAKKUN_DETERMINISM

### numericResetData
- normalCeilingMax: **99盗目**
- resetCeilingSetting1to3: **7=1.56% / 33=0.39% / 66=98.05% / 99=0%**
- resetCeilingSetting4to5: **7=3.13% / 33=0.78% / 66=91.02% / 99=5.08%**
- resetCeilingSetting6: **7=1.95% / 33=10.16% / 66=82.81% / 99=5.08%**
- resetState: **NORMAL_START / RESELECT**
- resetStState: **INITIALIZED**
- purePowerCycleCeiling: **CARRYOVER**
- purePowerCycleState: **CARRYOVER**
- purePowerCycleDisplayedNusumeCount: **SURFACE_RESET_INTERNAL_CARRYOVER**
- resetConfirmEndScreenAfterArt1or2: **10% if not previously shown**
- resetConfirmEndScreenAfterArt3: **20% if not previously shown**
- onisaiResetContract: **CONFLICT_RESELECT_VS_CARRYOVER**
- gakkunDetection: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- **鬼賽の設定変更時挙動**:
  - ちょんぼりすた: 設定変更時 **再抽選** / 電源OFF→ON時 **引き継ぎ**。
  - すろぱちくえすと: 「リセット時でも鬼賽の個数を引き継ぐ」と明記し、朝一メダル投入で個数確認可能とする。
  - 一撃: 設定変更時「液晶情報や滞在状態は全てリセット」とする一方、鬼賽そのものの専用項目は明示しない。
  - 以上は概念の取り違え（表示個数・内部ストック・モード再抽選）の可能性もあるが、同一概念と断定して統合せず **CONFLICT_ONISAI_RESET_RESELECT_VS_CARRYOVER** として保持。
- formalModelNameは `番長外伝 盗忍！剛衛門／A8` と `盗忍！剛衛門/A8` の表記差あり。同一機の省略表記としてcanonicalを前者に固定。
- 機械割・ART初当たりの98.1/1/492等と98.09/1/492.81等は丸め精度差でありCONFLICT扱いしない。

## missingFields
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の確定ガックン発生率・対策時挙動: **UNVERIFIED_AFTER_RESEARCH**。
- 鬼賽の設定変更時契約: **CONFLICT_ONISAI_RESET_RESELECT_VS_CARRYOVER**。

## sources
取得日: 2026-09-10
- グリーンべると（2017-09-11、メーカー/番長外伝/ART純増/超絶景ボーナス払い出し/ART基本性能）: https://web-greenbelt.jp/00009887/
- P-WORLD（機種概要/最大99盗目天井/ART約2.0枚/G/初期性能）: https://www.p-world.co.jp/machine/database/8497
- パチビー（導入日/メーカー/5号機ART/約2.0枚/G）: https://www.pachibee.jp/machines/kouryaku/217080011
- 一撃 基本ページ（導入日/性能コア/ART仕様）: https://1geki.jp/slot/s_gouemon/
- 一撃 天井・設定変更（通常/変更時天井、設定変更vs電源OFF→ON、表示/内部引継ぎ）: https://1geki.jp/slot/s_gouemon/3/
- ちょんぼりすた（性能コア/50枚ベース/通常天井/設定変更天井精密振り分け/鬼賽/内部状態/ST/電源OFF→ON）: https://chonborista.com/slot/daito-slot/44323/
- すろかい 当時解析（2017-11-07、導入日/型式略称/性能コア/設定変更時天井精密振り分け）: https://slotkaiseki.hatenablog.com/entry/gouemon
- すろぱちくえすと（天井/ART初当たり/リセット確定終了画面/リセット時鬼賽引継ぎ記述）: https://www.slopachi-quest.com/article/tossu-gouemon/
- 期待値見える化（ART終了画面・リセット確定画面の出現条件/確率）: https://slotjin.com/slot-tool/gouemon-settei/
- パチマガスロマガ（50枚あたり約45G、小役基礎値）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/73/c-2.php
- スロパチネット（導入日/正式型式表記/性能コア/基本獲得目安）: https://slopachi-net.com/gouemon
- pachinko's blog（当時型式表記 `盗忍！剛衛門/A8` / 2017年9月リリース）: https://pachinko.hatenablog.jp/entry/2017/09/touth-goemon
