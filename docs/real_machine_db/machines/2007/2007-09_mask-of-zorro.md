# マスクオブゾロ

machineName: マスクオブゾロ
manufacturer: ロデオ
formalModel: UNVERIFIED
releaseDate: 2007-09
generation: 5号機初期
systemType: ノーマル / ボーナス主体 / 複数ボーナス
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## 性能コア

### 設定別主要ボーナス確率・機械割

| 設定 | BIG合成 | ZBB合成 | ボーナス合成 | PAYOUT |
|---|---:|---:|---:|---:|
| 1 | 1/366.12 | 1/287.44 | 1/146.61 | 97.80% |
| 2 | 1/366.12 | 1/273.07 | 1/142.78 | 99.95% |
| 3 | 1/326.05 | 1/277.69 | 1/136.82 | 102.55% |
| 4 | 1/341.33 | 1/252.06 | 1/131.07 | 105.30% |
| 5 | 1/303.41 | 1/273.07 | 1/130.55 | 107.94% |
| 6 | 1/302.01 | 1/234.06 | 1/118.30 | 112.59% |

- パチマガスロマガ保存ページは青BIG、赤BIG、青赤BIG、REG、ZBB-A、ZBB-Bを個別掲載しており、上表は比較用に同ページのBIG合成/ZBB合成/全ボーナス合成を採用。
- 5号機クロニクルの機械割は 96.5 / 98.5 / 101.2 / 103.8 / 106.6 / 111.0%。パチマガスロマガのシミュレート値と差があるため平均せず `CONFLICT` として双方保持する。

### ベース

baseGamesPer50:
- 設定1: 35.21G
- 設定2: 36.27G
- 設定3: 35.86G
- 設定4: 37.68G
- 設定5: 38.03G
- 設定6: 39.31G

- パチマガスロマガ保存ページの1000円あたりゲーム数。

### 純増 / RT・ART

netIncrease: NOT_APPLICABLE

- パチマガスロマガの基本システムは `ノーマル/同時成立あり`。
- 出玉増加型RT/ART/ATは確認していない。

### 基本獲得性能

basicPayout:
- BIG: 規定払い出し345枚超で終了 / 純増約312枚
- REG: 規定払い出し105枚超で終了 / 純増約104枚
- ZBB-A: 規定払い出し29枚超で終了 / 純増約26枚
- ZBB-B: 規定払い出し253枚超で終了 / 純増約221枚

P-WORLDもBIG 345枚超、105枚超ボーナス、MB-A 29枚超、MB-B 253枚超の終了条件を掲載し、パチマガスロマガの基本性能記述と整合する。

## 機種同定・導入時期

- 5号機クロニクルはロデオの2007年導入機として `マスクオブゾロ` を掲載し、導入時期を2007/9としている。
- P-WORLDはパチスロ `マスクオブゾロ` として機種DBを保持し、ロデオ機として扱われる当時解析ページとも機種同定が一致する。
- 2007年全機種年表でも `マスクオブゾロ / ロデオ / 9月` を確認。
- 具体的な納品開始日の高信頼資料は今回確定できなかったため、releaseDateは推測せず月精度 `2007-09` とする。

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

- ノーマル/ボーナス主体機で、パチマガスロマガの「攻め時・ヤメ時」は `特にナシ`。
- `マスクオブゾロ 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井`、ロデオ名併記、型式・ボーナス名称併記へ検索語を変更し、P-WORLD、パチマガスロマガ保存ページ、5号機クロニクル、年表/回顧資料を横断した。
- 本機固有の設定変更時の物理リール挙動、成立済みボーナス等の処理、電源OFF→ONのみの挙動、ガックン等による変更判別を直接示す高信頼資料は確定できなかったため、その部分は `UNVERIFIED`。
- 通常時天井、リセット短縮天井、朝一専用モード、CZ/RT/ART状態管理、公開朝一恩恵/不利数値は確認できず `NONE_CONFIRMED / NOT_APPLICABLE`。
- 有利区間は世代上 `NOT_APPLICABLE`。

## 欠損 / 競合

missingFields:
- formalModel: UNVERIFIED
- 具体的な納品開始日: UNVERIFIED（月精度2007-09まで確認）
- 本機固有の設定変更/据え置き/電源OFF→ON処理: UNVERIFIED
- 本機固有のガックン等設定変更判別: UNVERIFIED

conflicts:
- 機械割: パチマガスロマガのシミュレート値 97.80 / 99.95 / 102.55 / 105.30 / 107.94 / 112.59% と、5号機クロニクルの 96.5 / 98.5 / 101.2 / 103.8 / 106.6 / 111.0% が競合。平均せず両系列を保持。

## 出典

1. パチマガスロマガ — 基本システム・獲得性能
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/a.php
   - ノーマル/同時成立あり、BIG/REG/ZBB-A/ZBB-Bの純増・払い出し条件
   - confidence: ANALYSIS_HIGH

2. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/h.php
   - 設定別各ボーナス確率、BIG/ZBB/全ボーナス合成、PAYOUT
   - confidence: ANALYSIS_HIGH

3. パチマガスロマガ — 小役・ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/c.php
   - 設定別1000円あたりゲーム数
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/rodeo_slot_45.php
   - 攻め時・ヤメ時 `特にナシ`
   - confidence: ANALYSIS_HIGH

5. P-WORLD
   - https://www.p-world.co.jp/machine/database/4912
   - パチスロ機種同定、各ボーナスの払い出し終了条件
   - confidence: INDUSTRY

6. 5号機クロニクル — ロデオ
   - https://5goki.com/rodeo
   - 導入2007/9、設定別機械割
   - confidence: ANALYSIS_SINGLE

7. 2007年全機種年表
   - https://dorubako.biz/year/2007.html
   - 2007年9月 `マスクオブゾロ / ロデオ` の掲載
   - confidence: ANALYSIS_SINGLE

取得日: 2026-09-01

## 品質判定

- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL
- performance confidence: ANALYSIS_HIGH
- release confidence: ANALYSIS_SINGLE
- machine payout conflict preserved without averaging.
- missing reset details were left unfilled after required re-search; no estimated values inserted.
