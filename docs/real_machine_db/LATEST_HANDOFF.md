更新日: 2026-09-11

## 現在地点
- recordCount: **1301**
- latestRecordAdded: **どき！すろ — No.1301**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-08-19_doki-suro.md`
- chronologicalFrontier: **2019-08-19**
- frontierLatestMachine: **どき！すろ — No.1301**
- schema: **resetBehavior v0.7**
- status: **2019_08_19_GROUP_OPEN_AND_S_ORISLO2_VARIANTS_AUDIT_ACTIVE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1298 `SLOT WONDER AGENT`、No.1300 `花娘` を再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規則どおり `LATEST_HANDOFF.md` + main実レコードを正本として継続。
- GitHub mainで `どき!すろ` と `AINZ OOAL GOWN` を検索し、既存レコードなしを確認。
- 直前handoff指定どおり **No.1301 `どき！すろ`** を登録。
- 日刊スポーツ導入カレンダーおよび個別解析は **2019-08-19ホール導入**で一致。
- 遊技通信系業界一次資料は **エコ新台2019-08-04納品 / 新台2019-09-29納品予定**。導入日と納品日は定義が異なるため平均化せず `DATE_DEFINITION_DIFFERENCE` として分離保存。
- `Sオリスロ2AA` は当時業界一次資料でメイン基板・リール制御・ボーナス確率・出玉率が共通、サウンド/パネル/モード示唆/設定看破演出等のサブ側は各版独自と確認済み。性能コアとメイン基板側resetBehaviorには同一正式型式の高信頼資料を使用し、どき！すろ固有サブ表示・ガックン等は推測せずUNVERIFIED。

## No.1301 — どき！すろ
- manufacturer: **ジェイピーエス（Sオリスロ2AA共同企画・JPS版）**
- formalModel: **`Sオリスロ2AA`**
- certificationNumber: **`9S0186`**
- releaseDate canonical: **2019-08-19（ホール導入）**
- dateDefinitionDifference: **2019-08-04（エコ新台納品） / 2019-09-29（新台納品予定）**
- generation/system: **6号機 / AT / 疑似ボーナス連荘タイプ**
- payout: **97.2 / 98.4 / 99.8 / 101.2 / 104.0 / 105.6%**
- AT初当たり: **1/413.4 / 408.1 / 396.8 / 382.4 / 275.3 / 269.3**
- baseGamesPer50: **約53G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 70G 約210枚 / REG 30G 約90枚**
- 最大天井: **通常A 1000G**

### resetBehavior v0.7 — どき！すろ
- settingChange: 同一正式型式当時解析で **天井RESET / 内部状態再抽選 / モード再抽選**。
- powerCycle: 同一正式型式当時解析で **天井 / 内部状態 / モード CARRY_OVER**。
- carryOver: 据え置きをどき！すろ専用に独立規定する直接資料は `UNVERIFIED_AS_DISTINCT_DOKISURO_CONDITION`。
- gameCounterReset: 設定変更RESET / 純電断CARRY_OVER。
- ceilingAfterReset: 設定変更専用短縮天井 `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 設定変更再抽選 / 純電断引継ぎ。設定変更時モード振り分け公開数値は `PUBLIC_NUMERIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更再抽選 / 純電断引継ぎ。
- advantageousSection: どき！すろ個別解析で通常C 78G非当選時の有利区間転落と78Gでの再セットを確認。朝一ランプ/区間開始契約は `APPLICABLE_BUT_DOKISURO_SPECIFIC_RESET_CONTRACT_PARTIAL`。
- resetBenefits: モード再抽選は確認。短縮天井・朝一専用高確・設定変更専用モード優遇率等は `NONE_NUMERICALLY_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ウエイト音/停止音/終了後パネルフラッシュは設定示唆であり朝一変更判別とは別。ガックン/確定的朝一ランプ判別は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更専用モード振り分け、朝一特定G以内当選率、リセット恩恵発生率は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。

## Sオリスロ2AA 系列 — 現在の監査状況
1. **SLOT WONDER AGENT** — 2019-07-08 / No.1298 / 登録済み。
2. **BELLE CITY** — 2019-08-05 / No.1299 / 登録済み。
3. **花娘** — canonical 2019-08-19 / No.1300 / 登録済み。8/5表記はDATE_CONFLICT保持。
4. **どき！すろ** — 2019-08-19 / No.1301 / 登録済み。8/4エコ納品・9/29新台納品予定は定義分離。
5. **タマどき！** — コンチェルト / コンサートホール系列。業界資料9〜10月、個別候補2019-10-07。未登録。なお日刊スポーツ2019-07-02記事には `ダマどき！` 表記があり、遊技通信系一次資料の `タマどき！` と表記CONFLICT候補。
6. **プレドキ！** — 後年回顧で同系列を確認。導入法人・時期・独立レコード要否を当時資料で追加監査。未登録。

## 2019-08-05群 — REOPENED / NOT CLOSED
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- No.1296 ハイハイシオサイ
- No.1297 バンバンクロス
- No.1299 BELLE CITY
- Sオリスロ2AA系列の遡及補完継続中のため最終CLOSED判定は保留。

## 2019-08-19群 — OPEN
- No.1300 花娘
- No.1301 どき！すろ
- **既知未処理: OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」（オーイズミ）**
- 日刊スポーツ導入カレンダーで同日2019-08-19導入を確認。GitHub main検索で既存レコードなしを確認済み。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: `docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md` 相当から再開。ただし現在は2019-08-19群とSオリスロ2AA漏れ補完を優先。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1300 / No.1301を再取得。
2. **No.1302候補 `OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」`（オーイズミ）** を2019-08-19群の次の未処理として処理。既存レコード検索は今回0件確認済みだが、次回もmain更新有無を再確認する。
3. 性能コア + v0.7 resetBehaviorを公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで横断し、欠損は十分な再探索後のみUNVERIFIED、競合は平均せずCONFLICT。
4. OVER-SLOT処理後、2019-08-19群を全メーカー / 別型式 / 別スペック / PB / 地域差で再監査してCLOSED可否を判定。
5. その後、時系列に進みつつ `タマどき！`（9〜10月候補）と `プレドキ！` のSオリスロ2AA系列を到達時または遡及監査で必ず回収する。
6. Sオリスロ2AA系列補完後、2019-08-05群も最終再監査してCLOSED可否を判定。

## 主要出典 — 取得日 2026-09-11
### どき！すろ / Sオリスロ2AA
- 日刊スポーツ 導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201908090000270.html
- 日刊スポーツ Sオリスロ2AA発表: https://www.nikkansports.com/amusement/pachislot/news/201907020000411.html
- 遊技通信 / 長崎県遊技業協同組合転載: https://nagasaki-yukyo.or.jp/information/jps%E3%80%81at%E9%80%A3%E6%9C%80%E5%A4%A7%E7%B4%8490%EF%BC%85%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%97%E3%81%9F6%E7%A4%BE%E5%85%B1%E5%90%8C%E4%BC%81%E7%94%BB%E3%81%AEpb%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001249/
- すろぱちくえすと どき！すろ: https://www.slopachi-quest.com/article/dokislo-settei/
- 2-9伝説: https://29den.com/hanamusume/
- モゲスロ WONDER AGENTS（同一正式型式reset表）: https://moge-site.com/archives/22080
- 遊技通信 検定通過: https://www.yugitsushin.jp/news/gyousei/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%886%E6%9C%883%E6%97%A5%EF%BC%89/
