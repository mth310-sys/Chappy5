# パチスロ コードギアス 反逆のルルーシュ

machineName: パチスロ コードギアス 反逆のルルーシュ
manufacturer: Sammy（サミー）
releaseDate: 2012-05-07
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi当時ページおよび2012-04-26付K-Navi記事で2012-05-07ホールデビューを確認。
generation: 5号機
systemType: A+ART / ボーナス+セットストック・継続率ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_MODEL_ID_UNVERIFIED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.5% |
| 3 | 101.4% |
| 4 | 106.1% |
| 5 | 110.0% |
| 6 | 116.4% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: CrankySevenの設定別直接表を主値とし、後年回顧資料でも設定1=97.0% / 設定6=116.4%を照合。

## initialHitBySetting

### ボーナス確率

| 設定 | BIG合成 | REG合成 | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/394.1 | 1/819.2 | 1/266.4 |
| 2 | 1/390.1 | 1/789.6 | 1/261.1 |
| 3 | 1/385.5 | 1/771.0 | 1/257.0 |
| 4 | 1/370.3 | 1/697.2 | 1/241.8 |
| 5 | 1/360.1 | 1/675.6 | 1/234.9 |
| 6 | 1/344.9 | 1/655.4 | 1/226.0 |

### ART出現率（注: 純粋な初当たり確率ではない）

| 設定 | ART出現率 |
|---|---:|
| 1 | 1/126.4 |
| 2 | 1/118.7 |
| 3 | 1/109.2 |
| 4 | 1/95.5 |
| 5 | 1/90.7 |
| 6 | 1/82.4 |

reliability: ANALYSIS_HIGH
notes: CrankySeven直接表。ARTはセットストック/継続を含む「出現率」表記であり、初当たり専用値と断定しない。K-NaviのBIG系列は設定2〜6が一致し、設定1のみ1/394.8表記の丸め/集計差があるため、主系列はCrankySevenのBIG/REG/合算整合表を採用し、K-Navi差はconflictsへ保持。

## baseGamesPer50

| 設定 | 50枚あたり |
|---|---:|
| 1 | 30.6G |
| 2 | 30.6G |
| 3 | 30.6G |
| 4 | 30.5G |
| 5 | 30.5G |
| 6 | 30.5G |

reliability: ANALYSIS_HIGH
notes: CrankySeven「1000円（50枚）あたりの回転数」直接表。

## netIncrease

value: ART「BLACK REBELLION」約+1.5枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: パチマガスロマガ、P-WORLD、CrankySevenで一致。

## basicPayout

- BIG: 約214枚（287枚超払い出しで終了）
- REG: 約40枚（8G消化または8回小役入賞で終了）
- ギアスラッシュ: 約36〜40枚資料帯。パチマガスロマガは約36枚、CrankySevenは約40枚。ベル4回入賞まで継続。
- ART「BLACK REBELLION」: 基本1セット40G、約+1.5枚/G。
- 1stバトル勝利時は上乗せ特化ART「ガウェインART」または80/90%ループARTへ移行する可能性。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 第1天井: ボーナスもARTも引かず約960G（当時資料ではボーナスorART突入リプ後959G消化後の押し順ベル）でART複数ストック確定。
- 第2天井: ボーナス後1500G到達後の押し順ベルでART突入、90%ループシステム当選。
- 通常時内部状態は低確 / 通常 / 高確 / 超高確。
- BIG後は通常以上、REG後は高確以上から開始する通常時仕様を確認。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_CEILING_COUNTER_RESET_AND_STATE_RELOTTERY。設定変更時は天井到達までのゲーム数がリセットされ、内部状態振り分け抽選が行われる。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。当時天井攻略資料は設定変更時の「宵越し×」を明示するが、純粋な据え置き時に第1/第2天井カウンタ・内部状態をどう保持するかを本機固有の直接表で確定できず、一般則から補完しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ONのみの場合の第1/第2天井カウンタ・内部状態・ステージ処理を、本機固有の直接資料で確定できず。
gameCounterReset: CONFIRMED_CLEAR_ON_SETTING_CHANGE。設定変更時は天井ゲーム数がリセットされる。当時攻略資料でも宵越し天井狙い不可と明記。
ceilingAfterReset: NO_RESET_SPECIFIC_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH。設定変更で第1/第2天井カウンタはリセットされるが、設定変更専用の短縮天井値は今回確認できず。通常の第1天井約960G、第2天井ボーナス後1500Gを保持。
modeAfterReset: NO_CONVENTIONAL_GAME_COUNT_MODE_CONFIRMED。ゲーム数モードの専用再抽選は確認されず、朝一は内部状態（低確/通常/高確/超高確）の振り分け抽選として扱う。
stateAfterReset: CONFIRMED_WITH_PUBLIC_NUMBERS。設定変更時に状態再抽選。公開資料で高確スタート率は設定1=30%〜設定6=45%、超高確スタートは全設定1%を確認。設定2〜5の個別高確率は今回の再探索で確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: CONFIRMED_HIGH_OR_SUPER_HIGH_START_CHANCE。設定変更後に高確/超高確スタート抽選があり、設定1でも高確30%、設定6で45%、超高確は全設定1%。
resetPenalties: CONFIRMED_LOSS_OF_CEILING_PROGRESS_ON_SETTING_CHANGE。前日までの第1/第2天井進捗は設定変更でリセットされるため、深ハマリ台の宵越し天井狙いには不利。
resetDetection: CONFIRMED_WAREHOUSE_STAGE_CLUE_WITH_CAVEAT。朝一、レア小役を引いていないのに倉庫ステージへ移行した場合は設定変更濃厚とする当時解析あり。確定判別ではなく濃厚示唆として保持。初代固有のガックン情報は十分な直接根拠を確定できず。
publicMorningNumbers: CONFIRMED_PARTIAL_NUMERIC_RANGE。設定変更時の高確スタート率S1=30%〜S6=45%、超高確スタート率=全設定1%。S2〜S5の個別高確率はUNVERIFIED_AFTER_RESEARCH。
numericResetData: settingChangeHighStart={S1:30%,S6:45%,S2-S5:UNVERIFIED}; settingChangeSuperHighStart={S1-S6:1%}; firstCeiling=about960G_without_bonus_or_ART; secondCeiling=1500G_after_bonus; shortenedResetCeiling=NONE_CONFIRMED

notes:
- 「パチスロ コードギアス 反逆のルルーシュ / コードギアス～反逆のルルーシュ～ / Sammy / サミー / 初代コードギアス」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 959G / 960G / 1500G / 内部状態 / 高確 / 超高確 / 倉庫ステージ / ガックン」を組み替えて再探索。
- パチマガスロマガ、K-Navi、P-WORLD、CrankySeven、2012年当時の天井ハイエナ資料、サミーネットワークス当時資料を横断。
- 2016年「コードギアスR2」、2018年「R2 C.C.ver.」、2021年「コードギアス3」、2024年スマスロの設定変更情報は別機種のため流用していない。

resetQaReliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_CEILING_RESET_AND_STATE_RELOTTERY__PERIOD_SECONDARY_FOR_WAREHOUSE_DETECTION_AND_NUMERIC_RESET_RANGE__UNVERIFIED_FOR_PURE_POWER_CYCLE_AND_EXACT_CARRYOVER

## conflicts

- `BIG_SETTING1_ROUNDING_OR_SOURCE_DIFFERENCE`: CrankySevenのBIG合成設定1は1/394.1、K-Naviは1/394.8。設定2〜6は一致。平均せず双方を保持し、REG・合算との整合が取れるCrankySeven系列を主表に採用。
- `GEASS_RUSH_PAYOUT_APPROX_DIFFERENCE`: パチマガスロマガは約36枚、CrankySevenは約40枚。近似値/消化条件の定義差候補として平均しない。

## missingFields

- formalModelName / approvalNumber
- setting2〜5 exact high-state start percentages after setting change
- carryOverBehavior exact handling when truly unchanged
- powerCycleBehavior exact handling
- initial-model-specific gakkun behavior
- pure ART first-hit probability separated from repeated/stock ART occurrence

## sources

取得日: 2026-09-05

1. K-Navi「パチスロ コードギアス 反逆のルルーシュ」 https://p-kn.com/slot/1613/
   - 2012-05-07ホール導入、Sammy、BIG設定別系列、ART/天井索引。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
2. K-Navi「『パチスロ コードギアス』の注目演出を公開します!」 https://p-kn.com/community/blog/BYR3LS0G3BA3C2PPRYBH/224709/
   - 2012-04-26掲載。5月7日ホールデビューを当時記事で確認。
   - reliability: PERIOD_SOURCE
3. パチマガスロマガ「パチスロ コードギアス 反逆のルルーシュ 基本情報」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/133/a.php
   - ART1セット40G、約+1.5枚/G、BIG約214枚、REG約40枚、ギアスラッシュ約36枚。
   - reliability: ANALYSIS_HIGH
4. P-WORLD「パチスロ コードギアス 反逆のルルーシュ」 https://www.p-world.co.jp/machine/database/6680
   - Sammy、5号機ART、BIG約214枚、REG約40枚、ART40G・約+1.5枚/G、天井搭載。
   - reliability: OLD_DATABASE
5. CrankySeven「コードギアス～反逆のルルーシュ～」 https://crankyseven.com/codegeass-pc.htm
   - 設定別BIG/REG/合算/ART出現率/機械割、50枚ベース、ART性能、第1/第2天井、設定変更時天井リセット・状態抽選。
   - reliability: ANALYSIS_HIGH
6. 天井ハイエナ生活「コードギアス～反逆のルルーシュ 天井ハイエナ解析攻略」 https://macerate.seesaa.net/article/277896789.html
   - 2012年当時資料。第1/第2天井、設定変更で天井リセット、内部状態抽選、高確S1=30%〜S6=45%、超高確全設定1%、倉庫ステージによる変更推測。
   - reliability: PERIOD_SECONDARY
7. サミーネットワークス NEWS RELEASE（2012-09-03） https://www.sammy-net.jp/news/psko-dogiasu.pdf
   - 2012年発売のサミー「パチスロ コードギアス 反逆のルルーシュ」であることを当時公式系資料で確認。
   - reliability: OFFICIAL_GROUP
