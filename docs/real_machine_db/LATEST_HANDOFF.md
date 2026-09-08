更新日: 2026-09-08

## 現在地点
- recordCount: **989**
- latestRecordAdded: **沖ドキ！パラダイス**（ユニバーサルブロス / 25Φ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-06-27_okidoki-paradise.md`
- chronologicalFrontier: **2016-06-27**
- frontierLatestMachine: **沖ドキ！パラダイス**
- schema: **resetBehavior v0.7**
- status: **2016-06-27_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.988 `2016-06-20_ganso-hanesuro-futatabi.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点のmainは recordCount **988** / chronologicalFrontier **2016-06-20** / `2016-06-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- 2016-06-21〜06-26を日付・新台・導入語で境界監査。ALL7月次一覧でも06/20本線の次が06/27で、追加の未登録パチスロを固定できなかった。
- 06/27群の先頭として25Φ **沖ドキ！パラダイス**をNo.989へ追加。
- GitHub重複検索で既存の「沖ドキ！パラダイス」レコードがないことを確認済み。
- 公式が25Φ/30Φ同時デビューを明記する一方、当時DBでは25Φ=ユニバーサルブロス、30Φ=アクロスとして区分されるため、30Φを次レコードで独立処理する。

## No.989 — 沖ドキ！パラダイス（25Φ）
- manufacturer: **ユニバーサルブロス**
- releaseDate: **2016-06-27**
- formalModelName: **沖ドキ！パラダイスHA**
- certificationNumber: **5S1348**
- generation/system: **5号機 / AT / 疑似ボーナス連続タイプ / 完全告知 / 25Φ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.7 / 99.4 / 101.5 / 104.1 / 107.1 / 110.2%**。
- BIG: **1/799.1 / 551.6 / 625.4 / 451.6 / 491.7 / 355.9**。
- REG: **1/149.7 / 143.4 / 141.6 / 134.6 / 133.6 / 118.3**。
- 合算: **1/126.1 / 113.8 / 115.5 / 103.7 / 105.1 / 88.8**。
- 50枚ベース: 設定1〜6 **48.9 / 49.0 / 49.1 / 49.2 / 49.3 / 49.4G**、代表約49G。
- AT純増: **約3.0枚/G**。
- BIG **40G / 約120枚**、REG **10G / 約30枚**。
- 通常A/B/天国準備の天井は解析表記 **700G**。P-WORLD/パチビーは **最大699G消化でボーナス確定** とするため、`CEILING_COUNT_PRESENTATION_699_GAMES_CONSUMED_VS_700G_CEILING` として表現差を保持。
- 引き戻し最大 **170G**、天国/ドキドキ/超ドキドキ/保障は **32G**。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部モードRESELECT**。
- 据え置き: **天井進捗・内部モードCARRYOVER**。
- 純電源OFF→ON: **天井進捗・内部モードCARRYOVER**。
- 設定変更時モード振り分け（全設定共通）: **通常A 50.00% / 通常B 15.23% / 天国準備 1.17% / 引き戻し 33.59%**。
- 33.59%で引き戻しへ入り、最大170Gとなるため、固定短縮天井ではなく `PROBABILISTIC_RESET_SHORTENING_VIA_MODE_RESELECT` として保存。
- 朝一主要恩恵: **約1/3で引き戻しモード**。早い初当たり期待が上がる。
- 朝一主要不利: 設定変更により前日天井進捗・前日モードは消去。
- 複数朝一資料は「基本的に設定変更を見抜くことは不可」と整理。本機固有ガックン/初期出目/ランプによる確定判別は検索語を変更して再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-06-21〜06-26境界監査
- ALL7 2016年6月一覧では06/20本線（テラフォーマーズ / バルタン星人 / 元祖ハネスロ再び）の次が06/27本線。
- 06/21〜06/26を日別に検索したが、記事公開日やアプリ配信日は見つかるものの、同期間を全国ホール導入日として固定できる新規パチスロは今回確認できなかった。
- よって本線frontierを06/27へ進めた。後続QAで新証拠が出れば再OPEN可。

## 2016-06-27群 — 現在OPEN
- ALL7掲載: **南国物語 SPECIAL / 沖ドキ！パラダイス / 沖ドキ！パラダイス-30**。
- No.989で25Φ「沖ドキ！パラダイス」を処理済み。
- 次は **沖ドキ！パラダイス-30**。アクロス扱い・型式/検定番号を25Φと混同せず確認する。
- その後 **南国物語 SPECIAL** を処理し、メーカー公式/HAZUSE/ALL7/当時記事で06/27同日全件監査して群をCLOSE判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaNextInspection: **2006-03-06_be-bop.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線の06/27群着手を優先。既存性能値の再調査はしていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.989を再取得。
2. **No.990候補: 沖ドキ！パラダイス-30（アクロス）**から再開。
3. 25Φ/30Φの正式型式・検定番号・メーカー区分を個別照合し、同スペックでも別機種レコードとして扱う。
4. 続いて **南国物語 SPECIAL** を収集。
5. 06/27同日をメーカー/HAZUSE/ALL7/当時記事で全件監査し、未処理がなければ `2016-06-27_GROUP_CLOSED_FOR_CURRENT_RESEARCH` へ進める。
6. 遡及QAは `2006-03-06_be-bop.md` から継続。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ確定。
8. 競合は平均せずCONFLICT。設定変更/据え置き/純電断/RAMクリアを混同しない。

## 主要出典 — 取得日 2026-09-08
### No.989 沖ドキ！パラダイス
- ユニバーサル公式: https://www.universal-777.com/product/slot/okidoki_paradise/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1348/
- K-Navi 25Φ: https://p-kn.com/slot/2509/
- パチビー 25Φ: https://www.pachibee.jp/machines/index/216060006
- P-WORLD 25Φ: https://www.p-world.co.jp/machine/database/8048
- 一撃 モード移行: https://1geki.jp/slot/s_oki_para/42/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/20269/
- スロ確.com: https://slotkaku.com/okidokiparadise
- pachislo-data.com: https://pachislo-data.com/univa/24976

### boundary audit
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06
