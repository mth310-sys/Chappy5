# No.1230 パチスロ南国育ち～蝶々ver～25Φ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ南国育ち～蝶々ver～25Φ
- manufacturer: アムテックス（平和系）
- releaseDateCanonical: 2018-09-18
- generation: 5.9号機
- systemType: ART / 擬似ボーナス連チャン
- formalModelName: `南国育ちC／1A`
- certificationNumber: `8S0149`
- settings: `1 / 4 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- 25Φ単独の中古実機DBは店導入日2018-09-18。
- ちょんぼりすたは25/30パイ同時リリースかつ導入日2018-09-18とする。
- HAZUSE 25Φは導入開始日2018-09-17のため `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18` を保持し、複数資料のホール導入日一致から2018-09-18をcanonicalとした。
- confidence: `MULTIPLE_ANALYSIS_CROSSCHECKED_WITH_DATE_CONFLICT`。

## identificationEvidence
- HAZUSE 25Φで型式 `南国育ちC／1A`、検定番号 `8S0149`、メーカー アムテックスを確認。
- 30Φは別型式 `南国育ちC／1A-30`、検定番号 `7S1949`。同時販売だが別型式/別検定のため独立レコード化。

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
- HAZUSE 25Φ: 設定1～6で約32.8～約36G/50枚。
- ちょんぼりすた共通機種ページ: 約33G/50枚。
- canonical: `約32.8～36.0G/50枚（設定域）`。

### netIncrease
- ART純増: 約1.8枚/G。

### basicPayout
- SPECIAL BIG CHANCE: 80G + 1G連。
- BIG CHANCE: 80G。
- REGULAR CHANCE: 30G。
- 初当たり時の蝶飛翔期待度は約75%、1G連獲得後は82%以上で1G連ループ期待。

### ceiling
- 天井非搭載。

## modeSpecificMinimumData
- ARTによる疑似ボーナスのセットストック+継続抽選型。
- 有利区間中のART初当たりは天国モード移行確定とする共通機種解析あり。
- 全モード移行テーブル等の詳細内部抽選は物差し用途外として収集しない。

## resetBehavior
### settingChangeBehavior
- 共通機種解析（25/30パイ同時リリースを明示）では朝一リセット恩恵欄の内部状態は `調査中`。
- 25Φ単独資料で設定変更時RT状態を固定できる資料は十分な再探索後も得られず `UNVERIFIED_AFTER_RESEARCH`。
- 30Φレコードの設定変更契約を、別型式であることのみを理由に自動転記していない。

### carryOverBehavior
- 据え置きを純電源OFF→ONと独立条件として、25Φ単独のRT/内部状態処理を固定する資料は得られず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 25Φ単独で純電源OFF→ON時のRT状態・有利区間ランプ処理を直接固定できる資料は十分な再探索後も得られず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 30Φの契約は別型式のため自動転記しない。

### gameCounterReset
- 天井非搭載のため天井ゲーム数RESET/CARRYOVERは `NOT_APPLICABLE`。

### ceilingAfterReset
- 天井非搭載。短縮天井 `NOT_APPLICABLE`。

### modeAfterReset
- 共通機種ページでは設定変更時の内部状態は調査中。
- 25Φ単独の設定変更専用モード振り分け公開値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電断: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- 5.9号機ARTで有利区間を使用すること、および有利区間中のART初当たりが天国移行確定とする共通機種解析は確認。
- ただし25Φ単独の設定変更/据え置き/純電断ごとの有利区間リセット契約は直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### resetBenefits
- 設定変更時のみ適用される25Φ単独の定量的朝一恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時のみの主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 25Φ単独のガックン、パトランプ位置、有利区間ランプ等による変更判別契約/発生率は十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 30Φで得られた判別契約は別型式につき自動転記しない。

### numericResetData
- 25Φ単独で確認できた設定変更時専用モード振り分け、短縮天井、朝一当選率、ガックン率等: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_09_17_VS_2018_09_18`: HAZUSE 25Φは9/17導入開始、複数資料は9/18ホール導入。

## missingFields
- 25Φ単独の設定変更時RT/内部状態契約。
- 据え置きと純電断を分離した25Φ単独のRT/有利区間/内部状態契約。
- 25Φ単独のガックン・パトランプ等による変更判別条件/発生率。

## sources
取得日: 2026-09-10

1. HAZUSE 25Φ — https://hazuse.com/machine/pachislot/8S0149/
   - 型式 `南国育ちC／1A`、検定8S0149、導入開始9/17、設定別BIG/REG/ART初当たり/総出現、機械割、約32.8～36G/50枚、純増1.8枚、天井非搭載、80G/30G仕様。
   - reliability: `ANALYSIS_HIGH_MACHINE_DB`
2. HAZUSE 25Φ 基本スペック — https://hazuse.com/machine/pachislot/8S0149/genre/201/
   - 25Φ単独の型式・検定・メーカー・純増・導入開始日を再照合。
   - reliability: `ANALYSIS_HIGH_MACHINE_DB`
3. ちょんぼりすた — https://chonborista.com/slot/amute/62658/
   - 25/30パイ同時リリース、導入9/18、共通スペック、約33G、天井非搭載、有利区間中ART初当たりの天国移行、朝一内部状態調査中。
   - reliability: `ANALYSIS_HIGH_PERIOD_SOURCE_SHARED_25_30`
4. P-WORLD 25Φ — https://www.p-world.co.jp/machine/database/8722
   - 25Φ機種ページ。SPECIAL BIG 80G+1G連、BIG 80G、REG 30G、純増1.8枚、初当たり飛翔期待約75%、1G連後82%以上。
   - reliability: `INDUSTRY_MACHINE_DB`
5. スロ安サーチ 25Φ — https://slot-price.com/slot_price_details/id/1269
   - 機種名25φ、型式 `南国育ちC／1A`、メーカー アムテックス、店導入日2018-09-18。
   - reliability: `SECONDARY_MACHINE_DB`

## researchNotes
- 欠損判定前に `南国育ち～蝶々ver～25 / 25Φ / 南国育ちC／1A / 8S0149` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 有利区間ランプ / ガックン` を組み替えて再探索。
- 25Φ単独性能はHAZUSE/P-WORLD等で確認できたが、resetBehaviorの詳細は25/30共通ページの「内部状態調査中」以上を25Φ単独で固定できなかった。
- 別型式である30Φの詳細reset契約を推測転記せず、未固定項目はUNVERIFIEDとした。
