machineName: SLOTアカギ～闇に降り立った天才～
manufacturer: メーシー / UNIVERSAL ENTERTAINMENT group
releaseDate: 2017-04-24
recordNumber: 1071
generation: 5号機 / 5.5号機
systemType: A+ART / 周期抽選併用 / セット継続型ART
formalModelName: SLOTアカギ／DA
certificationNumber: 6S1605
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2017-04-24、メーカー「メーシー」、型式名 `SLOTアカギ／DA`、検定番号 `6S1605` を確認。
- K-Navi、パチビー、DMMぱちタウン、ちょんぼりすた、モゲスロも2017-04-24導入で一致。
- メーカー系列表記はメーシー。DMMはメーカー名をメーシーとして掲載し、ユニバーサルエンターテインメント系列機として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY_AND_RELEASE; INDUSTRY_FOR_MODEL_METADATA

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.3% |
| 2 | 99.8% |
| 3 | 102.1% |
| 4 | 106.8% |
| 5 | 110.5% |
| 6 | 119.2% |
- K-Navi、HAZUSE系解析、スロパチクエスト等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
| 設定 | ART |
|---:|---:|
| 1 | 1/391.7 |
| 2 | 1/361.6 |
| 3 | 1/320.0 |
| 4 | 1/288.9 |
| 5 | 1/240.1 |
| 6 | 1/191.8 |

### BIG
| 設定 | BIG |
|---:|---:|
| 1 | 1/606.8 |
| 2 | 1/606.8 |
| 3 | 1/606.8 |
| 4 | 1/546.1 |
| 5 | 1/546.1 |
| 6 | 1/455.1 |

### プレミアムボーナス「狂気の刻」
- 全設定共通: 1/32768.0。
- HAZUSEの精密表とスロパチクエストで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: 約36G/50枚。
- HAZUSE: 約36G。
- 当時スペック記事: 約36.0〜36.3G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「鷲巣麻雀」単体: 約1.64枚/G。
- ボーナス込み: 約2.0枚/G。
- パチビー、P-WORLD、DMM、HAZUSE系で一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 204枚。
- プレミアムボーナス「狂気の刻」: 24枚。
- ART「鷲巣麻雀」: 1セット平均約35G、継続率50〜80% + 自力継続 + セットストック。
- エピソードストーリー: 30G固定。ARTストック高モードとして公開されているが、内部抽選詳細はSCOPE_EXCLUDED。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: BIG＆ART間999G消化で「決」パートへ移行し、5G消化後にART。
- 通常時はストーリー単位の周期抽選を採用。「起・承・転」は16〜39G、「決」は5G固定。
- 1・4・7・10…の「3周期ごと+1」周期はストーリー進行が若干優遇されるとの解析あり。ただしリセット専用数値ではないため詳細振り分けはSCOPE_EXCLUDED。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_CORE_RESET_CONTRACT_MULTI_SOURCE_WITH_DIRECT_CARRYOVER_GAP
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET。
- 周期: RESET。
- 朝一通常ステージ: 南郷ステージ。
- 設定変更専用の天井短縮G数は確認できず、通常999G天井のまま扱う。
- 設定変更時の専用モード振り分け、専用高確移行率、専用ART/CZ優遇数値は検索語・資料系統変更後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_AND_PERIOD_RESET; UNVERIFIED_FOR_NUMERIC_MODE_STATE_DISTRIBUTION

### carryOverBehavior
- 「据え置き」と明記した本機固有の独立比較表は今回直接固定できず、`UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- 純電源OFF→ONでは天井・周期引継ぎが複数解析で一致するが、設定据え置きの全状態契約へ機械的に転記しない。
reliability: UNVERIFIED_DIRECT_FOR_FULL_STAY_CONTRACT

### powerCycleBehavior
- 純電源OFF→ON:
  - 天井: CARRYOVER。
  - 周期: CARRYOVER。
  - 通常ステージ: 原則南郷ステージ。
- 例外として、電源OFFから4時間以内、または「凌ぎの刻」まで残り3G以下の場合はステージを引継ぐとの当時解析あり。
- その他の内部状態の純電断契約は直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_PERIOD_AND_STAGE_RULE

### gameCounterReset
- 基準: BIG＆ART間ゲーム数。
- settingChange: RESET。
- powerCycle: CARRYOVER。
- carryOver: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- 通常天井: BIG＆ART間999G。
- 設定変更後の固定短縮天井・短縮振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING; UNVERIFIED_FOR_RESET_SHORTENING

### modeAfterReset
- 周期: 設定変更でRESET、純電断でCARRYOVER。
- 朝一専用モード名・モード振り分け数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時の全周期マップ・書き換え抽選はSCOPE_EXCLUDED。
reliability: ANALYSIS_HIGH_FOR_PERIOD_RESET_VS_CARRYOVER

### stateAfterReset
- 朝一ステージは原則南郷ステージ。
- 設定変更時の内部高確/低確等の初期振り分けは、機種名/型式/メーシー/ユニバーサル + 設定変更/朝一/リセット/高確/状態/モードで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_VISIBLE_STAGE; UNVERIFIED_FOR_INTERNAL_STATE_DISTRIBUTION

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 周期を1周期目から再スタートするため、通常の「1・4・7・10…」周期優遇系列の先頭に戻る。ただし朝一専用の追加数値恩恵は確認できない。
- 設定変更専用短縮天井・初当たり優遇率: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_PERIOD_RESTART; UNVERIFIED_FOR_ADDITIONAL_NUMERIC_BENEFIT

### resetPenalties
- 前日のBIG＆ART間天井進捗と周期進捗は設定変更で消去される。
- 設定変更専用の追加不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### resetDetection
- 前日最終G/周期情報が把握できる場合、当日天井・周期進行から変更/据え置き推測材料になり得る。
- 設定変更・通常の長時間電断とも原則南郷ステージ開始のため、南郷ステージ単独では変更確定材料にならない。
- 電源OFFから4時間以内または凌ぎの刻まで残り3G以下ではステージ引継ぎ例外があるため、朝一ステージ判別は運用条件の影響を受ける。
- 本機固有のガックン、初期出目、ランプ等の確定的変更判別は、表記揺れ/型式名/メーカー名 + ガックン/リール/朝一/据え置き/電源OFF ONで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_COUNTER_PERIOD_INFERENCE; UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetCeiling: 999G (通常天井と同じ。設定変更専用短縮値は確認なし)
- resetPeriod: 1周期目から再開
- resetStage: 南郷ステージ
- powerCycleStageException: 電源OFFから4時間以内、または凌ぎの刻まで残り3G以下の場合はステージ引継ぎ
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## dataQualityNotes
- 機械割は98.3〜119.2%で複数解析一致。
- HAZUSE精密値を初当たりcanonicalとし、他資料の1/392・362・320・289・240・192は丸め値として整合。
- 50枚ベースは約36G。単一当時スペック記事に約36.0〜36.3Gの幅表記があるため代表値36Gで保持。
- ART純増は「単体1.64枚/G」と「ボーナス込み2.0枚/G」を別定義で保持。
- 一部当時業界記事に「納期5月7日(日)〜」表記があるが、複数の導入DB・攻略資料は2017-04-24導入で一致するため、納期表記をホール全国導入日の代替にはしない。
- 据え置きの全状態契約は純電断契約から推測転記していない。

## conflicts
- NONE_MATERIAL_NUMERIC_CONFLICT_CONFIRMED_FOR_CORE.
- DELIVERY_NOTE_2017_05_07_EXISTS_BUT_NOT_USED_AS_RELEASE_DATE_CONFLICT_WITH_MULTI_SOURCE_2017_04_24.

## missingFields
- carryOverBehavior full direct contract: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH
- setting-change internal state numeric distribution: UNVERIFIED_AFTER_RESEARCH
- reset-specific ceiling shortening distribution: NONE_CONFIRMED_AFTER_RESEARCH
- machine-specific gakkun contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. HAZUSE — SLOT アカギ～闇に降り立った天才～
   - https://hazuse.com/machine/pachislot/6S1605/
   - 型式、検定番号、導入日、BIG/ART確率、ベース、天井、ART基本性能。
2. K-Navi — SLOTアカギ～闇に降り立った天才～
   - https://p-kn.com/slot/2771/
   - 導入日、機械割、ボーナス+ART合算。
3. パチビー — SLOTアカギ～闇に降り立った天才～
   - https://www.pachibee.jp/machines/index/217030008
   - 導入日、ART純増、基本獲得、天井。
4. DMMぱちタウン — SLOTアカギ～闇に降り立った天才～
   - https://p-town.dmm.com/machines/2834/recommend
   - 型式、メーカー、導入日、ART単体純増。
5. ちょんぼりすた — アカギ スロット新台
   - https://chonborista.com/slot/universal-slot/35172/
   - 天井、周期、朝イチ/リセット比較表、南郷ステージ、電断4時間/凌ぎの刻例外。
6. スロット解析情報～すろかい～ — パチスロ アカギ 闇に降り立った天才 解析情報
   - https://slotkaiseki.hatenablog.com/entry/akagi
   - 当時解析、設定変更時天井RESET、基本スペック。
7. スロパチクエスト — アカギ 解析まとめ
   - https://www.slopachi-quest.com/article/akagi-yami/
   - BIG/ART初当たり精密値のクロスチェック。
8. P-WORLD — SLOTアカギ～闇に降り立った天才～
   - https://www.p-world.co.jp/machine/database/8339
   - ART/ボーナス基本性能、天井。
9. モゲスロ — 2017年新台スロット導入日カレンダー
   - https://moge-site.com/new-slot2017
   - 2017-04-24群がアカギ1機掲載であることを同日監査に使用。
10. パチンコ・パチスロ.com — 当時スペック記事
   - https://pachinkopachisro.com/archives/49744501.html
   - 初当たり精密値、ベース36.0〜36.3G、納期5/7表記。導入日のcanonicalには使用しない。
