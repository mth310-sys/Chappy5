# パチスロひぐらしのなく頃に煌

machineName: パチスロひぐらしのなく頃に煌
manufacturer: オーイズミ
releaseDate: 2014-11-17
releaseDatePrecision: nationwide_hall_start
generation: 5号機
systemType: AT / 擬似ボーナス / CZ / 技術介入
modelName: パチスロひぐらしのなく頃に煌WX
inspectionNumber: 4S0813
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- メーカー: **オーイズミ**。
- 導入開始: **2014-11-17**。HAZUSE、パチビーで一致。
- 型式名: **パチスロひぐらしのなく頃に煌WX**。
- 検定番号: **4S0813**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE / DATABASE_FOR_MODEL_AND_INSPECTION

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 98.2% |
| 2 | 99.3% |
| 3 | 100.5% |
| 4 | 102.2% |
| 5 | 104.7% |
| 6 | 109.1% |

- HAZUSEほか複数解析資料で数値系列は一致。
- ただし同一数値系列について、後年整理資料に **「ビタ押し成功率75%時」** とするものと **「ビタ押しなし・補助機能利用時」** とするものがあり、技術介入条件の定義に競合が残る。数値自体は平均化せず同一系列として保持し、条件差をCONFLICTとして明示する。
- confidence: ANALYSIS_HIGH_FOR_VALUES / CONFLICT_FOR_TECHNIQUE_CONDITION

## initialHitBySetting

### 擬似BIG

| 設定 | BIG |
|---:|---:|
| 1 | 1/253.4 |
| 2 | 1/245.8 |
| 3 | 1/228.9 |
| 4 | 1/223.8 |
| 5 | 1/214.0 |
| 6 | 1/216.6 |

### REG

| 設定 | REG |
|---:|---:|
| 1 | 1/375.7 |
| 2 | 1/333.2 |
| 3 | 1/358.4 |
| 4 | 1/302.4 |
| 5 | 1/336.5 |
| 6 | 1/276.2 |

### ボーナス合算

| 設定 | 合算 |
|---:|---:|
| 1 | 1/151.3 |
| 2 | 1/141.4 |
| 3 | 1/139.7 |
| 4 | 1/128.6 |
| 5 | 1/130.8 |
| 6 | 1/121.4 |

- HAZUSE精密値をcanonicalとして保持。P-WORLD等の丸め値とも整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約33.04G（設定1）〜33.13G（設定6）/50枚**。
- 比較可能な直接数値を確認できたのは今回の再探索では解析整理資料1系統のため、confidenceは `ANALYSIS_SINGLE`。

## netIncrease

- ATによる擬似ボーナス中の純増: **約2.7枚/G**。
- HAZUSE、パチビー、P-WORLD系資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- オヤシロ BIG BONUS: **平均約340枚**。
- BIG BONUS: **平均約340枚**。
- REG BONUS: **平均約90枚**。
- BIGはJACゲーム3回またはボーナスゲーム30G消化で終了する構造。
- 技術介入としてリプレイハズシを搭載。物差し用途では成功率別の細かな期待枚数計算までは収集しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はゲーム数解除を管理する複数モードと、CZ抽選に影響する低確/高確の内部状態を持つ。
- 通常系モードの最大天井: **999G + 前兆**。
- 天国/超天国系: **128G + 前兆**とする解析。
- 「約137G」表記の資料は128G到達後の前兆を含む表現差として扱い、単純な天井数値CONFLICTにはしない。
- CZ「大変身ゾーン」: 10G、パチビー公開値で梨花ver.約36%、沙都子ver.約62%。
- CZ「祭具殿モード」: 10G+αのリプレイ回数天井型自力解除。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_DIRECT_RESET_STATE_CONFIRMED_OTHER_CONTRACTS_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更時に内部状態の移行抽選が行われる**ことをHAZUSEおよび旧パチマガスロマガで直接確認。
- 設定変更時の高確移行率は設定別に公開されている（下記numericResetData）。
- 天井ゲーム数、ゲーム数解除モードそのものの設定変更時処理については、機種名表記揺れ・型式名・メーカー名と `設定変更 / リセット / 朝一 / 天井 / 据え置き / 電源OFF ON / モード / ガックン` を組み替えて再探索したが、本機固有の直接契約を安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 据え置き時の天井ゲーム数、モード、低確/高確状態の保持/再抽選について、本機固有の直接資料を今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動から補完しない。

### powerCycleBehavior

- 設定変更を伴わない純粋な電源OFF→ON時の天井ゲーム数、モード、内部状態の扱いは **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更と電断を同一扱いに推定しない。

### gameCounterReset

- 設定変更: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常最大天井999G、天国/超天国128Gは通常仕様として確認。
- 設定変更専用の固定短縮天井・短縮率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただしゲーム数カウンタ自体の設定変更時RESET/CARRYOVERが直接固定できていないため、`NO_RESET_SHORTENING_CONFIRMED` を `COUNTER_CARRY_CONTRACT_CONFIRMED` と混同しない。

### modeAfterReset

- 設定変更専用のゲーム数解除モード振り分け、朝一専用モードは **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- ボーナス終了後の通常/天国/超天国移行率は公開されているが、設定変更時の数値として自動転記しない。

### stateAfterReset

- **CONFIRMED_BY_SETTING_HIGH_STATE_LOTTERY**。
- 設定変更時に低確/高確を再抽選し、高確移行率は設定別50.0〜66.6%。
- HAZUSEと旧パチマガスロマガで同一系列を確認。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更後は **高確スタート抽選**が存在し、設定1でも50.0%、設定6では66.6%で高確へ移行する。
- 高確はCZ抽選率に直接影響するため、ホール経営/朝一客AIの物差しとして有効な朝一恩恵。
- ただしBIG終了後にも同一の高確移行率が用いられるため、設定変更だけに存在する専用状態ではない。

### resetPenalties

- 設定変更専用の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のリールガックン、液晶表示、朝一ゲーム数表示等による確定的な変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一の高確挙動は設定変更を示唆し得るが、BIG終了後にも同じ高確移行抽選が存在し、かつ高確/低確は確率的状態であるため **PROBABILISTIC_BEHAVIOR_NOT_DETERMINISTIC_RESET_DETECTION** とする。

### numericResetData

設定変更時の内部状態移行率:

| 設定 | 低確へ | 高確へ |
|---:|---:|---:|
| 1 | 50.0% | 50.0% |
| 2 | 45.0% | 55.0% |
| 3 | 47.5% | 52.5% |
| 4 | 40.0% | 60.0% |
| 5 | 45.0% | 55.0% |
| 6 | 33.4% | 66.6% |

- HAZUSE / 旧パチマガスロマガ一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### publicMorningNumbers

- 上記 **設定変更時高確移行率 50.0 / 55.0 / 52.5 / 60.0 / 55.0 / 66.6%** を公開朝一比較数値として採用。
- 設定変更時のみの短縮天井当選率、朝一専用CZ当選率等は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `パチスロひぐらしのなく頃に煌 / ひぐらしのなく頃に煌 / ひぐらし煌 / Higurashi Kira / パチスロひぐらしのなく頃に煌WX / オーイズミ / OIZUMI`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井ゲーム数 / 天井短縮 / モード / 状態 / 高確 / ガックン / 50枚 / ベース / コイン持ち / 型式 / 検定`。
- 資料系統: HAZUSE、P-WORLD、パチビー、旧パチマガスロマガ、K-Navi、当時攻略/実戦記事、後年解析整理資料、業界記事。
- 後継機 `ひぐらしのなく頃に絆 / 祭2 / 業` の設定変更・有利区間情報は本機へ混入させない。

## sources

取得日: 2026-09-07

1. HAZUSE — パチスロひぐらしのなく頃に煌
   - https://hazuse.com/machine/pachislot/4S0813/
   - 導入日、メーカー、型式、検定番号、機械割、ボーナス確率、天井、内部状態、設定変更時状態移行率
   - reliability: ANALYSIS_DATABASE
2. パチビー — パチスロひぐらしのなく頃に煌
   - https://www.pachibee.jp/machines/index/214100000
   - 導入日、5号機AT、純増2.7枚/G、BIG/REG平均獲得枚数、CZ基本性能
   - reliability: INDUSTRY/ANALYSIS_DATABASE
3. パチマガスロマガ旧攻略 — CZ抽選
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/33/cz0-3.php
   - 設定変更時高確移行率、内部状態/CZ抽選
   - reliability: ANALYSIS_HIGH_ARCHIVE
4. K-Navi — リプレイハズシ手順
   - https://p-kn.com/slot/2166/52064/
   - BIG中技術介入、簡易75%/高難度100%成功期待度
   - reliability: ANALYSIS_DATABASE
5. ちょんぼりすた — ひぐらしのなく頃に煌 解析まとめ
   - https://chonborista.com/slot/oizumi-slot/3810/
   - 50枚ベース、天井/モード整理、機械割条件整理
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
6. グリーンべると — オーイズミ新機種発表記事
   - https://web-greenbelt.jp/
   - オーイズミによる新機種発表・技術介入コンセプトの業界一次系補助
   - reliability: INDUSTRY

## missingFields

- 設定変更時の天井/内部ゲーム数RESET・引継ぎ直接契約: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井/モード/状態の直接契約: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時の天井/モード/状態の直接契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時のゲーム数解除モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン等の確定変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts

- `CONFLICT_OR_DEFINITION_DIFFERENCE_PAYOUT_TECHNIQUE_CONDITION`: 機械割数値系列 98.2〜109.1% 自体は一致するが、「ビタ押し成功率75%時」とする資料と「ビタ押しなし・補助機能利用時」とする資料で前提条件が一致しない。数値を平均・再計算せず条件差を保持する。

## yardstickNotes

- 2014年後半の **技術介入付き擬似ボーナスAT**の物差しとして、設定1でも98%台の公表機械割、約2.7枚/G、BIG約340枚という比較軸を持つ。
- resetBehaviorでは、天井短縮よりも **設定変更後の内部高確スタート率が設定別に公開されているタイプ**として有用。
- 高確スタートは朝一CZ到達率へ影響するが、細かな小役別CZ抽選は実機完全再現用途なので本DBでは必要最低限に留める。
