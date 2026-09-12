更新日: 2026-09-12

## 現在地点
- recordCount: **1491**
- latestRecordAdded: **十字架5 — No.1491**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-04-18_jujika5.md`
- chronologicalFrontier: **2022-04-18**
- frontierLatestMachine: **十字架5 — No.1491**
- schema: **resetBehavior v0.7**
- status: **2022-04-18_GROUP_OPEN_1_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1490 `パチスロ この素晴らしい世界に祝福を！` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 2022-04-05〜04-17境界を再確認し、handoff指定の次機種 `十字架5` をNo.1491として登録。次の明確な全国導入群は2022-04-18。
- P-WORLD業界記事/機種DB、HAZUSE、1geki、なな徹、必勝本、イチカツ、ちょんぼりすた、メーカー系プレスリリースを横断し、性能コアとresetBehaviorを照合。
- 正式型式 `S十字架5ZA`、検定番号 `1S1297`、オーゼキ製造/NET販売、2022-04-18導入、6.2号機ATを確認。
- 機械割97.9/98.9/100.9/103.1/106.0/110.1%、AT初当り1/346〜1/239、CZ1/220〜1/179、約33.2G/50枚、AT純増約2.7枚/G。
- 通常天井は有利区間リセット起点で最大1000G+α。モード別は通常A1000G / B700G / C500G / 引き戻し100G(25.0%)・300G(75.0%) / 天国0G(12.5%)・100G(87.5%)。有利区間継続時は700G以下。
- resetBehaviorは設定変更で有利区間・天井・内部モード/状態RESET、据え置き/純電源OFF→ONはCARRY_OVER。
- 有利区間移行ゲームでチェリー/スイカなら通常C59.4%・引き戻し20.3%・天国20.3%、十字架揃いなら引き戻し79.7%・天国20.3%。設定変更専用値ではなく有利区間移行時共通値として区別して保存。
- 変更判別は資料競合。1gekiは朝一点灯=据え置き濃厚/消灯=設定変更濃厚とする一方、HAZUSEは有利区間ランプ基本消灯型でランプ判別困難、朝一数Gの有利区間移行示唆画面を材料とする。`CONFLICT`としてcanonical固定せず保存。
- 本機固有ガックン条件/発生率、レア役以外の設定変更時モード振り分け/朝一一定G以内当選率は十分再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1491 — 十字架5
- path: `docs/real_machine_db/machines/2022-04-18_jujika5.md`
- manufacturer: **オーゼキ製造 / NET（ネット）販売**
- formalModel: **S十字架5ZA**
- inspectionCode: **1S1297**
- releaseDate: **2022-04-18**
- generation/system: **6.2号機 / AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 100.9 / 103.1 / 106.0 / 110.1%**
- ATinitialHit: **1/346 / 1/333 / 1/313 / 1/292 / 1/269 / 1/239**
- CZBloodParty: **1/220 / 1/220 / 1/212 / 1/205 / 1/193 / 1/179**
- baseGamesPer50: **約33.2G/50枚**
- netIncrease: **約2.7枚/G**
- basicPayout: **サモンズロード初期G数は特化ゾーンで決定 / クロスラッシュ20G固定 / オメガバトル平均上乗せ約100.6G・突入時期待約1700枚**
- ceiling: **最大1000G+α、有利区間継続時700G以下。十字架10連続AT非当選の別天井あり**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_CONFLICT**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1491
- **設定変更**: 有利区間・天井・内部モード/状態RESET。
- **据え置き**: 天井進行・内部モード/状態・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード・有利区間CARRY_OVER。
- **ゲーム数/天井**: リセット後最大1000G+α。固定の設定変更専用短縮天井は確認できず。有利区間継続時700G以下は別条件。
- **モード/状態**: 設定変更で再抽選。有利区間移行ゲームの成立役により上位モード抽選あり。
- **有利区間**: 設定変更でRESET / 据え置き・純電断でCARRY_OVER。3000Gタイプ。
- **朝一恩恵/不利**: 1G目がチェリー/スイカなら通常C以上、十字架揃いなら引き戻し以上。ただし設定変更専用ではなく新規有利区間移行時共通。専用不利数値なし。
- **変更判別**: 有利区間ランプ記述が1gekiとHAZUSEでCONFLICT。有利区間移行時の絵本画面は補助判別材料。
- **公開朝一数値**: チェリー/スイカ時 通常C59.4%・引き戻し20.3%・天国20.3%。十字架揃い時 引き戻し79.7%・天国20.3%。レア役以外の専用モード振り分けは未確認。
- **CONFLICT**: 有利区間ランプによる朝一変更判別の可否/扱い。
- **UNVERIFIED_AFTER_RESEARCH**: 本機固有ガックン条件/発生率、レア役以外の設定変更専用モード振り分け、朝一一定G以内当選率。

## 2022-04-18群
既知候補:
1. `十字架5` — **No.1491 処理済み**
2. `超ギラギラ爺サマー` — **未処理**
3. `月華 雅` — **未処理**
4. `2027` — **未処理**

- イチカツ2022年新台一覧と当時業界記事で2022-04-18群を再確認。
- 群は現時点で4機候補。全4機処理後にPB・別型式・25/30φ差・地域先行・延期/段階導入を再監査してCLOSED判定する。
- status: **OPEN_1_OF_4_KNOWN_PROCESSED**。

## 次回本線の再開地点
- **No.1492候補 `超ギラギラ爺サマー` から継続。**
- 続く既知候補: `月華 雅` → `2027`。
- 性能コアとresetBehavior v0.7を同時収集し、公開値欠損は表記揺れ・型式・メーカー・シリーズ名と各リセット検索語を変え、十分再探索後のみUNVERIFIEDとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1491を優先し、遡及QAは未実施。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**を維持。

## GitHub保存
- No.1491追加 commit: `4dad6a58b251ef316033a3d4c1bf360ea132266e`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1491 十字架5
- https://news.p-world.co.jp/articles/19492/nippon
- https://news.p-world.co.jp/articles/19571/playgraph
- https://hazuse.com/machine/pachislot/1S1297/
- https://hazuse.com/machine/pachislot/1S1297/genre/201/
- https://1geki.jp/slot/s_jyujika5/
- https://1geki.jp/slot/s_jyujika5/3/
- https://1geki.jp/slot/s_jyujika5/7/
- https://nana-press.com/kaiseki/machine/333/9465/
- https://www.p-world.co.jp/machine/database/9585
- https://p.hisshobon.jp/machine/3838/1/88396
- https://ichikatsu.com/newslot2022/
- https://chonborista.com/slot/net-slot/164116/
- https://www.dreamnews.jp/press/0000258905
