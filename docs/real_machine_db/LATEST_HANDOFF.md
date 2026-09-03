# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **534**
- latestMachineAdded: **パチスロ キャプテンハーロックG**（SANKYO / 2011-01-14主値・1/23納品/1/24導入資料CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2011-01-14_captain-harlock-g.md`
- chronologicalFrontier: **2011-01-14**
- frontierLatestMachine: **パチスロ キャプテンハーロックG**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線533「パチスロサクラ大戦3 ～巴里は燃えているか～」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 533 / chronologicalFrontier 2011-01-11。
- 2011-01-11同日群と1/12以降を監査。HAZUSEの1月節点から「キャプテンハーロックG」に**2011-01-14導入開始**の具体日を確認し、repo未登録だったため534件目として追加。
- 当時プレイグラフ転載は**2011-01-24ホール導入**、グリーンべると記事引用は**1/23納品開始**、SANKYO公式は**2011.01**。具体日が競合するため平均せずCONFLICTとして保持。
- 2011-01-21にはトリビー「残機尽きるまで私は戦う」の展示会記事が存在するが、これは**発表/展示会日**でありホール導入日ではないため、そのまま1/21導入として本線に挿入しない。

## 534 — パチスロ キャプテンハーロックG

- メーカー: **SANKYO**
- 世代/タイプ: **5号機 / A+ART / セットストック式ART**
- 導入主値: **2011-01-14**（HAZUSE「導入開始日」）
- 導入CONFLICT: **2011-01-23納品開始 / 2011-01-24ホール導入**とする当時業界資料
- 型式: **パチスロ キャプテンハーロック G**
- 検定番号: **0S0498**
- 機械割: **96.4 / 98.9 / 101.5 / 104.2 / 108.2 / 111.3%**
- BIG合成: **1/425.6 / 407.1 / 404.5 / 392.4 / 390.1 / 362.1**
- REG合成: **1/537.2 / 524.3 / 500.3 / 468.1 / 452.0 / 442.8**
- ボーナス合算: **1/237.4 / 229.1 / 223.7 / 213.5 / 209.4 / 199.2**
- ART初当たり: **1/769.2 / 617.0 / 728.0 / 627.4 / 735.3 / 585.4**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART「アルカディアモード」: **50G / 約+1.5枚/G**
- BIG約**201枚** / REG約**66枚**
- 通常天井: **ボーナス間1100G → 以降次回ボーナスまでART抽選高確モード**
- REG系天井: **ART非当選REG3連続 → 次回ボーナスでART確定**とする旧解析。REG天井はBIGまでクリアされないとの旧天井DB記載。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- パチマガスロマガに本機専用「朝イチ・設定変更」解析項目が存在することまでは確認。
- ただし今回取得できた検索本文では具体的な設定変更時の天井/モード/状態処理を安全に回収できず、一般的5号機挙動からの補完は行っていない。
- 設定変更時のボーナス間1100G進捗: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時のREG連続天井進捗: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井/REG連続回数/低高確/ARTストック・潜伏: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の低確/高確再抽選・振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の短縮天井・朝一専用優遇数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン/液晶/出目等の変更判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetBehaviorQA: **RESEARCHED_WITH_DEDICATED_SOURCE_INDEX_PRESENT_BUT_CONCRETE_RESET_BEHAVIOR_UNVERIFIED**。

## CONFLICT / 注意

- 導入日: HAZUSE **1/14** / グリーンべると記事引用 **1/23納品** / プレイグラフ転載 **1/24ホール導入** / SANKYO公式 **2011.01**。平均化せず全て保持。
- 5号機クロニクルの現行ページには本機を「ボーナス非搭載・ARTのみ・40G/+1.4枚/G」とする説明が混在するが、SANKYO公式・P-WORLD・HAZUSE・当時パチマガのBB/RB搭載・50G/+1.5枚/Gと明確に矛盾するため、**POSSIBLE_SERIES_CONTAMINATION / SOURCE_ERROR** として性能根拠に使用しない。

## 主要出典 — 534（取得日 2026-09-04）

- SANKYO公式オンライン博物館: `https://www.sankyo-fever.jp/collection/538/`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S0498/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6213`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/23/sankyo_slot_23.php`
- パチマガ精密スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/23/h.php`
- Pマンズ（プレイグラフ転載）: `https://p-mans.blogspot.com/2010/`
- グリーンべると記事引用: `https://sulocale.sulopachinews.com/archives/23582`
- クランキーセブン旧天井DB: `https://crankyseven.com/sp/tenjo-5ka.htm`

## 今回のGitHub更新

- 534追加: `docs/real_machine_db/machines/2011-01-14_captain-harlock-g.md`
- machine record commit: `2f94fe668544ee097ba84ae48aa4db536d929146`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 534 / chronologicalFrontier 2011-01-14**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 534実レコードを再取得。
2. **2011-01-15～1/23の境界を最終監査**し、1/14より後・1/24より前に実ホール導入された未登録パチスロがないかをメーカー別/当時業界/HAZUSE節点で確認する。
3. HAZUSEの1/21節点はパチンコや発表日混入を除外し、機種ページの具体的「導入開始日」まで下りて判定する。
4. **キャプテンハーロックGの1/23納品・1/24ホール導入は534のCONFLICTとして登録済みなので重複追加しない。**
5. 1/24前に未処理がなければ、2011年1月の未登録候補（`009-1`、`あっぱれ剣士道`、`じゃりン子チエ 雷蔵伝説`、`サムライチャンプルー極`、`シスタークエスト2`、`ハーレムエース2`、`凄忍`、`幻想水滸伝`、`燃えよ!功夫大戦`、`超重神グラヴィオン`等）について具体導入日を照合し、最古の未登録機へ進む。
6. `残機尽きるまで私は戦う` は2011-01-21展示会記事を確認済みだが、展示会日を導入日としない。納品/ホール導入日を別途確定してキューへ置く。
7. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
