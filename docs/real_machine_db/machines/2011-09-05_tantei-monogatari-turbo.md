# 探偵物語TURBO

machineName: 探偵物語TURBO
manufacturer: オリンピア
releaseDate: 2011-09-05
releaseDateStatus: INDUSTRY_DATE_DIFFERENCE。グリーンべると記事は2011-09-04から納品開始予定。本線時系列では前HANDOFFの2011-09-05同日群として扱い、1日差は平均化せず注記する。
generation: 5号機
systemType: A+ART / ゲーム数管理ART / 継続率自力加算
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH

## chronologyNote

- 最新mainのrecordCount 599 / chronologicalFrontier 2011-09-05「未来少年コナン」から継続。
- LATEST_HANDOFFで最優先候補とされた「探偵物語TURBO」をrepo検索し、未登録を確認。
- 当時グリーンべるとは2011-09-04から納品開始予定。前HANDOFFの2011-09-05同日群キーと1日差があるため、時系列境界を後退させず2011-09-05キーで600件目として追加し、日付差を保持。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.7% |
| 2 | 99.3% |
| 3 | 101.1% |
| 4 | 104.4% |
| 5 | 109.0% |
| 6 | 113.2% |

K-Navi / P-WORLD / DMMで一致。
confidence: HIGH_CROSSCHECKED

## initialHitBySetting

### BIG / REG / 工藤ミッション / ボーナス合算

| 設定 | BIG | REG | 工藤ミッション | 合算 |
|---|---:|---:|---:|---:|
| 1 | 1/445.8 | 1/642.5 | 1/829.6 | 1/199.8 |
| 2 | 1/434.0 | 1/636.3 | 1/829.6 | 1/196.8 |
| 3 | 1/422.8 | 1/624.2 | 1/829.6 | 1/193.3 |
| 4 | 1/407.1 | 1/606.8 | 1/829.6 | 1/188.3 |
| 5 | 1/376.6 | 1/590.4 | 1/829.6 | 1/180.0 |
| 6 | 1/354.2 | 1/565.0 | 1/829.6 | 1/172.5 |

### ART「KUDO CHANCE」初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/378.6 |
| 2 | 1/355.9 |
| 3 | 1/346.1 |
| 4 | 1/311.7 |
| 5 | 1/295.8 |
| 6 | 1/274.8 |

P-WORLD掲載値。ボーナス表はK-Naviとも一致。
confidence: HIGH_CROSSCHECKED

## baseGamesPer50

- 全設定共通: **34.94G/1000円**

パチマガスロマガ掲載。
confidence: ANALYSIS_HIGH

## netIncrease

- ART「KUDO CHANCE」: **約+1.4枚/G**
- 1セット: **32G**
- 「KUDO CHANCE TURBO」: 次回継続確定型。継続率90%オーバーとの当時業界説明あり。
confidence: HIGH_CROSSCHECKED

## basicPayout

- BIG: **約204枚**（297枚超払い出しで終了）
- REG: **約48枚**（63枚超払い出しで終了）
- 工藤ミッション: **約18枚**（18枚超払い出しで終了）
confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時ARTは規定ゲーム数管理型。内部モードは6種類。
- レア役・ボーナス成立で次回ARTまでの規定ゲーム数短縮抽選。
- 通常A/B滞在時の最深天井はART終了後最大**1280G**。
- 確定/天国/超天国滞在時は最大**64G**。
- 天井到達恩恵はART「KUDO CHANCE」突入。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_AFTER_RESEARCH**。K-Naviに本機専用「設定変更後の挙動」解析項目が現存することを確認。ただし今回の検索経路では本文の具体値を安全に回収できず、一般則で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の規定ゲーム数、内部モード、前兆、ART権利の保持を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の規定ゲーム数・モード・状態の処理を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時にART規定ゲーム数進捗がCLEAR/RETAINされるか、専用解析項目の存在は確認したが本文値未回収のため推測しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時最深1280G、上位モード64Gは確認済み。設定変更専用短縮天井の数値は十分再探索後も確定できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。6種類の内部モードを持つが、設定変更時のモード再抽選/振り分けは本文値未回収。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。前兆/CZ/ART関連状態の設定変更時処理は直接根拠未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、朝一優遇、特定G以内当選率などの公開数値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日規定G進捗消失等を直接確定できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶・ステージ等による変更判別を本機固有資料で確定できず。

numericResetData:
- 通常A/B最深天井: **1280G**
- 確定/天国/超天国最大: **64G**
- 設定変更後専用天井: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL**。通常時のゲーム数管理構造とK-Navi上の設定変更専用解析項目存在は確認。具体的な変更/据え置き/電断比較は未確定。

## conflicts

- 導入/納品日: 前HANDOFFでは2011-09-05同日群。グリーンべると当時記事は2011-09-04納品開始予定。1日差を平均せず保持。
- 5号機クロニクルの検索スニペットには、本機を「ボーナス非搭載・純増約2.0枚/G」とする明白な別仕様混入が見られ、P-WORLD/K-Navi/パチマガ/当時業界記事と不整合。誤混入資料として性能値には採用しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior具体本文: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior / powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset / modeAfterReset / stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-04

- グリーンべると / P-WORLD業界ニュース（2011-07-15、09-04納品予定、ART概要）: https://news.p-world.co.jp/articles/4777/greenbelt
- 娯楽産業（2011-07-14発表、ART32G・約1.4枚/G）: https://www.goraku-sangyo.com/%E5%B9%B3%E5%92%8C%E3%80%80%E3%83%91%E3%83%81%E3%83%B3%E3%82%B3%EF%BC%86%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD2%E6%A9%9F%E7%A8%AE%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8/
- P-WORLD（基本仕様、天井、設定別ボーナス/ART初当り/機械割）: https://www.p-world.co.jp/machine/database/6439
- K-Navi（設定別スペック、設定変更後の挙動項目存在）: https://p-kn.com/slot/1472/
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/98/a.php
- パチマガスロマガ 小役/1000円あたりゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/98/c.php
- DMMぱちタウン（機械割、天井1280G/64G）: https://p-town.dmm.com/machines/1379

## sourceConfidence

**HIGH for core performance and normal ceiling structure; PARTIAL for resetBehavior; DATE_DIFFERENCE for exact market start date.**
