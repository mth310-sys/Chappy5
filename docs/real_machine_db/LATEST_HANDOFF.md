# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **835**
- latestRecordAdded: **ニューアイムジャグラーEX-KT**（北電子）— 2014-08-04
- latestRecord: `docs/real_machine_db/machines/2014-08-04_new-im-juggler-ex-kt.md`
- chronologicalFrontier: **2014-08-04**
- frontierLatestMachine: **ニューアイムジャグラーEX-KT**
- schema: **resetBehavior v0.7**
- status: **2014-08-04_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、834件目 `2014-07-22_pachislot-hissatsu-shigotonin.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **834件 / 2014-07-22 / 07-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2014-08-01〜08-03は今回の具体日・導入カレンダー再探索で新たなパチスロ導入を固定できず、現調査では **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 今回追加 — ニューアイムジャグラーEX-KT

### identity / 性能コア

- manufacturer: **北電子**。
- hall start: **2014-08-04**（K-Navi）。北電子公式は2014年8月製品として掲載。
- generation/system: **5号機 / ノーマルAタイプ / 完全告知**。
- 北電子公式は **ニューアイムジャグラーEX-Cと同一スペック** と明記。
- メーカー公表出玉率（工場データ予測値）: **95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.2%**。
- BB: **1/287.4 / 282.5 / 282.5 / 273.1 / 273.1 / 268.6**。
- RB: **1/455.1 / 442.8 / 348.6 / 321.3 / 268.6 / 268.6**。
- 合成: **1/176.2 / 172.5 / 156.0 / 147.6 / 135.4 / 134.3**。
- BB約**325枚**、RB約**104枚**。
- 50枚ベース（チェリー狙い解析値）: 設定1〜5 **約35.00〜35.02G**、設定6 **36.38G**。
- 天井: **なし**。
- coreStatus: **COMPLETE_CORE**。
- 型式名/検定番号のEX-KT固有表記は、EX-C同一スペック情報と混同せず `UNVERIFIED_AFTER_RESEARCH`。

### 出玉率の定義分離

- 北電子公式95.9〜105.2%をメーカー公表値として主値化。
- 攻略資料にはチェリー等の取得条件を含む **約96.9〜106.6%**、別シミュレータ完全取得時 **97.37〜107.05%** などが存在。
- これは同一定義の競合ではなく打ち方/取得条件差のため平均せず別系列保持。`CONFLICT`化しない。

## resetBehavior v0.7 — ニューアイムジャグラーEX-KT

- settingChangeBehavior: ノーマルAタイプのためAT/ART天井・モード・高確等は **NOT_APPLICABLE_NORMAL_TYPE**。
- carryOverBehavior: 天井/モード/AT状態は非搭載。EX-KT固有の据え置き時リール初期挙動は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 単純電源OFF→ONで保持/消去を比較すべき天井・モード・有利区間は非搭載。EX-KT固有のリール初期挙動は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset/stateAfterReset: **NOT_APPLICABLE_NORMAL_TYPE**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 固定短縮天井・朝一モード優遇・CZ優遇は該当なし。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 同一系統「ニューアイムジャグラーEX」の攻略資料では、設定変更後に店側が回していなければ **朝一1G目のリールガックン**が変更推測に利用可能。ただし個体差・微ガックン等があり過信不可。EX-KT固有の直接資料ではないため `ANALYSIS_SINGLE_SAME_SPEC_SERIES_SUPPORT`。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。本機の構造上N/A項目は整理済みだが、EX-KT固有の設定変更/据え置き/純電断リール初期挙動を直接固定できていない。

## 2014-08-04群監査

- K-Navi等で同日パチスロとして少なくとも以下3機を確認:
  1. **ニューアイムジャグラーEX-KT**（北電子）— 登録済み No.835
  2. **やじきた道中記乙**（メーシー）— 未処理
  3. **パチスロ ヘルシング**（北電子）— 未処理
- よって **2014-08-04_GROUP_OPEN** を維持。
- 次回は「やじきた道中記乙」を先に処理し、その後「パチスロ ヘルシング」。処理後に8/4同日群を再監査してCLOSED判定する。

## 遡及 resetBehavior QA カーソル

- 新規収集を止めない。
- 次の遡及QAカーソルは `docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）を維持。

## safeguard

- `ニューアイムジャグラーEX-KT / ニューアイムジャグラーEX KT / ニューアイム / ニューアイジャグ / ニューアイムジャグラーEX / EX-C / 北電子` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 1G目 / 天井 / モード / 型式 / 検定 / 50枚 / ベース` を組み合わせて再探索。
- 6号機「SアイムジャグラーEX」、2025年「ネオアイムジャグラーEX」は別機種として除外。
- EX-Cの型式名をEX-KT固有型式として自動転記していない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 835 / chronologicalFrontier 2014-08-04 / 08-04_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 835件目を再確認。
3. 次の未処理は **2014-08-04「やじきた道中記乙」（メーシー）**。
4. 続いて **2014-08-04「パチスロ ヘルシング」（北電子）**。
5. 2機処理後に8/4同日群をメーカー横断再監査し、漏れがなければCLOSED → 次の具体日へ進む。
6. 遡及QAは `2007-02_pachislot-tekken-den-tough.md` から再開。

## 主要出典 — 取得日 2026-09-07

### ニューアイムジャグラーEX-KT
- 北電子公式: `https://www.kitadenshi.co.jp/slot/newimjugglerex-kt/`
- 北電子公式 検定情報: `https://www.kitadenshi.co.jp/slot-kentei/newimjugglerex-kt/`
- K-Navi: `https://p-kn.com/slot/2097/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7465`
- HAZUSE（ニューアイムジャグラーEX）: `https://hazuse.com/machine/pachislot/SX0042/`
- 激アツ（ニューアイムジャグラーEX解析）: `https://gekiatsu7.com/slot-analyze/1995/`
- ジャグラー解析攻略: `https://juggler7.com/newaimex/index.html`
- パチ7回顧: `https://pachiseven.jp/articles/detail/11292`

### 2014-08-04同日群
- K-Navi ニューアイムジャグラーEX-KT: `https://p-kn.com/slot/2097/`
- K-Navi やじきた道中記乙: `https://p-kn.com/slot/2095/`
- K-Navi パチスロ ヘルシング: `https://p-kn.com/slot/2099/`
