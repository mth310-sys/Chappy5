# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **488**
- latestMachineAdded: **ニューパルサーV2**（山佐 / 2010-06-07）
- latestRecord: `docs/real_machine_db/machines/2010-06-07_new-pulsar-v2.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **ニューパルサーV2**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前487「ガメラ」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **487** / chronologicalFrontier **2010-06-07**。
- LATEST_HANDOFFの同日群候補「ニューパルサーV2」をrepo未登録確認後に488件目として追加。
- パチビー月間導入表・山佐系発売年表で **2010-06-07**、グリーンべるとで納品 **2010-06-06開始予定**を確認。納品/ホール導入の定義差として整合。
- 2010年11月「ニューパルサーV2～ブラックVer.～」は後発別機種候補のため混同しない。
- chronologicalFrontierは **2010-06-07** のまま同日群を継続する。

## 488 — ニューパルサーV2 要約

- メーカー: **山佐**
- 導入: **2010-06-07**
- 世代/タイプ: **5号機 / ノーマル / BIG+REG / リーチ目主体+遅れ告知**
- 機械割: **97.8 / 99.2 / 100.8 / 102.7 / 105.0 / 107.9%**
- BIG: **1/297.8 / 1/289.9 / 1/282.4 / 1/275.3 / 1/268.5 / 1/262.1**
- REG: **1/595.7 / 1/579.9 / 1/564.9 / 1/496.4 / 1/442.8 / 1/399.6**
- 合算: **1/198.5 / 1/193.3 / 1/188.3 / 1/177.1 / 1/167.1 / 1/158.3**
- BIG約**312枚** / REG約**156枚**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- 通常ゲーム数天井: **NONE_CONFIRMED**
- RT/ART/AT: **なし**
- coreStatus: **COMPLETE_CORE_BASE_UNVERIFIED_FORMAL_IDENTITY_UNVERIFIED_RESET_BEHAVIOR_NA_PARTIAL**

### 型式/検定メタデータ注意

- HAZUSE現行ページは「ニューパルサーV2」に対し型式名「ニューパルサースリーRZ」、検定番号「0S0201」、導入日「2009-06-01」を表示し、2010年V2の複数資料と整合しない。
- 誤紐付け可能性が高いため formalModelName / approvalNumber は `UNVERIFIED_AFTER_RESEARCH`。推測転記しない。

## resetBehavior v0.7 — ニューパルサーV2

- **設定変更**: 通常ゲーム数天井・RT/ART・AT・ゲーム数モードがないノーマルタイプであることを確認。ホール経営上の主要な天井/モードリセット対象なし。その他内部処理は完全再現対象外かつ直接根拠未確認。
- **据え置き**: 宵越し対象となる通常天井/モード/RT/ARTなし。
- **電源OFF→ON**: 同上。その他内部処理は未確認。
- **ゲーム数・天井**: `NOT_APPLICABLE_AS_NO_GAME_COUNT_CEILING_CONFIRMED`。
- **モード・状態**: ゲーム数モードなし、RT/ART状態なし。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン/初期出目等を再探索したが本機固有の高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **NORMAL_TYPE_NO_CEILING_NO_RT_ART_NO_GAME_COUNT_MODE_RESET_BENEFIT_NONE_CONFIRMED_DETECTION_UNVERIFIED**

## resetBehavior 遡及QA — 今回の進捗

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのためスキップ。
- 次の月精度欠損として `2006-11_jack-to-mamenoki.md` を確定し、v0.7を遡及追加済み。
- ジャックと豆の木は通常ゲーム数天井を確認せず、赤7後最大300G / BAR後最大2000GのRTを確認。設定変更・据え置き・電源OFF→ON時のRT残G/権利処理は資料系統を変えても直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 既存性能コアは崩さず `coreStatus: COMPLETE_CORE_RESET_QA_PARTIAL` としてreset QAを別管理。
- 次の欠損候補は2006-11群の `小野真弓のかわいい日本昔話` / `海童王`。既存レコードのreleaseDateと実ファイル順を確認し、順序を固定してから次を補完する。

## 主要出典（取得日 2026-09-03）

### ニューパルサーV2
- グリーンべると: `https://web-greenbelt.jp/00002706/`
- パチビー 2010年6月導入スケジュール: `https://www.pachibee.jp/machines/schedule/2010-06`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/172/a.php`
- パチマガスロマガ確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/172/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5950`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S0201/`（型式/検定/導入メタデータ不整合につき当該項目は不採用）

### ジャックと豆の木 resetBehavior QA
- BELLCO公式アーカイブ: `https://www.s-bellco.co.jp/products/slot/yama_jackandbeans/`
- pacnk: `https://pacnk.com/slot/tools/sh_jakkutomamenoki.html`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/03/c.php`
- 5号機名機10年史: `https://ameblo.jp/charisma-youbun/entry-12142102229.html`

## 今回のGitHub更新

- 488 ニューパルサーV2追加: commit `5cb9a6ca3098fa79bf1c53359ed978cb5d131782`
- ジャックと豆の木 resetBehavior QA追補: commit `91bb47b5eafeaac09c6fe751b8a69e6a28af2526`

## 次回再開地点

1. **recordCount 488 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群を継続**。残る未処理候補: **マジックライアン / とんでも戦士ムテキング**。各repo重複確認後、最古未処理を追加する。
3. **南国育ちスペシャル-30**は既登録。重複追加しない。
4. **ゴッドハンターV**はK-Navi 2010-06-07 / パチビー 2010-06-08の競合候補。6/7同日群を閉じる前後で別系統資料を追加照合する。
5. 遡及QAは **ジャックと豆の木まで補完済み**。次は2006-11群の `小野真弓のかわいい日本昔話` / `海童王` の順序を実レコードreleaseDateとファイル実体で固定し、最初のresetBehavior欠損を補完する。
6. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。
