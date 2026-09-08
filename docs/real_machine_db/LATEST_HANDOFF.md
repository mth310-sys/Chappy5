更新日: 2026-09-08

## 現在地点
- recordCount: **984**
- latestRecordAdded: **パチスロ ビッグドリーム in ロストアイランド2**（タイヨーエレック）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-06-06_big-dream-in-lost-island2.md`
- chronologicalFrontier: **2016-06-06**
- frontierLatestMachine: **パチスロ ビッグドリーム in ロストアイランド2**
- schema: **resetBehavior v0.7**
- status: **2016-06-06_GROUP_OPEN_AUDIT_REQUIRED**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.983 `2016-05-30_hihouden-the-last.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点は recordCount **983** / chronologicalFrontier **2016-05-30** / `2016-05-30_GROUP_OPEN_FINAL_AUDIT_REQUIRED`。
- 05/30群をHAZUSE等の導入カレンダーと既登録機で再監査し、追加の全国実導入機を今回固定できなかったため **2016-05-30_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- HAZUSEの次の日付群は2016-06-06。GitHub重複検索で「ビッグドリーム in ロストアイランド2」既存レコードなしを確認後、No.984を追加。

## 2016-05-30群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.978 パチスロ コードギアス 反逆のルルーシュ R2
- No.979 パチスロ 翠星のガルガンティア
- No.980 ナイツ2
- No.981 めぞん一刻 桜の下で
- No.982 コクッチーブラック
- No.983 秘宝伝～The Last～

- HAZUSEカレンダーは2016年5月の導入日群を05/30のみとし、その次を06/06としている。
- メーカー/機種別検索も併用し、上記以外の05/30全国初導入5号機を今回固定できずCLOSED。
- 後年の設置期限一覧・検定日・記事公開日を実導入日として混入させない。

## No.984 — パチスロ ビッグドリーム in ロストアイランド2
- manufacturer: **タイヨーエレック（Sammy系）**
- releaseDate canonical: **2016-06-06**
- formalModelName: **ロストアイランド2/ZS**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマル / リアルボーナス連チャン型（リノタイプ）**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### release-date audit
- グリーンべると2016-04-15記事: **6/5納品開始予定**。
- パチビー、スロ確、2-9伝説、複数当時解析: **2016-06-06導入**。
- K-Navi: **2016-06-20ホール導入開始**。
- 本DBは実導入開始を優先しcanonicalを **2016-06-06**、差を `CONFLICT_RELEASE_DATE_2016_06_06_VS_2016_06_20` として保持。

### performanceCore
- 機械割: **97.9 / 99.4 / 100.8 / 104.2 / 107.1 / 110.0%**。
- ボーナス初当たりcanonical: **1/568.9 / 543.4 / 520.1 / 340.6 / 444.0 / 275.2**。
- K-Naviの設定5 **1/440.0** は `CONFLICT_INITIAL_HIT_SETTING5_1_444_0_VS_1_440_0`。
- 連チャン込みボーナス出現率: **1/63.8 / 61.3 / 59.0 / 55.0 / 51.4 / 48.2**（初当たりと別定義）。
- 50枚ベース: **約28G**。
- BIG: **約250枚** / REG: **約100枚**。
- 通常ゲーム数天井: **非搭載**。
- AT/ART純増は非該当。資料の「純増4〜4.5枚/G」はリアルボーナス消化を含む別定義のため共通純増へ混ぜない。

### resetBehavior v0.7
- 設定変更: **内部状態CARRYOVER / 液晶は昼ステージへ**。
- 据え置き: **内部状態CARRYOVER**。
- 純電源OFF→ON: **内部状態CARRYOVER / 液晶は昼ステージへ**。ボーナス中は表示を引継ぎ、確定画面はBETまたは次レバーONで復帰。
- ゲーム数・天井: **NOT_APPLICABLE / CEILING_NONE**。
- モード/状態: 通常/天国（ボーナス高確率）を設定変更でも引継ぐ。設定変更専用再抽選は確認なし。
- 朝一恩恵: 前日天国状態で終了した場合、設定変更だけでは消えず高期待状態が残り得る。設定変更自体が天国を新規付与するとは断定しない。
- RAMクリア後天国開始説: 当時資料が「不明」「?」を伴うため **UNVERIFIED_RAM_CLEAR_AFTER_RESEARCH**。設定変更とRAMクリアを同義扱いしない。
- 変更判別: 設定変更/電源OFF→ONとも昼ステージなのでステージ単独判別不能。ガックン・初期出目・ランプの本機固有確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更専用の公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

### quality / missing
- 型式 `ロストアイランド2/ZS` は複数資料で確認。
- certificationNumberは型式/検定/5S/メーカーへ検索語を変更して再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- releaseDateと設定5初当たり競合は平均せず原値保持。

## 2016-06-06群 — 継続事項
- No.984 **パチスロ ビッグドリーム in ロストアイランド2** を登録済み。
- コードギアスR2は一部資料に6/6表記があるが、サミー公式/実導入開始5/30をcanonicalとしてNo.978登録済みなので重複登録しない。
- サミー公式製品年表の `2016/06/06` 表記はA-SLOT北斗の拳 将 / A-SLOT偽物語について確認できるが、公式ページ上の日付が製品ページ公開/発売情報の日付か実ホール導入日かを区別する必要あり。後年導入DBは両機を7/4とするため、06/06群へ即登録しない。
- **ビッグドリーム in ロストアイランド2** のK-Navi 6/20表記はCONFLICT保持済み。
- **ぱちスロ テラフォーマーズ** はメーカー発表転載で全国導入2016-06-20が確認できるため06/20群へDEFER。
- **パチスロ バルタン星人**、**元祖ハネスロ再び** は6/20予定資料あり。06/20群で再監査。
- **沖ドキ!パラダイス / -30** は6/27予定資料あり。06/27群で再監査。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_cutie-honey.md**
- retroQaNextInspection: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めずQAリレーで補完。

## 次回再開地点
1. **recordCount 984 / chronologicalFrontier 2016-06-06 / `2016-06-06_GROUP_OPEN_AUDIT_REQUIRED`** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.984を最新mainから再取得。
3. **2016-06-06群をメーカー横断・導入カレンダー横断で最終監査**。Big Dream以外の全国初導入5号機を固定できればその未処理先頭から追加。
4. A-SLOT北斗の拳 将 / A-SLOT偽物語は6/6表記と7/4実導入系資料の定義を分離し、実導入日が7/4ならDEFER。
5. 06/06群に追加がなければ `2016-06-06_GROUP_CLOSED` → 06/07〜06/12境界監査 → 06/13群へ進む。
6. 06/20群ではテラフォーマーズ / バルタン星人 / 元祖ハネスロ再び / Big Dreamの6/20競合を再確認。
7. 06/27群では沖ドキ!パラダイス25/30等を監査。
8. 遡及QAの次対象は `2006-02-19_heisei-katsuo-densetsu.md`（平成カツヲ伝説）。
9. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
10. 競合は平均せずCONFLICT/variant差/定義差/予定日vs実導入日/地域導入差として双方保存。

## safeguard
- INDEXは旧集約なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainを優先。
- 全国導入日と記事公開日・検定日・発表日・納品予定日・地域先行日を混同しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 通常機械割と完全攻略値を混ぜない。
- リアルボーナス中の増加速度をAT/ART純増へ混ぜない。

## 主要出典 — 取得日 2026-09-08
### No.984 パチスロ ビッグドリーム in ロストアイランド2
- グリーンべると: https://web-greenbelt.jp/00008588/
- パチビー: https://www.pachibee.jp/movies/index/12686
- スロ確: https://slotkaku.com/lostisland2
- パチ＆スロ必勝本 設定変更: https://p.hisshobon.jp/machine/2771/1/58094
- パチ＆スロ必勝本 システム: https://p.hisshobon.jp/machine/2771/1/58095
- 期待値見える化: https://slotjin.com/slot/bigdream/
- 2-9伝説: https://2-9densetsu.com/bigdream/
- P-WORLD: https://www.p-world.co.jp/machine/database/8032
- K-Navi: https://p-kn.com/slot/2493/
- 中一商事（型式）: https://store.shopping.yahoo.co.jp/nakaiticom/692.html
- 真パチスロ備忘録（RAMクリア不確定確認）: https://sin-surobi.com/reno/16630/

### date-boundary audit
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06
- KYORAKU発表転載（テラフォーマーズ6/20全国導入）: https://www.4gamer.net/games/345/G034590/20160613100/
