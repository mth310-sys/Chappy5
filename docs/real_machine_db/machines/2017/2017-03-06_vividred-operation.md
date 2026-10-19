machineName: パチスロ ビビッドレッド・オペレーション
manufacturer: 三洋物産
releaseDate: 2017-03-06
recordNumber: 1054
generation: 5号機 / 5.5号機期
systemType: A+ART / セットストック型ART
formalModelName: ビビッドレッド・オペレーション／KE
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT_CERT_UNVERIFIED_PAYOUT_CONFLICT

## identity
- 三洋物産の新機種として2017年1月の業界記事で発表を確認。A+ART機で、ボーナスを契機にARTへつなぐ構造。
- ちょんぼりすた、すろぱちくえすと等の複数解析でホール導入日2017-03-06が一致するため、本DB canonical releaseDateは2017-03-06。
- 中古実機/機種情報資料では型式名 `ビビッドレッド・オペレーションKE` / `ビビッドレッド・オペレーション/KE` を確認し、formalModelNameは `ビビッドレッド・オペレーション／KE` とする。
- 検定番号は「ビビッドレッド・オペレーション/KE」「三洋/三洋物産」「6S」「検定番号」「型式名」、HAZUSE系検索等へ表記・検索語・資料系統を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: INDUSTRY_FOR_PRODUCT; ANALYSIS_HIGH_MULTI_SOURCE_FOR_EXACT_DATE; SECONDARY_MULTI_SOURCE_FOR_FORMAL_MODEL; UNVERIFIED_FOR_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.6% |
| 3 | 100.2% |
| 4 | 103.9% |
| 5 | 107.6% |
| 6 | 110.5% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ART初当たり |
|---:|---:|---:|---:|
| 1 | 1/336.1 | 1/337.8 | 1/420 |
| 2 | 1/331.0 | 1/332.7 | 1/415 |
| 3 | 1/326.1 | 1/327.7 | 1/396 |
| 4 | 1/321.3 | 1/322.8 | 1/357 |
| 5 | 1/316.6 | 1/318.1 | 1/308 |
| 6 | 1/312.1 | 1/313.6 | 1/283 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約32.0〜32.8G/50枚。資料によって代表値を約32Gと丸めている。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART単体純増: 約1.2枚/G。
- ボーナス込み実効純増の掲載値: 約1.7枚/G。
- 定義が異なるため同一値として混ぜない。
reliability: INDUSTRY_DB_AND_ANALYSIS_MULTI_SOURCE

## basicPayout
- BIG: 約154枚。
- REG: 約56枚。
- ART: 1セット30G。
reliability: INDUSTRY_DB_AND_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はLOW / HIGH / ULTRA HIGH等の内部状態とSTORY進行を持つA+ART機。STORY表示と内部状態は完全連動ではないため、液晶STORYをそのまま内部高確率として扱わない。
- 通常の代表天井はボーナス間800G消化後、次回ボーナス成立でARTへ突入するタイプ。
- ART終了時には次回友情高確予約数に応じて0G/800Gの特殊天井テーブルが存在するが、これは設定変更専用テーブルではないためresetBehaviorの数値へ混入させない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_RESET_STAGE_DATA_WITH_CEILING_STATE_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は液晶のSTORY末尾を再抽選。
- 公開リセット比較資料では、設定変更時の天井挙動と内部状態は当時「調査中」。その後、機種名/型式/メーカー/リセット/設定変更/据え置き/電源OFF ON/天井/状態/朝一等へ検索語を変え、当時解析・古いDB・後年回顧まで再探索したが、本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_FOR_STORY_RESELECT; UNVERIFIED_AFTER_RESEARCH_FOR_CEILING_AND_INTERNAL_STATE

### carryOverBehavior
- 設定据え置き時の天井進捗・内部状態について、本機固有の直接比較資料を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時はSTORY表示据え置きの公開比較があるため、一般的な朝一運用で設定据え置きかつ電源再投入された場合の表示面はCARRYOVER材料になる。ただし、これを天井/内部状態まで自動拡張しない。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE_STAGE; UNVERIFIED_AFTER_RESEARCH_FOR_CEILING_AND_INTERNAL_STATE

### powerCycleBehavior
- 電源OFF→ONのみ: STORY表示は据え置き/CARRYOVER。
- 天井進捗: `UNVERIFIED_AFTER_RESEARCH`。
- 内部状態: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_DIRECT_RESET_COMPARISON_FOR_STAGE; UNVERIFIED_AFTER_RESEARCH_FOR_CEILING_AND_STATE

### gameCounterReset
- 設定変更時の800G天井進捗RESET/CARRYOVER: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時: `UNVERIFIED_AFTER_RESEARCH`。
- 本機の一般的な800G天井仕様は確認済みだが、リセット時契約を一般論から推測して埋めない。

### ceilingAfterReset
- 設定変更専用の固定短縮天井、リセット専用0G天井、短縮率等: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時の通常800G天井進捗のRESET/CARRYOVER自体は直接資料不足のため `UNVERIFIED_AFTER_RESEARCH`。
- ART終了時の0G/800G特殊天井は別条件であり、リセット恩恵として扱わない。
reliability: RESEARCH_EXHAUSTED_NO_RESET_SPECIFIC_NUMERIC_CEILING_FOUND

### modeAfterReset
- 設定変更時はSTORY末尾を再抽選。
- リセット専用の長期ゲーム性モード、朝一専用モード名、設定変更専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- STORY末尾再抽選は液晶/進行位置の再抽選として扱い、内部LOW/HIGH等の状態振り分けと同一視しない。
reliability: ANALYSIS_HIGH_FOR_STORY_RESELECT; RESEARCH_EXHAUSTED_FOR_OTHER_RESET_MODE_TABLES

### stateAfterReset
- 設定変更時のLOW/HIGH/ULTRA HIGH等の内部状態振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電源OFF→ON時の内部状態保持契約: `UNVERIFIED_AFTER_RESEARCH`。
- 当時比較表でも状態欄は調査中であり、STORY再抽選値から内部状態を逆算しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後はSTORY末尾が1〜5へ再抽選されるため、表示位置に朝一特有の分布が生じる。
- ゲーム数天井短縮、高確スタート率上昇、ART直撃優遇などの主要な数値恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更で天井進捗が消えるか自体を直接固定できていないため、宵越し天井消失を推測でペナルティ扱いしない。
- その他の設定変更専用主要ペナルティ: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時はSTORY末尾が再抽選され、純電源OFF→ONではSTORY表示据え置きの比較資料がある。前日STORYを把握していて朝一STORYが異なる場合は設定変更推測材料になり得る。
- ただしSTORY進行や当時資料上の据え置き全契約が完全固定されているわけではないため `POSSIBLE_RESET_INDICATOR_NOT_DETERMINISTIC` とする。
- 実機検証系資料では朝一リールガックンは「効かないように見える」とされ、確定変更判別には採用しない。
- 本機固有のメーカー保証された初期出目/ランプ等の確定変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_STORY_RESET_AND_POWER_STAGE_COMPARISON; ANALYSIS_SINGLE_TEST_FOR_GAKKUN

### numericResetData
- 設定変更時 STORY末尾振り分け:
  - STORY1: 25.0%
  - STORY2: 25.0%
  - STORY3: 25.0%
  - STORY4: 12.5%
  - STORY5: 12.5%
- 設定変更時天井ゲーム数/短縮率: `UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時内部高確率: `UNVERIFIED_AFTER_RESEARCH`。

## dataQualityNotes
- 機械割・BIG/REG・ART初当たりは、独立した複数解析資料で同系列が一致。BIG/REGは丸め値と小数精密値を混同せず、小数精密値を採用。
- ART純増1.2枚/Gとボーナス込み1.7枚/Gは定義を分離。
- リセット時STORY末尾振り分けは公開数値として保存するが、内部状態振り分けではない。
- 当時の設定変更 vs 電源ON/OFF比較表が天井・状態を「調査中」としているため、5号機一般論からRESET/CARRYOVERを補完しない。
- formalModelNameは複数二次資料でKE表記が一致するが、検定番号は直接資料を固定できずUNVERIFIED。

## conflicts
- `CONFLICT_SETTING5_PAYOUT_107_6_MULTI_ANALYSIS_VS_104_7_LOW_QUALITY_AGGREGATION`。
  - 107.6%: ちょんぼりすた、すろぱちくえすとで一致しcanonical。
  - 104.7%: 低品質な転載/掲示系集約ページに単独掲載。平均せず根拠差を保持。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change / carryover / pure-power ceiling progress contract: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change internal-state distribution and pure-power state carryover: `UNVERIFIED_AFTER_RESEARCH`。
- deterministic manufacturer-guaranteed reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の通常時全状態移行/全友情高確抽選/全セットストック抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- INDUSTRY / グリーンべると via P-WORLD: https://news.p-world.co.jp/articles/8983/greenbelt
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/31696/
- ANALYSIS / すろぱちくえすと: https://www.slopachi-quest.com/article/viviope/
- MACHINE_DB / P-WORLD: https://www.p-world.co.jp/machine/database/8279
- SECONDARY_FORMAL_MODEL / ナカイチ: https://www.nakaiti.com/html/sSanyo097.html
- SECONDARY_FORMAL_MODEL / InitialP: https://initialp.cart.fc2.com/ca45/2560/
- LOW_QUALITY_CONFLICT_ONLY / 鈴木さん速報転載集約: https://suzusoku.blog.jp/archives/14605194.html
