# アクアビーナス30

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

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

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 本機固有の設定変更時に、通常遊技状態以外のゲーム数・モード・RT/ART状態を初期化する仕様は確認されない。
- ただし設定変更時のボーナス成立状態、告知持越し、リール挙動等を明記した一次/高信頼資料は今回確認できず、細部はUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井・通常モード・ART/ATストック等を持たないため、ホール経営上の主要な「据え置きゲーム数狙い」要素はNONE_CONFIRMED。
- ボーナス成立済み状態を跨いだ場合等の特殊ケースはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで朝一専用モードや短縮天井が発生する根拠はNONE_CONFIRMED。
- ボーナス成立状態/告知持越しの電断時処理はUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井なし。リセット/据え置きで追う内部ゲーム数はNOT_APPLICABLE。

ceilingAfterReset:
- NOT_APPLICABLE / NONE_CONFIRMED（通常時ゲーム数天井なし）。

modeAfterReset:
- 通常時のゲーム数モード管理、朝一専用モードはNONE_CONFIRMED。

stateAfterReset:
- 出玉増加RT/ART/AT状態なし。
- ボーナス成立後のみリプレイ確率が上昇する仕様は確認されるが、設定変更・電断時の成立済みボーナス状態処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の天井短縮、モード優遇、当選率優遇などはNONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- 「アクアビーナス30 / アクアビーナス-30 / 平和」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を組み合わせて再探索したが、本機固有のガックン・表示等による高信頼な変更判別情報は確認できずUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NOT_APPLICABLE / NONE_CONFIRMED
- 短縮天井: NOT_APPLICABLE
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. P-WORLD — アクアビーナス30
   - https://www.p-world.co.jp/machine/database/4763
   - 2007年05月導入、30Φ、設定別BIG/REG/合成、出玉率96.5〜110.2%を確認。
   - reliability: INDUSTRY

2. パチマガスロマガ — アクアビーナス30 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/a.php
   - ノーマル/完全告知/同時成立、BIG約312枚、REG約143枚、25Φ版との仕様差を確認。
   - reliability: ANALYSIS_HIGH

3. パチマガスロマガ — アクアビーナス30 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/c.php
   - 1000円あたり38.60〜40.27G、通常/ボーナス成立後リプレイ確率を確認。
   - reliability: ANALYSIS_HIGH

4. パチマガスロマガ — アクアビーナス30 設定推測
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/32/e.php
   - 設定別BIG/REG/合成確率を確認。P-WORLD掲載値と一致。
   - reliability: ANALYSIS_HIGH

5. 5号機クロニクル — 平和＆オリンピア5号機全機種一覧
   - https://5goki.com/heiwa-olympia
   - 2007年5月、30Φ、設定別機械割97.6〜111.1%を確認。P-WORLD機械割と競合するためCONFLICT資料として保持。
   - reliability: ANALYSIS_SINGLE

6. Pマンズ / プレイグラフ検定情報
   - https://p-mans.blogspot.com/2007/03/
   - 2007-03-05東京都公安委員会告示で「アクアビーナス-30」の検定通過を確認。検定日であり導入日には使用しない。
   - reliability: INDUSTRY

## missingFields

- 2007年5月の日単位の実納品/ホール導入日
- P-WORLD系機械割と5号機クロニクル機械割の条件定義差
- 設定変更/電源OFF→ON時の成立済みボーナス状態・告知持越し等の特殊処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- 設定別機械割:
  - P-WORLD: 96.5 / 98.0 / 99.8 / 102.8 / 106.1 / 110.2%
  - 5号機クロニクル: 97.6 / 99.2 / 101.5 / 104.1 / 107.0 / 111.1%
  - 平均化しない。

## QA note

- 最初の検索結果だけで欠損確定せず、「アクアビーナス30」「アクアビーナス-30」「平和」「30Φ」と、性能語・設定変更/リセット/朝一/据え置き/電断/ガックンを組み替えて、P-WORLD、パチマガスロマガ、当時検定記事、5号機DB、後年資料を横断した。
- 性能コアは必要項目が揃ったためCOMPLETE_CORE。resetBehaviorはノーマル機として主要な朝一狙い要素がないことまでは確認できるが、電断/設定変更時の成立済みボーナス等の特殊ケースが確定できずPARTIAL。
