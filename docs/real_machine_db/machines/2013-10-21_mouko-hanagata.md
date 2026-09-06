# 猛虎花形

machineName: 猛虎花形
aliases: 巨人の星 猛虎花形 / パチスロ 巨人の星 猛虎花形
manufacturer: スパイキー / Spiky
releaseDate: 2013-10-21
releaseDatePrecision: exact_day
modelName: 猛虎花形CC
inspectionNumber: 3S0448

generation: 5号機
systemType: AT / 疑似ボーナス / CZ / ゲーム数管理
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL_RESET_CONTRACT

## identity

- HAZUSEで5号機、メーカー「スパイキー」、型式「猛虎花形CC」、検定番号「3S0448」、導入開始日2013-10-21を確認。
- K-Naviも「巨人の星 猛虎花形」としてホール導入開始2013-10-21を掲載。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.7% |
| 3 | 100.6% |
| 4 | 104.4% |
| 5 | 107.7% |
| 6 | 110.8% |

- 複数二次資料で同一系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「猛虎RUSH」初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/546.7 |
| 2 | 1/537.0 |
| 3 | 1/504.1 |
| 4 | 1/498.7 |
| 5 | 1/467.6 |
| 6 | 1/414.9 |

### 対決BONUS

| 設定 | 対決BONUS |
|---|---:|
| 1 | 1/497.2 |
| 2 | 1/485.3 |
| 3 | 1/482.9 |
| 4 | 1/463.5 |
| 5 | 1/455.2 |
| 6 | 1/379.3 |

### REG BONUS

| 設定 | REG |
|---|---:|
| 1 | 1/749.4 |
| 2 | 1/743.8 |
| 3 | 1/727.3 |
| 4 | 1/729.3 |
| 5 | 1/691.3 |
| 6 | 1/603.5 |

### 擬似ボーナス+AT合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/193.2 |
| 2 | 1/189.9 |
| 3 | 1/184.2 |
| 4 | 1/180.7 |
| 5 | 1/172.9 |
| 6 | 1/149.2 |

- K-NaviとP-WORLDで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/1000円（50枚相当）**。
- 後年整理資料で確認できたが、当時高信頼資料による別系統照合を今回確保できなかったため単一二次資料扱い。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- AT「猛虎RUSH」: **純増約2.8枚/G**。
- K-Navi / P-WORLD / 後年資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「猛虎RUSH」: **1セット50G+α**、ゲーム数上乗せ型、純増約2.8枚/G。
- 対決BONUS: **1セット20G**、1セット目は継続、50〜88%継続のループ型疑似ボーナス、純増約2.8枚/G。
- REG BONUS: **20G固定**、純増約2.8枚/G。
- 固定獲得枚数型のリアルボーナスではないため、比較用の基本性能はG数と純増で保持する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時には天井ゲーム数に関係する **通常A / 通常B / 準備 / 天国 / 超天国** の5モードが存在。
- 通常A: 最大999G。
- 通常B: 最大999G。
- 準備: 最大1032G、解除後は天国以上示唆。
- 天国: 最大128G、約50%ループ。
- 超天国: 最大128G、約50%ループ。転落時は天国へ移行する旨の解析あり。
- 通常時の全モード移行率は実機完全再現用のため収集対象外。
- confidence: ANALYSIS_HIGH

## ceiling

- 内部モードにより天井が変化し、最大は **1032G（準備モード）**。
- 通常A/Bは999G、天国/超天国は128G。
- 天井到達時は疑似ボーナスまたはAT当選とする解析資料あり。
- confidence: ANALYSIS_HIGH_SUPPORTING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__NO_MACHINE_SPECIFIC_RESET_CONTRACT_RECOVERED_AFTER_MULTI_QUERY_SEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 機種名「猛虎花形 / 巨人の星 猛虎花形」、型式「猛虎花形CC」、メーカー名を用い、「設定変更 / リセット / 朝一 / 天井 / モード / 据え置き / ガックン」等を組み替え、当時解析・古いDB・後年資料を横断した。
- 設定変更時の天井ゲーム数、モード、内部状態について、本機固有の直接契約を安全に固定できる資料は今回回収できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常時のモード天井仕様から設定変更時挙動を逆算しない。

### carryOverBehavior

- 純据え置き時の天井進捗、モード、内部状態の保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動からの推定は行わない。

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ONのみの場合のゲーム数・モード・内部状態の挙動は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- setting change: **UNVERIFIED_AFTER_RESEARCH**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常時モード別天井は999G / 1032G / 128G。
- 設定変更専用の短縮天井・固定朝一天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井値をリセット天井へ流用しない。

### modeAfterReset

- 設定変更時の通常A/B/準備/天国/超天国の再抽選・引継ぎ、具体的振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用モード: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時の内部高低状態・CZ関連状態の再抽選/引継ぎ: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の天井短縮、AT/CZ確定、天国優遇など、ホール朝一価値へ直結する本機固有恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更で前日天井進捗が消える等の本機固有不利要素は、直接契約未回収のため **UNVERIFIED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶/ランプなどによる変更判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- シリーズ他機や一般論のガックン情報は転記しない。

### publicMorningNumbers

- setting-change mode distribution: **UNVERIFIED_AFTER_RESEARCH**。
- reset-only shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- morning-specific hit/CZ probability: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 「天井最大1032G」と「999G」の表記は競合ではなく、内部モード別天井の定義差。準備モード1032G、通常A/B999Gとして分離。
- 一部後年資料の「天井1032Gで疑似ボーナス確定」は最大天井を単一表記したものとして扱い、モード別解析と混同しない。
- リセット契約が未回収であるため、通常時の天国/超天国128Gを「朝一128G」と誤って扱わない。

## sources

取得日: **2026-09-06**

1. HAZUSE DATA「猛虎花形」
   - https://hazuse.com/machine/pachislot/3S0448/
   - 5号機 / スパイキー / 型式 猛虎花形CC / 検定3S0448 / 2013-10-21導入。
   - confidence: ANALYSIS_HIGH_DATABASE

2. K-Navi「巨人の星 猛虎花形」
   - https://p-kn.com/slot/1935/
   - 2013-10-21導入 / 対決BONUS・REG・AT初当たり / 合算 / AT 50G+α・純増約2.8枚/G / 疑似ボーナス基本性能。
   - confidence: ANALYSIS_HIGH

3. K-Navi「内部モードの基本」
   - https://p-kn.com/slot/1935/46199/
   - 通常A/B 999G、準備1032G、天国/超天国128G、ループ特性。
   - confidence: ANALYSIS_HIGH

4. P-WORLD「猛虎花形」
   - https://www.p-world.co.jp/machine/database/7190
   - AT 50G+α / 純増約2.8枚/G / 対決BONUS・REGの構造 / 設定別疑似ボーナス・AT確率。
   - confidence: INDUSTRY_DATABASE

5. CrankySeven「巨人の星 猛虎花形」
   - https://crankyseven.com/kyojin-mouko-pc.htm
   - 機械割97.4/98.7/100.6/104.4/107.7/110.8%。
   - confidence: ANALYSIS_SINGLE

6. ななぱち パチスロ/巨人の星 猛虎花形 Wiki
   - https://wikiwiki.jp/hanpachi/%E3%81%AA%E3%81%AA%E3%81%B1%E3%81%A1%20%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/%E5%B7%A8%E4%BA%BA%E3%81%AE%E6%98%9F%20%E7%8C%9B%E8%99%8E%E8%8A%B1%E5%BD%A2
   - 機械割系列の別ソース一致 / 約31G/1000円 / AT概要 / 最大天井整理。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

7. 株式会社ドラス「激Jパチスロ 巨人の星 猛虎花形」紹介
   - https://www.value-press.com/pressrelease/119740
   - 実機シミュレーター紹介として猛虎RUSH 50G、開眼CHANCE、前兆モード等の基本構造を補助確認。
   - confidence: INDUSTRY_SUPPORTING

## missingFields

- 設定変更時の天井ゲーム数リセット/引継ぎ契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の天井進捗・モード・状態保持: UNVERIFIED_AFTER_RESEARCH
- 電源OFF→ONのみの内部挙動: UNVERIFIED_AFTER_RESEARCH
- 設定変更時モード振り分け / 内部状態: UNVERIFIED_AFTER_RESEARCH
- 本機固有変更判別 / 朝一専用数値: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50の当時高信頼別ソース照合: PENDING_QA

## nextQaNotes

- 当時雑誌アーカイブ、パチマガスロマガの朝一/設定変更専用ページ、保存キャッシュ等から本機固有reset契約が回収できた場合のみ追記する。
- 通常モード別天井と設定変更後モードを混同しない。
