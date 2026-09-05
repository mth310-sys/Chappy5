# 餓狼伝説☆双撃

machineName: 餓狼伝説☆双撃
manufacturer: SNKプレイモア
releaseDate: 2012-07-02
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviがホール導入開始を2012-07-02と明記。当時グリーンべるとは2012-05-23記事で7月上旬納品予定と報道しており整合。
generation: 5号機
systemType: A+ART / CZ搭載 / ゲーム数上乗せ+セットストック
modelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

### 主系列

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 99.0% |
| 3 | 100.3% |
| 4 | 106.2% |
| 5 | 110.3% |
| 6 | 115.1% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: pacnk設定判別ページ、2-9伝説、後年回顧資料で同系列を確認。

### payoutRateConflict

- 当時スペック記事およびpacnk機種トップには **96.8 / 98.7 / 99.9 / 105.8 / 109.8 / 114.6%** の別系列が存在。
- 差は単純な小数丸めではない。条件差・算出条件を確定できないため平均せずCONFLICTとして双方保持。

reliability: CONFLICT

## initialHitBySetting

### BIG

| 設定 | BIG |
|---|---:|
| 1 | 1/399.6 |
| 2 | 1/372.4 |
| 3 | 1/390.1 |
| 4 | 1/360.1 |
| 5 | 1/372.4 |
| 6 | 1/348.6 |

### REG

| 設定 | REG |
|---|---:|
| 1 | 1/728.2 |
| 2 | 1/668.7 |
| 3 | 1/682.7 |
| 4 | 1/606.8 |
| 5 | 1/606.8 |
| 6 | 1/546.1 |

### ボーナス合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/258.0 |
| 2 | 1/239.2 |
| 3 | 1/248.2 |
| 4 | 1/226.0 |
| 5 | 1/230.8 |
| 6 | 1/212.8 |

### ART初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/513.7 |
| 2 | 1/497.5 |
| 3 | 1/490.1 |
| 4 | 1/434.4 |
| 5 | 1/415.5 |
| 6 | 1/369.9 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi、当時スペック記事、pacnkで主要系列を照合。P-WORLDの現存「ボーナス詳細機械割」欄はART初当り見出しにボーナス合算値を表示する転記/ラベル異常が見られるため、ART初当り値の主根拠には使用しない。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「餓狼伝説☆双撃 / 餓狼伝説 双撃 / SNKプレイモア」に「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転」を組み替え、K-Navi、P-WORLD、パチマガスロマガ、pacnk、当時スペック記事、実機販売資料、回顧DBを横断したが、比較可能な直接数値を確定できず。小役確率から逆算しない。

## netIncrease

value: 約1.6枚/G
reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: K-Navi、P-WORLD、パチマガスロマガ、当時スペック記事で一致。

## basicPayout

- BIG: 約204枚（297枚超払い出しで終了）
- REG: 約36枚（45枚超払い出しで終了）
- ART「餓狼チャンス」: 1セット50G+α、純増約1.6枚/G

reliability: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時CZ「REAL BOUT」: 基本10G、勝利でART。
- ARTはセットストック+ゲーム数上乗せ型。
- 第1天井: **ボーナス+ART間864G**でART確定。
- 第2天井: **ボーナス間1399G**でART3セット以上確定。
- 天井値はP-WORLD、実機販売資料、当時設定変更解析、後年天井整理で照合。

reliability: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_PARTIAL_CONFIRMED_BEHAVIOR
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED_PARTIAL_ANALYSIS_SINGLE_PERIOD_SOURCE. 設定変更時はART状況クリア、天井までのゲーム数クリア、内部状態移行抽選ありとする本機専用解析を確認。内部状態の具体振り分けは今回未確認。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH. 据え置き時の864G/1399G各カウンタ、ART状況、内部状態の厳密な引継ぎ契約を本機固有の直接資料で確定できず。設定変更時クリアの反対挙動を自動推定しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 設定変更を伴わない電源OFF→ON時の天井カウンタ・内部状態・表示状態について本機固有資料を確定できず。
gameCounterReset: CONFIRMED_CLEAR_ON_SETTING_CHANGE. 設定変更で天井ゲーム数リセット。第1天井はボーナス+ART間864G、第2天井はボーナス間1399G。設定変更時リセットは当時本機専用解析と後年天井整理で照合。
ceilingAfterReset: NO_SHORTENING_CONFIRMED; NORMAL_CEILINGS_RESTART_FROM_ZERO. 設定変更時に天井G数がクリアされることは確認したが、設定変更専用の短縮天井値は再探索しても確認できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH. 朝一専用モードや設定変更専用モードの存在・振り分けを確定できず。
stateAfterReset: CONFIRMED_RELOTTERY_EXISTENCE_RATE_UNVERIFIED. 設定変更時に内部状態移行抽選あり。通常A/通常B/高確/超高確の具体的な設定変更時振り分けは未確認。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH. 設定変更専用の短縮天井・朝一ART確定等の明確な恩恵は今回確認できず。
resetPenalties: 天井進捗が設定変更でクリアされるため、前日ハマリの宵越し天井狙いには不利。その他の設定変更専用不利数値はNONE_CONFIRMED_AFTER_RESEARCH。
resetDetection: UNVERIFIED_AFTER_RESEARCH. ガックン、初期出目、ランプ、液晶背景等による本機固有の設定変更/据え置き判別契約を確定できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData:
- 設定変更時天井進捗: 0から再スタート（第1天井864G / 第2天井1399G）
- 設定変更時内部状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH

notes:
- 「餓狼伝説☆双撃 / 餓狼伝説 双撃 / SNK PLAYMORE」に「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 天井短縮 / 内部状態 / モード / ガックン / 50枚 / 1000円」を組み替えて再探索。
- メーカー/業界系、K-Navi、P-WORLD、パチマガスロマガ、pacnk、当時解析ブログ、天井回顧DB、実機販売資料を横断。
- 設定変更時のART状況クリア・天井G数クリア・内部状態移行抽選ありは本機専用当時解析で確認。天井G数リセットは別系統の後年天井整理でも一致。
- 据え置きや単純電源OFF→ONを「設定変更でないから当然保持」と推測せずUNVERIFIEDのまま保持。

resetQaReliability: ANALYSIS_SINGLE_PERIOD_FOR_SETTING_CHANGE_DETAIL__CROSSCHECKED_FOR_CEILING_RESET__UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_DETECTION

## conflicts

- payoutRateBySetting: **97.1/99.0/100.3/106.2/110.3/115.1%**系列と、**96.8/98.7/99.9/105.8/109.8/114.6%**系列が競合。平均せず両系列を保持。
- P-WORLDの現存ページは「ART初当り」欄にボーナス合算値を表示しているため、K-Navi等で照合できるART初当り1/513.7～1/369.9と分離し、P-WORLD当該ラベルを採用しない。

## missingFields

- 50枚あたりゲーム数
- 正式型式名
- 検定番号
- 据え置き時の厳密なカウンタ/状態引継ぎ
- 単純電源OFF→ON時の挙動
- 設定変更時内部状態振り分け数値
- ガックン等の設定変更判別
- 公開朝一専用当選率/恩恵率

## sources

取得日: 2026-09-05

1. K-Navi https://p-kn.com/slot/1653/
   - ホール導入開始2012-07-02、BIG/REG/ボーナス合算/ART初当り、ART純増約1.6枚/G・1セット50G。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
2. グリーンべると https://web-greenbelt.jp/00001465/
   - 2012-05-23当時業界記事。SNKプレイモアの「餓狼伝説 双撃」、7月上旬納品予定。
   - reliability: INDUSTRY
3. P-WORLD https://www.p-world.co.jp/machine/database/6742
   - 5号機A+ART、BIG約204枚/REG約36枚、ART50G+α・約1.6枚/G、864G/1399Gの2段階天井。
   - reliability: DATABASE_HIGH
4. パチマガスロマガ https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/40/a.php
   - BIG約204枚/REG約36枚、ART1セット50G・約1.6枚/G。
   - reliability: ANALYSIS_HIGH_PERIOD_SITE
5. 当時スペック記事 https://ameblo.jp/samurai777net/entry-11258058953.html
   - BIG/REG、ART初当り、96.8～114.6%機械割系列、ART基本性能。
   - reliability: PERIOD_SECONDARY
6. pacnk機種トップ https://pacnk.com/slot/2012/garousougeki/top.php
   - 96.8～114.6%系列、BIG/REG/ART初当り、通常内部状態。
   - reliability: RETROSPECTIVE_ANALYSIS
7. pacnk設定判別 https://pacnk.com/slot/tools/sh_garousougeki.html
   - 97.1～115.1%系列、ボーナス合算/ART初当り、864G/1399G天井、設定変更で天井G数リセット。
   - reliability: RETROSPECTIVE_ANALYSIS
8. 2-9伝説 https://29den.com/garoudensetsu/
   - 97.1～115.1%系列、2段階天井、設定変更で天井G数リセット。
   - reliability: RETROSPECTIVE_ANALYSIS
9. 当時設定変更解析 https://ameblo.jp/urametalkids/entry-11431845524.html
   - 設定変更時「ART状況クリア」「天井までのゲーム数クリア」「内部状態移行抽選あり」、864G/1399G天井。
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE
10. 中一商事 https://www.nakaiti.com/html/sSNK088.html
   - 864G/1399G天井、ART50G+α・約1.6枚/G。
   - reliability: RETROSPECTIVE_MACHINE_SALES
