# マタドールIII

recordNo: 1744
machineName: マタドールIII
aliases: マタドールⅢ / マタドール3 / LBマタドールIII
manufacturer: 北電子
formalModel: LBマタドールIII TT
inspectionCode: 530169
releaseDate: 2025-08-04
generation: 6.5号機 / スマスロ / BT機
systemType: ノーマルタイプ / ボーナストリガー（BT）
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 北電子公式製品ページでマタドールIII、スマスロ、ボーナストリガー搭載、設定1〜6の主要スペックを確認。
- 遊技通信は型式名 `LBマタドールIII TT`、2025-08-04ホール導入予定、北電子BT搭載機第1弾と報道。
- HAZUSEで検定番号 `530169`、型式 `LBマタドールIII TT`、導入開始日2025-08-04を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.4%
- setting2: 98.9%
- setting3: 100.3%
- setting4: 103.5%
- setting5: 106.5%
- setting6: 110.0%
initialHitBySetting:
  big:
  - setting1: 1/278.9
  - setting2: 1/268.6
  - setting3: 1/260.1
  - setting4: 1/244.5
  - setting5: 1/231.6
  - setting6: 1/219.9
  reg:
  - setting1: 1/434.0
  - setting2: 1/417.4
  - setting3: 1/402.1
  - setting4: 1/362.1
  - setting5: 1/334.4
  - setting6: 1/299.3
  combined:
  - setting1: 1/169.8
  - setting2: 1/163.4
  - setting3: 1/157.9
  - setting4: 1/146.0
  - setting5: 1/136.8
  - setting6: 1/126.8
baseGamesPer50: 約36G
netIncrease: NOT_APPLICABLE_REAL_BONUS_BT
basicPayout:
- BIG: 最大約302枚（BTを含む、規定手順実践時）
- REG: 最大約104枚（規定手順実践時）
- 全BIG後にBTへ突入
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- リアルボーナス主体のノーマルタイプで、全BIGがBTへ突入。
- BIGは前半パート→BT→後半パートで構成され、BIG+BT合計で最大約302枚。
- 通常時の天井・規定G数ゾーン・AT/CZモードは非搭載として扱う。
- 通常時告知は先告知約60%、後告知約30%、次ゲームBET時約5%、次ゲームレバーON時約5%。これは演出割合でありresetBehaviorには混入しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_MACHINE_SPECIFIC_POWER_CYCLE_AND_ADVANTAGEOUS_SECTION_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 本機は天井非搭載のため、設定変更によるゲーム数天井RESET/短縮はNOT_APPLICABLE。
- 朝一専用の規定ゲーム数、CZ、通常A/B等のモード再抽選は確認されない。
- 設定変更時のボーナス成立状態・BT状態・その他内部状態を機種固有に直接記した高優先資料は、表記揺れ・型式名・朝一/リセット/設定変更/電源OFF ON/電断を変えて再探索しても固定できなかった。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_OTHER_MACHINE_SPECIFIC_INTERNAL_STATE

### carryOverBehavior
- 天井・規定G数・AT/CZモードが存在しないため、それらの据え置き引継ぎはNOT_APPLICABLE。
- ボーナス成立状態やBT進行中など特殊状態を跨いだ場合の機種固有据え置き契約は公開資料を固定できずUNVERIFIED_AFTER_RESEARCH。
- 一般的なBT/ノーマル機仕様から推測補完しない。
confidence: NOT_APPLICABLE_FOR_CEILING_AND_MODES / UNVERIFIED_AFTER_RESEARCH_FOR_SPECIAL_STATE

### powerCycleBehavior
- 電源OFF→ONのみの場合のボーナス成立状態・BT状態・告知状態等を直接比較した機種固有資料は再探索後も固定できなかった。
- 天井・規定G数・AT/CZモードは非搭載のため、その引継ぎ論点はNOT_APPLICABLE。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_SPECIAL_STATE

### gameCounterReset
settingChange: NOT_APPLICABLE_NO_GAME_CEILING
carryOver: NOT_APPLICABLE_NO_GAME_CEILING
powerCycle: NOT_APPLICABLE_NO_GAME_CEILING
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: NONE
resetCeiling: NONE
ceilingShortening: NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 天井管理用の通常A/B、天国、CZ/ATモード等は確認されずNOT_APPLICABLE。
- PUSHで選択できる先バレ/ナルなる/し～んは告知モードであり、出玉管理モードとは分離する。
confidence: OFFICIAL / ANALYSIS_HIGH

### stateAfterReset
settingChange: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_BONUS_OR_BT_STATE
carryOver: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_BONUS_OR_BT_STATE
powerCycle: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_BONUS_OR_BT_STATE
confidence: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
settingChange: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
carryOver: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
powerCycle: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
- 本機固有の有利区間RESET/CARRY_OVERを直接記した高優先資料を固定できなかったため、スマスロ/BT機一般論から補完しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 天井非搭載のため天井短縮恩恵なし。
- 設定変更専用の朝一高確、CZ優遇、初当たり優遇、専用モード等の機種固有公開恩恵は十分な再探索後も確認できなかった。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 天井進行を失う不利はNOT_APPLICABLE。
- 設定変更専用の公開冷遇数値・不利要素は確認できなかった。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 一撃の朝一/天井ページは天井非搭載のみを掲載し、設定変更専用の朝一判別要素を提示していない。
- 後発解析でも設定変更判別は未確定とされる。
- 本機固有のリールガックン条件・発生率、ランプ/表示による設定変更確定判別は検索語・資料系統を変えて再探索しても固定できなかった。
- ボーナス確率、BT中1枚役、ボーナス終了時パネルフラッシュ等は設定推測要素であり、設定変更/据え置き判別とは分離する。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_RESET_DETECTION

### numericResetData
normalCeiling: NONE
resetCeiling: NONE
resetModeDistribution: NOT_APPLICABLE_FOR_GAME_MANAGEMENT_MODE
resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH
resetGakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
publishedMorningNumericValue: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- ジャグラーズネットの「メーカー公表値」表は設定4〜6のBIG/REG/合算欄に、北電子公式・遊技通信・P-WORLD・必勝本・一撃と整合しない値が混在する。特に同表内で合算値との算術整合も崩れているため `CONFLICT_LIKELY_TABLE_TRANSCRIPTION_ERROR` として隔離し、canonicalは複数高優先資料で一致する値を採用した。

## missingFields
- 設定変更/据え置き/純電断時のボーナス成立状態・BT状態の機種固有契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有の有利区間RESET/CARRY_OVER契約: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更確定に使える公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 北電子公式 マタドールIII: https://www.kitadenshi.co.jp/products/2025/mtd3/
- 遊技通信 新機種発表: https://www.yugitsushin.jp/news/%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%82%92%E6%90%AD%E8%BC%89%E3%81%97%E3%81%A6a-300%E5%BE%A9%E6%B4%BB%EF%BC%81%E3%80%8C%E3%83%9E%E3%82%BF%E3%83%89%E3%83%BC/
- HAZUSE 機種詳細: https://hazuse.com/hd/530169-2/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87419/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/87407/
- 必勝本 BT解説: https://hisshobon.com/machineinfo/87408/
- 一撃 機種トップ: https://1geki.jp/slot/l_mtd3/
- 一撃 天井/朝一: https://1geki.jp/slot/l_mtd3/3/
- 一撃 ボーナス: https://1geki.jp/slot/l_mtd3/61/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10287
- 日刊スポーツ 新機種発表: https://www.nikkansports.com/amusement/pachislot/news/202505120000819.html
- ジャグラーズネット（競合確認用）: https://jugglersnet.com/bt/matador3
