# ミラクルジャグラー

machineName: ミラクルジャグラー
aliases: ミラクルジャグラーK / Miracle Juggler
manufacturer: 北電子
formalModelName: ミラクルジャグラーK
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-11-21
releaseDateStatus: EXACT_HALL_INTRODUCTION_ANALYSIS_CROSSCHECKED

generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_BEHAVIOR_WITH_DIRECT_GAKKUN_DETECTION

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「赤ドン雅」を確認して開始。
- 開始時正本は recordCount 620 / chronologicalFrontier 2011-11-21。INDEXは旧19件地点のためREADME規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定どおり2011-11-21同日群を継続。
- GitHub code searchで「ミラクルジャグラー」未検出を確認し、未登録と判断。
- 北電子公式は2011年機として現存し、型式名は公式検定ページで「ミラクルジャグラーK」を確認。アタリ7は導入日2011-11-21を明記。北電子の2011年9月発表を報じた業界記事とも時系列整合。

## payoutRateBySetting

### 北電子公式・工場データ予測値

| 設定 | 出玉率 |
|---|---:|
| 1 | 95.7% |
| 2 | 97.5% |
| 3 | 99.0% |
| 4 | 101.2% |
| 5 | 103.9% |
| 6 | 107.9% |

- 北電子公式製品ページ、アタリ7、K-Navi、ジャグラー専門解析で一致。
confidence: OFFICIAL_CROSSCHECKED

### 技術介入条件別解析値

後年の攻略整理では、チェリー狙い時を **96.16 / 98.07 / 99.95 / 102.04 / 105.02 / 109.42%** とする系列を確認。メーカー公式値と同一条件ではないため、数値競合として平均化せず **DEFINITION_DIFFERENCE_PLAY_METHOD** として分離保持する。完全小役奪取を含む別攻略条件値も存在し、公式工場予測値へ混ぜない。
confidence: ANALYSIS_SINGLE_FOR_TECHNICAL_PLAY_SERIES

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/292.6 | 1/468.1 | 1/180.1 |
| 2 | 1/282.5 | 1/431.2 | 1/170.7 |
| 3 | 1/273.1 | 1/399.6 | 1/162.2 |
| 4 | 1/268.6 | 1/341.3 | 1/150.3 |
| 5 | 1/256.0 | 1/309.1 | 1/140.0 |
| 6 | 1/230.8 | 1/356.2 | 1/140.0 |

- 北電子公式、アタリ7、K-Naviで一致。
- 設定6のREGが設定4・5より重い非単調スペックである点も同系列値から確認できる。
confidence: OFFICIAL_CROSSCHECKED

## baseGamesPer50

定義別に分離して保持:

### 後年解析の通常時1000円あたり目安
| 設定 | 1000円あたり |
|---|---:|
| 1 | 35.47G |
| 2 | 35.53G |
| 3 | 35.61G |
| 4 | 35.67G |
| 5 | 35.75G |
| 6 | 36.68G |

### チェリー狙い時
| 設定 | 50枚あたり |
|---|---:|
| 1 | 36.14G |
| 2 | 36.14G |
| 3 | 36.15G |
| 4 | 36.16G |
| 5 | 36.20G |
| 6 | 37.39G |

### 完全小役獲得時
| 設定 | 50枚あたり |
|---|---:|
| 1 | 36.32G |
| 2 | 36.32G |
| 3 | 36.33G |
| 4 | 36.33G |
| 5 | 36.38G |
| 6 | 37.58G |

- 35.47～36.68G系列と36.14～37.39G/36.32～37.58G系列は遊技方法・算出条件が異なるため平均化しない。
confidence: ANALYSIS_SINGLE_BY_DEFINITION

## netIncrease

NOT_APPLICABLE。AT/ART/RTで継続的に増加させる方式ではないノーマルタイプ。

## basicPayout

- BIG: **約312枚**（345枚を超える払い出しで終了）。
- REG/BONUS GAME: **約104枚**（105枚を超える払い出しで終了）。
- P-WORLDとジャグラー専門解析で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 完全告知ノーマルタイプ。GOGO!ランプ点灯でボーナス告知。
- 当時業界発表ではボーナス成立時の1/4が先告知、3/4が後告知。
- 通常ゲーム数天井、規定ゲーム数当選、ART/ATモードは確認されず、物差しDB上のゲーム数天井項目はNOT_APPLICABLE。
- BIG成立時の一部でリール逆回転、フリーズ、リールフラッシュ等のプレミア演出を搭載するが、実機完全再現用の演出振り分け詳細は収集対象外。

## resetBehavior — v0.7

settingChangeBehavior: **SETTING_CHANGE_CAUSES_FIRST_GAME_REEL_GAKKUN_IF_STORE_DOES_NOT_SPIN_AFTER_CHANGE / OTHER_INTERNAL_EFFECTS_NOT_APPLICABLE_OR_UNVERIFIED**。本機固有の設定判別資料で、設定変更後に店側が回していなければ朝一1G目にリールがガクッと震えて始動すると明記。ノーマル機のため天井・長期AT/ARTモードのリセット処理は該当しない。ボーナス抽選確率以外の設定変更専用内部優遇は確認できず。

carryOverBehavior: **NO_GAME_COUNT_CEILING_OR_LONG_TERM_MODE_TO_CARRY / OTHER_MACHINE_SPECIFIC_POWER_STATE_UNVERIFIED_AFTER_RESEARCH**。通常ゲーム数天井・規定G数モードを確認できないため、それらの据え置き引継ぎ比較はNOT_APPLICABLE。設定据え置き時の朝一リール初動を設定変更時と対照させる実戦判別は存在するが、店側の事前回転等で判別不能化できるため絶対判別ではない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみで、設定変更時と同じガックンが発生するか否かを本機固有の直接資料で安全に確定できず。後継ミラクル系や他ジャグラーの一般則を流用しない。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。通常ゲーム数天井・規定ゲーム数当選を確認できず。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井も確認されず。

modeAfterReset: **NOT_APPLICABLE_FOR_LONG_TERM_GAME_COUNT_MODE / NO_RESET_SPECIFIC_MODE_CONFIRMED_AFTER_RESEARCH**。AT/ART型の長期モードは非搭載。設定変更専用の朝一モード振り分け公開値は確認できず。

stateAfterReset: **NO_RESET_SPECIFIC_INTERNAL_STATE_CONFIRMED_AFTER_RESEARCH**。朝一高確等の内部状態再抽選・保証は確認できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。短縮天井、朝一高確保証、設定変更時専用当選率等は確認されず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等の構造自体が確認されない。

resetDetection: **GAKKUN_CHECK_SUPPORTED_MACHINE_SPECIFIC_ANALYSIS_WITH_CAVEATS**。設定変更後に店側が回していなければ朝一1G目のリールガックンが変更推測材料になる。ただし資料自体が、毎ゲームガックンする個体や微妙なガックンもあり過信禁物と注意している。さらに店側が設定変更後に1G回した場合は条件が崩れるため、確定判別として扱わない。

numericResetData:
- 設定変更後・店側事前回転なし: 朝一1G目にリールガックンとの解析
- 設定変更専用短縮天井: NOT_APPLICABLE / NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更時モード振り分け: NOT_APPLICABLE_OR_NONE_CONFIRMED
- 朝一高確保証率: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_SINGLE_MACHINE_SPECIFIC_FOR_GAKKUN / NOT_APPLICABLE_FOR_CEILING_AND_ADVANTAGEOUS_SECTION / UNVERIFIED_AFTER_RESEARCH_FOR_PURE_POWER_CYCLE

## conflicts

1. **出玉率の定義差**
   - 北電子公式工場データ予測値: 95.7 / 97.5 / 99.0 / 101.2 / 103.9 / 107.9%。
   - チェリー狙い等の攻略条件系列: 96.16 / 98.07 / 99.95 / 102.04 / 105.02 / 109.42% 等。
   - 同一定義の競合とせず、**DEFINITION_DIFFERENCE_PLAY_METHOD**として分離。平均化しない。
2. **50枚ベースの定義差**
   - 後年整理の1000円あたり目安: 35.47～36.68G。
   - チェリー狙い: 36.14～37.39G。
   - 完全小役獲得: 36.32～37.58G。
   - 遊技方法・計算条件を混ぜず別系列保持。

## missingFields

- official approvalNumber
- 単純電源OFF→ONのみのリール初動/設定変更との差
- ガックンについて当時一次資料または別系統解析による追加照合
- 設定変更時のその他内部状態（存在する場合）の直接資料

## sources

取得日: 2026-09-05

1. 北電子公式「ミラクルジャグラー」 — https://www.kitadenshi.co.jp/slot/miraclejuggler/
   - 設定別BB/RB/合算、工場データ予測の出玉率。
   - confidence: OFFICIAL
2. 北電子公式「ミラクルジャグラーK 検定情報」 — https://www.kitadenshi.co.jp/slot-kentei/miraclejuggler/
   - 正式型式名「ミラクルジャグラーK」、各都道府県の2011年検定公示情報。
   - confidence: OFFICIAL
3. P-WORLD業界ニュース（グリーンべると 2011-09-20） — https://news.p-world.co.jp/articles/4910/greenbelt
   - 北電子発表、型式名ミラクルジャグラーK、完全告知仕様、プレミア演出、先告知/後告知概要。
   - confidence: INDUSTRY
4. アタリ7「ミラクルジャグラー」 — https://www.atari7.com/slot/miracle-juggler.php
   - 導入日2011-11-21、設定別BB/RB/合算/出玉率。
   - confidence: ANALYSIS_HIGH
5. K-Navi「ミラクルジャグラー」 — https://p-kn.com/slot/1507/
   - 設定別BB/RB/合算/機械割。
   - confidence: ANALYSIS_HIGH
6. P-WORLD「ミラクルジャグラーK」 — https://www.p-world.co.jp/machine/database/6504
   - BIG約312枚、REG約104枚、払い出し終了条件。
   - confidence: INDUSTRY_DATABASE
7. ジャグラー7「ミラクルジャグラー」 — https://juggler7.com/miracle/
   - 型式、BIG約312枚、REG約104枚、設定別スペック。
   - confidence: ANALYSIS_SINGLE
8. 激アツ「ミラクルジャグラー 設定判別・設定差・解析値・立ち回り」 — https://gekiatsu7.com/slot-analyze/2058/
   - チェリー狙い/完全小役獲得時50枚回転数、攻略条件の出玉率、設定変更後の朝一1G目ガックンと注意点。
   - confidence: ANALYSIS_SINGLE
9. パチナビ「ミラクルジャグラー」 — https://pachinavi.net/machines/miracle-juggler/
   - 型式名、メーカー発表スペック、1000円あたり回転数目安。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE
10. ジャグラーアナリティクス「ジャグラーシリーズの機械割一覧」 — https://akirameruna.com/juggler-spec
   - 適当押し/チェリー狙い/フル攻略の条件別機械割整理。メーカー公表系列との定義分離確認用。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## researchQueriesTried

- ミラクルジャグラー / ミラクルジャグラーK / Miracle Juggler / 北電子
- 導入日 / 2011 11 21 / 型式 / 検定
- BIG / REG / 合算 / 機械割 / 出玉率 / 312枚 / 104枚 / 50枚 / 1000円 / ベース / コイン持ち
- 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / 天井短縮 / モード / 状態 / 有利区間
- 後継スーパーミラクルジャグラー、ウルトラミラクルジャグラーのreset情報は初代へ流用していない。
