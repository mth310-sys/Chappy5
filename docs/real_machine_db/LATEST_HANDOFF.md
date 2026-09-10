更新日: 2026-09-10

## 現在地点
- recordCount: **1188**
- latestRecordAdded: **パチスロ 大海物語4**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-05-07_pachislot-ooumi-monogatari-4.md`
- chronologicalFrontier: **2018-05-07**
- frontierLatestMachine: **パチスロ 大海物語4 — No.1188**
- schema: **resetBehavior v0.7**
- status: **2018-05-07_GROUP_OPEN_1_OF_AT_LEAST_3_CONFIRMED_CANDIDATES**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1187 `SLOTパックマン` を再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1187件 / chronologicalFrontier 2018-04-23 / 4/23群CLOSED**。
- GitHub検索で `パチスロ 大海物語4` の既存レコードがないことを確認。
- 4/24〜5/6境界を再探索。今回の探索範囲では4/23のSLOTパックマン後、次の確定パチスロ導入群として2018-05-07の複数機を確認。境界監査は5/7群CLOSE時に再度行う。
- No.1188 `パチスロ 大海物語4` を新規登録。

## No.1188 — パチスロ 大海物語4
- path: `docs/real_machine_db/machines/2018-05-07_pachislot-ooumi-monogatari-4.md`
- manufacturer: **三洋物産 / SANYO**
- releaseDateCanonical: **2018-05-07**
- formalModelName: `パチスロ大海物語4KF`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- generation/system: **5.9号機 / A+RT / ノーマル+RT**
- settings: **1 / 2 / 5 / 6**
- 機械割: **98.0 / 100.9 / 103.9 / 108.0%**
- BIG: **1/312.1 / 1/309.1 / 1/304.8 / 1/281.3**
- REG: **1/368.2 / 1/344.9 / 1/321.3 / 1/281.3**
- 合算: **1/168.9 / 1/163.0 / 1/156.4 / 1/140.6**
- 50枚ベースcanonical: **約35.3G/50枚（設定1）**
- BIG: **300枚** / REG: **約100枚**
- RT: **チャンスタイム20G → スペシャル魚群タイム40G**
- 天井: **非搭載**

### resetBehavior v0.7
- 設定変更時: **ラグーンモード / 出目3・4・7 / RT通常**。
- 電源OFF→ON時: **ラグーンモード / 出目3・4・7**。RTは、ボーナス非当選中CZならリプレイ高確率状態を維持したままラグーンへ、その他は基本的に引継ぎ。
- よって表示モードと出目は設定変更・純電断で同じになり、単独では変更確定判別に使えない。
- 据え置きを純電断と分離した本機固有RT状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため天井リセット/短縮は `NOT_APPLICABLE`。
- 朝一専用当選モード、短縮天井、主要当選率上昇などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン率/確定判別は `UNVERIFIED_AFTER_RESEARCH`。

### conflict / missing
- `CONFLICT_BASE_35_3_VS_33_3`: パチマガスロマガ / すろかいは設定1約35.3G/50枚、すろぱちくえすとは33.3G/50枚。平均せず35.3を複数系統一致のcanonicalとし33.3を競合保持。
- RT純増/Gの信頼できる具体値は再探索後も `UNVERIFIED_AFTER_RESEARCH`。後継「with すーぱーそに子」の純増表現は別スペックなので転記しない。
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。

## 2018-05-07群の先行確認
- **登録済み:** `パチスロ 大海物語4` — 三洋物産 / 2018-05-07 / No.1188。
- **次候補:** `パチスロ北斗の拳 修羅の国篇 羅刹ver.` — サミー。グリーンべるとが2018年3月発表・5月上旬納品、PiDEA Xが納品5/6〜、一撃メーカー一覧が導入2018-05-07。No.1189候補。
- **後続候補:** `パチスロ FAIRY TAIL` — 藤商事。HAZUSE、当時イベント資料、複数解析が2018-05-07で一致。No.1190候補。
- 2機処理後、5/7同日全メーカー・別スペック・表記揺れ、および4/24〜5/6境界を最終横断監査して群CLOSE判定する。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- resetBehaviorで推測表現「?」「可能性が高い」「調査中」を確定契約へ昇格しない。
- 5.9号機一般論から本機固有の有利区間リセット契約を推定転記しない。
- 別スペック（例: 大海物語4 with すーぱーそに子）の値を先行機へ転記しない。
- `INDEX.md` は旧スナップショット。次回も `LATEST_HANDOFF.md` + main実レコードを優先する。
- 既存性能値を無駄にやり直さず、新規未処理機種とresetBehaviorの必要箇所のみ進める。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_ooedo-manyuuki.md**（大江戸漫遊記）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_shinzo-ningen-casshern.md`（新造人間キャシャーン）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は新規本線No.1188を優先し、retro cursorは変更なし。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1188を再取得。
2. **1188件 / chronologicalFrontier 2018-05-07 / 5/7群OPEN** を正本として継続。
3. `パチスロ北斗の拳 修羅の国篇 羅刹ver.` の重複確認 → 未登録ならNo.1189としてperformance core + resetBehavior v0.7を収集。
4. `パチスロ FAIRY TAIL` → 未登録ならNo.1190候補。
5. 5/7同日全メーカー・別スペック・表記揺れ + 4/24〜5/6境界を横断監査して群CLOSE判定。
6. 遡及QAは `2006-07_shinzo-ningen-casshern.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1188 パチスロ 大海物語4
- SANYO公式: https://www.sanyobussan.co.jp/products/slot_ooumi4/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000557/
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/10018/greenbelt
- K-Navi: https://p-kn.com/slot/2986/
- パチビー: https://www.pachibee.jp/machines/index/218030001
- 一撃: https://1geki.jp/slot/s_ooumi4/
- 一撃 設定変更/電源ON-OFF: https://1geki.jp/slot/s_ooumi4/3/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/33/c-2.php
- すろかい: https://slotkaiseki.hatenablog.com/entry/ooumi
- すろぱちくえすと: https://www.slopachi-quest.com/article/slot-ooumimonogatari4/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/8622

### 5/7後続候補
- グリーンべると 北斗羅刹: https://news.p-world.co.jp/articles/9992/greenbelt
- PiDEA X 北斗羅刹: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E5%8C%97%E6%96%97%E3%81%AE%E6%8B%B3%20%E4%BF%AE%E7%BE%85%E3%81%AE%E5%9B%BD%E7%AF%87%20%E7%BE%85%E5%88%B9Ver%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- HAZUSE FAIRY TAIL: https://hazuse.com/machine/pachislot/7S1186/
- P-WORLD / グリーンべると FAIRY TAIL: https://news.p-world.co.jp/articles/10026/greenbelt
