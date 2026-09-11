更新日: 2026-09-11

## 現在地点
- recordCount: **1328**
- latestRecordAdded: **Sリング 恐襲ノ連鎖 — No.1328**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-01-06_s-ring-kyoshu-no-rensa.md`
- chronologicalFrontier: **2020-01-06**
- frontierLatestMachine: **Sリング 恐襲ノ連鎖 — No.1328**
- schema: **resetBehavior v0.7**
- status: **2020-01-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1327「パチスロ1000ちゃん」を再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- 前回handoffどおり2020-01-06群2機目 **「Sリング 恐襲ノ連鎖」**を性能コア＋resetBehavior v0.7でNo.1328として追加。
- 1geki 2020年1月導入カレンダー、K-Navi、P-WORLD、JFJ公式、当時/後年解析を横断し、2020-01-06群のスロットは **パチスロ1000ちゃん / Sリング 恐襲ノ連鎖** の2機を確認。両方処理済みのため **2020-01-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とする。
- 2020-01-14掲載群はパチンコのみ。次の確認済みスロット導入群は **2020-01-20**。

## No.1328 — Sリング 恐襲ノ連鎖
- path: `docs/real_machine_db/machines/2020-01-06_s-ring-kyoshu-no-rensa.md`
- manufacturer: **JFJ（藤商事グループ）**
- formalModel: **`Sリング 恐襲ノ連鎖JA`**
- certificationNumber: **UNVERIFIED**
- releaseDate: **2020-01-06**
- releaseDateNote: 藤商事決算資料の「2019年12月発売」はメーカー発売/出荷月として保持し、全国ホール導入開始日2020-01-06と定義分離。
- generation/system: **6号機 / AT / CZ・疑似ボーナス経由型 / 可変純増**
- payoutRate: **設定1 97.7% / 2 98.5% / 3 100.2% / 4 104.6% / 5 107.4% / 6 110.0%**
- 終焉ノ回廊: **1/404.3 / 393.9 / 373.3 / 342.7 / 322.5 / 304.8**
- SPIRAL BONUS: **1/869.2 / 842.4 / 781.8 / 609.6 / 526.7 / 456.0**
- 初当り合算: **1/367 / 359 / 342 / 316 / 299 / 284**
- base: **約51G/50枚**
- netIncrease: **終焉ノ回廊 約2.0枚/G / SPIRAL BONUS 約5.0枚/G**
- basicPayout: **終焉ノ回廊40G+α / SPIRAL BONUS 10〜100G / 赤7 10G・青7 15G・黒BAR 20G**
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1328
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- 設定変更: **天井RESET / 内部状態再抽選 / 内部モード再抽選 / 有利区間RESET**。
- 据え置き: **内部天井G / 内部状態 / 内部モード / 有利区間を引継ぎ**。
- 電源OFF→ONのみ: **内部天井G / 内部状態 / 内部モード / 有利区間ランプ状態を引継ぎ**。
- 朝一液晶G数とTVモニター/早送り表示は設定変更・据え置きとも非表示になるため、表示だけでは変更判別不可。
- 通常時は有利区間ランプ消灯タイプで、ランプ単独でも設定変更/据え置き判別不可。
- モード別最大規定G数: **通常A 896G / 通常B 768G / チャンス 384G / 天国 128G**。
- 設定変更専用の一律短縮天井、専用モード振り分け、朝一特定G以内当選率、ガックン発生率は十分再探索後も公開確定値を固定できず推測補完しない。

### 公開朝一関連数値
有利区間移行時の成立役別移行先抽選を保存。ただし **設定変更専用率ではなく、有利区間移行時共通契約** として定義分離する。
- ベル: 有利区間移行のみ99.6% / CZ1前兆0.4%
- 弱チェリー: 有利区間移行のみ99.6% / CZ2前兆0.4%
- スイカ: 有利区間移行のみ99.6% / CZ2前兆0.4%
- チャンス目A/B: 有利区間移行のみ66.8% / CZ1前兆32.0% / CZ2前兆0.4% / 終焉ノ回廊前兆0.4% / SPIRAL BONUS前兆0.4%
- 強チェリー: CZ1前兆89.5% / CZ2前兆7.0% / 終焉ノ回廊前兆3.1% / SPIRAL BONUS前兆0.4%

## 2020-01-06群監査
- **パチスロ1000ちゃん — No.1327 処理済み**
- **Sリング 恐襲ノ連鎖 — No.1328 処理済み**
- 1geki 2020年1月新台カレンダーでは1/6スロット掲載は上記2機。
- K-Navi、P-WORLD、各機種解析と照合し、同日追加独立登録候補を今回の再監査で確認できず。
- 判定: **CLOSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- `2007-03_wild7.md`（ワイルド7）を再QA。
- 既存 `coreStatus: PARTIAL` は維持。
- reset側のみ **`PARTIAL_RESEARCH_EXHAUSTED`** へ更新。
- 設定変更/据え置き/純電断時のRT残G・内部RT状態・ボーナス成立/告知状態、ガックン/初期出目/表示、公開朝一数値は、検索語・資料系統を変えて再探索後も機種固有の直接契約を固定できず、一般的5号機挙動から補完しない。
- Git追加順をcommit履歴で確認し、ワイルド7の次は **`docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`（わんぱくパイロット大冒険）**。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1328を再取得。
2. 次の確認済み導入群 **2020-01-20** を再監査し、本線No.1329から継続。
3. 2020-01-20既知候補は、導入カレンダー順に **パチスロ 花伝-30 / 探偵オペラ ミルキィホームズ 1/2の奇跡 / スカイガールズ～ゼロノツバサ～ / パチスロ 花伝**。既存レコード重複をmainで確認し、未処理の最初から登録する。
4. 同日群を全メーカー/PB/地域差/別型式で監査し、CLOSED可否を判定。
5. 遡及QAは **`2007-03_wanpaku-pilot-daibouken.md`** から継続。

## 主要出典 — 取得日 2026-09-11

### No.1328 Sリング 恐襲ノ連鎖
- JFJ公式: https://www.fujimarukun.co.jp/products/s-ring3/
- PiDEA X 検定通過: https://www.pidea.jp/articles/%E3%80%8Cp%E3%81%B1%E3%81%A1%E3%82%93%E3%81%93%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E3%81%BE%E3%81%A9%E3%81%8B%E2%98%86%E3%83%9E%E3%82%AE%E3%82%AB2h5%E3%80%8D%E3%80%8Cs%E3%83%90%E3%82%B8%E3%83%AA%E3%82%B9%E3%82%AF%E7%B5%862ft%E3%80%8D%E3%80%8Cs%E3%83%AA%E3%83%B3%E3%82%B0-%E6%81%90%E8%A5%B2%E3%83%8E%E9%80%A3%E9%8E%96-ja%E3%80%8D%E3%81%8C%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/102105/
- 期待値見える化: https://slotjin.com/slot/ringkyoushuu-reset/
- 1geki 有利区間移行抽選: https://1geki.jp/slot/s_ringkyousyu/46/
- 1geki モード: https://1geki.jp/slot/s_ringkyousyu/42/
- 1geki 終焉ノ回廊: https://1geki.jp/slot/s_ringkyousyu/61/
- P-WORLD: https://www.p-world.co.jp/machine/database/9091
- K-Navi: https://p-kn.com/slot/3357/
- 藤商事 2020年3月期資料: https://assets.minkabu.jp/news/article_media_content/urn%3Anewsml%3Atdnet.info%3A20200529429594/140120200529429594.pdf

### 2020-01群境界
- 1geki 2020年1月新台カレンダー: https://1geki.jp/newmachinecalender/202001/

### 遡及QA
- HAZUSE ワイルド7: https://hazuse.com/i/data/wild7/top.htm
- 5号機クロニクル ラスター: https://5goki.com/luster
- pachinko's blog ワイルド7: https://pachinko.hatenablog.jp/entry/2007/03/wild-seven
- パチマガスロマガ旧DB ワイルド7: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/14/luster_slot_14.php
