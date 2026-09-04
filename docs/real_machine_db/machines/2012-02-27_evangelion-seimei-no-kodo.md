# ヱヴァンゲリヲン～生命の鼓動～

machineName: ヱヴァンゲリヲン～生命の鼓動～
manufacturer: ビスティ
releaseDate: 2012-02-27
releaseDatePrecision: EXACT_WITH_DATE_CONFLICT
releaseDateNotes: K-Naviは2012-02-27をホール導入開始日とし、2012-02-20付の導入前記事でも「2月27日（最速導入）」と記載。フューチャースコープ発表を掲載した4Gamer/GAME Watchも2012-02-27より順次全国導入開始と記録。一方HAZUSEは2012-02-20導入開始と掲載するためCONFLICTとして保持し、本DBの時系列キーは複数当時資料が一致する2012-02-27を採用。
generation: 5号機
systemType: ノーマル+RT / ボーナス主体 / 無限RT搭載
formalModelName: ヱヴァンゲリヲン・生命の鼓動
approvalNumber: 1S1168
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_QA_AND_PAYOUT_CONFLICT

## payoutRateBySetting

CONFLICT

### P-WORLD / けんのスロットシミュレーション系列
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.6% |
| 3 | 102.1% |
| 4 | 103.9% |
| 5 | 107.6% |
| 6 | 112.5% |

### HAZUSE系列
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.5% |
| 3 | 100.2% |
| 4 | 104.5% |
| 5 | 107.5% |
| 6 | 112.9% |

reliability: CONFLICT_MULTI_SOURCE
notes:
- 両系列の差は設定1〜6で一貫して存在し、単純な丸め差ではない。平均せず双方を保持。
- P-WORLDは機種DB内で97.7〜112.5%を設定別に掲載し、けんのスロットシミュレーションも同系列。
- HAZUSEは97.2〜112.9%を設定別に掲載。

## initialHitBySetting

| 設定 | BIG合算 | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/321.3 | 1/504.1 | 1/196.2 |
| 2 | 1/312.0 | 1/452.0 | 1/184.6 |
| 3 | 1/313.5 | 1/464.8 | 1/187.3 |
| 4 | 1/296.5 | 1/420.1 | 1/173.8 |
| 5 | 1/288.6 | 1/422.8 | 1/171.6 |
| 6 | 1/257.0 | 1/354.3 | 1/148.9 |

reliability: DATABASE_HIGH_WITH_ANALYSIS_CORROBORATION
notes:
- P-WORLDの設定別BIG合算/REG/合算を主値として採用。
- けんのスロットシミュレーションの整数丸め値（BIG 1/321〜1/257、REG 1/504〜1/354、合算1/196〜1/149）と整合。

## baseGamesPer50

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 39.59G |
| 2 | 40.42G |
| 3 | 41.71G |
| 4 | 43.08G |
| 5 | 44.56G |
| 6 | 46.85G |

reliability: ANALYSIS_SINGLE_DIRECT_VALUE
notes:
- けんのスロットシミュレーションが「回転数 / 50枚」として設定別に直接掲載。
- 小役確率からの逆算値ではなく直接掲載値を保存。ただし別系統の直接表は今回確定できず、単一解析資料扱い。

## netIncrease

- 覚醒モード（次回ボーナスまでの無限RT）: 約+0.3枚/G

reliability: HIGH_MULTI_SOURCE

## basicPayout

- SPECIAL BIG: 最大約448枚（465枚超払い出しで終了）
- SUPER BIG: 最大約311枚（344枚超払い出しで終了）
- NORMAL BIG: 最大約207枚（224枚超払い出しで終了）
- REG: 最大約104枚（105枚超払い出しで終了）

reliability: OFFICIAL_COLLECTION_AND_DATABASE_HIGH

## modeSpecificMinimumData

- ボーナス主体のノーマル+RTタイプ。
- チャンスリプレイ成立で最大7GのプチRT/チャンスゾーンへ移行。
- REG終了後は覚醒リプレイ高確「覚醒チャンス」へ入り、P-WORLDでは約60G（チャンスリプレイ成立まで）と説明。
- 覚醒リプレイ非ボーナス時などから次回ボーナスまで継続するRT「覚醒モード」へ突入、純増約+0.3枚/G。
- 通常ゲーム数天井は非搭載。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_QUERY_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: NO_GAME_COUNT_CEILING_APPLICABLE__RT_CZ_TRANSIENT_STATE_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH_FOR_RT_CZ_TRANSIENT_STATE
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH_FOR_RT_CZ_TRANSIENT_STATE

gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING
modeAfterReset: NOT_APPLICABLE_NO_PERSISTENT_GAME_COUNT_AT_ART_MODE_CONFIRMED__RT_CZ_STATE_HANDLING_UNVERIFIED
stateAfterReset: 覚醒チャンス/覚醒モード/7GプチRT等の途中状態について設定変更・据え置き・単純電源OFF→ON時の本機固有処理はUNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: ガックン、初期出目、液晶/パネル、MAGI等による本機固有の設定変更判別はUNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

numericResetData:
- 通常ゲーム数天井: 非搭載。
- 設定変更専用短縮天井: NOT_APPLICABLE。
- 朝一特定G以内ボーナス/RT当選率: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更時モード/状態振り分け: NONE_CONFIRMED_AFTER_RESEARCH。
- リセット恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- 「ヱヴァンゲリヲン～生命の鼓動～ / エヴァ 生命の鼓動 / ヱヴァンゲリヲン・生命の鼓動 / 1S1168 / ビスティ」を「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / ガックン / 初期出目 / MAGI / 覚醒チャンス / 覚醒モード」と組み替え、K-Navi、HAZUSE、P-WORLD、パチマガスロマガ、当時攻略資料、回顧/解析DBを再探索。
- パチマガスロマガが天井非搭載と直接記載し、当時2012-02-29の天井攻略記事も非搭載を確認するため、天井ゲーム数関連は非該当。
- K-Naviには後年ユーザー質問として「MAGIは設定変更で消えますか？」等が残るが、回答/公式解析として確定できないため変更判別根拠には採用しない。
- 一般的な5号機ノーマル+RTの挙動を本機へ推定転記しない。

resetQaReliability: HIGH_FOR_NO_CEILING_AND_5TH_GEN_NA__UNVERIFIED_FOR_TRANSIENT_RT_CZ_CARRYOVER_POWER_CYCLE_DETECTION

## sources

取得日: 2026-09-05

1. SANKYOオンライン博物館 — https://www.sankyo-fever.jp/collection/875/
   - 2012.02、ビスティ、3種BIG+REG、覚醒モード、最大448/311/207枚を確認。
   - reliability: OFFICIAL_GROUP_COLLECTION
2. K-Navi — https://p-kn.com/slot/1576/
   - ホール導入開始2012-02-27、ノーマルタイプ、3種BIG+REG、7GプチRT、覚醒モードを確認。2012-02-20付記事でも2月27日最速導入と記載。
   - reliability: ANALYSIS_HIGH_PERIOD
3. 4Gamer / フューチャースコープ発表 — https://www.4gamer.net/games/148/G014838/20120227009/
   - 2012-02-27より順次全国ホール導入開始とのメーカー発表文を確認。
   - reliability: INDUSTRY_PRIMARY_REPRINT
4. GAME Watch — https://game.watch.impress.co.jp/docs/news/515021.html
   - 2012-02-27より順次全国導入開始を照合。
   - reliability: INDUSTRY_MEDIA
5. HAZUSE — https://hazuse.com/machine/pachislot/1S1168/
   - 型式名、検定番号、2012-02-20導入開始という競合日、機械割97.2〜112.9%、配当条件、RT純増約0.3枚/Gを確認。
   - reliability: LEGACY_DATABASE_HIGH
6. P-WORLD — https://www.p-world.co.jp/machine/database/6602
   - BIG/REG/合算、機械割97.7〜112.5%、最大獲得枚数、RT約+0.3枚/G、型式1S1168を確認。
   - reliability: DATABASE_HIGH
7. パチマガスロマガ 基本情報 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/20/a.php
   - ノーマル+RT、天井非搭載、BIG448/311/207枚、REG104枚、覚醒チャンス、RT約+0.3枚/Gを確認。
   - reliability: ANALYSIS_HIGH
8. けんのスロットシミュレーション — https://kenslo65536.com/kaiseki/eva-seimei.html
   - 設定別50枚回転数、P-WORLD系列の機械割、設定別ボーナス合算/BIG/REG丸め値を確認。
   - reliability: ANALYSIS_SINGLE
9. 当時天井攻略記事（2012-02-29） — https://mezase20.com/blog-entry-522.html
   - 2月27日導入開始、天井非搭載を当時記録で照合。
   - reliability: PERIOD_SECONDARY

## missingFields

- 設定変更時の覚醒チャンス/覚醒モード/プチRT途中状態の処理
- 据え置き時のRT/CZ一時状態の保持
- 単純電源OFF→ON時のRT/CZ一時状態の扱い
- ガックン/初期出目/MAGI/液晶等による本機固有の変更判別
- 設定変更時の公開朝一数値
- 50枚ベースの別系統直接表による照合

## conflicts

- releaseDate: HAZUSE=2012-02-20。一方K-Navi、K-Naviの2012-02-20導入前記事、4Gamer掲載メーカー発表、GAME Watch=2012-02-27。平均せず双方を保持し、時系列キーは2012-02-27。
- payoutRateBySetting: P-WORLD/けんのスロットシミュレーション=97.7/99.6/102.1/103.9/107.6/112.5%。HAZUSE=97.2/98.5/100.2/104.5/107.5/112.9%。平均せずCONFLICT。

## confidenceSummary

- release: CONFLICT_HIGH__2012-02-27_PREFERRED_BY_MULTI_PERIOD_AND_PRIMARY_REPRINT
- formal model/approval: HIGH
- payout: CONFLICT_MULTI_SOURCE
- bonus probabilities: HIGH_WITH_SECONDARY_CORROBORATION
- baseGamesPer50: ANALYSIS_SINGLE_DIRECT
- payout amounts/system/RT: HIGH_MULTI_SOURCE
- no ceiling: HIGH_MULTI_SOURCE
- setting-change/carryover/power-cycle/detection: UNVERIFIED_AFTER_RESEARCH_EXCEPT_NON_APPLICABLE_FIELDS
