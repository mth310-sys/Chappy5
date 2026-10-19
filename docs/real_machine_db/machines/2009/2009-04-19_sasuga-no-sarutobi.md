# さすがの猿飛

machineName: さすがの猿飛
formalModelName: さすがの猿飛
inspectionNumber: 8S1229
manufacturer: IGTジャパン
releaseDate: 2009-04-19
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_EXACT_DATE_WITH_SCHEDULE_CONFLICT
releaseDateNote: 2009-03-23グリーンべると当時記事が「納品は4月19日からスタート予定」と明記。ALL7は2009-04-20導入予定、パチビーは2009-04-21導入日。発表日と実導入を分離し、最古の具体的な流通開始日2009-04-19を主値として保持する。
generation: 5号機
systemType: ボーナス + ART / CZ / パンク回避 / 天井搭載
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 96.6%
  setting2: 98.8%
  setting3: 101.0%
  setting4: 102.8%
  setting5: 106.1%
  setting6: 110.0%
  precisionCrosscheck:
    setting1: 96.63%
    setting2: 98.80%
    setting3: 100.96%
    setting4: 102.77%
    setting5: 106.07%
    setting6: 110.01%
  status: ANALYSIS_HIGH_CROSSCHECKED_ROUNDING
  note: P-WORLDとpacnkの設定別PAYOUTは丸め精度の範囲で一致。平均化はせず、P-WORLD表示値を主値、pacnk精密値を照合値として保持。

initialHitBySetting:
  red7Big:
    setting1: 1/1560.38
    setting2: 1/1456.36
    setting3: 1/1365.33
    setting4: 1/1285.02
    setting5: 1/1213.63
    setting6: 1/1149.75
  blue7Big:
    setting1: 1/537.18
    setting2: 1/537.18
    setting3: 1/537.18
    setting4: 1/537.18
    setting5: 1/537.18
    setting6: 1/537.18
  regular:
    setting1: 1/585.14
    setting2: 1/546.13
    setting3: 1/512.00
    setting4: 1/481.88
    setting5: 1/455.11
    setting6: 1/431.16
  bonusCombined:
    setting1: 1/237.4
    setting2: 1/228.3
    setting3: 1/219.9
    setting4: 1/212.1
    setting5: 1/204.8
    setting6: 1/198.0
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLDの設定別赤7BIG/青7BIG/REG/合算を主系列とし、pacnkの合算1/237.45→1/197.99およびREG精密値で照合。当時グリーンべるとも合成1/237（設定1）〜1/198（設定6）を公表している。

baseGamesPer50:
  value: 約35G/50枚（1000円）
  status: INDUSTRY_DIRECT_VALUE
  note: 2009-03-23グリーンべると当時記事が1000円当たり約35Gと直接記載。設定別ベースは公開確認できず、共通概算として保持する。

netIncrease:
  kamikazeRush: 約+1.0枚/G
  status: INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: グリーンべると、P-WORLD、K-Naviで約+1枚/Gが一致。ナビストックがある場合にART「神風RUSH」へ移行し、ボーナス成立またはパンク役チェリー入賞等で終了するパンク回避型。

basicPayout:
  red7Big: 約207枚
  blue7Big: 約205枚
  bigIndustryApprox: 約205枚
  regular: 約55枚
  status: INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: P-WORLDが赤7BIG約207枚・青7BIG約205枚・REG約55枚、グリーンべるとがBIG純増約205枚・REG約55枚と記載。定義差ではなく色別BIGの小差として保持。

modeSpecificMinimumData:
  - BIG中に選択する肉丸/忍豚/魔子でARTナビストックの獲得特性が異なる。完全内部抽選は物差し用途外のため収集しない。
  - ボーナス終了後、ナビストックありならART「神風RUSH」、なしならCZ「神風チャンス」へ移行。
  - ARTはチェリーのパンク回避ナビをストックする方式。K-Naviでは基本継続を「ボーナス成立orARTナビストックを使い切るまで」と説明。
  - 天井機能の存在はP-WORLD・パチビーで確認。pacnkは天井目安を約1290Gとして扱うが、当時一次/大手解析本文で起算条件と恩恵を直接照合できなかったため、約1290GはANALYSIS_SINGLE_REFERENCEとしてのみ保持する。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式/IGTと「設定変更」「リセット」「朝一」「天井」「ART」「ナビストック」「神風RUSH」「神風チャンス」を組み替え、P-WORLD、K-Navi、パチマガスロマガ索引、旧DB、回顧資料を再探索。パチマガスロマガに「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが、設定変更時の本文を回収できず、ナビストック/天井カウンタ/CZ状態の処理を断定しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の天井ゲーム数・ナビストック・CZ/ART内部状態の引継ぎを機種固有の高信頼本文から確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井カウンタ、ナビストック、CZ/ART状態、液晶表示の扱いを確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。天井機能の存在は確認済みだが、設定変更時RESET/CARRY_OVERを直接確定できず。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時天井の二次資料目安は約1290Gだが、設定変更専用の短縮/延長天井数値を確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モード・設定変更専用モード振り分けの公開根拠を確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時のCZ/ART・ナビストック状態再抽選/消去/引継ぎを確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの天井短縮、ART/CZ優遇、ナビ付与等の主要恩恵を直接確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの主要な不利数値を確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶状態等による本機固有の変更判別条件を確定できず。
  numericResetData:
    normalCeilingReference: 約1290G（SECONDARY_ANALYSIS_REFERENCE_ONLY。起算条件/恩恵の一次・当時大手本文照合未完）
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_CEILING_DETAIL_PARTIAL
resetBehaviorQA: RESEARCHED_WITH_CHANGE_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - releaseDate: グリーンべると2009-04-19納品開始予定 vs ALL7 2009-04-20導入予定 vs パチビー2009-04-21導入日。発表日ではなく流通/導入日の定義差として全て保持し、最古の具体的流通開始日4/19を主値とする。
  - normalCeilingDetail: pacnkの約1290G目安は取得できるが、当時一次/大手解析本文で起算条件と恩恵を直接照合できないため確定天井値には昇格させない。

missingFields:
  - 設定変更時の天井ゲーム数RESET/CARRY_OVER
  - 据え置き時の天井/ナビストック/CZ/ART状態引継ぎ
  - 単純電源OFF→ON時の天井/ナビストック/CZ/ART状態
  - 設定変更時のモード/状態再抽選
  - ガックン/初期出目/液晶による設定変更判別の具体条件
  - 設定変更専用の公開朝一数値
  - 天井約1290Gの当時高信頼本文による起算条件・恩恵の再照合

sources:
  - url: https://web-greenbelt.jp/00003030/
    title: 80年代の人気漫画「さすがの猿飛」がパチスロ化 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 2009-04-19納品開始予定、ART神風RUSH、純増約1枚/G、BIG約205枚、REG約55枚、合成1/237〜1/198、1000円約35G。
  - url: https://www.all7.jp/plans/index/2009/04
    title: 2009年4月の導入機種一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 2009-04-20導入予定、4/20同日群。
  - url: https://www.p-world.co.jp/machine/database/5496
    title: さすがの猿飛 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: IGTジャパン、5号機ART、検定番号8S1229、設定別赤7BIG/青7BIG/REG/合算、機械割、基本獲得枚数、天井搭載、約+1枚/G。
  - url: https://www.pachibee.jp/movies/index/1612
    title: さすがの猿飛 / パチビー
    retrievedAt: 2026-09-02
    confidence: OLD_MACHINE_DATABASE
    usedFor: 2009-04-21導入日、5号機ART、天井あり、約+1枚/G。
  - url: https://p-kn.com/slot/952/9744/
    title: 神風ラッシュ(ART) / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: ART突入条件、終了条件、ナビストック方式、純増約+1.0枚/G。
  - url: https://pacnk.com/slot/tools/sh_sarutobi.html
    title: さすがの猿飛 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS_DATABASE
    usedFor: 設定別REG/ボーナス合算/PAYOUT精密照合、天井約1290Gの二次資料目安。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/52/igt_slot_52.php
    title: さすがの猿飛 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 「攻め時・ヤメ時・設定変更時」専用解析項目の存在確認。本文未回収のためresetBehaviorは推測しない。

researchNotes:
  - 取得日: 2026-09-02
  - 実機完全再現用の小役/全ARTナビ振り分けは収集対象外。
  - resetBehavior欠損は、機種名表記・メーカー・型式・設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/ナビストック/CZを変更し、公式相当、業界当時記事、P-WORLD、K-Navi、パチマガスロマガ、旧DB、回顧資料まで再探索後の判定。
