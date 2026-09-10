更新日: 2026-09-10

## 現在地点
- recordCount: **1181**
- latestRecordAdded: **パチスロ マイケル・ジャクソン**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-03-19_pachislot-michael-jackson.md`
- chronologicalFrontier: **2018-03-19**
- frontierLatestMachine: **パチスロ マイケル・ジャクソン — No.1181**
- schema: **resetBehavior v0.7**
- status: **2018-03-19_GROUP_OPEN_2_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1180 `ドリームクルーン500` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1180件 / chronologicalFrontier 2018-03-19 / 3/19群OPEN / 1機処理済み**。
- handoff指定の次候補 `パチスロ マイケル・ジャクソン` をNo.1181としてperformance core + resetBehavior v0.7で追加。
- 3/19群は `ドリームクルーン500` / `パチスロ マイケル・ジャクソン` / `カンフーレディ・テトラ` の3機を主要候補として確認済み。No.1180/1181処理済みのため、残る既知候補は `カンフーレディ・テトラ`。

## No.1181 — パチスロ マイケル・ジャクソン
- path: `docs/real_machine_db/machines/2018-03-19_pachislot-michael-jackson.md`
- manufacturer: **SANKYO**
- releaseDateCanonical: **2018-03-19**
- formalModelName: `パチスロ マイケル・ジャクソンA`
- certificationNumber: `7S1461`
- generation/system: **5.9号機 / A+ART / リアルボーナス+ゲーム数上乗せART**
- 機械割: **96.9 / 98.2 / 99.1 / 101.2 / 103.1 / 106.1%**
- ART初当たり: **1/599 / 1/597 / 1/596 / 1/595 / 1/593 / 1/593**
- ボーナス合成: **1/248 / 1/246 / 1/245 / 1/244 / 1/243 / 1/242**
- ボーナス+ART合成: **1/175 / 1/174 / 1/173 / 1/173 / 1/172 / 1/172**
- 50枚ベース: **約34.3G/50枚（全設定代表値）**
- ART純増: **ボーナス込み約1.9枚/G**
- Michael Jackson BONUS: **222枚**
- CB/RANKUP BONUS: **約60枚**
- ART初当たり時: **最低100G、平均約200G**
- 天井: **非搭載**

### resetBehavior v0.7
- 天井非搭載のため通常ゲーム数天井の`gameCounterReset`/`ceilingAfterReset`は`NOT_APPLICABLE`。
- 一撃の2018-04-13更新本機専用「天井/設定変更」では、設定変更時のRT状態・モード・液晶ステージ・有利区間ランプはいずれも当時`現在調査中`。
- 機種名/正式型式/SANKYO/5.9号機と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「有利区間」「ガックン」を組み替え、HAZUSE・一撃・ちょんぼりすた・パチマガスロマガ・K-Navi・P-WORLD等を再探索したが、設定変更時の本機固有直接契約は固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ONでは一撃の本機専用資料により **RT状態引継ぎ / CB・各CZ等は復帰中画面後に元状態へ復帰 / 有利区間ランプ引継ぎ** を直接確認。
- dream Island / dream City / dream Central滞在時は電断復帰後dream Islandへ、dream Stage / 神殿ステージは元ステージへ復帰。
- 据え置きを純電源OFF→ONとは別条件で直接説明した資料は`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の朝一モード振り分け、初当たり/CZ優遇率、短縮天井等の公開朝一数値は`NONE_CONFIRMED_AFTER_RESEARCH`または`NOT_APPLICABLE`。
- 本機固有のガックン/初期出目による変更判別は`UNVERIFIED_AFTER_RESEARCH`。

## CONFLICT / 品質メモ
- No.1181の主要性能コアはHAZUSE・一撃・ちょんぼりすた・パチマガスロマガ等で実質一致し、採用を左右する数値CONFLICTは今回確認なし。
- 5.9号機の一般的な設定変更時有利区間処理を本機固有resetBehaviorへ推定転記しない。
- JACKPOTは有利区間1000G相当到達で約500Gを上乗せして1500G完走へ接続するが、設定変更時のJACKPOTカウンタ処理は直接資料を固定できないためUNVERIFIED。

## 2018-03-19群監査
- 3/19候補として `ドリームクルーン500`、`パチスロ マイケル・ジャクソン`、`カンフーレディ・テトラ` を複数資料で確認。
- No.1180 `ドリームクルーン500`、No.1181 `パチスロ マイケル・ジャクソン` を処理済み。
- 3/19群はOPEN継続。次は`カンフーレディ・テトラ`を処理し、その後同日全メーカー・別スペック・表記揺れを横断監査する。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- `ドリームクルーン500`と後継`ドリームクルーン711`（2018-12-03）、6号機`ドリームクルーン2`を混同しない。
- No.1181は5.9号機であり、後年AI生成系ページ等の「6号機」誤分類は採用しない。
- 5.9号機一般論から設定変更時有利区間処理を補完しない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1181を再取得。
2. **1181件 / chronologicalFrontier 2018-03-19 / 3/19群OPEN / 2機処理済み** を正本として継続。
3. 次候補 **`カンフーレディ・テトラ` = No.1182候補** を既存表記揺れ・型式まで照合し、未登録ならperformance core + resetBehavior v0.7で処理。
4. その後、2018-03-19同日全メーカー・別スペック・表記揺れを当時カレンダー・業界記事・解析・古いDB・アーカイブで横断監査。
5. 漏れがなければ `2018-03-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT` として次導入日群へ進む。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1181 パチスロ マイケル・ジャクソン
- HAZUSE: https://hazuse.com/machine/pachislot/7S1461/
- 一撃 機種TOP: https://1geki.jp/slot/s_mj/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_mj/3/
- 一撃 ART概要: https://1geki.jp/slot/s_mj/81/
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/46/h.php
- パチマガスロマガ 50枚ゲーム数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/46/c-1.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8584
- K-Navi: https://p-kn.com/slot/2956/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/56275/

### 3月境界・3/19群監査
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- P-Summa 2018年3月新台まとめ: https://psumma.jp/trend/41810/
- グリーンべると（カンフーレディ・テトラ3/19導入確認）: https://news.p-world.co.jp/articles/10034/greenbelt
