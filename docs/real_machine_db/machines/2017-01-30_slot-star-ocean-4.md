machineName: SLOTスターオーシャン4
manufacturer: ユニバーサルブロス
releaseDate: 2017-01-30
recordNumber: 1041
generation: 5号機 / 5.5号機期
systemType: A+ART / 周期管理CZ+HP管理型ART
formalModelName: SLOTスターオーシャン4TR
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パチビー、K-Navi、当時解析でホール導入開始2017-01-30が一致。
- PiDEAの2016-11-30発表会記事でユニバーサルブロス製「SLOTスターオーシャン4」を確認。
- 検定通過資料系で正式型式「SLOTスターオーシャン4TR」を確認。
- 検定番号は「SLOTスターオーシャン4 / スターオーシャン4TR / ユニバーサルブロス / 6S / 検定番号 / 公安委員会」を組み替えて再探索したが、今回直接固定できる番号資料を得られなかったため推測しない。
reliability: INDUSTRY_PLUS_DATABASE_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.6% |
| 2 | 99.6% |
| 3 | 102.1% |
| 4 | 105.1% |
| 5 | 107.6% |
| 6 | 110.3% |

- P-WORLD、期待値見える化、後年設定DBで系列一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG BONUS
| 設定 | BIG |
|---:|---:|
| 1 | 1/425.6 |
| 2 | 1/414.8 |
| 3 | 1/394.8 |
| 4 | 1/381.0 |
| 5 | 1/368.2 |
| 6 | 1/346.8 |

### REG BONUS
| 設定 | REG |
|---:|---:|
| 1 | 1/668.7 |
| 2 | 1/668.7 |
| 3 | 1/655.4 |
| 4 | 1/630.2 |
| 5 | 1/618.3 |
| 6 | 1/585.1 |

### ART「スターオーシャン」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/582.8 |
| 2 | 1/516.2 |
| 3 | 1/531.8 |
| 4 | 1/456.8 |
| 5 | 1/460.8 |
| 6 | 1/334.3 |

- P-WORLDの精密系列と複数解析の丸め系列（例1/583等）は一致範囲として扱い、丸め差をCONFLICT化しない。
reliability: DATABASE_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約32G / 50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「スターオーシャン」: 約1.4枚/Gをcanonicalとする。
- 一部攻略資料にART約1.5枚/G、ボーナス込み約2.0枚/G表記がある。1.4枚/GはP-WORLD・パチビー・PiDEAの機種説明で一致するため主値とし、1.5/2.0は算出・丸め定義差として別記録する。
reliability: INDUSTRY_PLUS_DATABASE_HIGH

## basicPayout
- BIG BONUS / エピソードBB: 204枚。
- REG BONUS / ウェルチボーナス: 54枚。
- ARTは規定ゲーム数/規定枚数固定ではなくHP管理型。初期HPは最低5,000HP。
reliability: DATABASE_PLUS_INDUSTRY_HIGH

## modeSpecificMinimumData
- 通常天井: ボーナス間17周期到達で前兆を経てART。平均到達は約1080G。
- ARTを途中で挟んでも、ボーナス非当選なら天井周期進捗は継続。
- CZ「ディサイシヴバトル」: 通常時は15G+α、ART期待度40%オーバー。
- 通常時は周期管理モードA〜Eがあり、CZ当選までモード転落なしとする解析がある。
- 完全再現用の周期ごとの全CZ抽選率・ARTバトル内部抽選はSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_MODE_RESET
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時はボーナス間17周期天井進捗をRESET。
- 内部状態を再抽選。
- 周期管理モードを再抽選。
- プライベートポイントを再抽選とする直接比較資料あり。
- 朝一液晶は宇宙船「カルナス」系ステージ開始とする資料が複数ある。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置きではボーナス間17周期天井進捗をCARRYOVER。
- 内部状態・周期管理モード・プライベートポイントもCARRYOVERとする直接比較資料がある。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### powerCycleBehavior
- 純電源OFF→ONのみ: 天井進捗CARRYOVER。
- 内部状態CARRYOVER。
- 周期管理モードCARRYOVER。
- プライベートポイントCARRYOVER。
- 開始ステージの厳密な純電断契約は資料差/調査中表記が残るため、内部値と切り分け `DISPLAY_START_STAGE_UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_INTERNAL_CARRYOVER

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRYOVER。
- 純電源OFF→ON: CARRYOVER。
- 対象はボーナス間17周期天井進捗。途中ARTではリセットされない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 通常天井はボーナス間17周期（平均約1080G）。
- 設定変更で周期進捗を0から再スタート。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定変更時は周期管理モードA〜Eを再抽選。
- 公開振り分け: モードA 37.5% / B 37.5% / C 22.6% / D 1.6% / E 0.8%。
- 据え置き・純電源OFF→ONはモードCARRYOVER。
reliability: ANALYSIS_HIGH_NUMERIC

### stateAfterReset
- 設定変更時は内部状態を再抽選。
- 据え置き・純電源OFF→ONは内部状態CARRYOVER。
- 設定変更専用の低確/高確個別振り分け数値は、表記揺れ・メーカー名・設定変更/リセット/朝一/内部状態/高確を変えて再探索後も今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR_UNVERIFIED_FOR_NUMERIC_SPLIT

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後は周期モードを再抽選し、C以上が25.0%（22.6+1.6+0.8）。
- 朝一に「おはよう、レイミ」等、「おはよう」を含むプライベートアクションが出現すると設定変更濃厚とする当時解析がある。
- 固定短縮天井・設定変更専用ART確定は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_MODE_AND_DETECTION

### resetPenalties
- 前日の17周期天井進捗は設定変更で失われる。
- 前日の内部モード/状態・蓄積プライベートポイントも引き継がず再抽選されるため、蓄積状況次第では宵越し価値を消す方向に作用。
- その他の設定変更専用不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### resetDetection
- 朝一に「おはよう」を含むアクションが出現すれば設定変更濃厚とする解析あり。
- 本機固有のリールガックンについて「設定変更なら必ず/高確率、純電断では出ない」と断定できる直接契約は、機種名/型式/メーカー/ガックン/設定変更/据え置き/電源OFF ONを変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 開始ステージ単独での変更判別も、純電断側の開始ステージが調査中とする当時資料があるため確定材料にしない。
reliability: ANALYSIS_HIGH_FOR_OHAYOU_PATTERN

### numericResetData
- 通常天井: ボーナス間17周期、平均約1080G。
- 設定変更時周期モード: A 37.5% / B 37.5% / C 22.6% / D 1.6% / E 0.8%。
- モードC以上合計: 25.0%。
- 設定変更専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時内部状態の数値振り分け: `UNVERIFIED_AFTER_RESEARCH`。

## dataQualityNotes
- 導入日2017-01-30はパチビー/K-Navi/当時解析で一致し、PiDEAのメーカー発表記事とも時系列整合。
- 正式型式「SLOTスターオーシャン4TR」は検定通過記事で確認したが、検定番号は今回直接固定できず推測しない。
- 性能コアの機械割、BIG/REG/ART初当たりはP-WORLDと複数解析で一致。
- ART純増は1.4枚/Gの一次寄り/DB資料と1.5枚/Gの攻略表記があり、主値1.4枚/G、1.5枚/Gは丸め/定義差として保持。
- resetBehaviorは設定変更と電源OFF→ONの比較資料、および設定変更時周期モード数値を取得。内部状態の個別数値、ガックン確定契約は十分な再探索後も固定できなかった。

## conflicts
- NONE_MATERIAL_CONFIRMED。
- ART純増1.4枚/G vs 約1.5枚/Gは資料精度/丸め・ボーナス込み定義差として保持し、現時点ではmaterial CONFLICTとしない。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時内部状態の具体的振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン確定契約: `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用の詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- DATABASE / パチビー: https://www.pachibee.jp/machines/index/216120004
- DATABASE / K-Navi: https://p-kn.com/slot/2681/
- DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8239
- INDUSTRY / PiDEA 新機種発表: https://www.pidea.jp/articles/%E3%82%B9%E3%82%AF%E3%82%A8%E3%83%8B%E3%81%AE%E5%90%8DRPG%E3%80%8C%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%80%8D%E3%82%92%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%8C%96%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90
- INDUSTRY / P-MEDIA 検定通過・型式: https://p-media.info/%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB%E3%83%96%E3%83%AD%E3%82%B9%E3%80%8C%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B34%E3%80%8D%E6%A4%9C%E5%AE%9A%E9%80%9A/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/universal-slot/29639/
- ANALYSIS / 期待値見える化: https://slotjin.com/tenjoukitaichi/starocean4/
- RETROSPECTIVE_DATABASE / pacnk: https://pacnk.com/slot/tools/sh_sutaoshan4.html
