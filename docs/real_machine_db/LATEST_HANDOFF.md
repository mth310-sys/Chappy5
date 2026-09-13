更新日: 2026-09-13

## 現在地点
- recordCount: **1600**
- latestRecordAdded: **デジスロ JAC IN バージョン — No.1600**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-11-06_digislo-jac-in-version.md`
- chronologicalFrontier: **2023-11-06**
- frontierLatestMachine: **デジスロ JAC IN バージョン — No.1600**
- schema: **resetBehavior v0.7**
- status: **2023-11-06_GROUP_OPEN_4_OF_6_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1599 `パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART` を確認して開始。
- INDEXは旧表示（19件）のため、README規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 前handoffの2023-11-06 canonical群を維持し、No.1600 `デジスロ JAC IN バージョン` を性能コア + resetBehavior v0.7で追加。

## No.1600 — デジスロ JAC IN バージョン
- path: `docs/real_machine_db/machines/2023-11-06_digislo-jac-in-version.md`
- manufacturer: **ベルコ**
- formalModel / inspectionCode: **SデジスロジャックGB1 / 3S0649**
- releaseDate: **2023-11-06**
- generation/system: **6.5号機 / メダルAT / 疑似ボーナス主体**
- settings: **L / 1 / 2 / 3 / 4 / 6**
- 機械割 設定1/2/3/4/6: **98.0 / 99.6 / 101.5 / 104.1 / 106.6%**
- BIG 設定1/2/3/4/6: **1/386.1 / 1/367.8 / 1/348.7 / 1/324.9 / 1/304.0**
- REG 設定1/2/3/4/6: **1/388.9 / 1/373.5 / 1/356.9 / 1/335.3 / 1/316.2**
- ボーナス合算: **1/193.7 → 1/155.0**
- base: **約37G/50枚**
- 純増: **約5.8枚/G**
- BIG: **平均約360枚**、20G+JACゲーム、JAC IN約1/7.3、4回ごとEX+10G。
- REG: **平均約100枚**。
- ceiling: **非搭載**。
- reset: 設定変更でコンプリート機能打ち止め状態解除は確認。通常内部状態、小役連状態、有利区間の機種固有契約は再探索後も公開固定値なし。
- carry / pure power: 天井非搭載のため宵越し天井はN/A。内部状態・有利区間・小役連続状態の機種固有引継ぎ契約は UNVERIFIED_AFTER_RESEARCH。
- reset public numeric: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**。短縮天井はN/A。
- reset detection: 設定Lはデモ中下パネル点滅で判別可能だが、設定変更/据え置き判別ではない。本機固有ガックン等は UNVERIFIED_AFTER_RESEARCH。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS_WITH_UNVERIFIED_GAPS**
- record commit: **17823b335cee35f31eae579924a8eecb05f0d1f0**

## 2023-11-06群 — OPEN 4/6 canonical
1. まどマギf-フォルテ- — No.1597 **DONE**
2. L大工の源さん 超夢源 — No.1598 **DONE**
3. パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART — No.1599 **DONE**
4. デジスロ JAC IN バージョン — No.1600 **DONE**
5. スマスロとある魔術の禁書目録 — **NEXT / No.1601候補**
6. L ひぐらしのなく頃に 業 — PENDING

## 次回再開地点
1. **No.1601候補 `スマスロとある魔術の禁書目録` — 2023-11-06** を最優先で処理。
2. その後 `L ひぐらしのなく頃に 業` を処理。
3. 6機完了後、PB / 別型式 / 地域先行 / 延期・段階導入を再監査して2023-11-06群をCLOSED判定する。
4. `推しスロ アイドルVer.` は2023-12-01実導入候補として保持し、12月到達時に再確認する。

## 今回参照した主要ソース
取得日: 2026-09-13
- ベルコ公式製品: https://www.s-bellco.co.jp/products/slot/digislojac/
- ベルコ公式発売リリース: https://www.s-bellco.co.jp/news/20230908_01/
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/25412/nippon
- 遊技通信/P-WORLD 検定: https://news.p-world.co.jp/articles/25162/yugitsushin
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9905
- なな徹: https://nana-press.com/kaiseki/machine/643/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/199675/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/111/kh01.php
- 必勝本: https://p.hisshobon.jp/vpage/2568/4
- 一撃: https://1geki.jp/slot/s_digislo_jacin/39/

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
