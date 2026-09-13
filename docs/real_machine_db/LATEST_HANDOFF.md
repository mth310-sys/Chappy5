更新日: 2026-09-13

## 現在地点
- recordCount: **1595**
- latestRecordAdded: **スーハナライジング-30 — No.1595**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-10-02_suhana-rising-30.md`
- chronologicalFrontier: **2023-10-02**
- frontierLatestMachine: **スーハナライジング-30 — No.1595**
- schema: **resetBehavior v0.7**
- status: **2023-10-02_GROUP_OPEN_3_OF_4_CANONICAL_PROCESSED / NEXT_NO1596_CANDIDATE_MOECHIBA30_2023-10-02**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1594 `スマスロ転生したらスライムだった件` を確認して開始。
- INDEXは旧表示（19件）のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- No.1595 `スーハナライジング-30` を性能コア + resetBehavior v0.7で追加。
- 2023-10-02群はcanonical 4機のうち3/4まで処理。
- 型式 / 検定番号は大阪府公安委員会公示系G-netで確認し、型式は遊技日本/P-WORLD・ゼンリンでも照合。

## No.1595 — スーハナライジング-30
- path: `docs/real_machine_db/machines/2023-10-02_suhana-rising-30.md`
- manufacturer: **パイオニア**
- formalModel / inspectionCode: **SスーハナライジングPC-30 / 3S0572**
- releaseDate: **2023-10-02**
- generation/system: **6.5号機 / 30ΦメダルAT / 完全告知・モード管理型擬似ボーナス**
- settings: **L / 1 / 2 / 3 / 5 / 6（設定4非搭載）**
- payoutRate 設定1/2/3/5/6: **97.8 / 99.6 / 102.1 / 105.3 / 108.2%**。設定Lは公開固定値を確認できず。
- 初当り 設定1/2/3/5/6: **1/216 / 1/211 / 1/202 / 1/190 / 1/180**。
- BIG 設定1/2/3/5/6: **1/158 / 1/152 / 1/143 / 1/132 / 1/123**。
- REG 設定1/2/3/5/6: **1/213 / 1/209 / 1/202 / 1/193 / 1/185**。
- base: **約30.0G/50枚**。
- netIncrease: **約3.3枚/G（詳細掲載3.34枚/G）**。
- basic: **BIG 60G・約200枚 / REG 20G・約67枚**。
- normal ceilings: **通常A 約400G / 通常B 約400G / チャンス 約200G / 天国準備 約400G / 天国各種32G**。
- 天国スルー: **4スルー後、5回目のボーナス後は天国以上濃厚**。
- reset: 設定変更で **有利区間 / 天井 / モードRESET**、内部状態もRESETとする朝一比較資料あり。
- carry: 据え置きは **有利区間 / 天井 / モードCARRY_OVER**。内部状態もCARRY_OVER資料あり。
- pure power: **天井 / 有利区間 / 内部状態CARRY_OVER**を確認。通常モードと天国スルー進行を純電断単独で明記した複数高信頼資料は `UNVERIFIED_AFTER_RESEARCH`。
- reset public number: **設定変更時 約72%で通常B以上**。通常Bはボーナス後の天国移行期待度約50%。
- reset ceiling: 設定変更専用固定短縮は確認されず。優遇は主にモード再抽選側。
- resetDetection: なな徹では判別「調査中」。**有利区間ランプでは変更/据え置き判別不可**。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- wording conflict: 一部二次資料は「約72%で通常B」と表記するが、高信頼解析は **「通常B以上 約72%」**。canonicalは後者、`CONFLICT_SOURCE_WORDING_NORMAL_B_VS_NORMAL_B_OR_HIGHER` として保持。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**
- record commit: **1e4927280844f65c128f6a22da7133de98269663**

## 2023-10-02群 — OPEN 3/4 canonical
1. L エヴァンゲリオン ～未来への創造～ — No.1593 **DONE**
2. スマスロ転生したらスライムだった件 — No.1594 **DONE**
3. スーハナライジング-30 — No.1595 **DONE**
4. 燃えチバ-30 — No.1596候補 **NEXT**

### 群境界監査メモ
- 前回監査で、グリーンべると / P-WORLD新台スケジュールと別系統2023年導入一覧を照合し、10/2 canonical 4機を確認済み。
- G-net検定公示で `SスーハナライジングPC-30`（3S0572）と `S燃えチバGNC-30`（330194）を再確認。
- `燃えチバ-30` 処理後、PB・別型式・30Φ派生・地域先行・延期/段階導入を再監査し、2023-10-02群のCLOSED判定を行う。

## 次回再開地点
1. **No.1596候補 `燃えチバ-30`（2023-10-02）**を最優先で性能コア + resetBehavior v0.7で処理。
2. その後、2023-10-02群のPB・別型式・30Φ派生・地域先行・延期/段階導入を再監査してCLOSED判定。
3. CLOSED後は次の実導入日群へ時系列で進む。
4. 以前から保持している `推しスロ アイドルVer.` は **2023-12-01実導入候補**として保持し、12月到達時に正式型式・実導入日を再確認する。

## 今回参照した主要ソース
取得日: 2026-09-13
- G-net 大阪府公安委員会検定通過情報: https://g-net-ps.com/industry/certif-2023-0721/
- 遊技日本 / P-WORLD 新台発表: https://news.p-world.co.jp/articles/25240/nippon
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/24726/nippon
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/24853/greenbelt
- ゼンリン アミューズメント事業部: https://zenrin-net.co.jp/8932/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/612/17085/
- なな徹 ボーナス確率・機械割: https://nana-press.com/kaiseki/machine/612/16140/
- なな徹 モード解析: https://nana-press.com/kaiseki/machine/612/17087/
- パチマガスロマガ / 必勝本系 基本スペック: https://p.hisshobon.jp/vpage/2560/2
- パチマガスロマガ / 必勝本系 システム: https://p.hisshobon.jp/vpage/2560/4
- パチビー: https://www.pachibee.jp/machines/about/223080005
- 一撃 ベース: https://1geki.jp/slot/s_suhana_rising30/4/
- クオぱち 朝一比較: https://www.pachinkoquora.com/pachinko-square/column/1534/
- イチカツ 電源OFF→ON補助照合: https://ichikatsu.com/superhana-rising/

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
