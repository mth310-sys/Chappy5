更新日: 2026-09-13

## 現在地点
- recordCount: **1599**
- latestRecordAdded: **パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART — No.1599**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-11-06_eureka-seven-hi-evolution-zero-type-art.md`
- chronologicalFrontier: **2023-11-06**
- frontierLatestMachine: **パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART — No.1599**
- schema: **resetBehavior v0.7**
- status: **2023-11-06_GROUP_OPEN_3_OF_6_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1598 `L大工の源さん 超夢源` を確認して開始。
- INDEXは旧表示（19件）のため、README規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 前handoffの2023-11-06 canonical群を維持し、No.1599 `パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART` を性能コア + resetBehavior v0.7で追加。

## No.1599 — パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART
- path: `docs/real_machine_db/machines/2023-11-06_eureka-seven-hi-evolution-zero-type-art.md`
- manufacturer: **タイヨーエレック製造 / サミー販売**
- formalModel / inspectionCode: **S エウレカセブンHIEVO XS / 330002**
- releaseDate: **2023-11-06**
- generation/system: **6.5号機 / メダルA+ART / リアルボーナス + セットストックART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 市場想定機械割 設定1〜6: **98.1 / 99.0 / 100.3 / 103.6 / 104.8 / 106.4%**
- 完全攻略機械割 設定1〜6: **99.4 / 100.4 / 101.8 / 105.2 / 106.6 / 108.5%**
- ボーナス合算 設定1〜6: **1/195.6 / 1/192.8 / 1/190.5 / 1/186.7 / 1/185.7 / 1/183.1**
- ART初当り 設定1〜6: **1/270.4 / 1/255.7 / 1/239.3 / 1/210.7 / 1/201.2 / 1/188.7**
- ボーナス+ART初当り合算: **1/159.7 → 1/133.2**
- base canonical: **約35.8G/50枚**。後年単一DBの34.0GはCONFLICT_LATE_DATABASE。
- ART純増: **約1.0枚/G**、1セット50G。
- basic: **黒BAR/赤7 BIG約220枚、白7 BIG約170枚、REG約35枚**。HI-EVO MODE平均ストック約5.3セット。
- ceiling: **非搭載**。一部基本スペックページの「搭載」表記は同媒体専用ページ・複数解析と矛盾するためCONFLICT_SOURCE_METADATA。
- reset: 設定変更で **有利区間 / 内部状態RESET、RT状態RT0へ**。朝一談話室。
- carry: 据え置きで **有利区間 / 内部状態CARRY_OVER**。
- pure power: **内部状態 / RT状態CARRY_OVER、表示ステージは談話室**。純電断単独の有利区間明記はUNVERIFIED_AFTER_RESEARCH。
- reset public numeric: 有利区間リセット/設定変更時の高確移行率 **設定1 39.8% / 2 42.2% / 3 43.0% / 4 44.9% / 5 46.9% / 6 50.0%**。
- reset detection: 当日1回目BIG終了画面の **HI-EVOレントン=設定変更濃厚、HI-EVO全員集合=設定変更濃厚+設定3以上濃厚**。開始ステージ単独では判別不可。
- machine-specific gakkun: **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**
- record commit: **05ff19e6089df7868896795293b7bded5638132a**

## 2023-11-06群 — OPEN 3/6 canonical
1. まどマギf-フォルテ- — No.1597 **DONE**
2. L大工の源さん 超夢源 — No.1598 **DONE**
3. パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART — No.1599 **DONE**
4. デジスロ JAC IN バージョン — **NEXT / No.1600候補**
5. スマスロとある魔術の禁書目録 — PENDING
6. L ひぐらしのなく頃に 業 — PENDING

## 次回再開地点
1. **No.1600候補 `デジスロ JAC IN バージョン` — 2023-11-06** を最優先で処理。
2. その後 `スマスロとある魔術の禁書目録` → `L ひぐらしのなく頃に 業` の順に継続。
3. 6機完了後、PB / 別型式 / 地域先行 / 延期・段階導入を再監査して2023-11-06群をCLOSED判定する。
4. `推しスロ アイドルVer.` は2023-12-01実導入候補として保持し、12月到達時に再確認する。

## 今回参照した主要ソース
取得日: 2026-09-13
- 発売発表・製造元・型式・性能: https://news.p-world.co.jp/articles/25220/nippon
- サミー発売発表記事: https://news.p-world.co.jp/articles/25130/nippon
- HAZUSE 型式・検定番号: https://hazuse.com/machine/pachislot/SX0052/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/207/kh01.php
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/634/17391/
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4160/1/97370
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/196161/
- パチビー: https://www.pachibee.jp/machines/index/223100004
- 検定通過記事: https://ativo.jp/2023/07/18/%E3%83%BBs-%E3%82%A8%E3%82%A6%E3%83%AC%E3%82%AB%E3%82%BB%E3%83%96%E3%83%B3hievo-xs-%E3%81%8C%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E3%80%802023-7-18/

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
