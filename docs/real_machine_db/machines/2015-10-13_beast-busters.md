# ビーストバスターズ

machineName: ビーストバスターズ
manufacturer: SNKプレイモア
releaseDate: 2015-10-13
releaseDatePrecision: exact_hall_start_day_multi_source_with_conflicting_secondary_10_05
 generation: 5号機
systemType: A+ART / 自力継続型ART + CZ
formalModelName: ビーストバスターズAE
inspectionNumber: 5S0596
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEは型式名 **ビーストバスターズAE**、検定番号 **5S0596**、導入開始日 **2015-10-13** を掲載。
- パチビーも導入日 **2015-10-13**。2-9伝説の2015-10-08記事も **10月13日導入予定** と明記。
- 一方、ちょんぼりすた/すろぱちくえすとの古い記事には **2015-10-05** 表記が残る。平均・推定で統合せず、exact hall startは複数の具体日資料が一致する2015-10-13をcanonical、10-05を `RELEASE_DATE_CONFLICT_SECONDARY` として保持。
- SNKプレイモア公式製品アーカイブで本機の製品存在を確認。2015-08-17プレス発表、業界記事は納品を10月中旬予定としており10-13と整合。
- confidence: OFFICIAL_EXISTENCE + INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.2% |
| 3 | 100.9% |
| 4 | 105.8% |
| 5 | 110.6% |
| 6 | 114.8% |
- HAZUSE、ちょんぼりすた、楽スロで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/527.7 |
| 2 | 1/505.2 |
| 3 | 1/457.0 |
| 4 | 1/401.3 |
| 5 | 1/347.5 |
| 6 | 1/299.4 |
- HAZUSE精密値をcanonical。ちょんぼりすた/楽スロの丸め値 1/528, 1/505, 1/457, 1/401, 1/348, 1/299 と整合。
- ボーナス合算: **1/249.1 / 234.9 / 239.1 / 211.4 / 213.4 / 199.2**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約30G/50枚**。
- HAZUSE、ちょんぼりすた、2-9伝説で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ビーストラッシュ」: **約1.4枚/G**。
- SNKプレイモア発表を扱ったPiDEA X/グリーンべると、パチマガスロマガ、パチビー、P-WORLDで一致。
- ボーナス込みのART中増加を約2.0枚/Gとする解析表記もあるが、通常のART純増1.4枚/Gとは定義を分離。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ビーストボーナス（青7）: **純増304枚**（407枚超払い出しで終了）。
- バスターズボーナス（赤7）: **純増200枚**（264枚超払い出しで終了）。
- エクストラショック（BAR）: **純増108枚**（121枚超払い出しで終了）。
- REG: **純増48枚**（6回入賞または6Gで終了）。
- ART「ビーストラッシュ」: **1セット7G+α**、初回31G保証。継続率 **89〜99%**。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はビーストカウンター999体撃破ごとにバレット獲得＋CZ抽選。
- バレット **12個獲得でART確定**。解析上の到達目安は **約1200G**だが、固定ゲーム数天井ではなくバレット蓄積型の実質天井として扱う。
- CZ「ブレイクチャンス」: 10G、ART期待度約35%。上位CZ「ブレイクチャンスアサルト」は約73%。
- 有利区間制度導入前。
- 通常時の全抽選・バレット獲得詳細は実機完全再現用のため収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 2-9伝説の当時解析は **「設定変更で天井G数リセット」** と明記。
- 本機の天井はバレット12個（約1200G目安）でART確定する蓄積型。したがって、前日の天井進捗を設定変更後へそのまま宵越しできる機種としては扱わない。
- ただし「表示バレット個数」「途中のビーストカウンター値」「内部的な高確状態」の各要素を設定変更時に個別にどう初期化するかを直接列挙した本機固有資料は、表記揺れ/型式名/メーカー名を含めた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 2-9伝説の天井一覧で本機は **宵×（設定変更で天井G数リセット）** に分類される。同一覧は純電源OFFでリセットされる機種を別記号「宵××」で区別しており、本機はその分類ではない。
- よって設定変更をしない据え置きでは天井進捗を宵越し対象にできることを `CARRYOVER_SUPPORTED_BY_YOI_CLASSIFICATION` として保持。
- バレット/ビーストカウンター/高確状態それぞれの独立した据え置き契約は直接資料不足のため `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ONだけの比較表を本機固有で直接確認できなかった。
- 2-9伝説が「設定変更リセット」と「電源OFFリセット」を別分類し、本機を前者のみへ置いているため、天井進捗の純電断引継ぎは **CARRYOVER_SUPPORTED_INDIRECT_CLASSIFICATION**。
- 直接比較資料ではないため `ANALYSIS_SUPPORTING`, not DIRECT とする。

### gameCounterReset
- 設定変更: **RESET**（天井進捗）。
- 据え置き: **CARRYOVER_SUPPORTED**。
- 純電源OFF→ON: **CARRYOVER_SUPPORTED_INDIRECT**。
- 本機は固定G数天井ではなくバレット蓄積天井なので、「ゲーム数カウンタ」と「バレット進捗」を同一の数値カウンタとしては扱わない。

### ceilingAfterReset
- 設定変更後の天井進捗はリセット。
- 通常天井条件そのものは **バレット12個獲得（約1200G目安）でART確定**。
- 設定変更専用の固定短縮天井、朝一専用バレット個数、朝一専用ゲーム数天井は、再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset
- 本DBで比較すべき「通常A/B/天国」等のゲーム数モード、および設定変更専用モード振り分けは本機で公開確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- ART継続中の内部状態やCZ抽選詳細を朝一モードとして誤用しない。

### stateAfterReset
- 通常時に高確示唆ステージ等は存在するが、設定変更時の低確/高確等の再抽選・引継ぎ契約は、`ビーストバスターズ / ビーストバスターズAE / SNKプレイモア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / バレット / ビーストカウンター` を組み替えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の短縮天井、専用モード優遇、朝一CZ/ART当選率優遇などの公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 前日の天井進捗は設定変更で消失するため、バレット蓄積天井を狙う客にとっては宵越し価値が失われる。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、ステージ等で設定変更/据え置きを確定または高信頼推測できる公開契約は、検索語・資料系統変更後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- 設定変更時天井進捗: **RESET**。
- 通常天井: **バレット12個（解析上約1200G目安）**。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用モード振り分け/朝一当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- `RELEASE_DATE_CONFLICT_SECONDARY`: HAZUSE/パチビー/2-9伝説/複数整理資料は **2015-10-13**。一方、ちょんぼりすた/すろぱちくえすとには **2015-10-05** 表記が残る。業界発表は「10月中旬納品予定」。本DBのexact hall startは具体日資料の一致数と10月中旬との整合から2015-10-13をcanonicalとするが、10-05を削除せず競合として保持。
- `ART_LOOP_RATE_PRESENTATION`: PiDEA Xの業界記事には89〜98%、グリーンべると/パチマガスロマガ等には89〜99%。性能コアの継続率は多数資料側89〜99%を採用し、98%表記は競合注記。

## missingFields
- setting-change treatment of each visible bullet count / partial beast counter component: `UNVERIFIED_AFTER_RESEARCH`。
- pure power-cycle direct comparison table: `UNVERIFIED_AFTER_RESEARCH; INDIRECT_CARRYOVER_SUPPORT_EXISTS`。
- setting-change internal high/low-state reselection: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific reset detection cue: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-08
- SNKプレイモア公式製品アーカイブ: https://slot.snk-corp.co.jp/
- PiDEA X 発表会: https://www.pidea.jp/articles/SNK%E3%80%8C%E3%83%93%E3%83%BC%E3%82%B9%E3%83%88%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%E3%80%8D%E5%B0%82%E7%94%A8%E7%AD%90%E4%BD%93%E3%81%A7%E7%99%BB%E5%A0%B4
- グリーンべると / P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/7727/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/5S0596/
- パチビー: https://www.pachibee.jp/movies/index/12113
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/51/a.php
- パチマガスロマガ ARTフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/51/l.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7821
- ちょんぼりすた: https://chonborista.com/slot/snk/11910/
- 2-9伝説 個別天井解析: https://2-9densetsu.com/beastbasters/
- 2-9伝説 天井・宵越し一覧: https://2-9densetsu.com/blog-entry-311-html/
- 楽スロ: https://rakuslo.com/beastbusters-bonus.html
- パチマ中古実機（型式照合）: https://www.pachima.com/c/slot/s_28sonota/S00239

## confidence
- exactReleaseDate: CONFLICT_WITH_CANONICAL_ANALYSIS_HIGH_MULTI_SOURCE_2015_10_13
- officialExistence: OFFICIAL
- formalModelName: ANALYSIS_HIGH_MULTI_SOURCE
- inspectionNumber: ANALYSIS_HIGH
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE
- initialHit: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeCeilingProgressReset: ANALYSIS_HIGH_DIRECT_STATEMENT
- carryOverBehavior: ANALYSIS_SUPPORTING_YOI_CLASSIFICATION
- purePowerCycleBehavior: ANALYSIS_SUPPORTING_INDIRECT_NOT_DIRECT
- resetModeNumericData: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
