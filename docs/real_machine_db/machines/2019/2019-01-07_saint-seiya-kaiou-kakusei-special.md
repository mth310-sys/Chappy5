# No.1253 パチスロ聖闘士星矢 海皇覚醒Special

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ聖闘士星矢 海皇覚醒Special
- manufacturer: 三洋物産
- releaseDateCanonical: 2019-01-07
- generation: 6号機
- systemType: AT
- formalModelNameCanonical: `S聖闘士星矢海皇覚醒SP-KF`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## releaseDateEvidence
- ちょんぼりすた、K-Navi、1geki、すろぱちくえすとで2019-01-07導入が一致。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED`。

## identificationEvidence
- 三洋物産製はP-WORLD/K-Navi/複数解析で一致。
- 型式名 `S聖闘士星矢海皇覚醒SP-KF` は中古実機DB等で確認したが、今回の探索では検定番号を高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.7% |
| 2 | 98.7% / 98.9% `CONFLICT` |
| 3 | 100.6% |
| 4 | 103.7% |
| 5 | 105.0% |
| 6 | 107.1% |

- 設定2のみ、ちょんぼりすた/イチカツ系が98.7%、1geki/別解析が98.9%で競合。平均化しない。

### initialHitBySetting
- 公開値が安定して照合できた端点を比較コアとして保持。
- 設定1: 海将軍激闘(GB) `1/523.6` / 聖闘士RUSH `1/1748.0`。
- 設定6: GB `1/217.8` / 聖闘士RUSH `1/288.2`。
- 設定2〜5のGB/AT初当たりは主要当時解析に `調査中` が残るため、後発推定表を無理にcanonical化しない。

### baseGamesPer50
- パチマガスロマガ: **51.6〜53.4G/50枚（設定1〜6）**。
- 初期解析には約51G/50枚表記もあるため、canonical comparison rangeを **約51〜53.4G/50枚** とする。

### netIncrease
- AT純増: **約2.8枚/G**。
- 聖闘士RUSH: **1セット20G+α〜100G+α**。

### ceiling
- 通常時最大 **736G** でGB当選。
- モード別最大: 通常736G / 天国準備536G / 海底736G / SP536G / 天国136G。

## modeSpecificMinimumData
- 通常時モード: 通常 / 天国準備 / 海底 / SP / 天国。
- GB状態: 低確 / 高確。
- 有利区間移行時はGB高確へ100%移行し、10G保証。以降ハズレ・リプレイ・ベルの25%で転落。
- 有利区間移行時に小宇宙pt / GBレベル / 不屈ptを再抽選する。

## resetBehavior
### settingChangeBehavior
- 設定変更時: **天井リセット / 内部状態リセット / 非有利区間から開始**。
- 1G目に有利区間をセットし、アイキャッチ＋火時計役モノPUSHでGBレベル等の示唆確認が可能。
- 高確示唆の **火時計ステージ** へ移行する本機固有解析あり。
- 小宇宙pt / 不屈pt / GBレベルは有利区間移行時に再抽選。
- confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC_CROSSCHECKED`。

### carryOverBehavior
- 据え置き独立条件の全内部契約は、純電源OFF→ONと分離した本機固有表を十分に固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 一般則や同系機から自動転記しない。

### powerCycleBehavior
- 本機固有朝一表で電源OFF→ON時は **天井引継ぎ / 内部状態据え置き**。
- 別解析では小宇宙pt / 不屈pt / GBレベル / 有利区間も引継ぎとする整理を確認。
- ステージは当時資料で `調査中`。
- confidence: `ANALYSIS_MACHINE_SPECIFIC_CROSSCHECKED_DIRECTION`。

### gameCounterReset
- 設定変更: **RESET**。
- pure power cycle: **CARRY_OVER**。
- 据え置き独立条件: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### ceilingAfterReset
- リセット専用短縮天井は確認できず。
- 設定変更後も選択モードに応じ最大736/536/136Gの通常モード天井体系を使用。

### modeAfterReset
- 設定変更後は有利区間再セットに伴いモード/GBレベル等を再抽選。
- 公開された有利区間移行時GBレベル振り分け:
  - 通常: Lv1 75.0 / Lv2 20.3 / Lv3 3.1 / Lv4 1.6 / Lv5 0%
  - 海底: Lv1 100%
  - 天国準備: Lv1 94.5 / Lv2 3.1 / Lv3 0.8 / Lv4 0.8 / Lv5 0.8%
  - SP: Lv2 87.5 / Lv3 6.3 / Lv4 3.1 / Lv5 3.1%
  - 天国: Lv5 100%
- 設定変更専用の「モードそのもの」の振り分け表は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 有利区間移行時GB高確移行率: **100%**。
- GB高確: **10G保証**、保証後はハズレ/リプレイ/ベルの25%で転落。

### advantageousSectionReset
- 設定変更: **非有利区間へ** → 1G目に有利区間セット。
- pure power cycle: **引継ぎ**とする本機固有解析あり。
- GB/AT終了後など有利区間の切替時には不屈pt・GBレベル・小宇宙ptを引き継げず再抽選。

### resetBenefits
- 朝一設定変更後は有利区間移行時抽選を受け、GB高確から開始。
- 公開朝一関連数値:
  - 小宇宙pt: 0pt 62.6 / 600pt 27.9 / 700pt 8.6 / 800pt 0.8%、獲得時平均627.4pt。
  - 不屈pt: 0pt 58.4 / 5pt 6.4 / 10pt 12.3 / 20pt 6.4 / 30pt 10.8 / 40pt 5.0 / 45pt 0.7 / 50pt 0.002%、獲得時平均20.2pt。
  - GB高確移行: 100%。
- 上記は「有利区間移行時」公開値であり、設定変更専用値と誤認しない。

### resetPenalties
- 設定変更で前日の天井進捗、小宇宙pt、不屈pt、GBレベル等を持ち越せない。
- 設定変更専用の追加不利率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後は非有利区間スタート→1G目で有利区間セット、火時計ステージ移行という挙動が判別補助となる。
- アイキャッチと火時計役モノ色はGBレベル等の示唆であり、単独で設定変更確定とは扱わない。
- 本機固有のリールガックン発生率/確定性は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- normalCeilingMax: `736G`
- powerCycleCeiling: `CARRY_OVER`
- settingChangeCeiling: `RESET`
- settingChangeAdvantageousSection: `NON_ADVANTAGEOUS_SECTION_THEN_SET_ON_1ST_GAME`
- powerCycleAdvantageousSection: `CARRY_OVER_REPORTED_MACHINE_SPECIFIC`
- advantageousSectionEntryGBHigh: `100%`
- advantageousSectionEntryCosmoPoint: `0=62.6%;600=27.9%;700=8.6%;800=0.8%`
- advantageousSectionEntryFukutsuPoint: `0=58.4%;5=6.4%;10=12.3%;20=6.4%;30=10.8%;40=5.0%;45=0.7%;50=0.002%`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## conflictsAndQualityNotes
- 設定2機械割は `98.7%` と `98.9%` が競合。平均化せずCONFLICT。
- 50枚ベースは初期概要の約51Gと後発解析51.6〜53.4Gがあるため、定義差/解析更新差を考慮して範囲保持。
- 有利区間移行時数値は設定変更だけでなくGB敗北/AT終了後等にも適用されるため「朝一専用抽選値」へ過大解釈しない。
- 詳細内部抽選テーブルは実機完全再現用となるため収集対象外。

## missingFields
- certificationNumberの高信頼固定。
- 据え置きを純電源OFF→ONから分離した全内部状態契約。
- 設定変更専用のモード振り分け表。
- 本機固有ガックン発生率/確定条件。
- 設定2〜5の初当たり確率を当時高信頼複数ソースで確定できる完全表。

## sources
取得日: 2026-09-11

1. ちょんぼりすた — https://chonborista.com/slot/sanyo-slot/69654/ — 2019-01-07、機械割、約51G、純増2.8枚/G、736G天井、モード別天井、有利区間、朝一設定変更/電源OFF→ON、火時計、各有利区間移行時数値 — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
2. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/35/c.php — 50枚51.6〜53.4G、小役確率 — reliability: `MAJOR_ANALYSIS_HIGH`
3. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/35/13.php — 聖闘士RUSH純増2.8枚/G、1セット20〜100G+α — reliability: `MAJOR_ANALYSIS_HIGH`
4. 1geki — https://1geki.jp/slot/s_seiya_ks/ — 2019-01-07、設定別出玉率端点、GB/AT初当たり端点 — reliability: `MAJOR_ANALYSIS_HIGH`
5. K-Navi — https://p-kn.com/slot/3139/ — 2019-01-07、三洋物産 — reliability: `MACHINE_DATABASE_HIGH`
6. P-WORLD — https://www.p-world.co.jp/machine/database/8817 — 三洋物産、6号機AT、純増2.8枚/G、最大736G天井、ゲームフロー — reliability: `MACHINE_DATABASE_HIGH`
7. おスロおパチおいでやす — https://oslo-opachi.com/2019/01/03/post-3809/ — 電源ON/OFFと設定変更時の天井/有利区間/小宇宙pt/不屈pt/GBレベル整理 — reliability: `CONTEMPORARY_ANALYSIS_SECONDARY`
8. パチマ（中古実機DB） — https://www.pachima.com/c/slot/s_28sonota/S00217 — 型式名 `S聖闘士星矢海皇覚醒SP-KF` — reliability: `USED_MACHINE_DATABASE_SECONDARY`
