# スロット ソードアート・オンラインⅡ

recordNo: 1800
machineName: スロット ソードアート・オンラインⅡ
aliases: ソードアートオンライン2 / SAO2 / スマスロSAO2 / Lソードアート・オンラインⅡ
manufacturer: パオン・ディーピー / 大都技研ブランド
formalModel: L／ソードアート・オンラインⅡ／PA1
inspectionCode: 531088
releaseDate: 2026-06-08
generation: 6.5号機 / スマスロ
systemType: AT / CZ / ゲーム数管理 / 差枚数管理 / 上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 大都技研公式製品サイトで2026-06-08設置開始を確認。
- 1gekiでメーカー=パオン・ディーピー、導入開始日2026-06-08、型式 `L／ソードアート・オンラインII／PA1` / `L／ソードアート・オンラインⅡ／PA1`、検定番号 `531088` を確認。
- 情報島+の検定通過記事でも `L/ソードアート・オンラインⅡ/PA1`（パオン・ディーピー）を確認。
confidence: OFFICIAL_FOR_PRODUCT_AND_DATE / ANALYSIS_HIGH_FOR_MODEL_AND_INSPECTION

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.8%
- setting3: 100.2%
- setting4: 105.3%
- setting5: 110.4%
- setting6: 114.9%
initialHitBySetting:
  czInitialHit:
  - setting1: 1/238.4
  - setting2: 1/232.3
  - setting3: 1/232.7
  - setting4: 1/218.9
  - setting5: 1/225.2
  - setting6: 1/191.7
  atInitialHit:
  - setting1: 1/386.2
  - setting2: 1/364.3
  - setting3: 1/368.1
  - setting4: 1/326.8
  - setting5: 1/340.6
  - setting6: 1/269.6
baseGamesPer50: 約31G/50枚
netIncrease:
- Bullet of Bullets: 約3.6枚/G
- Bullet of Bullets FULL DIVE: 約7.2枚/G
basicPayout:
- Bullet of Bullets: 初期差枚数150枚+α
- 上位AT: 上位特化ゾーンで獲得した差枚数+α
modeSpecificMinimumData:
- 通常時は規定液晶ゲーム数・レア役・バレットカウンターからCZ「スコードロンバトル」を目指す。
- CZ成功期待度は約55%。
- AT間実ゲーム数天井は最大1200G+αでAT当選。
- CZ間実ゲーム数天井は最大499G+α、液晶ゲーム数天井は最大800G+αでCZ当選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間RESET、天井RESET、内部モードRESET/再抽選、内部状態RESET/再抽選、通常時ゲーム数RESET。
- 必勝本の直接比較ではゲーム数モード・GGOモード・状態を再抽選。
- CZ間実ゲーム数天井は通常最大499G+αから256G+αへ短縮。
- GGOモード「死銃」の移行率が通常より優遇。
- 設定変更時の開始ステージは高優先資料で調査中。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは有利区間・天井・内部モードを引き継ぐ。
- 1gekiの電源OFF→ON比較では内部状態・通常時ゲーム数も引き継ぐ。
- 見た目の通常ゲーム数は0表示に戻るが、内部的には前日ゲーム数を引き継ぐ。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井ゲーム数・内部状態・有利区間・内部モード・通常時ゲーム数を引き継ぐと1gekiが機種別比較で明記。
- 必勝本でも天井までのゲーム数、ゲーム数モード、GGOモード、状態を引き継ぐと直接確認。
- バレットカウンター、アイテム、開始ステージは高優先資料で現在調査中。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### gameCounterReset
settingChange:
- atCeilingGameCounter: RESET
- czCeilingGameCounter: RESET_AND_SHORTENED
- visibleGameCounter: 0G_START
carryOver:
- atCeilingGameCounter: CARRY_OVER
- czCeilingGameCounter: CARRY_OVER
powerCycle:
- atCeilingGameCounter: CARRY_OVER
- czCeilingGameCounter: CARRY_OVER
- visibleGameCounter: 0G_DISPLAY_BUT_INTERNAL_CARRY_OVER
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling:
- czRealGames: 最大499G+α → CZ当選
- atRealGames: 最大1200G+α → AT当選
- czLiquidCrystalGames: 最大800G+α → CZ当選
resetCeiling:
- czRealGames: 256G+α → CZ当選
- atRealGames: 1200G+α（短縮確認なし、0Gから再計数）
shortening:
- czRealGames: 最大499G+α → 256G+α
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- ゲーム数モードは設定変更で再抽選、純電源OFF→ONで引き継ぎ。
- GGOモードも設定変更時に再抽選され、「死銃」移行率が優遇。
- GGOモードはキリト/詩乃/シノン/死銃の4系統。設定1では通常の抽選機会でいずれかのGGOモード滞在率約20%という公開値があるが、設定変更時の死銃具体移行率は未公表・調査中。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_RESET_NUMERIC_DISTRIBUTION

### stateAfterReset
- 1gekiは内部状態を設定変更でRESET、純電源OFF→ONでCARRY_OVERと直接比較。
- 必勝本は状態を設定変更で再抽選、電源OFF/ONで引き継ぎと直接比較。
- 設定変更後の状態具体振り分け率は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### resetBenefits
- CZ間実ゲーム数天井が最大499G+αから256G+αへ短縮。
- GGOモード「死銃」移行率が優遇され、AT突入時の上位CZ契機に繋がる。
- 1geki・なな徹は設定変更時について「設定不問で出玉率/機械割100%Over」と掲載。ただし算出条件の完全な一次公開式は確認できないため、メーカー公表機械割とは分離して解析上の朝一評価値として保持。
confidence: ANALYSIS_HIGH_FOR_STRUCTURAL_BENEFITS / ANALYSIS_SINGLE_TO_MULTI_FOR_100_PERCENT_OVER_STATEMENT

### resetPenalties
- 設定変更時のみ適用される固定的な天井延長・不利専用モード・初当たり冷遇は、検索語と資料系統を変えて再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- なな徹・パチナビとも現時点で有効なリセット判別方法は判明していないと掲載。
- 開始ステージは設定変更/据え置きとも調査中。
- 液晶ゲーム数は設定変更でも据え置き電断でも0G表示になるため、表示0Gだけでは判別不可。
- CZ間256G+αを超えてCZ天井非発動ならリセット否定方向の事後推測材料になるが、朝一即時の確定判別ではない。
- 本機固有のガックン条件/発生率は `SAO2/ソードアート・オンラインII/L／ソードアート・オンラインⅡ／PA1/パオン・ディーピー` と「ガックン/設定変更/据え置き/朝一」を組み替えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_KNOWN_DIRECT_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCzRealGameCeiling: 499G+α
resetCzRealGameCeiling: 256G+α
atRealGameCeiling: 1200G+α
liquidCrystalCzCeiling: 800G+α
resetGgoDeathGunRate: PUBLIC_EXACT_RATE_NOT_FOUND_AFTER_RESEARCH
resetMachinePayoutStatement: 100%Over（設定不問・解析媒体表記、メーカー公表値とは分離）
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_CEILINGS / ANALYSIS_FOR_100_PERCENT_OVER_STATEMENT

## conflicts
- 性能コアのCZ/AT確率・機械割は1geki、必勝本、ちょんぼりすた、ABEMA系記事で一致し、主要競合なし。
- 必勝本の機種トップページには日付表示 `2026年5月11日` があるが、同ページ基本スペック本文は `2026年6月8日導入`、大都技研公式・1geki・パチビー・情報島+も2026-06-08で一致。5/11は記事公開/ページ管理日と解し、導入日のcanonicalには採用しない。
- 一部二次資料で本機を「メダル機」と誤分類する表記があるが、大都技研公式はスマスロ表記、複数高優先資料もスマスロで一致するため不採用。

## missingFields
- 設定変更時のGGOモード「死銃」具体移行率
- 設定変更後の内部状態具体振り分け
- バレットカウンターの設定変更/電断時挙動
- アイテムの設定変更/電断時挙動
- 設定変更/据え置き時の開始ステージ
- 本機固有ガックン条件/発生率

## sources
retrievedAt: 2026-09-15
- 大都技研公式製品サイト: https://www.daitogiken.com/contents/product/slot/sao2/
- 大都技研公式製品情報: https://www.daitogiken.com/contents/product/slot/sao2/info.html
- 1geki 機種概要・型式・検定番号・スペック: https://1geki.jp/slot/l_sao2/
- 1geki 天井・朝一・リセット: https://1geki.jp/slot/l_sao2/3/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89855/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/102408/
- 必勝本 小役確率&コイン持ち: https://hisshobon.com/machineinfo/102424/
- 必勝本 GGOモード: https://hisshobon.com/machineinfo/137326/
- なな徹 機種総合・朝一: https://nana-press.com/kaiseki/machine/1158/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/256112/
- パチナビ: https://pachinavi.net/machines/smasloth-sao-2/
- パチビー: https://www.pachibee.jp/machines/index/226050001
- 情報島+ 機種情報: https://p-johojima.jp/machine_spec/post-31303/
- 情報島+ 2026-06-08新台群レビュー: https://p-johojima.jp/colum/post-33970/
- 情報島+ 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
