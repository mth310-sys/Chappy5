# パチスロ「宇宙戦艦ヤマト」

machineName: パチスロ「宇宙戦艦ヤマト」
manufacturer: 山佐
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2010-04-05
generation: 5号機
systemType: A+ART / 150G周期CZ・ストックART・無限ART搭載
coreStatus: COMPLETE_CORE_RESET_HIGH_VALUE_PAYOUT_CONFLICT_FORMAL_IDENTITY_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直近471「スーパーマジカルセブン」を再取得し、recordCount 471 / chronologicalFrontier 2010-04-05 を正本として継続。
- LATEST_HANDOFFで本機が2010-04-05同日群の未処理確認済み候補であることを確認。
- パチビーは導入日2010-04-05、山佐公式は稼働時期2010年4月、グリーンべるとは2010-02-10記事で納品4/4予定とするため、ホール導入主値を2010-04-05とした。

## payoutRateBySetting

### 系列A — パチマガスロマガ シミュレート値
- 設定1: **96.64%**
- 設定2: **98.88%**
- 設定3: **100.97%**
- 設定4: **104.51%**
- 設定5: **109.12%**
- 設定6: **115.82%**

### 系列B — pacnk / 市場整理値
- 設定1: **97.07%**
- 設定2: **99.21%**
- 設定3: **100.93%**
- 設定4: **104.54%**
- 設定5: **108.06%**
- 設定6: **114.70%**

設定1・2・5・6は丸めだけでは説明しにくい差があるため平均せず `CONFLICT` として保持。

confidence: CONFLICT_MULTI_SOURCE

## initialHitBySetting

### BIG合成
- 設定1: **1/412.18**
- 設定2: **1/412.18**
- 設定3: **1/407.06**
- 設定4: **1/397.19**
- 設定5: **1/392.43**
- 設定6: **1/392.43**

### REG
- 設定1: **1/624.15**
- 設定2: **1/590.41**
- 設定3: **1/560.14**
- 設定4: **1/532.81**
- 設定5: **1/508.03**
- 設定6: **1/485.45**

### ボーナス合成
- 設定1: **1/248.24**
- 設定2: **1/242.73**
- 設定3: **1/235.74**
- 設定4: **1/227.56**
- 設定5: **1/221.41**
- 設定6: **1/217.01**

パチマガスロマガの解析値。P-WORLD実戦値は丸め表示で概ね一致。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

1000円あたりゲーム数（パチマガスロマガ）:
- 設定1: **30.56G**
- 設定2: **30.58G**
- 設定3: **30.60G**
- 設定4: **30.62G**
- 設定5: **30.64G**
- 設定6: **30.66G**

confidence: ANALYSIS_HIGH_DIRECT

## netIncrease

- ART「ヤマトラッシュ」: **約+1.2枚/G**
- 1セット **30G**
- 「超ヤマトラッシュ」は次回ボーナスまで継続する無限ART。さらに次回ボーナス後も継続する超無限ART状態あり。

山佐公式、P-WORLD、パチビーで基本仕様一致。

confidence: OFFICIAL_INDUSTRY_MULTI_SOURCE

## basicPayout

- BIG: **約210枚**（パチマガスロマガ） / **最大217枚**（P-WORLD表記）
- REG: **約49枚** / **49枚固定**

「約210枚」は実獲得目安、「MAX217枚」は最大獲得表記のため定義を分けて保持。

confidence: ANALYSIS_INDUSTRY_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は**150G周期**でART放出契機となる周期到達を管理。
- ART当選はボーナス中抽選、通常時チェリー等から行われ、通常時当選分は周期到達時に放出される。
- 通常時は3ステージと2モードの記録があるが、通常時全モード移行率は実機完全再現用のため収集対象外。
- 天井: **ボーナス間1480Gハマリ後の周期到達で超ヤマトラッシュ**。最大 **1630G**。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_RESET_PERIOD_AND_CEILING_PROGRESS**。P-WORLD本機ページに「設定変更後は周期ゲーム数と天井までのゲーム数がリセット」と直接記載。150G周期進捗とボーナス間天井進捗の双方をリセット対象として扱う。

carryOverBehavior: **PARTIAL_CONFIRMED_BY_DETECTION_LOGIC**。P-WORLDは「1480G以内に天井ARTへ入れば設定据え置き濃厚」とするため、据え置き時は少なくとも天井進捗が前日から保持される前提の判別ロジックが公開されている。個別ARTストック・内部高確等の全状態保持条件は未確認。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純な電源OFF→ONのみで150G周期・天井進捗・ARTストック・内部状態がどうなるか、本機固有の直接高信頼資料を今回確定できず。一般的な5号機挙動から推測しない。

gameCounterReset: **RESET_ON_SETTING_CHANGE / CARRYOVER_ON_STAY_CONFIRMED_FOR_PERIOD_AND_CEILING_PROGRESS**。設定変更時に周期G数・天井G数をリセット。据え置き時は前日進捗を利用した変更判別が成立する資料があるため引継ぎ扱い。

ceilingAfterReset: **NORMAL_CEILING_RESTART / NO_SHORTENED_RESET_CEILING_CONFIRMED**。通常天井はボーナス間1480G後の次回周期到達（最大1630G）。設定変更後は天井までのG数がリセットされるが、リセット専用短縮天井の公開値は確認できない。

modeAfterReset: **PARTIAL**。150G周期進捗のリセットは確定。設定変更時に通常時2モードをどの比率で再選択するか、朝一専用モードが存在するかは検索語・資料系統を変えても直接数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/ART潜伏/ストック等の個別内部状態の設定変更時処理は今回の公開資料から確定できず、実機完全再現用の推測はしない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NO_SPECIAL_NUMERIC_BENEFIT_CONFIRMED**。設定変更で周期と天井進捗が0からになるため、宵越し天井狙いの観点では恩恵ではなく前日進捗消失が中心。設定変更専用の短縮天井・高モード優遇などの公開数値は確認できず。

resetPenalties: **CONFIRMED_LOSS_OF_CARRYOVER_PROGRESS**。前日の150G周期進捗および天井進捗が設定変更で失われる。特に深いハマリ台では朝一の宵越し期待を消す方向に作用する。

resetDetection: **CONFIRMED_PERIOD_SHIFT_AND_CEILING_BEHAVIOR / GAKKUN_UNVERIFIED**。P-WORLDは①前日と周期ゲーム数がずれていれば設定変更濃厚、②1480G以内に天井ART突入なら据え置き濃厚、と具体的な客側判別要素を記載。本機固有のガックン・初期出目・ランプ判別条件は十分な高信頼資料で確認できず `UNVERIFIED_AFTER_RESEARCH`。

numericResetData:
- normalPeriod: **150G**
- normalCeilingTrigger: **ボーナス間1480G経過後の周期到達**
- normalCeilingMaximum: **1630G**
- settingChangePeriodProgress: **RESET**
- settingChangeCeilingProgress: **RESET**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDetectionPeriodShift: **前日周期とのズレで設定変更濃厚**
- carryOverDetectionCeiling: **1480G以内の天井ART突入で据え置き濃厚**

resetBehaviorQA: HIGH_VALUE_CORE_RESET_CONFIRMED_POWER_CYCLE_AND_STATE_PARTIAL

## conflicts

- payoutRateBySetting: **CONFLICT**。パチマガスロマガのシミュレート値 96.64/98.88/100.97/104.51/109.12/115.82% と pacnk 97.07/99.21/100.93/104.54/108.06/114.70% を平均しない。
- 5号機クロニクルには本機を「2010年8月」「1セット50G」等とする、本機の公式/P-WORLD/パチビー/旧パチマガ（2010年4月・30G）と不整合な記述があるため、本レコードの主値には採用しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior exact behavior: UNVERIFIED_AFTER_RESEARCH
- reset mode distribution / morning-only mode: UNVERIFIED_AFTER_RESEARCH
- reset state handling (高確/潜伏/ARTストック等): UNVERIFIED_AFTER_RESEARCH
- resetDetection ガックン/初期出目/ランプ: UNVERIFIED_AFTER_RESEARCH
- 設定別ART初当たり確率: PUBLIC_COMPARABLE_VALUE_NOT_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. 山佐ネクスト「パチスロ『宇宙戦艦ヤマト』」 — https://yamasa-next.co.jp/model_ymt/ — 5号機/A+ART、稼働時期2010年4月、ヤマトラッシュ30G、150G周期、無限/超無限ART — reliability: OFFICIAL
2. グリーンべると「山佐、『パチスロ『宇宙戦艦ヤマト』』を発表」 — https://web-greenbelt.jp/00002555/ — 2010-02-10、納品4/4予定 — reliability: INDUSTRY_NEWS
3. パチビー「パチスロ 宇宙戦艦ヤマト」 — https://www.pachibee.jp/machines/about/210020014 — 導入日2010-04-05、ART30G・約+1.2枚/G、150G周期 — reliability: INDUSTRY_DB
4. P-WORLD「パチスロ『宇宙戦艦ヤマト』」 — https://www.p-world.co.jp/machine/database/5838 — BIG最大217枚、REG49枚、ART約+1.2枚/G、設定変更で周期/天井Gリセット、据え置き判別、天井1480G後周期・最大1630G — reliability: INDUSTRY_DB
5. パチマガスロマガ「基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/171/a.php — BIG約210枚、REG約49枚、ART30G、150G周期 — reliability: ANALYSIS_HIGH
6. パチマガスロマガ「ボーナス確率・PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/171/h.php — 設定別BIG/REG/合算、シミュレートPAYOUT — reliability: ANALYSIS_HIGH
7. パチマガスロマガ「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/171/c.php — 1000円あたり30.56〜30.66G — reliability: ANALYSIS_HIGH
8. pacnk「パチスロ 宇宙戦艦ヤマト 設定判別ツール」 — https://pacnk.com/slot/tools/sh_yamato.html — 設定別BIG/REG、PAYOUT系列B — reliability: ANALYSIS_SECONDARY
9. 5号機クロニクル 山佐一覧 — https://5goki.com/yamasa — 本機項目に導入月/ARTセットG数の不整合を確認したためCONFLICT監査資料としてのみ使用 — reliability: SECONDARY_CONFLICTING
