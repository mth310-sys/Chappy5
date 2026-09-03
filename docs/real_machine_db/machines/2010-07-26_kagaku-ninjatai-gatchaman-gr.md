# 科学忍者隊ガッチャマンGR

machineName: 科学忍者隊ガッチャマンGR
manufacturer: 岡崎産業
formalModelName: ガッチャマン
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-07-26
releaseDateStatus: CONFLICT_SOURCE_DATE / NATIONAL_INTRODUCTION_DATE_SELECTED
releaseDateNote: K-Naviは全国一斉導入開始日2010-07-26を掲載。HAZUSE DATAは導入開始日2010-07-23。グリーンべると2010-07-29記事は利益シェア型「割勘」での納品を2010-08-15開始としており、通常販売の全国導入日とは別販路・別定義として保持する。
generation: 5号機
systemType: A+ART / 次回ボーナスまで継続するストック型ART / CZ・パンク回避要素
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_APPROVAL_NUMBER_UNVERIFIED_RELEASE_DATE_CONFLICT

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線499「幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～」を再取得。
- 正本地点は recordCount 499 / chronologicalFrontier 2010-07-20。
- LATEST_HANDOFF指定候補「科学忍者隊ガッチャマンGR」をrepo検索し未登録を確認。
- K-Naviの全国一斉導入開始日2010-07-26を時系列主値として500件目に追加。HAZUSEの2010-07-23は競合値として捨てず保持。

## payoutRateBySetting

パチマガスロマガ解析値:
- 設定1: **97.25%**
- 設定2: **98.99%**
- 設定3: **101.08%**
- 設定4: **104.23%**
- 設定5: **107.42%**
- 設定6: **112.62%**

confidence: ANALYSIS_HIGH

## initialHitBySetting

### BIG合成
- 設定1: **1/399.61**
- 設定2: **1/390.10**
- 設定3: **1/381.02**
- 設定4: **1/360.09**
- 設定5: **1/341.33**
- 設定6: **1/330.99**

### REG
- 設定1: **1/399.61**
- 設定2: **1/390.10**
- 設定3: **1/381.02**
- 設定4: **1/360.09**
- 設定5: **1/341.33**
- 設定6: **1/330.99**

### ボーナス合算
- 設定1: **1/199.80**
- 設定2: **1/195.05**
- 設定3: **1/190.51**
- 設定4: **1/180.04**
- 設定5: **1/170.67**
- 設定6: **1/165.49**

パチマガスロマガ、HAZUSE、当時グリーンべるとの設定1/6端点を照合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

パチマガスロマガ「1000円あたりのゲーム数」:
- 設定1: **37.04G**
- 設定2: **37.48G**
- 設定3: **37.92G**
- 設定4: **38.39G**
- 設定5: **38.65G**
- 設定6: **39.37G**

HAZUSEは設定1〜6を概算 **約36.5〜約38.7G/50枚** と掲載し、精密値とは小差がある。定義/算出条件差の可能性があるため精密値を主値とし、概算値は補助確認として保持。
confidence: CONTEMPORARY_ANALYSIS_HIGH_WITH_SECONDARY_RANGE_CHECK

## netIncrease

- ART「ゴッドラッシュ」: **約+1.0枚/G**
- 次回ボーナス成立まで継続。
- 1回のART当選で最低2セット、最大7セットを獲得可能。

confidence: INDUSTRY_PLUS_CONTEMPORARY_ANALYSIS_HIGH

## basicPayout

- BIG: **約210枚**（規定311枚払い出し）
- REG/BG: **約63枚**（規定81枚払い出し）
- ART「ゴッドラッシュ」: 次回ボーナスまで継続、純増約+1.0枚/G

confidence: INDUSTRY_PLUS_CONTEMPORARY_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時の内部状態は **低確 / 通常 / 高確 / 超高確** の4状態。
- P-WORLDは高確濃厚「ギャラクター基地」、超高確濃厚「総裁Xステージ」を掲載。
- ART主契機はBIG中スペシャルバトル勝利、REG中抽選、自力G揃い。
- ARTは次回ボーナスまで継続し、初回を含め最低2セット以上のストック構造。
- ゲーム数天井: ボーナス後のパンクリプレイ入賞後、通常状態 **1280G** 消化でARTへ突入。天井中BIGはスペシャルバトル発生が確定とP-WORLDが記載。
- もう1系統として、ART非当選BIGを規定回数消化するとART突入が確定するART間天井を確認。規定回数の比較用公開値は今回確定できず。

confidence: INDUSTRY_PLUS_CONTEMPORARY_ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_COUNTER_RETAINED / START_HIGH_PROBABILITY_STATE (SECONDARY_ANALYSIS_CONFIRMED)**。後年5号機天井整理資料は、本機について設定変更後も1280G天井到達までのゲーム数をクリアせず、かつ高確率状態からスタートすると明記。現存する当時パチマガスロマガには「設定変更」専用項目の存在を確認したが、検索可能本文から同記述を直接回収できなかったため、性能コアより信頼度を一段下げる。

carryOverBehavior: **CEILING_PROGRESS_EFFECTIVELY_CARRYOVER_CONFIRMED_BY_SETTING_CHANGE_NONCLEAR**。設定変更でも天井ゲーム数を消さないため、据え置きで前日1280G進捗を利用できる挙動と整合。ただしARTストック数、ART間BIG回数天井、4状態の据え置き保持範囲は本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の1280G進捗、低確/通常/高確/超高確、ARTストック、ART間BIG回数天井の処理を直接確定できず。設定変更と同一視しない。

gameCounterReset: **NOT_RESET_BY_SETTING_CHANGE**（1280Gゲーム数天井）。後年天井整理資料で直接記載。ART非当選BIG回数天井の設定変更時処理は `UNVERIFIED_AFTER_RESEARCH`。

ceilingAfterReset: **NO_RESET_SHORTENING_CONFIRMED / 1280G_PROGRESS_RETAINED**。設定変更専用の短縮天井は確認されず、通常天井は1280G。設定変更で進捗を消さないとの資料あり。

modeAfterReset: **NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED**。ゲーム数解除型の通常/天国モードは確認されない。低確/通常/高確/超高確は状態として分離。

stateAfterReset: **HIGH_PROBABILITY_START_CONFIRMED_SECONDARY_ANALYSIS**。設定変更後は高確率状態スタートとの整理資料あり。高確が4状態中の「高確」を厳密に指すか、広義の高確率状態表現かは資料粒度上断定せず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **HIGH_PROBABILITY_START**。朝一設定変更時の主要恩恵として高確率状態スタート。1280G天井進捗も消さないため、変更による宵越し天井潰しが効かない仕様。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で1280G進捗を消さないため、その天井進捗喪失は確認されない。ARTストック/回数天井等の喪失有無は未確認。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`科学忍者隊ガッチャマンGR` / `ガッチャマンGR` / 型式 `ガッチャマン` / 岡崎産業 と、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目/リール/ステージを組み替えて探索したが、ガックン等の本機固有確定判別法は確定できず。高確示唆ステージ出現は内部状態推測には使えるが、設定変更確定法とは扱わない。

numericResetData:
- normalGameCountCeiling: **1280G**
- settingChangeCeilingCounter: **RETAINED / NOT_CLEARED**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetState: **高確率状態スタート（具体的振り分け率は未確認）**
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: COMPLETE_FOR_MAIN_CEILING_AND_HIGH_PROBABILITY_START / PARTIAL_FOR_POWER_CYCLE_STOCK_COUNT_CEILING_AND_DETECTION

## conflicts

- releaseDate: **CONFLICT**。K-Navi全国一斉導入開始日 **2010-07-26** / HAZUSE導入開始日 **2010-07-23**。本DB主値は全国導入カレンダー定義の2010-07-26。グリーンべるとの2010-08-15は「割勘」販路の納品開始で通常販売日とは分離。
- baseGamesPer50: パチマガスロマガ精密値37.04〜39.37Gに対し、HAZUSEは約36.5〜約38.7G。概算/算出条件差の可能性があり、精密値を主値として双方保持。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change behavior for ART stock / ART-non-hit BIG-count ceiling: UNVERIFIED_AFTER_RESEARCH
- exact reset high-probability-state distribution/rate: UNVERIFIED_AFTER_RESEARCH
- resetDetection via gakkun / initial reel position: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. 岡崎産業「〜2010年販売機種」 — https://okazakisangyo.com/machine/past/ — 2010年販売機種として科学忍者隊ガッチャマンGRを掲載 — reliability: OFFICIAL
2. グリーンべると「岡崎×バンダイナムコがコラボ機種を発表」2010-04-22 — https://web-greenbelt.jp/00002642/ — メーカー、型式名「ガッチャマン」、発表会 — reliability: INDUSTRY_CONTEMPORARY
3. K-Navi 2010年7月新台導入カレンダー — https://p-kn.com/calendar/201007/ — 全国一斉導入開始日2010-07-26 — reliability: CONTEMPORARY_CALENDAR
4. HAZUSE DATA — https://data.hazuse.com/?machine_code=SX0035 — 導入開始日2010-07-23、設定別ボーナス、50枚ベース概算 — reliability: ANALYSIS_DATABASE
5. パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/61/a.php — ART、4状態、1280G天井、BIG/REG枚数 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
6. パチマガスロマガ ボーナス確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/61/h.php — 設定別BIG/REG/合算・機械割 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
7. パチマガスロマガ 小役確率・1000円あたりゲーム数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/61/c.php — 設定別37.04〜39.37G — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
8. P-WORLD — https://www.p-world.co.jp/machine/database/5953 — ART純増約1枚/G、次回ボーナス継続、1280G天井、ART間天井、内部状態 — reliability: INDUSTRY_MACHINE_DB
9. パチスロ立ち回り講座 5号機天井情報 — https://crankyseven.com/sp/tenjo-5ka.htm — 設定変更でも1280G天井進捗をクリアせず、高確率状態スタート — reliability: RETROSPECTIVE_ANALYSIS_SECONDARY
10. グリーンべると「割勘650店に。新たに『ガッチャマン』も登場」2010-07-29 — https://web-greenbelt.jp/00006631/ — BIG210枚、BG63枚、ART純増1枚/G、ボーナス合算端点、割勘販路8/15納品開始 — reliability: INDUSTRY_CONTEMPORARY

## researchNotes

- `科学忍者隊ガッチャマンGR` / `ガッチャマンGR` / 型式 `ガッチャマン` / 岡崎産業を使用し、導入/納品/機械割/BIG/REG/50枚/1000円/コイン持ち/天井/設定変更/リセット/朝一/据え置き/電源OFF ON/高確/ガックン/初期出目を組み替えて横断検索。
- 公式・当時業界記事・当時解析・HAZUSE・P-WORLD・後年5号機天井整理資料を照合。
- 検定番号は十分な再探索後も確定できず推測採用しない。
- リセット情報は1280G進捗非クリア＋高確率スタートまで取得。単純電源OFF→ON、ARTストック/ART間BIG回数天井、変更判別は直接根拠不足のためUNVERIFIEDとした。
