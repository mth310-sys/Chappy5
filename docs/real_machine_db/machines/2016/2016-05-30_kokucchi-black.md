machineName: コクッチーブラック
manufacturer: タイヨー
releaseDate: 2016-05-30
recordNumber: 982
generation: 5号機
systemType: ノーマルA / 完全告知
formalModelName: コクッチーブラック
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- タイヨーが2016年3月に発表、4月7日にプレス発表会を開催。業界資料は2016年5月導入予定と報道。
- 当時解析「ちょんぼりすた」は2016-05-30導入と明記。本DBのreleaseDate canonicalは2016-05-30。
- 型式表記は複数資料で「コクッチーブラック」まで確認したが、検定番号は表記揺れ/古DB/検定語を変えた再探索でも今回直接固定できず、推測しない。
reliability: INDUSTRY_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 94.9% |
| 2 | 98.6% |
| 3 | 100.9% |
| 4 | 104.7% |
| 5 | 109.4% |
| 6 | 113.5% |

- 当時解析の丸め系列。pacnk精密整理は 94.92 / 98.64 / 100.95 / 104.72 / 109.41 / 113.50%。
- グリーンべるとのメーカー発表記事は設定6 **113.59%** と報道。0.09pt差は丸め/資料差として原値を併記し平均しない。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
canonical精密系列（pacnk）:
| 設定 | BIG | REG |
|---:|---:|---:|
| 1 | 1/307.68 | 1/390.10 |
| 2 | 1/292.57 | 1/354.25 |
| 3 | 1/282.48 | 1/337.81 |
| 4 | 1/270.81 | 1/295.21 |
| 5 | 1/258.02 | 1/270.81 |
| 6 | 1/255.00 | 1/225.99 |

当時解析丸め系列（ちょんぼりすた）:
- BIG: **1/309 / 293 / 282 / 271 / 258 / 255**。
- REG: **1/390 / 354 / 338 / 295 / 271 / 226**。
- 合算: **約1/172 / 160 / 154 / 141 / 132 / 120**。
- グリーンべるとの発表値は合成 **1/172.92〜1/119.81** とし、上下端で整合。
- 後年回顧1資料にBIG/REGの別系列（例:設定1 BIG1/293.88・REG1/420.10）があるため、平均せず `CONFLICT_RETROSPECTIVE_BONUS_SERIES` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SECONDARY_CONFLICT

## baseGamesPer50
| 設定 | 50枚あたり |
|---:|---:|
| 1 | 35.1G |
| 2 | 35.4G |
| 3 | 35.7G |
| 4 | 36.0G |
| 5 | 36.4G |
| 6 | 36.7G |

- パチマガスロマガと当時解析で一致。
- canonical comparison value: **設定1 35.1G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- **NOT_APPLICABLE_NORMAL_TYPE**。
- AT/ART/RTによる継続純増機ではない。

## basicPayout
- BIG BONUS: **最大312枚**。
- REG BONUS: **最大104枚**。
- 業界発表、P-WORLD、当時解析で一致。
reliability: INDUSTRY_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 天井: **非搭載**。
- 通常時ゲーム数モード/ゾーン: **NOT_APPLICABLE**。
- 完全告知のノーマルAタイプ。AT/ART/CZを持たない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_NO_RESET_ADVANTAGE_FOUND
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ゲーム数天井・モード管理・AT/ART状態を持たないノーマルAタイプのため、設定変更による天井再セット/短縮、モード再抽選、朝一CZ等は **NOT_APPLICABLE**。
- 本機固有の設定変更後専用ボーナス当選率・朝一優遇値は、機種名/メーカー/型式表記と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」を組み替えた再探索でも **NONE_CONFIRMED_AFTER_RESEARCH**。
- 成立済みボーナスや告知状態を設定変更がどう処理するかは直接資料がなく推測しない。
reliability: ANALYSIS_HIGH_FOR_NA_STRUCTURE / UNVERIFIED_FOR_EDGE_STATE

### carryOverBehavior
- 天井ゲーム数/通常モード: **NOT_APPLICABLE**。
- 据え置きによるゲーム数恩恵・モード恩恵: **NONE / NOT_APPLICABLE**。
- 成立済みボーナス/告知状態等の特殊な閉店跨ぎ処理は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 天井/モード: **NOT_APPLICABLE**。
- 純電源OFF→ON時の成立済みボーナス、告知ランプ表示、出目復帰等の本機固有契約は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更と純電断を同義扱いしない。

### gameCounterReset
- 通常時ゲーム数天井: **NOT_APPLICABLE / NONE**。
- 天井カウンタ: **NOT_APPLICABLE**。

### ceilingAfterReset
- **NOT_APPLICABLE**。天井非搭載。
- 設定変更専用短縮天井: **NONE**。

### modeAfterReset
- ゲーム数モード/天国等: **NOT_APPLICABLE**。
- 朝一専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- AT/ART高確などの通常時内部状態: **NOT_APPLICABLE**。
- ノーマル機の成立済みボーナス等のエッジ状態は直接資料不足のため推定しない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、朝一高確、CZ優遇、モード優遇: **NONE / NOT_APPLICABLE**。
- 公開された設定変更専用の主要朝一恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 前日天井進捗喪失: **NOT_APPLICABLE**。
- 公開された設定変更専用の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、告知ランプ等による確定的な設定変更/据え置き判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時の小役/ボーナス確率は設定推測材料だが、朝一リセット判別とは別物として扱う。

### numericResetData
- 設定変更時モード振り分け: **NOT_APPLICABLE**。
- リセット短縮天井: **NOT_APPLICABLE**。
- 朝一特定G以内当選率/専用CZ率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 業界発表は合成1/172.92〜1/119.81、設定6出玉率113.59%。当時解析の丸め合算約1/172〜1/120、設定6 113.5%と実質整合するが、原値は双方保持。
- pacnk精密BIG/REG系列と、後年回顧1資料のBIG/REG系列に差がある。平均せずcanonical + `CONFLICT_RETROSPECTIVE_BONUS_SERIES` として保存。
- 本機は天井なしノーマルAなのでresetBehaviorの大半は構造上非該当。ただし純電断や成立済みボーナス状態を一般論で埋めない。

## sources
取得日: 2026-09-08

1. グリーンべると / P-WORLD業界ニュース — 驚きあり笑いありの発表会で、話題の新機種をPR
   - https://news.p-world.co.jp/articles/8292/greenbelt
   - タイヨー発表会、後継機、5月導入予定。
   - reliability: INDUSTRY
2. グリーンべると — 告知ランプは8種類！進化した「コクッチー」登場
   - https://web-greenbelt.jp/00008501/
   - ノーマルタイプ、BIG312枚/REG104枚、合成1/172.92〜1/119.81、設定6 113.59%、納品4月中旬〜6月上旬予定。
   - reliability: INDUSTRY
3. 娯楽産業 — タイヨー 新機種「コクッチーブラック」発表
   - https://www.goraku-sangyo.com/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%B3%E3%82%AF%E3%83%83%E3%83%81%E3%83%BC%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%80%8D%E7%99%BA%E8%A1%A8/
   - 2016-04-07発表会、5月導入予定、Aタイプ、獲得枚数。
   - reliability: INDUSTRY
4. P-WORLD — コクッチーブラック
   - https://www.p-world.co.jp/machine/database/8015
   - タイヨー、5号機ノーマル/完全告知、BIG最大312枚、REG最大104枚。
   - reliability: INDUSTRY_DATABASE
5. ちょんぼりすた — コクッチーブラック スペック・設定判別・攻略解析
   - https://chonborista.com/slot/taiyo/19545/
   - 2016-05-30導入、設定別BIG/REG/合算/機械割、設定別50枚ベース、天井なし。
   - reliability: PERIOD_ANALYSIS_HIGH
6. パチマガスロマガ — コクッチーブラック 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/83/c.php
   - 設定別50枚あたり35.1〜36.7G。
   - reliability: ANALYSIS_HIGH
7. pacnk — コクッチーブラック 設定判別ツール
   - https://pacnk.com/slot/tools/sh_kokutchiburakku.html
   - 設定別BIG/REG精密系列、機械割精密系列。
   - reliability: SECONDARY_DATABASE
8. PiDEA X — タイヨー「コクッチー」第2弾もオマージュたっぷり
   - https://www.pidea.jp/articles/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%80%8C%E3%82%B3%E3%82%AF%E3%83%83%E3%83%81%E3%83%BC%E3%80%8D%E7%AC%AC2%E5%BC%BE%E3%82%82%E3%82%AA%E3%83%9E%E3%83%BC%E3%82%B8%E3%83%A5%E3%81%9F%E3%81%A3%E3%81%B7%E3%82%8A
   - 2016-03-08発表、合算1/172〜1/119、BIG312枚/REG104枚、納品レンジ。
   - reliability: INDUSTRY
9. 肉汁 — コクッチーブラック回顧
   - https://www.nikuziru.com/archives/2954
   - 天井なし。BIG/REGに別系列があるためCONFLICT確認用。
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の成立済みボーナス/告知状態処理: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の成立済みボーナス/告知表示処理: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン等の確定的変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `BONUS_PROBABILITY_RETROSPECTIVE_CONFLICT`: pacnk/当時解析系列 vs 後年回顧1資料のBIG/REG系列。平均せず両根拠を保持。
- `SETTING6_PAYOUT_MINOR`: 当時解析 **113.5%** / pacnk **113.50%** vs グリーンべると発表 **113.59%**。平均せず原値保持。
