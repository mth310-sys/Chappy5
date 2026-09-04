# 探偵物語TURBO

machineName: 探偵物語TURBO
manufacturer: オリンピア（平和発表）
releaseDate: 2011-09-05
releaseDateStatus: **DEFINITION_SPLIT**。当時グリーンべると/P-WORLD業界ニュースは2011-09-04から納品開始予定、パチビー/DMMぱちタウンは2011-09-05導入開始。時系列本線ではホール導入日の2011-09-05を採用し、納品開始予定日を別定義で保持する。
generation: 5号機
systemType: A+ART / ゲーム数管理ART / 継続率自力加算
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH

## chronologyNote

- 最新mainのrecordCount 599 / chronologicalFrontier 2011-09-05「未来少年コナン」から継続。
- LATEST_HANDOFF指定どおりrepo検索を行い、「探偵物語TURBO」未登録を確認して600件目として追加。
- 2011-09-05同日群は未クローズ。後続候補「夢夢ワールドDXII」「魔法少女隊アルス」を次回監査する。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.7% |
| 2 | 99.3% |
| 3 | 101.1% |
| 4 | 104.4% |
| 5 | 109.0% |
| 6 | 113.2% |

パチビー、K-Navi、当時グリーンべると記事、5号機クロニクルで一致。
confidence: **HIGH_CROSSCHECKED**

## initialHitBySetting

### ボーナス合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/199.8 |
| 2 | 1/196.8 |
| 3 | 1/193.3 |
| 4 | 1/188.3 |
| 5 | 1/180.0 |
| 6 | 1/172.5 |

### BIG / REG / 工藤ミッション

| 設定 | BIG | REG | 工藤ミッション |
|---|---:|---:|---:|
| 1 | 1/445.8 | 1/642.5 | 1/829.6 |
| 2 | 1/434.0 | 1/636.3 | 1/829.6 |
| 3 | 1/422.8 | 1/624.2 | 1/829.6 |
| 4 | 1/407.1 | 1/606.8 | 1/829.6 |
| 5 | 1/376.6 | 1/590.4 | 1/829.6 |
| 6 | 1/354.2 | 1/565.0 | 1/829.6 |

### ART「工藤チャンス」初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/378.6 |
| 2 | 1/355.9 |
| 3 | 1/346.1 |
| 4 | 1/311.7 |
| 5 | 1/295.8 |
| 6 | 1/274.8 |

パチビーと当時業界記事で照合。
confidence: **HIGH_CROSSCHECKED**

## baseGamesPer50

- 全設定共通: **34.94G / 1000円（50枚）**
- パチマガスロマガの小役確率ページで直接値を確認。
confidence: **ANALYSIS_HIGH**

## netIncrease

- ART「工藤チャンス」: **約+1.4枚/G**
- 1セット: **32G**
- 上位ART「工藤チャンスTURBO」も32G・約+1.4枚/G。突入時点で最低でも次回ART継続確定となる構造。
confidence: **HIGH_CROSSCHECKED / INDUSTRY**

## basicPayout

- BIG: **約204枚**（297枚超払い出しで終了）
- REG: **約48枚**（63枚超払い出しで終了）
- 工藤ミッション: **約18枚**（18枚超払い出しで終了）
confidence: **HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- ARTは状態別の規定ゲーム数テーブルで発動し、内部モードは**6種類**。
- 通常時のレア役・ボーナスで次回ART発動までのゲーム数短縮抽選あり。
- 最深天井: **ART間1280G**。規定到達で天井ARTへ突入（ペナルティ等で超過する場合あり）。
- ART継続率は0〜100%を10%刻みで管理し、ターボリプレイ成立で継続率上昇。これは物差し用途の概要のみ保持し、全内部振り分けは収集しない。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_AFTER_RESEARCH**。K-Naviに本機専用「設定変更後の挙動」、パチマガスロマガに「朝イチ・設定変更」解析項目が現存することを確認。表記揺れ、メーカー、シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/規定ゲーム数/モード/ガックン」を組み替えて再探索したが、現存検索結果から具体本文値を安全に回収できなかった。一般則・同社他機種から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のART間規定ゲーム数、内部6モード、前兆/CZ相当状態の引継ぎを本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の規定G数・モード・状態の保持/再抽選を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時にART間1280G系の規定ゲーム数進捗がCLEAR/RETAINされるか、専用解析項目の存在は確認したが本文値を回収できず推測しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時最深1280Gは確認済み。設定変更専用の短縮天井または別規定G数の具体値は再探索後も確定できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。内部6モードの存在は確認済みだが、設定変更時のモード再抽選/引継ぎと振り分け値は確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。前兆/CZ相当状態・ART権利等の設定変更時処理は確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井、朝一特定G以内のART優遇、設定変更専用モード優遇の公開具体値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日規定G数進捗消失等を直接示す本機固有資料を回収できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ、ステージ等による変更判別の確実な本機固有記述を確認できず。

numericResetData:
- 通常最深天井: **ART間1280G**
- 内部モード数: **6種類**
- 設定変更時規定G数: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL**。設定変更/朝一専用解析項目の存在、通常天井・モード構造は確認済み。設定変更/据え置き/単純電断の具体挙動と変更判別は十分な再探索後も未確定。

## conflicts

- 明確な性能数値CONFLICTは今回確認せず。
- 導入時期は矛盾ではなく定義差として保持:
  - 2011-09-04: 納品開始予定（当時グリーンべると / P-WORLD業界ニュース）
  - 2011-09-05: ホール導入開始（パチビー / DMMぱちタウン）

## missingFields

- formalModelName / approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior具体本文: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset専用値: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

- オリンピア公式2011年発売機種一覧: https://www.olympia.co.jp/official/products/2011.html
- 当時グリーンべると / P-WORLD業界ニュース（2011-07-15、9/4納品開始予定、主要性能）: https://news.p-world.co.jp/articles/4777/greenbelt
- グリーンべると現行アーカイブ: https://web-greenbelt.jp/00002179/
- 娯楽産業（2011-07-14発表、ART仕様）: https://www.goraku-sangyo.com/%E5%B9%B3%E5%92%8C%E3%80%80%E3%83%91%E3%83%81%E3%83%B3%E3%82%B3%EF%BC%86%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD2%E6%A9%9F%E7%A8%AE%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8/
- パチビー（2011-09-05導入、機械割、BIG/REG/KM、ART初当り、天井）: https://www.pachibee.jp/machines/index/211070004
- P-WORLD（基本仕様、天井、ART）: https://www.p-world.co.jp/machine/database/6439
- K-Navi（設定別値、設定変更後の挙動項目の存在）: https://p-kn.com/slot/1472/
- パチマガスロマガ 基本仕様: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/98/a.php
- パチマガスロマガ 小役確率 / 1000円あたりゲーム数34.94G: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/98/c.php
- パチマガスロマガ 総合（朝イチ・設定変更項目の存在）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/98/olympia_slot_98.php
- DMMぱちタウン（2011-09-05導入開始、機械割レンジ）: https://p-town.dmm.com/machines/1379

## sourceConfidence

**HIGH for core specification/release timing/base/ART/ceiling; PARTIAL for resetBehavior; UNVERIFIED for formal model name and approval number.**
