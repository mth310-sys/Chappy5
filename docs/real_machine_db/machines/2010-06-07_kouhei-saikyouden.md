# コウヘイ最凶伝 ～地獄の閻魔覚醒の刻～

machineName: コウヘイ最凶伝 ～地獄の閻魔覚醒の刻～
manufacturer: アビリット
formalModelName: コウヘイサイキョウデン
approvalNumber: 9S1392
releaseDate: 2010-06-07
releaseDateStatus: CONFLICT
releaseDateNote: HAZUSEは導入開始日2010-06-04、パチビー/スロマニアックスは2010-06-07。平均化せずCONFLICTとして保持し、同日群のfrontier運用では2010-06-07を主値とする。
generation: 5号機
systemType: ボーナス＋ART / CZ / 天井 / セット継続＋ストック
coreStatus: COMPLETE_CORE_RESET_PARTIAL_POWER_CYCLE_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線483「南国育ちスペシャル-30」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 483 / chronologicalFrontier 2010-06-07。
- LATEST_HANDOFFの2010-06-07同日群で未処理候補に指定されていた本機をrepo未登録確認後484件目として追加。
- 現行P-WORLDのメーカー表記は企業承継後の「コナミアミューズメント」だが、2010年当時資料・パチビー・HAZUSEではアビリット。DBでは発売当時メーカーを採用。

## payoutRateBySetting

- 設定1: **97.0%**
- 設定2: **98.4%**
- 設定3: **99.9%**
- 設定4: **102.7%**
- 設定5: **105.9%**
- 設定6: **110.3%**

P-WORLD / HAZUSE / pacnkで一致。
confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## initialHitBySetting

### BIG
- 設定1: **1/1310.7**
- 設定2: **1/1310.7**
- 設定3: **1/1260.3**
- 設定4: **1/1260.3**
- 設定5: **1/1213.6**
- 設定6: **1/1213.6**

### ボーナス合算
- 設定1: **1/163.8**
- 設定2: **1/163.8**
- 設定3: **1/154.9**
- 設定4: **1/152.8**
- 設定5: **1/145.6**
- 設定6: **1/143.1**

### ART初当たり
- 設定1: **1/390**
- 設定2: **1/350**
- 設定3: **1/380**
- 設定4: **1/330**
- 設定5: **1/360**
- 設定6: **1/290**

### BG / CT
- BG、CT1、CT2を搭載。P-WORLDではBG表の設定6欄が欠落しているため、未確認値を補完しない。
- CT合算: 設定1 **1/273.1** / 設定2 **1/273.1** / 設定3 **1/253.0** / 設定4 **1/247.3** / 設定5 **1/234.1** / 設定6 **1/227.6**。

confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## baseGamesPer50

- 設定1: **29.84G**
- 設定2: **29.84G**
- 設定3: **29.90G**
- 設定4: **29.91G**
- 設定5: **29.96G**
- 設定6: **29.98G**

旧パチマガスロマガ本機専用ページの「1000円あたりのゲーム数」を採用。
confidence: ANALYSIS_SINGLE

## netIncrease

- ART「閻魔ラッシュ」: **45G/1セット**
- 純増: **約+1.2枚/G**（P-WORLD/パチビー本文）
- P-WORLD分類表示には **約+1.24枚/G** 表記もあるため、丸め/表示精度差として併記。
- ART当選時は待機ATを経て特殊リプレイ入賞で発動。
- 継続はセット継続抽選＋ART権利ストックの双方を使用。

confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## basicPayout

- BIG: **約265枚**
- BG: **約96枚**
- CT1: **約72枚**
- CT2: **約36枚**
- BIG終了条件: **345枚を超える払い出しで終了**
- BG終了条件: **135枚を超える払い出しで終了**
- CT1: **99枚を超える払い出しで終了**
- CT2: **45枚を超える払い出しで終了**

P-WORLD / パチビー / HAZUSEで整合。
confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## modeSpecificMinimumData

- ART「閻魔ラッシュ」: 45G/セット、ヤン魂1000個で次セット継続確定。1000未満でも「閻魔チャレンジ」で継続昇格抽選。
- ART当選時の潜伏: **最大31G**。
- ボーナス間ゲーム数天井: ボーナス終了後、ARTを除く規定ゲーム数 **444 / 555 / 666 / 777 / 888 / 999 / 1111G** のいずれか。最大1111G。
- 天井状態中のボーナス成立でARTナビストック確定。
- 別系統天井: **ART間の中段非道任務5回目でART確定**（必勝本）。
- 設定変更後は通常Aスタート。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED**。パチ＆スロ必勝本の本機専用「設定変更&天井情報」で、**設定変更時は天井までのゲーム数をリセットし、通常Aスタート**と直接確認。CrankySeven/pacnkでもゲーム数天井リセットを照合。

carryOverBehavior: **PARTIAL_INFERRED_FROM_RESET_SPEC / DIRECT_STAYOVER_TEXT_UNVERIFIED**。設定変更時のみ天井カウンタをクリアする仕様は確認できるが、「据え置き時は前日ゲーム数を引き継ぐ」という本機固有の直接文言は今回回収できず。ホール朝一物差しでは据え置きの宵越し可能性を示すが、直接資料未確認として断定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみで天井カウンタ、通常A/B等のモード、ARTストック、前兆、CZ状態がどう処理されるか、本機固有の直接資料を今回確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE_CONFIRMED**。ボーナス間規定ゲーム数天井は設定変更でクリア。

ceilingAfterReset: **RESET_TO_NORMAL_A / NO_SHORTENED_FIXED_CEILING_CONFIRMED**。設定変更後は通常Aスタート。リセット専用の固定短縮天井数値は確認されず。通常A内の規定ゲーム数振り分け詳細は完全再現用詳細抽選として今回収集対象外。

modeAfterReset: **NORMAL_A_CONFIRMED**。設定変更時は通常Aスタート。

stateAfterReset: **PARTIAL**。通常Aスタートは確認。ARTストック、前兆、CZ/高確等の全内部状態clear/retainは本機固有資料で直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NORMAL_A_START_ONLY_CONFIRMED / NO_NUMERIC_BENEFIT_CONFIRMED**。設定変更後の通常Aスタートは確認。ただし朝一専用短縮天井、初当たり優遇率などの公開数値は確認できず。

resetPenalties: **CEILING_PROGRESS_CLEARED_CONFIRMED**。前日ボーナス間ハマリが設定変更で消失するため、宵越し天井狙い上は不利。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「コウヘイ最凶伝 / コウヘイサイキョウデン / 9S1392」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 判別」を組み替え、必勝本・P-WORLD・HAZUSE・パチビー・旧パチマガ・CrankySeven・pacnkを横断したが、本機固有のガックン等を確定できず。

numericResetData:
- resetGameCounter: **CLEAR**
- resetStartMode: **通常A**
- ceilingCandidates: **444 / 555 / 666 / 777 / 888 / 999 / 1111G**
- maximumGameCeiling: **1111G**
- otherCeiling: **ART間の中段非道任務5回目**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NOT_COLLECTED_DETAILED_INTERNAL_TABLE / NORMAL_A_START_CONFIRMED**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: SETTING_CHANGE_COUNTER_CLEAR_NORMAL_A_CONFIRMED_POWER_CYCLE_DETECTION_STAYOVER_DIRECT_TEXT_UNVERIFIED

## conflicts

- releaseDate: HAZUSE **2010-06-04** / パチビー・スロマニアックス **2010-06-07**。平均化せずCONFLICTとして保持。
- manufacturer naming: 2010年当時は **アビリット**。現行P-WORLDは承継後企業名「コナミアミューズメント」と表示するため、発売当時メーカーと現在DB表示を区別。
- ART net increase: 本文で約+1.2枚/G、分類表示で約+1.24枚/G。定義差/丸め精度差として両方保持し、代表値は約+1.2枚/G。

## missingFields

- carryOverBehavior direct stayover wording: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset exact ART stock / CZ / precursor handling: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning hit rate / benefit rate: NONE_CONFIRMED_AFTER_RESEARCH
- BG setting6 exact individual probability: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. パチ＆スロ必勝本「設定変更&天井情報[コウヘイ最凶伝]」 — https://p.hisshobon.jp/machine/1593/1/24380 — 設定変更時の天井ゲーム数リセット、通常Aスタート、最大1111G天井、ART間中段非道任務5回天井 — reliability: ANALYSIS_HIGH
2. P-WORLD「コウヘイ最凶伝～地獄の閻魔覚醒の刻～」 — https://www.p-world.co.jp/machine/database/5944 — 型式名コウヘイサイキョウデン、検定番号9S1392、設定別BIG/合算/ART初当たり/機械割、基本獲得枚数、ART45G・約1.2枚/G — reliability: INDUSTRY_MACHINE_DB
3. HAZUSE DATA「コウヘイ最凶伝 ～地獄の閻魔覚醒の刻～」 — https://data.hazuse.com/?machine_code=9S1392 — アビリット、導入開始2010-06-04、設定別BIG/合算/PAY OUT、配当表 — reliability: ANALYSIS_DB
4. パチビー「コウヘイ最凶伝 -地獄の閻魔覚醒の刻-」 — https://www.pachibee.jp/machines/index/210040003 — アビリット、導入日2010-06-07、BIG/BG/CT獲得枚数、ART45G・約1.2枚/G — reliability: ANALYSIS_MACHINE_DB
5. パチマガスロマガ旧本機専用「小役確率・1000円あたりのゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/25/c.php — 設定別29.84〜29.98G/1000円 — reliability: ANALYSIS_ARCHIVE
6. CrankySeven「か行の機種の天井情報(5号機版)」 — https://crankyseven.com/sp/tenjo-5ka.htm — 444〜1111G規定ゲーム数、設定変更後の天井ゲーム数クリア — reliability: ANALYSIS_ARCHIVE
7. pacnk「コウヘイ最凶伝 設定判別ツール」 — https://pacnk.com/slot/tools/sh_kouhei.html — 設定別ボーナス合算/ART初当たり/PAYOUT、天井候補、設定変更後ゲーム数リセット・通常Aスタート — reliability: SECONDARY_ANALYSIS
8. スロマニアックス「コウヘイ最凶伝」 — https://smph.slo-maniax.com/ard/machine/slot/index.html?machine_id=1207 — 店舗導入開始日2010-06-07 — reliability: ANALYSIS_ARCHIVE
