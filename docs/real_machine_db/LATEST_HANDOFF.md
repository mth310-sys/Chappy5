# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **686**
- latestMachineAdded: **トロピカーナ25φ**（エレコ）
- latestRecord: `docs/real_machine_db/machines/2012-09-24_tropicana-25.md`
- chronologicalFrontier: **2012-09-24**
- frontierLatestExactDateMachine: **トロピカーナ25φ**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-09-24_GROUP__NEXT_TROPICANA_30**

## 今回の同期・時系列監査

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード「パチスロ リングにかけろ1 ギリシア十二神編」を確認して開始。
- `INDEX.md` は初期19件時点の古い集計であるため、README規則どおり、より新しい `LATEST_HANDOFF.md` の **recordCount 685 / chronologicalFrontier 2012-09-18** を進捗正本として採用。
- 2012-09-19〜09-23境界をALL7.jp・メーカー資料・当時業界資料で監査。次の具体日付きパチスロアンカーは2012-09-24エレコ「トロピカーナ」。
- ユニバーサル公式は同一製品ページに **25Φ / 30Φ** の両筐体を掲載。2012-07-27グリーンべると記事も25φ仕様・30φ仕様の2タイプ同時発売と明記。
- 主要性能は現存する25φ/30φ資料で同一だが、30φは沖スロ市場仕様で **2012-08-09沖縄先行導入**の固有履歴がある。全機種方針および過去の30φ派生分離方針に合わせ、25φ/30φは独立レコードとして扱う。
- 今回は全国導入日の明確な **トロピカーナ25φ** を686件目として追加。09-24同日群はまだOPEN。

## 今回の本線追加 — トロピカーナ25φ

### 識別

- manufacturer: **エレコ / ユニバーサルエンターテインメント**
- releaseDate key: **2012-09-24**
- generation: **5号機**
- systemType: **ART / BR非搭載 / 完全告知 / 擬似BIG・REG + CZループ**
- medalDiameter: **25φ**
- modelName: **トロピカーナ C**（後年筐体資料。25φ専用か25/30共通型式か一次確認待ち）
- approvalNumber: `UNVERIFIED_AFTER_RESEARCH`

### 性能コア

- 機械割: **97.3 / 98.8 / 101.4 / 106.2 / 110.0 / 115.1%**
- 擬似ボーナス合算: **1/240.9 / 228.3 / 206.1 / 180.9 / 159.3 / 140.4**
- BIG: **ART66G・平均約136枚**
- REG: **ART22G・平均約45枚**
- ART純増: **約+2.1枚/G**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- 通常天井: **ボーナス間1000G**。到達後は擬似ボーナス + 80%ループ相当CZ。
- CZループ: 初回約40%、2連目以降約80%、中段チェリー契機後約96%。

### CONFLICT

- 設定5機械割はK-Navi 25φ、みんスロ30φ、中古実機25/30資料が **110.0%**で一致。一方crankysevenは **111.0%**。平均せず主値110.0%、111.0%を `CONFLICT_SINGLE_SECONDARY_SOURCE` としてレコードに保持。
- 導入日は全国ホール導入 **2012-09-24**、納品開始 **2012-09-23**、メーカー公式 **2012年9月**。30φのみ **2012-08-09沖縄先行導入**。定義差を平均していない。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**（通常天井1000Gは確認済み、リセット専用短縮値なし）
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**
- 2012年当時の天井攻略資料自体が「朝一設定変更後の挙動は現在調査中」と明記し、CZスタート説を噂扱いしている。表記・検索語・資料系統を変えた再探索後も直接契約を確定できなかったため、推測補完していない。

## 遡及resetBehavior QA 進捗

- 前handoffから継続するQA再開地点は変更しない。
- 遡及QA次回再開地点: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`**。
- 本線の時系列収集を止めず、QAは別リレーで既存レコードのresetBehavior欠損だけ補完する。

## 次回再開地点

1. **recordCount 686 / chronologicalFrontier 2012-09-24 / 09-24同日群OPEN** から開始。
2. 最優先は **エレコ「トロピカーナ-30」**。repo重複確認後、687件目候補として処理する。
3. 30φは全国導入キーを2012-09-24としつつ、グリーンべるとで確認済みの **2012-08-09沖縄先行導入**を `releaseDateNotes` / CONFLICT定義差として必ず保持する。
4. 25φと主要性能が同一でも、30φは沖スロ市場仕様・先行導入履歴が異なるため独立レコード化する。型式/検定番号が見つかれば25φとの関係を更新する。
5. 30φ登録後、09-24同日群を再監査して未登録がなければCLOSED。次の具体日へ進む。
6. 9月後半候補「キュインぱちすろ南国育ち 1st vacation」「覇王伝 零」「戦人」「マハロ-30」「ニューワンバー-30」等は、既登録・別日候補が混在するためrepo重複と具体日を再照合してから採用する。
7. 欠損は機種名表記揺れ・型式・メーカー・シリーズ名と検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### トロピカーナ25φ
- ユニバーサル公式: `https://www.universal-777.com/product/slot/tropicana_2012/`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5407/greenbelt`
- K-Navi 25φ: `https://p-kn.com/slot/1695/`
- ALL7.jp 2012年9月: `https://www.all7.jp/plans/index/2012/09`
- P-WORLD 30φ照合: `https://www.p-world.co.jp/machine/database/6827`
- みんスロ 30φ照合: `https://minslo.com/%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%BC%E3%83%8A%E2%80%9030/`
- 当時天井解析: `https://macerate.seesaa.net/article/294567586.html`
- crankyseven: `https://crankyseven.com/tropicana-pc.htm`
- グリーンべると 30φ沖縄先行導入: `https://web-greenbelt.jp/00001598/`

## GitHub commits

- トロピカーナ25φ machine record: `d48e3247e4375d2f717577667fc8365334603819`
