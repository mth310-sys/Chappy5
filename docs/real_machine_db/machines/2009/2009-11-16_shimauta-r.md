# 島唄

machineName: 島唄
manufacturer: オリンピア
formalModelName: 島唄R
approvalNumber: 9S0569
releaseDate: 2009-11-15（グリーンべると納品開始） / 2009-11-16（K-Naviホール導入開始） / 2009-11-17（パチビー導入日） / P-WORLD 2009-11
generation: 5号機
systemType: ボーナス + ART / 完全告知 / 内部5モード / 2種類の天井救済
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 95.6% |
| 2 | 98.2% |
| 3 | 101.3% |
| 4 | 104.7% |
| 5 | 107.5% |
| 6 | 110.2% |

- P-WORLD、K-Navi掲載系列、後年島唄シリーズ整理で一致する系列を採用。

confidence: ANALYSIS_HIGH_MULTISOURCE

## initialHitBySetting

| 設定 | SBB(BAR BIG) | 赤7BIG | BIG合算 | REG | 全ボーナス合算 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/1985.9 | 1/569.9 | 1/442.8 | 1/569.9 | 1/249.2 |
| 2 | 1/1985.9 | 1/555.4 | 1/434.0 | 1/560.1 | 1/244.5 |
| 3 | 1/1985.9 | 1/541.6 | 1/425.6 | 1/550.7 | 1/240.1 |
| 4 | 1/1985.9 | 1/528.5 | 1/417.4 | 1/537.2 | 1/234.9 |
| 5 | 1/1985.9 | 1/520.1 | 1/412.2 | 1/524.3 | 1/230.8 |
| 6 | 1/1985.9 | 1/512.0 | 1/407.1 | 1/512.0 | 1/226.8 |

- P-WORLD丸め値（BIG合算1/443→1/407、REG1/570→1/512、合算1/249→1/227）と整合。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

旧パチマガスロマガの「1000円あたりのゲーム数」（50枚相当）:

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 30.43G |
| 2 | 30.38G |
| 3 | 30.32G |
| 4 | 30.27G |
| 5 | 30.21G |
| 6 | 30.16G |

confidence: ANALYSIS_OLD_MAJOR_DIRECT

## netIncrease

ART「フグRUSH」:
- 1セット35G。
- 純増約+1.5枚/G。
- 継続率は1%および75%〜89.5%の複数段階。
- ストックごとにループ率を持つ「ARTツイン継続システム」。

confidence: INDUSTRY_CONTEMPORARY + ANALYSIS_HIGH_MULTISOURCE

## basicPayout

- SUPER BIG（島唄/BAR）: 約300枚。
- 赤7 BIG: 約204枚。
- REG: 約48枚。
- SBB後はART突入確定。当時業界記事では通常BIGの3〜4回に1回、REGは約20回に1回がART突入目安と説明。

confidence: INDUSTRY_CONTEMPORARY + INDUSTRY_DATABASE

## modeSpecificMinimumData

- 通常時は5種類の内部モード（低確A / 低確B / 高確 / 天国A / 天国B）でART突入期待度を管理。
- 通常時1200G消化で、ボーナス成立まで継続する天井ARTへ突入。
- ボーナス9回連続でART非突入なら、10回目のボーナスでART突入確定。
- ART中ボーナスは追加ストック契機。

confidence: ANALYSIS_HIGH_MULTISOURCE

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL / RESET_ADVANTAGE_EXISTS_BUT_EXACT_PROCESS_UNVERIFIED**。K-Naviの本機攻略INDEXに「設定変更台が狙い目?」専用項目があり、朝イチ特典分類も確認したため、設定変更時に朝一立ち回りへ影響する挙動が存在すること自体は確認。ただし、1200G天井カウンタ、ボーナス非ART回数、内部5モード、ARTストックを設定変更時にどう処理するかの具体本文は今回回収できず、一般的5号機挙動から補完しない。

carryOverBehavior: **K_NAVI_CLASSIFIES_AS_YOIGOSHI_AVAILABLE / EXACT_COMPONENTS_UNVERIFIED**。K-Naviは本機を「宵越アリ」と分類し、「宵越し天井狙い」専用項目も掲載。前日進捗を朝一に利用できる要素は確認したが、1200Gカウンタとボーナス非ART回数の双方が同条件で引き継がれるかは直接本文未回収のため断定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみで、1200G天井進捗、ボーナス非ART回数、内部モード、ARTストックがどう扱われるかを本機固有の直接資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常1200G天井は確定。設定変更時のリセット/引継ぎは直接確定できず。据え置き朝一についてはK-Naviの「宵越アリ」分類のみ確認。

ceilingAfterReset: **NO_RESET_SPECIFIC_SHORTENED_CEILING_VALUE_CONFIRMED_AFTER_RESEARCH**。通常1200G天井と「10回目ボーナスART確定」は確認したが、設定変更専用短縮G数・専用回数天井の公開値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に5モードが存在することは確認。設定変更時の再抽選/引継ぎ、朝一専用モード、振り分け数値は本文回収できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機の主要状態は内部モードとARTストック。設定変更・電源再投入時の具体処理は未確認。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **MORNING_ADVANTAGE_CLASSIFICATION_CONFIRMED / EXACT_BENEFIT_UNVERIFIED**。K-Naviが「朝イチ特典」および「設定変更台が狙い目?」を明示。ただし具体的なモード優遇率・初当たり率・短縮天井値は今回回収できず、数値を推測記載しない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で失われる天井進捗・ARTストック・高モード等を直接確定できなかったため、具体的不利要素は記載しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`島唄 / 島唄R / 島唄R 5号機 / オリンピア / 9S0569` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 1200G / 10回目 / モード / パトランプ / ガックン / 初期出目` を組み替え、公式、当時業界記事、K-Navi、P-WORLD、旧パチマガスロマガ、P_Style777、後年回顧を横断したが、本機固有のガックン・パトランプ・初期出目等による変更判別の確定根拠を回収できず。

numericResetData:
  normalGameCeiling: 1200G -> ART until next bonus
  bonusNonArtCeiling: 9 consecutive non-ART bonuses -> 10th bonus guarantees ART
  settingChangeGameCounter: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_EXACT_SETTING_CHANGE_POWER_CYCLE_COUNTER_MODE_STATE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 最初の検索で欠損判定せず、`島唄R / 島唄 5号機 / 島唄R 9S0569 / オリンピア` と reset関連語を多段再探索。
- 2022年の `S BIG島唄30` や4号機 `NEW島唄` のリセット情報は本機へ転用していない。
- 30φ別型式 `島唄RXH-30` は別スペックとして混同しない。

## conflicts

- 導入日の定義差: グリーンべると納品開始2009-11-15、K-Naviホール導入開始2009-11-16、パチビー導入日2009-11-17。定義を分けて保持。
- 5号機クロニクルの本機節には「ボーナス非搭載」「ART 50G / 約1.7枚/G」等、P-WORLD・当時業界記事・K-Naviと明確に異なる記述が混在するため、別機種/別世代データ混入の可能性が高いものとして性能根拠から除外。平均・統合しない。
- 後年ブログに別の機械割系列（96.0〜109.2%）があるが、P-WORLD/K-Navi系の95.6〜110.2%系列を主値とし、後年単一系列は主値へ混ぜない。

## missingFields

- exact settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- exact powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- exact counters carried over under 据え置き/宵越し: UNVERIFIED_AFTER_RESEARCH
- reset-specific mode distribution: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- published reset-specific numeric benefit rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. オリンピア公式 2009年発売機種 — https://www.olympia.co.jp/official/products/2009.html — 島唄、ART「ふぐRUSH」、ARTツイン継続システム — reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース 2009-10-08 — https://news.p-world.co.jp/articles/3637/greenbelt — 島唄R、純増+1.5枚/G、SBB300枚/BB204枚/RB48枚、ART35G、納品11/15 — reliability: INDUSTRY_CONTEMPORARY
3. K-Navi「島唄」 — https://p-kn.com/slot/1082/ — ホール導入2009-11-16、BIG/REG/合算、ART35G・+1.5枚/G、天井、宵越アリ、朝イチ特典、「設定変更台が狙い目?」項目 — reliability: ANALYSIS_MAJOR_DATABASE
4. K-Navi「内部モード」 — https://p-kn.com/slot/1082/13591/ — 低確A/低確B/高確/天国A/天国Bの5モード — reliability: ANALYSIS_MAJOR_DATABASE
5. P-WORLD「島唄」 — https://www.p-world.co.jp/machine/database/5734 — 型式島唄R、検定9S0569、機械割95.6〜110.2%、設定別ボーナス、SBB300/BB204/REG48枚、1200G天井、10回目ボーナスART確定 — reliability: INDUSTRY_DATABASE
6. パチマガスロマガ旧解析 1000円あたりG数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/87/c.php — 30.43〜30.16G/1000円 — reliability: ANALYSIS_OLD_MAJOR
7. パチマガスロマガ旧解析 機種TOP — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/87/olympia_slot_87.php — 「攻め時・ヤメ時・設定変更時」専用項目存在 — reliability: ANALYSIS_OLD_MAJOR
8. パチビー「島唄R」 — https://www.pachibee.jp/machines/about/209100004 — 導入日2009-11-17、ART35G・+1.5枚/G、内部モード5種 — reliability: ANALYSIS_DATABASE
9. P_Style777「島唄」 — https://ps777.net/data/olympia/simauta5.htm — 型式島唄R、2009年11月、天井あり — reliability: ANALYSIS_RETROSPECTIVE
