# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **511**
- latestMachineAdded: **沖楽**（アイウィル / 2010-09・具体日未確定の月粒度漏れ補完）
- latestRecord: `docs/real_machine_db/machines/2010-09_okiraku.md`
- chronologicalFrontier: **2010-09-21**
- frontierLatestMachine: **ルパン三世～ルパン一族の秘宝～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線510実レコード「ルパン三世～ルパン一族の秘宝～」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **510** / chronologicalFrontier **2010-09-21**。
- 直前handoff指定の「沖楽」をrepo検索し未登録を確認。
- 「沖楽」はP-WORLD・5号機クロニクル・pacnk・当時発表記事でメーカーを**アイウィル（IWiLL）**と確認。直前handoff内の「西陣」メモはメーカー主値に採用しない。
- 導入時期は複数資料で**2010年9月**まで確定。機種名＋導入日/納品/ホール導入、および2010/09の候補日を変えて再探索したが具体日は固定できず、推測せず月粒度の漏れ補完として511件目に追加。
- 月粒度補完のため時系列前線は **2010-09-21** のまま維持。

## 511 — 沖楽 要約

- メーカー: **アイウィル（IWiLL）**
- 導入: **2010-09**（具体日 `UNVERIFIED_AFTER_RESEARCH`）
- 世代/タイプ: **5号機 / ノーマル / 完全告知Aタイプ**
- 機械割: **97.9 / 98.8 / 101.0 / 103.0 / 104.9 / 107.6%**
- BIG: **1/284.9 / 1/280.1 / 1/280.1 / 1/266.4 / 1/266.4 / 1/257.0**
- REG: **1/442.8 / 1/420.1 / 1/327.7 / 1/321.3 / 1/268.6 / 1/260.1**
- 合算: **1/173.4 / 1/168.0 / 1/161.0 / 1/145.6 / 1/133.7 / 1/129.3**
- BIG約**312枚**、REG約**104枚**。
- RT/ART/ATを追加機能として持たないボーナス主体ノーマル機。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。小役から逆算していない。
- coreStatus: **COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_BEHAVIOR_RESEARCHED**

## resetBehavior v0.7 — 沖楽

- **設定変更**: 本機固有のRAM/内部フラグ/初期出目等の処理は `UNVERIFIED_AFTER_RESEARCH`。一般ノーマル機の挙動から補完しない。
- **据え置き**: 天井、RT/ART/AT/CZ、継続モード等の主要な日跨ぎ進行要素は確認されない。低レベル内部処理は未確定。
- **電源OFF→ON**: 低レベル内部状態、出目表示等の本機固有処理は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 公開天井ゲーム数・周期進行は確認されず、ホール経営/朝一狙い用の持越し天井カウンタは `NOT_APPLICABLE_FOR_CONFIRMED_CEILING_PROGRESS`。リセット専用短縮も確認なし。
- **モード/状態**: 継続型AT/ART/CZモードは非搭載。低レベル状態は未確定。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用の天井短縮、高確、RT/ART付与、ボーナス優遇などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、花火ランプ等を用いる本機固有判別条件・確率は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## CONFLICT / 注意

- 性能コア数値は5号機クロニクル/pacnkで整合し、今回明確な数値CONFLICTはなし。
- 直前handoffの「沖楽（西陣）」メモに対し、P-WORLD・5号機クロニクル・pacnk・2010年7月の当時発表記事はいずれもアイウィル扱い。今回、メーカーを**アイウィル**へ固定。
- 全国ホール導入の具体日は月以上に確定できないため、9/21以前・以後のどちらにも推定配置しない。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- ジャックと豆の木直後かつresetBehavior欠損の最初の実レコードは、recursive tree / commit history / 実ファイルpathで順序を確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-04）

- P-WORLD 沖楽: `https://www.p-world.co.jp/machine/database/6050`
- 5号機クロニクル アイウィル一覧: `https://5goki.com/iwill`
- pacnk 沖楽設定判別: `https://pacnk.com/slot/tools/sh_okiraku.html`
- 2010年当時発表記事アーカイブ: `https://p-mans.blogspot.com/2010/07/`

## 今回のGitHub更新

- 511 沖楽追加: commit `e05c0453e668b55e0c88446cf8bb0c1ac659e967`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 511 / chronologicalFrontier 2010-09-21**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **9/21同日群を最終監査**。沖楽は処理済みなので重複追加しない。
3. **2010-09-07〜20境界**もHAZUSE 9/10・9/17、P-WORLD/K-Navi月間一覧、メーカー/当時納品資料で再監査し、具体日不明の月粒度機や地域先行を飛ばさない。
4. 上記を閉じられた場合、9/22以降へ前進。既知の次節点として **2010-09-27「茉莉花の剣」**（K-Naviで導入日確認済み）を優先候補とする。
5. **「リングにかけろ1 ～黄金の日本Jr.編～」**も2010年9月機。旧解析で設定変更後は周期CZ突入という重要resetBehavior情報が確認できるため、repo重複と具体導入日を再確認し、茉莉花の剣より前なら先に補完する。
6. 511の追加QAは、沖楽の具体導入日、50枚ベース、正式型式/検定番号、設定変更/電源OFF→ON、ガックン等の直接資料が新たに見つかった場合のみ追補。推測で埋めない。
7. 遡及QAは既存地点を維持し、新規時系列前進を止めない。
