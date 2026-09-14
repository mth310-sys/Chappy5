# L島娘

recordNo: 1704
machineName: L島娘
aliases: スマスロ島娘 / 島娘（スマスロ）
manufacturer: オリンピア（製造） / 平和（販売・ブランド）
formalModel: L島娘L2
inspectionCode: 430580
releaseDate: 2025-01-20
generation: 6.5号機 / スマスロ / AT
systemType: 沖スロ系・擬似ボーナスAT / モードシナリオ管理
settings: 1 / 2 / 3 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技日本の検定通過記事で型式 `L島娘L2`（オリンピア）を確認。
- HAZUSEで検定番号 `430580`、型式 `L島娘L2`、導入開始日2025-01-20を確認。
- 複数の解析・機種DBでも2025-01-20導入で一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 99.0%
- setting3: 102.9%
- setting5: 107.6%
- setting6: 112.0%
initialHitBySetting:
- setting1: 1/197.3
- setting2: 1/193.2
- setting3: 1/181.1
- setting5: 1/164.4
- setting6: 1/153.2
baseGamesPer50: 約28.3G/50枚
netIncrease:
- BIG連モード: 約2.7枚/G
- 花笠モード: 約5.0枚/G
basicPayout:
- REGULAR BONUS: 約28枚
- BIG BONUS: 約200枚
- シーサーBIG BONUS: 約200枚
- BAR BIG BONUS: 約200枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時のゲーム数天井は最大500G+α。チャンスモードは最大150G。
- REG最大15回連続当選でBIG準備モードへ移行し、次回ボーナスはBIG濃厚。
- BIG連モードのトータルループ率は約82%、花笠モードは約91%。
- 通常時モードはシナリオテーブルで管理され、設定変更時は上位シナリオ選択率が優遇される。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_TABLE_AND_PARTIAL_POWER_CYCLE_DIRECTNESS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間をRESET。
- 天井進行をRESET。
- 内部モードをRESETし、モードシナリオを再抽選。
- 上位モード（高確に滞在しやすい）シナリオの選択率がアップ。
- 初回BIG当選まで、規定ゲーム数350G側の選択率が大幅に優遇される。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC_RESET_PAGE + MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間・天井進行・内部モードを引き継ぐ。
- REGスルー回数/シナリオ進行についても据え置き側は引継ぎとする解析が複数で一致。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- ちょんぼりすたの設定変更/電源OFF→ON比較表では、純電断時は天井と内部状態を引き継ぐ。
- 後発解析でも電源OFF→ONは天井引継ぎと一致。
- 純電断時の「有利区間」「REGスルー回数」「モードシナリオ」をそれぞれ独立項目として直接明記した高信頼表は今回の再探索で固定できず、一般仕様から補完しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_INTERNAL_STATE / UNVERIFIED_DIRECT_WORDING_FOR_OTHER_FIELDS

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: 天井進行CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: 最大500G+α
chanceModeCeiling: 150G
resetCeilingBehavior: 初回BIG当選まで最大350G側の選択率が高確率で優遇
regThroughCeiling: REG最大15スルー後の次回ボーナスでBIG濃厚
- なな徹は「設定変更時、初回BIG当選までゲーム数天井が高確率で最大350Gに短縮」と明記。
- 1gekiは「BIG連モード突入まで規定ゲーム数350Gの選択率が大幅アップ」と記載。対象終点の表現が異なるため、完全固定天井ではなく350G側への大幅優遇として保存する。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_WITH_WORDING_DIFFERENCE

### modeAfterReset
- 設定変更時は内部モード/シナリオを再抽選し、上位シナリオ選択率がアップ。
- 据え置きでは内部モードを引き継ぐ。
- 具体的な設定変更時シナリオ別選択率は、機種名・型式・メーカー・「朝一/リセット/シナリオ/モード振り分け」へ検索語を変更し主要解析を横断しても固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更: RESET / 再抽選扱い。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: 内部状態CARRY_OVERを直接比較表で確認。
- 状態別の設定変更時具体振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- なな徹の機種別朝一ページで直接確認。
- 純電源OFF→ONだけを独立条件とした有利区間の直接記述は再探索後も固定できず `UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_FOR_PURE_POWER_CYCLE

### resetBenefits
- 初回BIG当選まで規定ゲーム数350G側の選択率が大幅アップ / 高確率で最大350G短縮。
- 上位モードシナリオ選択率アップ。
- 朝一設定変更狙いとして複数主要解析で明示される強い恩恵。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 据え置きで保持される天井進行・内部モード・REGスルー/シナリオ進行は設定変更で初期化されるため、有利な進行を失う可能性がある。
- 数値化された設定変更固有の不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- なな徹の機種別ページではリセット判別は「現在調査中」。
- 350G側への朝一優遇は推測材料になるが、設定変更確定演出としては扱わない。
- 本機固有ガックン条件・発生率は `L島娘` / `L島娘L2` / `島娘 スマスロ` / オリンピア / 平和と「ガックン/設定変更/リセット/朝一」を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CONFIRMED_DIRECT_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCeiling: 最大500G+α
chanceModeCeiling: 150G
reset350GBehavior: 初回BIG当選まで350G側選択率が高確率/大幅アップ
upperScenarioSelectionRateAfterReset: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
regThroughCeiling: 15スルー後の次回BIG濃厚
gakkun: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 高信頼主要解析で固定できる数値: 通常最大500G、設定変更時は初回BIG当選まで最大350G短縮に高確率で期待。
- 後発単一解析には「350～395G帯選択率 約70%」の記載があるが、主要解析の「最大350G」とレンジ表現が整合しないためcanonical数値には採用せず、下記CONFLICTとして保持。

## conflicts
- `CONFLICT_RESET_350G_WORDING_SCOPE`: なな徹は「初回BIG当選まで高確率で最大350Gに短縮」、1gekiは「BIG連モード突入まで規定350G選択率が大幅アップ」と対象終点の表現が異なる。朝一350G側優遇というコア挙動は一致するため、固定天井ではなく優遇挙動としてcanonical化。
- `CONFLICT_LATE_SOURCE_350_395G_70PCT_VS_MAX350`: 後発スロベースは「350～395G帯選択率約70%」とする一方、なな徹等は最大350G短縮と記載。定義/カウンタ差の説明が確認できないため約70%をcanonical公開朝一数値として採用しない。
- `CONFLICT_PACHIMAGA_SETTING_COUNT_LABEL`: パチマガスロマガの基本表には設定1/2/3/5/6の数値が並ぶ一方、本文ラベルに「設定1・2・5・6の4段階設定」という不整合がある。なな徹・1geki・複数DBで1/2/3/5/6の5段階が一致するため5段階をcanonicalとする。

## missingFields
- 設定変更時のシナリオ別具体選択率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の内部状態別具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電断時の有利区間/REGスルー/シナリオそれぞれの独立直接記述: UNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- INDUSTRY_MODEL: https://yugi-nippon.com/pachinko-new-machine/post-67863/
- ANALYSIS_MODEL_CODE_INSPECTION: https://hazuse.com/hd/430580-2/
- ANALYSIS_HIGH_CORE: https://nana-press.com/kaiseki/machine/901/26311/
- ANALYSIS_HIGH_CORE_CROSSCHECK: https://1geki.jp/slot/l_shimamusume/
- ANALYSIS_HIGH_CORE_PACHIMAGA: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/157/kh01.php
- ANALYSIS_HIGH_BONUS: https://www.pachibee.jp/machines/index/224120003
- ANALYSIS_HIGH_RESET_DIRECT: https://nana-press.com/kaiseki/machine/901/26989/
- ANALYSIS_HIGH_RESET_TARGETING: https://nana-press.com/kaiseki/machine/901/26987/
- ANALYSIS_HIGH_CEILING: https://nana-press.com/kaiseki/machine/901/26986/
- ANALYSIS_HIGH_RESET_CROSSCHECK: https://1geki.jp/slot/l_shimamusume/3/
- ANALYSIS_HIGH_POWER_CYCLE: https://chonborista.com/slot/orinpia-slot/227902/
- ANALYSIS_HIGH_MODE: https://hisshobon.com/machineinfo/85822/
- ANALYSIS_SINGLE_LATE_RESET_RATE: https://slobase.jp/articles/shima-musume-reset
