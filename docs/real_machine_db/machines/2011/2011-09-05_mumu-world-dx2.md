# 夢夢ワールドDXII

machineName: 夢夢ワールドDXII
aliases: 夢夢ワールドDX2 / 夢夢ワールドDXⅡ
manufacturer: SANKYO
formalModelName: 夢夢ワールドDXIIZ
approvalNumber: 1S0513
releaseDate: 2011-09-05
releaseDateStatus: **CONFIRMED_EXACT_HALL_INTRODUCTION**。K-Navi・HAZUSEで2011-09-05導入開始。SANKYO公式は2011.09、当時グリーンべるとは9月上旬納品予定。
generation: 5号機
systemType: A+ART / 周期抽選・継続率ループ＋ゲーム数上乗せART
coreStatus: COMPLETE_CORE_WITH_ART_INITIAL_PARTIAL
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH

## chronologyNote

- 最新mainのrecordCount 600 / chronologicalFrontier 2011-09-05「探偵物語TURBO」から継続。
- LATEST_HANDOFF指定どおりrepo検索を行い、「夢夢ワールドDXII」未登録を確認して601件目として追加。
- 2011-09-05同日群は未クローズ。次候補は「魔法少女隊アルス」。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.3% |
| 2 | 98.5% |
| 3 | 100.5% |
| 4 | 104.2% |
| 5 | 107.6% |
| 6 | 112.1% |

K-Navi・HAZUSEで一致。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## initialHitBySetting

### BIG / REG / ボーナス合算 / BONUS&ART合成

| 設定 | BIG | REG | ボーナス合算 | BONUS&ART合成 |
|---|---:|---:|---:|---:|
| 1 | 1/358 | 1/799 | 1/247 | 1/162 |
| 2 | 1/346 | 1/712 | 1/233 | 1/148 |
| 3 | 1/350 | 1/780 | 1/241 | 1/146 |
| 4 | 1/337 | 1/689 | 1/226 | 1/130 |
| 5 | 1/344 | 1/762 | 1/237 | 1/126 |
| 6 | 1/326 | 1/655 | 1/217 | 1/109 |

- SANKYO公式オンライン博物館とK-Naviで上記丸め値が一致。
- セブンピースには精密値 BIG 1/358.1〜1/326.0、REG 1/799.2〜1/655.4、合算1/247.3〜1/217.7。
- ART単独初当りの設定別直接公開値は今回の取得資料では確定できず、BONUS&ART合成から逆算しない。
confidence: **OFFICIAL / ANALYSIS_HIGH**

## baseGamesPer50

- 設定1: **31.22G / 1000円（50枚）**
- 設定2: **31.28G / 1000円**
- 設定3: **31.27G / 1000円**
- 設定4: **31.35G / 1000円**
- 設定5: **31.32G / 1000円**
- 設定6: **31.46G / 1000円**
- パチマガスロマガ小役確率ページの直接値。
confidence: **ANALYSIS_HIGH**

## netIncrease

- ART「DX TIME」: **約+1.4枚/G**
- 基本1セット: **40G＋継続バトル6G＋復活ゾーン（平均約6G）**
- 継続率: **約39% / 66% / 77% / 91%**
- SANKYO公式、当時グリーンべると、K-Navi、P-WORLDで概ね一致。
confidence: **OFFICIAL / INDUSTRY / ANALYSIS_HIGH**

## basicPayout

- BIG: **約204枚**（297枚超払い出しで終了）
- REG: **約48枚**（63枚超払い出しで終了）
- SANKYO公式系紹介、当時業界記事、P-WORLD、パチマガスロマガで約204枚/約48枚を確認。
confidence: **HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- 通常時は原始・航海・未来等のステージを周期移行し、**50G周期でART抽選**。レア役で次回抽選までのゲーム数短縮抽選あり。
- ART「DX TIME」は継続率ループ＋ゲーム数上乗せ。V-RUSHは上乗せ特化状態。
- 天井: **ボーナス間1280G**で継続率**77% or 91%**のARTへ突入。
- 物差し用途のため全周期テーブル・全状態移行率・上乗せ振り分けは収集しない。

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL**。当時解析資料で、設定変更時は天井到達までのゲーム数がクリアされ、状態移行抽選が行われ、ステージチェンジが発生すると確認。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間天井ゲーム数・状態・周期進捗の保持を、本機固有の直接記述として今回確定できず。一般則から補完しない。

powerCycleBehavior: **PARTIAL_CONFIRMED**。単純な電源OFF→ONだけでもステージチェンジが発生することを当時解析資料で確認。天井ゲーム数・内部状態・周期進捗の保持/再抽選は直接確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE**。設定変更時はボーナス間1280G天井までのゲーム数をクリア。

ceilingAfterReset: **NORMAL_CEILING_RESTART / NO_SHORTENING_CONFIRMED**。通常天井はボーナス間1280G。設定変更で進捗がクリアされる。設定変更専用の短縮天井は、表記揺れ・型式・メーカー・朝一/リセット/据え置き/天井短縮で再探索しても確認できなかった。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時は周期・ステージ構造を持つが、設定変更時のモード再抽選/引継ぎや専用振り分けの直接公開値は確認できず。

stateAfterReset: **RESELECT_CONFIRMED_VALUE_UNVERIFIED**。設定変更時に状態移行抽選が行われることは確認。移行先・振り分け率は未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_QUANTIFIED_AFTER_RESEARCH**。状態移行抽選はあるが、朝一優遇と断定できる振り分け・特定G以内当選率・短縮天井は確認できず。

resetPenalties: **CEILING_PROGRESS_LOST**。前日のボーナス間天井進捗が設定変更でクリアされるため、宵越し天井狙いの観点では不利。

resetDetection: **STAGE_CHANGE_NOT_DISCRIMINATING**。設定変更でステージチェンジするが、電源OFF→ONのみでもステージチェンジするため、それ単独では設定変更判別材料にならない。ガックン・初期出目・ランプ等の本機固有の確実な変更判別要素は再探索後も未確認。

numericResetData:
- 通常天井: **ボーナス間1280G**
- 天井恩恵: **継続率77% or 91%のART**
- 設定変更時天井進捗: **0から再スタート（進捗クリア）**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時状態振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_SINGLE_FOR_DIRECT_RESET_BEHAVIOR / HIGH_FOR_NORMAL_CEILING**。設定変更時の天井クリア・状態移行抽選・電断でもステージチェンジは当時解析1系統で直接確認。通常天井は複数系統で照合。

## conflicts

- REG実獲得目安はSANKYO公式系/P-WORLD/パチマガ/セブンピースが**約48枚**、HAZUSE演出ページが**平均60枚**と記載。主値は複数一致の約48枚とし、HAZUSE値を `CONFLICT_MINOR_BASIC_PAYOUT` として保持。
- ART継続率はSANKYO公式/当時業界記事/K-Navi/HAZUSEが最大**約91%**。P-WORLD同一ページの概要は91%だが詳細節に99%表記があり内部不整合。主値は91%、P-WORLD 99%表記は `CONFLICT_SOURCE_INTERNAL_TYPO_CANDIDATE` として保持。

## missingFields

- ART単独初当り設定別: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior詳細: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehaviorのゲーム数/状態詳細: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset具体値: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset振り分け: **UNVERIFIED_AFTER_RESEARCH**
- ガックン等のresetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

- SANKYOオンライン博物館（公式、導入月・型式名・設定別BB/RB/合算/BONUS&ART合成・基本仕様）: https://www.sankyo-fever.jp/collection/541/
- 当時グリーンべると / P-WORLD業界ニュース（2011-07-11、純増・継続率・獲得枚数・ボーナス確率・9月上旬納品予定）: https://news.p-world.co.jp/articles/4771/greenbelt
- K-Navi（2011-09-05導入、設定別確率・機械割・ART仕様）: https://p-kn.com/slot/1463/
- P-WORLD（ART・獲得枚数・ボーナス間1280G天井）: https://www.p-world.co.jp/machine/database/6435
- HAZUSE（型式名・検定番号・2011-09-05導入・機械割）: https://hazuse.com/machine/pachislot/1S0513/
- HAZUSE演出（ART仕様、REG約60枚表記）: https://hazuse.com/machine/pachislot/1S0513/genre/202/
- セブンピース（設定変更時天井クリア・状態移行抽選・電断時もステージチェンジ、天井・精密ボーナス確率）: https://www.mb.ccnw.ne.jp/seven-peace.com/mumu_world.html
- パチマガスロマガ 基本仕様（ART・獲得枚数・天井）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/25/a.php
- パチマガスロマガ 小役確率 / 1000円あたりゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/25/c.php
- パチマガスロマガ 通常時の打ち方: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/25/d.php

## sourceConfidence

**OFFICIAL/HIGH for identity, core bonus specs, ART specification and release month; ANALYSIS_HIGH for payout rate/base; ANALYSIS_SINGLE for direct resetBehavior; UNVERIFIED only after varied-keyword/source-family research for remaining reset details.**
