# No.1164 SLOT魔法少女まどか☆マギカA

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: SLOT魔法少女まどか☆マギカA
- manufacturer: エレコ
- releaseDateCanonical: 2017-12-18
- generation: 5.9号機（5号機）
- systemType: ノーマル / Aタイプ / プチRT / 技術介入
- formalModelName: `SLOT魔法少女まどか☆マギカAMA`
- certificationNumber: `7S1057`
- collectedAt: 2026-09-10

## releaseDateEvidence
- K-Naviはホール導入開始を2017-12-18とする。
- HAZUSEも導入開始日2017-12-18、メーカー エレコ、型式名`SLOT魔法少女まどか☆マギカAMA`、検定番号`7S1057`を掲載。
- ユニバーサル系公式ブログは2017-12-06時点で全国導入が約1週間後と案内しており、12/18導入と整合。
- PiDEA/Pachibee、グリーンべると系業界記事も2017年10月の発表時点でエレコ製ノーマルタイプとして報道。

## performanceCore

### payoutRateBySetting
#### marketPublished
- setting1: 97.8%
- setting2: 98.4%
- setting3: 100.4%
- setting4: 103.6%
- setting5: 107.8%
- setting6: 114.3%

#### fullStrategy
- setting1: 99.4%
- setting2: 100.1%
- setting3: 102.2%
- setting4: 105.6%
- setting5: 110.2%
- setting6: 117.2%

- 通常掲載値と完全攻略値は定義を分離して保持する。
- HAZUSEの機械割欄は`97.8 / 100.1 / 102.2 / 105.6 / 110.2 / 117.2%`と掲載され、設定2〜6が完全攻略値と一致する一方、設定1のみ通常値97.8%となる。複数当時系資料の通常/完全攻略2系列と整合しないため、HAZUSE表を平均・統合せず`CONFLICT_SOURCE_LABEL_OR_COPY_PAYOUT_TABLE_HAZUSE`として保持。

### bigBonusBySetting
- setting1: 1/256.0
- setting2: 1/256.0
- setting3: 1/256.0
- setting4: 1/247.3
- setting5: 1/229.1
- setting6: 1/206.7

### regularBonusBySetting
- setting1: 1/425.6
- setting2: 1/394.8
- setting3: 1/350.5
- setting4: 1/310.6
- setting5: 1/291.3
- setting6: 1/249.2

### bonusCombinedBySetting
- setting1: 1/159.8
- setting2: 1/155.3
- setting3: 1/147.9
- setting4: 1/137.7
- setting5: 1/128.3
- setting6: 1/113.0

### baseGamesPer50
- setting1: 約34.1G/50枚
- setting2: 約34.1G/50枚
- setting3: 約35.0G/50枚
- setting4: 約35.7G/50枚
- setting5: 約36.4G/50枚
- setting6: 約37.1G/50枚
- 設定1約34.1Gおよび全体約34.1〜37.1Gは複数二次資料で照合。設定別詳細は後年整理資料1系統のため`ANALYSIS_SINGLE_FOR_SETTING_BREAKDOWN`。

### netIncrease
- `NOT_APPLICABLE_BONUS_DOMINANT_NORMAL_TYPE`
- プチRTはボーナス契機の演出・状態遷移上重要だが、AT/ART系の純増物差しとは混同しない。

### basicPayout
- BIG: 最大311枚
- プチボーナス(REG): 最大103枚
- 両ボーナスに最大獲得のための技術介入要素あり。
- 後年整理資料1系統にBIG最大310枚表記があるが、K-Navi/P-WORLD/パチマガ等の311枚をcanonicalとし`CONFLICT_SECONDARY_BIG_MAX_310_VS_311`として保持。

### ceiling
- `NONE`
- ゲーム数天井非搭載。

## modeSpecificMinimumData
- BIG偏向型ノーマルタイプ。
- チャンスリプレイ後などにプチRTを用いた演出フローを持つ。
- RT状態は複数存在するが、朝一客AI/ホール経営の物差しに不要な全RT遷移抽選は収集対象外。

## resetBehavior

### settingChangeBehavior
- 設定変更時の液晶開始ステージ: **通学路（まどか）**。
- 天井非搭載のためゲーム数天井リセットは`NOT_APPLICABLE`。
- 設定変更時にRT内部状態・成立済みボーナス等が具体的にどう処理されるかを本機固有に直接示す資料は、表記揺れ/型式/メーカー/「設定変更」「リセット」「RT状態」「朝一」等を変えて再探索しても固定できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 天井・ゲーム数解除を持たないため、前日ゲーム数の持越しを狙う朝一価値は`NOT_APPLICABLE_NO_CEILING`。
- 「操作なし据え置き」を独立条件としてRT状態・成立済みボーナス・液晶状態の処理を直接比較した本機固有資料は`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時の液晶開始ステージも **通学路（まどか）**。
- したがって開始ステージだけでは設定変更と純電断を識別できない。
- 純電断時のRT内部状態・成立済みボーナスの引継ぎ/初期化を直接示す本機固有資料は、再探索後も`UNVERIFIED_AFTER_RESEARCH`。一般的なノーマル機挙動から推測補完しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- 設定変更専用の短縮天井なし。

### modeAfterReset
- AT/ART系のゲーム数解除モード・朝一専用天国等は`NONE_CONFIRMED_AFTER_RESEARCH`。
- RT状態の設定変更時再選択/初期化契約は`UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 高確/低確/CZ等の朝一専用内部状態は`NONE_CONFIRMED_AFTER_RESEARCH`。
- RT内部状態の低レベル契約は`UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 5.9号機だが、公開ゲーム性はボーナス主体ノーマル+RTで、有利区間を用いたAT/ARTや朝一有利区間ランプによる狙い価値を確認しない。規格一般論から推測で追加しない。

### resetBenefits
- 天井短縮、朝一高確固定、初当たり優遇等の主要恩恵は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の主要不利要素は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時と純電源OFF→ON時の液晶開始ステージがともに通学路（まどか）なので、**開始ステージ単独は変更判別に使えない**。
- 本機固有のガックン発生条件/確率、初期出目、ランプ等による確定判別契約は、検索語・資料系統を変えて再探索しても固定できず`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`
- publicMorningStageSettingChange: `通学路（まどか）`
- publicMorningStagePowerCycle: `通学路（まどか）`

## conflicts
- `CONFLICT_SOURCE_LABEL_OR_COPY_PAYOUT_TABLE_HAZUSE`: HAZUSEの機械割表は97.8/100.1/102.2/105.6/110.2/117.2%。複数資料が通常97.8/98.4/100.4/103.6/107.8/114.3%、完全攻略99.4/100.1/102.2/105.6/110.2/117.2%と明確に2系列化しており、HAZUSE表は両者を混ぜた形。平均せず別根拠として保持。
- `CONFLICT_SECONDARY_BIG_MAX_310_VS_311`: 後年整理資料1系統は310枚、K-Navi/P-WORLD/パチマガ等は最大311枚。311枚をcanonical。

## sources
取得日: 2026-09-10

1. K-Navi — SLOT魔法少女まどか☆マギカA
   - https://p-kn.com/slot/2916/
   - 導入2017-12-18、エレコ、ノーマル、BIG最大311枚、プチボーナス最大103枚、合算1/159.8〜1/113.0。
   - confidence: `ANALYSIS_HIGH`

2. K-Navi — 2017年12月新台導入カレンダー
   - https://p-kn.com/calendar/201712/
   - 2017-12-18のパチスロとして本機のみ掲載。全国一斉導入開始日表記。
   - confidence: `ANALYSIS_HIGH`

3. HAZUSE — SLOT魔法少女まどか☆マギカA
   - https://hazuse.com/machine/pachislot/7S1057/
   - 型式名`SLOT魔法少女まどか☆マギカAMA`、検定番号`7S1057`、導入2017-12-18、メーカー エレコ、天井なし、複数RT状態。
   - confidence: `ANALYSIS_HIGH`

4. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/7S1057/genre/201/
   - 設定別ボーナス確率/機械割表。機械割表は他資料と定義不整合のためCONFLICT監査に使用。
   - confidence: `ANALYSIS_HIGH`

5. ユニバーサルエンターテインメント公式系ブログ
   - https://ameblo.jp/aruzefreaks/entry-12333972487.html
   - 2017-12-06時点で全国導入が約1週間後と告知。
   - confidence: `OFFICIAL`

6. Pachibee / PiDEA系業界記事 — 新機種プレス発表
   - https://www.pachibee.jp/pparticles/view/1008
   - エレコ製、シリーズ初ノーマルタイプ、ボーナス合算1/159.8〜1/113.0。
   - confidence: `INDUSTRY`

7. グリーンべると / P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/9677/greenbelt
   - エレコ、ノーマルタイプ新機種として発表。
   - confidence: `INDUSTRY`

8. P-WORLD — SLOT魔法少女まどか☆マギカA
   - https://www.p-world.co.jp/machine/database/8531
   - エレコ、ノーマルタイプ、BIG最大311枚/REG最大103枚、プチRT。
   - confidence: `INDUSTRY`

9. パチマガスロマガ — SLOT魔法少女まどか☆マギカA
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/103/a.php
   - エレコ、2017年12月、BIG最大311枚、REG最大103枚。
   - confidence: `ANALYSIS_HIGH`

10. パスログ — 2017-10-14事前スペック情報
   - https://slotlog.net/archives/26162816.html
   - 設定別BB/RB/合算、通常出率と完全攻略出率、千円ベース約34.1〜37.1G、311/103枚。
   - confidence: `ANALYSIS_SINGLE_CONTEMPORARY`

11. スロがち — 魔法少女まどか☆マギカA
   - https://slogati.com/madomagi-a/
   - 設定別50枚ベース、天井なし、設定変更時/電源OFF→ON時とも開始ステージ通学路（まどか）、完全攻略出率。後年整理資料。
   - confidence: `ANALYSIS_SINGLE_RETROSPECTIVE`

12. モゲスロ — 2017年導入カレンダー
   - https://moge-site.com/new-slot2017
   - 12/18は魔法少女まどか☆マギカAのみ、Aタイプ、設定6フル攻略117.2%、天井なし。
   - confidence: `ANALYSIS_HIGH_FOR_CALENDAR`

## missingFields
- settingChangeRtInternalState: `UNVERIFIED_AFTER_RESEARCH`
- carryOverRtInternalState: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- powerCycleRtInternalState: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeEstablishedBonusHandling: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleEstablishedBonusHandling: `UNVERIFIED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`
- deterministicResetDetection: `UNVERIFIED_AFTER_RESEARCH`
- publicResetSpecificNumericBenefit: `NONE_CONFIRMED_AFTER_RESEARCH`

## researchNotes
- `SLOT魔法少女まどか☆マギカA / 魔法少女まどかマギカA / まどマギA / SLOT魔法少女まどか☆マギカAMA / エレコ / 7S1057`へ表記を変え、「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「RT状態」「天井」「ガックン」「50枚」「機械割」「完全攻略」を組み替えて再探索。
- メーカー公式系、業界記事、K-Navi、HAZUSE、P-WORLD、パチマガスロマガ、当時スペック資料、後年整理資料を横断。
- ノーマル機のRT低レベル状態や成立済みボーナスの電断挙動を一般論で補完しない。
