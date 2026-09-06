# 主役は銭形2

machineName: 主役は銭形2
aliases: パチスロ 主役は銭形2 / 主役は銭形 2 / 銭形2
manufacturer: オリンピア / OLYMPIA
modelName: 主役は銭形2B5
approvalNumber: 3S1017
releaseDate: 2014-02-03
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: 差枚数管理型AT / 擬似ボーナスAT
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- オリンピア公式の2013年発売機種一覧に **主役は銭形 2** を確認。
- K-Navi / HAZUSE はホール導入開始日を **2014-02-03** とする。
- HAZUSEで型式名 **主役は銭形2B5**、検定番号 **3S1017** を確認。
- 2014-02-10のコムシード公式リリースも「2014年2月より全国導入」として整合する。
- confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.4% |
| 3 | 100.3% |
| 4 | 104.8% |
| 5 | 109.0% |
| 6 | 113.3% |

- K-Naviと期待値見える化で同系列を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 銭形BIG初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/297.1 |
| 2 | 1/284.3 |
| 3 | 1/272.8 |
| 4 | 1/235.6 |
| 5 | 1/206.6 |
| 6 | 1/180.8 |

### 銭形BIGトータル出現率

| 設定 | 確率 |
|---|---:|
| 1 | 1/228.6 |
| 2 | 1/218.8 |
| 3 | 1/210.0 |
| 4 | 1/181.4 |
| 5 | 1/159.1 |
| 6 | 1/139.3 |

- K-Navi / HAZUSEで一致。
- 初当たりを本DBの主要初当たり値とする。トータルは3G連等を含む出現率として定義を分ける。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **31.7G/1000円（50枚換算）**。
- パチマガスロマガの小役確率ページで直接確認。
- confidence: ANALYSIS_HIGH

## netIncrease

- 銭形BIG: **約2.8枚/G**。
- パチマガスロマガ、2014年コムシード公式リリース、当時PV紹介等で一致。
- confidence: OFFICIAL/INDUSTRY_SUPPORT + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 銭形BIGは差枚数管理型。
- 初期差枚数は **150 / 200 / 250 / 300 / 400 / 550 / 711枚**の7種類をパチマガスロマガで確認。
- 赤7シングルは150枚以上、ダブルは200枚以上、トリプルは300枚以上。
- 3G連や差枚上乗せを搭載するため、固定1セット枚数としては扱わない。
- confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時はシナリオ（資料によりモード表記）とゲーム数帯に応じてランクA～Dを管理し、CZ種別やBIG揃いライン数へ影響する。
- 設定変更時・BIG終了時にシナリオ抽選を行う。
- 全通常モード/ランク内部表は実機完全再現用途となるため、resetBehaviorに必要な朝一値以外は物差し本体へ展開しない。

## ceiling

- **BIG間999G**で銭形BIG確定。
- **926G以降の当選はダブルライン以上**（初期200枚以上）が確定する解析を複数資料で確認。
- 設定変更時は天井進捗をリセット。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_POWER_CYCLE_MODE_TABLE_GACKUN_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **天井までのゲーム数をリセット**。
- 内部シナリオ/モード・ランク、100G以内の高確ゾーンを決めるテーブル、内部状態を再抽選する解析を確認。
- 設定変更時のシナリオ選択率はBIG終了後と同じ **56.67 / 33.33 / 10.00%**。
- 高確テーブルは設定変更専用振り分け **A70 / B10 / C10 / D10%**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 設定変更を伴わない電源OFF→ONについて、天井・内部モード/ランク・テーブル/内部状態を **引き継ぐ** とする本機専用朝一解析を確認。ホール運用上の純据え置き挙動として採用する。
- 「据え置き」「宵越し」「朝一」「電源OFF→ON」を分けて再探索し、宵越し天井狙い実戦記事も存在するが、主契約は直接比較表を根拠とする。
- confidence: ANALYSIS_HIGH_DIRECT_TABLE

### powerCycleBehavior

- 設定変更なしの **電源OFF→ON**: 天井ゲーム数 **引継ぎ**、内部モード/ランク **引継ぎ**、テーブル/内部状態 **引継ぎ**。
- 朝一ステージは設定変更・電源OFF→ONとも銭形デスクまたはICPO周辺とされ、ステージだけでは確定判別不可。
- confidence: ANALYSIS_HIGH_DIRECT_TABLE

### gameCounterReset

- 設定変更時: **RESET_CONFIRMED**。
- 電源OFF→ONのみ: **CARRY_OVER_CONFIRMED**。
- 通常天井はBIG間999G。
- confidence: ANALYSIS_HIGH

### ceilingAfterReset

- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井999Gへゲーム数をリセットする。
- 926G以降のダブルライン以上恩恵は通常天井構造であり、リセット専用恩恵ではない。
- confidence: ANALYSIS_HIGH_FOR_RESET / NONE_CONFIRMED_FOR_SHORTENING

### modeAfterReset

- 設定変更時にシナリオ/モードを再抽選。
- 公開値は全設定共通:
  - シナリオ1 / モードA相当: **56.67%**
  - シナリオ2 / モードB相当: **33.33%**
  - シナリオ3 / モードC相当: **10.00%**
- 必勝本は「ランクを1～3のシナリオで管理」と記載し、設定変更時に上記シナリオ抽選を実施。LackLuckLife等は同じ数値をモードA/B/C表記するため、名称差を注記して数値自体は一致扱い。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

- 設定変更後は高確ゾーン用テーブルを再抽選。
- テーブルA **70%** / B **10%** / C **10%** / D **10%**。
- 設定変更後1～25Gは、ボーナス終了直後のような高確確定ではなく、解析上 **約1/3で高確・約2/3で低確**。したがって朝一25G以内はむしろボーナス後と挙動が異なる。
- 電源OFF→ONのみではテーブル/内部状態を引き継ぐとする直接表を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の固定天井短縮は確認されない。
- シナリオ/モードは再抽選され、上位相当のシナリオ3/モードCが **10%**。
- 高確テーブルも再抽選されるが、設定変更後1～25Gの高確期待度は約33%に留まるため、公開解析では強いリセット狙い恩恵とは評価されていない。
- confidence: ANALYSIS_HIGH

### resetPenalties

- 前日天井進捗を失う。
- ボーナス終了後は1～25G高確確定なのに対し、設定変更後1～25Gは約2/3で低確となる点が朝一上の不利要素。
- その他の設定変更専用ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 設定変更時・電源OFF→ONとも **ガックンなし** とする本機専用朝一比較表を確認。
- 朝一ステージも両者とも銭形デスクorICPO周辺のため、それ単独では変更判別不可。
- 1～25Gの高確挙動は設定変更推測材料になり得るが確定判別ではない。
- confidence: ANALYSIS_HIGH_DIRECT_TABLE

### publicMorningNumbers

#### 設定変更時 シナリオ/モード

| 区分 | 振り分け |
|---|---:|
| シナリオ1 / モードA相当 | 56.67% |
| シナリオ2 / モードB相当 | 33.33% |
| シナリオ3 / モードC相当 | 10.00% |

#### 設定変更時 高確テーブル

| テーブル | 振り分け |
|---|---:|
| A | 70% |
| B | 10% |
| C | 10% |
| D | 10% |

- 設定変更後1～25G: 高確期待 **約33%** / 低確 **約67%** とする整理資料あり。
- 電源OFF→ONのみ: 天井・モード/ランク・テーブル/内部状態を引継ぎ。
- ガックン: 設定変更/電源OFF→ONとも「なし」。

## missingFields

- 主要性能コア: なし。
- resetBehavior: 設定変更時に通常の天井999Gをさらに短縮する専用固定天井は、表記揺れ・型式・メーカー・シリーズ名と「リセット/設定変更/朝一/天井短縮」を組み替えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 「モードA/B/C」と「シナリオ1/2/3」は資料による名称差がある。振り分け **56.67/33.33/10.00%** は一致するが、DBでは必勝本のシナリオ表記を優先し、別資料名を併記する。
- オリンピア公式は2013年発売機種一覧に掲載する一方、ホール導入日はK-Navi / HAZUSEで2014-02-03。これは製品発表/発売年とホール稼働開始日の定義差として扱い、releaseDateは具体日付きホール導入日を採用。
- 後継の主役は銭形3/4/5のリセット仕様・ベース等は混入させない。

## sources

取得日: 2026-09-06

1. オリンピア 2013年発売機種: https://www.olympia.co.jp/official/products/2013.html
2. K-Navi 主役は銭形2: https://p-kn.com/slot/1990/
3. HAZUSE 主役は銭形2: https://hazuse.com/machine/pachislot/3S1017/
4. パチマガスロマガ 小役確率/1000円ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/113/c.php
5. パチマガスロマガ 銭形BIG: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/113/03.php
6. 必勝本 ランク詳細: https://p.hisshobon.jp/machine/2335/1/44589
7. 期待値見える化 天井/朝一リセット: https://slotjin.com/zone/syuyakuhazenigata2-tenjou/
8. 目指せ月収20万 主役は銭形2: https://mezase20.com/zenigata2.html
9. LackLuckLife CZ抽選ランク/モード: https://l-l-life.com/36603498/
10. コムシード 2014-02-10リリース: https://www.commseed.net/news-old/140210_p1.html
11. gamebiz 2014年全国導入/純増: https://gamebiz.jp/news/132509
