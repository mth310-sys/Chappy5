更新日: 2026-09-15

## 現在地点
- recordCount: **1781**
- latestRecordAdded: **スマスロ ゴブリンスレイヤーⅡ — No.1781**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-02-02_smartslot-goblin-slayer-2.md`
- chronologicalFrontier: **2026-02-02**
- schema: **resetBehavior v0.7**
- status: **2026-02-02_BOUNDARY_CLOSED_6_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1779を再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1780 `スマスロ ハナビ` を追加。
- No.1781 `スマスロ ゴブリンスレイヤーⅡ` を追加。
- 2026-02-02群は6/6 canonical処理済み。P-Summaの2026年2月導入後月間整理でも2月のスロット新台6機がすべて2月2日導入として一致するため境界をCLOSED。
- PB・別型式・地域先行・延期/段階導入を再監査。旧予定資料に2月10日として残る `スマスロ サンダーV` / `スマスロ 甲鉄城のカバネリ 海門決戦` は、導入後のHAZUSE・パチビー・主要解析でいずれも2026-03-02導入が確認されるため2月群へ混入しない。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は未解決のまま性能コア本線と分離し、推測更新は行っていない。

## No.1780 — スマスロ ハナビ
- path: `docs/real_machine_db/machines/2026-02-02_smartslot-hanabi.md`
- manufacturer: **アクロス / ユニバーサルエンターテインメント**
- formalModel: **L／ハナビ／KM**
- inspectionCode: **530543**
- releaseDate: **2026-02-02**
- settings: **1 / 2 / 5 / 6**
- payoutRate market estimate: **98.6 / 100.4 / 103.0 / 106.4%**
- payoutRate complete strategy: **100.2 / 102.0 / 104.6 / 108.0%**
- BIG: **1/297.9 / 1/292.6 / 1/284.9 / 1/273.1**
- REG: **1/394.8 / 1/358.1 / 1/313.6 / 1/282.5**
- combined: **1/169.8 / 1/161.0 / 1/149.3 / 1/138.8**
- base: **約42.3G/50枚（設定1）**
- BIG最大239枚 / REG最大96枚
- RT純増: 花火チャレンジ約0.2枚/G、花火ゲーム約0.4枚/G
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1780 resetBehavior v0.7
- 天井非搭載。ゲーム数天井短縮、朝一専用モード、CZ/ATリセット優遇は `NOT_APPLICABLE`。
- 機種固有比較で、**設定変更時はRT状態が通常状態へ戻り、純電源OFF→ONではRT状態を引き継ぐ**ことを確認。
- 前日RT中なら設定変更でRTを失うことが朝一差分。
- スマスロ規格上の有利区間について、設定変更/据え置き/純電断を本機固有に三者比較した高優先資料は再探索後も固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率も型式・メーカー・シリーズ名を含め再探索後 `UNVERIFIED_AFTER_RESEARCH`。

## No.1781 — スマスロ ゴブリンスレイヤーⅡ
- path: `docs/real_machine_db/machines/2026-02-02_smartslot-goblin-slayer-2.md`
- manufacturer: **JFJ / 藤商事**
- formalModel: **LゴブリンスレイヤーII JZ**
- inspectionCode: **530709**
- releaseDate: **2026-02-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.7 / 100.4 / 104.9 / 109.7 / 113.2%**
- CZ: **1/239.3 / 1/232.3 / 1/222.9 / 1/200.4 / 1/187.3 / 1/181.9**
- AT: **1/541.6 / 1/526.4 / 1/506.4 / 1/453.2 / 1/417.8 / 1/402.4**
- base: **約30.6G/50枚**
- netIncrease: **通常AT約2.8枚/G / 上位AT約6.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1781 resetBehavior v0.7
- 設定変更時は有利区間、天井ゲーム数、内部状態、兜ポイント系モードをRESET/再抽選。
- 据え置きは有利区間・天井・内部状態・モード・兜ポイントを引継ぎ。
- 純電源OFF→ONでは天井までのG数、兜ポイント、内部モード等を引き継ぐ機種固有解析を確認。
- 通常天井は600G / 1000G / 1500Gの振り分けで最大1500G。**設定変更時は1500G選択を否定し最大1000Gへ短縮**。
- 設定変更時兜ポイントモード: `通常A 50.0% / 通常B 37.5% / 天国A 12.1% / 天国B 0.4%`、天国合計12.5%。
- 設定変更時内部状態: `通常94.5% / 高確5.1% / 超高確0.4%`。
- 設定変更時は表示0ptでも内部0～5ptを加算して開始。
- 朝一開始ステージは王都/訓練場各50%。据え置きでも表示・ステージが同様に初期化されるため見た目だけでは判別不可。
- 設定変更後100G以内にAT当選すると宿命バトルをストック。
- 朝一1000Gを超えてAT非当選なら設定変更否定の強い材料。
- 本機固有ガックン条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / normalization
- スマスロ ハナビは市場予想機械割と完全攻略機械割を別定義として保持し、混同しない。
- ゴブリンスレイヤーⅡは、一部低品質二次ページに別仕様とみられる数値があるためcanonicalへ混入しない。
- ゴブリンスレイヤーⅡの設定変更後天井について、パチマガスロマガFREE本文に1500Gを含むよう読める記述がある一方、なな徹・パチビー・複数攻略資料は最大1000Gで一致。canonicalは **最大1000G**、前者は `CONFLICT_LIKELY_EDITORIAL_DESCRIPTION_ERROR` として保持。
- ALL7の旧予定ページにサンダーV/カバネリ海門決戦を2026-02-10予定とする記録が残るが、導入後資料では両機とも2026-03-02で一致するため、旧予定日を実導入日へ採用しない。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15

### No.1780 スマスロ ハナビ
- ユニバーサル公式: https://www.universal-777.com/product/slot/hanabi_2026/
- HAZUSE: https://hazuse.com/hd/530543h/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/88918/
- 必勝本 天井・設定変更: https://hisshobon.com/machineinfo/88909/
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/88914/
- パチビー: https://www.pachibee.jp/machines/about/225120002
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/248529/

### No.1781 スマスロ ゴブリンスレイヤーⅡ
- HAZUSE: https://hazuse.com/hd/530709h/
- 遊技通信/P-WORLDニュース: https://news.p-world.co.jp/articles/32690/yugitsushin
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89244/
- 必勝本 CZ抽選: https://hisshobon.com/machineinfo/89193/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1095/34377/
- パチビー 攻略: https://www.pachibee.jp/machines/kouryaku/225120003
- 1geki: https://1geki.jp/slot/l_goblinslayer2/
- P-WORLD: https://www.p-world.co.jp/machine/database/10414
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/jfj/064532.php

### boundary audit
- P-Summa 2026年2月新台整理: https://psumma.jp/pachislo/69018/
- ALL7旧予定ページ（2/10予定値の競合確認）: https://www.all7.jp/plans/index/2026/02/10
- HAZUSE スマスロ サンダーV: https://hazuse.com/hd/5s0895/
- パチビー スマスロ サンダーV: https://www.pachibee.jp/machines/about/225130001
- パチビー カバネリ海門決戦: https://www.pachibee.jp/machines/about/225130002

## 2026-02-02 canonical queue — CLOSED 6/6
1. ~~スマスロ 攻殻機動隊 — No.1776 DONE~~
2. ~~Lパチスロうみねこのなく頃に2 — No.1777 DONE~~
3. ~~Lパチスロ 炎炎ノ消防隊2 — No.1778 DONE~~
4. ~~L範馬刃牙 — No.1779 DONE~~
5. ~~スマスロ ハナビ — No.1780 DONE~~
6. ~~スマスロ ゴブリンスレイヤーⅡ — No.1781 DONE~~

## 次の時系列境界
- 2026年3月の導入後整理ではパチスロ新台は **2機**。
- いずれも2026-03-02導入で複数資料が一致:
  1. **スマスロ 甲鉄城のカバネリ 海門決戦** — candidate No.1782
  2. **スマスロ サンダーV** — candidate No.1783
- P-Summa 2026年3月整理: https://psumma.jp/pachislo/69482/
- 情報島 3/2導入前評価でもこの2機を対象: https://p-johojima.jp/colum/post-27100/
- カバネリ導入後1geki: https://1geki.jp/slot/l_kabaneri2/

## 次回再開地点
- 最新mainを再同期しNo.1780、No.1781、本handoffを確認。
- **No.1782候補「スマスロ 甲鉄城のカバネリ 海門決戦」— 2026-03-02** から継続。
- その後 `スマスロ サンダーV` を同日群として処理。
- 2/2完了後、PB・別型式・地域先行・延期/段階導入を再監査して2026-03-02境界をCLOSED判定。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
