# ファイアーヒーローII

machineName: ファイアーヒーローII
alternateNames:
  - ファイアーヒーローⅡ
  - ファイアーヒーロー2
manufacturer: アトム
releaseDate: 2008-05
releaseDatePrecision: MONTH_ONLY_AFTER_RESEARCH
generation: 5号機
systemType: ボーナス+RT（RT「パトロールタイム」搭載）
payoutRateBySetting:
  setting1: 93.6%
  setting2: 96.7%
  setting3: 100.4%
  setting4: 103.4%
  setting5: 106.2%
  setting6: 109.2%
  confidence: ANALYSIS_HIGH
  note: P-WORLDと5号機クロニクル、後年実機資料で一致。
initialHitBySetting:
  BIG:
    setting1: 1/409.6
    setting2: 1/404.5
    setting3: 1/399.6
    setting4: 1/394.8
    setting5: 1/390.1
    setting6: 1/385.5
  REG:
    setting1: 1/655.4
    setting2: 1/630.2
    setting3: 1/606.8
    setting4: 1/585.1
    setting5: 1/565.0
    setting6: 1/546.1
  combined:
    setting1: 1/252.1
    setting2: 1/246.4
    setting3: 1/240.9
    setting4: 1/235.7
    setting5: 1/230.8
    setting6: 1/226.0
  confidence: ANALYSIS_HIGH
  note: P-WORLDと後年実機資料で同値を照合。
baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。機種名表記揺れ/アトム/前作名と「50枚/1000円/ベース/コイン持ち」を組み替え、P-WORLD・後年5号機DB・当時/後年実機資料を横断したが比較可能な直接値を確定できず。
netIncrease: UNVERIFIED_AFTER_RESEARCH。RT「パトロールタイム」の純増/Gを直接明記する資料を今回確定できず。
basicPayout:
  BIG:
    payoutDisplay: 350枚
    netPayout: 約300枚
  REG:
    payoutDisplay: 84枚
    netPayout: 約72枚
  confidence: ANALYSIS_HIGH
modeSpecificMinimumData:
  patrolTime:
    type: RT
    name: パトロールタイム
    games: UNVERIFIED_AFTER_RESEARCH
    netIncrease: UNVERIFIED_AFTER_RESEARCH
    note: RT搭載自体と名称は複数資料で確認。規定G数・1Gあたり純増は検索取得できた本文では直接値を確定できないため推測しない。
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 機種名/メーカー名と「天井/救済/ボーナス間/ハマリ」を組み替えて再探索したが通常時ゲーム数天井の直接資料を確認できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名表記揺れ/アトム/パトロールタイムと「設定変更/リセット/朝一」を組み替え、P-WORLD・旧DB・後年資料を横断したが本機固有の設定変更時処理を直接確認できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のRT状態/残G等の扱いを直接明記する本機固有資料を確認できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合のRT状態/残G、初期出目等の本機固有挙動を確認できず。
  gameCounterReset: NO_NORMAL_GAME_CEILING_COUNTER_CONFIRMED。通常ゲーム数天井は再探索後も確認されず、リセット/据え置き比較に使える公開天井カウンタ値もNONE_CONFIRMED。
  ceilingAfterReset: NONE_CONFIRMED。リセット時短縮天井・変更天井の公開値を確認できず。
  modeAfterReset: NONE_CONFIRMED。朝一専用モード、設定変更時モード振り分けを確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT「パトロールタイム」関連状態の設定変更/据え置き/電断処理は直接根拠を取得できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/初期出目/液晶挙動など本機固有の変更判別は検索語を変更しても直接情報を確定できず。
  numericResetData: NONE_CONFIRMED

coreStatus: PARTIAL_CORE_BASE_AND_RT_DETAIL_UNVERIFIED
resetBehaviorQA: PARTIAL_RESET_PROCESS_UNVERIFIED_AFTER_RESEARCH

conflicts: []

missingFields:
  - 具体的な導入/納品日（日精度）
  - 50枚あたりゲーム数/1000円ベース
  - RT「パトロールタイム」の規定ゲーム数
  - RT純増/G
  - 設定変更・据え置き・電源OFF→ON時のRT関連状態処理
  - 本機固有の変更判別情報

sources:
  - url: https://www.p-world.co.jp/machine/database/5209
    title: ファイアーヒーローII / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: メーカー、5号機RT、導入開始2008年05月、設定別BIG/REG/合成、出玉率、BIG/REG基本獲得性能
  - url: https://5goki.com/others
    title: その他メーカー5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: アトム、2008/5導入、設定別機械割93.6〜109.2%の照合
  - url: https://pachinko.hatenablog.jp/entry/2008/05/fire-hero-2
    title: アトム「ファイアーヒーローII」の筺体＆スペック＆情報
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008年5月リリース、RT「パトロールタイム」、設定別BIG/ボーナスゲーム/合算/出玉率の照合
  - url: https://pachisuro100.com/a-rt/
    title: A+RT機の5号機、6号機、スマスロの一覧表
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: アトム、2008/5、A+RT系統の補助確認
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 前作ファイアーヒーローを含むシリーズ識別・検索語拡張の補助。IIの性能値根拠には使用していない。

researchNotes:
  - releaseDateは「ファイアーヒーローII/Ⅱ/2」「アトム」×「2008年5月/発売/導入/納品」、さらに2008-05-19〜27の日付語まで変更。P-WORLD・5号機クロニクル・後年実機資料はいずれも2008年5月まで一致したが、具体納品/導入日を直接確定できる当時一次/業界資料は今回未取得のため月精度で保存。
  - 性能コアは「BIG/REG/ボーナスゲーム/合算/機械割/出玉率/獲得枚数」で再探索。設定別確率と機械割は複数資料で一致。
  - baseGamesPer50は「50枚/1000円/ベース/コイン持ち」、RT詳細は「パトロールタイム/RT/ゲーム数/純増/1Gあたり」を組み替えて再探索したが直接値を確定できずUNVERIFIED_AFTER_RESEARCH。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間」を機種名・メーカー・RT名称と組み替えて再探索。一般的5号機挙動や前作仕様は流用せず、本機固有の設定変更/据え置き/電断処理はUNVERIFIED_AFTER_RESEARCHとした。
