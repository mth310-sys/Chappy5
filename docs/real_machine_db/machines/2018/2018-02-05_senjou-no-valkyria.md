# No.1170 パチスロ戦場のヴァルキュリア

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ戦場のヴァルキュリア
- manufacturer: タイヨーエレック（サミーブランド展開）
- releaseDateCanonical: 2018-02-05
- generation: 5.9号機
- systemType: A+ART / 有利区間搭載
- formalModelName: `パチスロ戦場のヴァルキュリア／RS`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- collectedAt: 2026-09-10

## releaseDateEvidence
- K-Navi、ちょんぼりすた、すろぱちくえすとが2018-02-05導入で一致。
- 2017-12-26付グリーンべると業界記事は、サミーが2017-12-18に発表し、製造元タイヨーエレック、納品2月上旬予定と報道。
- P-WORLDのメーカー欄はタイヨーエレック。K-Navi/解析サイトはブランド表記としてSammyを使用するため、本DBでは製造元をmanufacturerに採用し注記を残す。

## performanceCore

### payoutRateBySetting
- setting1: 97.5%
- setting2: 98.8%
- setting3: 100.3%
- setting4: 104.0%
- setting5: 107.0%
- setting6: 112.1%
- パチマガスロマガ精密表記: 97.51 / 98.82 / 100.28 / 103.96 / 107.04 / 112.09%

### bonusCombinedBySetting
- setting1: 1/119.8
- setting2: 1/116.4
- setting3: 1/113.6
- setting4: 1/104.2
- setting5: 1/96.5
- setting6: 1/88.4

### artInitialHitBySetting
- setting1: 1/576.8
- setting2: 1/569.5
- setting3: 1/562.8
- setting4: 1/539.5
- setting5: 1/520.0
- setting6Canonical: 1/496.9
- setting6ConflictSource: 1/486.9（ちょんぼりすた）
- 一撃、パチマガスロマガ、期待値見える化が1/496.9系で一致するためcanonicalは496.9。競合値は破棄せず保持。

### bonusDetail
- BIG（赤7）: 1/1489.5 → 1/762.0前後
- MISSION BONUS（白7）: 全設定1/897.8
- 赤REG: 1/304.8 → 1/225.2
- 白REG: 1/304.8 → 1/225.2

### baseGamesPer50
- 約32.0G/50枚

### netIncrease
- ART単体: 約1.0枚/G
- ボーナス込みART純増: 約1.5枚/G
- P-WORLD/業界発表は「ボーナス込み約1.5枚/G」を主要表記。

### basicPayout
- BIG: 252枚
- MISSION BONUS: 70枚
- REG: 42枚
- ART「ガリア戦記」: 初回は上乗せ特化ゾーン「進撃RUSH」から開始、初回平均上乗せ約100G。
- EX-ART「最終決戦」: 1セット20G、最大98%ループ、10セット継続でエンディング。

### ceiling
- `NONE`

## modeSpecificMinimumData
- 通常時に通常 / 高確 / 超高確 / 極高確の内部状態が存在し、ボーナス成立時のART抽選に影響。
- 5.9号機の有利区間搭載機。チェリー等から有利区間へ移行し、公開解析では有利区間中に7セグ右下ドットが点灯。
- ART有利区間は最大到達付近でエンディング移行契機があり、完全再現用の詳細抽選は本DB対象外。

## resetBehavior

### settingChangeBehavior
- 一撃の本機専用設定変更表で、設定変更時は内部状態をクリアして`非有利区間へ`、RT状態をクリアして`非RTへ`移行。
- 液晶ステージはブルール / ランドグリーズ / バリアスから抽選。
- 天井非搭載のため天井ゲーム数リセットは`NOT_APPLICABLE_NO_CEILING`。

### carryOverBehavior
- 「設定据え置き」を純電源OFF→ONと独立条件で直接記載した本機固有の比較表は今回固定できず`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 据え置き一般論から内部状態/RT/有利区間を自動補完しない。

### powerCycleBehavior
- 一撃の本機専用表で純電源OFF→ON時は内部状態を引き継ぎ、RT状態も引き継ぐ。
- 液晶がブルール / ランドグリーズ / バリアスならその3ステージから再抽選、それ以外のステージは引き継ぐ。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- ゲーム数解除モード/天国モード: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 内部状態は設定変更でクリアされ非有利区間へ移行することを直接確認。

### stateAfterReset
- settingChange: `CLEAR_TO_NON_ADVANTAGEOUS_SECTION_AND_NON_RT`
- powerCycle: `CARRYOVER_INTERNAL_STATE_AND_RT`
- carryOverDistinctCondition: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- settingChange: `RESET_TO_NON_ADVANTAGEOUS_SECTION`
- powerCycle: 内部状態引継ぎを直接確認。有利区間そのものの独立文言は本機専用表では「内部状態」で表記されるため、別概念としての断定は行わない。

### resetBenefits
- 天井短縮: `NOT_APPLICABLE_NO_CEILING`
- 設定変更時専用の初当たり優遇/CZ優遇/朝一高確振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetPenalties
- 設定変更により前日の内部状態・RT状態を消去し、非有利区間/非RTから開始する点は、前日状態が有利だった場合には持越しが失われる。
- 固定的な「設定変更ペナルティ率」等の公開数値は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間中はWIN枚数表示7セグ右下ドットが点灯する公開仕様があるため、前日状態との組合せで客側の据え置き推測材料になり得る。ただし朝一の点灯/消灯だけで設定変更を確定できる本機固有契約は確認していない。
- 液晶ステージは設定変更時にも複数候補から抽選され、純電断でも一部再抽選されるため単独で確定判別不可。
- 本機固有のガックン発生条件・発生率は、機種名/型式/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンまで検索語を変えて再探索したが`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時だけ適用されるモード振り分け、短縮天井、初当たり率、CZ率などの比較可能な朝一専用数値は、資料系統を変えて再探索後も`NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間の通常時公開値として、移行後最低5G滞在・平均滞在約20Gという解析は確認したが、これは設定変更専用数値ではないためresetSpecific値には転記しない。

## conflicts
- `CONFLICT_ART_INITIAL_HIT_SETTING6`: 一撃/パチマガスロマガ/期待値見える化は設定6 ART初当たり1/496.9（または丸め同等）、ちょんぼりすたは1/486.9。3系統一致の496.9をcanonicalとし、486.9をsecondary conflictとして保持。
- メーカー表記: P-WORLDおよび業界記事は製造元タイヨーエレック、K-Navi等はSammyブランド表記。本DBでは製造元とブランドを分離して保存。

## sources
取得日: 2026-09-10

1. グリーンべると — 初当りの2回に1回はART300G以上に期待
   - https://web-greenbelt.jp/00010122/
   - 2017-12-18発表、製造元タイヨーエレック、2月上旬納品予定、A+ART、ボーナス込み純増約1.5枚/G、設定1ボーナス合算1/119.8、ボーナス払出条件、初回ART平均100G。
   - confidence: `INDUSTRY`

2. P-WORLD — パチスロ戦場のヴァルキュリア
   - https://www.p-world.co.jp/machine/database/8575
   - メーカー タイヨーエレック、BIG252枚/MISSION70枚/REG42枚、ARTボーナス込み約1.5枚/G、ART基本構造。
   - confidence: `INDUSTRY`

3. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_valkyria/3/
   - 天井非搭載。設定変更時: 内部状態クリア（非有利区間へ）、RTクリア（非RTへ）、液晶3ステージから抽選。電源OFF→ON: 内部状態/RT引継ぎ、液晶は条件別再抽選/引継ぎ。
   - confidence: `ANALYSIS_HIGH`

4. 一撃 — ボーナス確率
   - https://1geki.jp/slot/s_valkyria/1/
   - 設定別ボーナス、ART初当たり1/576.8→1/496.9。
   - confidence: `ANALYSIS_HIGH`

5. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/165/h-1.php
   - 設定別ボーナス合算、ART初当たり、機械割。設定6 ART初当たり1/496.9。
   - confidence: `ANALYSIS_HIGH`

6. ちょんぼりすた — 戦場のヴァルキュリア
   - https://chonborista.com/slot/sammy-slot/52535/
   - 導入2018-02-05、32.0G/50枚、ART単体約1.0枚/G・ボーナス込み1.5枚/G、獲得枚数、天井なし、機械割。設定6 ART初当たりのみ1/486.9で他ソースと競合。
   - confidence: `ANALYSIS_HIGH`

7. K-Navi — パチスロ戦場のヴァルキュリア
   - https://p-kn.com/slot/2939/
   - ホール導入開始2018-02-05、ボーナス合算、機械割、ART基本性能。
   - confidence: `ANALYSIS_HIGH`

8. K-Navi — 2018年2月導入カレンダー
   - https://p-kn.com/calendar/201802/
   - 2018-02-05のパチスロとして本機、乙女マスターズ、新世紀エヴァンゲリオン～まごころを、君に～2を列挙。
   - confidence: `ANALYSIS_HIGH`

9. すろぱちくえすと — 戦場のヴァルキュリア
   - https://www.slopachi-quest.com/article/valkyria-chronicles/
   - 導入2018-02-05、有利区間の通常時仕様、性能/設定判別の照合。
   - confidence: `ANALYSIS_HIGH`

10. 期待値見える化 — 戦場のヴァルキュリア設定判別
   - https://slotjin.com/slot-tool/valkyria/
   - ART初当たり設定1〜6、設定6 1/496.9を別系統照合。
   - confidence: `ANALYSIS_HIGH`

11. atwiki 777town skill wiki — 戦場のヴァルキュリア
   - https://w.atwiki.jp/samita_skill/pages/197.html
   - 型式名`パチスロ戦場のヴァルキュリア／RS`、5.9号機/A+ART、獲得枚数等の後年資料。
   - confidence: `ANALYSIS_SINGLE`

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 設定据え置きを純電断と分離した本機固有契約: `UNVERIFIED_AFTER_RESEARCH`
- ガックン発生条件/確率: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更専用の公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`

## qualityNotes
- ART初当たり設定6の486.9/496.9競合を平均化しない。
- タイヨーエレック製造とSammyブランド表記を混同せず分離。
- 5.9号機一般論ではなく、本機専用設定変更表で確認できた非有利区間/非RTへのクリアと純電断引継ぎのみを確定挙動として保存。
