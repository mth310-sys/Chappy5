# ぱちスロAKB48

machineName: ぱちスロAKB48
manufacturer: 京楽産業.
releaseDate: 2013-07-16
releaseDatePrecision: exact_day
generation: 5号機
systemType: ART / 疑似ボーナス+ゲーム数管理+自力CZ / プレイヤー任意サプライズリセット搭載
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入日: **2013-07-16**。K-Navi、パチビー、HAZUSE、後年機種DBで具体日一致。当時グリーンべると記事も「7月16日から納品開始予定」とする。
- manufacturer: **京楽産業. / KYORAKU**。同社パチスロ第1弾。
- 型式名: **パチスロAKB48P**。
- 検定番号: **3S0240**。
- confidence: INDUSTRY_AND_ANALYSIS_MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.9% |
| 3 | 100.1% |
| 4 | 103.3% |
| 5 | 106.8% |
| 6 | 111.2% |

- 後年機種DB、2-9伝説、複数解析系で一致。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

| 設定 | 疑似ボーナス合成 | ART「神曲RUSH」初当たり |
|---|---:|---:|
| 1 | 1/243.4 | 1/472.9 |
| 2 | 1/211.3 | 1/412.1 |
| 3 | 1/236.5 | 1/454.6 |
| 4 | 1/198.1 | 1/384.3 |
| 5 | 1/203.2 | 1/386.8 |
| 6 | 1/164.2 | 1/319.4 |

- 2-9伝説、CrankySeven、後年機種DBで主要系列一致。
- 偶数設定優遇の特徴を持つため、設定順に単調増加しない。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH

## baseGamesPer50

- **31.3G（設定1）～31.6G（設定6）/50枚**。
- パチ＆スロ必勝本が設定別レンジを掲載。K-Naviは自社調べで31.3～31.6G、パチマガスロマガは設定6実戦値31.9G/1000円、CrankySevenは概数約31G/1000円。
- 本線は解析2系統で一致する31.3～31.6Gを採用し、31.9Gは設定6実戦値として定義を分離。
- confidence: ANALYSIS_MULTI_SOURCE_HIGH_WITH_REAL_PLAY_VARIANT

## netIncrease

- ART「神曲RUSH」: **約+2.0枚/G**。
- 当時グリーンべると、K-Navi、パチビー、2-9伝説で一致。
- confidence: INDUSTRY_AND_ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- 本機はリアルBR非搭載。疑似ボーナスとARTで出玉を増やす。
- 神曲RUSH選抜BONUS / サプライズBONUS / 会いたかった48: **48G**。
- じゃんけんBONUS: **20G+α**。
- AKB BONUS: **24G**。
- ART「神曲RUSH」初期G数は突入前の上乗せゾーン「overture / super overture」で決定するため、固定1セットG数として単純化しない。
- confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時は規定ゲーム数解除、自力CZ「推しメンチャンス」、直撃等から疑似ボーナスを目指し、疑似ボーナスからARTへ突入する構造。
- CZ「推しメンチャンス」: **最低10G**、ベル/レア役等で疑似ボーナス抽選。
- 通常モード群の代表天井: 通常A **777G** / 通常B **480G** / 天国A **128G** / 天国B **133G**。
- 通常時最大天井: **777G**。ボーナス/ART/プレイヤー任意のサプライズリセットで規定G管理が更新される。
- 本機にはプレイヤー自身がメニューからゲーム数管理を初期化する「サプライズリセット」が存在する。**店側の設定変更とは別機能**として扱う。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_RESELECTS_GAME_TABLE_AND_HIGH_STATE__POWER_CYCLE_PRESERVES_HIDDEN_GAME_AND_STATE__DISPLAY_COUNTER_CLEARS_ON_BOTH__PUBLIC_RESET_NUMBERS_AVAILABLE
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **規定ゲーム数を再抽選**。
- **高確移行抽選**を実施。
- 液晶ステージは **MUSIC UNIVERSE / GIRL ROCK! / パーティNIGHT**のいずれかへ振り分け。
- 液晶上のゲーム数表示は **クリア**。
- 推しメンはランダム再振り分け、ぱちログデータはリセット。
- 設定変更後はサプライズリセット機能を64G消化するまで使用できない。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### carryOverBehavior

- 通常営業で設定を据え置き、閉店時に電源OFF→翌朝ONする典型的な据え置き運用では、電源OFF→ON仕様から **内部規定ゲーム数と内部状態を引き継ぐ**ことを直接確認。
- 液晶上の表示ゲーム数自体は0へ戻るため、見た目のカウンタと内部規定ゲーム数は一致しない。
- carryOverHiddenGameCounter: **KEEP_CONFIRMED_VIA_POWER_CYCLE**。
- carryOverState: **KEEP_CONFIRMED_VIA_POWER_CYCLE**。
- confidence: ANALYSIS_HIGH_DIRECT_POWER_CYCLE_CONTRACT

### powerCycleBehavior

- **電源OFF→ONのみでは規定ゲーム数を引き継ぐ**。
- **内部状態も引き継ぐ**。
- 液晶ステージは設定変更時と同様、MUSIC UNIVERSE / GIRL ROCK! / パーティNIGHTのいずれかへ振り分け。
- 液晶上のゲーム数表示はクリア。
- 推しメンはランダム再振り分け、ぱちログデータはリセット。
- サプライズリセットは64G消化するまで使用不可。
- したがって、**朝一の液晶G数0・通常3ステージ開始・推しメン再選択だけでは設定変更と単純電源再投入を判別できない**。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### gameCounterReset

- settingChangeHiddenCounter: **CLEAR_AND_RESELECT**。
- carryOverPowerCycleHiddenCounter: **KEEP**。
- visibleLCDCounterAfterSettingChange: **CLEAR**。
- visibleLCDCounterAfterPowerCycleOnly: **CLEAR**。
- 2-9伝説、CrankySevenも「設定変更で天井G数リセット」と一致。

### ceilingAfterReset

- 設定変更時は前日の規定G進捗を失い、再抽選されたモードの天井に従う。
- 設定変更後の通常モード候補は通常A/B・天国A/Bで、代表天井は777G / 480G / 128G / 133G。
- **設定変更専用の別固定短縮天井**は確認していない。短い天井は再抽選モードの結果として発生する。
- playerSurpriseReset: 別機能。リセットA 777G / リセットB 480G / リセット天国A 128G / リセット天国B 128G。

### modeAfterReset

- 設定変更後は通常時用モードを再抽選。
- 公開モード振り分け:

| 設定 | 通常A | 通常B | 天国A | 天国B |
|---|---:|---:|---:|---:|
| 1 | 35.0% | 25.0% | 40.0% | 0% |
| 2 | 19.5% | 32.5% | 48.0% | 0% |
| 3 | 32.5% | 27.5% | 40.0% | 0% |
| 4 | 16.5% | 32.5% | 48.0% | 3.0% |
| 5 | 25.0% | 30.0% | 40.0% | 5.0% |
| 6 | 12.0% | 33.0% | 48.0% | 7.0% |

- 天国Bは設定1～3では選択なし。設定4以上のみ選択され、天井133G。
- この表は **設定変更後 / 通常時ボーナス後 / ART終了後**が参照する通常モード移行表。プレイヤー任意のサプライズリセット後には別のリセットモード表があるため混同しない。
- confidence: ANALYSIS_HIGH_PUBLIC_NUMERIC_TABLE

### stateAfterReset

- 設定変更時に高確移行抽選。
- 公開高確移行率: **設定1/3/5 = 41.5% / 設定2/4/6 = 33.6%**。
- 電源OFF→ONのみでは内部状態を引き継ぐ。
- confidence: ANALYSIS_HIGH_PUBLIC_NUMERIC_TABLE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後、モード再抽選により天国A/Bが選ばれる可能性がある。
- 設定変更時の天国系合計は、設定1=40.0%、2=48.0%、3=40.0%、4=51.0%、5=45.0%、6=55.0%。
- 設定4～6のみ天国Bが3/5/7%で選択されるため、129～133Gで規定ゲーム数解除した場合は高設定判別材料になる。
- 高確移行率は奇数41.5%、偶数33.6%。

### resetPenalties

- 設定変更で前日の内部規定G進捗を失うため、前日ハマリの宵越し狙いには不利。
- 液晶G数表示が設定変更・電源OFF→ONの双方でクリアされるため、客側は表示だけで内部宵越しG数を把握できない。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 液晶G数表示は **設定変更でも電源OFF→ONのみでも0へクリア**。
- 開始ステージも双方で同じ3通常ステージ候補。
- 推しメンのランダム再振り分け、ぱちログデータリセットも双方に共通。
- よってこれらの見た目だけでは変更判別不可。
- 一方、内部規定Gは設定変更で再抽選、電源OFF→ONでは引継ぎなので、前日最終G数と朝一の実解除位置を継続観察すれば据え置き推測材料になり得る。ただし1回の解除だけで確定とはしない。
- リールガックン等の本機固有の確定的変更判別は、機種名/型式名/京楽/AKB48と「ガックン/リール/設定変更/朝一」を組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeModeDistribution: **PUBLIC_CONFIRMED**（上表）。
- settingChangeHighStateRate: **奇数41.5% / 偶数33.6%**。
- settingChangeTenpokuTotal: **40.0 / 48.0 / 40.0 / 51.0 / 45.0 / 55.0%**（設定1→6、通常A/B/天国A/B表から算術集計）。
- settingChangeMaxCeilingBySelectedMode: **777G / 480G / 128G / 133G**。
- visibleLCDGameCounterMorning: **0表示**（settingChange / powerCycleOnly双方）。
- playerSurpriseResetModeDistribution: 別機能として公開あり。設定1ではリセットA43.0 / B30.7 / 天国A16.3 / 天国B10.0%。全設定表はsourcesの必勝本参照。DB本線では店側設定変更表と混同しない。

### numericResetData

- settingChangeGameNumber: RESELECT
- settingChangeHighStateRateOdd: 41.5%
- settingChangeHighStateRateEven: 33.6%
- settingChangeModeA: [35.0,19.5,32.5,16.5,25.0,12.0]
- settingChangeModeB: [25.0,32.5,27.5,32.5,30.0,33.0]
- settingChangeHeavenA: [40.0,48.0,40.0,48.0,40.0,48.0]
- settingChangeHeavenB: [0,0,0,3.0,5.0,7.0]
- powerCycleHiddenGameCounter: KEEP
- powerCycleInternalState: KEEP
- visibleLCDCounterAfterBoth: CLEAR
- normalA_ceiling: 777G
- normalB_ceiling: 480G
- heavenA_ceiling: 128G
- heavenB_ceiling: 133G

resetQaReliability: HIGH__DIRECT_MACHINE_SPECIFIC_SETTING_CHANGE_AND_POWER_CYCLE_CONTRACT_WITH_PUBLIC_MODE_AND_HIGH_STATE_NUMBERS

## playerSurpriseReset — settingChangeとは別機能

- 打ち手がメニューから任意に消化ゲーム数をリセットできる本機固有機能。
- 使用後は専用のリセットA/B/天国A/Bへ振り分け。
- 最大天井はリセットA 777G、B 480G、天国A/B 128G。
- サプライズリセット後は128G以内の当選期待度が通常時より高まる一方、既存の天井進捗を破棄するため、深いハマリ時には不利になり得る。
- **ホールの設定変更リセットと名称が紛らわしいため、resetBehaviorでは必ず別概念として保持する。**

## missingFields

- machineSpecificGakkunOrReelResetDetection: `UNVERIFIED_AFTER_RESEARCH`
- exactPureCarryOverWithoutPowerCycle: `NOT_SEPARATELY_OBSERVED__POWER_CYCLE_KEEP_CONFIRMED`

## conflicts

- baseGamesPer50: 解析値31.3～31.6G/50枚に対し、パチマガスロマガ設定6実戦値31.9G/1000円。**定義差（解析/実戦値）として分離し、CONFLICT扱いしない**。
- HAZUSE基本トップでは出玉率/純増が「調査中」のままだが、当時業界記事・K-Navi・パチビー・他解析で純増約2.0枚/G、機械割系列を複数確認済み。これは数値競合ではなくサイト未入力。

## researchNotes

- 欠損判定前に「ぱちスロAKB48 / パチスロAKB48P / AKB48 京楽 / 初代AKB」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / 高確 / ガックン / 50枚 / 1000円 / ベース / コイン持ち」を組み替えて検索。
- HAZUSE、K-Navi、パチビー、グリーンべると、パチ＆スロ必勝本、パチマガスロマガ、2-9伝説、CrankySeven、後年機種DBを横断。
- 本機の「サプライズリセット」はプレイヤー任意機能のため、店側設定変更と混同しないよう別セクションへ分離。

## sources

取得日: 2026-09-06

- グリーンべると 2013-05-30: https://web-greenbelt.jp/00000890/
  - 京楽初のパチスロ、純増約2.0枚/G、7/16納品開始予定。
- K-Navi: https://p-kn.com/slot/1876/
  - 2013-07-16導入、ART純増約2.0枚/G、機種概要、朝一/設定変更解析項目。
- K-Navi 小役確率: https://p-kn.com/slot/1876/45088/
  - 1000円あたり31.3～31.6G。
- パチビー: https://www.pachibee.jp/machines/index/213060003
  - 2013-07-16導入、BR非搭載ART、疑似ボーナス継続G、純増約2.0枚/G。
- HAZUSE: https://hazuse.com/machine/pachislot/3S0240/
  - 型式パチスロAKB48P、検定3S0240、2013-07-16導入。
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2234/1/40921
  - 設定変更時の規定G再抽選、高確移行率、液晶/推しメン/ぱちログ、電源OFF→ON時の規定G・状態引継ぎ。
- パチ＆スロ必勝本 モード移行率: https://p.hisshobon.jp/machine/2234/1/41515
  - 設定変更後を含む通常モード振り分け、サプライズリセット後専用モード振り分け。
- パチ＆スロ必勝本 1枚役手順: https://p.hisshobon.jp/machine/2234/1/41104
  - 1000円あたり31.3G（設定1）～31.6G（設定6）。
- パチマガスロマガ 小役確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/01/c.php
  - 設定6実戦値31.9G/1000円。
- 2-9伝説: https://29den.com/akb48/
  - 機械割、疑似ボーナス確率、最大天井777G、設定変更で天井G数リセット。
- CrankySeven: https://crankyseven.com/akb48-pc.htm
  - 機械割/初当たり/約31G/純増約2.0枚/G/天井/サプライズリセット。
- 後年機種DB: https://pachinavi.net/machines/akb48-1/
  - 2013-07-16導入、型式名、機械割、ART初当たり。
