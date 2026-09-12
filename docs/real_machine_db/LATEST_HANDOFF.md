更新日: 2026-09-12

## 現在地点
- recordCount: **1490**
- latestRecordAdded: **パチスロ この素晴らしい世界に祝福を！ — No.1490**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-04-04_pachislot-konosuba.md`
- chronologicalFrontier: **2022-04-04**
- frontierLatestMachine: **パチスロ この素晴らしい世界に祝福を！ — No.1490**
- schema: **resetBehavior v0.7**
- status: **2022-04-04_GROUP_CLOSED_4_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1489 `SLOTえとたま` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の2022-04-04群4機目 `パチスロ この素晴らしい世界に祝福を！` をNo.1490として登録。
- P-WORLD業界記事/機種DB、1geki、ちょんぼりすた、期待値見える化、イチカツ、SLOT HACK、スロットセブン、後年回顧資料を横断して性能コアとresetBehaviorを照合。
- 正式型式 `S この素晴らしい世界に祝福を! ZR`、2022-04-04導入、6.2号機ATを確認。1Sxxxx形式の検定番号は十分再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 機械割97.9/99.0/101.2/104.2/106.0/109.1%、AT初当り1/261.5〜1/216.9、設定1約36.3G/50枚、AT純増約2.9枚/G。
- 通常天井は598G+αで駄女神ぼーなす＋AT。
- resetBehaviorは設定変更で天井・内部状態/ポイント/ランク・有利区間RESET、据え置き/純電源OFF→ONはCARRY_OVER。
- 通常時有利区間ランプ点灯型。前日点灯前提なら朝一消灯=設定変更濃厚、点灯=据え置き濃厚。前日消灯閉店・店舗対策は例外。
- 新規有利区間1周期目は6人目がエリス様となり、設定1でも1周期目区間の出率100%超とされる。ただしAT終了後にも発生するため、設定変更専用恩恵とは扱わない。
- 設定変更時開始ステージは、当時資料の `天界ステージ`、後年回顧の `女神の間ステージ`、複数資料の `調査中` が混在するため `CONFLICT`。canonical固定せず保存。
- 本機固有ガックン条件/発生率、設定変更専用モード振り分け/早当たり率、検定番号は十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1490 — パチスロ この素晴らしい世界に祝福を！
- path: `docs/real_machine_db/machines/2022-04-04_pachislot-konosuba.md`
- manufacturer: **サミー**
- formalModel: **S この素晴らしい世界に祝福を! ZR**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-04-04**
- generation/system: **6.2号機 / AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.0 / 101.2 / 104.2 / 106.0 / 109.1%**
- ATinitialHit: **1/261.5 / 1/251.6 / 1/247.5 / 1/233.5 / 1/230.8 / 1/216.9**
- baseGamesPer50: **約36.3G/50枚（設定1）**
- netIncrease: **約2.9枚/G**
- basicPayout: **このすばぼーなす100枚以上 / ヒロインぼーなす30〜300枚以上 / 上位ATこのすばRUSHは平均ぼーなす9回以上**
- ceiling: **598G+αで駄女神ぼーなす＋AT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_CONFLICT**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1490
- **設定変更**: 天井・内部状態/ポイント/ランク・有利区間RESET。
- **据え置き**: 天井進行・内部状態/ポイント/ランク・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・内部状態等・有利区間CARRY_OVER。
- **ゲーム数/天井**: 通常598G+α。設定変更で新規進行。固定短縮天井なし。
- **モード/状態**: 設定変更で新規有利区間へ入り再抽選。設定変更専用数値表は未確認。
- **有利区間**: 設定変更でRESET。通常時はランプ点灯型。
- **朝一恩恵/不利**: 新規有利区間1周期目6人目エリス様。ただしAT後にも共通するため設定変更専用ではない。専用不利数値なし。
- **変更判別**: 前日点灯前提で朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚。店舗対策・前日消灯閉店を除く。
- **公開朝一数値**: 598G+α天井、1周期目区間は設定1でも出率100%超とされる。設定変更専用の短縮天井/早当たり率はなし/未確認。
- **CONFLICT**: 設定変更時開始ステージ名（天界 / 女神の間 / 調査中）。
- **UNVERIFIED_AFTER_RESEARCH**: 検定番号、本機固有ガックン条件/発生率、設定変更専用モード振り分け/一定G以内当選率。

## 2022-04-04群
既知候補:
1. `ぱちスロ ウルトラマンタロウ 暴君SPEC` — **No.1487 処理済み**
2. `パチスロひぐらしのなく頃に祭2 カケラ遊び編` — **No.1488 処理済み**
3. `SLOTえとたま` — **No.1489 処理済み**
4. `パチスロ この素晴らしい世界に祝福を！` — **No.1490 処理済み**

- 1geki 2022年4月カレンダーは2022-04-04のスロットを4機と明示し、イチカツ2022年新台一覧も同4機で一致。
- PB・別型式・25/30φ差・地域先行・延期/段階導入を含む境界検索でも追加の明確な2022-04-04導入パチスロを確認できず。
- status: **CLOSED_4_OF_4_KNOWN_PROCESSED**。

## 次回本線の再開地点
- 4/5〜4/17境界を監査後、次の明確な導入群 **2022-04-18** へ進む。
- **No.1491候補 `十字架5` から継続。**
- 続く既知候補: `超ギラギラ爺サマー` → `月華 雅` → `2027`。
- 2022-04-18群は現時点で4機。各機処理後、PB・別型式・地域先行・延期を再監査してCLOSED判定する。
- 性能コアとresetBehavior v0.7を同時収集し、公開値欠損は表記揺れ・型式・メーカー・シリーズ名と各リセット検索語を変え、十分再探索後のみUNVERIFIEDとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1490を優先し、遡及QAは未実施。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**を維持。

## GitHub保存
- No.1490追加 commit: `9bc8cfa7fe31d9a63d7adc3439d913d9e0b1f901`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1490 パチスロ この素晴らしい世界に祝福を！
- https://news.p-world.co.jp/articles/19637/nippon
- https://news.p-world.co.jp/articles/19602
- https://www.p-world.co.jp/machine/database/9594
- https://1geki.jp/slot/s_konosuba/
- https://1geki.jp/slot/s_konosuba/3/
- https://1geki.jp/slot/s_konosuba/4/
- https://1geki.jp/slot/s_konosuba/85/
- https://1geki.jp/slot/s_konosuba/90/
- https://chonborista.com/slot/sammy-slot/163658/
- https://slotjin.com/tenjoukitaichi/konosuba/
- https://ichikatsu.com/newslot2022/
- https://1geki.jp/newmachinecalender/202204/
- https://www.nankaikoya.jp/konosuba-kitaichi/
- https://slothack.net/matome/65826/
- https://slot-seven.com/konsu-tenzyou/
