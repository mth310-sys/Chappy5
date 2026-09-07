# ゴーゴージャグラー

machineName: ゴーゴージャグラー
manufacturer: 北電子
releaseDate: 2015-04-06
releaseDatePrecision: exact_hall_start
releaseDateNote: 北電子内覧会の業界記事ではホール納品2015-04-05開始、K-Navi・アタリ7はホール導入開始2015-04-06で一致。本DBの時系列キーは実ホール導入日として2015-04-06を採用。
generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知
modelName: ゴーゴージャグラーKK
inspectionNumber: 4S0942
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **北電子**。
- 型式名: **ゴーゴージャグラーKK**。北電子公式検定情報とP-WORLDで一致。
- 検定番号: **4S0942**（P-WORLD）。
- 北電子公式検定情報では各都道府県の公示日を確認。北海道2014-12-26、青森2014-12-17、岩手2015-01-06等。
- 2015-01-21内覧会の業界記事は『ゴーゴージャグラーKK』、ホール納品2015-04-05開始を明記。
- K-Navi / アタリ7はホール導入開始 **2015-04-06**。
- confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

メーカー発表/市場掲載系列:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.2% |
| 3 | 99.2% |
| 4 | 101.6% |
| 5 | 103.8% |
| 6 | 106.5% |

- グリーンべると当時記事が設定1〜6の範囲97.0〜106.5%を確認。
- P-WORLD、K-Navi、アタリ7、パチスロ解析ガイドで設定別系列が一致。
- チェリー狙い時の攻略機械割として **97.96 / 99.20 / 100.36 / 102.91 / 105.33 / 108.34%** 系列も公開されているが、メーカー発表値とは消化条件が異なるためCONFLICTにせず別定義系列として保持。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/269.7 | 1/364.1 | 1/154.9 |
| 2 | 1/268.6 | 1/336.1 | 1/149.3 |
| 3 | 1/266.4 | 1/318.1 | 1/145.0 |
| 4 | 1/260.1 | 1/283.7 | 1/135.7 |
| 5 | 1/255.0 | 1/255.0 | 1/127.5 |
| 6 | 1/242.7 | 1/242.7 | 1/121.4 |

- P-WORLD、K-Navi、アタリ7、パチスロ解析ガイドで一致。
- 一部後年ページに設定3 REG 1/318.6表記があるが、当時系複数資料は1/318.1で一致するため、後年ページの丸め/転記差候補として平均せず注記。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

チェリー狙い条件の50枚あたりゲーム数:

| 設定 | G/50枚 |
|---:|---:|
| 1 | 33.3G |
| 2 | 33.5G |
| 3 | 33.7G |
| 4 | 33.9G |
| 5 | 34.0G |
| 6 | 34.3G |

- SLOT HACKの5号機ジャグラー比較表。条件はチェリー狙い時で統一。
- ぶどう確率1/6.82〜1/6.54という別資料の設定差とも方向性が整合するが、ベースをぶどう確率から再計算してはいない。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE_FOR_BASE

## netIncrease

- 非該当。AT/ART/RTによる純増型ではないノーマルタイプ。
- `NOT_APPLICABLE_NORMAL_TYPE`。

## basicPayout

- BIG: **純増約312枚**（24G）。
- REG: **純増約104枚**（8G）。
- P-WORLD、グリーンべると、PiDEA転載、一撃、パチスロ解析ガイドで一致。
- 規定払い出し終了条件はP-WORLD/解析ガイドでBIG 345枚超、REG 105枚超。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 天井: **非搭載**。
- AT/ART/CZ/規定ゲーム数モード: 非搭載のノーマルタイプ。
- ボーナス後100G以内のゾロ目ゲーム数でBIG成立時にスペシャルBGMが発生する演出条件あり。設定変更判別に関係するためresetBehaviorで最低限保持。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_POWER_CYCLE_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機は天井・AT/ARTモードを持たないため、設定変更による天井短縮やモード再抽選は **NOT_APPLICABLE**。
- 設定変更後の朝一1G目はリールがブレる「ガックン」が発生するという本機固有解析を複数後年資料で確認。
- ボーナス後100G以内のゾロ目G BIGで発生するスペシャルBGMの条件は、**設定変更でリセット**される。
- confidence: ANALYSIS_HIGH_FOR_MACHINE_SPECIFIC_RESET_CUES

### carryOverBehavior

- 天井/規定Gが存在しないため、ゲーム数天井の据え置き恩恵・不利は `NOT_APPLICABLE`。
- BGM判別について、前日ヤメG数と当日G数を合算して「ボーナス後100G以内のゾロ目G」でBIG成立しスペシャルBGMが流れた場合、据え置き濃厚という本機固有解析を確認。これは設定変更で同条件がリセットされることとの対照。
- ボーナス抽選自体は通常の設定別確率に従うノーマル機で、朝一専用当選率は確認されていない。
- confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC_BGM_CARRYOVER_CUE

### powerCycleBehavior

- 「設定変更なしの純電源OFF→ON」だけを独立比較した本機固有の直接資料は、機種名/型式名/北電子/ゴージャグ + 電源OFF ON/電断/据え置き/BGM/ガックンで再探索したが固定できず、**UNVERIFIED_AFTER_RESEARCH**。
- 据え置きBGM判別資料から純電断契約まで自動推定しない。

### gameCounterReset

- 天井ゲーム数/規定ゲーム数: **NOT_APPLICABLE_NO_CEILING**。
- BGM用の「前回ボーナス後100G以内」条件は設定変更でリセットされる。
- confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC_BGM_CONDITION

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**。
- アタリ7、みんスロ、juggler7で天井非搭載を確認。

### modeAfterReset

- AT/ARTの通常モード・天井モード: **NOT_APPLICABLE_NORMAL_TYPE**。
- 朝一専用モード/リセットモードの公開契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- AT/ART高確等の内部状態: **NOT_APPLICABLE_NORMAL_TYPE**。
- BGM演出条件以外に、朝一客AIへ必要な設定変更専用状態の公開値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 天井短縮・朝一モード優遇・CZ優遇: **NONE / NOT_APPLICABLE**。
- 設定変更それ自体による当選率優遇の公開数値は確認されていない。
- 客側の実用上のポイントは、ガックンおよびBGM条件による変更推測であり、出玉恩恵ではない。

### resetPenalties

- 設定変更による専用出玉ペナルティ: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井/モードを持たないため、据え置きゲーム数の消失という不利要素は非該当。

### resetDetection

- **朝一1G目のガックン**: 設定変更推測に使用可能。本機固有資料を複数確認。
- ただし店舗側が開店前に1G回す等の対策が可能で、**ガックンなし=据え置き確定ではない**。
- **BGM判別**: 前日ボーナス後のヤメG数と当日G数を合わせて100G以内のゾロ目GでBIGが成立し「運命/魔王」等のスペシャルBGMが流れれば据え置き濃厚。設定変更ではBGM変化条件がリセットされる。
- BGM非発生だけで変更確定とはしない。BIG成立ゲーム数等の条件を満たした場合のみ判別材料。
- confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC

### numericResetData

- リセット専用天井値: **NOT_APPLICABLE**。
- リセット専用モード振り分け: **NOT_APPLICABLE / NONE_CONFIRMED**。
- BGM据え置き判別に関係する公開閾値: **前回ボーナス後100G以内のゾロ目ゲーム数でBIG成立**。
- ガックン: **朝一1G目**。
- 出玉上の「朝一○G以内当選率」は本機固有リセット恩恵ではなく通常ボーナス確率から導出される値なので、resetBehaviorの専用数値には採用しない。

## release group / boundary audit

- HAZUSE新台カレンダーは2015年4月の掲載日を **04-06 / 04-13 / 04-20** とする。
- 04-06群について、複数検索で具体日付きパチスロとして強く確認できたのは既登録 **ミリオンゴッド-神々の凱旋-** と本機 **ゴーゴージャグラー**。
- 「2015年4月6日」「2015/04/06」「4月6日導入」+ パチスロ/スロット/新台を組み替え、上記2機を除外した検索も実施したが、今回追加すべき別5号機を固定できなかった。
- したがって `2015-04-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。

## sources

取得日: **2026-09-07**

### OFFICIAL

1. 北電子 検定情報「ゴーゴージャグラーKK」
   - https://www.kitadenshi.co.jp/slot-kentei/gogojuggler/
   - 型式名、地域別検定公示/期限。

### INDUSTRY / DATABASE

2. グリーンべると「GOジャグが14年ぶりに復活！」（2015-01-27）
   - https://web-greenbelt.jp/00007527/
   - 型式名KK、合算範囲、出玉率範囲、BB/RB約312/104枚、4月5日納品開始。
3. P-WORLD業界ニュース / PiDEA.web「北電子『ゴージャグ』は完全後告知」（2015-01-23）
   - https://news.p-world.co.jp/articles/7143
   - ノーマル、BB/RB約312/104枚、4月5日納品予定。
4. P-WORLD ゴーゴージャグラーKK
   - https://www.p-world.co.jp/machine/database/7653/
   - 型式名、検定番号4S0942、設定別BIG/REG/合算/機械割、獲得枚数、ノーマル仕様。
5. K-Navi ゴーゴージャグラー
   - https://p-kn.com/slot/2216/
   - 2015-04-06ホール導入開始、設定別ボーナス値。
6. アタリ7 ゴーゴージャグラー
   - https://www.atari7.com/slot/date1426138692.php
   - 導入日、設定別スペック、天井非搭載。

### ANALYSIS / RETROSPECTIVE

7. パチスロ解析ガイド GOGOジャグラー
   - https://pachislot-guide.net/2015/gogo-juggler/
   - 導入日、設定別BIG/REG/合算/機械割、獲得枚数。
8. 一撃 ゴーゴージャグラー 設定6ショールーム実戦
   - https://1geki.jp/slot/gogoj/01/
   - BIG24G/純増312枚、REG8G/純増104枚。
9. SLOT HACK ジャグラーコイン持ち一覧
   - https://slothack.net/matome/17149/
   - チェリー狙い条件のゴーゴージャグラー系33.3〜34.3G/50枚。
10. juggler7 ゴーゴージャグラー解析
   - https://juggler7.com/gogo/
   - 型式名KK、ガックン、設定変更時BGM条件リセット、据え置きBGM判別、天井なし。
11. ジャグジャグBeats! ゴーゴージャグラーKK
   - https://jugjug.net/gogojugglerkk
   - メーカー発表系列、攻略機械割、ぶどう確率、朝一ガックン。
12. パチよみ ジャグラーBGM変化条件
   - https://www.ps-channel.net/jugglersoundhenka/
   - 据え置き時BGM条件継続、設定変更後は条件消失というシリーズ挙動の補助照合。
13. HAZUSE 新台カレンダー
   - https://hazuse.com/new-machine-calendar/newmachine-calendar/
   - 2015年4月掲載日04-06/04-13/04-20。

## missingFields

- 純電源OFF→ONのみの場合のBGM条件/リール初期挙動を直接比較する本機固有一次・当時解析資料: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の朝一当選率/モード振り分け: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts

- 設定3 REG: 主流当時系複数資料 **1/318.1**、一部後年ページ **1/318.6**。平均せず主流値をcanonical、後年差を注記。
- メーカー発表機械割とチェリー狙い攻略機械割は遊技条件が違うため、数値差は `DEFINITION_DIFFERENCE_NOT_CONFLICT` として別系列保持。

## nextRelay

- recordCount after this record: **881**。
- chronologicalFrontier: **2015-04-06**。
- 2015-04-06群: **CLOSED_FOR_CURRENT_RESEARCH**。
- 次は **2015-04-07〜04-12境界監査**。未登録具体日機がなければ2015-04-13群へ進む。
- HAZUSE上の次掲載日は2015-04-13。次候補機は04-13群のメーカー横断監査で確定し、発表日/検定日/アプリ配信日をホール導入日へ転用しない。
