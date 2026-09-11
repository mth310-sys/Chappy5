# ダンス☆マン

status: PARTIAL
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

machineName: ダンス☆マン
manufacturer: アリストクラートテクノロジーズ
releaseDate: 2007-04（当時業界記事では4月中旬から納品予定）
generation: 5号機初期
systemType: ボーナス + ART

## 性能コア

payoutRateBySetting:
- 設定1: 95.0%
- 設定2: 98.0%
- 設定3: 101.0%
- 設定4: 104.0%
- 設定5: 109.0%
- 設定6: 118.0%

confidence: ANALYSIS_HIGH

initialHitBySetting:
- BIG合成
  - 設定1: 1/397.2
  - 設定2: 1/370.3
  - 設定3: 1/346.8
  - 設定4: 1/326.1
  - 設定5: 1/307.7
  - 設定6: 1/280.1
- REG/CT
  - 全設定共通: 1/1191.6
- ボーナス合算
  - 設定1: 1/297.9
  - 設定2: 1/282.5
  - 設定3: 1/268.6
  - 設定4: 1/256.0
  - 設定5: 1/244.5
  - 設定6: 1/226.8

confidence: ANALYSIS_HIGH

baseGamesPer50:
- UNVERIFIED
- 「ダンス☆マン / ダンスマン / ダンス★マン」「1000円 / 50枚 / ベース / コイン持ち / 回転数」をメーカー名と組み合わせて再探索したが、比較可能な確定値に到達せず。

netIncrease:
- ART「アンコールタイム」「ダンスライブ」搭載。
- 後年回顧資料ではART純増約0.8枚/G。

confidence: ANALYSIS_SINGLE

basicPayout:
- Dance Dance Fever（BIG）: 純増約280枚
- Dance Fever（REG/CT相当）: 純増約110枚

confidence: INDUSTRY

modeSpecificMinimumData:
- 2種類のART「アンコールタイム」「ダンスライブ」を搭載。
- ART中は3種類の15枚役をナビ。
- ダンスライブはチェリー役もナビし、回避によりART延命が可能。
- ARTはボーナス当選またはチェリー入賞で終了する仕様が当時業界記事で確認できる。
- 有利区間制度導入前。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 本機固有の設定変更時にART状態/内部状態をどのように処理するかを明記した直接資料は再探索後も未確認。
- 一般的な5号機ART機の挙動からRESET扱いを推測補完しない。

### carryOverBehavior
- 通常時ゲーム数天井の公開仕様は確認できず、宵越しゲーム数天井の比較対象は `NOT_APPLICABLE_TO_CONFIRMED_NORMAL_CEILING`。
- ART残状態の据え置き/翌日持越し可否は本機固有資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 電源OFF→ONのみと設定変更を区別した本機固有のART状態/内部状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- `NOT_APPLICABLE_TO_CONFIRMED_NORMAL_CEILING`。通常時ゲーム数天井は確認できない。

### ceilingAfterReset
- `NONE_CONFIRMED_AFTER_RESEARCH`。設定変更時の短縮天井/朝一天井は確認できない。

### modeAfterReset
- 通常時のゲーム数モード/朝一専用モードを示す公開資料は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- ART「アンコールタイム」「ダンスライブ」の残状態、ナビ状態、関連内部状態について、設定変更/据え置き/純電断を区別する機種固有契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ガックン、初期出目、表示、ランプ、朝一ゲーム数挙動など、本機固有の設定変更/据え置き判別契約は `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機のガックン挙動は本機固有根拠がないため採用しない。

### numericResetData / publicMorningNumbers
- 通常時天井: NONE_CONFIRMED
- リセット時短縮天井: NONE_CONFIRMED
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 設定変更時のART状態振り分け: UNVERIFIED_AFTER_RESEARCH

## resetBehavior 再探索メモ
2026-09-11。`ダンス☆マン / ダンスマン / ダンス★マン / アリストクラートテクノロジーズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ART / アンコールタイム / ダンスライブ / ガックン / 天井 / 持越し` を組み替え、当時業界記事、旧解析/DB、後年回顧資料、検索アーカイブ系統を再探索。ARTの基本仕様と有利区間制度前であることは固定できるが、設定変更・据え置き・純電断時のART残状態/内部状態処理および変更判別の直接契約は固定できなかった。推測補完せず `PARTIAL_RESEARCH_EXHAUSTED` とする。

## sources
取得日: 2026-09-11（resetBehavior再QA）

1. グリーンべると「アフロで楽しむパチスロ『ダンス☆マン』登場」2007-03-02
   - https://web-greenbelt.jp/00004090/
   - 4月中旬納品予定、BIG約280枚、REG相当約110枚、アンコールタイム/ダンスライブの2ARTと基本終了条件を確認。
   - reliability: INDUSTRY
2. 5号機クロニクル「アリストクラートテクノロジーズ」
   - https://5goki.com/aristocrat
   - 2007/4、設定別BIG/REG/合算、機械割95.0〜118.0%を確認。
   - reliability: ANALYSIS_HIGH
3. pachinko's blog ダンス★マン整理
   - https://pachinko.hatenablog.jp/entry/2007/04/dance-man
   - 設定別機械割とボーナス確率を別系統で照合。
   - reliability: ANALYSIS_SINGLE
4. パチ7 アリストクラート回顧
   - https://pachiseven.jp/articles/detail/11837
   - 2007年機、ART純増約0.8枚/Gの補助確認。
   - reliability: ANALYSIS_SINGLE

## missingFields
- baseGamesPer50
- ARTの設定別初当たり/突入率
- 設定変更/据え置き/電源OFF→ON時のART残状態・内部状態処理
- 本機固有の変更判別

## conflicts
- 現時点で性能コアの明確な数値競合は確認していない。小数第1位の丸め差のみ。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
