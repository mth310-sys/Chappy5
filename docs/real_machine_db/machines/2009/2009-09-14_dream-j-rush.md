# ドリームJラッシュ

machineName: ドリームJラッシュ
manufacturer: ウィンネットテクノロジー / ラスター
formalModelName: ぱちすろドリームジャック
inspectionNumber: 9S0344
releaseDate: 2009-09-14（ALL7当時導入一覧の具体日。P-WORLDは2009年09月、2009-09-29付グリーンべるとは「納品は既に開始」と報道）
generation: 5号機
systemType: ART主体 / ボーナス搭載 / パンク回避型 / ゲーム数管理ART
coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT_ART_INITIAL_HIT_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

算出系列が大きく一致しないため平均せずCONFLICT保持する。

### 系列A — P-WORLD

| 設定 | 機械割 |
|---:|---:|
| 1 | 94% |
| 2 | 98% |
| 3 | 100% |
| 4 | 104% |
| 5 | 109% |
| 6 | 115% |

confidence: INDUSTRY_DB

### 系列B — パチマガスロマガ（シミュレート値）

| 設定 | PAYOUT |
|---:|---:|
| 1 | 97.33% |
| 2 | 98.71% |
| 3 | 100.44% |
| 4 | 102.52% |
| 5 | 105.26% |
| 6 | 107.93% |

confidence: OLD_ANALYSIS_HIGH

## initialHitBySetting

ART初当たりの設定別比較可能値は、機種名/型式名/メーカー名と `ART初当たり / ART突入率 / 設定1 / 設定6 / モード / 特殊リプレイ` を組み替え、P-WORLD、K-Navi、旧パチマガスロマガ、当時業界記事、後年回顧まで再探索したが直接表を回収できず `UNVERIFIED_AFTER_RESEARCH`。

ボーナス確率は全設定共通で以下を確認。

| 種別 | 確率 |
|---|---:|
| 赤BIG | 1/65536 |
| 黒BIG | 1/65536 |
| BIG合成 | 1/32768 |
| REG | 1/45.20 |
| ボーナス合成 | 1/45.13（P-WORLD丸め1/45.1） |

confidence: OLD_ANALYSIS_HIGH_PLUS_INDUSTRY_DB

## baseGamesPer50

旧パチマガスロマガ直接掲載:

- 全設定共通: **20.27G / 50枚（1000円）**

本機は通常時に15枚役/JAC入賞や変則押しでペナルティが発生する特殊仕様のため、正規手順前提の解析値として扱う。

confidence: OLD_ANALYSIS_HIGH

## netIncrease

- ART「ドリームラッシュ」: **約+2.0枚/G**

P-WORLD、K-Navi、2009-09-29付グリーンべるとの3系統で一致。

confidence: CONTEMPORARY_INDUSTRY_PLUS_MULTI_ANALYSIS

## basicPayout

- BIG: 約448枚（P-WORLD）
- REG/JAC IN BONUS: 約42枚（P-WORLD）
- K-Naviの配当表ではBIGは465枚超払い出しで終了、JAC IN BONUSは3回入賞または12回遊技で終了。
- ART初当たり時の基本ゲーム数: **100G / 300G / 500G**
- ART開始前「ドリームチャレンジ」で10G単位を賭け、成功時は配当に応じて増加。比較用の最低基本性能は上記100/300/500Gを採用し、カジノゲーム内部の詳細振り分けは実機完全再現領域のため収集対象外。

confidence: INDUSTRY_DB_PLUS_CONTEMPORARY_INDUSTRY_PLUS_ANALYSIS

## modeSpecificMinimumData

- ART「ドリームラッシュ」は初当たり時100/300/500G、純増約2.0枚/G。
- 通常時は3モードに滞在し、前兆モード移行で最大32Gの前兆後ARTへ。
- 特殊リプレイ成立時等にモード抽選。通常時ミッションクリアでもART確定。
- BIG終了後はプレミアムドリームラッシュへ突入（P-WORLD）。
- 通常時は順押し厳守。15枚役入賞、JAC入賞、変則押しにペナルティがあるため、通常時のゲーム性・ベース評価は正規手順前提。
- 通常ゲーム数による天井の直接記載は今回の再探索で確認できず、`CEILING_UNVERIFIED_AFTER_RESEARCH`。通常モードは存在するが、ゲーム数天井モードとは別物として扱う。

## resetBehavior — v0.7

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。旧パチマガスロマガの機種INDEXに「攻め時・ヤメ時・設定変更時」専用項目が存在することまでは確認できたが、現存検索結果から設定変更時本文を確定回収できず。3モードの再抽選/引継ぎ、前兆、ART潜伏、REG成立状態等を一般論で補完しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の通常3モード、前兆、ART潜伏、内部REG/JAC成立状態の具体的引継ぎ挙動を本機固有資料で確認できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時と設定変更時の差、本機固有のモード/前兆/ART潜伏/成立状態処理を確定できず。

gameCounterReset: CEILING_GAME_COUNTER_NOT_CONFIRMED。通常ゲーム数天井の存在自体を直接資料で確認できないため、リセット/引継ぎを推測しない。

ceilingAfterReset: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時の短縮天井・専用ゲーム数は確認できず。通常天井自体も今回直接確認できていない。

modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時3モードの存在はP-WORLD/K-Naviで確認できるが、設定変更時の再抽選/振り分け/朝一専用モードは回収できず。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。前兆（最大32G）、ART潜伏、ART中、ボーナス成立/内部JAC状態等の設定変更・電断処理を本機固有資料で確定できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用のART優遇、モード優遇、朝一当選率、短縮天井など公開恩恵は今回確認できず。

resetPenalties: NONE_CONFIRMED_AS_SETTING_CHANGE_EFFECT。通常遊技中の押し順/15枚役/JAC入賞ペナルティは存在するが、設定変更時固有の不利要素とは別物。

resetDetection: UNVERIFIED_AFTER_RESEARCH。`ドリームJラッシュ / ドリームＪラッシュ / ぱちすろドリームジャック / ウィンネット / ラスター` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / セグ / モード / 天井` を組み替えて再探索したが、ガックン・初期出目・セグ等による本機固有の設定変更/据え置き判別を確定できず。

numericResetData:
  publishedMorningModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH_MODE_EXISTS_BUT_RESET_HANDLING_UNVERIFIED

resetBehaviorResearchNote:
- 表記揺れ `ドリームJラッシュ / ドリームＪラッシュ / ぱちすろドリームジャック / ウィンネットテクノロジー / ラスター` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 前兆 / ART潜伏 / ガックン / セグ` を組み替えて再探索。
- P-WORLD、K-Navi、2009年当時グリーンべると、旧パチマガスロマガ、後年5号機ヒストリアを横断。
- 通常時3モード、最大32G前兆、ART純増、ART基本100/300/500G、特殊ペナルティ、50枚20.27Gは回収できた。
- 設定変更時専用ページの存在は確認できるが本文が現存検索から直接回収できず、モード/状態/据え置き/単純電断/変更判別は推測せずUNVERIFIED_AFTER_RESEARCH。

## sources

取得日: 2026-09-03

1. ALL7「2009年9月の導入機種一覧」 — https://www.all7.jp/plans/index/2009/09/10 — ドリームJラッシュ、導入予定2009-09-14（直前handoffで未処理候補・具体日として確認済み） — reliability: CONTEMPORARY_INTRODUCTION_LIST
2. P-WORLD「ドリームJラッシュ」 — https://www.p-world.co.jp/machine/database/5693 — ラスター、5号機ART、型式ぱちすろドリームジャック、検定9S0344、BIG/REG、機械割94〜115%、ART約2枚/G、100/300/500G、3モード、BIG後プレミアムART — reliability: INDUSTRY_DB
3. グリーンべると「カジノの興奮を融合した新タイプのパチスロ登場」2009-09-29 — https://web-greenbelt.jp/00003273/ — ウィンネットテクノロジー、ART100〜500G、純増約2枚/G、納品開始済み — reliability: CONTEMPORARY_INDUSTRY
4. K-Navi「ドリームJラッシュ」 — https://p-kn.com/slot/1071/ — ART約2.0枚/G、100/300/500G、15枚役/JAC/押し順ペナルティ、基本配当 — reliability: CONTEMPORARY_ANALYSIS
5. K-Navi「ART・ドリームラッシュ」 — https://p-kn.com/slot/1071/12647/ — 特定役によるモード抽選、前兆モード、ART約2.0枚/G、100/300/500G — reliability: CONTEMPORARY_ANALYSIS
6. パチマガスロマガ「ドリームJラッシュ ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/10/h.php — BIG1/32768、REG1/45.20、合算1/45.13、PAYOUT97.33〜107.93% — reliability: OLD_ANALYSIS_HIGH
7. パチマガスロマガ「ドリームJラッシュ 小役確率/1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/10/c.php — 全設定共通20.27G/1000円 — reliability: OLD_ANALYSIS_HIGH
8. パチマガスロマガ「ドリームJラッシュ INDEX」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/10/winnet_slot_10.php — 「攻め時・ヤメ時・設定変更時」項目の存在、基本解析INDEX — reliability: OLD_ANALYSIS_HIGH
9. パチマガスロマガFREE「5号機ヒストリア2009年後編」 — https://pachimaga.com/free/playback/b608c317a9bf513764dffe548d40d0f64a54a95b.php — 2009年機群としてドリームJラッシュ掲載 — reliability: RETROSPECTIVE_EXPERT

## missingFields

- ART initial hit rate by setting: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior details: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior details: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- game-count ceiling existence/value: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning mode distribution/benefit rate: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- payoutRate: P-WORLD 94/98/100/104/109/115% vs パチマガスロマガ simulation 97.33/98.71/100.44/102.52/105.26/107.93%。差が大きく算出条件を現存資料で解消できないため平均しない。
