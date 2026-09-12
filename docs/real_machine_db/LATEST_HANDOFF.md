更新日: 2026-09-12

## 現在地点
- recordCount: **1497**
- latestRecordAdded: **ハナハナホウオウ～天翔～紫パネル — No.1497**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-05-09_hanahana-houoh-tensho-gp.md`
- chronologicalFrontier: **2022-05-09**
- frontierLatestMachine: **ハナハナホウオウ～天翔～紫パネル — No.1497**
- schema: **resetBehavior v0.7**
- status: **2022-05-09_GROUP_CLOSED_3_OF_3_ACTUAL_RELEASES**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、既存No.1464 `ハナハナホウオウ～天翔～` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- No.1496 handoff指定の `ハナハナホウオウ～天翔～紫パネル` を独立型式No.1497として登録。
- 型式は `Sハナハナホウオウ～天翔～GP`。2022年1月導入の25φ `Sハナハナホウオウ～天翔～LX` とは別型式だが、パイオニア発表を報じる複数業界資料が**スペック・演出は同一**と明記。
- そのため全型式収集方針に従い独立レコード化しつつ、性能コアはLXと同一仕様として採用。設定1〜6、機械割97/99/101/103/106/109%、BIG 1/297→1/236、REG 1/496→1/337、合算1/186→1/139、約42G/50枚、BIG最大240枚、REG最大120枚、天井なし。
- 導入日は後年カレンダー/解析で **2022-05-09**。発売時業界記事は「5月上旬予定」。
- GPの検定通過は2022-02-10〜02-14頃の資料で確認できたが、検定番号そのものは今回の表記・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- resetBehaviorはGP固有解析ページが固定できなかったため、業界一次系の「スペック・演出同一」を根拠に既存LX高信頼解析を継承した箇所を明示。天井/AT/CZ/有利区間は非該当。LX解析では設定変更・純電断ともBETランプ引継ぎ、ガックンなし。BGM変化条件の内部履歴はLX時点でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。

## No.1497 — ハナハナホウオウ～天翔～紫パネル
- path: `docs/real_machine_db/machines/2022-05-09_hanahana-houoh-tensho-gp.md`
- manufacturer: **パイオニア**
- formalModel: **Sハナハナホウオウ～天翔～GP**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-05-09**
- generation/system: **6号機 / ノーマル・完全告知・25φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97 / 99 / 101 / 103 / 106 / 109%**
- BIG: **1/297 / 1/284 / 1/273 / 1/262 / 1/249 / 1/236**
- REG: **1/496 / 1/458 / 1/425 / 1/397 / 1/366 / 1/337**
- combined: **1/186 / 1/175 / 1/166 / 1/157 / 1/148 / 1/139**
- baseGamesPer50: **約42G/50枚**
- basicPayout: **BIG最大240枚 / REG最大120枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE / GP_SPECIFIC_RESET_DIRECT_DOC_UNVERIFIED**

### resetBehavior v0.7 — No.1497
- **設定変更**: 天井なし。AT/CZモード非該当。LX同一仕様解析ではBETランプ引継ぎ・ガックンなし。
- **据え置き**: 天井/AT/CZ非該当。BGM変化条件の内部履歴はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: LX同一仕様解析ではBETランプ引継ぎ・ガックンなし。
- **ゲーム数/天井**: 天井非搭載。
- **モード/状態**: 朝一専用AT/CZモードは非該当。BGM履歴のみ未固定。
- **有利区間**: 朝一物差しではNOT_APPLICABLE。
- **朝一恩恵/不利**: 設定変更専用の短縮天井・CZ/AT優遇・主要不利要素はなし/非該当。
- **変更判別**: BETランプは引継ぎ、ガックンなしのため主要な変更判別材料にならない。GP固有直接解析はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 設定変更専用当選率・短縮G・モード振分はなし/非該当。

## 2022-05-09群 — CLOSED
実導入として現在採用する3型式/機種:
1. `Sスーパー海物語IN JAPAN祭` — **No.1495 処理済み**
2. `SLOT STEINS;GATE` — **No.1496 処理済み**
3. `ハナハナホウオウ～天翔～紫パネル / Sハナハナホウオウ～天翔～GP` — **No.1497 処理済み**

### 日付監査メモ
- K-Naviは `パチスロ ゼーガペイン2` を2022-05-09に掲載するが、複数の実導入系資料は **2022-05-23** で一致。5/9は前倒し予定情報として保持し、本DBの実導入時系列では5/23をcanonical候補とする。
- 別の2022年導入カレンダーは5/9を `SLOT STEINS;GATE` と `Sスーパー海物語IN JAPAN祭`、5/23を `ぱちすろ けものフレンズ` と `パチスロ ゼーガペイン2` と整理。紫GPは限定/増産型式として別資料で5/9導入が確認できる。
- よって5/10〜5/22に追加の未処理本線候補が見つからなければ、次は5/23群へ進む。

## 次回本線の再開地点
- **No.1498候補 `ぱちすろ けものフレンズ` — 2022-05-23。**
- その後 **`パチスロ ゼーガペイン2` — 2022-05-23** を処理する。
- ゼーガペイン2は5/9予定資料と5/23実導入資料のDATE_CONFLICTを平均化せず保持する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1497登録を優先し、遡及QAカーソルは進めていない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）**。

## GitHub保存
- No.1497追加 commit: `ab1581ea0c5c9c2367f16a670966f5e8a4e54075`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1497 ハナハナホウオウ～天翔～紫パネル
- https://news.p-world.co.jp/articles/19785/nippon
- https://p-bomb.co.jp/industry/maker/3560/
- https://news.p-world.co.jp/articles/19759/yugitsushin
- https://pachinko-curation.com/24568/
- https://item.rakuten.co.jp/auc-nakaiti/hanahanahouoh_tensho_gp/
- https://slogati.com/hanahana-ht/
- https://p.hisshobon.jp/machine/3792/1/85421

### 2022-05-09 / 05-23境界監査
- https://p-kn.com/calendar/202205/
- https://crankyseven.com/newmachine-info.htm
- https://chonborista.com/slot/universal-slot/164980/
