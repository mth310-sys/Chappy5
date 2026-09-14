更新日: 2026-09-15

## 現在地点
- recordCount: **1786**
- latestRecordAdded: **スマスロヨルムンガンド — No.1786**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-06_smart-slot-jormungand.md`
- chronologicalFrontier: **2026-04-06**
- schema: **resetBehavior v0.7**
- status: **2026-04-06_BOUNDARY_OPEN_3_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1785を再同期。
- INDEXは旧スナップショット（19件）のためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 直前handoffの次の未処理No.1786候補 `スマスロヨルムンガンド` を正式No.1786として追加。
- HAZUSE、遊技通信/P-WORLD、必勝本、なな徹、1geki、パチマガスロマガ、6確等を横断し、性能コアとresetBehavior v0.7を同時収集。
- 設定変更後はAT間天井999G+α→450G+αへ短縮。なな徹で設定変更後・恥の世紀失敗後は必ず450G+αと確認。
- 450G仮天井選択率33.59〜50.00%は設定変更時の振り分けではなく、設定変更後/恥の世紀失敗後以外の通常状況での短縮抽選値として条件を分離。
- 純電源OFF→ONは内部状態・天井ゲーム数を引継ぎ。設定変更時のみ起こり得る右下がりベルテンパイ→ハズレ停止という変更判別要素も保存。
- 通常の有利区間リセット時「恥の世紀」恩恵は設定変更時除外のため朝一恩恵へ混入していない。
- 2026-04-06群は6機候補を維持。本機処理で3/6。残り3機を時系列順に継続する。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は未解決のまま性能コア本線と分離し、推測更新は行っていない。

## No.1786 — スマスロヨルムンガンド
- path: `docs/real_machine_db/machines/2026-04-06_smart-slot-jormungand.md`
- manufacturer: **山佐ネクスト**
- formalModel: **LパチスロヨルムンガンドND01G**
- inspectionCode: **531070**
- releaseDate: **2026-04-06**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 98.8 / 100.9 / 104.7 / 109.6 / 113.9%**
- AT initial: **1/333.8 / 1/323.3 / 1/305.4 / 1/291.6 / 1/291.1 / 1/290.1**
- CZ: **1/194.2 / 1/188.6 / 1/175.7 / 1/169.4 / 1/167.8 / 1/167.2**
- base: **約32G/50枚**
- AT net: **通常約2.4枚/G / 上位約5.0枚/G**
- basicPayout: **AT初期50G+α / REG約50枚 / BIG約100枚 / ヨルムンガンドBONUS約150枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1786 resetBehavior v0.7
- 設定変更: 天井・内部状態RESET、有利区間RESET。AT間天井は999G+α→450G+αへ短縮。
- 据え置き: 有利区間・天井・内部状態CARRY_OVERをなな徹比較表で確認。
- 純電源OFF→ON: 1geki等で内部状態・天井ゲーム数CARRY_OVERを確認。有利区間そのものの純電断直接文言は未固定。
- 朝一恩恵: 設定変更後は450G+αでAT当選。通常状況の仮天井選択率表を設定変更時の振り分けとして誤転記しない。
- 変更判別: 左→右ハサミ打ち時、右下がりベルテンパイ→ハズレ停止は設定変更時のみ発生可能と1gekiが掲載。
- 本機固有ガックン条件/発生率、朝一開始ステージ、設定変更専用通常モード振り分けは検索語・資料系統変更後も未固定。

## normalization / interpretation notes
- `TEMPORARY_CEILING_SELECTION_RATE_CONTEXT`: 33.59 / 40.23 / 45.31 / 49.22 / 49.61 / 50.00%は通常状況の450G仮天井抽選。設定変更後および恥の世紀失敗後は設定不問で450G+αへ短縮。
- 有利区間リセット後の上位CZ「恥の世紀」恩恵は1gekiが「設定変更時を除く」と明記。朝一設定変更恩恵へ混入しない。
- 一部低品質二次資料に別メーカー・別純増等の混同記述があるため、HAZUSEの正式型式・公式リンクと複数高優先解析一致値をcanonicalとした。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
- HAZUSE: https://hazuse.com/hd/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%83%A8%E3%83%AB%E3%83%A0%E3%83%B3%E3%82%AC%E3%83%B3%E3%83%89/
- 山佐ネクスト公式: https://yamasa-next.co.jp/slot/jmngd/
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/32818/yugitsushin
- 必勝本基本スペック: https://hisshobon.com/machineinfo/89462/
- 必勝本AT: https://hisshobon.com/machineinfo/89396/
- なな徹CZ/AT/機械割/ベース: https://nana-press.com/kaiseki/machine/1101/35325/
- なな徹天井: https://nana-press.com/kaiseki/machine/1101/35969/
- なな徹朝一: https://nana-press.com/kaiseki/machine/1101/35970/
- 1geki天井/朝一/電源OFFON/有利区間: https://1geki.jp/slot/l_jormungand/3/
- パチマガスロマガBONUS: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/13/at02.php
- 6確: https://www.kaku6.jp/slot/jormungand/

## 2026-04-06 canonical queue — OPEN 3/6
1. ~~A-SLOT+ 異世界かるてっと BT — No.1784 DONE~~
2. ~~Lアクダマドライブ — No.1785 DONE~~
3. ~~スマスロヨルムンガンド — No.1786 DONE~~
4. **L虚構推理 — candidate No.1787**
5. 真打 吉宗
6. LB トリプルクラウンセブン

boundary sources:
- 情報島 2026-04-06導入前評価: https://p-johojima.jp/colum/post-29369/
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- P-Summa 2026年4月整理: https://psumma.jp/pachislo/69812/
- 岡崎産業公式PR（LBトリプルクラウンセブン 4/6）: https://prtimes.jp/main/html/rd/p/000000006.000178173.html

## 次回再開地点
- 最新mainを再同期しNo.1786と本handoffを確認。
- **No.1787候補「L虚構推理」— 2026-04-06** から継続。
- 2026-04-06群は現時点6機確認、残り3機。処理中もPB・別型式・地域先行・延期/段階導入を再監査する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
