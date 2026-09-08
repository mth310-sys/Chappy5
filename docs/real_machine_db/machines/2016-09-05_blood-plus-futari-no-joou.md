machineName: パチスロBLOOD+ 二人の女王
manufacturer: タイヨーエレック
releaseDate: 2016-09-05
recordNumber: 1005
generation: 5号機 / 5.5号機期
systemType: A+ART
formalModelName: パチスロBLOOD＋ 二人の女王／XA
certificationNumber: 6S0606
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_QA

## identity
- HAZUSEで導入開始日2016-09-05、メーカー タイヨーエレック、型式名「パチスロBLOOD＋ 二人の女王／XA」、検定番号6S0606を確認。
- 一撃でも導入予定日2016-09-05、TAIYO ELEC、A+ART機として照合。
- PiDEAの2016-06-29当時業界記事でもタイヨーエレックのパチスロ新機種として発表を確認。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.7% |
| 3 | 100.7% |
| 4 | 104.5% |
| 5 | 108.2% |
| 6 | 112.2% |
- HAZUSE、一撃、複数解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/455.1 | 1/398.0 | 1/212.3 |
| 2 | 1/448.8 | 1/382.5 | 1/206.5 |
| 3 | 1/436.9 | 1/356.1 | 1/196.2 |
| 4 | 1/420.1 | 1/315.3 | 1/180.1 |
| 5 | 1/404.5 | 1/270.9 | 1/162.2 |
| 6 | 1/381.0 | 1/231.1 | 1/143.9 |
- HAZUSE設定推測ページと一撃で同系列を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約34G/50枚。
- 当時/後年解析資料で確認。
reliability: ANALYSIS_SINGLE_SUPPORTED

## netIncrease
- ART「BLOOD CHANCE+」: 約1.5枚/G。
- 1セット50G+α。
- HAZUSE、一撃で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BLOOD BONUS / Secret Story Bonus: 204枚獲得（305枚超払い出し終了）。
- 「二人の女王モード」ボーナス: 28枚獲得（35枚超払い出し終了）。
- HAZUSEで確認。
reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- ボーナス+ART型。通常時はBLOOD EYE出現率に関わる4段階の内部状態（低確/通常/高確/超高確）と、DEAD or ALIVE当選率に関わる5段階モードA〜Eが存在。
- DEAD or ALIVE側モードはボーナスまたはART当選まで転落せず、BLOOD EYE成立時に昇格抽選。最上位EではBLOOD EYE出現時の50%でDEAD or ALIVE当選。
- ARTは50G+α、純増約1.5枚/G。DEAD or ALIVE成功時等に50Gまたは1000GのARTが選ばれる特徴を持つ。
- 規定ゲーム数到達でARTに当選するゲーム数天井は非搭載。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED_FOR_SETTING_CHANGE_AND_POWER_CYCLE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 一撃の2016-09-14「天井/設定変更」では、設定変更時のモード・状態・液晶ステージはいずれも「現在調査中」。
- 検索語を「設定変更/リセット/朝一/据え置き/モード/状態/電源OFF ON」に分け、HAZUSE・一撃・当時解析・回顧資料を再探索したが、設定変更時の5段階DOAモード、4段階BLOOD EYE状態の再抽選/引継ぎを直接固定できる複数高信頼資料は今回確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用のゲーム数天井短縮は、通常時ゲーム数天井自体が非搭載のため **NOT_APPLICABLE**。

### carryOverBehavior
- 据え置き時にDOAモード/BLOOD EYE内部状態をどこまで保持するかの本機固有直接資料は **UNVERIFIED_AFTER_RESEARCH**。
- ゲーム数天井は非搭載のため、天井ゲーム数の宵越し比較は **NOT_APPLICABLE**。

### powerCycleBehavior
- 一撃の2016-09-14資料では、電源OFF/ON時のモード・状態・液晶ステージはいずれも「現在調査中」。
- 後続資料も再探索したが本機固有の確定契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更時挙動から推定しない。

### gameCounterReset
- 規定ゲーム数到達型の通常時天井は **NONE / NOT_APPLICABLE**。
- DOAモードはゲーム数天井ではなくBLOOD EYE契機で段階アップし、ボーナス/ARTまで転落しない別系統の進捗として管理。

### ceilingAfterReset
- 通常時の規定ゲーム数ART天井: **NONE**。
- 設定変更専用短縮天井: **NOT_APPLICABLE**。

### modeAfterReset
- DOAモードA〜Eの設定変更時再抽選/引継ぎ: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- BLOOD EYE出現率に関わる低確/通常/高確/超高確の設定変更時処理: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時処理: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の短縮天井・専用初当たり優遇・公開朝一当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- DOAモードの設定変更時契約が未確定のため、前日高モード台の朝一価値を推定しない。

### resetPenalties
- 設定変更固有の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、液晶ステージ等で設定変更を確定判別できる直接資料: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一撃当時資料でも設定変更/電断時の液晶ステージは調査中であり、推測による判別ルールを作らない。

### numericResetData
- 設定変更時モード振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時内部状態振り分け: UNVERIFIED_AFTER_RESEARCH
- リセット短縮天井G数: NOT_APPLICABLE
- 朝一専用一定G以内当選率/恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## dataQualityNotes
- 導入日・型式/検定番号・機械割・ボーナス/ART初当たり・ART純増/基本G数・ボーナス獲得枚数は複数または高信頼解析で固定。
- ベース約34G/50枚は解析資料で確認したが、今回の主要一次/業界資料では数値照合が弱いためANALYSIS_SINGLE_SUPPORTED。
- 規定G数天井非搭載はHAZUSEと一撃で一致。
- resetBehaviorは一撃の当時設定変更ページがモード/状態/液晶ステージを設定変更・電断とも調査中としており、十分再探索後も後続の直接確定資料を固定できなかったため推定せずUNVERIFIEDを残す。

## conflicts
- 今回、canonical性能コアに採用した主要系列について重大な数値競合は確認なし。

## sources
取得日: 2026-09-08

1. HAZUSE — パチスロBLOOD+ 二人の女王
   - https://hazuse.com/machine/pachislot/6S0606/
   - 導入日、メーカー、型式、検定番号、機械割、基本仕様。
   - reliability: ANALYSIS_HIGH_DB
2. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/6S0606/genre/201/
   - 機械割、ボーナス獲得枚数。
   - reliability: ANALYSIS_HIGH
3. HAZUSE — 設定推測
   - https://hazuse.com/machine/pachislot/6S0606/genre/208/
   - 設定別ボーナス合算、ART初当たり、合算。
   - reliability: ANALYSIS_HIGH
4. HAZUSE — 天井
   - https://hazuse.com/machine/pachislot/6S0606/genre/207/
   - 規定ゲーム数天井非搭載、DOAモード構造。
   - reliability: ANALYSIS_HIGH
5. HAZUSE — 初打講座 / AT・ART
   - https://hazuse.com/machine/pachislot/6S0606/genre/203/
   - https://hazuse.com/machine/pachislot/6S0606/genre/209/
   - A+ART、内部状態/モード、ART50G+α・約1.5枚/G。
   - reliability: ANALYSIS_HIGH
6. 一撃 — パチスロBLOOD+ 二人の女王
   - https://1geki.jp/slot/s_bloodplus2/
   - 導入日、機械割、ボーナス+ART合算、純増約1.5枚/G。
   - reliability: ANALYSIS_HIGH
7. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_bloodplus2/3/
   - 2016-09-14時点で規定G数天井なし、設定変更/電源OFF ONのモード・状態・液晶ステージは調査中。
   - reliability: ANALYSIS_HIGH_CONTEMPORARY
8. PiDEA — タイヨーエレック「BLOOD+」後継機を発表
   - https://www.pidea.jp/articles/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%82%A8%E3%83%AC%E3%83%83%E3%82%AF%E3%80%8CBLOOD%2B%E3%80%8D%E5%BE%8C%E7%B6%99%E6%A9%9F%E3%82%92%E7%99%BA%E8%A1%A8
   - 2016-06-29当時業界記事、タイヨーエレックの新パチスロとして発表。
   - reliability: INDUSTRY
9. 解析整理資料 — BLOOD+ 二人の女王
   - https://piro-shiki.com/blood2-kaiseki/
   - 約34G/50枚、機械割・ボーナス/ART系列の補助照合。
   - reliability: ANALYSIS_SINGLE

## missingFields
- 設定変更/据え置き/純電源OFF→ON時のDOAモードA〜E処理
- 設定変更/据え置き/純電源OFF→ON時のBLOOD EYE内部状態処理
- 本機固有の確定的な設定変更判別

## QA note
- v0.7 resetBehaviorを新規収集時に適用。
- ゲーム数天井非搭載と内部モードの「ボーナス/ARTまで転落なし」を混同せず分離。
- 当時一撃が設定変更/電断を調査中としているため、一般論からCARRYOVER/RESETを推測していない。
