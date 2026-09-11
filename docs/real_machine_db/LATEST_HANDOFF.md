更新日: 2026-09-11

## 現在地点
- recordCount: **1379**
- latestRecordAdded: **アイムジャグラーEX（6号機） — No.1379**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-12-14_im-juggler-ex-6.md`
- chronologicalFrontier: **2020-12-14**
- frontierLatestMachine: **アイムジャグラーEX（6号機） — No.1379**
- schema: **resetBehavior v0.7**
- status: **2020-12-14_GROUP_OPEN_1_OF_AT_LEAST_2_KNOWN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1378「パチスロ モンスターハンター:ワールド™」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- 開始時mainはNo.1378 / 2020-11-16群CLOSEDまで完了済み。重複せず次の境界へ継続。
- 2020-11-17～2020-12-13を1geki 2020年11月/12月カレンダー、K-Navi 2020年12月カレンダー、当時導入予定一覧で監査。12/07はパチスロ0機、11/17～12/13に別の新規パチスロ導入群を固定できず、**2020-11-17～2020-12-13境界CLOSED**。
- 次の導入群2020-12-14へ進み、No.1379「アイムジャグラーEX（6号機）」を性能コア+resetBehavior v0.7で追加。
- 1geki月間カレンダーは12/14のスロットをアイムジャグラーEX 1機とするが、K-Navi月間カレンダーは同日にJPS `Sどんだけ` も掲載。
- `SどんだけJ2` はUNO系列オリジナル/PBとして2020-12-14導入との専門資料を確認。全機種/PB収集方針では除外しないため、12/14群は **OPEN_1_OF_AT_LEAST_2_KNOWN** とした。

## No.1379 — アイムジャグラーEX（6号機）
- path: `docs/real_machine_db/machines/2020-12-14_im-juggler-ex-6.md`
- manufacturer: **北電子**
- formalModel: **SアイムジャグラーEX-TP**
- certificationNumber: **9S1309**
- releaseDate: **2020-12-14**
- generation/system: **6号機 / ノーマルAタイプ / 完全告知 / ボーナス主体**
- 出玉率: **97.0 / 98.0 / 99.5 / 101.1 / 103.3 / 105.5%**
- BIG: **1/273.1 / 269.7 / 269.7 / 259.0 / 259.0 / 255.0**
- REG: **1/439.8 / 399.6 / 331.0 / 315.1 / 255.0 / 255.0**
- 合算: **1/168.5 / 161.0 / 148.6 / 142.2 / 128.5 / 127.5**
- base: **約40G/50枚**
- basicPayout: **BIG平均約252枚 / REG平均約96枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS**

### resetBehavior v0.7 — No.1379
- 天井・ゾーン: **非搭載**。天井G/短縮天井/周期/朝一専用ゲーム数モードはNOT_APPLICABLE。
- 設定変更専用恩恵: 6号機ジャグラー朝一解析では **特になし**。天井短縮/CZ/専用高確等も確認されず。
- 設定変更時の本機固有「状態」「楽曲変化」は1gekiでも調査中。表記/検索語/資料系統を変えた再探索後も直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時も本機固有「状態」「楽曲変化」は直接固定できず `UNVERIFIED_AFTER_RESEARCH`。天井/周期/ATモード引継ぎ論点はN/A。
- 有利区間: ボーナスのみで出玉を増やすノーマル機で、AT/ART/CZの有利区間管理を物差し化する機種ではないため `NOT_APPLICABLE_FOR_YARDSTICK`。
- 変更判別: 6号機ジャグラー一般では1G目ガックンが変更推測材料になり得るが、同設定打ち直し/1G回し/清掃等で対策・誤判定あり。本機の後年実機観察では僅かなブレで目視判定困難とされるため `WEAK_EMPIRICAL_RESET_SIGNAL_NOT_DETERMINISTIC`。
- 設定変更専用のモード振り分け、朝一当選率、短縮天井等は `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## conflicts / 定義差
- 導入日: 一部後年ページに2020-12-04表記があるが、北電子発表を報じた当時業界資料、HAZUSE、K-Navi、パチビー、1gekiが2020-12-14で一致。12/14をcanonical。
- 延期前予定: 2020年春/4月/5月の旧予定資料はCOVID-19等による延期前情報。北電子が2020-09-03に12/14開始を発表した経緯を保持。
- 12/14群機種数: 1gekiはスロット1機、K-Naviは2機。`SどんだけJ2` のUNO系列PB実導入資料を確認したため、平均/片方採用ではなく **SOURCE_SCOPE_DIFFERENCE / PB_OMISSION** として保持。

## 2020-12-14群監査 — OPEN
処理済み:
1. **アイムジャグラーEX（6号機） — No.1379**

未処理の確認済み候補:
2. **Sどんだけ / パチスロどんだけ — JPS / 型式 SどんだけJ2 / UNO系列オリジナルPB / 2020-12-14**

- 1gekiでは12/14の一般流通スロットをアイムジャグラーEXのみとする。
- K-Naviは12/14にアイムジャグラーEXとSどんだけの2機を掲載。
- ぱちんこキュレーションはSどんだけJ2をJPS、UNOグループ各店舗のみ、2020-12-14導入と記載。
- よってPBを含める本DBではSどんだけを未処理として次回必ず処理する。

## 次回本線の再開地点
- 最新main再同期後、**No.1380候補「Sどんだけ / パチスロどんだけ」（JPS、型式SどんだけJ2、UNO系列PB、2020-12-14）** を処理。
- 同機処理後、2020-12-14群を全メーカー・別型式・別スペック・PB・地域差・延期機まで再監査してCLOSED可否を判定。
- その後の既知導入群は2020-12-21。K-Naviでは `パチスロ頭文字D` / `パチスロ 哲也－天運地力－` / `パチスロひぐらしのなく頃に祭2` を掲載する一方、1geki月間カレンダーでは12/21スロット2機（哲也、ひぐらし祭2）のため、**頭文字Dの実導入日は2021-01-12資料もある可能性が高く、12/21群処理時に日付競合/予定変更を必ず監査する**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。
- 今回は本線を優先し、遡及QA地点は進めていない。

## GitHub保存
- No.1379追加 commit: `1295136386eaa31ee78e8c76a836a61691900faa`

## 主要出典 — 取得日 2026-09-11
### No.1379 アイムジャグラーEX（6号機）
- https://www.kitadenshi.co.jp/slot-kentei/imjugglerex2020/
- https://news.p-world.co.jp/articles/12306/yugitsushin
- https://www.pidea.jp/articles/%E3%80%8Cs%E6%96%B0%E9%AC%BC%E6%AD%A6%E8%80%85zg%E3%80%8D%E3%80%8Cs%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BCex-tp%E3%80%8D%E3%81%8C%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E
- https://hazuse.com/machine/pachislot/9S1309/
- https://hazuse.com/machine/pachislot/9S1309/genre/201/
- https://hazuse.com/machine/pachislot/9S1309/genre/203/
- https://1geki.jp/slot/s_ij_ex_6/
- https://1geki.jp/slot/s_ij_ex_6/3/
- https://nana-press.com/kaiseki/machine/16/282/
- https://www.pachibee.jp/machines/index/220040006
- https://www.pachibee.jp/machines/about/220040006
- https://p-kn.com/slot/3380/
- https://pachiseven.jp/articles/detail/14805
- https://jugjug.net/imjugglerex6
- https://news.p-world.co.jp/articles/14531/greenbelt
- https://news.p-world.co.jp/articles/15324/greenbelt
- https://yugi-nippon.com/pachinko-new-machine/post-39774/

### 境界 / 12月群
- https://1geki.jp/newmachinecalender/202012/
- https://p-kn.com/calendar/202012/
- https://pachinko-curation.com/23337/
- https://crankyseven.com/newmachine-info.htm
