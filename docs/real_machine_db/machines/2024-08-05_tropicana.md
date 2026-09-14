# スマスロ トロピカーナ

recordNo: 1670
machineName: スマスロ トロピカーナ
aliases: Lトロピカーナ / トロピカーナ スマスロ
manufacturer: ミズホ（ユニバーサルエンターテインメント）
formalModel: L／トロピカーナ／NT
inspectionCode: 3S1646
releaseDate: 2024-08-05
generation: 6.5号機 / スマスロ
systemType: AT / 完全告知・擬似ボーナスループ / 1段階設定＋出玉率モード変動
settings: 1段階設定（通常の設定1〜6なし。出玉率モード0〜7で性能変動）
coreStatus: COMPLETE_CORE_WITH_MODE7_PAYOUT_UNKNOWN_AND_REG_MODE7_CONFLICT

## releaseAndModelEvidence
- ユニバーサル公式でメーカー「ミズホ」、AT、スマスロ、2024年8月発売を確認。
- P-WORLD/遊技日本で型式 `L/トロピカーナ/NT` の検定通過を確認。
- HAZUSEで型式 `L／トロピカーナ／NT`、検定番号 `3S1646`、導入開始日2024-08-05を確認。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateByMode:
- mode0: 93.0%
- mode1: 94.4%
- mode2: 98.8%
- mode3: 99.4%
- mode4: 104.4%
- mode5: 107.5%
- mode6: 113.6%
- mode7: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
initialHitByMode:
- mode0: bonus 1/239.5 / BIG 1/176.0 / REG 1/690.7
- mode1: bonus 1/264.7 / BIG 1/166.4 / REG 1/780.6
- mode2: bonus 1/233.1 / BIG 1/150.7 / REG 1/629.4
- mode3: bonus 1/265.6 / BIG 1/146.1 / REG 1/706.9
- mode4: bonus 1/224.0 / BIG 1/129.9 / REG 1/632.2
- mode5: bonus 1/247.2 / BIG 1/119.4 / REG 1/686.6
- mode6: bonus 1/218.8 / BIG 1/104.6 / REG 1/630.1
- mode7: bonus 1/235.4 / BIG 1/89.4 / REG CONFLICT_1_638.2_VS_1_683.2
baseGamesPer50: 約31.9G/50枚
netIncrease: 擬似ボーナス 約6.0枚/G
basicPayout:
- BIG BONUS: 約204枚（主要解析・紹介） / 約210枚表記もあり
- REG BONUS: 約105枚
- ボーナス後は77Gの「波乗りチャンス」。同区間でボーナス当選時はトロピカループ突入濃厚。
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 一般的な設定1〜6ではなく、1段階設定の内部で出玉率モード0〜7が変動する特殊仕様。
- 出玉率モードはボーナス初当り、トロピカループ突入率、1G連回数等に影響。
- ボーナス間天井は通常最大777G。天井到達時はボーナス当選、出玉率モードを問わず25%でトロピカループへ突入する解析値あり。
- トロピカループ非突入ボーナスの最大10回目でトロピカループ突入となるスルー回数天井を確認。
- 出玉率モード移行契機は設定変更時、エンディング終了時、トロピカループ終了時の一部。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GAKKUN_AND_SOME_COUNTER_DETAILS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- ボーナス間天井進行をRESETし、リセット後最大700Gへ短縮。
- 出玉率モードを再抽選。
- 設定変更に伴い有利区間RESET。有利区間移行後も700G短縮・高モード優遇が適用される資料と整合。
- 内部状態は解析比較表でリセット表記あり。ただし細かな告知状態等は1:1再現用のため収集対象外。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_CEILING_AND_MODE

### carryOverBehavior
- 据え置きはボーナス間天井進行と出玉率モードをCARRY_OVERとして扱う。
- 純電源OFF→ONの直接比較で天井G数・出玉率モードとも引継ぎが確認されている。
- トロピカループ間スルー回数の設定変更/据え置き直接比較は十分な再探索後も固定できず、個別断定しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_MODE / UNVERIFIED_FOR_TROPICAL_LOOP_SKIP_COUNTER

### powerCycleBehavior
- 純電源OFF→ON: ボーナス間天井G数をCARRY_OVER。
- 純電源OFF→ON: 出玉率モードをCARRY_OVER。
- 解析比較表では内部状態も引継ぎ。
- 電断後の表示G数・開始表示/ランプ状態の厳密な復帰契約は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_CEILING_AND_MODE

### gameCounterReset
- 設定変更: RESET。通常最大777Gからリセット後最大700Gへ変更。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 有利区間移行タイミングにより若干のG数ズレの可能性あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常: 最大777G。
- 設定変更後/有利区間リセット後: 最大700Gへ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は出玉率モード0〜7を再抽選。
- 公開振り分け: mode0 12.5% / mode1 20.3% / mode2 0.8% / mode3 0.8% / mode4 2.3% / mode5 3.1% / mode6 10.2% / mode7 50.0%。
- mode4以上合算65.6%（主要解析の「約66%」と一致）。
- 据え置き/純電源OFF→ONは出玉率モードCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時の内部状態はリセット、純電源OFF→ONは引継ぎとする解析比較表あり。
- 全内部状態の個別初期振り分けはミッション粒度外かつ公開固定値なし。
confidence: ANALYSIS_SINGLE_FOR_GENERIC_INTERNAL_STATE

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVERとして扱う。
- エンディング終了後など有利区間リセット後も設定変更時と同じモード振り分けが用いられ、天井も最大700Gへ短縮する資料あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_RESET_EFFECTS

### resetBenefits
- 天井が最大777G→最大700Gへ短縮。
- mode7選択率50.0%。
- mode4以上選択率65.6%（約66%）。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日が有利な出玉率モードなら、設定変更による再抽選で失う可能性あり。
- トロピカループ関連蓄積の完全な変更契約は固定できず、数値的ペナルティとしては登録しない。
confidence: ANALYSIS_HIGH_FOR_MODE_RESELECTION / UNVERIFIED_FOR_SKIP_COUNTER_EFFECT

### resetDetection
- 朝一700Gを超えてもボーナス非当選なら据え置き濃厚材料。ただし有利区間移行タイミングによる若干のズレ注記あり。
- スロパチクエストは「前日+当日のスルー回数が10回を超える」をリセット濃厚材料として掲載するが、直接比較契約を固定できていないため補助情報扱い。
- 本機固有ガックン条件/率は、機種名・型式・ミズホ/ユニバーサル + 設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_700G_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetCeiling:
- normal: 777G
- afterSettingChangeOrAdvantageousSectionReset: max 700G
settingChangeModeDistribution:
- mode0: 12.5%
- mode1: 20.3%
- mode2: 0.8%
- mode3: 0.8%
- mode4: 2.3%
- mode5: 3.1%
- mode6: 10.2%
- mode7: 50.0%
aggregates:
- mode4OrHigher: 65.6%（主要解析表記: 約66%）
- mode7: 50.0%
otherPublicMorningNumbers:
- ceilingHitTropicalLoopRate: 25%（天井到達時。リセット専用率ではない）
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### publicMorningNumbers
- リセット後最大天井: 700G。
- 設定変更時モード振り分け: 0=12.5% / 1=20.3% / 2=0.8% / 3=0.8% / 4=2.3% / 5=3.1% / 6=10.2% / 7=50.0%。
- mode4以上: 65.6%（約66%）。mode7: 50.0%。

## conflicts
- mode7 REG確率: HAZUSE/P-WORLD系 `1/638.2` に対し、ちょんぼりすた `1/683.2`。平均化せずCONFLICT。
- BIG基本獲得: 必勝本等は約204枚、P-WORLD/HAZUSE系は約210枚表記。定義を勝手に統合せず両方保持。
- mode7機械割は主要解析で調査中。120%等の噂値は高信頼資料で固定できずcanonical不採用。

## missingFields
- payoutRateByMode.mode7: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- powerCycleBehavior.displayAndStageRestore: UNVERIFIED_AFTER_RESEARCH
- tropicalLoopSkipCounter.settingChangeVsCarryOver: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- ユニバーサル公式: https://www.universal-777.com/product/slot/tropicana/
- P-WORLD / 遊技日本 検定通過: https://news.p-world.co.jp/articles/26893/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/3S1646/
- HAZUSE 機種情報: https://hazuse.com/hd/3s1646/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10064
- 一撃 朝一/設定変更: https://1geki.jp/slot/l_tropicana/3/
- 一撃 出玉率モード: https://1geki.jp/slot/l_tropicana/1/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/84030/
- 必勝本 モード: https://hisshobon.com/machineinfo/84035/
- 必勝本 モード移行: https://hisshobon.com/machineinfo/84036/
- 必勝本 狙いドコロ: https://hisshobon.com/machineinfo/84044/
- なな徹 天井/リセット: https://nana-press.com/kaiseki/machine/788/23211/
- パチビー: https://www.pachibee.jp/machines/kouryaku/224060008
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/214693/
- スロパチクエスト: https://www.slopachi-quest.com/article/tropicana-tenjou/
- K-Navi: https://p-kn.com/slot/4164/
