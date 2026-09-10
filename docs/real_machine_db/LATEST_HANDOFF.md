更新日: 2026-09-11

## 現在地点
- recordCount: **1289**
- latestRecordAdded: **スーパードラゴン**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-06-17_super-dragon.md`
- chronologicalFrontier: **2019-06-17**
- frontierLatestMachine: **スーパードラゴン — No.1289**
- schema: **resetBehavior v0.7**
- status: **2019-06-17_GROUP_OPEN_1_OF_AT_LEAST_2_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1288を再取得して開始。
- INDEXは旧スナップショット（19件）のため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前正本はNo.1288 `超AT 美ら沖`、2019-06-03群CLOSED。
- 6/4〜6/16監査済みhandoffを引き継ぎ、2019-06-17群 `スーパードラゴン` をNo.1289として性能コア + resetBehavior v0.7で登録。
- `咲桜弁慶` は当初2019-05-13予定から2019-06-17へ延期されたことを、ちょんぼりすたとHAZUSEで再確認。次の未処理として同日群に保持。

## No.1289 — スーパードラゴン
- manufacturer: **ネット（NET）**
- formalModel: **`SスーパードラゴンNO`**
- certificationNumber: **`9S0197`**
- generation/system: **6号機 / AT / 疑似ボーナス連荘タイプ**
- releaseDate: **2019-06-17**
- 機械割: **97.7 / 98.9 / 100.4 / 102.3 / 103.9 / 107.5%**
- 赤7初当たり: **1/391.6 / 308.7 / 365.6 / 276.5 / 320.5 / 233.9**
- ボーナス合算: **1/125.2 / 119.1 / 114.8 / 107.4 / 100.1 / 92.2**
- baseGamesPer50: **約43.2G**
- AT純増: **約2.8枚/G**
- 赤7: **100〜998枚** / ドラゴンBONUS: **100〜1999枚**
- 龍宮ゾーン: **7G、概ね約70%引き戻し**
- モード別最大天井: **通常997G+α / ミドル997G+α / ドラゴン998G+α / 連127G+α**

### resetBehavior v0.7
- settingChange: **内部天井G/pt RESET / モード再抽選 / 非有利区間へ / 有利区間ランプ消灯**。
- powerCycle: **内部天井G/pt・モード・有利区間・ランプ状態CARRY_OVER**。
- carryOver: 据え置き独立条件を純電断と完全分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。朝一ランプ点灯=据え置き濃厚という複数解析は保持。
- resetBenefit: **設定変更後約37%で内部龍宮ゾーンへ移行**。龍宮ゾーン自体のボーナス期待度は概ね約70%（設定別解析64.0〜71.2%）。
- modeAfterReset: 設定変更時モード再抽選。設定1の完全取得値は **通常70.3 / ミドル14.8 / ドラゴン10.2 / 連4.7%**。設定2〜6は公開表があるが検索テキスト化時の行結合セル欠落があるため、欠落セルを100%差分から推定せずレコードに明記。
- resetDetection: **朝一有利区間ランプ点灯=据え置き濃厚 / 消灯=設定変更濃厚**。ただしボーナス終了時にも消灯するため `STRONG_CLUE_NOT_DETERMINISTIC`。
- morningDisplay: 設定変更・電源OFF→ONの双方で台枠が128G間濃い青系になる資料があり、単独判別には使わない。
- gameCounter/ceiling: 設定変更でRESET、純電断でCARRY_OVER。内部天井最大998G+αとデータカウンター上999G/1000G超表記は定義分離。
- numericResetData: **約37%内部龍宮ゾーン / 設定1モード70.3・14.8・10.2・4.7% / 連最大127G+α**。参考実測 **新台初回10G以内42/263=15.9%** は解析抽選率と平均せず観測値として分離。

## qualityNotes / conflicts
- 天井表記 `999G` / `最大998G` / `998G+α` / `表示上1000G超あり` は内部天井・α・データ表示基準の差を分離。平均しない。
- リセット解析値 `約37%で内部龍宮ゾーン` と、新台初回参考実測 `10G以内42/263=15.9%` は定義が異なるため `RESET_RYUGU_RATE_VS_OBSERVED_FIRST_HIT_SAMPLE` として分離。
- 設定変更時モード表は一撃/すろぱちくえすとに存在するが、検索抽出で設定2〜6のrowspanセルが欠落。欠損値を算術推定しない。
- formalModel / certificationNumber はHAZUSEと後年機種DBで一致。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: main上の導入時系列でPIKASLO直後の未QAレコードを特定して継続。本線前進を優先。

## 2019-06-03群 — CLOSED
- No.1287 実況BINGO倶楽部
- No.1288 超AT 美ら沖
- 6/4〜6/16は前handoffで監査済み、追加パチスロ固定なし。

## 2019-06-17群 — OPEN
### 登録済み
- No.1289 スーパードラゴン

### 未処理確認済み
- 咲桜弁慶 — Border。ちょんぼりすたは導入日を2019-05-13から2019-06-17へ訂正、HAZUSEも2019-06-17導入開始。formalModel `サクラベンケイ2` / certificationNumber `8S0064` を確認済み。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1289を再取得。
2. **2019-06-17群 `咲桜弁慶` をNo.1290候補**として性能コア + resetBehavior v0.7を本調査。
3. 6/17群を全メーカー / 別型式 / 別スペック / PB / 地域差まで最終監査してCLOSED可否判定。
4. 欠損は公式 / 業界 / 当時解析 / 古DB / アーカイブ / 回顧資料まで資料系統を変えてからUNVERIFIED。

## 主要出典 — 取得日 2026-09-11
### スーパードラゴン
- NET公式 製品情報: https://www.net-fun.co.jp/product/page/3
- NETプレスリリース（Dream News転載）: https://www.dreamnews.jp/press/0000192861/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0197/
- 一撃: https://1geki.jp/slot/s_s_dragon/
- 一撃 モード: https://1geki.jp/slot/s_s_dragon/43/
- すろぱちくえすと 設定: https://www.slopachi-quest.com/article/super-dragon-settei/
- すろぱちくえすと 天井/朝一: https://www.slopachi-quest.com/article/superdragon-tennjou/
- ぱちんこキュレーション: https://www.pachinko-curation.com/1181/
- パチスロ ジゴク耳: https://suropatizamuraibuttagiri.com/2019/06/11/superdoragon-tenjyou-risetto/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/06/18/superdoragon_tennjyou/
- パチスロメソッド: https://slotmethod.jp/archives/13123/

### 次機種 / 群境界
- ちょんぼりすた 咲桜弁慶: https://chonborista.com/slot/border/81327/
- HAZUSE 咲桜弁慶: https://hazuse.com/machine/pachislot/8S0064/
