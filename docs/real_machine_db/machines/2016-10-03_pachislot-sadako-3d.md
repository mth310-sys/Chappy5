machineName: パチスロ 貞子3D
manufacturer: ニューギン / Newgin
releaseDate: 2016-10-03
recordNumber: 1015
generation: 5号機 / 5.5号機期
systemType: ART / MB回数管理型ART
formalModelName: パチスロ貞子3D-Z
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_IDENTITY_PARTIAL_RELEASE_DATE_CONFLICT

## identity
- ニューギン発表を扱うグリーンべると/P-WORLD業界ニュースは2016-09-14時点で「納品は10月2日からの予定」と報道。
- ちょんぼりすた、pachislo-dataはホール導入日/導入予定日を2016-10-03とするため、本DBのcanonical releaseDateは2016-10-03。
- 一方、P-Summa/パチンコプラス系には2016-10-17全国導入予定の記録も残る。平均・黙殺せず `CONFLICT_RELEASE_DATE_2016_10_03_VS_2016_10_17` として保持。
- 型式名 `パチスロ貞子3D-Z` は中古実機流通資料で確認。検定番号は機種名/型式名/ニューギン/検定/6S系/公安委員会等へ検索語を変えて再探索したが直接固定できず UNVERIFIED_AFTER_RESEARCH。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE_WITH_IDENTITY_PARTIAL_AND_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.0% |
| 3 | 100.2% |
| 4 | 105.1% |
| 5 | 110.0% |
| 6 | 115.2% |
- 複数解析で同系列一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/345.3 |
| 2 | 1/332.7 |
| 3 | 1/309.3 |
| 4 | 1/265.9 |
| 5 | 1/228.7 |
| 6 | 1/199.1 |
- P-WORLDの精密値と複数解析の丸め値（1/345〜1/199）が整合。
- CZ「貞子チャレンジ」: 約1/1363.8、全設定共通。期待度約50%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約47〜47.32G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「貞子パニック」: 約1.8枚/G。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ARTは規定G数・規定枚数なしのMB回数管理型。
- ART中は「貞子魂」を保持し、MB成立（約1/10.8）ごとに原則1個消費。貞子魂が0になるまでART継続。
- ART開始時は「貞子復活の儀」で初期貞子魂を獲得。P-WORLDではLv1〜5の平均獲得数を4.5 / 4.8 / 5.9 / 8.3 / 21.6個と掲載。
- 固定獲得枚数ではないため、他方式の「1セット○枚」と同定義に混ぜない。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時内部モード: 低確 / 高確 / 連呪A / 連呪B。連呪A/Bにはロングあり。
- 連呪は転落式のART高確率状態で、ART期待度約30%とされる。
- ART間1600G到達で前兆を経てART。
- CZ「貞子チャレンジ」: 10G+α、期待度約50%。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ART間天井ゲーム数: RESET。
- 内部モード: RESELECT（低確/高確/連呪A/連呪B/各ロングを設定別に再抽選）。
- 設定変更専用の固定短縮天井は NONE_CONFIRMED_AFTER_RESEARCH。

### carryOverBehavior
- 据え置き時は天井進捗・内部モードをCARRYOVERとする設定変更/電断比較資料に整合。
- 据え置き専用再抽選・短縮天井は NONE_CONFIRMED_AFTER_RESEARCH。

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数 CARRYOVER。
- 内部モード: CARRYOVER。
- 液晶開始ステージ/表示上の固有初期化契約は、機種名+電源OFF ON/朝一/ステージ/据え置き等で再探索したが直接固定できず UNVERIFIED_AFTER_RESEARCH。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRYOVER。
- 通常天井: ART間1600G+前兆。

### ceilingAfterReset
- 設定変更後も公開上の最大天井はART間1600G+前兆。
- リセット専用固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

### modeAfterReset
- 設定変更時: 公開設定別テーブルでRESELECT。
- 据え置き / 純電源OFF→ON: CARRYOVER。

### stateAfterReset
- 本機の朝一状態は公開上の「低確/高確/連呪A/連呪B/ロング」モードテーブルで扱う。
- 別系統の独立内部状態テーブルは NONE_CONFIRMED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更後は高確25.0%スタートが公開され、さらに設定が高いほど連呪A/B開始率が上昇。
- 設定5・6のみ連呪Aロング1.6% / 連呪Bロング0.4%の朝一振り分けが公開されており、朝一挙動の設定推測材料になる。
- リセット専用天井短縮・初当たり保証は NONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 設定変更で前日のART間天井進捗を失う。
- 前日内部モードも再抽選されるため、良い連呪状態の据え置き価値を失う可能性がある。

### resetDetection
- 設定変更後のモード挙動、とくに連呪ロング相当の挙動は設定推測材料。ただしモードは内部状態であり単独の変更確定判別とはしない。
- 本機固有のメーカー保証ガックン、確定初期出目、ランプ、液晶ステージによる設定変更確定契約は、検索語・資料系統変更後も確認できず NONE_CONFIRMED_AFTER_RESEARCH。

### numericResetData
| 設定 | 低確 | 高確 | 連呪A | 連呪B | 連呪Aロング | 連呪Bロング |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 73.4% | 25.0% | 1.2% | 0.4% | 0% | 0% |
| 2 | 72.3% | 25.0% | 2.0% | 0.8% | 0% | 0% |
| 3 | 71.1% | 25.0% | 2.7% | 1.2% | 0% | 0% |
| 4 | 68.4% | 25.0% | 4.3% | 2.3% | 0% | 0% |
| 5 | 64.1% | 25.0% | 5.9% | 3.1% | 1.6% | 0.4% |
| 6 | 61.7% | 25.0% | 7.4% | 3.9% | 1.6% | 0.4% |
- 解析サイトのHTMLでは「高確25.0%」が行結合表示されるため検索抽出では設定1行だけに見えることがあるが、表は全設定共通25.0%として掲載されている。
- 設定変更後の連呪系合計（A/B/ロング）: 設定1 1.6%、2 2.8%、3 3.9%、4 6.6%、5 11.0%、6 13.3%。これは上表の公開値からの単純合算で、独立の解析値ではない。

## dataQualityNotes
- 10/03導入は「10/02納品開始予定」の業界一次資料と複数解析の10/03導入明記が整合するためcanonicalとしたが、10/17全国導入予定資料も残るのでCONFLICT保持。
- 機械割、ART初当たり、約47G/50枚、純増約1.8枚/G、1600G天井は複数資料で整合。
- 設定変更時の天井RESET/モード再抽選、純電断時の天井/モード引継ぎ、設定別朝一モード振り分けは複数解析で照合。
- 型式名は中古実機流通資料1系統のためANALYSIS_SINGLE相当。検定番号は十分な再探索後も未固定。

## conflicts
- CONFLICT_RELEASE_DATE_2016_10_03_VS_2016_10_17
  - 2016-10-03: ちょんぼりすた / pachislo-data。業界一次資料の10/02納品開始予定とも整合。
  - 2016-10-17: P-Summa / パチンコプラス系の全国導入予定記録。
- 参考: 「貞子復活の儀」Lv別平均貞子魂に資料差あり（P-WORLD/ちょんぼりすた系 4.5/4.8/5.9/8.3/21.6個に対し、別解析に2.0/2.6/4.0/6.4/17.4個系列）。基本物差しには固定獲得枚数を用いないため平均せず `CONFLICT_INITIAL_SADAKODAMA_AVERAGES` として保持。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の液晶開始ステージ/表示固有挙動: UNVERIFIED_AFTER_RESEARCH
- メーカー保証のガックン等変更確定判別: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. P-WORLD / グリーンべると業界ニュース — MB管理型の新感覚ホラーART、10/02納品開始予定
   - https://news.p-world.co.jp/articles/8654/greenbelt
2. P-WORLD — パチスロ 貞子3D
   - https://www.p-world.co.jp/machine/database/8155
3. ちょんぼりすた — 貞子3D スロット（性能、天井、朝一、設定変更時モード）
   - https://chonborista.com/slot/newgin-slot/24506/
4. pachislo-data — 貞子3D（10/03導入、天井、朝一モード）
   - https://pachislo-data.com/newgin/28930
5. 期待値見える化 — 貞子3D 天井/朝一
   - https://slotjin.com/zone/sadako3d/
6. ゆうべる — 朝一設定変更後挙動（設定変更/電断比較、公開モード振り分け）
   - https://yuberu-777.com/sadako3d-asaiti/
7. P-Summa — 2016-10-17全国導入予定記録（導入日CONFLICT側）
   - https://psumma.jp/pachislo/26440/
8. 楽天市場 中一商事 — 中古実機型式名 `パチスロ貞子3D-Z`
   - https://item.rakuten.co.jp/auc-nakaiti/3d/
