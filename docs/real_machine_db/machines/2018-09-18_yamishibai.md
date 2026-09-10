# No.1232 パチスロ 闇芝居

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ 闇芝居
- manufacturer: ネット
- releaseDateCanonical: 2018-09-18
- generation: 5.9号機
- systemType: ノーマル / Aタイプ / 技術介入
- formalModelName: `闇芝居/ND`（実機販売系資料で確認。公的検定番号は未固定）
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- すろぱちくえすと、ちょんぼりすた、K-Naviがいずれも2018-09-18導入で一致。
- 本DBでは2018-09-18をcanonicalとする。
- confidence: `MULTIPLE_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- P-WORLD、K-Navi、複数解析でメーカーはネット、ノーマルタイプ/技術介入機として一致。
- 中古実機資料では型式名 `闇芝居/ND` を確認できるが、公的/業界一次の型式・検定番号対照を今回固定できなかったため、型式はSECONDARY確認として保持し、検定番号はUNVERIFIED_AFTER_RESEARCH。

## performanceCore
### payoutRateBySetting
- setting1: 97.0%
- setting2: 99.0%
- setting5: 103.1%
- setting6: 107.0%

複数解析で一致。

### initialHitBySetting
BIG合算:
- setting1: 1/228
- setting2: 1/228
- setting5: 1/228
- setting6: 1/212

REG:
- setting1: 1/280
- setting2: 1/265
- setting5: 1/228
- setting6: 1/212

ボーナス合算:
- setting1: 1/125
- setting2: 1/122
- setting5: 1/114
- setting6: 1/106

赤BIG / 青BIG:
- setting1: 1/478 / 1/436
- setting2: 1/436 / 1/478
- setting5: 1/478 / 1/436
- setting6: 1/422 / 1/428

### baseGamesPer50
- setting1: 27.6G/50枚
- setting2: 28.3G/50枚
- setting5: 29.5G/50枚
- setting6: 29.5G/50枚

パチマガスロマガ系資料、すろぱちくえすと、設定判別資料で照合。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`
- AT/ART/RTによる継続純増軸はなし。

### basicPayout
- BIG: 最大311枚
- REG: 最大103枚
- BIG/REGとも技術介入で最大枚数取得。

### ceiling
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`

## modeSpecificMinimumData
- 通常時は「通常モード / 闇芝居モード / 仮面モード」の3種類を選択可能だが、これは告知・演出タイプの選択であり、初当たり性能を左右する内部モードとして扱わない。
- ボーナスのみで出玉を増やすノーマルタイプ。
- 実機完全再現用の小役同時当選内訳や演出詳細は物差し必須範囲外。

## resetBehavior
### settingChangeBehavior
- 設定変更時の本機固有内部処理を直接示す資料は、検索語・資料系統を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 「朝一の恩恵などは無し」とする当時解析は確認できるが、これは設定変更時の全内部状態処理を意味すると解釈しない。

### carryOverBehavior
- 据え置き時の独立した本機固有挙動は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 天井非搭載のため宵越し天井ゲーム数という比較軸は存在しない。

### powerCycleBehavior
- 電源OFF→ONのみの本機固有内部処理を設定変更/据え置きと分離して直接固定できる資料は未取得。
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため `NOT_APPLICABLE_NO_CEILING_COUNTER`。
- REG中の6000G超条件等は設定判別演出用累積条件であり、ホール朝一天井カウンタとして扱わない。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- リセット短縮天井・変更天井はなし。

### modeAfterReset
- 初当たりを左右する通常時内部モード/朝一専用モードの公開情報は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 3種類の「通常/闇芝居/仮面モード」はプレイヤー選択式の告知演出モードであり、内部モードではない。

### stateAfterReset
- AT/ART/RT等の継続内部状態は本機に非搭載。
- 設定変更/据え置き/純電断時の成立済みボーナス等を含む厳密な内部状態処理は物差し用途の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機世代だが本機はボーナス主体のノーマルタイプ。
- 本機固有の朝一有利区間ランプ/有利区間移行を客行動に結び付ける直接資料は確認できず `NONE_CONFIRMED_AFTER_RESEARCH_FOR_NORMAL_TYPE`。
- 一般的な5.9号機規則から本機固有契約へ推定昇格しない。

### resetBenefits
- 当時解析で「朝一の恩恵などは無し」と明記。
- canonical: `NONE_CONFIRMED / 朝一リセット恩恵なし`。

### resetPenalties
- 設定変更時のみ発生する公開された不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、液晶/告知モード、ランプ等による設定変更判別契約は検索語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- リセット専用モード振り分け、朝一当選率、短縮天井、恩恵発生率などの公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- なし（現時点）。
- 型式 `闇芝居/ND` は中古実機系資料で一致するが、公的検定番号との対照未取得のためconfidenceを上げていない。

## missingFields
- 公的/業界一次資料で固定できる検定番号。
- 設定変更時の本機固有内部処理。
- 据え置き時の独立内部処理。
- 純電源OFF→ON時の独立内部処理。
- 本機固有の設定変更判別挙動。

## sources
取得日: 2026-09-10

1. すろぱちくえすと — https://www.slopachi-quest.com/article/yamishibai/
   - 導入2018-09-18、5.9号機ノーマル、設定別機械割/ボーナス、50枚ベース、BIG311枚/REG103枚、天井非搭載。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
2. ちょんぼりすた — https://chonborista.com/slot/net-slot/63462/
   - 導入2018-09-18、設定別ボーナス/機械割、天井非搭載、「朝一の恩恵などは無し」、技術介入仕様。
   - reliability: `ANALYSIS_HIGH`
3. K-Navi — https://p-kn.com/slot/3048/
   - 2018-09-18ホール導入開始、ノーマルタイプ、設定別BIG/REG/合算、BIG/REG払い出し条件。
   - reliability: `ANALYSIS_HIGH_ARCHIVE`
4. P-WORLD — https://www.p-world.co.jp/machine/database/8692
   - メーカー ネット、ノーマル/技術介入、BIG最大311枚、REG最大103枚、AT/ART非搭載。
   - reliability: `INDUSTRY_MACHINE_DB`
5. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/175/c.php
   - 設定別50枚ゲーム数 27.6 / 28.3 / 29.5 / 29.5G。
   - reliability: `ANALYSIS_HIGH_ARCHIVE`
6. 5号機クロニクル NET — https://5goki.com/net
   - NET 5号機一覧、2018-09導入、機械割97.0/99.0/103.1/107.0%。
   - reliability: `ANALYSIS_SINGLE_RETROSPECTIVE`
7. 中一商事 — https://www.nakaiti.com/html/Net032.html
   - 中古実機情報として型式名 `闇芝居/ND`、ノーマル、BIG311枚/REG103枚。
   - reliability: `SECONDARY_HARDWARE_RECORD`

## researchNotes
- `闇芝居 / パチスロ闇芝居 / ヤミシバイ / 闇芝居ND / 闇芝居/ND / NET / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 天井 / 有利区間 / 型式 / 検定番号` を組み替えて再探索。
- メーカー公式系、P-WORLD、K-Navi、当時解析、パチマガスロマガ、5号機回顧DB、中古実機型式資料まで横断。
- 「朝一恩恵なし」は確認できたが、そこから設定変更/据え置き/純電断の全内部処理を推定していない。
