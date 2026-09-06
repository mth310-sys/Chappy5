# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **788**
- latestMachineAddedByChronology: **パチスロ仮面ライダーUNLIMITED**（タイヨーエレック）
- latestRecord: `docs/real_machine_db/machines/2014-01-06_kamen-rider-unlimited.md`
- chronologicalFrontier: **2014-01-06**
- schema: **resetBehavior v0.7**
- status: **2014-01-06_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-01-06_city-hunter.md` を再読。
- INDEXは旧集約状態（19件）なので、README規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 787 / chronologicalFrontier 2014-01-06 / 01-06群OPEN。
- 前handoffの次候補「トラック野郎」（ニューギン）を再同定したところ、当時グリーンべると / P-WORLDで **パチンコ新機種『CRトラック野郎』**と確認。パチスロ本線から除外。
- 次の未処理候補 **「パチスロ仮面ライダーUNLIMITED」**を788件目として追加。

## 今回追加 — パチスロ仮面ライダーUNLIMITED

### identity / 性能コア

- manufacturer: **タイヨーエレック**。
- modelName: **パチスロ仮面ライダーZR**。
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。
- hall start: **2014-01-06**（K-Navi / パチビー）。
- generation/system: **5号機 / AT / CZ / 内部モード・状態 / 天井**。
- 機械割: **97.4 / 98.7 / 100.8 / 104.2 / 107.5 / 112.2%**。
- AT初当たり: **1/350.0 / 337.8 / 318.7 / 289.1 / 265.3 / 234.5**。
- CZ「変身モード」: **1/321.5 / 319.8 / 289.2 / 289.7 / 257.1 / 229.6**。
- baseGamesPer50: **約30G/50枚**。
- AT「ライダーラッシュ」: **純増約2.5枚/G**。
- 初回AT: ゲーム数/特定小役解除等は **100G**、CZ経由は **30G + サイクロンクラッシュ上乗せ（合計平均約100G）**。
- 通常/アマゾーン最大天井 **1400G**、天国A/B天井 **100G**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更時は **天井ゲーム数CLEAR**。
- 設定変更時は **内部モード再抽選**。
- K-Naviには本機専用「設定変更後の挙動」「モード移行率（設定変更時）」項目が現存し、pacnkでも設定変更時モード再抽選と天井Gリセットを確認。
- 設定変更時の具体的モード振り分け表は、検索語/資料系統を変更して再探索したが本文数値を安全に復元できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更後に天国A/Bを選択した場合は **100G天井**。ただし100Gはモード固有天井であり、設定変更専用の固定短縮天井とは扱わない。
- パチマガスロマガに本機専用「朝イチ・設定変更 朝イチは即当たりのチャンス!」項目が残るが、朝一100G以内当選率/天国移行率の具体数値は未回収のため推測しない。
- 純据え置き時の天井G / モード / 状態保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの電源OFF→ON時の天井G / モード / 状態保持契約も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の内部状態初期振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン / 初期出目 / 表示等の確定的変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## safeguards

- 後年資料に2013年12月導入表記があるが、K-Navi / パチビーは具体的ホール導入日 **2014-01-06**で一致。本線は具体日を採用し、2013-12表記は発売/流通月差候補としてレコードに保持。
- 2024年「L 仮面ライダー 7RIDERS」や2025年「L 仮面ライダー電王」の仕様を混入しない。
- 「天国100G」は設定変更専用固定短縮ではなく、天国A/Bモード固有の天井。

## 2014-01-06同日群

処理済み:
- **シティーハンター**（オリンピア） — 787件目。
- **パチスロ仮面ライダーUNLIMITED**（タイヨーエレック） — 788件目。

除外確認:
- **トラック野郎**（ニューギン） — 当時業界記事 / P-WORLDで **パチンコ『CRトラック野郎』**と確認。パチスロ本線から除外。

未処理の具体日候補:
- **激闘！西遊記**（KPE） — アタリ7で2014-01-06。

群は **OPEN**。激闘！西遊記を処理した後、全メーカー/新台カレンダーを横断監査してCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線788件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 788 / chronologicalFrontier 2014-01-06 / 01-06群OPEN** から開始。
2. 次の未処理候補 **「激闘！西遊記」（KPE）**を789件目候補として性能コア + resetBehavior v0.7収集。
3. 01-06同日群をメーカー公式 / 業界導入一覧 / 当時解析DB / 古い新台カレンダーで最終横断監査しCLOSED判定。
4. CLOSED後は2014-01-07以降を時系列監査し、次の具体日アンカーへ前進。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### パチスロ仮面ライダーUNLIMITED
- 娯楽産業: `https://www.goraku-sangyo.com/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%82%A8%E3%83%AC%E3%83%83%E3%82%AF%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E4%BB%AE%E9%9D%A2%E3%83%A9%E3%82%A4%E3%83%80/`
- グリーンべると: `https://web-greenbelt.jp/00001200/`
- K-Navi: `https://p-kn.com/slot/1979/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7260`
- パチビー: `https://www.pachibee.jp/machines/about/213110009`
- パチマガスロマガ TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/16/taiyoelec_slot_16.php`
- パチマガスロマガ 小役/1000円G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/16/c-1.php`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/2322/1/43619`
- pacnk: `https://pacnk.com/slot/tools/sh_kamenrider.html`
- 型式名確認: `https://www.pachima.com/c/slot/s_23sammyk/S00209`

### 除外確認 — トラック野郎
- グリーンべると / P-WORLD転載: `https://news.p-world.co.jp/articles/6227/greenbelt`
- P-WORLD CRトラック野郎: `https://www.p-world.co.jp/machine/database/7267`
