# 真・女神転生

machineName: 真・女神転生
manufacturer: タイヨーエレック
formalModelName: 真・女神転生 K（後年整理資料）
releaseDate: 2009-08-17（K-Naviホール導入開始） / 2009-08-18（パチビー導入日） CONFLICT
generation: 5号機
systemType: A+ART / RT / AT / CZ / パンク回避 / 天井ART / 技術介入
coreStatus: COMPLETE_CORE_WITH_PAYOUT_ART_PURE_GAIN_AND_RELEASE_DAY_CONFLICT

## payoutRateBySetting

P-WORLD市場掲載値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 98.7% |
| 2 | 102.5% |
| 5 | 108.1% |
| 6 | 114.0% |

パチマガスロマガ・シミュレート値:

| 設定 | PAYOUT |
|---:|---:|
| 1 | 98.72% |
| 2 | 102.36% |
| 5 | 107.12% |
| 6 | 114.00% |

後年整理資料:

| 設定 | 出玉率 |
|---:|---:|
| 1 | 98.0% |
| 2 | 101.8% |
| 5 | 107.1% |
| 6 | 112.9% |

算出条件/資料系統差を解消できないため平均せず別系列で保持する。

## initialHitBySetting

| 設定 | 赤7BIG | 青BAR BIG | BIG合算 | CB | 全ボーナス合算 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/862.32 | 1/862.32 | 1/431.16 | 1/496.48 | 1/230.80 |
| 2 | 1/780.19 | 1/780.19 | 1/390.10 | 1/442.81 | 1/207.40 |
| 5 | 1/712.35 | 1/712.35 | 1/356.17 | 1/399.61 | 1/188.30 |
| 6 | 1/655.36 | 1/655.36 | 1/327.68 | 1/364.09 | 1/172.50 |

P-WORLD/K-Navi/旧パチマガスロマガで丸め差の範囲で整合。

## baseGamesPer50

旧パチマガスロマガ「1000円(50枚)あたりゲーム数」:

- 全設定共通: 29.97G

## netIncrease

- ART「メガテンチャンス」: P-WORLD / K-Navi / パチビーは約+1.0枚/G。
- 旧パチマガスロマガ基本システムは純増0.8枚/G。
- 同一ARTの掲載値が競合するため平均せず `CONFLICT_ART_PURE_GAIN_0_8_VS_1_0` として保持。
- K-Naviでは1セット平均41G。ただし本DBでは内部継続抽選の細部は収集対象外。

## basicPayout

- 赤7BIG: 約261枚
- 青BAR BIG: 約225枚
- CB: 約104枚の通常獲得目安 / 技術介入時MAX約116枚とする資料あり。120枚超払い出し終了。

## modeSpecificMinimumData

- 30G周期のCZ「カグツチモード」、RT「アマラミッション」、AT「煌天カグツチモード」、ART「メガテンチャンス」を持つ。
- 内部状態は4種類とされ、高確ほどCZ/ART面が優遇される。
- 通常天井ART: BIG後999G、CB後666G消化後、約20Gの潜伏を経て次回ボーナスまで継続する天井ARTへ突入。
- 天井ART中のボーナス後はART突入確定とされる。

## resetBehavior — v0.7

settingChangeBehavior: PARTIAL_AFTER_RESEARCH。K-Naviに本機専用「設定変更・ART後の状態」解析項目と「朝イチ特典」分類が存在することは確認したが、現存検索結果から設定変更時の具体的な内部状態振り分け・天井カウンタ処理本文を直接回収できなかった。一般的な5号機挙動から補完しない。

carryOverBehavior: PARTIAL_CONFIRMED_CEILING_CARRYOVER_CLASSIFICATION。K-Naviが本機を「宵越アリ」と明示しており、据え置き時の天井狙いが成立する分類であることは確認。どの表示/内部状態まで引き継ぐかの詳細は未確認。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみで天井ゲーム数、内部状態、CZ/RT/AT/ART状態がどう復帰するかを本機固有の直接資料で確定できず。

gameCounterReset: PARTIAL_AFTER_RESEARCH。通常天井はBIG後999G / CB後666G。K-Naviの「宵越アリ」から据え置き時の天井ゲーム数持越しは確認できるが、設定変更時のclear/retainは専用解析本文を回収できず未確定。

ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の短縮天井や再起算G数の公開数値を確定できず。通常天井999G/666Gとは分離。

modeAfterReset: UNVERIFIED_AFTER_RESEARCH。内部4状態を持つが、設定変更時の初期状態/モード振り分けを直接確認できず。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/RT/AT/ART・高確状態の設定変更時処理を直接確認できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: PARTIAL_EXISTENCE_CONFIRMED_DETAIL_UNVERIFIED。K-Naviが「朝イチ特典」対象機として明示するが、現存検索結果から具体恩恵本文・発生率を回収できず、数値や内容を推測しない。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶/ランプ、ゲーム数挙動による本機固有の設定変更判別を、機種名/型式/メーカー/シリーズ名と検索語を組み替えても直接確認できず。

numericResetData:
  normalCeilingAfterBig: 999G + about20G latency
  normalCeilingAfterCb: 666G + about20G latency
  carryOverClassification: 宵越アリ（K-Navi）
  morningBenefitClassification: 朝イチ特典（K-Navi、詳細未回収）
  resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
  resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
  resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
  morningHitRate: UNVERIFIED_AFTER_RESEARCH
  resetBenefitRate: UNVERIFIED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_RESEARCH_PASS_CARRYOVER_AND_MORNING_BENEFIT_EXISTENCE_CONFIRMED_EXACT_SETTING_CHANGE_STATE_COUNTER_POWER_CYCLE_AND_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `真・女神転生 / 真女神転生 / メガテン / 真・女神転生 K / タイヨーエレック` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 宵越し / 天井 / 999 / 666 / 高確 / カグツチ / メガテンチャンス / ガックン` を組み替えて再探索。
- P-WORLD、K-Navi、パチビー、旧パチマガスロマガ、後年整理資料を横断。
- K-Naviの専用「設定変更・ART後の状態」記事への導線は確認したが本文の現存取得に失敗したため、存在だけを根拠に具体値を復元しない。
- 後継/別シリーズの真・女神転生機種のリセット情報は混入させない。

## sources

取得日: 2026-09-03

1. K-Navi「真・女神転生」 — https://p-kn.com/slot/1013/ — ホール導入開始2009-08-17、設定1/2/5/6、BIG/CB/合算、ART約+1.0枚/G、天井・宵越アリ・朝イチ特典、専用「設定変更・ART後の状態」項目 — reliability: ANALYSIS_HIGH
2. K-Navi「ART・メガテンチャンス」 — https://p-kn.com/slot/1013/11859/ — ART約+1.0枚/G、1セット平均41G — reliability: ANALYSIS_HIGH
3. P-WORLD「真・女神転生」 — https://www.p-world.co.jp/machine/database/5618 — タイヨーエレック、5号機A+ART/RT/AT/CZ、設定別主要確率、市場掲載機械割、基本獲得、ART約+1.0枚/G、天井 — reliability: ANALYSIS_HIGH
4. パチビー「真・女神転生」 — https://www.pachibee.jp/machines/about/209090059 — 導入日2009-08-18、基本獲得、ART約+1.0枚/G、BIG後999G/CB後666G+約20G潜伏の天井ART、内部4状態 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「真・女神転生 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/06/a.php — 30G周期、CZ/RT/AT/ART構造、純増0.8枚/G、基本獲得 — reliability: OLD_ANALYSIS_HIGH
6. パチマガスロマガ「真・女神転生 小役・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/06/c.php — 全設定29.97G/50枚 — reliability: OLD_ANALYSIS_HIGH
7. パチマガスロマガ「真・女神転生 ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/06/h.php — 設定別ボーナス確率、シミュレートPAYOUT98.72/102.36/107.12/114.00% — reliability: OLD_ANALYSIS_HIGH
8. pachinko's blog「タイヨーエレック パチスロ 真・女神転生」 — https://pachinko.hatenablog.jp/entry/2009/08/shin-megami-tensei — 型式名真・女神転生 K、2009-08、別出玉率系列98.0/101.8/107.1/112.9% — reliability: RETROSPECTIVE_SINGLE

## missingFields

- 設定変更時の999G/666G天井ゲーム数のclear/retain
- 設定変更時の内部4状態の振り分け
- 設定変更/据え置き/電断時のCZ/RT/AT/ART状態処理の詳細
- K-Navi「朝イチ特典」の具体内容・数値
- 単純電源OFF→ON時の状態復帰
- ガックン/初期出目/液晶・ランプによる設定変更判別

## conflicts

- 導入具体日はK-Navi 2009-08-17、パチビー2009-08-18。地域差/納品・稼働開始日の定義差の可能性があるため平均化せず両方保持。
- 機械割はP-WORLD 98.7/102.5/108.1/114.0%、旧パチマガシミュレート98.72/102.36/107.12/114.00%、後年整理98.0/101.8/107.1/112.9%。平均せず資料系列別に保持。
- ART純増はP-WORLD/K-Navi/パチビー約+1.0枚/G、旧パチマガスロマガ0.8枚/G。定義・解析時点差を解消できないためCONFLICTとして両方保持。
