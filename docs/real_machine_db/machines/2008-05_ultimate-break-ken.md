# アルティメットブレイク拳

machineName: アルティメットブレイク拳
manufacturer: ミズホ / アルゼ系
releaseDate: 2008-05
generation: 5号機
systemType: ボーナス+完走型RT（RIDE on TIME）
payoutRateBySetting:
  primarySimulation:
    setting1: 97.94%
    setting4: 102.40%
    setting6: 107.00%
    settingH: 112.57%
    confidence: ANALYSIS_HIGH
    sourceDefinition: パチマガスロマガのシミュレート値
  contemporarySecondary:
    setting1: 98.0%
    setting4: 102.8%
    setting6: 107.2%
    settingH: 112.2%
    confidence: ANALYSIS_SINGLE
    sourceDefinition: 2008年更新の5号機まとめwiki掲載値
  retrospectiveSecondary:
    setting1: 98.6%
    setting4: 102.8%
    setting6: 107.2%
    settingH: 112.2%
    confidence: ANALYSIS_SINGLE
    sourceDefinition: 後年実機回顧（全六引用）
  note: 機械割は資料系列で差があるため平均せずCONFLICT保持。
initialHitBySetting:
  redBIG:
    setting1: 1/771.01
    setting4: 1/682.67
    setting6: 1/612.49
    settingH: 1/550.72
  blueBIG:
    setting1: 1/771.01
    setting4: 1/682.67
    setting6: 1/612.49
    settingH: 1/550.72
  BIGcombined:
    setting1: 1/385.51
    setting4: 1/341.33
    setting6: 1/306.24
    settingH: 1/275.36
  redREG:
    setting1: 1/1310.72
    setting4: 1/1191.56
    setting6: 1/1092.27
    settingH: 1/936.23
  blueREG:
    setting1: 1/1310.72
    setting4: 1/1191.56
    setting6: 1/1092.27
    settingH: 1/936.23
  REGcombined:
    setting1: 1/655.36
    setting4: 1/595.78
    setting6: 1/546.13
    settingH: 1/468.11
  combined:
    setting1: 1/242.73
    setting4: 1/217.01
    setting6: 1/196.22
    settingH: 1/173.38
  confidence: ANALYSIS_HIGH
baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。機種名/型式系表記と「1000円/50枚/ベース/コイン持ち/通常時ゲーム数」を組み替え、当時解析・旧DB・回顧資料を横断したが比較可能な設定別または代表値を確定できず。
netIncrease: RIDE on TIME 約+0.5枚/G（INDUSTRY/当時系複数資料で整合）
basicPayout:
  BIG: 約312枚
  REG_or_PunchingChance: 約108枚
modeSpecificMinimumData:
  RIDEonTIME:
    type: 完走型RT
    games: CONFLICT_30G_VS_34G
    netIncrease: 約+0.5枚/G
    note: 2008年グリーンべるとは30Gワンセット、2008年更新5号機まとめwikiおよび後年実機回顧は34G。平均・補間せず競合保持。
  structure:
    note: 当時系資料では特定役からRTへ突入し、ボーナス成立でも完走する構造。2008年更新wikiではRT終了後等にCZへ戻るフローと低確RT 5/3/99Gを掲載。
  ceiling:
    status: NONE_CONFIRMED_SECONDARY
    note: 後年実機回顧に「天井無し」。一次/当時解析本文での直接照合は今回未取得のため信頼度を分離。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にCZ/RT状態や周期ゲーム数を初期化するか引き継ぐか、本機固有の直接本文を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のCZ/低確RT周期・RT残状態の引継ぎを直接明記する資料は未確認。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合のCZ/RT状態、周期ゲーム数、初期出目の扱いは未確認。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時には99G周期を含むRT/CZフローを示す資料があるが、設定変更/電断時に周期カウンタをどう扱うかは未確定。
  ceilingAfterReset: NONE_CONFIRMED。設定変更後のみ適用される短縮天井の公開数値は確認できず。通常天井自体は後年回顧で「無し」。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モードや設定変更時専用モード振り分けの公開情報は確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/低確RT/RIDE on TIME滞在中の設定変更・電断処理は未確認。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/ランプ、周期挙動等による本機固有の設定変更判別情報を検索語変更後も確定できず。
  numericResetData: NONE_CONFIRMED

coreStatus: PARTIAL_CORE_WITH_CONFLICTS_BASE_UNVERIFIED
resetBehaviorQA: PARTIAL_STRUCTURE_CONFIRMED_RESET_PROCESS_UNVERIFIED

conflicts:
  - code: CONFLICT_PAYOUT_DEFINITION
    detail: パチマガスロマガのシミュレート値97.94/102.40/107.00/112.57%に対し、2008年更新5号機まとめwikiは98.0/102.8/107.2/112.2%、後年実機回顧（全六引用）は98.6/102.8/107.2/112.2%。算出・攻略条件差または資料差を疑い平均化しない。
  - code: CONFLICT_RT_GAME_LENGTH
    detail: 2008年5月グリーンべるとはRTを30Gワンセットと記載。一方、2008年7月更新の5号機まとめwikiと後年実機回顧は34G完走型RTと記載。純増約0.5枚/Gは整合するため、ゲーム数のみ競合として双方保持。
  - code: RELEASE_DEFINITION_MONTH_VS_INSTALLATION
    detail: ユニバーサル公式は発売2008年5月。後年実機回顧は設置時期2008年6月2日。発売と設置の定義差を混ぜず、releaseDateは公式発売月の2008-05とし、具体ホール導入日は別情報として保持。

missingFields:
  - 50枚あたりゲーム数/ベース
  - 具体的な全国納品開始日/通常導入日
  - 設定変更時のCZ/RT状態・周期カウンタ処理
  - 据え置き・電源OFF→ON時のCZ/RT状態・周期カウンタ処理
  - 本機固有のガックン/初期出目等の変更判別

sources:
  - url: https://www.universal-777.com/product/slot/ultimate_break/
    title: アルティメットブレイク拳 / ユニバーサルエンターテインメント
    retrievedAt: 2026-09-01
    confidence: OFFICIAL
    usedFor: ミズホ、5号機、ボーナス+RT、2008年5月発売、RT込み設定1合成1/90という製品訴求
  - url: https://web-greenbelt.jp/00006496/
    title: ミズホから『アルティメットブレイク拳』登場 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008年5月発表、RT約+0.5枚/G、30Gワンセット、完走型、BIG約312枚、パンチングチャンス約108枚、最高設定H約112%
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/28/h.php
    title: アルティメットブレイク拳 ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定1/4/6/Hの赤青BIG・赤青REG・合成確率、シミュレート機械割
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/28/mizuho_slot_28.php
    title: アルティメットブレイク拳 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 基本システム/RT/設定変更時情報ページの存在確認。ただし設定変更本文そのものは検索取得できず、推測転記していない。
  - url: https://w.atwiki.jp/5gouki/pages/90.html
    title: アルティメットブレイク拳 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年更新時点のボーナス確率照合、機械割別系列、34G完走型RT、CZ/低確RTフロー
  - url: https://ameblo.jp/ultimate-coffee/entry-10760540725.html
    title: アルティメットブレイク拳（2008年MIZUHO） / 実機回顧
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008-06-02設置時期、34G RT、約+0.5枚/G、BIG312枚/PC108枚、99G周期、天井無し、機械割別系列の補助照合

researchNotes:
  - releaseDate監査では「アルティメットブレイク拳/ミズホ/アルゼ」×「発売/導入/設置/納品/2008年5月/6月2日」を変更。公式発売月2008-05と実機回顧の設置2008-06-02は定義を分けて保持。
  - baseGamesPer50は「1000円/50枚/ベース/コイン持ち/G/50枚」を組み替え、パチマガスロマガ、2008年更新wiki、メーカー公式、業界記事、実機回顧を再探索したが比較可能値を確定できなかった。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源OFF ON/周期/CZ/RT/ガックン/初期出目/天井」を組み替え、パチマガスロマガの設定変更時ページの存在、当時系wiki、実機回顧を横断。設定変更本文を直接取得できないため、本機固有の変更処理はUNVERIFIED_AFTER_RESEARCHとした。
