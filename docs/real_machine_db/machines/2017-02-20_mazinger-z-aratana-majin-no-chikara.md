machineName: パチスロマジンガーZ 新たな魔神の力
manufacturer: EXCITE / ニューギングループ
releaseDate: 2017-02-20
recordNumber: 1051
generation: 5号機 / 5.5号機期
systemType: A+ART
formalModelName: マジンガーZ新たな魔神の力Z
certificationNumber: 6S1014
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ちょんぼりすた、すろぱちくえすと、CrankySeven、Pachinaviはホール導入日を2017-02-20として一致して掲載。
- K-Naviの2017年2月導入カレンダーのみ2017-02-06欄に本機を掲載しているため、導入日はCONFLICTとして保持する。複数の機種個別資料が一致する2017-02-20をcanonical releaseDateとした。
- Pachinaviは型式名 `マジンガーZ新たな魔神の力Z`、検定番号 `6S1014` を掲載。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.6% |
| 3 | 102.4% |
| 4 | 104.8% |
| 5 | 108.0% |
| 6 | 110.0% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/362 | 1/513 | 1/212 |
| 2 | 1/340 | 1/480 | 1/199 |
| 3 | 1/317 | 1/484 | 1/191 |
| 4 | 1/294 | 1/449 | 1/178 |
| 5 | 1/299 | 1/374 | 1/166 |
| 6 | 1/286 | 1/368 | 1/161 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### bonusBreakdown
| 設定 | Zボーナス | デフォルメカバトル |
|---:|---:|---:|
| 1 | 1/1424.7 | 1/485.5 |
| 2 | 1/1191.6 | 1/474.9 |
| 3 | 1/1310.7 | 1/417.4 |
| 4 | 1/978.1 | 1/420.1 |
| 5 | 1/910.2 | 1/445.8 |
| 6 | 1/799.2 | 1/445.8 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約31G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「マジンガーラッシュ」単体純増: 約1.6枚/G。
- ボーナス込み実効表記: 約1.8枚/Gとする解析資料あり。単体ART純増と定義分離して保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- Zボーナス: 純増約246枚。
- デフォルメカバトル: 約78枚。
- ART「マジンガーラッシュ」: 1セット最低30G以上。ART開始時「マジンガーチャージ」で初期ゲーム数を決定し、継続率は最大80%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 自力CZ「デバイスチャンス」: 10Gまたは20G、ART期待度約20%。
- ART「マジンガーラッシュ」: 純増約1.6枚/G、1セット30G以上、継続率方式+ゲーム数/セット数上乗せ。
- 通常天井: ボーナス&ART間999G消化でART確定。最大32Gの前兆を経て告知される解析あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_RESET_NUMERIC_DATA_AVAILABLE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時はボーナス&ART間999G天井のゲーム数をRESET。
- 内部状態を再抽選。
- 設定変更時の高確移行率は設定1〜3が33.2%、設定4〜6が50.0%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 設定変更しない据え置き時は、純電源OFF→ON時の直接比較資料と整合する形で天井ゲーム数・内部状態をCARRYOVER扱い。
- ARTストック等の特殊状態を跨いだ据え置き契約は公開資料から直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE; ANALYSIS_DERIVED_CONSISTENT_FOR_HOLDOVER

### powerCycleBehavior
- 電源OFF→ONのみ: 天井ゲーム数CARRYOVER。
- 内部状態CARRYOVER。
- 液晶ステージ、ARTストック等その他の特殊状態の見た目/契約は `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電断: CARRYOVER。
- 天井はボーナスまたはART当選でリセットされるボーナス&ART間999G管理。

### ceilingAfterReset
- 設定変更後も通常天井は999G+前兆。設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一専用ゲーム数モード、設定変更時専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機で公開確認できたリセット数値は内部状態の高確移行率であり、独立した朝一モードとしては扱わない。

### stateAfterReset
- 設定変更時は内部状態を再抽選。
- 高確移行率: 設定1〜3=33.2%、設定4〜6=50.0%。
- 電源OFF→ONのみ: 内部状態CARRYOVER。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時は高確スタート抽選があり、設定1〜3で33.2%、設定4〜6で50.0%。朝一客の初動に影響する公開数値として保持。
- 設定変更専用短縮天井、朝一ART直撃保証等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 前日ボーナス&ART間999G天井進捗と内部状態は設定変更で消失するため、宵越し天井狙い・前日高確状態の持越しには不利。
- その他の設定変更専用主要ペナルティ: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 高確挙動は設定変更推測材料になり得るが、設定1〜3でも33.2%、設定4〜6でも50.0%抽選のため確定判別ではない。
- 本機固有の確定的ガックン、初期出目、ランプ、液晶ステージによる設定変更/据え置き判別は、表記揺れ・朝一・リセット・設定変更・ガックン等で再探索後 `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
| 設定 | 設定変更時の高確移行率 |
|---:|---:|
| 1 | 33.2% |
| 2 | 33.2% |
| 3 | 33.2% |
| 4 | 50.0% |
| 5 | 50.0% |
| 6 | 50.0% |

## dataQualityNotes
- performance coreはちょんぼりすた、すろぱちくえすと、Pachinavi、CrankySevenの複数解析を照合。CrankySevenの設定2機械割のみ96.6%表記で他3系統の99.6%と大きく異なるため、99.6%をcanonicalとしCONFLICTに保持。
- releaseDateは機種個別の複数資料が2017-02-20で一致する一方、K-Navi月間カレンダーだけ2017-02-06欄に掲載。地域先行/カレンダー整理差の可能性を断定せずCONFLICT保持。
- resetBehaviorはちょんぼりすたの設定変更/電源OFF-ON直接比較表を主根拠とし、CrankySevenの設定変更時天井RESETを照合。

## conflicts
- `CONFLICT_RELEASE_DATE_2017_02_20_VS_2017_02_06_KNAVI_OR_REGIONAL_EARLY`。
  - 2017-02-20: ちょんぼりすた / すろぱちくえすと / CrankySeven / Pachinavi。
  - 2017-02-06: K-Navi 2017年2月導入カレンダー。
- `CONFLICT_PAYOUT_RATE_SETTING2_99_6_VS_96_6_CRANKYSEVEN`。
  - 99.6%: ちょんぼりすた / すろぱちくえすと / Pachinavi。
  - 96.6%: CrankySeven。周辺設定値は一致し、単独転記誤りの可能性が高いが消去せず保持。

## missingFields
- power-cycle LCD stage / special ART-stock display behavior: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change specific deterministic gakkun/initial-reel/lamp detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- setting-change fixed shortened ceiling: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の通常時全状態移行・全小役別抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/newgin-slot/30654/
- ANALYSIS / すろぱちくえすと: https://www.slopachi-quest.com/article/mazingerz-majin/
- ANALYSIS / すろぱちくえすと 打ち方: https://www.slopachi-quest.com/article/mazingerz-majin-reel/
- ANALYSIS_DB / CrankySeven: https://crankyseven.com/mazingerz-pc.htm
- RETROSPECTIVE_ANALYSIS / Pachinavi: https://pachinavi.net/machines/mazinger-z/
- ANALYSIS_CALENDAR / K-Navi 2017年2月導入カレンダー: https://p-kn.com/calendar/201702/

## retrievalHistory
- identity/release: `パチスロマジンガーZ 新たな魔神の力 / マジンガーZ 新たな魔人の力 / EXCITE / ニューギン / 6S1014 / 2017年2月6日 / 2017年2月20日 / 導入日`。
- performance: `機械割 / ボーナス / ART初当たり / 50枚 / コイン持ち / 純増 / Zボーナス / デフォルメカバトル`。
- reset QA: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 内部状態 / 高確 / ガックン / 変更判別`。
