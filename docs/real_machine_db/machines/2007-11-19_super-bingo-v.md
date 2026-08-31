# スーパービンゴV

machineName: スーパービンゴV
manufacturer: ベルコ
releaseDate: 2007-11-19
generation: 5号機
systemType: ボーナス + ART / CZ
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
retrievedAt: 2026-09-01

## 導入・型式整理

- ベルコ公式機種ページで「スーパービンゴV」、2007年11月登場、5号機・ART機として確認。
- 当時グリーンべると記事では2007-10-10に発表内覧会を開催し、納品は2007-11-18開始。
- パチビーの当時導入日一覧では2007-11-19導入。
- 本DBのreleaseDateはホール導入日基準で2007-11-19を採用し、納品開始日との差は定義差として保持する。

## 性能コア

### ボーナス確率

| 設定 | スーパーBIG | ノーマルBIG | BIG合算 |
|---|---:|---:|---:|
| 1 | 1/4096 | 1/341.33 | 1/315.08 |
| 2 | 1/4096 | 1/327.68 | 1/303.41 |
| 3 | 1/4096 | 1/321.25 | 1/297.89 |
| 4 | 1/4096 | 1/315.08 | 1/292.57 |
| 5 | 1/3276 | 1/309.13 | 1/282.48 |
| 6 | 1/2730 | 1/309.13 | 1/277.69 |

- BIG合算はPACNKと旧攻略資料で一致。
- スーパーBIG/ノーマルBIGの内訳は旧解析資料値。完全再現用の単独/重複内訳までは収集対象外。

### 機械割 / 出玉率

| 設定 | 5号機クロニクル / 旧攻略 | PACNK |
|---|---:|---:|
| 1 | 96.5% | 96.0% |
| 2 | 99.0% | 99.0% |
| 3 | 101.0% | 101.0% |
| 4 | 103.0% | 103.0% |
| 5 | 105.0% | 105.0% |
| 6 | 108.0% | 108.0% |

- 設定1のみ96.5% / 96.0%で資料競合。平均せず CONFLICT として保持。

### ベース

baseGamesPer50: UNVERIFIED

- `スーパービンゴV / SUPER BINGO V / ベルコ` と `50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数` を組み替え、公式・当時業界記事・パチマガスロマガ・旧攻略DB・後年DBを横断したが、比較可能な50枚ベースを確定できなかった。

### 純増 / 基本獲得

netIncrease:
- ART「スーパービンゴチャンス / ビンゴチャンス」: 約+1.6枚/G（当時グリーンべると）

basicPayout:
- スーパーBIG: 約312枚
- ノーマルBIG: 約120枚
- パチマガスロマガでは規定払い出しをスーパーBIG 465枚超、ノーマルBIG 179枚超で終了とし、純増312枚 / 120枚を掲載。

## ゲーム性 / 最低限の追加値

- ボーナス後はCZ「ビンゴゲーム」へ移行。
- CZ中のチャンス目成立と7セグ「777」を契機にARTへ突入。
- ARTは「スーパービンゴチャンス」（最大5000G）と「ビンゴチャンス」（77G）。
- ビンゴチャンスは80%ループ。
- スーパーBIG後のビンゴゲームは特殊リプレイ確率が抑えられ、当時業界記事ではほぼ100%でARTへつながると説明。
- 通常状態で900G消化すると救済CZ「ビンゴゲーム」へ突入する天井機能を搭載。旧解析資料ではこのCZはART終了後と同様の状態で、約80%でARTにつながるとされる。

## v0.7 resetBehavior

検索語は `スーパービンゴV / SUPER BINGO V / ベルコ / ビンゴゲーム / SBC / BC` と、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 宵越し / 天井 / 900G / 天井短縮 / モード / 状態 / ガックン` を組み替え、メーカー公式、当時業界記事、当時解析、旧攻略DB、後年回顧資料を横断した。

resetBehavior:
  settingChangeBehavior: 設定変更時に通常時900G天井のカウンタ、CZ「ビンゴゲーム」、ART状態をどう処理するかの直接資料を確定できず UNVERIFIED。
  carryOverBehavior: 据え置き時に900G天井ゲーム数/CZ/ART状態を引き継ぐかの本機固有直接資料を確定できず UNVERIFIED。
  powerCycleBehavior: 電源OFF→ONのみ時の900G天井ゲーム数/CZ/ART状態の扱いを確定できず UNVERIFIED。
  gameCounterReset: 通常状態900Gで救済CZへ突入する天井は CONFIRMED。ただし設定変更・据え置き・電断時のカウンタ処理は UNVERIFIED。
  ceilingAfterReset: 設定変更時の天井短縮/朝一専用天井は NONE_CONFIRMED。通常天井は900G。
  modeAfterReset: 朝一専用モード、設定変更専用モード振り分けは NONE_CONFIRMED。
  stateAfterReset: CZ/ART内部状態の設定変更・据え置き・電断時処理は UNVERIFIED。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）。
  resetBenefits: 設定変更/朝一専用の公開恩恵は NONE_CONFIRMED。
  resetPenalties: 設定変更/朝一専用の公開不利要素は NONE_CONFIRMED。
  resetDetection: 本機固有のガックン、初期出目、表示等による設定変更/据え置き判別の直接資料は UNVERIFIED。
  numericResetData: 通常時天井900Gは公開確認済み。設定変更後専用天井G数、朝一当選率、変更時モード振り分け、リセット恩恵発生率は NONE_CONFIRMED。

### resetBehavior判定メモ

- 900G救済機能そのものは当時業界一次記事と旧解析資料の双方で確認できる。
- ただし「900G天井が設定変更で0からになるか」「据え置き/電断で宵越すか」を本機について直接記述した高信頼資料は、検索語・資料系統を変えて再探索しても確定できなかった。後継のスーパービンゴNEO等のリセット仕様は流用していない。
- 有利区間は世代上非該当。

## sources

1. ベルコ公式「スーパービンゴV」
   - https://www.s-bellco.co.jp/products/slot/superbingo_v/
   - 2007年11月登場、5号機・ART機、シリーズ機であることを確認。
   - confidence: OFFICIAL

2. グリーンべると「ベルコから名機スーパービンゴが復活」2007-10-12
   - https://web-greenbelt.jp/00004349/
   - 納品開始2007-11-18、ART純増約1.6枚/G、SBC最大5000G、BC 77G・80%ループ、SBB約312枚、BIG約120枚、900G救済機能を確認。
   - confidence: INDUSTRY

3. パチビー 2007年11月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-11
   - 2007-11-19導入としてスーパービンゴVを確認。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ「スーパービンゴV」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/80/a.php
   - ボーナス+ART+CZ、SBB 465枚超/純増312枚、NBB 179枚超/純増120枚を確認。
   - confidence: ANALYSIS_HIGH

5. PACNK「スーパービンゴV 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_bing.html
   - 設定別BIG合算、ノーマルBIG、PAYOUTを確認。
   - confidence: ANALYSIS_SINGLE

6. 旧攻略資料「スーパービンゴV 解析攻略」
   - https://crankyseven.com/superbingo-pc.htm
   - 設定別SBB/NBB/合算、機械割、通常状態900G天井と救済CZ、ART概要を照合。
   - confidence: ANALYSIS_SINGLE

7. 5号機クロニクル「ベルコ 5号機全機種一覧」
   - https://5goki.com/bellco
   - スーパービンゴV筐体/リール掲載と機械割96.5〜108.0%を確認。
   - confidence: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / ベース
- 設定変更時の900G天井カウンタ処理
- 据え置き時の900G天井/CZ/ART状態の引継ぎ
- 電源OFF→ONのみ時の900G天井/CZ/ART状態の引継ぎ
- 本機固有の設定変更判別挙動

## conflicts

- 機械割設定1: 5号機クロニクル/旧攻略資料 96.5% vs PACNK 96.0%。平均せず CONFLICT。
- 導入日は納品開始2007-11-18（当時業界記事）とホール導入2007-11-19（パチビー）の定義差。releaseDateはホール導入日2007-11-19を採用。

## confidenceSummary

- release/date: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- performance core: INDUSTRY + ANALYSIS_HIGH + ANALYSIS_SINGLE / payout setting1 CONFLICT
- ART/ceiling: INDUSTRY + ANALYSIS_SINGLE
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- resetBehavior: PARTIAL / UNVERIFIED_AFTER_RESEARCH for reset-specific carryover behavior
