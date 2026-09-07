# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **894**
- latestRecordAdded: **押し順ケロルン**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-06-22_oshijun-kerorun.md`
- chronologicalFrontier: **2015-06-22**
- frontierLatestMachine: **押し順ケロルン**
- frontierRecord: `docs/real_machine_db/machines/2015-06-22_oshijun-kerorun.md`
- schema: **resetBehavior v0.7**
- status: **2015-06-22_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.893 `2015-06-22_evangelion-kibou-no-yari.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **893件 / 2015-06-22 / GROUP_OPEN**。
- 2015-06-22同日群を再監査し、未登録の山佐 **「押し順ケロルン」** を具体日付き全国導入機として確認。No.894として追加した。
- 全国ホール導入日は複数解析/新台カレンダーで **2015-06-22**。PiDEA Xの **2015-06-21納品予定** は別イベントとして分離し、日付競合として平均・統合していない。

## No.894 — 押し順ケロルン

- record: `docs/real_machine_db/machines/2015-06-22_oshijun-kerorun.md`
- manufacturer: **山佐**
- releaseDate canonical: **2015-06-22**
- generation: **5号機**
- systemType: **AT / 疑似ボーナス特化型AT**
- formal modelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- 機械割: **96.9 / 98.5 / 100.8 / 104.9 / 106.3 / 108.1%**。
- 疑似ボーナス初当たり: **1/206.7 / 203.2 / 191.9 / 186.7 / 182.7 / 177.9**。
- 50枚ベース: **約33G/50枚**。
- 疑似ボーナスAT純増: **約2.9枚/G**。
- BIG: **約215枚**。
- REG: **約50枚**。
- 通常時はモード/内部高確状態の概念なし、ゲーム数天井・ゲーム数解除ゾーン非搭載。
- REG4連続後は次回ボーナスBIG確定。これはゲーム数天井とは別の特殊契約として保持。

### resetBehavior v0.7

- 設定変更後 **初回ボーナスのみストック獲得性能が大幅優遇**。
- 通常時ゲーム数天井・モード・高確状態は非搭載なので、天井短縮・モード再抽選・高確スタートは `NOT_APPLICABLE`。
- 据え置き時についてもゲーム数天井/モード/状態の引継ぎは `NOT_APPLICABLE`。
- REG連内部カウンタの設定変更/据え置き/純電断ごとの明示契約は、十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更を伴わない純電源OFF→ONの本機固有内部契約も `UNVERIFIED_AFTER_RESEARCH`。
- 液晶上の挙動だけでは設定変更を見抜けない。当時攻略にはBIG後のボタン操作時「ポコピーン」が変更推測材料になるとの記載があるが、据え置きでも発生し得るため確定判別ではない。
- 本機固有ガックン判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 公開reset数値

設定変更後初回BIG（期待枚数 / 平均連 / 連チャン比率）:
- 設定1: **718.27枚 / 4.73連 / 72.24%**
- 設定2: **741.96枚 / 4.88連 / 73.46%**
- 設定3: **767.51枚 / 5.04連 / 73.46%**
- 設定4: **772.79枚 / 5.09連 / 73.25%**
- 設定5: **790.51枚 / 5.21連 / 73.26%**
- 設定6: **805.87枚 / 5.29連 / 74.04%**

設定変更後初回REG:
- 設定1: **210.57枚 / 2.41連 / 33.76%**
- 設定2: **224.57枚 / 2.50連 / 34.57%**
- 設定3: **230.74枚 / 2.55連 / 35.29%**
- 設定4: **236.27枚 / 2.59連 / 35.77%**
- 設定5: **242.14枚 / 2.63連 / 35.95%**
- 設定6: **254.79枚 / 2.71連 / 36.20%**

設定変更後初回TOTAL:
- 設定1: **418.03枚 / 3.36連 / 49.49%**
- 設定2: **442.15枚 / 3.50連 / 50.92%**
- 設定3: **458.56枚 / 3.61連 / 51.49%**
- 設定4: **460.57枚 / 3.64連 / 51.44%**
- 設定5: **472.63枚 / 3.71連 / 51.64%**
- 設定6: **488.27枚 / 3.80連 / 52.24%**

### conflicts / definition control

- 性能コアの設定別機械割・初当たりは主要資料で一致。小数省略表示は丸め差としてCONFLICT扱いしない。
- 全国導入 **2015-06-22** とPiDEA Xの **2015-06-21納品予定**は異なるイベントとして保持。
- 「睡蓮の泉」基本24Gと最大32Gは基本滞在/最大連チャン告知区間の定義差として分離し、平均しない。
- REG4連後BIG確定をゲーム数天井と混同しない。

## 2015-06-09～06-21境界監査

- 前リレーで **2015-06-09_TO_2015-06-21_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH** 済み。
- 06/15の店舗単位新台入替・既存機増設記録を全国初導入として混入させない。

## 2015-06-22群監査 — OPEN

処理済み:
1. **ヱヴァンゲリヲン・希望の槍** — ビスティ — No.893。
2. **押し順ケロルン** — 山佐 — No.894。

注意:
- P-WORLDのページ最終更新日を実ホール導入日と誤認しない。
- 検定告示 / 発表 / 納品予定 / テスト導入 / 全国実ホール導入を分離する。
- 06/22群は今回新たな未登録機を1台発見したため、全メーカー横断の最終閉鎖監査を次回もう一度行い **OPENを維持**する。

## 次回再開地点

1. **recordCount 894 / chronologicalFrontier 2015-06-22 / GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.894を再確認。
3. **2015-06-22同日群を全メーカー横断で最終監査**し、具体日付き未登録5号機があれば同日群で追加する。
4. 追加がなければ `2015-06-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とする。
5. その後 **2015-06-23以降の境界監査**へ進み、次の全国実ホール導入アンカーを導入時期順に処理する。
6. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・正式型式名・メーカー・シリーズ名とreset関連検索語を変え、公式・業界記事・当時解析・古いDB・アーカイブ/回顧資料を横断した後だけ使用。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・後継機のresetBehaviorを流用しない。
- 通常モード移行率とreset専用振り分けを分離する。
- 競合資料は平均・恣意的統合せずCONFLICT/制約として保持。
- P-WORLDの最終更新日を導入日として採用しない。

## 主要出典 — 取得日 2026-09-07

### 押し順ケロルン
- PiDEA X: https://pidea.jp/articles/%E5%B1%B1%E4%BD%90%E3%80%8C%E3%82%B1%E3%83%AD%E3%83%AB%E3%83%B3%E3%80%8D%E5%88%9D%E3%81%AE%E6%93%AC%E4%BC%BC%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%97
- PiDEA X 機械選定: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E5%A4%A7%E8%80%83%E5%AF%9F%EF%BC%81%E3%82%B1%E3%83%AD%E3%83%AB%E3%83%B3%E3%81%AE%E5%8C%96%E3%81%91%E3%82%8B%E5%8F%AF%E8%83%BD%E6%80%A7%E3%80%8D
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/a.php
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/h.php
- パチマガスロマガ ゲーム性: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/l.php
- パチマガスロマガ 設定変更時: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/04.php
- パチマガスロマガ ワンポイント: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/203/k01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7719
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/8429/
- すろぱちくえすと リセット: https://www.slopachi-quest.com/article/%E6%8A%BC%E3%81%97%E9%A0%86%E3%82%B1%E3%83%AD%E3%83%AB%E3%83%B3-%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88/
- すろぱちくえすと 機種別: https://www.slopachi-quest.com/kisyubetsu/%E6%8A%BC%E3%81%97%E9%A0%86%E3%82%B1%E3%83%AD%E3%83%AB%E3%83%B3/
- 期待値見える化: https://slotjin.com/tenjou/kelolun/
- 2015年導入新台整理: https://slotnews777.blog.fc2.com/blog-entry-2348.html
