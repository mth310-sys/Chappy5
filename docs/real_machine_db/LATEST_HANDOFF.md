更新日: 2026-09-13

## 現在地点
- recordCount: **1592**
- latestRecordAdded: **戦国コレクション5超極楽LOOP — No.1592**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-09-19_sengoku-collection5-chogokuraku-loop.md`
- chronologicalFrontier: **2023-09-19**
- frontierLatestMachine: **戦国コレクション5超極楽LOOP — No.1592**
- schema: **resetBehavior v0.7**
- status: **2023-09-19_GROUP_CLOSED_2_OF_2_CANONICAL_PROCESSED / NEXT_NO1593_CANDIDATE_L_EVANGELION_MIRAI_ENO_SOZO_2023-10-02 / THEN_2023-10-02_GROUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1591 `麻雀格闘倶楽部 覚醒` を確認して開始。
- INDEXは旧表示（19件）のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- No.1592 `戦国コレクション5超極楽LOOP` を性能コア + resetBehavior v0.7で追加。
- 2023-09-19群は canonical 2機（麻雀格闘倶楽部 覚醒 / 戦国コレクション5超極楽LOOP）を処理完了。
- K-Naviは同日に `推しスロ アイドルVer.` も掲載するが、9/16発表時点では設置予定が「秋ごろ、状況が整い次第」で、実際のタツミ直営専用フロア導入は2023-12-01。9/19 canonical 群には含めず、12/01候補として保持。
- PB・別型式・地域先行・延期/段階導入も再監査し、現時点で9/19へ追加すべき別canonical機は固定できなかったため **2023-09-19_GROUP_CLOSED** とする。

## No.1592 — 戦国コレクション5超極楽LOOP
- path: `docs/real_machine_db/machines/2023-09-19_sengoku-collection5-chogokuraku-loop.md`
- manufacturer: **グレードワン製造 / コナミアミューズメント販売**
- formalModel / inspectionCode: **L戦国コレクション5GJ / 2S1627**
- releaseDate: **2023-09-19**
- generation/system: **6.5号機 / スマスロAT**
- payoutRate 設定1～6: **97.5 / 98.9 / 100.4 / 104.0 / 107.9 / 110.0%**
- AT: **1/346.8 / 1/336.2 / 1/325.9 / 1/307.2 / 1/297.8 / 1/287.1**
- base: **約32.3G/50枚**
- netIncrease: **約10.0枚/G**
- AT basic: **1セット20G+α**、全シナリオ5セット目継続率約95%、上位AT80% or 90%継続（1:1）、業界発表期待枚数約2770枚。
- normal ceiling: モードA最大 **1280コレ** / B **768コレ** / C **384コレ** / 天国・裏天国・超極楽 **128コレ**。
- reset: 設定変更で **有利区間 / 天井コレ / 内部状態 / モードRESET・再抽選**。
- carry: 据え置きは **有利区間 / 天井コレ / 内部状態 / モードCARRY_OVER**。
- pure power: 電源OFF→ONは **天井コレ / モード / 内部状態CARRY_OVER**。純電断単独の有利区間契約は **UNVERIFIED_AFTER_RESEARCH**。
- public morning number: 設定変更後 **モードC + 天国系 約54%**。コナミ公式は **朝一384コレ以内当選が大チャンス** と説明。
- deep-reset benefit: 設定変更後769コレ以上でAT当選時、高期待度or濃厚シナリオ選択率 **設定1 約25% / 設定6 約43%**。設定2～5は PUBLIC_VALUE_NOT_FOUND。
- resetDetection: 有利区間ランプ判別不可。なな徹はリセット判別「現在調査中」。本機固有ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**
- record commit: **5eecebc8eeac68b3697f686865528e558b555c01**

## 2023-09-19群 — CLOSED 2/2 canonical
1. 麻雀格闘倶楽部 覚醒 — No.1591 **DONE**
2. 戦国コレクション5超極楽LOOP — No.1592 **DONE**

### 群境界監査メモ
- K-Navi 2023年9月カレンダーは9/19パチスロに `麻雀格闘倶楽部 覚醒` / `戦国コレクション5超極楽LOOP` / `推しスロ アイドルVer.` を掲載。
- `推しスロ アイドルVer.` は実導入日資料を優先し **2023-12-01候補**として後続キューへ保持。9/19へは入れない。
- コナミ公式は `戦国コレクション5超極楽LOOP` の9/19稼働開始を明記し、業界資料も同日で一致。
- 9/19群について別型式/PB/地域先行/延期機を再探索したが、追加canonical対象は確認できずCLOSED。

## 次回再開地点
1. **No.1593候補 `L エヴァンゲリオン ～未来への創造～`（2023-10-02）**を最優先で処理。
2. 2023-10-02既知canonical候補は少なくとも以下4機。順次、性能コア + resetBehavior v0.7を収集する。
   - `L エヴァンゲリオン ～未来への創造～`（ビスティ製）
   - `スマスロ転生したらスライムだった件`（山佐ネクスト）
   - `スーハナライジング-30`（パイオニア）
   - `燃えチバ-30`（ネット）
3. 10/2群完了時にPB・別型式・30Φ派生・地域先行・延期/段階導入を再監査してCLOSED判定。
4. `推しスロ アイドルVer.` は **2023-12-01実導入候補**として保持し、12月到達時に正式型式・実導入日を再確認する。

## 今回参照した主要ソース
取得日: 2026-09-13
- コナミアミューズメント公式 製品一覧: https://www.konami.com/amusement/psm/ps/
- コナミアミューズメント公式開発情報 2023-09-15: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_25/20230915.html
- コナミアミューズメント公式開発情報 2023-08-04: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20230804.html
- 遊技通信 東京都公安委員会検定通過状況2023年8月: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%812023%E5%B9%B48%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%888%E6%9C%887/
- 遊技日本 / P-WORLD 戦国コレクション5超極楽LOOP: https://news.p-world.co.jp/articles/25093/nippon
- グリーンべると 戦国コレクション5超極楽LOOP: https://news.p-world.co.jp/articles/24872/greenbelt
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9885
- なな徹 スペック: https://nana-press.com/kaiseki/machine/614/16239/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/614/16788/
- 必勝本 基本スペック/天井設定変更: https://p.hisshobon.jp/vpage/2561/2
- パチマガスロマガ 内部モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/23/tj04-1.php
- K-Navi 2023年9月カレンダー: https://p-kn.com/calendar/202309/
- グリーンべると 2023年10月2日新台スケジュール: https://news.p-world.co.jp/articles/25554/greenbelt
- 遊技日本 推しスロ発表: https://news.p-world.co.jp/articles/25404/nippon
- グリーンべると 推しスロ実導入: https://news.p-world.co.jp/articles/26268/greenbelt

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
