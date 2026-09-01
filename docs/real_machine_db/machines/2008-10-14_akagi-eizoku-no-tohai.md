# アカギ～永続の闘牌～

machineName: アカギ～永続の闘牌～
manufacturer: 藤商事
releaseDate: 2008-10-14
releaseDatePrecision: INDUSTRY_PRIMARY_SHIPMENT_START
releaseDateNote: グリーンべると2008-09-08記事で納品は2008-10-14よりと明記。
modelNumber: アカギエイゾクノトウハイFSC
modelNumberStatus: INDUSTRY_PRIMARY
generation: 5号機
systemType: REG契機・継続率管理ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  retrospective_single:
    setting1: 96.0%
    setting2: 98.0%
    setting3: 101.0%
    setting4: 104.0%
    setting5: 106.0%
    setting6: 110.0%
    source: 後年シリーズ回顧資料
  status: ANALYSIS_SINGLE
  note: 当時K-Navi基本ページは機械割未発表表示。後年回顧値のみ取得できたため、独立した当時解析の第二照合待ち。平均補間はしない。

initialHitBySetting:
  REG: UNVERIFIED_AFTER_RESEARCH
  ART_initial: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 公式・当時業界・K-Navi・パチマガスロマガ現存ページ・旧攻略サイトを横断したが、物差し比較に使える設定別REG/ART初当たり表を今回確定できず。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「1000円あたり/50枚/ベース/コイン持ち」を含め再探索したが本機固有の比較可能値を確定できず。

netIncrease:
  ART: 約1.5枚/G
  status: OFFICIAL_AND_INDUSTRY_CORROBORATED
  note: 藤商事公式、グリーンべると、K-Naviで一致。後年資料の約1.6枚/Gは丸め/回顧差の可能性があるため正本値には採用しない。

basicPayout:
  REG: 約5〜10枚の資料差
  ART_set: 20G/1セット
  ART_expectedIncrementPerSet: 約30枚相当（1.5枚/G×20Gの単純性能比較値。実獲得保証値ではない）
  status: CONFLICT_REG_PAYOUT_AND_HIGH_CONFIDENCE_ART_STRUCTURE
  note: パチマガスロマガ現存基本システムはREG約5枚、2008年当時個人整理資料は約10枚。平均せずCONFLICT。ART20G・純増1.5枚/Gは複数高信頼資料で一致。

modeSpecificMinimumData:
  bonusStructure: BIG非搭載、REG成立を契機にART突入抽選。
  CZ: REG成立後に短い闘牌チャンスを経由する資料あり。
  ART:
    name: 鷲巣ボーナス / 闘牌ボーナス系
    setGames: 20G
    netIncrease: 約1.5枚/G
    continuationRate: 50%〜最大90%以上
    trigger: REG成立時の抽選
  ceiling: NONE_CONFIRMED
  note: グリーンべると当時記事はART1セット20G・純増1.5枚/G・REG成立時突入抽選・継続率50%〜最大90%以上。K-Naviも20G/約1.5枚/Gを独立確認。旧攻略サイトは「天井なし」と明記。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/型式名と「設定変更・リセット・朝一・据え置き・電源OFF ON・状態・ガックン」を組み替え、メーカー公式、当時業界、K-Navi、パチマガスロマガ現存インデックス、旧攻略サイト、後年回顧を横断したが、本機固有の設定変更時内部状態/ART関連処理を確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の通常状態・ART関連内部状態の引継ぎ条件を直接示す資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の内部状態/表示/初期出目を確定できず。
  gameCounterReset: NOT_APPLICABLE_FOR_CEILING_OR_NONE_CONFIRMED。本機は旧攻略資料で天井なし。朝一狙いに影響する通常時天井ゲーム数は確認されない。
  ceilingAfterReset: NOT_APPLICABLE_OR_NONE_CONFIRMED。通常天井なし資料を確認し、リセット短縮天井も確認できず。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時のART期待状態は存在するが、設定変更時の再抽選/引継ぎ/朝一専用モードは確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。低確/高確等の状態が設定変更でどう扱われるかを直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみのART優遇、朝一当選率優遇、短縮天井等の公開根拠を確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、表示、初期出目等の本機固有判別条件を確定できず。
  numericResetData:
    resetCeilingGameCount: NOT_APPLICABLE_OR_NONE_CONFIRMED
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_WITH_DEVICE_SPECIFIC_RESET_DETAILS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - field: REG_basicPayout
    status: CONFLICT
    sourceA: パチマガスロマガ現存基本システム 約5枚
    sourceB: 2008年当時個人整理資料 約10枚
    handling: 平均せず併記。規定2G/2回入賞終了は公式/K-Naviで確認できるが実純増目安は資料差として保持。
  - field: ART_netIncrease_retrospective
    status: MINOR_ROUNDING_VARIANCE_NOT_PRIMARY_CONFLICT
    sourceA: 藤商事公式/グリーンべると/K-Navi 約1.5枚/G
    sourceB: 後年回顧 約1.6枚/G
    handling: 同時代の公式・業界一致値1.5枚/Gを正本とし、1.6枚/Gは回顧丸め差として注記。

missingFields:
  - 設定別REG確率
  - 設定別ART初当たり確率
  - 50枚あたりゲーム数/ベース
  - 当時解析による設定別機械割の第二照合
  - 設定変更/据え置き/電源OFF→ON時の通常状態・ART関連内部状態
  - 本機固有の設定変更判別
  - 朝一専用恩恵/不利および公開朝一数値

sources:
  - url: https://www.fujimarukun.co.jp/products/akagi/
    title: パチスロ アカギ 永続の闘牌 / 藤商事
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: ART搭載、純増1.5枚/G、REGULAR BONUSが2ゲームまたは2回入賞で終了。
  - url: https://news.p-world.co.jp/articles/3031/greenbelt
    title: 藤、時代劇パチンコと麻雀パチスロを同時発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 型式名、ART1セット20G、純増1.5枚/G、REG成立時ART抽選、継続率50%〜最大90%以上、2008-10-14納品開始。
  - url: https://p-kn.com/slot/857/6903/
    title: 驚巣ボーナス(ART) / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: REG成立時ART抽選、20G/1セット、継続率50〜90%、純増約1.5枚/G。
  - url: https://p-kn.com/slot/857/
    title: パチスロアカギ～永続の闘牌～ / K-Navi
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_DATABASE
    usedFor: BIG非搭載、REG仕様、ART機構。設定別機械割/REGは未発表表示のため数値転記せず。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/08/a.php
    title: パチスロ アカギ 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: ART/4ライン、REG純増約5枚、20GセットART構造。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/08/fuji_slot_08.php
    title: パチスロ アカギ 攻略インデックス / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_INDEX_ONLY
    usedFor: ボーナス確率/PAYOUT/ART/攻め時・ヤメ時・設定変更時の専用項目存在確認。本文回収不能箇所は推測転記しない。
  - url: https://www.eightbeat.com/slot99/kishu/a_gyou/a/akagi/page_menu.html
    title: アカギ～永続の闘牌～完全攻略解析情報 / パチスロ救急車
    retrievedAt: 2026-09-02
    confidence: LEGACY_ANALYSIS
    usedFor: 天井なし、2008年10月登場、ART純増+1.5枚/G、REG契機ART構造の独立確認。
  - url: https://www.marimo0925.net/pachislot-kikaiwari-ranking-akagi-ban/
    title: アカギシリーズ歴代機械割ランキング
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_SINGLE
    usedFor: 設定別機械割96/98/101/104/106/110%。当時解析第二照合待ちのためANALYSIS_SINGLE扱い。
  - url: https://plaza.rakuten.co.jp/kirialoverio/diary/200808250000/
    title: パチスロ「アカギ～永続の闘牌～」（藤商事） / 2008年当時個人整理資料
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SECONDARY_LOW
    usedFor: REG約10枚記述。高信頼資料の約5枚と競合するため正本化せずCONFLICT保持。
