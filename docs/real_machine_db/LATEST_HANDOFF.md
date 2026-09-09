更新日: 2026-09-09

## 現在地点
- recordCount: **1082**
- latestRecordAdded: **パチスロ ラストエグザイル-銀翼のファム-**（オーイズミ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-22_last-exile-ginyoku-no-fam.md`
- chronologicalFrontier: **2017-05-22**
- frontierLatestMachine: **パチスロ ラストエグザイル-銀翼のファム- — No.1082**
- schema: **resetBehavior v0.7**
- status: **2017-05-22_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1081「パチスロ 逆転裁判」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1081件 / chronologicalFrontier 2017-05-22 / 5/22群OPEN**。
- handoff指定の次未処理候補 **「パチスロ ラストエグザイル-銀翼のファム-」** をNo.1082として登録。
- 性能コアとresetBehavior v0.7を同時収集。欠損は機種名・型式VX・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックン等へ検索語を変え、公式・解析・中古実機型式資料を横断してからUNVERIFIED判定した。
- 5/22群は未処理候補が残るためOPENを維持。

## No.1082 — パチスロ ラストエグザイル-銀翼のファム-
- manufacturer: **オーイズミ**
- releaseDate: **2017-05-22**
- generation/system: **5号機 / 5.5号機 / A+ART+AT / CZ経由 / リアルボーナス併用**
- formalModelName: **パチスロラストエグザイル銀翼のファム／VX**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT**

### performanceCore
- 機械割: **97.8 / 98.7 / 101.2 / 103.8 / 106.2 / 110.0%**。
- ART初当たり: **1/539.5 / 480.2 / 503.7 / 405.1 / 444.7 / 356.0**。
- ボーナス合算: **1/230.0 / 226.0 / 217.7 / 214.2 / 206.1 / 197.4**。
- ベース: **約34G/50枚**。
- ART純増: **約1.5枚/G**、ボーナス込み約**1.9枚/G**は定義分離。
- 青7BIG **204枚**、赤/白BIG **平均152枚**、REG/ヴェスパBONUS **平均61枚**、超弩級EXILE RUSH **448枚+ARTストック抽選**。
- ART「EXILE RUSH」は初期G数決定後 **40G以上**。通常ゲーム数天井は**非搭載**。

### resetBehavior v0.7
- 通常時ゲーム数天井非搭載のため gameCounterReset / ceilingAfterReset の天井項目はNOT_APPLICABLE。
- 設定変更専用の短縮天井はNOT_APPLICABLE。
- 設定変更時の低確/通常/高確/超高確の初期状態振り分け、朝一専用モード、CZ/ART優遇数値は再探索後も **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時の内部状態の直接CARRYOVER契約は本機固有比較資料を固定できず **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。
- 純電源OFF→ON時の内部状態・液晶ステージ・ストック等も **UNVERIFIED_AFTER_RESEARCH**。一般的5号機挙動から補完しない。
- 本機固有のガックン、初期出目、ランプ/液晶による決定的な変更判別契約も再探索後 **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### identity QA
- オーイズミ公式製品ページで製品・メーカー確認。
- 2017-05-22導入はパチビー、ちょんぼりすた、2017新台カレンダーで一致。
- 型式 `/VX` は複数中古実機流通資料で一致。
- 検定番号は `ラストエグザイル / 銀翼のファム / VX / オーイズミ / 検定番号 / 6S` 等へ検索を広げても直接固定できずUNVERIFIED。

## 2017-05-22群
- status: **OPEN**。
- 登録済み:
  1. タイムクロス2 — No.1080
  2. パチスロ 逆転裁判 — No.1081
  3. パチスロ ラストエグザイル-銀翼のファム- — No.1082
- 未処理先行候補:
  1. **パチスロ 黒神 The Animation**
  2. **賞金首2**
- `パチスロ 黒神 The Animation` は今回の境界確認でHAZUSE/K-Naviとも **2017-05-22** を確認。HAZUSEで型式 **パチスロ黒神／K2**、検定番号 **7S0110** も先行確認済み。No.1083候補。
- `賞金首2` もK-Navi/HAZUSE/ちょんぼりすたで **2017-05-22** を確認。HAZUSEで型式 **賞金首2／NE**、検定番号 **6S1679** を先行確認済み。その後の候補。
- この2機を処理後、5/22同日全メーカー横断監査を行い、追加全国導入機がなければCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1082を再取得。
2. **1082件 / chronologicalFrontier 2017-05-22 / 5/22群OPEN** を正本として継続。
3. 次未処理 **「パチスロ 黒神 The Animation」** をNo.1083候補として性能コア+resetBehavior v0.7まで処理。
4. 続いて **「賞金首2」** を導入日・重複再照合して処理。
5. 5/22群を全メーカー横断監査し、漏れがなければCLOSED判定して次の日付境界へ進む。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1082 ラストエグザイル-銀翼のファム-
- オーイズミ公式: https://www.oizumi.co.jp/machine/last_ex/about.html
- パチビー: https://www.pachibee.jp/machines/reach/217040010
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/35291/
- すろぱちくえすと: https://www.slopachi-quest.com/article/lastexile/
- P-WORLD: https://www.p-world.co.jp/machine/database/8318
- 2017新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- 江戸スロ型式資料: https://edoslot.net/smp/item/famu.html
- 中一商事/Yahoo!型式資料: https://store.shopping.yahoo.co.jp/nakaiticom/2001.html
- スロットキングダム型式資料: https://slot-kingdam.com/SHOP/rasuegu.html

### 次候補確認
- HAZUSE 黒神: https://hazuse.com/machine/pachislot/7S0110/genre/209/
- K-Navi 黒神: https://p-kn.com/slot/2770/
- HAZUSE 賞金首2: https://hazuse.com/machine/pachislot/6S1679/genre/203/
- K-Navi 賞金首2: https://p-kn.com/slot/2787/
- ちょんぼりすた 賞金首2: https://chonborista.com/slot/net-slot/36138/
