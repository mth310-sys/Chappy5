# ヴィーナスゾーン

recordNo: 1516
machineName: ヴィーナスゾーン
manufacturer: パイオニア
formalModel: SヴィーナスゾーンV2
inspectionCode: 1S1922
releaseDate: 2022-09-05
generation: 6.2号機
systemType: リノタイプ / リアルボーナス + ボーナス高確率状態「Vゾーン」

## payoutRateBySetting
- 設定1: 96.8%
- 設定2: 98.2%
- 設定3: 100.0%
- 設定4: 103.0%
- 設定5: 106.0%
- 設定6: 108.8%

HAZUSE、なな徹、複数解析資料で一致。

信頼度: ANALYSIS_HIGH / INDUSTRY_DB_CROSSCHECK

## initialHitBySetting
### 初当り確率
- 設定1: 1/580.9
- 設定2: 1/552.2
- 設定3: 1/515.8
- 設定4: 1/461.3
- 設定5: 1/413.0
- 設定6: 1/374.1

### ボーナス合算
- 設定1: 1/84.5
- 設定2: 1/80.7
- 設定3: 1/76.0
- 設定4: 1/68.9
- 設定5: 1/62.6
- 設定6: 1/57.6

複数資料で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 39.4G/50枚（なな徹）
- 約39G/50枚の丸め表記も複数資料にあり。

canonicalは39.4G/50枚とし、39Gは丸め表記として保持。

信頼度: ANALYSIS_HIGH

## netIncrease
- NOT_APPLICABLE（AT/ART純増型ではなく、リアルボーナス主体）。

## basicPayout
- BIG CHANCE: 約126枚
- REG CHANCE: 約61枚
- K-NaviにはBIG約125枚表記もあるため、主要解析が一致する約126枚をcanonicalとし、約125枚は丸め差として保持。
- ボーナス終了後はVゾーンへ移行。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はチェリー成立時の一部、またはスイカ成立時にボーナス高確率状態「Vゾーン」へ移行。
- Vゾーン中ボーナス確率: 約1/10。
- Vゾーン突入時のボーナスループ率: 約87%。
- ピンチ目成立時のVゾーン転落率: 約30%。
- Vゾーン中リプレイ確率: 1/7.30、通常時: 1/3.54。
- 本機は有利区間を搭載していないことをなな徹で直接確認。Vゾーンのボーナスループに2400枚上限はない。
- 天井は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時のVゾーン滞在/通常状態、成立済みボーナス等の機種固有状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- 本機にはゲーム数天井・通常のAT/CZモード・有利区間が存在しないため、それらのリセット契約は `NOT_APPLICABLE`。
- 一般的なリノタイプ/リアルボーナス機の挙動から推測転記しない。

### carryOverBehavior
- 据え置き時のVゾーン滞在状態・成立済みボーナス等の厳密な機種固有CARRY_OVER契約は `UNVERIFIED_AFTER_RESEARCH`。
- ゲーム数天井・有利区間は `NOT_APPLICABLE`。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時のVゾーン滞在状態・成立済みボーナス等の機種固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたの朝一比較表でも「天井 / 内部状態 / ステージ」は設定変更時・電源OFF→ON時とも調査中のまま残っている。
- 一般論で据え置きと同一扱いにはしない。

### gameCounterReset
- ゲーム数天井非搭載のため、天井ゲーム数リセット/引継ぎは `NOT_APPLICABLE`。
- 朝一客AIが狙うべき規定ゲーム数カウンタは確認されない。

### ceilingAfterReset
- 天井非搭載のため `NOT_APPLICABLE`。
- 設定変更後の短縮天井も `NOT_APPLICABLE`。

### modeAfterReset
- 通常A/B等のゲーム数モードは確認されず `NOT_APPLICABLE`。
- Vゾーンを内部状態として扱った場合の設定変更/据え置き/純電断による保持・初期化契約は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時: Vゾーン/通常状態の開始契約は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時: Vゾーン状態のCARRY_OVER可否は `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: Vゾーン状態のCARRY_OVER可否は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- NOT_APPLICABLE。
- なな徹の機種別解析で「本機は有利区間を搭載していない」と明記されている。

### resetBenefits
- 設定変更専用の天井短縮、朝一専用モード、Vゾーン優遇、初当り優遇などの主要恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間非搭載のため、有利区間ランプによる設定変更/据え置き判別は `NOT_APPLICABLE`。
- 本機固有のリールガックン条件/発生率、朝一表示・ランプ・出目等による変更判別要素を、機種名・正式型式・メーカー名・リセット/朝一/据え置き/電源OFF ON/ガックン等で再探索したが直接資料を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時専用の公開モード振り分け、短縮天井、朝一○G以内当選率、Vゾーン開始率などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常性能としてのVゾーン中ボーナス確率約1/10、ループ率約87%は朝一専用値ではないためreset数値へ混入しない。

### publicMorningNumbers
- 設定変更時のみ適用される公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- 検索語: `ヴィーナスゾーン / SLOTヴィーナスゾーン / SヴィーナスゾーンV2 / 1S1922 / パイオニア / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / Vゾーン / モード / 状態 / ガックン / 有利区間`。
- パイオニア公式製品一覧、HAZUSE、PiDEA、なな徹、ちょんぼりすた、イチカツ、K-Navi、クオぱち、当時/後年解析を横断。
- 性能コア・有利区間非搭載・天井非搭載は複数資料で固定できたが、設定変更/据え置き/純電断によるVゾーン状態の機種固有契約は固定できなかったため推測しない。

## conflicts
- BIG獲得枚数: 複数主要解析 約126枚 / K-Navi 約125枚。丸め差とみなし約126枚をcanonical、約125枚表記を保持。
- 50枚ベース: 39.4G / 約39G。丸め差として39.4Gをcanonical。
- HAZUSEのメーカー表示に「バイオニア」表記があるが、型式検定・公式資料の株式会社パイオニアをcanonicalとする（表示上の誤記扱い）。

## missingFields
- 設定変更時のVゾーン/通常状態の開始契約
- 据え置き時のVゾーン状態CARRY_OVER契約
- 純電源OFF→ON時のVゾーン状態CARRY_OVER契約
- 本機固有ガックン条件/発生率およびその他の変更判別要素

## sources
取得日: 2026-09-13

1. 株式会社パイオニア — その他機種一覧
   - https://www.slot-pioneer.co.jp/products/30.html
   - 2022年9月発売を確認。
   - reliability: OFFICIAL
2. PiDEA X — 東京都公安委員会 新台検定通過状況（2022-07-25）
   - https://www.pidea.jp/articles/1658720419
   - 型式 `SヴィーナスゾーンV2`、検定番号 `1S1922`、株式会社パイオニアを確認。
   - reliability: INDUSTRY
3. HAZUSE — ヴィーナスゾーン
   - https://hazuse.com/machine/pachislot/1S1922/
   - 2022-09-05導入、型式/検定番号、設定別初当り・合算・出玉率、Vゾーン基本性能を確認。
   - reliability: ANALYSIS_HIGH / INDUSTRY_DB
4. なな徹 — ボーナス確率/機械割/小役確率
   - https://nana-press.com/kaiseki/machine/424/10623/
   - 設定別初当り/合算/機械割、39.4G/50枚を確認。
   - reliability: ANALYSIS_HIGH
5. なな徹 — 通常時の抽選システム・Vゾーン
   - https://nana-press.com/kaiseki/machine/424/11404/
   - Vゾーン約1/10、約87%ループ、ピンチ目転落率約30%、リプレイ確率、有利区間非搭載を確認。
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた — ヴィーナスゾーン
   - https://chonborista.com/slot/pionia-slot/171560/
   - 約39G/50枚、BIG126枚/REG61枚、天井非搭載、朝一設定変更/電源OFF→ONの天井・内部状態・ステージが調査中であることを確認。
   - reliability: ANALYSIS_SINGLE / RESET_SOURCE_LIMIT
7. イチカツ！ — 2022年新台一覧
   - https://ichikatsu.com/newslot2022/
   - 2022-09-05導入、約2,000台、約39G/50枚、設定別性能を照合。
   - reliability: ANALYSIS_CROSSCHECK
8. クオぱち！ — ヴィーナスゾーン
   - https://www.pachinkoquora.com/machine/pachinslot/446/
   - 型式、導入日、設定別性能、BIG126枚/REG61枚を照合。
   - reliability: ANALYSIS_CROSSCHECK
9. K-Navi — ヴィーナスゾーン
   - https://p-kn.com/slot/3830/
   - Vゾーン概要、BIG約125枚/REG61枚表記を確認。
   - reliability: ANALYSIS_SINGLE

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
confidence: OFFICIAL_INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_GAMEPLAY / RESET_SOURCE_LIMITED