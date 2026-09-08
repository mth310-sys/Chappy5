# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **966**
- latestRecordAdded: **バガナックルー**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-03-22_baganuckle.md`
- chronologicalFrontier: **2016-03-22**
- frontierLatestMachine: **バガナックルー**
- schema: **resetBehavior v0.7**
- status: **2016-03-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.965 `2016-03-22_getter-mouse.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **965** / chronologicalFrontier **2016-03-22** / 03-22群OPEN。
- handoff指定の次未処理 **バガナックルー** をNo.966として追加。

## No.966 — バガナックルー
- record: `docs/real_machine_db/machines/2016-03-22_baganuckle.md`
- manufacturer: **大都技研**
- releaseDate canonical: **2016-03-22**
- generation/system: **5号機 / AT / 擬似ボーナス / モード管理 / 技術介入**
- formalModelName / certificationNumber: **UNVERIFIED_AFTER_RESEARCH**

### performanceCore
- 機械割: **97.1 / 98.4 / 100.4 / 104.4 / 107.2 / 111.1%**。
- AT/擬似ボーナス初当り: **1/336 / 1/315 / 1/290 / 1/259 / 1/231 / 1/212**。
- ベース: **約48G/50枚**。
- AT純増: **約3.0枚/G**。
- BIG: **50G+α / 約150枚**、REG: **20G / 約60枚**。
- 最大天井: **1500G**。通常A/Bは1500G、チャンス100G、天国/昇天国はポイント管理で平均約50G相当。昇天準備は固定天井なしで次回昇天国確定。
- P-WORLD、ちょんぼりすた、パチマガスロマガ系旧DBを主照合。

### resetBehavior v0.7
- 設定変更時の天井進捗は **RESET** と後年天井DBで確認。前日ハマリの宵越し価値は設定変更で消失する扱い。
- パチマガスロマガ系旧DBに本機専用「設定変更時」解析項目が存在することは確認できるが、今回取得可能な本文では設定変更時モード振り分け数値を直接固定できなかった。
- 据え置き時の天井/モード/ポイント、純電源OFF→ON時の天井/モード/ポイントは本機固有直接根拠を固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更RESETから逆算してCARRYOVERと決めない。
- 設定変更専用短縮天井、朝一専用CZ/保証ボーナス等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン・初期出目等による本機固有の確定設定変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-03-22群監査 — CLOSED_FOR_CURRENT_RESEARCH
照合できた同日群:
1. **ミラクル** — エレコ — No.964 処理済み
2. **ゲッターマウス** — アクロス — No.965 処理済み
3. **バガナックルー** — 大都技研 — No.966 今回処理

- モゲスロ2016年導入カレンダーの03/22群は上記3機種。
- HAZUSE新台カレンダーでも2016年3月の導入日区分として03/22の次は03/28が存在することを確認。
- 現時点の複数カレンダー横断で03/22同日追加候補を確認できないため `CLOSED_FOR_CURRENT_RESEARCH`。
- 次は **2016-03-23〜03-28境界監査**を行い、03/28群の具体機種をメーカー/型式/導入日で固定して最初の未登録機から進める。

## 遡及 resetBehavior QA
- 今回対象: `2006-02_new-oasis.md`（ニューオアシス）
- 性能側 `coreStatus: COMPLETE_CORE` は維持。
- 型式 `P5NSB` を含め「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ハイビスカス」へ検索語を変更し、当時業界記事・5号機回顧DB・古解析を再探索。
- 天井・ゲーム数モード・RT/ART・有利区間は非該当。
- 設定変更/据え置き/純電断時の成立済みボーナス・告知状態・初期出目等の本機固有直接契約は追加固定できず、reset側のみ **PARTIAL_RESEARCH_EXHAUSTED**へ更新。
- グリーンべると当時記事でレバーON50% / 全リール停止12.5% / 次ゲームレバーON37.5%の通常告知タイミングを確認したが、resetDetectionではないため混入させていない。
- retroQaScanConfirmedThrough: **2006-02_new-oasis.md**
- retroQaNextInspection: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**

## 次回再開地点
1. **recordCount 966 / chronologicalFrontier 2016-03-22 / 03-22群CLOSED** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.966をmainから再取得。
3. **2016-03-23〜03-28境界監査 → 03/28群の具体機種確定 → 最初の未登録機**を性能コア+resetBehavior v0.7で処理。
4. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
5. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
6. 遡及QAは **`2006-02_nurse-witch-komugi-chan-magicalte.md`** から継続。既存性能コアを無駄にやり直さない。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.966 バガナックルー
- P-WORLD: https://www.p-world.co.jp/machine/database/7993
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/17619/
- パチマガスロマガ公式系旧DB: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/63/daitogiken_slot_63.php
- 2ndsight天井一覧: https://2ndsight.xyz/1768
- 大都技研公式サウンドトラック: https://www.daitogiken.com/products/music/soundtrack/
- モゲスロ2016年導入カレンダー: https://moge-site.com/new-slot2016
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/

### retro QA ニューオアシス
- グリーンべると: https://web-greenbelt.jp/00004505/
- 5号機クロニクル: https://5goki.com/pioneer
- pacnk: https://pacnk.com/slot/tools/hamari.php?id=newoashisu

## confidence
- No.966 identity/manufacturer/system: **INDUSTRY_DATABASE_PLUS_MULTI_SOURCE_HIGH**
- No.966 releaseDate: **HIGH_MULTI_SOURCE_PERIOD_PLUS_OFFICIAL_DATE_SUPPORT**
- No.966 performanceCore: **HIGH_MULTI_SOURCE_PERIOD**
- No.966 settingChange gameCounter: **ANALYSIS_SECONDARY_DIRECT_RESET_LABEL**
- No.966 settingChange mode numeric / carryOver / powerCycle: **UNVERIFIED_AFTER_RESEARCH**
- No.966 resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
- 2016-03-22 group: **CLOSED_FOR_CURRENT_RESEARCH**
- retro New Oasis core: **COMPLETE_CORE_UNCHANGED**
- retro New Oasis resetBehavior: **PARTIAL_RESEARCH_EXHAUSTED**
