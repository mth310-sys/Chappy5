# パチスロ聖闘士星矢

machineName: パチスロ聖闘士星矢
manufacturer: 三洋物産
releaseDate: 2012-09-10
releaseDatePrecision: exact_day
releaseDateNotes: K-NaviおよびALL7.jpで2012-09-10導入/導入予定を確認。
generation: 5号機
systemType: AT / 規定ゲーム数解除 + CZ / セット継続
modelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.7% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 103.1% |
| 5 | 106.1% |
| 6 | 110.0% |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

K-Naviと当時系紹介資料で一致。

## initialHitBySetting

| 設定 | AT初当たり | CZ（火時計ミッション） |
|---|---:|---:|
| 1 | 1/272.1 | 1/186.1 |
| 2 | 1/267.7 | 1/178.0 |
| 3 | 1/264.1 | 1/178.2 |
| 4 | 1/229.3 | 1/161.3 |
| 5 | 1/208.5 | 1/144.6 |
| 6 | 1/177.3 | 1/124.1 |

confidence: ANALYSIS_HIGH_PERIOD

## baseGamesPer50

- 約30G/50枚
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE
- notes: 後年整理資料で確認。独立した当時系資料で同一定義の再照合は取れていないため単一扱い。

## netIncrease

- AT「聖闘士RUSH」: 約+2.8枚/G
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## basicPayout

- 聖闘士RUSH: 30G / 50G / 100G + 黄金聖闘士バトル10G+αのセット継続型。
- 継続率: 50〜88%。
- 純粋なボーナスは非搭載。白7揃い等は擬似ボーナス扱い。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は規定ゲーム数解除とCZ「火時計ミッション」からATを目指す。
- 当時資料では通常A / 通常B / 通常C / 天国 / 超天国の5モードを確認。
- モード別天井: 通常A 1400G / 通常B 1000G / 通常C 700G / 天国100G / 超天国100G。
- 最大天井1400GでAT当選。
- K-NaviはAT初当たりとCZ確率を設定別に公開。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **GAME_COUNT_CLEARED_CONFIRMED**
- 本機名を明示した当時系資料で「設定変更時は天井到達までのゲーム数がクリアされる」と確認。
- K-Naviにも本機専用「設定変更後の挙動」攻略項目が存在する。
- 設定変更直後に前兆「聖域への道」へ入りやすい挙動は当時実戦記事で観測されているが、解析確定値ではないため設定変更確定判別には使用しない。

### carryOverBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 据え置き時の天井ゲーム数・モード・高確状態の保持を本機固有の直接資料で十分確定できず。
- 一般的な5号機AT機の仕様から推測補完しない。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 設定変更を伴わない電源OFF→ONのみの天井ゲーム数・モード・状態処理について、本機固有の直接資料を確定できず。

### gameCounterReset

- **RESET_ON_SETTING_CHANGE_CONFIRMED**
- 設定変更時は天井到達までのゲーム数をクリア。
- 前日のハマリゲーム数は設定変更後の天井進捗として利用できない。

### ceilingAfterReset

- **NO_RESET_SPECIFIC_SHORTENED_CEILING_CONFIRMED**
- 通常時のモード別天井はA 1400G / B 1000G / C 700G / 天国・超天国100G。
- これらは通常モードの天井であり、設定変更専用の短縮天井として確定した数値ではない。
- 設定変更時専用天井の公開確定値は今回確認できず。

### modeAfterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時の通常A/B/C/天国/超天国への具体振り分け率を高信頼資料で確定できず。
- 当時の朝一実戦で100G以内の前兆発生が複数台に見られたが、解析値ではなく観測情報としてのみ保持。

### stateAfterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 高確/超高確の設定変更時初期振り分けを本機固有資料で確定できず。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH**
- 朝一前兆が発生しやすい可能性を示す当時実戦観測はあるが、12台中ATに繋がったのは1台という少数サンプルで、恩恵として数値化しない。
- 設定変更専用の短縮天井・高確率移行率などの確定恩恵は今回確認できず。

### resetPenalties

- **PREVIOUS_DAY_CEILING_PROGRESS_LOST**
- 設定変更で天井到達までのゲーム数がクリアされるため、前日ハマリの宵越し天井進捗を失う。

### resetDetection

- **UNVERIFIED_AFTER_RESEARCH_FOR_DETERMINISTIC_DETECTION**
- 当時実戦では朝一100G以内の「聖域への道」を設定変更推測材料として試しているが、解析確定の変更判別ではない。
- ガックン、初期出目、液晶ステージ等による本機固有の確定的設定変更判別は今回確定できず。

### publicMorningNumbers

- **NONE_CONFIRMED_AS_ANALYSIS_VALUE**
- 朝一前兆の当時実戦値は少数サンプルのため公開解析数値として採用しない。

### numericResetData

- gameCountCeilingOnSettingChange: RESET_CONFIRMED
- normalModeCeilings: A=1400G / B=1000G / C=700G / 天国=100G / 超天国=100G
- resetShortenedCeiling: NONE_CONFIRMED
- morningHitRate: UNVERIFIED

resetQaReliability: HIGH_FOR_SETTING_CHANGE_GAME_COUNTER_RESET__PARTIAL_FOR_MODE_STATE_POWER_CYCLE

## conflicts

- 現時点で性能コアの主要数値に重大な直接競合なし。
- ATセット表記は業界記事の「40G/60G/110G」とK-Naviの「30/50/100G + バトル10G+α」が実質同一構造を異なる数え方で表記している。総セットゲーム数と本体ゲーム数の定義差として保持し、CONFLICT扱いしない。

## missingFields

- 型式名 / 検定番号
- 据え置き時の天井ゲーム数・モード・内部状態保持の直接根拠
- 電源OFF→ONのみの挙動
- 設定変更時モード振り分け率
- 設定変更時高確/超高確振り分け
- ガックン等の確定的変更判別

## sources

取得日: 2026-09-05

1. K-Navi パチスロ聖闘士星矢
   - https://p-kn.com/slot/1692/
   - 2012-09-10導入、設定別AT/CZ確率、機械割、AT純増約2.8枚/G、30/50/100G + バトル10G+α、設定変更後攻略項目の存在。
   - reliability: ANALYSIS_HIGH_PERIOD

2. ALL7.jp 2012年9月導入予定一覧
   - https://www.all7.jp/plans/index/2012/09
   - パチスロ聖闘士星矢（三洋）2012-09-10導入予定。
   - reliability: INDUSTRY_SCHEDULE

3. 娯楽産業 三洋物産 パチンコ・パチスロ2機種同時発表
   - https://www.goraku-sangyo.com/%E4%B8%89%E6%B4%8B%E7%89%A9%E7%94%A3%E3%80%80%E3%83%91%E3%83%81%E3%83%B3%E3%82%B3%E3%83%BB%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD2%E6%A9%9F%E7%A8%AE%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8/
   - 2012-07-18発表会、AT純増2.8枚/G、40/60/110G（バトル込み表記）、ループ率最大88%。
   - reliability: INDUSTRY_PERIOD

4. D'STATION安中店 公式ブログ 新台紹介
   - https://ameblo.jp/d-annaka/entry-11438867168.html
   - 最大天井1400G、モード別天井A1400/B1000/C700/天国100/超天国100、設定変更時ゲーム数クリア、設定別AT/CZ/機械割。
   - reliability: PERIOD_SECONDARY

5. K-Navi 当時実戦ログ（機種ページ内）
   - https://p-kn.com/slot/1692/
   - 新台初日の朝一で複数台が100G以内に「聖域への道」へ移行、12台中AT当選1台という実戦観測。解析確定値ではないため参考情報扱い。
   - reliability: PERIOD_OBSERVATION

6. みんスロ 聖闘士星矢
   - https://minslo.com/%E8%81%96%E9%97%98%E5%A3%AB%E6%98%9F%E7%9F%A2/
   - 導入2012-09-10、AT純増2.8枚/G、50枚約30G、天井1400G、設定別AT/機械割の後年整理。
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE

## reliabilitySummary

- identity: HIGH
- releaseDate: HIGH_MULTI_SOURCE
- payoutRate: HIGH_MULTI_SOURCE
- initialHit: HIGH_PERIOD
- baseGamesPer50: SINGLE_RETROSPECTIVE
- netIncrease: HIGH_INDUSTRY_AND_ANALYSIS
- resetBehavior: HIGH_FOR_GAME_COUNTER_RESET / PARTIAL_FOR_MODE_STATE_POWER

## qaNotes

- 2014年「黄金激闘編」、2015年「女神聖戦」、2017年「海皇覚醒」、2019年「海皇覚醒Special」、2022年「冥王復活」、2024年スマスロ版の仕様を初代2012年機へ混入させないよう除外した。
- 特に後継機の有利区間・GB・不屈・リセット恩恵は初代へ流用していない。
