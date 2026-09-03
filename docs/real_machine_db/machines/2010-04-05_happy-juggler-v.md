# ハッピージャグラーV

machineName: ハッピージャグラーV
manufacturer: 北電子
formalModelName: ハッピージャグラーV8
approvalNumber: 9S1076
releaseDate: 2010-04-05
generation: 5号機
systemType: ノーマルタイプ / 完全告知 / ボーナス主体
coreStatus: COMPLETE_CORE_RESET_DETECTION_CONFIRMED_PAYOUT_CONFLICT_POWER_CYCLE_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直近472「パチスロ『宇宙戦艦ヤマト』」を再取得し、recordCount 472 / chronologicalFrontier 2010-04-05 を正本として継続。
- repo内に「ハッピージャグラーV」の既存レコードがないことを確認。
- K-Naviはホール導入開始を2010-04-05、グリーンべるとは2010-02-12記事で納品を2010-04-04開始予定、北電子公式アプリ案内は「2010年4月に全国のホールに設置」とするため、ホール導入主値を2010-04-05とした。

## payoutRateBySetting

### 系列A — 北電子公式 / K-Navi / P-WORLD
- 設定1: **96.1%**
- 設定2: **97.9%**
- 設定3: **99.9%**
- 設定4: **102.9%**
- 設定5: **105.8%**
- 設定6: **108.4%**

北電子公式は「工場データから算出した予測値」と注記。K-Navi、P-WORLD、ダイナム掲載値も同系列で一致。

### 系列B — 後年解析整理値
- 設定1: **95.7%**
- 設定2: **97.6%**
- 設定3: **99.9%**
- 設定4: **102.8%**
- 設定5: **106.0%**
- 設定6: **108.8%**

すろぱちくえすと掲載値。設定1/2/4/5/6で公式系列と差があるため平均せず `CONFLICT` として保持し、物差し主値はメーカー公式系列を優先。

confidence: CONFLICT_OFFICIAL_PRIMARY

## initialHitBySetting

### BIG
- 設定1: **1/287.4**
- 設定2: **1/282.5**
- 設定3: **1/273.1**
- 設定4: **1/264.3**
- 設定5: **1/252.1**
- 設定6: **1/240.9**

### REG
- 設定1: **1/409.6**
- 設定2: **1/364.1**
- 設定3: **1/341.3**
- 設定4: **1/315.1**
- 設定5: **1/287.4**
- 設定6: **1/273.1**

### ボーナス合成
- 設定1: **1/168.9**
- 設定2: **1/159.1**
- 設定3: **1/151.7**
- 設定4: **1/143.7**
- 設定5: **1/134.3**
- 設定6: **1/128.0**

北電子公式、K-Navi、P-WORLD、複数ジャグラー解析資料で一致。

confidence: OFFICIAL_MULTI_SOURCE

## baseGamesPer50

1000円あたりゲーム数（パチマガスロマガ）:
- 設定1: **34.14G**
- 設定2: **34.34G**
- 設定3: **34.55G**
- 設定4: **35.27G**
- 設定5: **35.49G**
- 設定6: **35.71G**

前提: 小役取得率=チェリー100%、ベル・ピエロ各15%。後年解析整理資料でも同値を確認。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- NOT_APPLICABLE（ART/AT/RTによる継続純増機能なし）

confidence: OFFICIAL_INDUSTRY

## basicPayout

- BIG: **約312枚**
- REG: **約104枚**
- BIGは345枚を超える払い出しで終了、REGは105枚を超える払い出しで終了。

P-WORLD、ダイナム、複数解析資料で一致。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルタイプ。
- GOGO!ランプ点灯でボーナス確定の完全告知。
- 通常ゲーム数天井、周期CZ、ART/ATストック、ゲーム数管理モードは確認されない。
- 告知タイミングは成立ゲームの先告知約1/4、後告知約3/4。

confidence: OFFICIAL_INDUSTRY_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAME_NUMBER_OR_MODE_RESET_TARGET / REEL_GAKKUN_DETECTION_CONFIRMED**。本機は通常ゲーム数天井・周期CZ・ART/AT・ゲーム数管理モードを持たないため、設定変更で消去される朝一価値としての天井/モード進捗は `NOT_APPLICABLE`。一方、本機固有の朝一解析資料で、店側が事前に1G回す等の対策をしていなければ設定変更後1G目のリール「ガックン」による変更推測が可能と確認。

carryOverBehavior: **NO_GAME_NUMBER_OR_MODE_CARRYOVER_TARGET / GAKKUN_ABSENCE_NOT_DEFINITIVE**。天井・周期・モード進捗の据え置き対象は確認されない。ガックンしない場合も店側対策等があり得るため、据え置き確定とは扱わない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみで初回リール挙動、GOGO!ランプ/内部ボーナス成立状態等がどう処理されるかについて、本機固有の高信頼な直接資料を検索語・資料系統を変えて再探索したが確定できず。一般的ジャグラー挙動から推測しない。

gameCounterReset: **NOT_APPLICABLE**。通常ゲーム数天井・周期ゲーム数管理なし。

ceilingAfterReset: **NOT_APPLICABLE**。天井非搭載のノーマルタイプとして扱う。リセット専用短縮天井なし。

modeAfterReset: **NOT_APPLICABLE_FOR_GAME_NUMBER_MODE**。朝一専用モード、設定変更時モード振り分け等の公開値は確認されない。

stateAfterReset: **NO_RELEVANT_PERSISTENT_STATE_CONFIRMED / EXACT_INTERNAL_STATE_UNVERIFIED**。ホール経営・朝一狙いに影響する高確/前兆/ART状態は存在確認なし。成立済みボーナス等の電源/設定変更時内部処理は本DBの必要粒度で直接確定できず推測しない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、朝一高確、当選率優遇、CZ優遇等は確認されない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井/モード進捗がないため宵越し価値消失型の不利要素は確認されない。

resetDetection: **GAKKUN_CONFIRMED_WITH_COUNTERMEASURE_CAVEAT**。設定変更後、対策されていなければ朝一1G目のリールガックンで変更推測可能。ただし店側が事前に1G回す等の対策で無効化でき、非ガックン=据え置き確定ではない。初期出目固定、ランプ表示等の追加判別条件は十分な本機固有資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- resetCeilingShortening: **NOT_APPLICABLE**
- resetModeDistribution: **NOT_APPLICABLE / NONE_CONFIRMED**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionGakkun: **設定変更後1G目・店側対策がなければ判別可能**

resetBehaviorQA: CORE_RESET_NOT_APPLICABLE_GAKKUN_CONFIRMED_POWER_CYCLE_PARTIAL

## conflicts

- payoutRateBySetting: **CONFLICT**。北電子公式/K-Navi/P-WORLDの96.1/97.9/99.9/102.9/105.8/108.4%に対し、後年解析整理値95.7/97.6/99.9/102.8/106.0/108.8%。平均せず双方を保持し、公式系列を主値とする。

## missingFields

- powerCycleBehavior exact behavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection 初期出目/ランプ等の追加条件: UNVERIFIED_AFTER_RESEARCH
- settingChange exact handling of already-established bonus/internal flag: OUT_OF_SCOPE_OR_UNVERIFIED

## sources

取得日: 2026-09-03

1. 北電子公式「ハッピージャグラーV」 — https://www.kitadenshi.co.jp/slot/happyjugglerv/ — 設定別BB/RB/合算/出玉率、製品仕様 — reliability: OFFICIAL
2. 北電子公式「ハッピージャグラーV iOSアプリ」 — https://www.kitadenshi.co.jp/fun/apps/happy-jugg/ — 2010年4月全国ホール設置の時期確認 — reliability: OFFICIAL
3. グリーンべると「ジャグ史上最高の合成確率『ハッピージャグラー』」 — https://news.p-world.co.jp/articles/3821/greenbelt — 2010-02-12、ハッピージャグラーV8、納品2010-04-04予定 — reliability: INDUSTRY_NEWS
4. K-Navi「ハッピージャグラーV」 — https://p-kn.com/slot/1164/ — ホール導入開始2010-04-05、設定別BB/RB等 — reliability: ANALYSIS_DB
5. K-Navi「機械割&期待収支」 — https://p-kn.com/slot/1164/17299/ — 96.1〜108.4% — reliability: ANALYSIS_DB
6. P-WORLD「ハッピージャグラーV」 — https://www.p-world.co.jp/machine/database/5865 — 5号機ノーマル、BIG約312枚/REG約104枚、型式ハッピージャグラーV8、検定番号9S1076、2010年4月 — reliability: INDUSTRY_DB
7. パチマガスロマガ「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/72/c.php — 1000円あたり34.14〜35.71G — reliability: ANALYSIS_HIGH
8. すろぱちくえすと「ハッピージャグラーV 設定判別」 — https://www.slopachi-quest.com/article/happy-juggler-v/ — 1000円あたりゲーム数、設定変更時ガックン、異なる機械割系列 — reliability: ANALYSIS_SINGLE
9. ダイナム「ハッピージャグラーV」 — https://www.dynam.jp/amusement/machines/s0005210001.html — BB/RB/合算/出玉率、払い出し条件 — reliability: HALL_DB

## researchNotes

欠損項目について「ハッピージャグラーV」「ハッピージャグラーV8」「北電子」を軸に、「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「天井」「50枚」「1000円」「機械割」「PAYOUT」へ検索語を変更し、メーカー公式、当時業界記事、P-WORLD、K-Navi、旧パチマガスロマガ、後年解析整理資料を横断した。確定できないpowerCycleBehavior等のみUNVERIFIEDとした。
