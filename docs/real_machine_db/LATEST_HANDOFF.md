更新日: 2026-09-10

## 現在地点
- recordCount: **1235**
- latestRecordAdded: **A-SLOTツインエンジェルBREAK**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-10-09_a-slot-twin-angel-break.md`
- chronologicalFrontier: **2018-10-09**
- frontierLatestMachine: **A-SLOTツインエンジェルBREAK — No.1235**
- schema: **resetBehavior v0.7**
- status: **2018-10-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1234を再取得して開始。
- `INDEX.md`は旧19件スナップショットのため、`LATEST_HANDOFF.md` + main実レコードを正本としてNo.1234の次から継続。
- 2018-10-01同日群を業界記事・複数導入一覧で再監査。HEY！鏡以外の同日パチスロ追加候補を固定できず、`2018-10-01_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT` とした。
- 2018-10-02～10-08境界を検索。発売発表記事等はあるが、この期間にホール導入開始した未登録パチスロ機を固定できず、2018-10-09へ前進。
- No.1235 `A-SLOTツインエンジェルBREAK` を登録。
- Sammy公式製品ページ、HAZUSE、K-Navi、一撃、ちょんぼりすた、すろぱちくえすと、パチマガスロマガ、グリーンべると等を横断照合。
- 型式 `ツインエンジェルBREAK-A／ZR` / 検定番号 `8S0077` / Sammy（製造元ロデオ）/ 2018-10-09導入を確認。
- 公表機械割98.0/99.5/104.3/108.1%、完全攻略100.4/101.9/106.8/110.6%。
- ボーナス合算1/159.8 / 1/154.6 / 1/143.7 / 1/132.1。約35G/50枚。
- SBB最大311枚 / HBB259枚 / BIG207枚 / MB103枚。RTは30G、CZ経由で約50%ループ。
- CZ間777GでCZ突入。ボーナス天井ではないため定義分離。
- resetBehaviorは設定変更でもCZ天井G・RT状態を引継ぎ、電源OFF→ONでも引継ぐ直接比較資料を確認。
- 設定変更時は内部RT/CZを残したまま通常時画面に見える場合があり、純電断ではRT/CZ画面を復帰するため、前日CZ/RT中閉店台では表示差が変更判別材料。
- 設定変更専用の短縮天井・朝一モード振り分け・当選率上昇は十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン発生率/確定条件、RT純増の比較可能な枚/Gは再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2-9伝説の2018年10月導入一覧と当時予定表の双方で10/9は本機のみを確認し、追加候補を固定できなかったため10/9群CLOSED。

## No.1235 — A-SLOTツインエンジェルBREAK
- manufacturer: **Sammy（製造元: ロデオ）**
- releaseDateCanonical: **2018-10-09**
- formalModelName: **ツインエンジェルBREAK-A／ZR**
- certificationNumber: **8S0077**
- generation/system: **5.9号機 / A+RT / 技術介入**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **98.0 / 99.5 / 104.3 / 108.1%**
- fullStrategyPayout: **100.4 / 101.9 / 106.8 / 110.6%**
- bonusCombined: **1/159.8 / 1/154.6 / 1/143.7 / 1/132.1**
- baseGamesPer50: **約35G**（補助実測 S1 35.2G / S6 35.5G）
- basicPayout: **SBB311 / HBB259 / BIG207 / MB103枚 最大**
- RT: **30G / CZ経由 / 約50%ループ**
- ceiling: **CZ間通常時777G→CZ**

### resetBehavior v0.7
- settingChange: **CZ天井G CARRY_OVER / RT状態 CARRY_OVER / 液晶はBREAKモード・廊下or街・月ランダム / マイスロCARRY_OVER**。
- carryOver: **CZ天井GおよびRT/CZ内部状態を引継ぐ。前日CZ/RT中閉店台が朝一狙い・判別材料。**
- powerOFF→ON: **CZ天井G・RT状態・マイスロ引継ぎ。RT中ならRT画面復帰、CZ等は電断前表示へ戻る直接資料あり。**
- gameCounterReset: **設定変更/据え置き/純電断ともCARRY_OVER（CZ間777Gカウンター）**。
- ceilingAfterReset: **短縮なし確認。CZ間777Gを引継ぎ。**
- modeAfterReset: **内部RT状態引継ぎ / 朝一専用内部モード振り分け NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSection: **N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY**。
- resetBenefits: **前日CZ間ハマリ・RT/CZ状態が設定変更でも消えないことが条件付き朝一要素。専用当選率UPなし確認。**
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **前日CZ/RT中なら設定変更時の通常画面化と純電断時の画面復帰差が推測材料。通常状態でのガックン確定条件/発生率はUNVERIFIED。**
- numericResetData: **CZ天井777G。設定変更専用短縮値/モード振分/恩恵率はNONE_CONFIRMED_AFTER_RESEARCH。**

## 2018-10-01群監査
### 登録済み
- No.1234 HEY！鏡

### 群判定
- `2018-10-01_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- グリーンべると/P-WORLD業界記事は10月1日に稼働開始した6号機としてHEY！鏡を明示。2-9伝説の2018年10月導入一覧も10/1をHEY！鏡のみとしている。

## 2018-10-09群監査
### 登録済み
- No.1235 A-SLOTツインエンジェルBREAK

### 群判定
- `2018-10-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- 2-9伝説導入一覧および当時予定表で10/9はA-SLOTツインエンジェルBREAKのみ。追加別スペック/PB/地域差を今回固定できずCLOSED。

## 次の時系列候補
- **2018-10-15 大海物語4 withすーぱーそに子**
- **2018-10-15 ツインドラゴンハナハナ**
- 2-9伝説導入一覧と当時予定表の双方で10/15群として確認。
- 次回は2018-10-10～10-14境界監査後、No.1236候補 `大海物語4 withすーぱーそに子` から性能コア+resetBehavior v0.7を収集し、その後 `ツインドラゴンハナハナ`、同日全メーカー/別スペック/PB/地域差監査へ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-09_takenaka-naoto-taikoki.md**（前回handoffを継承）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は時系列新規No.1235の性能コア+resetBehavior収集を優先し、遡及QAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一シリーズでも別型式/別検定番号は単独資料照合なしに性能・resetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- CZ天井・ボーナス天井・AT天井など定義の異なる天井を混同しない。
- 既存COMPLETE_CORE/PARTIALの性能側判定とresetBehavior QA状態は分離する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1235を再取得。
2. **1235件 / chronologicalFrontier 2018-10-09 / `2018-10-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 2018-10-10～10-14境界監査。
4. **2018-10-15 大海物語4 withすーぱーそに子** をNo.1236候補として性能コア+resetBehavior v0.7収集。
5. 続いて **ツインドラゴンハナハナ**、その後10/15群横断監査。
6. 遡及QAは2006-09以降の隣接レコードをmain実ファイル順で確認して継続。

## 主要出典 — 取得日 2026-09-10
### No.1235 A-SLOTツインエンジェルBREAK
- Sammy公式: https://www.sammy.co.jp/japanese/product/pachislot/2018/twinangelbreak_Aslot/
- Sammy 2018年製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/2018/index.html
- HAZUSE: https://hazuse.com/machine/pachislot/8S0077/
- K-Navi: https://p-kn.com/slot/3078/
- 一撃 基本: https://1geki.jp/slot/s_aslo_twinbreak/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_aslo_twinbreak/3/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/63259/
- すろぱちくえすと: https://www.slopachi-quest.com/article/twin-angel-break-atype/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/169/c.php
- グリーンべると: https://web-greenbelt.jp/00010686/
- 2-9伝説導入一覧: https://29den.com/newslot/

### 10/1群監査
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/10473/greenbelt
- 2-9伝説導入一覧: https://29den.com/newslot/

### 次回10/15群
- 2-9伝説導入一覧: https://29den.com/newslot/
