# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **597**
- latestMachineAdded: **ミリオンゴッド～神々の系譜～**（ミズホ / 2011-08-08）
- latestRecord: `docs/real_machine_db/machines/2011-08-08_million-god-kamigami-no-keifu.md`
- chronologicalFrontier: **2011-08-08**
- frontierLatestExactDateMachine: **ミリオンゴッド～神々の系譜～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — ミリオンゴッド～神々の系譜～

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコードを再取得して開始。
- 開始時正本は recordCount **596** / chronologicalFrontier **2011-08-01**「旋風の用心棒～胡蝶の記憶～」。
- 08-01同日群〜08-07境界を監査し、repo内重複検索で本機未登録を確認。
- K-Navi / HAZUSEとも **2011-08-08導入開始**で一致したため597件目として追加。
- 型式名 **ミリオンゴッド-神々の系譜-E**、検定番号 **1S0338**。

### 性能コア

- 5号機 ART / セットストック / モード管理。
- 機械割精密系列: **97.8 / 99.0 / 102.9 / 105.5 / 112.9 / 119.6%**。
- HAZUSE掲載: **98 / 99 / 103 / 106 / 113 / 119%**。設定6差を含むため平均せずCONFLICT保持。
- ART初当たり: **1/433.4 / 373.4 / 429.6 / 310.6 / 368.9 / 265.8**。
- 50枚ベース: **約25G/50枚**（回顧資料。MEDIUM）。
- GOD GAME: **1セット100G / 約+2.4枚/G / 約240枚**。
- GOD揃い: **GG5セット以上**。
- 通常天井: **ART終了後1400G**。

### resetBehavior v0.7

- **設定変更でART間1400G天井進捗CLEAR**を確認。
- K-Naviの本機専用「モード移行率(設定変更)」から、設定変更時の表モード再抽選数値を保存。
- 設定1〜3の天国以上（天国S/L/超天国）合計は各 **0.17%**、設定4〜6は各 **0.62%**。
- 低確A/低確B/通常/天国準備を含む全設定別振り分けは機種レコード本文へ保存済み。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時の天井/モード完全引継ぎ、単純電源OFF→ON、GGストック/前兆中境界処理は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- 液晶「3・2・4（ミズホ）」は電源ON時・設定変更時に出現し得るため通常時リーチ目の例外となる資料を確認。単独での設定変更確定判別・ガックン数値は未確認。

## 主要出典 — ミリオンゴッド～神々の系譜～（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1447/`
- K-Navi 設定変更時モード: `https://p-kn.com/slot/1447/33976/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0338/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/34/a.php`
- 2-9伝説: `https://29den.com/milliongod/`
- GODシリーズ回顧: `https://blankky.com/slot/god-series-history/`
- パチセブン回顧: `https://pachiseven.jp/articles/detail/256`

## 遡及resetBehavior QA継続地点

- **小野真弓のかわいい日本昔話 (`2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md`) までresetBehavior v0.7補完済み**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みで重複更新しない。
- tree実パス順で次の候補は **`docs/real_machine_db/machines/2006-11_rocky-balboa-g.md`**。直接fetchしてresetBehavior欠損有無を確認する。
- その後 `2006-11_thunder-v-special.md`（月のみ別path）の重複/別レコード性とresetBehavior有無を確認する。

## 本線の次回再開地点

1. **recordCount 597 / chronologicalFrontier 2011-08-08**から開始。
2. **2011-08-08同日群を最終監査**し、ミリオンゴッド～神々の系譜～を重複追加しない。
3. 08-09以降の境界を外部導入カレンダー/当時業界記事/K-Navi/HAZUSE/P-WORLDで確認し、最古未登録機を優先。
4. PARTIAL/UNVERIFIEDは機種名表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替えて再探索する。
5. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。
