# No.1220 クロノス～刻の支配者～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: クロノス～刻の支配者～（クロノス 刻の支配者）
- manufacturer: ベルコ
- releaseDateCanonical: 2018-08-06
- generation: 5号機 / 5.9号機
- systemType: A+ART / W-ART
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ベルコ公式は「2018年8月登場」。
- Amusement Japanは2018-06-14の内覧会記事で導入予定日を2018-08-06と明記。
- 日刊スポーツ導入カレンダー、すろぱちくえすと、ちょんぼりすたも2018-08-06で一致。
- confidence: `INDUSTRY_AND_ANALYSIS_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
- setting1: 97.0%
- setting2: 99.0%
- setting3: 101.0%
- setting4: 104.0%
- setting5: 106.0%
- setting6: 108.0%
- すろぱちくえすと、ちょんぼりすた、5号機クロニクル、pacnkで一致。

### initialHitBySetting
ART初当たり:
- setting1: 1/368.7
- setting2: 1/358.5
- setting3: 1/349.4
- setting4: 1/339.9
- setting5: 1/331.7
- setting6: 1/322.9
- ベルコ公式掲載値と複数解析資料で一致。

ボーナス合算:
- setting1: 1/101.9
- setting2: 1/96.8
- setting3: 1/92.2
- setting4: 1/88.0
- setting5: 1/84.1
- setting6: 1/80.4

### baseGamesPer50
- 約33G/50枚。

### netIncrease
- ART単体: `CONFLICT_APPROX_1_6_VS_1_7枚/G`。
  - すろぱちくえすと: 約1.6枚/G。
  - ちょんぼりすた、パチマガスロマガ: 約1.7枚/G。
- ボーナス込み: 約2.0枚/Gで複数資料一致。
- P-WORLDおよび一部業界記事は約2.0枚/GをART表現として掲載するが、ボーナス込み表記との定義混在があるため単体純増のcanonicalへは採用しない。

### basicPayout
- クロノスボーナス: 約42枚。
- クロノスチャンス: 最大33GのST型ART。
- クロノスタイム: 次回クロノスボーナスまで継続するループ&ストック型ART。

### ceiling
- 通常ゲーム数天井: `NONE / 非搭載`。

## modeSpecificMinimumData
- 通常時はCZ「クロノスゾーン」「超クロノスゾーン」からARTを目指す。
- クロノスチャンスは最大33G、クロノスタイムは次回ボーナスまで継続。
- パチマガスロマガでは有利区間を連続1300G消化するとスペシャルクロノスタイムが発生し、パンクなしART200G上乗せで1500G到達へつながる仕様を掲載。
- 内部CZ抽選やストック詳細は物差し目的外のため収集しない。

## resetBehavior

### settingChangeBehavior
- ちょんぼりすたの本機専用「朝一リセット恩恵」表では設定変更時の内部状態・ステージとも当時`調査中`。
- その後、機種名/表記揺れ/メーカー名 + 設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間で再探索したが、本機固有の確定契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時を独立条件として直接示す本機固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電源OFF→ONを据え置きへ自動転記しない。

### powerCycleBehavior
- ちょんぼりすたの本機専用表では電源OFF→ON時の内部状態・ステージとも当時`調査中`。
- 追加再探索でも直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE`。
- 有利区間連続1300Gに関するカウンタの設定変更/据え置き/純電断別挙動は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井・短縮天井: `NOT_APPLICABLE`。

### modeAfterReset
- 朝一専用モード、設定変更時CZ優遇等の直接契約: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更/純電断時の内部状態は当時解析が調査中のままで、後続資料でも固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機は5.9号機A+ARTで有利区間を使用し、連続1300G消化時のスペシャルクロノスタイム仕様は確認。
- ただし設定変更・据え置き・純電源OFF→ONごとの有利区間朝一処理を直接説明する本機固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論から補完しない。

### resetBenefits
- 通常天井短縮、朝一ART/CZ当選率優遇、専用モード等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン条件/発生率、ランプ/ステージ等による確定判別は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス/小役確率による通常の設定推測は存在するが、設定変更判別とは別なのでresetDetectionへ混同しない。

### numericResetData
- 設定変更時のみのモード振り分け、朝一当選率、リセット恩恵率、ガックン率など比較可能な公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_ART_NET_INCREASE_APPROX_1_6_VS_1_7_PER_G`: すろぱちくえすと=約1.6枚/G、ちょんぼりすた/パチマガスロマガ=約1.7枚/G。ボーナス込み約2.0枚/Gは一致。平均化しない。
- P-WORLD等の「ART約2.0枚/G」はボーナス込みの扱いと定義が混在する可能性があるため、単体純増の競合値へ機械的に追加しない。

## missingFields
- 正式型式名。
- 検定番号。
- ART単体純増の1.6/1.7枚/G競合裁定。
- 設定変更/据え置き/純電源OFF→ONの本機固有内部状態契約。
- 有利区間連続ゲーム数の設定変更/据え置き/純電断別処理。
- 本機固有ガックン確定条件/発生率。

## sources
取得日: 2026-09-10

1. ベルコ公式 — クロノス～刻の支配者～
   - https://www.s-bellco.co.jp/products/slot/chronos/
   - 2018年8月、5号機ART、設定別ART確率。
   - reliability: `OFFICIAL`
2. Amusement Japan — ベルコ「お盆前に2機種導入」
   - https://amusement-japan.co.jp/article/detail/10000668/
   - 5.9号機A+ART/W-ART、2018-08-06導入予定。
   - reliability: `INDUSTRY`
3. グリーンべると — ベルコ、PS2機種同時発表
   - https://web-greenbelt.jp/00010517/
   - 33Gクロノスチャンス、クロノスタイム、W-ART構造。
   - reliability: `INDUSTRY`
4. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2018-07-27
   - https://www.nikkansports.com/amusement/pachislot/news/201807270000405.html
   - 2018-08-06導入群に本機を掲載。
   - reliability: `INDUSTRY_CALENDAR`
5. すろぱちくえすと — クロノス 刻の支配者
   - https://www.slopachi-quest.com/article/chronos/
   - 2018-08-06、約33G/50枚、ART約1.6枚/G、ボナ込約2.0枚/G、約42枚、天井非搭載、設定別性能。
   - reliability: `ANALYSIS_HIGH`
6. ちょんぼりすた — クロノス
   - https://chonborista.com/slot/belko-slot/61320/
   - 2018-08-06、約33G/50枚、ART約1.7枚/G、ボナ込約2.0枚/G、設定別ART/ボーナス合算/機械割、天井非搭載。朝一設定変更/電源OFF→ONの内部状態・ステージは当時調査中。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
7. パチマガスロマガ — クロノス～刻の支配者～
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/101/a.php
   - ART約1.7枚/G（ボーナス込み約2.0枚/G）。
   - reliability: `ANALYSIS_HIGH_PERIOD_DB`
8. パチマガスロマガ — ゲーム性まるわかり解説
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/101/l.php
   - CZ/ART構造、有利区間1300G連続消化時のスペシャルクロノスタイム。
   - reliability: `ANALYSIS_HIGH_PERIOD_DB`
9. 5号機クロニクル — ベルコ
   - https://5goki.com/bellco
   - 設定別機械割の照合。
   - reliability: `RETROSPECTIVE_DB`
10. P-WORLD — クロノス～刻の支配者～
   - https://www.p-world.co.jp/machine/database/8678
   - ベルコ、ART/CZ/リアルボーナス、クロノスボーナス約42枚、W-ART構造。
   - reliability: `INDUSTRY_DB`
