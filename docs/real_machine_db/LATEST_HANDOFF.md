# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepo実ファイル/直近mainコミット。
- 今回開始時の最新mainは **407件 `ドリームJラッシュ`** まで進行済み。過去会話上の405件地点へ戻らず407を正本として継続した。
- 2009-09-14同日群と2009-09-15〜09-27境界を再監査し、現時点で407より後かつ9/28より前に具体導入日を持つ未処理機は確認できなかった。
- repo未登録を確認した **`デコトラの鷲`** を **408** として性能コア＋v0.7 resetBehavior同時収集した。

## 408. デコトラの鷲

record:
- `docs/real_machine_db/machines/2009-09-28_dekotora-no-shu.md`

machine record commit:
- `eac3415de671921a42ba1fe7b85fe2c05e3d0360`

要点:
- manufacturer: **大都技研**
- formalModelName: **デコトラの鷲4**
- releaseDate: **2009-09-28**（パチビー具体導入日。P-WORLD/P_Style777は2009年9月）
- generation: **5号機**（P_Style777表記5.1号機）
- systemType: **A+ART / ナビ回数管理型ART / CZ / パンク回避型**
- ART純増: **約+1.6枚/G**（P-WORLD、パチビー、2009-07-27グリーンべると一致）
- 基本獲得: デコトラBIG約**30枚**、通常BIG約**204枚**、REG約**48枚**、ART1セット約**70枚**目安。
- ボーナス合算は設定1 **1/252** → 設定6 **1/225**（P_Style777）。
- 50枚ベースは十分な再探索後も直接値を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- ART設定別初当たりも直接比較表を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- 機械割はCONFLICT: P_Style777 **97.5/99.5/101.5/104.5/107.5/110.5%** vs pachirinko **96.3/98.2/99.9/103.9/107.4/111.1%**。平均しない。

### v0.7 resetBehavior — デコトラの鷲

- **重要直接確認: P_Style777当時解析に「設定変更でも天井ゲーム数は引き継ぐ」と明記。**
- 第1天井はチャンスゾーン間**999G**でART3セット以上。
- さらに999Gで第2天井、ART**7 or 10セット**。
- pachirinko掲載の第2天井振り分け: 設定1〜4は10個100%、設定5は7個6.2%/10個93.7%、設定6は7個25%/10個75%。単一解析値として保持。
- `gameCounterReset=CARRY_OVER_ON_SETTING_CHANGE`。
- `ceilingAfterReset=NO_RESET_SHORTENING_CONFIRMED; EXISTING_PROGRESS_CARRIED_OVER`。
- 前日ハマリ台は設定変更されても天井進捗が残るため、朝一客AI上の価値が残る。
- 通常時に低確/高確状態が存在するが、設定変更時の状態再抽選/引継ぎ、CZ、ARTストック、ART中状態は直接資料不足で `UNVERIFIED_AFTER_RESEARCH`。
- 単純電源OFF→ON時の処理、ガックン/初期出目/表示等による設定変更判別も `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため `NOT_APPLICABLE`。
- `resetBehaviorQA=PARTIAL_HIGH_VALUE_DIRECT_CEILING_CARRYOVER_CONFIRMED_OTHER_STATE_HANDLING_UNVERIFIED`。

## 407. ドリームJラッシュ（直前）

record:
- `docs/real_machine_db/machines/2009-09-14_dream-j-rush.md`

machine record commit:
- `ea110e710f765172a403b6ad1ddffb1a9c746059`

要点:
- ART純増約+2.0枚/G、50枚20.27G、ART初当たり時100/300/500G。
- 機械割 P-WORLD 94〜115% vs 旧パチマガ97.33〜107.93%でCONFLICT。
- 通常時3モードは確認、設定変更時のモード/状態処理は未確認。

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
1. **408件地点 / デコトラの鷲まで完了**から再開。
2. **2009-09-28同日群を最終監査**。メーカー別一覧、P-WORLD月間一覧、当時導入一覧、型式資料で同日またはそれ以前の未処理パチスロがないか閉じる。
3. 現時点の次候補は **`交響詩篇エウレカセブン`、`銀河英雄伝説`**。具体納品/導入日とrepo既存有無を再確認し、最古の未処理機を409として処理する。
4. 月精度しかない機種を具体日機より前へ誤配置しない。
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

- 408 デコトラの鷲: `docs/real_machine_db/machines/2009-09-28_dekotora-no-shu.md`
- machine record commit: `eac3415de671921a42ba1fe7b85fe2c05e3d0360`
- 本 `LATEST_HANDOFF.md` を408件地点へ更新。
