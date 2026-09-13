更新日: 2026-09-13

## 現在地点
- recordCount: **1603**
- latestRecordAdded: **パチスロ ケンガンアシュラ — No.1603**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-11-20_kengan-ashura.md`
- chronologicalFrontier: **2023-11-20**
- frontierLatestMachine: **パチスロ ケンガンアシュラ — No.1603**
- schema: **resetBehavior v0.7**
- status: **2023-11-20_GROUP_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1602 `L ひぐらしのなく頃に 業` を確認して開始。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 遡及QA `2007-07-08_marvel-heroes.md` を正式更新し、既存 `COMPLETE_CORE` を維持したまま `qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED` へ確定。
- 時系列本線は2023-11-20 `パチスロ ケンガンアシュラ` をNo.1603として性能コア + resetBehavior v0.7で追加。
- 2023-11-20一覧には一部資料で `L ひぐらしのなく頃に 業` も掲載されるが、本DBでは2023-11-06をcanonicalとしてNo.1602処理済み。一部地域11/20は既存レコードで保持済みのため、11/20新規canonical群はケンガンアシュラ1機と判定しCLOSED。

## No.1603 — パチスロ ケンガンアシュラ
- path: `docs/real_machine_db/machines/2023-11-20_kengan-ashura.md`
- manufacturer: **ネット**
- formalModel / inspectionCode: **LケンガンアシュラND / 3S0630**
- releaseDate: **2023-11-20**
- generation/system: **6.5号機 / スマスロAT / CZ突破型 / 上位・最上位AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 98.9 / 101.1 / 103.8 / 106.7 / 110.3%**
- AT初当り: **1/399.6 / 1/389.9 / 1/354.5 / 1/315.4 / 1/285.5 / 1/256.2**
- CZ: **1/177.6 / 1/177.1 / 1/170.3 / 1/161.2 / 1/154.0 / 1/145.9**
- base: **約35.5G/50枚**
- 純増: **メインAT約2.5枚/G / 最上位AT約5.0枚/G**
- main AT: **初期50G+α**
- ceiling: **CZ間最大400G+α / CZ最大7回失敗後の8回目でAT**
- reset: **有利区間RESET / 天井RESET / 拳願ポイント再抽選 / CZスルー回数RESET・内部状態RESETとする解析あり**。
- carry: 据え置きは有利区間・天井・拳願pt CARRY_OVER。CZスルー/内部状態の据え置き個別明記は高信頼資料で未固定。
- pure power: **CZ間G / CZスルー / 内部状態 / 拳願pt / 有利区間CARRY_OVER**とする機種別解析資料あり。
- reset benefit: **拳願ポイント初期抽選**。二次資料にCZスルー回数天井の優遇/短縮説あり。ただし具体的短縮回数・振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- reset detection: 有利区間ランプ判別不可。設定変更/純電断とも乃木会長室開始とする解析あり、見た目判別不可。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS_WITH_UNQUANTIFIED_RESET_PREFERENCE**
- record commit: **5f8f82b710d411df292f7c708df968d885e12936**

## 2023-11-20群 — CLOSED 1/1 canonical
1. パチスロ ケンガンアシュラ — No.1603 **DONE**

監査注記:
- 11/20導入一覧に `Lひぐらしのなく頃に 業` を載せる資料があるが、同機は11/06 canonical No.1602処理済みで地域差扱い。
- PB / 別型式 / 同日地域先行を再探索し、追加の未処理canonical機は確認できず。

## resetBehavior 遡及QA進捗
- 今回完了: `2007-07-08_marvel-heroes.md` マーベルヒーローズ — **PARTIAL_RESEARCH_EXHAUSTED**（既存COMPLETE_CORE維持）。
- 設定変更後の内部高確スタート、および15枚役取りこぼし契機の30G周期観察による変更推測は維持。
- 据え置き時の内部高確/RT/CZ/ART残状態、純電源OFF→ON時の状態、ART/CZ/潜伏中の設定変更時残状態、本機固有ガックンは、表記揺れ/型式/メーカー/関連検索語を変え当時解析・旧DB・回顧資料を横断した後も直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE**。
- QA commit: **c01ef81efc4c4689bcb7cc561b853ff1eb05a2eb**
- 次カーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T候補。最新mainで存在/順序を再確認してから処理）。

## 次回再開地点
1. 最新mainを再同期し、No.1603・Marvel QA・本handoffの反映を再取得確認。
2. 時系列本線は **2023-12-01 `推しスロ アイドルVer.`** を最優先候補として再監査。
   - 実導入は《ミクちゃんガイア三宮店》専用フロア55台が2023-12-01オープンしたことをAmusement Japan / グリーンべるとで確認済み。
   - P-WORLDは `S推しスロDA / 3S0885 / DAXEL / 2023-12-01` を掲載。
   - ただし同一型式 `S推しスロDA` の公安委員会検定通過記事が2024-04にも存在するため、検定時系列の扱いを次回再確認し、競合/再検定・再公示の可能性を平均化せず整理してからNo.1604を確定する。
   - 性能既知候補: 設定1〜5、機械割 `94.8 / 99.6 / 100.0 / 100.0 / 100.0%`、約52.1G/50枚、純増約3.0枚/G、150G固定天井。
   - resetBehavior固有資料は現時点で乏しいため、設定変更/据え置き/純電断/天井/有利区間/ガックンを型式・PB名・DAXEL名で追加横断してから `RESEARCH_EXHAUSTED` 判定する。
3. その次は2023-12-04群。グリーンべると12/3更新一覧では少なくとも `Lラブ嬢3～Wご指名はいかがですか？～ / Lリングにかけろ1 V / ニューシオサイ / L花の慶次～佐渡攻めの章` を確認。別資料ではモンキーターンV等も12/4掲載があるため、次回は一覧差分・実導入・地域差を再監査して群件数を固定する。
4. 遡及QAは `2007-07-09_genju-haou-t.md` 候補から継続。

## 今回参照した主要ソース
取得日: 2026-09-13
- 遊技通信web 検定通過: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%812023%E5%B9%B48%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%888%E6%9C%887/
- P-WORLD ケンガンアシュラ: https://www.p-world.co.jp/machine/database/9908
- P-WORLD/遊技日本 ケンガンアシュラ発表: https://news.p-world.co.jp/articles/25331/nippon
- 一撃 ケンガンアシュラ: https://1geki.jp/slot/l_kengan_ashura/39/
- 一撃 天井: https://1geki.jp/slot/l_kengan_ashura/3/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/635/17827/
- なな徹 天井: https://nana-press.com/kaiseki/machine/635/17825/
- なな徹 拳願ポイント: https://nana-press.com/kaiseki/machine/635/17831/
- ぽこすろっと: https://www.nankaikoya.jp/kenganashura-kitaichi/
- フリック7: https://flick7.net/slot/kengan_ashura__k.php
- 2023-11-20導入カレンダー: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/11%E6%9C%8820%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- Amusement Japan 推しスロ12/1実導入: https://www.amusement-japan.co.jp/article/detail/10003979/
- グリーンべると 推しスロ専用フロア: https://web-greenbelt.jp/post-78770/
- P-WORLD 推しスロ: https://www.p-world.co.jp/machine/database/9917
- 遊技日本 S推しスロDA検定通過: https://news.p-world.co.jp/articles/27467/nippon
- K-Navi マーベルヒーローズ: https://p-kn.com/slot/618/
- P-WORLD マーベルヒーローズ: https://www.p-world.co.jp/machine/database/4782
- HAZUSE マーベルヒーローズ: https://hazuse.com/machine/pachislot/7S0161/
- A-SLOT マーベルヒーローズ: https://www.a-slot.com/SHOP/taiyo_elec1.html

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 既存COMPLETE_COREは性能完了を示し、reset QA状態は別管理する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIED/RESEARCH_EXHAUSTEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
