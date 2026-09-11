更新日: 2026-09-11

## 現在地点
- recordCount: **1298**
- latestRecordAdded: **SLOT WONDER AGENT**（遡及漏れ補完）
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-07-08_slot-wonder-agent.md`
- chronologicalFrontier: **2019-08-05**
- frontierLatestMachine: **バンバンクロス — No.1297**
- schema: **resetBehavior v0.7**
- status: **RETROACTIVE_BOUNDARY_REOPENED_S_ORISLO2_PB_VARIANTS_AUDIT_ACTIVE**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1296 `ハイハイシオサイ` を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- handoff記載どおり、2019-08-05群の既知未処理だった No.1297 `バンバンクロス` を性能コア + resetBehavior v0.7で登録。
- 8/5群CLOSED監査中に、JPSの共通型式 `Sオリスロ2AA` を用いた複数ホール法人PB系列が既存キューから漏れていることを検出。
- 当時業界資料で `SLOT WONDER AGENT` / `BELLE CITY` / `花娘` / `どき!すろ` / `タマどき!` を確認。後年資料では `プレドキ!` も同系列候補として存在。
- 系列は同一メイン基板・リール・基本出玉性能を共有する一方、法人・サブ基板・サウンド・パネル・設定示唆・導入時期が異なるため、全機種方針に従い個別レコード化する。
- 最古の確認済み未収録機 `SLOT WONDER AGENT` は2019-07-08導入が複数資料で一致するため、No.1298として遡及追加。これにより7月境界を再OPENし、時系列漏れ補完を優先する。

## No.1297 — バンバンクロス
- manufacturer: **サボハニ（大都技研グループ）**
- formalModel: **`S BANG BANG CROSS SA1`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate canonical: **2019-08-05**（愛媛県のみ2019-07-22先行資料あり）
- generation/system: **6号機 / ノーマルAタイプ / 技術介入**
- 設定: **1 / C / 5 / C+**
- 完全攻略機械割: **100.0 / 105.8 / 106.5 / 111.8%**
- BIG: **1/324.4 / 1/762.0 / 1/278.9 / 1/697.2**
- CHALLENGE BONUS: **1/324.4 / 1/104.5 / 1/322.8 / 1/95.0**
- 合算: **1/162.2 / 1/91.9 / 1/149.6 / 1/83.6**
- baseGamesPer50: **約45G/50枚**
- 基本獲得: **BIG最大259枚 / CB最大112枚**
- 天井: **非搭載**

### resetBehavior v0.7 — バンバンクロス
- 天井・AT/ART/CZ・有利区間による朝一状態はNOT_APPLICABLE。
- 設定変更専用の短縮天井・朝一高確・ボーナス優遇は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更 / 据え置き / 純電源OFF→ONの本機固有リール初期位置・成立済みボーナス境界は検索語・資料系統変更後も直接契約を固定できず `PUBLIC_DETAIL_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン発生条件・発生率・確定性は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定C BIGは複数一致 `1/762.0` に対し一部二次資料 `1/732.0` がありCONFLICT。canonicalは1/762.0。

## No.1298 — SLOT WONDER AGENT（遡及漏れ補完）
- manufacturer: **ジェイピーエス（タイラベストビート / ワンダーランドPB）**
- formalModel: **`Sオリスロ2AA`**
- certificationNumber: **`9S0186`**
- releaseDate canonical: **2019-07-08**
- generation/system: **6号機 / AT / 疑似ボーナス連荘タイプ / PB**
- 機械割: **97.2 / 98.4 / 99.8 / 101.2 / 104.0 / 105.6%**
- AT初当たり: **1/413.4 / 408.1 / 396.8 / 382.4 / 275.3 / 269.3**
- baseGamesPer50: **約53.0G/50枚**
- netIncrease: **約3.0枚/G**
- 基本獲得: **BIG 70G 約210枚 / REG 30G 約90枚**
- 最深天井: **有利区間1000G消化でボーナス当選**

### resetBehavior v0.7 — SLOT WONDER AGENT
- settingChange: **天井リセット / 内部状態再抽選 / モード再抽選**。
- powerCycle: **天井引継ぎ / 内部状態引継ぎ / モード引継ぎ**。
- carryOver: 据え置き独立条件の直接表は未確認。純電断引継ぎ契約と整合するが、別条件としては `UNVERIFIED_AS_DISTINCT_CONDITION`。
- ceilingAfterReset: 設定変更専用短縮天井は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 再抽選は確認。設定変更時モード振り分け数値は `PUBLIC_NUMERIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- advantageousSection: 通常Aで78Gまで抽選後、非当選時に有利区間転落という本機仕様は確認。設定変更 / 据え置き / 純電断ごとの区間ランプ・開始状態の直接契約は `APPLICABLE_BUT_RESET_CONTRACT_PARTIAL`。
- resetDetection: 当時資料は「リセット狙いできない / 朝一挙動調査中」。ガックンや確定的ランプ判別は固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## Sオリスロ2AA PB系列 — 境界監査中
当時業界資料で同一型式 / 共通基本性能として以下を確認。

1. **SLOT WONDER AGENT** — タイラベストビート / ワンダーランド系列。2019-07-08で登録済み No.1298。
2. **BELLE CITY** — ザ・シティ系列。業界資料は「8月」、モゲスロ個別索引は2019-08-05。**次の登録候補 No.1299**。
3. **花娘** — JIN系。業界資料は8月納品。日刊スポーツ/モゲスロ個別では2019-08-19、一部後年まとめでは8/5表記がありDATE_CONFLICT。個別当時資料を優先して確定する。
4. **どき!すろ** — JPS系。業界資料はエコ/中古活用仕様8/4納品、新台仕様9/29納品。日刊スポーツ等で2019-08-19導入表記あり。納品形態とホール導入日の定義を分けて監査する。
5. **タマどき!** — コンチェルト / コンサートホール系列。業界資料は9〜10月、公式系紹介では2019-10-07導入候補。個別確定待ち。
6. **プレドキ!** — 後年回顧で同系列6機目として確認。導入法人・時期・独立レコード要否を当時資料で追加監査する。

## 2019-08-05群 — REOPENED / NOT CLOSED
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- No.1296 ハイハイシオサイ
- No.1297 バンバンクロス
- 追加漏れ候補: **BELLE CITY**（Sオリスロ2AA PB）
- 8/5群はPB/地域差監査で漏れが見つかったためCLOSED判定を撤回/保留。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-02_new-hanahana-30.md` 相当のニューハナハナ-30レコードから再開**。ただし現在は新規時系列のSオリスロ2AA漏れ補完を優先する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1297 / No.1298を再取得。
2. **No.1299候補 `BELLE CITY`** をSオリスロ2AA共通性能の流用可否を各出典で確認しつつ、固有法人・導入日・resetBehaviorを個別収集して登録。
3. その後、2019-08-19境界の `花娘` / `どき!すろ` を個別監査。導入日競合は平均せずCONFLICT保持。
4. 9〜10月境界で `タマどき!`、さらに `プレドキ!` を当時資料まで横断し、漏れなく個別登録。
5. Sオリスロ2AA系列の補完後、2019-08-05群を全メーカー / 別型式 / 別スペック / PB / 地域差で再監査しCLOSED可否を再判定。
6. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### バンバンクロス
- グリーンべると: https://web-greenbelt.jp/00011396/
- K-Navi: https://p-kn.com/slot/3285/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/88363/
- 一撃: https://1geki.jp/slot/s_banbanc/
- P-WORLD: https://www.p-world.co.jp/machine/database/9003
- すろぱちくえすと: https://www.slopachi-quest.com/article/bangbangcross-settei/

### SLOT WONDER AGENT / Sオリスロ2AA系列
- 遊技通信 / 長崎県遊技業協同組合転載: https://nagasaki-yukyo.or.jp/information/jps%E3%80%81at%E9%80%A3%E6%9C%80%E5%A4%A7%E7%B4%8490%EF%BC%85%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%97%E3%81%9F6%E7%A4%BE%E5%85%B1%E5%90%8C%E4%BC%81%E7%94%BB%E3%81%AEpb%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001249/
- 遊技通信 検定通過: https://www.yugitsushin.jp/news/gyousei/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%886%E6%9C%883%E6%97%A5%EF%BC%89/
- モゲスロ: https://moge-site.com/archives/22080
- すろぱちくえすと 天井: https://www.slopachi-quest.com/article/wonder-agents-tennjou/
- すろぱちくえすと 設定: https://www.slopachi-quest.com/article/wonder-agents-settei/
- ちょんぼりすた: https://chonborista.com/slot/jps-slot/89525/
