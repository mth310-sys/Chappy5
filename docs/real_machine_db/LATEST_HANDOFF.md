更新日: 2026-09-08

## 現在地点
- recordCount: **997**
- latestRecordAdded: **セブンスビート**（KPE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-08-01_sevens-beat.md`
- chronologicalFrontier: **2016-08-01**
- frontierLatestMachine: **セブンスビート**（KPE）
- schema: **resetBehavior v0.7**
- status: **2016-08-01_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.996 `2016-07-25_versus.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **996** / chronologicalFrontier **2016-07-25** / `2016-07-25_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- 既存性能値はやり直さず、07/26〜07/31境界監査 → 08/01群へ前進。

## No.997 — セブンスビート
- manufacturer: **KPE**
- releaseDate: **2016-08-01**
- formalModelName: **セブンスビート/ZS**（後年回顧資料）
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+C / ボーナス+集中**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESEARCH_EXHAUSTED**

### performanceCore
- 機械割 canonical: **97.2 / 97.2 / 99.9 / 102.0 / 107.1 / 111.2%**。
- 集中CT: **1/200 / 178 / 199 / 178 / 199 / 158**。
- ボーナス+CT合算: 約 **1/100 / 90 / 100 / 90 / 99 / 79**。P-WORLD精密表記は1/99.9 / 89 / 99.6 / 89 / 99.3 / 79.2。
- ベース: **約23G/50枚**。
- 集中「アクセルレイブタイム」: **約1.6枚/G**、次回ボーナス成立まで継続、平均獲得約**350枚**。
- ボーナスゲーム: **54枚**。
- 天井: **非搭載**として扱う。

### resetBehavior v0.7
- ゲーム数天井/天井カウンタがないため gameCounterReset / ceilingAfterReset は **NOT_APPLICABLE**。
- 通常A/B/天国型ゲーム数モード、朝一専用短縮天井、公開朝一当選率は **NONE_CONFIRMED / NOT_APPLICABLE**。
- 設定変更/据え置き/純電源OFF→ON時の **集中内部状態** の契約は、表記揺れ・型式・KPE・設定変更/リセット/朝一/据え置き/電源OFF ON/集中/ガックン等へ検索語を変えて再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の確定的ガックン/初期出目/表示判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict
- `CONFLICT_SETTING3_PAYOUT_99_9_VS_99_5`: ちょんぼりすた等99.9%に対しP-WORLDは99.5%。他設定は一致。平均せず99.9%をcanonical、99.5%を競合値として保持。

## 2016-08-01群 — OPEN
- 独立導入日順資料では **セブンスビート / デビルメイクライX（クロス） / パチスロ ルパン三世 消されたルパン** が08/01群。
- セブンスビートはKPE発表を伝える2016-06-03業界ニュース、K-Navi、P-WORLD系で **2016-08-01** を固定しNo.997登録済み。
- 残り2機は日付を当時メーカー/業界資料で再固定してから順番に登録する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-06_be-bop.md**
- retroQaNextInspection: **2006-03-27_kengou-musashi.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 前進キューを優先し、retro QA再開地点は変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.997を再取得。
2. **997件 → 2016-08-01群の次の未処理機種**へ継続。
3. 第一候補 **デビルメイクライX（クロス）**。メーカー/型式/検定番号/実ホール導入日を当時資料で固定し、性能コア＋resetBehavior v0.7を収集。
4. 続いて **パチスロ ルパン三世 消されたルパン**を処理。
5. 08/01同日全メーカー監査を行い、漏れがなければ群をCLOSEDとして次の導入日境界へ前進。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/集中/ガックン等へ検索語と資料系統を変えて十分再探索後のみ確定。
7. 競合は平均せずCONFLICT。性能側COMPLETE_CORE/PARTIALとreset QA状態を混同しない。

## 主要出典 — 取得日 2026-09-08
- K-Navi セブンスビート: https://p-kn.com/slot/2532/
- K-Navi KPE新機種発表（2016-06-03）: https://p-kn.com/topics/news/2023/
- P-WORLD: https://www.p-world.co.jp/machine/database/8073
- ちょんぼりすた: https://chonborista.com/slot/kpe-slot/22270/
- パチビー: https://www.pachibee.jp/movies/index/12798
- パチセブン: https://pachiseven.jp/machines/4866/cutout/5
- 2016年導入日順: https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
