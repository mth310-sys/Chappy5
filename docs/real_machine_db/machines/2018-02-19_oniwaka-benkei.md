# No.1174 超速回胴 鬼若弁慶

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 超速回胴 鬼若弁慶
- alias: 鬼若弁慶
- manufacturer: ボーダー
- releaseDateCanonical: 2018-02-19
- generation: 5.9号機世代
- systemType: ノーマルA / 完全告知 / リアルボーナス
- formalModelName: `オニワカベンケイ`
- certificationNumber: `7S1056`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`オニワカベンケイ`、検定番号`7S1056`、メーカー`ボーダー`、導入開始日2018-02-19を掲載。
- ちょんぼりすた、DMMぱちタウンも2018-02-19導入で一致。
- 一方、PiDEAの2017-10-17発表会記事は当初の「導入(開店)日は12月4日を予定」と記録し、2017年新台一覧にも12/4掲載が残る。実導入系DBが2018-02-19で複数一致するため本DBでは2018-02-19をcanonicalとし、2017-12-04は発売前予定日としてCONFLICT保持。

## performanceCore

### payoutRateBySetting
- setting1: 97.62%
- setting2: 98.19%
- setting3: 101.11%
- setting4: 104.62%
- setting5: 107.92%
- setting6: 110.26%

- 中一商事の実機DBは上記精密値を掲載。
- ちょんぼりすたは丸め値97.6 / 98.2 / 101.1 / 104.6 / 107.9 / 110.3%で一致。

### bonusBySetting
BIG:
- setting1: 1/278.88
- setting2: 1/276.52
- setting3: 1/266.41
- setting4: 1/255.00
- setting5: 1/246.38
- setting6: 1/240.06

REG:
- setting1: 1/313.57
- setting2: 1/312.08
- setting3: 1/299.25
- setting4: 1/283.71
- setting5: 1/265.33
- setting6: 1/239.18

bonusCombined:
- setting1: 1/147.60
- setting2: 1/146.61
- setting3: 1/140.94
- setting4: 1/134.03
- setting5: 1/127.75
- setting6: 1/119.81

- パチマガスロマガ、中一商事、ちょんぼりすたで実質一致。

### baseGamesPer50
- canonical: 約32.6G/50枚
- ちょんぼりすたが32.6Gを明記。
- パチマガスロマガの当時解析ページは同項目を「現在調査中」としているため、32.6Gは複数高信頼解析一致ではなく単一解析明示値として扱う。

### netIncrease
- `NOT_APPLICABLE_NORMAL_A`

### basicPayout
- BIG BONUS: 約307枚
- REG BONUS: 約102枚
- PiDEA、中一商事、ちょんぼりすたで一致。

### ceiling
- `NONE`
- ちょんぼりすたが天井非搭載を明記。

## modeSpecificMinimumData
- 通常時は`ボーナス告知モード` / `ぺい提灯モード` / `にぎやか提灯モード`の3演出モードを任意選択可能。
- これは演出選択であり、AT/ART/CZやゲーム数解除の内部モードではない。
- REG成立後は目押し不要の`RAKU・RAKUスタート`を搭載。BIGは約307枚、REGは約102枚。

## resetBehavior

### settingChangeBehavior
- 本機専用の設定変更時内部状態・成立済みボーナス・初期出目等を直接固定する解析契約は、機種名/型式/メーカーと「設定変更」「リセット」「朝一」「ガックン」「電源OFF ON」「出目」「状態」を組み替え、当時解析・後年DBまで再探索したが確認できず`UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたは朝一リセット恩恵について「ノーマルタイプなので朝イチの恩恵は無し」と明記。

### carryOverBehavior
- 据え置きを純電源OFF→ONと独立条件で明示し、成立済みボーナスや低レベル状態まで固定した本機固有資料は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 一般的なノーマルAタイプの挙動から補完しない。

### powerCycleBehavior
- 純電源OFF→ON時の成立済みボーナス/内部低レベル状態/初期出目を機種固有に固定する資料は`UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- 天井・ゲーム数解除を持たないため、朝一天井ゲーム数のRESET/CARRYOVER対象なし。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`

### modeAfterReset
- ゲーム数解除モード/天国モード: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 通常時3演出モードはプレイヤー任意選択であり、朝一内部モード再抽選として扱わない。
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`

### stateAfterReset
- AT/ART/CZ高確等: `NOT_APPLICABLE_TO_CONFIRMED_NORMAL_A_GAMEPLAY`
- 成立済みボーナス等の低レベル状態: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_NORMAL_A_GAMEPLAY`
- 本機はノーマルAとして資料が一致し、AT/ART/CZの有利区間ゲーム性を確認しない。有利区間を用いる朝一挙動は確認されない。

### resetBenefits
- ちょんぼりすた: ノーマルタイプのため「朝イチの恩恵は無し」。
- 天井短縮、朝一専用モード、初当たり/CZ/AT優遇: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。

### resetPenalties
- 設定変更専用の主要な数値的不利要素は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ちょんぼりすたの朝一項目ではガックン有無は当時`調査中`。
- 本機固有のガックン発生条件/確率、初期出目、ランプ等による確定的変更判別は、検索語・資料系統を変えた再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- BIG中のリール枠ランプや虹色ランプは設定示唆であり、設定変更/据え置き判別ではないためresetDetectionへ混入しない。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 朝一設定変更専用の初当たり率、モード振り分け、天井短縮、恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 公開された朝一専用数値は確認できない。

## conflicts
- `CONFLICT_RELEASE_DATE_PLANNED_2017_12_04_VS_ACTUAL_2018_02_19`:
  - PiDEA 2017-10-17発表会記事: 導入(開店)日2017-12-04予定。
  - 2017年導入一覧にも12/4掲載が残る。
  - HAZUSE / ちょんぼりすた / DMMぱちタウン: 2018-02-19導入開始。
  - 「予定」と「実導入」の差と判断できるため2018-02-19をcanonical。旧予定日は削除せず競合履歴として保持。

## missingFields
- settingChange時の成立済みボーナス/低レベル状態: `UNVERIFIED_AFTER_RESEARCH`
- powerCycle時の成立済みボーナス/低レベル状態: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き独立契約: `UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`
- ガックン等の確定的変更判別: `UNVERIFIED_AFTER_RESEARCH`
- ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — 超速回胴 鬼若弁慶
   - https://hazuse.com/machine/pachislot/7S1056/
   - 型式`オニワカベンケイ`、検定番号`7S1056`、メーカー、2018-02-19導入。
   - confidence: `ANALYSIS_HIGH`

2. ちょんぼりすた — 鬼若弁慶 スロット新台
   - https://chonborista.com/slot/border/54563/
   - 2018-02-19、約32.6G/50枚、天井なし、設定別BIG/REG/合算/機械割、BIG約307枚、REG約102枚、朝一恩恵なし、ガックン調査中。
   - confidence: `ANALYSIS_HIGH`

3. PiDEA — RBは目押し不要！超速Aタイプ「鬼若弁慶」／ボーダー
   - https://www.pidea.jp/articles/RB%E3%81%AF%E7%9B%AE%E6%8A%BC%E3%81%97%E4%B8%8D%E8%A6%81%EF%BC%81%E8%B6%85%E9%80%9FA%E3%82%BF%E3%82%A4%E3%83%97%E3%80%8C%E9%AC%BC%E8%8B%A5%E5%BC%81%E6%85%B6%E3%80%8D%EF%BC%8F%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC
   - 2017-10-17発表会、ボーダー第1弾、完全告知ノーマル、ボーナス合算1/147.6〜1/119.8、BIG約307枚/REG約102枚、当初12/4開店予定。
   - confidence: `INDUSTRY`

4. パチマガスロマガ — 超速回胴 鬼若弁慶 設定推測
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/border_slot/01/j.php
   - 設定別BIG/REG/合算の精密値。
   - confidence: `ANALYSIS_HIGH`

5. パチマガスロマガ — 超速回胴 鬼若弁慶 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/border_slot/01/c.php
   - 通常小役確率。50枚あたりゲーム数欄は当時`現在調査中`であることを確認。
   - confidence: `ANALYSIS_HIGH`

6. 中一商事 — ボーダー 鬼若弁慶 中古実機DB
   - https://www.nakaiti.com/html/sBorder001.html
   - 型式、ノーマルA、設定別BIG/REG/合算/出玉率精密値、BIG約307枚/REG約102枚。
   - confidence: `ANALYSIS_SINGLE`

7. DMMぱちタウン — 鬼若弁慶
   - https://p-town.dmm.com/machines/3030
   - 型式、メーカー、機械割レンジ、2018-02-19導入開始。
   - confidence: `ANALYSIS_HIGH`

8. スロパチクエスト — 2017年導入一覧
   - https://www.slopachi-quest.com/article/2017-sindai/
   - 2017-12-04欄に鬼若弁慶。PiDEAの発売前予定日が後年一覧にも残った証拠としてのみ採用。
   - confidence: `CONFLICT`

## qaNotes
- 「鬼若弁慶」「超速回胴 鬼若弁慶」「オニワカベンケイ」「7S1056」「ボーダー」を組み替えて、性能、設定変更、リセット、朝一、ガックン、据え置き、電源OFF ON、有利区間を再探索。
- 性能コアは複数資料で高一致。
- 50枚ベース32.6Gは明示値を回収したが、パチマガ当時ページ側は調査中のため信頼度を過剰に引き上げない。
- resetBehaviorは一般Aタイプ論で補完せず、本機専用資料で確定できる範囲のみ記録。
- BIG中設定示唆はresetBehaviorの変更判別と混同しない。
