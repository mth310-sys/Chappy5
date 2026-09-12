更新日: 2026-09-12

## 現在地点
- recordCount: **1486**
- latestRecordAdded: **沖縄フェスティバル-30 — No.1486**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-03-28_okinawa-festival-30.md`
- chronologicalFrontier: **2022-03-28**
- frontierLatestMachine: **沖縄フェスティバル-30 — No.1486**
- schema: **resetBehavior v0.7**
- status: **2022-03-28_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1485 `パチスロ TIGER ＆ BUNNY SP` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点mainはNo.1485まで進行済み。handoff指定どおり2022-03-08〜03-27境界を監査し、3/7群の次の明確な導入が3/28であることを確認。
- メーカー公式2022-02-02プレスリリースで、30φ `沖縄フェスティバル-30`（型式 `S沖縄フェスティバルEX-30`）は3月下旬納品、25φ `沖縄フェスティバル`（型式 `S沖縄フェスティバルEX`）は納品未定と確認。2022-03-28本線は30φ版のみNo.1486として登録し、25φ版を同日機として混同しない。
- 設定別BB/REG/合算/機械割、約40.4G/50枚、BIG最大252枚、REG最大96枚をメーカー・業界記事・複数解析で照合。
- 天井非搭載の完全告知ノーマルAタイプのため、resetBehaviorは短縮天井・AT/CZモード・朝一専用モード等をNOT_APPLICABLEとして整理。設定変更専用の朝一恩恵/不利/公開朝一数値は確認できず。
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナス等の低レイヤ内部状態、本機固有ガックン、朝一表示による変更判別、有利区間ランプ契約は検索語・型式・メーカーを変えて再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 3/28群は確認できる実導入が30φ版1機。25φ版は当時納品未定のため未処理機として同日群へ置かず、後続時系列で実導入確認が取れた場合のみ独立登録する。
- 遡及QAは本線No.1486と境界監査を優先し、カーソルを据え置いた。

## No.1486 — 沖縄フェスティバル-30
- path: `docs/real_machine_db/machines/2022-03-28_okinawa-festival-30.md`
- manufacturer: **パイオニア**
- formalModel: **S沖縄フェスティバルEX-30**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-03-28**
- generation/system: **6号機 / 30φ・完全告知ノーマルAタイプ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.0 / 98.5 / 100.0 / 103.5 / 105.5 / 108.0%**
- BIG: **1/280 / 1/270 / 1/260 / 1/240 / 1/230 / 1/220**
- REG: **1/455 / 1/439 / 1/425 / 1/399 / 1/385 / 1/366**
- combined: **1/173 / 1/167 / 1/161 / 1/150 / 1/144 / 1/137**
- baseGamesPer50: **約40.4G/50枚（別資料約40G）**
- basicPayout: **BIG最大252枚 / REG最大96枚**
- ceiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_SCOPE_WITH_UNVERIFIED_DEVICE_BEHAVIOR**
- confidence: **HIGH_CORE_MEDIUM_RESET**

### resetBehavior v0.7 — No.1486
- **設定変更**: 天井・規定G数ゾーン非搭載のためゲーム数/天井はNOT_APPLICABLE。朝一専用モード、AT/CZモード、設定変更専用の初当たり優遇は確認されない。
- **据え置き**: 天井・モード持越し狙いはNOT_APPLICABLE。成立済みボーナス等の厳密な低レイヤ状態契約はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 同様に天井はNOT_APPLICABLE。成立済みボーナス等の厳密な保持/初期化契約はUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: ノーマル機のため、朝一客判断に使える本機固有の有利区間リセット恩恵/ランプ判別を確認できず。AT機一般論は転記しない。
- **朝一恩恵/不利**: 設定変更専用の短縮天井、専用モード、初当たり優遇、不利数値は確認できず。
- **変更判別**: 本機固有ガックン条件/発生率、朝一表示契約は再探索後も未確認。
- **公開朝一数値**: `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。
- **注意**: 前回ボーナスから777G以降の単独BIGフリーズは設定4以上濃厚とされる設定推測要素で、天井/リセット恩恵ではないためreset数値へ混入させない。

## 2022-03-28群
既知実導入候補:
1. `沖縄フェスティバル-30`（30φ） — **No.1486 処理済み**

関連発表:
- `沖縄フェスティバル`（25φ / S沖縄フェスティバルEX）はメーカー発表時点で納品開始日未定。3/28導入としては登録しない。

- status: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 3/8〜3/27境界と3/28群を2022年新台カレンダー、メーカー公式、業界記事で照合し、同日実導入の追加独立機種を確認できず。

## 次回本線の再開地点
- **2022-03-29〜2022-04-03の境界を最終監査する。**
- 現時点の次群は **2022-04-04**。
- 既知候補を以下の順で処理する:
  1. **ウルトラマンタロウ 暴君SPEC — No.1487候補**
  2. **パチスロひぐらしのなく頃に祭2 カケラ遊び編 — No.1488候補**
  3. **SLOTえとたま — No.1489候補**
  4. **パチスロ この素晴らしい世界に祝福を！ — No.1490候補**
- 各機種の性能コアとresetBehavior v0.7を同時収集し、同日PB・別型式・25/30φ差・地域先行・延期/段階導入も監査してから4/4群をCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1486と境界監査を優先し、遡及QAは未実施。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**を維持。

## GitHub保存
- No.1486追加 commit: `926c41d734eba301242e7f8a29f39ad6d9a75c98`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1486 沖縄フェスティバル-30
- https://www.slot-pioneer.co.jp/information/pdf/okifes2022.pdf
- https://p-bomb.co.jp/industry/new-machine/3343/
- https://www.p-world.co.jp/machine/database/9581
- https://ichikatsu.com/newslot2022/
- https://chonborista.com/slot/pionia-slot/165458/
- https://1geki.jp/slot/s_okinawafestival30/
- https://p-kn.com/slot/3751/
- https://pachinko-curation.com/28405/

### 次候補/境界監査
- https://ichikatsu.com/newslot2022/
