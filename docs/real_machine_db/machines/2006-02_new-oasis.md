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

resetBehaviorQA: PARTIAL

本機は通常ノーマル/完全告知機で、公開資料上は天井・モード管理・RT/ART・有利区間を持つ機種として扱われていない。したがって、AT/ART機のようなゲーム数天井短縮や朝一専用モードの確認対象は原則非該当。一方、設定変更/据え置き/電源OFF→ON時の告知状態や内部ボーナス成立状態の扱い、ガックン等の変更判別については高信頼資料を確定できなかったため推測しない。

- settingChangeBehavior: UNVERIFIED（高信頼な設定変更時挙動資料を確認できず）
- carryOverBehavior: UNVERIFIED（据え置き固有挙動の公開資料を確認できず）
- powerCycleBehavior: UNVERIFIED（電源OFF→ONのみの固有差を確認できず）
- gameCounterReset: 天井ゲーム数管理は非該当。前日ゲーム数を朝一攻略要素として用いる公開仕様は確認できず
- ceilingAfterReset: 非該当（公開仕様上、天井を確認できず）
- modeAfterReset: 非該当（モード管理を確認できず）
- stateAfterReset: RT/ART状態は非該当。内部ボーナス成立状態等の電断/変更処理はUNVERIFIED
- advantageousSectionReset: 非該当（5号機初期。有利区間制度導入前）
- resetBenefits: 公開された朝一/設定変更恩恵を確認できず
- resetPenalties: 公開された設定変更時の主要不利要素を確認できず
- resetDetection: ガックン等の変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

2026-08-31に以下の語・資料系統で再探索した。

- 「ニューオアシス 設定変更」
- 「ニューオアシス リセット 朝一」
- 「ニューオアシス 据え置き」
- 「ニューオアシス 電源OFF ON」
- 「ニューオアシス ガックン」
- 当時業界記事、解析/攻略サイト、古いDB、後年回顧資料

当時グリーンべるとでは本機が完全告知型の5号機ノーマル仕様であること、ボーナス確率・払い出し・通常時ベース・告知タイミングは確認できるが、設定変更/据え置き/電源断時の朝一攻略に関する具体的数値や挙動は記載されていない。

## sources

取得日: 2026-08-31

1. グリーンべると — パイオニア初の5号機『ニューオアシス』
   - https://web-greenbelt.jp/00004505/
   - 2006-01-20掲載。設定1/6のBIG・RB・合成確率、出玉率、BIG/RB純増、1000円平均34G、2006-02-05納品開始予定。完全告知型ノーマル仕様確認にも使用
   - reliability: INDUSTRY
2. 5号機クロニクル — パイオニア5号機全機種一覧
   - https://5goki.com/pioneer
   - 2006/2導入、設定別機械割
   - reliability: ANALYSIS_SINGLE
3. pacnk — ニューオアシスのハマリ確率計算
   - https://pacnk.com/slot/tools/hamari.php?id=newoashisu
   - 設定別BIG/RB確率
   - reliability: ANALYSIS_SINGLE

## missingFields

- 性能コア: なし（COMPLETE_CORE維持）
- resetBehavior: 設定変更/据え置き/電源OFF→ON固有挙動、変更判別の高信頼根拠

## conflicts

- 現時点で物差し項目の重大な数値競合は確認していない。

## QA status

- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL
- resetRetroactiveQA: 2026-08-31実施
