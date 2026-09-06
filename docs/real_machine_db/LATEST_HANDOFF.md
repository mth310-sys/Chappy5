# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **749**
- latestMachineAdded: **パチスロQP**（オーイズミ）
- latestRecord: `docs/real_machine_db/machines/2013-07-22_pachislo-qp.md`
- chronologicalFrontier: **2013-07-22**
- frontierLatestExactDateMachine: **パチスロQP**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-07-22_GROUP__NEXT_BOUNDARY_AUDIT_2013-07-23_TO_08-04__KNOWN_2013-08-05_HOTD_ANCHOR**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-07-16_pachislo-akb48.md` を再読。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **748** / chronologicalFrontier **2013-07-16** / 07-16群CLOSED。
- 2013-07-17～07-21境界を2013年7月機種一覧、パチビー、当時業界記事・機種DBで監査。今回、新たな未登録パチスロを確認できず。
- 前HANDOFFの次候補 **パチスロQP** はrepoに同名レコード未登録を確認し、性能コア + resetBehavior v0.7を収集して749件目として追加。
- 07-22同日群を2013年7月機種一覧・当時資料で再監査し、QP以外の具体日付き未登録パチスロを今回確認できなかったため **CLOSED**。
- 2013年7月一覧ではAKB48 / みんなのジャグラー / 大漁II / ドラゴンギャル～修羅の野望～ / 忍魂弐～烈火ノ章～ / QPを照合し、QP以外は既存キュー側処理済み。
- 次の具体日アンカーは **2013-08-05「学園黙示録 HIGH SCHOOL OF THE DEAD」（スパイキー）**。HAZUSE・パチビーで2013-08-05導入一致。次回は先に07-23～08-04境界を別系統でも監査する。

## 今回追加 — パチスロQP

### identity / 性能コア

- manufacturer: **オーイズミ**。
- releaseDate: **2013-07-22**。パチビーで具体日確認。当時発表資料は7/21納品開始予定。
- generation/system: **5号機 AT / BR非搭載 / ゲーム数管理 + 自力CZ**。
- 機械割: **98.1 / 99.2 / 101.0 / 107.0 / 110.9 / 114.1%**。
- AT「QP CHANCE」初当たり: **1/238.0 / 231.3 / 219.5 / 201.2 / 189.6 / 180.5**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- QP CHANCE: **1セット40G+α・純増約2.8枚/G**。
- 通常モード: **通常A / 通常B / 天国 / 超天国**。
- 公開最大天井: **1300G / 800G / 100G / 25G**（通常A/B/天国/超天国）。
- coreStatus: **COMPLETE_CORE_WITH_BASE_UNVERIFIED**。

### resetBehavior v0.7

- 当時攻略整理資料で **宵越し×** を確認し、設定変更時に前日天井ゲーム数進捗を持ち越さない契約として保存。
- パチマガスロマガには本機固有の「朝イチ・設定変更」解析項目が現存するが、取得可能本文から設定変更時モード振り分け・状態振り分けの具体値を安全に復元できず **UNVERIFIED_AFTER_RESEARCH**。
- **据え置き時の内部G/モード/状態の直接契約**、**単純電源OFF→ONのみの内部G/モード/状態/表示契約**も、検索語・資料系統を変更して再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の固定短縮天井・公開朝一専用当選率: **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- 本機固有のガックン・初期出目・液晶による変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBehaviorQA: **MEDIUM__RESET_COUNTER_SUPPORTED_BY_PERIOD_SOURCE__MODE_STATE_POWER_CYCLE_DETAILS_UNVERIFIED_AFTER_RESEARCH**。

## 境界監査 2013-07-17～07-22

- 07-17～07-21: 2013年7月機種一覧・当時資料横断で新規未登録パチスロを確認せず。
- 07-22: **パチスロQP**を追加。
- 07-22同日群でQP以外の具体日付き未登録パチスロを今回確認できず、**2013-07-22群CLOSED**。

## 遡及resetBehavior QA 進捗

- QAカーソルは前HANDOFFどおり `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は時系列本線749件目追加と07-22群閉鎖を優先し、QAカーソル自体は進めていない。

## 次回再開地点

1. **recordCount 749 / chronologicalFrontier 2013-07-22 / 07-22群CLOSED** から開始。
2. **2013-07-23～08-04**をK-Navi / ALL7 / HAZUSE / パチビー / メーカー別一覧 / 当時業界記事で境界監査。
3. より古い未登録がなければ **2013-08-05「学園黙示録 HIGH SCHOOL OF THE DEAD」（スパイキー）**を750件目候補として性能コア + resetBehavior v0.7収集。
4. 08-05同日群はHOTDだけと決め打ちせず全メーカー横断監査し、同日未登録があれば時系列内で追加。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。既存性能コアを無駄に再調査しない。

## 主要出典 — 取得日 2026-09-06

### パチスロQP

- パチビー: `https://www.pachibee.jp/movies/index/9600`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7101`
- パチマガスロマガ 基本情報: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/30/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/30/h.php`
- パチマガスロマガ AT突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/30/l.php`
- パチマガスロマガ TOP（朝イチ・設定変更項目の存在確認）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/30/oizumi_slot_30.php`
- パチ＆スロ必勝本 各チャンスゾーン: `https://p.hisshobon.jp/machine/2237/1/40942`
- 天井ハイエナ生活 当時整理資料: `https://macerate.seesaa.net/article/226196713.html`
- Pマンズ 2013-05（発表会・7/21納品予定）: `https://p-mans.blogspot.com/2013/05/`
- 2013年機種一覧: `https://www.nikuziru.com/slot/2013slot-list`

### 次候補

- HAZUSE / 学園黙示録 HIGH SCHOOL OF THE DEAD: `https://hazuse.com/machine/pachislot/3S0304/`
  - 2013-08-05導入、スパイキー、型式H.O.T.D_BB、検定番号3S0304。
- パチビー / 学園黙示録 HIGH SCHOOL OF THE DEAD: `https://www.pachibee.jp/movies/index/9657`
  - 2013-08-05導入、5号機ART、純増約1.6枚/G。
