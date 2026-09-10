# No.1254 パチスロ蒼天の拳 朋友

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ蒼天の拳 朋友
- manufacturer: サミー
- releaseDateCanonical: 2019-01-07
- generation: 6号機
- systemType: ボーナス連チャン / バトルボーナス主体
- formalModelNameCanonical: `UNVERIFIED_AFTER_RESEARCH`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## releaseDateEvidence
- ちょんぼりすた、K-Naviで2019-01-07導入が一致。
- Amusement Japanは2018-11-28の内覧会記事で2019年1月上旬導入予定と報道。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED + INDUSTRY`。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.7% |
| 3 | 100.1% |
| 4 | 103.5% |
| 5 | 106.8% |
| 6 | 110.1% |

### initialHitBySetting
| 設定 | 死合の刻 | 天授の儀 | 合成 | ボーナス合算※引戻し込 |
|---:|---:|---:|---:|---:|
| 1 | 1/340.2 | 1/15184.8 | 1/333.6 | 1/213.1 |
| 2 | 1/330.6 | 1/14545.2 | 1/324.1 | 1/207.5 |
| 3 | 1/320.6 | 1/14396.6 | 1/314.4 | 1/201.5 |
| 4 | 1/297.6 | 1/13330.0 | 1/292.0 | 1/187.8 |
| 5 | 1/283.8 | 1/12737.3 | 1/278.4 | 1/180.2 |
| 6 | 1/269.9 | 1/12000.6 | 1/264.9 | 1/172.1 |

### baseGamesPer50
- 約32.9G/50枚。

### netIncrease / basicPayout
- バトルボーナス純増: 約6枚/G。
- バトルボーナス平均獲得: 約120枚。
- バトルボーナス継続期待度: 約66〜89%。
- 天授の儀突入時期待枚数: 約1250枚（引き戻し込み）。

### ceiling
- ボーナス終了後1200G到達で大当たり高確率状態へ移行。
- 以降、死合の刻当選率約1/50、天授の儀約1/12800。
- 天井は有利区間とは別管理。
- ペナルティ状態へ入ると天井ゲーム数がリセットされる機種固有注意あり。

## modeSpecificMinimumData
- 死合の刻: バトルボーナス高確率状態。
- バトルボーナス: 平均約120枚、純増約6枚/G、継続期待度66〜89%。
- 敗北後は伝承試練へ移行し、引き戻し期待度約50%。
- 天授の儀は上位系で、引き戻し期待度約70%、期待枚数約1250枚。
- 七星システムはサブ液晶G数200Gで発動確定。

## resetBehavior
### settingChangeBehavior
- **設定変更時でも1200G天井は引き継ぐ**とする本機固有解析を確認。
- 内部状態、液晶ステージ、七星カウンターG数の詳細は当時解析で調査中が残り、追加探索でも高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: 天井引継ぎ=`ANALYSIS_HIGH_MACHINE_SPECIFIC`; その他=`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き独立条件の全内部契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電源OFF→ONと同義扱いしない。

### powerCycleBehavior
- 電源OFF→ON時も1200G天井は引き継ぐとする本機固有解析を確認。
- 内部状態、液晶ステージ、七星カウンターG数は当時資料で調査中。
- confidence: 天井引継ぎ=`ANALYSIS_HIGH_MACHINE_SPECIFIC`; その他=`UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- settingChange: `CARRY_OVER`（1200G天井進捗）。
- pure power cycle: `CARRY_OVER`（1200G天井進捗）。
- carryOver distinct condition: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- ペナルティ発生時は天井進捗RESETという別契機を保持。

### ceilingAfterReset
- 設定変更による短縮天井は確認されず、**1200G天井を引き継ぐ**。
- `NO_RESET_SHORTENING_CONFIRMED; CEILING_CARRY_OVER`。

### modeAfterReset
- 設定変更時の内部モード再抽選/引継ぎを機種固有資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時/電源OFF→ON時とも当時解析で内部状態は調査中。追加探索後も `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機には有利区間が存在し、有利区間ランプはクレジット右下「-」。
- 1200G天井は有利区間とは別管理。
- 設定変更時/純電断時の有利区間そのものの引継ぎ契約は今回高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 設定変更後も前日天井進捗を引き継ぐため、条件次第で宵越し天井狙いが成立し得る。
- 設定変更専用の天井短縮や朝一優遇数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただしペナルティ成立で天井ゲーム数がリセットされるため、朝一の宵越し狙いでは前任者/ホール側操作の影響を受ける可能性がある。

### resetDetection
- 設定変更でも天井を引き継ぐため、天井進捗だけでは変更判別不能。
- 本機固有のガックン率、初期出目、ランプ単独による設定変更確定条件は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- normalCeiling: `1200G`（到達後 死合の刻約1/50 / 天授の儀約1/12800）
- settingChangeCeiling: `CARRY_OVER`
- powerCycleCeiling: `CARRY_OVER`
- resetShortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- sevenStarsSystemActivationCeiling: `200G on sub-display counter`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## conflictsAndQualityNotes
- 1gekiの2019-04-04更新ページでは設定変更/電源OFF→ONの天井G数を「調査中」とした旧表が残る一方、ちょんぼりすたの後発整理では双方とも天井引継ぎと明記。後発の機種固有解析を天井契約へ採用し、旧表は更新時点差として記録する。
- 有利区間と1200G天井は別管理であり、天井到達を有利区間1500G上限と混同しない。
- 実機完全再現用の内部抽選詳細は収集対象外。

## missingFields
- 正式型式名/検定番号の高信頼固定。
- 据え置きを純電断と分離した内部状態契約。
- 設定変更/純電断時の内部状態・液晶ステージ・七星カウンターG数契約。
- 設定変更/純電断時の有利区間そのものの直接契約。
- ガックン率/確定条件。

## sources
取得日: 2026-09-11

1. ちょんぼりすた — https://chonborista.com/slot/sammy-slot/69735/ — 導入日、設定別初当たり/出玉率、32.9G/50枚、純増6枚/G、平均120枚、1200G天井、有利区間、朝一設定変更/電源OFF→ONとも天井引継ぎ — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
2. 1geki 天井/設定変更 — https://1geki.jp/slot/s_souten3/3/ — 1200G天井、七星200G、設定変更/電源OFF→ONの当時調査中項目 — reliability: `MAJOR_ANALYSIS_HIGH`
3. K-Navi — https://p-kn.com/slot/3147/ — 2019-01-07、Sammy、AT分類、主要ボーナス合算 — reliability: `MACHINE_DATABASE_HIGH`
4. Amusement Japan — https://www.amusement-japan.co.jp/article/detail/10000917/ — 2018-11-28内覧会、サミー6号機第二弾、純増約6.0枚/G、平均約120枚、継続期待度66〜89%、2019年1月上旬導入予定 — reliability: `INDUSTRY`
