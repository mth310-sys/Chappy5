# 魁!!男塾 ～天挑五輪大武會編～

machineName: 魁!!男塾 ～天挑五輪大武會編～
manufacturer: ロデオ（総発売元: フィールズ / Sammy・RODEO表記）
releaseDate: 2013-02-04
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi機種ページおよび2012-12-20展示会記事はホール導入2013-02-04予定。グリーンべると/P-WORLD業界記事は納品2013-02-03開始予定。P-WORLD現行DB末尾は2013年01月表記のため月表記競合を保持し、具体日付き当時導入資料を時系列キーに採用。
generation: 5号機
systemType: AT / ボーナス非搭載 / レア役抽選主体 / ゲーム数上乗せ+セットストック+継続率
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## identity

- 型式名: **魁！！男塾2AS**。
- 検定番号: **2S1180**。
- メーカー: ロデオ。
- 当時業界記事でロデオ製、総発売元フィールズ、2012-12-19展示会、2013-02-03納品開始予定を確認。
- confidence: INDUSTRY_PLUS_DATABASE_HIGH

## payoutRateBySetting

### 市場掲載/解析系列

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.3% |
| 3 | 99.8% |
| 4 | 103.4% |
| 5 | 108.7% |
| 6 | 113.8% |

- P-WORLD、当時攻略資料、2-9伝説で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### 別シミュレート系列 — CONFLICT / DEFINITION_DIFFERENCE

| 設定 | シミュレート値 |
|---|---:|
| 1 | 97.40% |
| 2 | 98.56% |
| 3 | 100.24% |
| 4 | 102.82% |
| 5 | 105.09% |
| 6 | 108.44% |

- 2013年当時の天井ハイエナ生活記事に「設定別のシミュレート値」として掲載。
- 設定4～6は市場掲載系列との差が大きく、同一定義とみなして平均しない。
- confidence: CONFLICT_DEFINITION_OR_SIMULATION_CONDITION

## initialHitBySetting

### AT「魁!!RUSH」初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/248.2 |
| 2 | 1/241.1 |
| 3 | 1/231.7 |
| 4 | 1/217.8 |
| 5 | 1/203.3 |
| 6 | 1/184.1 |

- P-WORLD、当時攻略資料、2-9伝説で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 機種名「魁!!男塾 / 魁!!男塾 天挑五輪大武會編 / 魁！！男塾2AS」、メーカー「ロデオ」と「50枚 / 1000円 / 1K / ベース / コイン持ち / 回転数」を組み替え、P-WORLD、HAZUSE、パチマガスロマガ、K-Navi、当時攻略記事、後年DBを横断したが、2013年ロデオ機を明示する比較可能な50枚ベース直接値は今回確定できなかった。
- 2017年ミズホ「SLOT魁!!男塾」は別機種のため混入禁止。

## netIncrease

- AT「魁!!RUSH」: **約+2.8枚/G**。
- 1セット **40G+α**。
- 当時グリーンべると記事、K-Navi展示会記事、P-WORLD、パチマガスロマガで一致。
- confidence: INDUSTRY_PLUS_MULTI_SOURCE

## basicPayout

- ボーナス非搭載。
- AT「魁!!RUSH」基本: **40G+α × 約2.8枚/G**。
- 継続率管理は最高80%、ゲーム数上乗せ・セットストックを併用。
- 上乗せ特化「江田島爆撃モード」: 10G+α。
- 「魁!!乱打 極」はPUSH毎に1G上乗せ、最低99%以上継続と複数資料で確認。
- 実機完全再現用のキャラ別継続率・細部上乗せ抽選は本DB対象外。

## modeSpecificMinimumData

### 天井

- **AT間1499G**で天井AT「魁!!RUSH」発動。
- 天井到達時は **極玉 / 魁!!乱打 極**が付与される。
- AT当選後の前兆中も天井G数をカウントし、AT発動前に1499Gへ到達すれば天井恩恵を受けられるとP-WORLDが明記。
- confidence: DATABASE_HIGH_PLUS_ANALYSIS_MULTI_SOURCE

### 通常内部状態

- 通常時に **通常A / 通常B / 高確 / 超高確**の状態区分が存在する資料系列を確認。
- 朝一設定変更時の振り分けはresetBehaviorへ記録。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE__SETTING_CHANGE_COUNTER_CLEAR_AND_MORNING_STATE_NUMBERS_CONFIRMED__POWER_CYCLE_LCD_CONFIRMED__SUEOKI_INTERNAL_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **天井消化ゲーム数CLEAR**。
- 設定変更後に **内部状態移行抽選**を実施。
- 設定変更後に **決勝ストック抽選**があり、公開値 **15%**。
- 液晶開始ステージは設定変更時にランダム再抽選される資料を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_COUNTER_AND_RESET_NUMBERS

### carryOverBehavior

- 純据え置き時の1499G天井進捗、通常A/B/高確/超高確、決勝ストック等の完全保持契約を「据え置き/宵越し/前日/持ち越し」と組み替えて再探索したが、本機固有で直接明記する高信頼資料は今回確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 当時攻略資料の「宵越し×」は設定変更でカウンタCLEARされる実戦運用上の表現として保持し、それだけから純据え置き時仕様を反対推定しない。

### powerCycleBehavior

- **液晶ステージは単純な電源OFF→ON時もランダム再抽選**されると当時攻略資料が明記。
- したがって「前日と同じ/違う液晶ステージ」単独では据え置き/設定変更判別に使えない。
- 単純電源OFF→ON時の **1499G天井内部カウンタ、通常A/B/高確/超高確、決勝ストック**の保持/再抽選契約は直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で前日天井進捗をクリアし、通常の最大天井 **1499G**を新規カウント。
- 設定変更専用のゲーム数短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更後には決勝ストック15%という別系統の朝一恩恵があるため、天井短縮と混同しない。

### modeAfterReset

- 設定変更時の公開状態振り分け:
  - **通常A 25%**
  - **通常B 48%**
  - **高確 25%**
  - **超高確 2%**
- 2-9伝説で「朝一設定変更後の高確移行率」として掲載される数値系列。2013年当時攻略記事でも内部モード移行抽選の存在を確認。
- 朝一専用の別名称モードは今回確認していない。
- confidence: ANALYSIS_HIGH_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset

- 設定変更後の状態振り分けは上記 **25 / 48 / 25 / 2%**。
- 高確+超高確合計は **27%**。これは単純合算であり、元データ自体は各状態4区分で保存。
- 液晶表示は設定変更時にも電源ON/OFF時にもランダム再抽選されるため、表示ステージと内部状態を同一視しない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後 **15%で決勝ストック**。
- 決勝ストック当選時は朝一早いゲーム数から前兆が始まる公開資料あり。
- 設定変更後の内部状態は高確25% + 超高確2%で、合計27%が高確以上スタート。
- 天井短縮ではなく、朝一のAT契機/状態面の優遇として保持。

### resetPenalties

- 設定変更で前日のAT間1499G天井進捗が消失。

### resetDetection

- 当時攻略資料は **朝一の夕方ステージ移行**や**決勝突入タイミング**を変更推測材料として紹介。
- ただし液晶ステージ自体は設定変更時だけでなく電源OFF→ONでもランダム再抽選されるため、開始ステージ単独の確定判別には使わない。
- 設定変更後の決勝ストック15%由来の前兆開始ゲーム数は資料間で **32Gまたは36G / 72G** と競合。朝一で該当タイミングの決勝前兆は変更推測材料になり得るが、確定判別とは扱わない。
- 本機固有ガックン/初期出目の確定仕様は再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeStateDistribution: **通常A25% / 通常B48% / 高確25% / 超高確2%**。
- settingChangeHighOrSuperHighTotal: **27%**（上記公開値の単純合算）。
- resetFinalStockProbability: **15%**。
- resetFinalStockPreannouncementTiming: **CONFLICT 32G_OR_36G / 72G**。
- settingChangeGameCounter: **CLEAR_CONFIRMED**。
- normalCeilingAfterReset: **1499G**。
- resetSpecificShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- powerCycleLcdStage: **RANDOM_RESELECT_CONFIRMED**。

### numericResetData

- settingChangeGameCounter: CLEAR_CONFIRMED
- settingChangeStateNormalA: 25%
- settingChangeStateNormalB: 48%
- settingChangeStateHigh: 25%
- settingChangeStateSuperHigh: 2%
- settingChangeStateHighOrAbove: 27%
- settingChangeFinalStock: 15%
- finalStockPreannouncementTiming: CONFLICT_32_OR_36G_AND_72G
- ceilingAfterReset: 1499G_NORMAL
- resetSpecificCeilingReduction: NONE_CONFIRMED_AFTER_RESEARCH
- powerCycleLcdStage: RANDOM_RESELECT_CONFIRMED
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: MULTI_SOURCE_FOR_COUNTER_CEILING_AND_AT_CORE__ANALYSIS_HIGH_FOR_MORNING_STATE_AND_FINAL_STOCK__SINGLE_PERIOD_DIRECT_FOR_POWER_CYCLE_LCD__UNVERIFIED_AFTER_RESEARCH_FOR_SUEOKI_INTERNAL_COUNTER_MODE_AND_GAKKUN

## missingFields

- 50枚あたりゲーム数/ベースの比較可能な直接値。
- 純据え置き時の天井カウンタ・内部状態・決勝ストックの完全保持契約。
- 単純電源OFF→ON時の天井カウンタ・内部状態・決勝ストックの保持/再抽選契約（液晶ステージ再抽選のみ確認済み）。
- 本機固有ガックン/初期出目の設定変更判別契約。

## conflicts

1. **CONFLICT_RELEASE_MONTH_2013_01_VS_EXACT_2013_02_04**
   - P-WORLD現行DB末尾: 導入開始2013年01月。
   - K-Navi機種ページ/展示会記事: 2013-02-04ホール導入開始/予定。
   - グリーンべると当時記事: 2013-02-03納品開始予定。
   - 時系列キーは具体日付き当時資料の2013-02-04を採用し、P-WORLD月表記を競合保持。
2. **CONFLICT_PAYOUT_MARKET_VS_SIMULATION**
   - P-WORLD/複数攻略系列: 96.8 / 98.3 / 99.8 / 103.4 / 108.7 / 113.8%。
   - 当時別記事のシミュレート値: 97.40 / 98.56 / 100.24 / 102.82 / 105.09 / 108.44%。
   - 平均せず定義/シミュレーション条件差として双方保持。
3. **CONFLICT_RESET_FINAL_STOCK_PREANNOUNCEMENT_32_VS_36G**
   - 当時天井ハイエナ生活記事: 決勝ストック当選時 **32G目 or 72G目**から前兆開始、1:1。
   - 2-9伝説まとめ: **36G / 72G**目で発動。
   - 32Gと36Gの差を平均/補正せず競合保持。72Gは一致。
4. **SAME_TITLE_COLLISION_2017_MIZUHO**
   - 2017年ミズホ「SLOT魁!!男塾」はA+ARTの別機種。2013年ロデオ機のAT/天井/resetデータへ混入しない。

## sources

取得日: 2026-09-06

1. P-WORLD 機種DB — https://www.p-world.co.jp/machine/database/6954
   - ロデオ、型式「魁！！男塾2AS」、検定番号2S1180、AT初当たり、機械割、40G+α、約2.8枚/G、1499G天井と極玉恩恵。
2. P-WORLD / グリーンべると業界ニュース（2012-12-26） — https://news.p-world.co.jp/articles/5640/greenbelt
   - ロデオ/フィールズ、AT特化、40G+α、純増約2.8枚/G、最高継続80%、2013-02-03納品開始予定。
3. K-Navi 機種ページ — https://p-kn.com/slot/1790/
   - ホール導入開始2013-02-04。
4. K-Navi 展示会速報（2012-12-20） — https://p-kn.com/topics/exhibition/1036/
   - 展示会、2013-02-04導入予定、AT40G+α/約2.8枚/G。
5. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/60/a.php
   - AT40G+α、純増約2.8枚/G、最大80%継続、主要上乗せ構造。
6. HAZUSE — https://hazuse.com/machine/pachislot/2S1180/
   - 型式/検定番号/導入日、1499G天井・極恩恵、AT構造。
7. 2-9伝説まとめ — https://29den.com/otokojyuku/
   - 設定変更で天井Gリセット、朝一状態25/48/25/2%、決勝ストック15%、36G/72G表記、AT初当たり/機械割。
8. 天井ハイエナ生活 当時攻略記事 — https://macerate.seesaa.net/article/318861333.html
   - 設定変更で天井Gリセット、決勝ストック15%、32G/72G前兆開始1:1、内部モード移行抽選、液晶ステージは設定変更時/電源ONOFF時ともランダム再抽選、AT初当たり/機械割。
9. 天井ハイエナ生活 天井・シミュレート記事 — https://macerate.seesaa.net/article/356454701.html
   - 1499G天井、天井期待獲得約1200枚、別シミュレート機械割系列。
10. crankyseven — https://crankyseven.com/otokojuku-tentyo-pc.htm
   - 1499G天井、設定変更で天井到達までのG数クリア、AT初当たり。
