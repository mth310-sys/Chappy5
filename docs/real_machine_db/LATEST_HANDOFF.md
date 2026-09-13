更新日: 2026-09-13

## 現在地点
- recordCount: **1564**
- latestRecordAdded: **課長 熊田工作 — No.1564**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-05-22_kacho-kumada-kosaku.md`
- chronologicalFrontier: **2023-05-22**
- frontierLatestMachine: **課長 熊田工作 — No.1564**
- schema: **resetBehavior v0.7**
- status: **2023-05-22_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED / NEXT_NO1565_PACHISLOT_JAVELIN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1563 `スロット ソードアート・オンライン` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- handoff指定の次機種 `課長 熊田工作` をNo.1564として処理。
- 性能コア + resetBehavior v0.7を収集し、正式型式・検定番号・導入日・主要スペック・設定変更/据え置き/純電断・天井・モード・有利区間・朝一公開数値・変更判別を保存。
- 公安委員会系検定資料、メーカー発表系業界記事、当時解析、複数攻略資料を横断し、欠損項目は検索語と資料系統を変更して再探索。
- 2023-05-22群は `課長 熊田工作` を処理済み。known残り `パチスロ ジャベリン` は5/8表記との導入日CONFLICTを再監査して次回処理する。

## No.1564 — 課長 熊田工作
- manufacturer: **オーゼキ製造 / ネット販売**
- formalModel: **S課長熊田工作GZA**
- inspectionCode: **230226**
- releaseDate: **2023-05-22**
- generation/system: **6.5号機 / メダルAT / 疑似ボーナスループ型**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.9 / 102.0 / 104.7 / 107.0%（設定1/2/4/5/6）**
- ボーナス初当り: **1/249 / 1/241 / 1/217 / 1/201 / 1/194**
- baseGamesPer50: **約32.7G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 70G/約210枚、REG 30G/約90枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_NUMBERS**

### resetBehavior v0.7 — No.1564
- 設定変更: **有利区間・天井・内部モード・内部状態RESET**。
- 据え置き: **有利区間・天井・内部モード・内部状態CARRY_OVER**。
- 純電源OFF→ON: **有利区間・天井・内部モード・内部状態CARRY_OVER**を機種固有比較資料で確認。
- 天井: **通常時700G** または **チェリー30回**でボーナス。
- 設定変更専用固定短縮天井は十分な再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時モード大分類: **通常A or B 約14% / 昇進チャンス 約64% / 昇進準備 or 会長準備 約22%**。
- 設定変更時以外の有利区間RESET時: **通常A or B 約25% / 昇進チャンス 約34% / 昇進準備 or 会長準備 約41%**。
- 朝一恩恵: 昇進チャンスが約64%へ上昇。通常A/B合算は約14%へ低下。
- 朝一不利/トレードオフ: 昇進準備/会長準備合算は通常の有利区間RESET時約41%に対し設定変更時約22%。単純全面優遇ではない。
- 変更判別: 前日最終G+当日Gが700G超でも非当選ならリセット濃厚材料。ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- 設定Lはデモ画面でタイトルパネル消灯。Lの正確な機械割/初当りは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### No.1564 CONFLICT
- 設定6機械割: 複数解析 **107.0%** vs 導入前単一二次資料 **107.6%**。107.0%をcanonical、107.6%を `CONFLICT_SECONDARY_PRE_RELEASE_VALUE`。
- 純増: 業界/複数解析 **約3.0枚/G** vs 導入前単一二次資料 **2.5枚 or 5.0枚**。約3.0枚/Gをcanonical。
- 一部サイト分類に「スマスロAT」表記があるが、正式型式はS型式で複数当時資料は6.5号機AT。**6.5号機メダルAT**をcanonical。
- イチカツHTML抽出の個別モード値は合計100%を超える表示となるため採用せず、スロパチクエストで整合する大分類14/64/22をcanonical。

## 2023-05-22群 — OPEN 1/2 known
1. 課長 熊田工作 — No.1564 **DONE**
2. パチスロ ジャベリン — **NEXT / 導入日CONFLICT再監査必須**

## 継続CONFLICT / deferred
- `パチスロ ジャベリン`: 2023-05-08表記資料と2023-05-22表記資料がある。次回、メーカー/業界/導入実績系を優先してcanonical日を固定またはCONFLICT保持して処理する。
- `L戦国BASARAギガZE`: 5/8スケジュール掲載 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 現状: `coreStatus: COMPLETE_CORE / qaResetBehavior: PARTIAL`
- 既存レコードには設定変更/据え置き/純電断時のモード・ローズマリー残G・AT状態を検索語/資料系統変更後も直接固定できなかった旨が保存済み。
- 次回QAでは重複探索を避け、追加一次/当時資料がなければ性能完了判定を維持したまま `PARTIAL_RESEARCH_EXHAUSTED` への正式化を検討。

## 今回の主要資料
### No.1564 課長 熊田工作
- ネット株式会社プレスリリース / DreamNews: https://www.dreamnews.jp/press/0000275853/
- P-BOMB: https://p-bomb.co.jp/industry/new-machine/6463/
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/22963/nippon
- PiDEA X 東京都公安委員会検定通過: https://www.pidea.jp/articles/1676260862
- 遊技通信 東京都公安委員会検定通過: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%882%E6%9C%8813%E6%97%A5%EF%BC%89/
- パチビー: https://www.pachibee.jp/machines/about/223040001
- グリーンべると: https://web-greenbelt.jp/post-69355/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/184958/
- スロパチクエスト: https://www.slopachi-quest.com/article/kacyou-kumadakousaku-tenjou/
- イチカツ: https://itikatu.jp/kumadakousaku/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0046/genre/209/
- パチスロメソッド: https://slotmethod.jp/archives/16774/

## 保存コミット
- No.1564追加: `66f6d80250a281c78d8fe3dc41d7b83a5454d7f8`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1565候補 `パチスロ ジャベリン` から継続。2023-05-08 / 2023-05-22の導入日CONFLICTをメーカー・業界・導入実績資料で再監査し、性能コア + resetBehavior v0.7を収集する。その後PB・別型式・地域先行・延期/段階導入を確認して2023-05-22群のCLOSED可否を判定する。遡及QAは `2007-07-08_caribbean-queen.md`（カリビアンクイーン）から継続し、既存性能値はやり直さない。`L戦国BASARAギガZE` は2023-08-07境界で導入日CONFLICTを再監査する。**