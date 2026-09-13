# キングクリエーター30

recordNo: 1631
machineName: キングクリエーター30
aliases: キングクリエーター-30 / Sキングクリエーター30 / キンクリ30
manufacturer: 北電子
formalModel: SキングクリエーターSK-30
inspectionCode: 3S1561
releaseDate: 2024-03-04
generation: 6.5号機 / 30Φメダル機
systemType: ノーマル / Aタイプ / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 北電子発表を扱う遊技日本・遊技通信系資料、北電子公式、P-WORLD、必勝本で2024-03-04導入が一致。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 北電子公式検定情報で `SキングクリエーターSK-30` を確認。
- P-WORLD/HAZUSE系機種情報で検定番号 `3S1561` を確認。
- 先行試験段階に `SキングクリエーターKD-30` の検定通過情報も存在するが、市場導入機の正式型式は北電子公式の `SK-30` をcanonicalとし、別型式履歴を混同しない。
confidence: OFFICIAL_FOR_MODEL / ANALYSIS_HIGH_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting1: 97.2%
- setting2: 98.6%
- setting3: 100.5%
- setting4: 103.2%
- setting5: 106.0%
- setting6: 109.0%
initialHitBySetting:
- setting1: BIG 1/259.0 / REG 1/474.9 / 合算 1/167.6
- setting2: BIG 1/256.0 / REG 1/442.8 / 合算 1/162.2
- setting3: BIG 1/248.2 / REG 1/414.8 / 合算 1/155.3
- setting4: BIG 1/237.4 / REG 1/381.0 / 合算 1/146.3
- setting5: BIG 1/226.8 / REG 1/346.8 / 合算 1/137.1
- setting6: BIG 1/217.0 / REG 1/321.3 / 合算 1/129.5
baseGamesPer50: 約39～40G/50枚
netIncrease: NOT_APPLICABLE（リアルボーナス主体ノーマルタイプ）
basicPayout:
- BIG: 約252枚
- REG: 約100枚
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- リアルBIG/REGのみで出玉を増やす30Φノーマルタイプ。
- 天井非搭載。
- AT/ART/CZ、通常時モード、規定ゲーム数管理なし。
- ドル袋ランプの完全告知。告知タイミングは先告知約70%、次ゲーム告知約26%、後告知約4%と主要解析で整理されるが、物差し上は補助情報。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_UI_PERSISTENCE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- ノーマルタイプで天井・規定ゲーム数・通常時モード・AT/CZ状態を搭載しないため、これらの朝一RESET項目は `NOT_APPLICABLE`。
- 設定変更そのものによる朝一専用モード、天井短縮、初当たり優遇の公開情報は、表記揺れ・正式型式・メーカー名を変え、北電子公式/主要解析/旧攻略系まで再探索しても確認できない。
- 告知モード等のUI選択状態が設定変更で初期化されるかは機種固有資料で固定できず、性能上のresetBehaviorには推測補完しない。
confidence: OFFICIAL_AND_ANALYSIS_HIGH_FOR_SYSTEM_ARCHITECTURE / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_SPECIAL_RESET_BENEFIT

### carryOverBehavior
- 据え置きで引き継ぐ天井ゲーム数・通常時モード・CZ/ATスルー回数等は非搭載のため `NOT_APPLICABLE`。
- 通常遊技のボーナス確率は設定に依存し、前日ゲーム数に依存する朝一蓄積要素は確認されない。
confidence: OFFICIAL / ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONで引き継ぐ天井・規定G・通常モード・有利区間進行は非搭載のため `NOT_APPLICABLE`。
- プレイヤーが選択した告知モード等のUI状態が電断後に保持されるかは主要資料で直接契約を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NON_APPLICABLE_GAMEPLAY_CARRY_OVER / UNVERIFIED_FOR_UI_PERSISTENCE

### gameCounterReset
- ゲーム数天井非搭載。
- 設定変更/据え置き/純電断で引継ぎ価値を持つ内部天井カウンタは `NOT_APPLICABLE`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 天井非搭載のため `NOT_APPLICABLE`。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 通常時の内部モード管理を確認しないノーマルタイプのため `NOT_APPLICABLE`。
- 3種類の告知モードは演出選択UIであり、朝一内部モードとは区別する。
confidence: OFFICIAL / ANALYSIS_HIGH

### stateAfterReset
- AT/CZ用の通常/高確/超高確等、朝一狙いに関係する独立内部状態は公開ゲーム性上 `NOT_APPLICABLE`。
- 成立済みボーナスを跨ぐ特殊な閉店/電断運用等は本DBの朝一設定変更粒度では扱わない。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 本機はリアルボーナス主体のノーマルタイプで、朝一客行動に関係する有利区間進行・有利区間天井を使用しないため本項目は `NOT_APPLICABLE` とする。
confidence: SYSTEM_TYPE_CONFIRMED

### resetBenefits
- 設定変更専用の天井短縮・モード優遇・CZ優遇・朝一固定恩恵は確認できず。
- 朝一性能は基本的に設定別BIG/REG確率で評価する。
confidence: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / SYSTEM_TYPE_CONFIRMED

### resetPenalties
- 設定変更によって消失する天井進行・モード・AT/CZスルー等は非搭載。
- 設定変更専用の公開マイナス要素/数値は確認できず。
confidence: NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### resetDetection
- 本機固有ガックン条件/発生率は `キングクリエーター30 / キングクリエーター-30 / SキングクリエーターSK-30 / SキングクリエーターKD-30 / 北電子` × `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール` で検索語を変えて再探索したが、北電子公式・主要解析・当時記事で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井/内部モードがないため、朝一G数挙動から変更を判別する機種固有ロジックはない。
- 告知モード初期位置等を使った確定判別は資料不足のため採用しない。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_GACKUN_AND_UI / ANALYSIS_HIGH_FOR_NO_COUNTER_BASED_DETECTION

### numericResetData
- 設定変更専用モード振り分け: NOT_APPLICABLE。
- リセット天井: NOT_APPLICABLE。
- リセット恩恵発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NO_MAJOR_RESET_BENEFIT_IDENTIFIED。

### publicMorningNumbers
- 朝一専用の固定公開数値は確認できず。
- 天井・モード非搭載のため、朝一専用数値が存在しないこと自体が物差し上の主要特性。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 告知モード等UI選択状態の設定変更/純電断時復帰契約: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 型式について市場導入機は北電子公式 `SキングクリエーターSK-30`。一部先行資料に `SキングクリエーターKD-30` が存在するため別型式履歴として保持し、同一型式へ平均/統合しない。
- 性能コアのBIG/REG/機械割は北電子公式・遊技日本・なな徹・必勝本で一致し、主要CONFLICTなし。

## sources
取得日: 2026-09-14

### 公式/業界・型式/導入
- 北電子公式製品情報: https://www.kitadenshi.co.jp/slot/kingcreator30/
- 北電子公式検定情報 `SキングクリエーターSK-30`: https://www.kitadenshi.co.jp/slot-kentei/kingcreator30/
- 遊技日本 — キングクリエーター30発表: https://yugi-nippon.com/pachinko-new-machine/post-62756/
- 長崎県遊技業協同組合（遊技通信転載）: https://nagasaki-yukyo.or.jp/information/30%CF%86-a%E3%82%BF%E3%82%A4%E3%83%97%E6%9C%80%E9%AB%98%E5%B3%B0%E3%81%AEbb%E5%81%8F%E5%90%91%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E3%80%8C%E3%82%AD%E3%83%B3%E3%82%B0%E3%82%AF%E3%83%AA%E3%82%A8/
- P-WORLD: https://www.p-world.co.jp/machine/database/9995

### 性能コア
- なな徹 — ボーナス確率/機械割/50枚ベース: https://nana-press.com/kaiseki/machine/706/19160/
- 必勝本 — 基本スペック: https://p.hisshobon.jp/machine/4260/1/100618
- 必勝本 — ボーナス解説: https://hisshobon.com/machineinfo/83005/
- 必勝本 — 通常時解説: https://p.hisshobon.jp/machine/4260/1/101383

### 天井/resetBehavior再探索補助
- スロリスクタイム機種別天井一覧（キングクリエーター30: 天井非搭載）: https://pachisuro100.com/tenjyo/
- ぱちんこキュレーション（KD-30/SK-30先行型式履歴）: https://pachinko-curation.com/45308/

## qaNotes
- ノーマルAタイプのため、スマスロAT機のような有利区間/天井/モードの朝一恩恵を他機種から流用しない。
- 「ガックンしそう」「北電子だからジャグラーと同じ」等の一般論は機種固有根拠にならないため採用しない。
