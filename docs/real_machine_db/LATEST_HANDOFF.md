更新日: 2026-09-10

## 現在地点
- recordCount: **1161**
- latestRecordAdded: **BLACK LAGOON3**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-12-04_black-lagoon3.md`
- chronologicalFrontier: **2017-12-04**
- frontierLatestMachine: **BLACK LAGOON3 — No.1161**
- schema: **resetBehavior v0.7**
- status: **2017-11-27_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__2017-12-04_GROUP_OPEN__2017-11_MONTH_DAY_UNRESOLVED_IMISORE_XX**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1160を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1160件 / chronologicalFrontier 2017-11-27 / 11/27群CLOSED**。
- handoff指定の2017-12-04群先頭 **「BLACK LAGOON3」** をNo.1161としてperformance core + resetBehavior v0.7収集。
- PiDEA X・K-Navi・当時解析で導入2017-12-04を複数照合。12/4群は「ゴッドイーター2」「まめ」が未処理のためOPENを維持。

## No.1161 — BLACK LAGOON3
- path: `docs/real_machine_db/machines/2017-12-04_black-lagoon3.md`
- manufacturer: 七匠
- releaseDate: 2017-12-04
- generation/system: 5.9号機 / A+ART
- formalModelName: `パチスロブラックラグーンリミットブレイクT`（複数二次資料一致、一次検定資料未固定）
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 機械割: **97.44 / 98.91 / 100.60 / 103.98 / 107.13 / 112.32%**
- BIG: **1/485.45 / 1/451.97 / 1/422.81 / 1/366.12 / 1/316.60 / 1/283.71**
- ART初当たり: **1/599.18 / 1/593.58 / 1/589.07 / 1/571.85 / 1/555.62 / 1/541.06**
- REG: 約1/550.72（当時資料では全設定共通系統）
- 50枚ベース: **約34G**
- ART純増: **約1.4枚/G**、ボーナス込み **約1.9枚/G**
- 基本獲得: SBB約256枚 / BIG約152枚 / REG約56枚 / ART50G+α
- 天井: **なし**

## resetBehavior v0.7 要点
- 設定変更: 有利区間を終了し非有利区間へ。RT状態はボーナス終了後相当のRT0へ。必勝本は内部状態「高確へ」、開始市街地と明記。
- 据え置き/純電源OFF→ON: 有利区間・RT・内部状態を引継ぎ。有利区間中ならランプ点灯も引継ぐ資料あり。
- ゲーム数天井は非搭載のためgameCounterReset/ceilingAfterResetはN/A。
- 有利区間: 設定変更 `RESET_TO_NON_ADVANTAGEOUS_SECTION`、電断のみ `CARRYOVER_WITH_LAMP_IF_ACTIVE`。
- 朝一下パネル公開値: 設定変更 **レヴィ50.00% / ラグーン商会50.00%**、電源OFF→ON **68.75% / 31.25%**。
- 変更判別: ガックンは変更/据え置き双方で起こり得るため単独判別不可。前日有利区間中閉店かつ無対策条件では、朝一ランプ点灯=据え置き濃厚、消灯=変更濃厚。RT0由来のRT推移も補助判別材料。
- powerCycle時ステージは必勝本「引継ぎ」と別解析「朝一実戦上市街地」に条件差/競合があるため `CONFLICT_OR_CONDITION_DIFFERENCE_POWER_CYCLE_STAGE` として保持。
- formalModelNameは二次資料複数一致、検定番号は表記揺れ/型式/七匠/7S/検定で再探索後も直接固定できずUNVERIFIED。

## 品質メモ
- ART単体純増1.4枚/Gとボーナス込み1.9枚/Gは定義差でありCONFLICTにしない。
- 5.9号機の有利区間1500G上限を通常のゲーム数天井と混同しない。
- 内部高確とRT0は別軸の状態として両方保持。
- `イミソーレXX`の日単位導入日は引き続き `UNVERIFIED_AFTER_RESEARCH`。既に月単位No.1159として回収済みで本線を止めない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1160〜1161を再取得。
2. **1161件 / chronologicalFrontier 2017-12-04 / 12/4群OPEN** を正本として継続。
3. 2017-12-04群の次機種 **「パチスロ ゴッドイーター2」= No.1162候補** をperformance core + resetBehavior v0.7で収集。
4. その後 **「まめ」= No.1163候補** を処理し、同日全メーカー横断監査後に12/4群CLOSED判定。
5. 12/5〜12/17の地域差/別スペック漏れを監査してから、現時点の次確定日 **2017-12-18「SLOT魔法少女まどか☆マギカA」** へ前進。
6. `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補。
7. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
- PiDEA X BLACK LAGOON3: https://www.pidea.jp/articles/%E6%9C%80%E6%96%B0%E4%BD%9C%E3%80%8CBLACK%20LAGOON3%E3%80%8D%E4%B8%83%E5%8C%A0%E3%81%8B%E3%82%89%E7%99%BB%E5%A0%B4%EF%BC%8F%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%82%BA
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/9729/greenbelt
- K-Navi: https://p-kn.com/slot/2912/
- 期待値見える化: https://slotjin.com/slot/blacklagoon3/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3075/1/67171
- すろぱちくえすと: https://www.slopachi-quest.com/article/black-ragoon3/
- パチマガスロマガ 下パネル: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nanashow_slot/08/en01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8525
- スロパチネット: https://slopachi-net.com/blacklagoon3
- slotnews777: https://slotnews777.blog.fc2.com/blog-entry-3508.html
