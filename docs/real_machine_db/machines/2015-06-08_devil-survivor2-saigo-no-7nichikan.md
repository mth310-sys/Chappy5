# デビルサバイバー2 最後の7日間

machineName: デビルサバイバー2 最後の7日間
manufacturer: オリンピア
releaseDate: 2015-06-08
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: HAZUSE、K-Navi、複数解析資料で2015-06-08ホール導入開始が一致。
generation: 5号機
systemType: AT / 差枚数管理 / サバイバルポイント周期管理
modelName: デビルサバイバー2最後の7日間H1
inspectionNumber: 5S0051
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.5% |
| 3 | 100.4% |
| 4 | 104.0% |
| 5 | 108.5% |
| 6 | 113.0% |

- K-Navi、HAZUSE、パチマガスロマガ、P-WORLD等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

AT「最後の7日間」初当たり:

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/497.77 |
| 2 | 1/465.94 |
| 3 | 1/437.73 |
| 4 | 1/379.56 |
| 5 | 1/319.59 |
| 6 | 1/271.52 |

- 比較用精密値はパチマガスロマガ。K-Navi / HAZUSEの小数1桁値と一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約48.93G/50枚**。
- HAZUSE、パチマガスロマガで精密値が一致。後年解析の約48.9Gとも整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「最後の7日間」純増 **約2.8枚/G**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「最後の7日間」: **初期50枚 + 全役上乗せ悪魔による上乗せ分**。
- AT当選時の一部では初期差枚上乗せゾーン「龍脈ZONE」を経由する。
- 差枚数管理型で、固定1セットG数ではない。

## modeSpecificMinimumData

- 通常時はサバイバルポイントで進行。基本 **1Gにつき1pt以上**獲得。
- **200ptごとにCZ抽選、500ptごとにAT抽選**。
- ポイント天井は **2000pt到達でAT確定**。実ゲーム数換算はポイント獲得量に左右され、解析上の平均到達目安は約1060G。最大G数と同義ではない。
- CZでAT非当選が6回連続すると、次回7回目CZでAT確定となるCZスルー天井あり。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DISPLAY_CONFLICT_AND_PARTIAL_NUMERIC_RESET_POINT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **サバイバルポイントを再抽選**。液晶表示は0ptから始まるが、内部的にはポイントを持った状態で開始する解析がある。
- **エンカウントモードを再抽選**。
- **CZモードは設定変更時専用の初期振り分けで再抽選**。
- 当時解析では内部状態/天井進捗もクリア扱い。
- 朝一専用の優遇があるため、単純な全状態ゼロ開始とは扱わない。

### carryOverBehavior

- 設定変更なし据え置きは、純電源OFF→ON資料から **内部サバイバルポイント・内部モード・天井進捗を引き継ぐ**挙動を確認。
- 内部状態も引継ぎとする当時解析あり。
- 液晶上のサバイバルポイントは朝一0表示となるため、表示値だけでは内部ptを判定できない。
- CZスルー回数の据え置き契約を独立して明記する高信頼資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 設定変更なしの **電源OFF→ONでは内部サバイバルポイントを引き継ぐ**。液晶上は0pt表示。
- **内部モードを引き継ぐ**。
- 天井進捗を引き継ぐ資料あり。
- 内部状態も引継ぎとする当時解析あり。
- 開始ステージについては資料差があるためCONFLICT欄参照。

### gameCounterReset

- 本機の主要天井管理は固定G数ではなくサバイバルポイント。
- 設定変更: **POINT_PROGRESS_RESELECTED / PREVIOUS_PROGRESS_CLEARED**。
- 電源OFF→ON: **INTERNAL_POINT_PROGRESS_CARRY_CONFIRMED**。
- 液晶表示はどちらも0ptになり得るため、見た目の0ptを内部リセット確定とは扱わない。

### ceilingAfterReset

- 通常ポイント天井は **2000pt**。
- 設定変更時は前日の内部ptを消去したうえで初期ptを再抽選するため、内部pt付与分だけ実質的に天井到達が近くなる可能性がある。
- 設定変更後の内部初期pt振り分けそのものは、今回の再探索で比較可能な直接数値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- よって固定の「リセット天井○G」とは記録しない。

### modeAfterReset

- 設定変更時は **エンカウントモード再抽選**。
- 設定変更時エンカウントモード振り分け（全設定共通）:
  - LOW: **56.56%**
  - MID: **33.33%**
  - HI: **10.00%**
  - SP1: **0.10%**
  - SP2: **0.01%**
- CZモード設定変更時振り分け:

| 設定 | A | B | C | D |
|---:|---:|---:|---:|---:|
| 1～3 | 90.00% | 2.00% | 7.00% | 1.00% |
| 4 | 87.50% | 2.00% | 8.50% | 2.00% |
| 5 | 83.00% | 2.00% | 12.00% | 3.00% |
| 6 | 76.00% | 2.00% | 18.00% | 4.00% |

- 電源OFF→ONでは内部モード引継ぎ。

### stateAfterReset

- 当時解析では設定変更時の通常内部状態を **クリア/再セット側**、電源OFF→ONでは **引継ぎ**としている。
- 別資料では「リセット時は内部状態が上位のモードで始まりやすい」とされるため、朝一は通常運用より優遇方向。
- 状態の具体的初期振り分け数値は今回 `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時は内部的に **サバイバルポイントを獲得した状態から開始**する解析があり、朝一のポイント天井/CZ・AT周期到達を近づける恩恵となる。
- エンカウントモードとCZモードを専用再抽選。HI/SPや上位CZモードが選択される可能性あり。
- 当時攻略ではリセット時を通常時より浅いポイントから狙う立ち回りが提示されている。

### resetPenalties

- 設定変更により前日までの内部サバイバルポイント進捗は消去され、初期pt再抽選へ置き換わる。
- 前日の深いポイント進捗を持つ台では、据え置きに比べ不利になり得る。
- その他の設定変更専用不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 設定変更でも電源OFF→ONでも、液晶上のサバイバルポイントは **0pt表示**になり得るため、表示0pt単独では変更判別不可。
- 設定変更時は内部pt再抽選、電断では内部pt引継ぎなので、前日内部ptを正確に把握できれば挙動差が判別材料になるが、通常は困難とされる。
- 朝一開始ステージについて、当時資料に **「設定変更/電断ともランダム」** と **「設定変更は再抽選、電断は引継ぎ」** の差があるため `CONFLICT_START_STAGE_BEHAVIOR`。
- 本機固有の確定的ガックン契約は、機種名/型式名/メーカー名と「ガックン/設定変更判別/朝一リール」を組み替えて再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- resetEncounterMode: LOW 56.56% / MID 33.33% / HI 10.00% / SP1 0.10% / SP2 0.01%.
- resetCzMode setting1-3: A 90.00% / B 2.00% / C 7.00% / D 1.00%.
- resetCzMode setting4: A 87.50% / B 2.00% / C 8.50% / D 2.00%.
- resetCzMode setting5: A 83.00% / B 2.00% / C 12.00% / D 3.00%.
- resetCzMode setting6: A 76.00% / B 2.00% / C 18.00% / D 4.00%.
- resetInitialSurvivalPointDistribution: `UNVERIFIED_AFTER_RESEARCH`.
- pointCeiling: **2000pt**.
- averagePointCeilingReach: **約1060G（解析上の平均目安。固定天井Gではない）**。

## source / definition control

- 「2000pt」はポイント天井であり、固定2000G天井ではない。基本1G=1pt以上に加えポイント獲得ゾーンがあるため、実G到達は変動する。
- 約1060Gは解析上の平均到達目安。最大・固定値として扱わない。
- 液晶0ptと内部0ptを混同しない。設定変更・純電断とも見た目は0ptになり得る。
- メーカー表記はオリンピア。K-Navi等でブランド親会社「平和」表記があるが、型式DB/HAZUSE/P-WORLDに合わせオリンピアをcanonicalとする。

## sources

取得日: 2026-09-07

1. HAZUSE — https://hazuse.com/machine/pachislot/5S0051/
   - 型式デビルサバイバー2最後の7日間H1、検定5S0051、2015-06-08、AT確率、機械割、48.93G/50枚、ポイント天井、設定変更/電断のpt扱い。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE
2. K-Navi — https://p-kn.com/slot/2256/
   - 2015-06-08、AT初当たり、機械割、純増約2.8枚/G、ポイントシステム。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
3. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/120/h-1.php
   - AT初当たり精密値、PAYOUT。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
4. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/120/c.php
   - 50枚あたり約48.93G。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
5. パチマガスロマガ AT突入フロー — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/120/l.php
   - 200pt/CZ、500pt/AT、AT初期50枚、純増約2.8枚/G。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
6. P-WORLD — https://www.p-world.co.jp/machine/database/7704
   - オリンピア、5号機AT、初期50枚、純増2.8枚/G、設定別AT/機械割、ポイント管理。
   - confidence: INDUSTRY_DATABASE
7. アタリ7 — https://www.atari7.com/slot/date1428296557.php
   - 設定変更/電源OFF→ON比較表、エンカウントモード・CZモード設定変更時振り分け、2000pt天井。
   - confidence: ANALYSIS_SINGLE_DETAILED_PERIOD_SOURCE
8. ちょんぼりすた — https://chonborista.com/slot/orinpia-slot/7612/
   - 朝一設定変更時の内部pt保有、内部モード再抽選/電断引継ぎ、リセット恩恵、2000pt・平均約1060G、48.9G/50枚。
   - confidence: ANALYSIS_HIGH_SECONDARY
9. パチ＆スロ必勝本 — https://p.hisshobon.jp/machine/2565/1/52279
   - 通常時1G1pt以上、200pt/CZ、500pt/AT、通常内部状態構造。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE

## missingFields

- resetInitialSurvivalPointDistribution: UNVERIFIED_AFTER_RESEARCH
- carryOverCzMissCountContract: UNVERIFIED_AFTER_RESEARCH
- resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
- machineSpecificDefinitiveGakkunDetection: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- `CONFLICT_START_STAGE_BEHAVIOR`: 朝一ステージについて、設定変更/電断ともランダムとする資料と、設定変更は再抽選・電断は引継ぎとする資料がある。内部pt/モードのRESET/CARRY契約とは切り分けて保持。
- メーカーの「平和」表記が一部DBにあるが、オリンピア製としてcanonical化。数値競合ではない。
