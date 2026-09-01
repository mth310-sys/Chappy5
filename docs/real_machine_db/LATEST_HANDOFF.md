# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは208件地点（`パチスロ「機動戦士ガンダムII～哀・戦士編～」` 追加済み）。
- 2007-12-03同日〜12-05境界を再監査し、今回これより早い未処理機の具体導入日を確定できなかったため、直前handoff指定の `パチスロシティーハンター` を処理。
- **209件目として `パチスロシティーハンター` を追加済み。**

## 209. パチスロシティーハンター

- new record: `docs/real_machine_db/machines/2007-12-06_pachislot-city-hunter.md`
- commit: `d891b7962592cf032410cf203000f682cc0596c5`
- manufacturer: 銀座
- generation: 5号機
- systemType: ボーナス + RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・同定

- グリーンべると2007-11-09記事は、銀座が11/5に発表し **2007-12-06から納品開始予定** と明記。
- P-WORLD / 5号機クロニクルは導入 `2007年11月` 表記のため `CONFLICT_DATE_MONTH`。具体日を持つ当時業界記事を優先し12/6採用。
- P-WORLDでメーカー銀座、5号機RTを確認。
- 正式型式名/検定番号は、機種名・銀座・GINZA・検定・型式を組み替えて再探索したが今回確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 性能コア

- 機械割（5号機クロニクル）: `98.0 / 99.1 / 100.8 / 103.3 / 105.1 / 109.6%`。
- 後年シリーズ整理は設定4のみ `103.6%` のため `103.3 / 103.6 CONFLICT_DETAIL`。平均しない。
- BIG3種類 + REG。純増目安: BIG約380枚 or 約300枚、REG約96枚。
- REG後は必ず100G RT `XYZタイム`。100G消化またはボーナス成立で終了。
- RT純増約 `+0.9枚/G`、完走時約90枚増。
- パチマガスロマガFREE回顧は通常時コイン持ち **1000円あたり50G超** と明記。ただし精密比較値は未確定。
- 設定別BIG/REG/合算はK-Navi現存ページ自体が「未発表」。当時解析・旧DB・回顧資料を表記揺れ込みで再探索したが2007年銀座版の高信頼表を確定できず `UNVERIFIED_AFTER_RESEARCH`。2014年オリンピア版は別機種なので流用禁止。

### v0.7 resetBehavior

- settingChangeBehavior: 設定変更時の通常状態、100G RT残G、成立済みボーナス、リール初期挙動は `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時のXYZタイム残G/内部RT状態は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみのXYZタイム残G/内部状態/表示は `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井は `NONE_CONFIRMED`。100GはREG後RT継続G数でありハマリ天井ではない。
- ceilingAfterReset: 短縮天井/変更後専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/公開変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: XYZタイム中の変更/据え置き/電断時残状態処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開朝一固有恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/液晶・ランプ等による変更判別 `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開設定変更時専用数値なし確認。

主要出典:
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2462/greenbelt
- K-Navi: https://p-kn.com/slot/731/
- P-WORLD: https://www.p-world.co.jp/machine/database/4968
- 5号機クロニクル（銀座）: https://5goki.com/ginza
- パチマガスロマガFREE回顧: https://pachimaga.com/free/special/3d1fe8397fe97c6e9535711f15203ead5a89d40a.php
- 後年シリーズ整理: https://www.marimo0925.net/pachislot-kikaiwari-cityhunter-ban/

## 直前の208件目

### パチスロ「機動戦士ガンダムII～哀・戦士編～」

- record: `docs/real_machine_db/machines/2007-12-03_mobile-suit-gundam-ii-ai-senshi.md`
- commit: `b5e3ca63f3e0de363b559bf63f28e879b859961a`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 導入は2007-12-03。設定別機械割97.5〜111.0%、1000円ベース35.28〜36.43G、BIG後78G完走型RT `Gエピソード` +0.3枚/G。

## resetBehavior 遡及QA

### じゃりン子チエ（2006-08）

- QA record: `docs/real_machine_db/machines/2006-08_jarinko-chie.md`
- QA commit: `37577b33bcf0bafe7accd4cff7d807fd47899f6f`
- 既存性能 `PARTIAL` を維持しv0.7 `resetBehavior` を追加済み。
- 設定変更/据え置き/電源OFF→ON時の100G/50G完走型RT残G・内部RT状態は `UNVERIFIED_AFTER_RESEARCH`。
- 再探索で1000円ベース44.06G、RT純増+0.06枚/G等を回収済み。

## 重複防止

- `NEO花物語`: 既存レコードあり。再追加禁止。
- `スーパービンゴV`: 既存レコードあり。再追加禁止。
- `CANスロ`: 既存レコードあり。再追加禁止。
- `パチスロ「機動戦士ガンダムII～哀・戦士編～」`: 208件目として追加済み。
- `パチスロシティーハンター`: 209件目として今回追加済み。

## 次回再開地点

1. **LATEST_HANDOFF基準209件地点から継続。**
2. 2007-12-06同日〜以降の未処理機をメーカー別一覧・P-WORLD旧導入カレンダー・当時業界記事で監査し、具体導入日の最古未処理機を選ぶ。
3. 12月候補は機種名/月だけで順序を決めず、納品日・稼働開始日を可能な限り当時記事で確定する。
4. 新規機種は性能コア + v0.7 resetBehaviorを同時収集。設定変更/据え置き/電断、ゲーム数/天井、モード/状態、朝一恩恵/不利、変更判別、公開朝一数値まで検索語・資料系統を変えて探索する。
5. resetBehavior遡及QAは `じゃりン子チエ` の次の未補完既存レコードを時系列に再確認して進める。直前handoffでは `ランブルローズ（2006-08）` 候補だったが、最新main検索インデックスでは名称ヒットが取れなかったため、次回はmachinesディレクトリ実体を先に確認して対象ファイルを特定してからQAする。
6. 既存 `COMPLETE_CORE` は性能完了判定を不用意に崩さず、resetBehaviorQAを別管理する。
7. PARTIAL/UNVERIFIEDは最初の検索だけで確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
8. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
