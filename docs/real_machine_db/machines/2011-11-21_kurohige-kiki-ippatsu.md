# パチスロ「黒ひげ危機一発」

machineName: パチスロ「黒ひげ危機一発」
aliases: 黒ひげ危機一発 / 黒ヒゲ危機一発 / 黒ひげ
manufacturer: 山佐
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-11-21
releaseDateStatus: EXACT_HALL_INTRODUCTION_WITH_DELIVERY_DATE_CROSSCHECK

generation: 5号機
systemType: ART専用 / ボーナス非搭載 / 周期・モード管理ART
coreStatus: PARTIAL_CORE_BASE_UNVERIFIED
resetQaStatus: PARTIAL_RESET_BEHAVIOR_WITH_DIRECT_RESET_128G_RULE

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ミラクルジャグラー」を再取得して開始。
- 開始時正本は recordCount 621 / chronologicalFrontier 2011-11-21。INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFFに先行候補として記載された「ストリートファイターIV」はGitHub code searchでは未検出だったが、想定実パスを直接fetchすると既存レコードが存在したため重複追加を回避。
- 2011-11-21同日群を再監査し、山佐「パチスロ『黒ひげ危機一発』」を未登録候補として抽出。GitHub code searchで機種名/slug未検出、想定実パス `docs/real_machine_db/machines/2011-11-21_kurohige-kiki-ippatsu.md` を直接fetchして404を確認し、未登録と判断。
- K-Naviはホール導入開始 **2011-11-21**、2011-11-07付グリーンべるとは **2011-11-20から納品開始予定**、山佐公式は **2011年11月稼働**。定義が整合するため本DB時系列キーは2011-11-21とする。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.2% |
| 2 | 98.1% |
| 3 | 100.0% |
| 4 | 102.0% |
| 5 | 104.0% |
| 6 | 107.6% |

- パチマガスロマガ旧解析ページとpacnk整理値が一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/75.5 |
| 2 | 1/72.3 |
| 3 | 1/69.2 |
| 4 | 1/65.8 |
| 5 | 1/62.5 |
| 6 | 1/58.4 |

- パチマガスロマガ旧解析ページの直接値。
- K-Naviは機種概要でART当選確率を約1/70と説明しており、設定別系列のレンジと整合。
confidence: ANALYSIS_HIGH_DIRECT_WITH_RANGE_CROSSCHECK

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

- 「パチスロ『黒ひげ危機一発』 / 黒ひげ危機一発 / 黒ヒゲ危機一発 / 山佐」に「50枚 / 1000円 / ベース / コイン持ち / 1k」を組み替えて探索。
- 山佐公式、グリーンべると、K-Navi、P-WORLD、パチマガスロマガ旧解析、後年DBを横断したが、2011年版に限定した比較可能な50枚ベース直接値を今回安全に確定できなかった。
- 誤情報を含む後年まとめや別機種相当の高純増AT記述は採用しない。
confidence: UNVERIFIED

## netIncrease

- ART「黒ひげアドベンチャー」: **約+2.0枚/G**。
- 山佐公式、グリーンべると、K-Navi、P-WORLD、パチマガスロマガで一致。
confidence: OFFICIAL_AND_INDUSTRY_CROSSCHECKED

## basicPayout

- 通常ART「黒ひげアドベンチャー」: 基本 **30G**、約+2.0枚/Gのため30G消化時の純増目安 **約60枚**。
- ARTゲーム数は「黒ひげチャレンジ」で30Gを起点に最大 **1000G**まで挑戦可能。
- フリーズ時の「スーパー黒ひげアドベンチャー」: **250G確定**。
- 山佐公式とグリーンべるとで30G起点・最大1000G・SUPER 250Gを確認、パチマガスロマガはART30G約60枚を直接掲載。
confidence: OFFICIAL_AND_INDUSTRY_CROSSCHECKED

## modeSpecificMinimumData

- ボーナス非搭載のART専用機。
- ART当選は通常時の周期到達およびレア役抽選が主契機。
- 周期は内部モードによって異なり、グリーンべるとは内部モードごとに周期の「天井」が異なると説明。
- パチマガスロマガ旧解析ではART当選はゲーム数管理で、通常ステージから周期残りゲーム数を示唆する構造を確認。昼/夕は1～255G、夜は24G以内、嵐は24G以内かつ天国モード濃厚とされる。
- 本機には一般的な単一「ゲーム数天井」というより、モード別周期規定ゲーム数によるART抽選構造があるため、リセット項目でも周期G数と通常ゲーム数天井を分けて扱う。
- 実機完全再現に不要な全モード移行率・全周期振り分けは収集対象外。

## resetBehavior — v0.7

settingChangeBehavior: **SETTING_CHANGE_RESETS_REGULATION_CYCLE_GAME_COUNT_TO_128G_OR_LESS / OTHER_DETAILS_PARTIAL**。後年解析整理で、本機は設定変更後に規定ゲーム数が **128G以下へ再セット**されると明記。K-Naviにも本機専用「設定変更後の挙動」「モード移行率(設定変更後)」解析項目が存在することを確認。具体的な全モード振り分けは今回安全に回収できなかったため推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の現在周期ゲーム数・内部モード・ART前兆/ストックの保持について本機固有の直接資料を確定できず。設定変更時128G以下再セットの反対概念として自動的に「据え置きなら完全引継ぎ」と推測しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の周期ゲーム数、内部モード、液晶ステージ、ARTストックの扱いを本機固有資料で確定できず。

gameCounterReset: **RESET_TO_NEW_REGULATION_CYCLE_GAME_COUNT_AT_SETTING_CHANGE / EXACT_PREVIOUS_COUNTER_CLEAR_MECHANISM_NOT_SEPARATELY_PUBLISHED**。設定変更後は規定ゲーム数が128G以下へ再セットされるため、前日の現在周期進捗をそのまま継続する挙動ではないことは確認可能。一般的な「ボーナス間天井カウンタ」とは異なる周期G数管理として記録。

ceilingAfterReset: **RESET_SPECIFIC_CYCLE_MAX_128G_CONFIRMED / NO_SINGLE_GAME_COUNT_CEILING**。後年解析整理では「ゲーム数天井は非搭載」としつつ、設定変更後は規定ゲーム数が128G以下に再セット。したがって通常の深い天井短縮ではなく、**設定変更時の次回周期到達が最大128G以内になる朝一短縮**として保存する。

modeAfterReset: **RESET_MODE_RESELECTION_EXISTS_BUT_NUMERIC_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。K-Naviに「モード移行率(設定変更後)」専用項目が存在。設定変更時にモード移行/再抽選が解析対象であったことは確認できるが、設定別/モード別の具体振り分け値は今回安全に回収できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機の朝一内部状態について、周期モードとは別の高確/低確等状態の具体的再抽選・保証を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NEXT_REGULATION_CYCLE_WITHIN_128G_CONFIRMED**。設定変更後は規定ゲーム数が128G以下へ再セットされるため、通常時の周期が最大255G級になり得る本機では朝一の周期到達が相対的に早まる明確な恩恵。ART当選そのものを128G以内保証する意味ではなく、周期到達/周期抽選までの短縮として扱う。

resetPenalties: **PREVIOUS_CYCLE_PROGRESS_NOT_CARRIED_AS_IS_ON_SETTING_CHANGE / OTHER_PENALTIES_UNVERIFIED**。設定変更後は新たに128G以下の規定Gへセットされるため前日の周期進捗はそのまま継続しない。一方、前日が残り128G未満だった場合に必ず不利になる等の単純評価はできないため、ホール収益上の不利は一律断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、周期表示等による本機固有の設定変更/据え置き判別を直接確定できず。

numericResetData:
- 設定変更後の規定ゲーム数: **128G以下**
- 通常時周期: モード依存、通常ステージ資料では1～255Gの範囲を確認
- 設定変更時モード振り分け: 専用解析項目の存在は確認、具体値UNVERIFIED_AFTER_RESEARCH
- 朝一ART当選保証: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一特定G以内ART当選率: NONE_CONFIRMED_AFTER_RESEARCH
- ガックン等変更判別: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_SINGLE_DIRECT_FOR_RESET_128G_RULE / ANALYSIS_HIGH_FOR_EXISTENCE_OF_MACHINE_SPECIFIC_RESET_MODE_PAGE / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_MODE_NUMBERS_AND_DETECTION

## conflicts

1. **後年5号機まとめの機種混同を不採用**
   - 一部後年ページに「2012年11月」「AT純増約2.8枚/G」等、本機の山佐公式2011年11月・ART約2.0枚/Gと明確に矛盾する記述を確認。
   - 同ページ内の機械割だけは正しい系列と一致するが、機種仕様混同があるため当該ページは出典に採用しない。
2. **『天井』用語の定義**
   - P-WORLD/グリーンべるとは周期・モード上の天井概念を記載。
   - 後年解析整理は「ゲーム数天井は非搭載」と記載しつつ、設定変更後の規定ゲーム数128G以下を記載。
   - 単一の救済ゲーム数天井と、内部モード別の周期上限は定義が異なるためCONFLICTではなく **DEFINITION_DIFFERENCE_CYCLE_CEILING_VS_SINGLE_GAME_CEILING** として分離。

## missingFields

- formalModelName
- approvalNumber
- baseGamesPer50
- 据え置き時の周期G数/内部モード保持
- 単純電源OFF→ON時の周期G数/内部モード/液晶状態
- 設定変更後モード振り分けの具体数値
- resetDetection（ガックン/出目/表示等）

## sources

取得日: **2026-09-05**

1. 山佐ネクスト公式「パチスロ『黒ひげ危機一発』」 — https://yamasa-next.co.jp/model_khg/
   - 5号機、ARTタイプ、2011年11月稼働、ART30G起点～最大1000G、純増約+2.0枚/G、SUPER 250G。
   - reliability: OFFICIAL
2. グリーンべると「山佐、『黒ひげ危機一発』をパチスロ化」（2011-11-07） — https://web-greenbelt.jp/00002423/
   - ボーナス非搭載ART、純増約+2.0枚/G、11/20納品開始予定、周期/内部モード別天井構造、30～1000G、SUPER 250G。
   - reliability: INDUSTRY
3. K-Navi「パチスロ『黒ひげ危機一発』」 — https://p-kn.com/slot/1528/
   - ホール導入開始2011-11-21、ART約1/70、純増約+2.0枚/G、30～1000G、設定変更後の挙動/モード移行率(設定変更後)専用解析項目の存在。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ旧解析「スペック」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/183/a.php
   - ART1セット30G、約+2枚/G、30G約60枚、30→60→120→250→500→750→1000G、ゲーム数管理/ステージ周期示唆。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ旧解析「ART初当たり確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/183/h.php
   - 設定1～6 ART初当たり1/75.5～1/58.4、PAYOUT 96.2～107.6%。
   - reliability: ANALYSIS_HIGH
6. P-WORLD「パチスロ『黒ひげ危機一発』」 — https://www.p-world.co.jp/machine/database/6535
   - 山佐、5号機ART/BR非搭載、ART30～1000G・約+2.0枚/G、SUPER 250G、天井/周期構造の補助確認。
   - reliability: INDUSTRY_DATABASE
7. pacnk「パチスロ 黒ひげ危機一発 設定判別ツール」 — https://pacnk.com/slot/tools/sh_kurohigekikiippastu.html
   - 機械割96.20～107.60%の照合、ゲーム数天井非搭載、**設定変更後は規定ゲーム数128G以下に再セット**、ART後内部モード移行、ステージ別周期示唆。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## researchNotes

- resetBehavior欠損探索では「パチスロ『黒ひげ危機一発』 / 黒ひげ危機一発 / 黒ヒゲ危機一発 / 山佐」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / 128G / モード移行率 / ガックン」を組み合わせて探索。
- K-Navi上に本機専用「設定変更後の挙動」「モード移行率(設定変更後)」項目の存在を確認し、別系統の後年解析で128G以下再セットを直接回収した。
- 据え置き・純電断・変更判別は十分な再探索後も本機固有の直接資料を確定できずUNVERIFIED_AFTER_RESEARCH。
- 実機完全再現に不要な通常時全モード移行表、全周期振り分け、ART中ストック詳細は収集していない。
