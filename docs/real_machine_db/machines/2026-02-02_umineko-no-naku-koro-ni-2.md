# Lパチスロうみねこのなく頃に2

recordNo: 1777
machineName: Lパチスロうみねこのなく頃に2
aliases: スマスロうみねこのなく頃に2 / うみねこ2 / Lうみねこのなく頃に2A1
manufacturer: オーイズミ / オーイズミ・アミュージオ
formalModel: Lうみねこのなく頃に2A1
inspectionCode: 530674
releaseDate: 2026-02-02
generation: 6.5号機 / スマスロ
systemType: A+完走型ART / 技術介入機
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEで型式 `Lうみねこのなく頃に2A1`、検定番号 `530674`、導入2026-02-02を確認。
- 2025-10-24の業界検定通過記事でも `Lうみねこのなく頃に2A1` を確認。
- オーイズミのプレス発表会を複数業界媒体が報道し、REAL A+プロジェクト第3弾のA+完走型ART機として確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.4% / 完全攻略103.0%
- setting2: 99.6% / 完全攻略104.1%
- setting3: 101.2% / 完全攻略105.8%
- setting4: 103.4% / 完全攻略108.0%
- setting5: 104.7% / 完全攻略109.2%
- setting6: 105.5% / 完全攻略110.0〜110.2% CONFLICT
initialHitBySetting:
  BIG:
  - setting1: 1/362.1
  - setting2: 1/350.5
  - setting3: 1/337.8
  - setting4: 1/327.7
  - setting5: 1/319.7
  - setting6: 1/313.6
  REG:
  - setting1: 1/397.2
  - setting2: 1/390.1
  - setting3: 1/381.0
  - setting4: 1/374.5
  - setting5: 1/366.1
  - setting6: 1/360.1
  bonusCombined:
  - setting1: 1/189.4
  - setting2: 1/184.6
  - setting3: 1/179.1
  - setting4: 1/174.8
  - setting5: 1/170.7
  - setting6: 1/167.6
baseGamesPer50: 約33.6G/50枚（設定1）
netIncrease:
- ART 幻想論戦: 約1.0枚/G
basicPayout:
- 黄金郷BONUS / 同色BIG: 最大202枚
- WITCH BONUS / 異色BIG: 最大160枚
- REGULAR BONUS: 最大56枚
modeSpecificMinimumData:
- CZ「運命分岐モード」間の通常時200G消化でCZへ突入。
- BIG当選時はART濃厚。ボーナス後はCZ準備状態を経由して運命分岐モードへ移行。
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 内部状態はRESET。
- RT状態と周期までのゲーム数は原則引き継ぐ。
- 通常時以外で設定変更した場合はCZ「運命分岐モード」から開始。
- 時計UIは見た目0時0分から開始するが、内部では初期時間を抽選し、ステージチェンジ時に実時間へ更新。
- 朝一開始ステージは薔薇庭園（戦人）。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、RT状態、周期までのゲーム数、内部状態を引き継ぐ。
- 朝一表示上は時計0時0分、開始ステージは戦人で設定変更時と共通のため、表示だけでは単純判別不可。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONではRT状態、周期までのゲーム数、内部状態を引き継ぐ。
- 時計UIは一旦0時0分表示となり、ステージチェンジ後に引き継いだ時刻へ更新。
- 開始ステージは戦人。
- 純電断時の有利区間そのものを独立して明示した高優先資料は今回固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RT_PERIOD_STATE_CLOCK / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION_POWER_CYCLE_DIRECT_WORDING

### gameCounterReset
settingChange: CARRY_OVER_FOR_PERIOD_GAMES_IN_NORMAL_STATE
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 設定変更時でも周期までのゲーム数は引継ぎと複数解析で一致。
- 通常時以外で設定変更した場合は運命分岐モード開始となるため、前状態をそのまま画面復帰する仕様ではない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling:
- CZ間通常時200G消化で運命分岐モード
resetCeiling:
- 固定200G周期自体の短縮値は確認なし
resetShortening: NONE_CONFIRMED
notes:
- なな徹の同一比較表には `天井: 設定変更時リセット / 据え置き引継ぎ` と `周期までのゲーム数: 設定変更時引継ぎ / 据え置き引継ぎ` が併記されている。
- 1gekiは設定変更時の `周期天井ゲーム数: 引き継ぐ` と明記。
- 200G周期進行の実挙動は引継ぎをcanonicalとするが、資料内の「天井RESET」の定義対象を特定できないため `CONFLICT_DEFINITION_UNRESOLVED` として残す。
confidence: ANALYSIS_HIGH_FOR_200G_AND_PERIOD_CARRYOVER / CONFLICT_FOR_GENERIC_CEILING_RESET_LABEL

### modeAfterReset
- AT機のような朝一専用通常モード振り分けは確認されていない。
- 設定変更時の時計UI内部初期時間は再抽選されるが、具体的な初期時間振り分けは公開高信頼資料で固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CLOCK_REINITIALIZATION / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態RESET。
- 据え置き・純電源OFF→ONは内部状態引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
notes:
- なな徹で設定変更RESET・据え置き引継ぎを直接確認。
- TRUE END後にも有利区間RESETし幻想空間へ移行するが、この恩恵は設定変更時を除くため朝一設定変更恩恵へ混入しない。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- 通常時以外での設定変更時は運命分岐モードから開始。
- 時計UIの内部初期時間を再抽選。
- 設定変更固有のCZ天井短縮、ART当選率優遇、朝一専用モード優遇の公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetPenalties
- 内部状態はRESETされ、据え置きなら維持される内部状態を失う。
- 設定変更固有の追加数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一は設定変更/据え置きとも戦人ステージ、時計0時0分表示のため、この2点だけでは判別不可。
- ボーナス終了画面「縁寿ダイブ」は設定変更濃厚、「屋敷の正面玄関」は前日より設定上げ濃厚として強い変更判別材料。
- 有利区間ランプでは変更判別不可。
- 時計は設定変更時に内部初期時間を再抽選し、据え置き/純電断は実時間を引き継ぐため、ステージチェンジ後の更新値は補助材料になり得るが単独断定しない。
- 本機固有のリールガックン条件/発生率は `うみねこのなく頃に2 / Lうみねこのなく頃に2A1 / オーイズミ + ガックン / リールガックン / 設定変更 / 朝一` で再探索したが高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_END_SCREEN_AND_UI / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
czPeriodCeiling: 200G
clockDisplayAtMorning: 0時0分（設定変更・据え置き/電断とも表示上共通）
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetSpecificHitProbability: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_FIXED_VALUES / UNVERIFIED_FOR_NONPUBLIC_DISTRIBUTIONS

## conflicts
- 設定6の完全攻略時出玉率は主要資料で `110.0%` と `110.2%` が競合。1geki・6確は110.2%、パチマガスロマガ系/複数二次資料は110.0%。平均化せず `CONFLICT` として双方保持。
- 設定変更時の一般項目「天井」はなな徹でRESET表記だが、同一表の「周期までのゲーム数」は引継ぎ、1gekiも周期天井ゲーム数引継ぎ。CZ周期200Gの進行は引継ぎをcanonicalとし、「天井RESET」が指す別管理値は特定できず `CONFLICT_DEFINITION_UNRESOLVED`。
- HAZUSEの分類表示はスマスロAT表記だが、ゲーム構造は公式発表・業界・複数解析でA+完走型ART。systemTypeはA+ARTをcanonicalとする。

## sources
retrievedAt: 2026-09-15
- HAZUSE 型式/検定/導入: https://hazuse.com/machine/pachislot/SX0120/
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-18278/
- Amusement Japan プレス発表会: https://amusement-japan.co.jp/article/detail/10005073/
- パチビー 発表会/基本仕様: https://www.pachibee.jp/pparticles/view/1336
- パチビー 機種情報: https://www.pachibee.jp/machines/index/225120001
- パチ&スロ必勝本 通常時/ボーナス: https://hisshobon.com/machineinfo/88765/ ; https://hisshobon.com/machineinfo/88767/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/60/kh01.php
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1089/34706/
- なな徹 有利区間リセット: https://nana-press.com/kaiseki/machine/1089/34707/
- なな徹 天井: https://nana-press.com/kaiseki/machine/1089/34703/
- 1geki 機種概要: https://1geki.jp/slot/l_umineko2/
- 1geki 天井/朝一: https://1geki.jp/slot/l_umineko2/3/
- 6確 解析: https://www.kaku6.jp/slot/umineko2/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/247637/
- ジャグラーズネット補助: https://jugglersnet.com/chumoku/umineko2

## qaNotes
- resetBehaviorはホール経営ゲームの設定変更/据え置きと朝一客判断へ必要な粒度に限定。
- 通常時の全時計進行抽選、CZ内技術介入詳細、全魔女状態抽選、全設定示唆振り分けは実機完全再現用途のため収集対象外。
