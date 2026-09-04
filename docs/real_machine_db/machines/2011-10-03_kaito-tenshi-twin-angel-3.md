# パチスロ快盗天使ツインエンジェル3

machineName: パチスロ快盗天使ツインエンジェル3
aliases: 快盗天使ツインエンジェル3 / ツインエンジェル3 / TA3
manufacturer: Sammy
formalModelName: ツインエンジェル3X
approvalNumber: 1S0560
releaseDate: 2011-10-03
releaseDateStatus: **CONFIRMED_BY_MULTIPLE_DATABASES**。K-Navi/HAZUSEがともに2011-10-03導入開始。K-Naviカレンダーも全国一斉導入開始日として10-03掲載。
generation: 5号機
systemType: ボーナス+RT / ナビストック型RT / CZ経由
coreStatus: PARTIAL_CORE
resetQaStatus: PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ X JAPAN～強行突破～」を確認して開始。
- 正本の再開地点は recordCount 606 / chronologicalFrontier 2011-10-02。
- 2011-10-03群の未処理候補を再監査。ツインエンジェル3はK-Navi/HAZUSEで10-03導入開始が一致し、repo既存パスを直接fetchして404を確認したため607件目として追加。
- ケロット2はグリーンべるとで10-10納品開始予定を確認済みのため後ろへ回す。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.5% |
| 3 | 100.9% |
| 4 | 104.5% |
| 5 | 108.9% |
| 6 | 113.3% |

- K-Navi詳細値を主値として採用。
- HAZUSEは97/99/101/105/109/113%の整数丸めで、詳細値と丸め整合するためCONFLICT扱いしない。
confidence: **ANALYSIS_HIGH_CROSSCHECKED_WITH_ROUNDED_DATABASE**

## initialHitBySetting

### ボーナス合算

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/197.99 |
| 2 | 1/187.78 |
| 3 | 1/178.57 |
| 4 | 1/170.22 |
| 5 | 1/162.62 |
| 6 | 1/149.28 |

### BIG / MID合算

| 設定 | BIG合算 | MID合算 |
|---|---:|---:|
| 1 | 1/315.08 | 1/532.81 |
| 2 | 1/297.89 | 1/508.03 |
| 3 | 1/282.48 | 1/485.45 |
| 4 | 1/268.59 | 1/464.79 |
| 5 | 1/256.00 | 1/445.82 |
| 6 | 1/234.06 | 1/412.18 |

- K-NaviとHAZUSEで一致。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- パチマガスロマガに「1000円あたりのゲーム数」項目が存在することまでは確認できたが、今回取得経路では設定別数値本文を安全に回収できなかった。
- 機種名/TA3/ツインエンジェル3/50枚/1000円/ベース/コイン持ちを組み替えて再探索したが、直接比較可能な確定値を取得できず。小役確率からの逆算は行わない。

## netIncrease

- RT「エンジェルタイム」: **1セット33G / 約+0.6枚/G**。
- RTはCZ「エンジェルチャンス」「エンジェルチャレンジ」を経由し、ナビストックがあれば押し順ナビでRT継続を狙う。
confidence: **DATABASE_AND_ANALYSIS_HIGH_CROSSCHECKED**

## basicPayout

- HYPER BIG: **約260枚**（330枚超払い出しで終了）
- NORMAL BIG: **約210枚**（240枚超払い出しで終了）
- MID: **約77枚**（72枚超払い出しで終了）
confidence: **DATABASE_AND_ANALYSIS_HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- 通常時は **低確 / 高確 / 超高確** の内部状態を持つ。
- RT間天井とボーナス間天井の2系統を搭載。
- RT間天井: エンジェルチャレンジ終了後999Gハマリで、次回ボーナスまでCZ→RTをループ。
- ボーナス間天井: ボーナス終了後999Gでナビストック1個。以後ボーナス成立まで100Gごとに1個追加。
- 設定変更後のみボーナス間天井が **777G** に短縮される。
- 実機完全再現用の全モード移行率、全小役別ストック抽選等は収集対象外。

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL**。設定変更後は通常ボーナス後999Gではなく **777G** でボーナス間天井のナビストックを獲得することをP-WORLD/HAZUSEで直接確認。HAZUSEは内部状態について「設定変更」時にも状態移行抽選が行われると明記。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にRT間999G、ボーナス間999G、ナビストック、高確ポイント、内部状態をどこまで保持するかについて、本機固有の直接資料を十分に確定できず。一般則で補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のRT間/ボーナス間ゲーム数、ナビストック、高確ポイント、液晶状態の処理を本機固有資料で確定できず。

gameCounterReset: **SETTING_CHANGE_SPECIAL_COUNTER_START_CONFIRMED / CLEAR_VS_RETAIN_SEMANTICS_PARTIAL**。設定変更後はボーナス間天井が777Gとして扱われるため、前日ボーナス後999G天井進捗をそのまま継続する挙動ではないことは確認できる。ただし内部カウンタ実装上のCLEAR/RETAINの厳密表現は資料上明示されないため、単純なRESET断定は避ける。

ceilingAfterReset: **SHORTENED_TO_777G_CONFIRMED**。通常ボーナス後999Gに対し、設定変更後は777Gでナビストック1個獲得。以後100Gごとにナビストック1個追加。

modeAfterReset: **STATE_RESELECTION_ON_SETTING_CHANGE_CONFIRMED / NUMERIC_DISTRIBUTION_UNVERIFIED**。HAZUSEは低確/高確/超高確の状態移行契機に設定変更を明記。ただし設定変更専用の具体的振り分け数値は今回の再探索で確定できず。

stateAfterReset: **RESELECTION_CONFIRMED_PARTIAL**。内部状態抽選が設定変更時に行われることは確認。高確ポイント・超高確・CZ/RT関連状態・ナビストックの設定変更時処理は直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **CONFIRMED**。ボーナス間天井が通常999Gから **777Gへ222G短縮**。朝一設定変更時の明確な比較可能恩恵。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の公開された主要不利要素は確認できず。前日ゲーム数/状態の扱い自体が未確定項目を含むため推定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、マイスロ表示等による本機固有の設定変更/据え置き判別を、機種名/型式/朝一/リセット/据え置き/ガックン/電源OFF ONで再探索したが直接確定できず。

numericResetData:
- 通常ボーナス間天井: **999G**
- 設定変更後ボーナス間天井: **777G**
- 短縮幅: **222G**
- 天井到達時: **ナビストック1個獲得**
- 以後: **100G消化ごとにナビストック1個追加**
- 設定変更時の低確/高確/超高確振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内ボーナス/RT当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **HIGH_FOR_777G_RESET_CEILING_AND_STATE_RESELECTION_TRIGGER / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_NUMERIC_STATE_DISTRIBUTION_AND_DETECTION**

## conflicts

- 機械割はK-Navi詳細値97.3〜113.3%とHAZUSE整数97〜113%で丸め整合し、CONFLICTではない。
- releaseDateはK-Navi/HAZUSEとも2011-10-03で一致。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- setting-change numeric state distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. K-Navi — パチスロ快盗天使ツインエンジェル3
   - https://p-kn.com/slot/1493/
   - 2011-10-03導入、ボーナス合算、基本仕様。
   - reliability: **ANALYSIS_HIGH**
2. K-Navi — 機械割＆期待収支
   - https://p-kn.com/slot/1493/33371/
   - 設定別機械割97.3〜113.3%。
   - reliability: **ANALYSIS_HIGH**
3. K-Navi — ボーナス確率
   - https://p-kn.com/slot/1493/33780/
   - BIG/MID/ボーナス合算の設定別詳細値。
   - reliability: **ANALYSIS_HIGH**
4. HAZUSE — パチスロ快盗天使ツインエンジェル3
   - https://hazuse.com/machine/pachislot/1S0560/
   - 型式名ツインエンジェル3X、検定番号1S0560、2011-10-03導入、RT33G約+0.6枚/G、天井、内部状態、設定変更が状態移行契機であること。
   - reliability: **DATABASE_HIGH / ANALYSIS_HIGH**
5. P-WORLD — パチスロ快盗天使ツインエンジェル3
   - https://www.p-world.co.jp/machine/database/6475
   - H・BIG約260枚、BIG約210枚、MID約77枚、RT33G約+0.6枚/G、通常999G/設定変更後777G天井。
   - reliability: **DATABASE_HIGH**
6. パチマガスロマガ — スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/130/a.php
   - H・BIG約260枚、N・BIG約210枚、MB約77枚。
   - reliability: **ANALYSIS_HIGH**
7. パチマガスロマガ — 小役確率/1000円あたりG数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/130/c.php
   - 1000円あたりG数項目の存在を確認。ただし今回の取得本文では数値部分を安全に回収できず、baseGamesPer50は未確定。
   - reliability: **ANALYSIS_HIGH**
8. パチマガスロマガ — 機種解析トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/130/sammy_slot_130.php
   - 「朝イチ・設定変更」解析項目の存在を確認。
   - reliability: **ANALYSIS_HIGH**
9. K-Navi — 2011年10月新台導入カレンダー
   - https://p-kn.com/calendar/201110/
   - 10月3日全国一斉導入開始群に本機を掲載。
   - reliability: **DATABASE_HIGH**
