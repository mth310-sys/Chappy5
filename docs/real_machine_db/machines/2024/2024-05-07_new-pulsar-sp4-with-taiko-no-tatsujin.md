# ニューパルサーSP4 with 太鼓の達人

recordNo: 1650
machineName: ニューパルサーSP4 with 太鼓の達人
aliases: ニューパルサーSP4 / ニューパルSP4 / SニューパルサーSP4SLE8
manufacturer: セブンリーグ製造 / 山佐ネクスト販売
formalModel: SニューパルサーSP4SLE8
inspectionCode: 330606
releaseDate: 2024-05-07
generation: 6.5号機 / メダル機
systemType: ノーマル / ボーナス主体
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチビー、必勝本、一撃、HAZUSE等で2024-05-07導入が一致。
- 山佐ネクスト発表の業界記事は2024年5月上旬導入予定と報道。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_DATE_MATCH

## modelEvidence
- 遊技日本の販売発表で型式名 `SニューパルサーSP4SLE8`、製造元セブンリーグを確認。
- HAZUSEで同型式と検定番号 `330606` を確認。
confidence: INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.8%
- setting3: 99.9%
- setting4: 102.5%
- setting5: 105.0%
- setting6: 108.3%
initialHitBySetting:
- setting1: BIG 1/287.4 / REG 1/344.9 / 合算1/156.8
- setting2: BIG 1/280.1 / REG 1/336.1 / 合算1/152.8
- setting3: BIG 1/273.1 / REG 1/327.7 / 合算1/148.9
- setting4: BIG 1/260.1 / REG 1/312.1 / 合算1/141.9
- setting5: BIG 1/248.2 / REG 1/297.9 / 合算1/135.4
- setting6: BIG 1/237.4 / REG 1/284.9 / 合算1/129.5
baseGamesPer50: 約38G/50枚（設定1ベース。複数解析一致）
netIncrease: N/A（ノーマルタイプ）
basicPayout:
- BIG: 280枚固定
- REG: 98枚固定
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ボーナスのみで出玉を増やすノーマルタイプ。
- 技術介入による枚数調整は不要で、BIG280枚・REG98枚固定。
- 通常時演出はノーマル / ドット / ウィッチ / お祭りの4モードから選択可能。これは演出選択でありAT等の内部モードではない。
- 天井機能は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_NA_AND_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 本機は純粋なノーマルタイプで、AT/CZ・規定ゲーム数・天井・朝一専用ATモード等を持たないため、それらのリセット契約はN/A。
- 設定変更時の本機固有リール挙動や演出設定初期化等について、客側の朝一立ち回りへ影響する高信頼公開契約は確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SYSTEM_NA / UNVERIFIED_FOR_MACHINE_SPECIFIC_COSMETIC_RESET

### carryOverBehavior
- 天井・規定ゲーム数・AT/CZ内部モードは非搭載のためCARRY_OVER対象なし。
- ボーナス成立状態をまたぐ特殊な据え置き挙動や、本機固有の朝一恩恵/不利は公開資料で確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NA / UNVERIFIED_FOR_SPECIAL_CASES

### powerCycleBehavior
- 通常営業上の純電源OFF→ONで引き継ぐべき天井・ATモード・有利区間進行はN/A。
- 本機固有の演出モード/カスタマイズ保持・ボーナス成立時電断等の詳細契約は、物差し目的では必須外かつ高信頼公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NA / UNVERIFIED_FOR_UI_STATE

### gameCounterReset
- 天井ゲーム数・規定周期なし。N/A。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 天井非搭載。設定変更による短縮・変更なし。N/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZ用の内部モードは非搭載。N/A。
- 4つの「モード」は演出選択であり、朝一内部モードとして扱わない。
confidence: ANALYSIS_HIGH

### stateAfterReset
- AT/CZの通常・高確等の内部状態管理は収集対象となる形では非搭載。N/A。
confidence: ANALYSIS_HIGH_FOR_SYSTEM_STRUCTURE

### advantageousSectionReset
- 本機はノーマルタイプで、本DBの朝一客AIに必要な有利区間進行・有利区間天井・有利区間リセット恩恵は非該当として扱う。
confidence: ANALYSIS_HIGH_FOR_SYSTEM_NA

### resetBenefits
- 設定変更による天井短縮、モード優遇、CZ優遇等の朝一恩恵は非搭載/確認なし。
- 高信頼資料で本機固有の朝一優遇値は確認できず `NO_PUBLIC_RESET_BENEFIT_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更で失う天井進行・ATモード等は非搭載。
- 客の朝一立ち回りへ影響する本機固有の不利要素は確認できず `NO_PUBLIC_RESET_PENALTY_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 本機固有の設定変更時リールガックン条件・発生率は、機種名/型式/セブンリーグ/山佐ネクストと「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス終了画面やケロットトロフィーは設定示唆であり、設定変更/据え置き判別とは別物なのでリセット判別値へ流用しない。
confidence: UNVERIFIED_FOR_GAKKUN / ANALYSIS_HIGH_FOR_SEPARATION_FROM_SETTING_HINTS

### numericResetData
- 天井短縮: N/A
- 朝一モード振り分け: N/A
- 朝一CZ/AT優遇率: N/A
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- 朝一専用の公開数値は `NO_PUBLIC_MORNING_NUMERIC_BENEFIT_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- generation表記は資料に「6号機」「6.5号機」が混在するが、本DBでは2024年メダル機の世代整理として6.5号機 / メダル機を採用。ゲーム性は一貫してノーマルタイプ。
- 必勝本では50枚平均ゲーム数を「調査中」とする一方、パチマガスロマガ・一撃等は設定1約38Gを掲載。約38GをANALYSIS_HIGH相当の複数一致としてcanonical採用。

## missingFields
- 本機固有の設定変更時リールガックン条件/発生率
- 純電断時の演出モード/カスタマイズ保持仕様（物差し必須外）

## sources
取得日: 2026-09-14

### official / industry
- 山佐ネクスト機種発表（遊技日本/P-WORLD）: https://news.p-world.co.jp/articles/27022/nippon
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/27085/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004153/
- 型式販売発表（遊技日本/P-WORLD）: https://news.p-world.co.jp/articles/27181/nippon
- 検定通過（遊技日本/P-WORLD）: https://news.p-world.co.jp/articles/27279/nippon

### machine DB / analysis
- HAZUSE: https://hazuse.com/machine/pachislot/SX0071/
- P-WORLD: https://www.p-world.co.jp/machine/database/10019
- パチビー: https://www.pachibee.jp/machines/about/224040002
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2612/2
- パチマガスロマガ 通常時小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/06/tj02.php
- 一撃: https://1geki.jp/slot/s_newpulsar_with_tt/
- パチセブン: https://pachiseven.jp/machines/6925/cutout/8

## researchNotes
- 「ニューパルサーSP4 with 太鼓の達人」「ニューパルSP4」「SニューパルサーSP4SLE8」「セブンリーグ」「山佐ネクスト」を使い分けて検索。
- resetBehavior欠損は「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」を組み替え、主要解析・旧DB・型式検索まで横断。
- 旧作ニューパルサーSP3等のガックン・朝一情報は本機固有確認なしに流用していない。
- 設定示唆（終了画面・トロフィー）は変更判別ではないためresetDetectionへ混入していない。
