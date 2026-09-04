# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **634**
- latestMachineAdded: **BLACK LAGOON**（スパイキー）
- latestRecord: `docs/real_machine_db/machines/2012-02-06_black-lagoon.md`
- chronologicalFrontier: **2012-02-06**
- frontierLatestExactDateMachine: **BLACK LAGOON**
- schema: **resetBehavior v0.7**
- status: **2012-02-06_SAME_DAY_AUDIT_CONTINUE**

## 今回の本線追加 — BLACK LAGOON

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ ミッションインポッシブル」を再取得して開始。
- 開始時正本は **recordCount 633 / chronologicalFrontier 2012-02-06**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 2012-02-06同日群を再監査し、「BLACK LAGOON」「コンチネンタルV」が同日導入であることを確認。
- 想定実パス `docs/real_machine_db/machines/2012-02-06_black-lagoon.md` を直接fetchし未登録を確認後、634件目として追加。
- K-Navi/HAZUSEが導入 **2012-02-06** で一致。4Gamerも実機が2012-02-06にスパイキーから発売されたと記載。
- 型式名 **ブラックラグーンB**、検定番号 **1S0867**。

### 性能コア

- systemType: **A+ART**。
- 設定別機械割: **97.2 / 98.6 / 100.3 / 104.9 / 109.7 / 114.5%**。
- BIG合算: **1/399.6 / 394.7 / 385.5 / 368.1 / 356.1 / 341.3**。
- REG合算: **1/728.1 / 668.7 / 642.5 / 606.8 / 564.9 / 546.1**。
- ボーナス合算: **1/258.0 / 248.2 / 240.9 / 229.1 / 218.4 / 210.0**。
- ART初当たり: **1/686.2 / 631.4 / 649.5 / 540.3 / 497.6 / 386.0**。
- 50枚ベース: **全設定共通 約34.0G**。
- SUPER BIG約**202枚**、BIG約**202枚**、REG約**50枚**。
- ART「LAGOON RUSH」: **1セット50G+α・約+1.5枚/G**。
- 通常天井: **ボーナス後1480G**。到達後は次回ボーナスまでのART + バレット6個。

### resetBehavior v0.7

- `settingChangeBehavior`: **天井ゲーム数をクリア / 内部状態を再抽選 / 液晶ステージをランダム変更**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: **通常1480G天井を0G相当から再計数。リセット専用短縮天井はNONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **NO_SEPARATE_LONG_TERM_MODE_CONFIRMED_AFTER_RESEARCH**。
- `stateAfterReset`: **RESELECTED_ON_SETTING_CHANGE**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **内部状態再抽選、液晶ステージランダム変更**。
- `resetPenalties`: **前日の1480G天井進捗を失う**。
- `resetDetection`: **設定変更時の液晶ランダム変更は確認。ただし据え置き/電源OFF→ON側の処理・ガックンが未確定のため単独判別可否はUNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetBehavior調査メモ

- 「BLACK LAGOON / ブラックラグーン / ブラックラグーンB / スパイキー」と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/1480G/状態/モード/ガックンを組み替えて再探索。
- Cranky Sevenの本機固有解析で設定変更時の天井クリア・状態再抽選・液晶ステージランダム変更を直接確認。
- K-Navi、HAZUSE、P-WORLD、4Gamerで導入日・型式・基本性能を横断照合。
- 据え置き時の天井/状態保持、単純電源OFF→ON、具体的状態振り分け率、ガックン等は本機固有直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- 後継BLACK LAGOON2/3/4/ZEROのリセット仕様は流用していない。
- 有利区間は5号機のため非該当。

## 時系列監査

- 2012-02-06同日群の未登録としてBLACK LAGOONを追加。
- **コンチネンタルV（メーシー）もK-Navi/HAZUSEで2012-02-06導入を確認済み**。次回の最優先候補。
- 同日群には他機種が残る可能性があるため、コンチネンタルV登録前後でメーカー別一覧/P-WORLD/K-Navi/パチビー/当時業界記事を再監査し、02/07以降へ飛ばさない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 634 / chronologicalFrontier 2012-02-06**から開始。
2. 最優先で **コンチネンタルV** のGitHub code search + 想定実パス直接fetchを行い重複確認。
3. 未登録なら性能コア+resetBehavior v0.7を同時収集し、634の次として追加。
4. その後も **2012-02-06同日群**を閉じるまで監査し、閉鎖後に2012-02-07以降の最古未処理機へ進む。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- K-Navi BLACK LAGOON: `https://p-kn.com/slot/1552/`
- HAZUSE BLACK LAGOON: `https://hazuse.com/machine/pachislot/1S0867/`
- Cranky Seven BLACK LAGOON: `https://crankyseven.com/blacklagoon-pc.htm`
- P-WORLD BLACK LAGOON: `https://www.p-world.co.jp/machine/database/6585`
- 4Gamer BLACK LAGOON: `https://www.4gamer.net/games/147/G014703/20120224022/`
- K-Navi コンチネンタルV: `https://p-kn.com/slot/1547/`
- HAZUSE コンチネンタルV: `https://hazuse.com/machine/pachislot/1S0658/`
