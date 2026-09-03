# ロケットパニック

machineName: ロケットパニック
manufacturer: JPS
releaseDate: 2010-10-04
releaseDateStatus: NATIONWIDE_SIMULTANEOUS_DATE_CONFIRMED_WITH_EARLIER_MONTH_METADATA
releaseDateNote: K-Naviの2010年10月導入カレンダーが全国一斉導入開始日2010-10-04を明記。P-WORLDと5号機クロニクルは2010年09月（月粒度）を掲載するため、全国一斉導入日と先行地域/月粒度メタデータを分離して保持し、平均化しない。
regionalEarlierIntroduction: 2010-09 (P-WORLD / 5号機クロニクル month-level)
generation: 5号機
systemType: A+ART / ボーナス契機ART
formalModelName: ロケットパニック2
inspectionNumber: 9S1020
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線実レコードを再取得して開始。
- 開始時正本は recordCount 516 / chronologicalFrontier 2010-10-04 / latestMachineAdded ビッグシオV。
- LATEST_HANDOFF指定の2010-10-04同日群を継続し、repo検索で本機が未登録であることを確認。
- K-Navi全国一斉導入開始日は2010-10-04。P-WORLD/5号機クロニクルの2010年09月は月粒度のため別フィールドで保持。
- 同日群のパチスロピンポンは既に515件目として登録済みのため重複追加しない。

## payoutRateBySetting

- 設定1: **96.5%**
- 設定2: **98.8%**
- 設定3: **100.2%**
- 設定4: **103.5%**
- 設定5: **106.8%**
- 設定6: **110.2%**

パチマガスロマガ、P-WORLD、5号機クロニクル、実機保存販売資料で一致。
confidence: MULTI_SOURCE_HIGH

## initialHitBySetting

### パニックボーナス（PB）
- 設定1: **1/341.3**
- 設定2: **1/321.3**
- 設定3: **1/334.4**
- 設定4: **1/315.1**
- 設定5: **1/327.7**
- 設定6: **1/309.1**

### チャレンジボーナス（CB）
- 設定1: **1/150.3**
- 設定2: **1/154.6**
- 設定3: **1/148.9**
- 設定4: **1/153.1**
- 設定5: **1/147.6**
- 設定6: **1/151.7**

### ボーナス合算
- 設定1: **1/104.4**
- 設定2: **1/104.4**
- 設定3: **1/103.0**
- 設定4: **1/103.0**
- 設定5: **1/101.8**
- 設定6: **1/101.8**

注: 現存パチマガスロマガページはCB設定3を「1/248.9」と表示するが、同ページの合算1/103.0と整合せず、実機保存販売資料は1/148.9。内部整合性と別資料照合から**1/148.9を採用し、現存ページ誤記疑い**としてCONFLICT欄へ保持する。
confidence: MULTI_SOURCE_HIGH_WITH_SOURCE_TYPO_NOTE

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「ロケットパニック」「50枚 / 1000円 / 千円 / ベース / コイン持ち / 通常時小役」を組み替え、P-WORLD、パチマガスロマガ、後年5号機DB、実機保存資料を再探索したが、比較可能な本機固有の直接値を確定できなかった。
confidence: UNVERIFIED

## netIncrease

- ART「パニックモード」: **1セット20G / 40G / 80G**
- ART純増: **約+1.8枚/G**（パチマガスロマガ） / **約+1.9枚/G**（P-WORLD）
- 1回のART当選で平均5セット、最大14セット+α期待という後年P-WORLD記載あり

純増は資料間で0.1枚/G差があるため平均せず `CONFLICT: +1.8 / +1.9枚/G` として保持。
confidence: CONFLICT_LOW_MAGNITUDE_MULTI_SOURCE

## basicPayout

- パニックボーナス（PB）: **最大約54枚**
- チャレンジボーナス（CB）: **最大約48枚**

confidence: MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- 通常時はART突入期待度に関係する内部モードを持ち、P-WORLDは超高確中のボーナスがART突入の大チャンスと記載。
- PB中は小役予想ミニゲームの正解率に応じてART抽選。チェリー成立時はART確定とP-WORLDが記載。
- CB後半4Gは3択押し順当てでART抽選。超高確滞在時のCBは1回正解でART獲得と現存解析に記載。
- ART「パニックモード」は20/40/80G、押し順ナビ型。
- ボーナス後/ART終了後に「パニックチャンス」へ移行する場合があり、2択成功でART復活。
- **ボーナス20回連続ART非突入で天井ART**。
confidence: CONTEMPORARY_ANALYSIS_AND_DATABASE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。現存パチマガスロマガ機種ページに「朝イチ・設定変更」専用解析項目が存在することは確認できるが、その詳細本文を現存クロールから回収できなかった。設定変更時の20回天井進捗、通常/高確/超高確等の内部モード、ARTストック/潜伏/CZのclear/retainは一般論で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のボーナス20回連続ART非突入回数、内部モード、ARTストック/潜伏、パニックチャンス状態の直接資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の20回天井進捗、内部モード、ART関連状態、液晶/ランプ初期化を本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_TO_FIXED_GAME_COUNT_CEILING / BONUS_COUNT_CEILING_PRESENT**。通常G数到達型の固定ゲーム数天井ではなく、公開解析で確認できる救済条件は**ボーナス20回連続ART非突入**。この回数が設定変更時にclear/retainされるかは未確認。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常救済はボーナス20回連続ART非突入。設定変更専用の短縮条件、回数クリア/引継ぎ、朝一専用天井値は直接根拠を回収できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時にART期待度へ影響する内部モードが存在するが、設定変更後の初期モード振り分け・公開数値は未確認。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/超高確、ARTストック、潜伏、パニックチャンス等の設定変更/据え置き/電断時処理は直接資料未回収。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用の短縮天井、ART確定、高確優遇等を直接確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更による20回天井進捗消去等を直接確認できず、推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ランプ/液晶状態等による本機固有の確定/高信頼判別挙動を再探索したが確定できず。

numericResetData:
- normalRescueCondition: **ボーナス20回連続ART非突入で天井ART**
- settingChangeBonusCountProgress: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- publishedResetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- morningARTProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

- 導入時期: K-Naviは全国一斉導入開始 **2010-10-04**。P-WORLD/5号機クロニクルは **2010年09月**（月粒度）。全国一斉導入基準と先行地域/月粒度メタデータの可能性を分離して保持。
- ART純増: パチマガスロマガ **約+1.8枚/G**、P-WORLD **約+1.9枚/G**。平均化せずCONFLICT保持。
- CB設定3: 現存パチマガスロマガページ **1/248.9** は同ページ合算値と不整合。別保存資料は **1/148.9** で合算と整合するため採用値は1/148.9、元ページ値は誤記疑いとして保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChange時のボーナス20回天井進捗clear/retain: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior / purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset後内部モード振り分け・朝一公開数値: UNVERIFIED_AFTER_RESEARCH
- ARTストック/潜伏/CZ等の設定変更時処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection（ガックン/初期出目/ランプ等）: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi「2010年10月新台導入カレンダー」 — ロケットパニック全国一斉導入開始2010-10-04、地域により導入日前後の注記
   - https://p-kn.com/calendar/201010/
   - confidence: CONTEMPORARY_CALENDAR_HIGH
2. パチマガスロマガ公式「ロケットパニック 基本システム」 — ART約+1.8枚/G、20/40/80G、ボーナス20回連続ART非突入で天井ART、PB/CB概要
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/23/a.php
   - confidence: CONTEMPORARY_ANALYSIS_HIGH
3. パチマガスロマガ公式「ロケットパニック ボーナス抽選確率/PAYOUT」 — 設定別PB/CB/合算・機械割
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/23/h.php
   - confidence: CONTEMPORARY_ANALYSIS_HIGH_WITH_CB_SETTING3_TYPO
4. P-WORLD「ロケットパニック」 — JPS、5号機ART、型式ロケットパニック2、検定番号9S1020、ART20/40/80G・約+1.9枚/G、PB約54枚/CB約48枚、内部モード概要、2010年09月導入月メタデータ
   - https://www.p-world.co.jp/machine/database/6078
   - confidence: DATABASE_HIGH
5. 5号機クロニクル「JPS 5号機全機種一覧」 — 2010/9、設定別機械割96.5〜110.2%
   - https://5goki.com/jps
   - confidence: RETROSPECTIVE_DATABASE_MEDIUM
6. ホームスロット「JPS ロケットパニック 中古パチスロ実機」 — 設定別PB/CB/合算/機械割。CB設定3=1/148.9で合算値と整合
   - https://home-slot.net/SHOP/s-jps22.html
   - confidence: ARCHIVED_SPEC_SECONDARY_MEDIUM
7. パチスロ業界2010資料保存ページ — ロケットパニック、PB 1/341〜1/309、RB/CB 1/150〜1/151、合算1/104〜1/101、出率96.5〜110.2%
   - https://paperzz.com/doc/5546047/2010
   - confidence: ARCHIVED_INDUSTRY_TABLE_MEDIUM
