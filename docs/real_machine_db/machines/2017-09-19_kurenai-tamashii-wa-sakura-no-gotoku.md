machineName: 紅き魂は桜の如く
manufacturer: ベルコ
releaseDate: 2017-09-19
recordNumber: 1148
generation: 5号機（5.5号機世代）
systemType: A+ART / リアルBIG+CT+ART
formalModelName: クレナイザクラ／A7
certificationNumber: 7S0823
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ベルコ製「紅き魂は桜の如く」。ベルコ公式は2017年9月登場、鬼浜に続くヤンキーシリーズ第二弾と明記。
- 導入日はスロパチネット、すろぱちくえすと、ちょんぼりすたで **2017-09-19** が一致。PiDEA Xは「納品9/18～」としており整合する。
- 正式型式 **クレナイザクラ／A7** はスロパチネット、中古実機資料、検定通過資料で一致。
- P-WORLDにて検定番号 **7S0823** を確認。パチマガスロマガの7/24検定情報でも同型式の検定通過を確認。
reliability: OFFICIAL_FOR_PRODUCT_MONTH_AND_ART_HIT + INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE + DATABASE_HIGH_FOR_MODEL_AND_CERTIFICATION

## payoutRateBySetting
- 設定1: **97.9%**
- 設定2: **99.2%**
- 設定3: **101.6%**
- 設定4: **104.8%**
- 設定5: **108.4%**
- 設定6: **112.3%**
- PiDEA X、スロパチネット、すろぱちくえすと、ちょんぼりすた等で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG BONUS
- 全設定共通: **1/2048.0**

### CT
- 設定1: **1/111.5**
- 設定2: **1/109.6**
- 設定3: **1/108.1**
- 設定4: **1/106.4**
- 設定5: **1/105.0**
- 設定6: **1/102.9**

### ART「紅RUSH」初当たり
- 設定1: **1/420.2**
- 設定2: **1/410.8**
- 設定3: **1/377.2**
- 設定4: **1/336.6 canonical / 1/336.8 conflicting secondary value**
- 設定5: **1/302.7**
- 設定6: **1/278.3**
- 設定4はベルコ公式・PiDEA X・スロパチネットが **1/336.6**、すろぱちくえすと・ちょんぼりすたが **1/336.8**。平均せず `CONFLICT_ART_S4_1_336_6_VS_1_336_8` として保持し、公式値1/336.6をcanonicalとする。
reliability: OFFICIAL_PLUS_INDUSTRY_HIGH_FOR_ART / ANALYSIS_HIGH_MULTI_SOURCE_FOR_BIG_CT / CONFLICT_FOR_ART_S4_ROUNDING_OR_TRANSCRIPTION

## baseGamesPer50
- **約32G/50枚**。
- PiDEA X、すろぱちくえすと、ちょんぼりすたで一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「紅RUSH」: **ボーナス込み約2.0枚/G**。
- P-WORLD、PiDEA X、スロパチネット、すろぱちくえすと等で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: **純増192枚**。
- ART「紅RUSH」: **1セット50G+α**、ゲーム数上乗せ型。
- CZ「昇華乱舞」: **10G+α / ART期待度約40%**。
- プレミアムART「双花繚乱」: **1セット20G / 継続率80%以上**（P-WORLD掲載の比較用基本性能）。
reliability: INDUSTRY_PLUS_DATABASE_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常ゲーム数天井: **ボーナス・CT・ART間500G → ART確定**。
- CT成立でもゲーム数天井カウンタはリセットされる。
- CZスルー天井: **CZ5回連続失敗 → 6回目CZでART確定**。
- 通常時には低確/高確の内部状態と、CZ/ART高確率状態「紅テープモード」が存在。
reliability: DATABASE_AND_ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: SETTING_CHANGE_STAY_SETTING_POWER_CYCLE_AND_RESET_NUMERIC_CONFIRMED; GAKKUN_POSSIBLE_NOT_DETERMINISTIC; CZ_SKIP_COUNTER_RESET_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時はゲーム数天井を **RESET**。
- 朝一は **25%で紅テープモード**へ移行。
- 液晶開始ステージは **学校（教室）ステージ**。
- ゲーム数天井は通常と同じ500Gで、設定変更専用の短縮天井は確認されない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_RESET_STATE_NUMERIC_AND_STAGE

### carryOverBehavior
- すろぱちくえすとの朝一比較表では、据え置き時は **天井を引き継ぐ**。
- 据え置き時の開始ステージも **学校**。
- 据え置き時の紅テープモード/低確高確など状態の個別引継ぎ契約は、同表では明示値がなく、一般挙動から補完しない。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_STAGE / UNVERIFIED_FOR_FULL_STATE_CONTRACT

### powerCycleBehavior
- ちょんぼりすたの朝一リセット比較では、純電源OFF→ON時は **天井引継ぎ・内部状態引継ぎ**、ステージは **教室ステージ**。
- 設定変更と純電源OFF→ONを分離して保存する。
reliability: ANALYSIS_HIGH_SINGLE_DIRECT_TABLE

### gameCounterReset
- settingChange: **RESET**。
- stay setting: **CARRYOVER**（すろぱちくえすと朝一表）。
- pure power OFF→ON: **CARRYOVER**（ちょんぼりすた朝一表）。
- CZ5スルー天井カウンタについて、設定変更/据え置き/純電断それぞれの直接契約は十分な再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_GAME_CEILING / UNVERIFIED_FOR_CZ_SKIP_COUNTER

### ceilingAfterReset
- settingChangeCeiling: **500G**（ボーナス・CT・ART間）。
- normalCeiling: **500G**。
- settingChangeSpecificShortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ceilingBenefit: **ART確定**。
reliability: DATABASE_AND_ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定変更時、**25%で紅テープモード**。
- 紅テープモードはCZ/ART期待度約50%の高確率状態で、朝一客のリセット推測に使える比較可能な数値として保持。
- 通常/天国等のゲーム数モードや朝一専用天井モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DIRECT_RESET_NUMERIC

### stateAfterReset
- 設定変更時: **紅テープモード25%**。残り75%の低確/高確内訳は公開値を確認できず、推測配分しない。
- pure power OFF→ON: **内部状態引継ぎ**（ちょんぼりすた朝一表）。
- stay setting: 独立した内部状態契約の直接記述は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_RED_TAPE_AND_POWER_CYCLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時 **25%で紅テープモード**。紅テープモード中のCZ/ART期待度は約50%とされ、朝一の明確な状態恩恵。
- 通常天井自体は500Gのままで短縮なし。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 設定変更により前日からのゲーム数天井進行は消去されるため、据え置き時に可能な宵越しゲーム数利用は失われる。
- それ以外の設定変更専用の公開された不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_GAME_COUNTER_RESET

### resetDetection
- 設定変更後も据え置き/電断後も開始ステージは学校系のため、**開始ステージ単独では設定変更判別不可**。
- 朝一で紅テープモードに滞在していれば設定変更の可能性が上がる。ただし設定変更時発生率は25%で、前日から同モード滞在の据え置き可能性もあるため確定判別ではない。
- ガックンは、当時解析がベルコ他機種の挙動から **有効の可能性が高いが分かりづらい** と推測している。実機での決定的検証ではないため `POSSIBLE_NOT_DETERMINISTIC`。
- 確定ガックン発生率、初期出目、ランプによる確定変更判別は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RED_TAPE_SIGNAL / ANALYSIS_SINGLE_INFERENCE_FOR_GAKKUN

### numericResetData
- resetRedTapeModeProbability: **25%**
- redTapeModeCzArtExpectation: **約50%**
- resetCeiling: **500G**
- normalCeiling: **500G**
- resetCeilingReduction: **0G / no shortening confirmed**
- resetStartStage: **学校/教室**
- powerCycleGameCounter: **CARRYOVER**
- powerCycleInternalState: **CARRYOVER**

## missingFields
- CZ5スルー天井カウンタの設定変更/据え置き/純電断別処理: **UNVERIFIED_AFTER_RESEARCH**
- setting-stay-specific internal state contract distinct from power cycle: **UNVERIFIED_AFTER_RESEARCH**
- deterministic gakkun / initial reel / lamp reset detection: **UNVERIFIED_AFTER_RESEARCH**
- setting-change remaining 75% state distribution: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- ART setting4 initial hit: **CONFLICT_1_336_6_VS_1_336_8**。
  - 1/336.6: ベルコ公式 / PiDEA X / スロパチネット。
  - 1/336.8: すろぱちくえすと / ちょんぼりすた。
  - 平均せず、公式値1/336.6をcanonicalとする。

## sources
retrievedAt: 2026-09-10
- BELLCO公式 — 製品月/5号機ART/設定別ART確率: https://www.s-bellco.co.jp/products/slot/kurenaizakura/
- PiDEA X — 2017-09-10、納品9/18～/BIG192枚/確率/機械割/ベース: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E7%B4%85%E3%81%8D%E9%AD%82%E3%81%AF%E6%A1%9C%E3%81%AE%E5%A6%82%E3%81%8F%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- P-WORLD — 型式/検定番号/基本性能/天井: https://www.p-world.co.jp/machine/database/8475
- パチマガスロマガ検定情報 — 2017-07-24検定通過・型式: https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0098&mwr_cd=090&tac_cd=00044201&type=1
- スロパチネット — 導入日/型式/性能コア/設定変更25%紅テープモード: https://slopachi-net.com/kurenaizakura
- すろぱちくえすと — 導入日/性能/天井/朝一比較/リセット25%/据え置き天井/ガックン推測: https://www.slopachi-quest.com/article/akakitamashiihasakuranogotoku/
- ちょんぼりすた — 導入日/性能コア/電源OFF→ON天井・状態引継ぎ/教室開始: https://chonborista.com/slot/belko-slot/44474/
- 中一商事（楽天市場） — 市場実機型式クレナイザクラ/A7の照合: https://item.rakuten.co.jp/auc-nakaiti/akakitamshi_sakuranogotoku/

## nextRelayNote
- 2017-09-19群はOPENのまま。
- 次候補は **乱嵐エイサー ver.100**。重複・正式表記・導入日・型式を確認してNo.1149候補としてperformance core + resetBehavior v0.7を収集する。
- その後 `闘え!サラリーマン` の9/19導入可否を再監査し、同日全メーカー横断監査後にCLOSED判定する。
