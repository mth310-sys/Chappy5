# パチスロBADBOYS

machineName: パチスロBADBOYS
manufacturer: 岡崎産業
releaseDate: 2013-08-05
releaseDatePrecision: exact_day_supported_by_secondary_and_2013-08-04_delivery_schedule
formalModel: BADBOYS 0A
generation: 5号機
systemType: A+ART / 差枚数管理ART
recordStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT_BASE_AND_RESET_DETAILS_UNVERIFIED_AFTER_RESEARCH

## identity

- ホール導入日: **2013-08-05**。八通屋の機種DBが具体日を掲載。当時グリーンべるとは **2013-08-04納品開始予定** と報道しており整合する。
- manufacturer: **岡崎産業**。
- 型式名: **BADBOYS 0A**。検定通過確認済み一覧で確認。
- generation/system: **5号機 A+ART**。2種類のリアルボーナス + ART「極楽モード」。
- confidence: INDUSTRY_PERIOD + ANALYSIS_SECONDARY

## payoutRateBySetting

### source A — 八通屋機種DB

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 99.1% |
| 3 | 100.9% |
| 4 | 104.7% |
| 5 | 107.2% |
| 6 | 110.9% |

### source B — 八通屋保存攻略PDF

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 99.0% |
| 3 | 100.8% |
| 4 | 104.6% |
| 5 | 107.1% |
| 6 | 110.9% |

- 同系統資料内で設定1～5が0.1ptずつ競合するため平均化しない。
- 当時の新機種資料には **設定1 約97%～設定6 114.2%** という別表記も残るため、設定6側にはより大きい競合候補がある。完全な設定別一次表を確保できていないため、本DBでは **CONFLICT** として保持。
- confidence: CONFLICT

## initialHitBySetting

### ART「極楽モード」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/426 |
| 2 | 1/375 |
| 3 | 1/371 |
| 4 | 1/335 |
| 5 | 1/285 |
| 6 | 1/279 |

- 八通屋保存攻略PDFで確認。
- confidence: ANALYSIS_SINGLE

### bonusProbability

- PREMIUM BADBOYS BONUS: **1/8192.0（全設定共通）**。
- BADBOYS BONUS: **1/1024.0（全設定共通）**。
- confidence: ANALYSIS_SINGLE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「パチスロBADBOYS / BADBOYS 0A / 岡崎産業」と「50枚 / 1000円 / 1K / ベース / 回転数 / コイン持ち」を組み替え、P-WORLD、当時業界記事、機種DB、保存攻略PDF、回顧資料まで横断したが、本機固有の比較可能な50枚ベースを安全に固定できず。
- 同時発表機「美らん娘-30」の **約38G/1000円** は別機種なので転記しない。

## netIncrease

- ART「極楽モード」: **約+2.0枚/G（ボーナス込み）**。
- 当時グリーンべると、P-WORLD、八通屋で一致。
- confidence: INDUSTRY_PERIOD + MULTI_SOURCE_HIGH

## basicPayout

- BADBOYS BONUS: **約200枚**。
- PREMIUM BADBOYS BONUS: **約60枚**。
- ART「極楽モード」: **1セット50G / 100G / 150G + α**。当時グリーンべるとでは初期G振り分けは **1:1:1**。
- ART上乗せ特化「超極楽モード」: **10G固定**、当時発表では平均上乗せ約200G。
- confidence: INDUSTRY_PERIOD + MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時は **ART間の投入差枚数**でARTを抽選する差枚数解除を搭載。
- 最大天井: **ART間最大2532枚投入**でART突入。P-WORLDでは目安を **約1689G** と掲載。
- 保存攻略PDFでは、天井到達ARTの内部モードが最上位になる旨を記載。
- 通常時には投入枚数管理上の **通常A / 通常B / 天国A / 天国B** の4モード、ART直撃抽選に関わる **低確 / 高確 / 超高確** の状態が存在するとされる。
- これらの通常時全移行テーブルは本DB目的外なので収集しない。
- confidence: INDUSTRY_DB + ANALYSIS_SINGLE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__MACHINE_SPECIFIC_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_CONTRACT_UNVERIFIED_AFTER_CROSS_SOURCE_SEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時に、ART間投入差枚数カウンタ・通常A/B/天国A/B・低確/高確/超高確をどのように初期化/再抽選するかを直接規定した本機固有資料は **UNVERIFIED_AFTER_RESEARCH**。
- 天井がG数ではなくART間の投入枚数管理であるため、一般的な「設定変更でG数リセット」を推測転記しない。

### carryOverBehavior

- 据え置き時のART間投入差枚数、通常モード、内部状態の保持契約: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時の投入差枚数カウンタ、通常モード、内部状態、液晶ステージ/表示契約: **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 通常天井は **ART間最大2532枚投入**。
- 設定変更/据え置き/純電断時にこの投入枚数進捗をリセット/引継ぎする直接契約は **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の短縮天井・変更後固定投入枚数天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時最大: **2532枚投入（P-WORLD目安 約1689G）**。

### modeAfterReset

- 通常A / 通常B / 天国A / 天国Bの存在は確認。
- 設定変更時の再抽選/引継ぎおよび設定別振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 低確 / 高確 / 超高確の存在は確認。
- 設定変更時・据え置き・純電断時の初期状態/引継ぎ契約: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、朝一高確確定、ART確定などの主要恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、ランプ等による設定変更/据え置き判別: **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetOnlyHitRateWithinSpecificGames: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。

## sources

取得日: **2026-09-06**

1. グリーンべると / P-WORLD業界ニュース「岡崎×OHが提携後初の液晶機と30φ機を発表」
   - https://news.p-world.co.jp/articles/5890/greenbelt
   - 2013-06-06。8/4納品開始予定、BADBOYS約200枚 / PREMIUM約60枚、ART約2.0枚/G、50/100/150G、差枚数解除、内部5モード、超極楽10G・平均上乗せ約200G。
   - confidence: INDUSTRY_PERIOD

2. P-WORLD「パチスロBADBOYS」
   - https://www.p-world.co.jp/machine/database/7116
   - 5号機ART、ボーナス約200/60枚、ART50/100/150G+α・約2.0枚/G、最大差枚数-2532枚（約1689G）天井、低確/通常/高確。
   - confidence: INDUSTRY_DB

3. 八通屋「搞怪少年BAD BOYS / BADBOYS」
   - https://www.8tw.com.tw/ec99/rwd1540/product.asp?prodid=S0147
   - 導入2013-08-05、ART約2.0枚/G、設定別機械割 97.1～110.9%。
   - confidence: SECONDARY_MACHINE_DB

4. 八通屋保存攻略PDF
   - https://www.8tw.com.tw/rwd1540/store/F2/S0147%20%E6%90%9E%E6%80%AA%E5%B0%91%E5%B9%B4BAD%20BOYS%E4%B8%AD%E6%96%87%E7%89%88%E6%94%BB%E7%95%A5.compressed.pdf
   - 機械割 97.0～110.9%、ART初当たり1/426～1/279、ボーナス1/8192・1/1024、2532枚投入天井、通常4モード・3状態。
   - confidence: ANALYSIS_SINGLE_ARCHIVED_GUIDE

5. 検定通過確認済み機種一覧
   - https://p-media.info/%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%A2%BA%E8%AA%8D%E6%B8%88%E3%81%BF%E6%A9%9F%E7%A8%AE%E4%B8%80%E8%A6%A7%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/
   - 型式名「BADBOYS 0A」。
   - confidence: SECONDARY_REGULATORY_LIST

6. 当時新機種資料（保存文書）
   - https://happylibus.com/doc/987774/%E9%96%B2%E8%A6%A7%E3%81%99%E3%82%8B
   - 8月4日納品開始、50/100/150G ART、純増1.75枚との表記、機械割設定1 97%～設定6 114.2%との別値がありCONFLICT根拠として保持。
   - confidence: PERIOD_SECONDARY_CONFLICT

## missingFields

- baseGamesPer50
- 設定変更時の投入差枚数カウンタ契約
- 据え置き / 電源OFF→ONの直接契約
- リセット時通常モード・内部状態振り分け
- 朝一専用公開数値
- ガックン・初期出目・液晶等の変更判別

## conflicts

- 機械割: 八通屋機種DB **97.1/99.1/100.9/104.7/107.2/110.9%** vs 同保存攻略PDF **97.0/99.0/100.8/104.6/107.1/110.9%**。さらに当時保存資料に **設定1 97%～設定6 114.2%** 表記あり。平均化しない。
- 純増: グリーンべると / P-WORLD / 八通屋は **約2.0枚/G（ボーナス込み）**。当時保存資料には **1.75枚/G** 表記もあるためCONFLICT候補として保持し、本線は複数系統一致の約2.0枚/Gを採用。
- release month/date: 一部後年タイアップ一覧に「2013年7月」表記があるが、当時業界記事は8/4納品開始予定、八通屋は8/5導入。時系列本線は **2013-08-05** とする。