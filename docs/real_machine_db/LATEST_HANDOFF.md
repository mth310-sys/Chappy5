# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- 毎回最新mainの `README.md`、実機DBミッションv0.7、旧 `INDEX.md`、本 `LATEST_HANDOFF.md`、既存レコード、直近コミットを再取得する。
- `INDEX.md` は19件地点の旧履歴集計。運用上の正本は本 `LATEST_HANDOFF.md` とrepoの実ファイル/直近mainコミット。
- 今回開始時は395件 `つばさTAKEOFF` まで完了済みだったため395を正本として継続。
- 2009-08-05〜16を境界監査し、検定通過日だけの候補等を導入日と誤認しないよう除外。次の具体導入群である2009-08-17へ進んだ。
- `真・女神転生` はrepo未登録を確認し、性能コア＋v0.7 resetBehaviorを収集して **396** に追加。

## 396. 真・女神転生

record:
- `docs/real_machine_db/machines/2009-08-17_shin-megami-tensei.md`

machine record commit:
- `aae11859d299b06026162e664cf07b4d749203df`

要点:
- manufacturer: **タイヨーエレック**
- formalModelName: **真・女神転生 K**（後年整理資料）
- releaseDate: **2009-08-17 / 2009-08-18 CONFLICT**（K-Navi / パチビー）
- generation: **5号機**
- systemType: **A+ART / RT / AT / CZ / パンク回避 / 天井ART / 技術介入**
- 設定構成は **1 / 2 / 5 / 6**。
- BIG合算 **1/431.16→1/327.68**、CB **1/496.48→1/364.09**、全ボーナス合算 **1/230.80→1/172.50**。
- 50枚ベース: **全設定29.97G**（旧パチマガスロマガ）。
- 赤7BIG約261枚、青BAR BIG約225枚、CB約104枚目安 / 技術介入時MAX約116枚の資料あり。
- ART「メガテンチャンス」純増は **約+1.0枚/G**（P-WORLD/K-Navi/パチビー）と **0.8枚/G**（旧パチマガ）が競合。平均せずCONFLICT。
- 機械割もP-WORLD **98.7/102.5/108.1/114.0%**、旧パチマガ **98.72/102.36/107.12/114.00%**、後年整理 **98.0/101.8/107.1/112.9%**を別系列保持。
- 通常天井ARTは **BIG後999G / CB後666G + 約20G潜伏**。次回ボーナスまで継続。
- `coreStatus=COMPLETE_CORE_WITH_PAYOUT_ART_PURE_GAIN_AND_RELEASE_DAY_CONFLICT`。

### v0.7 resetBehavior — 真・女神転生

- K-Naviが本機を **「宵越アリ」「朝イチ特典」** と明示し、専用 **「設定変更・ART後の状態」** 解析項目の存在も確認。
- carryOverBehavior: **PARTIAL_CONFIRMED_CEILING_CARRYOVER_CLASSIFICATION**。据え置き時に宵越し天井狙いが成立する分類までは直接確認。
- settingChangeBehavior / gameCounterReset: **PARTIAL_AFTER_RESEARCH**。設定変更時の999G/666Gカウンタclear/retain本文は現存検索から回収できず、推測しない。
- resetBenefits: **PARTIAL_EXISTENCE_CONFIRMED_DETAIL_UNVERIFIED**。「朝イチ特典」対象であることは確認したが具体内容/発生率を確定できず。
- powerCycleBehavior / ceilingAfterReset / modeAfterReset / stateAfterReset / resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名・型式・メーカー・メガテン略称と設定変更/リセット/朝一/据え置き/電源OFF ON/宵越し/天井/高確/ガックン等を組み替えて再探索済み。
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- 後継/別シリーズの真・女神転生機種のリセット仕様は混入させていない。

## resetBehavior遡及QA

既補完:
- バーグラー
- 快盗天使ツインエンジェル
- 格闘激戦区
- 南国娘30

性能コアの既存COMPLETE_CORE完了判定は不用意に崩さず、resetBehavior QAを別管理する。

## 次回再開地点

### 本線
1. **396件地点 / 真・女神転生まで完了**から再開。
2. 同じ2009-08-17群の **`侍ジャイアンツ2`** をrepo未登録確認後、具体導入日・性能コア・v0.7 resetBehaviorを収集する。
3. 2009-08-18〜23を境界監査してから、2009-08-24群の **`2027II`、`神たま～ARTやで!全員集合～`、`パチスロがんばれ!!ロボコン`、`めぞん一刻2`** 等をrepo既存確認しながら時系列処理。
4. `サンサンハナハナ-30` はパイオニア公式2009年8月発売、当時グリーンべるとで2009-08-30納品予定確認済み。8月末群で具体日順を再確認する。

### resetBehavior遡及QA
1. **南国娘30まで補完済み**。
2. 次の実ファイルは `docs/real_machine_db/machines/2006-10_spiderman2g.md`。設定変更/据え置き/電断時の最大150G/50G RT残G・内部RT状態、パンク回避状態、変更判別を当時業界/旧解析中心に再探索する。
3. その後 `2006-10_surogenjin.md` を確認。補完済みなら次の未補完実ファイルへ進む。

### 次回の必須開始手順
- 最新mainのREADME / 最新ミッション / INDEX / LATEST_HANDOFF / 既存machine tree / 直近コミットを再取得。
- 本handoffよりmainが進んでいれば、**必ず最新mainを優先**。
- 候補名をrepo実ファイル/検索で未登録確認後、性能コア＋v0.7 resetBehaviorを同じ基準で収集。
- 欠損判定前に機種名/型式/メーカー/シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。

## 今回の保存

- 396 真・女神転生: `docs/real_machine_db/machines/2009-08-17_shin-megami-tensei.md`
- machine record commit: `aae11859d299b06026162e664cf07b4d749203df`
- 本 `LATEST_HANDOFF.md` を396件地点へ更新。
