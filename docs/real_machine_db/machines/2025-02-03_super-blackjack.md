# スマスロ スーパーブラックジャック

recordNo: 1707
machineName: スマスロ スーパーブラックジャック
aliases: スーパーブラックジャック / SBJ / スマスロ リオ
manufacturer: セブンリーグ（製造） / 山佐ネクスト（販売・ブランド）
formalModel: LスーパーブラックジャックSLDC
inspectionCode: 4S1230
releaseDate: 2025-02-03
generation: 6.5号機 / スマスロ / AT
systemType: 擬似ボーナス + リオチャンス + ストックタイムAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEで型式 `LスーパーブラックジャックSLDC`、検定番号 `4S1230`、導入開始日2025-02-03、メーカーSEVEN LEAGUEを確認。
- 1gekiでも型式 `LスーパーブラックジャックSLDC`、検定番号 `4S1230`、導入開始日2025-02-03で一致。
- Amusement Japan / P-WORLDおよび日刊スポーツの業界発表で、山佐ネクスト発表・セブンリーグ製造、2025年2月上旬導入を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 98.7%
- setting3: 100.1%
- setting4: 105.7%
- setting5: 110.0%
- setting6: 112.7%
initialHitBySetting:
- setting1: 1/241.7
- setting2: 1/238.8
- setting3: 1/235.9
- setting4: 1/201.8
- setting5: 1/194.9
- setting6: 1/181.3
baseGamesPer50: 約31.4G/50枚（設定1）
netIncrease:
- ストックタイム(ST): 約0.4枚/G
- スーパーストックタイム(SST): 約5.1枚/G
- 擬似ボーナス: 約5.1枚/G
basicPayout:
- 初当り赤7BIG: 払出100枚。RC経由赤7BIGは払出200枚。
- 青7BIG: 払出300枚。
- SUPER BIG: 払出400枚。
- RC経由REG: 払出60枚。
- ST: 50～777G、平均RCストック2個。
- SST: 100G以上、平均RCストック5個。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常ゲーム数天井は999G+αでBIG当選。REGではゲーム数天井をリセットしない。
- 設定変更時はゲーム数天井が666G+αへ短縮。
- REG連続当選にはスルー天井があり、最大4スルー後の次回でBIG濃厚。
- スイカ成立回数にもST当選の規定回数天井があり、設定変更時は50回以下の選択が優遇される。
- 内部状態は通常 / チャイナ / ボーナス高確等。設定変更時に内部状態をリセット、据え置きでは引き継ぐ。
- 有利区間リセット契機は設定変更時とエンディングボーナス終了後など。設定変更以外の有利区間リセット後はジョーカーモードへ移行するが、設定変更時はこの恩恵の対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PUBLIC_RESET_DISTRIBUTION_AND_DIRECT_POWER_CYCLE_TABLE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- ゲーム数天井: RESET。通常999G+αから666G+αへ短縮。
- 内部状態: RESET / 再抽選。
- スイカ規定回数: RESET / 設定変更専用振り分けで再抽選。50回以下が優遇。
- 設定変更後1G目の非有利区間でチャンス目成立時はボーナス高確（JAPANステージ）濃厚。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、ゲーム数天井、内部状態を引き継ぐ。
- なな徹の機種別設定変更/据え置き比較表で直接確認。
- REGではゲーム数天井がリセットされないため、前日進行を含め据え置き時は天井進行を保持する。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### powerCycleBehavior
- 純電源OFF→ON: ゲーム数天井を引き継ぐ。
- 純電源OFF→ON: 内部状態を引き継ぐ。
- Altemaの機種別「設定変更時 / 電源OFF→ON時」比較表で直接確認。
- 有利区間・スイカ規定回数・REGスルー回数について、純電断単独条件を明示した高信頼の直接表記は、機種名/型式/メーカー/シリーズ名と「電源OFF ON・据え置き・朝一・天井・スイカ天井・有利区間」を組み替えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置き契約から推測転記しない。
- 開始ステージは主要解析でも調査中。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_OTHER_PURE_POWER_CYCLE_FIELDS

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
- REG当選ではゲーム数天井進行をリセットしない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 999G+α
resetCeiling: 666G+α
ceilingBenefit: BIGボーナス当選
- なな徹、Altema、ちょんぼりすた、スロベースで短縮値が一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機の朝一について、一般的な通常モード名の専用振り分け表は主要解析では確認できない。
- スイカ規定回数は設定変更時に専用振り分けで再抽選され、全設定共通。
- 設定変更時スイカ規定回数振り分け:
  - 10回: 6.6%
  - 15回: 3.1%
  - 20回: 5.9%
  - 25回: 3.1%
  - 30回: 12.5%
  - 35回: 7.8%
  - 40回: 22.7%
  - 45回: 7.8%
  - 50回: 22.7%
  - 100回: 7.8%
- 50回以下合計: 92.2%。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### stateAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
- 設定変更後1G目の非有利区間でチャンス目成立時はボーナス高確濃厚。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 機種固有の独立した直接記載を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更以外の有利区間リセット後はジョーカーモード突入の恩恵があるが、なな徹は「設定変更時を除く」と明記。朝一設定変更だけでジョーカーモードへ入るとは扱わない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / UNVERIFIED_FOR_PURE_POWER_CYCLE

### resetBenefits
- ゲーム数天井が999G+α → 666G+αへ短縮。
- スイカ規定回数が優遇され、50回以下の選択率92.2%。
- 設定変更後1G目のチャンス目でボーナス高確濃厚。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### resetPenalties
- 据え置きなら保持される天井進行・内部状態・有利区間は設定変更で初期化されるため、前日の進行・有利状態を失う可能性がある。
- 通常の有利区間リセット後に付くジョーカーモード恩恵は設定変更時には適用されない。
- 設定変更固有の数値化された不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- 設定変更後は666G+αがゲーム数天井のため、朝一666G+αを超えて天井が発動しなければ据え置き濃厚材料。
- 前日ヤメG数次第では据え置きでも当日666G付近で天井到達し得るため、G数だけで常に断定はできない。
- 外観だけの設定変更判別は主要解析で「判別できない可能性が高い」とされる。
- 本機固有のリールガックン条件・発生率は、`スマスロ スーパーブラックジャック` / `LスーパーブラックジャックSLDC` / `セブンリーグ` / `山佐ネクスト` と「ガックン・設定変更・リセット・朝一・据え置き・電源OFF ON」を組み替え、主要解析・DB・回顧系まで再探索したが、高信頼の機種固有条件を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般論記事は採用しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 999G+α
resetCeiling: 666G+α
resetSkewerCountDistribution: 10=6.6% / 15=3.1% / 20=5.9% / 25=3.1% / 30=12.5% / 35=7.8% / 40=22.7% / 45=7.8% / 50=22.7% / 100=7.8%
resetSkewerCount50OrLess: 92.2%
reset1GChanceRole: チャンス目成立でボーナス高確濃厚

## conflicts
- corePerformanceの主要値は今回確認した主要解析・業界資料間で有意な競合なし。
- 「赤7BIG」は初当り時100枚、RC経由時200枚で条件が異なる。資料差ではなく契機差として別定義で保持。

## missingFields
- 純電源OFF→ONのみの場合の有利区間・スイカ規定回数・REGスルー回数の直接契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の開始ステージ: UNVERIFIED_AFTER_RESEARCH / 主要解析で調査中
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更固有の数値化された不利率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- HAZUSE 型式/検定/導入/基本: https://hazuse.com/machine/pachislot/4S1230/
- 1geki 型式/検定/解析: https://1geki.jp/slot/l_sbj/
- Amusement Japan 発表: https://amusement-japan.co.jp/article/detail/10004631/
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/29536/amusement
- 日刊スポーツ 業界発表: https://www.nikkansports.com/amusement/pachislot/news/202411250001229.html
- マルっとWAVE 導入日/スペック: https://marutto-w.com/industry_news/20250203
- ちょんぼりすた 基本スペック/天井/ボーナス/AT: https://chonborista.com/slot/yamasa-slot/226245/
- なな徹 朝一・設定変更/スイカ規定回数/有利区間: https://nana-press.com/kaiseki/machine/876/27141/
- なな徹 初当りBIG・REG: https://nana-press.com/kaiseki/machine/876/27146/
- Altema 朝一設定変更/電源OFF→ON比較: https://altema.jp/pachimo/lsbjreset
- Altema 基本スペック: https://altema.jp/pachimo/lsbj
- スロベース 型式/基本/天井: https://slobase.jp/machines/super-blackjack
