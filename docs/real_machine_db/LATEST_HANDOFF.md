# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **657**
- latestMachineAdded: **スパイガール2**（KPE）
- latestRecord: `docs/real_machine_db/machines/2012-05-21_spy-girl-2.md`
- chronologicalFrontier: **2012-05-21**
- frontierLatestExactDateMachine: **スパイガール2**
- schema: **resetBehavior v0.7**
- status: **FINAL_AUDIT_2012-05-21_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「スカイラブ4」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおり最新LATEST_HANDOFFと実レコードを優先。開始時正本は recordCount 656 / frontier 2012-05-21。
- LATEST_HANDOFFで次の未登録確定候補だったKPE「スパイガール2」を実パス404で未登録確認。
- K-Naviで2012-05-21ホール導入開始、グリーンべるとで2012-05-20納品開始予定を確認。納品日とホール導入日は定義を分離。
- 性能コアはK-Navi、P-WORLD、パチマガスロマガ、pacnk、当時業界記事で横断照合。
- resetBehaviorは「スパイガール2 / スパイガール2P / KPE」と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/1282G/モード/高確/ガックン等を組み替えて再探索。当時2012年の機種別天井解析から、設定変更でも天井ゲーム数をリセットせず内部モードを再セットする本機固有挙動を回収。
- 657件目として `docs/real_machine_db/machines/2012-05-21_spy-girl-2.md` を追加。
- 2012-05-21同日群を追加検索した範囲では、スカイラブ4/スパイガール2以外の具体日2012-05-21未登録5号機を今回確定できず。ただし同日群は次回冒頭で最終監査してから閉じる。
- 次の具体日アンカーとして藤商事「パチスロ 天 天和通りの快男児」がK-Navi上2012-06-04ホール導入開始であることを確認。05-22〜06-03の未処理機種を飛ばさず境界監査してから進む。

## 今回の本線追加 — スパイガール2

### 導入・分類

- manufacturer: **KPE**。
- releaseDate: **2012-05-21**。K-Naviと後年整理DBで一致。当時グリーンべるとは5/20納品開始予定。
- generation: **5号機**。
- systemType: **A+ART / CZ / セットストック+ゲーム数上乗せART**。
- formalModelName: **スパイガール2P**。
- approvalNumber: **2S0029**。
- 型式/検定番号は後年整理DB1系統のため `ANALYSIS_SINGLE_RETROSPECTIVE` 扱い。

### 性能コア

- 機械割: **97.7 / 99.6 / 100.7 / 105.2 / 108.5 / 113.0%**。
- BIG: **1/399.6 / 390.1 / 376.6 / 372.4 / 360.1 / 352.3**。
- REG: **1/771.0 / 744.7 / 720.2 / 662.0 / 642.5 / 624.2**。
- ボーナス合算: **1/263.2 / 256.0 / 247.3 / 238.3 / 230.8 / 225.2**。
- ボーナス+ART合算: **1/178.6 / 166.5 / 166.0 / 147.6 / 146.3 / 130.0**。
- ART単独初当り: **UNVERIFIED_AFTER_RESEARCH**。合算からの逆算推定は採用しない。
- 50枚ベース: **約31G/1000円**。パチマガスロマガ直接値、現時点単一系統。
- BIG約**204枚**、REG約**60枚**。
- ART「大作戦タイム」: **1セット50G+α、約+1.4枚/G**。
- 通常天井: **ボーナス間1282Gで最低3セットART**。

### resetBehavior v0.7

- `settingChangeBehavior`: **PARTIAL_CONFIRMED_CEILING_COUNTER_PRESERVED_AND_INTERNAL_MODE_RESELECTED**。
- `gameCounterReset`: **CONFIRMED_NOT_RESET_ON_SETTING_CHANGE_ANALYSIS_SINGLE**。設定変更でもボーナス間1282G天井ゲーム数をリセットしない当時解析を確認。
- `ceilingAfterReset`: **NO_RESET_SPECIFIC_SHORTENING_CONFIRMED**。変更専用短縮ではなく天井進捗を保持。
- `modeAfterReset`: **CONFIRMED_RESELECT_WITHOUT_PUBLIC_DISTRIBUTION**。内部モード再セットを確認。具体振り分け率は未確認。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。低確/高確/超高確は存在するが、変更直後の状態振り分けは未確定。
- `carryOverBehavior`: **PARTIAL_CONFIRMED_FOR_CEILING_COUNTER**。変更操作でも天井進捗が消えない。純据え置き時のモード/状態/ARTストック等の詳細保持契約は未確定。
- `powerCycleBehavior`: **PARTIAL_CONFIRMED_INITIAL_STAGE_ONLY**。電源ON/OFF時もカフェorプールからランダム開始。カウンタ/モード/状態の電源断処理は未確定。
- `resetBenefits`: **CONFIRMED_CEILING_PROGRESS_PRESERVATION_ON_SETTING_CHANGE**。朝一宵越し天井狙いが成立し得る。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: 初期ステージは設定変更/電源ONOFF双方で同様のランダム開始となるため判別材料として弱い。ガックン等は未確定。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### 品質メモ

- 1282G天井と性能コアは複数系統で照合。
- 「設定変更でも天井ゲーム数をリセットしない」「内部モード再セット」は2012年当時資料で直接確認したが、同一本文を独立2系統で再照合できていないためreset項目はANALYSIS_SINGLE相当として保存。
- K-Naviには本機専用「設定変更後の挙動」解析項目が現存するが、検索インデックスから本文詳細までは取得できなかった。
- 初代スパイガールや名称の近いスカイガールズ等の別機種仕様は流用していない。

## 次回再開地点

1. **recordCount 657 / chronologicalFrontier 2012-05-21**から開始。
2. **2012-05-21同日群を最終監査**。既登録のスカイラブ4 / スパイガール2以外に具体日付き未登録5号機がないか、メーカー別・当時導入一覧・K-Navi等で最後に確認。
3. 同日群に追加がなければ **2012-05-21を閉じ、05-22〜06-03を日付順に境界監査**。途中の未処理機種を飛ばさない。
4. 次の既知具体日アンカーは **藤商事「パチスロ 天 天和通りの快男児」= 2012-06-04**（K-Navi）。境界監査で先行機がなければ次候補としてrepo重複確認後に処理。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi スパイガール2: `https://p-kn.com/slot/1622/`
- グリーンべると KPE『スパイガール』後継機発表: `https://web-greenbelt.jp/00001443/`
- P-WORLD スパイガール2: `https://www.p-world.co.jp/machine/database/6691`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/29/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/29/h.php`
- パチマガスロマガ 小役確率/1000円ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/29/c.php`
- pacnk スパイガール2: `https://pacnk.com/slot/2012/spygirl2/top.php`
- 2012年当時 天井ハイエナ生活: `https://macerate.seesaa.net/article/288333617.html`
- パチナビ 型式/検定番号整理: `https://pachinavi.net/machines/spy-girl-2/`
- 藤商事公式 パチスロ 天 天和通りの快男児: `https://www.fujimarukun.co.jp/products/tenho/`
- K-Navi パチスロ 天 天和通りの快男児（次アンカー）: `https://p-kn.com/slot/1642/`

## GitHub commits

- スカイラブ4 machine record: `aa9dec461adee380df5563578d55c860e9f80936`
- スパイガール2 machine record: `03438bb8c14e52555eb8fb3ebc64b6cf48855d2a`
