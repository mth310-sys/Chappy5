更新日: 2026-09-11

## 現在地点
- recordCount: **1377**
- latestRecordAdded: **アカメが斬る！ — No.1377**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-11-09_akame-ga-kill.md`
- chronologicalFrontier: **2020-11-09**
- frontierLatestMachine: **アカメが斬る！ — No.1377**
- schema: **resetBehavior v0.7**
- status: **2020-11-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1376「華祭」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- 開始時mainの最新handoffは **No.1376 / 2020-11-02群CLOSED**。過去会話の旧地点には戻らず、次の未処理境界から継続。
- 1geki 2020年11月カレンダーを再監査し、11/03～11/08に別パチスロ導入群を確認せず、次は11/09「アカメが斬る！」1機であることを確認。
- No.1377「アカメが斬る！」を性能コア+resetBehavior v0.7で追加。
- 11/09は1geki月間カレンダー上スロット1機であり、パチビー/HAZUSE/業界記事でも導入帯を照合。別型式・別スペック・PBの追加同日機を今回固定できず **2020-11-09群CLOSED** と判定。

## No.1377 — アカメが斬る！
- path: `docs/real_machine_db/machines/2020-11-09_akame-ga-kill.md`
- manufacturer: **七匠**
- formalModel: **SATアカメが斬る！K**
- certificationNumber: **9S1271**
- releaseDate canonical: **2020-11-09**
- releaseDate note: **2020-11-16表記もあり（地域差）**。canonicalは11/09、定義差/地域差を保持。
- generation/system: **6号機 / AT / 擬似ボーナス / 規定G+レア役W抽選 / CZ / 有利区間管理**
- 出玉率: **97.6 / 99.0 / 100.9 / 104.5 / 107.1 / 112.4%**
- BIG: **1/542 / 1/523 / 1/489 / 1/454 / 1/421 / 1/410**
- REG: **1/687 / 1/681 / 1/676 / 1/687 / 1/684 / 1/682**
- 合算: **1/303 / 1/296 / 1/284 / 1/273 / 1/260 / 1/256**
- base: **約50.0G/50枚**
- netIncrease: **約4.0枚/G**
- basicPayout: **BIG 30G約120枚 / REG 15G約60枚 / AT「アカメチャンス」1セット30G+α**
- canonical internal ceiling: **有利区間移行後997Gでボーナス**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS**

### resetBehavior v0.7 — No.1377
- 設定変更: **有利区間→非有利区間 / 天井RESET / 内部状態再抽選**。
- 据え置き・純電源OFF→ON: **有利区間CARRY_OVER / 天井CARRY_OVER / 内部状態CARRY_OVER**。
- DMMぱちタウンはリセット仕様を **高確スタート** と記載。
- 通常時は有利区間ランプ基本消灯型のため **朝一消灯だけでは変更判別不可**。
- 朝一からランプ点灯なら **据え置き + 前日有利区間引き継ぎ状態濃厚**。ランプ位置はクレジット右上の丸型。
- 有利区間継続時は、ボーナス後最大400G / AT後最大300Gへ短縮。これは設定変更恩恵ではなく、前区間引き継ぎ契約として分離。
- 本機固有ガックン条件/発生率、設定変更専用モード振り分け率は横断再探索後も `UNVERIFIED_AFTER_RESEARCH` / `NO_PUBLIC_FULL_TABLE_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers / reset numeric
有利区間リセット後の規定ゲーム数分布（次回REG / 次回BIG）:
- 0～199G: **34.4% / 28.9%**
- 200～399G: **25.4% / 29.3%**
- 400～599G: **14.1% / 18.8%**
- 600～799G: **21.5% / 18.4%**
- 800～999G: **4.7% / 4.7%**

有利区間引き継ぎ時の規定G（ボーナス後 / AT後）:
- 0～99G: **33.6% / 3.1%**
- 100～199G: **50.0% / 57.0%**
- 200～299G: **12.5% / 39.8%**
- 300～399G: **3.9% / なし**

## conflicts / 定義差
- releaseDate: **2020-11-09 vs 2020-11-16（地域差）**。1geki月間カレンダー、パチビー、HAZUSEの11/09をcanonical。
- ceiling: **有利区間移行後997G**（HAZUSE/1geki） / **液晶基準999G**（複数攻略） / **996G+α**（Re.design）。非有利区間中も液晶G数が進むため表示上ズレる説明があり、内部契約997Gをcanonical、表示/営業資料差はCONFLICT/定義差として保持。

## 2020-11-09群監査 — CLOSED
処理済み:
1. **アカメが斬る！ — No.1377**

- 1geki月間カレンダーは11/09を「全1機種 / パチンコ0 / スロット1」とし、本機のみ。
- パチビー・HAZUSE・業界記事・検定資料でも本機の11月上旬導入を照合。
- 11/03～11/08境界にも独立パチスロ導入群を今回固定できず、11/09群をCLOSED。

## 次回本線の再開地点
- 最新main再同期後、**2020-11-10～11-15境界監査**。
- 次の既知未処理は **2020-11-16「パチスロ モンスターハンター:ワールド™」— No.1378候補**。
- 11/16群処理後、月間カレンダーと業界記事で次の導入群へ進む。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。
- 今回は本線を優先し、遡及QA地点は進めていない。

## GitHub保存
- No.1377追加 commit: `149fdee91a02b900aa19bab2787674f71f9a56c7`

## 主要出典 — 取得日 2026-09-11
### No.1377 アカメが斬る！
- https://1geki.jp/newmachinecalender/202011/
- https://1geki.jp/slot/s_akame/3/
- https://hazuse.com/machine/pachislot/9S1271/genre/201/
- https://hazuse.com/machine/pachislot/9S1271/genre/207/
- https://hazuse.com/machine/pachislot/9S1271/genre/205/
- https://www.p-world.co.jp/machine/database/9258
- https://p-town.dmm.com/machines/3767
- https://nana-press.com/kaiseki/machine/87/2086/
- https://slotjin.com/tenjoukitaichi/akame/
- https://chonborista.com/slot/nanashow/120005/
- https://www.slopachi-quest.com/article/akamegakill-tenjjou/
- https://www.pachibee.jp/machines/about/220100004
- https://www.pidea.jp/articles/1590108168
- https://news.p-world.co.jp/articles/14779/yugitsushin
- https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2020091516052001

### 11/09群・次回境界
- https://1geki.jp/newmachinecalender/202011/
