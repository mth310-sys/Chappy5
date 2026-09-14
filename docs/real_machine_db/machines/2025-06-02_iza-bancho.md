# いざ！番長

recordNo: 1729
machineName: いざ！番長
aliases: Lいざ！番長 / スマスロ いざ！番長
manufacturer: サボハニ（大都技研グループ）
formalModel: L／いざ番長／SB8
inspectionCode: 430901（1gekiは `430901、0703-057` と併記）
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ
systemType: AT / 差枚数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEで型式 `L／いざ番長／SB8`、検定番号 `430901`、導入開始日2025-06-02、メーカー サボハニを確認。
- 1gekiも型式・導入日を一致確認し、検定番号 `430901、0703-057` を併記。
- 2025-03-07の新潟県公安委員会検定通過を扱う情報島＋/グリーンべるとで `L／いざ番長／SB8（サボハニ）` を確認。
- 遊技日本/Amusement Japanの2025-04-22発表記事でもサボハニ製・型式 `L/いざ番長/SB8`、6月上旬導入を確認。
confidence: INDUSTRY_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.9%
- setting3: 101.3%
- setting4: 106.0%
- setting5: 112.1%
- setting6: 114.9%
initialHitBySetting:
  at:
  - setting1: 1/386.9
  - setting2: 1/368.5
  - setting3: 1/375.8
  - setting4: 1/332.4
  - setting5: 1/351.6
  - setting6: 1/312.1
baseGamesPer50: 約32G
netIncrease:
- 頂ZBASH: 約2.8枚/G
- 青頂ZBASH: 約5.0枚/G
basicPayout:
- 頂ZBASH: 初期150枚+α
- 番長ボーナス: 20G+α
- 絶頂決戦～巌流島～: 平均上乗せ約700枚（紹介値）
- 絶頂輪廻: 期待枚数約3500枚（紹介値）
confidence: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 初当りは基本的にAT「頂ZBASH」。規定ゲーム数またはCZ「刺客ZONE」成功などから突入。
- 通常時モードは通常 / チャンスA / チャンスB / 天国の4種類。
- モード別最大天井は通常999G+α / チャンスA 600G+α / チャンスB 300G+α / 天国100G+α。到達時はAT当選。
- CZ「刺客ZONE」は10G+α、成功期待度40%over。
- AT「頂ZBASH」は差枚数管理型、初期150枚+α、純増約2.8枚/G。
- 上位AT「青頂ZBASH」は純増約5.0枚/G。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_RESET_MODE_NUMERICS_AND_POWER_CYCLE_TABLE_PARTIAL_DIRECT
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- ゲーム数/天井: 設定変更時はモードを再抽選し、通常モードを選択しないためチャンスA以上濃厚。最大天井は600G+αへ短縮。
- モード: チャンスA / チャンスB / 天国から選択。天国は約25%。
- 内部ゲーム数: 朝一にランダムな内部ゲーム数加算あり。
- 御免ポイント: 初期値を優遇し、約30%で70pt以上からスタート。
- 内部状態: ちょんぼりすたの機種固有比較表では設定変更時「リセット」。一方Altemaでは設定変更時の内部状態を「調査中」としているため、詳細初期状態・振り分けは固定しない。
- 有利区間: 設定変更時の機種固有な直接文言を高優先資料で固定できなかったため、スマスロ一般仕様から推測せず `UNVERIFIED_DIRECT_SETTING_CHANGE_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_MODE_POINTS / CONFLICT_OR_INCOMPLETE_FOR_INTERNAL_STATE_DETAIL / UNVERIFIED_DIRECT_FOR_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 据え置き時について、朝一600G+α超えが据え置き濃厚材料になること、純電源OFF→ONでは天井・内部状態を引き継ぐことを機種別資料で確認。
- ただし「据え置き」単独条件としてモード・御免pt・刀pt・有利区間を列挙した高優先の機種固有比較表は固定できなかった。
- よって天井進行は `CARRY_OVER_SUPPORTED_BY_RESET_DETECTION_AND_POWER_CYCLE_EVIDENCE`、その他の内部値は `UNVERIFIED_DIRECT_CARRYOVER_WORDING_AFTER_RESEARCH` として保持し、一般仕様で補完しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_CARRYOVER / UNVERIFIED_DIRECT_FOR_OTHER_INTERNAL_VALUES

### powerCycleBehavior
- 電源OFF→ONのみ: 天井は引き継ぐ。
- 内部状態: Altema/ちょんぼりすたの機種固有比較表で引き継ぎ。
- ステージ: 主要比較表では調査中。
- モード・御免ポイント・刀ポイント・有利区間そのものについて、純電断条件を独立して直接列挙した高優先資料は固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_INTERNAL_STATE / UNVERIFIED_DIRECT_FOR_OTHER_FIELDS

### gameCounterReset
- 設定変更: 前日ゲーム数をそのまま引き継ぐ形ではなく、設定変更用モードを再抽選。さらに内部的なゲーム数ランダム加算が行われる。
- 据え置き: 天井進行を引き継ぐと判断できる機種固有の判別資料あり。
- 電源OFF→ON: 天井を引き継ぐとする機種別比較表あり。
- ランダム内部加算の公式/主要解析による具体的G数振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。後発実戦資料の「5～40G前後推測」は推定のためcanonical不採用。
confidence: ANALYSIS_HIGH / PUBLIC_VALUE_NOT_FOUND_FOR_RANDOM_ADD_DISTRIBUTION

### ceilingAfterReset
normalMaximumCeiling: 999G+α
resetMaximumCeiling: 600G+α
resetModeRequirement: チャンスA以上濃厚
ceilingBenefit: AT「頂ZBASH」当選
maximumCeilingReduction: 399G相当+α差
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常 / チャンスA / チャンスB / 天国の4モード。
- 設定変更時は通常モードへの移行なし、チャンスA以上濃厚。
- 天国選択率は約25.0%。
- チャンスAとチャンスBの正確な数値振り分けは主要資料で `◎ / ○` の序列表現までで、具体率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: ちょんぼりすたは内部状態「リセット」、Altemaは「調査中」。再抽選後の具体状態率も未公開のため `CONFLICT_OR_INCOMPLETE_DIRECT_DESCRIPTION` として保持。
- 据え置き: 単独直接表現は固定不能。
- 電源OFF→ON: 内部状態引継ぎを複数二次解析表で確認。
confidence: CONFLICT_FOR_SETTING_CHANGE_DETAIL / ANALYSIS_HIGH_FOR_POWER_CYCLE

### advantageousSectionReset
- 本機は有利区間リセット時（設定変更時を除く）の恩恵が強く、通常遊技中の有利区間切断後は「絶頂決戦」経由で上位ATへ入る旨の解析がある。
- この通常時の有利区間切断恩恵を設定変更朝一へ流用しない。
- 設定変更 / 据え置き / 純電源OFF→ONそれぞれについて「有利区間そのもの」の直接契約を機種固有資料で十分に固定できなかったため `UNVERIFIED_DIRECT_ADVANTAGEOUS_SECTION_BEHAVIOR_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NON_RESET_SECTION_CUT_BENEFIT / UNVERIFIED_DIRECT_FOR_MORNING_CONTRACT

### resetBenefits
- 最大天井999G+α → 600G+αへ短縮。
- チャンスA以上濃厚。
- 約25%で天国となり100G+α以内のAT当選チャンス。
- 内部ゲーム数ランダム加算あり。
- 御免ポイント初期値優遇、約30%で70pt以上スタート。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更固有の公開された冷遇率・明確な不利益は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時の有利区間リセットで得られる「絶頂決戦→上位AT」恩恵は設定変更時リセットとは別扱いで、朝一恩恵へ混入しない。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一600G+αを超えてAT非当選なら据え置き濃厚材料。
- ただし設定変更時は内部ゲーム数ランダム加算があるため、前兆開始Gが通常ゾーンからずれること自体は据え置き根拠にならない。
- 前日最終G数次第では据え置きでも朝一600G付近で当たる可能性があり、前日G数との併用が必要。
- 本機固有のリールガックン条件・発生率は、機種名/型式/メーカー/番長シリーズ/設定変更/リセット/朝一/ガックンで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_CLUE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 999G+α
resetMaximumCeiling: 600G+α
resetModeNormal: 0%
resetModeTenjo: 約25.0%
resetModeChanceA: PUBLIC_EXACT_RATE_NOT_FOUND_AFTER_RESEARCH
resetModeChanceB: PUBLIC_EXACT_RATE_NOT_FOUND_AFTER_RESEARCH
resetInternalGameAdd: EXISTS_BUT_DISTRIBUTION_PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gomenPoint70OrMoreStart: 約30%
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 正式型式はHAZUSE、1geki、検定通過業界記事、遊技日本で `L／いざ番長／SB8` が一致。早期二次記事の一部に `L/いざ番長/SBB` 表記があるため `CONFLICT_EARLY_SECONDARY_MODEL_SUFFIX_SBB_VS_MULTI_SOURCE_SB8` として保持し、SB8をcanonical採用。
- 検定番号はHAZUSE `430901`、1geki `430901、0703-057` と併記。`430901` を検定番号canonicalとし、追加番号は原表記を保持。
- 設定変更時の「内部状態」は、ちょんぼりすたがリセット、Altemaが調査中。具体状態振り分けを推測せず未確定として保持。

## missingFields
- 設定変更/据え置き/純電断時の有利区間そのものの機種固有直接契約: UNVERIFIED_DIRECT_ADVANTAGEOUS_SECTION_BEHAVIOR_AFTER_RESEARCH
- 据え置き時のモード・御免pt・刀pt等の単独直接列挙: UNVERIFIED_DIRECT_CARRYOVER_WORDING_AFTER_RESEARCH
- 純電断時のモード・各ポイント・有利区間の直接列挙: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 設定変更時チャンスA/Bの正確な振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 内部ゲーム数ランダム加算の正確な分布: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 大都技研公式（業界記事から公式製品ページ参照）: https://www.daitogiken.com/contents/product/slot/izabancho/
- HAZUSE 機種詳細: https://hazuse.com/machine/pachislot/SX0104/
- 情報島＋ 検定通過: https://p-johojima.jp/news/post-1105/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-94089/
- 遊技日本 新機種発表: https://yugi-nippon.com/pachinko-new-machine/post-70704/
- Amusement Japan 新機種発表: https://amusement-japan.co.jp/article/detail/10004821/
- P-WORLD/アミューズメントジャパン業界記事: https://news.p-world.co.jp/articles/30767/amusement
- 1geki 機種TOP: https://1geki.jp/slot/l_bancho_iza/
- 1geki 天井/朝一: https://1geki.jp/slot/l_bancho_iza/3/
- 1geki モード: https://1geki.jp/slot/l_bancho_iza/43/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/946/29780/
- なな徹 天井: https://nana-press.com/kaiseki/machine/946/29777/
- なな徹 AT: https://nana-press.com/kaiseki/machine/946/29792/
- Altema 朝一リセット: https://altema.jp/pachimo/lizabanchoreset
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/234092/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10275
- アタリ7: https://www.atari7.com/slot/iza-bancho.php
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/sabohani/064286.php

## QA notes
- resetBehaviorはホール経営/朝一客AIに必要な粒度に限定し、通常時の全モード移行・全ポイント抽選・演出法則は収集対象外。
- 朝一の内部ゲーム数加算について、実戦ベースで5～40G前後と推測する資料はあるが、公開確定値ではないためcanonicalへ採用していない。
- 通常時有利区間切断後の上位AT恩恵と、設定変更朝一リセットを混同しない。
