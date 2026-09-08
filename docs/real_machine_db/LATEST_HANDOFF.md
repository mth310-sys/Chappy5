更新日: 2026-09-08

## 現在地点
- recordCount: **988**
- latestRecordAdded: **元祖ハネスロ再び**（オーイズミ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-06-20_ganso-hanesuro-futatabi.md`
- chronologicalFrontier: **2016-06-20**
- frontierLatestMachine: **元祖ハネスロ再び**
- schema: **resetBehavior v0.7**
- status: **2016-06-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.986 `2016-06-20_pachislot-terraformars.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点のmainは recordCount **986** / chronologicalFrontier **2016-06-20** / `2016-06-20_GROUP_OPEN`。
- GitHub重複検索で「パチスロ バルタン星人」「元祖ハネスロ再び」の既存レコードがないことを確認後、No.987 / No.988として追加。
- ALL7、K-Navi/パチビー、HAZUSE、当時業界記事を横断し、06/20本線は **テラフォーマーズ / バルタン星人 / 元祖ハネスロ再び** を処理済み。Big Dreamの06/20表記はNo.984で06/06 canonicalとして既登録のため重複しない。
- 現時点の横断監査で追加の未登録パチスロを固定できず、**2016-06-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。

## No.987 — パチスロ バルタン星人
- manufacturer: **七匠**
- releaseDate canonical: **2016-06-20**
- formalModelName: **パチスロ ウルトラマンＴ**（七匠公式）
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマル / リノ仕様・リアルボーナス連続タイプ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.4 / 98.3 / 99.2 / 102.3 / 104.8 / 107.0%**。
- BIG: **1/156.0 / 153.2 / 150.4 / 147.9 / 143.0 / 137.3**。
- REG: **1/312.0 / 306.3 / 300.9 / 295.7 / 285.9 / 274.7**。
- バルタンモード突入: **1/234.9 / 230.0 / 225.2 / 220.7 / 212.1 / 202.3**。
- 50枚ベース: **約32G**。
- BIG **約185枚** / REG canonical **約95枚**。
- 後年整理にREG約110枚表記があるため `CONFLICT_REG_PAYOUT_95_VS_110`。平均しない。
- バルタンモード中ボーナス約**1/9.7** / 転落約**1/25** / ボーナスループ約**72%** / 平均約**3.6連**。
- 天井: **非搭載**。

### resetBehavior v0.7
- **設定変更でもバルタンモードを引き継ぐ**。
- 据え置き: バルタンモード **CARRYOVER**。
- 純電源OFF→ON: バルタンモード **CARRYOVER**。
- **RAMクリア後はバルタンモードSTART** とする当時解析あり。設定変更/純電断/RAMクリアを別契約として保存。
- 天井/ゲーム数カウンタ: N/A。
- 設定変更専用モード振り分け/短縮天井: N/A。
- 朝一恩恵: 前日バルタンモード閉店なら設定変更後も残存し得る。RAMクリア後も高確状態開始。
- 本機固有ガックン/確定的変更判別は十分再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.988 — 元祖ハネスロ再び
- manufacturer: **オーイズミ**
- releaseDate: **2016-06-20**
- formalModelName: **元祖ハネスロ再び／EX**
- certificationNumber: **6S0165**
- generation/system: **5号機 / ノーマルBタイプ / ボーナス主体 + 演出用短期RT**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.7 / 99.6 / 100.4 / 103.1 / 107.0 / 111.2%**。
- ボーナス合算: **1/128.0 / 125.5 / 123.2 / 116.0 / 108.1 / 99.6**。
- 50枚ベース: **約34.3G**。
- 1倍 **60枚** / 2倍 **120枚** / 3倍 **180枚** / SP **247枚**。
- 「ロボゾーン」: チャンスリプレイから入る平均約5Gの演出用RT、ボーナス期待度約50%。
- 天井: **非搭載**。

### resetBehavior v0.7
- 天井/長期ゲーム数モード: **NOT_APPLICABLE**。
- 設定変更専用の短縮天井・朝一モード・主要恩恵/不利: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 演出用RT「ロボゾーン」残G/内部RT状態の設定変更・据え置き・純電断時個別処理は、型式/メーカー/朝一/電断/ガックン等へ検索語を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目等の確定的変更判別も **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス後パネルフラッシュ50〜60%は通常の設定差であり、resetDetectionには混同しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-06-20群 — CLOSED根拠
- ALL7 2016年6月一覧で06/20パチスロ本線: **ぱちスロテラフォーマーズ / パチスロバルタン星人 / 元祖ハネスロ再び**。
- テラフォーマーズはNo.986、バルタン星人No.987、元祖ハネスロ再びNo.988で処理済み。
- `ビッグドリーム in ロストアイランド2` の一部資料06/20表記は、No.984の導入日CONFLICTで既管理。新規重複レコードを作らない。
- 追加候補が見つかった場合は後続境界QAで再OPEN可。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaNextInspection: **2006-03-06_be-bop.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線の06/20群処理を優先。既存性能値の再調査はしていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.988を再取得。
2. **2016-06-21〜06-26境界監査**後、06/27群へ進む。
3. 先行候補: **沖ドキ!パラダイス → 沖ドキ!パラダイス-30 → 南国物語 SPECIAL**。25φ/30φ・メーカー/型式差を混同せず個別確認。
4. 06/27同日をメーカー/HAZUSE/ALL7/当時記事で全件監査し、未処理を時系列で追加。
5. 遡及QAは **`2006-03-06_be-bop.md`** から継続。
6. PARTIAL/UNVERIFIEDは検索語・資料系統を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ確定。
7. 競合は平均せずCONFLICT。設定変更/据え置き/純電断/RAMクリアを混同しない。

## 主要出典 — 取得日 2026-09-08
### No.987 バルタン星人
- 七匠公式: https://www.nanashow.co.jp/product/
- グリーンべると: https://web-greenbelt.jp/00008665/
- K-Navi: https://p-kn.com/slot/2527/
- P-WORLD: https://www.p-world.co.jp/machine/database/8069
- すろぱちくえすと: https://www.slopachi-quest.com/article/baltan/
- スロがち.COM: https://slogati.com/barutan/
- 5号機クロニクル: https://5goki.com/nanashow

### No.988 元祖ハネスロ再び
- HAZUSE: https://hazuse.com/machine/pachislot/6S0165/
- P-WORLD: https://www.p-world.co.jp/machine/database/8041
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/36/a.php
- グリーンべると: https://web-greenbelt.jp/00008642/
- 娯楽産業: https://www.goraku-sangyo.com/%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%85%83%E7%A5%96%E3%83%8F%E3%83%8D%E3%82%B9%E3%83%AD%E5%86%8D%E3%81%B3%E3%80%8D%E6%A9%9F%E7%A8%AE%E8%AA%AC/
- ALL7: https://www.all7.jp/plans/index/2016/06
- パチビー: https://www.pachibee.jp/movies/index/12701

### boundary audit
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
