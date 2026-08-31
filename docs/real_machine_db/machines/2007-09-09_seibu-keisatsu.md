# 西部警察

machineName: 西部警察
manufacturer: ニューギン
formalModel: セイブケイサツX
releaseDate: 2007-09-09
generation: 5号機初期
systemType: A+RT / ボーナス+固定G数RT
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## 性能コア

### 設定別ボーナス確率・機械割

| 設定 | 青BIG | 赤BIG | 黒BIG | ボーナス合成 | 機械割 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/443 | 1/1040 | 1/1040 | 1/239 | 95.8% |
| 2 | 1/400 | 1/1024 | 1/1024 | 1/224 | 98.9% |
| 3 | 1/364 | 1/1008 | 1/1008 | 1/211 | 102.0% |
| 4 | 1/333 | 1/1008 | 1/1008 | 1/200 | 104.8% |
| 5 | 1/315 | 1/950 | 1/950 | 1/189 | 107.9% |
| 6 | 1/299 | 1/898 | 1/898 | 1/180 | 110.9% |

- 設定別全表は5号機クロニクルの後年整理値。
- 2007-08-24付グリーンべると当時記事は、発表時点で「スペックは基本的に未公表」としつつ設定6のボーナス合成を約1/180と報じており、5号機クロニクルの設定6合成値と整合する。
- 全設定値は当時一次資料による完全照合まではできないため、設定別表のconfidenceは `ANALYSIS_SINGLE`、設定6合成は `INDUSTRY` 照合ありとする。

### ベース

baseGamesPer50:
- 約38G / 1000円（50枚）

- グリーンべると当時記事の公表値。
- confidence: INDUSTRY

### RT / 純増

netIncrease:
- 赤BIG後RT「木暮チャンス」: 50G、完走時の増加見込み約17.6枚
- 黒BIG後RT「木暮チャンス」: 100G、完走時の増加見込み約35.3枚

modeSpecificMinimumData:
- 赤BIG後: RT 50G
- 黒BIG後: RT 100G
- グリーンべると当時記事のRT引き戻し期待: 50G約24%、100G約43%

- 17.6枚/50G、35.3枚/100Gは当時記事に記載された完走時増加見込みをそのまま保持し、DB内で独自の純増/Gへ丸め換算しない。

### 基本獲得性能

basicPayout:
- 青7BIG: 純増約300枚 / 348枚を超える払い出しで終了
- 赤7BIG: 純増約200枚 / 239枚を超える払い出しで終了 + RT50G
- 黒7BIG: 純増約100枚 / 119枚を超える払い出しで終了 + RT100G

- 純増目安はグリーンべると当時記事およびパチマガスロマガ保存ページ。
- 払い出し終了条件はP-WORLDおよびパチマガスロマガ保存ページで照合。

## 機種同定・導入時期

- 2007-08-24付グリーンべると記事はニューギンが2007-08-23に発表会を開催し、`西部警察` の納品日を **2007-09-09** と明記する。
- P-WORLDの型式名は `セイブケイサツX`。
- 5号機クロニクルもニューギンの2007年機として `西部警察`、導入時期2007/9を掲載する。
- 本DBでは具体的な業界一次資料の納品日を優先してreleaseDateを `2007-09-09` とする。

## resetBehavior v0.7

resetBehavior:
  settingChangeBehavior: UNVERIFIED
  carryOverBehavior: UNVERIFIED
  powerCycleBehavior: UNVERIFIED
  gameCounterReset: NONE_CONFIRMED / RT残G処理はUNVERIFIED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NOT_APPLICABLE / NONE_CONFIRMED
  stateAfterReset: RT中の設定変更時状態処理はUNVERIFIED
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED
  numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- `西部警察 / 西部警察X / セイブケイサツX / ニューギン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / RT残り / 天井 / 天井短縮 / ガックン / 変更判別` を組み替えて再探索した。
- パチマガスロマガ保存ページ、P-WORLD、当時業界記事、5号機クロニクル、旧DB/回顧資料を横断。
- パチマガスロマガの機種トップは攻め時・ヤメ時を `特にナシ` としており、通常時天井・朝一専用モード・リセット短縮天井・公開朝一恩恵数値は確認できなかった。
- 本機にはボーナス後50G/100Gの固定RTがあるため、設定変更・据え置き・電源OFF→ONをRT中に行った場合のRT残G/内部RT状態の処理はホール経営上意味があるが、今回の再探索では本機固有の直接資料を確定できなかった。一般的な5号機挙動から推定せず `UNVERIFIED` とする。
- 設定変更時の物理リール挙動やガックン等、客側の変更判別についても本機固有資料を確認できず `UNVERIFIED`。
- 有利区間は世代上 `NOT_APPLICABLE`。

## 欠損 / 競合

missingFields:
- 設定変更時のRT残G/内部RT状態処理: UNVERIFIED
- 据え置き時のRT残G/内部RT状態処理: UNVERIFIED
- 電源OFF→ONのみの場合のRT残G/内部RT状態処理: UNVERIFIED
- 本機固有のガックン等設定変更判別: UNVERIFIED

conflicts:
- NONE_CONFIRMED

## 出典

1. グリーンべると「ニューギンがパチ2機種、スロ1機種を発表」(2007-08-24)
   - https://web-greenbelt.jp/00004285/
   - 2007-09-09納品、約38G/1000円、各ボーナス純増目安、RT50G/100G、RT完走時増加見込み、設定6合成約1/180
   - confidence: INDUSTRY

2. P-WORLD 西部警察
   - https://www.p-world.co.jp/machine/database/4880
   - 型式 `セイブケイサツX`、青/赤/黒ボーナスの払い出し終了条件、赤後RT50G・黒後RT100G
   - confidence: INDUSTRY

3. パチマガスロマガ 西部警察X 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/03/a.php
   - 同時成立あり/RT、青約300枚・赤約200枚・黒約100枚、赤後RT50G・黒後RT100G
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ 西部警察X 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/03/newgin_slot_03.php
   - 攻め時・ヤメ時 `特にナシ`
   - confidence: ANALYSIS_HIGH

5. 5号機クロニクル — ニューギン＆エキサイト
   - https://5goki.com/newgin-excite
   - 導入2007/9、設定別青BIG/赤BIG/黒BIG/合成、設定別機械割
   - confidence: ANALYSIS_SINGLE

取得日: 2026-09-01

## 品質判定

- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL
- release confidence: INDUSTRY
- base/basic payout/RT confidence: INDUSTRY + ANALYSIS_HIGH
- full setting table confidence: ANALYSIS_SINGLE; setting6 combined rate cross-checked against contemporary INDUSTRY source
- missing reset details were left UNVERIFIED only after required term/source-family re-search; no estimated values inserted.
