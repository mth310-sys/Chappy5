# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **746**
- latestMachineAdded: **忍魂弐 ～烈火ノ章～**（大都技研）
- latestRecord: `docs/real_machine_db/machines/2013-07-01_shinobidamashii-ii-rekka-no-sho.md`
- chronologicalFrontier: **2013-07-01**
- frontierLatestExactDateMachine: **忍魂弐 ～烈火ノ章～**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-07-01_GROUP__NEXT_2013-07-08_DRAGON_GAL_SHURA_NO_YABOU_CANDIDATE__FULL_BOUNDARY_AUDIT_REQUIRED**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-07-01_minnano-juggler.md` を再読。
- INDEXは19件地点の旧集約状態なのでREADME規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **745** / chronologicalFrontier **2013-07-01** / 07-01群OPEN。
- 前HANDOFFの次候補 **NINJA BLADE（マルホン）** を再検証したところ、これは **CR NINJA BLADE（パチンコ）**。マルホン公式旧更新情報、グリーンべると/P-WORLD業界記事でパチンコ機と確認したため、本パチスロDBの本線対象から除外。誤って746件目へ登録していない。
- 2013年当時資料で7/1新台として確認された **忍魂弐 ～烈火ノ章～** はrepo重複なし。性能コア+resetBehavior v0.7を収集し746件目として追加。
- 07-01の既知パチスロは **大漁II / みんなのジャグラー / 忍魂弐 ～烈火ノ章～**。当時資料の新台列と照合し、NINJA BLADEはパチンコ除外と確定したため、07-01群を **CLOSED** とした。
- 次の具体日アンカーとしてHAZUSEで **2013-07-08「ドラゴンギャル～修羅の野望～」（SNKプレイモア）**を確認。次回は7/2～7/7境界監査を先に行い、より古い未登録がなければ747件目候補とする。

## 今回追加 — 忍魂弐 ～烈火ノ章～

### identity / 性能コア

- manufacturer: **大都技研**。
- releaseDate: **2013-07-01**。パチビーで具体日、2013年当時業界資料で6/30納品開始を確認。
- generation/system: **5号機 A+ART**。
- 機械割: **97.7 / 99.7 / 101.7 / 105.5 / 110.9 / 116.3%**。Cranky Sevenと5号機クロニクルで一致。
- BIG: **1/399.6 / 387.8 / 376.6 / 366.1 / 358.1 / 343.1**。
- REG（烈BONUS）: **1/655.4 / 642.5 / 630.2 / 618.3 / 595.8 / 574.9**。
- ボーナス合算: **1/248.2 / 241.8 / 235.7 / 230.0 / 223.7 / 214.9**。
- ART初当たり: **1/486.2 / 427.7 / 456.3 / 364.2 / 355.2 / 254.1**。設定3が設定2より重い非単調系列を原値のまま保持。
- baseGamesPer50: **約30～31G/50枚**。約30G/1000円と約31G/千円の概算資料差を精密値へ変換せず範囲保持。
- ART「月光ノ刻」: **1セット50G+α / 約+1.7枚/G**。
- BIG約**204枚**、烈BONUS約**48枚**。
- 第1天井: **ボーナス+ART間990G+前兆 → ART**。
- 第2天井: **ボーナス間1490G+前兆 → ART+傑束ノ刻SUPER**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- **設定変更で第1/第2天井のゲーム数進捗CLEAR**。当時解析複数系統で一致。
- 設定変更後、**20～33%で高確率状態スタート**とする解析あり。高設定ほど優遇。詳細な設定別振分表は今回固定できずレンジのみ保存。
- 通常時内部状態は低確/高確/超高確の3状態。
- 設定変更専用の短縮天井/CZ確定/ART確定: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定据え置き時の第1/第2天井進捗と内部状態の引継ぎは、本機固有の直接契約を完全には固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的5号機挙動から推測しない。
- 単純電源OFF→ONのみの挙動は、2013年当時資料自体が「調査中」としており、今回も資料系統を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBehaviorQA: **RESEARCHED_WITH_POWER_CYCLE_GAPS**。

## NINJA BLADE候補の訂正

- 前HANDOFFでは「NINJA BLADE（マルホン）」を2013-07-01の未登録パチスロ候補としていたが、再検証で **CR NINJA BLADE LMX/A** のパチンコ機と確認。
- マルホン公式旧更新情報は2013-05-21に「CR NINJA BLADE LMX&A」を機種情報へ追加。
- グリーンべると2013-05-22記事もマルホンの「パチンコ新機種」と明記し、7/7納品開始予定を記載。
- よってパチスロ本線から除外し、recordCountには加算しない。

## 遡及resetBehavior QA 進捗

- `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md` をmain実ファイルで再確認。既にresetBehaviorは存在し、性能側 `coreStatus: PARTIAL` と resetBehavior側 `PARTIAL` は分離管理されている。
- 今回も「空手バカ一代 / 設定変更 / 朝一 / 据え置き / 電源OFF ON / RT百人組手 / ガックン」を資料系統変更で再探索したが、既存レコードを上書きできる本機固有の直接契約は新規発見できず。既存PARTIALを不用意に崩していない。
- QAカーソル: **空手バカ一代の次の実ファイル順**。次回、tree/ディレクトリ実順を取得して最初のresetBehavior欠損またはPARTIAL再探索対象を一意に確定する。

## 次回再開地点

1. **recordCount 746 / chronologicalFrontier 2013-07-01 / 07-01群CLOSED** から開始。
2. 2013-07-02～07-07をK-Navi / ALL7 / HAZUSE / パチビー / メーカー別一覧 / 当時業界記事で境界監査。
3. より古い未登録がなければ **2013-07-08「ドラゴンギャル～修羅の野望～」（SNKプレイモア）**を747件目候補として性能コア + resetBehavior v0.7収集。
4. 07-08同日群を全メーカー横断監査し、漏れがあれば同日内で追加。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` の直後の実ファイル順を一意に確定し、最初のresetBehavior欠損/PARTIAL再探索対象を補完。既存COMPLETE_COREの性能完了判定は維持。

## 主要出典 — 取得日 2026-09-06

### 忍魂弐 ～烈火ノ章～

- パチビー: `https://www.pachibee.jp/machines/about/213050004`
- 娯楽産業 2013-05-17: `https://www.goraku-sangyo.com/%E3%80%90%E5%8B%95%E7%94%BB%E3%81%82%E3%82%8A%E3%80%91%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94%E3%80%80%E3%80%8C%E5%BF%8D%E9%AD%82%E5%BC%90-%E3%80%9C%E7%83%88%E7%81%AB%E3%83%8E%E7%AB%A0%E3%80%9C%E3%80%8D/`
- Pマンズ / 当時業界NEWS: `https://p-mans.blogspot.com/2013/05/5.html`
- Cranky Seven: `https://crankyseven.com/shinobidamashii-two-pc.htm`
- 5号機クロニクル: `https://5goki.com/daito`
- スロスター 2013年導入前資料: `https://ameblo.jp/slostar/entry-11527030431.html`
- 天井ハイエナ生活 2013年当時解析: `https://macerate.seesaa.net/article/367893631.html`

### NINJA BLADE除外

- マルホン公式旧更新情報: `https://maruhon-kogyo.co.jp/oldarchive`
- グリーンべると2013-05-22: `https://web-greenbelt.jp/00000901/`
- P-WORLD転載: `https://news.p-world.co.jp/articles/5861/greenbelt`

### 次候補

- HAZUSE ドラゴンギャル～修羅の野望～: `https://hazuse.com/machine/pachislot/3S0201/`
