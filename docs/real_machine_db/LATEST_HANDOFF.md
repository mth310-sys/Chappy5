# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **938**
- latestRecordAdded: **パチスロ ゴッドイーター 荒神Ver.**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-11-16_pachislot-god-eater-aragami-ver.md`
- chronologicalFrontier: **2015-11-16**
- frontierLatestMachine: **パチスロ ゴッドイーター 荒神Ver.**
- schema: **resetBehavior v0.7**
- status: **2015-11-16_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.937 `2015-11-16_pachislot-onimusha3-jiku-tensho.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本 recordCount **937** / chronologicalFrontier **2015-11-16** / 11-16群OPEN。
- main先行を尊重して過去会話のNo.933地点へ戻らず、handoff指定の次未処理 **パチスロ ゴッドイーター 荒神Ver.** をNo.938として追加。

## No.938 — パチスロ ゴッドイーター 荒神Ver.
- record: `docs/real_machine_db/machines/2015-11-16_pachislot-god-eater-aragami-ver.md`
- manufacturer: **山佐**
- releaseDate: **2015-11-16**
- formalModelName: **パチスロゴッドイーターFF**
- inspectionNumber: **4S0913**
- generation/system: **5号機・旧基準AT / ゲーム数解除+CZ / ゲーム数上乗せ**

### performanceCore
- 機械割: **96.9 / 98.8 / 100.3 / 102.1 / 105.0 / 108.2%**。
- AT初当たり: **1/399.2 / 375.8 / 372.4 / 352.5 / 350.3 / 327.8**。
- 50枚ベース: **約30G/50枚**。
- 純増: **約2.7枚/G**。
- AT「アラガミバースト」: **初当たり時50G or 100G + ストーリー12G**。ダブル7は約33%で100Gスタート。
- CZ「殲滅モード」: **10G+α**。
- 通常天井: **AT間最大999G**。
- モード別最大規定G: 通常A999 / 通常B768 / 天国準備384 / 天国192 / 超天国96G。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部モードRESELECT / 内部状態RESELECT**。
- 据え置き: **天井進捗・内部モード・内部状態CARRYOVER**。
- 純電源OFF→ON: **天井進捗・内部モード・内部状態CARRYOVER**。
- 設定変更専用の一律短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。再抽選されたモードに応じて最大規定Gが96/192/384/768/999Gとなる。
- 設定変更時モード振り分け:
  - 設定1: 通常A50.0 / B25.0 / 天国準備10.0 / 天国14.9 / 超天国0.1%
  - 設定2: 50.0 / 25.0 / 10.0 / 14.5 / 0.5%
  - 設定3: 45.0 / 25.0 / 12.5 / 17.4 / 0.1%
  - 設定4: 45.0 / 25.0 / 12.5 / 17.0 / 0.5%
  - 設定5: 40.0 / 25.0 / 15.0 / 19.5 / 0.5%
  - 設定6: 39.5 / 25.0 / 15.0 / 20.0 / 0.5%
- 天国準備以上合算: **25.0 / 25.0 / 30.0 / 30.0 / 35.0 / 35.5%**。
- 設定変更時CZ抽選状態: **設定1・3・5は高確20.0%、設定2・4・6は高確30.0%**。
- resetDetection: 当時実戦解析で**設定変更時ガックンあり / 電源OFF→ONなし**。ただし絶対確定判別とは扱わない。
- 朝一フェイク前兆の内部G依存は前作踏襲を仮定した記述のため、本機固有確定契約には昇格しない。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### conflict / definition control
- HAZUSEが荒神Ver.ページで型式「パチスロゴッドイーターFF」、検定4S0913を掲示。別系統の公的検定原票は今回未取得のため、型式/検定は `ANALYSIS_HIGH_PERIOD_DB` とし一次資料扱いにはしない。
- 期待値見える化の初期記事では天国準備384G/天国192Gが実践値推測だったが、必勝本では後に96/192/384/768/999Gを解析値として掲載。canonicalは後者。
- リセット後フェイク前兆法則は前作踏襲条件付きのため確定解析値として保存しない。

## 2015-11-16群 — OPEN
処理済み:
1. パチスロ鬼武者3 時空天翔 — No.937
2. パチスロ ゴッドイーター 荒神Ver. — No.938

未処理強候補:
1. **パチスロ ああっ女神さまっ**（D-light）
2. **スーパーブラックジャック2**
3. **パチスロ銀と金2**

- 「ああっ女神さまっ」はK-Navi、スロパチクエストで**2015-11-16ホール導入**を確認済み。PiDEA/グリーンべるとは10月発表・11月中旬納品予定なので、全国導入日と納品予定を分離する。
- 候補だけに限定せず、11/16同日を全メーカー横断で再監査してからCLOSED判定する。
- 地域先行/後発、納品日/全国導入日の定義差を混同しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2005-12_nobunaga-no-yabou-tenka-sousei-r.md**
- retroQaNextInspection: **2005-12_haisai-shiohime.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線No.938新規収集を優先し、遡及QA地点は前進させていない。

## 次回再開地点
1. **recordCount 938 / chronologicalFrontier 2015-11-16 / 11/16群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.938を再取得。
3. 本線は **2015-11-16 パチスロ ああっ女神さまっ（D-light）** を次未処理として、既存レコード重複を確認してから性能コア + resetBehavior v0.7で登録。
4. 続いて **スーパーブラックジャック2 → パチスロ銀と金2** を候補順に照合し、同日全メーカーを横断監査する。候補だけに限定しない。
5. 遡及QAは `2005-12_haisai-shiohime.md` から継続。
6. 欠損は表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変更し、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみUNVERIFIED。
7. 競合は平均せずCONFLICT/定義差として双方保存。
8. 全変更後、mainから新規レコード・LATEST_HANDOFFを再取得して保存検証する。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成しない。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 前作/後継機・同メーカー他機のresetBehaviorを流用しない。
- 解析未公表と明記された実戦推測値を公開解析数値へ昇格させない。

## 主要出典 — 取得日 2026-09-08
### No.938 パチスロ ゴッドイーター 荒神Ver.
- HAZUSE: https://hazuse.com/machine/pachislot/4S0913/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2669/1/55565
- 期待値見える化 リセット: https://slotjin.com/slot/godeater-aragami-reset/
- 期待値見える化 天井/性能: https://slotjin.com/zone/godeater-aragami/
- man-soft: https://smaslo.man-soft.com/slot-kaiseki/godeater-aragami.html
- パチマガスロマガ 機種: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/206/a.php
- パチマガスロマガ 50枚: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/206/c.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7856
- pacnk: https://pacnk.com/slot/tools/sh_godeateraragami.html

### 次候補 ああっ女神さまっ
- K-Navi: https://p-kn.com/slot/2383/
- スロパチクエスト: https://www.slopachi-quest.com/article/aa-megamisama/
- PiDEA: https://www.pidea.jp/articles/%E3%83%87%E3%82%A3%E3%83%BB%E3%83%A9%E3%82%A4%E3%83%88%E3%80%8C%E5%A5%B3%E7%A5%9E%E3%81%95%E3%81%BE%E3%81%A3%E3%80%8D%E4%B8%8A%E4%B9%97%E3%81%9B%E9%87%8D%E8%A6%96%E3%81%AEA%2BART
- グリーンべると: https://web-greenbelt.jp/00008204/

## confidence
- No.938 exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- No.938 formalModelName: ANALYSIS_HIGH_PERIOD_DB
- No.938 inspectionNumber: ANALYSIS_HIGH_PERIOD_DB
- No.938 performanceCore: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_INDUSTRY_DB
- No.938 resetGameCounter: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.938 resetModeBehaviorAndDistribution: ANALYSIS_HIGH_DIRECT_NUMERIC
- No.938 resetStateBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.938 resetCzHighNumeric: ANALYSIS_HIGH_SECOND_SOURCE_NUMERIC
- No.938 purePowerCycle ceiling/mode/state: ANALYSIS_HIGH_DIRECT_COMPARISON
- No.938 resetDetectionGakkun: ANALYSIS_SINGLE_DIRECT_PRACTICAL
