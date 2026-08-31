# やったネ！はるみちゃん

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: やったネ！はるみちゃん
manufacturer: ヤーマ
releaseDate: 2007-04-15（当時業界記事の納品開始予定） / 2007-04（メーカー公式）
generation: 5号機初期
systemType: ボーナス+ART / 3種BIG

## 性能コア

payoutRateBySetting:
- 設定1: 95.0%
- 設定2: 97.5%
- 設定3: 100.5%
- 設定4: 104.0%
- 設定5: 107.5%
- 設定6: 112.0%

confidence: ANALYSIS_SINGLE

initialHitBySetting:
- BIG合算（3種類BIGの合算）
  - 設定1: 1/481
  - 設定2: 1/468
  - 設定3: 1/468
  - 設定4: 1/468
  - 設定5: 1/468
  - 設定6: 1/455
- 当時グリーンべるとも設定1 1/481〜設定6 1/455のレンジを記載しており、端点は別系統資料で照合できる。

confidence: ANALYSIS_HIGH_FOR_RANGE / ANALYSIS_SINGLE_FOR_FULL_TABLE

baseGamesPer50:
- 約33G/1000円（約33G/50枚相当、3枚掛け時の通常時目安）

confidence: INDUSTRY

netIncrease:
- ART: 約+1.5枚/G
- 555G ART完走時の平均獲得増加目安: 約800枚（HAZUSE）
- 1555G ART完走時の平均獲得増加目安: 約2300枚（HAZUSE）

confidence: INDUSTRY_FOR_+1.5 / ANALYSIS_SINGLE_FOR_COMPLETION_PAYOUT

basicPayout:
- BIG: 3種類とも465枚を超える払い出しで終了、純増約350枚
- 「はるみ・はるみ・都」BIG後: 1555GのART
- 「都・都・都」BIG後: 555GのART
- 「はるみ・はるみ・はるみ」BIG後: ARTなし

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- 同時発売4スペックのうち最も出玉性能に比重を置いた荒波タイプ。
- ARTは小役ナビを伴うアシストリプレイタイムで、純増約+1.5枚/G。
- ARTはボーナス成立、規定G数完走、パンク役入賞で終了する当時資料記載あり。
- 設定は6段階。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 本機固有の設定変更時にART状態、内部RT状態、パンク回避状態等をどのように扱うかを確定できる当時高信頼資料は今回未発見。
- 通常時のゲーム数天井を主軸とする機種ではないため、設定変更による「天井短縮」は確認されていない。

carryOverBehavior:
- 据え置き時に引き継ぐ通常時天井ゲーム数・モードの公開仕様は確認できず。
- ART中電断/翌日据え置き時の継続可否は本機固有資料で確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有の公開挙動はUNVERIFIED。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。公開資料上、通常時ゲーム数で到達する天井は確認されていない。
- ART残りゲーム数の電断/変更時処理はUNVERIFIED。

ceilingAfterReset:
- NONE_CONFIRMED。設定変更時の短縮天井・朝一天井は確認できず。

modeAfterReset:
- 通常時ゲーム数モード/朝一専用モードの存在を確認できず。
- リセット時の専用モード振り分け公開値もNONE_CONFIRMED。

stateAfterReset:
- ART/内部RT状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。朝一/設定変更固有の出玉恩恵、短縮天井、専用高確等は確認できず。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。「やったネ！はるみちゃん」「ヤッタネハルミチャン」「はるみちゃん1」「ヤーマ」を軸に「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「モード」「ガックン」「変更判別」を組み合わせ、当時解析・業界記事・メーカー現存ページ・後年回顧資料を横断したが、本機固有の変更判別を確定できる資料に到達せず。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

### resetBehavior 再探索メモ

取得日2026-08-31。表記揺れとして「やったネ！はるみちゃん」「やったネ!はるみちゃん」「ヤッタネハルミチャン」「はるみちゃん1」を使用。メーカー名「ヤーマ」、シリーズ名「やったネ！はるみちゃんシリーズ」と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/ガックン/ART持越しを組み合わせて検索。メーカー公式（現ベルコサイト）、グリーンべると、HAZUSE、パチマガスロマガ、後年回顧資料を確認したが、設定変更・据え置き・単純電断を区別する本機固有の高信頼公開値は確認できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. BELLCO（ベルコ株式会社）機種情報「やったネ!はるみちゃん」
   - https://www.s-bellco.co.jp/products/slot/yama_harumichan/
   - ヤーマブランド、2007年4月登場、4種類同時展開、5号機/RT/ART系であることを確認。
   - confidence: OFFICIAL

2. グリーンべると「演歌歌手・都はるみ、パチスロでもオンステージ」2007-03-16
   - https://web-greenbelt.jp/00004071/
   - 2007-04-15納品開始予定、6段階、BIG約350枚、ART +1.5枚/G、555G/1555G、ボーナス合算設定1 1/481〜設定6 1/455、1000円約33Gを確認。
   - confidence: INDUSTRY

3. HAZUSE「やったネ!はるみちゃん1」
   - https://hazuse.com/i/data/haruni1/top.htm
   - 設定別ボーナス合算1/481〜1/455、設定別機械割95.0〜112.0%、33G/千円、BIG約350枚、ART +1.5枚/G、555G/1555G、完走平均獲得目安を確認。
   - confidence: ANALYSIS_SINGLE

4. パチマガスロマガ「やったネ!はるみちゃん」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/05/yama_slot_05.php
   - 3スペック4機種同時リリース、黄色パネルの荒波ARTタイプ、BIG465枚超払い出し終了・純増約350枚、ART1555P搭載を確認。
   - confidence: ANALYSIS_HIGH

5. なな徹「姉妹機『やったネ！はるみちゃん』の姉妹機出過ぎ問題について考える」2024-06-24
   - https://nana-press.com/post/1618061
   - 後年回顧資料として4バージョン同時展開と本機がボーナス+ART機であることを補助確認。
   - confidence: ANALYSIS_SINGLE

## missingFields

- 設定1〜6の各BIG図柄別確率（物差し上はBIG合算取得済みのため必須欠損ではない）
- 設定変更時のART/内部RT状態処理
- 据え置き・電源OFF→ON時のART残りG数/内部状態の扱い
- 本機固有のガックン等変更判別

## conflicts

- 現時点で性能コアの明確な数値競合は確認していない。
- releaseDateはメーカー公式が2007年4月、当時グリーンべるとは2007-04-15「納品開始予定」。予定日と実導入確認日を同一視せず、主記録には予定である旨を残す。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
