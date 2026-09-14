更新日: 2026-09-15

## 現在地点
- recordCount: **1795**
- latestRecordAdded: **Lタクトオーパス デスティニー — No.1795**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-05-11_takt-opus-destiny.md`
- chronologicalFrontier: **2026-05-11**
- schema: **resetBehavior v0.7**
- status: **2026-05-11_BOUNDARY_OPEN_3_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1794を再同期。
- 開始時main HEADは `43d4e453b7561858bbd5d3d63dc249cc029b53e6`、No.1794まで進行済みだったため重複を避けてNo.1795から継続。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1795 `Lタクトオーパス デスティニー` を追加し、性能コアとresetBehavior v0.7を同時収集。
- 型式 `LタクトオーパスM1`、検定番号 `5S1493`、導入日2026-05-11、メーカー アムテックスを1geki/P-WORLD/パチビー等で固定。
- 設定1〜6。AT初当り1/358.5〜1/297.4、機械割97.6/98.2/100.3/104.7/108.7/113.5%。デスティニーボーナス1/770（全設定共通）。
- ベース約35G/50枚、AT純増約2.6枚/G、AT初期150枚+α、デスティニー/エピソードBONUS約104枚。
- 通常AT間天井999G+α→設定変更後699G+α、CZ間最大500G+α→300G+αへ短縮。
- 設定変更後モードはA非選択、B 69.9% / C 30.1%。モードCはCZ天井100G+α。
- 据え置き三者比較は高優先公開資料で直接固定できずUNVERIFIED。純電源OFF→ONの天井引継ぎは二次資料支持のためSECONDARY_SUPPORTEDに抑制。
- 内部状態三者比較、本機固有ガックン、有利区間の据え置き/純電断直接契約は再探索後もUNVERIFIED。
- HAZUSEの設定4 AT初当り1/299.5に対し、必勝本/1geki/P-WORLD等は1/299.3で一致。canonical=1/299.3、異説はCONFLICT保持。

## No.1795 — Lタクトオーパス デスティニー
- path: `docs/real_machine_db/machines/2026-05-11_takt-opus-destiny.md`
- manufacturer: **アムテックス**
- formalModel: **LタクトオーパスM1**
- inspectionCode: **5S1493**
- releaseDate: **2026-05-11**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.2 / 100.3 / 104.7 / 108.7 / 113.5%**
- AT: **1/358.5 / 1/350.3 / 1/330.5 / 1/299.3 / 1/297.8 / 1/297.4**
- destinyBonus: **1/770（全設定共通）**
- base: **約35G/50枚**
- netIncrease: **AT約2.6枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1795 resetBehavior v0.7
- 設定変更: CZ/AT間ゲーム数RESET。有利区間移行時短縮天井を適用。通常モード再抽選、A非選択。
- 据え置き: 天井/モード/状態/有利区間の機種固有直接比較は `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: 天井G引継ぎは二次資料で支持し `SECONDARY_SUPPORTED`。モード/状態/有利区間はUNVERIFIED。
- ゲーム数/天井: AT 999G+α→699G+α、CZ最大500G+α→300G+α。
- モード: reset時 B 69.9% / C 30.1% / A 0%。モード別CZ天井A=500/B=300/C=100G+α。
- 状態: 通常/高確/超高確は存在するがreset三者比較と具体振り分けはUNVERIFIED。
- 有利区間: 設定変更後を含む有利区間移行時に短縮天井適用。設定変更RESET文脈は固定、据え置き/電断直接契約はUNVERIFIED。
- 朝一恩恵: AT天井300G短縮、CZ最大200G短縮、A回避、約30%でCZ天井100G+α。
- 朝一不利: 固定ペナルティ値/不利専用モード `NONE_CONFIRMED_AFTER_RESEARCH`。
- 変更判別: 699G/300G上限や100G/300G付近CZは事後材料。本機固有ガックン/確定判別はUNVERIFIED。
- 公開朝一数値: B 69.9% / C 30.1%。

## conflicts / normalization
- canonical基本スペックは必勝本/1geki/P-WORLD/複数解析で一致する **97.6/98.2/100.3/104.7/108.7/113.5%**、AT **1/358.5〜1/297.4**、ベース約35G/50枚、純増約2.6枚/G。
- HAZUSE設定4 AT初当り `1/299.5` vs 複数一致 `1/299.3` は `CONFLICT_LIKELY_SOURCE_ROUNDING_OR_TYPO_SETTING4_AT_299.5`。canonicalは1/299.3。
- 純電源OFF→ON天井引継ぎは高優先直接本文が会員制で取得できず、公開二次資料支持のみのため確信度を下げた。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` を最新mainで再検索したが一致0件で、実体を一意固定できない状態を継続。
- 実体を安全に固定できるまで外部導入順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1795:
- 1geki 機種TOP: https://1geki.jp/slot/l_takt_op_destiny/
- 1geki 天井/朝一: https://1geki.jp/slot/l_takt_op_destiny/3/
- 1geki モード: https://1geki.jp/slot/l_takt_op_destiny/45/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89778/
- 必勝本 通常時/天井: https://p.hisshobon.jp/machine/4721/1/115647
- P-WORLD: https://www.p-world.co.jp/machine/database/10460
- パチビー: https://www.pachibee.jp/machines/index/226040002
- パチマガスロマガ 天井: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/12/kr03.php
- パチマガスロマガ 設定変更/電源OFF・ON: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/12/kr01.php
- HAZUSE: https://hazuse.com/machine/pachislot/5S1493/
- ちょんぼりすた: https://chonborista.com/slot/amute/254099/
- スロットソリューション（電断天井引継ぎ二次支持）: https://slot-solution.site/takt-op/955/

## 2026-05-11 canonical queue — OPEN 3/4
1. ~~スマスロ バイオハザードRE:3 — No.1793 DONE~~
2. ~~スマスロスーパーリオエース2 — No.1794 DONE~~
3. ~~Lタクトオーパス デスティニー — No.1795 DONE~~
4. **スマスロ ビッグドリーム THE GOLDEN PUSHER — candidate No.1796**

次境界候補:
- 2026-05-25: **LB スロット GALFY**

## 次回再開地点
- 最新mainを再同期しNo.1795と本handoffを確認。
- **No.1796候補「スマスロ ビッグドリーム THE GOLDEN PUSHER」— 2026-05-11** から継続。
- 5/11群4/4完了後、PB・別型式・地域先行・延期/段階導入を再監査して境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
