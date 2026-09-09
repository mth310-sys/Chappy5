machineName: パチスロ そらのおとしものフォルテ
manufacturer: DAXEL
releaseDate: 2017-07-03
recordNumber: 1099
generation: 5号機
systemType: ART / 疑似ボーナス連チャン / CZ・ポイント管理あり
formalModelName: パチスロそらのおとしものフォルテ／DX
certificationNumber: 6S0047
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `パチスロそらのおとしものフォルテ／DX`、検定番号 `6S0047`、メーカーDAXEL、導入開始日2017-07-03を確認。
- すろぱちくえすと、ちょんぼりすた、パチビーでも2017-07-03導入を照合。
- グリーンべると2017-04-20業界記事でDAXELのプレス発表を一次系統として確認。同記事の納品開始予定は当時予定段階の「6月」であり、実導入日の2017-07-03とは publication-stage difference として扱う。
reliability: INDUSTRY_DATABASE_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
- 設定1: **97.0%**
- 設定2: **98.3%**
- 設定3: **100.1%**
- 設定4: **104.1%**
- 設定5: **107.1%**
- 設定6: **110.3%**
- HAZUSE、すろぱちくえすと、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### スーパーエンジェロイドボーナス初当たり
- 設定1: **1/882.2**
- 設定2: **1/843.6**
- 設定3: **1/794.5**
- 設定4: **1/767.4**
- 設定5: **1/732.2**
- 設定6: **1/811.0**

### エンジェロイドボーナス初当たり
- 設定1: **1/142.9**
- 設定2: **1/136.6**
- 設定3: **1/127.8**
- 設定4: **1/122.1**
- 設定5: **1/111.8**
- 設定6: **1/103.6**

### 疑似ボーナス合算
- 設定1: **1/123.0**
- 設定2: **1/117.6**
- 設定3: **1/110.1**
- 設定4: **1/105.4**
- 設定5: **1/97.0**
- 設定6: **1/91.8**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- HAZUSE / すろぱちくえすと / ちょんぼりすた: **約47G/50枚**。
- 一撃の自社調査精密レンジ: **約46.8～46.9G/50枚（設定1～6）**。
- 定義競合ではなく丸め精度差として保持し、canonical比較値は約47G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART（疑似ボーナス）純増: **約2.0枚/G**。
- すろぱちくえすと、ちょんぼりすた、パチビーで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- エンジェロイドボーナス: **50G+α / 約100枚**。
- スーパーエンジェロイドボーナス: **30G+α / 約60枚**。
- 疑似ボーナスはARTで、純増約2.0枚/G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常のゲーム数天井: **疑似ボーナス間最大999G**。
- 通常モード: 基本999G、チャンスモード: 基本998G、天国モード: 150G。
- 赤カウンター100pt到達時のソラオトジャッジは累計4回失敗後、次回（5回目）成功確定。途中で通常成功を挟んでも失敗累計は天井到達まで保持される。
- 青カウンター100ptはエンジェロイドバトル契機。
- 全モード移行率・CZ詳細抽選は物差しDB対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_PUBLIC_RESET_MODE_STATE_AND_POINT_DISTRIBUTIONS
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は**ゲーム数天井を再抽選（RESET）**。
- 内部モードを再抽選。
- 内部状態を再抽選。
- 赤・青カウンターの初期ポイントを公開振り分けで再セット。
- 液晶開始ステージは通常ステージ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き: **ゲーム数天井CARRYOVER / 内部状態CARRYOVER**。
- 液晶開始ステージは設定変更時と同じく通常ステージで、ステージ単独では設定変更判別不可。
- 据え置き時の内部モード、赤青ポイント、ソラオトジャッジ累積失敗回数を個別に直接明記した高信頼表は再探索で固定できず、電源OFF→ONや通常仕様から推測転記しない。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_OTHER_INDEPENDENT_CARRYOVER_FIELDS

### powerCycleBehavior
- 電源OFF→ONのみ: **ゲーム数天井CARRYOVER / 内部状態CARRYOVER**。
- 液晶開始ステージは通常ステージ。
- 純電断時の内部モード、赤青ポイント、ソラオトジャッジ累積失敗回数の個別契約は十分な再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_FOR_CEILING_AND_STATE

### gameCounterReset
- 設定変更: **RESET / 天井再抽選**。
- 据え置き: **CARRYOVER**。
- 電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 設定変更時は選択モードに応じて **150G / 998G / 999G** を再抽選。
- リセット後の150G天井選択率はモード振り分け込みで **約16.7%** と当時解析が明記。
- 通常モードが選ばれても25.0%で150G天井となるため、設定変更時専用の短縮要素が存在する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定1～3: **通常63.7% / チャンス33.2% / 天国3.1%**。
- 設定4～6: **通常57.8% / チャンス35.9% / 天国6.3%**。
- リセット時モード別天井振り分け:
  - 通常: **150G 25.0% / 998G 2.3% / 999G 72.7%**。
  - チャンス: **150G 2.3% / 998G 89.8% / 999G 7.8%**。
  - 天国: **150G 100.0%**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- 設定変更時: **通常50.0% / 高確41.8% / 超高確A5.1% / 超高確B3.1%**。
- 高確以上合計は公開各値から **50.0%**。
- 据え置き / 電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- リセット後の150G天井がモード込み**約16.7%**。
- 内部状態は高確以上が合計**50.0%**。
- 初期赤・青ポイントが0pt固定ではなく、5～45ptの範囲で再セットされる。
reliability: ANALYSIS_HIGH

### resetPenalties
- 設定変更で前日のゲーム数天井進捗は消滅するため、深い宵越しゲーム数を持つ台では据え置きと比較して不利になり得る。
- ソラオトジャッジ累積失敗回数の設定変更時RESET/CARRYOVERは直接契約を固定できていないため、不利要素として断定しない。
reliability: ANALYSIS_HIGH_FOR_GAME_COUNTER_RESET / UNVERIFIED_FOR_JUDGE_FAILURE_COUNTER

### resetDetection
- 朝一ステージは設定変更・据え置き双方とも通常ステージのため、**ステージ単独での判別不可**。
- 150G付近の疑似ボーナス当選はリセット由来短縮の実用的示唆になり得るが、確定判別ではない。
- 本機固有の確定的ガックン、初期出目、ランプ契約は「ガックン/朝一/設定変更/リール/判別」等で再探索したが直接根拠を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STAGE_AND_150G_BEHAVIOR / UNVERIFIED_FOR_DETERMINISTIC_GAKKUN

### numericResetData
- resetModeSetting1to3: **通常63.7% / チャンス33.2% / 天国3.1%**。
- resetModeSetting4to6: **通常57.8% / チャンス35.9% / 天国6.3%**。
- resetCeilingDistributionNormalMode: **150G 25.0% / 998G 2.3% / 999G 72.7%**。
- resetCeilingDistributionChanceMode: **150G 2.3% / 998G 89.8% / 999G 7.8%**。
- resetCeilingDistributionHeavenMode: **150G 100.0%**。
- reset150GCeilingOverallRate: **約16.7%**（当時解析掲載値）。
- resetState: **通常50.0% / 高確41.8% / 超高確A5.1% / 超高確B3.1%**。
- resetRedPoint: **5pt 2.3 / 10pt 7.8 / 15pt 11.7 / 20pt 15.6 / 25pt 25.4 / 30pt 15.6 / 35pt 11.7 / 40pt 7.8 / 45pt 2.0%**。
- resetBluePoint: **5pt 2.0 / 20pt 3.9 / 25pt 7.8 / 30pt 11.7 / 35pt 15.6 / 40pt 23.4 / 45pt 31.6%**。10pt・15ptは表上振り分けなし。

## conflicts
- materialCoreNumericConflict: **NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON**。
- baseGamesDefinition: 約47G/50枚と一撃自社調査46.8～46.9G/50枚は丸め精度差でありCONFLICT扱いしない。
- releaseTiming: グリーンべると2017-04-20発表会記事は「6月納品開始予定」、導入DB・複数解析は2017-07-03。予定情報と実導入日のpublication-stage differenceで、canonical releaseDateは2017-07-03。

## missingFields
- manufacturer-official exact payoutRateBySetting: UNVERIFIED_AFTER_RESEARCH。
- manufacturer-official resetBehavior document: UNVERIFIED_AFTER_RESEARCH。
- power-cycle mode/points/judge-failure direct contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun/reset indicator: UNVERIFIED_AFTER_RESEARCH。
- setting-change behavior of cumulative Soraoto Judge failure count: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. HAZUSE そらのおとしものフォルテ — https://hazuse.com/machine/pachislot/6S0047/
2. グリーンべると「高稼動実績を誇るアニスロから2機種が登場」（2017-04-20） — https://web-greenbelt.jp/00009512/
3. すろぱちくえすと — https://www.slopachi-quest.com/article/soranootoshimono-folte/
4. ちょんぼりすた — https://chonborista.com/slot/daxel-slot/37392/
5. 一撃 小役確率 / 50枚ベース — https://1geki.jp/slot/s_soranootoshimono/4/
6. 一撃 ソラオトジャッジ — https://1geki.jp/slot/s_soranootoshimono/43/
7. パチビー機種情報 — https://www.pachibee.jp/machines/lecture/217050004
