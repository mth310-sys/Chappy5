# はいさい潮姫

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: はいさい潮姫
manufacturer: エレコ
releaseDate: 2005-12
generation: 5号機初期
systemType: ノーマル / 完全告知 / 沖縄系

## payoutRateBySetting

確認できた設定は1・6の2段階。

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 6 | 102.8% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

BIG確率:

| 設定 | BIG |
|---|---:|
| 1 | 1/159.06 |
| 6 | 1/141.85 |

ユニバーサル公式でも「設定1でも約1/160」と確認できる。

信頼度: ANALYSIS_HIGH（設定1の概数を公式確認、精密値は二次資料）

REG: 現時点では非搭載とする二次資料を採用。ただし5号機クロニクルにREG約104枚との記載があり、公式ページはBIG CHANCEのみを説明しているためCONFLICTとして保留する。

## baseGamesPer50

UNVERIFIED

## netIncrease

該当なし。

## basicPayout

BIG CHANCE: 253枚を超える払い出しで終了（公式）。純増枚数は未確定。

## modeSpecificMinimumData

- 5号機初の沖縄系パチスロ機（ユニバーサル公式）
- ハイビスカスによる告知
- 小役とボーナスの同時抽選方式
- 目押し不要でボーナス消化可能
- 設定構成は1・6の2段階と後年資料で確認
- 有利区間制度導入前

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「はいさい潮姫 / ハイサイ潮姫 / エレコ / アルゼ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / モード」を組み合わせ、メーカー公式、P-WORLD現存DB、後年解析/回顧資料まで再探索した。
- 本機固有の設定変更時の内部状態再抽選・告知状態処理を明記した高信頼資料は確認できずUNVERIFIED。

carryOverBehavior:
- 公式・現存資料上、通常時ゲーム数天井やゲーム数モードは確認できないため、天井ゲーム数の据え置き引継ぎはNOT_APPLICABLE。
- その他の内部状態持越しを示す本機固有資料は確認できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有挙動はUNVERIFIED。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。通常時ゲーム数天井は確認されない。

ceilingAfterReset:
- NONE_CONFIRMED。通常時天井/リセット短縮天井を示す資料は確認できない。

modeAfterReset:
- ゲーム数管理モード/朝一専用モードは確認できない。

stateAfterReset:
- 通常時はボーナス主体の完全告知機。設定変更時に別の高確/低確等へ移ることを示す本機固有資料は確認できずUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。ガックン、液晶/ランプ表示、ゲーム数挙動等の本機固有の設定変更判別情報は検索語・資料系統変更後も確認できない。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — はいさい潮姫
   - https://www.universal-777.com/product/slot/shiohime/
   - 5号機初の沖縄系、設定1でも約1/160、BIG CHANCEは253枚超払い出し終了、同時抽選、2005年12月、エレコ
   - reliability: OFFICIAL
2. ユニバーサル公式 2005年製品一覧
   - https://www.universal-777.com/product/slot/2005/
   - 2005年12月発売
   - reliability: OFFICIAL
3. なな徹 — なぜパチスロの「設定」は6段階までなのか
   - https://nana-press.com/post/1591139
   - 2005年12月「ハイサイ潮姫」、2段階設定
   - reliability: ANALYSIS_HIGH
4. ドル箱 — 2005年特集
   - https://www.dorubako.biz/year/2005.html
   - BIG設定1 1/159.06・設定6 1/141.85、REG非搭載、機械割96.9〜102.8%、253枚超払い出し終了
   - reliability: ANALYSIS_SINGLE
5. 5号機クロニクル — ユニバーサル系5号機全機種一覧
   - https://5goki.com/universal
   - 2005年12月、エレコ、機械割96.9/102.8%。ボーナス仕様にBIG約350枚/REG約104枚との記載があり公式・他資料と整合確認が必要
   - reliability: ANALYSIS_SINGLE
6. P-WORLD 機種DB — はいさい潮姫
   - https://www.p-world.co.jp/machine/database/4059
   - 旧機種DBの現存ページと当時掲示板の存在を確認。resetBehaviorを確定できる仕様記述はなし。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数
- BIG純増枚数
- REG搭載有無の高信頼確定
- 設定変更/電源OFF→ON時の本機固有内部挙動
- 本機固有の設定変更判別

## conflicts

REGについて、ドル箱資料は非搭載、5号機クロニクルはREG約104枚と記載。ユニバーサル公式の商品説明はBIG CHANCEのみを明示しており、REGを確認できない。別スペック・誤記の可能性も含め、平均化・確定せずCONFLICTとして保持する。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
