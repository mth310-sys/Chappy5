# アイアムコニシキ

machineName: アイアムコニシキ
manufacturer: ゴールドオリンピア / オリンピア
formalModelName: アイアムコニシキX
approvalNumber: 9S0075
releaseDate: 2009-11-15（グリーンべると納品開始予定） / 2009-11-16（K-Naviホール導入開始） / P-WORLD 2009-11
generation: 5号機
systemType: REG主体 + ART / 高確 / 2段階ハマリ救済
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 / PAYOUT |
|---:|---:|
| 1 | 94.9% |
| 2 | 97.0% |
| 3 | 101.5% |
| 4 | 104.8% |
| 5 | 108.5% |
| 6 | 111.6% |

- P-WORLD、パチマガスロマガ旧解析、pacnkで同一系列を確認。

confidence: ANALYSIS_HIGH_MULTISOURCE

## initialHitBySetting

本機のボーナスは実獲得約56枚のREG主体。赤7/青7REGと、ART突入確定のBAR REGがある。

| 設定 | BAR REG | 赤7/青7 REG合成 | 全ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/4681.1 | 1/102.1 | 1/99.9 |
| 2 | 1/3640.9 | 1/101.4 | 1/98.7 |
| 3 | 1/4096.0 | 1/99.9 | 1/97.5 |
| 4 | 1/2978.9 | 1/99.6 | 1/96.4 |
| 5 | 1/3276.8 | 1/98.1 | 1/95.3 |
| 6 | 1/2520.6 | 1/97.8 | 1/94.2 |

- P-WORLDとパチマガスロマガ旧解析で精密値一致。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

パチマガスロマガ旧解析の1000円あたりゲーム数（50枚相当）:

| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 31.4G |
| 2 | 31.4G |
| 3 | 31.5G |
| 4 | 31.6G |
| 5 | 31.7G |
| 6 | 31.9G |

confidence: ANALYSIS_OLD_MAJOR_DIRECT

## netIncrease

ART「巨大化モード」:
- 基本150G。
- 約+1.2枚/G。
- ART中にボーナス成立でART継続。通常150G完走型に加えて、次回ボーナスまで継続する無限ARTもある。
- ART突入後のループ率は約80%と当時業界記事/K-Navi/P-WORLDが説明。

confidence: INDUSTRY_CONTEMPORARY + ANALYSIS_HIGH_MULTISOURCE

## basicPayout

- REG: 約56枚。
- BAR REG後はART突入確定。
- BIGは搭載しないREG主体仕様としてP-WORLD、当時グリーンべると、後年回顧資料で整合。

confidence: INDUSTRY_CONTEMPORARY + ANALYSIS_HIGH_MULTISOURCE

## modeSpecificMinimumData

- 通常時555G消化で高確へ移行し、次回ボーナス成立まで高確滞在。
- 通常時777G消化後は、次回ボーナス後のART突入が確定。
- pacnk整理ではゲーム数救済に加え、規定ボーナス回数消化による次回ART確定の救済もあり、最大29回とされる。
- ART「巨大化モード」は基本150G、約+1.2枚/G。BAR REG後は100%突入。

confidence: ANALYSIS_HIGH_MULTISOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガ旧解析に「攻め時・ヤメ時・設定変更時」の専用項目が存在することまでは確認できたが、検索キャッシュから設定変更時の555G/777G進捗、高確、ボーナス回数救済、ART状態の具体処理本文を回収できなかった。一般的な5号機挙動から補完しない。

carryOverBehavior: **K_NAVI_CLASSIFIES_AS_YOIGOSHI_AVAILABLE / EXACT_COUNTER_COMPONENTS_UNVERIFIED**。K-Naviは本機を「宵越アリ」と分類しているため、前日進捗を利用できる朝一要素が存在することは確認。ただし555G高確、777G ART確定、規定ボーナス回数救済のどのカウンタがどの条件で引き継がれるかを独立した直接本文で確定できず、全要素の一括引継ぎとは断定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみでゲーム数、高確、規定ボーナス回数、ART状態がどう扱われるかを本機固有の直接資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時555G/777Gの公開閾値は確認済みだが、設定変更時にそれらがリセット/引継ぎのどちらになるかを直接確定できず。

ceilingAfterReset: **NO_RESET_SPECIFIC_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH**。通常時の救済は555G高確、777G到達後の次回ボーナス後ART確定。設定変更専用の短縮G数・専用天井数値は確認できず。

modeAfterReset: **NO_GAME_NUMBER_RELEASE_MODE_DISTRIBUTION_CONFIRMED / RESET_SPECIFIC_MODE_UNVERIFIED**。通常のゲーム数解除モード振分ではなく、555G高確・777G救済を確認。設定変更専用モードや公開振分値は確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。低確/高確の概念は存在するが、設定変更時・電源再投入時の高確状態再抽選/引継ぎを示す直接資料は確定できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **YOIGOSHI_AVAILABLE_CLASSIFICATION_CONFIRMED / RESET_SPECIFIC_BENEFIT_NONE_CONFIRMED**。K-Naviの「宵越アリ」分類により朝一で前日状況を利用できる可能性は確認。一方、設定変更した場合だけの短縮天井、ART優遇、朝一高確率などの公開数値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更によって具体的に失われる555G/777G進捗・高確・ボーナス回数救済を直接確定できなかったため、不利要素を推測記載しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`アイアムコニシキ / I am KONISHIKI / アイアムコニシキX / ゴールドオリンピア / オリンピア`と、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 555G / 777G / 天井 / 高確 / ガックン / 初期出目`を組み替え、当時業界記事、K-Navi、P-WORLD、旧パチマガスロマガ、pacnk、旧機種DB/回顧資料を横断したが、本機固有のガックン・初期出目・液晶等による変更判別を確定できず。

numericResetData:
  normalHighProbabilityThreshold: 555G
  normalArtGuaranteeThreshold: 777G then next bonus -> ART guaranteed
  bonusCountRelief: maximum 29 bonuses according to pacnk retrospective/analysis DB
  settingChangeGameCounter: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_SETTING_CHANGE_POWER_CYCLE_COUNTER_STATE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- 最初の検索結果だけで欠損判定せず、表記揺れ・型式`アイアムコニシキX`・ブランド名・設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/555G/777G/高確/ガックンを組み替えて再探索。
- K-Naviの「宵越アリ」分類は採用するが、具体的に何が引継ぎ対象かを一般論で補完しない。
- パチマガスロマガ旧解析には設定変更専用項目が存在するものの、具体本文が検索キャッシュで回収できなかったため、設定変更時処理を高信頼断定しない。

## conflicts

- 現時点で性能コアの主要数値に明確な別系列CONFLICTは確認していない。
- 5号機クロニクルの本機説明にはBIG約252枚/REG約104枚、ART名称・G数・純増など、本機のP-WORLD/当時業界記事/旧解析と整合しない記述が混在するため、本レコードの性能値根拠から除外。別機種記述混入の可能性が高く、平均・統合しない。

## missingFields

- settingChangeBehavior details: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- exact counters carried over under 据え置き/宵越し: UNVERIFIED_AFTER_RESEARCH
- high/low state after setting change: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- published reset-specific numeric benefit rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると / P-WORLD業界ニュース「KONISHIKI巨大化で迫力満点のARTに」2009-10-15 — https://news.p-world.co.jp/articles/3645/greenbelt — 納品11/15予定、ボーナス約1/99・約56枚、ART150G・約+1.2枚/G、約80%ループ、無限ART — reliability: INDUSTRY_CONTEMPORARY
2. K-Navi「アイアムコニシキ」 — https://p-kn.com/slot/1086/ — ホール導入2009-11-16、天井/宵越アリ分類、ボーナス約1/99、ART150G・約+1.2枚/G・約80%ループ — reliability: ANALYSIS_MAJOR_DATABASE
3. P-WORLD「アイアムコニシキ」 — https://www.p-world.co.jp/machine/database/5743 — 型式アイアムコニシキX、検定9S0075、設定別BAR REG/赤青REG/合算、機械割、REG56枚、ART150G・約+1.2枚/G、555G/777G救済 — reliability: INDUSTRY_DATABASE
4. パチマガスロマガ旧解析「ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/07/h.php — 精密ボーナス確率、PAYOUT94.9〜111.6% — reliability: ANALYSIS_OLD_MAJOR
5. パチマガスロマガ旧解析「小役確率・1000円あたりゲーム数」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/07/c.php — 31.4〜31.9G/1000円 — reliability: ANALYSIS_OLD_MAJOR
6. パチマガスロマガ旧解析 機種TOP — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/goldolympia_slot/07/goldolympia_slot_07.php — 「攻め時・ヤメ時・設定変更時」専用解析項目の存在確認 — reliability: ANALYSIS_OLD_MAJOR
7. pacnk「アイアムコニシキ 設定判別ツール」 — https://pacnk.com/slot/tools/sh_iamkonishiki.html — REG/PAYOUT系列照合、555G高確、777G救済、規定ボーナス回数救済最大29回 — reliability: ANALYSIS_RETROSPECTIVE_DATABASE
8. パチンコ・パチスロ悠遊道 回顧「アイアムコニシキ」 — https://www.pachinko-road.com/writer_blog/46383/ — 2009年11月、5号機ボーナス+ART、ART約+1.2枚/G、REG56枚 — reliability: RETROSPECTIVE
