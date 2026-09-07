# デビルマンIII-悪魔ノ黙示録-

machineName: デビルマンIII-悪魔ノ黙示録-
manufacturer: エレコ
releaseDate: 2015-11-24
releaseDatePrecision: exact_hall_start_multi_source_with_2015-11-23_conflict
recordNumber: 942
generation: 5号機
systemType: A+ART / CZ / パワー管理+セットストック型ART
formalModelName: デビルマンIIIDM
inspectionNumber: 5S0933
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCH_EXHAUSTED_PARTIAL

## identity
- K-Naviは全国一斉導入開始日を2015-11-24と記載。
- P-Summaが引用する当時予定資料も2015-11-24、ちょんぼりすた/man-softも2015-11-24として一致。
- 一方、すろぱちくえすとの2015年導入日順一覧のみ2015-11-23とするため、平均せず `CONFLICT_RELEASE_DATE_2015_11_23_VS_2015_11_24` として保持。ホール導入のcanonicalは複数資料が一致する2015-11-24。
- P-WORLDで型式名「デビルマンIIIDM」、検定番号「5S0933」、メーカー「エレコ」を確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.4% |
| 3 | 101.0% |
| 4 | 105.4% |
| 5 | 110.3% |
| 6 | 116.1% |

- ちょんぼりすた、pacnkで一致。
- 後年5号機クロニクルには設定1〜3を98.7/99.7/102.3%とする表があるが、同ページの本機説明に別機種由来とみられる「擬似ボーナス+AT」「ARMS GARDEN」記述が混入しているため、当該値は汚染資料としてcanonical/CONFLICT採用から除外した。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要比較値としてART初当たりを採用。

| 設定 | ART初当たり | サバトチャンス |
|---:|---:|---:|
| 1 | 1/467.51 | 1/266.41 |
| 2 | 1/451.05 | 1/254.02 |
| 3 | 1/417.40 | 1/254.02 |
| 4 | 1/378.20 | 1/237.45 |
| 5 | 1/344.07 | 1/237.45 |
| 6 | 1/275.11 | 1/215.58 |

- pacnkの精密値をcanonicalとし、ちょんぼりすたのART 1/468〜1/275、サバト1/266〜1/216は丸め差として整合。
- デビルボーナス（同色7）は設定1〜3 1/8192、設定4〜5 1/4681、設定6 1/4096。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約41.5G/50枚**。
- man-softの平均消化ゲーム数。ちょんぼりすたは約40Gと丸め表記。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE_ROUNDING_DIFFERENCE

## netIncrease
- ART「アーマゲドン+バトル・オブ・アポカリプス」: **約2.0枚/G**。
- ちょんぼりすた、P-Summa、パチマガスロマガで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- サバトチャンス: **59枚を超える払い出しで終了**。
- デビルボーナス: **59枚を超える払い出しで終了**。
- ART: ゲーム数固定ではなく、デビルパワーが0になるまで継続するパワー管理+セットストック型。
- P-WORLD、K-Navi、パチマガスロマガで照合。

## modeSpecificMinimumData
- CZ「崩壊STAGE」: 最大30G、ART期待度約40%、30G完走でART確定。
- 天井①: **ボーナス＆ART間999GでART確定**。
- 天井②: **ART間1666GでART確定**。ボーナスを挟んでもART間側は継続する別天井として解析されている。
- 通常時は「低確A/B/C・高確A/B/C・発動A/B/C」の黙示録モードを持つ。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCH_EXHAUSTED_PARTIAL_WITH_PUBLIC_RESET_STATE_NUMERICS
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は黙示録モードを再選択し、**低確A/B/Cのいずれかから開始**する公開振り分けが存在する。
- ただし設定変更時の999G天井/1666G天井カウンタのRESET契約は、当時解析が「調査中」としており、検索語・資料系統を変えて再探索しても直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 据え置き時の999G側/1666G側ゲーム数、黙示録モード、内部状態の引継ぎ契約を本機固有で直接固定できる資料は今回確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なA+ART機や同社別機種の挙動は流用しない。

### powerCycleBehavior
- ちょんぼりすたの朝一表は「電源ON・OFF」の天井挙動を **調査中** としている。
- 設定変更を伴わない純電源OFF→ONでの999G/1666Gカウンタ、黙示録モード、内部状態について、追加の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- normalCeiling1: **ボーナス＆ART間999G → ART**。
- normalCeiling2: **ART間1666G → ART**。
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 設定変更専用の短縮天井、固定朝一天井、リセット時のみの天井G数変更は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 「天井調査中」とする当時解析を、RESET確定と読み替えない。

### modeAfterReset
- 設定変更時は黙示録モード低確A/B/Cから開始する公開振り分けあり。
- ART終了時も同じ表が適用されると解析されている。
- 朝一専用モードや設定変更専用の別モード体系は **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 設定変更時の公開開始振り分け（黙示録モード低確A/B/C）:
  - 設定1: **65.0 / 25.0 / 10.0%**
  - 設定2: **71.9 / 25.0 / 3.1%**
  - 設定3: **65.0 / 25.0 / 10.0%**
  - 設定4: **71.9 / 25.0 / 3.1%**
  - 設定5: **65.0 / 25.0 / 10.0%**
  - 設定6: **62.5 / 18.8 / 18.8%**（丸めにより100.1%）
- ちょんぼりすたの表は設定2〜5の低確B 25.0%を行結合表示しており、テキスト抽出では省略されるため、表構造に従い正規化した。
- reliability: ANALYSIS_SINGLE_PUBLIC_RESET_NUMERIC_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 公開上の主要朝一要素は、設定変更時の黙示録モード再選択。
- ただし全設定とも低確A/B/C開始であり、短縮天井や高確スタート確定などの追加恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更時固有の不利要素として直接公開された確定数値・契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、液晶表示、ランプ、朝一ゲーム数挙動で設定変更/据え置きを確定級に判別する直接資料は、表記揺れ・型式名・メーカー名を含め再探索しても固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 黙示録モードの滞在推測は通常の状態推測材料であり、設定変更確定判別とは扱わない。

### numericResetData
- resetModeLowA_B_CBySetting:
  - S1: **65.0 / 25.0 / 10.0%**
  - S2: **71.9 / 25.0 / 3.1%**
  - S3: **65.0 / 25.0 / 10.0%**
  - S4: **71.9 / 25.0 / 3.1%**
  - S5: **65.0 / 25.0 / 10.0%**
  - S6: **62.5 / 18.8 / 18.8%**
- resetDedicatedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- settingChangeCeilingCounterContract: **UNVERIFIED_AFTER_RESEARCH**
- carryOverCeilingCounterContract: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleCeilingCounterContract: **UNVERIFIED_AFTER_RESEARCH**
- resetDetectionNumeric: **NONE_CONFIRMED_AFTER_RESEARCH**

## conflicts
- `CONFLICT_RELEASE_DATE_2015_11_23_VS_2015_11_24`: すろぱちくえすと導入日順一覧は11/23、K-Navi全国一斉導入・ちょんぼりすた・man-soft・当時予定引用資料は11/24。canonicalは2015-11-24。
- 天井の古い事前情報には「ボーナス間999G」「ボーナス間1666G」とする表現もあるが、後の解析では第1天井をボーナス＆ART間999G、第2天井をART間1666Gとして裏付け。後者をcanonicalとする。
- 5号機クロニクルの本機欄は設定1〜3機械割が他資料と異なるうえ、別機種由来とみられるAT/ARMS GARDEN記述が混在するため、汚染資料として数値CONFLICTには採用しない。

## missingFields
- settingChange ceiling game-counter contract: `UNVERIFIED_AFTER_RESEARCH`
- carryOver ceiling/mode/state contract: `UNVERIFIED_AFTER_RESEARCH`
- purePowerCycle ceiling/mode/state contract: `UNVERIFIED_AFTER_RESEARCH`
- reset-specific shortened ceiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- machine-specific resetDetection: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. K-Navi — デビルマンIII-悪魔ノ黙示録-
   - https://p-kn.com/slot/2397/
   - 全国一斉ホール導入2015-11-24、A+ART、ボーナス仕様。
   - reliability: ANALYSIS_HIGH_PERIOD_DB
2. K-Navi — 2015年11月新台導入カレンダー
   - https://p-kn.com/calendar/201511/
   - 11/24枠のパチスロは本機のみと掲載。
   - reliability: ANALYSIS_HIGH_PERIOD_CALENDAR
3. P-WORLD — デビルマンIII-悪魔ノ黙示録-
   - https://www.p-world.co.jp/machine/database/7910
   - エレコ、5号機ART/CZ、型式デビルマンIIIDM、検定5S0933、59枚超払い出し、ART仕様。
   - reliability: INDUSTRY_DB_HIGH
4. ちょんぼりすた — デビルマン3 悪魔ノ黙示録 スロット｜完全攻略
   - https://chonborista.com/slot/universal-slot/14447/
   - 導入11/24、機械割/初当たり/約40G/約2.0枚G、999G・1666G天井、朝一リセット状態振り分け、電源ON/OFF天井「調査中」。
   - reliability: ANALYSIS_HIGH
5. pacnk — デビルマン3‐悪魔ノ黙示録‐ 設定判別ツール
   - https://pacnk.com/slot/tools/sh_devilman3.html
   - 精密ART初当たり、サバトチャンス、PAYOUT。
   - reliability: ANALYSIS_HIGH
6. man-soft — デビルマン3 悪魔ノ黙示録 解析攻略まとめ
   - https://smaslo.man-soft.com/slot-kaiseki/devilman3.html
   - 導入11/24、約41.5G/50枚、第1/第2天井。
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ — デビルマンIII-悪魔ノ黙示録-
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/96/eleco_slot_96.php
   - ボーナス+ART、ART構造、CZ等。
   - reliability: ANALYSIS_HIGH_PERIOD
8. すろぱちくえすと — 2015年導入日順一覧
   - https://www.slopachi-quest.com/article/2015-new/
   - 本機を11/23導入と掲載。releaseDate CONFLICT source。
   - reliability: ANALYSIS_SINGLE_CALENDAR
9. P-Summa — デビルマンIII回顧
   - https://psumma.jp/pachislo/18218/
   - 当時予定資料を引用し11/24予定、約40G/約2.0枚G、999/1666G天井情報。
   - reliability: RETROSPECTIVE_SECONDARY

## researchNotes
- 欠損探索語: 「デビルマンIII/Ⅲ/3」「悪魔ノ黙示録/悪魔の黙示録」「デビルマンIIIDM」「エレコ」「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「999G」「1666G」「モード」「低確A/B/C」「ガックン」「検定番号」。
- 公式系/業界DB/当時解析/旧DB/後年回顧を横断し、天井カウンタ契約・純電断・ガックンは直接契約を回収できなかったためのみUNVERIFIED/NONE_CONFIRMEDとした。

## confidence
- exactReleaseDate: CONFLICT_HIGH_CANONICAL_2015_11_24
- formalModelName/inspectionNumber: INDUSTRY_DB_HIGH
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE
- initialHit: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE_ROUNDING
- netIncrease/basicPayout: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeiling: ANALYSIS_HIGH
- resetStateDistribution: ANALYSIS_SINGLE_PUBLIC_NUMERIC_TABLE
- settingChangeCeilingCounter: UNVERIFIED_AFTER_RESEARCH
- carryOver: UNVERIFIED_AFTER_RESEARCH
- purePowerCycle: UNVERIFIED_AFTER_RESEARCH
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
