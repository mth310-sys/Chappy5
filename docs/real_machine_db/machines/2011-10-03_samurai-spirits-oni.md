# サムライスピリッツ鬼

machineName: サムライスピリッツ鬼
aliases: サムライスピリッツ～鬼～ / サムスピ鬼
manufacturer: SNKプレイモア
formalModelName: サムライスピリッツ鬼C
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-10-03
releaseDateStatus: **CONFIRMED_BY_DATABASE_AND_OFFICIAL_PRODUCT_CONTEXT**。K-Naviが2011-10-03ホール導入開始、2011年10月導入カレンダーも10-03全国一斉導入開始群に掲載。SNK公式旧製品ページも型式名「サムライスピリッツ鬼C」を確認できる。
generation: 5号機
systemType: ボーナス+ART / ゲーム数管理+自力継続複合ART
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ快盗天使ツインエンジェル3」を確認して開始。
- 開始時正本は **recordCount 607 / chronologicalFrontier 2011-10-03**。
- LATEST_HANDOFF指定どおり2011-10-03全国導入群を継続監査。
- repo code searchで機種名ヒットなしに加え、想定実パス `2011-10-03_samurai-spirits-oni.md` を直接fetchして404確認後、608件目として追加。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.5% |
| 3 | 100.2% |
| 4 | 104.8% |
| 5 | 109.2% |
| 6 | 113.4% |

- パチマガスロマガのPAYOUT値を主値として採用。
- 後年のシリーズ回顧資料でも同一6値を確認。
confidence: **ANALYSIS_HIGH_CROSSCHECKED_WITH_RETROSPECTIVE_DATABASE**

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/647.7 |
| 2 | 1/519.5 |
| 3 | 1/644.3 |
| 4 | 1/423.1 |
| 5 | 1/600.1 |
| 6 | 1/336.6 |

### ボーナス合算 / BIG / REG

| 設定 | ボーナス合算 | BIG | REG |
|---|---:|---:|---:|
| 1 | 1/399.61 | 1/595.78 | 1/1213.63 |
| 2 | 1/399.61 | 1/595.78 | 1/1213.63 |
| 3 | 1/372.36 | 1/574.88 | 1/1057.03 |
| 4 | 1/372.36 | 1/574.88 | 1/1057.03 |
| 5 | 1/348.60 | 1/555.39 | 1/936.23 |
| 6 | 1/348.60 | 1/555.39 | 1/936.23 |

### ボーナス+ART初当たり合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/247.1 |
| 2 | 1/225.8 |
| 3 | 1/235.9 |
| 4 | 1/198.0 |
| 5 | 1/220.5 |
| 6 | 1/171.2 |

- パチマガスロマガの設定別詳細値を採用。
- P-WORLD/K-Naviのボーナス+ART合算と一致。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## baseGamesPer50

| 設定 | 1000円あたりゲーム数 |
|---|---:|
| 1 | 31.50G |
| 2 | 31.64G |
| 3 | 31.80G |
| 4 | 31.94G |
| 5 | 32.10G |
| 6 | 32.24G |

- パチマガスロマガの直接掲載値。50枚=1000円条件の比較用ベースとして保存。
confidence: **ANALYSIS_HIGH_DIRECT**

## netIncrease

- ART「斬撃RUSH」: **約+1.7枚/G**。
- 「修羅」は基本 **30G+α**。
- 「羅刹」はリプレイ7連続入賞が終了条件の自力継続型。
- 上位「鬼羅刹」はリプレイ14連続入賞が終了条件。
confidence: **OFFICIAL_AND_DATABASE_CROSSCHECKED**

## basicPayout

- BIG: **約204枚**（297枚超払い出しで終了）
- REG: **最大48枚**（54枚超払い出しで終了）
confidence: **DATABASE_HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- 通常時のART抽選内部モード: **通常 / 高確 / 超高確 / SPモード**の4種。
- ARTは「怒」→「修羅」→「羅刹」を基本軸とし、「最終決戦」「鬼羅刹」を持つ。
- 天井はボーナスorART間の規定ゲーム数テーブル型。P-WORLD掲載候補は **約200G / 約450G / 約700G / 約980G / 約1280G**。
- 当時解析記事では最大天井を **通常時1248Gハマリ**と記載。P-WORLDの約1280G表記とは「概算テーブル表示 vs 実解析最大値」の定義差として保持する。
- 最大天井到達でART突入。
- 実機完全再現用の規定G振り分け、全状態移行率、全ART上乗せ抽選は収集対象外。

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL**。2011-10-20付の当時解析記事で「設定変更で天井までのG数はリセット」と直接記載。前日のボーナス/ART間天井進捗は設定変更時にそのまま継続しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にボーナス/ART間の規定G進捗、通常/高確/超高確/SPモード、ARTストック等をどこまで保持するか、本機固有の直接資料を確定できず。一般的な5号機挙動で補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの天井ゲーム数、内部モード、ART権利/ストック、液晶状態の処理は、機種名/型式名/朝一/据え置き/電源OFF ONを組み替えて再探索したが直接根拠を確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_CONFIRMED_BY_PERIOD_ANALYSIS**。当時解析記事に設定変更で天井までのG数リセットとの直接記述あり。

ceilingAfterReset: **RESET_CONFIRMED / SHORTENING_NOT_CONFIRMED**。通常最大1248G（P-WORLD概算表記は約1280G）の天井進捗が設定変更でリセットされることは確認。設定変更専用の短縮天井や特別な最大G数は十分な再探索後も確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確/超高確/SPモードの設定変更時振り分け・再抽選/引継ぎを直接確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/超高確等の朝一状態選択率、ART前兆・ストック等の設定変更時処理を直接確認できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一専用モード、ART優遇、特定G以内当選率などの比較可能な公開恩恵は確認できず。

resetPenalties: **POTENTIAL_LOSS_OF_CARRIED_CEILING_PROGRESS_CONFIRMED_IN_PRINCIPLE / OTHER_PENALTIES_UNVERIFIED**。設定変更で天井G数がリセットされるため、前日ハマリが存在する場合はその進捗を失う点が朝一客側の不利になり得る。その他の設定変更専用不利要素は未確認。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。リールガックン、初期出目、液晶ステージ、特定G前兆等による本機固有の設定変更/据え置き判別は、表記揺れ・型式名・ガックン・朝一・変更判別で再探索したが直接確定できず。

numericResetData:
- 通常最大天井: **1248G**（当時解析の実数表記）
- P-WORLD概算天井テーブル最深: **約1280G**
- 設定変更時: **天井G数リセット**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内ART当選率/期待度: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_SINGLE_PERIOD_FOR_SETTING_CHANGE_CEILING_RESET / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION_AND_NUMERIC_MORNING_BENEFITS**

## conflicts

- 天井最深は、P-WORLDがゲーム数テーブルを **約1280G** と概算表示する一方、2011-10-20付当時解析記事は **1248G** と実数記載。平均化せず、`CONFLICT_OR_DEFINITION_DIFFERENCE_APPROX_TABLE_VS_ANALYSIS_EXACT` として双方保持。
- releaseDateはK-Navi 2011-10-03を採用。SNK公式旧ページは現存本文で具体日を表示せず「好評稼働中」のため、日付の独立照合は限定的。

## missingFields

- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- setting-change mode/state distribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. SNK旧公式 — サムライスピリッツ鬼 ART「斬撃RUSH」
   - https://slot.snk-corp.co.jp/official/samurai_oni/art/index.html
   - 型式名サムライスピリッツ鬼C、公式ARTページ。
   - reliability: **OFFICIAL**
2. SNK旧公式 — ゲームフロー
   - https://slot.snk-corp.co.jp/official/samurai_oni/game/index.html
   - 型式名とゲームフロー。
   - reliability: **OFFICIAL**
3. K-Navi — サムライスピリッツ鬼
   - https://p-kn.com/slot/1482/
   - 2011-10-03ホール導入開始、ボーナス+ART合算、基本ART仕様。
   - reliability: **ANALYSIS_HIGH / DATABASE_HIGH**
4. K-Navi — 2011年10月新台導入カレンダー
   - https://p-kn.com/calendar/201110/
   - 10月3日全国一斉導入開始群に掲載。
   - reliability: **DATABASE_HIGH**
5. P-WORLD — サムライスピリッツ鬼
   - https://www.p-world.co.jp/machine/database/6472
   - BIG/REG確率、ボーナス+ART合算、BIG約204枚、REG最大48枚、ART約+1.7枚/G、内部4モード、天井テーブル。
   - reliability: **DATABASE_HIGH**
6. パチマガスロマガ — ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/36/h-1.php
   - BIG/REG/ボーナス合算、ART初当たり、ボーナス+ART合算、機械割。
   - reliability: **ANALYSIS_HIGH**
7. パチマガスロマガ — 小役確率/1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/36/c.php
   - 設定別31.50〜32.24G/1000円。
   - reliability: **ANALYSIS_HIGH**
8. 娯楽産業 — SNKプレイモア「サムライスピリッツ鬼」発表
   - https://www.goraku-sangyo.com/snk%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A2%E3%82%A2%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%B5%E3%83%A0%E3%83%A9%E3%82%A4%E3%82%B9%E3%83%94%E3%83%AA/
   - 2011-08-22内覧会、3段階ART仕様。
   - reliability: **INDUSTRY**
9. 目指せ月収20万！パチスロ天井解析攻略ブログ — サムライスピリッツ～鬼～ 天井解析・攻略
   - https://mezase20.com/blog-entry-477.html
   - 2011-10-20付。当時解析として最大1248G、設定変更で天井G数リセットを直接記載。
   - reliability: **ANALYSIS_SINGLE_PERIOD**
10. サムライスピリッツシリーズ回顧資料
   - https://www.marimo0925.net/pachislot-kikaiwari-ranking-samusupi-ban/
   - 機械割96.8〜113.4%、BIG約204枚/REG最大48枚を後年照合。
   - reliability: **RETROSPECTIVE_SECONDARY**
