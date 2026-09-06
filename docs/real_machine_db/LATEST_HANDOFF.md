# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **823**
- latestRecordAdded: **ケロット3**（山佐）— 2014-06-02
- latestRecord: `docs/real_machine_db/machines/2014-06-02_kerot3.md`
- chronologicalFrontier: **2014-06-02**
- frontierLatestMachine: **ケロット3**
- schema: **resetBehavior v0.7**
- status: **2014-06-02_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、既存レコードを再読。
- INDEXは旧集約状態のため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として継続。
- 作業開始時の正本は **822件 / 2014-05-26 / 05-26_GROUP_CLOSED**。
- **2014-05-27〜06-01境界**をメーカー横断・導入日表記揺れで監査。今回、安全な具体日付き未登録5号機は固定できず **CLOSED_FOR_CURRENT_RESEARCH** として06-02へ前進。
- 2014-06-02同日群は少なくとも **ケロット3（山佐） / 戦国乙女～剣戟に舞う白き剣聖～西国参戦編（オリンピア） / 餓狼伝説PREMIUM（SNKプレイモア）** を具体日資料で確認。群全体はまだOPEN。
- ケロット3が未登録であることを確認し、823件目として追加。

## 今回追加 — ケロット3

### identity / 性能コア

- manufacturer: **山佐**。
- formalModelName: **ケロット3EE**。
- inspectionNumber: **4S0119**。
- hall start: **2014-06-02**。
- generation/system: **5号機 / ノーマルAタイプ / ボーナス主体 / プチRT**。
- payout: **97.6 / 98.9 / 101.2 / 105.0 / 108.8 / 115.4%**。
- BIG: **1/282.4 / 282.4 / 273.0 / 263.2 / 243.6 / 225.9**。
- REG: **1/360.0 / 354.2 / 326.0 / 286.1 / 260.0 / 225.9**。
- ボーナス合算: **1/158.3 / 157.1 / 148.6 / 137.1 / 約125.7〜125.8 / 約112.9〜113.0**。設定5/6の差は元BIG/REGが一致するため丸め差扱い。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- basicPayout: **BIG 312枚 / REG 104枚**。
- プチRT「ケロットタイム」: 最大8G、ボーナス期待度約75%とする解析あり。RT純増枚数/Gは安全な直接値を固定できずUNVERIFIED。
- ceiling: **非搭載**。
- coreStatus: **COMPLETE_CORE_WITH_BASE_UNVERIFIED**。

### resetBehavior v0.7

- settingChangeBehavior: ゲーム数天井・規定G解除がないため天井進捗処理は **NOT_APPLICABLE**。短時間RT/液晶内部状態の設定変更時契約は **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 天井/規定Gの引継ぎは **NOT_APPLICABLE**。短時間RT/液晶状態の営業日跨ぎ契約は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なし電源OFF→ON時の短時間RT/液晶状態は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE / NO_CEILING**。
- ceilingAfterReset: 天井非搭載。設定変更専用短縮天井・救済G数は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 天国/通常A/B等の規定G解除モードは **NOT_APPLICABLE**。設定変更専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 長期高確/低確・AT/ART状態は主要構造ではない。短時間RT契約は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有ガックン/初期出目/液晶表示による変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。

## 再探索 / safeguards

- `ケロット3 / ケロット３ / ケロット3EE / 4S0119 / 山佐` に `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / ガックン / RT / 天井 / 50枚 / 1000円 / コイン持ち` を組み合わせ、HAZUSE、パチマガスロマガ、2-9伝説、当時解析、後年5号機資料を横断。
- 天井非搭載、基本スペックは複数系統で照合。baseGamesPer50および設定変更/据え置き/純電断時の短時間RT状態契約は安全に固定できず推測しない。
- 高設定確定/示唆演出は設定推測情報であり、朝一のresetDetectionへ混入しない。
- 「ケロット」「ケロット2」「ケロット4」「ケロット～スウィートVer.～」の値を本機へ混入しない。

## 2014-06-02群 / 次候補

具体日確認済み:
1. **ケロット3**（山佐）— No.823 / 処理済み
2. **戦国乙女～剣戟に舞う白き剣聖～西国参戦編**（オリンピア）— 未処理
3. **餓狼伝説PREMIUM**（SNKプレイモア）— 未処理

- 2014-06-02群は **OPEN**。上記3機だけと断定せず、次回はまず全メーカー横断で同日群を再監査する。
- **蒼天の拳2は2014-06-16**の具体日資料を確認しており、06-02群には混ぜない。

## 遡及 resetBehavior QA

- QAカーソルは維持。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`。

## 次回再開地点

1. **recordCount 823 / chronologicalFrontier 2014-06-02 / 06-02_GROUP_OPEN** から開始。
2. 最新mainでREADME / mission / INDEX / LATEST_HANDOFF / 823件目レコードを再確認。
3. **2014-06-02同日群を全メーカー横断再監査**し、未処理機種を漏れなく列挙。
4. 現時点の次の明確な未処理候補は **戦国乙女～剣戟に舞う白き剣聖～西国参戦編（オリンピア）**。同日群にそれより先に処理すべき未登録がないことを確認してからNo.824候補として処理。
5. 続いて **餓狼伝説PREMIUM（SNKプレイモア）**。
6. 06-02群全処理後にCLOSED判定し、06-03以降へ時系列前進。
7. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md` から再開。
8. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### ケロット3
- ぱちんこドキュメント: `https://pachinkolist.com/archives/38785712.html`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0119/`
- パチマガスロマガ基本仕様: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/197/a.php`
- パチマガスロマガ小役: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/197/c.php`
- 2-9伝説: `https://29den.com/kelot3/`
- けんのスロットシミュレーション: `https://kenslo65536.com/kaiseki/kelot3.html`
- パチ7: `https://pachiseven.jp/articles/detail/349`

### 2014-06-02同日群
- K-Navi 戦国乙女 西国参戦編: `https://p-kn.com/slot/2059/`
- K-Navi 餓狼伝説PREMIUM: `https://p-kn.com/slot/2049/`
- HAZUSE 餓狼伝説PREMIUM: `https://data.hazuse.com/?genre=209&machine_code=4S0203`

### 日付分離
- K-Navi 蒼天の拳2: `https://p-kn.com/slot/2064/`
