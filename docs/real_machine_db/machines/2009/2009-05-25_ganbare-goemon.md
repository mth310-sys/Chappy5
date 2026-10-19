# がんばれゴエモン

machineName: がんばれゴエモン
manufacturer: KPE
formalModelName: がんばれゴエモンJD
releaseDate: 2009-05-25（K-Navi全国一斉導入開始日。グリーンべるとは2009-05-24納品予定、KONAMI公式は2009年5月稼働開始）
generation: 5号機
systemType: ボーナス + ART / A+ART / 次回ボーナスまで継続ART

## payoutRateBySetting

市場/業界掲載値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 98.8% |
| 3 | 100.8% |
| 4 | 102.9% |
| 5 | 105.9% |
| 6 | 109.1% |

パチマガスロマガのシミュレートPAYOUT:

| 設定 | PAYOUT |
|---:|---:|
| 1 | 98.10% |
| 2 | 99.06% |
| 3 | 101.04% |
| 4 | 103.18% |
| 5 | 106.14% |
| 6 | 109.60% |

定義/シミュレーション条件差があり得るため平均せず CONFLICT として併記。

## initialHitBySetting

| 設定 | BIG合成 | REG合成 | ボーナス合成 |
|---:|---:|---:|---:|
| 1 | 1/436.91 | 1/368.18 | 1/199.80 |
| 2 | 1/422.81 | 1/378.82 | 1/199.80 |
| 3 | 1/420.10 | 1/381.02 | 1/199.80 |
| 4 | 1/409.60 | 1/390.10 | 1/199.80 |
| 5 | 1/397.19 | 1/402.06 | 1/199.80 |
| 6 | 1/387.79 | 1/412.18 | 1/199.80 |

赤BIG（インパクトBIG）は全設定共通1/8192.00。青BIG/異色BIG、赤REG/青REGの内訳は旧解析資料に保存されているが、物差し用途では合成値を主値とする。

## baseGamesPer50

パチマガスロマガ旧解析「1000円あたりのゲーム数」:

| 設定 | 50枚あたりG数 |
|---:|---:|
| 1 | 38.05G |
| 2 | 38.03G |
| 3 | 38.16G |
| 4 | 38.28G |
| 5 | 38.53G |
| 6 | 38.56G |

reliability: ANALYSIS_HIGH_OLD

## netIncrease

ART「きらきら街道タイム」: 約+1.0枚/G。突入後は原則として次回ボーナス成立まで継続するストック型ART。

## basicPayout

- インパクトBIG: 約408枚 + ART2回保証
- BIG: 約204枚
- REG（小春ボーナス）: 約56枚

## modeSpecificMinimumData

- ART「きらきら街道タイム」は次回ボーナスまで継続、ストック可能。
- 主なART契機は大江戸チャンス/超大江戸チャンス中のボーナス、BIG中7揃い、ボーナス成立時抽選、インパクトBIG。
- 超大江戸チャンス中のボーナスはART2回、インパクトBIG成立時もART2回保証。
- ART非突入時のボーナス後には最大128Gの救済ゾーンが存在するとのP-WORLD記載あり。
- 通常ゲーム数による固定天井は、旧攻略資料で「天井なし」と確認。

## resetBehavior

settingChangeBehavior: `ART_STOCK_CLEARED_CHARACTER_COUNT_RESET_STAGE_RETAINED_ANALYSIS_SINGLE`
- 旧攻略資料で設定変更時に「ARTストック消滅」「キャラ数はゴエモン1人」「ステージは変化なし」と明記。
- 設定変更専用の天井短縮や朝一ART付与は確認できない。

carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き時にARTストック、キャラ数、ステージ状態がどう保持されるかを本機固有の信頼できる公開資料で直接確定できず。一般的挙動から推測しない。

powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- 電源OFF→ONのみの場合のARTストック、キャラ数、ステージ、内部状態処理を本機固有資料で確定できず。

gameCounterReset: `NOT_APPLICABLE_FOR_NORMAL_GAME_CEILING`
- 通常ゲーム数による固定天井なし。救済ゾーン最大128Gはボーナス後専用であり、通常ハマリ天井とは別扱い。

ceilingAfterReset: `NOT_APPLICABLE_NO_NORMAL_GAME_CEILING_CONFIRMED`

modeAfterReset: `STAGE_DISPLAY_RETAINED_ON_SETTING_CHANGE_ANALYSIS_SINGLE_INTERNAL_MODE_UNVERIFIED`
- 設定変更時も表示ステージは変化しないとの解析あり。ただし表示と内部状態が完全同義かは未確認。

stateAfterReset: `PARTIAL_ART_STOCK_CLEAR_CONFIRMED_OTHER_INTERNAL_STATE_UNVERIFIED`

advantageousSectionReset: `NOT_APPLICABLE`
- 5号機・有利区間制度前。

resetBenefits: `NONE_CONFIRMED_AFTER_RESEARCH`

resetPenalties: `ART_STOCK_LOST_ON_SETTING_CHANGE`
- 朝一客視点では前日ARTストック期待を設定変更で失うことが主要不利要素。

resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- ガックン、初期出目、表示変化等による設定変更/据え置き判別の本機固有確定情報を回収できず。

numericResetData:
- resetSpecificCeiling: NONE
- normalGameCeiling: NONE_CONFIRMED
- rescueZoneAfterNonARTBonus: MAX_128G（P-WORLD記載、通常天井とは別）
- resetModeDistribution: UNVERIFIED
- resetStateDistribution: UNVERIFIED
- morningHitRate: NONE_CONFIRMED
- resetBenefitRate: NONE_CONFIRMED

resetBehaviorQA: `PARTIAL_WITH_SETTING_CHANGE_ART_STOCK_CLEAR_AND_STAGE_BEHAVIOR_RECOVERED`

## sources

取得日: 2026-09-02

1. KONAMI / 機種アーカイブ「2009年 がんばれゴエモン」 — https://www.konami.com/amusement/psm/archive/ps/2009/goemon/ — 2009年5月稼働開始、5号機ART — reliability: OFFICIAL
2. グリーンべると「次回ボーナスまでのART搭載『がんばれゴエモン』」 — https://news.p-world.co.jp/articles/3351/greenbelt — 2009-03-18、5/24納品予定、ART約+1.0枚/G、各ボーナス獲得枚数、主要確率/出玉率レンジ — reliability: INDUSTRY_CONTEMPORARY
3. K-Navi「2009年5月新台導入カレンダー」 — https://p-kn.com/calendar/200905/ — 2009-05-25全国一斉導入開始日 — reliability: ANALYSIS_HIGH_CALENDAR
4. P-WORLD「がんばれゴエモン」 — https://www.p-world.co.jp/machine/database/5493 — ART約+1.0枚/G、獲得枚数、救済ゾーン最大128G等 — reliability: SECONDARY_DATABASE
5. パチマガスロマガ「がんばれゴエモン ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/16/h.php — 設定別BIG/REG/合成、シミュレートPAYOUT — reliability: ANALYSIS_HIGH_OLD
6. パチマガスロマガ「がんばれゴエモン 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/16/c.php — 設定別1000円あたりゲーム数 — reliability: ANALYSIS_HIGH_OLD
7. パチマガスロマガ「がんばれゴエモン 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/16/a.php — ART構造・獲得性能 — reliability: ANALYSIS_HIGH_OLD
8. SLONET「がんばれゴエモン攻略」 — https://slonet.sakura.ne.jp/kouryaku/ganbaregoemon.html — 天井なし、設定変更時ARTストック消滅・キャラ1人・ステージ変化なし — reliability: ANALYSIS_SINGLE_RETROSPECTIVE
9. 中一商事「KPE がんばれゴエモン」 — https://www.nakaiti.com/html/sKpe058.html — 型式名 がんばれゴエモンJD、獲得性能 — reliability: RETROSPECTIVE_MACHINE_DATABASE

## missingFields

- 据え置き時のARTストック/キャラ/ステージ/内部状態の直接挙動
- 電源OFF→ONのみの挙動
- 設定変更/据え置き判別の本機固有確定情報
- ART初当たり確率として設定別比較可能な公開値（ボーナス契機複合型のため単純初当たり値は今回未回収）

## conflicts

- 導入時期: グリーンべるとは2009-05-24「納品予定」、K-Naviは2009-05-25「全国一斉導入開始」、KONAMI公式は2009年5月。定義差として保持し、本DB releaseDate主値は全国一斉導入開始日の2009-05-25。
- 機械割: 市場/業界掲載97.9〜109.1%とパチマガシミュレート98.10〜109.60%に差。平均せず別系列保持。

coreStatus: COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT
