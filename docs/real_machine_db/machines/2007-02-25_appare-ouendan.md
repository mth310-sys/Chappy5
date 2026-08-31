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

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 設定変更時の本機固有RT状態・内部状態処理を明記した高信頼資料を今回確定できず UNVERIFIED
- carryOverBehavior: 据え置き時の本機固有RT状態引継ぎを明記した高信頼資料を今回確定できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみの場合のRT/リール状態処理を高信頼資料で確定できず UNVERIFIED
- gameCounterReset: 通常時天井/ゲーム数解除を確認できず、比較対象となる天井ゲーム数カウンタは確認なし
- ceilingAfterReset: 天井短縮・リセット天井は確認できず
- modeAfterReset: 朝一専用モード/通常時モード移行系は確認できず
- stateAfterReset: 設定変更時にRT状態をどう扱うかは高信頼資料未確認。推測しない
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 本機固有のガックン/表示等による変更判別を高信頼資料で確認できず UNVERIFIED
- numericResetData: 設定変更時専用の公開朝一数値は今回確認できず

### resetBehavior 再探索メモ

「パチスロあっぱれ応援団 / あっぱれ応援団 / KPE」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / 状態 / ガックン / 天井 / モード」を組み合わせて検索。コナミ公式アーカイブ、当時業界記事、旧パチマガスロマガ、P-WORLD系記事、後年機種一覧を横断した。性能コアとRT仕様は十分確認できたが、本機固有の設定変更・据え置き・電断差を直接説明する資料は発見できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

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
- 設定変更時のRT状態処理
- 据え置き時のRT状態引継ぎ
- 電源OFF→ONのみの挙動
- 本機固有のガックン等の変更判別
- 公開朝一専用数値

## conflicts

- 1000円あたりゲーム数は、当時業界発表の平均40Gと旧パチマガ解析の設定別37.04〜37.66G（3P RT非考慮）が存在。定義条件が異なるため平均化せず併記。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
