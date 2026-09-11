更新日: 2026-09-11

## 現在地点
- recordCount: **1325**
- latestRecordAdded: **S沖っ娘25 — No.1325**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-12-09_s-okikko25.md`
- chronologicalFrontier: **2019-12-09**
- frontierLatestMachine: **S沖っ娘25 — No.1325**
- schema: **resetBehavior v0.7**
- status: **2019_12_09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1323「ドリームクルーン2」を再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- 12/03～12/08境界を確認し、日刊スポーツ当時導入カレンダー等で12/09群を監査。
- main上で同名既存レコードなしを確認後、以下2機を追加。
  - **No.1324 パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO**
  - **No.1325 S沖っ娘25**
- 2機とも性能コアとresetBehavior v0.7を同時収集。型式/メーカー/シリーズ/設定変更/朝一/据え置き/純電断/天井/モード/有利区間/ガックンを組み替え、業界記事・旧DB・当時解析・後年整理を横断。
- 日刊スポーツ2019-11-22導入カレンダーの12/09パチスロ欄は上記2機で一致。追加メーカー/別型式/別スペック/PB/地域差を検索したが同日独立登録機を固定できなかったため **2019-12-09群CLOSED**。

## No.1324 — パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO
- path: `docs/real_machine_db/machines/2019-12-09_eureka-seven3-hi-evolution-zero.md`
- manufacturer: **サミー**
- formalModel: **`Sエウレカセブン3 HIEVO ZR`**
- certificationNumber: **`9S1265`**
- releaseDate canonical: **2019-12-09**
- generation/system: **6号機 / AT / 疑似ボーナス+ST型AT**
- payout: **98.0 / 98.8 / 100.5 / 104.3 / 107.1 / 111.2%**
- BONUS合算: **1/257.5 / 247.1 / 231.9 / 204.2 / 189.0 / 165.4**
- AT「コーラリアンモード」: **1/365.7 / 342.6 / 330.2 / 282.3 / 265.5 / 220.3**
- base: **約50.5～51G/50枚**
- 純増: **約1.8枚/G または約4.5枚/G**
- basic payout: BIG平均約170枚 / HYPER BIG平均約255枚 / REG 20G+押し順当て5回 / CM 1セット30G
- 天井: **有利区間移行後707G+前兆でBIG、10周期でBONUS+AT濃厚**。303Gは確定天井ではなくBIG抽選。
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1324
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_MORNING_DETECTION_AND_NUMERIC_SAMPLE**
- 設定変更: **内部天井G RESET / コンパクカウンターRESET / 有利区間RESET・非有利区間へ / ランプ消灯**。
- 据え置き/純電断: **内部天井G・コンパクカウンター内部値・有利区間CARRY_OVER**。表示は初期化されるため内部値と分離。
- 有利区間移行時: **KCC突入確定 / 初期ATレベル抽選 / 高確スタート**。
- 朝一判別: 有利区間ランプ点灯=据え置き濃厚、消灯=変更濃厚。KCC突入も変更濃厚材料。前日条件/対策の例外があるため確定扱いしない。
- 本機固有ガックン条件/率は再探索後も未固定。
- 公開朝一実戦サンプル1295件: 10G以内0.23%、11～20G0.23%、21～30G0.77%、31～40G2.16%、41～50G2.01%。メーカー値ではなく攻略集計として分離保存。

### No.1324 CONFLICT
- 導入日 **2019-12-09**: HAZUSE、日刊スポーツ、すろぱちくえすと等。
- 導入日 **2019-12-16**: 複数当時解析、ぱちガブ系資料。
- 12/09をchronological canonical、12/16を地域/全国導入定義差として保持。

## No.1325 — S沖っ娘25
- path: `docs/real_machine_db/machines/2019-12-09_s-okikko25.md`
- manufacturer: **サンセイR&D**
- formalModel: **`S沖っ娘25/A4`**
- certificationNumber: **PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH**
- releaseDate canonical: **2019-12-09**
- generation/system: **6号機 / AT / 完全告知・疑似ボーナス / 25Φ**
- payout: **97.3 / 98.2 / 99.3 / 100.4 / 101.5 / 105.0%**
- AT/BONUS初当たり: **1/231.3 / 223.7 / 214.9 / 206.8 / 198.7 / 177.5**
- base: **約51G/50枚**
- 純増: **約6.0枚/G**
- basic payout: **BONUS 30G+α / 約180枚+α**
- modes: モードA / モードB / サンセット。設定6はモードBなし。
- 基本天井: **999G+αでBONUS**。P-WORLDの「最大899～999G」はCONFLICT_NOTE保持。
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1325
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_STRONG_MORNING_BENEFIT**
- 設定変更: **天井RESET / 有利区間RESET / 新規有利区間でモード選択**。
- 据え置き/純電断: **内部天井・有利区間進行CARRY_OVER**。純電断の表示詳細/モード個別表は未固定。
- 有利区間移行時モード比率:
  - 設定1～5: モードA約15～25% / モードB約25～35% / **サンセット約49.6～50%**
  - 設定6: モードA約66% / モードB 0% / サンセット約34%
- 朝一最大恩恵: 設定1～5で約50%のサンセットモード。**111G以内BONUS3セット保証、期待獲得約500枚**。
- 変更判別: 前日閉店時ランプ点灯を確認できる場合、翌朝消灯=変更濃厚 / 点灯=据え置き濃厚。前日消灯なら判別困難。
- リセット専用短縮天井は確認なし。本機固有ガックン条件/率は未固定。

### No.1325 CONFLICT
- 導入日 **2019-12-09**: 日刊スポーツ、Amusement Japan、DMM、1geki、すろぱちくえすと。
- **2019-12-02**: ちょんぼりすた。
- **2019-12-16**: ぱちんこキュレーション。
- 12/09を複数当時業界/DB一致によりcanonical。
- 天井は多数解析999G+α、P-WORLD最大899～999G。平均化せず保持。

## 2019-12-09群 — CLOSED
1. **パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO** — No.1324
2. **S沖っ娘25** — No.1325

日刊スポーツ当時導入カレンダーは12/09のパチスロを上記2機として掲載。同日全メーカー/別型式/別スペック/PB/地域差を再検索し、独立登録すべき追加機を固定できなかったため **`2019_12_09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`**。

## 次の時系列境界
- 12/10～12/21を再監査。
- **パチスロたまピー**（JPS × 玉屋PB）は遊技通信系業界記事で **2019-12-22から玉屋グループ全16店舗へ導入**、1geki/K-Naviでは **2019-12-23導入開始**。日付差をCONFLICTとして個別登録対象。
- PiDEAは型式 **`STMPAA`**、6号機Aタイプ、設定5/6の2段階、フル攻略約102/103%を確認。
- よって次の未処理は **「パチスロたまピー」No.1326候補**。12/22をcanonical候補とし、12/23表記との定義差を調査して確定する。
- その後、2019年末境界を監査して2020-01-06群（少なくともパチスロ1000ちゃん）へ進む。

## 継続監査
- `プレドキ！`: プレゴ専用PBまでは固定済み。具体的初回ホール導入日未固定のため未登録継続。本線は止めない。
- `パチスロたまピー`: 今回、新たに2019-12-22/23の具体的導入日資料を固定したため本線次候補へ昇格。
- 並行更新対策として、毎回mainの同名ファイル存在確認後にcreate/updateする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線12/09群完了と次境界のPB検出を優先。
- 次の未formalized候補は **`2007-03_wild7.md`（ワイルド7）**。main上で既formalizedなら重複編集せず次へ進む。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1325を再取得。
2. 2019-12-10～12-21境界を再監査。
3. **「パチスロたまピー」No.1326候補**を性能コア＋resetBehavior v0.7で収集。12/22 vs 12/23導入日CONFLICTを正式判定。
4. たまピー処理後、12/24～2020-01-05境界を全メーカー/PB/地域差/別型式で監査。
5. 次の通常群は **2020-01-06**候補（少なくともパチスロ1000ちゃん）。
6. 遡及QAは `2007-03_wild7.md` から継続。

## 主要出典 — 取得日 2026-09-11

### No.1324 エウレカセブン3
- HAZUSE: https://hazuse.com/en/machine/pachislot/9S1265/
- グリーンべると検定: https://web-greenbelt.jp/00011640/
- P-WORLD: https://www.p-world.co.jp/machine/database/9084
- 必勝本 天井＆設定変更: https://p.hisshobon.jp/machine/3432/1/76238
- すろぱちくえすと 天井/朝一: https://www.slopachi-quest.com/article/eurekaseven3-tennjou/
- DMM システム解説: https://p-town.dmm.com/machines/3591/directing/329
- NANA PRESS 天井: https://nana-press.com/kaiseki/machine/10/113/

### No.1325 S沖っ娘25
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001417/
- DMM: https://p-town.dmm.com/machines/3572/shops
- 1geki: https://1geki.jp/slot/s_okikko/
- すろぱちくえすと設定: https://www.slopachi-quest.com/article/okikko-settei/
- すろぱちくえすと天井/朝一: https://www.slopachi-quest.com/article/okikko-tennjou/
- P-WORLD: https://www.p-world.co.jp/machine/database/9068

### 12/09群監査 / 次境界
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201911220000268.html
- 遊技通信/P-WORLD — たまピー: https://news.p-world.co.jp/articles/12457/yugitsushin
- PiDEA — たまピー: https://www.pidea.jp/articles/%EF%BD%8A%EF%BD%90%EF%BD%93%E7%8E%89%E5%B1%8B%E3%81%A8%E5%85%B1%E5%90%8C%E9%96%8B%E7%99%BA%E3%81%97%E3%81%9F%EF%BD%90%EF%BD%82%E6%A9%9F%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%81%9F%E3%81%BE%E3%83%94%E3%83%BC%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8
- 1geki — たまピー: https://1geki.jp/slot/s_tamapy/
- K-Navi — たまピー: https://p-kn.com/slot/3375/
