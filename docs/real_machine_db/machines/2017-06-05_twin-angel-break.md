machineName: パチスロ ツインエンジェルBREAK
manufacturer: サミー
releaseDate: 2017-06-05
recordNumber: 1085
generation: 5号機 / 5.5号機
systemType: A+ART / リアルボーナス併用 / 周期CZ
formalModelName: ツインエンジェルBREAK／ZS
certificationNumber: 7S0115
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `ツインエンジェルBREAK／ZS`、検定番号 `7S0115`、導入開始日2017-06-05、メーカーSammyを確認。
- K-Navi、期待値見える化、当時解析でも2017-06-05導入で一致。
- 2018年の別機種 `A-SLOTツインエンジェルBREAK-A／ZR` と混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.7%|
|2|98.5%|
|3|101.1%|
|4|105.0%|
|5|108.5%|
|6|112.1%|
- 期待値見える化、すろかいで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
|設定|ART初当たり|
|---:|---:|
|1|1/364.6|
|2|1/357.5|
|3|1/338.0|
|4|1/307.5|
|5|1/290.4|
|6|1/270.7|

### ボーナス合算
|設定|ボーナス合算|
|---:|---:|
|1|1/179.1|
|2|1/175.7|
|3|1/165.5|
|4|1/154.2|
|5|1/149.3|
|6|1/144.0|

### BIG / MID
- S-BIG: 全設定共通 1/5957.8前後。
- BIG合成: 1/322.8 / 316.6 / 299.3 / 278.9 / 269.7 / 257.0。
- MID: 1/402.1 / 394.8 / 370.3 / 344.9 / 334.4 / 327.7。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約33G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「エンジェルタイム」単体: 約0.8枚/G。
- ボーナス込み掲載値: 約1.6枚/G。
- 定義を分離して保存。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- S-BIG / BIG: 約203枚。
- MID: 約56枚。
- ART「エンジェルタイム」: 1セット33G、セット継続型・完走型。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は約333Gごとに周期CZ「パトルンルンチャンス」。
- 通常時の周期別ART期待度: 1周期目333G付近20%以上 / 2周期目666G付近50%以上 / 3周期目999G付近100%（ART濃厚）。
- ボーナスまたはARTで周期/天井系進捗はリセットされる通常仕様。
- 内部状態は低確/高確。高確は夕方背景で示唆されるが背景と内部状態は完全リンクではない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_UNUSUAL_PARTIAL_CARRYOVER_AND_PUBLIC_RESET_NUMBERS
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 周期数: RESETし、内部的に**2周期目から開始**。
- 周期間ゲーム数: **CARRYOVER**。前日最終の周期内G数を引き継ぐ。
- RT状態 / RT残りゲーム数: **CARRYOVER**。
- 背景モード: RESELECT。
- 内部状態: 期待値見える化はRESELECTとする一方、一撃2017-06-29時点は「調査中」。後発/別系統直接資料を優先しRESELECTをcanonicalとし、公開時点差を注記。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PUBLICATION_TIME_DIFFERENCE

### carryOverBehavior
- 据え置きでは設定変更処理を行わないため、周期数・周期間G数・RT状態・内部状態を基本CARRYOVERとして扱う。
- 独立した「据え置き」比較表より、設定変更/電源OFF→ON比較表の直接契約を主根拠とする。
reliability: ANALYSIS_HIGH_DERIVED_FROM_DIRECT_COMPARISON_TABLES

### powerCycleBehavior
- 周期数: CARRYOVER。
- 周期間ゲーム数 / 天井進捗: CARRYOVER。
- RT状態 / RT残りゲーム数: CARRYOVER。
- 内部状態: 期待値見える化はCARRYOVER。一撃2017-06-29時点は「調査中」で、公開時点差を保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PUBLICATION_TIME_DIFFERENCE

### gameCounterReset
- settingChange: 周期番号のみ2周期目へRESET/SHIFTするが、**周期内G数はCARRYOVER**。
- carryOver: CARRYOVER。
- powerOffOn: CARRYOVER。
- 単純な「天井G数リセット/引継ぎ」では表現できない特殊型として分離保存。

### ceilingAfterReset
- standardCeiling: 3周期目、約999G付近の周期CZでART濃厚。
- resetCeiling: 設定変更後は2周期目スタートかつ周期内G数を引き継ぐため、前日周期内G数次第で**実質約349〜666G**で3周期目相当へ到達する解析。
- 固定666G天井ではなく、周期内G数CARRYOVERによる可変短縮。

### modeAfterReset
- 周期モード/周期番号: 2周期目から開始。
- 背景モード: RESELECT。
- settingChangeBackgroundDistribution:
  - 設定1・2: 昼70.31% / 夕方29.69%。
  - 設定3・4: 昼59.77% / 夕方40.23%。
  - 設定5・6: 昼50.00% / 夕方50.00%。

### stateAfterReset
- settingChange: RESELECTをcanonical。ただし一撃の初期解析は調査中だったためPUBLICATION_TIME_DIFFERENCEを保持。
- powerOffOn: CARRYOVERをcanonical。同じく一撃初期解析は調査中。
- 背景は内部状態と完全リンクではないため、上記背景振り分けを内部高確率そのものとして転用しない。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 内部的に2周期目から開始するため、通常最大3周期→設定変更後最大2周期へ短縮。
- 周期内G数まで引き継ぐため、実質天井到達は前日状況次第で約349〜666G。
- 設定変更後の最初の周期は通常2周期目相当で、ART期待度50%以上のゾーンに対応。

### resetPenalties
- 前日周期内G数は消えず、一般的な全リセット型のような宵越しG数消失はない。
- 設定変更専用の公開冷遇・不利抽選はNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 設定変更後も周期内G数とRT状態を引き継ぐため、RT移行リプレイ等による確定的変更判別は不可と一撃/HAZUSEが明記。
- 液晶上から内部2周期目開始を直接見抜けない当時解析あり。
- 朝一数Gで夕方へ移行した場合は設定変更可能性が上がるが、背景と内部状態は完全リンクせず確定判別ではない。
- 本機固有の確定ガックン契約は検索語を変えた再探索でも固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_NON_DETERMINISTIC_CLUES; UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetInternalCycleStart: 2周期目。
- resetEffectiveCeilingRangeByCarriedCycleG: 約349〜666G。
- normalCycleARTExpectation: 1周期目20%以上 / 2周期目50%以上 / 3周期目100%。
- resetBackgroundDistribution: 設定1-2 昼70.31/夕29.69%; 設定3-4 昼59.77/夕40.23%; 設定5-6 昼50.00/夕50.00%。

## conflicts
- INTERNAL_STATE_PUBLICATION_TIME_DIFFERENCE: 期待値見える化は設定変更RESELECT/電断CARRYOVER、一撃2017-06-29時点は双方「調査中」。数値競合ではなく解析公開時点差として保持。
- 一部2017カレンダーに本機をA+RTとする表記があるが、当時解析・HAZUSE・K-Navi系資料では2017年機はA+ART。本レコードは2018年 `A-SLOTツインエンジェルBREAK` と分離しA+ARTをcanonicalとする。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for core yardstick values.

## missingFields
- deterministic gakkun reset clue: UNVERIFIED_AFTER_RESEARCH
- official manufacturer page with full setting table retained online: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. HAZUSE 基本/型式 — https://hazuse.com/machine/pachislot/7S0115/genre/209/
2. HAZUSE 設定変更時挙動 — https://hazuse.com/machine/pachislot/7S0115/genre/208/
3. K-Navi — https://p-kn.com/slot/2785/
4. 一撃 天井/設定変更 — https://1geki.jp/slot/s_twinangel_break/3/
5. 期待値見える化 — https://slotjin.com/zone/twinangelbreak/
6. すろかい — https://slotkaiseki.hatenablog.com/entry/break
7. 2017導入機種まとめ — https://squid-and-ball.net/archives/776
8. 2017新台カレンダー — https://slotnews777.blog.fc2.com/blog-entry-3121.html
