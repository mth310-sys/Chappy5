# ジャックと豆の木

machineName: ジャックと豆の木
manufacturer: ヤーマ
releaseDate: 2006-11
generation: 5号機初期
systemType: ボーナス+RT（リプパン外し型）
coreStatus: COMPLETE_CORE_RESET_QA_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.0% |
| 2 | 97.0% |
| 3 | 100.0% |
| 4 | 104.0% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

本機のボーナスは3種類ともBIG。BIG合算:

| 設定 | BIG合算 |
|---|---:|
| 1 | 1/528.52 |
| 2 | 1/481.88 |
| 3 | 1/468.11 |
| 4 | 1/455.11 |

信頼度: ANALYSIS_HIGH（pacnkと後年回顧資料のレンジ整合）

## baseGamesPer50

1000円（50枚）あたり:

| 設定 | G/50枚 |
|---|---:|
| 1 | 32.87G |
| 2 | 32.98G |
| 3 | 33.40G |
| 4 | 34.03G |

信頼度: ANALYSIS_SINGLE

## netIncrease

RT中 約1.5枚/G。

- 赤7BIG後: 最大300G RT
- BAR揃いBIG後: 最大2000G RT

信頼度: ANALYSIS_HIGH（複数後年資料で整合）

## basicPayout

- BIGの基本獲得目安: 約350枚
- 赤7BIG後RT完走時: BIG込み約800枚規模との回顧資料あり
- BAR揃いBIG後2000G RT完走時: 約3500枚規模との回顧資料あり

物差しDBではRT完走込み値とBIG単体値を混同しない。

## modeSpecificMinimumData

- 4段階設定（1〜4）
- 3種類BIG
- BAR揃いBIGは全設定共通1/8192とする後年資料あり
- リプパン外しによりRT延命可能

## resetBehavior — v0.7 QA（2026-09-03遡及）

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式系表記「ジャックと豆の木 / JACK5 / ヤーマ」と「設定変更 / リセット / 朝一 / 据え置き / RT / ART / 300G / 2000G」を組み替え、メーカー現行アーカイブ、旧解析、pacnk、回顧資料を再探索したが、設定変更時に赤7後300G RT・BAR後2000G RTの残G/権利がどう処理されるかを直接示す高信頼本文を確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のRT残G・RT権利の引継ぎを本機固有資料で直接確認できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONでRT残G/RT状態が保持されるかを直接確認できず。

gameCounterReset: **NOT_APPLICABLE_AS_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED / RT_REMAINING_G_HANDLING_UNVERIFIED**。通常時ゲーム数天井は確認していない。300G/2000GはBIG後RTの最大継続G数であり通常天井ではない。

ceilingAfterReset: **NOT_APPLICABLE / NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED**。

modeAfterReset: **NOT_APPLICABLE_AS_NO_GAME_COUNT_MODE_CONFIRMED**。液晶演出モード選択機能は存在するが、AT機型の内部ゲーム数モードとは別物として扱う。

stateAfterReset: **RT_STATE_HANDLING_UNVERIFIED_AFTER_RESEARCH**。赤7後/黒BAR後のRT状態・残Gの設定変更/電源入切処理を直接確認できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、RT優遇、朝一当選率等は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。RT権利消滅等を推測で確定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「ガックン / 初期出目 / 朝一判別 / 設定変更判別」まで検索語を変更したが、本機固有の変更判別情報を確定できず。

numericResetData:
- normalCeiling: **NONE_CONFIRMED**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH / NO_GAME_COUNT_MODE_CONFIRMED**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**
- postRedBigRtMaximum: **300G**（通常仕様。リセット専用値ではない）
- postBarBigRtMaximum: **2000G**（通常仕様。リセット専用値ではない）

resetBehaviorQA: NORMAL_CEILING_NONE_CONFIRMED_RT_REMAINING_RESET_CARRYOVER_POWER_CYCLE_DETECTION_UNVERIFIED

## sources

取得日: 2026-08-31（resetBehavior QA再取得: 2026-09-03）

1. pacnk — ジャックと豆の木 設定判別ツール
   - https://pacnk.com/slot/tools/sh_jakkutomamenoki.html
   - 設定別BIG合算、機械割
   - reliability: ANALYSIS_SINGLE
2. パチマガスロマガ — ジャックと豆の木(JACK5) 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/03/c.php
   - 1000円あたりプレイ数
   - reliability: ANALYSIS_SINGLE
3. パチマガスロマガ — ジャックと豆の木(JACK5) 同時成立期待度
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/03/i-2.php
   - ボーナス構成補助
   - reliability: ANALYSIS_SINGLE
4. パチmax! — 5号機回想 ジャックと豆の木
   - https://pachinko-max.com/slot/post_392505.html
   - 3種BIG、RT約1.5枚/G、赤7後300G、BAR後2000G、BIG約350枚、BAR BIG 1/8192
   - reliability: ANALYSIS_SINGLE
5. 5号機名機10年史 — ジャックと豆の木
   - https://ameblo.jp/charisma-youbun/entry-12142102229.html
   - 2006年11月、RT性能補助
   - reliability: ANALYSIS_SINGLE
6. BELLCO公式アーカイブ「ジャックと豆の木」
   - https://www.s-bellco.co.jp/products/slot/yama_jackandbeans/
   - 2006年11月登場、ヤーマ、5号機ART、BIG BONUS+ART、液晶モード選択機能
   - reliability: OFFICIAL_RETROSPECTIVE

## missingFields

- 3種BIGそれぞれの設定別確率の完全表は今回の物差し必須項目外として未整理
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- RT remaining/state handling after reset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

現時点で物差し主要値に重大CONFLICTなし。
