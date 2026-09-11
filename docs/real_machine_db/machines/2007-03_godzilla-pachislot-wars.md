# ゴジラパチスロウォーズ

machineName: ゴジラパチスロウォーズ
manufacturer: サミー
releaseDate: 2007-03
generation: 5号機初期
systemType: ボーナス+RT（CZ経由RT）

## payoutRateBySetting

- 設定1: 97.0%
- 設定2: 99.0%
- 設定3: 101.0%
- 設定4: 103.0%
- 設定5: 105.0%
- 設定6: 107.0%

HAZUSE当時系統解析とpacnk後年整理で一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

### BIG合算
- 設定1: 1/532
- 設定2: 1/485
- 設定3: 1/455
- 設定4: 1/420
- 設定5: 1/390
- 設定6: 1/364

### REG
- 全設定: 1/819

### ボーナス合成
- 設定1: 1/322（pacnk精密値 1/322.84）
- 設定2: 1/304（1/304.82）
- 設定3: 1/292（1/292.57）
- 設定4: 1/277（1/277.69）
- 設定5: 1/264（1/264.26）
- 設定6: 1/252（1/252.06）

当時解析と後年整理で丸め差の範囲で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

「ゴジラパチスロウォーズ」「ゴジラ パチスロ 2007」「Sammy」に「50枚」「1000円」「ベース」「コイン持ち」「通常時回転数」を組み合わせ、当時解析・業界記事・後年DBを横断したが、比較可能な50枚あたりゲーム数は今回確定できず。

信頼度: UNVERIFIED

## netIncrease

- RT「迎撃MODE」: 100G継続
- 100Gで約90枚増加見込み（約+0.9枚/G相当）
- 終了条件: 100G消化またはボーナス成立
- 100G完走後は「索敵MODE」へ再突入
- 索敵MODE中の特殊リプレイ成立で迎撃MODE突入、当時解析ではRT期待度約33%

信頼度: ANALYSIS_HIGH

## basicPayout

本機の各BIG/REGについて、今回確保した高信頼資料では実獲得枚数の精密値を確定できず。2008年のスペック違い「ぱちスロSTゴジラパチスロウォーズ」の311枚/24枚は別機種のため混入させない。

信頼度: UNVERIFIED

## modeSpecificMinimumData

- ボーナスは3種類のBIGと1種類のREG。
- 全ボーナス後にCZ「索敵MODE」へ突入。
- 索敵MODE中の特殊リプレイ成立で100G RT「迎撃MODE」へ移行。
- 迎撃MODEは約+0.9枚/G相当、100G完走時は再び索敵MODEへ。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 本機固有の設定変更時に、CZ「索敵MODE」/ RT「迎撃MODE」残G / 内部RT状態 / ボーナス成立状態をどのように処理するかを直接規定する公開資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 5号機一般論や後年サミー機の仕様からは補完しない。

### carryOverBehavior

- 通常時ゲーム数天井を用いる仕様は確認できず、ゲーム数ハマりの据え置き恩恵は `NOT_APPLICABLE_AS_PUBLIC_GAME_CEILING`。
- CZ/RT内部状態、RT残G、成立ボーナス状態の据え置き時引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 純電源OFF→ONのみの本機固有挙動は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更と電源再投入を同一扱いとする推測はしない。

### gameCounterReset

- 通常時の公開ゲーム数天井は確認できず、天井ゲーム数カウンタのRESET/CARRY_OVERは `NOT_APPLICABLE_AS_PUBLIC_GAME_CEILING`。
- RT100Gの残Gが設定変更/電断時にどう扱われるかは公開直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常時ゲーム数天井および朝一短縮天井は確認できず `NOT_APPLICABLE_AS_PUBLIC_GAME_CEILING`。

### modeAfterReset

- 朝一専用モード / 設定変更時モード振り分けの公開情報は確認できず `PUBLIC_RESET_MODE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 索敵MODE / 迎撃MODEを含む内部状態が設定変更・据え置き・純電断でどう扱われるかは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（有利区間制度導入前）。

### resetBenefits

- 朝一/設定変更固有の主要恩恵は、検索語・資料系統を変えた再探索後も確認できず `PUBLIC_RESET_BENEFIT_NOT_FOUND_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の主要な不利要素は確認できず `PUBLIC_RESET_PENALTY_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection

- `ゴジラパチスロウォーズ / ゴジラ パチスロ 2007 / Sammy / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / 索敵MODE / 迎撃MODE / ガックン / 変更判別` を組み合わせ、当時業界記事、旧解析系統、後年DB、回顧資料を再探索。
- 本機固有のガックン、初期出目、ランプ/液晶、朝一RT/CZ挙動による変更判別契約は固定できず `PUBLIC_RESET_DETECTION_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 公開朝一専用数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

2026-09-11に現行v0.7として再評価。機種名表記揺れ、メーカー名、2007年版と2008年ST版の識別を行い、設定変更/リセット/朝一/据え置き/電源OFF ON/RT/CZ/ガックン/変更判別を組み合わせて横断検索した。2007年版のCZ「索敵MODE」→100G RT「迎撃MODE」というゲーム性、通常時ゲーム数天井非確認、有利区間制度前は再確認できたが、本機固有の設定変更・据え置き・純電断契約、変更判別、公開朝一数値は追加固定できなかった。2008年「ぱちスロSTゴジラパチスロウォーズ」の仕様は別スペックのため転記しない。

## sources

取得日: 2026-08-31 / resetBehavior再探索: 2026-09-11

1. グリーンべると — サミー、新たに5号機導入支援プランをスタート
   - https://web-greenbelt.jp/00004081/
   - 2007-03-06発表、ゴジラパチスロウォーズとミスターマジックネオ、3月25日以降納品分を対象とする導入支援施策を確認
   - reliability: INDUSTRY
2. P-WORLD業界ニュース / グリーンべると転載 — サミーPS3タイトルを一挙デビュー
   - https://news.p-world.co.jp/articles/2086/greenbelt
   - 2007-03-06内覧会、サミー新機種として確認
   - reliability: INDUSTRY
3. HAZUSE — ゴジラパチスロウォーズ 解析・機種情報
   - https://hazuse.com/i/data/godzilla/top.htm
   - 2007年3月、5号機、設定別BIG/REG/合成、機械割、索敵MODE、迎撃MODE100G・約90枚、RT期待度約33%を確認
   - reliability: ANALYSIS_HIGH
4. pacnk — ゴジラパチスロウォーズ 設定判別ツール
   - https://pacnk.com/slot/tools/sh_gojirawozu.html
   - 2007年3月導入、設定別ボーナス合算精密値、機械割を照合
   - reliability: ANALYSIS_SINGLE
5. グリーンべると — サミー、ST系パチスロ2機種を同時発表
   - https://web-greenbelt.jp/00003914/
   - 2008年ST版が「2007年3月に発売したゴジラパチスロウォーズ」のスペック違いであることを確認。ST版の獲得枚数は本機へ混入させないための識別資料
   - reliability: INDUSTRY

## missingFields

- baseGamesPer50
- 本機（2007年版）のBIG/REG実獲得枚数の高信頼精密値
- 本機固有の設定変更/据え置き/電源OFF→ON時のCZ/RT状態契約
- 本機固有の変更判別情報
- 公開朝一専用数値

## conflicts

- ボーナス合成確率はHAZUSEの整数丸め値とpacnkの精密値に差があるが、実質同値として双方を保持。
- 2008年「ぱちスロSTゴジラパチスロウォーズ」はスペック違いの別機種。2008年版のBIG約311枚・REG約24枚は2007年本機のbasicPayoutへ転記しない。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
