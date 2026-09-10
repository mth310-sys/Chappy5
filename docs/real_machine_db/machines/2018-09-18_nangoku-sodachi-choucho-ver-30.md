# No.1229 パチスロ南国育ち～蝶々ver～30Φ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ南国育ち～蝶々ver～30Φ
- manufacturer: アムテックス（平和系）
- releaseDateCanonical: 2018-09-18
- generation: 5.9号機
- systemType: ART / 擬似ボーナス連チャン
- formalModelName: `南国育ちC／1A-30`
- certificationNumber: `7S1949`
- settings: `1 / 4 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- パチビー、期待値見える化、ちょんぼりすた、当時解析系が2018-09-18ホール導入で一致。
- HAZUSEは導入開始日を2018-09-17とするため `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18` を保持し、複数のホール導入日一致をcanonicalとした。
- confidence: `MULTIPLE_ANALYSIS_CROSSCHECKED_WITH_DATE_CONFLICT`。

## identificationEvidence
- HAZUSEで30Φ型式 `南国育ちC／1A-30`、検定番号 `7S1949`、メーカー アムテックスを確認。
- 25Φは別型式 `南国育ちC／1A`、検定番号 `8S0149` であり、同名派生として別レコード対象。30Φ値を自動転記しない。

## performanceCore
### payoutRateBySetting
- setting1: 97.8%
- setting4: 99.7%
- setting6: 105.0%

### initialHitBySetting
ART初当たり:
- setting1: 1/390.1
- setting4: 1/390.1
- setting6: 1/390.1

BIG合算:
- setting1: 1/129.9
- setting4: 1/126.5
- setting6: 1/121.0

REG合算:
- setting1: 1/197.8
- setting4: 1/190.4
- setting6: 1/179.7

南国BONUS総出現:
- setting1: 1/78.4
- setting4: 1/76.0
- setting6: 1/72.3

### baseGamesPer50
- canonical: `約32.8 / 33.9 / 36.0G/50枚（設定1/4/6）`。
- ちょんぼりすたheadline約33G、期待値見える化約32.8～36.0Gと整合。

### netIncrease
- ART純増: 約1.8枚/G。

### basicPayout
- SPECIAL BIG CHANCE: 80G + 1G連。
- BIG CHANCE: 80G。
- REGULAR CHANCE: 30G。
- 初当たり時の蝶飛翔率は約75%。1G連獲得後は82%以上のループ期待とされる。

### ceiling
- 天井非搭載。

## modeSpecificMinimumData
- ART当選後は継続モードを用いる。詳細な全移行抽選は物差し用途外。
- 有利区間中の初当たりは天国B以上から開始する解析があり、通常時より期待枚数が優遇される。
- RT3中の有利区間移行でもART当選契機となる。

## resetBehavior
### settingChangeBehavior
- 設定変更後の有利区間ランプは消灯。
- RT状態は当時解析で `調査中` のため `UNVERIFIED_AFTER_RESEARCH`。
- リセット後かつ非RT中の有利区間中にART当選した場合は「初当たりC」となる解析あり。

### carryOverBehavior
- 据え置きを純電断から独立した条件としてRT状態・内部状態の完全な処理を固定する資料は不足し `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- ただし前日有利区間ランプ点灯状態が翌朝も残る場合は据え置き濃厚とする当時攻略解析あり。

### powerCycleBehavior
- 電源OFF→ONのみでは有利区間ランプを引き継ぐ、RT状態も引き継ぐとの当時解析あり。
- 初当たり種類はAまたはBとされ、リセット専用の初当たりC条件とは区別。

### gameCounterReset
- 天井非搭載のため天井ゲーム数RESET/CARRYOVERは `NOT_APPLICABLE`。

### ceilingAfterReset
- 天井非搭載。短縮天井 `NOT_APPLICABLE`。

### modeAfterReset
- リセット後の初当たりCでは通常B 0%、天国B 16.9%、飛翔B 24.5%、蝶飛翔B 58.6%。
- ただし初当たりCは「リセット後かつ非RT中の有利区間中でART当選」の条件付きで、朝一初当たり全件に適用しない。

### stateAfterReset
- 設定変更時RT状態は `UNVERIFIED_AFTER_RESEARCH`。
- 純電断時RT状態は引継ぎとの当時解析あり。

### advantageousSectionReset
- 設定変更時: 有利区間ランプ消灯。5.9号機規定を踏まえ有利区間は引継がないとする当時機種別解析あり。
- 電源OFF→ON: 有利区間ランプ引継ぎ。
- 据え置き独立条件の内部契約は一般論だけで補完せず、表示による判別情報と分離して保持。

### resetBenefits
- 条件を満たし初当たりCとなった場合は天国B以上確定、蝶飛翔B 58.6%で朝一期待枚数が優遇される。
- 実戦値では通常初当たり14361件の平均557.8枚に対し、新台初日1回目489件は平均597.9枚。ただし実戦値でありメーカー公表値ではない。

### resetPenalties
- 設定変更時のみの主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後1G目でもリールガックンしないとの当時解析あり。
- パトランプ位置は設定変更後「変化しない」、純電源ON/OFF後は360度回転との当時解析あり。
- 有利区間ランプが前日点灯→翌朝点灯なら据え置き濃厚とする判別情報あり。

### numericResetData
- 初当たりCモード振り分け: 天国B 16.9% / 飛翔B 24.5% / 蝶飛翔B 58.6%（通常B 0%）。
- 実戦値: 新台初日1回目489件 平均597.9枚 vs 全初当たり14361件 平均557.8枚。参考実戦値として分離。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18`: HAZUSE 9/17導入開始、複数解析/機種DB 9/18ホール導入。

## missingFields
- 設定変更時RT状態の確定契約。
- 据え置き時を純電断と独立させたRT/内部状態契約。

## sources
取得日: 2026-09-10

1. パチビー — https://www.pachibee.jp/machines/index/218080000
   - 導入9/18、5.9号機ART、設定1/4/6、初当たり/総出現、純増1.8枚、80G/30G仕様。
   - reliability: `ANALYSIS_MACHINE_DB`
2. HAZUSE 30Φ — https://hazuse.com/machine/pachislot/7S1949/genre/201/
   - 型式 `南国育ちC／1A-30`、検定7S1949、アムテックス、9/17導入開始、機械割レンジ、純増。
   - reliability: `ANALYSIS_HIGH_MACHINE_DB`
3. ちょんぼりすた — https://chonborista.com/slot/amute/62658/
   - 9/18、設定値、約33G、天井非搭載、朝一内部状態調査中。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
4. 期待値見える化 — https://slotjin.com/slot/nangoku-sodachi/
   - 設定変更/電断比較、有利区間ランプ、RT、初当たりA/B/C、初当たりCモード振り分け。
   - reliability: `ANALYSIS_PERIOD_SOURCE`
5. 期待値見える化 実戦値 — https://slotjin.com/jissenchi/nangoku-sodachi-reset/
   - リセット後初当たり実戦値、初当たりC振り分け。
   - reliability: `EMPIRICAL_SECONDARY`
6. 元プロMGのパチスロブログ — https://www.pachislotblog.tokyo/nangokusodachi-kaiseki/
   - 設定別ベース、ガックンなし、パトランプの設定変更/電断差。
   - reliability: `ANALYSIS_SINGLE`
7. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/01/l.php
   - ART初当たり構造、有利区間/RT関連ゲーム性。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE`
8. HAZUSE 25Φ — https://hazuse.com/machine/pachislot/8S0149/
   - 25Φが別型式 `南国育ちC／1A`、検定8S0149であることを確認。
   - reliability: `ANALYSIS_HIGH_MACHINE_DB`
