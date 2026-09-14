# パチスロL黄門ちゃま天

recordNo: 1674
machineName: パチスロL黄門ちゃま天
aliases: L黄門ちゃま天 / スマスロ黄門ちゃま天 / L黄門ちゃま天L2
manufacturer: オリンピア製造 / 平和
formalModel: L黄門ちゃま天L2
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2024-09-02
generation: 6.5号機 / スマスロ
systemType: AT / セットストック + 引き戻し型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_INSPECTION_CODE_AND_RESET_DETAIL_UNVERIFIED

## releaseAndModelEvidence
- Amusement Japanでオリンピア製、2024-09-02導入予定を確認。
- 遊技日本/P-WORLDで型式 `L黄門ちゃま天L2`、オリンピア製を確認。
- グリーンべると検定通過記事でも同型式を確認。
- 検定番号は機種名・型式・オリンピア・検定番号で業界/機種DB系を再探索したが、今回高信頼に固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: INDUSTRY / MULTI_SOURCE_MATCH_FOR_MODEL_AND_DATE / UNVERIFIED_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.5%
- setting3: 101.5%
- setting4: 106.3%
- setting5: 110.0%
- setting6: 112.3%
initialHitBySetting:
- setting1: AT 1/398.5
- setting2: AT 1/384.6
- setting3: AT 1/354.2
- setting4: AT 1/313.5
- setting5: AT 1/285.0
- setting6: AT 1/271.1
baseGamesPer50: 約30.5G/50枚
netIncrease:
- AT「ええじゃないかRUSH」: 約4.0枚/G
basicPayout:
- AT初回セット: 30G or 50G+α
- AT2セット目以降: 10G+α/セット
- 初回30G: 87.5%
- 初回50G: 12.5%
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ATはセット数管理型で、レア役・狙ええ図柄などからセットストックを獲得する。
- 通常時は規定ゲーム数や小役履歴などから「世直し提灯」点灯を目指し、点灯時にAT抽選。
- 世直し提灯点灯までの世直しカウンター天井は310G。
- AT間ゲーム数天井は最大999G+α。ダブルちゃんモードなら500G+α。
- 世直し提灯スルー回数天井は通常最大7回点灯でAT当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_SELECTED_INTERNAL_ITEMS_AND_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- AT間ゲーム数天井RESET。
- 内部状態を再抽選。
- 狙ええ状態（ミトン状態）を再抽選。
- 通常モードをRESET/再抽選。
- 世直し提灯スルー回数天井は通常最大7回から3回に短縮。
- 初期モードは通常A 75.0% / 通常B 12.5% / 高確 12.5%。通常B以上合計25.0%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- AT間ゲーム数天井CARRY_OVER。
- 通常モードCARRY_OVER。
- 内部状態・狙ええ状態も純電断比較からCARRY_OVER扱い。
- 裏提灯モード、ダブルちゃんモード、飛脚さんポイント、「四」直し履歴については設定変更/据え置きの個別契約が主要資料でも調査中のため推測しない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_GAME_COUNTER_MODE / UNVERIFIED_FOR_SELECTED_INTERNAL_ITEMS

### powerCycleBehavior
- 純電源OFF→ONではAT間天井G数CARRY_OVER。
- 内部状態CARRY_OVER。
- 狙ええ状態（ミトン状態）CARRY_OVER。
- 通常モードは据え置き扱いとしてCARRY_OVER。
- 裏提灯モード、ダブルちゃんモード、飛脚さんポイント、「四」直し履歴、開始ステージは機種専用主要解析で調査中のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_STATE / UNVERIFIED_FOR_SELECTED_INTERNAL_ITEMS

### gameCounterReset
- 設定変更: AT間ゲーム数天井RESET。
- 据え置き/純電断: AT間ゲーム数天井CARRY_OVER。
- 世直し提灯点灯間の世直しカウンターおよびスルー回数の純電断表示復帰契約は個別に高信頼固定できないため、一般論で補完しない。
confidence: ANALYSIS_HIGH_FOR_AT_GAME_CEILING / UNVERIFIED_FOR_DISPLAY_SPECIFICS

### ceilingAfterReset
- AT間ゲーム数天井は通常999G+α。設定変更専用のゲーム数短縮は確認されない。
- 世直し提灯スルー回数天井は通常7回点灯 → 設定変更時3回点灯へ短縮。
- ダブルちゃんモード滞在時は500G+αだが、設定変更時の同モード契約は主要資料で調査中のため朝一短縮値としては採用しない。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時は初期モードを再抽選。
- 公開初期モード振り分け: 通常A 75.0% / 通常B 12.5% / 高確 12.5%。通常B以上25.0%。
- 据え置き時はモードCARRY_OVER。
- 裏提灯モード・ダブルちゃんモードの設定変更/電断個別契約は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NORMAL_MODE / UNVERIFIED_FOR_SPECIAL_MODES

### stateAfterReset
- 設定変更: 状態再抽選、狙ええ状態再抽選。
- 純電源OFF→ON: 状態・狙ええ状態CARRY_OVER。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時は有利区間RESET、据え置き時はCARRY_OVER。
- 通常遊技中ではエンディング終了後などに有利区間RESET。
- 設定変更時以外の有利区間RESET後は「天使ST」へ移行し、その約25%で「大天使」。設定変更時はこの恩恵の対象外。
- 有利区間ランプでは設定変更/据え置き判別不可。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 世直し提灯スルー回数天井が通常7回点灯から3回点灯へ大幅短縮。
- 初期モードは通常B以上が25.0%。
- 有利区間移行時の1G目にレア小役で世直し提灯点灯抽選があり、弱レア小役0.4%、強レア小役25.0%、特殊役100%。ただし通常抽選との差は大きくないとされる。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日のAT間天井進行、通常モード、内部状態、狙ええ状態は設定変更で失われる。
- 通常遊技中の有利区間RESET後に付く「天使ST」（約25%大天使）は設定変更時には付与されない。
confidence: ANALYSIS_HIGH

### resetDetection
- リセット判別はなな徹の機種専用ページでも「現在調査中」。
- 有利区間ランプでは判別不可。
- 世直し提灯3回目でAT非当選なら設定変更後の短縮と整合しないため据え置き推測材料となり得るが、各種内部条件・途中有利区間リセット等を考慮し確定判別とは扱わない。
- 本機固有ガックン条件・発生率は「パチスロL黄門ちゃま天」「L黄門ちゃま天L2」「オリンピア」「平和」+「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」で検索語を変え、公式・業界・主要解析・旧DB系を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LAMP / UNVERIFIED_FOR_GAKKUN_AND_DIRECT_DETECTION

### numericResetData
normalGameCeiling: 999G+alpha
resetGameCeiling: SAME_999G+alpha_NO_DEDICATED_SHORTENING_CONFIRMED
doubleChanModeCeiling: 500G+alpha
normalLanternThroughCeiling: 7_lights
resetLanternThroughCeiling: 3_lights
initialModeDistribution:
- normalA: 75.0%
- normalB: 12.5%
- high: 12.5%
- normalB_or_higher: 25.0%
advantageousSectionFirstGameLanternRate:
- weakRare: 0.4%
- strongRare: 25.0%
- specialRole: 100%
gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH

### publicMorningNumbers
- 設定変更後の世直し提灯スルー天井: 3回点灯。
- 初期モード: 通常A 75.0% / 通常B 12.5% / 高確 12.5%。
- 通常B以上: 25.0%。
- 有利区間移行1G目の世直し提灯点灯率: 弱レア0.4% / 強レア25.0% / 特殊役100%。
- ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 早期整理サイトの一部に本機導入時期を「2024年5月上旬予定」とする誤記が残るが、平和発表・複数業界記事・主要解析は2024-09-02で一致。canonicalは2024-09-02とし `CONFLICT_EARLY_PREVIEW_RELEASE_MONTH_MISPRINT` を保持。

## missingFields
- inspectionCode: UNVERIFIED_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- specialModeContracts.uraChochin: UNVERIFIED_AFTER_RESEARCH
- specialModeContracts.doubleChan: UNVERIFIED_AFTER_RESEARCH
- hikyakuPointResetContract: UNVERIFIED_AFTER_RESEARCH
- yonNaoshiHistoryResetContract: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior.startStage: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- 平和 製品情報（業界記事から公式導線）: https://www.heiwanet.co.jp/products/pachislot/l-km8/
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/28053/amusement
- P-WORLD / 遊技日本: https://news.p-world.co.jp/articles/28161/nippon
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/28152/greenbelt
- グリーンべると 検定通過: https://web-greenbelt.jp/post-84399/
- 必勝本 基本スペック/天井設定変更: https://p.hisshobon.jp/vpage/2636/2
- 必勝本 AT初期G数: https://hisshobon.com/machineinfo/84398/
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/799/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/799/23676/
- なな徹 天井: https://nana-press.com/kaiseki/machine/799/23673/
- なな徹 狙い目/リセット: https://nana-press.com/kaiseki/machine/799/23674/
- なな徹 通常モード: https://nana-press.com/kaiseki/machine/799/23680/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/799/23677/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_komonchama_ten/3/
- 一撃 基本仕様: https://1geki.jp/slot/l_komonchama_ten/39/
