# GTO ～Limit Break～

machineName: GTO ～Limit Break～
manufacturer: ビスティ
releaseDate: 2012-06-04
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi・後年整理DBはホール導入2012-06-04。グリーンべるとは2012-06-03から納品開始予定、SANKYOオンライン博物館は2012.06。定義差を保持し、本DBの時系列キーはK-Naviの明示的ホール導入開始日2012-06-04を採用。
generation: 5号機
systemType: A+ART / 自力CZ / ベルナビ回数管理ART
formalModelName: GTO～LimitBreak～R
approvalNumber: 2S0011
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_PARTIAL_RESET_DATA

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.4% |
| 3 | 100.2% |
| 4 | 104.0% |
| 5 | 107.6% |
| 6 | 112.1% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、パチナビ、当時新台資料で一致。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 | ART初当り | ボーナス+ART合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/394.8 | 1/668.7 | 1/248.2 | 1/297.6 | 1/148.0 |
| 2 | 1/387.8 | 1/655.4 | 1/243.6 | 1/279.5 | 1/142.1 |
| 3 | 1/381.0 | 1/642.5 | 1/239.2 | 1/285.2 | 1/142.2 |
| 4 | 1/368.2 | 1/618.3 | 1/230.8 | 1/246.2 | 1/129.5 |
| 5 | 1/362.1 | 1/606.8 | 1/226.8 | 1/237.5 | 1/126.0 |
| 6 | 1/356.2 | 1/455.1 | 1/199.8 | 1/197.7 | 1/107.0 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: BIG/REG/ボーナス合算・ART初当りはP-WORLDと後年整理DBで整合。当時2012-06-04新台資料でもBIG/REG/合算系列が丸め差の範囲で一致。

## baseGamesPer50

value: 約31.7G/50枚（1000円あたり約31.7G）
reliability: ANALYSIS_SINGLE_PERIOD_SOURCE
notes: パチマガスロマガの本機専用小役解析ページに直接掲載。別系統の直接ベース値は今回確定できず。

## netIncrease

value: ART「鬼塚RUSH」約+1.5枚/G
reliability: INDUSTRY_ANALYSIS_CROSSCHECKED
notes: グリーンべると、K-Navi、P-WORLD、パチマガスロマガで一致。

## basicPayout

- BIG: 約210枚（306枚超払い出しで終了）。
- REG: 約48枚（63枚超払い出しで終了）。
- ART「鬼塚RUSH」: ベルナビ回数管理型、約+1.5枚/G。
- 初当り後/ART中ボーナス後は「ターボZONE」で初期/追加ベルナビを獲得。
- 業界発表ではベルナビ50回で最低300枚獲得目安。

reliability: INDUSTRY_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- 自力CZ「GREAT CHALLENGE」: 7G継続、パチマガスロマガではトータルART期待度約33%。
- 通常時にはCZ突入期待度が異なる「通常 / 高確」の内部モードが存在。
- ART終了後は復活Challengeへ移行し、パチマガスロマガではART引き戻し率約30%。
- 通常天井: 約1200G。P-WORLD/K-Naviは本機を天井搭載機として掲載し、pacnk後年整理DBは約1200Gを明記。今回、当時の天井本文そのものは取得できなかったため天井条件の細部は完全再現しない。
- 全小役別モード移行率、全CZ抽選、全上乗せ振り分けは物差し用途外。

reliability: ANALYSIS_HIGH_FOR_SYSTEM; ANALYSIS_SINGLE_RETROSPECTIVE_FOR_1200G_EXACT_VALUE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガに本機専用「朝イチ・設定変更」項目が存在し、K-Naviにも朝一/天井導線が存在することは確認したが、取得可能本文から設定変更時の具体処理を安全に回収できず。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の約1200G天井進捗、通常/高確状態、CZ関連状態の保持契約を直接確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみの場合の天井進捗・内部モード・液晶ステージの保持/初期化を本機固有資料で確定できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時に約1200G天井カウンタがCLEAR/RETAINか、直接本文を回収できず。
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常天井約1200Gは確認したが、設定変更専用の短縮天井や変更後数値は未確認。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常/高確の内部モード存在は確認したが、設定変更時の再抽選/引継ぎ・振り分け率は未確認。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。高確状態が存在することは確認したが、設定変更直後の状態振り分け/固定状態は未確認。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時だけの短縮天井、CZ/ART確定、高確保証等の比較可能な恩恵を確定できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。前日天井進捗や高確状態の消失など、変更固有の不利を直接確認できず。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶ステージ、ゲーム数挙動等を使う本機固有の設定変更/据え置き判別条件を確定できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時モード振り分け、朝一特定G以内当選率、短縮天井等の公開数値は今回確定できず。
numericResetData: normalCeilingApprox=1200G; resetSpecificNumbers=UNVERIFIED

notes:
- 「GTO Limit Break / GTO～Limit Break～ / GTO～LimitBreak～R / ビスティ」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1200G / 高確 / モード / ガックン / 50枚 / 1000円 / ベース / コイン持ち」を組み替えて再探索。
- SANKYOオンライン博物館、FIELDS、グリーンべると、P-WORLD、K-Navi、パチマガスロマガ、後年整理DBを横断。
- 本機専用「朝イチ・設定変更」ページの存在のみから仕様を推測しない。

resetQaReliability: INDUSTRY_ANALYSIS_HIGH_FOR_CORE__UNVERIFIED_AFTER_RESEARCH_FOR_RESET_CONTRACT

## conflicts

- releaseDate: K-Navi/後年整理DB=2012-06-04ホール導入、グリーンべると=2012-06-03納品開始予定、SANKYOオンライン博物館=2012.06。導入/納品/年月という定義差を保持。
- 通常天井はP-WORLD/K-Naviで搭載自体を確認し、後年整理DBが約1200Gとする一方、当時解析本文の具体値を今回直接回収できなかったため exact 1200G を最高信頼扱いにしない。

## missingFields

- setting-change exact contract
- carry-over behavior
- power-cycle-only behavior
- direct period-source confirmation of exact ceiling condition/value
- reset-specific mode/state distribution
- definitive resetDetection / gakkun behavior
- public reset-specific morning numeric values

## sources

取得日: 2026-09-05

1. SANKYOオンライン博物館「GTO～Limit Break～」 https://www.sankyo-fever.jp/collection/876/
   - 導入年月2012.06、ブランド=ビスティ、型式GTO～Limit Break～R。
   - reliability: OFFICIAL
2. FIELDS 2012遊技機一覧 https://www.fields.biz/products/ps/machine_list2012.html
   - GTO Limit Breakを2012年ビスティ製パチスロとして確認。
   - reliability: OFFICIAL / DISTRIBUTOR
3. グリーンべると「『GTO』第2弾は上乗せRUSH型ART搭載」 https://web-greenbelt.jp/00001487/
   - 2012-05-11、6月3日納品開始予定、ART約+1.5枚/G、BIG約210枚、REG約48枚、ベルナビ50回で最低300枚。
   - reliability: INDUSTRY
4. K-Navi「GTO ～Limit Break～」 https://p-kn.com/slot/1635/
   - ホール導入開始2012-06-04、ART約+1.5枚/G、306/63枚超払い出し、本機専用天井情報導線。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
5. P-WORLD「GTO～Limit Break～」 https://www.p-world.co.jp/machine/database/6728
   - 設定別BIG/REG/合算/ART初当り/ボーナス+ART合算、機械割、BIG約210枚、REG約48枚、ART約+1.5枚/G、内部通常/高確、型式/検定番号、天井搭載。
   - reliability: OLD_DATABASE / ANALYSIS_HIGH
6. パチマガスロマガ「GTO～Limit Break～ スペック」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/21/a.php
   - ART約+1.5枚/G、CZ7G・期待度約33%、引き戻し約30%、BIG約210枚、REG約48枚。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
7. パチマガスロマガ「小役確率」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/21/c.php
   - 1000円あたり約31.7G。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
8. パチマガスロマガ 機種TOP https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/21/bisty_slot_21.php
   - 本機専用「朝イチ・設定変更」「天井・ヤメ時」項目の存在。
   - reliability: ANALYSIS_HIGH / PERIOD_SOURCE
9. パチナビ「GTO ～Limit Break～」 https://pachinavi.net/machines/gto-limit-break/
   - 導入日2012-06-04、設定別機械割/ボーナス合算/ART初当り。
   - reliability: RETROSPECTIVE_ANALYSIS
10. pacnk「GTO‐Limit Break‐ ハマリ確率計算」 https://pacnk.com/slot/tools/hamari.php?id=gtolimitbreak
   - 後年整理値として天井約1200Gを明記。
   - reliability: RETROSPECTIVE_ANALYSIS_SINGLE_FOR_CEILING_VALUE

## searchCoverage

- official: SANKYOオンライン博物館、FIELDS。
- industry-period: グリーンべると。
- period-analysis: K-Navi、パチマガスロマガ。
- old-database: P-WORLD。
- retrospective: パチナビ、pacnk。
- reset-specific: 設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/1200G/高確/モード/ガックンを複数組合せで再探索。
- missing-field policy: 専用ページの存在しか取れないreset項目は推測せずUNVERIFIED_AFTER_RESEARCH。
