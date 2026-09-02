# Rio2プレミアム

machineName: Rio2プレミアム
manufacturer: ネット
formalModelName: リオ2プレミアム（中古実機DB表記）
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-11-08（グリーンべると納品開始予定・九州は11-15） / 2009-11-09（K-Naviホール導入開始） / NET公式製品一覧2009-11
generation: 5号機
systemType: BIG+REG + ART / CZ / 天井ART / パンク回避
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

市場スペック系列と旧パチマガのシミュレートPAYOUTが明確に異なるため、平均せずCONFLICTとして保持する。

### P-WORLD / pacnk 系列

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 99.7% |
| 3 | 101.5% |
| 4 | 104.1% |
| 5 | 106.6% |
| 6 | 110.3% |

### パチマガスロマガ旧解析シミュレート値

| 設定 | PAYOUT |
|---:|---:|
| 1 | 96.06% |
| 2 | 97.89% |
| 3 | 100.23% |
| 4 | 102.03% |
| 5 | 105.36% |
| 6 | 109.07% |

confidence: CONFLICT_MULTISOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/385.51 | 1/655.36 | 1/242.73 |
| 2 | 1/381.02 | 1/630.15 | 1/237.45 |
| 3 | 1/368.18 | 1/585.14 | 1/225.99 |
| 4 | 1/352.34 | 1/537.18 | 1/212.78 |
| 5 | 1/348.60 | 1/520.13 | 1/208.71 |
| 6 | 1/344.93 | 1/504.12 | 1/204.80 |

- 旧パチマガの精密値を主値とする。
- P-WORLD / pacnk の丸め値（BIG 1/385→1/344、REG 1/655→1/504、合算1/242→1/204）と整合。

confidence: ANALYSIS_HIGH_MULTISOURCE

## baseGamesPer50

- 全設定共通: **32.54G / 1000円（50枚相当）**。
- パチマガスロマガ旧解析の直接値。

confidence: ANALYSIS_OLD_MAJOR_DIRECT

## netIncrease

ART「Rio Time」:
- 1セット50G。
- グリーンべると（2009年当時） / K-Navi / パチスロ救急車: **約+1.3枚/G**。
- P-WORLD: **約+1.2枚/G**。
- 1セット約60枚増加という説明は両系列で概ね一致するが、純増/Gの表記は1.2 / 1.3で競合するため平均しない。
- 「無限Rio Time」は次回ボーナスまで継続。

confidence: CONFLICT_1_2_VS_1_3_PER_GAME

## basicPayout

- BIG: 317枚を超える払い出しで終了、実獲得目安約210枚。
- REG: 97枚を超える払い出しで終了、実獲得目安約70枚。
- K-Naviは払い出し終了条件、P-WORLDは実獲得目安も併記。

confidence: ANALYSIS_HIGH_MULTISOURCE

## modeSpecificMinimumData

- ART「Rio Time」は1セット50G。ボーナス中赤7揃い、ミッションゲーム昇格等が主契機。
- 1回の赤7揃いで最大10セットまでARTストックの可能性。
- ART中の特定リプレイ等から次回ボーナスまで継続する「無限Rio Time」へ昇格する構造あり。
- ART非当選ボーナス後はCZ「ミッションゲーム」へ。P-WORLDでは30Gまでパンク回避ナビがあり、その後は特定条件で終了。
- 通常時799G消化で天井ARTに当選し、最低3セット（150G）以上が確定。

confidence: INDUSTRY_CONTEMPORARY + ANALYSIS_HIGH_MULTISOURCE

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_GAME_COUNT_RESET_ON_SETTING_CHANGE_CONFIRMED**。パチ＆スロ必勝本に「設定変更をすると、天井までのゲーム数はリセットされる」と直接記載あり。設定変更直後のRT関連について同資料はリプ・ベル・ベル出現でRTへ入り、リプ・リプ・チェリーで終了する旨を併記するが、これを朝一恩恵率や専用モードと解釈できる公開数値は確認できないため、カウンタリセット以外は限定的に扱う。

carryOverBehavior: **CEILING_PROGRESS_CARRIED_OVER_WHEN_NOT_SETTING_CHANGED_EXPECTED / DIRECT_MACHINE_SPECIFIC_POWER_ONLY_DISTINCTION_UNVERIFIED**。据え置きなら設定変更による天井カウンタリセットは発生しないため前日進捗が残る運用が想定されるが、「据え置き時○G引継ぎ」と明記した独立資料は今回確定できず、一般論だけで高信頼断定しない。客側の宵越し価値は設定変更有無に依存。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみで799G天井カウンタ、CZ、ARTストック、RT状態がどう扱われるかを本機固有の直接資料で確定できず。

gameCounterReset: **RESET_TO_FULL_799G_CEILING_PROGRESS_ON_SETTING_CHANGE**。通常799G消化で天井ART。設定変更時は天井までのゲーム数をリセット。

ceilingAfterReset: **799G_NORMAL_CEILING / NO_RESET_SHORTENING_CONFIRMED**。設定変更専用の短縮天井は確認できず、通常799G天井を再スタートする構造として扱う。

modeAfterReset: **NO_GAME_NUMBER_RELEASE_MODE_CONFIRMED / RESET_SPECIFIC_MODE_DISTRIBUTION_UNVERIFIED**。通常時のゲーム数解除モード管理は確認されない。設定変更時の専用モード振分・朝一専用モードの公開値も確認できず。

stateAfterReset: **RESET_RT_TRANSITION_DESCRIPTION_EXISTS_BUT_FULL_STATE_RESET_UNVERIFIED**。必勝本の設定変更欄にRT移行・終了契機の記載はあるが、変更前のARTストック/CZ/無限ART/内部状態がどう処理されるかまで直接説明した資料は確定できず。実機完全再現の推測は行わない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NO_NUMERIC_MORNING_BENEFIT_CONFIRMED_AFTER_RESEARCH**。設定変更で天井進捗が消えるため、少なくとも宵越し天井狙いには不利。設定変更専用の天井短縮、ART当選率優遇、CZ優遇等の公開数値は確認できず。

resetPenalties: **PREVIOUS_DAY_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**。前日799G天井までのハマリ進捗は設定変更でリセットされることが明確な主要不利要素。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、RT挙動等から設定変更/据え置きを判別できる本機固有の直接資料を、機種名・型式表記・メーカー名と検索語を変えて再探索したが確定できず。

numericResetData:
  normalCeiling: 799G
  ceilingReward: Rio Time minimum 3 sets / 150G
  settingChangeCeilingCounter: RESET
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningStateRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_POWER_CYCLE_CARRYOVER_VISIBLE_DETECTION_UNVERIFIED

resetBehaviorResearchNote:
- `Rio2プレミアム / Rio2 プレミアム / リオ2プレミアム / リオ２プレミアム / ネット / NET` を使用。
- `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越 / 電源OFF ON / 電源オフ / 天井 / 799G / RT / ART / ミッションゲーム / ガックン / 初期出目` を組み替えて再探索。
- NET公式製品一覧、2009年当時グリーンべると、K-Navi、P-WORLD、旧パチマガスロマガ、パチ＆スロ必勝本、pacnk、旧機種攻略/回顧資料を横断。
- 設定変更による天井カウンタリセットは直接解析を採用。
- powerCycleBehavior、ART/CZ/ストック状態の設定変更処理、ガックン等の変更判別は一般的な5号機挙動から補完せずUNVERIFIEDとした。

## conflicts

- 機械割: P-WORLD/pacnk 97.8〜110.3% と旧パチマガシミュレート96.06〜109.07%が競合。平均せず双方保持。
- ART純増: 当時グリーンべると/K-Navi等 約+1.3枚/G、P-WORLD 約+1.2枚/G。平均せずCONFLICT。
- 導入時期: グリーンべるとは2009-11-08納品開始予定（九州11-15）、K-Naviは2009-11-09ホール導入開始、NET公式は2009-11月。物流開始/ホール導入/月単位の粒度差として保持。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- explicitCarryOverStatementWhenUnchanged: UNVERIFIED_AFTER_RESEARCH
- ART/CZ/stockStateAfterSettingChange: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- publishedMorningNumericRates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. NET公式「製品情報」 — https://www.net-fun.co.jp/product/page/6 — Rio2プレミアム、200911、Rio Time搭載 — reliability: OFFICIAL
2. グリーンべると「『Rio2』に新スペックが登場」2009-10-14 — https://web-greenbelt.jp/00003322/ — 納品11/8（九州11/15）、50G ART、約+1.3枚/G、799G天井、最低3セット、最大10セット — reliability: INDUSTRY_CONTEMPORARY
3. K-Navi「Rio2プレミアム」 — https://p-kn.com/slot/1075/ — ホール導入2009-11-09、BIG/REG払い出し条件、ART約+1.3枚/G・50G — reliability: ANALYSIS_MAJOR_DATABASE
4. P-WORLD「Rio2プレミアム」 — https://www.p-world.co.jp/machine/database/5726 — BIG/REG/合算、機械割97.8〜110.3%、BIG約210枚/REG約70枚、ART約+1.2枚/G、799G天井3セット以上、CZ構造 — reliability: INDUSTRY_DATABASE
5. パチマガスロマガ旧解析「小役出現確率・通常時」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/144/c.php — 全設定共通32.54G/1000円 — reliability: ANALYSIS_OLD_MAJOR
6. パチマガスロマガ旧解析「ボーナス抽選確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/144/h.php — 精密BIG/REG/合算、シミュレートPAYOUT96.06〜109.07% — reliability: ANALYSIS_OLD_MAJOR
7. パチ＆スロ必勝本「設定変更&天井情報[Rio2プレミアム]」 — https://p.hisshobon.jp/machine/1468/1/22075 — 設定変更で天井までのゲーム数リセット、799G天井最低3セット、設定変更欄のRT移行/終了契機 — reliability: ANALYSIS_MAJOR
8. pacnk「Rio2プレミアム」 — https://pacnk.com/slot/2009/rio2pre/top.php — BIG/REG、機械割97.8〜110.3%、799G天井 — reliability: RETROSPECTIVE_DATABASE
9. A-SLOT「NET Rio2プレミアム 中古パチスロ実機」 — https://www.a-slot.com/SHOP/net12.html — 型式名表記、BIG317枚超/REG97枚超払い出し終了 — reliability: RETROSPECTIVE_MACHINE_DATABASE
10. パチスロ救急車「Rio2 プレミアム」 — https://www.eightbeat.com/slot99/kishu/ra_gyou/ri/rio2premium/page_menu.html — 2009.11、ART50G、約+1.3枚/G、BIG約210枚/REG約70枚 — reliability: RETROSPECTIVE_ANALYSIS
