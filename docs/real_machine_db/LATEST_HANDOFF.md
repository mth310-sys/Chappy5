# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **543**
- latestMachineAdded: **あっぱれ剣士道**（タイヨーエレック / 2011-01-17 BACKFILL）
- latestRecord: `docs/real_machine_db/machines/2011-01-17_appare-kenshidou.md`
- chronologicalFrontier: **2011-01-24**
- frontierLatestMachine: **超重神グラヴィオン**（2011-01-24同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、542「超重神グラヴィオン」、既存009-1を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 542 / chronologicalFrontier 2011-01-24。
- 前handoff最優先の時系列漏れ候補 `あっぱれ剣士道` を監査。2011-01-17導入は前回外部導入日カレンダーで確認済み、今回も2011/1導入資料を複数照合。main候補パス未登録のため543件目としてBACKFILL。
- 既存 `009-1` は `docs/real_machine_db/machines/2011-01-17_009-1.md` に登録済みを直接再取得したため重複追加しない。

## 543 — あっぱれ剣士道

- メーカー: **タイヨーエレック**
- 世代/タイプ: **5号機 / A+RT / CZ+ゲーム数上乗せRT / 二段階天井**
- 導入主値: **2011-01-17**（BACKFILL）
- 機械割主系列: **96.4 / 98.4 / 101.2 / 103.4 / 106.2 / 110.9%**
- ボーナス合算: **1/199.2 / 190.0 / 177.6 / 168.5 / 157.2 / 141.5**
- 1000円あたりゲーム数: **34.1〜35.6G**（設定1〜6レンジ）
- 天晴BONUS/BIG: **約266枚**
- MID/MB: **約213枚**
- CB/REG: **約91枚**
- RT「激戦モード」: **30G+上乗せ / 約+0.3枚/G / 完走型**
- 特別激戦モード: **75 / 100 / 125 / 150G + 上乗せ**
- 第一天井: **ボーナス間777G → 次回CZ契機で次回ボーナスまで継続するRT**
- 第二天井: **ボーナス間1410G → 次回ボーナス後の特別激戦モード確定**
- 通常CZ周期: **200G**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガ保存INDEXに本機専用「朝イチ・設定変更」項目の存在を確認したが具体本文未回収。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH_WITH_CLEAR_SUGGESTION**。旧天井狙い資料は本機を「宵越し×」とするが、設定変更操作との直接因果本文がないためCLEARへ断定昇格しない。
- ceilingAfterReset: 設定変更専用短縮/延長天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に低確/高確、200G周期CZが存在するが変更時処理未確定。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機）。
- resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **POSSIBLE_LOSS_OF_CEILING_PROGRESS_NOT_CONFIRMED**。
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**。

## CONFLICT — 543

- 機械割設定4はパチマガスロマガ / pacnk / 5号機クロニクルが **103.4%**、P-WORLDのみ **101.2%**。平均せずCONFLICT。主系列は複数一致の103.4%。
- BIG表示はpacnkが黒BIG込みのBIG合成を1/580.0〜1/422.8で表示し、パチマガ/P-WORLDは黒BIG1/1985.9と赤/青BIG1/819.2〜1/537.2を分離。定義差として別保持。

## 主要出典 — 543（取得日 2026-09-04）

- P-WORLD: `https://www.p-world.co.jp/machine/database/6197`
- パチマガスロマガINDEX: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/09/taiyoelec_slot_09.php`
- パチマガスロマガPAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/09/h.php`
- パチマガスロマガ1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/09/c.php`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/09/a.php`
- pacnk: `https://pacnk.com/slot/2011/apparekensidou/top.php`
- 5号機クロニクル: `https://5goki.com/yaiyoelec`
- 旧天井ハイエナ資料: `https://macerate.seesaa.net/article/226189461.html`
- K-Navi: `https://p-kn.com/slot/1337/direct/`

## 今回のGitHub更新

- 543追加: `docs/real_machine_db/machines/2011-01-17_appare-kenshidou.md`
- machine record commit: `3ed4e2edc7799a286bd00fc119ad261a0bed069a`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 543 / chronologicalFrontier 2011-01-24**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 543本体を再取得。
2. `009-1` は535件目として登録済み、`あっぱれ剣士道` は543件目でBACKFILL済み。重複追加しない。
3. **2011-01-24同日群の残存監査**を継続。燃えよ!功夫大戦・凄忍・じゃりン子チエ雷蔵伝説・キャプテンハーロックG・超重神グラヴィオンは登録済み。
4. `残機尽きるまで私は戦う` は **2011-01-21が展示会日**という注意を維持。実ホール導入/納品日を別資料で確定し、2011-01-24以前ならBACKFILL、後なら時系列位置へ送る。
5. 1/24群と遡及漏れを閉じた後、**2011-01-25以降**へ進む。既知の次節点は2011-01-31。`楽々温泉記`、`シスタークエスト2〜魔剣の騎士と白銀の巫女〜` 等をrepo突合し、未登録最古機から544件目として継続する。
6. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
