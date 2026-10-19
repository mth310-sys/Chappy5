# クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.

recordNo: 1750
machineName: クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver.
aliases: LBクレアの秘宝伝 / クレアBT / クレアの秘宝伝 ボーナストリガーver.
manufacturer: 大都技研
formalModel: LB／クレアの秘宝伝ボーナストリガーVER．／A2
inspectionCode: 530057
releaseDate: 2025-09-08
generation: 6.5号機 / スマスロ / ボーナストリガー
systemType: ノーマル / リアルボーナス / BT / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 大都技研公式製品ページは2025-09-08の設置店検索公開とBT・スマスロ機であることを確認できる。
- グリーンべるとは2025-06-06付の新潟県公安委員会検定通過として型式 `LB/クレアの秘宝伝ボーナストリガーVER./A2` を掲載。
- HAZUSEは検定番号 `530057`、型式、導入開始日2025-09-08、メーカー大都技研を掲載。
confidence: OFFICIAL / INDUSTRY / INDUSTRY_DB / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
  marketPlay:
  - setting1: 98.1%
  - setting2: 99.2%
  - setting3: 101.2%
  - setting4: 103.7%
  - setting5: 106.6%
  - setting6: 112.3%
  fullTechnicalPlay:
  - setting1: 99.3%
  - setting2: 100.5%
  - setting3: 102.5%
  - setting4: 105.0%
  - setting5: 108.0%
  - setting6: 114.0%
bonusBySetting:
  big:
  - setting1: 1/299.3
  - setting2: 1/293.9
  - setting3: 1/284.9
  - setting4: 1/274.2
  - setting5: 1/262.1
  - setting6: 1/240.1
  reg:
  - setting1: 1/383.3
  - setting2: 1/376.6
  - setting3: 1/358.1
  - setting4: 1/334.4
  - setting5: 1/299.3
  - setting6: 1/247.3
  combined:
  - setting1: 1/168.0
  - setting2: 1/165.1
  - setting3: 1/158.7
  - setting4: 1/150.7
  - setting5: 1/139.7
  - setting6: 1/121.8
baseGamesPer50: 約34G（設定1。HAZUSEは設定1〜6約34G表記）
netIncrease: N/A（リアルボーナス主体。BIG後BTで追加ボーナスを獲得）
basicPayout:
- BIG: 約356枚（BT込み）
- REG: 最大107枚
confidence: ANALYSIS_HIGH / INDUSTRY_DB / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 大都技研BT第1弾。AT/ART非搭載のノーマルタイプ。
- BIG後は必ずBTが発動し、BAR揃いの追加ボーナスを経て合計約356枚を獲得。BTにループ性はない。
- 通常時ゲーム数天井・CZ・周期天井は非搭載。
- 市場想定/通常攻略時出玉率と完全攻略時出玉率を混ぜず別系列で保持する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL_MACHINE_SPECIFIC_RESET_DETAILS_NOT_PUBLICLY_FIXED
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 天井非搭載のため、設定変更時のゲーム数天井RESET・短縮はN/A。
- P-WORLDはコンプリート機能による打ち止め状態が設定変更で解除されることを明記。ただしこれは朝一初当り優遇ではなく運用上の状態解除として分離する。
- 設定変更時のボーナス成立内部フラグ、BT途中状態、演出カスタム/液晶状態の機種固有契約は、公式・業界DB・主要解析・型式名検索まで再探索しても直接資料を固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: HIGH_FOR_NO_CEILING / INDUSTRY_DB_FOR_COMPLETE_FUNCTION_RESET / UNVERIFIED_FOR_OTHER_INTERNAL_CONTRACT

### carryOverBehavior
- 天井非搭載のため天井ゲーム数の据え置き/リセットはN/A。
- 据え置き時のボーナス成立内部フラグ、BT状態、表示/カスタム状態を機種固有に列挙した直接資料は、機種名・略称・型式を変えた再探索後も固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_INTERNAL_CARRYOVER

### powerCycleBehavior
- 純電源OFF→ONのみの場合のボーナス成立内部フラグ、BT状態、表示/カスタム状態を設定変更と比較する機種固有資料は、`電源OFF ON` / `電断` / `電源投入` / `BT中 電断` まで検索語を変えても固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 他BT機・旧クレア・一般的ノーマル機の挙動から推測補完しない。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### gameCounterReset
settingChange: N/A_NO_GAME_CEILING
carryOver: N/A_NO_GAME_CEILING
powerCycle: N/A_NO_GAME_CEILING
- 機種内の天井管理用ゲーム数は存在しない。
confidence: INDUSTRY_DB / ANALYSIS_HIGH / MULTI_SOURCE_NO_CEILING

### ceilingAfterReset
normalGameCeiling: NONE
resetGameCeiling: NONE
carryOverGameCeiling: NONE
powerCycleGameCeiling: NONE
confidence: INDUSTRY_DB / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用モード、設定変更専用モード、規定ゲーム数モードは公開解析で確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時の「高確率」はボーナス期待を演出するシリーズゲーム性であり、AT機の継続管理モード/天井モードとして朝一振り分けを推測しない。
confidence: ANALYSIS_HIGH_FOR_SYSTEM / NONE_CONFIRMED_AFTER_RESEARCH_FOR_RESET_MODE

### stateAfterReset
- 設定変更専用の朝一高確、保証ゲーム、初当り優遇状態は公開資料で確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス成立内部フラグ/BT途中状態の設定変更・据え置き・純電断契約は直接資料がないため `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_FOR_MORNING_STATE / UNVERIFIED_FOR_BONUS_AND_BT_INTERNAL_STATE

### advantageousSectionReset
settingChange: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
carryOver: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
powerCycle: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
- 本機はリアルボーナス/BT主体で、AT/CZ型の有利区間リセット恩恵として公開される朝一仕様は確認できない。
- 機種固有に有利区間の扱いを3電源条件で明記した直接資料を固定できず、世代一般論から補完しない。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### resetBenefits
- 設定変更専用の天井短縮、朝一モード優遇、CZ/初当り優遇、保証G等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- コンプリート打ち止め状態の解除は確認できるが、朝一客の狙い目性能とは分離する。
confidence: NONE_CONFIRMED_AFTER_RESEARCH_FOR_PLAYER_BENEFIT / INDUSTRY_DB_FOR_COMPLETE_FUNCTION_CLEAR

### resetPenalties
- 前日天井進行、周期、ATモード進行を失うタイプではないため、それらに相当する設定変更不利はN/A。
- その他の設定変更固有不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 本機固有のガックン条件・発生率、ランプ/表示差など、設定変更/据え置きを直接判別する公開条件は、`ガックン` / `リール ガックン` / `朝一 設定変更` を含む再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス確率、小役、BT中ハズレ、終了時スタンプ等は設定推測要素であり、設定変更そのものの朝一判別とは分離する。
confidence: UNVERIFIED_FOR_DIRECT_RESET_DETECTION

### numericResetData
normalGameCeiling: NONE
resetGameCeiling: NONE
resetMorningModeDistribution: NONE_PUBLISHED
resetMorningBenefitRate: NONE_PUBLISHED
resetMorningPenaltyRate: NONE_PUBLISHED
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues: NONE_FOUND_AFTER_RESEARCH

## conflicts
- BIG総獲得は主要資料で `約356枚` が一致する一方、P-WORLD説明文に `約358枚` 表記がある。大都系発表・一撃・パチビー・HAZUSE等で一致する `約356枚` をcanonicalとし、`約358枚` は `CONFLICT_MINOR_DESCRIPTION_ROUNDING_OR_TYPO` として保持する。
- HAZUSEの出玉率表示は完全攻略時99.3〜114.0%を前面表示する一方、一撃・パチビー等は通常攻略/市場想定98.1〜112.3%と完全攻略99.3〜114.0%を併記。定義差のため平均せず両系列を保持する。

## sourceSearchNotes
- resetBehavior再探索語: `クレアの秘宝伝 ボーナストリガー 設定変更`, `LBクレア リセット 朝一 据え置き 電源`, `LB／クレアの秘宝伝ボーナストリガーVER．／A2 設定変更`, `クレアBT 電源OFF`, `電断`, `電源投入`, `BT中 電断`, `朝一 ステージ`, `ガックン`, `リール ガックン`, `有利区間`。
- 資料系統: 大都技研公式、検定通過業界記事、HAZUSE、P-WORLD、一撃、パチビー、後発解析サイト。
- 旧5号機クレアや他BT機のリセット挙動は機種固有直接根拠がないため移植しない。

## sources
retrievedAt: 2026-09-15
- 大都技研公式: https://www.daitogiken.com/contents/product/slot/creab/
- 大都技研 スロット機種一覧: https://www.daitogiken.com/products/slot/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-97477/
- HAZUSE 機種情報: https://hazuse.com/hd/530057h/
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/SX0109/
- 一撃 機種解析: https://1geki.jp/slot/l_crea/
- 一撃 オンライン遊技説明: https://1geki.jp/slot/l_crea/39/
- パチビー 機種情報: https://www.pachibee.jp/machines/index/225080003
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10325
- 遊技日本 新機種記事: https://yugi-nippon.com/pachinko-new-machine/post-72505/
- 6確 後発解析: https://www.kaku6.jp/slot/crea/
