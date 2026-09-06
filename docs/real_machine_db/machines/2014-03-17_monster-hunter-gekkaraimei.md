# パチスロ モンスターハンター 月下雷鳴

machineName: パチスロ モンスターハンター 月下雷鳴
aliases: モンスターハンター 月下雷鳴 / モンハン月下雷鳴 / 月下雷鳴
manufacturer: エンターライズ
releaseDate: 2014-03-17
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: AT / 擬似ボーナス1G連型
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- HAZUSEで導入開始日 **2014-03-17**、型式名 **モンスターハンター月下雷鳴ZX**、検定番号 **3S0962**、メーカー **エンターライズ**を確認。
- K-Navi、パチスロ解析ガイドでもホール導入開始2014-03-17で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.82% |
| 2 | 98.34% |
| 3 | 100.20% |
| 4 | 104.81% |
| 5 | 109.01% |
| 6 | 115.22% |

- 複数解析資料で同系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス（AT）初当たり

| 設定 | 初当たり |
|---|---:|
| 1 | 1/299.8 |
| 2 | 1/284.1 |
| 3 | 1/278.5 |
| 4 | 1/238.5 |
| 5 | 1/228.0 |
| 6 | 1/183.5 |

- HAZUSE、パチスロ解析ガイドで一致する系列を採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **30.1G〜30.3G / 50枚**。
- HAZUSE解析値。
- 後年資料の約30G表記とも整合。
- confidence: ANALYSIS_HIGH_CROSSCHECK

## netIncrease

- 擬似ボーナスAT: **約2.5枚/G**。
- K-Navi、パチマガスロマガ、パチスロ解析ガイド等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 青7: **60G or 100G+α / 平均約180枚**。
- 赤7: **40G / 50G / 70G+α / 平均約130〜160枚（整理資料では約150枚）**。
- BAR: **20G / 30G+α / 平均約80〜100枚（整理資料では約90枚）**。
- モンスター討伐成功で剥ぎ取りチャンスを経てボーナス1G連を獲得する構造。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は規定ゲーム数・レア小役・CZから擬似ボーナスを目指す。
- CZはアイルーBINGO、緊急クエスト等。
- 通常時内部モードは通常A/B/C、天国A/B、設定変更専用リセットモードを確認。
- 全ゲーム数振り分けや通常時全モード移行テーブルは実機完全再現用のため本DB対象外。

## ceiling

- 通常時最大 **999G**でボーナス当選。
- 設定変更後は専用リセットモードへ移行し最大 **864G**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE_WITH_PUBLIC_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は天井ゲーム数をリセット。
- 内部状態を再抽選。
- 内部モードは設定変更専用の **リセットモード**へ移行。
- 液晶ステージはランダム。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は前日の内部ゲーム数を引き継ぐ挙動が解析資料で確認され、朝一フェイク前兆も内部ゲーム数を参照する。
- 内部モード・内部状態も設定変更されない限り引継ぎ扱いとする資料が複数存在。
- confidence: ANALYSIS_HIGH_CROSSCHECK

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ON**では、天井ゲーム数・内部モード・内部状態を引き継ぐ。
- 液晶ステージはランダム抽選。
- 液晶上の履歴表示は電源OFF→ONでリセットされるとの解析記録があるため、内部契約と表示契約を分離する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 据え置き: **CARRY_OVER_CONFIRMED**。
- 電源OFF→ONのみ: **CARRY_OVER_CONFIRMED**。

### ceilingAfterReset

- 通常最大天井 **999G** → 設定変更後最大 **864G**。
- **135G短縮**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset

- 設定変更後は必ず専用 **リセットモード**へ。
- 通常モードA/B/C・天国A/Bの通常移行率全表は本DB対象外。
- リセットモードのゲーム数解除率として、**128G以内の解除率が設定1・2=25%、設定3・4=30%、設定5・6=35%**という公開解析値を複数整理資料で確認。
- confidence: ANALYSIS_HIGH_CROSSCHECK

### stateAfterReset

設定変更時の内部状態振り分け（HAZUSE解析）:

| 設定 | 通常A | 通常B | 高確A | 高確B | 高確C | 高確D |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 76.2% | 12.5% | 6.3% | 3.1% | 1.6% | 0.39% |
| 2 | 74.2% | 13.3% | 6.7% | 3.7% | 1.7% | 0.46% |
| 3 | 71.2% | 14.5% | 7.6% | 4.3% | 1.8% | 0.55% |
| 4 | 68.2% | 15.6% | 8.5% | 4.9% | 2.1% | 0.65% |
| 5 | 64.6% | 17.1% | 9.6% | 5.5% | 2.4% | 0.78% |
| 6 | 60.0% | 18.8% | 10.7% | 6.3% | 3.1% | 1.17% |

- 別解析整理資料でも丸め差のみで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 最大天井が999Gから864Gへ短縮。
- 設定変更後1回目のボーナスは専用図柄振り分けを参照し、攻略資料では **赤7以上が約75%**と整理される。
- 128G以内のゲーム数解除率が設定別に **25% / 30% / 35%**。
- confidence: ANALYSIS_HIGH_CROSSCHECK

### resetPenalties

- 設定変更により前日ハマリG数・通常モード・内部状態を引き継がないため、宵越し天井期待は消失。
- それ以外の設定変更専用の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **ガックン判別不可**とする解析資料あり。
- 設定変更後はリセットモード固有の朝一フェイク前兆挙動があり、**128G付近の前兆終了**が変更推測材料。
- 据え置き時は前日からの内部G数を参照したフェイク前兆となるため、前日最終G数との組み合わせが判別材料になる。
- CZ前兆等と競合する場合があり、単独で100%確定判別とはしない。
- confidence: ANALYSIS_HIGH_CROSSCHECK

### publicMorningNumbers

- 設定変更後最大天井: **864G**。
- 128G以内ゲーム数解除率: **設定1・2 25% / 設定3・4 30% / 設定5・6 35%**。
- 設定変更後1回目ボーナス: **赤7以上 約75%**とする攻略解析整理あり。
- 設定変更時内部状態振り分け: 上記stateAfterReset表。
- 朝一フェイク前兆発生率の詳細数値も公開されているが、客AIの変更判別に必要な主要結論のみ採用し、全前兆テーブルは保存対象外。

## conflicts / safeguards

- 初当たりは資料によって 1/299 / 284 / 278 / 238 / 228 / 183 の整数丸め表記も存在するが、精密系列 1/299.8 / 284.1 / 278.5 / 238.5 / 228.0 / 183.5 と矛盾するものではなく丸め差として扱う。
- 機械割も96.8〜115.2%の丸め表記があるため、精密系列を本線とする。
- 赤7平均獲得は約130〜160枚という範囲表記と約150枚という整理表記があり、定義差/丸めのためCONFLICTにせず範囲を保持。
- リセット時「モード移行率」として通常A/B/C/天国Aの表を掲示する後年資料もあるが、専用リセットモード内部の解除テーブルとの表現差があるため、本レコードでは『設定変更後は専用リセットモード』を上位契約として保持し、通常時全モード移行表は実機完全再現範囲として収集しない。

## sources

取得日: **2026-09-06**

1. HAZUSE「パチスロ モンスターハンター 月下雷鳴」
   - https://hazuse.com/machine/pachislot/3S0962/
   - 導入2014-03-17、型式、検定番号、初当たり、50枚ベース、設定変更時内部状態等。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE

2. K-Navi「パチスロ モンスターハンター月下雷鳴」
   - https://p-kn.com/slot/2016/
   - ホール導入開始2014-03-17、AT構造、基本獲得枚数、朝一攻略項目の存在。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE

3. パチマガスロマガ「パチスロ モンスターハンター 月下雷鳴」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/08/a.php
   - 2014年3月、AT純増/ボーナスゲーム数・平均獲得枚数、ゲーム性。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE

4. パチスロ解析ガイド「モンスターハンター 月下雷鳴」
   - https://www.pachislot-guide.net/2014/monster-hunter2/
   - 導入2014-03-17、初当たり、機械割、純増、基本獲得、通常天井999G。
   - confidence: ANALYSIS_HIGH_RETROSPECTIVE

5. すろぱちくえすと「モンハン月下雷鳴 設定変更・リセット時の恩恵解析」
   - https://www.slopachi-quest.com/article/monhan-reset/
   - 2014年当時記事。設定変更時最大864G、天井Gリセット、状態/モード再抽選。
   - confidence: ANALYSIS_HIGH_PERIOD_ARTICLE

6. 期待値見える化「モンハン月下雷鳴 天井・ゾーン・朝一リセット解析」
   - https://slotjin.com/zone/monsterhunter2/
   - 設定変更/電源OFF→ON比較、内部状態振り分け、ガックン不可、朝一前兆判別。
   - confidence: ANALYSIS_HIGH_RETROSPECTIVE_CROSSCHECK

7. スロパチまとめ「モンスターハンター 月下雷鳴」
   - https://slotblogpachinkoblog.com/monsterhunter2/
   - 電源OFF→ON時の天井・内部モード引継ぎ、設定変更時状態振り分けを照合。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

8. おスロおパチおいでやす「モンハン月下雷鳴 朝一リセットまとめ」
   - https://oslo-opachi.com/2018/05/25/post-699/
   - 最大864G、128G以内解除率25/30/35%、赤7以上75%、内部状態数値の照合。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## missingFields

- resetBehavior.resetPenalties: 設定変更による宵越し消失以外の専用不利要素はNONE_CONFIRMED_AFTER_RESEARCH
- resetBehavior.resetDetection: 確定100%判別要素はNONE_CONFIRMED; 前兆挙動は推測材料

## recordMeta

addedAt: 2026-09-06
addedAs: CHRONOLOGICAL_RELAY3_FRONTIER_ADVANCE
chronologicalSequenceNumber: 804
previousRecord: docs/real_machine_db/machines/2014-03-10_big-bonus-x64.md
frontierDateAfterAdd: 2014-03-17
