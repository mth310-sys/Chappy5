# 恐怖新聞

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: 恐怖新聞
manufacturer: アリストクラートテクノロジーズ
releaseDate: 2007-09-10
generation: 5号機
systemType: A+ART / ボーナス+CZ+ART

## releaseDate evidence

- P-WORLDは「恐怖新聞『2007年』」として2007年機を収録。
- P-Summaが引用する当時機種記録では導入日を `2007-09-10` と明記。
- 5号機クロニクル、タイアップ機一覧、2007年回顧資料はいずれも `2007/9` を確認。
- 月単位資料と具体日資料が整合するため、本DB releaseDate は `2007-09-10` とする。

信頼度: ANALYSIS_HIGH / RETROSPECTIVE

## payoutRateBySetting

数値が資料間で大きく競合するため平均せず双方を保持する。

### 5号機クロニクル

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.8% |
| 3 | 100.7% |
| 4 | 103.7% |
| 5 | 106.4% |
| 6 | 109.2% |

### 後年シリーズ整理資料

| 設定 | 機械割 |
|---|---:|
| 1 | 98.2% |
| 2 | 99.4% |
| 3 | 101.2% |
| 4 | 102.4% |
| 5 | 103.6% |
| 6 | 105.4% |

判定: `CONFLICT`

信頼度: CONFLICT

## initialHitBySetting

パチ＆スロ必勝本と5号機クロニクルで精密値が一致。

| 設定 | BIG合算（大除霊+除霊） | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/356.17 | 1/204.80 | 1/130.03 |
| 2 | 1/341.33 | 1/204.80 | 1/128.00 |
| 3 | 1/321.25 | 1/204.80 | 1/125.07 |
| 4 | 1/309.13 | 1/204.80 | 1/123.19 |
| 5 | 1/297.89 | 1/204.80 | 1/121.36 |
| 6 | 1/282.48 | 1/204.80 | 1/118.72 |

BIG内訳:
- 大除霊BONUS合算: `1/712.35 → 1/564.97`
- 除霊BONUS合算: `1/712.35 → 1/564.97`
- 各色/各組合せはそれぞれ `1/1424.70 → 1/1129.93`

信頼度: ANALYSIS_HIGH

## baseGamesPer50

`恐怖新聞 / 恐怖新聞2007 / アリストクラート / 1000円 / 50枚 / ベース / コイン持ち / 小役確率` へ検索語を変え、P-WORLD、K-Navi、必勝本、5号機DB、回顧資料を横断したが、本機固有の比較可能な50枚あたりゲーム数を確認できなかった。

- `UNVERIFIED`

信頼度: UNVERIFIED

## netIncrease

- ART「ポルターガイストタイム」: 100G継続、ボーナス成立でも終了。
- K-Navi: 純増 約 `+0.4枚/G`。
- 後年シリーズ整理資料: 純増 約 `+0.6枚/G`。

定義・解析値が競合するため平均せず `CONFLICT` として保持する。

信頼度: CONFLICT

## basicPayout

- パチ＆スロ必勝本: 大除霊BONUS 平均約270枚 / 除霊BONUS 平均約270枚。
- P-WORLD / K-Navi: 大除霊BONUS・除霊BONUSは345枚を超える払い出しで終了、憑依CHANCE（REG相当）は28枚を超える払い出しで終了。
- 後年シリーズ整理資料: REG実獲得目安 約34枚。

払い出し終了条件と実獲得目安は定義を分けて保持する。

信頼度: ANALYSIS_HIGH / OLD_DB

## modeSpecificMinimumData

- 全ボーナス後に30GのCZ「憑依CHANCE」へ移行。
- CZ中に特殊リプレイ成立で100G ART「ポルターガイストタイム」へ突入。
- ARTは100G消化またはボーナス成立で終了。
- K-NaviはART純増約0.4枚/G、後年整理資料は約0.6枚/Gで競合。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `恐怖新聞 / 恐怖新聞2007 / アリストクラート / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 憑依CHANCE / ポルターガイストタイム / ガックン` を組み替え、P-WORLD、K-Navi、必勝本、5号機DB、当時系・後年回顧資料を横断した。
- 通常時ゲーム数天井、設定変更専用の短縮天井、朝一専用通常モードは `NONE_CONFIRMED`。
- 設定変更時にCZ/ART残状態がどう処理されるか、本機固有の高信頼資料は確定できず `UNVERIFIED`。

carryOverBehavior:
- 据え置き時に引き継ぐ通常時天井ゲーム数は `NOT_APPLICABLE / NONE_CONFIRMED`。
- CZ「憑依CHANCE」残G、ART「ポルターガイストタイム」残G、ボーナス成立済み状態等の据え置き時処理は `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみで朝一専用モード、短縮天井、公開当選率優遇が発生する根拠は `NONE_CONFIRMED`。
- CZ/ART残G・成立済みボーナスの電断時処理は本機固有資料で確定できず `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井は `NONE_CONFIRMED`。
- 設定変更/据え置きで追跡すべき公開通常時天井カウンタは確認できない。
- CZ/ARTの残ゲーム数処理は `UNVERIFIED`。

ceilingAfterReset:
- 通常時天井および設定変更後短縮天井は `NONE_CONFIRMED`。

modeAfterReset:
- 通常時モードテーブル、朝一専用モード、設定変更時専用モード振り分けは `NONE_CONFIRMED`。
- CZ/ART状態の扱いは `UNVERIFIED`。

stateAfterReset:
- CZ/ARTを搭載するため、設定変更時の残状態処理は物差し上重要だが、本機固有資料を確定できず `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機・有利区間制度導入前）。

resetBenefits:
- リセット専用の短縮天井、朝一高確、初当たり優遇、専用CZ/ART突入率は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の主要不利要素は `NONE_CONFIRMED`。

resetDetection:
- 本機固有のリールガックン、液晶/ランプ、CZ/ART残り表示などによる確定的な設定変更判別は、十分再探索後も `UNVERIFIED`。

numericResetData:
- 短縮天井: NONE_CONFIRMED
- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 設定変更時CZ/ART残G処理: UNVERIFIED

## sources

取得日: 2026-08-31

1. P-WORLD — 恐怖新聞「2007年」
   - https://www.p-world.co.jp/machine/database/4872
   - 2007年機、種別パチスロ、大除霊/除霊BONUS345枚超・憑依CHANCE28枚超の払い出し終了条件。
   - reliability: OLD_DB
2. K-Navi — 恐怖新聞
   - https://p-kn.com/slot/634/
   - 30G CZ「憑依CHANCE」、100G「ポルターガイストタイム」、ボーナス後ART構造。
   - reliability: ANALYSIS_HIGH
3. K-Navi — ポルターガイストタイム
   - https://p-kn.com/slot/634/3835/
   - 特殊リプレイでART突入、100G、ボーナス成立で終了、純増約0.4枚/G。
   - reliability: ANALYSIS_HIGH
4. パチ＆スロ必勝本 — 恐怖新聞 基本スペック
   - https://p.hisshobon.jp/machine/961/1/14918
   - 設定別大除霊/除霊/BIG/REG/ボーナス合算精密値、BIG系平均約270枚。
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — アリストクラート5号機全機種一覧
   - https://5goki.com/aristocrat
   - 2007/9導入、設定別ボーナス精密値、機械割96.9〜109.2%。
   - reliability: RETROSPECTIVE
6. P-Summa — 週刊少年チャンピオン版権パチスロ整理
   - https://psumma.jp/trend/67902/
   - 2007-09-10導入とする当時機種記録を引用。
   - reliability: RETROSPECTIVE / DATE_CORROBORATION
7. パチ7 — アリストクラート全機種レビュー
   - https://pachiseven.jp/articles/detail/11837
   - 2007年アリスト機として恐怖新聞、A+ART、ボーナス後特殊リプレイ経由ARTのゲームフローを確認。
   - reliability: RETROSPECTIVE
8. パチマガスロマガFREE — 恐怖新聞回顧
   - https://pachimaga.com/free/special/adc53f6b71434383d0aab079c502ca80a9f265f6.php
   - 2007年アリストクラート機、A+ARTとしての位置づけを確認。
   - reliability: RETROSPECTIVE / ANALYSIS_HIGH
9. 恐怖新聞シリーズ機械割整理
   - https://www.marimo0925.net/pachislot-kyouhushinbun-kikaiwari-ranking-ban/
   - 機械割98.2〜105.4%、ART純増約0.6枚/G、BIG系約270枚・REG約34枚。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / 1000円ベース
- 設定変更/据え置き/電源OFF→ON時のCZ「憑依CHANCE」残G・ART「ポルターガイストタイム」残Gの扱い
- 成立済みボーナス等の特殊状態の電断/設定変更処理
- 本機固有のガックン等による変更判別

## conflicts

- 機械割: `96.9〜109.2%`（5号機クロニクル） vs `98.2〜105.4%`（後年シリーズ整理資料）。平均せずCONFLICT。
- ART純増: 約`0.4枚/G`（K-Navi） vs 約`0.6枚/G`（後年シリーズ整理資料）。平均せずCONFLICT。

## QA status

- coreStatus: PARTIAL（baseGamesPer50未確認、機械割/ART純増CONFLICT）
- resetBehaviorQA: PARTIAL
- resetRetroactiveQA: 新規収集時同時実施（2026-08-31）
