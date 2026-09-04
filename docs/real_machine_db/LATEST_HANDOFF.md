# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **565**
- latestMachineAdded: **神たま2 ～あっぱれ超みこし祭～**（SNKプレイモア / 2011-04-04）
- latestRecord: `docs/real_machine_db/machines/2011-04-04_kamitama2-appare-choumikoshi-matsuri.md`
- chronologicalFrontier: **2011-04-04**
- frontierLatestExactDateMachine: **神たま2 ～あっぱれ超みこし祭～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線レコードを再取得して開始。
- 開始時は563件 / 2011-03-22だったが、調査中に別リレーが564件目「ヱヴァンゲリヲン～真実の翼～」を先行追加。create競合を検知したため上書きせず、最新mainの564件を正本として再取得して継続した。
- `INDEX.md` は旧少数レコードのままなので、運用上は実machine treeと `LATEST_HANDOFF.md` を最新進捗正本として使用。
- 2011-03-28同日群および3/29〜4/3境界を再監査し、次の全国導入アンカーとして2011-04-04「神たま2 ～あっぱれ超みこし祭～」を確認。
- repo検索で未登録を確認し、565件目として追加。

## 今回追加 — 565 神たま2 ～あっぱれ超みこし祭～

- メーカー: **SNKプレイモア**
- 5号機 / **ボーナス + ART / 引き戻しRT / 天井あり**
- 導入: **2011-04-04**（K-Naviホール導入開始）
- 機械割: **96.7 / 98.4 / 100.1 / 104.8 / 108.5 / 112.2%**
- BIG合算: **1/378.8 / 366.1 / 354.2 / 343.1 / 332.7 / 322.8**
- REG合算: **1/728.2 / 712.3 / 697.2 / 682.7 / 668.7 / 655.4**
- ART初当り: **1/315.7 / 301.4 / 306.9 / 251.6 / 254.4 / 223.7**
- ART「みこし祭」: **1セット30G+α / 約+1.2枚/G**
- 「超みこし祭」: **30G固定 / 約+1.2枚/G**
- すーぱーびっぐ約**306枚** / びっぐ約**207枚** / れぐ約**45枚** / みこしチャンス約**27枚**
- 天井: **ボーナス間1200G**。到達で「超みこし祭+α」が確定し、以降のボーナスでも同恩恵。
- 50枚ベースは検索語・資料系統を変えて再探索後も本機固有値を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。小役確率から逆算していない。

### resetBehavior v0.7 — 神たま2

- `settingChangeBehavior`: **CEILING_GAME_COUNT_CLEARED_CONFIRMED / OTHER_INTERNAL_STATE_UNVERIFIED**
- `carryOverBehavior`: **CEILING_PROGRESS_CARRIED_WHEN_UNCHANGED / OTHER_STATE_PARTIAL**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED**
- `ceilingAfterReset`: **1200G_FROM_RESET / NO_SHORTENING_CONFIRMED**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **PREVIOUS_CEILING_PROGRESS_LOST**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `numericResetData`: **通常天井1200G / 設定変更で天井ゲーム数クリア / 短縮なし確認**

旧5号機天井DBの本機専用記述で、**設定変更後は天井到達までのゲーム数がクリア**されることを確認。K-Naviの当時実戦記述には据え置き・宵々越し天井の実例が残る。ただし単純電源OFF→ON、通常内部モード、ARTストック/潜伏/後夜祭状態、ガックン等は本機固有の直接資料を確定できず推測補完していない。

## 主要出典 — 565（取得日 2026-09-04）

- P-WORLD: `https://www.p-world.co.jp/machine/database/6284`
- K-Navi: `https://p-kn.com/slot/1383/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/33/a.php`
- pacnk: `https://pacnk.com/slot/tools/sh_kamitama2.html`
- CrankySeven 5号機天井DB: `https://crankyseven.com/sp/tenjo-5ka.htm`
- 神たまシリーズ回顧: `https://www.marimo0925.net/pachislot-kikaiwari-ranking-garoudensetsu-ban/`

## 今回のGitHub更新

- 565追加: `docs/real_machine_db/machines/2011-04-04_kamitama2-appare-choumikoshi-matsuri.md`
- 565 machine record commit: `38697aff5239b3554572bc8e3d0b7a2c2172fd94`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 565 / chronologicalFrontier 2011-04-04**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 565レコードを再取得。
2. **2011-04-04同日群を最終監査**。同日未登録5号機があれば最古から566件目として追加。
3. 同日群が閉じたら **2011-04-05以降の最古未処理機**へ進む。現時点で確認できている後続アンカーには2011-04-18「天下布武2」「パチスロ装甲騎兵ボトムズ」、4/24納品予定「メーメーパラダイス」があるが、4/5〜17境界を先に閉じる。
4. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せずCONFLICT。
