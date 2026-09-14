# LBジャックポット

recordNo: 1732
machineName: LBジャックポット
aliases: ジャックポットBT / スマスロ ジャックポット
manufacturer: ヤーマ（ベルコ系）
formalModel: LBジャックポットCY1
inspectionCode: 5S0041
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ
systemType: ノーマル / リアルボーナス / ループ型ボーナストリガー（BT）
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- ヤーマ公式（ベルコ公式サイト内）の2025-04-07発売告知で機種名 `LBジャックポット`、ヤーマ製、全国導入2025年6月予定を確認。
- HAZUSEで型式名 `LBジャックポットCY1`、検定番号 `5S0041`、導入開始日2025-06-02、メーカー ヤーマを確認。
- HAZUSE / 必勝本 / なな徹 / 6確等で2025-06-02導入が一致。
confidence: OFFICIAL_IDENTITY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.0%
- setting2: 100.5%
- setting5: 103.0%
- setting6: 107.0%
initialHitBySetting:
  big:
  - setting1: 1/348.6
  - setting2: 1/341.3
  - setting5: 1/313.6
  - setting6: 1/290.0
  reg:
  - setting1: 1/524.3
  - setting2: 1/448.9
  - setting5: 1/360.1
  - setting6: 1/290.0
  combined:
  - setting1: 1/209.4
  - setting2: 1/193.9
  - setting5: 1/167.6
  - setting6: 1/145.0
baseGamesPer50: 約40G（設定1）
netIncrease: N/A（リアルボーナス主体。AT純増として扱わない）
basicPayout:
- BIG BONUS: 最大89枚。終了後はBTへ移行
- REG BONUS: 最大89枚。終了後は通常時へ
- BT: BIGを引き続ける限り1G連ループ。設定1のBIGループ率約67%、初当りBIGを含む期待獲得枚数約355枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は全役でリアルボーナスを抽選する完全告知系ノーマルタイプ。
- BIG後はループ型BTへ必ず移行し、BT中は1Gでボーナス成立。BIGならBT継続、REGなら終了。
- 通常時の告知モードは `ノーマル` / `沖スロ` の2種類を任意選択可能。これは内部当選モードではなく演出モードとして扱う。
- CZ / AT / 規定ゲーム数解除は非搭載。
- 天井は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_NO_CEILING_AND_RESET_SPECIFIC_BEHAVIOR_MOSTLY_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 必勝本の機種別 `天井&設定変更` では設定変更時のリールガックンが `現在調査中`。天井は非搭載。
- 設定変更時のBT状態、ボーナス成立状態、演出モード、その他内部状態を直接比較した機種固有資料は、表記揺れ・型式名を含めて再探索したが固定できなかった。
- BT機一般論やスマスロ一般論から補完せず、上記は `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_MACHINE_SPECIFIC_FOR_BT_AND_OTHER_STATE

### carryOverBehavior
- 本機は天井、CZ、AT、規定G数モードを持たないため、それらの据え置き引継ぎは `NOT_APPLICABLE`。
- 設定据え置き時のBT状態・ボーナス成立状態・演出モードを網羅した機種固有比較表は十分な再探索後も固定できず `UNVERIFIED_DIRECT_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_CEILING_CZ_AT / UNVERIFIED_DIRECT_FOR_BT_AND_PENDING_BONUS_STATE

### powerCycleBehavior
- 必勝本の機種別比較では電源OFF→ON時のリールガックンは `現在調査中`。
- 6確は設定変更時・電源OFF→ON時の特有恩恵や演出について解析情報を確認できない旨を掲載。
- 純電源OFF→ON時のBT状態、ボーナス成立状態、演出モード、その他内部状態の直接契約は固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAKKUN_STILL_UNDER_RESEARCH / UNVERIFIED_MACHINE_SPECIFIC_FOR_OTHER_STATE

### gameCounterReset
- 天井ゲーム数カウンタ: `NOT_APPLICABLE`（天井非搭載）。
- 規定G数解除・周期・ポイント天井も公開ゲーム性上確認されず `NOT_APPLICABLE_AS_PUBLISHED_GAME_SYSTEM`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
ceilingBenefit: NOT_APPLICABLE
- 必勝本は到達条件 `ナシ`、HAZUSEと6確も天井非搭載で一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B・天国等の内部モード、CZモード、規定G数モードは公開ゲーム性上確認されず `NOT_APPLICABLE_AS_PUBLISHED_GAME_SYSTEM`。
- `ノーマル` / `沖スロ` は任意選択の告知演出モードであり、朝一内部モードとして扱わない。
- 設定変更時の演出モード初期化/保持は直接資料を固定できず `UNVERIFIED_DIRECT_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_INTERNAL_MODE / UNVERIFIED_FOR_DISPLAY_MODE_RESET

### stateAfterReset
- 高確/低確等の通常時内部状態は公開ゲーム性上確認されない。
- BTおよびボーナス成立状態の設定変更/据え置き/純電断契約は機種固有直接資料を固定できず `UNVERIFIED_DIRECT_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_FOR_NORMAL_INTERNAL_STATE / UNVERIFIED_DIRECT_FOR_BT_AND_PENDING_BONUS_STATE

### advantageousSectionReset
- 本機固有の `有利区間` について、設定変更/据え置き/純電断を比較した直接資料は、機種名・正式型式名・メーカー名と `有利区間 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON` を組み合わせて再探索したが固定できなかった。
- BT機一般論またはスマスロ一般論から推定せず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### resetBenefits
- 天井短縮: `NOT_APPLICABLE`。
- 朝一専用ゾーン/モード、初当り優遇、ボーナス確率優遇等の設定変更固有恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 6確も設定変更時・電源OFF→ON時の特有恩恵を現時点で確認できないとしている。
confidence: ANALYSIS_HIGH / NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 通常時朝一に適用される公開された冷遇率、当選率低下、不利モード等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- BT状態を設定変更した場合の扱いは直接資料未固定のため、不利要素として推定記載しない。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 必勝本では設定変更時・電源OFF→ON時のリールガックンはいずれも `現在調査中`。
- 天井非搭載かつ朝一専用ゾーン/モードが確認されていないため、ゲーム数挙動による変更判別材料はない。
- 6確も設定変更/電源OFF→ON固有演出を確認できないとしており、明確な変更判別法は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAKKUN_STILL_UNDER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH_FOR_OTHER_DETECTION

### numericResetData
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
resetModeDistribution: NOT_APPLICABLE_OR_NONE_PUBLISHED
resetMorningHitRate: PUBLIC_VALUE_NOT_FOUND_BECAUSE_NO_RESET_SPECIFIC_RATE_CONFIRMED
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
settingChangeBTState: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
powerCycleBTState: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_CURRENTLY_UNDER_RESEARCH

## conflicts
- 設定1 BIG確率は、必勝本・なな徹・情報島・Ativo・後年の整理資料が `1/348.6` で一致し、REG `1/524.3` と合算 `1/209.4` の数理関係とも整合する。一方、HAZUSE新UIおよびP-WORLDは `1/384.6` と掲載しながら合算を同じ `1/209.4` としており内部整合しない。canonicalは `1/348.6`、`1/384.6` を `CONFLICT_LIKELY_SOURCE_TYPO_SETTING1_BIG_384.6_VS_MULTI_SOURCE_348.6` として保持。

## missingFields
- 設定変更/据え置き/純電断時のBT状態: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
- 設定変更/据え置き/純電断時のボーナス成立状態: UNVERIFIED_DIRECT_AFTER_RESEARCH
- 演出モードの設定変更/純電断時初期化契約: UNVERIFIED_DIRECT_AFTER_RESEARCH
- 本機固有有利区間契約: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_CURRENTLY_UNDER_RESEARCH

## sources
取得日: 2026-09-14
- ヤーマ公式（ベルコ公式サイト内）発売告知: https://www.s-bellco.co.jp/news/20250407_01/
- ヤーマ/ベルコ公式製品ページ: https://www.s-bellco.co.jp/products/slot/yamalbjackpot/
- HAZUSE: https://hazuse.com/hd/5s0041/
- HAZUSE新UI: https://hazuse.com/machine/pachislot/5S0041/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86980/
- 必勝本旧UI 天井&設定変更: https://p.hisshobon.jp/vpage/2703/2
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/86972/
- 必勝本 設定看破: https://hisshobon.com/machineinfo/86975/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/968/29285/
- なな徹 ボーナス: https://nana-press.com/kaiseki/machine/968/30020/
- 1geki ベース: https://1geki.jp/slot/lb_jackpot/4/
- 6確: https://www.kaku6.jp/slot/jackpot/
- P-WORLD: https://www.p-world.co.jp/machine/database/10258
- 情報島 新台発表: https://p-johojima.jp/new_machine/post-3696/
- Ativo: https://ativo.jp/2025/04/09/lb%E3%82%B8%E3%83%A3%E3%83%83%E3%82%AF%E3%83%9D%E3%83%83%E3%83%88/

## qaNotes
- 性能コアはCOMPLETE_CORE。リセットQA状態は性能コアとは別管理。
- リセット関連は天井非搭載を複数系統で固定できた一方、BT状態の設定変更/据え置き/純電断契約は直接資料がないため推測しない。
- 設定1 BIG掲載競合は平均化せず、複数ソース整合値をcanonicalにして異説をCONFLICT保持。
