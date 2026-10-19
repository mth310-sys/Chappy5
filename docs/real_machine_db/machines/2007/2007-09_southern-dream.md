# サザンドリーム

machineName: サザンドリーム
manufacturer: ネイチャー・アセスメント
formalModel: UNVERIFIED
releaseDate: 2007-09
generation: 5号機初期
systemType: ノーマル / 完全告知 / ボーナス主体
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## 性能コア

### 設定別ボーナス確率・機械割

| 設定 | BIG | REG | ボーナス合算 | PAYOUT |
|---|---:|---:|---:|---:|
| 1 | 1/394.8 | 1/630.2 | 1/242.7 | 96.90% |
| 2 | 1/385.5 | 1/630.2 | 1/239.2 | 98.96% |
| 3 | 1/376.6 | 1/630.2 | 1/235.7 | 100.78% |
| 4 | 1/376.6 | 1/574.9 | 1/227.6 | 102.03% |
| 5 | 1/376.6 | 1/512.0 | 1/217.0 | 104.64% |
| 6 | 1/376.6 | 1/481.9 | 1/211.4 | 107.07% |

- 上記確率・PAYOUTはパチマガスロマガ保存ページ。
- 5号機クロニクルの機械割は 96.9 / 99.0 / 100.8 / 102.0 / 104.6 / 107.1% で、パチマガスロマガ値の丸めと整合する。

### ベース

baseGamesPer50: UNVERIFIED

- パチマガスロマガの当時攻略ページは「1000円あたりのゲーム数 現在調査中」と明記。
- 機種名、メーカー名、1000円、50枚、ベース、コイン持ち、型式、BIG/REG確率等へ検索語を変更し、P-WORLD、5号機クロニクル、保存解析資料を横断したが、比較可能な設定別/代表ベース値を確定できなかった。
- P-WORLD掲示板に1Kで高回転したという個人投稿は存在するが、実戦上の単発観測なので性能値には採用しない。

### 純増 / RT・ART

netIncrease: NOT_APPLICABLE

- P-WORLDは5号機ノーマル、パチマガスロマガは「ノーマル/完全告知/同時成立あり」と整理。
- 出玉増加型RT/ART/AT搭載は確認していない。

### 基本獲得性能

basicPayout:
- BIG: 規定払い出し400枚超で終了 / 純増約351枚
- REG: 規定払い出し120枚超で終了 / 純増約104枚

P-WORLDの備考はBIG 400枚以上、REG 105枚以上で終了と表記する一方、パチマガスロマガはBIG400枚・REG120枚の規定払い出しと純増351/104枚を掲載。REGについて表現差があるため、実獲得枚数はパチマガスロマガの約104枚を採用し、払い出し終了条件の記述差は注記として保持する。

## 機種同定・導入時期

- P-WORLD: パチスロ、ネイチャー・アセスメント、5号機ノーマル、導入開始2007年09月。
- 5号機クロニクル: ネイチャー・アセスメント2007年導入機種、サザンドリーム、導入時期2007/9。
- 後年検定通過まとめでは2007-06-28に「サザンドリーム（回胴）」の検定通過記録あり。
- 今回、具体的なホール納品開始日の高信頼資料は確定できなかったため、releaseDateは推測せず月精度 `2007-09` とする。

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

- ノーマル/完全告知機で、パチマガスロマガの「攻め時・ヤメ時」は「特にナシ」。通常時天井・短縮天井・朝一専用モード・CZ/RT/ART状態管理に該当する公開仕様は確認できない。
- 「サザンドリーム 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / モード」およびメーカー名併記で再探索したが、本機固有の設定変更時のリール挙動、初期出目、ガックン、成立済みボーナス等の扱いを直接示す高信頼資料は確定できなかった。
- よって通常時天井、リセット短縮、朝一専用モード、公開朝一恩恵/不利は `NONE_CONFIRMED`。本機固有の設定変更/電断処理と変更判別は `UNVERIFIED`。
- 有利区間は世代上 `NOT_APPLICABLE`。

## 欠損 / 競合

missingFields:
- formalModel: UNVERIFIED
- baseGamesPer50: UNVERIFIED
- 本機固有の設定変更/据え置き/電源OFF→ON処理: UNVERIFIED
- 本機固有のガックン等設定変更判別: UNVERIFIED

conflicts:
- REGの払い出し終了条件表記に差あり。P-WORLDは105枚以上で終了、パチマガスロマガは規定払い出し120枚（純増104枚）と掲載。純増104枚は性能比較値として採用し、終了条件は定義差/記述差として注記。

## 出典

1. パチマガスロマガ — 基本システム・獲得性能
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/04/a.php
   - ノーマル/完全告知/同時成立あり、BIG約351枚、REG約104枚
   - confidence: ANALYSIS_HIGH

2. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/04/h.php
   - 設定別BIG/REG/合算、PAYOUT
   - confidence: ANALYSIS_HIGH

3. パチマガスロマガ — 小役・ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/04/c.php
   - 1000円あたりゲーム数が「現在調査中」であることを確認
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nature_slot/04/nature_slot_04.php
   - 攻め時・ヤメ時「特にナシ」
   - confidence: ANALYSIS_HIGH

5. P-WORLD
   - https://www.p-world.co.jp/machine/database/4877
   - メーカー、5号機ノーマル、導入開始2007年09月、払い出し終了条件
   - confidence: INDUSTRY

6. 5号機クロニクル — ネイチャー・アセスメント
   - https://5goki.com/nature-assessment
   - 導入2007/9、設定別機械割
   - confidence: ANALYSIS_SINGLE

7. ネイチャー・アセスメント検定通過まとめ
   - https://q-and-a.hatenablog.com/entry/2016/10/23/110857
   - 2007-06-28 サザンドリーム（回胴）検定通過記録
   - confidence: ANALYSIS_SINGLE

取得日: 2026-09-01

## 品質判定

- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL
- performance confidence: ANALYSIS_HIGH
- release confidence: INDUSTRY
- missing values were left unfilled after required re-search; no estimated values inserted.
