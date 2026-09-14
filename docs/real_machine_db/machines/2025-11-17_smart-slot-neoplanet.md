# スマスロネオプラネット

recordNo: 1763
machineName: スマスロネオプラネット
aliases: ネオプラネット（スマスロ） / LネオプラネットSLED / スマスロ ネオプラネット
manufacturer: セブンリーグ（山佐ネクスト販売）
formalModel: LネオプラネットSLED
inspectionCode: 5S0798
releaseDate: 2025-11-17
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス / モード管理
settings: 1 / 2 / 4 / 5 / 6 / L
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信は山佐ネクスト発表として、型式 `LネオプラネットSLED`、セブンリーグ製、2025年11月中旬導入予定を掲載。
- 1gekiは導入開始日2025-11-17、型式 `LネオプラネットSLED`、検定番号 `5S0798` を掲載。
- HAZUSEも同型式・同検定番号・導入開始日2025-11-17を掲載。
- パチビー、ALL7の2025年11月導入日一覧でも2025-11-17導入を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 99.0%
- setting4: 104.2%
- setting5: 107.9%
- setting6: 114.2%
- settingL: 調査中
initialHitBySetting:
  bigIncludingSuperBig:
  - setting1: 1/280.4
  - setting2: 1/273.4
  - setting4: 1/247.3
  - setting5: 1/232.2
  - setting6: 1/210.5
  regular:
  - setting1: 1/596.7
  - setting2: 1/584.1
  - setting4: 1/553.6
  - setting5: 1/526.4
  - setting6: 1/504.2
  bonusCombined:
  - setting1: 1/190.8
  - setting2: 1/186.2
  - setting4: 1/171.0
  - setting5: 1/161.1
  - setting6: 1/148.5
baseGamesPer50: 約31.3G/50枚（設定1〜6共通）
netIncrease: 約8.8枚/G
basicPayout:
- SUPER BIG BONUS: 平均約616枚
- BIG BONUS: 平均約367枚
- REGULAR BONUS: 平均約95枚
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はモードA〜Fの6種類を持ち、モードによりボーナス当選確率・規定ゲーム数・高確移行挙動が変化。
- 通常運用のモードA〜Eは最大777Gがゲーム数天井。
- モードFは設定変更時専用として扱われ、最大500Gでボーナス当選。
- モードEはビッグバンモード。モードCからの移行が主要ルートの一つ。
- 擬似ボーナスは純増約8.8枚/G。SBB終了後はモードD/EでのBIGが濃厚とされる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 必勝本の設定変更/電源OFF→ON比較表で、設定変更時は天井までのゲーム数をリセット、モードを再抽選、状態をリセットすることを直接確認。
- 設定変更時は専用のモードFで開始。
- 通常777G+αのゲーム数天井が500G+αへ短縮。
- モードFでボーナス当選後は次回モードB以上へ移行。
- メニュー画面のゲーム数は0G、演出モードはSTANDARDモード開始と必勝本が掲載。
- 有利区間は設定変更時にリセット。なな徹の朝一比較表でも設定変更時の有利区間RESETを確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は天井、内部状態、有利区間、モード、ゲーム数を引き継ぐと、なな徹の設定変更/据え置き比較で確認。
- 設定変更専用モードFへは移行せず、前日からの内部進行を継続する。
- 朝一はゲーム数表示等がリセットされるため、見た目だけでの設定変更/据え置き判別は困難。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 必勝本の直接比較表で、純電源OFF→ON時は天井までのゲーム数、モード、状態をすべて引き継ぐ。
- 電源OFF→ON時のメニュー画面ゲーム数・演出モードは同資料で「現在調査中」。
- 純電断時の有利区間そのものを独立して直接列挙した高優先資料は今回固定できなかったため、スマスロ一般論から補完せず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNT_MODE_STATE / UNVERIFIED_FOR_POWER_CYCLE_ADVANTAGEOUS_SECTION_DIRECT_WORDING

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 通常の最大天井は777G+α。
- 設定変更時は専用モードFへ移行し最大500G+α。
- 朝一の表示上ゲーム数はリセットされるため、表示値だけでは内部ゲーム数引継ぎを判定できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 777G+α
resetCeiling: 500G+α
ceilingBenefit: ボーナス当選
reduction: 277G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードFで開始。
- モードFでのボーナス当選後はモードB以上。
- 据え置き/電源OFF→ON時はモード引継ぎ。
- モードF自体が朝一設定変更専用モードとして公開されているため、通常A〜Eの再抽選率を朝一に転用しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時は内部状態をリセット。
- 据え置き/電源OFF→ON時は内部状態を引継ぎ。
- 設定変更直後の具体的な通常/高確状態振り分け率は、必勝本・なな徹・1geki・HAZUSE・パチマガ系を再探索したが公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: RESET。なな徹は有利区間リセット契機として設定変更時などを掲載。
- 据え置き時: CARRY_OVERと朝一比較表で確認。
- 設定変更以外の有利区間リセット契機・リセット後恩恵は、なな徹では当時「現在調査中」。
- 1gekiは後発解析でボーナス終了後の一部を実戦上の有利区間リセット契機としているが、設定変更朝一の恩恵とは分離する。
- 純電源OFF→ON時の有利区間直接文言は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- ゲーム数天井が777G+α → 500G+αへ277G短縮。
- 朝一専用モードFから開始。
- 朝一最初のボーナス当選後はモードB以上へ移行。
- モードF滞在時の非レア役・毎ゲーム高確移行率には大きな設定差があり、設定1 1/1260.3 / 設定2 1/1008.2 / 設定4 1/840.2 / 設定5 1/336.1 / 設定6 1/219.2。設定変更確定台の朝一設定推測に使える公開数値として保持。
- なな徹独自シミュレーター（設定1、ボーナス後即ヤメ、31.3G/50枚・純増8.8枚/G固定）では、0G期待値-386円、300G期待値+1354円、450G期待値+3938円。0Gからの天井到達率7.57%、実質初当り1/180、平均投資5735円。
confidence: ANALYSIS_HIGH / PUBLIC_SIMULATION_VALUE_FOR_EXPECTATION_METRICS

### resetPenalties
- 設定変更で前日のゲーム数、内部状態、モード、有利区間を消去し、前日ハマリや良モード/高確の持越し狙い価値は失われる。
- 設定変更固有の冷遇状態・初当たり不利率などは、検索語・資料系統を変えて再探索しても `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOSS_OF_CARRY_OVER / NONE_CONFIRMED_FOR_OTHER_NUMERIC_PENALTY

### resetDetection
- 設定変更契約では最大500G+αでボーナス当選するため、朝一500G+αを超えても天井ボーナスが発動しない場合は据え置き濃厚材料。
- なな徹は朝一のゲーム数表示等がリセットされるため見た目でのリセット判別は困難と整理。
- 必勝本では設定変更時メニュー画面0G・STANDARDモード。純電断時の同2項目は調査中なので、この表示単独で確定判別には使用しない。
- `スマスロネオプラネット / ネオプラネット / LネオプラネットSLED / セブンリーグ / 山佐 + ガックン / リールガックン / 設定変更 / 朝一 / 据え置き / 電源OFF ON` で再探索したが、本機固有のガックン条件/発生率を高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_500G_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 777G+α
resetCeiling: 500G+α
resetCeilingReduction: 277G
resetMode: F
postResetFirstBonusNextMode: B_or_higher
modeFNonRareHighStateTransitionRate:
- setting1: 1/1260.3
- setting2: 1/1008.2
- setting4: 1/840.2
- setting5: 1/336.1
- setting6: 1/219.2
resetMorningSimulationSetting1:
- 0G: 等価期待値 -386円 / 5.6枚 -959円 / 天井到達率7.57% / 実質初当り1/180 / 平均投資5735円
- 50G: 等価期待値 -248円 / 5.6枚 -821円
- 100G: 等価期待値 -69円 / 5.6枚 -642円
- 150G: 等価期待値 +163円 / 5.6枚 -410円
- 200G: 等価期待値 +463円 / 5.6枚 -110円
- 250G: 等価期待値 +851円 / 5.6枚 +278円
- 300G: 等価期待値 +1354円 / 5.6枚 +781円 / 天井到達率35.61% / 実質初当り1/125 / 平均投資3995円
- 350G: 等価期待値 +2005円 / 5.6枚 +1432円
- 400G: 等価期待値 +2847円 / 5.6枚 +2274円
- 450G: 等価期待値 +3938円 / 5.6枚 +3364円 / 天井到達率77.25% / 実質初当り1/44 / 平均投資1412円
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 777G+α → 500G+α
- モードF開始
- 最初のボーナス後はモードB以上
- モードF非レア役高確移行率 設定1 1/1260.3 → 設定6 1/219.2
- なな徹設定1リセット期待値 0G -386円 / 300G +1354円 / 450G +3938円

## conflicts
- 通常設定の性能値はHAZUSE、P-WORLD、1geki、ちょんぼりすた、K-Navi、ニコナナ等で一致し重大CONFLICTなし。
- 一部後発整理サイトに「設定1〜6の6段階」と読める要約がある一方、主要解析表は通常性能を設定1/2/4/5/6の5段階で掲載し、HAZUSE/P-WORLDは別途設定L搭載を明記。本DBでは通常性能5段階 + 設定Lを独立記録する。
- 検定番号 `5S0798` は1geki・HAZUSE・後発DBで一致。
- モードF高確移行率は「非レア役の毎ゲーム抽選」に限定した値であり、レア役/規定G数による高確移行率と混同しない。

## missingFields
- powerCycleBehavior.advantageousSection: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- stateAfterReset.numericInitialStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- settingL.payoutAndInitialHit: UNVERIFIED / 調査中

## sources
retrievedAt: 2026-09-15
- INDUSTRY: 遊技通信「時を超え、ネオプラ復刻。『スマスロネオプラネット』」 https://www.yugitsushin.jp/news/%E6%99%82%E3%82%92%E8%B6%85%E3%81%88%E3%80%81%E3%83%8D%E3%82%AA%E3%83%97%E3%83%A9%E5%BE%A9%E5%88%BB%E3%80%82%E3%80%8C%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%83%8D%E3%82%AA%E3%83%97%E3%83%A9%E3%83%8D/
- INDUSTRY: P-WORLD 機種DB https://www.p-world.co.jp/machine/database/10340
- INDUSTRY: パチビー機種情報 / 導入日 https://www.pachibee.jp/machines/lecture/225100000
- ANALYSIS_HIGH: HAZUSE 機種DB https://hazuse.com/machine/pachislot/5S0798/
- ANALYSIS_HIGH: 1geki ネオプラネット（スマスロ）解析 https://1geki.jp/slot/l_nplnt/
- ANALYSIS_HIGH: 必勝本「天井&設定変更」 https://hisshobon.com/machineinfo/87928/
- ANALYSIS_HIGH: なな徹「朝一・設定変更時の恩恵/リセット判別」 https://nana-press.com/kaiseki/machine/1030/33070/
- ANALYSIS_HIGH: なな徹「天井の期待値や恩恵」 https://nana-press.com/kaiseki/machine/1030/33067/
- ANALYSIS_HIGH: ちょんぼりすた解析まとめ https://chonborista.com/slot/yamasa-slot/245959/
- INDUSTRY/CALENDAR: ALL7 2025年11月導入予定 https://www.all7.jp/plans/index/2025/11
- INDUSTRY/CALENDAR: パチビー 2025年11月導入日 https://www.pachibee.jp/machines/schedule/2025-11

## boundaryAudit
- パチビー2025年11月導入日一覧では11/17パチスロはスマスロネオプラネット1機。
- ALL7 2025年11月導入予定でも11/17パチスロはスマスロネオプラネット1機。
- 複数機種DB・導入カレンダーで2025-11-17導入が一致。
- PB/別型式/地域先行/延期/段階導入を再探索したが、11/17本線に追加すべき別canonicalパチスロは今回確認できず。
- 2025-11-17 boundary: CLOSED 1/1 canonical.

## nextChronologicalCandidate
- 2025-12-01 `バーニングエクスプレス`
- パチビー2025年12月導入日一覧、複数新台カレンダーで12/01のパチスロは同機1機を確認。
