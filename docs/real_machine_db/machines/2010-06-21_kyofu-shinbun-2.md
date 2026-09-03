# 恐怖新聞～第二章～

machineName: 恐怖新聞～第二章～
manufacturer: アリストクラートテクノロジーズ
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-06-21
releaseDateStatus: CONFIRMED_EXACT_DATE_MULTI_SOURCE
releaseDateNote: K-Naviの発表会記事・機種ページ、パチビー2010年6月導入一覧が2010-06-21で一致。当時グリーンべるとは2010-06-20より納品と報道。物流開始とホール導入を分離し、時系列主値は2010-06-21。
generation: 5号機
systemType: ボーナス+押し順ART / ストックART / 無限ART / ART高確あり
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote
- 最新mainはrecordCount493 / chronologicalFrontier 2010-06-21「コード・ルージュ」。
- パチビー月間一覧の6/21同日群で未処理の「恐怖新聞～第二章～」を確認し494件目として追加。

## payoutRateBySetting
- 設定1: **96.9%**
- 設定2: **98.6%**
- 設定3: **100.6%**
- 設定4: **104.6%**
- 設定5: **107.7%**
- 設定6: **110.1%**

後年回顧資料2系統で同系列を確認。現存する当時パチマガのPAYOUT本文は検索インデックスから直接回収できなかったため信頼度はANALYSIS_SINGLE相当として保持し、推定しない。
confidence: ANALYSIS_SINGLE_RETROSPECTIVE_CORROBORATED

## initialHitBySetting
### 大除霊BONUS
- 設定1: **1/399.6**
- 設定2: **1/385.5**
- 設定3: **1/370.3**
- 設定4: **1/352.3**
- 設定5: **1/334.4**
- 設定6: **1/322.8**

### 除霊BONUS
- 設定1: **1/399.6**
- 設定2: **1/385.5**
- 設定3: **1/370.3**
- 設定4: **1/352.3**
- 設定5: **1/334.4**
- 設定6: **1/322.8**

P-WORLD掲載値。ART初当たりの設定別総合確率は今回の複数検索で比較可能な全設定表を確定できず、推定しない。
confidence: INDUSTRY_MACHINE_DB

## baseGamesPer50
- 設定1: **35.38G/1000円**
- 設定2: **35.39G/1000円**
- 設定3: **35.40G/1000円**
- 設定4: **35.42G/1000円**
- 設定5: **35.44G/1000円**
- 設定6: **35.44G/1000円**

当時パチマガスロマガ解析アーカイブ。
confidence: CONTEMPORARY_ANALYSIS_ARCHIVE

## netIncrease
- ART「配達TIME」: **約+1.1枚/G**
- 1セット: **30G**
- ストック型。ART中も上乗せ抽選あり。
- 「無限配達TIME」: **次回ボーナスまで継続**。
confidence: INDUSTRY_PRIMARY + MULTI_SOURCE

## basicPayout
- 大除霊BONUS: **約210枚**（288枚超払い出しで終了）
- 除霊BONUS: **約53枚**（72枚超払い出しで終了）

K-Navi/P-WORLD/パチマガスロマガで整合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時・ART中にART高確「ポルターガイストチャンス」あり。
- ボーナス後はART準備状態へ。準備中にロウソク8本を消灯できれば無限配達TIME。
- 通常時**1200G消化**で天井。天井到達時は次回ボーナスまで継続する無限ARTへ突入。
- K-Naviは「宵越アリ」を明示。

## resetBehavior — v0.7
settingChangeBehavior: **天井進捗は設定変更でもクリアされない**ことを複数の旧天井資料で確認。その他、ARTストック・ポルターガイスト高確・ART準備/潜伏状態の設定変更処理は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

carryOverBehavior: **天井ゲーム数は宵越し可能**。K-Naviが「宵越アリ」、旧天井DBも設定変更後でさえ天井到達までのG数がクリアされないとするため、少なくとも通常時1200G天井進捗は保持系。ARTストック/高確/準備状態の据え置き時処理は `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗・ARTストック・高確・初期画面/出目を直接区別した資料を確定できず。設定変更でも天井G数が保持されることから電源OFF→ONを推測補完しない。

gameCounterReset: **RETAIN / NOT_CLEARED_ON_SETTING_CHANGE**。通常状態1200G天井の進捗は設定変更後もクリアされない。

ceilingAfterReset: **1200Gのまま / 短縮なし確認**。リセット専用短縮天井は確認されず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ポルターガイスト高確の設定変更時振り分け/引継ぎは直接資料未確認。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ARTナビストック、無限ART、ART準備中ロウソク状態等の変更時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **宵越し天井狙いが成立し得る**。設定変更でも1200G天井進捗がクリアされないため、前日ハマリを引き継ぐ点が朝一客行動へ直接影響。

resetPenalties: **NONE_CONFIRMED_FOR_CEILING_PROGRESS**。天井進捗は設定変更で消えない。ARTストック/高確等の消失は直接根拠がなく断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「恐怖新聞第二章 / 恐怖新聞2 / アリストクラート」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ランプ」を組み替えて探索したが、本機固有の高信頼な変更判別要素は確定できず。

numericResetData:
- normalCeiling: **通常状態1200G**
- resetCounterHandling: **設定変更でもクリアされない**
- resetCeilingShortening: **NONE_CONFIRMED / 1200G維持**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AS_RATE**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: CEILING_1200G_AND_SETTING_CHANGE_COUNTER_CARRYOVER_CONFIRMED_OTHER_STATE_AND_DETECTION_PARTIAL

## conflicts
- 現時点で性能コアの主要採用値に平均化を要する明確な数値競合なし。
- 後年記事の一部にREG約72枚とする記述があるが、これは72枚超払い出し終了と実純増約53枚の混同と判断できるため、定義を分離して保持。

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- ART初当たり全設定表: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- ARTストック/高確/準備状態の設定変更・据え置き処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-03

1. グリーンべると 2010-05-20 — https://web-greenbelt.jp/00006575/ — 発表会、6/20納品、ART30G/+1.1枚、無限ART — reliability: INDUSTRY_PRIMARY
2. 娯楽産業 2010-05-13 — https://www.goraku-sangyo.com/%E3%82%A2%E3%83%AA%E3%82%B9%E3%83%88%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E6%81%90%E6%80%96%E6%96%B0%E8%81%9E%E7%AC%AC%E4%BA%8C%E7%AB%A0%E3%80%8D%E7%99%BA/ — ART30G/+1.1枚、ストック型 — reliability: INDUSTRY_PRIMARY
3. K-Navi「恐怖新聞 第二章」 — https://p-kn.com/slot/1219/ — 2010-06-21、天井/宵越アリ、ART30G/+1.1枚、獲得条件 — reliability: ANALYSIS_HIGH
4. K-Navi発表会 — https://p-kn.com/topics/exhibition/661/ — ホール導入6/21予定、ART仕様 — reliability: INDUSTRY_EVENT_REPORT
5. P-WORLD — https://www.p-world.co.jp/machine/database/5969 — ボーナス確率、約210/53枚、ART30G/+1.1枚、通常1200G天井→無限ART — reliability: INDUSTRY_MACHINE_DB
6. パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/42/a.php — ART30G/+1.1枚、約210/53枚 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
7. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/42/c.php — 1000円あたり35.38〜35.44G — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
8. パチスロ立ち回り講座 5号機天井DB — https://crankyseven.com/sp/tenjo-5ka.htm — 通常1200G、次回ボーナスまでART、設定変更後も天井G数クリアされない — reliability: OLD_ANALYSIS_DB
9. 5号機クロニクル アリストクラート一覧 — https://5goki.com/aristocrat — 機械割系列の回顧照合 — reliability: RETROSPECTIVE_SECONDARY
10. 恐怖新聞シリーズ機械割回顧 — https://www.marimo0925.net/pachislot-kyouhushinbun-kikaiwari-ranking-ban/ — 機械割96.9〜110.1% — reliability: RETROSPECTIVE_SECONDARY
