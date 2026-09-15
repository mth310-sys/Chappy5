更新日: 2026-09-15

## 現在地点
- recordCount: **1803**
- latestRecordAdded: **スマスロ ケロット5BT — No.1803**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-07-06_smart-kerotto5-bt.md`
- chronologicalFrontier: **2026-07-06**
- schema: **resetBehavior v0.7**
- status: **2026-07-06_GROUP_OPEN_2_OF_7_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1802を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1802 `戦国コレクション6` の次から継続し、No.1803 `スマスロ ケロット5BT` を追加。
- 遊技通信/P-WORLD、遊技日本、情報島+、G-net、必勝本、パチマガスロマガ、パチビー等を横断。
- 型式 `LBケロット5ND05H`、山佐ネクスト、2026-07-06導入を固定。
- 設定1〜6の機械割 `98.2 / 99.1 / 101.1 / 104.5 / 107.0 / 111.0%`。
- BIG系合算 `1/232.4 / 1/230.8 / 1/229.1 / 1/218.5 / 1/215.6 / 1/204.8`、REG `1/350.5 / 1/341.3 / 1/324.4 / 1/299.3 / 1/274.2 / 1/239.2`、ボーナス合算 `1/139.7 / 1/137.7 / 1/134.3 / 1/126.3 / 1/120.7 / 1/110.3`。
- ベース約37G/50枚（設定1）、SBB約317枚（BT含む）、BIG最大209枚、REG84枚固定。
- 天井非搭載を複数資料で固定。したがってゲーム数/周期天井の設定変更RESET・据え置き/純電断引継ぎ・朝一天井短縮はN/A。
- 必勝本の設定変更/電源OFF ON直接比較で演出モードは双方「現在調査中」。再探索後も機種固有の初期化/保持契約は固定できずUNVERIFIED。
- 朝一専用モード、天井短縮、CZ/初当たり優遇、不利専用モード等はNONE_CONFIRMED_AFTER_RESEARCH。
- 本機固有ガックン、朝一即時判別、有利区間の設定変更/電断契約は一般論で埋めずUNVERIFIED_AFTER_RESEARCH。
- ニコナナ動画概要の設定5 BIG合算1/225.6・設定6機械割110.0%は、必勝本/G-net/P-WORLD/パチビー等の1/215.6・111.0%と競合。多数一致側をcanonical、異値をCONFLICTとして隔離。

## No.1803 — スマスロ ケロット5BT
- path: `docs/real_machine_db/machines/2026-07-06_smart-kerotto5-bt.md`
- manufacturer: **山佐ネクスト**
- formalModel: **LBケロット5ND05H**
- releaseDate: **2026-07-06**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **98.2 / 99.1 / 101.1 / 104.5 / 107.0 / 111.0%**
- bonusCombined: **1/139.7 / 1/137.7 / 1/134.3 / 1/126.3 / 1/120.7 / 1/110.3**
- base: **約37G/50枚（設定1）**
- basicPayout: **SBB約317枚（BT含む） / BIG最大209枚 / REG84枚固定**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1803 resetBehavior v0.7
- 設定変更: 天井非搭載のため天井関連N/A。演出モード等の機種固有契約はUNVERIFIED_AFTER_RESEARCH。
- 据え置き: 天井関連N/A。演出モード等はUNVERIFIED_AFTER_RESEARCH。
- 純電源OFF→ON: 天井関連N/A。必勝本で演出モードは現在調査中。
- ゲーム数/天井: 天井非搭載。
- モード/状態: 3演出モード搭載。ただし設定変更/電断時の保持・初期化は未固定。
- 有利区間: 機種固有の直接資料未固定。一般論から推測補完せずUNVERIFIED。
- 朝一恩恵: NONE_CONFIRMED_AFTER_RESEARCH。
- 朝一不利: NONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: ガックン/ランプ/表示等の機種固有即時判別はUNVERIFIED。短縮天井による事後判別はN/A。
- 公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / normalization
- ニコナナ動画概要: 設定5 BIG合算1/225.6、設定6機械割110.0%。主要複数資料: 1/215.6、111.0%。平均せず後者をcanonical、前者をCONFLICT保持。
- PShortの設定3/4 BIG合算1/229.2・1/218.4に対し主要資料は1/229.1・1/218.5。丸め/転記差候補として多数一致側をcanonical。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで安全に実体固定できていないため外部順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1803:
- P-WORLD/遊技通信 発表記事: https://news.p-world.co.jp/articles/33409/yugitsushin
- 遊技日本 発売記事: https://yugi-nippon.com/pachinko-new-machine/post-76594/
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-28691/
- G-net 販売概要: https://g-net-ps.com/info/s0273/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89852/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/137930/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10479
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/15/kh01.php
- パチビー: https://www.pachibee.jp/machines/index/226060004
- 情報島+ 機種概要: https://p-johojima.jp/machine_spec/post-30724/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/258812/

## 2026-07-06 canonical queue — OPEN 2/7
1. ~~戦国コレクション6 — No.1802 DONE~~
2. ~~スマスロ ケロット5BT — No.1803 DONE~~
3. Lパチスロ からくりサーカス2 — NEXT
4. L南国育ち SPECIAL
5. ローティス
6. ヤバチバ
7. L ULTRAMAN 最終決戦

## 次回再開地点
- 最新mainを再同期しNo.1803と本handoffを確認。
- **No.1804候補「Lパチスロ からくりサーカス2」— 2026-07-06** から継続。
- 7/6群の残り5機を順次処理し、7/7完了後にPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
