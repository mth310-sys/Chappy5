# SLOT劇場版魔法少女まどか☆マギカ[新編]叛逆の物語

recordNo: 1303
machineName: SLOT劇場版魔法少女まどか☆マギカ[新編]叛逆の物語
machineNameVariants: まどマギ3 / 叛逆の物語 / SLOT劇場版魔法少女まどか☆マギカ［新編］叛逆の物語
manufacturer: メーシー
formalModel: S／叛逆の物語／FH
certificationNumber: 9S0698
releaseDate: 2019-09-02
generation: 6号機
systemType: AT / 疑似ボーナス + 差枚数管理AT

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.3% |
| 3 | 100.2% |
| 4 | 103.5% |
| 5 | 106.3% |
| 6 | 111.5% |

HAZUSE、複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | マギカボーナス | エピソードボーナス | AT初当たり |
|---|---:|---:|---:|
| 1 | 1/285.8 | 1/7221.0 | 1/543.0 |
| 2 | 1/259.6 | 1/7316.4 | 1/464.8 |
| 3 | 1/255.1 | 1/6928.2 | 1/418.2 |
| 4 | 1/253.9 | 1/5780.6 | 1/389.1 |
| 5 | 1/244.5 | 1/5307.4 | 1/364.1 |
| 6 | 1/214.4 | 1/3640.4 | 1/289.5 |

HAZUSE、なな徹系整理、複数解析で一致。設定5マギカボーナスのみ一部二次資料に1/244.4表記があり、丸め差としてCONFLICT保持。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約50G/50枚。
- 資料によって設定差込み約50.6〜50.9G/50枚級の表記もあり、丸め/算出条件差として分離する。

## netIncrease

- 約3.0枚/G。

ユニバーサル公式が「シリーズ最速となる純増3.0枚AT」と明記。複数解析でも一致。

信頼度: OFFICIAL + ANALYSIS_HIGH

## basicPayout

- マギカボーナス: 20G、約60枚。
- エピソードボーナス: 40G、約120枚、AT確定。
- AT「マギカラッシュ」: 差枚数管理、純増約3.0枚/G。AT開始時は初期枚数決定ゾーンを経由。

## modeSpecificMinimumData

- 最大天井: 有利区間移行後699Gでマギカボーナス。
- 通常 / チャンス / 悪魔のモードを搭載し、ゲーム数当選ゾーン等に影響。
- 通常時全モード振り分け・全内部抽選は実機完全再現用詳細のため収録しない。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_EMPIRICAL_MORNING_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 機種固有当時解析で **天井RESET / 内部状態RESET / 非有利区間から開始**。
- 内部モードは有利区間移行時に再抽選。
- 朝一ステージは見滝原中学校。
- ユニメモは設定変更でも引き継ぐ。

### carryOverBehavior

- 当時攻略表では電源OFF→ONを据え置き条件として扱い、**天井 / 内部状態 / 内部モードを引き継ぐ**。
- フェイク前兆は据え置きでも当日ゲーム数を参照するため、単独の変更判別には使えない。

### powerCycleBehavior

- 設定変更なしの電源OFF→ON: **天井CARRY_OVER / 内部状態CARRY_OVER / 内部モードCARRY_OVER**。
- 液晶ゲーム数は電源復帰後1〜2Gほど0G表示が続く場合があり、表示ズレ単独ではリセット判別不可。
- 筐体左上ランプも電断のみでリセット時と同様の朝一表示となるため、判別材料にしない。

### gameCounterReset

- 設定変更: RESET。
- 据え置き / 純電断: CARRY_OVER。

### ceilingAfterReset

- 設定変更後も最大699G天井。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 設定変更: 有利区間移行時に再抽選。
- 据え置き / 純電断: CARRY_OVER。
- 設定変更専用の通常/チャンス/悪魔モード振り分け公開値は十分な再探索後も `PUBLIC_RESET_MODE_DISTRIBUTION_NOT_CONFIRMED`。通常のモード移行率を朝一値として流用しない。

### stateAfterReset

- 設定変更: RESETして非有利区間へ。
- 据え置き / 純電断: CARRY_OVER。

### advantageousSectionReset

- 設定変更後は **非有利区間から開始**し、基本的に1〜2Gで有利区間へ移行する実戦解析あり。
- 通常時の有利区間ランプは常時消灯型のため、朝一ランプ単独で設定変更 / 据え置きの判別は不可。
- 非有利区間中は一部レア役でAT直撃抽選が存在するが、物差し用途では朝一挙動に必要な範囲だけ収録し、全小役抽選表は収録しない。

### resetBenefits

- 設定変更後は非有利区間から始まるため、ごく短い区間だけAT直撃機会がある。
- 一方、約2000万Gの実戦サンプルで通常時とリセット後に大きな差は見られなかったとする当時解析があり、総合的な「強いリセット恩恵」とは扱わない。
- 天井短縮や設定変更専用高確は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 有利区間ランプ・ガックンによる変更判別は不可とする当時解析。
- 朝一81〜100G / 281〜300G / 481〜500Gでのゲーム数当選はリセット期待度を上げる実戦材料。宵越し側の対応ゾーンで当たれば据え置き期待度が上がるが、いずれも確定条件ではない。
- 当日100G / 400G / 600Gで穢れ吸い込み演出が出ればリセット濃厚、宵越し換算の同到達で出れば据え置き濃厚とする実戦判別法あり。
- フェイク前兆、液晶G数ズレ、筐体左上ランプは変更判別には不適。

### numericResetData / publicMorningNumbers

- 新台初日1回目の初当たり **1995件中12件**で朝一即AT直撃を確認（2G目10件 / 3G目2件）。約0.60%の実戦値。
- reliability: EMPIRICAL_ANALYSIS_SINGLE。メーカー公表値ではない。
- リセット後と通常時比較は約2000万Gサンプルで大きな差なしとする実戦解析。
- 設定変更専用モード振り分け、短縮天井率などのメーカー/解析確定値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「SLOT劇場版魔法少女まどか☆マギカ[新編]叛逆の物語 / まどマギ3 / 叛逆 / S／叛逆の物語／FH / メーシー」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / ガックン / 有利区間 / 有利区間ランプ」を組み合わせて再探索。ユニバーサル公式、HAZUSE、K-Navi、期待値見える化、おスロおパチおいでやす、複数解析を横断した。

天井・状態・モードの設定変更/純電断差、有利区間の朝一開始状態、主要な変更判別材料を機種固有資料で固定。朝一即AT直撃は実戦サンプルとして保存し、通常時の全モード移行率や全レア役抽選など完全再現用詳細は収録しない。

## qualityNotes / conflicts

- ユニバーサル公式でメーシー / 6号機 / AT / 2019年9月 / 純増3.0枚/Gを確認。
- HAZUSE・K-Navi・複数解析でホール導入2019-09-02を確認。
- 正式型式 `S／叛逆の物語／FH`、検定番号 `9S0698` を機種DB/検定系資料で確認。
- 設定5マギカボーナスは `1/244.5`（HAZUSE等）対 `1/244.4`（一部解析）の微差。平均せず `CONFLICT_ROUNDING_SETTING5_MAGICA_BONUS` として保持。
- 一部古い事前資料には設定構成や初当たり値の旧スペック値が残るが、市場導入後のHAZUSE・複数解析一致値をcanonicalとする。

## sources

取得日: 2026-09-11

1. ユニバーサルエンターテインメント公式 — SLOT劇場版魔法少女まどか☆マギカ[新編]叛逆の物語
   - https://www.universal-777.com/product/slot/mmh/
   - メーシー、6号機、AT、2019年9月発売、純増3.0枚/G。
   - reliability: OFFICIAL
2. HAZUSE — SLOT劇場版魔法少女まどか☆マギカ[新編]叛逆の物語
   - https://hazuse.com/machine/pachislot/9S0232/
   - 正式型式、検定番号、2019-09-02導入、設定別出玉率/ボーナス/AT、699G天井、設定変更/電断挙動。
   - reliability: ANALYSIS_HIGH / DATABASE
3. K-Navi — 機種ページ
   - https://p-kn.com/slot/3267/
   - 2019-09-02ホール導入、メーシー、AT。
   - reliability: ANALYSIS_HIGH
4. 期待値見える化 — 朝一リセット恩恵 / リセット判別 / 非有利区間AT直撃
   - https://slotjin.com/slot/madomagi-h-reset/
   - 設定変更と据え置き/純電断の天井・状態・モード差、非有利区間開始、有利区間ランプ/ガックン判別不可、朝一ゾーン判別、1995件中12件の即AT実戦値。
   - reliability: ANALYSIS_HIGH_FOR_RESET / EMPIRICAL
5. おスロおパチおいでやす — 天井 / 朝一リセット
   - https://oslo-opachi.com/2019/06/19/madomagi3_tennjou/
   - 699G天井、約60枚ボーナス、設定変更時天井/モードRESET、電源OFF→ON時引継ぎ、見滝原中学校。
   - reliability: ANALYSIS_HIGH
6. 複数当時解析 / スロマガ系整理
   - 設定別マギカボーナス / エピソードボーナス / AT初当たり / 機械割を照合。
   - reliability: ANALYSIS_HIGH_MULTI_SOURCE

## missingFields

- setting-change-only normal/chance/devil mode distribution: NONE_CONFIRMED_AFTER_RESEARCH
- manufacturer-published morning reset probability: NONE_CONFIRMED_AFTER_RESEARCH
- machine-specific numerical gakkun probability: NOT_APPLICABLE_AS_DETECTION / PUBLIC_VALUE_NOT_FOUND

## conflicts

- setting5 Magica Bonus: 1/244.5 vs 1/244.4 (rounding/source difference). canonical 1/244.5, conflicting value retained.
- baseGamesPer50: generic 約50G vs setting-dependent 約50.6〜50.9G級 in some analysis; definition/rounding difference, not averaged.

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_EMPIRICAL_MORNING_DATA
