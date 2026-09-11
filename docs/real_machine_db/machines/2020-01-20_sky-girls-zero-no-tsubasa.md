# スカイガールズ～ゼロノツバサ～

recordNo: 1331
machineName: スカイガールズ～ゼロノツバサ～
machineNameVariants: スカイガールズ3～ゼロノツバサ～ / スカイガールズ3 / スカガ3 / SスカイガールズKK
manufacturer: コナミアミューズメント（製造: KPE）
formalModel: SスカイガールズKK
certificationNumber: 9S1387
releaseDate: 2020-01-20
generation: 6号機
systemType: AT / 疑似ボーナス+AT / 可変純増

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.9% |
| 2 | 98.7% |
| 3 | 99.9% |
| 4 | 105.0% |
| 5 | 107.4% |
| 6 | 113.2% |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス | AT初当り |
|---|---:|---:|
| 1 | 1/286.2 | 1/724.5 |
| 2 | 1/267.7 | 1/668.1 |
| 3 | 1/243.1 | 1/555.1 |
| 4 | 1/222.2 | 1/481.2 |
| 5 | 1/207.4 | 1/433.3 |
| 6 | 1/135.2 | 1/159.8 |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約50G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「ソニックダイブゾーン」: モードにより約1 / 2 / 4 / 6枚/G。
- 最上位ソニックモード: 約6枚/G、有利区間完走2400枚まで。

## basicPayout
- ATはLOCKで初期G数を決定し30G保証。
- 疑似ボーナスの獲得目安はBIG平均約150枚、REG平均約60枚とする解析あり。
- ソニックモード到達時は有利区間完走が確定する設計。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 第1天井候補: 99G / 149G / 199G。到達でAT確定、深い選択ほどLOCK追加恩恵。
- 第2天井: 499Gまたは999Gでソニックモード。
- ATモードは零神 / 風神 / 雷神 / V-1 / ソニック。上位ほど純増が上昇。
- MOLPポイント100ptでCZ「スカイチャンス」。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 天井ゲーム数: **RESET**。
- 有利区間: **RESET**。
- 有利区間ランプ: **消灯**。
- 朝一ステージ: 横須賀ステージ。
- MOLPポイントの見た目は「???」スタート。設定変更時の内部ポイント契約について公開資料の表記が不十分なため、数値を推測補完しない。
- 設定変更後は高確スタートの可能性があるとする当時攻略情報あり。

信頼度: ANALYSIS_HIGH_FOR_GAME_COUNTER_AND_ADV_SECTION / ANALYSIS_SINGLE_FOR_HIGH_STATE_SUGGESTION

### carryOverBehavior
- 据え置きでは内部天井ゲーム数を引き継ぐ。
- 有利区間ランプ状態を引き継ぐ。
- MOLPポイント表示は「???」でも、内部的には引き継ぐとする当時解析あり。

### powerCycleBehavior
- 電源OFF→ONのみ: **内部天井ゲーム数CARRY_OVER**。
- MOLPポイント: **内部的にCARRY_OVER**。
- 有利区間ランプ: **CARRY_OVER**。
- 朝一ステージは横須賀ステージ。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。

### ceilingAfterReset
- 設定変更後は天井抽選を新規に受ける。
- 公開されている天井候補は99G / 149G / 199G / 499G / 999G。
- 設定変更専用に天井が一律短縮される契約は確認できず、天井選択の振り分け自体を「リセット専用数値」としては固定しない。

### modeAfterReset
- AT中の零神/風神/雷神/V-1/ソニックは出玉モードであり、朝一設定変更時にそれらを直接選ぶ通常時モード契約ではない。
- 設定変更時の通常時モード再抽選表を機種固有の公開値として固定できず、推測補完しない。

### stateAfterReset
- 設定変更後は高確スタートの可能性ありとの当時解析あり。
- 通常 / 高確 / 超高確の3状態が存在するが、設定変更時の振り分け数値は十分再探索後も公開確定値を固定できず。
- 据え置き/純電断の内部状態について、天井・MOLP・有利区間ほど明示的な直接表を固定できなかったため一般論から補完しない。

信頼度: ANALYSIS_SINGLE_FOR_RESET_HIGH_STATE / UNVERIFIED_FOR_STATE_DISTRIBUTION_AND_POWER_CYCLE_STATE

### advantageousSectionReset
- 設定変更: **有利区間RESET / ランプ消灯**。
- 据え置き / 電源OFF→ONのみ: **有利区間CARRY_OVER / ランプ引継ぎ**。
- ボーナスまたはAT終了後、有利区間ランプ消灯を確認してヤメるという当時立ち回りがある。

### resetBenefits
- 設定変更後は高確スタートの可能性がある。
- ただし発生率・具体的状態振り分けは公開確定値を固定できず、数値恩恵としては採用しない。
- 天井が新規抽選され、浅い99/149/199G天井が選択される可能性はあるが、設定変更専用の浅い天井優遇率を示す確定値は今回固定できず。

### resetPenalties
- 設定変更専用の不利抽選は公開確認できず。
- 据え置きなら引き継げた前日天井進行/MOLP内部ポイントを失う点はRESET契約として扱う。

### resetDetection
- 朝一有利区間ランプ消灯は設定変更の有力材料、点灯は据え置きの有力材料。
- 設定変更・据え置きとも朝一ステージは横須賀で見た目だけでは区別しにくい。
- 本機固有のガックン発生条件・発生率は、表記揺れ・型式名・メーカー名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 有利区間` を変えて再探索しても公開確定値を固定できず推測補完しない。

### numericResetData / publicMorningNumbers
- 公開天井候補: 99G / 149G / 199G / 499G / 999G。
- 99G天井振り分けを「約10%？」とする3533件統計ベースの当時推定言及あり。ただし解析確定値ではないため canonical の設定変更専用率には採用しない。
- 設定変更専用高確移行率: PUBLIC_CONFIRMED_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 設定変更専用天井振り分け: PUBLIC_CONFIRMED_VALUE_NOT_FOUND_AFTER_RESEARCH。
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## resetBehavior 再探索メモ
2026-09-11に `スカイガールズ～ゼロノツバサ～ / スカイガールズ3 / スカガ3 / SスカイガールズKK / コナミアミューズメント / KPE` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / MOLP / モード / 高確 / 内部状態 / 有利区間 / ランプ / ガックン / 変更判別` を組み合わせ、コナミ公式アーカイブ、遊技通信検定通過、必勝本、当時攻略記事、設定解析サイトを横断。天井・MOLP・有利区間のRESET/CARRY_OVERは固定できた。内部状態の純電断契約、設定変更専用高確率/天井振り分け、本機固有ガックン率は公開確定値を固定できず推測補完しない。

## sources
取得日: 2026-09-11

1. コナミアミューズメント 機種アーカイブ
   - https://www.konami.com/amusement/psm/archive/ps/2020/skygirls3/
   - 2020年1月稼働、6号機ATを確認。
   - reliability: OFFICIAL
2. 遊技通信web — 東京都公安委員会検定通過状況（2019-12-09）
   - https://www.yugitsushin.jp/open/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%8812%E6%9C%889%E6%97%A5%EF%BC%89/
   - SスカイガールズKK / 9S1387。
   - reliability: INDUSTRY
3. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3467/1/76520
   - 2020-01-20導入、ボーナス合算、機械割、最大純増6枚/Gを確認。
   - reliability: ANALYSIS_HIGH
4. おスロおパチおいでやす — 天井/朝一
   - https://oslo-opachi.com/2020/01/14/skygirls3_tennjyou/
   - 設定別ボーナス/AT/出玉率、50G/50枚、天井群、設定変更/電源OFF→ONの天井・MOLP・有利区間ランプを確認。
   - reliability: ANALYSIS_HIGH
5. no slot no life
   - https://noslotnolife.com/45099
   - 設定別性能と天井恩恵を照合。
   - reliability: ANALYSIS_SINGLE_SUPPORT
6. すろぬー
   - https://slonuu.com/pg/s-skygirls3
   - BIG/REG平均獲得、設定別性能、約50G/50枚、2020-01-20導入を照合。
   - reliability: ANALYSIS_SINGLE_SUPPORT

## missingFields
- 設定変更時の高確/超高確振り分け公開確定値。
- 設定変更時の天井選択振り分け確定値。
- 純電源OFF→ON時の内部状態（通常/高確/超高確）の直接契約。
- 本機固有ガックン発生条件/率。

## conflicts
- 第1天井恩恵のLOCK追加数は資料で表記差があり、99G=ATは一致する一方、149G/199Gについて `AT+LOCK2/3個` と `AT+LOCK1/2個` の記述がある。平均せず `CONFLICT_FIRST_CEILING_LOCK_BONUS_COUNTS` として保持し、物差しコアでは天井G数とAT確定のみをcanonicalとする。

## status
coreStatus: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_PUBLIC_RESET_CORE_WITH_STATE_GAPS
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE
