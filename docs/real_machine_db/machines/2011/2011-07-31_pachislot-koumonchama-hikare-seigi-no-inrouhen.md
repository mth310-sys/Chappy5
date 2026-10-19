# ぱちすろ黄門ちゃま 光れ!正義の印籠編!

machineName: ぱちすろ黄門ちゃま 光れ!正義の印籠編!
manufacturer: オリンピア
releaseDate: 2011-07-31
releaseDateStatus: DATE_DEFINITION_DIFFERENCE; グリーンべるとは2011-07-31納品開始予定、パチビーは2011-08-01導入日。平均化せず分離し、時系列キーは現存する具体的な最古の市場投入日2011-07-31を採用。
generation: 5号機
systemType: A+ART / CZ（ぱちんこゾーン） / ストック+ループART
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_WITH_CEILING_RESET_CONFIRMED
formalModelName: ぱちすろ黄門ちゃまA

## chronologyNote

- 最新mainのrecordCount 594 / chronologicalFrontier 2011-07-22「GRADIUS THE SLOT」から継続。
- 2011-07-22同日群および07-23〜07-30境界を外部導入カレンダー・当時業界記事で再監査。GRADIUSの07-24納品/07-25導入は同一機の定義差で重複追加しない。
- 次の具体日付き未登録5号機として本機を確定。グリーンべると2011-06-17記事は07-31納品開始予定、パチビーは08-01導入日。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.7% |
| 2 | 98.8% |
| 3 | 101.3% |
| 4 | 104.7% |
| 5 | 108.5% |
| 6 | 112.2% |

P-WORLD、パチビー、pacnk、当時グリーンべるとで一致。
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG合算
| 設定 | 確率 |
|---|---:|
| 1 | 1/387.8 |
| 2 | 1/387.8 |
| 3 | 1/356.2 |
| 4 | 1/350.5 |
| 5 | 1/318.1 |
| 6 | 1/310.6 |

### REG合算
| 設定 | 確率 |
|---|---:|
| 1 | 1/412.2 |
| 2 | 1/412.2 |
| 3 | 1/402.1 |
| 4 | 1/381.0 |
| 5 | 1/376.6 |
| 6 | 1/339.6 |

### ボーナス合算
| 設定 | 確率 |
|---|---:|
| 1 | 1/199.8 |
| 2 | 1/199.8 |
| 3 | 1/188.9 |
| 4 | 1/182.6 |
| 5 | 1/172.5 |
| 6 | 1/162.2 |

### ART初当たり
| 設定 | 確率 |
|---|---:|
| 1 | 1/345.7 |
| 2 | 1/292.6 |
| 3 | 1/325.1 |
| 4 | 1/242.0 |
| 5 | 1/271.7 |
| 6 | 1/195.7 |

P-WORLD/パチビー精密値とpacnk丸め値、グリーンべると両端値が整合。
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

1000円あたりゲーム数（パチマガスロマガ）:

| 設定 | G/50枚 |
|---|---:|
| 1 | 36.73G |
| 2 | 36.75G |
| 3 | 36.79G |
| 4 | 36.83G |
| 5 | 36.87G |
| 6 | 36.92G |

グリーンべるとの36.7〜36.9Gとも一致。
confidence: CONTEMPORARY_ANALYSIS_AND_INDUSTRY_CROSSCHECKED

## netIncrease

- ART「黄門ちゃんす」: **約+1.2枚/G**
- 1セット: **30G**
- ストック消化後は非継続/50/67/75/82%のループ率を持つ。
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- 天下泰平ボーナス: **約204枚**
- BIG: **約204枚**
- REG: **約48枚**
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 「ぱちんこゾーン」は黄門ちゃんす突入前のART/CZ区間で、開運ちゃんす・確変・時短（および祭確変）の状態を持つ。
- 開運ちゃんすは通常時の抽選またはボーナス後の一部から入り最低20G。
- 時短は通常黄門ちゃんす終了後20G。
- 確変は図柄揃いまで継続し、黄門ちゃんすの次回継続を保証。
- 黄門ちゃんすは通常/確変/極の3系統。ストック+ループ型。
- 通常時1280G（ボーナス間）消化で天井状態に入り、潜伏を経てARTへ。恩恵はART5ストック+継続率MAX82%。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。pacnk当時機種ページに「天井は設定変更でリセットされる」と直接記載。したがって少なくともボーナス間1280G天井進捗は設定変更でCLEAR。ARTストック、ループモード、ぱちんこゾーン状態等の設定変更処理は本機固有の公開本文を安全に確定できず **UNVERIFIED_AFTER_RESEARCH**。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗・ART関連権利・ぱちんこゾーン状態を本機固有の直接資料で確定できず。設定変更時CLEARから据え置きRETAINを一般則で補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の天井進捗、状態、液晶/ステージ復帰仕様を直接確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。通常天井はボーナス間1280Gで、pacnkが設定変更時リセットを明記。

ceilingAfterReset: **1280G_NORMAL_CEILING; RESET_SHORTENING_NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後専用の短縮天井は確認できず。通常天井恩恵はART5ストック+MAX82%ループ。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のループモード/確変・時短・開運ちゃんす関連状態の初期振り分けを直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の通常内部状態・ぱちんこゾーン状態の処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後だけの天井短縮、専用高確、ART優遇、朝一特定G以内当選率などの公開数値は確認できず。

resetPenalties: **CEILING_PROGRESS_LOSS_CONFIRMED_IF_SETTING_CHANGED**。前日ボーナス間ハマリが存在していた場合、設定変更で1280G天井進捗がクリアされる点は朝一狙いに対する不利。その他のストック/状態消失は未確認のため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ステージ、液晶挙動等による本機固有の変更判別を、公式・業界・当時解析・旧DB・回顧資料を横断しても安全に確定できず。

numericResetData:
- 通常天井: **ボーナス間1280G**
- 天井恩恵: **ART5ストック + 継続率MAX82%**
- 設定変更時天井進捗: **CLEAR**
- 設定変更後短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード/状態振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 変更判別公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; CEILING_RESET_DIRECTLY_CONFIRMED, CARRYOVER/POWER_CYCLE/MODE/STATE/DETECTION_UNVERIFIED_AFTER_RESEARCH**

## conflicts

1. **日付定義差**
   - グリーンべると: 2011-07-31から納品開始予定
   - パチビー: 2011-08-01導入日
   - 評価: `DATE_DEFINITION_DIFFERENCE`。平均化せず、時系列キーは最古の具体的市場投入日07-31。
2. **後年5号機回顧DBの誤混同**
   - 一部回顧ページには後年「黄門ちゃま喝」系の仕様（純増2.0枚/G、印籠RUSH等）が本機欄へ混入している記述がある。
   - P-WORLD、当時グリーンべると、パチビー、パチマガ、pacnkの同時代資料と矛盾するため採用しない。

## missingFields

- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- reset-specific short ceiling / morning hit rate: **NONE_CONFIRMED_AFTER_RESEARCH**

## sources

取得日: 2026-09-04

- オリンピア 2011年発売機種: https://www.olympia.co.jp/official/products/2011.html
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/4742/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/6406
- パチビー: https://www.pachibee.jp/machines/index/211060008
- パチマガスロマガ TOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/40/heiwa_slot_40.php
- パチマガスロマガ 小役/1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/40/c.php
- pacnk: https://pacnk.com/slot/2011/koumon3/top.php

## sourceConfidence

**HIGH for performance core and normal ceiling; MEDIUM/PARTIAL for resetBehavior.**
主要スペック・ART構造・天井は当時業界/P-WORLD/パチビー/パチマガ/pacnkで複数照合。設定変更時の天井CLEARは直接記述あり。電源OFF→ON、据え置き、設定変更時の内部モード/状態、変更判別は十分な再探索後も本機固有の直接本文を確定できずUNVERIFIED。
