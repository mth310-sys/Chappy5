# 学習パチスロ国語

machineName: 学習パチスロ国語
manufacturer: 遊人
formalModel: 学習パチスロ2（当時資料表記）
releaseDate: 2007-09-03
releaseDatePrecision: 発売日。P-WORLD/5号機クロニクルは2007-09月精度。
generation: 5号機初期
systemType: ノーマル / BIG + CB
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## 性能コア

### 設定別ボーナス確率

| 設定 | BIG | CB | 合算 |
|---|---:|---:|---:|
| 1 | 1/648.87 | 1/277.69 | 1/194.47 |
| 2 | 1/630.15 | 1/269.70 | 1/188.86 |
| 3 | 1/601.25 | 1/259.04 | 1/181.04 |
| 4 | 1/579.96 | 1/249.19 | 1/174.30 |
| 5 | 1/555.39 | 1/240.06 | 1/167.61 |
| 6 | 1/537.18 | 1/229.95 | 1/161.02 |

initialHitBySetting: ANALYSIS_HIGH

- パチマガスロマガの設定別ボーナス抽選確率を採用。
- 後年実機回顧動画の合算丸め値1/194〜1/161とも整合する。

### 機械割

payoutRateBySetting: CONFLICT

パチマガスロマガ・シミュレート値:

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.38% |
| 2 | 99.00% |
| 3 | 101.39% |
| 4 | 103.63% |
| 5 | 106.07% |
| 6 | 108.55% |

5号機クロニクル掲載値:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.8% |
| 3 | 101.0% |
| 4 | 103.1% |
| 5 | 105.3% |
| 6 | 107.6% |

- 算定条件差または資料差とみられるため平均せず `CONFLICT` として両系列を保持。

### 50枚ベース / 純増

baseGamesPer50: UNVERIFIED
netIncrease: NOT_APPLICABLE

- `学習パチスロ国語 1000円 / 50枚 / ベース / コイン持ち / 通常時`、遊人・学習パチスロ2併記など検索語を変え、当時解析・古いDB・回顧資料を再探索したが、比較可能な50枚あたりゲーム数は今回確定できなかった。
- RT/ART/ATを伴う出玉増加区間は確認されておらず、ノーマル機として扱う。

### 基本獲得性能

basicPayout:
- BIG: 345枚を超える払い出しで終了 / 純増約312枚
- CB（P-WORLD表記CC）: 240枚を超える払い出しで終了 / 純増約221枚

- P-WORLDはBB 345枚超、CC 240枚超で終了と記載。
- HAZUSE当時ページもBIG 345枚超、REG表記の第二ボーナスを240枚超で終了とする。
- 後年回顧資料は約312枚 / 約221枚としており、払い出し終了条件と純増値を分離して保存する。

## システム / 演出

- 学習パチスロシリーズ第2弾。国語問題を利用した休憩・授業・バトル等の演出モードを持つ。
- 問題回答や称号は演出要素として扱い、出玉性能に影響する内部モードとは分離する。
- P-WORLDは5号機ノーマルとして掲載。

## 機種同定・導入時期

- 当時の「パチスロ業界初まとめ」更新ログは `学習パチスロ2` を「学習パチスロ国語」と同定し、2007-09-03発売と記録。
- P-WORLDと5号機クロニクルは2007年9月導入として一致。
- HAZUSEページは2007-08-27作成でページ上部に2007年8月表記があるが、これは発売月本線とせず、当時ページ作成時期/表記差として保持する。

## resetBehavior v0.7

resetBehavior:
  settingChangeBehavior: UNVERIFIED
  carryOverBehavior: UNVERIFIED
  powerCycleBehavior: UNVERIFIED
  gameCounterReset: NOT_APPLICABLE / NONE_CONFIRMED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NOT_APPLICABLE / NONE_CONFIRMED
  stateAfterReset: NOT_APPLICABLE / NONE_CONFIRMED
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED
  numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- `学習パチスロ国語 / 学習パチスロ2 / 遊人` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井` を組み替え、P-WORLD、HAZUSE、パチマガスロマガ、旧機種DB、回顧資料を再探索した。
- 本機固有の設定変更時処理、据え置き時処理、電源OFF→ONのみの処理、ガックン等による変更判別を直接示す資料は確定できず `UNVERIFIED`。
- 通常時ゲーム数天井、短縮天井、朝一専用モード、設定変更専用の恩恵/不利、公開朝一数値は `NONE_CONFIRMED`。
- 演出上の休憩/授業/バトル等は出玉内部状態として扱わない。
- 有利区間は制度導入前の5号機初期につき `NOT_APPLICABLE`。

## 欠損 / 競合

missingFields:
- 50枚あたりゲーム数: UNVERIFIED
- 本機固有の設定変更/据え置き/電源OFF→ON処理: UNVERIFIED
- 本機固有の変更判別: UNVERIFIED
- 公開朝一数値: NONE_CONFIRMED

conflicts:
- 機械割: パチマガスロマガのシミュレート値97.38〜108.55%と、5号機クロニクル97.3〜107.6%が一致しないため平均せず両方保持。
- 時期表記: 発売日2007-09-03、P-WORLD/5号機クロニクル2007-09に対し、HAZUSEページは2007年8月表記。具体発売日は当時更新ログを本線とする。

## 出典

1. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yujin_slot/03/h.php
   - 設定別BIG/CB/合成確率、シミュレートPAYOUT
   - confidence: ANALYSIS_HIGH

2. P-WORLD — 学習パチスロ国語
   - https://www.p-world.co.jp/machine/database/4867
   - 遊人、5号機ノーマル、導入開始2007年09月、BB/CC終了条件
   - confidence: INDUSTRY

3. 5号機クロニクル — 遊人
   - https://5goki.com/u-jin
   - 導入時期2007/9、設定別機械割97.3〜107.6%
   - confidence: ANALYSIS_SINGLE

4. HAZUSE — 学習パチスロ国語
   - https://hazuse.com/i/data/gakushupachisurokokugo/top.htm
   - 2007-08-27作成の当時ページ、BIG/第二ボーナス終了条件、システム概要
   - confidence: ARCHIVE_ANALYSIS

5. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 2007年当時更新ログ。学習パチスロ2=学習パチスロ国語、2007/9/3発売と記録
   - confidence: ARCHIVE_INDUSTRY

6. ぱち馬鹿っ!! — 珍古台実践 学習パチスロ国語
   - https://www.youtube.com/watch?v=ZP5_mRUpGNY
   - 導入日2007/09/03、合算丸め値、BIG約312枚/REG約221枚の後年実機回顧
   - confidence: RETROSPECTIVE

取得日: 2026-09-01

## 品質判定

- coreStatus: PARTIAL
- resetBehaviorQA: PARTIAL
- performance confidence: ANALYSIS_HIGH for bonus probabilities/basic payout; CONFLICT for payout rate; UNVERIFIED for baseGamesPer50
- no estimates inserted for missing reset behavior.