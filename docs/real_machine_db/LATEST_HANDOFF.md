更新日: 2026-09-11

## 現在地点
- recordCount: **1335**
- latestRecordAdded: **DIAMOND — No.1335**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-02-24_diamond-jps.md`
- chronologicalFrontier: **2020-02-24**
- frontierLatestMachine: **DIAMOND — No.1335**
- schema: **resetBehavior v0.7**
- status: **2020-02-24_GROUP_OPEN_1_OF_3_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1334「SLOTバジリスク～甲賀忍法帖～絆2」を再取得してから継続。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 2020-02-18〜02-23境界を再監査。K-Navi 2020年2月カレンダーでは2/17の次のパチスロ全国一斉導入群は2/24で、追加独立候補を固定できなかったため本線を2/24へ前進。
- 2020-02-24群の第一候補 **DIAMOND（JPS）** をNo.1335として追加。
- `DIAMOND / Diamond / ダイヤモンド / Sオリスロ3AA / 9S1375 / JPS / ジェイピーエス` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / 有利区間 / ランプ / ガックン / リール` を組み替え、業界一次記事・HAZUSE・P-WORLD・パチ7・同型式PB資料・回顧資料を横断。
- 性能コアは複数系統で一致。resetBehaviorは天井/モード/状態がゲームフロー上非該当のノーマル機として整理し、機種固有のガックン・リール初期挙動・純電断時ボーナス成立状態は十分な再探索後のみUNVERIFIEDとした。
- 全国導入日はK-Navi **2020-02-24**、HAZUSE **2020-02-25**、パチ7 **2020-03-02**で競合。平均化せず `CONFLICT_RELEASE_DATE_2020_02_24_VS_2020_02_25_VS_2020_03_02` として保持し、本DB時系列は「全国一斉導入開始日」と明示するK-Navi 2/24をcanonicalとした。

## No.1335 — DIAMOND
- path: `docs/real_machine_db/machines/2020-02-24_diamond-jps.md`
- manufacturer: **JPS（ジェイピーエス）**
- formalModel: **`Sオリスロ3AA`**
- certificationNumber: **9S1375**
- releaseDate canonical: **2020-02-24**
- releaseDate conflict: **2020-02-24 / 2020-02-25 / 2020-03-02**
- generation/system: **6号機 / ノーマル / 完全告知 / 技術介入 / 2段階設定**
- payoutRate: 設定5/6とも **チェリー狙い101% / 完全攻略104%**
- BIG: **設定5 1/172 / 設定6 1/218**
- REG: **設定5 1/437 / 設定6 1/218**
- 合算: **設定5 1/124 / 設定6 1/109**
- base: 設定5 **36.8G（チェリー狙い）/39.8G（完全攻略）**、設定6 **37.6G/40.8G**
- BIG: **210枚超払い出し終了 / 実獲得約195枚**
- REG: **105枚超払い出し終了 / 実獲得約104枚**
- 天井: **非搭載**

### resetBehavior v0.7 — No.1335
- resetBehaviorQA: **COMPLETE_NOT_APPLICABLE_CORE_WITH_UNVERIFIED_MACHINE_SPECIFIC_DETECTION**
- 設定変更: 天井・通常時モード・低確/高確状態管理がないため、AT/ART型のリセット恩恵はNOT_APPLICABLE。選択設定5/6に対応するボーナス/小役確率へ変化。
- 据え置き: 引き継ぐ天井G・モード・有利区間進行はNOT_APPLICABLE。
- 純電源OFF→ON: 引き継ぐ天井G・通常モード・状態・有利区間進行はNOT_APPLICABLE。機種固有のボーナス成立状態/告知状態はUNVERIFIED_AFTER_RESEARCH。
- gameCounterReset / ceilingAfterReset: **天井非搭載のためNOT_APPLICABLE**。
- modeAfterReset / stateAfterReset: **NOT_APPLICABLE_TO_MAIN_GAME_FLOW**。
- advantageousSectionReset: ノーマル機の朝一客行動に関係する公開有利区間管理を確認できず **NOT_APPLICABLE_TO_MAIN_GAME_FLOW**。6号機一般論から補完しない。
- resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン、朝一出目/ランプ等の確定変更判別は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: 天井/短縮天井/朝一専用モードなし。設定変更専用の当選率・恩恵発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## No.1335 品質注記 / CONFLICT
- releaseDateは **2/24 vs 2/25 vs 3/2**。平均化せず全根拠をレコードに保持。
- 日刊スポーツ/娯楽産業は一般販売版DIAMONDを「2月末から導入予定」とするため、2/24〜3/2の掲載差が当時の予定/全国導入定義差を含む可能性がある。推測で単一化しない。
- メーカー表記はHAZUSEに「ジェイビーエス」とあるが、JPS公式権利表記・複数業界一次資料に基づきcanonicalは **JPS（ジェイピーエス）**。
- 210/105枚は払い出し終了条件、195/104枚は実獲得目安であり定義を混ぜない。

## 2020-02-24群監査
- K-Navi掲載: **DIAMOND / スロまる / パチスロファンタシースターオンライン2**。
- **DIAMOND — No.1335 処理済み**。
- **スロまる — 未処理**。
- **パチスロファンタシースターオンライン2 — 未処理**。
- `Sオリスロ3AA` はDIAMOND / HYPER UPYELL / パチスロ123 / スロまるの同型式PB群。HYPER UPYELLは1/8、パチスロ123は1月末導入資料があるため、2/24群に新規として混入させない。スロまるは2月末・K-Navi2/24掲載のため次に独立レコード処理する。
- 群判定: **OPEN**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- `2007-03_wild7.md` まで再QA済み。
- 次回: `docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`（わんぱくパイロット大冒険）。
- 今回は本線No.1335追加を優先し、遡及QAは進めていない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1335を再取得。
2. 同じ **2020-02-24群** の次の未処理機種を継続。
3. No.1336第一候補は **スロまる（JPS / Sオリスロ3AA）**。同型式だからと機械的転記せず、PB固有導入日・外観/告知差・公開資料を再確認し、性能コア＋resetBehavior v0.7で登録。
4. 続いて **パチスロファンタシースターオンライン2（Sammy）**。
5. 2/24群を全メーカー/別型式/別スペック/PB/地域差で最終監査してCLOSED可否を判定。
6. 遡及QAは **わんぱくパイロット大冒険** から継続。

## 主要出典 — 取得日 2026-09-11
### No.1335 DIAMOND
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001537/
- 日刊スポーツ/娯楽産業: https://www.nikkansports.com/amusement/pachislot/news/202001170000194.html
- グリーンべると: https://web-greenbelt.jp/post-35245/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0032/
- パチ7: https://pachiseven.jp/machines_v2/5979
- P-WORLD: https://www.p-world.co.jp/machine/database/9131

### 群監査 / 次境界
- K-Navi 2020年2月新台カレンダー: https://p-kn.com/calendar/202002/
