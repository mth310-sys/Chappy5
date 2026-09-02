# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **415件 `GS美神 極楽大作戦!!`** まで進行。
- 414 `球児2` 後の10/18〜10/19境界を再監査。
- ネイチャー・アセスメント `ハイパールーレット` は2009-09-01当時グリーンべるとで **10月中旬より納品開始予定** までで、今回も具体日を高信頼確定できず。大一 `パチスロ遠山の金さん` も当時K-Naviでは **10月中旬ホール導入予定**、後年DBでは2009-10月精度まで。具体日を無理に固定しない。
- アビリット `GS美神 極楽大作戦!!` はグリーンべると当時記事で **2009-10-18納品予定**、K-Navi/コミックナタリーで **2009-10-19ホール導入予定/全国ホール順次稼働** を確認。物流開始とホール導入の定義差を保持し、主releaseDateは2009-10-19とした。

## 415. GS美神 極楽大作戦!!

record:
- `docs/real_machine_db/machines/2009-10-19_gs-mikami-gokuraku-daisakusen.md`

machine record commit:
- `b5b1570cde63e3dce5411d001adbc47570838e7e`

要点:
- manufacturer: **アビリット（現コナミアミューズメント系）**
- formalModelName: **GSミカミX**
- approvalNumber: **0S0430**
- releaseDate: **2009-10-19**（K-Navi/コミックナタリーのホール導入基準。グリーンべるとは10/18納品予定）
- generation: **5号機**
- systemType: **ボーナス + RT / CZ + 天井RT**
- 機械割: **97.5 / 99.1 / 101.5 / 103.8 / 106.2 / 109.3%**
- BIG合算: **1/343.1 → 1/274.2**
- REG: **1/504.12 → 1/422.81**
- ボーナス合算: **1/199.8 → 1/159.0**
- 50枚/1000円ベース: **39.44 / 40.23 / 41.06 / 42.34 / 43.64 / 45.53G**（パチマガスロマガ旧解析）
- S-BIG約350枚 / 赤7BIG約300枚 / 青7BIG約180枚 / REG約80枚 / 追跡チャンス約18枚。
- RT「追跡タイム」: **約+0.4枚/G、次回ボーナスまで**。
- 通常時 **999Gハマリ**で天井RT（P-WORLD）。当時記事は「約1000G/1000G消化」と表現。

### v0.7 resetBehavior — GS美神

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。999G天井カウンタ、CZ、追跡タイム滞在中の設定変更処理を本機固有資料で確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井カウンタ/CZ/RT状態引継ぎを直接確認できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井/CZ/RT/表示状態を直接確認できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常時999G天井は確定したが、設定変更でリセットか引継ぎかは未確定。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮天井/変更後天井値は未確認。
- `modeAfterReset`: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH_FOR_CZ_RT_STATE**。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: ガックン/初期出目/液晶/RT表示等を含め再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- `numericResetData.normalGameCountCeiling`: **999Gハマリで天井RT**。
- 公開朝一専用当選率・モード振分・恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### データ品質メモ — GS美神

- 当時グリーンべると、K-Navi、コミックナタリー、P-WORLD、パチマガスロマガ旧解析、5号機クロニクル、pacnkを横断。
- 性能コアは複数系統で高整合。50枚ベースは旧パチマガ単一主要解析値のため `ANALYSIS_SINGLE_OLD_MAJOR`。
- releaseDateは10/18納品予定 vs 10/19ホール導入予定の定義差を平均せず保持。
- 天井表現は999Gハマリ vs 約1000G/1000G消化。数え方差の可能性が高いが原表記を保持。
- resetBehavior欠損は機種名/型式/メーカーと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / 宵越し / ガックン / RT / CZ` を組み替え、複数資料系統を再探索後のみUNVERIFIEDとした。

## 414. 球児2

record:
- `docs/real_machine_db/machines/2009-10-18_kyuji2.md`

machine record commit:
- `d1c45aa8756ed3c9b176d0c80a6e43ac61f05652`

要点:
- SNKプレイモア / 2009-10-18納品開始 / ボーナス主体+天井RT+技術介入。
- ボーナス間922Gで天井RT。
- 設定変更でも天井までのゲーム数はリセットされないことを本機固有資料で確認。

## 413. KODA KUMI PACHISLOT LIVE IN HALL II

record:
- `docs/real_machine_db/machines/2009-10-13_koda-kumi-pachislot-live-in-hall-ii.md`

machine record commit:
- `e8ad79b24c5c27159a07be1555c11221fa3afaac`

## 412. ゴールデンベルE

record:
- `docs/real_machine_db/machines/2009-10_golden-bell-e.md`

machine record commit:
- `5d8618a6746013a8b86f03ad6ea56e547fec7d33`

## 411. スモモチャン

record:
- `docs/real_machine_db/machines/2009-10-01_sumomo-chan.md`

machine record commit:
- `980569219f8e56b568262bf7a317574c0c6a95a8`

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
1. **415件地点 / GS美神 極楽大作戦!!（2009-10-19ホール導入）まで収録**から再開。
2. `ハイパールーレット` / `パチスロ遠山の金さん` は引き続き10月中旬の具体日が取れれば時系列へ正しく挿入する。具体日を確定できなければ月/旬精度の不確実性を保持し、本線を止めない。
3. 次の同日未処理候補は **2009-10-19 `マジックスパイス`**。パチビーで10/19導入を確認済み。repo未登録を再確認して416候補とする。
4. 同じく **2009-10-19 `ダブルアタック`（オーイズミ）** はパチビーで10/19導入を確認済み。マジックスパイス後の候補。
5. `パチスロ エイリアンVSプレデター` はグリーンべると当時記事で **2009-10-25納品開始** と確認済みのため10/19群へ混ぜない。
6. 各候補はrepo未登録・導入日を再確認してから、性能コア＋v0.7 resetBehaviorを同時収集する。
7. 欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧まで十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。競合値は平均せず `CONFLICT`。

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

- 415 GS美神 極楽大作戦!!: `docs/real_machine_db/machines/2009-10-19_gs-mikami-gokuraku-daisakusen.md`
- machine record commit: `b5b1570cde63e3dce5411d001adbc47570838e7e`
- 本 `LATEST_HANDOFF.md` を415件地点へ更新。
