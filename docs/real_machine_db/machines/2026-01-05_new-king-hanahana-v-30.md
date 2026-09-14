# ニューキングハナハナV-30

recordNo: 1775
machineName: ニューキングハナハナV-30
aliases: ニューキングハナハナV（30パイ） / キンハナV-30 / SBニューキングハナハナVPA-30
manufacturer: パイオニア
formalModel: SBニューキングハナハナVPA-30
inspectionCode: 530665
releaseDate: 2026-01-05
generation: 6号機 / 30Φメダル機
systemType: ノーマル / リアルボーナス / ボーナストリガー(BT) / 完全告知
settings: 1 / 2 / 3 / 4 / V
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 1gekiで型式 `SBニューキングハナハナVPA-30`、検定番号 `530665`、導入2026-01-05を確認。
- 遊技日本およびゼンリン業界資料でスマート沖スロ版と30Φ版の2型式同時発売を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97%
- setting2: 99%
- setting3: 101%
- setting4: 104%
- settingV: 108%
initialHitBySetting:
  BIG:
  - setting1: 1/299
  - setting2: 1/291
  - setting3: 1/281
  - setting4: 1/268
  - settingV: 1/253
  REG:
  - setting1: 1/496
  - setting2: 1/471
  - setting3: 1/442
  - setting4: 1/409
  - settingV: 1/372
  combined:
  - setting1: 1/186
  - setting2: 1/180
  - setting3: 1/172
  - setting4: 1/162
  - settingV: 1/150
baseGamesPer50: 約37G/50枚
netIncrease: NOT_APPLICABLE_REAL_BONUS_MACHINE
basicPayout:
- BIG CHANCE: 約312枚（BT含む）
- REG CHANCE: 約130枚
modeSpecificMinimumData:
- BIGは前半→BT→後半の構成。BT中の中段リプレイから後半へシームレス移行。
- 天井非搭載。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_PLAYER_FACING_RESET_BENEFIT_POWER_CYCLE_MACHINE_SPECIFIC_DETAIL_UNVERIFIED
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- ノーマル+BT機で、規定G数天井・朝一専用モード・AT/CZ状態優遇は確認されない。
- 設定変更固有の朝一出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時のリアルボーナス成立状態/BT内部状態までの機種固有比較は公開資料で固定できず推測しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_OR_RESET_BENEFIT / UNVERIFIED_FOR_TRANSIENT_INTERNAL_STATE

### carryOverBehavior
- 天井・モード・AT状態が存在しないため、それらの据え置き恩恵はNOT_APPLICABLE。
- 前日ハマリG数自体に宵越し救済価値はない。
- ボーナス成立中など特殊な瞬間状態の据え置き挙動は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PLAYER_FACING_BEHAVIOR

### powerCycleBehavior
- `ニューキングハナハナV-30 / SBニューキングハナハナVPA-30 / パイオニア + 電源OFF ON / 設定変更 / 据え置き / ガックン / 有利区間` を再探索したが、純電源OFF→ON時の機種固有比較表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井・朝一モード非搭載のため、天井短縮・モード優遇という朝一価値はNOT_APPLICABLE。
confidence: UNVERIFIED_MACHINE_SPECIFIC_POWER_CYCLE / ANALYSIS_HIGH_FOR_NO_CEILING_MODE_BENEFIT

### gameCounterReset
settingChange: NOT_APPLICABLE_TO_CEILING
carryOver: NOT_APPLICABLE_TO_CEILING
powerCycle: NOT_APPLICABLE_TO_CEILING
notes:
- 本項目は実機内部天井管理を対象。本機は天井非搭載。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: NONE
resetCeiling: NONE
resetShortening: NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用モード、規定G数モード、連チャンモードは確認されずNOT_APPLICABLE。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 朝一客行動に影響するAT/CZ内部状態はNOT_APPLICABLE。
- リアルボーナス成立中など完全再現用の瞬間内部状態は本ミッション対象外かつ公開比較未確認。
confidence: ANALYSIS_HIGH_FOR_MISSION_SCOPE

### advantageousSectionReset
- 本機固有の有利区間契約を設定変更/据え置き/純電断で比較した高信頼公開資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス主体ノーマル+BTで、朝一の天井/モード/ツラヌキ恩恵は確認されないため、客側朝一狙い要因にはしない。
confidence: UNVERIFIED_MACHINE_SPECIFIC

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井非搭載、朝一専用モードなし。設定変更だけを期待値目的に狙う根拠なし。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進行やモードを失う不利はNOT_APPLICABLE。
- 設定変更固有の公開数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 天井挙動によるリセット判別は不可。
- `ニューキングハナハナV-30 / SBニューキングハナハナVPA-30 + ガックン / リールガックン / 設定変更 / 据え置き` を再探索。パイオニア系一般論を扱う二次資料はあるが、本機固有の発生条件・対策・信頼率を高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_DETECTION / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
resetCeiling: NONE
morningModeDistribution: NOT_APPLICABLE
resetBenefitRate: NONE_CONFIRMED
morningHitRate: PUBLIC_RESET_SPECIFIC_RATE_NOT_APPLICABLE_OR_NOT_FOUND
confidence: ANALYSIS_HIGH

## conflicts
- 1geki・必勝本・パチビー・スロベース等で設定別BIG/REG/合算/機械割は概ね一致。
- 一部二次資料で合算を設定1 `1/187`、設定V `1/151` と算術丸めする表がある一方、主要掲載値は `1/186`、`1/150`。平均せず、メーカー発表値として複数高優先系統が採用する整数掲載値をcanonicalとし、算術再計算値は `ROUNDING_DEFINITION_DIFFERENCE` として扱う。

## sources
retrievedAt: 2026-09-15
- 1geki 30Φ版: https://1geki.jp/slot/s_new_king_hanahana_v30/
- パチビー: https://www.pachibee.jp/machines/index/225110010
- パチ&スロ必勝本 共通基本スペック: https://p.hisshobon.jp/vpage/2744/2
- 遊技日本 発売記事: https://yugi-nippon.com/pachinko-new-machine/post-73801/
- ゼンリン 業界機種情報: https://zenrin-net.co.jp/12252/
- パチマガスロマガ ボーナス概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/151/bn01.php
- スロベース 30Φ版: https://slobase.jp/machines/new-king-hanahana
- 6確（補助）: https://www.kaku6.jp/slot/newking-hanahana-v30/

## qaNotes
- スマート沖スロ版とは型式・遊技媒体が異なるため独立レコード化。
- resetBehaviorは朝一客AI/ホール運用へ影響する粒度に限定し、通常ノーマル機の完全内部状態再現は行わない。
