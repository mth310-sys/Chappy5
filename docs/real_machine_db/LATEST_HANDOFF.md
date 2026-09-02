# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 今回開始時の最新mainは **406件 `リノNo.5`** まで進行済み。過去会話上の402件地点へ戻らず406を正本として継続した。
- 2009-09-07同日群および09-08〜09-13境界は直前handoffの監査結果を引継ぎ、repo未登録の **`ドリームJラッシュ`** を **407** として性能コア＋v0.7 resetBehavior同時収集した。
- 既存402 `イケイケめんそーれ-30`、404 `シークレット・プリンセス`、405 `スーパーアイムマジックEX`、406 `リノNo.5` は重複追加しない。

## 407. ドリームJラッシュ

record:
- `docs/real_machine_db/machines/2009-09-14_dream-j-rush.md`

machine record commit:
- `ea110e710f765172a403b6ad1ddffb1a9c746059`

要点:
- manufacturer: **ウィンネットテクノロジー / ラスター**
- formalModelName: **ぱちすろドリームジャック**
- inspectionNumber: **9S0344**
- releaseDate: **2009-09-14**（ALL7当時導入一覧の具体日。P-WORLDは2009年09月、2009-09-29付グリーンべるとは「納品は既に開始」）
- generation: **5号機**
- systemType: **ART主体 / パンク回避型 / ゲーム数管理ART**
- 50枚ベース: **20.27G/50枚・全設定共通**（旧パチマガスロマガ直接値）
- ART純増: **約+2.0枚/G**（P-WORLD/K-Navi/当時グリーンべると一致）
- ART初当たり時基本G数: **100 / 300 / 500G**。開始前ドリームチャレンジでゲーム数を賭けて増加可能。
- BIG: **1/32768・約448枚**。REG: **1/45.20・約42枚**。ボーナス合算約**1/45.13**。
- 設定別ART初当たりは十分再探索後も比較可能表を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- 機械割は大きくCONFLICT: P-WORLD **94/98/100/104/109/115%** vs 旧パチマガスロマガsimulation **97.33/98.71/100.44/102.52/105.26/107.93%**。平均しない。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_CONFLICT_ART_INITIAL_HIT_RESET_BEHAVIOR_PARTIAL`。

### v0.7 resetBehavior — ドリームJラッシュ

- 通常時に**3モード**、前兆モード移行後は最大32G前兆という基本構造はP-WORLD/K-Naviで確認。
- 旧パチマガスロマガの機種INDEXに**「攻め時・ヤメ時・設定変更時」専用項目の存在**までは確認できたが、現存検索結果から設定変更時本文を確定回収できなかった。
- 設定変更時の通常3モード再抽選/引継ぎ、前兆、ART潜伏、内部REG/JAC成立状態、据え置き、単純電源OFF→ONの扱いは `UNVERIFIED_AFTER_RESEARCH`。一般的5号機挙動から補完しない。
- 通常ゲーム数天井そのものを今回直接確認できず、`gameCounterReset=CEILING_GAME_COUNTER_NOT_CONFIRMED`、`ceilingAfterReset=NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用の朝一モード振り分け、短縮天井、ART/CZ当選率、恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ガックン/初期出目/セグ等による変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- 通常時の押し順/15枚役/JAC入賞ペナルティは存在するが、設定変更時固有の不利要素とは分離。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- `resetBehaviorQA=PARTIAL_AFTER_MULTI_SOURCE_RESEARCH_MODE_EXISTS_BUT_RESET_HANDLING_UNVERIFIED`。

## 406. リノNo.5（直前）

record:
- `docs/real_machine_db/machines/2009-09-07_rino-no5.md`

machine record commit:
- `d1e7948c4dcc4b8ca9e04aa01a55004a064b0a45`

- 50枚ベース **30.1 → 31.8G**、BIG約308枚、MIDDLE約155枚、SMALL約84/81枚CONFLICT。
- 機械割P_Style777 **97.5〜109.5%** vs CrankySeven **96.6〜110.5%** CONFLICT。
- 天井なし。設定変更/単純電断時の5GプチRT残状態と変更判別は直接根拠不足でUNVERIFIED。

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
1. **407件地点 / ドリームJラッシュまで完了**から再開。
2. **2009-09-14同日群を最終監査**。メーカー別一覧、P-WORLD月間一覧、当時導入一覧、型式資料で同日またはそれ以前の未処理パチスロがないか閉じる。
3. **2009-09-15〜09-27境界監査**。月精度しかない機種を具体日より前へ誤配置しない。
4. 現時点の先行候補は9月後半の **`デコトラの鷲`、`交響詩篇エウレカセブン`、`銀河英雄伝説`** 等。必ず具体納品/導入日とrepo既存有無を再確認し、最古の未処理機を408として処理する。
5. 既存レコードの欠損は後続QAで直接資料が見つかった場合のみ補完。推定値は入れない。

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

- 407 ドリームJラッシュ: `docs/real_machine_db/machines/2009-09-14_dream-j-rush.md`
- machine record commit: `ea110e710f765172a403b6ad1ddffb1a9c746059`
- 本 `LATEST_HANDOFF.md` を407件地点へ更新。
