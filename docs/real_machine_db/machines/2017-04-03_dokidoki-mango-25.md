machineName: ドキドキマンゴー-25
manufacturer: パイオニア
releaseDate: 2017-04-03
recordNumber: 1063
generation: 5号機
systemType: ノーマルA / 完全告知 / 25φ / BIG+MID+REG
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_BASE_UNVERIFIED

## identity
- K-Naviはホール導入開始を2017-04-03と記載。
- P-WORLDは「ドキドキマンゴー-30」の25φver.で、スペックが若干変更された独立仕様として掲載。
- パイオニア公式更新履歴は2017-04-03に `ドキドキマンゴー/ドキドキマンゴー-30 全国稼働開始` としており、25φ側も同日全国稼働開始と扱う。
- 30φとはBIG/MID/REG確率が異なるため別レコードとする。
- 型式名・検定番号は `ドキドキマンゴー / ドキドキマンゴー25 / ドキドキマンゴー-25 / パイオニア / 型式 / 検定 / 25φ` 等へ検索語を変えて再探索したが、今回直接固定できる高信頼資料を取得できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: OFFICIAL/ANALYSIS_HIGH_FOR_RELEASE_AND_VARIANT; UNVERIFIED_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98% |
| 2 | 99% |
| 3 | 100% |
| 4 | 103% |
| 5 | 106% |
| 6 | 110% |
- K-Navi、P-WORLDで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | MID | REG | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/286 | 1/1213 | 1/712 | 1/174 |
| 2 | 1/282 | 1/1170 | 1/704 | 1/172 |
| 3 | 1/277 | 1/1110 | 1/704 | 1/168 |
| 4 | 1/264 | 1/993 | 1/697 | 1/160 |
| 5 | 1/250 | 1/862 | 1/697 | 1/151 |
| 6 | 1/239 | 1/789 | 1/689 | 1/144 |
- K-Navi、P-WORLD、後年整理資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- `UNVERIFIED_AFTER_RESEARCH`。
- 25φ固有値を `ドキドキマンゴー25 / -25 / 25φ / 50枚 / 1000円 / ベース / コイン持ち` 等で再探索したが、今回直接固定できる資料を取得できなかった。
- 30φについては約35G/50枚の当時資料があるが、25φはボーナス確率が別スペックのため自動転記しない。
reliability: UNVERIFIED_AFTER_RESEARCH

## netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`。

## basicPayout
- BIG BONUS: 純増最大300枚。
- MID BONUS: 純増最大200枚。
- REG BONUS: 純増最大100枚。
- K-Navi、P-WORLDで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- AT/ART/CZ非搭載のノーマルタイプ。
- 通常ゲーム数天井・周期天井は確認されず `NOT_APPLICABLE`。
- マンゴー揃いをボーナス同時当選の主要契機とし、2G連続マンゴー揃いはボーナス濃厚というゲーム性。内部抽選詳細はSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_APPLICABLE_FIELDS_WITH_UNVERIFIED_DETECTION
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ノーマルAタイプで、ゲーム数天井・AT/ART/CZ・ゲーム数モードを持たないため、それらの設定変更リセット契約は `NOT_APPLICABLE`。
- 設定変更時のみ発生する公開朝一高確、短縮天井、専用モード、初当り優遇は再探索後 `NONE_CONFIRMED_AFTER_RESEARCH`。

### carryOverBehavior
- 天井/周期/AT状態の引継ぎ概念は `NOT_APPLICABLE`。
- ボーナス未成立通常時の据え置きで客側朝一行動を変える本機固有公開状態は `NONE_CONFIRMED_AFTER_RESEARCH`。

### powerCycleBehavior
- 天井/周期/AT状態は `NOT_APPLICABLE`。
- 純電源OFF→ONだけで発生する本機固有の公開朝一恩恵/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_MODE`。
- リセット専用モード/公開モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- AT/ART/CZ高確等は `NOT_APPLICABLE`。
- 朝一専用高確状態の公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 公開された設定変更専用の短縮天井・高確スタート・初当り優遇: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `ドキドキマンゴー25 / ドキドキマンゴー-25 / パイオニア` と `リセット / 設定変更 / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ハイビスカス / ランプ` を組み替えて再探索。
- 本機固有の確定的なガックン、初期出目、ランプ状態による設定変更/据え置き判別契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 他のパイオニア機一般論や30φ版から本機へ転記しない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_DETERMINISTIC_DETECTION

### numericResetData
- resetShortenedCeiling: NOT_APPLICABLE
- resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
- resetHighStateStartRate: NONE_CONFIRMED_AFTER_RESEARCH
- resetSpecificEarlyHitRate: NONE_CONFIRMED_AFTER_RESEARCH

## dataQualityNotes
- 25φと30φは機械割系列は同じだが、BIG/MID/REG確率が異なるため独立スペックとして保持。
- 25φ固有のベースは十分な再探索後も固定できず、30φの約35G/50枚を流用していない。

## conflicts
- NONE_CONFIRMED_FOR_CORE_NUMERIC_FIELDS。

## missingFields
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- machine-specific deterministic reset detection: NONE_CONFIRMED_AFTER_RESEARCH
- 実機完全再現用の小役同時当選詳細: SCOPE_EXCLUDED

## sources
retrievedDate: 2026-09-09
- OFFICIAL / パイオニア 更新履歴: https://www.slot-pioneer.co.jp/news.html
- ANALYSIS / K-Navi ドキドキマンゴー25: https://p-kn.com/slot/2730/
- MACHINE_DB / P-WORLD ドキドキマンゴー-25: https://www.p-world.co.jp/machine/database/8301
- SECONDARY_CROSSCHECK / スロパチまとめ ドキドキマンゴー: https://slotblogpachinkoblog.com/dokidokimango/
