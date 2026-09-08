# ニューオアシス

machineName: ニューオアシス
manufacturer: パイオニア
releaseDate: 2006-02-05
generation: 5号機初期
systemType: ノーマル / 完全告知 / BB+RB

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 103.0% |
| 5 | 105.0% |
| 6 | 108.0% |

グリーンべるとで設定1/6端点、5号機クロニクルで設定別全値を確認。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

### BIG
| 設定 | BIG |
|---|---:|
| 1 | 1/300 |
| 2 | 1/290 |
| 3 | 1/280 |
| 4 | 1/270 |
| 5 | 1/262 |
| 6 | 1/256 |

### RB
| 設定 | RB |
|---|---:|
| 1 | 1/668 |
| 2 | 1/630 |
| 3 | 1/595 |
| 4 | 1/565 |
| 5 | 1/537 |
| 6 | 1/496 |

グリーンべるとで設定1/6端点、pacnkで設定別全値を確認。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

1000円あたり平均34G（20円スロット50枚相当）

信頼度: INDUSTRY

## netIncrease

該当なし。

## basicPayout

- BIG: 純増336枚（345枚超の払い出しで終了。スイカ取りこぼし時を除く）
- RB: 純増168枚

信頼度: INDUSTRY

## modeSpecificMinimumData

- 6段階設定
- 完全告知機
- 型式名: P5NSB
- 2006年2月5日納品開始予定

## resetBehavior

schemaVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-08

本機は通常ノーマル/完全告知機で、公開資料上は天井・モード管理・RT/ART・有利区間を持つ機種として扱われていない。したがって、AT/ART機のようなゲーム数天井短縮や朝一専用モードは非該当。一方、設定変更/据え置き/純電源OFF→ON時の成立済みボーナス・告知状態・初期出目等の本機固有契約は、表記揺れ・型式名 P5NSB を含めて再探索しても直接固定できず、一般的なノーマル機挙動から推測しない。

### settingChangeBehavior
- 天井/ゲーム数解除/AT・ARTモード: **NOT_APPLICABLE**。
- 設定変更時の成立済みボーナス、告知状態等の本機固有内部処理: **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 朝一攻略対象となる天井ゲーム数・AT/ARTモードの持越し: **NOT_APPLICABLE**。
- 据え置き時の成立済みボーナス/告知状態の直接契約: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 純電源OFF→ONのみの成立済みボーナス、告知ランプ、初期出目等の直接契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更と純電断を同義扱いしない。

### gameCounterReset
- 内部天井ゲーム数: **NOT_APPLICABLE_NO_CEILING**。

### ceilingAfterReset
- 通常天井: **NONE / NOT_APPLICABLE**。
- 設定変更後短縮天井: **NONE / NOT_APPLICABLE**。

### modeAfterReset
- ゲーム数モード/天国モード: **NOT_APPLICABLE_NORMAL_TYPE**。
- 朝一専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- RT/ART状態: **NOT_APPLICABLE**。
- 成立済みボーナス等の瞬間的内部状態の変更/電断処理: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_EARLY**。

### resetBenefits
- リセット短縮天井、朝一CZ、天国優遇等: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 前日ハマリ消去等: **NOT_APPLICABLE_NO_CEILING**。
- 設定変更固有の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 「ニューオアシス / P5NSB / パイオニア」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リールガックン / 初期出目 / ハイビスカス」を組み替えて再探索。
- 本機固有の確定的な設定変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- グリーンべるとでレバーON時50%、全リール停止時12.5%、次ゲームレバーON時37.5%の通常ボーナス告知タイミングは確認できるが、これはresetDetectionではないため混入させない。

### numericResetData
- 通常天井: **NONE**。
- 設定変更後短縮天井: **NONE**。
- 設定変更時モード振り分け: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetBehavior 再探索メモ
2026-09-08、前回探索に加え以下を再実施。
- 「ニューオアシス 設定変更 リセット 朝一 パイオニア」
- 「ニューオアシス 据え置き 電源OFF ON」
- 「ニューオアシス ガックン 設定変更」
- 「ニューオアシス 朝一 2006」
- 「P5NSB 設定変更」
- 当時業界記事、5号機回顧DB、古い解析系を再横断。

グリーンべるとの2006-01-20当時記事では型式P5NSB、完全告知ノーマル、性能コアおよび告知タイミングまで確認できるが、設定変更/据え置き/純電断の契約は記載なし。5号機クロニクルも性能資料でありreset固有記載はない。よって性能側 `COMPLETE_CORE` は維持し、reset QAだけ `PARTIAL_RESEARCH_EXHAUSTED` とする。

## sources

取得日: 2026-09-08

1. グリーンべると — パイオニア初の5号機『ニューオアシス』
   - https://web-greenbelt.jp/00004505/
   - 2006-01-20掲載。型式P5NSB、設定1/6のBIG・RB・合成確率、出玉率、BIG/RB純増、1000円平均34G、2006-02-05納品開始予定、完全告知仕様と告知タイミング。
   - reliability: INDUSTRY_PERIOD_HIGH
2. 5号機クロニクル — パイオニア5号機全機種一覧
   - https://5goki.com/pioneer
   - 2006/2導入、設定別機械割。
   - reliability: ANALYSIS_SINGLE
3. pacnk — ニューオアシスのハマリ確率計算
   - https://pacnk.com/slot/tools/hamari.php?id=newoashisu
   - 設定別BIG/RB確率。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 性能コア: なし（COMPLETE_CORE維持）
- resetBehavior: 設定変更/据え置き/純電源OFF→ON時の成立済みボーナス・告知状態・初期出目等の本機固有直接契約

## conflicts

- 現時点で物差し項目の重大な数値競合は確認していない。

## QA status

- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
- resetRetroactiveQA: 2026-09-08再探索完了
