更新日: 2026-09-11

## 現在地点
- recordCount: **1286**
- latestRecordAdded: **ぱちスロ 冬のソナタ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-05-20_pachislot-fuyu-no-sonata.md`
- chronologicalFrontier: **2019-05-20**
- frontierLatestMachine: **ぱちスロ 冬のソナタ — No.1286**
- schema: **resetBehavior v0.7**
- status: **2019-05-20_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1285を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoffの未処理先頭 `ぱちスロ 冬のソナタ` をNo.1286として性能コア + resetBehavior v0.7で登録。
- KYORAKU公式 / グリーンべると / 遊技通信 / Amusement Japan / K-Navi / パチナビ / モゲスロ / ちょんぼりすた / すろぱちくえすと / 当時攻略誌目次を横断。
- 5/20群は `天晴！モグモグ風林火山〜全国制覇版〜 / ハナビ通 / ぱちスロ 冬のソナタ` の3機を登録済み。
- 日刊スポーツ2019-05-10導入カレンダー、メーカー/解析別導入日、5/24更新カレンダーを再監査し、5/21〜6/2に独立登録すべき追加パチスロを固定できなかったため5/20群をCLOSED。
- 次の明確な実導入群は **2019-06-03**。`実況BINGO倶楽部` / `超AT 美ら沖` を複数資料で確認。

## No.1286 — ぱちスロ 冬のソナタ
- manufacturer: **京楽産業．**
- formalModel: **`パチスロ冬のソナタKJ`**
- certificationNumber: **`7S1507`**
- generation/system: **5.9号機 / A+RT / ボーナス+CZ+RT**
- releaseDate canonical: **2019-05-20**
- release scope conflict: **5/20納品/ホール導入開始系資料 vs KYORAKU公式5/21全国導入スタート**
- 機械割: **98.6 / 99.0 / 101.3 / 102.2 / 104.1 / 107.2%**
- BIG: **1/492.8 / 492.8 / 485.5 / 485.5 / 478.4 / 445.8**
- MIDDLE: **1/636.3 / 612.5 / 590.4 / 560.1 / 532.8 / 524.3**
- REG: **1/508.0 / 508.0 / 500.3 / 500.3 / 471.5 / 458.3**
- 合算: **1/179.6 / 177.6 / 173.8 / 171.1 / 164.3 / 157.9**
- baseGamesPer50: **35.3 / 36.1 / 37.6 / 38.0 / 38.6 / 40.0G**
- RT「恋愛モード」: **約0.3枚/G・1セット30G**
- BIG最大**304枚** / MIDDLE最大**206枚** / REG canonical最大**110枚**
- CZ→RT突入期待度: **約50%**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: **内部状態再抽選**（2019年当時解析表で直接確認）。
- carryOver: 据え置き単独を純電断と分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: **電源OFF→ONのみは内部状態引継ぎ**（当時解析表で直接確認）。
- gameCounterReset / ceilingAfterReset: 天井非搭載のため **NOT_APPLICABLE**。
- modeAfterReset: 朝一専用モード/設定変更専用モード振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更=内部状態再抽選、純電断=内部状態引継ぎ。液晶ステージは当時資料でも双方「調査中」で追加探索後もUNVERIFIED。
- advantageousSectionReset: 5.9号機A+RTのため6号機型有利区間は **NOT_APPLICABLE**。
- resetBenefits: **朝一リセット恩恵「特に無し」**と解析資料で明記。
- resetPenalties: 特記すべき設定変更専用不利要素は確認なし。
- resetDetection: 本機固有ガックン条件/発生率、朝一表示による確定判別値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 専用短縮天井・専用モード振り分け・朝一特定G以内当選率はN/A / 公開値なし。

## qualityNotes / conflicts
- 導入日の定義差を `CONFLICT_RELEASE_SCOPE_2019_05_20_DELIVERY_OR_HALL_START_VS_2019_05_21_NATIONAL_START` として保持。DBの時系列canonicalは多数機種DB/納品開始資料に合わせ2019-05-20。
- REG最大獲得はグリーンべると / 遊技通信 / K-Navi / パチナビ / ちょんぼりすた等で **110枚**。Amusement Japanのみ **120枚**のため、`CONFLICT_REG_MAX_110_MULTI_SOURCE_VS_120_SINGLE_INDUSTRY_ARTICLE`。平均化しない。
- 型式 `パチスロ冬のソナタKJ`、検定番号 `7S1507` はパチナビDBで確認。別型式競合は今回固定できず。
- `咲桜弁慶` は日刊スポーツ5/13予定掲載があるが、既存handoffどおり `PLANNED_2019_05_13_BUT_ACTUAL_2019_06_17` を維持。6/17到達時に候補へ戻す。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: main上の導入時系列でPIKASLO直後の未QAレコードを特定して継続。本線前進を優先。

## 2019-05-20群 — CLOSED
### 登録済み
- No.1284 天晴！モグモグ風林火山〜全国制覇版〜
- No.1285 ハナビ通
- No.1286 ぱちスロ 冬のソナタ

### 群監査メモ
- 日刊スポーツ2019-05-10導入カレンダーは5/20にモグモグ / 冬のソナタを掲載。
- ハナビ通はメーカー公式/複数導入資料で2019-05-20を確認しNo.1285登録済み。
- 冬のソナタは5/20納品/導入開始と5/21全国導入スタートの定義差を保持してNo.1286登録。
- 5/21〜6/2について全メーカー / 別型式 / 別スペック / PB / 地域差を検索語・導入一覧系統を変えて監査したが、独立登録すべき追加機を固定できず。
- 日刊スポーツ2019-05-24導入カレンダーおよび別導入資料で次群は2019-06-03 `実況BINGO倶楽部 / 超AT 美ら沖` と一致。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1286を再取得。
2. **2019-06-03群 `実況BINGO倶楽部` をNo.1287候補**として性能コア + resetBehavior v0.7を本調査。
3. 続いて **`超AT 美ら沖`** を同じ群で処理。
4. 6/3群を全メーカー / 別型式 / 別スペック / PB / 地域差まで最終監査してCLOSED可否判定。
5. 6/17到達時には延期確認済み `咲桜弁慶` を漏らさず候補へ戻す。

## 主要出典 — 取得日 2026-09-11
### ぱちスロ 冬のソナタ
- KYORAKU公式機種サイト: https://www.kyoraku.co.jp/product_site/2019/fuyusona_s/
- KYORAKU 2019 NEWS: https://www.kyoraku.co.jp/news/year/2019
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/10931/greenbelt
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/10942/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001131/
- パチナビ: https://pachinavi.net/machines/winter-sonata/
- パチナビ設定判別: https://pachinavi.net/machines/winter-sonata/settei/
- K-Navi: https://p-kn.com/slot/3233/
- モゲスロ: https://moge-site.com/archives/21870
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/80705/
- すろぱちくえすと: https://www.slopachi-quest.com/article/fuyunosonata-settei/
- パチスロ必勝ガイドMAX 2019年7月号目次: https://www.fujisan.co.jp/product/1219887/b/1837277/

### 群監査 / 次群
- 日刊スポーツ 2019-05-10導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201905100000340.html
- 日刊スポーツ 2019-05-24導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201905240000339.html
- 6/3導入予定機種まとめ: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/05/30/230528
