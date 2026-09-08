# スーパーリノMAX

machineName: スーパーリノMAX
manufacturer: 山佐
releaseDate: 2016-04-18
recordNumber: 977
generation: 5号機
systemType: ノーマル / リノ方式 / リアルボーナス連チャン
formalModelName: スーパーリノDX／EE
certificationNumber: 5S0874
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `スーパーリノDX／EE`、検定番号 `5S0874`、メーカー山佐、導入開始日2016-04-18を確認。
- K-Navi、ちょんぼりすた、スロット日報も2016-04-18導入で一致。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.2% |
| 3 | 99.9% |
| 4 | 102.0% |
| 5 | 105.1% |
| 6 | 108.2% |

- 2016年当時記事には導入初期時点で機械割「非公開」とする資料もあるため、上表は後年解析値として保存し、公表時点差を分離する。
reliability: ANALYSIS_SINGLE_RETROSPECTIVE_NUMERIC_WITH_PERIOD_NONDISCLOSURE_NOTE

## initialHitBySetting
### トマト揃い（通常/転落状態から高確率状態への主要入口）
| 設定 | 確率 |
|---:|---:|
| 1 | 1/516.0 |
| 2 | 1/500.3 |
| 3 | 1/485.5 |
| 4 | 1/458.3 |
| 5 | 1/434.0 |
| 6 | 1/409.6 |

### トマトチャンス相当の特殊1枚役合算
| 設定 | 確率 |
|---:|---:|
| 1 | 1/172.0 |
| 2 | 1/166.8 |
| 3 | 1/161.8 |
| 4 | 1/152.8 |
| 5 | 1/144.7 |
| 6 | 1/136.5 |

- 3択正解でトマト入賞となるため、特殊1枚役合算と実トマト揃いは定義を分離。
- 高確率中ボーナス合算は全設定共通約1/12.8、BIG約1/19.1、REG約1/38.9。
reliability: ANALYSIS_HIGH_FOR_GAME_MECHANIC_NUMBERS

## baseGamesPer50
- canonical: **約30.4G/50枚（設定1・転落状態）**。
- 当時記事には約29G表記もあり、計測/丸め/状態定義差として保持。
conflict: BASE_GAMES_PRESENTATION_30_4_VS_APPROX_29
reliability: ANALYSIS_HIGH_WITH_PRESENTATION_DIFFERENCE

## netIncrease
- NOT_APPLICABLE_AS_AT_ART_NET_INCREASE。
- 出玉増加はリアルボーナス主体。

## basicPayout
- BIG: **約240枚**。
- REG: **約110枚**。
- BIG比率約67%、REG約33%。
- ボーナス高確率状態のループ率目安約82%、初当たりからの期待枚数目安約1000枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はトマト揃いを契機にボーナス高確率状態へ移行。
- 高確率状態中はボーナス合算約1/12.8。
- ボーナス終了後は再び高確率状態へ。
- 高確率状態中は転落契機成立で通常/転落状態へ戻る。
- 天井機能: **非搭載**。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_STATE_CARRYOVER_AND_RAM_CLEAR_DISTINCTION
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更/通常リセットだけでは、リノ方式の高確率状態は **消えず状態を引き継ぐ**とする業界実務系回顧資料を確認。
- 2016年当時の機種解析では朝一・設定変更欄が「調査中」で、初期公開解析として確定表は存在しなかった。
- 後年のホール実務資料では、設定変更しても高確率状態を落とせず、閉店後に手回しで転落させる対策が必要と説明されている。
reliability: INDUSTRY_RETROSPECTIVE_SINGLE_DIRECT_OPERATIONAL

### carryOverBehavior
- 据え置き時: **内部高確率/通常状態をCARRYOVER**。
- 前日高確率状態で閉店し、ホール側が転落まで手回ししなければ朝一高確残りが成立し得る。
reliability: INDUSTRY_RETROSPECTIVE_PLUS_SECONDARY_CORROBORATION

### powerCycleBehavior
- 純電源OFF→ON: **内部状態CARRYOVER**。
- 電源OFF→ONのみではモード/状態移行なしとする資料を確認。
reliability: INDUSTRY_RETROSPECTIVE_DIRECT

### gameCounterReset
- 天井ゲーム数: **NOT_APPLICABLE**（天井非搭載）。
- ゲーム数天井進捗のRESET/CARRYOVER評価自体が不要。

### ceilingAfterReset
- 通常天井: **NONE**。
- 設定変更時短縮天井: **NOT_APPLICABLE**。

### modeAfterReset
- 通常の設定変更では高確率/通常状態を **CARRYOVER**。
- 設定変更専用モード再抽選: **NONE_CONFIRMED_AFTER_RESEARCH**。
- RAMクリアは通常の設定変更と別処理であり、後年ホール実務資料では初期出荷状態=高確率側へ移行するとされる。RAMクリアを設定変更と同義扱いしない。

### stateAfterReset
- 設定変更: 高確率/通常状態 **CARRYOVER**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。
- RAMクリア: 高確率状態へ移行とする後年実務資料あり（通常設定変更とは分離保存）。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 一般的な「設定変更恩恵」は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし前日高確率状態が残っていれば、設定変更・据え置き・電源OFF→ONを問わず朝一高確残りが発生し得る。これは設定変更恩恵ではなく **STATE_CARRYOVER**。
- 前日ボーナス中/高確率中閉店台は未対策ホールで朝一価値が生じるため、ホール経営シミュレーション上重要。

### resetPenalties
- 設定変更そのものによる主要な公開不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ホールが閉店後に手回しで高確率状態を転落させた場合、客側の朝一高確残り期待は消える。これは設定変更ペナルティではなく店舗対策。

### resetDetection
- 設定変更/据え置きを確定できる本機固有ガックン、初期出目、ランプ契約は、機種名・型式・山佐・設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン等へ検索語を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一高確率挙動を確認できても「設定変更された/されていない」の判別にはならない。状態は設定変更でも引き継ぐため。

### numericResetData
- 設定変更専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用短縮天井: **NOT_APPLICABLE**。
- 朝一専用当選率/恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開比較値として通常時トマト揃いは設定1 1/516.0〜設定6 1/409.6、高確率中ボーナス合算約1/12.8だが、これらはリセット専用数値ではない。

## sources
取得日: 2026-09-08

1. HAZUSE — スーパーリノMAX
   - https://hazuse.com/machine/pachislot/5S0874/
   - 型式スーパーリノDX／EE、検定5S0874、山佐、2016-04-18、BIG約240枚、REG約110枚、天井非搭載。
   - reliability: ANALYSIS_HIGH_DATABASE
2. パチ＆スロ必勝本 — 小役確率 / スーパーリノMAX
   - https://p.hisshobon.jp/machine/2748/1/61090
   - 特殊1枚役合算、トマト揃い設定別、30.4G/50枚、高確率状態構造。
   - reliability: ANALYSIS_HIGH
3. パチ＆スロ必勝本 — ボーナス抽選 / スーパーリノMAX
   - https://p.hisshobon.jp/machine/2748/1/61096
   - 高確率中BIG/REG/合算確率。
   - reliability: ANALYSIS_HIGH
4. K-Navi — スーパーリノMAX
   - https://p-kn.com/slot/2490/
   - 2016-04-18、ノーマルタイプ、BIG約240枚、REG約110枚、前作比較。
   - reliability: ANALYSIS_DATABASE
5. ちょんぼりすた — スーパーリノMAX
   - https://chonborista.com/slot/yamasa-slot/19332/
   - 2016-04-18、天井なし、導入初期時点で公式数値未公表との注記。
   - reliability: ANALYSIS_SINGLE_PERIOD
6. スロット日報 — スーパーリノMAX スペック・解析・感想
   - https://slotnippou.com/?p=12149
   - 2016-06-03記事。型式、4/18導入、約29G、トマト確率、機械割、朝一/設定変更は当時「調査中」。
   - reliability: PERIOD_ANALYSIS_SINGLE
7. けんのスロットシミュレーション — スーパーリノMAX解析
   - https://kenslo65536.com/kaiseki/renomax.html
   - 後年整理の機械割97.0〜108.2%、30.4G、天井なし、高確率中ボーナス合算1/12.8。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE
8. パチンコ店長のホール攻略 — スーパーリノMAXやリノにおける設定変更後＆ラムクリア後の挙動
   - https://rx7038.com/?p=15890
   - 2017-08-12。電源OFF/ON・設定変更とも状態引継ぎ、RAMクリアは高確率側、閉店後の高確落とし店舗対策を説明。
   - reliability: INDUSTRY_RETROSPECTIVE_SINGLE_DIRECT_OPERATIONAL
9. P-Summa — スーパーリノMAX朝一高確残りまとめ
   - https://psumma.jp/pachislo/39596/
   - 設定変更だけでは高確率状態が消えず手回し対策が必要との当時/回顧情報を引用整理。
   - reliability: SECONDARY_CORROBORATION

## missingFields
- メーカー一次資料での設定変更/電源OFF→ON内部状態契約: UNVERIFIED_AFTER_RESEARCH。
- 本機固有ガックン/初期出目/ランプによる変更確定判別: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更専用朝一数値: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts
- `BASE_GAMES_PRESENTATION_30_4_VS_APPROX_29`: 必勝本/後年解析30.4G vs 2016年当時記事約29G。平均せず保持。
- `PERIOD_DISCLOSURE_DIFFERENCE_PAYOUT`: 導入初期資料では機械割非公開、後年解析に97.0〜108.2%表あり。数値競合ではなく公開時点差として分離。
