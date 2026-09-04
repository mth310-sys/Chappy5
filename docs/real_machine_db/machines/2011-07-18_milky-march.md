# ミルキーマーチ

machineName: ミルキーマーチ
manufacturer: パイオニア
releaseDate: 2011-07-18
releaseDateStatus: INDUSTRY_EXACT_SHIPMENT_DATE; グリーンべるとが2011-07-18納品開始予定を明記。パイオニア公式製品一覧は2011年7月発売。
generation: 5号機
systemType: ノーマルAタイプ / 完全告知 / 25Φ
coreStatus: COMPLETE_CORE_WITH_FORMAL_MODEL_UNVERIFIED
resetQaStatus: PARTIAL_RESET_QA
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH

## chronologyNote

- 最新mainのrecordCount 592 / chronologicalFrontier 2011-07-15から継続。
- LATEST_HANDOFF指定に従い2011-07-15同日群と2011-07-16〜07-17境界を監査。今回の検索範囲で、より古い具体日付き未登録5号機を安全に確定できなかったため、次候補ミルキーマーチへ進行。
- グリーンべると2011-06-09記事が7月18日納品開始予定を明記。パイオニア公式も2011年7月発売として整合。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.4% |
| 3 | 100.6% |
| 4 | 102.8% |
| 5 | 105.1% |
| 6 | 107.4% |

パチマガスロマガとpacnkで設定1〜6が一致。グリーンべると業界記事も設定1 96.9%〜設定6 107.4%を報道。
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
| 設定 | 確率 |
|---|---:|
| 1 | 1/287 |
| 2 | 1/282 |
| 3 | 1/277 |
| 4 | 1/270 |
| 5 | 1/268 |
| 6 | 1/264 |

### REG
| 設定 | 確率 |
|---|---:|
| 1 | 1/455 |
| 2 | 1/436 |
| 3 | 1/356 |
| 4 | 1/324 |
| 5 | 1/273 |
| 6 | 1/264 |

### ボーナス合算
| 設定 | 確率 |
|---|---:|
| 1 | 1/176 |
| 2 | 1/171 |
| 3 | 1/156 |
| 4 | 1/147 |
| 5 | 1/135 |
| 6 | 1/132 |

パチマガスロマガの設定別値。BIG/REG両端と合算両端はグリーンべると記事でも整合。pacnkのBIG/REG設定別値とも一致。
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **約35.0〜36.4G / 1000円（50枚）**

グリーンべると業界記事が1000円あたり35G〜36.4Gと公表。設定別の対応内訳は今回の資料では直接確定できないためレンジとして保持し、設定別値へ推測配分しない。
confidence: INDUSTRY

## netIncrease

**NOT_APPLICABLE_NORMAL_TYPE**。ボーナスのみでコインを増やすノーマルタイプ。

## basicPayout

- BIG: **約325枚**（規定払い出し336枚）
- REG: **約104枚**（規定払い出し105枚）

グリーンべるとがBB純増325枚/RB純増104枚、パチマガスロマガがBIG約325枚（336枚払い出し）/REG約104枚（105枚払い出し）と一致。
confidence: INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 25Φ、パイオニア初の後告知メイン完全告知機。
- PAOPAO♪ランプでボーナス告知。
- グリーンべるとでは告知タイミング1/4先告知・3/4後告知。パチマガスロマガ基本システム本文はレバーON〜ストップボタン有効時まで1/3、第3停止後3/4との記載があり、比率表記が数学的に整合しないため告知タイミング詳細はCONFLICT/記載不整合として保持し、物差しコアには使用しない。
- チェリー・ベル等とのボーナス同時当選あり。
- pacnkで天井機能非搭載を確認。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名/メーカー/シリーズ名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 出目 / ランプ」を組み替え、パチマガスロマガの本機専用「朝イチ・設定変更」項目の存在、pacnk、メーカー公式、業界記事、検索インデックスを横断したが、設定変更時の出目・ランプ・内部低レベル状態処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の出目・ランプ等の保持仕様を本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の出目・PAOPAO♪ランプ等の挙動を直接確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。pacnkが「天井機能は非搭載」と明記。通常ゲーム数天井・規定G数解除の進捗CLEAR/RETAIN比較対象なし。

ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。通常天井が非搭載のため、リセット専用天井短縮も比較対象なし。別の朝一救済数値は確認できず。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED_AFTER_RESEARCH**。ノーマル機としてボーナスを毎ゲーム抽選する構成で、天国/通常等の長期ゲーム数モードは確認されない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の低レベル内部状態/告知状態を本機固有資料で確定できず。長期ゲーム数モードは非該当。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。短縮天井、朝一専用モード、設定変更後のボーナス当選率優遇、特定G以内当選率等の公開値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の公開不利要素を確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、PAOPAO♪ランプ状態等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 通常ゲーム数天井: **NONE / 天井機能非搭載**
- リセット専用短縮天井: **NOT_APPLICABLE**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE_NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED; LOW_LEVEL_STATE UNVERIFIED**
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL_BY_SYSTEM_DATA; NO_GAME_COUNT_CEILING CONFIRMED; SETTING_CHANGE/CARRYOVER/POWER_CYCLE/LOW_LEVEL_STATE/DETECTION UNVERIFIED_AFTER_RESEARCH**

## conflicts

- 性能コアの主要数値に重大CONFLICTなし。設定別BIG/REG/機械割はパチマガスロマガとpacnkで一致し、両端は業界記事でも整合。
- 告知タイミングはグリーンべると「1/4先告知・3/4後告知」に対し、パチマガスロマガ基本システム本文が「レバーON〜ストップボタン有効時まで1/3、第3停止後3/4」と記載。後者は合計が1にならず、転記/表記不整合の可能性があるため平均・補正せずCONFLICT_NOTEとして保持。

## missingFields

- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior details: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset low-level details: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

2026-09-04取得。「ミルキーマーチ / パイオニア / PIONEER」と「導入日 / 納品 / 発売 / 機械割 / 出玉率 / BIG / REG / 合算 / 50枚 / 1000円 / ベース / コイン持ち / 天井 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 出目 / ランプ / 型式 / 検定番号 / 検定通過」を組み替え、パイオニア公式、グリーンべると、パチマガスロマガ、pacnk、検定回顧系検索を横断。性能コアは型式/検定番号を除き複数系統または業界一次系で確認。resetBehaviorの低レベル挙動は直接根拠不足のため一般論で補完しない。

## sources — 取得日 2026-09-04

1. パイオニア公式「パチスロ機種情報2011年」
   - https://www.slot-pioneer.co.jp/products/2011.html
   - ミルキーマーチを2011年7月発売として掲載。
   - reliability: OFFICIAL
2. パイオニア公式「ミルキーマーチ 発売のお知らせ」
   - https://www.slot-pioneer.co.jp/information/milkymarch.html
   - メーカー公式リリースの現存ページ。
   - reliability: OFFICIAL
3. グリーンべると「パイオニア、後告知メインの『ミルキーマーチ』発表」
   - https://web-greenbelt.jp/00002137/
   - 2011-06-09掲載。7月18日納品開始予定、BB/RB純増、設定1/6の各確率・合成・出玉率、1000円35〜36.4G。
   - reliability: INDUSTRY
4. パチマガスロマガ「ミルキーマーチ 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/100/a.php
   - ノーマル完全告知、BIG約325枚/336枚払い出し、REG約104枚/105枚払い出し。
   - reliability: ANALYSIS_HIGH_ARCHIVE
5. パチマガスロマガ「ミルキーマーチ ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/100/h.php
   - 設定別BIG/REG/合算/PAYOUT。
   - reliability: ANALYSIS_HIGH_ARCHIVE
6. パチマガスロマガ「ミルキーマーチ TOP」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/100/pioneer_slot_100.php
   - 本機専用の「天井・ヤメ時」「朝イチ・設定変更」解析項目の存在を確認。検索キャッシュでは具体本文を安全に回収できない項目は推測しない。
   - reliability: ANALYSIS_HIGH_ARCHIVE
7. pacnk「ミルキーマーチ 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_milkymarch.html
   - 設定別BIG/REG/PAYOUTをパチマガと照合。天井機能非搭載を明記。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
