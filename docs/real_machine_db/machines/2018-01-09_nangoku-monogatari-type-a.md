# No.1166 南国物語 TYPE-A

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 南国物語 TYPE-A
- manufacturer: オリンピア
- releaseDateCanonical: 2018-01-09
- generation: 5号機
- systemType: ノーマルA / 完全告知 / 4段階設定
- formalModelName: `南国物語Type-A／F1`
- certificationNumber: `7S1020`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは導入開始日2018-01-09、型式`南国物語Type-A／F1`、検定番号`7S1020`、メーカー オリンピアを掲載。
- K-Navi、ちょんぼりすたも2018-01-09で一致。
- 2018年導入カレンダー2系統で同日群は本機とコードギアスR2 C.C.ver.の2機種として照合。

## performanceCore

### settingStructure
- settings: 1 / 2 / 5 / 6（4段階）

### payoutRateBySetting
- setting1: 98.1%
- setting2: 101.1%
- setting5: 106.2%
- setting6: 112.2%
- 公開値は完全攻略時表記。

### bigBonusBySetting
- setting1: 1/268.6
- setting2: 1/257.0
- setting5: 1/237.4
- setting6: 1/217.7

### regularBonusBySetting
- setting1: 1/496.5
- setting2: 1/455.1
- setting5: 1/399.6
- setting6: 1/346.8

### bonusCombinedBySetting
- setting1: 1/174.3
- setting2: 1/164.3
- setting5: 1/148.9
- setting6: 1/133.7

### baseGamesPer50
- 約34.3〜36.5G/50枚（設定1〜6範囲）
- ちょんぼりすたの概算表記は約34G/50枚。定義差として精密範囲をcanonicalに保持。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`
- RT/AT/ART非搭載。

### basicPayout
- BIG: 最大312枚
- REG: 最大117枚
- HAZUSE/P-WORLDが312/117枚で一致。
- 後年5号機クロニクルは311/116枚としており、`CONFLICT_SECONDARY_PAYOUT_311_116_VS_312_117`として保持。平均しない。

### ceiling
- `NONE`
- 天井非搭載。

## modeSpecificMinimumData
- 完全告知の純ノーマルAタイプ。
- 告知モードはキュイン/蝶々ランプ/サプライズ/ミックスの4種。
- RT等の付加機能なし。

## resetBehavior

### settingChangeBehavior
- 天井非搭載のためゲーム数天井は`NOT_APPLICABLE`。
- 公開される朝一関連挙動として、BIG中BGM示唆に用いる**ボーナス回数カウンタは設定変更時に0へリセット**される。
- 高確/低確/CZ/RT等の内部状態はゲーム性上`NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`。

### carryOverBehavior
- 天井非搭載のため前日ゲーム数持越し狙いは`NOT_APPLICABLE_NO_CEILING`。
- 純ノーマル機で朝一に持ち越すモード/状態は確認されない。
- ボーナス回数カウンタは翌朝の電源入切で0になるため、前日回数の持越しはしない。

### powerCycleBehavior
- **電源OFF→ONのみでもボーナス回数カウンタは0へリセット**。
- 設定変更時と純電断時の双方で同カウンタが0になるため、この挙動単独では変更判別不可。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- AT/ART系モード・朝一専用天国は`NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 高確/低確/CZ/RT等は`NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`。

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 純ノーマルAタイプとして公開されており、朝一客AIに意味のある有利区間リセット恩恵/判別契約は確認されない。規格一般論で補完しない。

### resetBenefits
- 天井短縮・朝一高確・初当たり優遇は`NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一からボーナス回数が0になるため、3回目/7回目BIGのBGM示唆カウントを当日単位で利用できるが、これは設定変更専用恩恵ではなく純電断でも同じ。

### resetPenalties
- 設定変更固有の主要不利要素は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ボーナス回数カウンタは設定変更・純電断の双方で0になるため変更判別には使えない。
- 本機固有のガックン発生条件/確率、初期出目・ランプ等による決定的変更判別は、機種名/型式/メーカー/「設定変更」「リセット」「朝一」「据え置き」「ガックン」を変えて再探索後も固定できず`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- bonusCountAfterSettingChange: `0`
- bonusCountAfterPowerCycle: `0`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- BIG中BGMはボーナス3回目または7回目で初代BGMへ変化すると設定2以上確定とされる。
- ボーナス回数は設定変更・電源入切とも0からカウントされるため、朝一当日カウントとして利用可能。
- このBGM示唆の設定別詳細振り分けは実機完全再現寄りのため本DBの性能コアには収集しない。

## conflicts
- `CONFLICT_SECONDARY_PAYOUT_311_116_VS_312_117`: HAZUSE/P-WORLDはBIG最大312枚・REG最大117枚。5号機クロニクルは311/116枚。一次寄りの配当表と複数資料一致を優先し312/117枚をcanonical、競合値は保持。
- 一部後年5.9号機一覧に本機の導入日・スペックが別機と混線した誤記が見られるため、HAZUSE/K-Navi/当時解析を優先。

## sources
取得日: 2026-09-10

1. HAZUSE — 南国物語 TYPE-A
   - https://hazuse.com/machine/pachislot/7S1020/
   - 導入2018-01-09、オリンピア、型式`南国物語Type-A／F1`、検定番号`7S1020`、設定別BIG/REG/合算、34.3〜36.5G/50枚、完全攻略機械割、312/117枚。
   - confidence: `ANALYSIS_HIGH`

2. K-Navi — 南国物語 TYPE-A
   - https://p-kn.com/slot/2924/
   - 導入2018-01-09、ノーマルタイプ、設定別BIG/REG/合算。
   - confidence: `ANALYSIS_HIGH`

3. ちょんぼりすた — 南国物語Type-A
   - https://chonborista.com/slot/orinpia-slot/49902/
   - 導入2018-01-09、約34G/50枚、天井なし、4段階設定、設定別ボーナス確率/完全攻略出玉率。
   - confidence: `ANALYSIS_HIGH`

4. P-WORLD — 南国物語TYPE-A
   - https://www.p-world.co.jp/machine/database/8536
   - オリンピア、ノーマル完全告知、BIG最大312枚/REG最大117枚。
   - confidence: `INDUSTRY`

5. パチマガスロマガ — 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/136/c.php
   - 50枚あたり34.3〜36.5G。
   - confidence: `ANALYSIS_HIGH`

6. パチマガスロマガ — ゲーム性
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/136/l.php
   - 完全告知ノーマル、RT等の付加機能なし。
   - confidence: `ANALYSIS_HIGH`

7. スロがち — 南国物語タイプA
   - https://slogati.com/nangoku-a/
   - 2018-01-09、34.3〜36.5G/50枚、天井なし。設定変更・電源入切ともボーナス回数が0へリセットされる朝一挙動。
   - confidence: `ANALYSIS_SINGLE`

8. 5号機クロニクル — 平和＆オリンピア
   - https://5goki.com/heiwa-olympia
   - 98.1/101.1/106.2/112.2%、獲得枚数311/116枚。獲得枚数CONFLICT監査に使用。
   - confidence: `ANALYSIS_SINGLE_RETROSPECTIVE`

9. 真パチスロ備忘録 — 2018年導入日一覧
   - https://sin-surobi.com/dounyubi/23041/
   - 1/9群をコードギアスR2 C.C.Ver / 南国物語Aタイプの2機種として掲載。
   - confidence: `ANALYSIS_SINGLE_CALENDAR`

10. スロットコレクション 2-9伝説まとめ — 導入カレンダー
   - https://29den.com/newslot/
   - 1/9群の2機種を別系統で照合。
   - confidence: `ANALYSIS_SINGLE_CALENDAR`

## missingFields
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更と純電断を外見上決定的に区別する契約: `NONE_CONFIRMED_AFTER_RESEARCH`

## qualityNotes
- 純ノーマル機なので、存在しない天井/高確/モード/RTを一般論で作らない。
- 朝一BGM用ボーナス回数カウンタは設定変更だけでなく純電断でも0になる点を保持し、変更判別値として誤用しない。
