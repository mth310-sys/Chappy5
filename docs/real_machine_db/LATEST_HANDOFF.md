# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **418件 `パチスロ エイリアンVSプレデター`** まで進行。
- 417 `ダブルアタック` 後の2009-10-19同日群・10/20〜25境界を監査。HANDOFFではグリーンべると当時記事の2009-10-25納品開始を根拠に次候補としていたが、パチビーでは導入日2009-10-19が確認できたため、日付定義CONFLICTを保持したうえで10/19同日群の遡及漏れとして追加した。
- `ハイパールーレット` / `パチスロ遠山の金さん` は2009年10月中旬までは確認済みだが具体日を高信頼確定できていないため、無理に日付固定せず保留継続。

## 418. パチスロ エイリアンVSプレデター

record:
- `docs/real_machine_db/machines/2009-10_alien-vs-predator.md`

machine record commit:
- `113b91c5b097024fb2ce53c218f02cb58bf44fef`

要点:
- manufacturer: **藤商事**
- formalModelName: **エーブイピーFS2**
- approvalNumber: **9S0386**
- releaseDate: **CONFLICT_DATE_DEFINITION — 2009-10-19（パチビー導入日） / 2009-10-25〜（グリーンべると当時記事の納品開始） / 2009年10月（P-WORLD・藤商事公式精度）**
- generation: **5号機**
- systemType: **ボーナス + ART / AT・周期CZ / 2段階ボーナス間天井**
- BIG: **全設定1/436.9**
- REG: **1/478.4 → 1/445.8**
- 合算: **1/228.4 → 1/220.7**
- 機械割主系列: **97.3 / 99.3 / 104.0 / 106.8 / 114.0 / 119.0%**
- 旧パチマガPAYOUTレンジ: **97.0〜97.3 / 98.4〜99.3 / 102.4〜104.0 / 105.2〜106.8 / 110.0〜114.0 / 119.0%**
- BIG約**252枚**、REG/BONUS GAME約**56枚**。
- ART「バーサスラッシュ」: **50G/セット、約+1.2枚/G**。当時グリーンべるとの1セット純増約60枚と整合。
- 通常時約100G周期でCZ「エイリアンミッション」。
- ボーナス間 **1200G** 到達後の次回ボーナスでART確定。**1700G** 到達後はBIGならART7セット以上、REGなら9セット以上。

### baseGamesPer50

- `パチスロ エイリアンVSプレデター / エイリアンvsプレデター / AVP / エーブイピーFS2 / FS1 / 藤商事` と `50枚 / 1000円 / ベース / コイン持ち / 回転数 / 小役確率` を組み替え再探索。
- パチマガスロマガ旧解析の本機小役ページにも `[1000円あたりのゲーム数] 現在調査中` と残っており、直接値を確定できず。
- 小役確率から推定せず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior — エイリアンVSプレデター

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。1200/1700G進捗、約100G周期CZ、AT/ART・セットストックの設定変更処理を本機固有本文で確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗・周期CZ・AT/ART/ストック引継ぎを直接確認できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗、周期CZ、AT/ART/ストック、表示状態を直接確認できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常1200/1700G天井は確定したが、設定変更でリセットか引継ぎか未確定。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。リセット専用短縮/変更値は未確認。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH_FOR_PERIODIC_CZ_PROGRESS**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH_FOR_AT_ART_AND_STOCK_STATE**。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一専用当選率/モード振分/恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 旧パチマガ機種INDEXに「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが具体本文を回収できず、一般的5号機挙動で補完しなかった。

### データ品質メモ — エイリアンVSプレデター

- 藤商事公式、グリーンべると2009年当時記事、P-WORLD、パチビー、パチマガスロマガ旧解析、2009年検定情報、旧機種まとめ、後年回顧を横断。
- 型式名・検定番号はP-WORLDと2009年検定情報/旧まとめの型式対応で整合。
- 主要ボーナス確率、ART純増、獲得枚数、1200/1700G天井は複数資料系統で高整合。
- 導入日だけパチビー2009-10-19とグリーンべると納品開始2009-10-25が並立するため `CONFLICT_DATE_DEFINITION`。
- 後年個人回顧に設定6機械割110.01%という値があるが、当時業界記事・P-WORLD・パチビー・旧パチマガの119%と明確に矛盾するため主値に採用せず低信頼競合として隔離。
- resetBehavior欠損は表記揺れ/型式/メーカーと `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / 1200G / 1700G / 周期 / 宵越し / ガックン / ART` を組み替え、複数資料系統を再探索後のみUNVERIFIEDとした。

## 417. ダブルアタック

record:
- `docs/real_machine_db/machines/2009-10-19_double-attack.md`

machine record commit:
- `d401b48e8865ea7b2d7af7a1c59f7d7420c81f0e`

要点:
- オーイズミ / 型式ダブルアタック2X / 2009-10-19。
- 赤7DC 1/119.59→1/99.90、青7DC 1/595.78→1/840.21、合算1/99.60→1/89.29。
- ART約+1.5枚/G、333G以降は次回ボーナスまで高確率状態。
- 機械割はメーカー発表値98.0〜110.1%と旧パチマガシミュレート98.58〜108.03%がCONFLICT。

## 416. マジックスパイス

record:
- `docs/real_machine_db/machines/2009-10-19_magic-spice.md`

machine record commit:
- `2287f03e356b0416a011932cf5b561ca685d12a8`

要点:
- 岡崎産業（STLYブランド） / 2009-10-19。
- ボーナス + BRT。50枚ベース29.2〜30.9G、BRT約+0.6枚/G。

## 415. GS美神 極楽大作戦!!

record:
- `docs/real_machine_db/machines/2009-10-19_gs-mikami-gokuraku-daisakusen.md`

machine record commit:
- `b5b1570cde63e3dce5411d001adbc47570838e7e`

要点:
- 2009-10-19ホール導入基準、10/18納品予定との定義差保持。
- 機械割97.5〜109.3%、50枚ベース39.44〜45.53G、通常999Gハマリで天井RT。

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
- 次はrepo contents/treeを時系列順に再走査し、スロ原人直後の最初の `resetBehavior — v0.7` 未補完レコードから続行する。
- 性能コアの既存COMPLETE_CORE/既存coreStatusは不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **418件地点 / パチスロ エイリアンVSプレデターまで収録**から再開。
2. 2009-10-19同日群を最終監査し、**2009-10-20〜10-31** の具体日付き未処理機を境界監査する。エイリアンVSプレデターは導入日10/19・納品開始10/25の定義差を保持済みなので再登録しない。
3. `ハイパールーレット` はグリーンべると当時記事で **2009年10月中旬より納品開始予定**、`パチスロ遠山の金さん` はK-Naviで **2009年10月中旬ホール導入予定** まで確認済み。具体日を高信頼確定できれば正しい位置へ遡及挿入し、確定できなければ月/旬精度の不確実性を保持して本線を止めない。
4. 10月末まで具体日付き未処理がなければ **2009年11月初旬群** へ進む。必ずP-WORLD/パチビー/当時業界記事/旧発売一覧を再横断し、候補を確定してから追加する。
5. 各候補は性能コア＋v0.7 resetBehaviorを同時収集。競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

### resetBehavior遡及QA
1. **スロ原人まで補完済み**。
2. 次はスロ原人直後の最初のv0.7未補完既存レコードをrepo実ファイル順で特定。
3. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT/ART状態 / ガックン` を組み替え、公式・当時業界・当時解析・古いDB・アーカイブ・回顧まで再探索する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイルだけでなく履歴/contents APIでも未登録確認し、検索index遅延による重複を避ける。
- 性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 競合値は平均せずCONFLICT、欠損は十分な再探索後のみUNVERIFIED_AFTER_RESEARCH。

## 今回の保存

- 418 パチスロ エイリアンVSプレデター: `docs/real_machine_db/machines/2009-10_alien-vs-predator.md`
- machine record commit: `113b91c5b097024fb2ce53c218f02cb58bf44fef`
- 本 `LATEST_HANDOFF.md` を418件地点へ更新。
