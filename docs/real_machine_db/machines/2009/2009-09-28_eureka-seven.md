# パチスロ交響詩篇エウレカセブン

machineName: パチスロ交響詩篇エウレカセブン
manufacturer: サミー
formalModelName: エウレカセブンZ
approvalNumber: 9S0472
releaseDate: 2009-09-28（K-Naviのホール導入開始日。セガサミー公式回顧は2009年9月発売。ハズセは2009-10-31掲載のため導入日定義/DB差としてCONFLICT保持）
generation: 5号機
systemType: A+ART / セットストック型ART / 通常時ART抽選
coreStatus: COMPLETE_CORE_BASE_UNVERIFIED_RELEASE_DATE_CONFLICT_RESET_BEHAVIOR_PARTIAL

## payoutRateBySetting

pachirinko系旧解析と2009年更新の5号機まとめwikiで同系列を確認。

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 98.0% |
| 3 | 100.1% |
| 4 | 104.2% |
| 5 | 108.7% |
| 6 | 112.6% |

confidence: OLD_ANALYSIS_MULTI_SOURCE

## initialHitBySetting

### ボーナス

ハズセの設定別精密値。

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/409.60 | 1/655.36 | 1/252.06 |
| 2 | 1/404.54 | 1/636.27 | 1/247.31 |
| 3 | 1/399.61 | 1/618.26 | 1/242.73 |
| 4 | 1/390.10 | 1/595.78 | 1/235.74 |
| 5 | 1/376.64 | 1/564.97 | 1/225.99 |
| 6 | 1/364.09 | 1/512.00 | 1/212.78 |

### ART「コーラリアンモード」出現率

| 設定 | ART出現率 |
|---:|---:|
| 1 | 1/212.9 |
| 2 | 1/201.1 |
| 3 | 1/185.7 |
| 4 | 1/171.4 |
| 5 | 1/160.8 |
| 6 | 1/144.0 |

confidence: OLD_ANALYSIS_HIGH

## baseGamesPer50

`交響詩篇エウレカセブン / エウレカセブンZ / サミー / 初代エウレカ` と `50枚 / 1000円 / ベース / コイン持ち / 平均ゲーム数` を組み替え、K-Navi、P-WORLD系、pachirinko、ハズセ、5号機まとめwiki、メーカー回顧、後年回顧を横断したが、比較可能な50枚あたりゲーム数の直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## netIncrease

- ART「コーラリアンモード」: **約+1.5枚/G**
- 1セット: **50G**
- 1セット増加目安: **約75枚**

pachirinko旧解析で直接確認。後年回顧資料には約+1.6枚/G表記も存在するため、厳密な純増定義では **CONFLICT: 約+1.5枚/G vs 約+1.6枚/G** を保持する。物差し主値は当時解析の約+1.5枚/G。

confidence: CONFLICT_OLD_ANALYSIS_VS_RETROSPECTIVE

## basicPayout

pachirinko旧解析:
- 赤7BIG: 約303枚
- 白7BIG: 約204枚
- REG: 約30〜50枚
- ART「コーラリアンモード」: 1セット50G、約75枚増加目安

confidence: OLD_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時はART当選率に関係する低確/高確の内部状態が存在。
- 通常時909G消化で天井ARTへ突入し、**3セット以上**確定。
- ART「コーラリアンモード」は押し順ナビ型、1セット50G。残りセットがある場合は潜伏を経て再突入。
- セガサミー公式回顧では、2009年9月発売の本機を5号機で初めて本格的に「通常時から突入するART」を実現した機種として説明している。

## resetBehavior — v0.7

settingChangeBehavior: **HIGH_STATE_START_CONFIRMED**。pachirinko旧解析に「設定変更後は内部的に高確率状態からスタートする」と直接記載。天井ゲーム数、ARTストック、潜伏状態、ボーナス成立状態等の設定変更時処理は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時の天井909G進捗、低確/高確、ARTストック/潜伏等の引継ぎを本機固有資料で直接確定できず、一般論で補完しない。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井進捗、内部状態、ARTストック/潜伏等について、設定変更との差を示す本機固有の直接資料を確定できず。

gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常時909G天井自体は直接確認済みだが、設定変更時に909Gカウンタがリセット/引継ぎされるかは直接資料不足。

ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。通常天井は909G・ART3セット以上。設定変更専用の短縮天井や別天井G数は今回確認できなかったが、通常天井がそのまま0Gから再開するとも推定しない。

modeAfterReset: **HIGH_STATE_START_CONFIRMED; NO_SEPARATE_GAME_COUNT_MODE_CONFIRMED**。設定変更後に内部高確スタートすることは直接確認。朝一専用のゲーム数モード/モードテーブルは確認できず。

stateAfterReset: **HIGH_CONFIRMED**。pachirinko旧解析による直接確認。高確の公開設定別振り分け率は本機初代の直接資料では確定できず、後継機の数値を混入しない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **MORNING_HIGH_STATE_START**。設定変更後は内部高確から開始するため、通常低確開始と比べて朝一ART当選契機の価値が上がる。高確スタートの具体率は本機初代の直接資料では未確認。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更固有の不利要素を示す直接資料は確認できず。

resetDetection: UNVERIFIED_AFTER_RESEARCH。`設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 液晶 / ステージ / 天井` と型式名・メーカー・シリーズ名を組み替えて再探索したが、本機固有のガックンや表示で変更/据え置きを判別できる直接根拠を確定できず。

numericResetData:
  normalCeiling: 909G
  normalCeilingBenefit: ART 3 sets or more
  publishedMorningState: HIGH_CONFIRMED
  publishedMorningHighRate: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
  publishedResetHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  resetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_HIGH_VALUE_DIRECT_HIGH_STATE_START_CONFIRMED_COUNTER_POWER_CARRYOVER_UNVERIFIED

resetBehaviorResearchNote:
- 表記揺れ `パチスロ交響詩篇エウレカセブン / 交響詩篇エウレカセブン / エウレカセブンZ / 初代エウレカ / サミー` を使用。
- `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 909G / 高確 / 低確 / ART / コーラリアンモード / ガックン / 初期出目 / ステージ` を組み替えて再探索。
- K-Navi、セガサミー公式回顧、グリーンべると、pachirinko、ハズセ、5号機まとめwiki、後年回顧資料を横断。
- 後継のエウレカ3、TYPE-ART、スマスロ4には詳細なリセット数値が存在するが、初代へ転用しない。

## conflicts

- releaseDate: **2009-09-28**（K-Naviホール導入開始） vs **2009-10-31**（ハズセ掲載）。セガサミー公式回顧は2009年9月発売のため、DB主値は2009-09-28を採用しつつハズセ値をCONFLICT保持。
- ART netIncrease: 当時旧解析 **約+1.5枚/G** vs 後年回顧 **約+1.6枚/G**。平均せず両方保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeGameCounterTreatment: UNVERIFIED_AFTER_RESEARCH
- carryOverBehaviorDetails: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
- publishedMorningHighRate: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「パチスロ交響詩篇エウレカセブン」 — https://p-kn.com/slot/1042/ — ホール導入開始2009-09-28、設定1/6ボーナス合算、天井/RT・ART/朝イチ特典カテゴリ — reliability: ANALYSIS_HIGH
2. セガサミーホールディングス「感動体験を創造し続ける エウレカセブン開発秘話」掲載株主通信PDF — https://www.segasammy.co.jp/cms/wp-content/uploads/2023/03/202003_4q_kabutsu_j_final.pdf — 2009年9月発売、通常時から突入するARTを本格実現した歴史的位置付け — reliability: OFFICIAL
3. グリーンべると「サミーから待望の『エウレカセブン』、遂に登場！」2009-08-07 — https://web-greenbelt.jp/00003255/ — 2009年8月発表、メーカー/機種一次発表の補強 — reliability: CONTEMPORARY_INDUSTRY
4. pachirinko「パチスロ交響詩篇エウレカセブン」 — https://pacnk.com/slot/2009/eureka/top.php — 設定別機械割、低確/高確、909G天井、設定変更後高確スタート、獲得枚数、ART50G/約+1.5枚/G — reliability: OLD_ANALYSIS_HIGH
5. パチスロ5号機まとめwiki「交響詩篇エウレカセブン」最終更新2009-10-27 — https://w.atwiki.jp/5gouki/pages/140.html — 設定別ボーナス・機械割、50G ART — reliability: CONTEMPORARY_OLD_DB
6. ハズセ「パチスロ 交響詩篇エウレカセブン」 — https://hazuse.com/machine/pachislot/9S0472/ — 型式エウレカセブンZ、検定番号9S0472、設定別BIG/REG/合算/ART出現率、導入開始日2009-10-31（導入日CONFLICT） — reliability: OLD_ANALYSIS_HIGH
7. 中一商事・後年機紹介 — https://www.nakaiti.com/html/sT_erec025.html — 初代ART純増を約+1.6枚/Gと回顧、後年比較値 — reliability: RETROSPECTIVE_SINGLE

## quality

performanceCoreConfidence: HIGH_EXCEPT_BASE_AND_NET_INCREASE_DEFINITION_CONFLICT
resetBehaviorConfidence: PARTIAL_HIGH_VALUE_DIRECT_SETTING_CHANGE_HIGH_STATE
sourceCoverage: OFFICIAL + CONTEMPORARY_INDUSTRY + OLD_ANALYSIS_MULTI_SOURCE + OLD_DB + RETROSPECTIVE
