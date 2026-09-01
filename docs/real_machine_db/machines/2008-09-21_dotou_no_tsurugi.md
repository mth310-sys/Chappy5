# 怒濤の剣

machineName: 怒濤の剣
manufacturer: ミズホ
releaseDate: 2008-09-21
releaseDatePrecision: CONTEMPORARY_INDUSTRY_DELIVERY_START_DATE
modelName: UNVERIFIED_AFTER_RESEARCH
modelNameCandidate:
  value: ドトウノツルギ2
  status: LOW_CONFIDENCE_RETROSPECTIVE_ONLY_NOT_CANONICALIZED
  note: 後年動画資料に型式名記載があるが、今回の公式・当時業界・主要解析資料では型式表記を独立確認できなかったため正式modelNameへ昇格しない。
generation: 5号機
systemType: ボーナス+周期CZ+ART/RTループ
settings: 1 / 4 / 6 / H
settingLabelNote: 当時5号機まとめwikiのみ最高設定をF表記、P-WORLD・回顧DBはH表記。数値系列は一致するため最高設定ラベルのみCONFLICT_SETTING_TOP_LABEL_H_VS_Fとして保持。

payoutRateBySetting:
  setting1: 97.9%
  setting4: 102.8%
  setting6: 109.5%
  settingH: 112.3%
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH
  note: P-WORLD、回顧DB、当時系解析で一致。5号機まとめwikiは最高設定ラベルのみF表記だが数値112.3%は一致。

initialHitBySetting:
  BIG_combined:
    setting1: 1/455.11
    setting4: 1/431.16
    setting6: 1/409.60
    settingH: 1/381.02
  REG_CAESAR_CHANCE:
    setting1: 1/712.35
    setting4: 1/712.35
    setting6: 1/712.35
    settingH: 1/712.35
  bonusCombined:
    setting1: 1/277.69
    setting4: 1/268.59
    setting6: 1/260.06
    settingH: 1/248.24
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH
  note: P-WORLD精密値を主採用し、pachinko’s blog・当時5号機まとめwiki・pacnkで丸め値/内訳を照合。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「怒濤の剣/怒涛の剣/ドトウノツルギ2/ミズホ」と「50枚/1000円/ベース/コイン持ち」を組み替え、P-WORLD・パチマガ系・当時wiki・回顧DBを横断したが比較可能な直接値を確定できず。小役確率からの独自算出は行わない。

netIncrease:
  battleGame_ART_RT: 約+0.6枚/G
  status: ANALYSIS_HIGH_MULTI_SOURCE_MATCH

basicPayout:
  BIG: 約308枚
  CAESAR_CHANCE_REG: 約107枚
  status: CONTEMPORARY_INDUSTRY_AND_ANALYSIS_MATCH

modeSpecificMinimumData:
  ART_RTName: バトルゲーム
  structure: ART前半パートと20G固定RT後半パートをループ
  averageSetLength: 約50G
  netIncrease: 約+0.6枚/G
  loopRate: 最大99%
  loopRateCandidates: 5% / 60% / 70% / 80% / 90% / 99%
  normalCZCycle: 通常ゲーム80G消化でCZ突入（REG後は1G目がCZ）
  ceiling: 80G周期CZを18回通過で、次回ボーナスまで継続する天井ART
  ceilingCounterPause: バトルゲーム突入中は周期CZ回数カウントが一時停止
  nightMode: ナビ抽選高確率の超高確ゾーン、平均約30G継続（P-WORLD）
  status: ANALYSIS_HIGH

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時に80G周期CZ進行/18回天井カウンタ、ナイトモード等の内部状態、バトルゲーム継続権利・ART/RT状態がどう処理されるかを本機固有資料で確定できず。
  carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の周期CZ回数/天井カウンタ、内部状態、バトルゲーム継続権利の引継ぎを直接確定できず。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない電源OFF→ON時の周期CZ/天井・ART/RT・継続権利処理を直接確定できず。
  gameCounterReset: UNVERIFIED_AFTER_RESEARCH。80G周期CZ×18回の明確な天井構造は確認済みだが、設定変更時の初期化・据え置き/電断時の引継ぎは一般論から補間しない。
  ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。リセット専用の周期短縮、18回未満への短縮、朝一専用天井数値は確認できず、通常天井カウンタの初期化有無も直接資料未確認。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時のナイトモード等は確認済みだが、設定変更時の再抽選/引継ぎ・朝一専用モード振り分けを確定できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ART/RT「バトルゲーム」、CZ、ナビ/継続権利の設定変更・据え置き・電断処理を本機固有資料で確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。通常の80G周期CZ×18回天井以外に、設定変更/朝一専用の天井短縮・ART優遇・当選率優遇は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。「怒濤の剣/怒涛の剣/ドトウノツルギ2/ミズホ」と設定変更・リセット・朝一・据え置き・電源OFF ON・周期CZ・天井・ガックン・初期出目・変更判別・バトルゲームを組み替え、当時解析・P-WORLD・旧wiki・回顧資料を横断したが本機固有の変更判別条件を確定できず。
  numericResetData:
    normalCZCycle: 80G
    normalCeilingCZCount: 18回
    normalCeilingBenefit: 次回ボーナスまで継続する天井ART
    resetCeilingGameCount: UNVERIFIED_AFTER_RESEARCH
    resetCZCount: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    morningSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_BASE_GAMES_PER_50_AND_MODEL_NAME_UNVERIFIED
resetBehaviorQA: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

conflicts:
  - type: CONFLICT_SETTING_TOP_LABEL_H_VS_F
    detail: P-WORLD・pachinko’s blog・pacnkは最高設定をH表記、当時5号機まとめwikiはF表記。対応するBIG/合算/機械割数値は同一系列のため数値競合ではなくラベル競合として保持。

missingFields:
  - 50枚あたりゲーム数/ベースの直接値
  - 正式型式名の高信頼資料による確定
  - 設定変更時の80G周期CZ/18回天井カウンタ初期化・引継ぎ
  - 据え置き/電源OFF→ON時の周期CZ・天井・ART/RT・継続権利処理
  - 設定変更時のナイトモード等内部状態の再抽選/引継ぎ
  - ガックン/初期出目等による設定変更判別の直接資料
  - 朝一専用恩恵/不利および公開朝一専用数値

sources:
  - url: https://www.universal-777.com/product/slot/dotouno_tsurugi/
    title: 怒濤の剣 / ユニバーサルエンターテインメント
    retrievedAt: 2026-09-02
    confidence: OFFICIAL
    usedFor: ミズホ、5号機、ボーナス+ART、発売2008年9月、押し順ナビ型バトルゲームを公式確認。
  - url: https://web-greenbelt.jp/00003760/
    title: アルゼMJが新機種『怒濤の剣』を発表 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 2008-08-20発表、2008-09-21納品開始予定、BIG平均308枚、CAESAR CHANCE平均107枚、最大99%ループの押し順ART+ATを確認。
  - url: https://www.p-world.co.jp/machine/database/5303
    title: 怒濤の剣 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別青7BIG/赤7BIG/REG/合算/機械割、ART/RT約+0.6枚/G、RT20G、平均1セット約50G、80G周期CZ、18回天井ART、カウント一時停止、ナイトモード平均約30G。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/29/a.php
    title: 怒濤の剣 / パチマガスロマガ公式サイト
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: RT/ART延命、天井ART、BIG約308枚、REG約107枚、最高99%バトルゲームを再照合。
  - url: https://w.atwiki.jp/5gouki/pages/127.html
    title: 怒濤の剣 / パチスロ5号機まとめwiki
    retrievedAt: 2026-09-02
    confidence: CONTEMPORARY_COMMUNITY_DATABASE
    usedFor: 2008-09-25時点資料として周期CZ18回天井、RTツインループ、設定別確率/機械割を再照合。最高設定ラベルFの競合も記録。
  - url: https://pachinko.hatenablog.jp/entry/2008/09/dotou-no-tsurugi
    title: ミズホ「怒濤の剣」の筺体＆スペック＆情報
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 2008年9月、設定1/4/6/HのBIG・合算・機械割、99%ループを再照合。
  - url: https://pacnk.com/slot/tools/sh_dotounoken.html
    title: 怒濤の剣 設定判別ツール
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 設定1/4/6/HのBIG・機械割、設定別ベル確率を再照合。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前294「キャッツ・アイ」を再読し、LATEST_HANDOFF基準294件地点から開始。
  - 2008-09-17〜20境界を再監査し、handoff記載候補「チキチキボカン / タワラカワラ / ザ・ブルーハーツG」を具体日検索。9/20以前の確定導入日は今回得られず、当時グリーンべるとで9/21納品開始予定が直接確認できる「怒濤の剣」を次本線とした。
  - 性能コアはユニバーサル公式、当時グリーンべると、P-WORLD、パチマガ系、当時5号機wiki、回顧DBを横断。主要確率・機械割・基本獲得・ART/RT・周期CZ天井まで複数照合。
  - 5号機クロニクルには怒濤の剣欄で別機種と思われる約204枚/48枚・剣RUSH等の内容混入が見られたため、今回の根拠から除外し他ソースを優先。
  - 50枚ベースとresetBehaviorは表記揺れ/型式候補/メーカー名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/周期CZ/ガックン/初期出目/変更判別を組み替えて再探索。直接根拠が取れない項目は一般的5号機挙動で埋めずUNVERIFIED_AFTER_RESEARCHとした。
