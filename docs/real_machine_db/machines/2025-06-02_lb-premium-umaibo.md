# LBプレミアムうまい棒

recordNo: 1731
machineName: LBプレミアムうまい棒
aliases: スマスロ プレミアムうまい棒 / プレミアムうまい棒 / うまい棒BT
manufacturer: オリンピアエステート（平和グループ）
formalModel: LBプレミアムうまい棒S1
inspectionCode: 4S1818
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ
systemType: ノーマル / リアルボーナス / ボーナストリガー（BT）
settings: L / 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 平和公式製品ページで `LBプレミアムうまい棒` を確認。オリンピア公式ニュースでも2025-03-10に製品情報掲載を告知。
- 遊技日本の新台発表で製造元オリンピアエステート、型式名 `LBプレミアムうまい棒S1` を確認。
- HAZUSEで検定番号 `4S1818`、型式名 `LBプレミアムうまい棒S1`、導入開始日2025-06-02、メーカー オリンピアエステートを確認。
- P-WORLDも検定番号・型式・導入開始日2025-06-02で一致。
- 日工組/日電協の業界発表ではBT適合機として列挙され、導入は2025-06-02以降順次と公表。
confidence: OFFICIAL_IDENTITY / INDUSTRY_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: 公開通常性能値なし
- setting1: 97.6%
- setting2: 98.5%
- setting5: 103.7%
- setting6: 106.5%
initialHitBySetting:
  big:
  - settingL: 公開通常性能値なし
  - setting1: 1/299.3
  - setting2: 1/296.5
  - setting5: 1/293.9
  - setting6: 1/291.3
  reg:
  - settingL: 公開通常性能値なし
  - setting1: 1/471.5
  - setting2: 1/455.1
  - setting5: 1/337.8
  - setting6: 1/291.3
  combined:
  - settingL: 公開通常性能値なし
  - setting1: 1/183.1
  - setting2: 1/179.6
  - setting5: 1/157.2
  - setting6: 1/145.6
baseGamesPer50: 約38.7G（設定1。複数解析で約39G表記）
netIncrease: N/A（リアルボーナス主体。AT純増として扱わない）
basicPayout:
- BIG BONUS: 約176枚獲得後にBTへ必ず移行し、BT込みトータル301枚
- REG BONUS: 99枚
- BT中うまいフリーズ: 約3%で発生し、代表的なトータル獲得枚数476枚
confidence: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 液晶非搭載の完全告知ノーマルタイプ。`うまいランプ` 点灯でボーナス成立告知。
- BIG終了後は必ずボーナストリガーへ移行するループ型BT。
- BT中は基本的にBT中ボーナス（JAC相当）へ移行し、約3%でBIGが成立して `うまいフリーズ` が発生。BIG成立後もBTへ再移行する。
- CZ / ATは非搭載。
- 天井は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_BT_SETTING_CHANGE_AND_POWER_CYCLE_BEHAVIOR_PARTIAL_UNVERIFIED_NON_BT_FIELDS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 必勝本の機種別 `設定変更・電源OFF/ON` 比較で、設定変更時は `連チャン回数: リセット`、`BT: リセット` を直接確認。
- 天井は非搭載のため、天井ゲーム数リセット/短縮は `NOT_APPLICABLE`。
- 通常A/B、高確/低確、CZ/ATモード等の朝一専用モードは本機の公開ゲーム性では確認できない。
- ボーナス成立状態そのものを設定変更時にどう扱うかについて、BT欄とは別の機種固有直接記載は今回固定できず `UNVERIFIED_DIRECT_BONUS_PENDING_STATE_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CHAIN_COUNT_AND_BT / NOT_APPLICABLE_FOR_CEILING / UNVERIFIED_DIRECT_FOR_OTHER_INTERNAL_STATE

### carryOverBehavior
- 本機は天井・CZ・AT・規定ゲーム数モードを持たないため、それらの据え置き引継ぎは `NOT_APPLICABLE`。
- 据え置き営業で通常時に保持される独立したモード/高確状態は確認できない。
- BT状態については純電源OFF→ON時 `引き継ぐ` の直接資料があるため、少なくとも設定変更を伴わない電断では保持される。
- `据え置き` を独立見出しとして連チャン回数・ボーナス成立状態まで網羅した機種固有比較表は固定できず、未確認部分を一般仕様から補完しない。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE / ANALYSIS_HIGH_FOR_POWER_CYCLE_BT_CARRYOVER / UNVERIFIED_DIRECT_FOR_OTHER_STANDALONE_CARRYOVER_FIELDS

### powerCycleBehavior
- 必勝本の機種別比較表で、電源OFF→ONのみの場合 `BT: 引き継ぐ` を直接確認。
- 電源OFF→ON時の `連チャン回数` は同表でも `現在調査中`。
- 天井は非搭載。
- 電源OFF→ON時のガックンは別の必勝本基本ページで `現在調査中`。
- 通常時の独立した内部モード/高確状態、ボーナス成立状態、有利区間について機種固有直接契約は十分な再探索後も固定できなかった。
confidence: ANALYSIS_HIGH_FOR_BT_CARRYOVER / UNVERIFIED_AFTER_RESEARCH_FOR_CHAIN_COUNT_GAKKUN_AND_OTHER_INTERNAL_FIELDS

### gameCounterReset
- 天井用ゲーム数カウンタ: `NOT_APPLICABLE`（天井非搭載）。
- BIG中楽曲には前回ボーナス後の特定G数当選を参照する条件があるが、これは天井/規定G数モードではないため分離する。
- 必勝本の `連チャン回数` は設定変更でリセット、電源OFF→ONは現在調査中。具体的なカウンタ定義/表示/内部Gとの対応は直接資料がないため拡張解釈しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / ANALYSIS_HIGH_FOR_SETTING_CHANGE_CHAIN_RESET / UNVERIFIED_FOR_POWER_CYCLE_CHAIN_COUNT

### ceilingAfterReset
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
ceilingBenefit: NOT_APPLICABLE
- HAZUSE、P-WORLD、1geki、6確、必勝本の専用 `天井&設定変更` ページはいずれも天井非搭載/到達条件ナシで一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B、天国等の規定G数モードやCZモードは確認されておらず `NOT_APPLICABLE_AS_PUBLISHED_GAME_SYSTEM`。
- BTは実ボーナスに連動するボーナストリガー状態として別管理。設定変更でRESET、純電断でCARRY_OVER。
- 設定変更専用の朝一モード振り分け・朝一ゾーンは `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BT / NONE_CONFIRMED_AFTER_RESEARCH_FOR_RESET_MODE

### stateAfterReset
- 通常時の高確/低確等の独立状態は公開ゲーム性上確認できない。
- BT状態のみ、設定変更RESET / 純電断CARRY_OVERを直接確認。
- ボーナス成立状態やその他内部状態を機種固有に網羅した比較表は `UNVERIFIED_DIRECT_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BT_STATE / UNVERIFIED_DIRECT_FOR_OTHER_INTERNAL_STATE

### advantageousSectionReset
- 本機固有の `有利区間` について、設定変更/据え置き/純電断を比較した直接資料は、機種名・正式型式・メーカー名と `有利区間 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON` を組み合わせて再探索したが固定できなかった。
- BT機一般の有利区間を論じるコラムは存在するが推測/制度論であり、本機固有契約として採用しない。
- よって `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。スマスロであることだけからAT機の有利区間挙動を推定しない。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### resetBenefits
- 天井短縮: `NOT_APPLICABLE`。
- 朝一専用ゾーン/モード優遇、初当たり優遇、REG/BIG確率優遇等の設定変更固有恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- BT中に設定変更した場合はBTがリセットされるため、これは恩恵ではなく状態消去として扱う。
confidence: ANALYSIS_HIGH / NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 設定変更時にBT状態がリセットされることを直接確認。ホール閉店時等にBT状態が残っていた特殊ケースでは、純電断なら引継ぐのに対し設定変更では消える差がある。
- 通常時の朝一に適用される公開された冷遇率・当選率低下・不利モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BT_RESET / NONE_CONFIRMED_AFTER_RESEARCH_FOR_NORMAL_START_PENALTY

### resetDetection
- 本機固有リールガックンは必勝本でも設定変更/電源OFF→ONとも `現在調査中`。他系統資料も再探索したが条件・発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載かつ朝一専用ゾーン/モードが確認されていないため、ゲーム数挙動による一般的なリセット判別材料はない。
- 設定変更では連チャン回数をリセットするが、その内部値を朝一に外部から確実に判別できる公開手段は固定できていない。
- よって通常時からの明確な設定変更判別法は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAKKUN_STILL_UNDER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH_FOR_DETECTION

### numericResetData
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
resetModeDistribution: NOT_APPLICABLE_OR_NONE_PUBLISHED
resetMorningHitRate: PUBLIC_VALUE_NOT_FOUND_BECAUSE_NO_RESET_SPECIFIC_RATE_CONFIRMED
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
settingChangeBTState: RESET
powerCycleBTState: CARRY_OVER
settingChangeChainCount: RESET
powerCycleChainCount: UNVERIFIED_CURRENTLY_UNDER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 必勝本の基本スペック概要欄に `天井: 搭載` と表示される一方、同サイトの専用 `天井&設定変更` ページは `到達条件: ナシ`。HAZUSE、P-WORLD、1geki、6確も天井非搭載で一致するため、canonicalは `天井非搭載` とし、概要欄側を `CONFLICT_CEILING_SUMMARY_FIELD` として隔離。
- K-Naviは設定5 REGを `1/377.8` と掲載するが、遊技日本、1geki、なな徹、必勝本、P-WORLD等は `1/337.8` で一致。canonicalは `1/337.8`、K-Navi値を `CONFLICT_LIKELY_SOURCE_TYPO_SETTING5_REG_377.8_VS_MULTI_SOURCE_337.8` として保持。
- BIGの内訳は `BIG単体176枚 + BT` と `BIG+BT 301枚` の表現差がある。定義差であり数値競合ではない。物差し値はBT込み301枚、内部説明としてBIG単体約176枚を併記。

## missingFields
- 設定LのBIG/REG/合算/機械割: 公開通常性能値なし。
- 純電源OFF→ON時の連チャン回数: `現在調査中` のまま。
- 設定変更/電源OFF→ON時の本機固有ガックン条件・発生率: `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス成立状態の設定変更/据え置き/純電断時契約: `UNVERIFIED_DIRECT_AFTER_RESEARCH`。
- 本機固有の有利区間契約: `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 独立した通常時内部状態/朝一モード: 公開ゲーム性として確認できず、推定しない。

## sources
取得日: 2026-09-14
- 平和公式製品ページ: https://www.heiwanet.co.jp/products/pachislot/l-pub/
- オリンピア公式ニュース: https://www.olympia.co.jp/official/news/
- 遊技日本 新台発表: https://yugi-nippon.com/pachinko-new-machine/post-70455/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-70145/
- 遊技通信/P-WORLD BT適合発表: https://news.p-world.co.jp/articles/30458/yugitsushin
- Amusement Japan/P-WORLD 製品PV発表: https://news.p-world.co.jp/articles/30392/amusement
- HAZUSE: https://hazuse.com/hd/4s1818/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10261
- 1geki: https://1geki.jp/slot/lb_umaibou/
- 1geki BIG/REG/BT: https://1geki.jp/slot/lb_umaibou/61/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/957/29456/
- なな徹 BIG/REG/BT: https://nana-press.com/kaiseki/machine/957/30081/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87086/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/87083/
- 必勝本 BT解説: https://hisshobon.com/machineinfo/87089/
- 必勝本旧UI基本ページ: https://p.hisshobon.jp/vpage/2706/2
- 6確: https://www.kaku6.jp/slot/umaibou/
- Pachibee: https://www.pachibee.jp/machines/index/225050002
- Ativo: https://ativo.jp/2025/04/22/lb%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%81%86%E3%81%BE%E3%81%84%E6%A3%92/
- K-Navi: https://p-kn.com/slot/4326/

## confidenceSummary
- identity/release/model: OFFICIAL / INDUSTRY_HIGH / MULTI_SOURCE_MATCH
- core performance: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH
- settingChange BT + chain count: ANALYSIS_HIGH_DIRECT
- powerCycle BT: ANALYSIS_HIGH_DIRECT
- ceiling: ANALYSIS_HIGH / MULTI_SOURCE_MATCH; one summary-field conflict isolated
- advantageousSection: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
- resetBenefits/detection: NONE_CONFIRMED_AFTER_RESEARCH except direct BT reset/carryover distinction
