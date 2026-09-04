# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **587**
- latestMachineAdded: **パチスロ笑ゥせぇるすまん**（三洋物産 / releaseDate 2011-06 月粒度 / BACKFILL）
- latestRecord: `docs/real_machine_db/machines/2011-06_warau-salesman.md`
- chronologicalFrontier: **2011-06-27**
- frontierLatestExactDateMachine: **大逆転**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線継続 — パチスロ笑ゥせぇるすまん

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、既存machine treeを再取得して開始。
- `INDEX.md` は旧情報のためREADME規約どおり最新handoffと実machineレコードを進捗正本として使用。
- 直前handoffで6月漏れ候補だった初代 **パチスロ笑ゥせぇるすまん** を、machine tree/code searchで未登録確認後に587件目としてBACKFILL追加。
- 導入時期は複数の初代専用旧DBで **2011年6月**まで確定。SANYO旧公式系、当時解析、旧新台カレンダー、候補日別検索を追加で行ったが、具体日を安全に確定できなかったため `releaseDate: 2011-06` とし、6/27以前・同日・以後を推測で固定しない。
- 月粒度BACKFILLのため **chronologicalFrontier 2011-06-27は維持**。

### 性能コア

- 設定別機械割: **97.7 / 99.5 / 100.6 / 104.0 / 107.3 / 112.0%**。
- BIG系: 黒GIG **1/1985（全設定）**、赤GIG **1/993 → 1/829**。
- ART初当たり: **1/260 → 1/197**。
- 笑ゥBIG約**204枚**、モグロBIG約**102枚**。
- ART「フクゾーラッシュ」: **1セット40G+α / 約+1.8枚/G**。
- 50枚ベースは「初代/三洋物産/50枚/1000円/ベース/コイン持ち」等を組み替えて旧解析・旧DB・回顧資料を横断したが、初代固有の直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。後継機値や小役から逆算していない。

### resetBehavior v0.7

- `settingChangeBehavior`: **VERIFIED_PARTIAL**。設定変更で**天井ゲーム数再セット**、**内部モード再抽選**、ステージはランダム。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_VERIFIED**。
- `modeAfterReset`: 公開数値あり。
  - 通常A: 設定1〜3 **75.0%** / 設定4・5 **80.0%** / 設定6 **85.0%**
  - 通常B: **20.0% / 15.0% / 10.0%**
  - 天国: **全設定5.0%**
- 通常時最大天井: **999G**。天国滞在時は**99G以内**に天井到達。
- `resetBenefits`: **設定変更時天国5.0%**。
- `resetPenalties`: **前日までの天井進捗消失**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目等を本機固有資料で確定できず。
- `advantageousSectionReset`: **NOT_APPLICABLE**。

## 主要出典 — パチスロ笑ゥせぇるすまん（取得日 2026-09-04）

- パチ＆スロ必勝本「設定変更&天井情報」: `https://p.hisshobon.jp/machine/1822/1/29694`
- パチ＆スロ必勝本「通常時のモード」: `https://p.hisshobon.jp/machine/1822/1/29945`
- pacnk初代設定判別DB: `https://pacnk.com/slot/2011/warausalesman/top.php`
- P-WORLD初代機種ページ: `https://www.p-world.co.jp/machine/database/6350`
- パチマガスロマガ初代基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/13/a.php`
- 歴代シリーズ回顧: `https://www.marimo0925.net/pachislot-kikaiwariranking-warausealsman-ban/`

## 直前までの重要重複監査情報

- `docs/real_machine_db/machines/2011-06-17_onihama-gaiden-hayato-shippuden.md`
- `docs/real_machine_db/machines/2011-06-20_riospa-rio-no-dai-onsen.md`
- `docs/real_machine_db/machines/2011-06-20_progolfer-saru.md`
- `docs/real_machine_db/machines/2011-06-27_daigyakuten.md`
- その他6月後半レコードもtree上に存在するため、以後は**tree実パス確認→fetch_file**を重複判定の優先手順とする。GitHub code searchの未ヒットだけを未登録根拠にしない。

## 遡及QA継続地点

- **めぞん一刻 (`docs/real_machine_db/machines/2006-11_mezon-ikkoku.md`) までresetBehavior v0.7補完済み**。
- 次のtree実パスは **`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。

## 本線の次回再開地点

1. **recordCount 587 / chronologicalFrontier 2011-06-27**から開始。
2. 2011年6月の残存漏れをrecursive tree / contents実パス優先で最終監査する。初代「笑ゥせぇるすまん」は月粒度BACKFILL済みなので重複作成しない。
3. 6/27同日群を最終監査し、既存レコードを飛ばさず重複も作らない。
4. 6月内の漏れが閉じたら **2011-06-28以降の最古未処理機**へ前進する。
5. PARTIAL/UNVERIFIEDとreset欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで十分再探索し、競合は平均せずCONFLICTとして分離する。
