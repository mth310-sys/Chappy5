# 今日から俺は!! パチスロ編

recordNo: 1678
machineName: 今日から俺は!! パチスロ編
aliases: L今日から俺は!! / スマスロ 今日から俺は!! / 今日俺 / L今日から俺は！！FE / L今日から俺は！！FN
manufacturer: ファイトクラブ / コナミアミューズメント
formalModel: L今日から俺は！！FE
inspectionCode: 4S0633
releaseDate: 2024-10-07
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_ADVANTAGEOUS_SECTION_UNVERIFIED

## releaseAndModelEvidence
- コナミアミューズメント公式でスマスロ機『今日から俺は!! パチスロ編』を確認。
- G-netの販売概要では製造/ブランドを `ファイトクラブ（コナミアミューズメント）`、型式を `L今日から俺は！！FE`、2024-10-07開店と記載。
- HAZUSEでも型式 `L今日から俺は！！FE`、検定番号 `4S0633`、2024-10-07導入を確認。
- 一方、2024-07-19の遊技日本/P-WORLD記事は型式名を `L今日から俺は!!FN` と記載するため、型式表記競合を保持。販売概要・検定DB系の `FE` をcanonicalとする。
confidence: OFFICIAL + INDUSTRY / MODEL_CONFLICT_RECORDED

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 99.0%
- setting3: 100.5%
- setting4: 104.1%
- setting5: 108.0%
- setting6: 113.0%
initialHitBySetting:
- setting1: BIG 1/410.0 / REG 1/457.0 / ボーナス合算 1/216.1
- setting2: BIG 1/398.6 / REG 1/447.2 / ボーナス合算 1/210.7
- setting3: BIG 1/384.4 / REG 1/434.8 / ボーナス合算 1/204.0
- setting4: BIG 1/354.5 / REG 1/412.2 / ボーナス合算 1/190.6
- setting5: BIG 1/329.7 / REG 1/386.5 / ボーナス合算 1/177.9
- setting6: BIG 1/303.7 / REG 1/365.4 / ボーナス合算 1/165.8
baseGamesPer50: 約34.5G/50枚
netIncrease: 約6.0枚/G
basicPayout:
- 勲章ボーナス(BIG): 450 / 500 / 550 / 600枚、平均約500枚
- 今日俺ボーナス(REG): 約104枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数・俺メーター・レア小役から擬似ボーナスを目指す。
- 規定ゲーム数を管理する主要モードはモードA（最大1280G+α）、モードB（最大768G+α）、天国（最大128G+α）。
- ボーナス後は天国期待度約50%。
- REG3連続当選後は次回ボーナスがBIG濃厚。
- BIG後のCZ「ツッパリロード」は12G+α、成功期待度約50%系の資料があるが、赤7/青7ごとの当選期待度は別管理のため本DBでは性能コアに必要な概要のみ保持。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_ADVANTAGEOUS_SECTION_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更後はゲーム数天井が最大768G+αへ短縮され、モードB以上から開始する。
- 設定変更時は内部的に当該・次回・次々回の3回分のモード移行抽選が行われ、初当たり3回目まで初当たり確率が優遇される。
- 設定変更後1回目のBIGはツッパリロード当選率が優遇される。
- ちょんぼりすたの設定変更比較表では天井・内部状態とも設定変更時RESET。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 純粋な「据え置き」だけを独立条件として全内部項目を列挙した一次/高信頼比較表は固定できなかった。
- ただし、設定変更比較表では電源OFF→ON時に天井・内部状態を引き継ぐことを確認しており、ホール据え置き時の主要内部進行は引継ぎ側と整合する。
- 据え置き専用にモード3回分・REG連続回数・逆襲システム進行まで明記した高信頼資料は固定できず、細部は `UNVERIFIED_AFTER_RESEARCH` とする。
confidence: ANALYSIS_HIGH_FOR_MAIN_COUNTER_CARRY / UNVERIFIED_FOR_FULL_STATE_SET

### powerCycleBehavior
- 電源OFF→ONのみの場合、天井と内部状態を引き継ぐ。
- リールガックンは電源OFF→ONでは発生しないと解析比較表で確認。
- ステージ復帰規則は調査中表記で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### gameCounterReset
- 通常のゲーム数天井は最大1280G+α。
- 設定変更時は最大768G+αへ短縮。
- 電源OFF→ON時は天井を引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 最大1280G+α
resetGameCeiling: 最大768G+α
resetModeFloor: モードB以上
benefit: ボーナス当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更後はモードB以上が選択される。
- 設定変更時に当該・次回・次々回の3回分のモードを抽選し、3回目まで初当たりが優遇される。
- 朝イチ1回目は天国抜け後でも163〜192G、225〜256Gがボーナス当選期待大。
- 設定変更後256G消化までのボーナス期待度は約60%とする解析あり。
- 3回分の具体的モード振り分け全表は、検索語・資料系統を変えても固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_FULL_RESET_DISTRIBUTION

### stateAfterReset
- ちょんぼりすた比較表では設定変更時に内部状態RESET、電源OFF→ON時に引継ぎ。
- 通常時の内部状態は通常・高確準備・高確の3段階が存在するが、設定変更直後の具体的初期状態振り分けは確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_FOR_STATE_RESET / MULTI_SOURCE_FOR_STATE_EXISTENCE

### advantageousSectionReset
- 本機固有の設定変更時/据え置き時/純電断時における有利区間の直接契約を、`有利区間` / `リセット` / `設定変更` / 正式型式 `L今日から俺は！！FE` / `FN` を組み替え、公式・必勝本・なな徹・一撃・ちょんぼりすた・旧DB系まで横断したが高信頼の明記を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- スマスロ一般仕様から推定転記しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 最大天井が1280G+αから768G+αへ短縮。
- モードB以上から開始。
- 初当たり3回目までの初当たり確率が1/248.1に優遇（設定変更後の解析値）。
- 設定変更後1回目のBIGはツッパリロード当選率が約45%へ上昇（通常赤7は約33%）。
- 設定変更後256G以内のボーナス期待度は約60%とする解析あり。
status: CONFIRMED
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の主要な不利要素は主要公開資料から確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 解析比較表では設定変更時はリールガックンあり、電源OFF→ON時はガックンなし。
- 朝一状態対策としてホール側が事前にリールを動かす等で判別対策可能なため、ガックン単独を確定判別にはしない。
- 有利区間ランプによる本機固有判別契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井が768G+αへ短縮されるため、前日ゲーム数・当日ゲーム数との整合は据え置き推測材料になり得るが、確定判別とはしない。
confidence: ANALYSIS_SINGLE_FOR_GAKKUN / UNVERIFIED_FOR_LAMP

### numericResetData
normalGameCeiling: 1280G+α
resetGameCeiling: 768G+α
resetInitialHitFirstThree: 1/248.1
resetFirstBigTsuppariRoadRate: 約45%
resetWithin256BonusExpectation: 約60%
resetModeMinimum: モードB
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetInitialStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkun: 設定変更時あり / 電源OFF→ON時なし（発生率非公開）
confidence: ANALYSIS_HIGH_FOR_MAIN_NUMERICS / UNVERIFIED_FOR_UNPUBLISHED_DISTRIBUTIONS

### publicMorningNumbers
- 設定変更後天井: 最大768G+α。
- 設定変更後初当たり3回目まで: 1/248.1。
- 設定変更後1回目BIGのツッパリロード当選率: 約45%。
- 設定変更後256G以内ボーナス期待度: 約60%（解析値）。
- 朝イチ1回目は163〜192G、225〜256Gが期待大。

## conflicts
- 型式名: HAZUSE/G-netは `L今日から俺は！！FE`、2024-07-19遊技日本/P-WORLD記事は `L今日から俺は!!FN`。検定番号 `4S0633` と販売概要の整合から本DBでは `FE` をcanonical、`FN` をCONFLICTとして保持。
- ベース: HAZUSE/パチセブン/一撃は約34.5G/50枚、G-net販売概要は35.4G。定義/公表段階差の可能性があるため `CONFLICT_BASE_34_5_VS_35_4`。本DBでは複数解析一致の34.5Gをcanonicalとする。
- BIG基本獲得は「平均約500枚」と「450/500/550/600枚」の両表現があり、競合ではなく粒度差として保持。

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_WITH_MODEL_AND_BASE_CONFLICT
sources:
- コナミアミューズメント公式: https://www.konami.com/amusement/psm/slot/kyoukaraoreha/00_top.html
- コナミアミューズメント企業ニュース: https://www.konami.com/amusement/corporate/ja/topics/20241004/
- G-net販売概要: https://g-net-ps.com/info/s0148/
- HAZUSE: https://hazuse.com/machine/pachislot/4S0633/
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/28421/nippon
- 必勝本 設定変更時の挙動: https://hisshobon.com/machineinfo/84569/
- 必勝本 狙いドコロ&ヤメ時: https://hisshobon.com/machineinfo/84566/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/84587/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/810/24302/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/810/24300/
- 一撃 天井/朝一: https://1geki.jp/slot/l_kyoukaraoreha/3/
- 一撃 小役/ベース: https://1geki.jp/slot/l_kyoukaraoreha/4/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/217284/
- パチセブン: https://pachiseven.jp/machines/7003/cutout/2

## QA notes
- 実機完全再現用の通常時全モード移行表・全状態移行率・CZ内部抽選は収集対象外。
- 有利区間は一般論から推測せず、機種固有公開契約を固定できなかったためUNVERIFIED。
- 据え置きと純電源OFF→ONを完全同義扱いせず、独立して確認できた範囲を分けて記録。
