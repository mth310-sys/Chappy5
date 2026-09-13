更新日: 2026-09-13

## 現在地点
- recordCount: **1594**
- latestRecordAdded: **スマスロ転生したらスライムだった件 — No.1594**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-10-02_smaslot-tensei-shitara-slime-datta-ken.md`
- chronologicalFrontier: **2023-10-02**
- frontierLatestMachine: **スマスロ転生したらスライムだった件 — No.1594**
- schema: **resetBehavior v0.7**
- status: **2023-10-02_GROUP_OPEN_2_OF_4_CANONICAL_PROCESSED / NEXT_NO1595_CANDIDATE_SUHANA_RISING30_2023-10-02 / THEN_MOECHIBA30**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1593 `L エヴァンゲリオン ～未来への創造～` を確認して開始。
- INDEXは旧表示（19件）のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- No.1594 `スマスロ転生したらスライムだった件` を性能コア + resetBehavior v0.7で追加。
- 2023-10-02群は前回監査でcanonical 4機を確認済み。今回は2/4まで処理。
- 型式 / 検定番号は大阪府公安委員会公示系G-netと東京都公安委員会公示系遊技通信で照合。

## No.1594 — スマスロ転生したらスライムだった件
- path: `docs/real_machine_db/machines/2023-10-02_smaslot-tensei-shitara-slime-datta-ken.md`
- manufacturer: **山佐（製造） / 山佐ネクスト（販売・市場表記）**
- formalModel / inspectionCode: **Lパチスロ転生したらスライムだった件CD / 3S0494**
- releaseDate: **2023-10-02**
- generation/system: **6.5号機 / スマスロAT**
- settings: **L / 1 / 2 / 4 / 5 / 6（設定3非搭載）**
- payoutRate 設定1/2/4/5/6: **97.9 / 99.4 / 105.0 / 109.1 / 113.0%**。設定Lは公開固定値を確認できず。
- AT初当り 設定1/2/4/5/6: **1/369.8 / 1/354.7 / 1/295.5 / 1/261.6 / 1/245.2**。
- base: **約36G/50枚**。
- netIncrease: **約2.5枚/G**。
- AT basic: **1セット40G+α**。
- normal ceilings: **通常A 1200pt+α / 通常B・C 1000pt+α / 天国100pt+α**、別軸で **AT間1000G**。
- reset: 設定変更で **有利区間 / 天井 / 内部状態 / モード / 転スラポイントRESET**。
- carry: 据え置きは上記を **CARRY_OVER**。モンスターランクと転生チャンス発動済み条件も引継ぎ資料あり。
- pure power: **AT間天井G数 / 内部状態 / 有利区間CARRY_OVER**。液晶上はモンスターランクを隠し、初回ATで内部ランク表示。転スラpt / 通常モード / 発動済みフラグの純電断単独契約は **UNVERIFIED_AFTER_RESEARCH**。
- reset ceiling: 設定変更専用固定短縮は確認されず。AT間1000G天井は0Gから再開。
- public morning number: 設定変更後1回目の転生チャンス **約1/799**（通常 / 発動後 **約1/2048**）。
- mode reset public numbers（通常A / 通常B / 通常C・天国）:
  - 設定1 **33.2 / 33.2 / 33.6%**
  - 設定2 **32.8 / 32.8 / 34.4%**
  - 設定4 **30.9 / 30.9 / 38.2%**
  - 設定5 **27.3 / 27.3 / 45.4%**
  - 設定6 **26.6 / 26.6 / 46.8%**
- resetDetection: 前日把握ランクと当日初回ATランク不一致は変更の強い材料。転生チャンス初回発生率の差も推測材料。本機固有ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**
- record commit: **f3daeb12f2f7e153196ebb13701eb1099bb75ded**

## 2023-10-02群 — OPEN 2/4 canonical
1. L エヴァンゲリオン ～未来への創造～ — No.1593 **DONE**
2. スマスロ転生したらスライムだった件 — No.1594 **DONE**
3. スーハナライジング-30 — No.1595候補 **NEXT**
4. 燃えチバ-30 — 後続

### 群境界監査メモ
- 前回、グリーンべると / P-WORLD「パチンコ・パチスロ新台スケジュール 10月2日更新」と別系統2023年導入一覧を照合し、10/2 canonical 4機を確認済み。
- 今回の検定公示再探索でも `SスーハナライジングPC-30` と `S燃えチバGNC-30` の型式を確認。
- 10/2群を4機処理後、PB・別型式・30Φ派生・地域先行・延期/段階導入を改めて再監査してCLOSED判定する。

## 次回再開地点
1. **No.1595候補 `スーハナライジング-30`（2023-10-02）**を最優先で処理。
2. その後 `燃えチバ-30` を性能コア + resetBehavior v0.7で処理。
3. 10/2群完了時にPB・別型式・30Φ派生・地域先行・延期/段階導入を再監査しCLOSED判定。
4. 以前から保持している `推しスロ アイドルVer.` は **2023-12-01実導入候補**として保持し、12月到達時に正式型式・実導入日を再確認する。

## 今回参照した主要ソース
取得日: 2026-09-13
- 遊技日本 / P-WORLD 新台発表: https://news.p-world.co.jp/articles/25028/nippon
- 遊技日本 検定通過: https://news.p-world.co.jp/articles/24726/nippon
- G-net 大阪府公安委員会検定通過情報: https://g-net-ps.com/industry/certif-2023-0721/
- 遊技通信 東京都公安委員会検定通過まとめ: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E7%8A%B6%E6%B3%81%E3%80%802023%E5%B9%B47%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81/
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/606/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/606/16881/
- 一撃 天井・設定変更: https://1geki.jp/slot/l_tensura/3/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9879
- ガイドワークス P-Gabu: https://p-gabu.jp/guideworks/machinecontents/detail/6414
- スロベース 電源OFF→ON比較: https://slobase.jp/articles/tensura-reset

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
