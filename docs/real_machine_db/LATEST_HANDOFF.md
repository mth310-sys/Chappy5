更新日: 2026-09-11

## 現在地点
- recordCount: **1300**
- latestRecordAdded: **花娘 — No.1300**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-08-19_hanamusume.md`
- chronologicalFrontier: **2019-08-19**
- frontierLatestMachine: **花娘 — No.1300**
- schema: **resetBehavior v0.7**
- status: **S_ORISLO2_PB_VARIANTS_AUDIT_ACTIVE**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1297 `バンバンクロス` / No.1298 `SLOT WONDER AGENT` を再取得して開始。
- `INDEX.md` は旧スナップショットのため、README規則どおり `LATEST_HANDOFF.md` + main実レコードを正本として継続。
- 直前handoffの指定どおり、Sオリスロ2AA PB系列の未収録を優先。
- **No.1299 `BELLE CITY`** を2019-08-05導入として登録。
- **No.1300 `花娘`** を2019-08-19導入として登録。8/5表記との競合は平均せずDATE_CONFLICTとして保持。
- `Sオリスロ2AA` は当時業界一次資料でメイン基板・リール制御・ボーナス確率・出玉率等が共通、サブ基板/サウンド/モード示唆/設定看破演出は各法人独自と確認。
- このため性能コアおよびメイン基板側resetBehaviorは同一正式型式の高信頼解析を利用可能とした一方、PB固有サブ演出の朝一表示・ガックン・ランプ契約は共通と仮定せず個別UNVERIFIEDとした。

## No.1299 — BELLE CITY
- manufacturer: **ジェイピーエス（ザ・シティ / シティコミュニケーションズPB）**
- formalModel: **`Sオリスロ2AA`**
- certificationNumber: **`9S0186`**
- releaseDate canonical: **2019-08-05**
- generation/system: **6号機 / AT / 疑似ボーナス連荘タイプ / PB**
- payout: **97.2 / 98.4 / 99.8 / 101.2 / 104.0 / 105.6%**
- AT初当たり: **1/413.4 / 408.1 / 396.8 / 382.4 / 275.3 / 269.3**
- baseGamesPer50: **約53.0G/50枚**（同一型式共通メイン基板確認の上で採用）
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 70G 約210枚 / REG 30G 約90枚**
- 最大天井: **1000G**

### resetBehavior v0.7 — BELLE CITY
- settingChange: **天井RESET / 内部状態再抽選 / モード再抽選**（同一正式型式メイン基板契約）。
- powerCycle: **天井 / 内部状態 / モード CARRY_OVER**（同一正式型式解析）。
- carryOver: 据え置きをBELLE CITY専用に独立規定する直接資料は `UNVERIFIED_AS_DISTINCT_BELLE_SPECIFIC_CONDITION`。
- ceilingAfterReset: 設定変更専用短縮天井 `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: 有利区間機。BELLE CITY固有の朝一ランプ/開始状態契約は `APPLICABLE_BUT_BELLE_SPECIFIC_RESET_CONTRACT_PARTIAL`。
- resetDetection: PB固有ガックン条件・確定的朝一ランプ判別は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更専用モード振り分け・朝一当選率等は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。

## No.1300 — 花娘
- manufacturer: **ジェイピーエス（JIN系PB）**
- formalModel: **`Sオリスロ2AA`**
- certificationNumber: **`9S0186`**
- releaseDate canonical: **2019-08-19**
- releaseDate conflict: **2019-08-05**（PBシリーズ一括資料/予定表記）
- generation/system: **6号機 / AT / 疑似ボーナス連荘タイプ / PB**
- payout: **97.2 / 98.4 / 99.8 / 101.2 / 104.0 / 105.6%**
- AT初当たり: **1/413.4 / 408.1 / 396.8 / 382.4 / 275.3 / 269.3**
- baseGamesPer50: **約53.0G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 70G 約210枚 / REG 30G 約90枚**
- 最大天井: **1000G**

### resetBehavior v0.7 — 花娘
- settingChange: 花娘個別攻略で **天井G RESET**、同一正式型式解析で **内部状態再抽選 / モード再抽選**。
- powerCycle: 同一正式型式解析で **天井 / 内部状態 / モード CARRY_OVER**。
- carryOver: 据え置きを花娘専用に独立規定する直接資料は `UNVERIFIED_AS_DISTINCT_HANAMUSUME_CONDITION`。
- ceilingAfterReset: 設定変更専用短縮天井 `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: 通常A系78G非当選時の有利区間転落は花娘個別解析で確認。朝一ランプ/区間開始契約は `APPLICABLE_BUT_HANAMUSUME_SPECIFIC_RESET_CONTRACT_PARTIAL`。
- resetDetection: 停止音/パネル/告知ランプの設定示唆はあるが朝一変更判別とは別。ガックン/確定的朝一ランプ判別は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更専用モード振り分け・朝一特定G以内当選率等は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。

## Sオリスロ2AA PB系列 — 現在の監査状況
1. **SLOT WONDER AGENT** — 2019-07-08 / No.1298 / 登録済み。
2. **BELLE CITY** — 2019-08-05 / No.1299 / 登録済み。
3. **花娘** — canonical 2019-08-19 / No.1300 / 登録済み。8/5表記はCONFLICT保持。
4. **どき!すろ** — **次の登録候補 No.1301**。日刊スポーツは2019-08-19導入。業界資料はエコ新台8/4納品、新台9/29納品予定という別定義の日付を持つため、導入日/納品日を分離して監査する。
5. **タマどき!** — コンチェルト / コンサートホール系列。業界資料9〜10月、個別候補2019-10-07。未登録。
6. **プレドキ!** — 後年回顧/P-WORLDで同系列を確認。導入法人・時期・独立レコード要否を当時資料で追加監査する。未登録。

## 2019-08-05群 — REOPENED / NOT CLOSED
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- No.1296 ハイハイシオサイ
- No.1297 バンバンクロス
- No.1299 BELLE CITY
- PB系列の遡及監査が継続中のため、8/5群の最終CLOSED判定はSオリスロ2AA系列補完後に行う。

## 2019-08-19群 — OPEN
- No.1300 花娘
- 既知未処理: **どき!すろ**
- 同日別機種: `OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」` が日刊スポーツ導入カレンダーで確認済み。既存レコード有無を次回main検索で確認し、未収録なら時系列漏れとして処理する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: `docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md` 相当から再開。ただし現在はSオリスロ2AA漏れ補完を優先。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1299 / No.1300を再取得。
2. GitHub mainで `どき!すろ` と `OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」` の既存レコード有無を確認。
3. **No.1301候補 `どき!すろ`** を個別登録。2019-08-19ホール導入、8/4エコ仕様納品、9/29新台仕様納品の定義差を分けて保存し、競合はCONFLICT扱い。
4. 同日未収録なら `OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」` を次に処理。
5. その後 `タマどき!`、`プレドキ!` を当時資料まで横断しSオリスロ2AA系列を閉じる。
6. 系列補完後、2019-08-05 / 2019-08-19群を全メーカー / 別型式 / 別スペック / PB / 地域差で再監査しCLOSED可否を判定。
7. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### Sオリスロ2AA / PB共通
- 日刊スポーツ: https://www.nikkansports.com/amusement/pachislot/news/201907020000411.html
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001249/
- 遊技通信 / 長崎県遊技業協同組合転載: https://nagasaki-yukyo.or.jp/information/jps%E3%80%81at%E9%80%A3%E6%9C%80%E5%A4%A7%E7%B4%8490%EF%BC%85%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%97%E3%81%9F6%E7%A4%BE%E5%85%B1%E5%90%8C%E4%BC%81%E7%94%BB%E3%81%AEpb%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/
- 遊技通信 検定通過: https://www.yugitsushin.jp/news/gyousei/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%886%E6%9C%883%E6%97%A5%EF%BC%89/
- モゲスロ WONDER AGENTS: https://moge-site.com/archives/22080
- すろぱちくえすと WONDER AGENTS: https://www.slopachi-quest.com/article/wonder-agents-tennjou/

### BELLE CITY
- DMMぱちタウン: https://p-town.dmm.com/machines/3493/recommend
- P-WORLD: https://www.p-world.co.jp/machine/database/8988
- パチ7: https://pachiseven.jp/machines/5831/cutout/7

### 花娘
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/m/amusement/pachislot/news/amp/201908090000270.html
- P-WORLD: https://www.p-world.co.jp/machine/database/8989
- パチ7: https://pachiseven.jp/machines/5832/cutout/6
- すろぱちくえすと設定: https://www.slopachi-quest.com/article/hanamusume-settei/
- すろぱちくえすと天井: https://www.slopachi-quest.com/article/hanamusume-tennjou/
- 2-9伝説: https://29den.com/hanamusume/
- ちょんぼりすた: https://chonborista.com/slot/jps-slot/89525/
