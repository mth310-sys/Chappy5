# スマート沖スロ ドラゴンハナハナ～閃光～

recordNo: 1635
machineName: スマート沖スロ ドラゴンハナハナ～閃光～
aliases: スマート沖スロ ドラゴンハナハナ 閃光 / Lドラゴンハナハナ～閃光～ / ドラハナ閃光 スマスロ
manufacturer: ピーセカンド（製造元） / パイオニア（販売・ブランド）
formalModel: Lドラゴンハナハナ～閃光～JP
inspectionCode: 3S1450
releaseDate: 2024-03-18
generation: 6号機 / スマスロ
systemType: ノーマルAタイプ / ボーナス主体 / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- Amusement Japan、グリーンべると/P-WORLDが2024-03-18ホール導入予定を掲載。
- HAZUSE機種DBも導入開始日2024-03-18と掲載。
- ゼンリンは納品開始日2024-03-17（地域差あり）としており、営業開始日と納品日を分離し、本DBではホール導入開始の2024-03-18をcanonical releaseDateとする。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本/P-WORLD、P-BOMBが製造元ピーセカンド、型式 `Lドラゴンハナハナ～閃光～JP` を明記。
- HAZUSEが同型式と検定番号 `3S1450` を掲載。
- 2023-12導入の `ドラゴンハナハナ～閃光～-30`、2024-03導入のメダル25φ `ドラゴンハナハナ～閃光～` と性能は共通だが、本機は別型式のスマスロ版なので独立レコードとする。
confidence: INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.0%
- setting2: 99.0%
- setting3: 101.0%
- setting4: 104.0%
- setting5: 107.0%
- setting6: 110.0%
initialHitBySetting:
- setting1: ボーナス合算 1/183
- setting2: ボーナス合算 1/173
- setting3: ボーナス合算 1/163
- setting4: ボーナス合算 1/153
- setting5: ボーナス合算 1/143
- setting6: ボーナス合算 1/133
bonusProbabilityBySetting:
- setting1: BIG 1/256 / REG 1/642
- setting2: BIG 1/246 / REG 1/585
- setting3: BIG 1/235 / REG 1/537
- setting4: BIG 1/224 / REG 1/489
- setting5: BIG 1/212 / REG 1/442
- setting6: BIG 1/199 / REG 1/399
baseGamesPer50: 約39.9G/50枚（全設定共通掲載）
netIncrease: N/A（ノーマルAタイプ）
basicPayout:
- BIG: 最大252枚
- REG: 最大96枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- ハイビスカスが光ればボーナス濃厚となる完全告知型ノーマルAタイプ。
- 天井は非搭載。
- AT/CZ、ゲーム数天井、通常/天国モードを主要初当たり構造として使用しない。
- スマスロ版ではメダル版と共通スペックを踏襲しつつ、メダルレス筐体・音量調整機能など筐体側仕様が異なる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_POWER_CARRYOVER_GACKUN_BGM_AND_ADVANTAGEOUS_SECTION_CONTRACT
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 本機はノーマルAタイプで、設定変更専用の短縮天井・朝一AT/CZモード・規定周期は N/A。
- P-WORLDはコンプリート機能の打ち止め状態について、設定変更で解除されることを明記。
- 設定変更時のBGM変化条件・リールガックンについて、スマスロ版本機の必勝本資料では2024-03-13時点で「現在調査中」。後年も機種固有の高信頼確定値を固定できず、推測補完しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_STRUCTURE / INDUSTRY_FOR_COMPLETE_FUNCTION_RESET / UNVERIFIED_AFTER_RESEARCH_FOR_GACKUN_AND_BGM

### carryOverBehavior
- ゲーム数天井・AT/CZモード・規定周期がないため、朝一狙いに関わるそれらの据え置き引継ぎは N/A。
- ボーナス間ゲーム数を用いた内部天井は非搭載。
- 据え置き時のBGM継続条件・リール初動などの機種固有判別契約は、スマスロ版専用の高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE_CYCLE / UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_DETECTION

### powerCycleBehavior
- 電源OFF→ONのみで引き継ぐゲーム数天井・AT/CZモード・規定周期は N/A。
- 必勝本のスマスロ版本機専用資料では、電源OFF/ON時のBGM変化条件・リールガックンはいずれも「現在調査中」。検索語・資料系統を変えて再探索しても確定契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: NOT_APPLICABLE_FOR_CEILING_MODE_CYCLE / UNVERIFIED_AFTER_RESEARCH_FOR_BGM_GACKUN_AND_DISPLAY

### gameCounterReset
- 天井非搭載のため、内部天井ゲーム数のRESET/CARRY_OVER契約は N/A。
- 外部データカウンターの営業上のリセットは実機内部性能ではないため本DB対象外。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 天井非搭載。
- 設定変更専用の短縮天井なし / N/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一狙いに関わる通常/天国モード、AT/CZモードの搭載を確認せず、本DBのresetBehavior粒度では N/A。
- 設定変更専用モード振り分け数値なし / N/A。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### stateAfterReset
- AT/CZ用の通常時内部状態や朝一高確移行など、ホール経営/朝一客AIへ影響する設定変更専用状態は公開資料で確認されないため N/A at mission granularity。
- ボーナス成立中など実機完全再現向けの細かな内部状態はミッション対象外。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### advantageousSectionReset
- スマスロであることは確認できるが、本機固有の設定変更/据え置き/純電源OFF→ON別の有利区間RESET/CARRY_OVER契約を直接固定できる公開資料は、機種名・正式型式・メーカー名と「有利区間 / リセット / 設定変更 / 据え置き / 電源OFF ON」を組み合わせて再探索しても確認できず `UNVERIFIED_AFTER_RESEARCH`。
- ノーマルAタイプというゲーム性だけから内部契約を推測しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 天井短縮、朝一専用AT/CZモード、規定G数優遇等の固定リセット恩恵は構造上 N/A。
- コンプリート機能で打ち止め状態になっている場合は設定変更で解除されるが、通常営業の朝一出玉優遇とは別概念として分離する。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY / INDUSTRY_FOR_COMPLETE_FUNCTION_RESET

### resetPenalties
- 設定変更専用の主要な不利要素、朝一ペナルティの公開情報は確認されない。
confidence: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### resetDetection
- スマスロ版本機について、パチ&スロ必勝本は設定変更時/電源OFF→ON時ともBGM変化条件・リールガックンを「現在調査中」と掲載。
- 同スペックのメダル版については後年の二次整理資料にBGM・フェザーランプ等の変更推測情報があるが、筐体・型式が異なるスマスロ版へ自動転記しない。
- `スマート沖スロ ドラゴンハナハナ～閃光～ / Lドラゴンハナハナ～閃光～JP / ピーセカンド / パイオニア` × `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / BGM / フェザーランプ / 有利区間` で再探索後も、本機固有の確定条件・発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため宵越し天井による設定変更判別は N/A。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_GACKUN_BGM_AND_DISPLAY / NOT_APPLICABLE_FOR_CEILING_DETECTION

### numericResetData
- 設定変更時短縮天井: N/A（天井非搭載）
- 設定変更時モード振り分け: N/A
- 朝一特定G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / 専用値を確認せず
- 設定変更専用CZ/AT数値: N/A（CZ/AT非搭載）
- 本機固有ガックン発生率: UNVERIFIED_AFTER_RESEARCH
- 本機固有BGM変更判別率: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更時の当選率・短縮天井・専用モード等、比較可能な朝一専用固定数値は確認されない。
- 通常の設定別BIG/REG/合算は性能コアに保持し、朝一専用値とは混同しない。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電源OFF→ON別のBGM継続・変更契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時のランプ/表示/リール挙動: UNVERIFIED_AFTER_RESEARCH
- 有利区間の設定変更/据え置き/純電断別直接契約: UNVERIFIED_AFTER_RESEARCH

## conflicts
- HAZUSE機種ページのメーカー表記に `バイオニア` とあるが、メーカー公式系・業界一次資料は一貫してパイオニア、製造元ピーセカンドとしているため、単純な表記誤りと判断しcanonical manufacturerへ採用しない。
- 2023-12導入30φ版、2024-03導入25φメダル版、本スマスロ版は性能値が共通だが型式・筐体・導入時期が異なる。resetBehavior、とくにガックン/BGM等の筐体依存情報は混在させない。

## sources
取得日: 2026-09-14

### 型式・導入・性能コア
- 遊技日本 / P-WORLD（型式・製造元・スペック）: https://news.p-world.co.jp/articles/26825/nippon
- 遊技日本 / P-WORLD（公式機種サイト公開）: https://news.p-world.co.jp/articles/26778/nippon
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004107/
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/26792/greenbelt
- P-BOMB: https://p-bomb.co.jp/industry/new-machine/8716/
- ゼンリン: https://zenrin-net.co.jp/9618/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1450/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9998
- 一撃 オンライン遊技説明: https://1geki.jp/slot/l_drahana_senko/39/
- パチ&スロ必勝本 ボーナス解説: https://hisshobon.com/machineinfo/83061/
- ぽこすろっと（同シリーズ比較補助）: https://www.nankaikoya.jp/dragon-hanahana-senko/
- ジャグラーズネット（メダル版性能照合補助）: https://jugglersnet.com/analysis-hana/dragon-hanahana-senko

### resetBehavior
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83057/
- P-WORLD機種DB（天井・コンプリート機能の設定変更解除）: https://www.p-world.co.jp/machine/database/9998
- ちょんぼりすた スマスロ版機種ページ: https://chonborista.com/slot/pionia-slot/208458/

## researchNotes
- スマスロ版本機はメダル版と基本性能が共通だが、リセット判別情報は筐体依存の可能性があるため、スマスロ専用資料で確定できないガックン/BGM情報をメダル版から転記しない。
- 必勝本の2024-03-13時点では設定変更/電源OFF→ONのBGM変化条件・リールガックンが調査中。後年検索でも高信頼な機種固有確定資料を固定できなかった。
