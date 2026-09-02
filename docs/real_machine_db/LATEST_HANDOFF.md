# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **433**
- latestMachineAdded: **スーパービンゴSP3**（2009年11月月次監査で判明した未登録補完）
- latestRecord: `docs/real_machine_db/machines/2009-11_super-bingo-sp3.md`
- chronologicalFrontier: **2009-11-23 / 剣豪（429）を具体日確定本線として維持。433は2009年11月の月粒度補完**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、直前 `LATEST_HANDOFF.md`、既存432番 `2009-11-17_neon-monogatari.md` を再読。
- INDEXは古い19件地点のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを進捗正本として優先。
- 作業開始時mainは432件 / `ネオン物語`。11/17同日群と11/18〜11/23をPachiBee、P-WORLD、当時業界記事、メーカー別資料で再監査。
- `妖怪人間ベム` は2009-11-23のCRパチンコであることを再確認。`風雲新撰組`、`新大江戸日記～月夜に咲く華～` も既確認どおりパチンコ分類を維持。
- 11/23以前に具体日確定で追加すべき新たな未登録パチスロは今回確認できなかった。
- 月次監査でベルコ公式が **2009年11月登場**とする `スーパービンゴSP3` がrepo未登録であることを確認し、433件目として補完。
- 追加直前にLATEST_HANDOFFを再取得し432件地点のままで他リレー競合がないことを確認。

## 433 — スーパービンゴSP3 要約

- メーカー: **ベルコ**
- 導入時期: **2009年11月**（ベルコ公式。具体ホール導入日は今回未確定）
- 世代: **5号機**
- システム: **押し順ART / 差枚数管理ART**
- BIG確率: **1/8192.00 / 1/5461.33 / 1/5461.33 / 1/5461.33 / 1/5461.33 / 1/4096.00**
- 50枚ベース: **23.97 / 23.98 / 23.98 / 23.98 / 23.98 / 23.98G**
- ART「ビンゴチャンス」: **純増約+2.0枚/G**
- BIG: **約150枚**
- BC/ART: **最低100枚**、500枚・1000枚以上へ拡張し得る差枚数管理
- BIG後はART突入。旧パチマガはBIGでART2回以上確定、P-WORLDはBIG後ART＋赤7揃い1回を説明。

## CONFLICT — 機械割

平均せず両系列を保存。

- 旧パチマガシミュレートPAYOUT: **95.73 / 98.89 / 101.24 / 103.24 / 104.99 / 105.27%**
- 5号機クロニクル: **95.0 / 98.0 / 100.0 / 102.0 / 104.0 / 104.5%**

## resetBehavior v0.7 — スーパービンゴSP3

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。旧パチマガ本機トップに「攻め時・ヤメ時・設定変更時」の専用項目存在は確認したが、本文具体値を取得できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。ART関連内部状態・抽選進捗の保持を本機固有資料で確定できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。ART内部状態、セグ/リール表示、抽選進捗の復帰挙動を確定できず。
- **ゲーム数・天井**: 本機固有の通常ゲーム数天井は `NONE_CONFIRMED_AFTER_RESEARCH`。後継機の天井解析を混入させていない。
- **モード/状態**: 設定変更専用・朝一専用モード振分は `NONE_CONFIRMED_AFTER_RESEARCH`、状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、セグ、リール、ランプ、朝一挙動を再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## データ品質メモ

- ベルコ公式で2009年11月・5号機ARTを確認。
- P-WORLDと旧パチマガでART純増約2枚/G、BIG約150枚、差枚数管理ARTの基本構造を照合。
- 設定別BIG確率、1000円あたりG数は旧パチマガ本機専用解析の直接値。
- ART/BC設定別初当たり、正式型式、検定番号、具体ホール導入日は再探索後も未確定のため推測で埋めていない。
- 2009-11-29のK-Navi掲示板に実戦報告があり11月中の稼働自体は整合するが、投稿日を導入日には採用しない。

## 主要出典（取得日 2026-09-03）

- ベルコ公式 スーパービンゴSP3: `https://www.s-bellco.co.jp/products/slot/superbingo_sp/`
- ベルコ公式 会社情報/シリーズ: `https://www.s-bellco.co.jp/company/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5706`
- 旧パチマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/84/a.php`
- 旧パチマガ BIG/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/84/h.php`
- 旧パチマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/84/c.php`
- 旧パチマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/84/belco_slot_84.php`
- 5号機クロニクル ベルコ: `https://5goki.com/bellco`
- K-Navi掲示板: `https://p-kn.com/community/bbs/slot/1053/30724/`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という直前進捗を維持。
- 新規本線収集を止めず、2006-10以降の最初のresetBehavior欠損機を後続QAで補完する。

## 次回再開地点

1. **recordCount 433**。具体日確定のchronologicalFrontierは **2009-11-23 / 剣豪**、433 `スーパービンゴSP3` は2009年11月の月粒度漏れ補完。
2. 次は **2009-11-24〜11-30** を具体ホール導入日順に監査。P-WORLD月次一覧、PachiBee、当時業界記事、メーカー公式/一覧、machine treeを突合する。
3. 月粒度2009-11機についても、`スーパービンゴSP3`以外の未登録候補がないかメーカー別5号機一覧を継続監査する。
4. `爆走列島` はSNKプレイモアが2009-11-16に発表したことまでは確認済みだが、ホール導入月/具体日を確定してから正しい位置へ追加する。発表日を導入日に流用しない。
5. 追加候補は必ずrepo既存検索し、既に登録済みの11/24以降機を重複追加しない。
6. 追加・修正前に最新main・LATEST_HANDOFFを再取得し、他リレーの進行を取り込む。
7. 性能コア＋resetBehavior v0.7を同基準で収集。競合は平均せず `CONFLICT`、十分な再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。
8. 完全再現用詳細抽選は対象外。
