# マイジャグラーII

machineName: マイジャグラーII
manufacturer: 北電子
releaseDate: 2012-07-30
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi機種ページと2012年7月導入カレンダーがホール導入開始2012-07-30。2012-07-09のグリーンべると当時記事は7月29日より納品開始予定とする。
generation: 5号機
systemType: ノーマル / 完全告知 / ボーナス主体
modelName: マイジャグラーII K（2012年版）
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS_AND_MODEL_VARIANT_CONFLICT

## payoutRateBySetting

### メーカー発表値系列

| 設定 | 機械割 |
|---|---:|
| 1 | 95.7% |
| 2 | 97.9% |
| 3 | 99.9% |
| 4 | 102.8% |
| 5 | 105.3% |
| 6 | 109.4% |

reliability: ANALYSIS_HIGH_CROSSCHECKED_AS_MANUFACTURER_PUBLISHED_SERIES
notes: Juggler専門解析がメーカー発表値として掲載。A-SLOT、後年のマイジャグラーIII紹介時の「前作と同スペック」表でも同系列を確認。攻略打ち前提の機械割とは定義を分離する。

### 攻略時参考値

- チェリー狙い: 96.57 / 99.01 / 101.16 / 104.32 / 107.14 / 111.58%
- フル攻略: 97.30 / 99.67 / 101.82 / 104.99 / 107.65 / 112.31%

reliability: ANALYSIS_SINGLE_RETROSPECTIVE
notes: 通常公表機械割と混ぜず別系列として保持。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/287.4 | 1/431.2 | 1/172.5 |
| 2 | 1/282.5 | 1/364.1 | 1/159.1 |
| 3 | 1/273.1 | 1/341.3 | 1/151.7 |
| 4 | 1/264.3 | 1/292.6 | 1/138.9 |
| 5 | 1/252.1 | 1/277.7 | 1/132.1 |
| 6 | 1/240.9 | 1/240.9 | 1/120.5 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi、Juggler専門解析、A-SLOT等で一致。

## baseGamesPer50

| 設定 | 50枚あたりゲーム数 |
|---|---:|
| 1 | 約35.0G |
| 2 | 約35.2G |
| 3 | 約35.4G |
| 4 | 約35.6G |
| 5 | 約35.8G |
| 6 | 約36.4G |

reliability: ANALYSIS_SINGLE_RETROSPECTIVE_SERIES_TABLE
notes: SLOT HACK / ジャグラーズネット系の「マイジャグラー系」一覧が、マイジャグラーIIを対象機として明示し、チェリー狙い時50枚ベースとして掲載。マイジャグラーII単独の当時一次表は今回回収できなかったため信頼度を分離。

## netIncrease

value: NOT_APPLICABLE_NORMAL_TYPE
reliability: ANALYSIS_HIGH
notes: ART/AT非搭載のノーマルタイプ。

## basicPayout

- BIG: 約312枚（345枚超払い出しで終了）
- REG: 約104枚（105枚超払い出しで終了）

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi系、Juggler専門解析、中古実機資料で一致。

## modeSpecificMinimumData

- GOGO!ランプ点灯でボーナス確定の完全告知機。
- 告知タイミングは先告知約1/4、後告知約3/4。
- チェリー同時当選あり。中段チェリーはBIG確定とする当時業界記事あり。
- 天井機能: 非搭載。
- モード: 非搭載。中古実機資料は「モードや天井などは一切存在せず」と明記。

reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_GAPS__NO_CEILING_OR_MODE__GACKUN_CONFIRMED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: PARTIAL_CONFIRMED. 本機固有の後年解析で「設定変更後の1G目はリールがブレる」とされ、設定変更によるリール初動差は確認。天井・通常時モード自体が非搭載のため、それらのリセット恩恵は非該当。設定変更時にボーナス抽選状態やBGM条件等へ他の特殊処理があるかは今回直接確定できず。
carryOverBehavior: NO_CEILING_OR_MODE_TO_CARRY__OTHERWISE_UNVERIFIED_AFTER_RESEARCH. 天井・通常時モード非搭載のため、ゲーム数天井やモードの据え置き概念は非該当。純据え置き時の内部機器状態を一般化する直接資料は未確認。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 「マイジャグラーII/Ⅱ/2/K」「電源OFF ON/電断/朝一/据え置き」を組み替えて再探索したが、本機固有の単純電源OFF→ON契約を確定できず。
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING. 天井非搭載で、天井到達用ゲーム数カウンタなし。
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING. K-Naviが天井機能非搭載と明記。設定変更専用短縮天井も構造上非該当。
modeAfterReset: NOT_APPLICABLE_NO_NORMAL_MODE. 本機資料でモード非搭載を確認。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH. 通常時モード非搭載と、すべての内部状態が設定変更/電断で不変であることは同義ではないため推測しない。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED. 天井短縮・朝一高確・朝一CZ等は非搭載/確認なし。設定そのものが変更されること以外の朝一出玉恩恵は確認できず。
resetPenalties: NONE_CONFIRMED. 天井進捗消失等は非該当。
resetDetection: GACKUN_FIRST_GAME_AFTER_SETTING_CHANGE_CONFIRMED_BY_MACHINE_SPECIFIC_RETROSPECTIVE_ANALYSIS. 設定変更後1G目にリールがブレるためガックンチェックが可能。ただし停止位置によって判別困難な場合があるとの注意あり。店側の事前1G消化等による対策可能性は一般論としてあり、ガックンなし=据え置き確定とは扱わない。
publicMorningNumbers: NONE_CONFIRMED. 設定変更専用の朝一当選率・モード振り分け・短縮天井等の公開数値なし。
numericResetData: NONE_CONFIRMED

notes:
- 「マイジャグラーII / マイジャグラーⅡ / マイジャグラー2 / マイジャグラーⅡK」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / ガックン / 天井 / モード / 50枚」を組み替え、北電子検定情報、K-Navi、当時業界記事、HAZUSE、ジャグラー専門解析、旧解析、中古実機資料まで横断。
- 本機はノーマル機かつ天井・通常時モード非搭載のため、ART/AT機のような天井進捗・朝一モード恩恵は持たない。
- 5号機のため有利区間は非該当。

resetQaReliability: ANALYSIS_HIGH_FOR_NO_CEILING_AND_MODE__ANALYSIS_SINGLE_RETROSPECTIVE_MACHINE_SPECIFIC_FOR_GACKUN__UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH_FOR_POWER_CYCLE_AND_STATE

## conflicts

- 型式表記に資料差あり。2012-06-18東京都公安委員会検定情報転載は「マイジャグラーII K」。Juggler専門資料も2012年=K、2013年=KKと区別する。一方HAZUSEは2012-07-30導入レコードに「マイジャグラーII KK / 検定番号3S0218」を掲載しており、2013年再認定/再検定系情報を2012導入レコードへ併記した可能性がある。本DBでは2012年本線機をKとして扱い、KKを混同しない。
- 通常機械割と攻略時機械割は定義差であり、平均化しない。

## missingFields

- approvalNumber for 2012 K: UNVERIFIED_AFTER_RESEARCH
- pure powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset beyond absence of normal mode: UNVERIFIED_AFTER_RESEARCH
- machine-specific contemporaneous baseGamesPer50 table: UNVERIFIED_AFTER_RESEARCH; retrospective series table retained

## sources

取得日: 2026-09-05

- 北電子 検定情報（現存ページはKKの地域認定情報）: https://www.kitadenshi.co.jp/slot-kentei/myjuggler2kk/
- K-Navi 機種情報: https://p-kn.com/slot/1686/
- K-Navi 2012年7月導入カレンダー: https://p-kn.com/calendar/201207/
- グリーンべると 2012-07-09発表記事: https://web-greenbelt.jp/00001556/
- P-WORLD掲載グリーンべると記事: https://news.p-world.co.jp/articles/5373/greenbelt
- Pマンズ 2012-06-18東京都公安委員会検定情報転載: https://p-mans.blogspot.com/2012/06/
- Juggler専門解析（スペック/ガックン）: https://jugjug.net/myjuggler2
- Juggler7 旧解析: https://juggler7.com/my2/index.html
- SLOT HACK コイン持ち一覧: https://slothack.net/matome/17149/
- A-SLOT 2012年K中古実機資料: https://www.a-slot.com/SHOP/kitadenshi48.html
- パチマ 中古実機資料: https://www.pachima.com/c/slot/s_13juggler/S00012
- HAZUSE: https://hazuse.com/machine/pachislot/2S0014/

## reliabilitySummary

- releaseDate: INDUSTRY_PLUS_ANALYSIS_HIGH_EXACT_DAY
- manufacturer: OFFICIAL/INDUSTRY
- modelName: INDUSTRY_FOR_2012_K_WITH_CONFLICT_NOTE_AGAINST_HAZUSE_KK
- payoutRateBySetting: ANALYSIS_HIGH_CROSSCHECKED_AS_MANUFACTURER_PUBLISHED_SERIES
- initialHitBySetting: ANALYSIS_HIGH_CROSSCHECKED
- baseGamesPer50: ANALYSIS_SINGLE_RETROSPECTIVE_SERIES_TABLE
- basicPayout: ANALYSIS_HIGH_CROSSCHECKED
- resetBehavior: NO_CEILING/MODE CONFIRMED; GACKUN machine-specific retrospective; power cycle/state remain UNVERIFIED_AFTER_RESEARCH
