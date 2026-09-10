更新日: 2026-09-11

## 現在地点
- recordCount: **1273**
- latestRecordAdded: **戦国パチスロ 義風堂々!!～兼続と慶次～**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-04-01_gifuudoudou-kanetsugu-keiji.md`
- chronologicalFrontier: **2019-04-01**
- frontierLatestMachine: **戦国パチスロ 義風堂々!!～兼続と慶次～ — No.1273**
- schema: **resetBehavior v0.7**
- status: **2019-04-01_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1272を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 開始時mainはrecordCount 1272、2019-03-25群CLOSED。
- 2019-03-26〜03-31境界を新台カレンダー/当時解析で監査し、独立登録すべき全国導入パチスロを固定できず4/1へ前進。
- handoff第一候補 `戦国パチスロ 義風堂々!!～兼続と慶次～` をNo.1273として性能コア + resetBehavior v0.7で登録。
- HAZUSEで型式 `義風堂々！！～兼続と慶次～EM` / 検定番号 `7S1876` を固定。
- 導入日はHAZUSE/すろぱちくえすと/当時業界予定の2019-04-01と、K-Navi/ちょんぼりすた/スロパチネットの2019-04-08が競合。平均せず4/1を時系列canonical、4/8をCONFLICTとして保持。
- 設定1/2/5/6のボーナス確率、技術介入レベル別機械割、38.2〜41.9G/50枚、RT約0.2枚/G、416/最大404/最大64枚を複数系統で照合。
- 通常ゲーム数天井は非搭載。
- 設定変更/据え置き/純電断別のRT/CZ/ボーナス成立状態・語りポイント等を直接示す本機固有表は、表記揺れ/型式/メーカー/朝一/ガックン/有利区間まで再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。一般ノーマル機仕様から推定補完していない。

## No.1273 — 戦国パチスロ 義風堂々!!～兼続と慶次～
- manufacturer: **EXCITE**
- formalModel: **`義風堂々！！～兼続と慶次～EM`**
- certificationNumber: **`7S1876`**
- generation/system: **5.9号機 / A+RT / 技術介入**
- settings: **1 / 2 / 5 / 6**
- ボーナス合算: **1/244.5 / 1/240.9 / 1/224.4 / 1/210.1**
- 機械割（初級→神）: **97.1→98.4 / 98.2→99.6 / 101.9→103.6 / 104.3→106.2%**
- baseGamesPer50: **38.2〜41.9G（RT除外）**
- RT純増: **約0.2枚/G**
- RT: **50G**
- 夢語りBIG極 / 戦語りBIG / 酒語りBONUS: **416枚 / 最大404枚（平均約364枚） / 最大64枚**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: RT/CZ/ボーナス成立状態・語りポイント等の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを純電断と分離した本機固有公開契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: 純電源OFF→ON時のRT/CZ/ボーナス成立状態・液晶復帰は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE`（通常ゲーム数天井・規定G当選非搭載）。
- modeAfterReset: 朝一専用モード/設定変更専用振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: 設定変更/据え置き/純電断別の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: 主ゲームフロー上の朝一有利区間比較は `NOT_APPLICABLE_TO_MAIN_GAME_FLOW`。本機固有有利区間ランプ判別契約なし。
- resetBenefits / resetPenalties: 天井短縮・朝一CZ・初当たり優遇・専用不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン条件/率、初期出目・ランプ・液晶による変更判別は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 天井/短縮 `NOT_APPLICABLE`、resetModeDistribution/resetHitBoost `NONE_CONFIRMED_AFTER_RESEARCH`、gakkunRate `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### conflicts / quality
- `CONFLICT_RELEASE_DATE_2019_04_01_VS_2019_04_08`
  - 4/1: HAZUSE（導入開始）、すろぱちくえすと、PiDEA X当時導入予定。
  - 4/8: K-Navi、ちょんぼりすた、スロパチネット。
  - 時系列キューでは最古の導入開始表記4/1をcanonical。両日を保持。
- 機械割は技術介入レベル別レンジであり、単一値へ平均化しない。

## 2019-04-01群
### 登録済み
- No.1273 戦国パチスロ 義風堂々!!～兼続と慶次～（導入日4/1 vs 4/8 CONFLICT保持）

### 未処理確認済み
- パチスロ猛獣王 王者の咆哮（Sammy） — K-Navi/複数当時解析で2019-04-01。
- 新世紀エヴァンゲリオン 暴走400（ビスティ） — K-Navi/ちょんぼりすたで2019-04-01。

### 群監査
- K-Navi 2019年4月カレンダーは4/1に猛獣王・エヴァ暴走400、4/8に義風堂々を掲載。
- HAZUSE/すろぱちくえすと/当時業界記事側では義風堂々4/1資料が存在するため、漏れ防止優先で4/1群OPENのまま保持。
- 4/1群の全メーカー/別型式/別スペック/PB/地域差の最終監査は未完。既知未処理2機処理後にCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。すでにv0.7 QA済みなら重複編集せず次の未QA機へ自動前進。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1273を再取得し並行更新確認。
2. **2019-04-01群OPENを継続。次の未処理は `パチスロ猛獣王 王者の咆哮`（Sammy）をNo.1274候補。**
3. 続いて `新世紀エヴァンゲリオン 暴走400`（ビスティ）を未登録なら処理。
4. 4/1群の全メーカー/別型式/別スペック/PB/地域差を再監査しCLOSED可否判定。
5. 4/8側にはゴーゴージャグラー2 / マイフラワー-30 / ワンダフルジャック等がK-Naviで確認されるため、4/1群CLOSED後に時系列順で既存重複確認して進む。
6. 遡及QAは `2006-12_thunder-v-special.md` から確認。

## 主要出典 — 取得日 2026-09-11
### 義風堂々!!～兼続と慶次～
- HAZUSE: https://hazuse.com/machine/pachislot/7S1876/
- PiDEA X（2019-02-22内覧会）: https://www.pidea.jp/articles/%E6%88%A6%E5%9B%BD%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%80%8C%E7%BE%A9%E9%A2%A8%E5%A0%82%E3%80%85!!%E3%80%8D%E6%9E%9A%E6%95%B0%E5%A4%89%E5%8B%95%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E6%90%AD%E8%BC%89%EF%BC%8FEXCITE
- すろぱちくえすと: https://www.slopachi-quest.com/article/gifuudoudou-settei/
- K-Navi機種ページ: https://p-kn.com/slot/3195/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/80338/
- スロパチネット: https://slopachi-net.com/gihudoudo
- スロット解析.com 2019年3月カレンダー: https://slotkaiseki.com/2019-3/
- K-Navi 2019年4月カレンダー: https://p-kn.com/calendar/201904/
