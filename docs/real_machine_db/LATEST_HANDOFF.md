# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **588**
- latestMachineAdded: **サイバードラゴン2**（山佐 / releaseDate 2011-07-04）
- latestRecord: `docs/real_machine_db/machines/2011-07-04_cyberdragon2.md`
- chronologicalFrontier: **2011-07-04**
- frontierLatestExactDateMachine: **サイバードラゴン2**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線継続 — サイバードラゴン2

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、既存machine treeを再取得して開始。
- 直前のrecordCount 587 / chronologicalFrontier 2011-06-27から、6月残存漏れと6/27同日群を再監査。
- スカイラブ3は既存実パス `docs/real_machine_db/machines/2011-06-27_skylove3.md` を再取得して登録済みと確認し、重複作成を回避。
- 2011-06-28以降を探索し、K-Naviで2011-07-04ホール導入開始を確認した山佐「サイバードラゴン2」を未登録確認後、588件目として追加。
- 山佐公式は2011年7月稼働、グリーンべるとは7月上旬納品予定で整合。

### 性能コア

- 機械割: **96.9 / 98.0 / 100.1 / 105.0 / 109.0 / 113.1%**。
- JAC: **1/280.1 → 1/262.1**。
- ART初当り: **1/229.9 → 1/147.5**。
- JAC+ART合算: **1/126.3 → 1/94.4**。
- JAC最大約**36枚**。
- ART「サイバーRUSH」: **約+2.0枚/G**。玄武・白虎・朱雀の3タイプとプレミアムのドラゴンRUSHを搭載。
- 50枚ベースは検索語・資料系統を変更して横断したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7

- 通常天井: **ART間1280G → ART超高確率状態**。
- K-Naviに本機専用「設定変更後の挙動」「天井機能」「ART準備状態中の天井」解析項目が存在することは確認。
- ただし現存取得本文から設定変更時の1280GカウンタCLEAR/RETAIN、内部状態、CZ、潜伏の具体処理を直接確定できず、`settingChangeBehavior` / `gameCounterReset` / `carryOverBehavior` / `powerCycleBehavior` / `resetDetection` は **UNVERIFIED_AFTER_RESEARCH**。
- リセット専用短縮天井・公開朝一優遇数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- 一般則からの推測補完はしていない。

## 主要出典 — サイバードラゴン2（取得日 2026-09-04）

- 山佐ネクスト: `https://yamasa-next.co.jp/model_cd2/`
- グリーンべると: `https://web-greenbelt.jp/00002152/`
- K-Navi: `https://p-kn.com/slot/1441/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6391`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/180/a.php`
- パチマガスロマガ確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/180/h.php`

## 直前までの重要重複監査情報

- `docs/real_machine_db/machines/2011-06-17_onihama-gaiden-hayato-shippuden.md`
- `docs/real_machine_db/machines/2011-06-20_riospa-rio-no-dai-onsen.md`
- `docs/real_machine_db/machines/2011-06-20_progolfer-saru.md`
- `docs/real_machine_db/machines/2011-06-27_skylove3.md`
- `docs/real_machine_db/machines/2011-06-27_daigyakuten.md`
- `docs/real_machine_db/machines/2011-06_warau-salesman.md`
- 以後もrecursive tree / contents実パス確認を重複判定の優先手順とし、code search未ヒットだけで未登録判定しない。

## 遡及QA継続地点

- **めぞん一刻 (`docs/real_machine_db/machines/2006-11_mezon-ikkoku.md`) までresetBehavior v0.7補完済み**。
- 次のtree実パスは **`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。

## 本線の次回再開地点

1. **recordCount 588 / chronologicalFrontier 2011-07-04**から開始。
2. **2011-07-04同日群を継続監査**。強い未登録候補はニューギン **「センゴク回胴記」**（K-Naviで2011-07-04ホール導入開始を確認済み）。まずtree実パスとrepo内重複を再確認する。
3. 同日群ではGRADIUS THE SLOT等の2011年7月機も具体導入日を照合し、7/4以前・同日なら時系列優先で処理する。
4. 7/4同日群が閉じたら、7/5以降の最古未処理機へ前進する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから確定する。競合は平均せずCONFLICT。
