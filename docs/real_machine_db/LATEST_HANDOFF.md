更新日: 2026-09-10

## 現在地点
- recordCount: **1230**
- latestRecordAdded: **パチスロ南国育ち～蝶々ver～25Φ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-09-18_nangoku-sodachi-choucho-ver-25.md`
- chronologicalFrontier: **2018-09-18**
- frontierLatestMachine: **パチスロ南国育ち～蝶々ver～25Φ — No.1230**
- schema: **resetBehavior v0.7**
- status: **2018-09-18_GROUP_OPEN_3_OF_AT_LEAST_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1229を再取得して開始。
- mainは **1229件 / 2018-09-18群OPEN** まで進んでいたため、その地点を正本として継続。INDEXは旧19件スナップショットのためhandoff + main実レコードを優先。
- main指定の次候補 `パチスロ南国育ち～蝶々ver～25Φ` をNo.1230として独立登録。
- 25Φはアムテックス、型式 `南国育ちC／1A`、検定番号 `8S0149`。30Φの `南国育ちC／1A-30` / `7S1949` とは別型式・別検定番号。
- 導入日は25Φ単独中古DB/ちょんぼりすた等が2018-09-18、HAZUSEは2018-09-17導入開始のため `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18` を保持し9/18をcanonical。
- 設定1/4/6、機械割97.8/99.7/105.0%、ART初当たり全設定1/390.1、BIG合算1/129.9→1/121.0、REG合算1/197.8→1/179.7、総出現1/78.4→1/72.3。
- ベース約32.8～36.0G/50枚、ART純増約1.8枚/G。SPECIAL BIG 80G+1G連、BIG 80G、REG 30G。天井非搭載。
- resetBehaviorは25Φ単独資料と25/30共通資料を分離。共通ページでは朝一設定変更/電源OFF→ONの内部状態は調査中。25Φ単独のRT状態・有利区間・ガックン/パトランプ等の設定変更/据え置き/純電断契約は十分な再探索後も固定できずUNVERIFIED。
- 30Φに存在する詳細reset契約は別型式であるため25Φへ自動転記していない。

## No.1230 — パチスロ南国育ち～蝶々ver～25Φ
- manufacturer: **アムテックス**
- releaseDateCanonical: **2018-09-18**
- formalModelName: **南国育ちC／1A**
- certificationNumber: **8S0149**
- generation/system: **5.9号機 / ART**
- settings: **1 / 4 / 6**
- payoutRate: **97.8 / 99.7 / 105.0%**
- ART initial: **全設定1/390.1**
- BIG combined: **1/129.9 / 1/126.5 / 1/121.0**
- REG combined: **1/197.8 / 1/190.4 / 1/179.7**
- bonusTotal: **1/78.4 / 1/76.0 / 1/72.3**
- baseGamesPer50: **約32.8～36.0G/50枚（設定域）**
- netIncrease: **ART約1.8枚/G**
- basicPayout: **SPECIAL BIG 80G+1G連 / BIG 80G / REG 30G**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **内部状態調査中（25/30共通資料） / 25Φ単独RT・有利区間契約UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **共通資料で内部状態調査中、25Φ単独契約UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- gameCounter/ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE`。
- mode/state: 設定変更専用モード振り分け数値 `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: 有利区間使用/有利区間中ART初当たり天国移行は共通解析で確認。ただし25Φ単独の設定変更/据え置き/純電断契約はUNVERIFIED。
- resetBenefits: **25Φ単独の設定変更専用定量恩恵 `NONE_CONFIRMED_AFTER_RESEARCH`**。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: **25Φ単独のガックン/パトランプ/ランプ判別条件・発生率UNVERIFIED_AFTER_RESEARCH**。
- numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2018-09-18群監査
### 登録済み
- No.1228 パチスロ ベン・トー ～狼たちの夜～
- No.1229 パチスロ南国育ち～蝶々ver～30Φ
- No.1230 パチスロ南国育ち～蝶々ver～25Φ

### 未処理・同日候補
- **パチスロ ロックマン アビリティ 史上最大の試練** — 2018-09-18候補。朝一資料にCZ天井/RT・CZ関連の機種固有契約あり、別ソース照合して登録。
- パチスロ 闇芝居 — NET。9/18確認済み。
- アレックス — アクロス。9/18確認済み。

### 群判定
- `2018-09-18_GROUP_OPEN_3_OF_AT_LEAST_6_PROCESSED`
- 少なくとも残り3機を処理し、さらに全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-09_kyuji.md**（球児）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-09_burichika-30.md`（ブリチカ-30）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は新規時系列キューを優先しQAカーソルは維持。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。一般論を本機固有契約へ昇格しない。
- 同一シリーズでも別型式/別検定番号は単独資料照合なしに性能・resetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1230を再取得。
2. **1230件 / chronologicalFrontier 2018-09-18 / `2018-09-18_GROUP_OPEN_3_OF_AT_LEAST_6_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理は **`パチスロ ロックマン アビリティ 史上最大の試練`**。性能コア＋resetBehavior v0.7、とくにCZ天井/RT・CZ関連の設定変更/据え置き/純電断差を複数ソースで照合。
4. 続いて `パチスロ 闇芝居` → `アレックス`。その後9/18全メーカー/別スペック/PB/地域差監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-09_burichika-30.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1230 南国育ち～蝶々ver～25Φ
- HAZUSE 25Φ: https://hazuse.com/machine/pachislot/8S0149/
- HAZUSE 25Φ基本: https://hazuse.com/machine/pachislot/8S0149/genre/201/
- ちょんぼりすた: https://chonborista.com/slot/amute/62658/
- P-WORLD 25Φ: https://www.p-world.co.jp/machine/database/8722
- スロ安サーチ25Φ: https://slot-price.com/slot_price_details/id/1269
