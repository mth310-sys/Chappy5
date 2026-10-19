# A-SLOT+ この素晴らしい世界に祝福を！

recordNo: 1671
machineName: A-SLOT+ この素晴らしい世界に祝福を！
aliases: A-SLOT+ このすば / スマスロこのすば / L A-SLOT+このすば FX
manufacturer: ロデオ製造 / サミー
formalModel: L A-SLOT+このすば FX
inspectionCode: 4S0262
releaseDate: 2024-09-02
generation: 6.5号機 / スマスロ
systemType: A+AT / リアルボーナス + 低純増セット管理AT + プチRT / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_ADVANTAGEOUS_SECTION_AND_GAKKUN_UNVERIFIED

## releaseAndModelEvidence
- サミー公式製品一覧で2024年9月製品、製造元ロデオを確認。
- 遊技通信/P-WORLD業界記事で型式 `L A-SLOT+このすばFX`、ロデオ製を確認。
- 検定通過記事で同型式を確認。
- Ativo機種資料で検定番号 `4S0262` を確認。
- パチビー、K-Navi、必勝本で2024-09-02導入を確認。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.5%
- setting2: 99.3%
- setting3: 101.2%
- setting4: 102.9%
- setting5: 105.1%
- setting6: 107.6%
completeStrategyPayoutRateBySetting:
- setting1: 100.2%
- setting2: 101.1%
- setting3: 103.2%
- setting4: 105.1%
- setting5: 107.6%
- setting6: 110.4%
initialHitBySetting:
- setting1: BIG 1/266.4 / REG 1/399.6 / bonus total 1/159.8
- setting2: BIG 1/265.3 / REG 1/378.8 / bonus total 1/156.0
- setting3: BIG 1/256.0 / REG 1/366.1 / bonus total 1/150.7
- setting4: BIG 1/252.1 / REG 1/346.8 / bonus total 1/146.0
- setting5: BIG 1/246.4 / REG 1/326.0 / bonus total 1/140.3
- setting6: BIG 1/238.3 / REG 1/312.1 / bonus total 1/135.1
baseGamesPer50: 約35.2G/50枚（設定1）
netIncrease:
- このすばタイム: 現状維持程度
- プチRT: 現状維持程度
basicPayout:
- びっぐぼーなす: 約250枚
- れぎゅらーぼーなす: 約50枚
- AT「このすばタイム」: 1セット30G
- プチRT: 8G
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- BIG終了後はAT「このすばタイム」へ突入し、1セット30G。通常時BIGなら2セット以上。
- REGからも抽選でATへ突入。通常時のサキュバスチャンス成功から直接ATへ入るルートあり。
- チャンス目成立時などに8GのプチRTへ移行するゲーム性。
- 天井は非搭載。
- 技術介入による完全攻略時機械割が別途公開されているため、市場予想値と分離して保持。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_ADVANTAGEOUS_SECTION_AND_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時はRT状態をRESETし、RT0から開始。
- 解析資料では内部状態もRESETとされる。
- 天井非搭載のためゲーム数天井RESET/短縮はN/A。
- 開始ステージは「アクセルの街」または「お屋敷ステージ」。
confidence: ANALYSIS_HIGH_FOR_RT_STATE / ANALYSIS_SINGLE_FOR_GENERIC_INTERNAL_STATE

### carryOverBehavior
- 据え置き運用に相当する純電源OFF→ONではRT状態をCARRY_OVER。
- 解析比較では内部状態もCARRY_OVER。
- 天井は非搭載のため天井進行の引継ぎはN/A。
- ATストック等の個別電断復帰契約は実機完全再現粒度となるうえ高信頼の固定資料を確認できないため断定しない。
confidence: ANALYSIS_HIGH_FOR_RT_STATE / ANALYSIS_SINGLE_FOR_GENERIC_INTERNAL_STATE

### powerCycleBehavior
- 純電源OFF→ON: RT状態をCARRY_OVER。
- 内部状態も引継ぎとする機種専用解析比較あり。
- ステージは「アクセルの街」または「お屋敷ステージ」。設定変更時と同じ候補のためステージ単独では変更判別不可。
confidence: ANALYSIS_HIGH_FOR_RT_STATE / ANALYSIS_SINGLE_FOR_GENERIC_INTERNAL_STATE

### gameCounterReset
- 天井非搭載。天井用ゲーム数カウンタについてRESET/CARRY_OVERの概念はN/A。
- ボーナス履歴等のホール表示器側挙動は機種内部契約と分離し、本DBでは対象外。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_NO_CEILING

### ceilingAfterReset
- 天井非搭載のためN/A。設定変更専用の短縮天井もなし。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT機で見られるゲーム数天井用の朝一専用モード/規定Gモードは確認されずN/Aとして扱う。
- RT状態については設定変更時RT0開始、純電断時CARRY_OVER（stateAfterResetへ記録）。
confidence: ANALYSIS_HIGH_FOR_RT_STATE / NO_PUBLIC_RESET_MODE_FOUND_AFTER_RESEARCH

### stateAfterReset
- 設定変更: RT状態RESET → RT0開始。
- 純電源OFF→ON/据え置き: RT状態CARRY_OVER。
- 解析資料では一般的な内部状態も設定変更RESET / 電源OFF→ON CARRY_OVER。
confidence: ANALYSIS_HIGH_FOR_RT_STATE / ANALYSIS_SINGLE_FOR_GENERIC_INTERNAL_STATE

### advantageousSectionReset
- スマスロ6.5号機かつATを搭載するが、本機専用の「設定変更時/据え置き時/純電断時の有利区間契約」を直接明記した高信頼資料は、機種名・型式・ロデオ/サミー・有利区間・設定変更・据え置き・電源OFF ONへ検索語を変更しても固定できなかった。
- 世代一般論から推測して埋めず `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED

### resetBenefits
- 天井短縮や朝一専用AT高確などの公開された専用恩恵は確認できない。
- 設定変更時はRT0から開始することが公開されているが、これを定量的な朝一恩恵とは扱わない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / NO_PUBLIC_RESET_BENEFIT_FOUND_AFTER_RESEARCH

### resetPenalties
- 設定変更により前日のRT状態は失われRT0へ戻る。
- RT0化による朝一期待値等の公開固定数値は確認できず、定量ペナルティは登録しない。
confidence: ANALYSIS_HIGH_FOR_RT_RESET / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_EXPECTED_VALUE

### resetDetection
- 設定変更時も電源OFF→ON時も開始ステージ候補は「アクセルの街」または「お屋敷ステージ」で、ステージ単独の確定判別材料にはならない。
- RT状態が設定変更でRT0、電断で引継ぎという差はあるが、客側が朝一に確定判別できる公開手順/数値は確認できない。
- 本機固有ガックン条件・発生率は「A-SLOT+ このすば」「L A-SLOT+このすば FX」「ロデオ」「サミー」+「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_STAGE_AND_RT_DIFFERENCE / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetCeiling: N/A_NO_CEILING
rtState:
- settingChange: RT0
- powerOffOn: CARRY_OVER
publicResetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NO_DEDICATED_RESET_MODE_CONFIRMED
gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
morningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NO_DEDICATED_MORNING_HIT_BENEFIT_CONFIRMED
confidence: ANALYSIS_HIGH_FOR_RT_STATE

### publicMorningNumbers
- 設定変更時RT状態: RT0開始。
- 天井短縮数値: N/A（天井非搭載）。
- 朝一専用モード振り分け/当選率/ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- マルっとWAVEの機種概要に「AT純増 約9.0枚」とする表記がある一方、必勝本・パチビー・なな徹/P-WORLD系はAT「このすばタイム」を「現状維持程度」としている。ATは低純増でリアルボーナスをつなぐ設計という業界記事とも整合するため、canonicalは「現状維持程度」とし、`CONFLICT_AT_NET_INCREASE_9_0_VS_NEAR_ZERO` として保持。

## missingFields
- advantageousSectionReset.settingChangeVsCarryOver: UNVERIFIED_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- publicResetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NO_DEDICATED_RESET_MODE_CONFIRMED
- publicMorningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NO_DEDICATED_MORNING_HIT_BENEFIT_CONFIRMED

## sources
retrievedAt: 2026-09-14
- サミー公式 製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/index.html
- サミー公式 製品ページ: https://www.sammy.co.jp/japanese/product/pachislot/A_kon_su/
- P-WORLD / 遊技通信 発表記事: https://news.p-world.co.jp/articles/28170/yugitsushin
- P-WORLD / 遊技日本 検定通過: https://news.p-world.co.jp/articles/27673
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10081
- Ativo 型式/検定番号: https://ativo.jp/2024/06/28/%EF%BD%8C%E3%80%80a%E2%80%90slot-%E3%81%93%E3%81%AE%E7%B4%A0%E6%99%B4%E3%82%89%E3%81%97%E3%81%84%E4%B8%96%E7%95%8C%E3%81%AB%E7%A5%9D%E7%A6%8F%E3%82%92/
- パチビー 基本スペック: https://www.pachibee.jp/machines/index/224080003
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4345/1/105001
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4345/1/103443
- 必勝本 AT解説: https://hisshobon.com/machineinfo/84440/
- なな徹 ボーナス確率/機械割/小役/ベース: https://nana-press.com/kaiseki/machine/805/22490/
- なな徹 AT: https://nana-press.com/kaiseki/machine/805/23845/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/216450/
- K-Navi: https://p-kn.com/slot/4177/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004391/
- マルっとWAVE: https://marutto-w.com/industry_news/20240905-2
