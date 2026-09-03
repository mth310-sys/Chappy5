# パチスロ BLOOD+

machineName: パチスロ BLOOD+
manufacturer: タイヨーエレック
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-02-15
generation: 5号機
systemType: A+ART / ボーナス+RT/CZ+ART
coreStatus: COMPLETE_CORE_WITH_RESET_PARTIAL_AND_CONFLICT

## chronologyNote

- 最新main 449件 / chronologicalFrontier 2010-02-08 から継続。
- 2010-02-08同日群および2/09〜2/14境界を再監査。『続・お見事！サブちゃん』『ノーマルだよ！サブちゃん』は2/8前後の「発表」で、導入日とは扱わない。
- K-Naviがホール導入開始日を **2010-02-15** と明記し、2010-02-13の当時実戦系記事も2/15導入開始として整合。P-WORLD/回顧資料は2010年2月機として一致。
- repo検索で `BLOOD+` の既存レコードなしを確認して450件目として追加。
- 2016年の後継『パチスロ BLOOD+ 二人の女王』およびCRパチンコ版は別機種のため数値を転用していない。

## payoutRateBySetting

### 複数解析資料一致系列
- 設定1: **96.8%**
- 設定2: **98.7%**
- 設定3: **101.2%**
- 設定4: **104.0%**
- 設定5: **110.0%**
- 設定6: **110.3%**

K-Navi / CrankySeven / A-SLOTで一致。

### P-WORLD掲載系列
- 設定1: **96.8%**
- 設定2: **98.7%**
- 設定3: **100.7%**
- 設定4: **103.8%**
- 設定5: **110.0%**
- 設定6: **110.3%**

設定3・4が他系列と異なる。算出条件差または掲載差を確定できないため平均せず `CONFLICT` として双方を保持。

confidence: CONFLICT / MULTI_SOURCE

## initialHitBySetting

### BIG合算（SAYA BIG + DIVA BIG）
- 設定1: **1/404.5**
- 設定2: **1/399.6**
- 設定3: **1/394.8**
- 設定4: **1/390.1**
- 設定5: **1/385.5**
- 設定6: **1/381.0**

### REG（HAGI BONUS）
- 設定1: **1/712.3**
- 設定2: **1/697.2**
- 設定3: **1/682.7**
- 設定4: **1/668.7**
- 設定5: **1/655.4**
- 設定6: **1/642.5**

### ボーナス合算
- 設定1: **1/258.0**
- 設定2: **1/254.0**
- 設定3: **1/250.1**
- 設定4: **1/246.4**
- 設定5: **1/242.7**
- 設定6: **1/239.2**

K-Navi / CrankySeven / A-SLOTで照合。

### ART初当たり
- 設定別の比較可能な総合ART初当たり確率は、表記・検索語・資料系統を変えて再探索したが今回安全に確定できず `UNVERIFIED_AFTER_RESEARCH`。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED_FOR_BONUS

## baseGamesPer50

CrankySeven掲載の設定別50枚あたりゲーム数:
- 設定1: **33.0G**
- 設定2: **33.2G**
- 設定3: **33.3G**
- 設定4: **33.5G**
- 設定5: **33.6G**
- 設定6: **33.8G**

同資料の概算「1000円あたり約33.5G」と整合。小役確率から逆算せず直接掲載値を採用。

confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

- ART「BLOOD CHANCE+」: **約+1.0枚/G** — P-WORLD / CrankySeven / A-SLOT / 回顧資料で一致。
- RT/CZ「BLOOD CHANCE」: **約+0.2〜+0.3枚/G**。K-Navi約+0.2、P-WORLD約+0.25、CrankySeven約+0.3と丸め/表記差があるため単一値へ平均しない。

物差し用の出玉主軸純増はARTの **+1.0枚/G** を採用。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED_ART; CONFLICT_ROUNDING_FOR_RT

## basicPayout

- BIG: **約256枚**
- REG: **約55枚**

P-WORLD / CrankySeven / A-SLOTで整合。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## modeSpecificMinimumData

- ART「BLOOD CHANCE+」は基本 **1セット50G以上**、純増約+1.0枚/G。公開資料では最大1000G級の継続性能が確認される。
- 通常時に低確/高確の内部状態があり、ART関連抽選に影響する。
- ボーナス間 **1000G** 消化で天井状態へ到達し、その後のボーナスを契機にARTが確定/優遇される。
- 天井後BIG: ART **50G / 100G / 300G** のいずれか。
- 天井後REG: 一般設定では **1000G ARTが50%**。残りは短いART側。設定6のみ例外的に1000G選択が大きく抑えられる旨の解析があるが、完全振分は本DBの対象外。
- ゲーム数解除型の通常モード全テーブルは物差しDB対象外。朝一専用モードの公開情報も確認できない。

confidence: ANALYSIS_HIGH / MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **CEILING_COUNTER_RESET_AND_HIGH_STATE_START_CONFIRMED_ANALYSIS**。本機固有解析で、設定変更時は「天井までのゲーム数がクリアされる」「高確率状態からスタートする」と確認。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。`据え置き / 宵越し / 天井 / 前日ゲーム数 / BLOOD+ / タイヨーエレック`を組み替えて探索したが、2010年初代機について据え置き時の天井カウンタ・内部状態を直接明記する高信頼資料を今回確定できず。設定変更時リセットの逆から推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみで天井カウンタ/低高状態/RT・ART状態がどう処理されるか、初代機固有の直接根拠を確定できない。

gameCounterReset: **RESET_ON_SETTING_CHANGE_CONFIRMED**。ボーナス間1000G天井への進捗は設定変更でクリア。

ceilingAfterReset: **NORMAL_1000G_FROM_RESET_NO_SHORTENING_CONFIRMED**。設定変更でカウンタがクリアされ、通常のボーナス間1000G天井を再び目指す。設定変更専用の短縮天井数値は確認されない。

modeAfterReset: **NO_RESET_SPECIFIC_GAME_COUNT_MODE_CONFIRMED**。朝一専用のゲーム数解除モード/モード振分は確認できず。低確/高確は `stateAfterReset` として区別。

stateAfterReset: **HIGH_STATE_START_CONFIRMED_ANALYSIS**。設定変更後は高確率状態から開始。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **HIGH_STATE_START_CONFIRMED**。設定変更後は高確スタートするため、朝一のART関連抽選上の恩恵となり得る。具体的な朝一当選率は公開値を確定できないため数値化しない。

resetPenalties: **CEILING_PROGRESS_LOST_CONFIRMED**。設定変更で前日までの1000G天井進捗が消失する。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / 朝一 / 設定変更判別 / 据え置き判別`まで検索語を拡張したが、2010年初代BLOOD+固有の高信頼な変更判別手段を確定できなかった。2016年後継機情報は流用しない。

numericResetData:
  normalCeilingGames: **1000G_BONUS_INTERVAL**
  resetSpecificCeiling: **NONE_CONFIRMED; NORMAL_1000G_FROM_ZERO**
  publishedResetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetStateDistribution: **HIGH_STATE_START_CONFIRMED_BUT_RATE_NOT_PUBLISHED**
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_VERIFIED_WITH_DIRECT_SETTING_CHANGE_EVIDENCE

## conflicts

1. **機械割**: K-Navi / CrankySeven / A-SLOT `96.8 / 98.7 / 101.2 / 104.0 / 110.0 / 110.3%` に対し、P-WORLDは設定3・4を `100.7 / 103.8%` と掲載。平均せず双方保持。
2. **RT/CZ純増**: K-Navi約+0.2枚/G、P-WORLD約+0.25枚/G、CrankySeven約+0.3枚/G。丸め/定義差を解消できないため範囲化して保持し、ART主値+1.0枚/Gとは分離。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- ARTInitialHitBySetting: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning hit/benefit numeric rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「パチスロ BLOOD+」 — https://p-kn.com/slot/1133/ — ホール導入2010-02-15、設定別BIG/REG/合算、機械割、ART/RT構造 — reliability: ANALYSIS_DATABASE
2. P-WORLD「BLOOD+」 — https://www.p-world.co.jp/machine/database/5811 — 5号機ART、BIG約256枚/REG約55枚、ART約+1.0枚/G、天井仕様、機械割掲載系列 — reliability: INDUSTRY_DATABASE
3. CrankySeven「BLOOD+」 — https://crankyseven.com/blood-pc.htm — 設定別50枚ゲーム数、設定変更時の天井G数クリア＋高確スタート、天井詳細、ボーナス/ART性能 — reliability: ANALYSIS_HIGH
4. A-SLOT「BLOOD+」 — https://www.a-slot.com/SHOP/taiyo_elec7.html — 2010年2月、設定別ボーナス確率・機械割、BIG/REG獲得、ART約+1.0枚/G — reliability: RETROSPECTIVE_DATABASE
5. グリーンべると / P-WORLD業界ニュース「タイヨーエレック決算関連」 — https://news.p-world.co.jp/articles/3813/greenbelt — 2010-02-10時点でパチスロ『BLOOD＋』販売を確認 — reliability: INDUSTRY
6. 2010-02-13当時実戦系記事 — https://mezase20.com/blog-entry-263.html — 2/15導入開始、1000G天井とART純増約+1.0枚/Gの当時記録 — reliability: CONTEMPORARY_SECONDARY
7. パチマガスロマガ回顧「BLOOD+」 — https://pachimaga.com/free/special/5d0ce1846a4dd77fda2a273e83a2164685982e8c.php — 2010年2月、ART最低50G〜最大1000G、純増約+1.0枚/G、設定5/6が110%超 — reliability: RETROSPECTIVE_ANALYSIS_HIGH

## evidencePolicy

- 2010年初代と2016年後継、CRパチンコ版を明確に分離。
- 導入日はK-Naviの具体日を主値とし、同時代2/13記事の2/15導入記載で補強。
- 機械割の設定3・4は複数資料一致系列とP-WORLD掲載値が競合するため平均しない。
- 設定変更挙動はCrankySevenの本機固有直接記述を採用。そこから据え置き/電源OFF→ONを逆推定せず、直接根拠がない項目はUNVERIFIEDを維持。
- 物差し目的を守り、通常時の全状態移行率・ART中詳細振分・特化抽選は収集しない。
