# スターハナハナ-30

recordNo: 1699
machineName: スターハナハナ-30
aliases: スターハナハナ‐30 / Sスターハナハナ / SスターハナハナMX-30
manufacturer: パイオニア（ブランド/販売） / オニオン（製造元）
formalModel: SスターハナハナMX-30
inspectionCode: 4S0585
releaseDate: 2025-01-06
generation: 6号機 / 30Φメダル機
systemType: ノーマル / Aタイプ / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_CONFLICT_SOURCE_NOTE

## releaseAndModelEvidence
- パイオニア公式2025年製品一覧で「スターハナハナ-30 / スマート沖スロ スターハナハナ」、2025年1月発売、製造元=株式会社オニオンを確認。
- パイオニア公式更新履歴で2025-01-06「スターハナハナ-30 導入開始」を確認。
- HAZUSEで型式 `SスターハナハナMX-30`、検定番号 `4S0585`、導入開始日2025-01-06を確認。
- 本レコードは30Φメダル機。別筐体の「スマート沖スロ スターハナハナ」は別導入日として独立境界監査対象にする。
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97%
- setting2: 99%
- setting3: 101%
- setting4: 104%
- setting5: 107%
- setting6: 110%
bonusBySetting:
- setting1: BIG 1/270 / REG 1/387 / 合算1/159
- setting2: BIG 1/262 / REG 1/354 / 合算1/150
- setting3: BIG 1/252 / REG 1/322 / 合算1/141
- setting4: BIG 1/240 / REG 1/293 / 合算1/132
- setting5: BIG 1/229 / REG 1/267 / 合算1/123
- setting6: BIG 1/218 / REG 1/242 / 合算1/114
initialHitBySetting: ボーナス合算 1/159 → 1/114
baseGamesPer50: 約39.9G/50枚
netIncrease: N/A（ノーマルタイプ）
basicPayout:
- BIG: 最大240枚
- REG: 最大96枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- AT/ART非搭載の完全告知ノーマルタイプ。
- 天井非搭載。
- 1〜100Gと101G以降でボーナス告知タイミング比率が変化。1〜100Gは当選ゲームのレバーON告知約85%、単独当選の次ゲーム告知約10%、チェリー同時当選の次ゲーム告知約5%。101G以降は約75% / 約20% / 約5%。
- このゲーム数依存は「天井/モード」ではなく告知タイミング仕様として分離し、朝一設定変更時の内部カウント初期化ルールは公開資料で固定できないため推測しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_STRUCTURAL_NA_WITH_UNVERIFIED_MACHINE_SPECIFIC_RESET_DETECTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井非搭載のノーマルタイプのため、AT/ART機のような天井ゲーム数・周期・CZ・通常モードのリセット恩恵は構造上N/A。
- 設定変更後は変更後設定のボーナス確率で通常抽選を行うものとして性能物差し上扱うが、設定変更前にボーナス成立済みだった場合の成立状態、告知用1〜100G/101G以降カウント、BGM条件等の本機固有RAM挙動は公開固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_AND_NORMAL_STRUCTURE / UNVERIFIED_FOR_MACHINE_SPECIFIC_RAM_DETAILS

### carryOverBehavior
- 天井・AT/CZモード・周期・ポイントは非搭載のためCARRY_OVER対象自体がN/A。
- 据え置き時のボーナス成立状態、告知用ゲーム数カウント、BGM条件などの細部は機種別資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: STRUCTURAL_NA + UNVERIFIED_FOR_INTERNAL_RAM_DETAILS

### powerCycleBehavior
- 純電源OFF→ONについて、必勝本の機種別比較でBGM変化条件・リールガックンはいずれも「現在調査中」。
- 天井/モード/有利区間の性能コア項目は本機のゲーム性上N/A。
- ボーナス成立状態および告知用ゲーム数カウントが純電断でどう扱われるかは、`スターハナハナ-30 / SスターハナハナMX-30 / パイオニア / オニオン / 電源OFF ON / 電断 / 据え置き / 朝一 / 100G / 告知割合` へ検索語を変更し、公式・業界・攻略/解析・旧DBを横断後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: STRUCTURAL_NA_FOR_CEILING_MODE / UNVERIFIED_FOR_MACHINE_SPECIFIC_POWER_RAM

### gameCounterReset
- 天井ゲーム数: N/A（天井非搭載）。
- ボーナス履歴/データ表示器の朝一表示はホール設備側要素を含むため本機内部契約と混同せず対象外。
- 告知タイミングに関係する1〜100G/101G以降の内部カウントが設定変更/純電断でどう初期化されるかは `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_ANNOUNCEMENT_COUNTER

### ceilingAfterReset
normalCeiling: N/A
resetCeiling: N/A
resetCeilingShortening: NONE_NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZ機の通常モード、天国モード、周期モード等は非搭載のためN/A。
- 告知タイミングのゲーム数帯はモードとして扱わない。
confidence: STRUCTURAL_NA

### stateAfterReset
- 朝一狙いへ影響する公開された高確/低確等の内部状態は確認されずN/A扱い。
- ボーナス成立状態の設定変更/純電断挙動のみは `UNVERIFIED_AFTER_RESEARCH`。
confidence: STRUCTURAL_NA_FOR_PUBLIC_STATE / UNVERIFIED_FOR_BONUS_ESTABLISHED_STATE

### advantageousSectionReset
- 本機はAT/ART非搭載のノーマルタイプで、朝一客AIへ必要な「有利区間リセット恩恵/据え置き狙い」の公開契約はN/Aとして扱う。
- 有利区間を用いた天井・モード・差枚管理は確認されない。
confidence: STRUCTURAL_NA

### resetBenefits
- 設定変更による天井短縮、モード優遇、CZ優遇等は `NONE_NOT_APPLICABLE`。
- 設定変更固有の公開朝一数値は十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / STRUCTURAL_NA

### resetPenalties
- 設定変更により失われる天井進行・モード・ポイント等は存在しないためN/A。
- その他の設定変更固有の公開不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: STRUCTURAL_NA

### resetDetection
- 必勝本の本機固有ページでリールガックンは設定変更/電源OFF ONとも「現在調査中」。
- 別解析もランプ・液晶による確実なリセット判別方法を「現在調査中」としている。
- 本機固有ガックン条件・発生率、BGMによる確定変更判別は検索語・資料系統を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため、ゲーム数到達によるリセット/据え置き判別は不可。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN_BGM / ANALYSIS_HIGH_FOR_NO_CEILING_DETECTION

### numericResetData
normalCeiling: N/A
resetCeiling: N/A
resetModeDistribution: N/A
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH
bgmResetDetection: UNVERIFIED_AFTER_RESEARCH
announcementCounterResetRule: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更専用の天井・モード・恩恵数値: N/A / NONE_CONFIRMED_AFTER_RESEARCH。
- 通常性能の参考としてボーナス合算は設定1〜6で1/159〜1/114だが、これは朝一専用値ではない。

## conflicts
- 主流の業界・必勝本・パチビー・パチマガスロマガ・HAZUSE系は機械割 `97 / 99 / 101 / 104 / 107 / 110%` で一致。
- ニコナナ公式動画説明欄の独自調査表のみ `97.6 / 98.9 / 100.7 / 105.1 / 110.4 / 114.9%` と大幅に異なる。ボーナス確率は同じで、他の主要資料群と不一致のため平均化せず `CONFLICT_PAYOUT_VIDEO_DESCRIPTION_OUTLIER_LIKELY_SOURCE_ERROR` として隔離。yardstick canonicalは多数一致の97〜110%系列。

## missingFields
- 設定変更/純電断時のボーナス成立状態: UNVERIFIED_AFTER_RESEARCH
- 告知用1〜100G/101G以降カウントの設定変更/純電断契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有リールガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- BGMを使った本機固有の変更判別: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL_PRODUCTS_2025: https://www.slot-pioneer.co.jp/products/2025.html
- OFFICIAL_RELEASE_HISTORY: https://www.slot-pioneer.co.jp/news.html
- INDUSTRY_PRODUCT: https://news.p-world.co.jp/articles/29196/greenbelt
- ANALYSIS_HIGH_MODEL: https://hazuse.com/hd/4s0585/
- ANALYSIS_HIGH_CORE: https://hisshobon.com/machineinfo/85220/
- ANALYSIS_HIGH_RESET: https://p.hisshobon.jp/vpage/2661/2
- ANALYSIS_HIGH_CORE: https://www.pachibee.jp/machines/index/224120002
- ANALYSIS_HIGH_CEILING: https://pachiseven.jp/machines/7052/cutout/3
- ANALYSIS_HIGH_CORE: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/148/kh01.php
- ANALYSIS_SECONDARY_RESET_RESEARCH: https://www.kaku6.jp/slot/starhnhn30/
- ANALYSIS_SECONDARY_MODEL_MANUFACTURER: https://www.nakaiti.com/html/sOnion001.html
- CONFLICT_VIDEO_DESCRIPTION: https://www.youtube.com/watch?v=YYxb7zL0Ta4
- BOUNDARY_SMART_VARIANT: https://www.all7.jp/plans/index/2025/01
