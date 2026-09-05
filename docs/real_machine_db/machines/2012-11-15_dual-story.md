# デュアルストーリー

machineName: デュアルストーリー
manufacturer: 北電子
releaseDate: 2012-11-15
releaseDatePrecision: exact_day
releaseDateNotes: HAZUSEが導入開始日2012-11-15と明記。P-WORLDの現行DB表示は2013年01月となるため、具体日付きのHAZUSEを時系列キーに採用し、P-WORLDの月表記はCONFLICTとして保持。
generation: 5号機
systemType: A+ART / ボーナス+ゲーム数上乗せ・ストックART / 300G周期CZ
modelName: デュアルストーリーN
approvalNumber: 2S0601
recordStatus: PARTIAL_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.90% |
| 2 | 98.48% |
| 3 | 100.39% |
| 4 | 104.11% |
| 5 | 108.07% |
| 6 | 111.03% |

- パチマガスロマガ掲載値。
- 北電子公式には確率表の導線が現存するが、今回取得テキストでは数表そのものを安全に抽出できなかったため、メーカー公式値としては転記していない。
- confidence: ANALYSIS_SINGLE_DIRECT_WITH_OFFICIAL_PRODUCT_EXISTENCE

## initialHitBySetting

### ボーナス合成

| 設定 | ボーナス合成 |
|---|---:|
| 1 | 1/199.80 |
| 2 | 1/191.63 |
| 3 | 1/184.09 |
| 4 | 1/173.38 |
| 5 | 1/165.49 |
| 6 | 1/152.41 |

### 赤BIG / 青DRAGON BONUS / REG

| 設定 | 赤BIG | 青DB | REG |
|---|---:|---:|---:|
| 1 | 1/992.97 | 1/668.73 | 1/399.61 |
| 2 | 1/949.80 | 1/642.51 | 1/383.25 |
| 3 | 1/910.22 | 1/618.26 | 1/368.18 |
| 4 | 1/851.12 | 1/585.14 | 1/346.75 |
| 5 | 1/809.09 | 1/560.14 | 1/330.99 |
| 6 | 1/762.05 | 1/508.03 | 1/304.82 |

- パチマガスロマガの直接表。
- ART初当たりの設定別公開系列は、機種名・型式名・メーカー名と「ART初当り/ART突入率/ART確率/トレジャーハント」を変えて再探索したが今回確定できず UNVERIFIED_AFTER_RESEARCH。
- confidence: ANALYSIS_SINGLE_DIRECT_FOR_BONUS

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「デュアルストーリー/デュアルストーリーN/北電子」と「50枚/1000円/ベース/コイン持ち/31G/32G」等を組み替え、北電子公式、HAZUSE、P-WORLD、パチマガスロマガ、旧実機販売資料・回顧資料まで横断したが、本機固有の比較可能な50枚ベースを確定できず。

## netIncrease

- ART「トレジャーハント」: **約+1.3枚/G**。
- パチマガスロマガとP-WORLDで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約259枚**（360枚超払い出しで終了）。
- DRAGON BONUS: **約154枚**（210枚超払い出しで終了）。
- REG: **約56枚**（70枚超払い出しで終了）。
- ART「トレジャーハント」: **10G / 30G / 50G**。アッシュパーティーは30G固定、ハルパーティーは10/30/50G。
- HAZUSEは各ボーナスの規定払い出し条件、パチマガスロマガ/P-WORLDは純増目安を掲載。
- confidence: OFFICIAL_EQUIVALENT_PAYTABLE_PLUS_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時には **低確/高確** の内部状態が存在。
- CZ「チャレンジステージ」は **ボーナス後または300G周期**で移行。ランプ点灯でARTまたはボーナス。
- 300G周期CZは確認できるが、これを通常の「天井」とは扱わない。
- 固定ゲーム数到達でARTが保証される通常天井については、表記・検索語・資料系統を変えて再探索したが今回確定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_FOR_300G_PERIODIC_CZ

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_MAJOR_UNVERIFIEDS
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 「デュアルストーリー / デュアルストーリーN / 北電子」と「設定変更 / リセット / 朝一 / 設定変更後の挙動」を組み替え、北電子公式、HAZUSE、P-WORLD、パチマガスロマガ、旧実機資料を横断したが、設定変更時の内部ゲーム数・300G周期・低確/高確・ARTストック等の本機固有契約を確定できず。

### carryOverBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 純据え置き時に300G周期進捗、低確/高確、ARTストック等がどこまで保持されるかを直接示す本機固有資料を確定できず。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 設定変更を伴わない単純電源OFF→ON時の300G周期進捗・内部状態・ARTストックの保持/初期化契約を十分再探索後も確定できず。

### gameCounterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 本機には300G周期CZがあるが、設定変更時に周期ゲーム数がクリアされるか引き継がれるかを直接確認できないため推測しない。

### ceilingAfterReset

- **NO_CONFIRMED_RESET_CEILING__NORMAL_CEILING_ITSELF_UNVERIFIED**
- 300G周期CZは存在するが、設定変更専用短縮天井・朝一固定天井・通常の保証天井を今回確定できず。

### modeAfterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 通常時に低確/高確が存在することは確認したが、設定変更時のモード再抽選/引継ぎや朝一専用モードの有無は確定できず。

### stateAfterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 低確/高確の設定変更時処理・振り分けは十分再探索後も未確認。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一専用CZ、短縮天井、高確優遇率など、客の朝一行動に直結する本機固有のリセット恩恵を数値付きで確定できず。

### resetPenalties

- **NONE_CONFIRMED_AFTER_RESEARCH**
- 前日周期進捗消失等は設定変更時のカウンタ契約が未確認のため推測しない。

### resetDetection

- **UNVERIFIED_AFTER_RESEARCH**
- 「ガックン / リール / 液晶 / 朝一 / 据え置き判別」を追加して再探索したが、本機固有の高信頼な設定変更・据え置き判別契約を確定できず。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時のモード振り分け、朝一○G以内当選率、短縮天井、リセット恩恵発生率などの比較可能な公開朝一数値は今回確定できず。

### numericResetData

- normalPeriodicChallengeZone: 300G_cycle
- postBonusChallengeZone: confirmed
- settingChangeCycleReset: UNVERIFIED_AFTER_RESEARCH
- settingChangeStateDistribution: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleContract: UNVERIFIED_AFTER_RESEARCH
- publicResetBenefitPct: NONE_CONFIRMED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_HIGH_FOR_NORMAL_PERIODIC_CZ_AND_CORE_ART__UNVERIFIED_AFTER_MULTI_PATH_RESEARCH_FOR_RESET_CONTRACT

## missingFields

- ART初当たりの設定別公開系列。
- 50枚あたりゲーム数/ベース。
- 通常の保証天井の有無・数値。
- 設定変更時の300G周期ゲーム数処理。
- 据え置き/単純電源OFF→ON時の周期・低確/高確・ARTストック処理。
- 設定変更時の内部状態振り分け。
- 本機固有の変更判別。
- 公開朝一数値。

## conflicts

- releaseDate: HAZUSEは **2012-11-15** を導入開始日として掲載する一方、P-WORLD現行DBは **2013年01月** と表示。平均せず双方を保持し、本DBの時系列キーは具体日付きHAZUSEの2012-11-15を採用。

## sources

取得日: 2026-09-05

1. 北電子公式 デュアルストーリー
   - https://www.kitadenshi.co.jp/slot/dualstory/
   - 公式製品ページ、機種名、製品・配当/確率表導線。
2. HAZUSE デュアルストーリー
   - https://hazuse.com/machine/pachislot/2S0601/
   - 導入開始2012-11-15、型式デュアルストーリーN、検定番号2S0601、ボーナス規定払い出し条件。
3. パチマガスロマガ スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/83/a.php
   - BIG約259枚、DB約154枚、REG約56枚。
4. パチマガスロマガ ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/83/h.php
   - 設定別ボーナス合成、赤BIG、青DB、REG、機械割。
5. パチマガスロマガ ART突入フロー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/83/l.php
   - 低確/高確、ボーナス後/300G周期CZ、ART 10/30/50G、純増約1.3枚/G。
6. P-WORLD デュアルストーリー
   - https://www.p-world.co.jp/machine/database/6936
   - 5号機ART、純増約1.3枚/G、BIG約259枚、DB約154枚、型式/検定番号、現行DB導入表示2013年01月。
7. ホームスロット 北電子 デュアルストーリー
   - https://home-slot.net/SHOP/s-kitadenshi54.html
   - 後年実機資料。BIG/REG/DB構成、ART基本構造、300G周期CZの補助照合。

## sourceQuality

- 北電子公式: OFFICIAL
- HAZUSE: ANALYSIS_DB / exact release and type identifiers
- パチマガスロマガ: ANALYSIS_HIGH
- P-WORLD: INDUSTRY_DATABASE
- ホームスロット: RETROSPECTIVE_SECONDARY_SUPPORT

## researchNotes

- resetBehavior欠損は最初の検索だけでUNVERIFIEDにしていない。機種名・正式型式・メーカー名を変え、「設定変更/設定変更後の挙動/リセット/朝一/据え置き/電源OFF ON/電断/天井/300G周期/低確/高確/ガックン/リール/液晶」を組み替えて、公式・HAZUSE・P-WORLD・パチマガスロマガ・旧実機資料まで再探索した。
- 通常時300G周期CZは確認できるが、リセット後の周期処理が不明なため「設定変更後300Gで必ずCZ」等の推測は保存しない。
