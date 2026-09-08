更新日: 2026-09-09

## 現在地点
- recordCount: **1047**
- latestRecordAdded: **パチスロおそ松さん**（D-light）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-02-06_osomatsu-san.md`
- chronologicalFrontier: **2017-02-06**
- frontierLatestMachine: **パチスロおそ松さん — No.1047**
- schema: **resetBehavior v0.7**
- status: **2017-02-06_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードを再取得して開始。
- 開始時mainは並行リレーにより **1044件 → 1046件**へ進行済み。JAWSはNo.1045、GⅠ優駿倶楽部はNo.1046として既登録だったため重複追加しなかった。
- 次の未処理 **D-light「パチスロおそ松さん」** をNo.1047として新規登録し、性能コア＋resetBehavior v0.7を収集。
- 同名検索に混入する2017-04-17「パチスロおそ松くん」と2019-03-04「パチスロおそ松さん～驚～」は別機種として明確に除外した。

## No.1045 — JAWS ～it's a SHARK PANIC～
- オリンピア / 2017-02-06 / `JAWS/J5` / A+ART・周期CZ。
- 機械割 **97.1 / 98.5 / 100.2 / 104.3 / 107.0 / 112.1%**、ART初当たり **1/445.3 → 1/247.7**、約31G/50枚、ボーナス込み約1.9枚/G。
- 設定変更後モード **E 10.2% / F 89.8%**、最大スルー天井7回へ短縮。周期間G数は設定変更でも引継ぎ。純電断は各主要状態CARRYOVER。ガックン判別不可。

## No.1046 — GⅠ優駿倶楽部
- KPE / 2017-02-06 / ART・周期育成CZ。
- 機械割 **97.8 / 98.4 / 99.6 / 103.4 / 105.5 / 110.2%**、ART初当たり **1/348.8 → 1/266.7**、代表約32G/50枚、約2.0枚/G。
- 設定変更で天井/周期RESET、シナリオ・スケジュールモード・競走馬再抽選。据え置き/純電断は主要進捗CARRYOVER、競走馬のみ朝一再抽選。

## No.1047 — パチスロおそ松さん
- manufacturer: **D-light（ディ・ライト）**
- releaseDate: **2017-02-06**
- formalModelName canonical: **パチスロおそ松さんD**（2016-09-08山形県公安委員会検定通過記事転載）。後年流通資料では末尾D省略 `パチスロおそ松さん` 表記もある。
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ノーマルAタイプ / MAX-A400**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCH_EXHAUSTED**

### performanceCore
- 機械割: **98.8 / 99.8 / 101.5 / 103.0 / 104.5 / 107.5%**。
- BIG: **1/368.18 / 364.09 / 360.09 / 356.17 / 348.60 / 327.68**。
- REG: **1/436.91 / 417.43 / 397.19 / 370.26 / 350.46 / 327.68**。
- 合算公開丸め値: **1/200 / 194 / 189 / 182 / 175 / 164**。
- baseGamesPer50代表約**37G**。設定別解析は **36.8 / 37.1 / 38.0 / 38.6 / 38.9 / 39.1G**。
- BIG最大約**403枚** / REG最大約**100枚**。
- 5号機クロニクルの設定3=101.51%、設定4=103.03%は当時系資料101.5/103.0%との追加桁精度差として保持し、平均しない。

### resetBehavior v0.7
- ノーマルAタイプで通常ゲーム数天井、周期、AT/ART/CZ、通常時ゲーム数モードは非搭載のため、それらのRESET/CARRYOVERは **NOT_APPLICABLE**。
- 設定変更専用の短縮天井、朝一高確、朝一専用モード、公開された主要恩恵/不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電断でホール経営・朝一客AIへ影響する天井/モード進捗は非該当。
- ボーナス成立中等の特殊局面の純電断復帰は本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。実機完全再現目的の推測はしない。
- ガックン、初期出目、ランプ等による本機固有の変更判別は、機種名/正式型式/メーカーと設定変更・リセット・朝一・据え置き・電源OFF ON・ガックンを組み替えて再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### data quality / identity
- `パチスロおそ松さんD`（検定通過記事転載）と `パチスロおそ松さん`（流通資料）は末尾D省略の表記差として双方保持。
- 検定番号は `おそ松さんD / おそ松さん / D-light / ディ・ライト / 6S / 検定番号 / 公安委員会` まで変えて横断したが直接固定できずUNVERIFIED。
- 2017年4月「おそ松くん」、2019年「おそ松さん～驚～」のリセット/天井情報は本機へ混入させない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04-16_oniwa-de-don.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-04_bomberman-victory-f.md`。
- 新規本線を止めず、既存性能statusを不用意に崩さずresetBehavior欠損だけを順次補完する。

## 境界監査
- **2017-02-06_GROUP_OPEN**。
- 登録済み:
  - パチスロ牙狼-守りし者- — No.1044
  - JAWS ～it's a SHARK PANIC～ — No.1045
  - GⅠ優駿倶楽部 — No.1046
  - パチスロおそ松さん — No.1047
- 同日未処理確認候補:
  - **ジャックポットトロピカルバージョン2**
  - **パチスロ攻殻機動隊S.A.C. 2nd GIG**（導入日要再照合）
  - **パチスロ機動戦士Zガンダム**（導入日要再照合）
- K-Naviに2/6掲載のマジンガーZは複数資料2/20と競合するため、2/6群では早取りせず2/20群で正式処理する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1047を再取得。
2. **1047件 / chronologicalFrontier 2017-02-06 / 2/6群OPEN** を正本として継続。
3. 次の未処理機種 **「ジャックポットトロピカルバージョン2」** をNo.1048候補として、メーカー・正式型式・実導入日を再固定してから登録。
4. その後 **攻殻機動隊S.A.C. 2nd GIG / 機動戦士Zガンダム** の2/6導入可否を公式・業界・当時解析・古いDBで照合し、2/6群CLOSED可否を判定。
5. 遡及QAは `2006-04_bomberman-victory-f.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1047 おそ松さん
- K-Navi: https://p-kn.com/slot/2687/
- ちょんぼりすた: https://chonborista.com/slot/d-light/30168/
- アタリ7: https://www.atari7.com/slot/date1481615670.php
- 5号機クロニクル: https://5goki.com/daiichi
- 中一商事Yahoo!流通資料: https://store.shopping.yahoo.co.jp/nakaiticom/60096.html
- pachinko's blog: https://pachinko.hatenablog.jp/entry/2017/02/osomatsusan
- 2016-09-08検定通過記事転載: https://newskenm.blog.2nt.com/blog-entry-53420.html

### 既登録2/6群の主要参照
- JAWS P-WORLD: https://www.p-world.co.jp/machine/database/8237
- JAWS reset: https://slotjin.com/zone/jaws/
- GⅠ優駿倶楽部 K-Navi: https://p-kn.com/slot/2677/
