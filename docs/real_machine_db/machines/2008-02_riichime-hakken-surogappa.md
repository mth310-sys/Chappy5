# リーチ目発見！スロガッパ

machineName: リーチ目発見！スロガッパ
manufacturer: エレコ
modelName: リーチ目発見スロガッパ4
releaseDate: 2008-02（具体日は資料競合: 2008-02-11 / 2008-02-25）
generation: 5号機初期
systemType: ボーナス主体 + 天井RT / リーチ目機
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## payoutRateBySetting
設定構成: 1 / 4 / 6 / H

### P-WORLD / pacnk系列
1: 99.1%
4: 102.1%
6: 106.1%
H: 110.9%

### パチマガスロマガ シミュレート値
1: 98.78%
4: 102.00%
6: 106.31%
H: 111.48%

reliability: CONFLICT

注記:
- 近い値だが同一ではないため平均せず両系列を保持する。
- 回顧資料には最高113.1%表記もあるが、設定別表の定義を直接確認できないため上記2系列とは別の補助競合として扱う。

## initialHitBySetting
|設定|赤7BIG|カッパBIG|BIG合成|REG|ボーナス合成|
|---:|---:|---:|---:|---:|---:|
|1|1/590.41|1/590.41|1/295.21|1/409.60|1/171.56|
|4|1/560.14|1/560.14|1/280.07|1/368.18|1/159.07|
|6|1/520.13|1/520.13|1/260.06|1/330.99|1/145.64|
|H|1/474.90|1/474.90|1/237.45|1/300.62|1/132.66|

reliability: ANALYSIS_HIGH

- パチマガスロマガの精密値とP-WORLD/pacnkの合算丸め値が整合。

## baseGamesPer50
UNVERIFIED_AFTER_RESEARCH

- 当時個人実戦記に「体感約35G/1000円」はあるが、比較用の解析値ではないため物差し値へ採用しない。

## netIncrease
- 天井RTは「現状維持程度」「若干増える」とする解析資料を確認。
- 比較可能な精密純増枚数/Gは `UNVERIFIED_AFTER_RESEARCH`。

## basicPayout
- BIG: 約310〜312枚
- REG: 約101〜104枚

reliability: ANALYSIS_HIGH

- グリーンべると展示会記事: BIG約310枚 / REG約104枚。
- P-WORLD: BB約310枚 / HC約101枚。
- 当時実戦資料: BIG312枚 / REG104枚。
- 表記差は実獲得の丸め・呼称差として保持し、単一点へ無理に統一しない。

## modeSpecificMinimumData
- 約1500パターンのリーチ目を搭載したボーナス主体機。
- ハマリ救済の天井RTを搭載。
- BIG後1000G消化で天井RTへ突入。
- REG後800G消化で天井RTへ突入。
- 天井RTは次回ボーナス成立まで継続する救済機能として扱われる。
- 通常時の出玉増加主体はボーナスで、RTは救済用途。

## resetBehavior
settingChangeBehavior: `天井までのゲーム数をリセットせず引き継ぐ` との解析資料を確認。
carryOverBehavior: `CONFIRMED` — 前日のハマリゲーム数を引き継ぎ、宵越し天井狙いが可能とする資料あり。
powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの処理を設定変更と分離して明記した直接資料は今回確定できず。
gameCounterReset: `CARRY_OVER_CONFIRMED` — 少なくとも設定変更後も天井到達までのゲーム数は引継ぎ。
ceilingAfterReset: `NO_SHORTENING_CONFIRMED` — 設定変更による天井短縮ではなく、BIG後1000G / REG後800Gの既定条件を引き継ぐ。
modeAfterReset: `NONE_CONFIRMED` — 朝一専用モード・リセット専用モードは確認できず。
stateAfterReset: `UNVERIFIED_AFTER_RESEARCH` — すでに天井RT中の場合の設定変更/電断後RT状態・残Gを直接明記した資料は未確定。
advantageousSectionReset: `NOT_APPLICABLE` — 有利区間導入前の5号機。
resetBenefits: `宵越し可能` — 前日ハマリを利用した天井狙いが可能。設定変更による専用優遇数値は確認できず。
resetPenalties: `NONE_CONFIRMED`
resetDetection: `UNVERIFIED_AFTER_RESEARCH` — 本機固有のガックン・初期出目・表示等による変更判別は直接資料を確定できず。天井ゲーム数自体は設定変更でも引き継ぐため、天井到達挙動だけで変更/据え置きを単純判別できる仕様とは扱わない。
numericResetData:
- BIG後天井RT: 1000G
- REG後天井RT: 800G
- 設定変更後: 天井ゲーム数引継ぎ

### resetBehavior探索メモ
`リーチ目発見!スロガッパ / リーチ目発見スロガッパ4 / スロガッパ / エレコ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 宵越し / ガックン / RT` を組み替え、メーカー公式、当時業界記事、P-WORLD、パチマガスロマガ、K-Navi、旧DB/回顧資料を横断。

設定変更時の天井ゲーム数引継ぎは確認できた。一方、電源OFF→ON単独処理、天井RT中の残G/状態、ガックン等は十分な再探索後も直接根拠を確定できなかったため推測しない。

## releaseTimingConflict
- ユニバーサル公式: 2008年2月発売。
- パチビー: 2008-02-11導入。
- ITmedia（2008-02-19記事）: 実機は2008-02-25登場と記載。
- 具体日を平均・推定せず `CONFLICT_RELEASE_DATE` とし、releaseDate本体は月精度 `2008-02` とする。

## sources
取得日: 2026-09-01
1. ユニバーサルエンターテインメント公式 — https://www.universal-777.com/product/slot/slogappa/ — メーカー、5号機、ボーナス+RT、2008年2月発売 — reliability: OFFICIAL
2. グリーンべると「アルゼが展示会開催、2機種を発表」 — https://web-greenbelt.jp/00003493/ — BIG約310枚、REG約104枚、機種性 — reliability: INDUSTRY
3. P-WORLD — https://www.p-world.co.jp/machine/database/5082 — 型式名、合算、出玉率、獲得枚数、天井条件 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ ボーナス確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/72/h.php — 設定別BIG/REG/合算、シミュレートPAYOUT — reliability: ANALYSIS_HIGH
5. パチマガスロマガ 機種TOP — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/72/eleco_slot_72.php — 天井RT項目の存在、解析索引 — reliability: ANALYSIS_HIGH
6. pacnk 設定判別ツール — https://pacnk.com/slot/tools/sh_richimehakkensurogappa.html — 設定別合算/REG/PAYOUT、RT現状維持程度、設定変更後も天井ゲーム数引継ぎ、宵越し可能 — reliability: ANALYSIS_SINGLE
7. パチビー — https://www.pachibee.jp/machines/about/210110012 — 2008-02-11導入、BIG後1000G/REG後800G天井RT — reliability: ANALYSIS_SINGLE
8. ITmedia Mobile — https://www.itmedia.co.jp/mobile/articles/0802/19/news123.html — 2008-02-25実機登場表記 — reliability: INDUSTRY
9. K-Navi — https://p-kn.com/slot/772/ — 天井/宵越し/朝イチ特典カテゴリ存在の補助確認 — reliability: ANALYSIS_SINGLE
10. パチスロ業界初まとめ — https://slothistory.com/kousin_kako04.html — 天井RT機分類、最高機械割113.1%表記 — reliability: ANALYSIS_SINGLE

## missingFields
- 信頼できる比較用50枚あたりゲーム数
- 天井RTの精密純増/G
- 電源OFF→ON単独時の天井/RT状態処理
- 天井RT中に設定変更・電断した場合の残G/状態
- 本機固有のガックン/初期出目等の変更判別

## conflicts
- `CONFLICT_RELEASE_DATE`: 2008-02-11（パチビー） / 2008-02-25（ITmedia）。公式は月精度2008年2月。
- `CONFLICT_PAYOUT_RATE`: P-WORLD/pacnk 99.1/102.1/106.1/110.9% vs パチマガスロマガ 98.78/102.00/106.31/111.48%。回顧資料には最高113.1%表記もあり、平均せず保持。
