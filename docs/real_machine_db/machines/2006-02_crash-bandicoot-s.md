# クラッシュバンディクーS

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: クラッシュバンディクーS
manufacturer: サミー
releaseDate: 2006-02-05
generation: 5号機初期
systemType: ボーナス主体 / BB+MB+RB

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.6% |
| 2 | 97.7% |
| 3 | 100.0% |
| 4 | 102.7% |
| 5 | 105.3% |
| 6 | 108.3% |

P-WORLD、グリーンべると、5号機クロニクルで一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

### BIG
| 設定 | BIG |
|---|---:|
| 1 | 1/324.4 |
| 2 | 1/310.6 |
| 3 | 1/296.5 |
| 4 | 1/280.1 |
| 5 | 1/265.3 |
| 6 | 1/250.1 |

### MB
| 設定 | MB |
|---|---:|
| 1 | 1/851.1 |
| 2 | 1/799.2 |
| 3 | 1/744.7 |
| 4 | 1/697.2 |
| 5 | 1/655.4 |
| 6 | 1/612.5 |

### RB
| 設定 | RB |
|---|---:|
| 1 | 1/3449.3 |
| 2 | 1/3276.8 |
| 3 | 1/2878.9 |
| 4 | 1/2621.4 |
| 5 | 1/2427.3 |
| 6 | 1/2259.9 |

P-WORLDで設定別全値、グリーンべるとで設定1〜6端点を照合。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」等へ検索語を変えて再探索したが、比較可能な通常時ベースを確認できなかった。

## netIncrease

該当なし。今回確認した一次業界記事では出玉増加RT/ARTを主要性能として扱っておらず、ボーナス主体として記録する。

## basicPayout

- BIG: 純増約300枚
- MB: 純増約200枚
- RB: 純増約100枚

信頼度: INDUSTRY

## modeSpecificMinimumData

- BB/MB/RBの3ボーナス構成
- リプレイ以外の全小役でボーナス同時当選の可能性あり
- 2006年2月5日納品開始
- 有利区間制度導入前

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「クラッシュバンディクーS / クラッシュ・バンディクーS / サミー」に「設定変更 / リセット / 朝一 / 据え置き」を組み合わせて再探索したが、本機固有の設定変更時にゲーム数・状態・ボーナス成立状態をどう処理するかを明記した高信頼資料は確認できずUNVERIFIED。
- 当時一次資料/P-WORLDでは通常時ゲーム数天井や朝一専用モードを主要仕様として確認できない。

carryOverBehavior:
- 据え置き時に追う通常時ゲーム数天井・モード・AT/ARTストックはNONE_CONFIRMED。
- ボーナス成立済み状態等の特殊ケースの持越しはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで朝一専用モード・短縮天井・当選優遇が生じる根拠はNONE_CONFIRMED。
- 成立済みボーナス/表示状態の電断処理はUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。
- リセット/据え置きでホール客が追う公開天井カウンタは確認されない。

ceilingAfterReset:
- NONE_CONFIRMED。

modeAfterReset:
- 通常時のゲーム数モード管理・朝一専用モードはNONE_CONFIRMED。

stateAfterReset:
- 出玉増加RT/ART/ATを当時一次資料で主要仕様として確認できず、朝一狙いに直結する状態再抽選はNONE_CONFIRMED。
- 成立済みボーナス等の特殊状態処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の天井短縮・モード優遇・初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- 「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を表記揺れと組み合わせて再探索したが、本機固有のガックン・表示等による変更判別を高信頼資料で確認できずUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 短縮天井: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると — 人気ゲームがパチスロでも大暴れ！
   - https://web-greenbelt.jp/00004520/
   - 2006-01-13掲載。BB/MB/RB純増、設定1〜6端点確率、出玉率、2006-02-05納品開始。通常時天井/RT/ARTを主要仕様として記載しないこともresetBehavior判定の補助根拠。
   - reliability: INDUSTRY
2. P-WORLD — クラッシュバンディクーS 機種データベース
   - https://www.p-world.co.jp/machine/database/4070
   - 設定別BIG/MB/RB確率、設定別出玉率。天井・朝一専用モード等の掲載を確認できず。
   - reliability: ANALYSIS_HIGH
3. 5号機クロニクル — サミー5号機全機種一覧
   - https://5goki.com/sammy
   - 2006/2導入、設定別機械割。
   - reliability: ANALYSIS_SINGLE
4. pacnk — クラッシュバンディクーS 設定判別ツール
   - https://pacnk.com/slot/tools/sh_kurasshubikuesu.html
   - 設定別BIG/MB/RB確率の補助照合。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / 1000円ベース
- 設定変更/電源OFF→ON時の成立済みボーナス等の特殊状態処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- 5号機クロニクル本文にはA+RTとする記述があるが、同ページの説明が前機種「出ましたハクション大魔王」と重複しており信頼性に疑義がある。グリーンべると当時記事とP-WORLDの確認範囲ではRTを主要性能として確認できないため、本DBではボーナス主体として扱い、RT有無は未採用。

## QA note

- v0.7 resetBehavior遡及QAとして、表記揺れと「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン」を組み替え、当時一次記事、P-WORLD、後年DBを横断。
- 天井・朝一専用モード等はNONE_CONFIRMEDまで整理できたが、成立済みボーナス等の電断/設定変更時処理と変更判別は確定できずPARTIAL。
