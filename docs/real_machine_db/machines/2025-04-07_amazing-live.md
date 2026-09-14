# スマート沖スロ アメイジングライブ

recordNo: 1716
machineName: スマート沖スロ アメイジングライブ
aliases: アメイジングライブ / Lアメイジングライブ / LアメイジングライブPD
manufacturer: パイオニア
formalModel: LアメイジングライブPD
inspectionCode: 4S1425
releaseDate: 2025-04-07
generation: 6.5号機 / スマスロ / AT
systemType: 沖スロ系 擬似ボーナスAT / 天国ループ
settings: 1 / 2 / 4 / 5 / 6 / L
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- パイオニア公式は2025年4月発売・2025-04-07導入開始を告知。
- 遊技日本とG-netが型式 `LアメイジングライブPD` を掲載。
- G-net検定通過情報で検定番号 `4S1425`、検定日2024-12-27を確認。
confidence: OFFICIAL_FOR_RELEASE_MONTH / INDUSTRY_FOR_EXACT_DATE_MODEL_AND_INSPECTION

## corePerformance
payoutRateBySetting:
- setting1: 98.1%（canonical; P-WORLDのみ97.1%表記のためCONFLICT保持）
- setting2: 99.7%
- setting4: 103.6%
- setting5: 106.9%
- setting6: 110.0%
initialHitBySetting:
- setting1: 1/274.0
- setting2: 1/259.6
- setting4: 1/229.3
- setting5: 1/206.9
- setting6: 1/189.9
bonusDetailBySetting:
- setting1: BIG 1/213.0 / REG 1/370.0 / combined 1/135.2
- setting2: BIG 1/202.5 / REG 1/349.5 / combined 1/128.2
- setting4: BIG 1/181.6 / REG 1/310.2 / combined 1/114.5
- setting5: BIG 1/165.7 / REG 1/280.7 canonical / combined 1/104.2
- setting6: BIG 1/153.4 / REG 1/258.0 / combined 1/96.2
baseGamesPer50: 約34G/50枚
netIncrease: 約3.3枚/G
basicPayout:
- BIG: 60G / 約200枚
- REG: 20G / 約66枚
- アメイジングチャンス（AC）: 1セット ベルナビ10回 / 約40枚、最大10セット
- ACEX: ベルナビ100回、BB1G連+天国C、突入から天国抜けまで期待約3500枚（解析値）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_WITH_CONFLICTS_NOTED

## modeSpecificMinimumData
- 通常時最大天井999G+αでボーナス当選。
- 通常時は通常 / 天国高確を軸に推移し、天国高確は天国移行まで通常へ転落しないとする解析。
- 天国A/B/Cは33G以内のボーナス濃厚。公開ループ率は約67% / 約80% / 約90%+α。
- 111G刻みの規定ゲーム数抽選と、周期内レア役回数を用いた周期抽選を持つ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_CHANGE_POWER_TABLE_AND_PUBLIC_RESET_NUMERIC
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- 天井: RESET。通常最大999G+αで、設定変更専用の固定短縮天井は確認できない。
- 内部モード: RESET / 再抽選。
- 内部状態: 再抽選とする必勝本系機種別比較表を確認。
- 周期: RESET。
- 設定変更時は専用抽選ありと1gekiが明記。詳細全振り分けは未公開。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置きは設定変更を伴わないため、天井・内部モード・内部状態・周期・有利区間を継続する扱いをcanonicalとする。
- 純電源OFF→ONの直接比較表で各項目の引継ぎが明記されており、据え置き契約と整合。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE / ANALYSIS_HIGH_INFERRED_FROM_MACHINE_SPECIFIC_RESET_CONTRACT_FOR_CARRY

### powerCycleBehavior
- 純電源OFF→ON: 有利区間、天井、内部モード、内部状態、周期を引き継ぐ。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_MULTI_SOURCE

### gameCounterReset
- 設定変更: 天井ゲーム数をRESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalCeiling: 999G+α
resetCeiling: 999G+α（固定短縮の公開値は確認できず）
ceilingBenefit: ボーナス当選
confidence: ANALYSIS_HIGH_FOR_NORMAL_CEILING / PUBLIC_SHORTENING_NOT_FOUND_AFTER_RESEARCH

### modeAfterReset
- 設定変更: 内部モードRESET / 再抽選。
- 有利区間移行時は約75%で天国モードへ移行し、天国B以上の振り分けが高いとする1geki/複数解析。
- 据え置き・電源OFF→ON: 内部モードCARRY_OVER。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### stateAfterReset
- 設定変更: 内部状態を再抽選。
- 据え置き・電源OFF→ON: 引継ぎ。
confidence: ANALYSIS_HIGH / MACHINE_SPECIFIC_COMPARISON_TABLE

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間移行時は約75%で天国モードへ移行、天国B以上選択率も高いとされる。
confidence: ANALYSIS_HIGH

### resetBenefits
- 有利区間リセット後は約75%で天国モードへ移行。
- その際は天国B以上の振り分けが高い。
- 天国A/B/Cはいずれも33G以内のボーナス濃厚で、公開ループ率は約67% / 80% / 90%+α。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### resetPenalties
- 前日の天井進行・内部モード・内部状態・周期進行を失う。
- 設定変更固有の公開された数値的不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 設定変更後は約75%で天国へ移行するため、朝一33G以内のボーナスはリセット推測材料になり得るが確定判別ではない。
- 設定変更専用の固定短縮天井が確認できないため、深いハマリだけで変更/据え置きを確定する数値境界はない。
- 本機固有ガックン条件・発生率は機種名/型式/メーカー/リセット/据え置き/電源OFF ONを変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_75PCT / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 999G+α
resetFixedShortCeiling: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
advantageousSectionResetToHeaven: 約75%
heavenLoopA: 約67%
heavenLoopB: 約80%
heavenLoopC: 約90%+α

## conflicts
- `CONFLICT_PAYOUT_SETTING1_98_1_VS_97_1`: 必勝本、ちょんぼりすた、すろぱちくえすと、G-net等は設定1機械割98.1%で一致する一方、P-WORLDは97.1%と掲載。複数一致の98.1%をcanonical採用し97.1%も保持。
- `CONFLICT_REG_SETTING5_1_280_7_VS_1_260_7`: 必勝本、P-WORLD、ちょんぼりすた等は設定5 REG 1/280.7、G-net販売概要のみ1/260.7。複数一致の1/280.7をcanonical採用しG-net値を競合保持。

## missingFields
- 設定変更専用の固定短縮天井: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用抽選の75%以外の全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更を客側から確定できる単独表示/ランプ挙動: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- パイオニア公式 2025年製品一覧: https://www.slot-pioneer.co.jp/products/2025.html
- パイオニア公式 更新履歴（2025-04-07導入開始）: https://www.slot-pioneer.co.jp/news.html
- 遊技日本 型式/概要: https://yugi-nippon.com/pachinko-new-machine/post-69270/
- G-net 販売概要: https://g-net-ps.com/info/s0191/
- G-net 検定通過（4S1425）: https://g-net-ps.com/industry/%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E6%83%85%E5%A0%B1%EF%BC%88%E4%BB%A4%E5%92%8C6%E5%B9%B412%E6%9C%8827%E6%97%A5%E5%85%AC%E7%A4%BA%E5%88%86%EF%BC%89/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86167/
- 必勝本 コイン持ち: https://hisshobon.com/machineinfo/86146/
- 必勝本 天井/設定変更比較: https://p.hisshobon.jp/vpage/2691/2
- 1geki 朝一/設定変更: https://1geki.jp/slot/l_amazinglive/3/
- ちょんぼりすた 基本/天井/朝一: https://chonborista.com/slot/pionia-slot/232027/
- すろぱちくえすと 天井/朝一: https://www.slopachi-quest.com/article/amazinglive-tenjou/
- P-WORLD 基本仕様: https://www.p-world.co.jp/machine/database/10215
- パチセブン 天井: https://pachiseven.jp/machines/7120/cutout/3

## researchNotes
- 実機完全再現用の通常時全モード移行、周期ごとの全抽選、AC内部抽選は収集対象外。
- 朝一75%天国はホール経営/朝一客行動へ直接影響するためresetBehaviorの公開数値として採用。
- 設定1機械割と設定5 REGの競合は平均化していない。
