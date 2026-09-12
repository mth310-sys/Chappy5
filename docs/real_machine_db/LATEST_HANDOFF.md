更新日: 2026-09-13

## 現在地点
- recordCount: **1529**
- latestRecordAdded: **ハッピージャグラーVⅢ — No.1529**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-10-24_happy-juggler-v3.md`
- chronologicalFrontier: **2022-10-24**
- frontierLatestMachine: **ハッピージャグラーVⅢ — No.1529**
- schema: **resetBehavior v0.7**
- status: **2022-10-24_GROUP_CLOSED_1_OF_1_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、既存No.1528、最新handoffを読み直して開始。
- 前回会話上のNo.1525地点は古く、main正本はNo.1528 / 2022-10-17群CLOSEDまで進行済みだったためmainを優先した。
- No.1529 `ハッピージャグラーVⅢ` を性能コア + resetBehavior v0.7で追加。
- Greenbelt/P-WORLD 2022-10-03更新の新台スケジュールで2022-10-24パチスロ欄は同機1機のみのため、2022-10-24群をCLOSED 1/1とした。
- 遡及QAカーソル `ワイルド7` はmain上ですでに2026-09-11 QA済み。次の `わんぱくパイロット大冒険` もQA済みだったため重複処理を回避し、次の未QA `ダイナマイトマン` を処理。
- `ダイナマイトマン` の既存 `coreStatus: COMPLETE_CORE` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` に更新。

## No.1529 — ハッピージャグラーVⅢ
- manufacturer: **北電子**
- formalModel: **SハッピージャグラーVⅢEA**
- inspectionCode: **2S0196**
- releaseDate: **2022-10-24**
- generation/system: **6号機 / ノーマルAタイプ / 完全告知**
- payout: **97.0 / 98.1 / 99.9 / 102.9 / 105.8 / 108.4%**
- BIG: **1/273.1 / 270.8 / 263.2 / 254.0 / 239.2 / 226.0**
- REG: **1/397.2 / 362.1 / 332.7 / 300.6 / 273.1 / 256.0**
- 合算: **1/161.8 / 154.9 / 146.9 / 137.7 / 127.5 / 120.0**
- baseGamesPer50: **約42G/50枚**
- BIG平均約240枚 / REG平均約96枚
- 天井非搭載
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_BONUS_PENDING_DETAILS**

### resetBehavior v0.7 — No.1529
- 天井、周期、AT/ART/CZモードは非搭載のため設定変更/据え置き/純電断で比較するゲーム数契約は `NOT_APPLICABLE`。
- 設定変更後1G目にリールガックンが発生する機種固有情報を確認。
- 純電源OFF→ONだけでは設定変更由来のガックンは発生しないとの機種固有情報を確認。
- 店側の事前1G消化やリール位置操作等で判別性が崩れるため、ガックン単独を100%確定判別にはしない。
- 成立済みボーナス/告知待ち状態の設定変更・据え置き・純電断時の直接契約は公開資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の公開朝一数値、短縮天井、朝一高確等はなし/非該当として管理。

## 遡及QA — ダイナマイトマン
- path: `docs/real_machine_db/machines/2007-03_dynamiteman.md`
- 既存 `coreStatus: COMPLETE_CORE` は維持。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 通常仕様のボーナス後480G周期救済、20G RT「怒りモード」、約75%ループは保持。
- 設定変更時の480Gカウンタ、据え置き時の周期/内部状態、純電源OFF→ON時の周期/RT残G、本機固有ガックン/初期出目は、検索語・資料系統を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的5号機挙動からは補完していない。

## 次回本線
Greenbelt 2022-10-03更新スケジュール上、次の導入境界は **2022-11-07**。既知パチスロは以下4機。
1. **花火絶景（ミズホ）** ← No.1530候補 / 次回最優先
2. ラストユートピア（ピーセカンド）
3. パチスロ幼女戦記（サミー）
4. パチスロ鉄拳4アルティメットデビルVer.（山佐ネクスト）

2022-11-07群は4機を処理後、漏れ監査してCLOSED可否を判定する。

## 次回 遡及QAカーソル
- `docs/real_machine_db/machines/2007-03_pikagorou-v-b.md` — **ピカゴロウV-B**
- 元レコードは `coreStatus: COMPLETE_CORE / resetBehaviorQA: PARTIAL`。
- 天井/RT等付加機能なしは既確認。設定変更/据え置き/純電断時の成立済みボーナス等、ガックン/変更判別を再探索し、性能完了判定とreset QAを分離したまま更新する。

## 今回の主要資料
### ハッピージャグラーVⅢ
- Greenbelt / P-WORLD 2022-10-24新台記事: https://news.p-world.co.jp/articles/21995/greenbelt
- 遊技日本 / P-WORLD 型式情報: https://news.p-world.co.jp/articles/21499/nippon
- PiDEA 東京都公安委員会検定情報: https://www.pidea.jp/articles/1658720419
- HAZUSE: https://hazuse.com/machine/pachislot/2S0196/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/173776/
- Greenbelt / P-WORLD新台スケジュール: https://news.p-world.co.jp/articles/21806/greenbelt
- 機種固有ガックン検証: https://www.kzo-moso.com/slot154/

### ダイナマイトマン QA
- パチマガスロマガ旧DB 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/08/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4622
- 5号機クロニクル JPS: https://5goki.com/jps
- パチ7 JPS回顧: https://pachiseven.jp/articles/detail/11436
- パチマガスロマガFREE回顧: https://pachimaga.com/free/special/a3da97c9260e6d735b7d4c3d5dfb847eb51eeb1b.php

## 次回再開地点
**本線はNo.1530候補 `花火絶景`（2022-11-07）から性能コア + resetBehavior v0.7を収集する。同時に遡及QAは `2007-03_pikagorou-v-b.md` を処理する。PARTIAL/UNVERIFIEDは資料系統を変えて再探索し、既存COMPLETE_COREは性能側とreset QA側を分離して維持する。処理後は2022-11-07群の残り3機へ進む。**