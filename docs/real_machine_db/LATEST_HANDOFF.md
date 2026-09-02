# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **416件 `マジックスパイス`** まで進行。
- 415 `GS美神 極楽大作戦!!` 後の2009-10-19同日群を継続監査。
- `ハイパールーレット` / `パチスロ遠山の金さん` は2009年10月中旬までは確認済みだが具体日を高信頼確定できていないため、無理に日付固定せず保留継続。

## 416. マジックスパイス

record:
- `docs/real_machine_db/machines/2009-10-19_magic-spice.md`

machine record commit:
- `2287f03e356b0416a011932cf5b561ca685d12a8`

要点:
- manufacturer: **岡崎産業（STLYブランド）**
- releaseDate: **2009-10-19**（パチビーの導入日基準。グリーンべると当時記事は2009-10-18納品開始予定）
- generation: **5号機**
- systemType: **ボーナス + BRT（ボーナスリプレイタイム / ART・パンク回避型）**
- PSB: **1/1236.5 → 1/840.2**
- SB: **1/590.4 → 1/300.6**
- PSB+SB: **1/399.6 → 1/221.4**
- MG: **全設定1/46.2**
- ボーナス合算: **1/41.4 → 1/38.2**
- 50枚/1000円ベース: **29.2 / 29.3 / 29.4 / 29.8 / 30.2 / 30.9G**（パチマガスロマガ旧解析）
- BRT「MAGIC RUSH」: **約+0.6枚/G**。
- PSB後BRTロングはSB当選まで継続。メーカー発表平均1000枚。
- SB後BRTショートはパンクリプレイ成立まで継続。メーカー発表平均150枚。

### 機械割CONFLICT

- P-WORLD / パチビー掲載: **96.5 / 98.6 / 100.7 / 102.7 / 104.6 / 106.2%**
- パチマガスロマガ旧解析シミュレート: **96.01 / 98.41 / 100.95 / 102.08 / 103.50 / 105.12%**
- 定義/シミュレーション条件差の可能性があるため平均せず両系列保持。

### v0.7 resetBehavior — マジックスパイス

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。BRTロング/ショート、PSB/SB後状態、パンク回避状態の設定変更処理を本機固有資料で確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のBRT状態等の引継ぎを直接確認できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のBRT内部状態/表示復帰を直接確認できず。
- `gameCounterReset`: `NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED`。
- `ceilingAfterReset`: `NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED`。
- `modeAfterReset`: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH_FOR_BRT_STATE**。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一専用当選率/モード振分/恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### データ品質メモ — マジックスパイス

- 岡崎産業メーカー発表、グリーンべると当時記事、P-WORLD、パチビー、パチマガスロマガ旧解析、後年メーカー系アプリ紹介を横断。
- 性能コア主要確率は複数系統で高整合。
- 50枚ベースは旧パチマガ単一主要解析値のため `ANALYSIS_SINGLE_OLD_MAJOR`。
- formalModelName / approvalNumberは今回確定できず `UNVERIFIED_AFTER_RESEARCH`。
- releaseDateは10/18納品予定 vs 10/19導入の定義差として両方保持。
- resetBehavior欠損は機種名/メーカー/ブランドと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 宵越し / ガックン / BRT / MAGIC RUSH / パンク` を組み替え、複数資料系統再探索後のみUNVERIFIEDとした。

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
- 今回、repo検索/旧INDEXも再確認したが、検索indexからスロ原人直後の実ファイルを安全に一意特定できなかったため、推測で別機種をQA対象にしなかった。
- **次はrepo contents/treeを時系列順に再走査し、スロ原人直後の最初の `resetBehavior — v0.7` 未補完レコードから続行する。**
- 性能コアの既存COMPLETE_CORE/既存coreStatusは不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **416件地点 / マジックスパイス（2009-10-19）まで収録**から再開。
2. 同日未処理候補 **2009-10-19 `ダブルアタック`（オーイズミ）** を最優先。導入日とrepo未登録を再確認して417候補とする。
3. `パチスロ エイリアンVSプレデター` はグリーンべると当時記事で **2009-10-25納品開始** と確認済みのため10/19群へ混ぜない。
4. `ハイパールーレット` / `パチスロ遠山の金さん` は具体日を取れれば正しい時系列へ挿入。取れなければ月/旬精度の不確実性を保持し、本線を止めない。
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

- 416 マジックスパイス: `docs/real_machine_db/machines/2009-10-19_magic-spice.md`
- machine record commit: `2287f03e356b0416a011932cf5b561ca685d12a8`
- 本 `LATEST_HANDOFF.md` を416件地点へ更新。
