# L ToLOVEるダークネス

recordNo: 1652
machineName: L ToLOVEるダークネス
aliases: スマスロToLOVEるダークネス / Lパチスロ ToLOVEるダークネス / とらぶるダークネス
manufacturer: オリンピアエステート / 平和
formalModel: LToLOVEるダークネスS6
inspectionCode: 430016
releaseDate: 2024-06-03
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス+ST型
settings: L / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- Amusement Japanの平和発表記事（2024-04-02）で2024-06-03ホール導入予定を確認。
- 一撃、なな徹、HAZUSE、P-WORLD等でも2024-06-03導入が一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_DATE_MATCH

## modelEvidence
- HAZUSEで型式名 `LToLOVEるダークネスS6`、検定番号 `430016` を確認。
- 一撃でも型式名 `LToLOVEるダークネスS6`、検定番号 `430016` を確認。
- パチンコ・パチスロ系業界資料でもオリンピアエステート製として確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- setting2: 98.0%
- setting3: 99.0%
- setting4: 102.5%
- setting5: 105.8%
- setting6: 110.1%
initialHitBySetting:
- settingL: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- setting2: AT/ST初当り 1/352.0
- setting3: AT/ST初当り 1/345.7
- setting4: AT/ST初当り 1/328.4
- setting5: AT/ST初当り 1/311.3
- setting6: AT/ST初当り 1/311.1
baseGamesPer50: 約30.0G/50枚
netIncrease:
- 疑似ボーナス: 約6.6枚/G
basicPayout:
- メモリアルボーナス: 100枚+α / 純増約6.6枚/G
- ToLOVEるエピソード: 20Gまたは45G / 純増約6.6枚/G
- ST「楽園計画」: 10G+α / ボーナス期待度約52%
- とらぶるボーナス: 100～1600枚 / 平均約375.2枚（通常ST中）
- 上位ST「ハーレムモード」中とらぶるボーナス: 平均約650.0枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数またはCZ成功から初当たりボーナスへ。当選後は必ずST「楽園計画」へ移行。
- CZは「きゅんきゅんバルーン」「ときめきスイート」「ぷっちゅんちゃれんじ」の3系統。
- ST「楽園計画」は10G+α、ボーナス期待度約52%。ヒロイン攻略を重ねて上位ST「ハーレムモード」を目指す。
- 通常のST間ゲーム数天井は999G+α。設定変更時のみ650G+αへ短縮。
- 規定G数の主なゾーンは250G+α / 650G+α / 999G+α等。設定変更時は内部通常G数をランダム加算するため見かけの前兆位置がずれる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_ADV_SECTION_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間、ST間天井ゲーム数、内部状態をRESET / 再抽選。
- 天井は通常999G+αから650G+αへ短縮。
- 内部的に通常ゲーム数をランダム加算して開始するため、実際の天井到達は650G+αより浅くなる場合がある。
- トランスポイント（穢れ）とどきどきポイント（CZポイント）を再抽選。
- 開始ステージは彩南町 or 彩南高校。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは有利区間、ST間天井ゲーム数、内部状態をCARRY_OVER。
- トランスポイント、どきどきポイントも設定変更時の再抽選対象と対になる据え置き継続として扱う。電源OFF/ON比較表では両ポイント引継ぎを直接確認。
- 開始ステージは設定変更時と同じ彩南町 or 彩南高校のため、開始ステージ単独では判別不可。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数、内部状態、トランスポイント、どきどきポイントをCARRY_OVER。
- 開始ステージは彩南町 or 彩南高校。
- 純電断単独時の有利区間そのものについて、機種別比較表で直接明記した高信頼資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。一般仕様から推測補完しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_STATE_POINTS / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION_DIRECT_CONTRACT

### gameCounterReset
- 設定変更: ST間天井ゲーム数RESET。さらに内部通常G数をランダム加算。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVERを機種別比較表で確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常天井: ST間999G+α。
- 設定変更後: ST間650G+αへ349G短縮。
- 設定変更時は内部通常G数をランダム加算するため、表示/実消化650G未満で天井到達する可能性あり。
- 天井到達恩恵は初当たりボーナス経由のST「楽園計画」当選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機について朝一専用の名称付き通常モード振り分けは確認できない。
- 設定変更時は規定G数進行をリセットし内部通常G数をランダム加算、ポイント系を再抽選することを確認。
- 固定された「朝一モード振り分け率」は主要解析・旧DBを再探索しても確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RANDOM_GAME_ADDITION / UNVERIFIED_FOR_NAMED_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態を再抽選。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 内部状態CARRY_OVERを必勝本の機種別比較表で直接確認。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 設定変更以外の有利区間リセット（エンディング終了時等）では「もぐもぐたい焼きタイム」へ移行する恩恵があるが、なな徹は「設定変更時を除く」と明記。朝一設定変更恩恵へ混入しない。
- 純電源OFF→ON単独の有利区間契約は直接資料不足のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_CONTRACT

### resetBenefits
- ST間天井が999G+α → 650G+αへ短縮。
- 内部通常G数をランダム加算するため、実質天井がさらに浅くなる可能性あり。
- トランスポイントを再抽選。
- どきどきポイントを再抽選し、60%以上で75pt以上を保有した状態から開始。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更で前日の天井進行、内部状態、トランスポイント、どきどきポイント、有利区間進行を失う。
- ただし650G+α天井短縮とポイント再抽選の朝一恩恵があるため、前日蓄積状況により損得は変動。
- 通常営業中の有利区間リセット後に付与される「もぐもぐたい焼きタイム」恩恵は設定変更時には付かない。
confidence: ANALYSIS_HIGH

### resetDetection
- 650G+αまでに天井が発動しなかった場合は据え置き濃厚材料。
- 650G+α付近は通常時にも規定G数ゾーンがあるため、その付近でボーナス当選しても設定変更/据え置きの断定は不可。
- 設定変更時は内部Gをランダム加算するため、規定G数前兆の発生位置がずれても据え置き確定材料にはならない。
- 設定変更/据え置きとも開始ステージは彩南町 or 彩南高校で、開始画面単独判別は不可。
- 本機固有のリールガックン条件・発生率、有利区間ランプによる確定判別は、表記揺れ・型式・メーカー・朝一/設定変更/据え置き/ガックンで再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_BASED_HINT / UNVERIFIED_FOR_GAKKUN_AND_DEFINITE_LAMP_METHOD

### numericResetData
- 通常ST間天井: 999G+α
- 設定変更後ST間天井: 650G+α
- 天井短縮幅: 349G
- どきどきポイント再抽選: 60%以上で75pt以上保有
- 設定変更時の内部通常G数ランダム加算: 具体的振り分け `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## conflicts
- 現時点で性能コアおよび主要resetBehaviorに、平均化が必要な数値競合は確認していない。
- 2025年の別スペック `L ToLOVEるダークネス TRANCE ver.8.7` は初当り・機械割・純増が異なるため、本レコードへ混入しない。

## missingFields
- 設定Lの機械割・初当り公開固定値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部通常G数ランダム加算の具体的振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 朝一専用の名称付きモード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有のリールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON単独時の有利区間契約: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14

### 業界/型式/導入
- Amusement Japan — 平和『P/L ToLOVEるダークネス』発表: https://amusement-japan.co.jp/article/detail/10004260/
- HAZUSE — L ToLOVEるダークネス: https://hazuse.com/machine/pachislot/SX0073/
- 一撃 — L ToLOVEるダークネス: https://1geki.jp/slot/l_toloveru_darkness/
- P-WORLD — L ToLOVEるダークネス: https://www.p-world.co.jp/machine/database/10038

### 性能コア
- なな徹 — 機種解析まとめ: https://nana-press.com/kaiseki/machine/752/
- 一撃 — 機種概要: https://1geki.jp/slot/l_toloveru_darkness/
- なな徹 — メモリアルボーナス: https://nana-press.com/kaiseki/machine/752/21716/
- なな徹 — ToLOVEるエピソード: https://nana-press.com/kaiseki/machine/752/21717/
- なな徹 — ST「楽園計画」: https://nana-press.com/kaiseki/machine/752/21719/
- なな徹 — とらぶるボーナス: https://nana-press.com/kaiseki/machine/752/21720/
- 必勝本 — 通常時ボーナス: https://hisshobon.com/machineinfo/83486/

### resetBehavior v0.7
- なな徹 — 朝一・設定変更時の挙動: https://nana-press.com/kaiseki/machine/752/21708/
- なな徹 — 天井: https://nana-press.com/kaiseki/machine/752/21706/
- 一撃 — 天井・朝一/設定変更: https://1geki.jp/slot/l_toloveru_darkness/3/
- 必勝本 — 天井&設定変更: https://hisshobon.com/machineinfo/83469/
- 必勝本 — 設定変更時の挙動: https://hisshobon.com/machineinfo/83497/
- P-WORLD — 解析情報/天井: https://www.p-world.co.jp/machine/database/10038
