更新日: 2026-09-10

## 現在地点
- recordCount: **1241**
- latestRecordAdded: **パチスロらんま1/2**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-11-05_pachislot-ranma-half.md`
- chronologicalFrontier: **2018-11-05**
- frontierLatestMachine: **パチスロらんま1/2 — No.1241**
- schema: **resetBehavior v0.7**
- status: **2018-11-05_GROUP_OPEN_3_OF_AT_LEAST_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md` / mission v0.7 / `INDEX.md` / `LATEST_HANDOFF.md` / No.1240を再取得して開始。
- `INDEX.md`は旧19件スナップショットのため、README指示どおり `LATEST_HANDOFF.md` + main実レコードを現行進捗の正本として継続。
- 開始時正本は1240件 / 2018-11-05 / `2018-11-05_GROUP_OPEN_2_OF_AT_LEAST_4_PROCESSED`。
- handoff指定の次機種 `パチスロらんま1/2（EXCITE）` をNo.1241として登録。
- 同日群は少なくとも `スーパープラネットSP / パチスロ戦国乙女TYPE-A+ / パチスロらんま1/2 / パチスロ チェインクロニクル` の4機。残る既知候補はチェインクロニクル。

## No.1241 — パチスロらんま1/2
- manufacturer: **EXCITE（ニューギン系列）**
- releaseDateCanonical: **2018-11-05**
- formalModelName: **パチスロらんま1/2W**
- certificationNumber: **8S0007**
- generation/system: **5.9号機 / ART / 擬似ボーナス / CZ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.3 / 98.8 / 100.6 / 102.5 / 104.3 / 106.3%**
- ART/擬似ボーナス初当たり: **1/516.5 / 1/515.5 / 1/514.8 / 1/514.5 / 1/514.1 / 1/512.9**
- CZ合算: **1/178.1 / 1/178.4 / 1/178.9 / 1/179.4 / 1/179.7 / 1/180.6**
- baseGamesPer50Canonical: **47.4 / 48.4 / 49.8 / 51.4 / 53.0 / 54.9G（MB消化G込み）**
- baseSupportingValues: **50.7G代表値 / 約49G初期記事**
- netIncrease: **約1.7枚/G**
- basicPayout: **擬似ボーナス20G / 熊猫的衝撃20G / ART乱馬・らんまフェスティバルは規定G数不定**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。ちょんぼりすた当時ページで設定変更時の内部状態・ステージとも「調査中」。表記/型式/メーカー/設定変更/リセット/朝一/有利区間等へ検索語を変え、P-WORLD / K-Navi / パチマガスロマガ / すろぱちくえすと / パチ7 / 当時業界記事を横断したが本機固有の確定契約を固定できず。
- carryOver: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。通常天井はN/A。据え置き時の高確/CZ前兆/ART内部状態を純電断と分離した直接資料を固定できず。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH**。ちょんぼりすたは内部状態・ステージとも調査中。別系統再探索でも固定できず。
- gameCounterReset: **NOT_APPLICABLE_NO_NORMAL_CEILING_COUNTER**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: **朝一専用モード NONE_CONFIRMED_AFTER_RESEARCH / 通常高確の設定変更時再抽選・引継ぎはUNVERIFIED**。
- stateAfterReset: **通常高確/CZ前兆/ART状態の設定変更・純電断時契約 UNVERIFIED_AFTER_RESEARCH**。
- advantageousSection: **APPLICABLE_5_9_ART_BUT_RESET_CONTRACT_UNVERIFIED_AFTER_RESEARCH**。一般規則から本機固有仕様を補完しない。
- resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。本機固有ガックン/初期出目/ランプ/ステージによる確定判別条件・率を固定できず。
- numericResetData: **resetSpecificCeiling N/A / resetModeDistribution NONE_CONFIRMED / morningHitRate NONE_CONFIRMED / resetBenefitRate NONE_CONFIRMED / gakkunRate UNVERIFIED**。

## No.1241 conflicts / quality notes
- 導入日: K-Navi / P-WORLD / DMMぱちタウン / すろぱちくえすと / パチ7は **2018-11-05**、ちょんぼりすたは **2018-11-12**。平均せず `CONFLICT_RELEASE_DATE_2018_11_05_VS_2018_11_12`。複数一致の11/5をcanonical。
- 50枚ベース: 設定別 **47.4〜54.9G/50枚（MB消化G込み）**、代表 **50.7G/50枚**、初期記事 **約49G/50枚** が併存。平均せず `SOURCE_DEFINITION_UPDATE_DIFFERENCE_BASE_GAMES_PER_50` として定義分離。
- 2013年SANKYO版の同名機は別機種。今回のEXCITE・型式Wと混同しない。

## 2018-11-05群監査
### 登録済み
- No.1239 スーパープラネットSP
- No.1240 パチスロ戦国乙女TYPE-A+
- No.1241 パチスロらんま1/2

### 未処理候補
1. **パチスロ チェインクロニクル（サミー）**

### 横断監査状況
- すろぱちくえすと2018導入一覧、パチスロ立ち回り講座の過去導入予定一覧で11/5の4機群を確認済み。
- No.1241はK-Navi / P-WORLD / DMMぱちタウン / すろぱちくえすと / パチ7が11/5で一致。ちょんぼりすたのみ11/12のためCONFLICT保持。
- 11/5群はまだOPEN。チェインクロニクル登録後、全メーカー/別型式/別スペック/PB/地域差を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-10_kaitou-tenshi-twin-angel.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-10_kakutou-gekisenku.md`（格闘激戦区）**。
- 今回は新規時系列No.1241を優先し、遡及QAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧19件スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1241を再取得。
2. **1241件 / chronologicalFrontier 2018-11-05 / `2018-11-05_GROUP_OPEN_3_OF_AT_LEAST_4_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. 次の未処理機種 **パチスロ チェインクロニクル（サミー）** をNo.1242候補として調査・登録。
4. 登録後、11/5全メーカー/別型式/別スペック/PB/地域差を再監査し、群CLOSED可否を判定。
5. 遡及QAは `2006-10_kakutou-gekisenku.md`（格闘激戦区）から再開。

## 主要出典 — 取得日 2026-09-10
### No.1241 パチスロらんま1/2
- 日刊スポーツ: https://www.nikkansports.com/m/amusement/pachislot/news/amp/201809260000694.html
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000829/
- PiDEA X: https://www.pidea.jp/articles/P%E3%80%8C%E3%82%B4%E3%82%B8%E3%83%A9%E3%80%8DS%E3%80%8C%E3%82%89%E3%82%93%E3%81%BE1%2F2%E3%80%8D%E3%82%92%E3%81%8A%E6%8A%AB%E9%9C%B2%E7%9B%AE%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3
- P-WORLD: https://www.p-world.co.jp/machine/database/8770
- K-Navi: https://p-kn.com/slot/3101/
- すろぱちくえすと機種トップ: https://www.slopachi-quest.com/article/ranma/
- すろぱちくえすと設定判別: https://www.slopachi-quest.com/article/ranma-settei/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/66328/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/09/a.php
- パチ7: https://pachiseven.jp/machines/5570/cutout/13
- DMMぱちタウン: https://p-town.dmm.com/machines/3262/recommend

### 時系列境界 / 11/5群
- すろぱちくえすと2018導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
- パチスロ立ち回り講座 新台導入予定日: https://crankyseven.com/newmachine-info.htm
- ALL7.jp 2018年11月導入一覧: https://www.all7.jp/plans/index/2018/11
