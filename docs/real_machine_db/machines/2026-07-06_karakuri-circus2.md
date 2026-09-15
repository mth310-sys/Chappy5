# Lパチスロ からくりサーカス2

recordNo: 1804
machineName: Lパチスロ からくりサーカス2
aliases: Lからくりサーカス2 / スマスロからくりサーカス2 / からサー2 / Lからくりサーカス2jG
manufacturer: SANKYO（製造: ジェイビー）
formalModel: Lからくりサーカス2jG
releaseDate: 2026-07-06
generation: 6.5号機 / スマスロ
systemType: AT / 差枚数管理型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信/P-WORLDのSANKYO発表記事で型式 `Lからくりサーカス2jG`、ジェイビー製、最短開店2026-07-06を確認。
- P-WORLD、必勝本、1geki等も2026-07-06導入で一致。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.8%
- setting3: 101.2%
- setting4: 104.3%
- setting5: 110.5%
- setting6: 114.9%
initialHitBySetting:
  cz:
  - setting1: 1/342
  - setting2: 1/341
  - setting3: 1/339
  - setting4: 1/339
  - setting5: 1/327
  - setting6: 1/318
  at:
  - setting1: 1/519
  - setting2: 1/504
  - setting3: 1/474
  - setting4: 1/458
  - setting5: 1/430
  - setting6: 1/410
baseGamesPer50: 約31.8G/50枚
netIncrease:
- 通常AT「からくりサーカス」: 約2.8枚/G
- 上位AT「超からくりサーカス」: 約8.0枚/G
basicPayout:
- 通常AT: 初期150枚
modeSpecificMinimumData:
- 通常ATは差枚数管理型。上乗せ発生率約1/34。
- 上位ATは純増約8.0枚/G、上乗せ発生率約1/46。
- CZ「機械仕掛けの女神」期待度約55%、幕間チャンス約40%、劇場ジャッジ約47%。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 必勝本の設定変更/電源OFF→ON直接比較で、天井までのゲーム数はRESET、スイカ規定回数・モード・状態は再抽選、ゲーム数カウンタは0表示、運命盤・メニュー画面はRESET。
- CZ間の液晶ゲーム数天井は通常最大1200Gから設定変更時最大500Gへ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は設定変更による500G短縮が適用されず、前日からの天井・モード・状態等を継続するものとして、純電源OFF→ON直接比較と複数解析資料が一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 必勝本直接比較: 天井までのゲーム数、スイカ規定回数、モード、状態は引継ぎ。ゲーム数カウンタは0表示だが内部的に引継ぐ。
- 運命盤・メニュー画面・開始ステージは公開資料上「現在調査中」の項目が残る。
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_FIELDS / UNVERIFIED_FOR_UNRESOLVED_UI_FIELDS

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: DISPLAY_0_INTERNAL_CARRY_OVER
- CZ間には液晶G数天井（通常最深1200G）と実ゲーム数天井890Gが存在。
- AT間天井は実2500G。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling:
- CZ間液晶: 最大1200G+α（1100Gゾーン、最深1200G）
- CZ間実ゲーム: 890G+α
- 機械仕掛けの女神: 4回スルー後5回目をAT書換え+成功確定激情ジャッジ
- AT間: 実2500GでAT+成功確定激情ジャッジ
resetCeiling:
- CZ間液晶: 最大500G
- 実ゲーム890G天井/AT間2500Gの設定変更専用短縮値は高優先資料で確認できず、一般化しない。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時はモード再抽選、純電源OFF→ONは引継ぎ（必勝本直接比較）。
- 通常A/B/C/D/天国の5モードを確認。
- 設定変更直後の通常モード具体振り分けは十分な再探索後も高優先資料で固定できずUNVERIFIED_AFTER_RESEARCH。
- 有利区間移行ゲームで強レア役成立時は通常B以上かつ天国期待度50%との二次整理があるが、朝一通常振り分けとは分離保持。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRY / UNVERIFIED_FOR_NORMAL_RESET_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態再抽選、純電源OFF→ONは引継ぎ（必勝本直接比較）。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更で有利区間がリセットされる旨は複数二次解析で一致。
- 通常遊技中の有利区間リセット後には上位AT関連の「運命の一劇」系恩恵があるが、設定変更時の朝一恩恵と同一扱いしない。
- 純電源OFF→ON時の有利区間そのものを機種固有表で直接比較する高優先文言は固定できずUNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_DIRECT_WORDING_FOR_POWER_CYCLE

### resetBenefits
- CZ間液晶天井が最大1200G→最大500Gへ短縮。
- パチマガスロマガFREEの朝一実戦20台ではCZ or AT当選まで実ゲーム数1/205.30、平均投資323枚、天国移行率30.00%。これは実戦サンプル値として性能コアと分離する。
confidence: ANALYSIS_HIGH / OBSERVED_SAMPLE_FOR_PUBLIC_MORNING_VALUES

### resetPenalties
- 設定変更専用の天井延長、不利専用モード、初当たり冷遇等は再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 朝一、液晶500Gの設定変更時短縮天井を明確に超えてCZ非当選なら据え置き濃厚材料。
- ゲーム数カウンタは設定変更/純電断とも0表示のため、0表示単独では判別不可。
- 本機固有ガックン条件/発生率は検索語・資料系統を変えて再探索後もUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalLiquidCrystalCeiling: max1200G
resetLiquidCrystalCeiling: max500G
normalRealGameCeiling: 890G+α
atIntervalCeiling: 2500G
publicMorningObservedSample:
- sampleSize: 20台
- czOrAtHitRealGames: 1/205.30
- averageInvestment: 323枚
- heavenModeObservedRate: 30.00%
publicResetModeDistribution: UNVERIFIED_AFTER_RESEARCH_FOR_NORMAL_RESET_START
publicSpecialFirstGameStrongRareRole: 通常B以上・天国期待度50%（二次解析値）
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / OBSERVED_SAMPLE

## conflicts
- 一部低優先資料に上位AT純増約7.6枚/G、ベース約32.8G/50枚、機械割の異値があるが、SANKYO発表記事・P-WORLD・必勝本・6確・ちょんぼりすた等の主要一致値（約8.0枚/G、約31.8G/50枚、97.7〜114.9%）をcanonicalとし、低優先異値を平均化しない。

## missingFields
- 設定変更直後の通常モード具体振り分け
- 本機固有ガックン条件/発生率
- 純電源OFF→ON時の有利区間そのものの直接文言
- 電断時の運命盤/メニュー画面/開始ステージ確定挙動

## sources
retrievedAt: 2026-09-15
- 遊技通信/P-WORLD SANKYO発表: https://news.p-world.co.jp/articles/33506/yugitsushin
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10485
- 必勝本 基本設定差: https://hisshobon.com/machineinfo/138534/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/138449/
- 必勝本 規定ゲーム数: https://p.hisshobon.jp/machine/4749/1/115816
- 1geki 天井/朝一: https://1geki.jp/slot/l_karakuri2/3/
- 6確: https://www.kaku6.jp/slot/karakuri2/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/256699/
- ジャグラーズネット 朝一/設定変更: https://jugglersnet.com/chumoku/karakuri2
- パチマガスロマガFREE 朝一実戦: https://pachimaga.com/free/article/20260715/065719.php
- スロベース 朝一/据え置き: https://slobase.jp/machines/karakuri-circus2
- パチビー: https://www.pachibee.jp/movies/index/18999
