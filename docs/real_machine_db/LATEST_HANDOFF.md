# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は196件目 `NEO花物語`。
- 2007-11-12同日漏れを監査し、パチビー掲載の `華一番` がmain未登録であることを確認。
- パイオニア公式では25φ `ハナイチバン` と30φ `ハナイチバン-30` が別機種として同時発表・別掲載されているため、当時解析の `華一番&30` 共通スペック根拠も照合し、**197件目 `華一番`、198件目 `華一番-30` を独立レコードとして追加済み。**

## 197. 華一番

- new record: `docs/real_machine_db/machines/2007-11-12_hana-ichiban.md`
- commit: `57a28374b13987938e8fa79c8d0b68288658d7fe`
- manufacturer: パイオニア
- releaseDate: 2007-11-12
- generation: 5号機
- systemType: ノーマル / ボーナス主体 + 演出用RT
- medalType: 25φ
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG: 設定1 `1/334` → 設定6 `1/273`
- REG: 設定1 `1/381` → 設定6 `1/315`
- 合算: 設定1 `1/178` → 設定6 `1/146`
- 機械割: `97.0 / 99.0 / 101.0 / 103.0 / 105.0 / 107.0%`
- 1000円あたり: 約37G（20円貸しで約50枚相当）
- BIG純増: 約300枚
- REG純増: 約100枚
- K-Naviの規定払い出しはBIG 348枚超、REG/CHANCE BONUS 108枚超で終了。
- 演出用RT `おかわりタイム` は最低7G。「並」「超」あり。

### 導入日定義

- パイオニア公式: 2007年11月発売。
- 当時グリーンべると: 2007-11-11から納品開始予定。
- パチビー: 2007-11-12導入。
- 平均せず定義差として保持。DBのreleaseDateはホール導入日基準で2007-11-12。

### v0.7 resetBehavior

`華一番 / ハナイチバン / 華一番-30 / ハナイチバン-30 / パイオニア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / おかわりタイム / RT / ガックン` を組み替え、公式・業界記事・当時解析・旧DB・回顧資料を横断。

- settingChangeBehavior: 設定変更時のおかわりタイム残G/内部RT状態 `UNVERIFIED`。
- carryOverBehavior: 据え置き時の演出用RT残G/内部状態 `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時の演出用RT残G/内部状態 `UNVERIFIED`。
- gameCounterReset: 通常時ゲーム数天井 `NONE_CONFIRMED`。最低7Gは演出用RT継続G数であり天井ではない。
- ceilingAfterReset: `NONE_CONFIRMED`。
- modeAfterReset: 朝一/設定変更専用モード `NONE_CONFIRMED`。
- stateAfterReset: 演出用RTの設定変更/据え置き/電断時処理 `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/高確率ランプ等の変更判別 `UNVERIFIED`。
- numericResetData: 公開朝一専用数値・短縮天井G・変更時振り分け `NONE_CONFIRMED`。

主要出典:
- パイオニア公式: https://www.slot-pioneer.co.jp/products/2009.html
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/2426/greenbelt
- K-Navi: https://p-kn.com/slot/723/
- パチビー: https://www.pachibee.jp/machines/schedule/2007-11
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/a.php
- Pマンズ/プレイグラフ: https://p-mans.blogspot.com/2007/10/

## 198. 華一番-30

- new record: `docs/real_machine_db/machines/2007-11-12_hana-ichiban-30.md`
- commit: `950c1250d058f03f8ce2ee67c53de21cf3c2a610`
- manufacturer: パイオニア
- releaseDate: 2007-11-12
- generation: 5号機
- systemType: ノーマル / ボーナス主体 + 演出用RT
- medalType: 30φ
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 25φ版との関係

- パイオニア公式が25φ `ハナイチバン` と30φ `ハナイチバン-30` を別機種として掲載し、「25Φ・30Φデザイン違いで同時発表」と明記。
- パチマガスロマガは `華一番&30` として共通攻略ページを設け、基本システム・規定払い出しを共通掲載。
- よって別機種としてカウントする一方、性能コアは公式のデザイン違い記述 + 当時解析の共通スペック扱いを根拠に同一値を保存。別兄弟機からの推定流用ではない。

### 性能・resetBehavior

- 設定別BIG/REG/合算、機械割、約37G/1000円、BIG約300枚、REG約100枚、おかわりタイム最低7Gは25φ版と同一資料系統で確認。
- resetBehaviorも25φ/30φ共通資料を含めて再探索したが、設定変更/据え置き/電源OFF→ON時の演出用RT残G・内部状態と本機固有変更判別のみ `UNVERIFIED`。
- 通常時天井、短縮天井、朝一専用モード、公開朝一数値は `NONE_CONFIRMED`。有利区間は `NOT_APPLICABLE`。

## resetBehavior 遡及QA

### 電撃フランケン（2006-07-24）

- 既存性能コア判定を崩さずv0.7 `resetBehavior` 追加済み。
- resetBehaviorQA: `PARTIAL`
- QA commit: `52efe06e28ac69d71c33207e4f0c74ddc326e892`
- BIG後RT `GHOST GAME` 150G、通常時ゲーム数天井非搭載を確認済み。
- 設定変更/据え置き/電断時のRT状態と本機固有変更判別は `UNVERIFIED`。

## 次回再開地点

1. **LATEST_HANDOFF基準198件地点から継続。**
2. 2007-11-12同日群は `NEO花物語 / 華一番 / 華一番-30` まで処理済み。より古い同日漏れがないか最終境界監査してから11/19へ進む。
3. 次候補は2007-11-19 `スーパービンゴV` と `超お父さん2`。今回、推定パス `2007-11-19_super-bingo-v.md` / `2007-11-19_cho-otosan-2.md` はmainに存在しないことを確認したが、別命名既存レコードがないかディレクトリ/検索でも再確認してから登録する。
4. その後は2007-11-20 `哲也～雀聖と呼ばれた男～`、2007-11-26 `赤ドン` / `ファイアーヒーローS` の既存有無と時系列を突合する。
5. `NEO花物語` は50枚ベースと設定別性能の第二ソース照合、resetBehavior直接資料が追加QA対象。
6. resetBehavior遡及QAは `電撃フランケン` より後の既存レコードを時系列走査し、`resetBehavior`節未収集の最古機から継続する。
7. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
8. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
