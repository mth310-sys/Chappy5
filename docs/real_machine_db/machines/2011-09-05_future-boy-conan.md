# 未来少年コナン

machineName: 未来少年コナン
manufacturer: ニューギン
releaseDate: 2011-09-05
releaseDateStatus: **CONFLICT_DATE**。K-Naviは2011-08-16ホール導入開始。一方、当時グリーンべるとは2011-09-05から納品開始予定、HAZUSE/パチビーも2011-09-05導入。P-WORLDは2011年9月表記。時系列本線では複数資料が一致し、当時業界記事にも裏付けがある2011-09-05を採用し、08-16説を競合値として保持する。
generation: 5号機
systemType: A+ART / ゲーム数上乗せ / ステップアップART
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH
formalModelName: 未来少年コナンV
approvalNumber: 1S0277

## chronologyNote

- 最新mainのrecordCount 598 / chronologicalFrontier 2011-08-22「パチスロ銀と金」から継続。
- HAZUSE 2011年8月カレンダーは08-22が最終日。09-02掲載機はパチンコ「CR聖闘士星矢-青銅-」であり、パチスロ本線候補ではないことを再確認。
- repo内検索で「未来少年コナン」未登録を確認。
- 前HANDOFFで保留していた日付競合を再照合。K-Navi 08-16に対し、当時グリーンべると・HAZUSE・パチビーが09-05で一致し、P-WORLDも2011年9月。平均化せずCONFLICT_DATEとして双方保持し、599件目として09-05キーで追加。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.1% |
| 2 | 98.7% |
| 3 | 100.4% |
| 4 | 104.3% |
| 5 | 107.3% |
| 6 | 111.3% |

P-WORLD / パチビー / 後年設定判別DBで一致。
confidence: HIGH_CROSSCHECKED

## initialHitBySetting

### ボーナス合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/224.4 |
| 2 | 1/219.9 |
| 3 | 1/215.6 |
| 4 | 1/211.4 |
| 5 | 1/207.4 |
| 6 | 1/202.3 |

### BIG / REG

| 設定 | BIG | REG |
|---|---:|---:|
| 1 | 1/409.6 | 1/496.5 |
| 2 | 1/399.6 | 1/489.1 |
| 3 | 1/390.1 | 1/481.9 |
| 4 | 1/381.0 | 1/474.9 |
| 5 | 1/372.4 | 1/468.1 |
| 6 | 1/364.1 | 1/455.1 |

### ART「ギガントモード」初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/696.0 |
| 2 | 1/457.3 |
| 3 | 1/623.1 |
| 4 | 1/378.7 |
| 5 | 1/530.5 |
| 6 | 1/305.9 |

P-WORLD/パチビー掲載値。奇偶で大きく振れる点も後年整理資料と一致。
confidence: HIGH_CROSSCHECKED

## baseGamesPer50

パチマガスロマガ掲載1000円あたりゲーム数:

| 設定 | G/1000円 |
|---|---:|
| 1 | 33.97G |
| 2 | 34.05G |
| 3 | 34.12G |
| 4 | 34.19G |
| 5 | 34.27G |
| 6 | 34.34G |

当時グリーンべるとの概算「約34G/1000円」と整合。
confidence: HIGH_CROSSCHECKED

## netIncrease

- ART「ギガントモード」: **約+1.5枚/G**
- 初回ARTゲーム数: **30G / 50G / 100G**
- 「太陽エネルギーチャンス」: **1セット10G**、ART本体G数を減算せず上乗せ抽選。1回最大300G上乗せ。
confidence: HIGH_CROSSCHECKED

## basicPayout

- BIG: **約207枚**（315枚超払い出しで終了）
- REG: **約48枚**（8回入賞または8G消化）
confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時はART期待度に関わる高確/低確概念あり。
- 液晶上では通常4ステージに加え、「三角塔モード」が高確示唆、「コアブロックモード」が前兆示唆。
- ARTは「ギガントモード」→「ギガント大炎上モード」→「太陽エネルギーチャンス」のステップアップ構造。
- 通常天井: **ボーナス間999G消化以降に成立したボーナス終了後、必ずARTへ突入**。
- 天井ARTはP-WORLD/パチビーで **50Gまたは300Gのギガントモード** と記載。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_AFTER_RESEARCH**。K-Naviに本機専用「設定変更後の挙動」解析項目が現存することを確認したが、本文URLは現取得経路でキャッシュ取得できず、具体内容を安全に回収できなかった。一般則やニューギン他機種から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間999G天井進捗、高確/低確、前兆、ART関連状態の保持を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の天井進捗・内部状態・ART関連状態を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時にボーナス間999G天井カウンタがCLEAR/RETAINされるか、K-Navi項目の存在は確認したが本文値を回収できず推測しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井999Gは確認済み。設定変更後専用短縮天井や別規定G数の公開値は十分な再探索後も確定できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/低確等の設定変更時振り分け値は確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。三角塔/コアブロック相当の内部状態、前兆、ART権利の設定変更時処理は確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井、朝一ART優遇、朝一特定G以内当選率等の公開数値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失等を直接確定できる本機固有資料を回収できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ、ステージ等による設定変更判別は本機固有の確実な記述を確認できず。

numericResetData:
- 通常天井: **ボーナス間999G消化以降のボーナス後ART確定**
- 天井恩恵: **ギガントモード50G or 300G**
- 設定変更後天井: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード/状態振り分け: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL**。通常天井と内部状態構造、設定変更専用解析項目の存在は確認。設定変更/据え置き/電断の具体挙動・朝一数値・変更判別は十分な再探索後も未確定。

## conflicts

- 導入日: **CONFLICT_DATE**
  - K-Navi: 2011-08-16 ホール導入開始
  - 当時グリーンべると: 2011-09-05 納品開始予定
  - HAZUSE: 2011-09-05 導入開始
  - パチビー: 2011-09-05 導入日
  - P-WORLD: 2011年09月導入開始
  - 平均化せず全値保持。時系列キーは複数一致＋当時業界記事のある2011-09-05を採用。

## missingFields

- settingChangeBehavior具体本文: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset専用値: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: 2026-09-04

- 当時グリーンべると / P-WORLD業界ニュース（2011-07-15、09-05納品予定、性能概要）: https://news.p-world.co.jp/articles/4779/greenbelt
- P-WORLD（基本仕様、天井、ボーナス、機械割、ART初当り、型式/検定番号）: https://www.p-world.co.jp/machine/database/6443
- パチビー（2011-09-05導入、性能/天井/設定別値）: https://www.pachibee.jp/machines/index/211070003
- K-Navi（2011-08-16説、設定変更後の挙動項目）: https://p-kn.com/slot/1466/
- K-Navi 設定変更後の挙動本文URL（取得経路ではcache miss）: https://p-kn.com/slot/1466/33185/
- HAZUSE（2011-09-05、型式名/検定番号、BIG/REG）: https://hazuse.com/machine/pachislot/1S0277/
- パチマガスロマガ 1000円あたりゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/19/c.php
- パチマガスロマガ 基本仕様/天井: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/19/a.php
- 後年設定判別DB（ART初当り等の再照合補助）: https://pacnk.com/slot/tools/sh_konan.html

## sourceConfidence

**HIGH for core specification, ceiling, type/model/approval number and 2011-09-05 market timing; CONFLICT_DATE for exact release date; PARTIAL for resetBehavior.**
