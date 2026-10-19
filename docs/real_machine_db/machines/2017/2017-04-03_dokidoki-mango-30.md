machineName: ドキドキマンゴー-30
manufacturer: パイオニア
releaseDate: 2017-04-03
recordNumber: 1062
generation: 5号機
systemType: ノーマルA / 完全告知 / 30φ / BIG+MID+REG
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パイオニア公式更新履歴で `ドキドキマンゴー/ドキドキマンゴー-30` の**全国稼働開始を2017-04-03**と確認。
- 2017-02-08のパチビー展示会記事は「2017-04-03から導入予定。※30パイバージョンは2017-03-21から導入予定」と記載し、当時業界ブログも「4月上旬から、沖縄は3月下旬」とする。
- 本DBは全国導入を時系列本線の基準にするため releaseDate は2017-04-03をcanonicalとし、3/21は30φ地域先行/予定情報として分離保持する。
- K-Naviもホール導入開始を2017-04-03とする。
- 型式名・検定番号は `ドキドキマンゴー / ドキドキマンゴー30 / ドキドキマンゴー-30 / パイオニア / 型式 / 検定 / 30φ` 等で再探索したが、今回直接固定できる高信頼資料を取得できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: OFFICIAL_FOR_NATIONWIDE_RELEASE_DATE; INDUSTRY/ANALYSIS_HIGH_FOR_VARIANT_AND_SPECS

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98% |
| 2 | 99% |
| 3 | 100% |
| 4 | 103% |
| 5 | 106% |
| 6 | 110% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | MID | REG | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/278 | 1/1260 | 1/840 | 1/179 |
| 2 | 1/275 | 1/1129 | 1/840 | 1/175 |
| 3 | 1/270 | 1/1057 | 1/829 | 1/171 |
| 4 | 1/259 | 1/923 | 1/809 | 1/161 |
| 5 | 1/245 | 1/809 | 1/799 | 1/152 |
| 6 | 1/232 | 1/762 | 1/753 | 1/144 |
- K-Naviと当時業界資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約35G/50枚。
- 当時業界資料の30φスペック表から取得。
reliability: INDUSTRY_SECONDARY

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE。

## basicPayout
- BIG BONUS: 純増最大300枚。
- MID BONUS: 純増最大200枚。
- REG BONUS: 純増最大100枚。
- パイオニア展示会記事、K-Navi、P-WORLDで一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

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
- `ドキドキマンゴー30 / ドキドキマンゴー-30 / パイオニア` と `リセット / 設定変更 / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / ハイビスカス / ランプ` を組み替えて再探索。
- 本機固有の確定的なガックン、初期出目、ランプ状態による設定変更/据え置き判別契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 他のパイオニア機一般論から本機へ転記しない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_DETERMINISTIC_DETECTION

### numericResetData
- resetShortenedCeiling: NOT_APPLICABLE
- resetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
- resetHighStateStartRate: NONE_CONFIRMED_AFTER_RESEARCH
- resetSpecificEarlyHitRate: NONE_CONFIRMED_AFTER_RESEARCH

## dataQualityNotes
- 2017-03-21は30φの先行/予定情報として当時資料に残る一方、パイオニア公式は2017-04-03に25φ/30φ双方の全国稼働開始を告知。時系列本線では公式全国稼働日を採用した。
- K-Naviも30φの導入開始を2017-04-03とするため全国導入日と整合。
- 30φと25φはボーナス確率が異なるため、本DBでは別スペックとして独立レコード対象とする。
- P-WORLDの30φ MID設定6欄は検索結果表示上欠落していたが、K-Naviと当時業界資料が1/762で一致するためcanonicalは1/762。

## conflicts
- `RELEASE_DATE_SCOPE_DIFFERENCE`: 2017-03-21（30φ先行/予定） vs 2017-04-03（メーカー公式全国稼働開始、K-Navi導入開始）。定義差として分離し、全国時系列canonical=2017-04-03。

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- machine-specific deterministic reset detection: NONE_CONFIRMED_AFTER_RESEARCH
- 実機完全再現用の小役同時当選詳細: SCOPE_EXCLUDED

## sources
retrievedDate: 2026-09-09
- OFFICIAL / パイオニア 更新履歴（2017-04-03 全国稼働開始）: https://www.slot-pioneer.co.jp/news.html
- OFFICIAL / パイオニア「ドキドキマンゴー-30 発売のお知らせ」: https://www.slot-pioneer.co.jp/information/dokidoki_mango_30.html
- INDUSTRY / パチビー展示会記事: https://www.pachibee.jp/pparticles/view/924
- ANALYSIS / K-Navi ドキドキマンゴー30: https://p-kn.com/slot/2731/
- MACHINE_DB / P-WORLD ドキドキマンゴー-30: https://www.p-world.co.jp/machine/database/8302
- CONTEMPORARY_SECONDARY / スロスター 30φスペック・ベース・地域納品時期: https://ameblo.jp/slostar/
- RETROSPECTIVE / パチ7「ドキドキマンゴー」と「LASTEXILE銀翼のファム」を考える: https://pachiseven.jp/articles/detail/3333
