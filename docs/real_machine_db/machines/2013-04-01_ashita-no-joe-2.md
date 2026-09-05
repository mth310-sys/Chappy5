# パチスロ「あしたのジョー」2

machineName: パチスロ「あしたのジョー」2
manufacturer: タイヨーエレック
releaseDate: 2013-04-01
releaseDatePrecision: exact_day
releaseDateNotes: サミーネットワークス/タイヨーエレック系発表で2013-04-01からホール導入開始を直接確認。別の同社アプリ告知では「2013年3月にホール導入」と月表記があり、月表記差はCONFLICT/広義表現として保持。納品予定3月31日という当時販売記事もあるため、納品開始とホール導入日を分離する。
generation: 5号機
systemType: AT特化 / 擬似ボーナス + セットストックAT
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- 正式表記: **パチスロ「あしたのジョー」2**。
- メーカー: **タイヨーエレック**。
- 導入開始日: **2013-04-01**。
- 型式名/検定番号: 今回の再探索では高信頼の直接確認に至らず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 99.3% |
| 3 | 101.7% |
| 4 | 104.7% |
| 5 | 107.7% |
| 6 | 112.1% |

- 2-9伝説の整理値。後年パチナビも設定1 97.4%～設定6 112.1%の範囲を掲載し整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_RANGE_MATCH

## initialHitBySetting

| 設定 | JOE BONUS | JOE BATTLE ROAD | AT合算 |
|---|---:|---:|---:|
| 1 | 1/271.2 | 1/461.8 | 1/170.9 |
| 2 | 1/224.7 | 1/478.8 | 1/152.9 |
| 3 | 1/249.0 | 1/472.1 | 1/156.5 |
| 4 | 1/206.7 | 1/437.8 | 1/140.4 |
| 5 | 1/241.6 | 1/376.2 | 1/147.1 |
| 6 | 1/187.1 | 1/395.6 | 1/127.0 |

- P-WORLDと2-9伝説でAT合算が一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約32G/50枚（1000円）**。
- 当時販売業界系ブログのスペック欄で直接記載。
- 単一系統のため精度は `ANALYSIS_SINGLE / INDUSTRY_BLOG` 相当として扱う。

## netIncrease

- AT「JOE BATTLE ROAD」: **約+2.8枚/G**。
- サミーネットワークス系機種紹介、P-WORLD、当時販売記事で一致。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- JOE BONUS: **30G / 50G / 100G**が基本。資料によって33G/110Gの振り分けも確認されるため、最大110GのAT擬似ボーナスとして扱う。
- JOE BATTLE ROAD: **1セット40G**。
- JOE VICTORY ROAD: **40G**のJBRストックゾーン。
- VICTORY RUSH: **20G+α**のJBRストック特化ゾーン。
- confidence: OFFICIAL_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

### 通常時モード / 天井

- 通常A / 通常B / 天国の3系統を確認。
- 通常A/B最大 **961G**、天国最大 **96G**でAT当選。
- 設定変更で天井G数はリセット。
- confidence: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_COUNTER_RESET_AND_RESET_MODE_NUMERIC_CONFIRMED__POWER_CYCLE_STATE_STAGE_GACCKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井ゲーム数をリセット**。
- 設定変更後は通常時モードを再セットする解析値が公開されている。
- 設定1の設定変更後モード振り分けは、**通常A 90.8% / 通常B 6.1% / 天国 3.1%**。
- 設定2～6の設定変更後モード具体振り分けは今回の再探索で直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_COUNTER_AND_SETTING1_RESET_MODE

### carryOverBehavior

- 設定変更時に天井Gがリセットされることは確認できるが、**純据え置き時の天井G・通常モード・内部状態を機種固有資料が明示した契約**は、表記揺れ/メーカー名/シリーズ名と据え置き・朝一・天井・モードを組み替えた再探索後も直接確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更しないことから自動的に「全て引継ぎ」と推測補完しない。

### powerCycleBehavior

- **電源OFF→ONのみ**の天井ゲーム数、モード、内部状態、液晶ステージの保持/再抽選契約は、機種名・メーカー・朝一・設定変更・据え置き・電源ON/OFF・ガックン等を組み替えて再探索したが直接確認できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更時: **RESET**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で前日天井進捗は消失。
- 設定変更専用の固定短縮天井は確認できない。
- 設定変更後に通常A/Bを選んだ場合の最大天井は **961G**、天国なら **96G**。

### modeAfterReset

- 設定変更時: **RESELECT**。
- 公開値（設定1）:
  - 通常A: **90.8%**
  - 通常B: **6.1%**
  - 天国: **3.1%**
- 設定2～6の設定変更時振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/単純電断時のモード契約: `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 高確/低確等の内部状態について、設定変更・据え置き・電断ごとの機種固有契約および公開振り分けは十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定1では設定変更後 **3.1%で天国モード**となり、最大96G内のAT当選対象。
- 設定変更専用の短縮天井や追加ストック等の別恩恵は今回確認できず。

### resetPenalties

- 設定変更で前日の天井進捗がリセットされるため、前日深いハマリの宵越し価値は失われる。
- 設定1の設定変更後は通常Aが90.8%で大半を占める。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、朝一表示等を用いた確定/強判別契約は、検索語・資料系統を変えた再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 天井Gリセットは内部挙動であり、朝一即時の外見判別材料としては扱わない。

### publicMorningNumbers

- resetModeDistribution_setting1:
  - normalA: **90.8%**
  - normalB: **6.1%**
  - heaven: **3.1%**
- resetHeavenRate_setting1: **3.1%**。
- resetShortCeiling: **NONE_CONFIRMED**。
- normalCeiling: **961G (normal A/B)**。
- heavenCeiling: **96G**。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**。

### numericResetData

- settingChangeCeilingProgress: RESET
- settingChangeMode: RESELECT_WITH_PUBLISHED_SETTING1_DISTRIBUTION
- carryOverCeilingProgress: UNVERIFIED_AFTER_RESEARCH
- powerCycleCeilingProgress: UNVERIFIED_AFTER_RESEARCH
- powerCycleMode: UNVERIFIED_AFTER_RESEARCH
- setting1ResetModeA: 90.8%
- setting1ResetModeB: 6.1%
- setting1ResetHeaven: 3.1%

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_COUNTER_AND_SETTING1_RESET_MODE__UNVERIFIED_AFTER_RESEARCH_FOR_POWER_CYCLE_PURE_CARRYOVER_STATE_STAGE_AND_GACCKUN

## missingFields

- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- resetModeDistributionSetting2to6: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleContract: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- machineSpecificGacckunContract: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- releaseDate:
  - **2013-04-01** — サミーネットワークス/タイヨーエレック系の2013-04-11発表で「2013年4月1日からホール導入が開始」と直接記載。
  - **2013年3月** — 2013-05-01/05-08の同社アプリ告知で「2013年3月にホール導入」と月表記。
  - **2013-03-31～** — 当時販売記事の納品予定。
  - 本DBの時系列キーは、具体的なホール導入開始日を直接記した **2013-04-01** を採用し、他表記を平均しない。

## sources

取得日: **2026-09-06**

1. サミーネットワークス / PR TIMES — Android版体感アプリ告知（2013-04-01ホール導入開始を直接記載）
   - https://prtimes.jp/main/html/rd/p/000000015.000002703.html
   - reliability: OFFICIAL_COMPANY_RELEASE
2. 4Gamer — 同社発表転載「VictoryRush」（2013-04-01ホール導入開始、機種演出）
   - https://www.4gamer.net/games/211/G021176/20130411063/
   - reliability: INDUSTRY_PRESS_RELEASE_REPRINT
3. P-WORLD — 基本仕様、JOE BONUS/JBR設定別確率、AT合算、純増、40Gセット
   - https://www.p-world.co.jp/machine/database/7013
   - reliability: ANALYSIS_HIGH
4. 2-9伝説まとめ — 機械割、AT合算、天井961G/96G、設定変更で天井リセット、設定1の設定変更後モード振り分け
   - https://29den.com/ashitanojo2/
   - reliability: ANALYSIS_HIGH_SECONDARY
5. スロスター当時記事 — 32G/1000円、AT純増2.8枚/G、40Gセット、納品予定3/31
   - https://ameblo.jp/slostar/entry-11465643877.html
   - reliability: INDUSTRY_BLOG_SINGLE
6. 777TOWN機種紹介 — 2013年発売、AT特化、純増約2.8枚/G、VictoryRush 20G+α
   - https://www.777town.net/explanation/slot_joe2.jsp
   - reliability: OFFICIAL_RELATED_SERVICE
7. サミーネットワークス / PR TIMES — iOS版告知（「2013年3月にホール導入」月表記CONFLICT）
   - https://prtimes.jp/main/html/rd/p/000000027.000002703.html
   - reliability: OFFICIAL_COMPANY_RELEASE

## researchNotes

- 欠損判定前に「あしたのジョー2 / パチスロあしたのジョー2 / タイヨーエレック / Sammy」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF→ON / 電源ON/OFF / 天井 / モード / ガックン / 型式 / 検定番号 / ベース / 50枚」を組み替えて検索。
- P-WORLD、2-9伝説、サミーネットワークス発表、4Gamer転載、当時販売記事、後年DBを横断。
- 取得できなかった電断・純据え置き・状態・ガックン契約は推測せず `UNVERIFIED_AFTER_RESEARCH`。
