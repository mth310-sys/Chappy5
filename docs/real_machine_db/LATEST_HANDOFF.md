更新日: 2026-09-11

## 現在地点
- recordCount: **1285**
- latestRecordAdded: **ハナビ通**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-05-20_hanabi-tsu.md`
- chronologicalFrontier: **2019-05-20**
- frontierLatestMachine: **ハナビ通 — No.1285**
- schema: **resetBehavior v0.7**
- status: **2019-05-20_GROUP_OPEN_2_OF_3_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1284を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoffの未処理先頭 `ハナビ通` をNo.1285として性能コア + resetBehavior v0.7で登録。
- ユニバーサル公式 / P-WORLD / HAZUSE / K-Navi / ちょんぼりすた / 当時解析複数を横断。
- 5/20群は `天晴！モグモグ風林火山〜全国制覇版〜 / ハナビ通` の2機処理済み。未処理確認済みは `ぱちスロ 冬のソナタ`。群はOPEN。
- 次機種 `ぱちスロ 冬のソナタ` は先行再確認済み。2019-05-20導入、京楽、5.9号機A+RT、型式 `パチスロ冬のソナタKJ`、検定番号 `7S1507`、天井非搭載。次回は性能コア + resetBehaviorの本調査から開始する。

## No.1285 — ハナビ通
- manufacturer: **アクロス**
- formalModel: **`ハナビ2HA` / `ハナビ2HH`**
- certificationNumber: **`7S1235` / `7S1198`**
- generation/system: **5.9号機 / A+RT / 技術介入 / 特殊設定H**
- releaseDate: **2019-05-20**
- 市場掲載機械割: **97.8 / 100.0 / 103.5 / 107.3 / 108.9%**（設定1/2/5/6/H）
- 完全攻略時: **100.5 / 102.7 / 106.2 / 110.0 / 110.9%**
- BIG: **1/312.1 / 303.4 / 287.4 / 268.6 / 1260.3**
- REG: **1/385.5 / 364.1 / 337.8 / 312.1 / 1260.3**
- 合算canonical: **1/172.5 / 165.5 / 155.3 / 144.4 / 630.2**
- baseGamesPer50: **34.2 / 34.7 / 35.4 / 35.7 / 7728.3G**
- BIG最大**311枚** / REG最大**116枚**
- RT: 花火チャレンジ最大20G・約0.3枚/G、花火GAME 20G・約0.5枚/G
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: **全状態クリア**。
- carryOver: 据え置き単独を純電断と分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: **電源OFF→ONのみは全状態保持**。
- gameCounterReset / ceilingAfterReset: 天井非搭載のため **NOT_APPLICABLE**。
- mode/stateAfterReset: 設定変更=全状態クリア、純電断=保持。朝一専用モードは確認なし。
- advantageousSectionReset: 5.9号機A+RTのため6号機型有利区間は **NOT_APPLICABLE**。
- resetBenefits: **朝一専用恩恵なし**と解析資料で明記。
- resetPenalties: 特記すべき専用不利要素なし。RT等の前状態は設定変更でクリア。
- resetDetection: 本機固有ガックン発生条件・発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。設定Hの極端な通常挙動は稼働中判別材料だが朝一設定変更判別とは分離。
- numericResetData: 専用短縮天井・専用モード振り分け・朝一当選率はN/A / 公開値なし。

## qualityNotes / conflicts
- P-WORLDで型式 `ハナビ2HA / ハナビ2HH`、検定番号 `7S1235 / 7S1198` を確認。同一市場機として併記し、未確認の性能差を捏造しない。
- 設定6ボーナス合算は主要資料群 **1/144.4** に対し、ちょんぼりすた **1/144.1**。平均せず `CONFLICT_SETTING6_BONUS_COMBINED_1_144_4_VS_1_144_1_SINGLE_SOURCE`。
- 設定Hの50枚約7728.3Gは意図的な特殊仕様。通常Aタイプのベース物差し集計へそのまま混ぜない。
- `咲桜弁慶` は `PLANNED_2019_05_13_BUT_ACTUAL_2019_06_17` として境界監査メモを維持し、6/17到達時に独立レコード化する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: main上の導入時系列でPIKASLO直後の未QAレコードを特定して継続。本線前進を優先。

## 2019-05-20群 — OPEN
### 登録済み
- No.1284 天晴！モグモグ風林火山〜全国制覇版〜
- No.1285 ハナビ通

### 未処理確認済み
- ぱちスロ 冬のソナタ（京楽）

### 群監査メモ
- 日刊スポーツ2019-05-10導入カレンダーは5/20にモグモグ / 冬のソナタを掲載。
- 複数導入資料でハナビ通も2019-05-20を確認しNo.1285登録済み。
- 冬のソナタ処理後に全メーカー / 別型式 / 別スペック / PB / 地域差を最終監査しCLOSED可否を判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1285を再取得。
2. **2019-05-20群未処理 `ぱちスロ 冬のソナタ` をNo.1286候補**として性能コア + resetBehavior v0.7で処理。
3. 5/20群を全メーカー / 別型式 / 別スペック / PB / 地域差まで最終監査してCLOSED可否判定。
4. その後、次の実導入群へ時系列前進。
5. 6/17到達時には延期確認済み `咲桜弁慶` を漏らさず候補へ戻す。

## 主要出典 — 取得日 2026-09-11
### ハナビ通
- ユニバーサル公式: https://www.universal-777.com/product/slot/hanabi2/
- ユニバーサル2019製品一覧: https://www.universal-777.com/product/slot/2019/
- P-WORLD: https://www.p-world.co.jp/machine/database/8924
- HAZUSE: https://hazuse.com/machine/pachislot/7S1198/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/7S1198/genre/201/
- 当時解析: https://oslo-opachi.com/2019/05/23/hanabi2/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/81169/
- K-Navi: https://p-kn.com/slot/3224/
- すろぱちくえすと: https://www.slopachi-quest.com/article/hanabi2-settei/

### 次機種先行確認 — ぱちスロ 冬のソナタ
- グリーンべると/P-WORLDニュース: https://news.p-world.co.jp/articles/10931/greenbelt
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/80705/
- パチナビ: https://pachinavi.net/machines/winter-sonata/
- モゲスロ: https://moge-site.com/archives/21870
