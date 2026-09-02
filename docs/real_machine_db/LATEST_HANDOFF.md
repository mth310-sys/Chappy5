# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 本リレー開始時の最新mainは383件 `ぶっちゃけはっちゃけ大奥浪漫` まで進行済み。過去会話の古い件数には戻らず383を正本として継続した。
- K-Navi 2009年6月全国一斉導入カレンダーを再確認し、2009-06-23〜28に新規パチスロ導入日は掲載されていない。表記揺れ・メーカー名・当時資料も再探索し、この境界で安全に追加できる具体日付き未処理機を今回確定できなかった。
- 2009-06-29のパラジェーピー `ワイルドドッグ` はrepo検索で未登録を確認し、性能コア＋v0.7 resetBehaviorを **384** として追加。

## 384. ワイルドドッグ

record:
- `docs/real_machine_db/machines/2009-06-29_wild-dog.md`

要点:
- manufacturer: **パラジェーピー**
- alternateNames: **ワイルドドッグX**（発売前資料で確認。ただし正式型式名かは未確定）
- formalModelName / inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate主値: **2009-06-29**。K-Navi全国一斉導入開始。P-WORLD/5号機クロニクルは2009年6月で月整合。当時業界初まとめには2009/6/中へ納期前倒しとの記録があるため発売/物流と全国一斉導入の差として保持。
- generation: **5号機**
- systemType: **ノーマル / Aタイプ / 同時成立あり**
- settings: **1〜6**
- 機械割は **CONFLICT**。
  - パチマガ旧解析シミュレート: **95.78 / 96.76 / 98.80 / 101.17 / 104.56 / 106.11%**
  - 5号機クロニクル: **96.5 / 97.7 / 99.8 / 102.2 / 106.2 / 107.9%**
  - 条件差を直接確定できないため平均せず双方保持。
- BIG: **1/287.44 / 1/281.27 / 1/281.27 / 1/271.93 / 1/268.59 / 1/266.41**。
- REG: **1/455.11 / 1/442.81 / 1/348.60 / 1/321.25 / 1/268.59 / 1/268.59**。
- 合算: **1/176.17 / 1/172.01 / 1/155.67 / 1/147.27 / 1/134.30 / 1/133.75**。
- 50枚ベース: **35.10 / 35.10 / 35.11 / 35.32 / 36.01 / 37.02G**。
- BIG約**312枚**、REG約**104枚**。規定払い出しは345枚/105枚。
- RT/ART/AT/CZ/通常ゲーム数天井は確認されないノーマル機。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_CONFLICT`。

### v0.7 resetBehavior — ワイルドドッグ

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のリール/初期出目等、本機固有挙動は直接確定できず。
- carryOverBehavior: **NO_GAME_COUNTED_CEILING_OR_MODE_TO_CARRY_CONFIRMED**。通常ゲーム数天井/CZ/RT/ART/ゲーム数モードは確認なし。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のリール出目、告知状態、設定変更時との差は直接資料なし。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNTED_CEILING_CONFIRMED**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。
- modeAfterReset: **NOT_APPLICABLE_NO_NORMAL_MODE_SYSTEM_CONFIRMED**。
- stateAfterReset: **NOT_APPLICABLE_NO_CZ_RT_ART_STATE_CONFIRMED**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/表示等を再探索したが本機固有根拠なし。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_NORMAL_TYPE_WITH_HARD_RESET_DETAILS_UNVERIFIED`。

欠損判定前の再探索:
- `ワイルドドッグ` / `ワイルドドッグX` / `パラジェーピー`
- 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 初期出目 / 50枚 / 1000円 / ベース / 型式 / 検定番号
- K-Navi、P-WORLD、パチマガスロマガ旧解析、5号機クロニクル、パチスロ業界初まとめ、2009年当時ブログ/回顧資料を横断。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存。

## 直前mainの主な進捗

### 383. ぶっちゃけはっちゃけ大奥浪漫
- `docs/real_machine_db/machines/2009-06-22_oo-oku-roman.md`
- machine record commit: `a889b7665f0cc6ec45ed1a65b8ee5f6fa1208533`
- 性能コア＋v0.7 resetBehavior保存済み。

### 382. サタデーナイトフィーバー
- `docs/real_machine_db/machines/2009-06-15_saturday-night-fever.md`
- machine record commit: `a3ba184e01b893fddfbeedc59d6de162658cd4b8`

### 381. パチスロ「BON JOVI」
- `docs/real_machine_db/machines/2009-06-08_bon-jovi.md`
- machine record commit: `8a6fe6f186903aec297541fb308f1508b0540d09`

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- 次回QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **384件地点 / 2009-06-29 `ワイルドドッグ`まで完了**から再開。
2. 2009-06-29同日群と2009-06-30をメーカー別一覧・当時業界記事・旧導入カレンダーで最終監査する。
3. 6月末に未処理機がなければ2009年7月へ接続。ALL7では現時点で最古の具体日付き7月パチスロ群は **2009-07-06 `サイボーグ009～未知なる加速へ～` / `スーパーセブン` / `ドキッと!ビキニパイ`**。repo検索で既存有無を確認し、同日群の最古未処理機を385候補として処理する。
4. 2009-07-01〜05に別の具体日付き未処理機がないか、K-Navi/P-WORLD/メーカー公式/当時業界記事で境界監査してから7月6日群へ進む。
5. 過去月の月精度/納品日だけ判明している機種は具体日を推測挿入せず、別根拠が取れた時だけ遡及処理する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 384 ワイルドドッグ: `docs/real_machine_db/machines/2009-06-29_wild-dog.md`
- machine record commit: `537e0ef9115e2362f2c46c8070c3cb4cb245efc8`
- 本 `LATEST_HANDOFF.md` を384件地点へ更新。
