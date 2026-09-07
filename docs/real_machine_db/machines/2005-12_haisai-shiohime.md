# はいさい潮姫

status: PARTIAL
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

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

schemaVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-08

settingChangeBehavior:
- 「はいさい潮姫 / ハイサイ潮姫 / エレコ / アルゼ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / モード」を組み合わせ、メーカー公式、P-WORLD現存DB、後年解析/回顧資料、2005年当時の実戦回顧まで再探索した。
- 2026-09-08の遡及QAでも、本機固有の設定変更時内部状態、告知状態、ゲーム数処理を直接記述する資料は追加確認できず **UNVERIFIED_AFTER_RESEARCH** を維持。

carryOverBehavior:
- 公式・現存資料上、通常時ゲーム数天井やゲーム数モードは確認できないため、天井ゲーム数の据え置き引継ぎは **NOT_APPLICABLE_TO_NORMAL_CEILING**。
- その他の内部状態持越しを示す本機固有資料は確認できず **UNVERIFIED_AFTER_RESEARCH**。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有挙動は **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと純電源OFF→ONを自動で同義扱いしない。

gameCounterReset:
- **NOT_APPLICABLE_TO_NORMAL_CEILING**。通常時ゲーム数天井は確認されない。
- ボーナス主体ノーマル機で、朝一専用ゲーム数カウンタの存在もNONE_CONFIRMED_AFTER_RESEARCH。

ceilingAfterReset:
- **NONE_CONFIRMED**。通常時天井/リセット短縮天井を示す資料は確認できない。

modeAfterReset:
- ゲーム数管理モード/朝一専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

stateAfterReset:
- 通常時はボーナス主体の完全告知機。設定変更時に別の高確/低確等へ移ることを示す本機固有資料は確認できず **UNVERIFIED_AFTER_RESEARCH**。

advantageousSectionReset:
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

resetBenefits:
- **NONE_CONFIRMED_AFTER_RESEARCH**。

resetPenalties:
- **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection:
- ガックン、初期出目、ハイビスカス表示、ゲーム数挙動等を用いた本機固有の設定変更/据え置き判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 設定変更時内部状態振り分け: UNVERIFIED_AFTER_RESEARCH

## retroQa2026-09-08
- QA_RESULT: **NO_NEW_DIRECT_RESET_CONTRACT_FOUND_AFTER_SOURCE_DIVERSIFICATION**。
- メーカー公式は機種性・設定1約1/160・253枚超払い出し終了・2005年12月発売を再確認したが、リセット契約記載なし。
- P-WORLD現存DB/掲示板、当時2005年実戦回顧、後年5号機一覧・回顧資料を追加確認したが、設定変更/据え置き/純電断の直接比較は固定できなかった。
- 既存 `coreStatus: PARTIAL` は性能コア欠損に由来するため変更しない。
- resetBehaviorの欠損は推測補完せず、今回のQAとして探索済み状態を明示する。

## sources

初回取得日: 2026-08-31 / reset QA再取得日: 2026-09-08

1. ユニバーサルエンターテインメント公式 — はいさい潮姫
   - https://www.universal-777.com/product/slot/shiohime/
   - 5号機初の沖縄系、設定1でも約1/160、BIG CHANCEは253枚超払い出し終了、同時抽選、2005年12月、エレコ。
   - reliability: OFFICIAL
2. ユニバーサル公式 2005年製品一覧
   - https://www.universal-777.com/product/slot/2005/
   - 2005年12月発売。
   - reliability: OFFICIAL
3. なな徹 — なぜパチスロの「設定」は6段階までなのか
   - https://nana-press.com/post/1591139
   - 2005年12月「ハイサイ潮姫」、2段階設定。
   - reliability: ANALYSIS_HIGH
4. ドル箱 — 2005年特集
   - https://www.dorubako.biz/year/2005.html
   - BIG設定1 1/159.06・設定6 1/141.85、REG非搭載、機械割96.9〜102.8%、253枚超払い出し終了。
   - reliability: ANALYSIS_SINGLE
5. 5号機クロニクル — ユニバーサル系5号機全機種一覧
   - https://5goki.com/universal
   - 2005年12月、エレコ、機械割96.9/102.8%。ボーナス仕様にBIG約350枚/REG約104枚との記載があり公式・他資料と整合確認が必要。
   - reliability: ANALYSIS_SINGLE
6. P-WORLD 機種DB — はいさい潮姫
   - https://www.p-world.co.jp/machine/database/4059
   - 旧機種DB・当時掲示板を再確認。resetBehaviorを確定できる仕様記述なし。
   - reliability: ANALYSIS_SINGLE
7. オイラは山佐が大好きだ！！ — 神奈川ミニスロ旅 珍新台編（2005-12-20）
   - https://plaza.rakuten.co.jp/sukisukiyamasa/diary/200512200001/
   - 2005年12月当時のテスト導入実戦回顧。機種存在・時期の補助資料。resetBehavior直接記述なし。
   - reliability: PERIOD_RECOLLECTION_SINGLE

## missingFields

- 50枚あたりゲーム数
- BIG純増枚数
- REG搭載有無の高信頼確定
- 設定変更/据え置き/電源OFF→ON時の本機固有内部挙動
- 本機固有の設定変更判別

## conflicts

REGについて、ドル箱資料は非搭載、5号機クロニクルはREG約104枚と記載。ユニバーサル公式の商品説明はBIG CHANCEのみを明示しており、REGを確認できない。別スペック・誤記の可能性も含め、平均化・確定せずCONFLICTとして保持する。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
