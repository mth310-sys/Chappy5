# エージェント・クライシス

machineName: エージェント・クライシス
aliases: エージェント・クライシス / エージェントクライシス / エークラ
manufacturer: エレコ
formalModelName: エージェントクライシス
approvalNumber: 1S0597
releaseDate: 2011-10-02
releaseDateStatus: **DATE_DEFINITION_DIFFERENCE**。グリーンべるとは2011-10-02から納品開始予定、K-Naviは2011-10-03ホール導入開始。平均化せず両定義を保持し、本DB時系列キーは最古の具体的市場投入日である納品開始予定2011-10-02を採用。
generation: 5号機
systemType: 高純増ART + AT + CZ / ゼロボーナス系構造
coreStatus: COMPLETE_CORE_WITH_BASE_GAMES_UNVERIFIED
resetQaStatus: PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontier「マジカルハロウィン3」、recursive machine treeを再取得して開始。
- 開始時正本は recordCount 604 / chronologicalFrontier 2011-09-19。
- 09-19納品 / 09-20導入群と09-26境界を監査し、次の具体的なパチスロ市場投入群として10-02納品 / 10-03導入群を確認。
- repo code searchで本機未登録を確認し、605件目として追加。
- K-Naviの2011-10-03導入と、2011-08-03付グリーンべるとの「10月2日納品開始予定」を定義差として保存。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 98.5% |
| 2 | 99.6% |
| 3 | 101.9% |
| 4 | 105.2% |
| 5 | 109.4% |
| 6 | 115.8% |

- P-WORLDの機種ページで設定別機械割を直接確認。
- 5号機クロニクルにも同一系列の掲載があるが、同ページ周辺の本文に別機種由来とみられる混線があるため、照合補助に留め、主根拠はP-WORLDとする。
confidence: **DATABASE_HIGH_SINGLE_DIRECT_TABLE / SECONDARY_CROSSCHECK_CAUTION**

## initialHitBySetting

### ART初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/291 |
| 2 | 1/263 |
| 3 | 1/274 |
| 4 | 1/232 |
| 5 | 1/248 |
| 6 | 1/193 |

- K-Navi、P-WORLD、グリーンべると（設定1・6端値）で整合。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

### CZ確率

| 設定 | CZ確率 |
|---|---:|
| 1 | 1/631 |
| 2 | 1/613 |
| 3 | 1/581 |
| 4 | 1/564 |
| 5 | 1/514 |
| 6 | 1/493 |

- P-WORLD掲載値。
confidence: **DATABASE_HIGH_SINGLE_DIRECT_TABLE**

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「エージェント・クライシス / エージェントクライシス / エークラ / エレコ / 型式名」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」を組み替え、現存DB・当時解析・回顧資料を再探索したが、本機固有の比較可能な直接値を今回確定できず。小役確率からの逆算は行わない。

## netIncrease

- ART「エージェントラッシュ」: **基本30G+α / 約+3.0枚/G**。
- AT「エージェントタイム」: **30G固定 / 約+1.8枚/G**。終了後はARTへ移行。
- 上乗せゾーン「バーニングバレット」: **23G**、毎ゲーム最低5G上乗せのため突入時点で**最低115G**上乗せ。
- ART終了後「クライシスミッション」: **23G**の引き戻しゾーン。
confidence: **INDUSTRY_AND_DATABASE_HIGH_CROSSCHECKED**

## basicPayout

- MISSION BONUS: **44枚を超える払い出しで終了**。
- 本機は通常の獲得枚数型リアルボーナスを主出玉契機とするA+ART機ではなく、高純増ARTを成立させる特殊なボーナス/RT構造を利用した先駆的機種として扱う。
confidence: **DATABASE_HIGH / HISTORICAL_CONTEXT_HIGH**

## modeSpecificMinimumData

- 通常時はレア小役成立時などに内部モード移行およびART/CZ抽選を行う。
- CZは7図柄15枚役の押し順・色選択を用いた自力型で、継続ゲーム数は **10G / 20G / 30G / 100G**。
- ART突入基本フローは、通常→CZまたはエージェントミッション→AT「エージェントタイム」→ART「エージェントラッシュ」。
- ART終了後は23Gの「クライシスミッション」へ移行し、失敗後も最終CZを経由する。
- 通常天井は **クライシスミッション失敗後の最終CZ終了後から1200G**。到達時はエージェントミッション経由でARTへ。
- 完全再現用の全モード移行率・小役別全抽選値・全上乗せ振り分けは収集対象外。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_WITH_EXISTING_ANALYSIS_SECTION_CONFIRMED**。K-Naviには本機専用の「設定変更後の挙動」解析項目が現存することを確認したが、現行取得経路では項目本文そのものを回収できなかった。機種名・型式・メーカー・略称と「設定変更 / リセット / 朝一 / 天井 / 1200G / モード / CZ」を組み替えて再探索したが、設定変更時の具体的なCLEAR/RETAINを断定できる別の直接本文は今回確定できず。項目の存在だけから内容を推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1200G天井起算点、内部モード、前兆/CZ状態、AT/ART関連状態の保持を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定を触らない単純電源OFF→ON時の天井進捗・内部モード・CZ/前兆・画面状態の扱いを直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井は「CM失敗後の最終CZ終了後から1200G」と確定しているが、設定変更時にそのカウンタをCLEARするかRETAINするかは今回回収できた本文では確定不可。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH / NORMAL_CEILING_1200G_CONFIRMED**。通常天井条件は確定。設定変更専用短縮天井・朝一専用天井値は再探索後も確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に内部モードが存在することは確認できるが、設定変更時の開始モードや振り分け数値は直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ/前兆/AT/ART関連状態を設定変更時にどう処理するかは直接資料未確定。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、高確スタート保証、ART付与、朝一特定G以内の優遇率などの公開数値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等はsettingChangeBehaviorを直接確定できていないため推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ等を用いた本機固有の設定変更判別法は直接確定できず。

numericResetData:
- 通常天井: **CM失敗後の最終CZ終了後から1200G**
- 設定変更時天井G: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内ART当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **HIGH_FOR_NORMAL_CEILING_STRUCTURE / UNVERIFIED_AFTER_RESEARCH_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_MODE_STATE_AND_DETECTION**。

## conflicts

- releaseDate: グリーンべると **2011-10-02納品開始予定** vs K-Navi **2011-10-03ホール導入開始**。`DATE_DEFINITION_DIFFERENCE`として両方保持し平均化しない。
- 5号機クロニクルの本機セクションには機械割系列自体はP-WORLDと一致する一方、基本スペック・ゲーム性本文に本機とは一致しない別機種由来とみられる記述が混在するため、`SOURCE_CONTENT_INCONSISTENCY`として主根拠に使用しない。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior具体本文: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset on setting change: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. グリーンべると — 5号機の新たな可能性示す純増3.0枚を実現
   - https://web-greenbelt.jp/00002258/
   - 2011-08-03記事。ART約+3.0枚/G、AT約+1.8枚/G、ART初当り設定1 1/291〜設定6 1/193、2011-10-02納品開始予定。
   - reliability: **INDUSTRY_HIGH**
2. K-Navi — エージェント・クライシス
   - https://p-kn.com/slot/1478/
   - 2011-10-03ホール導入、設定別ART初当り、ART/AT/CZ構造。「天井機能」「設定変更後の挙動」解析項目の存在を確認。
   - reliability: **ANALYSIS_HIGH / RESET_SECTION_EXISTENCE_ONLY**
3. P-WORLD — エージェント・クライシス
   - https://www.p-world.co.jp/machine/database/6453
   - 型式名、検定番号1S0597、設定別ART/CZ確率、機械割98.5〜115.8%、ART/AT、1200G天井条件を直接確認。
   - reliability: **DATABASE_HIGH**
4. グリーンべると — 5号機トレンド変遷の考察
   - https://web-greenbelt.jp/post-49774/
   - ゼロボを用いた高純増AT/ART史上の位置付けを確認。
   - reliability: **INDUSTRY_RETROSPECTIVE_MEDIUM_HIGH**
5. 5号機クロニクル — ユニバーサル系5号機一覧
   - https://5goki.com/universal
   - 機械割系列はP-WORLDと一致。ただし当該セクション周辺に別機種由来とみられる本文混線があるため主根拠には不採用。
   - reliability: **SECONDARY_LOW_FOR_THIS_RECORD_DUE_CONTENT_INCONSISTENCY**
