# パチスロ英雄伝説 空の軌跡 THE ANIMATION

machineName: パチスロ英雄伝説 空の軌跡 THE ANIMATION
manufacturer: ニューギン
releaseDate: 2013-06-17
releaseDatePrecision: exact_day
generation: 5号機
systemType: A+ART（ボーナス+継続率/ゲーム数上乗せ型ART）
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-06-17**。K-Navi、パチビーで一致。グリーンべると当時記事の「6月16日納品開始予定」とも整合。
- manufacturer: **ニューギン**。
- 正式型式名/検定番号: 機種名・ニューギン・型式・検定番号・3S系を組み替えて再探索したが、今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.8% |
| 3 | 101.4% |
| 4 | 105.7% |
| 5 | 109.3% |
| 6 | 114.2% |

- K-Naviとpachislo-dataで全設定一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## initialHitBySetting

ART「運命の軌跡」初当たり:

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/389.1 |
| 2 | 1/378.0 |
| 3 | 1/367.9 |
| 4 | 1/348.6 |
| 5 | 1/338.4 |
| 6 | 1/264.6 |

ボーナス合算:

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/399.6 |
| 2 | 1/394.8 |
| 3 | 1/390.1 |
| 4 | 1/385.5 |
| 5 | 1/381.0 |
| 6 | 1/372.4 |

- K-Naviとpachislo-dataで一致。
- K-Navi掲載の赤7BIGは1/829.6～1/771.0、青7BIGは1/851.1～1/789.6、REGは全設定1/8192。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## baseGamesPer50

- **平均約32G/1000円（50枚）**。
- pachislo-dataの整理値を採用。別系統で同定義の設定別/平均値を今回確保できず、信頼度は単一二次資料扱い。
- confidence: ANALYSIS_SINGLE

## netIncrease

- ART「運命の軌跡」: **約1.4枚/G**。
- K-Navi、P-WORLD、パチビー、グリーンべると当時記事、pachislo-dataで一致。
- confidence: MULTI_SOURCE_INDUSTRY_HIGH

## basicPayout

- BIG: **約204枚**。
- REG: **約54枚**。
- ART「運命の軌跡」: **1セット33G+α**、継続率 **50～90%**、ゲーム数上乗せ併用。
- P-WORLD/K-Navi/グリーンべると当時記事で主要仕様一致。
- pachislo-data本文の一部に「1セット40G＋継続バトル」表記があるため、33G+αとの定義差/表記差として conflicts に保持し、当時業界記事+K-Navi+P-WORLD一致の33G+αを本線採用。

## modeSpecificMinimumData

- 通常時には高確率示唆ステージ「ヴァレリア湖畔」、前兆「追跡モード」が存在。
- 天井: **ボーナス間1400G**。
- 天井到達時、通常時/ART非継続時の継続バトル中なら **50～90%継続のARTに当選**。
- ART本前兆中・準備中・ART中・ART継続時バトル中に天井到達した場合は **ARTゲーム数50～300G上乗せ**という当時解析あり。
- ボーナス間天井のためART当選/消化では天井G数はリセットされない旨を当時Q&Aでも確認。
- 通常時の全状態移行率、ART継続率全振り分けは実機完全再現用途のため収集対象外。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_BONUS_INTERVAL_CEILING_COUNTER_RESET_CONFIRMED__CARRYOVER_POWER_CYCLE_MODE_STATE_AND_DETECTION_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 2013-06-22当時の天井解析で **設定変更時は天井までのゲーム数リセット / 宵越し不可**を明記。
- K-Navi機種ページにも本機専用「設定変更後の挙動」解析ページが存在することを確認したが、今回その本文は403で取得できず、検索インデックスから内容を補完しない。
- 設定変更時の内部高確/低確等の状態、朝一専用モード、ART継続率状態などは、表記揺れ・型式/メーカー名・設定変更/リセット/朝一を変えて再探索しても安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 「据え置き / 宵越し / 前日ゲーム数 / ボーナス間天井」を機種名・メーカー名と組み替えて再探索。
- 設定変更時に天井Gがクリアされることは確認できるが、**純据え置き時にボーナス間天井G・内部状態をどこまで保持するかの本機固有直接契約は UNVERIFIED_AFTER_RESEARCH**。
- 「宵越し不可」は設定変更時の説明として現存するため、純据え置きまで不可とは拡張解釈しない。

### powerCycleBehavior

- 「電源OFF ON / 電源入切 / 電断 / 電源オンオフ」を機種名・ニューギンと組み替えて再探索したが、**設定変更を伴わない純電源OFF→ON時**のボーナス間天井G、内部状態、液晶/リール挙動の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- generalCeiling: **BONUS_INTERVAL_1400G_CONFIRMED**。
- ART当選/消化: **DOES_NOT_RESET_BONUS_INTERVAL_CEILING_CONFIRMED**。
- settingChange: **CLEAR_CONFIRMED**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更でボーナス間1400G天井の進捗はリセット。
- **設定変更専用の短縮天井は NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常の天井恩恵（50～90%継続ART、状況により50～300G上乗せ）は設定変更専用恩恵ではないため分離。

### modeAfterReset

- 朝一専用モード、設定変更時のモード再抽選/振り分けについて本機固有の公開数値を確認できず **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時の内部高確/低確等の状態再抽選・引継ぎは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の短縮天井、朝一高確率優遇、ART確定等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更により前日のボーナス間天井進捗が消えることは、朝一天井狙い観点では不利要素。
- その他の設定変更専用ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 「ガックン / 初期出目 / 液晶 / ステージ / リール / 履歴」を機種名・ニューギンと組み替えて再探索したが、本機固有の設定変更/据え置き確定または高信頼判別契約は **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeFixedShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- settingChangeModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- settingChangeStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- deterministicMorningResetDetection: **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- normalBonusIntervalCeiling: 1400G
- settingChangeCeilingCounter: CLEAR
- resetSpecificShortenedCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- carryOverCeilingCounter: UNVERIFIED_AFTER_RESEARCH
- powerCycleOnlyCeilingCounter: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_SETTING_CHANGE_CEILING_RESET_AND_GENERAL_CEILING__UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_RESET_MODE_STATE_AND_DETECTION

## missingFields

- formalModelNameOrTestNumber: `UNVERIFIED_AFTER_RESEARCH`
- baseGamesPer50SecondaryCrosscheck: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- carryOverFullContract: `UNVERIFIED_AFTER_RESEARCH`
- purePowerCycleFullContract: `UNVERIFIED_AFTER_RESEARCH`
- deterministicResetDetection: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- ART基本1セット表記: **K-Navi / P-WORLD / グリーンべると当時記事 = 33G+α**。pachislo-dataの基本情報欄には **40G+継続バトル**表記がある。前者を本線採用し、`CONFLICT_OR_DEFINITION_DIFFERENCE_33G_PLUS_ALPHA_VS_40G_PLUS_BATTLE` として保持。

## sources

取得日: 2026-09-06

- K-Navi 機種トップ / 導入日・設定別ボーナス/ART・機械割・33G+α・純増: https://p-kn.com/slot/1867/
- K-Navi 天井情報（導線、本文は今回403）: https://p-kn.com/slot/1867/44815/
- K-Navi 設定変更後の挙動（導線、本文は今回403）: https://p-kn.com/slot/1867/45216/
- K-Navi 当時Q&A / ボーナス間天井はARTではリセットされない: https://p-kn.com/community/question/slot/1867/125909/
- P-WORLD / 基本仕様・BIG約204枚・REG約54枚・ART33G+α・純増約1.4枚/G: https://www.p-world.co.jp/machine/database/7098
- パチビー / 導入日・5号機ART・純増約1.4枚/G: https://www.pachibee.jp/movies/index/9463
- グリーンべると / 2013-05-17当時業界記事・ボーナス+ART・33G+α・純増約1.4枚/G・50～90%継続・6/16納品開始予定: https://news.p-world.co.jp/articles/5854/greenbelt
- 娯楽産業 / 2013-05-21内覧会記事: https://www.goraku-sangyo.com/ニューギン%E3%80%80パチンコ＆パチスロ同時発表/
- pachislo-data / 設定別ART・機械割・平均32G/1000円・BIG/REG獲得枚数: https://pachislo-data.com/newgin/soranokiseki
- 目指せ月収20万 / 2013-06-22当時天井解析・ボーナス間1400G・設定変更時G数リセット/宵越し不可: https://mezase20.com/blog-entry-850.html
- ALL7 2013年6月導入予定一覧 / 06-17同日群: https://www.all7.jp/plans/index/2013/06
- K-Navi 2013年6月導入カレンダー / 全国一斉導入開始日: https://p-kn.com/calendar/201306/

## researchNotes

- 最新mainのREADME、ミッションv0.7、旧集約INDEX、LATEST_HANDOFF、直前レコード「ハローサンタ アルティメットマシンガンバージョン」を再読し、742件地点から開始。
- GitHubコード検索で「英雄伝説 空の軌跡」の既存レコードがないことを確認してから追加。
- core値は当時K-Navi/P-WORLD/業界記事と後年DBを横断。設定別機械割・ART初当たりはK-Navi/pachislo-data一致。
- resetBehavior欠損は「英雄伝説 空の軌跡 / THE ANIMATION / ニューギン / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / モード / ガックン」を組み替え、K-Navi、P-WORLD、当時天井攻略、旧解析DBを横断後にUNVERIFIED判定。
- 2013-06-17同日群はK-NaviとALL7でパチスロとして **スナイパイ72 / ハローサンタ アルティメットマシンガンバージョン / パチスロ英雄伝説 空の軌跡 THE ANIMATION** の3機を確認。3機とも登録済みとなるため同日群CLOSED候補。
