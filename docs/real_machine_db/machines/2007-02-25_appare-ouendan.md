# パチスロあっぱれ応援団

machineName: パチスロあっぱれ応援団
manufacturer: KPE
releaseDate: 2007-02-25（業界記事で納品開始予定。コナミ公式アーカイブは2007年2月稼働開始）
generation: 5号機初期
systemType: A+RT / ボーナス+完走型RT

## payoutRateBySetting

### パチマガスロマガ旧攻略 シミュレート値
- 設定1: 98.04%
- 設定2: 99.86%
- 設定3: 102.40%
- 設定4: 105.02%
- 設定5: 106.76%
- 設定6: 108.50%

信頼度: ANALYSIS_HIGH

## initialHitBySetting

### 赤BIG
- 設定1: 1/689.85
- 設定2: 1/624.15
- 設定3: 1/569.88
- 設定4: 1/504.12
- 設定5: 1/504.12
- 設定6: 1/504.12

### 青BIG
- 設定1: 1/689.85
- 設定2: 1/689.85
- 設定3: 1/655.36
- 設定4: 1/655.36
- 設定5: 1/595.78
- 設定6: 1/546.13

### BONUS GAME / REG
- 全設定共通: 1/819.20

### ボーナス合成
- 設定1: 1/242.73
- 設定2: 1/234.06
- 設定3: 1/222.16
- 設定4: 1/211.41
- 設定5: 1/204.80
- 設定6: 1/198.59

設定1約1/243〜設定6約1/199は2007年当時のグリーンべると/P-WORLD転載業界記事とも一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

旧パチマガスロマガ解析値（1000円あたりのプレイ数、3P RTを考慮せず）:
- 設定1: 37.04G
- 設定2: 37.14G
- 設定3: 37.24G
- 設定4: 37.34G
- 設定5: 37.50G
- 設定6: 37.66G

当時業界発表では「1000円あたり平均40G」。定義差（解析上の通常小役ベースで3P RT非考慮 vs 発表時平均値）があるため平均せず双方を保持。

信頼度: ANALYSIS_HIGH

## netIncrease

- あっぱれタイム: 50G、赤7BIG由来時 約0.5枚/G、青7BIG由来時 約0.6枚/G
- 超あっぱれタイム: 150G、約0.6枚/G
- 超あっぱれタイム完走時: 約90枚純増期待

2007年当時業界記事で確認。

信頼度: INDUSTRY

## basicPayout

- 赤BIG: 350枚を超える払い出しで終了、純増約255枚
- 青BIG: 250枚を超える払い出しで終了、純増約186枚
- REG / BONUS GAME: 150枚を超える払い出しで終了、純増約108枚

旧パチマガスロマガと当時業界記事の実獲得目安が一致。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用
- ボーナス+完走型RT
- BIG後は50G RT「あっぱれタイム」へ突入
- あっぱれタイム中の特殊リプレイ成立で150G RT「超あっぱれタイム」へ昇格
- 超あっぱれタイム昇格率: 赤7BIG由来 約15%、青7BIG由来 約82%
- 両RTとも規定ゲーム数消化またはボーナス入賞で終了
- RT延命要素あり
- 天井/通常時ゲーム数解除機能: 今回確認できず
- 有利区間制度導入前

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時の本機固有の**稼働中RT状態 / RT残G数**の処理を直接説明するメーカー一次・当時業界・当時攻略資料を、表記揺れと検索語を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時に天井・ゲーム数解除・規定Gモードを確認できないため、それらの設定変更時リセットは物差し上 `NOT_APPLICABLE`。
- 後年の同メーカー別機種に設定変更時CZ/状態処理の資料があるが、本機へ流用しない。

### carryOverBehavior

- 通常時天井・規定Gモードの据え置き引継ぎは `NOT_APPLICABLE_NO_NORMAL_CEILING_OR_GAME_NUMBER_MODE`。
- **RT中の据え置き時に残G数/RT状態を引き継ぐか**は、本機固有の直接資料を再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機RT機の挙動から自動補完しない。

### powerCycleBehavior

- 設定変更なしの単純な**電源OFF→ON**時に、RT残G数・RT状態・リール状態をどう扱うかの本機固有直接対照資料は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更情報や一般論から純電断契約を推定しない。

### gameCounterReset

- `NOT_APPLICABLE_NO_NORMAL_CEILING_OR_GAME_NUMBER_RELEASE`。
- RT残G数は通常時天井カウンタとは別概念であり、設定変更/据え置き/純電断時の処理は上記の通り `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。
- 設定変更後専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- `NOT_APPLICABLE_NO_NORMAL_GAME_NUMBER_MODE`。
- 朝一専用モード/規定Gモードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 通常時の高確/低確等を朝一客AI向け主要状態として確認できず、通常状態再抽選は物差し上 `NOT_APPLICABLE_OR_NOT_IDENTIFIED`。
- 一方、稼働中RTそのものの設定変更・据え置き・純電断時処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 朝一/設定変更固有の主要出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、初期出目、表示等による設定変更/据え置き判別を直接説明する高信頼資料は、再探索後も `NONE_CONFIRMED_AFTER_RESEARCH / DIRECT_MACHINE_SPECIFIC_SOURCE_NOT_FOUND`。
- 後年KPE機や別機種の変更判別情報は流用しない。

### numericResetData

- 設定変更時専用の比較可能な公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `パチスロあっぱれ応援団 / あっぱれ応援団 / KPE`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / RT引継ぎ / RT残り / 状態 / ガックン / 天井 / モード / 初期出目`。
- 資料系統: コナミ公式アーカイブ、2007年当時業界記事、P-WORLD業界記事、旧パチマガスロマガ、古い機種DB、後年回顧・設定変更記事。
- 性能コアとRT仕様は十分再確認できたが、本機固有の設定変更・据え置き・純電断時のRT処理を直接示す資料は発見できなかった。
- 検索中に後年のKPE別機種（例: 爆音伝説サクラ）の設定変更/CZ情報が混入するため、別機種情報を本機へ転記しないことを明示。

## sources

取得日: 2026-09-07（性能コア初回取得 2026-08-31、resetBehavior再QA 2026-09-07）

1. コナミアミューズメント公式アーカイブ — パチスロあっぱれ応援団
   - https://www.konami.com/amusement/psm/archive/ps/2007/appare/
   - 2007年2月稼働開始、5号機RT、KPE
   - reliability: OFFICIAL
2. グリーンべると — KPEがパチスロ2機種を同時発表
   - https://web-greenbelt.jp/00004042/
   - 2007-02-02掲載、納品2/25予定、合成1/243〜1/199、赤7約255枚/青7約186枚/RB約108枚、1000円平均40G、RT50/150G、RT純増0.5〜0.6枚/G、昇格率約15%/82%
   - reliability: INDUSTRY
3. P-WORLD パチンコ業界ニュース — KPEがパチスロ2機種を同時発表
   - https://news.p-world.co.jp/articles/2026/greenbelt
   - 上記グリーンべると記事転載・照合
   - reliability: INDUSTRY
4. パチマガスロマガ旧攻略 — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/02/a.php
   - 5号機/5ライン/3枚掛け、RT、規定払い出しと純増目安
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧攻略 — ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/02/h.php
   - 設定別赤BIG/青BIG/BONUS GAME/合算、PAYOUTシミュレート値
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧攻略 — 小役確率/1000円プレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/02/c.php
   - 設定別1000円プレイ数37.04〜37.66G（3P RT非考慮）
   - reliability: ANALYSIS_HIGH

## missingFields

- 型式名/検定番号の高信頼確認
- 設定変更時の稼働中RT状態/残G数処理
- 据え置き時の稼働中RT状態/残G数引継ぎ
- 電源OFF→ONのみのRT/リール状態処理
- 本機固有のガックン等の変更判別
- 公開朝一専用数値

## conflicts

- 1000円あたりゲーム数は、当時業界発表の平均40Gと旧パチマガ解析の設定別37.04〜37.66G（3P RT非考慮）が存在。定義条件が異なるため平均化せず併記。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
