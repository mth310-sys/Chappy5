# No.1231 パチスロ ロックマン アビリティ 史上最大の試練

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ロックマン アビリティ 史上最大の試練
- manufacturer: スパイキー
- releaseDateCanonical: 2018-09-18
- generation: 5.9号機
- systemType: A+RT / 技術介入
- formalModelName: `ロックマンアビリティ／ZY`
- certificationNumber: `8S0119`
- settings: `4 / 5 / 6 / H`
- collectedAt: 2026-09-10

## releaseDateEvidence
- すろぱちくえすと、ちょんぼりすたは導入日2018-09-18。
- HAZUSEは導入開始日2018-09-17。
- グリーンべるとは2018-08-22発表記事で「納品は9月予定」。
- `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18` を保持し、複数解析のホール導入日一致から2018-09-18をcanonicalとした。
- confidence: `MULTIPLE_ANALYSIS_CROSSCHECKED_WITH_INDUSTRY_AND_DATE_CONFLICT`。

## identificationEvidence
- HAZUSEで型式 `ロックマンアビリティ／ZY`、検定番号 `8S0119`、メーカー スパイキーを確認。
- グリーンべると当時業界記事でもスパイキー製と確認。

## performanceCore
### payoutRateBySetting
市場掲載値:
- setting4: 96.1%
- setting5: 98.2%
- setting6: 100.2%
- settingH: 102.0%

完全攻略時:
- setting4: 103.0%
- setting5: 105.4%
- setting6: 107.6%
- settingH: 109.0%

### initialHitBySetting
ボーナス合算:
- setting4: 1/218.5
- setting5: 1/209.4
- setting6: 1/195.6
- settingH: 1/184.6

BIG合算（複数解析一致値）:
- setting4: 1/376.6
- setting5: 1/364.1
- setting6: 1/354.2
- settingH: 1/344.9

REG:
- setting4: 1/520.1
- setting5: 1/492.8
- setting6: 1/478.4
- settingH: 1/464.8

### baseGamesPer50
- パチマガスロマガ: setting4 33.5G / setting5 34.5G / setting6 35.5G / settingH 36.5G。
- すろぱちくえすと/ちょんぼりすたの概算は約33G/50枚。
- canonical: `33.5 / 34.5 / 35.5 / 36.5G per 50枚`。

### netIncrease
- RT「ROCK ON BUSTER」純増: 約0.3枚/G。

### basicPayout
- SUPER BIG: 平均約337枚。
- BIG: 約206枚。
- REG: 約57枚。
- RT: 30G / 55G / 80G / 200G。順押しビタ成功80G、失敗30G、逆押しアシスト55G、チャンスマン200G。
- RT終了後はアビリティフィールドへ。アタック目と転落リプレイ比率1:1で、通常のRT再突入期待度約50%。

### ceiling
- ボーナス/RTの通常天井ではなく、通常時300G消化でCZ「アビリティフィールド」突入確定。
- CZからRT突入期待度は約50%。
- 本DBでは `CZ_COUNTER_300G` として保持し、通常ボーナス天井とは分離する。

## modeSpecificMinimumData
- 通常時の状態/モードは「一切ありません」とする解析あり。
- CZ「アビリティフィールド」はボーナス後、RT終了後、通常時300G消化後に突入。
- ボーナス後はアタック目成立が保証されRT突入100%。通常300G後/RT後は約50%。
- 完全再現用の小役・ボーナス同時当選詳細は収集対象外。

## resetBehavior
### settingChangeBehavior
- 通常状態で設定変更してもCZ天井ゲーム数は引き継ぐ。
- RT中 / CZ中 / アビリティアタック中 / ボーナス中に設定変更した場合、見た目は通常ステージだが内部的にはCZ「アビリティフィールド」と同じ状態から開始。
- この特殊リセット状態は朝一狙いに直結するためv0.7必須情報として保持。

### carryOverBehavior
- 据え置き時はCZ天井ゲーム数を引き継ぐ。
- ステージはランダムとする解析表あり。
- 据え置き時に前日RT/CZ/ボーナス状態をそのまま内部継続するかを独立条件として直接固定する資料は不足し、`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- ちょんぼりすたの朝一表では電源OFF→ONでもCZ天井は引き継ぎ、ステージはランダム。
- 純電断時のRT/CZ/ボーナス内部状態そのものの扱いを設定変更と分離して直接固定する追加資料は得られず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- 通常時300GのCZカウンタは設定変更でも引き継ぐ。
- 据え置き/電源OFF→ONでも引き継ぐ資料あり。
- ただしRT・CZ・ボーナス中に設定変更された場合は通常のカウンタ継続ではなく内部CZ状態から開始するため例外扱い。

### ceilingAfterReset
- 設定変更によるCZ天井短縮なし。300Gカウンタを引き継ぐ。
- 数値: `通常時300G消化でCZ確定`。

### modeAfterReset
- 通常時に一般的な内部モードは存在しないとする解析あり。
- リセット専用モード振り分け: `NOT_APPLICABLE_NO_NORMAL_MODE_SYSTEM_CONFIRMED`。

### stateAfterReset
- 通常状態からの設定変更: 通常状態/ステージランダム、CZカウンタ引継ぎ。
- RT/CZ/アビリティアタック/ボーナス中の設定変更: 液晶は通常ステージ、内部CZ状態。

### advantageousSectionReset
- 本機はA+RTで、ART/AT用の有利区間リセットを朝一挙動として直接示す本機固有資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5.9号機ルールから本機固有契約へ推定昇格していない。

### resetBenefits
- 前日RT/CZ/アビリティアタック/ボーナス閉店台を設定変更した場合、朝一が内部CZ状態となるためRT突入チャンスが残る。
- CZではアタック目成立ならRT、転落リプレイ成立なら通常へ。通常のアビリティフィールドのRT期待度は約50%。
- 通常状態の設定変更ではCZカウンタが引き継がれるため、前日300G手前の台は宵越しCZ狙いが成立する。

### resetPenalties
- 設定変更時のみの定量的不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更・据え置き・電源OFF→ONともステージランダムのため、開始ステージ単独では判別材料になりにくい。
- CZカウンタが設定変更でも引き継がれるため、300G到達挙動だけで設定変更/据え置きを区別できない。
- 本機固有のガックン条件・発生率は検索語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- CZカウンタ: 通常時300Gでアビリティフィールド確定。
- RT/CZ/アビリティアタック/ボーナス中設定変更後: 内部アビリティフィールド状態。
- 内部CZの通常RT期待度: 約50%（ボーナス後は100%）。
- リセット専用モード振り分け・ガックン率等: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18`: HAZUSEは9/17導入開始、複数解析は9/18導入。
- `CONFLICT_BIG_REG_SETTING6_H_HAZUSE_VS_MULTIPLE_ANALYSIS`: HAZUSE設定推測欄は設定6 BIG 1/344.9・REG 1/452.0、設定H BIG 1/332.7・REG 1/414.8。一方、ちょんぼりすた/すろぱちくえすと等は設定6 BIG 1/354.2・REG 1/478.4、設定H BIG 1/344.9・REG 1/464.8。ボーナス合算は1/195.6・1/184.6で一致するため、平均せず両系統を保持し、performanceCoreのBIG/REGは複数解析一致値をcanonical表示。
- `MANUFACTURER_LABEL_VARIATION`: 一部二次資料はエンターライズ表記だが、HAZUSE型式DB・グリーンべると当時記事・パチマガスロマガはスパイキーを示すためmanufacturerはスパイキー。

## missingFields
- 純電断時にRT/CZ/ボーナス内部状態を設定変更と分離して示す本機固有契約。
- 据え置き時の前日RT/CZ/ボーナス内部状態継続契約。
- 本機固有の有利区間朝一契約。
- ガックン条件・発生率。

## sources
取得日: 2026-09-10

1. HAZUSE — https://hazuse.com/machine/pachislot/8S0119/
   - 型式 `ロックマンアビリティ／ZY`、検定8S0119、メーカー スパイキー、導入開始2018-09-17、完全攻略機械割、ボーナス/RT仕様、300G CZ。
   - reliability: `ANALYSIS_HIGH_MACHINE_DB`
2. グリーンべると — https://web-greenbelt.jp/00010659/
   - 2018-08-22当時業界記事。スパイキー製A+RT、SBB337枚/BB206枚/RB57枚、通常300G後CZ、RT30/55/80G、RTループ構造。
   - reliability: `INDUSTRY`
3. すろぱちくえすと — https://www.slopachi-quest.com/article/rockman-abilty/
   - 導入2018-09-18、設定4/5/6/H性能、約33G、RT0.3枚/G、300G CZ、設定変更/据え置きCZ天井引継ぎ、RT/CZ/ボーナス中設定変更後の内部CZ状態。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
4. ちょんぼりすた — https://chonborista.com/slot/enta-slot/62583/
   - 導入2018-09-18、通常/完全攻略機械割、ボーナス確率、設定変更/電源OFF→ONのCZ天井引継ぎ、ステージランダム、特殊リセット挙動。
   - reliability: `ANALYSIS_HIGH`
5. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/12/c-2.php
   - 設定別50枚あたり33.5/34.5/35.5/36.5G。
   - reliability: `ANALYSIS_HIGH_ARCHIVE`
6. P-WORLD — https://www.p-world.co.jp/machine/database/8725
   - A+RT、平均337/206/57枚、RT純増約0.3枚/G、30/55/80/200G、CZ/RT構造。
   - reliability: `INDUSTRY_MACHINE_DB`

## researchNotes
- 欠損判定前に `ロックマン アビリティ / ロックマンAbility / ロックマンアビリティ／ZY / 8S0119 / スパイキー / エンターライズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / CZ天井 / RT引継ぎ / ガックン / 有利区間` を組み替えて再探索。
- resetBehaviorはすろぱちくえすととちょんぼりすたで主要契約を照合できた。
- BIG/REGの設定6/HにはHAZUSEと複数解析で競合があるため平均化せずCONFLICTとして保持。
