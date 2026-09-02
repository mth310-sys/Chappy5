# パチスロ エイリアンVSプレデター

machineName: パチスロ エイリアンVSプレデター
manufacturer: 藤商事
formalModelName: エーブイピーFS2
approvalNumber: 9S0386
releaseDate: CONFLICT_DATE_DEFINITION — 2009-10-19（パチビー導入日） / 2009-10-25〜（グリーンべると当時記事の納品開始） / P-WORLD・藤商事公式は2009年10月精度
generation: 5号機
systemType: ボーナス + ART / AT・周期CZ / 2段階ボーナス間天井
coreStatus: COMPLETE_CORE_EXCEPT_BASE_WITH_RELEASE_DATE_DEFINITION_CONFLICT_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

### P-WORLD / パチビー掲載値

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 99.3% |
| 3 | 104.0% |
| 4 | 106.8% |
| 5 | 114.0% |
| 6 | 119.0% |

### パチマガスロマガ旧解析

| 設定 | PAYOUT |
|---:|---:|
| 1 | 97.0〜97.3% |
| 2 | 98.4〜99.3% |
| 3 | 102.4〜104.0% |
| 4 | 105.2〜106.8% |
| 5 | 110.0〜114.0% |
| 6 | 119.0% |

- P-WORLD/パチビーの掲載値は旧パチマガのレンジ上端と一致し、設定6は119.0%で一致。
- 後年個人回顧ページには97.92 / 99.93 / 103.45 / 105.21 / 110.01 / 110.01%という別系列があるが、設定6が当時一次寄り資料・主要DBの119%と大きく矛盾するため、物差しの主値には採用せず低信頼競合として隔離。

confidence: INDUSTRY_DATABASE + ANALYSIS_OLD_MAJOR_HIGH_ALIGNMENT

## initialHitBySetting

| 設定 | BIG | REG / BONUS GAME | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/436.9 | 1/478.4 | 1/228.4 |
| 2 | 1/436.9 | 1/471.5 | 1/226.8 |
| 3 | 1/436.9 | 1/464.8 | 1/225.2 |
| 4 | 1/436.9 | 1/458.3 | 1/223.7 |
| 5 | 1/436.9 | 1/452.0 | 1/222.2 |
| 6 | 1/436.9 | 1/445.8 | 1/220.7 |

- パチマガスロマガ旧解析の精密値とパチビー/P-WORLDの掲載値が一致。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

- `パチスロ エイリアンVSプレデター / エイリアンvsプレデター / AVP / エーブイピーFS2 / エーブイピーFS1 / 藤商事` と `50枚 / 1000円 / ベース / コイン持ち / 回転数 / 小役確率` を組み替えて再探索。
- パチマガスロマガ旧解析の小役ページにも `[1000円あたりのゲーム数] 現在調査中` と残っており、比較可能な直接値を確定できなかった。
- 小役確率から推定計算は行わない。

confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- ART「バーサスラッシュ」: 約 **+1.2枚/G**。
- 1セット **50G**。
- 当時グリーンべるとは1セット純増約60枚と説明しており、+1.2枚/G × 50Gと整合。
- 1回の抽選で1〜10セット。ART中の特定小役やボーナスでセット上乗せの機会あり。

confidence: OFFICIAL_PRODUCT + INDUSTRY_CONTEMPORARY + ANALYSIS_OLD_MAJOR

## basicPayout

- BIG: 約 **252枚**（藤商事公式は「350枚以上獲得で終了」、旧解析は351枚規定払い出し）。
- BONUS GAME / REG: 約 **56枚**（藤商事公式は「79枚以上獲得で終了」、旧解析は80枚規定払い出し）。

confidence: OFFICIAL + INDUSTRY_CONTEMPORARY + ANALYSIS_OLD_MAJOR

## modeSpecificMinimumData

- 通常時は約100G周期でCZ「エイリアンミッション」へ移行する機会があり、ミッション成功で10G固定AT「エイリアンタイム」へ。
- ART「バーサスラッシュ」は1セット50G・約+1.2枚/G。
- ボーナス間 **1200G** 到達後に成立したボーナスはART突入確定（第1天井）。
- ボーナス間 **1700G** 到達後は、第2天井としてBIGならART最低7セット、REGなら9セット以上（旧解析では9or10セット）を確認。
- 1200G/1700Gは「到達時即ボーナス/ART」ではなく、到達後の次回ボーナス成立時に恩恵を与えるボーナス間天井として扱う。

confidence: INDUSTRY_DATABASE + ANALYSIS_OLD_MAJOR_MULTISOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時にボーナス間1200G/1700G進捗、約100G周期CZ進捗、AT/ART状態・ARTセットストックをどう処理するか、本機固有の直接本文を確定できず。旧パチマガ機種INDEXには「攻め時・ヤメ時・設定変更時」専用項目の存在を確認したが、具体本文は現存検索結果から回収できなかったため一般的な5号機挙動で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス間ゲーム数、周期CZ進捗、AT/ART状態・ARTセットストックの引継ぎを直接確認できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のボーナス間ゲーム数、周期CZ、AT/ART状態、ARTストック、表示状態の保持/復帰を本機固有資料で確認できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時の第1天井1200G / 第2天井1700Gは確定しているが、設定変更時にボーナス間カウンタをリセットするか引き継ぐかは未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井・変更値は公開値を確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_PERIODIC_CZ_PROGRESS**。通常時約100G周期のエイリアンミッションは確認できるが、設定変更後の周期開始位置/再抽選や朝一専用モードを確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_AT_ART_AND_STOCK_STATE**。AT「エイリアンタイム」、ART「バーサスラッシュ」、ARTセットストックの設定変更時処理を直接確認できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の天井短縮、朝一ART/CZ優遇、当選率上昇などの公開恩恵は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`エイリアンVSプレデター / AVP / エーブイピーFS2 / 藤商事` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / 1200G / 1700G / 周期 / エイリアンミッション / ガックン / 初期出目 / 液晶 / 宵越し` を組み替え、公式、当時業界記事、P-WORLD、パチビー、旧パチマガ、検定/旧DB、回顧資料を横断したが、本機固有の変更判別要素を直接確定できず。

numericResetData:
  normalFirstCeiling: 1200G（到達後の次回ボーナスでART確定）
  normalSecondCeiling: 1700G（到達後BIGならART7セット以上、REGなら9セット以上）
  normalPeriodicCZ: 約100G周期でエイリアンミッション
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_COUNTER_PERIODIC_CZ_AT_ART_STOCK_AND_CHANGE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 表記揺れ `パチスロ エイリアンVSプレデター / エイリアンvsプレデター / AVP / エーブイピーFS2 / エーブイピーFS1` とメーカー・シリーズ名を使用。
- `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井短縮 / 1200G / 1700G / モード / 周期 / ガックン / 宵越し / ART / エイリアンタイム / バーサスラッシュ` を組み替えて探索。
- 藤商事公式、グリーンべると当時記事、P-WORLD、パチビー、パチマガスロマガ旧DB/旧解析、2009年検定情報、後年回顧まで横断後のみUNVERIFIED判定。

## conflicts

- releaseDateDefinition: パチビーは導入日 **2009-10-19**、グリーンべると2009-09-24当時記事は **2009-10-25から納品**。導入日/納品開始日の定義差またはDB日付差として平均せず両方保持。P-WORLD/藤商事公式は2009年10月精度で整合。
- payoutLowTrustRetrospective: 後年個人回顧に設定6 **110.01%** を含む別系列があるが、当時業界記事の最大119%、P-WORLD/パチビー/旧パチマガの119%と明確に競合。主値に採用しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: UNVERIFIED_AFTER_RESEARCH
- ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
- modeAfterResetForPeriodicCZ: UNVERIFIED_AFTER_RESEARCH
- stateAfterResetForATARTAndStock: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. 藤商事公式「パチスロ エイリアンVSプレデター」 — https://www.fujimarukun.co.jp/products/slo_avp/ — 公式製品、BIG350枚以上払い出し終了、BONUS GAME79枚以上払い出し終了 — reliability: OFFICIAL
2. グリーンべると「二大モンスターが『上乗せ型ART』で激突！」2009-09-24 — https://web-greenbelt.jp/00003276/ — 2009-10-25納品開始、ART50G/純増約60枚、1〜10セット、BIG約252枚、BONUS GAME約56枚、最大出玉率119% — reliability: INDUSTRY_CONTEMPORARY
3. パチビー「パチスロ エイリアンVSプレデター」 — https://www.pachibee.jp/machines/about/209090073 — 導入日2009-10-19、5号機ART、約+1.2枚/G、BIG約252枚、REG約56枚、1200G/1700G天井、設定別機械割/ボーナス確率 — reliability: INDUSTRY_DATABASE
4. P-WORLD「パチスロ エイリアンVSプレデター」 — https://www.p-world.co.jp/machine/database/5713 — 藤商事、型式エーブイピーFS2、検定番号9S0386、2009年10月、機械割97.3〜119%、ART約+1.2枚/G、天井1200/1700G — reliability: INDUSTRY_DATABASE
5. パチマガスロマガ旧解析「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/10/a.php — ART約+1.2枚/G、50G/セット、約100G周期CZ、1200/1700G天井、BIG約252枚、REG約56枚 — reliability: ANALYSIS_OLD_MAJOR
6. パチマガスロマガ旧解析「ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/10/h.php — BIG1/436.9共通、REG1/478.4〜1/445.8、合算1/228.4〜1/220.7、PAYOUTレンジ — reliability: ANALYSIS_OLD_MAJOR
7. パチマガスロマガ旧解析「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/10/c.php — 1000円あたりゲーム数は現在調査中 — reliability: ANALYSIS_OLD_MAJOR
8. Pマンズ「遊技機検定情報（2009-07-06東京都公安委員会告示）」 — https://p-mans.blogspot.com/2009/07/ — エーブイピーFS1/FS2検定情報 — reliability: INDUSTRY_ARCHIVE
9. パチスロ業界初まとめ 更新情報7 — https://slothistory.com/kousin_kako07.html — エーブイピーFS2検定通過・機種名対応 — reliability: RETROSPECTIVE_ARCHIVE
10. pachinko’s blog「藤商事『パチスロ エイリアン VS プレデター』」 — https://pachinko.hatenablog.jp/entry/2009/10/avp — 後年整理値。設定6機械割110.01%は主要資料119%と競合するため低信頼競合としてのみ保持 — reliability: RETROSPECTIVE_LOW_CONFLICT
