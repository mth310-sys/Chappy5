更新日: 2026-09-15

## 現在地点
- recordCount: **1785**
- latestRecordAdded: **Lアクダマドライブ — No.1785**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-06_l-akudama-drive.md`
- chronologicalFrontier: **2026-04-06**
- schema: **resetBehavior v0.7**
- status: **2026-04-06_BOUNDARY_OPEN_2_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1784を再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 直前handoffの次の未処理No.1785候補 `Lアクダマドライブ` を重複検索後に正式No.1785として追加。
- 遊技通信、遊技日本、情報島、HAZUSE、必勝本、1geki、なな徹、パチビー等を横断し、性能コアとresetBehavior v0.7を同時収集。
- 設定変更後ゲーム数天井は資料競合を確認。高優先資料側の967G+αをcanonical、589G+α説をCONFLICTとして保持。
- 2026-04-06群は6機候補を維持。本機処理で2/6。残り4機を時系列順に継続する。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は未解決のまま性能コア本線と分離し、推測更新は行っていない。

## No.1785 — Lアクダマドライブ
- path: `docs/real_machine_db/machines/2026-04-06_l-akudama-drive.md`
- manufacturer: **サンスリー製造 / 三洋販売・SANYO**
- formalModel: **LアクダマドライブTP**
- inspectionCode: **530756**
- releaseDate: **2026-04-06**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.2 / 100.1 / 104.1 / 107.3 / 112.0%**
- bonusInitial: **1/321.2 / 1/319.3 / 1/315.8 / 1/307.0 / 1/296.9 / 1/291.1**
- AT initial: **1/555.5 / 1/550.7 / 1/543.6 / 1/517.8 / 1/487.7 / 1/472.0**
- CZ: **1/166.1 / 1/165.3 / 1/163.8 / 1/159.3 / 1/154.8 / 1/152.1**
- base: **約31G/50枚**
- AT net: **約7.1枚/G**
- basicPayout: **アクダマBONUS平均約90枚 / エピソードBONUS平均約169枚 / AT初回30G+α・2連目以降20G+α**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1785 resetBehavior v0.7
- 通常BONUS間天井967G+α。超S級ST後、または745G以上経過後BONUSでAT非当選時は589G+α。
- 設定変更時はSTスルー回数天井を再抽選。2回33.6% / 4回33.6% / 6回32.8%。
- 設定変更時はボーナス初当たりまでカンサイ教育番組当選率アップ、処刑課バトル天井が最大5ATセット目へ短縮。
- 設定変更後ゲーム数天井はCONFLICT。なな徹は967G+αで短縮なし、1geki/パチビーも設定変更単独を589G条件に含めない。一方6確等は589G+αと掲載。canonical=967G+α、alternative=589G+α。
- 純電源OFF→ONで天井・STスルー回数引継ぎは二次資料支持あり。ただし高優先の直接比較表不足のためSECONDARY_SUPPORTED。
- 据え置き三者契約、有利区間三者契約、本機固有ガックン条件/発生率は再探索後も高優先直接資料を固定できずUNVERIFIED/SECONDARY_SUPPORTEDとして分離。

## conflicts / normalization
- `RESET_GAME_CEILING_967_VS_589`: 高優先条件記述を優先し967G+αをcanonical。589G+α説を削除せずCONFLICT保持。
- メーカー表記SANYO/三洋物産/三洋販売/サンスリーを、業界一次資料に基づき `サンスリー製造 / 三洋販売・SANYO` と正規化。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/32692/yugitsushin
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-74982/
- 情報島: https://p-johojima.jp/new_machine/post-23257/
- HAZUSE: https://hazuse.com/hd/530756h/
- HAZUSE解析: https://hazuse.com/machine/pachislot/SX0124/
- 必勝本基本スペック: https://hisshobon.com/machineinfo/89273/
- 必勝本スルー天井: https://hisshobon.com/machineinfo/89283/
- 必勝本AT: https://hisshobon.com/machineinfo/89285/
- 1geki: https://1geki.jp/slot/l_akudama_drive/3/
- なな徹朝一: https://nana-press.com/kaiseki/machine/1109/36235/
- パチビー: https://www.pachibee.jp/machines/kouryaku/226030002
- 6確: https://www.kaku6.jp/slot/akudamadrive/

## 2026-04-06 canonical queue — OPEN 2/6
1. ~~A-SLOT+ 異世界かるてっと BT — No.1784 DONE~~
2. ~~Lアクダマドライブ — No.1785 DONE~~
3. **スマスロヨルムンガンド — candidate No.1786**
4. L虚構推理
5. 真打 吉宗
6. LB トリプルクラウンセブン

boundary sources:
- 情報島 2026-04-06導入前評価: https://p-johojima.jp/colum/post-29369/
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- P-Summa 2026年4月整理: https://psumma.jp/pachislo/69812/
- 岡崎産業公式PR（LBトリプルクラウンセブン 4/6）: https://prtimes.jp/main/html/rd/p/000000006.000178173.html

## 次回再開地点
- 最新mainを再同期しNo.1785と本handoffを確認。
- **No.1786候補「スマスロヨルムンガンド」— 2026-04-06** から継続。
- 2026-04-06群は現時点6機確認、残り4機。処理中もPB・別型式・地域先行・延期/段階導入を再監査する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
