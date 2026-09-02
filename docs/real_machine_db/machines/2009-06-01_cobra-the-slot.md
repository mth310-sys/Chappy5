# COBRA -THE SLOT-

machineName: COBRA -THE SLOT-
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: 藤商事
releaseDate: 2009-06-01
releaseDatePrecision: ANALYSIS_CALENDAR_EXACT_WITH_OFFICIAL_DELIVERY_WINDOW_CONFLICT_BY_DEFINITION
releaseDateNote: K-Naviは2009-06-01ホール導入開始、ALL7も2009-06-01導入予定。藤商事公式リリースと当時グリーンべるとは2009年5月下旬から順次納品、当時業界回顧は2009-05-25発売とするため、納品/発売/全国導入の定義差を平均化せず保持し、本DB時系列主値は具体的ホール導入日2009-06-01とする。
generation: 5号機
systemType: ボーナス+ART / RT「STORY MODE」経由 / パンク回避ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 98.0%
  setting2: 100.7%
  setting3: 103.5%
  setting4: 106.3%
  setting5: 110.0%
  setting6: 112.3%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、5号機クロニクル、2009年4月当時スペック転載で一致。

initialHitBySetting:
  bonusCombined:
    setting1: 1/199.80
    setting2: 1/192.75
    setting3: 1/187.25
    setting4: 1/179.06
    setting5: 1/180.04
    setting6: 1/173.38
  bigBreakdown:
    status: UNVERIFIED_AFTER_RESEARCH
    note: S-BIG/BIG/BONUS GAMEの設定別個別確率は、現存K-Naviおよびパチマガスロマガが未発表/調査中表示で、別系統の高信頼直接系列も確定できず。合算から逆算しない。
  regBreakdown:
    status: UNVERIFIED_AFTER_RESEARCH
  artInitialHit:
    status: UNVERIFIED_AFTER_RESEARCH
  status: PARTIAL_COMBINED_ONLY_CROSSCHECKED
  note: P-WORLD丸め値1/199.8〜1/173.4と2009年当時転載の精密系列が整合。

baseGamesPer50:
  status: UNVERIFIED_AFTER_RESEARCH
  note: パチマガスロマガ現存ページの小役確率・1000円あたりゲーム数は「現在調査中」。機種名/メーカー/50枚/1000円/ベース/コイン持ちを組み替えて再探索したが比較可能な直接値を確定できず。

netIncrease:
  artBattleZone: 約+0.8枚/G
  status: OFFICIAL_GAME_SYSTEM_AND_CONTEMPORARY_INDUSTRY_CROSSCHECKED
  note: 藤商事公式はバトルゾーン×ボーナスのメビウスループを明示。純増約0.8枚/Gはグリーンべると、K-Navi、P-WORLD、当時資料で一致。

basicPayout:
  superBig: 約250枚
  big: 約250枚
  bonusGame: 約104〜111枚
  status: CONTEMPORARY_INDUSTRY_AND_ANALYSIS_CROSSCHECKED
  note: 藤商事公式はS-BIG/BIGとも351枚超払い出し終了、BONUS GAMEは130枚超払い出し終了。実獲得目安はグリーンべると/P-WORLD/当時資料でS-BIG・BIG約250枚、BG約104〜111枚。

modeSpecificMinimumData:
  - BIG終了後はストーリー進行型RT「STORY MODE」へ移行し、ストーリー完遂でART「BATTLE ZONE」へ突入。
  - ART「BATTLE ZONE」は約+0.8枚/G。平均約280G継続とする解析資料あり。
  - ARTはボーナス成立では終了せず継続する「メビウスループ」が特徴。
  - SUPER BIG後はストーリーを介さずART突入が確定し、次回ボーナスまで継続する無限ART扱いの解析がある。
  - 通常時には3つの内部状態が存在することをK-Naviが攻略項目として明示。
  - 通常時777G消化後はハイモード滞在率が優遇されART突入期待度が上昇する。P-WORLDが「天井」として掲載するが、777G到達即ART確定型ではなく状態優遇型として記録。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。COBRA THE SLOT/COBRA -THE SLOT-/コブラ・ザ・スロット/藤商事と「設定変更/設定変更時/リセット/朝一/天井/777G/ハイモード/内部状態/ART/RT」を組み替え、公式・K-Navi・P-WORLD・パチマガスロマガ・当時記事・旧資料を横断したが、設定変更時の具体処理を直接確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。777Gまでの通常ゲーム数進捗が据え置き時に引き継がれるか、設定変更時に消去されるかを本機固有の直接資料で確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の777G進捗、内部3状態、STORY MODE/ART残状態の扱いを確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時777Gでハイモード優遇という到達条件は確認済みだが、設定変更時のカウンタRESET/CARRY_OVERは未確認。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更後の短縮天井・別ゲーム数・777G維持/短縮を示す直接資料なし。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。内部3状態の存在は確認したが、設定変更時の初期状態または振り分けは未確認。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。RT「STORY MODE」、ART「BATTLE ZONE」、無限ARTの設定変更/据え置き/電断時処理を直接確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の777G短縮、ハイモード優遇、ART/RT恩恵等は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/初期出目/液晶ステージ/朝一挙動等による設定変更判別を検索語変更して再探索したが、本機固有の確定判別法を回収できず。
  numericResetData:
    normalCeilingLikeCondition: 通常時777G消化後にハイモード滞在率優遇・ART突入期待度上昇
    normalCeilingClassification: STATE_ADVANTAGE_AT_777G_NOT_IMMEDIATE_ART_GUARANTEE
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    gameCountAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_CORE_WITH_COMBINED_BONUS_ONLY_AND_BASE_UNVERIFIED
resetBehaviorQA: PARTIAL_WITH_777G_STATE_ADVANTAGE_CONFIRMED_RESET_CARRYOVER_POWER_CYCLE_MODE_STATE_AND_DETECTION_UNVERIFIED

conflicts:
  - releaseDateDefinition: 藤商事公式/グリーンべると=2009年5月下旬から順次納品、パチスロ業界初まとめ=2009-05-25発売、K-Navi/ALL7=2009-06-01導入。納品/発売/ホール導入の定義差として全て保持。
  - bonusGamePayout: 当時記事・P-WORLDは約104〜111枚の表記差。技術介入/消化条件差を含む可能性があるため単一値に平均化しない。

missingFields:
  - 正式型式名・検定番号の高信頼直接根拠
  - S-BIG/BIG/BONUS GAMEの設定別個別確率
  - 50枚あたりゲーム数
  - 設定別ART初当たり/突入率
  - 設定変更時777GカウンタRESET/CARRY_OVER
  - 据え置き/単純電源OFF→ON時の777G進捗・内部状態・RT/ART状態
  - 設定変更後の内部3状態振り分け
  - ガックン/初期出目/液晶等による変更判別
  - 設定変更専用の公開朝一数値

sources:
  - url: https://www.fujimarukun.co.jp/products/cobra/
    title: COBRA -THE SLOT- / 株式会社 藤商事
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: メーカー、ART「バトルゾーン」×ボーナスのメビウスループ、ボーナス規定払い出し。
  - url: https://www.fujimarukun.co.jp/corp/news/23.pdf
    title: 新製品パチスロ遊技機『COBRA－THE SLOT－』発売に関するお知らせ / 藤商事 2009-04-01
    retrievedAt: 2026-09-02
    confidence: OFFICIAL_PRIMARY
    usedFor: 正式販売機種名、ARTがボーナスで終了せず継続する特徴、2009年5月下旬から全国順次納品予定。
  - url: https://web-greenbelt.jp/00003106/
    title: ドット×パトライトのコラボが迫力の演出を実現 / グリーンべると 2009-04-01
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_INDUSTRY
    usedFor: COBRA THE SLOT発表、ART約+0.8枚/G、S-BIG/BIG約250枚、BG約104〜111枚、S-BIG後の次回ボーナスまでART、5月下旬納品予定。
  - url: https://p-kn.com/slot/963/
    title: COBRA THE SLOT / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 2009-06-01ホール導入開始、RT STORY MODE、ART BATTLE ZONE約+0.8枚/G、3つの内部状態、天井攻略項目の存在。設定別確率/機械割は現存ページでは未発表表示。
  - url: https://www.p-world.co.jp/machine/database/5524
    title: COBRA-THE SLOT- / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: 5号機ART/CZ/パンク回避、合算確率1/199.8〜1/173.4、機械割98.0〜112.3%、BIG約250枚/REG約111枚、ART約+0.8枚/G、平均約280G、通常777G後ハイモード優遇。
  - url: https://www.all7.jp/plans/index/2009/06/10
    title: 2009年6月新台導入予定一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: OLD_INDUSTRY_DATABASE
    usedFor: 藤商事COBRA -THE SLOT-の2009-06-01導入予定を別系統照合。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/09/fuji_slot_09.php
    title: コブラ・ザ・スロット / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 当時解析ページ構成、設定変更時項目の存在確認。現存検索インデックスから具体本文は回収できず。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/09/c.php
    title: コブラ・ザ・スロット 小役出現確率・1000円あたりのゲーム数 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 50枚ベースが現存ページで「現在調査中」であることを確認し、推測補完を回避。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/09/h.php
    title: コブラ・ザ・スロット ボーナス抽選確率・PAYOUT / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS
    usedFor: 個別ボーナス確率/PAYOUTが現存ページで「現在調査中」であることを確認。
  - url: https://5goki.com/fuji
    title: 藤商事5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 機械割98.0/100.7/103.5/106.3/110.0/112.3%の別系統照合。
  - url: https://plaza.rakuten.co.jp/invisibleband/diary/
    title: COBRA -THE SLOT- 藤商事 / best member 2009-04-12
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_SPEC_REPOST
    usedFor: 精密合算1/199.80〜1/173.38、機械割系列、納期5月31日表記、実獲得目安、ART約+0.8枚/Gの当時系列照合。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ 更新情報7
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_RETROSPECTIVE_ARCHIVE
    usedFor: 2009-05-25発売表記、平均280G・約+0.8枚/Gの完走型ART、S-BIG後のART仕様を補助照合。

researchNote:
  - repo内を「COBRA THE SLOT」で検索し未登録を確認。LATEST_HANDOFF作成後にGet The Rankerとニューパルサー3がmainへ追加済みであることを直近コミットから確認し、重複を避けて同日群の次候補として処理。
  - 「COBRA THE SLOT / COBRA -THE SLOT- / コブラ・ザ・スロット / 藤商事 / 2009」と、型式・検定・スペック・機械割・合算・BIG・REG・50枚・1000円・設定変更・リセット・朝一・据え置き・電源OFF ON・777G・天井・ハイモード・内部状態・ガックンを組み替えて再探索。
  - 777G条件は「ART確定天井」と単純化せず、P-WORLD直接記述どおりハイモード滞在率優遇によるART期待度上昇と記録。
  - 設定変更/据え置き/電断の一般的5号機挙動から補完せず、本機固有の直接根拠が取れない項目はUNVERIFIED_AFTER_RESEARCH/NONE_CONFIRMED_AFTER_RESEARCHとした。
