# アクアビーナス30

status: COMPLETE_CORE
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

machineName: アクアビーナス30
manufacturer: 平和
releaseDate: 2007-05（P-WORLD / 5号機クロニクル。日単位の実納品日は今回未確定）
generation: 5号機初期
systemType: ノーマル / 完全告知 / 30Φ
formalModel: アクアビーナス-30（2007-03-05東京都公安委員会検定告示表記）

## 性能コア

payoutRateBySetting:
- P-WORLD
  - 設定1: 96.5%
  - 設定2: 98.0%
  - 設定3: 99.8%
  - 設定4: 102.8%
  - 設定5: 106.1%
  - 設定6: 110.2%
- 5号機クロニクル
  - 設定1: 97.6%
  - 設定2: 99.2%
  - 設定3: 101.5%
  - 設定4: 104.1%
  - 設定5: 107.0%
  - 設定6: 111.1%

confidence: CONFLICT

note:
- 両資料で設定別機械割が系統的に異なる。定義差（市場値/攻略値等）の一次説明を今回確定できないため平均化せず双方を保持。

initialHitBySetting:
- BIG
  - 設定1: 1/318.14
  - 設定2: 1/303.41
  - 設定3: 1/296.54
  - 設定4: 1/283.71
  - 設定5: 1/267.49
  - 設定6: 1/256.00
- REG
  - 設定1: 1/595.78
  - 設定2: 1/595.78
  - 設定3: 1/546.13
  - 設定4: 1/504.12
  - 設定5: 1/468.11
  - 設定6: 1/364.09
- ボーナス合算
  - 設定1: 1/207.39
  - 設定2: 1/201.03
  - 設定3: 1/192.19
  - 設定4: 1/181.54
  - 設定5: 1/170.22
  - 設定6: 1/150.31

confidence: ANALYSIS_HIGH（パチマガスロマガ） + INDUSTRY（P-WORLD一致）

baseGamesPer50:
- 設定1: 38.60G
- 設定2: 38.69G
- 設定3: 39.54G
- 設定4: 40.02G
- 設定5: 40.27G
- 設定6: 40.27G

confidence: ANALYSIS_HIGH（パチマガスロマガ）

netIncrease:
- NOT_APPLICABLE（通常時に出玉増加用RT/ART/ATは搭載しないノーマル機）
- ボーナス成立後にリプレイ確率が約1/1.82へ上昇するが、これはボーナス成立後状態であり、物差し上の出玉増加RT純増には扱わない。

basicPayout:
- BIG: 規定払い出し345枚超 / 純増約312枚
- REG(CT): 規定払い出し150枚超 / 純増約143枚

confidence: ANALYSIS_HIGH（パチマガスロマガ）

modeSpecificMinimumData:
- 30Φ版。25Φのアクアビーナスとは別スペックとして独立管理。
- ノーマル/完全告知/同時成立あり。
- リプレイとの同時成立が主軸。ボーナス成立後はリプレイ確率が通常1/7.30から約1/1.82へ上昇。
- パチマガスロマガは25Φ版より低設定域のボーナス確率を下げ、コイン持ちを若干上げた30Φ仕様と説明。
- 有利区間制度導入前。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-12

settingChangeBehavior:
- 通常時ゲーム数天井、通常モード、RT/ART/ATストック等の朝一追跡対象は持たず、ホール経営シミュレーション上の主要なリセット対象は `NOT_APPLICABLE`。
- ただしボーナス成立済み状態、告知待ち状態、ボーナス成立後の高リプレイ状態について、設定変更時に保持/消去する本機固有の直接契約はメーカー/当時業界/当時解析/旧DB/回顧資料を再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

carryOverBehavior:
- 通常時ゲーム数天井・モード・ART/ATストックがないため、通常状態で据え置き時に客が追う主要CARRY_OVER要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 成立済みボーナス/告知待ち/ボーナス成立後の高リプレイ状態という特殊ケースの据え置き時契約は `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior:
- 純電源OFF→ONのみで朝一専用モード、短縮天井、当選率優遇が生じる根拠は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 成立済みボーナス/告知待ち/ボーナス成立後の高リプレイ状態を電断後に保持するかについて、本機固有の直接資料は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

gameCounterReset:
- 通常時ゲーム数天井なし。リセット/据え置きで追う内部ゲーム数は `NOT_APPLICABLE`。

ceilingAfterReset:
- `NOT_APPLICABLE`。設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

modeAfterReset:
- 通常時のゲーム数モード管理、朝一専用モード、設定変更専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

stateAfterReset:
- 出玉増加RT/ART/AT状態なし。
- ボーナス成立後にリプレイ確率が通常約1/7.30から約1/1.82へ上昇する仕様自体は確認済み。
- この成立後状態および告知待ち状態の設定変更/据え置き/純電断時処理は `UNVERIFIED_AFTER_RESEARCH`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の天井短縮、モード優遇、当選率優遇、ボーナス保証は `NONE_CONFIRMED_AFTER_RESEARCH`。

resetPenalties:
- `NONE_CONFIRMED_AFTER_RESEARCH`。

resetDetection:
- 「アクアビーナス30 / アクアビーナス-30 / 平和 / 30Φ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 告知」を組み替え再探索したが、本機固有のガックン、初期出目、ランプ等による変更判別契約は `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- 設定変更時モード振り分け: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH
- 短縮天井: NOT_APPLICABLE
- 朝一当選率/恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-12

1. P-WORLD — アクアビーナス30
   - https://www.p-world.co.jp/machine/database/4763
   - 2007年05月導入、30Φ、設定別BIG/REG/合成、出玉率96.5〜110.2%を確認。reset固有契約の直接記載は今回確認できず。
   - reliability: INDUSTRY

2. パチマガスロマガ — アクアビーナス30 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/a.php
   - ノーマル/完全告知/同時成立、BIG約312枚、REG約143枚、25Φ版との仕様差を確認。
   - reliability: ANALYSIS_HIGH

3. パチマガスロマガ — アクアビーナス30 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/c.php
   - 1000円あたり38.60〜40.27G、通常/ボーナス成立後リプレイ確率を確認。reset時の成立済み状態処理は記載なし。
   - reliability: ANALYSIS_HIGH

4. パチマガスロマガ — アクアビーナス30 設定推測
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/e.php
   - 設定別BIG/REG/合成確率を確認。P-WORLD掲載値と一致。
   - reliability: ANALYSIS_HIGH

5. パチマガスロマガ — アクアビーナス30 機種インデックス/攻め時・ヤメ時
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/
   - 攻め時・ヤメ時に特段のゲーム数狙い要素が示されないことを補助確認。
   - reliability: ANALYSIS_HIGH

6. 5号機クロニクル — 平和＆オリンピア5号機全機種一覧
   - https://5goki.com/heiwa-olympia
   - 2007年5月、30Φ、設定別機械割97.6〜111.1%を確認。P-WORLD機械割と競合するためCONFLICT資料として保持。
   - reliability: ANALYSIS_SINGLE

7. Pマンズ / プレイグラフ検定情報
   - https://p-mans.blogspot.com/2007/03/
   - 2007-03-05東京都公安委員会告示で「アクアビーナス-30」の検定通過を確認。検定日であり導入日には使用しない。
   - reliability: INDUSTRY

## missingFields

- 2007年5月の日単位の実納品/ホール導入日
- P-WORLD系機械割と5号機クロニクル機械割の条件定義差
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナス状態・告知持越し・ボーナス成立後高リプレイ状態の正式処理
- 本機固有の設定変更判別（ガックン/初期出目等）

## conflicts

- 設定別機械割:
  - P-WORLD: 96.5 / 98.0 / 99.8 / 102.8 / 106.1 / 110.2%
  - 5号機クロニクル: 97.6 / 99.2 / 101.5 / 104.1 / 107.0 / 111.1%
  - 平均化しない。

## QA note

- 2026-09-12: 性能側 `COMPLETE_CORE` は維持し、reset側のみ正式遡及QA。
- 「アクアビーナス30」「アクアビーナス-30」「平和」「30Φ」に「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「初期出目」「ボーナス成立後」「リプレイ」を組み合わせ、P-WORLD、パチマガスロマガ、当時検定記事、旧5号機DB、後年資料を再探索。
- 通常ゲーム数天井・モード・ART/ATストック等は持たず、朝一専用の短縮天井/モード優遇/当選率優遇は確認されない。
- 一方、成立済みボーナス/告知待ち/ボーナス成立後高リプレイ状態の電源状態別処理と本機固有の変更判別は直接契約を固定できなかったため推測補完せず `PARTIAL_RESEARCH_EXHAUSTED` とする。
