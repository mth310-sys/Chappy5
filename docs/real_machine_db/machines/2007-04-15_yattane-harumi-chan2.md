# やったネ！はるみちゃん2

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: やったネ！はるみちゃん2
manufacturer: ヤーマ
releaseDate: 2007-04-15（当時業界記事の納品開始予定） / 2007-04（メーカー公式）
generation: 5号機初期
systemType: ボーナス+RT / FRT / 3種BIG / 3段階設定

## 性能コア

payoutRateBySetting:
- 5号機クロニクル掲載値
  - 設定1: 96.5%
  - 設定2: 100.5%
  - 設定3: 104.0%
- パチマガスロマガ シミュレート値
  - 設定1: 97.15%
  - 設定2: 101.23%
  - 設定3: 104.83%

confidence: CONFLICT

initialHitBySetting:
- BIG合算
  - 設定1: 1/468.11
  - 設定2: 1/420.10
  - 設定3: 1/390.10
- 図柄別BIG
  - はるみ・都・都BIG: 全設定1/8192.00
  - 都BIG: 設定1 1/963.76 / 設定2 1/862.32 / 設定3 1/780.19
  - はるみBIG: 設定1 1/1024.00 / 設定2 1/910.22 / 設定3 1/862.32
- 当時グリーンべるとも設定1 1/468〜設定3 1/390のレンジを記載しており端点を別系統資料で照合。

confidence: ANALYSIS_HIGH

baseGamesPer50:
- 設定1: 39.99G/1000円
- 設定2: 40.95G/1000円
- 設定3: 41.79G/1000円
- 当時グリーンべるとのシリーズ発表値: 約40G/1000円

confidence: ANALYSIS_HIGH

netIncrease:
- FRT: 約+0.85枚/G
- 「はるみ・都・都」BIG後: 3333G FRT
- 「都」BIG後: 222G FRT
- 「はるみ」BIG後: RTなし
- FRTはボーナス成立または規定G数完走で終了。

confidence: INDUSTRY

basicPayout:
- 3種類のBIGはいずれも465枚を超える払い出しで終了
- 実純増目安: 約310枚

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- 同時発売4スペック中の中波/ライトユーザー向け仕様。
- RT中は目押し不要のFRT仕様として当時解析に記載。
- 設定は1〜3の3段階。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 本機固有の設定変更時にFRT/内部RT状態を引き継ぐか、通常状態へ移行するかを確定できる高信頼公開資料は今回未発見。
- 通常時ゲーム数天井を主軸とする機種ではなく、設定変更による短縮天井も確認されていない。

carryOverBehavior:
- 据え置き時のFRT残りゲーム数/内部RT状態の翌日引継ぎ可否は本機固有資料で確定できずUNVERIFIED。
- 通常時天井ゲーム数・モードの引継ぎ仕様は確認されていない。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有の公開挙動はUNVERIFIED。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。公開資料上、通常時ゲーム数天井は確認されていない。
- FRT残りゲーム数の電断/変更時処理はUNVERIFIED。

ceilingAfterReset:
- NONE_CONFIRMED。設定変更時の短縮天井・朝一天井は確認できず。

modeAfterReset:
- 通常時ゲーム数モード/朝一専用モードの存在を確認できず。
- リセット時専用モード振り分け公開値もNONE_CONFIRMED。

stateAfterReset:
- FRT/内部RT状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。朝一/設定変更固有の短縮天井、専用高確、初当たり優遇等は今回確認できず。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。「やったネ！はるみちゃん2」「やったネ!はるみちゃん2」「ヤッタネハルミチャン2」「ヤーマ」を軸に「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「モード」「ガックン」「RT持越し」を組み合わせ、メーカー公式・業界記事・当時解析・古い機種DB・後年回顧を横断したが、本機固有の変更判別を確定できる高信頼資料に到達せず。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

### resetBehavior 再探索メモ

取得日2026-08-31。表記揺れ「やったネ！はるみちゃん2」「やったネ!はるみちゃん2」「ヤッタネハルミチャン2」、メーカー名「ヤーマ」、シリーズ名「やったネ！はるみちゃんシリーズ」を使い、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/FRT持越し/RT残りGを組み合わせて検索。BELLCO現存メーカー情報、グリーンべると、パチマガスロマガ、5号機クロニクル、後年回顧資料まで確認したが、設定変更・据え置き・単純電断を区別する本機固有の公開値は確認できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. BELLCO（ベルコ株式会社）機種情報「やったネ!はるみちゃん」シリーズ
   - https://www.s-bellco.co.jp/products/slot/yama_harumichan/
   - ヤーマブランド、2007年4月登場、4種類スペック同時展開、「やったネ!はるみちゃん2」の独立機種表記を確認。
   - confidence: OFFICIAL

2. グリーンべると「演歌歌手・都はるみ、パチスロでもオンステージ」2007-03-16
   - https://web-greenbelt.jp/00004071/
   - 2007-04-15納品開始予定、3段階設定、BIG約310枚、FRT約+0.85枚/G、3333G/222G、合算設定1 1/468〜設定3 1/390、1000円約40Gを確認。
   - confidence: INDUSTRY

3. パチマガスロマガ「やったネ!はるみちゃん2」基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/07/a.php
   - 中波タイプ、RT/同時成立、BIG465枚超払い出し終了・純増約310枚、RT中目押し不要を確認。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ「やったネ!はるみちゃん2」ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/07/h.php
   - 設定別3種BIG確率、BIG合算1/468.11・1/420.10・1/390.10、PAYOUTシミュレート97.15・101.23・104.83%を確認。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ「やったネ!はるみちゃん2」小役/ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/07/c.php
   - 1000円あたり39.99G・40.95G・41.79Gを確認。
   - confidence: ANALYSIS_HIGH

6. 5号機クロニクル「ヤーマ5号機全機種一覧」
   - https://5goki.com/yama
   - 2007/4導入、機械割96.5・100.5・104.0%を確認。
   - confidence: ANALYSIS_SINGLE

7. なな徹「姉妹機『やったネ！はるみちゃん』の姉妹機出過ぎ問題について考える」2024-06-24
   - https://nana-press.com/post/1618061
   - 後年回顧として4機種同日稼働、「2」は222G/3333G RT・3段階・最高104%の整理を補助確認。
   - confidence: ANALYSIS_SINGLE

## missingFields

- 設定変更時のFRT/内部RT状態処理
- 据え置き・電源OFF→ON時のFRT残りG数/内部状態の扱い
- 本機固有のガックン等変更判別

## conflicts

- 機械割は5号機クロニクル96.5/100.5/104.0%と、パチマガスロマガのシミュレート97.15/101.23/104.83%が競合。定義/算出条件差を含む可能性があるため平均せず双方を保持。
- releaseDateはメーカー公式が2007年4月、当時グリーンべるとは2007-04-15「納品開始予定」。予定日と実導入確認日を同一視しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
