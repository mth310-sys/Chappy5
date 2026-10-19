# LB トリプルクラウンセブン

recordNo: 1789
machineName: LB トリプルクラウンセブン
aliases: LBトリプルクラウンセブン / トリプルクラウンセブン / トリクラセブン
manufacturer: 岡崎産業
formalModel: LBTCSFG
inspectionCode: 5S1007
releaseDate: 2026-04-06
generation: 6.5号機 / スマスロ / BT
systemType: ノーマル / リアルボーナス+ボーナストリガー
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 岡崎産業公式PRで型式 `LBTCSFG`、スマスロ+BT機、2026-04-06全国導入を確認。
- 1gekiで型式 `LBTCSFG`、検定番号 `5S1007`、導入開始日2026-04-06を確認。
- 情報島の2026-04-06新台群にも岡崎産業「LB トリプルクラウンセブン」として掲載。
confidence: OFFICIAL / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 99.0%
- setting5: 105.0%
- setting6: 112.1%
initialHitBySetting:
  bb:
  - setting1: 1/258.0
  - setting2: 1/253.0
  - setting5: 1/230.0
  - setting6: 1/203.5
  rb:
  - setting1: 1/590.4
  - setting2: 1/580.0
  - setting5: 1/524.3
  - setting6: 1/464.8
  bonusCombined:
  - setting1: 1/179.6
  - setting2: 1/176.2
  - setting5: 1/159.8
  - setting6: 1/141.5
baseGamesPer50: 約34.6G/50枚（設定1・1geki自社調査/パチマガ系掲載値）
netIncrease: N/A（リアルボーナス主体。AT純増として扱わない）
basicPayout:
- BIG BONUS: 平均312枚（初回BB195枚+BT平均値）
- BB in BB: 平均507枚（BT中BB時、初回BBを含む獲得期待値）
- REGULAR BONUS: 平均104枚
modeSpecificMinimumData:
- 全設定共通でBB比率約70%。
- BIG前半後にBTへ移行し、BT中のBB当選でBB in BB。
- 天井非搭載。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 天井・周期・通常時モードを持つAT機ではなく、設定変更専用のゲーム数短縮/朝一モード/初当たり優遇は確認されない。
- コンプリート機能による打ち止め状態は設定変更で解除されることをP-WORLD/HAZUSE掲載説明で確認。
- BT中・成立済みボーナス等の特殊途中状態で設定変更した場合の扱いを直接説明する機種固有資料は、機種名/型式名と「設定変更・リセット・BT・ボーナストリガー・成立ボーナス」を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_RESET_GAME_BENEFIT_AND_COMPLETE_RESET / UNVERIFIED_FOR_SPECIAL_IN_PROGRESS_STATE

### carryOverBehavior
- 通常時に天井・周期・ポイント等の蓄積要素は非搭載のため、それらの据え置き引継ぎはN/A。
- BT中/ボーナス成立済み等の特殊途中状態を含む据え置き時の詳細復帰契約は、直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NA_COUNTERS / UNVERIFIED_FOR_SPECIAL_IN_PROGRESS_STATE

### powerCycleBehavior
- 必勝本の「設定変更&電源OFF/ON」比較で、本機について公開されている機種固有項目はリールガックンが双方「現在調査中」で、天井は非搭載。
- BT中/成立済みボーナス状態で純電源OFF→ONした場合の復帰、内部状態保持を明記する機種固有資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_COMPARISON_SCOPE / UNVERIFIED_FOR_SPECIAL_IN_PROGRESS_STATE

### gameCounterReset
settingChange: N/A_FOR_CEILING_COUNTER
carryOver: N/A_FOR_CEILING_COUNTER
powerCycle: N/A_FOR_CEILING_COUNTER
notes:
- ゲーム数天井・周期天井とも非搭載。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: NONE
resetCeiling: NONE
shortening: NONE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用モード、天井モード、周期モード等は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時のDramatic/沖縄の演出モードはプレイヤーが任意選択する演出方式であり、リセット恩恵モードとして扱わない。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更/据え置き/純電断時の内部状態を比較する機種固有資料は、検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井/周期/ポイント状態は構造上N/A。
confidence: UNVERIFIED_FOR_SPECIAL_INTERNAL_STATE

### advantageousSectionReset
- スマスロ世代だが、本機固有の設定変更/据え置き/純電源OFF→ONそれぞれについて有利区間の扱いを直接列挙した高優先資料は再探索後も固定できず `UNVERIFIED_DIRECT_MACHINE_SPECIFIC_WORDING_AFTER_RESEARCH`。
- 一般的なスマスロ規則から推測補完しない。
confidence: UNVERIFIED

### resetBenefits
- 天井短縮、朝一高確、専用初当たり/CZ優遇など、遊技上の設定変更専用恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 打ち止め状態の場合は設定変更でコンプリート機能停止状態が解除されるが、これは通常の朝一狙い恩恵とは分離する。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更専用の主要な公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 必勝本の設定変更&電源OFF/ON比較では、リールガックンは設定変更・電源OFF/ONとも「現在調査中」。
- 天井・周期・ポイント等の朝一挙動による変更判別材料は非搭載。
- 本機固有の確定的変更判別手段は、機種名/型式名と「朝一・ガックン・設定変更・据え置き・電源OFF ON」を変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAKKUN_PUBLIC_STATUS / UNVERIFIED_FOR_DEFINITIVE_DETECTION

### numericResetData
resetCeiling: NONE
resetModeDistribution: N/A_OR_NOT_PUBLISHED
resetSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_GAKKUN_RATE

## conflicts
- 主要公開スペックは1geki・HAZUSE・必勝本等で一致し、重大CONFLICTなし。
- 低優先の二次サイトに設定3/4の推定補完値が掲載されているが、同サイト自身が推定と明記。高優先解析は設定1/2/5/6のみを公表しているため、設定3/4はcanonical不採用。CONFLICTではなく `NON_CANONICAL_ESTIMATE_EXCLUDED` とする。
- ボーナス合算の設定1を1/179.5、設定5を1/159.9とする低優先表記があるが、高優先複数資料は1/179.6・1/159.8で一致するためcanonicalは後者。

## sources
retrievedAt: 2026-09-15
- 岡崎産業公式PR: https://prtimes.jp/main/html/rd/p/000000006.000178173.html
- 1geki機種概要: https://1geki.jp/slot/lb_triplecrown_seven/
- 1geki設定差: https://1geki.jp/slot/lb_triplecrown_seven/0/
- 1gekiベース: https://1geki.jp/slot/lb_triplecrown_seven/4/
- 1gekiBB/BT: https://1geki.jp/slot/lb_triplecrown_seven/61/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1007/
- 必勝本 基本スペック/天井&設定変更: https://p.hisshobon.jp/vpage/2771/2
- パチマガスロマガ系機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/85/kh01.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10455
- パチビー: https://www.pachibee.jp/machines/kouryaku/226030005
- 情報島 2026-04-06新台群: https://p-johojima.jp/colum/post-29369/

## missingFields
- BT中/成立済みボーナス等の特殊途中状態での設定変更挙動: UNVERIFIED_AFTER_RESEARCH
- 同特殊状態での据え置き/純電源OFF→ON復帰契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電断時の機種固有内部状態比較: UNVERIFIED_AFTER_RESEARCH
- 有利区間の機種固有3条件直接比較: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率および確定変更判別: UNVERIFIED_AFTER_RESEARCH

## qaNotes
- 実機完全再現用のリプレイ同時当選詳細、疑似リプ連期待度、BT中全小役確率、設定示唆演出振り分けは収集対象外。
- 2026-04-06群6機の6/6として処理。
- 設定3/4の推定補完値は物差しDBへ混入させない。
