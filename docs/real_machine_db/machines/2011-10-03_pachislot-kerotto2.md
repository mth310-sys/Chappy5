# パチスロ「ケロット2」

machineName: パチスロ「ケロット2」
aliases: ケロット2 / パチスロ ケロット2
manufacturer: 山佐
formalModelName: ケロット2A
approvalNumber: 1S0294
releaseDate: 2011-10-03
releaseDateStatus: **CONFLICT_OR_MARKET_DATE_DEFINITION_DIFFERENCE**。K-Naviは「全国一斉導入開始日」として2011-10-03を掲載。グリーンべるとの2011-09-12業界記事は「納品は10月10日から開始予定」、HAZUSEは導入開始日2011-10-11を掲載する。全国導入日・納品開始予定・DB導入開始日の定義を混同/平均せず、本DBのchronology keyは全国一斉導入開始日の2011-10-03を採用する。
generation: 5号機
systemType: ノーマル / Aタイプ / ボーナス主体
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコードREVOを確認して開始。
- 開始時正本は **recordCount 609 / chronologicalFrontier 2011-10-03**。
- LATEST_HANDOFF指定どおり10月3日全国導入群の残存「ケロット2」を再監査。
- repo code searchで「ケロット2」ヒットなし、recursive treeにもkerotto系実パスなし、想定パスの直接fetchも404を確認し未登録と判断。
- K-Naviの2011年10月カレンダーでは、10月3日全国一斉導入群にエージェント・クライシス、ケロット2、快盗天使ツインエンジェル3、X JAPAN、サムライスピリッツ鬼、REVOの6機種を掲載。本機追加でこの6機種は本線上すべて登録済みとなる。

## payoutRateBySetting

### HAZUSE調べ

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.6% |
| 3 | 101.1% |
| 4 | 104.2% |
| 5 | 106.3% |
| 6 | 110.1% |

confidence: **ANALYSIS_HIGH_DIRECT**

### retrospective conflict note

- 後年のケロットシリーズ回顧資料には **98.1 / 99.6 / 101.8 / 104.4 / 106.2 / 110.2%** という別系列値がある。
- 5号機クロニクル山佐一覧にも本機について **97.5 / 98.9 / 101.1 / 103.7 / 105.5 / 109.3%** の別系列が掲載されるが、同ページは本機導入月を2012年10月と誤記しているため主値には採用しない。
- 平均せず `CONFLICT_RETROSPECTIVE_MACHINE_RATE_SERIES` として保持し、主値は機種個別解析ページのHAZUSE値とする。

## initialHitBySetting

### BIG / REG / ボーナス合算

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/287.4 | 1/455.1 | 1/176.1〜176.2 |
| 2 | 1/282.4 | 1/425.5〜425.6 | 1/169.7〜169.8 |
| 3 | 1/270.8 | 1/409.6 | 1/163.0 |
| 4 | 1/258.0 | 1/390.1 | 1/155.3 |
| 5 | 1/250.1 | 1/376.6 | 1/150.3 |
| 6 | 1/235.7 | 1/352.3 | 1/141.2 |

- P-WORLDのBIG/REGとHAZUSEの同色BIG+異色BIG合成が整合。REGは設定2でP-WORLD 1/425.5、HAZUSE 1/425.6の丸め差。
- HAZUSE合算は1/176.2〜1/141.2、P-WORLDは設定1 1/176.1・設定2 1/169.7など小数第1位に軽微な丸め差があるため範囲で保持。
confidence: **ANALYSIS_HIGH_CROSSCHECKED_WITH_DATABASE**

## baseGamesPer50

- 設定1〜6: **34.6〜36.3G / 50枚**。
- HAZUSE機種個別ページで「50枚あたりのゲーム数 設定1〜6 34.6〜36.3G」と直接掲載。
- 設定別6点への分解値は確認できないためレンジのまま保存する。
confidence: **ANALYSIS_HIGH_DIRECT_RANGE**

## netIncrease

- **NOT_APPLICABLE**。ART/AT非搭載のノーマルタイプ。P-WORLDは「ボーナスのみでコインを増やす」タイプと明記。
- オレンジ成立後の3GプチRTは演出用の短期RTであり、通常の出玉増加ART/RT純増値として扱わない。

## basicPayout

- BIG: **最大335枚**。
- REG: **104枚**。
- グリーンべると、P-WORLD、パチマガスロマガで一致。
- BIGは14枚役を1度獲得する簡易技術介入で最大335枚。REGは固定104枚。
confidence: **INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- ノーマルAタイプ。ART等の付加機能は非搭載。
- 通常時は液晶4ステージを順に移行し、32G以内のステージ移行や移行順矛盾はボーナス濃厚/確定系の演出法則。これは朝一専用モードや規定G数当選モードではない。
- 全小役にボーナス同時成立の可能性。物差し用途ではボーナス確率までを主保存し、個別重複率の全テーブルは取得対象外。
- 通常ゲーム数天井は確認されない。

## resetBehavior — v0.7

settingChangeBehavior: **NO_GAME_COUNT_CEILING_OR_PERSISTENT_AT_ART_MODE_CONFIRMED / MACHINE_SPECIFIC_DISPLAY_OR_STAGE_EFFECT_UNVERIFIED_AFTER_RESEARCH**。本機はノーマルAタイプで、通常ゲーム数天井、規定G数当選、ART/AT状態を確認しない。設定変更時に液晶ステージや演出用3G RT等がどう初期化されるかを直接記した本機固有資料は確定できず。

carryOverBehavior: **NO_CEILING_PROGRESS_APPLICABLE / OTHER_TRANSIENT_STATE_UNVERIFIED_AFTER_RESEARCH**。据え置きで引き継ぐゲーム数天井・長期モードは確認されない。液晶ステージや一時表示状態の保持は本機固有の直接根拠なし。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_DISPLAY_STAGE_AND_TRANSIENT_STATE**。単純電源OFF→ONでの液晶ステージ、演出進行、一時RT/表示状態の保持/初期化を本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_TO_GAME_COUNT_CEILING_AFTER_RESEARCH**。通常ゲーム数天井・規定G数当選を確認できないため、設定変更で失われる天井進捗は非該当。

ceilingAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井も確認されない。

modeAfterReset: **NOT_APPLICABLE_TO_PERSISTENT_WINNING_MODE / DISPLAY_STAGE_BEHAVIOR_UNVERIFIED**。通常A/B等の当選モードは確認されない。4液晶ステージは演出ステージであり朝一モードと混同しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_TRANSIENT_DISPLAY_OR_SHORT_RT_STATE**。出玉抽選上の高確/超高確状態は確認されないが、設定変更/電断時の一時的な表示・短期RT状態まで一般則で断定しない。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用ボーナス優遇、短縮天井、リセット専用当選率などの公開数値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失のような明確な不利要素となるゲーム数天井自体を確認しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ケロット2 / ケロット2A / 山佐 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / ステージ` を組み替え、機種個別DB・当時解析・業界記事・回顧資料を横断したが、本機固有の設定変更/据え置き判別法を確定できず。後継ケロット/山佐機のガックン仕様は流用しない。

numericResetData:
- 通常ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内ボーナス当選率/期待度: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH**
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_AND_DATABASE_HIGH_FOR_MACHINE_TYPE_NO_ART_CONTEXT / UNVERIFIED_AFTER_RESEARCH_FOR_SETTING_CHANGE_POWER_CYCLE_STAGE_AND_RESET_DETECTION**

## conflicts

1. **導入日/市場投入日定義**
   - K-Navi: 2011-10-03「全国一斉導入開始日」。
   - グリーンべると: 2011-10-10「納品開始予定」。
   - HAZUSE: 2011-10-11「導入開始日」。
   - chronology keyは定義が明示されたK-Navi全国導入日2011-10-03を採用し、他2値は削除/平均しない。
2. **機械割**
   - HAZUSE: 96.8 / 98.6 / 101.1 / 104.2 / 106.3 / 110.1%。
   - 後年シリーズ回顧: 98.1 / 99.6 / 101.8 / 104.4 / 106.2 / 110.2%。
   - 5号機クロニクル: 97.5 / 98.9 / 101.1 / 103.7 / 105.5 / 109.3%（ただし導入年月誤記あり）。
   - 平均せずCONFLICT保持。
3. **ボーナス確率の小数丸め**
   - REG設定2 1/425.5〜425.6、合算設定1/2等に0.1程度の丸め差。実質同系列として範囲保持。

## missingFields

- settingChangeBehavior for display/stage/transient RT: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior for display/stage/transient state: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- exact six-setting baseGamesPer50 values: **UNVERIFIED; direct overall range only**

## sources

取得日: **2026-09-04**

1. K-Navi — 2011年10月新台導入カレンダー
   - https://p-kn.com/calendar/201110/
   - 2011-10-03「全国一斉導入開始日」群にパチスロ「ケロット2」を掲載。
   - reliability: **DATABASE_HIGH**
2. グリーンべると — 山佐、『パチスロ「ケロット2」』を発表
   - https://web-greenbelt.jp/00002298/
   - 2011-09-12業界記事。ノーマルAタイプ、納品10月10日開始予定、BIG最大335枚、RB104枚。
   - reliability: **INDUSTRY**
3. HAZUSE — パチスロ「ケロット2」
   - https://hazuse.com/machine/pachislot/1S0294/
   - 型式名ケロット2A、検定番号1S0294、導入開始日2011-10-11、設定別同色/異色BIG・REG・合算、設定別機械割、50枚34.6〜36.3G。
   - reliability: **ANALYSIS_HIGH**
4. P-WORLD — パチスロ「ケロット2」
   - https://www.p-world.co.jp/machine/database/6476
   - 山佐、5号機ノーマル、BIG最大335枚/REG104枚、設定別BIG/REG/合算、ART非搭載。
   - reliability: **DATABASE_HIGH**
5. パチマガスロマガ — パチスロ「ケロット2」スペック
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/182/a.php
   - ノーマル、BIG最大335枚、REG約104枚、オレンジ成立後3GプチRT。
   - reliability: **ANALYSIS_HIGH**
6. K-Navi — 液晶ステージの激アツ法則
   - https://p-kn.com/slot/1488/33475/
   - 4ステージ移行順と32G以内ステージ移行の演出法則。
   - reliability: **ANALYSIS_HIGH**
7. 後年ケロットシリーズ機械割回顧
   - https://www.marimo0925.net/pachislot-kikaiwari-ranking-kelot-ban/
   - 別系列機械割98.1〜110.2%。主値にはせずCONFLICT補助。
   - reliability: **RETROSPECTIVE_SINGLE**
8. 5号機クロニクル — 山佐5号機一覧
   - https://5goki.com/yamasa
   - 別系列機械割97.5〜109.3%。本機導入月に誤記があるため補助CONFLICT資料に限定。
   - reliability: **RETROSPECTIVE_DATABASE_WITH_DATE_ERROR**
