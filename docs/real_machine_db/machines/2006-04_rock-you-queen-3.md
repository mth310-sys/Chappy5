# ロックユークイーン3

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: ロックユークイーン3
manufacturer: エレコ / アルゼ
releaseDate: 2006-04
generation: 5号機初期
systemType: ボーナス+RT / BIGのみ / 2段階設定

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.04%〜98.3% |
| 6 | 104.4%〜104.87% |

パチマガスロマガと5号機クロニクルで丸め差。
信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | 青7BIG | QUEEN BIG | 合算 |
|---|---:|---:|---:|
| 1 | 1/283.706 | 1/851.117 | 1/212.779 |
| 6 | 1/247.306 | 1/712.348 | 1/183.574 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

比較可能な50枚/1000円ベースは、表記揺れ・型式・関連語で再探索したが今回未確定。

## netIncrease

RT「QUEEN GAME」。最大1000G。1Gあたり純増枚数の比較可能な公開値は今回未確定。

## basicPayout

- QUEEN BIG: 253枚超払い出しで終了、純増約200枚
- NORMAL BIG（青7）: 253枚超払い出しで終了、純増約200枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 設定は1と6の2段階。
- QUEEN BIG後、または通常時RT図柄成立で最大1000GのRT「QUEEN GAME」へ突入。
- RTは1000G消化またはBIG成立で終了。
- 通常時RT突入率は業界発表で約1/1638、HAZUSEでは設定1約1/1600・設定6約1/1200の整理があり定義差/解析差として保持。

## resetBehavior

resetBehaviorQA: PARTIAL

`ロックユークイーン3 / ロックユークイーン / QUEEN / エレコ / アルゼ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / QUEEN GAME / RT / ガックン / 天井` を組み替え、当時業界記事・旧解析/DB・回顧資料を再探索。

### settingChangeBehavior

- 設定変更時にQUEEN GAMEの残G・内部RT状態をどう処理するか: UNVERIFIED。
- 設定変更専用の朝一モード/通常時ゲーム数モード: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時のQUEEN GAME残G・内部RT状態引継ぎ: UNVERIFIED。
- 通常時ゲーム数天井の据え置き引継ぎ: NOT_APPLICABLE / NONE_CONFIRMED。

### powerCycleBehavior

- 電源OFF→ONのみでQUEEN GAME残G・内部RT状態を維持するか: UNVERIFIED。
- 設定変更挙動から電断挙動を推定しない。

### gameCounterReset

- 1000GはQUEEN GAMEの最大継続上限であり、通常時ハマリ天井ではない。
- 通常時天井用ゲームカウンタ: NOT_APPLICABLE / NONE_CONFIRMED。
- RT残Gの設定変更時初期化/引継ぎ: UNVERIFIED。

### ceilingAfterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- リセット専用短縮天井: NONE_CONFIRMED。

### modeAfterReset

- 朝一専用モード、設定変更専用モード再抽選: NONE_CONFIRMED。
- QUEEN GAME状態の設定変更時処理: UNVERIFIED。

### stateAfterReset

- QUEEN GAMEの設定変更・据え置き・電断時状態処理: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機・有利区間制度導入前）。

### resetBenefits

- 設定変更専用短縮天井、朝一RT優遇、設定変更専用ボーナス優遇: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のガックン、出目、液晶等による設定変更/据え置き判別: 十分再探索後もUNVERIFIED。

### numericResetData

- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- リセット後短縮天井G数: NONE_CONFIRMED / NOT_APPLICABLE

## sources

取得日: 2026-09-01

1. グリーンべると — 伝説のバンドがS機で復活『ロックユークイーン3』
   - https://web-greenbelt.jp/00004599/
   - 2006-03-10発表、4月末登場予定、2段階設定、BIG合算1/213〜1/184、両BIG約200枚、1000G RT、通常時RT図柄約1/1638。
   - reliability: INDUSTRY
2. パチマガスロマガ — ロックユークイーン3
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/60/k.php
   - 設定1/6の青7BIG、QUEEN BIG、合算、PAYOUT。
   - reliability: ANALYSIS_HIGH
3. HAZUSE — ロックユークイーン解析
   - https://www.hazuse.com/i/det2/rockyouqueen/top.htm
   - 2006年4月、両BIG約200枚、1000G RT、設定1/6のRT関連整理。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — ユニバーサル系
   - https://5goki.com/universal
   - 機械割98.3% / 104.4%。
   - reliability: ANALYSIS_SINGLE
5. CDJournal — クイーンとパチスロが驚異のコラボ!?
   - https://www.cdjournal.com/news/-/11102
   - 2006-03-09時点で4月末登場予定。
   - reliability: INDUSTRY
6. パチ7 — 5号機『液晶・音・リール』試行錯誤の歴史
   - https://pachiseven.jp/articles/detail/14341
   - 2006年エレコ機としての回顧確認。
   - reliability: RETROSPECTIVE_HIGH

## missingFields

- 50枚あたりゲーム数
- RT 1Gあたり純増枚数
- 設定変更時のQUEEN GAME残G・内部RT状態処理
- 据え置き時のRT状態引継ぎ
- 電源OFF→ON時のRT状態処理
- 本機固有の設定変更判別
- 公開朝一専用数値

## conflicts

- 機械割は98.04/104.87%と98.3/104.4%で丸め差。
- 通常時RT突入率は業界発表約1/1638と解析資料の設定差付き約1/1600〜1/1200で差があり、同一値として統合しない。
