更新日: 2026-09-08

## 現在地点
- recordCount: **991**
- latestRecordAdded: **南国物語SPECIAL**（オリンピア / late-discovered 06/20 canonical）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-06-20_nangoku-monogatari-special.md`
- chronologicalFrontier: **2016-06-27**
- frontierLatestMachine: **沖ドキ！パラダイス-30**（アクロス）
- schema: **resetBehavior v0.7**
- status: **2016-06-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.989 `2016-06-27_okidoki-paradise.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点のmainは recordCount **989** / chronologicalFrontier **2016-06-27** / `2016-06-27_GROUP_OPEN`。
- GitHub重複検索で「沖ドキ！パラダイス-30」「南国物語SPECIAL」の既存独立レコードがないことを確認。
- No.990として30Φ「沖ドキ！パラダイス-30」、No.991として「南国物語SPECIAL」を追加。
- ALL7の06/27掲載3機（沖ドキ！パラダイス25Φ / 30Φ / 南国物語SPECIAL）を処理完了。南国物語SPECIALは複数当時解析が06/20、ALL7が06/27のため日付競合を再整理した。

## No.990 — 沖ドキ！パラダイス-30
- manufacturer: **アクロス**
- releaseDate: **2016-06-27**
- formalModelName: **沖ドキ！パラダイスHH-30**
- certificationNumber: **5S1370**
- generation/system: **5号機 / AT / 疑似ボーナス連続タイプ / 完全告知 / 30Φ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.7 / 99.4 / 101.5 / 104.1 / 107.1 / 110.2%**。
- BIG: **1/799.1 / 551.6 / 625.4 / 451.6 / 491.7 / 355.9**。
- REG: **1/149.7 / 143.4 / 141.6 / 134.6 / 133.6 / 118.3**。
- 合算: **1/126.1 / 113.8 / 115.5 / 103.7 / 105.1 / 88.8**。
- 50枚ベース: 設定1〜6 **48.9 / 49.0 / 49.1 / 49.2 / 49.3 / 49.4G**。
- AT純増: **約3.0枚/G**。
- BIG **40G / 約120枚**、REG **10G / 約30枚**。
- 通常A/B/天国準備は700G天井表記、P-WORLD/パチビーは最大699G消化で確定。表現差CONFLICTを保持。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部モードRESELECT**。
- 据え置き: **天井進捗・内部モードCARRYOVER**。
- 純電源OFF→ON: **天井進捗・内部モードCARRYOVER**。
- 設定変更時モード（全設定共通）: **通常A 50.00% / 通常B 15.23% / 天国準備 1.17% / 引き戻し 33.59%**。
- 引き戻し最大 **170G**。固定短縮ではなく `PROBABILISTIC_RESET_SHORTENING_VIA_MODE_RESELECT`。
- 本機固有の確定変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 25Φ/30Φ識別
- 公式は25Φ/30Φ同時デビューを明記。
- 当時解析では両バージョンの中身は同じ。
- ただし個別DBでは25Φ=ユニバーサルブロス `HA / 5S1348`、30Φ=アクロス `HH-30 / 5S1370`。独立レコードを維持。

## No.991 — 南国物語SPECIAL
- manufacturer: **オリンピア**
- releaseDate canonical: **2016-06-20**
- formalModelName: **南国物語/F5**
- certificationNumber: **5S1350**（鹿児島県公報で公的確認）
- generation/system: **5号機 / 5.5号機期 / ノーマル / リノ方式・リアルボーナス連続タイプ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.4 / 98.7 / 100.7 / 102.0 / 104.0 / 107.2%**。
- ボーナス初当たり: **1/399.0 / 392.0 / 373.9 / 352.3 / 272.2 / 195.1**。
- BIG: **1/208.7 / 202.9 / 192.9 / 186.9 / 183.7 / 174.8**。
- REG: **1/235.3 / 228.7 / 217.3 / 210.1 / 191.1 / 174.9**。
- 連チャン込み合算: **1/110.6 / 107.5 / 102.0〜102.2 / 98.9 / 93.7 / 87.4**。設定3は `1/102.0 vs 1/102.2` のCONFLICT。
- 50枚ベース: **29.6 / 29.6 / 29.7 / 29.7 / 29.9 / 30.3G**。
- BIG **約246枚** / REG **約100枚**。
- ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- 設定変更: **ボーナス高確率状態CARRYOVER**。
- 据え置き: **高確率状態CARRYOVER**。
- 純電源OFF→ON: **高確率状態CARRYOVER**。
- ゲーム数天井/短縮天井: **NOT_APPLICABLE**。
- **RAMクリア後は高確率状態START** とする当時解析あり。設定変更とRAMクリアを別契約として保存。
- 前日高確率状態で閉店し、店側が状態転落まで回さなければ翌朝も高確狙い可能。
- 本機固有の設定変更確定ガックン/表示は十分再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### releaseDate conflict
- スロ確 / 期待値見える化 / 当時解析: **2016-06-20**。
- ALL7: **2016-06-27**。
- PiDEA 2016-05-06事前記事: 納期 **6/19 or 26**。
- 複数当時解析の具体日一致を優先してcanonicalは06/20。ALL7の06/27は `RELEASE_DATE_2016_06_20_VS_2016_06_27` として保持。
- したがってNo.991は後発見だがレコードパスを `2016-06-20_...` とし、chronologicalFrontier自体は06/27のまま。

## 2016-06-27群監査 — CLOSED
- ALL7掲載のパチスロは **南国物語SPECIAL / 沖ドキ！パラダイス / 沖ドキ！パラダイス-30**。
- 25ΦはNo.989、30ΦはNo.990、南国物語SPECIALはNo.991で処理済み。
- 南国物語SPECIALの日付競合は上記の通り06/20 canonicalへ補正したが、ALL7上の06/27候補としても監査済み。
- 現時点で06/27群の追加未登録機を固定できないため `2016-06-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。

## 次境界 / 2016-07-04先行確認
- サミー公式マイスロ履歴が **A-SLOT 北斗の拳 将** と **A-SLOT 偽物語**について「2016/07/04 本日ホール導入日」と直接明記。
- HAZUSEでもA-SLOT北斗の拳 将を2016-07-04、型式 `A-SLOT北斗の拳 強敵/ZS`、検定 `6S0341` と確認。
- **ファンキージャグラー**も2016-07-04導入資料あり。07/04群到達時に北電子/当時DBを含め正式照合する。
- 次回は06/28〜07/03境界を最終監査後、07/04群へ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaNextInspection: **2006-03-06_be-bop.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線の06/27群CLOSEを優先。遡及QAは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.990 / No.991を再取得。
2. **2016-06-28〜07-03境界監査**を行い、未登録パチスロがなければCLOSED扱い。
3. **2016-07-04群**へ進み、まずサミー公式で実導入日が直接確認済みの **A-SLOT 北斗の拳 将** と **A-SLOT 偽物語**を重複確認後に時系列登録する。
4. 同日候補 **ファンキージャグラー**ほかを北電子/HAZUSE/P-WORLD/ALL7/当時記事で横断し、07/04群を全件監査する。
5. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語と資料系統を変えて再探索後のみ確定。
6. 競合は平均せずCONFLICT。設定変更/据え置き/純電断/RAMクリアを混同しない。
7. 遡及QAは `2006-03-06_be-bop.md` から継続。

## 主要出典 — 取得日 2026-09-08
### No.990 沖ドキ！パラダイス-30
- ユニバーサル公式: https://www.universal-777.com/product/slot/okidoki_paradise/
- P-WORLD 30Φ: https://www.p-world.co.jp/machine/database/8049
- パチビー 30Φ: https://www.pachibee.jp/machines/index/216060008
- パチビー仕様: https://www.pachibee.jp/machines/lecture/216060008
- スロ確.com: https://slotkaku.com/okidokiparadise
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06

### No.991 南国物語SPECIAL
- 鹿児島県公報: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1602/documents/50525_20160222222935-1.pdf
- P-WORLD: https://www.p-world.co.jp/machine/database/8045
- スロ確.com: https://slotkaku.com/nangokumonogatari_sp
- 期待値見える化: https://slotjin.com/slot/nangoku-special/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E5%8D%97%E5%9B%BD%E7%89%A9%E8%AA%9E%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- pachinko's blog: https://pachinko.hatenablog.jp/archive/2016/06/01
- 真パチスロ備忘録: https://sin-surobi.com/reno/16630/
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06

### next boundary
- Sammyマイスロ履歴: https://www.sammy.co.jp/japanese/myslot/news/index_10.html
- HAZUSE A-SLOT北斗の拳 将: https://hazuse.com/machine/pachislot/6S0341/
