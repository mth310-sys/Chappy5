# ドラゴンギャル ～ルーと伝説の黄金龍～

machineName: ドラゴンギャル ～ルーと伝説の黄金龍～
manufacturer: SNKプレイモア
formalModelName: ドラゴンギャル2C
inspectionNumber: 0S1373
releaseDate: 2011-05-06
releaseDateStatus: HALL_INTRODUCTION_EXACT_DATE_ANALYSIS_DATABASE_SINGLE

generation: 5号機
systemType: ART特化 / ボーナス非搭載 / 2種ART
coreStatus: COMPLETE_CORE_EXCEPT_BASE_RESET_POWER_CYCLE_PARTIAL

## chronologyNote

- 最新mainの568件目「メーメーパラダイス」（2011-04-24）を正本として引継ぎ。
- 4/24同日群を再監査し、4/25〜5/5の近接候補を当時業界記事・機種DB・月次資料で確認。具体的ホール導入日を確認できた次の未登録機として本機を採用。
- HAZUSE DATAが導入開始日を2011-05-06と明記。グリーンべるとは2011-04-22時点で新機種発表、Pマンズ/プレイグラフ転載は2011-04-26時点で発売開始を報道するため、発売発表日とホール導入日を分離し、時系列キーはHAZUSEのホール導入開始日を採用。

## payoutRateBySetting

### パチマガスロマガ
- 設定1: **96.8%**
- 設定2: **98.6%**
- 設定3: **100.2%**
- 設定4: **105.3%**
- 設定5: **110.0%**
- 設定6: **113.1%**

confidence: ANALYSIS_HIGH

### HAZUSE掲載値
- 設定1: **97%**
- 設定2: **99%**
- 設定3: **100%**
- 設定4: **105%**
- 設定5: **110%**
- 設定6: **110%**

設定1〜5は丸めで説明可能な範囲だが、設定6はパチマガスロマガ113.1%とHAZUSE110%で差が大きい。平均せず **CONFLICT** として双方を保持する。

## initialHitBySetting

### ART初当たり（闘BONUS＋天BONUS合成）
- 設定1: **1/215.2**
- 設定2: **1/206.2**
- 設定3: **1/197.6**
- 設定4: **1/186.4**
- 設定5: **1/176.2**
- 設定6: **1/127.9**

パチマガスロマガとA-SLOT掲載表で全設定一致。グリーンべるとも端値を約1/215（設定1）〜約1/127（設定6）と報道。
confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_INDUSTRY_ENDPOINTS

### ART種別
P-WORLD掲載値では闘BONUS・天BONUSは各同率で、設定1 1/430.4、設定2 1/412.4、設定3 1/395.2、設定4 1/372.8、設定5 1/352.4、設定6 1/255.8。

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「ドラゴンギャル ～ルーと伝説の黄金龍～ / ドラゴンギャル2 / ドラゴンギャル2C / SNKプレイモア」と「50枚 / 1000円 / 1k / ベース / コイン持ち / 回転数」を組み替えて再探索。パチマガスロマガの本機専用ページにも「1000円あたりのゲーム数 現在調査中」と残っており、比較可能な直接値を確定できず。後継2015年機の59G/1000円は別スペックのため流用しない。

## netIncrease

- 闘BONUS: **約+2.0枚/G**
- 天BONUS: **約+2.0枚/G**

グリーンべると、P-WORLD、パチマガスロマガで一致。
confidence: INDUSTRY_HIGH_CROSSCHECKED

## basicPayout

ボーナス非搭載のため固定ボーナス獲得枚数はNOT_APPLICABLE。

- 闘BONUS: **1セット30G**。初回継続率50%、2セット目以降80% / 85% / 90% / 95%のいずれか。セットストックもあり。
- 天BONUS: **1セット50G+α**。ゲーム数上乗せ＋セットストック型。1回の上乗せ最大300G。

## modeSpecificMinimumData

- ART特化型で、通常ボーナスは非搭載。
- 第1天井: **ART間1000G**到達後、チャンス役成立時の**1/2**でART抽選。
- 第2天井: **ART間1100G**到達でART確定。闘BONUSなら**95%ループ**、天BONUSなら**5セット以上**が確定。
- 通常時には通常 / 高確 / 超高確の状態が存在し、朝一設定変更時にも状態再抽選が行われる公開情報あり。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。現存する本機名指定の当時コミュニティ転載情報では、設定変更時に状態振り分け抽選を行い、天井到達までのゲーム数をクリアするとされる。液晶背景・同行者は変化しないとの記録もある。解析サイトの本機ページに「朝イチ・設定変更」専用項目が存在することも確認。ただし現存本文を直接取得できなかったため、設定変更詳細の確信度は単一二次資料相当として扱う。

carryOverBehavior: **PARTIAL_AFTER_RESEARCH**。設定変更時に天井クリアする情報は確認できたが、据え置き時のART間ゲーム数・通常/高確/超高確状態・前兆等を一括して「全て引継ぎ」と断定できる本機固有の直接解析本文は今回確定できず。一般的5号機挙動から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ONのみでのART間ゲーム数・状態・液晶背景/同行者の扱いを、本機固有の直接資料では確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE — ANALYSIS_SINGLE_LOW_CONFIDENCE**。設定変更で天井到達までのゲーム数をクリアするとの本機名指定資料あり。

ceilingAfterReset: **NO_SHORTENED_CEILING_CONFIRMED**。設定変更専用の短縮天井は確認されない。通常天井はART間1000G/1100Gの二段階。

modeAfterReset: **STATE_RESELECT_CONFIRMED_SINGLE_SOURCE**。設定変更時は通常/高確/超高確を振り分け。長期ゲーム数解除モードの再抽選構造は確認されない。

stateAfterReset: **RESELECT — NUMERIC_TABLE_AVAILABLE_SINGLE_SOURCE**。
- 設定1: 通常70.00% / 高確25.00% / 超高確5.00%
- 設定2: 通常62.50% / 高確30.00% / 超高確7.50%
- 設定3: 通常55.00% / 高確35.00% / 超高確10.00%
- 設定4: 通常47.50% / 高確40.00% / 超高確12.50%
- 設定5: 通常40.00% / 高確45.00% / 超高確15.00%
- 設定6: 通常32.50% / 高確50.00% / 超高確17.50%
この数値は「ART終了後・設定変更時モード移行率」として現存するコミュニティ転載資料で確認。設定4以上は高確以上合計52.5%以上、設定6は67.5%。数値は有用だが一次解析本文未回収のため過信しない。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **HIGH_STATE_START_CHANCE**。設定変更後は設定に応じて高確/超高確スタートがあり、朝一ART当選契機へ影響し得る。設定1でも高確以上30.0%、設定6は67.5%（単一二次資料）。

resetPenalties: **CEILING_PROGRESS_LOST**。設定変更により前日のART間天井進捗を失うとする資料あり。

resetDetection: **PARTIAL**。設定変更後も液晶背景・同行者は変化しないとの資料があり、少なくともこれらは単純な変更判別材料にならない。ガックン・初期出目・リール挙動による本機固有の変更判別は、検索語・資料系統を変えても確定できず **UNVERIFIED_AFTER_RESEARCH**。

numericResetData:
- 設定変更時通常/高確/超高確振り分け: 上記6設定テーブル
- 設定変更時天井カウンタ: **CLEAR**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 高確以上スタート率: 設定1 **30.0%** / 設定2 **37.5%** / 設定3 **45.0%** / 設定4 **52.5%** / 設定5 **60.0%** / 設定6 **67.5%**（単一二次資料から合算）

resetBehaviorConfidence: **ANALYSIS_SINGLE_LOW_FOR_SETTING_CHANGE_NUMERICS / UNVERIFIED_FOR_POWER_CYCLE_AND_GAKKUN**

## conflicts

1. 機械割の設定6:
   - パチマガスロマガ: **113.1%**
   - HAZUSE: **110%**
   - 平均せずCONFLICT。設定1〜5は丸め差として併記。
2. HAZUSEのART初当たり表は設定6を1/176.2と表示する一方、パチマガスロマガ・A-SLOTは**1/127.9**、グリーンべると業界記事も設定6端値を約1/127と報道。主値はクロスチェックできる1/127.9とし、HAZUSE設定6表示はCONFLICT/掲載異常候補として残す。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior exact details: **PARTIAL_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection gakkun/reel behavior: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

欠損判定前に「ドラゴンギャル ～ルーと伝説の黄金龍～ / ドラゴンギャル2 / ドラゴンギャル2C / 龍娘 / SNKプレイモア / 0S1373」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井短縮 / モード / 状態 / ガックン / 50枚 / 1000円 / ベース / コイン持ち」を組み替え、グリーンべると、P-WORLD、HAZUSE、パチマガスロマガ、A-SLOT、当時コミュニティ保存資料、後年回顧資料を横断。後継「修羅の野望」「双龍の闘い」のreset/ベース値は本機へ流用していない。

## sources — 取得日 2026-09-04

1. グリーンべると「2種類のARTで奥深いゲーム性を実現」
   - https://web-greenbelt.jp/00001976/
   - 2011-04-22、型式ドラゴンギャル2C、ART特化、純増約2.0枚/G、ART合成端値、闘/天BONUS基本性能
   - confidence: INDUSTRY
2. HAZUSE「ドラゴンギャル ～ルーと伝説の黄金龍～」
   - https://hazuse.com/machine/pachislot/0S1373/
   - 導入開始日2011-05-06、型式/検定番号、ART/機械割掲載値、天井概要
   - confidence: ANALYSIS_DATABASE
3. HAZUSE DATA
   - https://data.hazuse.com/?genre=202&machine_code=0S1373
   - 導入開始日2011-05-06の別現存経路
   - confidence: ANALYSIS_DATABASE
4. P-WORLD「ドラゴンギャル～ルーと伝説の黄金龍～」
   - https://www.p-world.co.jp/machine/database/6344
   - ART種別確率、純増、30G/50G+α、ART間1000G/1100G二段階天井と恩恵
   - confidence: INDUSTRY_DATABASE
5. パチマガスロマガ「ART確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/34/h.php
   - ART初当たり全設定、機械割全設定
   - confidence: ANALYSIS_HIGH
6. パチマガスロマガ「基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/34/a.php
   - ART特化、純増、セットG数
   - confidence: ANALYSIS_HIGH
7. パチマガスロマガ「1000円あたりのゲーム数」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/34/c.php
   - 本機ベースが「現在調査中」であることを確認
   - confidence: ANALYSIS_HIGH_FOR_MISSING_STATE
8. パチマガスロマガ 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/34/snk_slot_34.php
   - 本機に「朝イチ・設定変更」専用解析項目が存在することを確認。現存本文は今回直接取得できず
   - confidence: ANALYSIS_HIGH_FOR_SECTION_EXISTENCE
9. mixi「朝イチから打つなら - パチスロ総合研究所」
   - https://mixi.jp/view_bbs.pl?comm_id=5988268&id=69535193
   - 本機名指定で設定変更時の天井クリア、状態再抽選、液晶背景/同行者不変、設定別通常/高確/超高確振り分けを転載
   - confidence: ANALYSIS_SINGLE_LOW / COMMUNITY_SECONDARY
10. A-SLOT 中古実機ページ
   - https://www.a-slot.com/SHOP/snk29.html
   - ART初当たり全設定を別系統で照合
   - confidence: SECONDARY_CROSSCHECK
11. Pマンズ / プレイグラフ転載 2011年4月
   - https://p-mans.blogspot.com/2011/04/
   - 2011-04-26時点で発売開始との当時記録。ホール導入日とは分離
   - confidence: INDUSTRY_ARCHIVE_REPRINT

## status

- recordNumber: **569**
- chronologicalFrontier: **2011-05-06**
- relayStatus: **READY_TO_CONTINUE**
