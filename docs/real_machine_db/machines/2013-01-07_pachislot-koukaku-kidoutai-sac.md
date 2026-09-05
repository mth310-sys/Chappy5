# パチスロ攻殻機動隊S.A.C.

machineName: パチスロ攻殻機動隊S.A.C.
manufacturer: Sammy
releaseDate: 2013-01-07
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi、パチビー、HAZUSE、サミーネットワークス系当時発表で2013-01-07ホール導入開始が一致。
generation: 5号機
systemType: AT / ゲーム数管理 + 自力CZ
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## identity

- 型式名: **攻殻機動隊F**。
- 検定番号: **2S1031**。
- HAZUSE掲載。
- confidence: ANALYSIS_HIGH_PERIOD_DATABASE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.10% |
| 2 | 98.12% |
| 3 | 100.54% |
| 4 | 104.10% |
| 5 | 107.14% |
| 6 | 114.34% |

- HAZUSE掲載。
- confidence: ANALYSIS_HIGH_PERIOD_DATABASE

## initialHitBySetting

### S.A.C.モード初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/206.8 |
| 2 | 1/199.1 |
| 3 | 1/192.9 |
| 4 | 1/183.2 |
| 5 | 1/168.0 |
| 6 | 1/141.8 |

- HAZUSE、K-Navi、パチビーで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30.1G/50枚**。
- HAZUSE掲載。
- confidence: ANALYSIS_HIGH_PERIOD_DATABASE

## netIncrease

- AT「S.A.C.モード」: **約+2.8枚/G**。
- 基本 **1セット50G+α**。
- K-Navi、パチビー、HAZUSE、当時サミーネットワークス系発表で整合。
- confidence: OFFICIAL_RELATED_PLUS_MULTI_SOURCE

## basicPayout

- S.A.C.モード: 50G+α、純増約+2.8枚/G。
- エピソードAT: **40G固定 + 最終Gで上乗せ告知**。
- CZ「高確率ゾーン」: 1セット15G、AT期待度50%以上とHAZUSEが説明。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は規定ゲーム数解除、自力CZ、レア小役直撃の複数ルート。
- モード別最大規定G:
  - 通常A: **1032G**
  - 通常B: **800G**
  - 引き戻し: **250G**
  - 天国: **100G**
  - 超天国: **50G**
- 通常Aのみ特殊天井が存在し、**1001G以降のAT当選時はAT3セット + 次回天国**とHAZUSEが記載。
- 通常A/Bには200G台・400G台等の規定ゲーム数当選ゾーンが存在するが、通常時全モード振り分け表は本DB目的上の必須対象外。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE__DIRECT_FIRST_GENERATION_RESET_CONTRACT_PARTIAL
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- 「攻殻機動隊S.A.C. / 攻殻機動隊F / Sammy / 初代攻殻」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン」を組み替えて、HAZUSE、K-Navi、当時攻略/解析、旧DB、後年整理を横断。
- 初代固有の設定変更時契約を、天井G・モード・状態まで一括して明示する高信頼表は今回確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 2017年「攻殻機動隊S.A.C. 2nd GIG」および2026年スマスロ版のリセット天井・状態振り分けは別機種として除外。

### carryOverBehavior

- 純据え置き時の内部規定G、滞在モード、状態をどこまで保持するかを明示した初代固有の直接契約は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ONのみの規定G・モード・状態・液晶契約は、初代固有資料で直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 通常時の規定G管理は確認済み。
- 設定変更時の規定Gクリア/再抽選: **UNVERIFIED_AFTER_RESEARCH_AS_DIRECT_CONTRACT**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 初代について設定変更専用の短縮天井を直接示す資料は今回確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常最大は通常A 1032G、通常B 800G、引き戻し250G、天国100G、超天国50G。

### modeAfterReset

- 初代に通常A / 通常B / 引き戻し / 天国 / 超天国のモード管理が存在することは複数資料で確認。
- 設定変更時専用のモード再抽選契約・振り分け数値は **UNVERIFIED_AFTER_RESEARCH**。
- 通常AT終了後のモード移行解析は存在するが、リセット専用値ではないため本項へ混入しない。

### stateAfterReset

- 通常時に高確率ゾーン等の状態概念は存在する。
- 設定変更時・据え置き時・単純電源OFF→ON時の内部状態再抽選/保持契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 初代固有の設定変更専用短縮天井、朝一専用モード優遇、リセット恩恵発生率などの比較可能な公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更専用の明確な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 初代固有のガックン、初期出目、液晶開始ステージ等による確定的な設定変更判別は、検索語・資料系統を変えても直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 後継機のガックン・有利区間ランプ仕様は流用しない。

### publicMorningNumbers

- 初代固有の設定変更時モード振り分け、朝一特定G以内当選率、短縮天井などの比較可能な公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- normalModeCeilings: A=1032G / B=800G / RETURN=250G / HEAVEN=100G / SUPER_HEAVEN=50G
- specialCeilingBenefit: 1001G_PLUS_AT_HIT => AT_3_SETS_PLUS_NEXT_HEAVEN
- resetShortenedCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- settingChangeModeDistribution: UNVERIFIED_AFTER_RESEARCH
- settingChangeStateDistribution: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_HIGH_FOR_NORMAL_MODE_CEILINGS__UNVERIFIED_AFTER_RESEARCH_FOR_DIRECT_RESET_SUEOKI_POWER_CYCLE_CONTRACT

## missingFields

- 初代固有の設定変更時ゲーム数クリア/再抽選契約。
- 純据え置き時の規定G・モード・状態保持契約。
- 単純電源OFF→ON時の内部規定G・モード・状態・液晶契約。
- 設定変更時専用モード/状態振り分け。
- 初代固有のガックン等の変更判別。
- 初代固有の設定変更専用公開朝一数値。

## conflicts

- 今回、性能コアに重大な数値CONFLICTは確認せず。
- 2017年2nd GIGや2026年スマスロ版には明確なリセット短縮天井が存在するが、初代へは流用しない。

## sources

取得日: 2026-09-05

1. K-Navi パチスロ攻殻機動隊S.A.C.
   - https://p-kn.com/slot/1762/
   - 2013-01-07導入、AT初当たり、S.A.C.モード50G+α・純増約2.8枚/G。
2. HAZUSE パチスロ攻殻機動隊S.A.C.
   - https://hazuse.com/machine/pachislot/2S1031/
   - 型式攻殻機動隊F、検定番号2S1031、2013-01-07、設定別AT初当たり、50枚約30.1G、機械割、モード別天井、特殊天井。
3. パチビー パチスロ攻殻機動隊S.A.C.
   - https://www.pachibee.jp/machines/index/212120000
   - 2013-01-07、5号機AT、S.A.C.モード50G+α・純増約2.8枚/G、設定別初当たり。
4. 4Gamer / サミーネットワークス発表（2013-01-07）
   - https://www.4gamer.net/games/021/G002122/20130107053/
   - Sammy機、ゲーム数管理システムと自力解除ゾーンを搭載。
5. Gamer / サミーネットワークス発表（2013-01-07）
   - https://www.gamer.ne.jp/news/201301070038/
   - 2013-01-07ホール導入開始を明記。
6. パチスロ収支アップ 攻殻機動隊S.A.C. ゾーン狙い
   - https://smaslo.man-soft.com/scuffle/kokakukidotai_zone.html
   - 初代のモード別天井G、通常A/Bの規定Gゾーン。
7. CrankySeven 攻殻機動隊 STAND ALONE COMPLEX
   - https://crankyseven.com/koukakukidoutai-pc.htm
   - 初代のモード挙動・ゾーンに関する後年整理。
