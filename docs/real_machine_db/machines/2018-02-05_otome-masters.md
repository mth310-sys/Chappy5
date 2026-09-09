# No.1171 乙女マスターズ～空を翔る白き軌跡～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 乙女マスターズ～空を翔る白き軌跡～
- manufacturer: オリンピア
- releaseDateCanonical: 2018-02-05
- generation: 5.9号機
- systemType: A+RT / 周期CZ / 有利区間搭載
- formalModelName: `乙女マスターズ空を翔る白き軌跡／S1`
- certificationNumber: `7S1191`
- collectedAt: 2026-09-10

## releaseDateEvidence
- パチビー、K-Navi、HAZUSE、ちょんぼりすたが2018-02-05導入で一致。
- HAZUSEは型式名`乙女マスターズ空を翔る白き軌跡／S1`、検定番号`7S1191`も掲載。

## performanceCore

### payoutRateBySetting
- status: `CONFLICT`
- seriesA_later_analysis:
  - setting1: 98.9%
  - setting2: 100.0%
  - setting3: 102.2%
  - setting4: 104.1%
  - setting5: 106.3%
  - setting6: 108.3%
  - sources: パチマガスロマガ / ちょんぼりすた / 期待値見える化 / 5号機クロニクル
- seriesB_hazuse_and_prelaunch_summary:
  - setting1: 97.6%
  - setting2: 98.6%
  - setting3: 100.7%
  - setting4: 104.1%
  - setting5: 106.3%
  - setting6: 108.3%
  - sources: HAZUSE / 2018-01-29導入直前まとめ等
- 設定1～3は差が丸めの範囲を超え、技術介入条件差を明記した一次的説明も固定できないため平均せずCONFLICT保持。設定4～6は一致。

### bonusBySetting
- 白7BIG: 全設定1/1638.4
- 赤7BIG: 全設定1/624.2
- 赤赤白BIG: 全設定1/851.1
- BIG合算Canonical: 全設定1/295.2
- REG:
  - setting1: 1/445.8
  - setting2: 1/409.6
  - setting3: 1/372.4
  - setting4: 1/324.4
  - setting5: 1/282.5
  - setting6: 1/244.5
- ボーナス合算:
  - setting1: 1/177.6
  - setting2: 1/171.6
  - setting3: 1/164.7
  - setting4: 1/154.6
  - setting5: 1/144.4
  - setting6: 1/133.7
- BIG合算は一撃/パチマガスロマガが1/295.2で一致し、3種BIG個別確率の合算とも整合。HAZUSE/ちょんぼりすた表には1/276.4表記があり、RT初当たり設定1と同値のため`CONFLICT_BIG_COMBINED_295_2_VS_276_4`として残す。

### rtInitialHitBySetting
- setting1: 1/276.4
- setting2: 1/274.1
- setting3: 1/271.8
- setting4: 1/267.8
- setting5: 1/263.3
- setting6: 1/258.0

### bonusPlusRtCombinedBySetting
- setting1: 1/108.1
- setting2: 1/105.5
- setting3: 1/102.5
- setting4: 1/98.0
- setting5: 1/93.2
- setting6: 1/88.1

### baseGamesPer50
- 約34.1G/50枚

### netIncrease
- RT「乙女TIME」: 約0.2枚/G
- 1セット20G+α、平均約30G
- ストック型RT

### basicPayout
- 白7系BIG: 約242枚
- 赤7系/赤赤白BIG: 約209枚
- REG（赤赤BAR）: 最大55枚
- 5号機クロニクルには259/207/46枚の別系列表記があるが、パチビー・ちょんぼりすた・スロパチネット・中古実機DBで242/209/55枚が一致するため、物差しのcanonicalは242/209/55枚。別系列はconflictsに保持。

### ceiling
- `NONE`
- 通常時は128G+α周期でCZ「乙女CHALLENGE」へ突入するが、これは天井ではない。

## modeSpecificMinimumData
- CZ「乙女CHALLENGE」: RTストック無しボーナス後、または通常時128G+α周期で突入。6択押し順正解等からRTへ。
- 通常時は低確/高確/超高確等の内部状態があり、ボーナス時のRTストック抽選に影響する。
- 有利区間概念を持つ5.9号機。通常時/RT中の全状態移行率など完全再現用詳細抽選は本DB対象外。

## resetBehavior

### settingChangeBehavior
- 一撃の本機専用比較表: 設定変更時は周期G数をリセット、内部状態をリセット。
- 液晶開始ステージはタウンエリア / ゴルフエリアを各50%で抽選。
- ちょんぼりすたは設定変更後の内部状態を「ボーナス後と同じ状態」と整理している。
- 天井非搭載。

### carryOverBehavior
- 「設定据え置き」を純電源OFF→ONと独立条件で直接列挙した本機固有比較資料は再探索後も固定できず、`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 純電源OFF→ONでは周期G数/内部状態が引継ぎと直接確認できるが、これを据え置き独立契約へ自動転記しない。

### powerCycleBehavior
- 一撃の本機専用比較表: 純電源OFF→ON時は周期G数を引継ぎ、内部状態も引継ぎ。
- 液晶はタウンエリア / ゴルフエリアを各50%で抽選。
- 周期G数は液晶上では判別不能と明記。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- czCycleCounter_settingChange: `RESET`
- czCycleCounter_powerCycle: `CARRYOVER`
- czCycleCounter_carryOverDistinctCondition: `UNVERIFIED_AFTER_RESEARCH`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- 設定変更専用の短縮天井: `NOT_APPLICABLE`

### modeAfterReset
- ゲーム数解除モード/天国モード: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- 128G+αのCZ周期カウンタは設定変更でリセット、純電断では引継ぎ。
- 朝一専用モード振り分けは`NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: `RESET`; ちょんぼりすた表現では「ボーナス後と同じ状態」
- powerCycle: `CARRYOVER`
- carryOverDistinctCondition: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- 本機が有利区間を用いることは解析資料で確認。
- 設定変更時の「有利区間そのもの」の機種固有直接契約は、周期/内部状態リセットの記載とは別概念として明記された資料を固定できず`UNVERIFIED_AS_EXPLICIT_ADVANTAGEOUS_SECTION_CONTRACT_AFTER_RESEARCH`。
- 一般的な5.9号機仕様からの補完はしない。

### resetBenefits
- 設定変更時は周期G数がリセットされ、内部状態はボーナス後相当へ。
- ちょんぼりすたによれば、朝一すぐに1枚役こぼしを契機としてCZが発生した場合は設定変更濃厚（前日ボーナス後即ヤメ/128G付近ヤメ等の例外あり）。
- 天井短縮は`NOT_APPLICABLE_NO_CEILING`。

### resetPenalties
- 前日周期G数や内部状態を持ち越さないため、据え置きなら得られた可能性のある周期進行/好状態は設定変更で失われる。
- 設定変更専用の数値的ペナルティ率は`NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 一撃: 設定変更でも純電断でも液晶開始はタウン/ゴルフ各50%で、ステージ単独判別は不可。
- ちょんぼりすた: 朝一すぐの1枚役こぼし後CZは設定変更濃厚（例外あり）。朝一128G以内のCZ突入は据え置き濃厚とする解析あり。
- 純電断時の周期G数は液晶上で判別不能。
- 本機固有のガックン発生条件/確率は、機種名・型式・メーカー・設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン等へ検索語を変えて再探索したが`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetLiquidCrystalStageDistribution:
  - townArea: 50%
  - golfArea: 50%
  - appliesTo: settingChange and powerCycle
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時/純電断時の液晶開始ステージはタウンエリア50% / ゴルフエリア50%。
- CZは通常128G+α周期。ちょんぼりすたは朝一128G以内CZを据え置き濃厚材料、朝一即1枚役こぼし後CZを設定変更濃厚材料としている（例外条件あり）。
- 設定変更専用のCZ当選率、初当たり率、状態振り分け率などの比較可能な公開数値は、資料系統を変えて再探索後も`NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_PAYOUT_RATE_SETTINGS_1_TO_3`:
  - seriesA: 98.9 / 100.0 / 102.2 / 104.1 / 106.3 / 108.3%（パチマガスロマガ、ちょんぼりすた、期待値見える化、5号機クロニクル）
  - seriesB: 97.6 / 98.6 / 100.7 / 104.1 / 106.3 / 108.3%（HAZUSE、導入直前まとめ等）
  - 設定1～3だけ差があり、条件差を明示する一次説明を固定できないため平均せず双方保持。
- `CONFLICT_BIG_COMBINED_295_2_VS_276_4`:
  - 一撃/パチマガスロマガ: BIG合算1/295.2。
  - HAZUSE/ちょんぼりすた表示: 1/276.4。
  - 白1/1638.4・赤1/624.2・異色1/851.1の合算は約1/295.2で、1/276.4はRT初当たり設定1と同値。canonicalは1/295.2とし、競合表示も削除しない。
- `CONFLICT_BASIC_PAYOUT_LABELS`:
  - パチビー/ちょんぼりすた/スロパチネット/中古実機DB: 約242 / 約209 / 最大55枚。
  - 5号機クロニクル: 259 / 207 / 46枚。
  - 払出条件/純増等の定義差の可能性があるが直接説明を固定できないため別系列として保持。

## sources
取得日: 2026-09-10

1. パチビー — 機種情報
   - https://www.pachibee.jp/machines/about/217120002
   - 導入2018-02-05、オリンピア、5.9号機/A+RT、ボーナス+RT合算、約242/209/最大55枚、RT約0.2枚/G・平均30G、128G+α周期CZ。
   - confidence: `INDUSTRY`

2. HAZUSE — 基本スペック / 天井・設定判別
   - https://hazuse.com/machine/pachislot/7S1191/genre/201/
   - https://hazuse.com/machine/pachislot/7S1191/
   - 型式`乙女マスターズ空を翔る白き軌跡／S1`、検定番号7S1191、導入2018-02-05、設定別確率、天井非搭載/128G周期CZ、機械割seriesB。
   - confidence: `ANALYSIS_HIGH`

3. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_otomem/3/
   - 天井非搭載。設定変更時: 周期G数/状態リセット、液晶タウンorゴルフ各50%。純電源OFF→ON: 周期G数/状態引継ぎ、液晶同じく各50%、液晶上周期判別不能。
   - confidence: `ANALYSIS_HIGH`

4. 一撃 — ボーナス確率
   - https://1geki.jp/slot/s_otomem/1/
   - BIG個別、BIG合算1/295.2、REG、ボーナス合算、RT初当たり。
   - confidence: `ANALYSIS_HIGH`

5. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/137/h.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/137/h-1.php
   - ボーナス/RT初当たり、PAYOUT seriesA、BIG合算1/295.2。
   - confidence: `ANALYSIS_HIGH`

6. ちょんぼりすた — 乙女マスターズ
   - https://chonborista.com/slot/orinpia-slot/51815/
   - 導入2018-02-05、A+RT、34.1G/50枚、RT約0.2枚/G、約242/209/55枚、PAYOUT seriesA、朝一リセット挙動・CZによる変更/据え置き推測。
   - confidence: `ANALYSIS_HIGH`

7. K-Navi — 乙女マスターズ
   - https://p-kn.com/slot/2938/
   - ホール導入開始2018-02-05、ボーナス/RT基礎値。
   - confidence: `ANALYSIS_HIGH`

8. 期待値見える化 — 設定判別
   - https://slotjin.com/slot-tool/otomemasters/
   - 機械割seriesA、設定別ボーナス確率の照合。
   - confidence: `ANALYSIS_HIGH`

9. 5号機クロニクル — 平和＆オリンピア5号機一覧
   - https://5goki.com/heiwa-olympia
   - 機械割seriesA、A+RT、2018年2月。獲得枚数は259/207/46枚の別系列表記がありCONFLICT保持。
   - confidence: `ANALYSIS_SINGLE`

10. スロパチネット — 基本情報
   - https://slopachi-net.com/otomemastere
   - 型式、導入日、A+RT、約242/209/55枚、RT純増、天井非搭載。
   - confidence: `ANALYSIS_SINGLE`

## missingFields
- 設定据え置きを純電源OFF→ONと独立条件で明記した周期/状態契約: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更時の有利区間そのものの明示的機種固有処理: `UNVERIFIED_AFTER_RESEARCH`
- ガックン発生条件/確率: `UNVERIFIED_AFTER_RESEARCH`
- 設定変更専用の状態振り分け率/CZ率/初当たり率: `NONE_CONFIRMED_AFTER_RESEARCH`
