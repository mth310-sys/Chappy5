# どんまい!!ちゅ～吉

machineName: どんまい!!ちゅ～吉
manufacturer: ジェイピーエス（JPS）
formalModelName: ドンマイチュウキチA
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-11-02（ALL7導入予定） / 2009-11（5号機クロニクル）
generation: 5号機
systemType: A+ART / BIG+REG + 押し順ART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.5% |
| 3 | 101.5% |
| 4 | 104.4% |
| 5 | 108.3% |
| 6 | 112.4% |

- 5号機クロニクルのJPS全機種一覧で設定1〜6を取得。
- 後年の実機配信記録にも同一系列が残るため整合確認。ただし後者はユーザー生成情報であり、主根拠は5号機クロニクルとする。

confidence: ANALYSIS_HIGH_MULTISOURCE_WITH_RETROSPECTIVE_CORROBORATION

## initialHitBySetting

### ボーナス合算

| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/88.5 |
| 2 | 1/86.6 |
| 3 | 1/84.8 |
| 4 | 1/81.9 |
| 5 | 1/79.1 |
| 6 | 1/76.5 |

- P-WORLD、パチトラ、当時グリーンべるとで設定1・6端値を含め整合。
- 設定別ART初当たり確率は、実機完全再現用の内部抽選を追わず、今回の公開資料横断では比較可能な設定別直接値を確定できなかったため `UNVERIFIED_AFTER_RESEARCH`。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

- 約38.4G / 1000円（20円貸しで50枚相当）。
- 後年の実機配信スペック記載で全設定共通38.4G/1000円を確認。
- 旧主要解析の直接表を今回回収できなかったため、信頼度は単一回顧値として保持し、推定計算で補正しない。

confidence: ANALYSIS_SINGLE_RETROSPECTIVE_REAL_MACHINE

## netIncrease

- ART「マンモスタイム」: 約+2.0枚/G。
- 1セット20G / 40G / 80G。
- 最高継続率90%以上。
- ART中のボーナス後もART継続、ボーナス当選時に継続率格上げ抽選あり。

confidence: INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE_MULTISOURCE

## basicPayout

- 赤7BIG: 純増約100枚。
- 白7BIG: 純増約50枚。
- ちゅ～ちゅ～ボーナス（REG系）: 純増約50枚。

confidence: INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE_MULTISOURCE

## modeSpecificMinimumData

- 通常時には高確率 / 低確率の内部状態があり、小役等で移行することを当時グリーンべるとが明記。
- ART「マンモスタイム」はボーナスやチャンスゾーン等を契機に突入する押し順ART。
- ARTは20G / 40G / 80G単位、最高継続率90%以上。
- 通常ゲーム数によるボーナス/ART確定天井は、P-WORLD・当時業界記事・旧解析索引・後年DBを横断しても今回直接確認できず、`NONE_CONFIRMED_AFTER_RESEARCH` とする。存在しないと断定するための直接一次記載までは未回収。
- 設定別ART初当たりは `UNVERIFIED_AFTER_RESEARCH`。

confidence: INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE / PARTIAL_FOR_ART_INITIAL_HIT_AND_CEILING_EXPLICIT_NEGATIVE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機固有の設定変更時に、高/低確状態・ART/CZ状態・継続状態をどのように初期化/再抽選するかの直接本文を回収できず。通常時に高/低確状態が存在するため、他機種の一般論から初期状態を推定しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の高/低確状態、ART/CZ進行、ART継続状態の保持可否を本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の高/低確状態、ART/CZ進行、表示・出目等の扱いを直接確定できず。

gameCounterReset: **NO_NORMAL_GAME_NUMBER_CEILING_CONFIRMED / OTHER_PROGRESS_COUNTERS_UNVERIFIED**。公開資料で通常ゲーム数天井を確認できなかったため天井カウンタのリセット/引継ぎ値は取得対象なし。ただしCZ/ART内部進行の電断・変更時処理は未確認。

ceilingAfterReset: **NO_RESET_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH**。朝一短縮天井・設定変更専用天井数値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に高/低確状態が存在することは確認済みだが、設定変更時の振り分け・朝一専用モードは直接資料未確認。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高/低確、ART/CZ状態、ART継続状態の設定変更時処理を確定できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用高確率、短縮天井、ART/CZ優遇、専用当選率等の公開恩恵を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時固有の不利要素を確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶初期ステージ、ランプ、ゲーム数挙動等による設定変更/据え置き判別を本機固有の直接資料で確定できず。

numericResetData:
  normalCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_MACHINE_SPECIFIC_RESET_TEXT_UNRECOVERED_AFTER_MULTIPATH_RESEARCH

resetBehaviorResearchNote:
- 表記揺れ `どんまい!!ちゅ～吉 / どんまいちゅ～吉 / どんまいちゅー吉 / ドンマイチュウキチA / JPS / ジェイピーエス` を使用。
- `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電源オンオフ / 天井 / 天井短縮 / 高確 / 低確 / モード / ART / ストック / ガックン / 初期出目` を組み替えて再探索。
- 当時グリーンべると、P-WORLD、パチトラ、旧パチマガスロマガ索引、5号機クロニクル、実機回顧/配信記録まで横断。
- 旧パチマガ系には本機の「攻め時・ヤメ時・設定変更時」専用項目の存在までは確認できたが、今回その具体本文を回収できなかった。存在だけから挙動を推定しない。

## conflicts

- 現時点で主要性能コアの数値競合は確認なし。
- releaseDateはALL7の具体日2009-11-02を主値、5号機クロニクルは2009-11月精度。定義差ではなく精度差として保持。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingSpecificARTInitialHit: UNVERIFIED_AFTER_RESEARCH
- explicitNormalCeilingNegativeStatement: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- publishedMorningNumericRates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「新生JPSから、遊べる本格ART機が登場」2009-09-16 — https://news.p-world.co.jp/articles/3611/greenbelt — JPS発表会、純増2枚/G、3種ボーナス、合算設定1/6、ART20/40/80G、最高継続率90%以上、高/低確状態 — reliability: INDUSTRY_CONTEMPORARY
2. P-WORLD「どんまい!!ちゅ～吉」 — https://www.p-world.co.jp/machine/database/5708 — JPS、5号機ART、約2枚/G、ボーナス約100/50/50枚、設定別合算 — reliability: INDUSTRY_DATABASE
3. パチトラ「どんまい!!ちゅ～吉」 — https://p-tora.com/i2283a4/ — 型式名ドンマイチュウキチA、設定別合成確率、ART搭載 — reliability: INDUSTRY_DATABASE
4. ALL7「2009年11月の導入機種一覧」 — https://www.all7.jp/plans/index/2009/11/10 — JPS、導入予定2009-11-02 — reliability: INDUSTRY_SCHEDULE_DATABASE
5. 5号機クロニクル「JPS 5号機全機種一覧」 — https://5goki.com/jps — 2009/11、機械割97.5〜112.4% — reliability: RETROSPECTIVE_ANALYSIS_DATABASE
6. A-SLOT「JPS どんまい!!ちゅ～吉」 — https://www.a-slot.com/SHOP/jps18.html — 赤7約100枚、白7約50枚、ちゅ～ちゅ～ボーナス約50枚、ART約2.0枚/G — reliability: RETROSPECTIVE_MACHINE_DEALER
7. nicozon「どんまい!!ちゅ～吉」実機配信索引 — https://www.nicozon.net/tag/%E3%81%A9%E3%82%93%E3%81%BE%E3%81%84%21%21%E3%81%A1%E3%82%85%EF%BD%9E%E5%90%89/v/d — 機械割系列、合算、コイン持ち全設定38.4G/1000円 — reliability: USER_GENERATED_RETROSPECTIVE_REAL_MACHINE
8. パチマガスロマガ旧解析 本機索引 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/20/jps_slot_20.php — 本機専用解析項目（攻め時・ヤメ時・設定変更時等）の存在確認、具体本文は今回未回収 — reliability: ANALYSIS_OLD_MAJOR_INDEX
