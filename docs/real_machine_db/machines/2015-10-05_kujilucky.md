# パチスロ クジラッキー

machineName: パチスロ クジラッキー
manufacturer: 三洋物産（SANYO）
releaseDate: 2015-10-05
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: AT / セットストック型AT + 周期CZ
formalModelName: パチスロクジラッキーKF
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- DMMぱちタウン、パチビーでホール導入開始 **2015-10-05** が一致。
- PiDEA Xの2015-08-10業界記事で三洋の新機種として発表確認。
- DMMおよび中古実機資料で型式名 **パチスロクジラッキーKF** を確認。
- 検定番号は今回の公開資料探索で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.38% |
| 2 | 98.54% |
| 3 | 100.07% |
| 4 | 103.38% |
| 5 | 106.64% |
| 6 | 110.82% |
- パチマガスロマガ独自調査値を採用。すろぱちくえすと/旧解析の丸め値 97.3 / 98.5 / 100.0 / 103.3 / 106.6 / 110.8% と整合。
- DMM掲載レンジ 97.38%〜110.82% と両端一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/314.0 |
| 2 | 1/305.2 |
| 3 | 1/292.0 |
| 4 | 1/275.4 |
| 5 | 1/254.6 |
| 6 | 1/207.2 |
- パチマガスロマガ、すろぱちくえすと、旧解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約33G/50枚**。
- すろぱちくえすと当時解析値。
- confidence: ANALYSIS_MEDIUM_HIGH

## netIncrease
- AT「ノリノリラッシュ」: **約2.8枚/G**。
- パチビー、P-WORLD、中古実機資料、すろぱちくえすとで一致。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- AT「ノリノリラッシュ」: **1セット55G**、セットストック型。連チャンモードは最大85%ループ。
- 「スーパーノリノリBONUS」: **33G / 66G / 99G**のAT型擬似ボーナス。
- CZ「パトチャレンジ」: **10G**、AT期待度約34%。周期は1〜256G、平均約139G。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時モード: **通常A / 通常B / 通常C / 天国**。
- モード別天井: 通常A **1280G**、通常B **1280G**、通常C **960G**、天国 **128G**。到達恩恵はAT当選。
- CZ周期天井: 周期A/B/C **256G**、周期D **128G**、周期E **32G**。最大256GでCZ発動。
- 有利区間制度導入前。
- 実機完全再現用の規定Gテーブル全振り分けは本DBの必要範囲外として省略。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井ゲーム数をリセット**。
- **内部モードを再抽選**。
- **RT状態は引き継ぐ**。
- DMMでは天井までのG数とCZまでのG数がともにクリアと明記。
- 当時解析の設定変更/電源ON-OFF比較表でも天井RESET、内部モード再抽選、RT状態引継ぎを確認。

### carryOverBehavior
- 「据え置き」を独立列で詳細に示した高信頼資料は今回限定的。ただし当時解析が「設定変更・据え置き時の挙動」の節で電源ON/OFF側を天井・モード・RT引継ぎとして整理している。
- 設定値を変更しない通常営業継続時の天井/CZ進捗については、純電断の直接資料と整合するため **CARRYOVER_SUPPORTED_BY_POWER_CYCLE_TABLE** とする。
- 据え置き時のその他細分化された内部状態は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時:
  - 天井: **引き継ぐ**。
  - CZまでのゲーム数: **引き継ぐ**（DMM）。
  - 内部モード: **引き継ぐ**。
  - RT状態: **引き継ぐ**。
- confidence: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: **RESET**（天井G・CZ周期Gともクリア）。
- 据え置き: **CARRYOVER_SUPPORTED**。
- 純電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset
- 設定変更後は天井カウンタを0から再開し、再抽選されたモードに応じて天井が決まる。
- 通常A/B: **1280G**、通常C: **960G**、天国: **128G**。
- 「リセット専用固定短縮天井」ではなく、モード再抽選で通常C比率が高いことが朝一の実質的な優遇。

### modeAfterReset
- 設定変更後モード振り分け（全設定共通）:
  - 通常A: **40%**
  - 通常B: **20%**
  - 通常C: **35%**
  - 天国: **5%**
- AT終了後の通常C移行率（設定1〜5で12.0%、設定6で10.0%）より設定変更後35%が大きく、朝一は通常Cが明確に優遇。
- confidence: ANALYSIS_HIGH_PUBLISHED_NUMERIC

### stateAfterReset
- RT状態は設定変更でも **引き継ぐ** と当時比較表に明記。
- RT以外の内部高確等を設定変更時にどう初期化するかは、今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後は通常C **35%**、天国 **5%**。
- 通常Cは960G、天国は128G天井のため、通常AT後より朝一の浅い規定G側へ寄る。
- 当時解析はリセット後の天井狙い目を600G〜と考察しているが、これは攻略上の期待値目安であり機械契約値とは分離して保持。

### resetPenalties
- 設定変更時は前日の天井G数およびCZまでのG数をクリアするため、前日ハマリ進捗は失われる。
- RT状態は引き継ぐため、設定変更で全内部状態が完全初期化される機種とは扱わない。

### resetDetection
- 本機固有のリールガックン、初期出目、ランプ、ステージ等で設定変更を確定/高信頼判別できる公開契約は、検索語・資料系統を変更しても今回固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井/CZ進捗の消失そのものは事後的挙動であり、朝一即時判別法とは別扱い。

### numericResetData
- 設定変更後モード: **通常A 40 / 通常B 20 / 通常C 35 / 天国 5%**（全設定共通）。
- モード別天井: **1280 / 1280 / 960 / 128G**。
- 設定変更時天井/CZカウンタ: **RESET**。
- 純電断時天井/CZカウンタ: **CARRYOVER**。
- 設定変更専用の固定G数天井短縮: **NONE; MODE_RESELECTION_BASED**。

## conflicts
- `PAYOUT_ROUNDING_ONLY`: 機械割は精密値97.38〜110.82%と丸め値97.3〜110.8%が存在するが実質競合ではなく表示精度差。精密値を正本採用。
- 導入時期を「2015年9月」とする中古実機資料がある一方、DMM/パチビーはホール導入開始2015-10-05。イベント定義の粗い月表記と判断し、正確なホール開始日は2015-10-05を採用。

## missingFields
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change behavior for non-RT internal high/low state: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific immediate reset detection cue: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08
- DMMぱちタウン: https://p-town.dmm.com/machines/2248
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/27/h.php
- すろぱちくえすと 基本/天井: https://www.slopachi-quest.com/article/kujilucky/
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/kujilucky-reset/
- すろぱちくえすと 機種まとめ: https://www.slopachi-quest.com/kisyubetsu/kujilucky/
- P-WORLD: https://www.p-world.co.jp/machine/database/7813
- パチビー: https://www.pachibee.jp/movies/index/12102
- PiDEA X: https://www.pidea.jp/articles/SANYO%E3%80%8C%E6%98%9F%E7%9F%A2%E3%80%8D%E3%80%8C%E3%82%AF%E3%82%B8%E3%83%A9%E3%83%83%E3%82%AD%E3%83%BC%E3%80%8D%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8
- パチマ中古実機（型式照合）: https://www.pachima.com/c/slot/s_28sonota/S00310

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- manufacturer/system: INDUSTRY_AND_ANALYSIS_HIGH
- formalModelName: ANALYSIS_HIGH_MULTI_SOURCE
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE
- initialHit: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_MEDIUM_HIGH
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeGameCounterReset: ANALYSIS_HIGH_DIRECT
- powerCycleCarryOver: ANALYSIS_HIGH_DIRECT
- settingChangeModeReselection: ANALYSIS_HIGH_DIRECT
- resetModeNumericData: ANALYSIS_HIGH_PUBLISHED_NUMERIC
- rtStateOnReset: ANALYSIS_HIGH_DIRECT
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
