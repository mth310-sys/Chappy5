machineName: 燃えよ！功夫淑女ドラゴン
manufacturer: 山佐
releaseDate: 2017-07-31
recordNumber: 1114
generation: 5号機
systemType: A+ART / ゲーム数上乗せART
formalModelName: カンフーレディドラゴン/GG（市場実機資料のcanonical。検定通過資料にカンフーレディドラゴン/EEも存在するため下記identity/conflicts参照）
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_MODEL_VARIANT_CONFLICT

## identity
- K-Naviでホール導入開始 **2017-07-31**、メーカー山佐、ボーナス+ART機であることを確認。
- P-WORLD系業界記事では2017-06-06発表、功夫チャージシステムと純増約1.3枚/GのART仕様を確認。
- 中古実機流通資料・当時機種紹介では市場実機の型式を **カンフーレディドラゴン/GG** とする資料が複数存在するため、本レコードのcanonical型式はGGとする。
- 一方、検定通過資料には **2017-04-13 カンフーレディドラゴン/EE** と **2017-06-15 カンフーレディドラゴン/GG** の2型式が存在し、一部解析DBは導入機をEEと記載する。別スペック/試験型式/流通差の直接契約を固定できないため、EEを消さず `MODEL_VARIANT_CONFLICT_EE_VS_GG` として保持する。
- 検定番号は「型式名 / 山佐 / 検定 / 7S / EE / GG」を組み替えた再探索でも直接固定できなかったため推測しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE_AND_MANUFACTURER / CONFLICT_FOR_FORMAL_MODEL_VARIANT / UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
- 設定1: **97.6%**
- 設定2: **99.1%**
- 設定3: **101.0%**
- 設定4: **105.8%**
- 設定5: **109.0%**
- 設定6: **116.3%**
- 複数解析DBで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「功夫RUSH」
- 設定1: **1/473.1**
- 設定2: **1/449.2**
- 設定3: **1/437.8**
- 設定4: **1/400.3**
- 設定5: **1/378.9**
- 設定6: **1/294.6**

### ボーナス合算
- 設定1: **1/228.3**
- 設定2: **1/224.4**
- 設定3: **1/217.0**
- 設定4: **1/204.8**
- 設定5: **1/195.6**
- 設定6: **1/191.1**

### CZ「突撃！ドラゴンタワー」
- 設定1: **1/176.8**
- 設定2: **1/164.7**
- 設定3: **1/160.3**
- 設定4: **1/143.7**
- 設定5: **1/136.1**
- 設定6: **1/100.6**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約32G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「功夫RUSH」: **約1.3枚/G**。
- ボーナス込みART中のトータル純増目安: **約1.8枚/G**。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 功夫ボーナス（ハイパー）: **120枚**。
- 功夫ボーナス（チャレンジ）: **約90枚**。
- ART「功夫RUSH」: 功夫チャージで蓄積したゲーム数が初期ゲーム数へ変換されるゲーム数上乗せ型。純増約1.3枚/G。
- CZ「突撃！ドラゴンタワー」: 基本 **15G**。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常のボーナス/ART間ゲーム数天井は **666G**。到達後はARTへ移行する解析契約。
- 設定変更時は50%で **222G**、50%で **666G** が選択される。
- ART非当選ボーナスが4回続いた後の5回目以降はハイパーBB比率が上昇する「ARTスルー天井」系の公開仕様あり。朝一リセット契約の主目的ではないため通常時の全状態抽選詳細は収集しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_BEHAVIOR_CORE_WITH_POWER_CYCLE_PARTIAL_UNVERIFIED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ゲーム数天井進捗: **RESET**。
- リセット後天井: **222G 50% / 666G 50%**。
- 内部状態: 設定変更時に再抽選され、高確スタート率が設定別に公開されている。
- 試練モード: 設定変更時の専用振り分けが公開されている。
- 朝一の功夫チャージ表示は、試練ノ刻またはCZ到達まで内部的に伏せられる旨の解析がある。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き専用のゲーム数天井・内部状態・功夫チャージについて、本機固有の直接契約を固定できる資料は、機種名/型式名/山佐/シリーズ名と「据え置き」「朝一」「天井」「功夫チャージ」「状態」を組み替えた再探索後も不足。
- 一般的な5号機挙動からCARRYOVERを推測しない。
- **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONについて、ゲーム数天井・内部状態・功夫チャージの直接契約を固定できる本機固有資料を確認できなかった。
- 「電源OFF ON」「電断」「据え置き」「朝一」「天井」等で資料系統を変えて再探索したが、設定変更契約と混同できないため **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**（一般論で補完しない）。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_FOR_PURE_POWER_AND_STAY_SETTING

### ceilingAfterReset
- 通常最大天井 **666G**。
- 設定変更後は **50%で222Gへ短縮 / 50%で666G**。
- 固定222Gではなく二分抽選である点を保持する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定変更時「試練モード」振り分け:
  - モードB: **11.7%**
  - モードC: **33.2%**
  - モードD: **50.0%**
  - モードS: **5.1%**
- 朝一客行動へ影響するリセット専用公開値として保存。通常時の全モード移行表は収集しない。
reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時の高確スタート率:
  - 設定1: **33.2%**
  - 設定2: **37.5%**
  - 設定3: **33.2%**
  - 設定4: **37.5%**
  - 設定5: **50.0%**
  - 設定6: **55.1%**
- 複数解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大の公開朝一恩恵は **50%で天井222Gへ短縮**されること。
- 高確スタート率が設定1でも33.2%、設定6では55.1%ある。
- 試練モードも設定変更時に再抽選される。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 設定変更で従前のゲーム数天井進捗が消えるため、深いハマリ台では蓄積消失が状況依存の不利となる。
- これ以外に設定変更専用の固定的な公開ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_COUNTER_RESET / NONE_CONFIRMED_FOR_SEPARATE_PENALTY

### resetDetection
- 当時/後年攻略資料では朝一挙動からのリセット判別は **実用上困難 / 判別不可** と整理され、ガックン判別も難易度が高いとされる。
- 確定的な本機固有ガックン発生率は確認できないため、`GAKKUN_DIFFICULT_OBSERVATIONAL_NOT_DETERMINISTIC` とする。
- 開始挙動のみを設定変更確定材料にはしない。
reliability: ANALYSIS_HIGH_FOR_PRACTICAL_NON_DETECTION / UNVERIFIED_FOR_GAKKUN_PROBABILITY

### numericResetData
- resetCeilingDistribution: **222G 50% / 666G 50%**。
- resetHighStateRate: **設定1 33.2% / 設定2 37.5% / 設定3 33.2% / 設定4 37.5% / 設定5 50.0% / 設定6 55.1%**。
- resetTrialModeDistribution: **B 11.7% / C 33.2% / D 50.0% / S 5.1%**。
- resetGakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycleCounterContract: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- formalModelName: 検定通過資料に **カンフーレディドラゴン/EE** と **カンフーレディドラゴン/GG** が存在。一部機種DBはEE、複数の市場実機/中古実機資料と当時機種紹介はGGを記載。市場実機資料を重視してGGをcanonicalとしたが、EEを削除せず `MODEL_VARIANT_CONFLICT_EE_VS_GG` として保持。
- certificationNumber: 直接固定できず `UNVERIFIED_AFTER_RESEARCH`。型式末尾から推定していない。
- releaseDate: K-Navi等のホール導入開始2017-07-31をcanonical。PiDEA系の7/30〜は納品開始表現のためホール導入日との定義差として分離し、CONFLICT扱いしない。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- pure power OFF→ON contract: UNVERIFIED_AFTER_RESEARCH
- stay-setting independent carryover contract: UNVERIFIED_AFTER_RESEARCH
- deterministic gakkun probability: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedDate: 2026-09-09
- K-Navi: https://p-kn.com/slot/2828/ — 導入日、メーカー、基本仕様、純増、ボーナス獲得。
- グリーンべると/P-WORLD業界記事: https://news.p-world.co.jp/articles/9395/greenbelt — 山佐発表、功夫チャージシステム、ART純増。
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/40820/ — 設定別機械割/初当たり、ベース、天井、設定変更時天井、高確率、試練モード。
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/8424 — 5号機/A+ART仕様、ボーナス、ART/CZ基本性能。
- すろぱちくえすと: https://www.slopachi-quest.com/article/kung-fu-lady-dragon/ — 導入日、リセット高確率、朝一解析。
- 2-9伝説: https://29den.com/kungfuladydragon/ — ベース、天井、設定変更時の222G短縮、性能系列。
- SLOT HACK: https://slothack.net/matome/3346/ — リセット判別実用性、222G短縮、高確率。
- pacnk: https://pacnk.com/slot/tools/sh_moeyoisaoshukujodoragon.html — ART/CZ/ボーナス初当たり、機械割の別系統照合。
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2017/07/kung-fu-lady-dragon — 型式GG、当時機種紹介。
- 中一商事 実機流通資料: https://store.shopping.yahoo.co.jp/nakaiticom/20115.html — 市場実機型式GG、基本仕様。

## sourceReliabilitySummary
- release/manufacturer/core performance: **ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY_CORROBORATED**
- reset ceiling/high state/trial mode: **ANALYSIS_HIGH_MULTI_SOURCE**
- formal model variant: **CONFLICT**
- certification number / pure power-cycle / stay-setting low-level contract: **UNVERIFIED_AFTER_RESEARCH**
