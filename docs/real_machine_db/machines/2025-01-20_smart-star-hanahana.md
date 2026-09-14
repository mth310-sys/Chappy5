# スマート沖スロ スターハナハナ

recordNo: 1700
machineName: スマート沖スロ スターハナハナ
aliases: Lスターハナハナ / LスターハナハナMX / スマスロ スターハナハナ
manufacturer: パイオニア（ブランド/販売） / オニオン（製造元）
formalModel: LスターハナハナMX
inspectionCode: 4S1396
releaseDate: 2025-01-20
generation: 6号機 / スマスロ / ノーマル
systemType: ノーマル / Aタイプ / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RELEASE_DATE_CONFLICT

## releaseAndModelEvidence
- パイオニア公式2025年製品一覧で `スターハナハナ-30 / スマート沖スロ スターハナハナ`、2025年1月発売、製造元オニオンを確認。
- パイオニア公式更新履歴で **2025-01-20『スマート沖スロ スターハナハナ』導入開始**を確認し、本DBのcanonical導入日を2025-01-20とする。
- グリーンべるとの検定通過記事で型式 `LスターハナハナMX`（オニオン）を確認。
- HAZUSEで型式 `LスターハナハナMX`、検定番号 `4S1396`、導入開始日2025-01-20を確認。
- Pachibee・1gekiも2025-01-20導入で一致。
- K-Naviのみ2025-01-13とするため `CONFLICT_RELEASE_DATE_KNAVI_2025-01-13` として保持。旧handoffにあった1/27表記は今回、表記揺れ・完全一致検索を再実施して根拠資料を再固定できなかったためcanonicalへ採用しない。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / RELEASE_DATE_CONFLICT_MINOR_SINGLE_SOURCE

## corePerformance
payoutRateBySetting:
- setting1: 97%
- setting2: 99%
- setting3: 101%
- setting4: 104%
- setting5: 107%
- setting6: 110%
bonusBySetting:
- setting1: BIG 1/270 / REG 1/387 / 合算 1/159
- setting2: BIG 1/262 / REG 1/354 / 合算 1/150
- setting3: BIG 1/252 / REG 1/322 / 合算 1/141
- setting4: BIG 1/240 / REG 1/293 / 合算 1/132
- setting5: BIG 1/229 / REG 1/267 / 合算 1/123
- setting6: BIG 1/218 / REG 1/242 / 合算 1/114
initialHitBySetting: ボーナス合算 1/159 → 1/114
baseGamesPer50: 約39.9G/50枚
netIncrease: N/A（ノーマルタイプ）
basicPayout:
- BIG: 最大240枚
- REG: 最大96枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- AT/ART非搭載のスマスロ・ノーマルタイプ。
- 天井非搭載。
- 1〜100Gと101G以降で告知割合が変化。1〜100Gは当選ゲームのレバーON告知約85%、単独当選の次ゲーム告知約10%、チェリー同時当選の次ゲーム告知約5%。101G以降は約75% / 約20% / 約5%。
- 上記ゲーム数帯は天井・内部モードではなく告知タイミング仕様として分離する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_STRUCTURAL_NA_WITH_UNVERIFIED_MACHINE_SPECIFIC_RAM_AND_DETECTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井非搭載のノーマルタイプのため、ゲーム数天井・周期・CZ・AT通常モード等の設定変更リセット恩恵は構造上N/A。
- 設定変更後は変更後設定のボーナス確率で通常抽選を行う性能物差しとして扱う。
- 設定変更前のボーナス成立状態、告知用1〜100G/101G以降カウント、BGM変化条件等の本機固有RAM挙動は公式・業界・主要解析・旧DB系を再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_MACHINE_SPECIFIC_RAM_DETAILS

### carryOverBehavior
- 天井・周期・CZ/ATモード・ポイントは非搭載のため、それらのCARRY_OVER対象はN/A。
- 据え置き時のボーナス成立状態、告知ゲーム数カウント、BGM条件などの細部は `UNVERIFIED_AFTER_RESEARCH`。
confidence: STRUCTURAL_NA + UNVERIFIED_FOR_INTERNAL_RAM_DETAILS

### powerCycleBehavior
- 必勝本の機種別「設定変更・電源OFF/ON」比較では、BGM変化条件・リールガックンの双方が設定変更側/電源OFF→ON側とも「現在調査中」。
- 天井・CZ/ATモード等は本機のゲーム性上N/A。
- ボーナス成立状態、告知用ゲーム数カウントが純電断でどう扱われるかは `スマート沖スロ スターハナハナ / LスターハナハナMX / 電源OFF ON / 電断 / 据え置き / 朝一 / 100G / BGM / ガックン` 等へ検索語を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIRECT_BGM_GAKKUN_TABLE / UNVERIFIED_FOR_OTHER_POWER_RAM

### gameCounterReset
- 天井ゲーム数: N/A（天井非搭載）。
- データ表示器の朝一表示はホール設備側要素を含むため本機内部契約から除外。
- 告知タイミングに関係する1〜100G/101G以降カウントの設定変更/純電断時初期化ルールは `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_ANNOUNCEMENT_COUNTER

### ceilingAfterReset
normalCeiling: N/A
resetCeiling: N/A
resetCeilingShortening: NONE_NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 天国・通常A/B・周期などの内部モードは非搭載のためN/A。
- 1〜100G/101G以降の告知割合変化はモードとして扱わない。
confidence: STRUCTURAL_NA

### stateAfterReset
- 朝一狙いへ影響する公開された高確/低確などの内部状態は確認されずN/A扱い。
- ボーナス成立状態の設定変更/純電断契約のみ `UNVERIFIED_AFTER_RESEARCH`。
confidence: STRUCTURAL_NA_FOR_PUBLIC_STATE / UNVERIFIED_FOR_BONUS_ESTABLISHED_STATE

### advantageousSectionReset
- ノーマルタイプで、朝一客AIに必要な有利区間天井・モード・差枚管理によるリセット恩恵はN/Aとして扱う。
- 本機固有の有利区間を利用した朝一恩恵は確認されない。
confidence: STRUCTURAL_NA_FOR_YARDSTICK_PURPOSE

### resetBenefits
- 天井短縮、朝一モード優遇、CZ優遇: `NONE_NOT_APPLICABLE`。
- 設定変更専用の公開朝一当選率・恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / STRUCTURAL_NA

### resetPenalties
- 設定変更で失われる天井進行・通常モード・周期ポイント等は存在しないためN/A。
- その他の設定変更固有の公開不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: STRUCTURAL_NA

### resetDetection
- 必勝本の本機固有ページでは、BGM変化条件・リールガックンは設定変更/電源OFF→ONとも「現在調査中」。
- 主要解析も朝一の確実な設定変更判別を調査中としている。
- 本機固有ガックン条件・発生率、BGMによる確定変更判別、ランプ等の確定判別は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため、天井到達ゲーム数による設定変更/据え置き判別は不可。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_DETECTION / ANALYSIS_HIGH_FOR_NO_CEILING_DETECTION

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
- 設定変更専用の短縮天井・モード振り分け・CZ/AT優遇値: N/A / NONE_CONFIRMED_AFTER_RESEARCH。
- 通常性能のボーナス合算1/159〜1/114は朝一専用値ではない。

## conflicts
- `CONFLICT_RELEASE_DATE`: パイオニア公式更新履歴・HAZUSE・Pachibee・1gekiは2025-01-20で一致。K-Naviのみ2025-01-13。平均化せず双方を保持し、メーカー公式導入開始日2025-01-20をcanonicalとする。
- 旧handoffの「1/27表記」は今回の再探索で具体的な根拠ページを再固定できず、`UNVERIFIED_OLD_BOUNDARY_NOTE_2025-01-27` としてのみ残す。

## missingFields
- 設定変更/純電断時のボーナス成立状態: UNVERIFIED_AFTER_RESEARCH
- 告知用1〜100G/101G以降カウントの設定変更/純電断契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有リールガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- BGMを使った本機固有の変更判別: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL_PRODUCTS_2025: https://www.slot-pioneer.co.jp/products/2025.html
- OFFICIAL_RELEASE_HISTORY: https://www.slot-pioneer.co.jp/news.html
- OFFICIAL_PRODUCT_SITE: https://www.slot-pioneer.co.jp/product/star_hanahana/
- OFFICIAL_RELEASE_NOTICE: https://www.slot-pioneer.co.jp/information/l_star_hanahana.html
- INDUSTRY_ANNOUNCEMENT: https://web-greenbelt.jp/post-90622/
- INDUSTRY_INSPECTION: https://news.p-world.co.jp/articles/29441/greenbelt
- ANALYSIS_HIGH_MODEL: https://hazuse.com/machine/pachislot/4S1396/
- ANALYSIS_HIGH_CORE_RESET: https://hisshobon.com/machines/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E6%B2%96%E3%82%B9%E3%83%AD-%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A/
- ANALYSIS_HIGH_RESET_DIRECT: https://hisshobon.com/machineinfo/85877/
- ANALYSIS_HIGH_CORE: https://www.pachibee.jp/machines/about/224120007
- ANALYSIS_HIGH_CORE: https://1geki.jp/slot/l_starhnhn30/
- ANALYSIS_SECONDARY_CORE_RESET: https://www.kaku6.jp/slot/starhanahana30/
- CONFLICT_RELEASE_DATE: https://p-kn.com/slot/4250/
