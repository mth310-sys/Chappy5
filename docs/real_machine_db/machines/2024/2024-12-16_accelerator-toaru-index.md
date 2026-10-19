# スマスロ 一方通行 とある魔術の禁書目録

recordNo: 1695
machineName: スマスロ 一方通行 とある魔術の禁書目録
aliases: Lとある科学の一方通行 / L一方通行 / スマスロ一方通行 / アクセラレータ / Lとある魔術の禁書目録 一方通行RZ
manufacturer: オレンジ（製造） / 藤商事（販売・シリーズ）
formalModel: Lとある魔術の禁書目録 一方通行RZ
inspectionCode: 430460
releaseDate: 2024-12-16
generation: 6.5号機 / スマスロ
systemType: AT / ST型AT + リアルボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 藤商事公式製品ページで本機、設定1～6のCZ/AT確率・出玉率を確認。
- 遊技日本の2024-10-21業界記事で製造元オレンジ、型式名 `Lとある魔術の禁書目録 一方通行RZ` を確認。
- グリーンべると検定通過記事で同型式を照合。
- HAZUSEで検定番号 `430460`、導入開始日2024-12-16、メーカー=オレンジを確認。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 100.9%
- setting4: 105.2%
- setting5: 110.1%
- setting6: 114.5%
initialHitBySetting:
- setting1: CZ 1/142.6 / AT 1/320.7
- setting2: CZ 1/139.7 / AT 1/313.8
- setting3: CZ 1/134.1 / AT 1/300.9
- setting4: CZ 1/124.6 / AT 1/275.2
- setting5: CZ 1/115.3 / AT 1/251.9
- setting6: CZ 1/105.9 / AT 1/231.9
baseGamesPer50: 約30.6G/50枚
netIncrease: AT 約2.5枚/G / BIG 約4.5枚/G
basicPayout:
- AT「一方通行RUSH」: 1セット40G+α / 純増約2.5枚/G / ボーナス当選で40G再セット
- 追憶再生BONUS: 10G / 純増約2.5枚/G / 約25枚
- BIG BONUS: リアルボーナス / 純増約4.5枚/G / 約150枚
confidence: OFFICIAL_FOR_SETTING_TABLE + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- CZ「一方通行CHANCE」: 10G / 成功期待度約40%。
- CZ「打ち止めCHANCE」: 成功期待度約70%。
- 「一方通行&打ち止めCHANCE」: 突入時点でAT濃厚。
- 通常時天井: 最大1000G+α消化後の小役成立で確定CZ→AT。
- G数モード別最大天井: A 1000G+α / B 900G+α / C 800G+α / D 300G+α。
- AT終了後は100Gの引き戻し区間「継続能力進化計画」が存在。引き戻し時はRUSHレベル昇格等の恩恵あり。
- 通常営業中の有利区間リセット時はAT継続 + RUSHレベル4濃厚。ただし設定変更時はこの恩恵の対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_EXACT_RANDOM_GAME_ADD_BLACK_FEATHER_DISTRIBUTION_AND_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井・内部モード・帯電シナリオ・内部状態・黒羽ポイントをリセット/再抽選。
- 有利区間はRESET。
- 状態は通常へ、シャッターは全閉、開始ステージは一方通行（アクセラレータ）側の通常ステージ。
- 通常1000G+αの天井は必ず100G以上短縮され、平均天井は約600G。
- 内部的にゲーム数ランダム加算が行われる。
- 黒羽ポイントの初期値、および設定変更後1回目のCZ/AT終了時の黒羽ポイント獲得量が優遇される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH + DIRECT_MACHINE_SPECIFIC_TABLE

### carryOverBehavior
- 据え置きは設定変更処理を行わないため、天井進行・内部モード・内部状態・黒羽ポイント・有利区間はCARRY_OVERとして扱う。
- 直接比較資料では電源OFF→ON時に天井・内部モード・内部状態・黒羽ポイント・有利区間を引き継ぐ資料を確認しており、据え置き運用の主要内部値と整合する。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_CROSS_CHECK

### powerCycleBehavior
- 純電源OFF→ONでは天井G数を引き継ぐ。
- 複数解析資料で内部モード・内部状態・黒羽ポイント・有利区間もCARRY_OVERと整理されている。
- 開始ステージは一方通行側の通常ステージへ戻るとする資料がある。
- 必勝本の直接比較表ではモード/帯電シナリオ/状態/黒羽ポイント等の電源OFF→ON欄が当時「調査中」だったため、後年複数解析一致を採用しつつ信頼度は設定変更側より一段下げる。
confidence: ANALYSIS_HIGH_FOR_CARRYOVER_FROM_MULTIPLE_LATER_ANALYSIS / DIRECT_OLD_TABLE_PARTIAL

### gameCounterReset
- 設定変更: 天井進行RESET。天井短縮抽選 + 内部Gランダム加算あり。
- 据え置き/純電源OFF→ON: 天井進行CARRY_OVER。
- 天井判定は液晶の加算表示ではなく、データカウンタ上の実消化G数基準。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 1000G+α
resetCeilingRule: 必ず100G以上短縮
resetCeilingMaximum: 900G+α以内
resetAverageCeiling: 約600G
modeCeilingsNormalReference: A=1000G+α / B=900G+α / C=800G+α / D=300G+α
resetInternalGameAdd: RANDOM_ADD_PRESENT / EXACT_RANGE_AND_DISTRIBUTION_PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: G数モード再抽選、帯電シナリオ再抽選。
- 電源OFF→ON: 後年複数解析では内部モードCARRY_OVER。導入当時の必勝本比較表では電断欄が調査中だったため、その資料差は注記保持。
- 設定変更時のG数モードA～Dそのものの具体的朝一振り分けは、公式・業界・必勝本・なな徹・HAZUSE・主要解析を表記揺れ/型式名で再探索後も比較可能な公開テーブルを固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_RESELECT / UNVERIFIED_FOR_EXACT_RESET_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態RESET、通常へ。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 後年複数解析でCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常営業中はBIG終了時の一部で有利区間リセット。設定変更時以外の有利区間リセット後はAT継続 + RUSHレベル4濃厚。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 天井が1000G+αから必ず100G以上短縮され、平均約600Gとなる。
- 黒羽ポイント初期値が優遇。
- 設定変更後1回目のCZ/AT終了時の黒羽ポイント獲得量が優遇。
- 内部Gランダム加算により、チャンス目高確移行位置等が通常時の見た目からずれる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の天井進行・内部モード/状態・黒羽ポイント・有利区間は設定変更でリセット対象。
- 通常営業中の有利区間リセットで得られる「AT継続 + RUSHレベル4濃厚」は設定変更時には適用されない。
- それ以外の設定変更固有の公開不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更時は天井が100G以上必ず短縮されるため、朝一の実消化900G+αを超えても天井契機が発生しない場合は据え置き濃厚材料。
- 設定変更時は内部Gランダム加算があるため、チャンス目高確移行G数のズレから変更/据え置きを確定するのは困難。
- 表示や高確移行位置だけでは確定判別不可。
- 本機固有のリールガックン条件・発生率は「一方通行/アクセラレータ/正式型式/オレンジ/藤商事/設定変更/朝一/ガックン」等へ検索語を変更し、公式・業界・主要解析を横断後も高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_GAME_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 1000G+α
resetCeilingMinimumShortening: 100G以上
resetCeilingMaximum: 900G+α以内
resetAverageCeiling: 約600G
resetInternalGameAdd: RANDOM / EXACT_RANGE_UNVERIFIED_AFTER_RESEARCH
blackFeatherInitialPoint: ADVANTAGED / EXACT_DISTRIBUTION_PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
firstCzOrAtEndBlackFeatherGain: ADVANTAGED / EXACT_DISTRIBUTION_PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
settingChangeAdvantageousSection: RESET
carryOverAdvantageousSection: CARRY_OVER
powerCycleAdvantageousSection: CARRY_OVER
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 通常天井: 1000G+α。
- 設定変更時: 必ず100G以上短縮、最大900G+α以内、平均約600G。
- 900G+α超過: 据え置き濃厚材料。
- 黒羽ポイント: 初期値および1回目CZ/AT終了時獲得量が優遇。ただし具体的振り分けは未固定。
- 内部G: ランダム加算あり。ただし具体的加算範囲/振り分けは未固定。

## conflicts
- 電源OFF→ON時のモード/帯電シナリオ/状態/黒羽ポイントについて、導入当時の必勝本比較表は「現在調査中」だった一方、後年の複数解析整理はCARRY_OVERで一致。数値競合ではなく情報公開時点差として `SOURCE_MATURITY_NOTE_POWER_CYCLE` を保持。

## missingFields
- 設定変更時の内部Gランダム加算の具体的範囲・振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時のG数モードA～D具体的振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 黒羽ポイント初期値の具体的振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 初回CZ/AT終了時の黒羽ポイント獲得量優遇の具体的振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL: https://www.fujimarukun.co.jp/products/accelerator/
- INDUSTRY: https://yugi-nippon.com/pachinko-new-machine/post-67434/
- INDUSTRY: https://web-greenbelt.jp/post-88495/
- INDUSTRY: https://news.p-world.co.jp/articles/29298/amusement
- ANALYSIS_HIGH: https://hazuse.com/machine/pachislot/SX0093/
- ANALYSIS_HIGH: https://www.p-world.co.jp/machine/database/10147
- ANALYSIS_HIGH_RESET: https://hisshobon.com/machineinfo/85318/
- ANALYSIS_HIGH_RESET: https://hisshobon.com/machineinfo/85308/
- ANALYSIS_HIGH_RESET: https://nana-press.com/kaiseki/machine/849/26146/
- ANALYSIS_HIGH_RESET: https://chonborista.com/slot/fuji-slot/222136/
- ANALYSIS_SECONDARY_RESET_CROSSCHECK: https://altema.jp/pachimo/lacceleratorreset
- ANALYSIS_SECONDARY_RESET_CROSSCHECK: https://www.slopachi-quest.com/article/accelerator-tenjou/
- ANALYSIS_SECONDARY_RESET_CROSSCHECK: https://www.nankaikoya.jp/accelerator-kitaichi/
- ANALYSIS_HIGH_BONUS: https://hisshobon.com/machineinfo/85315/
