# サンダーバードNEOXX

machineName: サンダーバードNEOXX
manufacturer: 藤商事
releaseDate: 2006-06
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: PARTIAL
qaResetBehavior: PARTIAL

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
- 藤商事の初5号機とする後年一覧資料あり

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `サンダーバードNEOXX / サンダーバード NEO XX / 藤商事 / 設定変更 / リセット / 朝一 / RT / 設定変更時` を組み替え、古い解析DB、5号機回顧、当時攻略系、掲示板系を再探索したが、設定変更時にSBIG後50G RT・内部RT状態をどう処理するかはUNVERIFIED。

carryOverBehavior:
- 据え置き時にRT残G/内部RT状態を引き継ぐかはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみでRT残G/内部状態を維持・初期化するかはUNVERIFIED。

gameCounterReset:
- 通常時のボーナス間ゲーム数天井は今回確認できずNONE_CONFIRMED。
- RT残Gが設定変更時にリセットされるかはUNVERIFIED。

ceilingAfterReset:
- 設定変更時の短縮天井・朝一専用天井は今回確認できずNONE_CONFIRMED。

modeAfterReset:
- 朝一専用モード/設定変更専用モードは確認できずNONE_CONFIRMED。

stateAfterReset:
- SBIG後RT中の設定変更/据え置き/電断時の状態処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更固有の朝一RT/CZ等の恩恵は今回確認できずNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の不利要素は今回確認できずNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、ランプ/液晶表示、RT状態等による設定変更・据え置き判別は、検索語・資料系統変更後もUNVERIFIED。

numericResetData:
- 設定変更時RT突入率、朝一当選率、短縮G数、状態振り分け等の比較可能な公開数値は今回UNVERIFIED。

## sources

取得日: 2026-08-31

1. HAZUSE — サンダーバードネオXX 解析・機種情報
   - https://www.hazuse.com/i/data/thunderbirds/top.htm
   - 5号機、2006年6月、2種BIG、各設定別BIG確率、機械割、SBIG後50G RT
   - reliability: ANALYSIS_HIGH
2. 藤商事5号機一覧の後年整理資料
   - https://artikeldigital.com/ja/%E8%97%A4%E5%95%86%E4%BA%8B
   - 2006年6月、藤商事初の5号機
   - reliability: ANALYSIS_SINGLE
3. 娯楽の学校 — パチスロ5号機 2005-2006 全機種リスト
   - https://goraku-gakkou.com/5gouki-2005-2006/
   - サンダーバードNEOXXを藤商事・2006年6月導入機として掲載
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields

- 50枚あたりゲーム数
- RT純増/G
- 設定別2種BIG合算表の別ソース照合
- 機械割の別ソース照合
- 設定変更時のRT状態処理
- 据え置き時のRT残G/状態引継ぎ
- 電源OFF→ONのみのRT状態処理
- 本機固有の変更判別/ガックン
- 公開朝一数値

## conflicts

現時点で明確な競合値なし。ただし設定1機械割91.0%は初期5号機として極端に低い値のため、後続QAで別資料照合を優先する。

status: PARTIAL
