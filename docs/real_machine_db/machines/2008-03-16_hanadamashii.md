# ハナダマシイ

machineName: ハナダマシイ
manufacturer: パイオニア
modelName: 華魂（ハナダマシイ） / 25Φ
releaseDate: 2008-03-16
generation: 5号機初期
systemType: ボーナス + 75G完走型RT（D-Rush）
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting
### パチマガスロマガ シミュレート値
|設定|機械割|
|---:|---:|
|1|96.38%|
|2|98.50%|
|3|100.57%|
|4|102.61%|
|5|104.63%|
|6|106.61%|

reliability: ANALYSIS_HIGH

- パチマガスロマガ現存ページの「ハナダマシイ&30」共通掲載値。
- 5号機クロニクルは本機の機械割を不明としており、別の設定別系列は今回確定できなかった。

## initialHitBySetting
### 実ボーナス抽選確率（パチマガスロマガ）
|設定|赤7BIG|青7BIG|BIG合成|
|---:|---:|---:|---:|
|1|1/420.10|1/420.10|1/210.05|
|2|1/399.61|1/399.61|1/199.80|
|3|1/381.02|1/381.02|1/190.51|
|4|1/364.09|1/364.09|1/182.04|
|5|1/348.60|1/348.60|1/174.30|
|6|1/334.37|1/334.37|1/167.18|

reliability: ANALYSIS_HIGH

### D-Rushボーナス / 表示上の出現率に関する資料差
- グリーンべると: D-Rushボーナス出現率 `1/147（設定1）〜1/113（設定6）`
- P-WORLD: BIG確率 `1/147 / 1/137 / 1/129 / 1/121 / 1/113 / 1/107`

reliability: CONFLICT

- 上記1/147系はパチマガスロマガの実ボーナス合成1/210.05〜1/167.18とは定義が一致しない。
- D-RushはBIG+75G完走RTを一体のボーナスのように見せ、RT中成立ボーナスを完走後に告知する構造のため、実ボーナス抽選値とD-Rush/表示上の出現率を同一値へ統合しない。
- グリーンべるとの設定6 1/113とP-WORLDの設定6 1/107も一致しないため平均化せずCONFLICTとして保持。

## baseGamesPer50
|設定|50枚あたりゲーム数|
|---:|---:|
|1|33.00G|
|2|33.00G|
|3|33.00G|
|4|33.01G|
|5|33.01G|
|6|33.02G|

reliability: ANALYSIS_HIGH

- パチマガスロマガ「小役確率」の1000円あたりゲーム数。

## netIncrease
- D-Rush RT: 75G完走型RT
- RT区間の純増: 約50枚 / 75G
- 参考換算: 約+0.67枚/G（50枚÷75G。DB比較用の単純換算であり、公開値そのものは「75Gで約50枚」）

reliability: INDUSTRY / ANALYSIS_HIGH

- グリーンべると当時記事と後年に残る当時攻略記事で「75G・約50枚」が一致。

## basicPayout
- BIG: 規定払い出し220枚超で終了、純増約150枚
- BIG消化: 約25G
- BIG後: 必ず75G完走型RT「D-Rush」へ突入
- BIG約150枚 + RT約50枚 = D-Rush 1セット全体で約200枚増加見込み

reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 完全告知系。レバーON時または次ゲームレバーON時に告知。
- BIG後は必ず75Gの完走型RTへ移行。
- RT中にボーナスが成立しても基本的にRT完走まで告知を遅らせ、完走後の擬似的な1G連感を作る仕様。
- RT終了条件は75G規定消化またはボーナス入賞とする当時資料あり。
- 25Φ版と30Φ版はパチマガスロマガが共通性能ページで扱い、当時攻略記事も「ゲーム性は同じ」と明記。一方、業界アーカイブでは検査適合段階から `華魂` と `華魂-30` を別機種として列挙しているため、本DBでは独立レコード化する。

## resetBehavior
settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH` — `ハナダマシイ / 華魂 / パイオニア / D-Rush` と設定変更・リセット・朝一・据え置き・電源OFF ON・RT・ガックン等を組み替えて再探索。パチマガスロマガ現存目次には「攻め時・ヤメ時・設定変更時」項目が残るが、その本文の設定変更挙動を検索結果から直接確定できなかったため推測しない。
carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時に75G RT残ゲームやボーナス成立状態をどう扱うかを本機固有資料で確定できず。
powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみでRT残G・成立状態が継続/初期化されるかの直接資料なし。
gameCounterReset: `NOT_APPLICABLE_NORMAL_CEILING_NONE_CONFIRMED` — 通常時ゲーム数天井は確認されず、天井カウンタとして比較すべき公開仕様を確認できない。
ceilingAfterReset: `NONE_CONFIRMED` — リセット短縮天井・変更後専用天井の公開値なし。
modeAfterReset: `NONE_CONFIRMED` — 朝一専用モード、設定変更専用モード振り分けは確認されず。
stateAfterReset: `UNVERIFIED_AFTER_RESEARCH` — D-Rush RT中の設定変更/電断でRT状態がどう処理されるかは直接資料未確定。
advantageousSectionReset: `NOT_APPLICABLE` — 有利区間導入前の5号機。
resetBenefits: `NONE_CONFIRMED` — 設定変更・朝一専用の恩恵値は確認されず。
resetPenalties: `NONE_CONFIRMED`
resetDetection: `UNVERIFIED_AFTER_RESEARCH` — 本機固有のガックン、初期出目、ランプ等による変更判別の直接資料を確定できず。
numericResetData:
- 通常時ゲーム数天井: NONE_CONFIRMED
- リセット短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED
- 設定変更専用恩恵発生率: NONE_CONFIRMED
- D-Rush RT: ボーナス後75G（これは朝一専用数値ではない）

### resetBehavior探索メモ
`ハナダマシイ / ハナダマシイ-30 / 華魂 / 華魂-30 / パイオニア / D-Rush / ディーラッシュ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / RT / 75G / ガックン / 初期出目` を組み替え、グリーンべると、パチマガスロマガ現存攻略、P-WORLD、5号機クロニクル、当時業界史アーカイブ、当時攻略記事を横断した。

通常時ゲーム数天井や朝一専用恩恵は確認されず。一方、RT中の設定変更/据え置き/電断挙動は本機固有の直接記述を取り切れないため `UNVERIFIED_AFTER_RESEARCH` とし、一般的な5号機RTの挙動を流用しない。

## releaseTiming
- グリーンべると（2008-03-07）: 既に先行導入されていた `ハナダマシイ（-30）` の正式販売を発表、納品は2008-03-16開始と明記。
- 当時業界史アーカイブ: `2008-03-31発売（2/11先行導入）` と記録。
- 5号機クロニクル: 導入時期 `2008/2`。
- 本DBの主 `releaseDate` は、正式販売の具体的納品開始日を記した当時業界記事を優先して `2008-03-16` とする。
- ただし2/11先行導入と3/31発売の記録は消さず `CONFLICT_RELEASE_TIMING_DEFINITION` として保持。先行導入を含めれば本機の市場存在は2008-02-11まで遡る。

## sources
取得日: 2026-09-01
1. グリーンべると「パイオニアが『ハナダマシイ』の販売を開始」 — https://web-greenbelt.jp/00003541/ — 2008-03-07、先行導入済み、2008-03-16納品開始、D-Rush 1/147〜1/113、BIG純増150枚+75G RT約50枚 — reliability: INDUSTRY
2. パチマガスロマガ「ハナダマシイ&30 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/a.php — ボーナス後75G完走型RT、BIG220枚超払い出し・純増約150枚 — reliability: ANALYSIS_HIGH
3. パチマガスロマガ「ハナダマシイ&30 ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/h.php — 赤7/青7設定別、合成1/210.05〜1/167.18、シミュレート機械割96.38〜106.61% — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「ハナダマシイ&30 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/c.php — 1000円あたり33.00〜33.02G — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「ハナダマシイ&30」目次 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/pioneer_slot_85.php — 共通性能ページ、設定変更時攻略項目の存在 — reliability: ANALYSIS_HIGH
6. P-WORLD「ハナダマシイ」 — https://www.p-world.co.jp/machine/database/5097 — BIG確率1/147〜1/107表記 — reliability: INDUSTRY_DB
7. 5号機クロニクル「パイオニア5号機全機種一覧」 — https://5goki.com/pioneer — 2008/2導入、25Φ/30Φ筐体区分、機械割不明 — reliability: ANALYSIS_SINGLE
8. パチスロ業界初まとめ 更新情報4 — https://slothistory.com/kousin_kako04.html — `華魂（ハナダマシイ）` と `華魂-30` を検査適合済みから別々に列挙 — reliability: INDUSTRY/ARCHIVE
9. パチスロ業界初まとめ 更新情報5 — https://slothistory.com/kousin_kako05.html — `2008/3/31発売（2/11先行導入）` 記録 — reliability: INDUSTRY/ARCHIVE
10. マイクロオーダーサービス当時攻略紹介アーカイブ — https://plaza.rakuten.co.jp/mosnet/diaryall/ — 25Φ/30Φゲーム性同一、75G RT、BIG150枚+RT約50枚、RT終了条件 — reliability: ANALYSIS_SINGLE

## missingFields
- D-Rush表示上出現率1/147系と実ボーナス合成1/210系の厳密な算出定義
- 設定変更・据え置き・電源OFF→ON時のD-Rush RT残G/状態処理
- 本機固有の変更判別（ガックン/初期出目/ランプ等）

## conflicts
- `CONFLICT_RELEASE_TIMING_DEFINITION`: 2008-02-11先行導入 / 2008-03-16正式販売納品開始 / 2008-03-31発売記録 / 5号機クロニクル2008-02。
- `CONFLICT_D_RUSH_DISPLAY_PROBABILITY`: グリーンべると1/147〜1/113、P-WORLD 1/147〜1/107。実ボーナス抽選値1/210.05〜1/167.18とは定義分離。

## reliabilitySummary
- release / system / basic payout: INDUSTRY + ANALYSIS_HIGH
- setting probabilities / payoutRate / base: ANALYSIS_HIGH
- 25Φ/30Φ共通性能: ANALYSIS_HIGH + contemporary archive corroboration
- resetBehavior: PARTIAL / UNVERIFIED_AFTER_RESEARCH where directly unsupported
