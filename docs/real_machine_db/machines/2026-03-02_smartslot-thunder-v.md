# スマスロ サンダーV

recordNo: 1783
machineName: スマスロ サンダーV
aliases: サンダーV / LBサンダーV / LB／スマスロサンダーVHA
manufacturer: エレコ / ユニバーサルエンターテインメント
formalModel: LB／スマスロサンダーVHA
inspectionCode: 5S0895
releaseDate: 2026-03-02
generation: 6.5号機 / スマスロ
systemType: ノーマル / ボーナストリガー(BT)
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- ユニバーサルエンターテインメント発表のエレコ製BT機。
- HAZUSEで型式 `LB／スマスロサンダーVHA`、検定番号 `5S0895`、導入開始日2026-03-02を確認。
- 遊技通信/P-WORLD業界ニュースでも型式名とエレコ製を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
  marketEstimate:
  - setting1: 98.5%
  - setting2: 100.0%
  - setting5: 102.9%
  - setting6: 106.0%
  fullStrategy:
  - setting1: 100.5%
  - setting2: 102.0%
  - setting5: 105.0%
  - setting6: 108.1%
initialHitBySetting:
  big:
  - setting1: 1/277.7
  - setting2: 1/275.4
  - setting5: 1/270.8
  - setting6: 1/264.3
  reg:
  - setting1: 1/434.0
  - setting2: 1/394.8
  - setting5: 1/344.9
  - setting6: 1/313.6
  bonusCombined:
  - setting1: 1/169.3
  - setting2: 1/162.2
  - setting5: 1/151.7
  - setting6: 1/143.4
baseGamesPer50: 約35.2G/50枚（設定1）
netIncrease: N/A（ノーマル/BT機。AT純増指標は非適用）
basicPayout:
- BIG: BONUS GAME最大179枚 + JAC GAME125枚 = 約303〜304枚+α
- REG: 最大107枚
- 雷神ループ: BT中赤7成立で再度BONUS GAMEへ。発生期待度約15%、発生時はトータル約480枚以上が可能
modeSpecificMinimumData:
- ゲーム数天井・ボーナス間天井なし。
- 周期・ポイント・スルー回数による当選契機なし。
- BIG後はRIZIN ZONEへ移行するが、朝一専用モードではない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH / INDUSTRY_SUPPORT

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_BT_INFORMATION
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時、BTはリセット。
- 必勝本の実戦上、演出モードはスタンダードモードへ移行。
- 天井・周期・ポイント・スルー契機は非搭載のため、設定変更による天井短縮や朝一専用出玉モードは存在しない。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### carryOverBehavior
- 据え置き時も天井は非搭載で、朝一専用モードはなし。
- 通常時は前日設定に応じた通常のボーナス抽選が継続する整理資料を確認。
- 据え置き時にBT途中状態をどう扱うかを「据え置き」独立語句で直接明記した高優先機種固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_NO_RESET_MODE / UNVERIFIED_FOR_BT_STATE_ON_CARRYOVER

### powerCycleBehavior
- 純電源OFF→ONではBTを引き継ぐことを必勝本の機種固有比較表で直接確認。
- 演出モードの電源OFF→ON時挙動は同資料で現在調査中。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_COMPARISON_TABLE

### gameCounterReset
settingChange: N/A_FOR_CEILING
carryOver: N/A_FOR_CEILING
powerCycle: N/A_FOR_CEILING
notes:
- ゲーム数天井・ボーナス間天井なし。
- 前日のハマリゲーム数を朝一狙いへ転換する内部天井進行はない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: NONE
resetCeiling: NONE
resetShortening: NONE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用モードなし。
- RIZIN ZONEはBIG終了後の演出変化区間であり、設定変更専用モードではない。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 通常時のAT/CZ高確状態のような朝一収益へ直結する内部状態は本機構造上非該当。
- BT途中の設定変更はRESET、純電断はCARRY_OVERを直接確認。
- 据え置き時BT状態の独立直接資料は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BT_SETTING_CHANGE_AND_POWER_CYCLE / UNVERIFIED_FOR_CARRYOVER_BT_DIRECT_WORDING

### advantageousSectionReset
- スマスロ/BT機だが、本機の設定変更・据え置き・純電断における「有利区間」そのものの機種固有直接契約を、高優先資料で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- BTの設定変更RESET/純電断CARRY_OVERは有利区間項目と混同せず別項目で保持。
confidence: UNVERIFIED

### resetBenefits
- 設定変更による天井短縮、朝一専用モード、朝一専用初当たり優遇などの出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時、進行中BTはリセットされる。
- それ以外の朝一専用数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更/据え置きとも天井非搭載・朝一専用モードなしで、外見上の確実な判別方法は確認できない。
- 設定変更時は実戦上スタンダードモード開始だが、純電断時の演出モードが調査中のため、単独での確定判別には使用しない。
- 本機固有ガックン条件/発生率は、機種名・型式名・エレコ・ユニバーサル・設定変更/据え置き/ガックンへ検索語を変え、必勝本・スロマガ系・解析サイト・業界記事を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_RELIABLE_EXTERNAL_DETECTION / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
resetCeiling: NONE
resetModeDistribution: NONE_CONFIRMED
resetBenefitProbability: NONE_CONFIRMED
powerCycleBt: CARRY_OVER
settingChangeBt: RESET
confidence: ANALYSIS_HIGH

## conflicts
- BIG総獲得表記は資料により「303枚」「約304枚+α」。構成値はBONUS GAME179枚 + JAC GAME125枚で304枚相当だが、技術介入・表記定義差があるため `APPROXIMATION_OR_DEFINITION_DIFFERENCE` として保持し、canonicalは「約303〜304枚+α」。
- 演出モードは設定変更時「実戦上スタンダード」、電源OFF→ONは「現在調査中」。外見判別の確定条件にはしない。

## sources
retrievedAt: 2026-09-15
- ユニバーサル公式製品サイト: https://www.universal-777.com/product/slot/thunder_v_2026/
- ユニバーサル公式ニュース（アプリ配信・実機名確認）: https://www.universal-777.co.jp/news/20260529002508/
- HAZUSE 機種概要/検定番号: https://hazuse.com/hd/5s0895/
- HAZUSE 解析: https://hazuse.com/machine/pachislot/5S0895/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89180/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89171/
- 必勝本 ボーナストリガー: https://hisshobon.com/machineinfo/89178/
- 1geki ボーナス抽選: https://1geki.jp/slot/l_thunder_v/42/
- 1geki 基本ゲーム性: https://1geki.jp/slot/l_thunder_v/41/
- なな徹 通常時: https://nana-press.com/kaiseki/machine/1106/35481/
- 遊技通信/P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/32498/yugitsushin
- 情報島 発表記事: https://p-johojima.jp/new_machine/post-21259/
- 情報島 2026-03-02導入群: https://p-johojima.jp/colum/post-27100/
- P-Summa 2026年3月新台整理: https://psumma.jp/pachislo/69482/

## missingFields
- 据え置き時BT途中状態の機種固有直接記述: UNVERIFIED_AFTER_RESEARCH
- 純電断時の演出モード: UNDER_RESEARCH_AT_HIGH_PRIORITY_SOURCE
- 有利区間の設定変更/据え置き/純電断の機種固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用の小役別抽選・リーチ目詳細・設定示唆振り分けは収集対象外。
- 2026-03-02 canonical境界は情報島および月間整理資料でカバネリ海門決戦とサンダーVの2機一致を確認。サンダーV処理により2/2完了。
