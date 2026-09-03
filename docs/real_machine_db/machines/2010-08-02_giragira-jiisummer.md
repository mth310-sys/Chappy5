# ギラギラ爺サマー

machineName: ギラギラ爺サマー
manufacturer: 大都技研
formalModelName: ギラギラジイサマー 4
formalModelNameStatus: SECONDARY_RETROSPECTIVE_SINGLE
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-08-02
releaseDateStatus: NATIONAL_INTRODUCTION_DATE_SELECTED / DELIVERY_DATE_DIFFERENT_DEFINITION
releaseDateNote: K-Naviはホール導入開始2010-08-02。2010-06-29グリーンべるとは納品開始を2010-08-01予定と報道。物流開始と全国ホール導入開始を分離し、本DB主値は2010-08-02とする。
generation: 5号機
systemType: A+ART / 2段階ART（ゲーム数上乗せART＋無限ART） / CZ・ボーナス経由
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_APPROVAL_UNVERIFIED_PAYOUT_CONFLICT

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線501「ゴルゴ13 あの男に連絡だ!」を再取得。
- 開始時正本地点は recordCount 501 / chronologicalFrontier 2010-08-02。
- LATEST_HANDOFF指定の同日群最優先候補「ギラギラ爺サマー」をrepo検索し未登録を確認。
- K-Naviで全国ホール導入開始2010-08-02、当時グリーンべるとで納品開始2010-08-01予定を確認。定義を分離し、本機を502件目として追加。

## payoutRateBySetting

### P-WORLD / K-Navi 系列
- 設定1: **97.6%**
- 設定2: **98.4%**
- 設定3: **99.9%**
- 設定4: **104.9%**
- 設定5: **110.0%**
- 設定6: **115.2%**

### パチマガスロマガ シミュレート値
- 設定1: **97.74%**
- 設定2: **99.35%**
- 設定3: **101.19%**
- 設定4: **106.46%**
- 設定5: **111.58%**
- 設定6: **116.43%**

設定2以降は単なる丸め差を超える差があるため平均化せず `CONFLICT` として双方保持する。
confidence: CONFLICT_MULTI_SOURCE

## initialHitBySetting

### ボーナス合算
パチマガスロマガ独自調査値:
- 設定1: **1/80.02**
- 設定2: **1/77.56**
- 設定3: **1/79.82**
- 設定4: **1/77.37**
- 設定5: **1/79.82**
- 設定6: **1/77.19**

K-Navi / P-WORLDの掲載値 **1/80.0 / 1/77.5 / 1/79.8 / 1/77.3 / 1/79.8 / 1/77.1** と丸め精度差の範囲で整合。

### BIG（青7）
- 設定1: **1/6553.60**
- 設定2: **1/5461.33**
- 設定3: **1/5461.33**
- 設定4: **1/4681.14**
- 設定5: **1/5461.33**
- 設定6: **1/4096.00**

### REG（BAR）
- 設定1: **1/215.58**
- 設定2: **1/199.80**
- 設定3: **1/215.58**
- 設定4: **1/199.80**
- 設定5: **1/215.58**
- 設定6: **1/199.80**

### CT（チャンスタイム）
- 全設定共通: **1/129.77**

ART単独の設定別初当たり確率は比較可能な公開系列を今回確定できず推定しない。
confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_BONUS / ART_INITIAL_HIT_UNVERIFIED

## baseGamesPer50

パチマガスロマガ独自調査値（1000円あたり）:
- 設定1: **29.97G**
- 設定2: **30.02G**
- 設定3: **30.04G**
- 設定4: **30.48G**
- 設定5: **30.46G**
- 設定6: **30.84G**

独立した同精度の設定別ベース系列は今回確定できず、単一当時解析値として保持。
confidence: ANALYSIS_SINGLE_CONTEMPORARY

## netIncrease

- ART「ギラギラッシュ」: **約+1.8枚/G**
- 初回/基本1セット: **50G+α**
- 無限ART「チャレンジラッシュ」: **次回ボーナス成立まで / 約+1.8枚/G**

2010-06-29グリーンべると、P-WORLD、K-Naviで照合。
confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- BIG BONUS: **約200枚**（P-WORLD。K-Naviは264枚超払い出し終了条件を掲載）
- チャンスタイム: **最大192枚**（P-WORLD）
- 乗ってけタイム: **最大40枚**（P-WORLD）
- ギラギラッシュ: 50G+α、約+1.8枚/G
- チャレンジラッシュ: 次回ボーナスまで、約+1.8枚/G

confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_ART / PAYOUT_DIRECT_PWORLD

## modeSpecificMinimumData

- 2段階ART「メガギガウェーブ」は、ゲーム数上乗せ型「ギラギラッシュ」と無限ART「チャレンジラッシュ」で構成。
- ギラギラッシュのゲーム数消化後はチャレンジラッシュへ移行し、チャレンジラッシュ中にゲーム数を獲得するとギラギラッシュへ復帰可能。
- BIG成立後はギラギラッシュへ突入。
- 通常時は低確/高確の内部状態が存在。P-WORLDは設定変更後50%で高確率状態とする。
- 天井: **通常状態500G消化後、乗ってけタイム or ギラちゃんす成立で100G以上のART確定**。

confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_COUNTER_RESET_CONFIRMED_SECONDARY + 50_PERCENT_HIGH_STATE_CONFIRMED_ANALYSIS**。P-WORLDは設定変更後について液晶に変化はないが**50%で高確率状態**となり、通常モード以上が確定・高確モードの可能性ありと掲載。CrankySevenの5号機天井整理は設定変更後に天井到達までのゲーム数がクリアされると明記する。

carryOverBehavior: **CEILING_CARRYOVER_INFERRED_BUT_DIRECT_MACHINE_SPECIFIC_WORDING_UNVERIFIED**。設定変更時のみ天井ゲーム数クリアとする資料から据え置き時継続が強く示唆されるが、「据え置きなら前日500G進捗を引き継ぐ」という本機固有の直接文言を今回確定できなかったため、確定値には昇格させない。低確/高確状態・ART権利の据え置き処理も `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の500G天井進捗、低確/高確、ART権利、液晶/リール初期挙動を、初代2010年機固有の直接資料で確定できず。2022年「超ギラギラ爺サマー」の電源OFF→ON情報は別機種のため混用しない。

gameCounterReset: **RESET_ON_SETTING_CHANGE_CONFIRMED_SECONDARY_ANALYSIS**。通常状態500Gが天井基準。CrankySevenは設定変更後に天井ゲーム数クリアと明記。

ceilingAfterReset: **NORMAL_500G_RULE_RESTARTS / NO_FIXED_SHORTENED_RESET_CEILING_CONFIRMED**。設定変更で天井進捗クリア。設定変更専用の短縮天井数値は、表記・解析サイト・旧天井DBを変えて再探索しても確認できなかった。

modeAfterReset: **AT_LEAST_NORMAL_MODE / HIGH_MODE_POSSIBLE_CONFIRMED_PWORLD**。P-WORLDは設定変更後、通常モード以上が確定し高確モードの可能性もあると掲載。ただし通常/高確モードの厳密な振り分け表は今回確定できない。

stateAfterReset: **HIGH_PROBABILITY_STATE_50_PERCENT**。設定変更時の**50%で高確率状態**。残る50%の厳密な状態定義、状態継続G数振り分けは物差し範囲外/未確定。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **50_PERCENT_HIGH_STATE**。設定変更時の半数で高確率状態となり、朝一のART契機期待度に影響する主要恩恵。固定短縮天井は確認されない。

resetPenalties: **PREVIOUS_500G_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**。設定変更で天井ゲーム数がクリアされるため、前日ハマリ進捗を用いた宵越し狙いには不利。ただし据え置き時の直接継承文言は別項目どおり未確定。

resetDetection: **DISPLAY_UNCHANGED_ON_SETTING_CHANGE / NO_DIRECT_GAKKUN_METHOD_CONFIRMED**。P-WORLDは設定変更後も液晶に変化なしとするため、液晶見た目だけで変更判別は困難。ガックン、初期出目、ランプ等の本機固有判別法は、機種名/型式/大都技研と設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン・初期出目を組み替えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- normalCeiling: **通常状態500G消化後、次の乗ってけタイム or ギラちゃんすで100G以上ART確定**
- settingChangeHighProbabilityState: **50%**
- settingChangeCeilingCounter: **RESET / 0から再計数扱い**
- settingChangeMode: **通常モード以上確定、高確モードの可能性あり（P-WORLD表現）**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedARTInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: COMPLETE_FOR_SETTING_CHANGE_COUNTER_AND_50_PERCENT_HIGH_STATE / PARTIAL_FOR_CARRYOVER_POWER_CYCLE_DETECTION

## conflicts

- payoutRate: P-WORLD/K-Navi系列 **97.6 / 98.4 / 99.9 / 104.9 / 110.0 / 115.2%** と、パチマガスロマガのシミュレート値 **97.74 / 99.35 / 101.19 / 106.46 / 111.58 / 116.43%** が競合。平均せず双方保持。
- releaseDate: 全国ホール導入2010-08-02（K-Navi）と納品開始2010-08-01予定（グリーンべると）は定義差であり、数値競合として平均化しない。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- formalModelName independent high-reliability confirmation: UNVERIFIED_AFTER_RESEARCH（後年資料「ギラギラジイサマー 4」のみ回収）
- ART initial hit by setting: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior direct machine-specific wording: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- low/high state handling on simple power cycle and unchanged setting: UNVERIFIED_AFTER_RESEARCH
- ART right/stock handling on setting change/power cycle: UNVERIFIED_AFTER_RESEARCH
- gakkun / initial reel position / lamp-based reset detection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「この夏、『ギラギラ爺サマー』がBIG WAVEを起こす」2010-06-29 — https://web-greenbelt.jp/00002712/ — 納品2010-08-01予定、2段階ART、ギラギラッシュ50G/+1.8枚/G、チャレンジラッシュ、BIG後ART — reliability: INDUSTRY_CONTEMPORARY
2. K-Navi「ギラギラ爺サマー」 — https://p-kn.com/slot/1244/ — ホール導入2010-08-02、ボーナス合算、機械割、払い出し条件、ART概要 — reliability: CONTEMPORARY_ANALYSIS
3. K-Navi「生涯現役!パチスロ新機種『ギラギラ爺サマー』登場!」2010-06-18 — https://p-kn.com/topics/news/1046/ — 発売決定、8月上旬導入予定、メガギガウェーブ概要 — reliability: CONTEMPORARY_INDUSTRY_MEDIA
4. P-WORLD「ギラギラ爺サマー」 — https://www.p-world.co.jp/machine/database/6022 — 機械割、ボーナス合算、ART純増/50G、各獲得性能、500G天井、設定変更後50%高確、液晶変化なし — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「ギラギラ爺サマー ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/47/h.php — BIG/REG/CT確率、ボーナス合算、シミュレート機械割 — reliability: CONTEMPORARY_ANALYSIS
6. パチマガスロマガ「ギラギラ爺サマー 小役確率・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/47/c.php — 設定別29.97〜30.84G/1000円 — reliability: CONTEMPORARY_ANALYSIS_SINGLE
7. CrankySeven「か行の機種の天井情報(5号機版)」 — https://crankyseven.com/sp/tenjo-5ka.htm — 通常500G天井、設定変更後の天井ゲーム数クリア、設定変更時50%高確 — reliability: SECONDARY_ANALYSIS
8. pachinko’s blog「大都技研『ギラギラ爺サマー』の筺体＆情報」 — https://pachinko.hatenablog.jp/entry/2010/08/giragira-G-summer — 型式名「ギラギラジイサマー 4」、2010.08 — reliability: SECONDARY_RETROSPECTIVE_SINGLE
9. 4Gamer 2014-06-13 — https://www.4gamer.net/games/261/G026143/20140613109/ — 2010年8月登場、アプリでARTを再現 — reliability: SECONDARY_INDUSTRY/GAME_MEDIA

## researchNotes

- resetBehavior欠損再探索では「ギラギラ爺サマー / ギラギラジイサマー 4 / 大都技研」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 高確 / モード / ガックン / 初期出目」を組み替えた。
- 2022年「超ギラギラ爺サマー」は検索で多数ヒットするが別機種。初代2010年機のpowerCycleBehavior等へ混用していない。
- 50枚ベースはパチマガスロマガの当時独自調査から設定別値まで回収できたためUNVERIFIED化せず保存。
- 機械割は二系列に明確な差があるためCONFLICT。
