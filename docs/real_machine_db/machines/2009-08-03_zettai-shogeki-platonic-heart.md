# 絶対衝激～PLATONIC HEART～

machineName: 絶対衝激～PLATONIC HEART～
formalModelName: ゼッタイショウゲキA
inspectionNumber: 9S0409
manufacturer: アリストクラートテクノロジーズ
releaseDate: 2009-08-03
releaseDatePrecision: EXACT_HALL_INTRODUCTION_OLD_MAJOR
releaseDateNote: K-Naviがホール導入開始2009-08-03を明記。P-WORLDは導入開始を2009年7月と月単位表記、後年の公式系復刻資料/回顧資料は初代を2009年8月発売として扱うため、具体日主値はK-Naviを採用する。
generation: 5号機
systemType: A+ART / CZ（絶対領域）+ストック型ART（Platonic Time） / パンク回避 / 天井ART
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  setting1: 97.1%
  setting2: 98.9%
  setting3: 101.4%
  setting4: 104.4%
  setting5: 106.8%
  setting6: 110.5%
  status: INDUSTRY_DATABASE
  note: P-WORLD掲載系列。別定義の完全攻略値等は今回直接確認できず、異定義を混ぜない。

initialHitBySetting:
  big:
    setting1: 1/376.6
    setting2: 1/364.1
    setting3: 1/352.3
    setting4: 1/326.0
    setting5: 1/312.1
    setting6: 1/299.3
  reg:
    setting1: 1/376.6
    setting2: 1/364.1
    setting3: 1/352.3
    setting4: 1/341.3
    setting5: 1/341.3
    setting6: 1/341.3
  combined:
    setting1: 1/188.3
    setting2: 1/182.05
    setting3: 1/176.15
    setting4: 1/166.7373
    setting5: 1/163.0238
    setting6: 1/159.4616
  status: INDUSTRY_DATABASE
  note: P-WORLDの設定別BIG/REG/合算を採用。K-Naviにもボーナス出現率/機械割専用解析項目の存在を確認したが、今回本文数値を直接回収できなかったため無理に二重採用しない。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 初代2009年機について「1000円あたりゲーム数」「50枚あたり」「ベース」「コイン持ち」を機種名/型式名/メーカー名と組み替え、P-WORLD/K-Navi/当時業界/旧DB/後年回顧まで再探索したが、比較可能な直接数値を確定できず。2025年スマスロ復刻版の36.7G/50枚は別機なので流用しない。

netIncrease:
  platonicTime: 約+1.1枚/G
  status: INDUSTRY_CONTEMPORARY_AND_DATABASE_CROSSCHECKED

basicPayout:
  zettaiBonus: 約210枚
  battleBonus: 約51〜56枚
  status: INDUSTRY_DATABASE_WITH_ROUNDING_NOTE
  note: P-WORLD詳細表は絶対BONUS約210枚/BATTLE BONUS約51枚、同ページ機種情報要約はREG約56枚。払い出し終了条件は絶対BONUS324枚超、BATTLE BONUS69枚超。純増表現差を平均せず注記する。

modeSpecificMinimumData:
  - ボーナス後にCZ「絶対領域」へ移行し、小役入賞を契機にARTストック抽選。
  - ART「Platonic Time」は1Gあたり約+1.1枚。通常時以外でARTストック抽選が行われるWストック構造。
  - P-WORLDは通常時900G消化で天井ART突入を明記。
  - K-Naviは本機に「天井」「宵越アリ」「RT・ART」の属性を付与し、朝一専用攻略項目「朝イチは狙い目!?」の存在を確認。
  - 通常時の内部モードはK-Naviに専用解析項目の存在を確認したが、設定変更時の具体的モード振分は今回確定回収できず。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時に900G天井カウンタ、内部モード、ART/CZストックをリセット/引継ぎするかを2009年初代固有の直接本文で確定できず。2025年スマスロ復刻版のリセット仕様は別機のため流用しない。
  carryOverBehavior: 据え置き時はK-Naviが「宵越アリ」と明示しているため、少なくとも前日ゲーム数を利用した宵越し天井狙いが成立する機種として扱う。ただし内部モード/ARTストックまで全て引き継ぐとの直接記述は未回収。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみで900G天井カウンタ、内部モード、CZ/ART状態がどうなるかを初代固有資料で直接確定できず。
  gameCounterReset: SETTING_CHANGE_UNVERIFIED / CARRY_OVER_ON_UNCHANGED_CONFIRMED_AS_YOIGOSHI_AVAILABLE。K-Naviの「宵越アリ」は据え置き時の前日ゲーム数利用根拠として採用するが、設定変更時まで引継ぐとは解釈しない。
  ceilingAfterReset: 通常時天井は900GでART突入。設定変更時の短縮/起算変更はUNVERIFIED_AFTER_RESEARCH。
  modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時内部モードの存在は確認できるが設定変更後振分/朝一専用モードの直接数値を回収できず。
  stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/ARTストックや内部状態の設定変更時処理を確定できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: 据え置きなら宵越し天井狙いが可能。設定変更固有の朝一恩恵はNONE_CONFIRMED_AFTER_RESEARCH。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶開始ステージ、ゲーム数挙動等による本機固有の設定変更判別を十分再探索しても直接確定できず。
  numericResetData:
    normalCeiling: 通常時900G消化でART突入
    unchangedMorningCarryover: K-Navi「宵越アリ」
    resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
    resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL_BASE_GAMES_UNVERIFIED
resetBehaviorQA: COMPLETE_RESEARCH_PASS_YOIGOSHI_CONFIRMED_SETTING_CHANGE_POWER_CYCLE_MODE_STATE_AND_DETECTION_UNVERIFIED

conflicts:
  - BATTLE BONUS/REGの純増目安はP-WORLD詳細表約51枚と機種情報要約約56枚が同一ページ内で表記差。平均化せず両方保持。
  - 導入時期はK-Navi具体日2009-08-03、P-WORLD月表記2009-07、後年資料2009年8月発売。ホール導入の具体日主値はK-Naviとし、月単位の資料差は定義/粒度差として保持。

missingFields:
  - 初代2009年機の50枚あたりゲーム数/ベース
  - 設定変更時の900G天井カウンタのリセット/引継ぎ
  - 単純電源OFF→ON時の天井/内部状態/CZ・ARTストック
  - 設定変更後の内部モード/状態振分
  - ガックン/初期出目/液晶等による本機固有の変更判別
  - 設定変更専用の公開朝一当選率/恩恵率

sources:
  - url: https://p-kn.com/slot/1007/
    title: 絶対衝激～プラトニックハート～ / K-Navi
    retrievedAt: 2026-09-02
    confidence: OLD_MAJOR_ANALYSIS
    usedFor: 2009-08-03ホール導入、5号機ART/CZ概要、天井/宵越アリ属性、朝一・内部モード解析項目の存在。
  - url: https://www.p-world.co.jp/machine/database/5596
    title: 絶対衝激 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: 型式ゼッタイショウゲキA、検定9S0409、設定別BIG/REG/合算、機械割97.1〜110.5%、BIG約210枚/REG約51〜56枚、ART純増約1.1枚/G、通常時900G天井。
  - url: https://web-greenbelt.jp/00003160/
    title: 企業10社コラボによるパチスロがアリストから登場 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_CONTEMPORARY
    usedFor: 2009-06-24発表会、アリストクラート、ART「プラトニックタイム」純増約1.1枚/G、ボーナス後RT「絶対領域」、Wストック構造。
  - url: https://www.777town.net/explanation/slot_zettai.jsp
    title: パチスロ 絶対衝激～PLATONIC HEART～ / 777TOWN.net
    retrievedAt: 2026-09-02
    confidence: OFFICIAL_LICENSED_RETROSPECTIVE
    usedFor: 2009年発売の初代であること、ボーナス+ART構造の照合。
  - url: https://www.gamer.ne.jp/news/201301220033/
    title: パチスロ「絶対衝激II」リリース決定記念記事 / Gamer
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_MEDIA
    usedFor: 初代が2009年8月にアリストクラートより発売されたことの後年照合。

researchNotes:
  - 最新mainのREADME、ミッションv0.7、旧INDEX、LATEST_HANDOFF、393ガンダムIIIを再取得。LATEST_HANDOFFが393件地点であることを再確認して継続。
  - 2009-07-21同日群および2009-07-22〜31をALL7、K-Navi、当時業界/メーカー別資料で境界監査。ALL7の7/27群はパチンコのみで、追加できる未登録パチスロを今回確認できず7月を閉じた。
  - 2009年8月候補を具体導入日で再確認し、K-Naviで2009-08-03の「絶対衝激～プラトニックハート～」を最古の安全な未処理候補として確定。repo検索でも未登録を確認。
  - 「絶対衝激/絶対衝撃/PLATONIC HEART/ゼッタイショウゲキA/アリストクラート」と「機械割/BIG/REG/合算/50枚/1000円/ベース/天井/宵越し/設定変更/リセット/朝一/据え置き/電源OFF ON/モード/ガックン」を組み替えて再探索。
  - 2021年III、2025年スマスロ復刻、2025年IVが検索上大量に混入するため、初代2009年固有資料以外のresetBehavior/ベース値を流用しない。
