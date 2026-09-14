# Lワンパンマン

recordNo: 1669
machineName: Lワンパンマン
aliases: スマスロ ワンパンマン / ONE PUNCH MAN
manufacturer: EXCITE（ニューギングループ）
formalModel: LワンパンマンEY
inspectionCode: 4S0335
releaseDate: 2024-08-05
generation: 6.5号機 / スマスロ
systemType: AT / CZ→擬似ボーナス→AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 高知県公安委員会ほかの検定通過公示を報じた遊技日本/P-WORLDで `LワンパンマンEY`（EXCITE）の検定通過を確認。
- HAZUSEで型式 `LワンパンマンEY`、検定番号 `4S0335`、メーカーEXCITE、導入開始日2024-08-05を照合。
- ニューギン直営店では2024-07-18に10台を先行導入。全国導入本線は業界記事・主要解析で2024-08-05一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.6%
- setting2: 98.9%
- setting3: 100.7%
- setting4: 105.1%
- setting5: 110.4%
- setting6: 114.9%
initialHitBySetting:
- setting1: CZ 1/158.8 / bonus 1/315.8 / AT 1/620.9
- setting2: CZ 1/157.2 / bonus 1/308.2 / AT 1/606.4
- setting3: CZ 1/154.5 / bonus 1/299.9 / AT 1/585.4
- setting4: CZ 1/151.7 / bonus 1/286.9 / AT 1/531.5
- setting5: CZ 1/148.1 / bonus 1/274.5 / AT 1/503.4
- setting6: CZ 1/145.7 / bonus 1/263.5 / AT 1/464.0
baseGamesPer50: 約31.9G/50枚（設定1）
netIncrease: BIG/通常AT 約2.5枚/G / 最上位AT等 約4.0枚/G
basicPayout:
- BIG BONUS: 45G+α、純増約2.5枚/G、AT当選率約50%
- マジBIG BONUS: 45G+α、純増約2.5枚/G、AT「ONE PUNCH RUSH」濃厚
- AT「ONE PUNCH RUSH」: 100G+α、純増約2.5枚/G
- 最上位AT「BBBB MAXIMUM」: 純増約4.0枚/G、継続率約92%、期待獲得枚数約3580枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数・レア役等からCZ「怪人襲来」を目指し、CZ成功で擬似ボーナス、ボーナス中抽選からATを目指す。
- CZ間天井は通常A/B/チャンスで最大320G、天国/超天国で128G。
- CZ6回連続スルー後は7回目CZでマジBIG BONUS濃厚。
- 通常時モードは通常A / 通常B / チャンス / 天国 / 超天国の5種類。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GAKKUN_AND_DEFINITIVE_RESET_DETECTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 天井までの内部ゲーム数RESET。
- CZスルー回数RESET。
- 内部モードRESET後に再抽選。
- 内部状態（低確/高確/超高確）を再抽選。
- 裏ボスモードRESET。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、天井進行、CZスルー回数、内部モード、内部状態、裏ボスモードをCARRY_OVER。
- なな徹は据え置き時の有利区間・天井・内部状態・モード引継ぎを明記。CZスルー回数・裏ボスモードは必勝本の電源OFF/ON比較とも整合するため据え置き契約として保持。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数をCARRY_OVER。
- CZスルー回数をCARRY_OVER。
- 内部モード、内部状態、裏ボスモードをCARRY_OVER。
- 有利区間も設定変更を伴わない純電断では引継ぎとして複数解析で一致。
- 電源OFF→ON時の開始ステージは必勝本でも「現在調査中」のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_COUNTERS_MODES_STATE

### gameCounterReset
- 設定変更: RESET（CZ間ゲーム数・CZスルー回数とも初期化）。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常A / 通常B / チャンス: 最大320GでCZ。
- 天国 / 超天国: 最大128G。
- 設定変更時は固定的なゲーム数短縮ではなく、通常B以上へのモード優遇が主要恩恵。
- リセット後も通常Bまたはチャンスなら最大320Gのため、「設定変更後は必ず320G未満へ短縮」という契約にはしない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は通常Aが選択されず、通常B以上から開始。
- 公開振り分け: 通常B 53.1% / チャンス 16.4% / 天国 30.1% / 超天国 0.4%。
- 据え置き/純電源OFF→ONはモードCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 低確/高確/超高確を再抽選。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 設定変更時の状態別正規振り分けは、機種名/型式/メーカー名 + 設定変更/リセット/低確/高確/超高確/内部状態で主要解析・旧攻略を再探索したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESELECTION_AND_CARRYOVER / UNVERIFIED_FOR_DISTRIBUTION

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- なな徹が確認済みの有利区間リセットタイミングは設定変更時。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 内部モードが通常B以上確定。
- チャンス以上は46.9%（16.4 + 30.1 + 0.4%）、天国以上は30.5%。
- 全モードで65〜128Gが強いゾーンで、機種全体として通常時128G以内のCZ当選率は60%超。これは設定変更専用率ではないため、リセット専用当選率とは混同しない。
- 朝一で「シババワ様のありがたい予言」が出現し、内容からモード/天井等を推測できる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- CZスルー回数、前日天井進行、内部モード/状態、裏ボスモードを設定変更で消去・再抽選するため、前日が有利な蓄積状態なら客側に不利となり得る。
- 設定変更専用の固定冷遇率・数値的ペナルティは再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / UNVERIFIED_FOR_NUMERIC_PENALTY

### resetDetection
- なな徹の機種専用リセット判別は「現在調査中」。
- スロパチクエストでは規定ゲーム数前兆の発生位置がズレた場合を据え置き期待度アップ材料としているが、確定判別ではない。
- 朝一のモード示唆「シババワ様のありがたい予言」は変更後にも発生するが、単独で設定変更確定とはしない。
- 朝一のビリビリ演出を利用する後年立ち回り資料も存在するが、主要解析の確定的リセット判別として固定できないため canonical 判別契約には採用しない。
- 本機固有のリールガックン条件/発生率は、機種名・型式 `LワンパンマンEY`・EXCITE/ニューギン + 設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンへ検索語を変更し、主要解析・当時攻略・後年回顧を横断したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_KNOWN_INDICATORS / UNVERIFIED_FOR_DEFINITIVE_DETECTION_AND_GAKKUN

### numericResetData
settingChangeModeDistribution:
- normalA: 0%
- normalB: 53.1%
- chance: 16.4%
- heaven: 30.1%
- superHeaven: 0.4%
modeCeilings:
- normalA: 320G
- normalB: 320G
- chance: 320G
- heaven: 128G
- superHeaven: 128G
otherPublicMorningNumbers:
- chanceOrHigherAfterReset: 46.9%
- heavenOrHigherAfterReset: 30.5%
- resetInternalStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_MODE_DISTRIBUTION

### publicMorningNumbers
- 設定変更時モード振り分け: 通常B 53.1% / チャンス16.4% / 天国30.1% / 超天国0.4%。
- 設定変更後は通常B以上100%。
- 天国以上合算30.5%、チャンス以上46.9%。
- モード別CZ天井: 通常A/B/チャンス320G、天国/超天国128G。
- 「128G以内CZ当選率60%超」は機種全体の通常時公開値であり、設定変更専用値ではない。

## conflicts
- 現時点で性能コア、モード振り分け、天井、設定変更/据え置き主要挙動に数値競合なし。
- 導入台数は主要資料で約8000台/約10000台の差があるが、市場実績は現ミッション必須対象外のため性能レコードのCONFLICT対象にはしない。

## missingFields
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- definitiveResetDetection: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior.stageRestore: UNVERIFIED_AFTER_RESEARCH
- resetInternalStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- numericResetPenalty: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- P-WORLD / 遊技日本 検定通過: https://news.p-world.co.jp/articles/27931/nippon
- Amusement Japan 直営先行導入: https://amusement-japan.co.jp/article/detail/10004449/
- グリーンべると 直営先行導入/スペック: https://web-greenbelt.jp/post-85996/
- HAZUSE 基本スペック/型式/検定番号: https://hazuse.com/machine/pachislot/4S0335/genre/201/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/4S0335/genre/207/
- なな徹 機種まとめ: https://nana-press.com/kaiseki/machine/784/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/784/23281/
- なな徹 モード移行: https://nana-press.com/kaiseki/machine/784/23284/
- なな徹 リセット狙い/天井: https://nana-press.com/kaiseki/machine/784/23279/
- なな徹 BIG: https://nana-press.com/kaiseki/machine/784/23299/
- なな徹 AT: https://nana-press.com/kaiseki/machine/784/23301/
- 一撃 機種まとめ: https://1geki.jp/slot/l_onepunchman/
- 一撃 設定差/AT初当り: https://1geki.jp/slot/l_onepunchman/0/
- 一撃 天井・朝一: https://1geki.jp/slot/l_onepunchman/3/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/84333/
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/vpage/2639/2
- パチ&スロ必勝本 通常時/モード: https://hisshobon.com/machineinfo/84351/
- パチ&スロ必勝本 シババワ様: https://hisshobon.com/machineinfo/84330/
- スロパチクエスト 天井/リセット: https://www.slopachi-quest.com/article/onepunchman-tenjou/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/214150/

## sourceConfidenceSummary
- 型式/検定/導入: INDUSTRY + ANALYSIS_HIGH
- 性能コア: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH
- resetBehavior主要契約: ANALYSIS_HIGH / MULTI_SOURCE_MATCH
- 設定変更モード振り分け: ANALYSIS_HIGH / MULTI_SOURCE_MATCH
- 電源OFF→ON: ANALYSIS_HIGH（必勝本直接比較 + 他解析整合）
- ガックン/確定判別/内部状態振り分け: UNVERIFIED_AFTER_RESEARCH
