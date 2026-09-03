# お座敷の茶々

machineName: お座敷の茶々
manufacturer: バルテック
formalModelName: オザシキノチャチャ
approvalNumber: 0S0189
releaseDate: 2010-07-05
releaseDateStatus: CONFIRMED_NATIONAL_INTRODUCTION_DATE
releaseDateNote: K-Navi 2010年7月導入カレンダーが全国一斉導入開始日2010-07-05として掲載。バルテック公式・5号機クロニクルは2010年7月の月粒度で整合。
generation: 5号機
systemType: A+ART / 押し順ART / CZ（2択チャレンジ） / 継続率管理ART + ストック型SUPER ART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、496前線実レコード「トップをねらえ2!」を再取得。
- 開始時正本地点は recordCount 496 / chronologicalFrontier 2010-07-05。
- LATEST_HANDOFF指定の2010-07-05同日未処理候補「お座敷の茶々」をrepo検索し未登録を確認。
- K-Naviの2010-07-05全国導入パチスロ群は「トップをねらえ2!」「お座敷の茶々」。前者は496で登録済みのため、本機を497件目として追加。

## payoutRateBySetting

P-WORLD / pacnk / 5号機クロニクル一致系列:
- 設定1: **97.3%**
- 設定2: **98.6%**
- 設定3: **99.7%**
- 設定4: **103.2%**
- 設定5: **106.8%**
- 設定6: **113.4%**

当時パチマガスロマガのPAYOUTも同値で一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス合成
- 設定1: **1/167.1**
- 設定2: **1/163.8**
- 設定3: **1/160.6**
- 設定4: **1/157.5**
- 設定5: **1/151.7**
- 設定6: **1/146.2**

バルテック公式は設定1合成1/167.1を公表。P-WORLD、pacnk、当時パチマガスロマガで設定1〜6系列を照合。

SUPER茶々ボーナス / 茶々ボーナスの設定別個別確率は、表記・型式・ボーナス名称を変えて再探索したが比較可能な直接系列を今回確定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: OFFICIAL_PLUS_ANALYSIS_HIGH_FOR_COMBINED

## baseGamesPer50

当時パチマガスロマガ本機専用ページの「1000円あたりのゲーム数」は **現在調査中** のまま。機種名/型式/メーカー名と「50枚」「1000円」「ベース」「コイン持ち」を組み替え、公式・P-WORLD・pacnk・旧解析/回顧系を再探索したが比較可能な確定値を回収できず。

baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
confidence: UNVERIFIED

## netIncrease

- ART「茶々タイム」: **約+1.7枚/G**
- SUPER ART「SUPER茶々タイム」: **約+1.7枚/G**

バルテック公式、P-WORLD、pacnk、当時パチマガスロマガで一致。
confidence: OFFICIAL_PLUS_ANALYSIS_HIGH

## basicPayout

- SUPER茶々ボーナス: **約204枚**（301枚超払い出しで終了）
- 茶々ボーナス: **約78枚**（112枚超払い出しで終了）
- ART「茶々タイム」: **1セット30G**、継続率最低50%〜最高90%級
- SUPER ART「SUPER茶々タイム」: **1セット120G / 最大3セット**、終了後は茶々タイムへ

confidence: OFFICIAL_PLUS_INDUSTRY_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時はART獲得期待度が異なる**低確 / 高確**の2状態を持つ。
- 高確中ボーナス成立時のART突入率は **75%**。
- 茶々タイムは30G単位の継続率管理。ART中ボーナスで継続率アップ抽選、最大90%級。
- ART非当選の茶々ボーナス後および茶々タイム継続落選後はCZ「二択チャレンジ」へ。2択を3回成功後、復活茶々チャンスの3択じゃんけん成功でART復帰。
- SUPER茶々ボーナス後はSUPER茶々タイム確定。茶々ボーナス中フリーズでも同ARTへ。
- 通常ゲーム数天井について本機固有の確定値は、天井/ハマリ/救済/ゲーム数等へ検索語を変えても確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。ゲーム数管理解除型ではない。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **POST_RESET_CZ_ENTRY_STATE_CONFIRMED**。P-WORLDが本機専用「設定変更後」として、設定変更後は**ART非当選時のボーナス後・ART後と同じ状態**になり、鈴取りこぼし目（門松・門松・鈴）から「二択チャレンジ」が発生すると明記。設定変更で朝一CZ突入契機を作る点を確定。低確/高確そのものの設定変更時初期振分、ART継続率/ストックの消去・保持は直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時に前日の低確/高確、ART継続率・SUPER ARTストック、CZ内部状態をどこまで保持するか、本機固有の直接資料を十分な再探索後も確定できず。ゲーム数天井は確認されないため天井進捗の宵越し比較は `NOT_APPLICABLE_NO_CEILING_CONFIRMED`。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみで設定変更時と同じ「二択チャレンジ準備状態」へ移るか、低確/高確・ART/CZ状態・ストックがどう処理されるかを明記する本機固有資料は確定できず。設定変更と電源再投入を同一視しない。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。通常ゲーム数天井/周期解除を確認できず、設定変更で比較すべき天井G数カウンタは今回確認されない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。リセット専用短縮天井・通常ゲーム数天井とも確定値なし。

modeAfterReset: **NO_GAME_COUNT_MODE_CONFIRMED / LOW_HIGH_INITIAL_DISTRIBUTION_UNVERIFIED**。ゲーム数モード型ではない。通常時の低確/高確は確認済みだが、設定変更時の低確/高確初期振分は `UNVERIFIED_AFTER_RESEARCH`。

stateAfterReset: **CZ_ENTRY_PREPARATION_STATE_CONFIRMED / OTHER_INTERNAL_STATE_UNVERIFIED**。設定変更後はART非当選ボーナス後/ART終了後と同じ状態になり、鈴こぼし目から二択チャレンジへ移行。低確/高確・ART継続率・SUPER ARTストック等の初期化/保持は未確定。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **EARLY_CZ_OPPORTUNITY_CONFIRMED**。朝一に鈴取りこぼし目を経て二択チャレンジが発生し得るため、設定変更直後から自力ART復帰ルートへの入口を持つ。短縮天井や設定変更専用当選率などは `NONE_CONFIRMED_AFTER_RESEARCH`。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。ゲーム数天井進捗喪失は天井未確認のため該当させない。前日高確/ARTストック等が消失するかは直接根拠がなく断定しない。

resetDetection: **MORNING_TWO_CHOICE_CHALLENGE_SETTING_CHANGE_STRONG_INDICATOR_CONFIRMED**。P-WORLDは「朝イチいきなり二択チャレンジが発生すれば、設定変更濃厚」と明記。設定変更判別に使える本機固有の主要挙動として保存。ガックン、初期出目、ランプ等の追加判別法は `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- resetMorningCZTrigger: **鈴取りこぼし目（門松・門松・鈴）後に二択チャレンジ発生**
- resetDetectionMeaning: **朝一いきなり二択チャレンジ = 設定変更濃厚**
- highStateARTHitRate: **75%（高確中ボーナス成立時。設定変更専用数値ではない）**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: CONFIRMED_FOR_SETTING_CHANGE_CZ_STATE_AND_DETECTION / PARTIAL_FOR_POWER_CYCLE_CARRYOVER_INTERNAL_STATE

## conflicts

- 今回、物差し主系列の設定別機械割・ボーナス合成・ART純増・基本獲得枚数に有意な数値CONFLICTは確認されず。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- SUPER茶々ボーナス / 茶々ボーナス個別設定別確率: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior for low/high, ART continuity/stock and CZ state: UNVERIFIED_AFTER_RESEARCH
- exact powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- low/high initial distribution on setting change: UNVERIFIED_AFTER_RESEARCH
- ART continuation rate / SUPER ART stock handling on setting change: UNVERIFIED_AFTER_RESEARCH
- additional resetDetection methods such as reel gakkun/initial display: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. バルテック公式「お座敷の茶々」 — https://www.baltec.co.jp/product/product09.html — 3BET変則5ライン、設定1ボーナス合成1/167.1、茶々タイム30G/約+1.7枚/G、SUPER茶々タイム120G/最大3セット — reliability: OFFICIAL
2. P-WORLD「お座敷の茶々」 — https://www.p-world.co.jp/machine/database/5980 — 型式オザシキノチャチャ、検定0S0189、設定別合成・機械割、獲得枚数、ART/CZ、低高確、設定変更後の二択チャレンジ状態、朝一CZで設定変更濃厚 — reliability: INDUSTRY_MACHINE_DB
3. K-Navi 2010年7月新台導入カレンダー — https://p-kn.com/calendar/201007/ — 全国一斉導入開始2010-07-05、同日パチスロ群の確認 — reliability: ANALYSIS_INDUSTRY_CALENDAR
4. pacnk「お座敷の茶々」 — https://pacnk.com/slot/2010/ozashikichacha/top.php — 設定別ボーナス合成/PAYOUT、低高確、高確時ART75%、ART/CZ構造 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「お座敷の茶々 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/53/a.php — ART純増1.7枚/G、30G、継続率50〜90%、204/78枚 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
6. パチマガスロマガ「PAYOUT・ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/53/h.php — 設定別合成・PAYOUT — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
7. パチマガスロマガ「小役確率・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/53/c.php — 1000円あたりゲーム数が現在調査中であることを確認 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
8. 5号機クロニクル「バルテック5号機全機種一覧」 — https://5goki.com/baltec — 導入2010/7、機械割97.3〜113.4%系列 — reliability: RETROSPECTIVE_DB
9. Pマンズ 2010-05-21業界記事 — https://p-mans.blogspot.com/2010/05/ — ビージェイ販売発表、約78/204枚、ボーナス合成1/167.1〜1/146.2、ART基本仕様 — reliability: CONTEMPORARY_INDUSTRY_NEWS

## retrieval

retrievedAt: 2026-09-03
schemaVersion: resetBehavior-v0.7
