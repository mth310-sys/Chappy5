# テラシグマ

machineName: テラシグマ
manufacturer: JPS
releaseDate: 2015-01-19
releaseDatePrecision: multi_source_hall_start
releaseDateNote: K-Naviで2015-01-19ホール導入開始、PiDEA Xで2015-01-18納品予定を確認し、納品日とホール導入日を分離。
generation: 5号機
systemType: AT / 擬似Aタイプ・擬似ボーナスストック型
modelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- JPS製。
- PiDEA Xの2014-11-28発表会記事で、JPS製「テラシグマ」、納品日2015-01-18予定を確認。
- K-Naviでホール導入開始2015-01-19を確認。
- 型式名・検定番号は表記揺れ、検定、型式、4S等で再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: INDUSTRY / ANALYSIS_HIGH_FOR_RELEASE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.5% |
| 3 | 101.5% |
| 4 | 103.6% |
| 5 | 106.5% |
| 6 | 110.2% |

- スロパチクエストと5号機クロニクルで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 擬似ボーナス初当たり

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/153 |
| 2 | 1/146 |
| 3 | 1/138 |
| 4 | 1/131 |
| 5 | 1/121 |
| 6 | 1/107 |

- スロパチクエスト掲載値。
- K-Navi・PiDEA X・パチマガスロマガのゲーム性説明と整合するが、設定別初当たり全段階の別系統直接照合は今回固定できず。
- confidence: ANALYSIS_SINGLE_WITH_CROSS_SYSTEM_SUPPORT

## baseGamesPer50

- **約36G / 50枚**。
- パチマガスロマガの小役確率ページに明記。
- confidence: ANALYSIS_SINGLE_STRONG_DB

## netIncrease

- 擬似ボーナスAT: **純増約3.0枚/G**。
- PiDEA X、K-Navi、パチマガスロマガ、P-WORLDで一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: **平均約281枚**。ベルナビ46回。
- REGULAR BONUS: **平均約97枚**。ベルナビ14回。
- PiDEA X、K-Navi、P-WORLD、スロパチクエストで一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は規定ゲーム数消化またはレア小役抽選で擬似ボーナスを目指す。
- 規定ゲーム数は内部モード管理。
- 最大天井: **ボーナス間998G**。到達で擬似ボーナス当選。
- スロパチクエストではモードA最大998G、モードB最大768Gとして整理されている。
- ボーナス後300G以内の当選割合は **94%以上 / 94%** とする当時資料が複数存在。
- ボーナス中または終了時にLUCKY/SUPERランプやカウントナビで次回当選ゲーム数を示唆/告知する。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS_UNVERIFIED_RESET_CONTRACT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機固有の設定変更時に、天井G・規定ゲーム数モード・擬似ボーナスストック・内部状態をどのように初期化/再抽選するかを直接比較した当時資料は、検索語・資料系統を変えた再探索後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機AT機の慣例から推定しない。
- confidence: UNVERIFIED

### carryOverBehavior

- 据え置き時の天井G、規定ゲーム数モード、ストック、内部状態の引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- スロパチクエスト追記には「全台据え置き濃厚ホールで宵越し時、3連続REGでも次回BB変換が発生しない報告」が複数あった旨があるが、これは個人/現場報告であり、据え置き内部契約の確定根拠には使用しない。
- confidence: UNVERIFIED

### powerCycleBehavior

- 設定変更なしの純電源OFF→ON時に、天井G、モード、ストック、表示セグ等がどう復帰するかを本機固有で直接対照した資料は `UNVERIFIED_AFTER_RESEARCH`。
- confidence: UNVERIFIED

### gameCounterReset

- 設定変更時: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`。
- power cycle only: `UNVERIFIED_AFTER_RESEARCH`。
- 通常時最大天井そのものは **998G** と複数資料で確認。

### ceilingAfterReset

- 通常時最大998Gに対し、設定変更専用の短縮天井または別天井数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 「確認できない」ことを「短縮なし」と断定しない。

### modeAfterReset

- 通常時に規定G数を管理するモードが存在し、当時解析ではモードA最大998G、モードB最大768G。
- 設定変更時のモード再抽選/振り分け、朝一専用モードの有無は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時・据え置き時・純電断時の内部状態契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用として直接確認できる短縮天井、優遇モード、初当たり優遇、ストック恩恵等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更専用の不利モード、冷遇、初当たり不利等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のリールガックン、表示、セグ、ゲーム数挙動等による設定変更/据え置き判別契約は `UNVERIFIED_AFTER_RESEARCH`。
- 通常のボーナス終了時カウントナビやLUCKY/SUPER表示は次回ボーナス示唆であり、設定変更判別表示としては扱わない。

### numericResetData

- 設定変更専用の公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `テラシグマ / テラ シグマ / JPS テラシグマ`。
- 検索語: `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / 998G / 999G / 768G / モード / ストック / ガックン / 50枚 / ベース / 型式 / 検定番号`。
- 資料系統: PiDEA X業界記事、K-Navi、P-WORLD、旧パチマガスロマガ、スロパチクエスト、5号機クロニクル、後年JPS回顧資料。
- 残存するK-Naviトップには「設定変更後の挙動」項目の存在が確認できるが、本文を安定取得できず、検索結果にも具体内容が出ないため推測転記していない。

## sources

取得日: 2026-09-07

1. PiDEA X 発表記事: https://www.pidea.jp/articles/JPS%E3%80%8C%E3%83%86%E3%83%A9%E3%82%B7%E3%82%B0%E3%83%9E%E3%80%8D%E3%81%AF%E6%95%B0%E5%AD%97%E3%81%8C%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%82%92%E4%BA%88%E8%A8%80%E3%81%99%E3%82%8B%21%3F
2. K-Navi: https://p-kn.com/slot/2178/
3. パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/30/a.php
4. パチマガスロマガ 小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/30/c.php
5. パチマガスロマガ AT突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/30/l.php
6. P-WORLD: https://www.p-world.co.jp/machine/database/7598
7. スロパチクエスト: https://www.slopachi-quest.com/article/terra-sigma/
8. スロパチクエスト機種まとめ: https://www.slopachi-quest.com/kisyubetsu/terra-sigma/
9. 5号機クロニクル JPS: https://5goki.com/jps
10. パチセブン JPS回顧: https://pachiseven.jp/articles/detail/11436

## missingFields

- 型式名・検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の天井G/モード/ストック/内部状態契約: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の内部引継ぎ契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の内部契約: `UNVERIFIED_AFTER_RESEARCH`。
- リセット専用短縮天井・モード振り分け・朝一当選率等: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有の設定変更判別契約: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts

- 主要性能コアに平均処理を要する明確な数値競合は今回確認なし。
- 天井表記はP-WORLD/スロパチクエストで **998G**、K-Navi概要では「最大天井999G」と表記されるため、実質的なカウント表現差の可能性はあるが、DBでは解析側の明示値998Gを主値とし、`DISPLAY/COUNT_NOTATION_998_VS_999` を注意事項として保持する。
- 設定変更契約は資料不足を理由に通常モード仕様から逆算しない。
