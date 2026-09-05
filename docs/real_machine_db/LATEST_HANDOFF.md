# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **687**
- latestMachineAdded: **トロピカーナ-30**（エレコ）
- latestRecord: `docs/real_machine_db/machines/2012-09-24_tropicana-30.md`
- chronologicalFrontier: **2012-09-24**
- frontierLatestExactDateMachine: **トロピカーナ-30**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-09-24_GROUP__NEXT_2012-10-01_NEW_ONE_BAR_30**

## 今回の同期・時系列監査

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-09-24_tropicana-25.md` を確認して開始。
- `INDEX.md` は初期19件時点で止まっているため、README規則どおり最新 `LATEST_HANDOFF.md` の recordCount 686 / chronologicalFrontier 2012-09-24 を進捗正本として採用。
- repo検索で「トロピカーナ-30」は未登録を確認。
- P-WORLD 30φ専用ページから型式名 **トロピカーナP-30**、検定番号 **2S0518**、設定別機械割・合算・純増・獲得枚数・1000G天井を確認。
- ユニバーサル公式で25Φ/30Φ両筐体、2012年9月発売を確認。2012-07-27グリーンべると記事で25φ/30φ同時発売・9月23日納品開始を確認。
- 2012-08-09グリーンべると記事で30φ仕様のみ沖縄県浦添市《ジャンボG1店》へ同日先行導入、全国導入は9月下旬開始予定と確認。みんスロは全国導入日を2012-09-24とする。
- 30φは沖スロ仕様・沖縄先行導入履歴・専用型式/検定番号があるため、25φと主要性能が同一でも独立レコード化。
- ALL7.jp 2012年9月一覧では09-24のパチスロは「トロピカーナ」のみ。25φ/30φを登録済みとし、09-24同日群をCLOSED。
- 09-25〜09-30はALL7.jp月次一覧上で次の具体日付きパチスロを確認せず、次の既知具体日アンカーを2012-10-01へ前進。
- ALL7.jp 2012年10月ページ2で、2012-10-01のパチスロ **「ニューワンバー-30」（ベルコ）** を確認。repo検索では未登録。

## 今回の本線追加 — トロピカーナ-30

### 識別

- manufacturer: **エレコ / ユニバーサルエンターテインメント**
- releaseDate key: **2012-09-24**（全国導入）
- regionalEarlyLaunch: **2012-08-09 沖縄先行導入**
- generation: **5号機**
- systemType: **ART / BR非搭載 / 完全告知 / 沖スロ / 擬似BIG・REG + CZループ**
- medalDiameter: **30φ**
- modelName: **トロピカーナP-30**
- approvalNumber: **2S0518**

### 性能コア

- 機械割: **97.3 / 98.8 / 101.4 / 106.2 / 110.0 / 115.1%**
- 擬似ボーナス合算: **1/240.9 / 228.3 / 206.1 / 180.9 / 159.3 / 140.4**
- BIG: 平均約**136枚**
- REG: 平均約**45枚**
- ART純増: **約+2.1枚/G**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。当時記事に「約30G/1000円と思う」という筆者推測はあるが解析値として不採用。みんスロも「調査中」。
- 通常天井: **ボーナス間1000G**。到達後は擬似ボーナス + 約80%ループ相当CZ。
- CZ: 初回約40%、2連目以降約80%、中段チェリー契機後最大約96%。

### CONFLICT / 定義差

- 設定5機械割: P-WORLD 30φ・みんスロ30φ・K-Navi 25φは **110.0%**、crankysevenは **111.0%**。平均せず110.0%を主値、111.0%を競合値として保持。
- 導入日: 30φ沖縄先行 **2012-08-09** / 全国導入 **2012-09-24** / 納品開始 **2012-09-23** / メーカー公式 **2012年9月**。地域先行・全国導入・納品・発売月の定義差として併記。
- REGゲーム数: 2012年当時天井攻略記事は33G、既存25φレコードは22G。P-WORLD/業界記事は平均約45枚を明示するため、本30φでは獲得約45枚を主値としゲーム数は `CONFLICT_OR_DEFINITION_DIFFERENCE` のまま保持。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**（通常天井1000Gは確認済み、設定変更専用短縮値なし）
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**
- 2012-09-29当時天井攻略記事はタイトルに「トロピ30」を明示し、朝一設定変更後について「現在調査中」、CZスタート説を噂扱いしている。設定変更/リセット/朝一/据え置き/電源OFF ON/天井/CZ/ガックン等で再探索後も直接契約を確定できなかったため推測補完していない。

## 遡及resetBehavior QA 進捗

- 前handoffから継続するQA再開地点は変更しない。
- 遡及QA次回再開地点: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`**。
- 本線時系列収集を止めず、QAは別リレーで既存レコードのresetBehavior欠損のみ補完する。

## 次回再開地点

1. **recordCount 687 / chronologicalFrontier 2012-09-24 / 09-24群CLOSED** から開始。
2. **2012-09-25〜09-30境界を追加資料でもう一度最終監査**し、漏れがなければ2012-10-01へ進む。
3. 最優先は **ベルコ「ニューワンバー-30」**。ALL7.jpで2012-10-01導入予定、repo検索で未登録を確認済み。重複最終確認後、688件目候補として性能コア + resetBehavior v0.7を収集する。
4. 2012-10-01同日群の他パチスロがないか、ALL7.jp以外の当時一覧・メーカー資料・古いDBでも監査してからCLOSEDにする。
5. 次の既知具体日群は **2012-10-09**。ALL7.jpで「ドラゴンハナハナ-30」「パチスロキン肉マン キン肉星王位争奪編」「パチスロ喰霊-零-」「南国育ちinハワイ」「大工の源さん～炎のいただき!編」を確認。ただし10/01群を閉じるまで先行処理しない。
6. 欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合値は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### トロピカーナ-30
- ユニバーサル公式: `https://www.universal-777.com/product/slot/tropicana_2012/`
- P-WORLD 30φ: `https://www.p-world.co.jp/machine/database/6827`
- グリーンべると 沖縄先行導入: `https://web-greenbelt.jp/00001598/`
- グリーンべると / P-WORLD 発表記事: `https://news.p-world.co.jp/articles/5407/greenbelt`
- みんスロ 30φ: `https://minslo.com/%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%BC%E3%83%8A%E2%80%9030/`
- 当時天井解析（トロピ30）: `https://macerate.seesaa.net/article/294567586.html`
- crankyseven: `https://crankyseven.com/tropicana-pc.htm`
- ALL7.jp 2012年9月: `https://www.all7.jp/plans/index/2012/09`
- ALL7.jp 2012年10月 page2: `https://www.all7.jp/plans/index/2012/10/10`

## GitHub commits

- トロピカーナ-30 machine record: `06555b40be1347b11300107e450ca71b7d2da7d5`
