machineName: パチスロ スーパー海物語 IN 沖縄2
manufacturer: 三洋物産 / SANYO
releaseDate: 2016-09-05
recordNumber: 1012
generation: 5号機 / 5.5号機期
systemType: ノーマルAタイプ / リアルボーナス / 液晶演出
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity
- K-Naviはホール導入開始2016-09-05、ちょんぼりすたも2016-09-05で一致。
- SANYO公式PVは2016-07-18公開で、本機をSANYOの新機種として紹介。
- 型式名は中古実機資料で `パチスロスーパー海物語IN沖縄2KK` を確認し、ホールデータ資料でも同型式表記を確認できる。
- 検定番号は型式名・メーカー・検定・6S等で再探索したが今回直接固定できずUNVERIFIED_AFTER_RESEARCH。
- 09/05群の既存進行後に判明した遡及漏れのためNo.1012として追加するが、chronologicalFrontier自体は2016-09-20を維持する。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting
canonicalSourceDefinition: ANALYSIS_PUBLISHED
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.6% |
| 3 | 100.2% |
| 4 | 102.6% |
| 5 | 107.0% |
| 6 | 110.9% |
- ちょんぼりすた、pacnk系で同系列を確認。
- 5号機クロニクルは 97.4 / 98.5 / 100.2 / 102.6 / 106.9 / 110.8%。
- けんスロは 97.50 / 98.70 / 100.30 / 102.70 / 107.10 / 110.90%。
- 小数第1位レベルで資料差があるため平均せずCONFLICTとして原値を保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_ROUNDING_CONFLICT

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/282.48 | 1/354.25 | 1/157.16 |
| 2 | 1/276.52 | 1/343.12 | 1/153.12 |
| 3 | 1/269.70 | 1/324.44 | 1/147.27 |
| 4 | 1/260.06 | 1/300.62 | 1/139.44 |
| 5 | 1/247.31 | 1/257.00 | 1/126.03 |
| 6 | 1/236.59 | 1/236.59 | 1/118.30 |
- K-Navi掲載精密値。ちょんぼりすた・pacnk・けんスロの丸め値とも整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: 約34G/50枚。
- ちょんぼりすたが約34回/50枚。
- けんスロは34.0〜36.1G/50枚と設定差を含むレンジを掲載。
- canonicalは市場比較用の代表値として約34Gを採用し、設定差レンジは別定義として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- NOT_APPLICABLE_REAL_BONUS_NORMAL_TYPE。
- RT/AT/ART等の付加出玉機能なしとする資料を確認。

## basicPayout
- BIG: 約312枚。
- REG: 104枚。
- BIGは345枚超の払出で終了、REGは105枚超の払出で終了とする型式資料あり。
- K-Navi、ちょんぼりすた、中古実機資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- オーソドックスなノーマルAタイプ。
- 通常ゲーム数天井なし。
- AT/ART/CZ、通常時ゲーム数管理モードは非搭載。
- 液晶のシーサー/マリン/海/シークレット等は演出選択モードであり、朝一内部モードとして混同しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 通常ゲーム数天井、AT/ARTゲーム数、通常時ゲーム数管理モードは非搭載のため、それらのリセット契約はNOT_APPLICABLE。
- K-Naviに本機固有の「設定変更後の挙動」解析項目が存在することは確認できたが、現存検索結果から本文の具体契約を直接固定できなかった。
- 成立済みボーナス、告知状態、演出選択状態等の特殊状態を含む厳密な設定変更契約はUNVERIFIED_AFTER_RESEARCH。

### carryOverBehavior
- 通常ゲーム数天井・AT/ART状態はNOT_APPLICABLE。
- 成立済みボーナス、告知状態、演出選択状態等の特殊状態の据え置き契約はUNVERIFIED_AFTER_RESEARCH。

### powerCycleBehavior
- 通常ゲーム数天井・AT/ART状態はNOT_APPLICABLE。
- 純電源OFF→ON時の成立済みボーナス、告知状態、演出選択状態等の厳密契約はUNVERIFIED_AFTER_RESEARCH。

### gameCounterReset
- NOT_APPLICABLE_NO_GAME_NUMBER_CEILING。

### ceilingAfterReset
- NOT_APPLICABLE_NO_CEILING。

### modeAfterReset
- NOT_APPLICABLE_NO_GAME_NUMBER_MODE_SYSTEM_CONFIRMED。
- 液晶演出モードの初期表示/選択状態は内部当選モードとは分離し、今回確定値にしない。

### stateAfterReset
- AT/ART高確等はNOT_APPLICABLE。
- リアルボーナス成立済み等の特殊状態のみUNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更専用の短縮天井、朝一専用モード、公開された朝一初当たり優遇はNONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 設定変更により失われる天井進捗やAT/ARTモードは非搭載。
- その他の設定変更固有の主要不利要素はNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 本機固有のガックン、初期出目、液晶表示、告知ランプを用いた設定変更/据え置きの確定的判別は、機種名表記揺れ・型式KK・三洋/SANYO・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したが直接根拠を固定できずUNVERIFIED_AFTER_RESEARCH。
- 通常時のベル確率やBIG中/終了画面の設定示唆は「設定推測」であり、「朝一の設定変更判別」と混同しない。

### numericResetData
- 朝一専用モード振り分け / リセット恩恵発生率 / 短縮天井G数: NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts
- PAYOUT_RATE_ROUNDING:
  - ちょんぼりすた/pacnk系: 97.5 / 98.6 / 100.2 / 102.6 / 107.0 / 110.9%。
  - 5号機クロニクル: 97.4 / 98.5 / 100.2 / 102.6 / 106.9 / 110.8%。
  - けんスロ: 97.50 / 98.70 / 100.30 / 102.70 / 107.10 / 110.90%。
  - 平均化せず全系列を保持。
- BASE_DEFINITION:
  - 代表値約34G/50枚と設定別レンジ34.0〜36.1G/50枚は定義粒度が違うため統合平均しない。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 特殊状態での設定変更/据え置き/純電断契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有の朝一変更判別: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08
1. SANYO公式チャンネル — パチスロスーパー海物語IN沖縄2 公式PV
   - https://www.youtube.com/watch?v=b1YjB0SBRTc
   - 2016-07-18公開、新機種公式PV。
   - reliability: OFFICIAL
2. K-Navi — パチスロ スーパー海物語 IN 沖縄2
   - https://p-kn.com/slot/2572/
   - ホール導入開始2016-09-05、BIG/REG/合算精密値、BIG約312枚、REG104枚、ノーマルタイプ、「設定変更後の挙動」解析項目の存在。
   - reliability: ANALYSIS_HIGH
3. ちょんぼりすた — スーパー海物語IN沖縄2
   - https://chonborista.com/slot/sanyo-slot/23038/
   - 2016-09-05、Aタイプ、約34G/50枚、機械割、BIG/REG/合算、天井なし。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — 三洋物産5号機一覧
   - https://5goki.com/sanyo
   - 2016/9、機械割別系列。
   - reliability: RETROSPECTIVE_DATABASE
5. pacnk — スーパー海物語IN沖縄2 設定判別ツール
   - https://pacnk.com/slot/tools/sh_umiokinawa2.html
   - BIG/REG、機械割系列。
   - reliability: RETROSPECTIVE_ANALYSIS
6. けんのスロットシミュレーション — スーパー海物語IN沖縄2解析
   - https://kenslo65536.com/kaiseki/umi-in-okinawa2.html
   - 34.0〜36.1G/50枚、天井なし、別丸め機械割系列。
   - reliability: RETROSPECTIVE_ANALYSIS
7. 中一商事 — 三洋 パチスロスーパー海物語IN沖縄2
   - https://www.nakaiti.com/html/sayo00077.html
   - 型式名 `パチスロスーパー海物語IN沖縄2KK`、ノーマルA、BIG/REG払出終了条件と獲得目安。
   - reliability: SECONDARY_MACHINE_DATABASE
8. A-SLOT — パチスロスーパー海物語IN沖縄2
   - https://www.a-slot.com/SHOP/sanyo26.html
   - 2016年9月導入開始、5号機、Aタイプ市場/RT等付加機能なし。
   - reliability: SECONDARY_MACHINE_DATABASE
