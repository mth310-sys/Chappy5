# クイーンオアシス

machineName: クイーンオアシス
aliases: QUEEN OASIS / クイーンオアシス25φ
manufacturer: パイオニア / PIONEER
releaseDate: 2014-02-17
releaseDatePrecision: exact_hall_start_official

generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知 / 25φ
recordStatus: PARTIAL_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- パイオニア公式更新履歴で **2014-02-17「クイーンオアシス導入開始」**を確認。公式2014年製品一覧は2014年2月発売。
- 当時グリーンべると記事では、2013年10月導入の「クイーンハナハナ-30」の姉妹機にあたる **25φ機**として発表され、納品は2月中旬予定。
- パイオニア公式製品一覧は「確率・配列・演出・告知タイミングにおいてクイーンハナハナ-30のスペックを完全踏襲」と明記。P-WORLDも同趣旨で確認。
- 型式名 / 検定番号は、機種名・25φ表記・型式/検定語・古いDB/解析系統を変えて再探索したが、今回安全に直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96% |
| 2 | 98% |
| 3 | 101% |
| 4 | 104% |
| 5 | 107% |
| 6 | 111% |

- パチマガスロマガの本機専用設定別表で確認。5号機クロニクルも同系列で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG / REG / ボーナス合算

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/309 | 1/516 | 1/193 |
| 2 | 1/297 | 1/481 | 1/184 |
| 3 | 1/284 | 1/445 | 1/173 |
| 4 | 1/270 | 1/409 | 1/163 |
| 5 | 1/256 | 1/376 | 1/152 |
| 6 | 1/240 | 1/344 | 1/141 |

- パチマガスロマガ本機専用表で確認。P-WORLDもBIG/REG設定別値を掲載。
- パイオニア公式および当時業界記事が「クイーンハナハナ-30の確率を完全踏襲」と明記し、姉妹機側の公開値とも一致。
- confidence: OFFICIAL_SPEC_RELATION + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 完全踏襲元「クイーンハナハナ-30」には当時業界記事で **平均37.5G/50枚** があるが、「クイーンオアシス」本機専用資料で同値を直接確認できなかったため自動転記しない。
- 「クイーンオアシス / 25φ / 50枚 / 1000円 / ベース / コイン持ち」および姉妹機表記を変えて再探索済み。
- confidence: UNVERIFIED

## netIncrease

- **NOT_APPLICABLE_NORMAL_TYPE**。
- ART/AT等の付加機能は非搭載。

## basicPayout

- BIG: **最大312枚**。
- REG: 当時グリーンべると / P-WORLDでは **最大130枚**。
- パチマガスロマガ本機ページにはREG「約135枚（130枚払い出し）」という逆転した表記があり、他資料および5号機の払い出し終了条件との整合が悪いため、本DBでは **CONFLICT_SOURCE_NOTATION** として分離保持し、主要比較値は最大130枚を採用。
- confidence: INDUSTRY + ANALYSIS_HIGH; CONFLICT_FOR_SLOMAG_REG_NOTATION

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルタイプ / 完全告知。
- ART/AT/CZ、通常時ゲーム数モードによる初当たり管理は非搭載として扱う。

## ceiling

- **NOT_APPLICABLE_NORMAL_TYPE**。
- ゲーム数天井・ART/AT間天井は非搭載。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__NORMAL_TYPE_NO_CEILING_MODE_STATE_PROGRESS__DIRECT_MACHINE_RESET_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 本機固有の設定変更後専用モード、短縮天井、CZ/AT優遇は **NOT_APPLICABLE_NORMAL_TYPE**。
- 設定変更時のリール初動など本機固有の物理挙動は、機種名・姉妹機名・「設定変更 / リセット / 朝一 / ガックン」等を変えて再探索したが直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 完全踏襲元「クイーンハナハナ-30」の後年解析にガックン等の観測情報はあるが、本機25φへ推測転記しない。

### carryOverBehavior

- 天井・ゲーム数解除・ART/AT/CZモード・朝一高確等、ホール朝一で宵越し価値を持つ進行要素は **NOT_APPLICABLE_NORMAL_TYPE**。
- ボーナス履歴表示等の外部データカウンタ挙動は本DB対象外。

### powerCycleBehavior

- 電源OFF→ONのみで比較対象となる天井進捗・モード・ART/AT状態は **NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の電断時特殊挙動は、機種名/25φ/電源OFF ON/電断/朝一を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### gameCounterReset

- internal ceiling/game-number progression: **NOT_APPLICABLE_NORMAL_TYPE**。

### ceilingAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。設定変更専用短縮天井なし。

### modeAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。AT/ART/CZの通常時モード管理なし。

### stateAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。朝一狙いに影響するAT/ART内部高確等なし。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、朝一CZ/AT、モード優遇: **NONE / NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の公開朝一恩恵数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日天井進捗消滅等の不利: **NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、ランプ、BGM等を利用した設定変更/据え置き判別は十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 姉妹機「クイーンハナハナ-30」のガックン / 87G以内BGM変化という後年観測情報は、25φ版へ1:1転記しない。

### publicMorningNumbers

- reset-only shortened ceiling: **NOT_APPLICABLE**。
- reset mode/state distribution: **NOT_APPLICABLE_NORMAL_TYPE**。
- reset-only initial hit/CZ rate: **NOT_APPLICABLE**。
- 本機固有の公開朝一判別数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 本機は公式にクイーンハナハナ-30の確率・配列・演出・告知タイミングを完全踏襲するとされるが、**50枚ベースとresetBehaviorは本機専用直接値がないため自動転記しない**。
- REG獲得表記は、グリーンべると / P-WORLDの最大130枚に対し、パチマガスロマガ本機ページが「約135枚（130枚）」と表記。平均せず `CONFLICT_SOURCE_NOTATION` とする。
- 2014-02-17はパイオニア公式の「導入開始」であり、2013-12-19業界記事の「2月中旬納品予定」と定義を分離する。

## sources

取得日: **2026-09-06**

1. パイオニア公式 更新履歴
   - https://www.slot-pioneer.co.jp/news.html
   - 2014-02-17「クイーンオアシス導入開始」。
   - confidence: OFFICIAL

2. パイオニア公式 2014年製品一覧
   - https://www.slot-pioneer.co.jp/products/2014.html
   - 2014年2月発売 / クイーンハナハナ-30の確率・配列・演出・告知タイミングを完全踏襲。
   - confidence: OFFICIAL

3. パイオニア公式 発売のお知らせ
   - https://www.slot-pioneer.co.jp/information/qoasis.html
   - 本機発売告知。
   - confidence: OFFICIAL

4. P-WORLD業界ニュース / グリーンべると「ハナハナの完全移植版25φ機『クイーンオアシス』」2013-12-19
   - https://news.p-world.co.jp/articles/6267/greenbelt
   - 25φ姉妹機 / クイーンハナハナ-30完全踏襲 / BB最大312枚 / RB最大130枚 / 2月中旬納品予定。
   - confidence: INDUSTRY

5. パチマガスロマガ「クイーンオアシス」機種概要
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/108/a.php
   - 2014年2月 / ノーマル完全告知 / ボーナス獲得表記。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE

6. パチマガスロマガ「クイーンオアシス」ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/108/h.php
   - 設定別BIG / REG / 合算 / PAYOUT。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE

7. P-WORLD「クイーンオアシス」
   - https://www.p-world.co.jp/machine/database/7291
   - 5号機ノーマル完全告知 / BIG最大312枚 / REG最大130枚 / クイーンハナハナ-30完全踏襲 / 設定別BIG・REG。
   - confidence: ANALYSIS_HIGH_DATABASE

8. 5号機クロニクル パイオニア一覧
   - https://5goki.com/pioneer
   - クイーンオアシス2014/2 / 設定別機械割96～111%。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

9. グリーンべると「シリーズ最多の点滅演出『クイーンハナハナ-30』」2013-08-30
   - https://web-greenbelt.jp/00001034/
   - 完全踏襲元の平均37.5G/50枚、各種性能。ベースは本機へ自動転記しないため参照のみ。
   - confidence: INDUSTRY_REFERENCE_SISTER_MODEL

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**（完全踏襲元37.5Gは存在するが本機専用直接確認なし）。
- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の本機固有物理挙動 / power-cycle特殊挙動 / resetDetection: **UNVERIFIED_AFTER_RESEARCH**。

## nextQaNotes

- 当時パイオニアの本機仕様書、検定DB、ホール向け資料が発掘できた場合、型式・ベース・朝一ガックン等を再確認する。
- 姉妹機完全踏襲の範囲は明示された「確率・配列・演出・告知タイミング」を中心に扱い、記載のないreset契約は推測転記しない。
