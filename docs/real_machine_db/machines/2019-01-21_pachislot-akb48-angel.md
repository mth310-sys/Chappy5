# No.1257 ぱちスロAKB48 エンジェル

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL`
- machineName: ぱちスロAKB48 エンジェル
- manufacturer: 京楽産業． / KYORAKU
- releaseDateCanonical: 2019-01-21
- generation: 5.9号機
- systemType: ノーマル / Aタイプ / 技術介入
- formalModelNameCanonical: `パチスロAKB48エンジェルMA`
- certificationNumber: `7S1325`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## releaseDateEvidence
- グリーンべると/P-WORLD業界ニュースが全国導入2019-01-21と明記。
- HAZUSE、すろぱちくえすと、スロパチネット、2019年1月新台一覧も2019-01-21で一致。
- confidence: `INDUSTRY + MACHINE_DATABASE_HIGH + ANALYSIS_CROSSCHECKED`。

## performanceCore
### payoutRateBySetting
市場値（チェリー・スイカ取得率80%）:
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.6% |
| 5 | 103.3% |
| 6 | 106.8% |

完全攻略時:
| 設定 | 機械割 |
|---:|---:|
| 1 | 99.5% |
| 2 | 100.3% |
| 5 | 105.1% |
| 6 | 108.9% |

### initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/364.1 | 1/394.8 | 1/189.4 |
| 2 | 1/362.1 | 1/387.8 | 1/187.2 |
| 5 | 1/352.3 | 1/352.3 | 1/176.2 |
| 6 | 1/339.6 | 1/339.6 | 1/169.8 |

### baseGamesPer50
設定別解析値:
| 設定 | 50枚あたり |
|---:|---:|
| 1 | 約36.5G |
| 2 | 約36.9G |
| 5 | 約39.8G |
| 6 | 約41.9G |

- 機種概要資料には丸め値として約36G/50枚表記もあるため、設定別値をcanonicalとして定義分離。

### netIncrease / basicPayout
- netIncrease: `NOT_APPLICABLE_NORMAL_TYPE`。
- BIG BONUS: 最大402枚（449枚超払い出しで終了。技術介入成功時の最大獲得）。
- REGULAR BONUS: 最大103枚（104枚超払い出しで終了。技術介入で最大獲得）。
- RT/ART非搭載。ボーナスのみで出玉を増やすノーマルタイプ。

## modeSpecificMinimumData
- 通常時は遊技者が48モード / ミュージックモード / トロピカルモードから演出モードを選択可能。
- これは内部AT/ARTモードではなく演出選択なので、resetBehaviorの内部モードと混同しない。
- 天井非搭載。

## resetBehavior
### settingChangeBehavior
- 朝一1回目のボーナス終了画面に設定変更専用の振り分け差が存在することを確認。
- サイン入り終了画面: 設定変更時75%、サインなし25%。
- ただし設定変更時のボーナス内部成立状態、初期出目、演出モード初期化等の本機固有直接契約は、表記揺れ/型式/メーカー/設定変更/リセット/朝一等で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 朝一1回目のボーナス終了画面のサイン入り振り分けは据え置き時50%、サインなし50%。
- 据え置き時のボーナス内部成立状態、初期出目、演出モード等を網羅する独立契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純電源OFF→ONだけを独立条件として示した本機固有の内部状態/初期出目/演出モード契約は、複数検索語・資料系統で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きと純電断を同義扱いしない。

### gameCounterReset
- 通常ゲーム数天井非搭載につき `NOT_APPLICABLE_NORMAL_GAME_CEILING`。

### ceilingAfterReset
- 天井非搭載。設定変更による短縮天井も `NOT_APPLICABLE`。

### modeAfterReset
- AT/ARTの内部モードは `NOT_APPLICABLE_AS_PUBLISHED_NORMAL_GAME_STRUCTURE`。
- 48/ミュージック/トロピカルは遊技者選択の演出モードであり、朝一内部モードとして扱わない。
- 設定変更時の演出モード初期選択状態は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更/据え置き/純電断におけるボーナス内部成立状態等の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機ノーマルAタイプでRT/ART非搭載。公開ゲーム性上、有利区間を出玉契機として運用しないため `NOT_APPLICABLE_TO_PUBLISHED_NORMAL_GAME_STRUCTURE`。

### resetBenefits
- 天井短縮や朝一専用当選優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一方、設定変更後は朝一1回目ボーナス終了画面でサイン入りが75%となり、据え置き50%より変更判別材料として優遇される。

### resetPenalties
- 設定変更固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一1回目のボーナス終了画面にサイン入りが出現した場合、設定変更の可能性が上昇する。
- サイン入りでも据え置き時50%で出現するため、単独で設定変更確定とはしない。
- 本機固有のリールガックン発生条件/発生率については「ガックン」「設定変更」「リセット」「据え置き」等で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- morningFirstBonusEndScreenSigned_settingChange: `75%`
- morningFirstBonusEndScreenUnsigned_settingChange: `25%`
- morningFirstBonusEndScreenSigned_carryOver: `50%`
- morningFirstBonusEndScreenUnsigned_carryOver: `50%`
- normalCeiling: `NONE`
- resetShortenedCeiling: `NONE / NOT_APPLICABLE`
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## conflictsAndQualityNotes
- BIG/REG/合算、機械割はHAZUSE、P-WORLD、パチマガスロマガ、複数解析で一致。
- 50枚ベースは機種概要の約36Gと設定別36.5〜41.9Gがあるが、これは設定差を丸めた概要値と詳細値の定義差でありCONFLICTとはしない。
- BIG/REGの「最大402枚/103枚」と払い出し終了条件449枚超/104枚超を混同しない。
- 朝一終了画面の設定変更/据え置き振り分けは本機固有の公開数値として保持。設定示唆の通常終了画面振り分け等、実機完全再現用詳細は対象外。
- 2019-01-08〜01-20境界を2019年1月新台一覧と導入日検索で再監査し、本線へ追加すべき独立パチスロ機は今回固定できず、2019-01-21群へ進行。

## missingFields
- 純電源OFF→ONのみの場合の本機固有挙動。
- 設定変更/据え置き時の内部成立状態・初期出目の直接契約。
- 本機固有ガックン発生条件/発生率。

## sources
取得日: 2026-09-11

1. P-WORLD パチンコ業界ニュース / グリーンべると — https://news.p-world.co.jp/articles/10671/greenbelt — 2018-12-27、シリーズ初Aタイプ、BIG最大402枚、全国導入2019-01-21 — reliability: `INDUSTRY`
2. HAZUSE — https://hazuse.com/machine/pachislot/7S1325/ — 型式 `パチスロAKB48エンジェルMA`、検定番号7S1325、導入2019-01-21、設定別ボーナス確率、市場値/完全攻略機械割 — reliability: `MACHINE_DATABASE_HIGH`
3. P-WORLD — https://www.p-world.co.jp/machine/database/8829 — BIG/REG/合算、BIG最大402枚、REG最大103枚、ボーナス主体ノーマル — reliability: `MACHINE_DATABASE_HIGH`
4. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/10/a.php — 5.9号機ノーマル、BIG約402枚/REG約103枚、演出3モード — reliability: `MAJOR_ANALYSIS_HIGH`
5. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/10/h-1.php — 設定別BIG/REG/合算、市場値/完全攻略機械割 — reliability: `MAJOR_ANALYSIS_HIGH`
6. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/10/c-1.php — 設定別50枚あたり36.5〜41.9G — reliability: `MAJOR_ANALYSIS_HIGH`
7. すろぱちくえすと — https://www.slopachi-quest.com/article/akb48-angel-settei/ — 朝一1回目サイン入り終了画面: 設定変更75% / 据え置き50%、設定別50枚ベース — reliability: `ANALYSIS_MACHINE_SPECIFIC`
8. スロパチネット — https://slopachi-net.com/post-3253 — 2019-01-21、型式、Aタイプ、天井非搭載、設定別スペック — reliability: `ANALYSIS_SECONDARY`
9. すろぱちくえすと 2019年1月新台一覧 — https://www.slopachi-quest.com/article/erunote-shindai-2019-1/ — 1/21群: AKB48エンジェル/BASARA HEROES PARTY/フィーバークィーンII/島漢25・30Φ/ゲッターロボ — reliability: `INDUSTRY_SECONDARY`
