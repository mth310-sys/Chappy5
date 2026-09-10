# No.1247 スーパーリノXX

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_CONFLICT`
- machineName: スーパーリノXX
- manufacturer: 山佐
- releaseDateCanonical: 2018-12-03
- generation: 6号機
- systemType: リノシステム / リアルボーナス連チャンタイプ
- formalModelName: `SスーパーリノXZZ`
- certificationNumber: `8S0711`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- 必勝本、ちょんぼりすた、複数解析で2018-12-03導入が一致。
- confidence: `ANALYSIS_HIGH_EXACT_DATE_CROSSCHECKED`。

## identificationEvidence
- 後年機種DBで型式名 `SスーパーリノXZZ`、検定番号 `8S0711` を確認。
- 型式/検定番号は公的検定公示の直接照合まで今回完了していないため reliability は `SECONDARY_MACHINE_DATABASE` とする。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 99.0〜99.1% |
| 3 | 101.5% |
| 4 | 103.0% |
| 5 | 106.2% |
| 6 | 108.2% |

- 設定2は資料に99.0%丸めと99.09%精密値がある。丸め整合のためCONFLICT扱いしない。

### initialHitBySetting
#### ボーナス初当たり
| 設定 | ボーナス初当たり |
|---:|---:|
| 1 | 1/468.9 |
| 2 | 1/453.1 |
| 3 | 1/436.0 |
| 4 | 1/409.5 |
| 5 | 1/382.5 |
| 6 | 1/355.7 |

#### トマトチャンス
| 設定 | TC |
|---:|---:|
| 1 | 1/130.0 |
| 2 | 1/125.6 |
| 3 | 1/120.7 |
| 4 | 1/113.2 |
| 5 | 1/105.5 |
| 6 | 1/98.0 |

- 高確率状態中のボーナス確率は約1/9.9、ボーナスループ期待度約85%。

### baseGamesPer50
- canonical: **約38G/50枚**。
- 導入前業界/解析資料には約38.0〜38.5Gの表現あり。物差し値は約38Gで保持。

### netIncrease
- AT/ART純増は該当なし。リアルボーナス連チャン型。

### basicPayout
- BIG BONUS: **約105枚**。
- ボーナスは1種類を基本とする。

### ceiling
- **天井非搭載**。

## modeSpecificMinimumData
- 通常時はトマトチャンスから左リール3択成功でトマト揃い→ボーナスチャンス状態へ移行。
- ボーナスチャンス状態中は約1/9.9でボーナス、平均滞在約57G、ボーナスループ期待度約85%。
- ボーナス終了後は再びボーナスチャンス状態へ移行。
- リアルボーナスのみで構成され、有利区間を使用しないことを当時業界媒体が明示。

## resetBehavior
### settingChangeBehavior
- `CONFLICT_OR_UNVERIFIED_AFTER_RESEARCH`。
- 一撃の2018-11-28時点本機専用ページでは設定変更時の「状態」は **現在調査中**。
- ちょんぼりすた本機専用朝一表でも設定変更時の内部状態/ステージは **調査中**。
- 後年整理資料に設定変更で状態リセットとする記述系統も見られるが、当時高信頼解析の未確定表示と競合するため確定契約へ昇格しない。

### carryOverBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 「据え置き」を純電源OFF→ONと独立条件で内部状態まで直接定義した本機固有資料を固定できず。

### powerCycleBehavior
- `CONFLICT_OR_UNVERIFIED_AFTER_RESEARCH`。
- 一撃の2018-11-28時点では電源OFF→ON時の状態も **現在調査中**。
- 後年整理資料に引継ぎとする記述系統があるが、当時解析の未確定状態を優先して断定しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING_COUNTER`。
- 通常ゲーム数天井非搭載。
- ボーナスチャンス状態自体の設定変更/純電断時処理は上記の通り未確定。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後に通常状態/ボーナスチャンス状態のどちらから開始するかを当時資料で確定できず。

### stateAfterReset
- `CONFLICT_OR_UNVERIFIED_AFTER_RESEARCH`。
- ボーナスチャンス状態の設定変更/電断時契約について当時資料は調査中。

### advantageousSectionReset
- `NOT_APPLICABLE_NO_ADVANTAGEOUS_SECTION_USED`。
- グリーンべると当時記事が「リアルボーナスのみのため有利区間は存在していない」と明示。

### resetBenefits
- 朝一1回目のボーナスでは設定2以上確定の**疑似クレオフ音**が通常より発生しやすい。
- 設定3以上では朝一1回目の疑似クレオフ音が **約1/8** とする解析あり。
- これは設定変更確定時のみの恩恵と断定せず、朝一1回目の公開判別数値として保持。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一1回目ボーナスの疑似クレオフ音発生率上昇は設定推測要素だが、設定変更/据え置きを直接二分する確定判別とはしない。
- ガックン等の変更判別条件は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- conventionalCeiling: **NONE**
- resetCeilingShortening: **N/A**
- morningFirstBonusPseudoCreditOffSound: **設定3以上 約1/8（解析値）**
- settingChangeState: **UNVERIFIED / CONTEMPORARY_SOURCES_SAID_UNDER_RESEARCH**
- purePowerCycleState: **UNVERIFIED / CONTEMPORARY_SOURCES_SAID_UNDER_RESEARCH**
- advantageousSection: **NOT_USED**

## conflictsAndQualityNotes
- 設定2機械割99.0%と99.09%は丸め差。
- reset内部状態について、後年整理情報を当時解析の「調査中」より強い確定根拠として扱わない。競合/未確認を明示して保存。
- 朝一1回目の疑似クレオフ音は設定示唆の公開数値であり、単独で設定変更判別とはしない。

## missingFields
- 設定変更時のボーナスチャンス状態の確定処理。
- 据え置き時の内部状態契約。
- 純電源OFF→ON時のボーナスチャンス状態確定処理。
- ガックン/初期出目等の変更判別契約。
- 型式/検定番号の公的公示直接照合。

## sources
取得日: 2026-09-10

1. パチスロ必勝本 — スーパーリノXX 基本スペック — https://p.hisshobon.jp/vpage/2214/6 — 2018-12-03、天井非搭載、約38G/50枚、BIG約105枚、ループ約85%、有利区間非搭載 — reliability: ANALYSIS_HIGH
2. ちょんぼりすた — https://chonborista.com/slot/yamasa-slot/68225/ — 2018-12-03、設定別スペック、朝一設定変更/電源OFF ON表は内部状態・ステージ調査中、朝一1回目疑似クレオフ音 — reliability: ANALYSIS_HIGH
3. 一撃 — https://1geki.jp/slot/s_srxx/3/ — 2018-11-28更新、天井非搭載、設定変更時/電源OFF ON時の状態はいずれも現在調査中 — reliability: CONTEMPORARY_ANALYSIS_HIGH
4. グリーンべると — https://web-greenbelt.jp/00010850/ — 2018-10-26、山佐発表、リアルボーナスのみで有利区間なし、TC約1/130(設定1)、ループ率85% — reliability: CONTEMPORARY_INDUSTRY
5. みんスロ — https://minslo.com/スーパーリノxx/ — 2018-12-03、約38G/50枚、天井非搭載、設定別TC/トマト/ボーナス初当たり/機械割 — reliability: SECONDARY_DATABASE
6. pachinavi — https://pachinavi.net/machines/super-reno-xx/ — 型式 `SスーパーリノXZZ`、検定番号 `8S0711`、精密スペック — reliability: SECONDARY_MACHINE_DATABASE
7. 元プロMG パチスロブログ — https://www.pachislotblog.tokyo/superreno-xx-kaiseki/ — 2018-12-03、約38G/50枚、天井非搭載、設定別ボーナス初当たり/機械割 — reliability: ANALYSIS_SECONDARY
