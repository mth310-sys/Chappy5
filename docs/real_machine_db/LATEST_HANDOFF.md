# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時の最新mainは **404件 `シークレット・プリンセス`** まで進行済みだったため、過去会話の400件地点には戻らず404を正本として継続。
- 2009-09-01〜09-06境界と9/7群を監査し、repo未登録のパラジェーピー **`スーパーアイムマジックEX`** を確認。性能コア＋v0.7 resetBehaviorを **405** として追加。
- 途中の境界再監査で `イケイケめんそーれ-30` が検索上未登録に見えたが、実ファイルと履歴を再取得して **既存402（commit 9e5bdf1898752bcc0b638ba4341ba87d4e19954c）** と確認。重複追加しなかった。

## 405. スーパーアイムマジックEX

record:
- `docs/real_machine_db/machines/2009-09-07_super-im-magic-ex.md`

machine record commit:
- `063ca9857c16fe9268798cf4d7f54218cad6f2ec`

要点:
- manufacturer: **パラジェーピー（PARA JP）**
- formalModelName: **スーパーアイムマジック EX**（検定通過機種名として後年整理資料で確認）
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2009-09-07**（2009-08-31時点の当時導入一覧。複数後年DBは2009年9月の月精度）
- generation: **5号機**
- systemType: **ノーマル / ボーナス主体 / 完全告知 / BIG+REG**
- BIG: **1/287.44 → 1/266.41**
- REG: **1/455.11 → 1/268.59**
- 合算: **1/176.17 → 1/133.75**
- 50枚ベース: **35.91 / 35.91 / 35.92 / 36.15 / 36.87 / 37.93G**
- BIG約**312枚**、REG約**104枚**。
- 機械割は5号機クロニクル/pacnk系の約 **96.8〜108.1%** と、旧パチマガスロマガのシミュレート **95.42〜105.79%** が競合。設定6で約2.3pt差があり単純丸めではないため平均せずCONFLICT保持。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_CONFLICT_AND_RESET_DETECTION_UNVERIFIED`。

### v0.7 resetBehavior — スーパーアイムマジックEX

- pacnkは**天井機能非搭載**、旧パチマガスロマガも「攻め時・ヤメ時→特にナシ」。ゲーム数天井/リセット短縮天井は `NOT_APPLICABLE`。
- 公開された通常ゲーム数モード、CZ、ART/AT、朝一専用モードは確認されず、該当範囲は `NOT_APPLICABLE / NONE_CONFIRMED`。
- 単純電源OFF→ONと設定変更の差、ガックン/初期出目/告知ランプ等による変更判別は、本機固有直接資料を再探索しても確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- 後年の個人所有実機記事に「リセットすると高確率で100G以内のモーニング」とする記述があるが、同記事系列は当該個体について裏物/基板改変を疑う文脈を明記している。**純正実機のresetBenefitsには採用せず `REJECTED_EVIDENCE`** としてレコードに残した。
- 純正機の公開朝一当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA=COMPLETE_FOR_CEILING_MODE_SCOPE_WITH_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

## 404. シークレット・プリンセス（直前）

record:
- `docs/real_machine_db/machines/2009-09-01_secret-princess.md`

machine record commit:
- `bc6f93e4cb2ad38c4ea79044b41002e7056ad6a9`

- releaseDateはK-Navi 2009-09-01 / 当時導入一覧2009-09-07でCONFLICT。
- ART「デートタイム」初当たり **1/401.96 → 1/271.76**、純増約**+2.1枚/G**。
- P-WORLDは天井搭載分類だが具体G数/発動条件、50枚ベース、設定変更/据え置き/単純電断処理は十分な再探索後も未確定。

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
1. **405件地点 / スーパーアイムマジックEXまで完了**から再開。
2. **2009-09-07同日群を最終監査**。シークレット・プリンセスは9/1/9/7 CONFLICT、スーパーアイムマジックEXは9/7主値。メーカー別一覧・型式・当時導入一覧を再確認し、同日未登録機を飛ばしていないか閉じる。
3. その後 **2009-09-08〜09-27を日付境界監査**。月精度だけの機種を具体日へ誤配置しない。K-Navi/P-WORLD/当時業界記事/メーカー一覧/古い導入一覧を横断し、次の未処理機を具体日順に確定する。
4. 先行候補として当時導入一覧に **2009-09-28 `デコトラの鷲`（大都技研）** があるが、9/8〜27の未処理機がないことを確認するまで先に進まない。
5. シークレット・プリンセスの天井数値・50枚ベース、スーパーアイムマジックEXの純正reset-specific起動挙動は、後続QAで直接資料が見つかった場合のみ補完する。推定値は入れない。

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

- 405 スーパーアイムマジックEX: `docs/real_machine_db/machines/2009-09-07_super-im-magic-ex.md`
- machine record commit: `063ca9857c16fe9268798cf4d7f54218cad6f2ec`
- 既存402 イケイケめんそーれ-30の重複回避確認: commit `9e5bdf1898752bcc0b638ba4341ba87d4e19954c`
- 本 `LATEST_HANDOFF.md` を405件地点へ更新。
