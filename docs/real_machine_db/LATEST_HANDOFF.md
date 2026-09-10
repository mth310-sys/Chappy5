更新日: 2026-09-10

## 現在地点
- recordCount: **1204**
- latestRecordAdded: **沖ドキ！バケーション-30**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-06-18_okidoki-vacation-30.md`
- chronologicalFrontier: **2018-06-18**
- frontierLatestMachine: **沖ドキ！バケーション-30 — No.1204**
- schema: **resetBehavior v0.7**
- status: **2018-06-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1202を再取得して開始。
- `INDEX.md`は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 1202件 / 2018-06-18群OPENから継続。
- `沖ドキ！バケーション` と `沖ドキ！バケーション-30` を横断監査し、基本性能は共通だが正式型式名・検定番号・25φ/30φ仕様が異なることを確認。
- No.1203 `沖ドキ！バケーション`、No.1204 `沖ドキ！バケーション-30` をperformance core + resetBehavior v0.7で独立登録。
- 2018年導入日一覧、2-9伝説、新台予定一覧、当時回顧資料を照合。6/18本線は大神～回胴編～ / 十字架4 / 沖ドキ！バケーション系で一致し、25φ/30φ別型式も回収済みのため群をCLOSE。

## No.1203 — 沖ドキ！バケーション
- path: `docs/real_machine_db/machines/2018-06-18_okidoki-vacation.md`
- manufacturer: **アクロス**
- releaseDateCanonical: **2018-06-18**
- formalModelName: `沖ドキ！バケーションNN`
- certificationNumber: `7S1499`
- generation/system: **5.9号機 / ノーマルA / 完全告知 / 25φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **96.3 / 98.2 / 101.5 / 103.7 / 106.5 / 110.7%**
- BIG: **1/266.4 / 1/262.1 / 1/258.0 / 1/253.0 / 1/244.5 / 1/230.8**
- REG: **1/343.1 / 1/326.0 / 1/307.7 / 1/288.7 / 1/269.7 / 1/241.8**
- combined: **1/150.0 / 1/145.3 / 1/140.3 / 1/134.8 / 1/128.3 / 1/118.1**
- base: **約32.0〜35.0G/50枚**
- basic payout: **BIG312枚 / REG最大104枚**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 告知ランプ`CLEAR`。ドキドキゾーン`CLEAR`の解析情報あり。
- carryOver: 据え置きを純電断から独立させた本機固有契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: 告知ランプ`CARRYOVER`。ドキドキゾーンは「引き継ぎ!?」と「現在調査中」が併存し、`UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`。
- gameCounter/ceiling: 天井非搭載のため`NOT_APPLICABLE`。短縮天井なし。
- mode/state: 朝一専用モード/設定変更専用振り分け/朝一当選率は`NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: `NOT_APPLICABLE`。
- resetDetection: 本機固有ガックン確定条件/発生率は`UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 告知ランプのCLEAR/CARRYOVERを保存。ドキドキゾーン純電断挙動は低信頼示唆として隔離。

## No.1204 — 沖ドキ！バケーション-30
- path: `docs/real_machine_db/machines/2018-06-18_okidoki-vacation-30.md`
- manufacturer: **アクロス**
- releaseDateCanonical: **2018-06-18**
- formalModelName: `沖ドキ！バケーションNN-30`
- certificationNumber: `7S1311`
- generation/system: **5.9号機 / ノーマルA / 完全告知 / 30φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- performance: **25φ版と共通**（複数資料で明記/整合）
- payout: **96.3 / 98.2 / 101.5 / 103.7 / 106.5 / 110.7%**
- BIG: **1/266.4 → 1/230.8**
- REG: **1/343.1 → 1/241.8**
- combined: **1/150.0 → 1/118.1**
- base: **約32.0〜35.0G/50枚**
- basic payout: **BIG312枚 / REG最大104枚**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- 25φ版と同じシリーズ共通解析を採用するが、30φ固有の据え置き/純電断差が直接固定できない部分は独立してUNVERIFIEDを保持。
- settingChange: 告知ランプ`CLEAR`。ドキドキゾーン`CLEAR_ANALYSIS_SINGLE`。
- powerOFF→ON: 告知ランプ`CARRYOVER`。ドキドキゾーンは`UNVERIFIED_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`。
- ceiling/mode: 天井非搭載、短縮天井・朝一専用モードなし確認。
- resetDetection: 30φ固有ガックン確定条件/発生率は`UNVERIFIED_AFTER_RESEARCH`。

## 2018-06-18群監査
### 登録済み
- No.1201 大神～回胴編～
- No.1202 十字架4
- No.1203 沖ドキ！バケーション（25φ / 型式`NN` / 7S1499）
- No.1204 沖ドキ！バケーション-30（30φ / 型式`NN-30` / 7S1311）

### 群判定
- `2018-06-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- すろぱちくえすと、2-9伝説、新台導入予定一覧では6/18本線が大神/十字架4/沖ドキ！バケーションで一致。
- パチ7回顧資料は沖ドキ！バケーションを25/30として併記。別型式2件とも登録済み。
- 同日群の追加未登録機種を直接確定できる資料は今回の横断監査では確認できず。

## 次導入日群
- **2018-06-25**
- 先頭候補: **グレート69～TOMOLER～**
- すろぱちくえすと、2-9伝説、当時回顧資料で2018-06-25導入が一致。
- 地域/系列限定機の可能性があるため、メーカー・型式・検定番号・導入範囲を確認してNo.1205候補として処理する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07-24_dengeki-franken.md**（電撃フランケン）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_jarinko-chie.md`（じゃりン子チエ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率・型式等の競合は平均/統合せず`CONFLICT`として保持する。
- 同日群の全メーカー/別スペック監査後にのみ群をCLOSEする。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1204を再取得。
2. **1204件 / chronologicalFrontier 2018-06-18 / 6/18群CLOSED**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. **2018-06-25 `グレート69～TOMOLER～`**をNo.1205候補として、表記揺れ・型式・メーカー・系列限定導入の扱いを含めてperformance core + resetBehavior v0.7を収集。
4. 6/25群の全メーカー・表記揺れ・別スペック監査後にCLOSED判定し、その次導入日群へ進む。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_jarinko-chie.md`（じゃりン子チエ）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1203 / No.1204 沖ドキ！バケーション系
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3182/1/69942
- HAZUSE 25φ: https://hazuse.com/machine/pachislot/7S1499/
- HAZUSE 30φ: https://hazuse.com/machine/pachislot/7S1311/
- DMMぱちタウン: https://p-town.dmm.com/machines/3170/recommend
- パチビー 30φ: https://www.pachibee.jp/machines/lecture/218050001
- K-Navi 30φ: https://p-kn.com/slot/3029/
- P-WORLD 30φ: https://www.p-world.co.jp/machine/database/8680
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/59040/
- 一撃 reset: https://1geki.jp/slot/s_okidoki_vacation/3/
- PiDEA X: https://www.pidea.jp/articles/%E3%80%8C%E6%B2%96%E3%83%89%E3%82%AD%21%E3%83%90%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%80%8D%E5%9C%B0%E5%9F%9F%E9%99%90%E5%AE%9A%E3%83%AD%E3%82%B1%E3%83%86%E3%82%B9%E3%83%88%E5%AE%9F%E6%96%BD%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB
- すろぱちくえすと2018一覧: https://www.slopachi-quest.com/article/sindai-2018/
- 2-9伝説新台一覧: https://29den.com/newslot/
- パチ7自由帳2018年6月回顧: https://pachiseven.jp/columns/column_detail/15368
- パチスロ立ち回り講座 新台予定: https://crankyseven.com/newmachine-info.htm
