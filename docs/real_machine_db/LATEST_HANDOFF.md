更新日: 2026-09-10

## 現在地点
- recordCount: **1156**
- latestRecordAdded: **ニューパルサーSPⅡ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-11-06_new-pulsar-sp2.md`
- chronologicalFrontier: **2017-11-06**
- frontierLatestMachine: **ニューパルサーSPⅡ — No.1156**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT__2017-11-06_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、main実レコード、`LATEST_HANDOFF.md` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として採用。
- 開始時正本は **1155件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 2017-09-19群を導入カレンダー、メーカー別/年表系、当時解析で再横断。主要9/19一覧に現れる機種はNo.1155までのmain実レコードで充足していることを再確認した。
- 一部カレンダーで **「イミソーレXX」** が9/19欄に現れたが、別年表では11月扱い、さらにHAZUSE系では`イミソーレXX30 / イミソーレ3V-30`が2017-08-07として識別されるため、名称・別スペック・導入日を混同して9/19へ追加しなかった。`イミソーレXX`単独は11月群監査で正式型式/日付を再確認する。
- 複数系統で追加の9/19確定漏れが無いことを確認したため **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とした。
- 次の確定導入日を再照合し、**2017-11-06「ニューパルサーSPⅡ」** をNo.1156として追加。chronologicalFrontierを2017-11-06へ前進。

## No.1156 — ニューパルサーSPⅡ
- manufacturer: **山佐**
- releaseDate: **2017-11-06**
- generation: **5.9号機（5号機）**
- systemType: **ノーマルAタイプ**
- formalModelName: **`ニューパルサーSP2/DD`**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### 性能コア
- 機械割: **96.9 / 98.3 / 100.2 / 102.3 / 105.1 / 108.9%**
- BIG: **1/282.4 / 282.4 / 275.3 / 266.4 / 258.0 / 247.3**
- REG: **1/420.1 / 404.5 / 385.5 / 356.1 / 321.2 / 303.4**
- 合算: **1/168.9 / 166.3 / 160.6 / 152.4 / 143.0 / 136.2**
- 50枚ベース: **約36G**（詳細資料では約35.1〜37.3Gの設定差）
- BIG: **312枚固定**
- REG: **約104枚**
- AT/ART/CZ: **非搭載**
- 天井: **なし**

### resetBehavior v0.7
- 設定変更: 天井/ゲーム数当選管理は非搭載のため `NOT_APPLICABLE`。ただし **設定変更直後の初回ボーナス終了画面に専用振り分け**あり。
- 据え置き: 朝一初回ボーナスは資料上 **「ボーナス2回目以降（据え置き初回含む）」** の通常終了画面テーブルを使用。
- 純電源OFF→ON: 据え置き表と全内部挙動を勝手に同義化せず **`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`**。
- 天井短縮 / 朝一専用当選モード / 高確優遇: **NONE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_NORMAL_TYPE_NO_ADVANTAGEOUS_SECTION**。
- 変更判別: 朝一1回目ボーナスの終了画面が設定変更専用テーブル。**カエル5匹は設定変更初回で25.0 / 25.4 / 25.8 / 27.3 / 27.7 / 28.1%**（設定1〜6）。据え置き初回を含む通常テーブルでは **3.9 / 4.7 / 5.5 / 6.3 / 7.8 / 7.8%**。
- 設定変更初回の全9パターン公開振り分けは実レコードの`numericResetData`へ保存。
- 本機固有ガックン / 初期出目 / ランプ確定判別: **UNVERIFIED_AFTER_RESEARCH**。

## 品質メモ
- `イミソーレXX`は9/19へは追加しない。11月扱い資料と別スペック`イミソーレXX30 / 3V-30`の存在があるため、11月群で正式型式と日付を再固定する。
- ニューパルサーSPⅡの主要性能値は複数解析で一致。
- `baseGamesPer50`は約36Gの代表値と、約35.1〜37.3Gの設定差レンジを平均せず別定義として保持。
- 型式`ニューパルサーSP2/DD`は中古機DB系で確認。検定番号は`SPⅡ / SPII / SP2 / DD / 山佐 / 検定番号 / 7S`等へ検索語を変えて再探索したが直接固定できずUNVERIFIED。

## 2017-11-06群 — OPEN
- No.1156「ニューパルサーSPⅡ」まで登録。
- 次回は **2017-11-06同日群をメーカー別一覧・当時導入カレンダー・HAZUSE/P-WORLD/解析系で横断監査**し、同日漏れがあればNo.1157候補として処理。
- 同日漏れが無ければ11/6群をCLOSED化し、11月の次の実導入日へ進む。
- 既知の後続候補として **2017-11-20「戦国コレクション3」「グレートキングハナハナ25π」** が年表系で確認されているが、先に11/6〜11/20間の漏れと `イミソーレXX` の正確な日付/別スペックを監査すること。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1156を再取得。
2. **1156件 / chronologicalFrontier 2017-11-06 / 11/6群OPEN** を正本として継続。
3. 2017-11-06同日全メーカー監査を行い、No.1156までのmain実レコードと突合。
4. 漏れがあれば最古未処理を **No.1157候補**としてperformance core + resetBehavior v0.7を収集・保存。
5. 漏れが無ければ11/6群CLOSED → 11月の次日付群へ前進。`イミソーレXX`は正式型式・スペック・導入日を分離確認してから採番。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
- ちょんぼりすた ニューパルサーSP2: https://chonborista.com/slot/yamasa-slot/47450/
- 一撃 ニューパルサーSPⅡ: https://1geki.jp/slot/s_newpulsar_sp2/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_newpulsar_sp2/61/
- P-WORLD ニューパルサーSPII: https://www.p-world.co.jp/machine/database/8518
- なな徹 ニューパルサーSPⅡ: https://nana-press.com/kaiseki/machine/59/
- スロぱちクエスト: https://www.slopachi-quest.com/article/new-pulsar-sp2/
- 楽スロ ボーナス終了画面: https://rakuslo.com/newpulsarsp2-bonusend.html
- 中古実機 中一商事: https://item.rakuten.co.jp/auc-nakaiti/newpulsar_sp2/
