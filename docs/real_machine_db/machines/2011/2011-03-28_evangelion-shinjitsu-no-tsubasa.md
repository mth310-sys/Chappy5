# ヱヴァンゲリヲン～真実の翼～

machineName: ヱヴァンゲリヲン～真実の翼～
manufacturer: ビスティ
formalModelName: ヱヴァンゲリヲン・真実の翼Ｇ
inspectionNumber: 0S1265（HAZUSE機種DB識別子と一致。検定票一次資料本文では未確認）
releaseDate: 2011-03-28
releaseDateStatus: EXACT_DATE_WITH_SOURCE_DEFINITION_CONFLICT
generation: 5号機
systemType: ノーマルAタイプ + RT（ビーストモード / 暴走モード / 覚醒モード）
coreStatus: COMPLETE_CORE_WITH_DATE_RT_CONFLICT_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、563レコード「アイムジャグラーAPEX」を再取得して開始。
- 開始時正本は recordCount 563 / chronologicalFrontier 2011-03-22。
- LATEST_HANDOFF指定どおり2011-03-23〜03-27境界を再監査し、今回の調査範囲では本機より前に追加すべき未登録5号機を高信頼で確定できなかった。
- repo重複確認で本機未登録を確認。
- K-Naviはホール導入開始2011-03-28。一方パチビーは2011-03-22を掲載し、資料間で日付定義差がある。全国ホール導入の正規化主値はK-Navi 2011-03-28とし、3/22はSOURCE_DATE_DIFFERENCEとして保持する。

## payoutRateBySetting

- 設定1: **97.7%**
- 設定2: **99.7%**
- 設定3: **101.7%**
- 設定4: **105.4%**
- 設定5: **107.9%**
- 設定6: **112.7%**

けんのスロットシミュレーションの公表系列。HAZUSE/K-Navi/P-WORLDのゲーム構造と矛盾なし。
confidence: ANALYSIS_HIGH_CROSSCHECKED_STRUCTURE

## initialHitBySetting

### BIG合算
- 設定1: **1/364**
- 設定2: **1/350**
- 設定3: **1/336**
- 設定4: **1/317**
- 設定5: **1/305**
- 設定6: **1/281**

### REG
- 設定1: **1/753**
- 設定2: **1/728**
- 設定3: **1/705**
- 設定4: **1/669**
- 設定5: **1/636**
- 設定6: **1/585**

### ボーナス合算
- 設定1: **1/245**
- 設定2: **1/237**
- 設定3: **1/228**
- 設定4: **1/215**
- 設定5: **1/206**
- 設定6: **1/190**

confidence: ANALYSIS_HIGH

## baseGamesPer50

- 設定1: **41.52G**
- 設定2: **42.44G**
- 設定3: **43.42G**
- 設定4: **45.66G**
- 設定5: **47.48G**
- 設定6: **50.18G**

けんのスロットシミュレーション掲載値。設定差が大きく、算出条件依存の可能性があるためメーカー公式一次値とは扱わない。
confidence: ANALYSIS_SINGLE_FOR_BASE

## netIncrease

**CONFLICT**

- K-Navi: ビーストモード **約+0.3枚/G**。同ページ系統で暴走/覚醒もほぼ現状維持のRTとして扱う。
- パチビー機種タグ: **約+0.5枚/G** 表記。

RT種別または算出条件差の可能性があるため平均せず保持。主仕様記述ではK-Naviのビーストモード約+0.3枚/Gを採用する。
confidence: CONFLICT_ANALYSIS_DATABASE

## basicPayout

- SUPER BIG: **最大402枚**
- NORMAL BIG: **最大259枚**
- REG: **最大52枚**

K-Navi/HAZUSEで一致。
confidence: ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- REG終了後はRT「ビーストモード」へ必ず突入。
- ビーストモードは最大100G。特殊リプレイで通常へ転落、100G完走で次回ボーナスまで継続する「覚醒モード」へ移行。
- 天井RT「暴走モード」は次回ボーナスまで継続し、条件達成で覚醒モードへ昇格する場合がある。
- 天井条件: **BIG後1000G**、または **ビーストモード終了後800G**。けんの解析ではREG後は「BM終了時から800G」と明記。
- 有利区間制度導入前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_GAME_COUNT_RETAIN_CONFIRMED / OTHER_INTERNAL_STATE_UNVERIFIED**。本機専用解析で「設定変更しても天井までのゲーム数を引き継ぐ」を直接確認。設定変更時のRT種別/RT権利、ビーストモード関連内部状態、その他低レベルRAM状態は直接資料不足のため断定しない。

carryOverBehavior: **CEILING_PROGRESS_RETAIN_ON_SETTING_CHANGE_CONFIRMED**。前日BIG後1000Gまたはビーストモード終了後800Gへ向かう天井進捗は、設定変更でも引き継ぐとされるため宵越し対象となる。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの天井進捗、RT状態、液晶/リール初期状態を本機専用資料で直接確定できず、設定変更時RETAINから類推しない。

gameCounterReset: **RETAIN_ON_SETTING_CHANGE_CONFIRMED**。

ceilingAfterReset: **NO_SHORTENING_CONFIRMED / ORIGINAL_PROGRESS_RETAINED**。設定変更で天井ゲーム数がゼロから再計数されるのではなく、前日進捗を引き継ぐ。設定変更専用短縮天井は確認されない。

modeAfterReset: **NO_LONG_TERM_MODE_SYSTEM_CONFIRMED / RT_RELATED_STATE_UNVERIFIED**。

stateAfterReset: **UNVERIFIED_FOR_RT_STATE**。暴走/覚醒/ビースト中またはその権利保持状態で設定変更した場合の個別処理は、今回確定できる直接本文なし。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **CEILING_CARRYOVER_CAN_ENABLE_MORNING_OVERDAY_CEILING**。設定変更されても天井進捗が残るため、前日ハマリを把握できる場合は朝一の宵越し天井狙いが成立し得る。

resetPenalties: **NONE_CONFIRMED_FOR_CEILING_PROGRESS / OTHER_INTERNAL_STATE_UNVERIFIED**。少なくとも天井進捗消失という不利は確認されない。

resetDetection: **NONE_CONFIRMED_AFTER_RESEARCH**。本機固有のガックン、出目、液晶状態、公開朝一挙動による変更判別を高信頼資料で確定できず。

numericResetData: **CEILING_RETAIN: BIG後1000G / BM終了後800G**。設定変更専用の初期モード振分、朝一当選率等の公開数値は確認されない。

resetBehaviorConfidence: **HIGH_FOR_CEILING_RETAIN / CROSSCHECKED_FOR_CEILING_STRUCTURE / UNVERIFIED_FOR_POWER_CYCLE_AND_RT_STATE**

## conflicts

- releaseDate: **SOURCE_DATE_DIFFERENCE** — K-Navi 2011-03-28、パチビー 2011-03-22。正規化主値は全国ホール導入開始を明示するK-Naviの2011-03-28。平均・中間日採用はしない。
- RT純増: **CONFLICT_DEFINITION** — K-Naviビーストモード約+0.3枚/G、パチビー機種タグ約+0.5枚/G。平均しない。

## missingFields

- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時のRT状態/RT権利処理: **UNVERIFIED_AFTER_RESEARCH**
- 据え置き時のRT状態/低レベルRAM復帰: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更判別（ガックン/出目/液晶）: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更専用の朝一確率/モード振分: **NONE_CONFIRMED_AFTER_RESEARCH**

## researchNote

欠損判定前に「ヱヴァンゲリヲン 真実の翼 / エヴァ 真実の翼 / ビスティ / ヱヴァンゲリヲン・真実の翼G」と「設定変更 / リセット / 据え置き / 電源OFF ON / 朝一 / 天井 / 宵越し / 暴走 / 覚醒 / ビースト / ガックン / 50枚 / 回転数」を組み替え、SANKYO/Bisty公式アーカイブ、K-Navi、P-WORLD、パチビー、HAZUSE、当時/旧解析DBを横断。設定変更時の天井RETAINは本機専用記述が得られたため採用したが、単純電源断やRT内部状態は一般論から補完していない。

## sources — 取得日 2026-09-04

1. SANKYOオンライン博物館「モバスロヱヴァンゲリヲン～真実の翼～」
   - https://www.sankyo-fever.jp/collection/873/
   - 2011.03、ビスティ、型式名「ヱヴァンゲリヲン・真実の翼Ｇ」、ボーナス主体+RT、ビーストモード仕様
   - confidence: OFFICIAL
2. K-Navi「ヱヴァンゲリヲン～真実の翼～」
   - https://p-kn.com/slot/1381/reel/
   - 2011-03-28ホール導入開始、S-BIG/N-BIG/REG獲得、基本構造
   - confidence: ANALYSIS_HIGH
3. K-Navi「ビーストモード(RT)」
   - https://p-kn.com/slot/1381/30110/
   - REG後突入、最大100G、特殊リプレイ転落、100G完走で覚醒、約+0.3枚/G
   - confidence: ANALYSIS_HIGH
4. P-WORLD「モバスロ ヱヴァンゲリヲン～真実の翼～」
   - https://www.p-world.co.jp/machine/database/6269
   - BIG後1000G / ビーストモード終了後800Gで暴走モード、各RT構造
   - confidence: INDUSTRY_DATABASE
5. パチビー「ヱヴァンゲリヲン～真実の翼～」
   - https://www.pachibee.jp/machines/about/211010009
   - 導入日2011-03-22、REG後100Gビースト/覚醒/暴走、機種タグ約+0.5枚/G
   - confidence: INDUSTRY_DATABASE
6. HAZUSE「ヱヴァンゲリヲン～真実の翼～」
   - https://hazuse.com/machine/pachislot/0S1265/
   - 最大402/259/52枚、ビースト/暴走/覚醒、天井あり
   - confidence: HISTORICAL_DATABASE
7. けんのスロットシミュレーション「ヱヴァンゲリヲン-真実の翼- 解析情報」
   - https://kenslo65536.com/kaiseki/eva-shinjitu.html
   - 機械割97.7〜112.7%、BIG/REG/合算、50枚回転数、BIG後1000/REG後BM終了から800、設定変更でも天井ゲーム数RETAIN
   - confidence: HISTORICAL_ANALYSIS_SINGLE_FOR_RESET

## status

- recordNumber: **564**
- chronologicalFrontier: **2011-03-28**
- relayStatus: **READY_TO_CONTINUE**
