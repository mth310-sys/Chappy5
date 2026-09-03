# 夢幻の如く

machineName: 夢幻の如く
manufacturer: IGTジャパン
formalModelName: ユメマボロシノゴトクY7
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-01-12
generation: 5号機
systemType: A+ART / CZ / ゲーム数・連続敗北救済
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 439件地点から継続。
- K-Naviとパチビーがホール導入開始/導入日を2010-01-12と明示。
- 追加前にrepoコード検索を行い未登録を確認。最新mainのLATEST_HANDOFFも439件地点のままで競合なしを確認して440件目として追加。
- 同名の漫画・ゲーム、タイヨーエレックのCR真・本能寺の変～夢幻の如く～は別物として除外。

## payoutRateBySetting

- 設定1: 97.80%
- 設定2: 99.65%
- 設定3: 102.83%
- 設定4: 105.22%
- 設定5: 108.17%
- 設定6: 110.48%

旧パチマガスロマガとK-Naviで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### 覇王BONUS
- 設定1: 1/5957.82
- 設定2: 1/5957.82
- 設定3: 1/5461.33
- 設定4: 1/5041.23
- 設定5: 1/4681.14
- 設定6: 1/4681.14

### 出航BONUS
- 設定1: 1/91.02
- 設定2: 1/90.52
- 設定3: 1/90.02
- 設定4: 1/89.29
- 設定5: 1/88.56
- 設定6: 1/87.38

### ボーナス合算
- 設定1: 1/89.65
- 設定2: 1/89.16
- 設定3: 1/88.56
- 設定4: 1/87.73
- 設定5: 1/86.92
- 設定6: 1/85.78

旧パチマガスロマガとK-Naviで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

旧パチマガスロマガ「1000円あたりのゲーム数」:
- 設定1: 33.77G
- 設定2: 33.88G
- 設定3: 34.10G
- 設定4: 34.32G
- 設定5: 34.55G
- 設定6: 35.59G

crankysevenの33.8G～35.6Gとも整合。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## netIncrease

ART「夢幻RUSH」: 約+1.7枚/G

- 基本1セット30G。
- ループ率＋ゲーム数上乗せ型。
- 1回の抽選で最大900Gの上乗せ性能が公開されている。
- 覇王BONUS後は次回ボーナスまで継続する「プレミアム夢幻RUSH」。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- 覇王BONUS: 約145～148枚（216枚超払い出しで終了）
- 出航BONUS: 約48枚（8回入賞または12G消化で終了）

約145枚/148枚は実獲得の丸め表現差として併記。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 出航BONUS後はCZ「合戦チャンス」へ移行し、主に2択押し順成功からARTを目指す。
- 通常状態で600G消化すると、次回ボーナス成立後のART突入が確定。
- 合戦チャンス13回連続敗北でも、次回ボーナス成立後のART突入が確定。
- ARTは30G単位で継続し、最大900G上乗せが公開されている。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **GAME_COUNTER_CLEAR_CONFIRMED**。crankysevenの本機専用解析に「設定変更時、天井までのゲーム数はクリアされる」と明記。K-Naviにも本機専用「設定変更後の挙動」項目が存在することを確認。600G救済進捗のリセットは確定とする。13連続合戦敗北カウンタ、内部高確/モード、ART/CZ状態まで同時にクリアされるかは本文を確定できず拡張しない。

carryOverBehavior: **PARTIAL_CONFIRMED_FOR_600G_COUNTER**。設定変更時のみ600G天井進捗がクリアされる直接記述から、設定変更を伴わない据え置き運用では前日ゲーム数を加味する天井狙いが成立する前提で扱う。ただし13連続合戦敗北カウンタ、内部状態、ART/CZ状態の保持範囲は `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。`夢幻の如く / IGT / 電源OFF ON / 電断 / 据え置き / 朝一` を組み替えて再探索したが、単純電源OFF→ONだけで600G進捗・合戦敗北回数・内部状態がどうなるかの本機固有本文を確定できない。

gameCounterReset: **RESET_ON_SETTING_CHANGE**。通常状態600G救済の進捗は設定変更でクリア。

ceilingAfterReset: **NORMAL_600G_FROM_ZERO**。設定変更専用の短縮天井は確認できず、600G救済を0Gから再計数するものとして扱う。13連敗救済の変更時扱いは `UNVERIFIED_AFTER_RESEARCH`。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機には通常時の内部状態/モード解析が存在するが、設定変更時の専用モード振り分け本文は回収できず、通常時のREG成立後モード振り分け等を設定変更値として転用しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/低確、CZ「合戦チャンス」、ART状態、救済回数の変更時処理を600Gカウンタ以外は確定できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更による天井短縮や朝一専用ART優遇は確認できない。

resetPenalties: **600G_CEILING_PROGRESS_LOST**。前日の通常時ハマリを設定変更すると600G救済進捗がクリアされるため、宵越し天井狙い価値は失われる。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / ステージ / 液晶 / ランプ / 設定変更判別` を追加して再探索したが、本機固有の変更判別法を確定できない。

numericResetData:
  normalGameCeiling: 通常状態600G消化で次回ボーナス後ART確定
  consecutiveLossCeiling: 合戦チャンス13連続敗北で次回ボーナス後ART確定
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH（設定変更で600G進捗クリア）
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_REQUIRED_MULTIQUERY_RESEARCH

## conflicts

- 覇王BONUSの実獲得は旧パチマガ約145枚、P-WORLD/パチビー約148枚。規定払い出し216枚超で終了という定義は一致しており、実獲得目安の丸め差として両方保持。
- formalModelNameは中古実機販売A-SLOTが「ユメマボロシノゴトクY7」と明記。公的検定資料を直接回収できていないため信頼度は下げるが、別機種混入は見当たらない。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- 13連続合戦敗北カウンタの設定変更/据え置き/電源OFF→ON時処理: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset detail: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric benefits: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi 機種トップ — https://p-kn.com/slot/1101/ — 2010-01-12導入、設定別ボーナス、機械割、ART概要、設定変更後専用項目の存在 — reliability: CONTEMPORARY_ANALYSIS_DATABASE
2. パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/54/a.php — ART+1.7枚/G、30G～900G、ボーナス獲得性能 — reliability: ANALYSIS_SINGLE_DIRECT
3. パチマガスロマガ ボーナス/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/54/h.php — 設定別ボーナス・合算・機械割 — reliability: ANALYSIS_SINGLE_DIRECT
4. パチマガスロマガ 1000円あたりG数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/54/c.php — 33.77～35.59G — reliability: ANALYSIS_SINGLE_DIRECT
5. P-WORLD — https://www.p-world.co.jp/machine/database/5764 — 天井600G、合戦13連敗救済、ART性能、獲得枚数 — reliability: INDUSTRY_DATABASE
6. パチビー — https://www.pachibee.jp/machines/index/209110013 — 2010-01-12導入、ART性能、天井600G — reliability: CONTEMPORARY_DATABASE
7. crankyseven — https://crankyseven.com/yumemaborosi-pc.htm — 33.8～35.6G、天井、設定変更時に天井ゲーム数クリア — reliability: RETROSPECTIVE_ANALYSIS_DIRECT
8. A-SLOT中古実機 — https://www.a-slot.com/SHOP/igt11.html — 型式名ユメマボロシノゴトクY7 — reliability: RETROSPECTIVE_REAL_MACHINE_SALE
