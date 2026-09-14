# L咲-Saki-頂上決戦

recordNo: 1748
machineName: L咲-Saki-頂上決戦
aliases: L咲-Saki- 頂上決戦 / スマスロ 咲-Saki-頂上決戦 / 咲 頂上決戦
manufacturer: 三洋物産 / SANYO
formalModel: L咲-Saki-頂上決戦YR
inspectionCode: 5S0429
releaseDate: 2025-08-04
generation: 6.5号機 / スマスロ
systemType: AT / 周期 + CZ経由AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 三洋販売・三洋物産の新機種発表を報じたグリーンべると/P-WORLDは、2025-08-04ホール導入予定、AT純増約4.5枚/G、設定1 AT初当り約1/398、平均獲得約563枚を掲載。
- 一撃は型式 `L咲-Saki-頂上決戦YR`、検定番号 `5S0429`、導入開始日2025-08-04を掲載。
- HAZUSEも型式 `L咲-Saki-頂上決戦YR`、検定番号 `5S0429`、導入開始日2025-08-04で一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.7%
- setting3: 100.6%
- setting4: 104.1%
- setting5: 109.0%
- setting6: 114.9%
initialHitBySetting:
  cz:
  - setting1: 1/184.0
  - setting2: 1/181.7
  - setting3: 1/176.5
  - setting4: 1/168.5
  - setting5: 1/158.5
  - setting6: 1/154.2
  at:
  - setting1: 1/398.4
  - setting2: 1/386.4
  - setting3: 1/365.5
  - setting4: 1/336.3
  - setting5: 1/304.2
  - setting6: 1/284.0
baseGamesPer50: 約32.1G
netIncrease:
- AT「頂上決戦」: 約4.5枚/G
- 上位AT「おーるすたぁRUSH」: 約4.5枚/G
basicPayout:
- AT「頂上決戦」: ゲーム数上乗せ型、初期G数は「ポインとTIME」で決定
- AT平均獲得枚数: 約563枚（設定1）
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は「特打ポイント」300ptを減算し、0ptで1周期到達。1周期平均約68G。
- 周期抽選に関わるモードは通常 / チャンス / 福路 / 衣の4種類。
- 周期天井は最大8周期（南4局）でCZ「特打」当選濃厚。
- AT間ゲーム数天井は通常1000G+前兆（最大16G）でAT当選濃厚。
- CZスルー回数天井は1・2・6回の規定回数候補があり、最大6スルー後の次回CZでAT濃厚。
- AT「頂上決戦」は純増約4.5枚/G。設定1の平均獲得枚数は約563枚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_CARRYOVER_TABLE_POWER_CYCLE_SECONDARY
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間、AT間天井、特打ポイント、周期抽選モード、ライバルモードをRESET / 再抽選。
- AT間ゲーム数天井は通常最大1000G+αから最大600G+αへ短縮。
- 特打ポイントは液晶上300ptスタートだが、内部的にはランダム減算された状態から開始し、表示と内部ポイントがズレる場合がある。
- 周期抽選モードは設定変更時に再抽選。設定1では通常約54.8%、チャンス約33.6%、福路約9.6%、衣約2.0%。高設定ほど上位モードが選ばれやすい。
- 設定変更後は咲ステージ開始。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- なな徹の直接比較表では、据え置き時に有利区間、天井、特打ポイント、周期抽選モード、ライバルモードを引き継ぐ。
- ステージは、前日が咲 / 和 / 咲&和 / 二人きりの帰り道の通常系ステージなら咲ステージへ移行するため見た目だけでは変更確定不可。それ以外のステージなら前日ステージへ復帰する。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみの独立比較について、スロベース/6確は有利区間・天井・内部モード・内部状態を引継ぎ、表示G数は0G、周期表示は東1局、ステージは咲ステージと整理している。
- ただし、なな徹の高優先直接比較表は「設定変更 vs 据え置き」であり、純電断を独立列挙していない。よって純電断契約は二次資料一致として採用しつつ、信頼度を `ANALYSIS_SINGLE_SECONDARY_POWER_CYCLE` に抑える。
- 純電断時の特打ポイント内部値は引継ぎとする二次資料があるが、表示は300ptへ戻るため外見からは判別しにくい。
confidence: ANALYSIS_SINGLE_SECONDARY_POWER_CYCLE

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER_SECONDARY_SOURCE
- 設定変更時は最大600G+αへ短縮。
- 据え置きは前日のAT間ゲーム数進行を引継ぎ。
- 純電断時の引継ぎは二次資料一致。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### ceilingAfterReset
normalAtGameCeiling: 1000G+前兆最大16G
resetAtGameCeiling: 最大600G+α
atNoWinAfterCeiling: 800G+α（麻雀激闘未勝利でAT終了時。設定変更専用ではないため分離）
cycleCeilingNormal: 南4局 / 最大8周期
czSkipCeilingNormal: 最大6スルー後の次回CZ
- 設定変更での周期天井そのものの固定短縮値は公開資料では確認できず、代わりにモード再抽選と特打ポイント内部ランダム減算による早期CZ期待が存在。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 周期抽選モードを再抽選。
- 設定1の設定変更時 / AT終了時モード振り分け:
  - 通常: 約54.8%
  - チャンス: 約33.6%
  - 福路: 約9.6%
  - 衣: 約2.0%
- 設定2〜6は「高設定ほど上位モードが選ばれやすい」ことまで公開されているが、モード4区分の全設定別具体値は今回固定できず `PUBLIC_FULL_TABLE_NOT_FOUND_AFTER_RESEARCH`。
- ライバルモードも設定変更でRESET、据え置きでCARRY_OVERと直接比較表で確認。
confidence: ANALYSIS_HIGH_FOR_SETTING1_AND_RESET_CONTRACT / UNVERIFIED_FOR_FULL_SETTING_TABLE

### stateAfterReset
- なな徹の比較表では独立の高確/低確状態を項目化せず、周期抽選モード・ライバルモードをRESET / CARRY_OVERとして公開。
- 二次資料は「内部状態」を設定変更でRESET、電源OFF→ONでCARRY_OVERと整理するが、何を状態に含むか定義が曖昧なため、独立state項目は `UNVERIFIED_DEFINITION_AFTER_RESEARCH` とする。
confidence: UNVERIFIED_DEFINITION_AFTER_RESEARCH

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER
powerCycle: CARRY_OVER_SECONDARY_SOURCE
- なな徹の直接比較表で設定変更は有利区間RESET、据え置きは引継ぎ。
- 通常遊技中の有利区間リセット契機は設定変更時、AT開始時の一部、エンディング終了後。
- 設定変更時以外の有利区間リセット後は「SPECIALのどっちジャッジ」へ突入するが、なな徹は明確に「設定変更時を除く」と注記しているため朝一恩恵には混入しない。
- 純電断の有利区間CARRY_OVERは二次資料扱い。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### resetBenefits
- AT間天井が最大1000G+αから最大600G+αへ400G短縮。
- 特打ポイントは内部ランダム減算状態で開始するため、液晶300pt表示より早く周期到達する可能性がある。
- 周期抽選モードが再抽選され、設定1でもチャンス以上合計約45.2%（丸め合計）・福路以上約11.6%。
- 朝一600G消化までにAT間天井へ到達できるため、通常時より浅いゲーム数から天井狙い価値が生じる。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日までのAT間天井進行、特打ポイント進行、周期抽選モード、ライバルモードを失う。
- 前日が浅い周期天井モードやCZスルー天井接近状態だった場合の進行喪失は客側には不利になり得る。
- 設定変更以外の有利区間リセット後に付く「SPECIALのどっちジャッジ」は設定変更時には付かない。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一600G消化してAT間天井が発動しなければ据え置き濃厚。
- 朝一が咲ステージ以外なら据え置き濃厚。ただし咲ステージ開始でも据え置きの可能性があるため、咲ステージ単独では設定変更確定にならない。
- 特打カウンタは設定変更時も表示300pt固定で、内部だけランダム減算されるため、表示値だけでリセット判別不可。
- 本機固有のリールガックン条件・発生率は、機種名/型式/メーカー名と「ガックン」「設定変更」「据え置き」「電源OFF ON」等へ検索語を変更して再探索したが高信頼の機種固有値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STAGE / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalAtGameCeiling: 1000G+前兆最大16G
resetAtGameCeiling: 600G+α
resetSpecialPointDisplay: 300pt
resetSpecialPointInternalReduction: RANDOM_EXACT_DISTRIBUTION_NOT_PUBLICLY_FIXED_AFTER_RESEARCH
resetModeDistributionSetting1:
- normal: 約54.8%
- chance: 約33.6%
- fukuro: 約9.6%
- koromo: 約2.0%
resetChanceOrHigherSetting1: 約45.2%（公開各値の丸め合計）
resetFukuroOrHigherSetting1: 約11.6%（公開各値の丸め合計）
resetGakkun: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 特打ポイントの「設定変更時平均55pt減算」はスロベース・6確など後発二次資料で掲載される一方、なな徹・必勝本は「ランダム減算」とのみ公開し平均値を確認できない。平均55ptは `UNVERIFIED_SECONDARY_NUMERIC_VALUE` としcanonical numericResetDataへ採用しない。
- スロベースには全設定の「通常 / チャンス以上」割合が掲載されるが、高優先のなな徹が公開する具体的4モード振り分けは現時点で設定1のみ。設定2〜6の二分集計値は独立高優先照合が取れないためcanonicalへ採用しない。

## missingFields
- 設定2〜6の設定変更時4モード完全振り分け: PUBLIC_FULL_TABLE_NOT_FOUND_AFTER_RESEARCH
- 特打ポイント内部ランダム減算の正確な分布/平均値の高優先照合: UNVERIFIED_AFTER_RESEARCH
- 独立した内部状態の設定変更契約（周期/ライバルモード以外）: UNVERIFIED_DEFINITION_AFTER_RESEARCH
- 純電源OFF→ONの高優先直接比較表: UNVERIFIED_HIGH_PRIORITY_DIRECT_TABLE_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- グリーンべると/P-WORLD 新台発表: https://news.p-world.co.jp/articles/31093/greenbelt
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/5S0429/
- 一撃 機種概要・設定別CZ/AT/出玉率: https://1geki.jp/slot/l_saki/
- 一撃 天井・朝一: https://1geki.jp/slot/l_saki/3/
- 一撃 AT頂上決戦: https://1geki.jp/slot/l_saki/83/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/40/kh01.php
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2718/2
- パチ＆スロ必勝本 設定変更時の恩恵: https://hisshobon.com/machineinfo/87534/
- なな徹 設定変更・据え置き・朝一判別・有利区間: https://nana-press.com/kaiseki/machine/995/31233/
- なな徹 モード移行抽選: https://nana-press.com/kaiseki/machine/995/31229/
- パチビー 天井: https://www.pachibee.jp/machines/kouryaku/225070002
- スロベース 機種解析/電源OFF→ON比較: https://slobase.jp/machines/saki
- 6確 機種解析/電源OFF→ON比較: https://www.kaku6.jp/slot/saki/
