# シスタークエスト

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: シスタークエスト
manufacturer: SNKプレイモア
releaseDate: 2007-09-03
generation: 5号機
systemType: ノーマル / ボーナス主体 / 天井RT / 小役同時成立

## releaseDate evidence

- グリーンべると当時記事（2007-08-03）はSNKプレイモア新機種として発表し、納品を `2007-09-02` からとする。
- パチビーは `2007-09-03` 導入機種として掲載。
- 5号機クロニクルは導入時期を2007/8としており、発表・発売月粒度と一般ホール導入日の定義差がある。

本DBの時系列本線は、一般ホール導入日が具体的なパチビーの `2007-09-03` を採用し、納品開始 `2007-09-02` と後年整理 `2007/8` は注記として保持する。

信頼度: INDUSTRY / OLD_DB / CONFLICT_DATE_DEFINITION

## payoutRateBySetting

資料差があるため平均せずCONFLICTとして保持する。

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 96.09% |
| 2 | 98.35% |
| 3 | 100.63% |
| 4 | 104.18% |
| 5 | 107.72% |
| 6 | 111.50% |

### 5号機クロニクル / 当時テンプレ整理値

| 設定 | 機械割 |
|---|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 100.0% |
| 4 | 104.0% |
| 5 | 108.0% |
| 6 | 112.0% |

差は小さいが一律の丸めとは断定せずCONFLICTとして保持する。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ掲載値。グリーンべると当時記事および5号機クロニクルの丸め値と整合する。

| 設定 | BIG | REG | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/307.68 | 1/455.11 | 1/183.57 |
| 2 | 1/295.21 | 1/428.34 | 1/174.76 |
| 3 | 1/283.71 | 1/404.54 | 1/166.76 |
| 4 | 1/266.41 | 1/370.26 | 1/154.93 |
| 5 | 1/251.10 | 1/341.33 | 1/144.67 |
| 6 | 1/237.45 | 1/316.60 | 1/135.69 |

信頼度: ANALYSIS_HIGH / INDUSTRY

## baseGamesPer50

パチマガスロマガの通常時1000円あたり平均ゲーム数:

| 設定 | G/50枚 |
|---|---:|
| 1 | 36.78G |
| 2 | 37.13G |
| 3 | 37.49G |
| 4 | 37.88G |
| 5 | 38.28G |
| 6 | 38.86G |

当時スロ板テンプレの36.8〜38.3G/1K表記とも概ね整合する。

信頼度: ANALYSIS_HIGH

## netIncrease

- 通常時ボーナス間999G到達で、次回ボーナス成立まで継続する救済RTへ移行。
- パチマガスロマガ解析の天井RT純増:
  - 設定1: +0.04枚/G
  - 設定2: +0.04枚/G
  - 設定3: +0.05枚/G
  - 設定4: +0.05枚/G
  - 設定5: +0.06枚/G
  - 設定6: +0.07枚/G
- 出玉増加の主役ではなく、ほぼ現状維持型の救済RT。

信頼度: ANALYSIS_HIGH

## basicPayout

パチマガスロマガ / グリーンべると / P-WORLDで整合:

- BIG: 規定払い出し345枚超 / 純増約312枚
- REG: 規定払い出し119枚超 / 純増約104枚

信頼度: INDUSTRY / ANALYSIS_HIGH / OLD_DB

## modeSpecificMinimumData

- RPG風ストーリーをBIGごとに進行するノーマルタイプ。
- 全小役にボーナス同時成立の可能性あり。
- 通常時ボーナス間999Gで救済RTへ移行し、次回ボーナスまで継続。
- 天井RT中リプレイ確率は約1/1.66〜1/1.70、純増は+0.04〜+0.07枚/G。
- ART/AT/CZや通常時モード管理を主軸とする機種ではない。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 当時スロ板テンプレでは、`設定変更しても天井までのG数は引き継ぎ` と明記される。
- この挙動は初代固有の当時資料として採用するが、同内容をメーカー公式/業界一次で再照合できていないため `ANALYSIS_SINGLE / CONTEMPORARY`。
- 設定変更による専用朝一モード・高確・当選率優遇は `NONE_CONFIRMED`。

carryOverBehavior:
- ボーナス間999G天井RTまでのゲーム数は宵越し可能との当時解析あり。
- 据え置きではボーナス間ゲーム数引継ぎとみなせる。
- ストーリー/表示ステージは遊技性能とは別管理で、電断条件により初期話へ戻る情報がある。

powerCycleBehavior:
- 当時スロ板テンプレでは `設定変更の有無に限らず電源OFFで2時間放置すると1話から` とされる。
- これは液晶ストーリー表示の初期化に関する情報であり、天井ゲーム数のリセットを意味しない。
- 電源OFF→ONのみで天井ゲーム数がリセットされる根拠は確認できず、当時資料の宵越し可記述から引継ぎ優勢だが、電断時間別の内部天井カウンタ仕様はメーカー資料未確認のため `PARTIAL`。

gameCounterReset:
- 通常時天井: ボーナス間999G消化で天井RT。
- 当時解析では設定変更しても天井までの消化G数を引き継ぐ。
- 据え置きは引継ぎ。

ceilingAfterReset:
- 設定変更による天井短縮・変更は `NONE_CONFIRMED`。
- 公開値は通常時と同じボーナス間999G。

modeAfterReset:
- 通常時モード管理、朝一専用モード、設定変更時モード振り分けは `NONE_CONFIRMED`。
- 液晶ストーリーの話数/ステージは内部モードとは分離して扱う。

stateAfterReset:
- 天井RT中そのものを設定変更/電断した際のRT継続可否について、初代固有の高信頼資料を確定できず `UNVERIFIED`。
- 通常時の長期高確/低確状態は `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機・有利区間制度導入前）。

resetBenefits:
- 天井G数を設定変更後も引き継ぐ当時解析があるため、前日ハマリ台は朝一宵越し天井狙いの対象になり得る。
- リセット専用の短縮天井・高確・当選率優遇は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更固有の主要不利要素は `NONE_CONFIRMED`。

resetDetection:
- 当時スロ板テンプレは、電源OFF2時間放置で液晶ストーリーが1話に戻る一方、`滞在ステージでの設定変更判別は不可能` とする。
- 本機固有のリールガックンによる設定変更判別は再探索後も `UNVERIFIED`。

numericResetData:
- 通常時天井: ボーナス間999G
- 設定変更後天井: 999G（短縮なし、当時解析ではG数引継ぎ）
- 据え置き: 天井G数引継ぎ
- 電源OFF2時間放置: 液晶ストーリー表示が1話へ戻るという当時情報あり
- 設定変更時専用モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると — RPGとパチスロが融合した『シスタークエスト』
   - https://web-greenbelt.jp/00004305/
   - 2007-08-03、SNKプレイモア発表、BIG/REG/合算レンジ、BB312枚/RB104枚、救済RT、9/2納品開始
   - reliability: INDUSTRY / CONTEMPORARY
2. パチビー — 2007年9月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-09
   - シスタークエスト / SNKプレイモア / 2007-09-03導入
   - reliability: OLD_DB
3. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/15/a.php
   - ノーマル/同時成立/天井RT、BIG約312枚、REG約104枚
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/15/h.php
   - 設定別BIG/REG/合算、シミュレートPAYOUT
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役確率/1000円G数/天井RT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/15/c.php
   - 36.78〜38.86G/50枚、ボーナス間1000G表記で天井RT、RT純増+0.04〜+0.07枚/G
   - note: P-WORLD/当時テンプレの「999G消化で突入」と表現差。実務上は999G消化後の次GからRTに入る定義差として保持。
   - reliability: ANALYSIS_HIGH
6. P-WORLD — シスタークエスト「2007年」
   - https://www.p-world.co.jp/machine/database/4856
   - 5号機ノーマル、BIG約312枚/REG約104枚、ボーナス間999Gで次回ボーナスまで天井RT
   - reliability: OLD_DB
7. 5号機クロニクル — SNKプレイモア5号機全機種一覧
   - https://5goki.com/snkplaymore
   - シスタークエスト設定別BIG/REG/合算、機械割96〜112%、導入2007/8
   - reliability: RETROSPECTIVE
8. スロ板blog — シスタークエスト（当時スロット板テンプレ集）
   - https://slbl.blog.shinobi.jp/%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%EF%BC%9A%E3%81%95%E8%A1%8C/%E3%82%B7%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88
   - 999G天井、宵越し可、設定変更でもG数引継ぎ、電源OFF2時間放置で1話へ、ステージで設定変更判別不可
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY_COMMUNITY_ARCHIVE

## missingFields

- 初代シスタークエストの天井RT中に設定変更/電断した場合のRT状態そのものの継続可否
- 電源OFF時間別の内部天井カウンタ処理を明記したメーカー/業界一次資料
- 本機固有のリールガックン等による設定変更判別

## conflicts

- 導入時期: 5号機クロニクル `2007/8`、グリーンべると納品開始 `2007-09-02`、パチビー一般導入 `2007-09-03`。定義差として保持し、本線は2007-09-03。
- 機械割: パチマガスロマガ `96.09 / 98.35 / 100.63 / 104.18 / 107.72 / 111.50%`、5号機クロニクル/当時整理 `96 / 98 / 100 / 104 / 108 / 112%`。平均せず保持。
- 天井表記: パチマガスロマガは「ボーナス間1000Gハマリで天井RT」、P-WORLD/当時テンプレは「999G消化で天井RT」。実ゲーム上の突入境界の表現差として数値を両方保存。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
