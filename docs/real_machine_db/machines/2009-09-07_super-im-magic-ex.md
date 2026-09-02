# スーパーアイムマジックEX

machineName: スーパーアイムマジックEX
manufacturer: パラジェーピー（PARA JP）
formalModelName: スーパーアイムマジック EX（検定通過機種名として確認）
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-09-07（当時導入一覧。複数後年DBは2009年9月の月精度）
generation: 5号機
systemType: ノーマル / ボーナス主体 / 完全告知 / BIG+REG
coreStatus: COMPLETE_CORE_WITH_PAYOUT_CONFLICT_AND_RESET_DETECTION_UNVERIFIED

## payoutRateBySetting

機械割は資料系列が大きく異なるため平均せずCONFLICT保持する。

### 系列A — 5号機クロニクル / pacnk系

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8%（pacnk 96.87%） |
| 2 | 97.7%（pacnk 97.71%） |
| 3 | 100.0%（pacnk 99.98%） |
| 4 | 102.7% |
| 5 | 106.4%（pacnk 106.44%） |
| 6 | 108.1%（pacnk 108.12%） |

confidence: RETROSPECTIVE_DB_CROSSCHECK

### 系列B — 旧パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---:|---:|
| 1 | 95.42% |
| 2 | 96.42% |
| 3 | 98.47% |
| 4 | 100.84% |
| 5 | 104.22% |
| 6 | 105.79% |

confidence: OLD_ANALYSIS_HIGH

## initialHitBySetting

旧パチマガスロマガの精密値。

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/287.44 | 1/455.11 | 1/176.17 |
| 2 | 1/281.27 | 1/442.81 | 1/172.01 |
| 3 | 1/281.27 | 1/348.60 | 1/155.67 |
| 4 | 1/271.93 | 1/321.25 | 1/147.27 |
| 5 | 1/268.59 | 1/268.59 | 1/134.30 |
| 6 | 1/266.41 | 1/268.59 | 1/133.75 |

confidence: OLD_ANALYSIS_HIGH_WITH_RETROSPECTIVE_DB_CROSSCHECK

## baseGamesPer50

旧パチマガスロマガ掲載「1000円あたりのゲーム数」。

| 設定 | 50枚あたり |
|---:|---:|
| 1 | 35.91G |
| 2 | 35.91G |
| 3 | 35.92G |
| 4 | 36.15G |
| 5 | 36.87G |
| 6 | 37.93G |

confidence: OLD_ANALYSIS_HIGH

## netIncrease

NOT_APPLICABLE（通常時に出玉増加用RT/ART/ATを持つ機種として扱う根拠なし。ノーマルタイプ）

## basicPayout

旧パチマガスロマガ:
- BIG: 約312枚（規定払い出し345枚）
- REG: 約104枚（規定払い出し105枚）

confidence: OLD_ANALYSIS_HIGH

## modeSpecificMinimumData

- 5ライン完全告知のノーマルタイプ。
- BIG/REGと小役同時成立・単独成立を持つ。
- pacnkは天井機能非搭載と明記。旧パチマガスロマガも「攻め時・ヤメ時→特にナシ」。
- 通常ゲーム数モード、CZ、ART/AT、ゲーム数到達型天井は比較対象上 `NOT_APPLICABLE / NONE_CONFIRMED`。

## resetBehavior — v0.7

settingChangeBehavior: SPECIAL_RESET_BENEFIT_UNVERIFIED。純正ノーマル仕様として設定変更専用モード/天井/CZ/ARTを示す確定解析は今回確認できず。変更後は設定別ボーナス・小役確率の対象となるが、公開された本機固有の追加処理は確定できない。

carryOverBehavior: GAME_COUNT_CARRYOVER_NOT_APPLICABLE_FOR_CEILING。天井非搭載のため前日ゲーム数の天井狙い上の引継ぎは非該当。ボーナス成立中など特殊状況の電源処理は物差し用途外かつ直接資料未回収。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONと設定変更の差、出目/告知状態等の本機固有直接資料を確認できず。

gameCounterReset: NOT_APPLICABLE_FOR_CEILING（天井非搭載）

ceilingAfterReset: NOT_APPLICABLE（通常天井・リセット短縮天井なし）

modeAfterReset: NOT_APPLICABLE_FOR_PUBLIC_GAME_COUNT_MODE。公開された通常ゲーム数モード/朝一専用モードを確認できず。

stateAfterReset: NO_PUBLIC_CZ_ART_STATE_APPLICABLE。ノーマル機でCZ/ART/AT内部状態の対象なし。本機固有の設定変更時ボーナス成立状態等は未確認のため推測しない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_FOR_STOCK_MACHINE_AFTER_RESEARCH。後年の個人所有実機記事に「リセットすると高確率で100G以内のモーニング」という記述があるが、同じ記事系列は当該個体について裏物/基板改変を疑う文脈を明記しており、純正実機のリセット恩恵として採用しない。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、告知ランプ等による設定変更/据え置き判別の純正機固有確定資料を今回確認できず。

numericResetData:
  publishedMorningModeDistribution: NOT_APPLICABLE_OR_NONE_CONFIRMED
  publishedResetHitRate: UNVERIFIED_FOR_STOCK_MACHINE
  resetSpecificCeiling: NOT_APPLICABLE
  resetBenefitRate: NONE_CONFIRMED
  anecdotalModifiedMachineMorning: "100G以内のモーニングが高確率との後年個人実機記述あり。ただし改変/裏物文脈のため純正値としてREJECTED_EVIDENCE"

resetBehaviorQA: COMPLETE_FOR_CEILING_MODE_SCOPE_WITH_POWER_CYCLE_AND_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `スーパーアイムマジックEX / スーパーアイムマジック EX / パラジェーピー / PARA JP / 検定 / 型式` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / モーニング` を組み替えて再探索。
- 当時導入一覧、旧パチマガスロマガ、5号機クロニクル、pacnk、後年の実機所有回顧を横断。
- 天井非搭載、ノーマルタイプ、性能コアは確定可能。純正機の設定変更専用恩恵・ガックン・電断差は確定できず。
- 「リセット後100G以内モーニング」の個人実機情報は、裏物/改変基板の可能性が明記されるため純正resetBehaviorには採用しない。

## sources

取得日: 2026-09-03

1. 最新5号機パチスロ無料攻略解析情報ブログ「最新スロットホール導入日掲載！」2009-08-31 — https://slotkaiseki777.blog102.fc2.com/blog-entry-547.html — 2009-09-07導入予定、パラジェイピー — reliability: CONTEMPORARY_INTRODUCTION_LIST
2. パチマガスロマガ「スーパーアイムマジックEX 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/parajp_slot/04/a.php — 完全告知、BIG約312枚、REG約104枚 — reliability: OLD_ANALYSIS_HIGH
3. パチマガスロマガ「スーパーアイムマジックEX ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/parajp_slot/04/h.php — 設定別BIG/REG/合算、シミュレートPAYOUT — reliability: OLD_ANALYSIS_HIGH
4. パチマガスロマガ「スーパーアイムマジックEX 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/parajp_slot/04/c.php — 1000円あたり35.91〜37.93G — reliability: OLD_ANALYSIS_HIGH
5. パチマガスロマガ「スーパーアイムマジックEX」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/parajp_slot/04/parajp_slot_04.php — 攻め時・ヤメ時「特にナシ」 — reliability: OLD_ANALYSIS_HIGH
6. 5号機クロニクル「パラジェーピー5号機全機種一覧」 — https://5goki.com/parajp — 2009/9、機械割96.8〜108.1% — reliability: RETROSPECTIVE_MACHINE_DB
7. pacnk「スーパーアイムマジックEX 設定判別ツール」 — https://pacnk.com/slot/tools/sh_spimmagic.html — BIG/REG、機械割96.87〜108.12%、天井非搭載 — reliability: RETROSPECTIVE_ANALYSIS_DB
8. Q&Aメモ「パラジェーピーの検定通過機種」 — https://q-and-a.hatenablog.com/entry/2016/10/26/230322 — 2009-08-06にスーパーアイムマジック EX検定通過の整理 — reliability: RETROSPECTIVE_SINGLE
9. レトロふぁんた「倉庫で、スーパーアイムマジックEX」 — https://ameblo.jp/fbsc/entry-12792304679.html — リセット後100G以内モーニングの体験記。ただし裏物/改変疑いの文脈のため純正解析証拠として不採用 — reliability: ANECDOTAL_REJECTED_FOR_STOCK_RESET_SPEC
10. レトロふぁんた「スーパーアイムマジックEX 解説」 — https://ameblo.jp/fbsc/entry-12868704335.html — 設定6機械割108%との回顧、個体の異常挙動/改変疑い文脈 — reliability: ANECDOTAL_ONLY

## missingFields

- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- stock-machine setting-change specific behavior beyond ordinary setting probabilities: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- stock-machine published reset/morning hit-rate numeric: UNVERIFIED_AFTER_RESEARCH

## conflicts

- payoutRate: 5号機クロニクル/pacnk系は約96.8〜108.1%、旧パチマガスロマガのシミュレート値は95.42〜105.79%。設定6で約2.3pt差があり単純丸めではない。算出条件/定義差を解消できないため平均せず両系列を保持。
- retrospective reset anecdote: 後年所有者はリセット後100G以内のモーニングを高頻度と記述するが、同じ個体/記事系列に裏物・基板改変を疑う説明がある。純正機のresetBenefitsとしては採用せずREJECTED_EVIDENCEとする。
