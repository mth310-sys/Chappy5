# 賞金首Angel

recordNo: 1664
machineName: 賞金首Angel
aliases: L賞金首Angel / スマスロ賞金首Angel / 賞金首エンジェル
manufacturer: ネット株式会社
formalModel: L賞金首Angel ND
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2024-07-22
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス+ST型AT
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- ネット公式発表系プレスリリースは2024年7月より全国導入予定として本機を発表。
- 業界資料・複数解析は2024-07-22導入で一致。
- 検定通過資料は型式 `L賞金首Angel ND`、メーカー ネット株式会社を確認。
- 型式名は複数資料一致。検定番号は表記揺れ・型式名・メーカー名・検定通過資料まで再探索したが公開固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 99.3%
- setting4: 102.3%
- setting5: 107.5%
- setting6: 110.9%
initialHitBySetting:
- setting1: bonus 1/258 / AT 1/530
- setting2: bonus 1/252 / AT 1/493
- setting4: bonus 1/234 / AT 1/450
- setting5: bonus 1/210 / AT 1/393
- setting6: bonus 1/200 / AT 1/357
baseGamesPer50: 約31.4G/50枚（設定1基準）
netIncrease: 約2.8枚/G
basicPayout:
- BOUNTY BONUS: 20G+α / AT期待度約40%
- BOUNTY BONUS SPLASH: 40G+α / AT期待度約67%
- AT「賞タイム」: 1セット30G / ST型 / ループ期待度約75%
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は弾丸ベル・レア役・デカダン等で弾丸を装填する「カチャバンシステム」からCZ/疑似ボーナス/ATを目指す。
- CZ「BOUNTY BATTLE」成功で疑似ボーナス、ボーナス中のチャレンジ成功からAT「賞タイム」へ移行するのが主ルート。
- ボーナス間天井: 通常時G数+CZ消化G数で800G+α、到達でボーナス。
- AT間天井: 1600G+α、到達でAT。
- 通常時ボーナスでアサルトチャレンジ/コスプレちゃれんじに一度も移行しなかった場合、次回ボーナス間天井100G+αへの短縮抽選あり。
- AT中にバウンティショットで一度も勝利せず終了した場合、次回AT間天井700G+αへ短縮。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_INSPECTION_CODE_AND_GAKKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までの内部ゲーム数をRESET。
- 内部状態を再抽選。
- 賞金首撃破数を再抽選。
- 弾丸装填数をRESET。
- 設定変更時は朝イチ専用の特殊状態へ移行し、ボーナスまたはAT当選まで継続。
- 実戦上の開始ステージはフォックススタンド/スタンドステージ系とする複数解析あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは設定変更による499G+α短縮天井および朝イチ専用特殊状態への強制移行は発生しない。
- 天井・内部状態等は設定変更を伴わない電源OFF→ON時に引き継ぐ機種専用比較表が複数あり、据え置き運用でも内部的な引継ぎを基本契約として扱う。
- 賞金首撃破数は見た目上リセットされる場合があるが内部では引継ぐ。弾丸装填中/弾丸発射後前兆中で閉店した場合は表示上も引き継ぐ資料あり。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE + ANALYSIS_HIGH_FOR_RESET_DETECTION

### powerCycleBehavior
- 天井までのゲーム数: CARRY_OVER。
- 内部状態: CARRY_OVER。
- 賞金首撃破数: 内部的にCARRY_OVER。弾丸装填中または弾丸発射後の前兆中は見た目上も引き継ぐ。
- 弾丸装填数: CARRY_OVER。
- ステージ復帰位置は主要機種専用比較表でも調査中表記が残るため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: ボーナス間/AT間の天井ゲーム数をRESET。
- 据え置き/純電源OFF→ON: 天井ゲーム数をCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常ボーナス間天井800G+αに対し、設定変更後は最大499G+αへ短縮。
- AT間天井1600G+αについて、設定変更専用の固定短縮値は主要資料で確認できず、通常の1600G+α契約を保持。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は「朝イチ状態」と呼ばれる特殊状態へ移行し、ボーナスまたはAT当選まで継続。
- 朝イチ状態ではカチャバンシステムから報酬を獲得した際のAT直撃が通常より選択されやすい。
- 据え置き/純電断では設定変更専用朝イチ状態への強制移行なし。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態を再抽選。
- 純電源OFF→ON: 内部状態を引き継ぐ。
- 据え置き: 内部状態の引継ぎを基本扱いとするが、表示上の状態/ステージが初期化される場合があるため見た目だけでの断定不可。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: 有利区間RESETとする攻略資料あり。
- 純電源OFF→ON: 有利区間CARRY_OVERとする攻略資料あり。
- 機種専用一次資料による設定変更/据え置き/純電断3条件の完全比較までは固定できず、信頼度は `ANALYSIS_SINGLE` とする。
- ATで一定枚数獲得後のエンディング終了時は有利区間をリセットし「ゴールドバトル」へ移行する解析あり（通常営業中の区間切断挙動であり朝一設定変更とは分離）。
confidence: ANALYSIS_SINGLE

### resetBenefits
- ボーナス間天井が800G+αから499G+αへ短縮。
- 朝イチ専用特殊状態へ移行し、AT直撃選択率が優遇。
- 朝イチ状態でボーナスに当選し、そのボーナス中に一度もアサルトチャレンジへ移行しなかった場合、次回ボーナス間天井100G+αへの短縮抽選が優遇される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時固有の主要な定量的不利要素は再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 499G+αを超えてボーナス非当選なら設定変更後の初回ボーナス間天井契約とは整合しないため据え置き推測材料。
- 賞金首撃破数や弾丸/前兆中の表示状態が前日から引き継がれている場合は据え置き濃厚材料。ただし据え置きでも通常時表示が初期化される場合があるため、初期表示=設定変更とは判定しない。
- 本機固有のリールガックン条件・固定発生率は、機種名/型式/メーカー名 + 設定変更/リセット/据え置き/電源OFF ON/ガックンで再探索したが公開固定情報を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_GAME_AND_DISPLAY_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
- 設定変更後ボーナス間天井: 499G+α
- 朝イチ状態中AT直撃当選割合:
  - setting1: 10.9%
  - setting2: 13.4%
  - setting4: 15.0%
  - setting5: 24.6%
  - setting6: 32.1%
- 朝イチ状態でボーナス当選かつボーナス中アサルトチャレンジ非移行時の次回100G+α天井短縮当選率: 約40%（設定1）
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### publicMorningNumbers
- 499G+α: 設定変更後の初回ボーナス間短縮天井。
- 朝イチ特殊状態中のAT直撃割合は設定1 10.9%〜設定6 32.1%。
- 特殊状態はボーナスまたはAT当選まで継続。
- 特殊状態中のボーナスでアサルトチャレンジ非移行なら、設定1で約40%が次回100G+α天井短縮。

## conflicts
- 設定4 AT初当りは主要スペック表で `1/450` とする資料と `1/451` とする資料がある。公式発表系/1geki系の丸め表では1/450、P-WORLDでは1/451表記。canonicalは1/450とし、`CONFLICT_ROUNDING_SETTING4_AT_1_OVER_450_VS_451` を保持。
- 導入台数は約3000台/約4500台の資料差があるが市場実績は現ミッション必須外のためcoreへ採用しない。

## missingFields
- inspectionCode: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior.stage: UNVERIFIED_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## groupAudit
- 2024-07-22 canonical群は4機: `ミスタージャグラー / 賞金首Angel / スロット ゾンビランドサガ / スマスロ ゴッドイーター リザレクション`。
- 本機は同日群2/4として処理。
- 残り2機処理後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## sources
取得日: 2026-09-14
- ネット公式発表系プレスリリース: https://www.dreamnews.jp/press/00000296473/
- Amusement Japan 業界記事: https://amusement-japan.co.jp/article/detail/10004285/
- 検定通過/型式資料: https://p-media.info/post-35542/
- ぱちんこキュレーション 型式・スペック: https://pachinko-curation.com/46906/
- 1geki オンライン遊技説明/基本スペック: https://1geki.jp/slot/l_bountyhead_angel/39/
- 1geki 天井・朝一・設定変更: https://1geki.jp/slot/l_bountyhead_angel/3/
- 1geki 設定差/朝イチ状態: https://1geki.jp/slot/l_bountyhead_angel/0/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83653/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10043
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/191/kh01.php
- K-Navi 基本スペック: https://p-kn.com/slot/4144/
- なな徹 設定判別/特殊状態: https://nana-press.com/kaiseki/machine/765/22884/
- ちょんぼりすた 朝一・有利区間: https://chonborista.com/slot/net-slot/210961/
- スロパチクエスト リセット/据え置き: https://www.slopachi-quest.com/article/syoukinkubiangel-tenjou/

## recordQuality
coreConfidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH
resetConfidence: ANALYSIS_HIGH_WITH_ADVANTAGEOUS_SECTION_SINGLE_SOURCE
missingPolicy: RESEARCH_EXHAUSTED_BEFORE_UNVERIFIED
conflictPolicy: CONFLICT_ROUNDING_RETAINED_NO_AVERAGING
