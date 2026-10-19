# パチスロ クイーンズブレイド2 玉座を継ぐ者 バトルバージョン

machineName: パチスロ クイーンズブレイド2 玉座を継ぐ者 バトルバージョン
aliases: クイーンズブレイド2 バトルバージョン / クイーンズブレイド2～玉座を継ぐ者～闘 / クイーンズブレイド 闘
manufacturer: JPS / ジェイピーエス
modelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2013-12-15
releaseDatePrecision: delivery_scheduled_industry_source__hall_start_exact_day_unverified

generation: 5号機
systemType: AT / BR非搭載 / CZ / ゲーム数管理 / 天井 / ゲーム数上乗せ+継続抽選+セットストック
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- グリーンべると2013-12-09記事で、JPSが8月版「玉座を継ぐ者」の追加スペック「バトルバージョン」を発表し、**2013-12-15納品予定**と確認。
- パチマガスロマガは **JPS / 2013年12月 / 8月導入機のスペック違い** と明記。
- P-WORLDも独立機種ページを持ち、5号機AT・純増約2.8枚/Gとして掲載。
- ホール導入開始の具体日を12/15または12/16と直接固定する独立高信頼資料は今回見つからず、releaseDateは「納品予定日」と定義して保持する。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.80% |
| 2 | 98.20% |
| 3 | 99.58% |
| 4 | 102.24% |
| 5 | 106.39% |
| 6 | 110.69% |

- P-WORLDとpacnkで一致。グリーンべるとの最大出玉率110.69%とも整合。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/418.24 |
| 2 | 1/403.99 |
| 3 | 1/391.97 |
| 4 | 1/376.96 |
| 5 | 1/348.86 |
| 6 | 1/318.78 |

- P-WORLD精密値。pacnkの1/418.20 / 404.00 / 392.00 / 377.00 / 348.90 / 318.80は丸め整合。
- グリーンべるとの設定1 1/418～設定6 1/319とも整合。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- ベース機（2013-08版）はパチマガスロマガで約28G/1000円、別資料で29G/50枚を確認したが、本バトルバージョンはAT初当たり・純増・機械割が変更された別スペックのため自動転記しない。

## netIncrease

- AT「アルドラクエスト」: **約2.8枚/G**。
- グリーンべると、P-WORLD、パチマガスロマガで一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「アルドラクエスト」: **1セット40G or 100G + α**。
- ATゲーム数消化後は10Gの「アルドラバトル」で継続抽選。
- P-WORLD / パチマガスロマガで基本システムを確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ベース機と同じ基本システム・演出仕様であることをパチマガスロマガが明記。
- ゲーム数管理とCZを併用し、AT間最大天井は1088Gと後年整理資料で確認。
- ベース機のモード区分（超天国/天国A/天国B/通常A/B/C）を本バトル版の公開一次解析として直接固定できなかったため、モード別数値は自動転記しない。

## ceiling

- **AT間最大1088GでAT当選**。バトル版専用整理資料で1088G天井を確認。
- ベース版も同一1088Gで、基本システム同一という当時資料と整合。
- confidence: ANALYSIS_SINGLE_BATTLE_SPEC_PLUS_BASE_SYSTEM_CORROBORATION

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__BATTLE_SPEC_SPECIFIC_RESET_SOURCE_LIMITED__DO_NOT_AUTO_COPY_BASE_INTERNAL_CONTRACTS
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 本バトルバージョン固有ページで設定変更時の内部契約を直接列挙する残存当時資料を、表記「バトルバージョン / 闘」、天井、朝一、リセット、設定変更、据え置き等を変えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ベース機では設定変更後に天井Gリセット・モード/状態/液晶ステージ再抽選という解析があるが、別スペックへの自動転記はしない。

### carryOverBehavior

- 本バトルバージョン固有の据え置き時ゲーム数・モード・状態保持契約は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ON時の天井G・モード・状態・液晶契約は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- battle-version-specific direct contract: **UNVERIFIED_AFTER_RESEARCH**。
- ベース版のRESET仕様から推定しない。

### ceilingAfterReset

- 設定変更専用の短縮天井数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常最大天井: **1088G**。

### modeAfterReset

- バトル版固有の設定変更時モード再抽選/振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- バトル版固有の設定変更時内部状態再抽選/振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- バトル版固有の設定変更時のみの公開恩恵・短縮天井・朝一当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- バトル版固有の設定変更時不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期出目、液晶、ゾーン挙動等によるバトル版固有の設定変更/据え置き判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- バトル版固有の設定変更時モード振り分け、朝一特定G以内当選率、短縮天井等の公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## missingFields

- modelName / approvalNumber: UNVERIFIED_AFTER_RESEARCH。
- 50枚ベース: UNVERIFIED_AFTER_RESEARCH。
- 設定変更・据え置き・純電断時のバトル版固有内部契約: UNVERIFIED_AFTER_RESEARCH。
- 公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- releaseDateは **2013-12-15納品予定**を確認した値。ホール導入開始日の直接確認値と混同しない。
- 8月導入ベース機のAT初当たり1/266～1/201、純増2.5枚/G、最大出玉率108.17%を本機へ混入しない。
- 本バトル版はAT初当たり1/418.24～1/318.78、純増2.8枚/G、最大110.69%の独立スペック。
- ベース機のresetBehavior詳細は、基本システム同一という資料だけを根拠に1:1コピーしない。

## sources

取得日: 2026-09-06

- グリーンべると（2013-12-09）: https://web-greenbelt.jp/00001249/
- P-WORLD業界ニュース転載: https://news.p-world.co.jp/articles/6242/greenbelt
- P-WORLD バトルバージョン: https://www.p-world.co.jp/machine/database/7259
- パチマガスロマガ 闘: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/28/a.php
- pacnk バトルバージョン: https://pacnk.com/slot/tools/sh_queenzubureido2ouzabattle.html
- パチ7 JPS回顧: https://pachiseven.jp/articles/detail/11436
- パチマガスロマガ ベース機（比較用）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/27/c.php
- pacnk ベース機（reset比較用・転記せず）: https://pacnk.com/slot/tools/sh_queensblade2.html
