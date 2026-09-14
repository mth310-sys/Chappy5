# L少女☆歌劇 レヴュースタァライト -The SLOT-

recordNo: 1713
machineName: L少女☆歌劇 レヴュースタァライト -The SLOT-
aliases: スマスロ レヴュースタァライト / レビュースタァライト
manufacturer: オーイズミ
formalModel: LレヴュースタァライトCX
inspectionCode: 4S1298 / 0611-193
releaseDate: 2025-03-03
generation: 6.5号機 / スマスロ / A+AT
systemType: リアルボーナス + CZ + AT
settings: 1 / 2 / 4 / 5 / 6 / L
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 1gekiは型式 `LレヴュースタァライトCX`、検定番号 `4S1298、0611-193`、2025-03-03導入を掲載。
- オーイズミ発表を扱う業界記事も2025-03-03導入予定を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.8%
- setting4: 104.6%
- setting5: 106.9%
- setting6: 110.0%
initialHitBySetting:
- setting1: 1/359.6
- setting2: 1/346.8
- setting4: 1/277.1
- setting5: 1/255.7
- setting6: 1/232.5
bonusCombinedBySetting:
- setting1: 1/184.8
- setting2: 1/182.2
- setting4: 1/169.9
- setting5: 1/165.4
- setting6: 1/160.6
baseGamesPer50: 約33.7～33.8G/50枚（設定1、資料の丸め差）
netIncrease: AT約2.2枚/G / 再生産モード約3.4枚/G
basicPayout:
- BIG BONUS: 約111枚
- REGULAR BONUS: 通常時約44枚 / AT中約60枚
- AT レヴュースタァライト: 1セット約30G+α
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ボーナス/AT間最大900G+αでAT当選。
- 設定変更後は最大600G+αへ短縮。
- CZ「チャレンジ・レヴュー」は約18G、AT期待度約37%。
- AT中のリアルボーナス成立により性能強化する「貫通型AT」。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_CHANGE_CARRY_DATA_POWER_PARTIAL
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESETとして扱う解析資料あり。
- 天井: RESET。通常900G+α → 600G+αへ短縮。
- 内部状態: RESET。
- 累計CZポイント: ランダム加算抽選あり。
- 設定変更時600G+α天井到達では通常ATではなく上位AT「レヴューデュエット」当選濃厚とする複数解析あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き: 天井・内部状態を引き継ぐ。
- 累計CZポイントも内部的に継続とする解析系統があるが、直接比較表の一意固定は弱いため `ANALYSIS_SINGLE` 扱い。
- 有利区間: CARRY_OVER。
confidence: ANALYSIS_HIGH_FOR_CEILING_STATE / ANALYSIS_SINGLE_FOR_CZ_POINT

### powerCycleBehavior
- 純電源OFF→ONのみについて、機種固有の高信頼な直接比較表を十分再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一部二次資料に「電源OFF→ONで天井/内部状態リセット」とする記載があるが、スマスロの据え置き一般挙動および他資料と整合しないためcanonicalには採用せず、競合資料としてのみ保持。
confidence: UNVERIFIED / CONFLICTING_SECONDARY_SOURCE

### gameCounterReset
- 設定変更: RESETし最大600G+αへ短縮。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: UNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CHANGE_CARRY

### ceilingAfterReset
normalCeiling: 900G+α
resetCeiling: 600G+α
normalCeilingBenefit: AT当選
resetCeilingBenefit: 上位AT「レヴューデュエット」当選濃厚とする複数解析あり
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 明確な通常モード移行テーブルは公開確認できず。
- 設定変更時専用モード振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: UNVERIFIED_AFTER_RESEARCH

### stateAfterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: UNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CHANGE_CARRY

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 設定変更以外の有利区間リセット後は「ロンド・ロンド・ロンドチャレンジ」へ突入し、成功期待度約75%、成功時の50%でポジションゼロモードという恩恵があるが、設定変更時の朝一恩恵として混同しない。
- 純電源OFF→ON: UNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_CHANGE_CARRY_AND_NON_CHANGE_SECTION_BENEFIT

### resetBenefits
- 天井900G+α → 600G+αへ300G短縮。
- 設定変更時は累計CZポイントのランダム加算抽選あり。
- リセット天井到達時は上位AT「レヴューデュエット」当選濃厚とする解析が複数一致。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日の天井進行・内部状態を失う。
- 数値化された設定変更固有の不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 600G+αを超えてボーナス/AT非当選なら据え置き推測材料。
- 朝一ステージは主要解析でも調査中表記が残る。
- 本機固有ガックン条件・発生率は表記揺れ・型式・メーカー・リセット/据え置き/電源OFF ONを組み替え再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 900G+α
resetCeiling: 600G+α
ceilingShortening: 300G
resetCeilingSpecialBenefit: レヴューデュエット当選濃厚（解析複数一致）
resetCZPointRandomAdd: EXISTS / exact distribution PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 50枚ベース: 約33.7G vs 約33.8G。丸め差として併記。
- 純電源OFF→ON挙動: 一部二次資料に天井/内部状態「リセット」とする記載があるが、直接比較の高信頼資料を固定できずcanonical不採用。`CONFLICT_POWER_CYCLE_SECONDARY_ONLY`。

## missingFields
- 設定変更時モード振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 累計CZポイント初期加算分布: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の天井/状態/有利区間: UNVERIFIED_AFTER_RESEARCH
- 朝一ステージ確定契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 1geki 機種概要/型式/検定/スペック: https://1geki.jp/slot/l_revuestarlight/
- 1geki 天井/設定変更: https://1geki.jp/slot/l_revuestarlight/3/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2688/2
- ちょんぼりすた 天井/朝一/有利区間: https://chonborista.com/slot/oizumi-slot/226056/
- Amusement Japan 発表記事: https://amusement-japan.co.jp/article/detail/10004632/
- スロパチクエスト 天井/リセット: https://www.slopachi-quest.com/article/revuestarlight-tenjou/
- 6確 基本スペック/天井整理: https://www.kaku6.jp/slot/revuestarlight/
- Altema 朝一（競合二次資料）: https://altema.jp/pachimo/lstarlightreset

## researchNotes
- 実機完全再現用の通常時全抽選テーブルは対象外。
- 電源OFF→ONは競合する低/中信頼二次資料を無理に採用せず、直接機種固有資料が固定できないためUNVERIFIEDとした。
