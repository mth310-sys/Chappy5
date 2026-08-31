# くりぃむしちゅー

machineName: くりぃむしちゅー
manufacturer: ロデオ
releaseDate: 2007-09-18
releaseDatePrecision: 当時更新ログの発売日。P-WORLD系/後年資料は2007-09月精度。
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## 性能コア

### 設定別ボーナス確率

| 設定 | S-BIG合成 | N-BIG合成 | BIG合成 | REG合成 | ボーナス合成 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/1872.46 | 1/655.36 | 1/485.45 | 1/753.29 | 1/295.21 |
| 2 | 1/3120.76 | 1/574.88 | 1/485.45 | 1/753.29 | 1/295.21 |
| 3 | 1/1680.41 | 1/601.25 | 1/442.81 | 1/675.63 | 1/267.49 |
| 4 | 1/2427.26 | 1/508.03 | 1/420.10 | 1/661.98 | 1/257.00 |
| 5 | 1/1394.38 | 1/537.18 | 1/387.79 | 1/624.15 | 1/239.18 |
| 6 | 1/1820.44 | 1/448.88 | 1/360.09 | 1/569.88 | 1/220.66 |

initialHitBySetting: ANALYSIS_HIGH

- パチマガスロマガの設定別ボーナス抽選確率を採用。
- 後年整理資料のBIG/REG/合算丸め値とも概ね整合する。

### 機械割

payoutRateBySetting: CONFLICT

パチマガスロマガ・シミュレート値:

| 設定 | PAYOUT |
|---|---:|
| 1 | 95.21% |
| 2 | 96.03% |
| 3 | 97.68% |
| 4 | 100.41% |
| 5 | 103.02% |
| 6 | 106.86% |

5号機クロニクル掲載値:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.5% |
| 3 | 101.2% |
| 4 | 104.0% |
| 5 | 106.7% |
| 6 | 110.8% |

- 両系列は設定1〜6で差が大きく、算定条件差または資料差が考えられるため平均せず `CONFLICT` として保持する。

### 50枚ベース / RT純増

baseGamesPer50: UNVERIFIED
netIncrease: UNVERIFIED

- `くりぃむしちゅー / ロデオ` と `50枚 / 1000円 / ベース / コイン持ち / 通常時` を組み替え、当時解析・旧DB・後年回顧を再探索したが、比較可能な設定別または代表50枚ゲーム数を今回確定できなかった。
- RT「緊急事態」の存在は確認できるが、物差しへ採用できる純増/Gの高信頼な数値は今回確定できなかったため推定しない。

### 基本獲得性能

basicPayout:
- SUPER BIG: 465枚を超える払い出しで終了 / 純増約448枚
- NORMAL BIG: 420枚を超える払い出しで終了 / 純増約348枚
- REG: 12G消化または8回入賞で終了 / 純増は資料差を避け、終了条件を主値とする

- パチマガスロマガはSUPER BIG約448枚、NORMAL BIG約348枚を掲載。
- K-NaviもSUPER BB 465枚超、NORMAL BB 420枚超、RB 12Gまたは8回入賞という終了条件を掲載しており、基本構造を別系統で照合できる。

## システム / RT

- ロデオの5号機。ボーナス主体にRT「緊急事態」を搭載する。
- K-Naviの機種ページでは解析メニュー上にRT「緊急事態」が独立項目として掲載される。
- 後年整理資料でも `ボーナス+RT` と分類される。
- RT内部の細かな成立役別抽選など、実機完全再現用の詳細は本DB対象外。

## 機種同定・導入時期

- `LATEST_HANDOFF.md` で当時更新ログに基づく2007-09-18発売を先行確認済みだったため、その発売日を継承する。
- 後年整理資料では2007年9月リリース/導入で一致する。
- 本レコード作成時のWeb再検索では具体日を独立資料で追加確定できなかったため、具体日の根拠は当時更新ログ系統を明記し、月精度の複数照合を併記する。

## resetBehavior v0.7

resetBehavior:
  settingChangeBehavior: UNVERIFIED
  carryOverBehavior: UNVERIFIED
  powerCycleBehavior: UNVERIFIED
  gameCounterReset: NOT_APPLICABLE / NONE_CONFIRMED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NOT_APPLICABLE / NONE_CONFIRMED
  stateAfterReset: UNVERIFIED
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED
  numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- `くりぃむしちゅー / ロデオ / パチスロくりぃむしちゅー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / RT / 緊急事態` を組み替えて検索した。
- パチマガスロマガ、K-Navi、5号機クロニクル、当時/後年機種整理、旧DB系を横断したが、本機固有の設定変更時・据え置き時・電源OFF→ONのみのRT状態処理を直接示す資料は確定できなかった。
- 通常時ゲーム数天井、リセット時短縮天井、朝一専用モード、設定変更専用の主要恩恵/不利、公開朝一数値は確認できず `NONE_CONFIRMED`。
- RT「緊急事態」中の設定変更/電断時の残G・内部RT状態は直接資料不足のため `stateAfterReset: UNVERIFIED` とし、一般的な5号機挙動から推定しない。
- 本機固有のガックン・初期出目・ランプ等による変更判別も高信頼資料を確定できず `UNVERIFIED`。
- 有利区間は制度導入前の5号機初期につき `NOT_APPLICABLE`。

## 欠損 / 競合

missingFields:
- 50枚あたりゲーム数: UNVERIFIED
- RT純増/G: UNVERIFIED
- 本機固有の設定変更/据え置き/電源OFF→ON時のRT状態処理: UNVERIFIED
- 本機固有の変更判別: UNVERIFIED
- 公開朝一数値: NONE_CONFIRMED

conflicts:
- 機械割: パチマガスロマガのシミュレート95.21〜106.86%と5号機クロニクル97.4〜110.8%が一致しない。平均せず両系列を保持。

## 出典

1. パチマガスロマガ — くりぃむしちゅー スペック/ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/44/h.php
   - 設定別S-BIG/N-BIG/BIG/REG/合算、シミュレートPAYOUT
   - confidence: ANALYSIS_HIGH

2. パチマガスロマガ — 基本情報
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/44/a.php
   - SUPER BIG約448枚、NORMAL BIG約348枚、REG終了条件、プチRT搭載
   - confidence: ANALYSIS_HIGH

3. K-Navi — くりぃむしちゅー
   - https://p-kn.com/slot/653/
   - ロデオ、ボーナス終了条件、RT「緊急事態」
   - confidence: ANALYSIS_HIGH

4. 5号機クロニクル — ロデオ5号機一覧
   - https://5goki.com/rodeo
   - 2007年9月、設定別機械割97.4〜110.8%
   - confidence: ANALYSIS_SINGLE

5. pachinko's blog — ロデオ「パチスロ くりぃむしちゅー」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/09/creamStew
   - 2007年9月、BIG/REG/合算丸め値、ボーナス+RT分類
   - confidence: RETROSPECTIVE

6. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - LATEST_HANDOFFで2007-09-18発売の当時更新ログ根拠として先行確認済み
   - confidence: ARCHIVE_INDUSTRY

取得日: 2026-09-01

## 品質判定

- coreStatus: PARTIAL
- resetBehaviorQA: PARTIAL
- performance confidence: ANALYSIS_HIGH for bonus probabilities/basic payout; CONFLICT for payout rate; UNVERIFIED for baseGamesPer50/RT net increase
- no estimates inserted for missing reset behavior.