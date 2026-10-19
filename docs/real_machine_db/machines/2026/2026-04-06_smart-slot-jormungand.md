# スマスロヨルムンガンド

recordNo: 1786
machineName: スマスロヨルムンガンド
aliases: ヨルムンガンド / Lヨルムンガンド / LパチスロヨルムンガンドND01G
manufacturer: 山佐ネクスト
formalModel: LパチスロヨルムンガンドND01G
inspectionCode: 531070
releaseDate: 2026-04-06
generation: 6.5号機 / スマスロ
systemType: AT / ゲーム数上乗せ型AT / 疑似ボーナス+上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEで型式 `LパチスロヨルムンガンドND01G`、検定番号 `531070`、導入開始日2026-04-06、メーカー山佐ネクストを確認。
- 遊技通信/P-WORLD、山佐ネクスト発表を報じる業界記事で2026年4月導入、純増約2.4枚/GのATと上位約5.0枚/Gを確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.8%
- setting3: 100.9%
- setting4: 104.7%
- setting5: 109.6%
- setting6: 113.9%
initialHitBySetting:
  at:
  - setting1: 1/333.8
  - setting2: 1/323.3
  - setting3: 1/305.4
  - setting4: 1/291.6
  - setting5: 1/291.1
  - setting6: 1/290.1
  cz:
  - setting1: 1/194.2
  - setting2: 1/188.6
  - setting3: 1/175.7
  - setting4: 1/169.4
  - setting5: 1/167.8
  - setting6: 1/167.2
baseGamesPer50: 約32G/50枚
netIncrease: 通常AT約2.4枚/G / 上位AT約5.0枚/G
basicPayout:
- AT「ヨルムンガンドラッシュ」: 初期50G+α
- REG: 平均約50枚
- BIG: 平均約100枚
- ヨルムンガンドBONUS: 平均約150枚
modeSpecificMinimumData:
- 通常AT間天井: 999G+αでAT当選
- 仮天井: 450G+αでAT当選
- 設定変更後および上位CZ「恥の世紀」失敗後は450G+αへ必ず短縮
- 上記以外では仮天井抽選に設定差あり
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井ゲーム数と内部状態をリセット。
- AT間天井は通常999G+αから450G+αへ短縮され、設定変更後は450G+αでAT当選となる。
- なな徹、1geki、複数解析系統で設定変更後450G+α短縮を一致確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態を引き継ぐとする直接比較表をなな徹で確認。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 1geki・複数解析資料で純電源OFF→ON時は内部状態・天井ゲーム数を引き継ぐと確認。
- ステージについては直接確定資料なし。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 設定変更後は前日AT間ゲーム数を引き継がず、短縮天井450G+αを適用。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: 999G+α
resetCeiling: 450G+α
resetShortening: YES
benefit: AT当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更専用の通常モード振り分け表は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 450G+α仮天井は設定変更後に確定適用。
- 通常状況（設定変更後/恥の世紀失敗後を除く）の450G+α仮天井選択率は設定1 33.59%、設定2 40.23%、設定3 45.31%、設定4 49.22%、設定5 49.61%、設定6 50.00%。これは通常時の天井短縮抽選値であり、設定変更時の振り分けではない。
confidence: ANALYSIS_HIGH_FOR_CEILING / UNVERIFIED_FOR_RESET_MODE_TABLE

### stateAfterReset
- 設定変更時: 内部状態RESET。
- 据え置き/純電源OFF→ON: 内部状態CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- なな徹の朝一比較表で設定変更時は有利区間RESET、据え置き時は引継ぎを確認。
- 純電源OFF→ONのみの有利区間項目を明示した独立比較は未固定のため、天井・内部状態の引継ぎから一般則で補完しない。
- 通常の有利区間リセット時は「恥の世紀」突入濃厚とする実戦解析があるが、1gekiは設定変更時を除外しているため朝一設定変更恩恵へ混入しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_POWER_CYCLE_SECTION_WORDING

### resetBenefits
- AT間天井が999G+αから450G+αへ短縮。
- 朝一450G+α以内のAT当選が保証されるため、通常状態より朝一天井狙い価値が高い。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更専用の主要な公開不利要素は十分な再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 1gekiで、朝一に左→右のハサミ打ちを行い右下がりベルテンパイからハズレが停止した場合、設定変更時のみ起こり得る判別要素と確認。
- 本機固有のガックン条件/発生率は「ヨルムンガンド/型式名/山佐ネクスト + ガックン/設定変更/据え置き/朝一」を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 450G+αを明確に超えてAT非当選なら設定変更後短縮天井とは整合しないため据え置き推測材料になるが、前兆+α等を考慮し単一ゲームでの確定判別にはしない。
confidence: ANALYSIS_HIGH_FOR_BELL_STOP_PATTERN / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetAtCeiling: 450G+α
normalAtCeiling: 999G+α
normalSituationTemporaryCeilingSelectionRate:
- setting1: 33.59%
- setting2: 40.23%
- setting3: 45.31%
- setting4: 49.22%
- setting5: 49.61%
- setting6: 50.00%
notes:
- 上記選択率は設定変更後/恥の世紀失敗後以外の通常状況の仮天井抽選。設定変更後は設定不問で450G+αへ必ず短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- 初期/低品質二次資料の一部にメーカー・AT純増・機械割が本機と異なる記述が見られるが、山佐ネクスト公式リンクを持つHAZUSE、遊技通信、必勝本、なな徹、1gekiの一致値をcanonicalとし、混同資料は採用しない。
- 仮天井33.59〜50.00%の表は「通常状況の仮天井抽選」であり、設定変更後の450G短縮率ではない。なな徹の条件記述で区別して保存。

## sources
retrievedAt: 2026-09-15
- HAZUSE機種詳細: https://hazuse.com/hd/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%83%A8%E3%83%AB%E3%83%A0%E3%83%B3%E3%82%AC%E3%83%B3%E3%83%89/
- 山佐ネクスト公式（HAZUSE掲載公式リンク）: https://yamasa-next.co.jp/slot/jmngd/
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/32818/yugitsushin
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89462/
- 必勝本 AT: https://hisshobon.com/machineinfo/89396/
- なな徹 CZ・AT・機械割・ベース: https://nana-press.com/kaiseki/machine/1101/35325/
- なな徹 天井・仮天井: https://nana-press.com/kaiseki/machine/1101/35969/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1101/35970/
- 1geki 天井・朝一・電源OFF/ON・有利区間: https://1geki.jp/slot/l_jormungand/3/
- パチマガスロマガ ボーナス: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/13/at02.php
- 6確 基本スペック: https://www.kaku6.jp/slot/jormungand/

## missingFields
- 設定変更専用の通常モード振り分け: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ONのみの有利区間直接文言: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一開始ステージの確定条件: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用の全小役確率、全CZ内部抽選、全通常状態移行率、演出期待度は収集対象外。
- 2026-04-06群6機の3/6として処理。次はL虚構推理。
- 通常の有利区間リセット恩恵「恥の世紀」は設定変更時を除くため、朝一設定変更恩恵へ混入していない。
