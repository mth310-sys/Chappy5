# ハナダマシイ-30

machineName: ハナダマシイ-30
manufacturer: パイオニア
modelName: 華魂（ハナダマシイ）-30 / 30Φ
releaseDate: 2008-03-16
generation: 5号機初期
systemType: ボーナス + 75G完走型RT（D-Rush）・30Φ
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting
### パチマガスロマガ シミュレート値（25Φ/30Φ共通掲載）
|設定|機械割|
|---:|---:|
|1|96.38%|
|2|98.50%|
|3|100.57%|
|4|102.61%|
|5|104.63%|
|6|106.61%|

reliability: ANALYSIS_HIGH

- パチマガスロマガは `ハナダマシイ&30` として両製品を共通性能ページで扱う。
- 当時攻略記事も「25φバージョンも30φバージョンもゲーム性は同じ」と記録。
- 5号機クロニクルは25Φ/30Φ双方の筐体を同一項目に掲載し機械割は不明。別性能を示す高信頼資料は今回確認できない。

## initialHitBySetting
### 実ボーナス抽選確率（パチマガスロマガ共通掲載）
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
- P-WORLD（25Φ代表ページ）: BIG確率 `1/147 / 1/137 / 1/129 / 1/121 / 1/113 / 1/107`

reliability: CONFLICT

- パチマガスロマガの実ボーナス合成1/210.05〜1/167.18とは定義が異なるため統合しない。
- 30Φ単独で異なる確率表を示す資料は確認されず、共通掲載値のみを採用。P-WORLDの1/147系は定義競合の参考系列として保持する。

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

- パチマガスロマガ共通ページの1000円あたりゲーム数。

## netIncrease
- D-Rush RT: 75G完走型RT
- RT区間の純増: 約50枚 / 75G
- 参考換算: 約+0.67枚/G（公開値50枚÷75Gの単純換算）

reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG: 220枚超払い出し終了、純増約150枚
- BIG消化: 約25G
- BIG後: 必ず75G完走型RT「D-Rush」
- BIG約150枚 + RT約50枚 = D-Rush全体で約200枚増加見込み

reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 30Φ版。25Φ版 `ハナダマシイ` と同ゲーム性・共通性能として当時資料に掲載。
- レバーON時または次ゲームレバーON時の完全告知系。
- ボーナス後75G完走型RT。RT中成立ボーナスを完走後に告知することで擬似的な1G連感を作る。
- 業界アーカイブでは検査適合段階から `華魂（ハナダマシイ）` と `華魂（ハナダマシイ）-30` が別々に列挙されるため、本DBの全機種方針に従い25Φ版と分離した。

## resetBehavior
settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH` — `ハナダマシイ-30 / 華魂-30 / パイオニア / 30Φ / D-Rush` と設定変更・リセット・朝一・据え置き・電源OFF ON等を組み替えて探索したが、本機固有の変更時処理を直接確定できず。
carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時のD-Rush RT残G・成立状態処理の直接資料なし。
powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみのRT残G/状態処理を確認できず。
gameCounterReset: `NOT_APPLICABLE_NORMAL_CEILING_NONE_CONFIRMED` — 通常時ゲーム数天井は確認されない。
ceilingAfterReset: `NONE_CONFIRMED` — リセット短縮天井・変更時専用天井なしと判断できる公開数値は見つからず、存在を示す資料も確認されない。
modeAfterReset: `NONE_CONFIRMED` — 朝一専用モード/変更時モード振り分けは確認されず。
stateAfterReset: `UNVERIFIED_AFTER_RESEARCH` — D-Rush RT中の設定変更/電断時状態処理は未確定。
advantageousSectionReset: `NOT_APPLICABLE` — 有利区間導入前の5号機。
resetBenefits: `NONE_CONFIRMED`
resetPenalties: `NONE_CONFIRMED`
resetDetection: `UNVERIFIED_AFTER_RESEARCH` — 30Φ版固有のガックン/初期出目/ランプ等の変更判別資料を確定できず。
numericResetData:
- 通常時ゲーム数天井: NONE_CONFIRMED
- リセット短縮天井: NONE_CONFIRMED
- 朝一専用モード振り分け: NONE_CONFIRMED
- 設定変更専用恩恵発生率: NONE_CONFIRMED
- D-Rush RT: ボーナス後75G（朝一専用値ではない）

### resetBehavior探索メモ
`ハナダマシイ-30 / ハナダマシイ30 / 華魂-30 / 華魂30 / パイオニア / D-Rush / ディーラッシュ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / RT / 75G / ガックン / 初期出目` を組み替え、当時業界記事、パチマガスロマガ、P-WORLD、5号機クロニクル、業界史アーカイブ、当時攻略記事を横断した。

性能値は25Φ/30Φ共通掲載を直接根拠として採用する一方、リセット挙動については30Φ固有/共通の明示を取り切れないため一般論から補完しない。

## releaseTiming
- グリーンべると（2008-03-07）: 先行導入済みの `ハナダマシイ（-30）` を正式販売、2008-03-16納品開始。
- 当時業界史アーカイブ: `ハナダマシイ/-30` を `2008/3/31発売（2/11先行導入）` と記録。
- 5号機クロニクル: 2008/2導入として25Φ/30Φ筐体を併載。
- 主 `releaseDate` は当時業界一次資料の正式販売納品日 `2008-03-16` を採用し、2/11先行導入・3/31発売記録は競合定義として保持。

## sources
取得日: 2026-09-01
1. グリーンべると「パイオニアが『ハナダマシイ』の販売を開始」 — https://web-greenbelt.jp/00003541/ — `ハナダマシイ（-30）`、2008-03-16納品開始、D-Rush仕様 — reliability: INDUSTRY
2. パチマガスロマガ「ハナダマシイ&30 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/a.php — 25Φ/30Φ共通、75G RT、BIG純増約150枚 — reliability: ANALYSIS_HIGH
3. パチマガスロマガ「ハナダマシイ&30 ボーナス確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/h.php — 共通設定別BIG/合成/機械割 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「ハナダマシイ&30 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/c.php — 共通1000円あたりゲーム数 — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「ハナダマシイ&30」目次 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/pioneer_slot_85.php — 共通攻略ページ、設定変更時項目の存在 — reliability: ANALYSIS_HIGH
6. P-WORLD「ハナダマシイ」 — https://www.p-world.co.jp/machine/database/5097 — 1/147〜1/107表記（定義競合参考） — reliability: INDUSTRY_DB
7. 5号機クロニクル「パイオニア5号機全機種一覧」 — https://5goki.com/pioneer — 2008/2、25Φ/30Φ筐体区分 — reliability: ANALYSIS_SINGLE
8. パチスロ業界初まとめ 更新情報4 — https://slothistory.com/kousin_kako04.html — `華魂` / `華魂-30` を別々に検査適合済みとして列挙 — reliability: INDUSTRY/ARCHIVE
9. パチスロ業界初まとめ 更新情報5 — https://slothistory.com/kousin_kako05.html — `2008/3/31発売（2/11先行導入）` — reliability: INDUSTRY/ARCHIVE
10. マイクロオーダーサービス当時攻略紹介アーカイブ — https://plaza.rakuten.co.jp/mosnet/diaryall/ — 25Φ/30Φゲーム性同一、D-Rush約200枚 — reliability: ANALYSIS_SINGLE

## missingFields
- 30Φ版単独の型式末尾/検定番号を直接示す一次資料
- 設定変更・据え置き・電源OFF→ON時のD-Rush RT残G/状態処理
- 30Φ版固有の変更判別
- D-Rush表示上出現率1/147系と実ボーナス抽選1/210系の厳密な算出定義

## conflicts
- `CONFLICT_RELEASE_TIMING_DEFINITION`: 2008-02-11先行導入 / 2008-03-16正式販売納品開始 / 2008-03-31発売記録 / 2008-02月DB表記。
- `CONFLICT_D_RUSH_DISPLAY_PROBABILITY`: グリーンべると1/147〜1/113、P-WORLD代表ページ1/147〜1/107。実ボーナス合成とは定義分離。

## reliabilitySummary
- release / system / common performance: INDUSTRY + ANALYSIS_HIGH
- 30Φ独立機種性: INDUSTRY/ARCHIVE
- resetBehavior: PARTIAL / UNVERIFIED_AFTER_RESEARCH where directly unsupported
