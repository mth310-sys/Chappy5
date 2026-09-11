更新日: 2026-09-11

## 現在地点
- recordCount: **1343**
- latestRecordAdded: **パチスロ ハナペカ — No.1343**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-02_hanapeka.md`
- chronologicalFrontier: **2020-03-02**
- frontierLatestMachine: **パチスロ ハナペカ — No.1343**
- schema: **resetBehavior v0.7**
- status: **2020-03-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1341「エヴァンゲリオン フェスティバル」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 開始時main最新handoffは No.1341 / 2020-03-02群OPEN_4_OF_6。
- handoff指定どおり `キングオブジャック` をNo.1342、`パチスロ ハナペカ` をNo.1343として追加。
- 2020-03-02群の6機を全処理後、導入予定一覧を再監査。別候補を固定できず `2020-03-02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT` へ移行。
- 遡及QA候補 `やったネ！はるみちゃん` は今回も表記揺れ・メーカー・ART/設定変更/据え置き/電断/ガックンで再探索したが、新たな本機固有reset契約は固定できなかった。既存性能コアは再調査せず維持。次回、レコード側のreset状態正式化から再開する。

## No.1342 — キングオブジャック
- path: `docs/real_machine_db/machines/2020-03-02_king-of-jack.md`
- manufacturer: **ベルコ**
- releaseDate canonical: **2020-03-02**
- generation/system: **6号機 / AT / 擬似ボーナス / 周期抽選 + CZ**
- payoutRate: **97.5 / 99.0 / 101.0 / 104.0 / 107.0 / 110.0%**
- AT初当り: **1/271.3 / 269.1 / 260.9 / 240.8 / 223.0 / 206.5**
- base: **41.5G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **DOUBLE BIG約600枚 / BIG約300枚 / REG約100枚**
- 天井: **777G+α**。通常周期は平均約70.4G、最大111G。

### resetBehavior v0.7 — No.1342
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_FIRST_CYCLE_BENEFIT**
- 設定変更後1周期目は **QUEEN以上（JACK非選択）**。パチマガスロマガ・なな徹等で一致。
- QUEEN成功期待度: 設定1〜6 約25.1 / 25.2 / 25.3 / 25.5 / 25.6 / 25.8%。
- KING成功期待度: 約50.1 / 50.2 / 51.2 / 53.2 / 54.9 / 56.5%。これらは設定変更専用抽選値ではなく、朝一で選ばれるCZ自体の通常性能として定義分離。
- 設定変更/据え置き/純電断時の777G天井内部G、内部高確、有利区間のRESET/CARRY_OVER契約は、検索語と資料系統を変えても本機固有直接資料を固定できず推測補完していない。
- 本機固有ガックン、有利区間ランプ/朝一出目による変更判別もUNVERIFIED_AFTER_RESEARCH。

### No.1342 conflict
- 設定1AT初当りはベルコ公式・複数解析 **1/271.3**。グリーンべると本文のみ **1/273.3**。平均せず `CONFLICT_SETTING1_INITIAL_HIT_1_271_3_VS_1_273_3_SINGLE_INDUSTRY_ARTICLE` とし、公式・複数一致1/271.3をcanonical。
- 導入日は業界記事の3/1納品開始予定と攻略DBの3/2ホール導入開始を定義分離し、releaseDateは2020-03-02。

## No.1343 — パチスロ ハナペカ
- path: `docs/real_machine_db/machines/2020-03-02_hanapeka.md`
- manufacturer: **ニューギン**
- formalModel: **SハナペカY**
- releaseDate canonical: **2020-03-02**
- generation/system: **6号機 / AT / 沖スロ系完全告知 / 高純増擬似ボーナス + CZ**
- setting: **1 / 2 / 5 / 6**
- payoutRate: **97.5 / 101.0 / 106.1 / 110.2%**
- AT初当り: **1/282.0 / 250.5 / 211.2 / 128.8**
- base: **約51G/50枚**
- netIncrease: **約9.0枚/G**
- AT基本: **10G**。初当り後32G CZ、2連目以降32G+α引き戻し区間。
- 天井: **有利区間移行後777G**。

### resetBehavior v0.7 — No.1343
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_DETECTION_GAPS**
- settingChange: **天井RESET / 内部状態RESET / 有利区間RESET**。
- powerCycle: **天井CARRY_OVER / 内部状態CARRY_OVER**。据え置きも同系統として整理。
- 設定変更専用の777G天井短縮は確認できず。天国111Gは通常モード由来として分離。
- 朝一恩恵: **非有利区間中のレア役成立でAT確定**とする当時攻略を確認。非有利区間は平均1〜2G程度とする攻略目安あり（メーカー値ではない）。
- 設定変更時モード振り分け、純電断後液晶ステージ、本機固有ガックン、有利区間ランプによる変更判別は検索語変更後も直接値を固定できずUNVERIFIED_AFTER_RESEARCH。
- 111G以内当選率は解析約30%、業界評価では自力込み34%表記。定義が完全一致しないため平均せず併記。

## 2020-03-02群監査
- 処理済み6機:
  1. S地獄少女 あとはあなたが決めることよ — No.1338
  2. いろはに愛姫 — No.1339
  3. パチスロ ケロット4 — No.1340
  4. エヴァンゲリオン フェスティバル — No.1341
  5. キングオブジャック — No.1342
  6. パチスロ ハナペカ — No.1343
- 導入予定一覧で2020-03-02群が上記6機で一致。
- `2020-03-03〜03-15` は同一覧上で次の主要導入群なし。次の確認済み群は **2020-03-16**。
- 群判定: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次の対象: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan.md`（やったネ！はるみちゃん）。
- 今回追加再探索でも設定変更時ART/内部RT、据え置き/純電断時ART残G、ガックン/初期出目の本機固有契約を新規固定できず。
- 通常ゲーム数天井なし、有利区間制度導入前という既存確認は維持。
- 一般的5号機ART挙動からの補完は禁止。次回はレコード側を `PARTIAL_RESEARCH_EXHAUSTED` に正式化したうえでGit追加順の次候補へ進む。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1343を再取得。
2. **2020-03-03〜03-15境界を最終確認後、2020-03-16群へ進む。**
3. 導入予定一覧で確認済み候補: **`パチスロ<物語>シリーズ セカンドシーズン` / `スペリオーレ` / `みうのおしゃべりパチスロ`**。群全体を別ソースでも再監査し、時系列先頭からNo.1344候補として処理する。
4. 遡及QAは `2007-04-15_yattane-harumi-chan.md` を正式化してから次候補へ進む。

## 主要出典 — 取得日 2026-09-11
### No.1342 キングオブジャック
- BELLCO公式: https://www.s-bellco.co.jp/products/slot/kingofjack/
- P-WORLD: https://www.p-world.co.jp/machine/database/9134
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/12743/greenbelt
- K-Navi: https://p-kn.com/slot/3396/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/104312/
- パチマガスロマガ CZ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/104/czk02.php
- なな徹 天井: https://nana-press.com/kaiseki/machine/27/411/

### No.1343 パチスロ ハナペカ
- 検定通過/PiDEA: https://pidea.jp/articles/%E3%80%8Cpacyborg009n-x1%E3%80%8D%E3%80%8Cs%E3%83%8F%E3%83%8A%E3%83%9A%E3%82%ABy%E3%80%8D%E3%81%8C%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E
- P-WORLD: https://www.p-world.co.jp/machine/database/9125
- 必勝本: https://p.hisshobon.jp/machine/3473/1/76637
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/104343/
- スロパチクエスト: https://www.slopachi-quest.com/article/hanapeka-tennjou/
- 1geki: https://1geki.jp/slot/s_hanapeka/3/
- PiDEA新台評価: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E8%A9%95%E4%BE%A1%E3%80%8Es%E3%83%8F%E3%83%8A%E3%83%9A%E3%82%AB-y%E3%80%8F%E6%A9%9F%E7%A8%AE%E8%A9%95%E4%BE%A1%E5%85%AC%E9%96%8B

### 群監査 / 次境界
- 新台導入予定日一覧: https://crankyseven.com/newmachine-info.htm
  - 2020-03-02群6機、次の2020-03-16群3機を確認。

### 遡及QA やったネ！はるみちゃん
- BELLCO公式: https://www.s-bellco.co.jp/products/slot/yama_harumichan/
- グリーンべると: https://web-greenbelt.jp/00004071/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/05/a.php
- なな徹回顧: https://nana-press.com/post/1618061
