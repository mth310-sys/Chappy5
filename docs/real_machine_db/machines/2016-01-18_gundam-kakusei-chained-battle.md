# パチスロ 機動戦士ガンダム 覚醒 -Chained battle-

machineName: パチスロ 機動戦士ガンダム 覚醒 -Chained battle-
manufacturer: ビスティ
releaseDate: 2016-01-18
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 947
generation: 5号機 / A+ART
systemType: ボーナス+ART / CZ経由ART / 継続率上乗せ型
formalModelName: パチスロ 機動戦士ガンダム・覚醒CB
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCHED

## identity
- SANKYOオンライン博物館（ビスティブランド公式アーカイブ）は導入年月 **2016.01**、販売名（型式名） **パチスロ 機動戦士ガンダム・覚醒CB** と記録。
- K-Navi、ちょんぼりすた、当時スペック記事はホール導入開始 **2016-01-18** で一致。
- 当時業界系記事は納期を **2016-01-17(日)～予定** としており、納品予定日とホール導入日を分離して扱う。
- 検定番号は、機種名表記揺れ・正式型式・メーカー名・「検定」「検定番号」「5S」等へ検索語を変え、公式アーカイブ、当時解析、旧DBを横断したが今回安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.8% |
| 3 | 101.7% |
| 4 | 103.8% |
| 5 | 109.0% |
| 6 | 113.0% |

- ちょんぼりすた、当時スペック記事、複数解析資料で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要初当たりとしてART「G-DRIVE」初当たりを保存し、ボーナス合算は別定義として併記。

| 設定 | ART初当たり | ボーナス合算 |
|---:|---:|---:|
| 1 | 1/560.7 | 1/256.0 |
| 2 | 1/538.4 | 1/254.0 |
| 3 | 1/492.3 | 1/243.6 |
| 4 | 1/454.6 | 1/239.2 |
| 5 | 1/414.3 | 1/229.1 |
| 6 | 1/380.0 | 1/223.7 |

- 当時スペック記事、man-soft、ちょんぼりすたの同系列を照合。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約32G/50枚**。
- ちょんぼりすた、man-softで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「G-DRIVE」: **約1.5枚/G**。
- ボーナス込みのART区間トータル表現として **約2.0枚/G** とする解析もあるため、1.5枚/GのART単体純増と混同しない。
- P-WORLD、ちょんぼりすた等でART単体約1.5枚/Gを確認。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- SUPER BIG BONUS: **300枚**。
- BIG BONUS: **150枚**。
- REGULAR BONUS: **48枚**。
- ART「G-DRIVE」: **1セット40G+α**、約1.5枚/G。
- P-WORLD、ちょんぼりすた、公式系/解析資料で整合。

## modeSpecificMinimumData
- ボーナス間 **999G+前兆最大32G** で天井。ARTを挟んでもボーナス間カウントは継続し、到達時はART当選確定CZをストック。
- 液晶左にボーナス間G数を表示する解析がある。
- 通常時はゲーム数消化によるCZ抽選があり、**333G / 555G / 777Gで全設定共通30.3%** のCZ当選率が公開されている。
- CZ「ニュータイプチャレンジ」は10G、ART期待度約40%。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE_WITH_POWER_CYCLE_STAGE_CONFLICT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 天井/ボーナス間G数: **RESET / RESELECT**。
- 内部状態: **RESELECT**。
- 液晶ステージ: **ブリッジ**。
- ちょんぼりすた、man-soft、期待値見える化で方向性一致。

### carryOverBehavior
- 据え置き（設定変更なし）ではボーナス間天井G数と内部状態を **CARRYOVER** とする資料が一致。
- ゲーム数ゾーンのフェイク前兆について、期待値見える化は据え置きでも **当日G数基準** で発生すると整理している。このためゾロ目付近のフェイク前兆だけでは変更判別できない。
- 液晶ステージの据え置き/電源再投入時挙動は資料競合があるため、下記 `powerCycleBehavior` / `conflicts` に分離。

### powerCycleBehavior
- 天井/ボーナス間G数: **CARRYOVER**。
- 内部状態: **CARRYOVER**。
- 液晶ステージ: **CONFLICT**。
  - ちょんぼりすた: 電源ON・OFF時 **引き継ぐ**。
  - 期待値見える化: 電源OFF→ON（据え置き）でも **ブリッジ**。
  - man-softは電源ON/OFF欄で天井・内部状態の引継ぎを示すが、取得できた本文ではステージの電断側値を安全に固定できない。
- よって液晶ステージを純電断判別の確定契約として採用しない。

### gameCounterReset
- normalBonusCeiling: **999G+前兆最大32G**。
- settingChangeGameCounter: **RESET**。
- carryOverGameCounter: **CARRYOVER**。
- purePowerCycleGameCounter: **CARRYOVER**。
- ART当選/消化ではボーナス間天井カウントの主条件はリセットされない。

### ceilingAfterReset
- 設定変更で通常のボーナス間999G天井進捗は0から再スタート。
- 設定変更専用の短縮天井は、表記揺れ・正式型式・「リセット/朝一/設定変更/天井短縮/据え置き」等で再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時の333/555/777G CZ抽選は公開されているが、設定変更専用短縮天井とは別契約。

### modeAfterReset
- 本機でリセット専用の独立モードや公開モード振り分けは今回確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常時のゲーム数CZ抽選・前兆挙動は存在するが、全モード移行テーブルは物差しDB対象外。
- 期待値見える化ではフェイク前兆は設定変更/据え置きとも当日G数基準とされる。

### stateAfterReset
- settingChangeInternalState: **RESELECT**。
- carryOverInternalState: **CARRYOVER**。
- purePowerCycleInternalState: **CARRYOVER**。
- 設定変更時の低確/高確等の具体的初期振り分けは、当時解析でも「朝イチの状態による恩恵などは調査中」とされ、今回の再探索でも固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮や固定朝一優遇率は **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- 内部状態は再抽選されるが、その朝一振り分けが未確認のため優遇/不利を数値化しない。
- 前日深くハマったボーナス間天井進捗は設定変更で消失するため、宵越し天井狙いの観点では据え置きより不利になり得る。

### resetPenalties
- 前日のボーナス間天井G数は設定変更で **RESET**。
- 前日の内部状態は設定変更で引き継がない。
- リセット専用の公開された追加ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更時はブリッジ開始で複数資料が一致。
- ちょんぼりすたは「夕方/夜などブリッジ以外スタートなら据え置き濃厚」とする一方、期待値見える化は純電断据え置きでもブリッジ開始とするため、**朝一ブリッジ単独では変更判別に使わない**。
- 期待値見える化によれば、フェイク前兆は据え置きでも当日G数基準なので、当日333/555/777相当のフェイク前兆だけでは判別不可。
- 一方、前日+当日の宵越しゾロ目到達時に契機役なしで前兆が始まれば、据え置き+CZ当選の強い材料になるという解析がある。
- 本機固有のリールガックン確定契約は、機種名/型式/メーカー+「ガックン/設定変更判別」等で再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- settingChange dedicated shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- settingChange initial-state distribution: **UNVERIFIED_AFTER_RESEARCH**。
- reset-only fixed morning hit probability: **UNVERIFIED_AFTER_RESEARCH**。
- settingChange dedicated mode distribution: **UNVERIFIED_AFTER_RESEARCH**。
- 通常時の333/555/777G CZ当選率 **30.3%** はリセット専用数値ではないため、参考値として `modeSpecificMinimumData` に保持し、numericResetDataには混ぜない。

## conflicts
- `POWER_CYCLE_STAGE_CONFLICT`:
  - ちょんぼりすた: 電源ON/OFF時の液晶ステージ **引き継ぐ**。
  - 期待値見える化: 電源OFF→ON（据え置き）の液晶ステージ **ブリッジ**。
  - 平均化・片側採用をせずCONFLICT保持。
- `RESET_DETECTION_STAGE_CONFLICT`: 上記競合のため「ブリッジ以外なら据え置き濃厚」という当時解析は参考情報として保持するが、DBの確定判別契約には昇格させない。

## missingFields
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange dedicated shortened ceiling: NONE_CONFIRMED_AFTER_RESEARCH
- settingChange initial-state numeric distribution: UNVERIFIED_AFTER_RESEARCH
- reset-only fixed morning hit probability: UNVERIFIED_AFTER_RESEARCH
- settingChange dedicated mode distribution: UNVERIFIED_AFTER_RESEARCH
- manufacturer-guaranteed gakkun/change-detection contract: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. SANKYOオンライン博物館 — パチスロ 機動戦士ガンダム 覚醒 -Chained battle-
   - https://www.sankyo-fever.jp/collection/884/
   - ビスティブランド、導入年月2016.01、販売名（型式名）パチスロ 機動戦士ガンダム・覚醒CB。
   - reliability: OFFICIAL
2. K-Navi — パチスロ機動戦士ガンダム 覚醒-Chained battle-
   - https://p-kn.com/slot/2410/
   - 2016-01-18ホール導入開始、A+ART分類。
   - reliability: ANALYSIS_HIGH
3. ちょんぼりすた — 機動戦士ガンダム覚醒 スロット｜解析完全攻略
   - https://chonborista.com/slot/bisty-slot/14990/
   - 設定別機械割/ART初当たり/ボーナス、約32G/50枚、純増、999G+最大32G天井、設定変更/電断表、朝一ステージ、通常ゲーム数CZ数値。
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE
4. 期待値見える化 — ガンダム覚醒 天井・ゾーン・やめどき・朝一リセット解析
   - https://slotjin.com/zone/gundam-kakusei/
   - 設定変更/据え置きの天井・内部状態・フェイク前兆・ステージ比較、宵越しゾロ目判別。
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE
5. man-soft — スロット 機動戦士ガンダム 覚醒 解析攻略まとめ
   - https://smaslo.man-soft.com/slot-kaiseki/gundam-kakusei.html
   - 導入日、約32G/50枚、設定別性能、設定変更/電源ON-OFFの天井・内部状態。
   - reliability: ANALYSIS_HIGH
6. P-WORLD — パチスロ 機動戦士ガンダム 覚醒‐Chained battle‐
   - https://www.p-world.co.jp/machine/database/7936
   - ビスティ、5号機A+ART、SBB300枚/BIG150枚/REG48枚、G-DRIVE 40G+α・約1.5枚/G。
   - reliability: INDUSTRY_DATABASE
7. パチンコ・パチスロ.com — 当時スペック詳細記事
   - https://pachinkopachisro.com/archives/46238096.html
   - 納期2016-01-17予定、設定別ボーナス合算/ART初当たり/出率。
   - reliability: INDUSTRY_SECONDARY_CONTEMPORARY
8. FIELDS公式サイト — パチスロ 機動戦士ガンダム 覚醒-Chained battle-
   - https://gundam-ps.jp/
   - 公式機種サイト現存確認。
   - reliability: OFFICIAL_CONTEXT

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_OFFICIAL_MONTH
- identity/formalModel: OFFICIAL
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- carryOverGameCounterInternalState: ANALYSIS_HIGH_MULTI_SOURCE
- powerCycleGameCounterInternalState: ANALYSIS_HIGH_MULTI_SOURCE
- powerCycleStage: CONFLICT
- resetDetection: ANALYSIS_HIGH_WITH_STAGE_CONFLICT
- numericResetData: UNVERIFIED_AFTER_RESEARCH_NO_DIRECT_RESET_NUMERIC_TABLE
