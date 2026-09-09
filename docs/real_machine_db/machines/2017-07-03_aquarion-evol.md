machineName: パチスロ アクエリオンEVOL
manufacturer: SANKYO
releaseDate: 2017-07-03
recordNumber: 1097
generation: 5号機
systemType: ART / CZ経由 / 疑似ボーナス搭載 / ST式上位ART
formalModelName: パチスロアクエリオンEVOL
certificationNumber: 7S0330
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- SANKYO公式オンライン博物館で「パチスロ アクエリオン EVOL」、導入年月2017.07、ART純増約1.9枚/G、CZ/ART設定別確率を確認。
- HAZUSEで型式 `パチスロアクエリオンEVOL`、検定番号 `7S0330`、メーカーSANKYO、導入開始日2017-07-03を確認。
- K-Navi、一撃、必勝本、すろぱちくえすとでも2017-07-03導入を照合。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
- 設定1: **96.4%**
- 設定2: **97.6%**
- 設定3: **99.9%**
- 設定4: **103.8%**
- 設定5: **107.6%**
- 設定6: **110.0%**
- 必勝本、一撃、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
- 設定1: **1/595**
- 設定2: **1/575**
- 設定3: **1/546**
- 設定4: **1/528**
- 設定5: **1/473**
- 設定6: **1/450**

### CZ「エクスタシーゾーン」
- 設定1: **1/257**
- 設定2: **1/248**
- 設定3: **1/235**
- 設定4: **1/226**
- 設定5: **1/203**
- 設定6: **1/191**
- SANKYO公式、HAZUSE、一撃、P-WORLDで一致。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS

## baseGamesPer50
- **約42G/50枚**。
- すろぱちくえすと、スロットガーデン、当時解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「アクエリオンライジングタイム」: **約1.9枚/G**。
- SANKYO公式、グリーンべると、HAZUSE、P-WORLD等で一致。
reliability: OFFICIAL_INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## basicPayout
- ART「アクエリオンライジングタイム」: **1セット30G+α**。
- ART中の「スペシャルタイム」は5〜11GのST式上位ART。疑似ボーナスも搭載するが、実機物差し上はART基本性能を主系列とする。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS

## modeSpecificMinimumData
- 通常時はCZ「エクスタシーゾーン」経由を主軸にARTを目指す。
- CZは8G+αのST方式、ART期待度は約40%。
- 通常時の内部状態は通常/高確/超高確の3種。朝一リセット挙動に必要な範囲のみresetBehaviorへ記録し、通常時全移行率は物差しDB対象外。
- 通常時**999G**で仮天井→CZ、**1555G**で本天井→ART。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS_FOR_SYSTEM / ANALYSIS_HIGH_FOR_CEILING

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_RESET_CEILING_SHORTENING
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は**天井ゲーム数RESET**。
- 同時に**0〜255Gの天井短縮幅を均等抽選**する。
- モードは**再抽選**、内部状態も**再抽選**。
- 液晶ステージは**ネオ・クーロン**から開始。
- 液晶ゲーム数カウンターは**0から**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き専用契約を独立して詳細明記する資料は限定的だが、電源OFF→ONのみでは天井・モード・状態を引き継ぐことが複数解析で一致。
- ホールの設定据え置きかつ通常の電断復帰では、内部天井ゲーム数を宵越し可能とする解析運用情報が整合する。
- ただし「据え置き」と「純電断」を完全同義とするメーカー公式資料は未取得のため、直接契約信頼度はANALYSIS_HIGHに限定する。
reliability: ANALYSIS_HIGH_WITHOUT_MANUFACTURER_RESET_DOCUMENT

### powerCycleBehavior
- 電源OFF→ONのみの場合、**天井ゲーム数CARRYOVER**。
- **モードCARRYOVER**、**内部状態CARRYOVER**。
- 液晶ステージは原則ネオ・クーロン。ただし**お風呂ステージ/CZ/ART中は引継ぎ**。
- 液晶ゲーム数カウンター表示は**0から**になるが、内部天井ゲーム数は引き継ぐ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- 設定変更: **RESET**。
- 電源OFF→ON: **INTERNAL_CARRYOVER / DISPLAY_COUNTER_RESETS_TO_0**。
- 通常の仮天井は999G、本天井は1555G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 設定変更時は**0〜255G短縮**を均等抽選（各短縮幅 **1/256**）。
- 仮天井: 通常999G → 朝一 **749〜999G**。
- 本天井: 通常1555G → 朝一 **1300〜1555G**。
- この短縮幅はゾロ目ゲーム数抽選にも同じ分だけ前倒しで作用する解析情報あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SHORTENING; ANALYSIS_HIGH_FOR_ZOROME_SHIFT

### modeAfterReset
- 設定変更: **RESELECTED**。
- 電源OFF→ON: **CARRYOVER**。
- 設定変更時の具体的モード振り分け数値は、機種名/型式/SANKYO/アクエリオンシリーズと「設定変更・リセット・朝一・モード振り分け」を組み替えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESELECT/CARRYOVER; UNVERIFIED_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更: **RESELECTED**。
- 電源OFF→ON: **CARRYOVER**。
- 通常/高確/超高確の3状態を持つが、設定変更時の初期状態振り分け公開数値は再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESELECT/CARRYOVER; UNVERIFIED_FOR_NUMERIC_INITIAL_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の朝一恩恵は**0〜255Gの均等天井短縮**。
- 仮天井が最短749G、本天井が最短1300Gとなる。
- 朝一専用の追加ART/CZ直撃率や公開された固定高確スタート率は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CEILING_SHORTENING

### resetPenalties
- 公開された設定変更専用の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更/純電断とも液晶ゲーム数カウンターは0表示から始まるため、**表示0だけでは変更確定にならない**。
- 純電断では内部天井を引き継ぐため、前日ゲーム数と当日の仮天井/本天井発動位置の整合は据え置き推測材料になり得る。
- 本機固有の確定的なリールガックン契約は「ガックン/リール/設定変更判別/朝一」等へ検索語を変更しても高信頼直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_COUNTER_BEHAVIOR; UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
- resetCeilingShorteningRange: **0〜255G**。
- resetCeilingShorteningDistribution: **各短縮幅1/256の均等抽選**。
- resetFirstCeilingRange: **749〜999G → CZ**。
- resetSecondCeilingRange: **1300〜1555G → ART**。
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- publicFirstNGameHitRateAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicAdditionalResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- systemTypeMisclassification: 後年の5号機クロニクル検索結果にA+ART、実ボーナス確率・純増約1.4枚/Gとする別仕様相当の数値が混在する。一方、SANKYO公式・グリーンべると・HAZUSE・P-WORLD・一撃・必勝本は本機を本物ボーナス非搭載のART特化タイプ、純増約1.9枚/Gとして一致するため、後年クロニクル側は**別機種/別世代情報混入の疑いが高いCONFLICT_SOURCE_MISMATCH**としてcanonicalから除外。
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。

## missingFields
- manufacturer-official exact payoutRateBySetting: UNVERIFIED; payout rate relies on multi-source analysis.
- manufacturer-official resetBehavior document: UNVERIFIED_AFTER_RESEARCH。
- numeric reset mode distribution: UNVERIFIED_AFTER_RESEARCH。
- numeric reset internal-state distribution: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun/reset indicator: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. SANKYOオンライン博物館 パチスロ アクエリオン EVOL — https://www.sankyo-fever.jp/collection/691/
2. HAZUSE パチスロ アクエリオンEVOL — https://hazuse.com/machine/pachislot/7S0330/
3. グリーンべると / P-WORLD業界ニュース「パチンコのSTシステムを搭載したパチスロ登場」 — https://news.p-world.co.jp/articles/9412/greenbelt
4. P-WORLD 機種DB — https://www.p-world.co.jp/machine/database/8411
5. パチ＆スロ必勝本 基本スペック — https://p.hisshobon.jp/machine/2992/1/64355
6. 一撃 機種TOP — https://1geki.jp/slot/s_aquarionevol/
7. 一撃 天井/設定変更 — https://1geki.jp/slot/s_aquarionevol/3/
8. すろぱちくえすと — https://www.slopachi-quest.com/article/aquarion-evol/
9. ちょんぼりすた — https://chonborista.com/slot/sankyo-slot/39088/
10. K-Navi — https://p-kn.com/slot/2800/
11. スロットガーデン — https://xn--mckza4ard4ttb2d.com/aquarionevol
12. スロット解析情報~すろかい~ — https://slotkaiseki.hatenablog.com/entry/2017/05/21/135033
