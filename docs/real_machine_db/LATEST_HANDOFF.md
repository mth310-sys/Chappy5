更新日: 2026-09-08

## 現在地点
- recordCount: **983**
- latestRecordAdded: **秘宝伝～The Last～**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-05-30_hihouden-the-last.md`
- chronologicalFrontier: **2016-05-30**
- frontierLatestMachine: **秘宝伝～The Last～**
- schema: **resetBehavior v0.7**
- status: **2016-05-30_GROUP_OPEN_FINAL_AUDIT_REQUIRED**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.982 `2016-05-30_kokucchi-black.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点は recordCount **982** / chronologicalFrontier **2016-05-30** / `2016-05-30_GROUP_OPEN_BOUNDARY_AUDIT_REQUIRED`。
- GitHub重複検索で「秘宝伝 The Last」既存レコードなしを確認後、No.983を追加。

## 2016-05-30群 — 現在の登録済み
- No.978 **パチスロ コードギアス 反逆のルルーシュ R2**（サミー）
- No.979 **パチスロ 翠星のガルガンティア**（D-light / ディ・ライト）
- No.980 **ナイツ2**（山佐）
- No.981 **めぞん一刻 桜の下で**（オリンピア）
- No.982 **コクッチーブラック**（タイヨー）
- No.983 **秘宝伝～The Last～**（大都技研）

## No.983 — 秘宝伝～The Last～
- manufacturer: **大都技研**
- releaseDate canonical: **2016-05-30**
- formalModelName: **秘宝伝 The Last／A3**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / AT / 差枚数管理 / CZ経由**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### release-date audit
- グリーンべると2016-05-18記事: **5/29納品開始予定**。
- K-Navi: **ホール導入開始2016-05-30**。
- 期待値見える化: **導入日2016-05-30**。
- ちょんぼりすた: **2016-06-06（一部5/30）**。
- 実ホール導入開始を時系列基準にする本DBではcanonicalを **2016-05-30** とし、全国展開/地域先行差を `CONFLICT_RELEASE_DATE_2016_05_30_VS_2016_06_06_PARTIAL_ROLLOUT` として保持。

### performanceCore
- 機械割canonical: **97.1 / 99.3 / 101.3 / 104.3 / 107.4 / 114.6%**。
- すろぱちくえすとに設定1〜3 **96.8 / 99.0 / 100.9%** の別系列があるため `CONFLICT_PAYOUT_SETTINGS_1_TO_3`。
- AT初当たりcanonical: **1/476.8 / 447.8 / 421.5 / 388.9 / 355.1 / 294.7**。
- 初期資料には **1/268.1 / 249.1 / 230.0 / 204.5 / 182.8 / 141.0** の大きく異なる系列があるため、定義差候補として `CONFLICT_OR_DIFFERENT_DEFINITION_PRE_RELEASE_HIT_SERIES`。平均しない。
- 50枚ベース: **約47G**。
- AT純増: **約3.0枚/G**。
- AT「秘宝RUSH」: 差枚数管理、P-WORLD基本仕様 **1セット60枚以上+α**。
- 通常天井: **AT間1500GでAT確定**。

### resetBehavior v0.7
- 設定変更: 天井を再セット、内部状態再抽選。
- 据え置き: 天井進捗/内部状態を引継ぎ側として整理。
- 純電源OFF→ON: **天井引継ぎ / 状態引継ぎ**。
- リセット後最大天井: **1000G**。
- リセット天井振り分け: **100G 1.6% / 300G 3.1% / 500G 12.5% / 1000G 82.8%**。
- 設定変更専用「伝説予告モード」当選率: 設定1→6 **12.5 / 12.9 / 13.3 / 15.2 / 20.3 / 25.0%**。
- 設定変更後の詳細な内部状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- ガックン: 当時資料はリセット「なし??」表記で確定契約ではない。本機固有の確定的変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### quality / missing
- 型式A3は複数実機流通資料で確認。
- certificationNumberは型式名/大都/5S/検定番号等へ検索語を変更したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- releaseDate / payout / initial-hit seriesの競合は平均せず原値保持。

## 2016-05-30境界監査 — 継続事項
### パチスロ バルタン星人
- 5/30予定情報は採用しない。
- 後続業界記事は6/19納品予定、K-Naviは6/20ホール導入のため **2016-06-20群へDEFER**。

### ビッグドリーム in ロストアイランド2
- 複数当時解析は **2016-06-06**、K-Naviは **2016-06-20** と競合。
- 06/06群へ進む際に、納品/全国導入/地域導入の定義を分離して監査する。

### トリプルクラウンG-30
- 2016年6月群で具体導入日を再監査。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_cutie-honey.md**
- retroQaNextInspection: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めずQAリレーで補完。

## 次回再開地点
1. **recordCount 983 / chronologicalFrontier 2016-05-30 / `2016-05-30_GROUP_OPEN_FINAL_AUDIT_REQUIRED`** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.983を最新mainから再取得。
3. 05/30群をメーカー横断・導入カレンダー横断で最終監査し、追加未処理がなければ **2016-05-30_GROUP_CLOSED**。
4. その後 **2016-05-31〜06-05境界監査 → 2016-06-06群**へ進む。
5. 06/06群では **ビッグドリーム in ロストアイランド2** の6/6 vs 6/20を先に解決。実導入が6/20ならDEFER。
6. **パチスロ バルタン星人**は2016-06-20群で再監査。
7. **トリプルクラウンG-30** は2016年6月群で具体日を固定。
8. 遡及QAの次対象は `2006-02-19_heisei-katsuo-densetsu.md`（平成カツヲ伝説）。
9. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
10. 競合は平均せずCONFLICT/variant差/定義差/予定日vs実導入日/地域導入差として双方保存。

## safeguard
- INDEXは旧集約なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainを優先。
- 全国導入日と記事公開日・検定日・発表日・納品予定日・地域先行日を混同しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 通常機械割と完全攻略値を混ぜない。
- 後年の設置期限一覧の日付を全国導入日に転記しない。

## 主要出典 — 取得日 2026-09-08
### No.983 秘宝伝～The Last～
- グリーンべると: https://web-greenbelt.jp/00008656/
- K-Navi: https://p-kn.com/slot/2499/
- 期待値見える化: https://slotjin.com/zone/hihouden-thelast/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/20454/
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/hihouden-thelast-reset/
- P-WORLD: https://www.p-world.co.jp/machine/database/8040
- パチマ（型式A3）: https://www.pachima.com/c/slot/s_24daitok/S00153
- パチスロバンク（A3確認）: https://pachislobank.com/SHOP/s-daito0048.html
- すろかい（初期別系列CONFLICT確認）: https://slotkaiseki.hatenablog.com/entry/%E7%A7%98%E5%AE%9D%E4%BC%9D%EF%BC%B4%EF%BC%A8%EF%BC%A5%EF%BC%AC%EF%BC%A1%EF%BC%B3%EF%BC%B4
