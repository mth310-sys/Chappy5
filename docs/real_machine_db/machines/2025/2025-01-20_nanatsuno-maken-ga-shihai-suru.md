# 七つの魔剣が支配する

recordNo: 1705
machineName: 七つの魔剣が支配する
aliases: L七つの魔剣が支配する / スマスロ七つの魔剣が支配する / ななつま
manufacturer: コナミアミューズメント（販売・ブランド） / KPE（製造）
formalModel: L七つの魔剣が支配するPU
inspectionCode: 4S1345
releaseDate: 2025-01-20
generation: 6.5号機 / スマスロ / AT
systemType: 擬似ボーナス + バトルST + AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- コナミアミューズメント公式ニュースで製造元KPE、2025-01-20稼働開始予定を確認。
- HAZUSEで検定番号 `4S1345`、型式 `L七つの魔剣が支配するPU`、導入開始日2025-01-20を確認。
- コナミ公式機種サイト、グリーンべると、ゼンリン、複数解析サイトでも2025-01-20で一致。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 99.0%
- setting3: 101.1%
- setting4: 105.5%
- setting5: 108.5%
- setting6: 111.0%
bonusInitialHitBySetting:
- setting1: 1/228.0
- setting2: 1/222.0
- setting3: 1/209.7
- setting4: 1/185.6
- setting5: 1/173.5
- setting6: 1/164.7
stInitialHitBySetting:
- setting1: 1/408.3
- setting2: 1/394.9
- setting3: 1/366.4
- setting4: 1/314.0
- setting5: 1/289.2
- setting6: 1/272.3
baseGamesPer50: 約33.0G/50枚
netIncrease:
- キンバリーBONUS: 約4.0枚/G
- プロローグBONUS: 約4.0枚/G
- 魔剣BONUS: 約2.7枚/G または Dual Dominate Mode時 約5.4枚/G
basicPayout:
- キンバリーBONUS: 20G（純増約4.0枚/G）
- プロローグBONUS: 30G（純増約4.0枚/G、ST突入濃厚）
- Seven Spellblades Battle: 22G+αのバトルST
- 魔剣BONUS: 40G+α（純増約2.7枚/G、条件により約5.4枚/G）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ゲーム数天井: 通常時最大1000G+αでプロローグBONUS。
- キンバリーBONUSではゲーム数天井の進行をリセットしない。
- ST間でキンバリーBONUSを4回スルーすると、5回目のボーナスはプロローグBONUS濃厚。
- 規定ゲーム数の主な抽選ポイントは100G / 250G / 450G / 650G / 1000G。1000Gが通常最大天井。
- 通常時はオリバー/ナナオのCZポイント各100pt到達でCZへ。ボーナスレベルは5段階で、レベルが高いほど次回プロローグBONUS期待度が上がる。
- 有利区間リセット時（設定変更時を除く）は七つのツラヌキLOOPへ入り、ST勝利ごとに七つの支配トリガーが発動する約77%ループ系の出玉契機となる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_POWER_CYCLE_TABLE_AND_PUBLIC_MORNING_NUMBERS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- 天井までのゲーム数: RESET。
- 内部状態: RESET / 再抽選。
- CZポイント: RESET後に初期値を再抽選し、朝一は優遇。
- ボーナスレベル: RESET後に再抽選し、朝一は優遇。
- レア役高確: RESET。
- 実戦上は昼ステージから開始する資料あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_DIRECT_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、天井進行、内部状態、CZポイント、ボーナスレベルを引き継ぐ。
- なな徹の設定変更/据え置き比較表と、必勝本の設定変更/電源OFF ON比較を組み合わせて確認。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: 天井までのゲーム数を引き継ぐ。
- CZポイントを引き継ぐ。
- ボーナスレベルを引き継ぐ。
- 内部状態を引き継ぐ。
- レア役高確を引き継ぐ。
- 電源OFF→ON時の開始ステージは主要解析でも調査中。
- 有利区間は二次解析の比較表でCARRY_OVER記述があるが、必勝本の比較表では独立行がないため、機種固有直接性を一段落として `ANALYSIS_HIGH_CROSSCHECKED_SECONDARY` 扱い。
confidence: ANALYSIS_HIGH_FOR_CEILING_CZ_POINT_BONUS_LEVEL_STATE_RARE_HIGH / ANALYSIS_HIGH_CROSSCHECKED_SECONDARY_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
- 設定変更後は最大天井が1000G+αから650G+αへ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 最大1000G+α
resetCeiling: 最大650G+α
kimberleyThroughCeiling: ST間キンバリーBONUS最大4スルー、5回目ボーナスでプロローグBONUS濃厚
- 1geki、なな徹、必勝本、HAZUSE、ちょんぼりすたで650G+α短縮が一致。
- キンバリーBONUSではゲーム数天井をリセットしないため、朝一の650G管理でも途中REG後に進行が継続する。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機に一般的なA/B/C等の名称付き通常モード振り分け表は今回の主要資料では確認できず、朝一の比較対象は規定G数・CZポイント・ボーナスレベル・内部状態として扱う。
- 規定G数は設定変更時最大650G+α。
- 初期CZポイントと初期ボーナスレベルが優遇される。
- 初期CZポイント具体振り分け、初期ボーナスレベル1～5具体振り分けは表記揺れ・正式型式・メーカー名を変え、公式/主要解析/旧DB系を再探索したが固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
- レア役高確は設定変更でRESET、純電断ではCARRY_OVER。
- 状態別の設定変更時具体振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVERとする機種別二次比較資料を確認。
- 重要: 通常遊技中の有利区間リセット恩恵「七つのツラヌキLOOP」は **設定変更時の有利区間リセットを除外**。設定変更だけでツラヌキLOOP恩恵を得るわけではない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_FOR_SETTING_CHANGE; ANALYSIS_HIGH_CROSSCHECKED_SECONDARY_FOR_PURE_POWER_CYCLE

### resetBenefits
- ゲーム数天井が最大1000G+α → 最大650G+αへ短縮。
- 設定変更後の100G到達時ボーナス期待度: 約50%。
- 初期CZポイント優遇（最初からポイントが貯まっている可能性あり）。
- 初期ボーナスレベル優遇（次回プロローグBONUS期待度アップ）。
- 100G+αでボーナス当選した場合、設定1のプロローグBONUS当選率は朝一約66%。朝一以外の同条件は約55%。
- 必勝本も「1回目のボーナスがプロローグBONUSとなりやすい」として朝一0G狙いに言及。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 据え置き時に保持される天井進行、CZポイント、ボーナスレベル、内部状態、レア役高確は設定変更で初期化されるため、有利な蓄積を失う場合がある。
- 一方、朝一専用の天井短縮・CZポイント/ボーナスレベル優遇がある。
- 設定変更固有の数値化された不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- なな徹の機種別朝一ページは「リセット判別 現在調査中」。
- 最大650G+αの朝一天井、初期CZポイント/ボーナスレベル優遇は推測材料だが、単独で設定変更確定とはしない。
- 実戦上の設定変更開始ステージは昼ステージとする資料があるが、純電断時ステージが調査中のため確定判別には使えない。
- 本機固有ガックン条件・発生率は、`七つの魔剣が支配する` / `L七つの魔剣が支配するPU` / `ななつま` / KPE / コナミと「ガックン/設定変更/リセット/朝一」を組み替え、主要解析・業界・旧DB系まで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CONFIRMED_DIRECT_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 最大1000G+α
resetCeiling: 最大650G+α
reset100GBonusExpectation: 約50%
reset100GPrologueBonusRateSetting1WhenBonusHits: 約66%
nonReset100GPrologueBonusRateSetting1WhenBonusHits: 約55%
initialCZPoint: 優遇 / concreteDistribution=PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
initialBonusLevel: 優遇 / concreteDistribution=PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
kimberleyThroughCeiling: 4スルー後、5回目ボーナスでプロローグBONUS濃厚
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 最大天井: 通常1000G+α → 設定変更後650G+α。
- 設定変更後100G到達時のボーナス期待度: 約50%。
- 100G+αでボーナスに当選した場合のプロローグBONUS率（設定1）: 朝一約66% / 朝一以外約55%。
- 初期CZポイントと初期ボーナスレベルは優遇されるが、具体振り分け値は未公開/未確認。

## conflicts
- `WORDING_100G_EXPECTATION`: 一般のST後100Gゾーン期待度を約40%とする資料と、設定変更時の100G到達時ボーナス期待度を約50%とする資料がある。条件が異なるためCONFLICT数値として平均化せず、朝一約50%と通常ST後約40%を分離保存。
- `MANUFACTURER_LABEL`: 販売/ブランドはコナミアミューズメント、製造元はKPE。単に「メーカー KPE」「メーカー コナミ」と表記するDBがあるため役割を分離。

## missingFields
- 設定変更時の初期CZポイント具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の初期ボーナスレベル1～5具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部状態別具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH / MAJOR_ANALYSIS_STILL_INVESTIGATING
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL_RELEASE: https://www.konami.com/amusement/corporate/ja/topics/20241118/
- OFFICIAL_MACHINE: https://www.konami.com/amusement/psm/slot/nanatsuma/
- INDUSTRY_MODEL: https://zenrin-net.co.jp/10691/
- INDUSTRY_NEWS: https://news.p-world.co.jp/articles/29485/greenbelt
- ANALYSIS_MODEL_CODE: https://hazuse.com/hd/4s1345/
- ANALYSIS_HIGH_CORE_NANATETSU: https://nana-press.com/kaiseki/machine/877/
- ANALYSIS_HIGH_RESET_NANATETSU: https://nana-press.com/kaiseki/machine/877/26842/
- ANALYSIS_HIGH_PROLOGUE_NUMERIC: https://nana-press.com/kaiseki/machine/877/26852/
- ANALYSIS_HIGH_BONUS_LEVEL: https://nana-press.com/kaiseki/machine/877/26851/
- ANALYSIS_HIGH_RESET_1GEKI: https://1geki.jp/slot/l_nanatsuma/3/
- ANALYSIS_HIGH_CORE_1GEKI: https://1geki.jp/slot/l_nanatsuma/
- ANALYSIS_HIGH_POWER_CYCLE_HISSHOBON: https://hisshobon.com/machineinfo/85581/
- ANALYSIS_HIGH_RESET_TARGET_HISSHOBON: https://hisshobon.com/machineinfo/85588/
- ANALYSIS_HIGH_ADVANTAGEOUS_RESET_HISSHOBON: https://hisshobon.com/machineinfo/85538/
- ANALYSIS_HIGH_POWER_CYCLE_CROSSCHECK: https://chonborista.com/slot/konami-slot/225392/
- ANALYSIS_HIGH_CEILING_PACHIMAGA: https://pachimaga.com/free/article/20250121/056080.php
- ANALYSIS_HIGH_KNAVI: https://p-kn.com/slot/4261/
