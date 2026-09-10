更新日: 2026-09-10

## 現在地点
- recordCount: **1179**
- latestRecordAdded: **ニューシオサイ-30**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-03-05_new-shiosai-30.md`
- chronologicalFrontier: **2018-03-05**
- frontierLatestMachine: **ニューシオサイ-30 — No.1179**
- schema: **resetBehavior v0.7**
- status: **2018-03-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1178 `ビッグアップ` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1178件 / chronologicalFrontier 2018-03-05 / 3/5群OPEN / 2機処理済み**。
- No.1179候補`ニューシオサイ-30`がmain未登録であることを確認し、performance core + resetBehavior v0.7で追加。
- 2018年3月新台まとめ、当時業界記事、各機種導入資料を横断し、3/5パチスロ群は `パチスロ 超GANTZ` / `ビッグアップ` / `ニューシオサイ-30` の3機を確認。3機すべて登録済みとなったため、**2018-03-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とする。
- 後年の5.9号機一覧に`クロノス`を2018-03-05とする誤記候補があったが、2018年6月のベルコ内覧会、Amusement Japan、日刊スポーツ、複数解析が2018-08-06導入で一致するため3/5群へ混入させない。

## No.1179 — ニューシオサイ-30
- path: `docs/real_machine_db/machines/2018-03-05_new-shiosai-30.md`
- manufacturer: **パイオニア**
- releaseDateCanonical: **2018-03-05**
- formalModelName: `ニューシオサイ/EX-30`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- generation/system: **5.9号機 / A+RT / 完全告知 / 30Φ**
- 機械割: **97.6 / 98.8 / 99.9 / 102.1 / 104.5 / 109.7%**
- BIG: **1/319.7 / 1/309.1 / 1/303.4 / 1/295.2 / 1/278.9 / 1/262.1**
- REG: **1/399.6 / 1/387.8 / 1/381.0 / 1/348.6 / 1/321.3 / 1/292.6**
- 合算: **1/177.6 / 1/172.0 / 1/168.9 / 1/159.8 / 1/149.3 / 1/138.3**
- 50枚ベース: **約35〜36G/50枚**
- RT純増: **約0.15枚/G**
- BIG: **最大304枚 + RT30G**
- REG: **最大106枚 canonical / 最大104枚の業界記事ありCONFLICT**
- 天井: **非搭載**

### resetBehavior v0.7
- 天井非搭載のため`gameCounterReset`/`ceilingAfterReset`の天井項目は`NOT_APPLICABLE`。
- ちょんぼりすたは本機について「朝イチの恩恵は存在しない」と明記。
- 設定変更時のRT残G、成立済みボーナス、初期出目、告知状態等は、機種名/正式型式/メーカー/シリーズ名と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「RT引き継ぎ」「ガックン」を組み替え、当時解析/古いDB/業界記事/後年DBを横断したが本機固有の直接契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 据え置きを純電源OFF→ONと独立条件で記した本機固有契約は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 朝一専用モード、天井短縮、初当たり優遇、設定変更専用の主要不利要素、公開朝一数値は`NONE_CONFIRMED_AFTER_RESEARCH`または`NOT_APPLICABLE`。
- 本機固有の設定変更判別用ガックン/初期出目/ランプ契約は`UNVERIFIED_AFTER_RESEARCH`。通常演出のバウンドストップ等と混同しない。
- 本機固有の有利区間利用/設定変更時処理は資料で固定できず、5.9号機一般論から補完しない。

## CONFLICT / 品質メモ
- `RELEASE_DATE_PLAN_VS_ACTUAL`: PiDEA Xは3月4日から順次予定、複数解析は2018-03-05導入。予定開始日と実導入日表記を分離し、canonicalは2018-03-05。
- `REG_PAYOUT_104_VS_106`: PiDEA Xは最大104枚、P-WORLD/パチビーは最大106枚。平均せず双方を保持し、後者一致をcanonical。
- certificationNumberは型式`ニューシオサイ/EX-30`・パイオニア・検定/公安委員会/7S等へ検索を広げても直接固定できず`UNVERIFIED_AFTER_RESEARCH`。

## 2018-03-05群境界監査
- `パチスロ 超GANTZ`: 2018-03-05、No.1177処理済み。
- `ビッグアップ`: 2018-03-05、No.1178処理済み。
- `ニューシオサイ-30`: 2018-03-05、No.1179処理済み。
- P-Summaの2018年3月新台まとめでは3/5パチスロとしてこの3機が掲載され、個別の業界/解析資料でも導入時期を照合。
- `クロノス～刻の支配者～`は一部後年一覧に3/5誤記候補があるが、2018-06-07内覧会および複数高信頼資料で8/6導入。3/5群対象外。
- よって3/5群をCLOSEDとし、次の最古未処理導入日群へ進む。

## 継続注意事項
- ニューシオサイ-30のREG獲得枚数104/106枚差は平均しない。
- 2023年の6号機`ニューシオサイ`（型式`SニューシオサイSA`、25Φ）と2018年`ニューシオサイ-30`を混同しない。
- ノーマル/A+RT機でも設定変更・電断時のRT残G等は一般論で推測しない。本機固有資料がなければUNVERIFIEDを維持する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1179を再取得。
2. **1179件 / chronologicalFrontier 2018-03-05 / 3/5群CLOSED** を正本として継続。
3. 2018-03-06以降を導入日順に全メーカー・別スペック・表記揺れで横断し、**次の最古未処理導入日群**を確定する。
4. 次候補は単一カレンダーだけで確定せず、業界記事・当時解析・古いDBを複数照合してからNo.1180として処理する。
5. 新規機種はperformance core + resetBehavior v0.7を同時収集する。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1179 ニューシオサイ-30
- パイオニア公式: https://www.slot-pioneer.co.jp/products/siosai.html
- PiDEA X: https://www.pidea.jp/articles/%E6%B2%96%E3%82%B9%E3%83%AD%E5%90%8D%E6%A9%9F20%E5%91%A8%E5%B9%B4%E8%A8%98%E5%BF%B5%E3%80%8C%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B7%E3%82%AA%E3%82%B5%E3%82%A4%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2
- パチビー: https://www.pachibee.jp/pparticles/view/1023
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/55242/
- P-WORLD: https://www.p-world.co.jp/machine/database/8579
- 2-9伝説: https://29den.com/newsiosai/
- スロパチネット: https://www.slopachi-quest.com/article/new-shiosai/
- 中一商事: https://www.nakaiti.com/html/pai0030.html

### 2018-03-05群監査
- P-Summa 2018年3月新台まとめ: https://psumma.jp/trend/41810/
- `クロノス`誤混入防止 — Amusement Japan: https://amusement-japan.co.jp/article/detail/10000668/
- `クロノス`誤混入防止 — 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201807270000405.html
