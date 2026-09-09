# サンダーバードNEOXX

machineName: サンダーバードNEOXX
manufacturer: 藤商事
releaseDate: 2006-06
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: PARTIAL
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 91.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 101.4% |
| 5 | 107.7% |
| 6 | 110.0% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

### SUPER BIG（赤7）
| 設定 | 確率 |
|---|---:|
| 1 | 1/1394.4 |
| 2 | 1/1110.8 |
| 3 | 1/829.6 |
| 4 | 1/949.8 |
| 5 | 1/704.7 |
| 6 | 1/819.2 |

### NORMAL BIG（赤7・赤7・白7）
| 設定 | 確率 |
|---|---:|
| 1 | 1/520.1 |
| 2 | 1/414.8 |
| 3 | 1/452.0 |
| 4 | 1/354.3 |
| 5 | 1/383.3 |
| 6 | 1/312.1 |

信頼度: ANALYSIS_SINGLE

## baseGamesPer50
UNVERIFIED

## netIncrease
SBIG終了後50GのRT。RT中リプレイ確率1/1.8〜1/1.9との解析資料はあるが、比較用の純増枚数/GはUNVERIFIED。

## basicPayout
- SUPER BIG: 466枚超の払い出しで終了 / 純増約360枚 / 終了後50G RT
- NORMAL BIG: 346枚超の払い出しで終了 / 純増約270枚

信頼度: ANALYSIS_HIGH（当時解析資料）

## modeSpecificMinimumData
- 5号機 / 5ライン / 3枚掛け専用
- SUPER BIG後50G RT
- RT終了条件: 50G消化 / BIG当選 / チェリー入賞
- 藤商事公式で藤商事初の5号機、2種類BIG+RT搭載を確認。

## resetBehavior
schemaVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- `サンダーバードNEOXX / サンダーバードネオXX / サンダーバード NEO XX / 藤商事 / 設定変更 / リセット / 朝一 / RT / 残G / 初期状態` を組み替え、公式、当時業界記事、古い解析DB、5号機回顧、P-WORLD旧DBまで再探索。
- 設定変更時にSBIG後50G RTの残G/内部RT状態をRESET/CARRYOVERのどちらとして処理するかを直接固定できる本機固有資料は **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動からの推測補完は行わない。
reliability: UNVERIFIED_AFTER_RESEARCH

### carryOverBehavior
- 据え置き時にRT残G/内部RT状態を引き継ぐかについて、本機固有の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONのみでRT残G/内部RT状態を維持するか初期化するかは **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 通常時のゲーム数天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- RT残Gの設定変更時処理は **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### ceilingAfterReset
- 設定変更時の短縮天井・朝一専用天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: RESEARCH_EXHAUSTED_NO_CONFIRMED_NUMERIC

### modeAfterReset
- 朝一専用モード/設定変更専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: RESEARCH_EXHAUSTED_NO_CONFIRMED_MODE

### stateAfterReset
- SBIG後50G RT中の設定変更/据え置き/純電断時の状態処理は **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_ADVANTAGEOUS_SECTION**。

### resetBenefits
- 設定変更固有の朝一RT/CZ等の恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更固有の不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、ランプ/液晶表示、RT状態等による設定変更・据え置き判別は、資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 公開朝一数値（設定変更時RT突入率、短縮G数、状態振り分け等）: **NONE_CONFIRMED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09

1. 藤商事公式 — パチスロ サンダーバードネオXX
   - https://www.fujimarukun.co.jp/products/thunder_neo/
   - 藤商事初の5号機、2種類BIG、SUPER BIG後RT搭載。
   - reliability: OFFICIAL_HIGH
2. グリーンべると — 藤商事がビックタイトル2機種を同時発表（2006-04-24）
   - https://web-greenbelt.jp/00004626/
   - 当時発表時系列の補強。
   - reliability: INDUSTRY_HIGH
3. HAZUSE — サンダーバードネオXX 解析・機種情報
   - https://www.hazuse.com/i/data/thunderbirds/top.htm
   - 5号機、2006年6月、2種BIG、設定別BIG確率、機械割、SBIG後50G RT。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — サンダーバードNEO
   - https://www.p-world.co.jp/machine/database/4180
   - 型式名サンダーバードネオXXの旧DB確認。
   - reliability: INDUSTRY_DB_SUPPORT
5. 娯楽の学校 — パチスロ5号機 2005-2006 全機種リスト
   - https://goraku-gakkou.com/5gouki-2005-2006/
   - 2006年導入世代の回顧照合。
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields
- 50枚あたりゲーム数
- RT純増/G
- 設定別2種BIG合算表の別ソース照合
- 機械割の別ソース照合
- 設定変更時のRT残G/内部RT状態処理: UNVERIFIED_AFTER_RESEARCH
- 据え置き時のRT残G/状態引継ぎ: UNVERIFIED_AFTER_RESEARCH
- 電源OFF→ONのみのRT状態処理: UNVERIFIED_AFTER_RESEARCH
- 本機固有の変更判別/ガックン: UNVERIFIED_AFTER_RESEARCH
- 公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
現時点で明確な競合値なし。ただし設定1機械割91.0%は初期5号機として極端に低い値のため、性能コア側はPARTIALのままとし、将来の別資料発見時に再照合する。

status: PARTIAL
