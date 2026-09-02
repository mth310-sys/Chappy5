# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新handoffは392件 `ヴァンパイア`。旧INDEXへ戻らず392を正本として継続。
- 2009-07-06同日群と2009-07-07〜20境界を監査。前handoff候補の `デンジャラッシュ7` は **CRパチンコ** と確認しパチスロ本線から除外。2009-07-20のHI-UP新パネルも既存機のパネル追加で新規機種としては追加しない。
- 次の安全な未処理パチスロとして山佐 `パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」` を性能コア＋v0.7 resetBehavior付きで **393** として追加。

## 393. パチスロ「機動戦士ガンダムIII～めぐりあい宇宙編～」

record:
- `docs/real_machine_db/machines/2009-07-20_gundam3-meguriai-uchu.md`

machine record commit:
- `556c91cd038a534617347f88f638906ed7cd1489`

要点:
- manufacturer: **山佐**
- formalModelName / inspectionNumber: 型式/検定番号まで検索語を変えて再探索したが、今回直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- releaseDate: **2009-07-20**（当時グリーンべると納品開始予定）。K-Naviは2009-07-21ホール導入、パチビーは2009-07-22導入。物流/ホール稼働の定義差として併記。
- generation: **5号機**
- systemType: **A+ART / REG（バトルチャンス）+次回REGまでART / パンク回避**
- BC合算: **1/89.5 / 1/89.5 / 1/88.9 / 1/88.9 / 1/88.3 / 1/87.9**（別当時資料の設定6は1/87.8、丸め差）。
- BC最大**63枚**。
- ART `Gエピソード`: **次回BCまで継続 / 純増約+1.2枚/G**。山佐公式・当時業界・解析DBで照合。
- 通常時は低確/通常/高確の内部状態あり。
- 通常救済: **ボーナス間782G後のBCで継続率87.5%ART**。ART突入抽選**12連続非当選後は以後ART突入率50%**。
- 50枚ベースは「1000円/50枚/ベース/コイン持ち」等で資料系統を変えて再探索したが比較可能な直接数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 機械割は **CONFLICT**。当時ホール系/後年整理の `96.9 / 98.6 / 100.7 / 105.3 / 110.5 / 119.9%` と、P-WORLD/パチビー系 `97.8 / 99.8 / 102.0 / 105.9 / 110.8 / 119.9%` が競合。平均化せず両系列保存。
- `coreStatus=PARTIAL_BASE_GAMES_UNVERIFIED_PAYOUT_CONFLICT`。

### v0.7 resetBehavior — ガンダムIII

- settingChangeBehavior: **設定変更後50%で高確スタート**。P-WORLDとパチビーで一致。
- modeAfterReset / stateAfterReset: **高確50%**を確認。残り50%の低確/通常内訳や朝一専用モードは `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: `resetHighStateStartRate=50%`。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の782G天井、12連続非当選救済、内部状態の引継ぎを本機固有資料で直接確定できず。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのカウンタ/内部状態/液晶開始状態を確定できず。
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更で782G天井カウンタが消去か引継ぎかは推測しない。
- ceilingAfterReset: 通常天井782G自体は確認済みだが、設定変更後の起算/短縮は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits: **50%高確スタート**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/天井挙動による本機固有判別を確定できず。
- 設定変更専用の公開朝一数値として **高確50%**を保存。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_HIGH_START_50_CONFIRMED_COUNTER_CARRY_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

主要出典・取得日2026-09-02・信頼度はレコード本文へ保存。

## 直前mainの主な進捗

### 392. ヴァンパイア
- `docs/real_machine_db/machines/2009-07-06_vampire-enterrise.md`
- machine record commit: `37a4d11eae38baea7e31fc72b5340572c57b7883`

### 391. ビガーV
- `docs/real_machine_db/machines/2009-07-06_vigor-v.md`
- machine record commit: `12b4e09098ad86fe8565e45cb77fac9740046b82`

### 390. パチスロうる星やつら2
- `docs/real_machine_db/machines/2009-07-06_urusei-yatsura2.md`

### 389. 七色未来
- `docs/real_machine_db/machines/2009-07-06_nanairo-mirai.md`

## resetBehavior遡及QA

進捗:
- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み。
- `格闘激戦区` v0.7補完済み。
- 性能コアの既存値/完了判定は変更せず、resetBehavior QAのみ別管理で進める。

## 次回再開地点

### 本線
1. **393件地点 / 2009-07-20納品開始 `ガンダムIII`まで完了**から再開。
2. K-Navi/ALL7上のホール導入日は2009-07-21なので、**2009-07-21同日群を最終監査**し、ガンダムIII以外の未登録パチスロがないか確認する。
3. その後 **2009-07-22〜31** をメーカー別/当時導入一覧/業界記事で境界監査する。ALL7の2009-07-27掲載群は現時点ではパチンコのみだが、ALL7単独で漏れなし確定にしない。
4. 7月残件がなければ **2009年8月**へ進む。`2027II`、`サンサンハナハナ-30` 等は発表日ではなく具体的な納品/導入日を再確認し、最古の未処理機から394件目へ進む。
5. `デンジャラッシュ7` はCRパチンコ、`サイボーグ009～未知なる加速へ～` もニューギンCRパチンコなので本線対象外。

### resetBehavior遡及QA
1. **格闘激戦区まで補完済み**。
2. 次の実ファイル候補は `docs/real_machine_db/machines/2006-10_nangoku-musume-30.md`。開始時に必ず最新mainを再走査し、resetBehavior未補完か実ファイル確認してから処理。
3. その後 `2006-10_spiderman2g.md` → `2006-10_surogenjin.md` の順で欠損確認。既に補完済みなら飛ばす。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 欠損判定前に機種名/型式/メーカー/シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
- resetBehavior QAは既存 `COMPLETE_CORE` を不用意に崩さず、性能と別のQA状態として更新。

## 今回の保存

- 393 ガンダムIII: `docs/real_machine_db/machines/2009-07-20_gundam3-meguriai-uchu.md`
- machine record commit: `556c91cd038a534617347f88f638906ed7cd1489`
- 本 `LATEST_HANDOFF.md` を393件地点へ更新。
