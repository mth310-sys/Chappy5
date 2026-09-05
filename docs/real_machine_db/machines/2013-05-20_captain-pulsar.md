# キャプテンパルサー

machineName: キャプテンパルサー
manufacturer: 山佐
releaseDate: 2013-05-20
releaseDatePrecision: exact_day
generation: 5号機
systemType: AT
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-05-20**。K-Navi、パチビーで一致。2013年当時の機種紹介には5月19日からの納品予定表記もあるため、ホール稼働開始日の本線キーは複数機種DB一致の2013-05-20を採用。
- formalModelName: **キャプテンパルサー2F**（中古実機資料、当時回顧資料で一致）。
- パルサーシリーズ初のAT機。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 99.0% |
| 3 | 101.3% |
| 4 | 103.6% |
| 5 | 105.7% |
| 6 | 110.0% |

- パチマガスロマガ、pacnk、5号機クロニクルで一致。
- 2-9伝説には設定3のみ **102.3%** とする値があり、他の複数系列と不一致。平均せず `CONFLICT_SETTING3_101.3_VS_102.3` として保持。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH_WITH_ONE_CONFLICT

## initialHitBySetting

AT「トレジャーパニック」初当たり:

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/283.2 |
| 2 | 1/267.5 |
| 3 | 1/252.6 |
| 4 | 1/238.2 |
| 5 | 1/224.0 |
| 6 | 1/207.0 |

- パチマガスロマガ、pacnk、当時天井解析、2-9伝説で一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## baseGamesPer50

- **約32G/50枚（1000円）**。
- 2013年当時の機種紹介と当時天井解析で一致。
- confidence: MULTI_SOURCE_PERIOD_ANALYSIS_HIGH

## netIncrease

- AT「トレジャーパニック」: **約2.9枚/G**。
- P-WORLD、パチビー、当時資料、後年公式実機アプリ紹介で一致。
- 5号機クロニクルには約2.8枚/G表記があるため、丸め/算定差の可能性を残し `CONFLICT_ROUNDING_2.9_VS_2.8` として保持。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## basicPayout

- AT「トレジャーパニック」: **1セット40G+α**、純増約2.9枚/G。
- ゲーム数上乗せ+セットストック型。AT中に獲得したコインにより終了時「トレジャースロット」で後乗せ抽選が行われる。
- 完全再現用の上乗せ契機別振り分けは本DB対象外。

## modeSpecificMinimumData

- 通常時は規定ゲーム数管理。
- 当時解析で確認できる主要モードと最大規定G:
  - 通常A: **1248G**
  - 通常B: **512G**
  - 極楽準備（別資料で通常C相当表記）: **1280G**
  - 天国: **128G**
  - 超天国: **0G**
  - 極楽: **128G**
  - 超極楽: **0G**
- 最大天井は **1280G**。到達でAT「トレジャーパニック」当選。
- `通常C` と `極楽準備` の名称は資料系統差があるため、完全同義と断定せず `LABEL_VARIANT_NORMAL_C_VS_GOKURAKU_PREP` として保持。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_GAME_COUNTER_RESET_AND_MODE_RESELECT_CONFIRMED__POWER_CYCLE_DISPLAY_RANDOM_CONFIRMED__CARRYOVER_INTERNAL_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 2013年当時の天井解析で、設定変更後は **天井消化ゲーム数をリセット**し、**内部モード移行抽選を行い、天井規定ゲーム数を再セット**することを直接確認。
- 液晶ステージは設定変更後 **ランダムスタート**。
- パチスロ立ち回り講座でも設定変更後の天井Gクリアを別系統で確認。

### carryOverBehavior

- 当時天井狙い資料には実戦上の表記として「宵越し×」があるが、同じ資料は設定変更時のG数リセットを説明しており、**純据え置き時**のゲーム数・モード・状態を個別に列挙した契約ではない。
- 純据え置き時の内部G数、モード、内部状態の保持/再抽選は、機種名・型式名・山佐・「据え置き」「宵越し」「朝一」を組み替えた再探索後も直接仕様を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更仕様の反対推定では埋めない。

### powerCycleBehavior

- 当時解析で、**電源OFF→ON時も液晶ステージはランダム**になることを直接確認。
- ただし単純電断時の天井G、内部モード、内部状態が保持されるかどうかを直接列挙した本機固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 液晶ランダム開始だけから内部契約を推定しない。

### gameCounterReset

- settingChange: **RESET_CONFIRMED**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で前日の天井進捗はクリアされる。
- 設定変更後も最大天井そのものは **1280G**。pacnkも「設定変更時はゲーム数リセット、天井1280Gのまま」と整理。
- リセット専用の一律短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- **RESELECT_CONFIRMED**。設定変更時に内部モード移行抽選を行い、規定ゲーム数を再セットすることを当時解析で直接確認。
- 設定変更専用のモード振り分け具体率は、パチマガスロマガの「朝イチ・設定変更」解析項目の存在まで確認したものの、現存検索インデックスから数値表を安全に回収できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 通常時にはステージ/高確期待度の概念があるが、設定変更時の内部状態初期化・再抽選率を直接示す本機固有数値資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時にモードと規定ゲーム数が再セットされるため、前日の深い規定G進捗を引きずらない。
- 当時解析では「朝イチ128G以内は狙い目か」という実戦考察があるが、これは公開当選率ではないため数値恩恵として採用しない。
- 設定変更専用の天国移行率・128G以内当選率など、比較可能な公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 前日の天井ゲーム数進捗は設定変更で消失するため、宵越し天井狙いの進捗は失われる。
- その他の設定変更固有の不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 設定変更時も単純電源OFF→ON時も液晶ステージが **ランダムスタート**となる当時解析があるため、朝一液晶ステージ単独では変更判別材料になりにくい。
- ガックン、初期出目、リール挙動等の本機固有変更判別は、検索語・資料系統を変えた再探索後も直接仕様を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetHitRateWithin128G: `UNVERIFIED_AFTER_RESEARCH`
- shortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`

### numericResetData

- settingChangeGameCounter: RESET
- settingChangeMode: RESELECT
- settingChangeMaxCeiling: 1280G
- settingChangeModeDistribution: UNVERIFIED_AFTER_RESEARCH
- powerCycleDisplayStage: RANDOM
- carryOverGameCounter: UNVERIFIED_AFTER_RESEARCH
- powerCycleGameCounter: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_SETTING_CHANGE_GAME_COUNTER_RESET_MODE_RESELECT_AND_DISPLAY_RANDOM__MEDIUM_FOR_NO_SHORTENED_CEILING__UNVERIFIED_FOR_PURE_CARRYOVER_POWER_CYCLE_INTERNALS_STATE_NUMBERS_AND_GAKKUN

## missingFields

- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- pureCarryOverFullContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleInternalContract: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- gakkunOrInitialReelDetection: `UNVERIFIED_AFTER_RESEARCH`
- publicResetHitRateWithin128G: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- payoutRateSetting3:
  - パチマガスロマガ / pacnk / 5号機クロニクル: **101.3%**
  - 2-9伝説: **102.3%**
  - `CONFLICT_SETTING3_101.3_VS_102.3`
- netIncrease:
  - P-WORLD / パチビー / 当時資料: **約2.9枚/G**
  - 5号機クロニクル: **約2.8枚/G**
  - `CONFLICT_ROUNDING_2.9_VS_2.8`
- modeLabel:
  - 当時資料: **極楽準備**
  - 後年整理: **通常C**
  - `LABEL_VARIANT_NORMAL_C_VS_GOKURAKU_PREP`

## sources

retrievedAt: 2026-09-06

- K-Navi: https://p-kn.com/slot/1848/
  - 2013-05-20導入、山佐、機種基本情報。
- パチビー: https://www.pachibee.jp/movies/index/9340
  - 2013-05-20、5号機AT、BR非搭載、CZ/天井あり、純増約2.9枚/G。
- P-WORLD: https://www.p-world.co.jp/machine/database/7065
  - 5号機AT、1セット40G+α、純増約2.9枚/G、CZ/AT構造。
- パチマガスロマガ 機種ページ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/193/yamasa_slot_193.php
  - 機種固有の「朝イチ・設定変更」解析項目、モード/AT解析項目の存在。
- パチマガスロマガ ボーナス確率・PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/193/h.php
  - 設定別AT初当たり、機械割。
- pacnk: https://pacnk.com/slot/2013/captainpulsar/top.php
  - 設定別AT初当たり、機械割、通常時モード概要。
- pacnk 設定判別/天井: https://pacnk.com/slot/tools/sh_captainpulsar.html
  - 最大1280G、設定変更でゲーム数リセット、リセット後も最大天井1280G。
- パチスロ立ち回り講座: https://crankyseven.com/sp/tenjo-5ka.htm
  - AT間1280G、設定変更後は天井到達までのゲーム数クリア。
- 天井ハイエナ生活 当時解析: https://macerate.seesaa.net/article/362523309.html
  - モード別最大規定G、設定変更時G数リセット・モード移行抽選・規定G再セット、設定変更/電源ONOFF時の液晶ランダム開始、約32G/1000円、AT 40G+α/約2.9枚G。
- 2013年当時機種紹介: https://ameblo.jp/slostar/entry-11508601427.html
  - 5月19日～納品予定、AT機、約32G/1000円、主要モード別最大G。
- 5号機クロニクル 山佐一覧: https://5goki.com/yamasa
  - 機械割96.9～110.0%、後年整理の純増約2.8枚/G。
- 2-9伝説: https://29den.com/captain-pulsar/
  - 天井/モード、設定変更Gリセット、AT初当たり。設定3機械割102.3%の競合値。
- 中一商事 実機資料: https://www.nakaiti.com/html/sYamasa161.html
  - 型式名キャプテンパルサー2F、5号機AT。
- 当時回顧機種資料: https://pachinko.hatenablog.jp/entry/2013/05/captainPulsar
  - 型式名キャプテンパルサー2 F、2013年5月、AT純増約2.9枚/G。

## researchNotes

- 表記は「キャプテンパルサー / パチスロ キャプテンパルサー / キャプテンパルサー2F / キャプテンパルサー2 F」、メーカー名「山佐」を使用。
- resetBehavior欠損は「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / モード / モード移行 / 128G / ガックン」を組み替え、当時解析、旧天井DB、現存攻略DB、回顧資料を横断。
- パチマガスロマガに「朝イチ・設定変更」項目が現存するが、検索インデックスから具体数値表を安全に回収できなかったため設定変更モード振り分けを推定していない。
- 2-9伝説の設定3機械割102.3%は、パチマガスロマガ/pacnk/5号機クロニクルの101.3%と競合するため平均していない。
