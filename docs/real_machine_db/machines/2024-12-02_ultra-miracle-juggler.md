# ウルトラミラクルジャグラー

recordNo: 1689
machineName: ウルトラミラクルジャグラー
aliases: Sウルトラミラクルジャグラー / ウルミラ / SウルトラミラクルジャグラーKT
manufacturer: 北電子
formalModel: SウルトラミラクルジャグラーKT
inspectionCode: 330695
releaseDate: 2024-12-02
generation: 6号機 / メダル機
systemType: ノーマルタイプ / 完全告知 / リアルボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 北電子公式の検定情報ページで型式 `SウルトラミラクルジャグラーKT` を確認。
- HAZUSEは検定番号 `330695`、型式名 `SウルトラミラクルジャグラーKT`、北電子、導入開始日2024-12-02を掲載。
- 遊技通信系業界記事、パチビー、パチマガスロマガでも2024-12-02導入で一致。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.0%
- setting2: 98.1%
- setting3: 99.8%
- setting4: 102.1%
- setting5: 104.5%
- setting6: 108.1%
initialHitBySetting:
- setting1: BIG 1/267.5 / REG 1/425.6 / 合算 1/164.3
- setting2: BIG 1/261.1 / REG 1/402.1 / 合算 1/158.3
- setting3: BIG 1/256.0 / REG 1/350.5 / 合算 1/147.9
- setting4: BIG 1/242.7 / REG 1/322.8 / 合算 1/138.6
- setting5: BIG 1/233.2 / REG 1/297.9 / 合算 1/130.8
- setting6: BIG 1/216.3 / REG 1/277.7 / 合算 1/121.6
baseGamesPer50: 約42.0G/50枚
netIncrease: N/A（ノーマルタイプ）
basicPayout:
- BIG: 約240枚（266枚超払い出しで終了）
- REG: 約96枚（98枚超払い出しで終了）
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 天井非搭載。
- CZ/AT/ART/内部モード/周期/ポイントによる初当たり管理はない通常ノーマルタイプ。
- ボーナスは完全告知。告知比率は先告知約1/4、後告知約3/4。
- 朝一用の性能コア追加値はなし。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GAKKUN_AND_DIRECT_POWER_CYCLE_REEL_BEHAVIOR
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 本機は天井、CZ、AT、周期、ポイント、通常時モードを持たないため、設定変更によってリセット/再抽選される朝一攻略上の蓄積契約は確認されない。
- 設定変更後は変更後設定の通常ボーナス確率に従って1G目から抽選される。
- 前日ハマリを引き継いで得る天井恩恵は存在しない。
- 本機固有の「設定変更時のみリール挙動が変わる」高信頼公開契約は固定できず、ガックンは別項目でUNVERIFIEDとする。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_MODE_POINT / LIMITED_FOR_REEL_BEHAVIOR

### carryOverBehavior
- 据え置き時も天井、モード、周期、ポイント等の引継ぎ対象が存在しないため、朝一攻略上のCARRY_OVER契約はN/A。
- 前日ゲーム数は当日の抽選率・天井到達条件へ影響しない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONについても天井、モード、周期、ポイント等の引継ぎ対象はN/A。
- 電源断復帰後の「リール初動/ガックン有無」を本機固有に直接明記する公式・業界・主要解析資料は、機種名/型式/北電子/ジャグラーと「電源OFF ON・朝一・ガックン・リール・設定変更・据え置き」を組み合わせて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CARRY_TARGET / UNVERIFIED_FOR_DIRECT_REEL_POWER_CYCLE_BEHAVIOR

### gameCounterReset
- 天井ゲーム数・内部ゲーム数カウンター: N/A（天井非搭載、ゲーム数依存抽選なし）。
- ホール側データ表示器の表示クリア/保持は設備運用であり本機内部の性能契約とは別のため、本DBのresetBehavior値として扱わない。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalGameCeiling: N/A
resetGameCeiling: N/A
- HAZUSE、パチマガスロマガ等で天井非搭載を確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常時の内部モード: N/A。
- 朝一専用モード/リセットモード: N/A。
- 設定変更時モード振り分け: N/A。
confidence: ANALYSIS_HIGH

### stateAfterReset
- AT/CZ系の低確・高確など持越し対象となる内部状態: N/A。
- チェリー同時当選等は各ゲーム独立の役抽選であり、朝一状態の再抽選契約として扱わない。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 有利区間を用いるAT/ART管理機ではないノーマルタイプのため、本DBの朝一有利区間リセット契約は N/A とする。
confidence: ANALYSIS_HIGH

### resetBenefits
- 設定変更固有の天井短縮、モード優遇、CZ優遇、ポイント優遇などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一狙いとしての性能上の恩恵は確認されない。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更で失われる天井進行・モード・ポイント等の蓄積は存在しないため、朝一性能上の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 公開資料上、設定変更/据え置きを内部ゲーム数、天井、モード、ステージ、ポイントから判別する要素はない。
- 機種別解析では朝一に使える公開判別要素0、リセット/据え置きを見分けられる公開情報なしと整理される。
- `ウルトラミラクルジャグラー` / `SウルトラミラクルジャグラーKT` / `北電子` / `ジャグラー` と「ガックン/リール/朝一/設定変更/据え置き/電源OFF ON/リセット判別」を組み合わせて再探索したが、本機固有のガックン発生条件・発生率・対策可否を高信頼で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的なジャグラー系の俗説・店舗対策例を本機固有契約へ転記しない。
confidence: ANALYSIS_HIGH_FOR_NO_PUBLIC_COUNTER_MODE_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: N/A
resetGameCeiling: N/A
settingChangeGameCounter: N/A
carryOverGameCounter: N/A
powerCycleGameCounter: N/A
settingChangeMode: N/A
carryOverMode: N/A
powerCycleMode: N/A
settingChangeInternalState: N/A
carryOverInternalState: N/A
powerCycleInternalState: N/A
settingChangeAdvantageousSection: N/A
carryOverAdvantageousSection: N/A
powerCycleAdvantageousSection: N/A
resetBenefitProbability: N/A
resetModeDistribution: N/A
resetStateDistribution: N/A
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- リセット天井: N/A。
- 朝一モード振り分け: N/A。
- 朝一状態振り分け: N/A。
- 朝一特定ゲーム数以内の優遇当選率: N/A。
- 設定変更恩恵発生率: N/A。
- 本機固有ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 機械割について、北電子系の公表スペックとして97.0 / 98.1 / 99.8 / 102.1 / 104.5 / 108.1%が複数主要資料で一致。一方、一部後年サイトには独自計算・攻略条件込みの97.87～110.05%等が掲載される。定義が異なるため平均せず、公表値をcanonical、独自攻略計算値は別定義として非採用。
- 50枚ベースはパチマガスロマガ等で約42.0G/50枚。HAZUSEはベース欄空欄のため競合ではない。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の本機固有リール初動/ガックン挙動: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 北電子 検定情報: https://www.kitadenshi.co.jp/slot-kentei/ultramiraclejuggler/
- 北電子 公式製品ページ: https://www.kitadenshi.co.jp/products/2024/umj/
- HAZUSE: https://hazuse.com/hd/330695-2/
- P-WORLD / 遊技通信業界ニュース: https://news.p-world.co.jp/articles/29215
- P-WORLD / Amusement Japan業界ニュース: https://news.p-world.co.jp/articles/29251
- パチビー: https://www.pachibee.jp/machines/index/224100007
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/kitac/064465.php
- パチマガスロマガ旧攻略ページ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/127/kh01.php
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/838/24962/
- 必勝本 新機種記事: https://p.hisshobon.jp/news/2060
- 6確 朝一・リセット整理: https://www.kaku6.jp/slot/ulmirajuggler/
- Ativo 型式/検定番号/スペック: https://ativo.jp/2024/10/21/s%E3%82%A6%E3%83%AB%E3%83%88%E3%83%A9%E3%83%9F%E3%83%A9%E3%82%AF%E3%83%AB%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BC/

## researchNotes
- resetBehavior欠損判定前に、機種名/略称/正式型式/北電子/ジャグラーを軸に「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「リール」「天井」「モード」「有利区間」を組み替えて検索。
- 公式検定情報、業界記事、主要解析、旧パチマガスロマガ、後年解析整理まで横断。
- 本機はノーマルタイプかつ天井・モード・周期・ポイントなしのため、resetBehaviorの多くは欠損ではなく構造上N/A。
- ジャグラー一般論から本機固有のガックン契約を推測しない。
