# ヒミコスタイル

machineName: ヒミコスタイル
formalTypeName: ヒミコスタイルA
manufacturer: エール
releaseDate: 2008-05-26
generation: 5号機
systemType: ボーナス+RT（青7BIG後1GチャンスからRT「ヒミコタイム」）
payoutRateBySetting:
  manufacturerListedViaPachimaga:
    setting1: 97.34%
    setting2: 99.13%
    setting3: 101.71%
    setting4: 104.50%
    setting5: 108.29%
    setting6: 113.06%
    confidence: ANALYSIS_HIGH
    sourceDefinition: パチマガスロマガ掲載「メーカー発表値」
  note: 当時業界史まとめでも設定6約113.1%として整合。
initialHitBySetting:
  BIGcombined:
    setting1: 1/348.60
    setting2: 1/334.37
    setting3: 1/321.25
    setting4: 1/309.13
    setting5: 1/297.89
    setting6: 1/287.44
    note: メガボーナス赤7 + BIG青7の合成
  LB:
    setting1: 1/819.20
    setting2: 1/744.73
    setting3: 1/682.67
    setting4: 1/630.15
    setting5: 1/585.14
    setting6: 1/546.13
  combined:
    setting1: 1/244.54
    setting2: 1/230.76
    setting3: 1/218.45
    setting4: 1/207.39
    setting5: 1/197.40
    setting6: 1/188.32
  confidence: ANALYSIS_HIGH
baseGamesPer50:
  setting1: 40.69G
  setting2: 41.90G
  setting3: 43.18G
  setting4: 44.55G
  setting5: 46.54G
  setting6: 48.76G
  confidence: ANALYSIS_HIGH
  sourceDefinition: パチマガスロマガ「1000円あたりのゲーム数」
netIncrease: UNVERIFIED_AFTER_RESEARCH。機種名/型式名/エール/ヒミコタイムと「RT純増/枚G/1Gあたり/ゲーム数」を組み替え、パチマガスロマガ、当時業界史、旧攻略系、後年一覧を横断したが比較可能な直接値を確定できず。
basicPayout:
  megaBonus_red7: 約416枚（465枚超払い出しで終了）
  BIG_blue7: 約260枚（285枚超払い出しで終了）
  LB_luckyBonus: 約65枚（60枚超払い出しで終了との当時解析表記）
modeSpecificMinimumData:
  HimikoTime:
    type: RT
    trigger: 青7BIG終了後1G目のみ突入チャンス
    games: UNVERIFIED_AFTER_RESEARCH
    netIncrease: UNVERIFIED_AFTER_RESEARCH
    note: 当時パチマガスロマガでRT名称・青7BIG後1Gのみ突入チャンスまで直接確認。詳細ゲーム数/純増は検索取得できた本文で確定できないため推測しない。
  ceiling:
    status: NONE_CONFIRMED_AFTER_RESEARCH
    note: 当時パチマガスロマガの「攻め時・ヤメ時→特にナシ」および複数検索で通常時ゲーム数天井を確認できず。後年DBの明示的天井記載も今回未取得のため、天井非搭載を断定しすぎずNONE_CONFIRMEDとする。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/正式型式ヒミコスタイルA/エールと「設定変更/リセット/朝一」を組み替えて当時解析・旧DB・掲示板・業界史を横断したが、設定変更時のRT/CZ状態や1Gチャンス状態を直接説明する資料を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のRT状態・ボーナス後1Gチャンス状態の扱いを直接明記する資料は未確認。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合のRT/内部状態・初期出目は未確認。
  gameCounterReset: NO_NORMAL_GAME_CEILING_COUNTER_CONFIRMED。通常ゲーム数天井は再探索後も確認されず、設定変更で短縮/引継ぎされる公開ゲーム数カウンタもNONE_CONFIRMED。
  ceilingAfterReset: NONE_CONFIRMED。リセット専用短縮天井・変更天井の公開値は確認できず。
  modeAfterReset: NONE_CONFIRMED。朝一専用モードや設定変更時モード振り分けは確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT/CZ関連状態の設定変更・据え置き・電断処理は直接根拠を取得できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/初期出目/液晶・フィギュア表示/1G挙動による本機固有の設定変更判別は再探索後も直接情報を確定できず。
  numericResetData: NONE_CONFIRMED

coreStatus: PARTIAL_CORE_RT_DETAIL_UNVERIFIED
resetBehaviorQA: PARTIAL_RESET_PROCESS_UNVERIFIED_AFTER_RESEARCH

conflicts: []

missingFields:
  - RT「ヒミコタイム」の直接確認できる規定ゲーム数
  - RT純増/G
  - 設定変更・据え置き・電源OFF→ON時のRT/CZ関連状態処理
  - 本機固有の変更判別情報

sources:
  - url: https://slothistory.com/kousin_kako05.html
    title: パチスロ業界初まとめ 更新情報5
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 正式型式ヒミコスタイルA、2008-05-26発売記録、RT/1Gチャンス構造の当時記録、設定6約113.1%補助照合
  - url: https://p-mans.blogspot.com/2008/05/
    title: Pマンズ 2008年5月 / エールがアキバのメイドカジノで新機種発表
    retrievedAt: 2026-09-01
    confidence: INDUSTRY
    usedFor: エール、2008-05-15発表会、機種名ヒミコスタイル、フィギュアパチスロ第2弾
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yell_slot/02/a.php
    title: ヒミコスタイル 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: ボーナス+RT、青7BIG終了後1Gのみヒミコタイム突入チャンス、メガ約416枚/BIG約260枚/LB約65枚
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yell_slot/02/h.php
    title: ヒミコスタイル ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG合成/LB/総合成、メーカー発表PAYOUT 97.34〜113.06%
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yell_slot/02/c.php
    title: ヒミコスタイル 小役確率 / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数40.69〜48.76G
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yell_slot/02/b.php
    title: ヒミコスタイル 攻略メニュー / パチマガスロマガ
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_HIGH
    usedFor: RT専用解説ページの存在、攻め時・ヤメ時「特にナシ」。設定変更時の直接本文は取得できないため推測に使用していない。
  - url: https://www.p-world.co.jp/sp/search_kisyubbs.cgi?code=5204&group_id=2999&kisyu_id=5204&mode=articles&past_file_num=&thread_id=9
    title: ヒミコスタイル 掲示板 / P-WORLD
    retrievedAt: 2026-09-01
    confidence: ANALYSIS_SINGLE
    usedFor: 2008-06-19時点で近隣ホール導入済みという実稼働時期の補助確認。仕様値の根拠には使用しない。

researchNotes:
  - releaseDateは「ヒミコスタイル/ヒミコスタイルA/エール」×「2008年5月/6月/発売/納品/導入」を変更。2008年5月15日発表会・当時更新資料の5月26日発売・6月19日時点実稼働を時系列で照合し、2008-05-26を採用。
  - 性能コアは「BIG/LB/合成/機械割/PAYOUT/1000円/50枚/ベース」を変更し、パチマガスロマガから設定別確率・メーカー発表機械割・設定別ベースを直接取得。
  - RT詳細は「ヒミコタイム/RT/ルーレットチャンス/ゲーム数/純増/77G/100G/0.3枚/0.5枚/0.7枚」まで変えて横断したが、直接値を確定できなかったためUNVERIFIED_AFTER_RESEARCH。
  - resetBehaviorは「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン」を機種名・型式名・メーカー名と組み替えて再探索。設定変更時のRT/CZ処理・変更判別は確定できず、一般的5号機挙動を流用していない。
