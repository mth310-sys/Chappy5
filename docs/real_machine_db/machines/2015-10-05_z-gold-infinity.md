# Zゴールド・インフィニティ

machineName: Zゴールド・インフィニティ
manufacturer: NET（ネット）
releaseDate: 2015-10-05
releaseDatePrecision: exact_hall_start_day_multi_source_with_2015-09-28_conflict
generation: 5号機
systemType: AT / 差枚数管理型・周期/確率変動型抽選
formalModelName: ゼットゴールドインフィニティNC
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- NETの5号機AT機。
- P-WORLD、ちょんぼりすた、すろぱちくえすと等でNET製・AT機として確認。
- 中古実機流通資料では型式名 **ゼットゴールドインフィニティNC** を確認したが、検定番号は今回の再探索でも安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 導入日は、ちょんぼりすた・すろぱちくえすと・当時新台情報では **2015-10-05** を実導入開始として扱う資料が複数ある一方、イチカツ等に **2015-09-28全国導入開始予定**、別解析にも09/28表記が存在する。予定/地域先行/実導入工程差の可能性があるため、canonicalを2015-10-05とし競合を保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_2015-10-05 / CONFLICT_FOR_2015-09-28_VS_10-05 / ANALYSIS_SINGLE_FOR_FORMAL_MODEL

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.7% |
| 3 | 100.6% |
| 4 | 102.9% |
| 5 | 106.6% |
| 6 | 111.5% |
- すろぱちくえすと、ちょんぼりすた、イチカツ、当時解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/491 |
| 2 | 1/470 |
| 3 | 1/450 |
| 4 | 1/424 |
| 5 | 1/393 |
| 6 | 1/350 |
- 複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約45.4G/50枚**。
- すろぱちくえすとで約45.4G/50枚。
- 別当時解析に **45.7G/1000円** 表記があり、丸め/算出差の範囲として保持。平均化しない。
- confidence: ANALYSIS_HIGH_FOR_45.4 / ANALYSIS_SINGLE_FOR_45.7

## netIncrease
- AT「Z-RUSH」: **約3.0枚/G**。
- P-WORLD、すろぱちくえすと、中古実機DB等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- AT「Z-RUSH」: **初期100枚以上**の差枚数管理型。
- 奇数図柄揃い等から「ハンドレッドアタック」。
- Z図柄揃いは **500枚保証 + 100枚上乗せの90%ループ** とする複数資料あり。
- ハンドレッドアタックの90%ループ時平均上乗せを約1400枚とする解析あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_BASIC_AT / ANALYSIS_HIGH_FOR_Z_SYMBOL_BENEFIT

## modeSpecificMinimumData
- 通常時は平均約57Gの周期を中心に、1周期 **10〜99G** の区間を用いる「新確率変動型抽選システム」。
- 天井: **30周期到達でAT確定**。
- G数換算は **約1700G** とする複数解析あり。ただし周期G数が10〜99Gで変動するため、固定1700G天井としては扱わない。
- 通常ステージはZシティ昼 / Zシティ夕 / スカイロックゲート / 制御コア。制御コアは高期待状態。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_MAJOR_UNVERIFIED_RESET_FIELDS
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機固有の設定変更時について、「周期カウントをRESETする」「モード/状態を再抽選する」と直接明記した十分な一次/当時解析資料を、機種名表記揺れ・型式名・メーカー名・朝一/設定変更/リセット/周期/モード/天井/ガックン等へ検索語を変更し再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機AT機やNET他機種からの推測は行わない。

### carryOverBehavior
- 設定据え置き時に30周期天井進捗・周期内部状態・ステージ/モードをどう持ち越すか、本機固有の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 純粋な電源OFF→ONのみの場合の30周期天井進捗、周期位置、内部状態、液晶表示の扱いを直接説明する本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 設定変更: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 通常天井条件そのものは30周期。

### ceilingAfterReset
- 通常天井: **30周期到達でAT**。
- 設定変更専用の短縮天井・短縮周期数: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 「設定変更後も30周期」または「短縮」のいずれかを本機固有資料で直接固定できていないため、通常天井をそのままリセット後契約へ自動転記しない。

### modeAfterReset
- 通常時に周期ごとのAT当選確率が変動するシステムは確認。
- ただし設定変更時の周期/モード再抽選有無、朝一専用モード、具体振り分けは **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset
- 通常時のステージ/期待状態は確認できるが、設定変更時・据え置き時・純電断時の内部状態契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、朝一高確、特定周期優遇、CZ優遇など、客の朝一行動に直接利用できる本機固有公開恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更による宵越し周期消失などを直接固定できる資料がないため **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のリールガックン、初期出目、ステージ、液晶周期表示等による設定変更/据え置き確定・高信頼判別契約は、検索語と資料系統を変更して再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- 設定変更時モード/周期振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一特定G/周期以内AT当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
1. `RELEASE_DATE_2015-09-28_VS_2015-10-05`
   - 2015-10-05: ちょんぼりすた、すろぱちくえすと、当時新台情報で実導入として確認。
   - 2015-09-28: イチカツに全国導入開始予定、別解析にも導入日表記。
   - 予定/地域先行/納品工程差の可能性があるが完全分離できないためCONFLICT保持。DB本線canonicalは前リレーの10-05群キューと複数実導入資料に合わせ2015-10-05。
2. `BASE_GAMES_PER_50_MINOR_DIFFERENCE`
   - 約45.4G/50枚 vs 45.7G/1000円。
   - 丸め/算出差候補。平均化しない。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change game counter reset: `UNVERIFIED_AFTER_RESEARCH`。
- reset mode/state/numeric distributions: `UNVERIFIED_AFTER_RESEARCH`。
- reset-specific short ceiling / benefits / detection: `NONE_CONFIRMED_AFTER_RESEARCH`。

## boundaryAudit
- 2015-10-05群のNo.917ルパン三世ロイヤルロード、No.918ベヨネッタに続く未処理候補として処理。
- 同日群には **サイレントヒル / クジラッキー** が残るため **2015-10-05_GROUP_OPEN** を維持。

## sources — retrieved 2026-09-08
- P-WORLD: https://www.p-world.co.jp/machine/database/7822
- すろぱちくえすと解析まとめ: https://www.slopachi-quest.com/kisyubetsu/zgold-infinity-kishubetu/
- すろぱちくえすと天井/スペック: https://www.slopachi-quest.com/article/zgold-infinity/
- すろぱちくえすと打ち方/Z揃い: https://www.slopachi-quest.com/article/zgold-infinity-reel/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/11836/
- イチカツ: https://ichikatsu.com/zgi-tenjou/
- 当時解析補助: https://slotnews777.blog.fc2.com/blog-entry-2479.html
- 型式名補助（中古実機流通）: https://store.shopping.yahoo.co.jp/nakaiticom/592.html
- 中古実機DB補助: https://slot-kakaku.com/zetgold/
- 当時試打動画: https://www.youtube.com/watch?v=lEW3hsIw-nU

## confidence
- exactReleaseDate: CONFLICT_2015-09-28_VS_2015-10-05_CANONICAL_10-05
- manufacturer/system: ANALYSIS_HIGH_MULTI_SOURCE
- formalModelName: ANALYSIS_SINGLE
- inspectionNumber: UNVERIFIED
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_WITH_MINOR_DIFFERENCE
- netIncrease: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
