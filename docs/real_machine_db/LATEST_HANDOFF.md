更新日: 2026-09-13

## 現在地点
- recordCount: **1522**
- latestRecordAdded: **パチスロBOØWY — No.1522**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-09-20_pachislot-boowy.md`
- chronologicalFrontier: **2022-09-20**
- frontierLatestMachine: **パチスロBOØWY — No.1522**
- schema: **resetBehavior v0.7**
- status: **2022-09-20_GROUP_CLOSED_2_OF_2_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1520 `CREA Newクレアの秘宝伝` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の2022-09-20群を継続し、No.1521 `S BIG島唄30`、No.1522 `パチスロBOØWY` を性能コア＋resetBehavior v0.7で追加。
- 9/20群について当時導入カレンダー、Greenbelt/P-WORLD、遊技日本、検定通過、解析DB、当時攻略資料を横断し、knownパチスロは上記2機で一致。PB・派生・別型式・地域先行・延期/段階導入を再探索したが、9/20に追加すべき別独立機種は確認できず、2/2でCLOSED判定。

## No.1521 — S BIG島唄30
- path: `docs/real_machine_db/machines/2022-09-20_s-big-shimauta30.md`
- manufacturer: **オリンピアエステート（平和販売）**
- formalModel: **SBIG島唄E2-30**
- inspectionCode: **2S0592**
- releaseDate: **2022-09-20**
- generation/system: **6.5号機 / 30Φ / AT / 擬似ボーナス連チャン / コンプリート機能**
- payoutRate: **97.5 / 98.4 / 100.2 / 104.3 / 108.2%**（設定1/2/3/5/6、設定L公開値未確認）
- AT初当り: **1/318.5 / 306.9 / 286.5 / 250.8 / 222.7**
- baseGamesPer50: **約32.9G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 67G・平均約200枚 / シーサーBIG 100G・平均約300枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**
- confidence: **INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET**

### resetBehavior v0.7 — No.1521
- **設定変更**: 有利区間RESET / 天井RESET / 内部モード再抽選 / 表示0G。
- **据え置き**: 内部G数・天井・内部モードCARRY_OVER。宵越し800G挙動が変更判別材料。
- **純電源OFF→ON**: 有利区間 / 天井 / 内部モードCARRY_OVER、表示は0G。
- **通常天井**: 通常A/B・天国準備A 800G、チャンス/引き戻し200G、天国準備B 32G、SPストック810G。
- **設定変更時モード振り分け（全設定共通）**: 通常A 9.8% / 通常B 9.8% / チャンス30.0% / 天国準備A50.0% / 天国準備B0.4%。
- **朝一恩恵**: 30%で200G天井のチャンス、50%で天国準備A。
- **有利区間ランプ**: 非搭載でランプ判別不可。
- **変更判別**: 宵越しG数/スイカ回数が補助材料。本機固有ガックンは再探索後もUNVERIFIED。
- **低レイヤ未確認**: スイカ回数カウンタ、保持1G連ストック等の設定変更/据え置き/純電断完全契約は `UNVERIFIED_AFTER_RESEARCH`。
- **導入日CONFLICT**: 9/20をcanonical。Greenbelt事前9/19予定、後年資料に10/3本格導入/一部9/20の段階導入表現あり。

## No.1522 — パチスロBOØWY
- path: `docs/real_machine_db/machines/2022-09-20_pachislot-boowy.md`
- manufacturer: **ディ・ライト（製造） / フィールズ（総販売元）**
- formalModel: **SパチスロBOOWY SV**
- inspectionCode: **2S0625**
- releaseDate: **2022-09-20**
- generation/system: **6.5号機 / セット継続型AT / 上位AT**
- payoutRate canonical: **97.0 / 98.9 / 104.2 / 108.6 / 113.0%**（設定1/2/4/5/6、設定L公開値未確認）
- AT初当り: **1/498 / 464 / 377 / 325 / 294**
- baseGamesPer50: **約33.6G/50枚**
- netIncrease: **約2.8枚/G**
- basicPayout: **GIGS 40〜100G / LAST GIGS 100G・最大継続80%**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_BENEFIT**
- confidence: **INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET_CORE / MORNING_BENEFIT_UNVERIFIED**

### resetBehavior v0.7 — No.1522
- **設定変更**: 有利区間RESET / 天井RESET / 内部モード・状態RESET。
- **据え置き**: 天井G数・内部状態/モードCARRY_OVER。
- **純電源OFF→ON**: 有利区間 / 天井 / 内部モードCARRY_OVER。
- **通常天井**: 1480G+α（前兆最大32G）。到達時は上位AT `LAST GIGS` + 1/2で80%ループ選択。
- **朝一再セット先**: 設定変更専用の通常/高確/超高確/超天国等の振り分けは十分再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **朝一恩恵CONFLICT_OF_EVIDENCE_STRENGTH**: 一部攻略/実戦系はAT後同様の序盤優遇・超高確相当を示唆するが、高信頼機種別解析はリセット恩恵「調査中」。canonicalでは確定恩恵にしない。
- **有利区間ランプ**: 非搭載でランプ判別不可。
- **変更判別**: 宵越し1480G+α挙動が補助材料。本機固有ガックン/固定ステージはUNVERIFIED。
- **公開朝一数値（実戦観測）**: 朝一1回目まで総回転2,716,891G / AT5,425回 / 約1/500.8、AT期待枚数689.7枚。ただし据え置き混在可能性ありのため `LOW_CONFIDENCE_EMPIRICAL`。
- **機械割CONFLICT**: 設定6は解析主系列113.0%、Greenbelt導入記事113.3%。平均せずCONFLICT保持。

## 2022-09-20群 — CLOSED 2/2 known
1. `S BIG島唄30` — **No.1521 処理済み**
2. `パチスロBOØWY` — **No.1522 処理済み**

群監査メモ:
- `crankyseven.com/newmachine-info.htm` の当時導入予定一覧は2022-09-20を上記2機として掲載。
- Greenbelt/P-WORLDのBOØWY当日導入記事、遊技日本/P-WORLDのBIG島唄30発表も9/20導入を支持。
- BIG島唄30は地域先行/本格導入日の差を示す後年資料があるためレコード内にCONFLICT保持したが、独立別機種ではない。
- PB・25Φ別型式・同日派生・延期/段階導入を再探索したが、9/20に追加すべき別独立パチスロ機は確認できずCLOSED。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_gaogao-festival-s.md`（ガオガオフェスティバルS）**。
- 今回は本線2022-09-20群の性能コア＋resetBehaviorと群CLOSED監査を優先し、遡及QAカーソルは維持。

## 次回本線の再開地点
- **2022-10-03群へ進む。No.1523候補 `パチスロハードボイルド`。**
- 同日known候補: `パチスロハードボイルド`、`パチスロ バイオハザード RE:2`、`パチスロRYUKYU BEAT-30`、`S笑ゥせぇるすまん4`。
- 当時導入予定一覧では上記4機を2022-10-03として確認。
- No.1521〜1522の性能コアはやり直さず、No.1523から性能コア＋resetBehavior v0.7を収集する。
- 4機処理後、10/3群についてPB・派生・別型式・地域先行・延期/段階導入を再監査し、CLOSED可否を判定する。

## GitHub保存
- No.1521追加 commit: `65eefe47598a3bb37c06e6149f1b979a118b1eac`
- No.1522追加 commit: `997d38734f2ce53e1988a42522f1be7b8d03f7b3`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1521 S BIG島唄30
- https://news.p-world.co.jp/articles/21358/nippon
- https://web-greenbelt.jp/post-62001/
- https://hazuse.com/machine/pachislot/2S0592/
- https://hazuse.com/machine/pachislot/2S0592/genre/207/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympiaestate_slot/01/kr01-1.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympiaestate_slot/01/tj07-1.php
- https://1geki.jp/slot/s_big_shimauta30/
- https://1geki.jp/slot/s_big_shimauta30/3/
- https://nana-press.com/kaiseki/machine/430/10635/
- https://nana-press.com/kaiseki/machine/430/11746/
- https://chonborista.com/slot/orinpia-slot/171917/comment-page-7/
- https://ichikatsu.com/bigshimauta30/

### No.1522 パチスロBOØWY
- https://news.p-world.co.jp/articles/21728/greenbelt
- https://news.p-world.co.jp/articles/21194/greenbelt
- https://hazuse.com/machine/pachislot/2S0625/
- https://1geki.jp/slot/s_boowy/
- https://1geki.jp/slot/s_boowy/4/
- https://nana-press.com/kaiseki/machine/421/11607/
- https://nana-press.com/kaiseki/machine/421/11609/
- https://nana-press.com/kaiseki/machine/421/11589/
- https://www.slopachi-quest.com/article/boowy-tenjou/
- https://chonborista.com/slot/d-light/171041/
- https://altema.jp/pachimo/boowy
- https://ichikatsu.com/boowy/

### 9/20群 / 次群監査
- https://crankyseven.com/newmachine-info.htm
