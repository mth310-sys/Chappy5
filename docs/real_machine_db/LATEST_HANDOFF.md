更新日: 2026-09-14

## 現在地点
- recordCount: **1675**
- latestRecordAdded: **パチスロハイパーラッシュ — No.1675**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-09-17_hyper-rush.md`
- chronologicalFrontier: **2024-09-17**
- schema: **resetBehavior v0.7**
- status: **2024-09-17_BOUNDARY_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1674を確認。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- 直前handoff指定のNo.1675候補 `パチスロハイパーラッシュ` を性能コア + resetBehavior v0.7で登録。
- 山佐ネクスト公式、遊技通信/P-WORLD、娯楽産業、HAZUSE、パチマガスロマガ、必勝本、なな徹、一撃、ちょんぼりすた、Ativo、検定通過資料を横断。
- 型式 `SハイパーラッシュSLC8`、検定番号 `430212`、セブンリーグ製造/山佐ネクスト、2024-09-17導入を照合。
- 設定1〜6の通常機械割98.9/99.9/102.0/104.0/105.9/108.1%、完全攻略100.5/101.5/103.7/106.2/108.6/111.0%、BIG 1/259.3→1/216.5、REG 1/527.3→1/430.5、合算1/173.8→1/144.0、約34G/50枚、SIDE-A約7.2枚/G、SIDE-B約2.5枚/Gを複数資料で照合。
- ハイパーBIG平均約350枚、チャレンジBIG平均約230枚。REGは導入時主要資料平均約50枚をcanonicalとし、一撃後年ページの平均75枚はCONFLICT保持。
- 天井は専用天井ページ・パチマガスロマガ・一撃・ちょんぼりすた等で非搭載。必勝本の基本スペック概要欄だけ「搭載」とするためCONFLICT_CEILING_SUMMARY_FIELDとして保持し、canonicalは非搭載。
- 設定変更時/純電源OFF→ON時はユーザー選択式の演出モードがオリジナルへ戻る。天井・規定G・スルー天井は非搭載のためリセット/引継ぎはNOT_APPLICABLE。
- 設定変更/据え置き/純電断時の内部状態・有利区間、本機固有ガックン/有利区間ランプ判別は検索語・資料系統変更後も固定できずUNVERIFIED_AFTER_RESEARCH。
- 朝一専用モード振り分け、朝一当選率優遇、短縮天井、CZ優遇などの公開朝一数値は確認できず。出玉上の朝一恩恵はNONE_CONFIRMED_AFTER_RESEARCH。
- 2024年9月導入一覧を再監査し、9/17パチスロ群は本機1機で一致したため2024-09-17境界を1/1 CLOSED。

## No.1675 — パチスロハイパーラッシュ
- path: `docs/real_machine_db/machines/2024-09-17_hyper-rush.md`
- manufacturer: **セブンリーグ製造 / 山佐ネクスト**
- formalModel: **SハイパーラッシュSLC8**
- inspectionCode: **430212**
- releaseDate: **2024-09-17**
- generation: **6.5号機 / メダル機**
- systemType: **AT / 復刻系擬似ノーマル（擬似ボーナス + SIDE-B） / 技術介入**
- payoutRate: **98.9 / 99.9 / 102.0 / 104.0 / 105.9 / 108.1%**
- completeStrategyPayout: **100.5 / 101.5 / 103.7 / 106.2 / 108.6 / 111.0%**
- BIG: **1/259.3 / 1/254.1 / 1/243.6 / 1/233.9 / 1/225.7 / 1/216.5**
- REG: **1/527.3 / 1/511.8 / 1/489.0 / 1/468.6 / 1/450.1 / 1/430.5**
- bonusTotal: **1/173.8 / 1/169.8 / 1/162.6 / 1/156.0 / 1/150.3 / 1/144.0**
- base: **約34G/50枚（設定1）**
- netIncrease: **SIDE-A約7.2枚/G / SIDE-B約2.5枚/G**
- basic: **ハイパーBIG平均約350枚 / チャレンジBIG平均約230枚 / REG canonical平均約50枚 / SIDE-B 30G+α**
- ceiling: **非搭載（必勝本概要欄のみ「搭載」のCONFLICTあり）**
- reset: **天井関連NOT_APPLICABLE。演出モードはオリジナルへ。内部状態/有利区間UNVERIFIED。**
- carryOver: **天井/規定G/スルー天井NOT_APPLICABLE。内部状態/有利区間UNVERIFIED。**
- powerCycle: **演出モードはオリジナルへ。内部状態/有利区間UNVERIFIED。**
- morning benefit: **出玉上の専用恩恵NONE_CONFIRMED_AFTER_RESEARCH。**
- public morning numeric: **短縮天井NOT_APPLICABLE、専用モード振り分け/朝一当選率/恩恵率/ガックン率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- detection: **演出モードは設定変更/電断双方でオリジナルになるため判別不可。ガックン・有利区間ランプ判別UNVERIFIED。**
- conflicts: **天井概要欄「搭載」vs専用ページ/複数資料「非搭載」 / REG平均50枚vs後年一撃75枚。平均化せず保持。**

## 2024-09-17境界 — CLOSED 1/1
1. パチスロハイパーラッシュ — No.1675 DONE

## 次回再開地点
- 最新mainを再同期しNo.1675と本handoffを確認。
- **No.1676候補 `スマスロ 鬼武者3` — 2024-10-07** から性能コア + resetBehavior v0.7を収集。
- 2024-10-07群は少なくとも `スマスロ 鬼武者3` / `スマスロ頭文字D 2nd` / `今日から俺は!! パチスロ編` / `L 真・一騎当千` が同日候補。`トリプルクラウンフォーユー` は10月導入資料があるが日付を次回境界監査で再確認し、PB・25/30Φ・別型式・地域先行・延期/段階導入も併せて監査する。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1675 ハイパーラッシュ
- 山佐ネクスト公式: https://www1.yamasa.co.jp/nwhpr/
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/28823/yugitsushin
- 娯楽産業: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%83%8D%E3%82%AF%E3%82%B9%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%A9%E3%83%83%E3%82%B7/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0084/
- Ativo: https://ativo.jp/2024/09/06/%EF%BD%93%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/08/kh01.php
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2643/2
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/84547/
- なな徹: https://nana-press.com/kaiseki/machine/796/
- 一撃: https://1geki.jp/slot/s_hyper_rush/
- 一撃 REG: https://1geki.jp/slot/s_hyper_rush/85/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/217159/

### 境界監査
- ALL7 2024年9月導入一覧: https://www.all7.jp/plans/index/2024/09
- グリーンべると 2024年10月新台スケジュール: https://news.p-world.co.jp/articles/29118/greenbelt
- K-Navi 2024年10月導入カレンダー: https://p-kn.com/calendar/202410/
