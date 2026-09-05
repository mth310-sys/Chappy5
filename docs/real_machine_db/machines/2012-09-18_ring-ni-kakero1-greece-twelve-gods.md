# パチスロ リングにかけろ1 ギリシア十二神編

machineName: パチスロ リングにかけろ1 ギリシア十二神編
manufacturer: サミー
releaseDate: 2012-09-18
releaseDatePrecision: exact_day
releaseDateNotes: ALL7.jp、パチビーで2012-09-18導入を確認。
generation: 5号機
systemType: ART / ボーナス非搭載 / 規定ゲーム数解除 + CZ / セット継続
modelName: リングにかけろ1 ギリシア十二神編X（後年中古実機資料で表記確認。ただし一次資料未確認）
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 99.0% |
| 3 | 102.1% |
| 4 | 105.3% |
| 5 | 110.1% |
| 6 | 115.1% |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

2-9伝説整理値を主値とし、P-WORLD/K-NaviのART初当たり系列、サミー公式・当時業界資料のゲーム性と突合。

## initialHitBySetting

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/302.3 |
| 2 | 1/291.3 |
| 3 | 1/270.8 |
| 4 | 1/249.1 |
| 5 | 1/227.0 |
| 6 | 1/198.1 |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

P-WORLD、K-Navi、2-9伝説で一致。

## baseGamesPer50

- 約30G/50枚
- confidence: PERIOD_OBSERVATION_PLUS_ANALYSIS_REFERENCE
- notes: K-Navi当時実戦記事で「1Kあたり30Gは回るハズ」と明示。実戦サンプルは27〜28G/1K程度。メーカー公表ベースではないため約30Gとして保持。

## netIncrease

- ART「ブーメランRUSH」: 約+2.0枚/G
- confidence: OFFICIAL_INDUSTRY_ANALYSIS_HIGH

## basicPayout

- ブーメランRUSH: 1セット50G + 継続バトル。
- ART中はゲーム数上乗せ + 継続抽選型。
- 「激闘モード」: 5G単位の上乗せゾーン。
- 「WINNING RUSH」: 5G間毎ゲーム上乗せ。
- ボーナス非搭載。
- confidence: OFFICIAL_INDUSTRY_ANALYSIS_HIGH

## modeSpecificMinimumData

- ART当選の主軸は規定ゲーム数消化。
- CZ「影道の塔」は20G、自力ART突入期待度は当時パチマガスロマガで約30%。
- 通常モードは通常A / 通常B / 通常C（チャンス）/ 天国（ブーメラン）/ 超天国（超ブーメラン）。
- モード別最大規定ゲーム数: 通常A 1024G / 通常B 1240G / 通常C 1240G / 天国・超天国 128G。
- 通常時最大天井はART間1240GでブーメランRUSH当選。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **GAME_COUNT_CLEARED_AND_MODE_RESELECTED_CONFIRMED**
- 設定変更で天井ゲーム数はリセット。
- 設定変更後は専用モード振り分けが存在。
- 設定変更後に900Gを超える規定ゲーム数が選ばれた場合、最大900Gへ書き換えられる当時解析を確認。

### carryOverBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 据え置き時のゲーム数・モード・内部状態の完全な保持契約を、本機固有の直接資料で十分確定できず。
- 当時実戦記事には「据え置きなら天井も近いかも」という宵越し運用観測があるが、解析仕様としては採用しない。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH**
- 設定変更を伴わない単純電源OFF→ON時のゲーム数・モード・状態の扱いを本機固有資料で確定できず。

### gameCounterReset

- **RESET_ON_SETTING_CHANGE_CONFIRMED**
- 設定変更で前日の天井進捗をクリア。

### ceilingAfterReset

- **SHORTENED_MAX_900G_CONFIRMED_PERIOD_ANALYSIS**
- 通常時最大天井は1240G。
- 設定変更後は、選択された規定ゲーム数が900Gを超える場合に900Gへ書き換えられるため最大天井900G。
- 900G以下のモードを必ず選ぶという意味ではなく、規定ゲーム数上限の書き換えとして扱う。

### modeAfterReset

- **RESELECTED_WITH_PUBLIC_DISTRIBUTION_CONFIRMED_PERIOD_ANALYSIS**

設定1〜3:
- 通常A 50.0%
- 通常B 25.0%
- 通常C 5.0%
- 天国 19.75%
- 超天国 0.25%

設定4〜6:
- 通常A 32.5%
- 通常B 32.5%
- 通常C 10.0%
- 天国 24.75%
- 超天国 0.25%

### stateAfterReset

- **UNVERIFIED_AFTER_RESEARCH**
- 低確/高確等の設定変更時専用状態振り分けを本機固有の直接資料で確定できず。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **MAX_CEILING_SHORTENED_TO_900G**
- 通常最大1240Gに対して設定変更後は最大900G。
- 設定変更時モード振り分けで天国以上は設定1〜3が20.0%、設定4〜6が25.0%。

### resetPenalties

- **PREVIOUS_DAY_CEILING_PROGRESS_LOST**
- 設定変更で前日ハマリの宵越し天井進捗を失う。
- 天国移行率はART後より設定変更後の方が低いという当時解析者評価があるが、通常ART後全条件との定量比較は本レコードでは収集対象外。

### resetDetection

- **UNVERIFIED_AFTER_RESEARCH_FOR_DETERMINISTIC_DETECTION**
- ガックン、初期出目、液晶ステージ等による本機固有の確定的変更判別は、検索語・資料系統を変えて再探索しても確定できず。
- 朝一ノーボーナス等は設定変更確定材料ではない旨が当時解析で明記されている。

### publicMorningNumbers

- **CONFIRMED_PERIOD_ANALYSIS**
- resetModeDistributionSetting1to3: A 50.0 / B 25.0 / C 5.0 / 天国 19.75 / 超天国 0.25%
- resetModeDistributionSetting4to6: A 32.5 / B 32.5 / C 10.0 / 天国 24.75 / 超天国 0.25%
- resetHeavenOrAbove: 設定1〜3 20.0% / 設定4〜6 25.0%
- resetMaxCeiling: 900G

### numericResetData

- normalModeCeilings: A=1024G / B=1240G / C=1240G / 天国=128G / 超天国=128G
- normalMaxCeiling: 1240G
- resetMaxCeiling: 900G
- gameCountOnSettingChange: CLEAR
- resetModeDistributionSetting1to3: A=50.0% / B=25.0% / C=5.0% / 天国=19.75% / 超天国=0.25%
- resetModeDistributionSetting4to6: A=32.5% / B=32.5% / C=10.0% / 天国=24.75% / 超天国=0.25%

resetQaReliability: HIGH_FOR_COUNTER_AND_RESET_MODE_PERIOD_ANALYSIS__PARTIAL_FOR_CARRYOVER_POWER_STATE_DETECTION

## conflicts

- 5号機クロニクルの検索断片には本機をA+ART、BIG約204枚/REG約54枚とする記述があるが、サミー公式、当時業界記事、P-WORLD、K-Navi、パチマガスロマガはいずれもボーナス非搭載ART特化型として一致。別機種/前作情報混入の可能性が高いため主仕様には採用せず **CONFLICT_SOURCE_ANOMALY** として保持。

## missingFields

- 検定番号
- 型式名の一次資料確認
- 据え置き時のゲーム数・モード・状態保持の直接解析契約
- 電源OFF→ONのみの挙動
- 設定変更時の低確/高確等の状態振り分け
- ガックン・初期出目等の確定的変更判別

## sources

取得日: 2026-09-05

1. Sammy公式 PACHISLOT リングにかけろ1 -ギリシア十二神編-
   - https://www.sammy.co.jp/japanese/product/pachislot/ringnikakero/
   - 公式機種ページ、ゲームフロー・ART・演出・スペックページの存在を確認。
   - reliability: OFFICIAL

2. 娯楽産業 サミー「パチスロ リングにかけろ1 ギリシア十二神編」展示会開催
   - https://www.goraku-sangyo.com/%E3%82%B5%E3%83%9F%E3%83%BC%E3%80%80%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%AB%E3%81%8B%E3%81%91%E3%82%8D1-%E3%82%AE%E3%83%AA%E3%82%B7%E3%82%A2%E5%8D%81/
   - 2012-08-08展示会、ART特化型、純増2.0枚/G、50G+α、上乗せゾーン仕様。
   - reliability: INDUSTRY_PERIOD

3. グリーンべると サミー『リンかけ』シリーズ最新作を発表
   - https://web-greenbelt.jp/00001600/
   - 2012-08-07記事。サミー初ART特化型、ゲーム数管理タイプ。
   - reliability: INDUSTRY_PERIOD

4. P-WORLD リングにかけろ1 ギリシア十二神編
   - https://www.p-world.co.jp/machine/database/6828
   - 5号機ART、BR非搭載、純増約2.0枚/G、設定別ART突入率。
   - reliability: INDUSTRY_DATABASE

5. K-Navi パチスロ リングにかけろ1 ギリシア十二神編
   - https://p-kn.com/slot/1698/
   - ART初当たり、ART50G+バトル、純増約2.0枚/G、当時実戦で約30G/1K目安、据え置き可能性に関する実戦観測。
   - reliability: ANALYSIS_HIGH_PERIOD

6. パチマガスロマガ パチスロ リングにかけろ1 ギリシア十二神編
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/135/a.php
   - ART特化型、50G+バトル、純増2.0枚/G、CZ影道の塔期待度約30%。
   - reliability: ANALYSIS_HIGH_PERIOD

7. 2-9伝説 設定変更後のモード（2012-10-16）
   - https://2-9densetsu.com/blog-entry-1195.html/
   - 設定変更後最大天井900G、設定1〜3/4〜6別のモード振り分けを公開。
   - reliability: PERIOD_ANALYSIS_SINGLE

8. スロットコレクション 2-9伝説まとめ
   - https://29den.com/ringnikakero-greece/
   - 機械割97.1〜115.1%、ART初当たり1/302.3〜1/198.1、ART間最大1240G、設定変更で天井G数リセット。
   - reliability: ANALYSIS_RETROSPECTIVE_WITH_PERIOD_LINKS

9. ALL7.jp 2012年9月導入予定一覧
   - https://www.all7.jp/plans/index/2012/09
   - 2012-09-18導入予定。
   - reliability: INDUSTRY_SCHEDULE

10. パチビー 機種情報
   - https://www.pachibee.jp/machines/about/212080002
   - 2012-09-18導入、5号機ART、BR非搭載、天井あり、純増約2.0枚/G。
   - reliability: PERIOD_DATABASE

## reliabilitySummary

- identity: HIGH
- releaseDate: HIGH_MULTI_SOURCE
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE
- initialHit: HIGH_MULTI_SOURCE
- baseGamesPer50: PERIOD_REFERENCE_APPROX
- netIncrease: OFFICIAL_INDUSTRY_ANALYSIS_HIGH
- resetBehavior: HIGH_FOR_COUNTER_AND_MODE_PERIOD_ANALYSIS / PARTIAL_FOR_CARRYOVER_POWER_STATE_DETECTION

## qaNotes

- 2020年「ワールドチャンピオンカーニバル編」等、後継6号機の有利区間・CZ・リセット仕様は混入させていない。
- 2010年「黄金の日本Jr.編」のA+ART/ボーナス仕様を本機へ混入させない。
- ALL7.jpの09-10候補「リーチラッシュ」はベルコ公式で2012年9月登場のパチンコ「CRリーチラッシュ」と確認。本DBのパチスロ本線対象外として除外した。
