# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **557**
- latestMachineAdded: **パチスロ創聖のアクエリオン**（SANKYO / 2011-03-07主値）
- latestRecord: `docs/real_machine_db/machines/2011-03-07_sousei-no-aquarion.md`
- chronologicalFrontier: **2011-03-07**
- frontierLatestExactDateMachine: **パチスロ創聖のアクエリオン**（SANKYO / 2011-03-07）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、556レコード「パチスロ『ぼのぼの』～スウィートver.～」を再取得して開始。
- 開始時正本は **recordCount 556 / chronologicalFrontier 2011-03-06**。
- LATEST_HANDOFF指定どおり2011-03-06同日群および2011-03-07群を監査。
- 次候補「パチスロ創聖のアクエリオン」の既存想定パスが存在しないことを確認して557件目として追加。
- 導入日はK-Navi・パチ＆スロ必勝本が **2011-03-07**、SANKYO公式は **2011年3月**。HAZUSEのみ **2011-03-04** のため、3/7を主値、3/4をCONFLICT保持。

## 今回追加 — 557 パチスロ創聖のアクエリオン

- メーカー: **SANKYO**
- 型式: **パチスロ創聖のアクエリオンV**
- 検定番号: **0S1291**
- 5号機 / A+ART / セットストック式ART
- 導入主値: **2011-03-07**
- 機械割主系列: **96.3 / 98.1 / 100.1 / 104.0 / 108.8 / 113.3%**
- BIG: **1/399.61 / 392.43 / 385.51 / 378.82 / 366.12 / 354.25**
- REG: **1/595.78 / 579.96 / 564.97 / 550.72 / 524.29 / 500.27**
- ボーナス合算: **1/239.18 / 234.06 / 229.15 / 224.44 / 215.58 / 207.39**
- ボーナス+ART合算: **1/143 / 131 / 134 / 120 / 121 / 103**
- ART初当たり補助値: **約1/358 / 302 / 325 / 258 / 281 / 208**（単一二次資料）
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- ART「創聖RUSH」: **30/50/70/90/150G、約+1.5枚/G**
- S・BIG/赤BIG: **約240枚**、青BIG **約210枚**、緑BIG **約180枚**、REG **約42枚**
- 通常天井: **ボーナス間1280G → 前兆経由でART**

### payoutRate CONFLICT

- K-Navi / P-WORLD: **96.3 / 98.1 / 100.1 / 104.0 / 108.8 / 113.3%**
- パチ＆スロ必勝本シミュレート: **97.02 / 98.65 / 100.46 / 102.95 / 105.44 / 109.60%**
- 必勝本は「シミュレート値」と明記。平均化せず定義付きCONFLICTとして保持。

### resetBehavior v0.7 — 創聖のアクエリオン

- `settingChangeBehavior`: **CONFIRMED**。設定変更で天井ゲーム数リセット＋内部モード再抽選。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE_CONFIRMED**。ボーナス間1280G進捗は設定変更で消失。
- `ceilingAfterReset`: 通常天井 **1280G**。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset` / `stateAfterReset`: **PUBLIC_NUMERIC_DISTRIBUTION_CONFIRMED**。
  - 設定1・2: 低確 **66.28%** / 高確 **33.33%** / 超高確 **0.39%**
  - 設定3・4: 低確 **59.61%** / 高確 **40.00%** / 超高確 **0.39%**
  - 設定5・6: 低確 **49.61%** / 高確 **50.00%** / 超高確 **0.39%**
- `resetBenefits`: 高確以上スタートが設定1・2 **33.72%**、設定3・4 **40.39%**、設定5・6 **50.39%**。
- `resetPenalties`: 前日1280G天井進捗消失。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗・状態・ARTストック/潜伏の厳密保持は直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井進捗・状態・ARTストック/潜伏を直接確定できず。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶等を横断再探索後も本機固有の確定根拠なし。
- `advantageousSectionReset`: **NOT_APPLICABLE**。

### 主要出典 — 557（取得日 2026-09-04）

- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/542/`
- K-Navi: `https://p-kn.com/slot/1370/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6232`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1758/1/28419`
- パチ＆スロ必勝本 設定変更&天井情報: `https://p.hisshobon.jp/machine/1758/1/27733`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/24/a.php`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S1291/genre/201/`
- A-SLOT: `https://www.a-slot.com/SHOP/sankyo34.html`

## conflicts / 注意

- **releaseDate**: K-Navi/必勝本 2011-03-07 vs HAZUSE 2011-03-04。SANKYO公式は月のみ。複数一致の3/7を主値。
- **機械割**: 市場掲載系列と必勝本シミュレート系列が大きく異なるため平均化しない。
- baseGamesPer50は検索語・資料系統を変えて十分再探索したが直接値を確定できずUNVERIFIED。
- 後継「創聖のアクエリオンII」「アクエリオンEVOL」「アクエリオンALL STARS」のリセット情報を初代へ混入させない。

## 今回のGitHub更新

- 557追加: `docs/real_machine_db/machines/2011-03-07_sousei-no-aquarion.md`
- 557 machine record commit: `646779df167c96c8d81f47c73c628141be8dfc3a`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` はresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 557 / chronologicalFrontier 2011-03-07**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 557レコードを再取得。
2. **2011-03-07同日群を継続監査**し、repo重複確認後に最古の未登録機を次件とする。
3. LATEST_HANDOFF由来の残存候補は **「テンションブースター」「残機尽きるまで私は戦う」「パチスロ『モンキーターン』」**。
4. 同日群処理後に3/8以降へ進み、日付定義（発表/納品/ホール導入）を混同しない。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
