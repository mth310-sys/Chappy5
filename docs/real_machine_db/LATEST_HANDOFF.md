# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 作業開始ごとに最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 本リレー開始時の最新mainは384件 `ワイルドドッグ` まで進行済み。過去会話の古い件数には戻らず384を正本として継続した。
- 2009-07-01〜05を導入/納品/メーカー別資料で境界監査し、安全に追加できる具体日付き未処理パチスロを今回確定できなかったため2009-07-06群へ接続。
- 引継ぎ候補にあったニューギン `サイボーグ009～未知なる加速へ～` はALL7上では7/6一覧に現れるが、グリーンべると2009-05-19記事等で **CRパチンコ機** と確認。パチスロDB本線へ混入させず除外した。
- 2009-07-06 `スーパーセブン` はrepo検索で未登録を確認し、性能コア＋v0.7 resetBehaviorを **385** として追加。

## 385. スーパーセブン

record:
- `docs/real_machine_db/machines/2009-07-06_super-seven.md`

要点:
- manufacturer: **パイオニア**
- formalModelName: **スーパーセブン**
- inspectionNumber: **9S0317**
- releaseDate主値: **2009-07-06**。K-Navi/ALL7が一致。パチビーは2009-07-07、パイオニア公式は2009年7月発売のため1日差をCONFLICT保持。
- generation: **5号機**
- systemType: **ボーナス+RT / 準完全告知 / 技術介入**
- settings: **1〜6**
- 機械割主系列: **95.9 / 97.7 / 98.8 / 102.9 / 106.0 / 109.4%**（P-WORLD/pacnk）。別回顧表のみ設定3=99.8%のため `CONFLICT_SETTING3_ONLY`。
- BIG: **1/336.10 / 1/319.70 / 1/304.80 / 1/290.00 / 1/276.50 / 1/256.00**。
- REG: **1/697.20 / 1/655.40 / 1/618.30 / 1/585.10 / 1/555.40 / 1/512.00**。
- ボーナス合算: **1/226.7 / 1/214.5 / 1/203.8 / 1/193.9 / 1/184.3 / 1/170.7**。
- 50枚ベース: **37.81 / 37.82 / 37.81 / 38.14 / 38.81 / 38.82G**。
- BIG約**309枚**、REG約**104枚**。
- RT「フルーツゲーム」: **60G / 約+0.8枚/G**。通常時の特殊リプレイから直接突入。
- 通常ゲーム数天井、ゲーム数解除、ART/AT、通常長期モードは確認なし。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_AND_RELEASE_DATE_CONFLICT`。

### v0.7 resetBehavior — スーパーセブン

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガ旧解析INDEXに「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが本文未回収。RT残G/内部状態が変更時にクリアか維持か推測しない。
- carryOverBehavior: **UNVERIFIED_RT_STATE_AFTER_RESEARCH**。ゲーム数天井/通常モードの引継ぎ対象はないが、前日フルーツゲーム途中の残G据え置き挙動は直接資料なし。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のRT残G、初期出目、告知状態を直接確定できず。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNTED_CEILING_CONFIRMED**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。
- modeAfterReset: **NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_MODE_CONFIRMED**。
- stateAfterReset: **UNVERIFIED_RT_STATE_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/告知ランプ/RT挙動での本機固有判別根拠なし。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetBehaviorQA=COMPLETE_RESEARCH_PASS_RT_RESET_DETAILS_UNVERIFIED`。

欠損判定前の再探索:
- `スーパーセブン` / `パイオニア` / `9S0317`
- 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / フルーツゲーム / ガックン / 初期出目 / 50枚 / 1000円 / ベース
- パイオニア公式、P-WORLD、K-Navi、ALL7、パチマガスロマガ旧解析、パチビー、pacnk、当時/回顧資料を横断。

主要出典はレコード本文にURL・取得日2026-09-02・信頼度を保存。

## 直前mainの主な進捗

### 384. ワイルドドッグ
- `docs/real_machine_db/machines/2009-06-29_wild-dog.md`
- machine record commit: `537e0ef9115e2362f2c46c8070c3cb4cb245efc8`
- 性能コア＋v0.7 resetBehavior保存済み。

### 383. ぶっちゃけはっちゃけ大奥浪漫
- `docs/real_machine_db/machines/2009-06-22_oo-oku-roman.md`
- machine record commit: `a889b7665f0cc6ec45ed1a65b8ee5f6fa1208533`

## resetBehavior遡及QA

- `バーグラー` v0.7補完済み。
- `快盗天使ツインエンジェル` v0.7補完済み（commit `b7e55838c187baa7bb5e84f8416deb0bb0c4d779`）。
- 次回QAを行う場合はmachine treeを最新mainで再走査し、最初のresetBehavior未補完レコードを実ファイル確認してから処理する。一般論から補間しない。

## 次回再開地点

### 本線
1. **385件地点 / 2009-07-06 `スーパーセブン`まで完了**から再開。
2. 2009-07-06同日群をパチスロだけに再分離し、repo既存有無を確認して未処理機を続ける。
3. ALL7で確認済みの同日候補: **`ドキッと!ビキニパイ` / `ハイアップマシンガンバージョン` / `パチスロ エマニエル～夜蝶Ver.～`**。
4. 別の当時導入一覧では **`七色未来` / `うる星やつら2` / `ヴァンパイア` / `ビガーV`** も2009-07-06候補として確認。日付根拠・メーカー・既存レコード有無を個別監査し、未処理なら同日群へ追加する。
5. **`サイボーグ009～未知なる加速へ～` は2009年ニューギンCRパチンコ機なので除外済み。** 同名/後年のパチスロ サイボーグ009と混同しない。
6. 7/6群を閉じた後、ALL7では次の具体日候補として2009-07-13 `デンジャラッシュ7`、2009-07-21 `機動戦士ガンダム3～めぐりあい宇宙編～` 等が見えるが、まず7/7〜12境界をメーカー別/当時導入資料で監査する。
7. 過去月の月精度/納品日だけ判明している機種は具体日を推測挿入せず、別根拠が取れた時だけ遡及処理する。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo検索して未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。

## 今回の保存

- 385 スーパーセブン: `docs/real_machine_db/machines/2009-07-06_super-seven.md`
- machine record commit: `dc731bc64bb72c29b5af813c9642e1ba1998d20d`
- 本 `LATEST_HANDOFF.md` を385件地点へ更新。
