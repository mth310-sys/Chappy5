更新日: 2026-09-12

## 現在地点
- recordCount: **1493**
- latestRecordAdded: **パチスロ 月華 雅 — No.1493**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-04-18_gekkamiyabi.md`
- chronologicalFrontier: **2022-04-18**
- frontierLatestMachine: **パチスロ 月華 雅 — No.1493**
- schema: **resetBehavior v0.7**
- status: **2022-04-18_GROUP_OPEN_3_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1492 `超ギラギラ爺サマー` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種 `パチスロ 月華 雅` をNo.1493として登録。
- Amusement Japan、K-Navi、1geki、なな徹、ちょんぼりすた、ぱちんこキュレーション、パチスロメソッド等を横断し、性能コアとresetBehavior v0.7を照合。
- 型式 `S月華ZC`、エンターライズ、2022-04-18導入を確認。検定番号は十分な再探索後も信頼できる現存資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 機械割97.3/98.9/100.9/104.5/107.4/110.3%、擬似ボーナス初当り1/203.3〜1/190.4、約25G/50枚、純増約4.0枚/G、BIG平均約290枚・REG平均約100枚。
- 通常最大333G+α。なな徹解析のモード天井は通常A 321G / 通常B 321G / 引き戻し128G / 天国準備333G / 天国・超天国・雅32G。
- 設定変更は天井・内部状態・有利区間RESET。滞在モードを問わず天井を32G短縮。
- 有利区間移行時の引き戻し選択率は設定1〜3で40.6%、設定4〜6で42.6%。残り59.4%/57.4%の細分内訳は公開固定せず推測しない。
- 引き戻し通常天井128Gに設定変更時32G短縮を適用し、朝一引き戻し選択時は最大96G。これは当時資料の朝一96G記載とも整合。
- 据え置きは天井・内部状態・有利区間CARRY_OVER。純電源OFF→ONは天井・内部モード・有利区間CARRY_OVERを確認。高確等を含む全内部状態の個別完全契約は未固定。
- 通常時は初当りボーナスまで有利区間ランプ非点灯のため、朝一消灯単独では変更判別不可。朝一点灯=据え置き濃厚、前日点灯確認→翌朝消灯=設定変更濃厚。
- 本機固有ガックン条件/発生率は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## No.1493 — パチスロ 月華 雅
- path: `docs/real_machine_db/machines/2022-04-18_gekkamiyabi.md`
- manufacturer: **エンターライズ（フィールズ販売）**
- formalModel: **S月華ZC**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-04-18**
- generation/system: **6.2号機 / 擬似ボーナスAT・完全告知**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.3 / 98.9 / 100.9 / 104.5 / 107.4 / 110.3%**
- initialHit: **1/203.3 / 1/201.8 / 1/199.9 / 1/194.8 / 1/192.5 / 1/190.4**
- baseGamesPer50: **約25G/50枚**
- netIncrease: **約4.0枚/G**
- basicPayout: **BIG平均約290枚 / REG平均約100枚**
- ceiling: **通常最大333G+α。モード別321/321/128/333/32/32/32G。**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_NUMERIC_RESET_TABLES**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1493
- **設定変更**: 天井・内部状態・有利区間RESET。全モード天井32G短縮。
- **据え置き**: 天井・内部状態・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード・有利区間CARRY_OVER。モード以外の全内部状態個別契約は一部UNVERIFIED。
- **ゲーム数/天井**: 通常A321G / 通常B321G / 引き戻し128G / 天国準備333G / 天国・超天国・雅32G。設定変更時は各モード32G短縮。
- **モード**: 設定1〜3 引き戻し40.6% / その他59.4%、設定4〜6 引き戻し42.6% / その他57.4%。その他内訳は未固定。
- **有利区間**: 設定変更RESET / 据え置き・純電断CARRY_OVER。
- **朝一恩恵/不利**: 天井32G短縮 + 約40%以上で引き戻し。専用不利数値なし。
- **変更判別**: 朝一消灯単独は不可。朝一点灯=据え置き濃厚。前日点灯→翌朝消灯=変更濃厚。
- **公開朝一数値**: 32G短縮 / 引き戻し40.6%または42.6% / 引き戻し選択時最大96G。
- **UNVERIFIED_AFTER_RESEARCH**: 検定番号、引き戻し以外の全モード細分振り分け、純電断時の全内部状態個別契約、本機固有ガックン。

## 2022-04-18群
既知候補:
1. `十字架5` — **No.1491 処理済み**
2. `超ギラギラ爺サマー` — **No.1492 処理済み**
3. `パチスロ 月華 雅` — **No.1493 処理済み**
4. `2027` — **未処理**

- 現時点の既知4機中3機処理済み。
- `2027` 処理後、PB・別型式・25/30φ差・地域先行・延期/段階導入を横断再監査してCLOSED可否を判定する。
- status: **OPEN_3_OF_4_KNOWN_PROCESSED**。

## 次回本線の再開地点
- **No.1494候補 `2027` から継続。**
- 処理後に2022-04-18群を横断再監査し、漏れがなければ同日群CLOSED判定 → 次の日付群へ進む。
- 性能コアとresetBehavior v0.7を同時収集し、公開値欠損は表記揺れ・型式・メーカー・シリーズ名と各リセット検索語を変え、十分再探索後のみUNVERIFIEDとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）を再QA。
- 既存 `coreStatus: COMPLETE_CORE` は維持。
- RT最大2000G、ボーナス後必ずRT、チェリー入賞でRT終了という通常仕様を再確認。
- 設定変更/据え置き/純電源OFF→ON時のRT内部状態・残ナビ回数・RT継続状態、本機固有ガックン/初期出目等を検索語・資料系統を変えて再探索したが、3条件を比較できる本機固有の直接契約を固定できず一般的5号機挙動から補完しなかった。
- resetBehaviorQAを **PARTIAL_RESEARCH_EXHAUSTED** へ更新。性能COMPLETE_COREは崩していない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）**。Git履歴上、仮面ライダーDX QA後の次カーソルとして明示されていた地点へ前進。

## GitHub保存
- No.1493追加 commit: `0eb34ccdf09d4179b70ead8f023565a839d252c5`
- 仮面ライダーDX reset QA commit: `1ddc5ae31e88f01ae582d814e71927080bb2c1de`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1493 パチスロ 月華 雅
- https://amusement-japan.co.jp/article/detail/10002746/
- https://p-kn.com/slot/3773/
- https://1geki.jp/slot/s_gekkamiyabi/
- https://nana-press.com/kaiseki/machine/339/9653/
- https://nana-press.com/kaiseki/machine/339/9652/
- https://nana-press.com/kaiseki/machine/339/8974/
- https://nana-press.com/kaiseki/machine/339/8976/
- https://chonborista.com/slot/enta-slot/165841/
- https://pachinko-curation.com/28557/
- https://slotmethod.jp/archives/9618/

### 仮面ライダーDX QA
- https://web-greenbelt.jp/00003982/
- https://www.p-world.co.jp/machine/database/4557
- https://p-kn.com/slot/676/
- https://pacnk.com/slot/tools/sh_kriderdxhashiresupabaikuhen.html
- https://5goki.com/sammy
