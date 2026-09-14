# パチスロ かぐや様は告らせたい

recordNo: 1673
machineName: パチスロ かぐや様は告らせたい
aliases: Lパチスロ かぐや様は告らせたい / スマスロ かぐや様は告らせたい / Lかぐや様は告らせたいjA
manufacturer: ジェイビー製造 / SANKYO
formalModel: Lかぐや様は告らせたいjA
inspectionCode: 4S0464
releaseDate: 2024-09-02
generation: 6.5号機 / スマスロ
systemType: AT / 高純増擬似ボーナス + CZ + 1G連/引き戻しループ
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_GAKKUN_UNVERIFIED

## releaseAndModelEvidence
- SANKYO公式オンライン博物館で2024年9月導入、純増約9.0枚/GのBONUSループ型スマスロであることを確認。
- P-WORLD/遊技日本の検定通過記事で型式 `Lかぐや様は告らせたいjA`、ジェイビーを確認。
- HAZUSEで型式、検定番号 `4S0464`、2024-09-02導入を確認。
- パチビー、必勝本、なな徹、一撃でも2024-09-02導入を照合。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.8%
- setting3: 101.2%
- setting4: 105.8%
- setting5: 110.8%
- setting6: 114.9%
initialHitBySetting:
- setting1: BONUS 1/362
- setting2: BONUS 1/360
- setting3: BONUS 1/357
- setting4: BONUS 1/349
- setting5: BONUS 1/343
- setting6: BONUS 1/335
baseGamesPer50: 約31.0G/50枚（設定1）
netIncrease:
- 擬似BONUS: 約9.0枚/G
basicPayout:
- REGULAR BONUS: 平均約83枚 / ベルナビ7回
- BIG BONUS: 平均約270枚 / 30G
- SUPER BIG BONUS: 平均約490枚 / 54G
- EXTRA BONUS: 100G以上 / 突入から一連のBONUS連終了まで期待枚数約3450枚
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はチャンス目規定回数や規定G数からCZ「告らせたいチャレンジ」を目指し、CZ成功などから擬似BONUSへ当選。
- CZ「告らせたいチャレンジ」は15G+α、成功期待度約58%。
- ボーナス間ゲーム数天井はBIG後最大1100G+α、REG後900G+α、設定変更後800G+αでBIG以上当選。
- ボーナス間でCZ最大7回スルー後、次回CZ当選時はBIG以上へ書き換え。
- CZ間はチャンス目最大30回成立でCZ当選。内部モードA/B/C/Dで規定回数が変化。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までのゲーム数・CZスルー回数をRESET。
- チャンス目規定回数を再抽選。
- 内部モードを再抽選。
- REG単発の連続回数を再抽選。
- 内部状態をRESETとする機種専用朝一資料あり。
- 液晶ゲーム数カウンター、チャンス目カウンターとも表示上RESET。
- 開始ステージは朝または昼ステージ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井までのゲーム数・CZスルー回数をCARRY_OVER。
- チャンス目規定回数、内部モード、REG単発連続回数、内部状態をCARRY_OVER。
- 液晶ゲーム数/チャンス目カウンターは朝一見た目上リセットされる場合があるため、表示だけで内部引継ぎを否定できない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数・CZスルー回数を内部的にCARRY_OVER。
- チャンス目規定回数、モード、REG単発連続回数をCARRY_OVER。
- ゲーム数カウンター/チャンス目カウンターは見た目上RESETされるが内部的にはCARRY_OVER。
- 通常時であれば朝または昼ステージへ。通常時以外の状況では状態を引き継ぐとする機種専用解析あり。
confidence: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 内部ゲーム数RESET。
- 据え置き/純電断: 内部ゲーム数CARRY_OVER。
- ただし純電断時でも液晶ゲーム数カウンターは見た目上RESETされるため、表示値と内部天井進行を分離して扱う。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- BIG後通常天井: 1100G+α。
- REG後天井: 900G+α。
- 設定変更後天井: 800G+αへ短縮。
- いずれも到達時はBIG以上当選。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードA/B/C/Dを再抽選。
- 公開設定変更時振り分け: A 約38% / B 約60% / C 約1% / D 約1%。B以上は約62%。
- 据え置き/純電断: モードCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き/純電断: 内部状態CARRY_OVER。
- 通常時以外で電断した場合はその状況を引き継ぐとする資料あり。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時は有利区間RESET。
- 据え置き時は有利区間CARRY_OVER。
- 通常遊技中ではエンディング後、ボーナス終了時の一部でも有利区間RESET。
- 設定変更以外の有利区間RESET後は「奇跡的相性モード」へ入るが、設定変更時はこの恩恵の対象外。
- 有利区間ランプでは設定変更/据え置き判別不可。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 最大ゲーム数天井が通常1100G+α（BIG後）から800G+αへ短縮。
- 初期モードはBが約60%、B以上合計約62%と上位寄り。
- モードBはチャンス目規定回数がモードAより浅めに選ばれやすい。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進行、CZスルー回数、チャンス目規定回数、モード、REG連続回数、内部状態は設定変更で失われる。
- 通常遊技中の有利区間RESET後に付く「奇跡的相性モード」は設定変更時には付与されない。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一は設定変更の有無に関係なく、初回ボーナスまでゲーム数カウンターの色が変化しないため表示だけではリセット判別困難。
- 800G+αを超えて初回ボーナス非当選なら据え置き濃厚材料。
- 朝一、通常ゾーン外のG数でCZ当選した場合は据え置き可能性が高くなるとする機種専用解析あり。
- 有利区間ランプによる判別不可。
- 本機固有ガックン条件・発生率は「かぐや様は告らせたい」「Lかぐや様は告らせたいjA」「SANKYO」「ジェイビー」+「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」で検索語を変え、公式・業界・主要解析・旧DB系を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_AND_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeilingAfterBIG: 1100G+alpha
normalGameCeilingAfterREG: 900G+alpha
resetGameCeiling: 800G+alpha
resetModeDistribution:
- A: about38%
- B: about60%
- C: about1%
- D: about1%
- B_or_higher: about62%
czThroughCeiling: max7_fail_then_next_CZ_BIG_or_higher
czChanceCountCeiling:
- modeA: max30
- modeB: max30
- modeC: max20
- modeD: max5
gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH

### publicMorningNumbers
- 設定変更後ゲーム数天井: 800G+α。
- 設定変更時モード: A約38% / B約60% / C約1% / D約1%。
- B以上スタート: 約62%。
- ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 必勝本のモードC説明に「最大19回」とする本文表現がある一方、同系統の表・なな徹・P-WORLD等はモードC天井を20回としている。canonicalは複数資料・規定回数区分と整合する最大20回とし、`CONFLICT_MODE_C_MAX_19_VS_20` を保持。

## missingFields
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- SANKYO公式オンライン博物館: https://www.sankyo-fever.jp/collection/965/
- P-WORLD / 遊技日本 検定通過: https://news.p-world.co.jp/articles/28265/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/4S0464/
- パチビー 基本スペック: https://www.pachibee.jp/machines/index/224080002
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4351/1/103578
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4351/1/105007
- 必勝本 モード移行: https://p.hisshobon.jp/machine/4351/1/105003
- 必勝本 システム: https://p.hisshobon.jp/vpage/2641/4
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/804/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/804/23724/
- なな徹 天井: https://nana-press.com/kaiseki/machine/804/23721/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/804/23725/
- なな徹 モード: https://nana-press.com/kaiseki/machine/804/26317/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10091
- 一撃: https://1geki.jp/slot/l_kaguya/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/216319/
