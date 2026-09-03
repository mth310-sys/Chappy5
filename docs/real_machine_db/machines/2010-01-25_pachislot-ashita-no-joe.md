# パチスロあしたのジョー

machineName: パチスロあしたのジョー
manufacturer: サミー
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-01-25
generation: 5号機
systemType: ボーナス+ART / バトル型
coreStatus: COMPLETE_CORE_WITH_RESET_PARTIAL

## chronologyNote

- 最新main 444件 / chronologicalFrontier 2010-01-12から、2010-01-13〜01-24境界をP-WORLD系・当時業界記事・回顧DBで再監査した後の次具体日機として追加。
- グリーンべると2010-01-27記事で、2010-01-24開催の合同イベント翌日、**2010-01-25からホールデビュー**と明記されている。
- 同記事はパチンコ版を2010-02-08からと明確に分離しているため、パチスロ版導入日は2010-01-25を採用。
- repo検索で `パチスロあしたのジョー` の既存レコードなしを再確認してから追加。

## payoutRateBySetting

- 設定1: 95.7%
- 設定2: 97.6%
- 設定3: 99.8%
- 設定4: 103.0%
- 設定5: 107.4%
- 設定6: 112.5%

CrankySeven、pacnk、後年5号機クロニクルで同系列を確認。2009年12月時点の業界系資料にも設定1 95.7% / 設定6 112.5%の記載がある。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## initialHitBySetting

### ボーナス合算
- 設定1: 1/86.8
- 設定2: 1/85.9
- 設定3: 1/85.0
- 設定4: 1/84.1
- 設定5: 1/83.3
- 設定6: 1/82.4

### 主なボーナス確率
- HYPER BATTLE BONUS（黒BAR）: 全設定共通 1/8192.0
- 赤7BB: 1/829.6 / 1/809.1 / 1/789.6 / 1/771.0 / 1/753.3 / 1/736.4
- 青7BB: 1/819.2 / 1/799.2 / 1/780.2 / 1/762.0 / 1/744.7 / 1/728.2
- 赤7・赤7・青7BB: 1/809.1 / 1/789.6 / 1/771.0 / 1/753.3 / 1/736.4 / 1/720.2
- 青7・青7・赤7BB: 1/799.2 / 1/780.2 / 1/762.0 / 1/744.7 / 1/728.2 / 1/712.3
- JAC BB: 全設定共通 1/154.2

ARTの総合初当たりを単一の設定別確率として比較できる公開値は今回確定できなかった。ART当選は滞在状態と成立ボーナス種別に依存するため、詳細内部テーブルは物差し目的外として収集しない。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED_FOR_COMBINED

## baseGamesPer50

- 設定1: 29.0G
- 設定2: 29.1G
- 設定3: 29.2G
- 設定4: 29.4G
- 設定5: 29.5G
- 設定6: 29.6G

confidence: ANALYSIS_SINGLE_HIGH_DETAIL

## netIncrease

- ART「ジョーRUSH」: **約+1.6枚/G**
- ARTは基本的に次回ボーナスまで継続。
- 当時グリーンべると、CrankySeven、回顧資料で+1.6枚/Gを照合。

confidence: INDUSTRY / ANALYSIS_HIGH

## basicPayout

- HYPER BATTLE BONUS: 約36枚
- BATTLE BONUS: 約36枚
- 6G消化、または6回の小役入賞で終了。

後年5号機クロニクルにはBIG約204枚 / REG約48枚、ART約+1.4枚/Gという記述があるが、当時業界記事・CrankySeven・他回顧資料の「6Gボーナス約36枚 / ART約+1.6枚/G」と大きく競合する。本機の主値には当時資料側を採用し、後年値は `CONFLICT_RETROSPECTIVE_LIKELY_MIXED_DESCRIPTION` として分離する。

confidence: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- ART「ジョーRUSH」は継続率管理のバトル型で、次回ボーナスまで継続。
- 継続率は10% / 50% / 67% / 75% / 85% / 90%の6段階が公開されているが、全振り分けは実機完全再現用の詳細に当たるため本DBでは収集しない。
- ART突入前に平均約8Gの準備状態「ドヤゾーン」を経由。
- 通常時は低確率 / 高確率の2状態が存在。
- 天井はゲーム数型ではなく、**ボーナス後15回連続ART非突入で次回ボーナス後ART確定**。
- 仮天井が選択された場合は**8回連続ART非突入で次回ボーナス後ART**。仮天井選択率は約1/8。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **PARTIALLY_VERIFIED**。CrankySevenは「ボーナス終了後・設定変更後」の高確率状態移行率を設定別に公開しており、設定変更後に内部状態が再セットされることを直接確認できる。天井用の連続ART非突入回数やART残状態など、その他の内部要素の変更時処理は直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。`据え置き / 宵越し / 朝一 / 8回 / 15回 / ART非突入回数 / 天井`を組み替え、当時解析・攻略・古いDB・回顧資料を再探索したが、据え置き時の非突入回数カウンタ引継ぎを直接確定できなかった。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみの場合と設定変更の差を示す本機固有の直接資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常ゲーム数天井ではなくボーナス後ART非突入回数で8回/15回天井を管理するが、このカウンタの設定変更時リセット/引継ぎは確定できず。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常の仮天井8回 / 本天井15回は確認済みだが、設定変更時専用の短縮や再セット値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH_AS_SEPARATE_MODE**。ゲーム数管理モードや朝一専用モードは確認できず。設定変更時に明確な公開値がある低確/高確は `stateAfterReset` として分離する。

stateAfterReset: **VERIFIED_ANALYSIS_SINGLE**。設定変更後の高確率状態移行率は以下。
- 設定1: 40.0%
- 設定2: 40.7%
- 設定3: 43.2%
- 設定4: 44.6%
- 設定5: 46.8%
- 設定6: 48.7%

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **PUBLISHED_HIGH_STATE_START_RATE**。設定変更後は40.0〜48.7%で高確率状態へ移行する公開値があり、朝一のART期待度に影響しうる。設定変更専用の確定ART・天井短縮など、これ以外の明確な恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時だけ発生する公開済みの主要不利要素は確認できず。

resetDetection: **LOW_CONFIDENCE_EXPERIENCE_REPORT_ONLY**。当時実戦系ブログに、朝一の「転落リプレイ」を設定変更の証として扱った記録がある。ただし公式/高信頼解析で「変更判別手段」として確定できなかったため、客AIへ確定判別として実装できる値には格上げしない。

numericResetData:
  highStateAfterSettingChangePct: [40.0, 40.7, 43.2, 44.6, 46.8, 48.7]
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AS_SEPARATE_MODE
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: highStateAfterSettingChangePctのみ確認

resetBehaviorQA: PARTIAL_VERIFIED_WITH_EXTENSIVE_RESEARCH

## conflicts

1. basicPayout / netIncrease: 当時業界・解析系はボーナス約36枚 / ART約+1.6枚/G。後年5号機クロニクルはBIG約204枚 / REG約48枚 / ART約+1.4枚/Gで大きく競合。本機の6Gバトルボーナス仕様と整合する前者を主値とし、後者を `CONFLICT_RETROSPECTIVE_LIKELY_MIXED_DESCRIPTION` として保持。
2. release context: 一部イベント告知記事には2010-02-08全国展開と読める表現があるが、当時グリーンべるとはパチスロ版を2010-01-25、パチンコ版を2010-02-08と明確に分離しているため、本DBのパチスロ導入日は2010-01-25を採用。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- overall ART initialHitBySetting: UNVERIFIED_AS_SINGLE_COMPARABLE_RATE
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset for 8/15 non-ART counter: UNVERIFIED_AFTER_RESEARCH
- ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: LOW_CONFIDENCE_EXPERIENCE_REPORT_ONLY

## sources

取得日: 2026-09-03

1. グリーンべると「バトル勝利でART継続、パチスロあしたのジョー」 — https://web-greenbelt.jp/00003376/ — サミー、ART「ジョーRUSH」、6Gボーナス、次回ボーナスまで継続、約+1.6枚/G — reliability: INDUSTRY
2. グリーンべると「京楽×サミー『ジョーイベント』に3500人集う」 — https://web-greenbelt.jp/00002477/ — 2010-01-25パチスロ版ホールデビュー、パチンコ版2010-02-08との区別 — reliability: INDUSTRY
3. CrankySeven あしたのジョー解析 — https://crankyseven.com/ashitanojoe-pc.htm — 設定別機械割、ボーナス合算/各確率、50枚ベース、約36枚、ART約+1.6枚/G、8/15回天井、設定変更後高確率状態移行率 — reliability: ANALYSIS_HIGH
4. pacnk パチスロ あしたのジョー設定判別 — https://pacnk.com/slot/tools/sh_asitanojyo.html — 設定別PAYOUT、ボーナス合算の照合 — reliability: ANALYSIS_SINGLE
5. pachinko’s blog パチスロ あしたのジョー — https://pachinko.hatenablog.jp/entry/2010/01/tomorrows-joe — 2010年1月、ボーナス合算、ART約+1.6枚/Gの回顧照合 — reliability: RETROSPECTIVE_SINGLE
6. 5号機クロニクル サミー一覧 — https://5goki.com/sammy — 機械割系列の照合、およびボーナス獲得枚数/ART純増の競合値 — reliability: RETROSPECTIVE_DATABASE_WITH_CONFLICT
7. P-WORLD パチスロあしたのジョー機種系資料 — https://www.p-world.co.jp/machine/database/5792 — 5号機ART、バトルボーナス/ジョーRUSH/天井情報の補助確認 — reliability: INDUSTRY_DATABASE
8. 当時実戦系ブログ（設定変更後の転落リプレイ言及） — https://ameblo.jp/fen777/entry-10461816570.html — resetDetection補助証言のみ — reliability: COMMUNITY_LOW
