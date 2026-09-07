# シーマスター ～ララ、旅立ちのプレリュード～

machineName: シーマスター ～ララ、旅立ちのプレリュード～
manufacturer: 山佐
releaseDate: 2014-12-15
releaseDatePrecision: multi_source_hall_start
generation: 5号機
systemType: AT / CZ / レア役確変 / ゲーム数天井
modelName: シーマスター2GG
inspectionNumber: 3S1138
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- HAZUSE DATA、パチビー、当時解析でホール導入開始 **2014-12-15** が一致。
- 山佐発表時の業界記事は **2014-12-14納品予定**。本DBは納品日ではなくホール導入開始日を採用する。
- 青森県公安委員会告示資料で型式名 **シーマスター2GG**、検定番号 **3S1138** を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE / INDUSTRY_PUBLIC_NOTICE_FOR_MODEL_ID

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.4% |
| 3 | 101.6% |
| 4 | 104.8% |
| 5 | 108.5% |
| 6 | 113.5% |

- 旧パチマガスロマガと当時解析で一致。
- 5号機クロニクルにも同じ機械割系列があるが、同ページは導入年・純増・ゲーム性説明に明確な別機種混入があるため、機械割の補助照合以外には採用しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「シーマスターRUSH」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/237.1 |
| 2 | 1/226.3 |
| 3 | 1/210.8 |
| 4 | 1/195.8 |
| 5 | 1/171.6 |
| 6 | 1/146.8 |

- 旧パチマガスロマガの精密値。グリーンべるとが設定1～6レンジ **1/237.1～1/146.8** を業界記事で確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G / 50枚**。
- 当時の販売・スペック資料で確認。独立した高信頼攻略DBの直接値は今回固定できなかったため `ANALYSIS_SINGLE_WITH_PERIOD_SPEC_SOURCE`。

## netIncrease

- AT「シーマスターRUSH」: **純増約2.2枚/G**。
- 山佐発表を報じたグリーンべると・娯楽産業、HAZUSE、P-WORLD、旧パチマガスロマガで一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- AT「シーマスターRUSH」: **1セット50G+α**、ゲーム数上乗せ型。
- AT中の上乗せ確率は業界発表で **約1/44**。
- レア役確変は対応レア役出現率が大幅上昇し、複数の上乗せ特化ゾーンを搭載。
- 実機完全再現用の上乗せ振り分けは収集対象外。

## modeSpecificMinimumData

- 通常時のAT間天井: **931G+前兆**。
- 天井到達恩恵: **AT確定**。
- 複数当時解析で、天井到達時の **50%で引き戻しモード移行**。
- 天井以外の通常ゲーム数解除は非搭載とする当時解析が複数あり、主なAT契機はレア役直撃・CZ・天井・引き戻し。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: CONFIRMED_FOR_SETTING_CHANGE_GAME_COUNTER / LIMITED_FOR_STATE_AND_DETECTION / UNVERIFIED_FOR_CARRYOVER_AND_POWER_CYCLE
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 当時解析で **設定変更時は天井までのゲーム数をリセット** と確認。
- 後年回顧資料に「設定変更時は高確スタートの場合あり」とあるが、具体振り分け・当時一次解析を今回固定できていないため補助情報止まり。
- confidence: ANALYSIS_HIGH_FOR_COUNTER / ANALYSIS_SINGLE_RETROSPECTIVE_FOR_HIGH_STATE_NOTE

### carryOverBehavior

- 据え置き時のAT間ゲーム数、内部高確、引き戻し状態を一括して直接明示した本機固有資料は、表記揺れ・型式名・メーカー名を変えた再探索後も固定できず。
- `UNVERIFIED_AFTER_RESEARCH`。設定変更時RESETの反対挙動として自動推定しない。

### powerCycleBehavior

- 設定変更なしの純粋な電源OFF→ON時について、AT間G数・状態・表示復帰を直接明示した本機固有契約は今回固定できず。
- `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更時: **RESET**。
- 据え置き / power cycle: **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE

### ceilingAfterReset

- 設定変更で通常天井931Gへの進捗はリセット。
- 固定一律の「リセット後○G短縮天井」は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 通常時に天井以外のゲーム数解除モードは非搭載とする解析が複数。
- 朝一専用のゲーム数モード・天国振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 引き戻しモードはAT終了・天井恩恵側の概念として確認されるが、設定変更時の移行率は今回確認できず。

### stateAfterReset

- 後年回顧資料に **設定変更時は高確スタートの場合あり** とある。
- 具体的な高確スタート率・低確/高確振り分けは今回、当時解析・別系統資料で再照合できず `UNVERIFIED_PERCENTAGE_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時の通常天井進捗リセット以外に、固定短縮天井は確認できない。
- 高確スタートの可能性は回顧資料にあるが、比較可能な公開朝一数値は固定できていない。

### resetPenalties

- 設定変更専用の独立した冷遇・不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、液晶開始ステージ、ランプ等による設定変更/据え置き判別契約は、検索語を変えて再探索しても `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時天井カウンタ: RESET。
- リセット短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更時高確スタート率: UNVERIFIED_AFTER_RESEARCH。
- 朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH。

### publicMorningNumbers

- 比較可能な設定変更専用の朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井 **931G+前兆** は公開値だが、リセット専用短縮値ではない。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `シーマスター / シーマスター2 / シーマスター ～ララ、旅立ちのプレリュード～ / シーマスター2GG / 3S1138 / 山佐`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 931G / 天井短縮 / 高確 / 引き戻し / モード / ガックン / 50枚 / ベース`。
- 資料系統: 山佐系公式残存資料、公安委員会告示、グリーンべると、娯楽産業、HAZUSE DATA、P-WORLD、旧パチマガスロマガ、当時天井解析、後年回顧資料。
- 5号機クロニクルの本機項目は導入年2013・純増2.8枚/G・別ゲーム性が混在しており、汚染資料として注意。機械割系列の一致確認以外は採用しない。

## sources

取得日: 2026-09-07

1. HAZUSE DATA 機種ページ: https://data.hazuse.com/?genre=202&machine_code=3S1138
2. P-WORLD: https://www.p-world.co.jp/machine/database/7579
3. グリーンべると 山佐発表: https://web-greenbelt.jp/00007409/
4. 娯楽産業 山佐発表: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80%E3%80%8C%E3%82%B7%E3%83%BC%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC-%E3%80%9C%E3%83%A9%E3%83%A9%E3%80%81%E6%97%85%E7%AB%8B%E3%81%A1%E3%81%AE%E3%83%97%E3%83%AC%E3%83%AA%E3%83%A5/
5. 旧パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/200/a.php
6. 旧パチマガスロマガ 確率・機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/200/h.php
7. スロパチクエスト 天井・スペック: https://www.slopachi-quest.com/article/sea-master2-slot/
8. 期待値見える化 天井: https://slotjin.com/zone/seamaster/
9. パチビー機種情報: https://www.pachibee.jp/machines/index/214110000
10. 公安委員会告示転載（型式/検定番号）: https://manualzilla.com/doc/6687088/h26.11.6%EF%BC%8826%E5%B9%B410%E6%9C%88%E4%B8%AD%EF%BC%89
11. 当時販売スペック整理（約31G/50枚）: https://ameblo.jp/slostar/entry-11950908596.html
12. 後年回顧（設定変更時高確スタートの場合あり）: https://pachiseven.jp/articles/detail/10840
13. 山佐ネクスト楽曲公式（作品同定補助）: https://yamasa-next.co.jp/music-distribution/sm2/

## missingFields

- 据え置き時のAT間G数/状態の本機固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更なし電源OFF→ONの本機固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時高確スタートの具体振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン/表示による変更判別: NONE_CONFIRMED_AFTER_RESEARCH
- リセット専用の短縮天井/朝一当選率: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- 重大なcanonical数値競合は今回なし。
- safeguard: 5号機クロニクル本機項目には **2013年12月 / 純増約2.8枚/G / 別ゲーム性** の誤混入があるため、その項目は採用しない。canonicalは2014-12-15 / 純増約2.2枚/G。
