# 哲也 新宿VS上野DX

machineName: 哲也 新宿VS上野DX
manufacturer: アリストクラートテクノロジーズ
formalModelName: 哲也ＤＸ２
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-02（具体導入日 UNVERIFIED_AFTER_RESEARCH）
generation: 5号機
systemType: A+ART（ボーナス+CZ「天運タイム」+ART「玄人タイム」）
coreStatus: PARTIAL_BASE_ART_INITIAL_HIT_RESET_BEHAVIOR_UNVERIFIED

## chronologyNote

- 最新mainの recordCount 456 / chronologicalFrontier 2010-02-21 を確認し、2/22へ進む前の2010年2月月内漏れ監査を継続。
- `哲也 新宿VS上野DX` をrepo検索し、既存レコードなしを確認。
- 5号機クロニクルは導入時期を **2010/2** と記録し、P-WORLDの2010年2月新台スケジュールにも本機が掲載される系列を確認したため、2010年2月機として採用。
- `導入日 / ホール導入 / 稼働開始 / 納品 / 2月14日 / 2月21日 / 2月22日 / 2月28日`、機種名表記揺れ・型式名・メーカー名を組み替えて再探索したが、全国ホール導入の具体日を高信頼に固定できなかった。発表日・記事投稿日を導入日へ格上げしない。
- 月精度の遡及漏れ修復として457件目に追加し、chronologicalFrontierは **2010-02-21** を維持する。

## payoutRateBySetting

- 設定1: **97.3%**
- 設定2: **98.8%**
- 設定3: **100.9%**
- 設定4: **104.2%**
- 設定5: **107.0%**
- 設定6: **112.1%**

5号機クロニクルの設定別系列を採用。P-WORLD月間スケジュール系に掲載される本機の機械割レンジ 97.3〜112.1% と端点整合。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_RANGE_CORROBORATED

## initialHitBySetting

### BIG
- 設定1: **1/383.3**
- 設定2: **1/364.1**
- 設定3: **1/364.1**
- 設定4: **1/326.1**
- 設定5: **1/326.1**
- 設定6: **1/276.2**

### REG
- 設定1: **1/618.3**
- 設定2: **1/555.4**
- 設定3: **1/541.6**
- 設定4: **1/489.1**
- 設定5: **1/474.9**
- 設定6: **1/431.2**

### ボーナス合算
- 設定1: **1/236.6**
- 設定2: **1/219.9**
- 設定3: **1/217.7**
- 設定4: **1/195.6**
- 設定5: **1/193.3**
- 設定6: **1/168.5**

### ART初当たり
- **UNVERIFIED_AFTER_RESEARCH**

ARTはボーナス後等のCZ「天運タイム」から特殊リプレイを契機に突入し、ストック等も絡むため、物差し用に比較可能な設定別ART初当たり確率は今回確定できず。

confidence: ANALYSIS_HIGH_FOR_BONUS / UNVERIFIED_FOR_ART_INITIAL_HIT

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

`50枚 / 1000円 / ベース / コイン持ち / 千円あたりゲーム数`に加え、`哲也DX2 / 哲也 新宿VS上野DX / アリストクラート`を組み替え、当時解析サイト・旧DB・販売資料・回顧資料を再探索したが、比較可能な直接値を確定できず。小役確率から逆算しない。

confidence: UNVERIFIED

## netIncrease

- ART「玄人タイム」: **約+1.4枚/G**
- 基本ART: **30G**
- CZ「天運タイム」中特殊リプレイ1成立: **30G ART**
- 特殊リプレイ2成立: **100G ART**
- 特殊リプレイ3成立: **1000G ART**

A-SLOTの機種解説で純増約+1.4枚/Gと30G/100G/1000Gを確認。パチマガスロマガでもART1セット30Gおよび前作比30Gあたり+10枚の強化を確認。

**注:** 特殊リプレイ3の「1000G」はART継続ゲーム数であり、通常時のゲーム数天井ではない。天井値へ転記しない。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## basicPayout

- BIG: **約212枚**（310枚の規定払い出し）
- REG: **約55枚**（59枚の規定払い出し）
- ART「玄人タイム」: **約+1.4枚/G**

パチマガスロマガの基本システムで実獲得目安と規定払い出しを区別して確認。

confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 前作「哲也 新宿VS上野」のスペック違いで、ボーナス獲得枚数を抑えつつART性能を強化したA+ART機。
- ボーナス終了後等にCZ「天運タイム」へ移行し、特殊リプレイ入賞でART「玄人タイム」へ突入。
- 基本ARTは30G。特殊リプレイの種類により100Gまたは1000GのロングARTが確定する公開仕様がある。
- 通常ゲーム数型の固定天井については、`天井 / 宵越し / ゲーム数 / 攻め時・ヤメ時`を含めて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。1000G ARTを天井と混同しない。

confidence: ANALYSIS_HIGH_FOR_PUBLIC_ART_STRUCTURE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`設定変更 / リセット / 朝一 / 変更時 / 初期化`と機種名・型式名・メーカー名を組み替えて再探索したが、CZ/ARTストック・内部状態等の変更時処理を本機固有の直接資料で確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。`据え置き / 宵越し / 前日 / 朝一`まで再探索したが、CZ/ART状態・ストック等の据え置き時引継ぎを直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。`電源OFF ON / 電源入切 / 電断復帰 / 朝一`で再探索したが、単純電源OFF→ONのみの場合の状態保持/初期化を本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_FOR_CONFIRMED_FIXED_GAME_CEILING / OTHER_INTERNAL_COUNTERS_UNVERIFIED**。通常ゲーム数型の固定天井は今回確認されず。ART/CZ等の内部カウンタ処理は不明。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井・朝一専用到達ゲーム数は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。朝一専用モード、モード再抽選、モード引継ぎを示す本機固有の公開根拠を確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ「天運タイム」・ART「玄人タイム」・ストック等の設定変更/据え置き/電源復帰時処理は直接確認できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用ART/CZ優遇、高確スタート、短縮天井等の主要恩恵は高信頼資料で確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。ストック消滅等を一般論から推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / 液晶 / ランプ / 設定変更判別 / 据え置き判別`まで検索語を広げたが、本機固有の高信頼判別要素を確定できず。

numericResetData:
  resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## conflicts

- **NONE_CONFIRMED_FOR_CORE_VALUES**。今回採用した設定別ボーナス確率・機械割と、基本獲得性能・ART純増の公開資料間で、定義上の明確な競合は確認されず。
- 導入具体日は複数検索で固定できないため `CONFLICT` ではなく `UNVERIFIED_AFTER_RESEARCH`。記事投稿日・前作の導入日を本機DXへ流用しない。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- concrete release day in 2010-02: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- setting-specific ART initial hit: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode/state: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. 5号機クロニクル「アリストクラートテクノロジーズ 5号機全機種一覧」 — https://5goki.com/aristocrat — 2010/2導入、設定別BIG/REG/合算、機械割97.3〜112.1% — reliability: RETROSPECTIVE_DATABASE / ANALYSIS_HIGH
2. P-WORLD 2010年2月新台スケジュール — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2010-02 — 2010年2月群への掲載、機械割レンジ照合 — reliability: INDUSTRY_DATABASE
3. パチマガスロマガ「哲也 新宿vs上野DX 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/40/a.php — BIG約212枚（規定310枚）、REG約55枚（規定59枚）、ART基本30Gと前作比強化 — reliability: ANALYSIS_HIGH
4. A-SLOT「アリストクラート 哲也 新宿vs上野DX」 — https://www.a-slot.com/SHOP/aristocrat10.html — 型式表記「哲也ＤＸ２」、5号機、ART約+1.4枚/G、天運タイム、30/100/1000G ART — reliability: RETROSPECTIVE_MACHINE_DATABASE
5. パチマガスロマガ「哲也 新宿vs上野DX」機種索引 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/40/b.php — 天井/攻め時・ヤメ時を含む当時解析項目の存在確認と再探索起点 — reliability: ANALYSIS_HIGH
6. K-Navi「哲也 新宿VS上野DX」 — https://p-kn.com/slot/1154/direct/ — 本機専用ページ・当時掲示板の導入日問い合わせ痕跡。具体導入日の確定根拠には採用せず — reliability: LEGACY_ANALYSIS_CONTEXT
7. パチセブン「アリストクラートの歴史」 — https://pachiseven.jp/articles/detail/11837 — 2010年機、前作スペック違い・ART偏重型という後年回顧 — reliability: RETROSPECTIVE_INDUSTRY

## retrievalDate

2026-09-03
