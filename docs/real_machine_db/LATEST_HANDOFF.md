# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **554**
- latestMachineAdded: **戦国BASARA2**（エンターライズ / 2011-02-21）
- latestRecord: `docs/real_machine_db/machines/2011-02-21_sengoku-basara2.md`
- chronologicalFrontier: **2011-02-21**
- frontierLatestExactDateMachine: **戦国BASARA2**（エンターライズ / 2011-02-21）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、553レコード `パチスロ真・三國無双` を再取得して開始。
- 開始時正本は **recordCount 553 / chronologicalFrontier 2011-02-21**。
- repo検索で `戦国BASARA2` が未登録であることを確認し、直前HANDOFF指定の2011-02-21同日群から継続。
- K-Naviで **2011-02-21ホール導入開始**、みんスロも2/21導入を確認。HAZUSEは **2011-02-18導入開始日**とするためreleaseDateはCONFLICTを保持し、主値は明示的なホール導入日2/21を採用。
- 2/21同日群には `シオサイマックス-30` が残るため、次回も同日群を継続する。

## 今回追加 — 554 戦国BASARA2

- メーカー: **エンターライズ / カプコン**
- 型式名: **戦国BASARA2V**
- 検定番号: **0S1154**
- 導入主値: **2011-02-21**（HAZUSE 2011-02-18とCONFLICT）
- タイプ: **5号機 / A+ART / ゲーム数上乗せART / CZ搭載**
- 機械割: **97.8 / 99.3 / 100.8 / 105.0 / 110.8 / 116.3%**
- BIG: **1/407.0前後 → 1/354.2前後**
- REG: **1/655.3前後 → 1/504.1**
- ボーナス合算: **1/251.1 → 1/208.0**
- ART初当たり: **1/435 / 1/372 / 1/414 / 1/314 / 1/330 / 1/259**
- baseGamesPer50: **CONFLICT — HAZUSE約31G / みんスロ28.3G**
- 慶次BIG: **約312枚**
- 赤7/青7BIG: **約204枚**
- REG: **約60枚**
- ART「BASARA FEVER」: **1セット50G+α / 約+1.5枚/G**
- CZ「一触即発高確率」: **20G / ART期待度約50%（HAZUSE）**
- 第1天井: **ボーナス間1059G → 以降のボーナスでART確定**
- 第2天井: **ボーナス間1598G → 夜背景ART 200G**

### resetBehavior v0.7 — 戦国BASARA2

- `settingChangeBehavior`: **GAME_COUNT_RESET_AND_POST_BONUS_STATE_CONFIRMED_SECONDARY**。pacnkに「設定変更後はゲーム数がリセットされ、ボーナス後の状態からスタート」と明記。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE**。1059G/1598G天井進捗は設定変更で消去されるとする解析を採用。
- `ceilingAfterReset`: **NORMAL_CEILINGS / NO_RESET_SHORTENING_CONFIRMED**。リセット専用短縮天井は十分な再探索後も確認できず。
- `modeAfterReset` / `stateAfterReset`: **POST_BONUS_STATE_START_CONFIRMED / EXACT_DISTRIBUTION_UNVERIFIED**。具体的な低確/通常/高確等の振り分け率は未回収。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗・内部状態・ART関連保持を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの挙動を直接確定できず。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **前日天井進捗の消失**。
- `resetDetection`: ガックン/初期出目/ステージ/表示等を再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。

### 主要出典 — 554（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1363/`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S1154/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6244`
- pacnk: `https://pacnk.com/slot/tools/sh_sengokubasara2.html`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/04/enterrise_slot_04.php`
- みんスロ: `https://minslo.com/%E6%88%A6%E5%9B%BDbasara2/`
- カプコン Annual Report 2011: `https://www.capcom.co.jp/ir/data/pdf/annual/2011/annual_2011_01.pdf`

## conflicts / 注意

- **baseGamesPer50 CONFLICT**: HAZUSE約31G vs みんスロ28.3G。平均化しない。追加当時資料でQA再確認。
- **releaseDate CONFLICT**: K-Navi/みんスロ 2011-02-21 vs HAZUSE 2011-02-18。カプコン公式は2011年2月発売。DB主値はK-Naviの明示的「ホール導入開始」2/21。
- 内部状態ラベルはP-WORLD（低確/高確/超高確）とHAZUSE（低確/通常/高確率/前兆）で整理が異なる。完全再現用の全移行テーブルは対象外なので統合しない。
- 設定変更時ゲーム数リセットと「ボーナス後の状態から開始」は現時点でpacnkの直接文言。K-Navi/パチマガには設定変更解析項目の存在を確認したが本文を今回回収できず、QA再確認対象。

## 今回のGitHub更新

- 554追加: `docs/real_machine_db/machines/2011-02-21_sengoku-basara2.md`
- 554 machine record commit: `5ec62c04cbb10f7fd3abb389324b9533d9a6a3ff`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 554 / chronologicalFrontier 2011-02-21**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 554レコードを再取得。
2. **2011-02-21同日群を継続**。最優先候補は **シオサイマックス-30（パイオニア）**。repo存在確認後、未登録なら555件目として処理する。
3. `シオサイマックス-30` は直前調査で、グリーンべるとに **2011-02-21から九州地区限定納品予定**、別記事に **2011-04-10から全国納品予定**の情報あり。地域限定初回導入と全国発売を混同せずreleaseDateNoteへ分離する。
4. 2/21同日群を閉じたら **2011-02-22以降**を境界監査し、具体日が最古の未登録機から前進する。
5. 戦国BASARA2のQAでは、50枚ベース約31G vs 28.3G、2/18 vs 2/21、設定変更本文の追加一次/当時解析照合を優先する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
