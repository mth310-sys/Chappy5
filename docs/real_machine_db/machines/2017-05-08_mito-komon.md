machineName: ぱちスロ 水戸黄門
manufacturer: 京楽産業.
releaseDate: 2017-05-08
recordNumber: 1078
generation: 5号機 / 5.5号機
systemType: A+ART / 周期管理型ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- 京楽産業.発表を扱う2017-03-24グリーンべると、2017-03-30 PiDEA XでA+ART機として確認。PiDEA Xは納品（開店）日を2017-05-08予定と明記。
- ちょんぼりすた、期待値見える化、2-9伝説も2017-05-08導入で一致。
- すろぱちくえすとは記事冒頭で「導入日5月8日」とする一方、機種情報表のみ2017/4/17表記。5号機クロニクルは2017/4表記。この差は平均せずCONFLICTとして保持し、業界記事+複数解析一致の2017-05-08をcanonicalとする。
- formalModelName/certificationNumberは「ぱちスロ水戸黄門」「水戸黄門」「京楽」「型式」「検定番号」「6S」等で資料系統を変えて再探索したが、高信頼直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: INDUSTRY_FOR_RELEASE_AND_SYSTEM; ANALYSIS_HIGH_MULTI_SOURCE_FOR_CORE

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|97.0%|
|2|98.1%|
|3|100.1%|
|4|104.2%|
|5|106.4%|
|6|109.0%|
- ちょんぼりすた、すろぱちくえすと、2-9伝説、期待値見える化、5号機クロニクルで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
|設定|ART|
|---:|---:|
|1|1/395.6|
|2|1/393.9|
|3|1/373.8|
|4|1/330.0|
|5|1/280.8|
|6|1/261.3|

### リアルボーナス合算
|設定|ボーナス合算|
|---:|---:|
|1|1/1057.0|
|2|1/1057.0|
|3|1/1057.0|
|4|1/1008.2|
|5|1/1008.2|
|6|1/949.8|
- 複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: 約44G/50枚。
- ちょんぼりすた、すろぱちくえすと、期待値見える化で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「勧善懲悪ボーナス」: 約1.6枚/G。
- 一部解析はボーナス込み約1.7枚/Gも併記するため、ART単体1.6枚/Gと定義を分離して保持。
reliability: INDUSTRY; ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- リアルボーナス: 100枚 or 200枚。
- ART「勧善懲悪ボーナス」: 1セット40G + 継続演出5G。
- 上位ART「宿世ノ刻」: 1セット10G。
reliability: INDUSTRY; ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は1G=1里を基本に127里で1周期。短縮契機があるため実際の1周期は平均約80Gとされる。
- 通常最大天井: 11周期到達でART確定。理論上127里×11周期=最大1397G相当だが、周期短縮があるため単純固定G天井ではない。
- 通常時天井周期振り分けは設定差あり。本DBでは完全再現用全テーブルは収集対象外とし、朝一差に必要なリセット値のみ保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_CORE_RESET_CONTRACT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井周期/進捗: RESET。
- 内部モード: RESELECT。
- 内部状態: RESET / RESELECTとして当時解析表に明記。
- 里表示: 「??」表示。
- 開始目的地/ステージ: 江戸。
- リセット時は2周期目までのART突入可能性が約40%へ優遇。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置きは、設定変更を行わない通常運用として天井進捗・モード・状態を引き継ぐ契約で扱う。純電源OFF→ON比較表で天井/モード/状態CARRYOVERを直接確認。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 天井: CARRYOVER。
- モード: CARRYOVER。
- 状態: CARRYOVER。
- 開始目的地/表示上は江戸・「??」となる解析表があり、見た目だけで設定変更とは断定できない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- settingChange: RESET。
- carryOver: CARRYOVER。
- powerCycle: CARRYOVER。

### ceilingAfterReset
- 固定の短縮G天井ではなく、リセット時に2周期目までのART当選率が約40%へ優遇される周期型恩恵。
- 通常最大11周期という上限自体を「2周期天井確定」と読み替えない。公開情報は「2周期目までに約40%」であり、残り約60%はそれ以降へ進み得る。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- settingChange: RESELECT。
- powerCycle/carryOver: CARRYOVER。
- 設定変更専用のモード完全振り分けは、表記・検索語・資料系統を変更しても今回直接固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_CONTRACT; UNVERIFIED_FOR_FULL_DISTRIBUTION

### stateAfterReset
- settingChange: RESET / RESELECT。
- powerCycle/carryOver: CARRYOVER。
- 具体的な低確/高確等の朝一振り分け率はUNVERIFIED_AFTER_RESEARCH。
reliability: ANALYSIS_HIGH_FOR_CONTRACT; UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更時は2周期目までにARTへ突入する可能性が約40%へ優遇。
- 前日の深い周期天井進捗は消える一方、朝一専用優遇により早期ART期待度が上がる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日の天井周期進捗・有利なモード/状態は設定変更で消去される。
- その他の設定変更専用不利要素: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 里表示は朝一「??」、目的地は江戸となるが、電源OFF→ON側も同様の表示になる資料のため単独判別不可。
- すろぱちくえすとのガックン判別検証は「判別不可」。本機固有の決定的ガックン判別は採用しない。
- 前日周期進捗を把握できる場合、内部引継ぎに由来する当選挙動は据え置き推測材料になり得るが確定判別ではない。
reliability: ANALYSIS_HIGH_FOR_DISPLAY_AND_GAKKUN_NOT_USABLE

### numericResetData
- normalMaxCeiling: 11 cycles
- nominalDistancePerCycle: 127 ri (approximately 1 ri/G before shortening effects)
- averageCycleLengthPublished: approximately 80G
- resetARTByEndOfCycle2: approximately 40%
- resetMode: RESELECT
- resetState: RESET_RESELECT
- powerCycleCeiling: CARRYOVER
- powerCycleMode: CARRYOVER
- powerCycleState: CARRYOVER
- reset/powerCycleStartDestination: EDO
- morningRiDisplay: "??"

## conflicts
- CONFLICT_RELEASE_DATE_2017_05_08_VS_2017_04_17_OR_2017_04_MONTH: PiDEA X（業界記事）・ちょんぼりすた・期待値見える化・2-9伝説は2017-05-08。すろぱちくえすとは記事冒頭5/8だが機種情報表だけ4/17、5号機クロニクルは2017/4。canonicalは業界記事+複数一致の2017-05-08。
- netIncreaseの約1.6枚/Gと約1.7枚/GはART単体とボーナス込みの定義差として分離し、数値競合扱いしない。

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- full setting-change mode distribution: UNVERIFIED_AFTER_RESEARCH
- numeric internal-state distribution after reset: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. グリーンべると — https://web-greenbelt.jp/00009435/
2. PiDEA X — https://pidea.jp/articles/%E6%99%82%E4%BB%A3%E5%8A%87%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%81%AE%E6%9C%80%E9%AB%98%E5%B3%B0%E3%80%8C%E6%B0%B4%E6%88%B8%E9%BB%84%E9%96%80%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E4%BA%AC%E6%A5%BD
3. ちょんぼりすた — https://chonborista.com/slot/kyoraku-slot/34909/
4. すろぱちくえすと — https://www.slopachi-quest.com/article/mitokoumon/
5. 2-9伝説 — https://29den.com/mitokohmon/
6. 期待値見える化 — https://slotjin.com/zone/mitokoumon/
7. P-WORLD — https://www.p-world.co.jp/machine/database/8330
8. 5号機クロニクル（京楽産業＆オッケー.） — https://5goki.com/kyoraku
