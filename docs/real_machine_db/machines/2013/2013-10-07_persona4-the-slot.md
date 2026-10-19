# Persona4 The SLOT

machineName: Persona4 The SLOT
aliases: パチスロ persona4 The SLOT / ペルソナ4 / P4
manufacturer: ニューギン
releaseDate: 2013-10-07
releaseDatePrecision: exact_day
releaseDateStatus: CONFLICT_PLANNED_2013-09-30_VS_DELIVERY_2013-10-06_AND_HALL_2013-10-07
modelName: Persona4 The SLOT-Y
inspectionNumber: 3S0598

generation: 5号機
systemType: ART / 疑似ボーナス / CZ / 規定ゲーム数 + レア役 + 自力解除
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- ニューギンの「パチスタ」第1弾。リアルボーナス非搭載で、疑似ボーナス「P4 BONUS」とART「P4 RUSH」で出玉を増やす5号機ART機。
- ALL7とパチビーは導入日を **2013-09-30** とする一方、当時ニューギン発表会を伝える業界記事は **2013-10-06納品開始予定**、HAZUSEは **2013-10-07導入開始日**、パチマガスロマガも2013年10月機として整理する。
- 本DBの時系列キーは「予定日」より実納品/ホール導入を優先し **2013-10-07** を採用。ただし9/30資料も捨てず `CONFLICT` として保持する。
- HAZUSE掲載: 型式名 **Persona4 The SLOT-Y** / 検定番号 **3S0598**。
- confidence: INDUSTRY_HIGH + ANALYSIS_HIGH_MULTI_SOURCE / release date CONFLICT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.5% |
| 3 | 100.2% |
| 4 | 102.6% |
| 5 | 106.5% |
| 6 | 113.5% |

- HAZUSE、パチマガスロマガ、P-WORLDで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス+ART初当たり合成

| 設定 | 初当たり |
|---|---:|
| 1 | 1/304.0～1/304.8 |
| 2 | 1/283.2 |
| 3 | 1/282.9 |
| 4 | 1/265.0 |
| 5 | 1/256.9 |
| 6 | 1/224.8 |

- HAZUSEは設定1を1/304.0、パチマガスロマガはART初当たり1/304.8。設定2～6は一致するため、設定1のみ丸め/定義差候補として範囲保持。
- P-WORLD/パチマガスロマガの個別値ではP4 BONUS: 1/328.7～1/237.6、P4 RUSH直撃: 1/4182.8～1/4152.8（設定順は単調ではない）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_SETTING1_CONFLICT

## baseGamesPer50

- **約31G/50枚（全設定共通）**。
- HAZUSEの機種固有基本スペックで確認。
- confidence: ANALYSIS_SINGLE_HIGH

## netIncrease

- P4 BONUS / P4 RUSH: **純増約2.2枚/G**。
- P-WORLD、HAZUSE、当時業界発表回顧で一致。
- confidence: INDUSTRY_HIGH + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- P4 BONUS: **30～100G**の疑似ボーナス、純増約2.2枚/G。基本30Gで、100Gスタート時はART確定。
- P4 RUSH: **1セット30～300G+α**、純増約2.2枚/G、継続率80% or 93%。
- 固定枚数ボーナス主体ではないため、物差し上の基本獲得性能はART/疑似ボーナスの基本G数と純増を採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 初当たり契機は主に規定ゲーム数、レア役、CZ「ベルベットCHANCE」。
- 通常時には少なくとも通常A / 通常B / 天国A / 天国Bのゲーム数モードが解析されている。
- 後年解析整理のモード別最大Gは通常A **1784G**、通常B **775G**、天国A/B **201G**。
- 絆メーターは1～10段階でCZ当選率に影響し、ボーナス/ART当選までリセットされない。
- 通常時の全モード移行表・全状態抽選は本ミッション対象外。

## ceiling

- ボーナス or ART間 **1784G** で最大天井到達、ART当選確定。
- 1025G以上で次回初当たり時ART50G以上、1281G以上でART100G、1537G以上で93%継続+300GスタートのARTという段階恩恵あり。
- ボーナスからART非当選が7回連続した場合、次回ボーナスでART当選確定となるボーナススルー天井も存在。
- confidence: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_KIZUNA_STATE_HIGH_100_PERCENT_CONFIRMED__MORNING_METER_HIGH_CONFIRMED__GAME_COUNTER_MODE_CARRYOVER_POWER_CYCLE_DETECTION_PARTIAL_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更時は絆メーター状態が必ず高確からスタート（高確100%）**。
- K-Naviの本機専用解析で、ボーナス後/ART後は低確90%・高確10%に対し、設定変更後は高確100%と明記。
- パチマガスロマガも本機の「朝イチ・設定変更」で **朝イチは絆メーター高確確定** と整理しており、別系統で一致。
- 設定変更時の規定ゲーム数/天井G、通常A/B/天国A/Bモード、ボーナススルー回数の具体的再抽選契約は、機種名・型式・メーカー・「リセット/設定変更/朝一/天井/モード/宵越し」を組み替え再探索したが、今回安全に直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence for kizuna-state reset: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 純据え置き時の規定G数・1784G天井進捗、モード、ボーナススルー回数、絆メーターランク/絆状態の保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更後高確100%という事実から据え置き挙動を自動推定しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** の規定G数・天井・モード・ボーナススルー回数・絆メーター/状態・液晶カレンダー表示の扱いは **UNVERIFIED_AFTER_RESEARCH**。
- 一般的5号機挙動や他ニューギン機の仕様は転記しない。

### gameCounterReset

- setting change: **UNVERIFIED_AFTER_RESEARCH** for 規定G数/1784G天井/ボーナススルー回数。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常最大天井: **1784G**。
- 段階恩恵: 1025G / 1281G / 1537G以上。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット時の天井G再セット/短縮の直接契約: **UNVERIFIED_AFTER_RESEARCH**。

### modeAfterReset

- 通常A/B、天国A/Bの存在は確認。
- 設定変更時の各モード振り分け、朝一専用モード、モード引継ぎ/再抽選の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- 後年攻略記事には「リセット天国」への言及があるが、今回取得できた根拠だけで公開振り分け率を固定しない。

### stateAfterReset

- **絆メーター状態: 設定変更後 高確100% / 低確0%**。
- 参考比較: ボーナス後・ART後は低確90% / 高確10%。
- 通常時の別系統「低確/高確」や確変状態まで設定変更時にどう初期化されるかは、絆状態と混同せず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- **設定変更後は絆メーター高確が100%**。絆メーター6個以上では高確時のメーターアップ期待が低確時の約2倍となる解析があり、朝一CZ到達面の明確な優遇要素。
- パチマガスロマガも「朝イチはメーターが貯まりやすい状態」と明記。
- 設定変更専用の短縮天井/確定ボーナス/確定ART: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日天井G/モード/スルー回数が消去されるかを直接確認できていないため、宵越し不利を断定しない。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶カレンダー/天候、絆メーター表示による設定変更確定・据え置き確定条件は **UNVERIFIED_AFTER_RESEARCH**。
- 朝一高確100%は内部優遇であり、外見だけで変更を確定できる契約とは扱わない。

### publicMorningNumbers

- setting-change kizuna state: **HIGH 100% / LOW 0%**。
- post-bonus/post-ART comparison: **HIGH 10% / LOW 90%**。
- reset-only shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- setting-change mode distribution: **UNVERIFIED_AFTER_RESEARCH**。
- maximum normal ceiling: **1784G**（通常仕様）。

## conflicts / safeguards

- releaseDate: ALL7/パチビー **2013-09-30** vs 当時業界記事 **2013-10-06納品開始予定** vs HAZUSE **2013-10-07導入開始**。本DBでは実納品/ホール導入を優先し10/07を時系列キーに採用、9/30は予定日系としてCONFLICT保持。
- 初当たり設定1: HAZUSE **1/304.0** vs パチマガスロマガ **1/304.8**。平均せず範囲/競合として保持。
- 「絆メーター高確」と通常時の低確/高確・確変状態は別概念。設定変更後高確100%を他状態へ拡張しない。
- 「KING of KEIBA」は藤商事公式・業界記事・P-WORLDで **CRパチンコ** と確認。本パチスロDBの09/24候補から除外し、Persona4までの境界を補正した。

## sources

取得日: **2026-09-06**

1. HAZUSE「パチスロ Persona4 The SLOT」
   - https://hazuse.com/machine/pachislot/3S0598/
   - 5号機、型式Persona4 The SLOT-Y、検定番号3S0598、導入開始2013-10-07、機械割、初当たり、31G/50枚、天井1784G、ART性能。
   - confidence: ANALYSIS_HIGH_DATABASE

2. P-WORLD「Persona4 The SLOT」
   - https://www.p-world.co.jp/machine/database/7178
   - 5号機ART、純増約2.2枚/G、P4 BONUS 30～100G、P4 RUSH 30～300G+α、設定別機械割/個別初当たり。
   - confidence: INDUSTRY_DATABASE_HIGH

3. パチマガスロマガ「Persona4 The SLOT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/28/newgin_slot_28.php
   - ニューギン/2013年10月、機械割・初当たり、朝イチ・設定変更「朝イチは絆メーター高確が確定」。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ「通常時のゲーム性詳細」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/28/05.php
   - 絆メーターはCZ当選率に関与、ボーナス/ARTまでリセットされず、朝イチはメーターが貯まりやすい状態。
   - confidence: ANALYSIS_HIGH

5. K-Navi「絆メーター」
   - https://p-kn.com/slot/1920/46722/
   - 設定変更後の絆状態: **高確100%**。ボーナス後/ART後: 低確90% / 高確10%。
   - confidence: ANALYSIS_HIGH

6. パチビー「Persona4 The SLOT」
   - https://www.pachibee.jp/machines/lecture/213090000
   - 導入日2013-09-30、5号機ART、純増約2.2枚/G。
   - confidence: INDUSTRY_DATABASE / release-date conflict source

7. ALL7「2013年9月の導入機種一覧」
   - https://www.all7.jp/plans/index/2013/09
   - Persona4 The SLOTを2013-09-30導入予定として掲載。
   - confidence: INDUSTRY_CALENDAR_PLANNED

8. 当時業界記事回顧「パチスタ第1弾は人気RPGをパチスロ化！」
   - https://p-mans.blogspot.com/2013/08/
   - ニューギン8/23内覧会、納品開始は2013-10-06予定、P4 RUSH純増2.2枚/G・30～300G+α。
   - confidence: INDUSTRY_ARTICLE_REPRINT

9. 期待値見える化「ペルソナ4 ゾーン振り分け解析」
   - https://slotjin.com/zone/persona4-2/
   - 通常A/B・天国A/B、モード別天井1784/775/201/201G。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE for mode maxima

10. 藤商事公式「CR KING of KEIBA」
    - https://www.fujimarukun.co.jp/products/keiba/
    - KING of KEIBAがCRパチンコであることを確認。09/24パチスロ候補除外の境界監査用。
    - confidence: OFFICIAL

11. グリーンべると「秋のG1レースと完全リンク！『CR KING of KEIBA』」
    - https://web-greenbelt.jp/00000994/
    - 2013-07-26記事、藤商事のパチンコ新機種として確認。
    - confidence: INDUSTRY_HIGH
