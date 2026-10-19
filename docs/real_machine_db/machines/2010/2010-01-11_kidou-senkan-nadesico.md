# パチスロ 機動戦艦ナデシコ

machineName: パチスロ 機動戦艦ナデシコ
manufacturer: SANKYO
formalModelName: 機動戦艦ナデシコ
approvalNumber: 9S1035
releaseDate: 2010-01-11
generation: 5号機
systemType: ノーマル / ボーナス+RT / 天井RT
coreStatus: PARTIAL_BASE_GAMES_PER_50_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 438件「マジカルハロウィン2」地点から継続。
- 追加前にrepo既存検索と実ファイルパス確認を行い未登録を確認。
- HAZUSEは導入開始日を2010-01-11、SANKYO公式アーカイブは2010年1月（月精度）とするため、具体日2010-01-11を採用。

## payoutRateBySetting

- 設定1: 97.8%
- 設定2: 99.7%
- 設定3: 102.9%
- 設定4: 105.8%
- 設定5: 109.1%
- 設定6: 113.0%

P-WORLD、pacnk、当時系整理資料で同一系列を確認。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG合算
- 設定1: 1/374（精密値資料 1/374.50）
- 設定2: 1/364（1/364.10）
- 設定3: 1/343（1/343.10）
- 設定4: 1/330〜1/331（精密値資料 1/331.00）
- 設定5: 1/312（1/312.10）
- 設定6: 1/291（1/291.30）

### REG
- 設定1: 1/744（精密値資料 1/744.70）
- 設定2: 1/720（1/720.20）
- 設定3: 1/682（1/682.70）
- 設定4: 1/648（1/648.90）
- 設定5: 1/618（1/618.30）
- 設定6: 1/560（1/560.10）

### ボーナス合算
- 設定1: 1/249
- 設定2: 1/241
- 設定3: 1/228
- 設定4: 1/219
- 設定5: 1/207
- 設定6: 1/191

SANKYO公式アーカイブの丸め値を主系列とし、pacnkの精密値で照合。設定4 BIGの330/331差は丸め・表記精度差として保持し、平均化しない。

confidence: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

`パチスロ 機動戦艦ナデシコ / 機動戦艦ナデシコ / 9S1035 / SANKYO` と `50枚 / 1000円 / ベース / コイン持ち / 回転数 / 33G / 34G` を組み替え、公式、P-WORLD、HAZUSE、パチマガスロマガ、pacnk、旧解析・回顧資料を横断したが比較可能な50枚ベースを確定できなかった。ベル確率等から逆算しない。

confidence: UNVERIFIED

## netIncrease

- RT「ゲキガンモード」: **約+0.3枚/G**、次回ボーナス成立まで継続
- RT「超ゲキガンモード」: **約+0.6枚/G**、次回ボーナス成立まで継続

P-WORLD、HAZUSEで一致。SANKYO公式も純増が異なる2種の次回ボーナスまで継続RTであることを確認。

confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_OFFICIAL_SYSTEM

## basicPayout

- SUPER BIG（赤7/青7同色）: 約448枚
- SUPER BIG（黄7同色）: 約402枚
- NORMAL BIG（青7・青7・赤7）: 約259枚
- REG（赤7・赤7・青7）: 約116枚

P-WORLD、HAZUSEで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常はボーナス主体で、特殊リプレイ入賞からRTへ突入。
- 「ゲキガンモード」は約+0.3枚/G、「超ゲキガンモード」は約+0.6枚/Gで、いずれもボーナス成立まで継続。
- BIG後1000G、REG後800G消化で天井状態へ移行し、特殊リプレイ確率が大幅アップする。
- 天井到達そのものがボーナス当選を保証する仕様ではなく、RT突入機会を高める天井状態として区別する。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **GAME_COUNTER_RETAIN_CONFIRMED**。旧解析slot-naviは「設定変更時もゲーム数を引き継ぐので、宵越し天井が狙える」と明記。pacnkも「設定変更後もゲーム数を引き継ぐ」と掲載。BIG後1000G / REG後800Gの天井進捗について、設定変更でクリアされないことを採用する。

carryOverBehavior: **CEILING_GAME_COUNT_RETAIN**。設定変更でも天井ゲーム数を引き継ぐため、据え置き時も前日ゲーム数を利用した宵越し狙いが可能という当時解析の立ち回り記述を確認。ただし、通常ステージやRT状態等の全内部状態まで同一に保持すると拡張解釈しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみで天井ゲーム数、RT状態、通常ステージ等がどう扱われるかを本機固有の直接資料で確定できなかった。

gameCounterReset: **RETAIN_ON_SETTING_CHANGE**。BIG後1000G / REG後800Gの天井ゲーム数は設定変更後も引継ぎ。

ceilingAfterReset: **NO_RESET_SPECIFIC_SHORTENING_CONFIRMED**。通常のBIG後1000G / REG後800Gがそのまま引継がれる。設定変更専用の短縮天井値は確認されない。

modeAfterReset: **NOT_APPLICABLE_FOR_LONG_TERM_GAME_MODE / UNVERIFIED_FOR_OTHER_INTERNAL_STATE**。ゲーム数解除型の通常モードテーブルは確認されない。特殊リプレイ確率が上がる天井状態以外の設定変更専用モード振り分けは確認できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。RT滞在、天井状態、通常ステージ等の設定変更時処理をゲーム数引継ぎ以外まで直接確定できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **CARRYOVER_CEILING_VALUE**。設定変更でも天井ゲーム数を引き継ぐため、前日ハマリが朝一の宵越し天井狙い価値として残る。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の不利な短縮解除・ペナルティ等は確認できない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / ステージ / ランプ / 変更判別` を含め再探索したが、本機固有の設定変更判別法を確定できなかった。

numericResetData:
  normalCeilingAfterBIG: 1000G → 特殊リプレイ確率大幅アップの天井状態
  normalCeilingAfterREG: 800G → 特殊リプレイ確率大幅アップの天井状態
  settingChangeGameCounter: RETAIN
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_WITH_CEILING_CARRYOVER_CROSSCHECKED

## conflicts

- BIG設定4はSANKYO公式丸め表記1/330に対し、pacnk精密値1/331.00。設定別系列全体は整合しており、表記精度差として双方を保持。
- 5号機クロニクルの現行SANKYO一覧には本機を「ボーナス非搭載ART特化 / ナデシコラッシュ約+1.4枚/G」とする記述があるが、SANKYO公式、P-WORLD、HAZUSE、pacnkが示す本機のボーナス+RT仕様と根本的に矛盾する。この記述は別機種情報混入の可能性が高いため、本機性能値として採用せず REJECTED_SOURCE_CONFLICT として記録する。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change handling of RT/current internal state beyond ceiling game count: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode distribution / morning hit rate / benefit rate: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. SANKYOオンライン博物館「パチスロ 機動戦艦ナデシコ」 — https://www.sankyo-fever.jp/collection/534/ — 2010.01、ボーナス+2種RT、設定別BB/RB/合算 — reliability: OFFICIAL
2. HAZUSE「パチスロ機動戦艦ナデシコ」 — https://hazuse.com/machine/pachislot/9S1035/ — 型式、検定9S1035、2010-01-11、ボーナス・RT・天井 — reliability: ANALYSIS_DATABASE
3. P-WORLD「パチスロ機動戦艦ナデシコ」 — https://www.p-world.co.jp/machine/database/5771 — ボーナス獲得枚数、RT純増、天井、設定別機械割・確率 — reliability: MAJOR_DATABASE
4. pacnk「パチスロ 機動戦艦ナデシコ 設定判別ツール」 — https://pacnk.com/slot/tools/sh_nadesiko.html — 精密確率、機械割、BIG後1000G/REG後800G、設定変更後ゲーム数引継ぎ — reliability: ANALYSIS_DATABASE
5. slot-navi「パチスロ 起動戦艦ナデシコ 解析・攻略」 — https://slot-navi.com/10/nadesico/ — 設定変更時もゲーム数引継ぎ、宵越し天井可 — reliability: OLD_ANALYSIS
6. パチマガスロマガ「パチスロ機動戦艦ナデシコ」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/20/sankyo_slot_20.php — 天井RT・攻め時/ヤメ時/設定変更時の解析項目存在を確認 — reliability: CONTEMPORARY_ANALYSIS
7. 5号機クロニクル SANKYO一覧 — https://5goki.com/sankyo — 本機欄に公式等と根本矛盾するART特化記述があるため性能値として不採用 — reliability: REJECTED_SOURCE_CONFLICT
