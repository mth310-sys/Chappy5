# パチスロ創聖のアクエリオン

machineName: パチスロ創聖のアクエリオン
manufacturer: SANKYO
formalModelName: パチスロ創聖のアクエリオンV
inspectionNumber: 0S1291
aliases: 創聖のアクエリオン / パチスロ 創聖のアクエリオン / アクエリオン
releaseDate: 2011-03-07
releaseDateStatus: EXACT_HALL_INTRODUCTION_DATE_CROSSCHECKED_WITH_DATE_CONFLICT
releaseDateNote: K-Naviとパチ＆スロ必勝本は2011-03-07導入、SANKYO公式オンライン博物館は2011年3月導入。HAZUSEのみ2011-03-04を導入開始日としているため、複数一致する3/7をDB主値とし3/4をCONFLICTとして保持する。
generation: 5号機
systemType: A+ART / リアルボーナス + セットストック式ART
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_PAYOUT_RATE_CONFLICT_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、556レコード「パチスロ『ぼのぼの』～スウィートver.～」を再取得して開始。
- 開始時正本は recordCount 556 / chronologicalFrontier 2011-03-06。
- LATEST_HANDOFF指定の2011-03-06同日群および3/7群を監査し、候補「パチスロ創聖のアクエリオン」を次件として確認。
- repo上の想定パスに既存レコードがないことを確認。
- K-Naviとパチ＆スロ必勝本は2011-03-07導入、SANKYO公式は2011.03。HAZUSEは2011-03-04のため日付競合として分離保持。

## payoutRateBySetting

### 主系列 — K-Navi / P-WORLD
- 設定1: **96.3%**
- 設定2: **98.1%**
- 設定3: **100.1%**
- 設定4: **104.0%**
- 設定5: **108.8%**
- 設定6: **113.3%**

confidence: ANALYSIS_HIGH_CROSSCHECKED

### CONFLICT — パチ＆スロ必勝本シミュレート値
- 設定1: **97.02%**
- 設定2: **98.65%**
- 設定3: **100.46%**
- 設定4: **102.95%**
- 設定5: **105.44%**
- 設定6: **109.60%**

confidence: CONFLICT
note: 必勝本は明示的に「シミュレート値」。K-Navi/P-WORLDの市場掲載機械割とは設定4～6で差が大きいため平均化しない。物差し主値は複数一致する96.3/98.1/100.1/104.0/108.8/113.3%を採用し、必勝本系列を定義付き競合として保持する。

## initialHitBySetting

### BIG合算
- 設定1: **1/399.61**
- 設定2: **1/392.43**
- 設定3: **1/385.51**
- 設定4: **1/378.82**
- 設定5: **1/366.12**
- 設定6: **1/354.25**

### REG合算
- 設定1: **1/595.78**
- 設定2: **1/579.96**
- 設定3: **1/564.97**
- 設定4: **1/550.72**
- 設定5: **1/524.29**
- 設定6: **1/500.27**

### ボーナス合算
- 設定1: **1/239.18**
- 設定2: **1/234.06**
- 設定3: **1/229.15**
- 設定4: **1/224.44**
- 設定5: **1/215.58**
- 設定6: **1/207.39**

### ボーナス + ART合算
- 設定1: **1/143**
- 設定2: **1/131**
- 設定3: **1/134**
- 設定4: **1/120**
- 設定5: **1/121**
- 設定6: **1/103**

### ART初当たり — 単一二次資料
- 設定1: **約1/358**
- 設定2: **約1/302**
- 設定3: **約1/325**
- 設定4: **約1/258**
- 設定5: **約1/281**
- 設定6: **約1/208**

confidence: ANALYSIS_HIGH_CROSSCHECKED_FOR_BONUS_AND_BONUS_ART_COMBINED / ANALYSIS_SINGLE_FOR_ART_INITIAL
note: ボーナス値とボーナス+ART合算はSANKYO公式・K-Navi・必勝本で丸め範囲内一致。ART初当たり単独はA-SLOT掲載値を保持するが、今回別系統の直接表を回収できなかったため信頼度を下げる。

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

機種名・正式型式名・メーカー名に「50枚」「1000円」「千円」「ベース」「コイン持ち」「回転数」「1k」を組み合わせ、SANKYO公式、K-Navi、P-WORLD、パチマガスロマガ、パチ＆スロ必勝本、HAZUSE、旧実機販売DB、回顧資料を横断したが、比較可能な本機固有の直接値を確定できず。推定・逆算はしない。

confidence: UNVERIFIED

## netIncrease

- ART「創聖RUSH」: **約+1.5枚/G**
- 1セット: **30 / 50 / 70 / 90 / 150G**
- 管理: **セットストック式**

confidence: OFFICIAL_CROSSCHECKED_WITH_ANALYSIS_HIGH

## basicPayout

- SUPER BIG: **約240枚 + ART大量ストック**
- 赤7BIG: **約240枚**
- 青7BIG: **約210枚**
- 緑7BIG: **約180枚**
- REG: **約42枚 / 6G**

SANKYO公式は獲得枚数の異なる5種類のボーナス搭載を明記。P-WORLD、HAZUSE、パチマガスロマガで上記実獲得目安が一致する。

confidence: OFFICIAL_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- A+ARTの5号機。通常時はレア役などでART抽選および内部状態移行抽選を行う。
- ART「創聖RUSH」は1セット30/50/70/90/150G、約+1.5枚/G、セットストック式。
- ART中の「不動ナビ」押し順正解でストック上乗せゾーン「創聖モード」へ移行。上位の「創星モード」も存在。
- 通常時にはART抽選期待度に関係する低確/高確等の内部状態が存在する。
- 通常天井は**ボーナス間1280G**。到達後、前兆を経由してARTへ突入。
- 別救済として、ボーナス後ART準備状態で**30G間ベル取りこぼしなし**の場合にARTストック当選。
- 有利区間制度導入前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED**。設定変更で天井ゲーム数をリセットし、内部モードを再抽選する。当時のパチ＆スロ必勝本「設定変更&天井情報」で直接確認。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更時に天井Gがリセットされることは確定したが、据え置き時にボーナス間1280G進捗・内部状態・ARTストック/潜伏をどこまで保持するかを本機固有の直接資料で確定できず。一般的な5号機挙動から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合のボーナス間G数、内部状態、ARTストック/潜伏の保持を本機固有資料で直接確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE_CONFIRMED**。設定変更時は天井ゲーム数リセット。前日ハマリを変更後の1280G天井へそのまま加算できない。

ceilingAfterReset: **NORMAL_CEILING_1280G / NO_RESET_SHORTENING_CONFIRMED_AFTER_RESEARCH**。通常天井はボーナス間1280G。設定変更専用の短縮天井・別天井G数は今回確認できず。

modeAfterReset: **RESELECTED_WITH_PUBLIC_NUMERIC_DISTRIBUTION**。設定変更時に低確/高確/超高確へ再抽選。

stateAfterReset: **CONFIRMED_NUMERIC_RESET_STATE_DISTRIBUTION**。設定変更後の状態振り分けは以下。
- 設定1・2: 低確 **66.28%** / 高確 **33.33%** / 超高確 **0.39%**
- 設定3・4: 低確 **59.61%** / 高確 **40.00%** / 超高確 **0.39%**
- 設定5・6: 低確 **49.61%** / 高確 **50.00%** / 超高確 **0.39%**
- 高確以上合計: 設定1・2 **33.72%** / 設定3・4 **40.39%** / 設定5・6 **50.39%**

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度前の5号機。

resetBenefits: **CONFIRMED_CONDITIONAL_STATE_ADVANTAGE**。設定変更時はモード再抽選され、高設定ほど高確スタート比率が高い。高確以上は設定1・2で33.72%、設定3・4で40.39%、設定5・6で50.39%。ただし全設定一律のリセット優遇とは扱わず、公開振り分けそのものを保持する。

resetPenalties: **CONFIRMED_CEILING_PROGRESS_LOSS**。設定変更でボーナス間1280G天井の進捗がリセットされるため、前日ハマリ台の宵越し天井狙いには不利。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式名と「ガックン」「設定変更判別」「朝一」「初期出目」「液晶」「据え置き判別」を組み合わせ、当時解析・K-Navi・P-WORLD・HAZUSE・必勝本・回顧資料を再探索したが、本機固有の客側変更判別手段を十分な根拠で確定できず。

numericResetData:
- settingChange low/high/super-high:
  - settings1-2: **66.28 / 33.33 / 0.39%**
  - settings3-4: **59.61 / 40.00 / 0.39%**
  - settings5-6: **49.61 / 50.00 / 0.39%**
- normal ceiling: **1280G bonus-to-bonus**
- reset-specific shortened ceiling: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_HIGH_FOR_SETTING_CHANGE_COUNTER_AND_STATE_DISTRIBUTION / UNVERIFIED_FOR_CARRYOVER_POWER_CYCLE_DETECTION**

## conflicts

1. **releaseDate**
   - K-Navi: 2011-03-07ホール導入開始
   - パチ＆スロ必勝本: 2011-03-07導入
   - SANKYO公式: 2011.03
   - HAZUSE: 2011-03-04導入開始日
   - 複数一致する3/7を主値、3/4をCONFLICT保持。

2. **payoutRateBySetting**
   - K-Navi / P-WORLD: 96.3 / 98.1 / 100.1 / 104.0 / 108.8 / 113.3%
   - パチ＆スロ必勝本シミュレート: 97.02 / 98.65 / 100.46 / 102.95 / 105.44 / 109.60%
   - 定義差を伴う大きな差なので平均化しない。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior詳細: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior詳細: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- ART初当たり単独の別系統照合: **UNVERIFIED_AFTER_RESEARCH / SINGLE_SOURCE_VALUE_RETAINED**

## sources

取得日: **2026-09-04**

1. SANKYOオンライン博物館 — パチスロ 創聖のアクエリオン
   - URL: https://www.sankyo-fever.jp/collection/542/
   - 用途: 公式導入月、型式名、設定別BB/RB/ボーナス合算/ボーナスART合算、ART/ゲーム性
   - confidence: OFFICIAL

2. K-Navi — パチスロ創聖のアクエリオン
   - URL: https://p-kn.com/slot/1370/
   - 用途: 2011-03-07ホール導入、BIG/REG/合算、機械割、ART純増/セットG
   - confidence: ANALYSIS_HIGH

3. P-WORLD — パチスロ 創聖のアクエリオン
   - URL: https://www.p-world.co.jp/machine/database/6232
   - 用途: 機械割、型式/検定番号、ボーナス獲得枚数、ART純増・セットG、1280G天井、内部状態
   - confidence: ANALYSIS_HIGH

4. パチ＆スロ必勝本 — 基本スペック
   - URL: https://p.hisshobon.jp/machine/1758/1/28419
   - 用途: 2011-03-07導入、精密ボーナス確率、ボーナス+ART合算、シミュレート機械割CONFLICT
   - confidence: ANALYSIS_HIGH

5. パチ＆スロ必勝本 — 設定変更&天井情報
   - URL: https://p.hisshobon.jp/machine/1758/1/27733
   - 用途: 設定変更時天井Gリセット、モード再抽選、設定変更後低確/高確/超高確振り分け、1280G天井
   - confidence: ANALYSIS_HIGH

6. パチマガスロマガ公式アーカイブ
   - URL: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/24/a.php
   - 用途: ART約+1.5枚/G、30/50/70/90/150G、各ボーナス実獲得目安
   - confidence: ANALYSIS_HIGH

7. HAZUSE
   - URL: https://hazuse.com/machine/pachislot/0S1291/genre/201/
   - 用途: 型式名、検定番号、2011-03-04導入開始日CONFLICT、ボーナス/ART基本仕様
   - confidence: ANALYSIS_HIGH

8. A-SLOT 中古実機ページ
   - URL: https://www.a-slot.com/SHOP/sankyo34.html
   - 用途: ART初当たり設定別単独値の補助
   - confidence: ANALYSIS_SINGLE

## nextRelayHint

- recordCountは本レコード追加後 **557**。
- chronologicalFrontierは主値ベースで **2011-03-07**。
- 2011-03-07同日群の未処理候補を継続監査する。
- LATEST_HANDOFFで既知の次候補は **「テンションブースター」「残機尽きるまで私は戦う」「パチスロ『モンキーターン』」**。
- repo重複を先に確認し、同日群の最古未登録機を次件とする。
- HAZUSEの本機3/4日付はCONFLICTとして保持済みのため、3/4を根拠に別重複レコードを作らない。
