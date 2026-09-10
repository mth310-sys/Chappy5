更新日: 2026-09-10

## 現在地点
- recordCount: **1229**
- latestRecordAdded: **パチスロ南国育ち～蝶々ver～30Φ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-09-18_nangoku-sodachi-choucho-ver-30.md`
- chronologicalFrontier: **2018-09-18**
- frontierLatestMachine: **パチスロ南国育ち～蝶々ver～30Φ — No.1229**
- schema: **resetBehavior v0.7**
- status: **2018-09-18_GROUP_OPEN_2_OF_AT_LEAST_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1228を再取得して開始。
- mainは **1228件 / 2018-09-18群OPEN** まで進んでいたため、その地点を正本として継続。INDEXは旧19件スナップショットのためhandoff + main実レコードを優先。
- main指定の次候補 `パチスロ南国育ち～蝶々ver～30Φ` をNo.1229として登録。
- 30Φはアムテックス、型式 `南国育ちC／1A-30`、検定番号 `7S1949`。導入日はパチビー/期待値見える化/ちょんぼりすた等が2018-09-18、HAZUSEは2018-09-17導入開始のため `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18` を保持し9/18をcanonical。
- 設定1/4/6、機械割97.8/99.7/105.0%、ART初当たり全設定1/390.1、BIG合算1/129.9→1/121.0、REG合算1/197.8→1/179.7、総出現1/78.4→1/72.3。
- ベース約32.8/33.9/36.0G/50枚、ART純増約1.8枚/G。SPECIAL BIG 80G+1G連、BIG 80G、REG 30G。天井非搭載。
- resetBehavior: 設定変更時有利区間ランプ消灯、純電断時ランプ/RT状態引継ぎの当時解析あり。設定変更時RT状態は調査中のためUNVERIFIED。リセット後かつ非RT中の有利区間中でART当選した場合に初当たりCとなり、天国B16.9%/飛翔B24.5%/蝶飛翔B58.6%。条件付き朝一恩恵として保存。
- 設定変更後も1G目リールガックンなし、パトランプ位置は設定変更後変化なし・純電源ON/OFF後360度回転との当時解析をresetDetectionへ保存。
- 実戦値は全初当たり14361件平均557.8枚、新台初日1回目489件平均597.9枚。メーカー値と混同せずEMPIRICALとして分離。
- 同時販売の25Φが **別型式 `南国育ちC／1A` / 検定番号 `8S0149`** と判明。全機種方針上は独立レコード候補のため、従来の「9/18少なくとも5機」を **少なくとも6機**へ拡張し、群CLOSE禁止を維持。

## No.1229 — パチスロ南国育ち～蝶々ver～30Φ
- manufacturer: **アムテックス**
- releaseDateCanonical: **2018-09-18**
- formalModelName: **南国育ちC／1A-30**
- certificationNumber: **7S1949**
- generation/system: **5.9号機 / ART**
- settings: **1 / 4 / 6**
- payoutRate: **97.8 / 99.7 / 105.0%**
- ART initial: **全設定1/390.1**
- BIG combined: **1/129.9 / 1/126.5 / 1/121.0**
- REG combined: **1/197.8 / 1/190.4 / 1/179.7**
- bonusTotal: **1/78.4 / 1/76.0 / 1/72.3**
- baseGamesPer50: **約32.8 / 33.9 / 36.0G/50枚**
- netIncrease: **ART約1.8枚/G**
- basicPayout: **SPECIAL BIG 80G+1G連 / BIG 80G / REG 30G**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **有利区間ランプ消灯 / RT状態UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。前日点灯→翌朝点灯なら据え置き濃厚という判別資料あり。
- powerOFF→ON: **有利区間ランプ引継ぎ / RT状態引継ぎ**との当時解析。
- gameCounter/ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE`。
- mode/state: リセット後条件成立時の初当たりCは天国B16.9% / 飛翔B24.5% / 蝶飛翔B58.6%。設定変更時RT状態はUNVERIFIED。
- advantageousSection: 設定変更時はランプ消灯・引継がないとする機種別解析、純電断時ランプ引継ぎ。
- resetBenefits: 条件付き初当たりCで天国B以上確定。実戦値では新台初日1回目の平均獲得が通常集計より約40枚高いが参考値扱い。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: **設定変更後ガックンなし / パトランプ設定変更後変化なし / 純電断後360度回転 / 有利区間ランプ残存で据え置き推測**。
- numericResetData: **初当たりC=天国B16.9% / 飛翔B24.5% / 蝶飛翔B58.6%**。

## 2018-09-18群監査
### 登録済み
- No.1228 パチスロ ベン・トー ～狼たちの夜～
- No.1229 パチスロ南国育ち～蝶々ver～30Φ

### 未処理・同日候補
- **パチスロ南国育ち～蝶々ver～25Φ** — アムテックス。30Φとは別型式 `南国育ちC／1A` / 検定 `8S0149`。同時販売資料あり。次回優先して独立登録監査。
- パチスロ ロックマン アビリティ 史上最大の試練 — 2018-09-18候補。朝一資料にCZ天井/RT・CZ関連の機種固有契約あり、別ソース照合して登録。
- パチスロ 闇芝居 — NET。9/18確認済み。
- アレックス — アクロス。9/18確認済み。

### 群判定
- `2018-09-18_GROUP_OPEN_2_OF_AT_LEAST_6_PROCESSED`
- 25Φ/30Φは別型式・別検定番号のため独立候補。少なくとも6機を処理し、さらに全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

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
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1229を再取得。
2. **1229件 / chronologicalFrontier 2018-09-18 / `2018-09-18_GROUP_OPEN_2_OF_AT_LEAST_6_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理は **`パチスロ南国育ち～蝶々ver～25Φ`** を優先。30Φと性能共通に見える値も別型式なので、25Φ単独資料照合なしに自動転記しない。
4. 続いて `パチスロ ロックマン アビリティ 史上最大の試練` → `パチスロ 闇芝居` → `アレックス`。その後9/18全メーカー/別スペック/PB/地域差監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-09_burichika-30.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1229 南国育ち～蝶々ver～30Φ
- パチビー: https://www.pachibee.jp/machines/index/218080000
- HAZUSE 30Φ: https://hazuse.com/machine/pachislot/7S1949/genre/201/
- ちょんぼりすた: https://chonborista.com/slot/amute/62658/
- 期待値見える化: https://slotjin.com/slot/nangoku-sodachi/
- 期待値見える化 リセット実戦値: https://slotjin.com/jissenchi/nangoku-sodachi-reset/
- 元プロMG解析: https://www.pachislotblog.tokyo/nangokusodachi-kaiseki/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/01/l.php
- HAZUSE 25Φ（別型式確認）: https://hazuse.com/machine/pachislot/8S0149/
