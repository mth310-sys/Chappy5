machineName: シスタークエスト～時の魔術師と悠久の姉妹～
manufacturer: ハイライツ・エンタテインメント（P-WORLD掲載メーカー: アイゲート）
releaseDate: 2017-01-10
recordNumber: 1038
generation: 5号機 / 5.5号機期
systemType: A+ART / リアルボーナス+ART
formalModelName: シスタークエスト／HA
certificationNumber: 6S0941
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_PAYOUT_ROUNDING_CONFLICT

## identity
- ハイライツ・エンタテインメントのパチスロ第1弾として展開された「シスタークエスト～時の魔術師と悠久の姉妹～」。ドラスの実機シミュレーター公式説明は2017-01-10より実機導入と明記し、パチビー、ちょんぼりすたも2017-01-10で一致。
- P-WORLDではメーカー欄を「アイゲート」としつつ、台紹介本文では「ハイライツ・エンタテインメント社製パチスロ第1弾」と説明。型式名「シスタークエスト／HA」、検定番号「6S0941」を掲載している。ブランド/掲載メーカー名の役割差として保持し、同一概念のCONFLICTにはしない。
reliability: INDUSTRY_PLUS_OFFICIAL_APP_CONTEXT_AND_DATABASE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.8% |
| 3 | 100.0% |
| 4 | 103.5% |
| 5 | 105.5% |
| 6 | 109.3% / 109.4% |

- 期待値見える化は設定6 109.3%、ちょんぼりすた/ハンゲーム整理は109.4%。設定1〜5は一致。設定6のみ丸め差を平均せず保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_ROUNDING_CONFLICT_SETTING6

## initialHitBySetting
### ボーナス合算
| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/258.0 |
| 2 | 1/256.0 |
| 3 | 1/252.1 |
| 4 | 1/248.2 |
| 5 | 1/244.5 |
| 6 | 1/237.4 |

### ART「冒険RUSH」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/531.0 |
| 2 | 1/498.8 |
| 3 | 1/474.8 |
| 4 | 1/404.0 |
| 5 | 1/371.7 |
| 6 | 1/239.9 |

- ちょんぼりすたの丸め値（ボーナス合算1/258〜1/237、ART 1/531〜1/240）と期待値見える化の精密値が整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約31.64〜32G / 50枚。
- 期待値見える化は約31.64G、ちょんぼりすた/パチ＆スロ必勝本は約32G。条件/丸め差として平均せずレンジ保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_RANGE

## netIncrease
- ART「冒険RUSH」: 約1.4枚/G（ボーナスを含まないART単体純増）。
- 一部解析はボーナス込みの実質純増を約2.0枚/Gと整理するため、定義を分離して保持。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- ストーリーボーナス / 十勇士伝説: 204枚。
- 錬金チャンス: 54枚。
- ART「冒険RUSH」: 1セット40Gまたは100G + 継続バトル4G。ゲーム数上乗せ・継続抽選・セットストック型。
reliability: DATABASE_PLUS_INDUSTRY_MULTI_SOURCE

## modeSpecificMinimumData
- 自力CZは非搭載。通常時の主要ART契機はレア小役直撃、ボーナス成立/消化中抽選、天井。
- ゲーム数天井: ボーナス間999Gで前兆を経てART当選。途中でARTを挟んでもボーナス間天井の進捗はリセットされない。
- 内部状態は低確/高確が主要区分で、高確はART当選率に強く影響する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時: ボーナス間999G天井進捗RESET。
- 内部状態RESELECT。
- RT状態RESET。
- 液晶開始ステージは帝国街道。
- 設定変更後は全設定共通50.0%で高確へ移行。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE

### carryOverBehavior
- 設定を変更しない据え置きでは、設定変更で発生する天井/状態/RTのリセット契機が発生しないため、攻略上は前日状態の継続側として扱われる。
- 本機固有に「据え置き」と明記した独立比較表は検索語を変えて再探索したが今回直接固定できず、純電源OFF→ONの直接比較表と天井契約を主根拠に `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH` を付記する。
reliability: ANALYSIS_CONTEXT_PLUS_UNVERIFIED_DIRECT_CARRYOVER

### powerCycleBehavior
- 純電源OFF→ON: ボーナス間999G天井進捗CARRYOVER。
- 内部状態CARRYOVER。
- RT状態CARRYOVER。
- 液晶開始ステージは帝国街道。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE

### gameCounterReset
- 設定変更: ボーナス間999G天井進捗RESET。
- 純電源OFF→ON: CARRYOVER。
- ART当選/終了だけではボーナス間天井をリセットしない。
- 据え置きの独立直記は `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- 通常天井はボーナス間999G。
- 設定変更で前日進捗は失われるが、設定変更専用の固定短縮天井は「シスタークエスト4/シスクエ4/時の魔術師」「リセット/設定変更/朝一/天井短縮」等で再探索しても確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_PLUS_RESEARCH

### modeAfterReset
- ゲーム数解除型の通常A/B等のモードは本機の主要公開仕様として確認できず、設定変更専用モード振り分けも `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一恩恵はモード優遇ではなく内部状態の50%高確再抽選として扱う。
reliability: ANALYSIS_HIGH_PLUS_RESEARCH

### stateAfterReset
- 設定変更後: 全設定共通 **50.0%で高確**。
- 純電源OFF→ON: 内部状態CARRYOVER。
- 比較用公開値として、ストーリーボーナス後25.0%、錬金チャンス後100%、ART終了後18.75〜19.0%で高確移行とする解析があり、設定変更後50%が明確な朝一優遇であることを確認できる。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_MULTI_SOURCE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後は全設定共通50.0%で高確スタート。
- 高確中はレア小役からのART当選率が低確より高く、朝一客の立ち回りに影響する実用的なリセット恩恵。
- 固定短縮天井は確認できない。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET_DATA

### resetPenalties
- 設定変更すると前日のボーナス間999G天井進捗と内部状態/RT状態を失う。
- 前日が天井接近または有利な高確状態なら据え置きに比べ不利になり得る。
reliability: ANALYSIS_HIGH_DIRECT_FOR_RESET_EFFECT

### resetDetection
- 設定変更時・純電源OFF→ONとも開始ステージは帝国街道で、ステージ単独では変更判別不可。
- 朝一で高確挙動が確認できれば設定変更期待は上がるが、高確自体は通常契機でも移行するため確定判別ではない。
- 「シスタークエスト4/シスクエ4/時の魔術師」「ガックン/設定変更判別/朝一/据え置き/電源OFF ON/初期出目」を組み替えて再探索したが、本機固有の確定的ガックン・初期出目・ランプ契約は固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_STAGE_AND_STATE_PLUS_UNVERIFIED_GACKUN_RESEARCH

### numericResetData
- 設定変更後高確移行率: **50.0%（全設定共通）**。
- 比較値: ストーリーボーナス後25.0%、錬金チャンス後100%、ART終了後18.75〜19.0%。
- 通常天井: ボーナス間999G。
- 設定変更専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- releaseDateはドラス/Appleの実機シミュレーター説明が2017-01-10を直接明記し、パチビー・ちょんぼりすたと一致。
- P-WORLDのメーカー欄「アイゲート」と台紹介本文「ハイライツ・エンタテインメント社製」は、ブランド/製造・掲載主体の役割差として併記。
- 設定6機械割は109.3%と109.4%の二次資料丸め差があるため単一値へ平均していない。
- ベース31.64Gと32Gも丸め差としてレンジ保持。
- resetBehaviorはちょんぼりすた/期待値見える化の設定変更 vs 電源OFF→ON直接比較表と、必勝本/すろぱちくえすとの高確50%情報で照合。

## conflicts
- `CONFLICT_SETTING6_PAYOUT_ROUNDING_109_3_VS_109_4`
  - 109.3%: 期待値見える化。
  - 109.4%: ちょんぼりすた、ハンゲーム整理。
- `MANUFACTURER_LABEL_ROLE_DIFFERENCE_HIGHLIGHTS_VS_AI_GATE`
  - ハイライツ・エンタテインメント: 製品展開/ブランドとして公式アプリ説明、業界記事、パチビーが扱う。
  - アイゲート: P-WORLDのメーカー欄。型式・検定情報と併記される。

## missingFields
- 本機固有の「据え置き」と明記された独立した天井/状態/RT比較表: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- 設定変更専用の短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用の通常A/B等モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の確定的ガックン/初期出目/ランプによる変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
retrievedDate: 2026-09-09
- OFFICIAL_APP_CONTEXT / RELEASE_DATE: https://apps.apple.com/jp/app/%E6%BF%80j%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B7%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88-%E6%99%82%E3%81%AE%E9%AD%94%E8%A1%93%E5%B8%AB%E3%81%A8%E6%82%A0%E4%B9%85%E3%81%AE%E5%A7%89%E5%A6%B9/id1147076453
- INDUSTRY / DORAS PRESS: https://www.value-press.com/pressrelease/176619
- INDUSTRY / PACHIBEE: https://www.pachibee.jp/machines/about/216110008
- DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8211/
- ANALYSIS_HIGH / CHONBORISTA: https://chonborista.com/slot/high-enter/28232/
- ANALYSIS_HIGH / SLOTJIN: https://slotjin.com/tenjoukitaichi/sister-quest4/
- ANALYSIS_HIGH / HISSHOBON: https://p.hisshobon.jp/machine/2871/1/61614
- ANALYSIS_HIGH / SLOPACHI_QUEST: https://www.slopachi-quest.com/article/sister-quest4-settei/
- INDUSTRY / GREENBELT_PWORLD_NEW_PANEL: https://news.p-world.co.jp/articles/9067/greenbelt

## sourceConfidenceSummary
- identity/releaseDate: INDUSTRY_HIGH + OFFICIAL_APP_CONTEXT
- model/certification: DATABASE_HIGH
- payout/initialHit/base/net/basicPayout: ANALYSIS_HIGH_MULTI_SOURCE
- resetBehavior: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_FOR_SETTING_CHANGE_AND_POWER_CYCLE
- missing/directCarryover: UNVERIFIED_AFTER_RESEARCH
