# バーグラー

machineName: バーグラー
manufacturer: メーシー
releaseDate: 2006-10-23（DMMぱちタウン） / 2006-10（メーカー公式）
generation: 5号機初期
systemType: ノーマル / 完全告知 / 小役同時抽選

## payoutRateBySetting

CONFLICT

### pacnk
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.0% |
| 4 | 101.0% |
| 6 | 104.0% |

### 5号機クロニクル
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.3% |
| 4 | 100.8% |
| 6 | 103.5% |

## initialHitBySetting

| 設定 | BIG | REG |
|---:|---:|---:|
| 1 | 1/290.0 | 1/496.5 |
| 4 | 1/281.3 | 1/448.9 |
| 6 | 1/271.9 | 1/407.1 |

信頼度: ANALYSIS_SINGLE（pacnk）

メーカー公式は合成確率を設定1約1/183、設定6約1/163と説明しており、上記BIG/REGから算出される合算レンジと整合する。

## baseGamesPer50
UNVERIFIED

## netIncrease
該当なし（ノーマル機として公式掲載）。

## basicPayout

CONFLICT / 定義差あり。
- DMMぱちタウン: BIGは345枚超払い出し終了、純増約336枚 / BURGLAR CHANCEは120枚超払い出し終了、純増約126枚
- 5号機クロニクル: BIG約270枚 / REG約100枚

数値差が大きいため平均化しない。払い出し条件と実獲得表現の混同可能性も含めQA対象。

## modeSpecificMinimumData

- メーシー
- 5号機
- 完全告知
- ボーナス成立ゲームは第3停止後に必ず告知
- 小役とボーナスの同時抽選
- 設定1/4/6の3段階

## resetBehavior — v0.7 retroactive QA

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。バーグラー/バーグラー3/メーシー/2006と「設定変更/リセット/朝一/設定変更時」を組み替え、公式・旧解析・DB・回顧資料を再探索したが、本機固有の設定変更時内部処理を直接確定できず。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き/宵越しで再探索したが、本機固有の内部状態引継ぎを直接説明する資料を確定できず。通常ゲーム数天井は非搭載と確認できるため、天井G数の宵越しは非該当。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ON/電断/朝一/初期出目を組み替えて再探索したが、本機固有の直接資料なし。

gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING。pacnkの機種整理で「天井機能は非搭載」を確認。通常ゲーム数天井のリセット/引継ぎは非該当。

ceilingAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING。

modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED。通常ゲーム数モードによる当選管理は確認できない。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の内部状態を直接説明する本機固有資料を確定できず、一般的な5号機ノーマル機の挙動から補完しない。

advantageousSectionReset: NOT_APPLICABLE（5号機初期・有利区間制度前）。

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の短縮天井、朝一高確、当選率優遇など公開恩恵を確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の主要な不利要素を確認できず。

resetDetection: UNVERIFIED_AFTER_RESEARCH。バーグラー/バーグラー3/メーシーと「ガックン/リールガックン/初期出目/設定変更判別/据え置き」を組み替えたが、本機固有の確定的変更判別根拠を回収できず。

numericResetData:
- normalCeilingThreshold: NOT_APPLICABLE_NO_CEILING
- resetSpecificCeiling: NOT_APPLICABLE
- resetModeDistribution: NOT_APPLICABLE_NO_MODE_CONFIRMED
- resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
- morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
- resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_WITH_NO_CEILING_CONFIRMED_AND_DEVICE_SPECIFIC_RESET_DETAILS_UNVERIFIED

resetResearchNote:
- 2026-09-02に公式、DMM、pacnk、旧/回顧DBを再探索。
- メーカー公式は本機を5号機ノーマル・完全告知・小役同時抽選機として掲載。
- pacnkは天井機能非搭載を明記。これによりゲーム数天井/リセット短縮天井だけは非該当として確定できる。
- 設定変更/据え置き/単純電断の本機固有処理、ガックン等は直接資料がないため推測補完していない。
- 既存性能コアのPARTIAL/CONFLICT内容は今回のresetBehavior QAで変更していない。

## sources

初回取得日: 2026-08-31
resetBehavior QA取得日: 2026-09-02

1. ユニバーサルエンターテインメント公式「バーグラー」 — https://www.universal-777.com/product/slot/burglar/ — メーシー、5号機、ノーマル、2006年10月、完全告知、設定1/6の合成確率 — reliability: OFFICIAL
2. DMMぱちタウン「バーグラー」 — https://p-town.dmm.com/machines/1378 — 導入開始日2006-10-23、ボーナス払い出し条件/純増表記、朝イチ解析は準備中表示 — reliability: ANALYSIS_HIGH
3. pacnk「バーグラー 設定判別ツール」 — https://pacnk.com/slot/tools/sh_bag.html — 設定1/4/6のBIG/REG/PAYOUT、天井機能非搭載 — reliability: ANALYSIS_SINGLE
4. 5号機クロニクル「ユニバーサル系5号機一覧」 — https://5goki.com/universal — 2006年10月、機械割、獲得枚数の別資料 — reliability: ANALYSIS_SINGLE
5. P-WORLD「2006年10月導入機種一覧」 — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2006-10 — 2006年10月導入機として掲載 — reliability: ANALYSIS_HIGH

## missingFields

- 50枚あたりゲーム数
- 獲得枚数の定義差解消
- 設定別BIG/REGの別ソース照合
- 設定変更時の本機固有内部処理
- 据え置き時の本機固有内部状態引継ぎ
- 単純電源OFF→ON時の本機固有復帰挙動
- ガックン/初期出目等による設定変更判別
- 設定変更専用の公開朝一数値

## conflicts

- 機械割はpacnk 98.0/101.0/104.0% と5号機クロニクル 98.3/100.8/103.5%で小差。
- ボーナス獲得性能はDMMと5号機クロニクルで大きな差があり、現時点ではCONFLICT。平均化しない。
