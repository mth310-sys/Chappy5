# スマスロ 新鬼武者3

recordNo: 1755
machineName: スマスロ 新鬼武者3
aliases: 新鬼武者3 / L新鬼武者3 / L新鬼武者3SA
manufacturer: レオスター（製造） / エンターライズ（シリーズ・ブランド）
formalModel: L新鬼武者3SA
inspectionCode: 5S0507
releaseDate: 2025-10-06
generation: 6号機 / スマスロ
systemType: AT / ゲーム数上乗せ+セット継続 / 周期抽選
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- エンターライズ公式機種一覧は「スマスロ 新鬼武者3」を2025年10月導入・AT機として掲載。
- グリーンべるとは2025-06-06付検定通過型式としてレオスター `L新鬼武者3SA` を報道し、2025-09-24の記事ではレオスター製として10月上旬導入を報道。
- HAZUSEは型式 `L新鬼武者3SA`、検定番号 `5S0507`、導入開始日2025-10-06を掲載。
- 必勝本、一撃、パチビー等も2025-10-06導入で一致。
confidence: OFFICIAL / INDUSTRY / INDUSTRY_DB / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.3%
- setting3: 100.2%
- setting4: 105.2%
- setting5: 109.2%
- setting6: 113.0%
initialHitBySetting:
  at:
  - setting1: 1/379.7
  - setting2: 1/372.7
  - setting3: 1/352.8
  - setting4: 1/306.5
  - setting5: 1/297.9
  - setting6: 1/293.1
baseGamesPer50: 約33G/50枚
netIncrease:
- 蒼剣RUSH: 約2.5枚/G
- 擬似ボーナス: 約4.6枚/G
- 真蒼剣RUSH: 約5.5枚/G
basicPayout:
- 蒼剣RUSH: 初回40G+α、2セット目以降30G+α（終了後に幻魔京BATTLE）
- 鬼BONUS: 10G
- 蒼剣BONUS: 20G
- 真蒼剣BONUS: 30G
- 真蒼剣RUSH: 30G+幻魔京BATTLE6G+α、継続率89%、蒼剣RUSH突入から一連の増加区間終了までの期待獲得枚数約3600枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はバッサリポイント(BP)の規定値到達で1周期となり、前兆「鬼モード」を経てAT当否を告知。
- 規定BPは111〜666BP。通常時の周期天井は最大6周期。
- ゲーム数天井はAT間1000G+αでAT当選。
- 設定変更後は周期天井のみ最大4周期へ短縮され、ゲーム数天井1000G+αは短縮されない。
- 設定変更時/AT終了時の初回周期は必ず222BP以内に鬼モードへ移行。
- 上位AT「真蒼剣RUSH」は純増約5.5枚/G、継続率89%、期待獲得枚数約3600枚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_PARTIAL_POWER_CYCLE_DETAILS_AND_GAKKUN_NOT_HIGH_CONFIDENCE_FIXED
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は周期天井をRESETし、通常最大6周期から最大4周期へ短縮。
- 初回周期の規定BPは最大222BP。必勝本・一撃・パチビー・なな徹で一致。
- ゲーム数天井はAT間1000G+αのままで、設定変更による短縮なし。
- ちょんぼりすた/SLOT HACKの朝一比較表では内部状態は設定変更でRESET。
- なな徹は有利区間リセット契機として設定変更時を明記。
- 通常/チャンス/天国の具体的な設定変更時モード振り分けは、検索語・資料系統を変えて再探索しても公開数値を固定できず `PUBLIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CYCLE_RESET / ANALYSIS_MULTI_FOR_INTERNAL_STATE / ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_RESET

### carryOverBehavior
- 据え置きでは天井を引き継ぐ旨をなな徹の朝一比較情報で確認。
- 純粋な据え置き時の内部モード・内部状態・BP・周期数・有利区間の各要素を文章で個別に列挙した高優先資料は限定的。電源OFF→ON比較資料では内部状態・天井を引き継ぐとされるため、据え置き一般の全項目を推測で自動補完しない。
- 有利区間ランプによる設定変更/据え置き判別は不可。
confidence: ANALYSIS_HIGH_FOR_CEILING_CARRY_OVER / PARTIAL_FOR_OTHER_INTERNAL_ITEMS

### powerCycleBehavior
- ちょんぼりすた/SLOT HACKは純電源OFF→ONで天井・内部状態を引き継ぎ、液晶表示のみリセットと掲載。
- スロパチクエストは電源OFF→ONで有利区間・天井・内部モードをすべて引き継ぐと掲載。
- BP/周期数を含む全内部項目を高優先一次資料で個別照合できていないため、機種固有の直接契約としては `ANALYSIS_SINGLE_TO_MULTI_SECONDARY` に留める。
confidence: ANALYSIS_MULTI_SECONDARY_FOR_CARRY_OVER / NO_OFFICIAL_DIRECT_TABLE_FOUND

### gameCounterReset
settingChange:
- cycleCounter: RESET_AND_SHORTEN_TO_MAX_4_CYCLES
- firstCycleBP: MAX_222_BP
- gameCountCeiling: RESET_TO_NORMAL_1000G_PLUS_ALPHA_NO_SHORTENING
carryOver:
- ceilingProgress: CARRY_OVER_CONFIRMED
powerCycle:
- ceilingProgress: CARRY_OVER_SECONDARY_SOURCES
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / ANALYSIS_HIGH_FOR_CARRY_OVER_CEILING / ANALYSIS_MULTI_SECONDARY_FOR_POWER_CYCLE

### ceilingAfterReset
normalGameCeiling: AT間1000G+α
normalCycleCeiling: 最大6周期
resetGameCeiling: AT間1000G+α（短縮なし）
resetCycleCeiling: 最大4周期
resetFirstCyclePointCeiling: 最大222BP
ceilingBenefit: AT当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 周期天井は設定変更後最大4周期。
- 通常/チャンス/天国の設定変更時具体振り分けは `PUBLIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- 1周期目規定BPテーブルは設定変更時必ず222BP以内となることを複数資料で確認。
- 純電源OFF→ON時の内部モードは二次解析で引継ぎとされる。
confidence: ANALYSIS_HIGH_FOR_CYCLE_CONTRACT / UNVERIFIED_NUMERIC_DISTRIBUTION / ANALYSIS_SINGLE_TO_MULTI_SECONDARY_FOR_POWER_CYCLE_MODE

### stateAfterReset
- 設定変更時の内部状態は二次解析の直接比較表でRESET。
- 純電源OFF→ONでは内部状態引継ぎと複数二次資料が掲載。
- 内部状態の設定変更時具体振り分けは公開値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_MULTI_SECONDARY

### advantageousSectionReset
settingChange: RESET
carryOver: CARRY_OVER_EXPECTED_BUT_HIGH_PRIORITY_MACHINE_SPECIFIC_DIRECT_WORDING_NOT_FIXED
powerCycle: CARRY_OVER_SECONDARY_SOURCE
- なな徹は有利区間リセットのタイミングに設定変更時を明記。
- 設定変更以外の有利区間リセット後は秀吉最終決戦へ移行するが、なな徹は「設定変更時を除く」と明記しており、このツラヌキ恩恵を朝一設定変更恩恵へ混入させない。
- 有利区間ランプでは設定変更/据え置きを判別できない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / ANALYSIS_SINGLE_TO_MULTI_SECONDARY_FOR_POWER_CYCLE

### resetBenefits
- 周期天井: 通常最大6周期 → 設定変更後最大4周期。
- 1周期目: 必ず222BP以内に鬼モードへ移行。
- ゲーム数天井1000G+α自体は短縮されないため、「リセットで1000G天井短縮」とは扱わない。
- 設定変更以外の有利区間リセットで発生する秀吉最終決戦は、設定変更時には適用されない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により据え置き時の前日周期/天井進行価値は失われる。
- リセット後もゲーム数天井は1000G+αのままで、2周期目以降の規定BPは最大666BPとなり得るため、朝一が一律に浅いゲーム数で当たる仕様ではない。
- 設定変更固有の追加的な数値的不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_STRUCTURE / NONE_CONFIRMED_FOR_EXTRA_PENALTY

### resetDetection
- 朝一1周期目が111BPまたは222BPで鬼モードへ移行した場合はリセット期待度が上がる。ただし前日0BPヤメ等では据え置きでも条件が重なるため単独確定判別ではない。
- 朝一1周期目が111/222BP以外で鬼モードへ移行した場合は、なな徹で据え置き濃厚。
- 4周期を消化してもAT非当選なら、設定変更後の最大4周期契約と矛盾するため据え置き濃厚材料。
- 有利区間ランプによる変更判別は不可。
- 本機固有のリールガックン条件・発生率は `新鬼武者3/新鬼3/L新鬼武者3SA + ガックン/リール/朝一/設定変更/据え置き` を組み替え、攻略・業界・旧来DB系を再探索したが高信頼な機種固有値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BP_AND_CYCLE_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 1000G+α
resetGameCeiling: 1000G+α_NO_SHORTENING
normalCycleCeiling: MAX_6_CYCLES
resetCycleCeiling: MAX_4_CYCLES
resetFirstCyclePointCeiling: MAX_222_BP
normalPointRangePerCycle: 111_TO_666_BP
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetInternalStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 1周期目規定BP: 最大222BP
- 周期天井: 最大4周期
- ゲーム数天井: 1000G+α（設定変更でも短縮なし）

## conflicts
- 重大な性能コア数値CONFLICTは今回確認せず。AT初当り・出玉率・約33G/50枚・純増2.5/5.5枚/Gは主要解析で一致。
- メーカー表記は資料によって「レオスター」「エンターライズ」と揺れる。検定通過・業界発表ではレオスター製、エンターライズ公式機種一覧では同シリーズ機として掲載されるため、製造=レオスター / ブランド・シリーズ=エンターライズとして分離。
- 一部二次資料は純増を2.5/4.6/5.5枚/Gと表記、一撃・HAZUSE等の概要は2.5/5.5枚/Gを主要AT純増として表記。4.6枚/Gは擬似ボーナス中の値として分離し、AT純増と混同しない。

## sourceSearchNotes
- 再探索語: `スマスロ 新鬼武者3`, `新鬼武者3`, `L新鬼武者3SA`, `5S0507`, `レオスター`, `エンターライズ`, `設定変更`, `リセット`, `朝一`, `据え置き`, `電源OFF ON`, `電断`, `周期天井`, `1000G`, `222BP`, `バッサリポイント`, `鬼モード`, `内部状態`, `有利区間`, `ガックン`。
- 資料系統: エンターライズ公式、検定通過/業界メディア、HAZUSE、必勝本、一撃、なな徹、パチビー、ちょんぼりすた、SLOT HACK、スロパチクエスト、K-Navi、スロベース、古い/当時系解析検索。

## sources
retrievedAt: 2026-09-15
- エンターライズ公式 機種情報: https://www.enterrise.co.jp/slot.php
- グリーンべると 検定通過: https://web-greenbelt.jp/post-97477/
- グリーンべると 新台発表: https://web-greenbelt.jp/post-103875/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0507/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/88068/
- 必勝本 設定変更時の恩恵: https://hisshobon.com/machineinfo/88058/
- 必勝本 狙いドコロ&ヤメ時: https://hisshobon.com/machineinfo/88057/
- 必勝本 システム解説: https://p.hisshobon.jp/vpage/2733/4
- 一撃 機種トップ: https://1geki.jp/slot/l_shinnoni3/
- 一撃 天井/朝一: https://1geki.jp/slot/l_shinnoni3/3/
- 一撃 規定ポイント/周期: https://1geki.jp/slot/l_shinnoni3/45/
- 一撃 上位AT: https://1geki.jp/slot/l_shinnoni3/93/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/1015/31931/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/1015/31932/
- なな徹 モード: https://nana-press.com/kaiseki/machine/1015/32079/
- なな徹 上位AT: https://nana-press.com/kaiseki/machine/1015/31952/
- パチビー 攻略情報: https://www.pachibee.jp/machines/kouryaku/225090000
- パチビー 基本情報: https://www.pachibee.jp/machines/index/225090000
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/240678/
- SLOT HACK: https://slothack.net/matome/169101/
- スロパチクエスト: https://www.slopachi-quest.com/article/sin-onimusya3-tenjou/
- K-Navi: https://p-kn.com/slot/4391/
- スロベース: https://slobase.jp/machines/onimusha3
