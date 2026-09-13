更新日: 2026-09-13

## 現在地点
- recordCount: **1556**
- latestRecordAdded: **スロドル — No.1556**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-03-20_slodol.md`
- chronologicalFrontier: **2023-03-20**
- frontierLatestMachine: **スロドル — No.1556**
- schema: **resetBehavior v0.7**
- status: **2023-03-20_GROUP_CLOSED_3_OF_3_CANONICAL_PROCESSED / MARCH_2023_CLOSED_5_SLOT_MACHINES / NEXT_2023-04-03_GROUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1553 `戦国コレクション5` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として採用。
- 2023-03-20群をPB・別型式・30Φ派生・地域先行・延期/段階導入を含む新台カレンダー/機種DBで再監査。
- No.1554 `キングハナハナ-30`、No.1555 `パチスロOVERLORD絶対支配者光臨Ⅱ`、No.1556 `スロドル` を性能コア + resetBehavior v0.7で追加。
- パチ＆スロ必勝本の3/20導入群、1geki 2023年3月カレンダー、複数機種個別資料で3機が一致。2023年3月のスロット新台は3/6の2機＋3/20の3機＝5機で一致するため、3/20群および2023年3月をCLOSED。

## No.1554 — キングハナハナ-30
- manufacturer: **パイオニア**
- formalModel: **SキングハナハナSP-30**
- inspectionCode: **2S1569**
- releaseDate: **2023-03-20**
- generation/system: **6号機 / 30Φ / ノーマル完全告知**
- payoutRate: **97 / 99 / 101 / 104 / 107 / 110%（設定1〜6）**
- BIG: **1/292 / 1/280 / 1/268 / 1/257 / 1/244 / 1/232**
- REG: **1/489 / 1/452 / 1/420 / 1/390 / 1/360 / 1/332**
- baseGamesPer50: **約39.9G/50枚**
- basicPayout: **BIG最大260枚 / REG最大120枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_RESEARCH_EXHAUSTED_FIELDS**

### resetBehavior v0.7 — No.1554
- 天井・AT/CZモード・有利区間: **NOT_APPLICABLE**。
- 設定変更専用の朝一恩恵/不利/公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 成立済みボーナスフラグ/告知待ち状態の設定変更・据え置き・純電断挙動: `UNVERIFIED_AFTER_RESEARCH`。
- ガックン: 複数解析で調査中。本機固有の条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- 注意: 2011年の5号機旧作同名 `キングハナハナ-30` のスペックを混入させない。

## No.1555 — パチスロOVERLORD絶対支配者光臨Ⅱ
- manufacturer: **オーイズミ**
- formalModel: **S/OVERLORD絶対支配者光臨Ⅱ/SX**
- inspectionCode: **2S1507**
- releaseDate: **2023-03-20**
- generation/system: **6.5号機 / メダルAT / 規定G数・自力CZ・バトルAT**
- payoutRate: **97.6 / 98.7 / 101.5 / 104.5 / 108.0 / 112.0%**
- CZ: **1/247 / 1/246 / 1/222 / 1/219 / 1/194 / 1/190**
- AT: **1/334 / 1/331 / 1/309 / 1/289 / 1/264 / 1/246**
- baseGamesPer50: **約35.1G/50枚**
- netIncrease: **約2.7枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_BENEFIT_NUMBERS**

### resetBehavior v0.7 — No.1555
- 設定変更: 有利区間・天井・内部状態・モードRESET。
- 据え置き: 有利区間・天井・内部状態・モードCARRY_OVER。
- 設定変更後は **準備A / 準備B / 天国** のいずれかから開始。
- 通常A/B/C最大天井786G+α → 設定変更時最大486G+α。天国なら86G+α。
- 有利区間ランプ判別不可。朝一486G+α超過は据え置き濃厚材料。
- 純電源OFF→ON単独の天井/状態/モード/有利区間直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の準備A/B/天国の個別振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## No.1556 — スロドル
- manufacturer: **コナミアミューズメント**
- formalModel: **SスロドルPK**
- inspectionCode: **230336**
- releaseDate: **2023-03-20**
- generation/system: **6.5号機 / メダルAT / ポイント周期・CZ・複合管理AT**
- payoutRate: **97.8 / 98.9 / 100.2 / 104.0 / 107.8 / 110.5%**
- AT: **1/290.9 / 1/281.7 / 1/272.9 / 1/240.9 / 1/225.1 / 1/208.4**
- baseGamesPer50: **約35G/50枚**
- netIncrease: **約3.0枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_BENEFIT_NUMBERS**

### resetBehavior v0.7 — No.1556
- 設定変更: 有利区間・天井・内部状態・モード・周期・いいね・フォロワーRESET。
- 据え置き: 上記をCARRY_OVER。
- 純電源OFF→ON: 天井ゲーム数CARRY_OVERを直接確認。周期/いいね/フォロワー/状態/モード/有利区間は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後1周期目: **約60%で100の位が偶数の「いいね」ゾーン**を選択。
- 設定変更後AT当選まで: **奇数周期でも25%以上でバトルモード2以上**。
- 通常天井: **999G+α / 最大9周期 / フォロワー1000万人**。
- 有利区間ランプ判別不可。
- CONFLICT: 一部資料の設定6 `1/209.0・110.1%` に対し、遊技日本/HAZUSE/一撃/必勝本は `1/208.4・110.5%` で一致。平均せず後者をcanonical、前者を競合保持。

## 2023-03-20群 — CLOSED 3/3
1. キングハナハナ-30 — No.1554
2. パチスロOVERLORD絶対支配者光臨Ⅱ — No.1555
3. スロドル — No.1556

## 2023年3月 — CLOSED 5 SLOT MACHINES
- 2023-03-06: パチスロ機動戦士ガンダムユニコーン / 戦国コレクション5
- 2023-03-20: キングハナハナ-30 / パチスロOVERLORD絶対支配者光臨Ⅱ / スロドル
- 1geki 2023年3月カレンダーはスロット全5機種としており、上記5機で一致。

## 次導入境界 — 2023-04-03
- 現時点のknown: **スマスロ北斗の拳**（サミー / 製造型式 `L パチスロ北斗の拳AD XR`）。
- 一撃/P-WORLD系で2023-04-03を確認。次回はPB・別型式・地域先行・延期/段階導入を再監査して4/3群を確定する。
- 4/17には `S/アナザーゴッドハーデス/SL` と `Lゴブリンスレイヤー` が確認されているため、4/3群CLOSED後に進む。

## resetBehavior 遡及QA
- `2007-06-25_morning-musume.md`（モーニング娘。）は既存 `status: PARTIAL / qaResetBehavior: PARTIAL` を再確認。
- 既存レコード本文にはv0.7 resetBehaviorと十分な再探索メモが既に存在し、CZ/RT内部状態・残G・ガックン等が本機固有資料で未固定。
- QA結論は `PARTIAL_RESEARCH_EXHAUSTED` 相当だが、今回もGitHub fetch応答が長文を途中省略したため、安全な全文置換を避けてレコード本体のqaResetBehavior値は変更していない。
- 次回、全文取得手段を確保できる場合のみ同フィールドを正式反映。次QA候補は `2007-07-08_caribbean-queen.md`。

## 今回の主要資料
### No.1554 キングハナハナ-30
- 遊技日本/P-WORLD発売発表: https://news.p-world.co.jp/articles/22755
- 遊技日本/P-WORLD検定通過: https://news.p-world.co.jp/articles/22712/nippon
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9783
- パチビー: https://www.pachibee.jp/machines/index/223020003
- イマカチ: https://imakati.jp/king-hanahana30
- 必勝本コイン持ち: https://p.hisshobon.jp/machine/4050/1/94253

### No.1555 OVERLORD絶対支配者光臨Ⅱ
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/22741/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/2S1507/
- 一撃: https://1geki.jp/slot/s_overlord2/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/513/14143/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/181557/

### No.1556 スロドル
- コナミ公式: https://www.konami.com/amusement/corporate/ja/topics/20230116/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-55925/
- HAZUSE: https://hazuse.com/machine/pachislot/2S0336/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/517/14209/
- 一撃: https://1geki.jp/slot/s_slodol/
- イチカツ: https://ichikatsu.com/slodol/

### 境界監査
- 一撃 2023年3月新台スケジュール: https://1geki.jp/newmachinecalender/202303/
- パチ＆スロ必勝本 3/20導入群: https://p.hisshobon.jp/vpage/2499/18
- 2023導入カレンダー: https://pachinkopachisro.com/archives/57208678.html

## 保存コミット
- No.1554追加: `55fe3b1856c8438b2cc91f1f35e9530943db5c2a`
- No.1555追加: `3c095a84aa644ace93ad9109e4c1320bb949ce9c`
- No.1556追加: `be402f702f4fa6a2914559d3c41e1d8922df695a`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1557候補 `スマスロ北斗の拳`（2023-04-03）から継続。最初に2023-04-03群をPB・別型式・地域先行・延期/段階導入まで再監査し、正式型式・検定番号、性能コア、resetBehavior v0.7を収集する。4/3群完了後は4/17の `S/アナザーゴッドハーデス/SL` / `Lゴブリンスレイヤー` へ時系列で進む。既存性能値は再収集せず、遡及QAは本線を止めない範囲で継続する。**
