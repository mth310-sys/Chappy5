# No.1243 戦コレ！［泰平女君］徳川家康

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 戦コレ！［泰平女君］徳川家康
- manufacturer: コナミアミューズメント
- releaseDateCanonical: 2018-11-19
- generation: 6号機
- systemType: AT / CZ / 擬似ボーナス / 周期管理
- formalModelName: `S戦コレ！徳川家康KE`
- certificationNumber: `8S0549`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- コナミ公式機種アーカイブは2018年11月稼働開始。
- K-Navi、HAZUSE、ちょんぼりすた、当時パチビー商品説明会記事は2018-11-19導入で一致。
- confidence: `OFFICIAL_MONTH_PLUS_INDUSTRY_AND_ANALYSIS_EXACT_DATE_CROSSCHECKED`。

## identificationEvidence
- HAZUSEは型式名 `S戦コレ！徳川家康KE`、検定番号 `8S0549`、メーカー コナミアミューズメント、6号機ATを掲載。
- コナミ公式は2018年機種アーカイブで本機を6号機ATとして掲載。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.4% |
| 3 | 100.1% |
| 4 | 102.4% |
| 5 | 105.4% |
| 6 | 112.0% |

- ちょんぼりすた、スロパチネット、2-9伝説、PiDEA Xの範囲で一致。

### initialHitBySetting
| 設定 | AT「戦国タイム」初当たり |
|---:|---:|
| 1 | 1/309.3 |
| 2 | 1/299.4 |
| 3 | 1/283.4 |
| 4 | 1/264.5 |
| 5 | 1/248.1 |
| 6 | 1/218.2 |

- ちょんぼりすた、スロパチネット、2-9伝説、PiDEA Xで照合。
- CZ等の詳細抽選は実機完全再現用のため収集対象外。

### baseGamesPer50
- **約48.9G/50枚**。
- ちょんぼりすた、PiDEA X等で一致。

### netIncrease
- AT「戦国タイム」: **約3.5枚/G**。
- コナミ公式機種分類、パチビー商品説明会、パチマガスロマガ、HAZUSE、ちょんぼりすた等で整合。

### basicPayout
- AT「戦国タイム」: **1セット30G**。
- 擬似ボーナス: コバンナビ **10 / 20 / 30回**の3種。

### ceiling
- **最大16周期**でAT当選。
- 1周期は平均約47G、16周期は平均約752G相当。
- 固定G数天井というより周期上限として管理する。

## modeSpecificMinimumData
- 通常時は1周期約47Gの「コレマップ」周期管理。
- 周期前半40GでカードレアリティとガチャLvを育成し、後半約7GでAT当否を判定。
- ATはシナリオ管理型。完全再現用の全コレマップ/シナリオ振り分けは収集対象外。

## resetBehavior
### settingChangeBehavior
- `CONFIRMED`。
- 設定変更時は **天井（周期進捗）リセット / 内部状態リセット / 非有利区間開始**。
- 液晶ステージは資料上「調査中」のため `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- `PARTIAL_CONFIRMED`。
- ちょんぼりすたには「据え置き台は季節も回転数もそのまま」とする実戦報告が掲載されている。
- ただしコメント由来であり、純電断と独立した全内部状態契約としては `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- `CONFIRMED`。
- 純電源OFF→ONでは **天井（周期進捗）引継ぎ / 内部状態引継ぎ**。
- 液晶ステージは資料上「調査中」。

### gameCounterReset
- 設定変更: **周期進捗リセット**。
- 純電源OFF→ON: **周期進捗引継ぎ**。
- 据え置き実戦報告: 季節・回転数をそのまま表示。

### ceilingAfterReset
- 設定変更後も通常と同じ **最大16周期**。
- リセット専用の短縮周期上限は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更時は周期進捗を初期化。
- リセット専用コレマップ振り分け・朝一専用モードの公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: **内部状態リセット（非有利区間）**。
- 純電源OFF→ON: **内部状態引継ぎ**。
- 初期状態の詳細振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `CONFIRMED_SETTING_CHANGE_TO_NON_ADVANTAGEOUS_SECTION`。
- 設定変更時は非有利区間開始とする機種固有解析を確認。
- 純電断時は内部状態引継ぎまで確認。区間ランプの表示契約は `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- **朝一リセット時の明確な恩恵は実践上見られなかった**との解析あり。
- リセット専用天井短縮・AT/CZ当選率優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `PARTIAL_CONFIRMED`。
- 据え置き時は季節・回転数がそのままとする実戦報告があり、表示状態が判別材料になり得る。
- 本機固有のガックン発生率・確定条件は検索語を変えた再探索でも固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- normalCycleCeiling: **16周期（平均約752G、1周期約47G）**。
- resetCycleCeiling: **16周期（短縮なし確認）**。
- settingChangeCycleProgress: **RESET**。
- powerCycleCycleProgress: **CARRYOVER**。
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`。
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- reelGakkunRate: `UNVERIFIED_AFTER_RESEARCH`。

## conflictsAndQualityNotes
- みんスロにはAT純増約3.8枚/G表記があるが、メーカー説明会・HAZUSE・パチマガスロマガ・ちょんぼりすた等の多数資料は約3.5枚/Gで一致。本DBcanonicalは **約3.5枚/G** とし、`CONFLICT_NET_INCREASE_3_5_VS_3_8_SINGLE_SECONDARY` を保持する。
- 朝一据え置きの季節/回転数表示はちょんぼりすた掲載コメント由来で、解析表の純電断契約より信頼度を一段下げて扱う。

## missingFields
- 設定変更/純電断後の液晶初期ステージ確定契約。
- 据え置きを純電断から独立させた全内部状態契約。
- 本機固有の有利区間ランプ表示契約。
- リセット後のコレマップ/内部状態の公開初期分布。
- ガックン発生率・確定条件。

## sources
取得日: 2026-09-10

1. コナミアミューズメント公式 機種アーカイブ — https://www.konami.com/amusement/psm/archive/ps/2018/sencolletokugawa/ — 2018年11月稼働、6号機AT — reliability: OFFICIAL
2. HAZUSE — https://hazuse.com/machine/pachislot/8S0549/ — 型式 `S戦コレ！徳川家康KE`、検定 `8S0549`、2018-11-19、純増約3.5枚/G — reliability: ANALYSIS_HIGH_DATABASE
3. K-Navi — https://p-kn.com/slot/3108/ — 2018-11-19導入 — reliability: ANALYSIS_HIGH_DATABASE
4. パチビー 商品説明会 — https://www.pachibee.jp/pparticles/view/1097 — 2018-09-26説明会、11/19導入予定、1セット30G、約3.5枚/G、周期概要 — reliability: CONTEMPORARY_INDUSTRY
5. ちょんぼりすた — https://chonborista.com/slot/konami-slot/66286/ — 設定別AT/機械割、48.9G/50枚、16周期、設定変更/電源OFF→ON比較、朝一恩恵、据え置き実戦報告 — reliability: ANALYSIS_HIGH
6. 一撃 天井・設定変更 — https://1geki.jp/slot/s_sen_tokugawa/3/ — 最大16周期、設定変更=天井/状態リセット・非有利区間、電源OFF→ON=天井/状態引継ぎ — reliability: OLD_ANALYSIS_HIGH
7. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/04/l.php — 1周期40G+後半、AT30G/約3.5枚/G、CZ/擬似ボーナス概要 — reliability: ANALYSIS_HIGH_ARCHIVE
8. PiDEA X — https://www.pidea.jp/articles/%E5%A4%A7%E6%89%8B%E6%B3%95%E4%BA%BA%E6%A9%9F%E6%A2%B0%E5%AF%BE%E7%AD%96%E8%AA%B2SH%40CK%E3%81%AE%E6%96%B0%E5%8F%B0%E8%AC%9B%E5%BA%A7%E3%80%8CS%E6%88%A6%E3%82%B3%E3%83%AC%E3%80%8D — 3.5枚/G、48.9G/50枚、AT初当たり1/309.3〜1/218.2、機械割97.5〜112.0% — reliability: INDUSTRY
9. 2-9伝説 — https://2-9densetsu.com/sencolletokugawa/ — 設定別機械割/AT初当たり、最大16周期 — reliability: ANALYSIS_SECONDARY
10. みんスロ — https://minslo.com/%E6%88%A6%E3%82%B3%E3%83%AC%E6%B3%B0%E5%B9%B3%E5%A5%B3%E5%90%9B%E5%BE%B3%E5%B7%9D%E5%AE%B6%E5%BA%B7/ — 純増約3.8枚/G表記（多数資料の3.5枚/GとCONFLICT） — reliability: ANALYSIS_SECONDARY
