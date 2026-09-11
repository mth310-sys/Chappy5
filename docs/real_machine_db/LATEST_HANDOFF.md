更新日: 2026-09-11

## 現在地点
- recordCount: **1362**
- latestRecordAdded: **パチスロ真・北斗無双 — No.1362**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-07-20_pachislot-shin-hokuto-musou.md`
- chronologicalFrontier: **2020-07-20**
- frontierLatestMachine: **パチスロ真・北斗無双 — No.1362**
- schema: **resetBehavior v0.7**
- status: **2020-07-20_GROUP_CLOSED_AFTER_FULL_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1361「BLACK LAGOON4」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 直前handoffの未処理先頭 **パチスロ真・北斗無双** をNo.1362として追加。
- 型式 `Sパチスロ真北斗無双ZN`、検定番号 `9S1778`、サミー、6号機高純増ATをHAZUSE等で固定。
- 導入日はK-Navi、HAZUSE、グリーンべると等で2020-07-20一致。新型コロナ影響前の事前予定2020-05-18等は延期前スケジュールとして分離。

## No.1362 — パチスロ真・北斗無双
- path: `docs/real_machine_db/machines/2020-07-20_pachislot-shin-hokuto-musou.md`
- manufacturer: **サミー**
- formalModel: **Sパチスロ真北斗無双ZN**
- certificationNumber: **9S1778**
- releaseDate: **2020-07-20**
- generation/system: **6号機 / 高純増セット継続型AT / CZ経由主体**
- 出玉率: **97.9 / 98.7 / 101.5 / 104.6 / 108.0 / 111.1%**
- CZ・AT合算: **1/456.4 / 1/396.2 / 1/437.9 / 1/333.9 / 1/356.4 / 1/284.0**
- base: **約51.5G/50枚**
- netIncrease: **約8.0枚/G**
- 天井: **通常モード最大12周期（解析表約600G+α、実戦消化目安約630G前後）でCZ「制圧ZONE」**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_NUMERIC_MODE_DATA**

### resetBehavior v0.7 — No.1362
- 設定変更: **天井RESET / 内部状態RESET / 有利区間RESET → 非有利区間 → 新規有利区間**。
- 据え置き・純電源OFF→ON: **天井 / 内部状態 / 有利区間ランプ状態CARRY_OVER**。
- 有利区間開始時は **ヒロインZONEへ100%突入、20G+α**。これは設定変更後だけでなくCZ/AT後等の新規有利区間開始時にも適用される一般契約。
- 通常時は有利区間ランプ点灯型。
  - 朝一消灯: **設定変更濃厚**。
  - 朝一点灯: **据え置き濃厚**。
  - 店側対策・前日終了状況等の例外があるため確定扱いにはしない。
- 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間引継ぎ時の通常12→9周期、好機9→6周期、無双/夢幻の上位モード継続は据え置き/区間継続側の恩恵であり、リセット恩恵と混同しない。
- 純電断後の具体的開始ステージ、本機固有ガックン条件・発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### 公開朝一数値 / モード振り分け
有利区間移行時の一般モード振り分け。設定変更後も新規有利区間となるため朝一比較値として使用可能だが、設定変更専用テーブルではない。
- 設定1: 通常78.0 / 好機14.9 / 無双5.9 / 夢幻1.2%
- 設定2: 48.2 / 38.8 / 2.4 / 10.6%
- 設定3: 69.0 / 22.4 / 5.5 / 3.1%
- 設定4: 32.9 / 39.2 / 0.8 / 27.1%
- 設定5: 29.4 / 50.6 / 5.1 / 14.9%
- 設定6: 4.3 / 53.3 / 0.4 / 42.0%
- 期待値見える化の古い実戦推定「設定1・有利区間リセット後の夢幻モード移行率5%以下」は解析表1.2%と平均化せず、実戦推定として補助扱い。

## 2020-07-20群監査
1. BLACK LAGOON4 — **No.1361 / 7月6日一部地域先行として既登録、7/20全国導入を理由に重複登録しない**
2. パチスロ真・北斗無双 — **No.1362 / 処理済み**
- 2020年導入日カレンダー、当時業界記事、複数新台一覧を横断。7/20のパチスロ候補はBLACK LAGOON4と真・北斗無双で一致。
- BLACK LAGOON4はNo.1361で段階導入情報を保持済み。
- 別型式・別スペック・PB・地域差・延期機も再監査し、今回追加が必要な未処理機は真・北斗無双のみと判断。
- 群判定: **CLOSED_AFTER_FULL_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_kuma-sakaba.md`（熊酒場）。
- 今回は本線No.1362を優先し、熊酒場は未処理のまま次回へ引き継ぐ。

## 次回本線の再開地点
- 最新main再同期後、**2020-08-03群**へ進む。
- 先頭の未処理候補: **シャア専用パチスロ 逆襲の赤い彗星 — No.1363候補**。
- 2020年新台一覧で7/20の次の明確なパチスロ導入群は8/3、候補に「シャア専用パチスロ 逆襲の赤い彗星」を確認。
- 次回は8/3群を改めて全メーカー・別型式・別スペック・PB・地域差・延期機まで監査し、先頭未処理機から処理する。

## GitHub保存
- No.1359追加 commit: `cce5e6ab8aaec85db0a4f319a2b356f2063de6c5`
- No.1360追加 commit: `2397e25a4271da069ec7fa46d3be9bf9cd5fe2ed`
- No.1361追加 commit: `d4b0f628ea21f10331b53330ae241bf7a1a15a07`
- No.1362追加 commit: `ac02f3e411116585ae27c1878a5bc4529495195b`

## 主要出典 — 取得日 2026-09-11
### No.1362 パチスロ真・北斗無双
- HAZUSE: https://hazuse.com/machine/pachislot/9S1778/
- グリーンべると: https://web-greenbelt.jp/post-39956/
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/14007/yugitsushin
- K-Navi: https://p-kn.com/slot/3445/
- 1geki 小役/ベース: https://1geki.jp/slot/s_sinhokutomuso/4/
- 1geki 乱撃CHANCE: https://1geki.jp/slot/s_sinhokutomuso/82/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/106166/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/hokutomusou/
- すろぱちくえすと 設定差/モード: https://www.slopachi-quest.com/article/sin-hokutomusou-settei/
- すろぱちくえすと 天井/朝一: https://www.slopachi-quest.com/article/sin-hokutomusou-tenjou/
- パチマガスロマガ ヒロインZONE: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/181/tj10.php
- 2020新台一覧: https://kaiseki.sulopachinews.com/archives/2369
