# パチスロ ナイトライダー

- machineName: パチスロ ナイトライダー
- modelName: ナイトライダーSP
- manufacturer: 銀座
- releaseDate: 2008-04-07
- releaseDateConfidence: ANALYSIS_HIGH / INDUSTRY_RELEASE_RECORD
- generation: 5号機初期
- systemType: ボーナス + RT（CZ経由・25G/100G RT）
- coreStatus: PARTIAL
- resetBehaviorQA: PARTIAL
- acquiredAt: 2026-09-01

## 性能コア

### payoutRateBySetting

5号機クロニクル掲載値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.7% |
| 3 | 101.1% |
| 4 | 102.9% |
| 5 | 106.2% |
| 6 | 109.6% |

- confidence: ANALYSIS_SINGLE
- K-Navi現存ページは機械割欄を「未発表」としており、メーカー公表系列との直接照合は未取得。

### initialHitBySetting

#### BIG合成

| 設定 | BIG |
|---:|---:|
| 1 | 1/395 |
| 2 | 1/383 |
| 3 | 1/362 |
| 4 | 1/347 |
| 5 | 1/297 |
| 6 | 1/266 |

#### MIDDLE合成

| 設定 | MIDDLE |
|---:|---:|
| 1 | 1/585 |
| 2 | 1/575 |
| 3 | 1/542 |
| 4 | 1/516 |
| 5 | 1/448 |
| 6 | 1/407 |

#### ボーナス合成

| 設定 | 合成 |
|---:|---:|
| 1 | 1/235.7 |
| 2 | 1/230.0 |
| 3 | 1/217.0 |
| 4 | 1/207.4 |
| 5 | 1/179.1 |
| 6 | 1/161.0 |

- P-WORLD / K-Naviでボーナス合成値が一致。
- BIG/MIDDLE設定別値は後年機種整理資料で取得。
- confidence: ANALYSIS_HIGH（合成） / ANALYSIS_SINGLE（BIG・MIDDLE内訳）

### baseGamesPer50

- UNVERIFIED_AFTER_RESEARCH
- `パチスロ ナイトライダー / ナイトライダーSP / 銀座` と `50枚 / 1000円 / 千円 / ベース / コイン持ち` を組み替え、P-WORLD、K-Navi、当時業界記事、後年DB・回顧資料を横断したが比較可能な直接値を確定できなかった。

### netIncrease

- RT「ナイトタイム」: 約 +0.6枚/G
- RTゲーム数: 25G または 100G
- RTループ率: 約50%
- confidence: INDUSTRY

### basicPayout

- BIG: 純増約265枚
- MIDDLE: 純増約104枚
- P-WORLDの払い出し終了条件: BB 345枚超 / MB 129枚超
- confidence: INDUSTRY / ANALYSIS_HIGH

### modeSpecificMinimumData

- ボーナス終了後、バトルリプレイ成立後、RT終了後にCZ「ターボゾーン」へ移行。
- CZ中にRT突入契機の特殊リプレイ成立で25Gまたは100GのRT「ナイトタイム」へ突入。
- CZは終了契機特殊リプレイ成立まで継続。
- RT中はボーナス成立でも終了する通常のボーナス+RT系統として扱うが、細かな内部抽選は本DB対象外。

## resetBehavior

- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
- ceilingAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetBenefits: NONE_CONFIRMED
- resetPenalties: NONE_CONFIRMED
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- numericResetData: NONE_CONFIRMED

### resetBehavior調査メモ

- `ナイトライダー / ナイトライダーSP / パチスロ ナイトライダー / 銀座` に対し、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / 状態 / ガックン / 初期出目 / RT / ターボゾーン / ナイトタイム` を組み替えて再探索。
- 通常時ゲーム数天井・リセット短縮天井・朝一専用モード・朝一専用恩恵数値は確認できなかった。
- CZ/RT構造は確認できるが、設定変更・据え置き・電源OFF→ON時にCZ/RT残G・内部状態をどう扱うかの本機固有直接資料を確定できず、一般的な5号機RT機の挙動を流用しない。
- 本機固有のガックン・初期出目など設定変更判別材料も直接根拠を確定できなかった。

## 導入時期

- 旧業界史資料: 2008-04-07発売。
- グリーンべると（2008-02-22）: 2008年4月上旬から納品開始予定。
- 5号機クロニクル / pacnk: 2008年4月導入。
- 本DBでは日精度の旧業界史記録 `2008-04-07` をreleaseDateに採用し、業界一次資料の「4月上旬納品開始予定」と整合する範囲として扱う。

## sources

取得日: 2026-09-01

1. グリーンべると「銀座が『パチスロ ナイトライダー』発表」
   - https://web-greenbelt.jp/00003455/
   - 2008-02-22
   - RT/CZ構造、RT25G/100G、純増約+0.6枚/G、ループ率約50%、BIG約265枚、MIDDLE約104枚、合成1/235.7〜1/161.0、4月上旬納品予定
   - confidence: INDUSTRY
2. P-WORLD「パチスロナイトライダー」
   - https://www.p-world.co.jp/machine/database/5112
   - 型式名ナイトライダーSP、合成確率、BB/MB払い出し終了条件、RT機
   - confidence: ANALYSIS_HIGH / OLD_DB
3. K-Navi「パチスロ ナイトライダー」
   - https://p-kn.com/slot/779/
   - 合成確率、機械割未発表表示、ボーナス払い出し条件
   - confidence: ANALYSIS_HIGH
4. 5号機クロニクル 銀座5号機一覧
   - https://5goki.com/ginza
   - 2008/4導入、設定別機械割97.5〜109.6%
   - confidence: ANALYSIS_SINGLE
5. pachinko’s blog「銀座『パチスロ ナイトライダー』の筺体＆スペック＆情報」
   - https://pachinko.hatenablog.jp/entry/2008/04/knight-rider
   - BIG/MIDDLE/合算設定別確率、2008年4月リリース
   - confidence: ANALYSIS_SINGLE
6. パチスロ業界初まとめ 更新情報5
   - https://slothistory.com/kousin_kako05.html
   - ナイトライダーSP 2008-04-07発売記録
   - confidence: ANALYSIS_HIGH_ARCHIVE
7. パチンコFAN 2008年度一覧
   - https://pacnk.com/photoslot/mlist_2008.html
   - 2008年4月機として掲載
   - confidence: OLD_DB

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/電源OFF→ON時のCZ・RT状態処理: UNVERIFIED_AFTER_RESEARCH
- 本機固有resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- 現時点で主要性能値の明確な数値競合は未確認。
- 機械割は5号機クロニクルの単一系列のみ取得でき、K-Naviは「未発表」のため別系列照合待ち。
