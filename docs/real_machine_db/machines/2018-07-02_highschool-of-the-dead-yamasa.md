# No.1206 パチスロ学園黙示録ハイスクール・オブ・ザ・デッド

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ学園黙示録ハイスクール・オブ・ザ・デッド
- manufacturer: 山佐
- releaseDateCanonical: 2018-07-02
- generation: 5.9号機 / 5号機
- systemType: A+ART / リアルボーナス+ART / 有利区間搭載世代
- formalModelName: `ハイスクールオブザデッド／CC`
- certificationNumber: `7S1481`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE DATA、K-Navi、ちょんぼりすたで2018-07-02導入が一致。
- Amusement Japanは2018-05-16内覧会記事で「7月上旬」ホール導入予定と報道し、7/2導入資料と整合。
- releaseDate confidence: `ANALYSIS_HIGH / INDUSTRY_SUPPORT`。

## performanceCore

### payoutRateBySetting
- setting1: 97.6%
- setting2: 98.3%
- setting3: 100.5%
- setting4: 103.1%
- setting5: 106.0%
- setting6: 109.2%

### initialHitBySetting
BIG:
- setting1-6共通: 約1/464.8

REG:
- setting1-6共通: 約1/655.4

スクデッドチャージ:
- setting1: 1/3276.8
- setting2: 1/2048.0
- setting3: 1/1489.5
- setting4: 1/1310.7
- setting5: 1/1092.3
- setting6: 1/910.2

ボーナス合算:
- setting1: 1/251.1
- setting2: 1/240.1
- setting3: 1/230.0
- setting4: 1/225.2
- setting5: 1/217.7
- setting6: 1/209.4

ART初当たり:
- setting1: 1/563.4
- setting2: 1/563.2
- setting3: 1/563.0
- setting4: 1/562.0
- setting5: 1/561.8
- setting6: 1/562.4

- パチマガスロマガとちょんぼりすたで主要値が一致。

### baseGamesPer50
- 約34G/50枚。

### netIncrease
- ART純増: 約1.9枚/G（ボーナス込み）。
- ART単体純増を独立した公開値として固定できなかったため、ボーナス込み定義のみ採用。

### basicPayout
- BIG: 約204枚
- REG: 約42枚
- スクデッドチャージ: 約204枚
- ART初当たり時は上乗せ特化ゾーン「アポカリプスラッシュ」から開始し、獲得した上乗せG数+αが基本ART性能となる。

### ceiling
- 通常ゲーム数による天井: `NONE_CONFIRMED / 当時解析では天井非搭載`。
- 一撃の導入前後ページでは「現在調査中」だったが、後年解析のちょんぼりすたでは天井非搭載として整理される。

## modeSpecificMinimumData
- A+ART機。ART「学園黙示録」はゲーム数上乗せ型。
- ART初当たり時は上乗せ特化ゾーン「アポカリプスラッシュ」へ突入。
- 5.9号機の有利区間制約下でARTを管理する世代。
- BIG/REGは基本確率に設定差なし、スクデッドチャージに設定差あり。

## resetBehavior

### settingChangeBehavior
- 当時一撃の2018-06-13版では設定変更時の「状態」「液晶ステージ」はともに`現在調査中`。
- 機種名表記揺れ、正式型式名、山佐、リセット、設定変更、朝一、据え置き、有利区間、ガックン等へ検索語を変更し、当時解析・後年回顧を横断したが、本機固有の設定変更時内部状態・液晶開始ステージを確定する直接資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを設定変更・純電断から独立させ、ART/CZ/内部状態/有利区間状態の保持を明記した本機固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 一撃の当時資料では電源OFF→ON時の「状態」「液晶ステージ」はともに`現在調査中`。
- その後の本機固有直接契約も確認できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- 通常天井非搭載のため、通常天井ゲーム数カウンタは `NOT_APPLICABLE`。
- ART/CZ/有利区間内部の進行G数を設定変更・据え置き・純電断でどう扱うかの低レベル契約は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 朝一専用モード、設定変更専用モード振り分け、リセット専用初当たり優遇を示す公開資料は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時内部状態: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時内部状態: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電源OFF→ON時内部状態: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- 本機は5.9号機A+ARTで有利区間を使用するが、設定変更時・据え置き時・純電源OFF→ON時の本機固有の有利区間ランプ/区間状態契約を直接明記する資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論からの補完は行わない。

### resetBenefits
- 短縮天井、朝一専用高確、リセット専用ART/CZ初当たり上昇などの主要恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更による公開された朝一冷遇・天井延長・初当たり低下などは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン発生条件・発生率、朝一初期出目、液晶ステージ、有利区間ランプによる設定変更/据え置き判別契約は、十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な山佐機のガックン特性や5.9号機一般論は流用していない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificCZBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND`
- morningSpecificPublicHitRate: `PUBLIC_VALUE_NOT_FOUND`

## morningRelatedPublicNumbers
- 設定変更専用モード振り分け、朝一特定G以内当選率、短縮天井、リセット恩恵発生率、ガックン発生率はいずれも再探索後も公開値を確認できず。

## conflicts
- 後年の5号機回顧資料に導入月やBIG獲得枚数、ART初当たり等が本機と整合しない記述があるため採用せず、当時解析・型式一致資料を優先した。
- 特に同名の2013年スパイキー版および2020年「ゴールド」との混同を避け、本レコードは2018年山佐 `ハイスクールオブザデッド／CC` のみを対象とする。

## missingFields
- 設定変更時の内部状態/液晶開始ステージの確定契約。
- 据え置き時のART/CZ/内部状態/有利区間状態の直接契約。
- 純電源OFF→ON時のART/CZ/内部状態/液晶/有利区間状態の直接契約。
- 本機固有の有利区間ランプによる変更判別契約。
- ガックン発生条件・発生率、初期出目による変更判別。
- リセット専用の公開朝一数値。

## sources
取得日: 2026-09-10

1. HAZUSE DATA — パチスロ 学園黙示録ハイスクール・オブ・ザ・デッド
   - https://hazuse.com/machine/pachislot/7S1481/
   - 型式名`ハイスクールオブザデッド／CC`、検定番号`7S1481`、導入2018-07-02、メーカー山佐。
   - confidence: `ANALYSIS_HIGH`
2. Amusement Japan — 山佐「多様な上乗せトリガー搭載」
   - https://amusement-japan.co.jp/article/detail/10000628/
   - 2018-05-16内覧会、山佐、7月上旬ホール導入予定、ART上乗せ特化仕様。
   - confidence: `INDUSTRY`
3. パチマガスロマガ — 基本情報
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/226/a.php
   - 山佐/2018年7月、BIG204枚、REG42枚、ART純増約1.9枚/G（ボーナス込み）、有利区間完走型5.9号機仕様。
   - confidence: `ANALYSIS_HIGH`
4. パチマガスロマガ — ボーナス確率/ART初当たり/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/226/h-1.php
   - 設定別スクデッドチャージ/ボーナス合算/ART初当たり/機械割、BIG・REG全設定共通値。
   - confidence: `ANALYSIS_HIGH`
5. K-Navi — 基本スペック
   - https://p-kn.com/slot/3018/
   - 導入2018-07-02、A+ART、BIG204枚/REG42枚、ART純増約1.9枚/G（ボーナス込み）。
   - confidence: `ANALYSIS_HIGH`
6. ちょんぼりすた — ハイスクールオブザデッド スロット解析
   - https://chonborista.com/slot/yamasa-slot/59085/
   - 導入2018-07-02、A+ART、約34G/50枚、天井非搭載、設定別機械割/ボーナス合算/ART初当たり。
   - confidence: `ANALYSIS_HIGH`
7. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_hotd/3/
   - 最終更新2018-06-13。天井・設定変更時状態/液晶・電源OFF→ON時状態/液晶はいずれも当時`現在調査中`。
   - confidence: `ANALYSIS_HIGH`
8. P-WORLD — 機種情報
   - https://www.p-world.co.jp/machine/database/8665
   - 山佐、A+ART、BIG204枚/REG42枚/スクデッドチャージ204枚、純増約1.9枚/G（ボーナス込み）。
   - confidence: `ANALYSIS_HIGH`
