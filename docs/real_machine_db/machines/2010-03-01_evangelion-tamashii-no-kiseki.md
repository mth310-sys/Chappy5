# 新世紀エヴァンゲリオン～魂の軌跡～

machineName: 新世紀エヴァンゲリオン～魂の軌跡～
manufacturer: ビスティ
formalModelName: 新世紀エヴァンゲリオン・魂の軌跡A
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-03-01（K-Naviホール導入開始。グリーンべると当時記事は2010-02-28から納品予定。SANKYO公式オンラインミュージアムは2010.02表記）
generation: 5号機
systemType: ボーナス主体 / ノーマル + 天井RT / 技術介入
coreStatus: COMPLETE_CORE_RESET_PARTIAL

## chronologyNote

- 最新mainの README、ミッションv0.7、旧INDEX、LATEST_HANDOFF、直前レコード「みどりのマキバオー」を再取得してから継続。
- 開始時点は recordCount 459 / chronologicalFrontier 2010-02-22。
- 2010-02-22同日群と2010-02-23〜月末境界を再監査。KPE「スパイガール」はK-Naviに2010-02-22表記がある一方、パチビーは2010-04-19、他複数DBも2010-04導入で一致するため、2月機としては採用せず日付CONFLICT候補として後続監査へ回した。
- 本機はグリーンべるとが2010-02-28納品予定、K-Naviが2010-03-01ホール導入開始、メーカー系公式ミュージアムが2010.02と記録。物流開始 / ホール導入 / 月粒度の定義差として保持し、本DB releaseDate は具体的ホール導入開始の2010-03-01を採用。
- repo検索で本機未登録を再確認してから460件目として追加。

## payoutRateBySetting

**CONFLICT — 平均しない。**

### P-WORLD掲載系列
- 設定1: **96.5%**
- 設定2: **98.8%**
- 設定3: **102.2%**
- 設定4: **105.3%**
- 設定5: **107.9%**
- 設定6: **112.6%**

### 旧解析整理系列（kenslo）
- 設定1: **97.6%**
- 設定2: **99.4%**
- 設定3: **102.1%**
- 設定4: **105.0%**
- 設定5: **107.5%**
- 設定6: **112.1%**

算出条件差を今回確定できないため平均せず両系列を保持する。

confidence: CONFLICT

## initialHitBySetting

### BIG合算
- 設定1: **1/370.3**
- 設定2: **1/360.1**
- 設定3: **1/344.9**
- 設定4: **1/329.3**
- 設定5: **1/318.1**
- 設定6: **1/291.3**

### REG
- 設定1: **1/744.7**
- 設定2: **1/720.2**
- 設定3: **1/697.2**
- 設定4: **1/662.0**
- 設定5: **1/630.2**
- 設定6: **1/580.0**

### ボーナス合算
- 設定1: **1/247.3**
- 設定2: **1/240.1**
- 設定3: **1/230.8**
- 設定4: **1/219.9**
- 設定5: **1/211.4**
- 設定6: **1/193.9**

P-WORLDの精密REG/合算と複数旧解析の丸め系列が整合。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_ROUNDED_CORROBORATION

## baseGamesPer50

- 設定1: **42.24G / 50枚**
- 設定2: **43.49G / 50枚**
- 設定3: **45.13G / 50枚**
- 設定4: **47.21G / 50枚**
- 設定5: **49.16G / 50枚**
- 設定6: **51.45G / 50枚**

本機名・正式型式・1000円・50枚・ベース・コイン持ち・小役等へ検索語を変えて再探索し、比較可能な設定別直接値はkenslo旧解析で回収。今回別系統の同一精度表を確定できなかったため単一解析扱い。

confidence: ANALYSIS_SINGLE

## netIncrease

**CONFLICT — RT純増は平均しない。**

P-WORLD詳細:
- 暴走モード: **約+0.3枚/G**
- 覚醒モード: **約+0.5枚/G**
- カヲル覚醒モード: **約+0.5枚/G**

旧解析資料には暴走 **約+0.2枚/G**、覚醒 **約+0.35枚/G** とする系列が存在。算出条件または解析時期差を確定できないため両方を保持し、P-WORLD系列を主表示とする。

confidence: CONFLICT

## basicPayout

- SUPER BIG: **最大415枚**
- NORMAL BIG: **最大259枚**
- REG: **約104枚**

SANKYO公式オンラインミュージアム、当時グリーンべると、P-WORLD、K-Naviで照合。

confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## modeSpecificMinimumData

- 通常時はボーナス主体。通常ゲーム数でボーナスを解除するモード型ではない。
- BIG後 **1000G+α**、REG後 **800G+α** のボーナス間ハマリで天井RTへ移行し、基本的に次回ボーナスまで継続。
- 天井RTは暴走・覚醒・カヲル覚醒の複数系統があり、純増値は資料差があるため `netIncrease` でCONFLICT保持。
- 技術介入要素を持つが、完全再現用の小役全確率・手順別詳細は本DB対象外。

confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED — CEILING_PROGRESS_CARRIES_OVER_ON_SETTING_CHANGE**。パチ＆スロ必勝本の本機専用解析で「設定変更しても天井までのゲーム数はリセットされず引き継ぐ」と明記。旧解析資料でも同挙動を照合。

carryOverBehavior: **PARTIAL_CONFIRMED — CEILING_PROGRESS_CAN_BE_CARRIED_OVER / 宵越し対象**。K-Naviが本機を「宵越アリ」と扱い、設定変更時でさえ天井進捗が保持される解析とも整合。内部状態全般の据え置き挙動までは拡張せず、天井進捗の範囲だけ確認済みとする。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。`電源OFF→ON / 電源入切 / 電断 / 復帰 / 朝一 / 電源`を機種名・正式名・メーカー名と組み合わせ、当時解析・旧DB・回顧資料まで再探索したが、単純電源OFF→ONだけを設定変更/据え置きと区別する本機固有の直接本文を確定できず。

gameCounterReset: **CARRY_OVER_ON_SETTING_CHANGE_CONFIRMED_MULTI_SOURCE**。BIG後1000G+α / REG後800G+αの天井進捗は設定変更でも引き継ぐ。

ceilingAfterReset: **NO_RESET_SHORTENING_CONFIRMED / SAME_CEILING_WITH_PROGRESS_CARRY_OVER**。設定変更でゼロから数え直す短縮天井ではなく、前日までの進捗をそのまま保持して通常のBIG後1000G+α / REG後800G+α天井を目指す。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。通常ゲーム数解除型のモード構造は確認されない。設定変更専用モード振分も確認なし。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更/据え置き/電源復帰時にRT内部状態そのものをどう処理するかは、本機固有の直接資料を今回確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **CEILING_PROGRESS_PRESERVED / MORNING_CARRYOVER_VALUE_EXISTS**。設定変更でも天井進捗が消えないため、前日深いハマリ台は朝一でも宵越し天井狙い価値を残しうる。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。少なくとも天井進捗消失という不利は確認されない。設定変更固有の別ペナルティは十分な再探索後も確定できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / リールガックン / 初期出目 / 出目変化 / 液晶 / ランプ / 設定変更判別 / 据え置き判別`まで検索語を変えたが、本機固有の高信頼な変更判別方法を確定できず。

numericResetData:
  bigCeiling: **1000G+α after BIG**
  regCeiling: **800G+α after REG**
  settingChangeCeilingCounter: **CARRY_OVER**
  carryOverMorningCeiling: **SUPPORTED / 宵越し対象**
  resetShortenedCeiling: **NONE_CONFIRMED**
  publishedResetModeDistribution: **NOT_APPLICABLE / NONE_CONFIRMED**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_CONFIRMED_CEILING_CARRYOVER_OTHER_FIELDS_RESEARCHED

## conflicts

- 機械割: P-WORLD `96.5 / 98.8 / 102.2 / 105.3 / 107.9 / 112.6%` と旧解析整理 `97.6 / 99.4 / 102.1 / 105.0 / 107.5 / 112.1%` が競合。平均せず保持。
- RT純増: P-WORLD詳細の暴走約+0.3 / 覚醒系約+0.5枚/Gに対し、旧解析には暴走約+0.2 / 覚醒約+0.35枚/Gの系列あり。平均せず保持。
- releaseDateは単純な競合ではなく定義差として扱う。メーカー系公式は2010.02、当時業界記事は2010-02-28納品予定、K-Naviは2010-03-01ホール導入開始。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning hit rate / benefit rate: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. SANKYO公式オンラインミュージアム「新世紀エヴァンゲリオン～魂の軌跡～」 — https://www.sankyo-fever.jp/collection/871/ — ビスティ、導入年月2010.02、正式型式、SBB最大415枚/NBB259枚、天井RT — reliability: OFFICIAL
2. グリーンべると「エヴァ第4弾、ボーナス主体で登場」 — https://web-greenbelt.jp/00002540/ — 2010-02-18記事、2月28日納品予定、SBB最大415枚、3種RT — reliability: INDUSTRY
3. P-WORLD「新世紀エヴァンゲリオン～魂の軌跡～」 — https://www.p-world.co.jp/machine/database/5818 — 設定別機械割、REG/合算、基本獲得、天井、RT純増 — reliability: INDUSTRY_DATABASE
4. K-Navi「新世紀エヴァンゲリオン～魂の軌跡～」 — https://p-kn.com/slot/1161/ — ホール導入開始2010-03-01、ボーナス性能、宵越アリ — reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本「設定変更時」 — https://p.hisshobon.jp/machine/1534/1/23257 — 設定変更しても天井までのゲーム数を引き継ぐ、BIG後1000G/REG後800G — reliability: ANALYSIS_HIGH
6. eva.man-soft「設定判別・確率」 — https://eva.man-soft.com/04/decision.html — BIG/REG/合算の設定別系列照合 — reliability: ANALYSIS_SECONDARY
7. kenslo「エヴァ魂の軌跡 解析」 — https://kenslo65536.com/kaiseki/eva-tamashii.html — 設定別50枚ベース、別機械割系列、設定変更時天井引継ぎ — reliability: ANALYSIS_SECONDARY
8. FutureScope / Fields告知 — https://prtimes.jp/main/html/rd/p/000000007.000001932.html — 2010年3月以降全国ホール順次導入のメーカー系告知 — reliability: OFFICIAL_PR
