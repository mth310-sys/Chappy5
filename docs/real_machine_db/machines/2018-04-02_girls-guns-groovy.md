# No.1184 ガールズガンズグルービー

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロGirls Guns Groovy
- commonName: ガールズガンズグルービー
- manufacturer: ニューギン
- releaseDateCanonical: 2018-04-02
- generation: 5.9号機 / 5号機
- systemType: A+RT / ボーナス+CZ+ループRT
- formalModelName: `GirlsGunsGroovy-V`
- certificationNumber: `7S0994`
- settings: `1 / 2 / 5 / 6`（4段階）
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`GirlsGunsGroovy-V`、検定番号`7S0994`、導入開始日2018-04-02、メーカー ニューギンを掲載。
- ちょんぼりすた、パチビーも2018-04-02導入で一致。
- PiDEA Xは2018-02-22のニューギン内覧会記事で4月上旬導入予定と報道。
- releaseDateCanonicalは2018-04-02。

## performanceCore

### payoutRateBySetting
- setting1: 98.5%
- setting2: 99.9%
- setting5: 106.8%
- setting6: 111.1%

### initialHitBySetting
BIG:
- setting1: 1/327.7
- setting2: 1/318.1
- setting5: 1/275.4
- setting6: 1/273.1

REG:
- setting1: 1/504.1
- setting2: 1/481.9
- setting5: 1/425.6
- setting6: 1/327.7

ボーナス合成:
- setting1: 1/198.6
- setting2: 1/191.6
- setting5: 1/167.2
- setting6: 1/148.9

### baseGamesPer50
- 約35G/50枚。

### netIncrease
- RT「ガンナーズハイ / パニッシュライブ」: 約0.2枚/G。

### basicPayout
- BIG: 約300枚。
- REG: 約90枚。
- RT: 1セット30G。
- BIG後はCZ「均衡モード」、REG後はCZ「劣勢モード」へ移行。
- CZ「Gバトル」勝利でRT、RT終了後もGバトルを経由し勝利でRT継続。

### ceiling
- 通常ゲーム数天井: 非搭載。

## modeSpecificMinimumData
- A+RTで、ボーナス後CZ→Gバトル→RTという構造。
- RTは1セット30G、純増約0.2枚/G。
- 奇数セット「ガンナーズハイ」、偶数セット「パニッシュライブ」は演出差で出玉性能は同等。
- CZ/Gバトルは通常ゲーム数天井ではない。

## resetBehavior

### settingChangeBehavior
- 天井非搭載のため天井カウンタRESETは`NOT_APPLICABLE`。
- ちょんぼりすたの本機専用朝一表は設定変更時の状態/ステージとも`調査中`。
- 機種名、英字表記、型式、ニューギン、設定変更、リセット、朝一、据え置き、電源OFF ON、CZ、RT、ガックン、有利区間等で再探索したが、設定変更時のCZ/RT状態、成立済みボーナス、開始ステージを固定する解析資料は確認できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 「設定据え置き」を純電源OFF→ONと分けたCZ/RT状態・残G・成立済みボーナス・表示状態の本機固有契約は`UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため天井ゲーム数引継ぎは`NOT_APPLICABLE`。

### powerCycleBehavior
- ちょんぼりすた本機専用朝一表は電源OFF→ON時の状態/ステージとも`調査中`。
- 十分な再探索後も直接契約を固定できず`UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- CZ/RT state on settingChange: `UNVERIFIED_AFTER_RESEARCH`
- CZ/RT state on carryOver: `UNVERIFIED_AFTER_RESEARCH`
- CZ/RT state on powerCycle: `UNVERIFIED_AFTER_RESEARCH`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- reset-specific morning mode: `NONE_CONFIRMED_AFTER_RESEARCH`
- reset-specific CZ mode distribution: `UNVERIFIED_AFTER_RESEARCH`
- 通常ボーナス後にBIGなら均衡、REGなら劣勢へ入る仕様は、設定変更時専用モードではない。

### stateAfterReset
- settingChange CZ/RT state: `UNVERIFIED_AFTER_RESEARCH`
- carryOver CZ/RT state: `UNVERIFIED_AFTER_RESEARCH`
- powerCycle CZ/RT state: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- 本機は5.9号機だが、本機固有の朝一有利区間ランプ/設定変更時有利区間契約を確認資料から固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論から推定転記しない。

### resetBenefits
- 短縮天井: `NOT_APPLICABLE_NO_CEILING`
- 朝一専用のボーナス優遇/RT優遇: `NONE_CONFIRMED_AFTER_RESEARCH`
- 2020年のユーザーコメントには「設定変更時に内部CZスタートではないか」という実戦報告があるが、管理人も未把握としており解析値ではないためcanonical採用しない。`ANECDOTAL_UNVERIFIED_RESET_CZ_START_REPORT`として品質メモのみ保持。

### resetPenalties
- 設定変更専用の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 本機固有のガックン発生条件、初期出目、ランプ等による設定変更/据え置き確定判別は`UNVERIFIED_AFTER_RESEARCH`。
- ボーナス入賞時ランプやBIG/REG中の設定示唆は設定推測要素であり、朝一変更判別には混入しない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetBenefitProbability: `UNVERIFIED_AFTER_RESEARCH`
- gakkunChangeDetectionProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 朝一/設定変更専用の比較可能な初当たり率、CZ開始率、RT開始率、モード振り分け、規定G以内当選率: `UNVERIFIED_AFTER_RESEARCH`。
- 実戦コメント由来の朝一CZ示唆は数値化せず採用しない。

## conflicts
- 主要性能コアで採用を左右するCONFLICTは確認なし。
- PiDEA Xは本文中で「A+ART」と表記する一方、パチビー、ちょんぼりすた、HAZUSE系情報はRTと明示し、1セット30G・約0.2枚/GのRT構造を具体的に説明する。本DBでは具体的ゲーム仕様に基づき`A+RT`をcanonicalとし、PiDEAの`A+ART`表記は`CONFLICT_CLASSIFICATION_LABEL`として保持。
- 朝一内部CZスタート説はユーザー実戦コメントのみで解析裏取りなし。`ANECDOTAL_UNVERIFIED`扱い。

## missingFields
- 設定変更時CZ/RT状態、開始ステージ、成立済みボーナス: `UNVERIFIED_AFTER_RESEARCH`
- 据え置きと純電断を分離したCZ/RT状態: `UNVERIFIED_AFTER_RESEARCH`
- 純電源OFF→ON時CZ/RT状態/ステージ: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有有利区間使用/変更時処理: `UNVERIFIED_AFTER_RESEARCH`
- ガックン/初期出目/ランプ変更判別: `UNVERIFIED_AFTER_RESEARCH`
- 朝一CZ開始率などの公開数値: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — パチスロGirls Guns Groovy
   - https://hazuse.com/machine/pachislot/7S0994/
   - 型式`GirlsGunsGroovy-V`、検定番号`7S0994`、導入2018-04-02、ニューギン。
   - confidence: `ANALYSIS_HIGH`

2. ちょんぼりすた — ガールズガンズグルービー
   - https://chonborista.com/slot/newgin-slot/55074/
   - 導入日、5.9号機、A+RT、約35G/50枚、天井非搭載、設定別BIG/REG/合算/機械割、BIG約300枚、REG約90枚、RT30G/約0.2枚、朝一状態/ステージ調査中。
   - confidence: `ANALYSIS_HIGH`

3. パチビー — パチスロガールズガンズグルービー
   - https://www.pachibee.jp/movies/index/14407
   - 導入2018-04-02、5.9号機RT/CZ/リアルボーナス。
   - confidence: `ANALYSIS_HIGH`

4. PiDEA X — 「大江戸学園」制限時間式の新継続システム／ニューギン
   - https://www.pidea.jp/articles/%E3%80%8C%E5%A4%A7%E6%B1%9F%E6%88%B8%E5%AD%A6%E5%9C%92%E3%80%8D%E5%88%B6%E9%99%90%E6%99%82%E9%96%93%E5%BC%8F%E3%81%AE%E6%96%B0%E7%B6%99%E7%B6%9A%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3
   - 2018-02-22内覧会、BIG300枚、REG約90枚、ボーナス合算1/199〜149、30GのRT/CZ構造、4月上旬導入予定。本文のA+ART分類は他資料とCONFLICTとして保持。
   - confidence: `INDUSTRY`

5. pachislo-data — ガールズガンズグルービー
   - https://pachislo-data.com/newgin/63760
   - 2018-04-02導入予定、ニューギン、天井/スペック/解析整理。
   - confidence: `ANALYSIS_SINGLE`
