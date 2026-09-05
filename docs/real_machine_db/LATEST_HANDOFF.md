# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **739**
- latestMachineAdded: **パチスロ北斗の拳 転生の章**（Sammy）
- latestRecord: `docs/real_machine_db/machines/2013-06-03_hokuto-no-ken-tensei-no-sho.md`
- chronologicalFrontier: **2013-06-03**
- frontierLatestExactDateMachine: **パチスロ北斗の拳 転生の章**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-06-03_GROUP__NEXT_AUDIT_2013-06-04_FORWARD**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-05-20_magical-suite-prism-nana.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **738** / chronologicalFrontier **2013-05-20** / 05-20群CLOSED。
- 2013-05-21～06-02をK-Navi導入カレンダー、ALL7 2013年5月予定一覧等で境界監査。追加すべき具体日付き未登録パチスロを確認できず、次の全国一斉導入日を **2013-06-03** と確定。
- 2013-06-03群のパチスロはK-Naviカレンダー上 **パチスロ北斗の拳 転生の章**のみ。repo未登録を確認し739件目として追加。

## 今回追加 — パチスロ北斗の拳 転生の章

### identity / 性能コア

- manufacturer: **Sammy**。
- releaseDate: **2013-06-03**。K-Navi、パチビー、HAZUSEで一致。
- 型式名: **パチスロ北斗の拳 転生の章ZA** / 検定番号 **3S0088**。
- systemType: **5号機AT / 規定あべし管理 / セット継続型**。
- 機械割: **97.5 / 98.8 / 100.8 / 105.6 / 110.1 / 113.1%**。
- AT初当たり: **1/355.7 / 341.6 / 320.9 / 279.3 / 251.1 / 237.6**。
- 50枚ベース: **約31G**。
- AT「闘神演舞」: **1セット40G / 純増約2.8枚/G**。
- 内部モード: 通常A / 通常B / 天国 / 超天国。
- 最大規定あべし: **1536 / 896 / 128 / 32**。HAZUSEの一部本文に通常B892表記があり `CONFLICT_896_VS_892_NOTATION` として保持。
- AT初当たりも一部後年回顧に別系列があるため `CONFLICT_RETROSPECTIVE_AT_INITIAL_HIT` として保持し、本線はHAZUSE/アタリ7一致系列。

### resetBehavior v0.7

- 設定変更時は **内部モードを再抽選**。
- 設定変更時モード振り分け:
  - 設定1～3: 通常A **33.0%** / 通常B **55.0%** / 天国 **10.0%** / 超天国 **2.0%**。
  - 設定4: 通常A **30.5%** / 通常B **55.0%** / 天国 **12.5%** / 超天国 **2.0%**。
  - 設定5・6: 通常A **28.0%** / 通常B **55.0%** / 天国 **15.0%** / 超天国 **2.0%**。
- K-Navi/HAZUSEで一致。朝一の主要恩恵は全設定 **通常B 55.0%**。
- 旧機種朝一攻略資料・リセットゾーン資料から、設定変更では前日の規定あべし進捗をリセットして新規抽選へ移る仕様を支持。
- 純据え置きでは前日のあべし進捗を引き継ぐ実戦例をK-Naviで確認。前日558＋当日360を据え置き918、前日511＋当日281を据え置き799として狙う記事が残る。
- ただし据え置き時の内部状態/伝承モードまで含む完全保持契約、**設定変更を伴わない純電源OFF→ONのみ**のあべし/モード/状態/伝承契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2013年機では設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。2026年スマスロ版の1280あべし短縮・50%高確・6.3%伝承ショートは別機種なので混入禁止。
- 本機固有のガックン/初期出目/ランプのみでの変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetQaStatus: **RESEARCHED__SETTING_CHANGE_MODE_RESET_NUMERIC_CONFIRMED__SETTING_CHANGE_ABESHI_RESET_SUPPORTED__PURE_POWER_CYCLE_FULL_CONTRACT_UNVERIFIED**。

## 2013-06-03同日群

- K-Navi 2013年6月導入カレンダーでは06-03のパチスロは **パチスロ北斗の拳 転生の章**のみ。
- パチンコ3機種は対象外。
- 北斗転生を登録後、06-03群は **CLOSED**。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点は引き続き `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 本線収集を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 739 / chronologicalFrontier 2013-06-03 / 06-03群CLOSED** から開始。
2. **2013-06-04～06-09**を別系統資料でも境界監査する。
3. 追加候補がなければ、K-Naviで **2013-06-10「パチスロアタックNo.1 ～開幕！世界選手権～」（三洋物産）** を次の既知アンカーとしてrepo重複確認後に処理する。
4. その後は2013-06-17群の **スナイパイ72 / ハローサンタアルティメットマシンガンバージョン / パチスロ英雄伝説 空の軌跡 THE ANIMATION**へ進む前に06-10同日群を監査する。
5. 北斗転生の純電断契約、設定変更時内部状態、ガックン等は後続QAで直接資料が見つかった場合のみ補完する。

## 主要出典 — 取得日 2026-09-06

### パチスロ北斗の拳 転生の章

- K-Navi 機種トップ: `https://p-kn.com/slot/1853/`
- K-Navi 内部モード移行抽選: `https://p-kn.com/slot/1853/45151/`
- K-Navi 内部モードと最大あべし: `https://p-kn.com/slot/1853/44796/`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0088/`
- パチビー: `https://www.pachibee.jp/movies/index/9455`
- アタリ7: `https://www.atari7.com/slot/date1227864378.php`
- 朝一台選び（旧機種回顧）: `https://asaichidaierabi.seesaa.net/article/438878973.html`
- スロパチクエスト リセット期待値: `https://www.slopachi-quest.com/article/379073091-html/`
- スロパチクエスト 天井・朝一まとめ: `https://www.slopachi-quest.com/article/hokuto-tensei-kitaiti/`

### 境界監査

- ALL7 2013年5月導入予定一覧: `https://www.all7.jp/plans/index/2013/05`
- K-Navi 2013年6月導入カレンダー: `https://p-kn.com/calendar/201306/`
