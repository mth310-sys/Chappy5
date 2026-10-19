machineName: パチスロ グラップラー刃牙
manufacturer: 七匠
releaseDate: 2017-05-08
recordNumber: 1076
generation: 5号機 / 5.5号機
systemType: ART / リアルボーナス(CZ的役割)+バトル継続ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_PAYOUT_CONFLICT

## identity
- パチビー、ちょんぼりすた、すろぱちくえすとで2017-05-08導入一致。
- 2017-04-28のPiDEA X業界記事は七匠製、納品5/7〜と記載し導入日と整合。
- formalModelName/certificationNumberは機種名・七匠・型式・検定・6S等で再探索したが今回高信頼直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY_AND_DATE

## payoutRateBySetting
### 解析系canonical候補
|設定|機械割|
|---:|---:|
|1|98.34%|
|2|99.35%|
|3|100.79%|
|4|103.95%|
|5|105.98%|
|6|108.19%|

### 業界記事値
|設定|機械割|
|---:|---:|
|1|96.7%|
|2|98.5%|
|3|100.8%|
|4|104.5%|
|5|106.8%|
|6|110.1%|
- 差が大きいため平均せずCONFLICT保持。
reliability: CONFLICT_INDUSTRY_VS_ANALYSIS

## initialHitBySetting
### ART初当たり
|設定|ART|
|---:|---:|
|1|1/432.3|
|2|1/412.5|
|3|1/387.5|
|4|1/337.8|
|5|1/310.4|
|6|1/283.3|
- パチビー/すろぱちくえすと/PiDEA Xで丸め差の範囲で一致。

### 力みゾーン
- 約1/240.9〜1/241.0、全設定共通。

### CZ
- パチビー: 1/249.3 → 1/191.1。
- PiDEA X: 1/227 → 1/176。
- 定義/集計範囲差の可能性がありCONFLICTとして別保持。
reliability: ANALYSIS_HIGH_FOR_ART; CONFLICT_FOR_CZ

## baseGamesPer50
- canonical: 約41G/50枚。
- PiDEA X業界記事、すろぱちくえすとで一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「地上最強トーナメント」: 約2.0枚/G。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 力みゾーン等リアルボーナス: 36枚獲得。
- ART「地上最強トーナメント」: バトル敗北まで継続。
- EX「地上最強の親子喧嘩」: 1セット20G、約85%ループ。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: ART間で400G/800G/1300Gの振り分け。最大1300G。
- 天井到達時ART確定、青7選択率約40%。
- ART後天井振り分け: 設定1〜3=800G 6.25% / 1300G 93.75%、設定4=400G 1.60% / 800G 10.00% / 1300G 88.40%、設定5=400G 1.60% / 800G 20.00% / 1300G 78.40%、設定6=400G 1.60% / 800G 90.00% / 1300G 8.40%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_CORE_RESET_CONTRACT_WITH_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数RESET。
- リセット専用天井振り分けへ再抽選: 400G 25.0% / 800G 75.0%、1300G選択なし。
- 内部状態: UNVERIFIED_AFTER_RESEARCH。当時解析でも調査中。
- ステージ: UNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_CEILING; UNVERIFIED_FOR_STATE_AND_STAGE

### carryOverBehavior
- 据え置き時は前日天井進捗をCARRYOVERする前提で宵越し攻略が成立する解析を複数確認。
- 内部状態の独立した据え置き契約はUNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_CEILING

### powerCycleBehavior
- 天井: CARRYOVER。
- 内部状態: UNVERIFIED_AFTER_RESEARCH。
- ステージ: UNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_CEILING; UNVERIFIED_FOR_STATE_AND_STAGE

### gameCounterReset
- settingChange: RESET。
- carryOver: CARRYOVER。
- powerCycle: CARRYOVER。

### ceilingAfterReset
- 最大1300Gから最大800Gへ短縮。
- 全設定共通: 400G=25.0%、800G=75.0%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 独立した朝一モード振り分けはNONE_CONFIRMED_AFTER_RESEARCH。
- 天井振り分けはceilingAfterResetで管理。

### stateAfterReset
- settingChange: UNVERIFIED_AFTER_RESEARCH。
- carryOver: UNVERIFIED_AFTER_RESEARCH。
- powerCycle: UNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 最大天井が800Gへ短縮。
- 400G天井25%、800G天井75%。
- 天井到達時はART確定かつ青7選択率約40%。
reliability: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進捗は設定変更で消去。
- その他の設定変更専用不利要素: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 当日液晶ゲーム数が800Gを超えれば据え置き濃厚という実用判別が可能。
- すろぱちくえすとではガックン有効とする解析あり。メーカー公式保証ではないためANALYSIS_SINGLEとして保持。
- 朝一フェイク前兆は設定変更/電源OFF→ON双方で発生し得るため、前兆有無だけではリセット判別不可。
reliability: ANALYSIS_HIGH_FOR_800G_THRESHOLD; ANALYSIS_SINGLE_FOR_GAKKUN

### numericResetData
- normalMaxCeiling: 1300G
- resetCeilingDistribution: 400G 25.0% / 800G 75.0%
- resetMaxCeiling: 800G
- ceilingReward: ART確定; 青7約40%
- powerCycleCeiling: CARRYOVER
- settingChangeInternalState: UNVERIFIED_AFTER_RESEARCH

## conflicts
- PAYOUT_RATE_CONFLICT: パチビー等解析 98.34/99.35/100.79/103.95/105.98/108.19% vs PiDEA X業界記事 96.7/98.5/100.8/104.5/106.8/110.1%。
- CZ_RATE_CONFLICT: パチビー 1/249.3→1/191.1 vs PiDEA X 1/227→1/176。定義差の可能性あり。

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange/carryOver/powerCycle internal state contract: UNVERIFIED_AFTER_RESEARCH
- reset stage behavior: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. パチビー — https://www.pachibee.jp/machines/index/217040002
2. ちょんぼりすた — https://chonborista.com/slot/nanashow/34781/
3. すろぱちくえすと — https://www.slopachi-quest.com/article/baki-slot/
4. PiDEA X — https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%82%B0%E3%83%A9%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%88%83%E7%89%99%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
5. 期待値見える化 — https://slotjin.com/zone/baki/
