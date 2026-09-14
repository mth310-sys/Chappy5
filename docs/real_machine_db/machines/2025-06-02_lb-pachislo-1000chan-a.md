# LBパチスロ1000ちゃんA

recordNo: 1736
machineName: LBパチスロ1000ちゃんA
aliases: LBパチスロ1000ちゃん / LB1000ちゃんA / 1000ちゃんA / LB1000ちゃんアルファL3
manufacturer: オーイズミラボ（製造） / オーイズミ（販売）
formalModel: LB1000ちゃんアルファL3
inspectionCode: 5S0039
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ / ボーナストリガー
systemType: ノーマル / リアルボーナス + BT（1000★PARTY） / 技術介入
settings: L / 1 / 2 / 5 / 6 / H
coreStatus: COMPLETE_CORE_WITH_SPECIAL_SETTING_L_UNPUBLISHED

## releaseAndModelEvidence
- 遊技通信の新機種発表で型式 `LB1000ちゃんアルファL3`、オーイズミラボ製、2025年6月導入予定を確認。
- HAZUSEで検定番号 `5S0039`、型式、2025-06-02導入、メーカーを確認。
- P-WORLD、必勝本、パチマガスロマガ、複数解析資料で2025-06-02導入が一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: UNPUBLISHED
- setting1: 98.0%
- setting2: 99.8%
- setting5: 104.0%
- setting6: 108.0%
- settingH: 108.7%
initialHitBySetting:
  bigCombined:
  - settingL: UNPUBLISHED
  - setting1: 1/190.0
  - setting2: 1/182.0
  - setting5: 1/164.3
  - setting6: 1/152.8
  - settingH: 1/662.0
  thousandBonus:
  - settingL: UNPUBLISHED
  - setting1: 1/1598.4
  - setting2: 1/1598.4
  - setting5: 1/1598.4
  - setting6: 1/1598.4
  - settingH: 1/13107.2
  suddenJac:
  - settingL: UNPUBLISHED
  - setting1: 1/16384.0
  - setting2: 1/16384.0
  - setting5: 1/16384.0
  - setting6: 1/16384.0
  - settingH: 1/65536.0
  combined:
  - settingL: UNPUBLISHED
  - setting1: 1/168.0
  - setting2: 1/161.8
  - setting5: 1/147.6
  - setting6: 1/138.3
  - settingH: 1/624.2
  btInitialHit:
  - settingL: UNPUBLISHED
  - setting1: 1/1456.4
  - setting2: NOT_SEPARATELY_PUBLISHED_IN_HIGH_PRIORITY_TABLE
  - setting5: NOT_SEPARATELY_PUBLISHED_IN_HIGH_PRIORITY_TABLE
  - setting6: NOT_SEPARATELY_PUBLISHED_IN_HIGH_PRIORITY_TABLE
  - settingH: 1/10922.7
baseGamesPer50:
- setting1to6: 約38.8G
- settingH: 約7710.1G
- settingL: UNPUBLISHED
netIncrease: NOT_APPLICABLE_FIXED_NET_INCREASE（リアルボーナス主体。BTはボーナス高確率状態）
basicPayout:
- BIG BONUS: 最大179枚
- 1000★BONUS: 最大99枚 + 終了後BT「1000★PARTY」
- 突JAC: 最大99枚 + 終了後BT
- 推し♡JAC: 最大99枚、BT中の継続側ボーナス
- 1000★PARTY: BT中ボーナス合算約1/6.2、推し♡JAC約75%ループ、BIG成立で終了
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は毎ゲーム全役でリアルボーナス抽選を行うノーマル+BT機。
- 1000★BONUSまたは突JAC後にBT「1000★PARTY」へ移行。
- BT中は推し♡JACが約75%でループし、BIG成立でBT終了。
- 天井非搭載。
- 特殊設定Hは50枚あたり約7710.1Gという極端な高ベースと低ボーナス確率を持つ。設定Lも搭載されるが性能値は高優先資料で未公表。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_STRUCTURAL_NA_AND_SPECIAL_BT_POWER_CYCLE_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 本機は天井・通常ゲーム数モード・周期・CZ・ATを持たないため、AT機の設定変更時天井短縮/朝一専用モード/初期ポイント再抽選に相当する項目は構造上NOT_APPLICABLE。
- P-WORLD/HAZUSE系機種情報でコンプリート機能の打ち止め状態は設定変更で解除される。
- 必勝本の機種別 `天井&設定変更` 表で天井なし、設定変更時リールガックンは `現在調査中`。
- 設定変更時のBT状態・成立済みリアルボーナスの扱いを直接示す本機固有資料は再探索後も固定できず、他BT機の一般論から補完しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_STRUCTURE / UNVERIFIED_AFTER_RESEARCH_FOR_INTERRUPTED_BT_STATE

### carryOverBehavior
- 天井ゲーム数、通常時モード、周期、CZポイント等の据え置き引継ぎ対象は構造上NOT_APPLICABLE。
- 設定据え置きかつ営業終了時にBT/成立済みボーナスという特殊状態が残った場合の翌営業内部状態契約は、機種固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: STRUCTURAL_NA / UNVERIFIED_FOR_SPECIAL_BT_STATE

### powerCycleBehavior
- 必勝本の `設定変更・電源OFF/ON` 比較欄では、電源OFF→ON時のリールガックンは `現在調査中`。
- 天井・通常ゲーム数モード・周期・CZ/ATは非搭載のため、それらのリセット/引継ぎはNOT_APPLICABLE。
- 純電源OFF→ON時のBT状態・成立済みリアルボーナスの直接契約は、正式型式・メーカー名を含め検索語を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DIRECT_GAKKUN_TABLE / UNVERIFIED_AFTER_RESEARCH_FOR_INTERRUPTED_BT_STATE

### gameCounterReset
- 内部天井カウンタ: NOT_APPLICABLE（天井非搭載）。
- 規定ゲーム数/周期/ポイントカウンタ: NOT_APPLICABLE。
- 外部データカウンタの営業リセットは実機内部性能ではないため本DB対象外。
confidence: ANALYSIS_HIGH / STRUCTURAL_NA

### ceilingAfterReset
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
ceilingBenefit: NOT_APPLICABLE
- 必勝本、HAZUSE、P-WORLD、パチマガスロマガ等で天井非搭載が一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B等のゲーム数モード、CZモード、周期モード、朝一専用モードは公開ゲーム構造上NOT_APPLICABLE。
- BT「1000★PARTY」は1000★BONUS/突JAC後にのみ開始するボーナス高確率状態で、設定変更朝一用モードではない。
confidence: ANALYSIS_HIGH / STRUCTURAL_NA

### stateAfterReset
- AT機の通常時高確/低確に相当する朝一状態抽選は公開ゲーム構造上NOT_APPLICABLE。
- BT中/ボーナス成立済みという特殊状態で設定変更・純電断した場合の契約は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NORMAL_STRUCTURE / UNVERIFIED_FOR_SPECIAL_INTERRUPTED_STATE

### advantageousSectionReset
- 本機固有の設定変更/据え置き/純電断における有利区間契約を直接明記した高信頼公開資料は、`LBパチスロ1000ちゃんA / LB1000ちゃんアルファL3 / オーイズミ / オーイズミラボ / 有利区間 / 設定変更 / 据え置き / 電源OFF ON` を組み替えて再探索したが固定できなかった。
- スマスロ/BT機という形式だけからRESET/CARRY_OVERを推定せず `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 設定変更専用の短縮天井、朝一高確、専用モード、当選率アップ、初期ポイント優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- コンプリート機能の打ち止め状態は設定変更で解除されるが、これは通常の朝一出玉優遇ではない。
confidence: NONE_CONFIRMED_AFTER_RESEARCH / ANALYSIS_HIGH_FOR_COMPLETION_RESET

### resetPenalties
- 設定変更で失われる前日天井進行・通常モード進行は天井/ゲーム数モード非搭載のためNOT_APPLICABLE。
- 設定変更朝一固有の冷遇率・不利モード・当選率低下は `NONE_CONFIRMED_AFTER_RESEARCH`。
- BT残存時に設定変更するとどうなるかは直接資料がないため、不利と推測しない。
confidence: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 必勝本の機種別表で、設定変更時・電源OFF→ON時ともリールガックンは `現在調査中`。
- 機種名、正式型式 `LB1000ちゃんアルファL3`、オーイズミ/オーイズミラボと `ガックン/リールガックン/設定変更/リセット/朝一/据え置き/電源OFF ON` を組み替えて再探索したが、ガックン条件・発生率・対策挙動は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため、朝一の特定ゲーム数超過を使う据え置き判別はNOT_APPLICABLE。
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_UNDER_INVESTIGATION / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
resetModeDistribution: NOT_APPLICABLE_PUBLIC_GAME_STRUCTURE
resetMorningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 設定Hのボーナス合算は必勝本・P-WORLD・HAZUSE等で `1/624.2`。一部後発整理資料に `1/624.0`、別サイトに `1/662.0` とする表記がある。`1/662.0` は設定H BIG合算と一致しており転記混同の可能性が高い。canonicalは複数一致の `1/624.2`、差異はCONFLICTとして保持。
- 設定Hの機械割108.7%は必勝本・HAZUSE等で一致。一部初期/簡易機種ページは通常設定1〜6だけを範囲 `98.0〜108.0%` と記載するため、特殊設定Hを除いたレンジ表記と区別する。
- 一部サイトに天井欄の誤記/文字化け（例 `被搭載`）があるが、必勝本・HAZUSE・P-WORLD・パチマガスロマガで天井非搭載が一致するためcanonicalは非搭載。

## missingFields
- 設定Lの機械割/ボーナス確率/ベース: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定2/5/6の1000★PARTY初当り個別数値: 高優先公開表で未掲載
- BT中/ボーナス成立済み状態の設定変更・純電断契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 有利区間の設定変更/据え置き/純電断直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の公開朝一数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## researchNotes
- 欠損確認では `LBパチスロ1000ちゃんA` / `1000ちゃんA` / `LB1000ちゃんアルファL3` / `オーイズミ` / `オーイズミラボ` と `設定変更` `リセット` `朝一` `据え置き` `電源OFF ON` `天井` `恩恵` `ガックン` `リールガックン` `有利区間` を組み替えて再探索。
- 業界発表、HAZUSE、P-WORLD、必勝本、パチマガスロマガ、パチビー、主要解析/旧DB系を横断。
- 他のBT機や一般スマスロのリセット挙動を本機へ自動転記していない。

## sources
取得日: 2026-09-14
- 遊技通信 新機種発表: https://www.yugitsushin.jp/news/%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%81%A7party%E3%81%A0%E3%81%81%EF%BD%9E%E2%98%86%E2%98%86%E2%98%86%E3%80%8Clb-%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD1000/
- 情報島 新機種発表: https://p-johojima.jp/new_machine/post-2039/
- HAZUSE 機種情報: https://hazuse.com/machine/pachislot/5S0039/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/5S0039/genre/201/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/5S0039/genre/208/
- P-WORLD: https://www.p-world.co.jp/machine/database/10247
- 必勝本 基本スペック/天井&設定変更: https://p.hisshobon.jp/vpage/2697/2
- 必勝本 設定H: https://hisshobon.com/machineinfo/86792/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/59/kh01.php
- パチビー 基本スペック: https://www.pachibee.jp/machines/index/225050000
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/233888/
- SLOT HACK: https://slothack.net/matome/160466/
