# 押忍!!豪炎高校應援團

machineName: 押忍!!豪炎高校應援團
manufacturer: 山佐
releaseDate: 2012-08-06
releaseDatePrecision: exact_day
releaseDateNotes: パチビーが導入日2012-08-06と明記。山佐公式は稼働時期2012年8月、P-WORLDも導入開始2012年08月として月単位で整合。
generation: 5号機
systemType: 擬似ボーナス+ゲーム数管理型ART
modelName: ゴウエンコウコウオウエンダンZ
approvalNumber: 2S0398
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.1% |
| 3 | 100.6% |
| 4 | 104.5% |
| 5 | 108.6% |
| 6 | 114.3% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLDと複数整理資料で同系列を確認。型式名・検定番号はP-WORLD掲載値。

## initialHitBySetting

### 擬似BIG「熱血ボーナス」
| 設定 | BIG |
|---|---:|
| 1 | 1/443 |
| 2 | 1/410 |
| 3 | 1/390 |
| 4 | 1/368 |
| 5 | 1/347 |
| 6 | 1/293 |

### 擬似REG「百折不撓ボーナス」
| 設定 | REG |
|---|---:|
| 1 | 1/520 |
| 2 | 1/485 |
| 3 | 1/471 |
| 4 | 1/458 |
| 5 | 1/437 |
| 6 | 1/374 |

### 擬似ボーナス合算
| 設定 | 合算 |
|---|---:|
| 1 | 1/239 |
| 2 | 1/222 |
| 3 | 1/213 |
| 4 | 1/204 |
| 5 | 1/193 |
| 6 | 1/164 |

### メインART「團旗道」初当り
| 設定 | ART初当り |
|---|---:|
| 1 | 1/780 |
| 2 | 1/731 |
| 3 | 1/705 |
| 4 | 1/676 |
| 5 | 1/640 |
| 6 | 1/554 |

### 擬似ボーナス+ART合算
| 設定 | 合算 |
|---|---:|
| 1 | 1/182.9 |
| 2 | 1/170.5 |
| 3 | 1/164.1 |
| 4 | 1/156.8 |
| 5 | 1/148.2 |
| 6 | 1/126.6 |

reliability: ANALYSIS_HIGH_CROSSCHECKED_WITH_DEFINITION_NOTE
notes: P-WORLDが擬似BIG/REG、ART初当り、ボーナス+ARTを別系列で掲載。当時攻略資料もART初当り1/780〜1/554、ボーナス合算1/239〜1/164、ボーナス+ART1/183〜1/127で丸め差の範囲で一致。一部二次資料がボーナス+ART系列を「ART初当たり」と表記するため、定義を混ぜずP-WORLDの区分を主系列とする。

## baseGamesPer50

value: 約31G/1000円（実戦値ベース）
reliability: ANALYSIS_SINGLE_PERIOD_PRACTICAL
notes: 2012年当時の天井攻略資料が「通常時の小役確率は実戦値しか見ていないが、1000円あたり31Gくらい」と記載。解析公表値ではないため低めの信頼度で保存。2021年「豪炎高校應援團 檄」の約51G/50枚等は別機種のため流用していない。

## netIncrease

value: ART「團旗道」約+2.5枚/G
reliability: OFFICIAL_CROSSCHECKED
notes: 山佐公式、P-WORLD、当時攻略資料で一致。

## basicPayout

- 熱血ボーナス: 平均約150枚
- 百折不撓ボーナス: 平均約42枚、ART期待度約33%
- ART「團旗道」: 1セット40G+α、純増約+2.5枚/G、継続率50〜80%

reliability: OFFICIAL_CROSSCHECKED

## modeSpecificMinimumData

- 通常A: 最大1280G+前兆
- 通常B: 最大768G+前兆
- 天国: 最大128G+前兆
- 通常時最大1280G到達でART当選。
- 心メーターMAXで「荒行チャレンジ」、体メーターMAXで「精進モード」へ移行する構造。
- 完全再現用の通常時全モード移行・解除G数振分は本DB対象外。

reliability: ANALYSIS_HIGH_PERIOD

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_STRONG_RESET_CONTRACT_AND_MINOR_GAPS
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED. 設定変更で天井ゲーム数はリセット。心&体メーターは引き継ぎ。開始液晶は校内or商店街ステージをランダム選択。設定変更時はモード再抽選。
carryOverBehavior: CONFIRMED_PARTIAL. 設定変更を伴わない電源OFF→ONでは天井ゲーム数・心&体メーターを引き継ぐため、朝一の据え置き運用でこれらの進捗は保持される。その他の一時的演出/内部状態の完全契約は未確認。
powerCycleBehavior: CONFIRMED. 電源OFF→ONのみでは天井ゲーム数・心&体メーターを引き継ぎ、液晶ステージは校内or商店街からランダム選択。
gameCounterReset: CLEAR_ON_SETTING_CHANGE__RETAIN_ON_POWER_CYCLE. 設定変更で規定ゲーム数進捗をクリアし、単純電源OFF→ONでは引き継ぐ。
ceilingAfterReset: MODE_DEPENDENT_AFTER_RESET. 固定の設定変更専用短縮天井ではなく、変更後の再抽選モードにより通常A最大1280G+前兆 / 通常B最大768G+前兆 / 天国最大128G+前兆となる。
modeAfterReset: CONFIRMED_PERIOD_ANALYSIS. 設定変更時は奇数設定=通常A45% / 通常B25% / 天国30%、偶数設定=通常A25% / 通常B45% / 天国30%。同一設定打ち直しは別テーブルとされるため混同しない。
stateAfterReset: CONFIRMED_PARTIAL. 心&体メーターは設定変更でも保持。JAC成立ゲームで設定変更すると内部状態が通常時へ移行しJACを消化できないとの本機固有資料あり。一般的な高低状態等の全契約はUNVERIFIED_AFTER_RESEARCH。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: SETTING_CHANGE_HEAVEN_30_PERCENT_AND_METER_CARRYOVER. 設定変更後は全設定共通で天国30%とされ、天国なら最大128G+前兆。さらに心&体メーター蓄積は設定変更でも消えない。
resetPenalties: CEILING_PROGRESS_LOST_ON_SETTING_CHANGE. 前日からの通常A/B等の天井ゲーム数進捗は設定変更で消去される。
resetDetection: JAC_CARRYOVER_TEST_CONFIRMED__GAKKUN_UNVERIFIED_AFTER_RESEARCH. JAC成立状態のまま閉店し、翌日1G目にJAC中ベルが揃えば据え置き濃厚、揃わなければ設定変更または対策済みとする判別法が公開。本機固有のガックン判別は十分再探索後も確定できず。
publicMorningNumbers: SETTING_CHANGE_MODE_TABLE_AVAILABLE. 奇数設定 A45/B25/天国30%、偶数設定 A25/B45/天国30%。後年整理資料には設定1の朝一天国移行率28%・設定6 30%との別記述もあり、30%全設定の当時モード解析と平均せずCONFLICT_NOTEとして保持。
numericResetData:
- 設定変更時（奇数）: 通常A45% / 通常B25% / 天国30%
- 設定変更時（偶数）: 通常A25% / 通常B45% / 天国30%
- モード別最大G: 通常A1280G+前兆 / 通常B768G+前兆 / 天国128G+前兆
- 心&体メーター: 設定変更でも引継ぎ
- 電源OFF→ONのみ: 天井ゲーム数・心&体メーター引継ぎ

notes:
- パチ＆スロ必勝本の本機専用「天井&設定変更」記事で設定変更と電源OFF/ONを明確に分離して確認。
- 2012-10-09当時解析で設定変更時モード振り分けを取得。偶数は通常A/B比率が逆、天国30%は全設定共通とされる。
- 2012年当時天井資料でも設定変更=天井リセット/メーター引継ぎ/モード再セットを独立確認。
- 単純電源OFF→ONと設定変更を混同しない。
- 5号機のため有利区間は非該当。

resetQaReliability: ANALYSIS_HIGH_PERIOD_CROSSCHECKED_FOR_CORE_RESET_CONTRACT__ANALYSIS_HIGH_PERIOD_FOR_MODE_TABLE__UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH_FOR_GAKKUN

## conflicts

- reset morning heaven rate: 2012-10-09当時解析は設定変更時の天国30%を全設定共通とする。一方、後年整理の朝一記事は「設定1 28% / 設定6 30%」と記載。同一サイト内の別モード表でも30%表記があるため、定義/丸め/転記差の可能性を残し平均しない。主契約は当時詳細解析の30%を採用。
- initial-hit labeling: 一部二次資料がP-WORLDの「ボーナス+ART 1/182.9〜1/126.6」相当をART初当たりと表記するため定義競合あり。P-WORLDが別掲するメインART初当り1/780〜1/554をART初当り主系列として保持。

## missingFields

- baseGamesPer50の解析公表値: UNVERIFIED_AFTER_RESEARCH（当時実戦値約31G/1000円のみ取得）
- setting-change gakkun/reset reel behavior: UNVERIFIED_AFTER_RESEARCH
- general internal high/low state carryover outside documented meter/JAC/mode behavior: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-05

- 山佐ネクスト公式 機種情報: https://yamasa-next.co.jp/model_oed/
- P-WORLD 押忍!!豪炎高校應援團: https://www.p-world.co.jp/machine/database/6778
- パチビー 機種情報: https://www.pachibee.jp/machines/reach/212070003
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2057/1/35878
- パチ速 2012年当時解析: https://patisoku.blog14.fc2.com/blog-entry-761.html
- 天井ハイエナ生活 2012年当時資料: https://macerate.seesaa.net/article/288333617.html
- 2-9伝説 朝一の立ち回りとダブルメーター: https://2-9densetsu.com/blog-entry-1049-html/

## reliabilitySummary

- releaseDate: ANALYSIS_HIGH_EXACT_DAY_WITH_OFFICIAL_MONTH_CROSSCHECK
- manufacturer: OFFICIAL
- modelName/approvalNumber: ANALYSIS_HIGH_DATABASE
- payoutRateBySetting: ANALYSIS_HIGH_CROSSCHECKED
- initialHitBySetting: ANALYSIS_HIGH_CROSSCHECKED_WITH_DEFINITION_CONFLICT_NOTE
- baseGamesPer50: ANALYSIS_SINGLE_PERIOD_PRACTICAL
- netIncrease/basicPayout: OFFICIAL_CROSSCHECKED
- resetBehavior: ANALYSIS_HIGH_PERIOD_CROSSCHECKED; setting-change/power-cycle split explicitly confirmed; mode table period-analysis; gakkun remains UNVERIFIED
