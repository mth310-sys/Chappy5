# No.1260 島漢（25Φ）

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 島漢
- variant: 25Φ
- manufacturer: 平和
- releaseDateCanonical: 2019-01-21
- generation: 6号機
- systemType: AT / 疑似ボーナス / 完全告知
- formalModelNameCanonical: `SシマムスコHB1`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.9% |
| 5 | 104.9% |
| 6 | 110.1% |

### initialHitBySetting
| 設定 | BIG CHANCE(白7) | 島CHANCE(赤7) | 合算 |
|---:|---:|---:|---:|
| 1 | 1/455.1 | 1/425.8 | 1/220.0 |
| 2 | 1/406.6 | 1/400.2 | 1/201.7 |
| 5 | 1/343.0 | 1/355.1 | 1/174.5 |
| 6 | 1/286.3 | 1/333.1 | 1/154.0 |

### baseGamesPer50
- 約50.3G/50枚。

### netIncrease / basicPayout
- AT純増: 約4.0枚/G。
- BIG CHANCE: 70G、約280枚。
- 島CHANCE: 30G、約120枚。

## modeSpecificMinimumData
- 通常ゲーム数天井: 約600Gで漢ボーナス。
- スイカ回数天井: 通常時スイカ3回成立でBIG CHANCE。
- 全ボーナス後は100GのCZ「ときめき高確」。
- 通常時はボーナス高確率状態を持ち、高確中は成立役抽選とは別に毎ゲーム2.7%でボーナス抽選。
- ときめき高確は通常/天国A/B/C/夢チャンスA/Bの6モード。

## resetBehavior
### settingChangeBehavior
- 天井までのゲーム数: **リセット**。
- 内部モード: **再抽選**。
- 内部状態: **再抽選**。
- 設定変更時は非有利区間へ移行することをDMM解析で確認。

### carryOverBehavior
- 「据え置き」を純電源OFF→ONから完全に分離した本機固有の直接表は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 宵越し挙動は電源OFF→ON欄および600G判別情報を別項目として保持し、同義扱いしない。

### powerCycleBehavior
- 天井までのゲーム数: **引き継ぐ**。
- 内部モード: **引き継ぐ**。
- 内部状態: **引き継ぐ**。
- HAZUSEおよび当時解析系の朝一表で一致。

### gameCounterReset
- settingChange: `RESET`。
- powerCycle: `CARRY_OVER`。
- 朝一、前日と合算して600Gで当選なら据え置き側の有力材料、600Gを超えるなら設定変更側の材料になると解析されている。

### ceilingAfterReset
- 設定変更後もゲーム数天井は通常と同じ約600G。短縮天井は `NONE_CONFIRMED`。

### modeAfterReset
- 設定変更時は内部モード再抽選。
- リセット後は内部的に「ときめき高確」スタートとする当時解析があり、100G以内当選時はBIG優遇。
- 電源OFF→ONでは内部モード引継ぎ。

### stateAfterReset
- settingChange: `INTERNAL_STATE_RESELECTED`。
- powerCycle: `INTERNAL_STATE_CARRY_OVER`。

### advantageousSectionReset
- 設定変更時: `NON_ADVANTAGEOUS_SECTION`へ移行。
- DMM解析は非有利区間への移行タイミングとして設定変更時を明記。
- 非有利区間は1〜2G程度で再び有利区間へ移行する構造。

### resetBenefits
- 設定変更後はときめき高確スタート濃厚とする当時解析あり。
- リセット後100G以内で当選した場合はBIG（白7）優遇。
- 実戦値ではリセット後100G以内当選時BIG比率約97%、その後100G以内の連チャン率約72%と報告。ただし解析値ではなく `EMPIRICAL_PUBLIC_VALUE` として扱う。

### resetPenalties
- リセット後100G以内の初当たり自体は実戦値約1/337.6で、通常時より軽くなるわけではないとする解析。恩恵は主に当選時のBIG/連チャン側。

### resetDetection
- 朝一100G以内のREGは据え置き濃厚、BIGはリセット可能性上昇という解析。
- 前日+当日600G到達当選は据え置き濃厚、600G超過はリセット濃厚という解析。
- 有利区間ランプ消灯はリセット狙い材料として当時期待値資料に記載。
- 本機固有ガックン発生率は十分再探索後も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- normalCeiling: `約600G`
- resetShortenedCeiling: `NONE_CONFIRMED`
- resetMorningFirst100GHitRate: `1/337.6 (EMPIRICAL)`
- resetMorningFirst100GBigShare: `約97% (EMPIRICAL)`
- postResetHitThenNext100GContinuationRate: `約72% (EMPIRICAL)`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## variantDecision
- 25Φと30Φはスペック同一だが製造元・正式型式が異なるため、全機種方針に従い独立レコード化。
- 25Φ: 平和 / `SシマムスコHB1`。
- 30Φ: アムテックス / `SシマムスコMB1-30`。

## missingFields
- 25Φの検定番号。
- 据え置きを純電源OFF→ONから分離した直接契約。
- 本機固有ガックン率。

## sources
取得日: 2026-09-11
1. DMMぱちタウン — https://p-town.dmm.com/machines/3299 — 型式SシマムスコHB1、平和、2019-01-21、天井、有利区間構造 — reliability: `ANALYSIS_HIGH`
2. すろかい — https://slotkaiseki.hatenablog.com/entry/shimamusuko — 25Φ=平和/30Φ=アムテックス、型式2種、性能値 — reliability: `ANALYSIS_CROSSCHECK`
3. パチ＆スロ必勝本 — https://p.hisshobon.jp/machine/3284/1/72007 — 導入日、設定別確率・機械割、純増/獲得性能 — reliability: `ANALYSIS_HIGH`
4. すろぱちくえすと設定 — https://www.slopachi-quest.com/article/shimamusuko-settei/ — 50.3G/50枚、設定別性能 — reliability: `ANALYSIS_HIGH`
5. すろぱちくえすとリセット — https://www.slopachi-quest.com/article/shimamusuko-reset/ — 設定変更/電源OFF ON表、リセット恩恵、実戦値 — reliability: `ANALYSIS_HIGH`
6. ちょんぼりすた — https://chonborista.com/slot/orinpia-slot/69475/ — 天井、朝一表、リセット判別、実戦値 — reliability: `ANALYSIS_HIGH`
7. 日刊スポーツ — https://www.nikkansports.com/m/amusement/pachislot/news/201811130000380_m.html — 平和6号機第1弾、25Φ/30Φ発表、30Φアムテックス製 — reliability: `INDUSTRY`
8. パチビー — https://www.pachibee.jp/pparticles/view/1108 — 2018-11-07発表、2019-01-21導入予定、基本性能 — reliability: `INDUSTRY`

## confidence
- performanceCore: `ANALYSIS_CROSSCHECKED + INDUSTRY_CONTEXT`
- variantIdentity: `INDUSTRY + ANALYSIS_CROSSCHECKED`
- resetBehavior: `ANALYSIS_CROSSCHECKED_MACHINE_SPECIFIC`
