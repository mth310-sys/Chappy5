# ときめきメモリアル

machineName: ときめきメモリアル
manufacturer: KPE
formalModelName: ときめきメモリアルU
approvalNumber: 9S0681
releaseDate: 2009-11-24（当時導入予定資料） / 2009-11（KONAMI公式・P-WORLD・5号機クロニクル）
generation: 5号機
systemType: ボーナス+ART（A+ART） / CZ / パンク回避型ART
coreStatus: PARTIAL_BASE_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 98.3% |
| 2 | 99.5% |
| 3 | 101.5% |
| 4 | 103.5% |
| 5 | 106.4% |
| 6 | 110.1% |

- 5号機クロニクル掲載系列。今回、同一系列を直接確認できる独立した当時資料本文までは回収できなかったため、単一回顧DB値として扱う。

confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## initialHitBySetting

| 設定 | BIG | BG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/1872.5 | 1/89.9 | 1/85.8 |
| 2 | 1/1872.5 | 1/88.8 | 1/84.8 |
| 3 | 1/1872.5 | 1/87.4 | 1/83.5 |
| 4 | 1/1872.5 | 1/86.7 | 1/82.9 |
| 5 | 1/1872.5 | 1/86.0 | 1/82.2 |
| 6 | 1/1872.5 | 1/84.7 | 1/81.0 |

- P-WORLDで設定別全値を確認。
- 2009-09-08グリーンべるとでもBIG全設定1/1872.5、BG設定1 1/89.9〜設定6 1/84.7、合算1/85.8〜1/81.0の端点が一致。

confidence: ANALYSIS_HIGH_MULTISOURCE + INDUSTRY_CONTEMPORARY

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

`ときめきメモリアル / ときメモ / ときめきメモリアルU / KPE` と `50枚 / 1000円 / ベース / コイン持ち / ゲーム数` を組み替え、KONAMI公式アーカイブ、P-WORLD、当時業界記事、K-Navi検索結果、旧DB・回顧資料を横断したが、比較可能な50枚ベースの直接値を確定できなかった。

confidence: UNVERIFIED

## netIncrease

- ART「ときめきタイム」: **約+1.2枚/G**。
- 次回ボーナスまで継続するART。

confidence: INDUSTRY_CONTEMPORARY + ANALYSIS_MAJOR_DATABASE

## basicPayout

- BIG: 平均約147枚。
- BG（BONUS GAME）: 平均約35枚。
- P-WORLDと2009年当時グリーンべるとで一致。

confidence: INDUSTRY_CONTEMPORARY + ANALYSIS_MAJOR_DATABASE

## modeSpecificMinimumData

- ART「ときめきタイム」は次回ボーナスまで継続。
- ART継続率は5% / 50% / 60% / 70% / 88%の5段階。BIG後はART突入確定。
- 通常時CZ「ときめきチャンス」はパンク回避1/2を3回成功でART突入確定。
- 通常のゲーム数天井ではなく、**BG→ART非当選の連続回数5〜12連続のいずれかに天井が振り分けられ、到達後のBGでART突入確定**という失敗回数管理の救済仕様。
- 完全再現用のキャラクター別ART内部抽選・通常時全移行率等は収集対象外。

confidence: ANALYSIS_MAJOR_DATABASE + INDUSTRY_CONTEMPORARY

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_BG_MISS_COUNTER_AND_ART_STATE**。本機の主要な朝一影響候補はBG→ART非当選の連続回数5〜12回で管理される救済天井とART/CZ状態だが、設定変更でその失敗回数進捗・選択済み天井・ART/RT/CZ状態がクリア、再抽選、引継ぎのどれになるかを明示した本機固有の確定資料を回収できなかった。推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_BG_MISS_COUNTER_AND_ART_STATE**。据え置き時にBG非当選連続回数やART関連内部状態が翌日へそのまま持ち越されるか、本機固有の直接資料を確認できず。通常G数天井の宵越しとは構造が異なるため、一般論を転用しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみでBG非当選連続回数、ART/RT/CZ状態、初期ステージ・出目等がどう扱われるかの直接根拠を確定できなかった。

gameCounterReset: **NOT_APPLICABLE_FOR_NORMAL_GAME_COUNT_CEILING / BG_MISS_COUNTER_RESET_UNVERIFIED_AFTER_RESEARCH**。通常ゲーム数によるG数天井は確認されず。救済はBG→ART非当選連続回数で管理。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常仕様の救済天井はBG→ART非当選5〜12連続のいずれかだが、設定変更後の天井再抽選・短縮・進捗引継ぎについて公開確定値を回収できなかった。

modeAfterReset: **NO_LONG_NORMAL_GAME_COUNT_MODE_CONFIRMED / RESET_INTERNALS_UNVERIFIED_AFTER_RESEARCH**。通常ゲーム数モード管理は確認されない。ART継続率や救済天井内部値の設定変更時処理は未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_ART_RT_CZ_STATE**。設定変更・据え置き・電源OFF→ON時のART/RT/CZ内部状態処理は直接資料未確認。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の朝一ART優遇、短縮天井、専用当選率などは確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更でBG非当選回数進捗を失う可能性は直接資料で確認できないため、不利要素として断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 液晶 / ステージ` と機種名・型式名を組み替え、公式、業界、P-WORLD、K-Navi系、旧解析・回顧資料を横断したが、本機固有の変更判別法を確定できず。

numericResetData:
  normalGameCeiling: NOT_APPLICABLE
  normalReliefCeilingByBgArtMisses: 5〜12連続のいずれか（通常仕様。リセット専用数値ではない）
  settingChangeBgMissCounter: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 最初の欠損検索で終了せず、`ときめきメモリアル / ときメモ / ときめきメモリアルU / KPE` とreset関連語を多段再探索。
- P-WORLD掲示板には据え置きに関する利用者質問の存在を確認したが、質問自体は仕様根拠にならないため採用していない。
- 後年の別シリーズ・別KPE機のリセット仕様は転用していない。

## conflicts

- 数値性能について今回確定したCONFLICTなし。
- 導入時期はKONAMI公式/P-WORLD/5号機クロニクルが2009年11月の月粒度。当時周辺資料では2009-11-24導入予定を確認できるため、日付粒度差として併記し、公式月表記を否定しない。
- グリーンべると本文中で35枚ボーナスを一箇所「RB」と表記するが、同記事冒頭ではBB+BGの2種類として説明し、P-WORLDもBG 35枚としている。数値競合ではなく名称表記差として扱う。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- setting-change effect on BG→ART miss-count ceiling/progress: UNVERIFIED_AFTER_RESEARCH
- carry-over effect on BG miss-count / ART state: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific published numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. KONAMIアミューズメント 機種アーカイブ「2009年 ときめきメモリアル」 — https://www.konami.com/amusement/psm/archive/ps/2009/tokimeki/ — 稼働開始2009年11月、5号機ART — reliability: OFFICIAL
2. グリーンべると 2009-09-08「元祖恋愛シミュレーションゲームがパチスロに」 — https://web-greenbelt.jp/00003296/ — KPE発表、ART純増1.2枚/G、次回ボーナスまで、最高88%、BIG147枚/BG系35枚、BIG/BG/合算端点 — reliability: INDUSTRY_CONTEMPORARY
3. P-WORLD「ときめきメモリアル」 — https://www.p-world.co.jp/machine/database/5695 — 型式ときめきメモリアルU、検定9S0681、設定別BIG/BG/合算、BIG147枚、BG35枚、ART+1.2枚/G、ART継続率、BG非当選5〜12連続救済天井、2009年11月 — reliability: INDUSTRY_DATABASE / ANALYSIS_MAJOR_DATABASE
4. 5号機クロニクル「KPE 5号機全機種一覧」 — https://5goki.com/kpe — 2009/11、機械割98.3/99.5/101.5/103.5/106.4/110.1% — reliability: RETROSPECTIVE_DATABASE
5. 導入前当時記事 2009-11-12 — https://pguide.blog69.fc2.com/blog-entry-1047.html — 2009-11-24から導入予定との当時記述 — reliability: CONTEMPORARY_SECONDARY_FOR_EXACT_DATE

## sourceQuality

- identity/generation/release month: OFFICIAL + INDUSTRY_DATABASE
- exact release day: CONTEMPORARY_SECONDARY; official is month precision only
- bonus/ART core: INDUSTRY_CONTEMPORARY + ANALYSIS_MAJOR_DATABASE
- payoutRateBySetting: ANALYSIS_SINGLE_RETROSPECTIVE
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- resetBehavior: PARTIAL; key setting-change/carry-over/power-cycle details UNVERIFIED_AFTER_RESEARCH
- no inferred values written
