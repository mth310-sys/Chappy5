更新日: 2026-09-10

## 現在地点
- recordCount: **1244**
- latestRecordAdded: **バイオハザード イントゥザパニック**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-11-19_biohazard-into-the-panic.md`
- chronologicalFrontier: **2018-11-19**
- frontierLatestMachine: **バイオハザード イントゥザパニック — No.1244**
- schema: **resetBehavior v0.7**
- status: **2018-11-19_GROUP_OPEN_2_OF_AT_LEAST_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1243を取得して開始。
- `INDEX.md`は旧スナップショットのため、README指示どおり `LATEST_HANDOFF.md` + main実レコードを現行正本として継続。
- 開始時正本は1243件 / 2018-11-19 / `2018-11-19_GROUP_OPEN_1_OF_AT_LEAST_3_PROCESSED`。
- handoff指定の次機種 `バイオハザード イントゥザパニック` をNo.1244として登録。
- 2018-11-19群は少なくとも `戦コレ！［泰平女君］徳川家康 / バイオハザード イントゥザパニック / ダンまち` の3機。2/3処理済みのためOPEN継続。

## No.1244 — バイオハザード イントゥザパニック
- manufacturer: **スパイキー**
- releaseDateCanonical: **2018-11-19**
- formalModelName: **バイオイントゥザパニック／ZA**
- certificationNumber: **8S0023**
- generation/system: **5号機 / ノーマルAタイプ / ボーナス+20GベースアップRT状態**
- payoutRate: **98.3 / 99.8 / 101.6 / 104.5 / 107.4 / 115.3%**
- BONUS合算: **1/149.6 / 1/144.7 / 1/138.6 / 1/129.8 / 1/119.6 / 1/99.9**
- BIG合算: **1/242.7 / 1/237.4 / 1/235.7 / 1/224.4 / 1/219.9 / 1/199.8**
- REG: **1/390.1 / 1/370.3 / 1/336.1 / 1/307.7 / 1/262.1 / 1/199.8**
- baseGamesPer50: **約35G**（別当時資料に約35〜37G表記あり）
- basicPayout: **SBB最大310枚 / BB最大232枚 / REG最大102枚**
- ceiling: **NONE**

### resetBehavior v0.7
- settingChange: **CONFIRMED**。RT状態・PZ/心音等前兆・ベースアップゾーンをリセット、液晶ステージ再抽選。
- carryOver: **PARTIAL_CONFIRMED**。据え置きで前日非常通路中なら内部ベースアップ状態を引き継ぐとの解析あり。通常RT/PZ/演出状態を純電断と独立して網羅する契約はUNVERIFIED。
- powerOFF→ON: **CONFIRMED_PARTIAL**。RT状態を引継ぎ。液晶ステージは再抽選。非常通路中は内部状態を引き継ぐ。
- gameCounterReset / ceilingAfterReset: **N/A**。天井非搭載。
- mode/state: 通常時に恒常モード概念なしとする当時解析。設定変更ではRT/ベースアップ状態をリセット、純電断ではRT・非常通路内部状態を引継ぎ。
- advantageousSection: **N/A**（5号機ノーマル）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **PARTIAL_CONFIRMED**。設定変更/純電断ともステージが同じ50/25/25で再抽選されるため単独判別不可。据え置き非常通路の朝一リプレイ挙動は推測材料。ガックンは調査中のまま確定条件・率UNVERIFIED。
- numericResetData: 朝一ステージ **研究施設50% / アジト地下室25% / テラグリジア25%**。

### conflict / quality note
- manufacturerはHAZUSE/P-WORLD/パチマガスロマガ/当時資料が **スパイキー** で一致する一方、ちょんぼりすた機種概要欄に **エンターライズ** 表記あり。canonicalはスパイキー、`CONFLICT_MANUFACTURER_SPIKY_VS_ENTERRISE_SINGLE_SECONDARY_METADATA` を保持。
- baseGamesPer50は約35Gと約35〜37Gの表現差。平均化せずcanonical約35G、別レンジは品質注記として保持。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-11_garou-densetsu.md`**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-11_jack-to-mamenoki.md`（ジャックと豆の木）**。
- 既存性能値をやり直さず、resetBehavior欠損のみ順次QAする。

## 2018-11-19群
### 登録済み
- No.1243 戦コレ！［泰平女君］徳川家康
- No.1244 バイオハザード イントゥザパニック

### 未処理候補
1. **ダンまち — No.1245候補**

### 判定
- **2018-11-19_GROUP_OPEN_2_OF_AT_LEAST_3_PROCESSED**。
- 同日全メーカー/別スペック/PB/地域差監査が完了するまでCLOSEしない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1244を再取得。
2. **1244件 / chronologicalFrontier 2018-11-19 / `2018-11-19_GROUP_OPEN_2_OF_AT_LEAST_3_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理機種 **ダンまち** をNo.1245候補として調査・登録。
4. 登録後に2018-11-19同日全メーカー/別スペック/PB/地域差監査を行いCLOSE判定。
5. 遡及QAは **`docs/real_machine_db/machines/2006-11_jack-to-mamenoki.md`（ジャックと豆の木）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1244 バイオハザード イントゥザパニック
- HAZUSE: https://hazuse.com/machine/pachislot/8S0023/
- P-WORLD: https://www.p-world.co.jp/machine/database/8809
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/65096/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_bio_panic/3/
- すろぱちくえすと: https://www.slopachi-quest.com/article/biohazard-intothepanic/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/13/a.php
- パチマガスロマガ ゲーム性: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/13/l.php
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000821/
- 元プロMG: https://www.pachislotblog.tokyo/biohazard-into-the-panic-kaiseki/
