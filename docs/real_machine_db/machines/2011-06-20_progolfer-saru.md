# プロゴルファー猿

machineName: プロゴルファー猿
manufacturer: スパイキー
modelName: プロゴルファー猿B
inspectionNumber: 1S0198
releaseDate: 2011-06-20
releaseDateStatus: CONFLICT_EXACT_DATE; 必勝本=2011-06-20導入 / K-Navi=2011-06-27ホール導入開始 / P-WORLD=2011-06導入開始

generation: 5号機
systemType: ART特化 / ゲーム数上乗せART + CZ + 規定ゲーム数ART発動
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainの recordCount 580 / chronologicalFrontier 2011-06-20 から同日群を監査し、machine一覧に「プロゴルファー猿」相当レコードが存在しないことを確認して581件目として追加。
- 導入日はパチ＆スロ必勝本が **2011-06-20導入**、K-Naviが **2011-06-27ホール導入開始**、P-WORLDが **2011年06月導入開始**。06-20と06-27の差を納品日等と断定できる一次資料は今回回収できなかったため、単なる定義差として処理せず **CONFLICT_EXACT_DATE** として保持する。
- 本DBの時系列漏れ防止上は、確認できた最古具体日である **2011-06-20** を主releaseDateとして採用する。

## payoutRateBySetting

- 設定1: **96.9%**
- 設定2: **98.2%**
- 設定3: **99.5%**
- 設定4: **104.2%**
- 設定5: **107.3%**
- 設定6: **113.3%**

- 2-9伝説と後年5号機一覧で同一値を照合。
- P-WORLDは機械割レンジを **96.96%〜113.3%** と掲載しており、設定1のみ96.9%との小数精度差がある。平均化せず精度差注記として保持する。
confidence: ANALYSIS_HIGH_CROSSCHECKED_SECONDARY; P-WORLD_RANGE_PRECISION_NOTE

## initialHitBySetting

### ART「雷電BONUS」初当たり
- 設定1: **1/196**
- 設定2: **1/191**
- 設定3: **1/186**
- 設定4: **1/159**
- 設定5: **1/146**
- 設定6: **1/128**

K-Navi、パチ＆スロ必勝本、2-9伝説で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

### VICTORY BONUS
- 全設定共通合算: **1/32768**（パチ＆スロ必勝本）
confidence: CONTEMPORARY_ANALYSIS_SINGLE

## baseGamesPer50

パチマガスロマガ旧解析「小役確率」の1000円あたりゲーム数:
- 設定1: **34.28G**
- 設定2: **34.29G**
- 設定3: **34.31G**
- 設定4: **34.32G**
- 設定5: **34.54G**
- 設定6: **35.46G**

confidence: CONTEMPORARY_ANALYSIS_HIGH

## netIncrease

- ART「雷電BONUS」: **約+2.0枚/G**
- K-Navi、P-WORLD、パチ＆スロ必勝本で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- VICTORY BONUS: **48枚**（P-WORLD）
- ART「雷電BONUS」: 7揃いから開始し、突入時の初期ゲーム数は **最大360G / 平均約60G**（パチ＆スロ必勝本）
- 上乗せゾーン「ビクトリーロード」: **最大3G継続 / 最大600G上乗せ**（K-Navi・必勝本）

confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART特化型。通常時の抽選または規定ゲーム数消化からART「雷電BONUS」へ突入。
- P-WORLDで規定ゲーム数側の5テーブルを確認:
  - ドリーム: **108G**
  - 天国: **216G**
  - 準備: **540G**
  - 通常A: **1080G**
  - 通常B: **1188G**
- P-WORLDは上記ゲーム数テーブルとは別に、通常時抽選に関わる **4種類の内部モード** があることも記載。両者を同一モードとして混同しない。
- K-Navi掲載ページにはX-ZONE(CZ)、雷電BONUS、設定変更後挙動、設定変更時モード移行率の解析項目が存在する。

## resetBehavior — v0.7

settingChangeBehavior: **GAME_COUNT_RESET_AND_MODE_RESELECT_CONFIRMED_BY_SECONDARY_SOURCES**。2-9伝説は「設定変更で天井G数リセット」、旧天井狙い資料は「設定変更時モード再セット」と記載。K-Naviにも本機専用「設定変更後の挙動」「モード移行率(設定変更時)」項目の存在を確認したが、今回その数値本文は回収できなかった。

carryOverBehavior: **UNVERIFIED_EXPLICIT_MACHINE_SPECIFIC_CARRYOVER_AFTER_RESEARCH**。旧天井狙い資料の「宵越し×」は設定変更を挟む場合の狙いに不向きであることと整合するが、純粋な据え置き時にゲーム数・モードがどの粒度で保持されるかを直接記した本機固有本文は今回確定できず、一般則で補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式名/スパイキーと「電源OFF ON / 電源投入 / 電断 / 据え置き / 朝一」を組み替えて探索したが、設定変更を伴わない単純電源OFF→ON時のゲーム数・モード・液晶状態を確定できる本機固有資料を回収できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE**。設定変更で天井G数リセット。前日の深い規定G数進捗は設定変更を受けると失われる。

ceilingAfterReset: **NO_FIXED_RESET_ONLY_SHORTENED_CEILING_CONFIRMED; GAME_TABLE_IS_RESELECTED**。リセット専用に固定された短縮天井は確認できない。一方、設定変更時にモード/ゲーム数テーブルが再セットされるため、選択先によって108/216/540/1080/1188Gの規定G数上限が異なる。設定変更時の具体振り分け数値は今回未回収。

modeAfterReset: **RESELECT_ON_SETTING_CHANGE; NUMERIC_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。旧天井狙い資料で設定変更時モード再セットを確認。K-Naviには「モード移行率(設定変更時)」解析項目が存在するが、数値本文の直接取得に至らず推測しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時の内部状態そのものはK-Navi/P-WORLD系資料で確認できるが、設定変更時の状態再抽選/引継ぎを直接示す値・本文を今回確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **POTENTIAL_SHORT_GAME_TABLE_AFTER_MODE_RESELECT; RATE_UNVERIFIED**。設定変更後の再セット先には108G/216G/540G等の短い規定G数テーブルが存在するため、朝一に早い規定G数発動となる可能性はある。ただし設定変更時の振り分け率を直接取得できていないため、恩恵発生率や期待値は記載しない。

resetPenalties: **PREVIOUS_GAME_COUNT_PROGRESS_LOST_ON_SETTING_CHANGE**。前日までの規定G数/天井進捗は設定変更でリセットされるため、深いハマリの宵越し価値を失う。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶カウンター、ステージ、ランプ等による設定変更/据え置き判別を機種固有資料として確定できず。

numericResetData:
- 設定変更時ゲーム数: **RESET/CLEAR**
- 規定G数テーブル上限: **108 / 216 / 540 / 1080 / 1188G**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**（K-Naviに専用解析項目の存在は確認）
- 固定リセット短縮天井: **NONE_CONFIRMED**
- 朝一特定G以内当選率/期待度: **UNVERIFIED_AFTER_RESEARCH**
- ガックン等の変更判別数値: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; GAME_COUNT_CLEAR_AND_MODE_RESELECT_SUPPORTED, POWER_CYCLE/CARRYOVER/DETECTION/NUMERIC_RESET_DISTRIBUTION_UNVERIFIED**

## conflicts

- 導入日: パチ＆スロ必勝本 **2011-06-20導入** / K-Navi **2011-06-27ホール導入開始**。P-WORLDは **2011-06** の月単位。06-20/06-27の差を納品/全国導入等の定義差と確定できる一次資料を回収できなかったため **CONFLICT_EXACT_DATE**。
- 機械割設定1の表示精度: 複数二次資料 **96.9%** / P-WORLDレンジ下限 **96.96%**。丸め精度差として双方を保持し、平均化しない。

## missingFields

- explicit carryOverBehavior on pure 据え置き: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- setting-change numeric mode distribution: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- public numeric morning-only probability/expectation: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「プロゴルファー猿 / プロゴルファー猿B / Spiky / スパイキー」と「導入 / 2011年6月 / 機械割 / ART初当たり / 1000円 / 50枚 / ベース / 天井 / 規定ゲーム数 / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電源投入 / モード移行率 / ガックン / 型式 / 検定」を組み替え、K-Navi、P-WORLD、パチ＆スロ必勝本、パチマガスロマガ旧解析、旧天井狙いDB、後年解析/回顧資料を横断。性能コアは複数資料で照合。設定変更でのゲーム数リセットとモード再セットまでは確認したが、純粋据え置き、単純電源サイクル、変更判別、設定変更時モード振り分けの直接本文/数値は十分な再探索後も確定できず、一般的な5号機挙動から補完していない。

## sources — 取得日 2026-09-04

1. K-Navi「プロゴルファー猿」
   - https://p-kn.com/slot/1421/
   - 2011-06-27ホール導入開始、ART初当たり、純増約2枚/G、ART/CZ概要、設定変更後挙動・設定変更時モード移行率の専用解析項目を確認
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
2. P-WORLD「プロゴルファー猿」
   - https://www.p-world.co.jp/machine/database/6361
   - スパイキー、5号機ART/CZ/天井、純増約2.0枚/G、VICTORY BONUS 48枚、規定G数108/216/540/1080/1188G、型式名「プロゴルファー猿B」、検定番号1S0198、導入開始2011年06月、機械割レンジ96.96〜113.3%
   - confidence: INDUSTRY_DATABASE_HIGH
3. パチ＆スロ必勝本「基本スペック [プロゴルファー猿]」
   - https://p.hisshobon.jp/machine/1835/1/29617
   - 2011-06-20導入、ART初当たり、VICTORY BONUS 1/32768、純増2.0枚/G、初期ART最大360G/平均60G、ビクトリーロード最大600G
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
4. パチマガスロマガ旧解析「小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/03/c.php
   - 1000円あたり34.28/34.29/34.31/34.32/34.54/35.46G
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
5. 2-9伝説「プロゴルファー猿」
   - https://29den.com/progolfer-saru/
   - 機械割96.9/98.2/99.5/104.2/107.3/113.3%、ART初当たり、各規定G数、設定変更で天井G数リセット
   - confidence: RETROSPECTIVE_ANALYSIS_MEDIUM_HIGH
6. 天井ハイエナ生活「天井ハイエナ期待値リスト は行」
   - https://macerate.seesaa.net/article/226312110.html
   - プロゴルファー猿: 液晶カウンター700狙い、宵越し×、設定変更時モード再セット
   - confidence: RETROSPECTIVE_SECONDARY_MEDIUM
7. スロット専門ゲームセンター スパイダー「第18回バトルエントリー可能機種(5号機)」
   - https://ameblo.jp/kenchan-retro/entry-12813517222.html
   - 機械割96.9/98.2/99.5/104.2/107.3/113.3%のクロスチェック
   - confidence: RETROSPECTIVE_SECONDARY_MEDIUM
