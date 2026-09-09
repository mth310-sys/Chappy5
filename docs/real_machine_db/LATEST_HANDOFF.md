更新日: 2026-09-10

## 現在地点
- recordCount: **1159**
- latestRecordAdded: **イミソーレXX**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-11_imisore-xx.md`
- chronologicalFrontier: **2017-11-20**（日単位確定済み本線）
- frontierLatestMachine: **グレートキングハナハナ-25 — No.1158**
- schema: **resetBehavior v0.7**
- status: **2017-11-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__2017-11-20_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__2017-11_MONTH_DAY_UNRESOLVED_IMISORE_XX**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1156「ニューパルサーSPⅡ」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1156件 / chronologicalFrontier 2017-11-06 / 11/6群OPEN**。
- 2017-11-06同日群を複数導入カレンダー・月間一覧で横断し、パチスロはNo.1156「ニューパルサーSPⅡ」のみで一致。**2017-11-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とした。
- 11/7〜11/19の空白を監査し、保留中の「イミソーレXX」を再同定。2017-08-07の30Φ `イミソーレ3V-30`（7S0676）とは別型式で、P-WORLDに **イミソーレ2R / 7S0671 / 2017年11月導入**として独立登録されていることを確認。日単位は十分な再探索後も固定できず、月単位レコードNo.1159として漏れ回収。
- 2017-11-20群は複数カレンダーで **「戦国コレクション3」「グレートキングハナハナ-25」** の2機が一致。No.1157 / No.1158として収集し、**2017-11-20_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とした。

## No.1157 — 戦国コレクション3
- path: `docs/real_machine_db/machines/2017-11-20_sengoku-collection-3.md`
- manufacturer: KPE
- releaseDate: 2017-11-20
- formalModelName: `戦国コレクション3／KR`
- certificationNumber: `7S1038`
- systemType: A+ART / 5.9号機
- 機械割: **97.7 / 98.4 / 100.1 / 102.4 / 105.3 / 110.0%**
- ギフト合算: **1/256.0 → 1/157.9**
- ART初当たり: **1/397.6 → 1/373.1**
- 50枚ベース: **約34.4G**
- ART純増: **約1.7枚/G**、ボーナス込み約2.0枚/G
- 天井: **なし**
- resetBehavior: 設定変更で内部状態RESET・非有利区間開始・春ステージ・RTはボーナス後状態。純電源OFF→ONは内部状態/有利区間/RTを引継ぎ。有利区間ランプ（クレジットセグ右下ドット）点灯の朝一持越しは据え置き推測材料。本機固有ガックンはUNVERIFIED。

## No.1158 — グレートキングハナハナ-25
- path: `docs/real_machine_db/machines/2017-11-20_great-king-hanahana-25.md`
- manufacturer: パイオニア
- releaseDate: 2017-11-20
- formalModelName: `グレートキングハナハナ／EX`
- certificationNumber: `7S0838`
- systemType: 25ΦノーマルA / 完全告知
- 機械割: **96 / 98 / 101 / 104 / 107 / 112%**
- BIG: **1/299 → 1/234** / REG: **1/496 → 1/336** / 合算: **1/186 → 1/138**
- 50枚ベース: **約37G**
- BIG最大312枚 / REG最大130枚 / 天井なし
- resetBehavior: 設定変更後1回目BIG終了時のパネルフラッシュは全設定共通で **上部のみ37.50% / 上下12.50% / 合計50.00%**。通常BIG後にも発生するため確定判別ではない。純電断・据え置き低レベル状態、本機固有ガックンはUNVERIFIED。

## No.1159 — イミソーレXX
- path: `docs/real_machine_db/machines/2017-11_imisore-xx.md`
- manufacturer: エマ
- releaseDate: **2017-11（exact day UNVERIFIED_AFTER_RESEARCH）**
- formalModelName: `イミソーレ2R`
- retailerModelLabel: `イミソーレ2R-XX`
- certificationNumber: `7S0671`
- systemType: ノーマル / 完全告知 / BIG後100G小役ナビ
- 機械割: **96.5 / 97.9 / 100.1 / 103.1 / 105.8 / 109.0%**
- BIG: **1/235.7 → 1/227.6** / REG: **1/481.9 → 1/260.1** / 合算: **1/158.3 → 1/121.4**
- BIG約286枚 / REG約104枚 / BIG後100G「はながさタイム」
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- resetBehavior: 設定変更後/朝一初回BIG中の白ミニビスカス→逆押し時、第3停止色の設定示唆信頼度が大幅UP。色序列は **青＜黄＜緑＜赤**。色別変更専用数値、据え置き、純電断、ガックンはUNVERIFIED。
- 重要: 8月の30Φ `イミソーレ3V-30`（7S0676）とは別型式。性能値が一致しても統合しない。

## 品質メモ
- `イミソーレXX`の日単位導入日は、機種名/型式/検定番号/11月/導入日/納品を切り替え、P-WORLD月間カレンダー・機種DB・年表・解析・中古実機DB・回顧まで横断したが固定できずUNVERIFIED。
- `はながさタイム`はP-WORLDが「AT/ART非搭載ノーマルのコイン持ちUPゾーン」、中古実機DBが「AT」と表現。性能分類はP-WORLDをcanonicalとし、`CONFLICT_NOMENCLATURE_HANAGASA_TIME_AT_VS_NORMAL_NAV_ZONE`を保持。
- 11/6群と11/20群は複数カレンダー一致でCLOSED。月単位イミソーレXXは日付未解決だが採番済みのため漏れとしては回収済み。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1157〜1159を再取得。
2. **1159件 / 日単位chronologicalFrontier 2017-11-20 / 11/6・11/20群CLOSED** を正本として継続。
3. `イミソーレXX` exact dayについて新しい決定的資料が出れば追補するが、同じ検索の反復で本線を止めない。
4. 次の確定日 **2017-11-27「タロットエンペラー」** をNo.1160候補としてperformance core + resetBehavior v0.7収集。
5. 11/27同日全メーカー監査 → 漏れがなければCLOSED → 2017年12月へ前進。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
- P-WORLD 2017年11月導入カレンダー: https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2017-11
- P-WORLD イミソーレXX: https://www.p-world.co.jp/machine/database/8539
- HAZUSE イミソーレXX30 / 3V-30: https://hazuse.com/machine/pachislot/7S0676/
- ピーボム イミソーレ2R-XX: https://www.bomb-slot.jp/view/item/000000000649
- HAZUSE 戦国コレクション3: https://hazuse.com/machine/pachislot/7S0701/
- 一撃 戦国コレクション3: https://1geki.jp/slot/s_sengokucollection3/
- P-WORLD 戦国コレクション3: https://www.p-world.co.jp/machine/database/8506
- HAZUSE グレートキングハナハナ-25: https://hazuse.com/machine/pachislot/7S0838/
- パイオニア公式2017年製品: https://www.slot-pioneer.co.jp/products/2017.html
