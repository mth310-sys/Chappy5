# 新鬼武者

machineName: 新鬼武者
manufacturer: ロデオ
formalModelName: 新鬼武者Z（当時資料・実機流通名で確認。検定公示の直接照合は未完）
approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
releaseDate: 2010-03-23
generation: 5号機
systemType: A+ART / 押し順ART / ゲーム数上乗せ+継続率+ストック
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_PAYOUT_CONFLICT_RESET_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコード「満福箱」を再取得して継続。
- 開始時正本は recordCount 465 / chronologicalFrontier 2010-03-15。
- 2010-03-15同日群と03-16〜22境界を監査し、次の具体的導入日群として2010-03-23を採用。
- K-Naviとパチ&スロ必勝本はいずれも2010-03-23導入開始を明記。

## payoutRateBySetting

### パチ&スロ必勝本 解析シミュレート値
- 設定1: **98.52%**
- 設定2: **100.30%**
- 設定3: **102.09%**
- 設定4: **103.66%**
- 設定5: **106.72%**
- 設定6: **111.26%**

### 後年回顧資料
- 設定1: **96.4%**
- 設定2: **98.7%**
- 設定3: **100.0%**
- 設定4: **102.1%**
- 設定5: **105.0%**
- 設定6: **110.0%**

定義差が大きいため平均せず `CONFLICT`。必勝本系列はシミュレート値として別定義保持。

confidence: CONFLICT

## initialHitBySetting

### ボーナス合算
- 設定1: **1/263.20**
- 設定2: **1/245.45**
- 設定3: **1/254.02**
- 設定4: **1/245.45**
- 設定5: **1/254.02**
- 設定6: **1/229.95**

### BIG合算
- 設定1: **1/394.80**
- 設定2: **1/368.18**
- 設定3: **1/381.02**
- 設定4: **1/368.18**
- 設定5: **1/381.02**
- 設定6: **1/344.93**

### REG
- 設定1: **1/789.59**
- 設定2: **1/736.36**
- 設定3: **1/762.05**
- 設定4: **1/736.36**
- 設定5: **1/762.05**
- 設定6: **1/689.85**

confidence: ANALYSIS_HIGH

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

`新鬼武者 / 新鬼武者Z / ロデオ` と `50枚 / 1000円 / ベース / コイン持ち / 通常時ゲーム数` を組み替えて再探索したが、2010年初代固有の比較可能な直接値を今回確定できず。2020年機・2022年機・2025年機の値を混入しない。

confidence: UNVERIFIED

## netIncrease

- ART「蒼剣RUSH」: **約+1.4枚/G**
- 1セット **約50G+α**
- 継続率 **50〜89%**
- ゲーム数上乗せは1回最大300G、ストック上乗せも搭載。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約204枚**（297枚超払い出しで終了）
- REG / 鬼BONUS: **約60枚**（81枚超払い出しで終了）

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ART「蒼剣RUSH」はゲーム数上乗せ+継続率+ストック型。
- ART前兆/期待度示唆として百鬼モード、千鬼モード、覚醒モードを搭載。覚醒はART確定+高継続率濃厚。
- 通常時の内部状態は少なくとも超低確/低確/高確/超高確を持つ。
- ボーナス間**1400G**で天井高確へ。天井高確中にボーナス、チェリー、スイカ、共通ベル、1枚役等のART抽選契機役成立で、前兆を経て**継続率89% ART**へ当選。ペナルティ区間は天井G数に算入されない。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。設定変更後は鬼モード・ARTストック等が消滅し、内部状態を再抽選。本機固有資料で確認。

carryOverBehavior: **PARTIAL_INFERRED_FROM_DIRECT_RESET_COMPARISON / ART_OR_ONI_MODE_AT_OPENING_INDICATES_CARRYOVER**。当時解析では、朝一に鬼モードまたはARTから始まれば設定据え置き確定と説明。ただし据え置き時の1400G天井カウンタの明示的な文章は今回直接確定できず、一般論で補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定据え置きの単純電源OFF→ON時に天井カウンタ・内部状態・ART関連情報がどう処理されるかを、本機固有の直接資料で確定できず。

gameCounterReset: **SETTING_CHANGE_UNVERIFIED_FOR_1400G_COUNTER / CARRYOVER_UNVERIFIED_DIRECTLY**。通常天井はボーナス間1400G。設定変更時にこの内部カウンタがゼロクリアされるかを直接本文で確定できなかったため推測しない。

ceilingAfterReset: **NO_SHORTENED_RESET_CEILING_CONFIRMED**。通常天井はボーナス間1400G。設定変更専用の短縮天井数値は確認なし。

modeAfterReset: **RESET / RESELECTED_STATE_CONFIRMED**。設定変更後は内部状態を再振り分け。鬼モードは消滅。

stateAfterReset: **RESELECTED**。設定変更後の状態移行率はK-Navi自社調べで、設定1〜4: 超低確70% / 低確5% / 高確20% / 超高確5%、設定5・6: 超低確55% / 低確5% / 高確35% / 超高確5%。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **HIGH_STATE_START_CHANCE**。設定変更後は高確以上スタートが設定1〜4で25%、設定5・6で40%。

resetPenalties: **ART_STOCK_AND_ONI_MODE_LOSS_CONFIRMED**。設定変更でARTストック・鬼モード等が消滅。

resetDetection: **PARTIAL**。朝一で鬼モードまたはARTスタートなら据え置き確定と当時解析。チャンス役なしで高確示唆演出が出れば設定変更期待度上昇。ガックン等の物理判別は未確認。

numericResetData:
- setting1to4StateDistribution: 超低確70% / 低確5% / 高確20% / 超高確5%
- setting5to6StateDistribution: 超低確55% / 低確5% / 高確35% / 超高確5%
- setting1to4HighOrBetterStart: **25%**
- setting5to6HighOrBetterStart: **40%**
- normalCeiling: **ボーナス間1400G**
- resetShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_WITH_MACHINE_SPECIFIC_RESET_STATE_AND_DETECTION_CONFIRMED

## conflicts

- 機械割は必勝本のシミュレート値98.52〜111.26%と後年回顧96.4〜110.0%で差。平均せず定義別に保持。
- formalModelName「新鬼武者Z」は当時系記事・実機流通表記で確認できるが、検定公示一次資料の直接照合が未完。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- exact 1400G counter behavior on setting change: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- physical reset detection such as reel gakkun: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. K-Navi「新鬼武者」 — https://p-kn.com/slot/1174/ — 2010-03-23導入、ART約+1.4枚/G、約50G+α、配当 — reliability: ANALYSIS_HIGH
2. K-Navi「設定変更後の状態移行」 — https://p-kn.com/slot/1174/18213/ — 設定変更後状態振り分け、高確以上25%/40% — reliability: ANALYSIS_HIGH
3. パチ&スロ必勝本「基本スペック」 — https://p.hisshobon.jp/machine/1568/1/24056 — 2010-03-23導入、設定別ボーナス確率、シミュレート機械割、ART仕様 — reliability: ANALYSIS_HIGH
4. P-WORLD「新鬼武者 2010年」 — https://www.p-world.co.jp/machine/database/5874 — BIG約204枚、REG約60枚、ART約+1.4枚/G、ボーナス間1400G天井 — reliability: INDUSTRY_DB
5. パチマガスロマガ旧解析「新鬼武者」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/53/a.php — 基本システム、ART約+1.4枚/G、BIG/REG獲得 — reliability: ANALYSIS_HIGH
6. 当時系解析まとめ「新鬼武者」 — https://ameblo.jp/pachimatome/entry-10503414806.html — 設定変更で鬼モード/ARTストック消滅、内部状態再抽選、朝一判別、1400G天井詳細 — reliability: CONTEMPORARY_ANALYSIS_ARCHIVE
7. 当時系記事「新鬼武者Z」 — https://ameblo.jp/gunp06s/entry-10460321805.html — 新鬼武者Z表記、ART仕様 — reliability: CONTEMPORARY_SECONDARY
