更新日: 2026-09-12

## 現在地点
- recordCount: **1431**
- latestRecordAdded: **パチスロ ロリクラ☆ほーるど！ — No.1431**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-09-06_roliclu-hold.md`
- chronologicalFrontier: **2021-09-06**
- frontierLatestMachine: **パチスロ ロリクラ☆ほーるど！ — No.1431**
- schema: **resetBehavior v0.7**
- status: **2021-09-06_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1430「パチスロ楽園追放」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおり、次の未処理機種No.1431「パチスロ ロリクラ☆ほーるど！」を追加。
- 2021-09-06群は一撃2021年9月新台カレンダーでスロット4機と再照合し、既存No.1428〜1431の4機が一致したためCLOSED。
- 2021-09-13は同カレンダー上スロット新台0機。次の本線は2021-09-21群2機。
- 遡及resetBehavior QAは本線を優先して今回は進めず、次カーソル「機動警察パトレイバーX」を維持。

## No.1431 — パチスロ ロリクラ☆ほーるど！
- path: `docs/real_machine_db/machines/2021-09-06_roliclu-hold.md`
- manufacturer: **NET（製造: DAXEL株式会社）**
- formalModel: **SロリクラホールドDD**（NET公式製品一覧で確認）
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-09-06**
- generation/system: **6.1号機 / 差枚数管理型AT**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **98.4 / 100.2 / 103.0 / 107.0%**（PiDEAのみ設定5=103.1%の掲載差をCONFLICT保持）
- CZ初当たり: **1/333 / 1/317 / 1/297 / 1/259**
- AT初当たり: **1/999 / 1/951 / 1/889 / 1/777**
- baseGamesPer50: **約40.8G/50枚**
- netIncrease: **約2.7枚/G**
- basicPayout: **AT初期1000枚固定・1000枚+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_MORNING_NUMERIC_BENEFIT**

### resetBehavior v0.7 — No.1431
- **設定変更**: 液晶ゲーム数/内部モード/内部状態/有利区間RESET。
- **据え置き/純電源OFF→ON**: 液晶333G区間・内部モード・内部状態・有利区間CARRY_OVER。
- **朝一恩恵**: 設定変更後は新規有利区間となり、内部的に10Gの引き戻しゾーン「わんもあマッチ」と同じ抽選状態へ移行。
- **公開朝一数値**: わんもあマッチ相当 **10G**。業界資料では有利区間移行時10GのCZ期待度 **約6%**。設定変更専用に独立測定された値ではないため定義注記付き。
- **ゲーム数/天井**: 液晶333G到達でCZ期待度60%以上の「部室ステージ」へ移行。ただしCZ/AT当選自体の保証ではなく、資料には「天井333G」「天井なし」の語義差があるためCONFLICT保持。
- **変更判別**: PAY OUT右下ドットの有利区間ランプ。通常時常時点灯型なので未対策なら朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚。AT終了/CZ失敗/部室終了でも一旦消灯するため例外あり。
- **UNVERIFIED**: 検定番号、本機固有ガックン条件/発生率、設定変更専用モード確率付き振り分け、設定変更専用固定短縮天井、朝一10G期待度の設定別内訳。

## 2021-09-06群 — CLOSED
1. **パチスロ うしおととら 雷槍一閃 — No.1428 / DONE**
2. **パチスロ麻雀物語4 — No.1429 / DONE**
3. **パチスロ楽園追放 — No.1430 / DONE**
4. **パチスロ ロリクラ☆ほーるど！ — No.1431 / DONE**
- 一撃2021年9月新台カレンダーは2021-09-06をスロット4機として掲載し、上記4機と一致。
- NET公式製品一覧・当時業界記事でもロリクラの9月上旬/9月6日導入を確認。

## 次回本線の再開地点
- 2021-09-13はスロット新台0機。
- 次の新台本線は **2021-09-21群（2機）**。
- **No.1432候補: HIT128（岡崎産業）**
- 続いて **No.1433候補: マジカルハロウィン～Trick or Treat！～（コナミアミューズメント）**。
- 一撃月間カレンダーで9/21は上記2機。マジカルハロウィンToTはコナミアミューズメント公式でも2021-09-21全国稼働開始を確認。
- No.1432/1433処理後、メーカー横断・PB・地域先行・別型式・延期/段階導入を再監査して2021-09-21群CLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）**。

## GitHub保存
- No.1431追加 commit: `a676689f8dd65ad99e61f30fb4693d6f40935462`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1431 パチスロ ロリクラ☆ほーるど！
- https://www.net-fun.co.jp/product/page/2
- https://www.dreamnews.jp/press/0000240224/
- https://amusement-japan.co.jp/article/detail/10002412/
- https://news.p-world.co.jp/articles/17298/playgraph
- https://pidea.jp/articles/1629681507
- https://www.pachibee.jp/machines/index/221070002
- https://www.p-world.co.jp/machine/database/9442
- https://nana-press.com/kaiseki/machine/149/5137/
- https://slothack.net/matome/47169/
- https://1geki.jp/slot/s_roliclu/83/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/182/bn01-1.php

### 日付境界監査
- https://1geki.jp/newmachinecalender/202109/
- https://www.konami.com/amusement/corporate/ja/topics/20210917/
