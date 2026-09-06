# ジャックポットドリーム

machineName: ジャックポットドリーム
manufacturer: 岡崎産業
releaseDate: 2013-08-05
releaseDatePrecision: exact_day
generation: 5号機
systemType: ART / 完全告知 / 7セグ
recordStatus: COMPLETE_CORE_WITH_BASE_AND_RESET_DETAILS_UNVERIFIED_AFTER_RESEARCH

## identity

- ホール導入日: **2013-08-05**。K-Naviが同日を明記し、パチマガスロマガは2013年8月、P-WORLDも岡崎産業の5号機ARTとして掲載。
- manufacturer: **岡崎産業**。
- 型式名: **ジャックポットドリームD1**（当時筐体情報資料）。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH / MACHINE_IDENTITY_SINGLE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 99.2% |
| 3 | 101.4% |
| 4 | 103.3% |
| 5 | 105.4% |
| 6 | 108.1% |

- K-Naviとパチマガスロマガで一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/231.8 |
| 2 | 1/214.7 |
| 3 | 1/202.1 |
| 4 | 1/178.5 |
| 5 | 1/175.4 |
| 6 | 1/138.0 |

- K-Naviとパチマガスロマガで一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「ジャックポットドリーム / ジャックポットドリームD1 / 岡崎産業」と「50枚 / 1000円 / 千円 / 1K / コイン持ち / ベース / 回転数」を組み替え、K-Navi、P-WORLD、パチマガスロマガ、旧記事・回顧資料を横断したが、2013年本機を明示した比較可能な値を固定できず。
- 2014年「ジャックポットドリームプラス」や2026年スマスロ「ビッグドリーム」の値は別機種なので除外。

## netIncrease

- ART「ドリームラッシュ」: **約+2.0枚/G**。
- K-Navi、P-WORLD、パチマガスロマガで一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- ART「ドリームラッシュ」: **基本33G+α**。P-WORLDでは33～777G、セットストック型と記載。
- ドリームボーナス: **約45枚 / 7Gで終了**。
- ドリームボーナス経由ART: **111G以上**（パチマガスロマガは111～777G、K-Naviは111G以上濃厚）。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時のレア小役およびドリームボーナスからART抽選。
- ART初期ゲーム数の昇格、セット数上乗せあり。
- ゲーム数天井/規定G解除の機種固有直接値: **UNVERIFIED_AFTER_RESEARCH**。検索結果に後継機・別シリーズの天井情報が大量混入するため転記しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__MACHINE_SPECIFIC_RESET_CONTRACT_UNVERIFIED_AFTER_CROSS_SOURCE_SEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時のART抽選状態、内部状態、ゲーム数等を直接規定した本機固有資料: **UNVERIFIED_AFTER_RESEARCH**。
- 後継「ジャックポットドリームプラス」の情報は流用しない。

### carryOverBehavior

- 据え置き時のART関連状態・内部ゲーム数等の保持契約: **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時の内部状態・表示・リール挙動: **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 本機固有のゲーム数天井/規定G契約自体を安全に固定できず、設定変更/据え置き/電源OFF→ON間のカウンタ挙動も **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の短縮天井・変更後固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井の直接値: **UNVERIFIED_AFTER_RESEARCH**。

### modeAfterReset

- 朝一専用モード、設定変更時モード再抽選/引継ぎ、公開振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時の高確/低確等の状態再抽選・保持契約: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、ART確定、朝一高確等の主要恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、7セグ表示、ランプ等による設定変更/据え置き判別: **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetOnlyHitRateWithinSpecificGames: **NONE_CONFIRMED_AFTER_RESEARCH**。

## sources

取得日: **2026-09-06**

1. K-Navi「ジャックポットドリーム」
   - https://p-kn.com/slot/1919/
   - 2013-08-05導入、岡崎産業、設定別ART初当たり、機械割、ART約2.0枚/G、33G+α、ドリームボーナス経由111G以上。
   - confidence: ANALYSIS_HIGH

2. パチマガスロマガ「ジャックポットドリーム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/69/a.php
   - 2013年8月、ART33G+α、約2.0枚/G、ドリームボーナス約45枚/7G、111～777G ART。
   - confidence: ANALYSIS_HIGH_PERIOD

3. パチマガスロマガ「ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/69/h.php
   - 設定別ART初当たり・機械割。
   - confidence: ANALYSIS_HIGH_PERIOD

4. パチマガスロマガ「ART突入フロー」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/69/l.php
   - ART33G+α、約2.0枚/G、ドリームボーナス経由111～777G。
   - confidence: ANALYSIS_HIGH_PERIOD

5. P-WORLD「ジャックポットドリーム」
   - https://www.p-world.co.jp/machine/database/7170
   - 岡崎産業、5号機ART、33～777G、約2.0枚/G、セットストック型。
   - confidence: INDUSTRY_DB

6. pachinko's blog 当時筐体情報（2013-08-01）
   - https://pachinko.hatenablog.jp/archive/2013/08/01
   - 型式名「ジャックポットドリーム D1」、2013年8月リリース。
   - confidence: PERIOD_SECONDARY_SINGLE_IDENTITY

## missingFields

- baseGamesPer50
- 通常天井/規定Gの直接契約
- settingChangeBehavior / carryOverBehavior / powerCycleBehavior の本機固有直接仕様
- 朝一モード/状態公開数値
- ガックン・初期出目・7セグ等の変更判別契約

## conflicts

- K-Naviのカテゴリ表示には「ノーマルタイプ」とあるが、同ページ本文・P-WORLD・パチマガスロマガはいずれも純増約2.0枚/GのART「ドリームラッシュ」を明記する。システム分類は実ゲーム仕様を優先して **ART** とし、カテゴリ表記差を平均・混同しない。
- 2014年「ジャックポットドリームプラス」は別型式・別スペック。2013年本機へ数値を転記しない。
