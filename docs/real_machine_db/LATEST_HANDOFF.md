更新日: 2026-09-15

## 現在地点
- recordCount: **1811**
- latestRecordAdded: **Lすーぱぁびん娘 — No.1811**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-08-03_l-super-binko.md`
- chronologicalFrontier: **2026-08-03 OPEN**
- schema: **resetBehavior v0.7**
- status: **2026-08-03_GROUP_OPEN_3_OF_8_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1810を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1811 `Lすーぱぁびん娘` を追加。
- ベルコ公式、遊技日本、情報島+、パチビー、P-WORLD、6確、なな徹、ちょんぼりすた、HAZUSE、スロベース、イチカツ等を横断。
- ヤーマ製造（ベルコ販売/ブランド）、型式 `Lびん娘NY1`、検定番号 `5S1500`、2026-08-03導入を固定。
- 設定1/2/4/5/6機械割 `97.3 / 98.9 / 103.3 / 107.2 / 112.5%`、CZ `1/395.7 → 1/391.5`、AT `1/498.7 → 1/392.8`、ベース約31.0G/50枚。
- メインAT純増約2.8枚/G、上位約5.0枚/G、双方1セット100G。上位継続期待度82%OVER（引き戻し含む）。
- 設定L搭載はP-WORLDで確認、デモ中下パネル消灯。設定Lの機械割/初当り公表値は今回固定せず。
- 通常AT間最大1200G→設定変更後900G、CZ周期最大10周期→7周期へ短縮。
- 設定変更時は各娘ポイント30〜90pt加算、平均53pt。
- 据え置き/純電断のゲーム数・周期・娘ポイント・内部状態の直接三者比較、有利区間処理、ガックンは語句・型式・メーカーを変え再探索したが高信頼固定できずUNVERIFIED_AFTER_RESEARCH。一般仕様から補完していない。
- ワンチャンくん検索要約の「周期天井短縮未確認」と、なな徹・スロベース等の10→7周期が競合。導入後複数具体解析一致の7周期をcanonical、前者を低優先更新遅延候補としてCONFLICT保持。

## No.1811 — Lすーぱぁびん娘
- path: `docs/real_machine_db/machines/2026-08-03_l-super-binko.md`
- manufacturer: **ヤーマ（販売/ブランド: ベルコ）**
- formalModel: **Lびん娘NY1**
- inspectionNumber: **5S1500**
- releaseDate: **2026-08-03**
- payoutRate: **97.3 / 98.9 / 103.3 / 107.2 / 112.5%（設定1/2/4/5/6）**
- CZ: **1/395.7 / 1/394.8 / 1/394.1 / 1/392.8 / 1/391.5**
- AT: **1/498.7 / 1/477.8 / 1/447.0 / 1/423.4 / 1/392.8**
- base: **約31.0G/50枚（設定1）**
- netIncrease: **夢娘ライブ約2.8枚/G / クライMAXライブ約5.0枚/G**
- basicPayout: **各AT 1セット100G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1811 resetBehavior v0.7
- 設定変更: AT間天井1200→900G、CZ周期10→7周期、各娘ポイント30〜90pt加算（平均53pt）。
- 据え置き/純電断: 機種固有の直接三者比較は再探索後もUNVERIFIED。一般則で補完しない。
- モード: 名称付き設定変更専用モード振り分けはNONE_CONFIRMED_AFTER_RESEARCH。
- 状態: 一部二次整理RESET表記あり。ただし状態定義・純電断比較を高優先資料で固定できず未確定維持。
- 有利区間: 設定変更時の機種固有直接資料を今回固定できずUNVERIFIED_AFTER_RESEARCH。
- 朝一恩恵: 900G天井 / 7周期 / 各娘pt平均53pt加算。
- 朝一不利: 明示的な設定変更専用冷遇/天井延長はNONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 短縮天井・ポイント初期値は推測材料。ガックン/即時UI差はUNVERIFIED。設定Lのデモ中下パネル消灯は別項目。

## conflicts / normalization
- `CONFLICT_LOW_PRIORITY_SUMMARY_LAG`: 周期天井短縮についてワンチャンくん検索要約は未確認とするが、なな徹・スロベース・イチカツ等は10→7周期で一致。7周期をcanonical。
- 設定変更時内部状態は二次RESET表記のみで、純電断との高優先直接比較不足。推測確定しない。

## 2026-08-03 canonical queue — OPEN 3/8
1. ~~L邪神ちゃんドロップキック — No.1809 DONE~~
2. ~~スマスロ やじきた道中記参る！ — No.1810 DONE~~
3. ~~Lすーぱぁびん娘 — No.1811 DONE~~
4. スマスロ とんでもスキルで異世界放浪メシ — NEXT
5. スマスロ とある魔術の禁書目録2
6. スマスロ ストリートファイター6
7. スロット ワールドダイスター
8. LBトリプルクラウンX-300

### 境界再監査
- 2026-08-03群は現時点で8機をcanonical候補として保持。8/8完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。

## sources summary
retrievedAt: 2026-09-15
No.1811:
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/lbinko/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-77120/
- 情報島+ 発売: https://p-johojima.jp/new_machine/post-32064/
- 情報島+ 検定: https://p-johojima.jp/new_machine/post-30877/
- パチビー: https://www.pachibee.jp/pparticles/view/1346
- P-WORLD: https://www.p-world.co.jp/machine/database/10496
- 6確: https://www.kaku6.jp/slot/binko/
- なな徹: https://nana-press.com/kaiseki/machine/1191/
- なな徹 reset: https://nana-press.com/kaiseki/machine/1191/38224/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/260918/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1500/
- スロベース: https://slobase.jp/machines/super-bin-musume
- イチカツ: https://ichikatsu.com/lbinko/

## 次回再開地点
- 最新mainを再同期しNo.1811と本handoffを確認。
- **No.1812候補 `スマスロ とんでもスキルで異世界放浪メシ` — 2026-08-03** から継続。
- その後 `スマスロ とある魔術の禁書目録2 → スマスロ ストリートファイター6 → スロット ワールドダイスター → LBトリプルクラウンX-300`。
- 8/8完了後に2026-08-03群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
