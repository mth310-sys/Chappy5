# エースをねらえ!

machineName: エースをねらえ!
formalModelName: エースをねらえ!（後年資料表記。検定上の正式型式名を一次/当時高信頼資料で再照合できず）
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: ゴールドオリンピア / オリンピア
releaseDate: 2009-04-20
releaseDatePrecision: MULTI_SOURCE_EXACT_DATE
releaseDateNote: K-Naviがホール導入開始2009-04-20、ALL7が導入予定2009-04-20、当時系回顧資料slothistoryも2009-04-20発売と記録。フィールズは2009-03-11に新機種発売を公表したことが後年書誌から確認できるが、発表日を導入日に流用しない。
generation: 5号機
systemType: ボーナス + ART / CZ / パンク回避 / 二段階天井
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 95.6%
  setting2: 98.2%
  setting3: 100.8%
  setting4: 103.4%
  setting5: 106.1%
  setting6: 111.1%
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: pacnk、後年スペック整理、複数旧解析資料で一致。5号機クロニクルもPAYOUT自体は一致するが、同ページのART名称/1セットG数/純増が本機の他資料と明確に不整合なため、ゲーム性情報は資料汚染として不採用。

initialHitBySetting:
  bigCombined:
    setting1: 1/383.25
    setting2: 1/364.09
    setting3: 1/346.75
    setting4: 1/330.99
    setting5: 1/316.60
    setting6: 1/303.41
  regularCombined:
    setting1: 1/574.88
    setting2: 1/546.13
    setting3: 1/520.13
    setting4: 1/496.48
    setting5: 1/474.90
    setting6: 1/455.11
  bonusCombined:
    setting1: 1/229.95
    setting2: 1/218.45
    setting3: 1/208.05
    setting4: 1/198.59
    setting5: 1/189.96
    setting6: 1/182.04
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: pacnk/旧解析の丸め値（BIG 1/383→1/303、REG 1/574→1/455）と、後年スペック整理の精密値が一致。P-WORLD掲載の3種類BIG/2種類REGは各色同率で、合算すると同系列になる。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「50枚」「1000円」「コイン持ち」「ベース」「平均投資金額」を機種名・メーカーと組み替え、K-Navi、P-WORLD、パチマガスロマガ索引、crankyseven、旧解析DB、回顧資料を横断したが、比較可能な直接G数を確定できず。小役確率から逆算しない。

netIncrease:
  tokKunTime: 約+1.0枚/G
  mouTokKunTime: 約+1.0枚/G
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: K-Navi、P-WORLD、パチマガスロマガ、旧解析資料で約+1.0枚/Gが一致。「特訓TIME」は1セット20G、猛特訓TIMEは次回ボーナスまで継続する無限系ART。

basicPayout:
  big: 約252枚
  regular: 約56枚
  status: ANALYSIS_HIGH_CROSSCHECKED
  note: P-WORLD、パチマガスロマガ、旧解析資料で一致。規定払い出しはBIG350枚超、REG60枚超。

modeSpecificMinimumData:
  - 全ボーナス後、ART終了後、通常状態500G消化後にCZ「宗方CHANCE」へ移行。3択特殊リプレイ入賞でARTへ突入し、ナビストックがあれば押し順ナビが発生する。
  - ART「特訓TIME」は1セット20G、純増約+1.0枚/G。基本は20G消化またはボーナス成立等で終了。
  - ナビ3個以上ストック等の条件で次回ボーナスまで続く「猛特訓TIME」へ移行する構造を旧解析で確認。完全な内部ナビ抽選は物差し用途外。
  - 第1天井: 通常状態500G消化でCZ「宗方CHANCE」へ突入。ボーナス/ART直撃天井ではない。
  - 第2天井: 通常状態1000G消化でARTナビ1個をストックし、以後200G消化ごとに1個追加。P-WORLDの500G CZ記載、crankyseven/パチスロ救急車の500G/1000G二段階天井を照合。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名/ゴールドオリンピア/オリンピアと「設定変更」「リセット」「朝一」「天井CZ」「ナビストック」「宗方CHANCE」「特訓TIME」を組み替え、パチマガスロマガの「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが本文を回収できず、500G/1000Gカウンタ・ナビストック・CZ/ART状態の処理を断定しない。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の500G/1000Gカウンタ、ARTナビストック、CZ/ART状態の引継ぎを機種固有高信頼本文から確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井カウンタ、ナビストック、CZ/ART状態、液晶/リール状態の扱いを確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常500G/1000Gの二段階天井は確認済みだが、設定変更時RESET/CARRY_OVERを直接確認できず。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の短縮/延長天井数値は確認できず。通常時は500GでCZ、1000Gでナビ1個、以後200Gごとにナビ1個。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。朝一専用モード、設定変更専用モード振り分けの公開根拠を確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の内部状態/CZ/ART/ナビストックの再抽選・消去・引継ぎを確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの天井短縮、CZ/ART優遇、ナビ付与等の主要恩恵を直接確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時のみの主要な不利数値を確認できず。
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/CZ表示等による本機固有の設定変更/据え置き判別条件を確定できず。
  numericResetData:
    normalFirstCeiling: 通常状態500GでCZ
    normalSecondCeiling: 通常状態1000GでARTナビ1個、以後200Gごとに1個追加
    resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED
resetBehaviorQA: RESEARCHED_WITH_CHANGE_CARRYOVER_POWER_CYCLE_UNVERIFIED

conflicts:
  - laterDatabaseContamination: 5号機クロニクルはPAYOUT 95.6〜111.1%自体は他資料と一致する一方、本機を「ART エースをねらえ！RUSH・1セット50G・純増約1.5枚」と記述しており、P-WORLD/K-Navi/パチマガスロマガ/旧解析の「特訓TIME・20G・約+1.0枚/G」と不整合。機械割照合以外の同ページゲーム性値は不採用。

missingFields:
  - 当時一次/検定資料での正式型式名・検定番号
  - 50枚あたりゲーム数/ベース
  - 設定変更時の500G/1000G天井カウンタRESET/CARRY_OVER
  - 据え置き時の天井カウンタ/ナビストック/CZ/ART状態引継ぎ
  - 単純電源OFF→ON時の天井カウンタ/ナビストック/CZ/ART状態
  - 設定変更時の内部状態/モード再抽選
  - ガックン/初期出目/液晶等による変更判別条件
  - 設定変更専用の公開朝一数値

sources:
  - url: https://p-kn.com/slot/959/
    title: エースをねらえ! / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: 2009-04-20ホール導入開始、BIG/REG払い出し条件、CZ宗方CHANCE、ART特訓TIME20G、純増約+1.0枚/G、猛特訓TIME、天井CZ解析項目の存在。
  - url: https://www.all7.jp/plans/index/2009/04
    title: 2009年4月の導入機種一覧 / ALL7
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE_DATABASE
    usedFor: 2009-04-20導入予定、同日群の順序監査。
  - url: https://www.p-world.co.jp/machine/database/5521
    title: エースをねらえ! / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH_DATABASE
    usedFor: オリンピア、5号機ART/パンク回避/天井、BIG約252枚、REG約56枚、500G CZ、ART20G/無限ART、純増約+1.0枚/G、色別ボーナス確率。
  - url: https://pacnk.com/slot/tools/sh_aceonerae.html
    title: エースをねらえ! 設定判別ツール / pacnk
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ANALYSIS_DATABASE
    usedFor: 設定別BIG/REG、PAYOUT照合。
  - url: https://pachinko.hatenablog.jp/entry/2009/04/ace-wo-nerae
    title: ゴールドオリンピア「パチスロ エースをねらえ！」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: SECONDARY_ARCHIVE
    usedFor: 設定別BIG/REG/ボーナス合算の精密値、2009年4月、型式名表記候補。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/06/a.php
    title: エースをねらえ! 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_HIGH
    usedFor: CZ/ART構造、ART約+1枚/G、20G、BIG約252枚、REG約56枚。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/06/goldolympia_slot_06.php
    title: エースをねらえ! / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_INDEX
    usedFor: 「攻め時・ヤメ時・設定変更時」専用項目の存在確認。本文未回収のためresetBehaviorは推測しない。
  - url: https://crankyseven.com/acewonerae-pc.htm
    title: エースをねらえ！ 解析攻略
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_DATABASE
    usedFor: 500G CZ、1000Gでナビ1個・以後200Gごと追加の二段階天井、ボーナス合算照合。
  - url: https://eightbeat.com/slot99/kishu/a_gyou/e/acewonerae/page_menu.html
    title: エースをねらえ! / パチスロ救急車
    retrievedAt: 2026-09-02
    confidence: OLD_ANALYSIS_DATABASE
    usedFor: BIG/REG/合算、機械割、ART約+1.0枚/G、20G、500G/1000G天井の照合。
  - url: https://slothistory.com/kousin_kako07.html
    title: パチスロ業界初まとめ 更新情報7
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_ARCHIVE_SECONDARY
    usedFor: 2009-04-20発売、CZナビ系ART、20G・約+1.0枚/Gの当時記録。
  - url: https://news.p-world.co.jp/articles/3565/greenbelt
    title: 平和第1四半期は厳しく推移 / グリーンべると転載
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: ゴールドオリンピアブランド機であることの業界照合。
  - url: https://5goki.com/heiwa-olympia
    title: 平和＆オリンピア 5号機全機種一覧 / 5号機クロニクル
    retrievedAt: 2026-09-02
    confidence: SECONDARY_RETROSPECTIVE_WITH_CONTAMINATION
    usedFor: 機械割のみ照合。ART名称/20G/純増値は他高信頼資料と矛盾するため不採用。

researchNotes:
  - 取得日: 2026-09-02
  - 実機完全再現用の全小役/ナビ獲得率/状態移行率は収集対象外。
  - resetBehavior欠損は、機種名表記・ゴールドオリンピア/オリンピア・設定変更/リセット/朝一/据え置き/電源OFF ON/天井CZ/500G/1000G/ナビストック/ガックンを組み替え、K-Navi、P-WORLD、パチマガスロマガ、crankyseven、旧DB、回顧資料まで再探索後の判定。
