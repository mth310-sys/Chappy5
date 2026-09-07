# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **915**
- latestRecordAdded: **アスラズ ラース**（エンターライズ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-09-28_asuras-wrath.md`
- chronologicalFrontier: **2015-09-28**
- frontierLatestMachine: **アスラズ ラース**
- frontierRecord: `docs/real_machine_db/machines/2015-09-28_asuras-wrath.md`
- schema: **resetBehavior v0.7**
- status: **2015-09-28_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.914 `2015-09-28_musou-orochi.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **914件 / 2015-09-28 / 09-28_GROUP_OPEN**。
- 次の未処理機種 **「アスラズ ラース」** をNo.915として追加。
- 09-28群を再監査した結果、SANKYO **「パチスロ マクロスフロンティア2 Bonus Live ver.」** の2015-09-28導入を具体日付きで固定できたため、群はCLOSEDにせず **OPEN維持**。

## No.915 — アスラズ ラース

- record: `docs/real_machine_db/machines/2015-09-28_asuras-wrath.md`
- manufacturer: **エンターライズ / Enterrise**
- formalModelName: **アスラズラースZS**
- inspectionNumber: **5S0457**
- systemType: **5号機 A+ART / ST型ART + 疑似ボーナス + CZ**
- canonical releaseDate: **2015-09-28**

### performanceCore

- 機械割 canonical: **97.3 / 98.2 / 100.8 / 103.2 / 108.2 / 112.2%**。
- 設定1のみ別資料に **97.1%** があるため `CONFLICT_97_3_VS_97_1` として保持し、平均しない。
- ASURA BONUS: **1/461.5 / 1/455.1 / 1/448.9 / 1/439.8 / 1/425.6 / 1/409.6**。
- RUSH / ART初当たり: **1/147.5 / 1/140.1 / 1/118.4 / 1/110.2 / 1/96.9 / 1/85.0**。
- 50枚ベース: **36.02～38.48G**（HAZUSE約37G、別解析約36～39Gで整合）。
- ART純増: **約1.5枚/G**。
- ボーナス込み約2.1枚/G表記は別定義として分離。
- ASURA BONUS: **200枚固定**。
- RUSH基本G数: **15G / 30G / 50G**。七星天BATTLEは30G。
- 通常天井: **ボーナス・RUSH/ART間999G（当時資料に999G+前兆表記あり）**。

### resetBehavior v0.7

- 設定変更: 天井G・内部状態・怒りポイント/何様ゲージ等のRESET/CARRYOVERを直接比較する本機固有高信頼資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。K-Navi実戦投稿に宵越し天井狙いの痕跡はあるが、仕様確定資料には採用しない。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。据え置きとの自動同義化はしない。
- gameCounterReset: 設定変更 / 据え置き / 純電断とも、直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 通常天井999G+前兆相当。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。ただし変更時カウンタRESET/CARRYOVER自体はUNVERIFIED。
- modeAfterReset: 朝一専用モード / 設定変更専用モード振り分け **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 怒りポイント、何様ゲージ、高確等の営業日跨ぎ契約 **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: 設定変更専用の主要恩恵・不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン確定契約・表示による変更確定判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- numericResetData: 設定変更時のモード/状態振り分け、短縮天井、朝一専用当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / definition notes

1. `CONFLICT_SETTING1_PAYOUT_97_3_VS_97_1`。
2. `DEFINITION_DIFFERENCE_RUSH_ART_INITIAL_VS_PSEUDO_BONUS_SERIES` — RUSH/ART初当たり1/147.5～1/85.0に対し、別資料の疑似ボーナス1/255.3～1/200.5はART中を含む可能性があり母集団を分離。
3. `DEFINITION_DIFFERENCE_ART_NET_1_5_VS_BONUS_INCLUDED_2_1` — ART単体純増とボーナス込み純増を混ぜない。
4. resetBehavior欠損は機種名表記揺れ、型式、メーカー名、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/高確/蓄積要素を組み替え、当時解析・古いDB・回顧資料まで再探索後にのみUNVERIFIEDとした。

## 2015-09-28群 — OPEN

処理済み:
1. **パチスロ無双OROCHI** — 山佐 — No.914。
2. **アスラズ ラース** — エンターライズ — No.915。

次の既知未処理:
3. **パチスロ マクロスフロンティア2 Bonus Live ver.** — SANKYO。
   - SANKYO公式オンラインミュージアム: 2015年9月 / A+ART。
   - パチセブン: **2015-09-28導入**。
   - グリーンべると/P-WORLD業界記事: **最速納品2015-09-27**。

- 09-28群は上記未処理機があるためOPENを維持する。

## 次回再開地点

1. **recordCount 915 / chronologicalFrontier 2015-09-28 / 09-28_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.915を再確認。
3. 次の未処理機種 **「パチスロ マクロスフロンティア2 Bonus Live ver.」**（SANKYO）を処理する。
4. 同機の導入日について、公式2015年9月・パチセブン09-28・業界記事最速納品09-27を工程定義別に保持し、別資料の旧予定日が出る場合は平均せずCONFLICT/DATE_EVENT_DIFFERENCEとして整理する。
5. 同機処理後、2015-09-28群を全メーカー横断で再監査し、追加未登録機がなければCLOSED判定する。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ無条件転記しない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### No.915 アスラズ ラース
- HAZUSE: https://hazuse.com/machine/pachislot/5S0457/
- HAZUSE 基本情報: https://hazuse.com/machine/pachislot/5S0457/genre/201/
- K-Navi: https://p-kn.com/slot/2351/
- P-WORLD: https://www.p-world.co.jp/machine/database/7829
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/11/c.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/asuras-wrath/
- グリパチWiki: https://guripachi.game-info.wiki/
- 当時新台まとめ: https://slotnews777.blog.fc2.com/blog-entry-2348.html
- 天井整理: https://slotnews777.blog.fc2.com/blog-entry-2482.html

### 次の既知候補
- SANKYO公式「パチスロ マクロスフロンティア2 Bonus Live ver.」: https://www.sankyo-fever.jp/collection/619/
- パチセブン: https://pachiseven.jp/machines/4580/cutout/124
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/7774/greenbelt
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/sankyo_slot_37.php

## confidence

- identity/formalModel/inspectionNumber: ANALYSIS_HIGH
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_PAYOUT_CONFLICT
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: UNVERIFIED_AFTER_RESEARCH
