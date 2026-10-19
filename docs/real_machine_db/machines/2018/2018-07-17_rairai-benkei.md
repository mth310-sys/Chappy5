# No.1212 雷雷弁慶

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 雷雷弁慶
- manufacturer: ボーダー
- releaseDateCanonical: 2018-07-17
- generation: 5.9号機 / 5号機
- systemType: ノーマル / Aタイプ
- formalModelName: `ライライベンケイ2`
- certificationNumber: `7S1818`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは導入開始2018-07-17、型式名`ライライベンケイ2`、検定番号`7S1818`を掲載。
- DMMぱちタウンのシリーズ一覧も雷雷弁慶の導入開始日を2018-07-17とする。
- すろぱちくえすとは2018-07-16、ちょんぼりすたは2018-07-23と掲載しており日付競合がある。
- 型式・検定番号まで紐づくHAZUSEと独立系一覧の一致を優先し、canonicalを2018-07-17とする。
- confidence: `CONFLICT_RESOLVED_CANONICAL_2018_07_17`。

## performanceCore

### payoutRateBySetting
- setting1: 97.62%
- setting2: 98.19%
- setting3: 101.11%
- setting4: 104.62%
- setting5: 107.92%
- setting6: 110.26%

別解析の97.6 / 98.2 / 101.1 / 104.6 / 107.9 / 110.3%は丸め差の範囲で一致するためCONFLICT扱いしない。

### initialHitBySetting
BIG:
- setting1: 1/278.88
- setting2: 1/276.52
- setting3: 1/266.41
- setting4: 1/255.00
- setting5: 1/246.38
- setting6: 1/240.06

REG:
- setting1: 1/313.57
- setting2: 1/312.08
- setting3: 1/299.25
- setting4: 1/283.71
- setting5: 1/265.33
- setting6: 1/239.18

ボーナス合算:
- setting1: 1/147.60
- setting2: 1/146.61
- setting3: 1/140.94
- setting4: 1/134.30
- setting5: 1/127.75
- setting6: 1/119.81

### baseGamesPer50
- 設定範囲: 約32.56〜35.01G/50枚。
- 別解析の約32.6〜35.0G/50枚と整合。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`

### basicPayout
- BIG: 約307枚
- REG: 約102枚

### ceiling
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。

## modeSpecificMinimumData
- ボーナス主体のノーマルAタイプ。
- 解析資料では兄弟機「鬼若弁慶」と同一スペックとされるが、本レコードの数値は雷雷弁慶自身の掲載値で固定する。

## resetBehavior

### settingChangeBehavior
- 一撃の本機固有「天井/設定変更」資料では、設定変更時もボーナス間G数を`引き継ぐ`。
- 同資料では告知モードが「ボーナス告知モード」、予想履歴の予想内容は全リセットとされる。
- 通常ゲーム数天井自体は非搭載のため、このボーナス間G数は天井ゲーム数と混同しない。
- confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC`。

### carryOverBehavior
- 「据え置き」を純電源OFF→ONと分離して直接記した本機固有契約は、検索語・資料系統を変更して再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 一撃の「電源ON/OFF時の挙動」では、ボーナス間G数は`引き継ぐ`。
- 告知モードは「ボーナス告知モード」、予想履歴の予想内容はリセットと掲載され、設定変更時と同じ表面挙動が示される。
- confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC`。

### gameCounterReset
- normalCeilingCounter: `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- publishedBonusIntervalGameCount:
  - settingChange: `CARRY_OVER`
  - powerOFF_ON: `CARRY_OVER`
- ボーナス間G数は公開表示/履歴系の契約として保持し、天井カウンタとは別管理する。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 公開された告知モード項目は設定変更時・電源ON/OFF時とも「ボーナス告知モード」。
- 朝一専用の出玉モード、設定変更専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 予想履歴の予想内容は設定変更時・電源ON/OFF時ともリセットとする機種固有資料あり。
- それ以外の本機固有内部状態契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- ノーマルAタイプの主システムとして `NOT_APPLICABLE_TO_PRIMARY_SYSTEM`。
- 5.9号機一般論だけから本機固有の有利区間挙動を補完しない。

### resetBenefits
- 短縮天井、朝一ボーナス優遇、設定変更専用の当選率上昇等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開された主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 公開契約上、予想履歴のリセットとボーナス間G数引継ぎは設定変更時と電源ON/OFF時の双方で発生するため、それ単独では設定変更と純電断の識別材料にならない。
- 本機固有のガックン発生条件/率、初期出目による変更判別は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`
- resetSpecificModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- morningSpecificPublicHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用の朝一特定G以内当選率、モード振り分け、恩恵発生率は再探索後も固定できず。

## conflicts
- releaseDate: `CONFLICT_RELEASE_DATE_2018_07_16_VS_2018_07_17_VS_2018_07_23`。
  - すろぱちくえすと: 2018-07-16
  - HAZUSE / DMMぱちタウン: 2018-07-17
  - ちょんぼりすた: 2018-07-23
  - canonical: 2018-07-17
- performance coreは精密値と丸め値の範囲で整合し、重大な数値競合なし。

## missingFields
- 据え置きを純電断から分離した本機固有契約。
- ガックン/初期出目等による設定変更判別条件・率。
- 公開朝一専用数値。

## sources
取得日: 2026-09-10

1. HAZUSE — 雷雷弁慶
   - https://hazuse.com/machine/pachislot/7S1818/
   - 導入開始2018-07-17、メーカー、型式名、検定番号、設定別機械割、BIG/REG/合算、50枚ベース、獲得枚数を確認。
   - confidence: `ANALYSIS_HIGH_DATABASE`
2. 一撃 — 雷雷弁慶 ボーナス確率
   - https://1geki.jp/slot/rairaibenkei/1/
   - 設定別BIG/REG/合算の精密値を照合。
   - confidence: `ANALYSIS_HIGH`
3. 一撃 — 雷雷弁慶 天井/設定変更
   - https://1geki.jp/slot/rairaibenkei/6/
   - 天井非搭載、設定変更時と電源ON/OFF時のボーナス間G数・告知モード・予想履歴挙動を機種固有に確認。
   - confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC`
4. すろぱちくえすと — 雷雷弁慶
   - https://www.slopachi-quest.com/article/rairaibenkei/
   - 導入2018-07-16、約32.6〜35.0G/50枚、BIG約307枚、REG約102枚、天井なしを確認。導入日はCONFLICT側として保持。
   - confidence: `ANALYSIS_HIGH`
5. ちょんぼりすた — 雷雷弁慶
   - https://chonborista.com/slot/border-slot/60630/
   - 導入2018-07-23、丸め機械割/確率、天井なしを照合。導入日はCONFLICT側として保持。
   - confidence: `ANALYSIS_HIGH`
6. DMMぱちタウン — 鬼若弁慶/雷雷弁慶シリーズ情報
   - https://p-town.dmm.com/machines/2861
   - シリーズ欄で雷雷弁慶の導入開始日2018-07-17を確認。
   - confidence: `ANALYSIS_HIGH_DATABASE`

## confidenceSummary
- identity/formal model/certification: `ANALYSIS_HIGH_DATABASE`
- releaseDate: `CONFLICT_RESOLVED_CANONICAL_2018_07_17`
- performance core: `ANALYSIS_HIGH_CROSSCHECKED`
- resetBehavior settingChange/powerCycle: `ANALYSIS_HIGH_MACHINE_SPECIFIC`
- resetBehavior carryOver/detection numeric: `UNVERIFIED_AFTER_RESEARCH_WHERE_NOT_APPLICABLE_EXCLUDED`
