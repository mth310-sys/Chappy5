# デコトラの鷲

machineName: デコトラの鷲
manufacturer: 大都技研
formalModelName: デコトラの鷲4
releaseDate: 2009-09-28（パチビー具体導入日。P-WORLDは2009年09月、P_Style777も発売時期2009年9月）
generation: 5号機（P_Style777表記: 5.1号機）
systemType: A+ART / ナビ回数管理型ART / チャンスゾーン / パンク回避型
coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT_BASE_ART_INITIAL_HIT_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

算出系列が一致しないため平均せずCONFLICT保持する。

### 系列A — P_Style777

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.5% |
| 3 | 101.5% |
| 4 | 104.5% |
| 5 | 107.5% |
| 6 | 110.5% |

confidence: OLD_ANALYSIS_HIGH

### 系列B — pachirinko旧機種解析

| 設定 | PAYOUT |
|---:|---:|
| 1 | 96.3% |
| 2 | 98.2% |
| 3 | 99.9% |
| 4 | 103.9% |
| 5 | 107.4% |
| 6 | 111.1% |

confidence: ANALYSIS_SINGLE

設定1で1.2pt、設定6で0.6pt差があり単純丸めではないためCONFLICT。

## initialHitBySetting

ART「デコトラッシュ」の設定別初当たり確率は、`デコトラの鷲 / デコトラノシュウ / デコトラの鷲4 / 大都技研` と `ART初当たり / ART突入率 / 設定差 / 設定1 / 設定6 / チャンスゾーン` を組み替え、P-WORLD、P_Style777、旧解析、当時業界記事、後年回顧を横断したが比較可能な設定別初当たり表を回収できず `UNVERIFIED_AFTER_RESEARCH`。

ボーナス関連は以下を確認。

### P_Style777掲載値

| 設定 | BB（赤・黄） | ボーナス合算 |
|---:|---:|---:|
| 1 | 1/390 | 1/252 |
| 2 | 1/385 | 1/248 |
| 3 | 1/381 | 1/244 |
| 4 | 1/376 | 1/240 |
| 5 | 1/368 | 1/233 |
| 6 | 1/362 | 1/225 |

- デコトラBIGは設定1欄で1/16384表示。HTML表のrowspan崩れにより設定2〜6欄が欠落表示しているため、欠落セルを推測補完しない。
- pachirinkoはBIG合成を設定1 1/390 → 設定6 1/362、REG合成を設定1 1/712 → 設定6 1/595.8、ボーナス合成を設定1 1/252 → 設定6 1/225.2と掲載。

confidence: OLD_ANALYSIS_MULTI_SOURCE

## baseGamesPer50

`50枚 / 1000円 / ベース / コイン持ち / 平均ゲーム数`、型式名・メーカー名を組み替え、P-WORLD、P_Style777、旧解析、パチマガ系INDEX、当時業界記事まで再探索したが、比較可能な50枚あたりゲーム数を直接回収できず `UNVERIFIED_AFTER_RESEARCH`。

## netIncrease

- ART「デコトラッシュ」: **約+1.6枚/G**

P-WORLD、パチビー、2009-07-27付グリーンべるとで一致。

confidence: CONTEMPORARY_INDUSTRY_PLUS_MULTI_ANALYSIS

## basicPayout

- デコトラBIG: 約30枚
- 通常BIG: 約204枚
- REG: 約48枚
- ART「デコトラッシュ」: 3択9枚役のナビ回数管理。規定ナビ回数は5回 / 10回 / 20回 / 30回 / 次回ボーナスまで。
- P-WORLDでは1セット約70枚を比較用の基本獲得目安として掲載。

confidence: INDUSTRY_DB_PLUS_OLD_ANALYSIS

## modeSpecificMinimumData

- 通常時999Gハマリで第1天井ART。P-WORLDは3連確定、P_Style777はチャンスゾーン間999Gでナビ3セット以上確定と記載。
- 第1天井後、さらにチャンスゾーン間999Gハマリで第2天井。P-WORLDは基本10個・7個の場合あり、P_Style777は7or10セット。
- pachirinkoでは第2天井ストック振り分けとして、設定1〜4は10個100%、設定5は7個6.2%/10個93.7%、設定6は7個25%/10個75%を掲載。これは天井性能の比較に直接必要なため保持するが、通常ART内部抽選の詳細は収集しない。
- 通常時に低確率 / 高確率状態が存在することをpachirinkoで確認。設定変更時の状態処理は別項目で未確認。
- ボーナス後はチャンスゾーンへ。ARTストック有時はナビに従いARTへ、ストックなしでも3択9枚役等による自力突入機会あり。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED_CEILING_CARRYOVER**。P_Style777当時解析に「設定変更でも天井ゲーム数は引き継ぐ」と直接記載。設定変更時の低確/高確状態、CZ、ARTストック、ART中状態、ボーナス成立状態等の個別処理は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

carryOverBehavior: **CEILING_PROGRESS_CARRIES_OVER_BY_DEFINITION_AND_SETTING_CHANGE_DIRECT_SOURCE**。少なくとも天井ゲーム数は設定変更でも引継ぎと明記されているため、据え置きで天井進捗が消えるとは扱わない。ただし通常状態/CZ/ARTストック等の据え置き時個別処理を示す本機固有資料は未回収。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井ゲーム数、低確/高確、CZ、ARTストック等について設定変更との差を直接示す本機固有資料を確定できず、一般論で補完しない。

gameCounterReset: **CARRY_OVER_ON_SETTING_CHANGE**。P_Style777直接記載。第1天井はチャンスゾーン間999G、第2天井はさらに999G。

ceilingAfterReset: **NO_RESET_SHORTENING_CONFIRMED; EXISTING_PROGRESS_CARRIED_OVER**。設定変更で天井ゲーム数を引き継ぐため、0Gから短縮天井へ再セットするタイプとは扱わない。設定変更専用の別天井G数は確認されず。

modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時に低確/高確状態が存在するが、設定変更時のモード/状態再抽選・振り分け・朝一専用モードは確定できず。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。低確/高確、CZ、ARTストック、ART中状態等の変更時処理を直接確認できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **CEILING_PROGRESS_RETENTION_CAN_CREATE_MORNING_VALUE**。前日から天井までの進捗が設定変更でも引き継がれるため、前日ハマリ台は設定変更されても朝一天井狙い価値が残る。これは公開仕様から直接導ける運用上の効果であり、別途のリセット恩恵率や朝一専用当選率は確認されず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更で天井進捗が消える不利は確認されず、むしろ引継ぎ。その他の設定変更固有不利要素は直接確認できず。

resetDetection: UNVERIFIED_AFTER_RESEARCH。`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ランプ / 液晶 / 天井` を組み替えて再探索したが、本機固有のガックン・初期出目・表示等による変更判別を確定できず。

numericResetData:
  ceilingFirst: 999G（チャンスゾーン間。ART3セット以上）
  ceilingSecond: additional 999G（第2天井。ART7or10セット）
  secondCeilingSevenStockRateSetting5: 6.2%（single analysis source）
  secondCeilingTenStockRateSetting5: 93.7%（single analysis source）
  secondCeilingSevenStockRateSetting6: 25%（single analysis source）
  secondCeilingTenStockRateSetting6: 75%（single analysis source）
  publishedMorningModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  resetSpecificCeiling: NONE; EXISTING_CEILING_PROGRESS_CARRIES_OVER
  resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_HIGH_VALUE_DIRECT_CEILING_CARRYOVER_CONFIRMED_OTHER_STATE_HANDLING_UNVERIFIED

resetBehaviorResearchNote:
- 表記揺れ `デコトラの鷲 / デコトラノシュウ / デコトラの鷲4 / 大都技研` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / 低確 / 高確 / CZ / ART / ストック / ガックン / 初期出目` を組み替えて再探索。
- P-WORLD、パチビー、2009年グリーンべると、P_Style777、pachirinko、旧パチマガスロマガINDEX、後年回顧を横断。
- 設定変更でも天井ゲーム数引継ぎというホール経営/朝一客AIに重要な直接情報を回収。
- 単純電断、変更時の状態/CZ/ARTストック、変更判別は直接根拠不足のため推測しない。

## sources

取得日: 2026-09-03

1. パチビー「デコトラの鷲」 — https://www.pachibee.jp/machines/index/209110001 — 導入日2009-09-28、5号機ART、天井あり、純増約1.6枚/G、BIG/REG獲得枚数 — reliability: INDUSTRY_MACHINE_DB
2. P-WORLD「デコトラの鷲」 — https://www.p-world.co.jp/machine/database/5650 — 大都技研、5号機ART、純増約1.6枚/G、BIG約204枚/デコトラBIG約30枚/REG約48枚、999G天井と第2天井、ART1セット約70枚 — reliability: INDUSTRY_DB
3. P-WORLD / グリーンべると「トラックコメディ『デコトラの鷲』がパチスロに」2009-07-27 — https://news.p-world.co.jp/articles/3544/greenbelt — 大都技研リリース、ART純増約1.6枚/G、BB中状態移行システム — reliability: CONTEMPORARY_INDUSTRY
4. P_Style777「デコトラの鷲」 — https://ps777.net/data/daito/decotora.htm — 型式名デコトラの鷲4、2009年9月、設定別ボーナス/機械割、獲得枚数、天井、第2天井、**設定変更でも天井ゲーム数を引き継ぐ** — reliability: OLD_ANALYSIS_HIGH
5. pachirinko「デコトラの鷲」 — https://www.pachirinko.com/5.dekotorano.html — 別PAYOUT系列、BIG/REG/合算、低確/高確状態、天井、第2天井7/10ストック振り分け — reliability: ANALYSIS_SINGLE
6. パチマガスロマガ旧INDEX「デコトラの鷲」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/44/daitogiken_slot_44.php — 「攻め時・ヤメ時・設定変更時」専用項目の存在を確認。本文は現存検索から回収できず — reliability: OLD_ANALYSIS_HIGH_INDEX_ONLY

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- ART initial hit rate by setting: UNVERIFIED_AFTER_RESEARCH
- setting-change state/CZ/ART-stock handling beyond ceiling counter: UNVERIFIED_AFTER_RESEARCH
- carry-over handling beyond ceiling counter: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning mode distribution / hit rate / benefit rate: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- payoutRateBySetting: CONFLICT — P_Style777 97.5/99.5/101.5/104.5/107.5/110.5% vs pachirinko 96.3/98.2/99.9/103.9/107.4/111.1%。平均しない。
- P_Style777のボーナス表はHTML row/column表示崩れがあり、デコトラBIG欄の設定2〜6を推測補完しない。

## relayNote

- 408件目として追加。
- 407 `ドリームJラッシュ` までの既存性能値はやり直していない。
- 2009-09-15〜09-27を導入一覧・月間資料で境界監査し、現時点で具体日を持つ未処理機をデコトラの鷲より前には確認できなかった。
- 次回は2009-09-28同日群を最終監査し、`交響詩篇エウレカセブン`、`銀河英雄伝説`等の具体導入日とrepo既存有無を比較して最古の未処理機を409候補とする。
