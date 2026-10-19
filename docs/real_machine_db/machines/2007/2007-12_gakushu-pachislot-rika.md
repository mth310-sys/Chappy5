# 学習パチスロ 理科

machineName: 学習パチスロ 理科
manufacturer: 遊人
releaseDate: 2007-12（具体ホール導入日 UNVERIFIED_AFTER_RESEARCH）
generation: 5号機
systemType: ノーマル / ボーナス主体
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## identification

- 「算数」「国語」に続く学習パチスロシリーズ第3弾。
- K-Navi、P-WORLD、5号機クロニクルで遊人製・2007年12月機として一致。
- `2007/12/25` を含む導入予定日候補を再探索したが、具体ホール導入日を一次/当時業界記事で確定できなかったため月精度 `2007-12` とする。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.3% |
| 2 | 97.5% |
| 3 | 100.5% / 100.6% |
| 4 | 102.0% |
| 5 | 106.2% / 106.3% |
| 6 | 111.5% |

- K-Navi: `95.3 / 97.5 / 100.5 / 102.0 / 106.2 / 111.5%`。
- 5号機クロニクル/後年系列: `95.3 / 97.5 / 100.6 / 102.0 / 106.3 / 111.5%`。
- 設定3・5に0.1pt差があるため平均せず `CONFLICT_ROUNDING_DETAIL` として保持。
- reliability: ANALYSIS_HIGH / CONFLICT_DETAIL。

## initialHitBySetting

K-Navi掲載値。

| 設定 | BIG | REG/CB | ボーナス合成（計算値） |
|---|---:|---:|---:|
| 1 | 1/414.78 | 1/414.78 | 約1/207.39 |
| 2 | 1/399.61 | 1/404.54 | 約1/201.02 |
| 3 | 1/381.02 | 1/385.51 | 約1/191.62 |
| 4 | 1/372.36 | 1/372.36 | 約1/186.18 |
| 5 | 1/356.17 | 1/360.09 | 約1/179.05 |
| 6 | 1/341.33 | 1/344.93 | 約1/171.56 |

P-WORLDは合成を `設定1 約1/195 ～ 設定6 約1/161` と掲載しており、K-NaviのBIG/REG単純合算とは一致しない。定義差または掲載差の可能性があるため平均せず `CONFLICT_COMBINED_PROBABILITY` として保持する。

## baseGamesPer50

`UNVERIFIED_AFTER_RESEARCH`。

`学習パチスロ理科 / 学習パチスロ3 / 遊人 / 50枚 / 1000円 / ベース / コイン持ち` を組み替え、K-Navi、P-WORLD、当時解析、後年DBを横断したが比較可能な数値を確定できなかった。

## netIncrease

該当なし（ノーマル/ボーナス主体）。RT/ART純増値は本機の性能コアには設定しない。

## basicPayout

- BIG: 345枚を超える払い出しで終了。パチマガスロマガの平均純増目安 約312枚。
- CB: 240枚を超える払い出しで終了。パチマガスロマガの平均純増目安 約230枚。
- 後年まとめにはCB約221枚表記もあるため、平均せず `CONFLICT_CB_NET_PAYOUT: 約230枚 vs 約221枚` として保持。

## modeSpecificMinimumData

- ボーナス主体の5号機。
- 通常時は「休憩」「授業」「テスト」等の学習演出モードを持つが、演出モードは出玉内部モードではないためresetBehaviorのモード再抽選対象とは扱わない。
- 実機完全再現用の小役確率/同時成立詳細は対象外。

## resetBehavior

### settingChangeBehavior
`UNVERIFIED_AFTER_RESEARCH`。
設定変更時の内部状態、初期出目、ボーナス成立状態等を本機固有に説明する資料は確定できなかった。

### carryOverBehavior
`UNVERIFIED_AFTER_RESEARCH`。
通常時ゲーム数天井や内部モード依存機としての資料は確認されず、据え置き時に比較対象となる公開カウンタ/モード値も確定できなかった。

### powerCycleBehavior
`UNVERIFIED_AFTER_RESEARCH`。
電源OFF→ONのみでの初期出目、液晶、内部状態の本機固有資料を確認できず、一般論から推定しない。

### gameCounterReset
- 通常時ゲーム数天井: `NONE_CONFIRMED`。
- 設定変更時に引継ぎ/リセット対象となる公開天井G数: `NONE_CONFIRMED`。

### ceilingAfterReset
- リセット短縮天井: `NONE_CONFIRMED`。
- 朝一専用天井: `NONE_CONFIRMED`。

### modeAfterReset
設定変更専用モード、朝一専用モード、公開モード振り分け: `NONE_CONFIRMED`。

### stateAfterReset
設定変更時の高確/RT/ART等の状態再抽選: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。本機はボーナス主体で、比較可能な内部状態資料を確認できなかった。

### advantageousSectionReset
`NOT_APPLICABLE`（2007年5号機、有利区間制度前）。

### resetBenefits
朝一/設定変更専用の天井短縮、当選率優遇、CZ/RT恩恵等: `NONE_CONFIRMED`。

### resetPenalties
設定変更時のみの主要な公開不利要素: `NONE_CONFIRMED`。

### resetDetection
ガックン、初期出目、液晶表示、ランプ等による本機固有の設定変更/据え置き判別法: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
公開された朝一専用数値、設定変更専用モード振り分け、短縮天井G数、リセット恩恵率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. K-Navi — 学習パチスロ 理科
   - https://p-kn.com/slot/737/
   - 設定別BIG/REG、機械割、機種概要。
   - reliability: ANALYSIS_HIGH
2. P-WORLD — 学習パチスロ理科
   - https://www.p-world.co.jp/machine/database/5000
   - 合成確率表記、BB/CC払い出し終了条件、2007年当時掲示記録。
   - reliability: INDUSTRY / ANALYSIS_HIGH
3. パチマガスロマガ — 学習パチスロ理科 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yujin_slot/04/a.php
   - ノーマル/同時成立、BIG約312枚、CB約230枚。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — 遊人5号機全機種一覧
   - https://5goki.com/u-jin
   - 2007/12、機械割95.3〜111.5%。
   - reliability: ANALYSIS_SINGLE
5. 4Gamer — 遊人の777タウン参入
   - https://www.4gamer.net/games/021/G002122/20080611006/
   - 遊人代表機種として「学習パチスロ理科」を確認。
   - reliability: INDUSTRY

## missingFields

- baseGamesPer50
- 具体ホール導入日
- 本機固有の設定変更/据え置き/電源OFF→ON挙動
- 本機固有の変更判別法

## conflicts

- payoutRateBySetting: 設定3 `100.5 vs 100.6%`、設定5 `106.2 vs 106.3%`。
- P-WORLD合成 `約1/195→1/161` とK-Navi BIG/REG単純合算値が不一致。定義確認不能のため双方保持。
- CB平均純増: 約230枚 vs 約221枚。
