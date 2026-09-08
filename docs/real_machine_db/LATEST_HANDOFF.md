更新日: 2026-09-09

## 現在地点
- recordCount: **1058**
- latestRecordAdded: **パチスロ 輪るピングドラム**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-03-13_mawaru-penguindrum.md`
- chronologicalFrontier: **2017-03-13**
- frontierLatestMachine: **パチスロ 輪るピングドラム — No.1058**
- schema: **resetBehavior v0.7**
- status: **2017-03-13_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1056実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1056件 / chronologicalFrontier 2017-03-13 / 2017-03-13_GROUP_OPEN**。
- main未登録を再確認し、SANKYO **「パチスロ みんなで楽シーサー」** をNo.1057、北電子 **「パチスロ 輪るピングドラム」** をNo.1058として追加。
- 両機とも性能コア＋resetBehavior v0.7を同時収集。欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF→ON/天井/モード/ガックン等へ検索語を変えて再探索後のみUNVERIFIED化。
- 3/13同日群を2-9伝説、モゲスロ、個別機種DB/解析で横断再監査。全国導入本線として確認できたのは **アイムジャグラーEX AnniversaryEdition / みんなで楽シーサー / 輪るピングドラム** の3機で、全て登録済みのため **3/13群CLOSED**。
- 次の明確な全国導入群は **2017-03-21**。先頭候補は **アナザーゴッドポセイドン-海皇の参戦-**、続いて **攻殻機動隊S.A.C. 2nd GIG / 防空少女ラブキューレ / ドキドキマンゴー**。

## No.1057 — パチスロ みんなで楽シーサー
- manufacturer: **SANKYO**
- releaseDate canonical: **2017-03-13**
- formalModelName: **パチスロみんなで楽シーサーS**
- certificationNumber: **6S1665**
- generation/system: **5号機 / ノーマルA / 完全告知**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.9 / 98.1 / 99.1 / 101.8 / 104.7 / 110.1%**。
- BIG: **1/265 / 264 / 262 / 253 / 245 / 230**。
- REG: **1/360 / 334 / 316 / 282 / 253 / 230**。
- 合算: **1/152 / 147 / 143 / 133 / 124 / 115**。
- 50枚ベース: HAZUSE **約32.1～33.4G**、ちょんぼりすた **32G**、別当時解析 **約34G**。平均せずCONFLICT保持。
- BIG約**312枚**、REG約**104枚**。

### resetBehavior v0.7
- 天井・ゲーム数管理・AT/ART/CZ: **NOT_APPLICABLE**。
- 設定変更専用短縮天井、高確、初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電源OFF→ONで比較対象となる天井・モード進捗は非搭載。
- 本機固有の前日履歴・表示履歴・ガックン/役物/ランプを使う確定変更判別契約は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なSANKYOノーマル機の挙動から外挿していない。

### dataQuality / conflicts
- SANKYO公式オンライン博物館で機種、型式、設定別BB/RB/合算を確認。
- HAZUSEで2017-03-13、型式、検定番号を確認。
- PiDEA Xの「納品3/20～」は全国導入日と別定義の納品予定日として分離。
- ベース32～33.4G系列と約34G系列は `CONFLICT_BASE_GAMES_PER_50_32_TO_33_4_VS_APPROX_34`。

## No.1058 — パチスロ 輪るピングドラム
- manufacturer: **北電子**
- releaseDate canonical: **2017-03-13**
- formalModelName: **輪るピングドラム／KU**
- certificationNumber: **6S1430**
- generation/system: **5号機 / A+ART / CZ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.6 / 99.3 / 100.5 / 104.3 / 106.7 / 110.0%**。
- ART初当たり: **1/556 / 524 / 486 / 424 / 381 / 335**。
- 50枚ベース: **約33G/50枚**。
- ART純増: **約1.7枚/G**。ボーナス込み表記 **約2.0枚/G**は別定義保持。
- SUPER BIG最大約**240枚**、PENGUINDRUM CHANCE最大約**78枚**。
- ART「生存戦略」: **1セット30G+α**。

### resetBehavior v0.7
- 通常ゲーム数天井は非搭載。PC（ボーナス）ART非当選の**スルー回数天井3/5/7/10回、最大10回**。
- 設定変更: **PCスルー回数RESET / 内部状態再抽選**。
- 純電源OFF→ON: **PCスルー回数CARRYOVER / 内部状態CARRYOVER**。
- 設定変更後は**浅いスルー規定が選ばれやすい**。ただしリセット時3/5/7/10回の具体的振り分け数値は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ART単発後は通常契約として次回最大7回天井。
- 開始ステージは設定変更後 **繁華街or高倉家** とする解析資料あり。
- 本機固有ガックンの確定契約は **UNVERIFIED_AFTER_RESEARCH**。

### dataQuality / conflicts
- 導入日2017-03-13はHAZUSE / K-Navi / パチビー / ちょんぼりすたで一致。
- 型式・検定番号はHAZUSEで直接確認。
- ART初当たり・機械割は複数解析で一致。
- `DEFINITION_DIFFERENCE_ART_NET_1_7_VS_BONUS_INCLUDED_2_0` を分離保持。

## 2017-03-13群監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  - アイムジャグラーEX AnniversaryEdition — No.1056。
  - パチスロ みんなで楽シーサー — No.1057。
  - パチスロ 輪るピングドラム — No.1058。
- 2-9伝説とモゲスロの2017-03-13欄は上記3機で一致。個別機種DB/解析でも各導入日を照合。
- 3/14～3/20について、現時点の主要導入カレンダーでは全国導入本線を固定できず、次の明確な群は2017-03-21。

## 次回候補 — 2017-03-21群
1. **アナザーゴッドポセイドン-海皇の参戦-**
2. **攻殻機動隊S.A.C. 2nd GIG**
3. **防空少女ラブキューレ**
4. **ドキドキマンゴー**
- 上記は2-9伝説の2017-03-21欄で確認済み。次回は個別公式/業界/解析で導入日と順序を再固定してからNo.1059候補を処理する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線の3/13群完了を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1058を再取得。
2. **1058件 / chronologicalFrontier 2017-03-13 / 3/13群CLOSED** を正本として継続。
3. **2017-03-14～03-20境界**を再確認し、新たな全国導入未登録がなければ境界CLOSEDを維持。
4. **2017-03-21群**を全メーカー横断し、先頭未処理候補 **「アナザーゴッドポセイドン-海皇の参戦-」** からNo.1059候補として処理。
5. 続けて **攻殻機動隊S.A.C. 2nd GIG / 防空少女ラブキューレ / ドキドキマンゴー** を監査する。
6. 遡及QAは `2006-05_gold-shio-30.md` から継続する。

## 主要出典 — 取得日 2026-09-09
### No.1057 みんなで楽シーサー
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/688/
- SANKYOFEVERTV: https://www.youtube.com/watch?v=5Bp1I2Gl8x8
- HAZUSE: https://hazuse.com/machine/pachislot/6S1665/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/6S1665/genre/201/
- パチ7: https://pachiseven.jp/machines/5075/cutout/5
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/34429/
- pachislo-data: https://pachislo-data.com/sankyo/32532
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E6%A5%BD%E3%82%B7%E3%83%BC%E3%82%B5%E3%83%BC%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F

### No.1058 輪るピングドラム
- HAZUSE: https://hazuse.com/machine/pachislot/6S1103/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/6S1103/genre/209/
- K-Navi: https://p-kn.com/slot/2709/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/31328/
- 期待値見える化: https://slotjin.com/zone/penguindrum/
- pacnk: https://pacnk.com/slot/tools/sh_mawarupinkudoramu.html
- パチビー: https://www.pachibee.jp/machines/movie/217020002

### 3/13群監査 / 次境界
- 2-9伝説: https://29den.com/newslot/
- モゲスロ: https://moge-site.com/new-slot2017

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
