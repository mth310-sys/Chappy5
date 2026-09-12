更新日: 2026-09-12

## 現在地点
- recordCount: **1488**
- latestRecordAdded: **パチスロひぐらしのなく頃に祭2 カケラ遊び編 — No.1488**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-04-04_higurashi-matsuri2-kakera-asobi.md`
- chronologicalFrontier: **2022-04-04**
- frontierLatestMachine: **パチスロひぐらしのなく頃に祭2 カケラ遊び編 — No.1488**
- schema: **resetBehavior v0.7**
- status: **2022-04-04_GROUP_OPEN_2_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1487 `ぱちスロ ウルトラマンタロウ 暴君SPEC` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- mainはNo.1487まで進行済みだったため、handoff指定の2022-04-04群2機目 `パチスロひぐらしのなく頃に祭2 カケラ遊び編` をNo.1488として登録。
- 業界資料、検定通過記事、HAZUSE、なな徹、イチカツ、スロパチクエスト、ちょんぼりすた等で性能コアとresetBehaviorを横断照合。
- 型式 `Sひぐらしのなく頃に祭2カケラ遊び編L5`、検定番号 `1S1826`、6.4号機AT、設定1〜6を確認。
- 市場想定機械割97.8/98.8/99.7/100.9/102.2/104.0%、完全攻略100.5/101.7/102.7/104.0/105.4/108.3%。技術介入条件が異なるため2系列を混ぜず保持。
- 初当り1/249.5〜1/192.5、約43.5〜44.1G/50枚、疑似ボーナス純増約7.8枚/G。初当り青7約47枚、赤7約266枚、BIG平均約266枚、オヤシロBIG平均約377枚。
- 天井は有利区間1500G、液晶カレンダー7月1日（平均約650G）、CZ6回スルー後7回目突破濃厚の3系統。
- resetBehaviorは設定変更で天井・内部状態・有利区間RESET。据え置き/純電源OFF→ONはCARRY_OVERとして整理。
- 有利区間リセット後はCZ `絶対意思ZONE` へ移行する説明を業界資料・解析で確認。CZ一般成功期待度約42%を朝一比較値として保持するが、設定変更専用成功率とは扱わない。
- 本機は6.4号機で有利区間ランプによる変更判別不可。朝一開始ステージが判別材料だが、資料間で `祭具殿` と `古手神社` が競合するためCONFLICTとして保持。
- 本機固有ガックン条件/発生率、設定変更専用モード/状態振り分け、設定変更専用CZ成功率は検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 初当り設定6は複数解析1/192.5に対し一部業界記事1/192.7表記があり、平均化せずalternateを保持。
- 遡及QAは本線No.1488を優先し、カーソルを据え置いた。

## No.1488 — パチスロひぐらしのなく頃に祭2 カケラ遊び編
- path: `docs/real_machine_db/machines/2022-04-04_higurashi-matsuri2-kakera-asobi.md`
- manufacturer: **オーイズミラボ（販売：オーイズミ）**
- formalModel: **Sひぐらしのなく頃に祭2カケラ遊び編L5**
- inspectionCode: **1S1826**
- releaseDate: **2022-04-04**
- generation/system: **6.4号機 / 技術介入要素あり高純増疑似ボーナスAT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRateMarket: **97.8 / 98.8 / 99.7 / 100.9 / 102.2 / 104.0%**
- payoutRateFullStrategy: **100.5 / 101.7 / 102.7 / 104.0 / 105.4 / 108.3%**
- initialHit: **1/249.5 / 1/238.9 / 1/228.6 / 1/220.5 / 1/208.7 / 1/192.5**
- baseGamesPer50: **約43.5〜44.1G/50枚**
- netIncrease: **疑似ボーナス約7.8枚/G**
- basicPayout: **惨劇BONUS約47枚 / BIG平均約266枚 / オヤシロBIG平均約377枚**
- ceiling: **有利区間1500G / カレンダー7月1日平均約650G / CZ7回目突破濃厚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_CONFLICT**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1488
- **設定変更**: 天井・内部状態・有利区間RESET。新規有利区間開始後はCZ状態へ。
- **据え置き**: 天井進行・内部状態・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・内部状態・有利区間CARRY_OVER。
- **ゲーム数/天井**: 設定変更で3系統の進行をリセット。据え置き/電断は引継ぎ。
- **モード/状態**: 設定変更でRESET。専用振り分け数値は未確認。
- **有利区間**: 設定変更でRESET。本機は有利区間ランプによる朝一判別不可。
- **朝一恩恵/不利**: 有利区間リセット後CZへ。CZ一般成功期待度約42%。固定短縮天井は確認できず。不利の確定数値なし。
- **変更判別**: 開始ステージが主要材料。ただし `祭具殿` / `古手神社` で資料CONFLICT。ランプ判別不可。
- **公開朝一数値**: CZ一般成功期待度約42%を適用可能値として保持。リセット専用成功率・専用モード振り分けは未確認。
- **UNVERIFIED_AFTER_RESEARCH**: 本機固有ガックン、設定変更専用モード/状態振り分け、リセット専用CZ成功率。

## 2022-04-04群
既知候補:
1. `ぱちスロ ウルトラマンタロウ 暴君SPEC` — **No.1487 処理済み**
2. `パチスロひぐらしのなく頃に祭2 カケラ遊び編` — **No.1488 処理済み**
3. `SLOTえとたま` — **No.1489候補 / 未処理**
4. `パチスロ この素晴らしい世界に祝福を！` — **No.1490候補 / 未処理**

- status: **OPEN_2_OF_4_KNOWN_PROCESSED**。
- 群CLOSED判定は4機処理後、PB・別型式・25/30φ差・地域先行・延期/段階導入まで再監査して行う。

## 次回本線の再開地点
- **No.1489候補 `SLOTえとたま` から継続。**
- 次いで `パチスロ この素晴らしい世界に祝福を！` を処理し、2022-04-04群を横断再監査してCLOSED可否を判定する。
- 性能コアとresetBehavior v0.7を同時収集し、公開値欠損は検索語・資料系統を変えて十分再探索後のみUNVERIFIEDとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1488を優先し、遡及QAは未実施。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**を維持。

## GitHub保存
- No.1488追加 commit: `440432468220c9de8057317dc320fffe785ff9a9`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1488 パチスロひぐらしのなく頃に祭2 カケラ遊び編
- https://news.p-world.co.jp/articles/19472/nippon
- https://news.p-world.co.jp/articles/19773/nippon
- https://www.yugitsushin.jp/news/maker/20220307-2100/
- https://p-bomb.co.jp/industry/new-machine/3604/
- https://hazuse.com/machine/pachislot/1S1826/
- https://nana-press.com/kaiseki/machine/338/8710/
- https://nana-press.com/kaiseki/machine/338/8712/
- https://ichikatsu.com/higurashi2kakera/
- https://www.slopachi-quest.com/article/higurashi-maturi2-kakeraasobi-tenjou/
- https://chonborista.com/slot/oizumi-slot/165265/
