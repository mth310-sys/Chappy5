# 緑ドン VIVA!情熱南米編

machineName: 緑ドン VIVA!情熱南米編
manufacturer: エレコ
releaseDate: 2010-12-10
releaseDateStatus: HALL_INTRODUCTION_DATE
releaseDateNote: HAZUSEで2010-12-10導入開始を確認。後年資料・ユニバーサル系資料でも2010年12月登場/リリースを確認。2010-12-07〜09に本機より先行する強い未登録導入日を今回の導入カレンダー・検索横断では確定できず、前線を12/10へ進める。
generation: 5号機
systemType: A+ART / ゲーム数上乗せART
formalModelName: 緑ドンE
inspectionNumber: 0S1079
aliases: 緑ドンVIVA / 緑ドン VIVA! 情熱南米編
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前530「俺の空～蒼き正義魂～」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 530 / chronologicalFrontier 2010-12-06。
- 2010-12-06同日群と12/07〜12/09境界を導入日検索・当時/旧DB系統で再監査し、本機より前に割り込む強い未登録ホール導入日を確定できず。
- repo内機種名検索で既存レコードなしを確認し531件目として追加。
- 2025年「スマスロ 緑ドン VIVA!情熱南米編 REVIVAL」は別機種として除外し、旧2010年機の数値のみ採用。

## payoutRateBySetting

- 設定1: **97.5%**
- 設定2: **98.8%**
- 設定3: **101.1%**
- 設定4: **106.6%**
- 設定5: **110.4%**
- 設定6: **119.5%**

HAZUSEと後年データ集で一致。
confidence: ANALYSIS_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/399.6**
- 設定2: **1/390.1**
- 設定3: **1/381.0**
- 設定4: **1/372.4**
- 設定5: **1/364.1**
- 設定6: **1/327.7**

### REG
- 設定1: **1/712.4**
- 設定2: **1/682.7**
- 設定3: **1/655.4**
- 設定4: **1/630.2**
- 設定5: **1/606.8**
- 設定6: **1/512.0**

### ART初当たり
- 設定1: **1/579.3**
- 設定2: **1/534.5**
- 設定3: **1/522.0**
- 設定4: **1/408.4**
- 設定5: **1/378.9**
- 設定6: **1/283.8**

BIG/REGはHAZUSEと後年データ集が整合。ART初当たりは後年データ集で設定別全表を回収、設定6は777town系回顧資料とも一致。
confidence: HIGH_FOR_BONUS / ANALYSIS_SINGLE_WITH_PARTIAL_CROSSCHECK_FOR_ART

## baseGamesPer50

- **約33.0G / 1000円（小役目押し）**
- 後年データ集で直接値を確認。
- HAZUSE等の別系統では比較可能な直接値を今回回収できなかったため単一整理資料値として保持。
confidence: ANALYSIS_SINGLE

## netIncrease

- ART「アマゾンゲーム」: **約+1.5枚/G**
- 基本1セット: **50G+α**
- 上乗せ特化「エクストリームラッシュ（XR）」を搭載。
- XR継続率は50/60/70/80/90/95%の6段階として旧解析資料で確認。ただし完全再現用詳細抽選は保存対象外。

ユニバーサルの後年公式プレスリリース、旧解析、777town回顧資料で主要仕様を照合。
confidence: HIGH_MULTI_SOURCE

## basicPayout

- BIG: **純増約208枚**
- REG: **純増56枚**
- HAZUSEの払い出し終了条件: BIG 250枚超、REG 60枚超。

後年データ集と777town回顧資料で実獲得目安が一致。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- ART「アマゾンゲーム」: 50G+α、約+1.5枚/G。
- 通常時は内部状態があり、高確ほどART当選期待度が上昇。
- 天井: **ボーナス間1480G消化後、天井ARTへ**。
- 旧回顧資料では天井到達時に高モードART＋複数ストックとする記述あり。物差し用途では「1480GでART」が主要値。
confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **VERIFIED_PARTIAL**。設定変更で天井までのゲーム数をクリア。さらに高確移行抽選が行われる。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のみ天井G数クリアという資料から据え置き継承が強く示唆されるが、本機固有の「据え置き時は1480G進捗を引き継ぐ」という直接本文を今回十分な独立資料で確定できず、推論値は採用しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。2010年版について単純電源OFF→ON時の天井・内部状態・ART権利の扱いを直接確認できず。2025年REVIVALの電源OFF→ON情報は別機種のため転用していない。

gameCounterReset: **RESET_ON_SETTING_CHANGE**。設定変更後はボーナス間1480G天井までのゲーム数を0から数え直す。

ceilingAfterReset: **NO_DEDICATED_SHORTER_RESET_CEILING_CONFIRMED**。通常天井1480G。設定変更専用の短縮天井は2010年版では確認できず。

modeAfterReset: **HIGH_STATE_RESELECTION_CONFIRMED / EXACT_DISTRIBUTION_UNVERIFIED**。設定変更時に高確移行抽選あり。具体的な設定変更専用振り分け率は今回安全に確定できず。

stateAfterReset: **HIGH_STATE_LOTTERY_CONFIRMED**。設定変更時は高確移行抽選が行われる。朝一、レア小役非入賞でジャングルステージへ移行した場合は設定変更可能性が高まると旧解析資料に記載。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **VERIFIED_QUALITATIVE**。設定変更時に高確スタートの可能性があり、朝一のART期待度に影響。

resetPenalties: **VERIFIED**。設定変更すると前日までの1480G天井進捗が消失する。

resetDetection: **PARTIAL_VERIFIED**。朝一、レア小役非入賞でジャングルステージへ移行した場合は設定変更の可能性が高いと旧解析資料に記載。ガックン・初期出目・ランプ等の本機固有確定判別は再探索後も確認できず。

numericResetData:
- normalCeiling: **1480G bonus-to-bonus**
- settingChangeCeilingProgress: **RESET**
- resetHighStateLottery: **EXISTS / exact rate UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- carryOverCeilingProgress: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleCarryOver: **UNVERIFIED_AFTER_RESEARCH**
- resetDetectionJungleWithoutRareRole: **setting change possibility increases**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **VERIFIED_CORE_WITH_CARRYOVER_POWER_CYCLE_NUMERIC_STATE_GAPS**

## conflicts

- 今回、主要性能値に平均化が必要な明確な競合は確認せず。
- BIG/REGの小数末尾には資料間で 399.6/399.6、390.0/390.1、712.3/712.4 等の丸め差がある。主値はHAZUSE表記を採用し、後年データ集は丸め整合として扱う。

## missingFields

- settingChangeHighStateExactDistribution: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gakkun/initialDisplay exact reset detection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. HAZUSE「緑ドン VIVA!情熱南米編」 — 導入開始2010-12-10、メーカー、型式名、検定番号、設定別BIG/REG、ボーナス+ART合成、機械割、払い出し終了条件。
   - https://hazuse.com/machine/pachislot/0S1079/
   - confidence: ANALYSIS_HIGH
2. HAZUSE「基本スペック」 — 設定別BIG/REG/機械割、配当・終了条件。
   - https://hazuse.com/machine/pachislot/0S1079/genre/201/
   - confidence: ANALYSIS_HIGH
3. ユニバーサルエンターテインメント後年公式プレスリリース — 2010年登場機、ART 1セット50G、純増約1.5枚/G、XR搭載の回顧一次情報。
   - https://www.atpress.ne.jp/news/23006
   - confidence: OFFICIAL
4. 緑ドンVIVA！情熱南米編徹底解析 — 天井1480G、設定変更で天井G数クリア、設定変更時の高確移行抽選、ジャングル移行による変更推測、ART主要仕様。
   - https://midoridon.nengu.jp/index.html
   - confidence: ANALYSIS_SINGLE
5. まのブログ「データ集〈緑ドンVIVA〉」 — 設定別BIG/REG/ART初当たり/機械割、1k=33.0G、BIG約208枚、REG56枚。
   - https://ameblo.jp/thundervsp5/entry-12810834856.html
   - confidence: ANALYSIS_SINGLE
6. 777town系回顧資料 — A+ART、設定6ボーナス/ART値、BIG208枚、REG56枚、ART50G+α/約1.5枚G、1480G天井。
   - https://w.atwiki.jp/samita_skill/pages/223.html
   - confidence: SECONDARY_RECALL

## researchNotes

- 欠損項目は「緑ドン VIVA!情熱南米編 / 緑ドンVIVA / 緑ドンE / エレコ / 0S1079」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1480G / 高確 / ジャングル / ガックン / 50枚 / 1000円 / ベース / ART初当たり」を組み替え、HAZUSE、旧解析、後年回顧、メーカー公式回顧まで横断。
- 2025年「スマスロ 緑ドン VIVA!情熱南米編 REVIVAL」の天井1280G・変更時800G・高確50%・電源OFF ON引継ぎ・有利区間情報は別機種なので2010年版へ転用していない。
- 通常時の全状態移行率・XR内部抽選・上乗せ詳細はミッションv0.7の対象外として保存していない。
