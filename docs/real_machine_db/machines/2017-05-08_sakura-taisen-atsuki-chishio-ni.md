machineName: パチスロサクラ大戦～熱き血潮に～
manufacturer: Sammy / サミー株式会社
releaseDate: 2017-05-08
recordNumber: 1073
generation: 5号機 / 5.5号機
systemType: ART特化 / CZ / 好感度メーター管理
formalModelName: パチスロサクラ大戦 熱き血潮に／XR
certificationNumber: 6S1598
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式2017-03-06発売告知で商品名、発売元、2017年5月上旬全国稼働予定を確認。
- パチビー、K-Navi、HAZUSE、複数解析で導入日2017-05-08一致。
- HAZUSEで型式「パチスロサクラ大戦 熱き血潮に／XR」、検定番号6S1598を確認。
reliability: OFFICIAL_FOR_NAME_AND_RELEASE_MONTH; INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE; INDUSTRY_FOR_MODEL_AND_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 98.8% |
| 3 | 100.7% |
| 4 | 103.7% |
| 5 | 107.8% |
| 6 | 111.5% |
- 一撃、パチスロデータ、パチナビ等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「帝撃ラッシュ」
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/394.1 |
| 2 | 1/381.9 |
| 3 | 1/363.4 |
| 4 | 1/330.4 |
| 5 | 1/293.5 |
| 6 | 1/271.7 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: 約44G/50枚。
- ちょんぼりすた、パチスロデータ等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「帝撃ラッシュ」: 約2.0枚/G。
- ART特化機でリアルボーナス非搭載。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART初回: 30G+α + 敵将バトル6G。
- 2セット目以降: 20G / 30G / 40G + α + 敵将バトル6G。
- CZ「撃帝チャレンジ」は仮想迎撃/轟雷号/レビュウの3系統。完全再現用詳細抽選はSCOPE_EXCLUDED。
reliability: INDUSTRY_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常天井はゲーム数ではなく、ART間で「好感度100%到達」が10回に達するとART当選濃厚。
- 好感度メーターは風・林・火・山の4系統で、通常時からART中まで引き継ぐサクラリンクシステム。
reliability: OFFICIAL_FOR_SYSTEM_CONCEPT; ANALYSIS_HIGH_FOR_CEILING

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_CORE_RESET_CONTRACT_WITH_STATE_GAP
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 好感度MAX回数天井: RESETし、通常10回から設定変更時は5回 or 9回へ再抽選。
- 振り分け: 5回 50.0% / 9回 50.0%。解析上の目安は約600G / 約1080G相当だが、実天井はゲーム数ではなく好感度MAX回数で管理。
- 好感度: 再セット。見た目は0%表示だが内部好感度を再抽選し、平均約45%相当スタート。
- 好感度振り分け: 1～55各1.2%、56～99各0.8%。
- 内部状態: 当時一撃比較資料は「調査中」。検索語・資料系統変更後も設定変更時の低確/高確等の直接契約を固定できず UNVERIFIED_AFTER_RESEARCH。
- 液晶ステージ: 劇場ステージとする後発解析あり。一撃2017-05-31時点では調査中のため、PUBLICATION_TIME_DIFFERENCEとして保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_AND_AFFECTION; UNVERIFIED_FOR_INTERNAL_STATE

### carryOverBehavior
- 据え置き専用の独立比較資料で全項目を直接固定できず、純電源OFF→ON契約を自動転記しない。
- 前日好感度+当日獲得分で100%到達する挙動は据え置き推測材料とされる。
- full contract: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH。
reliability: ANALYSIS_SINGLE_FOR_DETECTION_INFERENCE; UNVERIFIED_DIRECT_FOR_FULL_CONTRACT

### powerCycleBehavior
- 好感度MAX回数天井: CARRYOVER。
- 好感度内部値: CARRYOVER。
- 見た目上の好感度表示: リセット/0%表示。
- 内部状態: 当時比較資料で調査中。後発資料でも十分な直接契約を固定できず UNVERIFIED_AFTER_RESEARCH。
- 液晶ステージ: 劇場ステージとする解析あり。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_AFFECTION_CARRYOVER; UNVERIFIED_FOR_INTERNAL_STATE

### gameCounterReset
- 本機の主要天井基準はゲーム数ではなく好感度MAX到達回数。
- settingChange: RESETして5回/9回へ再抽選。
- powerCycle: CARRYOVER。
- carryOver: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 通常: 好感度MAX10回。
- 設定変更: 好感度MAX5回 50.0% / 9回 50.0%。
- 解析上の平均ゲーム数目安: 5回≈600G、9回≈1080G。ただし固定G天井ではないため yardstick では回数天井をcanonicalとする。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 朝一専用の独立「モード」名称/移行テーブルは NONE_CONFIRMED_AFTER_RESEARCH。
- 天井規定回数の再抽選と好感度再セットを、モードとは分離して保存。
reliability: ANALYSIS_HIGH_FOR_NONE_CONFIRMED

### stateAfterReset
- 内部低確/高確等: UNVERIFIED_AFTER_RESEARCH。
- 表示ステージは後発解析で劇場ステージ。
reliability: ANALYSIS_SINGLE_FOR_VISIBLE_STAGE; UNVERIFIED_FOR_INTERNAL_STATE

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 通常10回の好感度MAX天井が、設定変更時は5回または9回へ必ず短縮される。
- 好感度は内部1～99へ再セットされ、平均約45%相当から開始するため、見た目0%でも内部進捗を持つ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日の好感度MAX回数進捗と内部好感度を消去する。
- その他の設定変更専用不利要素: NONE_CONFIRMED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH

### resetDetection
- 朝一1G目のリールガックンを設定変更推測材料とする解析あり。ただしホール対策可能なため確定判別にはしない: POSSIBLE_RESET_INDICATOR_NOT_DETERMINISTIC。
- 設定変更・純電断とも見た目上好感度0%から始まるため、0%表示単独では判別不可。
- 純電断では内部好感度を引き継ぐため、前日値が把握できている場合、前日+当日分で100%到達すれば据え置き/電断継続の強い推測材料。
reliability: ANALYSIS_HIGH_FOR_AFFECTION_INFERENCE; ANALYSIS_SINGLE_FOR_GAKKUN

### numericResetData
- normalCeiling: 好感度MAX10回
- resetCeilingDistribution: 5回=50.0%, 9回=50.0%
- resetCeilingApproxGameEquivalent: 5回≈600G, 9回≈1080G (参考値、固定G天井ではない)
- resetAffectionDistribution: 1～55=各1.2%, 56～99=各0.8%
- resetAffectionAverage: 約45%
- powerCycleCeilingProgress: CARRYOVER
- powerCycleAffectionInternal: CARRYOVER
- visibleAffectionAfterPowerCycle: 0%表示
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## dataQualityNotes
- 「天井ゲーム数」という古い攻略サイトの項目名は本機では実際には好感度MAX回数天井を指す。固定ゲーム数天井と混同しない。
- 5回≈600G、9回≈1080Gは解析上の平均目安であり固定発動ゲーム数ではない。
- 一撃2017-05-31時点では設定変更/純電断後の状態・ステージが調査中。後発整理で劇場ステージ情報があるためステージはPUBLICATION_TIME_DIFFERENCEとして記録し、内部状態はUNVERIFIEDを維持。
- ART純増約2.0枚/Gは複数資料一致。

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED.
- PUBLICATION_TIME_DIFFERENCE_VISIBLE_STAGE: 2017-05-31一撃=調査中 vs 後発解析=劇場ステージ。

## missingFields
- settingChange internal state direct contract: UNVERIFIED_AFTER_RESEARCH
- powerCycle internal state direct contract: UNVERIFIED_AFTER_RESEARCH
- carryOver full direct contract: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. サミー公式 — 新機種「パチスロサクラ大戦～熱き血潮に～」発売のお知らせ
   - https://www.sammy.co.jp/japanese/news/2017/658.html
   - 商品名、発売元、2017年5月上旬全国稼働予定、サクラリンクシステム。
2. パチビー — 機種情報 パチスロサクラ大戦～熱き血潮に～
   - https://www.pachibee.jp/machines/index/217040000
   - 2017-05-08、ART純増約2.0枚/G、基本ART構造。
3. HAZUSE — パチスロ サクラ大戦～熱き血潮に～
   - https://hazuse.com/machine/pachislot/6S1598/
   - 導入日、型式名、検定番号、好感度MAX10回天井、設定変更時5/9回各50%。
4. K-Navi — パチスロサクラ大戦～熱き血潮に～
   - https://p-kn.com/slot/2750/
   - 導入日、ART初当たり。
5. 一撃 — 基本スペック / 天井・設定変更
   - https://1geki.jp/slot/s_sakura_taisen_atsuki/
   - https://1geki.jp/slot/s_sakura_taisen_atsuki/3/
   - 機械割、ART初当たり、設定変更/電源OFF-ON比較、平均45%好感度再セット。
6. ちょんぼりすた — サクラ大戦 スロット解析
   - https://chonborista.com/slot/sammy-slot/34601/
   - 44G/50枚、純増2.0枚/G、天井構造、導入日。
7. パチスロデータ — サクラ大戦 熱き血潮に
   - https://pachislo-data.com/sammy/33931
   - 機械割、ART初当たり、44G/50枚、5/9回各50%、好感度1～99振り分け、据え置き推測材料。
8. すろぱちくえすと — サクラ大戦4 熱き血潮に解析まとめ
   - https://www.slopachi-quest.com/article/sakurataisen4/
   - 設定変更/電源OFF-ON比較、劇場ステージ、ガックン、5/9回各50%、好感度振り分け。
