更新日: 2026-09-12

## 現在地点
- recordCount: **1452**
- latestRecordAdded: **パチスロうまい棒 — No.1452**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-13_umaibo.md`
- chronologicalFrontier: **2021-12-13**
- frontierLatestMachine: **パチスロうまい棒 — No.1452**
- schema: **resetBehavior v0.7**
- status: **2021-12-13_GROUP_CLOSED_AFTER_1_OF_1_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1451「パチスロ ミクちゃんとイドムンのミラクルチャレンジ」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1452「パチスロうまい棒」を追加。
- アムテックス製、型式 `Sうまい棒M7`、検定番号 `1S1043`、2021-12-13導入。6.2号機ノーマルAタイプ/完全告知。
- 設定1〜6の機械割 **97.5 / 98.5 / 99.8 / 103.0 / 104.5 / 106.8%**、BIG **1/273.1 → 1/256.0**、REG **1/425.6 → 1/256.0**、合算 **1/166.3 → 1/128.0** をHAZUSE・業界記事・複数解析資料で照合。
- 50枚ベースは設定1約39G。BIG平均264枚・最大271枚、REG100枚。天井非搭載。
- resetBehaviorはノーマルAタイプにつき、ゲーム数天井/短縮天井、AT/ARTモード、高確/CZはNOT_APPLICABLE。設定変更専用の朝一モード、CZ/AT優遇、比較可能な公開朝一数値は確認されず。
- 設定変更・据え置き・純電源OFF→ON時の成立済みボーナス/告知状態、本機固有ガックン、朝一表示/出目による変更判別は検索語・資料系統を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的6号機挙動から推測補完していない。
- 1geki 2021年12月カレンダーは12/13のパチスロを本機1機のみ掲載。グリーンべると/遊技日本も12/13導入開始を独立確認。追加漏れを示す根拠がないため **2021-12-13群CLOSED**。
- 遡及QAは `2007-06-25_triple-crown-30.md`（トリプルクラウン-30）を再探索。既存 `COMPLETE_CORE` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- トリプルクラウン-30は天井・RT/ART/CZ・有利区間が非該当。一方、設定変更/据え置き/純電断時の成立済みボーナス・告知状態、本機固有ガックン/初期出目判別は、表記揺れ・検定番号・メーカー名と検索語/資料系統を変えて再探索しても直接契約を固定できなかった。

## No.1452 — パチスロうまい棒
- path: `docs/real_machine_db/machines/2021-12-13_umaibo.md`
- manufacturer: **アムテックス / 平和**
- formalModel: **Sうまい棒M7**
- certificationNumber: **1S1043**
- releaseDate: **2021-12-13**
- generation/system: **6.2号機 / ノーマルA / 完全告知 / リアルボーナス**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.5 / 99.8 / 103.0 / 104.5 / 106.8%**
- bonusCombined: **1/166.3 / 1/160.6 / 1/153.8 / 1/142.5 / 1/136.8 / 1/128.0**
- baseGamesPer50: **約39G（設定1）**
- basicPayout: **BIG平均264枚・最大271枚 / REG100枚**
- normalCeiling: **NOT_APPLICABLE**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_APPLICABILITY_WITH_MACHINE_SPECIFIC_RESET_DETAILS_UNVERIFIED**

### resetBehavior v0.7 — No.1452
- **設定変更**: 天井なし。短縮天井、朝一モード、CZ/AT優遇はNOT_APPLICABLE/確認なし。成立済みボーナス・告知状態等の機種固有契約はUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 天井・通常モード・高確/CZはNOT_APPLICABLE。成立済みボーナス等の内部契約はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 天井はNOT_APPLICABLE。内部ボーナス/告知状態の保持・初期化はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 天井非搭載。
- **モード/状態**: AT/ARTモード、高確/CZ等は非搭載。設定変更専用分布なし。
- **有利区間**: 朝一物差し上NOT_APPLICABLE_NORMAL_TYPE。
- **朝一恩恵/不利**: 比較可能な設定変更専用の主要恩恵/不利要素は確認できず。
- **変更判別**: 本機固有ガックン、朝一ランプ/表示/出目の確定契約はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 設定変更専用の比較可能な公開数値なし。

## 2021-12-13群 — CLOSED / 1機
1. **パチスロうまい棒 — No.1452 / DONE**

## 次回本線の再開地点
- **2021-12-20群 / No.1453候補「パチスロ 戦姫絶唱シンフォギア 勇気の歌」**から最優先確認・処理する。
- 同日既知候補: **沖ドキ！DUO / 沖ドキ！DUO-30 / シンデレラブレイド4 / 秘宝伝 解き放たれた女神 / パチスロ リング 運命の秒刻**。
- 12/20群は6機既知だが、各登録時にメーカー公式・業界カレンダー・別型式/30Φ/PB/地域先行/延期差を横断監査し、全件処理後にCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-06-25_triple-crown-30.md`（トリプルクラウン-30）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_marine-gang.md`（マリーンギャング）**。Git追加履歴でトリプルクラウン-30追加後の次の実機レコード追加として確認。

## GitHub保存
- No.1452追加 commit: `20e53153c74df53036be8c9d35df1858fbdffc81`
- トリプルクラウン-30 reset QA commit: `ed73424d8f6eff827866721952eb9ea9111add64`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1452 パチスロうまい棒
- https://news.p-world.co.jp/articles/18840/greenbelt
- https://news.p-world.co.jp/articles/18834/nippon
- https://news.p-world.co.jp/articles/18374/yugitsushin
- https://hazuse.com/machine/pachislot/1S1043/
- https://chonborista.com/slot/amute/154934/
- https://slothack.net/matome/52484/
- https://www.pachibee.jp/machines/about/221110000

### 2021-12-13境界監査
- https://1geki.jp/newmachinecalender/202112/

### 遡及QA
- https://www.p-world.co.jp/machine/database/4719
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/02/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/02/h.php
- https://web-greenbelt.jp/00001447/
- https://pachinko.hatenablog.jp/entry/2007/06/tripleCrown-30
