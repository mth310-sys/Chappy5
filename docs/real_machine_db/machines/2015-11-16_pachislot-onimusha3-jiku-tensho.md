# パチスロ鬼武者3 時空天翔

machineName: パチスロ鬼武者3 時空天翔
manufacturer: Sammy / サミー
releaseDate: 2015-11-16
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 937
generation: 5号機 / 新基準AT
systemType: AT / 疑似ボーナス経由+AT直撃 / ゲーム数上乗せ+セットストック
formalModelName: 鬼武者3 時空天翔AS
inspectionNumber: 5S0745
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2015-11-16、型式名「鬼武者3 時空天翔AS」、検定番号5S0745、メーカーSammyを確認。
- グリーンべると/P-WORLD業界ニュースでは2015-10-09内覧会、11月15日納品予定、純増約2.5枚/GのAT機として確認。納品日とホール導入日を分離し、canonical releaseDateは2015-11-16。
- ちょんぼりすた、スロパチクエスト、後年整理DBでも2015-11-16導入で一致。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.9% |
| 3 | 100.6% |
| 4 | 102.6% |
| 5 | 105.2% |
| 6 | 110.2% |

- HAZUSE、スロパチクエスト、複数解析で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要初当たりとしてAT/疑似ボーナスを含むAT初当たり系列を採用。

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/439.9 |
| 2 | 1/424.2 |
| 3 | 1/394.6 |
| 4 | 1/376.9 |
| 5 | 1/353.1 |
| 6 | 1/344.3 |

- HAZUSE、スロパチクエスト、man-softで精密系列が一致。
- ちょんぼりすたの表示は1/440・1/424・1/395・1/377・1/353・1/344の丸め系列。定義競合ではなく丸め差として参考保持。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約44.9G/50枚**。
- ちょんぼりすた、Pachinaviで44.9G、スロパチクエストで約45G/50枚。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「時空天翔」/疑似ボーナス系AT: **約2.5枚/G**。
- グリーンべると当時業界記事、HAZUSE、複数解析で一致。
- reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- メインAT「時空天翔」: **1セット50G+α**、ゲーム数上乗せ+セット数ストック型。
- 疑似ボーナス「斬魔一閃BATTLE」: **1セット約16G**、継続抽選型。勝利で時空天翔へ、AT期待度約50%とされる。
- 本DBでは実機完全再現用の上乗せ詳細振り分けは収集対象外。

## modeSpecificMinimumData
- 通常天井: **斬魔一閃BATTLE or 時空天翔間1280G+前兆**で、斬魔一閃BATTLEまたは時空天翔に当選。
- 設定変更後天井: **800G+前兆**へ短縮。
- 疑似ボーナス「斬魔一閃BATTLE」当選でも天井ゲーム数はリセットされるとする当時解析あり。
- 通常時内部状態は通常A/B、高確A〜Dの公開解析あり。ただし通常時全状態移行テーブルは物差しDB対象外。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_HIGH_CORE_WITH_EMPIRICAL_NUMERIC_CAUTION
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **天井は通常1280Gから800G+前兆へ短縮**。
- **内部状態RESELECT**。
- 当時解析では設定変更時の開始ステージを**凱旋門**とする資料あり。

### carryOverBehavior
- 据え置き時は前日のハマりゲーム数/天井進捗を**CARRYOVER**。
- 内部状態も**CARRYOVER**。
- 朝一の天井差・内部状態差が客側の据え置き推測材料になる。

### powerCycleBehavior
- 設定変更なしの電源OFF→ONのみ:
  - 天井ゲーム数: **CARRYOVER**。
  - 内部状態: **CARRYOVER**。
- ちょんぼりすた、man-soft、期待値見える化の設定変更/電源ON・OFF直接比較で一致。
- pure power cycle時の開始ステージについて安全に固定できる直接資料は不足するため `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- settingChange: **RESET**。
- carryOver: **CARRYOVER**。
- purePowerCycle: **CARRYOVER**。
- 通常1280G天井進捗は設定変更で消去され、リセット専用800G天井へ置換される。

### ceilingAfterReset
- **800G+前兆**。
- 通常時1280G+前兆から**480G短縮**。
- HAZUSE、ちょんぼりすた、スロパチクエスト、期待値見える化等で一致。

### modeAfterReset
- 設定変更時の「通常A/B・高確A〜D」等の内部状態は再抽選。
- 据え置き/純電断は引継ぎ。
- 設定変更専用の通常モード振り分け表として安全に固定できる公開解析値は `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用の規定G解除モードは `NONE_CONFIRMED_AFTER_RESEARCH`。本機は明確な高期待度G数ゾーン非搭載とする複数解析がある。

### stateAfterReset
- 設定変更時: **RESELECT**。高確が選ばれる場合があることを複数当時解析で確認。
- 据え置き/純電断: **CARRYOVER**。
- 設定変更時高確移行率について、当時実戦記事に「12.5〜20%程度ではないか」という推測値があるが、記事自身が「解析は出ていない」と明記しているため、解析数値としてDBへ採用しない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の公開朝一恩恵は**天井1280G→800Gへの480G短縮**。
- 設定変更時は内部状態を再抽選し、高確スタートの可能性あり。
- 当時攻略記事では0Gからの高確確認を朝一戦術として扱うが、高確移行率の確定解析値は確認できない。

### resetPenalties
- 前日の天井進捗および内部状態は設定変更で消去されるため、前日深ハマり/高確状態の宵越し価値を失う。
- その他の設定変更固有不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 当時解析で**設定変更時はガックンあり、据え置きはなし**とする実戦/動画資料あり。
- 本機は左リールが疑似リールのため、ガックン確認は**中・右リールに注目**とする攻略資料がある。
- ただしホール側の1G回し等で対策可能な一般的限界があるため「ガックン=絶対確定」とは扱わず、主要な設定変更推測要素として保存。
- 設定変更時開始ステージ「凱旋門」は当時解析で確認できるが、純電断時の開始ステージ契約は安全に固定できないため、ステージ単独の確定判別にはしない。

### numericResetData
- normalCeiling: 1280G+前兆
- resetCeiling: **800G+前兆**
- ceilingShortening: **480G**
- resetHighStateRate: `UNVERIFIED_ANALYSIS_VALUE`; empirical estimate 12.5-20% exists but DO_NOT_PROMOTE_TO_PARSED_ANALYSIS
- resetStartStage: 凱旋門 (contemporary analysis)
- reelGakkun: settingChange YES / carryOver NO in contemporary practical-analysis source; inspect middle/right reels because left is pseudo reel

## conflicts
- AT初当たりの精密系列1/439.9〜1/344.3と、1/440〜1/344の丸め系列は同定義の丸め差として扱い、CONFLICTにはしない。
- 機械割について後年回顧記事の一部に設定1=97.0%表記がある一方、HAZUSEおよび複数当時解析は97.4%。canonicalは複数一致の97.4%とし、97.0%は `CONFLICT_SECONDARY_RETROSPECTIVE_SETTING1` として保持。
- 設定変更時高確率12.5〜20%は当時実戦者による明示的推測値であり、解析値と混ぜない。

## missingFields
- purePowerCycle startStage exact behavior: `UNVERIFIED_AFTER_RESEARCH`
- reset dedicated mode distribution: `UNVERIFIED_AFTER_RESEARCH`
- reset high-state exact distribution/rate: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. HAZUSE — パチスロ鬼武者3 時空天翔
   - https://hazuse.com/machine/pachislot/5S0745/
   - 導入2015-11-16、型式鬼武者3 時空天翔AS、検定5S0745、AT初当たり、機械割、通常天井1280G、設定変更後800G。
   - reliability: ANALYSIS_HIGH / PERIOD_DB
2. P-WORLD / グリーンべると — 多彩な上乗せが魅力『パチスロ鬼武者3 時空天翔』
   - https://news.p-world.co.jp/articles/7893/greenbelt
   - 2015-10-20当時業界記事。サミー、純増約2.5枚/G、AT50G+α、11月15日納品予定。
   - reliability: INDUSTRY_PERIOD_REPORT
3. ちょんぼりすた — 鬼武者3時空天翔 スロット 完全攻略解析
   - https://chonborista.com/slot/sammy-slot/12723/
   - 導入2015-11-16、機械割、AT初当たり丸め系列、44.9G/50枚、純増約2.5枚/G、1280G/リセット800G、設定変更/電源ON・OFF直接比較、ガックン中右リール注意。
   - reliability: ANALYSIS_HIGH_DIRECT_COMPARISON
4. スロパチクエスト — 鬼武者3 時空天翔 天井恩恵・期待値・狙い目・ヤメ時・解析
   - https://www.slopachi-quest.com/article/onimusha3/
   - 精密AT初当たり、機械割、約45G/50枚、通常1280G/リセット800G。
   - reliability: ANALYSIS_HIGH
5. スロパチクエスト — 即高確がアツい 鬼武者3 設定変更・リセット時の恩恵
   - https://www.slopachi-quest.com/article/onimusya-reset/
   - リセット800G、据え置き1280G、内部状態再抽選/据え置き、凱旋門スタート、ガックン実戦動画。高確率12.5〜20%は記事自身が解析未公表の推測と明示。
   - reliability: ANALYSIS_SINGLE_DIRECT_BEHAVIOR / EMPIRICAL_NUMERIC_ONLY
6. 期待値見える化 — 鬼武者3 時空天翔 天井恩恵・ゾーン・やめどき解析
   - https://slotjin.com/zone/onimusha3/
   - 設定変更800G+前兆、電源OFF→ON天井引継ぎ、内部状態再抽選/引継ぎ、ガックンあり/なし。
   - reliability: ANALYSIS_HIGH_DIRECT_COMPARISON
7. man-soft — 鬼武者3 時空天翔 解析攻略まとめ
   - https://smaslo.man-soft.com/slot-kaiseki/onimusya3.html
   - 精密AT初当たり/機械割、1280G/リセット800G、設定変更/電源ON・OFF比較。
   - reliability: ANALYSIS_SECONDARY_CORROBORATION
8. Pachinavi — パチスロ鬼武者3 時空天翔 設定判別・解析情報
   - https://pachinavi.net/machines/onimusha-3/
   - 導入2015-11-16、型式、純増約2.5枚、44.9G/50枚。
   - reliability: RETROSPECTIVE_DB_CORROBORATION

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_PERIOD_INDUSTRY_SCHEDULE
- formalModelName: ANALYSIS_HIGH_PERIOD_DB
- inspectionNumber: ANALYSIS_HIGH_PERIOD_DB
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- resetGameCounter: ANALYSIS_HIGH_MULTI_SOURCE
- resetCeiling800G: ANALYSIS_HIGH_MULTI_SOURCE
- purePowerCycle ceiling/state: ANALYSIS_HIGH_DIRECT_COMPARISON
- resetStateBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- resetStateNumericDistribution: UNVERIFIED_AFTER_RESEARCH
- resetDetectionGakkun: ANALYSIS_SINGLE_DIRECT_PRACTICAL_PLUS_CORROBORATION
