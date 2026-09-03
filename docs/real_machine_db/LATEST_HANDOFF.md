# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **495**
- latestMachineAdded: **アイムラッキーパレード**（タイヨー / 主値2010-06-28）
- latestRecord: `docs/real_machine_db/machines/2010-06-28_im-lucky-parade.md`
- chronologicalFrontier: **2010-06-28**
- frontierLatestMachine: **アイムラッキーパレード**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時の最新mainは recordCount **494** / chronologicalFrontier **2010-06-21**。古い会話上の490地点へ戻らず、最新mainを採用。
- 前回handoffに残っていた493「コード・ルージュ」の `baseGamesPer50` QAを実施。当時グリーンべるとと当時パチマガスロマガで **37.6G/1000円** が一致したため `UNVERIFIED_AFTER_RESEARCH` から補完。
- 6/22〜6/27をパチビー2010年6月月間一覧で境界監査し、次の明確なパチスロ新規導入として6/28「アイムラッキーパレード」を確認。
- repo検索で未登録を確認後、495件目として追加。

## 495 — アイムラッキーパレード 要約

- メーカー: **タイヨー**
- 導入主値: **2010-06-28**。パチビー月間一覧とパチスロ業界史整理資料で一致。
- 日付CONFLICT: パチンコビレッジ導入カレンダーは **2010-07-05**。平均化せず両方保持し、主値は6/28。
- 世代/タイプ: **5号機 / ノーマル / 完全告知 / ボーナス主体**
- 機械割: **96.73 / 97.47 / 99.91 / 102.31 / 106.33 / 108.32%**
- BIG: **1/284.9 → 1/264.3**
- REG: **1/455.1 → 1/268.6**
- 合算: **1/175.2 → 1/133.2**
- 基本獲得: BIG **約312枚** / REG **約104枚**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。当時パチマガスロマガの1000円あたりゲーム数欄自体が「現在調査中」で残存。
- ART/RT: **非搭載**。純増は `NOT_APPLICABLE`。
- 天井: pacnkで**天井機能非搭載**を確認。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

## resetBehavior v0.7 — アイムラッキーパレード

- **設定変更**: 天井・ゲーム数解除モード・ART/RT/CZ等の持続性ゲーム資源が確認されないため、朝一期待値へ影響するリセット資源は実質非該当。初期出目/リール等の物理的リセット詳細は `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 引継ぎ対象となる天井ゲーム数・モード・ART/RT/CZ状態は `NOT_APPLICABLE`。
- **電源OFF→ON**: ゲーム資源としての差は実質非該当。初期出目/ランプ等の本機固有挙動は未確認。
- **ゲーム数・天井**: **NOT_APPLICABLE / NO_CEILING**。
- **モード・状態**: ゲーム数解除モード、朝一専用モード、ART/RT/CZ、高確等の持続性状態は確認されない。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 短縮天井・専用モード・当選率優遇・既得ART/CZ消失等は `NONE_CONFIRMED / PRACTICALLY_NOT_APPLICABLE`。
- **変更判別**: ガックン、初期出目、Lucky Luckyランプ、リール、電源復帰等まで検索語を変えて再探索したが、本機固有高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: なし。天井非搭載。

## 493 コード・ルージュ QA完了

- `baseGamesPer50` を **37.6G/1000円** へ補完済み。
- 根拠: 当時グリーンべると + 当時パチマガスロマガの一致。
- commit: `b0b77e12783d1a9a8a0720e15f584c39fb5a0d8a`

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済みを維持。
- 次はmainのmachine tree / commit履歴 / 2006-11〜12実レコード群から「ジャックと豆の木」直後に実在する最初の `resetBehavior` 欠損ファイルをパスで確定してから補完する。
- 新規機種の時系列前進を止めない。

## 主要出典（取得日 2026-09-03）

### アイムラッキーパレード
- パチビー 2010年6月導入一覧: `https://www.pachibee.jp/machines/schedule/2010-06`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6006`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/72/a.php`
- パチマガスロマガ 小役/1000円: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/72/c.php`
- パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/72/taiyo_slot_72.php`
- pacnk: `https://pacnk.com/slot/tools/sh_imluckyparade.html`
- パチスロ業界初項目一覧: `https://slothistory.com/ball_frame.html`
- パチスロ全機種一覧2009〜2010: `https://slothistory.com/zenkishu_9.html`
- パチンコビレッジ導入カレンダー2010: `https://www.pachinkovillage.com/introduction/index.php?Y=2010&action=archive`

### コード・ルージュ QA
- グリーンべると 2010-05-21: `https://web-greenbelt.jp/00002696/`
- パチマガスロマガ 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/146/c.php`

## 今回のGitHub更新

- 493 コード・ルージュ ベースQA: commit `b0b77e12783d1a9a8a0720e15f584c39fb5a0d8a`
- 495 アイムラッキーパレード追加: commit `6e3d6a4801af80e5334467b6f48b02fab32f5e2a`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 495 / chronologicalFrontier 2010-06-28**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. 6/28同日群を別系統導入一覧でもう一度漏れ監査。パチビーではパチスロは「アイムラッキーパレード」のみ。
3. **2010-06-29〜2010-07-04** を境界監査後、パチビー2010年7月一覧上の次の明確なパチスロ群は **2010-07-05「トップをねらえ2!」「お座敷の茶々」**。repo重複確認し、同日群の最古未処理から続行。
4. アイムラッキーパレードの `formalModelName` / `approvalNumber` / `baseGamesPer50` / `resetDetection` / 物理的powerCycleBehaviorは後続QA対象。一般論で補完しない。
5. 導入日6/28と7/5の差はCONFLICTのまま保持し、新証拠が出るまで平均化・断定修正しない。
6. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。
