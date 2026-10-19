machineName: パチスロ ラストエグザイル-銀翼のファム-
manufacturer: オーイズミ
releaseDate: 2017-05-22
recordNumber: 1082
generation: 5号機 / 5.5号機
systemType: A+ART+AT / CZ経由 / リアルボーナス併用
formalModelName: パチスロラストエグザイル銀翼のファム／VX
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT

## identity
- オーイズミ公式製品ページで本機の存在・メーカーを確認。
- パチビー、ちょんぼりすた、当時新台カレンダーで2017-05-22導入が一致。
- 型式名は複数の中古実機流通資料で `パチスロラストエグザイル銀翼のファム／VX` と一致。公的検定番号は、機種名・VX・オーイズミ・検定番号・6S等へ検索語を変えた再探索でも直接固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: OFFICIAL_FOR_MANUFACTURER_AND_PRODUCT; ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE_DATE; ANALYSIS_SINGLE_TO_MULTI_SOURCE_FOR_FORMAL_MODEL_NAME; UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.8%|
|2|98.7%|
|3|101.2%|
|4|103.8%|
|5|106.2%|
|6|110.0%|
- ちょんぼりすた等の解析資料で確認。
reliability: ANALYSIS_HIGH

## initialHitBySetting
### ART初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/539.5|
|2|1/480.2|
|3|1/503.7|
|4|1/405.1|
|5|1/444.7|
|6|1/356.0|

### ボーナス合算
|設定|ボーナス合算|
|---:|---:|
|1|1/230.0|
|2|1/226.0|
|3|1/217.7|
|4|1/214.2|
|5|1/206.1|
|6|1/197.4|
- ちょんぼりすたで設定別精密値を確認。別解析では丸め値も確認し、定義差の範囲として扱う。
reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約34G/50枚。
- ちょんぼりすたで直接確認。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「EXILE RUSH」単体: 約1.5枚/G。
- ボーナス込み: 約1.9枚/G。
- パチビー、ちょんぼりすた、P-WORLDでART純増約1.5枚/Gを確認。ボーナス込み値は定義を分離して保存。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 青7BIG: 204枚。
- 赤7BIG / 白7BIG: 平均152枚。
- REG / ヴェスパボーナス: 平均61枚。
- 超弩級EXILE RUSH: 448枚 + ARTストック抽選。
- ART「EXILE RUSH」: 初期ゲーム数決定OVER BOOST後、40G以上。OVER BOOSTの平均上乗せは80G以上と解析される。
- CZ「インペトゥスチャレンジ」: 最大15G、ART期待度約33%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ARTはゲーム数上乗せ型。初当たり時はOVER BOOSTで初期G数を決定し、その後EXILE RUSHへ。
- 防衛モードはART中の上乗せ高確率状態としてAT状態を利用する特殊構成。
- 通常時には低確 / 通常 / 高確 / 超高確の内部状態がありART直撃抽選へ影響する。
- 通常時のゲーム数天井は非搭載。
- 通常モード移行率、小役別全状態移行率、ART中詳細抽選等は物差し用途外のため収集しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NO_PUBLIC_DETERMINISTIC_RESET_CONTRACT_FOUND
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 本機は通常時ゲーム数天井非搭載のため、設定変更による天井ゲーム数リセット/短縮はNOT_APPLICABLE。
- 設定変更時の低確/通常/高確/超高確の初期状態振り分け、CZ/ART専用朝一モード、固定朝一恩恵については、機種名・型式VX・オーイズミ・設定変更・リセット・朝一・状態・モード等へ検索語を変えて再探索したが、直接公開契約を固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING; UNVERIFIED_FOR_STATE_AND_MODE_INITIALIZATION

### carryOverBehavior
- 据え置き時の内部状態、前日状態、ART関連ストック等について本機固有の公開比較表を直接固定できずUNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH。
- 天井非搭載のため宵越し天井進捗という比較項目自体はNOT_APPLICABLE。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ON時の内部状態・液晶ステージ・ストック等について、本機固有の独立契約を直接固定できずUNVERIFIED_AFTER_RESEARCH。
- 設定変更と純電断を一般的な5号機挙動から推定して補完しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 通常時ゲーム数天井: NOT_APPLICABLE_NO_CEILING。
- ART/CZの通常時周期天井: NOT_APPLICABLE_NO_PUBLIC_PERIOD_CEILING。

### ceilingAfterReset
- 通常天井自体が非搭載。
- リセット専用短縮天井: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH。

### modeAfterReset
- 設定変更専用モード・朝一専用モード振り分け: UNVERIFIED_AFTER_RESEARCH。
- 通常時内部状態は4段階存在するが、設定変更時の初期状態振り分けを示す公開値は固定できない。

### stateAfterReset
- 設定変更時の低確/通常/高確/超高確振り分け: UNVERIFIED_AFTER_RESEARCH。
- 据え置き/純電断時の状態引継ぎ: UNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 天井非搭載のため、天井短縮という朝一恩恵はない。
- 設定変更専用のART/CZ確定、高確スタート率、固定ゲーム数以内当選率等の公開朝一数値はNONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 天井進捗消滅による宵越し不利はNOT_APPLICABLE_NO_CEILING。
- その他、設定変更専用の明確な不利要素はNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 本機固有のガックン、初期出目、ステージ固定、ランプ/液晶による決定的な変更判別契約は、機種名・VX・オーイズミ・設定変更・リセット・朝一・据え置き・ガックン等へ再探索しても固定できずUNVERIFIED_AFTER_RESEARCH。
- オーイズミ機一般論から推定しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### numericResetData
- standardCeiling: NONE
- resetShortenedCeiling: NOT_APPLICABLE
- resetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- resetStateDistribution: UNVERIFIED_AFTER_RESEARCH
- resetBenefitProbability: NONE_CONFIRMED_AFTER_RESEARCH
- deterministicResetDetectionProbability: UNVERIFIED_AFTER_RESEARCH

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for core yardstick values.
- ART純増約1.5枚/Gとボーナス込み約1.9枚/Gは競合ではなく定義差として分離。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- deterministic setting-change state/mode initialization: UNVERIFIED_AFTER_RESEARCH
- direct carry-over contract for internal state: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle internal-state contract: UNVERIFIED_AFTER_RESEARCH
- deterministic gakkun/display reset clue: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. オーイズミ公式 — https://www.oizumi.co.jp/machine/last_ex/about.html
2. パチビー — https://www.pachibee.jp/machines/reach/217040010
3. ちょんぼりすた — https://chonborista.com/slot/oizumi-slot/35291/
4. すろぱちくえすと — https://www.slopachi-quest.com/article/lastexile/
5. P-WORLD — https://www.p-world.co.jp/machine/database/8318
6. 新台スロット情報2017年度カレンダー — https://slotnews777.blog.fc2.com/blog-entry-3121.html
7. 江戸スロ中古実機資料（型式名） — https://edoslot.net/smp/item/famu.html
8. 中一商事/Yahoo!中古実機資料（型式名） — https://store.shopping.yahoo.co.jp/nakaiticom/2001.html
9. スロットキングダム中古実機資料（型式名） — https://slot-kingdam.com/SHOP/rasuegu.html
