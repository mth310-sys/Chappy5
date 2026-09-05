# パチスロ 天 天和通りの快男児

machineName: パチスロ 天 天和通りの快男児
manufacturer: 藤商事
releaseDate: 2012-06-04
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviはホール導入開始2012-06-04。HAZUSEは導入開始日2012-06-03。P-WORLDは2012年05月表記。日付定義/登録差をCONFLICTとして保持し、本DBの時系列キーはK-Naviの明示的ホール導入開始日2012-06-04を採用。
generation: 5号機
systemType: A+ART / 周期CZ / セットストック+ゲーム数上乗せART
formalModelName: テンXSFB
approvalNumber: 1S1158
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_PARTIAL_RESET_DATA

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97% |
| 2 | 99% |
| 3 | 101% |
| 4 | 105% |
| 5 | 109% |
| 6 | 113% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLDとHAZUSEで一致。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 | ART初当り | ボーナス+ART合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/445.8 | 1/682.7 | 1/269.7 | 1/577.0 | 1/183.8 |
| 2 | 1/445.8 | 1/642.5 | 1/263.2 | 1/529.7 | 1/175.8 |
| 3 | 1/414.8 | 1/642.5 | 1/252.1 | 1/555.6 | 1/173.4 |
| 4 | 1/414.8 | 1/595.8 | 1/244.5 | 1/449.8 | 1/158.4 |
| 5 | 1/404.5 | 1/595.8 | 1/240.9 | 1/492.6 | 1/161.8 |
| 6 | 1/404.5 | 1/528.5 | 1/229.1 | 1/360.3 | 1/140.1 |

reliability: ANALYSIS_HIGH_CROSSCHECKED_FOR_BONUS_SERIES; ANALYSIS_HIGH_FOR_ART_SERIES
notes: BIG/REG/ボーナス合算はP-WORLD・K-Navi・HAZUSEで一致。ART初当りとボーナス+ART合算はP-WORLD/K-Navi系列で確認。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「50枚」「1000円」「ベース」「コイン持ち」と機種名/型式名/藤商事を組み替え、P-WORLD、K-Navi、HAZUSE、パチマガスロマガ、必勝本、旧DB/回顧系まで再探索したが、比較可能な直接数値を確定できず。小役確率から逆算しない。

## netIncrease

value: ART「東西戦決勝」約+1.5枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、K-Navi、HAZUSE、必勝本で整合。

## basicPayout

- BIG: 約204枚（297/298枚超払い出しで終了表記あり）。
- REG: 約30枚。
- ART「東西戦決勝」: 1セット50G+α、約+1.5枚/G、セットストック+ゲーム数上乗せ。
- 周期CZ「龍玉チャンス」: 龍玉5個で突入、通常時最大320G周期。成功時はART、飛龍地斬ならART5〜10セット。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時にはART期待度に関わる内部モード/高確状態が存在。
- 通常時は最大320G周期でCZ「龍玉チャンス」へ突入する公開仕様。
- ART非当選のボーナス後はCZ「闘牌チャンス」へ移行。
- 通常天井: ボーナス間1200G消化でART突入。
- ART「東西戦決勝」: 1セット50G+α、約+1.5枚/G。
- 通常時の全モード移行率、CZ/ART内部抽選、上乗せ全振り分けは完全再現用途のため対象外。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。K-Naviおよびパチマガスロマガに本機専用「設定変更後の挙動」「朝イチ・設定変更」項目が存在することは確認したが、公開検索本文から具体挙動を安全に回収できなかった。別機種の藤商事仕様や一般的5号機挙動は流用しない。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のボーナス間1200G天井、最大320G周期CZカウンタ、内部モード/状態の保持条件を本機固有の直接資料で確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井ゲーム数、周期CZカウンタ、内部状態、液晶表示の保持/初期化を直接確認できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時にボーナス間1200G天井および最大320G周期カウンタがCLEAR/RETAINのどちらかを確定する本文を回収できず。
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常天井1200Gは複数資料で確認したが、設定変更専用の短縮天井/変更数値は確定できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時に内部モードが存在することは確認したが、設定変更時の再抽選/引継ぎおよび振り分け率は確定できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。高確/前兆示唆状態の存在は確認したが、設定変更直後の内部状態再抽選/引継ぎは確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時だけの天井短縮、朝一CZ/ART、専用高確率等の比較可能な公開恩恵を確定できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。前日天井/周期進捗消失など、変更固有の不利を直接確認できず。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶ステージ、龍玉表示等を用いた本機固有の設定変更/据え置き判別条件を確定できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時モード振り分け、朝一当選率、短縮天井等の公開数値を確定できず。
numericResetData: normalCeiling=1200G_bonus_to_bonus; periodicCZ=max320G; resetSpecificNumbers=UNVERIFIED

notes:
- 「パチスロ天 / 天 天和通りの快男児 / テンXSFB / 藤商事」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1200G / 龍玉 / 320G / モード / 高確 / ガックン / 50枚 / 1000円 / ベース / コイン持ち」を組み替えて再探索。
- P-WORLD、K-Navi、HAZUSE、パチマガスロマガ、必勝本、業界/回顧資料系を横断。
- K-Navi/パチマガスロマガに専用朝一・設定変更ページの存在は確認できるが、検索取得可能本文で具体契約を回収できないため、存在だけを根拠に仕様を推定しない。

resetQaReliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING_AND_CORE__UNVERIFIED_AFTER_RESEARCH_FOR_RESET_CONTRACT

## conflicts

- releaseDate: K-Navi=2012-06-04ホール導入開始、HAZUSE=2012-06-03導入開始、P-WORLD=2012年05月。平均化せず全表記を保持。
- BIG終了条件はK-Navi「298枚を超える払い出し」、P-WORLD「297枚を超える払い出し」と表記差があるが、実獲得約204枚は一致。払い出し条件表記差として保持。

## missingFields

- baseGamesPer50 direct published value
- exact settingChangeBehavior
- exact carryOverBehavior
- exact powerCycleBehavior
- setting-change handling of 1200G ceiling counter and 320G periodic-CZ counter
- reset-specific mode/state distribution
- definitive resetDetection / gakkun behavior
- public reset-specific morning numeric values

## sources

取得日: 2026-09-05

1. K-Navi「パチスロ天 天和通りの快男児」 https://p-kn.com/slot/1642/
   - 2012-06-04ホール導入、ボーナス合算、ボーナス+ART合算、ART50G・約+1.5枚/G、本機専用「設定変更後の挙動」項目の存在。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
2. P-WORLD「天 天和通りの快男児」 https://www.p-world.co.jp/machine/database/6732
   - 設定別BIG/REG/合算/ART初当り/ボーナス+ART合算、機械割、BIG約204枚、REG約30枚、ART50G+α・約+1.5枚/G、ボーナス間1200G天井、最大320G周期CZ、型式/検定番号。
   - reliability: OLD_DATABASE / ANALYSIS_HIGH
3. HAZUSE DATA「天 天和通りの快男児」 https://hazuse.com/machine/pachislot/1S1158/
   - 導入開始日2012-06-03、型式テンXSFB、検定番号1S1158、設定別BIG/REG/合成/PAY OUT、ART/CZ概要。
   - reliability: OLD_DATABASE / ANALYSIS_HIGH
4. パチマガスロマガ「パチスロ天～天和通りの快男児～」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/12/fuji_slot_12.php
   - スペック/解析/ART/攻略メニュー、本機専用「朝イチ・設定変更」項目の存在。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
5. パチ&スロ必勝本「ART概要 [パチスロ天～天和通りの快男児～]」 https://p.hisshobon.jp/machine/2026/1/34720
   - ART1セット50G、約+1.5枚/G、龍玉5個・最大320G周期CZ、内部モード存在、本機専用「天井&設定変更」項目の存在。
   - reliability: ANALYSIS_HIGH

## searchCoverage

- manufacturer/official-industry: 藤商事系機種ページ/業界タイアップ資料を確認。
- period-analysis: K-Navi、パチマガスロマガ、必勝本。
- old-database: P-WORLD、HAZUSE。
- reset-specific: 設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/龍玉/モード/高確/ガックンを複数組合せで再探索。
- missing-field policy: 直接本文を取得できなかったreset項目と50枚ベースは推定せずUNVERIFIED_AFTER_RESEARCH。
