更新日: 2026-09-11

## 現在地点
- recordCount: **1294**
- latestRecordAdded: **麻雀格闘倶楽部参**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-08-05_mahjong-fight-club-3.md`
- chronologicalFrontier: **2019-08-05**
- frontierLatestMachine: **麻雀格闘倶楽部参 — No.1294**
- schema: **resetBehavior v0.7**
- status: **2019-08-05_GROUP_OPEN_2_OF_5_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1293を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1293「あの花」の次の未処理として No.1294 `麻雀格闘倶楽部参` を性能コア + resetBehavior v0.7で登録。
- 2019-08-05群はまだOPEN。既知未処理候補 `AT天元突破グレンラガン / ハイハイシオサイ / バンバンクロス` を残す。

## No.1294 — 麻雀格闘倶楽部参
- manufacturer: **コナミアミューズメント**
- formalModel: **`S麻雀格闘倶楽部3KR`**
- certificationNumber: **`9S0023`**
- generation/system: **6号機 / 差枚数管理型AT / 周期対局型**
- releaseDate canonical: **2019-08-05**
- 機械割: **97.9 / 98.9 / 100.3 / 103.1 / 105.7 / 110.2%**
- AT初当たり: **1/298.9 / 289.9 / 278.7 / 252.1 / 260.0 / 229.5**
- baseGamesPer50: **約50G**
- 純増: **約5.0枚/G**
- AT初期差枚数: **39〜480枚**
- 天井: **通常時777G消化後の対局で勝利確定**。777G即ATではない。

### resetBehavior v0.7
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- settingChange: 天井G数・内部状態・有利区間RESET、非有利区間へ移行、朝一は「ちょっとタイム」。
- carryOver: 据え置きは天井G数・内部状態・有利区間を引継ぐ扱い。純電断比較から支持されるが、据え置き単独一次表は今回未確認のため `SUPPORTED_BY_POWER_CYCLE_COMPARISON`。
- purePowerCycle: 天井G数・内部状態・有利区間・ステージを引継ぎ。
- ceilingAfterReset: 設定変更専用短縮天井は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。通常の777G後対局勝利確定が基準。
- advantageousSection: 設定変更で非有利区間、純電断で引継ぎ。通常時有利区間ランプ消灯型とする解析があり、ランプ単独での変更判別不可。
- resetBenefit: 主要攻略資料で「特になし」。設定変更専用の当選率・短縮天井・専用高確は確認されず。
- resetDetection: 攻略資料では筐体ゲーム数を据え置き時に引継ぐため、前日0Gヤメ等を除き朝一0Gなら変更濃厚、0G以外なら据え置き濃厚。メーカー一次ではないため確定扱いしない。ガックン固有仕様は `UNVERIFIED_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更専用の朝一AT期待度・モード振り分け・恩恵発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## qualityNotes / conflicts
- 型式 `S麻雀格闘倶楽部3KR` / 検定番号 `9S0023` はHAZUSEで確認。2019-06-06検定通過情報でも同型式を確認。
- 導入日2019-08-05、設定別AT初当たり・機械割、約50G/50枚、純増約5枚/Gは複数解析で一致。
- 設定5のAT初当たり1/260.0が設定4の1/252.1より重い非単調値も複数資料で一致するため、そのままcanonical保持。
- 天井の「777G」と「777G+α」は平均化せず、`DEFINITION_DIFFERENCE_777G_TRIGGER_VS_777G_PLUS_BATTLE`。777G消化後の対局勝利確定という実挙動で統一。
- 据え置き単独資料は純電断資料より弱いため信頼注記を残す。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-02_ps-adlib-ouji.md`（PSアドリブ王子）から再開**。既にresetBehavior収録済みなら重複編集せず次レコードへ進む。
- 既存 `COMPLETE_CORE` は不用意に崩さず、reset QAを別管理する。

## 2019-08-05群 — OPEN
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- 未処理候補: **AT天元突破グレンラガン / ハイハイシオサイ / バンバンクロス**

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1294を再取得。
2. **No.1295候補 `AT天元突破グレンラガン`** から性能コア + resetBehavior v0.7収集を継続。
3. 続いて `ハイハイシオサイ / バンバンクロス` を未処理順に個別照合。
4. 2019-08-05群を全メーカー / 別型式 / 別スペック / PB / 地域差まで監査しCLOSED可否を判定。
5. 遡及QAは `2007-02_ps-adlib-ouji.md` から再開。既収集なら重複せずGit追加順の次レコードへ進む。
6. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### 麻雀格闘倶楽部参
- HAZUSE: https://hazuse.com/machine/pachislot/9S0023/
- K-Navi: https://p-kn.com/slot/3265/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/87864/
- DMMぱちタウン: https://p-town.dmm.com/machines/3488
- PachiNow 朝一設定変更: https://www.pachinow.jp/s7/marjan3-5.php
- おスロおパチおいでやす 天井/朝一: https://oslo-opachi.com/2019/06/27/majanfightclub3_tennjou/
- おスロおパチおいでやす 設定判別: https://oslo-opachi.com/2019/08/05/majanfightclub3_settei/
- パチスロメソッド: https://slotmethod.jp/archives/12694/
- ぱちんこキュレーション: https://pachinko-curation.com/1201/
