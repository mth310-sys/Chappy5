# スマート沖スロ ニューキングハナハナV

recordNo: 1774
machineName: スマート沖スロ ニューキングハナハナV
aliases: ニューキングハナハナV（スマスロ） / キンハナV / LBニューキングハナハナVPF
manufacturer: パイオニア
formalModel: LBニューキングハナハナVPF
inspectionCode: 5S1036
releaseDate: 2026-01-05
generation: 6.5号機 / スマスロ
systemType: ノーマル / リアルボーナス / ボーナストリガー(BT) / 完全告知
settings: 1 / 2 / 3 / 4 / V
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 1gekiで型式 `LBニューキングハナハナVPF`、検定番号 `5S1036`、導入2026-01-05を確認。
- 遊技日本およびゼンリン業界資料で30Φ版とスマート沖スロ版の2型式同時発売を確認。
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
- BIGは前半→BT→後半の構成。BT中の中段リプレイから後半へシームレス移行し、BTにループ性なし。
- 天井非搭載。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_PLAYER_FACING_RESET_BENEFIT_POWER_CYCLE_MACHINE_SPECIFIC_DETAIL_UNVERIFIED
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- ノーマル+BT機で、AT機のような規定G数天井・朝一専用モード・状態優遇は確認されない。
- 設定変更固有の朝一出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時のボーナス成立状態/BT内部状態を機種固有に比較した公開資料は固定できず、推測しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_OR_RESET_BENEFIT / UNVERIFIED_FOR_TRANSIENT_INTERNAL_STATE

### carryOverBehavior
- 天井・モード・AT状態が存在しないため、それらの据え置き恩恵はNOT_APPLICABLE。
- 前日ゲーム数そのものに救済価値はなく、宵越し天井狙いは成立しない。
- ボーナス成立中など特殊な瞬間状態の据え置き挙動は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PLAYER_FACING_BEHAVIOR

### powerCycleBehavior
- `スマート沖スロ ニューキングハナハナV / LBニューキングハナハナVPF / パイオニア + 電源OFF ON / 設定変更 / 据え置き / ガックン / 有利区間` で再探索したが、純電源OFF→ON時の機種固有比較表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井・朝一モード非搭載のため、少なくとも天井短縮やモード優遇という朝一価値はNOT_APPLICABLE。
confidence: UNVERIFIED_MACHINE_SPECIFIC_POWER_CYCLE / ANALYSIS_HIGH_FOR_NO_CEILING_MODE_BENEFIT

### gameCounterReset
settingChange: NOT_APPLICABLE_TO_CEILING
carryOver: NOT_APPLICABLE_TO_CEILING
powerCycle: NOT_APPLICABLE_TO_CEILING
notes:
- 表示ゲーム数のホールデータ機挙動ではなく、実機内部の天井管理を対象としている。本機は天井非搭載。
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
- リアルボーナス成立中などの瞬間状態まで含む完全再現情報は対象外かつ公開比較未確認。
confidence: ANALYSIS_HIGH_FOR_MISSION_SCOPE

### advantageousSectionReset
- スマスロ版について有利区間という内部契約を設定変更/据え置き/純電断で機種固有に比較した高信頼公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機はボーナス主体ノーマル+BTで、朝一の天井/モード/ツラヌキ恩恵は確認されないため、ホール経営上の朝一狙い要因にはしない。
confidence: UNVERIFIED_MACHINE_SPECIFIC

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井非搭載、朝一専用モードなし。設定変更そのものを期待値目的で狙う根拠は確認されない。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進行やモードを失う不利はNOT_APPLICABLE。
- 設定変更固有の公開された数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 天井挙動によるリセット判別は不可。
- `ニューキングハナハナV / LBニューキングハナハナVPF + ガックン / リールガックン / 設定変更 / 据え置き` を複数検索したが、本機固有のガックン発生条件・対策・信頼率を高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetCeiling: NONE
morningModeDistribution: NOT_APPLICABLE
resetBenefitRate: NONE_CONFIRMED
morningHitRate: PUBLIC_RESET_SPECIFIC_RATE_NOT_APPLICABLE_OR_NOT_FOUND
confidence: ANALYSIS_HIGH

## conflicts
- 1geki・必勝本・パチビー・業界資料系では設定別BIG/REG/合算/機械割を30Φ版と共通値として掲載し一致。
- 一部後発サイトにスマスロ版の設定3/4を30Φ版より高い別数値とする記載があるが、高優先の1gekiがスマスロ型式 `LBニューキングハナハナVPF` に対して 101% / 104% を明示するため、その後発差分は `CONFLICT_SECONDARY_UNCORROBORATED` としてcanonicalへ採用しない。

## sources
retrievedAt: 2026-09-15
- 1geki スマスロ版: https://1geki.jp/slot/l_new_king_hanahana_v/
- HAZUSE スマスロ版: https://hazuse.com/machine/pachislot/5S1036/
- パチ&スロ必勝本 共通基本スペック: https://p.hisshobon.jp/vpage/2744/2
- 遊技日本 発売記事: https://yugi-nippon.com/pachinko-new-machine/post-73801/
- ゼンリン 業界機種情報: https://zenrin-net.co.jp/12252/
- 情報島+ スマスロ版: https://p-johojima.jp/machine_spec/post-17970/
- 6確（補助）: https://www.kaku6.jp/slot/newking-hanahana-v/
- アミュタメ 朝一/天井なし補助: https://www.amuse-p.com/blog/newking-hanahana-v/

## qaNotes
- 30Φメダル版とは型式・遊技媒体が異なるため独立レコード化。
- resetBehaviorは朝一客AI/ホール運用へ影響する粒度に限定。通常ノーマル機の完全内部状態再現は行わない。
