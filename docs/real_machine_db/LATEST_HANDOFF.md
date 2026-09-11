更新日: 2026-09-11

## 現在地点
- recordCount: **1346**
- latestRecordAdded: **みうのおしゃべりパチスロ — No.1346**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-16_miu-oshaberi-pachislot.md`
- chronologicalFrontier: **2020-03-16**
- frontierLatestMachine: **みうのおしゃべりパチスロ — No.1346**
- schema: **resetBehavior v0.7**
- status: **2020-03-16_GROUP_CLOSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1345「スペリオーレ」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正とした。
- 開始時main最新handoffは No.1345 / 2020-03-16群OPEN_2_OF_3。
- 前リレー指定どおり、最後の未処理「みうのおしゃべりパチスロ」をNo.1346として追加。
- 2020-03-16群は **パチスロ〈物語〉シリーズ セカンドシーズン / スペリオーレ / みうのおしゃべりパチスロ** の3機を処理完了。
- 複数導入一覧・当時資料を再監査し、2020-03-16同日群は上記3機で **CLOSED** とした。
- 次の明確なパチスロ全国導入群は **2020-03-23「新鬼武者～DAWN OF DREAMS～」**。遊技日本、スロパチクエスト、当時導入予定一覧で一致。

## No.1346 — みうのおしゃべりパチスロ
- path: `docs/real_machine_db/machines/2020-03-16_miu-oshaberi-pachislot.md`
- manufacturer: **岡崎産業**
- formalModel: **SみうスロM1**
- certificationNumber: **9S0093**
- releaseDate canonical: **2020-03-16**
- generation/system: **6号機 / AT / 擬似ボーナス連チャン / STループ**
- payoutRate: **97.2 / 98.2 / 100.0 / 103.0 / 105.0 / 110.0%**
- publishedATInitialHit: **1/283.9 / 264.9 / 237.9 / 199.4 / 171.5 / 129.3**
- note: 上記AT初当たりは公開資料上 **「通常時100G消化後から算出」** の比較値。無注記の実質初当たりと混同しない。
- detailedATCombined: **1/167.9 / 160.3 / 146.3 / 129.7 / 118.9 / 96.8**
- base: **設定1 約53.8G/50枚、公開レンジ約53.8〜57.0G/50枚**
- netIncrease: **約2.7枚/G**
- basicPayout: **BIG 60G約160枚 / REG 30G約80枚 / SPECIAL 111〜555G約300〜1500枚**
- ceiling: **有利区間移行後最大1000G、AT確定**
- regulatedGameNumbers: **100G or 1000G**

### resetBehavior v0.7 — No.1346
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_RESET_VS_POWER_CYCLE_CONTRACT**
- **設定変更=天井RESET / 有利区間RESET / 状態クリア**。
- **据え置き・電源OFF→ON=天井進行 / 有利区間CARRY_OVER** と整理。
- 純電断では **表示G数カウンタが1から再スタートしても、内部の規定ゲーム数は保持**。表示と内部進行を分離保存。
- 規定G振り分け 100G / 1000G:
  - 設定1 **25.0 / 75.0%**
  - 設定2 **25.0 / 75.0%**
  - 設定3 **30.1 / 69.9%**
  - 設定4 **30.1 / 69.9%**
  - 設定5 **30.1 / 69.9%**
  - 設定6 **35.2 / 64.8%**
- 上記100/1000Gは通常の規定G抽選であり、設定変更専用の朝一優遇テーブルではない。
- 設定変更後の表/裏モード初期振り分け、通常/高確/超高確初期振り分け、朝一有利区間ランプ確定判別、本機固有ガックン条件/率は資料系統を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## No.1346 data-quality notes
- AT初当たり1/283.9〜1/129.3には「通常時100G消化後から算出」の定義注記を保持。
- 50枚ベースは設定1・4・5・6を直接確認。設定2・3の個別値は今回確認資料で欠落しており推測補完していない。
- coreStatus: **COMPLETE_CORE**。
- overallReliability: **ANALYSIS_HIGH_WITH_OFFICIAL_AND_INDUSTRY_CONFIRMATION**。

## 2020-03-16群監査
- 1. パチスロ〈物語〉シリーズ セカンドシーズン — **No.1344 / 処理済み**
- 2. スペリオーレ — **No.1345 / 処理済み**
- 3. みうのおしゃべりパチスロ — **No.1346 / 処理済み**
- 当時導入一覧・メーカー/業界/解析系を再確認し、同日追加候補を確認できず。
- 群判定: **CLOSED**。

## 次導入群監査
- 2020-03-23: **新鬼武者～DAWN OF DREAMS～（エンターライズ）** を複数資料で確認。
- 遊技日本は全国ホール導入開始を2020-03-23と明記。
- スロパチクエストの2020年導入一覧も3/23群を同機1機として掲載。
- 当時導入予定一覧も3/23同機のみを掲載。
- 現時点の次回本線候補: **No.1347 新鬼武者～DAWN OF DREAMS～**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- `やったネ！はるみちゃん` は `PARTIAL_RESEARCH_EXHAUSTED` へ正式化済み。
- 今回は新規本線No.1346と3/16群クローズを優先。次回以降、最新mainから未formalized候補を再計算して継続する。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1346を再取得。
2. **2020-03-23群の `新鬼武者～DAWN OF DREAMS～` をNo.1347候補として処理する。**
3. 処理後、3/23同日全メーカー・別型式・別スペック・PB・地域差を再監査しCLOSED可否を判定する。
4. 次の導入群を時系列で特定して本線継続。
5. 遡及QAは最新mainから未formalized候補を再計算して進める。

## 主要出典 — 取得日 2026-09-11
### No.1346
- 岡崎産業公式: https://okazakisangyo.com/
- 遊技日本 製品/PV公開: https://yugi-nippon.com/pachinko-new-machine/post-32978/
- P-WORLD / 遊技通信 検定通過: https://news.p-world.co.jp/articles/12728/yugitsushin
- パチビー 発表会: https://www.pachibee.jp/pparticles/view/1228
- PiDEA X 発表会詳細: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E3%80%8C%E3%81%BF%E3%81%86%E3%81%AE%E3%81%8A%E3%81%97%E3%82%83%E3%81%B9%E3%82%8A%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%80%8D%E6%A9%9F%E7%A8%AE%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%A8pv%E3%81%8C%E5%85%AC%E9%96%8B%EF%BC%8F%E5%B2%A1%E5%B4%8E%E7%94%A3%E6%A5%AD
- HAZUSE: https://hazuse.com/machine/pachislot/9S0093/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9144
- 1geki: https://1geki.jp/slot/s_miusuro/
- 1geki 設定判別: https://1geki.jp/slot/s_miusuro/0/
- ちょんぼりすた: https://chonborista.com/slot/okazaki-slot/104548/
- スロパチクエスト 天井/朝一: https://www.slopachi-quest.com/article/miu-oshaberislot-tennjou/
- スロパチクエスト 設定差: https://www.slopachi-quest.com/article/miu-oshaberislot-settei/
- ぱちんこキュレーション: https://www.pachinko-curation.com/1578/

### 次導入群確認
- 遊技日本 3/23導入 新鬼武者: https://yugi-nippon.com/pachinko-new-machine/post-33962/
- スロパチクエスト 2020導入機種一覧: https://www.slopachi-quest.com/article/2020-dounyuukishu/
- 当時導入予定一覧: https://crankyseven.com/newmachine-info.htm
