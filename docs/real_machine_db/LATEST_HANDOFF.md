更新日: 2026-09-15

## 現在地点
- recordCount: **1790**
- latestRecordAdded: **スマスロ ミリオンゴッド-神々の軌跡- — No.1790**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-20_smaslot-million-god-kamigami-no-kiseki.md`
- chronologicalFrontier: **2026-04-20**
- schema: **resetBehavior v0.7**
- status: **2026-04-20_BOUNDARY_OPEN_1_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1789を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1789まで完了済みを確認し、次の未処理No.1790候補 `スマスロ ミリオンゴッド-神々の軌跡-` から継続。
- No.1790を追加し、性能コアとresetBehavior v0.7を同時収集。
- ユニバーサル公式で2026-04-20ホールデビューを確認。1geki/HAZUSEで型式 `L／ミリオンゴッド／CX`、検定番号 `530692` を照合。
- 設定1〜6。機械割97.2/99.1/102.1/106.9/111.7/114.6%、GG初当り1/533/1/420/1/496/1/338/1/455/1/295。
- ベース約30.8G/50枚（設定1）、GG純増約7.0枚/G、1セット50G・平均約350枚相当。
- 通常天井GG間1480G+α。設定変更時は510G 15.2% / 1000G 20.3% / 1480G 64.5%で再抽選し、1000G以内への短縮率35.5%。
- 必勝本の直接比較で設定変更時は天井RESET、表/裏モード再抽選、ガイア状態再抽選。純電源OFF→ONでは3項目を引継ぎ。
- なな徹の朝一比較で設定変更時の有利区間RESET、据え置き時の有利区間・天井・内部モード/状態引継ぎを確認。
- 設定変更時の液晶出目は0・1・2、開始ステージはアフロディーテ。純電断側は調査中のため確定判別には使用しない。
- 朝一モード具体振り分け、純電断時有利区間の直接文言、ガックン条件/発生率は十分な再探索後も固定できずUNVERIFIED。
- なな徹設定1暫定期待値はリセット0G等価+246円、150G+1,071円、500G+4,079円。性能コアと分離保存。
- 通常営業中の有利区間リセット恩恵はパチマガ系が `設定変更時は除く` と明記しているため、朝一設定変更恩恵へ混入していない。

## No.1790 — スマスロ ミリオンゴッド-神々の軌跡-
- path: `docs/real_machine_db/machines/2026-04-20_smaslot-million-god-kamigami-no-kiseki.md`
- manufacturer: **ミズホ**
- formalModel: **L／ミリオンゴッド／CX**
- inspectionCode: **530692**
- releaseDate: **2026-04-20**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.2 / 99.1 / 102.1 / 106.9 / 111.7 / 114.6%**
- GG initial: **1/533 / 1/420 / 1/496 / 1/338 / 1/455 / 1/295**
- base: **約30.8G/50枚（設定1）**
- netIncrease: **約7.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1790 resetBehavior v0.7
- 設定変更: 天井ゲーム数RESET/再抽選、表・裏モード再抽選、ガイア状態再抽選、有利区間RESET。
- 据え置き: 有利区間・天井・内部モード/状態を引継ぎ。
- 純電源OFF→ON: 天井、表/裏モード、ガイア状態を引継ぎ。有利区間直接文言はUNVERIFIED。
- ゲーム数・天井: 通常1480G+α。リセット時510G 15.2% / 1000G 20.3% / 1480G 64.5%。
- モード・状態: リセットで再抽選、据え置き/純電断で引継ぎ。具体的朝一モード振り分けはUNVERIFIED。
- 有利区間: 設定変更RESET / 据え置きCARRY_OVER。通常営業中リセット恩恵は設定変更時除外。
- 朝一恩恵: 35.5%で1000G以内天井。天井到達時はループストック抽選。
- 朝一不利: 固定公開ペナルティなし。前状態の高モード等消失可能性は固定ペナルティとして扱わない。
- 変更判別: 設定変更時0・1・2出目/アフロディーテ開始は公開。純電断側が調査中のため確定判別不可。ガックンはUNVERIFIED。
- 公開朝一数値: リセット天井振り分け、天井ループストック振り分け、なな徹暫定期待値を保存。

## conflicts / normalization
- 主要性能コアは1geki・必勝本・HAZUSE・パチマガ系で一致し重大CONFLICTなし。
- 一部低優先サイトのGOD揃い1/8192、純増5枚/G、ベース約33G/50枚等は、高優先複数資料のGOD揃い1/16384、純増約7.0枚/G、ベース約30.8G/50枚と競合。`CONFLICT_LOW_PRIORITY_LIKELY_MIXED_OR_ERRONEOUS_DATA` としてcanonical不採用。
- 有利区間リセット時の高ループ恩恵は暫定解析であり、かつ設定変更時除外のため朝一恩恵へ混入しない。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1790:
- ユニバーサル公式: https://universal-777.com/topics/20260501005060/
- 1geki: https://1geki.jp/slot/l_milliongod_kiseki/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0127/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89357/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89354/
- 必勝本 天井G数抽選: https://hisshobon.com/machineinfo/89366/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1112/35716/
- パチマガスロマガ 機種概要: https://cs61.cs-plaza.com/m/pachi/pla/s_conq/mizuho_slot/57/kh01.php
- パチマガスロマガ 有利区間: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/57/kr04.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10424

boundary 2026-04-20:
- 情報島導入前評価: https://p-johojima.jp/colum/post-30468/
- 情報島導入後評価: https://p-johojima.jp/colum/post-30920/
- P-Summa月間整理: https://psumma.jp/pachislo/69812/

## 2026-04-20 canonical queue — OPEN 1/3
1. ~~スマスロ ミリオンゴッド-神々の軌跡- — No.1790 DONE~~
2. **アニマルスロット ドッチ — candidate No.1791**
3. Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE

## 次回再開地点
- 最新mainを再同期しNo.1790と本handoffを確認。
- **No.1791候補「アニマルスロット ドッチ」— 2026-04-20** から継続。
- その後 `Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE` を処理し、PB・別型式・地域先行・延期/段階導入を再監査して2026-04-20境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。