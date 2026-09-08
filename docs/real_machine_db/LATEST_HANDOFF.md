更新日: 2026-09-08

## 現在地点
- recordCount: **1027**
- latestRecordAdded: **ニューペガサスR**（エマ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-12-12_new-pegasus-r.md`
- chronologicalFrontier: **2016-12-12**
- frontierLatestMachine: **ニューペガサスR — No.1027**
- schema: **resetBehavior v0.7**
- status: **2016-11-29_TO_2016-12-11_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-12_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1026実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- handoff正本 **1026件 / chronologicalFrontier 2016-11-28 / 11/28群CLOSED** から継続。
- 2016-11-29〜12-04境界を監査。HAZUSEの次カレンダー日付は12/05だが、ALL7 2016年12月一覧で同日に確認できる `ANOTHER牙狼～炎の刻印～` と `ぱちんこテラフォーマーズ` はいずれもパチンコ。パチスロ本線への追加なし。
- 2016-12-06〜12-11も次の全国導入パチスロを固定できず、11/29〜12/11境界を現調査範囲CLOSED。
- 2016-12-12群へ前進し、直前HANDOFFの先行候補順にエマ `ニューペガサスR` をNo.1027として追加。
- パチビー/HAZUSEで2016-12-12導入が一致。HAZUSEで型式 `ペガサスR`、検定番号 `6S1222` を確認。

## No.1027 — ニューペガサスR
- manufacturer: **エマ**
- releaseDate canonical: **2016-12-12**
- formalModelName: **ペガサスR**
- certificationNumber: **6S1222**
- generation/system: **5号機 / 5.5号機期 / ノーマルタイプ / 完全告知 / 技術介入**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_NO_COMPLEX_RESET_SYSTEM**

### performanceCore
- 機械割: **96.0 / 98.0 / 100.0 / 103.0 / 105.0 / 108.0%**。
- BIG: **1/239.2 / 237.4 / 235.7 / 234.1 / 232.4 / 230.8**。
- REG: **1/481.9 / 409.6 / 360.1 / 318.1 / 287.4 / 260.1**。
- 合算: **1/159.8 / 150.3 / 142.5 / 134.8 / 128.5 / 122.3**。
- ベース: **約31.5〜32.5G/50枚**。
- BIG最大311枚、REG最大111枚。
- HAZUSE / P-WORLD / pacnkで主要設定別系列を照合。

### resetBehavior v0.7
- 天井非搭載、AT/ART/CZ/長期モード非搭載または確認なし。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- settingChange / carryOver / powerCycleで朝一稼働へ影響する天井・長期モード契約は構造上N/A。
- 設定変更専用の短縮天井、朝一高確、CZ/ART優遇、特定G以内当選率等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有の純電源OFF→ONのみで生じる朝一恩恵/不利も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有のガックン・初期出目・ランプ等による変更/据え置き判別は、機種名/正式型式/メーカー名に「設定変更」「リセット」「朝一」「据え置き」「電源」「ガックン」を組み合わせ再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- ボーナス中ペガサスランプ色は現在設定の示唆であり変更/据え置き判別ではないためresetDetectionへ混入させない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### quality
- BIG/REG/合算/機械割/基本獲得枚数はHAZUSEとP-WORLDで一致、pacnkも同系列。
- 50枚ベースはHAZUSE公開レンジ約31.5〜32.5G/50枚。
- resetBehaviorはノーマル機として非該当項目をN/A化し、公開されていないガックン/電断特殊挙動を一般論から推測していない。
- conflicts: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 2016-12-12群 — OPEN
登録済み:
- **ニューペガサスR**（エマ）— No.1027

未処理先行候補:
- **パチスロ涼宮ハルヒの憂鬱**（SANKYO）— K-Navi/HAZUSE/SANKYO公式で2016-12-12導入月・日を確認済み。次回No.1028候補。
- その後、12/12群をメーカー横断で再監査し、追加機種がなければ群CLOSEDへ進める。

## 境界監査
- 2016-11-29〜12-04: 現調査範囲で全国導入パチスロ追加なし。
- 2016-12-05: HAZUSEカレンダー日付あり。ただしALL7同日掲載で確認できる `ANOTHER牙狼～炎の刻印～` / `ぱちんこテラフォーマーズ` はパチンコ。
- 2016-12-06〜12-11: 現調査範囲で全国導入パチスロ追加なし。
- よって **2016-11-29_TO_2016-12-11_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1027を再取得。
2. **1027件 / chronologicalFrontier 2016-12-12 / 12/12群OPEN** を正本として継続。
3. 次未処理の **SANKYO `パチスロ涼宮ハルヒの憂鬱`** をNo.1028候補として処理。導入日・型式・検定番号・重複を再確認してから保存する。
4. 性能コアに加え、ART間1000G天井、設定変更/据え置き/純電源OFF→ONの天井進捗・モード/状態、朝一恩恵/不利、変更判別、公開リセット数値を検索語/資料系統変更で徹底調査する。
5. No.1028処理後、2016-12-12群を全メーカー横断で再監査し、漏れがなければCLOSED。
6. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1027 ニューペガサスR
- パチビー: https://www.pachibee.jp/movies/index/13138
- HAZUSE: https://hazuse.com/machine/pachislot/6S1222/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S1222/genre/201/
- P-WORLD: https://www.p-world.co.jp/machine/database/8243
- pacnk: https://pacnk.com/slot/tools/sh_newpegasasur.html

### 境界 / 次候補
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
- K-Navi 涼宮ハルヒの憂鬱: https://p-kn.com/slot/2638/
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/682/
- HAZUSE 涼宮ハルヒの憂鬱: https://hazuse.com/machine/pachislot/6S0873/genre/209/
