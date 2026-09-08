machineName: ジャックポット トロピカルバージョン2
manufacturer: 岡崎産業
releaseDate: 2017-02-06
recordNumber: 1048
generation: 5号機 / 5.5号機期
systemType: ノーマル / Aタイプ / 完全告知
formalModelName: ジャックポットTPV2／J1
certificationNumber: 6S0723
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_BASE_UNVERIFIED

## identity
- HAZUSEで導入開始日2017-02-06、メーカー岡崎産業、型式名 `ジャックポットTPV2／J1`、検定番号 `6S0723` を直接確認。
- P-WORLDもメーカー岡崎産業、5号機ノーマル、型式名 `ジャックポットTPV2／J1`、検定番号 `6S0723`、導入開始2017年02月で一致。
- パチマガスロマガも岡崎産業・2017年2月として掲載。
- 2006年の初代 `ジャックポット・トロピカルバージョン` および2007年の30Φ版とは別機種として分離。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY_AND_RELEASE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.35% |
| 2 | 98.30% |
| 3 | 99.88% |
| 4 | 104.10% |
| 5 | 107.16% |
| 6 | 112.17% |

- HAZUSE精密値をcanonicalとする。
- 後年資料では96.4 / 98.3 / 99.9 / 104.1 / 107.2 / 112.2%の丸め値が見られるため、競合ではなく丸め精度差として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
| 設定 | BIG |
|---:|---:|
| 1 | 1/303.41 |
| 2 | 1/293.88 |
| 3 | 1/284.94 |
| 4 | 1/268.59 |
| 5 | 1/255.00 |
| 6 | 1/234.06 |

### REG
| 設定 | REG |
|---:|---:|
| 1 | 1/504.12 |
| 2 | 1/474.90 |
| 3 | 1/445.82 |
| 4 | 1/407.06 |
| 5 | 1/374.49 |
| 6 | 1/336.08 |

### ボーナス合算
| 設定 | 合算 |
|---:|---:|
| 1 | 1/189.41 |
| 2 | 1/181.54 |
| 3 | 1/173.84 |
| 4 | 1/161.82 |
| 5 | 1/151.70 |
| 6 | 1/137.97 |

- HAZUSEの設定別精密表をcanonicalとする。
- 一部後年記事にBIG設定3〜5で大きく異なる丸め表があるが、HAZUSEの精密値・合算との内部整合性および当時DBを優先し、その後年表は転記誤り疑いとしてdataQualityNotesへ分離する。
reliability: ANALYSIS_HIGH

## baseGamesPer50
- `UNVERIFIED_AFTER_RESEARCH`。
- `50枚 / 1000円 / 千円 / コイン持ち / ベース / ゲーム数` と機種名・正式型式名を組み替え、HAZUSE、P-WORLD、パチマガスロマガ、後年解析、古いDBを横断したが、比較可能な直接数値を固定できなかった。
- 小役確率からの逆算は推定になるため行わない。
reliability: UNVERIFIED

## netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`。AT/ART/RTを主出玉契機として搭載せず、ボーナスのみで出玉を増やすノーマルタイプ。

## basicPayout
- BIG BONUS: 約312枚。345枚を超える払い出しで終了。
- REG BONUS: 約130枚。135枚を超える払い出しで終了。
- HAZUSEとP-WORLDで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 完全告知ノーマルAタイプ。
- ハイビスカス点灯でボーナス当選濃厚。ドルフィンチャンス、7セグ演出を搭載。
- 天井機能は非搭載。
- 通常時ゲーム数モード、周期CZ、AT/ART初当たり管理は `NOT_APPLICABLE`。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCH_EXHAUSTED_NO_PUBLIC_RESET_SPECIFIC_MACRO_BENEFIT_CONFIRMED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 本機は天井・周期・AT/ART/CZ・ゲーム数解除モードを持たないノーマルAタイプのため、これらの設定変更RESET契約は `NOT_APPLICABLE`。
- 機種名、型式 `ジャックポットTPV2/J1`、岡崎産業、設定変更、リセット、朝一、据え置き、電源OFF ON、ガックンを組み替えて再探索したが、本機固有の朝一専用高確・専用モード・短縮天井・主要初当たり優遇は確認できなかった。
reliability: SYSTEM_STRUCTURE_CONFIRMED_MULTI_SOURCE; RESEARCH_EXHAUSTED_FOR_MACHINE_SPECIFIC_RESET_PHYSICAL_BEHAVIOR

### carryOverBehavior
- 据え置きで引き継ぐべき天井ゲーム数、周期、AT/ART/CZモードは `NOT_APPLICABLE`。
- ホール経営/朝一客AIへ影響する本機固有の据え置き恩恵・不利は確認されない。
reliability: SYSTEM_STRUCTURE_CONFIRMED_MULTI_SOURCE

### powerCycleBehavior
- 純電源OFF→ONで比較対象となる天井ゲーム数、周期、通常時ゲーム数モード、AT/ART状態は `NOT_APPLICABLE`。
- ボーナス成立中など特殊局面の復帰処理は、本機固有の公開直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。実機完全再現用の推測は行わない。
reliability: SYSTEM_STRUCTURE_CONFIRMED_FOR_MACRO_FIELDS; UNVERIFIED_FOR_SPECIAL_TRANSIENT_STATE

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- 設定変更専用短縮天井も非該当。

### modeAfterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED`。
- 朝一専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- AT/ART/CZ用の通常/高確等、朝一客行動へ影響する本機固有状態再抽選は `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井短縮、朝一高確、設定変更専用モード、公開された設定変更専用初当たり優遇数値は確認されない。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日天井進捗消失等の不利は、天井非搭載のため `NOT_APPLICABLE`。

### resetDetection
- 本機固有のガックン、初期出目、ハイビスカス/7セグ表示等による設定変更確定・濃厚判別は、表記揺れ・正式型式・メーカー名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 変更判別` を組み替えて再探索しても直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 岡崎産業の他機種や一般的5号機筐体の挙動を本機へ転用しない。

### numericResetData
- 設定変更時短縮天井: `NOT_APPLICABLE`。
- 設定変更時モード振り分け: `NOT_APPLICABLE`。
- 朝一特定G以内当選率 / 専用恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- HAZUSEの設定別BIGは303.41 / 293.88 / 284.94 / 268.59 / 255.00 / 234.06。REGは504.12 / 474.90 / 445.82 / 407.06 / 374.49 / 336.08。
- 後年の楽スロ記事にはBIGを303 / 294 / 269 / 255 / 234 / 226とする表があり、設定3以降でHAZUSE精密値と大きく食い違う。合算値との整合も弱いため、平均せず `CONFLICT_SOURCE_TABLE_SUSPECTED_TRANSCRIPTION_ERROR` として保持しcanonicalには採用しない。
- 機械割の96.35〜112.17%と後年丸め96.4〜112.2%は丸め精度差。
- 50枚ベースは複数検索系統で直接値を確認できずUNVERIFIED。

## conflicts
- BIG probability secondary-table conflict: HAZUSE精密値 vs 後年楽スロ一部設定値。canonicalはHAZUSE。後年表は転記誤り疑いとして保持し平均しない。

## missingFields
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific physical reset detection contract: `NONE_CONFIRMED_AFTER_RESEARCH`。
- special transient-state power-cycle behavior: `UNVERIFIED_AFTER_RESEARCH`。
- 実機完全再現用詳細抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- ANALYSIS_DB / HAZUSE: https://hazuse.com/machine/pachislot/6S0723/
- INDUSTRY_DATABASE / P-WORLD: https://www.p-world.co.jp/machine/database/8263
- ANALYSIS_ARCHIVE / パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/77/okazaki_slot_77.php
- RETROSPECTIVE_DB / 5号機クロニクル 岡崎産業: https://5goki.com/okazaki
- SECONDARY_ANALYSIS_CONFLICT / 楽スロ: https://rakuslo.com/jackpot_tropical2-setteisamatome.html
- RETROSPECTIVE_LIST / スロリスクタイム: https://pachisuro100.com/itiran/

## retrievalHistory
- identity: `ジャックポットトロピカルバージョン2 / ジャックポット トロピカルバージョン2 / ジャックポットTPV2/J1 / 岡崎産業 / 型式 / 検定番号 / 6S0723 / 導入日`。
- performance: `機械割 / BIG / REG / 合算 / 312枚 / 130枚 / 50枚 / 1000円 / 千円 / コイン持ち / ベース`。
- reset: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 変更判別`。
- 2006年初代、2007年30Φ版を別機種として除外した。
