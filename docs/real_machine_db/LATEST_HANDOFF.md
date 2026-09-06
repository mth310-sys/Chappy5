# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **808**
- latestRecordAdded: **ハッピージャグラーVII**（北電子）— 2014-04-07
- latestRecord: `docs/real_machine_db/machines/2014-04-07_happy-juggler-vii.md`
- chronologicalFrontier: **2014-04-07**
- frontierLatestMachine: **ハッピージャグラーVII**
- schema: **resetBehavior v0.7**
- status: **2014-04-07_GROUP_OPEN / HAPPY_JUGGLER_VII_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード `2014-04-07_matador-30.md` を再読。
- INDEXは旧集約（19件表示）のため、README規定どおり **LATEST_HANDOFF + main実レコード** を現在の正本として継続。
- 作業開始時正本は **recordCount 807 / chronologicalFrontier 2014-04-07 / 04-07_GROUP_OPEN**。
- 04/07群の次の未処理 **ハッピージャグラーVII** がmain未登録であることを確認し、808件目として追加。
- 04/07群は **マタドール-30 / ハッピージャグラーVII** まで処理済み。未処理は **サムライスピリッツ～剣豪八番勝負～ → パチスロ モンキーターンII**。

## 今回追加 — ハッピージャグラーVII

### identity / 性能コア

- manufacturer: **北電子**。
- hall start: **2014-04-07**（HAZUSE）。
- formalModelName: **ハッピージャグラーV II KK**。
- inspection number: **3S0869**。
- generation/system: **5号機 / ノーマル / リアルボーナス / 完全告知**。
- payout: **96.1 / 97.9 / 99.9 / 102.9 / 105.8 / 108.4%**。北電子公式・複数解析で一致。
- BIG: **1/287.4 / 282.5 / 273.1 / 264.3 / 252.1 / 240.9**。
- REG: **1/409.6 / 364.1 / 341.3 / 315.1 / 287.4 / 273.1**。
- 合成: **1/168.9 / 159.1 / 151.7 / 143.7 / 134.3 / 128.0**。
- baseGamesPer50（通常打ち1000円あたり）: **34.13 / 34.33 / 34.53 / 35.26 / 35.47 / 35.69G**。完全小役獲得時は34.92〜36.55G。
- netIncrease: **NOT_APPLICABLE_REAL_BONUS_TYPE**。
- BIG: **約312枚**、REG: **約104枚**。
- ceiling: **NOT_APPLICABLE / 天井機能非搭載**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT**。

### resetBehavior v0.7

- settingChangeBehavior: 朝一1G目の**リールガックンは設定変更濃厚**として機種固有解析で確認。
- carryOverBehavior: 天井/AT/ART/CZ/出玉管理モードは **NOT_APPLICABLE**。据え置き時の本機固有リール初動・物理状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なしの純電源OFF→ONのみでガックンが発生するかは **UNVERIFIED_AFTER_RESEARCH**。一般ジャグラー仕様から補完しない。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。設定変更専用短縮天井NONE_CONFIRMED。
- modeAfterReset: AT/ART/CZ/天井用内部モード **NOT_APPLICABLE**。朝一専用出玉モードNONE_CONFIRMED。
- stateAfterReset: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_TYPE**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties / publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **CONFIRMED_PROBABILISTIC_GAKKUN_SIGNAL**。後年解析は「朝一1回転目でガックン→設定変更濃厚」、2014年当時企画の回顧掲載でも前日出目を保持するホールでガックンを設定変更判別に使用。リール停止位置等で判定困難なケースがあるため100%確定契約にはしない。

## safeguards / definitions

- `ハッピージャグラーVII / ハッピージャグラーVⅡ / V2` は2014年同一機の表記揺れとして扱う。
- 2022年「ハッピージャグラーVⅢ」のスペック・朝一仕様を混入させない。
- ノーマル機で天井非搭載でも、純電源OFF→ON時のリール挙動は推定しない。
- ガックンは朝一判別シグナルであり、出玉上のリセット恩恵としては扱わない。

## 2014-04-07群

- 処理済み: **マタドール-30 / ハッピージャグラーVII**。
- 未処理: **サムライスピリッツ～剣豪八番勝負～ / パチスロ モンキーターンII**。
- status: **GROUP_OPEN**。

## 遡及 resetBehavior QA

- 次の遡及QAカーソルは従来どおり **`docs/real_machine_db/machines/2007-02_skylove.md`**。
- 新規時系列キューを止めず、QAリレー時に継続する。

## 次回再開地点

1. **recordCount 808 / chronologicalFrontier 2014-04-07 / 04-07_GROUP_OPEN** から開始。
2. 次の未処理機種は **サムライスピリッツ～剣豪八番勝負～（SNKプレイモア）**。
3. 続いて **パチスロ モンキーターンII（山佐）** を処理。
4. 2機処理後、04/07同日群をメーカー横断再監査し、漏れがなければGROUP_CLOSED。
5. その後 **2014-04-08〜04-20境界監査**へ進む。K-Navi上の次の具体日アンカーは **2014-04-21**。
6. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02_skylove.md` から継続。
7. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）** を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### ハッピージャグラーVII
- 北電子公式: `https://www.kitadenshi.co.jp/slot/happyjugglerv2/`
- HAZUSE基本: `https://hazuse.com/machine/pachislot/3S0869/`
- HAZUSE天井: `https://hazuse.com/machine/pachislot/3S0869/genre/207/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/89/a.php`
- すろぱちくえすと: `https://www.slopachi-quest.com/article/happy-juggler-v2/`
- パチマガスロマガFREE回顧: `https://pachimaga.com/free/playback/2500f2839c7f281330480623b049efdf636beae9.php`
- P-WORLD/遊技通信 後継機記事: `https://news.p-world.co.jp/articles/21515/yugitsushin`
- P-WORLD/グリーンべると 後継機記事: `https://news.p-world.co.jp/articles/21503/greenbelt`

### 04-07群
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`

### 遡及QA
- 次対象: `docs/real_machine_db/machines/2007-02_skylove.md`
