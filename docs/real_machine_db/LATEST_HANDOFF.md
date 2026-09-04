# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **555**
- latestMachineAdded: **シオサイマックス-30**（パイオニア / 2011-02-21 九州地区初回納品）
- latestRecord: `docs/real_machine_db/machines/2011-02-21_shiosai-max-30.md`
- chronologicalFrontier: **2011-02-21**
- frontierLatestExactDateMachine: **シオサイマックス-30**（パイオニア / 2011-02-21）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、554レコード `戦国BASARA2` を再取得して開始。
- 開始時正本は **recordCount 554 / chronologicalFrontier 2011-02-21**。
- repo検索で `シオサイマックス-30` が未登録であることを確認し、直前HANDOFF指定の2011-02-21同日群から継続。
- パイオニア公式は **2011年2月発売**。グリーンべると2011-01-28記事は九州地区限定機として **2011-02-21から納品予定**、HAZUSEは **2011-02-18導入開始日**。さらにグリーンべると2011-04-07記事は全国発売決定・**2011-04-10から全国納品予定**。地域限定初回投入と全国発売を分離し、DB主値は2/21とした。
- 2/21同日群は主要候補を処理済み。次回は2/22以降の境界監査へ進む。

## 今回追加 — 555 シオサイマックス-30

- メーカー: **パイオニア**
- 30φ / 完全告知ノーマル / 天井RT / 技術介入
- 導入主値: **2011-02-21**（九州地区限定初回納品予定）
- releaseDate注意: **HAZUSE 2011-02-18**、パイオニア公式 **2011年2月発売**、全国向け納品 **2011-04-10予定**を分離保持。
- 機械割: **98 / 99 / 100 / 104 / 107 / 110%**
- SBB: **1/885 / 1/885 / 1/885 / 1/780 / 1/780 / 1/780**
- NBB: **1/580 / 1/541 / 1/508 / 1/474 / 1/436 / 1/422**
- BIG合成: **1/350 / 1/336 / 1/323前後 / 1/295 / 1/280 / 1/274**
- REG: **1/936 / 1/936 / 1/936 / 1/936 / 1/936 / 1/595**
- 合算: **1/255 / 1/247 / 1/240 / 1/224 / 1/215 / 1/187**
- baseGamesPer50: **約41.5〜44.5G / 1000円**（グリーンべると業界記事）
- SBB最大 **415枚** / NBB最大 **311枚** / REG **104枚**
- 天井: **ボーナス間1200G → 次回ボーナスまで救済RT、ほぼコイン増減なし**

### resetBehavior v0.7 — シオサイマックス-30

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機専用「朝イチ・設定変更」項目の存在までは確認したが本文未回収。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時1200G天井進捗・天井RT状態を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗・RT状態を直接確定できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更で1200GカウンタCLEAR/RETAINかは推測しない。
- `ceilingAfterReset`: 通常天井**1200G**確定。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: NORMAL/MAXは**ユーザー選択の演出モード**であり、出玉内部モードとして扱わない。リセット専用出玉モードは確認なし。
- `stateAfterReset`: 通常高確等は確認されず、天井RT中の設定変更/電源断時処理のみ **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_DIRECTLY_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: ガックン/初期出目/ランプ/演出モード表示等を再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### 主要出典 — 555（取得日 2026-09-04）

- パイオニア公式 シオサイシリーズ一覧: `https://www.slot-pioneer.co.jp/products/siosai.html`
- パイオニア公式 発売のお知らせ: `https://www.slot-pioneer.co.jp/information/siosaimax.html`
- グリーンべると 2011-01-28: `https://web-greenbelt.jp/00001782/`
- グリーンべると/P-WORLD 2011-04-07 全国発売: `https://news.p-world.co.jp/articles/4588/greenbelt`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/98/pioneer_slot_98.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6263`
- HAZUSE DATA: `https://data.hazuse.com/?machine_code=0S1121`
- pacnk: `https://pacnk.com/slot/tools/sh_siosaimax.html`
- 5号機クロニクル: `https://5goki.com/pioneer`

## conflicts / 注意

- **releaseDate / rollout definition**: 2/18 HAZUSE vs 2/21九州初回納品予定 vs 2011年2月公式発売月 vs 4/10全国納品予定。平均化しない。
- **BIG合成設定3**: HAZUSE 1/322 vs パチマガスロマガ/pacnk 1/323。元確率丸め差候補として保持。
- P-WORLD取得表示ではREG欄に合算値が重複するため、REG根拠にはパチマガ/グリーンべると/HAZUSE/pacnkを優先。
- formalModelName / inspectionNumber は今回十分な表記揺れ検索後も確定できず、`UNVERIFIED_AFTER_RESEARCH`。

## 今回のGitHub更新

- 555追加: `docs/real_machine_db/machines/2011-02-21_shiosai-max-30.md`
- 555 machine record commit: `ce202d36c08854563fa905b352b10137a573a1d1`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 555 / chronologicalFrontier 2011-02-21**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 555レコードを再取得。
2. **2011-02-22〜2011-03-05を境界監査**し、最古の未登録機を特定する。同日/月資料では発表日・納品日・ホール導入日を混同しない。
3. 現時点の次の具体日アンカーは山佐 **「パチスロ『ぼのぼの』〜スウィートver.〜」2011-03-06納品開始予定**（グリーンべると2011-02-28記事）。ただし2/22〜3/5の未処理機がないことを確認してから進む。
4. `シオサイマックス-30` QAでは、パチマガ保存アーカイブの「朝イチ・設定変更」本文、正式型式/検定番号、設定変更時1200Gカウンタ、据え置き/電源OFF→ON、ガックンを優先再探索。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
