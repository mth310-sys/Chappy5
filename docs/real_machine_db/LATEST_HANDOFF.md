# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **841**
- latestRecordAdded: **押忍！サラリーマン番長**（大都技研）— 2014-09-08
- latestRecord: `docs/real_machine_db/machines/2014-09-08_osu-salaryman-bancho.md`
- chronologicalFrontier: **2014-09-08**
- frontierLatestMachine: **押忍！サラリーマン番長**
- schema: **resetBehavior v0.7**
- status: **2014-09-08_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、840件目 `2014-09-01_sengoku-basara3.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **840件 / 2014-09-01 / 09-01_GROUP_OPEN**。
- 2014-09-01同日群を `2014年9月1日 / 2014-09-01 / パチスロ / 新台 / 導入 / ホール導入 / 納品` 等で再監査。今回の探索範囲では戦国BASARA3以外の具体日付き未登録5号機を固定できなかったため **09-01_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 09-02〜09-07も同様に境界監査し、具体日付き未登録5号機を固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い具体日アンカー **2014-09-08「押忍！サラリーマン番長」**をHAZUSE・K-Navi・当時業界記事・解析資料で固定し、No.841として登録。
- machine record commit: `4954779577ffa6b48cfa74c5302baa5e7ff535e0`。

## 今回追加 — 押忍！サラリーマン番長

### identity / 性能コア

- manufacturer: **大都技研**。
- hall start: **2014-09-08**。
- 型式: **押忍！サラリーマン番長 俺に日本は狭すぎるA9**。
- 検定番号: **4S0483**。
- type: **5号機 / 疑似ボーナス+AT / CZ / 天井**。
- 主機械割系列（HAZUSE）: **97.50 / 99.40 / 101.30 / 104.40 / 108.30 / 114.50%**。
- 番長ボーナス: **1/295.9 → 1/241.4**。
- AT初当たり: **1/623.1 → 1/374.9**。
- ボーナス+AT合算: **1/200.6 → 1/146.9**。
- 50枚ベース: **約31.5G**。
- 疑似ボーナス/AT純増: **約2.8枚/G**。
- 番長ボーナス: **40〜100G**。
- 超番長ボーナス: **50G**。
- 頂RUSH: **1セット50G+α**。
- ボーナス間天井: 通常A/B **999G** / 天国準備 **1069G** / 天国A/B **96G**。
- coreStatus: **COMPLETE_CORE**。

### CONFLICT

- 機械割はHAZUSE精密値を主系列として採用。
- 期待値見える化は **97.0 / 98.9 / 100.5 / 104.4 / 108.3 / 114.5%**、ちょんぼりすたは **97.5 / 99.4 / 101 / 104 / 108 / 115%**。平均せず `CONFLICT_PAYOUT_RATE_SECONDARY_SERIES` としてレコードに保持。
- HAZUSEページ後段の設定推測欄には設定6番長ボーナスを1/374.9とする転記崩れがあるが、同ページ上段と複数資料は約1/241で一致。主系列は上段 **1/241.4**。

## resetBehavior v0.7 — 押忍！サラリーマン番長

- 設定変更: **天井G RESET / 内部モード再抽選 / 内部状態再抽選**。
- 設定変更なし電源OFF→ON: **天井G・内部モード・内部状態を引き継ぐ**。液晶は轟ステージ・表示0Gへ戻るが内部進捗は保持。
- 据え置き: 上記本機専用比較契約により **天井・モード・状態CARRYOVER**。
- 設定変更後は **リセット専用マップ**。
- リセット専用マップでは101〜900Gの偶数百G帯01〜32Gが **マップレベル5**、963Gはレベル6（天井）。
- 公開数値: マップレベル5の1G当選率はノーマル状態 **1/64.00**、プラス状態 **1/50.03**。
- 固定一律のリセット短縮天井は `NONE_CONFIRMED`。ゾーン優遇と天井短縮を混同しない。
- 設定変更時のモード5種の専用初期振り分け、状態初期振り分け数値は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一判別: 液晶は変更/電断とも轟ステージ・0G表示で単独判別不可。リセット専用マップ由来の雫ステージ/前兆位置は確率的判別材料。
- 2014年ショールーム設定6リセット実戦では朝一数G〜20Gの雫移行、20G前後/65G前後からの前兆パターンを観測。ただし実戦値であり解析確率化しない。
- 本機固有ガックン/リール初動契約は検索語を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-09-01〜09-07境界監査

- 09-01は戦国BASARA3以外の具体日付き未登録5号機を今回固定できず **GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 09-02〜09-07も具体日付き未登録5号機を今回固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 2014年9月機として候補に上がる他機種は日付を個別確認:
  - ニューキングハナハナ-30: HAZUSE **2014-09-16**（メーカー公式は2014年9月発売、業界記事は先行地域9月中旬/他地域10月上旬）。
  - スロット バットマン: K-Navi **2014-09-22**。
  - ドリームジャンボ: **2014-09-29**（PiDEAは9/28納品予定、パチビーは9/29導入）。
  - バビロン(with桜丘ショコラ): HAZUSE **2014-09-29**。別資料に10/6導入表記があるため到達時に競合精査。
- よって09-08への前進を妨げる具体日アンカーは今回確認なし。

## 2014-09-08群

- **押忍！サラリーマン番長**を登録済み。
- 同日群の検索では現時点で他の具体日付き未登録パチスロを固定できていないが、メーカー別一覧を含む最終横断監査前なので **OPEN** を維持。
- 次回は `2014-09-08 / 9月8日 / パチスロ / 新台 / 導入開始 / ホール導入 / 納品` とメーカー別一覧を再照合し、未登録機があれば先に処理する。
- 同日群CLOSED後は09-09以降を時系列監査。既知の次候補として **2014-09-16 ニューキングハナハナ-30** があるが、09-09〜09-15の漏れ監査を先に行う。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）。
- 新規収集を止めず、本線と並行して1件ずつ前進する。

## safeguard

- 初代2014年「押忍！サラリーマン番長」と2020年「押忍！サラリーマン番長2」、スマスロ番長系を混同しない。
- 「サラ番3」「番長3」の通称検索は初代サラリーマン番長を指す古い記事がある一方、2017年の「押忍！番長3」もあるため本文同定を必須とする。
- リセット専用マップによるゾーン優遇を「短縮天井」と表現しない。
- 液晶0G表示と内部天井進捗を混同しない。
- 機械割競合値は平均しない。
- P-WORLDの最終更新日を導入日に使用しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 841 / chronologicalFrontier 2014-09-08 / 09-08_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 841件目を再確認。
3. **2014-09-08同日群を全メーカー横断で再監査**し、未登録機があれば先に処理。
4. 同日群CLOSED後、**09-09〜09-15境界監査**へ進む。
5. 漏れがなければ強い次候補 **2014-09-16「ニューキングハナハナ-30」** を処理する。
6. 遡及QAは **`2007-02_new-hanahana-30.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### 押忍！サラリーマン番長
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0483/`
- 一撃 天井/設定変更: `https://1geki.jp/slot/osu_sbancho/3/`
- 一撃 リセット時実戦: `https://1geki.jp/slot/osu_sbancho/62/`
- すろぱちくえすと リセット専用マップ: `https://www.slopachi-quest.com/article/bantyo3-map-level/`
- ちょんぼりすた: `https://chonborista.com/slot/daito-slot/23024/`
- 期待値見える化: `https://slotjin.com/zone/bancho3/`
- K-Navi: `https://p-kn.com/slot/2105/`
- ニッカンアミューズメント（娯楽産業）: `https://www.nikkansports.com/amusement/pachinko/news/f-pp-tp0-20140725-1340293.html`

### 9月境界候補確認
- パイオニア公式2014製品: `https://www.slot-pioneer.co.jp/products/2014.html`
- ニューキングハナハナ-30 HAZUSE: `https://hazuse.com/machine/pachislot/4S0458/`
- ニューキングハナハナ-30 グリーンべると: `https://news.p-world.co.jp/articles/6748/greenbelt`
- スロット バットマン K-Navi: `https://p-kn.com/slot/2110/`
- ユニバーサル2014製品: `https://www.universal-777.com/product/slot/2014/`
- ドリームジャンボ PiDEA: `https://www.pidea.jp/articles/JPS%E3%80%8C%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%9C%E3%80%8D%E3%81%AF%E6%9C%80%E5%A4%A7AT%E3%82%B2%E3%83%BC%E3%83%A0%E6%95%B010000G%21%3F`
- バビロン HAZUSE: `https://hazuse.com/machine/pachislot/4S0663/`
