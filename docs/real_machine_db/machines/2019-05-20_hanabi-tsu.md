# ハナビ通

recordNo: 1285
machineName: ハナビ通
manufacturer: アクロス
formalModel: ハナビ2HA / ハナビ2HH
certificationNumber: 7S1235 / 7S1198
releaseDate: 2019-05-20
generation: 5.9号機
systemType: A+RT / 技術介入 / 特殊設定Hあり

## payoutRateBySetting

| 設定 | 市場掲載機械割 | 完全攻略時 |
|---|---:|---:|
| 1 | 97.8% | 100.5% |
| 2 | 100.0% | 102.7% |
| 5 | 103.5% | 106.2% |
| 6 | 107.3% | 110.0% |
| H | 108.9% | 110.9% |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/312.1 | 1/385.5 | 1/172.5 |
| 2 | 1/303.4 | 1/364.1 | 1/165.5 |
| 5 | 1/287.4 | 1/337.8 | 1/155.3 |
| 6 | 1/268.6 | 1/312.1 | 1/144.4 |
| H | 1/1260.3 | 1/1260.3 | 1/630.2 |

※一部二次資料に設定6合算1/144.1表記あり。主要資料群は1/144.4で一致するためcanonicalは1/144.4、差異はCONFLICTとして保持。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT

## baseGamesPer50

| 設定 | 50枚あたりG数 |
|---|---:|
| 1 | 約34.2G |
| 2 | 約34.7G |
| 5 | 約35.4G |
| 6 | 約35.7G |
| H | 約7728.3G |

設定Hは極端な小役確率設計による特殊仕様で、通常設定群のベース代表値と同一集計へ混ぜない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- RT「花火チャレンジ」: 約0.3枚/G、最大20G
- RT「花火GAME」: 約0.5枚/G、20G

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: 最大311枚
- REG BONUS: 最大116枚
- BIG終了後はRT「花火チャレンジ」へ移行。JAC INリプレイ入賞で「花火GAME」へ移行。
- 花火チャレンジは最大20G、花火GAMEは20G。

信頼度: OFFICIAL_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- ノーマルA+RT。天井機能非搭載。
- 設定構成は1 / 2 / 5 / 6 / Hの5段階。
- 設定HはBIG・REGとも1/1260.3、50枚あたり約7728.3Gという非常に特殊な設計。通常設定と同じ代表レンジへ平均化しない。
- 技術介入により市場掲載機械割と完全攻略時機械割に大きな差がある。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_DIRECT_MULTI_SOURCE_CORE

- settingChangeBehavior: 設定変更時は全状態をクリアする、と当時解析複数で一致。
- carryOverBehavior: 据え置き単独を純電源OFF→ONと完全分離した追加の機種固有契約は公開資料で固定できず。ただし設定変更なしの電源OFF→ONでは全状態保持と直接記載あり。
- powerCycleBehavior: 電源OFF→ONのみでは全状態を保持。
- gameCounterReset: 通常ゲーム数天井非搭載のため天井ゲーム数のRESET/CARRY_OVERはNOT_APPLICABLE。RT等の状態は設定変更でクリア、純電断で保持という直接記載を採用。
- ceilingAfterReset: 天井非搭載。リセット時短縮天井なし / NOT_APPLICABLE。
- modeAfterReset: 朝一専用モードや設定変更専用モードは確認なし。ノーマルA+RTで通常時モード管理を物差し必須項目として固定できる公開情報なし。
- stateAfterReset: 設定変更=全状態クリア、純電源OFF→ON=全状態保持。
- advantageousSectionReset: 5.9号機A+RTのため6号機型の有利区間管理はNOT_APPLICABLE。
- resetBenefits: 朝一設定変更による専用恩恵は特になし、と解析資料で明記。
- resetPenalties: 特記すべき設定変更専用の不利要素は確認なし。RT等の前状態は設定変更でクリアされる。
- resetDetection: 本機固有のガックン発生条件・発生率・据え置き時誤作動率など、設定変更判別を確定できる公開数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。設定Hは通常遊技時の極端なコイン持ち・ボーナス確率から稼働中判別しやすいが、これは朝一設定変更判別契約とは分離する。
- numericResetData: 設定変更時専用のモード振り分け、短縮天井、朝一特定G以内当選率等はNOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND。朝一専用恩恵なし。

### resetBehavior 再探索メモ

「ハナビ通 / HANABI通 / 花火通 / ハナビ2 / ハナビ2HA / ハナビ2HH / 7S1198 / 7S1235 / アクロス / A PROJECT」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / RT / 状態 / ガックン / 変更判別 / 有利区間」を組み合わせ、ユニバーサル公式、HAZUSE、P-WORLD、当時解析、後年整理資料を横断。設定変更=全状態クリア、純電断=全状態保持、朝一恩恵なしは別系統の当時解析で一致。ガックン固有条件は十分な再探索後も直接固定できず推測補完しない。

## qualityNotes / conflicts

- 導入日はユニバーサル公式「2019年5月発売」、P-WORLD・HAZUSE・複数当時解析「2019-05-20」で整合。
- 型式名はP-WORLDで `ハナビ2HA` / `ハナビ2HH`、検定番号は `7S1235` / `7S1198` の2型式を確認。別型式を独立スペックとして分離すべき性能差は今回確認できず、同一市場機「ハナビ通」の型式併記として保持。
- 設定6ボーナス合算は主要資料1/144.4に対し、ちょんぼりすたに1/144.1表記あり。平均せず `CONFLICT_SETTING6_BONUS_COMBINED_1_144_4_VS_1_144_1_SINGLE_SOURCE`。
- 設定Hの50枚あたり約7728.3Gは通常設定群から大きく外れる意図的特殊仕様。集計時に通常Aタイプのベース中央値へ混ぜない。

## sources

取得日: 2026-09-11

1. ユニバーサルエンターテインメント公式「ハナビ通」
   - https://www.universal-777.com/product/slot/hanabi2/
   - 5号機、ボーナス+RT、アクロス、2019年5月発売、ゲーム性・技術介入概要。
   - reliability: OFFICIAL
2. ユニバーサルエンターテインメント 2019年製品一覧
   - https://www.universal-777.com/product/slot/2019/
   - ハナビ通 2019年5月発売。
   - reliability: OFFICIAL
3. P-WORLD
   - https://www.p-world.co.jp/machine/database/8924
   - 導入開始2019-05-20、型式名ハナビ2HA / ハナビ2HH、検定番号7S1235 / 7S1198、5号機RT、機械割レンジ。
   - reliability: INDUSTRY_DATABASE
4. HAZUSE 機種ページ
   - https://hazuse.com/machine/pachislot/7S1198/
   - 天井非搭載、BIG/REG/合算確率。
   - reliability: ANALYSIS_DATABASE_HIGH
5. HAZUSE 基本スペック
   - https://hazuse.com/machine/pachislot/7S1198/genre/201/
   - 市場掲載/完全攻略機械割、ボーナス払い出し条件。
   - reliability: ANALYSIS_DATABASE_HIGH
6. おスロおパチおいでやす（2019-05-23）
   - https://oslo-opachi.com/2019/05/23/hanabi2/
   - 2019-05-20導入、設定別BIG/REG/合算、ベース、機械割、BIG311枚/REG116枚、RT純増、朝一「設定変更時は全状態クリア・電源OFF→ON時は全て保持」。
   - reliability: ANALYSIS_CONTEMPORARY
7. ちょんぼりすた
   - https://chonborista.com/slot/universal-slot/81169/
   - 天井非搭載、朝一設定変更=全状態クリア、電源OFF→ON=全状態保持、朝一恩恵なし。設定6合算1/144.1表記は競合値として保持。
   - reliability: ANALYSIS_HIGH
8. K-Navi
   - https://p-kn.com/slot/3224/
   - 設定別ベース、市場掲載/完全攻略機械割、BIG最大311枚、REG最大116枚。
   - reliability: ANALYSIS_DATABASE
9. すろぱちくえすと
   - https://www.slopachi-quest.com/article/hanabi2-settei/
   - 2019-05-20導入、A+RT、設定別ベース、RT純増、BIG/REG獲得枚数。
   - reliability: ANALYSIS_SECONDARY

## missingFields

- 本機固有ガックンの発生条件・発生率・据え置き時挙動: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 据え置き単独条件を純電断と別契約として明記した資料: UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION

## conflicts

- CONFLICT_SETTING6_BONUS_COMBINED_1_144_4_VS_1_144_1_SINGLE_SOURCE
