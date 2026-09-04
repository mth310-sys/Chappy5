# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **553**
- latestMachineAdded: **パチスロ真・三國無双**（オリンピア / 2011-02-21）
- latestRecord: `docs/real_machine_db/machines/2011-02-21_pachislot-shin-sangoku-musou.md`
- chronologicalFrontier: **2011-02-21**
- frontierLatestExactDateMachine: **パチスロ真・三國無双**（オリンピア / 2011-02-21）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、552レコード `パチスロろくでなしBLUES` を再取得して開始。
- 開始時正本は **recordCount 552 / chronologicalFrontier 2011-02-18**。
- 2011-02-19〜20を境界監査し、2/20にホール導入と確定できる別機種は今回確認できず。
- オリンピア `パチスロ真・三國無双` はグリーンべると当時記事で **2011-02-20納品開始予定**、コムシード当時告知で **2011-02-21ホール導入**を確認。納品日と稼働日を分離し、主releaseDateは2/21とした。
- 2/21同日群には `戦国BASARA2`、`シオサイマックス-30` が残っているため、次回も同日群を継続する。

## 今回追加 — 553 パチスロ真・三國無双

- メーカー: **オリンピア / 平和**
- 導入: **2011-02-21**（2011-02-20納品開始予定）
- タイプ: **5号機 / A+ART / ゲーム数上乗せART**
- 機械割: **97.8 / 99.2 / 101.3 / 104.1 / 108.2 / 112.1%**
- BIG: **1/315.1 → 1/277.7**
- REG: **1/546.1 → 1/455.1**
- ボーナス合算: **1/199.8 → 1/172.5**
- ART初当たり: **1/597.8 → 1/325.9**
- baseGamesPer50: **31.62〜31.64G**
- BIG: **約203枚**
- REG: **約50枚**
- ART: **三國RUSH / 呂布RUSH、1セット50G+α、約+1.2枚/G**
- 通常時天井: **最大998G+αでART当選**（解析整理資料）

### resetBehavior v0.7 — 真・三國無双

- `settingChangeBehavior`: **GAME_COUNT_RESET_CONFIRMED_SECONDARY**。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE**。解析整理資料に「設定変更後は天井ゲーム数がリセット」と明記。
- `ceilingAfterReset`: **NORMAL_CEILING / NO_SHORTENING_CONFIRMED**。設定変更専用短縮天井は確認されない。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗・内部状態・ART関連保持を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの挙動を直接確定できず。
- `modeAfterReset` / `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。朝一専用振り分けの公開数値を確認できず。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **前日天井進捗の消失**。
- `resetDetection`: ガックン/初期出目/ステージ/表示等を再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。

### 主要出典 — 553（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00001819/`
- コムシード: `https://www.commseed.net/news-old/110420_p1.html`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6221`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/94/olympia_slot_94.php`
- パチマガスロマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/94/c.php`
- pacnk: `https://pacnk.com/slot/tools/sh_sinsengoku.html`
- オリンピア公式素材: `https://www.olympia.co.jp/picture/ps_sangoku/`

## conflicts / 注意

- 5号機クロニクル現行ページには「ボーナス非搭載・純増約2.2枚/G」とする誤混入らしき記載があるが、当時グリーンべると、P-WORLD、パチマガスロマガ、pacnkは **BIG/REG搭載A+ART・純増約1.2枚/G** で一致。性能コアから除外し `SOURCE_ERROR_OR_SERIES_CONTAMINATION` としてレコードに保持。
- 2/20と2/21はCONFLICTではなく、**納品開始予定日 / ホール導入日**の定義差。
- 設定変更時ゲーム数リセットは現時点で二次解析の直接文言を確保しているが、パチマガ公式アーカイブの「朝イチ・設定変更」本文自体は今回回収できず、QA再確認対象。

## 今回のGitHub更新

- 553追加: `docs/real_machine_db/machines/2011-02-21_pachislot-shin-sangoku-musou.md`
- 553 machine record commit: `7c772150e5f547c1dbe03d1af6b9e329ac04484f`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 553 / chronologicalFrontier 2011-02-21**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 553レコードを再取得。
2. **2011-02-21同日群を継続**。強い未処理候補は **戦国BASARA2（エンターライズ） / シオサイマックス-30（パイオニア）**。repo存在確認後、同日群の最古未登録から追加する。
3. `戦国BASARA2` はK-Naviで **2011-02-21ホール導入開始**を確認済み。性能コアではART純増約1.5枚/G、50枚約28.3G、通常天井1059G等の候補資料があるが、次回は当時資料・公式/業界・パチマガ等で再照合する。
4. `シオサイマックス-30` はグリーンべるとで **2月21日から九州地区限定納品予定**、別記事で4月10日から全国納品予定。地域限定初回導入と全国発売を混同せず記録する。
5. 2/21同日群が閉じたら2/22以降を境界監査して前進する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
