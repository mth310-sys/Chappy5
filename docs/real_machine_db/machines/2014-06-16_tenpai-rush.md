# テンパイラッシュ

machineName: テンパイラッシュ
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: パイオニア
releaseDate: 2014-06-16
releaseDatePrecision: exact_start
generation: 5号機
systemType: ノーマル / BIG+REG / 25Φ
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- パイオニア公式2014年製品一覧で **2014年6月発売**を確認。
- グリーンべると2014-05-14記事では5月8日内覧会、**6月15日納品予定**。
- パチ7はホール導入日を **2014-06-16** と記録。本DBのreleaseDateはホール導入開始として2014-06-16を採用。
- 25φ・ノーマルAタイプ。AT/ART等の付加機能は非搭載。
- 型式名・検定番号は `テンパイラッシュ / パイオニア / 型式 / 検定 / 4S0 / 4S1` 等へ検索語を変えて再探索したが、今回安全に固定できる資料を取得できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97% |
| 2 | 99% |
| 3 | 101% |
| 4 | 103% |
| 5 | 106% |
| 6 | 110% |

- pacnkとP-WORLDで一致。グリーンべるとも設定1 97%～設定6 110%と一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY

## initialHitBySetting

### BIG

| 設定 | BIG |
|---:|---:|
| 1 | 1/289 |
| 2 | 1/280 |
| 3 | 1/270 |
| 4 | 1/261 |
| 5 | 1/250 |
| 6 | 1/239 |

### REG

| 設定 | REG |
|---:|---:|
| 1 | 1/504 |
| 2 | 1/461 |
| 3 | 1/420 |
| 4 | 1/378 |
| 5 | 1/337 |
| 6 | 1/295 |

### ボーナス合算

| 設定 | 合算 |
|---:|---:|
| 1 | 1/184 |
| 2 | 1/174 |
| 3 | 1/164 |
| 4 | 1/154 |
| 5 | 1/143 |
| 6 | 1/132 |

- BIG/REGはpacnk、BIG/合算はP-WORLD、設定1/6レンジはグリーンべるとで照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約38～39G / 50枚**。
- パチマガスロマガ旧攻略の「50枚あたりのゲーム数」で確認。
- confidence: ANALYSIS_HIGH_PERIOD_SOURCE

## netIncrease

- NOT_APPLICABLE_NORMAL_TYPE。
- AT/ART非搭載のノーマルタイプであり、純増/Gは物差し項目として非該当。

## basicPayout

- BIG: **約300枚**（346枚を超える払い出しで終了）。
- REG: **約100枚**（109枚を超える払い出しで終了）。
- パイオニア系旧攻略・P-WORLD・グリーンべるとで一致。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマル機。
- レバーON時の「スロー / シェイク / リバース / アタック」等のリールアクション、赤7連続テンパイで期待度を積み上げるゲーム性。
- ボーナス成立時はコーナーランプ点灯等で告知。
- 完全再現用の小役重複率・演出振り分けは収集対象外。

## ceiling

- **NOT_APPLICABLE / NO_CEILING_CONFIRMED**。
- P-WORLD・pacnk・パチマガスロマガ等で通常時天井機能は確認されず、ノーマルボーナス機として扱う。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機固有の「設定変更時にゲーム数・モード・状態がどう変化するか」を示す直接資料は **UNVERIFIED_AFTER_RESEARCH**。
- ただし本機は通常時ゲーム数天井・AT/ART/CZの出玉管理モードを持たないノーマルボーナス機であり、それらのリセット恩恵項目自体は非該当。
- 設定変更操作そのものがリール初期位置・告知状態等へ与える本機固有契約は推測補完しない。

### carryOverBehavior

- 通常時天井ゲーム数・AT/ARTモード等は **NOT_APPLICABLE**。
- 据え置き時の本機固有リール初動、成立済みボーナス等の電断跨ぎ挙動を直接固定できる公開資料は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なし電源OFF→ON時の本機固有リール初動・成立済みボーナス等の扱いは **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機ノーマル機の挙動からは補完しない。

### gameCounterReset

- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- **NOT_APPLICABLE_NO_AT_ART_CZ_GAME_MODE_CONFIRMED**。
- 朝一専用モード・リセット専用ゾーン: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- ホール経営/朝一客AIへ影響する本機固有の設定変更時内部高確・状態振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時の天井短縮・朝一高確・専用モード等の主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更固有の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- `テンパイラッシュ / 朝一 / 設定変更 / リセット / 据え置き / 電源OFF ON / ガックン / リールガックン` を組み替えて再探索したが、本機固有の信頼できる変更判別契約は **UNVERIFIED_AFTER_RESEARCH**。
- 本機は演出としてスロー・シェイク・リバース等の特殊リールアクションを通常ゲーム性に持つため、それらを朝一設定変更判別と混同しない。

### numericResetData

- 公開朝一専用数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

- `テンパイラッシュ / パイオニア / 2014 / 型式名 / 検定番号` に加え、`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 短縮 / モード / 状態 / ガックン / リールガックン / 50枚 / 1000円` を組み合わせて探索。
- パイオニア公式、グリーンべると、P-WORLD、パチマガスロマガ旧攻略、パチ7、pacnk、中古実機資料を横断。
- 特殊リールアクションは通常演出であり、設定変更検知の「ガックン」とは別概念として扱った。
- ノーマル機で非該当となる項目を、他機種の一般論で埋めていない。

## sources

取得日: **2026-09-07**

- パイオニア公式 2014年製品一覧: https://www.slot-pioneer.co.jp/products/2014.html
- パイオニア公式 テンパイラッシュ: https://www.slot-pioneer.co.jp/product/tenpairush/
- グリーンべると（2014-05-14）: https://web-greenbelt.jp/00006883/
- P-WORLD: https://www.p-world.co.jp/machine/database/7413
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/110/a.php
- パチマガスロマガ 小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/110/c.php
- pacnk: https://pacnk.com/slot/2014/tenpairush/top.php
- パチ7（導入日/ボーナス情報等）: https://pachiseven.jp/machines/4141/cutout/3
- パチ7（導入日/初期投資）: https://pachiseven.jp/machines/4141/cutout/92
- 中古実機資料: https://www.pachislowasshoi.jp/SHOP/paionia-slot0007.html

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior固有のリール/成立ボーナス処理: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior固有のリール/成立ボーナス処理: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior固有のリール/成立ボーナス処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- NONE_CONFIRMED。
