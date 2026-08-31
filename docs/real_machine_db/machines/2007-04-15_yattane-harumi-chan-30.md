# やったネ！はるみちゃん-30

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: やったネ！はるみちゃん-30
manufacturer: ヤーマ
releaseDate: 2007-04-15（当時業界記事の納品開始予定） / 2007-04（メーカー公式）
generation: 5号機初期
systemType: ボーナス+RT / MRT / 2種BIG+CT / 3段階設定 / 30Φ

## 性能コア

payoutRateBySetting:
- 5号機クロニクル掲載値（25Φ/30Φ共通扱い）
  - 設定1: 96.5%
  - 設定2: 100.5%
  - 設定3: 104.0%
- パチマガスロマガ シミュレート値（4&30共通）
  - 設定1: 96.89%
  - 設定2: 100.77%
  - 設定3: 104.80%

confidence: CONFLICT

initialHitBySetting:
- 都BIG
  - 設定1: 1/1489.45
  - 設定2: 1/1365.33
  - 設定3: 1/1260.31
- はるみBIG
  - 設定1: 1/496.48
  - 設定2: 1/455.11
  - 設定3: 1/420.10
- はるみ・都・都CT
  - 設定1: 1/744.73
  - 設定2: 1/682.67
  - 設定3: 1/630.15
- ボーナス合算
  - 設定1: 1/248.24
  - 設定2: 1/227.56
  - 設定3: 1/210.05
- 当時グリーンべるとも「4」と30Φ仕様を同じ性能説明で扱い、合算設定1約1/248〜設定3約1/210を記載。

confidence: ANALYSIS_HIGH

baseGamesPer50:
- 設定1: 34.48G/1000円
- 設定2: 34.71G/1000円
- 設定3: 35.12G/1000円
- 当時グリーンべるとの発表値: 約34G/1000円

confidence: ANALYSIS_HIGH

netIncrease:
- MRT: メダルをほぼ減らさず遊技するタイプ。HAZUSEは「増加枚数は見込めない」、当時グリーンべるとは「メダルを減らさずにプレイできる」と記載。
- 都BIG後: 次回ボーナス成立までMRT。
- はるみBIG後: 最大77G MRT。

confidence: ANALYSIS_HIGH

basicPayout:
- BIG: 345枚を超える払い出しで終了 / 実純増目安約312枚
- CT: 235枚を超える払い出しで終了 / 実純増目安約221枚

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- 4種類同時発売のうち30Φ仕様。メーカー公式で「やったネ!はるみちゃん4」と別機種表示。
- HAZUSEは「4」と同スペックと明記。パチマガスロマガも「4&30」と共通解析。
- 2種BIG+CT、3段階設定。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 本機固有の設定変更時にMRT/内部RT状態や残りゲーム数を引き継ぐか、通常状態へ移行するかを確定できる高信頼公開資料は未発見。
- 通常時ゲーム数天井および設定変更による短縮天井は確認されていない。

carryOverBehavior:
- 据え置き時のMRT残りゲーム数/内部RT状態の翌日引継ぎ可否は本機固有資料で確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有の公開挙動はUNVERIFIED。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。公開資料上、通常時ゲーム数天井は確認されていない。
- MRT残りゲーム数の電断・設定変更時処理はUNVERIFIED。

ceilingAfterReset:
- NONE_CONFIRMED。設定変更時の短縮天井・朝一天井は確認できず。

modeAfterReset:
- 通常時ゲーム数モード/朝一専用モードの存在を確認できず。
- リセット時専用モード振り分け公開値もNONE_CONFIRMED。

stateAfterReset:
- MRT/内部RT状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。朝一/設定変更固有の短縮天井、専用高確、初当たり優遇等は確認できず。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。「やったネ！はるみちゃん-30」「やったネ!はるみちゃん-30」「ヤッタネハルミチャン30」「ヤーマ」「30Φ」を軸に、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/MRT持越し/RT残りGを組み合わせ、メーカー公式・業界記事・当時解析・古いDB・後年回顧まで横断したが、本機固有の変更判別を確定できる高信頼資料に到達せず。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

### resetBehavior 再探索メモ

取得日2026-08-31。表記揺れ・30Φ表記・メーカー名・シリーズ名に設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/MRT持越し/RT残りGを組み合わせ、BELLCO現存メーカー情報、グリーンべると、パチマガスロマガ、HAZUSE、5号機クロニクル、後年回顧資料まで確認したが、設定変更・据え置き・単純電断を区別する本機固有の公開値は確認できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. BELLCO（ベルコ株式会社）機種情報「やったネ!はるみちゃん」シリーズ
   - https://www.s-bellco.co.jp/products/slot/yama_harumichan/
   - ヤーマブランド、2007年4月登場、4種類スペック同時展開、「やったネ!はるみちゃん-30」を別機種として表示。
   - confidence: OFFICIAL

2. グリーンべると「演歌歌手・都はるみ、パチスロでもオンステージ」2007-03-16
   - https://web-greenbelt.jp/00004071/
   - 2007-04-15納品開始予定。「やったネ！はるみちゃん4」と30Φ仕様「-30」を同じ性能説明で扱い、2種BIG+CB、BIG約312枚、CB約221枚、MRT、合算1/248〜1/210、1000円約34Gを確認。
   - confidence: INDUSTRY

3. パチマガスロマガ「やったネ!はるみちゃん4&30」基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/06/a.php
   - 4&30共通解析、BIG約312枚、CT約221枚を確認。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ「やったネ!はるみちゃん4&30」ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/06/h.php
   - 設定別2種BIG/CT/合算、PAYOUTシミュレート96.89/100.77/104.80%を確認。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ「やったネ!はるみちゃん4&30」小役/ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/06/c.php
   - 1000円あたり34.48/34.71/35.12Gを確認。
   - confidence: ANALYSIS_HIGH

6. HAZUSE「やったネ!はるみちゃん4」
   - https://hazuse.com/i/data/yattane%21harumichan4/top.htm
   - シリーズ唯一の30パイ仕様「-30」が「4」と同スペックと明記。BIG/CT/MRT性能を確認。
   - confidence: ANALYSIS_HIGH

7. 5号機クロニクル「ヤーマ5号機全機種一覧」
   - https://5goki.com/yama
   - 2007/4導入、「やったネ!はるみちゃん4 25Φ/30Φ」を共通掲載し機械割96.5/100.5/104.0%。
   - confidence: ANALYSIS_SINGLE

8. なな徹「姉妹機『やったネ！はるみちゃん』の姉妹機出過ぎ問題について考える」2024-06-24
   - https://nana-press.com/post/1618061
   - 後年回顧として4機種同日稼働、30パイ姉妹機の位置付けを補助確認。
   - confidence: ANALYSIS_SINGLE

## missingFields

- 設定変更時のMRT/内部RT状態処理
- 据え置き・電源OFF→ON時のMRT残りG数/内部状態の扱い
- 本機固有のガックン等変更判別

## conflicts

- 機械割は5号機クロニクル96.5/100.5/104.0%と、パチマガスロマガのシミュレート96.89/100.77/104.80%が差異。算出条件差の可能性があるため平均せず双方を保持。
- releaseDateはメーカー公式が2007年4月、当時グリーンべるとは2007-04-15「納品開始予定」。予定日と実導入確認日を同一視しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
