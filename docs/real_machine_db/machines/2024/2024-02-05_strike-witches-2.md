# Lストライクウィッチーズ2

recordNo: 1626
machineName: Lストライクウィッチーズ2
aliases: スマスロ ストライクウィッチーズ2 / ストパン2 / スト魔女2
manufacturer: サンスリー（三洋販売）
formalModel: Lストライクウィッチーズ2TF
inspectionCode: 3S1134
releaseDate: 2024-02-05
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス・バトルループ型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 三洋販売・サンスリー発表を扱う遊技日本/P-WORLD業界記事で2024-02-05ホール導入開始予定を確認。
- グリーンべると、必勝本、一撃、なな徹でも2024-02-05導入で一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本/P-WORLD業界記事で製造元サンスリー、型式名 `Lストライクウィッチーズ2TF` を確認。
- HAZUSE機種ページの検定コードURL/機種識別で `3S1134` を確認。
confidence: INDUSTRY / ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- 1: 97.6%
- 2: 98.8%
- 3: 100.9%
- 4: 104.9%
- 5: 109.2%
- 6: 114.9%
initialHitBySetting:
- setting1: CZ 1/245.6 / ストライクボーナス 1/432.5
- setting2: CZ 1/245.0 / ストライクボーナス 1/420.7
- setting3: CZ 1/244.8 / ストライクボーナス 1/409.6
- setting4: CZ 1/243.2 / ストライクボーナス 1/389.1
- setting5: CZ 1/242.6 / ストライクボーナス 1/370.0
- setting6: CZ 1/240.6 / ストライクボーナス 1/349.3
baseGamesPer50: 約36.9G/50枚（全設定共通表記）
netIncrease:
- ストライクボーナス: 約5.0枚/G
- ごほうびAT: 約7.0枚/G
- 上位AT「VICTORY FLIGHT」: 約7.0枚/G
- 一部区間: 約0.8枚/G表記あり
basicPayout:
- ストライクボーナス: 15G / 約75枚
- ごほうびAT: 払い出し枚数管理型、初期200 / 300 / 400 / 500枚の公開解析あり
- 初回ネウロイバトル勝利後のごほうびAT: 初期300枚以上
- 上位AT「VICTORY FLIGHT」: G数管理型、突入時ウィッチーズアタックを経由、開始から終了までの期待獲得差枚約1600枚（設定1）
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時ゲーム数天井は最大950G+αでストライクボーナス当選。
- 通常モードA/B/C/Dの天井は950 / 800 / 600 / 400G+α。
- 初回ネウロイバトルを5回連続で敗北すると、次回6回目は勝利濃厚。
- CZ「撃墜チャレンジ」は成功期待度約50%。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- ゲーム数天井RESET、内部状態RESET、コア高確RESET、通常モードRESET。
- 設定変更専用の通常モード抽選で通常Aは選択されず、通常B/C/Dへ移行。
- ネウロイモードも設定変更時専用の優遇抽選を行う。
- ストライクボーナス当選時の上位AT「VICTORY FLIGHT」直撃抽選も優遇される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間・ゲーム数天井・内部状態・コア高確・通常モードをCARRY_OVER。
- 前日の閉店時が通常ステージ以外なら、そのステージ復帰が据え置き判別材料となる。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは有利区間・ゲーム数天井・内部状態・通常モードをCARRY_OVERとする複数解析資料を確認。
- 通常ステージ滞在中に電源OFF→ONした場合は基地ステージ開始。通常ステージ以外で電源OFF→ONした場合は電源OFF時のステージへ復帰。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 通常最大天井: 950G+α。
- 設定変更: RESETし、通常A非選択により最大800G+α。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- ネウロイバトルの5スルー進行について、設定変更/電断それぞれの直接契約を明記する複数高信頼資料までは固定できず、推測で補完しない。
confidence: ANALYSIS_HIGH_FOR_GAME_CEILING / UNVERIFIED_FOR_BATTLE_SKIP_COUNTER_RESET_CONTRACT

### ceilingAfterReset
- 設定変更後の通常モード振り分け: 通常B 49.22% / 通常C 49.22% / 通常D 1.56% / 通常A 0%。
- よって設定変更後の天井は400 / 600 / 800G+αのいずれかで、最大800G+α。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常モードは設定変更時に再抽選、据え置き・純電源OFF→ONでは引継ぎ。
- 設定変更時通常モード: B 49.22% / C 49.22% / D 1.56%。
- ネウロイモードも設定変更時は優遇抽選。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時: 内部状態RESET、コア高確RESET。
- 据え置き時: 内部状態・コア高確CARRY_OVER。
- 純電源OFF→ON: 内部状態CARRY_OVER。コア高確の純電断単独契約は高信頼資料で独立記載を十分固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_STATE / UNVERIFIED_FOR_POWER_CYCLE_CORE_HIGH_EXPLICIT_CONTRACT

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 最大天井950G+α → 最大800G+αへ短縮。
- 朝一通常モードはB以上確定。B/Cが各49.22%、Dが1.56%。
- ネウロイモード振り分けが通常より優遇。
- ストライクボーナス当選時のVICTORY FLIGHT直撃抽選が優遇。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進行・通常モード・内部状態・コア高確・有利区間の持越し価値は設定変更で失われる。
- 設定変更専用の固定的なマイナス期待値/不利益率は公開固定値を確認できず。
confidence: ANALYSIS_HIGH_FOR_RESET_ITEMS / PUBLIC_VALUE_NOT_FOUND_FOR_NUMERIC_PENALTY

### resetDetection
- 設定変更時は必ず基地ステージ開始。
- 据え置きでも前日が通常ステージなら基地ステージ開始するため、基地スタートだけでは変更確定にならない。
- 朝一が基地以外の通常/特殊ステージなら据え置き濃厚材料。
- 朝一800G+αを超えてストライクボーナス非当選なら据え置き濃厚材料。
- 本機固有リールガックン条件/発生率は `Lストライクウィッチーズ2 / ストパン2 / Lストライクウィッチーズ2TF / サンスリー` × `ガックン / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON` で再探索したが、高信頼の機種固有契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_STAGE_AND_CEILING / UNVERIFIED_FOR_GACKUN

### numericResetData
- 設定変更時通常モード: B 49.22% / C 49.22% / D 1.56% / A 0%。
- 設定変更後最大天井: 800G+α。
- 通常最大天井: 950G+α。
- 設定変更時ネウロイモード振り分け:
  - 設定1: mode0 69.54% / mode1 20.31% / mode2 7.81% / mode3 2.34%
  - 設定2: 69.54% / 20.31% / 7.81% / 2.34%
  - 設定3: 61.71% / 25.00% / 9.38% / 3.91%
  - 設定4: 50.78% / 30.47% / 12.50% / 6.25%
  - 設定5: 43.76% / 33.59% / 14.06% / 8.59%
  - 設定6: 25.00% / 37.50% / 25.00% / 12.50%

### publicMorningNumbers
- 通常B 49.22% / 通常C 49.22% / 通常D 1.56%。
- リセット後最大天井800G+α。
- 設定別ネウロイモード振り分けはnumericResetData記載。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- ネウロイバトル5スルー進行の設定変更/据え置き/純電断別の直接契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時のコア高確単独契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時VICTORY FLIGHT直撃優遇の具体的当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- HAZUSEの天井説明には950G到達時「ATに当選」とする表記がある一方、一撃・なな徹・必勝本など複数主要解析は「ストライクボーナス当選」で一致。ゲームフロー上もストライクボーナス後にネウロイバトルを経てごほうびATを目指すため、canonicalは「ストライクボーナス当選」とし `CONFLICT_SOURCE_WORDING_CEILING_AT_VS_BONUS` を保持。
- メーカー表記に一部二次サイトでSANKYO/SANYO表記が混在するが、発売発表記事は製造元サンスリー、販売側三洋販売を明記するためcanonicalはサンスリー（三洋販売）。

## sources
retrievedAt: 2026-09-14
- 遊技日本/P-WORLD — 発売発表、製造元サンスリー、型式 `Lストライクウィッチーズ2TF`、2024-02-05導入、約7.0枚/G: https://news.p-world.co.jp/articles/26184/nippon
- グリーンべると/P-WORLD — 2024-02-05導入、三洋販売/サンスリー、CZ期待度等: https://news.p-world.co.jp/articles/26284/greenbelt
- なな徹 機種TOP — 基本スペック、CZ/ボーナス、ベース、導入日: https://nana-press.com/kaiseki/machine/679/
- なな徹 朝一 — 有利区間/天井/内部状態/コア高確/モード、通常B/C/D振り分け、ネウロイモード設定別表、開始ステージ: https://nana-press.com/kaiseki/machine/679/19327/
- 一撃 天井/朝一 — 天井、リセット恩恵、通常モード振り分け、電源OFF→ON時ステージ: https://1geki.jp/slot/l_strikewitches2/3/
- 一撃 機種TOP — 初当たり、出玉率、純増、ベース、AT基本性能: https://1geki.jp/slot/l_strikewitches2/
- HAZUSE — 検定コード `3S1134`、CZ/ボーナス確率、天井・スルー天井: https://hazuse.com/machine/pachislot/3S1134/
- 必勝本 ストライクボーナス — 15G、純増約5.0枚/G、約75枚: https://hisshobon.com/machineinfo/82617/
- 必勝本 ごほうびAT — 純増約7.0枚/G、初期払い出し200/300/400/500枚: https://p.hisshobon.jp/machine/4231/1/100814
- パチマガスロマガ 上位AT — VICTORY FLIGHT純増約7.0枚/G、期待獲得約1600枚: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/santhree_slot/05/at02.php
