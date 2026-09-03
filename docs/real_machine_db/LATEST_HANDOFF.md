# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **467**
- latestMachineAdded: **ノーマルだよ！サブちゃん**（オリンピア / 2010-03-22、境界漏れ遡及追加）
- latestRecord: `docs/real_machine_db/machines/2010-03-22_normal-dayo-sabuchan.md`
- chronologicalFrontier: **2010-03-23**
- frontierLatestMachine: **新鬼武者**（ロデオ / 2010-03-23）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコード「新鬼武者」を再取得。
- `INDEX.md` は旧地点（19件）のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **466** / chronologicalFrontier **2010-03-23** / latestMachineAdded「新鬼武者」。
- 03-23同日群候補を突合したところ「ノーマルだよ！サブちゃん」が未登録。HAZUSEで2010-03-22導入開始を確認したため、時系列漏れ防止を優先して467件目として遡及追加。
- 「続・お見事！サブちゃん」はK-Navi/パチビーで2010-03-23導入を確認済みで未登録。
- 「デジスロA」はベルコ公式で**2010年4月登場**と確認できたため、03-23候補から除外して4月境界へ送る。

## 467 — ノーマルだよ！サブちゃん 要約

- メーカー: **オリンピア**
- 型式: **お見事！サブちゃん2NY**
- 検定番号: **9S1394**
- 導入: **2010-03-22**（HAZUSE）
- 世代/タイプ: **5号機 / ノーマル / 技術介入 / 6GプチRT**
- 機械割: **95.5 / 97.2 / 99.6 / 104.5 / 109.0 / 115.1%**（HAZUSE・K-Navi一致）
- BIG合算: **1/287.4 → 1/222.2**
- REG合算: **1/356.2 → 1/248.2**
- ボーナス合算: **1/159.1 → 1/117.2**
- 50枚ベース: **約35.0〜約38.0G**（設定1〜6レンジ）
- BIG: **最大311枚**、REG: **104枚**
- 特殊リプレイ後: **6GプチRT**、リプレイ確率約1/1.7
- P-WORLDで**天井RT非搭載**を確認。

## resetBehavior v0.7 — ノーマルだよ！サブちゃん

- **設定変更**: 本機固有の設定変更専用恩恵/不利/朝一専用数値は多段再探索後も確認なし。
- **据え置き**: 天井RT非搭載のため、通常ゲーム数天井の宵越し/据え置き概念は非該当。短時間プチRTなどその他状態の電源跨ぎ処理は直接資料未確認。
- **電源OFF→ON**: 短時間RT状態、表示、リール初期挙動を本機固有資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: P-WORLDで天井RT非搭載。通常天井・リセット短縮天井は `NOT_APPLICABLE`。
- **モード**: 朝一専用モード・通常ゲーム数解除モード等は確認なし。
- **状態**: 特殊リプレイ後6GプチRTは存在するが設定変更/電源OFF→ON時の処理は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、表示/ランプ等の本機固有直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/9S1394/genre/201/`
- HAZUSE 天井・設定判別・機械割: `https://hazuse.com/machine/pachislot/9S1394/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5857`
- K-Navi 機械割&期待収支: `https://p-kn.com/slot/1159/16939/`
- K-Navi 業界ニュース（2スペック発表）: `https://p-kn.com/topics/news/961/`
- ベルコ公式 デジスロA: `https://www.s-bellco.co.jp/products/slot/digislo_a/`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 新規前線収集を止めず、後続QAでスロ原人直後の最初の `resetBehavior` 欠損実ファイルをmachine tree/履歴から一意特定して再開する。

## 次回再開地点

1. **recordCount 467 / chronologicalFrontier 2010-03-23**。467は03-22漏れの遡及追加で、前線は03-23を維持。
2. **2010-03-23同日群を継続**。未登録の **「続・お見事！サブちゃん」**（オリンピア）を最優先で468件目候補として性能コア＋resetBehavior v0.7を多系統照合する。
3. 「ノーマルだよ！サブちゃん」は登録済み。「デジスロA」はベルコ公式2010年4月登場のため03-23群から除外。
4. 03-23群完了後、03-24以降の次の具体導入日を境界監査して時系列前進。
5. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4月境界で再確認。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近main状態を再取得し、他リレー競合・重複を防ぐ。
