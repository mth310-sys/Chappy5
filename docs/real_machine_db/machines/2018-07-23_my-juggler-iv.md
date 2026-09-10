# No.1215 マイジャグラーIV

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: マイジャグラーIV
- manufacturer: 北電子
- releaseDateCanonical: 2018-07-23
- generation: 5号機 / 5.9号機時代のノーマル機
- systemType: ノーマルA / 完全告知
- formalModelName: `マイジャグラーIV／KE`
- certificationNumber: `7S1012`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`マイジャグラーIV／KE`・検定番号`7S1012`と紐づけて導入開始日2018-07-23を掲載。
- K-Navi、パチ＆スロ必勝本、ちょんぼりすたも2018-07-23で一致。
- PiDEAの2018-05-23展示会記事も開店予定日を2018-07-23とする。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED_WITH_INDUSTRY_SOURCE_AND_MODEL_ID`。

## performanceCore

### payoutRateBySetting
- setting1: 95.7%
- setting2: 97.9%
- setting3: 99.9%
- setting4: 102.8%
- setting5: 105.3%
- setting6: 109.4%

北電子現行公式に残る「マイジャグラー」製品ページの数列と、HAZUSE/K-Navi/必勝本/複数解析資料が一致。公式ページは旧シリーズ名表記のため本機固有照合には型式付きHAZUSE等を併用する。

### initialHitBySetting
BIG:
- setting1: 1/287.4
- setting2: 1/282.5
- setting3: 1/273.1
- setting4: 1/264.3
- setting5: 1/252.1
- setting6: 1/240.9

REG:
- setting1: 1/431.2
- setting2: 1/364.1
- setting3: 1/341.3
- setting4: 1/292.6
- setting5: 1/277.7
- setting6: 1/240.9

ボーナス合算:
- setting1: 1/172.5
- setting2: 1/159.1
- setting3: 1/151.7
- setting4: 1/138.9
- setting5: 1/132.1
- setting6: 1/120.5

### baseGamesPer50
- canonical representative: 約35G/50枚
- secondary range: 約34.9〜37.0G/50枚（設定差を含む後年DB）
- なな徹は約35G、みんスロは約34.9〜37.0G、別ジャグラー整理資料は約34〜37G。
- 当時必勝本は導入時点で「調査中」のため、精密設定別値は高信頼canonicalへ昇格しない。

### netIncrease
- `NOT_APPLICABLE_BONUS_ONLY_NORMAL_TYPE`

### basicPayout
- BIG: 約312枚
- REG: 約104枚
- PiDEA展示会記事、アタリ7、みんスロ等で一致。

### ceiling
- 天井: `NOT_APPLICABLE / 非搭載`

## modeSpecificMinimumData
- 完全告知ノーマルタイプ。AT/ART/CZ/ゲーム数解除モードは非搭載。
- ボーナス当選時の告知割合は先告知約25%、後告知約75%だが、resetBehaviorの物差しに必須ではないため補助情報扱い。

## resetBehavior

### settingChangeBehavior
- 設定変更後は、朝一1G目またはゾロ目ゲーム数でBIGを引いても、通常なら条件成立時に起こり得るBGM変化が発生しないとする本機固有解析を確認。
- 天井・AT/ART/CZ・通常時モードがないため、それらのリセット処理は`NOT_APPLICABLE`。
- 成立済みボーナスフラグ等の低レベル内部状態について、設定変更時の本機固有直接契約は再探索後も`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 朝一最初のBIGでBGM変化が発生した場合、設定据え置き確定とする本機固有解析あり。設定変更では同条件のBGM変化が抑止されるため、据え置き判別契約として保存。
- その他の低レベル内部フラグについて据え置きを純電断から独立して示す公開契約は`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 「設定据え置き」ではなく、純粋な電源OFF→ONのみを独立条件として、BGM履歴/ゲーム数状態/成立済みボーナス等がどう扱われるかを示す本機固有資料は、検索語・資料系統を変えた再探索後も`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 据え置き情報を純電断契約へ自動転記しない。

### gameCounterReset
- 天井ゲーム数カウンタ: `NOT_APPLICABLE_NO_CEILING`。
- 朝一BGM判別に関係するゲーム数履歴は設定変更でリセット相当の挙動が確認できるが、純電断時の個別処理は`UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`

### modeAfterReset
- AT/ART/CZ・ゲーム数解除モード: `NOT_APPLICABLE_NORMAL_TYPE`。
- リセット専用出玉モード/朝一モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 出玉に関わる高確/低確等の通常時状態: `NOT_APPLICABLE_NORMAL_BONUS_ONLY_GAMEPLAY`。
- 成立済みボーナス等の内部フラグ処理: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機はボーナスのみで出玉を増やすノーマル機で、攻略資料上AT/ARTや有利区間を用いるゲーム性は確認されない。
- 本機固有の「有利区間リセット」契約は`NOT_APPLICABLE_TO_RECORDED_GAMEPLAY`。5.9号機一般論から架空の有利区間状態を補完しない。

### resetBenefits
- 設定変更専用の天井短縮、初当たり優遇、CZ/ART優遇、朝一専用モード: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 出玉面の設定変更専用ペナルティ: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 判別上は設定変更すると1G/ゾロ目BIGの特殊BGM条件がリセットされるため、据え置き判別材料が消える。

### resetDetection
- BGM: 朝一最初のBIGでBGM変化が発生すれば設定据え置き確定とする解析あり。設定変更時は1G目/ゾロ目G BIGでもBGM変化しない。
- ガックン: ちょんぼりすたは「対策されていなければおそらく可能・ジャグラーは幅が小さく参考程度」とする一方、別のジャグラー実戦系整理資料はマイジャグIVをガックン判別×と評価。確定契約にせず`CONFLICT_GAKKUN_POSSIBLE_REFERENCE_ONLY_VS_EFFECTIVELY_UNUSABLE`として保持。
- ガックン発生率/確定率の公開数値は`PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND`
- resetSpecificHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`
- morningBgmRule: `FIRST_BIG_BGM_CHANGE_AFTER_OPENING -> SETTING_CARRY_OVER_CONFIRMED_BY_ANALYSIS`

## morningRelatedPublicNumbers
- リセット専用の初当たり/CZ/ART確率、短縮天井、モード振り分けは非該当または未確認。
- 朝一判別の主要公開契約は数値率ではなく、最初のBIGにおけるBGM変化有無。

## conflicts
- gakkunDetection: `CONFLICT_GAKKUN_POSSIBLE_REFERENCE_ONLY_VS_EFFECTIVELY_UNUSABLE`。
  - ちょんぼりすた: ホール対策がなければ朝一ガックンによる設定変更推測は「おそらく可能」、ただしジャグラー系は幅が小さく参考程度。
  - ジャグラーシリーズ整理資料: マイジャグラーIVのガックン判別を「×」と評価。
  - 発生条件・発生率を固定できないため、BGM判別より低信頼の補助情報に留める。

## missingFields
- 純電源OFF→ONだけを独立条件としたBGM履歴/ゲーム数履歴/成立済みボーナス等の処理。
- 設定変更時・純電断時の成立済みボーナスフラグ等の低レベル内部契約。
- 本機固有ガックン発生率/確定率。

## sources
取得日: 2026-09-10

1. 北電子 — マイジャグラー 製品情報
   - https://www.kitadenshi.co.jp/slot/myjuggler/
   - BB/RB/合成確率・出玉率の公式数列を確認。IV固有同定は型式付き資料と併用。
   - confidence: `OFFICIAL_SUPPORTING_SERIES_SPEC`
2. PiDEA — さらなる驚きを独占「マイジャグIV」／北電子
   - https://pidea.jp/articles/%E3%81%95%E3%82%89%E3%81%AA%E3%82%8B%E9%A9%9A%E3%81%8D%E3%82%92%E7%8B%AC%E5%8D%A0%E3%80%8C%E3%83%9E%E3%82%A4%E3%82%B8%E3%83%A3%E3%82%B0%E2%85%A3%E3%80%8D%EF%BC%8F%E5%8C%97%E9%9B%BB%E5%AD%90
   - 2018-05-22展示会、導入予定2018-07-23、BIG約312枚/REG約104枚を確認。
   - confidence: `INDUSTRY`
3. HAZUSE — マイジャグラーIV
   - https://hazuse.com/machine/pachislot/7S1012/
   - 型式、検定番号、導入日、メーカー、出玉率レンジを確認。
   - confidence: `ANALYSIS_HIGH`
4. K-Navi — マイジャグラーIV
   - https://p-kn.com/slot/3022/
   - 2018-07-23導入、BIG/REG確率を照合。
   - confidence: `ANALYSIS_HIGH`
5. パチ＆スロ必勝本 — マイジャグラーIV 機種概要
   - https://p.hisshobon.jp/machine/3180/1/70070
   - 導入日、BIG/REG/合算/機械割を照合。導入時の50枚G数は調査中表記。
   - confidence: `ANALYSIS_HIGH`
6. なな徹 — マイジャグラーIV 機種概要
   - https://nana-press.com/kaiseki/machine/23/
   - 約35G/50枚、天井非搭載、ノーマル仕様を確認。
   - confidence: `ANALYSIS_HIGH_RETROSPECTIVE`
7. なな徹 — マイジャグラーIV 朝イチ/設定変更
   - https://nana-press.com/kaiseki/machine/23/349/
   - 設定変更時は1G目/ゾロ目G BIGでもBGM変化なし、朝一BIGでBGM変化なら据え置き確定を確認。
   - confidence: `ANALYSIS_HIGH_RETROSPECTIVE_MACHINE_SPECIFIC`
8. ちょんぼりすた — マイジャグラー4
   - https://chonborista.com/slot/kitadenshi/59754/
   - 導入日、スペック、天井非搭載、ガックンは可能性ありだが参考程度との解析を確認。
   - confidence: `ANALYSIS_HIGH`
9. みんスロ — マイジャグラーIV
   - https://minslo.com/%E3%83%9E%E3%82%A4%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BCiv/
   - 約34.9〜37.0G/50枚、BIG312枚/REG104枚を補助照合。
   - confidence: `ANALYSIS_SINGLE_RETROSPECTIVE`
10. 元プロMGのパチスロブログ — ジャグラーシリーズスペックまとめ
   - https://www.pachislotblog.tokyo/juggler-series-specmatome/
   - マイジャグラーIVを約34〜37G/50枚、ガックン判別×と整理。
   - confidence: `ANALYSIS_SINGLE_RETROSPECTIVE`
11. すろぱちくえすと — 2018年導入機種まとめ
   - https://www.slopachi-quest.com/article/sindai-2018/
   - 2018-07-23群をハイスクール・フリート/マイジャグラー4として掲載し、7/30はルパン三世 世界解剖とする境界監査に使用。
   - confidence: `ANALYSIS_HIGH_CALENDAR`
