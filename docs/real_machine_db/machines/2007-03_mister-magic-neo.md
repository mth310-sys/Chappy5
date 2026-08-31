# ミスターマジックネオ

machineName: ミスターマジックネオ
manufacturer: サミー
releaseDate: 2007-03 / 2007-04（資料差あり）
generation: 5号機初期
systemType: ノーマル / ボーナス完全告知

## payoutRateBySetting

pacnk後年整理値:

- 設定1: 98.37%
- 設定2: 100.16%
- 設定3: 102.78%
- 設定4: 105.25%
- 設定5: 108.22%
- 設定6: 111.00%

HAZUSE当時解析では機械割欄が「調査中」のため、現時点では単一二次資料値として保持する。

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

### BIG
- 設定1: 1/344.93（HAZUSE丸め 1/345）
- 設定2: 1/376.64（1/377）
- 設定3: 1/299.25（1/299）
- 設定4: 1/344.93（1/345）
- 設定5: 1/277.69（1/278）
- 設定6: 1/293.88（1/294）

### MIDDLE
- 設定1: 1/555.39（HAZUSE丸め 1/555）
- 設定2: 1/481.88（1/482）
- 設定3: 1/564.97（1/565）
- 設定4: 1/409.60（1/410）
- 設定5: 1/489.07（1/489）
- 設定6: 1/397.19（1/397）

### ボーナス合成
- 設定1: 約1/213
- 設定2: 約1/211
- 設定3: 約1/196
- 設定4: 約1/187
- 設定5: 約1/177
- 設定6: 約1/169

HAZUSE当時解析とpacnkの精密値はBIG/MIDDLEで丸め差の範囲で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

「ミスターマジックネオ / Mr.MAGIC NEO / Sammy」に「50枚 / 1000円 / ベース / コイン持ち / 通常時回転数」を組み合わせ、HAZUSE、当時業界記事、後年DBを横断したが、比較可能な50枚あたりゲーム数は今回確定できず。

信頼度: UNVERIFIED

## netIncrease

非該当。今回確認した当時解析ではRT/ART等の増加区間を用いる機種ではなく、ボーナス主体の完全告知タイプとして扱う。

## basicPayout

HAZUSE当時解析:

- BIG: 345枚を超える払い出しで終了、純増約312枚
- MIDDLE: 225枚を超える払い出しで終了、純増約208枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- ボーナスは2種類のBIGと2種類のMIDDLEの計4種類。
- ボーナス成立時に「BONUSランプ」が点灯する完全告知タイプ。
- スベリ発生をゲーム性の特徴とする。
- 小役同時抽選機能あり。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時内部処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 本機固有の据え置き時内部状態引継ぎを明記した資料を確認できず
- powerCycleBehavior: 電源OFF→ONのみの場合の本機固有挙動は未確認
- gameCounterReset: 今回確認した性能資料ではゲーム数天井を用いる仕様を確認できず。設定変更時の内部カウンタ処理として断定できる資料はなし
- ceilingAfterReset: リセット時の短縮天井等の公開情報は確認できず
- modeAfterReset: 朝一専用モード/設定変更時モード振り分けの公開情報は確認できず
- stateAfterReset: 朝一専用内部状態の公開情報は確認できず
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要恩恵は確認できず
- resetPenalties: 設定変更固有の主要な不利要素は確認できず
- resetDetection: 「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 変更判別」まで検索語を変えて再探索したが、本機固有の高信頼な変更判別情報を確定できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

機種名表記揺れ「ミスターマジックネオ / Mr.MAGIC NEO / ﾐｽﾀｰﾏｼﾞｯｸﾈｵ」、メーカー名「サミー / Sammy」と、設定変更・リセット・朝一・据え置き・電源OFF ON・天井・モード・状態・ガックン・変更判別を組み合わせて再探索。HAZUSE、当時業界ニュース、後年DBまで横断したが、本機固有のリセット処理・朝一数値は確認できなかったため推測で補完しない。

## sources

取得日: 2026-08-31

1. K-Navi業界ニュース — 勝利の光、感動のスベリ!『完全告知タイプ』ズルピカfor everybody(サミー)
   - https://p-kn.com/topics/news/164/
   - 2007-03-02、サミーが「ミスターマジックネオ」の発売を決定。完全告知タイプ、スベリ機能を確認
   - reliability: INDUSTRY
2. グリーンべると — サミーPS3タイトルを一挙デビュー
   - https://web-greenbelt.jp/00004077/
   - 2007-03-06内覧会で「ゴジラパチスロウォーズ」「ミスターマジックネオ」を発表したことを確認
   - reliability: INDUSTRY
3. グリーンべると — サミー、新たに5号機導入支援プランをスタート
   - https://web-greenbelt.jp/00004081/
   - 2007-03-25以降納品分を対象とする支援施策の対象機種として確認
   - reliability: INDUSTRY
4. HAZUSE — ミスターマジックネオ 解析・機種情報(2版)
   - https://hazuse.com/i/data/neomagic/top.htm
   - 5号機、2007年4月表記、2種BIG+2種MIDDLE、設定別BIG/MIDDLE/合成、BIG純増約312枚、MIDDLE純増約208枚を確認
   - reliability: ANALYSIS_HIGH
5. pacnk — ミスターマジックネオ 設定判別ツール
   - https://pacnk.com/slot/tools/sh_misutamajikeo.html
   - 2007年3月導入表記、設定別BIG/MID精密値、設定別PAYOUTを確認
   - reliability: ANALYSIS_SINGLE
6. MediaWorld — PS2 実戦パチスロ必勝法! ミスターマジックネオ
   - https://mediaworld.co.jp/products/10403007001
   - 2007年3月に全国ホール登場予定の5号機として紹介されていることを確認
   - reliability: ANALYSIS_SINGLE

## missingFields

- baseGamesPer50
- 設定別機械割の別系統照合
- 本機固有の設定変更/据え置き/電源OFF→ON挙動
- 本機固有の変更判別情報
- 公開朝一専用数値

## conflicts

- 導入時期はK-Navi/グリーンべると/pacnk/PS2関連資料が2007年3月導入・登場予定を示す一方、HAZUSE当時解析は「2007年4月」表記。平均化せず2007-03 / 2007-04の資料差として保持。
- 機械割はpacnkに設定別値があるがHAZUSE当時版は「調査中」。数値競合ではないためCONFLICTではなく別系統照合待ち。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
