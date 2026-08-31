# ボンバーマンビクトリーF

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: ボンバーマンビクトリーF
manufacturer: サミー
releaseDate: 2006-04 / 一部資料2006-05
generation: 5号機初期
systemType: ボーナス+RT / リプパン延命型

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.5% |
| 2 | 97.6% |
| 3 | 100.2% |
| 4 | 104.3% |
| 5 | 109.1% |
| 6 | 115.0% |

5号機クロニクル値。別資料で設定6 114.7%表記あり。
信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG | REG |
|---|---:|---:|
| 1 | 1/474.89 | 1/1724.63 |
| 2 | 1/445.82 | 1/1724.63 |
| 3 | 1/414.78 | 1/1724.63 |
| 4 | 1/376.64 | 1/1724.63 |
| 5 | 1/360.08 | 1/1724.63 |
| 6 | 1/327.68 | 1/1724.63 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

1000円あたりプレイ数:
- 設定1〜3: 47.14G
- 設定4: 48.07G
- 設定5: 49.37G
- 設定6: 50.05G

信頼度: ANALYSIS_HIGH

## netIncrease

RT「ボンバータイム」。通常RT中リプレイ確率1/1.293。1Gあたり純増枚数の比較可能な公開値は今回未確定。

## basicPayout

- BIG: 465枚超払い出しで終了、純増約310枚
- REG: 12G消化または小役8回当選で終了。純増枚数は今回コア確定できずUNVERIFIED

## modeSpecificMinimumData

- 全ボーナス後にRT「ボンバータイム」へ突入。
- 最大3000G継続可能。
- 3種類のボム（チェリー）が別フラグで、入賞するとRT終了。ナビと目押しでパンク回避可能。
- 5号機初期の高機械割リプパン延命型として重要な物差し候補。

## resetBehavior

resetBehaviorQA: PARTIAL

`ボンバーマンビクトリーF / ボンバーマンビクトリー / Sammy / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源 / ボンバータイム / RT / 3000G / ガックン` を組み替え、当時解析・旧DB・回顧資料・業界記事を再探索。

### settingChangeBehavior

- 設定変更時にRT「ボンバータイム」の残りG、内部RT状態、ボムナビ権利/ナビ回数状態がどう処理されるか: UNVERIFIED。
- RT中ナビ回数振り分けには設定差が存在したことを回顧資料で確認できるが、設定変更時の保持/再抽選処理は別問題のため推定しない。
- 通常時ゲーム数天井や設定変更専用短縮天井: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時に前日のボンバータイム残G・内部RT状態・ナビ権利を保持するか: UNVERIFIED。
- 通常時ゲーム数天井の据え置き引継ぎ: NOT_APPLICABLE / NONE_CONFIRMED。

### powerCycleBehavior

- 電源OFF→ONのみでボンバータイム残G・内部RT状態・ナビ権利を維持するか: UNVERIFIED。
- 設定変更挙動から電断挙動を推定転記しない。

### gameCounterReset

- 最大3000Gはボーナス後RTの継続上限であり、通常時のハマリ天井ではない。
- 通常時ゲーム数天井用カウンタ: NONE_CONFIRMED / NOT_APPLICABLE。
- RT残Gカウンタの設定変更時処理: UNVERIFIED。

### ceilingAfterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- リセット専用短縮天井: NONE_CONFIRMED。

### modeAfterReset

- 通常時ゲーム数管理モード、朝一専用モード、設定変更時の専用モード振り分け: NONE_CONFIRMED。
- RT中ナビ回数状態の設定変更時処理: UNVERIFIED。

### stateAfterReset

- ボンバータイムの設定変更/据え置き/電断時の残G・内部RT・ナビ状態処理: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

### resetBenefits

- 設定変更専用短縮天井、朝一初当たり優遇、朝一RT付与等: NONE_CONFIRMED。
- 朝一専用の公開数値: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の主要不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のガックン、リール出目、液晶、RT/ナビ挙動による設定変更/据え置き判別: 表記揺れと検索語を変更して再探索したがUNVERIFIED。

### numericResetData

- リセット後短縮天井G数: NONE_CONFIRMED / NOT_APPLICABLE
- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. 5号機クロニクル — サミー
   - https://5goki.com/sammy
   - 2006/4導入、設定別機械割95.5〜115.0%
   - reliability: ANALYSIS_SINGLE
2. pachinko’s blog — ボンバーマンビクトリー
   - https://pachinko.hatenablog.jp/entry/2006/04/bomberman-victory
   - 2006/4、設定別BIG/REG確率、ボーナス+RT機。
   - reliability: ANALYSIS_SINGLE
3. パチマガスロマガ — 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/99/c.php
   - 設定別1000円あたりプレイ数、RT中リプレイ確率
   - reliability: ANALYSIS_HIGH
4. HAZUSE — ボンバーマンビクトリー解析
   - https://www.hazuse.com/i/det2/bomberman/top.htm
   - BIG約310枚、REG終了条件、全ボーナス後最大3000G RT、3色ボムによるRT終了
   - reliability: ANALYSIS_HIGH
5. パチ7 — 5号機の発展を名機で振り返る
   - https://pachiseven.jp/articles/detail/4314
   - 2006年4月、チェリー入賞でRTパンク・ナビで回避するゲーム性
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガFREE — ボンバーマンビクトリー編
   - https://pachimaga.com/free/playback/d8be6afb1db37e8e073086d8d8fc6c5aacccef45.php
   - 2006年5月導入表記、RT延命で約115%PAYOUT、RT中ナビ回数振り分けに設定差がある旨。
   - reliability: RETROSPECTIVE_HIGH
7. グリーンべると記事への機種発表記録（タイアップ機一覧から参照）
   - https://web-greenbelt.jp/00004573/
   - 発表時に最大3000G RT「ボンバータイム」を特徴として紹介。
   - reliability: INDUSTRY

## missingFields

- REGの純増枚数
- RTの1Gあたり純増枚数
- 設定変更時のRT残G・内部RT・ナビ状態処理
- 据え置き時のRT残G・内部RT・ナビ状態引継ぎ
- 電源OFF→ONのみのRT/ナビ状態処理
- 本機固有のガックン/朝一変更判別
- 公開朝一専用数値

## conflicts

- 導入月は複数資料で2006年4月、パチマガ回顧記事で2006年5月表記。ホール導入時期差の可能性があるためCONFLICT保持。
- 設定6機械割は115.0% / 114.7%など小差あり。古い当時議論では120%超表記もあったが後に115%前後へ収束しており、120%超は採用しない。
- resetBehaviorは今回確定資料を得られず、性能コアのCOMPLETE_CORE判定を崩さずQA状態のみPARTIALとして分離管理。
