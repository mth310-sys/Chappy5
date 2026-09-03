# じゃりン子チエ 雷蔵伝説

machineName: じゃりン子チエ 雷蔵伝説
manufacturer: バルテック / BALTEC
generation: 5号機
releaseDate: 2011-01-24
releaseDateStatus: HIGH_CONFIDENCE_WITH_DATE_CONFLICT
releaseDateNote: K-Navi、パチ＆スロ必勝本、Pマート/P-SENSOR系が2011-01-24をホール導入日として一致。HAZUSEは2011-01-21を導入開始日として掲載するため日付差をCONFLICTとして保持。2010-12-06の業界発表では「翌年1月下旬予定」であり1/24主値と整合する。
systemType: A+ART / 押し順ART / セットストック / 引き戻しCZ / 2種天井
formalModelName: ジャリンコチエ2
inspectionNumber: 0S0992
aliases: じゃりン子チエ～雷蔵伝説～ / じゃりン子チエ雷蔵伝説 / ジャリンコチエ2
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、538「燃えよ!功夫大戦」、539「凄忍」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 539 / chronologicalFrontier 2011-01-24。
- LATEST_HANDOFFで2011-01-24同日群の次候補として明示された本機をrepo検索し、既存レコードなしを確認して540件目として追加。
- chronologicalFrontierは同日群継続のため2011-01-24を維持。
- バルテック公式製品ページ、日電協新機種情報、当時プレイグラフ転載、K-Navi、P-WORLD、パチ＆スロ必勝本、HAZUSE、旧解析サイトを横断。

## payoutRateBySetting

### 主系列（K-Navi / P-WORLD / パチ＆スロ必勝本 / 5号機クロニクル）
- 設定1: **97.1%**
- 設定2: **99.0%**
- 設定3: **100.3%**
- 設定4: **104.6%**
- 設定5: **106.2%**
- 設定6: **111.0%**

### 競合値
- 旧解析「パチスロ立ち回り講座 / CrankySeven」: 設定6のみ **110.0%**

設定1〜5は一致、設定6のみ110.0% / 111.0%で差があるため平均せず **CONFLICT** として保持。主値は複数独立系で一致する111.0%。
confidence: ANALYSIS_HIGH / CONFLICT_SETTING6

## initialHitBySetting

### ボーナス合算
- 設定1: **1/137.68**
- 設定2: **1/135.69**
- 設定3: **1/133.20**
- 設定4: **1/130.81**
- 設定5: **1/128.50**
- 設定6: **1/124.12**

K-Navi/P-WORLDの丸め値は1/137 / 1/135 / 1/133 / 1/130 / 1/128 / 1/124。

### 中段赤7「すぺしゃるボーナス」
- 設定1: **1/1985.94**
- 設定2: **1/1927.53**
- 設定3: **1/1820.44**
- 設定4: **1/1771.24**
- 設定5: **1/1638.40**
- 設定6: **1/1985.94**

### 斜め赤7「ばくだんボーナス」
- 設定1: **1/374.49**
- 設定2: **1/370.26**
- 設定3: **1/364.09**
- 設定4: **1/364.09**
- 設定5: **1/352.34**
- 設定6: **1/374.49**

### 白7「じゃりン子ボーナス」
- 設定1: **1/244.54**
- 設定2: **1/240.94**
- 設定3: **1/237.45**
- 設定4: **1/230.76**
- 設定5: **1/230.76**
- 設定6: **1/204.80**

パチ＆スロ必勝本とCrankySevenで主要確率が一致。K-Navi/P-WORLDは合算を丸め掲載。
confidence: ANALYSIS_HIGH

## baseGamesPer50

- **約33.6G / 50枚（1000円）**

CrankySevenが通常時小役確率とともに直接掲載。今回は逆算値ではなく掲載直接値として採用。
confidence: ANALYSIS_SINGLE

## netIncrease

- ART「闘猫」: **1セット30G**
- 純増: **約+1.6枚/G**
- 継続方式: **セットストック式**
- ART終了後: **起死回生モード**へ移行。規定回数（最大3回）の転落2択リプレイ回避、またはボーナス成立でART復帰条件。

K-Navi、P-WORLD、バルテック発表時の業界記事、パチ＆スロ必勝本で30G/+1.6枚/Gを照合。
confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

3種ボーナスはいずれも **79枚を超える払い出しで終了 / 純増約56枚**。

- すぺしゃるボーナス（中段赤7）: **約56枚 + ART確定**
- ばくだんボーナス（斜め赤7）: **約56枚**
- じゃりン子ボーナス（白7）: **約56枚**

confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時にはART抽選期待度の異なる **低確 / 高確** の2状態が存在。
- ART中には上乗せ期待度の異なる複数内部モードが存在するが、本DB目的上、通常時全移行テーブルやART中全モード移行率は収集対象外。
- すぺしゃるボーナス成立でART確定。ばくだん/じゃりン子ボーナスはボーナス中の条件達成でART当選。
- ART終了後は引き戻しCZ相当の「起死回生モード」へ移行。

### 天井① — ゲーム数
- **通常状態555G消化**で天井ATへ移行。
- 天井AT中は3択ベルが完全ナビされ、**次回ボーナス成立まで**継続。

### 天井② — ART非当選ボーナス回数
- P-WORLD / K-Navi / CrankySeven: **ART非当選ボーナス10回連続**で以降ART当選まで高確率状態。
- パチ＆スロ必勝本 / pacnk: **ART非当選ボーナス13回**で高確率状態、ART当選まで継続。
- 定義が同一に見えるため **10回 vs 13回 = CONFLICT**。平均化・推定統合しない。

confidence: ANALYSIS_HIGH for ceiling existence/555G; CONFLICT for bonus-count ceiling

## resetBehavior — v0.7

settingChangeBehavior: **VERIFIED_PARTIAL**。パチ＆スロ必勝本が設定変更時について「高確スタート」「天井はどちらもリセット」「ホルモン屋店内ステージスタート」と直接掲載。pacnkもゲーム数天井/ボーナス回数天井の両方リセット＋高確スタートを一致掲載。CrankySevenも天井までのゲーム数クリアを掲載。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式名/メーカー名＋「据え置き / 宵越し / 朝一 / 天井引継ぎ / 状態引継ぎ」で旧解析・DBを横断したが、据え置き時の555G進捗、ART非当選ボーナス回数、高確状態、起死回生状態の保持条件を本機固有の直接本文で確定できず。設定変更時のリセット情報から逆推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ONで555G天井、回数天井、高確状態、ART/CZ状態がどう扱われるかの本機固有資料を確定できず。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE / VERIFIED_MULTI_SOURCE**。設定変更でゲーム数天井をリセット。パチ＆スロ必勝本・pacnk・CrankySevenで照合。

ceilingAfterReset: **NORMAL_COUNTER_RESTART / NO_SHORTENED_RESET_CEILING_CONFIRMED**。設定変更専用の短縮天井は確認できず。通常555G天井をゼロから数え直す資料構成。

modeAfterReset: **NO_DEDICATED_LONG_GAME_MODE_CONFIRMED**。通常時は低確/高確の状態区分はあるが、天国等の長期ゲーム数モードは確認されない。設定変更時は高確スタートが直接確認されている。

stateAfterReset: **HIGH_PROBABILITY_STATE_START / VERIFIED_MULTI_SOURCE**。設定変更後は高確スタート。パチ＆スロ必勝本、pacnkで一致。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits:
- **高確スタート**。
- **ホルモン屋店内ステージスタート**（客側から観測可能な朝一画面情報）。
- 設定変更専用の短縮天井やART確定等は確認されず。

resetPenalties:
- **555Gゲーム数天井進捗消失**。
- **ART非当選ボーナス回数天井進捗消失**。
- 回数天井の通常到達値自体は10回/13回でCONFLICT。

resetDetection: **PARTIALLY_VERIFIED**。設定変更時に「ホルモン屋店内ステージスタート」とする直接資料あり。ただし据え置き時の開始ステージ仕様が同一条件で確認できていないため、これ単独を確定的な変更判別手段とはしない。リールガックン/初期出目等の本機固有条件は再探索しても確定できず。

numericResetData:
- normalGameCeiling: **555G通常状態消化 -> 次回ボーナスまで3択ベル完全ナビAT**
- settingChangeGameCounter: **RESET / MULTI_SOURCE**
- bonusCountCeiling: **10 consecutive ART-miss bonuses (K-Navi/P-WORLD/CrankySeven) vs 13 (Hisshobon/pacnk) / CONFLICT**
- settingChangeBonusCountCounter: **RESET / Hisshobon + pacnk**
- resetState: **HIGH_PROBABILITY_STATE / Hisshobon + pacnk**
- resetStartStage: **ホルモン屋店内ステージ / Hisshobon**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- carryOverCounter: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetDetectionNumeric: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **RESEARCHED_WITH_MULTI_SOURCE_RESET_EVIDENCE**

## conflicts

1. **機械割設定6**
   - K-Navi / P-WORLD / パチ＆スロ必勝本 / 5号機クロニクル: **111.0%**
   - CrankySeven: **110.0%**
   - 平均せずCONFLICT。主系列111.0%。

2. **ART非当選ボーナス回数天井**
   - K-Navi / P-WORLD / CrankySeven: **10回連続**
   - パチ＆スロ必勝本 / pacnk: **13回**
   - 同じ「ART非当選ボーナス連続回数」の天井説明として競合。平均せず双方を保持。

3. **導入開始日**
   - K-Navi / パチ＆スロ必勝本 / P-SENSOR系: **2011-01-24**
   - HAZUSE: **2011-01-21**
   - 日電協2010-12-06発表、当時プレイグラフ「2011年1月下旬予定」と整合するため、本DB時系列主値は1/24。1/21はCONFLICTとして保持。

## missingFields

- exact carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- exact carry-over handling of high state / ART / 起死回生 mode: UNVERIFIED_AFTER_RESEARCH
- definitive reset detection via reel gakkun / initial reel position: UNVERIFIED_AFTER_RESEARCH
- official/public ART initial-hit-by-setting table: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. バルテック公式「じゃりン子チエ 雷蔵伝説」— メーカー公式製品ページ、製品存在/正式表記。
   - https://www.baltec.co.jp/product/product10.html
   - confidence: OFFICIAL
2. 日本電動式遊技機工業協同組合「新機種情報」— 2010-12-06にバルテックが新機種を発表。
   - https://www.nichidenkyo.or.jp/newcomer/list
   - confidence: INDUSTRY_OFFICIAL
3. Pマンズ / プレイグラフ転載「ビージェイ販売が『じゃりン子チエ 雷蔵伝説』」— 2010-12-06発表会、2011年1月下旬市場導入予定、ボーナス設定1約1/137、ART30G/+1.6枚/G。
   - https://p-mans.blogspot.com/2010/
   - confidence: INDUSTRY
4. K-Navi「じゃりン子チエ 雷蔵伝説」— ホール導入2011-01-24、機械割、ボーナス合算、ART30G/+1.6枚/G、2種天井の存在。
   - https://p-kn.com/slot/1338/
   - confidence: ANALYSIS_HIGH
5. P-WORLD「じゃりン子チエ 雷蔵伝説」— 型式ジャリンコチエ2、検定0S0992、機械割97.1〜111%、ボーナス56枚、ART30G/+1.6枚/G、555G天井、回数天井10回。
   - https://www.p-world.co.jp/machine/database/6212
   - confidence: INDUSTRY_DATABASE
6. パチ＆スロ必勝本「基本スペック」— 2011-01-24導入、詳細ボーナス確率、機械割111.0%。
   - https://p.hisshobon.jp/machine/1737/1/27333
   - confidence: ANALYSIS_HIGH
7. パチ＆スロ必勝本「設定変更&天井情報」— 設定変更で高確スタート、両天井リセット、ホルモン屋店内ステージ、555G天井、回数天井13回。
   - https://p.hisshobon.jp/machine/1737/1/27337
   - confidence: ANALYSIS_HIGH
8. CrankySeven「じゃりン子チエ～雷蔵伝説～」— 50枚33.6G、詳細ボーナス確率、ART、555G/10回天井、設定変更でゲーム数クリア。設定6機械割110.0%は他系列とCONFLICT。
   - https://crankyseven.com/sp/jarinkotie-raizou-pc.htm
   - confidence: ANALYSIS_SINGLE
9. pacnk「じゃりン子チエ雷蔵伝説 設定判別ツール」— 設定変更で両天井リセット＋高確スタート、回数天井13回。
   - https://pacnk.com/slot/tools/sh_jyarinkochie.html
   - confidence: ANALYSIS_SINGLE
10. HAZUSE「じゃりン子チエ雷蔵伝説」— 検定番号0S0992、導入開始2011-01-21。1/24資料群と日付CONFLICT。
   - https://hazuse.com/machine/pachislot/0S0992/
   - confidence: ANALYSIS_DATABASE
11. 5号機クロニクル「バルテック5号機全機種一覧」— 2011/1、機械割97.1/99.0/100.3/104.6/106.2/111.0%。
   - https://5goki.com/baltec
   - confidence: RETROSPECTIVE_DATABASE
