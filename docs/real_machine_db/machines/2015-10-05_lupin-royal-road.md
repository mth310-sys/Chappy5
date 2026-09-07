# パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～

machineName: パチスロ ルパン三世 ロイヤルロード～金海に染まる黄金神殿～
manufacturer: オリンピア / 平和
releaseDate: 2015-10-05
releaseDatePrecision: exact_hall_start_day_multi_source
generation: 5号機
systemType: AT / 差枚数管理・セット継続型
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 2015-10-05導入をパチ＆スロ必勝本、複数当時解析で一致確認。
- オリンピア製5号機AT。
- 「ルパン三世ロイヤルロード / ロイヤルロード / 金海に染まる黄金神殿 / オリンピア / 平和」と型式・検定・5S系を組み替えて再探索したが、正式型式名・検定番号は安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY_AND_DATE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 97.9% |
| 3 | 99.9% |
| 4 | 103.9% |
| 5 | 107.9% |
| 6 | 113.1% |
- パチ＆スロ必勝本、pacnk、複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | AT初当たり | CZ初当たり |
|---:|---:|---:|
| 1 | 1/525.7 | 1/320.0 |
| 2 | 1/504.8 | 1/306.5 |
| 3 | 1/473.2 | 1/284.8 |
| 4 | 1/419.8 | 1/251.1 |
| 5 | 1/367.3 | 1/220.6 |
| 6 | 1/313.4 | 1/201.6 |
- CZ設定3は一部DBに1/283台の丸め/転記差があるため、精密値1/284.8をcanonicalとして保持し、差異は平均しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約45.6G/50枚**。
- 当時スペック資料・複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「ロイヤルロード」: **約3.0枚/G**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- AT「ロイヤルロード」: **1セット100枚**、差枚数管理＋継続型。
- CZ「ルパンザチャンス」: AT期待度約50%。上位CZ「ラブスコール」は約80%。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- AT間天井: **1967G+前兆**でAT。
- CZ間天井: **967G+前兆**でCZ。
- CZ連続失敗天井: 最大7回で銭形ステージへ移行し、AT当選まで高期待状態。
- 一部資料の1999G/999G、1950G等は前兆込み・概数・旧解析の定義差を含むため平均しない。canonicalは必勝本/複数解析の1967G/967G+前兆。
- 初期に流布した「銭形ステージで1000/1500Gへ天井短縮」説は後の解析でガセ濃厚とされており、reset恩恵には採用しない。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **AT/CZ天井ゲーム数をリセット**。
- **CZスルー天井を再抽選**し、通常より浅い回数が選ばれやすい。
- **鍵リプレイ初回獲得個数を再抽選**。
- **内部状態を再抽選**。朝一のカギ高確（不二子ステージ）移行率に設定差あり。
- 開始ステージは丘陵または地下探索とする当時解析あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 設定変更なしの据え置き運用では、公開比較上、天井進捗・CZスルー回数等は引継ぎ側として扱われる。
- 表示上のゲーム数や鍵表示が0に戻る場合があるため、画面表示と内部保持を分離する。
- confidence: ANALYSIS_HIGH_FOR_OPERATIONAL_CARRYOVER

### powerCycleBehavior
- **電源OFF→ONのみでは天井を引き継ぐ**。
- 解析資料では内部ゲーム数/CZスルー/鍵獲得情報を引き継ぎ、液晶表示のみリセットされる比較が示される。
- 設定変更と純電断を同義扱いしない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き: **CARRY_OVER**。
- 純電源OFF→ON: **CARRY_OVER（液晶表示はリセットあり）**。

### ceilingAfterReset
- 設定変更後もAT間1967G+前兆 / CZ間967G+前兆が基本。
- 設定変更専用のゲーム数短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただしCZスルー回数天井はリセット専用振り分けで優遇。

### modeAfterReset
- 通常のゲーム数解除モードに相当する明確な「朝一専用モード」は **NONE_CONFIRMED_AFTER_RESEARCH**。
- CZスルー回数天井の再抽選は別契約として保持。

### stateAfterReset
- 設定変更時カギ高確移行率:
  - 設定1: 25.0%
  - 設定2: 25.0%
  - 設定3: 31.25%
  - 設定4: 31.25%
  - 設定5: 37.50%
  - 設定6: 37.50%
- 朝一何も引かず不二子ステージへ移行する挙動が状態推測材料。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- リセット時CZスルー天井振り分けが通常より優遇。
- 初回鍵リプレイで複数鍵を獲得しやすい専用振り分け。
- カギ高確スタート率25.0～37.5%。

### resetPenalties
- 設定変更により前日の天井進捗/CZスルー進捗等は失われるため、前日状況次第では宵越し狙いを消す効果がある。
- それ以外の設定変更専用不利数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- リセット後最初の鍵リプレイは1～5個が各20%。**朝一初回鍵リプレイで複数個獲得なら設定変更濃厚**とする当時解析あり。
- 電源OFF→ONのみでも液晶表示が初期化され得るため、0G表示単独は変更判別にならない。
- 本機固有のリールガックン確定契約は「ガックン/設定変更/朝一/据え置き/電源OFF ON」等で再探索したが固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- リセット時CZスルー天井振り分け:
  - 1回: **5.0%**
  - 2回: **5.0%**
  - 3回: **12.5%**
  - 4回: **12.5%**
  - 5回: **12.5%**
  - 6回: **12.5%**
  - 7回: **40.0%**
- リセット後初回鍵リプレイ獲得数: **1 / 2 / 3 / 4 / 5個 = 各20.0%**。
- 設定変更時カギ高確移行率: **25.0 / 25.0 / 31.25 / 31.25 / 37.50 / 37.50%**。

## conflicts
1. `CEILING_SOURCE_DEFINITION_DIFFERENCE`
   - canonical: AT1967G+前兆 / CZ967G+前兆。
   - 別資料: 1999G/999G、1950G等。平均せず、前兆込み/概数/旧解析差として保持。
2. `REJECTED_EARLY_ZENIGATA_CEILING_SHORTENING_CLAIM`
   - 導入初期に1000/1500G短縮説が流布したが、後続解析でガセ濃厚。resetBehaviorの事実値には採用しない。
3. `CZ_SETTING3_ROUNDING_OR_TRANSCRIPTION_DIFFERENCE`
   - canonical 1/284.8。一部DBに1/283台。平均しない。

## missingFields
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン確定契約: `NONE_CONFIRMED_AFTER_RESEARCH`。

## boundaryAudit
- 2015-10-05群の先頭候補として本機を処理。
- 同日群には未処理候補 **ベヨネッタ / Zゴールドインフィニティ / サイレントヒル / クジラッキー** が残るため **2015-10-05_GROUP_OPEN**。
- 2015-09-28版として既登録のマクロスF2 Bonus Live ver.には10-05表記資料もあるが、重複追加せず既存No.916の日付工程差として扱う。

## sources — retrieved 2026-09-08
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2625/1/53543
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/10966/
- すろぱちくえすと 機種まとめ: https://www.slopachi-quest.com/kisyubetsu/rupin-royalroad/
- すろぱちくえすと CZスルー天井: https://www.slopachi-quest.com/article/rupin-royal-through/
- すろぱちくえすと 朝一2G戦法: https://www.slopachi-quest.com/article/rupin-royal-2g/
- pacnk: https://pacnk.com/slot/2015/lupin2015/top.php
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/7825
- 当時スペック資料: https://ameblo.jp/slostar/entry-12057633727.html

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeilings: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SOURCE_DEFINITION_DIFFERENCE
- settingChangeBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- carryOverBehavior: ANALYSIS_HIGH
- purePowerCycleBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- resetNumericData: ANALYSIS_HIGH_MULTI_SOURCE
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: ANALYSIS_HIGH_FOR_FIRST_KEY / UNVERIFIED_FOR_GAKKUN
