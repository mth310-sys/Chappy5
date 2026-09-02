# ぶっちゃけはっちゃけ大奥浪漫

machineName: ぶっちゃけはっちゃけ大奥浪漫
alternateNames: 大奥浪漫 / ぶっちゃけはっちゃけ 大奥浪漫
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: ラスター
releaseDate: 2009-06-22
releaseDatePrecision: OLD_ANALYSIS_CALENDAR_EXACT_CROSSCHECKED
releaseDateNote: K-Navi全国一斉導入カレンダーが2009-06-22、パチスロ業界初まとめも2009/6/22発売として一致。5号機クロニクルは2009/6導入で月整合。本DBでは全国一斉導入開始日の2009-06-22を主値とする。
generation: 5号機
systemType: A+RT / ボーナス+CZ+ループ型RT
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 97.2%
  setting2: 98.7%
  setting3: 100.3%
  setting4: 102.1%
  setting5: 104.1%
  setting6: 106.1%
  status: RETROSPECTIVE_SINGLE_SERIES
  note: 5号機クロニクルのラスター全機種一覧に掲載された設定別機械割。パチマガスロマガ旧解析はPAYOUT欄が「現在調査中」であり、別系統の同一設定別表を直接照合できなかったため単一回顧DB値として保持する。

initialHitBySetting:
  big:
    setting1: 1/378.82
    setting2: 1/372.36
    setting3: 1/360.09
    setting4: 1/339.56
    setting5: 1/315.08
    setting6: 1/278.88
  reg:
    setting1: 1/524.29
    setting2: 1/492.75
    setting3: 1/442.81
    setting4: 1/431.16
    setting5: 1/374.49
    setting6: 1/278.88
  bonusCombined:
    setting1: 1/219.92
    setting2: 1/212.09
    setting3: 1/198.59
    setting4: 1/189.96
    setting5: 1/171.11
    setting6: 1/139.44
  status: ANALYSIS_SINGLE_OLD_MAJOR
  note: パチマガスロマガ旧解析の設定別精密値。検索語・資料系統を変えて再探索したが、同じ精密表を別系統から直接照合できなかったためANALYSIS_SINGLEに留める。

baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: パチマガスロマガ旧解析の「1000円あたりのゲーム数」は現在調査中。機種名表記揺れ、ラスター、50枚、1000円、ベース、コイン持ち等を組み替え、旧DB/回顧資料も横断したが比較可能な直接値を確定できず。

netIncrease:
  rt: 約+0.7枚/G
  status: OLD_INDUSTRY_SINGLE
  note: 当時のパチスロ業界初まとめが15Gまたは37GのCZ系RTを約0.7枚/Gと記載。10000G RTを含む全RTで同一純増かを別資料で直接照合できなかったため、RT全体の代表値としては単一当時資料扱い。

basicPayout:
  big: 約245枚
  reg: 約70枚
  regulatedPayout:
    big: 345枚
    reg: 72枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガ旧解析の基本システムに純増枚数BIG245枚、REG70枚、規定払い出し枚数345枚/72枚と明記。

modeSpecificMinimumData:
  - ボーナス終了後または通常時777G消化でCZ「好色チャンス」へ突入。
  - CZ中はベルで15G RT、特殊リプレイAで37G RT、特殊リプレイBで10000G RT、通常リプレイで通常時へ転落する構造。
  - RT規定ゲーム数消化後は再度CZへ戻るループ型。PAPIMOは15G・37G・10000Gの3種類RTとループ率70%以上を紹介。
  - 当時資料では15G/37G系RTの純増目安は約+0.7枚/G。
  - 通常時777Gはボーナス当選確定ではなくCZ「好色チャンス」突入契機。通常ゲーム数到達型の直接ボーナス天井とは区別する。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/略称/メーカー名と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「777G」「天井」「CZ」「好色チャンス」「好色タイム」「ガックン」を組み替え、パチマガスロマガ旧解析、K-Navi、PAPIMO、当時業界資料、5号機回顧DBを横断した。パチマガスロマガ機種トップに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認できるが、現存検索結果から具体本文を回収できず、777Gカウンタ/CZ/RTの変更時処理を推測しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に777G到達までの通常ゲーム数進捗、CZ、RT残ゲーム数を引き継ぐかを示す本機固有の直接資料を確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の777G進捗、CZ/RT状態の復帰・維持を示す直接資料を確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時777G消化でCZ突入することは確認済みだが、設定変更時にこの777G進捗がリセット/引継ぎのどちらかは直接確定できず。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時に777G条件が短縮・変更される公開数値は確認できず。なお777GはCZ突入契機でありボーナス確定天井ではない。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モード、設定変更時モード振り分けを示す直接資料を確認できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時のCZ「好色チャンス」/RT「好色タイム」状態処理を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。777G短縮、朝一CZ優遇、RT優遇など設定変更専用の公開恩恵は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶表示、CZ表示等による設定変更/据え置き判別の本機固有直接情報を確認できず。
  numericResetData:
    normalStateTrigger: 通常時777G消化でCZ「好色チャンス」突入
    resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
    gameCountAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_PAYOUT_SINGLE_RETROSPECTIVE_SOURCE
resetBehaviorQA: COMPLETE_RESEARCH_PASS_WITH_PRIMARY_RESET_FIELDS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - noneConfirmed: 今回取得した直接性能値同士で明確な競合は確認されず。機械割は別系統照合不足のためCONFLICTではなく単一回顧資料値として信頼度を下げて保持。

missingFields:
  - 正式型式名/検定番号
  - 50枚あたりゲーム数/ベース
  - 機械割の別系統直接照合
  - 設定変更時の777G進捗、CZ/RT状態処理
  - 据え置き/単純電源OFF→ON時の777G進捗・CZ/RT引継ぎ
  - リセット短縮、朝一専用モード/状態振り分け、公開朝一数値
  - ガックン/初期出目/液晶等による変更判別

sources:
  - url: https://p-kn.com/calendar/200906/
    title: パチンコ・パチスロ新台導入カレンダー 2009年6月 / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_CALENDAR
    usedFor: 2009-06-22全国一斉導入開始、2009-06-16〜21の境界監査、次候補時系列。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ ～更新情報7
    retrievedAt: 2026-09-02
    confidence: OLD_INDUSTRY_ARCHIVE
    usedFor: 2009/6/22発売、CZ系RT、15G/37G、約0.7枚/G、限定400台という当時記録。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/20/a.php
    title: 大奥浪漫 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: ボーナス後/通常777G後CZ、15G/37G/10000G RT、BIG245枚/REG70枚、規定払い出し345枚/72枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/20/h.php
    title: 大奥浪漫 ボーナス抽選確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 設定1〜6のBIG/REG/ボーナス合算精密値。PAYOUT欄が現在調査中であることも確認。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/20/c.php
    title: 大奥浪漫 小役確率・1000円あたりゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 1000円あたりゲーム数が現在調査中であることの確認。ベースを推測補完しない根拠。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/20/luster_slot_20.php
    title: 大奥浪漫 機種解析トップ / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 「攻め時・ヤメ時・設定変更時」専用解析項目が存在したことの確認。具体本文は回収できず推測しない。
  - url: https://5goki.com/luster
    title: ラスター5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2009/6導入、設定1〜6機械割97.2/98.7/100.3/102.1/104.1/106.1%。
  - url: https://papimo.jp/installed/search_50/S/15
    title: PAPIMO パチスロ設置店検索
    retrievedAt: 2026-09-02
    confidence: DATABASE_SECONDARY
    usedFor: 15G/37G/10000Gの3種類RT、RTループ率70%以上の照合。

researchNotes:
  - 欠損判定前に「ぶっちゃけはっちゃけ大奥浪漫」「ぶっちゃけはっちゃけ 大奥浪漫」「大奥浪漫」「ラスター」と、設定変更/リセット/朝一/据え置き/電源OFF ON/777G/天井/天井短縮/モード/CZ/好色チャンス/好色タイム/ガックン/50枚/1000円/ベース/型式/検定番号を組み替えて検索。
  - K-Navi、当時業界アーカイブ、パチマガスロマガ旧解析、PAPIMO、5号機クロニクル、旧DB/回顧資料を横断。
  - 通常時777GはCZ突入条件として直接確認できるが、設定変更時の進捗リセット/引継ぎは確認できないため一般的な5号機挙動から補間していない。
  - 検索上「大奥」のアニメ/漫画等が大量混在するため、ラスター/パチスロ/好色タイムを併記して同名ノイズを排除した。
