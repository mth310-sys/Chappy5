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

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 本機固有の設定変更時内部処理を直接規定する公開資料は、再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス成立/告知状態、リール制御上の状態、その他内部フラグを設定変更でどう処理するかは推測しない。

### carryOverBehavior

- 公開ゲーム数天井を用いる仕様は確認できず、天井ゲーム数の宵越しは `NOT_APPLICABLE_AS_PUBLIC_GAME_CEILING`。
- 据え置き時のボーナス成立/告知状態や内部フラグの機種固有引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 純電源OFF→ONのみの場合の本機固有挙動は `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更と単純電断を同一扱いとする一般論では補完しない。

### gameCounterReset

- 通常時ゲーム数天井は確認できず、比較対象となる天井ゲーム数カウンタは `NOT_APPLICABLE_AS_PUBLIC_GAME_CEILING`。
- ボーナス間等の別内部カウンタを設定変更/電断で処理する機種固有公開契約は確認できず。

### ceilingAfterReset

- 通常時ゲーム数天井および設定変更時の短縮天井は確認できず `NOT_APPLICABLE_AS_PUBLIC_GAME_CEILING`。

### modeAfterReset

- 朝一専用モード、設定変更専用モード、公開された設定変更時モード振り分けは `PUBLIC_RESET_MODE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 本機固有の朝一内部状態、設定変更時状態再抽選、据え置き/純電断時の状態引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（有利区間制度導入前）。

### resetBenefits

- 朝一/設定変更固有の主要恩恵は、検索語・資料系統を変えた再探索後も確認できず `PUBLIC_RESET_BENEFIT_NOT_FOUND_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の主要な不利要素は確認できず `PUBLIC_RESET_PENALTY_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection

- `ミスターマジックネオ / Mr.MAGIC NEO / ﾐｽﾀｰﾏｼﾞｯｸﾈｵ / Sammy / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 初期出目 / 告知ランプ / 変更判別` を組み合わせ、当時業界記事、旧解析系統、後年DB、実機シミュレータ関連資料まで再探索。
- 本機固有のガックン発生契約、初期出目、告知ランプ等による設定変更確定/推測条件は固定できず `PUBLIC_RESET_DETECTION_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 公開朝一専用数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

2026-09-11に現行v0.7として再評価。従来資料に加え、機種名表記揺れ、メーカー名、PS2実機シミュレータ資料を含め、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/状態/ガックン/初期出目/変更判別を横断検索した。2007年機としての完全告知・ボーナス主体仕様、有利区間制度前、公開ゲーム数天井非確認は再確認できたが、本機固有の設定変更・据え置き・純電断契約、変更判別、公開朝一数値は追加固定できなかった。一般的な5号機ノーマル機の挙動からは補完しない。

## sources

取得日: 2026-08-31 / resetBehavior再探索: 2026-09-11

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
   - 2007年3月に全国ホール登場予定の5号機として紹介。実機シミュレータが存在することも再探索系統として確認
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
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
