更新日: 2026-09-11

## 現在地点
- recordCount: **1272**
- latestRecordAdded: **ドンちゃん2**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-03-25_donchan2.md`
- chronologicalFrontier: **2019-03-25**
- frontierLatestMachine: **ドンちゃん2 — No.1272**
- schema: **resetBehavior v0.7**
- status: **2019-03-25_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1271を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 開始時mainはrecordCount 1271、2019-03-18群CLOSED。
- 2019-03-19〜03-24境界を監査し、独立登録すべき全国導入機を固定できず3/25へ前進。
- handoff指定の `ドンちゃん2` をNo.1272として性能コア + resetBehavior v0.7で登録。
- HAZUSEで型式 `S／ドンちゃん2／DC` / 検定番号 `8S1238` を固定。
- 導入日は3/25先行導入資料と4/1本格導入資料が併存するため、最初の確認日2019-03-25をcanonical、4/1をCONFLICTとして保持。
- 設定別BIG/REG/合算/機械割、完全攻略時、44.4〜48.7G、RT約0.3枚/G、BIG222枚/REG104枚を複数解析で照合。
- 設定変更/純電断とも選択キャラは緑ドンへ戻る。一方、ボーナス成立状態は設定変更でRESET、純電断でCARRY_OVERとする当時解析を保存。
- 2019-03-25群はモゲスロでドンちゃん2単独。別型式/別スペック/PB/地域差を監査して追加機を固定できずCLOSED。

## No.1272 — ドンちゃん2
- manufacturer: **アクロス**
- formalModel: **`S／ドンちゃん2／DC`**
- certificationNumber: **`8S1238`**
- generation/system: **6号機 / A+RT / 技術介入**
- settings: **1 / 2 / 5 / 6**
- BIG: **1/297.9 / 1/287.4 / 1/275.4 / 1/264.3**
- REG: **1/392.4 / 1/354.2 / 1/322.8 / 1/281.3**
- 合算: **1/169.3 / 1/158.7 / 1/148.6 / 1/136.2**
- 市場掲載機械割: **97.7 / 100.0 / 103.4 / 106.4%**
- 完全攻略時: **99.2 / 101.5 / 105.0 / 108.1%**
- baseGamesPer50: **44.4〜48.7G**
- RT純増: **約0.3枚/G**
- BIG / REG: **最大222枚 / 最大104枚**
- BIG後RT: **22G**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: 選択キャラ→緑ドン。ボーナス成立/告知状態はRESET方向。ユニメモ引継ぎ。
- powerCycle: 選択キャラ→緑ドン。ボーナス成立状態CARRY_OVER。ユニメモ引継ぎ。
- carryOver: 据え置き資料では告知ランプ・ユニメモ引継ぎ。全内部状態契約は `PARTIAL_CROSSCHECKED_WITH_POWER_CYCLE`。
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE`（天井・規定Gゾーン非搭載）。
- modeAfterReset: 朝一専用モード/設定変更専用振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: ボーナス成立状態は設定変更RESET / 純電断CARRY_OVER。RT状態の直接契約は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- advantageousSectionReset: 主ゲームフロー上の朝一有利区間管理は `NOT_APPLICABLE_TO_MAIN_GAME_FLOW`。有利区間ランプ判別契約なし。
- resetBenefits: 天井短縮・朝一CZ/初当たり優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 選択キャラは設定変更/純電断とも緑ドンで判別不可。本機固有ガックン率未固定。
- numericResetData: 天井/短縮 `NOT_APPLICABLE`、resetModeDistribution / resetHitBoost `NONE_CONFIRMED_AFTER_RESEARCH`、gakkunRate `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### conflicts / quality
- `CONFLICT_RELEASE_DATE_2019_03_25_EARLY_VS_2019_04_01_NATIONAL`
  - K-Navi/モゲスロ/ちょんぼりすた等: 3/25。
  - HAZUSE: 4/1。別当時解析: 4/1〜、一部地域3/25〜。
  - earliest confirmed hall introductionの3/25をcanonicalとして保持。
- `BASE_MINOR_VARIANCE_44_4_VS_44_8_LOWER_BOUND`
  - 多数資料44.4〜48.7G、すろぱちくえすと44.8〜48.7G。

## 2019-03-25群
### 登録済み
- No.1272 ドンちゃん2

### 群監査
- モゲスロ2019新台カレンダーは3/25パチスロをドンちゃん2単独掲載し、次の主要群を4/1 `義風堂々!!～兼続と慶次～` / `猛獣王 王者の咆哮` と掲載。
- K-Naviはドンちゃん2を2019-03-25導入とする一方、HAZUSEは2019-04-01。本格導入/地域差として競合をレコード内保持。
- 3/19〜3/24境界および3/25同日について別メーカー/別型式/別スペック/PB/地域差を検索したが、独立登録すべき追加機を固定できず **2019-03-25_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。すでにv0.7 QA済みなら重複編集せず次の未QA機へ自動前進。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1272を再取得し並行更新確認。
2. **2019-03-26〜03-31境界を短く全メーカー監査**。
3. 2019-04-01群の未登録候補を処理。第一候補は **`義風堂々!!～兼続と慶次～`（EXCITE）**、続いて **`パチスロ猛獣王 王者の咆哮`（Sammy）**。
4. K-Navi月間カレンダーには4/1 `新世紀エヴァンゲリオン 暴走400`（ビスティ）も掲載されるため、独立パチスロ機として未登録なら漏らさず個別監査・登録する。
5. 4/1群の全メーカー/別型式/別スペック/PB/地域差を最終監査してCLOSED可否判定。
6. 遡及QAは `2006-12_thunder-v-special.md` から確認。

## 主要出典 — 取得日 2026-09-11
### ドンちゃん2
- HAZUSE: https://hazuse.com/machine/pachislot/8S1238/
- K-Navi: https://p-kn.com/slot/3197/
- 一撃 設定変更: https://1geki.jp/slot/s_don2/3/
- モゲスロ2019新台カレンダー: https://moge-site.com/new-slot2019
- モゲスロ機種解析: https://moge-site.com/archives/21251
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/77096/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/03/24/post-5348/
- 元プロMG: https://www.pachislotblog.tokyo/donchan2-kaiseki/
- すろぱちくえすと: https://www.slopachi-quest.com/article/donnchan2-settei/
- スロットセブン: https://slot-seven.com/donchan2-settei/
- K-Navi 2019年4月カレンダー: https://p-kn.com/calendar/201904/
