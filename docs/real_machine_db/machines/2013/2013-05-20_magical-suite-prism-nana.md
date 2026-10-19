# まじかるすいーとプリズム・ナナ

machineName: まじかるすいーとプリズム・ナナ
manufacturer: DAXEL
releaseDate: 2013-05-20
releaseDatePrecision: exact_day
generation: 5号機
systemType: ART（疑似ボーナス型）
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-05-20**。K-Navi、パチビーで一致。
- DAXEL製。2013年版を対象とし、2025年12月導入のスマスロ「LプリズムナナCC」とは別機種として完全分離する。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.3% |
| 3 | 99.7% |
| 4 | 104.0% |
| 5 | 107.2% |
| 6 | 110.8% |

- K-Navi、P-WORLD、pacnk、パチスロ立ち回り講座で一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## initialHitBySetting

疑似ボーナス合算:

| 設定 | 合算 |
|---|---:|
| 1 | 1/125.3 |
| 2 | 1/122.5 |
| 3 | 1/116.5 |
| 4 | 1/111.3 |
| 5 | 1/98.1 |
| 6 | 1/93.5 |

主要内訳:

| 設定 | SPB | プリズムボーナス | プリズムチャンス |
|---|---:|---:|---:|
| 1 | 1/1192.9 | 1/229.5 | 1/358.9 |
| 2 | 1/1680.3 | 1/216.6 | 1/338.7 |
| 3 | 1/1035.3 | 1/215.2 | 1/336.3 |
| 4 | 1/1500.7 | 1/197.2 | 1/308.0 |
| 5 | 1/835.7 | 1/181.7 | 1/286.2 |
| 6 | 1/1246.7 | 1/172.4 | 1/244.6 |

- K-Navi、P-WORLD、pacnk、パチスロ立ち回り講座で主要値一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## baseGamesPer50

- **約33G/50枚**。
- 後年整理資料で2013年版を明示した値を確認。
- 2013年当時の高信頼解析系で同値を直接再確認できなかったため、性能コア値として保持しつつ confidence は `ANALYSIS_SINGLE_RETROSPECTIVE`。

## netIncrease

- ART疑似ボーナス: **約2.0枚/G**。
- パチビー、P-WORLD、パチマガスロマガ、パチスロ立ち回り講座で一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## basicPayout

- プリズムボーナス: **100G / 約200枚**。
- プリズムチャンス: **小役7回成立で1セット**。K-Naviは1セット42枚、パチマガスロマガ/パチスロ立ち回り講座は平均的な獲得性能を約75枚と記載。
- プリズムチャンスは最大7セット継続。7セット完走時は次回超天国モード。
- 「1セット42枚」と「約75枚」は単純な同一定義値とは断定せず、平均獲得/継続込み等の定義差候補として双方を保持。

## modeSpecificMinimumData

- ART間 **900G** 消化で天井。到達時はART当選＋次回天国モード以上が確定。
- 周期天井も存在。1周期は **1～400G** の範囲で、**4周期目**で周期天井到達となりARTへ突入。
- 通常時は周期管理と自力CZ「マジカライズゾーン」を軸にART疑似ボーナスを目指す。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_COUNTER_RESET_CONFIRMED__NO_DIRECT_PURE_CARRYOVER_OR_POWER_CYCLE_INTERNAL_CONTRACT_FOUND
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- パチスロ立ち回り講座の本機専用天井解析で、設定変更時は **天井到達までのゲーム数がクリア**されることを直接確認。
- K-Naviにも本機専用「設定変更後の挙動」解析項目が存在することを確認したが、現存キャッシュから本文を安全に回収できなかったため、内容を推測して補完しない。

### carryOverBehavior

- 「据え置き」「宵越し」「朝一」「天井」を機種名/DAXEL/表記揺れと組み替えて再探索したが、純据え置き時のART間G、周期進捗、内部モード/状態の保持契約を直接列挙する高信頼資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時にG数がクリアされることの反対推定で据え置き仕様を埋めない。

### powerCycleBehavior

- 「電源OFF→ON」「電源オンオフ」「電断」「朝一」を含めて再探索したが、単純電源OFF→ONのみの場合のART間G、周期進捗、モード/状態の保持・再抽選を直接示す本機固有資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- settingChange: **RESET_CONFIRMED**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更により前日のART間天井進捗はクリアされる。
- 通常天井はART間 **900G**。
- 2013年版について、設定変更専用の一律短縮天井数値は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 2025年スマスロ版の「設定変更後555G+α」は別機種仕様のため混入禁止。

### modeAfterReset

- 通常/天国/超天国等の内部モードを持つことは確認。
- ただし2013年版の設定変更時モード再抽選有無・設定変更専用モード振り分け具体率を、現存する直接本文から安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時の内部状態初期化・再抽選率は、検索語・資料系統を変えた再探索後も直接仕様を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後固有の短縮天井や公開された朝一当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井そのものは900G到達時にART＋次回天国以上という恩恵を持つが、これは設定変更専用恩恵ではない。

### resetPenalties

- 前日のART間天井進捗は設定変更で消失する。
- その他の設定変更固有の不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- ガックン、初期出目、液晶ステージ、NeXTカウンター等による本機固有の設定変更/据え置き判別契約を直接確認できず `UNVERIFIED_AFTER_RESEARCH`。
- K-Naviに設定変更後挙動の専用項目は残るが、本文未回収のため判別要素を推測しない。

### publicMorningNumbers

- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- shortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`

### numericResetData

- settingChangeGameCounter: RESET
- normalCeiling: 900G
- periodicCeiling: 4th cycle
- settingChangeShortenedCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- carryOverGameCounter: UNVERIFIED_AFTER_RESEARCH
- powerCycleGameCounter: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_SETTING_CHANGE_GAME_COUNTER_RESET__UNVERIFIED_FOR_PURE_CARRYOVER_POWER_CYCLE_MODE_STATE_AND_DETECTION

## missingFields

- formalModelName / certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- highConfidencePeriodBaseGamesPer50CrossCheck: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverFullContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleInternalContract: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- gakkunOrInitialDisplayDetection: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- prismChanceBasicPayoutDefinition:
  - K-Navi: **1セット42枚獲得可能**
  - パチマガスロマガ / パチスロ立ち回り講座: **約75枚**
  - 定義差の可能性があるため平均せず `CONFLICT_OR_DEFINITION_DIFFERENCE_PC_42_VS_APPROX75`。

## sources

retrievedAt: 2026-09-06

- K-Navi: https://p-kn.com/slot/1845/
  - 2013-05-20導入、DAXEL、設定別SPB/PB/PC/合算、機械割、100G約200枚、PC構造、設定変更後挙動専用項目の存在。
- パチビー: https://www.pachibee.jp/machines/movie/213040000
  - 2013-05-20導入、5号機ART、純増約2.0枚/G。
- P-WORLD: https://www.p-world.co.jp/machine/database/7062
  - ART疑似ボーナス、純増約2.0枚/G、100G固定PB、PC最大7セット、設定別確率。
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/04/a.php
  - ART疑似ボーナス、純増約2.0枚/G、PB約200枚、PC約75枚。
- パチマガスロマガ ARTフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/04/l.php
  - PB100G/約200枚、PC小役7回/約75枚、純増約2.0枚/G。
- pacnk: https://pacnk.com/slot/tools/sh_prismnana.html
  - 設定別PC/PB/NeXTチャンス、機械割。
- パチスロ立ち回り講座 機種トップ: https://crankyseven.com/magicalsweet-prismnana-pc.htm
  - 設定別確率、ART合成、機械割、純増約2.0枚/G、PB/PC基本性能、天井、設定変更時G数クリア。
- パチスロ立ち回り講座 天井: https://crankyseven.com/sp/magicalsweet-prismnana11-pc.htm
  - ART間900G、天井恩恵、設定変更時の天井Gクリア、1～400G/4周期の周期天井。
- みんスロ: https://minslo.com/%E3%81%BE%E3%81%98%E3%81%8B%E3%82%8B%E3%81%99%E3%81%84%E3%83%BC%E3%81%A8%E3%83%97%E3%83%AA%E3%82%BA%E3%83%A0%E3%83%BB%E3%83%8A%E3%83%8A/
  - 2013年版を明示した約33G/50枚、900G天井、設定別性能の後年整理。
- ALL7 2013年5月導入予定一覧: https://www.all7.jp/plans/index/2013/05
  - 2013-05-20導入予定としてプリズム・ナナ、キャプテンパルサーを掲載。同日群監査に使用。

## researchNotes

- 表記揺れ: 「まじかるすいーとプリズム・ナナ」「まじかるすいーと プリズム・ナナ」「プリズムナナ」「プリズム・ナナ」、メーカー名DAXELを使用。
- reset再探索語: 設定変更、リセット、朝一、据え置き、宵越し、電源OFF ON、電断、天井短縮、モード、モード振り分け、ガックン、NeXTカウンター。
- 2025年12月のスマスロ同名系列が大量に検索へ混入するため、2013/DAXEL/5号機を明示して分離した。
