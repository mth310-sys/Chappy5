# マジックスパイス

machineName: マジックスパイス
manufacturer: 岡崎産業（STLYブランド）
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-10-19（パチビーの導入日基準。グリーンべると当時記事は2009-10-18納品開始予定）
generation: 5号機
systemType: ボーナス + BRT（ボーナスリプレイタイム / ART・パンク回避型）
coreStatus: COMPLETE_CORE_WITH_PAYOUT_DEFINITION_CONFLICT_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

### P-WORLD / パチビー掲載系列

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 98.6% |
| 3 | 100.7% |
| 4 | 102.7% |
| 5 | 104.6% |
| 6 | 106.2% |

### パチマガスロマガ旧解析・シミュレート系列

| 設定 | PAYOUT |
|---:|---:|
| 1 | 96.01% |
| 2 | 98.41% |
| 3 | 100.95% |
| 4 | 102.08% |
| 5 | 103.50% |
| 6 | 105.12% |

- 定義/シミュレーション条件差の可能性があるため平均せずCONFLICT保持。

confidence: INDUSTRY_DATABASE + ANALYSIS_OLD_MAJOR_CONFLICT

## initialHitBySetting

| 設定 | PSB | SB | PSB+SB | MG | ボーナス合算 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/1236.5 | 1/590.4 | 1/399.6 | 1/46.2 | 1/41.4 |
| 2 | 1/1092.3 | 1/550.7 | 1/366.1 | 1/46.2 | 1/41.0 |
| 3 | 1/949.8 | 1/500.3 | 1/327.7 | 1/46.2 | 1/40.5 |
| 4 | 1/885.6 | 1/372.4 | 1/262.1 | 1/46.2 | 1/39.2 |
| 5 | 1/851.1 | 1/326.0 | 1/235.7 | 1/46.2 | 1/38.6 |
| 6 | 1/840.2 | 1/300.6 | 1/221.4 | 1/46.2 | 1/38.2 |

- P-WORLD/パチビーとパチマガスロマガ旧解析で主要数値が一致。
- MGは全設定共通1/46.2。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

パチマガスロマガ旧解析の1000円あたりゲーム数:

| 設定 | 50枚/1000円あたり |
|---:|---:|
| 1 | 29.2G |
| 2 | 29.3G |
| 3 | 29.4G |
| 4 | 29.8G |
| 5 | 30.2G |
| 6 | 30.9G |

confidence: ANALYSIS_SINGLE_OLD_MAJOR

## netIncrease

- BRT「MAGIC RUSH」中は約 **+0.6枚/G**（P-WORLD/パチビー）。
- PSB後はBRTロング。次回SB当選まで継続し、メーカー発表では平均1000枚。
- SB後はBRTショート。パンクリプレイ成立まで継続し、メーカー発表では平均150枚。
- グリーンべると当時記事では設定1のロング転落（SB）率を約1/600、ショートのパンク率を約1/75と説明。

confidence: MANUFACTURER_RELEASE + INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE

## basicPayout

- PREMIUM SPICE BONUS（PSB）: 約47枚。
- SPICE BONUS（SB）: 約47枚。
- MAGIC GAME（MG）: BRT中MAX約42枚。グリーンべると当時記事では通常時約12枚/BRT中約42枚。

confidence: MANUFACTURER_RELEASE + INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE

## modeSpecificMinimumData

- 業界初を謳ったBRT（ボーナスリプレイタイム）搭載。
- PSB成立後はBRTロング、SB成立後はBRTショートへ。
- ロングはSB当選まで、ショートはパンクリプレイ成立まで継続。
- BRT中は押し順ナビでパンク回避/出玉増加を行う。
- 通常ゲーム数到達型の固定天井は、今回確認した公式発表・当時業界記事・P-WORLD・パチマガスロマガ旧解析で公開値を確認できなかった。推測しない。
- ゲーム数解除モードは確認されない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。BRTロング/ショート滞在中、PSB/SB後状態、パンク回避状態を含む設定変更時の本機固有処理を直接確認できず。一般的な5号機挙動で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のBRT状態・パンク状態等の引継ぎを本機固有に明記する資料を回収できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のBRT内部状態、表示/ランプ、パンク状態の保持・復帰を直接確認できず。

gameCounterReset: **NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED**。通常ゲーム数到達型の固定天井/規定ゲーム数管理は確認されない。

ceilingAfterReset: **NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED**。設定変更専用短縮天井の公開値も確認されない。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_FOR_BRT_STATE**。BRTロング/ショート滞在中の設定変更・電源再投入処理は本機固有資料未回収。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用BRT/CZ優遇、短縮天井、当選率上昇などの公開朝一恩恵は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`マジックスパイス / 岡崎産業 / STLY / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / BRT / マジックラッシュ / パンク` を組み替え、当時解析・業界DB・回顧資料まで再探索したが本機固有の変更判別要素を直接確認できず。

numericResetData:
  normalGameCountCeiling: NOT_APPLICABLE_NO_FIXED_GAME_COUNT_CEILING_CONFIRMED
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NOT_APPLICABLE_NO_MODE_CONFIRMED
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_BRT_STATE_CHANGE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 機種名/メーカー/ブランドと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 宵越し / ガックン / BRT / MAGIC RUSH / パンク` を組み替えて再探索。
- メーカー発表、グリーンべると当時記事、P-WORLD、パチビー、パチマガスロマガ旧解析、後年回顧/アプリ紹介を横断。
- 性能コアは複数系統で高整合。設定変更・据え置き・電断のBRT内部状態だけは本機固有直接資料を確定できず、推定しない。

## conflicts

- releaseDateDefinition: グリーンべると当時記事は **2009-10-18納品開始予定**、パチビーは **2009-10-19導入日**。物流開始とホール導入の定義差として両方保持し、主releaseDateは2009-10-19。
- payoutDefinition: P-WORLD/パチビー掲載系列 **96.5〜106.2%** と、パチマガスロマガ旧解析シミュレート系列 **96.01〜105.12%** に差。平均せず別系列保持。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterResetForBRT: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると/P-WORLD業界ニュース「ボーナスの連続を楽しむ新システム『BRT』搭載」2009-09-10 — https://news.p-world.co.jp/articles/3601/greenbelt — BRT構造、PSB/SB/MG、設定1合算、ロング/ショート継続条件、設定1転落/パンク率、2009-10-18納品開始予定 — reliability: INDUSTRY_CONTEMPORARY
2. 岡崎産業プレスリリース（DreamNews転載）2009-10-22 — https://www.dreamnews.jp/press/0000010479/ — BRTロング/ショート、平均1000枚/150枚、押し順ナビ — reliability: MANUFACTURER_RELEASE
3. パチビー「マジックスパイス」 — https://www.pachibee.jp/machines/index/209090070 — 2009-10-19導入、設定別PSB/SB/MG・合算、機械割96.5〜106.2%、約+0.6枚/G — reliability: INDUSTRY_DATABASE
4. P-WORLD「マジックスパイス」 — https://www.p-world.co.jp/machine/database/5697 — 岡崎産業、5号機ART/パンク回避、PSB/SB/MG、設定別合算・機械割、約+0.6枚/G — reliability: INDUSTRY_DATABASE
5. パチマガスロマガ「マジックスパイス 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/60/c.php — 1000円あたり29.2〜30.9G — reliability: ANALYSIS_SINGLE_OLD_MAJOR
6. パチマガスロマガ「マジックスパイス ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/60/h.php — PSB/SB/MG/合算、シミュレートPAYOUT96.01〜105.12% — reliability: ANALYSIS_OLD_MAJOR
7. 4Gamer（サミーネットワークス発表転載）2010-09-15 — https://www.4gamer.net/games/021/G002122/20100915075/ — 岡崎産業5号機、RT機、BRTロングがSBまで継続 — reliability: RETROSPECTIVE_MANUFACTURER_DISTRIBUTION
