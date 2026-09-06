# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **789**
- latestMachineAddedByChronology: **激闘！西遊記**（KPE）
- latestRecord: `docs/real_machine_db/machines/2014-01-06_gekitou-saiyuki.md`
- chronologicalFrontier: **2014-01-06**
- schema: **resetBehavior v0.7**
- status: **2014-01-06_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-01-06_kamen-rider-unlimited.md` を再読。
- INDEXは旧集約状態（19件）なので、README規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 788 / chronologicalFrontier 2014-01-06 / 01-06群OPEN。
- 前handoffの次の未処理候補 **「激闘！西遊記」（KPE）**を789件目として追加。
- 01-06同日群の横断監査中に、GitHub未登録の **「パチスロ 機動戦士ガンダム」（ビスティ）**を追加候補として検出。SANKYO公式機種アーカイブでは2014年1月・型式 `パチスロ 機動戦士ガンダムFW`、2014-01-06当日の導入報告資料も残るため、次回は具体日を最終照合してから790件目候補として優先処理する。
- よって2014-01-06群は **CLOSEDにせずOPEN維持**。

## 今回追加 — 激闘！西遊記

### identity / 性能コア

- manufacturer: **KPE**。
- modelName: **激闘！西遊記KT**。
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。
- hall start: **2014-01-06**（K-Navi / アタリ7）。
- industry delivery schedule: **2013-12-15納品開始予定**（グリーンべると / 娯楽産業）。納品予定日とホール導入日は分離。
- generation/system: **5号機 / AT / 疑似ボーナス / CZ / 天井選択**。
- 機械割: **97.0 / 98.5 / 100.3 / 104.8 / 110.2 / 115.0%**。
- 激闘！ボーナス初当たり: **1/149.9 / 145.3 / 142.5 / 137.5 / 134.2 / 126.3**。
- baseGamesPer50: 当時資料で **約26G/50枚** と **約25G/50枚**があり、平均せず `CONFLICT_BASE_APPROX_26_VS_25`。
- AT純増: **約3.0枚/G**。
- 激闘！ボーナス: **約50枚**。
- 青7 BIG: メーカー発表 **平均約300枚**。一部二次資料に約200枚表記があるため `CONFLICT_SECONDARY_BLUE_BIG_200` を保持。
- 赤7 BIG: **平均約200枚**。
- REG: **平均約50枚**。
- 通常時内部天井: **77G / 256G + 最大21G前兆**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更時は **ハマリ/天井ゲーム数CLEAR**。
- 当時解析では設定変更後に **77G天井が選択されやすくなる**。
- ただし77Gは通常時にも存在する内部天井であり、リセット時の固定77G短縮ではない。
- 設定変更時77G天井選択率の具体値は、機種名表記・型式名・「設定変更 / リセット / 朝一 / 77G / 天井振り分け / モード」等を組み替え、当時解析・古いDB・回顧資料まで再探索したが安全に復元できず **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時の天井G / 77G・256G選択 / 内部状態保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの電源OFF→ON時の天井G / 天井選択 / 状態保持契約も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の通常内部状態初期契約は **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン / 初期出目 / 表示等の確定的変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- reset benefitとして、設定変更後は77G天井側の選択率上昇による朝一早期当選期待があるが、具体率は推測しない。
- reset penaltyとして、設定変更で前日ハマリ進捗を失う。

## safeguards / conflicts

- 導入時期: **2013-12-15納品開始予定** と **2014-01-06ホール導入開始**を混同しない。本DBの時系列キーは具体的ホール導入日2014-01-06。
- baseGamesPer50: **約26G vs 約25G**。平均せずCONFLICT。
- 青7BIG: メーカー発表平均300枚を主値。二次資料の約200枚は消さずCONFLICT保持。
- 設定変更後の77G選択率UPを「必ず77G」と解釈しない。
- 後年KONAMIスマスロや別の西遊記系機種のリセット仕様を混入しない。

## 2014-01-06同日群

処理済み:
- **シティーハンター**（オリンピア） — 787件目。
- **パチスロ仮面ライダーUNLIMITED**（タイヨーエレック） — 788件目。
- **激闘！西遊記**（KPE） — 789件目。

除外確認:
- **トラック野郎**（ニューギン） — 当時業界記事 / P-WORLDでパチンコ `CRトラック野郎` と確認。パチスロ本線から除外。

未処理の追加候補:
- **パチスロ 機動戦士ガンダム**（ビスティ） — SANKYO公式アーカイブで2014年1月、型式 `パチスロ 機動戦士ガンダムFW` を確認。2014-01-06当日の導入報告資料あり。GitHub検索では未登録。次回、具体的ホール導入日をもう一段照合してから790件目候補として処理。

群は **OPEN**。ガンダムを処理した後、メーカー公式 / 業界導入一覧 / 当時解析DB / 古い新台カレンダーを最終横断監査してCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線789件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 789 / chronologicalFrontier 2014-01-06 / 01-06群OPEN** から開始。
2. 未登録候補 **「パチスロ 機動戦士ガンダム」（ビスティ）**について、2014-01-06の具体的ホール導入日を公式・業界・当時導入資料で最終照合する。
3. 同機が01-06確定なら790件目として性能コア + resetBehavior v0.7を収集。2014年版・型式 `パチスロ 機動戦士ガンダムFW` を対象とし、後年のユニコーン / SEED等を混入しない。
4. 01-06同日群を全メーカー横断で最終監査し、漏れがなければCLOSED。
5. CLOSED後は2014-01-07以降を時系列監査し、次の具体日アンカーへ前進。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
7. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### 激闘！西遊記
- KONAMI公式 機種アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2014/gekitosaiyuki/`
- グリーンべると 2013-10-15: `https://web-greenbelt.jp/00001157/`
- 娯楽産業 2013-10-16: `https://www.goraku-sangyo.com/kpe%EF%BC%8Fkpe%E3%83%BB%E9%AB%98%E7%A0%82%E8%B2%A9%E5%A3%B2%E3%80%80%E3%80%8C%E6%BF%80%E9%97%98%EF%BC%81%E8%A5%BF%E9%81%8A%E8%A8%98%E3%80%8D%E7%99%BA%E8%A1%A8/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7237`
- K-Navi: `https://p-kn.com/slot/1957/`
- アタリ7: `https://www.atari7.com/slot/date1428988533.php`
- パチマガスロマガ 機種TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/35/a.php`
- パチマガスロマガ AT突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/35/l.php`
- pacnk: `https://pacnk.com/slot/tools/sh_gekitosaiyuki.html`
- スロパチクエスト: `https://www.slopachi-quest.com/kisyubetsu/saiyuki/`
- 中一商事: `https://www.nakaiti.com/html/sKpe079.html`
- 5号機クロニクル KPE一覧: `https://5goki.com/kpe`
- 当時スペック整理（約26G/1000円）: `https://ameblo.jp/slostar/entry-11638010616.html`

### 01-06追加候補 — パチスロ 機動戦士ガンダム
- SANKYO公式 機種アーカイブ: `https://www.sankyo-fever.jp/history/machine_detail/id_717.php`
- ガンダム.info 2014年1月稼働告知: `https://www.gundam.info/news/games/news_games_20131119_9738p.html`
