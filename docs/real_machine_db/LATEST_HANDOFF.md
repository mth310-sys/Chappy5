更新日: 2026-09-08

## 現在地点
- recordCount: **1013**
- latestRecordAdded: **ニューアイムジャグラーEX-KA（ニューアイムジャグラーEX レッドゴールドパネル）**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-12_new-im-juggler-ex-ka.md`
- chronologicalFrontier: **2016-09-26**
- frontierLatestMachine: **未処理 — 09/26群監査開始地点**
- schema: **resetBehavior v0.7**
- status: **2016-09-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-09-26_GROUP_OPEN / 2016-09-12_RETRO_GAP_FILLED**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1012 `2016-09-05_slot-super-sea-story-in-okinawa2.md` を再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。INDEX自体は不用意に全件再生成していない。
- main正本は1012件 / chronologicalFrontier 2016-09-20 / 09/20群OPENから継続。
- 09/20群をK-Navi、HAZUSE、当時新台記事、後年導入一覧で再監査。既登録 `SLOT魔法少女まどか☆マギカ2`、`乱嵐エイサー-30` 以外に2016-09-20全国導入本線へ固定できる未登録パチスロは今回確認できなかったため `2016-09-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とした。
- handoff指定の `ニューアイムジャグラーEX-KA` を再探索。GitHub未登録を確認し、HAZUSEが2016-09-12、K-Naviがレッドゴールドパネル2016-09-26と導入日競合。北電子公式は2016年製品・EX完全継承・型式存在を確認。
- 時系列canonicalはHAZUSE＋パチ7後年一覧が一致する **2016-09-12** とし、K-Navi 2016-09-26を `CONFLICT_RELEASE_DATE_2016_09_12_VS_2016_09_26` として保持。No.1013として遡及追加。
- 09/21〜09/25境界では全国導入本線へ固定できる未登録機を今回確認できず、chronologicalFrontierを **2016-09-26** へ前進。

## No.1013 — ニューアイムジャグラーEX-KA
- manufacturer: **北電子 / KITA DENSHI**
- canonical releaseDate: **2016-09-12**
- releaseDate conflict: **2016-09-26**（K-Navi レッドゴールドパネル）
- formalModelName: **ニューアイムジャグラーEX-KA**
- certificationNumber: **4S0098**
- generation/system: **5号機 / ノーマルAタイプ / 完全告知 / リアルボーナス**
- recordStatus: **COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7**

### performanceCore
- 北電子公式工場予測出玉率: **95.9 / 96.7 / 98.7 / 100.8 / 102.8 / 105.2%**。
- チェリー狙い解析値: **96.91 / 97.80 / 99.91 / 102.04 / 104.16 / 106.55%**。条件差のため別定義保持。
- BIG: **1/287.4 / 282.5 / 282.5 / 273.1 / 273.1 / 268.6**。
- REG: **1/455.1 / 442.8 / 348.6 / 321.3 / 268.6 / 268.6**。
- 合算: **1/176.2 / 172.5 / 156.0 / 147.6 / 135.4 / 134.3**。
- 50枚ベース（チェリー狙い解析）: **約34.52 / 34.54 / 34.53 / 34.55 / 34.54 / 35.88G**。完全小役奪取は約34.99〜36.39G。
- BIG **約325枚** / REG **約104枚**。
- 通常ゲーム数天井なし。AT/ART/CZなし。

### resetBehavior v0.7
- 天井・AT/ART/CZ・通常時ゲーム数管理モードは非搭載のため、gameCounterReset / ceilingAfterReset / modeAfterReset は該当範囲で **NOT_APPLICABLE**。
- 設定変更専用の短縮天井、朝一専用高確/モード、公開されたリセット初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電源OFF→ONについても天井・AT/ART状態はNOT_APPLICABLE。成立済みリアルボーナス等の特殊状態の厳密契約は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- ガックンは後年資料で設定変更判別材料として報告されるが、本機/同一EX系は極めて小さく目視困難との資料あり。メーカー保証契約ではないため `GACKUN_REPORTED_BUT_VISUALLY_WEAK_NOT_MANUFACTURER_GUARANTEE`。
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED**。

### data quality
- 北電子公式検定ページでEX-KAを一次確認。
- 北電子公式製品一覧で「EX完全継承」および設定別BB/RB/合算/出玉率を一次確認。
- HAZUSE/P-WORLDで型式・4S0098・性能コアを照合。
- 導入日はHAZUSE/パチ7 09/12とK-Navi 09/26が競合。平均・推定統合せずCONFLICT保持。
- 50枚ベースは同一EXスペック系の解析値で条件を明記し、メーカー公式性能値と混同していない。

## 2016-09-20群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **SLOT魔法少女まどか☆マギカ2**（メーシー）— No.1010
- **乱嵐エイサー-30**（オーイズミ）— No.1011

監査結果:
- K-Navi、HAZUSE、当時新台記事、後年導入一覧を再確認。
- 今回、上記2機種以外に2016-09-20全国導入本線へ固定できる未登録パチスロは確認できなかった。
- 後続QAで新資料が出た場合は再OPEN可。

## 2016-09-26群 — OPEN
- 09/26具体日付としてK-Naviに `ニューアイムジャグラーEXレッドゴールドパネル` が存在するが、同一型式EX-KAをNo.1013として09/12 canonical + 09/26 CONFLICTで既登録。別レコードを重複作成しない。
- 09/26群の全メーカー横断監査を開始し、EX-KA以外の未処理機があるか確認する。
- 同日未処理機がなければ09/26群CLOSED → 09/27〜10/02境界監査 → 2016-10-03群へ前進する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- ゴルゴ13のreset側は `PARTIAL_RESEARCH_EXHAUSTED` まで更新済み。
- 次は2006-03-27より後の既存未QAレコードを最新main実体から時系列で特定して継続。旧INDEXのファイル名から推測しない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1013を再取得。
2. **1013件 / chronologicalFrontier 2016-09-26 / 09/26群OPEN** を正本として継続。
3. **2016-09-26群の全メーカー横断監査**を継続。同日未登録機があればNo.1014として追加。
4. `ニューアイムジャグラーEX-KA` は09/12 canonical + 09/26導入日CONFLICTで登録済み。K-Naviのレッドゴールドパネルを別機種として重複登録しない。
5. 09/26群が閉じられたら09/27〜10/02境界監査→10/03群へ前進。
6. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索後のみ確定。競合は平均せずCONFLICT。
7. 遡及reset QAはゴルゴ13の次の既存未QAレコードから継続。

## 主要出典 — 取得日 2026-09-08
### No.1013 ニューアイムジャグラーEX-KA
- 北電子公式 検定情報: https://www.kitadenshi.co.jp/slot-kentei/newimjugglerex-ka/
- 北電子公式 EX-KA製品: https://www.kitadenshi.co.jp/products/2016/ex-ka/
- 北電子公式 製品一覧/確率表: https://www1.kitadenshi.co.jp/slot/?s=2&slot-year=
- HAZUSE: https://data.hazuse.com/?genre=208&machine_code=4S0098
- K-Navi レッドゴールドパネル: https://p-kn.com/slot/2602/
- P-WORLD: https://www.p-world.co.jp/machine/database/8163
- なな徹: https://nana-press.com/kaiseki/machine/21/331/
- ジャグジャグBeats!: https://jugjug.net/newimjugglerex
- パチ7ジャグラー一覧: https://pachiseven.jp/articles/detail/9823
- A-SLOT: https://www.a-slot.com/SHOP/kitadensi80.html

### 09/20境界監査
- HAZUSE まどか☆マギカ2: https://data.hazuse.com/?genre=208&machine_code=6S0560
- K-Navi 乱嵐エイサー-30: https://p-kn.com/slot/2571/
- なな徹導入一覧: https://nana-press.com/kaiseki/index/machine/s/ma/
