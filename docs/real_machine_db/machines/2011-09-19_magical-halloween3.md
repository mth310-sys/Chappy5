# マジカルハロウィン3

machineName: マジカルハロウィン3
aliases: マジカルハロウィン3 / マジハロ3
manufacturer: KPE（同一スペックの高砂電器産業製造版あり）
formalModelName: マジカルハロウィン3N / マジカルハロウィン3T5
approvalNumber: 0S1357（N。T5側検定番号は今回未確定）
releaseDate: 2011-09-19
releaseDateStatus: **DATE_DEFINITION_DIFFERENCE**。グリーンべるとは2011-09-19から納品開始予定、パチスロ必勝本・パチビー・HAZUSEは2011-09-20導入開始。平均化せず両定義を保持し、本DB時系列キーは最古の具体的市場投入日である納品開始予定2011-09-19を採用。
generation: 5号機
systemType: A+ART / セットストック型ART + CZ
coreStatus: COMPLETE_CORE_WITH_BASE_GAMES_UNVERIFIED
resetQaStatus: PARTIAL_RESET_QA_WITH_SETTING_CHANGE_CORE_CONFIRMED

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontier「デルピエロ」を再取得して開始。
- 開始時正本は recordCount 603 / chronologicalFrontier 2011-09-19。
- repo tree上で本機の既存レコードがないことを確認し、2011-09-19納品開始予定 / 09-20導入開始の同日市場群として604件目に追加。
- K-Navi現行ページには「2011年6月20日」と表示されるが、2011-08-26付グリーンべるとの「震災で販売延期、9月19日から納品予定」、パチスロ必勝本の2011/9/20導入、パチビー・HAZUSEの2011-09-20が相互整合するため、K-Navi日付は `CONFLICT_LIKELY_PAGE_METADATA_ERROR` として主値に採用しない。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.8% |
| 3 | 101.3% |
| 4 | 104.4% |
| 5 | 109.2% |
| 6 | 113.8% |

- パチスロ必勝本、パチマガスロマガ、5号機クロニクル、高砂T5実機資料で一致。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## initialHitBySetting

### ボーナス確率

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/350.5 | 1/397.2 | 1/186.2 |
| 2 | 1/348.6 | 1/392.4 | 1/184.6 |
| 3 | 1/346.8 | 1/378.8 | 1/181.0 |
| 4 | 1/344.9 | 1/374.5 | 1/179.6 |
| 5 | 1/339.6 | 1/354.2 | 1/173.4 |
| 6 | 1/332.7 | 1/332.7 | 1/166.3 |

- パチスロ必勝本、パチマガスロマガ、K-Navi、HAZUSEで一致。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「50枚」「1000円」「ベース」「コイン持ち」「通常時回転数」を機種名・型式名と組み替え、当時解析・旧機種DB・回顧資料を再探索したが、設定差を含め比較可能な直接値を今回確定できず。推測値は採用しない。

## netIncrease

- ART「カボチャンス」: **1セット30G / 約+1.2枚/G**。
- ART中のカボチャ揃いでセットストック。斜め揃いで上乗せ専用状態「カボラッシュ」へ移行。
- 「キングカボチャンス」「スーパーカボチャンス」も基本純増は同等。
- スーパーカボチャンスは原則次回REG成立まで継続するプレミアART。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## basicPayout

- BIG: **203枚**
- REG: **64枚**
- 規定払い出し表現ではBIGは280枚超払い出し終了、REGは70枚超払い出し終了。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- 通常時内部状態は **低確 / 高確A / 高確B / 高確C** の4系統。上位ほどART期待度が高い。
- ART終了後はCZ「ブーモリチェイス」を経由する。
- 通常天井は **ボーナス間1280G**。到達時はCZを経由してスーパーカボチャンス突入。
- ART「カボチャンス」はセットストック型で、途中ボーナスを引いても残りゲーム数を消化できる完走型構造。
- RT状態はボーナス後状態を含む複数段階が存在し、昇格リプレイ等でART用RT状態へ遷移する。
- 完全再現用の全状態移行率、全ストック振り分け、カボラッシュ内部抽選詳細は収集対象外。

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL**。当時解析「設定変更&天井情報」で、設定変更時は (1)天井ゲーム数リセット、(2)残りARTセット数消滅、(3)RT状態はボーナス後状態、(4)液晶は通常時なら引き継ぎ・ART中ならブーモリチェイスへ移行、と直接確認。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1280G天井進捗、ARTセット数、RT状態、内部高確状態を一括して「保持」と断定できる本機固有の直接資料は今回確定できず。設定変更時との対比からの推測はしない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定を触らない単純電源OFF→ON時の天井進捗、ARTセット、RT状態、内部高確、液晶状態の扱いは直接資料未確認。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**。ボーナス間1280G天井のゲーム数は設定変更でリセット。

ceilingAfterReset: **NORMAL_CEILING_RESTARTS_FROM_ZERO_CONFIRMED_IN_EFFECT / NO_SHORTENED_RESET_CEILING_CONFIRMED**。設定変更で天井Gがリセットされるため、通常天井1280Gの進捗は消失。設定変更専用の短縮天井・特別な朝一天井数値は十分再探索後も確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。低確/高確A/B/Cのどこから開始するか、設定変更時の振り分け数値は今回直接確定できず。

stateAfterReset: **RT_STATE_BONUS_AFTER_CONFIRMED / ART_STOCK_CLEARED_CONFIRMED / HIGH_LOW_STATE_UNVERIFIED**。RT状態はボーナス後状態へ、残りARTセットは消滅。通常時の低確/高確A/B/Cは未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井、高確スタート保証、ARTストック付与などの公開恩恵は確認できず。

resetPenalties: **CONFIRMED**。前日ボーナス間天井進捗と残存ARTセットは設定変更で失われる。

resetDetection: **PARTIAL_INDIRECT_ONLY**。設定変更時にART中だった液晶はブーモリチェイスへ移ることが確認できるため、閉店時状況を把握できる特殊条件では外観差の参考になり得る。ただしガックン、初期出目、通常時液晶、ランプ等による一般的な変更判別法は **UNVERIFIED_AFTER_RESEARCH**。通常時液晶は設定変更でも引き継ぐため、通常時画面だけを変更根拠にしない。

numericResetData:
- 通常天井: **ボーナス間1280G**
- 設定変更時天井G: **0から再カウント（天井ゲーム数リセット）**
- 設定変更時残りARTセット: **消滅**
- 設定変更時RT状態: **ボーナス後状態**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時低確/高確振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内ART当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **HIGH_FOR_SETTING_CHANGE_CEILING_ART_STOCK_RT_AND_LCD / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_INTERNAL_HIGH_LOW_MODE_AND_GENERAL_DETECTION**。

## conflicts

- releaseDate: グリーンべると **2011-09-19納品開始予定** vs パチスロ必勝本・パチビー・HAZUSE **2011-09-20導入開始**。`DATE_DEFINITION_DIFFERENCE`として両方保持。
- K-Navi現行ページは **2011-06-20** と表示するが、震災による販売延期を伝える2011-08-26付業界記事と複数9月資料に矛盾。`CONFLICT_LIKELY_PAGE_METADATA_ERROR`として主時系列に使わない。
- 製造型式: **マジカルハロウィン3N（KPE）** と **マジカルハロウィン3T5（高砂）** の2型式が確認され、スペック値は一致。別性能機として二重登録しない。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- T5側の検定番号: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset（低確/高確A/B/C）: **UNVERIFIED_AFTER_RESEARCH**
- 一般的なresetDetection（ガックン/出目/ランプ）: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. グリーンべると — 『マジハロ3』導入前後にプロモーション展開
   - https://web-greenbelt.jp/00002205/
   - 2011-08-26記事。東日本大震災で販売延期、2011-09-19から納品開始予定。
   - reliability: **INDUSTRY_HIGH**
2. パチスロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/1884/1/30884
   - 2011/9/20導入、設定別BIG/REG/合算、機械割。
   - reliability: **ANALYSIS_HIGH**
3. パチスロ必勝本 — 設定変更&天井情報
   - https://p.hisshobon.jp/machine/1884/1/30888
   - 設定変更時の天井Gリセット、残りARTセット消滅、RTはボーナス後状態、液晶挙動、1280G天井。
   - reliability: **ANALYSIS_HIGH_DIRECT_RESET**
4. パチスロ必勝本 — ART概要 / RT状態解説 / 通常時モード
   - https://p.hisshobon.jp/machine/1884/1/30891
   - https://p.hisshobon.jp/machine/1884/1/31062
   - https://p.hisshobon.jp/machine/1884/1/31493
   - ART30G/+1.2枚、RT構造、低確/高確A/B/C。
   - reliability: **ANALYSIS_HIGH**
5. パチマガスロマガ — ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/24/h.php
   - 設定別BIG/REG/合算・PAYOUT照合。
   - reliability: **ANALYSIS_HIGH**
6. P-WORLD — マジカルハロウィン3
   - https://www.p-world.co.jp/machine/database/6286
   - BIG203枚、REG64枚、ART30G/+1.2枚、1280G天井、ボーナス確率。
   - reliability: **DATABASE_HIGH**
7. パチビー — マジカルハロウィン3
   - https://www.pachibee.jp/machines/index/211020005
   - 導入日2011-09-20、基本出玉・ART・天井照合。
   - reliability: **DATABASE_HIGH**
8. HAZUSE — マジカルハロウィン3
   - https://hazuse.com/machine/pachislot/1S0457/
   - 導入開始2011-09-20、型式マジカルハロウィン3N、検定番号0S1357、ボーナス確率。
   - reliability: **DATABASE_HIGH**
9. 5号機クロニクル — KPE 5号機全機種一覧
   - https://5goki.com/kpe
   - 2011/9導入、機械割96.9〜113.8%照合。
   - reliability: **RETROSPECTIVE_CROSSCHECK**
10. 中一商事 — 高砂 マジカルハロウィン3
   - https://www.nakaiti.com/html/sTakasago089.html
   - 高砂版型式マジカルハロウィン3T5、同一スペック値を照合。
   - reliability: **SECONDARY_MACHINE_SPEC**
