# 桃太郎電鉄 ～パチスロも定番！～

recordNo: 1691
machineName: 桃太郎電鉄 ～パチスロも定番！～
aliases: 桃鉄 / L桃太郎電鉄 / スマスロ桃太郎電鉄 / L桃太郎電鉄定番PU
manufacturer: KPE製造 / コナミアミューズメント
formalModel: L桃太郎電鉄定番PU
inspectionCode: 4S1052
releaseDate: 2024-12-02
generation: 6.5号機 / スマスロ
systemType: AT / CZ・差枚数管理AT + 上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- コナミアミューズメント公式はKPE株式会社製造、2024-12-02稼働予定を明記。
- HAZUSEは型式 `L桃太郎電鉄定番PU`、検定番号 `4S1052`、導入開始日2024-12-02を掲載。
- ゼンリン業界向け情報でも型式名と2024年12月納品を確認。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.9%
- setting3: 100.3%
- setting4: 105.3%
- setting5: 108.2%
- setting6: 111.2%
initialHitBySetting:
- setting1: 定番チャンス 1/183.3 / 電鉄ボーナス 1/425.5
- setting2: 定番チャンス 1/179.6 / 電鉄ボーナス 1/416.3
- setting3: 定番チャンス 1/175.6 / 電鉄ボーナス 1/406.0
- setting4: 定番チャンス 1/163.2 / 電鉄ボーナス 1/379.6
- setting5: 定番チャンス 1/159.5 / 電鉄ボーナス 1/371.1
- setting6: 定番チャンス 1/153.2 / 電鉄ボーナス 1/357.8
baseGamesPer50: 33.7G/50枚
netIncrease: 電鉄ボーナス 約2.5枚/G / 黄金列車ボーナス 約4.0枚/G
basicPayout:
- 電鉄ボーナス: 初期150枚 / 差枚数管理
- 黄金列車ボーナス: 初期150枚 / 純増約4.0枚/G / 75%ループ
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は桃鉄型の年数進行で定番チャンスを目指す。
- 通常年数天井: 最大3年、約720Gで定番チャンス。
- 定番チャンススルー天井: 最大6スルー、次回定番チャンス成功で電鉄ボーナス。
- 上位AT「黄金列車ボーナス」は純増約4.0枚/G、75%ループ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GAKKUN_AND_STAGE_AFTER_POWER_CYCLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、天井、内部状態、資産、キングボンビーの金庫ポイントをリセット。
- 年数天井は通常最大3年から最大2年へ短縮。
- 定番チャンススルー天井は通常最大6スルーから最大2スルーへ短縮し、3回目の定番チャンス当選で電鉄ボーナス突入。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは設定変更が行われないため、天井進行・内部状態・資産・キングボンビー金庫ポイント・有利区間を内部的に継続する契約として扱う。
- 朝一実戦上、内部の社長位置と画面上の位置がずれることで通常と異なるサイコロ演出が出ない場合があり、据え置き推測材料とされる。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_CARRY / ANALYSIS_SINGLE_FOR_VISUAL_DETECTION

### powerCycleBehavior
- 純電源OFF→ONでは有利区間、天井、内部状態、資産、キングボンビーの金庫ポイントを引き継ぐ。
- ステージの設定変更時/純電断時挙動は主要解析でも調査中で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CARRY / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: 年数天井進行をリセットし、朝一専用短縮契約へ移行。
- 据え置き: 内部進行を引き継ぐ。
- 純電源OFF→ON: 天井進行を引き継ぐ。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalYearCeiling: 最大3年 / 約720G
resetYearCeiling: 最大2年 / 平均約480G
resetFirstYearHitExpectation: 約25%
resetSecondYearHitExpectation: 当選濃厚
normalTeibanChanceMissCeiling: 最大6スルー
resetTeibanChanceMissCeiling: 最大2スルー / 3回目の定番チャンスで電鉄ボーナス
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/Bのような独立名称モードの朝一振り分けは本機の主要公開契約として確認されない。
- 朝一は年数天井最大2年、定番チャンススルー最大2回という専用短縮契約を持つ。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 内部状態リセット。
- 据え置き: 内部状態引き継ぎ。
- 純電源OFF→ON: 内部状態引き継ぎ。
- 設定変更時の具体的な状態初期振り分け率は検索語・資料系統を変えた再探索でも固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRY / UNVERIFIED_FOR_DISTRIBUTION

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き: 有利区間引き継ぎ。
- 純電源OFF→ON: 有利区間引き継ぎ。
confidence: ANALYSIS_HIGH

### resetBenefits
- 年数天井が最大3年→最大2年へ短縮。
- 設定変更後1年目（約240G）での当選期待度は約25%、2年目（平均約480G）で当選濃厚。
- 定番チャンススルー天井が最大6回→最大2回へ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の天井進行、内部状態、資産、キングボンビー金庫ポイント等の蓄積は設定変更で消失。
- 朝一専用の追加的不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 実戦上、据え置きでは内部の社長位置と実画面上の位置のズレにより、朝一に通常なら出るサイコロを振る演出等が発生しないケースが据え置き濃厚材料とされる。ただし実戦ベースの推測情報で、確定判別扱いにはしない。
- リセット時は最大2年、最大2スルー契約のため、それを超える挙動は据え置き推測材料。
- `桃太郎電鉄 ～パチスロも定番！～` / `L桃太郎電鉄定番PU` / KPE / KONAMI と「ガックン・設定変更・リセット・朝一・据え置き・電源OFF ON」を組み替えて再探索したが、本機固有ガックン発生条件・発生率は高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / ANALYSIS_SINGLE_FOR_POSITION_VISUAL / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalYearCeiling: 3年 / 約720G
resetYearCeiling: 2年 / 平均約480G
resetOneYearHitExpectation: 約25%
resetTwoYearHitExpectation: 当選濃厚
normalTeibanChanceMissCeiling: 6スルー
resetTeibanChanceMissCeiling: 2スルー
settingChangeAdvantageousSection: RESET
powerCycleAdvantageousSection: CARRY_OVER
settingChangeInternalState: RESET
powerCycleInternalState: CARRY_OVER
settingChangeAssets: RESET
powerCycleAssets: CARRY_OVER
settingChangeKingBombiiSafePoints: RESET
powerCycleKingBombiiSafePoints: CARRY_OVER
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- リセット時年数天井: 最大2年。
- 1年目（約240G）当選期待度: 約25%。
- 2年目（平均約480G）: 当選濃厚。
- リセット時定番チャンススルー天井: 最大2スルー。

## conflicts
- 設定4機械割はP-WORLD、なな徹、必勝本、ちょんぼりすた、パチマガスロマガ等の主要解析が `105.3%` で一致。一方、マルっとWAVEのみ `106.4%` と掲載。平均化せず `CONFLICT_105.3_VS_106.4` とし、canonical性能値は複数高信頼一致の105.3%を採用。
- 設定3電鉄ボーナスは主要解析複数が `1/406.0`、パチマガスロマガのみ `1/406.6`。平均化せず `CONFLICT_406.0_VS_406.6` として保持し、canonicalは複数一致の1/406.0を採用。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の具体的内部状態初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時/純電源OFF→ON時の開始ステージ差: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- OFFICIAL: https://www.konami.com/amusement/corporate/ja/topics/20240920mt/
- OFFICIAL: https://www.konami.com/amusement/psm/slot/momotetsu/
- INDUSTRY: https://zenrin-net.co.jp/10190/
- INDUSTRY: https://news.p-world.co.jp/articles/29173/greenbelt
- ANALYSIS_HIGH: https://hazuse.com/hd/4s1052/
- ANALYSIS_HIGH: https://hazuse.com/machine/pachislot/4S1052/
- ANALYSIS_HIGH: https://www.p-world.co.jp/machine/database/10128
- ANALYSIS_HIGH: https://nana-press.com/kaiseki/machine/827/24604/
- ANALYSIS_HIGH: https://p.hisshobon.jp/machine/4392/1/105973
- ANALYSIS_HIGH: https://1geki.jp/slot/l_momotetsu/3/
- ANALYSIS_HIGH: https://chonborista.com/slot/konami-slot/221958/
- ANALYSIS_HIGH: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/28/kh02.php
- CONFLICT_SOURCE: https://marutto-w.com/industry_news/20241202-4
