# トリプルクラウンフォーユー

recordNo: 1680
machineName: トリプルクラウンフォーユー
aliases: トリプルクラウンForyou-30 / TRIPLE CROWN For You / Sトリプルクラウン-TRIPLE CROWN- For You
manufacturer: 清龍ゲームジャパン
formalModel: SトリプルクラウンX2-30
inspectionCode: 4S0038
releaseDate: 2024-10-07
releaseRegionNote: 沖縄県での導入開始日として確認。全国一斉導入とは扱わず、地域先行/地域流通の実在機としてcanonical採番。
generation: 6号機 / メダル機 / 30Φ
systemType: ノーマル / 完全告知 / ボーナス主体
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: PARTIAL_CORE_BASE_UNVERIFIED

## releaseAndModelEvidence
- 遊技日本は清龍ゲームジャパンの新台 `トリプルクラウンForyou-30`、型式 `SトリプルクラウンX2-30` の販売発表を2024-10-04付で報道。
- 遊技日本/P-WORLD転載の検定通過情報で、沖縄県公安委員会ほかにおける `SトリプルクラウンX2-30`（清龍ゲームジャパン）の検定通過を確認。
- HAZUSEは型式 `SトリプルクラウンX2-30`、検定番号 `4S0038`、導入開始日 `2024-10-07`、メーカー清龍ゲームジャパンを掲載。
- パチビーも導入日 `2024-10-07` を掲載。
- パチマガスロマガおよびぱちんこキュレーションは `2024-10-07（沖縄県）` と地域を明記。したがって本DBでは、全国一斉導入と推定せず「沖縄県で確認できる地域導入日」をreleaseDateとする。
- 本DBは期間内の全パチスロ機種を対象とし全国一斉導入を条件としていないため、地域先行/地域流通機も独立canonical対象と判断。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_MODEL_AND_DATE / REGION_QUALIFIED

## corePerformance
payoutRateBySetting:
- setting1: 96.84%
- setting2: 98.82%
- setting3: 100.46%
- setting4: 103.10%
- setting5: 105.50%
- setting6: 108.02%
initialHitBySetting:
- setting1: BIG 1/287.44 / REG 1/496.48 / 合算 1/182.04
- setting2: BIG 1/273.07 / REG 1/474.90 / 合算 1/173.38
- setting3: BIG 1/262.14 / REG 1/458.29 / 合算 1/166.76
- setting4: BIG 1/252.06 / REG 1/392.43 / 合算 1/153.48
- setting5: BIG 1/242.73 / REG 1/358.12 / 合算 1/144.67
- setting6: BIG 1/238.31 / REG 1/309.13 / 合算 1/134.57
baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
netIncrease: NOT_APPLICABLE_NORMAL_TYPE
basicPayout:
- BIG BONUS: 最大252枚（285枚超の払出しで終了）
- BONUS GAME / REG: 最大98枚（103枚超の払出しで終了）
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 30Φの完全告知ノーマルタイプ。バットランプ点灯でボーナス確定。
- BIG/REGともボーナス中に一度だけ逆押しすることで最大枚数獲得可能。
- 天井機能は非搭載。
- 朝一専用モード、CZ、AT、規定ゲーム数モードは主要資料上確認されず、本機のゲーム性比較には非該当。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_INTERNALS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井非搭載のノーマルタイプで、設定変更時に短縮/再抽選対象となるゲーム数天井・CZ・AT・規定G数モードは `NOT_APPLICABLE`。
- 設定変更時のみの朝一専用モード、高確、ボーナス当選率優遇等は、機種名・型式・メーカー名と「設定変更/リセット/朝一」を組み合わせ、業界・解析・旧DB系を再探索しても確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更操作そのものに伴う機種固有の内部フラグ/状態処理を直接説明する公開資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的なノーマル機仕様から補完しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_MACHINE_SPECIFIC_INTERNAL_RESET

### carryOverBehavior
- 据え置きで引継ぎ対象となる天井ゲーム数・CZスルー回数・ATモード等は、本機の公開ゲーム性上 `NOT_APPLICABLE`。
- 据え置き時の機種固有内部フラグ/状態に関する直接資料は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_PUBLIC_COUNTER_MODE / UNVERIFIED_FOR_MACHINE_SPECIFIC_INTERNALS

### powerCycleBehavior
- 電源OFF→ONのみの場合に引継ぎ差が問題となる天井ゲーム数・CZ/ATモードは公開ゲーム性上 `NOT_APPLICABLE`。
- 純電源OFF→ON時の機種固有内部フラグ、表示状態、リール挙動を直接記載する資料は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_PUBLIC_COUNTER_MODE / UNVERIFIED_FOR_MACHINE_SPECIFIC_POWER_CYCLE

### gameCounterReset
- 天井機能非搭載のため、天井進行ゲーム数のRESET/CARRY_OVERは `NOT_APPLICABLE`。
- 液晶規定ゲーム数による朝一狙いも本機では確認されない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: NOT_APPLICABLE / 天井非搭載
resetGameCeiling: NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用モード、規定G数モード、天国モード等の公開システムは確認されず `NOT_APPLICABLE_FOR_PUBLIC_GAMEPLAY_MODE`。
- 設定変更専用のモード振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAME_TYPE / NO_PUBLIC_RESET_MODE_FOUND

### stateAfterReset
- AT/CZ高確などの朝一比較対象となる公開内部状態は確認されない。
- 設定変更/据え置き/純電断で差が出る本機固有の内部状態契約は、十分な再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED_FOR_MACHINE_SPECIFIC_INTERNAL_STATE

### advantageousSectionReset
- 本機固有の有利区間について、設定変更・据え置き・純電源OFF→ONを直接比較する公開資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ノーマルタイプであることのみから有利区間処理を推定していない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 天井短縮、朝一高確、朝一専用モード、CZ優遇、ボーナス確率優遇など、設定変更時の出玉上の主要恩恵は十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_BENEFIT_FOUND

### resetPenalties
- 設定変更時に限定された主要な不利要素は十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NO_PUBLIC_RESET_PENALTY_FOUND

### resetDetection
- 天井/規定ゲーム数がないため、朝一ゲーム数挙動による変更判別は `NOT_APPLICABLE`。
- 本機固有のリールガックン条件・発生率、ランプ/表示による設定変更判別、電断との識別条件は、`トリプルクラウンフォーユー` / `トリプルクラウンForyou-30` / `SトリプルクラウンX2-30` と「設定変更/据え置き/電源OFF ON/ガックン/リセット/朝一」を組み合わせて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_DETECTION

### numericResetData
normalGameCeiling: NONE
afterResetCeiling: NONE
resetModeDistribution: NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND
morningHitRateAdvantage: NONE_CONFIRMED_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH
confidence: NO_PUBLIC_RESET_NUMERICS_FOUND

### publicMorningNumbers
- 公開固定の朝一短縮天井: なし（通常時から天井非搭載）。
- 設定変更専用モード振り分け: 公開値確認できず。
- 朝一特定G以内当選率/期待度: 公開値確認できず。
- 設定変更恩恵発生率: 公開値確認できず。

## conflicts
- パチビーは機械割を小数1桁へ丸めて `96.8 / 98.8 / 100.4 / 103.1 / 105.5 / 108.0%` と掲載する一方、遊技日本・Ativo等は `96.84 / 98.82 / 100.46 / 103.10 / 105.50 / 108.02%`。定義差ではなく表示精度差と判断し、精密値をcanonicalとした。
- `けんのスロットシミュレーション` の「トリプルクラウンフォーユー 解析情報」ページは、ページタイトルこそ本機だが、公表値96.60〜107.00%、BIG 1/296.54〜1/252.06、REG 1/489.07〜1/327.68、設定1約43.5G/50枚を掲載し、複数の本機資料と大幅に不一致。これらは同サイトが参照に掲げる旧シリーズ値と整合する可能性があり、`CONFLICT_SOURCE_CONTENT_MISMATCH` として保持し、本機baseの根拠には採用しない。
- 導入日はHAZUSE/パチビーが単に2024-10-07、パチマガスロマガ/ぱちんこキュレーションが `2024-10-07（沖縄県）` と記載。日付自体は一致するため数値CONFLICTではなく `REGION_QUALIFIER` として保持。

## missingFields
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH（本機に明確に紐づく信頼できる公開値を固定できず。43.5G/50枚は内容不一致ページのため不採用）
- 設定変更/据え置き/純電断時の機種固有内部状態・有利区間契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率・表示判別: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sourceSummary
retrievedAt: 2026-09-14
confidenceOverall: HIGH_FOR_IDENTITY_AND_CORE_EXCEPT_BASE / LIMITED_FOR_RESET_MACHINE_SPECIFIC_INTERNALS
sources:
- 遊技日本 新機種発表: https://yugi-nippon.com/pachinko-new-machine/post-67199/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-65016/
- P-WORLD/遊技日本 検定通過転載: https://news.p-world.co.jp/articles/27932/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/4S0038/
- HAZUSE詳細: https://hazuse.com/hd/4s0038/
- パチビー: https://www.pachibee.jp/machines/index/224090005
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/09/kh01.php
- ぱちんこキュレーション: https://pachinko-curation.com/50856/
- Ativo: https://ativo.jp/2024/10/01/%E3%83%88%E3%83%AA%E3%83%97%E3%83%AB%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A6%E3%83%BC/
- けんのスロットシミュレーション（内容不一致CONFLICT参照のみ）: https://kenslo65536.com/kaiseki/triplecrown-foryou.html
- グリーンべると/P-WORLD 2024-10-07新台スケジュール: https://news.p-world.co.jp/articles/29118/greenbelt

## researchNotes
- 表記揺れとして `トリプルクラウンフォーユー` / `トリプルクラウンForyou-30` / `TRIPLE CROWN For You` / `SトリプルクラウンX2-30` / `4S0038` を使用。
- 性能値は `機械割/出玉率/BIG/REG/合算/50枚/ベース/回転数/天井` を組み合わせ、遊技日本、P-WORLD、HAZUSE、パチビー、パチマガスロマガ、ぱちんこキュレーション、Ativo、解析DBを横断。
- resetBehaviorは `設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間/天井` を表記揺れごとに再探索。確認できない機種固有内部契約のみUNVERIFIEDとした。
- 地域先行機を除外する正本ルールはなく、全機種収集方針と実在/型式/導入日が複数系統資料で確認できるためNo.1680として採番した。