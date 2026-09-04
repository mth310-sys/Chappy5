# パチスロ銀河鉄道999

machineName: パチスロ銀河鉄道999
manufacturer: 山佐
releaseDate: 2012-03-12
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviは2012-03-12ホール導入開始。山佐公式は2012年3月稼働。2012-02-07付グリーンべるとは「3月下旬納品開始予定」と記録しており、K-Naviのホール導入日との間に日付差があるためCONFLICT_OR_SCHEDULE_DIFFERENCEとして保持する。
generation: 5号機
systemType: A+ART / ボーナス+ART / 天井あり
formalModelName: パチスロギンガテツドウ999S
approvalNumber: 1S1242
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.9% |
| 3 | 100.9% |
| 4 | 104.1% |
| 5 | 108.9% |
| 6 | 115.2% |

reliability: INDUSTRY_DATABASE_HIGH
notes: P-WORLD設定別表。

## initialHitBySetting

| 設定 | BIG合算 | CHALLENGE BONUS | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/394.8 | 1/606.8 | 1/239.1 | 1/368.6 | 1/145.0 |
| 2 | 1/390.1 | 1/585.1 | 1/234.0 | 1/299.2 | 1/131.3 |
| 3 | 1/385.5 | 1/564.9 | 1/229.1 | 1/328.0 | 1/134.9 |
| 4 | 1/381.0 | 1/537.1 | 1/222.9 | 1/261.7 | 1/120.3 |
| 5 | 1/376.6 | 1/520.1 | 1/218.4 | 1/287.7 | 1/124.1 |
| 6 | 1/372.3 | 1/492.7 | 1/212.0 | 1/230.7 | 1/110.5 |

reliability: INDUSTRY_DATABASE_HIGH
notes: P-WORLD設定別直接表。

## baseGamesPer50

valueBySetting: 35.00 / 35.04 / 35.09 / 35.14 / 35.20 / 35.28 G
sourceDefinition: パチマガスロマガ「1000円あたりのゲーム数」。通常20円・50枚貸し相当の比較値として保存し、定義を明記する。
reliability: ANALYSIS_HIGH

## netIncrease

- ART「ギャラクシーモード」: 約+1.5枚/G
- ART「ギャラクシーエクスプレス」: 約+1.5枚/G

reliability: HIGH
notes: 山佐公式、P-WORLD、K-Navi、パチマガスロマガで構造を照合。K-Navi/P-WORLDは純増約1.5枚/Gを明記。

## basicPayout

- PREMIUM BONUS: 約24枚
- BIG BONUS: 約203枚
- CHALLENGE BONUS: 約49枚
- ギャラクシーモード: 1セット30G、純増約+1.5枚/G
- ギャラクシーエクスプレス: 1セット30G+α、純増約+1.5枚/G

reliability: HIGH

## modeSpecificMinimumData

- 通常ゲーム999G消化で天井到達し「命の火解放モード」へ突入。ペナルティ等で天井G数を超える場合あり。
- 通常時はART抽選に影響する内部モードが存在し、P-WORLDは通常・高確率・超高確率・前兆を説明。
- 必勝本の本機解析では通常時を通常、高確A/B/Cおよび複合高確の計8状態として整理し、設定変更時にも高確移行抽選が行われると明記。
- 実機完全再現用の通常時全モード移行テーブルや上乗せ詳細は収集対象外。

reliability: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: パチ＆スロ必勝本の本機固有解析で、レア役・ボーナス成立時に加え「設定変更時」に高確移行抽選が行われることを確認。したがって設定変更が通常時内部状態へ作用すること自体はCONFIRMED。ただし設定変更時だけの具体的な高確移行率/振り分け値は今回取得本文では確定できず、推定しない。
carryOverBehavior: 据え置き時の999G天井進捗および内部モード/状態の引継ぎを明示する本機固有の直接資料は、表記・検索語・資料系統変更後もUNVERIFIED_AFTER_RESEARCH。後年実戦記事には「宵越し天井狙い」の実戦記録が存在するが、仕様表ではないため正式な引継ぎ根拠には格上げしない。
powerCycleBehavior: 単純電源OFF→ONのみの場合の999G天井カウンタ、内部状態、液晶/リール挙動はUNVERIFIED_AFTER_RESEARCH。
gameCounterReset: 設定変更時に通常ゲーム999G天井カウンタがCLEAR/RETAINのどちらかを直接示す本機固有資料はUNVERIFIED_AFTER_RESEARCH。
ceilingAfterReset: 通常天井は999G。設定変更専用の短縮天井/変更後専用G数はNONE_CONFIRMED_AFTER_RESEARCH。設定変更時の999Gカウンタ処理はUNVERIFIED_AFTER_RESEARCH。
modeAfterReset: 設定変更時に高確移行抽選が行われることはCONFIRMED_MACHINE_SPECIFIC_ANALYSIS。朝一専用モードの存在はNONE_CONFIRMED_AFTER_RESEARCH。
stateAfterReset: HIGH_STATE_LOTTERY_ON_SETTING_CHANGE_CONFIRMED; exact distribution UNVERIFIED_AFTER_RESEARCH.
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: 設定変更時に高確移行抽選がある。短縮天井、ART確定、朝一専用当選率等はNONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: 公開された設定変更専用の不利要素はNONE_CONFIRMED_AFTER_RESEARCH。天井進捗消去の有無は未確定のため不利と断定しない。
resetDetection: ガックン、初期出目、液晶ステージ等による設定変更/据え置き判別はUNVERIFIED_AFTER_RESEARCH。
publicMorningNumbers: 通常天井=999G。設定変更時の高確移行抽選あり。設定変更専用の具体的高確移行率・朝一特定G以内当選率はUNVERIFIED_AFTER_RESEARCH。
numericResetData: normalCeilingGames=999; settingChangeHighStateLottery=CONFIRMED; settingChangeHighStateRate=UNVERIFIED_AFTER_RESEARCH; settingChangeCeilingCounter=UNVERIFIED_AFTER_RESEARCH; shortenedCeilingAfterReset=NONE_CONFIRMED

notes:
- 「パチスロ銀河鉄道999 / 銀河鉄道999 / パチスロギンガテツドウ999S / 山佐 / 1S1242」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 999G / 天井 / 高確 / モード / ガックン」を組み替えて再探索した。
- 必勝本の本機固有「通常時のモード」解析に設定変更時の高確移行抽選が明記されているため、その存在のみ採用。通常時全モード移行率はミッション範囲外なので収集しない。
- 据え置き/電断/ガックン/天井カウンタCLEAR-RETAINは仕様の直接根拠を確定できず、一般的5号機挙動や実戦ブログから推定補完しない。

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_HIGH_STATE_LOTTERY__UNVERIFIED_FOR_COUNTER_CARRYOVER_POWER_CYCLE_AND_DETECTION

## conflicts

- releaseDate: K-Navi=2012-03-12ホール導入開始、山佐公式=2012年3月稼働、2012-02-07付グリーンべると=3月下旬納品開始予定。予定変更または日付定義差の可能性があるため平均せず双方保持。

## missingFields

- settingChangeHighState exact distribution/rate
- settingChange 999G counter CLEAR/RETAIN
- carryOverBehavior exact handling
- powerCycleBehavior
- resetDetection by gakkun/initial state

## sources

取得日: 2026-09-05

1. 山佐公式「パチスロ銀河鉄道999」 https://yamasa-next.co.jp/model_gt9/
   - 5号機、A+ART、2012年3月稼働、2種類のART構造。
   - reliability: OFFICIAL
2. K-Navi「パチスロ銀河鉄道999」 https://p-kn.com/slot/1589/
   - 2012-03-12ホール導入、ART概要。
   - reliability: ANALYSIS_HIGH
3. P-WORLD「パチスロ銀河鉄道999」 https://www.p-world.co.jp/machine/database/6637
   - 型式名、検定番号、設定別BIG/CHALLENGE/ART初当たり/合算/機械割、基本獲得枚数、ART、999G天井、内部モード。
   - reliability: INDUSTRY_DATABASE_HIGH
4. パチマガスロマガ「パチスロ銀河鉄道999」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/185/a.php
   - 1000円あたりゲーム数、基本獲得枚数、ART純増/構造。
   - reliability: ANALYSIS_HIGH
5. K-Navi「ギャラクシーエクスプレス(GE)」 https://p-kn.com/slot/1589/36483/
   - 1セット30G+α、純増約1.5枚/G。
   - reliability: ANALYSIS_HIGH
6. パチ＆スロ必勝本「通常時のモード」 https://p.hisshobon.jp/machine/1987/1/34031
   - 本機の通常時内部状態と、設定変更時に高確移行抽選が行われることを明記。
   - reliability: ANALYSIS_HIGH
7. グリーンべると「山佐、注目の『パチスロ銀河鉄道999』を発表」 https://web-greenbelt.jp/00001347/
   - 2012-02-07記事、当時「3月下旬」納品開始予定。
   - reliability: INDUSTRY
