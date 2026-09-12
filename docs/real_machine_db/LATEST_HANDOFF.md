更新日: 2026-09-12

## 現在地点
- recordCount: **1492**
- latestRecordAdded: **超ギラギラ爺サマー — No.1492**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-04-18_super-giragira-jii-summer.md`
- chronologicalFrontier: **2022-04-18**
- frontierLatestMachine: **超ギラギラ爺サマー — No.1492**
- schema: **resetBehavior v0.7**
- status: **2022-04-18_GROUP_OPEN_2_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1491 `十字架5` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種 `超ギラギラ爺サマー` をNo.1492として登録。
- P-WORLD業界記事/機種DB、HAZUSE、1geki、なな徹、必勝本、K-Navi、イチカツ、スロパチクエスト、スロットセブン、パチスロメソッドを横断し、性能コアとresetBehaviorを照合。
- 正式型式 `S超ギラギラ爺夏SB2`、検定番号 `1S1588`、サボハニ、2022-04-18導入を確認。
- 機械割97.1/98.5/99.8/102.0/104.0/106.1%、AT初当り1/762.6〜1/579.0、約39.3G/50枚、AT純増約7.0枚/G。
- 通常時最大200G+αでCZ `ギラチャンス`。天国は150G+α。AT直撃天井ではない。
- AT初期差枚数は `ギラギラアタック` で決定し最低500枚。500/1000/1500/2000/2400枚等のパネルあり。平均AT獲得約860枚は当時解析値として区別保存。
- resetBehaviorは設定変更で天井・有利区間RESET、朝一必ず `爺の間` を経由して20G or 30Gの踊り娘ポイント高確率 `ダイビングステージ` へ移行。据え置きは天井・有利区間・ステージCARRY_OVER。
- 純電源OFF→ONは天井・有利区間・ステージCARRY_OVER。内部状態もCARRY_OVERとする当時解析資料を確認。
- CZ失敗後/AT終了後/有利区間完走後は有利区間リセット。有利区間引継ぎは無し。
- 有利区間ランプは新規有利区間移行直後に即点灯せず、通常時の押し順ナビ発生後に点灯。そのため `朝一消灯` 単独では変更判別を固定せず、朝一点灯=据え置き濃厚、爺の間→ダイビング、消灯→押し順ナビ後点灯等を組み合わせる契約で保存。
- 設定変更専用のモード振り分け/朝一一定G以内CZ・AT当選率/固定短縮天井/本機固有ガックンは十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 号機細分類は資料間で `6.1号機` と `6.4号機` が競合。平均化/強制統一せず `6号機（6.1/6.4表記CONFLICT）` として保存。

## No.1492 — 超ギラギラ爺サマー
- path: `docs/real_machine_db/machines/2022-04-18_super-giragira-jii-summer.md`
- manufacturer: **サボハニ（大都技研系）**
- formalModel: **S超ギラギラ爺夏SB2**
- inspectionCode: **1S1588**
- releaseDate: **2022-04-18**
- generation/system: **6号機（6.1/6.4表記CONFLICT） / AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.1 / 98.5 / 99.8 / 102.0 / 104.0 / 106.1%**
- ATinitialHit: **1/762.6 / 1/723.4 / 1/683.4 / 1/642.7 / 1/609.6 / 1/579.0**
- baseGamesPer50: **約39.3G/50枚（設定1掲載値）**
- netIncrease: **約7.0枚/G**
- basicPayout: **AT初期差枚数最低500枚、500/1000/1500/2000/2400枚等。平均獲得約860枚は解析値。**
- ceiling: **通常最大200G+αでCZ、天国150G+α。AT直撃天井ではない。**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_CONFLICT**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1492
- **設定変更**: 天井・有利区間RESET。内部状態RESETとする当時解析あり。必ず爺の間→ダイビングステージ。
- **据え置き**: 天井・有利区間・ステージCARRY_OVER。内部モード/状態の個別完全契約は一部UNVERIFIED。
- **純電源OFF→ON**: 天井・有利区間・ステージCARRY_OVER。内部状態もCARRY_OVERとする資料あり。
- **ゲーム数/天井**: 通常最大200G+α、天国150G+αでCZ。設定変更専用の固定短縮は確認できず。
- **モード/状態**: 設定変更専用の通常A/B/特殊/天国振り分け表は未確認。新規有利区間で爺の間→ダイビングステージ。
- **有利区間**: 設定変更でRESET / 据え置き・純電断でCARRY_OVER。CZ失敗/AT終了/完走後もリセットし、本機は有利区間引継ぎ無し。
- **朝一恩恵/不利**: ダイビングステージ20G or 30G＝踊り娘ポイント高確率。専用不利数値なし。
- **変更判別**: 朝一ランプ消灯だけで即変更とはしない。朝一点灯=据え置き濃厚、爺の間→ダイビング、消灯→押し順ナビ後点灯は変更材料。
- **公開朝一数値**: ダイビングステージ20G or 30G。専用モード振り分け/一定G以内当選率は未確認。
- **CONFLICT**: 号機細分類6.1 / 6.4。
- **UNVERIFIED_AFTER_RESEARCH**: 設定変更専用モード振り分け、朝一一定G以内CZ/AT当選率、固定リセット恩恵発生率、本機固有ガックン、据え置き時内部モード/状態の個別完全契約。

## 2022-04-18群
既知候補:
1. `十字架5` — **No.1491 処理済み**
2. `超ギラギラ爺サマー` — **No.1492 処理済み**
3. `月華 雅` — **未処理**
4. `2027` — **未処理**

- イチカツ2022年新台一覧と当時業界記事で2022-04-18群を再確認。
- 群は現時点で4機候補。全4機処理後にPB・別型式・25/30φ差・地域先行・延期/段階導入を再監査してCLOSED判定する。
- status: **OPEN_2_OF_4_KNOWN_PROCESSED**。

## 次回本線の再開地点
- **No.1493候補 `月華 雅` から継続。**
- 続く既知候補: `2027`。
- 性能コアとresetBehavior v0.7を同時収集し、公開値欠損は表記揺れ・型式・メーカー・シリーズ名と各リセット検索語を変え、十分再探索後のみUNVERIFIEDとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1492を優先し、遡及QAは未実施。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**を維持。

## GitHub保存
- No.1492追加 commit: `9fd9b3eb33ac9b5abd619d279b91cb55d2ccfdfc`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1492 超ギラギラ爺サマー
- https://news.p-world.co.jp/articles/20228/nippon
- https://news.p-world.co.jp/articles/19797/yugitsushin
- https://hazuse.com/machine/pachislot/1S1588/
- https://1geki.jp/slot/s_sgsummer/
- https://nana-press.com/kaiseki/machine/331/8958/
- https://nana-press.com/kaiseki/machine/331/8961/
- https://www.slopachi-quest.com/article/cyougiragirasamer-tenjou/
- https://slot-seven.com/sgsummer-tenzyou/
- https://slotmethod.jp/archives/9609/
- https://www.p-world.co.jp/machine/database/9601
- https://ichikatsu.com/newslot2022/
- https://p-kn.com/slot/3763/
- https://www.slopachi-quest.com/article/cyougiragirajisamer-settei/
- https://p.hisshobon.jp/machine/3864/1/88968
- https://p.hisshobon.jp/machine/3864/1/88492
