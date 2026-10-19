# 逆境ナイン

machineName: 逆境ナイン
manufacturer: 三洋物産
releaseDate: 2008-10
releaseDatePrecision: MONTH_CONFIRMED_HALL_INTRODUCTION
salesAnnouncementDate: 2008-09-02
salesAnnouncementNote: 当時プレイグラフ転載では2008-09-02時点で「発売を開始」、9月4日に全国営業所内覧会。P-WORLDと5号機クロニクルはホール導入を2008年10月とするため、本DBのreleaseDateはホール導入月2008-10を採用し、販売開始報道とは分離。
modelName: 逆境ナイン
modelNumber: PS逆境ナインGF
modelNumberStatus: INDUSTRY_DATABASE
modelNameNote: P-WORLDで検定番号8S0269、型式名PS逆境ナインGFを確認。
generation: 5号機
systemType: ボーナス+CZ+RT
settings: 1 / 3 / 5 / 6

payoutRateBySetting:
  sourceA_simulated:
    setting1: 97.11%
    setting3: 99.99%
    setting5: 103.56%
    setting6: 107.11%
    source: パチマガスロマガ（シミュレート値）
  sourceB_retrospective:
    setting1: 96.8%
    setting3: 99.7%
    setting5: 104.1%
    setting6: 107.4%
    source: 5号機クロニクル
  status: CONFLICT
  note: 両系列は近似するが設定1・5などに丸め差を超える差があるため平均せず併記。P-WORLD掲示板には当時「設定6が107%か111%か」とのユーザー投稿も残るが、111%系列の根拠表を確定できなかったため数値ソースには採用しない。

initialHitBySetting:
  BIG:
    setting1: 1/618.26
    setting3: 1/579.96
    setting5: 1/537.18
    setting6: 1/500.27
  CHALLENGE_BONUS:
    setting1: 1/618.26
    setting3: 1/579.96
    setting5: 1/537.18
    setting6: 1/500.27
  REG:
    setting1: 1/618.26
    setting3: 1/579.96
    setting5: 1/537.18
    setting6: 1/500.27
  bonusCombined:
    setting1: 1/206.09
    setting3: 1/193.32
    setting5: 1/179.06
    setting6: 1/166.76
  status: ANALYSIS_HIGH
  note: パチマガスロマガ精密値。2008年当時系攻略記事でも合成1/206.09→1/166.76を確認。

baseGamesPer50:
  setting1: 35.61G
  setting3: 36.21G
  setting5: 36.83G
  setting6: 37.48G
  status: ANALYSIS_HIGH_SINGLE_PRIMARY
  note: パチマガスロマガ掲載「1000円あたりのゲーム数」。

netIncrease:
  RT_ZENRYOKU_TIME: 約0.4枚/G
  status: ANALYSIS_HIGH_AND_SECONDARY_MATCH
  note: K-Naviと当時系攻略記事で一致。RTは15G。

basicPayout:
  BIG: 最大純増約300枚（348枚超払い出しで終了）
  CHALLENGE_BONUS: 最大純増約208枚（234枚超払い出しで終了）
  REG: 最大純増約104枚（120枚超払い出しで終了）
  status: INDUSTRY_DATABASE_AND_CONTEMPORARY_ANALYSIS_MATCH
  note: P-WORLDの払い出し終了条件と当時系攻略記事の最大純増目安を定義分離して保持。

modeSpecificMinimumData:
  structure: 各ボーナス後・RT終了後・通常時の規定周期付近からチャンスゾーンへ移行し、CZ中リプレイ入賞で15G RT「全力タイム」へ。RT終了後は再度CZへ戻るループ型。
  chanceZoneEntry: 各ボーナス終了後 / RT終了後 / 通常時約150〜170G消化後
  rtEntry: CZ中リプレイ入賞
  rtDuration: 15G
  rtNetIncrease: 約0.4枚/G
  rtEnd: 規定15G消化またはボーナス成立
  rtEntryExpectationAfterBIG: 約80%
  rtEntryExpectationAfterChallengeBonus: 約70%
  rtEntryExpectationAfterREG: 約60%
  rtEntryExpectationOtherCZ: 約65%
  normalCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  note: 通常時約150〜170GでのCZ移行はゲーム性上の周期CZであり、ボーナス当選/RT当選を保証する通常天井とは扱わない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガには本機の「攻め時・ヤメ時・設定変更時」項目が現存インデックス上確認できるが、本文キャッシュを回収できず、機種名/型式名と設定変更・リセット・朝一・CZ・全力タイムを組み替えた再探索でも本機固有の変更時初期CZ/RT状態を直接確定できなかった。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。設定据え置き時に通常時約150〜170GのCZ周期カウンタ、およびCZ/RT残状態をどの粒度で引き継ぐかを直接示す資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合のCZ周期カウンタ・CZ/RT残状態・初期出目処理を本機固有資料で確定できず。
  gameCounterReset: UNVERIFIED_FOR_CZ_CYCLE / NOT_APPLICABLE_FOR_NORMAL_CEILING。通常ボーナス天井は確認なし。約150〜170G周期CZの設定変更時カウンタ処理のみ未確定。
  ceilingAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常ゲーム数天井およびリセット専用短縮天井は確認されず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モードや設定変更時モード振り分けの直接資料を確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/15G RT中の設定変更・据え置き・電断時状態処理を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの短縮CZ、朝一当選率優遇等の公開数値は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「逆境ナイン / PS逆境ナインGF / 三洋物産」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 変更判別 / CZ」を組み替え、当時攻略・P-WORLD・旧DB・回顧資料まで再探索したが本機固有条件を確定できず。
  numericResetData:
    resetCeilingGameCount: NONE_CONFIRMED_OR_NOT_APPLICABLE
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - field: payoutRateBySetting
    status: CONFLICT
    sourceA: パチマガスロマガ simulation 97.11/99.99/103.56/107.11%
    sourceB: 5号機クロニクル 96.8/99.7/104.1/107.4%
    handling: 平均化せず別系列として保持。
  - field: releaseTiming
    status: RESOLVED_DEFINITION_DIFFERENCE
    sourceA: 当時プレイグラフ転載 2008-09-02時点で「発売を開始」、9月4日内覧会
    sourceB: P-WORLD / 5号機クロニクル 2008-10導入
    handling: メーカー販売開始報道とホール導入時期の定義差として分離。本DBreleaseDateはホール導入月2008-10。

missingFields:
  - ホール導入の具体日（2008-10月までは複数DB一致）
  - 設定変更時のCZ周期カウンタ/CZ/RT状態処理
  - 据え置き・電源OFF→ON時のCZ周期カウンタ/CZ/RT残状態
  - ガックン/初期出目等の本機固有設定変更判別
  - 朝一専用恩恵/不利および公開朝一数値

sources:
  - url: https://www.p-world.co.jp/machine/database/5316
    title: 逆境ナイン / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式名PS逆境ナインGF、検定番号8S0269、5号機RT、2008年10月導入、各ボーナス払い出し終了条件。
  - url: https://5goki.com/sanyo
    title: 三洋物産5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年10月導入、機械割96.8/99.7/104.1/107.4%。
  - url: https://p-mans.blogspot.com/2008/09/
    title: Pマンズ 2008年9月（プレイグラフ記事転載）
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY_ARCHIVE
    usedFor: 2008-09-02発売開始報道、9月4日全国営業所内覧会、各ボーナスから6割以上でRT突入との当時発表。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/07/h.php
    title: 逆境ナイン ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定1/3/5/6のBIG・CB・REG・合成確率、シミュレートPAYOUT。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/07/c.php
    title: 逆境ナイン 小役・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたり35.61/36.21/36.83/37.48G。
  - url: https://p-kn.com/slot/863/7039/
    title: 逆境ナイン 全力タイム(RT) / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: CZ中リプレイ入賞で15G RT、純増約0.4枚/G、終了条件。
  - url: https://ameblo.jp/samurai777net/entry-10133038404.html
    title: 三洋物産「逆境ナイン」仕様 / 侍777（当時系攻略記事）
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SECONDARY
    usedFor: 2008年10月表記、最大純増300/208/104枚、CZ契機、RT突入期待度、15G・約0.4枚/G、合成確率の照合。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/07/sanyo_slot_07.php
    title: 逆境ナイン 攻略インデックス / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX_ONLY
    usedFor: 「攻め時・ヤメ時・設定変更時」解析項目の存在確認。本文は今回回収不能のためresetBehaviorの値には使用せず。
