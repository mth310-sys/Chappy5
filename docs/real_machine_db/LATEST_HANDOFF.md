更新日: 2026-09-11

## 現在地点
- recordCount: **1257**
- latestRecordAdded: **ぱちスロAKB48 エンジェル**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-01-21_pachislot-akb48-angel.md`
- chronologicalFrontier: **2019-01-21**
- frontierLatestMachine: **ぱちスロAKB48 エンジェル — No.1257**
- schema: **resetBehavior v0.7**
- status: **2019-01-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1256を再取得して開始。
- main正本はNo.1256 `パチスロ ミクちゃん`、2019-01-07群CLOSED。古い会話上の地点へ戻らず継続。
- 2019-01-08〜01-20境界を2019年1月新台一覧・個別導入日検索で再監査し、本線へ追加すべき独立機を今回固定できなかったため2019-01-21群OPEN。
- No.1257 `ぱちスロAKB48 エンジェル` を登録。

## No.1257 — ぱちスロAKB48 エンジェル
- manufacturer: **京楽産業． / KYORAKU**
- releaseDateCanonical: **2019-01-21**
- formalModelName: **パチスロAKB48エンジェルMA**
- certificationNumber: **7S1325**
- generation/system: **5.9号機 / ノーマルAタイプ / 技術介入**
- settings: **1 / 2 / 5 / 6**
- 市場値機械割: **97.8 / 98.6 / 103.3 / 106.8%**
- 完全攻略機械割: **99.5 / 100.3 / 105.1 / 108.9%**
- BIG: **1/364.1 / 1/362.1 / 1/352.3 / 1/339.6**
- REG: **1/394.8 / 1/387.8 / 1/352.3 / 1/339.6**
- 合算: **1/189.4 / 1/187.2 / 1/176.2 / 1/169.8**
- baseGamesPer50: **約36.5 / 36.9 / 39.8 / 41.9G**
- BIG最大**402枚** / REG最大**103枚**
- 天井: **非搭載**

### resetBehavior v0.7
- 朝一1回目のボーナス終了画面に設定変更/据え置きで機種固有の公開振り分け差あり。
- サイン入り終了画面: **設定変更75% / 据え置き50%**。
- サインなし: **設定変更25% / 据え置き50%**。
- したがってサイン入りは設定変更の可能性を上げるが、据え置きでも50%で出るため単独確定要素ではない。
- 通常ゲーム数天井非搭載のため gameCounterReset / ceilingAfterReset は `NOT_APPLICABLE`。
- 朝一専用当選優遇・短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 純電源OFF→ONのみの内部状態/初期出目、据え置き独立条件の内部成立状態、本機固有ガックン発生率/確定条件は表記揺れ・型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等で再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 48/ミュージック/トロピカルは遊技者選択の演出モードであり、AT/ARTの内部モードとして扱わない。
- 5.9号機ノーマルでRT/ART非搭載。公開ゲーム性上、有利区間を出玉契機として運用しないため `NOT_APPLICABLE_TO_PUBLISHED_NORMAL_GAME_STRUCTURE`。

### quality notes
- 導入日はグリーンべると/P-WORLD業界ニュース、HAZUSE、各解析で2019-01-21一致。
- 型式 `パチスロAKB48エンジェルMA` / 検定番号 `7S1325` はHAZUSEで固定。
- BIG/REG/合算、機械割はHAZUSE・P-WORLD・パチマガスロマガ・複数解析で一致。
- 50枚ベースは概要の約36Gと設定別36.5〜41.9Gがあるが、丸め概要値と設定別詳細値の定義差として扱いCONFLICTにはしない。

## 2019-01-21群
### 登録済み
- No.1257 ぱちスロAKB48 エンジェル

### 未処理候補
1. **戦国BASARA HEROES PARTY**（エンターライズ）— No.1258第一候補
2. **パチスロ フィーバークィーンII**（SANKYO）
3. **S島漢 25Φ / 30Φ**（平和/アムテックス系。別型式・独立レコード要否を個別確認）
4. **Sゲッターロボ**（京楽系）

### 群判定
- **2019-01-21_GROUP_OPEN**。
- 2019年1月新台一覧は1/21群としてAKB48エンジェル / BASARA HEROES PARTY / フィーバークィーンII / 島漢25・30Φ / ゲッターロボを列挙。
- 全メーカー/別型式/別スペック/PB/地域差監査は残り候補処理後に実施し、追加なしを確認してからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`**。
- lastRetroQaResult: **モエる まりんバトる — PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`（アクアビーナス）**。
- 今回は新規時系列群処理を優先し、QAカーソルは変更なし。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1257を再取得。
2. **1257件 / chronologicalFrontier 2019-01-21 / `2019-01-21_GROUP_OPEN`** を正本として継続。並行更新があれば最新HEAD優先。
3. **No.1258候補 `戦国BASARA HEROES PARTY`** を性能コア + resetBehavior v0.7で収集。
4. フィーバークィーンII → 島漢25/30 → ゲッターロボを個別照合。
5. 1/21群を全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定。
6. 遡及QAは **`docs/real_machine_db/machines/2006-12_aqua-venus.md`** から再開。

## 主要出典 — 取得日 2026-09-11
### No.1257 ぱちスロAKB48 エンジェル
- P-WORLD業界ニュース / グリーンべると: https://news.p-world.co.jp/articles/10671/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/7S1325/
- P-WORLD: https://www.p-world.co.jp/machine/database/8829
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/10/a.php
- パチマガスロマガ ボーナス: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/10/h-1.php
- パチマガスロマガ 50枚: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/10/c-1.php
- すろぱちくえすと設定/朝一: https://www.slopachi-quest.com/article/akb48-angel-settei/
- スロパチネット: https://slopachi-net.com/post-3253

### 2019-01新台群監査
- すろぱちくえすと 2019年1月新台一覧: https://www.slopachi-quest.com/article/erunote-shindai-2019-1/
