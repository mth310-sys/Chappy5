# ドラゴンハナハナ～閃光～

recordNo: 1638
machineName: ドラゴンハナハナ～閃光～
aliases: ドラゴンハナハナ～閃光～ 25Φ / Sドラゴンハナハナ～閃光～DX / ドラハナ閃光25
manufacturer: パイオニア
formalModel: Sドラゴンハナハナ～閃光～DX
inspectionCode: 3S1039
releaseDate: 2024-03-18
generation: 6号機 / 25Φメダル機
systemType: ノーマルAタイプ / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチ7の25Φ専用機種ページ、K-Navi、HAZUSEが2024-03-18導入で一致。
- 遊技日本/P-WORLD、遊技通信/P-WORLDは2024年1月の発表時点で3月中旬導入予定と報道。
- 2023-12-18導入の30Φ版 `ドラゴンハナハナ～閃光～-30` とは別市場機で、25Φ版として2024-03-18に導入されたものを本レコードのcanonical releaseDateとする。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本/P-WORLD、遊技通信/P-WORLD、P-BOMBが25Φ版の正式型式を `Sドラゴンハナハナ～閃光～DX` と明記。
- HAZUSEは同型式に検定番号 `3S1039` を紐付けている。
- パイオニア公式は25Φ版と30Φ版を同一製品サイト内で別筐体として掲載。
- 30Φ版は `Sドラゴンハナハナ～閃光～SP-30`、スマスロ版は `Lドラゴンハナハナ～閃光～JP` であり、型式が異なるため本25Φ版を独立レコード化する。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.0%
- setting2: 99.0%
- setting3: 101.0%
- setting4: 104.0%
- setting5: 107.0%
- setting6: 110.0%
initialHitBySetting:
- setting1: BIG 1/256 / REG 1/642 / total 1/183
- setting2: BIG 1/246 / REG 1/585 / total 1/173
- setting3: BIG 1/235 / REG 1/537 / total 1/163
- setting4: BIG 1/224 / REG 1/489 / total 1/153
- setting5: BIG 1/212 / REG 1/442 / total 1/143
- setting6: BIG 1/199 / REG 1/399 / total 1/133
baseGamesPer50: 約39.9G/50枚
netIncrease: N/A（ノーマルタイプ）
basicPayout:
- BIG: 最大252枚 / 20G
- REG: 最大96枚 / 10G（スイカこぼし時を除く）
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ハイビスカス点灯/点滅でボーナス当選を告知する完全告知ノーマルAタイプ。
- 天井非搭載。
- AT/CZ、ゲーム数天井、通常/天国モード、周期抽選は主要初当たり構造として非該当。
- 遊技日本は30Φ版と「ボーナス確率や出玉率などスペックは全く同じ」「ゲーム性も同様で、異なるのは使用するメダルの大きさのみ」と明記している。ただし本DBでは型式/筐体依存のresetBehaviorを無条件転記しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_DX_SPECIFIC_POWER_CARRYOVER_AND_GACKUN_NUMERIC_CONTRACT
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井/規定ゲーム数は非搭載のため、天井RESETは N/A。
- 25Φ専用解析で、設定変更専用の短縮天井・朝一AT/CZモード・周期優遇は確認されず N/A。
- シリーズ機種特化資料では朝一BIG後フェザーランプ色変化が設定変更/リセット示唆として扱われるが、25Φ型式 `DX` 単独の設定変更時発生率を直接固定できる高信頼資料は確認できない。30Φ版の実戦値72.73%（n=154）は本25Φレコードへ自動転記しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / CROSS_VARIANT_SUPPORT_FOR_EXISTENCE_OF_RESET_CUE / UNVERIFIED_AFTER_RESEARCH_FOR_DX_SPECIFIC_RATE

### carryOverBehavior
- 天井・AT/CZモード・規定周期が非搭載のため、それらの据え置き引継ぎは N/A。
- 30Φ版と性能・ゲーム性が同一であることは業界資料で明記されるが、25Φ型式 `DX` 固有の内部累計ゲーム数/BGM状態等の据え置き契約を直接明記する高信頼資料は検索語変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE_CYCLE / UNVERIFIED_AFTER_RESEARCH_FOR_DX_SPECIFIC_DISPLAY_AND_BGM_CARRYOVER

### powerCycleBehavior
- 電源OFF→ONのみで引き継ぐ天井・AT/CZモード・規定周期は N/A。
- 25Φ版 `Sドラゴンハナハナ～閃光～DX` について、純電源OFF→ON時のフェザー/BGM/リール初動/内部累計カウントを個別に固定する直接資料は、正式型式・メーカー・シリーズ名と「電源OFF ON / 据え置き / 朝一 / ガックン / BGM / フェザー」を組み合わせて再探索しても確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 30Φ版の純電断契約を型式差を無視して転記しない。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE_CYCLE / UNVERIFIED_AFTER_RESEARCH_FOR_DX_SPECIFIC_POWER_CYCLE

### gameCounterReset
- 天井用ゲーム数: N/A（天井非搭載）。
- 外部データカウンターは実機内部性能ではないため本DB対象外。
- 設定変更/純電断でのフェザー/BGM用内部累計カウントについて、25Φ版単独の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_AUXILIARY_INTERNAL_COUNTER

### ceilingAfterReset
- 天井非搭載。
- 設定変更専用の短縮天井なし / N/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZ型の通常モード・天国モード・朝一専用モードは非該当。
- 設定変更時モード振り分け数値: N/A。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### stateAfterReset
- AT/CZ用の通常/高確等、ホール経営・朝一客AIへ影響する設定変更専用内部状態は本機の初当たり構造では N/A。
- 朝一BIG後フェザーランプのリセット示唆は演出/判別状態として resetDetection に分離する。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### advantageousSectionReset
- 本機は25ΦメダルのノーマルAタイプ。朝一客行動へ影響するAT機型の有利区間天井/モード管理は本DBの比較粒度では N/A。
- 設定変更/据え置き/純電断別の規則内部のみを推測して埋めない。
confidence: NOT_APPLICABLE_AT_MISSION_GRANULARITY

### resetBenefits
- 天井短縮、朝一専用AT/CZモード、規定ゲーム数優遇は N/A。
- 朝一BIG後フェザーランプ色変化はシリーズ機種特化資料で設定変更示唆として扱われる。ただし25Φ版単独の固定発生率は未確認のため、朝一推測材料に留める。
confidence: ANALYSIS_SINGLE / CROSS_VARIANT_GAMEPLAY_EQUIVALENCE

### resetPenalties
- 設定変更時固有の主要な定量的不利要素は、表記揺れ・型式・メーカー・シリーズ名を変えた再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一初回BIG後フェザーランプ色変化は、同一ゲーム性のドラゴンハナハナ閃光系資料で設定変更/リセット示唆として扱われる。
- 25Φ型式 `DX` 固有のリールガックン有無・発生率、純電断時BGM継続条件、BET表示等は直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 30Φ版No.1614にあるガックン実戦報告・初回BIG後色変化72.73%実戦値は、型式差を尊重して本レコードのcanonical数値には採用しない。
- 天井非搭載のため宵越し天井挙動からの設定変更判別は N/A。
confidence: ANALYSIS_SINGLE_FOR_CROSS_VARIANT_RESET_CUE / UNVERIFIED_AFTER_RESEARCH_FOR_DX_SPECIFIC_GACKUN_POWER_DISPLAY

### numericResetData
- 設定変更時短縮天井: N/A
- 設定変更時モード振り分け: N/A
- 朝一特定ゲーム数以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / 専用固定値なし
- 設定変更専用CZ/AT数値: N/A
- 25Φ版初回BIG後フェザー色変化率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 25Φ版本機固有ガックン発生率: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 25Φ版専用の設定変更時当選率・天井短縮・モード振り分けは N/A。
- 30Φ版の設定変更確認台n=154によるフェザー色変化72.73%は参考比較として存在するが、本25Φ版専用値ではないためcanonical朝一数値へ転記しない。

## conflicts
- 性能コアについて有意なCONFLICTなし。25Φ/30Φはスペック・ゲーム性同一と複数業界資料が明記。
- resetBehaviorについて、30Φ版には単一実戦系の具体値がある一方、25Φ `DX` 単独の同値を直接実証する資料を固定できない。平均化・横流しせず別レコードのまま保持。

## missingFields
- 25Φ版設定変更時初回BIG後フェザー色変化率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 25Φ版本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 25Φ版の設定変更/据え置き/純電源OFF→ON別BGM契約: UNVERIFIED_AFTER_RESEARCH
- 25Φ版の純電源OFF→ON時ランプ/表示/内部累計カウント契約: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2024-03-18群のknown 4候補の4機目。
- No.1635 `スマート沖スロ ドラゴンハナハナ～閃光～` は `Lドラゴンハナハナ～閃光～JP` のスマスロ版。
- No.1614 `ドラゴンハナハナ～閃光～-30` は `Sドラゴンハナハナ～閃光～SP-30` の30Φメダル版で2023-12-18導入。
- 本機は `Sドラゴンハナハナ～閃光～DX` の25Φメダル版で2024-03-18導入。正式型式・メダル径・市場導入日が異なるため独立レコード。
- known 4候補完了。PB・別型式・地域先行・延期/段階導入を再監査し、追加候補を確認できなければ2024-03-18群CLOSEDとする。

## sources
取得日: 2026-09-14

### 公式 / 型式 / 導入 / 性能コア
- パイオニア公式製品サイト: https://www.slot-pioneer.co.jp/product/dragon_hanahana_senko/
- 遊技日本 / P-WORLD 25Φ版発売・型式: https://news.p-world.co.jp/articles/26504/nippon
- 遊技日本 / P-WORLD 25Φ版スペック・メダル径差: https://news.p-world.co.jp/articles/26520/nippon
- 遊技通信 / P-WORLD 25Φ版・型式: https://news.p-world.co.jp/articles/26517/yugitsushin
- P-BOMB 発表・型式: https://p-bomb.co.jp/industry/new-machine/8580/
- HAZUSE 型式/検定番号/導入日/基本スペック: https://hazuse.com/machine/pachislot/3S1039/
- HAZUSE 機種情報: https://hazuse.com/hd/3s1039/
- パチ7 25Φ専用ページ: https://pachiseven.jp/machines_v2/6899
- K-Navi: https://p-kn.com/slot/4086/
- パチマニア 25Φ/30Φ比較: https://ps-mania.jp/slot/s-dragon-hanahana-senko/

### resetBehavior再探索
- ぽこすろっと ドラゴンハナハナ閃光 設定変更判別整理: https://www.nankaikoya.jp/dragon-hanahana-senko/
- Bellagio 朝一BIG後フェザーランプ・リセット示唆: https://bellagio.hatenablog.com/entry/2023/12/13/150425
- 比較用既存No.1614 30Φ版: `docs/real_machine_db/machines/2023-12-18_dragon-hanahana-senko-30.md`

## recordStatus
- core: COMPLETE_CORE
- resetBehavior: COMPLETE_RESEARCHED_WITH_UNVERIFIED_DX_SPECIFIC_POWER_CARRYOVER_AND_GACKUN_NUMERIC_CONTRACT
- confidenceOverall: INDUSTRY + ANALYSIS_HIGH_FOR_CORE / ANALYSIS_SINGLE_AND_UNVERIFIED_AFTER_RESEARCH_FOR_DX_SPECIFIC_RESET_DETECTION
