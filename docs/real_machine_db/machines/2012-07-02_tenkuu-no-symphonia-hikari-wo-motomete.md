# 天空のシンフォニア ～光を求めて～

machineName: 天空のシンフォニア ～光を求めて～
manufacturer: コルモ
releaseDate: 2012-07-02
releaseDatePrecision: exact_day_conflict
releaseDateNotes: K-Naviの2012年7月導入カレンダーは全国一斉導入開始日として2012-07-02に掲載。一方、パチスロ解析ガイドは2012-07-23～と掲載し、2012-07-22付の当時天井攻略記事も新台として扱っているため、7/2対7/23をCONFLICTとして保持。本線時系列キーはLATEST_HANDOFF指定とK-Naviの具体日2012-07-02を採用。
generation: 5号機
systemType: ART専用系 / ゲーム数上乗せ+セットストック
modelName: テンクウノシンフォニアヒカリヲモトメテ
approvalNumber: 2S0338
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS_AND_CONFLICTS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.82% |
| 2 | 98.92% |
| 3 | 101.87% |
| 4 | 106.56% |
| 5 | 107.45% |
| 6 | 110.37% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLDとパチマガスロマガが完全一致。A-SLOTも同系列。2-9伝説の97.8/98.3/102.3/106.0/107.6/110.0%系列は設定2～5で丸めでは説明できない差があるためCONFLICTとして別保持。

## initialHitBySetting

### ART初当たり — 主系列

| 設定 | ART |
|---|---:|
| 1 | 1/164 |
| 2 | 1/150 |
| 3 | 1/159 |
| 4 | 1/141 |
| 5 | 1/151 |
| 6 | 1/131 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、パチマガスロマガ、A-SLOTが一致。

### ART初当たり — 競合系列

| 設定 | ART |
|---|---:|
| 1 | 1/178.4 |
| 2 | 1/161.5 |
| 3 | 1/172.0 |
| 4 | 1/151.3 |
| 5 | 1/162.9 |
| 6 | 1/140.3 |

reliability: CONFLICT_ANALYSIS_SINGLE_RETROSPECTIVE
notes: 2-9伝説の整理値。主系列との差が大きいため平均化しない。

### ハイパー封印モード

| 設定 | 確率 |
|---|---:|
| 1 | 1/2154.94 |
| 2 | 1/2154.94 |
| 3 | 1/2089.64 |
| 4 | 1/2089.64 |
| 5 | 1/2089.64 |
| 6 | 1/2089.64 |

reliability: ANALYSIS_HIGH
notes: P-WORLD掲載値。通常のART初当たりとは定義を分離。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「天空のシンフォニア 光を求めて / テンクウノシンフォニアヒカリヲモトメテ / コルモ」と「50枚 / 1000円 / ベース / コイン持ち / 回転数」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、旧解析、回顧資料、中古実機資料まで再探索したが、本機の比較可能な直接値を確定できず。小役確率から逆算しない。

## netIncrease

value: 約2.1枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、K-Navi、パチスロ解析ガイドで一致。

## basicPayout

- ART「封印モード」: 1セット30G+α / 純増約2.1枚/G / ゲーム数上乗せ+セットストック
- ハイパー封印モード: 約207枚（310枚超払い出し終了）。消化中は毎ゲームARTゲーム数上乗せ。
- ARTゲーム数上乗せ: 1回1～300G。セット上乗せも搭載。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART「封印モード」は1セット30G+α、約2.1枚/G。
- ART終了後901G消化でART超高確状態へ移行。
- P-WORLDは天井到達後のART初当たりが最低3セット以上確定と明記。
- ハイパー封印モードはプレミアムボーナス状の役だが、本DBでは通常ART初当たりと分離。

reliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_CORE_AND_CEILING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_CONFIRMED_CEILING_COUNTER_CLEAR_AND_GAPS
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_PARTIAL. 本機固有の天井攻略資料で設定変更時に天井までのゲーム数がリセットされることを確認。内部状態・ARTストック・超高確状態などの完全な変更契約は確定できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH. 純据え置き時にART間901Gカウンタ、内部状態、ART関連状態が保持されることを本機固有資料で直接確定できず。一般的5号機挙動から補完しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 設定変更を伴わない電源OFF→ONのみでART間カウンタや状態がどう扱われるか、本機固有の解析資料を確定できず。
gameCounterReset: CONFIRMED_CLEAR_ON_SETTING_CHANGE. 2-9伝説および2012年当時天井攻略が設定変更で天井G数リセットと明記。
ceilingAfterReset: NO_SEPARATE_SHORTENED_CEILING_CONFIRMED. 通常天井はART終了後901Gで超高確移行。設定変更でカウンタCLEARまでは確認したが、変更後専用の短縮天井・別天井G数は確認できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH. 設定変更直後専用モードやモード振り分けの公開契約を確認できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH. 通常時に内部状態移行が存在することは確認できるが、設定変更直後の状態振り分けは確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NO_PUBLIC_NUMERIC_RESET_BENEFIT_CONFIRMED. 設定変更で天井カウンタがクリアされること以外に、朝一専用の短縮・優遇率など比較可能な公開数値を確認できず。
resetPenalties: CONFIRMED. 前日のART間天井進捗は設定変更で失われる。
resetDetection: UNVERIFIED_AFTER_RESEARCH. ガックン、初期出目、液晶ステージ、朝一表示等による本機固有の設定変更/据え置き判別契約を確認できず。
publicMorningNumbers: UNVERIFIED_AFTER_RESEARCH. 設定変更時モード振り分け、特定G以内当選率、短縮天井、リセット恩恵発生率の公開数値を確認できず。
numericResetData:
- 通常天井: ART終了後901G消化でART超高確へ移行
- 天井到達後ART: 最低3セット以上（P-WORLD）
- 設定変更時天井G: CLEAR
- リセット専用天井G: UNVERIFIED_AFTER_RESEARCH
- リセット専用モード振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内当選率: UNVERIFIED_AFTER_RESEARCH

notes:
- 「天空のシンフォニア～光を求めて～ / 天空のシンフォニア 光を求めて / シンフォニア2 / テンクウノシンフォニアヒカリヲモトメテ / コルモ」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF / 電断 / 天井 / 901G / モード / 状態 / 高確 / ガックン / 50枚 / 1000円」を組み替えて再探索。
- P-WORLD、K-Navi、パチマガスロマガ、2-9伝説、2012年当時天井攻略、パチスロ解析ガイド、A-SLOT、回顧/実機資料を横断。
- 別機種の初代「天空のシンフォニア」の仕様は流用していない。

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_CEILING_CLEAR__UNVERIFIED_FOR_PURE_CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION_AND_PUBLIC_MORNING_NUMBERS

## conflicts

- releaseDate: K-Naviは全国一斉導入開始2012-07-02。一方パチスロ解析ガイドは2012-07-23～。2012-07-22付当時天井攻略も新台として扱うため、CONFLICT_2012-07-02_VS_2012-07-23として双方保持。
- payoutRateBySetting: P-WORLD/パチマガスロマガ/A-SLOT系列 97.82/98.92/101.87/106.56/107.45/110.37%。2-9伝説系列 97.8/98.3/102.3/106.0/107.6/110.0%。平均化しない。
- ART初当たり: P-WORLD/パチマガスロマガ/A-SLOT系列 1/164,1/150,1/159,1/141,1/151,1/131。2-9伝説系列 1/178.4,1/161.5,1/172.0,1/151.3,1/162.9,1/140.3。定義差または資料系列差の可能性があるため平均化しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumbers: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-05

- K-Navi 2012年7月導入カレンダー: https://p-kn.com/calendar/201207/
- K-Navi 封印モード: https://p-kn.com/slot/1656/39185/
- P-WORLD: https://www.p-world.co.jp/machine/database/6745
- パチマガスロマガ 基本ページ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/09/colmo_slot_09.php
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/09/h.php
- 2-9伝説: https://29den.com/tenkuunosinfonia/
- 当時天井攻略: https://mezase20.com/blog-entry-590.html
- パチスロ解析ガイド: https://pachislot-guide.net/2012/sinfonia2/
- A-SLOT: https://www.a-slot.com/SHOP/colmo3.html

## reliabilitySummary

- 識別/型式/検定: ANALYSIS_HIGH (P-WORLD)
- 性能コア: ANALYSIS_HIGH_CROSSCHECKED
- releaseDate: CONFLICT
- resetBehavior: ANALYSIS_HIGH for setting-change ceiling clear; UNVERIFIED after multi-source research for remaining reset-specific contracts
