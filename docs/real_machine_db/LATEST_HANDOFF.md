更新日: 2026-09-11

## 現在地点
- recordCount: **1296**
- latestRecordAdded: **ハイハイシオサイ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-08-05_haihai-siosai.md`
- chronologicalFrontier: **2019-08-05**
- frontierLatestMachine: **ハイハイシオサイ — No.1296**
- schema: **resetBehavior v0.7**
- status: **2019-08-05_GROUP_OPEN_4_OF_5_CONFIRMED_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1295を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- No.1295「パチスロ 天元突破グレンラガン」の次の未処理として No.1296 `ハイハイシオサイ` を性能コア + resetBehavior v0.7で登録。
- 2019-08-05群はまだOPEN。既知未処理候補は **`バンバンクロス`** 1機。

## No.1296 — ハイハイシオサイ
- manufacturer: **パイオニア**
- formalModel: **`SハイハイシオサイHY`**
- certificationNumber: **`9S0041`**
- generation/system: **6号機 / ノーマルAタイプ / 25φ完全告知**
- releaseDate canonical: **2019-08-05**
- 機械割: **98 / 100 / 103 / 106 / 108%**（設定1/2/3/5/6）
- BIG: **1/195 / 190 / 182 / 235 / 169**
- REG: **1/204 / 197 / 187 / 117 / 172**
- 合算: **1/99 / 97 / 92 / 78 / 85**
- baseGamesPer50: **約32.5〜34.0G/50枚**。代表表記約32.5G/50枚。
- 基本獲得: **BIG最大194枚 / REG最大102枚**。
- 天井: **非搭載**。

### resetBehavior v0.7
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_NONAPPLICABLE_FIELDS**
- settingChange: 天井・モード・AT/ART状態を持たないノーマルタイプで、設定変更専用の短縮天井・当選優遇・専用高確は確認されない。本機固有のリール初期化細目は公開契約を固定できず推測しない。
- carryOver: 天井G数 / モード / 有利区間はNOT_APPLICABLE。据え置き固有のリール初期位置等は `PUBLIC_DETAIL_NOT_FOUND_AFTER_RESEARCH`。
- purePowerCycle: 天井 / モード / 有利区間はNOT_APPLICABLE。純電断時のリール初期位置・成立ボーナス状態を直接規定する本機固有資料は確認できず推測しない。
- ceilingAfterReset: **NOT_APPLICABLE**（天井非搭載）。
- advantageousSection: **NOT_APPLICABLE**（通常ボーナス主体のノーマル機）。
- resetBenefit: ちょんぼりすた、モゲスロ、後年リセット一覧で **朝一リセット恩恵なし / 特になし** が一致。
- resetDetection: 当時攻略では液晶なしノーマルのため基本的に判別不可。パイオニア筐体のリールガックンが「わずかに有効な可能性」とする資料はあるが、本機固有の発生条件・発生率・確定性は固定できないため `ANALYSIS_SINGLE_CLUE_NOT_CONFIRMED`。
- publicMorningNumbers: 設定変更専用の朝一当選率、恩恵発生率、短縮天井、モード振り分けはなし / 公開数値なし。

## qualityNotes / conflicts
- 型式 `SハイハイシオサイHY` / 検定番号 `9S0041` はHAZUSEで確認。
- パイオニア公式は2019年8月発売、HAZUSE・必勝本・K-Navi等は2019-08-05導入で一致。
- ベースはHAZUSEの約32.5〜34.0G/50枚と複数解析の代表値約32.5G/50枚を定義差として併記し、平均しない。
- 一部二次資料の設定2合算 `1/79` はBIG 1/190・REG 1/197とも整合せず、複数一致の `1/97` をcanonicalとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_skylove.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- 直前リレーで `PSアドリブ王子` → `パチスロ暴れん坊将軍` → `仮面ライダーDX〜走れ！スーパーバイク編` → `TIMという名のパチスロ機` → `科学忍者隊ガッチャマン` → `パチスロ鉄拳伝タフ` を確認済み。既にv0.7相当の再探索記録を持つため重複編集せず通過。
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-02_new-hanahana-30.md` 相当のニューハナハナ-30レコードから再開**。正確なファイル名をmainの追加commitで確認してから開く。

## 2019-08-05群 — OPEN
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- No.1296 ハイハイシオサイ
- 未処理候補: **バンバンクロス**

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1296を再取得。
2. **No.1297候補 `バンバンクロス`** を性能コア + resetBehavior v0.7で収集。
3. 登録後、2019-08-05群を全メーカー / 別型式 / 別スペック / PB / 地域差まで横断監査しCLOSED可否を判定。
4. CLOSEDなら次の時系列境界を監査して次群へ進む。
5. 遡及QAは `ニューハナハナ-30` の正確なmainパスをGit追加履歴で確定して再開。既収集なら重複せず次へ進む。
6. PARTIAL / UNVERIFIEDは公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-11
### ハイハイシオサイ
- パイオニア公式: https://www.slot-pioneer.co.jp/products/2019.html
- HAZUSE: https://hazuse.com/machine/pachislot/9S0041/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3378/1/74146
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/87059/
- モゲスロ: https://moge-site.com/archives/23006
- 日刊スポーツ / 娯楽産業: https://www.nikkansports.com/amusement/pachislot/news/201906060000423.html
- スロリスクタイム: https://pachisuro100.com/reset/
