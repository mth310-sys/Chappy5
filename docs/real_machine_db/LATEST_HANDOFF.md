# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **792**
- latestMachineAddedByChronology: **バジリスク～甲賀忍法帖～絆**（エレコ）
- latestRecord: `docs/real_machine_db/machines/2014-01-27_basilisk-kizuna.md`
- chronologicalFrontier: **2014-01-27**
- schema: **resetBehavior v0.7**
- status: **2014-01-27_GROUP_CLOSED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-01-20_umineko-no-naku-koro-ni.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 791 / chronologicalFrontier 2014-01-20 / 01-20群CLOSED。
- 前handoffどおり **2014-01-21～01-26** を再監査。ALL7 2014年1月導入一覧では01-20の次の具体日付きパチスロは01-27「バジリスク～甲賀忍法帖～絆」で、01-21～26に具体日付き未登録パチスロを今回固定できなかったため境界を `CLOSED_FOR_CURRENT_RESEARCH` とした。
- **2014-01-27「バジリスク～甲賀忍法帖～絆」（エレコ）**を792件目として追加。
- ALL7の01-27同日一覧にはパチンコ「ぱちんこCR世紀末銀狼伝サガ」と本機が掲載される。今回の横断監査では本機以外の具体日付き未登録パチスロを確認できず **2014-01-27群CLOSED**。

## 今回追加 — バジリスク～甲賀忍法帖～絆

### identity / 性能コア

- manufacturer: **エレコ**。
- modelName: **バジリスク絆MK**。
- approvalNumber: **3S0950**。
- hall start: K-Navi / HAZUSE / ALL7 / 一撃 **2014-01-27**。グリーンべるとの2013-11-29記事も2014年1月下旬納品開始予定として整合。
- generation/system: **5号機 / 擬似ボーナス + AT**。
- payout: **97.3 / 98.6 / 102.0 / 106.6 / 112.1 / 119.2%**を複数解析一致値として採用。一部二次資料の精密系列 **97.46 / 98.43 / 102.07 / 106.46 / 111.90 / 118.82%**は `CONFLICT_MINOR_PAYOUT_DECIMAL_SERIES` として保持。
- 通常時BC初当たり: **1/139.4 / 138.7 / 137.9 / 130.6 / 130.1 / 118.6**。
- AT初当たり: **1/441.3 / 377.9 / 403.4 / 303.9 / 343.1 / 245.1**。
- baseGamesPer50: **約31G/50枚**。
- AT純増: **約2.8枚/G**。
- BC: **ベルナビ8回・約40枚**。PBC: **ベルナビ20回・約100枚 + AT確定**。
- AT「バジリスクタイム」: **1セット約40G**、追想の刻+争忍の刻、ループ率25/33/50/66/80%系。
- 天井: **BC間500GでBC** / **最大10スルー後11回目BCでAT**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更時は **BC間500G天井をリセット**。
- **BCスルー回数天井もリセットして再抽選**。
- 内部モードを再抽選。設定変更時モード振り分けはA約40～43%、B約25%、C約25%、**D 7%、E 1%**。D/Eなら次回BCでAT確定。
- 設定変更時のBC回数天井は **1/3/5/7/9/10/11回**へ再抽選。**1回天井8.0%（全設定共通）**。
- 設定変更時は全設定共通で **高確以上29.4%**。公開G数内訳もレコードへ保存。
- 据え置き時は攻略資料で **BC間G数・スルー回数引継ぎ**を確認。内部モード/状態まで含む完全契約は `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ONは本機専用朝一表で **天井・内部状態引継ぎ**を確認。モード/テーブルの完全直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- ガックンは **変更判別に使えない**とする本機専用解析を確認。実用上は前日込み天井/スルー挙動が主要判別材料。
- 設定変更専用のBC間500Gより短い固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 後継「絆2」「天膳BLACK EDITION」の有利区間/電源仕様は別機種のため流用禁止。

## conflicts / safeguards

- 機械割の標準系列と一部精密系列は平均化せず `CONFLICT_MINOR` 保持。
- BC間500G天井とBC回数天井を混同しない。設定変更で双方リセットされるが、BC間天井自体が短縮されるわけではない。
- 設定変更時29.4%は高確以上スタート総率。高確G数別表の条件付き内訳と全体比を混在させない。
- 2020年「バジリスク絆2」、2023年「Lバジリスク絆2 天膳 BLACK EDITION」の情報は初代へ流用しない。

## 2014-01-27同日群 — CLOSED

処理済み:
- **バジリスク～甲賀忍法帖～絆**（エレコ） — 792件目。

除外確認:
- **ぱちんこCR世紀末銀狼伝サガ**（サミー） — パチンコ機。

## 2014-01-28以降の境界

- 次の具体日付き候補として **2014-02-03「パチスロ輪廻のラグランジェ」（Sammy）**、**2014-02-03「主役は銭形2」（オリンピア）**を先行確認。
- 次回は **2014-01-28～02-02** をメーカー公式 / 業界導入一覧 / 当時解析DB / 古い新台カレンダーで境界監査してから、02-03同日群を処理する。
- 02-03群の先頭順は導入一覧・メーカー横断監査で再確定し、同日未処理を飛ばさない。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線792件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 792 / chronologicalFrontier 2014-01-27 / 01-27群CLOSED** から開始。
2. **2014-01-28～02-02** をメーカー公式 / 業界導入一覧 / 当時解析DB / 古い新台カレンダーで境界監査する。
3. 未登録パチスロがなければ **2014-02-03同日群**へ進む。先行確認済み候補は「パチスロ輪廻のラグランジェ」（Sammy）、「主役は銭形2」（オリンピア）。
4. 02-03同日群は全メーカー横断で再監査し、時系列順/同日順を確定してから登録する。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### バジリスク～甲賀忍法帖～絆
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/6230/greenbelt`
- K-Navi: `https://p-kn.com/slot/1983/`
- ALL7 2014年1月導入一覧: `https://www.all7.jp/plans/index/2014/01`
- HAZUSE: `https://hazuse.com/machine/pachislot/SX0055/`
- 一撃: `https://1geki.jp/slot/basilisk3/`
- 一撃 BC概要: `https://1geki.jp/slot/basilisk3/71/`
- パチマガスロマガ 朝イチ・設定変更: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/93znmiulk/rs.php`
- ちょんぼりすた: `https://chonborista.com/slot/universal-slot/bajirisk-kizuna/19817/`
- CrankySeven: `https://crankyseven.com/sp/basilisk-kizuna-pc.htm`
- モゲスロ 朝一判別: `https://moge-site.com/archives/18250`
- 期待値見える化 朝一リセット: `https://slotjin.com/slot/basilisk3kizuna-reset/`
- 公安委員会告示転載資料: `https://manualzilla.com/doc/6595483/h25.12.26%EF%BC%8825%E5%B9%B412%E6%9C%88%E4%B8%AD%EF%BC%89`

### 境界監査 / 次候補
- ALL7 2014年1月導入一覧: `https://www.all7.jp/plans/index/2014/01`
- HAZUSE パチスロ輪廻のラグランジェ: `https://hazuse.com/machine/pachislot/3S0984/`
- HAZUSE 主役は銭形2: `https://hazuse.com/machine/pachislot/3S1017/`
