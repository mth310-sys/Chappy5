# スマスロ 攻殻機動隊

recordNo: 1776
machineName: スマスロ 攻殻機動隊
aliases: Lスマスロ攻殻機動隊 / L攻殻機動隊 / スマスロ 攻殻機動隊 STAND ALONE COMPLEX / Lスマスロ攻殻機動隊ZS
manufacturer: サミー
formalModel: Lスマスロ攻殻機動隊ZS
inspectionCode: 5S1282
releaseDate: 2026-02-02
generation: 6.5号機 / スマスロ
systemType: AT / CZ経由主体 / 差枚数管理 / 上位AT搭載
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEで型式 `L スマスロ攻殻機動隊 ZS`、検定番号 `5S1282`、導入2026-02-02を確認。
- 遊技通信/P-WORLD業界記事で型式 `Lスマスロ攻殻機動隊ZS`、2026-02-02ホール導入予定を確認。
- サミー公式解説動画でも2026-02-02導入予定を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.7%
- setting3: 100.8%
- setting4: 104.9%
- setting5: 109.3%
- setting6: 112.2%
initialHitBySetting:
  CZ:
  - setting1: 1/238.0
  - setting2: 1/236.3
  - setting3: 1/231.7
  - setting4: 1/220.9
  - setting5: 1/214.0
  - setting6: 1/210.1
  AT:
  - setting1: 1/336.3
  - setting2: 1/332.0
  - setting3: 1/319.6
  - setting4: 1/298.7
  - setting5: 1/285.8
  - setting6: 1/278.0
baseGamesPer50: 約32.0G/50枚
netIncrease:
- 通常AT S.A.C.MODE: 約4.0枚/G
- 上位AT S.A.C.MODE ENDLESS GIG: 約8.5枚/G
basicPayout:
- 通常AT S.A.C.MODE: 初期200枚
- 上位AT S.A.C.MODE ENDLESS GIG: 初期300枚
modeSpecificMinimumData:
- 通常時はゲーム数・レア役から殲滅ZONE/CZを経由してATを目指す。
- CZ間天井: 通常最大550G+αでCZ「S.A.M.」当選。
- AT間天井: 通常最大999GでAT当選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_RESET_BENEFITS_AND_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井までのゲーム数をリセットし、内部ゲーム数を加算抽選する。
- 殲滅モードは必ずリセットモードへ移行。
- 内部状態は再抽選。
- 殲滅ポイントはリセット後に内部加算抽選。
- 殲滅テーブルはCZ当選までテーブル2以上。
- 有利区間は機種別朝一比較資料でRESETを確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、殲滅モード、ゲーム数、殲滅ポイントを引き継ぐ。
- リセット専用の350G+α CZ天井・699G AT天井は適用されない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- パチ&スロ必勝本の設定変更/電源OFF→ON比較で、純電源OFF→ONは天井までのゲーム数、モード、状態、殲滅ポイント、殲滅テーブルを引き継ぐ。
- 電源OFF→ON後の開始ステージのみ同資料で現在調査中。
- 有利区間そのものの純電断時契約を独立記述した高優先資料は今回固定できず、一般スマスロ仕様からは補完しない。
confidence: ANALYSIS_HIGH_FOR_GAME_STATE_CARRYOVER / UNVERIFIED_DIRECT_WORDING_FOR_ADVANTAGEOUS_SECTION_POWER_CYCLE

### gameCounterReset
settingChange: RESET_WITH_INTERNAL_RANDOM_ADDITION
carryOver: CARRY_OVER
powerCycle: CARRY_OVER
notes:
- 朝一表示だけでは内部加算分を直接読めない。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling:
- CZ間: 550G+α
- AT間: 999G
resetCeiling:
- CZ間: 350G+α
- AT間: 699G
resetShortening: YES
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は専用のリセットモードへ移行。
- リセットモードのCZ天井は350G+α。
- リセットモードはCZ当選後に通常モードへ移行。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時は内部状態を再抽選。
- 据え置き/純電源OFF→ONは内部状態を引き継ぐ。
- 設定変更時の内部状態振り分けについては一部二次資料に超高確率の掲載があるが、高優先複数ソース照合が十分でないためcanonical数値には採用しない。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER / UNVERIFIED_FOR_STATE_DISTRIBUTION

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
notes:
- なな徹の機種別朝一比較で設定変更RESET・据え置き引継ぎを確認。
- 純電源OFF→ONについては必勝本で主要内部値引継ぎを確認したが、有利区間を明示した独立記述は固定できなかった。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- CZ間天井が550G+α→350G+αへ短縮。
- AT間天井が999G→699Gへ短縮。
- CZ当選まで殲滅テーブル2以上。
- 200G到達時は約50%でCZ「タチコマの家出」に当選。
- リセットモードでは50G 50.0%、100G 25.0%、150G 50.0%、250G 50.0%、350GでCZ天井。
- 設定1でもリセット時機械割100%以上と解析資料で掲載。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の通常モード、天井進行、内部状態、殲滅ポイントを失う。
- 設定変更固有の追加数値的不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 350G+αまでにCZ非当選なら据え置き濃厚材料。
- AT間699G+αを超えてAT非当選なら据え置き濃厚材料。
- 50/100/150Gでの殲滅ZONE突入、200Gでのタチコマの家出当選はリセット期待度を上げるが単独確定ではない。
- 設定変更時は内部ゲーム数と殲滅ポイントがランダム加算されるため、液晶表示や単一ゾーンだけでの断定は不可。
- 本機固有のリールガックン条件・発生率は `攻殻機動隊 / Lスマスロ攻殻機動隊ZS / サミー + ガックン / リールガックン / 設定変更 / 据え置き` で再探索したが高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_ZONE_DETECTION / UNVERIFIED_FOR_MACHINE_SPECIFIC_GAKKUN

### numericResetData
resetCzCeiling: 350G+α
resetAtCeiling: 699G
resetModeZoneExpectation:
- 50G: 50.0%
- 100G: 25.0%
- 150G: 50.0%
- 200G: 約50%でタチコマの家出当選
- 250G: 50.0%
- 300G: ゾーンなし
- 350G: CZ天井
annihilationTableAfterReset: TABLE_2_OR_HIGHER_UNTIL_CZ
resetPayoutRateSetting1: 100%以上（解析資料値、メーカー公表値ではない）
confidence: ANALYSIS_HIGH

## conflicts
- 主要性能値（CZ/AT初当り、機械割、ベース、純増）は必勝本・パチマガスロマガ・6確・ちょんぼりすた等で重大CONFLICTなし。
- AT間天井は資料により `999G` / `999G+α`、設定変更後も `699G` / `699G+α` の表記揺れがある。必勝本の直接表は999G/699G、複数二次資料は+αを付す。数値差ではなく前兆分を含む表記定義差として平均化せず注記する。
- 設定変更時の内部状態具体振り分けは単一二次資料に数値があるが、主要比較資料は「再抽選」までのためcanonical数値へは採用しない。

## sources
retrievedAt: 2026-09-15
- サミー公式 最速解説動画: https://www.youtube.com/watch?v=0jBzCHpUjiE
- HAZUSE 機種情報/型式/検定: https://hazuse.com/machine/pachislot/5S1282/
- 遊技通信/P-WORLD 発表記事: https://news.p-world.co.jp/articles/32366/yugitsushin
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/88992/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/88950/
- パチ&スロ必勝本 殲滅ゾーン/リセットモード: https://hisshobon.com/machineinfo/88989/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/223/kh01.php
- なな徹 朝一・リセット恩恵: https://nana-press.com/kaiseki/machine/1096/34848/
- なな徹 狙い目/リセット数値: https://nana-press.com/kaiseki/machine/1096/34845/
- ちょんぼりすた 機種解析: https://chonborista.com/slot/sammy-slot/248703/
- 6確 機種解析: https://www.kaku6.jp/slot/kokaku/
- スロベース 機種解析: https://slobase.jp/machines/koukaku
- Altema 朝一リセット判別（補助）: https://altema.jp/pachimo/lkoukakureset

## qaNotes
- resetBehaviorはホール経営ゲームの朝一客行動に効く項目へ限定。
- 通常時の全モード移行表・全状態移行率・HACK内部抽選等は実機完全再現用途のため収集対象外。
