# ファミスタ回胴版!!

recordNo: 1590
machineName: ファミスタ回胴版!!
manufacturer: ユニバーサルブロス
formalModel: S/ファミスタ回胴版!!/FB
inspectionCode: 2S1734
releaseDate: 2023-09-04
generation: 6.5号機 / メダル機
systemType: A+ART / 技術介入
settings: 1 / 2 / 5 / 6

## payoutRateBySetting
### 市場予測
- 設定1: 98.3%
- 設定2: 99.7%
- 設定5: 102.3%
- 設定6: 104.2%
### 完全攻略
- 設定1: 102.0%
- 設定2: 103.5%
- 設定5: 106.3%
- 設定6: 108.3%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BIG
- 設定1: 1/303.4
- 設定2: 1/302.0
- 設定5: 1/300.6
- 設定6: 1/299.3
### REG
- 設定1: 1/455.1
- 設定2: 1/414.8
- 設定5: 1/381.0
- 設定6: 1/356.2
### ボーナス合算
- 設定1: 1/182.0
- 設定2: 1/174.8
- 設定5: 1/168.0
- 設定6: 1/162.6
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約35.9G/50枚
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- ART「ファミスタゲーム」: 約0.3枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIG BONUS: 最大202枚 + ART
- REG BONUS: 最大56枚 + ART抽選 / 非当選時チャンスタイム
- ART「ファミスタゲーム」: 攻撃フェーズと守備フェーズで構成、純増約0.3枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 天井機能: 非搭載。
- BIG中は技術介入でARTゲーム数上乗せ。完全攻略時は市場予測値より機械割が約3.7～4.1pt上昇。
- REG後はART非当選時に20Gのチャンスタイムへ移行。
信頼度: INDUSTRY / ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更後は内部状態をリセット。なな徹では「すべての状態がリセット」と明記。
- 初期ステージは昼ステージ。
- 天井非搭載のためゲーム数天井リセットは非該当。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時の全状態別契約は高信頼資料で具体値が公開されていない。
- 純電断資料が内部状態引継ぎを示すため、設定変更を伴わない据え置きも内部状態CARRY_OVER扱いとするが、個別状態名ごとの契約は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / PARTIAL_SPECIFICITY

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは内部状態を引き継ぐ。
- ステージは昼ステージ。
信頼度: ANALYSIS_HIGH

### gameCounterReset
- 天井非搭載のため天井ゲーム数は非該当。
- ART/チャンスタイム等の内部状態は設定変更でリセット、純電断で引き継ぐ。
信頼度: ANALYSIS_HIGH

### ceilingAfterReset
- 天井非搭載。設定変更専用短縮天井も非該当。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用の通常モード/天井モードは非該当。
- 設定変更後の個別内部モード振り分けとして比較可能な公開固定値は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 内部状態リセット。
- 純電源OFF→ON: 内部状態引き継ぎ。
- 据え置き: 内部状態引き継ぎ扱い。
信頼度: ANALYSIS_HIGH

### advantageousSectionReset
- 6.5号機ART機として有利区間を使用するが、設定変更/据え置き/純電断それぞれの機種固有公開契約は再探索後も直接固定できず UNVERIFIED_AFTER_RESEARCH。
- 有利区間ランプによる設定変更/据え置き判別は不可。
信頼度: ANALYSIS_HIGH（ランプ） / UNVERIFIED（契約）

### resetBenefits
- 設定変更専用の天井短縮・朝一専用モード・固定初当たり優遇は NONE_CONFIRMED_AFTER_RESEARCH。
- 朝一恩恵目的で追うタイプではなく、性能差の主軸は通常のボーナス/技術介入。
信頼度: ANALYSIS_HIGH

### resetPenalties
- 設定変更時は前日の内部状態を失う。
- その他の設定変更専用不利数値は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 初期ステージは設定変更/電源OFF→ONとも昼ステージで、ステージ単独判別不可。
- 有利区間ランプ判別不可。
- 本機固有リールガックンの条件/発生率は表記揺れ・型式・メーカー・リセット/朝一/ガックンを組み替え再探索しても高信頼契約を固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（ガックン）

### numericResetData
- 天井: 非搭載。
- 設定変更専用短縮天井: 非該当。
- 朝一専用モード振り分け / 一定G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 公開された比較可能な朝一専用数値: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts
- 50枚ベースは一部サイトに約32.9G表記があるが、P-WORLD・なな徹・一撃・解析DBで約35.9G/50枚が一致するため35.9Gをcanonicalとし、32.9Gは競合資料値として保持。

## missingFields
- 設定変更/据え置き/純電断時の有利区間契約: UNVERIFIED_AFTER_RESEARCH
- 朝一専用の内部状態振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13
- 遊技日本 / P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/25035/nippon
  - 型式、設定別BB/RB/出玉率、基本獲得、純増、9月4日導入。
  - 信頼度: INDUSTRY
- 遊技日本 検定通過: https://news.p-world.co.jp/articles/23800/nippon
  - 型式 S/ファミスタ回胴版!!/FB。
  - 信頼度: INDUSTRY
- G-net 検定情報: https://g-net-ps.com/content/%E3%81%B1%E3%81%A1%E3%82%93%E3%81%93%E3%83%BB%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E6%A4%9C%E5%AE%9A%E5%88%87%E3%82%8C%E6%83%85%E5%A0%B1%EF%BC%882026%E5%B9%B44%E6%9C%88%EF%BC%89/
  - 型式 / 検定番号2S1734。
  - 信頼度: INDUSTRY
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9866
  - 設定別ボーナス、機械割、35.9G/50枚、天井非搭載、ART構造。
  - 信頼度: INDUSTRY / ANALYSIS_HIGH
- なな徹 スペック: https://nana-press.com/kaiseki/machine/598/15703/
  - 設定別BIG/RB/合算/機械割、35.9G/50枚。
  - 信頼度: ANALYSIS_HIGH
- なな徹 朝一: https://nana-press.com/kaiseki/machine/598/16434/
  - 設定変更ですべての状態リセット、有利区間ランプ判別不可。
  - 信頼度: ANALYSIS_HIGH
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/191482/
  - 天井非搭載、設定変更/電源OFF→ONの内部状態、初期ステージ、有利区間エンディング条件。
  - 信頼度: ANALYSIS_HIGH
- 一撃 スペック: https://1geki.jp/slot/s_famista_kaido/
  - 設定別スペック、35.9G/50枚、ART純増、天井非搭載。
  - 信頼度: ANALYSIS_HIGH

coreStatus: COMPLETE_CORE
