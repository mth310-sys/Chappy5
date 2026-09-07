# スーパーオアシス

machineName: スーパーオアシス
manufacturer: パイオニア
releaseDate: 2016-02-01
releaseDatePrecision: exact_hall_start_analysis_database_plus_industry_delivery
recordNumber: 950
generation: 5号機
systemType: ノーマルAタイプ / 完全告知
formalModelName: スーパーオアシス／DX
inspectionNumber: 5S0953
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCHED

## identity
- HAZUSEで **2016-02-01導入**、型式名 **スーパーオアシス／DX**、検定番号 **5S0953** を確認。
- パイオニア公式更新履歴および公式Pioneer Channelで製品展開を確認。
- グリーンべると2016-01-08記事では納品開始予定を **2016-01-31** としており、導入開始日とは工程差として分離する。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.1% |
| 2 | 97.8% |
| 3 | 99.9% |
| 4 | 102.5% |
| 5 | 105.7% |
| 6 | 110.3% |

- P-WORLD、ちょんぼりすた、すろぱちくえすと、2-9伝説で一致。
- HAZUSEのみ設定1を96.9%と掲載するため設定1にはCONFLICTを保持し、複数一致する96.1%をcanonicalとする。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT

## initialHitBySetting
ノーマル機の主要初当たりとしてBIG/REG/ボーナス合算を保存。

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/299 | 1/399 | 1/171 |
| 2 | 1/290 | 1/374 | 1/163 |
| 3 | 1/278 | 1/348 | 1/154 |
| 4 | 1/265 | 1/321 | 1/145 |
| 5 | 1/252 | 1/296 | 1/136 |
| 6 | 1/239 | 1/273 | 1/127 |

- HAZUSE、P-WORLD、ちょんぼりすた、すろぱちくえすと、2-9伝説で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約36.5G/50枚**。
- グリーンべると、HAZUSEで一致。解析資料では約37G/50枚表記もあり丸め差として扱う。
- reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## netIncrease
- **NOT_APPLICABLE_NORMAL_TYPE**。
- AT/ART非搭載。

## basicPayout
- BIG BONUS: **最大312枚**。
- REG BONUS: **最大104枚**。
- グリーンべると、P-WORLDで一致。
- HAZUSE配当表の「345枚超/105枚超払い出し終了」は払い出し終了条件であり、実獲得最大枚数と混同しない。
- reliability: INDUSTRY_PLUS_DATABASE_HIGH

## modeSpecificMinimumData
- 天井: **非搭載**。
- AT/ART/RT、通常時ゲーム数モード、天井モードは主要仕様として持たないノーマルAタイプ。
- ハイビスカス点滅でボーナス確定の完全告知機。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 「スーパーオアシス / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井」を変えて、公式、業界記事、HAZUSE、P-WORLD、当時解析、後年DBを再探索。
- 本機は天井・AT/ART/RT・通常時ゲーム数モードを持たないノーマルAタイプで、設定変更時のみ発生する内部モード再抽選や短縮天井などの公開契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定値自体の変更以外に、ホール経営/朝一客AIへ必要な特別リセット恩恵は確認できない。

### carryOverBehavior
- 天井・ゲーム数モード・AT/ART状態は非搭載のため、それらの据え置きCARRYOVERは **NOT_APPLICABLE**。
- ボーナス成立中など遊技途中の例外的内部状態を含む完全実機再現粒度は本DB対象外。

### powerCycleBehavior
- 純電源OFF→ONだけで朝一専用モード、短縮天井、主要恩恵が生じる公開仕様は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更と純電断を同義扱いせず、本機固有の表示/初期出目保持契約は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- **NOT_APPLICABLE_NO_CEILING_OR_GAME_COUNT_MODE**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。

### modeAfterReset
- **NOT_APPLICABLE_NO_PUBLIC_NORMAL_GAME_MODE_SYSTEM**。
- 朝一専用モード/リセット専用モード振り分けはNONE_CONFIRMED_AFTER_RESEARCH。

### stateAfterReset
- AT/ART/RTの持越し状態は非搭載。
- ホール運用上比較すべき設定変更専用内部状態はNONE_CONFIRMED_AFTER_RESEARCH。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井非搭載のためリセット天井短縮等は非該当。

### resetPenalties
- **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、ランプ等による設定変更/据え置き確定判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- REG中やボーナス後のランプは設定示唆要素であり、朝一の設定変更判別契約とは分離する。

### numericResetData
- reset shortened ceiling: **NOT_APPLICABLE_NO_CEILING**。
- reset mode allocation: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset-only morning hit probability: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset-only benefit occurrence rate: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- `PAYOUT_RATE_SETTING1_CONFLICT`:
  - P-WORLD / ちょんぼりすた / すろぱちくえすと / 2-9伝説: 設定1 **96.1%**。
  - HAZUSE: 設定1 **96.9%**。
  - 設定2〜6は一致。平均せず双方保持し、複数一致する96.1%をcanonicalとする。
- `PAYOUT_DEFINITION_DIFFERENCE`:
  - 実獲得: BIG最大312枚 / REG最大104枚。
  - 配当表の払い出し終了条件: 345枚超 / 105枚超。
  - 定義差として分離。

## missingFields
- manufacturer-guaranteed setting-change detection: NONE_CONFIRMED_AFTER_RESEARCH
- purePowerCycle display/initial-reel-position contract: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. パイオニア公式 — 更新履歴
   - https://www.slot-pioneer.co.jp/news.html
   - スーパーオアシス公式サイト更新、導入記念施策等を確認。
   - reliability: OFFICIAL
2. Pioneer Channel — スーパーオアシス フルPV
   - https://www.youtube.com/watch?v=waNJERJ-TZA
   - オアシスシリーズ第8作、製品公式映像。
   - reliability: OFFICIAL
3. グリーンべると — 高い合成確率が魅力のオアシス最新作登場
   - https://web-greenbelt.jp/00008348/
   - 2016-01-08、BIG最大312枚/REG最大104枚、約36.5G/50枚、合算1/171〜1/127、1/31納品開始予定。
   - reliability: INDUSTRY
4. HAZUSE — スーパーオアシス
   - https://hazuse.com/machine/pachislot/5S0953/
   - 2016-02-01導入、型式/検定番号、BIG/REG/合算、約36.5G/50枚、天井非搭載。機械割設定1のみ他資料とCONFLICT。
   - reliability: ANALYSIS_DATABASE_HIGH
5. P-WORLD — スーパーオアシス
   - https://www.p-world.co.jp/machine/database/7948
   - BIG/REG/合算、機械割96.1〜110.3%、BIG最大312枚/REG最大104枚、ノーマル完全告知。
   - reliability: INDUSTRY_DATABASE
6. ちょんぼりすた — スーパーオアシス攻略まとめ
   - https://chonborista.com/slot/pionia-slot/16751/
   - BIG/REG/合算、機械割。
   - reliability: ANALYSIS_HIGH
7. すろぱちくえすと — スーパーオアシス設定判別
   - https://www.slopachi-quest.com/article/super-oasis/
   - 約37G/50枚、BIG/REG/合算、機械割、獲得枚数。
   - reliability: ANALYSIS_PERIOD
8. 2-9伝説 — スーパーオアシス
   - https://29den.com/superoasis/
   - 2016-02-01導入、天井なし、機械割、ボーナス確率。
   - reliability: ANALYSIS_SECONDARY

## confidence
- identity/formalModel/inspectionNumber: ANALYSIS_DATABASE_HIGH
- exactReleaseDate: ANALYSIS_HIGH_PLUS_INDUSTRY_DELIVERY_BOUNDARY
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT
- bonusProbabilityBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: INDUSTRY_PLUS_ANALYSIS_HIGH
- basicPayout: INDUSTRY_PLUS_DATABASE_HIGH
- ceiling: ANALYSIS_HIGH_MULTI_SOURCE_NO_CEILING
- settingChangeBehavior: RESEARCHED_NO_SPECIAL_RESET_CONTRACT_CONFIRMED
- carryOverBehavior: NOT_APPLICABLE_FOR_CEILING_MODE_AT_ART_STATE
- powerCycleBehavior: PARTIAL_UNVERIFIED_DISPLAY_CONTRACT
- resetDetection: RESEARCHED_NO_CONFIRMED_CHANGE_DETECTION
