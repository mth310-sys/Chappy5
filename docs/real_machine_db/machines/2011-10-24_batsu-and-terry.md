# バツ＆テリー

machineName: バツ＆テリー
aliases: バツ&テリー / バツアンドテリー
manufacturer: バルテック
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-10-24
releaseDateStatus: CONFIRMED_NATIONWIDE_START_WITH_DELIVERY_DATE_DIFFERENCE

generation: 5号機
systemType: A+ART / CZ / セットストックART
coreStatus: COMPLETE_CORE_WITH_ART_INITIAL_HIT_UNVERIFIED
resetQaStatus: PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ラーゼフォン」を確認して開始。
- 開始時正本は recordCount 612 / chronologicalFrontier 2011-10-17。
- 想定実パス `docs/real_machine_db/machines/2011-10-24_batsu-and-terry.md` を直接fetchして404を確認し、未登録と判断。
- K-Navi 2011年10月導入カレンダーは全国一斉導入開始日を **2011-10-24** と掲載。
- 当時グリーンべるとは **2011-10-23から納品** と掲載。日付定義差のため平均せず、releaseDateは全国一斉導入日の2011-10-24、納品開始日は補助情報として保持。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.1% |
| 2 | 98.7% |
| 3 | 101.9% |
| 4 | 104.6% |
| 5 | 108.5% |
| 6 | 112.7% |

- Cranky7解析ページで全設定値を取得。
- 後年A-SLOT掲載表も同じ系列（設定4合算のみ 1/210.1 表示）を掲載しており、機械割系列を別系統で照合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### ボーナス

| 設定 | BIG合成 | REG | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/399.6 | 1/528.5 | 1/227.6 |
| 2 | 1/390.1 | 1/512.0 | 1/221.4 |
| 3 | 1/381.0 | 1/496.5 | 1/215.6 |
| 4 | 1/372.4 | 1/481.9 | 1/210.0〜210.1 |
| 5 | 1/360.1 | 1/468.1 | 1/203.5 |
| 6 | 1/348.6 | 1/455.1 | 1/197.4 |

- Cranky7で全設定BIG/REG/合算を取得。
- グリーンべると当時記事はボーナス合成1/227.6（設定1）〜1/197.4（設定6）を掲載し端点一致。
- 設定4ボーナス合成はCranky7 1/210.0、A-SLOT掲載表 1/210.1。平均せず丸め差候補として範囲保持。

### ART初当たり

- **UNVERIFIED_AFTER_RESEARCH**。
- `バツ＆テリー / バツ&テリー / バツアンドテリー / バルテック / バツテリーラッシュ / ART初当たり / ART初当り / 設定差` を組み替え、P-WORLD、パチマガスロマガ、Cranky7、当時業界記事、後年DBを横断したが、比較可能な設定別ART初当たり直接値を確定できず。

confidence: ANALYSIS_HIGH_FOR_BONUS / UNVERIFIED_AFTER_RESEARCH_FOR_ART_INITIAL_HIT

## baseGamesPer50

- **32.0G/50枚（1000円）**、全設定共通。
- Cranky7解析ページに直接掲載。
confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

- ART「バツテリーラッシュ」: **約+1.4枚/G**。
- 1セット **30G**。
- グリーンべると、P-WORLD、パチマガスロマガ、Cranky7で一致。
confidence: INDUSTRY_AND_DATABASE_HIGH_CROSSCHECKED

## basicPayout

- BIG: **約207枚**（275枚超払い出しで終了）。
- REG: **約54枚**（71枚超払い出しで終了）。
- グリーンべると、P-WORLD、パチマガスロマガ、Cranky7で一致。
confidence: INDUSTRY_AND_DATABASE_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は低確/高確の内部状態が存在。
- ART「バツテリーラッシュ」は1セット30G、約+1.4枚/Gのセットストック式。
- 2段階CZ「バツテリーミッション」→「バツテリーチャンス」を搭載。
- 上乗せ専用状態「バツテリーラッシュビート」は7G×最大7セット、最大49G。
- 天井: **ボーナス後1200GでART突入**。P-WORLDは天井到達時 **5〜15セットのART** と掲載。
- 通常時のリプレイ5連続成立でもART当選。

## resetBehavior — v0.7

settingChangeBehavior: **HIGH_STATE_LOTTERY_CONFIRMED / CEILING_COUNTER_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH**。P-WORLDとCranky7で、設定変更後に高確移行抽選が行われることを確認。設定変更時にボーナス後1200G天井カウンタがCLEAR/RETAINされるかは本機固有の直接記載を確定できず、一般的な5号機ART機の挙動から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1200G天井進捗、低確/高確状態、CZ/ART関連状態の引継ぎを直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の天井進捗・内部状態・表示状態について本機固有資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井がボーナス後1200Gであることは確定しているが、設定変更時CLEAR/RETAINは直接根拠なし。

ceilingAfterReset: **NO_RESET_SPECIFIC_SHORTENING_CONFIRMED_AFTER_RESEARCH / COUNTER_ORIGIN_UNVERIFIED**。1200G通常天井は確定。設定変更専用の短縮天井・変更値は、表記揺れとリセット/朝一/据え置き検索を重ねても確認できず。ただし「設定変更後も1200G」と断定できる直接資料もないため、設定変更時の天井起点はUNVERIFIED。

modeAfterReset: **HIGH_STATE_LOTTERY_CONFIRMED**。設定変更後の高確移行率が公開されている。本機で朝一専用モードの存在は確認できず。

stateAfterReset: **HIGH_STATE_LOTTERY_CONFIRMED**。設定変更後、高確へ移行する確率は設定1=33.3%、設定2=33.3%、設定3=50.0%、設定4=50.0%、設定5=66.7%、設定6=66.7%。P-WORLDは33.3〜66.7%、Cranky7は全設定の数値を掲載。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **HIGH_STATE_START_CHANCE_CONFIRMED**。設定変更後は設定に応じて33.3〜66.7%で高確移行。朝一専用短縮天井、専用ART/CZ当選率、追加ストック等は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH / CEILING_PROGRESS_EFFECT_UNVERIFIED**。設定変更で前日の天井進捗が失われるかを直接確定できないため、ペナルティとして断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`バツ＆テリー / バツ&テリー / バツアンドテリー / バルテック / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / リール / 出目 / 液晶` を組み替えて探索したが、本機固有のガックン、初期出目、液晶、ランプ等による変更判別を直接確定できず。

numericResetData:
- 設定変更後の高確移行率: 設定1 33.3% / 設定2 33.3% / 設定3 50.0% / 設定4 50.0% / 設定5 66.7% / 設定6 66.7%
- 通常天井: ボーナス後1200G
- 天井恩恵: ART突入、P-WORLDでは5〜15セット
- 設定変更専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一特定G以内ART/CZ当選率: NONE_CONFIRMED_AFTER_RESEARCH
- ガックン等変更判別数値: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: DATABASE_HIGH_FOR_SETTING_CHANGE_HIGH_STATE_LOTTERY_AND_NUMERIC_RATE / UNVERIFIED_AFTER_RESEARCH_FOR_CEILING_COUNTER_CARRYOVER_POWER_CYCLE_AND_RESET_DETECTION

## conflicts

1. **導入日の定義差**
   - グリーンべると: 2011-10-23から納品。
   - K-Navi: 2011-10-24全国一斉導入開始。
   - releaseDateはホール導入基準で2011-10-24、納品日は補助情報として分離保持。
2. **設定4ボーナス合成の丸め差**
   - Cranky7: 1/210.0。
   - A-SLOT掲載表: 1/210.1。
   - 平均せず 1/210.0〜210.1 として保持。
3. **後年AI生成系ページの世代誤記**
   - パチ図鑑2026年ページは本機を「6号機」と誤記しつつP-WORLD由来の5号機性能値を併記しているため、世代・resetBehaviorの根拠には採用しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- ART initialHitBySetting: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset on setting change: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-05**

1. グリーンべると — 2段階チャンスゾーンでART突入の期待感アップ
   - https://web-greenbelt.jp/00002209/
   - 2011-08-25記事。バルテック製、ART 30G・約+1.4枚/G、BIG約207枚、RB約54枚、ボーナス合算設定1〜6端点、2011-10-23納品開始。
   - reliability: INDUSTRY
2. K-Navi — 2011年10月新台導入カレンダー
   - https://p-kn.com/calendar/201110/
   - 2011-10-24全国一斉導入開始。10/24同日群にバツ＆テリーと押忍！番長2を掲載。
   - reliability: ANALYSIS_DATABASE
3. P-WORLD — バツ&テリー
   - https://www.p-world.co.jp/machine/database/6478
   - 5号機ART/CZ、BIG207枚、REG54枚、ART30G・約+1.4枚/G、1200G天井、天井恩恵5〜15セット、設定変更後33.3〜66.7%高確移行。
   - reliability: DATABASE_HIGH
4. パチマガスロマガ — バツ&テリー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/55/a.php
   - ART約+1.4枚/G・30G、BIG約207枚、REG約54枚、CZ構造。
   - reliability: ANALYSIS_HIGH
5. Cranky7 — バツ＆テリー 解析攻略
   - https://crankyseven.com/battery-pc.htm
   - 32.0G/50枚、設定別機械割、BIG/REG/ボーナス合算、1200G天井、設定変更後の高確移行率33.3/33.3/50.0/50.0/66.7/66.7%。
   - reliability: ANALYSIS_SINGLE_DETAILED
6. A-SLOT — 後年掲載表（検索結果内に旧バツ&テリー表）
   - https://www.a-slot.com/SHOP/baltec201.html
   - 機械割系列とボーナス合算系列の照合用。本文は別機種ページに旧機種表が混在するため補助照合に限定。
   - reliability: RETROSPECTIVE_AUXILIARY
