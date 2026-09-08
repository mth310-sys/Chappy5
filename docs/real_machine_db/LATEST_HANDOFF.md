更新日: 2026-09-08

## 現在地点
- recordCount: **1026**
- latestRecordAdded: **パチスロ火曜サスペンス劇場**（タイヨーエレック）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-11-28_pachislot-kayou-suspense-gekijou.md`
- chronologicalFrontier: **2016-11-28**
- frontierLatestMachine: **パチスロ火曜サスペンス劇場 — No.1026**
- schema: **resetBehavior v0.7**
- status: **2016-11-28_GROUP_CLOSED_FOR_CURRENT_RESEARCH / NEXT_BOUNDARY_2016-11-29_TO_2016-12-04**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1025実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- handoff正本 **1025件 / chronologicalFrontier 2016-11-28 / 11/28群OPEN** から継続。
- 次未処理のタイヨーエレック `パチスロ火曜サスペンス劇場` をNo.1026として追加。
- ALL7 2016年11月一覧の11/28パチスロ枠は `SLOTバジリスク～甲賀忍法帖～3` と `パチスロ火曜サスペンス劇場` の2機種。別掲載の `火曜サスペンス劇場 真相の扉 22の過ち` はパチンコであり、本線へ混入させない。
- HAZUSE新台カレンダーも2016年11月の導入日群を11/07・11/14・11/28としている。11/28群はNo.1025/1026で現調査範囲CLOSED。
- HAZUSEの次日付は2016-12-05だが同カレンダーはパチンコ/パチスロ混合。ALL7 2016年12月一覧で12/05に見える `ANOTHER牙狼～炎の刻印～` と `ぱちんこテラフォーマーズ` はパチンコ機なので、日付だけを根拠にパチスロ本線へ登録しない。

## No.1026 — パチスロ火曜サスペンス劇場
- manufacturer: **タイヨーエレック**
- releaseDate canonical: **2016-11-28**
- formalModelName: **パチスロ火曜サスペンス劇場／ZZ**
- certificationNumber: **6S0296**
- generation/system: **5号機 / 5.5号機期 / ノーマル+A+RT / BIG後32G RT**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_PUBLIC_RESET_DATA**

### performanceCore
- 4段階設定 **1 / 2 / 5 / 6**。
- 機械割 canonical: **97.6 / 100.6 / 105.0 / 110.0%**。
- 設定6のみ後年カレンダー系資料に110.3%表記があるため `CONFLICT_PAYOUT_SETTING6_110_0_VS_110_3` を保持。
- BIG: **1/309.1 / 303.4 / 282.5 / 264.3**。
- MIDDLE BONUS: **1/376.6 / 350.5 / 300.6 / 265.3**。
- 合算: **1/169.8 / 162.6 / 145.6 / 132.4**。
- ベース: **33.63 / 34.24 / 34.47 / 35.62G/50枚**。
- BIG約312枚、MIDDLE BONUS 104枚、BIG後32G RT。
- RT純増/Gは十分な再探索後も比較可能な直接数値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7
- 通常ゲーム数天井なし → gameCounterReset / ceilingAfterReset は `NOT_APPLICABLE_NO_CEILING`。
- CZ / ART / AT / 朝一専用長期モードは非搭載または確認なし。
- 設定変更専用の短縮天井、朝一高確、特定G以内当選率などの恩恵数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- BIG後32Gの一時的RT状態について、設定変更 / 据え置き / 純電源OFF→ONの本機固有直接契約は、機種名・略称・正式型式・検定番号に「設定変更」「リセット」「朝一」「据え置き」「電源」「RT状態」「ガックン」を組み合わせ、当時解析・古いDB・中古実機資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機RT機の挙動から推測して埋めていない。
- 本機固有のガックン/初期出目/ランプ等による設定変更判別は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス終了画面等の「現在設定の示唆」は変更/据え置き判別とは別用途なのでresetDetectionへ混入させない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### quality
- P-WORLD、当時解析、2016年当時スペック転載でボーナス確率・基本獲得枚数・32G RTを複数照合。
- 50枚ベースも設定別精密値と当時の33.6〜35.6G/約34G表記が整合。
- 設定6機械割110.0 vs 110.3は平均化せずCONFLICT。
- resetBehaviorの一時RT状態は機種固有資料がないため一般論を採用せずUNVERIFIED。

## 2016-11-28群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **SLOTバジリスク～甲賀忍法帖～Ⅲ**（エレコ）— No.1025
- **パチスロ火曜サスペンス劇場**（タイヨーエレック）— No.1026

境界監査メモ:
- ALL7 2016年11月一覧で11/28のパチスロは上記2機種を確認。
- 同日掲載の `火曜サスペンス劇場 真相の扉 22の過ち` はパチンコ。
- `ニューペガサスR` はパチビー/HAZUSEで2016-12-12導入系が一致しているため11/28へ遡及しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1026を再取得。
2. **1026件 / chronologicalFrontier 2016-11-28 / 11/28群CLOSED** を正本として継続。
3. **2016-11-29〜2016-12-04境界**をメーカー/HAZUSE/ALL7/当時業界資料で監査。未登録の全国導入パチスロがなければ境界CLOSED。
4. HAZUSE上の次日付 **2016-12-05** はパチンコ/パチスロ混合日付なので、パチスロ実機が存在するか個別に確認する。ALL7の12/05掲載で現時点確認できる `ANOTHER牙狼～炎の刻印～` / `ぱちんこテラフォーマーズ` はパチンコのため本線へ登録しない。
5. 12/05にパチスロ本線がなければ12/06〜12/11境界を閉じ、**2016-12-12群**へ進む。先行候補 `ニューペガサスR`、`パチスロ涼宮ハルヒの憂鬱` 等は必ず導入日・型式・重複を再確認してから登録する。
6. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1026 パチスロ火曜サスペンス劇場
- PiDEA 発表会: https://www.pidea.jp/articles/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%82%A8%E3%83%AC%E3%83%83%E3%82%AF%E3%80%8C%E7%81%AB%E3%82%B5%E3%82%B9%E3%80%8D%E3%83%91%E3%83%81%E3%83%BB%E3%82%B9%E3%83%AD%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8
- パチビー: https://www.pachibee.jp/movies/index/13108
- P-WORLD: https://www.p-world.co.jp/machine/database/8182
- スロパチクエスト: https://www.slopachi-quest.com/article/kasasu-settei/
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/kasasu
- ぱちんこドキュメント!!: https://pachinkolist.com/archives/49553807.html
- 5号機クロニクル: https://5goki.com/yaiyoelec

### 境界/次候補
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年11月: https://www.all7.jp/plans/index/2016/11
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
- パチビー ニューペガサスR: https://www.pachibee.jp/movies/index/13138
