# ネオン物語

machineName: ネオン物語
manufacturer: 中京遊技
formalModelName: ネオン物語
approvalNumber: 9S0312
releaseDate: 2009-11-17（PachiBeeの導入日。P-WORLDは2009年11月の月粒度）
generation: 5号機
systemType: ボーナス+RT / CZ経由RT / ゲーム数天井CZ
coreStatus: PARTIAL_CORE_PAYOUT_AND_INDIVIDUAL_BONUS_PROBABILITIES_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainの `LATEST_HANDOFF.md` 431件地点から継続。
- 431件目 `サラマンダー` は2009-11-16導入予定、`ネオン物語` はPachiBeeで2009-11-17導入のため、その次として処理。
- GitHub mainのコード検索で `ネオン物語` の既存レコードがないことを再確認してから追加。
- P-WORLDは導入開始を2009年11月とし、型式 `ネオン物語`、検定番号 `9S0312` を掲載。具体日はPachiBeeを主値とする。

## payoutRateBySetting

**UNVERIFIED_AFTER_RESEARCH**

- 旧パチマガスロマガの本機専用PAYOUTページは現存するが、PAYOUT欄自体が「現在調査中」。
- P-WORLDの現存ページは「ボーナス割合、機械割」という見出しを持つが、検索取得できる表はボーナス合算のみで、設定別機械割の数値を確定できない。
- `ネオン物語 / 中京遊技 / 機械割 / 出玉率 / PAYOUT / 設定1 / 設定6` を組み替え、P-WORLD、旧パチマガスロマガ、攻略DB、当時・後年回顧資料を再探索したが、比較可能な設定別機械割系列は回収できなかった。
- 後年回顧ページでも出玉率欄は空欄のままのため、推定で埋めない。

confidence: UNVERIFIED

## initialHitBySetting

### ボーナス合算

- 設定1: 1/206.1
- 設定2: 1/188.9
- 設定3: 1/178.1
- 設定4: 1/163.0
- 設定5: 1/156.8
- 設定6: 1/149.9

P-WORLD、旧パチマガスロマガ、pacnk、後年回顧資料で同一系列を確認。

### BIG / MB / SB 個別確率

**UNVERIFIED_AFTER_RESEARCH**

- ボーナスはBIG / MB / SBの3種類を搭載することは複数資料で一致。
- 旧パチマガスロマガの現存「ボーナス抽選確率」ページは合算のみを掲載。
- 個別設定別確率は検索語・資料系統を変えても今回確定できず、合算から逆算しない。

confidence: ANALYSIS_HIGH_FOR_COMBINED / UNVERIFIED_FOR_INDIVIDUAL

## baseGamesPer50

1000円あたりのゲーム数（50枚貸し換算）:

- 設定1: 37G
- 設定6: 39G
- 設定2〜5の個別値: **UNVERIFIED_AFTER_RESEARCH**

旧パチマガスロマガ本機専用ページが `設定1…37G ～ 設定6…39G` と直接掲載。中間設定の個別数値は表示されないため補間しない。

confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

RT「ラブラブタイム」: **約+0.5枚/G**

- RTは30Gまたは100G。
- RT終了後は再びCZへ移行。
- P-WORLD、PachiBee、旧パチマガスロマガでRT純増約+0.5枚/Gを確認。

confidence: ANALYSIS_HIGH + DATABASE_CROSSCHECK

## basicPayout

- BIG: 最大約270枚（348枚払い出し）
- MB: 最大約207枚（264枚払い出し）
- SB / REG相当: 最大約110枚（137枚払い出し）

P-WORLDはBIG約270枚 / MB約207枚 / SB約110枚。旧パチマガスロマガは純増最大270 / 207 / 110枚と規定払い出し348 / 264 / 137枚を掲載。

confidence: ANALYSIS_HIGH + DATABASE_CROSSCHECK

## modeSpecificMinimumData

- 新規参入メーカー中京遊技の第1弾。
- ボーナス後、RT後、通常時700G消化後にCZへ移行。
- CZ中は通常リプレイ成立で通常へ転落、特殊リプレイ成立でRT「ラブラブタイム」へ。
- RTは30Gまたは100G、純増約+0.5枚/G。
- RT終了後は再びCZに入り、RTは約70%でループするとP-WORLD/PachiBeeが説明。
- 旧パチマガスロマガのRT突入期待度: BIG後 約70% / MB後 約30% / REG(SB)後 約15%。
- 赤7BIG終了後のCZからRTへ入った場合は100G RTが確定とP-WORLD/PachiBeeが説明。
- 通常時700G消化によるCZ移行が本DBでの通常ゲーム数天井相当。直接ボーナス/RT当選天井ではなく、**CZ到達天井**として定義を分ける。

confidence: ANALYSIS_HIGH + DATABASE_CROSSCHECK

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`ネオン物語 / 中京遊技 / 9S0312` と `設定変更 / 設変 / リセット / 朝一 / 700G / CZ / 天井` を組み替え、旧パチマガスロマガ、P-WORLD、PachiBee、攻略DB、回顧資料を横断したが、設定変更時に700G進捗・CZ状態・RT状態がどう処理されるかを本機固有に説明する直接資料を確定できなかった。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時に通常時700Gまでの内部ゲーム数が引き継がれるか、CZ/RT状態がどのように保持されるかの直接記載を確定できない。一般的な5号機挙動から推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の700Gカウンタ、CZ/RT状態、リール初期状態、表示状態について本機固有の直接資料を確定できなかった。

gameCounterReset: **NORMAL_CZ_CEILING_700G_CONFIRMED / RESET_OR_CARRYOVER_UNVERIFIED**。通常時700G消化でCZへ移行することはP-WORLD/PachiBee/旧パチマガスロマガで一致。ただし設定変更時の700G進捗リセット/引継ぎは未確認。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時700GのCZ到達天井は確認済みだが、設定変更時の短縮・変更値は確認できない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH / NO_PUBLISHED_RESET_MODE_DISTRIBUTION_CONFIRMED**。通常時の朝一専用モードや設定変更専用モード振り分けは確認できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ/RTという状態が存在するが、設定変更・据え置き・電断時の状態再抽選/引継ぎを示す本機固有資料は確認できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの短縮CZ天井、RT優遇、朝一RT/CZ優遇などは公開根拠を確認できない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の客側不利要素は確認できない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / リール / ランプ / 液晶 / 朝一挙動 / 変更判別` を追加して再探索したが、本機固有に設定変更/据え置きを判別できる公開要素を確定できなかった。

numericResetData:
  normalGameCeiling: 700G_TO_CZ
  resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_DIRECT_NORMAL_700G_CZ_CEILING_CONFIRMED_RESET_CARRYOVER_POWER_CYCLE_UNVERIFIED_AFTER_REQUIRED_MULTIQUERY_RESEARCH

resetBehaviorResearchNote:
- `ネオン物語 / ネオン物語 パチスロ / 中京遊技 / 型式 ネオン物語 / 9S0312` と、`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 700G / 天井 / 天井短縮 / CZ / RT / モード / 状態 / ガックン / 初期出目 / 変更判別` を組み替えた。
- 旧パチマガスロマガには本機専用トップに「攻め時・ヤメ時・設定変更時」項目の存在を確認したが、検索取得できる現存情報から設定変更本文の具体挙動を確定できなかった。
- P-WORLD、PachiBee、旧パチマガスロマガ、pacnk、CrankySeven、当時/後年回顧を横断し、最初の検索だけで欠損判定していない。
- 700Gは「通常時700G消化でCZへ入る」値であり、直接RT確定またはボーナス確定の天井として扱わない。

## conflicts

- 明確な数値CONFLICTは今回確認なし。
- P-WORLDは第3ボーナスを `SB`、旧パチマガスロマガ基本システムではRT突入期待度説明上 `REG` と記す。獲得枚数約110枚の小ボーナスを指す可能性が高いが、名称の定義差を残し、完全に同一呼称へ正規化しない。

## missingFields

- payoutRateBySetting: UNVERIFIED_AFTER_RESEARCH
- BIG/MB/SB individual probability by setting: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50 settings 2-5 exact values: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset on setting change: UNVERIFIED_AFTER_RESEARCH
- ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- public reset-specific numeric values: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. PachiBee「ネオン物語」 — https://www.pachibee.jp/machines/about/209110012 — 2009-11-17導入、中京遊技、5号機RT/CZ/天井、RT約+0.5枚/G、700GでCZ、ボーナス後/RT後CZを確認 — reliability: CONTEMPORARY_DATABASE
2. P-WORLD「ネオン物語」 — https://www.p-world.co.jp/machine/database/5763 — 中京遊技、型式 `ネオン物語`、検定番号 `9S0312`、2009年11月導入、BIG約270枚/MB約207枚/SB約110枚、合算1/206.1〜1/149.9、RT/CZ/700G天井を確認 — reliability: RELIABLE_DATABASE
3. パチマガスロマガ旧解析「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/chukyoyugi_slot/01/a.php — RT30G/100G、純増+0.5枚/G、BIG後約70%/MB後約30%/REG後約15%のRT突入期待度、700GハマリでCZ、純増/払い出し枚数を確認 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧解析「ボーナス確率・PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/chukyoyugi_slot/01/h.php — 合算1/206.1〜1/149.9、PAYOUTは「現在調査中」を確認 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧解析「小役・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/chukyoyugi_slot/01/c.php — 設定1 37G〜設定6 39Gを確認 — reliability: ANALYSIS_HIGH
6. パチマガスロマガ旧解析トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/chukyoyugi_slot/01/chukyoyugi_slot_01.php — 本機専用項目として「攻め時・ヤメ時・設定変更時」が存在することを確認 — reliability: ANALYSIS_HIGH
7. pacnk「ネオン物語 設定判別ツール」 — https://pacnk.com/slot/tools/sh_neonstory.html — 合算1/206.10〜1/149.90、700G CZ天井をクロスチェック — reliability: SECONDARY_DATABASE
8. CrankySeven「ネオン物語」 — https://crankyseven.com/neonstory-pc.htm — 5号機RT機、合算系列を照合。機械割欄は数値欠損であることを確認 — reliability: RETROSPECTIVE_ANALYSIS
9. pachinko’s blog「中京遊技『ネオン物語』の筺体＆スペック＆情報」 — https://pachinko.hatenablog.jp/entry/2009/11/neonMonogatari — 2009年11月、ボーナス+RT、中京遊技新規参入第1弾、合算系列を照合。出玉率/個別ボーナス欄が空欄であることも確認 — reliability: CONTEMPORARY_OR_RETROSPECTIVE_ARCHIVE

## sourceQuality

- identity/formalModel/approval/releaseDate: RELIABLE_DATABASE + CONTEMPORARY_DATABASE
- combined bonus probability: ANALYSIS_HIGH + MULTI_SOURCE_CROSSCHECK
- payout rate: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: ANALYSIS_SINGLE_DIRECT
- RT/basicPayout/700G_CZ: ANALYSIS_HIGH + MULTI_SOURCE_CROSSCHECK
- resetBehavior: PARTIAL_DIRECT_NORMAL_CEILING_ONLY / OTHER_FIELDS_UNVERIFIED_AFTER_RESEARCH

## recordStatus

**PARTIAL_CORE_WITH_RESET_V07_RESEARCH_COMPLETE_FOR_CURRENT_AVAILABLE_SOURCES**
