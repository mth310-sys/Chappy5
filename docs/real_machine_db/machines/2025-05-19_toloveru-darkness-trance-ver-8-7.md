# L ToLOVEるダークネス TRANCE ver.8.7

recordNo: 1727
machineName: L ToLOVEるダークネス TRANCE ver.8.7
aliases: スマスロToLOVEるダークネス トランスver. / とらぶるダークネス TRANCE ver.8.7
manufacturer: オリンピアエステート（平和ブランド）
formalModel: LToLOVEるダークネスS8
inspectionCode: 530010
releaseDate: 2025-05-19
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス+ST
settings: 2 / 3 / 4 / 5 / 6（設定1非搭載。設定L搭載情報あり、公開性能値は未確認）
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEで型式 `LToLOVEるダークネスS8`、検定番号 `530010`、導入開始日2025-05-19、メーカー オリンピアエステートを確認。
- 東京都公安委員会の2025-04-14告示を報じた情報島、および大阪府公安委員会公示を整理したG-netでも型式・検定番号530010が一致。
- 平和発表を扱う業界記事でも2025年5月導入機として確認。
confidence: INDUSTRY_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting2: 98.0%
- setting3: 99.0%
- setting4: 103.1%
- setting5: 110.3%
- setting6: 112.0%
initialHitBySetting:
- setting2: 1/353.3
- setting3: 1/346.3
- setting4: 1/328.9
- setting5: 1/312.3
- setting6: 1/307.6
baseGamesPer50: 約30.0G
netIncrease: AT/擬似ボーナス 約8.7枚/G
basicPayout:
- メモリアルボーナス: 100枚払い出し
- ToLOVEるEPISODE: 20G
- とらぶるBONUS: 100～1600枚払い出し
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は3系統のチャンス目からどきどきポイントを蓄積して対応CZを目指すほか、規定ゲーム数からのボーナス直撃も存在。
- 初当たり後はST「楽園計画」へ移行。上位ST「ハーレムモード」を搭載。
- 通常ゲーム数天井はST間999G+α。到達時はST当選。
- 設定変更後は天井が650G+αへ短縮される。
- 設定変更時はどきどきポイント、トランスポイントを初期再抽選する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までのゲーム数: RESET。通常999G+αから650G+αへ短縮。必勝本は内部的にゲーム数をランダム加算すると明記。
- 状態: 再抽選。
- どきどきポイント: 再抽選 / 初期ポイント抽選。
- トランスポイント: 再抽選 / 初期ポイント抽選。
- 有利区間: RESET。なな徹の設定変更/据え置き比較表で直接確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き: 有利区間・天井・内部状態・どきどきポイント・トランスポイントを引き継ぐ。
- なな徹の機種固有比較表で直接確認。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### powerCycleBehavior
- 電源OFF→ONのみ: 天井までのゲーム数・状態・トランスポイント・どきどきポイントを引き継ぐ。
- ステージは彩南町または彩南高校ステージ。
- 有利区間そのものについて、必勝本の電源OFF/ON表には独立行がないため、純電断時の有利区間項目だけは `DIRECT_ADVANTAGEOUS_SECTION_WORDING_NOT_FOUND` として過剰一般化しない。
confidence: ANALYSIS_HIGH_FOR_GAME_STATE_POINTS / DIRECT_ADVANTAGEOUS_SECTION_WORDING_NOT_FOUND

### gameCounterReset
- 設定変更: RESET。天井650G+αへ短縮。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: ST間999G+α
resetCeiling: 650G+α
ceilingBenefit: ST当選
maximumCeilingReduction: 349G+α相当
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 独立した通常モード名称/朝一モード振り分け表は主要資料で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 天井ゲーム数は設定変更時に650G+αへ短縮し、内部的にゲーム数をランダム加算する。
confidence: ANALYSIS_HIGH_FOR_CEILING_SELECTION / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_MODE_TABLE

### stateAfterReset
- 設定変更: 状態再抽選。
- 据え置き / 電源OFF→ON: 状態引き継ぎ。
- 状態の詳細振り分け率は収集対象となる朝一公開数値として主要資料で確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 設定変更を伴わない有利区間リセット後は「もぐもぐたい焼きタイム」へ移行する恩恵があるが、なな徹は設定変更時を明確に除外しているため朝一設定変更恩恵には算入しない。
- 純電源OFF→ON時の有利区間そのものは直接記載を固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_UNTOUCHED / UNVERIFIED_DIRECT_FOR_POWER_CYCLE

### resetBenefits
- 天井が通常999G+αから650G+αへ短縮。
- どきどきポイントとトランスポイントを再抽選する。
- どきどきポイントは二次解析で75pt以上スタートが60%以上との記載があるが、主要高優先資料で同数値を再固定できなかったため canonical 数値には採用せず補助情報に留める。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_POINT_RELOTTERY / SECONDARY_ONLY_FOR_75PT_RATE

### resetPenalties
- 設定変更固有の公開された冷遇率・明確な不利益は `NONE_CONFIRMED_AFTER_RESEARCH`。
- エンディング等の通常有利区間リセット後に得られる「もぐもぐたい焼きタイム」恩恵は設定変更時には適用されないため、朝一恩恵として誤加算しない。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一650G+αを超えてST非当選なら設定変更否定/据え置き推測の強材料。ただし+αおよび内部ランダム加算を考慮する。
- なな徹のリセット判別は「現在調査中」。本機固有のガックン条件・発生率は検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時/電源OFF→ON時の開始ステージはいずれも彩南町or彩南高校のため、開始ステージ単独での変更判別には使えない。
confidence: ANALYSIS_HIGH_FOR_CEILING_CLUE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 999G+α
resetMaximumCeiling: 650G+α
ceilingReduction: 349G+α相当
settingChangeDokiDokiPoint75PlusRate: SECONDARY_SOURCE_CLAIM_60_PERCENT_PLUS_NOT_CANONICALIZED
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
stateDistributionAfterReset: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 現時点で性能コアの主要数値に重大な複数ソース競合なし。
- 設定構成は設定2/3/4/5/6の5段階で一致。HAZUSE/P-WORLD等に設定L搭載表記があるが、設定LのAT初当り・出玉率は調査中/未公開のため性能表には混入しない。

## missingFields
- 純電源OFF→ON時の有利区間そのものの直接記載: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 朝一専用モード具体振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の状態具体振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定Lの公開性能値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- HAZUSE: https://hazuse.com/machine/pachislot/SX0101/
- HAZUSE 機種詳細: https://hazuse.com/hd/530010-2/
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-4129/
- G-net 検定通過: https://g-net-ps.com/industry/%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E6%83%85%E5%A0%B1%EF%BC%88%E4%BB%A4%E5%92%8C7%E5%B9%B44%E6%9C%8811%E6%97%A5%E5%85%AC%E7%A4%BA%E5%88%86%EF%BC%89/
- P-WORLD: https://www.p-world.co.jp/machine/database/10259
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/30686/greenbelt
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/969/29586/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/969/29583/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/87043/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/87048/
- 1geki 設定差: https://1geki.jp/slot/l_toloveru_d_trance/0/
- 6確: https://www.kaku6.jp/slot/toloverudtrance/

## QA notes
- 既存 `COMPLETE_CORE` の性能完了判定とは独立してresetBehavior v0.7を管理。
- 実機完全再現用の全ポイント振り分け・全内部抽選は収集対象外。
