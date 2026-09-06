# リバティベルV

machineName: リバティベルV
manufacturer: アクロス
releaseDate: 2013-09-17
releaseDatePrecision: exact_day
releaseDateStatus: VERIFIED_MULTI_SOURCE
modelName: リバティベルファイブT

generation: 5号機
systemType: ART / 擬似ボーナス / ゲーム数上乗せ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- アクロスの5号機「リバティベルV」。往年のリバティベルシリーズ名を冠するが、本機は純粋なリアルボーナス機ではなく、ARTによる擬似ボーナス主体機。
- K-Naviはホール導入開始を **2013-09-17**、グリーンべるとは **2013-09-16納品開始予定** と報道。ホール導入時系列キーは2013-09-17とする。
- 中古実機DBに型式名 **リバティベルファイブT** の掲載あり。
- confidence: INDUSTRY_HIGH + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.6% |
| 2 | 99.5% |
| 3 | 102.2% |
| 4 | 106.1% |
| 5 | 110.3% |
| 6 | 115.3% |

- K-Navi、5号機クロニクル、中古実機DB、後年解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 擬似ボーナス合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/152.8 |
| 2 | 1/145.7 |
| 3 | 1/132.1 |
| 4 | 1/117.7 |
| 5 | 1/103.0 |
| 6 | 1/87.9 |

### BIG / REG

| 設定 | BIG | REG |
|---|---:|---:|
| 1 | 1/299.0 | 1/328.1 |
| 2 | 1/285.3 | 1/312.0 |
| 3 | 1/255.5 | 1/285.7 |
| 4 | 1/229.5 | 1/251.0 |
| 5 | 1/204.3 | 1/214.6 |
| 6 | 1/178.1 | 1/178.3 |

- EXTRA BONUS（Mr.Do揃い）は後年整理資料で **全設定共通1/6553.6**。設定別初当たり比較の主軸には混ぜない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE for combined; ANALYSIS_SINGLE_RETROSPECTIVE for separated BIG/REG exact table

## baseGamesPer50

- **約31G/1000円**。
- 後年解析DBで取得。今回、当時業界/解析の別系統から同じベース値を直接照合できなかったため単一二次資料扱い。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- 擬似ボーナスART: **純増約2.0枚/G**。
- グリーンべると、K-Navi、P-WORLD、パチマガスロマガで一致。
- 一部後年解析ページの概要欄に「ART中純増1.5枚/G」とする記述があるが、同一ページ内の本文は2.0枚/Gであり、当時一次寄り資料とも不一致。この孤立値は本線に採用せず `CONFLICT_ISOLATED_RETROSPECTIVE_1_5_VS_CONTEMPORARY_2_0` として保持。
- confidence: INDUSTRY_HIGH + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- EXTRA BONUS（Mr.Do揃い）: **250G / 約500枚**。
- BIG: **100G / 約200枚**。
- REG: **50G / 約100枚**。
- ART中の上乗せにより実獲得は増える場合があるため、ここでは上乗せなしの基本性能を記録。
- confidence: INDUSTRY_HIGH + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時には少なくとも **通常 / 引き戻し / 天国 / プレミアム** のモード系が存在。
- P-WORLDでは擬似ボーナス後に引き戻し、天国（66%ループ）、プレミアム（90%ループ）への移行期待を説明。
- プレミアムモード滞在時は **5Gまたは11Gで擬似ボーナス当選**と後年解析に掲載。
- 通常時の全モード移行テーブルはミッション対象外。設定変更時のみ必要な振り分けはresetBehavior側で別管理する。

## ceiling

- **擬似ボーナス間900Gで擬似ボーナス当選**。
- 設定変更後は天井までのゲーム数がクリアされる。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_COUNTER_CONFIRMED__RESET_MODE_PAGE_EXISTS_EXACT_VALUES_UNRECOVERED__CARRYOVER_POWER_CYCLE_DETECTION_UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井までのゲーム数をクリア**。
- K-Naviには本機専用の「モード移行率(設定変更後)」解析項目、パチマガスロマガには「朝イチ・設定変更」項目が存在することを確認。
- ただし今回の検索取得系では、設定変更後の具体的モード振り分け本文/数値表を安全に回収できなかったため、その数値は推測で補完しない。
- confidence for game counter reset: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 純据え置き時の天井G進捗、内部モード、CZ状態等の保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の天井CLEARだけから据え置き時KEEPを逆算しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** の天井G、内部モード、CZ状態、表示状態は **UNVERIFIED_AFTER_RESEARCH**。
- 「電源OFF ON」「電断」「電源入れ直し」を機種名/型式名/メーカー名と組み替えて再探索したが、本機固有の直接契約を固定できなかった。

### gameCounterReset

- setting change: **RESET_CONFIRMED**（擬似ボーナス間900G天井の進捗をクリア）。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常天井: **擬似ボーナス間900G**。
- 設定変更で天井カウンタはクリア。
- 設定変更専用の900G未満への固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 設定変更後にモード移行抽選があることは、K-Naviの本機専用「モード移行率(設定変更後)」項目の存在から確認。
- **具体的な通常/引き戻し/天国/プレミアムの変更後振り分け率は UNVERIFIED_FOR_EXACT_TABLE_AFTER_RESEARCH**。
- 通常時/ボーナス後のモード挙動を設定変更後振り分けへ転用しない。

### stateAfterReset

- 右上がりリプレイから移行するCZ/リプレイ高確などの内部状態があるが、設定変更・据え置き・電源OFF→ON時の初期状態契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後のモード再抽選自体は確認できるが、朝一専用の天国優遇率・プレミアム移行率など比較可能な公開数値を今回回収できなかった。
- 設定変更専用短縮天井、確定CZ、確定擬似ボーナス等: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更で前日の900G天井進捗が消えるため、**前日ハマリの宵越し天井狙いには不利**。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、ランプ、液晶/ドット表示による設定変更/据え置き判別は **UNVERIFIED_AFTER_RESEARCH**。
- 通常時の告知・モード示唆演出は存在するが、変更判別契約と同義には扱わない。

### publicMorningNumbers

- setting-change mode distribution: **UNVERIFIED_FOR_EXACT_TABLE_AFTER_RESEARCH**。
- reset-shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- specific reset benefit probability: **NONE_CONFIRMED_AFTER_RESEARCH**。
- game counter: **setting changeで900G天井進捗CLEAR**。

## conflicts / safeguards

- 5号機クロニクルの「Aタイプ」「BIG約311枚/REG約104枚」という記述は、当時のグリーンべると・K-Navi・P-WORLD・パチマガスロマガが示す **ART擬似ボーナス（250/100/50G、純増約2.0枚/G）** と構造的に競合する。物差しDBでは当時資料を優先し、本機をART/擬似ボーナスとして扱う。
- 後年解析DBの概要中に「純増1.5枚/G」が1箇所ある一方、同ページ本文および複数当時資料は約2.0枚/Gで一致するため、平均しない。
- 「リバティベル」「リバティベルIII」等の旧号機シリーズを混入させない。
- 設定変更後モードは、ページ項目の存在だけから具体率を生成しない。

## sources

取得日: **2026-09-06**

1. グリーンべると / P-WORLD業界ニュース「アクロス第2弾は遊べるライトART」
   - https://news.p-world.co.jp/articles/5986/greenbelt
   - 2013-07-25。ART 777=100G、77BAR=50G、EXTRA=250G、純増2.0枚/G、2013-09-16納品開始予定。
   - confidence: INDUSTRY_HIGH

2. K-Navi「リバティベルV」
   - https://p-kn.com/slot/1909/
   - ホール導入2013-09-17、設定別擬似ボーナス合算、機械割、ART基本性能、天井項目、設定変更後モード解析項目の存在。
   - confidence: ANALYSIS_HIGH

3. P-WORLD「リバティベルV」
   - https://www.p-world.co.jp/machine/database/7158
   - 5号機ART、純増約2.0枚/G、EXTRA 250G/BIG 100G/REG 50G、通常時/ボーナス後モード概要。
   - confidence: INDUSTRY_DATABASE_HIGH

4. パチマガスロマガ「リバティベルV 基本情報」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/02/a.php
   - 擬似ボーナスART、純増2.0枚/G、Mr.Do約500枚/BIG約200枚/REG約100枚。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ「リバティベルV」機種インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/02/across_slot_02.php
   - モード移行率、天井・ヤメ時、朝イチ・設定変更の解析項目が存在することを確認。
   - confidence: ANALYSIS_HIGH_INDEX_ONLY

6. pachislo-data「パチスロリバティベルV(アクロス)」
   - https://pachislo-data.com/across/libertybellv
   - 導入2013-09-17、平均31G/1000円、合算/機械割、基本獲得、900G天井、設定変更で天井Gクリア。
   - 同ページ概要の純増1.5枚/Gは本文2.0枚/Gおよび複数当時資料と競合するため本線不採用。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

7. pacnk「リバティベルV 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_libertybellv.html
   - BIG/REG設定別確率、EXTRA全設定共通1/6553.6、900G天井、設定変更で天井Gリセット。
   - confidence: ANALYSIS_RETROSPECTIVE

8. 中一商事「アクロス リバティベルV」
   - https://www.nakaiti.com/html/sAcross085.html
   - 型式名リバティベルファイブT、機械割/合算、100G/50G、純増2.0枚/G。
   - confidence: RETROSPECTIVE_MACHINE_DATABASE

9. 5号機クロニクル「ユニバーサル系5号機全機種一覧」
   - https://5goki.com/universal
   - 機械割系列と導入月の照合に使用。ただしAタイプ/リアルボーナス風の記述は当時複数資料と競合するため構造情報には採用しない。
   - confidence: RETROSPECTIVE_SECONDARY
