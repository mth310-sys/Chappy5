# 吉宗

recordNo: 1720
machineName: 吉宗
aliases: スマスロ 吉宗 / L吉宗 / 吉宗(2025)
manufacturer: サボハニ / 大都技研
formalModel: L／ヨシムネS／SC2
inspectionCode: 430582
releaseDate: 2025-04-21
generation: 6.5号機 / スマスロ / AT
systemType: 規定ゲーム数+レア役抽選型・擬似ボーナスAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 大都技研公式の『吉宗』導入記念キャンペーンは2025-04-21開始。公式サウンドトラックも発売日2025-04-21で、吉宗(2025)の稼働時期と一致。
- アミューズメントジャパン/P-WORLD業界ニュースはサボハニ製『吉宗』を2025-03-10販売発表、全国ホール導入2025-04-21予定と報道。
- HAZUSEは型式 `L／ヨシムネS／SC2`、検定番号 `430582`、サボハニ、導入開始2025-04-21を掲載。
confidence: OFFICIAL_FOR_DATE_CONTEXT / INDUSTRY_FOR_RELEASE / ANALYSIS_DB_HIGH_FOR_MODEL_AND_INSPECTION

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 99.1%
- setting3: 100.6%
- setting4: 104.1%
- setting5: 107.1%
- setting6: 112.0%
initialHitBySetting:
- setting1: ボーナス初当り 1/378.9
- setting2: 1/369.6
- setting3: 1/358.8
- setting4: 1/335.1
- setting5: 1/318.5
- setting6: 1/292.4
baseGamesPer50: 約33G/50枚
netIncrease: 約7.11枚/G
basicPayout:
- BIG BONUS: 約711枚
- REGULAR BONUS: 約72枚
- 裏鷹狩り: BIG即連状態。突入時期待獲得枚数 約3600枚（性能比較用参考値）
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数とレア役の両方でボーナスを抽選。
- 通常モード系は通常A / 通常B / 天国準備 / 天国A / 天国B。
- モード別最大規定G: 通常A 999G+α / 通常B 465G / 天国準備 999G+α / 天国A 193G / 天国B 193G。
- 天国Bは71.1%で同モードをループ。天国滞在時は約30%で100G以内の規定Gが選択される。
- 鷹狩りモードはA〜Eの内部段階を持つ。設定変更時は再抽選、通常遊技中は昇格抽選が存在するが、完全再現用の全移行テーブルは収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_POWER_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までのゲーム数: RESET。
- 通常モード: 再抽選。
- 鷹狩りモード: 再抽選。
- 液晶ゲーム数: 0G。
- ステージ: 必勝本実戦上は昼ステージ。
- 有利区間: RESETとする機種別解析資料を確認。
- 内部状態: RESETとする機種別解析資料を確認。ただし必勝本の比較表は「モード」「鷹狩りモード」を直接管理しており、別建ての高確/低確状態テーブルは公開確認できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 前日の天井までの内部ゲーム数、通常モード、鷹狩りモード、内部状態、有利区間を引き継ぐ扱い。
- 液晶ゲーム数は電源OFF→ONで0G表示になるため、表示ゲーム数だけでは内部進行を判別できない。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE_TABLE / ANALYSIS_MULTI_SOURCE_FOR_INTERNAL_CARRY

### powerCycleBehavior
- 純電源OFF→ON: 天井までのゲーム数を引き継ぐ。
- 通常モード: 引き継ぐ。
- 鷹狩りモード: 引き継ぐ。
- 液晶ゲーム数: 0Gに戻る。
- 内部状態・有利区間: 引き継ぎとする機種別解析資料を確認。
- 純電断後の開始ステージは必勝本で `現在調査中`。追加検索後も高信頼の固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAMES_AND_MODES / ANALYSIS_MULTI_SOURCE_FOR_STATE_AND_ADVANTAGEOUS_SECTION / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: 内部規定ゲーム数進行RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。ただし液晶表示は0Gに戻る。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_TABLE

### ceilingAfterReset
normalCeiling: 最大999G+α（通常A/天国準備時）
resetCeiling: 最大999G+α
resetCeilingShortening: NONE_CONFIRMED
- 設定変更時でも最大天井999G+α到達事例が解析実戦で確認されており、固定天井短縮はない。
- 通常Bなら465G、天国A/Bなら193Gだが、これはモード固有天井であって「リセット専用短縮天井」ではない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 通常モードを再抽選。
- 据え置き/純電源OFF→ON: 通常モード引継ぎ。
- 鷹狩りモードも設定変更時再抽選、据え置き/純電断時引継ぎ。
- 設定変更時の通常A/B/天国準備/天国A/B具体振り分けは、機種名・型式・サボハニ/大都技研・朝一/リセット/設定変更/モード振り分け等で再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- なな徹もリセット時モード振り分けは未判明と明記。
confidence: ANALYSIS_HIGH_FOR_DIRECTION / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態RESETとする機種別解析あり。
- 据え置き/純電源OFF→ON: 引継ぎとする機種別解析あり。
- 設定変更専用の高確スタート率など比較可能な公開数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_MULTI_SOURCE

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 遊技中の有利区間リセットを契機とした裏鷹狩り等のツラヌキ挙動は通常営業中の区間切断契機であり、設定変更朝一の恩恵とは分離管理する。
confidence: ANALYSIS_MULTI_SOURCE_MACHINE_SPECIFIC

### resetBenefits
- 固定天井短縮: なし。
- 設定変更専用で確認できたモード優遇率・高確移行率・ボーナス期待度上乗せなどの公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- なな徹はリセット濃厚台でも初回ボーナスが最大999G+αとなるケースを確認し、「天井短縮やモード優遇などの恩恵がない可能性」を記載。
- 「ボーナス後193Gまで約54%」は通常のボーナス後を含むゲーム性数値であり、リセット専用数値としては採用しない。
confidence: ANALYSIS_HIGH / CONSERVATIVE_NO_UNPROVEN_BENEFIT

### resetPenalties
- 設定変更により前日の内部規定G進行、通常モード、鷹狩りモードを失うため、前日が深いG数/有利モードだった場合は客側に不利となり得る。
- 設定変更固有の追加ペナルティ率や不利モード固定などは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOST_CARRY_VALUES

### resetDetection
- 液晶ゲーム数は設定変更でも純電源OFF→ONでも0Gになるため、表示だけでは判別不可。
- 設定変更後の固定天井短縮がないため、「999Gより浅い境界を超えたら据え置き」というタイプの判別はできない。
- 前日最終G数と当日のゾーン/前兆位置の組み合わせは据え置き推測材料になり得るが、モード依存があるため単独確定扱いしない。
- 本機固有ガックン条件・発生率は `吉宗/スマスロ吉宗/LヨシムネS SC2/サボハニ/大都技研 + ガックン/設定変更/リセット/据え置き` 等へ検索語を変え、主要解析・旧DB系を横断したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 999G+α
resetMaximumCeiling: 999G+α
resetCeilingShortening: なし
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetSpecialBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- `NO_RESET_CEILING_SHORTENING_VS_LOW_QUALITY_MIXED_MACHINE_PAGES`: 一部検索結果には「吉宗」名義で800G等へのリセット天井短縮を記すページがあるが、内容は2024年の『吉宗RISING』または別機種情報との混同が確認できる。2025年 `L／ヨシムネS／SC2` については、必勝本・なな徹・複数解析が最大999G+αを維持する点で一致するため、短縮なしをcanonicalとした。
- `BB_711_VS_INDUSTRY_HEADLINE_771_TYPO`: アミューズメントジャパン/P-WORLD記事の見出しに「BB771枚」とあるが、本文は711枚で、公式由来の製品訴求・他解析・大都技研の「7月11日」説明とも711枚で一致。canonicalは711枚。見出し側を誤記として競合注記保持。

## missingFields
- 設定変更時の通常モード具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の鷹狩りモード具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用の高確/状態開始率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON後の開始ステージ: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 大都技研公式 吉宗導入記念キャンペーン: https://www.daitogiken.com/contents/product/slot/yoshimunes/campaign/
- 大都技研公式 サウンドトラック（吉宗2025発売日）: https://www.daitogiken.com/products/music/soundtrack/
- アミューズメントジャパン/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/30425/amusement
- HAZUSE 吉宗（型式/検定番号/性能）: https://hazuse.com/machine/pachislot/SX0100/
- パチビー 基本スペック/天井: https://www.pachibee.jp/machines/index/225030005
- パチビー 攻略情報/モード別天井: https://www.pachibee.jp/machines/kouryaku/225030005
- 1geki 基本スペック: https://1geki.jp/slot/l_yoshimune/39/
- 1geki 天井/モード: https://1geki.jp/slot/l_yoshimune/3/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86662/
- 必勝本 天井&設定変更/電源OFF ON: https://hisshobon.com/machineinfo/86650/
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/920/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/920/29008/
- ちょんぼりすた 吉宗: https://chonborista.com/slot/daito-slot/229898/
- ぽこすろっと 吉宗（設定変更/電断/有利区間整理）: https://www.nankaikoya.jp/l-yoshimune-kitaichi/

## sourceQuality
- release/manufacturer context: OFFICIAL + INDUSTRY
- formal model/inspection: ANALYSIS_DB_HIGH
- core performance: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE
- reset behavior: ANALYSIS_HIGH_MULTI_SOURCE
- missing reset numeric values: UNVERIFIED only after re-search across multiple source families
