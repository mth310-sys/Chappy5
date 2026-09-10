# No.1240 パチスロ戦国乙女TYPE-A+

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ戦国乙女TYPE-A+
- manufacturer: オリンピア
- releaseDateCanonical: 2018-11-05
- generation: 5.9号機
- systemType: A+RT / リアルボーナス / 技術介入
- formalModelName: `戦国乙女Type-A+／D4`
- certificationNumber: `7S0700`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、K-Navi、一撃、すろぱちくえすとが2018-11-05導入で一致。
- グリーンべると（2018-09-14）はオリンピア製新機種として発表し、納品を2018-11-04から予定と報道。ホール導入日の2018-11-05と整合する。
- confidence: `INDUSTRY_CONTEMPORARY_PLUS_MULTIPLE_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- メーカー: オリンピア。グリーンべると、HAZUSE、K-Navi等で一致。
- HAZUSEは型式名 `戦国乙女Type-A+／D4`、検定番号 `7S0700` を掲載。
- 中古実機DBでも同型式名を照合。
- 一部二次資料に `戦国乙女Type-A/D5` 表記があるが、これは2017年の前作TYPE-Aの型式と混同した可能性が高く、HAZUSEの機種固有検定番号付き記録をcanonicalとした。資料差はconflictsへ保持。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.5% |
| 5 | 104.0% |
| 6 | 108.1% |

- HAZUSE、一撃、すろぱちくえすと、5号機クロニクルで一致。
- 完全攻略時機械割として独立定義された高信頼数値は今回固定できず、通常掲載値のみ収録。

### initialHitBySetting
| 設定 | 真乙女BONUS | 乙女BONUS合成 | BIG合成 | REG | ボーナス合算 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/65536.0 | 1/337.8 | 1/336.1 | 1/455.1 | 1/193.3 |
| 2 | 1/32768.0 | 1/327.7 | 1/324.4 | 1/436.9 | 1/186.2 |
| 5 | 1/21845.3 | 1/321.3 | 1/316.6 | 1/425.6 | 1/181.5 |
| 6 | 1/16384.0 | 1/309.1 | 1/303.4 | 1/414.8 | 1/175.2 |

- HAZUSEの精密値、一撃・パチマガスロマガ・すろぱちくえすとの掲載値を照合。
- 乙女BONUSは白7/青7の2種類を含む合成値。

### baseGamesPer50
完全攻略と適当打ちを定義分離して保持。

| 設定 | 完全攻略 | 適当打ち |
|---:|---:|---:|
| 1 | 36.0G | 33.1G |
| 2 | 36.6G | 33.6G |
| 5 | 38.6G | 35.1G |
| 6 | 39.3G | 35.7G |

- 一撃が設定別に掲載。HAZUSEも完全攻略側の36.0〜39.3Gを掲載。
- すろぱちくえすとは代表値として約36G/50枚を掲載。

### netIncrease
- RT純増/Gについて比較可能な確定値は、機種名・RT・純増・増加枚数等へ検索語を変え、HAZUSE / 一撃 / パチマガスロマガ / K-Navi / P-WORLD / 当時業界記事を横断したが今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- RTは真乙女BONUS後100G、乙女BONUS後30G固定。

### basicPayout
- 真乙女BONUS: 最大416枚。
- 乙女BONUS: 獲得枚数変動型、平均357枚。400枚超も可能。
- REGULAR BONUS: 最大104枚をグリーンべると、HAZUSE、一撃等で確認。
- P-WORLDは最大103枚表記のため、`CONFLICT_REG_PAYOUT_MAX_104_VS_103` として保持。

### ceiling
- 天井: `NONE / NOT_EQUIPPED`。
- HAZUSE、一撃、PachiSeven等で一致。

## modeSpecificMinimumData
- A+RT。ボーナスは真乙女BONUS / 乙女BONUS / REGULAR BONUSの3系統。
- 真乙女BONUS後は100G、乙女BONUS後は30GのRTへ突入。REG後はRTなし。
- 通常時は表4種類 + 裏2種類の計6演出モードを遊技者が選択可能。
- 乙女BONUSとREGには獲得枚数へ関わる技術介入要素がある。
- 完全再現用の小役別同時当選や演出振り分けは本DBの物差し範囲外として収集しない。

## resetBehavior
### settingChangeBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- 一撃の当時専用「天井/設定変更」ページは、設定変更時のRT状態・液晶ステージをともに「現在調査中」としている。
- その後、機種名/型式/メーカーと「設定変更」「リセット」「朝一」「RT状態」「液晶ステージ」「初期状態」を組み替え、HAZUSE / パチマガスロマガ / K-Navi / P-WORLD / すろぱちくえすと / 回顧資料まで再探索したが、本機固有の確定契約を固定できず推測しない。

### carryOverBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 天井非搭載のため天井G数持越し論点はN/A。
- 据え置き時のRT状態・演出状態・成立済みボーナス等を、純電源OFF→ONと分離して示す本機固有公開契約は今回確認できず。

### powerCycleBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- 一撃の当時資料では電源OFF→ON時のRT状態・液晶ステージも「現在調査中」。
- 「電源OFF ON」「電断」「復帰」「RT状態」「据え置き」等へ検索語を変えて再探索したが、確定値へ昇格できる別系統資料を固定できなかった。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING_COUNTER`。
- 通常ゲーム数天井を搭載しないため、朝一客行動に影響する天井カウンタのリセット/引継ぎはN/A。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- リセット短縮天井なし。

### modeAfterReset
- 朝一専用内部モード / 設定変更時モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 遊技者選択の6演出モードが設定変更・純電断でどの選択状態になるかは、本機固有の確定資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- RT状態の設定変更時・電源OFF→ON時契約: `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用高確・初当たり優遇状態: `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- `N/A_NO_ADVANTAGEOUS_SECTION_DEPENDENT_AT_ART_GAMEPLAY_CONFIRMED`。
- 本機はリアルボーナス+固定RT主体で、朝一客行動用に保持すべき有利区間天井/モード/初当たり契約を今回確認していない。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井短縮、朝一専用高確、初当たり/CZ優遇など、本機固有の設定変更恩恵は再探索後も確認できず。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のリールガックン、液晶表示、初期出目、演出モード等を用いた設定変更/据え置き判別の確定条件・発生率は、検索語と資料系統を変えて再探索後も固定できず。
- 前作「戦国乙女TYPE-A」の設定変更情報は別型式のため自動転記していない。

### numericResetData
- normalCeiling: `NONE`。
- resetSpecificCeiling: `NOT_APPLICABLE`。
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`。
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- reelGakkunRate: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- REG最大獲得枚数: グリーンべると / HAZUSE / 一撃などは最大104枚、P-WORLDは最大103枚。平均化せず `CONFLICT_REG_PAYOUT_MAX_104_VS_103`。
- 型式名: HAZUSEは検定番号7S0700とともに `戦国乙女Type-A+／D4` を掲載。一部二次資料に `戦国乙女Type-A/D5` があるが、前作TYPE-Aとの混同可能性があるためcanonicalへ採用せず `CONFLICT_SECONDARY_MODEL_NAME_D4_VS_D5` として保持。

## missingFields
- RTの比較可能な純増/G。
- 完全攻略時機械割として独立定義された数値。
- 設定変更時のRT状態・液晶/演出モード契約。
- 据え置き時を純電断から分離した内部状態契約。
- 純電源OFF→ON時のRT状態・液晶/演出モード契約。
- 本機固有のリールガックン等、変更判別条件/発生率。
- リセット固有の公開朝一数値。

## sources
取得日: 2026-09-10

1. グリーンべると「平和が『TYPE-A+』シリーズ第2弾を発表」 — https://web-greenbelt.jp/00010751/
   - 2018-09-14掲載。オリンピア製、A+RT、合算1/193〜1/175、真乙女最大416枚、乙女BONUS、REG最大104枚、RT100G/30G、11月4日納品予定。
   - reliability: INDUSTRY_CONTEMPORARY
2. HAZUSE 基本スペック / 解析 — https://hazuse.com/machine/pachislot/7S0700/
   - 型式 `戦国乙女Type-A+／D4`、検定番号7S0700、2018-11-05、設定別BIG/REG/合算/機械割、36.0〜39.3G、天井なし、最大416/104枚。
   - reliability: ANALYSIS_HIGH_OLD_DATABASE
3. 一撃 機種トップ — https://1geki.jp/slot/s_otomea_p/
   - 2018-11-05、設定1/2/5/6、設定別合算・PAY、A+RT、最大416/104枚。
   - reliability: ANALYSIS_HIGH
4. 一撃「打ち方/レア役の停止型」 — https://1geki.jp/slot/s_otomea_p/4/
   - 50枚あたり完全攻略36.0/36.6/38.6/39.3G、適当打ち33.1/33.6/35.1/35.7G。
   - reliability: ANALYSIS_HIGH
5. 一撃「天井/設定変更」 — https://1geki.jp/slot/s_otomea_p/3/
   - 天井非搭載。設定変更時・電源OFF→ON時のRT状態/液晶ステージは当時「現在調査中」。
   - reliability: ANALYSIS_HIGH_CONTEMPORARY
6. パチマガスロマガ「ボーナス確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/141/h.php
   - BIG合成1/336〜1/303、REG1/455〜1/415、合算1/193〜1/175。
   - reliability: ANALYSIS_HIGH_ARCHIVE
7. パチマガスロマガ「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/141/c.php
   - 50枚あたりゲーム数項目、設定別小役資料。
   - reliability: ANALYSIS_HIGH_ARCHIVE
8. K-Navi — https://p-kn.com/slot/3102/
   - 2018-11-05、オリンピア、A+RT、乙女BONUS平均357枚、最大416枚、REG最大104枚、RT100G/30G。
   - reliability: ANALYSIS_HIGH
9. P-WORLD — https://www.p-world.co.jp/machine/database/8769
   - オリンピア、RT/技術介入/リアルボーナス、真乙女最大416枚、乙女平均357枚、REG最大103枚、RT100G/30G。
   - reliability: INDUSTRY_DATABASE
10. すろぱちくえすと — https://www.slopachi-quest.com/article/sengokuotome-typea-plus/
   - 2018-11-05、A+RT、約36G/50枚、設定別初当たり/機械割、真乙女最大416枚、乙女400枚超可、REG104枚。
   - reliability: ANALYSIS_HIGH
11. 中一商事 実機DB — https://www.nakaiti.com/html/sOlympia043.html
   - オリンピア、型式 `戦国乙女Type-A+/D4`、BIG/REG/合算、真乙女最大416枚。
   - reliability: SECONDARY_MACHINE_DATABASE
12. 5号機クロニクル「平和＆オリンピア」 — https://5goki.com/heiwa-olympia
   - TYPE-A+の機械割97.5/99.5/104.0/108.1%を照合。
   - reliability: RETROSPECTIVE_DATABASE
