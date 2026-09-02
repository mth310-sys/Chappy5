# HAIBいちろう

machineName: HAIBいちろう
manufacturer: イープレイ / 歓喜社
releaseDate: 2008-12-15
releaseDatePrecision: DAY_SCHEDULE_CONFIRMED_INDUSTRY_DATABASE
modelName: HAIBいちろう
modelNumber: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
identityStatus: 2008_EPLAY_KANKISHA_MODEL_CONFIRMED
generation: 5号機
systemType:
  primary: 完全告知 / ノーマル
  status: CONFLICT
  note: 当時パチマガスロマガ機種ページは明確に「完全告知/ノーマル」とし、BIG/REGの規定払い出しと純増を掲載。一方、後年のスロリスクタイムはA+RTに分類する。RTの継続G数・突入条件・純増を裏付ける当時本文を確認できないため、当時詳細資料のノーマル分類をprimaryとし後年A+RT分類はCONFLICTとして保持する。
settings: UNVERIFIED_AFTER_RESEARCH

payoutRateBySetting:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「HAIBいちろう」「HAIBいちろう イープレイ」「HAIBいちろう 歓喜社」「PAYOUT」「機械割」「出率」「設定6」を組み替えて再探索。パチマガスロマガのPAYOUTページ自体は現存するが本文は「現在調査中」で、設定別値を回収できなかった。

initialHitBySetting:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: パチマガスロマガのボーナス抽選確率・単独抽選確率ページはいずれも現存するが本文は「現在調査中」。別系統でも2008年機固有の設定別BIG/REG/合算値を確定できず、推測補完しない。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: パチマガスロマガの小役ページに1000円あたりゲーム数欄は存在するが「現在調査中」。50枚/1000円/ベース/コイン持ちで検索語を変えても比較可能な数値を確定できず。

basicPayout:
  BIG: 約312枚
  REG: 約104枚
  regulatedPayout:
    BIG: 345枚超払い出しで終了
    REG: 105枚超払い出しで終了
  status: ANALYSIS_HIGH_CONTEMPORARY
  note: 当時解析系パチマガスロマガの基本システム本文から取得。規定払い出しと純増を分離して保持する。

netIncrease:
  value: NOT_APPLICABLE_PRIMARY_NORMAL_CLASSIFICATION
  status: CONFLICT_SYSTEM_TYPE
  note: 当時詳細資料はノーマル機とするためprimaryではRT純増は非該当。後年一覧のA+RT分類は存在するが、RT仕様の本文裏付けを確定できないためRT純増値を作らない。

modeSpecificMinimumData:
  - 当時パチマガスロマガは「完全告知/ノーマル」。先告知〜フリーズ告知を組み合わせたハイブリッド告知と、オリジナル乱数抽選システムを採用したチェーンヒットボーナスを特徴として記載。
  - BIG規定345枚超（純増約312枚）、REG規定105枚超（純増約104枚）。
  - BIG中はクリスタルガラスの色で成立役をナビし、6枚役を外した方が得とする技術要素があるが、物差しDBでは詳細手順以上の内部抽選は収集しない。
  - ALL7はイープレイ製として2008-12-15導入予定を掲載。
  - 2008-10-20東京都公安委員会告示の検定情報に「(株)イープレイ『HAIBいちろう』」が掲載されている当時記事を確認。検定通過日とホール導入日は分離する。
  - 後年一覧の2008/11・A+RT分類は当時詳細資料/ALL7と競合するため、月・ゲーム性とも確定値へ統合しない。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガ機種トップに「攻め時・ヤメ時・設定変更時」項目の存在は確認できるが、検索インデックス上で本機固有の設定変更本文を回収できない。一般的なノーマル5号機挙動から補完しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のゲーム数/内部状態/ボーナス関連状態を説明する本機固有資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみ時の本機固有処理を確定できず。
  gameCounterReset: NONE_CONFIRMED_AFTER_RESEARCH。通常時ゲーム数天井の存在を本機固有資料で確認できず、設定変更時の天井カウンタ処理も設定しない。
  ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。リセット専用短縮天井・変更後別天井を示す公開資料を確認できず。
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用モード/変更時モード振り分けを示す公開資料を確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。変更時のみの内部状態再抽選/引継ぎを示す本機固有資料を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、ランプ、リール挙動等による設定変更/据え置き判別を本機固有資料で確定できず。当時掲示板に特殊なリール始動挙動の記録はあるが、それを変更判別挙動とはみなさない。
  numericResetData:
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_CORE_WITH_CONFIRMED_BASIC_PAYOUT_AND_SYSTEM_CONFLICT
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_NO_DEVICE_SPECIFIC_RESET_RULE

conflicts:
  - systemType: 当時パチマガスロマガ「完全告知/ノーマル」 vs 後年スロリスクタイム「A+RT」。RTの具体仕様を当時本文で確認できないため平均・融合せず、当時詳細資料をprimaryに保持。
  - releaseMonth: ALL7は2008-12-15導入予定。後年スロリスクタイムは2008/11分類。具体日を持つ導入予定DBをreleaseDateの主根拠とし、2008/11はCONFLICT/分類差として保持。
  - manufacturerRepresentation: ALL7/検定情報はイープレイ、パチマガスロマガは「イープレイ/歓喜社」、筐体権利表記にも歓喜社とE-PLAYが併記されるため manufacturer は両者を保持。

missingFields:
  - 正式型式番号/検定番号
  - 設定段階
  - 設定別BIG/REG/合算確率
  - 設定別機械割
  - 50枚あたりゲーム数
  - 後年A+RT分類が指すRT仕様の一次/当時本文裏付け
  - 設定変更/据え置き/電源OFF→ON時の本機固有処理
  - 朝一恩恵/不利、変更判別、公開朝一数値

sources:
  - url: https://www.all7.jp/plans/index/2008/12
    title: 2008年12月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: HAIBいちろう、メーカー イープレイ、2008-12-15導入予定。
  - url: https://p-mans.blogspot.com/2008/10/
    title: 遊技機検定情報（10月20日東京都公安委員会告示第366号） / Pマンズ（プレイグラフ転載）
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_ARCHIVE
    usedFor: 2008-10-20検定情報にイープレイ「HAIBいちろう」が掲載されたこと。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/03/a.php
    title: HAIBいちろう 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_CONTEMPORARY
    usedFor: 完全告知/ノーマル、チェーンヒットボーナス、BIG345枚規定/約312枚、REG105枚規定/約104枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/03/h.php
    title: HAIBいちろう ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_CONTEMPORARY
    usedFor: 当該項目が「現在調査中」であり設定別確率/機械割を数値確定できないこと。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/03/c.php
    title: HAIBいちろう 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_CONTEMPORARY
    usedFor: 1000円あたりゲーム数欄が「現在調査中」であること。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eplay_slot/03/eplay_slot_03.php
    title: HAIBいちろう 機種トップ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_CONTEMPORARY
    usedFor: イープレイ/歓喜社表記、設定変更時ページ項目の存在。本文未回収なのでreset確定値には未使用。
  - url: https://pachisuro100.com/a-rt/
    title: A+RT機の5号機、6号機、スマスロの一覧表 / スロリスクタイム
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_LIST
    usedFor: HAIBいちろうをA+RT・2008/11とする後年分類。CONFLICT根拠としてのみ使用。
  - url: https://kako.5ch.io/test/read.cgi/slot/1220309558/l-
    title: 初～ 業界初を語るスレ（その12） / 過去ログ
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_COMMUNITY_LOW
    usedFor: HAIBいちろう固有の特殊なリール始動挙動が当時話題になった記録。設定変更判別根拠には不使用。

researchNotes:
  - 表記揺れ「HAIBいちろう」「HIBIいちろう（当時掲示板誤記含む）」、メーカー「イープレイ」「歓喜社」、項目「BIG」「REG」「合算」「PAYOUT」「機械割」「50枚」「1000円」「RT」「天井」「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」を組み替えて再探索した。
  - パチマガスロマガにはボーナス確率/PAYOUT/1000円あたりゲーム数の専用ページが残るが、該当本文が「現在調査中」であることを確認。空欄を推定値で埋めない。
  - 後年A+RT一覧と当時詳細ノーマル分類の競合は、名称一致だけでRT性能を作らずCONFLICTとして保全した。
  - 実機完全再現用のオリジナル乱数詳細やチェーンヒット内部抽選、演出/リール制御詳細は収集対象外。
