# ニュートリプルクラウン-30

machineName: ニュートリプルクラウン-30
manufacturer: 清龍ゲームジャパン
formalModelName: Nトリプルクラウン1-30
approvalNumber: 9S0890
releaseDate: 2009-11-24（K-Naviホール導入開始・沖縄先行とみられる） / 2010-01（P-WORLD導入開始） / 2010-01時点で沖縄県納品済み・全国発売開始（グリーンべると）
generation: 5号機 / 30Φ
systemType: ノーマルタイプ / ボーナスのみ / 完全告知
coreStatus: COMPLETE_CORE_BASE_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.72% |
| 2 | 98.95% |
| 3 | 100.66% |
| 4 | 102.65% |
| 5 | 105.45% |
| 6 | 108.28% |

- P-WORLDとpacnkで同系列を確認。

confidence: ANALYSIS_HIGH_MULTISOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/309.1 | 1/569.9 | 1/200.4 |
| 2 | 1/297.9 | 1/504.1 | 1/187.2 |
| 3 | 1/287.4 | 1/481.9 | 1/180.0 |
| 4 | 1/278.9 | 1/436.9 | 1/170.2 |
| 5 | 1/268.6 | 1/397.2 | 1/160.2 |
| 6 | 1/258.0 | 1/368.2 | 1/151.7 |

- BIG/REGはP-WORLD、K-Navi、グリーンべるとで設定1→6レンジが整合。
- 合算はP-WORLD掲載値。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

`ニュートリプルクラウン-30 / ニュートリプルクラウン30 / Nトリプルクラウン1-30 / 清龍ゲームジャパン` と `50枚 / 1000円 / ベース / コイン持ち / ゲーム数` を組み替え、P-WORLD、K-Navi、当時業界記事、旧解析・後年DBを再探索したが、設定別または比較可能な50枚ベースの直接値を確定できなかった。掲示板の「コイン持ちがアップ」は定量値ではないため採用しない。

confidence: UNVERIFIED

## netIncrease

NOT_APPLICABLE（RT/ART/AT非搭載のボーナスのみノーマルタイプ）

## basicPayout

- BIG: 約312枚（P-WORLD / グリーンべると一致）。
- REG/CB: **CONFLICT / DEFINITION_OR_SOURCE_DIFFERENCE**
  - P-WORLD: 約104枚。
  - グリーンべると: 112枚。
- 差の定義を今回の公開資料だけで解消できないため平均しない。

confidence: BIG ANALYSIS_HIGH_MULTISOURCE / REG CONFLICT

## modeSpecificMinimumData

- CHANCEランプ点灯でボーナス確定となる完全告知機。
- ボーナスのみで出玉を増やすノーマルタイプ。
- 通常ゲーム数天井、RT/ART/AT、CZ、ゲーム数管理モードは今回確認されず、物差し用途では非該当として扱う。

confidence: INDUSTRY_DATABASE + ANALYSIS_MAJOR_DATABASE

## resetBehavior — v0.7

settingChangeBehavior: **NO_RESET_SPECIFIC_GAMEPLAY_BENEFIT_CONFIRMED / PHYSICAL_INITIALIZATION_UNVERIFIED_AFTER_RESEARCH**。本機はボーナスのみのノーマルタイプで、天井・モード・状態・ART/AT等のリセット対象となるゲーム進行系を確認できない。設定変更時固有の朝一恩恵・不利・専用当選率も確認できず。一方、設定変更操作によるリール初期挙動など物理的初期化は本機固有資料を回収できず、推測しない。

carryOverBehavior: **NOT_APPLICABLE_FOR_GAME_COUNTER_MODE_CEILING / OTHER_MACHINE_STATE_UNVERIFIED**。通常ゲーム数天井・内部モード・CZ/ART状態が確認されないため、宵越しで価値が変化する主要ゲーム進行カウンタは非該当。ボーナス履歴表示など周辺データ機器は実機内部DBの対象外。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_PHYSICAL_INITIALIZATION / NO_PERSISTENT_GAMEPLAY_COUNTER_CONFIRMED**。単純電源OFF→ONでリール初期出目や告知ランプ状態がどう復帰するかの本機固有根拠は未確認。天井/モード等の持越し対象は確認されない。

gameCounterReset: NOT_APPLICABLE（通常ゲーム数天井・規定ゲーム数管理を確認せず）

ceilingAfterReset: NOT_APPLICABLE（通常天井および設定変更専用短縮天井を確認せず）

modeAfterReset: NOT_APPLICABLE（通常時モード管理を確認せず）

stateAfterReset: NOT_APPLICABLE_FOR_RT_ART_AT_CZ（該当状態を確認せず）

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの朝一当選率、モード優遇、短縮天井、CZ優遇等の公開値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で失われる天井進捗・高モード等の主要不利要素は本機構造上確認されず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ニュートリプルクラウン-30 / ニュートリプルクラウン30 / Nトリプルクラウン1-30 / 清龍ゲームジャパン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / CHANCEランプ / バットランプ` を組み替え、P-WORLD、K-Navi、当時業界記事、後年機種DB・回顧資料を横断したが、本機固有の変更判別法を確定できず。

numericResetData:
  normalGameCeiling: NOT_APPLICABLE / NONE_CONFIRMED
  settingChangeGameCounter: NOT_APPLICABLE
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NOT_APPLICABLE / NONE_CONFIRMED
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_PHYSICAL_POWER_CYCLE_AND_RESET_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 最初の欠損検索で終了せず、正式型式 `Nトリプルクラウン1-30` を含む表記揺れとreset関連語を多段再探索。
- 2007年 `トリプルクラウン-30`、後年 `ニュートリプルクラウン3-30`、ZERO/X系のリセット情報は本機へ転用していない。

## conflicts

- **導入時期/地域定義 CONFLICT**: K-Naviはホール導入開始を2009-11-24と掲載。一方P-WORLDは導入開始2010-01、5号機クロニクルも2010年導入として整理。2010-01-29付グリーンべるとは「沖縄県ではすでに納品開始」「全国発売を開始」としており、2009-11-24は沖縄先行導入、2010-01は全国展開の時期差である可能性が高い。ただしK-Navi本文に地域限定の明記を今回回収できないため、日付を一本化せず保持。
- **REG獲得枚数 CONFLICT**: P-WORLD約104枚 vs 2010-01-29グリーンべると112枚。定義差/記載差を確定できないため双方保持。
- 5号機クロニクルは2010年導入扱い。時系列本線ではK-Navi具体日の2009-11-24を候補日として配置するが、全国導入日は2010-01扱いも併記する。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- exact setting-change physical initialization: UNVERIFIED_AFTER_RESEARCH
- exact power-cycle physical initialization: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- published reset-specific numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「ニュートリプルクラウン-30」 — https://p-kn.com/slot/1099/ — ホール導入開始2009-11-24、設定別BIG/REG — reliability: ANALYSIS_MAJOR_DATABASE
2. P-WORLD「ニュートリプルクラウン30」 — https://www.p-world.co.jp/machine/database/5761 — 5号機ノーマル/30Φ、ボーナスのみ、型式Nトリプルクラウン1-30、検定9S0890、設定別BIG/REG/合算、機械割96.72〜108.28%、BIG約312枚、CB約104枚、導入開始2010-01 — reliability: INDUSTRY_DATABASE
3. グリーンべると / P-WORLD業界ニュース 2010-01-29「新筐体に身を包みトリプルクラウンがパワーアップ」 — https://news.p-world.co.jp/articles/3794/greenbelt — 沖縄県で納品開始済み・全国発売開始、BIG1/309.1〜1/258.0、REG1/569.9〜1/368.2、BIG312枚、REG112枚 — reliability: INDUSTRY_CONTEMPORARY
4. pacnk「ニュートリプルクラウン30 設定判別ツール」 — https://pacnk.com/slot/tools/sh_newtoripurukuraun.html — 設定別BIG/REG/PAYOUT 96.72〜108.28%、2010年1月導入表記 — reliability: ANALYSIS_DATABASE
5. 5号機クロニクル「清龍ゲームジャパン 5号機全機種一覧」 — https://5goki.com/seiryu — 2010年導入機種として整理 — reliability: RETROSPECTIVE_DATABASE

## sourceQuality

- performance core: ANALYSIS_HIGH_MULTISOURCE / INDUSTRY_DATABASE
- release timing: CONFLICT_REGION_OR_ROLLOUT_DEFINITION
- resetBehavior: PARTIAL; gameplay reset effects mostly NOT_APPLICABLE, physical initialization/detection UNVERIFIED_AFTER_RESEARCH
- no inferred values written
