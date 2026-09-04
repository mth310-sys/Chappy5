# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **549**
- latestMachineAdded: **頑固一徹**（アリストクラートテクノロジーズ / 2011-02-07）
- latestRecord: `docs/real_machine_db/machines/2011-02-07_ganko-ittetsu.md`
- chronologicalFrontier: **2011-02-07**
- frontierLatestMachine: **頑固一徹**（同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線548レコード `秘宝伝 ～封じられた女神～` を再取得して開始。
- 開始時正本は **recordCount 548 / chronologicalFrontier 2011-02-07**。
- 前HANDOFF候補の `頑固一徹` を再探索。パチビーが **2011-02-07導入**を直接掲載し、P-WORLD・K-Navi・パチマガスロマガ・CrankySevenで同一機種の性能を照合。
- repo code searchで未登録を確認し549件目として追加。
- chronologicalFrontierは **2011-02-07** のまま。同日群は未完了。
- 同日候補としてDAXEL `幕末維新龍馬烈伝` がパチビーで **2011-02-07導入**と確認でき、repo code searchでも未登録。次回最優先候補。
- `パチスロ スーパー海物語IN沖縄30KD` は別スペックとして2011年2月導入まで確認済みだが、具体日未確定のため2/7以前・同日を推定しない。

## 今回追加 — 頑固一徹

- メーカー: **アリストクラートテクノロジーズ**
- 導入: **2011-02-07**
- タイプ: **5号機 / ノーマルタイプ / ボーナス主体 / 技術介入 / 4G演出用プチRT**
- 機械割: **96.8 / 98.7 / 101.3 / 105.2 / 110.0 / 119.9%**
- BIG: **1/280.1 / 273.1 / 264.3 / 251.1 / 237.4 / 213.5**
- REG: **1/368.2 / 348.6 / 326.0 / 302.0 / 276.5 / 213.5**
- ボーナス合算: **1/159.1 / 153.1 / 146.0 / 137.1 / 127.7～127.8 / 106.7**
- baseGamesPer50: **33.49 / 33.95 / 34.59 / 35.68 / 37.12 / 39.38G**
- BIG: **最大311枚**
- REG: **最大103枚**
- 特殊リプレイ後: **4G演出用プチRT**
- 通常ゲーム数天井: **なし**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — 頑固一徹

- ボーナス主体ノーマルタイプで、通常ゲーム数天井・ART/AT/CZ・長期ゲーム数モードを持たないことを確認。
- `gameCounterReset`: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。
- `modeAfterReset`: **NOT_APPLICABLE_AS_LONG_TERM_GAME_COUNT_MODE**。
- `advantageousSectionReset`: **NOT_APPLICABLE**（5号機）。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井進捗、ARTストック、CZ等の主要な朝一持越し対象は確認されないため、設定変更/据え置き/単純電源OFF→ONによるホール経営上の主要差は **NO_MATERIAL_GAMEPLAY_EFFECT_CONFIRMED** と整理。
- 一方、4G演出RT・初期出目・ボーナス成立状態等の低レベル処理、ガックン/表示等の変更判別は本機固有の直接根拠を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- パチマガスロマガ保存インデックスには本機専用「朝イチ・設定変更」項目の存在を確認したが、具体本文は取得できず推測で補完しない。

### CONFLICT / 丸め差

- 性能コアに実質的CONFLICTなし。
- 設定5のボーナス合算のみ **1/127.7 / 1/127.8** の掲載差があるが、BIG/REG基礎確率系列は一致しており丸め差として保持。平均化しない。

### 主要出典 — 549（取得日 2026-09-04）

- パチビー: `https://www.pachibee.jp/machines/index/210110002`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6181`
- K-Navi 機械割: `https://p-kn.com/slot/1333/29256/`
- パチマガスロマガ 1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/44/c.php`
- パチマガスロマガ index: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/44/l.php`
- CrankySeven: `https://crankyseven.com/gankoittetu-pc.htm`
- ドラス/ValuePress: `https://www.value-press.com/pressrelease/76922`

## 今回のGitHub更新

- 549追加: `docs/real_machine_db/machines/2011-02-07_ganko-ittetsu.md`
- machine record commit: `d0f305d6972d3ccc78e49138a421cb7574115930`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 549 / chronologicalFrontier 2011-02-07**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 549レコードを再取得。
2. **2011-02-07同日群を継続**。DAXEL `幕末維新龍馬烈伝` はパチビーで2011-02-07導入、repo未登録を確認済み。まずこれを次の新規候補として性能コア+resetBehavior v0.7を収集する。
3. `パチスロ スーパー海物語IN沖縄30KD` の具体的ホール導入日を引き続き再探索し、2/7以前または同日を確定できた場合は時系列優先で別レコード化する。月粒度しか取れなければ無理に日付を推定しない。
4. その他2/7同日候補を導入カレンダー/業界記事/当時解析で照合し、同日群を閉じてから後日へ進む。
5. `残機尽きるまで私は戦うS` は2011-03-06納品開始予定のため2月へ誤繰上げしない。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
