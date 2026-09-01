# ナゴスロ金鯱だがね

machineName: ナゴスロ金鯱だがね
manufacturer: ニューギン
releaseDate: 2008-10-14
releaseDatePrecision: INDUSTRY_DATABASE_SCHEDULED_INTRODUCTION_DATE
modelName: ナゴスロ金鯱だがね
modelNumber: ナゴスロキンシャチダガネ
modelNumberStatus: P_WORLD_MACHINE_DATABASE
generation: 5号機
systemType: ボーナス+A+RT（ボーナス間758G救済RT）/一発告知
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 96.6%
  setting2: 99.2%
  setting3: 101.7%
  setting4: 104.2%
  setting5: 106.7%
  setting6: 109.3%
  status: ANALYSIS_SINGLE_RETROSPECTIVE
  note: 5号機クロニクルの設定別掲載値。現存する別系統の設定別機械割表を今回回収できなかったため単一二次資料値として保持し、推定・平均化はしていない。

initialHitBySetting:
  BIG:
    setting1: 1/321.3
    setting2: 1/303.4
    setting3: 1/290.0
    setting4: 1/278.9
    setting5: 1/268.6
    setting6: 1/259.0
  REG:
    setting1: 1/394.8
    setting2: 1/372.4
    setting3: 1/343.1
    setting4: 1/315.1
    setting5: 1/291.3
    setting6: 1/274.2
  bonusCombined:
    setting1: 1/177.1
    setting2: 1/167.2
    setting3: 1/157.2
    setting4: 1/147.9
    setting5: 1/139.7
    setting6: 1/133.2
  status: ANALYSIS_SINGLE_WITH_CONTEMPORARY_SETTING6_CROSSCHECK
  note: 設定別全表は5号機クロニクル。2008-09-04のK-Naviニューギン内覧会記事が設定6合成約1/133を明記しており、設定6は独立当時資料で整合確認。

baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
baseGamesPer50Note: 機種名/型式名/ニューギンと「1000円・50枚・ベース・コイン持ち・ゲーム数」を組み替え、当時攻略、P-WORLD、旧DB、回顧資料を再探索したが、比較可能な直接値を確定できず。

netIncrease:
  rescueRT: 約+0.2枚/G
  status: ANALYSIS_SINGLE_RETROSPECTIVE
  note: 後年の天井ハイエナ資料に「天井RT純増0.2枚」と掲載。K-Navi当時資料では758G到達後に救済RTへ突入すること自体は確認できるが、純増値の独立照合は未回収。

basicPayout:
  BIG: 345枚を超える払い出しで終了
  REG: 105枚を超える払い出しで終了
  actualNetPayout: UNVERIFIED_AFTER_RESEARCH
  status: INDUSTRY_DATABASE
  note: P-WORLD機種情報の終了条件。これは払い出し終了条件であり実獲得純増枚数とは定義が異なるため、約312枚/約104枚等への換算はしていない。

modeSpecificMinimumData:
  notificationType: 一発告知。金色のシャチホコ点灯でボーナス告知。
  normalCeiling: ボーナス後758G
  ceilingBenefit: 救済RTへ突入
  rescueRTDuration: 次回ボーナスまでと解釈される天井RT系資料あり。ただしK-Navi当時記事本文は「RTへ突入」までの記述のため、終了条件の一次資料直接文言は未回収。
  rescueRTNetIncrease: 約+0.2枚/G（ANALYSIS_SINGLE_RETROSPECTIVE）
  note: 758は「名古屋」の語呂。通常の短縮天井や複数モード天井は今回確認されず。

resetBehavior:
  settingChangeBehavior: CEILING_COUNTER_CARRY_OVER_REPORTED_SINGLE_RETROSPECTIVE。後年天井資料が本機を「宵越し〇」と掲載し、K-Naviの天井用語説明では宵越し天井を「設定変更しても天井までのゲーム数がリセットされない」ものと定義。よって758G救済RTまでのボーナス間カウンタは設定変更でも引き継ぐとの公開情報として保持する。ただし本機個別の当時一次解析本文は未回収のため高信頼扱いにはしない。
  carryOverBehavior: CEILING_COUNTER_YOIKOSHI_REPORTED_SINGLE_RETROSPECTIVE。前日ハマリを翌朝へ持ち越して狙える「宵越し〇」資料あり。RT内部状態や告知状態など、カウンタ以外の据え置き挙動は未確定。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONのみの場合について、本機固有のカウンタ/RT状態/初期出目処理を直接説明する資料は回収できず。一般論から補完しない。
  gameCounterReset: NOT_RESET_ON_SETTING_CHANGE_REPORTED_SINGLE_RETROSPECTIVE。ボーナス間758G天井カウンタは宵越し可能との資料に基づく。独立一次資料照合待ち。
  ceilingAfterReset: NO_FIXED_RESET_SHORTENING_CONFIRMED / REMAINING_TO_NORMAL_758G_REPORTED_TO_CARRY。設定変更時専用の短縮天井数値は確認なし。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。通常時の複数モード/朝一専用モードは今回確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。天井RT中またはその他内部状態で設定変更した場合の状態維持/終了を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: PREVIOUS_DAY_CEILING_PROGRESS_CARRY_OVER_REPORTED。前日のボーナス間ハマリが残る場合、翌朝に758G救済RTへ近い状態を狙える公開情報あり。設定変更専用の追加恩恵ではない。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。機種名/型式名と「設定変更・リセット・朝一・据え置き・ガックン・リール・初期出目・ランプ」を組み替えて再探索したが、本機固有の変更判別条件を確定できず。ボーナス後32Gの金シャチ点灯/33G示唆は設定変更判別資料ではないため混同しない。
  numericResetData:
    normalCeilingGameCount: 758G after bonus
    resetCeilingGameCount: NO_FIXED_RESET_CEILING_CONFIRMED
    ceilingCounterCarryOverOnSettingChange: REPORTED_YES_SINGLE_RETROSPECTIVE
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_CORE_BASE_GAMES_AND_ACTUAL_NET_PAYOUT_UNVERIFIED
resetBehaviorQA: CEILING_COUNTER_CARRY_OVER_REPORTED_SINGLE_RETROSPECTIVE_OTHER_RESET_FIELDS_PARTIAL

conflicts: []

missingFields:
  - 50枚あたりゲーム数/1000円ベース
  - BIG/REGの比較可能な実獲得純増枚数
  - 設定変更/据え置き/電源OFF→ON時のRT内部状態処理
  - 電源OFF→ONのみのボーナス間カウンタ扱いを直接示す本機固有資料
  - ガックン/初期出目等の設定変更判別条件
  - 朝一専用モード振り分け/当選率/追加恩恵率（存在する場合）

sources:
  - url: https://www.all7.jp/plans/index/2008/10
    title: 2008年10月 パチンコ・スロット新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: ナゴスロ金鯱だがね、メーカー・ニューギン、導入予定日2008-10-14。
  - url: https://p-kn.com/topics/exhibition/359/
    title: パチスロ新機種「ナゴスロ金鯱だがね」(ニューギン) / K-Navi 展示会速報
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 2008-09-04内覧会、一発告知、設定6合成約1/133、ボーナス後758Gで救済RT、10月中旬ホールデビュー予定。
  - url: https://www.p-world.co.jp/machine/database/5313
    title: ナゴスロ金鯱だがね 機種情報 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: パチスロ/5号機RT分類、型式ナゴスロキンシャチダガネ、BIG345枚超/REG105枚超払い出し終了、2008年10月導入。
  - url: https://5goki.com/newgin-excite
    title: ニューギン＆エキサイト5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 設定1〜6のBIG/REG/合成確率、機械割96.6〜109.3%、2008年10月導入。
  - url: https://macerate.seesaa.net/article/226312027.html
    title: 天井ハイエナ期待値リスト な行 / 天井ハイエナ生活
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_SINGLE_RETROSPECTIVE
    usedFor: 「宵越し〇」、天井RT純増約0.2枚/G。本文の「ボーナス間500」は狙い目であり天井値としては使用していない。
  - url: https://p-kn.com/slot/tenjo/
    title: パチスロ 天井狙い・朝一狙い早見表 / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_GLOSSARY
    usedFor: 「宵越し天井＝設定変更しても天井までのゲーム数がリセットされない」という用語定義の確認。
  - url: https://pachisuro100.com/itiran/
    title: 5号機一覧表 / スロリスクタイム
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: A+RT、ニューギン、2008年10月の補助照合。
