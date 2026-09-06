# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **806**
- latestRecordAdded: **ハイハイハイビ-30**（パイオニア）— 2014-03-31
- latestRecord: `docs/real_machine_db/machines/2014-03-31_haihai-haibi-30.md`
- chronologicalFrontier: **2014-03-31**
- frontierLatestMachine: **ハイハイハイビ-30**
- schema: **resetBehavior v0.7**
- status: **2014-03-31_GROUP_CLOSED_FOR_CURRENT_RESEARCH / HAIHAI_HAIBI_30_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-03-17_slot-jackpot-okazaki.md`、遡及QA対象 `2007-02_pikaslo.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を現在の正本として継続。
- 作業開始時正本は **recordCount 805 / chronologicalFrontier 2014-03-17 / 03-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- K-Navi月間カレンダーを日付境界として再監査した結果、03/17の次のパチスロ具体日として **2014-03-31「ハイハイハイビ-30」**を検出。03/18〜03/30には同カレンダー上の新規パチスロ日付を確認できなかった。
- 一度4/7群へ先行して「マタドール-30」レコードを作成したが、03/31漏れ検出時点で時系列順保全のため直ちに削除。正本recordCountには含めない。4/7群は次回以降に正しい順序で再処理する。
- GitHub main検索で「ハイハイハイビ-30」未登録を確認後、806件目として追加。
- K-Navi 03/31群でパチスロとして掲載されるのは今回の「ハイハイハイビ-30」1機。追加候補を具体日・機種名で再探索し、今回それ以上の未登録5号機を固定できなかったため **03-31_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 今回追加 — ハイハイハイビ-30

### identity / 性能コア

- manufacturer: **パイオニア**。
- hall start: **2014-03-31**（K-Navi全国新台導入カレンダー）。
- パイオニア公式旧製品一覧は **2014年4月発売**、パチマガスロマガ旧攻略は **2014年3月**。3/31具体日と月表記の粒度差として保持。
- formalModelName: **ハイビGX-30**、検定番号 **3S0695**（P-WORLD）。
- generation/system: **5号機 / ノーマル / リアルボーナス / 完全告知 / 30φ沖スロ**。
- payout: **97 / 98 / 100 / 104 / 107 / 110%**。
- BIG: **1/288 / 1/278 / 1/274 / 1/257 / 1/243 / 1/229**。
- REG: **1/436 / 1/420 / 1/394 / 1/370 / 1/350 / 1/332**。
- bonus combined: **1/173 / 1/167 / 1/161 / 1/151 / 1/143 / 1/135**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- netIncrease: **NOT_APPLICABLE_REAL_BONUS_TYPE**。
- BIG: **約/最大308枚**。
- REGは **パチマガスロマガ 約112枚 vs P-WORLD 最大100枚**で `CONFLICT_REG_PAYOUT_112_VS_100`。平均せず双方保持。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT**。

### resetBehavior v0.7

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 天井/AT/ART/CZ/出玉管理モードは **NOT_APPLICABLE / NONE_CONFIRMED**、その他の物理状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。設定変更専用短縮天井もNONE_CONFIRMED。
- modeAfterReset: AT/ART/CZ/天井用内部出玉モードは **NOT_APPLICABLE / NONE_CONFIRMED**。
- stateAfterReset: 朝一高確/CZ/RT等は **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_TYPE**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties / publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 機種名・型式名に設定変更/リセット/朝一/据え置き/ガックン/初期出目/ハイビスカス等を組み合わせて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- ノーマル機・天井非搭載という事実から、設定変更/据え置き/電源OFF→ONの本機固有物理契約を推定していない。

## 2014-03-18〜03-31境界監査

- K-Navi 2014年3月月間カレンダーでは03/17後、次のパチスロ掲載は **03/31 ハイハイハイビ-30**。
- 03/18〜03/30について今回追加すべき具体日パチスロを固定できなかったため **03-18_TO_03-30_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 03/31群はK-Navi掲載パチスロが「ハイハイハイビ-30」1機で、今回806件目として処理。**03-31_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 遡及 resetBehavior QA

### PIKASLO（ピカスロ）

- 対象: `docs/real_machine_db/machines/2007-02_pikaslo.md`。
- 既存 `coreStatus: PARTIAL` は維持。性能完了判定を不用意に変更していない。
- 既存resetBehaviorは既にPARTIALとして収集済みで、天井非搭載、有利区間非該当、本機固有の設定変更/据え置き/電源OFF→ON/変更判別はUNVERIFIEDという整理。
- 今回「PIKASLO / ピカスロ / ピカスロ1 / ヤーマ」に「設定変更 / リセット / 朝一 / 据え置き / 電源 / ガックン」を組み合わせて再探索したが、既存記録を上書きできる新たな本機固有の直接契約を固定できず、**PARTIAL維持でQA通過**。
- Git履歴を確認し、PIKASLO追加の直後に追加された実レコードは **`docs/real_machine_db/machines/2007-02_skylove.md`**（commit `7fd99955ce045a4afc969532424b2b18e3ccec6b`）。
- 次の遡及QAカーソル: **`2007-02_skylove.md`**。

## safeguards / definitions

- COMPLETE_CORE等の性能側ステータスとresetBehavior QA状態を分離して管理。
- ハイハイハイビ-30のREG獲得枚数競合は平均せずCONFLICT。
- パイオニア公式「2014年4月発売」とK-Navi「2014-03-31全国導入開始」は粒度差として併記。
- 後継2025年「ハイビリターン-30」の数値・リセット情報を混入させない。
- 一般的なパイオニア/沖スロ/5号機ノーマル挙動から本機固有resetBehaviorを推測しない。

## 次回再開地点

1. **recordCount 806 / chronologicalFrontier 2014-03-31 / 03-31_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. **2014-04-01〜04-06境界**を具体日・メーカー別資料で監査。
3. 漏れがなければK-Naviで確定済みの **2014-04-07群**へ進む。
4. 04-07群のパチスロ掲載順/候補: **マタドール-30（北電子） → ハッピージャグラーVII（北電子） → サムライスピリッツ～剣豪八番勝負～（SNKプレイモア） → パチスロ モンキーターンII（山佐）**。既存登録有無をmain再検索してから最初の未処理を807件目として処理。
5. 04-07群も1機処理で閉じず、全4機と追加メーカー横断監査後にCLOSED判定する。
6. 遡及resetBehavior QAは **`docs/real_machine_db/machines/2007-02_skylove.md`** から継続。新規時系列キューを止めない。
7. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### ハイハイハイビ-30 / 境界
- K-Navi 2014年3月新台導入カレンダー: `https://p-kn.com/calendar/201403/`
- パイオニア公式旧製品一覧: `https://www.slot-pioneer.co.jp/products/30.html`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/109/a.php`
- パチマガスロマガ確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/109/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7348`
- pacnk: `https://pacnk.com/slot/tools/sh_haihaihaibi.html`
- 5号機クロニクル パイオニア: `https://5goki.com/pioneer`
- 当時業界記事再録: `https://p-mans.blogspot.com/2014/03/`

### 次境界 / 04-07群
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`

### 遡及QA
- PIKASLO: `docs/real_machine_db/machines/2007-02_pikaslo.md`
- 次対象: `docs/real_machine_db/machines/2007-02_skylove.md`
- PIKASLO追加commit: `7ba5fad994983cf8868f59389e3be22227a3a51c`
- 次レコードSky Love追加commit: `7fd99955ce045a4afc969532424b2b18e3ccec6b`
