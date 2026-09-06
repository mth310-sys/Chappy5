# 戦律のストラタス

machineName: 戦律のストラタス
manufacturer: TAKASAGO / 高砂電器産業
releaseDate: 2014-09-29
releaseDatePrecision: regional_early_hall_start_niigata
nationwideHallStart: 2014-10-06
generation: 5号機
systemType: AT / 擬似ボーナス / CZ / 差枚数管理
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS_AND_DATE_SCOPE_NOTE

## identity

- KONAMI公式の2014-09-22告知で、**新潟県のホールのみ2014-09-29から先行稼働**、**全国ホールは2014-10-06から稼働開始**と明記。
- 本DBは確認可能な最初の実ホール稼働を時系列キューから落とさないため、releaseDate主値を2014-09-29とする。ただし全国導入日ではないため `releaseDatePrecision: regional_early_hall_start_niigata` を必ず併記。
- K-Naviは全国ホール導入開始を2014-10-06と掲載。KONAMI公式アーカイブは2014年10月稼働開始とするため、全国導入の裏付けとして扱う。
- HAZUSEは導入開始日2014-09-29、型式 **戦律のストラタスJW**、検定番号 **4S0609** と掲載。09-29表記はKONAMI公式の新潟先行と整合するため、全国導入日との単純CONFLICTにはせずスコープ差として保持。
- canonical manufacturer: **TAKASAGO / 高砂電器産業**。K-Navi、HAZUSE、パチマガスロマガ、KONAMI公式アーカイブの権利表記/機種アーカイブで整合。
- confidence: OFFICIAL_PLUS_INDUSTRY_ANALYSIS_HIGH

## payoutRateBySetting

パチマガスロマガのメーカー発表PAYOUTを主値とする。

| 設定 | PAYOUT |
|---:|---:|
| 1 | 96.8% |
| 2 | 97.8% |
| 3 | 99.9% |
| 4 | 103.4% |
| 5 | 108.4% |
| 6 | 115.2% |

- K-Navi/P-WORLDは設定5を108.3%と掲載。ちょんぼりすたは設定2 97.7%、設定5 108.3%、設定6 115.1%等の丸め/転記差を含む。
- メーカー発表表をcanonicalにし、二次資料差は `SOURCE_ROUNDING_VARIATION_MAX_0_1PT` として保持。平均化しない。
- confidence: ANALYSIS_HIGH_MANUFACTURER_PUBLISHED_TABLE_PLUS_MULTI_SOURCE

## initialHitBySetting

### BIG

| 設定 | BIG |
|---:|---:|
| 1 | 1/357.08 |
| 2 | 1/345.94 |
| 3 | 1/328.60 |
| 4 | 1/311.38 |
| 5 | 1/291.93 |
| 6 | 1/274.46 |

### REG

| 設定 | REG |
|---:|---:|
| 1 | 1/447.43 |
| 2 | 1/430.21 |
| 3 | 1/406.29 |
| 4 | 1/380.60 |
| 5 | 1/354.61 |
| 6 | 1/330.17 |

### ボーナス合成

| 設定 | ボーナス合成 |
|---:|---:|
| 1 | 1/198.59 |
| 2 | 1/191.75 |
| 3 | 1/181.67 |
| 4 | 1/171.26 |
| 5 | 1/160.12 |
| 6 | 1/149.87 |

### 戦律RUSH（AT）初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/654.87 |
| 2 | 1/636.57 |
| 3 | 1/553.65 |
| 4 | 1/521.37 |
| 5 | 1/448.22 |
| 6 | 1/414.37 |

### ボーナス+AT合算

| 設定 | 合算 |
|---:|---:|
| 1 | 1/152.4 |
| 2 | 1/147.4 |
| 3 | 1/136.8 |
| 4 | 1/128.9 |
| 5 | 1/118.0 |
| 6 | 1/110.1 |

- パチマガスロマガ旧攻略の解析表を主値とし、K-Navi/P-WORLDの丸め値と照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30G/50枚**。
- パチマガスロマガ小役解析ページが「50枚あたりのゲーム数 約30G」と明記。
- confidence: ANALYSIS_HIGH

## netIncrease

- AT「戦律RUSH」: **約3.0枚/G**。
- パチマガスロマガ、K-Navi、P-WORLD、当時発表系資料で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 疑似BIG: **約200枚**。
- 疑似REG: **約50枚**。
- AT「戦律RUSH」: **1セット100枚+α / 純増約3.0枚/G**。
- AT初当たり時はBONUS+枚数上乗せが確定する仕様をK-Navi/DMM/旧攻略で確認。
- 実機完全再現用の上乗せ振り分け・特化ゾーン細目は収集対象外。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時の主な当選契機は **ゲーム数管理 / 32G周期CZ / 特定役解除**。
- 通常モード: **通常A / 通常B / 天国 / 帝特六機**。
- モード別最大天井:
  - 通常A: **999G**
  - 通常B: **777G**
  - 天国: **111G**
  - 帝特六機: **333G**
- 通常時内部状態は **通常 / 高確A / 高確B / 超高確**。レア役等のボーナス/AT直撃当選率に影響。
- 帝特六機モード中はボーナス+AT合算約**1/74**、突入時にAT+BONUS+上乗せが確定する高性能モード。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **表示ゲーム数がリセット**され、通常時モードを再抽選する解析を確認。
- 設定変更時モード振り分け:
  - 奇数設定(1/3/5): 通常A **15.00%** / 通常B **70.00%** / 天国 **15.00%**
  - 偶数設定(2/4/6): 通常A **10.00%** / 通常B **65.00%** / 天国 **25.00%**
- 設定変更時は通常B以上が85〜90%となるため、通常時より朝一の777G/111G側が強い。
- 設定変更時の高確A/B等内部状態の開始振り分けは、今回の再探索で直接数値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_COUNTER_AND_MODE / UNVERIFIED_FOR_INTERNAL_STATE

### carryOverBehavior

- 据え置き時は **液晶表示ゲーム数が前日の値を引き継ぐ**という当時解析を確認。例として前日350G終了なら翌日も350G表示。
- これは少なくともゲーム数管理カウンタのCARRYOVERを強く支持するため、`gameCounterReset: CARRYOVER_ON_UNCHANGED_SETTING` とする。
- 前日内部モードもゲーム数管理と整合して継続すると考えられる実戦上の据え置き判別資料はあるが、モードそのもののRAM契約を直接説明する一次対照表は固定できず、`modeCarryOver: SUPPORTED_BY_COUNTER_AND_PRACTICAL_ANALYSIS / DIRECT_RAM_CONTRACT_UNVERIFIED` とする。
- 内部高確状態/CZ周期ポイントの据え置き契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- **設定変更なしの単純電源OFF→ON**について、ゲーム数/モード/内部状態を設定変更と直接比較した本機固有の高信頼対照表は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き情報を純電断契約へ自動拡張しない。

### gameCounterReset

- 設定変更時: **RESET**（液晶表示G数もリセット）。
- 据え置き時: **CARRYOVER**（前日表示G数を翌日引継ぎ）。
- 単純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更後のモード再抽選により、朝一最大天井は選択モードに応じ **999G / 777G / 111G**。
- 設定変更専用の固定短縮天井ではなく、**通常B 65〜70%・天国15〜25%へのモード再抽選優遇**で実質的に短い天井が選ばれやすい構造。
- 「リセット天井777G固定」とは記録しない。

### modeAfterReset

- 設定変更時はモード再抽選。
- 奇数: A15 / B70 / 天国15%。偶数: A10 / B65 / 天国25%。
- 帝特六機モードの設定変更時直接振り分けは上記表に含まれず、朝一移行率としては `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 通常/高確A/高確B/超高確の内部状態構造自体は確認済み。
- 設定変更時・据え置き・単純電断時にこれらをどう処理するかの本機固有直接表は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時、通常B以上が **奇数85% / 偶数90%**。
- 天国移行は **奇数15% / 偶数25%**。
- 777G天井の通常Bが65〜70%となるため、通常時より朝一ゲーム数狙い上の恩恵がある。

### resetPenalties

- 設定変更固有の主要な不利要素は、検索語・資料系統変更後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- **液晶表示ゲーム数**が主要判別要素。
- 据え置きなら前日G数を引き継ぎ、設定変更時はリセットされる解析契約があるため、前日の最終表示G数を把握できれば変更推測に利用可能。
- ただし実機所有者コメントでは表示G数を任意で0にできるとの報告があり、ホール側の対策可能性がある。コメント単独は低信頼のため、確定判別を保証する根拠には使わず注意事項としてのみ保持。
- 本機固有のガックン確定契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時モード:
  - 奇数: A15.00 / B70.00 / 天国15.00%
  - 偶数: A10.00 / B65.00 / 天国25.00%
- モード別天井: A999 / B777 / 天国111G。
- 朝一通常B以上: 奇数85% / 偶数90%。

### publicMorningNumbers

- **奇数設定: 通常A15% / 通常B70% / 天国15%**。
- **偶数設定: 通常A10% / 通常B65% / 天国25%**。
- 表示G数: 据え置きは前日値引継ぎ、設定変更時はリセット。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `戦律のストラタス / 戦慄のストラタス(誤記検索用) / 旋律のストラタス(誤記検索用) / 戦律のストラタスJW / TAKASAGO / 高砂電器産業`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 999 / 777 / 111 / モード移行 / 高確 / 状態 / 液晶ゲーム数 / ガックン`。
- 資料系統: KONAMI公式、K-Navi、HAZUSE、パチマガスロマガ旧攻略、P-WORLD、当時解析ブログ、後年整理、実機資料。
- 設定変更モード/表示G数引継ぎは複数解析で整合。純電断・設定変更時内部高確状態は直接契約を固定できず推測しない。

## sources

取得日: 2026-09-07

1. KONAMI公式 マジハロ情報局 2014-09-22 — 戦律のストラタス稼働告知
   - https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2014/mhs_blog_140922.html
   - 新潟県のみ2014-09-29先行稼働、全国2014-10-06稼働開始
   - reliability: OFFICIAL
2. KONAMI公式 機種アーカイブ — 戦律のストラタス
   - https://www.konami.com/amusement/psm/archive/ps/2014/stratus/
   - 2014年10月稼働、5号機AT
   - reliability: OFFICIAL
3. パチマガスロマガ旧攻略 — 基本
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/06/a.php
   - AT純増約3.0枚/G、ゲーム性
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧攻略 — ボーナス/AT/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/06/h.php
   - 設定別BIG/REG/AT/合算、メーカー発表PAYOUT
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — 小役/ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/06/c.php
   - 50枚あたり約30G
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧攻略 — ATフロー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/06/l.php
   - 戦律RUSH 1セット100枚+α、純増3.0枚/G
   - reliability: ANALYSIS_HIGH
7. K-Navi — 戦律のストラタス
   - https://p-kn.com/slot/2127/
   - 全国ホール導入開始2014-10-06、機械割/合算、BIG200枚/REG50枚、純増約3.0枚/G
   - reliability: ANALYSIS_HIGH
8. HAZUSE — 戦律のストラタス
   - https://hazuse.com/machine/pachislot/4S0609/
   - 型式戦律のストラタスJW、検定番号4S0609、2014-09-29、内部モード/状態
   - reliability: ANALYSIS_HIGH
9. すろぱちくえすと — 朝一設定変更恩恵＆モード移行率・リセット判別
   - https://www.slopachi-quest.com/article/stratas-reset/
   - 設定変更時モード振り分け、据え置き表示G数引継ぎ、設定変更時表示G数リセット
   - reliability: ANALYSIS_SINGLE_CONTEMPORARY
10. ちょんぼりすた — 天井/モード移行率
   - https://chonborista.com/slot/takasago-slot/3734/
   - モード別天井、設定変更時モード振り分けの照合
   - reliability: ANALYSIS_SINGLE_CONTEMPORARY
11. P-WORLD — 戦律のストラタス
   - https://www.p-world.co.jp/machine/database/7513
   - 1セット100枚+α、純増3.0枚/G、機械割照合
   - reliability: INDUSTRY_DATABASE
12. DMMぱちタウン 発表記事
   - https://p-town.dmm.com/specials/281
   - 戦律RUSH初期100枚、純増3.0枚/G、当時発表情報
   - reliability: INDUSTRY_MEDIA

## missingFields

- 設定変更なし単純電源OFF→ON時の天井G/モード/内部状態の直接契約
- 設定変更時の通常/高確A/高確B/超高確開始振り分け
- 据え置き時のCZ周期ポイント/内部高確状態の厳密なRAM契約
- 本機固有ガックンの高信頼確定契約

## conflicts

- 導入日はCONFLICTではなく **スコープ差**: 2014-09-29新潟県先行 / 2014-10-06全国。
- PAYOUTはメーカー発表表96.8/97.8/99.9/103.4/108.4/115.2%に対し、一部二次資料が最大0.1pt差。平均せず主値とSOURCE_ROUNDING_VARIATIONを保持。

coreStatus: COMPLETE_CORE_WITH_DATE_SCOPE_NOTE
resetBehaviorQA: COMPLETE_WITH_SOURCE_LIMITS
