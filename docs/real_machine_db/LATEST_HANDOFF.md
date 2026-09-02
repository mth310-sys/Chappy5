# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 本リレー開始時の最新mainは382件 `サタデーナイトフィーバー` まで進行済み。過去会話の古い件数には戻らず382を正本として継続した。
- K-Navi 2009年6月全国一斉導入カレンダーを再確認し、2009-06-16〜21に新規パチスロ導入日は掲載されていない。表記揺れ・メーカー名・当時資料も再探索し、この境界で安全に追加できる具体日付き未処理機を今回確定できなかった。
- 2009-06-22のラスター `ぶっちゃけはっちゃけ大奥浪漫` はrepo検索で未登録を確認し、性能コア＋v0.7 resetBehaviorを **383** として追加。

## 383. ぶっちゃけはっちゃけ大奥浪漫

record:
- `docs/real_machine_db/machines/2009-06-22_oo-oku-roman.md`

要点:
- manufacturer: **ラスター**
- alternateNames: **大奥浪漫 / ぶっちゃけはっちゃけ 大奥浪漫**
- formalModelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate主値: **2009-06-22**。K-Navi全国一斉導入カレンダーと当時のパチスロ業界初まとめが一致。5号機クロニクルは2009/6で月整合。
- generation: **5号機**
- systemType: **A+RT / ボーナス+CZ+ループ型RT**
- settings: **1〜6**
- 機械割: **97.2 / 98.7 / 100.3 / 102.1 / 104.1 / 106.1%**。5号機クロニクルの回顧DB値。パチマガ旧解析PAYOUT欄は「現在調査中」で、別系統直接照合がないため `RETROSPECTIVE_SINGLE_SERIES`。
- BIG: **1/378.82 / 1/372.36 / 1/360.09 / 1/339.56 / 1/315.08 / 1/278.88**。
- REG: **1/524.29 / 1/492.75 / 1/442.81 / 1/431.16 / 1/374.49 / 1/278.88**。
- 合算: **1/219.92 / 1/212.09 / 1/198.59 / 1/189.96 / 1/171.11 / 1/139.44**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。パチマガ旧解析の1000円あたりゲーム数も「現在調査中」。
- BIG約**245枚**、REG約**70枚**。
- ボーナス後または通常時**777G消化**でCZ「好色チャンス」。CZから**15G / 37G / 10000G**の3種類RTへ分岐し、RT終了後は再度CZへ戻るループ型。
- 当時資料のRT純増目安は約**+0.7枚/G**。PAPIMOは3種類RT・ループ率70%以上を紹介。
- 通常時777Gはボーナス確定天井ではなく**CZ突入条件**として保存。
- `coreStatus=COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_PAYOUT_SINGLE_RETROSPECTIVE_SOURCE`。

### v0.7 resetBehavior — ぶっちゃけはっちゃけ大奥浪漫

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。777G進捗、CZ/RT処理を直接確定できず。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の777G進捗、CZ/RT残状態引継ぎを直接確定できず。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の777G進捗、CZ/RT復帰処理を直接確定できず。
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常777G→CZは確認済みだが、設定変更時リセット/引継ぎ本文なし。
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。リセット専用短縮値は確認できず。777GはCZ突入条件でありボーナス確定天井ではない。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/CZ表示等を含めて再探索したが本機固有の直接根拠なし。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- パチマガスロマガ機種トップに「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認したが、現存検索結果から具体本文を回収できないため推測しない。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_WITH_PRIMARY_RESET_FIELDS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH`。

欠損判定前の再探索:
- `ぶっちゃけはっちゃけ大奥浪漫` / `ぶっちゃけはっちゃけ 大奥浪漫` / `大奥浪漫` / `ラスター`
- 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 777G / 天井 / 天井短縮 / モード / CZ / 好色チャンス / 好色タイム / ガックン / 50枚 / 1000円 / ベース / 型式 / 検定番号
- K-Navi、当時業界アーカイブ、パチマガスロマガ旧解析、PAPIMO、5号機クロニクル、旧DB/回顧資料を横断。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存:
- K-Navi 2009年6月導入カレンダー
- パチスロ業界初まとめ（当時アーカイブ）
- パチマガスロマガ旧解析（基本システム / ボーナス確率 / 1000円ゲーム数 / 機種トップ）
- 5号機クロニクル
- PAPIMO

## 直前mainの主な進捗

### 382. サタデーナイトフィーバー
- `docs/real_machine_db/machines/2009-06-15_saturday-night-fever.md`
- machine record commit: `a3ba184e01b893fddfbeedc59d6de162658cd4b8`
- 性能コア＋v0.7 resetBehavior保存済み。

### 381. パチスロ「BON JOVI」
- `docs/real_machine_db/machines/2009-06-08_bon-jovi.md`
- machine record commit: `8a6fe6f186903aec297541fb308f1508b0540d09`
- 性能コア＋v0.7 resetBehavior保存済み。

### 380. 銀河豪華客船クイーンギャラクシア
- `docs/real_machine_db/machines/2009-06-08_queen-galaxia.md`
- machine record commit: `97c716263c67646776007237654094a0652eb971`
- 性能コア＋v0.7 resetBehavior保存済み。

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- 次回QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **383件地点 / 2009-06-22 `ぶっちゃけはっちゃけ大奥浪漫`まで完了**から再開。
2. 2009-06-23〜28をメーカー別一覧・当時業界記事・旧導入カレンダーで境界監査する。
3. 具体日付き未処理機がなければ **2009-06-29 `ワイルドドッグ`（パラジェーピー）** をrepo検索して384候補として性能コア＋v0.7 resetBehaviorを処理。
4. 6月29日同日群と6月30日の漏れ監査を閉じた後、2009年7月へ時系列接続する。
5. 過去月の月精度/納品日だけ判明している機種は具体日を推測挿入せず、別根拠が取れた時だけ遡及処理する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 383 ぶっちゃけはっちゃけ大奥浪漫: `docs/real_machine_db/machines/2009-06-22_oo-oku-roman.md`
- machine record commit: `a889b7665f0cc6ec45ed1a65b8ee5f6fa1208533`
- 本 `LATEST_HANDOFF.md` を383件地点へ更新。
