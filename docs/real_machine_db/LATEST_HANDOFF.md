更新日: 2026-09-10

## 現在地点
- recordCount: **1180**
- latestRecordAdded: **ドリームクルーン500**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-03-19_dream-croon-500.md`
- chronologicalFrontier: **2018-03-19**
- frontierLatestMachine: **ドリームクルーン500 — No.1180**
- schema: **resetBehavior v0.7**
- status: **2018-03-19_GROUP_OPEN_1_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1179 `ニューシオサイ-30` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1179件 / chronologicalFrontier 2018-03-05 / 3/5群CLOSED**。
- 2018-03-06以降を当時カレンダー・業界記事・解析・後年一覧で横断。
- PiDEA Xの後年設置期限一覧に`美ラメキ！`を2018-03-12とする表記があるが、藤商事発表会記事・PiDEA X当時記事・複数解析は2018-07-02導入で一致するため、3/12群へ誤混入させない。
- HAZUSEの2018年3月カレンダーは3/5の次を3/19としており、年次一覧と当時資料を照合して3/19群候補を`ドリームクルーン500` / `パチスロ マイケル・ジャクソン` / `カンフーレディ・テトラ`として確認。
- 先頭未登録の`ドリームクルーン500`をNo.1180としてperformance core + resetBehavior v0.7で追加。

## No.1180 — ドリームクルーン500
- path: `docs/real_machine_db/machines/2018-03-19_dream-croon-500.md`
- manufacturer: **オーイズミ**
- releaseDateCanonical: **2018-03-19**
- formalModelName: `ドリームクルーン/GX`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- generation/system: **5.9号機 / A+ART / リアルボーナス+差枚数管理ART**
- 機械割: **97.8 / 98.5 / 100.4 / 103.2 / 105.1 / 108.0%**
- 大当たり初当たり: **全設定共通1/489.1 canonical**（業界記事1/489.0は丸め差）
- 50枚ベース: **31.2 / 31.7 / 32.5 / 33.8 / 35.8 / 36.6G**
- ART純増: **ボーナス込み約2.0枚/G**
- リアルボーナス: **約276枚**
- ART: **1R約100枚、初当たり最低5R=約500枚、初当たり最大15R=約1500枚**
- 天井: **非搭載**

### resetBehavior v0.7
- 天井非搭載のため`gameCounterReset`/`ceilingAfterReset`の天井項目は`NOT_APPLICABLE`。
- ちょんぼりすたの本機朝一リセット欄は`調査中`。
- 機種名/正式型式/メーカー/シリーズ名と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「有利区間」「ガックン」「クルーン」を組み替え、当時解析・業界記事・古いDB・後年資料を横断したが、設定変更/据え置き/純電断時の有利区間、内部状態、成立済みボーナス、初期表示等の本機固有直接契約は固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプ点灯中はART関連抽選が継続しているため即ヤメ注意という当時攻略情報は確認。ただし設定変更時の有利区間処理を一般論で補完しない。
- 朝一専用モード、天井短縮、初当たり/クルーン優遇、主要不利要素、設定変更専用公開数値は`NONE_CONFIRMED_AFTER_RESEARCH`または`NOT_APPLICABLE`。
- 本機固有ガックン/初期出目/ランプによる変更判別は`UNVERIFIED_AFTER_RESEARCH`。

## CONFLICT / 品質メモ
- `ROUNDING_INITIAL_HIT_489_0_VS_489_1`: Amusement Japanは1/489.0、複数解析は1/489.1。丸め精度差として精密値1/489.1をcanonical。
- 一部中古実機DBにsystemType=`ノーマルA`表記があるが、同ページ本文・業界記事・P-WORLD・複数解析はリアルボーナス+ART/A+ARTで一致するため、カテゴリ誤表記として性能分類へ採用しない。
- certificationNumberは`ドリームクルーン/GX`、オーイズミ、検定番号、7S等へ検索語を変えても直接固定できず`UNVERIFIED_AFTER_RESEARCH`。

## 2018-03-05→03-19境界監査
- HAZUSEカレンダーは2018年3月のパチスロ導入日枠を03-05 / 03-19と掲載。
- `美ラメキ！`の03-12表記は後年一覧の誤記と判断。2018-05の藤商事プレス発表会で7月導入予定、複数解析で2018-07-02導入が一致。
- 3/19候補として`ドリームクルーン500`、`パチスロ マイケル・ジャクソン`、`カンフーレディ・テトラ`を複数資料で確認。
- No.1180で`ドリームクルーン500`を処理済み。3/19群はOPEN継続。

## 継続注意事項
- `ドリームクルーン500`と後継`ドリームクルーン711`（2018-12-03）、6号機`ドリームクルーン2`を混同しない。
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- 5.9号機の有利区間一般論を本機固有resetBehaviorへ推定転記しない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1180を再取得。
2. **1180件 / chronologicalFrontier 2018-03-19 / 3/19群OPEN / 1機処理済み** を正本として継続。
3. 次候補 **`パチスロ マイケル・ジャクソン` = No.1181候補** を既存表記揺れまで照合して未登録ならperformance core + resetBehavior v0.7で処理。
4. その後 **`カンフーレディ・テトラ` = No.1182候補**。
5. 3/19同日全メーカー・別スペック・表記揺れを横断監査し、漏れがなければ`2018-03-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1180 ドリームクルーン500
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000495/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%80%E6%92%83500%E6%9E%9A%E4%BB%A5%E4%B8%8A%EF%BC%81%E8%88%88%E5%A5%AE%E3%81%AE%E4%B8%80%E7%99%BA%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%80%8C%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%B3500%E3%80%8D%EF%BC%8F%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F
- P-WORLD: https://www.p-world.co.jp/machine/database/8594
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/55537/comment-page-2/
- 2-9伝説: https://29den.com/dreamcroon/
- パチスロデータ: https://pachislo-data.com/ooizumi/62989
- スロパチクエスト: https://www.slopachi-quest.com/article/dream-croon/
- 中一商事: https://www.nakaiti.com/html/sOizumi098.html

### 3月境界・3/19群監査
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- P-Summa 2018年3月新台まとめ: https://psumma.jp/trend/41810/
- グリーンべると（カンフーレディ・テトラ3/19導入確認）: https://news.p-world.co.jp/articles/10034/greenbelt
- K-Navi（マイケル・ジャクソン3/19導入確認）: https://p-kn.com/slot/2956/
- 藤商事 美ラメキ！公式: https://www.fujimarukun.co.jp/products/churameki/
- PiDEA X 美ラメキ！発表会: https://www.pidea.jp/articles/%E5%A4%9A%E5%BD%A9%E3%81%AA%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%81%A832G%E3%81%AE%E3%83%89%E3%82%AD%E3%83%89%E3%82%AD%E6%84%9F%E3%80%8C%E7%BE%8E%E3%83%A9%E3%83%A1%E3%82%AD%21%E3%80%8D%EF%BC%8F%E8%97%A4%E5%95%86%E4%BA%8B
