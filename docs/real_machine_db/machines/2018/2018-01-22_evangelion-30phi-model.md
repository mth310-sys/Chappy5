# No.1168 パチスロ EVANGELION 30φ MODEL

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ EVANGELION 30φ MODEL
- manufacturer: ビスティ
- releaseDateCanonical: 2018-01-22
- generation: 5号機
- systemType: ノーマルA / 30Φ / 完全告知 / 技術介入
- formalModelName: `パチスロ ヱヴァンゲリヲン・30MODEL S`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- collectedAt: 2026-09-10

## releaseDateEvidence
- 一撃・すろぱちくえすと・ちょんぼりすたが2018-01-22導入で一致。
- SANKYOオンライン博物館で販売名`パチスロ EVANGELION 30Φ MODEL`、型式`パチスロ ヱヴァンゲリヲン・30MODEL S`を確認。

## performanceCore

### payoutRateBySetting
- setting1: 97.45%
- setting2: 99.57%
- setting3: 101.70%
- setting4: 103.72%
- setting5: 106.79%
- setting6: 110.59%

### bigBonusBySetting
- setting1: 1/425.6
- setting2: 1/412.2
- setting3: 1/402.1
- setting4: 1/390.1
- setting5: 1/385.5
- setting6: 1/378.8

### regularBonusBySetting
- setting1: 1/601.2
- setting2: 1/585.1
- setting3: 1/574.9
- setting4: 1/555.4
- setting5: 1/528.5
- setting6: 1/422.8

### bonusCombinedBySetting
- setting1: 1/249.2
- setting2: 1/241.8
- setting3: 1/236.6
- setting4: 1/229.1
- setting5: 1/222.9
- setting6: 1/199.8

### baseGamesPer50
- canonical: 約46G/50枚（一撃の小役解析値）
- secondary: 約41.7G/50枚（すろぱちくえすと）
- `CONFLICT_BASE_46_VS_41_7`として保持し平均しない。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`

### basicPayout
- BIG: 最大402枚
- REG: 104枚

### ceiling
- `NONE`

## modeSpecificMinimumData
- 30Φの完全告知ノーマルタイプ。
- 先告知 / 後告知 / 演出発生の3モード。
- 天井・RT・ART・AT非搭載。

## resetBehavior

### settingChangeBehavior
- 天井非搭載のためゲーム数天井は`NOT_APPLICABLE`。
- 一撃の本機専用「天井/設定変更」では設定変更時の液晶ステージは調査中。
- BAR揃いムービーの「リセット後」テーブルおよびREG中キャラ紹介には設定変更後専用テーブルが存在し、設定変更後の初回/特定条件で設定推測挙動が通常時と異なることを確認。

### carryOverBehavior
- 天井非搭載のため前日ゲーム数持越し狙いは`NOT_APPLICABLE_NO_CEILING`。
- 純ノーマル機のためゲーム数モード/高確/CZ/RTは`NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`。
- 電源OFF→ON後専用のREGキャラ紹介テーブルが公開されており、設定変更後テーブルとは区別される。

### powerCycleBehavior
- 一撃の本機専用資料では電源OFF→ON時の液晶ステージは調査中。
- REG中キャラ紹介では「電源OFF/ON後」専用振り分けが公開され、設定変更後/REG3連続時とは別テーブル。
- BAR揃いムービーは電源ON/OFF後1回目から有効とされる。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- 天国等のゲーム数モード: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`

### stateAfterReset
- 高確/CZ/RT等: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 液晶開始ステージは設定変更・純電断とも`UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 純ノーマル機として公開されており、有利区間を利用するAT/ARTゲーム性は確認されない。

### resetBenefits
- 天井短縮・朝一高確・初当たり優遇: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更後は設定示唆用のBAR揃いムービー/REGキャラ紹介に専用振り分けが存在し、朝一客の変更推測材料になり得る。

### resetPenalties
- 設定変更固有の出玉上の主要不利要素は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン条件/発生率、初期出目・ランプによる確定判別は再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後と電源OFF→ON後で一部設定示唆テーブルが異なるが、出現しない場合に変更/据え置きを断定できる性質ではないため`PROBABILISTIC_HINT_NOT_DETERMINISTIC`。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`
- BAR揃いムービー リセット後1周目:
  - settings1-3: 基本順序100%
  - setting4: 基本98.47% / 設定4以上パターン1.53%
  - setting5: 基本95.42% / 高設定パターン合計4.58%
  - setting6: 基本92.37% / 高設定パターン合計7.63%
- REG設定示唆合算出現率（電源OFF/ON後 / 設定変更後またはREG3連続時 / その他）:
  - setting2: 10.38% / 12.45% / 5.19%
  - setting3: 7.78% / 9.34% / 3.89%
  - setting4: 15.11% / 18.13% / 7.57%
  - setting5: 12.82% / 15.38% / 6.41%
  - setting6: 18.16% / 21.79% / 9.09%

## morningRelatedPublicNumbers
- 電源OFF/ON後と設定変更後でREG中設定示唆の振り分けが明確に異なる。
- BAR揃いムービーのリセット後1周目/2周目にも設定別公開値が存在する。
- これらは変更判別の確定契約ではなく、朝一設定推測を補助する確率情報としてのみ保存。

## conflicts
- `CONFLICT_BASE_46_VS_41_7`: 一撃は約46G/50枚、すろぱちくえすとは約41.7G/50枚。平均せず両方保持し、一撃の小役解析値をcanonicalとする。

## sources
取得日: 2026-09-10

1. SANKYOオンライン博物館
   - https://www.sankyo-fever.jp/collection/883/
   - 販売名`パチスロ EVANGELION 30Φ MODEL`、型式`パチスロ ヱヴァンゲリヲン・30MODEL S`。
   - confidence: `OFFICIAL`

2. 一撃 — EVANGELION 30φMODEL
   - https://1geki.jp/slot/s_eva30/
   - 導入2018-01-22、設定別PAY/ボーナス合算、BIG402枚/REG104枚、30Φノーマル。
   - confidence: `ANALYSIS_HIGH`

3. 一撃 — ボーナス/設定判別
   - https://1geki.jp/slot/s_eva30/5/
   - 設定別BIG/REG/合算。
   - confidence: `ANALYSIS_HIGH`

4. 一撃 — 小役確率
   - https://1geki.jp/slot/s_eva30/4/
   - 約46G/50枚。
   - confidence: `ANALYSIS_HIGH`

5. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_eva30/3/
   - 天井非搭載。設定変更時/電源OFF→ON時の液晶ステージはいずれも調査中。
   - confidence: `ANALYSIS_HIGH`

6. 一撃 — REG中キャラ紹介
   - https://1geki.jp/slot/s_eva30/64/
   - 電源OFF/ON後、設定変更後/REG3連続時、その他で振り分けが異なることを確認。
   - confidence: `ANALYSIS_HIGH`

7. すろぱちくえすと — エヴァ30Φ
   - https://www.slopachi-quest.com/article/eva-dokidoki400/
   - 導入2018-01-22、ビスティ、BIG最大402枚/REG104枚、約41.7G/50枚、リセット後ムービー/REGキャラ紹介の公開数値。
   - confidence: `ANALYSIS_HIGH`

8. ちょんぼりすた — エヴァンゲリオン30パイ
   - https://chonborista.com/slot/bisty-slot/51239/
   - 導入2018-01-22、30Φノーマル、天井なし。
   - confidence: `ANALYSIS_HIGH`

9. すろ・ぱち(解) — 検定通過情報
   - https://kaiseki.sulopachinews.com/archives/2352
   - `EVANGELION 30MODEL S（ビスティ）`の型式確認補助。
   - confidence: `ANALYSIS_SINGLE_ARCHIVE`

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更/純電断時の液晶開始ステージ: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有ガックン/確定変更判別: `UNVERIFIED_AFTER_RESEARCH`

## qualityNotes
- 設定示唆の全内部テーブルを実機再現目的では収集せず、朝一状態差を示す主要公開値だけ保持。
- 電源OFF→ON後と設定変更後の確率差は朝一客AI向け情報だが、確定判別として扱わない。
