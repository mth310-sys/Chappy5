machineName: クイーンジャックネオ
manufacturer: 岡崎産業
releaseDate: 2016-08-22
recordNumber: 1001
generation: 5号機 / 5.5号機期
systemType: ノーマル / 完全告知
formalModelName: クイーンジャックネオ/Q1
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ALL7と複数解析資料で2016-08-22導入が一致。
- P-WORLDでメーカー岡崎産業、5号機ノーマルタイプ・完全告知を確認。
- 型式名 `クイーンジャックネオ/Q1` は中古実機資料および当時の検定通過記事で照合。
- 検定番号そのものは型式名・メーカー名・Q1・検定番号等へ検索語を変更して再探索したが今回固定できず、推測補完しない。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 98.4% |
| 3 | 99.8% |
| 4 | 103.4% |
| 5 | 106.5% |
| 6 | 110.0% |
- 5号機クロニクル、ゆうべる、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
| 設定 | BIG |
|---:|---:|
| 1 | 1/295.21 |
| 2 | 1/289.98 |
| 3 | 1/282.48 |
| 4 | 1/266.41 |
| 5 | 1/252.06 |
| 6 | 1/240.94 |

### REG
| 設定 | REG |
|---:|---:|
| 1 | 1/356.17 |
| 2 | 1/337.81 |
| 3 | 1/318.14 |
| 4 | 1/287.44 |
| 5 | 1/270.81 |
| 6 | 1/240.94 |

### ボーナス合算
- 設定1: 1/161.42
- 設定2: 1/156.04
- 設定3: 1/149.63
- 設定4: 1/138.26
- 設定5: 1/130.55
- 設定6: 1/120.47
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約35G/50枚**。
- ゆうべる掲載の1K回転数約35Gを採用。
reliability: ANALYSIS_SINGLE

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE

## basicPayout
- BIG BONUS: **312枚**。
- REG BONUS: **104枚**。
- P-WORLDで直接確認。
reliability: INDUSTRY

## modeSpecificMinimumData
- AT/ART非搭載のノーマルタイプ。
- 通常時ゲーム数天井・CZ天井・ART/ATモードは **NOT_APPLICABLE**。
- 有利区間制度導入前。
- ボーナス4種は別フラグ。完全告知機で、告知音後にデジタル表示でボーナス種別を示す。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NONAPPLICABLE_FIELDS
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 天井・AT/ART・通常時ゲーム数モードを持たないため、設定変更による天井リセット/モード再抽選は **NOT_APPLICABLE**。
- 設定変更時にのみ発生する専用CZ、短縮天井、朝一専用モード等は、表記揺れ・型式名・岡崎産業・設定変更・リセット・朝一・据え置き・ガックン等を組み替えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### carryOverBehavior
- 天井・通常時ゲーム数モードは非搭載のため引継ぎ対象なし。
- ボーナス成立状態を跨ぐ特殊運用など、実機完全再現に属する内部状態処理は収集対象外。

### powerCycleBehavior
- 純電源OFF→ONで引き継ぐべき天井/通常時モードは非搭載。
- 本機固有のランプ・リール・告知状態等の純電断契約は、直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常時ゲーム数天井: **NOT_APPLICABLE**。

### ceilingAfterReset
- 天井非搭載のノーマル機として **NOT_APPLICABLE**。
- 設定変更専用短縮天井: **NONE**。

### modeAfterReset
- 通常時ゲーム数モード/朝一専用モード: **NOT_APPLICABLE / NONE_CONFIRMED**。

### stateAfterReset
- 長期のAT/ART内部状態は非搭載。
- 本機固有の設定変更時のみの内部状態抽選は **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 短縮天井、朝一専用高確、専用CZ、専用初当たり優遇などは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更により失われる天井進捗・AT/ARTモードは非搭載。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、告知ランプ、デジタル表示等による確定的設定変更判別は、検索語・資料系統を変更して再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一般的な岡崎筐体挙動からの推測は採用しない。

### numericResetData
- 設定変更時モード振り分け: NOT_APPLICABLE
- 短縮天井: NOT_APPLICABLE
- 朝一一定G以内当選率/専用恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## dataQualityNotes
- 性能コアは複数解析系統で一致しており高信頼。
- BIG/REGは丸め値（1/295等）ではなく、すろぱちくえすとの精密値をcanonicalとし、ゆうべるの整数丸め値は一致確認用に使用。
- 型式名 `クイーンジャックネオ/Q1` は複数資料で確認できたが、検定番号は今回固定できなかった。
- resetBehaviorは「情報がない」だけでなく、ノーマル機として非該当な項目と、再探索後も本機固有資料がない項目を分けた。

## conflicts
- NONE_CONFIRMED_FOR_CORE_VALUES

## sources
取得日: 2026-09-08

1. ALL7.jp — 2016年8月導入予定一覧
   - https://www.all7.jp/plans/index/2016/08
   - クイーンジャックネオ / 岡崎産業 / 導入予定2016-08-22
   - reliability: INDUSTRY
2. P-WORLD — クイーンジャックネオ
   - https://www.p-world.co.jp/machine/database/8102
   - 岡崎産業、5号機ノーマル・完全告知、BIG312枚、REG104枚
   - reliability: INDUSTRY
3. 5号機クロニクル — 岡崎産業5号機全機種一覧
   - https://5goki.com/okazaki
   - 2016/8、設定別機械割96.7〜110.0%
   - reliability: ANALYSIS_HIGH_RETROSPECTIVE
4. ゆうべるのパチスロ勝利の方程式 — クイーンジャックネオ
   - https://yuberu-777.com/queenjackneo-kaiseki/
   - 導入2016-08-22、約35G/50枚、設定別BIG/REG/合算/機械割
   - reliability: ANALYSIS_SINGLE
5. すろぱちくえすと — クイーンジャックネオ 設定判別
   - https://www.slopachi-quest.com/article/queen-jack-neo-settei/
   - 精密BIG/REG/合算、設定別機械割
   - reliability: ANALYSIS_HIGH
6. ぱちんこドキュメント — 岡崎「クイーンジャックネオ」導入日決定
   - https://pachinkolist.com/archives/48918331.html
   - 2016-06-23当時記事、クイーンジャックネオ/Q1検定通過、納品8月下旬
   - reliability: INDUSTRY_SECONDARY
7. イニシャルP — クイーンジャックネオ中古実機
   - https://initialp.cart.fc2.com/ca43/2464/p-r43-s/
   - 型式名 `クイーンジャックネオ/Q1`
   - reliability: SECONDARY_HARDWARE_REFERENCE

## missingFields
- certificationNumber
- 本機固有の純電源OFF→ON時のリール/告知表示状態契約
- 本機固有の確定的設定変更判別

## QA note
- 性能コアとv0.7 resetBehaviorを収録。
- ノーマル機につき天井・長期モード・有利区間関連は非該当。
- 次は同日群の `クレアの秘宝伝～眠りの塔とめざめの石～` を処理する。
