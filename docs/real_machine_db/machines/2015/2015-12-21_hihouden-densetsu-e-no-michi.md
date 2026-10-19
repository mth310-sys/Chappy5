# パチスロ 秘宝伝 ～伝説への道～

machineName: パチスロ 秘宝伝 ～伝説への道～
manufacturer: 大都技研
releaseDate: 2015-12-21
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 945
generation: 5号機 / 5.5号機初期
systemType: A+ART / MB（秘宝CHANCE）起点CZ / G数上乗せART
formalModelName: 秘宝伝 伝説への道／A4
inspectionNumber: 5S0974
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCHED

## identity
- 2015年11月12日の業界発表で、大都技研の5.5号機第1弾として発表された機種。
- 業界記事は2015-12-20納品予定、複数の機種DB・当時新台資料はホール導入開始2015-12-21で一致するため、本DBのreleaseDateは **2015-12-21**。
- HAZUSEに型式名 **秘宝伝 伝説への道／A4**、検定番号 **5S0974** が残る。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.3% |
| 3 | 101.5% |
| 4 | 105.3% |
| 5 | 109.1% |
| 6 | 113.5% |

- pacnk、pachislo-data、複数の当時/後年解析資料で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要初当たりとしてART「秘宝RUSH」を保存する。

| 設定 | ART初当たり | 秘宝CHANCE(MB) | BIG |
|---:|---:|---:|---:|
| 1 | 1/447.5 | 1/119.8 | 1/16384 |
| 2 | 1/438.4 | 1/117.7 | 1/13107 |
| 3 | 1/426.2 | 1/115.8 | 1/10923 |
| 4 | 1/405.3 | 1/112.4 | 1/8192 |
| 5 | 1/392.4 | 1/110.3 | 1/6554 |
| 6 | 1/354.7 | 1/99.1〜1/99.2 | 1/5461 |

- HAZUSE、pacnk、pachislo-data等でART/BIGは一致。MBは資料の丸め差（設定6 1/99.1〜1/99.2）として保持。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約35G/50枚**。
- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「秘宝RUSH」: 秘宝CHANCE込みの実質純増 **約2.0枚/G**。
- ART単独の表記として **約1.6枚/G** とする資料もある。これはMB込み/除外の定義差でありCONFLICTではなく定義分離。
- reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- ART「秘宝RUSH」: **1セット50G+α**。
- BIG: **約200枚**（264枚を超える払い出しで終了）とする当時資料あり。
- ART平均継続/平均獲得の後年解析値は物差し必須値ではないためcanonical coreには使用しない。

## modeSpecificMinimumData
- チャンス目＝MB「秘宝CHANCE」が通常時の高確率ゾーン移行契機。
- チャンス目間 **500G** 到達でART当選するゲーム数系救済を搭載。
- 秘宝CHANCEを **11回連続スルー**すると、次回（12回目）の秘宝CHANCEが無限高確率となり実質ART確定。
- ARTは「秘宝RUSH」1セット50G+α、実質純増約2.0枚/G。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_RESET_TABLE_MULTI_SOURCE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- チャンス目間500Gのゲーム数天井カウンタは **CARRYOVER**。
- 秘宝CHANCE連続スルー回数は **RESET** とする複数解析資料が一致。
- 内部状態は **RESET**。
- 朝一液晶ステージは **深緑の森**。
- 設定変更でゲーム数天井そのものを0Gへ戻さないため、前日のチャンス目からのハマリを使った宵越し狙いが成立する。

### carryOverBehavior
- 据え置きではチャンス目間500Gカウンタ、秘宝CHANCEスルー進捗、内部状態を継続する扱い。
- 前日最終チャンス目からのG数は翌日の天井狙いへ利用可能。

### powerCycleBehavior
- 純電源OFF→ONではチャンス目間500Gカウンタを **CARRYOVER**。
- 内部状態も **CARRYOVER**。
- ART/秘宝CHANCEスルー系の進捗も引継ぎとする解析整理資料あり。
- 液晶開始ステージは設定変更時と同じ **深緑の森** のため、ステージ単独では変更判別不能。

### gameCounterReset
- normalChanceMBIntervalCeiling: **500G**。
- settingChangeChanceMBIntervalCounter: **CARRYOVER**。
- carryOverChanceMBIntervalCounter: **CARRYOVER**。
- purePowerCycleChanceMBIntervalCounter: **CARRYOVER**。
- settingChangeSecretChanceMissCount: **RESET**。
- purePowerCycleSecretChanceMissCount: **CARRYOVER**（後年整理資料による）。

### ceilingAfterReset
- 設定変更専用の短縮G数天井は **NONE_CONFIRMED**。
- チャンス目間500G天井自体を引き継ぐため、リセット後0Gから500Gへ再カウントする仕様ではない。
- 一方、秘宝CHANCE11スルー→12回目無限高確の進捗は設定変更で消えるため、朝一スルー狙いには不利要素となる。

### modeAfterReset
- 高確率種別/秘宝CHANCEの通常時テーブルは存在するが、実機完全再現用の全テーブルは本DB対象外。
- 設定変更時は連続スルー進捗をRESETする。
- 朝一専用モードの固定振り分け数値は今回の再探索で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- settingChangeInternalState: **RESET**。
- carryOverInternalState: **CARRYOVER**。
- purePowerCycleInternalState: **CARRYOVER**。
- 設定変更/電源入切とも液晶は深緑の森スタートなので、液晶背景と内部状態を同義扱いしない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の朝一メリットは **設定変更されてもチャンス目間500G天井の進捗を引き継ぐ**点。宵越し天井狙いが可能。
- 設定変更専用の短縮天井や公開された朝一優遇率は今回確認できない。

### resetPenalties
- **秘宝CHANCE連続スルー回数が設定変更でRESET**されるため、前日のスルー天井進捗を宵越せない。
- 内部状態も設定変更でRESETされる。

### resetDetection
- 設定変更/純電源OFF→ONとも朝一ステージが **深緑の森** となるため、開始ステージ単独では判別不可。
- チャンス目間500G天井は設定変更でも引き継ぐため、前日との合算で500G到達したこと自体は据え置き確定材料にならない。
- 秘宝CHANCEのスルー進捗は設定変更でRESETされるため、前日から継続すると想定される高確率テーブル挙動が崩れた場合は変更推測材料になり得るが、確定判別ではない。
- 本機固有のメーカー保証されたガックン判別は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- settingChange dedicated shortened ceiling: **NONE_CONFIRMED**。
- chanceMB interval ceiling after setting change: **前日進捗を引き継いで500G**。
- Secret CHANCE miss ceiling: **11回連続スルー後、12回目で無限高確率**。設定変更時は進捗RESET。
- published reset-only mode distribution / morning hit probability: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-08

1. P-WORLD / グリーンべると — 5.5号機第1弾は秘宝伝
   - https://news.p-world.co.jp/articles/7951/greenbelt
   - 2015-11-12発表、12-20納品予定、5.5号機、ART純増2.0枚/G、1セット50G+α。
   - reliability: INDUSTRY
2. PiDEA X — 大都技研「秘宝伝」でチャンス目進化
   - https://www.pidea.jp/articles/%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94%E3%80%8C%E7%A7%98%E5%AE%9D%E4%BC%9D%20%E3%80%8D%E3%81%A7%E3%83%81%E3%83%A3%E3%83%B3%E3%82%B9%E7%9B%AE%E9%80%B2%E5%8C%96
   - 2015-11-13、A+ART、純増2.0枚/G、1セット50G+α。
   - reliability: INDUSTRY
3. HAZUSE — 秘宝伝 ～伝説への道～
   - https://hazuse.com/machine/pachislot/5S0974/
   - 型式、検定番号、導入日、ART/BIG/MB確率。
   - reliability: ANALYSIS_HIGH
4. pacnk — 秘宝伝~伝説への道~ 設定判別
   - https://pacnk.com/slot/tools/sh_hihoudendensetsu.html
   - 設定別ART初当たり・機械割。
   - reliability: ANALYSIS_HIGH
5. pachislo-data — 秘宝伝伝説への道
   - https://pachislo-data.com/daito/20996
   - 2015-12-21、約35G/50枚、実質純増約2.0枚/G、設定別スペック、設定変更/電源ON-OFFでもG数天井引継ぎ。
   - reliability: ANALYSIS_HIGH
6. スロがち.COM — 秘宝伝 伝説への道
   - https://slogati.com/hihoudenden/
   - 設定変更: 天井G引継ぎ・内部状態RESET・深緑の森、電源入切: 天井G/内部状態引継ぎ・深緑の森、スルー進捗は設定変更でRESET濃厚。
   - reliability: ANALYSIS_HIGH
7. すろぱちくえすと — 天井・朝一
   - https://www.slopachi-quest.com/article/hihou-densetu/
   - ゲーム数天井は設定変更でリセットされない、ART/秘宝CHANCEスルー天井は設定変更でリセット。
   - reliability: ANALYSIS_HIGH
8. 楽スロ — 設定変更時の特徴
   - https://rakuslo.com/hihoudensetsu-asaiti.html
   - MB間天井引継ぎ、スルー回数天井RESET、電源OFF/ON時の天井進捗引継ぎ、深緑の森開始。
   - reliability: ANALYSIS_SINGLE_CORROBORATING
9. ちょんぼりすた — 秘宝伝〜伝説への道〜解析
   - https://chonborista.com/slot/daito-slot/14017/
   - 導入日、各種解析、ART 50G+α/約2.0枚/G。
   - reliability: ANALYSIS_HIGH
10. P-Summa — 新基準 秘宝伝
   - https://psumma.jp/pachislo/16737/
   - 当時スペック引用、約35G/50枚、ART単独約1.6枚/G・MB込み約2.0枚/G、天井2系統。
   - reliability: ANALYSIS_SINGLE_PERIOD

## missingFields
- メーカー一次資料による設定別機械割/ART初当たりの直接表
- 設定変更時の朝一専用モード振り分け数値
- メーカー保証された変更判別（ガックン等）

## conflicts
- 秘宝CHANCE(MB)確率は設定2/3/6で資料間に末尾丸め差（例: 1/117.6〜117.7、1/115.7〜115.8、1/99.1〜99.2）。平均せず丸め差として保持。
- ART純増の約1.6枚/Gと約2.0枚/Gは、前者がART単独、後者が秘宝CHANCE(MB)を含む実質値という定義差。CONFLICT扱いしない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESEARCHED_WITH_EXPLICIT_UNVERIFIED_FIELDS
