# ハイサイ蝶特急ターボ

machineName: ハイサイ蝶特急ターボ
formalModelName: ハイサイ蝶特急ターボA
inspectionNumber: 4S0120
manufacturer: タイヨー
releaseDate: 2014-05-19
releaseDatePrecision: exact_nationwide_start
generation: 5号機
systemType: AT / 疑似ボーナス型チャンスAT+メインAT / 規定ゲーム数管理
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- K-Naviの2014年5月全国一斉導入カレンダーおよび機種ページで **2014-05-19** 導入開始を確認。
- HAZUSEで型式名 **ハイサイ蝶特急ターボA**、検定番号 **4S0120**、メーカー タイヨー、導入開始日2014-05-19を確認。
- P-WORLDでも型式名・検定番号・5号機ATを一致確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 94.4% |
| 2 | 97.5% |
| 3 | 99.5% |
| 4 | 104.3% |
| 5 | 106.6% |
| 6 | 112.6% |

- K-Navi、P-WORLD、HAZUSEで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### メインAT「蝶特急モード」初当たり（解析系列）

| 設定 | AT初当たり |
|---:|---:|
| 1 | 約1/689 |
| 2 | 約1/576 |
| 3 | 約1/501 |
| 4 | 約1/472 |
| 5 | 約1/474 |
| 6 | 約1/446 |

- crankysevenの解析整理値。後年回顧資料でも設定1約1/688.9〜設定6約1/446.2というレンジを一致確認。
- confidence: ANALYSIS_HIGH_MULTI_FAMILY_RANGE_MATCH

### 公開スペック欄の「蝶特急MODE」確率

| 設定 | 公開値 |
|---:|---:|
| 1 | 1/147.9 |
| 2 | 1/130.3 |
| 3 | 1/107.5 |
| 4 | 1/100.3 |
| 5 | 1/95.4 |
| 6 | 1/91.1 |

- K-Navi、P-WORLD、HAZUSEで一致するが、上記の解析上「AT初当たり」と定義が一致しないため平均・統合しない。
- 本DBでは朝一/設定推測上のメインAT初当たり比較には約1/689〜1/446系列を優先し、本表は **DEFINITION_CONFLICT_PUBLISHED_MODE_RATE** として保持。

### ハイサイチャンス

- 約 **1/50**、設定差は極小。K-Navi/P-WORLDでは1/50.2〜1/50.0。

## baseGamesPer50

- **32.41G/50枚**（パチマガスロマガ）。
- crankysevenの **約32G/1000円** と整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- ハイサイチャンス / 蝶特急モードとも **約3.0枚/G**。
- P-WORLD、K-Navi、パチマガスロマガ、業界発表で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- AT「ハイサイチャンス」: **5G固定**、約3.0枚/G。消化中および終了後のレバーでメインAT抽選。
- メインAT「蝶特急モード」: **初期20〜300G**、約3.0枚/G、ゲーム数上乗せ型。
- 「確変」: 10/20/30G、赤7揃い等で5〜300G上乗せ。
- 「超確変」: 10G、上乗せ1回100/200/300G、上乗せ確率約1/2.2、平均上乗せ約500G。
- 蝶特急モード終了後は50%で「究極状態」突入抽選、移行後は最大82%ループと複数資料に掲載。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は規定ゲーム数でハイサイチャンスまたは蝶特急モードへ当選。
- 解析資料では通常系としてノーマル / チャンス / 準備 / 超確変 / 究極等のモードを確認。
- 超確変モード滞在時は77G天井到達率が約75%とする解析資料あり。
- メインAT非当選ハイサイチャンスの回数天井は最大 **24回**。24回目までに蝶特急モードが確定。

## ceiling

- ゲーム数天井: 通常時 **77G**。到達時は超確変へ突入し、そこから蝶特急モードへ繋がる。
- 当時解析ではAT終了後はベルこぼし目出現後からカウント開始。
- 回数天井: 蝶特急モード非当選のハイサイチャンス **最大24回**で次回蝶特急モード確定。
- グリーンべるとの2014-04-22発表会記事でも、前作128Gから本機77Gへの短縮と天井時超確変を確認。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_DIRECT_SETTING_CHANGE_WITH_CARRYOVER_OBSERVATION
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更で天井到達までのゲーム数はクリア**。複数解析資料で一致。
- 当時掲示板のスロマガ2014年7月号解析記事引用では、**ハイサイチャンスの蝶特急モード非当選回数も設定変更時リセット**とされる。
- 設定変更時は通常系モードを再選択する解析値が公開されている。
- confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER / ANALYSIS_SINGLE_PERIOD_CITATION_FOR_HC_COUNT

### carryOverBehavior

- 当時掲示板のスロマガ2014年7月号解析記事引用では、**据え置き時はハイサイチャンスの非当選回数を翌日に持ち越す**。
- 77G規定ゲーム数カウンタおよび通常モードの据え置き時保持について、同程度に明示的な独立資料は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_PERIOD_CITATION

### powerCycleBehavior

- 設定変更を伴わない純粋な電源OFF→ONだけの場合の77G内部G数、HCスルー回数、モード/状態の保持契約は、表記・資料系統を変えて再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **RESET**（77G天井G）。
- 設定変更: **HCスルー回数 RESET**（当時スロマガ解析を引用した掲示板回答。独立原本未取得のため信頼度を一段下げる）。
- 据え置き: **HCスルー回数 CARRYOVER**（同上）。
- 据え置き: 77G内部G数 **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更時も通常の最大77G天井そのものは維持されるとみられるが、設定変更専用の別天井G数は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更により前日77G天井進捗とHCスルー回数進捗が失われる。
- 一方、設定変更時は後述のモード再選択により超確変モード選択機会が生じる。

### modeAfterReset

- 設定変更時モード移行率として、当時解析転載資料に **通常 91.96〜85.96% / チャンス 8〜14% / 超確変 0.04%**（設定1〜6レンジ）の公開値あり。
- 同資料は「AT非当選時＆設定変更時」の移行率として掲載。設定別全セルの完全表は今回の現存本文では復元できないため、レンジをそのまま保存し中間設定値を推定しない。
- 当時掲示板でも設定変更時はゲーム数天井モード（77G到達で超確変となるモード）の選択率が上がるとのスロマガ解析引用あり。
- confidence: ANALYSIS_SINGLE_PERIOD_RANGE + PERIOD_CITATION_CORROBORATION

### stateAfterReset

- 本機の「究極状態」等について、設定変更/据え置き/純電断の保持・クリアを直接比較した高信頼契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更後のモード再選択で **超確変モード0.04%** が公開され、通常時より朝一にゲーム数天井モードを選ぶ機会が生じるとする当時解析あり。
- ただし確率自体は極小で、設定変更専用77G短縮という意味ではない。

### resetPenalties

- 設定変更で前日の77G天井進捗が消失。
- 当時スロマガ解析引用に基づけば、前日のHCスルー回数進捗も消失。

### resetDetection

- 本機固有のリールガックン、初期出目、ランプ、液晶等による確定的な設定変更判別契約は、十分再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- HC回数宵越しの成立/不成立は事後的な推測材料になり得るが、朝一即時判別手段ではない。

### numericResetData

- 設定変更時モード移行率（公開レンジ）:
  - 通常: **91.96〜85.96%**（設定1→6レンジとして掲載）
  - チャンス: **8〜14%**
  - 超確変: **0.04%**
- 設定変更専用の全設定別完全振り分け表: **UNVERIFIED_FOR_EXACT_FULL_TABLE**。

### publicMorningNumbers

- 上記設定変更時モード移行率を朝一公開数値として採用。
- 設定変更専用の朝一○G以内当選率など、独立した比較可能数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

「ハイサイ蝶特急ターボ / ハイサイ超特急ターボ / ハイサイ蝶特急ターボA / 4S0120 / タイヨー」に「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 77G / 24回 / モード / 超確変 / ガックン」を組み合わせ、K-Navi、P-WORLD、HAZUSE、パチマガスロマガ、グリーンべると、当時解析ブログ、2-9伝説、P-WORLD当時掲示板、後年回顧資料を横断。設定変更時天井Gクリア、設定変更時モード公開レンジ、HC回数の変更時RESET/据え置きCARRYOVERまで回収。純電源OFF→ONと据え置き時77G内部G/モード保持は直接契約を安全に固定できずUNVERIFIEDを維持する。

## conflicts / safeguards

- K-Navi/P-WORLD/HAZUSEの「蝶特急MODE 1/147.9〜1/91.1」と、解析資料の「AT初当たり 約1/689〜1/446」は定義が一致しない。平均せず **DEFINITION_CONFLICT** として双方保持。
- 「最大天井77G」は設定変更専用短縮天井ではなく通常ゲーム性。
- 設定変更時の超確変モード0.04%は「朝一77G到達率0.04%」ではない。モード選択率として保存。
- P-WORLD掲示板の変更/据え置き回答は当時スロマガ解析記事の引用であり、掲示板自体を一次解析扱いしない。
- 前作「ハイサイ蝶特急2」の128G天井やresetBehaviorを混入しない。

## sources

取得日: **2026-09-07**

1. K-Navi — ハイサイ蝶特急ターボ（導入日/設定別公開確率/機械割/純増/77G天井）
   - https://p-kn.com/slot/2053/
2. K-Navi — 2014年5月全国一斉導入カレンダー
   - https://p-kn.com/calendar/201405/
3. P-WORLD — ハイサイ蝶特急ターボ（型式/検定番号/設定別公開確率/機械割/純増/AT仕様/天井）
   - https://www.p-world.co.jp/machine/database/7373
4. HAZUSE — ハイサイ蝶特急ターボ（型式4S0120/検定番号/導入日/公開スペック）
   - https://hazuse.com/machine/pachislot/4S0120/
5. パチマガスロマガ — ハイサイ蝶特急ターボ（純増/AT性能/77G天井/50枚32.41G）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/80/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/80/c.php
6. グリーンべると — タイヨーが破格の13万5,000円で新機種を販売（2014-04-22、77G天井/超確変）
   - https://web-greenbelt.jp/00006182/
7. crankyseven — ハイサイ蝶特急ターボ解析（約32G/千円、AT初当たり、設定変更で天井Gクリア、モード概要）
   - https://crankyseven.com/haisaityoutokkyu-turbo-pc.htm
8. 勝ち組父さん負け組父さん — AT非当選時＆設定変更時モード移行率（通常91.96〜85.96 / チャンス8〜14 / 超確変0.04%）
   - https://ameblo.jp/mpkhb1311/entry-11884275964.html
9. 同ブログ — 天井解析（77G / HC24回 / AT後ベルこぼし目からカウント）
   - https://ameblo.jp/mpkhb1311/entry-11884258572.html
10. 2-9伝説 — ハイサイ蝶特急ターボ 天井恩恵・解析（設定変更で天井Gリセット）
   - https://2-9densetsu.com/haisaichotokkyu/
11. P-WORLD機種掲示板 — 2014-07-04投稿、スロマガ7月号解析記事の引用としてHC回数の設定変更時RESET/据え置き時翌日持越しを記録
   - https://www.p-world.co.jp/sp/search_kisyubbs.cgi?group_id=4264&mode=thread_list
12. パチ7回顧記事 — AT初当たり約1/688.9〜1/446.2、77G天井、HC24回天井
   - https://pachiseven.jp/articles/detail/11044

## missingFields

- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior 77G内部G/通常モード: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- settingChange full per-setting mode table: UNVERIFIED_FOR_EXACT_FULL_TABLE
- resetDetection direct device behavior: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- initialHit definition: PUBLISHED_MODE_RATE 1/147.9〜1/91.1 vs ANALYSIS_AT_INITIAL 1/689〜1/446 — DEFINITION_CONFLICT, not averaged.

## confidence summary

- identity/date: HIGH_MULTI_SOURCE
- payout: HIGH_MULTI_SOURCE
- initial hit: HIGH_WITH_DEFINITION_CONFLICT_SAFEGUARD
- base: ANALYSIS_HIGH_MULTI_SOURCE
- net increase/basic AT/ceiling: INDUSTRY_PLUS_ANALYSIS_HIGH
- setting change game-counter reset: ANALYSIS_HIGH
- setting change mode numeric range: ANALYSIS_SINGLE_PERIOD
- HC count reset/carryover: PERIOD_ANALYSIS_CITATION_SINGLE
- powerCycle/state/detection: UNVERIFIED_AFTER_RESEARCH
