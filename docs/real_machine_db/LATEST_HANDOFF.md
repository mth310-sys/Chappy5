# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時は393件 `パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」` まで完了済みだったため393を正本として継続。
- 2009-07-21同日群と2009-07-22〜31を再監査。ALL7の7/27群はパチンコのみで、今回追加可能な未登録パチスロを確認できず7月を閉じた。
- 2009年8月へ進み、最古の安全な未処理機としてアリストクラート `絶対衝激～PLATONIC HEART～` を性能コア＋v0.7 resetBehavior付きで **394** として追加。

## 394. 絶対衝激～PLATONIC HEART～

record:
- `docs/real_machine_db/machines/2009-08-03_zettai-shogeki-platonic-heart.md`

machine record commit:
- `d68f3af119807319e973fbd43643e2de89eb6659`

要点:
- manufacturer: **アリストクラートテクノロジーズ**
- formalModelName: **ゼッタイショウゲキA**
- inspectionNumber: **9S0409**
- releaseDate: **2009-08-03**（K-Naviホール導入開始）。P-WORLDは2009年7月の月表記、後年資料は2009年8月発売。具体日のホール導入を主値とし粒度差を保持。
- generation: **5号機**
- systemType: **A+ART / CZ絶対領域 + ストック型ART Platonic Time / パンク回避 / 天井ART**
- 機械割: **97.1 / 98.9 / 101.4 / 104.4 / 106.8 / 110.5%**。
- BIG: **1/376.6 → 1/299.3**、REG: **1/376.6 → 1/341.3**、合算: **1/188.3 → 1/159.46**。
- 基本獲得: 絶対BONUS約**210枚**、BATTLE BONUS/REGはP-WORLD同一ページ内で約**51枚 / 56枚**表記差を保持。
- ART純増: **約+1.1枚/G**。当時グリーンべるととP-WORLDで照合。
- 通常時**900G**消化で天井ART突入。
- 50枚ベースは初代2009年固有の直接値を十分再探索しても確定できず `UNVERIFIED_AFTER_RESEARCH`。2025年スマスロ復刻版の36.7G/50枚は流用しない。
- `coreStatus=PARTIAL_BASE_GAMES_UNVERIFIED`。

### v0.7 resetBehavior — 絶対衝激

- K-Naviが初代2009年機に **「宵越アリ」** を明記。據え置き時の前日ゲーム数を利用した宵越し天井狙いが成立する根拠として保存。
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時に900G天井カウンタ/内部モード/CZ・ARTストックをリセットか引継ぎか、初代固有の直接本文を今回確定回収できず。
- carryOverBehavior: **YOIGOSHI_AVAILABLE_ON_UNCHANGED_CONFIRMED**。ただし内部モード/ARTストックまで全て引継ぐとは拡張解釈しない。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONの天井/状態処理を初代固有資料で確定できず。
- gameCounterReset: **据え置き宵越し可 / 設定変更時UNVERIFIED**。
- ceilingAfterReset: 通常天井900G。設定変更時の短縮/起算変更は **UNVERIFIED_AFTER_RESEARCH**。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits: 据え置きなら宵越し天井狙い可。設定変更固有恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/ゲーム数挙動の本機固有判別を確定できず。
- 設定変更専用の公開朝一当選率・恩恵率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 2021年III、2025年スマスロ復刻、2025年IVのresetBehaviorは別機として混入させない。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_YOIGOSHI_CONFIRMED_SETTING_CHANGE_POWER_CYCLE_MODE_STATE_AND_DETECTION_UNVERIFIED`。

主要出典・取得日2026-09-02・信頼度はレコード本文へ保存。

## 直前mainの主な進捗

### 393. パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」
- `docs/real_machine_db/machines/2009-07-20_gundam3-meguriai-uchu.md`
- machine record commit: `556c91cd038a534617347f88f638906ed7cd1489`

### 392. ヴァンパイア
- `docs/real_machine_db/machines/2009-07-06_vampire-enterrise.md`

### 391. ビガーV
- `docs/real_machine_db/machines/2009-07-06_vigor-v.md`

### 390. パチスロうる星やつら2
- `docs/real_machine_db/machines/2009-07-06_urusei-yatsura2.md`

## resetBehavior遡及QA

進捗:
- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み。
- `格闘激戦区` v0.7補完済み。
- 性能コアの既存値/完了判定は変更せず、resetBehavior QAのみ別管理で進める。

## 次回再開地点

### 本線
1. **394件地点 / 2009-08-03 `絶対衝激～PLATONIC HEART～`まで完了**から再開。
2. 2009-08-03同日群を最終監査。現在の最優先未処理候補は **`つばさTAKEOFF`**。当時導入日資料で2009-08-03を確認済みだが、メーカー表記にコルモ/エマ等の揺れがあるため、正式メーカー・型式・具体導入日を複数資料で再確認してから395候補として処理する。
3. 同日群を閉じた後、2009-08-04〜16を境界監査し、漏れがなければ **2009-08-17 `真・女神転生` / `侍ジャイアンツ2`** 群へ進む。
4. その後2009-08-24群の `2027II`、`神たま～ARTやで!全員集合～`、`パチスロがんばれ!!ロボコン`、`めぞん一刻2` 等をrepo既存確認しながら時系列処理。
5. `サンサンハナハナ-30` はパイオニア公式2009年8月発売、当時グリーンべるとで **2009-08-30納品予定**まで確認済み。8月末群で具体日順を再確認する。

### resetBehavior遡及QA
1. **格闘激戦区まで補完済み**。
2. 次の実ファイル候補は `docs/real_machine_db/machines/2006-10_nangoku-musume-30.md`。開始時に最新mainを再走査し、resetBehavior未補完なら処理。
3. その後 `2006-10_spiderman2g.md` → `2006-10_surogenjin.md` の順で欠損確認。補完済みなら飛ばす。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 欠損判定前に機種名/型式/メーカー/シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。

## 今回の保存

- 394 絶対衝激～PLATONIC HEART～: `docs/real_machine_db/machines/2009-08-03_zettai-shogeki-platonic-heart.md`
- machine record commit: `d68f3af119807319e973fbd43643e2de89eb6659`
- 本 `LATEST_HANDOFF.md` を394件地点へ更新。
