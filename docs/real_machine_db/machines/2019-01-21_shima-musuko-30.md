# No.1261 島漢-30

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 島漢-30
- variant: 30Φ
- manufacturer: アムテックス（総販売元: 平和）
- releaseDateCanonical: 2019-01-21
- generation: 6号機
- systemType: AT / 疑似ボーナス / 完全告知
- formalModelNameCanonical: `SシマムスコMB1-30`
- certificationNumber: `8S0769`
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
- 全ボーナス後100GのCZ「ときめき高確」。
- ときめき高確は通常/天国A/B/C/夢チャンスA/Bの6モード。

## resetBehavior
### settingChangeBehavior
- 天井までのゲーム数: `RESET`。
- 内部モード: `RESELECTED`。
- 内部状態: `RESELECTED`。
- 設定変更時は非有利区間へ移行することを同一スペック解析で確認。

### carryOverBehavior
- 据え置きを純電源OFF→ONから完全に分離した30Φ固有の直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 天井までのゲーム数: `CARRY_OVER`。
- 内部モード: `CARRY_OVER`。
- 内部状態: `CARRY_OVER`。
- HAZUSEの30Φ専用ページおよび当時解析で一致。

### gameCounterReset
- settingChange: `RESET`。
- powerCycle: `CARRY_OVER`。

### ceilingAfterReset
- 設定変更後も約600G。短縮天井は `NONE_CONFIRMED`。

### modeAfterReset
- 設定変更時は内部モード再抽選。
- リセット後はときめき高確スタート濃厚とする当時解析あり。
- 電源OFF→ONは内部モード引継ぎ。

### stateAfterReset
- settingChange: `INTERNAL_STATE_RESELECTED`。
- powerCycle: `INTERNAL_STATE_CARRY_OVER`。

### advantageousSectionReset
- 設定変更時は非有利区間へ移行。
- 非有利区間は短く、再び有利区間へ移行する構造。

### resetBenefits
- リセット後100G以内当選時はBIG優遇。
- 公開実戦値: 100G以内当選時BIG比率約97%、その後100G以内連チャン率約72%。解析値ではないため `EMPIRICAL_PUBLIC_VALUE`。

### resetPenalties
- リセット後100G以内の初当たり自体は実戦値約1/337.6で、通常より軽いとは限らない。

### resetDetection
- 朝一100G以内REGは据え置き濃厚、BIGはリセット可能性上昇とする解析。
- 前日+当日600Gで当選は据え置き濃厚、600G超過はリセット濃厚とする解析。
- 本機固有ガックン率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- normalCeiling: `約600G`
- resetShortenedCeiling: `NONE_CONFIRMED`
- resetMorningFirst100GHitRate: `1/337.6 (EMPIRICAL)`
- resetMorningFirst100GBigShare: `約97% (EMPIRICAL)`
- postResetHitThenNext100GContinuationRate: `約72% (EMPIRICAL)`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## variantDecision
- 25Φと30Φは性能同一だが、製造元・正式型式が異なるため独立レコード化。
- 30Φはアムテックス製で、HAZUSEが型式 `SシマムスコMB1-30` / 検定番号 `8S0769` を掲載。

## missingFields
- 据え置きを純電断から分離した30Φ固有契約。
- 本機固有ガックン率。

## sources
取得日: 2026-09-11
1. HAZUSE — https://hazuse.com/machine/pachislot/8S0769/ — 30Φ、アムテックス、型式SシマムスコMB1-30、検定番号8S0769、2019-01-21、純増、設定変更/電断表 — reliability: `ANALYSIS_HIGH_MACHINE_DB`
2. 一撃 — https://1geki.jp/slot/s_shimamusuko30/61/ — 30Φ製造元アムテックス/総販売元平和、AT性能 — reliability: `ANALYSIS_HIGH`
3. すろかい — https://slotkaiseki.hatenablog.com/entry/shimamusuko — 25Φ/30Φ型式・メーカー差、設定別性能 — reliability: `ANALYSIS_CROSSCHECK`
4. パチ＆スロ必勝本 — https://p.hisshobon.jp/machine/3284/1/72007 — 設定別確率・機械割、導入日、AT性能 — reliability: `ANALYSIS_HIGH`
5. すろぱちくえすとリセット — https://www.slopachi-quest.com/article/shimamusuko-reset/ — 設定変更/電源OFF ON、リセット恩恵/実戦値 — reliability: `ANALYSIS_HIGH`
6. ちょんぼりすた — https://chonborista.com/slot/orinpia-slot/69475/ — 朝一表、天井、判別、実戦値 — reliability: `ANALYSIS_HIGH`
7. 日刊スポーツ — https://www.nikkansports.com/m/amusement/pachislot/news/201811130000380_m.html — 島漢/島漢-30発表、30Φアムテックス製 — reliability: `INDUSTRY`
8. パチビー — https://www.pachibee.jp/pparticles/view/1108 — 2019-01-21導入予定、30Φアムテックス製、基本性能 — reliability: `INDUSTRY`

## confidence
- formalModel/certification: `ANALYSIS_HIGH_MACHINE_DB`
- performanceCore: `ANALYSIS_CROSSCHECKED + INDUSTRY_CONTEXT`
- resetBehavior: `ANALYSIS_CROSSCHECKED_MACHINE_SPECIFIC`
