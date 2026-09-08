machineName: ドリスタせかんど
manufacturer: ネット
releaseDate: 2017-03-06
recordNumber: 1053
generation: 5号機 / 5.5号機期
systemType: ART / 擬似ボーナス / 周期抽選
formalModelName: ドリスタせかんど／NE
certificationNumber: 6S1523
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- NET公式プレスリリースは2017年3月上旬より全国導入予定と告知。
- HAZUSEとパチビーは導入開始日を2017-03-06と掲載し、HAZUSEは型式 `ドリスタせかんど／NE`、検定番号 `6S1523` を直接掲載。
- 本DB canonical releaseDateは2017-03-06。
reliability: OFFICIAL_FOR_RELEASE_MONTH_AND_PRODUCT; ANALYSIS_HIGH_MULTI_SOURCE_FOR_EXACT_DATE_AND_MODEL_ID

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.3% |
| 3 | 100.7% |
| 4 | 104.0% |
| 5 | 106.7% |
| 6 | 110.4% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART擬似ボーナス初当たり
| 設定 | 初当たり |
|---:|---:|
| 1 | 1/199 |
| 2 | 1/186 |
| 3 | 1/173 |
| 4 | 1/153 |
| 5 | 1/137 |
| 6 | 1/122 |

### 種別別公開値
| 設定 | SPバトルボーナス | バトルボーナス | ライブボーナス |
|---:|---:|---:|---:|
| 1 | 1/2978 | 1/120 | 1/205 |
| 2 | 1/2812 | 1/113 | 1/193 |
| 3 | 1/2505 | 1/100 | 1/173 |
| 4 | 1/2210 | 1/88 | 1/152 |
| 5 | 1/1972 | 1/78 | 1/135 |
| 6 | 1/1683 | 1/66 | 1/116 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約46.3G/50枚。
- 当時の期待値見える化が設定1ベースの算出条件として46.3G/50枚を明記。
reliability: ANALYSIS_SINGLE_DIRECT_NUMERIC

## netIncrease
- ART擬似ボーナス純増: 約1.8枚/G。
- NET発売発表を報じたPiDEA、P-WORLD、期待値見える化で一致。
reliability: INDUSTRY_AND_ANALYSIS_MULTI_SOURCE

## basicPayout
- スペシャルバトルボーナス: 50G+α、P-WORLD記載の平均獲得約100枚。
- バトルボーナス: 30G+α、P-WORLD記載の平均獲得約64枚。
- ライブボーナス: 1セット20G、継続抽選型。
- リアルボーナス非搭載。いずれもARTによる擬似ボーナス。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は4種ステージを用いた周期抽選型。1周期は概ね30〜40G前後だがステージごとに継続G数が異なる。
- ドリームスター5個到達でCZ「モグモグボウリング」へ突入、10G継続、ボーナス期待度約50%。
- 通常天井は最大20周期で擬似ボーナス確定。平均到達Gは資料に約660G〜680Gの表現差があるため、固定G天井ではなく20周期をcanonical定義とする。
- 通常時の天井周期振り分けは1・5・10・15・20周期に存在し、設定差あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_RESET_COMPARISON_AVAILABLE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は天井周期数をRESET。
- 設定変更後は通常時とは異なるリセット専用の天井周期振り分けを使用。
- 朝一表示ステージ/内部高低状態の直接公開契約は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CYCLE_RESET_AND_RESET_TABLE; UNVERIFIED_FOR_STAGE_AND_INTERNAL_STATE

### carryOverBehavior
- 据え置きは設定変更を伴わないため、公開されている純電源OFF→ON比較に準じて天井周期数CARRYOVERとして扱う。
- ドリームスター、周期内進捗、内部高低状態等の全個別状態が据え置き時にどこまで保持されるかは本機固有の直接比較資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CEILING_CARRYOVER_BY_POWER_COMPARISON; UNVERIFIED_FOR_OTHER_INTERNAL_STATE

### powerCycleBehavior
- 電源OFF→ONのみ: 天井周期数CARRYOVER。
- ステージは当時解析表でも調査中。
- ドリームスター/周期内進捗/内部状態の個別保持契約は `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON_FOR_CEILING; UNVERIFIED_FOR_OTHER_STATE

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRYOVER。
- 本機は固定G数ではなく周期数で天井管理するため、ゲーム数表示と内部天井周期を混同しない。

### ceilingAfterReset
- 設定変更後も最大20周期だが、通常時より浅い5周期・10周期の選択率が大幅に上昇するリセット専用振り分けあり。
- リセット後天井周期振り分け: 1周期3.1% / 5周期25.0% / 10周期25.0% / 15周期3.1% / 20周期43.8%。
- 天井のみの累積到達期待度として、5周期到達時25.8%、10周期到達時34.8%、15周期到達時6.6%という当時解析表現あり。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC

### modeAfterReset
- 「天井周期振り分け」がリセット専用テーブルへ再選択されることは直接確認済み。
- それ以外の朝一専用モード名称、4種ステージ選択モード、設定変更時のステージ振り分け等は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_RESET_CEILING_TABLE; RESEARCH_EXHAUSTED_FOR_OTHER_RESET_MODE_TABLES

### stateAfterReset
- 設定変更時の低確/高確等の内部状態振り分け、純電源OFF→ON時の内部状態完全保持契約は、機種名/型式/NET/朝一/設定変更/リセット/据え置き/電源OFF ON/高確/状態を組み替え、当時解析・古いDB・回顧資料まで再探索したが直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ステージは当時の設定変更 vs 電源OFF→ON比較表でも「調査中」。
reliability: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 5周期・10周期天井の選択率が各25.0%まで上がるため、設定変更後は通常時より明確な浅い周期天井恩恵がある。
- 1周期3.1%、15周期3.1%、最深20周期43.8%。
- 固定G数短縮ではなく周期天井テーブル優遇として扱う。

### resetPenalties
- 前日の天井周期進捗は設定変更で消失するため、宵越し天井狙いには不利。
- その他の設定変更専用主要ペナルティ: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 前日周期数が十分進んでいた台で朝一20周期まで到達し得る挙動等は設定変更推測材料になり得るが、実戦上は周期長が可変で確定判別には不向き。
- 本機固有のメーカー保証されたガックン、初期出目、ランプ、液晶ステージによる確定的な変更判別は、検索語と資料系統を変えた再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: RESEARCH_EXHAUSTED_NO_DETERMINISTIC_PUBLIC_DETECTION_FOUND

### numericResetData
- reset ceiling-cycle distribution:
  - 1周期: 3.1%
  - 5周期: 25.0%
  - 10周期: 25.0%
  - 15周期: 3.1%
  - 20周期: 43.8%
- pure power OFF→ON ceiling cycles: CARRYOVER。
- setting-change-specific internal-state percentage table: `UNVERIFIED_AFTER_RESEARCH`。

## dataQualityNotes
- HAZUSE/パチビー/期待値見える化で2017-03-06導入が一致し、NET公式は2017年3月上旬全国導入予定。
- HAZUSEと期待値見える化の設定別機械割・擬似ボーナス初当たりは一致。
- 天井は固定ゲーム数ではなく最大20周期。P-WORLD/中古実機DB系は約660G、期待値見える化は平均約680Gとするため、660 vs 680をCONFLICTとはせず「周期長変動による代表到達G差」として定義を分離。
- リセット後の1/5/10/15/20周期振り分けは、通常時の設定別天井テーブルと混同しない。

## conflicts
- `NONE_MATERIAL_CONFIRMED`。

## missingFields
- setting-change initial stage: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change internal high/low state distribution: `UNVERIFIED_AFTER_RESEARCH`。
- pure-power-cycle detailed internal-state and Dream Star carryover: `UNVERIFIED_AFTER_RESEARCH`。
- deterministic manufacturer-guaranteed reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の通常時全周期/小役/ストック抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL_RELEASE / NET press release via DreamNews: https://www.dreamnews.jp/press/0000145470
- INDUSTRY / PiDEA: https://www.pidea.jp/articles/%E3%83%8D%E3%83%83%E3%83%88%E3%80%8C%E3%83%89%E3%83%AA%E3%82%B9%E3%82%BF%E3%81%9B%E3%81%8B%E3%82%93%E3%81%A9%E3%80%8D%E3%81%AF%E3%82%AC%E3%83%81%E3%83%A3%E3%82%AC%E3%83%81%E3%83%A3%E6%90%AD%E8%BC%89
- ANALYSIS_DB / HAZUSE: https://hazuse.com/machine/pachislot/6S1523/
- ANALYSIS / 期待値見える化: https://slotjin.com/zone/dresta2nd/
- DB / P-WORLD: https://www.p-world.co.jp/machine/database/8266
- MACHINE_DB / パチビー: https://www.pachibee.jp/machines/lecture/217020009
- SECONDARY / パチマ中古機情報: https://www.pachima.com/c/slot/s_28sonota/S00467
