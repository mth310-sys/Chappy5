# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近mainを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 本線は **417件 `ダブルアタック`** まで進行。
- 416 `マジックスパイス` 後の2009-10-19同日群を継続監査し、HANDOFF指定の未処理候補 `ダブルアタック` を追加した。
- `ハイパールーレット` / `パチスロ遠山の金さん` は2009年10月中旬までは確認済みだが具体日を高信頼確定できていないため、無理に日付固定せず保留継続。

## 417. ダブルアタック

record:
- `docs/real_machine_db/machines/2009-10-19_double-attack.md`

machine record commit:
- `d401b48e8865ea7b2d7af7a1c59f7d7420c81f0e`

要点:
- manufacturer: **オーイズミ**
- formalModelName: **ダブルアタック2X**
- approvalNumber: **9S0581**
- releaseDate: **2009-10-19**（パチビー導入日。P-WORLDは2009年10月精度）
- generation: **5号機**
- systemType: **ボーナス + ART / CZ・333G以降高確率状態**
- 赤7DC: **1/119.59 → 1/99.90**
- 青7DC: **1/595.78 → 1/840.21**
- 合算: **1/99.60 → 1/89.29**
- 赤7/青7とも基本獲得約38枚。
- ART「ラッシュタイム」: **約+1.5枚/G**。
- ボーナス後ダブルアップは最大5回成功で初期ARTゲーム数を最大32倍。
- 通常時 **333G以降は次回ボーナスまで高確率状態**となり、ボーナス中の大量ART獲得期待が上がる。

### 機械割CONFLICT

- メーカー発表値（P-WORLD/パチマガ掲載）: **98.0 / 99.3 / 101.0 / 103.4 / 105.6 / 110.1%**
- パチマガスロマガ旧解析シミュレート: **98.58 / 99.64 / 101.19 / 102.89 / 104.51 / 108.03%**
- 設定4〜6を中心に単純丸め差ではないため平均せず両系列保持。

### baseGamesPer50

- `ダブルアタック / ダブルアタック2X / オーイズミ` と `50枚 / 1000円 / ベース / コイン持ち / 回転数 / 小役確率` を組み替え、P-WORLD、パチビー、パチマガスロマガ旧DB、回顧資料を再探索したが比較可能な直接値を確定できず。
- 小役確率から推定せず `UNVERIFIED_AFTER_RESEARCH`。

### v0.7 resetBehavior — ダブルアタック

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。333G以降高確率状態、通常ゲーム数、ART残G、ボーナス後ダブルアップ状態の設定変更処理を本機固有資料で確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の333G進捗/高確率状態/ART残G引継ぎを直接確認できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の333G進捗、高確率状態、ART残G、表示状態を直接確認できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。333G閾値そのものは確定したが、設定変更でカウンタをリセットするか引き継ぐかは未確定。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮/変更値は未確認。
- `modeAfterReset`: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH_FOR_HIGH_PROBABILITY_AND_ART_STATE**。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機）。
- `resetBenefits` / `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一専用当選率/モード振分/恩恵率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 2024年 `Lダブルアタック2 with OZS-1000&RAPHAEL` のリセット仕様は別機種のため一切流用していない。

### データ品質メモ — ダブルアタック

- パチビー、P-WORLD、K-Navi、パチマガスロマガ旧DB/旧解析、後年回顧資料を横断。
- 導入日、型式、検定番号、主要ボーナス確率、ART純増、基本獲得は複数系統で高整合。
- 50枚ベースだけは直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- resetBehavior欠損は機種名/型式/メーカーと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 333G / 高確 / 宵越し / ガックン / ART / ラッシュタイム` を組み替え、複数資料系統を再探索後のみUNVERIFIEDとした。

## 416. マジックスパイス

record:
- `docs/real_machine_db/machines/2009-10-19_magic-spice.md`

machine record commit:
- `2287f03e356b0416a011932cf5b561ca685d12a8`

要点:
- 岡崎産業（STLYブランド） / 2009-10-19。
- ボーナス + BRT。50枚ベース29.2〜30.9G、BRT約+0.6枚/G。
- 機械割はP-WORLD/パチビー系列96.5〜106.2%と旧パチマガシミュレート96.01〜105.12%がCONFLICT。

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
1. **417件地点 / ダブルアタック（2009-10-19）まで収録**から再開。
2. 2009-10-19同日群を最終監査し、未処理具体日機がなければ **2009-10-20〜10-24** を境界監査。
3. `パチスロ エイリアンVSプレデター` はグリーンべると当時記事で **2009-10-25納品開始** と確認済み。10/19群・10/20〜24に未処理がなければ次の有力候補として処理する。
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

- 417 ダブルアタック: `docs/real_machine_db/machines/2009-10-19_double-attack.md`
- machine record commit: `d401b48e8865ea7b2d7af7a1c59f7d7420c81f0e`
- 本 `LATEST_HANDOFF.md` を417件地点へ更新。
