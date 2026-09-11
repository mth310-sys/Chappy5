更新日: 2026-09-11

## 現在地点
- recordCount: **1307**
- latestRecordAdded: **タマどき！ — No.1307**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-10-07_tamadoki.md`
- chronologicalFrontier: **2019-10-07**
- frontierLatestMachine: **タマどき！ — No.1307**
- schema: **resetBehavior v0.7**
- status: **2019_10_07_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧スナップショットの `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1306を再取得して開始。
- 正本は No.1306 `スーパービンゴギャラクシー` / 2019-09-17群CLOSED。古いチャット進捗へ戻らず最新handoffから継続。
- 2019-09-18〜10-06境界を再監査。日刊スポーツ2019-09-06導入カレンダーでは9/17後、9/30はパチンコのみ、次の全国パチスロ群は10/7。
- Sオリスロ2AA系列 `タマどき！` を最優先監査。遊技通信系資料はコンチェルト系列へ9〜10月導入計画、パチマガスロマガは2019年10月、777パチガブ当時公式試打（2019-09-23公開）が **2019-10-07よりコンサートホール専用導入予定** と明記したため、ホール導入時系列canonicalを2019-10-07に固定。
- No.1307 **`タマどき！`** を登録。
- `タマどき！` は既存Sオリスロ2AA各PB版と同様、同一正式型式・同一メイン基板性能だが、法人専用版として独立名称・独自サブ演出を持つため、全機種方針上は独立レコード化。
- `プレドキ！` はP-WORLD/後年DBで同一性能かつ2019年10月扱いを再確認したが、今回の探索では **具体的なホール導入日/法人を固定できず**。時系列順を崩さないためまだ登録せず継続監査。

## No.1307 — タマどき！
- manufacturer: **ジェイピーエス（Sオリスロ2AA共同企画・コンチェルト/コンサートホール専用版）**
- formalModel: **`Sオリスロ2AA`**
- certificationNumber: **`9S0186`**
- releaseDate: **2019-10-07**
- generation/system: **6号機 / 疑似ボーナス連荘AT / PB**
- payout: **97.2 / 98.4 / 99.8 / 101.2 / 104.0 / 105.6%**
- ボーナス初当たり: **1/413.4 / 408.1 / 396.8 / 382.4 / 275.3 / 269.3**
- baseGamesPer50: **約53G/50枚**
- netIncrease: **約3.0枚/G**
- BIG: **70G / 約210枚**
- REG: **30G / 約90枚**
- 通常A天井: **1000G**
- 通常B天井: **500G**
- 通常C: **78Gまで約1/156で抽選、非当選で有利区間転落とする同型式解析あり**
- 通常D: **78G**
- 天国A/B・ドキドキ・超ドキドキ・保証: **32G**

### resetBehavior v0.7 — No.1307
- settingChange: 同一正式型式の当時解析で **天井RESET / 内部状態再抽選 / モード再抽選**。
- carryOver: タマどき！固有に据え置きを純電断から分離して直接規定する資料は `UNVERIFIED_AS_DISTINCT_TAMADOKI_CONDITION`。
- powerCycle: 同一型式の当時解析で **天井 / 内部状態 / モード CARRY_OVER**。
- gameCounterReset: 設定変更RESET、純電断CARRY_OVER。
- ceilingAfterReset: 通常最深1000G。設定変更専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- mode/state: 設定変更で再抽選、純電断で引継ぎ。リセット専用モード振り分け数値は `PUBLIC_NUMERIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- advantageousSection: 有利区間管理機。同型式の通常C後転落/再セット構造は確認。ただしタマどき！固有の朝一有利区間ランプ契約は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- resetBenefits: モード再抽選以外の短縮天井/朝一専用高確/専用当選率は `NONE_NUMERICALLY_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: タマどき！固有ガックン、朝一ランプ等の確定変更判別は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更時モード振り分け、朝一特定G以内当選率、恩恵発生率は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。

### No.1307 conflicts / quality
- 当時業界一次資料はSオリスロ2AA各派生の **メイン基板・リール制御・ボーナス確率・出玉率共通 / サブ側独自** を明記。性能コアとメイン基板reset契約の共有根拠に使用。
- 日刊スポーツ2019-07-02はコンチェルト版を **「ダマどき！」**、遊技通信転載・パチマガスロマガ・P-WORLD等は **「タマどき！」**。`NAME_VARIANT_CONFLICT_DAMADOKI_VS_TAMADOKI` として同一版の表記揺れで保持。
- ちょんぼりすた等の系列一括ページは2019-08-05導入とする一方、遊技通信系一次資料は法人別に導入時期が異なると明記し、タマどき！個別の当時試打は2019-10-07導入予定。`CONFLICT_GROUP_PAGE_2019_08_05_VS_TAMADOKI_SPECIFIC_2019_10_07` とし、個別当時資料をcanonical採用。

## 2019-09-17群 — CLOSED
1. **パチスロ ラブ嬢2** — No.1305。
2. **スーパービンゴギャラクシー** — No.1306。

## 2019-09-18〜10-06境界 — AUDITED
- 日刊スポーツ2019-09-06導入カレンダーでは9/30の新台はパチンコのみで、パチスロ全国導入記載なし。
- PB/地域専用機は `タマどき！` が10/7個別導入で確定したため境界外。
- `プレドキ！` は2019年10月までは確認したが日付未確定のため保留。漏れ防止のため次回も継続監査。

## 2019-10-07群 — OPEN
確認済み候補:
1. **タマどき！** — No.1307 / 登録済み。
2. **パチスロ 南国娘2** — 25Φ / 平和 / 型式 `S南国娘2H2` 候補 / 未登録。
3. **パチスロ 南国娘2-30** — 30Φ / アムテックス / 25Φとは別型式・別スペック / 未登録。
4. **カードバトルパチスロ ガンダム クロスオーバー** — ビスティ / 2019-10-07を日刊スポーツ2019-10-04版で確認 / 未登録。
5. **ドラゴンホイール** — コナミアミューズメント / 2019-10-07を日刊スポーツ2019-10-04版で確認 / 未登録。

注意:
- 日刊スポーツ2019-09-06版では10/7パチスロにS南国娘2のみ掲載だが、2019-10-04更新版ではガンダム クロスオーバー、ドラゴンホイールが追加。古い版だけで群を閉じない。
- 南国娘2 30Φは当時導入カレンダーで省略される場合があるため、HAZUSE/解析で別型式・別性能を直接確認して独立レコード化する。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — **2019-10-07 / No.1307 / 登録済み**。
6. プレドキ！ — **2019年10月候補 / 未登録**。P-WORLD・後年DBで同一性能。法人・具体導入日を次回も探索し、10/7以前/同日なら時系列を優先してNo.1308候補より先に処理する。

## 2019-08-05群 — REOPENED / NOT CLOSED
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- No.1296 ハイハイシオサイ
- No.1297 バンバンクロス
- No.1299 BELLE CITY
- Sオリスロ2AA系列の法人別導入監査を継続しているため最終CLOSED判定は保留。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）**。既QAなら次のGit追加順へ進み、性能コアを崩さずreset側のみ補完。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1307 を再取得。
2. **プレドキ！の具体導入日/導入法人を最優先で再探索**。2019-10-07以前または同日と固定できれば時系列優先で次レコード化。
3. それでも日付固定不能なら `2019-10-07_GROUP_OPEN` を継続し、次の未処理機種 **`パチスロ 南国娘2`（25Φ / 平和）** を No.1308候補として処理。
4. その後 **南国娘2-30 → カードバトルパチスロ ガンダム クロスオーバー → ドラゴンホイール**。全メーカー/別型式/別スペック/PB/地域差を監査して10/7群CLOSED可否を判定。
5. 遡及QAは **革命戦士長州力** から継続。

## 主要出典 — 取得日 2026-09-11
### No.1307 / Sオリスロ2AA
- 日刊スポーツ Sオリスロ2AA発表: https://www.nikkansports.com/amusement/pachislot/news/201907020000411.html
- 遊技通信系転載: https://nagasaki-yukyo.or.jp/information/jps%E3%80%81at%E9%80%A3%E6%9C%80%E5%A4%A7%E7%B4%8490%EF%BC%85%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%97%E3%81%9F6%E7%A4%BE%E5%85%B1%E5%90%8C%E4%BC%81%E7%94%BB%E3%81%AEpb%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001249/
- 777パチガブ タマどき！試打（10/7導入予定）: https://www.youtube.com/watch?v=bX1pGlgFGng
- パチマガスロマガ タマどき!: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/41/a.php
- パチマガスロマガ ゲーム性: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/41/l.php
- P-WORLD タマどき!: https://www.p-world.co.jp/machine/database/8987
- ちょんぼりすた系列一括: https://chonborista.com/slot/jps-slot/89525/
- P-WORLD プレドキ!: https://www.p-world.co.jp/machine/database/9067

### 境界 / 2019-10-07群
- 日刊スポーツ 2019-09-06版: https://www.nikkansports.com/amusement/pachislot/news/201909060000314.html
- 日刊スポーツ 2019-10-04更新版: https://www.nikkansports.com/m/amusement/pachislot/news/201910040000287_m.html
- HAZUSE 南国娘2 25Φ: https://hazuse.com/machine/pachislot/8S1296/
- HAZUSE 南国娘2-30: https://hazuse.com/machine/pachislot/8S1147/
