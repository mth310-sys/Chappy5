# ドンちゃん祭

machineName: ドンちゃん祭
manufacturer: エレコ / UNIVERSAL ENTERTAINMENT
releaseDate: 2012-08-20
releaseDatePrecision: exact_day
releaseDateNotes: ユニバーサルエンターテインメント発表で2012-08-20より全国ホール導入開始。K-Naviも同日。
generation: 5号機
systemType: ボーナス+ART / セットストック型ART
modelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.8% |
| 2 | 99.0% |
| 3 | 102.6% |
| 4 | 106.4% |
| 5 | 111.7% |
| 6 | 116.4% |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

K-Naviと後年スペックDBで同一系列を確認。

## initialHitBySetting

### BIG / REG / ボーナス合算

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/385 | 1/546 | 1/226 |
| 2 | 1/383 | 1/537 | 1/223 |
| 3 | 1/381 | 1/528 | 1/221 |
| 4 | 1/378 | 1/512 | 1/217 |
| 5 | 1/376 | 1/496 | 1/214 |
| 6 | 1/368 | 1/436 | 1/199 |

### ART初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/484.9 |
| 2 | 1/443.1 |
| 3 | 1/414.4 |
| 4 | 1/341.2 |
| 5 | 1/311.5 |
| 6 | 1/249.9 |

### ボーナス+ART合算

| 設定 | 合算 |
|---|---:|
| 1 | 1/154.1 |
| 2 | 1/148.6 |
| 3 | 1/144.3 |
| 4 | 1/132.9 |
| 5 | 1/126.9 |
| 6 | 1/111.1 |

confidence:
- BIG_REG_bonusCombined: ANALYSIS_SINGLE_RETROSPECTIVE
- ART_initial: ANALYSIS_PERIOD_SINGLE
- bonusPlusART: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約31G/50枚
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- ART「お祭りゲーム」: 1セット30G
- 純増: 約+1.5枚/G
- 継続: セットストック型
- ART内部モード: 青ドンモード / 2人ドンモード / 3兄弟モード
- confidence: INDUSTRY + ANALYSIS_HIGH

## basicPayout

- BIG: 約208枚
- REG: 約54枚
- K-Navi上の見た目払い出し条件: BIG 250枚超払い出しで終了 / REG 72枚超払い出しで終了
- confidence: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData

- CZ「超神輿蔵ステージ」: 20G固定。ART抽選の超高確率ゾーン。
- ART「お祭りゲーム」: 30G/セット、約+1.5枚/G。
- 天井: ボーナス間1280G到達で3兄弟モードのART当選確定。
- 天井到達後は次回ボーナスまで200Gごとに3兄弟モードARTをストックするとの当時解析あり。
- ARTストックが潜伏する場合があり、当時攻略資料ではART後32G程度の確認を推奨。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **CONFIRMED_PARTIAL**
- 2012年当時の天井攻略資料は「設定変更後も天井ゲーム数はリセットされない」「宵越し天井狙いOK」と明記。
- 設定変更時には内部モード移行抽選が行われるとの同資料あり。
- 朝一レア小役を引かずに「祭り会場」へ移行した場合、設定変更の可能性が高い/濃厚とする当時攻略情報あり。
- 液晶は「京の町」スタートとする当時情報あり。
- ただし設定変更時の低確/高確の具体的数値振分は今回安全に固定できずUNVERIFIED_AFTER_RESEARCH。

### carryOverBehavior

- **CONFIRMED_PARTIAL**
- ボーナス間天井は宵越し可能とする複数の2012年当時攻略記述を確認。
- 少なくとも設定変更を伴わない据え置きでは前日ボーナス間ゲーム数を利用した宵越し狙いが成立する資料系統が一致。
- ARTストック/潜伏状態、高低状態の据え置き時処理はUNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior

- **PARTIAL_INFERENCE_FROM_CARRYOVER_NOT_DIRECTLY_DOCUMENTED**
- 据え置き/宵越し可能情報から単純電源OFF→ONでボーナス間天井進捗が消える根拠は確認できない。
- ただし「電源OFF→ONのみ」を独立条件として明記した本機専用高信頼資料は今回確保できず、天井以外の状態処理はUNVERIFIED_AFTER_RESEARCH。

### gameCounterReset

- **RETAIN_ON_SETTING_CHANGE_CONFIRMED_PERIOD_ANALYSIS**
- ボーナス間1280G天井の進捗は設定変更でも引き継ぐとする2012年当時資料を採用。
- ボーナス成立で天井カウンタはリセット。

### ceilingAfterReset

- **1280G_BONUS_INTERVAL_RETAINED**
- 設定変更による短縮天井は確認できず。
- 設定変更後も前日分を含めボーナス間1280G到達を基準とする当時解析。

### modeAfterReset

- **REROLLED_CONFIRMED_NUMERIC_UNVERIFIED**
- 設定変更時に内部モード移行抽選あり。
- 具体的な低確/高確振分値はUNVERIFIED_AFTER_RESEARCH。

### stateAfterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 低確/高確の2状態が存在することはP-WORLDで確認。
- 設定変更時の高確移行可能性を示す当時攻略記述はあるが、数値と厳密な状態初期化契約を固定できず。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **PARTIAL_CONFIRMED**
- 設定変更でも天井進捗を引き継ぐため、前日ハマリが失われない。
- モード移行抽選により高確スタートの可能性あり。
- 設定変更専用の短縮天井・確定ART等は確認できず。

### resetPenalties

- **NONE_CONFIRMED_AFTER_RESEARCH**
- 少なくともボーナス間天井進捗消失という一般的な設定変更不利は、本機では当時資料上否定される。
- ARTストック/高確状態の消失可否はUNVERIFIED_AFTER_RESEARCH。

### resetDetection

- **PARTIAL_CONFIRMED_ANALYSIS_SINGLE_PERIOD**
- 朝一、レア小役なしで「祭り会場」移行なら設定変更の可能性が高い/濃厚とする当時攻略情報。
- 設定変更後は「京の町」スタートとの当時記述あり。
- リールガックン等の本機固有判別はUNVERIFIED_AFTER_RESEARCH。

### publicMorningNumbers

- 設定変更時のモード/高確移行について数値表の存在を示す攻略ページは確認したが、今回本文数値を安全に取得できずUNVERIFIED_AFTER_RESEARCH。
- 公開朝一短縮天井数値: NONE_CONFIRMED_AFTER_RESEARCH。

### numericResetData

- settingChangeCeilingCounter: RETAIN
- normalCeiling: ボーナス間1280G
- resetShortenedCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- morningHighStateRate: UNVERIFIED_AFTER_RESEARCH

### notes

- K-Naviには「設定変更後の挙動」「モード移行率(通常時・ART後、設定変更後)」という本機専用解析項目が現存するが、個別本文が現在403等で安全に回収できないため、タイトルの存在だけで具体数値を推定していない。
- 当時天井攻略資料の「設定変更後も天井ゲーム数を引き継ぐ」を主根拠とし、一般的5号機挙動からCLEARへ置換しない。

resetQaReliability: MEDIUM_HIGH_FOR_CEILING_RETENTION__PARTIAL_FOR_STATE_AND_POWER_CYCLE

## conflicts

- 現時点で主要性能コアの数値競合は確認していない。
- resetBehaviorは「宵越し可能」だけを「設定変更でも保持」と読み替えず、設定変更後の項目で明示的に天井ゲーム数非リセットと記した2012年当時資料を別途確認して採用。

## missingFields

- 型式名 / 検定番号
- 設定変更時の低確/高確・通常モード具体振分
- 電源OFF→ONのみの状態/ARTストック処理
- リールガックン等の変更判別
- BIG/REG個別確率の当時一次/高信頼資料による追加照合

## sources

取得日: 2026-09-05

1. ユニバーサルエンターテインメント発表転載 / @Press
   - https://www.atpress.ne.jp/news/29284
   - 2012-08-20より全国ホール導入開始。
   - reliability: OFFICIAL_RELEASE

2. 4Gamer / メーカー発表文転載
   - https://www.4gamer.net/games/180/G018057/20120820046/
   - 2012-08-20ホール導入開始を照合。
   - reliability: OFFICIAL_RELEASE_REPRINT

3. 娯楽産業
   - https://www.goraku-sangyo.com/%E3%80%90%E5%8B%95%E7%94%BB%E3%81%82%E3%82%8A%E3%80%91%E3%82%A8%E3%83%AC%E3%82%B3%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0/
   - 2012-06-04発表会、エレコ製、ボーナス+ART、3兄弟コンセプト。
   - reliability: INDUSTRY_PERIOD

4. K-Navi ドンちゃん祭
   - https://p-kn.com/slot/1658/
   - 導入日、機械割、ボーナス+ART合算、ART30G/約+1.5枚、天井1280G、設定変更解析項目の存在。
   - reliability: ANALYSIS_HIGH

5. P-WORLD ドンちゃん祭
   - https://www.p-world.co.jp/machine/database/6759
   - エレコ、5号機ART、BIG208枚、REG54枚、ART30G/約+1.5枚、低確/高確状態。
   - reliability: INDUSTRY

6. 天井ハイエナ生活 2012-08-25更新版
   - https://macerate.seesaa.net/article/288333617.html
   - ボーナス間1280G、3兄弟モード天井、200Gごとの追加ストック、設定変更でも天井G非リセット、内部モード移行、朝一ステージ示唆、ART初当り。
   - reliability: ANALYSIS_PERIOD_SINGLE

7. みんスロ ドンちゃん祭
   - https://minslo.com/%E3%83%89%E3%83%B3%E3%81%A1%E3%82%83%E3%82%93%E7%A5%AD/
   - BIG/REG/ボーナス合算、ART初当り、31G/50枚、機械割、獲得枚数の後年整理値。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## reliabilitySummary

- releaseDate: HIGH_OFFICIAL
- payoutRate: HIGH_MULTI_SOURCE
- initialHit_bonusPlusART: HIGH_MULTI_SOURCE
- BIG_REG_individual: MEDIUM_RETROSPECTIVE_SINGLE
- baseGamesPer50: MEDIUM_LOW_RETROSPECTIVE_SINGLE
- ART_spec: HIGH_INDUSTRY_MULTI_SOURCE
- ceiling: HIGH_ANALYSIS_PERIOD_MULTI_SOURCE
- reset_ceilingRetention: MEDIUM_HIGH_PERIOD_DIRECT
- reset_modeState: PARTIAL
- powerCycle: PARTIAL

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESET_QA_AFTER_RESEARCH
