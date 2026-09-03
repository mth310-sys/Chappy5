# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **489**
- latestMachineAdded: **マジックライアン**（ネイチャー・アセスメント / 2010-06-07）
- latestRecord: `docs/real_machine_db/machines/2010-06-07_magic-ryan.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **マジックライアン**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前488「ニューパルサーV2」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **488** / chronologicalFrontier **2010-06-07**。
- LATEST_HANDOFFの同日群候補「マジックライアン」をrepo未登録確認後、489件目として追加。
- パチビーで **2010-06-07** 導入群、P-WORLDで2010年06月導入を確認。
- chronologicalFrontierは **2010-06-07** のまま同日群を継続する。

## 489 — マジックライアン 要約

- メーカー: **ネイチャー・アセスメント**
- 型式名: **マジックライアン**
- 検定番号: **0S0332**
- 導入: **2010-06-07**
- 世代/タイプ: **5号機 / ノーマル / BIG+REG / 完全告知**
- 機械割: **96.87 / 98.32 / 100.83 / 103.25 / 105.82 / 106.97%**
- BIG: **1/293.8 / 1/288.7 / 1/288.7 / 1/278.8 / 1/278.8 / 1/274.2**
- REG: **1/464.7 / 1/451.9 / 1/356.1 / 1/327.6 / 1/274.2 / 1/274.2**
- 合算: **1/180.0 / 1/176.1 / 1/159.4 / 1/150.6 / 1/138.2 / 1/137.1**
- BIG約**312枚** / REG約**104枚**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。パチマガ専用ページ自体が「1000円あたりのゲーム数 現在調査中」。
- RT/ART/AT・通常ゲーム数天井・ゲーム数モード: **なし/確認なし**
- coreStatus: **COMPLETE_CORE_BASE_UNVERIFIED_RESET_BEHAVIOR_NA_PARTIAL**

## resetBehavior v0.7 — マジックライアン

- **設定変更**: 通常ゲーム数天井・RT/ART・AT・ゲーム数モードがないノーマルタイプ。ホール経営上の主要な天井/モードリセット対象なし。その他内部処理は直接根拠未確認。
- **据え置き**: 宵越し対象となる通常天井/モード/RT/ARTなし。
- **電源OFF→ON**: 同上。その他内部処理は直接根拠未確認。
- **ゲーム数・天井**: `NOT_APPLICABLE_AS_NO_GAME_COUNT_CEILING_CONFIRMED`。
- **モード・状態**: ゲーム数モードなし、RT/ART状態なし。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: 「マジックライアン / ネイチャー・アセスメント / 0S0332」と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/ガックン/初期出目/リールを組み替えて再探索したが、本機固有の高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **NORMAL_TYPE_NO_CEILING_NO_RT_ART_NO_GAME_COUNT_MODE_RESET_BENEFIT_NONE_CONFIRMED_DETECTION_UNVERIFIED**

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済み。
- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み。
- 次の欠損候補は2006-11群の `小野真弓のかわいい日本昔話` / `海童王`。既存レコードのreleaseDateと実ファイル順を確認し、順序を固定してから補完する。

## 主要出典（取得日 2026-09-03）

### マジックライアン
- パチビー 2010年6月導入スケジュール: `https://www.pachibee.jp/machines/schedule/2010-06`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5960`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/07/a.php`
- パチマガスロマガ 確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/07/h.php`
- パチマガスロマガ 小役/1000円ゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/07/c.php`
- 5号機クロニクル: `https://5goki.com/nature-assessment`

## 今回のGitHub更新

- 489 マジックライアン追加: commit `ab712862dfca5a7d25e4a06c43571dd6701f1dc6`

## 次回再開地点

1. **recordCount 489 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群を継続**。残る未処理候補は **とんでも戦士ムテキング**。repo重複確認後に追加する。
3. **南国育ちスペシャル-30**は既登録。重複追加しない。
4. **ゴッドハンターV**はK-Navi 2010-06-07 / パチビー 2010-06-08の競合候補。6/7同日群を閉じる前後で別系統資料を追加照合する。
5. 遡及QAは **ジャックと豆の木まで補完済み**。次は2006-11群の `小野真弓のかわいい日本昔話` / `海童王` の順序を固定し、最初のresetBehavior欠損を補完する。
6. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。
