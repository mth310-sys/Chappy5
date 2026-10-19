# いみそ～れ2ピュアエディション25

machineName: いみそ～れ2ピュアエディション25
manufacturer: エマ
releaseDate: 2008-12-08
releaseDatePrecision: DAY_CONFIRMED_INDUSTRY_SCHEDULE
modelName: いみそ～れ2 PureEdition25 プレミアムビスカスパネル
modelNumber: イミソーレ2H
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
identityStatus: TITLE_MANUFACTURER_MODEL_CONFIRMED_25PHI_VARIANT
manufacturerNote: 2008年10月23日のエマ発表会で、5号機『いみそ～れ2』シリーズはRT搭載バーニング・エディションと、RT非搭載ピュア・エディションを用意したことを当時業界記事で確認。P-WORLDで25Φピュア版の型式名「イミソーレ2H」とプレミアムビスカスパネル25を確認。ALL7当時導入予定一覧では2008-12-08導入予定。30Φピュア版およびバーニング版とは混同せず独立レコード化。
generation: 5号機
systemType: ノーマル / 完全告知 / ボーナス主体（RT非搭載ピュア・エディション）
settings: 1 / 2 / 3 / 4 / 5 / 6

payoutRateBySetting:
  pWorld:
    setting1: 96.7%
    setting2: 98.4%
    setting3: 100.7%
    setting4: 104.4%
    setting5: 107.7%
    setting6: 112.0%
  pachimagaSimulation:
    setting1: 96.92%
    setting2: 98.54%
    setting3: 100.74%
    setting4: 104.64%
    setting5: 107.75%
    setting6: 111.55%
  pacnk:
    setting1: 96.70%
    setting2: 98.40%
    setting3: 100.70%
    setting4: 104.40%
    setting5: 107.60%
    setting6: 112.00%
  status: CONFLICT
  note: P-WORLDとpacnkは概ね一致するが設定5に107.7/107.6の差、パチマガスロマガのシミュレート値は全設定で小差がある。平均化せず各系列を保持。

initialHitBySetting:
  big:
    setting1: 1/318.1
    setting2: 1/309.1
    setting3: 1/297.9
    setting4: 1/277.7
    setting5: 1/264.3
    setting6: 1/248.2
  reg:
    setting1: 1/337.8
    setting2: 1/327.7
    setting3: 1/321.3
    setting4: 1/297.9
    setting5: 1/282.5
    setting6: 1/262.1
  combined:
    setting1: 1/163.8
    setting2: 1/159.1
    setting3: 1/154.6
    setting4: 1/143.7
    setting5: 1/136.5
    setting6: 1/127.5
  status: ANALYSIS_HIGH_MULTIPLE_SOURCES
  note: P-WORLD、パチマガスロマガ、pacnkで設定別BIG/REGが一致。合算はP-WORLD/パチマガで一致。

baseGamesPer50:
  value: UNVERIFIED_AFTER_RESEARCH
  status: UNVERIFIED
  note: 「50枚」「1000円」「ベース」「コイン持ち」「千円あたり」と機種名/型式名/メーカーを組み替えて再探索したが、比較可能な25Φピュア版固有値を確定できず。

basicPayout:
  big:
    regulatedEnd: 345枚を超える払い出しで終了
    netCoins: 約312枚
  reg:
    regulatedEnd: 105枚を超える払い出しで終了
    netCoins: 約104枚
  status: ANALYSIS_HIGH
  note: パチマガスロマガの基本システム掲載値。規定払い出しと純増枚数を定義分離して保存。

netIncrease:
  value: NOT_APPLICABLE
  note: ピュア・エディションはRT非搭載のノーマル機。バーニング・エディションの「ネオクラッシュモード」純増/継続仕様は流用しない。

modeSpecificMinimumData:
  bonusType: BIG + REG
  rt: NOT_APPLICABLE_PURE_EDITION
  art: NOT_APPLICABLE
  at: NOT_APPLICABLE
  cz: NOT_APPLICABLE
  ceiling: NONE_CONFIRMED_AFTER_RESEARCH
  note: エマ発表時の業界記事でピュア・エディションはネオクラッシュモード非搭載。pacnkは本25Φピュア版の天井非搭載を明記。

resetBehavior:
  settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。機種名表記揺れ（いみそ～れ2/いみそーれ2/イミソーレ2H/PureEdition25/プレミアムビスカス）、エマと「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「初期出目」を組み替え、P-WORLD、パチマガスロマガ、pacnk、当時業界記事、後年DBを横断したが、本機固有の設定変更時初期出目・告知状態等を直接確定できず。
  carryOverBehavior: NO_GAME_COUNT_CEILING_OR_MODE_TO_CARRY_CONFIRMED。天井・RT・ART・AT・CZ・通常時モードを持つ資料は確認されず、朝一狙いに影響する持越し要素は確認できない。ボーナス成立状態など実機内部の細部は本DB対象外かつ直接資料なし。
  powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合の初期出目/表示/成立状態等、本機固有の直接資料は回収できず。
  gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING。通常ゲーム数到達型天井は非搭載。
  ceilingAfterReset: NOT_APPLICABLE_NO_CEILING
  modeAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用モード、設定変更時モード再抽選、通常時モードシステムは確認できず。
  stateAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。ホール経営/朝一客行動へ影響する通常時内部状態の設定変更処理は確認できず。
  advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
  resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。リセット短縮天井、朝一高確、専用CZ等は確認できず。
  resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
  resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示変化等による本機固有の変更判別情報を回収できず。
  numericResetData:
    resetSpecificCeiling: NOT_APPLICABLE
    resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
    morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
    resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: PARTIAL
resetBehaviorQA: RESET_FIELDS_RESEARCHED_NORMAL_NO_CEILING_SPECIFIC_POWER_AND_DETECTION_UNVERIFIED

conflicts:
  - 機械割: P-WORLD 96.7/98.4/100.7/104.4/107.7/112.0%、pacnk 96.7/98.4/100.7/104.4/107.6/112.0%、パチマガスロマガのシミュレート96.92/98.54/100.74/104.64/107.75/111.55%。定義/丸め差の可能性はあるが平均化しない。

missingFields:
  - 50枚あたりゲーム数/ベース
  - 検定番号
  - 設定変更/電源OFF→ON時の本機固有初期化挙動
  - ガックン/初期出目等の変更判別情報

sources:
  - url: https://www.all7.jp/plans/index/2008/12/10
    title: 2008年12月 新台導入予定一覧 / ALL7.jp
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_SCHEDULE
    usedFor: いみそ～れ2 ピュアエディション プレミアムビスカスの2008-12-08導入予定、メーカー=エマ。
  - url: https://web-greenbelt.jp/00003852/
    title: 沖スロの定番『いみそ〜れ』が5号機で復活 / グリーンべると
    retrievedAt: 2026-09-02
    confidence: INDUSTRY
    usedFor: 2008-10-23発表、5号機、ピュア/バーニングの仕様分離、ピュアはネオクラッシュモード非搭載、25Φ/30Φピュア版の存在。
  - url: https://www.p-world.co.jp/machine/database/5374
    title: いみそ～れ2ピュアエディション25 / P-WORLD
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_DATABASE
    usedFor: パチスロ種別、型式イミソーレ2H、プレミアムビスカス25、設定別BIG/REG/合算、機械割。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/a.php
    title: いみそ～れ2ピュアエディション 基本システム / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 完全告知/ノーマル/同時成立、BIG345枚払い出し・約312枚純増、REG105枚払い出し・約104枚純増。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/h.php
    title: いみそ～れ2ピュアエディション ボーナス確率 / パチマガスロマガ
    retrievedAt: 2026-09-02
    confidence: ANALYSIS_HIGH
    usedFor: 設定別BIG/REG/合算およびシミュレートPAYOUT。
  - url: https://pacnk.com/slot/tools/sh_imisore2pyuaed2008b.html
    title: いみそ～れ2ピュアエディション25 設定判別ツール
    retrievedAt: 2026-09-02
    confidence: RETROSPECTIVE_DATABASE
    usedFor: 設定別BIG/REG/機械割の照合、天井非搭載、ノーマル機としての補助確認。
  - url: https://p-mans.blogspot.com/2008/10/
    title: エマが「いみそ～れ2」を発表 / Pマンズ（プレイグラフ転載）
    retrievedAt: 2026-09-02
    confidence: INDUSTRY_ARCHIVE
    usedFor: ピュア/バーニング2タイプ、ピュアは高合成確率型、バーニングのみネオクラッシュモード搭載の補助確認。
