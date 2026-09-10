# No.1227 パチスロ ハクション大魔王

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ハクション大魔王
- manufacturer: WORLD（ブランド） / JPS（製造）
- releaseDateCanonical: 2018-09-03
- generation: 5号機
- systemType: A+RT / リアルボーナス+RT
- formalModelName: `パチスロハクション大魔王AA`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- Amusement Japanの2018-07-07業界記事はホール導入を2018-09-03からと報道。
- 日刊スポーツ2018-08-31導入カレンダー、ちょんぼりすた、すろぱちくえすとが2018-09-03で一致。
- 一部後年ページに2018-09-02表記があるため平均せず、同時代業界記事+複数解析一致の2018-09-03をcanonicalとした。
- confidence: `INDUSTRY_AND_MULTIPLE_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- WORLDはインテグレートが総発売元となるブランドで、本機が第1弾。製造はJPSと当時解析/中古実機DBで確認。
- P-WORLDおよび中一商事中古実機DBは機種名/型式名を `パチスロ ハクション大魔王AA` / `パチスロハクション大魔王AA` と掲載。
- 検定番号は機種名/AA/JPS/WORLD/検定/公安委員会を組み替えて再探索したが高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

## performanceCore

### payoutRateBySetting
通常時:
- setting2: 98.5%
- setting5: 101.7%
- setting6: 105.3%

完全攻略時:
- setting2: 101.1%
- setting5: 103.7%
- setting6: 107.2%

- ちょんぼりすた、すろぱちくえすと、後年解析DBで一致。通常/完全攻略の定義を分離保存。

### initialHitBySetting
BIG:
- setting2: 1/348.6
- setting5: 1/372.3
- setting6: 1/394.8

REG:
- setting2: 1/387.7
- setting5: 1/269.7
- setting6: 1/221.4

ボーナス合算:
- setting2: 1/183.5
- setting5: 1/156.4
- setting6: 1/141.8

### baseGamesPer50
- canonical practical headline: 約39G/50枚。
- すろぱちくえすとは約39～43Gと掲載するため、設定/手順差を含むレンジ資料として併記し、単純CONFLICTにはしない。

### netIncrease
- RT「ハクションタイム」: 約0.1枚/G（解析掲載値）。

### basicPayout
- BIG BONUS: 最大311枚。
- REG BONUS: 最大104枚。
- BIG後は10Gの「ハクションチャレンジ」を経由し、技術介入結果等で20Gまたは40GのRT「ハクションタイム」。

### ceiling
- 通常ゲーム数天井: `NONE / 非搭載`。

## modeSpecificMinimumData
- BIG後のハクションチャレンジは10G。
- BARビタ押し成功で40G RT、失敗時20G。3連大魔王狙いでは40G獲得が約50%（特定演出時は40G確定）。
- REG後はRTへ突入しない。
- 詳細な小役別内部抽選・全設定示唆振り分けは実機完全再現領域のため収集対象外。

## resetBehavior

### settingChangeBehavior
- ちょんぼりすたの当時解析は設定変更時のRT状態・ステージをともに「調査中」と掲載。
- 他の当時解析、機種名/型式/JPS/WORLD/リセット/設定変更/朝一/RT/ステージを変更して再探索したが、本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時だけを独立条件としてRT残G・内部RT状態・ステージの扱いまで示す本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- ちょんぼりすたは電源OFF→ON時のRT状態・ステージを「調査中」と掲載。
- 据え置き情報から推測せず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- RT残Gの設定変更/据え置き/純電断処理は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井/リセット短縮天井: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 朝一専用モード、設定変更専用RT優遇モード等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時RT状態: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時RT状態: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 電源OFF→ON時RT状態: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機固有の有利区間の朝一契約を直接示す資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論を本機固有契約へ昇格しない。

### resetBenefits
- 設定変更時の短縮天井・専用高確率・RT優遇など: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、液晶/ランプによる設定変更確定条件・発生率: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 朝一専用当選率、モード振り分け、ガックン率、短縮天井G数等: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- release date: 後年解析の一部に2018-09-02表記あり。Amusement Japan当時業界記事、日刊スポーツ導入カレンダー、複数解析の2018-09-03をcanonical採用し `CONFLICT_RELEASE_DATE_2018_09_02_VS_2018_09_03` を保持。
- すろぱちくえすと/当時設定判別記事はBIG公称確率について市場実績との乖離・「詐称」疑義を記述しているが、公式に訂正された別確率表を確認できないため、公称スペック値をperformanceCoreに保持し、実戦推測値へ置換しない。

## missingFields
- 検定番号。
- formalModelNameの公報一次照合。
- 設定変更/据え置き/電源OFF→ON時のRT残G・ステージの本機固有確定契約。
- 有利区間朝一挙動の本機固有直接資料。
- 本機固有の変更判別条件/公開朝一数値。

## sources
取得日: 2026-09-10

1. Amusement Japan — パチスロ新ブランド「WORLD」が第一弾（2018-07-07）
   - https://amusement-japan.co.jp/article/detail/10000709/
   - WORLD第1弾、A+RT、BB311枚、技術介入、ホール導入9/3。
   - reliability: `INDUSTRY_CONTEMPORARY`
2. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2018-08-31
   - https://www.nikkansports.com/m/amusement/pachislot/news/amp/201808310000459.html
   - 2018-09-03パチスロ群としてスーパービンゴリバースと本機を掲載。
   - reliability: `INDUSTRY_CALENDAR`
3. パチマガスロマガ — パチスロ ハクション大魔王
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/world_slot/01/a.php
   - WORLD/2018年9月、A+RT、BIG311枚、REG104枚、RT仕様。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
4. ちょんぼりすた — ハクション大魔王解析
   - https://chonborista.com/slot/world/63323/
   - 導入9/3、設定2/5/6確率・機械割、約39G/50枚、天井なし、朝一RT/ステージ「調査中」。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
5. すろぱちくえすと — ハクション大魔王解析
   - https://www.slopachi-quest.com/article/hakushon-daimaoh/
   - 導入9/3、3段階A+RT、約39～43G、RT約0.1枚/G、確率/機械割、天井なし。
   - reliability: `ANALYSIS_PERIOD_SOURCE`
6. P-WORLD — パチスロ ハクション大魔王AA
   - https://www.p-world.co.jp/machine/database/8708
   - メーカーJPS、機種名AA、BIG311枚/REG104枚、CZ/RT仕様。
   - reliability: `INDUSTRY_MACHINE_DB`
7. 中一商事 — JPS パチスロ ハクション大魔王
   - https://www.nakaiti.com/html/sJPS002.html
   - メーカーJPS、型式名パチスロハクション大魔王AA、5号機RT、基本仕様。
   - reliability: `SECONDARY_MACHINE_DB`
