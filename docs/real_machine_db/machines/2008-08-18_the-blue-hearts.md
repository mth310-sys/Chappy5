# ザ・ブルーハーツ

machineName: ザ・ブルーハーツ
manufacturer: 銀座
releaseDate: 2008-08-18
releaseDatePrecision: RELEASE_DATE_RETROSPECTIVE_TRACKER_CROSSCHECKED_WITH_CONTEMPORARY_MID_AUGUST_DELIVERY
modelName: ザ・ブルーハーツSP（旧資料表記あり。正式型式としての一次確認は未回収）
generation: 5号機
systemType: ボーナス+CZ+押し順ART（ブルーハーツタイム）
payoutRateBySetting:
  sourceSeriesA_5goki:
    setting1: 98.0%
    settingMiddle: 101.0%（掲載表は「設定2」表記だが、本機の設定構成は1/3/5/F。転記誤りの可能性があるため設定3へ自動補正しない）
    setting5: 105.0%
    settingF: 109.0%
  sourceSeriesB_contemporaryBlogAnalysis:
    setting1: 96.4%
    setting3: 99.4%
    setting5: 103.3%
    settingF: 107.1%
  status: CONFLICT_PAYOUT_RATE
  note: 5号機クロニクル系列と2008年当時解析記事で端点を含め差が大きい。平均せず双方保持。K-Naviは機械割を未発表としている。
initialHitBySetting:
  BIG:
    status: UNVERIFIED_AFTER_RESEARCH
    note: K-Naviは設定1/3/5/F欄を「未発表」と掲載。別系統で設定別BIG単独確率を直接確定できず。
  BONUS_CHANCE:
    status: UNVERIFIED_AFTER_RESEARCH
    note: K-Naviは設定1/3/5/F欄を「未発表」と掲載。別系統で設定別単独確率を直接確定できず。
  bonusCombined:
    setting1: 1/284.94（当時解析記事は1/284.9）
    setting3: 1/273.07（当時解析記事は1/273.1）
    setting5: 1/259.04（当時解析記事は1/259.0）
    settingF: 1/243.83（当時解析記事は1/243.6）
  status: ANALYSIS_HIGH_CROSSCHECKED_WITH_SMALL_ROUNDING_DIFFERENCE_AT_F
baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: 「50枚」「1000円」「ベース」「コイン持ち」「ザブルーハーツSP」等へ検索語を変更し、業界記事/K-Navi/パチマガスロマガ/P-WORLD/旧解析/後年DBを横断したが比較可能な通常時ベースを確定できず。
netIncrease:
  BLUE_HEARTS_TIME: 約+1.2枚/G
  status: INDUSTRY_ANALYSIS_CROSSCHECKED
basicPayout:
  BIG: 約270枚
  BONUS_CHANCE: 約72枚
  payoutThreshold:
    BIG: 400枚超払い出しで終了（パチマガスロマガ） / 旧解析記事では345枚超表記がありCONFLICT
    BONUS_CHANCE: 100枚超払い出しで終了（パチマガスロマガ） / 旧解析記事では117枚超表記がありCONFLICT
  status: CONFLICT_PAYOUT_THRESHOLD_WITH_STABLE_NET_PAYOUT
modeSpecificMinimumData:
  CZ_ENCORE_TIME:
    trigger: ボーナス終了後 / 通常時1200G消化
    transition: CZ中に特殊リプレイ成立時、押し順ナビ成功または自力入賞でARTへ。通常リプレイ成立で通常ゲームへ。
    navigationRate: 66% / 75% / 90%の主要系列を当時業界記事で確認。旧解析資料では0%/66%/75%/90%/100%（無限）の内部系列も掲載。
  ART_BLUE_HEARTS_TIME:
    games: 36G完走型、別に次回ボーナスまで継続する無限系あり
    netIncrease: 約+1.2枚/G
    navigation: 押し順ナビ、目押し不要を特徴とする
  internalState:
    normal: 低確率/高確率状態の存在を旧解析資料で確認
    afterBonusHighState: 約60Gという旧解析値あり
    note: 通常時状態移行の完全再現用詳細は収集対象外。
  ceiling:
    normalGameCount: 1200GでCZ「アンコールタイム」へ
    interpretation: ボーナス直接当選天井ではなくCZ移行ゲーム数として記録

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時に1200Gカウンタ、CZ/ART状態、高低状態をどのように初期化・再抽選するか本機固有の直接本文を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に1200Gカウンタ、CZ/ART、高確/低確状態を引き継ぐか直接根拠を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ONでの1200Gカウンタ/CZ/ART/内部状態処理を直接確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時1200GでCZ突入は確認済みだが、設定変更/据え置き/電断時の1200G内部カウンタ処理は未確認。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時1200GでCZへ移行するが、設定変更後の短縮・即CZ・別ゲーム数等は直接確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。CZナビ率系列や通常高低状態は存在するが、設定変更時の振り分け/引継ぎは未確認。朝一専用モードは確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時の高確/低確は確認できるが、設定変更後の開始状態を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。K-Naviに本機専用「ガックン判別は有効?」項目の存在は確認できるが、検索取得本文から結論・条件を回収できなかったため判別可能とは断定しない。初期出目/液晶/ゲーム数による判別も直接確認できず。
  numericResetData:
    normalCZGameCount: 1200G
    artLength: 36G
    artNetIncrease: 約+1.2枚/G
    resetCeilingGameCount: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_CORE_BASE_AND_INDIVIDUAL_BONUS_RATES_UNVERIFIED_WITH_PAYOUT_CONFLICT
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - id: CONFLICT_PAYOUT_RATE
    detail: 5号機クロニクルは98.0/101.0/105.0/109.0%系列（中間設定ラベルは「2」表記）、2008年当時解析記事は設定1/3/5/Fで96.4/99.4/103.3/107.1%。平均せず双方保持。
  - id: CONFLICT_BONUS_PAYOUT_THRESHOLD
    detail: パチマガスロマガはBIG400枚超・BONUS CHANCE100枚超払い出し終了、2008年旧解析記事はBIG345枚超・BONUS CHANCE117枚超と掲載。純増目安約270枚/約72枚は各系統で一致するため、規定払い出し条件のみCONFLICTとして保持。
  - id: SETTING_LABEL_CONFLICT_5GOKI
    detail: 本機の設定構成はK-Navi/当時解析で1/3/5/F。一方5号機クロニクル機械割表は1/2/5/Fと掲載。101.0%を設定3へ自動補正せず、原表記注記で保持。

missingFields:
  - 正式型式名の一次資料確認（ザ・ブルーハーツSP表記は旧資料で確認）
  - 設定別BIG単独確率
  - 設定別BONUS CHANCE単独確率
  - 50枚あたりゲーム数/ベース
  - 設定変更時の1200Gカウンタ処理
  - 据え置き時の1200Gカウンタ/CZ/ART/内部状態引継ぎ
  - 電源OFF→ONのみのカウンタ/CZ/ART/内部状態処理
  - 設定変更後の高低状態/CZナビ率状態
  - 本機固有ガックン判別記事の結論本文
  - 朝一専用当選率・短縮天井等の公開数値

sources:
  - url: https://web-greenbelt.jp/00003709/
    title: 青春パンク再来、ブルーハーツがパチスロで復活 / グリーンべると 2008-07-15
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 8月中旬納品予定、設定1/3/5/F、合算端点、CZ契機（ボーナス後/通常1200G）、CZナビ率、ART36G/無限系、純増約1.2枚G、BIG約270枚、BONUS CHANCE約72枚。
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_INDUSTRY_TRACKER
    usedFor: ザ・ブルーハーツ2008-08-18発売、ART66〜90%系列/約1.2枚G。同資料でザ・ブルーハーツGは8/18予定から9月へ変更との記録があり別型式候補として分離。
  - url: https://p-kn.com/slot/843/
    title: ザ・ブルーハーツ / K-Navi
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定1/3/5/F、合算1/284.94〜1/243.83、BIG約270枚、BONUS CHANCE約72枚、ART純増約1.2枚G/36G、専用ガックン判別記事項目の存在。BIG/BC単独・機械割は未発表表記。
  - url: https://www.p-world.co.jp/machine/database/5279
    title: ザ・ブルーハーツ / P-WORLD機種データベース
    retrievedAt: 2026-09-01
    confidence: INDUSTRY_DATABASE
    usedFor: 合算1/284.94〜1/243.83、BIG約270枚、BONUS CHANCE約72枚の照合。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/08/a.php
    title: パチスロザ・ブルーハーツ / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 完走型ART/CZ、ART純増約1.2枚G、BIG/BONUS CHANCE純増、規定払い出し終了条件400枚超/100枚超。
  - url: https://5goki.com/ginza
    title: 銀座 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年8月導入、機械割98.0〜109.0%系列。ただし中間設定ラベルが本機設定構成と不整合のためCONFLICT注記。
  - url: https://ameblo.jp/gsummer/entry-10155505630.html
    title: パチスロ ブルーハーツ レポート解析
    retrievedAt: 2026-09-01
    confidence: CONTEMPORARY_ANALYSIS_SINGLE
    usedFor: 設定1/3/5/Fの合算照合、別系列機械割96.4〜107.1%、高確/低確状態、ボーナス後高確約60G、旧規定払い出し条件。機械割/払い出し条件は他資料とCONFLICT。

researchNotes:
  - 最新main README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前288アカネ55を読み直し、288件地点を正本として開始。
  - LATEST_HANDOFF指定のメガラニカDXを先に監査。2008-08-18検定通過痕跡は確認したが、ウィンネット/ラスター発売機種一覧や5号機一般一覧では通常のメガラニカのみで、DXの実販売/ホール導入を裏付ける資料を確定できなかった。検定通過だけでは本線レコード化しない。
  - 8月18日以降を再監査し、当時追跡資料でザ・ブルーハーツ2008-08-18発売を確認。グリーンべるとの8月中旬納品予定とも整合するため289件目に採用。
  - 「ザ・ブルーハーツ/ザブルーハーツ/ザ・ブルーハーツSP/銀座」×「設定変更/リセット/朝一/据え置き/電源OFF ON/1200G/天井/ガックン/50枚/1000円/ベース」を検索語変更し、業界記事、K-Navi、P-WORLD、パチマガスロマガ、旧解析、後年DBを横断。
  - K-Naviに「ガックン判別は有効?」専用項目の存在は確認したが、取得可能本文に結論が出ないため肯定/否定を推測しなかった。
  - 1200Gはボーナス直接天井ではなくCZアンコールタイムへの移行契機として分離記録。
  - ザ・ブルーハーツGは旧追跡資料上で8/18予定から9月変更の別候補。通常版と混同せず9月境界で実販売/型式を再確認する。
