# スロット Re:ゼロから始める異世界生活 season2

recordNo: 1681
machineName: スロット Re:ゼロから始める異世界生活 season2
aliases: L Re:ゼロから始める異世界生活 season2 / スマスロ リゼロ2 / リゼロ2
manufacturer: パオン・ディーピー（大都技研ブランド）
formalModel: L Re：ゼロから始める異世界生活 season2PA5
inspectionCode: 430205
releaseDate: 2024-10-21
generation: 6.5号機 / スマスロ
systemType: AT / 直AT / セット継続型AT + 差枚数管理型上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 大都技研公式製品ページは2024年10月製品として本機を掲載し、製造元を株式会社パオン・ディーピー、初当り直AT・純増約9.0枚/Gと案内。
- HAZUSEは型式 `L Re：ゼロから始める異世界生活 season2PA5`、検定番号 `430205`、導入開始日 `2024-10-21`、メーカー パオン・ディーピーを掲載。
- グリーンべると/P-WORLDの2024-10-07更新新台スケジュールでも2024-10-21導入パチスロとして本機を掲載。
confidence: OFFICIAL + INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.8%
- setting3: 100.7%
- setting4: 105.2%
- setting5: 110.5%
- setting6: 114.9%
initialHitBySetting:
- setting1: AT 1/417.2
- setting2: AT 1/408.5
- setting3: AT 1/387.1
- setting4: AT 1/354.3
- setting5: AT 1/332.9
- setting6: AT 1/305.4
baseGamesPer50: 約33G/50枚
netIncrease:
- 殲滅RUSH: 約9.0枚/G
- 大兎殲滅戦: 約4.0枚/G
- 超強欲RUSH: 約9.0枚/G
basicPayout:
- 殲滅RUSH: 1セット前半10G + 後半の大兎殲滅戦8Gで継続判定
- 上位AT「超強欲RUSH」: 差枚数管理型、突入時は上乗せ特化ゾーン「おねだりFresh」から開始
confidence: ANALYSIS_HIGH + INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は毎ゲームポイントを獲得し、規定ポイント到達で直AT「殲滅RUSH」に当選する構造。
- 通常の規定ポイント天井は最大1400pt（平均約930G）。
- AT間1300G消化のゲーム数天井も存在し、到達時はロングフリーズ発生濃厚、EPボーナス + 上位AT直行が解析されている。
- 通常時内部状態は通常/高確が公開されているが、実機完全再現用の詳細移行率は本DB対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_DETECTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、天井、内部状態、ポイントをリセット。
- 朝一は基本的に菜月家ステージから開始。
- 規定ポイント天井は通常最大1400ptから、設定変更後は400 / 600 / 800 / 1000ptのいずれかとなり最大1000ptへ短縮。
- 設定変更時は内部的にポイントのランダム加算抽選が行われるため、前兆発生位置のズレだけでは据え置き確定にならない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、ポイントを引き継ぐ。
- 前日からの規定ポイント進行を引き継ぐため、1000ptを超えてATに当選しない挙動は据え置き濃厚材料となる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ON時は天井と内部状態を引き継ぐ資料を確認。
- 有利区間も引き継ぐとする解析資料があり、設定変更との差が明確。
- ポイントについては設定変更時のみリセット/ランダム加算、据え置き時引継ぎが確認されており、純電源OFF→ONも引継ぎ扱いとする解析資料と整合。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: 規定ポイント天井進行をリセット。ポイントはランダム加算後の内部値から開始。
- 据え置き/純電源OFF→ON: 天井進行を引き継ぐ。
- AT間1300Gのゲーム数天井についても設定変更時はリセット、据え置き/電断は引継ぎ扱いとして主要解析の朝一表と整合。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalPointCeiling: 最大1400pt（平均約930G）
resetPointCeiling: 400 / 600 / 800 / 1000pt のいずれか / 最大1000pt
normalGameCeiling: AT間1300G
resetGameCeiling: 設定変更で進行リセット。ゲーム数側に別個の短縮数値は確認されない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 規定ポイントは設定変更時に400 / 600 / 800 / 1000ptのいずれかへ再決定される。
- 各天井候補の個別振り分け率は、機種名・型式・メーカー名と「リセット/朝一/天井振り分け/400/600/800/1000pt」を組み合わせて再探索したが、信頼できる公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常のエキドナモード等について設定変更専用の公開移行率は確認できず、本DBでは推測しない。
confidence: ANALYSIS_HIGH_FOR_RESET_CEILING_SET / UNVERIFIED_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態リセット、据え置き/純電源OFF→ON時は内部状態引継ぎ。
- 朝一専用の高確移行率など、比較可能な固定公開数値は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 据え置き/純電源OFF→ON: 有利区間引継ぎ。
- 通常遊技中に有利区間をリセットした場合のゲーム性として上位AT CZ「強欲ゾーン」へ移行する解析があるが、これは設定変更直後の朝一恩恵とは別契機なので混同しない。
confidence: ANALYSIS_HIGH

### resetBenefits
- 規定ポイント天井が最大1400ptから最大1000ptへ短縮。
- 設定変更時にポイントがランダム加算されるため、見かけ上より内部ptが進んだ状態から始まる可能性がある。
- 朝一実戦値として100G以内AT当選率5.7%という集計値が公開されている。ただしメーカー公表値ではなく実戦集計なので参考値として保持。
confidence: ANALYSIS_HIGH_FOR_CEILING / ANALYSIS_SINGLE_FOR_100G_RATE

### resetPenalties
- 設定変更時に限定された明確な主要不利要素は、十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 設定変更後はポイント天井が最大1000ptのため、1000ptを超えてもAT非当選なら据え置き濃厚とする解析がある。
- ただし設定変更時はポイントがランダム加算されるため、前兆位置が通常ゾーンとズレること自体は据え置き確定材料にならない。
- 朝一の基本開始ステージは菜月家とされるが、設定変更/据え置きの双方を確定識別できるステージ差としては扱わない。
- `リゼロ2` / 正式型式 / パオン・ディーピー / 大都技研 と「ガックン/設定変更/据え置き/リセット/朝一」を組み合わせて再探索したが、本機固有ガックン条件・発生率を高信頼に固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_1000PT_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalPointCeiling: 1400pt
normalPointCeilingAverageGameEquivalent: 約930G
resetPointCeilingCandidates: 400 / 600 / 800 / 1000pt
resetPointCeilingMax: 1000pt
resetPointDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetRandomPointAddition: EXISTS / PUBLIC_DISTRIBUTION_NOT_FOUND
morningWithin100GHitRate: 5.7% (実戦値 / ANALYSIS_SINGLE)
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後規定ポイント天井: 400 / 600 / 800 / 1000pt、最大1000pt。
- 通常規定ポイント天井: 最大1400pt、平均約930G。
- 朝一100G以内AT当選率: 5.7%（実戦集計値）。
- 設定変更時ポイントランダム加算: あり。ただし加算量分布は公開固定値未確認。
- 各短縮天井候補の選択率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- メーカー表記は公式/HAZUSEで「パオン・ディーピー（製造元）」、一般解析サイトでは「大都技研」と表記される。ブランド/販売系統と製造元の違いとして扱い、canonical manufacturerは正式型式に紐づくパオン・ディーピー、注記として大都技研ブランドを保持。
- 純増は機種概要で「約9.0枚/G」が強調される一方、大兎殲滅戦は約4.0枚/G。異なるATパートの値でありCONFLICTではないため定義を分離。

## missingFields
- 設定変更時400/600/800/1000pt各候補の個別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時ランダム加算ポイントの分布: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_FOR_IDENTITY_CORE_AND_RESET / LIMITED_FOR_RESET_DISTRIBUTION_AND_GAKKUN
sources:
- 大都技研公式製品ページ: https://www.daitogiken.com/contents/product/slot/rezero2/
- 大都技研製品一覧: https://www.daitogiken.com/products/slot/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0087/
- グリーンべると/P-WORLD 新台スケジュール: https://news.p-world.co.jp/articles/29118/greenbelt
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/paondp_slot/06/kh01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10121
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/219748/
- 一撃 天井/朝一: https://1geki.jp/slot/l_rezero_season2/3/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/819/24862/
- スロパチクエスト 天井/リセット: https://www.slopachi-quest.com/article/rezero2-tenjou/
- ABEMA TIMES 解説: https://times.abema.tv/articles/-/10147209
