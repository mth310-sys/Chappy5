machineName: 秘宝伝～The Last～
manufacturer: 大都技研
releaseDate: 2016-05-30
recordNumber: 983
generation: 5号機
systemType: AT / 差枚数管理 / CZ経由
formalModelName: 秘宝伝 The Last／A3
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 大都技研の「秘宝伝」シリーズ。業界記事は2016-05-17プレス試打会、入替自粛明けの2016-05-29納品開始予定を報道。
- K-Naviはホール導入開始を2016-05-30、期待値見える化も導入日2016-05-30とする。
- ちょんぼりすた等は2016-06-06（ただし一部5/30）とするため、全国一斉/地域先行・導入集計基準差として `CONFLICT_RELEASE_DATE_2016_05_30_VS_2016_06_06_PARTIAL_ROLLOUT` を保持。本DBの時系列キューでは実ホール導入開始を優先しcanonical 2016-05-30。
- 型式名「秘宝伝 The Last／A3」は中古実機DB・実機流通表記で複数確認。検定番号は「型式/検定/5S/大都/A3」等へ検索語を変えても今回直接固定できず推測しない。
reliability: INDUSTRY_ANALYSIS_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
canonical high-consensus series:
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 99.3% |
| 3 | 101.3% |
| 4 | 104.3% |
| 5 | 107.4% |
| 6 | 114.6% |

- ちょんぼりすた・期待値見える化等で上記系列を確認。
- すろぱちくえすとには設定1〜3のみ **96.8 / 99.0 / 100.9%** とする別系列があり、設定4〜6は104.3 / 107.4 / 114.6%で一致。平均せず `CONFLICT_PAYOUT_SETTINGS_1_TO_3` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT

## initialHitBySetting
canonical AT初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/476.8 |
| 2 | 1/447.8 |
| 3 | 1/421.5 |
| 4 | 1/388.9 |
| 5 | 1/355.1 |
| 6 | 1/294.7 |

- ちょんぼりすた丸め値は1/477 / 448 / 422 / 389 / 355 / 295で整合。
- 一部の発売前〜初期資料には **1/268.1 / 249.1 / 230.0 / 204.5 / 182.8 / 141.0** の別系列が「AT当選/初当り」として掲載される。後発解析系列との差が大きく同一定義と断定できないため、canonicalへ混ぜず `CONFLICT_OR_DIFFERENT_DEFINITION_PRE_RELEASE_HIT_SERIES` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_CONFLICT

## baseGamesPer50
- **約47G/50枚**。
- 業界前情報・複数当時解析・P-WORLD系列で一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「秘宝RUSH」: **約3.0枚/G**。
- 差枚数管理型。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- AT「秘宝RUSH」は差枚数管理で、開始時に上乗せ特化ゾーンで初期差枚数を決定。
- P-WORLDは基本仕様を **1セット60枚以上+α** と説明。
- クレアチャレンジ平均上乗せ約200枚、PYRAMID POWER平均約1000枚は業界記事にあるが、物差し用途では初期特化性能の補助値としてのみ保持。
reliability: INDUSTRY_DATABASE

## modeSpecificMinimumData
- 通常天井: **AT間1500GでAT確定**。
- CZ「秘宝CHANCE」はドラゴンバトル / 高確率 / 無限高確率。
- 伝説モードは高確率ループに関わる主要モード。ショート/ロング等を持つが、通常時全移行率はミッション範囲外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は天井ゲーム数を再セットし、内部状態を再抽選。
- 通常最大1500Gに対し、リセット後は最大1000Gへ短縮。
- 設定変更時のみ「伝説予告モード」抽選があり、当選時は初当たり後の伝説モード移行に関わる朝一優遇を持つ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時は前日AT間ゲーム数/天井進捗を引き継ぐ扱い。
- 内部状態も引継ぎ側として解析資料が整理。
- 据え置きと純電源OFF→ONを設定変更と同義扱いしない。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみ: **天井引継ぎ / 状態引継ぎ**。
- 当時のリセット解析表で設定変更との差が明記されている。
reliability: PERIOD_ANALYSIS_HIGH

### gameCounterReset
- 設定変更: **RESET / 新規天井振り分け**。
- 据え置き: **CARRYOVER**。
- 電源OFF→ONのみ: **CARRYOVER**。

### ceilingAfterReset
- 通常: **AT間1500G**。
- 設定変更後: **最大1000G**。
- 公開振り分け:
  - 100G: **1.6%**
  - 300G: **3.1%**
  - 500G: **12.5%**
  - 1000G: **82.8%**
- よって約17.2%が500G以下、全件で通常1500Gより短縮。
reliability: PERIOD_ANALYSIS_HIGH_WITH_NUMERIC_TABLE

### modeAfterReset
- 設定変更時に **伝説予告モード** を抽選。
- 当選率:
  - 設定1: **12.5%**
  - 設定2: **12.9%**
  - 設定3: **13.3%**
  - 設定4: **15.2%**
  - 設定5: **20.3%**
  - 設定6: **25.0%**
- 通常時の全モード移行テーブルは収集対象外。
reliability: PERIOD_ANALYSIS_HIGH_WITH_NUMERIC_TABLE

### stateAfterReset
- 設定変更: **RESELECT / 再抽選**。
- 電源OFF→ONのみ: **CARRYOVER**。
- 朝一状態の詳細振り分け値は、検索語・資料系統を変えた今回の探索で直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大天井1500G→1000Gへ短縮。
- 100/300/500Gの短い天井選択あり。
- 設定変更専用の伝説予告モード抽選あり。
- 朝一客行動へ直接影響する主要恩恵として保存。

### resetPenalties
- 前日AT間ゲーム数/天井進捗は設定変更で失われる。
- 前日有利な内部状態の継続は期待できず再抽選。
- 上記以外の設定変更専用の主要不利数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 当時解析表はガックンについて **リセット「なし??」/ 電源ON-OFF「なし」** としており、設定変更確定判別に使える信頼度ではない。
- 本機固有の確定的ガックン・初期出目・ランプ契約は、機種名/型式/メーカーと「ガックン/設定変更/リセット/朝一/据え置き」へ検索語を変えても **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井短縮や初当たり後の伝説挙動は事後的な変更推測材料になりうるが、朝一即時の確定判別ではない。

### numericResetData
- リセット天井: 100G 1.6% / 300G 3.1% / 500G 12.5% / 1000G 82.8%。
- 伝説予告モード当選率: 設定1→6 **12.5 / 12.9 / 13.3 / 15.2 / 20.3 / 25.0%**。
- リセット後ゾーン実践値の存在は確認したが、解析値と混同せずDB本値には転記しない。

## dataQualityNotes
- releaseDateは5/30導入開始を示すK-Navi・期待値見える化と、6/6（一部5/30）を示す解析資料が競合。業界記事の5/29納品開始予定も5/30実導入開始を支持するため、本DBの時系列canonicalは2016-05-30。ただし全国展開基準差をCONFLICTとして保持。
- 機械割は設定1〜3に97.1/99.3/101.3 と96.8/99.0/100.9の軽微競合あり。
- 初当たりは後発解析の1/476.8〜1/294.7系列と、初期資料の1/268.1〜1/141.0系列が大きく競合。定義差の可能性が高いため平均しない。
- 型式A3は複数実機流通資料で確認したが検定番号は未固定。

## sources
取得日: 2026-09-08

1. グリーンべると / P-WORLD業界ニュース — 純増3.0枚/Gでパワーアップした『秘宝伝The Last』
   - https://web-greenbelt.jp/00008656/
   - 2016-05-17プレス試打会、純増3.0枚/G、差枚数管理AT、5/29納品開始予定。
   - reliability: INDUSTRY
2. K-Navi — 秘宝伝 ～The Last～
   - https://p-kn.com/slot/2499/
   - ホール導入開始2016-05-30、設定別AT初当たり等。
   - reliability: PERIOD_ANALYSIS_DATABASE
3. 期待値見える化 — 秘宝伝ザラスト 天井・ゾーン・狙い目・やめどき解析
   - https://slotjin.com/zone/hihouden-thelast/
   - 導入日2016-05-30、AT初当たり精密値、47G/50枚、純増3.0枚/G、リセット恩恵。
   - reliability: PERIOD_ANALYSIS_HIGH
4. ちょんぼりすた — 秘宝伝 The Last｜天井・設定判別・解析の総まとめ
   - https://chonborista.com/slot/daito-slot/20454/
   - 2016-06-06（一部5/30）、機械割、AT初当たり、47G、純増3.0枚/G、天井、リセット天井・伝説予告。
   - reliability: PERIOD_ANALYSIS_HIGH
5. すろぱちくえすと — 秘宝伝 TheLast｜設定変更(リセット)挙動・恩恵・狙い目
   - https://www.slopachi-quest.com/article/hihouden-thelast-reset/
   - 設定変更=天井最大1000G/状態再抽選、電源ON-OFF=天井・状態引継ぎ、100/300/500/1000G振り分け、伝説予告モード設定別当選率。
   - reliability: PERIOD_ANALYSIS_HIGH
6. P-WORLD — 秘宝伝～TheLast～
   - https://www.p-world.co.jp/machine/database/8040
   - 5号機AT、純増約3.0枚/G、AT間1500G、設定変更最大1000G、約20%で500G以下、1セット60枚以上+α。
   - reliability: INDUSTRY_DATABASE
7. パチマ — 秘宝伝～TheLast～ 中古実機
   - https://www.pachima.com/c/slot/s_24daitok/S00153
   - 型式名「秘宝伝 The Last／A3」、2016年5月、AT仕様、天井/リセット概要。
   - reliability: SECONDARY_HARDWARE_DATABASE
8. パチスロバンク — 秘宝伝～TheLast～【A3】
   - https://pachislobank.com/SHOP/s-daito0048.html
   - A3型式表記の別系統確認。
   - reliability: SECONDARY_HARDWARE_DATABASE
9. スロット解析情報~すろかい~ — 秘宝伝 THELAST 解析情報
   - https://slotkaiseki.hatenablog.com/entry/%E7%A7%98%E5%AE%9D%E4%BC%9D%EF%BC%B4%EF%BC%A8%EF%BC%A5%EF%BC%AC%EF%BC%A1%EF%BC%B3%EF%BC%B4
   - 2016-06-06導入、初期資料側の1/268.1〜1/141.0系列確認。CONFLICT検証用。
   - reliability: PERIOD_SECONDARY_ANALYSIS

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更後の詳細な内部状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有の確定ガックン/初期出目契約: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- CONFLICT_RELEASE_DATE_2016_05_30_VS_2016_06_06_PARTIAL_ROLLOUT
- CONFLICT_PAYOUT_SETTINGS_1_TO_3
- CONFLICT_OR_DIFFERENT_DEFINITION_PRE_RELEASE_HIT_SERIES
