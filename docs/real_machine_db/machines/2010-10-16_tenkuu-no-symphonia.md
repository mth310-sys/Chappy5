# 天空のシンフォニア

machineName: 天空のシンフォニア
manufacturer: コルモ
releaseDate: 2010-10-16
releaseDateStatus: NATIONWIDE_INTRODUCTION_DATE_WITH_CONFLICTING_EARLIER_DATE
releaseDateNote: K-Naviは全国一斉導入開始日2010-10-16。パチビーは2010-10-04。グリーンべると2010-08-24発表時点ではAPECに伴う入替自粛により地域ごとに納品時期が異なると明記しているため、全国一斉導入基準を主値とし、地域先行/別定義日をCONFLICT保持する。
generation: 5号機
systemType: ART専用機（ボーナス非搭載 / セット数ストック型ART）
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線実レコードを再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFFの recordCount 519 / chronologicalFrontier 2010-10-04 を進捗正本として使用。
- K-Navi 2010年10月導入カレンダーでは10月4日群の次のパチスロ節点が2010-10-16本機で、10月5〜15日に別パチスロ掲載なし。
- パチビーには2010-10-04導入表記があるため、地域先行/集計基準差をCONFLICTとして保持し、重複追加は行わない。

## payoutRateBySetting

本機は設定1 / 2 / 5 / 6の4段階設定。

後年の実戦回顧資料で確認できた系列:
- 設定1: **97.0%**
- 設定2: **99.0%**
- 設定5: **110.0%**
- 設定6: **119.0%**

設定6の119.0%はPachiSevenの5号機高機械割回顧ランキングでも一致。設定1/2/5の精密値については今回別系統の直接表を確定できず、主系列はANALYSIS_SINGLEとして保持する。
confidence: ANALYSIS_SINGLE_FOR_FULL_TABLE / MULTI_SOURCE_FOR_SETTING6

## initialHitBySetting

### ART初当たり
- 設定1: **1/146**
- 設定2: **1/137**
- 設定5: **1/116**
- 設定6: **1/103**

パチマガスロマガ、P-WORLD、当時業界記事/グリーンべるとで端点を含め整合。設定1/2/5/6の4段階設定であることも複数資料で確認。
confidence: MULTI_SOURCE_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「天空のシンフォニア / コルモ / 50枚 / 1000円 / ベース / コイン持ち / 千円G数」を組み替え、当時実戦記・P-WORLD・K-Navi・パチマガスロマガ・回顧資料を再探索。
- 当時実戦記に「コイン持ちは若干悪く感じる」との定性的記述はあるが、比較可能なG/50枚の直接値を確定できなかったため推定しない。
confidence: UNVERIFIED

## netIncrease

- ART「封印モード」: **1セット30G**
- 純増: **約+2.0枚/G**
- 1セット獲得目安: **約60枚**
- 継続はセット数ストック管理。1回の抽選契機で最大25セット獲得の可能性あり。
confidence: INDUSTRY_HIGH / MULTI_SOURCE_HIGH

## basicPayout

- ボーナス非搭載。
- ART「封印モード」1セット30Gで **約60枚**。
confidence: MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時のベル、魔法陣・水晶、リプレイ3〜4連等でART/モード移行抽選。
- ART当選時は最大32Gの前兆を経てCZ「天空チャンス」へ移行し、ナビに従い7図柄または魔法陣を揃えてART開始。
- K-Naviは本前兆時、規定32G消化後にCZ経由でART突入と説明。
- 天井: **ART終了後999G消化で超高確状態へ移行**。P-WORLDで直接確認。
- K-Naviにも強力な天井機能掲載あり。
confidence: MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL / UNVERIFIED_DETAILS_AFTER_RESEARCH**。K-Naviには本機固有の攻略項目「モード移行(ART・設定変更)」、パチマガスロマガにも「設定変更」専用項目が現存し、設定変更時に通常時と別扱いのモード移行解析が存在したこと自体は確認できる。しかし今回取得経路では具体的な振り分け本文/数値を回収できず、検索語・資料系統を変えても信頼できる再掲値を確定できなかったため、モード再抽選内容を推測で埋めない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のART間999Gカウンタ、通常/高確/超高確モード、ARTストックの保持を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合のART間999Gカウンタ、モード、ストック、前兆/CZ状態の保持・初期化を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。ART終了後999Gで超高確という通常天井は確定。ただし初代2010年版について設定変更時にこの999GカウンタがCLEAR/RETAINのどちらかを直接明記した高信頼資料を確定できなかった。2012年続編「光を求めて」の901G・設定変更リセット情報は別機種のため転記しない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH / STANDARD_COUNTER_BEHAVIOR_UNVERIFIED**。初代専用の短縮天井や変更後専用G数は確認できず。通常天井999G自体は確認済み。

modeAfterReset: **PARTIAL / NUMERIC_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。K-Naviに設定変更時のモード移行解析項目が存在するが、具体的振り分け値を今回取得できず。一般的ART機挙動から補完しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確/超高確および前兆/CZ/ARTストック状態の変更時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一ART確定、公開当選率など比較可能な恩恵数値を確定できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。公開された設定変更固有の主要不利数値を確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ランプ、ゲーム数挙動等による本機固有の変更/据え置き判別を直接確定できず。

numericResetData:
- standardARTCeiling: **999G after ART end -> super-high state**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- publishedResetModeDistribution: **SOURCE_SECTION_EXISTS_BUT_VALUES_UNVERIFIED_AFTER_RESEARCH**
- morningARTProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- 導入日: K-Navi全国一斉導入 **2010-10-16** / パチビー **2010-10-04**。グリーンべると発表時点で地域ごとに納品時期が異なる旨があるため、全国一斉導入基準を主値とし別日をCONFLICT保持。
- 設定変更情報の検索では2012年「天空のシンフォニア～光を求めて～」が多数混入。同機の901G天井・設定変更リセット情報は別機種なので初代へ転記しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- formalModelName / inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange時の具体的モード振り分け: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset / carryOverBehavior / powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- 公開朝一数値: UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. グリーンべると 2010-08-24「ART性能を追求した専用マシンが登場」 — コルモ発表、ART専用、30G、純増約2枚/G、最大25セット、設定4段階、ART初当たり設定1 1/146〜設定6 1/103、地域別納品
   - https://web-greenbelt.jp/00006635/
   - confidence: INDUSTRY
2. K-Navi「天空のシンフォニア」 — 全国一斉導入2010-10-16、30G/約60枚、ART専用・ストック方式、天井/設定変更モード移行解析項目
   - https://p-kn.com/slot/1276/
   - confidence: CONTEMPORARY_DATABASE_HIGH
3. K-Navi 2010年10月導入カレンダー — 10月4日群の次のパチスロ節点2010-10-16本機、全国一斉導入日定義
   - https://p-kn.com/calendar/201010/
   - confidence: CONTEMPORARY_DATABASE_HIGH
4. P-WORLD「天空のシンフォニア」 — 5号機ART、BR非搭載、純増約2.0枚/G、1セット約60枚、ART終了後999Gで超高確、ART初当たり1/146・1/137・1/116・1/103
   - https://www.p-world.co.jp/machine/database/6088
   - confidence: DATABASE_HIGH
5. パチビー「天空のシンフォニア」 — 導入日2010-10-04、5号機ART/BR非搭載、純増約2.0枚/G、30G/約60枚
   - https://www.pachibee.jp/machines/about/210080002
   - confidence: CONTEMPORARY_DATABASE_HIGH
6. パチマガスロマガ「天空のシンフォニア」 — ART初当たり1/146・1/137・1/116・1/103、設定変更専用解析ページの存在
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/08/colmo_slot_08.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/08/h.php
   - confidence: ANALYSIS_HIGH
7. スロット戯言 回顧「天空のシンフォニア」 — 設定1/2/5/6の4段階、ART初当たりと機械割97.0/99.0/110.0/119.0%
   - https://enchantress2009.blog.fc2.com/blog-entry-3140.html
   - confidence: RETROSPECTIVE_ANALYSIS_SINGLE
8. PachiSeven 5号機高機械割回顧 — 天空のシンフォニア設定6 119.0%
   - https://pachiseven.jp/articles/detail/14268
   - confidence: RETROSPECTIVE_DATABASE_MEDIUM
9. K-Navi「前兆状態とは」 — 本前兆時32G後CZ経由でART突入
   - https://p-kn.com/slot/1276/27391/
   - confidence: ANALYSIS_HIGH
10. K-Navi「天空チャンス(CZ)」 — CZ突入条件・ART開始フロー
   - https://p-kn.com/slot/1276/27393/
   - confidence: ANALYSIS_HIGH
