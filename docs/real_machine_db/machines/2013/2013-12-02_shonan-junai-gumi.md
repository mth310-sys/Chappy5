# パチスロ湘南純愛組！

machineName: パチスロ湘南純愛組！
aliases: 湘南純愛組! / パチスロ 湘南純愛組!
manufacturer: ニューギン
modelName: 湘南純愛組！-Z
approvalNumber: 3S0527
releaseDate: 2013-12-02
releaseDatePrecision: exact_day_multi_source

generation: 5号機
systemType: A+ART / CZ / 周期・規定ゲーム数管理 / ゲーム数上乗せ / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- HAZUSEとパチビーがホール導入開始日を **2013-12-02** と掲載。
- グリーンべるとは2013-10-17の発表記事で納品開始を12月1日予定と報道しており、12月2日ホール導入と整合する。
- HAZUSEで型式名 **湘南純愛組！-Z**、検定番号 **3S0527** を確認。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.99% |
| 2 | 99.14% |
| 3 | 102.08% |
| 4 | 104.88% |
| 5 | 107.92% |
| 6 | 110.49% |

- パチマガスロマガの精密値。HAZUSE / Re.designは丸め値 **96.0 / 99.1 / 102.1 / 104.9 / 107.9 / 110.5%** で実質一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/200.5 |
| 2 | 1/178.5 |
| 3 | 1/159.3 |
| 4 | 1/143.3 |
| 5 | 1/128.6 |
| 6 | 1/116.1 |

- パチマガスロマガ、Re.design、pacnkで一致（丸め差あり）。
- ボーナス合成: **1/809.1 / 789.6 / 771.0 / 753.3 / 736.4 / 720.2**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約33G/50枚（1000円）**。
- HAZUSEとRe.designで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- ART「鬼神RUSH / 龍神RUSH」: **約1.8枚/G**。
- P-WORLD、パチマガスロマガ、K-Navi、Re.designで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「鬼神RUSH / 龍神RUSH」: **1セット50G+α**、ゲーム数上乗せ+セットストック型。
- LEGEND BIG: **約204枚**。
- BIG: **約204枚**。
- REG: **約48枚**。
- P-WORLD / パチマガスロマガで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は4種類の「クワトロテーブル」を並行管理。
  - 鬼塚テーブル: **96G周期**で高確移行抽選。
  - 弾間テーブル: **32G周期**で高確移行抽選。
  - ゲーム数解除テーブル: **128G周期**を軸に規定G数到達でART抽選/当選。
  - Jack Potテーブル: 約1000G規模のカウントダウン管理。
- ARTは鬼神/龍神RUSH、1セット50G+α・純増約1.8枚/G。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## ceiling

- **ボーナス・ART間1024GハマリでART当選濃厚**。
- 当時記事では **1024G + 最大32G前兆** と整理。
- HAZUSEの天井記載と当時立ち回り記事で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAMECOUNT_RESET_MODE_STATE_RESELECT_CONFIRMED_SINGLE_PERIOD_SOURCE__CARRYOVER_POWER_DETECTION_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 2013-12-20の当時攻略記事で、設定変更後は **ハマリゲーム数リセット / モード・状態再抽選** と明記。
- パチマガスロマガの本機専用攻略メニューに「朝イチ・設定変更」の専用項目が存在することも確認したが、現存検索本文からそのページ本文数値までは回収できなかった。
- よって設定変更の基本挙動は採用するが、信頼度は **ANALYSIS_SINGLE_PERIOD_SOURCE** とし、具体的な再抽選振り分けは推測しない。

### carryOverBehavior

- 純据え置き時に、天井G数・4テーブル進捗・モード・状態・Jack Potカウンターをどの範囲まで保持するかを本機固有に直接明示した資料は、機種名/型式名/メーカー名と「据え置き・宵越し・朝一・天井・テーブル・ジャックポット」を組み替えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時リセットの逆から据え置きKEEPを推定しない。

### powerCycleBehavior

- 設定変更を伴わない単純 **電源OFF→ON** 時の天井G数・クワトロテーブル・モード/状態・Jack Potカウンターの保持/初期化契約を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと純電断を自動同一視しない。

### gameCounterReset

- setting change: **HAMARI_GAME_COUNT_RESET_CONFIRMED**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。
- 通常天井はボーナス・ART間1024G。

### ceilingAfterReset

- 設定変更でハマリG数がリセットされるため、前日の天井進捗は設定変更後に持ち越さない。
- 設定変更専用の短縮天井、1024G未満の固定天井、特別な天井振り分けは、検索語・資料系統を変えた再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井 **1024G + 最大32G前兆**を、設定変更専用短縮値とは扱わない。

### modeAfterReset

- 設定変更時: **MODE_RESELECT_CONFIRMED**。
- 設定変更時専用のモード名・振り分け率・朝一専用テーブル振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- 通常時のクワトロテーブル周期値（32/96/128G等）を設定変更専用モード振り分けへ転記しない。

### stateAfterReset

- 設定変更時: **STATE_RESELECT_CONFIRMED**。
- 高確/超高確等の具体的な初期状態振り分け率は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の天井短縮、朝一高確確定、ART/CZ優遇など、定量化できる専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- モード・状態再抽選の結果として有利状態が選ばれる可能性は否定しないが、公開振り分け未確認のため恩恵として定量化しない。

### resetPenalties

- 設定変更でハマリG数がリセットされるため、前日深くハマった台の **宵越し天井進捗が消える**ことは客側には不利要素。
- モード/状態再抽選の平均的有利不利は振り分け未確認のため評価しない。

### resetDetection

- ガックン、初期出目、液晶ステージ、鬼/龍ランプ、Jack Potカウンター等による本機固有の設定変更/据え置き判別を再探索したが、直接仕様を固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時のランプ/カウンター示唆を、そのまま設定変更判別契約とは扱わない。

### publicMorningNumbers

- 設定変更時の公開確定事項: **ハマリG数リセット / モード再抽選 / 状態再抽選**。
- 通常天井: **1024G + 最大32G前兆**。
- 設定変更専用モード振り分け、状態振り分け、短縮天井、朝一Nゲーム以内当選率: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。

## bonusProbabilityDetail

- BIG合成: **1/1524.1 / 1489.5 / 1456.4 / 1424.7 / 1394.4 / 1365.3**。
- REG合成は設定3のみ資料競合あり。
  - パチマガスロマガ: 設定3 **1/1638.4**。
  - HAZUSE / Re.design: 設定3 **1/1683.4**。
- 他設定REGは **1/1724.6 / 1680.4 / [CONFLICT] / 1598.4 / 1560.4 / 1524.1**。

## missingFields

- 設定変更時のモード再抽選具体振り分け: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の状態再抽選具体振り分け: UNVERIFIED_AFTER_RESEARCH。
- 純据え置き時の天井/クワトロテーブル/状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 単純電源OFF→ON時の保持/初期化契約: UNVERIFIED_AFTER_RESEARCH。
- 本機固有の設定変更判別: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更専用短縮天井/朝一確率数値: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- `CONFLICT_REG_SETTING3_1638_4_VS_1683_4`: パチマガスロマガは設定3REG合成 **1/1638.4**、HAZUSEとRe.designは **1/1683.4**。平均化せず双方保持。
- PAYOUTは95.99/99.14/...と96.0/99.1/...の差があるが、同一系列の丸め差と判断可能な範囲なのでCONFLICT化しない。
- 納品開始予定 **2013-12-01** とホール導入開始 **2013-12-02** は定義差として分離し、導入時系列キーは複数DB一致の2013-12-02。
- 通常時の32/96/128G周期や約1000G Jack Potを、設定変更専用の朝一恩恵数値に流用しない。
- 設定変更時リセットから据え置き/純電断時のKEEPを逆算しない。

## sources

取得日: 2026-09-06

- グリーンべると: https://web-greenbelt.jp/00001151/ — 2013-10-17発表、12月1日納品開始予定、クワトロテーブル概要。
- パチビー: https://www.pachibee.jp/movies/index/10063 — 導入日2013-12-02、5号機ART、純増約1.8枚/G。
- HAZUSE: https://hazuse.com/machine/pachislot/3S0527/ — 型式/検定番号/導入日、約33G/50枚、機械割、ボーナス確率、ART、1024G天井。
- P-WORLD: https://www.p-world.co.jp/machine/database/7239 — 5号機A+ART、BIG/REG獲得枚数、ART 50G+α・純増約1.8枚/G。
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/a.php — 基本仕様、獲得枚数、ART 50G+α・純増約1.8枚/G。
- パチマガスロマガ ボーナス/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/h.php / https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/h-1.php — 設定別ART初当たり、ボーナス、PAYOUT。
- パチマガスロマガ ARTフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/l.php — 96/32/128G系テーブル、Jack Pot約1000G。
- パチマガスロマガ 機種メニュー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/newgin_slot_30.php — 本機専用「朝イチ・設定変更」項目の存在を確認。
- Re.design: https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2015030209081401 — 最短納期2013-12-01、設定別主要値、33.0G/1000円、ART 50G+α・1.8枚/G。
- pacnk: https://pacnk.com/slot/2013/syounanjyunaigumi/top.php — 設定別ボーナス/ART/PAYOUT照合。
- メタボ教授: https://metabopro.com/syounanjyunaigumi/ — 2013-12-20当時記事。1024G+最大32G前兆、設定変更後ハマリG数リセット・モード/状態再抽選。
