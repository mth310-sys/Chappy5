# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **556**
- latestMachineAdded: **パチスロ「ぼのぼの」～スウィートver.～**（山佐 / 2011-03-06納品開始予定・2011-03-07ホール導入）
- latestRecord: `docs/real_machine_db/machines/2011-03-06_bonobono-sweet-ver.md`
- chronologicalFrontier: **2011-03-06**
- frontierLatestExactDateMachine: **パチスロ「ぼのぼの」～スウィートver.～**（山佐 / 2011-03-06）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、555レコード `シオサイマックス-30` を再取得して開始。
- 開始時正本は **recordCount 555 / chronologicalFrontier 2011-02-21**。
- LATEST_HANDOFF指定どおり **2011-02-22〜2011-03-05**を境界監査。今回確認した具体日資料では同期間に本機より前の未登録パチスロを確定できず、次の具体日アンカーへ進行。
- repo検索で `ぼのぼの` / `スウィートver` の既存レコードがないことを確認。
- グリーンべると2011-02-28記事で **2011-03-06から納品開始予定**、K-Naviで **2011-03-07ホール導入開始**、山佐公式で **2011年3月稼働**を確認。納品開始とホール導入を分離し、本DB時系列主値は3/6とした。

## 今回追加 — 556 パチスロ「ぼのぼの」～スウィートver.～

- メーカー: **山佐**
- 5号機 / ノーマルAタイプ / ボーナス主体 / REG後20G RT
- 導入主値: **2011-03-06**（初回納品開始予定）
- ホール導入開始: **2011-03-07**（K-Navi）
- 山佐公式: **2011年3月稼働**
- BIG合成: **1/199.8 / 1/199.8 / 1/189.4 / 1/189.4 / 1/179.1 / 1/167.2**
- REG: **1/199.8 / 1/199.8 / 1/211.4 / 1/211.4 / 1/226.0 / 1/248.2**
- ボーナス合算: **全設定共通1/99.9**
- baseGamesPer50: **約37G / 1000円**
- SUPER BIG: **約300枚**
- NORMAL BIG: **約200枚**
- REG: **約50枚**
- REG後RT: **20G / ほぼ現状維持 / 約5回に1回でボーナス引き戻し**

### payoutRate CONFLICT

- パチマガスロマガ / 5号機クロニクル: **97.5 / 98.5 / 100.0 / 101.0 / 103.0 / 107.0%**
- K-Navi: **98.2 / 99.3 / 100.0 / 101.0 / 103.5 / 107.0%**
- グリーンべると業界記事のレンジは **97.5〜107.0%**で前者と整合。平均化せず、主系列と競合系列を分離保持。

### resetBehavior v0.7 — ぼのぼの

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE / NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**。通常時ゲーム数天井は確認されないが、REG後20G RT残Gの据え置き跨ぎ処理は直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE**。単純電源OFF→ON時のREG後RT/プチRT状態処理を直接確定できず。
- `gameCounterReset`: **NOT_APPLICABLE_FOR_CEILING_GAME_COUNT**。通常時の規定G数型天井・解除は確認されない。
- `ceilingAfterReset`: **NOT_APPLICABLE / NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井・朝一天井も確認なし。
- `modeAfterReset`: **NOT_APPLICABLE_FOR_LONG_TERM_OUTPUT_MODE**。朝一専用出玉モード等は確認なし。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE_ONLY**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: ガックン/初期出目/液晶/4thリール表示等を再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### 主要出典 — 556（取得日 2026-09-04）

- 山佐ネクスト公式: `https://www.yamasa-next.co.jp/model_bon/`
- グリーンべると 2011-02-28: `https://web-greenbelt.jp/00001822/`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/178/h.php`
- K-Navi: `https://p-kn.com/slot/1395/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6289`
- 5号機クロニクル 山佐: `https://5goki.com/yamasa`

## conflicts / 注意

- **releaseDate / rollout definition**: 3/6納品開始予定 vs 3/7ホール導入開始 vs 山佐公式2011年3月稼働。イベント定義を分離。
- **機械割**: 97.5/98.5/100.0/101.0/103.0/107.0% vs 98.2/99.3/100.0/101.0/103.5/107.0%。平均化しない。
- **BIG 325/250表記**: K-Navi役構成欄はPAYOUT 325/250、グリーンべると/P-WORLD/山佐公式説明は実獲得約300/200枚。定義差として分離。
- formalModelName / inspectionNumber は今回十分な表記揺れ検索後も確定できず、`UNVERIFIED_AFTER_RESEARCH`。

## 今回のGitHub更新

- 556追加: `docs/real_machine_db/machines/2011-03-06_bonobono-sweet-ver.md`
- 556 machine record commit: `2f66a2fce45c27f523c8dfde2b972685dce25670`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 556 / chronologicalFrontier 2011-03-06**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 556レコードを再取得。
2. **2011-03-06同日群および2011-03-07群を監査**し、最古の未登録機から継続する。
3. K-Navi 2011年3月カレンダーで3/7群として確認済みの候補は **「パチスロ創聖のアクエリオン」「テンションブースター」「残機尽きるまで私は戦う」「パチスロ『モンキーターン』」**。repo重複を先に確認し、未登録の最古を次件とする。
4. 本機のQAでは正式型式/検定番号、REG後RT/プチRT中の設定変更・据え置き・電源OFF→ON、ガックン/初期出目を優先再探索。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
