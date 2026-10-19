# 快盗天使ツインエンジェル

machineName: 快盗天使ツインエンジェル
manufacturer: トリビー
releaseDate: 2006-10
generation: 5号機初期
systemType: ボーナス + RT / A+RT

## payoutRateBySetting

CONFLICT

### HAZUSE
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.0% |
| 2 | 99.2% |
| 3 | 102.1% |
| 4 | 104.1% |
| 5 | 105.8% |
| 6 | 108.3% |

### 5号機クロニクル
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 100.0% |
| 3 | 102.7% |
| 4 | 104.3% |
| 5 | 105.5% |
| 6 | 107.4% |

平均化しない。

## initialHitBySetting

| 設定 | BIG合成 | REG |
|---:|---:|---:|
| 1 | 1/407.0 | 1/1260.3 |
| 2 | 1/372.7 | 1/1260.3 |
| 3 | 1/346.7 | 1/1260.3 |
| 4 | 1/336.0 | 1/1260.3 |
| 5 | 1/330.9 | 1/1260.3 |
| 6 | 1/319.6 | 1/1260.3 |

信頼度: ANALYSIS_SINGLE（HAZUSE）

## baseGamesPer50

1000円（50枚）あたり約41〜44G。

信頼度: ANALYSIS_SINGLE

## netIncrease

RT搭載。RTの1Gあたり純増枚数: UNVERIFIED

## basicPayout

- HARUKA BONUS（赤7）: 純増約210枚
- AOI BONUS（青7）: 純増約310枚
- REG（黒BAR）: 純増約48枚

信頼度: ANALYSIS_SINGLE

## modeSpecificMinimumData

- トリビー初の5号機
- 5ライン / 3枚掛け専用
- ボーナス3種類
- 小役とボーナスの同時抽選
- ボーナス当選の約70%が同時抽選とする当時攻略資料あり

## resetBehavior — v0.7 QA 2026-09-02

settingChangeBehavior: CONFIRMED_CZ_START。パチマガスロマガ旧解析がチャンスゾーン突入契機に「設定変更後」を明記。設定変更後はRT「エンジェルタイム」突入抽選を受けるチャンスゾーンから開始する。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き/宵越し時にチャンスゾーン間1000PカウンタやRT状態をどう引き継ぐかの本機固有直接記述を確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ONのみでCZ/RT状態・1000P進捗がどう復帰するかを直接確定できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常救済はチャンスゾーン終了後1000Pで再度CZ突入と確認したが、設定変更時に前日の1000P進捗を引き継ぐかクリアするかを直接明記する資料を回収できず。
ceilingAfterReset: RESET_STARTS_IN_CZ。通常時の救済到達条件はCZ終了後1000Pだが、設定変更直後はG数短縮というより直接CZスタートとなる。よって朝一は通常1000P待ちを経ずCZ抽選を受ける。
modeAfterReset: NOT_APPLICABLE_NO_SEPARATE_GAME_COUNT_MODE_CONFIRMED。公開された通常A/B等のゲーム数モードは確認できず。
stateAfterReset: CONFIRMED_CHANCE_ZONE。設定変更後はチャンスゾーン状態。
advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）
resetBenefits: CONFIRMED_IMMEDIATE_CHANCE_ZONE。朝一設定変更時はチャンスゾーンから開始し、ベルをリプレイより先に引けばRT突入。通常の特殊3P間以外CZのRT突入期待度は設定1〜6で約51.93% / 51.89% / 52.12% / 52.34% / 52.71% / 53.04%（ボーナス成立も失敗扱いの旧解析値）。設定変更後CZに青7BIG後/REG後の特殊3Pリプレイ高確が適用されるとの記述はないため、朝一比較値として通常CZ系列を保存する。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用の不利要素は確認できず。
resetDetection: PARTIAL_BEHAVIORAL_INFERENCE_ONLY。設定変更後CZスタート自体は確定するが、ガックン/初期出目/液晶表示など外見で確定判別できる本機固有手段は再探索後も確認できず。CZ挙動は変更推測材料になり得るが確定判別とは扱わない。
numericResetData:
  normalCeilingToChanceZone: CZ終了後1000P
  resetStartState: チャンスゾーン
  normalChanceZoneRtEntryExpectation:
    setting1: 51.93%
    setting2: 51.89%
    setting3: 52.12%
    setting4: 52.34%
    setting5: 52.71%
    setting6: 53.04%
  gameCountAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
  resetModeDistribution: NOT_APPLICABLE_NO_SEPARATE_MODE_CONFIRMED
  resetSpecificMorningHitRate: 上記CZ→RT突入期待度を朝一変更時の比較可能値として使用。ボーナス成立を失敗扱いする解析定義に注意。

resetBehaviorQA: PARTIAL_HIGH_VALUE_RESET_CZ_START_AND_PUBLIC_CZ_RT_ENTRY_NUMBERS_RECOVERED_CARRYOVER_POWER_CYCLE_COUNTER_UNVERIFIED

## sources

取得日: 2026-08-31（resetBehavior QA追加取得: 2026-09-02）

1. HAZUSE「快盗天使ツインエンジェル 機種情報」 — https://hazuse.com/i/data/twin_angel/top.htm — 2006年10月、5号機、ボーナス確率、機械割、1000円あたり約41〜44G、獲得枚数 — reliability: ANALYSIS_SINGLE
2. 5号機クロニクル「トリビー5号機全機種一覧」 — https://5goki.com/trivy — 2006/10、機械割 — reliability: ANALYSIS_SINGLE
3. P-WORLD「2006年10月導入機種一覧」 — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2006-10 — 2006年10月導入機として掲載 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「快盗天使ツインエンジェル RT(エンジェルタイム)」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/01/k.php — 設定変更後/ボーナス後/RT後/CZ終了1000P後のCZ突入、通常CZの設定別RT突入期待度 — reliability: OLD_ANALYSIS_HIGH
5. パチスロ立ち回り講座「か行の機種の天井情報(5号機版)」 — https://crankyseven.com/sp/tenjo-5ka.htm — チャンスゾーン間1000G、CZ突入救済。設定変更欄は空欄のため変更時カウンタ処理の根拠には使用しない — reliability: SECONDARY_CEILING_DATABASE
6. P-WORLD「快盗天使ツインエンジェル」 — https://www.p-world.co.jp/machine/database/4333 — 型式ツインエンジェルR、RTエンジェルタイム搭載 — reliability: ANALYSIS_HIGH_DATABASE

## missingFields

- RTの1Gあたり純増枚数
- RTの基本継続ゲーム数/終了条件の高信頼照合
- 設定別BIG内訳（赤7/青7）
- 設定変更時のチャンスゾーン間1000Pカウンタ処理
- 据え置き時のCZ/RT/ゲーム数引継ぎ
- 単純電源OFF→ON時のCZ/RT/ゲーム数復帰
- ガックン/初期出目/表示による設定変更確定判別

## conflicts

- 機械割がHAZUSE（96.0〜108.3%）と5号機クロニクル（97.5〜107.4%）で明確に異なる。平均化せずCONFLICTとして保持。

## resetBehaviorResearchNote

- 初代2006年機とツインエンジェル2/3/BREAKを分離し、後継機の777G短縮天井・ナビストック・内部モード仕様を初代へ混入していない。
- 「快盗天使ツインエンジェル / ツインエンジェルR / トリビー / 2006」と設定変更/リセット/朝一/据え置き/電源OFF ON/天井/1000P/RT/CZ/ガックンを組み替えて再探索。
- 旧パチマガの初代専用ページから設定変更後CZ開始を直接回収できたため、この項目はUNVERIFIEDにせず保存した。
