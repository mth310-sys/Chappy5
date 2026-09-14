更新日: 2026-09-15

## 現在地点
- recordCount: **1784**
- latestRecordAdded: **A-SLOT+ 異世界かるてっと BT — No.1784**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-06_a-slot-plus-isekai-quartet-bt.md`
- chronologicalFrontier: **2026-04-06**
- schema: **resetBehavior v0.7**
- status: **2026-04-06_BOUNDARY_OPEN_1_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1783を再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 直前handoffの次の未処理No.1784候補 `A-SLOT+ 異世界かるてっと BT` を重複検索後に正式No.1784として追加。
- サミー公式、遊技通信、HAZUSE、必勝本、1geki、なな徹等を横断し、性能コアとresetBehavior v0.7を同時収集。
- 2026-04-06群は直前監査の6機候補を維持。本機処理で1/6。残り5機を時系列順に継続する。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は未解決のまま性能コア本線と分離し、推測更新は行っていない。

## No.1784 — A-SLOT+ 異世界かるてっと BT
- path: `docs/real_machine_db/machines/2026-04-06_a-slot-plus-isekai-quartet-bt.md`
- manufacturer: **銀座製造 / サミー**
- formalModel: **LB 異世界かるてっと KR**
- inspectionCode: **5S1513**
- releaseDate: **2026-04-06**
- settings: **1 / 2 / 5 / 6**
- payoutRate marketEstimate: **97.9 / 99.9 / 104.4 / 109.0%**
- payoutRate fullStrategy: **99.0 / 101.1 / 105.7 / 110.6%**
- bonusInitial: **1/197.6 / 1/193.9 / 1/175.4 / 1/161.1**
- bonusCombined: **1/99.9 / 1/98.1 / 1/89.1 / 1/82.1**
- BT entry combined: **1/99.6 / 1/98.0 / 1/88.8 / 1/81.3**
- base: **約33.6G/50枚（設定1）**
- basicPayout: **BAR BIG最大179枚+BT / 赤7・青7 BIG最大155枚+BT / いせかるぼーなす最大95枚+BT / BT中ボーナス期待度50%以上**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1784 resetBehavior v0.7
- ゲーム数天井・ボーナス間天井は非搭載。
- 設定変更時はBTをRESET。
- 純電源OFF→ONではBTをCARRY_OVER。
- 設定変更時のサブ液晶キャラはランダム、開始ステージは必勝本実戦上「教室」。純電断時の両項目は高優先資料で現在調査中。
- 設定変更による天井短縮、朝一専用モード、固定ゾーン、ボーナス/突BT初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置き時BT途中状態を独立して直接明記した高優先資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間そのものの設定変更/据え置き/純電断契約は、機種固有直接資料を再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率も、機種名・型式・銀座/サミー・設定変更/据え置き等へ検索語を変え、必勝本・HAZUSE・1geki・なな徹・業界記事・後発解析を横断後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / normalization
- 出玉率は資料により市場予想値 `97.9〜109.0%` と完全攻略時 `99.0〜110.6%` がある。必勝本・1gekiが定義を明示しているため平均化せず別系列で保持。
- メーカー表記は「サミー」「銀座」が混在。遊技通信で銀座製を確認し `銀座製造 / サミー` と正規化。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15

### No.1784 A-SLOT+ 異世界かるてっと BT
- サミー公式マイスロニュース: https://www.sammy.co.jp/japanese/myslot/news/
- サミー公式パチスロ製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/index.html
- 遊技通信/P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/32767/yugitsushin
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-22250/
- HAZUSE 機種概要: https://hazuse.com/hd/5s1513/
- HAZUSE 解析: https://hazuse.com/machine/pachislot/5S1513/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89391/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89382/
- 必勝本 コイン持ち: https://hisshobon.com/machineinfo/89374/
- 必勝本 ボーナストリガー: https://hisshobon.com/machineinfo/89388/
- 1geki オンライン遊技説明: https://1geki.jp/slot/l_isekai_quartet/39/
- なな徹 BT解説: https://nana-press.com/kaiseki/machine/1125/36285/
- 情報島 機種情報: https://p-johojima.jp/machine_spec/post-24493/
- P-Summa 2026年4月整理: https://psumma.jp/pachislo/69812/

## 2026-04-06 canonical queue — OPEN 1/6
1. ~~A-SLOT+ 異世界かるてっと BT — No.1784 DONE~~
2. **Lアクダマドライブ — candidate No.1785**
3. スマスロヨルムンガンド
4. L虚構推理
5. 真打 吉宗
6. LB トリプルクラウンセブン

boundary sources:
- 情報島 2026-04-06導入前評価: https://p-johojima.jp/colum/post-29369/
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- P-Summa 2026年4月整理: https://psumma.jp/pachislo/69812/
- 岡崎産業公式PR（LBトリプルクラウンセブン 4/6）: https://prtimes.jp/main/html/rd/p/000000006.000178173.html

## 次回再開地点
- 最新mainを再同期しNo.1784と本handoffを確認。
- **No.1785候補「Lアクダマドライブ」— 2026-04-06** から継続。
- 2026-04-06群は現時点6機確認、残り5機。処理中もPB・別型式・地域先行・延期/段階導入を再監査する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
