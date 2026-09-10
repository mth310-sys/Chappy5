更新日: 2026-09-10

## 現在地点
- recordCount: **1231**
- latestRecordAdded: **パチスロ ロックマン アビリティ 史上最大の試練**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-09-18_rockman-ability.md`
- chronologicalFrontier: **2018-09-18**
- frontierLatestMachine: **パチスロ ロックマン アビリティ 史上最大の試練 — No.1231**
- schema: **resetBehavior v0.7**
- status: **2018-09-18_GROUP_OPEN_4_OF_AT_LEAST_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1230を再取得して開始。
- INDEXは旧19件スナップショットのため、LATEST_HANDOFF + main実レコードを正本として1230件から継続。
- main指定の次候補 `パチスロ ロックマン アビリティ 史上最大の試練` をNo.1231として登録。
- 型式 `ロックマンアビリティ／ZY`、検定番号 `8S0119`、メーカーはスパイキー。グリーンべると当時業界記事でもスパイキー製を確認。
- 導入日は複数解析2018-09-18、HAZUSE2018-09-17導入開始のため `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18` を保持し9/18をcanonical。
- 設定4/5/6/H。市場掲載機械割96.1/98.2/100.2/102.0%、完全攻略103.0/105.4/107.6/109.0%。ボーナス合算1/218.5→1/184.6。
- ベース33.5/34.5/35.5/36.5G/50枚、RT純増約0.3枚/G。S-BIG337枚、BIG206枚、REG57枚、RT30/55/80/200G。
- 通常時300G消化でCZアビリティフィールド確定。通常のボーナス天井とは分離して `CZ_COUNTER_300G` として保持。
- 設定変更でもCZ天井カウンタを引き継ぐ。RT/CZ/アビリティアタック/ボーナス中の設定変更では、見た目通常ステージ・内部CZ状態から開始。朝一狙いに直結する特殊契約として保存。
- ちょんぼりすたは電源OFF→ONでもCZ天井引継ぎ/ステージランダム。純電断時のRT/CZ/ボーナス内部状態の独立契約はUNVERIFIED。
- HAZUSEと複数解析で設定6/HのBIG・REG個別値に競合があるため平均せず `CONFLICT_BIG_REG_SETTING6_H_HAZUSE_VS_MULTIPLE_ANALYSIS` を保存。ボーナス合算は一致。

## No.1231 — パチスロ ロックマン アビリティ 史上最大の試練
- manufacturer: **スパイキー**
- releaseDateCanonical: **2018-09-18**
- formalModelName: **ロックマンアビリティ／ZY**
- certificationNumber: **8S0119**
- generation/system: **5.9号機 / A+RT / 技術介入**
- settings: **4 / 5 / 6 / H**
- payoutRate market: **96.1 / 98.2 / 100.2 / 102.0%**
- payoutRate full攻略: **103.0 / 105.4 / 107.6 / 109.0%**
- bonusTotal: **1/218.5 / 1/209.4 / 1/195.6 / 1/184.6**
- baseGamesPer50: **33.5 / 34.5 / 35.5 / 36.5G**
- netIncrease: **RT約0.3枚/G**
- basicPayout: **S-BIG337枚 / BIG206枚 / REG57枚 / RT30・55・80・200G**
- ceiling: **通常時300GでCZ確定（通常ボーナス天井ではない）**

### resetBehavior v0.7
- settingChange: **CZ天井G数引継ぎ。RT/CZ/アビリティアタック/ボーナス中変更なら内部CZ状態開始（液晶は通常）**。
- carryOver: **CZ天井引継ぎ。前日RT/CZ/ボーナス状態そのものの独立継続契約はUNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- powerOFF→ON: **CZ天井引継ぎ、ステージランダム。RT/CZ/ボーナス内部状態の純電断独立契約はUNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- gameCounterReset: **CZ 300Gカウンタは設定変更でも引継ぎ**。
- ceilingAfterReset: **短縮なし。300Gカウンタ引継ぎ**。
- modeAfterReset: **通常時の一般的モードなし。リセット専用モードNOT_APPLICABLE**。
- stateAfterReset: **特殊状態中の設定変更は内部CZへ**。
- advantageousSection: **本機固有の朝一有利区間契約UNVERIFIED_AFTER_RESEARCH**。
- resetBenefits: **前日RT/CZ/アビリティアタック/ボーナス閉店→設定変更で内部CZ開始。通常状態でもCZカウンタ引継ぎで宵越しCZ狙い可**。
- resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: **開始ステージ・300G挙動だけでは設定変更/据え置き判別困難。ガックン条件/発生率UNVERIFIED_AFTER_RESEARCH**。
- numericResetData: **CZ 300G / 通常アビリティフィールドRT期待度約50%**。

## 2018-09-18群監査
### 登録済み
- No.1228 パチスロ ベン・トー ～狼たちの夜～
- No.1229 パチスロ南国育ち～蝶々ver～30Φ
- No.1230 パチスロ南国育ち～蝶々ver～25Φ
- No.1231 パチスロ ロックマン アビリティ 史上最大の試練

### 未処理・同日候補
- **パチスロ 闇芝居** — NET。2018-09-18確認済み。次に性能コア＋resetBehavior v0.7を収集。
- **アレックス** — アクロス。2018-09-18確認済み。その次に処理。

### 群判定
- `2018-09-18_GROUP_OPEN_4_OF_AT_LEAST_6_PROCESSED`
- 残り既知2機を処理し、全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

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
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1231を再取得。
2. **1231件 / chronologicalFrontier 2018-09-18 / `2018-09-18_GROUP_OPEN_4_OF_AT_LEAST_6_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理は **`パチスロ 闇芝居`**。性能コア＋resetBehavior v0.7を収集。
4. 続いて **`アレックス`**。その後9/18全メーカー/別スペック/PB/地域差監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-09_burichika-30.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1231 ロックマン アビリティ
- HAZUSE: https://hazuse.com/machine/pachislot/8S0119/
- グリーンべると: https://web-greenbelt.jp/00010659/
- すろぱちくえすと: https://www.slopachi-quest.com/article/rockman-abilty/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/62583/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/12/c-2.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8725
