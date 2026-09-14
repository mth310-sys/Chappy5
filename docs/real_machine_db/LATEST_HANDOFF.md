更新日: 2026-09-15

## 現在地点
- recordCount: **1783**
- latestRecordAdded: **スマスロ サンダーV — No.1783**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-03-02_smartslot-thunder-v.md`
- chronologicalFrontier: **2026-03-02**
- schema: **resetBehavior v0.7**
- status: **2026-03-02_BOUNDARY_CLOSED_2_OF_2_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1782を再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 直前handoffの次の未処理No.1783 `スマスロ サンダーV` を追加。
- 2026-03-02群は情報島・P-Summa・導入カレンダーで `スマスロ 甲鉄城のカバネリ 海門決戦` と `スマスロ サンダーV` の2機一致を確認し、2/2完了としてCLOSED。
- 2026年3月のパチスロ新台は主要月間整理資料でもこの2機のみ。次の本線導入日は2026-04-06群。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は未解決のまま性能コア本線と分離し、推測更新は行っていない。

## No.1783 — スマスロ サンダーV
- path: `docs/real_machine_db/machines/2026-03-02_smartslot-thunder-v.md`
- manufacturer: **エレコ / ユニバーサルエンターテインメント**
- formalModel: **LB／スマスロサンダーVHA**
- inspectionCode: **5S0895**
- releaseDate: **2026-03-02**
- settings: **1 / 2 / 5 / 6**
- payoutRate marketEstimate: **98.5 / 100.0 / 102.9 / 106.0%**
- payoutRate fullStrategy: **100.5 / 102.0 / 105.0 / 108.1%**
- BIG: **1/277.7 / 1/275.4 / 1/270.8 / 1/264.3**
- REG: **1/434.0 / 1/394.8 / 1/344.9 / 1/313.6**
- bonus combined: **1/169.3 / 1/162.2 / 1/151.7 / 1/143.4**
- base: **約35.2G/50枚（設定1）**
- basicPayout: **BIG 約303〜304枚+α / REG最大107枚 / 雷神ループ約15%**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1783 resetBehavior v0.7
- ゲーム数天井・ボーナス間天井・周期・ポイント・スルー契機は非搭載。
- 設定変更時はBTをRESET。演出モードは必勝本実戦上スタンダードモードへ。
- 純電源OFF→ONではBTをCARRY_OVER。電源OFF→ON時の演出モードは高優先資料で現在調査中。
- 据え置き時も天井/朝一専用モードはなく、前日設定に応じた通常抽選が継続する整理資料を確認。ただし据え置き時BT途中状態を独立語句で直接明記した高優先機種固有資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更による天井短縮・朝一専用モード・朝一専用初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間そのものの設定変更/据え置き/純電断契約は、機種固有直接資料を十分に再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率も、型式名・エレコ・ユニバーサル・設定変更/据え置き等へ検索語を変え、必勝本・スロマガ系・解析サイト・業界記事を横断後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / normalization
- BIG総獲得表記は資料により303枚/約304枚+α。BONUS GAME179枚 + JAC GAME125枚という構成との表記定義差として `APPROXIMATION_OR_DEFINITION_DIFFERENCE` を保持。
- 設定変更時演出モードは「実戦上スタンダード」、純電断時は「現在調査中」。外見上の確定変更判別には使わない。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15

### No.1783 スマスロ サンダーV
- ユニバーサル公式製品サイト: https://www.universal-777.com/product/slot/thunder_v_2026/
- ユニバーサル公式ニュース: https://www.universal-777.co.jp/news/20260529002508/
- HAZUSE 機種概要/検定番号: https://hazuse.com/hd/5s0895/
- HAZUSE 解析: https://hazuse.com/machine/pachislot/5S0895/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89180/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89171/
- 必勝本 ボーナストリガー: https://hisshobon.com/machineinfo/89178/
- 1geki ボーナス抽選: https://1geki.jp/slot/l_thunder_v/42/
- 1geki 基本ゲーム性: https://1geki.jp/slot/l_thunder_v/41/
- なな徹 通常時: https://nana-press.com/kaiseki/machine/1106/35481/
- 遊技通信/P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/32498/yugitsushin
- 情報島 発表記事: https://p-johojima.jp/new_machine/post-21259/

### 2026-03-02 boundary audit
- 情報島 導入前評価（対象2機）: https://p-johojima.jp/colum/post-27100/
- 情報島 導入後評価（対象2機）: https://p-johojima.jp/colum/post-27876/
- P-Summa 2026年3月整理: https://psumma.jp/pachislo/69482/
- 導入カレンダー: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/3%E6%9C%882%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE

## 2026-03-02 canonical queue — CLOSED 2/2
1. ~~スマスロ 甲鉄城のカバネリ 海門決戦 — No.1782 DONE~~
2. ~~スマスロ サンダーV — No.1783 DONE~~

## 次の本線候補 — 2026-04-06群
複数資料で以下6機を確認。次回は最新main再同期後に重複/追加を再監査してからNo.1784を確定する。
1. **A-SLOT+ 異世界かるてっと BT — candidate No.1784**
2. Lアクダマドライブ
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
- 最新mainを再同期しNo.1783と本handoffを確認。
- **No.1784候補「A-SLOT+ 異世界かるてっと BT」— 2026-04-06** から継続。
- 2026-04-06群は現時点6機確認。処理中もPB・別型式・地域先行・延期/段階導入を再監査する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
