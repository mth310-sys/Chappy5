# タイムレスキューS

machineName: タイムレスキューS
manufacturer: 山佐
formalModelName: タイムレスキュー
approvalNumber: 9S0739
releaseDate: 2009-11-01（HAZUSE導入開始日 / グリーンべると納品開始予定） / 2009-11上旬（当時K-Navi）
generation: 5号機
systemType: ノーマル / BIG+REG / 天井非搭載
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

### P-WORLD / 後年判別DB系列

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 97.8% |
| 3 | 99.4% |
| 4 | 102.9% |
| 5 | 106.3% |
| 6 | 111.5% |

### P_Style777系列

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.4% |
| 2 | 97.7% |
| 3 | 99.3% |
| 4 | 102.8% |
| 5 | 106.2% |
| 6 | 109.7% |

### 旧パチマガシミュレート値

| 設定 | PAYOUT |
|---:|---:|
| 1 | 95.60% |
| 2 | 96.83% |
| 3 | 98.45% |
| 4 | 101.86% |
| 5 | 105.40% |
| 6 | 109.10% |

- 設定1〜5は系列差が小さい箇所もあるが、設定6で111.5 / 109.7 / 109.10%と明確に分かれる。
- 算出条件差を直接確定できないため平均せずCONFLICTとして全系列を保持。

confidence: CONFLICT_MULTISOURCE_NO_AVERAGING

## initialHitBySetting

| 設定 | BIG合算 | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/364.09 | 1/520.13 | 1/214.17 |
| 2 | 1/344.93 | 1/564.97 | 1/214.17 |
| 3 | 1/327.68 | 1/618.26 | 1/214.17 |
| 4 | 1/289.98 | 1/819.20 | 1/214.17 |
| 5 | 1/295.21 | 1/455.11 | 1/179.06 |
| 6 | 1/284.94 | 1/409.60 | 1/168.04 |

- 旧パチマガ精密値。P-WORLD/HAZUSE/P_Style777の丸め値と整合。
- BIGは青S-BIG・赤S-BIG・赤N-BIGの合算。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

| 設定 | 50枚あたり |
|---:|---:|
| 1 | 38.02G |
| 2 | 38.32G |
| 3 | 38.93G |
| 4 | 39.86G |
| 5 | 41.23G |
| 6 | 43.06G |

- パチマガスロマガ旧解析「1000円あたりのゲーム数」の直接値。推定計算なし。

confidence: ANALYSIS_OLD_MAJOR_DIRECT

## netIncrease

- NOT_APPLICABLE。ART/AT/RTによる継続純増はない。
- 兄弟機タイムレスキュー777のみ天井RT搭載であり、Sへ混同しない。

## basicPayout

- SUPER BIG: フリー打ち平均約398枚 / 最大402枚。
- NORMAL BIG: フリー打ち平均約302枚 / 最大307枚。
- REG: フリー打ち平均約98枚 / 最大103枚。
- P-WORLDでは払い出し終了条件449枚超 / 314枚超 / 104枚超も確認。

confidence: OFFICIAL_ARCHIVE + INDUSTRY_CONTEMPORARY + ANALYSIS_MULTISOURCE

## modeSpecificMinimumData

- 6段階設定（1〜6）。
- ノーマルAタイプ。ボーナスのみで出玉を増やす。
- 通常時4ステージは演出ステージであり、ゲーム数解除用の長期モード管理ではない。
- 天井機能はSには非搭載。HAZUSE・P_Style777・当時グリーンべると・後年回顧で777のみ天井RTと一致。
- 小役取りこぼし等に応じて2択チェリーナビが出やすくなる補正機能はあるが、朝一リセットモードとは分離。

confidence: OFFICIAL + INDUSTRY_CONTEMPORARY + ANALYSIS_MULTISOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_VISIBLE_STATE**。本機は通常ゲーム数天井、RT/ART/AT/CZ、ゲーム数解除モードを持たないため、それらのリセット処理は非該当。設定変更時の液晶初期ステージ、初期出目、内部演出履歴など本機固有の直接記載は十分な再探索後も確定できず。

carryOverBehavior: **NO_CEILING_OR_LONG_TERM_MODE_TO_CARRY / OTHER_VISIBLE_STATE_UNVERIFIED**。据え置きで保持対象となる天井G数やART/ATストックは存在しない。液晶ステージ等の電断跨ぎ挙動は直接資料未確認。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の液晶ステージ、初期出目、補正機能内部履歴等を本機固有資料で直接確定できず。

gameCounterReset: NOT_APPLICABLE_FOR_CEILING_COUNTER。通常ゲーム数天井非搭載。

ceilingAfterReset: NOT_APPLICABLE。通常天井・リセット短縮天井とも非搭載。

modeAfterReset: NOT_APPLICABLE_FOR_GAME_NUMBER_RELEASE_MODE。通常4ステージは演出ステージ。

stateAfterReset: NOT_APPLICABLE_FOR_RT_ART_AT_CZ_STATE / OTHER_INTERNAL_PRESENTATION_STATE_UNVERIFIED。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。旧パチマガの「攻め時・ヤメ時」は「特にナシ」。朝一専用当選率・短縮天井・専用高確/CZ等も確認されない。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶初期ステージ、ランプ等による設定変更/据え置き判別を本機固有の直接資料で確定できず。通常時/ボーナス中の設定推測要素は変更判別とは分離。

numericResetData:
  normalCeiling: NOT_APPLICABLE
  resetSpecificCeiling: NOT_APPLICABLE
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NOT_APPLICABLE
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_NO_CEILING_OR_MODE_CONFIRMED_POWER_CYCLE_AND_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 表記揺れ `タイムレスキューS / タイムレスキューＳ / タイムレスキュー / 山佐 / 9S0739` を使用。
- `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / RT / ガックン / 初期出目 / ステージ` を組み替えて再探索。
- 山佐現行アーカイブ、2009年当時グリーンべると/K-Navi、P-WORLD、HAZUSE、P_Style777、パチマガスロマガ旧解析、後年回顧まで横断。
- 天井非搭載は複数系統で高信頼確認。設定変更/単純電断/変更判別の本機固有直接本文は回収できなかったため推測しない。

## conflicts

- payoutRate: P-WORLD系列 **96.5 / 97.8 / 99.4 / 102.9 / 106.3 / 111.5%**、P_Style777 **96.4 / 97.7 / 99.3 / 102.8 / 106.2 / 109.7%**、旧パチマガシミュレート **95.60 / 96.83 / 98.45 / 101.86 / 105.40 / 109.10%** が不一致。平均せず全系列保持。
- releaseDateDefinition: HAZUSEは **2009-11-01導入開始**、当時グリーンべるとは777/Sとも **2009-11-01納品開始予定**、K-Naviは **11月上旬導入予定**。2009-11-01を具体日主値として保持。

## missingFields

- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- machineSpecificVisibleStateAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
- publishedMorningNumericRates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. 山佐ネクスト「機種情報：タイムレスキュー」 — https://yamasa-next.co.jp/model_tmr/ — 5号機、稼働時期2009年11月、S/777の2タイプ、S-BIG最大402枚/N-BIG最大307枚 — reliability: MANUFACTURER_OFFICIAL_ARCHIVE
2. グリーンべると「7歳になったウィンちゃんが大活躍」2009-10-14 — https://news.p-world.co.jp/articles/3643/greenbelt — 777/S同時発表、11/1納品予定、S合算1/214.1〜1/168.0、Sは天井RTなし、平均/最大獲得枚数 — reliability: INDUSTRY_CONTEMPORARY
3. K-Navi「大好きなウィンちゃんにまた逢える!」2009-09-30 — https://p-kn.com/topics/news/885/ — S/777同時登場、Sは当たりやすさ重視、11月上旬導入予定 — reliability: INDUSTRY_CONTEMPORARY
4. P-WORLD「タイムレスキューS」 — https://www.p-world.co.jp/machine/database/5720 — 山佐、型式タイムレスキュー、検定9S0739、ノーマル、合算、機械割96.5〜111.5%、最大獲得枚数 — reliability: INDUSTRY_DATABASE
5. HAZUSE「タイムレスキューS」 — https://hazuse.com/machine/pachislot/9S0739/ — 導入開始2009-11-01、型式、検定、Sには天井なし、各ボーナス確率 — reliability: ANALYSIS_DATABASE
6. P_Style777「タイムレスキューS」 — https://ps777.net/data/yamasa/timerescue_s.htm — 各ボーナス確率、機械割96.4〜109.7%、S天井なし、平均/最大獲得枚数 — reliability: ANALYSIS_OLD_WEB
7. パチマガスロマガ旧解析「ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/168/h.php — BIG/REG/合算精密値、シミュレートPAYOUT95.60〜109.10% — reliability: ANALYSIS_OLD_MAJOR
8. パチマガスロマガ旧解析「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/168/c.php — 1000円あたり38.02 / 38.32 / 38.93 / 39.86 / 41.23 / 43.06G — reliability: ANALYSIS_OLD_MAJOR
9. パチマガスロマガ旧解析TOP — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/168/yamasa_slot_168.php — 攻め時・ヤメ時「特にナシ」 — reliability: ANALYSIS_OLD_MAJOR
10. PachiSeven回顧記事 — https://pachiseven.jp/articles/detail/18910 — Sは天井救済なし、777は777G天井救済ありという後年回顧 — reliability: RETROSPECTIVE_INDUSTRY_MEDIA
