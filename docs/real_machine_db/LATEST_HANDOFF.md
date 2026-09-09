更新日: 2026-09-10

## 現在地点
- recordCount: **1174**
- latestRecordAdded: **超速回胴 鬼若弁慶**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-02-19_oniwaka-benkei.md`
- chronologicalFrontier: **2018-02-19**
- frontierLatestMachine: **超速回胴 鬼若弁慶 — No.1174**
- schema: **resetBehavior v0.7**
- status: **2018-02-19_GROUP_OPEN_2_OF_3_CALENDAR_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1173 `パチスロ GATE` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1173件 / chronologicalFrontier 2018-02-19 / 2/19群OPEN 1/3処理済み**。
- handoff指定の次の未処理 `超速回胴 鬼若弁慶` をNo.1174としてperformance core + resetBehavior v0.7で追加。
- 2/19群は `パチスロ GATE` / `超速回胴 鬼若弁慶` / `コンチネンタルゼロ` の3機中2機処理済み。まだOPEN。

## No.1174 — 超速回胴 鬼若弁慶
- path: `docs/real_machine_db/machines/2018-02-19_oniwaka-benkei.md`
- manufacturer: ボーダー
- releaseDateCanonical: **2018-02-19**
- generation/system: 5.9号機世代 / ノーマルA / 完全告知 / リアルボーナス
- formalModelName: `オニワカベンケイ`
- certificationNumber: `7S1056`
- 機械割: **97.62 / 98.19 / 101.11 / 104.62 / 107.92 / 110.26%**
- BIG: **1/278.88 / 276.52 / 266.41 / 255.00 / 246.38 / 240.06**
- REG: **1/313.57 / 312.08 / 299.25 / 283.71 / 265.33 / 239.18**
- 合算: **1/147.60 / 146.61 / 140.94 / 134.03 / 127.75 / 119.81**
- 50枚ベース: **約32.6G**（ちょんぼりすた明示。パチマガ当時ページは同欄調査中のため信頼度を過剰評価しない）
- BIG約307枚 / REG約102枚
- 天井: **なし**

### releaseDate conflict
- PiDEAの2017-10-17発表会記事は「導入(開店)日は12月4日を予定」と記録し、2017年導入一覧にも12/4掲載が残る。
- HAZUSE / ちょんぼりすた / DMMぱちタウンは **2018-02-19導入開始**で一致。
- 実導入DBの複数一致を優先し、`CONFLICT_RELEASE_DATE_PLANNED_2017_12_04_VS_ACTUAL_2018_02_19`。2018-02-19をcanonical、2017-12-04は発売前予定日として保持。

### resetBehavior v0.7
- ちょんぼりすたは本機の朝一について**「ノーマルタイプなので朝イチの恩恵は無し」**と明記。天井非搭載のためゲーム数天井RESET/短縮はN/A。
- 設定変更時の成立済みボーナス・低レベル内部状態・初期出目は本機固有の直接契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 据え置きを純電源OFF→ONと独立条件で固定した本機固有資料は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 純電源OFF→ON時の成立済みボーナス/低レベル状態は`UNVERIFIED_AFTER_RESEARCH`。
- ゲーム数解除/天国モード、AT/ART/CZ高確、短縮天井は本機の確認済みノーマルAゲーム性にはN/A。
- 有利区間を用いるAT/ART/CZゲーム性は確認せず、`advantageousSectionReset: NOT_APPLICABLE_TO_CONFIRMED_NORMAL_A_GAMEPLAY`。
- 設定変更専用の初当たり率、モード振り分け、恩恵発生率、主要な数値的不利要素は`NONE_CONFIRMED_AFTER_RESEARCH`。
- ガックンは当時資料で`調査中`。本機固有の発生条件/確率・初期出目・ランプ等の確定変更判別は再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- BIG中リール枠ランプ/虹色ランプは設定示唆であり設定変更判別ではないためresetDetectionへ混入しない。

## 2018-02-19群監査
K-Navi全国導入カレンダーでパチスロ3機を確認。
1. `パチスロ GATE` — **No.1173 完了**
2. `超速回胴 鬼若弁慶` — **No.1174 完了**
3. `コンチネンタルゼロ` — **No.1175候補 / 未処理**

- status: `2018-02-19_GROUP_OPEN_2_OF_3_CALENDAR_CONFIRMED_PROCESSED`
- HAZUSEでも3機の2018-02-19を個別確認済み。
- 月単位欄に `トリプルクラウンZEROII SECOND EDITION` があるため、2/19群処理後の月内境界監査でexact dayを別途確認し、日付不明のまま2/19へ強制混入しない。

## 継続注意事項
- `コンチネンタルゼロ`はHAZUSEで2018-02-19、型式`コンチネンタルゼロZZ`、検定番号`7S1397`、ユニバーサルブロスを確認済み。次回No.1175候補として最優先。
- `超速回胴 鬼若弁慶`は発表時12/4予定と実導入2/19を混同しない。
- ノーマル/A+RT機の成立済みボーナスや低レベル内部状態の設定変更/純電断挙動を一般論から埋めない。
- 機械割/ボーナス合算等の資料差は平均化せずCONFLICT保持。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1174を再取得。
2. **1174件 / chronologicalFrontier 2018-02-19 / 2/19群OPEN 2/3処理済み** を正本として継続。
3. 次の未処理 `コンチネンタルゼロ` をNo.1175候補としてperformance core + resetBehavior v0.7で回収。
4. 2/19同日全メーカー・別スペック・地域差を再監査して群CLOSED判定。
5. その後、月単位掲載 `トリプルクラウンZEROII SECOND EDITION` のexact dayを監査して時系列を確定。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1174 超速回胴 鬼若弁慶
- HAZUSE: https://hazuse.com/machine/pachislot/7S1056/
- ちょんぼりすた: https://chonborista.com/slot/border/54563/
- PiDEA: https://www.pidea.jp/articles/RB%E3%81%AF%E7%9B%AE%E6%8A%BC%E3%81%97%E4%B8%8D%E8%A6%81%EF%BC%81%E8%B6%85%E9%80%9FA%E3%82%BF%E3%82%A4%E3%83%97%E3%80%8C%E9%AC%BC%E8%8B%A5%E5%BC%81%E6%85%B6%E3%80%8D%EF%BC%8F%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC
- パチマガスロマガ 設定推測: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/border_slot/01/j.php
- パチマガスロマガ 小役/50枚欄: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/border_slot/01/c.php
- 中一商事: https://www.nakaiti.com/html/sBorder001.html
- DMMぱちタウン: https://p-town.dmm.com/machines/3030
- 2017年導入一覧（旧12/4予定の競合証拠）: https://www.slopachi-quest.com/article/2017-sindai/

### 次候補 / 同日監査
- コンチネンタルゼロ HAZUSE: https://hazuse.com/machine/pachislot/7S1397/
