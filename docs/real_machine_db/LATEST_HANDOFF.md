更新日: 2026-09-11

## 現在地点
- recordCount: **1288**
- latestRecordAdded: **超AT 美ら沖**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-06-03_cho-at-churaoki.md`
- chronologicalFrontier: **2019-06-03**
- frontierLatestMachine: **超AT 美ら沖 — No.1288**
- schema: **resetBehavior v0.7**
- status: **2019-06-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1286を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoffの2019-06-03群を処理し、`実況BINGO倶楽部` をNo.1287、`超AT 美ら沖` をNo.1288として性能コア + resetBehavior v0.7で登録。
- 1gekiの2019年6月導入カレンダーは6/3の全5機中パチスロ2機を `実況BINGO倶楽部 / 超AT 美ら沖` と掲載。モゲスロ年間カレンダーも同2機で一致するため、6/3群をCLOSED。
- 6/4〜6/16について導入一覧・機種DB・メーカー系検索を横断し、独立登録すべきパチスロを固定できず。次の明確な群は2019-06-17。
- 6/17群は `スーパードラゴン` と、以前5/13予定から延期確認済みの `咲桜弁慶` を候補として戻す。

## No.1287 — 実況BINGO倶楽部
- manufacturer: **コナミアミューズメント**
- formalModel: **`S実況BINGO倶楽部KU`**
- certificationNumber: **`8S0682`**
- generation/system: **6号機 / AT / CZ経由疑似ボーナスAT**
- releaseDate: **2019-06-03**
- 機械割: **97.5 / 98.9 / 100.5 / 102.1 / 104.6 / 108.2%**
- CZ: **1/82.5 / 83.1 / 83.4 / 83.9 / 84.1 / 84.5**
- ボーナス合算: **1/313.5 / 304.3 / 291.0 / 280.1 / 261.5 / 259.5**
- baseGamesPer50: **約50G**
- AT純増: **約3.0枚/G**
- CZ間天井: **224G+α**
- ボーナス間天井: **573G+α**

### resetBehavior v0.7
- settingChange: **CZ/ボーナス天井RESET / 状態・モードRESET / 非有利区間へ**。
- powerCycle: **天井G・状態/モード・有利区間CARRY_OVER**。
- carryOver: 据え置き独立条件を純電断から完全分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- resetStage: 当時解析の「スタジオモード」とHAZUSE「通常ステージへ」が競合。`CONFLICT_RESET_STAGE_STUDIO_MODE_VS_NORMAL_STAGE`。
- numericResetData: 設定変更専用短縮天井/モード振り分け/朝一当選率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- HAZUSE設定5 CZ `1/94.1` は他複数資料の `1/84.1` と競合。canonical=1/84.1、`CONFLICT_CZ_SETTING5_84_1_MULTI_SOURCE_VS_94_1_HAZUSE`。

## No.1288 — 超AT 美ら沖
- manufacturer: **七匠**
- formalModel: **`S ATちゅら沖S`**
- certificationNumber: **`8S0820`**
- generation/system: **6号機 / AT / 疑似ボーナス連荘タイプ**
- releaseDate: **2019-06-03**
- 機械割: **97.8 / 98.6 / 100.3 / 103.5 / 106.8 / 112.4%**
- ボーナス初当たり: **1/459 / 446 / 424 / 389 / 337 / 292**
- baseGamesPer50: **約50G**
- AT純増: **約4.0枚/G**
- BIG: **50G・約200枚** / REG: **15G・約60枚**
- 最大通常天井: **999G**

### resetBehavior v0.7
- settingChange: **天井G RESET / モード再抽選 / 非有利区間へ / 有利区間ランプ消灯**。
- powerCycle: **天井G・モード・有利区間・ランプ状態CARRY_OVER**。
- carryOver: 据え置き独立条件は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- modeAfterReset: 有利区間移行時ストック放出モード率 **50.0 / 50.0 / 50.0 / 52.3 / 55.1 / 66.8%（設定1〜6）**。これは設定変更専用値ではなく有利区間移行時共通値だが、設定変更後は再移行するため朝一比較値として採用。
- ceilingAfterReset: ストック放出モード基本**111G**、条件付き**222G**。通常モードのリセット後主要天井**888G**。最大通常天井999Gとは定義分離。
- resetDetection: 設定変更直後の有利区間ランプ消灯は強い推測材料だが、自然な区間終了等でも消灯し得るため `STRONG_CLUE_NOT_DETERMINISTIC`。
- resetBenefits: 朝一有利区間移行時、設定1〜3でも50%以上で111G系ストック放出モードへ入るため、公開朝一数値として保存。

## qualityNotes / conflicts
- 実況BINGO倶楽部の設定変更後画面は `スタジオモード` vs `通常ステージ` の資料差を平均化せずCONFLICT保持。
- 実況BINGO倶楽部の設定5 CZは `1/84.1` 多数一致 vs HAZUSE `1/94.1` のCONFLICT。
- 美ら沖の50%表記は概括値。HAZUSEの設定別有利区間移行時値 50.0〜66.8%を精密値として保持し、「設定変更専用抽選」とはしない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: main上の導入時系列でPIKASLO直後の未QAレコードを特定して継続。本線前進を優先。

## 2019-06-03群 — CLOSED
### 登録済み
- No.1287 実況BINGO倶楽部
- No.1288 超AT 美ら沖

### 群監査メモ
- 1geki 2019年6月新台カレンダーは6/3に「全5機・パチンコ3機・パチスロ2機」とし、パチスロ2機が実況BINGO倶楽部 / 超AT 美ら沖。
- モゲスロ2019年間新台カレンダーも6/3を同2機で掲載。
- 6/4〜6/16を別導入一覧・機種DB・メーカー/型式検索で監査し、追加パチスロを固定できず。
- 次の明確な導入群は2019-06-17。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1288を再取得。
2. **2019-06-17群 `スーパードラゴン` をNo.1289候補**として性能コア + resetBehavior v0.7を本調査。
3. 続いて、5/13予定から実導入6/17へ延期確認済みの **`咲桜弁慶`** を同群で処理。
4. 6/17群を全メーカー / 別型式 / 別スペック / PB / 地域差まで最終監査してCLOSED可否判定。
5. 欠損は公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えてからUNVERIFIED。

## 主要出典 — 取得日 2026-09-11
### 実況BINGO倶楽部
- K-Navi: https://p-kn.com/slot/3222/
- ぱちんこキュレーション: https://pachinko-curation.com/441/
- みんスロ: https://minslo.com/%E5%AE%9F%E6%B3%81bingo%E5%80%B6%E6%A5%BD%E9%83%A8/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/06/06/binngo_tennjyou/
- HAZUSE機種DB: https://hazuse.com/machine/pachislot/8S0682/
- HAZUSE設定変更/電断: https://hazuse.com/machine/pachislot/8S0682/genre/207/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/81406/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/07/l.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8922

### 超AT 美ら沖
- K-Navi: https://p-kn.com/slot/3237/
- ぱちんこキュレーション: https://pachinko-curation.com/567/
- 一撃: https://1geki.jp/slot/s_churaoki/
- HAZUSE機種DB/モード: https://hazuse.com/machine/pachislot/8S0820/
- HAZUSE設定変更/電断: https://hazuse.com/machine/pachislot/8S0820/genre/207/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/06/07/churaoki_tennjyou/
- モゲスロ: https://moge-site.com/archives/21996

### 群監査 / 次群
- 一撃 2019年6月新台カレンダー: https://1geki.jp/newmachinecalender/201906/
- モゲスロ 2019新台カレンダー: https://moge-site.com/new-slot2019
