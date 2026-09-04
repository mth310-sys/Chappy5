# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **545**
- latestMachineAdded: **楽々温泉記**（アイウィル / 2011-01-31）
- latestRecord: `docs/real_machine_db/machines/2011-01-31_rakuraku-onsenki.md`
- chronologicalFrontier: **2011-01-31**
- frontierLatestMachine: **楽々温泉記**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線レコードを再取得して開始。
- 開始時正本は **recordCount 543 / chronologicalFrontier 2011-01-24**。
- 2011-01-24同日群と前方漏れを再監査。
- `ハーレムエース2` は初回code searchで未登録候補に見えたが、候補パス `docs/real_machine_db/machines/2011-01-11_harem-ace-2.md` を直接取得すると**既存登録済み**と確定。重複作成はしていない。
- `残機尽きるまで私は戦うS` は当時グリーンべるとで**2011-03-06納品開始予定**を確認し、1月候補から除外。
- `シスタークエスト2～魔剣の騎士と白銀の巫女～` はK-Naviで**2011-01-11導入**、repo未登録を確認したためchronologicalFrontier以前の漏れとしてBACKFILL。
- 1/24以降の次の確定節点として、当時Pマンズ/プレイグラフ転載が `楽々温泉記` の**2011-01-31ホール導入予定**を明記。repo未登録を確認し新規追加。
- 以上2件追加により recordCount **545**、chronologicalFrontier **2011-01-31**。

## 今回追加 — シスタークエスト2～魔剣の騎士と白銀の巫女～（BACKFILL）

- メーカー: **SNKプレイモア**
- 導入: **2011-01-11**
- タイプ: **5号機 / ノーマルAタイプ / 天井RT**
- 機械割: **96.7 / 98.3 / 100.2 / 104.5 / 108.4 / 112.2%**
- BIG: **1/268.6 → 1/228.3**
- REG: **1/455.1 → 1/291.3**
- 合算: **1/168.9 → 1/128.0**
- BIG約**312枚** / REG約**104枚**
- BIG後**999G**、REG後**777G**で次回ボーナスまでの天井RT。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — シスタークエスト2

- **設定変更しても天井までの消化ゲーム数はリセットされない**ことをP-WORLDが直接記載。
- gameCounterReset: **RETAIN**
- carryOverBehavior: **CEILING_COUNTER_RETAIN_CONFIRMED**
- 朝一は前日ハマリG数を利用した**宵越し天井狙いが可能**。
- 設定変更専用短縮天井ではなく、通常のBIG後999G / REG後777Gまでの進捗を継承。
- 単純電源OFF→ON、天井RT突入中の設定変更後状態、ガックン/初期出目等の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**。

### 主要出典 — シスタークエスト2（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1321/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6169`
- Pマンズ/プレイグラフ転載: `https://p-mans.blogspot.com/2010/11/`
- パチ7回顧: `https://pachiseven.jp/articles/detail/5164`
- 中一商事: `https://www.nakaiti.com/html/sSNK078.html`

## 今回追加 — 楽々温泉記

- メーカー: **アイウィル**
- 導入: **2011-01-31**
- タイプ: **5号機 / ノーマルAタイプ / ボーナス主体**
- 機械割: **96.2 / 98.8 / 101.2 / 105.3 / 108.4 / 110.6%**
- BIG: **1/221.4 → 1/160.2**
- REG: **1/442.8 → 1/319.7**
- 合算: **1/147.6 → 1/106.7**
- BIG **221枚** / REG **104枚**
- P-WORLDはRT/ARTを搭載しない純粋なノーマルタイプと明記。
- 天井: **非搭載**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**（パチマガ保存ページも「現在調査中」）
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — 楽々温泉記

- 天井、AT/ART/CZ、通常/天国等の長期ゲーム数モードがなく、朝一客行動へ影響する主要reset対象は **NO_MATERIAL_GAMEPLAY_RESET_EFFECT_CONFIRMED_AFTER_RESEARCH**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- advantageousSectionReset: **NOT_APPLICABLE**。
- 設定変更専用の朝一恩恵/不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン、初期出目、単純電源OFF→ON時の低レベル挙動は **UNVERIFIED_AFTER_RESEARCH**。

### CONFLICT — 楽々温泉記

- 後年5号機クロニクルは「Aタイプ(RT機能付き)」「BIG約312枚」と記載するが、P-WORLDは「RTやARTなどの付加機能を搭載しないノーマルタイプ」「BIG221枚」、パチマガの確率/機械割系列もP-WORLDと整合。
- 後年回顧側に別仕様混入/記述誤りの疑いが強いため、**RT搭載・BIG312枚はCONFLICTとして不採用**。平均しない。

### 主要出典 — 楽々温泉記（取得日 2026-09-04）

- Pマンズ/プレイグラフ転載: `https://p-mans.blogspot.com/2010/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6216`
- パチマガスロマガ PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/02/h.php`
- パチマガスロマガ 1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/iwill_slot/02/c.php`
- pacnk: `https://pacnk.com/slot/tools/sh_rakurakuonsen.html`
- 5号機クロニクル: `https://5goki.com/iwill`

## 今回のGitHub更新

- BACKFILL: `docs/real_machine_db/machines/2011-01-11_sister-quest-2.md`
- FRONTIER: `docs/real_machine_db/machines/2011-01-31_rakuraku-onsenki.md`
- LATEST_HANDOFF: 本更新
- `ハーレムエース2` は既存レコードを直接確認し**重複追加なし**。

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- 今回もディレクトリ検索/コード検索だけでは怪胴王直後の「最初の実在resetBehavior欠損ファイル」を順序保証付きで一意確定できなかったため、推測でQA済み範囲を動かしていない。
- 次回はmachine tree上で怪胴王以後の実レコードを日付/パス順に列挙し、resetBehavior有無を直接fetchして最初の欠損から再開する。

## 次回再開地点

1. **recordCount 545 / chronologicalFrontier 2011-01-31**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 今回2レコードを再取得。
2. **2011-01-31同日群を最終監査**し、同日未登録機があれば先に追加。
3. 同日群を閉じた後、**2011-02-01以降の最古未処理機**へ進む。
4. `残機尽きるまで私は戦うS` は2011-03-06納品開始予定のため、2月監査中に誤って繰り上げない。
5. 遡及QAは怪胴王までを既知完了地点として、**最初の実在resetBehavior欠損machine path**を直接確定してから補完。
6. PARTIAL/UNVERIFIEDは表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみ維持。競合は平均せずCONFLICT。
