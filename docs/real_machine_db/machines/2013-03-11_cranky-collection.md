# クランキーコレクション

machineName: クランキーコレクション
manufacturer: アクロス
releaseDate: 2013-03-11
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi、HAZUSE、パチスロ解析ガイドが2013-03-11導入で一致。ユニバーサル公式は2013年3月発売と月単位で整合。
generation: 5号機
systemType: ノーマル / ボーナス主体 / 高技術介入
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_NORMAL_TYPE

## identity

- 正式表記: **クランキーコレクション**。
- メーカー: **アクロス**。ユニバーサル公式でもA PROJECT第1弾として掲載。
- 型式名: **クランキーコレクションCL**。
- 検定番号: **2S1341**。
- 導入開始日: **2013-03-11**。
- confidence: OFFICIAL_FOR_BRAND_AND_RELEASE_MONTH__ANALYSIS_HIGH_MULTI_SOURCE_FOR_EXACT_DATE_AND_MODEL

## payoutRateBySetting

### 通常打ち

| 設定 | 機械割 |
|---|---:|
| 1 | 98.5% |
| 2 | 99.9% |
| 3 | 101.3% |
| 4 | 103.8% |
| 5 | 106.7% |
| 6 | 109.5% |

### 完全攻略時

| 設定 | 機械割 |
|---|---:|
| 1 | 100.5% |
| 2 | 102.0% |
| 3 | 103.4% |
| 4 | 106.0% |
| 5 | 109.0% |
| 6 | 111.9% |

- 通常打ち/完全攻略の両系列はパチマガスロマガ旧ページ、HAZUSE、P-WORLD、当時攻略資料で一致。
- 完全攻略条件は「小役取りこぼしなし」「単独ボーナスは成立ゲーム、同時当選時は次ゲームで揃える」「BIG/REGとも最大枚数獲得」。
- 一部後年整理資料に完全攻略 **100.2 / 101.7 / 103.1 / 105.7 / 108.7 / 111.6%** があるが、当時系複数ソースが100.5〜111.9%で一致するため、平均せず下記CONFLICTに保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_PRIMARY_VALUES

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/303.4 | 1/385.5 | 1/169.8 |
| 2 | 1/297.9 | 1/372.4 | 1/165.5 |
| 3 | 1/292.6 | 1/364.1 | 1/162.2 |
| 4 | 1/282.5 | 1/360.1 | 1/158.3 |
| 5 | 1/273.1 | 1/331.0 | 1/149.6 |
| 6 | 1/260.1 | 1/315.1 | 1/142.5 |

- K-Navi、HAZUSE、パチマガスロマガ旧ページ、P-WORLD、解析ガイド等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約35〜38G/50枚（1000円）**。
- 後年整理資料とクランキー系専門整理ページで一致。パチマガスロマガ旧ページにも「1000円あたりのゲーム数」項目が現存するが検索表示では数値本文が欠けるため、直接確認できた35〜38Gを採用。
- 高設定ほど通常時小役確率が高く、ベースも上がる設計。
- confidence: ANALYSIS_MULTI_SOURCE_SECONDARY

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。
- ART/AT/RTによる通常時の純増区間は搭載しないボーナス主体ノーマルタイプ。

## basicPayout

- BIG: **最大335枚**。
- REG: **最大129枚**。
- BIGは344枚超払い出しで終了、REGは134枚超払い出しで終了。
- 両ボーナスとも技術介入が必要で、最大枚数は目押し成功時の比較値として保存。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

### ゲーム性

- ボーナスのみで出玉を増やすノーマルタイプ。
- 通常時はリーチ目と「クランキーチャレンジ」を中心とする。
- 技術介入性が高く、通常時の小役取得・ボーナス早揃え・BIG/REG中の手順で機械割が変化する。

### 天井

- **天井機能非搭載**。
- HAZUSE、当時攻略資料、後年整理資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__NORMAL_TYPE_NO_CEILING_OR_PERSISTENT_MODE_CONFIRMED__SETTING_CHANGE_AND_POWER_SPECIFICS_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 本機は天井非搭載の純ノーマル機であり、設定変更で朝一専用天井・モード・内部状態を再抽選するタイプではないことをゲーム仕様から確認。
- ただし本機固有の設定変更直後リール挙動、内部ボーナス成立状態の扱い、初期出目等を明記した直接資料は、表記揺れ・型式名・シリーズ名・メーカー名と「設定変更 / リセット / 朝一 / ガックン」を組み替えて再探索しても確定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 天井ゲーム数、通常時モード、ART/AT状態のような持越し対象は **NOT_APPLICABLE_NORMAL_TYPE**。
- 純据え置き時の本機固有リール初期挙動・表示差は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 天井ゲーム数、通常時モード、ART/AT状態については **NOT_APPLICABLE_NORMAL_TYPE**。
- 設定変更を伴わない電源OFF→ONだけで生じる本機固有のリール/ランプ/初期出目挙動は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- **NOT_APPLICABLE_NO_CEILING_COUNTER**。
- ゲーム数天井や規定ゲーム数解除を搭載しないため、朝一狙いに使う天井進捗カウンタ自体がない。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用の短縮天井も存在しない。

### modeAfterReset

- **NOT_APPLICABLE_NO_PERSISTENT_GAME_MODE_CONFIRMED**。
- AT/ART機のような通常A/B、天国等の持続モードは本機のゲーム性として確認されない。

### stateAfterReset

- **NOT_APPLICABLE_NO_PERSISTENT_AT_ART_STATE_CONFIRMED**。
- 高確/超高確等の朝一客行動に関わる持続内部状態は本機仕様として確認されない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 朝一専用モード、短縮天井、リセット恩恵率などは **NOT_APPLICABLE / NONE_CONFIRMED**。
- 本機の朝一価値はリセット恩恵よりも通常設定そのものと技術介入性能に依存する。

### resetPenalties

- 設定変更で失われる天井進捗・モード期待度等は **NOT_APPLICABLE_NO_CEILING_OR_PERSISTENT_MODE**。

### resetDetection

- 本機固有の**リールガックン、初期出目、ランプ等による設定変更/据え置き判別**は、機種名「クランキーコレクション / クラコレ」、型式「クランキーコレクションCL」、メーカー「アクロス / ユニバーサル」、シリーズ「クランキー / A PROJECT」と「設定変更 / リセット / 朝一 / 据え置き / ガックン / 電源OFF ON」を組み替えて再探索したが直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 後継アクロス機のガックン仕様を本機へ流用しない。

### publicMorningNumbers

- normalCeiling: **NOT_APPLICABLE**
- resetShortCeiling: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE**
- resetStateDistribution: **NOT_APPLICABLE**
- resetBenefitRate: **NONE_CONFIRMED**
- resetDetectionNumericData: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**

### numericResetData

- settingChangeCeilingProgress: NOT_APPLICABLE
- postResetCeiling: NOT_APPLICABLE
- resetModeNumericRate: NOT_APPLICABLE
- resetStateNumericRate: NOT_APPLICABLE
- publicMorningNumericAdvantage: NONE_CONFIRMED

resetQaReliability: ANALYSIS_HIGH_FOR_NO_CEILING_NORMAL_TYPE__UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_RESET_DETECTION

## missingFields

- machineSpecificSettingChangeReelBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleReelOrLampBehavior: `UNVERIFIED_AFTER_RESEARCH`
- resetDetectionSpecifics: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- `CONFLICT_FULL攻略_PAYOUT_RETROSPECTIVE`: 主系列の当時資料・HAZUSE・P-WORLD・パチマガスロマガは完全攻略 **100.5 / 102.0 / 103.4 / 106.0 / 109.0 / 111.9%**。一部後年整理資料は **100.2 / 101.7 / 103.1 / 105.7 / 108.7 / 111.6%**。平均せず、主表は複数当時系資料一致値を採用。

## sources

取得日: **2026-09-06**

- ユニバーサルエンターテインメント公式 — 製品/ブランド/2013年3月発売/ノーマル: `https://www.universal-777.com/product/slot/cranky_collection/`
- K-Navi — 2013-03-11導入/BIG・REG/技術介入: `https://p-kn.com/slot/1829/`
- HAZUSE — 型式/検定番号/導入日/ボーナス確率/機械割/完全攻略: `https://hazuse.com/machine/pachislot/2S1341/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/2S1341/genre/201/`
- パチマガスロマガ旧ページ — ボーナス確率/通常・フル攻略機械割: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/01/h.php`
- パチマガスロマガ旧ページ — 通常時小役/1000円あたり項目: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/01/c.php`
- P-WORLD — 通常/フル技術介入機械割/獲得枚数: `https://www.p-world.co.jp/machine/database/7031`
- パチスロ解析ガイド — 2013-03-11導入/335枚/129枚/ボーナス確率: `https://pachislot-guide.net/2013/cranky-collection/`
- crankyseven — 35〜38G/1000円、天井なし、通常機械割/完全攻略機械割: `https://crankyseven.com/crankycollection-pc.htm`
- 当時攻略資料（天井ハイエナ生活） — 天井非搭載/機械割: `https://macerate.seesaa.net/article/343833222.html`
- 当時攻略資料（完全攻略値）: `https://macerate.seesaa.net/article/347254550.html`
- 後年A PROJECT整理資料 — ベース35〜38G、完全攻略値差分: `https://www.pachislotblog.tokyo/across-series-setteihanbetsu/`
- pacnk — 通常機械割/ボーナス確率/天井なし: `https://pacnk.com/slot/2013/crankycollection/top.php`
