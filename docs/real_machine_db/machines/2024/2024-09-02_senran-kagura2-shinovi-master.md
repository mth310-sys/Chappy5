# Lパチスロ閃乱カグラ2 SHINOVI MASTER

recordNo: 1672
machineName: Lパチスロ閃乱カグラ2 SHINOVI MASTER
aliases: 閃乱カグラ2 / スマスロ閃乱カグラ2 / Lパチスロ閃乱カグラ2 L9
manufacturer: オーイズミラボ製造 / オーイズミ
formalModel: Lパチスロ閃乱カグラ2 L9
inspectionCode: 430226
releaseDate: 2024-09-02
generation: 6.5号機 / スマスロ
systemType: A+AT / リアルボーナス + ST型AT + 擬似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_GAKKUN_UNVERIFIED_AND_CORE_CONFLICTS

## releaseAndModelEvidence
- オーイズミ公式で2024-06-17に新機種発売を告知。
- 遊技通信/P-WORLDで型式 `Lパチスロ閃乱カグラ2 L9`、2024-09-02導入予定を確認。
- Amusement Japanでオーイズミラボ製、2024-09-02導入予定を確認。
- HAZUSEで検定番号 `430226` と型式を確認。
confidence: OFFICIAL + INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.9%
- setting3: 101.0% [CONFLICT: 101.9%表記あり]
- setting4: 105.2%
- setting5: 108.2%
- setting6: 110.3%
initialHitBySetting:
- setting1: bonus total 1/91.9 / AT 1/398.4
- setting2: bonus total 1/91.9 / AT 1/390.8
- setting3: bonus total 1/90.3 / AT 1/380.1
- setting4: bonus total 1/90.3 / AT 1/345.8
- setting5: bonus total 1/86.9 / AT 1/324.0
- setting6: bonus total 1/86.9 / AT 1/307.8
realBonusBySetting:
- setting1: 異色 1/101 / 同色 1/1024
- setting2: 異色 1/101 / 同色 1/1024
- setting3: 異色 1/99 / 同色 1/1024
- setting4: 異色 1/99 / 同色 1/1024
- setting5: 異色 1/95 / 同色 1/1024
- setting6: 異色 1/95 / 同色 1/1024
baseGamesPer50: 約31.9G/50枚（設定1）
netIncrease:
- AT「閃乱艶舞」: 約2.2枚/G
- 閃乱艶舞EX/EX極: 約2.2枚/G
basicPayout:
- 異色リアルボーナス: 約35枚
- 同色リアルボーナス: 約100枚
- AT「閃乱艶舞」: 1セット30G固定
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はリアルボーナスからAT当選を目指すA+AT構成。
- 異色ボーナスのAT期待度は約20%、同色ボーナスは約52%。
- AT「閃乱艶舞」は30G固定のST型。AT中のリアル/擬似ボーナスまたは「再艶」で30Gを再セット。
- 通常時ボーナス間500G+αでAT当選のゲーム数天井。
- AT間で通常時ボーナス最大10スルー後、11回目のボーナスでAT当選するスルー回数天井。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井までのゲーム数をRESET。
- 天井までのボーナススルー回数をRESET。
- 内部状態を再抽選。
- 内部モードを再抽選。
- 有利区間移行時扱いとなり、ボーナススルー天井が通常最大10スルーから最大6スルーへ短縮される。
- 必勝本の実戦上では開始ステージは月閃女学院。別掲載ではステージ調査中表記も残るため確定契約とは扱わない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き運用では天井までのゲーム数をCARRY_OVER。
- ボーナススルー回数をCARRY_OVER。
- 内部状態・モードもCARRY_OVER。
- 据え置きで有利区間を継続している場合、設定変更時専用の最大6スルー短縮は発生しない。通常の最大10スルー天井を基準とする。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数をCARRY_OVER。
- 天井までのボーナススルー回数をCARRY_OVER。
- 内部状態・モードをCARRY_OVER。
- 電源OFF→ON時の開始ステージは主要解析で調査中のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_STATE_MODE / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: ボーナス間ゲーム数RESET / AT間ボーナススルー回数RESET。
- 据え置き・純電断: ボーナス間ゲーム数CARRY_OVER / ボーナススルー回数CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- ゲーム数天井: ボーナス間500G+α。設定変更専用のゲーム数天井短縮は確認されない。
- スルー回数天井: 通常は最大10スルー→11回目のボーナスでAT当選。設定変更/有利区間移行時は最大6スルー→7回目のボーナスでAT当選へ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時: 通常時AT抽選に影響する内部モードを再抽選。
- 純電源OFF→ON/据え置き: 内部モードCARRY_OVER。
- モードA〜Dおよび11種類のモードテーブルが存在するが、設定変更時専用の振り分け数値は公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESELECT_VS_CARRY_OVER / PUBLIC_VALUE_NOT_FOUND_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態を再抽選。
- 純電源OFF→ON/据え置き: 内部状態CARRY_OVER。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時を含む有利区間移行時は、ボーナススルー天井が最大6スルーへ短縮される。
- 通常遊技中の有利区間リセットは、エンディング終了後および30セット以上継続したAT後の所定契機で発生し、ボーナススルー天井短縮が付与される。
- 通常遊技中の有利区間リセット後に発生する「かぐらちゃんす」は設定変更時は除外される。
- 有利区間ランプでは設定変更/据え置きを判別できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 最大の朝一恩恵はAT間ボーナススルー天井の短縮。通常最大10スルーから設定変更後は最大6スルーとなり、7回目のボーナスでAT当選。
- ゲーム数天井500G+αそのものは短縮されない。
- 設定変更時には通常の有利区間リセット時に付く「かぐらちゃんす」恩恵は付与されない。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更により前日のボーナス間G数、ボーナススルー回数、内部状態、内部モードは失われる。
- 通常の有利区間リセット時に付与される「かぐらちゃんす」は設定変更時には除外されるため、この点は通常リセット契機と比べた相対的不利。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更後は最大6スルーで天井に到達するため、7回目のボーナスでもAT非当選なら据え置き濃厚材料となる。ただし通常遊技中の有利区間リセットでも同じ短縮が起こるため、絶対判別ではない。
- 有利区間ランプでは設定変更判別不可。
- 設定変更時の開始ステージは実戦上「月閃女学院」とする資料があるが、別ページではステージ調査中表記も残るため確定判別には使用しない。
- 本機固有ガックン条件・発生率は「閃乱カグラ2」「Lパチスロ閃乱カグラ2 L9」「オーイズミラボ」+「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」で検索語を変え、主要解析・業界資料を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SLIP_CEILING_AND_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 500G+alpha_between_real_bonuses
normalBonusThroughCeiling: max10_through_then_11th_bonus_AT
resetBonusThroughCeiling: max6_through_then_7th_bonus_AT
settingChangeCounter: RESET
powerOffOnCounter: CARRY_OVER
settingChangeState: RESELECT
powerOffOnState: CARRY_OVER
settingChangeMode: RESELECT
powerOffOnMode: CARRY_OVER
publicResetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
morningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH

### publicMorningNumbers
- 朝一/設定変更後のAT間ボーナススルー天井: 最大6スルー、7回目のボーナスでAT当選。
- ボーナス間ゲーム数天井: 500G+α（朝一専用短縮なし）。
- 朝一専用モード振り分け、朝一AT当選率、ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 設定3の機械割は必勝本・一撃・ちょんぼりすた等で `101.0%`、マルっとWAVE・一部販売/整理資料で `101.9%`。複数主要解析一致の101.0%をcanonicalとし `CONFLICT_PAYOUT_SETTING3_101_0_VS_101_9` を保持。
- AT初当りは必勝本/マルっとWAVE系で `1/398.4 → 1/307.8`、ちょんぼりすたで `1/397.3 → 1/289.2` と差がある。canonicalは導入当時の複数資料一致 `1/398.4 → 1/307.8` とし `CONFLICT_AT_INITIAL_HIT_TABLE` を保持。

## missingFields
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- publicResetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- publicMorningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- powerCycleBehavior.startStage: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- オーイズミ公式 発売告知: https://oizumi.co.jp/news/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8Cl%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E9%96%83%E4%B9%B1%E3%82%AB%E3%82%B0%E3%83%A92-shinovi-master%E3%80%8D-%E7%99%BA%E5%A3%B2/
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/28145/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004382/
- HAZUSE 型式/検定番号: https://hazuse.com/hd/430226-2/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/56/kh01.php
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4362/1/104671
- 必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4362/1/104812
- 必勝本 システム: https://p.hisshobon.jp/vpage/2642/4
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/795/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/795/23766/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/795/23767/
- 一撃 天井/朝一: https://1geki.jp/slot/l_kagura2/3/
- 一撃 基本解析: https://1geki.jp/slot/l_kagura2/
- マルっとWAVE: https://marutto-w.com/industry_news/20240905-4
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/216067/
