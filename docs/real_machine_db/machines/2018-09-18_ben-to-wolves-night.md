# No.1228 パチスロ ベン・トー ～狼たちの夜～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ベン・トー ～狼たちの夜～
- manufacturer: バルテック
- releaseDateCanonical: 2018-09-18
- generation: 5号機
- systemType: A+RT / ボーナス+RT
- formalModelName: `パチスロベントー／BA`
- certificationNumber: `7S1703`
- settings: `1 / 3 / 5 / 7`
- collectedAt: 2026-09-10

## releaseDateEvidence
- 日刊スポーツ導入カレンダー、K-Navi、ちょんぼりすた、すろぱちくえすとがホール導入を2018-09-18と掲載。
- グリーンべるとの2018-07-11当時業界記事は納品を9月17日予定と明記。
- HAZUSEは導入開始日を2018-09-17と掲載するため、納品日/導入開始日の定義差または地域差候補として `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18` を保持し、全国ホール導入日の複数一致で2018-09-18をcanonicalとした。
- confidence: `INDUSTRY_AND_MULTIPLE_ANALYSIS_CROSSCHECKED_WITH_DATE_CONFLICT`。

## identificationEvidence
- HAZUSEの型式・検定DBで型式 `パチスロベントー／BA`、検定番号 `7S1703`、メーカー バルテックを確認。
- 2017年の同シリーズ「半額弁当争奪戦!!」とは別機種で、本機は2018年A+RT版。

## performanceCore

### payoutRateBySetting
- setting1: 98.4%
- setting3: 100.7%
- setting5: 105.4%
- setting7: 109.2%

HAZUSE、K-Navi、ちょんぼりすた、当時グリーンべると掲載レンジが一致。後年5号機クロニクルには別の機械割系列があるため下記conflictsで分離。

### initialHitBySetting
SUPER BIG（全設定共通）:
- setting1: 1/8192.0
- setting3: 1/8192.0
- setting5: 1/8192.0
- setting7: 1/8192.0

BIG（SUPER BIGを除く解析上のBIG群）:
- setting1: 1/297.9
- setting3: 1/288.7
- setting5: 1/269.7
- setting7: 1/258.0

REG:
- setting1: 1/312.1
- setting3: 1/295.2
- setting5: 1/277.7
- setting7: 1/262.1

ボーナス合算:
- setting1: 1/149.6
- setting3: 1/143.4
- setting5: 1/134.6
- setting7: 1/128.0

### baseGamesPer50
- HAZUSE: 設定1～7で約32.4～34.8G/50枚。
- ちょんぼりすた: headline約32G/50枚。
- canonical: `約32.4～34.8G/50枚（設定差を含む解析レンジ）`。

### netIncrease
- RT「半値印証時刻」: 約0.2枚/G。

### basicPayout
- SUPER BIG: 最大252枚。
- BIG: 最大252枚。
- REG: 最大98枚。
- RT「半値印証時刻」: 1セット20G、CZとのループ率約60%超。
- SUPER BIG後: 次回BIG成立まで継続する無限RT「氷結モード」。当時業界記事では突入時獲得期待500枚over。

### ceiling
- 一般的なボーナス/ART強制当選型天井ではなく、通常時333Gまたは555G到達で周期CZへ移行するハマり救済を搭載。
- REG当選ではこの周期到達までのゲーム数がリセットされないとの解析記載あり。

## modeSpecificMinimumData
- BIG後はCZを経由してRTへ突入。
- 通常時333G/555G到達でもCZへ移行。
- CZは転落式で、BAR揃いでRT突入。RTとCZのループ率は約60%over。
- SUPER BIG後は無限RT「氷結モード」。REGでは無限RTが終了しない。
- 詳細小役別RT/CZ抽選・全演出法則は実機完全再現領域のため収集対象外。

## resetBehavior

### settingChangeBehavior
- ちょんぼりすたの朝一比較表は設定変更時の「天井」「内部状態」「ステージ」をすべて「調査中」と掲載。
- 機種名、型式 `パチスロベントー／BA`、バルテック、設定変更/リセット/朝一/据え置き/電源OFF ON/333G/555G/RT/CZを組み替えて再探索したが、本機固有の確定契約を別系統資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時を独立条件として、333G/555G周期カウンタ・CZ/RT内部状態・ステージの扱いを確定する本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- ちょんぼりすたの朝一比較表は電源OFF→ON時の「天井」「内部状態」「ステージ」をすべて「調査中」と掲載。
- 据え置き一般論から推定せず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常時333G/555G周期CZ用ゲーム数について、REG当選ではリセットされないことは確認。
- 設定変更/純電断時の周期カウンタRESET/CARRYOVERは `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 設定変更時に333G/555G周期が短縮・変更される公開契約/数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 周期CZを一般的な強制当選天井とは区別して保存。

### modeAfterReset
- 設定変更専用モード、朝一専用モード、周期選択振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更/据え置き/純電断時のCZ・RT・氷結モード・ステージ処理: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機固有の有利区間朝一処理を直接示す資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機等の一般論を本機固有契約へ昇格しない。

### resetBenefits
- 朝一設定変更による周期短縮、CZ優遇、RT優遇等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、ステージ等による設定変更/据え置き判別の確定条件・発生率: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 朝一専用当選率、設定変更時周期振り分け、短縮G数、ガックン率等: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18`: HAZUSEは9/17を導入開始日、グリーンべるとは9/17を納品予定、日刊スポーツ/K-Navi/ちょんぼりすた/すろぱちくえすとは9/18ホール導入。定義差を潰さず両方保持し、canonicalは9/18。
- `CONFLICT_PAYOUT_RETROSPECTIVE`: 5号機クロニクルは設定1/3/5/7を98.79/100.52/104.17/107.07%と掲載する一方、当時業界記事・HAZUSE・K-Navi・ちょんぼりすたは98.4/100.7/105.4/109.2%で一致。平均せず、当時複数一致系列をcanonical performanceCoreとした。

## missingFields
- 設定変更/据え置き/電源OFF→ON時の333G/555G周期カウンタ処理。
- 設定変更/据え置き/純電断時のCZ/RT/ステージ状態契約。
- 本機固有の有利区間朝一処理。
- 本機固有の設定変更判別条件・朝一公開数値。

## sources
取得日: 2026-09-10

1. グリーンべると — チャンスゾーンとRTが約60%でループ（2018-07-11）
   - https://web-greenbelt.jp/00010603/
   - A+RT、SBIG/BIG/REG、合算・出玉率レンジ、RT20G/0.2枚、CZ、333G/555G、氷結モード、納品9/17予定。
   - reliability: `INDUSTRY_CONTEMPORARY`
2. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2018-08-31
   - https://www.nikkansports.com/amusement/pachislot/news/201808310000459.html
   - 2018-09-18群に本機を掲載。
   - reliability: `INDUSTRY_CALENDAR`
3. HAZUSE — パチスロ ベン・トー～狼たちの夜～
   - https://hazuse.com/machine/pachislot/7S1703/
   - 型式 `パチスロベントー／BA`、検定番号7S1703、確率、機械割、32.4～34.8G/50枚、獲得枚数。導入開始9/17表記。
   - reliability: `ANALYSIS_HIGH_MACHINE_DB`
4. K-Navi — パチスロ ベン・トー～狼たちの夜～
   - https://p-kn.com/slot/3061/
   - ホール導入9/18、確率、機械割、獲得枚数、RT/CZ仕様。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
5. ちょんぼりすた — ベン・トー(RT) 解析
   - https://chonborista.com/slot/baltec/65423/
   - 導入9/18、約32G、確率/機械割、333G/555G周期CZ、REGでは周期G非リセット、朝一比較表の設定変更/電断項目「調査中」。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
6. パチマガスロマガ — パチスロ ベン・トー ～狼たちの夜～
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/60/a.php
   - A+RT、RT約60%ループ、SUPER BIG後無限RT等のゲーム性。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
7. P-WORLD — パチスロ ベン・トー ～狼たちの夜～
   - https://www.p-world.co.jp/machine/database/8709
   - A+RT、RT20G/0.2枚、60%over、各ボーナス獲得枚数、無限RT。
   - reliability: `INDUSTRY_MACHINE_DB`
8. 5号機クロニクル — バルテック5号機一覧
   - https://5goki.com/baltec
   - 後年回顧機械割98.79/100.52/104.17/107.07%。当時複数資料とCONFLICTとして保持。
   - reliability: `RETROSPECTIVE_SECONDARY`
