# やったネ！はるみちゃん

status: COMPLETE_CORE
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

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

initialHitBySetting:
- BIG合算: 設定1 1/481 / 設定2 1/468 / 設定3 1/468 / 設定4 1/468 / 設定5 1/468 / 設定6 1/455

baseGamesPer50:
- 約33G/50枚相当。

netIncrease:
- ART: 約+1.5枚/G。
- 555G ART完走時の平均獲得増加目安: 約800枚。
- 1555G ART完走時の平均獲得増加目安: 約2300枚。

basicPayout:
- BIG: 465枚を超える払い出しで終了、純増約350枚。
- 「はるみ・はるみ・都」BIG後: 1555G ART。
- 「都・都・都」BIG後: 555G ART。
- 「はるみ・はるみ・はるみ」BIG後: ARTなし。

modeSpecificMinimumData:
- 4スペック同時発売のうち荒波ARTタイプ。
- ARTは約+1.5枚/G、ボーナス成立・規定G数完走・パンク役入賞で終了。
- 6段階設定。
- 有利区間制度導入前。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 本機固有の設定変更時ART状態、内部RT状態、パンク回避状態の扱いを直接固定できる公開資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井は確認されず、設定変更時の天井短縮も `NONE_CONFIRMED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時のART残りG、内部RT状態の引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井・モードの引継ぎ対象自体を確認できない。

### powerCycleBehavior
- 電源OFF→ONのみと設定変更を区別した本機固有の公開挙動は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- `NOT_APPLICABLE_TO_NORMAL_CEILING`。通常時ゲーム数到達型天井は確認されていない。
- ART残りG数の電断/変更時処理は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- `NONE_CONFIRMED_AFTER_RESEARCH`。設定変更時の短縮天井・朝一天井は確認されず。

### modeAfterReset
- 通常時ゲーム数モード/朝一専用モードの存在を確認できず。
- リセット専用モード振り分け公開値も `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- ART/内部RT状態の設定変更・据え置き・電断時処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。朝一/設定変更固有の出玉恩恵、短縮天井、専用高確等は確認されず。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `UNVERIFIED_AFTER_RESEARCH`。
- 「やったネ！はるみちゃん / やったネ!はるみちゃん / ヤッタネハルミチャン / はるみちゃん1 / ヤーマ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / ART持越し / RT持越し / 変更判別」を組み替え、メーカー現存ページ・当時業界記事・当時解析・後年回顧を横断したが本機固有判別契約を固定できなかった。

### numericResetData / publicMorningNumbers
- 通常時天井: `NONE_CONFIRMED`
- リセット時短縮天井: `NONE_CONFIRMED`
- 朝一専用モード数値: `NONE_CONFIRMED`
- リセット恩恵発生率: `NONE_CONFIRMED`

## resetBehavior 再探索メモ
2026-08-31および2026-09-11に再探索。BELLCO現存公式、グリーンべると、HAZUSE、パチマガスロマガ、なな徹回顧を横断。設定変更時ART/内部RT、据え置き/純電断時ART残G、ガックン/初期出目を追加探索したが新たな本機固有契約は固定できなかった。一般的な5号機ART挙動からの推測補完は禁止し、`PARTIAL_RESEARCH_EXHAUSTED` として正式化する。

## sources
取得日: 2026-09-11（性能コア初回取得: 2026-08-31）

1. BELLCO公式「やったネ!はるみちゃん」
   - https://www.s-bellco.co.jp/products/slot/yama_harumichan/
   - ヤーマブランド、2007年4月、4種類同時展開を確認。
   - reliability: OFFICIAL
2. グリーンべると（2007-03-16）
   - https://web-greenbelt.jp/00004071/
   - 2007-04-15納品開始予定、6段階、BIG約350枚、ART +1.5枚/G、555G/1555G、BIG合算端点、1000円約33Gを確認。
   - reliability: INDUSTRY
3. HAZUSE「やったネ!はるみちゃん1」
   - https://hazuse.com/i/data/haruni1/top.htm
   - 設定別BIG合算、設定別機械割、33G/千円、BIG約350枚、ART +1.5枚/G、完走獲得目安を確認。
   - reliability: ANALYSIS_SINGLE
4. パチマガスロマガ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/05/yama_slot_05.php
   - 3スペック4機種同時リリース、荒波ARTタイプ、BIG465枚超払い出し終了・純増約350枚、ART1555P搭載を確認。
   - reliability: ANALYSIS_HIGH
5. なな徹回顧（2024-06-24）
   - https://nana-press.com/post/1618061
   - 4バージョン同時展開とボーナス+ART機を補助確認。
   - reliability: ANALYSIS_SINGLE

## missingFields
- 設定変更時のART/内部RT状態処理
- 据え置き・電源OFF→ON時のART残りG数/内部状態
- 本機固有のガックン等変更判別

## conflicts
- releaseDateはメーカー公式が2007年4月、グリーンべるとは2007-04-15「納品開始予定」。予定日と実導入確認日を同一視せず保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
