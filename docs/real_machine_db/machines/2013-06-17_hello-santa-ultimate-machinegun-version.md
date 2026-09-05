# ハローサンタ アルティメットマシンガンバージョン

machineName: ハローサンタ アルティメットマシンガンバージョン
manufacturer: タイヨー
releaseDate: 2013-06-17
releaseDatePrecision: exact_day
generation: 5号機
systemType: ART（ゲーム数上乗せ+セットストック型）
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-06-17**。K-Navi機種ページ/ALL7導入予定一覧/当時解析資料で一致。
- manufacturer: **タイヨー**。
- 型式名: **ハローサンタUMV-S**。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 98.2% |
| 3 | 100.1% |
| 4 | 103.5% |
| 5 | 108.5% |
| 6 | 113.2% |

- P-WORLD、2013年当時スペック記事、Re.design、後年2-9伝説で一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## initialHitBySetting

ART初当たり:

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/279.1 |
| 2 | 1/268.3 |
| 3 | 1/254.5 |
| 4 | 1/242.3 |
| 5 | 1/225.2 |
| 6 | 1/190.2 |

- P-WORLD、2013年当時スペック記事、Re.design、後年2-9伝説で一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## baseGamesPer50

| 設定 | 50枚あたり |
|---|---:|
| 1 | 30.8G |
| 2 | 30.9G |
| 3 | 30.9G |
| 4 | 30.9G |
| 5 | 30.9G |
| 6 | 31.0G |

- 2013-04-07の当時スペック記事がメーカー製品資料へのリンクとともに設定別ベースを掲載。
- Re.designも設定1相当の **30.8G/千円** を掲載し整合。
- confidence: PERIOD_SPEC_WITH_SECONDARY_CROSSCHECK_HIGH

## netIncrease

- ART「マシンガンラッシュ」: **約2.0枚/G**。
- K-Navi、P-WORLD、パチマガスロマガ、Re.designで一致。
- confidence: MULTI_SOURCE_HIGH

## basicPayout

- ART「マシンガンラッシュ」: **1セット50G+α**、ゲーム数上乗せ+セットストック型。
- アルティメットフリーズボーナス: **約60枚**。成立時はART確定、10G間の上乗せ区間を伴う。
- ARTの設定別平均獲得枚数として当時スペック記事に **268 / 253 / 283 / 278 / 300 / 281枚** があるが、物差し上の基本1セット獲得保証とは定義が異なるため basicPayout 本線へ混同しない。

## modeSpecificMinimumData

- 通常時モード: **通常A / 通常B / 天国 / マシンガン**。
- ゲーム数天井:
  - 通常A: **最大1280G**。
  - 通常B: **最大1280G**。
  - 天国: **最大96G**。
  - マシンガン: ゲーム数天井ではなくハズレ天井が強く短縮される系統。
- ハズレ天井:
  - 通常A: **11～20G**。
  - 通常B: **9～20G**。
  - 天国: **3～16G**。
  - マシンガン: **1～5G**。
- ベル/リプレイで連続ハズレ回数がリセット。レア小役はハズレ天井短縮抽選対象。
- マシンガンモードはハズレ天井1～5G・ループ率80%系、天国は50%ループ系と解析される。
- 全モード移行テーブル、全小役別ハズレ短縮率は完全再現用途のため収集対象外。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_COUNT_CEILING_RESET_CONFIRMED__RESET_MODE_STATE_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 本機固有の後年天井整理で **設定変更時に天井G数リセット**を確認。
- パチマガスロマガには本機専用の「朝イチ・設定変更」解析導線が現存することを確認したが、検索インデックスから取得できる本文だけでは設定変更時の内部モード/状態/液晶初期値を安全に固定できなかった。
- 「ハローサンタUMV-S」「タイヨー」「設定変更/リセット/朝一/天井/モード」を組み替えて当時記事・解析DB・後年整理を再探索したが、設定変更時の具体的モード振り分けは直接確認できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 「据え置き / 宵越し / 前日ゲーム数 / ハズレ天井」を本機名・型式名と組み替えて再探索。
- **純据え置き時のゲーム数天井進捗、モード、連続ハズレ内部履歴の保持契約は直接固定できず UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時に天井G数がリセットされることから、据え置き時KEEPを反対推定しない。

### powerCycleBehavior

- 「電源OFF ON / 電源入切 / 電断 / 電源オンオフ」を機種名・型式名と組み替えて再探索したが、**設定変更を伴わない純電源OFF→ON時**のゲーム数天井、モード、連続ハズレ内部履歴、液晶表示の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- generalGameCountCeilingNormalA: **1280G_CONFIRMED**。
- generalGameCountCeilingNormalB: **1280G_CONFIRMED**。
- generalGameCountCeilingHeaven: **96G_CONFIRMED**。
- settingChange: **CLEAR_CONFIRMED**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。
- 本機には別系統の「連続ハズレ回数」天井があり、通常A最大20G、通常B最大20G、天国最大16G、マシンガン最大5G。

### ceilingAfterReset

- 設定変更でゲーム数天井進捗はリセット。
- **設定変更専用の固定短縮天井は確認できず NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時の天国96G/マシンガンの浅いハズレ天井は通常のモード仕様であり、設定変更専用恩恵とは扱わない。

### modeAfterReset

- 通常A/通常B/天国/マシンガンの通常時モード存在は確認。
- **設定変更時のモード再抽選/初期振り分けの直接契約は UNVERIFIED_AFTER_RESEARCH**。
- 通常時の全モード移行率はミッション範囲外。

### stateAfterReset

- 設定変更時の高確/前兆等の内部状態初期化・再抽選について、今回の本機固有直接資料では安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- ゲーム数天井進捗がクリアされることは確認。
- 設定変更専用の天国優遇、マシンガン優遇、短縮天井、ART確定等の公開恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更により前日のゲーム数天井進捗が消えることは、朝一天井狙い観点では不利要素。
- それ以外の設定変更専用ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 「ガックン / 初期出目 / 液晶 / ステージ / 履歴」を本機名・型式名と組み替えて再探索したが、本機固有の設定変更確定/高信頼判別契約は **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeFixedShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- settingChangeModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- settingChangeStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- deterministicMorningResetDetection: **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- settingChangeGameCountCeiling: CLEAR
- normalAMaxGameCountCeiling: 1280G
- normalBMaxGameCountCeiling: 1280G
- heavenMaxGameCountCeiling: 96G
- normalAMissCeiling: 11-20G
- normalBMissCeiling: 9-20G
- heavenMissCeiling: 3-16G
- machinegunMissCeiling: 1-5G
- carryOverGameCount: UNVERIFIED_AFTER_RESEARCH
- powerCycleOnlyGameCount: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_SETTING_CHANGE_GAME_COUNT_RESET_AND_GENERAL_CEILINGS__UNVERIFIED_FOR_RESET_MODE_STATE_CARRYOVER_POWER_CYCLE_DETECTION

## missingFields

- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- carryOverFullContract: `UNVERIFIED_AFTER_RESEARCH`
- purePowerCycleFullContract: `UNVERIFIED_AFTER_RESEARCH`
- deterministicResetDetection: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- none confirmed for core setting tables in this run.

## sources

取得日: 2026-09-06

- K-Navi 機種トップ / 導入日・基本仕様: https://p-kn.com/slot/1844/
- ALL7 2013年6月導入予定一覧: https://www.all7.jp/plans/index/2013/06
- P-WORLD / 基本仕様・ART・設定別ART初当たり・機械割: https://www.p-world.co.jp/machine/database/7060
- パチマガスロマガ 基本情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/77/a.php
- パチマガスロマガ ART突入フロー / モード・天井・ART基本性能: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/77/l.php
- パチマガスロマガ 機種総合 / 「朝イチ・設定変更」解析導線: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/77/taiyo_slot_77.php
- K-Navi 内部モードの基本: https://p-kn.com/slot/1844/44473/
- 2-9伝説 / 天井・設定変更時天井Gリセット・設定表: https://29den.com/hellosanta-ultimate/
- 2013-04-07 当時スペック記事 / 設定別ベース・機械割・ART初当たり: https://slosoku.com/archives/26459761.html
- Re.design / 型式・基本スペック・30.8G/千円・モード別最大天井: https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2015030207501601
- 中一商事 / 型式名・ハズレ天井・ART基本性能: https://www.nakaiti.com/html/sTaiyo013.html
- パチスロ解析ガイド / 導入日・ハズレ天井概要: https://pachislot-guide.net/2013/hello-santa-ultimate/

## researchNotes

- 最新mainのREADME、ミッションv0.7、旧集約INDEX、LATEST_HANDOFF、直前レコード「スナイパイ72」を再読し、741件地点から開始。
- GitHubコード検索で本機名の既存レコードがないことを確認してから追加。
- 2013-06-17同日群はK-Navi/ALL7で **スナイパイ72 / ハローサンタ アルティメットマシンガンバージョン / パチスロ英雄伝説 空の軌跡 THE ANIMATION** を確認。本機追加後も「英雄伝説 空の軌跡」が残るためOPEN。
- resetBehaviorは設定変更時天井Gリセットのみ直接固定。モード/状態/据え置き/純電断/変更判別は、検索語と資料系統を変えて十分再探索したが推定補完しない。
- 完全再現用の全モード移行率、全小役別ハズレ天井短縮率、上乗せ詳細はミッション対象外。
