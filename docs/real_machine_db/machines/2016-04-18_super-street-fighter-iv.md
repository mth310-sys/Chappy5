# スーパーストリートファイターIV パチスロエディション

machineName: スーパーストリートファイターIV パチスロエディション
manufacturer: エンターライズ
releaseDate: 2016-04-18
recordNumber: 973
generation: 5号機
systemType: ART / 疑似ボーナス+ゲーム数上乗せART
formalModelName: スーパーストリートファイターIV／ZY
certificationNumber: 5S1463
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- エンターライズ公式特設ページで本機を確認。公式ページは2016-03-22開設、3/28スペック更新、4/4製品特徴更新、4/11演出紹介更新、4/18スペシャル更新と時系列で更新されているため、4/11の更新日を導入日として扱わない。
- HAZUSEは型式 **スーパーストリートファイターIV／ZY**、検定番号 **5S1463**、導入開始日 **2016-04-18** と記録。
- ちょんぼりすた、期待値見える化、当時解析も2016-04-18導入で一致。
- 一方、すろぱちくえすと2016年導入日一覧のみ2016-04-11群に掲載。複数の機種別当時資料とHAZUSEを優先しcanonicalは **2016-04-18**、4/11表記は `CONFLICT_RELEASE_DATE_2016_04_11_VS_2016_04_18` として保持する。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.6% |
| 3 | 100.4% |
| 4 | 103.1% |
| 5 | 105.5% |
| 6 | 110.1% |

HAZUSE、5号機クロニクル、複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### 疑似ボーナス「スパIVチャンス」等の通常時ボーナス初当たり
| 設定 | 確率 |
|---:|---:|
| 1 | 1/199.9 |
| 2 | 1/189.3 |
| 3 | 1/191.5 |
| 4 | 1/175.0 |
| 5 | 1/175.2 |
| 6 | 1/158.7 |

### ART「波動連舞」初当たり
| 設定 | 確率 |
|---:|---:|
| 1 | 1/626.7 |
| 2 | 1/570.6 |
| 3 | 1/593.4 |
| 4 | 1/486.4 |
| 5 | 1/500.7 |
| 6 | 1/400.5 |

HAZUSEの精密値をcanonical表示とし、複数解析の丸め値（1/200、1/627等）も一致範囲として確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約41.9～42G/50枚**。
- パチマガスロマガは約41.9G、HAZUSE・期待値見える化は約42Gで一致。
- 必勝期待値クマぱぱには **約47G/50枚** 表記があるため平均化せず `CONFLICT_BASE_41_9_TO_42_VS_47` として保持する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT

## netIncrease
- 疑似ボーナス / ART「波動連舞」: **約1.7枚/G**。
- エンターライズ機種紹介系、P-WORLD、HAZUSE、複数解析で一致。
reliability: OFFICIAL_PRODUCT_CONTEXT_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- スパIVチャンス: **30G+α**、約1.7枚/G。
- スパIVアタック: **20G**、約1.7枚/G。
- ART「波動連舞」: **初期40G+α**、ゲーム数上乗せ型、約1.7枚/G。
- 狂鬼狂乱: **30G**の上乗せ特化ゾーン。
- 疑似ボーナス方式のため固定獲得枚数ではなく基本G数を物差し値として保存。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は低確/高確の内部状態を持ち、高確中は疑似ボーナス抽選が優遇される。
- 天井は2系統:
  1. **通常時777G**消化で前兆を経由しスパIVチャンス当選。ART直撃確定ではない。
  2. スパIVチャンスがART非当選で**10回連続スルー**すると、次回11回目のスパIVチャンスでART確定。
- 設定変更時・ART終了時にはスルー回数天井短縮抽選が存在する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_STATE_DISTRIBUTION
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時:
  - ゲーム数天井: **RESET**。
  - スルー回数天井: **RESETし、短縮抽選を実施**。
  - 内部状態: **RESELECT / RESET**。
  - 朝一ステージ: **韓国**。
- 当時/後年解析の設定変更 vs 電源OFF→ON比較表で直接確認。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 設定変更を伴わない据え置きでは、少なくとも電源OFF→ON比較表上はゲーム数天井・スルー回数天井・内部状態が引き継がれるため、実運用上の据え置き挙動として **CARRYOVER_SUPPORTED**。
- 電断を伴わない純粋な据え置きを別契約として明記した一次資料は今回固定できず、根拠はpowerCycleBehaviorの直接比較資料に限定する。

### powerCycleBehavior
純電源OFF→ON時:
- ゲーム数天井: **CARRYOVER**。
- スルー回数天井: **CARRYOVER**。
- 内部状態: **CARRYOVER**。
- ステージ: **韓国**。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
- 通常時777G天井進捗は設定変更で失われる。

### ceilingAfterReset
- ゲーム数天井そのものは通常時と同じ **777G**。設定変更専用の固定G数短縮は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただしスルー回数天井には設定変更専用の短縮抽選があり、当選すると **設定変更後1回目のスパIVチャンスでART確定**。

### modeAfterReset
- 本機の朝一で物差し上重要なのはスルー回数天井短縮状態の抽選。
- 設定変更時の短縮当選率:
  - 設定1: **10.0%**
  - 設定2: **12.4%**
  - 設定3: **15.6%**
  - 設定4: **25.0%**
  - 設定5: **37.5%**
  - 設定6: **45.0%**
- 必勝本、イチカツ、期待値見える化等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE

### stateAfterReset
- 設定変更: **内部状態RESELECT**。
- 純電源OFF→ON: **CARRYOVER**。
- 設定変更時の低確/高確具体的振り分けは、「設定変更/リセット/朝一/内部状態/高確スタート/状態移行」等へ検索語を変更し、当時解析・古DB・回顧資料を再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の公開リセット恩恵は、設定変更後の **スルー回数天井短縮抽選10.0～45.0%**。
- 短縮当選時は朝一1回目のスパIVチャンスでART確定となるため、設定変更台の朝一価値および設定推測に影響する。

### resetPenalties
- 設定変更で前日の **777Gゲーム数天井進捗**を失う。
- 前日のスルー回数進捗も引継がず朝一短縮抽選へ切り替わるため、深いスルー回数の宵越し価値は失われる。

### resetDetection
- 朝一ステージは設定変更・純電断とも **韓国**で共通のため、ステージ単独で変更判別不可。
- ガックンについて当時解析に「なし？」の記載があるが、同資料自身が過去エンターライズ筐体からの予測と明記しているため、機種固有の確定契約には採用しない。
- 「ガックン/リール/初期出目/朝一/設定変更判別」へ検索語を変更して再探索後も、機種固有の確定ガックン・ランプ・初期出目契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一1回目のスパIVチャンスでARTへ入った場合は短縮当選の可能性があるため設定変更/高設定推測材料になるが、通常抽選でもART当選し得るため確定判別ではない。

### numericResetData
- 設定変更時スルー回数天井短縮当選率: **10.0 / 12.4 / 15.6 / 25.0 / 37.5 / 45.0%（設定1→6）**。
- 短縮当選時: **設定変更後1回目のスパIVチャンスでART確定**。
- 設定変更時低確/高確振り分け: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-08

1. エンターライズ公式 — スーパーストリートファイターIV パチスロエディション
   - https://www.enterrise.co.jp/slot/spsf4/
   - 公式製品存在、特設更新履歴（3/22、3/28、4/4、4/11、4/18）。4/11は演出紹介更新日。
   - reliability: OFFICIAL
2. HAZUSE — スーパーストリートファイターIVパチスロエディション
   - https://hazuse.com/machine/pachislot/5S1463/
   - 導入開始2016-04-18、型式、検定番号、設定別ボーナス/ART、約42G/50枚、機械割、ART基本仕様
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE
3. HAZUSE — 天井/フリーズ
   - https://hazuse.com/machine/pachislot/5S1463/genre/206/
   - 777G天井、10スルー→次回ART確定
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE
4. パチマガスロマガ — 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/12/c-1.php
   - 約41.9G/50枚
   - reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本 — スルー回数天井短縮抽選
   - https://p.hisshobon.jp/machine/2727/1/57820
   - 設定変更時短縮抽選、10.0～45.0%、短縮時初回スパIVチャンスART確定
   - reliability: ANALYSIS_HIGH
6. 期待値見える化 — 天井/ゾーン/朝一リセット
   - https://slotjin.com/zone/supa4/
   - 導入2016-04-18、性能コア、設定変更/電断比較、スルー天井リセットと短縮抽選、ガックン記述の注意
   - reliability: ANALYSIS_HIGH_PERIOD
7. 楽スロ — 設定変更時の特徴
   - https://rakuslo.com/streetfighter4-asaiti.html
   - 設定変更 vs 電源OFFONのゲーム数天井/スルー天井/内部状態/ステージ比較
   - reliability: ANALYSIS_SINGLE_DIRECT_RESET_TABLE
8. イチカツ！ — 朝一設定変更後
   - https://ichikatsu.com/ssf4-reset/
   - 設定変更後短縮抽選10.0～45.0%、初回ボーナスART確定条件
   - reliability: ANALYSIS_SINGLE_PERIOD
9. ちょんぼりすた — スーパーストリートファイター4解析
   - https://chonborista.com/slot/enta-slot/17780/
   - 導入2016-04-18、設定別性能、低確/高確構造
   - reliability: ANALYSIS_SINGLE_PERIOD
10. 5号機クロニクル — エンターライズ5号機一覧
   - https://5goki.com/enterrise
   - 機械割97.6～110.1%照合
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
11. P-WORLD — スーパーストリートファイターIV パチスロエディション
   - https://www.p-world.co.jp/machine/database/8014
   - ART約1.7枚/G、スパIVチャンス30G+α、スパIVアタック20G、ART40G以上
   - reliability: INDUSTRY_DATABASE
12. すろぱちくえすと — 2016年パチスロ導入日一覧
   - https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
   - 4/11群掲載。4/18複数機種別資料との日付競合として保持。
   - reliability: ANALYSIS_SINGLE_PERIOD_LIST
13. 必勝期待値クマぱぱ — スーパーストリートファイター4
   - https://xn--x9ja8p0go69l5jtgfm.com/superstreetfighter4-1904
   - 導入2016-04-18、天井、短縮率、約47G/50枚表記
   - reliability: ANALYSIS_SINGLE_PERIOD

## missingFields
- 設定変更時の低確/高確具体的振り分け
- 本機固有の確定的ガックン/初期出目/ランプ変更判別契約

## conflicts
- `CONFLICT_RELEASE_DATE_2016_04_11_VS_2016_04_18`: すろぱちくえすと年別一覧のみ4/11。HAZUSE・複数機種別当時解析は4/18。公式の4/11は演出紹介更新日。canonicalは4/18。
- `CONFLICT_BASE_41_9_TO_42_VS_47`: パチマガスロマガ/HAZUSE/期待値見える化は約41.9～42G/50枚、必勝期待値クマぱぱは約47G/50枚。canonicalは複数一致の41.9～42G。
- ガックン「なし？」は予測情報のため性能CONFLICTではなく、変更判別契約へ採用しない。

## QA status
- coreStatus: COMPLETE_CORE_WITH_BASE_CONFLICT
- resetBehaviorQA: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_STATE_DISTRIBUTION
- resetRetroactiveQA: NOT_APPLICABLE_NEW_RECORD
