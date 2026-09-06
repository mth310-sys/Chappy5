# パチスロ 交響詩篇エウレカセブン2

machineName: パチスロ 交響詩篇エウレカセブン2
aliases: エウレカセブン2 / エウレカ2
manufacturer: Sammy / サミー
releaseDate: 2013-11-05
releaseDatePrecision: exact_day
modelName: エウレカセブン2ZZ
inspectionNumber: 3S0708

generation: 5号機
systemType: AT / 擬似ボーナス / CZ / ゲーム数管理・モード管理
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- サミーネットワークス当時プレスリリースで2013-11-05のホール導入を明記。
- Sammy公式イベントページも2013-11-04を「導入前夜」とし、翌11-05導入を案内。
- HAZUSEで5号機、メーカーSammy、型式名「エウレカセブン2ZZ」、検定番号「3S0708」、導入開始日2013-11-05を確認。
- K-Naviもホール導入開始2013-11-05。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.5% |
| 3 | 101.5% |
| 4 | 105.1% |
| 5 | 110.1% |
| 6 | 113.4% |

- K-Navi系掲載値、pacnk、みんスロで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 擬似ボーナス + AT 合成初当たり

| 設定 | 合成初当たり |
|---|---:|
| 1 | 約1/162 |
| 2 | 約1/156 |
| 3 | 約1/154 |
| 4 | 約1/136 |
| 5 | 約1/131 |
| 6 | 約1/115 |

- K-Navi / みんスロで一致。
- 本機は初当たり時にノーマルBIG、ハイパーBIG、AT、および複合当選が存在するため、物差し値は公開されている「ボーナス+AT合成」を採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/50枚**。
- 現存整理資料で確認。初代2013年機と2023/2024年の後継機を分離して検索。
- confidence: ANALYSIS_SINGLE

## netIncrease

- 擬似ボーナス / ATともに**純増約2.8枚/G**。
- AT「C-MODE（コーラリアンモード）」は**1セット50G+α**。
- K-Navi / パチマガスロマガ / P-WORLDで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- HYPER BIG BONUS: **約200枚**（ベルナビ40回で終了）。
- BIG BONUS: **約100枚**（ベルナビ20回で終了）。
- AT「C-MODE」: **1セット50G+α / 純増約2.8枚/G**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時内部モードは**A / B / C / D**の4種類。
- モードA〜C: 最大天井909G、77Gに仮天井あり。
- モードD: 777G天井。到達時はHYPER BIG + セブンスウェル確定。
- 通常時の全モード移行テーブルは実機完全再現用のため対象外。設定変更時専用表のみresetBehaviorへ保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## ceiling

- モードA〜C: **909G**（77G仮天井あり）。
- モードD: **777G**。
- A〜C天井到達時: AT当選。
- D天井到達時: HYPER BIG + セブンスウェル確定。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_GAMECOUNT_MODE_STATE_CONFIRMED_WITH_PUBLIC_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更後は**天井までのゲーム数をリセット**する解析を確認。
- 内部モードは設定変更時専用振り分けで再選択され、A〜Dすべての可能性あり。
- 内部状態（低確 / 高確A / 高確B）も設定変更時専用振り分けで再選択。
- 設定変更時と単純電源ON/OFF時はいずれも、CZ前兆を示唆するフェイクテーブルが「モードAに似たテーブル」へセットされるという当時解析あり。この表示挙動だけでは変更判別不可。

### carryOverBehavior

- 設定据え置き時の天井ゲーム数・内部モード・内部状態の完全な引継ぎ契約は、機種固有の直接資料を十分に再探索しても今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的5号機の慣例から推測補完しない。

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ON時、**CZフェイクテーブルはモードAに似たテーブルへセット**される当時解析を確認。
- そのため朝一のCZ煽りだけでは設定変更と電源ON/OFFを判別できない。
- 電源OFF→ONのみの場合の天井ゲーム数・内部モード・内部状態そのものの保持/再抽選契約は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- setting change: **RESET_CONFIRMED**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更による専用の短縮天井は確認されず、再選択されたモードに応じてA〜C最大909G / D 777G。
- A〜Cには77G仮天井抽選があるが、設定変更専用の短縮ではないため通常モード仕様として分離。
- confidence: ANALYSIS_HIGH

### modeAfterReset

設定変更時の公開モード振り分け:

| 設定 | モードA | モードB | モードC | モードD |
|---|---:|---:|---:|---:|
| 1〜3 | 50.00% | 12.50% | 25.00% | 12.50% |
| 4〜6 | 25.00% | 25.00% | 25.00% | 25.00% |

- 必勝本 / HAZUSEで一致。
- 高設定ほど上位モード選択が優遇され、設定4〜6はA〜D均等25%。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

設定変更時の公開内部状態振り分け:

| 設定 | 低確 | 高確A | 高確B |
|---|---:|---:|---:|
| 1〜3 | 75.00% | 18.75% | 6.25% |
| 4〜6 | 66.67% | 23.96% | 9.38% |

- 必勝本の機種固有解析で確認。
- confidence: ANALYSIS_HIGH

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時は上位モード選択率が高く、モードDは設定1〜3でも12.50%、設定4〜6では25.00%。
- 高確A/Bスタート合計は設定1〜3で25.00%、設定4〜6で約33.34%。
- モードD選択時は777G天井到達でHYPER BIG + セブンスウェル確定という強い天井恩恵を持つ。

### resetPenalties

- 前日の天井ゲーム数進捗は設定変更でリセットされるため、前日ハマリを利用する宵越し価値は失われる。
- それ以外の設定変更固有の明確な不利数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- CZ/デューイモードの煽り用フェイクテーブルは、**設定変更時と電源ON/OFF時の双方でモードA似のテーブルへセット**されるため、この挙動単独では変更判別不可。
- 「設定変更時の滞在モードから設定示唆が可能」とする当時攻略番組記録は存在するが、実戦でモードを完全特定する必要があり確定判別ではない。
- 本機固有のガックン・初期出目・ランプによる確定的変更判別は、検索語と資料系統を変えて再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- setting-change mode distribution:
  - 設定1〜3: A 50.00% / B 12.50% / C 25.00% / D 12.50%。
  - 設定4〜6: A/B/C/D 各25.00%。
- setting-change state distribution:
  - 設定1〜3: 低確75.00% / 高確A18.75% / 高確B6.25%。
  - 設定4〜6: 低確66.67% / 高確A23.96% / 高確B9.38%。
- reset-specific ceiling shortening: **NONE_CONFIRMED**。
- game count: **設定変更でリセット**。

## missingFields

- 据え置き時の天井G・内部モード・内部状態の完全保持契約: UNVERIFIED_AFTER_RESEARCH。
- 純電源OFF→ON時の天井G・内部モード・内部状態の実保持契約: UNVERIFIED_AFTER_RESEARCH（フェイクテーブル挙動のみ確認）。
- 本機固有ガックン/初期出目/ランプ判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 後継のエウレカセブン3、2023年TYPE-ART、2024年スマスロ エウレカ4の有利区間/リセット仕様を2013年エウレカ2へ混入させない。
- 「77G仮天井」は設定変更専用短縮ではなく、通常モードA〜Cの仕様。reset ceilingと混同しない。
- 擬似ボーナス+AT合成を主要初当たり物差しに用いる。レア役別解除率や初当たり内訳は実機完全再現用なので基本値へ混入しない。

## sources

取得日: **2026-09-06**

1. Sammy Networks / PR TIMES「11月5日（火）ホール導入と同日に『パチスロ交響詩篇エウレカセブン2』…配信開始！」
   - https://prtimes.jp/main/html/rd/p/000000147.000002703.html
   - 2013-11-05ホール導入、機種概要。
   - confidence: OFFICIAL_PRESS_RELEASE

2. Sammy公式「導入前夜から乗リニ乗レ ファンLIVE!!」
   - https://www.sammy.co.jp/japanese/product/pachislot/eureka2/event/
   - 2013-11-04導入前夜イベント、11-05導入案内。
   - confidence: OFFICIAL

3. HAZUSE DATA「パチスロ 交響詩篇エウレカセブン2」
   - https://hazuse.com/machine/pachislot/3S0708/
   - 型式/検定/導入日/天井/モード/設定変更時モード振り分け/基本構造。
   - confidence: ANALYSIS_HIGH_DATABASE

4. HAZUSE DATA「天井」
   - https://hazuse.com/machine/pachislot/3S0708/genre/207/
   - モードA〜C 909G・77G仮天井、D 777G、天井恩恵。
   - confidence: ANALYSIS_HIGH

5. パチ＆スロ必勝本「モード移行抽選」
   - https://p.hisshobon.jp/machine/2284/1/43212
   - 設定変更時モードA〜D振り分け。
   - confidence: ANALYSIS_HIGH

6. パチ＆スロ必勝本「状態移行抽選」
   - https://p.hisshobon.jp/machine/2284/1/42903
   - 設定変更時の低確/高確A/高確B振り分け。
   - confidence: ANALYSIS_HIGH

7. K-Navi「パチスロ交響詩篇エウレカセブン2」
   - https://p-kn.com/slot/1939/
   - 2013-11-05導入、ボーナス+AT合成初当たり、純増約2.8枚/G、50G+α、BIGナビ回数。
   - confidence: ANALYSIS_HIGH

8. パチマガスロマガ「パチスロ交響詩篇エウレカセブン2」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/139/a.php
   - 2013年11月機、HYPER BIG約200枚、BIG約100枚、AT純増約2.8枚/G。
   - confidence: ANALYSIS_HIGH

9. パチマガスロマガ「AT コーラリアンモード」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/139/05.php
   - 1セット50G+α、純増約2.8枚/G。
   - confidence: ANALYSIS_HIGH

10. みんスロ「エウレカセブン2」
    - https://minslo.com/交響詩篇エウレカセブン2/
    - 50枚約31G、機械割、合成初当たり、909G天井。
    - confidence: ANALYSIS_SINGLE_SUPPORTING

11. pacnk「パチスロ 交響詩篇エウレカセブン2 設定判別ツール」
    - https://pacnk.com/slot/tools/sh_eureka2.html
    - 機械割、設定変更後天井Gリセット。
    - confidence: ANALYSIS_SUPPORTING

12. すろぱちくえすと「エウレカセブン2 機種別解析まとめ」
    - https://www.slopachi-quest.com/kisyubetsu/eurekaseven2/
    - 設定変更時および電源ON/OFF時のCZフェイクテーブルがモードA似となり、そこからの変更判別不可。
    - confidence: CONTEMPORARY_ANALYSIS_SUPPORTING

13. ビデオマーケット「パチスロ最強伝説G #582」
    - https://www.videomarket.jp/title/082220/A082220050999H01
    - 設定変更時の滞在モードを設定推測に使う当時攻略番組の概要記録。
    - confidence: CONTEMPORARY_SUPPORTING
