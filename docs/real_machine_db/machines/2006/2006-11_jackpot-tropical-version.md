# ジャックポット・トロピカルバージョン

machineName: ジャックポット・トロピカルバージョン
manufacturer: 岡崎産業
releaseDate: 2006-11（納品11月中旬予定）
generation: 5号機初期
systemType: ノーマル / BIG+REG
formalModelName: アストラル
coreStatus: COMPLETE_CORE_RESET_QA_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | CONFLICT: 96.18〜96.2% / 98.18% |
| 2 | 98.13〜98.1% |
| 3 | 101.04〜101.0% |
| 4 | 104.47〜104.5% |
| 5 | 107.44〜107.4% |
| 6 | 110.13〜110.1% |

信頼度: CONFLICT（設定1） / ANALYSIS_HIGH（設定2〜6）

設定1のみ当時業界記事が98.18%、後年スペック資料が96.18〜96.2%で競合。平均化しない。

## initialHitBySetting

### BIG / REG

| 設定 | BIG | REG | 合成 |
|---|---:|---:|---:|
| 1 | 1/318.1 | 1/590.4 | 約1/206.7 |
| 2 | 1/306.2 | 1/565.0 | 約1/198.5 |
| 3 | 1/287.4 | 1/541.6 | 約1/187.8 |
| 4 | 1/269.7 | 1/492.8 | 約1/174.3 |
| 5 | 1/258.0 | 1/439.8 | 約1/162.6 |
| 6 | 1/249.2 | 1/394.8 | 約1/152.8 |

信頼度: ANALYSIS_HIGH

BIG/REGは後年保存スペック、合成の端点1/206.7〜1/152.8は当時業界記事とも整合。

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」等へ検索語を変更して再探索したが、今回比較可能な数値を確定できず。

## netIncrease

該当なし（ノーマルタイプ）

## basicPayout

- BIG: 約329枚
- REG: 約104枚

信頼度: INDUSTRY

## modeSpecificMinimumData

- 岡崎産業5号機第1弾
- BIG+REG
- ボーナス同時抽選役にリプレイを採用
- 従来ジャックポット系のリーチ目「リプレイテンパイはずれ」を継承
- 当時業界発表および後年保存スペックは本機をノーマル/BIG+REG機として扱い、ART/AT/RTを搭載した旨の記載は確認されない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH / NO_SPECIAL_RESET_FEATURE_CONFIRMED**。機種名＋設定変更/朝一/リセット/据え置き/電源OFF・ON/天井/RTを組み替え、当時業界記事、保存スペック、後年DB、設定判別資料を再探索したが、本機固有の設定変更時内部処理を直接説明する資料は確定できなかった。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の内部状態について本機固有の直接資料なし。通常時ゲーム数天井・ART/RT・ゲーム数モード等の継承対象自体も公開仕様上確認できない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の初期出目/内部状態等を説明する直接資料は未確認。

gameCounterReset: **NO_FIXED_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。当時業界資料はBIG+REGのノーマル機として紹介し、再探索でもゲーム数到達型天井を確認できない。したがって「リセットで天井G数が何Gになる」といった数値は設定しない。

ceilingAfterReset: **NOT_APPLICABLE_TO_CONFIRMED_SPEC / NO_CEILING_CONFIRMED**。設定変更専用の短縮天井・救済G数は確認なし。

modeAfterReset: **NO_GAME_NUMBER_MODE_CONFIRMED / RESET_DISTRIBUTION_UNVERIFIED**。ART/AT系の通常/天国等ゲーム数モードは確認されず、設定変更後専用モード振り分け数値も確認なし。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ボーナス成立状態等を含む低レベル内部処理は物差し用途で推測しない。公開仕様上、継承価値のあるART/RT残G・ストック状態は確認されない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機初期・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用高確、短縮天井、RT/ART付与等は確認できない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。公開仕様上の天井進捗消去等の不利要素は確認できない。

resetDetection: **NO_DEDICATED_MORNING_INDICATOR_CONFIRMED / NUMERICAL_SETTING_INFERENCE_ONLY**。後年設定判別資料はBIG/REG・オレンジ確率による数値判別を中心とし「設定示唆なし」としている。これは朝一の設定変更確定判別ではない。ガックン/初期出目/ランプ等の本機固有変更判別は再探索しても確定できず。

numericResetData:
- normalCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- morningBenefitNumeric: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH / SPECIAL_RESET_FEATURE_NONE_CONFIRMED**

## sources

取得日: 2026-09-04（resetBehavior QA更新）

1. P-WORLD / グリーンべると — 岡崎産業が5号機『ジャックポット』発表
   - https://news.p-world.co.jp/articles/1861/greenbelt
   - 2006-09-21発表、型式名アストラル、岡崎産業5号機第1弾、BIG約329枚/REG約104枚、合成1/206.7〜1/152.8、出玉率98.18〜110.13%、納品11月中旬予定
   - reset QA: BIG+REGノーマル仕様の一次時代業界根拠。朝一専用リセット仕様は記載なし
   - reliability: INDUSTRY_HIGH
2. 5号機クロニクル — 岡崎産業5号機全機種一覧
   - https://5goki.com/okazaki
   - 導入2006/11、設定別機械割96.2〜110.1%
   - reliability: ANALYSIS_SINGLE
3. pachinko’s blog — 岡崎産業「ジャックポット・トロピカルバージョン」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2006/10/jackpot-tropical-version
   - ノーマルタイプ、設定別BIG 1/318.1〜1/249.2、REG 1/590.4〜1/394.8、出玉率96.18〜110.13%
   - reliability: ANALYSIS_SINGLE
4. pacnk 設定判別ツール — ジャックポット・トロピカルバージョン
   - https://pacnk.com/slot/tools/sh_jakkupottotoropikaruv2006.html
   - BIG/REG/オレンジ/PAYOUTの設定差を保存し、設定示唆0.0・数値判別中心とする。朝一変更確定示唆ではない
   - reliability: RETROSPECTIVE_ANALYSIS_MEDIUM

## missingFields

- 50枚あたりゲーム数 / ベース
- settingChangeBehaviorの本機固有直接記述
- pure powerCycleBehavior
- gakkun/初期出目等の朝一変更判別

## conflicts

- 設定1機械割: 当時業界記事98.18%に対し、5号機クロニクル96.2%、保存スペック96.18%。設定2〜6は後者と概ね整合するため、設定1は誤記可能性を含むCONFLICTとして双方を保持。
- 導入月: 一部保存ページは2006.10リリース表記だが、当時業界記事の納品予定11月中旬と5号機クロニクル2006/11を優先し、本DBでは実導入月2006-11に配置。
