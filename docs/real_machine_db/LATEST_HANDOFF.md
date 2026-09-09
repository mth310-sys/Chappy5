更新日: 2026-09-09

## 現在地点
- recordCount: **1092**
- latestRecordAdded: **パチスロ ベン・トー～半額弁当争奪戦!!～**（バルテック）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-19_ben-to-hangaku-bento-soudatsusen.md`
- chronologicalFrontier: **2017-06-19**
- frontierLatestMachine: **パチスロ ベン・トー～半額弁当争奪戦!!～ — No.1092**
- schema: **resetBehavior v0.7**
- status: **2017-06-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1091「パチスロ リング 終焉ノ刻」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1091件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN**。
- handoff指定の次未処理 **「パチスロ ベン・トー～半額弁当争奪戦!!～」** をNo.1092として登録。
- バルテック公式、PiDEA X、HAZUSE、P-WORLD、K-Navi、すろぱちくえすと、ちょんぼりすたを横断し、型式/検定番号、導入日、設定別BIG/REG/ART、機械割、ベース、ART性能、天井、設定変更時天井再抽選、設定変更時内部状態振り分けを固定。
- 据え置き独立契約、純電源OFF→ONの天井/状態契約、確定ガックン/ランプ/初期出目は、機種名・型式・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン」を組み替えて再探索したが本機固有の直接資料を十分に固定できず、推測せずUNVERIFIEDとして保存。

## No.1092 — パチスロ ベン・トー～半額弁当争奪戦!!～
- manufacturer: **バルテック**
- releaseDate: **2017-06-19**
- formalModelName: **パチスロベントー／AB**
- certificationNumber: **7S0170**
- generation/system: **5号機 / 5.5号機 / A+ART / リアルボーナス / ゲーム数上乗せART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.57 / 98.07 / 99.88 / 101.44 / 104.58 / 110.32%**。
- BIG: **1/364.09 / 1/360.09 / 1/356.17 / 1/352.34 / 1/348.60 / 1/344.93**。
- REG: **1/682.67 / 1/655.36 / 1/630.15 / 1/606.81 / 1/585.14 / 1/528.52**。
- ART初当たり: **1/433.45 / 1/418.22 / 1/398.80 / 1/383.42 / 1/348.17 / 1/298.67**。
- ベース: **約37G/50枚**。
- ART純増: **約1.3枚/G**。
- BIG: **約160枚** / REG: **最大40枚**。
- ART: **初期30G以上 / 1セット30G+α**。
- 天井: ボーナス・ART間最大999G。振り分け **555G 1.56 / 777G 10.94 / 999G 87.50%**。

### resetBehavior v0.7
- 設定変更: **天井進捗RESET / 天井ゲーム数RESELECT / 内部状態RESELECT**。
- 設定変更後天井振り分け: **555G 1.56% / 777G 10.94% / 999G 87.50%**。通常時と同一振り分けのため、リセット専用短縮恩恵とは扱わない。
- 設定変更時内部状態:
  - 設定1・3・5: **低確75.00 / 高確23.44 / 超高確1.56%**。
  - 設定2・4・6: **低確50.00 / 高確49.61 / 超高確0.39%**。
- 高確以上スタート: 奇数 **25.00%** / 偶数 **50.00%**。
- 据え置き独立契約: **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 純電源OFF→ONの天井/内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有の確定ガックン/ランプ/初期出目: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- MATERIAL_NUMERIC_CONFLICT: **NONE_CONFIRMED** for canonical performance core/reset values.
- すろぱちくえすと同一記事の設定6 ART初当たりに `1/297.67` が1箇所あるが、同記事内別表・HAZUSE・P-WORLDは `1/298.67` で一致。単独誤植としてcanonical 1/298.67を採用し、平均しない。
- PiDEA Xの2017-06-18は納品予定日、HAZUSE/K-Navi等の2017-06-19はホール導入開始日で定義差。
- missing: direct independent stay-setting behavior; pure power OFF→ON counter/state behavior; deterministic reset detection contract.

## 2017-06-19群 — 継続中
- status: **OPEN**。
- 登録済み:
  1. ぱちスロ PSYCHO-PASS サイコパス — No.1089
  2. SLOTギルティクラウン — No.1090
  3. パチスロ リング 終焉ノ刻 — No.1091
  4. パチスロ ベン・トー～半額弁当争奪戦!!～ — No.1092
- 次の確認済み候補:
  1. **ケロロ軍曹** — No.1093候補
  2. ドリームジャンボ あの興奮をもう一度
  3. スーパーミラクルジャグラー
  4. ハイパーリノ
- 同日群は全メーカー横断監査を維持し、全件処理後にCLOSE判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1092を再取得。
2. **1092件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN** を正本として継続。
3. 次の未処理 **「ケロロ軍曹」** をNo.1093候補として性能コア + resetBehavior v0.7で処理。
4. 続いて6/19同日群のドリームジャンボ / スーパーミラクルジャグラー / ハイパーリノを時系列キューとして処理し、全メーカー横断監査後にCLOSE判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1092 パチスロ ベン・トー～半額弁当争奪戦!!～
- バルテック公式: https://www.baltec.co.jp/product/nb1.html
- PiDEA X: https://www.pidea.jp/articles/%E6%96%B0%E7%94%9F%E7%AC%AC1%E5%BC%BE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%20%E3%83%99%E3%83%B3%E3%83%BB%E3%83%88%E3%83%BC%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%90%E3%83%AB%E3%83%86%E3%83%83%E3%82%AF
- HAZUSE: https://hazuse.com/machine/pachislot/7S0170/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/7S0170/genre/207/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/7S0170/genre/208/
- HAZUSE ART/内部状態: https://hazuse.com/machine/pachislot/7S0170/genre/209/
- すろぱちくえすと: https://www.slopachi-quest.com/article/ben-toh/
- ちょんぼりすた: https://chonborista.com/slot/baltec/38396/
- P-WORLD: https://www.p-world.co.jp/machine/database/8382
- K-Navi: https://p-kn.com/slot/2798/

### 6月19日群
- K-Navi 2017年6月導入カレンダー: https://p-kn.com/calendar/201706/
- 2017年導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
