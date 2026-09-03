# リングにかけろ1 ～黄金の日本Jr.編～

machineName: リングにかけろ1 ～黄金の日本Jr.編～
manufacturer: タイヨーエレック
releaseDate: 2010-09-27
releaseDateStatus: EXACT_DAY_MULTI_SOURCE_CONFIRMED
releaseDateNote: K-Naviがホール導入開始2010年9月27日を明記。サミーネットワークス公式ニュースリリースも「実機販売と同日の9月27日」と明記する。
generation: 5号機
systemType: A+ART
formalModelName: リングにかけろ1黄金のJr.編ZR
formalModelNameStatus: PARTIAL_SECONDARY_PHYSICAL_MARKET_REFERENCE
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、511「沖楽」を再取得して開始。
- 同日群監査で2010-09-27導入の「茉莉花の剣」を512件目として追加後、本機もrepo検索で未登録を確認。
- K-Navi、サミーネットワークス公式、当時グリーンべるとの発売期情報を照合し、2010-09-27を採用。

## payoutRateBySetting

- 設定1: **97.35%**
- 設定2: **98.89%**
- 設定3: **101.41%**
- 設定4: **106.04%**
- 設定5: **112.00%**
- 設定6: **119.22%**

K-Navi公開値を主値とする。Cranky Sevenでは丸め値97.3/98.9/101.4/106.0/112.0/119.2%、2010年グリーンべるとは最高設定119.22%をメーカー発表値として報道。後年DBに96.5〜110.0%の別系列があるため平均せず競合として分離。
confidence: CONTEMPORARY_ANALYSIS_AND_INDUSTRY_HIGH

## initialHitBySetting

### BIG合成
- 設定1: **1/362.1**
- 設定2: **1/350.5**
- 設定3: **1/339.6**
- 設定4: **1/329.3**
- 設定5: **1/319.7**
- 設定6: **1/312.1**

### REG
- 設定1: **1/704.7**
- 設定2: **1/675.6**
- 設定3: **1/655.4**
- 設定4: **1/630.2**
- 設定5: **1/606.8**
- 設定6: **1/590.4**

### ボーナス合算
- 設定1: **1/239.2**
- 設定2: **1/230.8**
- 設定3: **1/223.7**
- 設定4: **1/216.3**
- 設定5: **1/209.4**
- 設定6: **1/204.2**

### NEXT ART突入率
- 設定1: **1/2341.0**
- 設定2: **1/2281.3**
- 設定3: **1/2140.8**
- 設定4: **1/1943.1**
- 設定5: **1/1470.7**
- 設定6: **1/1129.9**

confidence: ANALYSIS_HIGH

## baseGamesPer50

**約34.0G/50枚**

Cranky Sevenが1000円あたり約34.0Gと直接記載。後年みんスロも34Gで一致。一次/当時業界資料での同値確認は未回収のため信頼度はMEDIUM_HIGHに留める。
confidence: ANALYSIS_SECONDARY_MULTI_SOURCE_MEDIUM_HIGH

## netIncrease

ART「ブーメランRUSH」: **約+1.0枚/G**

- 1セット **30G+α**
- 完全押し順ナビART
- ストック方式＋継続率方式＋ゲーム数上乗せ
- 継続率は **33 / 50 / 66 / 75 / 80 / 90 / 95%** の7段階
- 「NEXT ART」は次回ボーナスまで継続する無限ART

K-Navi、当時解析ブログ、Cranky Sevenで整合。
confidence: CONTEMPORARY_ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- 同色BIG: **約300枚**
- 異色BIG: **約200枚**
- REG: **約60枚**

confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常状態は**64G周期**。CZ/内部RT中の5択ベル不正解後に通常へ移行し、64G消化後に周期CZへ。
- 周期CZ突入契機: **ボーナス後 / 通常時64G消化後 / 設定変更後**。
- 通常時から当選するARTはNEXT ART（無限ART）。
- 天井は単純固定G数ではなく**周期回数管理**。菊姉パネルステージを15回連続で外すと、次回（16回目）のチャンス演出でNEXT ART確定。
- 実G数目安はボーナス後またはART後**約1150G**。
confidence: CONTEMPORARY_ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL_NUMERIC_STRUCTURE**。設定変更後は**周期CZへ直接突入**。さらに天井到達までの周期回数は**クリア**され、NEXT ART抽選テーブルは**再抽選**される。液晶グローブもクリア。

carryOverBehavior: **PARTIAL / SETTING_CHANGE_CONTRAST_INFERRED_BUT_DIRECT_STATIONARY_RULE_INCOMPLETE**。設定変更時に周期回数がクリアされることは直接確認済みだが、「据え置きなら天井周期回数を必ず保持」とする本機固有の直接文を今回回収できていないため、retainを断定しない。液晶グローブについても据え置き+電源継続時は通常進行と考えられるが、QA値は直接資料のみで扱う。

powerCycleBehavior: **PARTIAL_CONFIRMED**。単純電源OFF→ONだけでも**液晶上のグローブはクリア**される。天井周期回数、NEXT ART抽選テーブル、ARTストック/内部RT状態が電源OFF→ONだけでclear/retainされるかは直接資料未回収。

gameCounterReset: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**。天井管理の「周期回数」が設定変更でクリアされる。

ceilingAfterReset: **NORMAL_STRUCTURE_RESTART_CONFIRMED / RESET_DEDICATED_SHORTENING_NONE_CONFIRMED**。変更後は周期回数0から再開するため、通常天井の16回目確定構造を最初から積み直す。設定変更専用の短縮天井数値は確認できない。

modeAfterReset: **NEXT_ART_TABLE_RESELECT_CONFIRMED / DISTRIBUTION_PARTIAL**。NEXT ART抽選テーブルが設定変更時に再抽選される。ボーナス後テーブルA/B振り分け値は解析されているが、設定変更直後専用振り分け値は今回直接確定できず。

stateAfterReset: **CZ_ENTRY_CONFIRMED / OTHER_STATES_PARTIAL**。設定変更後は周期CZへ直接突入。ARTストック、AT/内部RT状態の設定変更時処理は今回直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **CONFIRMED_CZ_START / TABLE_RESELECT_POTENTIAL**。設定変更直後に周期CZから開始する。ただしCZ突入自体を即ART恩恵と誤解しない。NEXT ART抽選テーブル再抽選により期待を持てる旨の解析記述はあるが、設定変更専用の設定別期待値は未確認。

resetPenalties: **CONFIRMED_CEILING_PROGRESS_LOSS**。天井周期回数は変更でクリアされるため、据え置きで進んでいた場合の天井進捗は失われる。液晶グローブも消去。

resetDetection: **PARTIAL_INDICATIVE_NOT_CERTAIN**。朝一が周期CZ状態で始まることは変更後挙動として利用可能だが、ボーナス後等もCZ突入契機のため単独で変更確定とはしない。液晶グローブは電源OFF→ONだけでも消えるため、グローブ消去を設定変更判別には使えない。ガックン確率は未確認。

numericResetData:
- normalCycleLength: **64G**
- ceilingMissCount: **15回連続ハズレ**
- forcedNextArtAtCycle: **次回=16回目のチャンス演出**
- approximateCeilingGames: **約1150G（ボーナス後/ART後目安）**
- settingChangeCeilingProgress: **CLEAR**
- settingChangeInitialState: **周期CZ**
- settingChangeNextArtTable: **RESELECT**
- powerCycleVisibleGloves: **CLEAR**
- resetDedicatedCeiling: **NONE_CONFIRMED**
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: MAJOR_RESET_CHARACTERISTICS_CONFIRMED / CARRYOVER_AND_POWER_CYCLE_INTERNALS_PARTIAL

## conflicts

- 機械割: K-Navi当時値 **97.35〜119.22%**、Cranky Seven丸め値 **97.3〜119.2%**、当時グリーンべると最高設定 **119.22%** が整合。一方、後年みんスロは **96.5〜110.0%**。メーカー発表時の当時資料と解析サイトが119.22%で一致するため当時系列を主値とし、後年系列は定義/転記差の可能性として平均しない。
- 天井: 後年DBの単純「1150G天井」表現だけでは実際の周期構造を落とすため、DBでは**15周期連続失敗→次周期NEXT ART確定、約1150G目安**として保持。

## missingFields

- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更直後のNEXT ARTテーブル専用振り分け: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の周期回数/内部状態の直接保持記述: UNVERIFIED_AFTER_RESEARCH
- 電源OFF→ON時の天井周期回数/抽選テーブル/ARTストック/内部RT: UNVERIFIED_AFTER_RESEARCH
- gakkunExactProbability: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi「リングにかけろ1 ～黄金の日本Jr.編～」 — 導入日、ボーナス合算、機械割、ART概要、攻略索引
   - https://p-kn.com/slot/1261/
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
2. Cranky Seven「リングにかけろ1 ～黄金の日本Jr.編～」 — 50枚ベース、BIG/REG、機械割、周期天井、設定変更時の周期クリア/テーブル再抽選、電源OFF→ONで液晶グローブクリア
   - https://crankyseven.com/sp/ringnikakero-ougon-pc.htm
   - confidence: HISTORICAL_ANALYSIS_HIGH
3. 侍～samurai～777（2010-10-06） — 64G周期、設定変更後CZ、ART仕様、NEXT ART突入率
   - https://ameblo.jp/samurai777net/entry-10669262756.html
   - confidence: CONTEMPORARY_ANALYSIS_ARCHIVE_MEDIUM_HIGH
4. グリーンべると（2010-07-27） — メーカー発表会、最高設定出玉率119.22%
   - https://web-greenbelt.jp/00002723/
   - confidence: CONTEMPORARY_INDUSTRY_HIGH
5. サミーネットワークス公式ニュースリリース（2010-09-27） — 実機販売と同日の9月27日にアプリ配信
   - https://www.sammy-net.jp/news/pachisloringnikakero0927.pdf
   - confidence: OFFICIAL_HIGH
6. パチマガスロマガ公式アーカイブ — 通常時小役確率等の解析補助
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/08/c.php
   - confidence: HISTORICAL_ANALYSIS_HIGH
7. みんスロ — 34G、1150G等の後年参照。ただし機械割系列が当時資料と競合するため性能主値には不採用
   - https://minslo.com/リングにかけろ1～黄金の日本jr-編～/
   - confidence: RETROSPECTIVE_PARTIAL

## sourceResearchNote

- resetBehavior: 「設定変更」「周期CZ」「64G」「天井」「電源ON/OFF」「朝一」「据え置き」「NEXT ART テーブル」「グローブ」を組み替え、当時解析ブログ、K-Navi索引、Cranky Seven、パチマガスロマガを横断。変更後CZ、天井周期clear、テーブル再抽選、電源OFF→ONで可視グローブclearまで回収。
- 性能: K-Navi、Cranky Seven、グリーンべるとを主軸に照合。後年DBの機械割96.5〜110.0%は当時メーカー発表119.22%と重大競合するため平均しない。
- 実機完全再現用の細かな周期テーブル内部抽選は本DB用途外として採取を打ち切り、物差し/朝一挙動に必要な構造のみ保持。
