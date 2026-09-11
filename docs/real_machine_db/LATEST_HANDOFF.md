更新日: 2026-09-11

## 現在地点
- recordCount: **1295**
- latestRecordAdded: **パチスロ 天元突破グレンラガン**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-08-05_at-gurren-lagann.md`
- chronologicalFrontier: **2019-08-05**
- frontierLatestMachine: **パチスロ 天元突破グレンラガン — No.1295**
- schema: **resetBehavior v0.7**
- status: **2019-08-05_GROUP_OPEN_3_OF_5_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1294を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1294「麻雀格闘倶楽部参」の次の未処理として No.1295 `パチスロ 天元突破グレンラガン` を性能コア + resetBehavior v0.7で登録。
- 2019-08-05群はまだOPEN。既知未処理候補 `ハイハイシオサイ / バンバンクロス` を残す。

## No.1295 — パチスロ 天元突破グレンラガン
- manufacturer: **七匠 / NANASHOW**
- formalModel: **`S AT天元突破グレンラガンY`**
- certificationNumber: **`9S0371`**
- generation/system: **6号機 / AT / 疑似ボーナス連チャン型**
- releaseDate canonical: **2019-08-05**
- 機械割: **97.5 / 99.1 / 100.5 / 104.1 / 107.0 / 111.1%**
- ボーナス初当たり: **1/522.4 / 501.1 / 442.3 / 367.3 / 315.3 / 271.0**
- ボーナス合算: **1/133.6 / 126.9 / 118.6 / 104.2 / 94.2 / 82.8**
- baseGamesPer50: **約53.2G**
- 純増: **約5.0枚/G**
- 基本獲得: **グレンラガンボーナス約162枚 / ドリルボーナス約54枚**
- 天井: **有利区間移行後1120Gで疑似ボーナス**。天井到達時はBIG側約70%とする解析あり。

### resetBehavior v0.7
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- settingChange: 天井G数・有利区間RESET、非有利区間かつ内部ボーナス非成立状態から開始。
- carryOver: 据え置き単独一次表は未確認。純電断比較から天井G数・有利区間CARRY_OVERを `SUPPORTED_BY_POWER_CYCLE_COMPARISON` として保持。
- purePowerCycle: 天井G数・有利区間を引継ぎ。ステージは主要資料で調査中のためUNVERIFIED。
- ceilingAfterReset: 設定変更専用短縮天井は確認されず、通常上限1120G。
- advantageousSection: 設定変更で非有利区間へ、純電断で引継ぎ。
- resetBenefit: **設定変更後は約50%でボーナス後同様の約80%ループ状態へ移行**。朝一の主要恩恵として保存。
- publicMorningNumbers: 朝一は有利区間移行約1/19と内部ボーナス成立約1/19の先着競合。内部ボーナス成立が先なら80%ループ状態へ入るため実質約50%。
- resetDetection: 七匠筐体のガックン有効とする攻略資料あり。ただしメーカー一次・発生率は未確認なので `ANALYSIS_SINGLE_CLUE`。

## qualityNotes / conflicts
- 型式 `S AT天元突破グレンラガンY` / 検定番号 `9S0371` はHAZUSEで確認。
- 導入日はHAZUSE・複数当時解析で **2019-08-05** が一致。一部ページの `2018-08-05` は時系列と複数一致に反する誤記として扱い、canonicalは2019-08-05。
- 天井1120G、約53.2G/50枚、純増約5枚/G、設定別性能は複数資料で一致。
- 朝一約50%恩恵は単純な50%抽選表ではなく、約1/19同士の先着競合として説明される点を保持。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- 今回、`PSアドリブ王子` → `パチスロ暴れん坊将軍` → `仮面ライダーDX〜走れ！スーパーバイク編` → `TIMという名のパチスロ機` → `科学忍者隊ガッチャマン` → `パチスロ鉄拳伝タフ` をGit追加順で確認。
- 上記はいずれも既にv0.7相当のresetBehavior再探索記録を持つため重複編集せず通過。既存COMPLETE_CORE/PARTIALの性能判定は変更していない。
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-02_new-hanahana-30.md` 相当のニューハナハナ-30レコードから再開**。正確なファイル名をmainの追加commitで確認してから開き、既収集なら次レコードへ進む。

## 2019-08-05群 — OPEN
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- 未処理候補: **ハイハイシオサイ / バンバンクロス**

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1295を再取得。
2. **No.1296候補 `ハイハイシオサイ`** から性能コア + resetBehavior v0.7収集を継続。
3. 続いて `バンバンクロス` を個別照合。
4. 2019-08-05群を全メーカー / 別型式 / 別スペック / PB / 地域差まで監査しCLOSED可否を判定。
5. 遡及QAは `ニューハナハナ-30` の正確なmainパスをGit追加履歴で確定して再開。既収集なら重複せず次へ進む。
6. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### パチスロ 天元突破グレンラガン
- HAZUSE: https://hazuse.com/machine/pachislot/9S0371/
- ちょんぼりすた: https://chonborista.com/slot/nanashow/85477/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/08/22/gurenragan_settei/
- スロパチクエスト 設定: https://www.slopachi-quest.com/article/gurrenlagann-settei/
- スロパチクエスト 天井: https://www.slopachi-quest.com/article/gurrenlagann-tennjou/
- 真パチスロ備忘録 リセット: https://sin-surobi.com/gurenragan6/28778/
