更新日: 2026-09-13

## 現在地点
- recordCount: **1565**
- latestRecordAdded: **パチスロ ジャベリン — No.1565**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-05-22_pachislot-javelin.md`
- chronologicalFrontier: **2023-05-22**
- frontierLatestMachine: **パチスロ ジャベリン — No.1565**
- schema: **resetBehavior v0.7**
- status: **2023-05-22_GROUP_CLOSED_2_OF_2_KNOWN_PROCESSED / NEXT_NO1566_2023-06-05_GROUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1564 `課長 熊田工作` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- handoff指定の次機種 `パチスロ ジャベリン` をNo.1565として処理。
- 性能コア + resetBehavior v0.7を収集し、正式型式・検定番号・導入日・主要スペック・設定変更/据え置き/純電断・天井・モード・有利区間・朝一公開数値・変更判別を保存。
- 業界発表、検定通過、当時解析、古いDB/攻略資料を横断し、欠損項目は検索語と資料系統を変更して再探索。
- 2023-05-22群は `課長 熊田工作` + `パチスロ ジャベリン` のknown 2機を処理済み。5/29新台候補も再探索したが追加対象を確認できず、現時点で **CLOSED 2/2 known** と判定。

## No.1565 — パチスロ ジャベリン
- manufacturer: **ジェイピーエス（JPS）**
- formalModel: **SジャベリンSA**
- inspectionCode: **230378**
- releaseDate: **2023-05-22**
- generation/system: **6.5号機 / メダルAT / Aタイプ風疑似ボーナス**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.9 / 100.5 / 102.6 / 104.7 / 109.7%**
- BIG: **1/335.8 / 1/324.3 / 1/308.7 / 1/290.3 / 1/273.6 / 1/229.2**
- REG: **1/384.3 / 1/372.3 / 1/360.7 / 1/342.9 / 1/324.7 / 1/298.2**
- 合算: **1/178.7 / 1/173.3 / 1/166.3 / 1/157.2 / 1/148.5 / 1/129.6**
- baseGamesPer50: **約35.0G/50枚**
- netIncrease: **BIG約4.2枚/G / REG約2.4枚/G**（HAZUSE 4.1/2.1はCONFLICT保持）
- basicPayout: **BIG約340枚 / REG約80枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_NUMBERS**

### resetBehavior v0.7 — No.1565
- 設定変更: **有利区間・天井G・内部モードRESET**。
- 据え置き: **有利区間・天井G・内部モードCARRY_OVER**。
- 純電源OFF→ON: **有利区間・天井G・内部モードCARRY_OVER**を機種固有比較資料で直接確認。
- 最大天井: **通常A/B 599G+α**。通常C499G+α、天国準備299G+α、引き戻し199G+α、天国99G、超天国33G。
- 設定変更時: **約9%で即前兆→1G目告知**。
- 設定変更時: **天国準備25.0% / 天国0.4% / 超天国0.4% = 天国準備以上25.8%**。
- 設定変更時通常C: **設定1 9.8 / 2 10.5 / 3 15.6 / 4 21.1 / 5 36.3 / 6 50.8%**。
- 固定のリセット短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。主恩恵は専用モード振り分け＋即前兆。
- モード以外の独立内部状態は高信頼資料で別定義を確認できず `NOT_SEPARATELY_DEFINED_AFTER_RESEARCH`。
- 変更判別: 前日最終G+当日Gが据え置き最大599G+αを明確に超える場合はリセット推測材料。ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

### No.1565 CONFLICT
- 導入日: 一撃後年ページ **2023-05-08** vs 2023-03-22業界発表およびHAZUSE/ちょんぼりすた/スロパチクエスト/イチカツ等 **2023-05-22**。canonicalは **2023-05-22**、5/8を `CONFLICT_SINGLE_SECONDARY_DATE`。
- 純増: 業界発表・複数解析 **BIG4.2 / REG2.4枚/G** vs HAZUSE **4.1 / 2.1枚/G**。前者をcanonical、後者を `CONFLICT_ANALYSIS_VALUE_OR_DEFINITION`。
- HAZUSE本文のメーカー表示に「ジェイビーエス」が見える箇所があるが、型式検定・プレス発表は株式会社ジェイピーエス（JPS）。canonicalは **ジェイピーエス**。

## 2023-05-22群 — CLOSED 2/2 known
1. 課長 熊田工作 — No.1564 **DONE**
2. パチスロ ジャベリン — No.1565 **DONE**

### 境界監査
- 複数の2023導入一覧は5/22群の次を6/5群として掲載。
- `2023-05-29 パチスロ新台` 等で再探索したが、本線へ追加すべき全国導入のパチスロ新機種は今回確認できず。
- 次のknown全国導入群は **2023-06-05**。

## 次のknown 2023-06-05群候補
- SLOTメイドインアビス — ミズホ
- ぱちスロ にゃんこ大戦争 BIGBANG — 京楽産業.
- Lベルセルク無双 — エキサイト系
- パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver. — サミー系
- 真天下布武 — 山佐系
- ウルトラちゃぶ台返し — ベルコ系

順序は次回冒頭でメーカー公式/業界カレンダー/検定資料を照合し、同日内の漏れと型式を確認して確定する。少なくともポノス公式が `ぱちスロ にゃんこ大戦争 BIGBANG` の2023-06-05全国導入を明記し、K-Navi等で `SLOTメイドインアビス` も2023-06-05導入を確認済み。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8スケジュール掲載 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 現状: `coreStatus: COMPLETE_CORE / qaResetBehavior: PARTIAL`
- 既存レコードには設定変更/据え置き/純電断時のモード・ローズマリー残G・AT状態を検索語/資料系統変更後も直接固定できなかった旨が保存済み。
- 次回QAでは重複探索を避け、追加一次/当時資料がなければ性能完了判定を維持したまま `PARTIAL_RESEARCH_EXHAUSTED` への正式化を検討。

## 今回の主要資料
### No.1565 パチスロ ジャベリン
- 遊技日本 / P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/23444/nippon
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003358/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-57569/
- HAZUSE 基本/AT: https://hazuse.com/machine/pachislot/SX0048/genre/209/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/SX0048/genre/207/
- スロパチクエスト 設定: https://www.slopachi-quest.com/article/javelin-settei/
- スロパチクエスト 天井: https://www.slopachi-quest.com/article/javelin-tenjou/
- ちょんぼりすた: https://chonborista.com/slot/jps-slot/186031/
- イチカツ: https://itikatu.jp/javelin/
- 一撃 プレス発表: https://1geki.jp/repo/20230322jps/
- 一撃 後年紹介（5/8表記CONFLICT）: https://1geki.jp/slot/s_javelin/7/
- K-Navi: https://p-kn.com/topics/exhibition/1985/
- パチ＆スロ必勝本: https://p.hisshobon.jp/news/1851

### 次境界確認
- ポノス公式 / にゃんこ大戦争BIGBANG: https://www.ponos.jp/news/2023/05/10nyanko-5/
- K-Navi / SLOTメイドインアビス: https://p-kn.com/slot/3950/
- スロパチクエスト 2023導入一覧: https://www.slopachi-quest.com/article/2023-dounyuukisyu/

## 保存コミット
- No.1565追加: `0dafba0cd3088b6008e5be158631dc1257f73a80`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1566候補として2023-06-05群の先頭を処理する。次回冒頭で同日6機候補（メイドインアビス / にゃんこ大戦争BIGBANG / ベルセルク無双 / コードギアス3 C.C.&Kallen ver. / 真天下布武 / ウルトラちゃぶ台返し）をメーカー公式・業界カレンダー・検定資料で再監査して順序・型式・漏れを確定し、その先頭から性能コア + resetBehavior v0.7を収集する。2023-05-22群はCLOSED 2/2 known。遡及QAは `2007-07-08_caribbean-queen.md`（カリビアンクイーン）から継続し、既存性能値はやり直さない。`L戦国BASARAギガZE` は2023-08-07境界で導入日CONFLICTを再監査する。**