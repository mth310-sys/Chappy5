# パチスロ蒼天の拳2

machineName: パチスロ蒼天の拳2
formalModelName: 蒼天の拳2ZZ
inspectionNumber: 4S0287
manufacturer: Sammy / サミー
releaseDate: 2014-06-16
releaseDatePrecision: exact_start
generation: 5号機
systemType: AT / 自力小役解除 + 規定ゲーム数 / 継続率AT + ゲーム数上乗せAT
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- ホール導入開始 **2014-06-16**。サミーの2014-06-10付プレスリリースで「6/16（月）ホールデビュー」、K-Navi・HAZUSEでも2014-06-16で一致。
- HAZUSEで型式名 **蒼天の拳2ZZ**、検定番号 **4S0287** を確認。
- 初代「パチスロ蒼天の拳」および後年の「蒼天の拳 朋友」等とは別機種として分離。
- confidence: OFFICIAL / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.6% |
| 3 | 101.0% |
| 4 | 105.0% |
| 5 | 110.6% |
| 6 | 113.7% |

- HAZUSEと後年整理資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/299.0 |
| 2 | 1/290.9 |
| 3 | 1/280.8 |
| 4 | 1/252.8 |
| 5 | 1/218.5 |
| 6 | 1/204.8 |

- K-Naviは 1/299 / 1/290 / 1/281 / 1/252 / 1/219 / 1/204 の丸め表示。HAZUSEの精密値を本表に採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 30.5G |
| 2 | 30.5G |
| 3 | 30.5G |
| 4 | 30.5G |
| 5 | 30.6G |
| 6 | 30.6G |

- パチマガスロマガ旧攻略の「1000円あたりのゲーム数」とHAZUSEで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「宿命の刻」: **約2.7枚/G**。
- AT「激闘乱舞in上海」: **約2.7枚/G**。
- 「天授の儀」も約2.7枚/G。
- HAZUSEおよび導入前試打/紹介資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 「宿命の刻」: **1セット約20G**、継続率約70～89%。
- 「激闘乱舞in上海」: **1セット30～200G**、ゲーム数上乗せ型。
- 「天授の儀」: 継続率約80%、前半10G + 後半8Gの構成を繰り返す上位契機。
- 本DBでは完全再現用の宿命レベル全振り分け・上乗せ詳細は収集しない。
- confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時AT当選は主にレア小役による自力解除と規定ゲーム数解除。
- 規定ゲーム数は複数テーブルで管理され、設定変更時は **設定変更専用テーブル**を参照する解析がある。
- 朝一専用テーブルの存在・挙動はresetBehaviorへ保存する。

## ceiling

- ゲーム数天井: **通常時777G消化 + 最大32G前兆**で「宿命の刻」当選。
- 天井契機では最低継続率が選択されず、解析上 **継続率75%以上**相当。
- 別系統の連続非当選天井: 「宿命の刻」から「激闘乱舞in上海」へ9回連続非突入なら、10回目の「宿命の刻」で激闘乱舞in上海突入。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井G数をリセット**。
- 規定ゲーム数モードは再抽選され、通常AT後のA/B/Cとは別に **設定変更時専用テーブル**を参照。
- 内部状態（低確/通常/天国）も再抽選。
- 朝一ステージは再抽選。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### carryOverBehavior

- 設定変更なしの据え置きでは **天井G数・内部モード・内部状態を引き継ぐ**とする当時攻略資料を確認。
- 朝一ステージ表示自体は再抽選されるため、液晶ステージだけでは内部据え置き状態を直接確定できない。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### powerCycleBehavior

- 当時攻略資料は「電源OFF→ON（据え置き）」として **天井引継ぎ / 内部モード引継ぎ / 内部状態引継ぎ / ステージ再抽選**を明記。
- 本機については据え置きと単純電源再投入を同一欄で扱う資料のため、設定変更なし電源OFF→ONの実用上の朝一契約として保存。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き / 設定変更なし電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset

- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 最大ゲーム数天井は基本 **777G + 最大32G前兆**のまま。
- ただし設定変更時専用の規定ゲーム数テーブルにより、通常AT後より250G・450G・650G前後のゾーンが優遇される解析/実戦傾向を確認。

### modeAfterReset

- 設定変更時は通常AT後のテーブルA/B/Cとは別の **設定変更専用テーブル**へ移行。
- 公開資料でリセット後に期待度が高い前兆込みゾーン:
  - **115～132G**
  - **240～257G**
  - **440～457G**
  - **640～657G**
- 全ゲーム数振り分け表は完全再現用詳細となるため本レコードでは保持しない。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### stateAfterReset

設定変更時の内部状態振り分け:

| 設定 | 低確 | 通常 | 天国 |
|---:|---:|---:|---:|
| 1 | 50.0% | 25.0% | 25.0% |
| 2 | 45.0% | 27.5% | 27.5% |
| 3 | 40.0% | 30.0% | 30.0% |
| 4 | 35.0% | 32.5% | 32.5% |
| 5 | 32.5% | 32.5% | 35.0% |
| 6 | 30.0% | 32.5% | 37.5% |

- 設定1でも朝一25%で天国、設定6は37.5%。
- confidence: ANALYSIS_HIGH_PERIOD_MULTI_SOURCE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時専用の規定ゲーム数テーブルにより、通常時より特定ゾーンの解除期待度が高い。
- 設定1でも内部天国スタート **25.0%**、設定6では **37.5%**。
- 天国は当時解析で平均約50G滞在とされ、朝一数ゲームの挙動が客の設定変更推測・朝一狙いへ影響する。

### resetPenalties

- 設定変更により前日天井G数・内部モード・内部状態は消去されるため、前日深いハマりや有利状態の据え置き期待は失われる。
- それ以外の設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **ガックン判別可能**とする当時攻略資料あり。
- 本機は左リールが疑似リール（アンリミテッドリール）のため、変更判別では **左以外のリールを見る必要がある**と明記されている。
- ステージは設定変更・据え置き双方で再抽選されるため、朝一ステージ単独は設定変更判別に使えない。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

### numericResetData

- 設定変更時 天国移行率:
  - 設定1: 25.0%
  - 設定2: 27.5%
  - 設定3: 30.0%
  - 設定4: 32.5%
  - 設定5: 35.0%
  - 設定6: 37.5%
- リセット後優遇ゾーン（前兆込み目安）: **115～132 / 240～257 / 440～457 / 640～657G**。
- 新台初日1回目初当たり **614件**の実戦集計でも250/450/650G前後のリセット後当選率上昇が確認されたが、実戦値は解析値と分離して扱う。

### publicMorningNumbers

- 朝一天国スタート率: **25.0 / 27.5 / 30.0 / 32.5 / 35.0 / 37.5%（設定1～6）**。
- 当時解析で天国平均滞在は約50G。
- リセット後ゾーン: **115～132 / 240～257 / 440～457 / 640～657G**が強い。
- confidence: ANALYSIS_HIGH_PERIOD_MULTI_SOURCE

## resetBehavior 再探索メモ

- `パチスロ蒼天の拳2 / 蒼天の拳2 / 蒼天の拳2ZZ / 4S0287 / Sammy / サミー` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 777G / モード / テーブル / 状態 / 天国 / ガックン` を組み合わせて再探索。
- サミー公式プレス、K-Navi、HAZUSE、パチマガスロマガ、2014年当時の期待値見える化、すろぱちくえすと、後年整理資料を横断。
- 2019年「蒼天の拳 朋友」、2026年北斗系など別機種の朝一仕様を混入しない。
- 固定のリセット専用短縮天井は確認できず、特殊テーブルによるゾーン優遇と区別して保存。

## sources

取得日: **2026-09-07**

- サミー PR TIMES（2014-06-10、6/16ホールデビュー）: https://prtimes.jp/main/html/rd/p/000000001.000010410.html
- K-Navi: https://p-kn.com/slot/2070/
- HAZUSE 本体: https://hazuse.com/machine/pachislot/4S0287/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S0287/genre/201/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/4S0287/genre/209/
- パチマガスロマガ 小役・1000円あたりG数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/143/c.php
- 期待値見える化 朝一リセット: https://slotjin.com/slot/soutennoken2-reset/
- すろぱちくえすと 朝一リセット: https://www.slopachi-quest.com/article/souten2-resets/
- Pachinavi整理: https://pachinavi.net/machines/souten-no-ken-2/

## missingFields

- 設定変更専用規定ゲーム数テーブルの全振り分けは本DB目的上不要のため収集対象外。
- 設定変更専用の固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts

- AT初当たりはK-Navi丸め表示とHAZUSE精密値に差があるが、定義差ではなく表示精度差として扱いCONFLICTにはしない。
