# スマート沖スロ 超華祭

recordNo: 1686
machineName: スマート沖スロ 超華祭
aliases: L超華祭 / 超華祭 / 超華祭PB / スマスロ超華祭
manufacturer: パイオニア
formalModel: L超華祭PB
inspectionCode: 4S0743
releaseDate: 2024-11-18
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ノーマルタイプ / 完全告知 / 擬似ボーナス
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- パイオニア公式YouTube「Pioneer Channel」は2024-11-18付動画で「11月18日（月）より稼働開始」と告知。
- パチビー、P-WORLD、一撃、パチセブン、ちょんぼりすた、ALL7等の機種専用/導入一覧も2024-11-18で一致するためcanonical導入日は2024-11-18とする。
- 一方、K-Naviは2024-11-04、マルっとWAVEの新台一覧には2024-11-05表記が存在するため導入日は `CONFLICT_RELEASE_DATE_2024-11-18_VS_11-05_VS_11-04` として競合を保持する。
- 型式 `L超華祭PB` はマルっとWAVE検定通過記事、ぱちんこキュレーション、公安委員会公示で一致。
- 秋田県公安委員会公示は型式 `L超華祭PB`、検定番号 `第4S0743号` を掲載するためinspectionCodeは `4S0743` とする。
confidence: OFFICIAL + INDUSTRY + GOVERNMENT + ANALYSIS_HIGH / RELEASE_DATE_CONFLICT_RETAINED

## corePerformance
payoutRateBySetting:
- settingL: UNPUBLISHED / 下パネル常時点滅で報知
- setting1: 97.9%
- setting2: 99.8%
- setting4: 103.3%
- setting5: 106.3%
- setting6: 110.0%
initialHitBySetting:
- setting1: BIG 1/274 / REG 1/384 / 合算 1/160
- setting2: BIG 1/266 / REG 1/364 / 合算 1/153
- setting4: BIG 1/248 / REG 1/331 / 合算 1/142
- setting5: BIG 1/234 / REG 1/304 / 合算 1/132
- setting6: BIG 1/221 / REG 1/279 / 合算 1/123
baseGamesPer50: 約34.0G（設定1）
netIncrease: 約5.6枚/G
basicPayout:
- BIG BONUS: 最大312枚 / 平均約309枚
- REG BONUS: 最大107枚 / 平均約103枚
- チャレンジボーナス中の1G連成功で「超モード」へ移行し、超モードは1G連高確率。公式系解説では平均ストック11個。
confidence: OFFICIAL_VIDEO + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はノーマルタイプの打感を再現した完全レバーON抽選。マツリ目成立でボーナス濃厚。
- ボーナス中も通常時と同様の確率でボーナス抽選を行い、当選時は1G連で放出。
- 通常時の天井は700G+α（主要解析では700G表記。ペナルティ時は+αの可能性）。到達時はボーナス当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_STAGE_GAKKUN_AND_NO_SPECIAL_PUBLIC_RESET_NUMBERS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井ゲーム数をリセットし、内部状態をリセットする機種別朝一比較資料を確認。
- スマスロであるため設定変更時は有利区間もリセット扱いとする機種別解析資料が存在するが、設定変更専用の特別モード・短縮天井は主要解析で確認されていない。
- 設定変更後の開始ステージは主要解析で調査中扱いのため推測しない。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER_AND_STATE / ANALYSIS_SINGLE_CAUTION_FOR_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 据え置き時は天井ゲーム数・内部状態を引き継ぐとする朝一比較資料を確認。
- 据え置き時の有利区間は通常の継続扱いとし、ボーナス終了時差枚プラスなど本機固有の通常リセット条件とは区別する。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON時は天井ゲーム数・内部状態を引き継ぐとする機種別比較資料を確認。
- 電源OFF→ONのみで天井が700Gへ再セットされるという根拠は確認できない。
- 純電断時の開始ステージ、表示上の変化、本機固有ガックン挙動は高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_AND_STATE_CARRYOVER / UNVERIFIED_FOR_STAGE_AND_GAKKUN

### gameCounterReset
- 設定変更: 700G+αの天井ゲーム数をリセット。
- 据え置き: 前日から引継ぎ。
- 純電源OFF→ON: 引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_COMPATIBLE

### ceilingAfterReset
normalGameCeiling: 700G+α
resetGameCeiling: 700G+α
- 設定変更時だけの固定天井短縮は、公式・業界・主要解析・旧DB系を検索語変更して再探索したが確認されていない。
confidence: ANALYSIS_HIGH / NO_SHORTENED_RESET_CEILING_FOUND

### modeAfterReset
- 通常時は毎ゲーム独立抽選を軸とした擬似ノーマルタイプで、朝一専用の通常モード振り分けや設定変更時専用モードは主要解析で確認されていない。
- 1G連・超モードはボーナス側の連チャン機構であり、朝一設定変更専用モードとして扱わない。
confidence: ANALYSIS_HIGH / NO_PUBLIC_RESET_MODE_FOUND

### stateAfterReset
- 設定変更: 内部状態リセット。
- 据え置き: 引継ぎ。
- 純電源OFF→ON: 引継ぎ。
- 具体的な状態区分・設定変更時振り分けは朝一比較資料に公開値がなく、完全再現用の詳細抽選として追わない。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: 有利区間リセット扱い。
- 据え置き/純電源OFF→ON: 継続扱い。
- 通常営業中は「ボーナス終了時に差枚数がプラスの場合は有利区間リセット」とする解析情報を確認。これは設定変更時の朝一契約と分けて記録する。
confidence: ANALYSIS_HIGH_FOR_IN_GAME_RESET_CONDITION / ANALYSIS_SINGLE_CAUTION_FOR_EXPLICIT_SETTING_CHANGE_WORDING

### resetBenefits
- 設定変更時専用の天井短縮、朝一専用高確、朝一専用モード優遇、公開された当選率アップ等は十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井700G+αへゲーム数がリセットされること自体は恩恵ではなく初期化として扱う。
confidence: NO_SPECIAL_PUBLIC_RESET_BENEFIT_FOUND_AFTER_RESEARCH

### resetPenalties
- 据え置きなら保持される内部状態・天井進行が設定変更でリセットされるため、前日ハマリや有利な内部状態があれば失われる。
- それ以外の設定変更時限定の主要な不利要素は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_EFFECT / NO_OTHER_PUBLIC_PENALTY_FOUND

### resetDetection
- 設定Lは常時下パネル点滅で報知されるが、これは通常の設定変更/据え置き判別手段とは別物。
- 朝一の天井進行差は前日ゲーム数を把握している場合の事後的な据え置き推測材料になり得るが、即時確定判別ではない。
- `L超華祭PB` / `スマート沖スロ 超華祭` / `パイオニア` と「ガックン/設定変更/据え置き/朝一/電源OFF」を組み合わせて再探索したが、本機固有のガックン条件・発生率は高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_BASED_INFERENCE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 700G+α
resetGameCeiling: 700G+α
settingChangeGameCounter: RESET
carryOverGameCounter: CARRY_OVER
powerCycleGameCounter: CARRY_OVER
settingChangeInternalState: RESET
carryOverInternalState: CARRY_OVER
powerCycleInternalState: CARRY_OVER
resetModeDistribution: NO_PUBLIC_SPECIAL_RESET_MODE_FOUND
resetBenefitRate: NO_PUBLIC_SPECIAL_RESET_RATE_FOUND
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後天井: 700G+α（通常天井と同値、固定短縮なし）。
- 設定変更時専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NO_SPECIAL_RESET_MODE_CONFIRMED`。
- 朝一特定G以内当選率、設定変更専用恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- 導入日: 2024-11-18（パイオニア公式動画、パチビー、一撃、P-WORLD、パチセブン、ちょんぼりすた、ALL7等） vs 2024-11-05（マルっとWAVE掲載） vs 2024-11-04（K-Navi）。公式告知と複数機種専用資料の一致を優先しcanonicalは2024-11-18、競合は削除しない。
- 主要性能値（機械割、BIG/REG/合算、純増、ベース、基本獲得枚数、700G天井）は主要複数資料で重大な競合なし。

## missingFields
- 設定Lの機械割/ボーナス確率: UNPUBLISHED
- 設定変更時開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時開始ステージ/表示変化: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時専用の公開モード振り分け・朝一当選率・恩恵率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_FOR_IDENTITY_CORE_COUNTER_RESET_AND_POWER_CARRYOVER / MEDIUM_FOR_EXPLICIT_ADVANTAGEOUS_SECTION_SETTING_CHANGE_WORDING / LIMITED_FOR_STAGE_GAKKUN
sources:
- パイオニア公式 Pioneer Channel 稼働開始動画: https://www.youtube.com/watch?v=aj3bvghjA30
- パイオニア公式 Pioneer Channel PV: https://www.youtube.com/watch?v=GBR1pFOw_1U
- P-WORLD: https://www.p-world.co.jp/machine/database/10102
- 一撃: https://1geki.jp/slot/l_chohanamatsuri/39/
- パチビー: https://www.pachibee.jp/machines/index/224100002
- パチセブン: https://pachiseven.jp/machines/7014/cutout/7
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/220308/
- ぱちんこキュレーション: https://pachinko-curation.com/50230/
- マルっとWAVE 検定通過: https://marutto-w.com/industry_news/20240819
- 秋田県公安委員会 公示（L超華祭PB / 第4S0743号）: https://www.police.pref.akita.lg.jp/uploads/contents/news_0000000814_00/%E5%91%8A%E7%A4%BA%EF%BC%88R6.8.27%EF%BC%89.pdf
- 島根県公安委員会 公示（L超華祭PB / 0608-126）: https://www.pref.shimane.lg.jp/police/05_application_and_procedures/test_gaming_machine/202409kouzi.data/202409kouzi.pdf
- K-Navi（11/04表記）: https://p-kn.com/slot/4200/
- マルっとWAVE（11/05表記）: https://marutto-wave.jp/new_machine/20241105/
- ALL7 2024年11月: https://www.all7.jp/plans/index/2024/11
