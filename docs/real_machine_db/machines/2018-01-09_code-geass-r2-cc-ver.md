# No.1165 パチスロ コードギアス反逆のルルーシュR2 C.C.ver.

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ コードギアス反逆のルルーシュR2 C.C.ver.
- manufacturer: サミー（製造元: ロデオ）
- releaseDateCanonical: 2018-01-09
- generation: 5.9号機（5号機）
- systemType: A+RT / GRT / 技術介入
- formalModelName: `コードギアスR2C.C.／ZS`
- certificationNumber: `7S1251`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは導入開始日2018-01-09、メーカーSammy、型式`コードギアスR2C.C.／ZS`、検定番号`7S1251`を掲載。
- ちょんぼりすた、一撃、2018年導入カレンダーも2018-01-09で一致。
- サミーネットワークスのメーカー発表転載（4Gamer）は「2018年1月にホール導入」とし、サミー株式会社の機種、製造元ロデオと明記。

## performanceCore

### payoutRateBySetting
#### marketPublished
- setting1: 97.8%
- setting2: 99.0%
- setting3: 102.6%
- setting4: 105.5%
- setting5: 109.3%
- setting6: 112.0%

#### fullStrategy
- setting1: 99.4%
- setting2: 100.7%
- setting3: 104.4%
- setting4: 107.3%
- setting5: 111.1%
- setting6: 113.9%

### bigBonusCombinedBySetting
- setting1: 1/332.7
- setting2: 1/319.7
- setting3: 1/299.3
- setting4: 1/283.7
- setting5: 1/266.4
- setting6: 1/264.3

### middleBonusCombinedBySetting
- setting1: 1/500.3
- setting2: 1/492.8
- setting3: 1/464.8
- setting4: 1/431.2
- setting5: 1/409.6
- setting6: 1/344.9

### bonusCombinedBySetting
- setting1: 1/199.8
- setting2: 1/193.9
- setting3: 1/182.0
- setting4: 1/171.1
- setting5: 1/161.4
- setting6: 1/149.6

### baseGamesPer50
- 約32G/50枚

### netIncrease
- RT: 約0.2枚/G
- ボーナス主体A+RTのためAT/ART純増とは定義を分離。

### basicPayout
- GEASS BIG BONUS: 252枚 + 次回ボーナスまでの無限RT「C.C.タイム」
- HYPER BIG BONUS: 最大250枚 + RT150G
- NORMAL BIG BONUS: 最大205枚 + RT150G
- MIDDLE BONUS: 最大70枚 + RT50G+α

### ceiling
- `NONE`
- 天井非搭載。

## modeSpecificMinimumData
- サミー新機軸「GRT」第1弾。
- 全ボーナス後にRTへ突入し、BIG系は150Gまたは無限RT、MB後は50G特殊RTから無限RT昇格の可能性を持つ。
- 実機完全再現用のRT遷移フラグ詳細・リプレイ種別抽選は収集対象外。

## resetBehavior

### settingChangeBehavior
- 液晶開始ステージ: **学校ステージ**。
- RT状態: **リセット**。
- 天井非搭載のためゲーム数天井リセットは`NOT_APPLICABLE`。

### carryOverBehavior
- 天井非搭載のため前日ゲーム数持越し狙いは`NOT_APPLICABLE_NO_CEILING`。
- 「設定を変更せず営業終了→翌日」のRT内部状態について、純電源OFF→ON条件では引継ぎが直接確認されている。電源操作を伴わない据え置きだけを独立条件で比較した本機固有資料は`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 液晶開始ステージ: **学校ステージ**。
- RT状態: **引き継ぐ**。
- 設定変更と純電源OFF→ONで開始ステージは共通だが、RT状態の扱いが異なる。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- 設定変更専用の短縮天井なし。

### modeAfterReset
- AT/ART系ゲーム数解除モード・朝一専用天国は`NONE_CONFIRMED_AFTER_RESEARCH`。
- RT状態は設定変更でリセット、純電断で引継ぎ。

### stateAfterReset
- 公開資料で朝一専用の高確/低確やCZ状態は確認されない。
- RT状態のみ、設定変更と純電断の差を直接固定。

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 5.9号機だが、公開ゲーム性はボーナス+RTのGRT。朝一客AI用に比較可能な有利区間リセット恩恵・ランプ判別は確認されないため規格一般論で補完しない。

### resetBenefits
- 天井短縮、朝一専用天国、高確固定、初当たり優遇等は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時はRT状態がリセットされるため、前日RT状態を純電断なら引き継ぐのに対し、変更時は保持しない。
- その他の主要な設定変更固有不利要素は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時/純電源OFF→ON時とも液晶は学校ステージで開始するため、開始ステージ単独では変更判別不可。
- RT状態は設定変更でリセット・純電断で引継ぎだが、朝一外見だけで確定判別できる公開契約としては扱わない。
- 本機C.C.ver.固有のガックン発生条件/確率を直接固定する信頼できる資料は、`コードギアスR2`本編（2016年ART機）の情報が検索で大量混入するため、シリーズ別機種を厳密分離して再探索したが固定できず`UNVERIFIED_AFTER_RESEARCH`。R2本編のガックン情報は転記しない。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`
- publicMorningStageSettingChange: `学校ステージ`
- publicMorningStagePowerCycle: `学校ステージ`
- rtStateSettingChange: `RESET`
- rtStatePowerCycle: `CARRYOVER`

## conflicts
- manufacturer attribution: HAZUSE/機種DBはメーカーをSammyとし、ちょんぼりすたは©ロデオ、メーカー発表転載は「サミー株式会社の機種」「製造元/株式会社ロデオ」とする。役割分離と判断し、canonicalは`サミー（製造元: ロデオ）`。数値競合として平均しない。
- 同名検索ノイズ: 2016年ART機`パチスロ コードギアス反逆のルルーシュR2`の朝一天井/ギアスポイント/ガックン情報は本機C.C.ver.とは別機種。混入禁止。

## sources
取得日: 2026-09-10

1. HAZUSE — パチスロ コードギアス反逆のルルーシュR2 C.C.ver.
   - https://hazuse.com/machine/pachislot/7S1251/
   - 導入2018-01-09、Sammy、型式`コードギアスR2C.C.／ZS`、検定番号`7S1251`、設定別ボーナス確率等。
   - confidence: `ANALYSIS_HIGH`

2. ちょんぼりすた — コードギアスR2 C.C.ver.
   - https://chonborista.com/slot/sammy-slot/50647/
   - 導入2018-01-09、A+RT、約32G/50枚、設定別機械割/完全攻略値、ボーナス確率、獲得枚数、天井なし。
   - confidence: `ANALYSIS_HIGH`

3. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_codegeass2cc/3/
   - 天井非搭載。設定変更時: 学校ステージ/RTリセット。電源OFF→ON時: 学校ステージ/RT引継ぎ。
   - confidence: `ANALYSIS_HIGH`

4. 一撃 — 機種総合
   - https://1geki.jp/slot/s_codegeass2cc/
   - 2018-01-09導入予定、GRT第1弾、BIG後RT150G、MB後特殊RT50G等。
   - confidence: `ANALYSIS_HIGH`

5. スロがち — コードギアスR2 C.C.Ver.
   - https://slogati.com/codegeass-cc/
   - 5.9号機GRT、約32G/50枚、RT純増約0.2枚/G、設定変更時RTリセット/学校、電源入切RT引継ぎ/学校、天井なし。リセット挙動を一撃と照合。
   - confidence: `ANALYSIS_SINGLE`

6. 4Gamer — サミーネットワークス発表転載
   - https://www.4gamer.net/games/021/G002122/20180220020/
   - 2018年1月ホール導入、サミー株式会社の機種、GRT第1弾、製造元ロデオ。
   - confidence: `INDUSTRY`

7. 真パチスロ備忘録 — 2018年導入日一覧
   - https://sin-surobi.com/dounyubi/23041/
   - 2018-01-09群にコードギアスR2 C.C.Verと南国物語Aタイプを掲載。
   - confidence: `ANALYSIS_SINGLE_CALENDAR`

8. スロットコレクション 2-9伝説まとめ — 導入カレンダー
   - https://29den.com/newslot/
   - 2018-01-09にコードギアスR2 C.C.バージョン、南国物語Aタイプを掲載し別系統で日付群照合。
   - confidence: `ANALYSIS_SINGLE_CALENDAR`

## missingFields
- C.C.ver.固有のガックン発生条件/発生率: `UNVERIFIED_AFTER_RESEARCH`
- 「操作なし据え置き」を純電断と切り離したRT内部状態契約: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`

## qualityNotes
- `コードギアスR2`だけで検索すると2016年ART機の設定変更情報が大量に混入する。C.C.ver./型式`ZS`/2018/GRTを必ず含めて分離した。
- performance coreは既存同名シリーズから流用せず、本機の資料のみで固定。
