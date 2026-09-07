# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **939**
- latestRecordAdded: **パチスロ ああっ女神さまっ**（D-light）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-16_pachislot-aa-megamisama.md`
- chronologicalFrontier: **2015-11-16**
- frontierLatestMachine: **パチスロ ああっ女神さまっ**
- schema: **resetBehavior v0.7**
- status: **2015-11-16_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.938 `2015-11-16_pachislot-god-eater-aragami-ver.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **938** / chronologicalFrontier **2015-11-16** / 11-16群OPEN。
- main先行を尊重して過去会話地点へ戻らず、handoff指定の次未処理 **パチスロ ああっ女神さまっ** をNo.939として追加。

## No.939 — パチスロ ああっ女神さまっ
- record: `docs/real_machine_db/machines/2015-11-16_pachislot-aa-megamisama.md`
- manufacturer: **D-light（ディ・ライト）**
- releaseDate: **2015-11-16**
- formalModelName: **ああっ女神さまっWT**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機・A+ART / リアルBIG+疑似REG / CZ**

### performanceCore
- 機械割: **97.0 / 98.6 / 100.2 / 102.5 / 105.4 / 108.7%**。
- ART初当たり: **1/529.4 / 507.7 / 486.1 / 457.0 / 423.0 / 398.0**。
- ボーナス合算: **1/248.2 / 241.8 / 236.6 / 228.3 / 223.6 / 219.1**。
- 50枚ベース: **約37G/50枚**。
- ART純増: **約1.1枚/G**、ボーナス込み **約1.4枚/G**。
- リアルBIG: **約180枚**。
- ART「ノルンRUSH」: **1セット30G以上**、初当たり時は特化ゾーンから開始。
- CZ「天使降臨ゾーン」: **15G / ART期待度約30%**。

### resetBehavior v0.7
- 通常のゲーム数天井: **非搭載**。
- 設定変更時は **内部消化ゲーム数をRESELECT**。
- 設定変更時内部消化G数振り分け:
  - 設定1〜5: 0G〜74.7 / 200G〜0.1 / 400G〜0.1 / 600G〜0.1 / 800G〜25.0%
  - 設定6: 0G〜24.7 / 200G〜0.1 / 400G〜0.1 / 600G〜0.1 / 800G〜75.0%
- **800G以上スタート率は設定1〜5=25.0%、設定6=75.0%**。
- 内部消化1000G以上では、BIG時のART抽選が優遇されるモード/状態へ移行する解析あり。
- したがって朝一恩恵は「800G天井短縮」ではなく、**内部消化G数の先行スタートによる1000G以上優遇領域への早期到達**として保存。
- 据え置き時の内部消化G数引継ぎ、純電源OFF→ON時の内部消化G数/高確状態/ステージ契約は、本機固有直接資料を十分再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン/初期出目/ランプ等の変更判別も `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### conflict / definition control
- pacnkの自動生成欄に「天井（約800G）」相当表示があるが、同ページ本文はゲーム数天井非搭載と明記し、800Gは設定変更時の内部消化G数振り分け。本DBでは通常天井800Gとして採用しない。
- 型式名はDMMぱちタウン/Re.design/中古実機DBで「ああっ女神さまっWT」が一致。一方、検定通過確認サイトには「ああっ女神さまっF」表記もあるため、検定番号およびF/WT関係を推測せず保持。

## 2015-11-16群 — OPEN
処理済み:
1. パチスロ鬼武者3 時空天翔 — No.937
2. パチスロ ゴッドイーター 荒神Ver. — No.938
3. パチスロ ああっ女神さまっ — No.939

未処理強候補:
1. **スーパーブラックジャック2**（ネット）
2. **パチスロ銀と金2**（タイヨーエレック）

- `スーパーブラックジャック2` は現時点のGitHub検索で既存レコードなし。
- 候補だけに限定せず、11/16同日を全メーカー横断で再監査してからCLOSED判定する。
- 地域先行/後発、納品日/全国導入日の定義差を混同しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaNextInspection: **2005-12_haisai-shiohime.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線No.939新規収集を優先し、遡及QA地点は前進させていない。

## 次回再開地点
1. **recordCount 939 / chronologicalFrontier 2015-11-16 / 11/16群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.939を再取得。
3. 本線は **2015-11-16 スーパーブラックジャック2（ネット）** を次未処理として、既存レコード重複を確認してから性能コア + resetBehavior v0.7で登録。
4. 続いて **パチスロ銀と金2** を照合し、同日全メーカーを横断監査する。候補だけに限定しない。
5. 遡及QAは `2005-12_haisai-shiohime.md` から継続。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 「内部消化ゲーム数」と通常の天井ゲーム数を混同しない。

## 主要出典 — 取得日 2026-09-08
### No.939 パチスロ ああっ女神さまっ
- K-Navi: https://p-kn.com/slot/2383/
- man-soft: https://smaslo.man-soft.com/slot-kaiseki/aamegamisama.html
- スロパチクエスト: https://www.slopachi-quest.com/article/aa-megamisama/
- PiDEA X: https://www.pidea.jp/articles/%E3%83%87%E3%82%A3%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%88%E3%80%8C%E5%A5%B3%E7%A5%9E%E3%81%95%E3%81%BE%E3%81%A3%E3%80%8D%E4%B8%8A%E4%B9%97%E3%81%9B%E9%87%8D%E8%A6%96%E3%81%AEA%2BART
- グリーンべると: https://web-greenbelt.jp/00008204/
- DMMぱちタウン: https://p-town.dmm.com/machines/2340
- P-WORLD: https://www.p-world.co.jp/machine/database/7896
- ちょんぼりすた: https://chonborista.com/slot/d-light/14419/
- pacnk: https://pacnk.com/slot/tools/sh_aamegamisama.html
- Re.design: https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2015100916002001

## confidence
- No.939 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY_SCHEDULE
- No.939 formalModelName: ANALYSIS_HIGH_MULTI_DATABASE
- No.939 inspectionNumber: UNVERIFIED
- No.939 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY
- No.939 noOrdinaryGameCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- No.939 resetInternalConsumedGameReselect: ANALYSIS_HIGH_DIRECT_NUMERIC
- No.939 resetNumericDistribution: ANALYSIS_HIGH_DIRECT_NUMERIC
- No.939 resetBenefit1000GPreferentialBigArt: ANALYSIS_HIGH_SINGLE_DIRECT
- No.939 carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- No.939 purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- No.939 resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
