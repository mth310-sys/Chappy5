# ミッション・イン・ポッシブー

machineName: ミッション・イン・ポッシブー
manufacturer: マツヤ商会（販売: マジー販売）
releaseDate: 2008-07-14
releaseDatePrecision: OLD_INDUSTRY_HISTORY_EXACT_DAY / INDUSTRY_PRIMARY_MID_JULY
modelName: ポッシブー
generation: 5号機
systemType: ボーナス + 100G完走型RT / 完全告知
payoutRateBySetting:
  manufacturerPublishedViaPachimaga:
    setting1: 95.9%
    setting2: 98.3%
    setting3: 100.9%
    setting4: 105.9%
    setting5: 111.7%
    setting6: 115.3%
  confidence: ANALYSIS_HIGH_WITH_MANUFACTURER_LABEL
  note: パチマガスロマガ旧攻略に「PAYOUT（メーカー発表値）」として掲載。後年スペック整理資料でも同系列を確認。
initialHitBySetting:
  big:
    setting1: 1/689.85
    setting2: 1/819.20
    setting3: 1/630.15
    setting4: 1/712.35
    setting5: 1/516.03
    setting6: 1/560.14
  midBonus:
    setting1: 1/1092.27
    setting2: 1/595.78
    setting3: 1/1024.00
    setting4: 1/485.45
    setting5: 1/720.18
    setting6: 1/504.12
  missionTimeBonus:
    setting1: 1/322.84
    setting2: 1/304.82
    setting3: 1/300.62
    setting4: 1/284.94
    setting5: 1/265.33
    setting6: 1/262.14
  combined:
    setting1: 1/183.06
    setting2: 1/161.82
    setting3: 1/169.78
    setting4: 1/143.40
    setting5: 1/140.94
    setting6: 1/131.86
  confidence: ANALYSIS_HIGH_AND_INDUSTRY_ENDPOINT_CROSSCHECK
  note: グリーンべると一次記事の合成端点「1/183（設定1）〜1/132（設定6）」と整合。
baseGamesPer50:
  setting1: 37.46G
  setting2: 37.79G
  setting3: 38.12G
  setting4: 38.45G
  setting5: 38.80G
  setting6: 39.71G
  confidence: ANALYSIS_HIGH
netIncrease:
  missionTimeRT: 約0.65枚/G
  confidence: INDUSTRY
basicPayout:
  big: 約330枚
  midBonus: 約140枚
  missionTimeBonus: 約36枚
  missionTimeRTExpectedIncrease: 約65枚/100G（純増0.65枚/Gからの単純換算。実獲得枚数値としては使用しない）
  confidence: INDUSTRY_AND_ANALYSIS_CROSSCHECK
modeSpecificMinimumData:
  missionTimeRT:
    entry: MISSION TIMES/REG相当ボーナス終了後に必ず突入
    games: 100G
    completion: 完走型
    netIncrease: 約0.65枚/G
    note: RT中にボーナス成立が告知されてもボーナス図柄を外して100G完走可能。完全再現用の内部抽選詳細は収集対象外。
  normalCeiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 通常時ゲーム数消化によるボーナス天井・救済RTは確認できず。100G RTは特定ボーナス後の固定恩恵であり天井ではない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式「ポッシブー」/マツヤ商会と設定変更・リセット・朝一を組み合わせ、当時攻略・旧DB・業界記事・回顧資料を再探索したが、本機固有の設定変更時初期化処理を直接確認できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時にMISSION TIMES後100G完走型RTの状態・残Gが電断を跨いでどう扱われるかを確定できる本機固有資料なし。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合のRT状態・残G、初期出目/告知表示等の直接資料を確定できず。
  gameCounterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常時のゲーム数天井/周期ゲーム数は確認できないため、朝一天井カウンタとして比較すべき公開値なし。RT残Gの設定変更/電断処理は別項目でUNVERIFIED。
  ceilingAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。リセット短縮天井・変更後専用天井の公開仕様を確認できず。
  modeAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常モード/朝一専用モードの公開仕様を確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。100G RT中の設定変更/電源断時にRT状態・残Gを維持/終了/再初期化するか直接確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、初期出目、7セグ/ランプ表示などによる設定変更・据え置き判別の直接資料を確定できず。
  numericResetData: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED

conflicts:
  - field: bonusNaming
    status: TERMINOLOGY_VARIATION
    sourceA: グリーンべるとはビッグ/ミドル/ミッションタイムの3種類と表記
    sourceB: パチマガ旧攻略はBIG/MB/REG（基本システム）とBIG/MB/MT（確率表）を使用
    handling: 同一機能を混同しないため、DBではBIG / MID BONUS / MISSION TIMESボーナスとして統一し、MISSION TIMESボーナス終了後100G RTを別項目化。

missingFields:
  - 設定変更時の100G RT状態・残G処理
  - 据え置き/電源OFF→ON時の100G RT状態・残G処理
  - 本機固有の設定変更判別（ガックン/初期出目/7セグ等）

sources:
  - url: https://web-greenbelt.jp/00003672/
    title: マツヤの『ミッション・イン・ポッシブー』始動 / グリーンべると
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 型式ポッシブー、マツヤ商会、7月中旬納品予定、完全告知、BIG約330枚/MID約140枚/ミッションタイム約36枚、100G RT、純増約0.65枚/G、設定1/6合算端点
  - url: https://p.hisshobon.jp/news/67
    title: 攻撃型パチスロ続々登場!! / パチ＆スロ必勝本
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: 2008-06-04試打会、MISSION絵柄ボーナス後100G完走型RT、7月中旬〜下旬導入予定の照合
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mazya_slot/02/h.php
    title: ミッション・イン・ポッシブー ボーナス抽選確率 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/MB/MT/合算、メーカー発表PAYOUT
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mazya_slot/02/c.php
    title: ミッション・イン・ポッシブー 小役・1000円ゲーム数 / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別1000円あたりゲーム数
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mazya_slot/02/a.php
    title: ミッション・イン・ポッシブー 基本システム / パチマガスロマガ旧攻略
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 完全告知、完走型RT、BIG約330枚/MB約140枚/REG約36枚、REG後100G RT
  - url: https://www.p-world.co.jp/machine/database/5229
    title: ミッション・イン・ポッシブー / P-WORLD
    retrievedAt: 2026-09-01
    confidence: OLD_DATABASE
    usedFor: 基本獲得枚数の照合、2008-07-17時点で実導入済みを示す掲示記録の補助確認
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: OLD_INDUSTRY_HISTORY
    usedFor: 2008-07-14発売、型式ポッシブー、100G完走型RT・0.65枚/Gの照合
  - url: https://pachinko.hatenablog.jp/entry/2008/07/mission-in-possiboo
    title: マツヤ商会「ミッション・イン・ポッシブー」の筺体＆スペック＆情報
    retrievedAt: 2026-09-01
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年7月、メーカー発表PAYOUT/合算系列の照合

researchNotes:
  - LATEST_HANDOFF 276件地点から同じ2008-07-13〜14境界を監査し、GitHub内未登録を確認して遡及追加。
  - グリーンべるとは「7月中旬から納品開始予定」、旧業界史は「2008-07-14発売」。日単位は旧業界史を採用し、一次業界資料で中旬整合を確認した。
  - 性能コアは当時パチマガ旧攻略で設定別ボーナス確率・PAYOUT・1000円ベースが揃い、一次業界資料で仕様・端点を照合できたためCOMPLETE_CORE。
  - resetBehaviorは設定変更/据え置き/電源OFF→ON/RT残G/朝一/ガックンを検索語・資料系統を変えて十分再探索したが本機固有の直接資料なし。一般的5号機挙動から推測補完していない。
