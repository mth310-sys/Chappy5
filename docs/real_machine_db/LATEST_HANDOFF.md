# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **466**
- latestMachineAdded: **新鬼武者**（ロデオ / ホール導入2010-03-23）
- latestRecord: `docs/real_machine_db/machines/2010-03-23_shin-onimusha.md`
- chronologicalFrontier: **2010-03-23**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード「満福箱」を再取得。
- `INDEX.md` は旧地点（19件）のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **465** / chronologicalFrontier **2010-03-15** / latestMachineAdded「満福箱」。
- 2010-03-15同日群と03-16〜22境界を再監査。次の具体的ホール導入群2010-03-23へ進み、未登録の「新鬼武者」を466件目へ追加。

## 466 — 新鬼武者 要約

- メーカー: **ロデオ**
- 型式表記: **新鬼武者Z**を当時系記事・実機流通表記で確認。ただし検定公示一次資料の直接照合は未完。
- 導入: **2010-03-23**。K-Navi、パチ&スロ必勝本で一致。
- 世代/タイプ: **5号機 / A+ART / 押し順ART**
- BIG: **約204枚**、REG: **約60枚**
- ART「蒼剣RUSH」: **約50G+α / 約+1.4枚/G / 継続率50〜89%**
- ボーナス合算: 設定1 **1/263.20** → 設定6 **1/229.95**
- BIG合算: 設定1 **1/394.80** → 設定6 **1/344.93**
- REG: 設定1 **1/789.59** → 設定6 **1/689.85**
- 機械割: 必勝本シミュレート **98.52〜111.26%** と後年回顧 **96.4〜110.0%** が競合。平均せず `CONFLICT`。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。2020/2022/2025年の同名・後継機を混入しない。
- 通常天井: **ボーナス間1400G**。到達後の天井高確中、ART抽選契機役成立で**継続率89% ART**へ。

## resetBehavior v0.7 — 新鬼武者

- **設定変更**: 鬼モード・ARTストック等が消滅し、内部状態を再抽選することを本機固有資料で確認。
- **設定変更時の状態振り分け**:
  - 設定1〜4: 超低確70% / 低確5% / 高確20% / 超高確5% → **高確以上25%**
  - 設定5・6: 超低確55% / 低確5% / 高確35% / 超高確5% → **高確以上40%**
- **据え置き判別**: 当時解析では、朝一に鬼モードまたはARTから開始すれば据え置き確定。チャンス役なしで高確示唆が出れば設定変更期待度上昇。
- **1400G天井カウンタ**: 設定変更時のclear/retainを直接本文で確定できず `UNVERIFIED_AFTER_RESEARCH`。一般的5号機挙動で補完しない。
- **電源OFF→ON**: 天井カウンタ・内部状態・ART情報の処理を本機固有直接資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **リセット短縮天井**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **主要不利**: 設定変更でARTストック・鬼モード消滅。
- **ガックン等物理判別**: `UNVERIFIED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- K-Navi 新鬼武者: `https://p-kn.com/slot/1174/`
- K-Navi 設定変更後の状態移行: `https://p-kn.com/slot/1174/18213/`
- パチ&スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1568/1/24056`
- P-WORLD 新鬼武者「2010年」: `https://www.p-world.co.jp/machine/database/5874`
- パチマガスロマガ旧解析 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/53/a.php`
- 当時系解析まとめ: `https://ameblo.jp/pachimatome/entry-10503414806.html`
- 当時系「新鬼武者Z」記事: `https://ameblo.jp/gunp06s/entry-10460321805.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回はGitHubコード検索indexから「スロ原人直後」の実ファイルを順序保証付きで一意特定できなかったため、別機種を推測でQA済みにせず、誤更新を回避。
- 次回はmachine tree/コミット履歴を用いてスロ原人直後の最初の `resetBehavior` 欠損実ファイルを特定し、その機種から遡及QAを再開する。

## 次回再開地点

1. **recordCount 466 / chronologicalFrontier 2010-03-23**。最新追加は「新鬼武者」。
2. **2010-03-23同日群を継続監査**。LATEST_HANDOFF旧候補の「続・お見事！サブちゃん」「ノーマルだよ！サブちゃん」（オリンピア）、「デジスロA」（ベルコ）を既存登録と突合し、最古の未登録機から467件目へ進む。
3. 03-23群完了後、次の具体導入日境界へ時系列前進。
4. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー/当時スケジュール `2010-04-19` / 複数DB `2010-04`。4月境界で再確認。
5. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / 直近main状態を再取得し、他リレー競合・重複を防ぐ。
