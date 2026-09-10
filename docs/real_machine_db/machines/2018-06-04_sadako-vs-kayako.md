# No.1199 パチスロ 貞子vs伽椰子

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ 貞子vs伽椰子
- alternateName: 貞子VS伽椰子 / 貞子vs伽椰子
- manufacturer: 藤商事
- releaseDateCanonical: 2018-06-04
- generation: 5.9号機 / 5号機
- systemType: A+RT / ボーナス+RT / 技術介入要素あり
- formalModelName: `貞子VS伽椰子FSC`
- certificationNumber: `7S0824`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、K-Navi、ちょんぼりすたで2018-06-04一致。
- canonicalは2018-06-04。

## performanceCore

### payoutRateBySetting
通常出玉率:
- setting1: 97.4%
- setting2: 98.7%
- setting5: 104.0%
- setting6: 108.5%

完全攻略時:
- setting1: 100.2%
- setting2: 101.5%
- setting5: 105.5%
- setting6: 110.0%

### initialHitBySetting
BIG合算:
- setting1: 1/306.2
- setting2: 1/300.6
- setting5: 1/291.3
- setting6: 1/275.4

REG:
- setting1: 1/352.3
- setting2: 1/348.6
- setting5: 1/327.7
- setting6: 1/312.1

ボーナス合算:
- setting1: 1/163.8
- setting2: 1/161.4
- setting5: 1/154.2
- setting6: 1/146.3

赤BIG / 青BIGの個別確率も公開あり。物差しではBIG合算を主値とする。

### baseGamesPer50
- 約35G/50枚。

### netIncrease
- RT純増の比較可能な明示値は、検索語・資料系統を変更して再探索したが今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- RT継続ゲーム数は20G / 40G / 77G。

### basicPayout
- BIG: 最大311枚。
- REG: 最大52枚。

### ceiling
- 通常ゲーム数天井: 非搭載。

## modeSpecificMinimumData
- 全ボーナス後にRT突入を賭けたバーサスチャレンジへ移行。
- RTは伽椰子RT20G / 貞子RT40G / 貞伽椰RT77G。
- 成立RTをランプで確認し、下位RTをハズして上位RTを狙う技術介入要素あり。

## resetBehavior

### settingChangeBehavior
- 設定変更後初回ボーナス終了時のみ、呪いの手役物の色テーブルが専用振り分けになる。
- 紫は設定変更後初回のみ出現し、出現時は設定変更確定。
- RT状態、成立済みボーナス、開始演出モード等の設定変更時契約は本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 純電断と独立した据え置き時RT状態・成立済みボーナス状態・液晶演出モードの直接契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時のRT状態・成立済みボーナス状態・表示状態の本機固有契約は、再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING`。

### modeAfterReset
- 朝一専用ゲーム数解除モード: `NOT_APPLICABLE`。
- 設定変更専用のRTモード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- RT/内部状態の設定変更・据え置き・純電断契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機A+RTだが、本機固有の有利区間状態・ランプの設定変更/純電断契約を示す資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。分類一般論から補完しない。

### resetBenefits
- 天井短縮: `NOT_APPLICABLE_NO_CEILING`。
- 設定変更後初回ボーナス終了時に設定変更確定パターン「紫」が出現し得る。これは朝一客の変更判別に直接有用。

### resetPenalties
- 設定変更時のみの定量的不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ガックン判別: `UNAVAILABLE / 判別不可` とする当時解析あり。
- 設定変更後初回ボーナス終了時の役物「紫」: 設定変更確定。
- 初回ボーナスを跨いだ後は紫が出現しないため、朝一変更判別情報としては初回限定。

### numericResetData
設定変更後初回ボーナス終了時・呪いの手役物:
- setting1: 白50.0% / 青25.5% / 緑9.5% / 赤0.02% / 虹0% / 紫15.0%
- setting2: 白50.0% / 青8.9% / 緑20.7% / 赤0.5% / 虹0% / 紫20.0%
- setting5: 白50.0% / 青25.1% / 緑8.5% / 赤1.4% / 虹0% / 紫15.0%
- setting6: 白50.0% / 青5.0% / 緑16.9% / 赤3.1% / 虹0.06% / 紫25.0%
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- gakkunChangeDetection: `UNAVAILABLE`

## morningRelatedPublicNumbers
- 設定変更後初回ボーナス終了時の紫発生率: 設定1 15.0% / 設定2 20.0% / 設定5 15.0% / 設定6 25.0%。
- 紫は設定変更後初回のみ出現し、出現時は設定変更確定。
- 朝一特定G以内当選率や短縮天井はなし/該当せず。

## conflicts
- 主要性能コアに採用判断を左右するCONFLICTは今回確認なし。

## missingFields
- RT純増の比較可能な明示値。
- 設定変更時RT状態・開始演出モード。
- 据え置き時を純電断と分離したRT/内部状態契約。
- 純電源OFF→ON時RT/内部状態契約。
- 本機固有の有利区間/ランプ挙動。

## sources
取得日: 2026-09-10

1. HAZUSE — パチスロ 貞子vs伽椰子
   - https://hazuse.com/machine/pachislot/7S0824/genre/201/
   - 型式`貞子VS伽椰子FSC`、検定`7S0824`、導入2018-06-04。
   - confidence: `ANALYSIS_HIGH`
2. K-Navi — パチスロ 貞子vs伽椰子
   - https://p-kn.com/slot/3009/
   - 導入2018-06-04、A+RT、BIG最大311枚、REG最大52枚、RT概要。
   - confidence: `ANALYSIS_HIGH`
3. ちょんぼりすた — 貞子vs伽椰子
   - https://chonborista.com/slot/fuji-slot/57859/
   - 導入、設定別BIG/REG/合算、通常/完全攻略機械割、約35G/50枚、天井非搭載、設定変更後初回役物振り分け。
   - confidence: `ANALYSIS_HIGH`
4. すろぱちくえすと — 貞子vs伽椰子
   - https://www.slopachi-quest.com/article/sadako-vs-kayako/
   - ガックン判別不可、設定変更後初回役物「紫」=設定変更確定、色別振り分け。
   - confidence: `ANALYSIS_HIGH`
5. パチマガスロマガ — パチスロ貞子vs伽椰子
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/27/a.php
   - 2018年6月、ボーナス+RT、RT20/40/77G。
   - confidence: `ANALYSIS_HIGH`

## confidenceSummary
- identity/release: `ANALYSIS_HIGH`
- performanceCore: `ANALYSIS_HIGH`
- reset-specific first-bonus detection: `ANALYSIS_HIGH`
- other reset state contracts: `UNVERIFIED`
