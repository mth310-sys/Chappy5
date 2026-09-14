更新日: 2026-09-15

## 現在地点
- recordCount: **1788**
- latestRecordAdded: **真打 吉宗 — No.1788**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-06_shinuchi-yoshimune.md`
- chronologicalFrontier: **2026-04-06**
- schema: **resetBehavior v0.7**
- status: **2026-04-06_BOUNDARY_OPEN_5_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードを再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1788 `真打 吉宗` を追加し、性能コアとresetBehavior v0.7を同時収集。
- 型式 `L／真打吉宗／A1`、検定番号 `530504`、大都技研、2026-04-06導入を業界記事/HAZUSE/解析で照合。
- 設定1～6の機械割 97.8 / 98.6 / 101.0 / 104.5 / 108.0 / 114.0%、CZ 1/313.0→1/250.6、AT 1/488.9→1/354.9、ベース約31G/50枚、AT約2.7枚/G、真BB約9.0枚/Gを保存。
- 設定変更後AT天井は通常1500G+α→1000G+αへ500G短縮。CZモード・夜回りポイントモードは高モード選択率アップ。
- 据え置きは有利区間・天井・モード・夜回りポイント・周期数を引継ぎ。純電源OFF→ONも周期モード・夜回りポイントモード・ゲーム数天井を引継ぐ資料を確認。
- 朝一の夜回りカウンターは設定変更/据え置きに関わらず初期状態表示となるため、見た目での変更判別は困難。
- CZモード/夜回りポイントモードの設定変更時具体振り分け、高確/内部状態の直接比較、純電断時有利区間直接文言、本機固有ガックンは再探索後も未固定としてUNVERIFIED。
- 2026-04-06群は6機候補の5/6まで処理。残り1機。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は未解決のまま性能コア本線と分離し、推測更新は行っていない。

## No.1788 — 真打 吉宗
- path: `docs/real_machine_db/machines/2026-04-06_shinuchi-yoshimune.md`
- manufacturer: **大都技研**
- formalModel: **L／真打吉宗／A1**
- inspectionCode: **530504**
- releaseDate: **2026-04-06**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 98.6 / 101.0 / 104.5 / 108.0 / 114.0%**
- CZ: **1/313.0 / 1/303.0 / 1/283.5 / 1/267.1 / 1/256.9 / 1/250.6**
- AT: **1/488.9 / 1/471.5 / 1/438.5 / 1/398.1 / 1/377.0 / 1/354.9**
- base: **約31G/50枚**
- netIncrease: **AT約2.7枚/G / 真BB約9.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1788 resetBehavior v0.7
- 設定変更: 有利区間・天井・CZモード・夜回りポイント・周期数RESET。AT間天井1500G+α→1000G+αへ短縮。
- 据え置き: 有利区間・天井・モード・夜回りポイント・周期数CARRY_OVER。
- 純電源OFF→ON: 周期モード・夜回りポイントモード・ゲーム数天井CARRY_OVER。純電断のみの有利区間直接文言は未固定。
- モード: 設定変更時はCZモードと夜回りポイントモードの高モード選択率アップ。具体振り分け率は再探索後も未固定。
- 天井: CZ間1000G+α、通常AT間1500G+α、設定変更後AT間1000G+α、真BB後AT間700G+α。
- 変更判別: 夜回りカウンターは設定変更/据え置きとも初期表示で見た目判別困難。朝一1000G+α超過AT非当選は据え置き推測の強材料。本機固有ガックンは未固定。

## conflicts / normalization
- No.1788の主要性能値に重大CONFLICTなし。
- 初期掲示板/口コミの一部にリセット天井「990G」表記があるが、なな徹・パチマガスロマガ・パチビー・複数解析が1000G+αで一致するためcanonical不採用。
- No.1787 setting4リセット天井700Gは91.41%をcanonical、P-WORLD 91.94%を `CONFLICT_LIKELY_TRANSCRIPTION` として保持済み。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1788:
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33008/yugitsushin
- HAZUSE: https://hazuse.com/machine/pachislot/SX0123/
- パチビー基本: https://www.pachibee.jp/machines/index/226030000
- パチビー攻略: https://www.pachibee.jp/machines/kouryaku/226030000
- なな徹まとめ: https://nana-press.com/kaiseki/machine/1124/
- なな徹朝一: https://nana-press.com/kaiseki/machine/1124/36101/
- 1geki: https://1geki.jp/slot/l_shinuchi_yoshimune/3/
- パチマガスロマガFREE: https://pachimaga.com/free/article/20260408/064931.php
- 必勝本: https://p.hisshobon.jp/machine/4715/1/114993
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/252676/

No.1787:
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/32845/yugitsushin
- HAZUSE: https://hazuse.com/hd/l%E8%99%9A%E6%A7%8B%E6%8E%A8%E7%90%86/
- なな徹: https://nana-press.com/kaiseki/machine/1111/36137/

## 2026-04-06 canonical queue — OPEN 5/6
1. ~~A-SLOT+ 異世界かるてっと BT — No.1784 DONE~~
2. ~~Lアクダマドライブ — No.1785 DONE~~
3. ~~スマスロヨルムンガンド — No.1786 DONE~~
4. ~~L虚構推理 — No.1787 DONE~~
5. ~~真打 吉宗 — No.1788 DONE~~
6. **LB トリプルクラウンセブン — candidate No.1789**

boundary sources:
- 情報島 2026-04-06導入前評価: https://p-johojima.jp/colum/post-29369/
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- P-Summa 2026年4月整理: https://psumma.jp/pachislo/69812/
- 岡崎産業公式PR（LBトリプルクラウンセブン 4/6）: https://prtimes.jp/main/html/rd/p/000000006.000178173.html

## 次回再開地点
- 最新mainを再同期しNo.1788と本handoffを確認。
- **No.1789候補「LB トリプルクラウンセブン」— 2026-04-06** から継続。
- これを処理後、PB・別型式・地域先行・延期/段階導入を再監査して2026-04-06境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
