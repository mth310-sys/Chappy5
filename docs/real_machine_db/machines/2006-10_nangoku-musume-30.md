# 南国娘30

machineName: 南国娘30
manufacturer: オリンピア
releaseDate: 2006-10
generation: 5号機初期
systemType: A+RT / 30Φ
coreStatus: COMPLETE_CORE_WITH_30PHI_VARIANT_DIRECT_ANALYSIS

## payoutRateBySetting

パチマガスロマガ・シミュレート値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.09% |
| 2 | 99.66% |
| 3 | 101.73% |
| 4 | 103.44% |
| 5 | 105.92% |
| 6 | 108.77% |

信頼度: OLD_ANALYSIS_HIGH

## initialHitBySetting

パチマガスロマガ南国娘30の直接解析値:

| 設定 | BIG | REG |
|---:|---:|---:|
| 1 | 1/264.26 | 1/528.52 |
| 2 | 1/252.06 | 1/504.12 |
| 3 | 1/242.73 | 1/485.45 |
| 4 | 1/235.74 | 1/471.48 |
| 5 | 1/225.99 | 1/451.97 |
| 6 | 1/219.92 | 1/439.84 |

P-WORLD 25Φ版の丸め値とも整合。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ南国娘30の直接解析値:

| 設定 | 50枚あたりG数 |
|---:|---:|
| 1 | 36.15G |
| 2 | 36.65G |
| 3 | 37.00G |
| 4 | 37.30G |
| 5 | 37.74G |
| 6 | 39.21G |

信頼度: OLD_ANALYSIS_HIGH

## netIncrease

- BIG後50GのRT
- RTはボーナス成立では終了せず、ラスト8Gで成立ボーナスを告知
- RT中リプレイ約1/1.25
- RT中ハズレ約1/21.85
- RT純増: 約+0.6枚/G（南国娘30直接解析）

## basicPayout

- BIG: 290枚を超える払い出しで終了 / 純増約205枚
- REG: 140枚を超える払い出しで終了 / 純増約105枚

信頼度: ANALYSIS_HIGH（パチマガスロマガ南国娘30）

## modeSpecificMinimumData

- 5号機 / 5ライン / 3枚掛け専用
- 30Φ派生
- 25Φ版「南国娘」との差はスイカ確率のみと当時攻略資料に明記
- BIG後50G RT
- 通常ゲーム数到達型の天井は公開解析で確認されない

## resetBehavior — v0.7 QA 2026-09-02

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時にBIG後50G RTの残G・内部RT状態、ボーナス成立後のRT状態、液晶/告知状態がどう処理されるか、本機固有の直接資料を確定できず。一般的な5号機RT挙動から補間しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時にRT残G・内部RT状態をどのように引き継ぐかの直接記述を確認できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみでRT状態・告知/初期出目がどう復帰するか、本機固有資料で確定できず。

gameCounterReset: NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED。公開解析ではBIG後50G RTが中心で、通常G数到達型天井は確認されない。

ceilingAfterReset: NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED。設定変更専用の短縮天井・到達G数は確認されない。

modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED。通常A/B等のゲーム数管理モードは公開資料で確認されない。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。BIG後RT中の設定変更時状態処理を直接資料で確定できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更後のRT付与、朝一高確、短縮天井等の本機固有恩恵は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、告知ランプ、RT挙動などによる本機固有の設定変更/据え置き判別を確定できず。

numericResetData:
  normalGameCountCeiling: NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  normalPostBigRtLength: 50G
  normalRtNetIncrease: 約+0.6枚/G
  resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  resetStateDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  morningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_RESEARCH_PASS_NO_GAME_COUNT_CEILING_OR_RESET_BENEFIT_FOUND_RT_STATE_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `南国娘30 / 南国娘-30 / オリンピア / 2006` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / 50G / 天井 / ガックン / 初期出目` を組み替えて再探索。
- パチマガスロマガ南国娘30、P-WORLD南国娘2006、旧機種一覧を横断。
- 2020年以降の「南国娘2」「南国育ち30」等は別機種のためresetBehaviorへ混入させていない。
- 本機固有の設定変更/据え置き/単純電断時RT処理は直接資料を確定できず、UNVERIFIEDで保持。

## sources

取得日: 2026-08-31（性能コア再取得・resetBehavior QA追加: 2026-09-02）

1. パチマガスロマガ「南国娘30」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/76/c.php — 30Φ版直接の小役、1000円あたり36.15〜39.21G、RT中リプレイ/ハズレ、約+0.6枚/G — reliability: OLD_ANALYSIS_HIGH
2. パチマガスロマガ「南国娘30」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/76/k.php — 30Φ版直接の設定別BIG/REG、PAYOUT 97.09〜108.77% — reliability: OLD_ANALYSIS_HIGH
3. パチマガスロマガ「南国娘30」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/76/a.php — 5号機、30Φ、25Φ版との差はスイカ確率のみ、BIG後50P RT、BIG/REG払い出し・純増 — reliability: OLD_ANALYSIS_HIGH
4. P-WORLD「南国娘（2006年）」 — https://www.p-world.co.jp/machine/database/4307 — 25Φ版設定別BIG/REGの丸め値を照合用に使用 — reliability: ANALYSIS_HIGH
5. P-WORLD「2006年10月導入機種一覧」 — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2006-10 — 南国娘30を2006年10月導入機として掲載 — reliability: ANALYSIS_HIGH
6. 5号機一覧表 — https://pachisuro100.com/itiran/ — 南国娘=2006/9、南国娘30=2006/10の補助確認 — reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時のBIG後50G RT残G・内部RT状態処理
- 据え置き時のRT状態引継ぎ
- 単純電源OFF→ON時のRT状態・初期表示復帰
- ガックン/初期出目/告知ランプ等による設定変更判別

## conflicts

- なし。旧レコードで未確認だった30Φ単独の機械割・ベース・RT純増はパチマガスロマガ南国娘30直接ページから回収済み。
