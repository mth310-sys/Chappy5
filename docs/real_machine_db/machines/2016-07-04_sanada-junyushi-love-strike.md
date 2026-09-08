machineName: 真田純勇士～ラブストライク～
manufacturer: EXCITE（ニューギングループ）
releaseDate: 2016-07-04
recordNumber: 995
generation: 5号機 / 5.5号機期
systemType: A+ART / 周期抽選 / CZ搭載
formalModelName: 真田純勇士～ラブストライク～X
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESEARCH_EXHAUSTED

## identity
- P-WORLDはメーカーをエキサイト、5号機ART/CZ/天井搭載機として掲載。
- 当時P-Summa等は導入予定日2016-07-04、メーカーEXCITE、A+ARTとして掲載。
- 一方、2016-06-22のグリーンべるとは「納品7月10日予定」と報道しており、導入予定日7/4資料と物流開始予定7/10資料が競合する。実導入カレンダー上の時系列キューでは2016-07-04をcanonicalとし、7/10納品予定をCONFLICTとして保持。
- 実機流通資料で末尾X表記を確認したため formalModelName は `真田純勇士～ラブストライク～X` とする。検定番号は表記揺れ/型式/EXCITE/ニューギン/検定番号/6S系まで再探索したが高信頼固定できずUNVERIFIED。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 99.0% |
| 3 | 100.7% |
| 4 | 103.6% |
| 5 | 107.2% |
| 6 | 111.0% |
- 複数解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ART初当たり | CZ突入率 |
|---:|---:|---:|---:|---:|
| 1 | 1/399.6 | 1/799.2 | 1/392 | 1/856 |
| 2 | 1/394.8 | 1/780.2 | 1/388 | 1/847 |
| 3 | 1/376.6 | 1/762.0 | 1/360 | 1/744 |
| 4 | 1/360.1 | 1/712.3 | 1/341 | 1/688 |
| 5 | 1/337.8 | 1/697.2 | 1/304 | 1/607 |
| 6 | 1/318.1 | 1/697.2 | 1/288 | 1/554 |
- ART初当たりを主要初当たりとして保持。周期型ARTへの導線としてCZが重要なため、mission v0.7の最低追加データとしてCZも併記。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約34G/50枚**。
- 当時P-Summaと複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「常夏の陣」「バナナスプラッシュ」: **約1.3枚/G**。
- グリーンべると当時業界記事、P-WORLD、複数解析で一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG: **約180枚**。
- REG: **40枚**。
- ART「常夏の陣」: 初回最低 **30G**（P-WORLD掲載）。
- ART「バナナスプラッシュ」: **1セット30G**。
reliability: INDUSTRY_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は約32～34Gを1周期とする周期管理型。
- ボーナス・ART間 **25周期（約850G）到達でART当選**が天井。
- ART当選でも天井進捗はリセットされる通常仕様として当時解析に記載。
- 周期の内部低確/高確、全ポイント抽選等の詳細テーブルは実機完全再現用なので本DBでは収録しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 当時解析「設定変更詳細」は **周期関係 調査中 / 状態移行 調査中** と明記。
- 同ページには「おそらく天井関連は全てリセット」とあるが、推測表現のためcanonical挙動には採用しない。
- 別系統の解析でも朝一リセット/設定変更後挙動は調査中とされており、設定変更時の周期・天井・状態処理を直接固定できない。
- よって **UNVERIFIED_AFTER_RESEARCH**。一般的5号機ART論から補完しない。

### carryOverBehavior
- 据え置き時の25周期天井進捗、周期番号、内部低確/高確状態の翌営業引継ぎについて、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 当時記事に宵越し狙いへの言及はあるが、設定変更/据え置き契約を確定させる直接表ではないため、引継ぎ確定には格上げしない。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の周期・天井・内部状態処理を本機固有資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更と純電断を同一挙動として推定しない。

### gameCounterReset
- 設定変更時: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 純電断時: **UNVERIFIED_AFTER_RESEARCH**。
- 通常天井自体はボーナス/ART間25周期（約850G）で確定。

### ceilingAfterReset
- 設定変更専用の短縮天井・周期数変更は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 「設定変更で天井関連全リセット」とする推測記事はあるが、解析確定値でないため採用しない。

### modeAfterReset
- 周期ごとの内部低確/高確は存在するが、設定変更時の再抽選/引継ぎや朝一専用振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時高確周期スタートの可能性に言及する記事は推測止まりのため、数値/恩恵として採用しない。

### stateAfterReset
- 内部低確/高確状態の設定変更・据え置き・純電断契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 公開確定したリセット専用高確移行、周期短縮、特定G以内当選率、CZ/ART優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 公開確定した設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日天井進捗消失を推定で不利扱いしない。

### resetDetection
- 機種名/末尾X/EXCITE/ニューギン/設定変更/リセット/朝一/据え置き/電源OFF ON/周期/天井/状態/ガックンを組み替えて再探索。
- 本機固有のガックン、初期出目、液晶周期表示等による確定的な設定変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 液晶右の周期数表示は通常時の天井進捗確認に使えるが、設定変更判別契約そのものは未固定。

### numericResetData
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時高確周期スタート率: **UNVERIFIED_AFTER_RESEARCH**。
- 短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 性能コアはP-WORLD、当時業界記事、複数解析で一致しCOMPLETE_CORE相当。
- resetBehaviorは探索不足ではなく、当時資料自身が設定変更周期/状態を「調査中」としているためPARTIAL_RESEARCH_EXHAUSTED。
- 推測文「おそらく天井関連は全リセット」はミッションの不明値推測禁止に従いcanonicalへ採用しない。
- 導入日は7/4予定資料と7/10納品予定業界記事を平均せずCONFLICT保持。

## sources
取得日: 2026-09-08

1. P-WORLD — 真田純勇士～ラブストライク～
   - https://www.p-world.co.jp/machine/database/8055
   - メーカーEXCITE、5号機ART/CZ/天井、純増約1.3枚/G、BIG約180枚、REG40枚、常夏の陣初回最低30G、バナナスプラッシュ30G。
   - reliability: INDUSTRY_DATABASE
2. グリーンべると / P-WORLD業界ニュース — 2016-06-22
   - https://news.p-world.co.jp/articles/8470/greenbelt
   - EXCITEブランド、A+ART、純増約1.3枚/G、BB約180枚/RB40枚、約32G周期、7/10納品予定。
   - reliability: INDUSTRY
3. グリーンべると — 同記事
   - https://web-greenbelt.jp/00008752/
   - 上記の業界一次系再掲。
   - reliability: INDUSTRY
4. P-Summa — 2016-06-08
   - https://psumma.jp/pachislo/23167/
   - 7/4導入予定、EXCITE、A+ART、約34G/50枚、純増1.3枚/G。
   - reliability: PERIOD_SECONDARY
5. Pacnk — 真田純勇士ラブストライク設定判別
   - https://pacnk.com/slot/tools/sh_sanadajunyushirabusutoraiku.html
   - 設定別ART/CZ/BIG/REG/機械割の全表。
   - reliability: ANALYSIS_HIGH
6. 必勝期待値クマぱぱ — 真田純勇士ラブストライク
   - https://xn--x9ja8p0go69l5jtgfm.com/sanadajyunyushi-love-2420
   - 設定別BIG/REG/ART/機械割、約34G/50枚、天井25周期約850G、設定変更詳細「周期関係調査中・状態移行調査中」。
   - reliability: PERIOD_ANALYSIS
7. 江戸スロ — 実機流通
   - https://edoslot.net/SHOP/sanadajunnyuusirabusutoraiku.html
   - `真田純勇士～ラブストライク～X` の末尾X表記。
   - reliability: OLD_MACHINE_MARKET_REFERENCE
8. A-SLOT実機販売
   - https://www.a-slot.com/SHOP/excite16.html
   - EXCITE、2016年7月導入開始、5号機、A+ART、純増約1.3枚/G。
   - reliability: OLD_MACHINE_MARKET_REFERENCE

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehaviorの周期/天井契約: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehaviorの内部状態契約: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset固有数値: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `CONFLICT_RELEASE_DATE_0704_VS_DELIVERY_0710`: 複数解析/導入予定資料は2016-07-04、当時グリーンべるとは7/10納品予定。canonical=2016-07-04、7/10は物流開始予定として保持。
- 設定変更で天井関連全リセットという記述は推測であり、確定解析と競合する値ではない。canonicalはUNVERIFIED_AFTER_RESEARCH。

## QA note
- 07/04群境界監査で未登録を検出して遡及追加。
- 新規時点からresetBehavior v0.7を収録。
- 性能コアを再現過多にせず、周期内全抽選テーブル等は収録対象外。
