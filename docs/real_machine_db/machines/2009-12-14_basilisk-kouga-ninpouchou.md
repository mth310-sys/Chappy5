# バジリスク ～甲賀忍法帖～

machineName: バジリスク ～甲賀忍法帖～
manufacturer: ミズホ
formalModelName: バジリスク1
approvalNumber: 9S0771
releaseDate: 2009-12-14
generation: 5号機
systemType: ART / BC契機バトルART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 436件地点から継続。
- 直前HANDOFF指定の2009-12-14同日群を監査し、本機がK-Naviで2009-12-14ホール導入開始と明記されていることを確認。
- 追加直前に候補パスを再確認しNot Found、LATEST_HANDOFFも436件地点のままで競合なしを確認して437件目として追加。
- 後継の「バジリスク～甲賀忍法帖～絆」（2014年）や「II」「絆2」の解析値は本機へ流用しない。

## payoutRateBySetting

- 設定1: 97.1%
- 設定2: 99.5%
- 設定3: 102.1%
- 設定4: 106.2%
- 設定5: 110.1%
- 設定6: 119.0%

P-WORLDの初代機スペック表を主値とし、後年の5号機回顧資料でも同系列を確認。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BC合算
- 設定1: 1/128
- 設定2: 1/124
- 設定3: 1/120
- 設定4: 1/117
- 設定5: 1/113
- 設定6: 1/93

P-WORLD初代機スペック表。白BCは全設定1/16384、同色・異色BCに設定差があるが、本DBでは完全再現用の色別全フラグ表までは収集対象外とする。

ART「バジリスクタイム」の設定別初当たり確率は、初代専用の比較可能な公開系列を今回確定できなかったためBC確率や天井から逆算しない。

confidence: ANALYSIS_HIGH_FOR_BC / UNVERIFIED_FOR_ART_INITIAL

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

`バジリスク1 / バジリスク 甲賀忍法帖 / ミズホ / 9S0771` と `50枚 / 1000円あたり / ベース / コイン持ち / 小役確率` を組み替え、P-WORLD、K-Navi、旧パチマガ、5号機DB、回顧資料を再探索したが、2009年初代固有の比較可能な50枚ベースを確定できなかった。後継「絆」「絆2」「天膳」の値は流用しない。

confidence: UNVERIFIED

## netIncrease

ART「バジリスクタイム」: **約+2.3枚/G**

K-NaviとP-WORLDの初代機ページで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- バジリスクチャンス（BC）: **約45枚**
- ART「バジリスクタイム」: 追想の刻→争忍の刻で構成される継続型ART

confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時はBCを契機にART「バジリスクタイム」突入を目指す。
- ART純増は約+2.3枚/G。
- P-WORLDの初代機天井情報では、**ART非当選のBCが9連続すると、次回BC成立時のART突入が確定**。
- したがって本DB上は「BC9スルー後、次回（10回目）BCでART確定」と原文の数え方を保持する。
- ART中BC成立時は継続確定＋ゲーム数上乗せとして紹介されている。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。K-Navi初代機ページに「朝イチ特典」「設定変更時はどうなる?」の専用項目、旧パチマガ初代機ページに「攻め時・ヤメ時・設定変更時」の専用項目が存在することまでは確認したが、今回取得できた検索本文では初代固有の設定変更時処理本文を回収できなかった。後継「絆」の設定変更テーブル・BCスルー天井リセット挙動は流用しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。BCスルー回数、ART関連状態の据え置き時保持を初代固有本文で確定できない。設定変更情報から逆算しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみでのBCスルー回数、ART状態、初期リール/液晶状態を直接説明する初代固有資料を確定できない。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_BC_SKIP_COUNTER**。本機の天井は通常G数ではなくART非当選BC回数管理。設定変更時に9スルー進捗がクリア/引継ぎ/再抽選のどれかは直接資料未回収。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時の救済はART非当選BC9連続→次回BCでART確定。設定変更専用の短縮回数・別天井値は確認できない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用モード、モード再抽選/引継ぎ、朝一専用モードの初代固有公開値を確定できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART中、ART待機/ストック、内部高確等の設定変更時状態処理は完全再現用詳細へ踏み込まず、ホール経営・朝一判断に必要な範囲でも今回直接確定できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。初代固有の設定変更専用恩恵・朝一優遇率を直接確定できない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。BCスルー進捗消去等を推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、BCスルー挙動等による初代固有の変更判別を直接確定できない。

numericResetData:
  normalCeiling: ART非当選BC9連続後、次回BCでART突入確定
  settingChangeBCSkipCounter: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_REQUIRED_MULTIQUERY_RESEARCH

## conflicts

- 今回採用した機械割、BC合算、ART純増、BC約45枚について、初代機資料間で採用値を覆す明確なCONFLICTは確認しなかった。
- K-Navi/P-WORLDにはART最大継続率に表現差が見られるが、完全再現用の継続率詳細は今回の物差し必須項目ではないため性能コアへ採用しない。
- 後継「絆」系の大量の検索結果は別機種として除外した。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- ART initial probability by setting: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior exact effects: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- settingChange handling of BC-skip ceiling counter: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode/state distribution: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi 初代「バジリスク 甲賀忍法帖」 — https://p-kn.com/slot/1124/ — 2009-12-14ホール導入開始、ミズホ、ART、約+2.3枚/G、朝イチ/設定変更専用項目の存在 — reliability: CONTEMPORARY_ANALYSIS_DATABASE
2. P-WORLD 初代「バジリスク 甲賀忍法帖」 — https://www.p-world.co.jp/machine/database/5796 — ミズホ、5号機ART、BC約45枚、約+2.3枚/G、BC9連続ART非当選後の次回BC天井、設定別BC合算・機械割、型式バジリスク1、検定9S0771 — reliability: MAJOR_DATABASE
3. 旧パチマガスロマガ 初代機種トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/32/mizuho_slot_32.php — 初代専用解析ページ、基本システム/ボーナス/PAYOUT/ART/「攻め時・ヤメ時・設定変更時」項目の存在 — reliability: CONTEMPORARY_ANALYSIS_INDEX
4. 5号機クロニクル ユニバーサル系一覧 — https://5goki.com/universal — 2009年ミズホ系ラインナップ・後年スペック照合 — reliability: RETROSPECTIVE_DATABASE

