更新日: 2026-09-13

## 現在地点
- recordCount: **1566**
- latestRecordAdded: **SLOTメイドインアビス — No.1566**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-06-05_slot-made-in-abyss.md`
- chronologicalFrontier: **2023-06-05**
- frontierLatestMachine: **SLOTメイドインアビス — No.1566**
- schema: **resetBehavior v0.7**
- status: **2023-06-05_GROUP_OPEN_1_OF_6_KNOWN_PROCESSED / NEXT_NO1567_NYANKO_BIGBANG**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1565 `パチスロ ジャベリン` を確認して開始。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-05-22群CLOSED後の次known全国導入群として2023-06-05群を再監査。複数導入一覧で6機候補が一致。
- 群先頭 `SLOTメイドインアビス` をNo.1566として処理し、性能コア + resetBehavior v0.7を保存。
- 欠損項目は機種名/正式型式/メーカー/シリーズ名と、設定変更・リセット・朝一・据え置き・電源OFF ON・天井短縮・モード・高確・ガックン・有利区間を組み替え、業界記事・検定資料・複数解析を横断して再探索。

## No.1566 — SLOTメイドインアビス
- manufacturer: **ミズホ（ユニバーサルエンターテインメントグループ）**
- formalModel: **S／メイドインアビス／EN**
- inspectionCode: **2S1511**
- releaseDate: **2023-06-05**
- generation/system: **6.5号機 / メダルAT / セット継続型**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 99.2 / 101.5 / 106.1 / 108.1 / 110.0%**
- CZ: **1/138.8 / 1/134.6 / 1/129.2 / 1/119.5 / 1/114.4 / 1/110.7**
- AT: **1/287.2 / 1/276.5 / 1/262.7 / 1/233.1 / 1/220.8 / 1/212.6**
- baseGamesPer50: **約35.9G/50枚**
- netIncrease: **ストーリー約1.8枚/G / 冒険約2.8枚/G**
- AT基本: **冒険パート30G+α、最大12セット構造**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_LIMITED_PUBLIC_NUMBERS**

### resetBehavior v0.7 — No.1566
- 設定変更: **天井RESET / 内部状態RESET / 高確率スタート**。
- 据え置き: **天井・内部状態CARRY_OVER**。
- 純電源OFF→ON: **天井・内部状態CARRY_OVER**を機種固有比較資料で確認。
- 通常時 **500G+αでCZ天井 / 700G+αでAT天井**。
- 設定変更専用の固定短縮天井・公開モード振り分け・朝一AT期待度は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間ランプでは設定変更/据え置き判別不可。
- 設定変更/据え置き/純電断ごとの有利区間内部契約は、機種固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的6.5号機挙動から補完しない。
- 本機固有ガックン条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 朝一の主要公開恩恵は **設定変更後の高確率スタート**。具体的継続G数/CZ率/AT期待度は未固定。

## 2023-06-05群 — OPEN 1/6 known
1. SLOTメイドインアビス — No.1566 **DONE**
2. ぱちスロ にゃんこ大戦争 BIGBANG — **NEXT / No.1567候補**
3. Lパチスロベルセルク無双 — 未処理
4. パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver. — 未処理
5. 真天下布武 — 未処理
6. ウルトラちゃぶ台返し — 未処理

### 群監査
- スロパチクエスト2023導入一覧で上記6機が2023-06-05群として一致。
- 導入直後の複数新台まとめでも6機構成を確認。
- 群CLOSED判定は6機処理後、PB・別型式・地域先行・延期/段階導入を再監査して行う。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8スケジュール掲載 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次/当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### No.1566 SLOTメイドインアビス
- 遊技通信web 検定通過: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%883%E6%9C%8820%E6%97%A5%EF%BC%89/
- P-WORLD/遊技日本 検定通過: https://news.p-world.co.jp/articles/23303/nippon
- 一撃: https://1geki.jp/slot/s_miabyss/
- なな徹: https://nana-press.com/kaiseki/machine/561/
- なな徹 朝一/有利区間: https://nana-press.com/kaiseki/machine/561/15142/
- K-Navi: https://p-kn.com/slot/3950/
- スロパチクエスト: https://www.slopachi-quest.com/article/madeinabyss-settei/
- スロットセブン: https://slot-seven.com/made_in_abyss-settei/
- パチスロメソッド: https://slotmethod.jp/archives/16805/
- イチカツ: https://ichikatsu.com/miabyss/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/4087/1/95521

### 2023-06-05群確認
- スロパチクエスト 2023導入一覧: https://www.slopachi-quest.com/article/2023-dounyuukisyu/

## 保存コミット
- No.1566追加: `2dc996436f83368641911afa439a1d02faeb401a`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1567候補 `ぱちスロ にゃんこ大戦争 BIGBANG` から継続する。同日2023-06-05群の残りはベルセルク無双 → コードギアス3 C.C.&Kallen ver. → 真天下布武 → ウルトラちゃぶ台返し。各機を性能コア + resetBehavior v0.7で処理し、欠損前に表記揺れ/型式/メーカーと各リセット検索語を変えて再探索する。6機完了後にPB・別型式・地域先行・延期を横断しCLOSED可否を判定する。遡及QAはカリビアンクイーンから継続し、既存性能値はやり直さない。**