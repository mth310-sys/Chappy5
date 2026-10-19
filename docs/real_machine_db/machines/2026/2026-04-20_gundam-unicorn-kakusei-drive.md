# Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE

recordNo: 1792
machineName: Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE
aliases: スマスロ ガンダムユニコーン 覚醒DRIVE / Lガンダムユニコーン 覚醒DRIVE / ガンダムUC 覚醒DRIVE / ユニコーン2
manufacturer: ビスティ
formalModel: L機動戦士ガンダムユニコーン2jA
inspectionCode: 5S1377
releaseDate: 2026-04-20
generation: 6.5号機 / スマスロ
systemType: AT / CZ→疑似ボーナス→AT / 段階昇格型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- ビスティ製。フィールズ発表を伝えるグリーンべるとで2026-04-20より順次導入を確認。
- HAZUSEで型式 `L機動戦士ガンダムユニコーン2jA`、検定番号 `5S1377`、導入開始日2026-04-20を確認。
- 1geki、パチビー、必勝本、6確でも2026-04-20導入で一致。
confidence: INDUSTRY_AND_ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.9%
- setting3: 101.0%
- setting4: 105.4%
- setting5: 110.5%
- setting6: 114.9%
initialHitBySetting:
  cz:
  - setting1: 1/298.5
  - setting2: 1/287.0
  - setting3: 1/265.1
  - setting4: 1/247.7
  - setting5: 1/243.9
  - setting6: 1/239.8
  at:
  - setting1: 1/471.9
  - setting2: 1/456.6
  - setting3: 1/427.8
  - setting4: 1/403.9
  - setting5: 1/398.3
  - setting6: 1/392.3
baseGamesPer50: 約33G/50枚
netIncrease:
- 通常AT「可能性の獣」: 約2.0枚/G
- ボーナス / 上位AT「覚醒HYPER -Over The Rainbow-」: 約6.0枚/G
basicPayout:
- 初当りボーナス: 約100枚
- 通常AT「可能性の獣」: 初期20G+α
- 上位AT「覚醒HYPER -Over The Rainbow-」: 初期50G（引き戻し時30Gとする解析あり）
- ユニコーンボーナス: 約100枚 / 約500枚 / 約1000枚
- 最強特化ゾーン「覚醒DRIVE」: 約1000枚上乗せ×約50%ループ
modeSpecificMinimumData:
- 通常時はCZ「彗星決戦」を経由してボーナス→ATを目指す。
- CZ「彗星決戦」は10G継続、成功期待度約60%。
- 通常AT中にエピソードボーナス2回で強AT「覚醒HYPER」、強AT中に4回で上位ATへ移行する段階昇格型。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は内部状態をリセット。
- 通常時ゲーム数はリセット後にランダム加算される場合があり、加算なしのパターンも存在。
- CZ間天井は通常800G+αから400G+αへ短縮。
- AT間天井は通常1400G+αから1000G+αへ短縮。
- CZスルー回数天井はリセットされるが、設定変更専用の短縮は確認されない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時の天井・内部状態は引き継ぐとする解析系資料を確認。
- CZスルー回数についても据え置き時は前日状態継続と解される二次資料があるが、設定変更との直接比較表で高優先固定できた範囲は天井/内部状態まで。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / SECONDARY_SUPPORTED_FOR_CZ_SKIP_COUNT

### powerCycleBehavior
- 純電源OFF→ON時は天井を引き継ぐ。
- 内部状態も引き継ぐ。
- 開始ステージは解析上調査中で、設定変更との外見差を確定できない。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_INTERNAL_STATE / UNVERIFIED_FOR_START_STAGE

### gameCounterReset
settingChange:
- CZ間: RESET_WITH_SHORTENED_CEILING_400G_PLUS_ALPHA
- AT間: RESET_WITH_SHORTENED_CEILING_1000G_PLUS_ALPHA
- CZスルー: RESET
- 通常時ゲーム数: RANDOM_INTERNAL_ADDITION_MAY_OCCUR
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- CZ間天井は実ゲーム数基準。
- AT間天井は液晶表示ゲーム数基準。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeilings:
- czInterval: 800G+α
- atInterval: 1400G+α
- czSkip: 6スルー後の次回CZ当選時にボーナスへ書き換え
resetCeilings:
- czInterval: 400G+α
- atInterval: 1000G+α
- czSkip: 短縮なし / 回数はリセット
benefits:
- CZ間天井到達: CZ濃厚
- AT間天井到達: ボーナス濃厚→ボーナス後ATへ
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常時には複数シナリオ/ゾーン契約が存在するが、設定変更専用のシナリオ振り分け数値は今回の高優先資料では固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 「朝一専用モード」という形での公開固定値は確認できない。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_RESET_DISTRIBUTION

### stateAfterReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 設定変更時の具体的な通常/高確/超高確等の振り分け数値は固定できない。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRY / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- 1gekiではエンディング移行後を実戦上の有利区間リセットタイミングとして掲載し、リセット時は上位CZ「覚醒の光」移行濃厚とする。
- 上位AT終了時の一部での有利区間リセットは推察扱い。
- 設定変更時そのものの有利区間RESETを機種固有高優先資料で直接固定する文言は今回確認できず、一般則から補完しない。
confidence: ANALYSIS_HIGH_FOR_NON_SETTING_CHANGE_RESET_BENEFIT / UNVERIFIED_DIRECT_MACHINE_SPECIFIC_WORDING_FOR_SETTING_CHANGE

### resetBenefits
- CZ間天井: 800G+α → 400G+α（最大400G短縮）。
- AT間天井: 1400G+α → 1000G+α（最大400G短縮）。
- 通常時ゲーム数が内部的にランダム加算される場合があり、見た目より早い規定ゲーム数到達があり得る。
- CZスルー天井の短縮はない。
confidence: ANALYSIS_HIGH

### resetPenalties
- CZスルー回数は設定変更でリセットされるため、前日の深いスルー回数を保持する据え置き台と比べると朝一客にとって不利になり得る。
- それ以外の設定変更専用固定ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CZ_SKIP_RESET / ANALYSIS_HIGH_FOR_NO_OTHER_PUBLIC_FIXED_PENALTY

### resetDetection
- 設定変更後はCZ間400G+α、AT間1000G+αへ短縮されるため、通常天井との差が事後的判別材料になる。
- 通常時ゲーム数の内部加算により、液晶ゲーム数と実ゲーム数の進行差が朝一挙動の手掛かりになる場合があるが確定判別ではない。
- 本機固有のガックン条件/発生率、設定変更時のみのランプ・表示確定判別は、機種名/型式名/メーカー名と「ガックン」「設定変更」「朝一」「据え置き」を変えて再探索後も高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BEHAVIOR / UNVERIFIED_FOR_GAKKUN_AND_DIRECT_VISUAL_DETECTION

### numericResetData
normalCzCeiling: 800G+α
resetCzCeiling: 400G+α
normalAtCeiling: 1400G+α
resetAtCeiling: 1000G+α
maximumCzCeilingShortening: 400G
maximumAtCeilingShortening: 400G
czSkipCeiling: 6スルー後の7回目CZ当選時にボーナス
resetCzSkipShortening: NONE
resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_CEILING_VALUES

## conflicts
- 主要設定別CZ/AT初当り、機械割、ベース、純増、導入日、型式、検定番号に重大CONFLICTなし。
- メーカー表記は媒体により「ビスティ」と「SANKYO」が混在するが、ブランド/販売系統表記差として扱い、本レコードでは機種メーカーをビスティとする。
- 有利区間の設定変更時直接文言は高優先機種固有資料で固定できていないため推測補完しない。

## sources
retrievedAt: 2026-09-15
- グリーンべると（発表/導入/基本性能）: https://web-greenbelt.jp/post-111024/
- HAZUSE（型式/検定番号/導入日/ベース/純増/出玉率）: https://hazuse.com/hd/5s1377/
- 1geki 天井/朝一/有利区間: https://1geki.jp/slot/l_gundam_uc2/3/
- 6確 機種解析: https://www.kaku6.jp/slot/gundamuc2/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1123/36307/
- パチビー 基本情報: https://www.pachibee.jp/machines/index/226030007
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2775/2
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/252081/
- スロベース: https://slobase.jp/machines/gundam-unicorn
- 情報島+ 4/20新台導入前評価（境界監査）: https://p-johojima.jp/colum/post-30468/
- 情報島+ 過去の新台情報（境界/次回導入監査）: https://p-johojima.jp/machine_spec/post-2074/

## missingFields
- 設定変更専用のモード/シナリオ振り分け数値: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部状態具体振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の有利区間RESETを機種固有高優先資料で直接示す文言: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率・直接変更判別: UNVERIFIED_AFTER_RESEARCH
- 設定変更/電断ごとの開始ステージ差: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用の通常時全シナリオ振り分け、可能性役の全内部抽選、CZ内の小役別詳細、AT中ボーナス全抽選、特化ゾーン内部継続抽選は収集対象外。
- 2026-04-20群の3/3として処理。
- 情報島+の4/20対象機種は「スマスロ ミリオンゴッド-神々の軌跡-」「アニマルスロット ドッチ」「Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE」の3機で一致。別型式/PB/地域先行の追加対象は今回確認できず、2026-04-20境界をCLOSED候補とする。
