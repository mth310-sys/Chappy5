更新日: 2026-09-10

## 現在地点
- recordCount: **1142**
- latestRecordAdded: **想定科学パチスロ STEINS;GATE廻転世界のインダクタンス ランヴォア**（オーイズミ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_steins-gate-ranvoir.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **STEINS;GATE ランヴォア — No.1142**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1141「シンデレラブレイド3」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1141件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 前handoff最優先候補 **「想定科学パチスロ STEINS;GATE廻転世界のインダクタンス ランヴォア」** をGitHub重複検索後、performance core + resetBehavior v0.7を収集し **No.1142** としてmainへ保存。
- オーイズミ製。HAZUSE・パチビーは導入 **2017-09-19**、グリーンべると当時業界記事は納品9/18開始で整合。
- 正式型式 **`パチスロシュタインズゲートR／WX`**、検定番号 **`7S0786`**。
- 性能コア: 機械割 **97.3 / 99.0 / 101.7 / 104.6 / 107.4 / 110.8%**、ボーナス合算 **1/196.2 / 188.9 / 180.0 / 172.9 / 168.5 / 157.9**。
- ベース **約37.9G/50枚**、RT純増 **約0.6枚/G**、PBB最大402枚 / BIG最大202枚 / REG最大40枚、RT30G・ループ率約60%。
- 通常時500G消化で救済CZ「オペレーション・ウルド」（RT期待度約60%）。RT/ボーナス確定天井ではないため定義を分離。
- resetBehavior: 設定変更で500G救済CZ進捗RESET。**ボーナス中 / オペレーション・ウルド中 / RT中 / ラジ館ステージ中に設定変更された場合、変更後はオペレーション・ウルドから開始**する当時解析を確認。
- 通常状態からの設定変更後開始ステージ/内部状態、据え置き時・純電源OFF→ON時の500Gカウンタ/RT-CZ状態は表記揺れ・型式・朝一/据え置き/電断語を変えて再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の500G未満短縮、専用モード振り分け、通常朝一初当たり優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有の確定ガックン/初期出目/ランプ判別も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1142 — STEINS;GATE ランヴォア
- manufacturer: **オーイズミ**
- releaseDate: **2017-09-19**
- formalModelName: **パチスロシュタインズゲートR／WX**
- certificationNumber: **7S0786**
- generation/system: **5号機 / A+RT・完走型ループRT**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **500G救済CZカウンタRESET**。
- special-state reset: **BONUS / Operation Urd / RT / ラジ館中 → Operation Urd開始**。
- stay setting: **UNVERIFIED_AFTER_RESEARCH**（カウンタ/内部状態の直接契約）。
- pure power OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- normal rescue: **500G → Operation Urd / RT期待度約60%**。
- reset shortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset detection / gakkun: **UNVERIFIED_AFTER_RESEARCH**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。SLOTデビルマンχは9/4 vs 9/19の導入日CONFLICTを保持。

## 2017-09-19群 — OPEN
登録済み:
1. パチスロ ゴルゴ13（SANKYO 2017版）— No.1135
2. パチスロ亜人 — No.1136
3. パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ- — No.1137
4. ぱちスロ ウルトラセブン — No.1138
5. SLOT魁!!男塾〜目指せ！闘宴大武會〜 — No.1139
6. 盗忍！剛衛門 — No.1140
7. シンデレラブレイド3 — No.1141
8. **想定科学パチスロ STEINS;GATE廻転世界のインダクタンス ランヴォア — No.1142**

### 同日横断監査・未処理候補
- **ワンダークーちゃん — No.1143候補**。HAZUSEで **2017-09-19 / 山佐 / 型式 `ワンダークーちゃん／GG` / 検定番号 `7S0941`** を先行確認済み。次本線としてperformance core + resetBehavior v0.7を処理する。
- 上記処理後も全メーカー・表記揺れ・地域導入差で2017-09-19群を横断監査し、漏れがなければCLOSED判定する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1142を再取得。
2. **1142件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「ワンダークーちゃん」— No.1143候補**。
4. その後、2017-09-19同日全メーカー監査を継続し、追加漏れがなければCLOSED判定して次導入日群へ進む。
5. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1142 STEINS;GATE ランヴォア
- グリーンべると: https://web-greenbelt.jp/00009831/
- HAZUSE: https://hazuse.com/machine/pachislot/7S0786/
- パチビー: https://www.pachibee.jp/machines/index/217080015
- P-WORLD: https://www.p-world.co.jp/machine/database/8480
- すろぱちくえすと: https://www.slopachi-quest.com/article/steinsgate2/
- 2-9伝説: https://29den.com/steinsgate2/

### 次候補先行確認
- HAZUSE ワンダークーちゃん: https://hazuse.com/machine/pachislot/7S0941/
