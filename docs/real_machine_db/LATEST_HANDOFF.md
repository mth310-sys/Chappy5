更新日: 2026-09-15

## 現在地点
- recordCount: **1805**
- latestRecordAdded: **L南国育ち SPECIAL — No.1805**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-07-06_nangoku-sodachi-special.md`
- chronologicalFrontier: **2026-07-06**
- schema: **resetBehavior v0.7**
- status: **2026-07-06_GROUP_OPEN_4_OF_7_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1804を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1804 `Lパチスロ からくりサーカス2` の次から継続し、No.1805 `L南国育ち SPECIAL` を追加。
- 遊技日本、グリーンべると、情報島+、必勝本、ジャグラーズネット、なな徹、パチマガスロマガFREE、ちょんぼりすた、スロベース、6確等を横断。
- 型式 `L南国育ちSPM1`、検定番号 `531057`、平和（アムテックス製）、2026-07-06導入を固定。
- 設定1/2/4/5/6機械割 `97.5 / 98.6 / 102.6 / 105.0 / 110.4%`、ボーナス初当り `1/299.7 / 1/296.2 / 1/276.3 / 1/269.1 / 1/262.4`。
- ベース約33.0G/50枚、通常純増約3.0枚/G、超飛翔約6.0枚/G、BIG210枚以上、REG80枚以上。
- 必勝本直接比較で設定変更時は天井G数RESET・モード再抽選、純電断は天井G数・モード引継ぎ。
- 通常最大799G+α→設定変更時は全モード共通最大500G+αへ短縮。
- 設定変更時モード振り分け（全設定共通）を固定: 通常A30.0% / チャンス15.0% / 通常B40.0% / 飛翔準備A7.5% / 飛翔準備B7.5% / 超飛翔準備0%。通常A以外70%。
- 内部状態はジャグラーズネット直接比較で設定変更RESET / 電断引継ぎ。高優先別系統の状態欄がないためANALYSIS_SINGLEとして保持。
- 有利区間の設定変更/据え置き/純電断直接契約、スイカ回数カウンタ直接契約、ガックン、開始ステージ、さざなみカスタムは再探索後もUNVERIFIED。

## No.1805 — L南国育ち SPECIAL
- path: `docs/real_machine_db/machines/2026-07-06_nangoku-sodachi-special.md`
- manufacturer: **平和（製造: アムテックス）**
- formalModel: **L南国育ちSPM1**
- inspectionNumber: **531057**
- releaseDate: **2026-07-06**
- payoutRate: **97.5 / 98.6 / 102.6 / 105.0 / 110.4%**
- bonusInitialHit: **1/299.7 / 1/296.2 / 1/276.3 / 1/269.1 / 1/262.4**
- base: **約33.0G/50枚**
- netIncrease: **通常 約3.0枚/G / 超飛翔 約6.0枚/G**
- basicPayout: **BIG 210枚以上 / REG 80枚以上**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1805 resetBehavior v0.7
- 設定変更: 天井G数RESET、モード再抽選。内部状態RESETは単一解析系統で確認。
- 据え置き/純電断: 天井G数・モード引継ぎ。内部状態引継ぎは単一解析系統で確認。
- 天井: 通常最大799G+α → 設定変更時全モード共通最大500G+α。
- モード: 通常A30.0% / チャンス15.0% / 通常B40.0% / 飛翔準備A7.5% / 飛翔準備B7.5% / 超飛翔準備0%。通常A以外70%。
- 有利区間: 機種固有の直接契約はUNVERIFIED_AFTER_RESEARCH。
- 朝一恩恵: 500G天井短縮 + 通常A以外70%。
- 朝一不利: NONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 朝一500G+αを明確に超えてボーナス非当選なら据え置き推測材料。開始ステージ/ガックンはUNVERIFIED。

## conflicts / normalization
- 必勝本初期公開ページの機械割「調査中」は後発公開時期差。後発複数資料で97.5〜110.4%が一致するため数値CONFLICTとはしない。
- 「チャンスモード以上70%以上」という要約表現に対し、必勝本の具体振り分けは通常A以外合計70.0%。具体振り分けをcanonicalとする。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は最新mainで安全に実体固定できていないため外部順から推測補完しない。
- 既存 `COMPLETE_CORE` は変更せず、reset QA状態を性能コア本線と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1805:
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-76970/
- グリーンべると: https://web-greenbelt.jp/post-112732/
- 情報島+ 検定: https://p-johojima.jp/new_machine/post-24857/
- 必勝本 基本: https://hisshobon.com/machineinfo/89857/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/138041/
- 必勝本 モード移行: https://hisshobon.com/machineinfo/138062/
- 必勝本 ボーナス抽選: https://hisshobon.com/machineinfo/138063/
- ジャグラーズネット: https://jugglersnet.com/hikarimonoat/nangokusodachi-special
- なな徹: https://nana-press.com/kaiseki/machine/1173/37760/
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/amutex/nangokusodachi_SP.php
- ちょんぼりすた: https://chonborista.com/slot/amute/259472/
- スロベース: https://slobase.jp/machines/nangoku-sodachi-special
- 6確: https://www.kaku6.jp/slot/nangokusp/

## 2026-07-06 canonical queue — OPEN 4/7
1. ~~戦国コレクション6 — No.1802 DONE~~
2. ~~スマスロ ケロット5BT — No.1803 DONE~~
3. ~~Lパチスロ からくりサーカス2 — No.1804 DONE~~
4. ~~L南国育ち SPECIAL — No.1805 DONE~~
5. ローティス — NEXT
6. ヤバチバ
7. L ULTRAMAN 最終決戦

## 次回再開地点
- 最新mainを再同期しNo.1805と本handoffを確認。
- **No.1806候補「ローティス」— 2026-07-06** から継続。
- 7/6群の残り3機を順次処理し、7/7完了後にPB・別型式・地域先行・延期/段階導入を再監査して境界CLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
