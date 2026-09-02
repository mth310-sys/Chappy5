# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **413件 `KODA KUMI PACHISLOT LIVE IN HALL II`** まで進行。
- 412 `ゴールデンベルE` 後、2009-10-02〜10-12境界を再監査。ネイチャー・アセスメント `ハイパールーレット` は2009-09-01当時グリーンべるとで **10月中旬より納品開始予定**、大一 `パチスロ遠山の金さん` は2009-09-01 K-Navi発表会記事で **10月中旬ホール導入予定** までで、10/13より前の具体日を高信頼確定できなかった。
- よって、具体日が確認できる SANKYO `KODA KUMI PACHISLOT LIVE IN HALL II` の **K-Naviホール導入開始2009-10-13** を次の時系列点として413に登録した。

## 413. KODA KUMI PACHISLOT LIVE IN HALL II

record:
- `docs/real_machine_db/machines/2009-10-13_koda-kumi-pachislot-live-in-hall-ii.md`

machine record commit:
- `e8ad79b24c5c27159a07be1555c11221fa3afaac`

要点:
- manufacturer: **SANKYO**
- formalModelName: **KODA KUMI PACHISLOT LIVE IN HALL II F**（SANKYO公式）
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2009-10-13**（K-Naviホール導入開始。SANKYO公式は2009.10）
- generation: **5号機**
- systemType: **ボーナス+RT / CZ**
- 機械割: **95.8 / 98.2 / 100.6 / 103.6 / 106.7 / 110.0%**
- BIG: **1/312 → 1/262**
- CHALLENGE BONUS: **1/420 → 1/273**
- 合算: **1/179 → 1/133**
- 50枚ベース: **35.88 / 36.36 / 36.86 / 37.37 / 37.89 / 38.48G**（パチマガスロマガ旧解析の1000円あたりゲーム数）
- RT `LIVE TIME`: **約+0.1枚/G**。33Gまたは3333G、完走後CHANCE TIMEへ戻り約50%ループ。
- 基本獲得: SPECIAL BIG約290枚 / BIG約280枚 / CHALLENGE BONUS系約80枚。
- 通常ゲーム数天井は非搭載。

### v0.7 resetBehavior — KODA KUMI II

- `gameCounterReset`: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_CEILING_CONFIRMED`
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）
- パチマガスロマガの本機INDEXに **「攻め時・ヤメ時・設定変更時」** 専用項目の存在までは確認したが、その本文を今回回収できず、設定変更/据え置き/単純電源OFF→ON時の `CHANCE TIME / LIVE TIME / SPECIAL LIVE TIME` 状態処理は **UNVERIFIED_AFTER_RESEARCH**。
- ガックン、初期出目、表示、リール状態などの本機固有変更判別も検索語・資料系統を変えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用モード、短縮天井、設定変更専用当選率/恩恵率/不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=PARTIAL_NO_CEILING_RESET_RT_CZ_STATE_POWER_CYCLE_CHANGE_DETECTION_UNVERIFIED`。

### データ品質メモ

- SANKYO公式、K-Navi、P-WORLD、2009年グリーンべると、パチマガスロマガ旧解析の本機仕様は **ボーナス+RT** で整合。
- 5号機クロニクルの同機欄は機械割95.8〜110.0%だけK-Naviと一致する一方、`A+ART / 約1.2枚/G / BIG約204枚 / REG約50枚 / 別初当たり系列` が混在し、公式/P-WORLD/当時業界資料と矛盾する。別機種データ混入の可能性が高いため、性能本値へ平均・転用せず `CONFLICT/LIKELY_DATA_MIXUP` としてレコード内に隔離した。

## 412. ゴールデンベルE（直前）

record:
- `docs/real_machine_db/machines/2009-10_golden-bell-e.md`

machine record commit:
- `5d8618a6746013a8b86f03ad6ea56e547fec7d33`

要点:
- ベルコ / ゴールデンベルE / 検定8S1379。
- releaseDateは2009-10月精度。2009-10-09時点の設置済み当時投稿は補助証拠のみで全国導入具体日へ格上げしない。
- BIG 1/297.0→1/260.0、REG 1/481.0→1/321.0、合算1/184.0→1/143.0。
- 機械割/50枚ベースは十分再探索後 `UNVERIFIED_AFTER_RESEARCH`。

## 411. スモモチャン

record:
- `docs/real_machine_db/machines/2009-10-01_sumomo-chan.md`

machine record commit:
- `980569219f8e56b568262bf7a317574c0c6a95a8`

## 410. 銀河英雄伝説

record:
- `docs/real_machine_db/machines/2009-09-28_ginga-eiyuu-densetsu.md`

machine record commit:
- `8cdaeda62ec4d45f52c61eabdfe4c247ab56a83e`

## 409. パチスロ交響詩篇エウレカセブン

record:
- `docs/real_machine_db/machines/2009-09-28_eureka-seven.md`

machine record commit:
- `974821dbe62d72e51494278c1aad019f5b754fcb`

## resetBehavior遡及QA

既補完確認済み:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30
- スパイダーマン2G
- スロ原人

直近QA:
- `docs/real_machine_db/machines/2006-10_surogenjin.md`
- QA commit: `3194bc98054c649f7d841525dca97f30b22258a0`
- 次はrepo実ファイルを時系列順に走査し、スロ原人直後の最初の `resetBehavior — v0.7` 未補完レコードから続行する。
- 性能コアの既存COMPLETE_CORE/既存coreStatusは不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **413件地点 / KODA KUMI PACHISLOT LIVE IN HALL IIまで収録**から再開。
2. まず **2009-10-14〜10-18境界監査**。月精度/「中旬」表記の `ハイパールーレット`、`パチスロ遠山の金さん` に10/13〜10/18の具体導入/納品日を確定できる当時一次・業界・解析資料がないか再確認する。
3. 具体日を確定できた機種は日付順に処理。中旬表記のままなら、無理に10/19具体日群より前へ固定せず月/旬精度として競合・時系列不確実性を保持する。
4. **10/19群**として `球児2`、`GS美神極楽大作戦!!`、`マジックスパイス`、`ダブルアタック`、`パチスロ エイリアンVSプレデター` を候補確認済み。各候補はrepo未登録・正式導入日を再確認してから次件とする。
5. `青ドン〜花火の極〜` は当時業界資料11/3納品開始、K-Navi11/4ホール導入開始を示すため10月へ前倒ししない。
6. 候補ごとに性能コア＋v0.7 resetBehaviorを同時収集。欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧まで十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。
7. 競合値は平均せず `CONFLICT`。後継/同名別機種の数値を転用しない。

### resetBehavior遡及QA
1. **スロ原人まで補完済み**。
2. 次はスロ原人直後の最初のv0.7未補完既存レコードを実ファイル順で特定。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、公式・当時業界・当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイルだけでなく履歴/contents APIでも未登録確認し、検索index遅延による重複を避ける。
- 性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- 413 KODA KUMI PACHISLOT LIVE IN HALL II: `docs/real_machine_db/machines/2009-10-13_koda-kumi-pachislot-live-in-hall-ii.md`
- machine record commit: `e8ad79b24c5c27159a07be1555c11221fa3afaac`
- 本 `LATEST_HANDOFF.md` を413件地点へ更新。
