更新日: 2026-09-12

## 現在地点
- recordCount: **1487**
- latestRecordAdded: **ぱちスロ ウルトラマンタロウ 暴君SPEC — No.1487**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-04-04_ultraman-taro-bokun-spec.md`
- chronologicalFrontier: **2022-04-04**
- frontierLatestMachine: **ぱちスロ ウルトラマンタロウ 暴君SPEC — No.1487**
- schema: **resetBehavior v0.7**
- status: **2022-04-04_GROUP_OPEN_1_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1486 `沖縄フェスティバル-30` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- No.1486 handoff指定の2022-03-29〜04-03境界を確認し、次の既知実導入群2022-04-04へ進行。
- 2022-04-04群の先頭候補 `ぱちスロ ウルトラマンタロウ 暴君SPEC` をNo.1487として登録。
- メーカー公式・業界記事・HAZUSE・必勝本・一撃・ちょんぼりすた等で性能コアを複数照合。
- 型式 `SパチスロウルトラマンタロウMG`、検定番号 `1S1213`、5段階設定1/2/4/5/6、機械割97.6〜110.1%、AT初当り1/472.0〜1/152.2、約32.9G/50枚、純増約2.7枚/Gを確定。
- 天井は9周期消化またはメカカウンタ0pt到達でCZ濃厚。1周期は約78G、解析上9周期は約900G前後目安。
- resetBehaviorはHAZUSEの設定変更/電源ON・OFF比較表を軸に複数資料で照合し、設定変更で天井・有利区間・ウルトラLEVEL・内部状態RESET、純電源OFF→ONはCARRY_OVERとして保存。据え置きもCARRY_OVERとして整理。
- 朝一有利区間ランプは通常時点灯型。消灯=設定変更濃厚、点灯=据え置き濃厚。ただし前日終了状態や店舗対策は例外。
- 有利区間リセット後CZについて資料表現が競合。HAZUSEは『有利区間リセットでCZに突入するタイプ』、別解析は設定変更後を例外扱い/一部内部CZの可能性とするため、設定変更時CZ確定とはせずCONFLICTとして保持。
- 当時公開実戦メモに朝一266台中11台が2G当選（約4.1%）という観測があるが、設定変更済みのみの母集団ではないためLOW_CONFIDENCE_EMPIRICALとして仕様値から分離。
- 本機固有ガックン条件/発生率、設定変更時専用のウルトラLEVEL/内部状態振り分け、確定的な朝一内部CZ率は検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 遡及QAは本線No.1487を優先し、カーソルを据え置いた。

## No.1487 — ぱちスロ ウルトラマンタロウ 暴君SPEC
- path: `docs/real_machine_db/machines/2022-04-04_ultraman-taro-bokun-spec.md`
- manufacturer: **オッケー.（京楽系）**
- formalModel: **SパチスロウルトラマンタロウMG**
- inspectionCode: **1S1213**
- releaseDate: **2022-04-04**
- generation/system: **6.2号機 / AT**
- settings: **1 / 2 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.8 / 102.5 / 106.4 / 110.1%**
- AT初当り: **1/472.0 / 1/341.8 / 1/264.7 / 1/212.8 / 1/152.2**
- CZ: **1/207.8 / 1/173.7 / 1/149.6 / 1/133.7 / 1/109.6**
- 特殊CZ: **1/2167.3 / 1/1748.6 / 1/1470.1 / 1/1262.3 / 1/925.7**
- baseGamesPer50: **約32.9G/50枚**
- netIncrease: **約2.7枚/G**
- basicPayout: **AT 1セット37G+α（30G+α + 継続バトル7G） / 継続率約80%（設定1）**
- ceiling: **9周期消化 or メカカウンタ0ptでCZ濃厚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1487
- **設定変更**: 天井・有利区間・ウルトラLEVEL・内部状態RESET。固定短縮天井は確認できず。
- **据え置き**: 天井進行・ウルトラLEVEL・内部状態・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・ウルトラLEVEL・内部状態・有利区間CARRY_OVER。
- **ゲーム数/天井**: 設定変更で周期進行/メカカウンタ天井をリセット。据え置き/電断は引継ぎ。
- **モード/状態**: 設定変更でRESET。ただし初期振り分け公開値は未確認。
- **有利区間**: 設定変更でRESET。通常時はランプ点灯型。
- **朝一恩恵/不利**: 固定短縮天井なし。朝一内部CZの可能性はあるが設定変更時確定とはしない。不利数値は確認できず。
- **変更判別**: WIN表示右下ドット。朝一消灯=設定変更濃厚、点灯=据え置き濃厚。例外あり。
- **公開朝一数値**: 確定的なreset専用抽選値なし。参考観測として朝一266台中11台が2G当選=約4.1%があるが、設定変更専用値ではないためLOW_CONFIDENCE_EMPIRICAL。
- **CONFLICT**: 有利区間リセット後CZの扱い。設定変更時CZ確定とはせず、資料差をレコード内保持。

## 2022-04-04群
既知候補:
1. `ぱちスロ ウルトラマンタロウ 暴君SPEC` — **No.1487 処理済み**
2. `パチスロひぐらしのなく頃に祭2 カケラ遊び編` — **No.1488候補 / 未処理**
3. `SLOTえとたま` — **No.1489候補 / 未処理**
4. `パチスロ この素晴らしい世界に祝福を！` — **No.1490候補 / 未処理**

- status: **OPEN_1_OF_4_KNOWN_PROCESSED**。
- 群CLOSED判定は4機処理後、PB・別型式・25/30φ差・地域先行・延期/段階導入まで再監査して行う。

## 次回本線の再開地点
- **No.1488候補 `パチスロひぐらしのなく頃に祭2 カケラ遊び編` から継続。**
- 次いで `SLOTえとたま` → `パチスロ この素晴らしい世界に祝福を！` の順で2022-04-04群を処理する。
- 性能コアとresetBehavior v0.7を同時収集し、公開値欠損は検索語・資料系統を変えて十分再探索後のみUNVERIFIEDとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1487を優先し、遡及QAは未実施。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**を維持。

## GitHub保存
- No.1487追加 commit: `f3e705c5664083d3b8e1588cce024f5ec31f40ef`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1487 ぱちスロ ウルトラマンタロウ 暴君SPEC
- https://www.kyoraku.co.jp/news/detail/621
- https://news.p-world.co.jp/articles/20093/nippon
- https://www.p-world.co.jp/machine/database/9609
- https://hazuse.com/machine/pachislot/1S1213/
- https://p.hisshobon.jp/machine/3868/1/88173
- https://chonborista.com/slot/kyoraku-slot/165309/
- https://1geki.jp/slot/s_ultraman_taro/
- https://slot-seven.com/ultramantaro-tenzyou/
- https://ichikatsu.com/ultramantaro/
- https://mokkun7.com/victory/tarou-slot/
- https://news.p-world.co.jp/articles/18388/nippon
