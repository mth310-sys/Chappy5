# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **807**
- latestRecordAdded: **マタドール-30**（北電子）— 2014-04-07
- latestRecord: `docs/real_machine_db/machines/2014-04-07_matador-30.md`
- chronologicalFrontier: **2014-04-07**
- frontierLatestMachine: **マタドール-30**
- schema: **resetBehavior v0.7**
- status: **2014-04-07_GROUP_OPEN / MATADOR_30_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード `2014-03-31_haihai-haibi-30.md` を再読。
- INDEXは旧集約（19件表示）のため、README規定どおり **LATEST_HANDOFF + main実レコード** を現在の正本として継続。
- 作業開始時正本は **recordCount 806 / chronologicalFrontier 2014-03-31 / 03-31_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- K-Navi 2014年4月全国新台導入カレンダーでは03/31後の次のパチスロ具体日が **2014-04-07**。04/01〜04/06に掲載される全国一斉導入パチスロ日付はなく、今回の追加候補検索でも具体日付き未登録5号機を固定できなかったため **04-01_TO_04-06_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 04/07群は **マタドール-30 → ハッピージャグラーVII → サムライスピリッツ～剣豪八番勝負～ → パチスロ モンキーターンII** の4機をK-Naviで確認。
- GitHub main検索で「マタドール-30」未登録を確認し、807件目として追加。
- 「ハッピージャグラーVII」もmain未登録を確認済み。04/07群はまだOPEN。

## 今回追加 — マタドール-30

### identity / 性能コア

- manufacturer: **北電子**。
- hall start: **2014-04-07**（K-Navi全国一斉導入開始日）。
- formalModelName: **マタドールKA-30**（北電子公式/P-WORLD）。
- inspection number: **3S0533**（P-WORLD）。
- generation/system: **5号機 / ノーマル / リアルボーナス / 完全告知 / 30φ沖スロ**。
- payout: **97.0 / 98.6 / 100.7 / 103.6 / 106.6 / 110.1%**（pacnk、P-WORLDはレンジ97〜110.1%を照合）。
- BIG: **1/291 / 281 / 270 / 256 / 245 / 232**。
- REG: **1/486 / 458 / 428 / 392 / 360 / 331**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- netIncrease: **NOT_APPLICABLE_REAL_BONUS_TYPE**。
- BIG: **312枚**。
- REG/BONUS GAME: **グリーンべると当時記事 最大104枚 vs P-WORLD 最大117枚**で `CONFLICT_REG_PAYOUT_104_VS_117`。平均せず双方保持。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT**。

### resetBehavior v0.7

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 天井/AT/ART/CZ/出玉管理モードは **NOT_APPLICABLE / NONE_CONFIRMED**、その他の本機固有物理状態は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_CONFIRMED_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CONFIRMED_CEILING**。朝一短縮天井もNONE_CONFIRMED。
- modeAfterReset: AT/ART/CZ/天井用出玉モードは **NOT_APPLICABLE / NONE_CONFIRMED**。
- stateAfterReset: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_TYPE**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties / publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目を組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 「リール・クラッシュフリーズ」は通常のBIG確定プレミアムであり、設定変更ガックンとして混同しない。

## 2014-04-01〜04-07境界監査

- K-Navi月間カレンダーは04/07を次のパチスロ導入日として掲載。
- 04/01〜04/06は **CLOSED_FOR_CURRENT_RESEARCH**。
- 04/07群は4機あり、今回1機目「マタドール-30」を処理したため **GROUP_OPEN**。

## 遡及 resetBehavior QA

- 次の遡及QAカーソルは従来どおり **`docs/real_machine_db/machines/2007-02_skylove.md`**。
- 新規時系列キューを止めず、QAリレー時に継続する。

## safeguards / definitions

- COMPLETE_CORE等の性能側ステータスとresetBehavior QA状態を分離して管理。
- REG獲得枚数104 vs 117は平均せずCONFLICT。
- 2018年「マタドールII-30」や後継機の数値・リセット仕様を混入させない。
- ノーマル機・天井非確認を理由に、設定変更/据え置き/電源OFF→ONの本機固有契約を推定しない。

## 次回再開地点

1. **recordCount 807 / chronologicalFrontier 2014-04-07 / 04-07_GROUP_OPEN** から開始。
2. 次の未処理機種は **ハッピージャグラーVII（北電子）**。main未登録確認済み。
3. その後 **サムライスピリッツ～剣豪八番勝負～（SNKプレイモア） → パチスロ モンキーターンII（山佐）** の順で処理。
4. 4機処理後、04/07同日群をメーカー横断再監査し、漏れがなければGROUP_CLOSED。
5. K-Navi上の次の具体日アンカーは **2014-04-21**。04/08〜04/20境界は04/07群CLOSED後に別資料も含めて監査する。
6. 遡及resetBehavior QAは **`docs/real_machine_db/machines/2007-02_skylove.md`** から継続。
7. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）** を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### マタドール-30 / 04-07群
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`
- 北電子公式 マタドールKA-30検定情報: `https://www.kitadenshi.co.jp/slot-kentei/matador-30/`
- P-WORLD マタドール-30: `https://www.p-world.co.jp/machine/database/7311`
- グリーンべると 2014-02-10: `https://web-greenbelt.jp/00000085/`
- pacnk 設定判別: `https://pacnk.com/slot/tools/sh_matadoru.html`
- 北電子公式アプリ: `https://www.kitadenshi.co.jp/fun/apps/mtd30/`

### 遡及QA
- 次対象: `docs/real_machine_db/machines/2007-02_skylove.md`
