# スロットジャックポット

machineName: スロットジャックポット
aliases: スロット ジャックポット / SLOT JACKPOT
manufacturer: 岡崎産業
releaseDate: 2014-03-17
releaseDatePrecision: exact_hall_start_single_period_source_month_crosscheck

generation: 5号機
systemType: ノーマル / リアルボーナス / C.O.S（キャリーオーバーシステム）・ネオストック型 / 完全告知 / 技術介入
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT

## identity

- K-Naviでホール導入開始 **2014-03-17**、メーカー **岡崎産業**を確認。
- 5号機クロニクル岡崎産業一覧でも **2014年3月導入**を確認し、月単位で照合。
- パチマガスロマガ機種ページは「2014年1月」と表記するが、これは同ページの掲載/資料月表記として扱い、具体的ホール導入日の2014-03-17とは混同しない。
- confidence: ANALYSIS_HIGH_DATE_CROSSCHECK

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.0% |
| 2 | 97.0% |
| 3 | 99.0% |
| 4 | 101.0% |
| 5 | 103.0% |
| 6 | 105.0% |

- K-Navi掲載系列。
- 5号機クロニクル岡崎一覧は本機の機械割欄が空欄で、独立数値照合には使用できない。
- confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

## initialHitBySetting

- **通常時全モードを通算した設定別初当たり確率は UNVERIFIED_AFTER_RESEARCH**。
- 本機は内部モードでボーナス確率が変化するC.O.S機であり、公開されている **1/77.5前後**は天国モード滞在中の値。これを通常時全体の設定別初当たりへ転記しない。

### 天国モード中の公開ボーナス確率

| 種別 | 設定1〜6 |
|---|---:|
| BB1 | 1/1008.3 |
| BB2 | 1/504.1 |
| BB3 | 1/100.8 |
| 合算 | 1/77.5 |

- K-Naviのボーナス確率表と、P-WORLD/パチマガスロマガの「天国モード中 約1/77〜1/77.5」説明を定義照合したうえで、モード限定値として保存。
- confidence: ANALYSIS_HIGH_DEFINITION_CROSSCHECK

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- P-WORLDは「コイン持ち良し」と定性的に分類しているが、比較可能な50枚あたりゲーム数/1000円あたりゲーム数を確認できない。
- 「50枚」「1000円」「千円」「ベース」「コイン持ち」および機種名表記揺れで再探索後も数値を固定できず、推定しない。

## netIncrease

- **NOT_APPLICABLE_REAL_BONUS_TYPE**。
- AT/ARTの純増枚数/Gを持つ方式ではない。

## basicPayout

- BIG BONUS1: **最大311枚**。
- BIG BONUS2: **最大194枚**。
- BIG BONUS3: **最大90枚（K-Navi / P-WORLD）**。
- パチマガスロマガはBIG BONUS3相当を **MAX97枚**と記載するため、第三ボーナス最大獲得は `CONFLICT_BONUS3_MAX_90_VS_97` として保持。
- パチマガスロマガの規定払い出し表記は、7・7・7=344枚、BAR・7・BAR=209枚、7・7・BAR=89枚。
- confidence: CONFLICT_FOR_BONUS3 / ANALYSIS_HIGH_MULTI_SOURCE_FOR_BONUS1_2

## modeSpecificMinimumData

- モード移行によってボーナス確率を変動させる **C.O.S（キャリーオーバーシステム）**を搭載。
- P-WORLDでは通常時内部モードを **ハマリモード / ノーマルモード / 天国モード**の3種類と整理。
- 天国モード中のボーナス合算は約 **1/77〜1/77.5**。
- P-WORLDでは「ボーナス後は必ず天国モードへ突入」、JACK POT TIME点灯で天国モード確定、コインランプ点灯で天国モード期待と説明。
- 天国/ジャックポットタイムのループ率には資料差がある。P-WORLDは **約77%**、K-Naviおよびパチマガスロマガは **約88%**。平均せず `CONFLICT_HEAVEN_LOOP_77_VS_88` として双方保存。
- 通常時全モード移行テーブルは実機完全再現用のため収集対象外。

## ceiling

- 従来型のゲーム数天井について **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機は内部モード型ノーマル機であり、モード挙動と天井ゲーム数を同一視しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_UNVERIFIED_PHYSICAL_RESET_CONTRACT
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の設定変更時に、内部3モード・ボーナス確率状態・表示状態がどう初期化/再抽選されるかを直接示す資料を固定できない。
- C.O.Sの名称に「キャリーオーバー」とあることだけから、設定変更時の物理的引継ぎ仕様を推定しない。

### carryOverBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- 「据え置き」「朝一」「設定据え置き」等を機種名/メーカー名と組み合わせて再探索したが、本機固有の内部モード保持契約を直接確認できない。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更を伴わない電源OFF→ON時の内部モード・表示・ボーナス確率状態の保持/再抽選を直接確認できない。

### gameCounterReset

- 従来型ゲーム数天井は確認できず、設定変更/据え置き/電断時の天井Gリセット契約として比較できる公開値はない。
- status: **NO_CONVENTIONAL_CEILING_COUNTER_CONFIRMED / PHYSICAL_RESET_CONTRACT_UNVERIFIED**

### ceilingAfterReset

- 設定変更専用の天井短縮・変更: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 通常時にハマリ/ノーマル/天国の内部モードが存在することは確認。
- ただし設定変更時の初期モード振り分け、据え置き時の保持、電源OFF→ONのみの扱いは **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 本機では主要な通常時状態を内部モードで管理する資料が中心。
- モードとは別のリセット時内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更/朝一専用として明示された主要恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常の「ボーナス後は天国モードへ」はリセット専用恩恵ではないため、朝一恩恵へ転記しない。

### resetPenalties

- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期出目、ランプ、表示、ゲーム数挙動等による本機固有の設定変更/据え置き判別: **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時モード振り分け、朝一特定G内当選率、短縮天井、設定変更専用恩恵発生率などの公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- `CONFLICT_HEAVEN_LOOP_77_VS_88`: P-WORLDは天国モードループ約77%、K-Navi/パチマガスロマガはジャックポットタイム/天国モード約88%。平均しない。
- `CONFLICT_BONUS3_MAX_90_VS_97`: K-Navi/P-WORLDはBIG BONUS3最大90枚、パチマガスロマガはMAX97枚。平均しない。
- 天国モード中1/77〜1/77.5は通常時全体の設定別初当たりへ流用しない。
- P-WORLDの「コイン持ち良し」は定性的分類のため数値ベースへ変換しない。
- C.O.S（キャリーオーバーシステム）の名称を、設定据え置き/電源OFF→ONの物理的キャリーオーバー契約と解釈しない。

## sources

取得日: **2026-09-06**

1. K-Navi「スロットジャックポット」
   - https://p-kn.com/slot/2030/odds/
   - ホール導入開始2014-03-17、岡崎産業、設定別機械割、ボーナス確率、基本獲得、約88%継続説明。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE

2. P-WORLD「スロット ジャックポット」
   - https://www.p-world.co.jp/machine/database/7345
   - 5号機/ネオストック/完全告知/技術介入、3内部モード、天国約1/77、ボーナス後天国、最大311/194/90枚、天国ループ約77%。
   - confidence: INDUSTRY_DATABASE_HIGH

3. パチマガスロマガ「スロットジャックポット」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/70/a.php
   - C.O.S、天国1/77.5、天国88%ループ、MAX311/194/97枚、規定払い出し枚数。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE

4. 5号機クロニクル「岡崎産業 5号機全機種一覧」
   - https://5goki.com/okazaki
   - 本機を2014年3月導入機種として確認。機械割欄は空欄のため数値照合には使用せず。
   - confidence: ANALYSIS_RETROSPECTIVE_MONTH_CROSSCHECK

5. HAZUSE 新台カレンダー
   - https://hazuse.com/new-machine-calendar/newmachine-calendar/
   - 2014年3月の日付アンカーとして03/17の次に03/24が存在することを確認。
   - confidence: ANALYSIS_HIGH_PERIOD_CALENDAR

## missingFields

- 通常時全モード通算の設定別初当たり確率: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部モード/状態初期化契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の内部モード保持契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更なし電源OFF→ON時契約: UNVERIFIED_AFTER_RESEARCH
- 公開朝一リセット数値: NONE_CONFIRMED_AFTER_RESEARCH
- 変更判別: NONE_CONFIRMED_AFTER_RESEARCH
