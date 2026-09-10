# No.1214 SLOTハイスクール・フリート

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: SLOTハイスクール・フリート
- manufacturer: ユニバーサルブロス
- releaseDateCanonical: 2018-07-23
- generation: 5.9号機 / 5号機
- systemType: A+ART
- formalModelName: `SLOTハイスクール・フリートBU`
- certificationNumber: `7S1684`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`SLOTハイスクール・フリートBU`・検定番号`7S1684`と紐づけて導入開始日2018-07-23を掲載。
- K-Navi、すろぱちくえすと、ちょんぼりすたも2018-07-23で一致。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED_WITH_MODEL_ID`。

## performanceCore

### payoutRateBySetting
- setting1: 97.6%
- setting2: 99.3%
- setting3: 101.2%
- setting4: 103.5%
- setting5: 105.0%
- setting6: 108.2%

HAZUSE、ちょんぼりすた、期待値見える化で一致。

### initialHitBySetting
同色BIG（全設定共通）:
- setting1-6: 1/468.1

異色BIG:
- setting1: 1/348.6
- setting2: 1/348.6
- setting3: 1/282.5
- setting4: 1/282.5
- setting5: 1/262.1
- setting6: 1/226.8

ボーナス合算:
- setting1: 1/199.8
- setting2: 1/199.8
- setting3: 1/176.2
- setting4: 1/176.2
- setting5: 1/168.0
- setting6: 1/152.8

ART初当たり:
- setting1: 1/539.7
- setting2: 1/539.7
- setting3: 1/513.5
- setting4: 1/513.5
- setting5: 1/503.2
- setting6: 1/482.4

ボーナス+ART合算:
- setting1: 1/145.8
- setting2: 1/145.8
- setting3: 1/131.2
- setting4: 1/131.2
- setting5: 1/126.0
- setting6: 1/116.0

### baseGamesPer50
- setting1: 35.5G/50枚
- setting2: 37.3G/50枚
- setting3: 35.7G/50枚
- setting4: 38.0G/50枚
- setting5: 38.1G/50枚
- setting6: 38.4G/50枚
- パチマガスロマガ/HAZUSE等のレンジ表記35.5〜38.4G/50枚と整合。

### netIncrease
- ART「High Free Dive」: 約1.0枚/G。

### basicPayout
- 同色BIG: 通常時約150枚 / ART中最大204枚。
- 異色BIG: 通常時約104枚 / ART中最大144枚。
- ART「High Free Dive」: 1セット約40G、セット継続型。

### ceiling
- 一般的な通常ゲーム数天井: `NOT_APPLICABLE / 非搭載`。
- ただし、有利区間が80G継続するとART当選となる機種固有の救済措置あり。通常ゲーム数天井とは定義を分離する。

## modeSpecificMinimumData
- A+ART。通常時はBIGまたはスイカ契機などでARTを抽選。
- 有利区間は通常/高確の状態があり、有利区間中のBIG後32Gは高確。
- ARTは1セット約40G、純増約1.0枚/G。
- 有利区間80G継続時のART救済はホール/朝一挙動に関係するため保持するが、通常時の詳細ART抽選・バトル内部テーブルは収集対象外。

## resetBehavior

### settingChangeBehavior
- 朝一液晶ステージは、ちょんぼりすたの本機ページで設定変更時「艦内ステージ1」と掲載。
- 内部状態は同ページでは「調査中」。一方、期待値見える化は設定変更後「非有利区間へ」「有利区間ランプ消灯」と掲載するが、同ページは5.9号機規定を根拠としており、本機固有解析との識別が弱い。
- よって液晶ステージは`ANALYSIS_SINGLE_MACHINE_SPECIFIC`、内部状態/有利区間は下記CONFLICT/UNVERIFIED扱いとする。

### carryOverBehavior
- 「据え置き」を純電源OFF→ONから独立して解析した本機固有契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 朝一判別上は、純電源OFF→ON時の有利区間ランプ/状態引継ぎ情報が据え置き示唆として利用される資料があるが、設定据え置きと純電断を同義にはしない。

### powerCycleBehavior
- ちょんぼりすた: 電源OFF→ON時の内部状態は「調査中」、ステージは「引き継ぎ」。ただし非有利区間中の電源OFF→ONは艦内ステージ1、ボーナス内部成立中ならボーナス確定画面へ移行と掲載。
- 期待値見える化: 電源OFF→ON時は有利区間ランプ・内部状態を引き継ぐと掲載。
- 内部状態について「調査中」と「引き継ぐ」が競合するため、確定契約には昇格せず `CONFLICT_POWER_CYCLE_INTERNAL_STATE_UNDER_INVESTIGATION_VS_CARRY_OVER`。
- ステージについては条件付き引継ぎとして保持。

### gameCounterReset
- normalGameCeilingCounter: `NOT_APPLICABLE_NO_NORMAL_GAME_CEILING`。
- advantageousSection80GReliefCounter: 設定変更/据え置き/純電断での厳密なカウンタ処理を直接示す本機固有一次解析は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- normalResetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_GAME_CEILING`。
- 有利区間80G救済は存在するが、リセット専用短縮天井ではない。

### modeAfterReset
- 設定変更専用の朝一モード振り分け・朝一専用出玉モード: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: `UNVERIFIED_AFTER_RESEARCH`（本機固有解析は調査中。非有利区間開始とする二次資料あり）。
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF_ON: `CONFLICT_POWER_CYCLE_INTERNAL_STATE_UNDER_INVESTIGATION_VS_CARRY_OVER`。

### advantageousSectionReset
- 設定変更時: 期待値見える化は有利区間ランプ消灯・非有利区間へ移行とするが、5.9号機規定由来の説明を含むため、本DBでは本機固有直接契約として`UNVERIFIED_WITH_STRONG_REGULATORY_INDICATION`に留める。
- purePowerOFF_ON: 同資料は有利区間ランプ/内部状態引継ぎを掲載。ちょんぼりすたは内部状態「調査中」なので、`CONFLICT_ANALYSIS_SOURCES`。
- carryOver: 純電断とは分離し `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 有利区間ランプが点灯したまま朝一を迎えた場合、据え置き推測材料になるとの攻略上の説明あり。

### resetBenefits
- 設定変更専用の通常ゲーム数天井短縮・ART初当たり優遇・専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間80G救済は常設機能でありリセット恩恵としては扱わない。

### resetPenalties
- 設定変更固有の主要不利要素として公開された数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 期待値見える化では、前日有利区間ランプ点灯状態から朝一もランプ点灯が残っていれば据え置き濃厚とする実戦上の判別材料を掲載。
- 設定変更時の液晶は艦内ステージ1、純電断時は原則ステージ引継ぎ。ただし非有利区間中の純電断も艦内ステージ1となるため、ステージだけでの確定判別は不可。
- 本機固有ガックン発生条件/確率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- normalResetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_GAME_CEILING`
- advantageousSectionRelief: `80G_CONTINUOUS_ADVANTAGEOUS_SECTION -> ART`
- postBigAdvantageousHighState: `32G`
- resetSpecificModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetSpecificHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 有利区間80G継続: ART救済発動。これはリセット専用値ではなく常設の有利区間救済値。
- 有利区間中BIG後32G: 高確/有利区間保証。
- リセット専用の朝一特定G以内ART当選率・専用モード振り分け・短縮天井値は確認されず。

## conflicts
- powerCycleInternalState: `CONFLICT_POWER_CYCLE_INTERNAL_STATE_UNDER_INVESTIGATION_VS_CARRY_OVER`。
  - ちょんぼりすた: 電源OFF→ON時内部状態「調査中」。
  - 期待値見える化: 電源OFF→ON時内部状態/有利区間ランプ「引き継ぐ」。
- advantageousSectionOnSettingChange: 期待値見える化は設定変更後「非有利区間へ/ランプ消灯」と明記するが、説明根拠に5.9号機一般規定を含む。本機固有直接解析と一般規定由来の情報を混同しないため、canonical確定契約へは昇格しない。
- preReleaseCeilingLabel: 導入前記事には「5.9号機なのに天井あり」とする表現があるが、導入後解析は通常ゲーム数天井「非搭載」で一致。実態は有利区間80G継続時ART救済であり、通常天井とは定義を分けて保存。

## missingFields
- 据え置きを純電源OFF→ONから独立して示す本機固有内部状態/有利区間契約。
- 設定変更時の内部状態を疑義なく固定する本機固有解析。
- 純電源OFF→ON時内部状態について競合解消可能な追加資料。
- 有利区間80G救済カウンタの設定変更/据え置き/純電断時の個別処理。
- ガックン発生条件/率。

## sources
取得日: 2026-09-10

1. HAZUSE — SLOTハイスクール・フリート
   - https://hazuse.com/machine/pachislot/7S1684/
   - 型式、検定番号、導入日、メーカー、設定別機械割、ボーナス/ART確率、ベース、獲得枚数を確認。
   - confidence: `ANALYSIS_HIGH`
2. パチマガスロマガ — SLOTハイスクール・フリート
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/09/a.php
   - A+ART、50枚35.5〜38.4G、ART約1.0枚/G、1セット約40Gを確認。
   - confidence: `ANALYSIS_HIGH`
3. 一撃 — ボーナス確率 / 小役確率 / 設定変更
   - https://1geki.jp/slot/s_highfle/1/
   - https://1geki.jp/slot/s_highfle/4/
   - https://1geki.jp/slot/s_highfle/3/
   - 設定別ボーナス/ART確率、設定別ベース、当時時点の設定変更/電断状態「調査中」を確認。
   - confidence: `ANALYSIS_HIGH`
4. ちょんぼりすた — ハイスクール・フリート
   - https://chonborista.com/slot/universal-slot/59827/
   - 導入、性能、通常天井非搭載、有利区間80G救済、BIG後32G高確、朝一の設定変更/電源OFF→ONステージ条件を確認。
   - confidence: `ANALYSIS_HIGH`
5. 期待値見える化 — ハイスクールフリート
   - https://slotjin.com/slot/highschoolfleet/
   - 設定別性能、有利区間80G救済、朝一有利区間ランプ/内部状態の設定変更・電断比較を確認。
   - confidence: `ANALYSIS_SINGLE`
6. K-Navi — SLOTハイスクール・フリート
   - https://p-kn.com/slot/3024/
   - 導入開始2018-07-23、A+ARTを照合。
   - confidence: `ANALYSIS_HIGH`
7. すろぱちくえすと — ハイスクールフリート
   - https://www.slopachi-quest.com/article/high-school-fleet/
   - 導入、A+ART、ベース、純増、獲得枚数を照合。
   - confidence: `ANALYSIS_HIGH`

## qualityNotes
- 実機完全再現用のART内部バトル抽選・小役詳細・設定示唆演出詳細は収集しない。
- 「通常ゲーム数天井」と「有利区間80G救済」を同じ天井定義に混ぜない。
- 5.9号機一般規定だけから本機固有resetBehaviorを確定しない。
- 据え置きと純電源OFF→ONを同義にしない。
