machineName: パチスロ バイオハザード リベレーションズ
manufacturer: エンターライズ
releaseDate: 2017-07-31
recordNumber: 1113
generation: 5号機
systemType: A+ART / ST-ART
formalModelName: バイオハザードリベレーションズ／ZW
certificationNumber: 7S0275
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `バイオハザードリベレーションズ／ZW`、検定番号 `7S0275`、メーカー エンターライズを確認。
- HAZUSE、一撃、すろぱちくえすと、ちょんぼりすた、K-Navi、P-WORLD系資料はホール導入を **2017-07-31** とする。
- 一方、モゲスロ2017年導入カレンダーは **2017-07-24** と記載するため、exact release dateは `CONFLICT_2017_07_24_VS_2017_07_31` として保持。
- 複数の当時解析/機種DBで一致する2017-07-31をchronological canonicalとし、7/24を二次競合日として残す。平均・補正は行わない。
- 2017-05-18にプレス発表会、2017-05-19に業界報道あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY / CONFLICT_FOR_EXACT_RELEASE_DATE

## payoutRateBySetting
- 設定1: **97.9%**
- 設定2: **98.8%**
- 設定3: **101.3%**
- 設定4: **103.9%**
- 設定5: **106.6%**
- 設定6: **108.1%**
- 一撃、すろぱちくえすと、ちょんぼりすた、後年設定DBで一致。
- 同資料には完全攻略系の上限値として **99.0 / 99.9 / 102.6 / 105.3 / 108.1 / 109.8%** も併記される。これは算出条件差として別保持し、標準canonical値と平均しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BONUS
- 設定1: **1/119.6**
- 設定2: **1/118.7**
- 設定3: **1/117.9**
- 設定4: **1/116.2**
- 設定5: **1/115.0**
- 設定6: **1/113.4**

### ART「RAID MODE」
- 設定1: **1/520.0**
- 設定2: **1/502.5**
- 設定3: **1/449.1**
- 設定4: **1/406.3**
- 設定5: **1/365.8**
- 設定6: **1/347.9**
- 複数解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約34G/50枚**。
- すろぱちくえすと等の当時解析で確認。
reliability: ANALYSIS_HIGH

## netIncrease
- ST-ART「RAID MODE」: **ボーナス込み約2.0枚/G**。
- 1セット **50G+α**。平均継続率目安 約65%+EXゲーム。
- P-WORLD、一撃、すろぱちくえすと、ちょんぼりすたで整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BONUS「リベレーションズチャンス」: **約60枚 / 10G**。
- ART「RAID MODE」: 1セット **50G+α**、ボーナス込み約2.0枚/G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- A+ART機。通常時はボーナスを主要契機としてART「RAID MODE」を目指す。
- 第1ゲーム数天井: **400 / 500 / 600 / 700 / 800G** のいずれか。振り分けは **5.0 / 10.0 / 12.5 / 25.0 / 47.5%**。選択G数以降のボーナスでART当選濃厚/確定扱い。
- 第2天井: **ボーナスorART間最大810G** でART当選。
- 通常スルー天井: ART非当選ボーナス14連続後、**15回目のボーナスでART**。
- 設定変更時はスルー天井が短縮され、**5スルー後の6回目ボーナスでART**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_BEHAVIOR_CORE_WITH_PARTIAL_LOW_LEVEL_UNVERIFIED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ゲーム数天井: **RESET**。
- ボーナススルー回数天井: **RESET_TO_6TH_BONUS_ART**（5回連続ART非当選後、6回目ボーナスでART）。
- 内部状態: **再抽選**。
- 液晶開始ステージ: **船員居住区**。
- 設定変更後の通常内部モード: 通常1 **34.38%** / 通常2 **50.00%** / 通常3 **15.63%**。
- 設定変更後は戦慄状態も抽選される。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き専用の独立表として公開された契約は限定的だが、純電源OFF→ONの公開契約ではゲーム数天井・ボーナススルー回数・状態を引き継ぐ。
- 据え置き時について、設定変更を伴わない通常営業継続の天井/スルー進捗を直接数値化した別資料は十分固定できないため、低レベル内部状態まで一般論から補完しない。
reliability: ANALYSIS_MEDIUM_FOR_PRACTICAL_CARRYOVER / UNVERIFIED_FOR_LOW_LEVEL_STAY_SETTING_INTERNALS

### powerCycleBehavior
- 純電源OFF→ON:
  - ゲーム数天井: **CARRYOVER**。
  - ボーナススルー回数天井: **CARRYOVER**。
  - 内部状態: **CARRYOVER**。
  - 液晶ステージ: **船員居住区**（ボーナス/ART中の電断は当該状態を引き継ぐとの資料あり）。
- RT状態について当時必勝本資料は「現在調査中」としており、低レベルRT契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_PUBLIC_CONTRACT / UNVERIFIED_FOR_LOW_LEVEL_RT_STATE

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
- 第1天井振り分けは通常時と同じ公開表を用いる資料があり、400G 5.0% / 500G 10.0% / 600G 12.5% / 700G 25.0% / 800G 47.5%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 第2天井の最大810G契約自体は設定変更でリセット。
- 最大の朝一恩恵は、スルー回数天井が通常15回目ARTから **6回目ボーナスART**へ短縮される点。
- ART終了後も「リセット状態」継続抽選があり、**40.2%（別資料精密値40.23%）**で6回天井状態を維持、**59.8%（59.77%）**で通常15回天井側へ転落。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 通常1: **34.38%**。
- 通常2: **50.00%**。
- 通常3: **15.63%**。
- 設定差なしとして当時解析に掲載。
reliability: ANALYSIS_HIGH

### stateAfterReset
- 戦慄S: **12.50%**（全設定共通）。
- 戦慄D: **12.50%**（全設定共通）。
- 戦慄R:
  - 設定1・3・5: **3.13%**
  - 設定2・4: **6.25%**
  - 設定6: **12.50%**
- 戦慄なしの実質残率は資料上、設定1/3/5 **71.9%**、設定2/4 **68.8%**、設定6 **62.5%**として整理される。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の公開朝一恩恵: ボーナススルー天井が通常15回目から **6回目ボーナスART**へ短縮。
- 設定変更後は内部モード再抽選と戦慄状態抽選が行われ、戦慄中ボーナスはART期待度が上昇する。
- 当時解析では設定変更後0Gからの狙い目/期待値言及があるが、期待収支画像の数値は取得可能なテキストで再現性を確保できないため、DBのnumericResetDataには転記しない。
reliability: ANALYSIS_HIGH_FOR_MECHANICAL_BENEFIT / UNVERIFIED_FOR_IMAGE_ONLY_EXPECTED_VALUE

### resetPenalties
- 設定変更固有の主要な公開不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常進捗（ゲーム数天井/スルー回数）はリセットされるため、深いハマリや通常スルー回数を保持していた台では、その蓄積が消えること自体は状況依存の不利となり得る。これは固定期待値ではなく契約上のRESETとして扱う。
reliability: ANALYSIS_HIGH_FOR_COUNTER_RESET / NONE_CONFIRMED_FOR_SEPARATE_PENALTY_TABLE

### resetDetection
- 設定変更・純電断とも液晶は船員居住区開始となるため、**開始ステージ単独では変更判別不可**。
- 本機固有の確定的ガックン確率/リール初動契約は、機種名・型式と「ガックン」「朝一」「据え置き」「設定変更」「電源OFF ON」を組み替えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- スルー回数の実績や戦慄状態は変更後の推測材料にはなり得るが、確定判別とは分離する。
reliability: ANALYSIS_HIGH_FOR_STAGE_NON_DISCRIMINATION / UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetFirstCeilingDistribution: **400G 5.0% / 500G 10.0% / 600G 12.5% / 700G 25.0% / 800G 47.5%**。
- resetModeDistribution: **通常1 34.38% / 通常2 50.00% / 通常3 15.63%**。
- resetBattleStateS: **12.50%**。
- resetBattleStateD: **12.50%**。
- resetBattleStateR: **設定1/3/5 3.13% / 設定2/4 6.25% / 設定6 12.50%**。
- resetSkipCeiling: **6回目ボーナスでART**。
- resetStateLoopAfterART: **40.2%（精密表40.23%）継続 / 59.8%（59.77%）転落**。
- publishedMorningHitRate: リセット後スルー実践値の公開はあるが、画像依存のためDB canonical数値へは未転記。
- resetGakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- exact releaseDate: モゲスロは **2017-07-24**、HAZUSE/一撃/すろぱちくえすと/ちょんぼりすた/K-Navi等は **2017-07-31**。複数の当時機種資料一致を優先し、7/31をchronological canonical、7/24を `CONFLICT_SECONDARY_RELEASE_DATE` として保持。
- payoutRate: 標準値と完全攻略系上限値のレンジ表記がある。これは同一条件の競合ではなく算出条件差として分離し、標準値 **97.9 / 98.8 / 101.3 / 103.9 / 106.6 / 108.1%** をcanonicalとする。
- reset-state loop: 40.2/59.8%の丸め表と40.23/59.77%の精密表は丸め差として扱う。

## missingFields
- pure power-cycle時の低レベルRT状態契約: UNVERIFIED_AFTER_RESEARCH。
- stay-setting時の低レベル状態を電断契約以上に細分した直接資料: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun probability: UNVERIFIED_AFTER_RESEARCH。
- image-only reset expected-value tableの再現可能な数値転記: UNVERIFIED。

## sources
取得日: 2026-09-09
- HAZUSE 基本/型式/導入日: https://hazuse.com/machine/pachislot/7S0275/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/7S0275/genre/207/
- 一撃 機種トップ/スペック: https://1geki.jp/slot/s_biohazard_revelations/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_biohazard_revelations/3/
- 一撃 ART概要: https://1geki.jp/slot/s_biohazard_revelations/81/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_biohazard_revelations/61/
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2989/1/65361
- すろぱちくえすと: https://www.slopachi-quest.com/article/biohazard-revelations/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/39201/
- P-WORLD: https://www.p-world.co.jp/machine/database/8419
- K-Navi: https://p-kn.com/slot/2815/
- K-Navi プレス発表: https://p-kn.com/topics/exhibition/1616/
- ニッカンアミューズメント/娯楽産業 発表会記事: https://www.nikkansports.com/amusement/pachinko/news/1825966.html
- モゲスロ2017年導入カレンダー（7/24表記）: https://moge-site.com/new-slot2017
- pachinavi 後年統合解析DB: https://pachinavi.net/machines/biohazard-revelations/
- pacnk 後年設定DB: https://pacnk.com/slot/tools/sh_baiohazadoribereshonzu.html