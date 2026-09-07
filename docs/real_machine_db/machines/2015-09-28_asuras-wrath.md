# アスラズ ラース

machineName: アスラズ ラース
manufacturer: エンターライズ / Enterrise
releaseDate: 2015-09-28
releaseDatePrecision: exact_nationwide_start_day_multi_source
generation: 5号機
systemType: A+ART / ST型ART + 疑似ボーナス + CZ
formalModelName: アスラズラースZS
inspectionNumber: 5S0457
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_UNVERIFIED_RESET_CONTRACTS

## identity

- canonical導入日: **2015-09-28**。
- メーカー: **エンターライズ**。
- 型式名: **アスラズラースZS**。
- 検定番号: **5S0457**。
- 5号機のA+ART機。リアルボーナス「ASURA BONUS」と、疑似ボーナス型RUSHを中心とするST型ARTを搭載。
- HAZUSE / K-Naviで導入日が一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY_AND_EXACT_RELEASE_DATE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.2% |
| 3 | 100.8% |
| 4 | 103.2% |
| 5 | 108.2% |
| 6 | 112.2% |

- HAZUSEとグリパチWikiで上記系列が一致。
- すろぱちくえすとは設定1のみ97.1%とするため、設定1は `CONFLICT_97_3_VS_97_1` を保持し、平均しない。
- canonicalは複数一致する97.3%系列。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING1_CONFLICT

## initialHitBySetting

| 設定 | ASURA BONUS | RUSH / ART初当たり |
|---:|---:|---:|
| 1 | 1/461.5 | 1/147.5 |
| 2 | 1/455.1 | 1/140.1 |
| 3 | 1/448.9 | 1/118.4 |
| 4 | 1/439.8 | 1/110.2 |
| 5 | 1/425.6 | 1/96.9 |
| 6 | 1/409.6 | 1/85.0 |

- HAZUSEは右列を「ART初当たり」、グリパチWikiは「RUSH初当り」として同一系列を掲載。
- すろぱちくえすとの「疑似ボーナス」1/255.3～1/200.5はART中を含む可能性を同ページが注記しており、右列とは母集団定義が異なる可能性が高い。平均・統合せず `DEFINITION_DIFFERENCE` として分離。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CANONICAL_SERIES

## baseGamesPer50

- パチマガスロマガ掲載レンジ: **36.02～38.48G/50枚**。
- HAZUSE: **約37G/50枚**。
- すろぱちくえすと: **約36～39G/50枚**。
- canonical comparison range: **36.02～38.48G/50枚**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- RUSH / ART単体純増: **約1.5枚/G**。
- P-WORLD、HAZUSE等で一致。
- グリパチWikiの**約2.1枚/G（ボーナス込み）**は別定義のため、ART単体純増と平均しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_SEPARATION

## basicPayout

- ASURA BONUS: **200枚固定**。
- RUSH基本ゲーム数:
  - 苛RUSH: **15G**
  - 怒級RUSH: **30G**
  - 超怒級RUSH: **50G**
  - 転輪王RUSH: **50G**
- 七星天BATTLE: **30G**。
- P-WORLD / HAZUSE / K-Naviで主要構成を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- CZ「心願の儀」: 10G / 20G / 無限のゲーム数構成がある。ART当選期待度は約40%とする資料あり。
- 通常天井: **ボーナス・RUSH/ART間999G**。当時資料では**999G+前兆**表記もあり、到達後はRUSH/ART当選濃厚。
- 一部資料は「ボーナス・AT間」と表記するが、本DBでは本機のシステム分類に合わせてRUSH/ART間の天井として整理する。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_UNVERIFIED_CHANGE_CONTRACTS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 機種名「アスラズ ラース / アスラズラース / ASURA'S WRATH」、型式名、メーカー名と「設定変更 / リセット / 朝一 / 天井 / 据え置き / 宵越し / 電源OFF ON / 高確 / 怒りポイント / 何様ゲージ」を組み替え、当時解析・古いDB・回顧資料まで再探索した。
- 設定変更時に、天井ゲーム数・内部状態・各蓄積要素がどの単位でRESET/CARRYOVERするかを直接比較する高信頼の本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常天井999Gの存在から「設定変更なら0Gから再カウント」とは推測しない。

### carryOverBehavior

- 本機固有の据え置き契約を直接明示する高信頼資料は固定できず **UNVERIFIED_AFTER_RESEARCH**。
- K-Naviの実戦投稿には「宵越し天井狙い」の運用例があるが、ユーザー実戦記であり仕様確定資料としては採用しない。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更を伴わない純電源OFF→ON時の天井G、内部状態、怒りポイント/何様ゲージ等の保持契約を直接比較する資料を固定できなかった。
- 据え置き契約を純電断へ、または純電断契約を据え置きへ自動転記しない。

### gameCounterReset

- 設定変更: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常天井: **999G+前兆相当**。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更時に通常天井カウンタがRESET/CARRYOVERのどちらかは直接契約を固定できていないため `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset

- 朝一専用ゲーム数モード、設定変更専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 何様ゲージ等の蓄積要素を通常のゲーム数解除モードと同義扱いしない。

### stateAfterReset

- 怒りポイント、何様ゲージ、高確等について、設定変更/据え置き/純電断を直接分離した公開契約は **UNVERIFIED_AFTER_RESEARCH**。
- 前後作品・同メーカー他機の挙動は流用していない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時のみの短縮天井、朝一高確確定、専用モード優遇など: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時のみの主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のリールガックン確定契約・発生率、液晶/表示による変更確定判別は、再探索後も固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一の一時的な高確挙動等を設定変更確定材料として格上げしない。

### numericResetData

- 設定変更時のモード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の内部状態振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一特定G以内の設定変更専用当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts

1. `CONFLICT_SETTING1_PAYOUT_97_3_VS_97_1`
   - HAZUSE / グリパチWiki: 設定1 97.3%。
   - すろぱちくえすと: 設定1 97.1%。
   - 平均せず、複数一致する97.3%をcanonicalとする。
2. `DEFINITION_DIFFERENCE_RUSH_ART_INITIAL_VS_PSEUDO_BONUS_SERIES`
   - HAZUSE / グリパチWiki: RUSH/ART初当たり 1/147.5～1/85.0。
   - すろぱちくえすと: 疑似ボーナス 1/255.3～1/200.5。ART中を含む可能性の注記があり、母集団を同一視しない。
3. `DEFINITION_DIFFERENCE_ART_NET_1_5_VS_BONUS_INCLUDED_2_1`
   - ART単体: 約1.5枚/G。
   - ボーナス込み: 約2.1枚/G。
   - 同じ純増定義ではないためCONFLICT平均しない。

## missingFields

- 設定変更時の天井カウンタRESET/CARRYOVER契約: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井/状態/蓄積契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の天井/状態/蓄積契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用モード/内部状態振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン/表示による設定変更確定契約: `UNVERIFIED_AFTER_RESEARCH`。

## boundaryAudit

- 2015-09-28群は本機をNo.915として処理後も **OPEN**。
- 処理済み: No.914「パチスロ無双OROCHI」、No.915「アスラズ ラース」。
- 同日群再監査で、SANKYO **「パチスロ マクロスフロンティア2 Bonus Live ver.」**を未処理候補として具体日固定。
  - SANKYO公式オンラインミュージアム: 2015年9月 / A+ART。
  - パチセブン: 2015-09-28導入。
  - グリーンべると/P-WORLD業界記事: 最速納品2015-09-27。
- よって09-28群は閉じず、次回は同機を処理してから全メーカー横断で再監査する。

## sources — retrieved 2026-09-07

### identity / performanceCore
- HAZUSE: https://hazuse.com/machine/pachislot/5S0457/
- HAZUSE 基本情報: https://hazuse.com/machine/pachislot/5S0457/genre/201/
- K-Navi: https://p-kn.com/slot/2351/
- P-WORLD: https://www.p-world.co.jp/machine/database/7829
- パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/11/c.php
- すろぱちくえすと: https://www.slopachi-quest.com/article/asuras-wrath/
- グリパチWiki: https://guripachi.game-info.wiki/
- 当時新台まとめ: https://slotnews777.blog.fc2.com/blog-entry-2348.html
- 天井整理: https://slotnews777.blog.fc2.com/blog-entry-2482.html

### next candidate / 09-28 group audit
- SANKYO公式「パチスロ マクロスフロンティア2 Bonus Live ver.」: https://www.sankyo-fever.jp/collection/619/
- パチセブン: https://pachiseven.jp/machines/4580/cutout/124
- グリーンべると/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/7774/greenbelt
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/sankyo_slot_37.php

## sourceQuality / researchNotes

- resetBehavior欠損は初回検索で終了せず、表記揺れ・型式名・メーカー名・設定変更/リセット/朝一/据え置き/宵越し/電断/天井/高確/蓄積要素を組み替えて再探索後にのみUNVERIFIEDとした。
- K-Naviの宵越し実戦投稿は補助痕跡としてのみ扱い、仕様確定根拠へ格上げしていない。
- 同一名称のスマホゲーム「ASURA'S WRATH」等は除外。

## confidence

- identity/formalModel/inspectionNumber: ANALYSIS_HIGH
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT
- initialHit: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease/basicPayout: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: UNVERIFIED_AFTER_RESEARCH
