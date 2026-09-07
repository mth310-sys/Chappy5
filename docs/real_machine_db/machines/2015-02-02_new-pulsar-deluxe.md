# ニューパルサーデラックス

machineName: ニューパルサーデラックス
alternateName: ニューパルサーDX
manufacturer: 山佐
releaseDate: 2015-02-02
releaseDatePrecision: industry_and_multi_source_hall_start
releaseDateNote: K-Naviで2015-02-02ホール導入開始。娯楽産業/Gamerの当日記事でも「2月2日にホールデビュー」と確認（地域差注記あり）。
generation: 5号機
systemType: ノーマル / 完全告知
modelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- 山佐公式現行アーカイブで5号機・Aタイプ・2015年2月稼働を確認。
- シリーズ初の完全告知タイプで、リール左の「シャカシャカランプ」が光ればボーナス確定。
- 正式型式名/検定番号は `ニューパルサーデラックス / ニューパルサーDX / 山佐 / 型式 / 検定番号 / 5S` を組み替えて再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.6% |
| 3 | 100.3% |
| 4 | 103.1% |
| 5 | 106.0% |
| 6 | 110.0% |

- 複数解析資料で同一系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/282.4 | 1/420.1 | 1/168.9 |
| 2 | 1/277.6 | 1/412.1 | 1/165.9 |
| 3 | 1/271.9 | 1/404.5 | 1/162.6 |
| 4 | 1/258.0 | 1/383.2 | 1/154.2 |
| 5 | 1/243.6 | 1/362.0 | 1/145.6 |
| 6 | 1/227.5 | 1/337.8 | 1/135.9 |

- K-Naviの合算レンジ約1/136～1/169と整合し、CrankySeven等で設定別系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 設定1～6: **35.04 / 35.25 / 35.88 / 36.28 / 36.48 / 36.99G / 50枚**。
- パチマガスロマガ旧DBの独自調査値。別解析の概算約36Gとも整合。
- confidence: ANALYSIS_SINGLE_STRONG_DB_WITH_SECONDARY_SUPPORT

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE_NO_AT_ART`。

## basicPayout

- BIG: **約312枚**。
- REG: **約104枚**。
- K-Navi、CrankySeven等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やす純ノーマルタイプ。
- AT/ART、CZ、規定ゲーム数解除、天井機能なし。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_NOT_APPLICABLE_NORMAL_TYPE_AND_RESEARCHED_UNVERIFIED_EXTERNAL_BEHAVIOR
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 天井・規定Gモード・CZ・AT/ART内部状態は非搭載のため、ホール経営シミュレーション上のリセット対象は `NOT_APPLICABLE`。
- 設定変更時の本機固有リール初動/表示復帰など外見契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置きで持ち越す天井G・モード・AT/ART/CZ状態は `NOT_APPLICABLE_NORMAL_TYPE_NO_CEILING_NO_MODE`。
- 成立済みボーナス等の電断跨ぎ内部契約は本ミッション必須粒度を超えるうえ本機固有直接資料を固定できず、一般5号機慣例から推測しない。

### powerCycleBehavior

- 設定変更なし電源OFF→ONで持ち越す天井/モード/状態は `NOT_APPLICABLE_NORMAL_TYPE_NO_CEILING_NO_MODE`。
- リール位置・告知ランプ等の外見復帰契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- `NOT_APPLICABLE_NO_CEILING_GAME_COUNTER_DEPENDENCY`。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset

- `NOT_APPLICABLE_NO_INTERNAL_GAME_COUNT_MODE`。

### stateAfterReset

- `NOT_APPLICABLE_NO_AT_ART_CZ_INTERNAL_STATE_FOR_REQUIRED_V0_7_SCOPE`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用の短縮天井・朝一モード・CZ/AT優遇等は `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更専用の朝一不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、出目、ランプ、表示による変更判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `朝一 / 設定変更 / 据え置き / 電源OFF ON / ガックン / リール` を表記揺れ込みで再探索したが、実機固有の直接契約を安全に固定できなかった。

### numericResetData

- `NONE_NOT_APPLICABLE_NORMAL_TYPE_NO_RESET_BENEFIT_NUMERIC_DATA`。

### publicMorningNumbers

- `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `ニューパルサーデラックス / ニューパルサーDX / ニューパルDX / New Pulsar Deluxe`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / リール / 50枚 / 1000円 / 型式 / 検定番号`。
- 資料系統: 山佐公式、当時業界記事、K-Navi、パチマガスロマガ旧DB、当時/後年解析資料。
- 2019年「ニューパルサーDX～チェリーバージョン～」、6号機「DX3」等の別機種値は混入させていない。

## release-boundary audit

- 2015-02-02同日群で前レコードの真モグモグ風林火山2に続く未処理強候補として処理。
- K-Naviの2015年2月導入カレンダー上、02/02のパチスロ強候補は真モグモグ風林火山2とニューパルサーデラックス。今回この2機を処理済みとした。

## sources

取得日: 2026-09-07

1. 山佐ネクスト公式機種情報: https://yamasa-next.co.jp/model_npd/
2. K-Navi: https://p-kn.com/slot/2189/
3. 娯楽産業 2015-02-02: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80android%E5%90%91%E3%81%91%E3%80%8C%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%91%E3%83%AB%E3%82%B5%E3%83%BC%E3%83%87%E3%83%A9%E3%83%83%E3%82%AF%E3%82%B9%E3%80%8D%E3%82%A2%E3%83%97/
4. Gamer 2015-02-02: https://www.gamer.ne.jp/news/201502020040/
5. パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/201/c-1.php
6. CrankySeven: https://crankyseven.com/newpulsardx-pc.htm
7. けんのスロットシミュレーション解析: https://kenslo65536.com/kaiseki/new-pulsar-dx.html

## missingFields

- modelName
- inspectionNumber
- settingChangeExternalReelOrDisplayContract
- powerCycleExternalReelOrDisplayContract

## conflicts

- NONE_CONFIRMED_FOR_CORE_VALUES
