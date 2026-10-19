# パチスロ マクロスフロンティア2

machineName: パチスロ マクロスフロンティア2
formalModelName: パチスロマクロスフロンティア2G
inspectionNumber: 4S0166
manufacturer: SANKYO
releaseDate: 2014-05-07
releaseDatePrecision: exact_nationwide_start
generation: 5号機
systemType: 疑似ボーナス+ART / ゲーム数管理+レア役解除 / CZ搭載
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- K-Navi全国一斉導入カレンダー、パチビー、HAZUSEで **2014-05-07** 導入を確認。
- HAZUSEで型式名 **パチスロマクロスフロンティア2G**、検定番号 **4S0166** を確認。
- 2015年の「パチスロ マクロスフロンティア2 Bonus Live Ver.」は別型式・別性能のため混入しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.2% |
| 3 | 100.6% |
| 4 | 104.3% |
| 5 | 108.2% |
| 6 | 111.8% |

- HAZUSE、5号機クロニクル、man-soft系解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 疑似ボーナス合算

| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/295.5 |
| 2 | 1/279.8 |
| 3 | 1/274.4 |
| 4 | 1/249.9 |
| 5 | 1/240.0 |
| 6 | 1/217.4 |

### ART「バルキリータイム」初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/427.3 |
| 2 | 1/423.1 |
| 3 | 1/403.4 |
| 4 | 1/389.1 |
| 5 | 1/362.4 |
| 6 | 1/354.3 |

- HAZUSE、パチスロ解析ガイド、man-soft系解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/50枚**。
- HAZUSEで全設定共通値として確認。
- パチマガスロマガ旧攻略は当該欄を「調査中」としており数値照合には使えないため、現時点では単一解析系統の直接値として保持。
- confidence: ANALYSIS_SINGLE

## netIncrease

- 疑似ボーナス・ARTとも **約2.4枚/G**。
- パチビー、P-WORLD、パチマガスロマガ旧攻略、man-soft系解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: 通常時 **50〜100G**（解析資料では純増約120〜240枚相当。資料により30〜100G表記もあるため下記conflict参照）。
- REG: **30G / 約72枚**。
- 究極クランボーナス: **50G / 約120枚**、ART確定。
- ART「バルキリータイム」: **1セット40G以上**、約2.4枚/G。開始時トライアングルチャンスで初期G数を決定。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_NOTE

## modeSpecificMinimumData

- 通常時は疑似ボーナスとARTを軸に、レア役・ゲーム数管理・CZを併用。
- CZ「バジュラアタック」初当たりは設定1 1/990.3〜設定6 1/775.5。
- 通常最大天井は **ボーナス間1280G**。到達恩恵は **超時空ライブ**。
- 天井はボーナス間基準でありART間と混同しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_PUBLIC_MORNING_NUMBERS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数をリセット**。
- **内部モードを再抽選**。
- **内部状態を再抽選**。
- 規定Gで高確移行を管理する **高確マップも再抽選**。
- 朝一ステージは **サンフランシスコ**。
- confidence: ANALYSIS_HIGH_PERIOD

### carryOverBehavior

- 据え置き時は **天井ゲーム数を引き継ぐ**。
- **内部モードを引き継ぐ**。
- **内部状態を引き継ぐ**。
- **高確マップを引き継ぐ**。
- 一方、フェイク前兆は内部G数ではなく **当日表示ゲーム数依存**で発生するため、朝一ゾロ目付近の煽りだけでは据え置き/変更を判別できない。
- confidence: ANALYSIS_HIGH_PERIOD

### powerCycleBehavior

- 設定変更なしの **電源OFF→ON（据え置き）**について、当時解析の朝一比較表で天井・内部モード・内部状態・高確マップの **引継ぎ**を確認。
- ステージはサンフランシスコ、フェイク前兆は当日G数依存。
- confidence: ANALYSIS_HIGH_PERIOD

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 据え置き / 電源OFF→ONのみ: **CARRY_OVER_CONFIRMED**。

### ceilingAfterReset

- 設定変更でボーナス間天井進捗は0相当にリセットされる。
- 通常最大天井 **1280G** 自体を短縮する専用固定天井は今回確認できず、**NO_DEDICATED_SHORTENED_CEILING_CONFIRMED**。
- ただし設定変更後はモード再抽選により天国A/Bへ合計18.75%移行するため、実質的な早当たり恩恵は存在する。

### modeAfterReset

設定変更後モード振り分け（全設定共通）:

| モード | 振り分け |
|---|---:|
| 通常A | 50.00% |
| 通常B | 31.25% |
| 天国A | 12.50% |
| 天国B | 6.25% |

- 天国合計 **18.75%**。
- K-Naviも設定変更後「約20%で天国」と整理しており整合。
- confidence: ANALYSIS_HIGH_PERIOD + CORROBORATED

### stateAfterReset

- 設定変更時は **内部状態を再抽選**、据え置き/電源OFF→ONでは **引継ぎ**。
- K-Naviは設定変更後 **約30%でボーナス高確**と整理。
- 低確/高確等の完全な状態振り分け表そのものは今回の対象資料から安全に固定できないため、約30%という公開朝一数値まで保存。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更後の天国A/B合計 **18.75%**（K-Navi表現では約20%）。
- 設定変更後は高確マップ5が、設定1/3/5で **30%**、設定2/4/6で **60%** と大幅に選ばれやすい。ボーナス後のマップ5は一律0.1%とされ、朝一の高確移行が明確に優遇。
- 当時解析では変更時、**55G時点で半数以上が高確へ移行**する挙動が判別材料として示されている。

### resetPenalties

- 設定変更により前日までのボーナス間天井進捗を失うため、前日深いハマリ台では据え置き宵越しと比べ不利。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- フェイク前兆は設定変更/据え置きにかかわらず **当日G数依存**。朝一111G等のゾロ目煽りだけでは変更判別不可。
- ゾロ目以外でレア役なしの煽りからARTへ到達するなど、内部ゲーム数由来の挙動が出た場合は **据え置き推測材料**になるが100%確定契約とはしない。
- 高確中に移行しやすいマヤン島/グリフィスパークの丘など、早い段階の高確挙動はリセット推測材料。
- 本機固有の確定的なリールガックン契約は表記揺れ・ガックン語を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- 設定変更後モード: 通常A **50.00%** / 通常B **31.25%** / 天国A **12.50%** / 天国B **6.25%**。
- 天国合計: **18.75%**。
- K-Navi整理値: 設定変更後 **約20%で天国 / 約30%でボーナス高確**。
- 高確マップ5選択率: 設定1 **30%** / 2 **60%** / 3 **30%** / 4 **60%** / 5 **30%** / 6 **60%**。
- 高確マップ全振り分け:
  - 設定1/3/5: map1 40.60% / map2 21.00% / map3 7.00% / map4 1.40% / map5 30.00%。
  - 設定2/4: map1 23.20% / map2 8.00% / map3 8.00% / map4 0.80% / map5 60.00%。
  - 設定6: map1 21.78% / map2 11.26% / map3 3.75% / map4 3.20% / map5 60.00%。

### publicMorningNumbers

- 天国移行 **18.75%（約20%）**。
- ボーナス高確 **約30%**（K-Navi整理値）。
- 高確マップ5 **奇数設定30% / 偶数設定60%**。
- 55G時点の高確挙動が朝一変更推測材料とする当時解析あり。

## resetBehavior 再探索メモ

「パチスロ マクロスフロンティア2 / マクロスF2 / マクロス2 / パチスロマクロスフロンティア2G / SANKYO」に「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天井短縮 / モード / モード振り分け / 高確 / 高確マップ / ガックン / 前兆」を組み合わせ、K-Navi、HAZUSE、パチマガスロマガ旧攻略、期待値見える化、すろぱちくえすと、P-WORLD、パチビー、古い解析DB・後年整理資料を横断。設定変更/据え置きの主要契約と朝一数値は十分固定できた。2015年Bonus Live Ver.のリセット仕様は別機種なので本レコードへ転記していない。

## conflicts / safeguards

- BIG継続G数は、P-WORLD/中古機DBで通常時 **50〜100G**、一方パチマガスロマガ/解析ガイドで **30〜100G** と表記差がある。平均・統合せず **CONFLICT_BIG_DURATION_50_100_VS_30_100** として保持。REG30G、究極クラン50Gは一致。
- 5号機クロニクルの説明に「疑似ボーナス+AT」とある一方、当時P-WORLD、パチビー、パチマガスロマガ、HAZUSEはART「バルキリータイム」として扱う。本DBでは当時多数資料に従い **疑似ボーナス+ART** を採用し、分類表記差を注記。
- 2015年「Bonus Live Ver.」は純増・ボーナス構造・リセット状態表が異なる別機種。検索結果に大量混入するため完全分離。

## sources

取得日: 2026-09-07

1. K-Navi — 2014年5月新台導入カレンダー
   - https://p-kn.com/calendar/201405/
   - 2014-05-07全国一斉導入、05/07パチスロ群がロストアイランド/マクロスF2の2機であることを確認
   - reliability: ANALYSIS_HIGH_EXACT_DATE
2. HAZUSE — パチスロ マクロスフロンティア2
   - https://hazuse.com/machine/pachislot/4S0166/
   - 型式、検定番号、導入日、設定別確率、機械割、約31G/50枚
   - reliability: ANALYSIS_HIGH
3. パチビー — パチスロ マクロスフロンティア2
   - https://www.pachibee.jp/machines/lecture/214040002
   - 2014-05-07、SANKYO、5号機ART、約2.4枚/G
   - reliability: INDUSTRY_DATABASE
4. P-WORLD — パチスロ マクロスフロンティア2
   - https://www.p-world.co.jp/machine/database/7371
   - ART/疑似ボーナス構造、約2.4枚/G、各基本G数
   - reliability: INDUSTRY_DATABASE
5. パチマガスロマガ旧攻略 — パチスロ マクロスフロンティア2
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/34/sankyo_slot_34.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/34/01.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/34/06.php
   - 疑似ボーナス/ART仕様、ART40G以上、約2.4枚/G、BIG/REG基本性能
   - reliability: ANALYSIS_HIGH_PERIOD
6. パチスロ解析ガイド — マクロス2
   - https://pachislot-guide.net/2014/macross2/
   - 導入日、設定別ボーナス/ART確率、基本獲得性能
   - reliability: ANALYSIS_HIGH
7. man-soft — マクロスフロンティア2解析
   - https://smaslo.man-soft.com/slot-kaiseki/macrossf2.html
   - 機械割、確率、1280G天井、超時空ライブ恩恵
   - reliability: ANALYSIS_HIGH
8. 期待値見える化 — 朝一リセット後の挙動・恩恵・モード・天井まとめ（2014-06-25）
   - https://slotjin.com/slot/macross-frontier2-morning/
   - 設定変更/据え置き/電源OFF→ON比較、モード振り分け、高確マップ、当日G依存フェイク前兆
   - reliability: ANALYSIS_HIGH_PERIOD
9. K-Navi — 解除しやすいゾーン(モード不問)
   - https://p-kn.com/slot/2041/49476/
   - 設定変更後約20%天国、約30%ボーナス高確
   - reliability: ANALYSIS_HIGH_PERIOD
10. 5号機クロニクル — SANKYO 5号機一覧
   - https://5goki.com/sankyo
   - 機械割、基本スペック比較用。導入月は2014年4月表記のため全国導入具体日はK-Navi/HAZUSEを優先
   - reliability: ANALYSIS_RETROSPECTIVE

## missingFields

- 本機固有の確定的ガックン判別契約: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更時の内部状態「全振り分け率」: UNVERIFIED_AFTER_RESEARCH（約30%ボーナス高確までは確認）

## conflicts

- CONFLICT_BIG_DURATION_50_100_VS_30_100
- CLASSIFICATION_WORDING_ART_VS_RETROSPECTIVE_AT
