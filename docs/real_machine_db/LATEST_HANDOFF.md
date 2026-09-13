更新日: 2026-09-14

## 現在地点
- recordCount: **1629**
- latestRecordAdded: **スマスロキングパルサー — No.1629**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-03-04_smart-king-pulsar.md`
- chronologicalFrontier: **2024-03-04**
- frontierLatestMachine: **スマスロキングパルサー — No.1629**
- schema: **resetBehavior v0.7**
- status: **2024-03-04_GROUP_OPEN_1_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1628 `ワードオブライツⅡ` を確認して開始。
- INDEXは旧版表示のためREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- 2024-02-05群が8/8 CLOSEDであることを再取得確認。
- 2024-03-04群を複数系統で再監査し、`スマスロキングパルサー / L南国育ち / キングクリエーター-30 / チバリヨ2 / パチスロ ガメラ2` の5機をcanonical候補として維持。
- No.1629 `スマスロキングパルサー` を性能コア + resetBehavior v0.7で追加。

## No.1629 — スマスロキングパルサー
- path: `docs/real_machine_db/machines/2024-03-04_smart-king-pulsar.md`
- manufacturer: **セブンリーグ（山佐ネクスト）**
- formalModel: **LキングパルサーSLCC**
- inspectionCode: **3S1231**
- releaseDate: **2024-03-04**
- generation: **6.5号機 / スマスロ**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- 機械割（1/2/4/5/6）: **97.7 / 98.6 / 105.5 / 110.3 / 114.9%**
- BIG: **1/257.6 / 1/251.4 / 1/210.0 / 1/191.8 / 1/173.6**
- REG: **1/387.8 / 1/378.4 / 1/324.2 / 1/298.8 / 1/274.9**
- 合算: **1/154.8 / 1/151.0 / 1/127.4 / 1/116.8 / 1/106.4**
- base: **約32.6～32.9G/50枚**
- 疑似ボーナス純増: **約5.0枚/G**
- BIG平均約307枚 / REG平均約105枚

### No.1629 resetBehavior v0.7
- setting change: **有利区間・天井進行RESET。通常960G→最大512Gへ短縮。規定Gは設定変更専用テーブル参照。CZレベル再抽選。**
- stock on setting change: **当時必勝本でも調査中。再探索後も消去/維持/再抽選を固定できずUNVERIFIED_AFTER_RESEARCH。**
- carry over / power OFF→ON: **天井進行・ストック・CZレベルCARRY_OVER。サブ液晶はホタルなし画面。**
- mode: **設定変更専用規定Gテーブルの存在は確認。各規定G振り分け率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- advantageous section: **設定変更時RESET。据え置き/純電断はCARRY_OVER。通常稼働中の有利区間リセット恩恵は「設定変更時以外」と明記されるため朝一へ流用しない。**
- morning benefit: **最大天井512G。実戦データでは128G以内当選率上昇傾向があるが固定抽選値ではないためOBSERVATIONAL_ONLY。**
- reset detection: **朝一512G超でボーナス非当選なら据え置き濃厚材料。設定変更/電断ともサブ液晶ホタルなし。泡占いは据え置きでも朝一0Gから128Gごとに出現。ガックン条件/発生率はUNVERIFIED_AFTER_RESEARCH。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_STOCK_AND_GACKUN**

## 2024-03-04群 — OPEN 1/5 canonical
1. スマスロキングパルサー — No.1629 DONE
2. L南国育ち — No.1630 NEXT
3. キングクリエーター-30 — PENDING
4. チバリヨ2 — PENDING
5. パチスロ ガメラ2 — PENDING

境界監査メモ:
- 2024-03-04群は複数新台カレンダー/機種DBで上記5機を確認。グリーンべるとの当日一覧は一部機種のみのため、それ単独で群件数を固定しない。
- `パチスロ ブラックミクちゃん` はHAZUSE上2024-03-09の別境界候補として保持し、3/4群へ混入させない。

## 次回再開地点
1. 最新mainを再同期し、No.1629と本handoffの反映を再取得確認。
2. **No.1630候補 `L南国育ち` — 2024-03-04** を性能コア + resetBehavior v0.7で処理する。
3. その後 `キングクリエーター-30 → チバリヨ2 → パチスロ ガメラ2` の順で処理し、5機完了後にPB・別型式・地域先行・延期/段階導入を再監査して2024-03-04群をCLOSED判定する。
4. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
### スマスロキングパルサー
- Amusement Japan（山佐ネクスト発表）: https://amusement-japan.co.jp/article/detail/10004062/
- グリーンべると（山形県公安委員会検定通過）: https://web-greenbelt.jp/post-78757/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1231/
- P-WORLD: https://www.p-world.co.jp/machine/database/9985
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/82899/
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2599/2
- なな徹 TOP: https://nana-press.com/kaiseki/machine/705/
- なな徹 規定G/天井: https://nana-press.com/kaiseki/machine/705/19700/ / https://nana-press.com/kaiseki/machine/705/19694/
- なな徹 CZレベル: https://nana-press.com/kaiseki/machine/705/19699/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/705/19697/
- なな徹 泡占い/演出: https://nana-press.com/kaiseki/machine/705/19705/
- パチマガスロマガ 規定Gテーブル: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/05/tj04.php
- イチカツ（実戦データ補助）: https://ichikatsu.com/lkngpls/
- ぽこすろっと（後年整理補助）: https://www.nankaikoya.jp/kingpulsar-kitaichi/

### 直前群 / 次群監査継続用
- 2024-02-05群はNo.1621～1628の8/8 CLOSED。
- 次回は2024-03-04群No.1630 `L南国育ち` から継続。
