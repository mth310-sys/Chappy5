# スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION

recordNo: 1649
machineName: スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION
aliases: エウレカ4 / スマスロ エウレカセブン4 / Lエウレカセブン4 HIEVO KX / L エウレカセブン4 HIEVO KX
manufacturer: 銀座製造 / サミー販売
formalModel: L エウレカセブン4 HIEVO KX
inspectionCode: 3S1577
releaseDate: 2024-05-07
generation: 6.5号機 / スマスロ
systemType: AT / 直AT・ゲーム数上乗せ型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- サミーのマイスロ告知が2024-05-07を「ホール導入日」と明記。
- 必勝本、HAZUSE、P-WORLD系機種資料も2024-05-07で一致。
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_DATE_MATCH

## modelEvidence
- 2024-02-08検定通過記事で `L エウレカセブン4 HIEVO KX`（銀座）を確認。
- HAZUSEで型式名 `L エウレカセブン4 HIEVO KX`、検定番号 `3S1577` を確認。
confidence: INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 100.8%
- setting4: 105.3%
- setting5: 110.0%
- setting6: 113.1%
initialHitBySetting:
- setting1: AT 1/366.5
- setting2: AT 1/358.6
- setting3: AT 1/345.4
- setting4: AT 1/308.3
- setting5: AT 1/282.8
- setting6: AT 1/270.9
baseGamesPer50: 約34.6G/50枚
netIncrease: C-MODE 約2.1枚/G / 擬似BONUS・ANEMONE 約4.5枚/G
basicPayout:
- C-MODE: 初期50G+α
- BIG BONUS: 25G / 純増約4.5枚/G
- EPISODE BONUS: 25G / 純増約4.5枚/G
- ANEMONE: 25G / 純増約4.5枚/G
- HI-EVO MODE: 10G+α / 平均上乗せ約440G
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はWAVEを蓄積し、規定WAVE到達・セブンチャンス・(EX)LFO MODE等からAT「C-MODE」を目指す。
- 内部モードはモードA / B / C / 天国。最大規定WAVEは1550 / 950 / 550 / 250WAVE。
- WAVEは通常1Gごとに1WAVE増え、セブンチャンス込みの実質平均では約2WAVE/G。
- 通常時999G+αのゲーム数天井もあり、到達でAT当選。
- 1550WAVE到達時はEPISODE BONUS経由のATが濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は天井までのゲーム数・WAVE数をRESET。
- 内部モードは再抽選、内部状態も再抽選。
- 有利区間はRESET。
- WAVE数表示は朝一2G間「---」表示、開始ステージは食堂ステージ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは前日の天井ゲーム数、内部WAVE、内部モード、内部状態、有利区間をCARRY_OVERする扱い。
- 朝一の液晶WAVE表示は「---」となるため、表示値だけでは内部引継ぎを直接確認できない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数・WAVE数、内部モード、内部状態を引き継ぐ。
- 通常時は食堂ステージから開始。セブンチャンス・AT中の電断は状態を引き継ぐ。
- WAVE数表示は朝一「---」表示。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: 実ゲーム数天井進行と内部WAVEをRESET。
- 据え置き/純電断: 内部的にCARRY_OVER。
- 液晶WAVE表示は設定変更・電断とも朝一2G間非表示。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 通常WAVE天井: 最大1550WAVE（平均約775G）。
- 設定変更後WAVE天井: 最大950WAVE（平均約475G）へ短縮。
- 実ゲーム数天井999G+αは設定変更時に進行RESET。別の短縮値は高信頼資料で確認できず。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモードA/B/C/天国の内部モードを再抽選。
- 据え置き/純電断は内部モードCARRY_OVER。
- 設定変更専用の各モード具体的振り分けは、表記揺れ・型式・メーカー・シリーズ名と検索語を変更して再探索したが固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更時の内部状態移行率: 通常39.8% / 高確50.0% / 超高確10.2%。高確以上合計60.2%。
- 据え置き/純電断は内部状態CARRY_OVER。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_VALUE

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電断: CARRY_OVER。
- 営業中はエンディング終了時・AT終了時の一部でも有利区間RESET。設定変更時を除く有利区間リセット後はEX LFO MODE突入。
confidence: ANALYSIS_HIGH

### resetBenefits
- WAVE最大天井1550WAVE → 950WAVEへ短縮。
- 設定変更時は高確以上60.2%で開始。
- 設定変更後は250WAVE以内の初当たり期待度が通常よりアップすることが複数解析で確認される。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の実ゲーム数天井進行、WAVE、内部モード、内部状態は設定変更で消失。
- 設定変更時は、設定変更以外の有利区間リセット後に付くEX LFO MODE突入恩恵の対象外。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更後は最大950WAVEのため、朝一950WAVEを超えてAT非当選なら据え置き濃厚材料。
- 設定変更/純電断とも食堂ステージ開始かつWAVE表示「---」のため、開始画面単独では判別困難。
- 本機固有リールガックン条件・発生率は、機種名/型式/銀座/サミーと「設定変更」「据え置き」「電源OFF ON」「ガックン」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_WAVE_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
- 通常最大WAVE天井: 1550WAVE（平均約775G）
- 設定変更後最大WAVE天井: 950WAVE（平均約475G）
- 実ゲーム数天井: 999G+α
- 設定変更時内部状態: 通常39.8% / 高確50.0% / 超高確10.2%
- 高確以上開始率: 60.2%
- 設定変更時250WAVE以内AT当選率: 通常時よりUP（具体的な設定変更専用率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後最大950WAVE（平均約475G）。
- 設定変更時は高確以上60.2%（高確50.0% + 超高確10.2%）。
- 参考通常値として250WAVE以内AT当選期待度は設定1 40.5% / 2 41.7% / 3 42.5% / 4 46.5% / 5 49.9% / 6 50.5%。設定変更時はこれよりアップするが専用具体率は未公表扱い。

## conflicts
- WAVEの説明に「1Gで1WAVE加算」と「セブンチャンス込み平均約2WAVE/G」が併存するが定義差であり競合ではない。
- 250WAVE以内40.5～50.5%は通常の設定別期待度。設定変更時はこれよりUPするため、リセット専用数値として流用しない。
- 有利区間リセット後EX LFO MODE突入は設定変更時を除外するため、朝一恩恵へ混同しない。

## missingFields
- 設定変更時のモードA/B/C/天国の具体的振り分け
- 設定変更時250WAVE以内AT当選の専用具体率
- 本機固有リールガックン条件/発生率

## sources
取得日: 2026-09-14

### official / industry
- サミー マイスロ新機種告知: https://new.sammy.co.jp/japanese/myslot/news/
- 遊技日本/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/26942/nippon
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/26970/yugitsushin
- グリーンべると検定通過: https://news.p-world.co.jp/articles/26844/greenbelt
- グリーンべると機種発表: https://web-greenbelt.jp/post-80772/

### machine DB / analysis
- HAZUSE: https://hazuse.com/machine/pachislot/3S1577/
- P-WORLD: https://www.p-world.co.jp/machine/database/10011
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2611/2
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83161/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/741/21206/
- なな徹 天井: https://nana-press.com/kaiseki/machine/741/21204/
- なな徹 モード: https://nana-press.com/kaiseki/machine/741/21208/
- 一撃 天井・リセット: https://1geki.jp/slot/l_eureka4/3/
- パチセブン: https://pachiseven.jp/machines_v2/6934
- マルっとWAVE: https://marutto-w.com/shindai_reference/leurekaeven4_hi-evolution

## researchNotes
- 「スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION」「エウレカ4」「Lエウレカセブン4 HIEVO KX」「銀座」「サミー」を使い分けて検索。
- resetBehavior欠損は「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井短縮」「モード」「ガックン」「有利区間」「250WAVE」「超高確」を組み替えて再探索。
- 2023年のA+ART機「パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART」および後発別機種を混入していない。
- 実機完全再現用の小役全抽選、AT内部の詳細振り分けは収集対象外。
