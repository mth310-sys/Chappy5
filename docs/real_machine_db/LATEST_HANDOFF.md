# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **970**
- latestRecordAdded: **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌**（DAXEL）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-04_milky-holmes-td.md`
- chronologicalFrontier: **2016-04-04**
- frontierLatestMachine: **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌**
- schema: **resetBehavior v0.7**
- status: **2016-04-04_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`INDEX.md`、`LATEST_HANDOFF.md`、No.969 `2016-04-04_king-pulsar-dot-pulsar.md` を再取得。
- INDEXは19件時点の旧集約のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **969** / chronologicalFrontier **2016-04-04** / 04-04群OPEN。
- 直前handoff指定の先頭未処理 **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌** をNo.970として追加。

## No.970 — 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌
- record: `docs/real_machine_db/machines/2016-04-04_milky-holmes-td.md`
- manufacturer: **DAXEL**
- releaseDate canonical: **2016-04-04**
- formalModelName: **ミルキィホームズ／DE**
- certificationNumber: **6S0010**
- generation/system: **5号機 / 疑似ボーナス+ART / 周期管理**

### performanceCore
- 機械割: **97.3 / 98.3 / 100.3 / 103.6 / 106.2 / 110.0%**。
- ミルキィBONUS: **1/382.7 / 359.9 / 333.3 / 318.2 / 280.3 / 264.4**。
- ミラクルミルキィBONUS: **1/2368.2 / 2351.4 / 2377.3 / 2360.4 / 2396.7 / 2423.3**。
- ART「ミルキィTIME」初当たり: **1/638.0 / 598.8 / 580.6 / 538.0 / 506.9 / 473.5**。
- ベース: **約47G/50枚**。
- 疑似ボーナス/ART純増 canonical: **約2.0枚/G**。
- ミルキィBONUS平均 **約95枚**、ミラクルミルキィBONUS平均 **約170枚**、ART初期 **40G以上**。
- HAZUSE、一撃、P-WORLD、グリーンべると、Pachinavi等を照合。

### resetBehavior v0.7
- 設定変更時: **天井周期RESET / 内部モード再抽選 / 実戦上シナリオZONE開始**。
- 純電源OFF→ON: **天井CARRYOVER / 内部モードCARRYOVER / 液晶ステージは当時資料で調査中**。
- 据え置き単独: 純電断と自動同一視せず、直接契約を再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一は通常のオープニングZONE15Gがカットされ、1周期目のみ **約65G**で終了する実戦解析。通常時は約80G前後/周期。
- 設定変更後モード振り分け:
  - 設定1: 通常A43.4 / 通常B31.3 / 引き戻し7.8 / 天国準備7.8 / 天国9.4 / 極楽0.4%。
  - 設定2: 39.1 / 35.2 / 7.8 / 7.8 / 9.8 / 0.4%。
  - 設定3: 42.6 / 31.3 / 7.8 / 7.8 / 10.2 / 0.4%。
  - 設定4: 34.0 / 39.1 / 7.8 / 7.8 / 10.9 / 0.4%。
  - 設定5: 30.9 / 39.1 / 8.6 / 8.6 / 12.5 / 0.4%。
  - 設定6: 27.0 / 39.1 / 9.4 / 9.4 / 14.8 / 0.4%。
- 引き戻しは最大 **6周期**かつ次回天国以上、天国/極楽は最大 **2周期**、通常A/B/天国準備は最大 **12周期**。
- 新台初日1回目の実践集計で朝一1周期目当選 **約21%**が残るが、メーカー解析ではないため `EMPIRICAL_SINGLE_DATASET` として分離。
- 設定変更で前日天井周期進捗・前日内部モードが消えるのが主要リセット不利。
- 変更判別: シナリオZONE開始/1周期目短縮は推測材料だが、当時記事自身が据え置き挙動未確認としているため確定判別にしない。ガックン確定契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict / caution
- ART純増はHAZUSE/P-WORLD/複数整理が **約2.0枚/G** で一致する一方、一撃2016-04-21 ART概要に **約1.5枚/G** が残る。平均せず `CONFLICT_ART_NET_INCREASE_2_0_VS_1_5`、canonicalは多系統一致の2.0枚/G。
- 周期長はグリーンべると発表会記事の **平均約85G** と攻略解析の **約80G** に差がある。天井はゲーム数換算を固定せず **12周期**をcanonicalとする。
- 据え置き単独と純電源OFF→ONを同義にしていない。

## 2016-04-04群 — OPEN
登録済み:
- No.968 **パチスロ 機動警察パトレイバー**（北電子）
- No.969 **キングパルサー～DOT PULSAR～**（山佐）
- No.970 **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌**（DAXEL）

今回、`2016年4月4日 パチスロ 新台` / `2016/04/04 スロット 新台` / `4月4日導入 パチスロ 2016` 等で初回再監査を実施。検索結果は上記登録済み機種の再確認が中心で、追加本線候補はまだ固定していない。

### 次の処理
1. **04/04同日群をメーカー別一覧・当時4月新台一覧・HAZUSE/K-Navi/P-WORLD系日付DBで全メーカー横断再監査する。**
2. 追加未処理が見つかればその最古/同日候補をNo.971として処理。
3. 十分な横断後に追加がなければ **2016-04-04_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とし、2016-04-05以降の次の具体的全国導入日へ進む。
4. `アステカ 太陽の紋章`は2016-04-04付の記事が存在するが、その記事日付自体を導入日と誤認しないこと。導入日は別途一次/当時DBで固定して時系列に置く。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_new-oasis.md**（変更なし）
- retroQaNextInspection: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線No.970を優先し、遡及QAは進めていない。

## 次回再開地点
1. **recordCount 970 / chronologicalFrontier 2016-04-04 / 04-04群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.970をmainから再取得。
3. 04/04群の全メーカー横断監査を最優先する。
4. 未処理同日機が見つかればidentity→性能コア→resetBehavior v0.7を収集してNo.971へ。
5. 漏れなしと判断できた場合のみ04/04群をCLOSEDにして次の具体日へ進む。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
7. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
8. 遡及QAは **`2006-02_nurse-witch-komugi-chan-magicalte.md`** から継続。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と記事公開日・発表日・納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.970 ミルキィホームズTD
- DAXEL公式: https://www.daxel.co.jp/milky-holmes_td/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0010/
- K-Navi: https://p-kn.com/slot/2466/
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/8195/greenbelt
- 一撃 ボーナス確率: https://1geki.jp/slot/s_milkyholmes/1/
- 一撃 ART概要: https://1geki.jp/slot/s_milkyholmes/81/
- 一撃 周期モード: https://1geki.jp/slot/s_milkyholmes/44/
- すろぱちくえすと リセット: https://www.slopachi-quest.com/article/milkyhomes-reset/
- 2-9伝説 設定/モード: https://2-9densetsu.com/milkyholmes-settei/
- 期待値見える化: https://slotjin.com/zone/milkyholmes/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/8006

## confidence
- No.970 identity/formalModel/certification/releaseDate: **PERIOD_DATABASE_HIGH_MULTI_SOURCE_PLUS_OFFICIAL_PAGE**
- No.970 performanceCore: **INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.970 settingChange/powerCycle: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- No.970 reset numeric tables: **ANALYSIS_HIGH_MULTI_SOURCE_PERIOD**
- No.970 carryOver据え置き単独: **UNVERIFIED_AFTER_RESEARCH**
- No.970 resetDetection: **ANALYSIS_PERIOD_STAGE_INDICATOR_WEAK**
- 2016-04-04 group: **OPEN**
