# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **723**
- latestMachineAdded: **新鬼武者 再臨**（ロデオ）
- latestRecord: `docs/real_machine_db/machines/2013-03-18_shin-onimusha-sairin.md`
- chronologicalFrontier: **2013-03-18**
- frontierLatestExactDateMachine: **新鬼武者 再臨**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-03-18_GROUP__NEXT_SAME_DAY_AUDIT_THEN_NEXT_EXACT_DATE**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-03-11_cranky-collection.md` を確認。
- `INDEX.md` は19件地点の旧集約状態のため、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **722** / chronologicalFrontier **2013-03-11** / 03-11群CLOSED / 次工程「03-12〜03-17境界監査 → 03-18 新鬼武者 再臨」。
- 2013-03-12〜03-17を具体日検索、当時系導入情報・解析DBで監査し、今回この境界に追加すべき具体日付き未登録5号機を確認できなかった。
- **723件目として「新鬼武者 再臨」**を追加。

## 今回追加 — 新鬼武者 再臨

### 性能コア

- releaseDate: **2013-03-18**。K-Navi、HAZUSEで一致。
- manufacturer: **ロデオ**。
- formalModelName: **新鬼武者AW** / inspectionNumber: **2S1419**。
- systemType: **5号機 / AT / ゲーム数解除+CZ+直撃**。
- 機械割: **97.0 / 98.7 / 100.2 / 104.4 / 107.3 / 114.4%**。
- AT初当たり: **1/416.2 / 394.6 / 384.6 / 334.7 / 313.8 / 288.8**。
- 50枚ベース: **約31.1G**。
- AT「蒼剣ラッシュ」: **1セット約50G+α / 純増約+2.8枚/G / 最大89%ループ**。
- 通常時最大天井: **1280G**。
- モード別最大: **通常A 1248G / 通常B 1280G / 天国128G**。

### resetBehavior v0.7

- 必勝本の機種固有「天井&設定変更」で直接確認:
  - **設定変更**: 天井ゲーム数再抽選 / モード再抽選 / 状態再抽選。
  - 鬼モード・AT中なら蒼鬼ステージへ、それ以外はステージ引継ぎ。
  - **電源OFF→ONのみ**: 天井ゲーム数 / モード / 状態 / ステージをすべて引継ぎ。
- `gameCounterReset`: 設定変更でRESET_AND_RESELECT、電源OFF→ONでCARRY_OVER。
- `ceilingAfterReset`: 設定変更専用の固定短縮天井は確認できず。通常A/B/天国の天井体系を再抽選後に使用。
- `modeAfterReset`: RESELECT。設定変更時の通常A/B/天国の具体振り分けは、検索語・資料系統を変更して再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: RESELECT。設定変更時の低確/通常/高確/超高確等の具体振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: 独立据え置き表は未確認だが、電源OFF→ON契約で天井G・モード・状態引継ぎを直接確認済み。`SUPPORTED_BY_POWER_CYCLE_CONTRACT`。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 朝一恩恵: モード・状態・規定Gの再抽選。K-Naviには「リセット台は220G付近までが狙い目」という当時攻略記事見出しが残るが、具体的な当選率本文を安全に回収できないため公開数値としては不採用。
- 朝一不利: 設定変更で前日天井進捗が消失し、当時攻略資料でも宵越し天井狙い不可。
- 変更判別: 本機固有ガックン/初期出目の確定仕様は、型式名・メーカー・「設定変更/朝一/据え置き/電源OFF ON/ガックン」を組み替え、当時攻略・古いDB・回顧資料まで再探索したが **UNVERIFIED_AFTER_RESEARCH**。実戦回顧のガックン使用例は仕様確定根拠に採用していない。

### 品質注記

- 「新鬼武者」（2010）、「パチスロ 新鬼武者2」（2022）、「スマスロ 新鬼武者3」等の設定変更・有利区間仕様は別機種のため流用していない。
- 主性能値と設定変更/電源OFF→ON契約について今回確認した主要資料間のCONFLICTはなし。

## 2013-03-12〜03-17境界監査

- 03-11「クランキーコレクション」後から03-18「新鬼武者 再臨」前までを具体日検索・当時系資料で再監査。
- 今回、追加すべき具体日付き未登録パチスロを確定できなかったため、この境界は **CLOSED_FOR_CURRENT_RESEARCH**。

## 2013-03-18同日群

- **新鬼武者 再臨**（ロデオ） — **723件目 / 今回登録**。
- 同日群全メーカー横断の最終監査は次リレーへ残すため、**03-18群はOPEN**。

## 次回再開地点

1. **recordCount 723 / chronologicalFrontier 2013-03-18 / 03-18群OPEN** から開始。
2. まず **2013-03-18同日群の残存監査**。表記揺れ、メーカー別一覧、当時導入カレンダー、HAZUSE/K-Navi等で同日未登録機がないか確認し、あれば古い順に追加。
3. 同日群に漏れがなければ **03-18群をCLOSED** とし、2013-03-19以降の次の具体日境界へ進む。
4. 次の具体日候補は当時カレンダー/業界資料で再確定してから採用し、推測で日付を固定しない。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 新規本線を止めず、QAリレーで継続。

## 主要出典 — 取得日 2026-09-06

### 新鬼武者 再臨
- K-Navi: `https://p-kn.com/slot/1822/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1419/`
- HAZUSE 基本: `https://hazuse.com/machine/pachislot/2S1419/genre/201/`
- HAZUSE AT/ART: `https://hazuse.com/machine/pachislot/2S1419/genre/209/`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2172/1/39091`
- パチ＆スロ必勝本 AT概要: `https://p.hisshobon.jp/machine/2172/1/39093`
- パチ＆スロ必勝本 規定ゲーム数振り分け: `https://p.hisshobon.jp/machine/2172/1/40408`
- スロパチクエスト: `https://www.slopachi-quest.com/article/%E6%96%B0%E9%AC%BC%E6%AD%A6%E8%80%85%E5%86%8D%E8%87%A8/`
- 天井ハイエナ生活（当時）: `https://macerate.seesaa.net/article/347710880.html`
- 天井ハイエナ生活 インデックス: `https://macerate.seesaa.net/article/265748860.html`
- 真パチスロ備忘録（ガックン実戦回顧・仕様根拠には不採用）: `https://sin-surobi.com/etc/12904/`
