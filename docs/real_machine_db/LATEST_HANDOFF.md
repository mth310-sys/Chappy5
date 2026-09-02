# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 本リレー開始時の最新mainは **381件 `パチスロ「BON JOVI」`** まで進行済み。過去会話の378件地点には戻らず381を正本として継続した。
- K-Navi 2009年6月全国一斉導入カレンダーを再確認し、2009-06-09〜14に新規パチスロ導入日は掲載されていない。メーカー/型式/当時資料の表記揺れ検索も行い、この境界で安全に追加できる具体日付き未処理機を今回確定できなかった。
- 2009-06-15の **ビスティ `サタデーナイトフィーバー`** はrepo検索で未登録を確認し、性能コア＋v0.7 resetBehaviorを **382** として追加。

## 382. サタデーナイトフィーバー

record:
- `docs/real_machine_db/machines/2009-06-15_saturday-night-fever.md`

要点:
- manufacturer: **ビスティ**
- formalModelName: **サタデーナイトフィーバーF**
- inspectionNumber: **9S0150**
- releaseDate主値: **2009-06-15**。K-Navi全国一斉導入カレンダーとハズセが一致。SANKYOオンライン博物館は2009.06導入で月整合。
- generation: **5号機**
- systemType: **A+ART / ボーナス+CZ+ナビストックART**
- settings: **1 / 4 / 6 / H**
- メーカー発表PAYOUT系列: **95.7 / 99.0 / 104.7 / 109.5%**。パチマガスロマガ、P-WORLD、ハズセ、5号機クロニクルで照合。
- 黒BIG: 全設定 **1/8192.00**。
- 赤BIG: **1/481.88 / 1/451.97 / 1/428.34 / 1/378.82**。
- BIG合成: **1/455.11 / 1/428.34 / 1/407.06 / 1/362.08**。
- CB: **1/461.52 / 1/434.01 / 1/412.18 / 1/372.36**。
- ボーナス合成: **1/229.15 / 1/215.58 / 1/204.80 / 1/183.57**。
- 50枚ベース: **39.59 / 40.14 / 40.70 / 41.30G**。パチマガ旧解析の1000円あたりゲーム数直接値。別系統の同一設定別表は未照合のため `ANALYSIS_SINGLE_OLD_MAJOR`。
- BIG約**236枚**、CB約**40枚**。
- ART「トニータイム」: **1セット30G、約+1.0枚/G**。
- 上位ART「スーパートニータイム」: **33〜777G、約+1.0枚/G**。
- ボーナス後はCZ→トニーチャンス→ARTの2段階突破構造。ナビストックあり。
- P-WORLDは本機を「天井」搭載機として分類するが、現存公開本文から通常天井の具体G数/発動条件を確定できなかったため「天井なし」とせず欠損保持。
- `coreStatus=COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE_AND_CEILING_EXACT_VALUE_UNVERIFIED`。

### v0.7 resetBehavior — サタデーナイトフィーバー

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時の天井カウンタ、CZ/TC/ART、ナビストック処理を直接確定できず。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗・ナビストック・CZ/TC/ART引継ぎを直接確定できず。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗・ナビストック・CZ/TC/ART復帰処理を直接確定できず。
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。天井搭載分類は確認済みだが設定変更時カウンタ処理本文なし。
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。短縮天井/変更値の公開数値を確認できず。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶・CZ表示等を含めて再探索したが本機固有の直接根拠なし。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- パチマガスロマガ機種トップに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが、現存検索結果から具体本文を回収できないため推測しない。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_WITH_PRIMARY_RESET_FIELDS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH`。

欠損判定前の再探索:
- `サタデーナイトフィーバー` / `サタデー ナイト フィーバー` / `サタデーナイトフィーバーF` / `ビスティ` / `Bisty` / `9S0150`
- 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ナビストック / ガックン / 宵越し
- SANKYO公式博物館、P-WORLD、K-Navi、ハズセ、パチマガスロマガ旧解析、5号機旧DB/回顧資料を横断。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- SANKYOオンライン博物館
- K-Navi 2009年6月導入カレンダー
- ハズセ
- P-WORLD
- パチマガスロマガ旧解析（基本システム / 小役・1000円ゲーム数 / ボーナス確率・PAYOUT / 機種トップ）
- 5号機クロニクル

## 直前mainの主な進捗

### 381. パチスロ「BON JOVI」
- `docs/real_machine_db/machines/2009-06-08_bon-jovi.md`
- machine record commit: `8a6fe6f186903aec297541fb308f1508b0540d09`
- 性能コア＋v0.7 resetBehavior保存済み。

### 380. 銀河豪華客船クイーンギャラクシア
- `docs/real_machine_db/machines/2009-06-08_queen-galaxia.md`
- machine record commit: `97c716263c67646776007237654094a0652eb971`
- 性能コア＋v0.7 resetBehavior保存済み。

### 379. COBRA -THE SLOT-
- `docs/real_machine_db/machines/2009-06-01_cobra-the-slot.md`
- machine record commit: `f34cfb6e3f8db9ae0a944bd2b3eb5ca7df487197`
- 性能コア＋v0.7 resetBehavior保存済み。

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- 次回QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **382件地点 / 2009-06-15 `サタデーナイトフィーバー`まで完了**から再開。
2. 2009-06-16〜21をメーカー別一覧・当時業界記事・旧導入カレンダーで境界監査する。
3. 具体日付き未処理機がなければ **2009-06-22 `ぶっちゃけはっちゃけ大奥浪漫`（ラスター）** をrepo検索して383候補として性能コア＋v0.7 resetBehaviorを処理。
4. その後は6月23〜28の漏れ監査を挟み、 **2009-06-29 `ワイルドドッグ`（パラジェーピー）** へ接続。
5. 過去月の月精度/納品日だけ判明している機種は具体日を推測挿入せず、別根拠が取れた時だけ遡及処理する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 382 サタデーナイトフィーバー: `docs/real_machine_db/machines/2009-06-15_saturday-night-fever.md`
- machine record commit: `a3ba184e01b893fddfbeedc59d6de162658cd4b8`
- 本 `LATEST_HANDOFF.md` を382件地点へ更新。
