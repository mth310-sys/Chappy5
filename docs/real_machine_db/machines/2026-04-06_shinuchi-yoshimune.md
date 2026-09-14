# 真打 吉宗

recordNo: 1788
machineName: 真打 吉宗
aliases: L真打吉宗 / スマスロ 真打吉宗 / 真打吉宗
manufacturer: 大都技研
formalModel: L／真打吉宗／A1
inspectionCode: 530504
releaseDate: 2026-04-06
generation: 6.5号機 / スマスロ
systemType: AT / 差枚数管理型AT+疑似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信/P-WORLD業界ニュースで大都技研発表、型式 `L／真打吉宗／A1`、2026年4月上旬導入予定を確認。
- HAZUSEで型式 `L／真打吉宗／A1`、検定番号 `530504`、導入開始日2026-04-06を確認。
- パチビーでも大都技研、導入日2026-04-06、スマスロAT機を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.6%
- setting3: 101.0%
- setting4: 104.5%
- setting5: 108.0%
- setting6: 114.0%
initialHitBySetting:
  cz:
  - setting1: 1/313.0
  - setting2: 1/303.0
  - setting3: 1/283.5
  - setting4: 1/267.1
  - setting5: 1/256.9
  - setting6: 1/250.6
  at:
  - setting1: 1/488.9
  - setting2: 1/471.5
  - setting3: 1/438.5
  - setting4: 1/398.1
  - setting5: 1/377.0
  - setting6: 1/354.9
baseGamesPer50: 約31G/50枚
netIncrease:
- 勧善懲悪RUSH: 約2.7枚/G
- 真BIG BONUS: 約9.0枚/G
basicPayout:
- 勧善懲悪RUSH: 初期150枚
- 真BIG BONUS: 711枚を超えるシリーズ史上最大級BBとして公表。固定平均獲得枚数は今回の物差し粒度では未採用
modeSpecificMinimumData:
- CZ間天井: 1000G+α または最大6周期でCZ当選
- AT間天井: 1500G+αでAT当選
- 真BB後AT間天井: 700G+αへ短縮
- 周期モード: 通常A最大6周期 / 通常B最大4周期 / 通常C最大4周期でAT直撃 / 天国1周期
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間・天井・CZモード・夜回りポイント・周期数をRESETする比較表をなな徹で確認。
- AT間天井は通常1500G+αから1000G+αへ短縮。
- CZモード（周期モード）と夜回りポイントモードは高モードが選ばれやすくなる。
- CZ間1000G天井および最大6周期の周期天井については、設定変更専用の数値短縮は確認できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹のリセット判別表で据え置き時は有利区間・天井・モード・夜回りポイント・周期数を引き継ぐと確認。
- 朝一表示の夜回りカウンターは設定変更/据え置きに関わらず周期数・ポイントが初期状態に見えるため、外見からの判別は困難。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 1gekiの朝一比較表で、電源OFF→ON時は周期モード・夜回りポイントモード・ゲーム数天井を引き継ぐと確認。
- 朝一開始ステージは修練場ステージ。
- 純電断時の有利区間そのものを直接列挙した機種固有文言は再探索後も固定できず、一般則で補完しない。
confidence: ANALYSIS_HIGH_FOR_MODE_AND_CEILING / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION_WORDING

### gameCounterReset
settingChange: RESET_FOR_AT_INTERVAL
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 設定変更後のAT間天井は1000G+α。
- CZ間1000G天井・周期天井は設定変更専用短縮の確認なし。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalAtCeiling: 1500G+α
resetAtCeiling: 1000G+α
shortening: 500G
normalCzCeiling: 1000G+α
resetCzCeiling: 1000G+α（専用短縮確認なし）
normalCycleMaximum: 6周期
resetCycleMaximum: 6周期（専用短縮確認なし。ただし高モード選択率優遇）
benefit: AT間天井到達でAT「勧善懲悪RUSH」当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- CZモード（通常A/通常B/通常C/天国）を再抽選し、高モード選択率がアップ。
- 夜回りポイントモード（A/B/C/D）も再抽選し、高モード選択率がアップ。
- 設定変更時の各モード具体振り分け率は、機種名・型式・大都技研・吉宗シリーズと「設定変更/リセット/CZモード/周期モード/夜回りポイント/振り分け」を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIRECTIONAL_ADVANTAGE / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- 高確/内部状態について設定変更・据え置き・純電断を直接比較する機種固有の高優先資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- CZモード・夜回りポイントモードとは分離し、内部状態を推測補完しない。
confidence: UNVERIFIED

### advantageousSectionReset
- なな徹の比較表で設定変更時RESET、据え置き時CARRY_OVERを確認。
- 純電源OFF→ON単独の有利区間直接文言は再探索後も固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_POWER_CYCLE_WORDING

### resetBenefits
- AT間天井1500G+α→1000G+αへ500G短縮。
- CZモードの高モード選択率アップ。
- 夜回りポイントモードの高モード選択率アップ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の主要な公開不利要素は十分な再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- なな徹は朝一の夜回りカウンターが設定変更/据え置きに関わらず初期表示になるため、見た目での判別は困難としている。
- AT間1000G+αを明確に超えてAT非当選なら、設定変更後天井とは整合しないため据え置き推測の強材料。ただし前兆等を考慮し単独G数だけで確定扱いにはしない。
- 本機固有のリールガックン条件/発生率は、機種名・型式・大都技研・吉宗シリーズと「ガックン/設定変更/据え置き/朝一」を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_DIFFICULTY_AND_CEILING_CLUE / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetAtCeiling: 1000G+α
normalAtCeiling: 1500G+α
atCeilingShortening: 500G
czModeResetAdvantage: 高モード選択率アップ（具体率UNVERIFIED_AFTER_RESEARCH）
nightPatrolPointModeResetAdvantage: 高モード選択率アップ（具体率UNVERIFIED_AFTER_RESEARCH）
czModeReference:
- normalA: 最大6周期 / 基本CZ
- normalB: 最大4周期 / 基本CZ
- normalC: 最大4周期 / AT直撃
- heaven: 1周期 / 基本CZ
nightPatrolPointModeReference:
- modeA: 最大600pt
- modeB: 最大600pt
- modeC: 最大300pt
- modeD: 最大200pt
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_VALUES

## conflicts
- 重大な性能数値CONFLICTは今回確認なし。
- 一部初期口コミ/掲示板系にリセット天井を「990G」とする表記があるが、なな徹・パチマガスロマガ・パチビー・複数解析が1000G+αで一致するため、掲示板由来値はcanonicalに採用しない。

## sources
retrievedAt: 2026-09-15
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/33008/yugitsushin
- HAZUSE: https://hazuse.com/machine/pachislot/SX0123/
- パチビー基本スペック: https://www.pachibee.jp/machines/index/226030000
- パチビー攻略情報: https://www.pachibee.jp/machines/kouryaku/226030000
- なな徹解析まとめ: https://nana-press.com/kaiseki/machine/1124/
- なな徹朝一・リセット: https://nana-press.com/kaiseki/machine/1124/36101/
- 1geki天井・朝一: https://1geki.jp/slot/l_shinuchi_yoshimune/3/
- パチマガスロマガFREE天井: https://pachimaga.com/free/article/20260408/064931.php
- 必勝本 周期モード: https://p.hisshobon.jp/machine/4715/1/114993
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/252676/
- ジャグラーズネット: https://jugglersnet.com/chumoku/shinnuchi-yoshimune
- パチマガスロマガ 夜回りポイント: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/91/tj04.php

## missingFields
- 設定変更時CZモード具体振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時夜回りポイントモード具体振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電断時の高確・内部状態直接比較: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON単独の有利区間直接文言: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用の全周期振り分け、全ポイント獲得抽選、AT中上乗せ振り分け、真BB内部抽選は収集対象外。
- 2026-04-06群6機の5/6として処理。次はLB トリプルクラウンセブン。
- 朝一表示カウンターが初期化されるため、内部引継ぎと見た目表示を分離して客AIの変更判別特性として扱う。
