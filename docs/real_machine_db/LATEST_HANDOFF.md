更新日: 2026-09-12

## 現在地点
- recordCount: **1402**
- latestRecordAdded: **ニューパルサーSPⅢ — No.1402**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-04-05_new-pulsar-sp3.md`
- chronologicalFrontier: **2021-04-05**
- frontierLatestMachine: **ニューパルサーSPⅢ — No.1402**
- schema: **resetBehavior v0.7**
- status: **2021-04-05_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコードNo.1401を再取得して開始。
- `INDEX.md` は旧表示（19件地点）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 開始時点はNo.1401「絶対衝激Ⅲ」、2021-03-22群CLOSED。次回指定どおり2021-03-23〜04-04境界を再確認し、2021-04-05群へ進行。
- 1geki 2021年4月カレンダーは04/05のパチスロを2機として掲載。イチカツでも「ニューパルサーSP3」「1000ちゃん ごらくバージョン」を同日導入として確認。
- No.1402「ニューパルサーSPⅢ」を追加し、性能コア + resetBehavior v0.7を同時収集。
- 本機は6号機純ボーナスのため、天井・AT/ART内部モード・内部状態・有利区間は非該当。演出選択モードの電断保持と本機固有ガックンは十分な再探索後も直接固定できずUNVERIFIEDとした。
- 遡及resetBehavior QAは本線を優先し、カーソルを動かしていない。

## No.1402 — ニューパルサーSPⅢ
- path: `docs/real_machine_db/machines/2021-04-05_new-pulsar-sp3.md`
- manufacturer: **山佐（販売: 山佐ネクスト）**
- formalModel: **SニューパルサーSP3CC**
- certificationNumber: **0S0179**
- releaseDate: **2021-04-05**
- generation/system: **6号機 / ノーマル / 純ボーナス / 5段階設定（1・2・3・4・6）**
- payoutRateBySetting: **97.1 / 98.3 / 100.0 / 104.1 / 108.1%**
- BIG: **1/295.2 / 293.9 / 292.6 / 280.1 / 267.5**
- REG: **1/428.3 / 414.8 / 385.5 / 306.2 / 267.5**
- bonusCombined: **1/174.8 / 172.0 / 166.3 / 146.3 / 133.7**
- baseGamesPer50: **約42G/50枚**
- basicPayout: **BIG最大259枚 / REG104枚固定**
- ceiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABILITY_WITH_UNVERIFIED_UI_POWER_STATE**

### resetBehavior v0.7 — No.1402
- 設定変更: 天井・AT/ART内部モード・高確/低確等の内部状態・有利区間は機械仕様上非該当。朝一専用の出玉抽選状態は確認されない。
- 据え置き/純電源OFF→ON: 引継ぎ対象となる天井G・AT系内部モード・有利区間は非搭載のため `NOT_APPLICABLE`。
- ノーマル/フラッシュ/ドットの3モードはプレイヤー選択の演出モードであり、出玉モードとは分離。電断/設定変更後の演出モード保持は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH_UI_ONLY`。
- gameCounterReset / ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE`。短縮天井もなし。
- advantageousSectionReset: 純ボーナスタイプで有利区間を使用しないため `NOT_APPLICABLE`。
- resetBenefits / Penalties: 設定変更専用の定量的な朝一恩恵・不利は公開資料で確認できず、構造上の非該当項目と未確認項目を分離して保存。
- resetDetection: 有利区間ランプ・天井G差による判別は非該当。本機固有のリールガックン条件/発生率は表記・型式・検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 固定短縮天井/設定変更専用AT・CZ数値は `NOT_APPLICABLE`。設定変更専用ボーナス当選率は `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## 2021-04-05群 — OPEN
固定キュー:
1. **ニューパルサーSPⅢ — No.1402 / DONE**
2. **Sパチスロ1000ちゃんごらくver. — No.1403候補 / NEXT**

- 1geki 2021年4月カレンダーは04/05のパチスロを2機として掲載。
- イチカツも同日2機を掲載。
- `Sパチスロ1000ちゃんごらくver.` はオーイズミ、ダイナムPBのA+AT機として複数資料で04/05導入を確認済み。
- No.1403処理後、地域機・PB・別型式・別スペック・延期差を再監査して04/05群のCLOSED可否を判定する。
- status: **2021-04-05_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED**。

## 次回本線の再開地点
- 最新main再同期後、**No.1403候補「Sパチスロ1000ちゃんごらくver.」**から継続。
- 型式/検定番号、性能コア、天井、有利区間、設定変更/据え置き/純電断、モード・状態、朝一恩恵/不利、変更判別、公開朝一数値をv0.7で収集する。
- 本機はダイナムPBのため、親機「パチスロ1000ちゃん」との数値混同を避け、ごらくver.専用スペックをcanonicalとする。
- 処理後に04/05群を全メーカー・地域機・PB・別型式・別スペック・延期差まで再監査する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）**。
- 今回は本線を優先したためカーソル未移動。

## GitHub保存
- No.1402追加 commit: `aa4b6dcd7c3180ffa8ea337ba35d3e6455c76c77`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1402 ニューパルサーSPⅢ
- https://hazuse.com/machine/pachislot/0S0179/
- https://amusement-japan.co.jp/article/detail/10002121/
- https://1geki.jp/slot/s_newpulsar_sp3/
- https://chonborista.com/slot/yamasa-slot/129884/
- https://ichikatsu.com/newslot/
- https://nana-press.com/kaiseki/machine/116/3382/
- https://29den.com/newpulsarsp3/
- https://kenslo65536.com/kaiseki/new-pulsar-sp3.html
- https://www.pachinow.jp/s5/newpulsarsp3-index.php
- https://item.rakuten.co.jp/auc-nakaiti/newpulsar_sp3cc/

### 2021年4月境界 / 次回候補
- https://1geki.jp/newmachinecalender/202104/
- https://ichikatsu.com/newslot/
- https://chonborista.com/slot/oizumi-slot/137312/
