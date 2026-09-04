# パチスロ X JAPAN～強行突破～

machineName: パチスロ X JAPAN～強行突破～
aliases: X JAPAN 強行突破 / パチスロ X JAPAN / X-JAPAN 強行突破
manufacturer: SANKYO
formalModelName: X JAPAN・強行突破F
approvalNumber: 1S0652
releaseDate: 2011-10-02
releaseDateStatus: **DATE_DEFINITION_DIFFERENCE**。グリーンべるとは2011-10-02から納品開始、HAZUSEは2011-10-03導入開始、SANKYO公式は2011-10導入。平均化せず、本DB時系列キーは最古の具体的市場投入日である2011-10-02を採用。
generation: 5号機
systemType: A+ART / ボーナス+セットストック&ゲーム数上乗せART
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「エージェント・クライシス」、machine treeを確認して開始。
- 正本の再開地点は recordCount 605 / chronologicalFrontier 2011-10-02。
- 同日群を監査し、ケロット2はグリーンべるとで10-10納品開始予定のため後回し。
- 本機はグリーンべるとで10-02納品開始、HAZUSEで10-03導入開始を確認。repo tree / searchで既存レコード未登録を確認し、606件目として追加。

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.1% |
| 2 | 98.3% |
| 3 | 100.5% |
| 4 | 104.6% |
| 5 | 108.5% |
| 6 | 112.1% |

- パチスロ救急車の設定別詳細値を主値として採用。
- HAZUSEは96/98/101/105/109/112%の整数丸め表示。定義差ではなく丸め精度差と判断し、CONFLICTにはしない。
confidence: **ANALYSIS_HIGH_CROSSCHECKED_WITH_ROUNDED_SECONDARY**

## initialHitBySetting

### ART初当り

| 設定 | ART初当り |
|---|---:|
| 1 | 1/388 |
| 2 | 1/347 |
| 3 | 1/339 |
| 4 | 1/301 |
| 5 | 1/281 |
| 6 | 1/241 |

- パチスロ救急車のART確率を採用。

### BIG / REG

| 設定 | BIG | REG |
|---|---:|---:|
| 1 | 1/397 | 1/668 |
| 2 | 1/392 | 1/648 |
| 3 | 1/387 | 1/630 |
| 4 | 1/378 | 1/612 |
| 5 | 1/368 | 1/555 |
| 6 | 1/356 | 1/492 |

- X BONUSは全設定共通 **1/16384**。
- HAZUSEのBIG/REG系列とほぼ一致し、REG設定1のみ667/668の丸め差。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## baseGamesPer50

| 設定 | 50枚あたりG数 |
|---|---:|
| 1 | 31.44G |
| 2 | 31.64G |
| 3 | 31.80G |
| 4 | 32.01G |
| 5 | 32.20G |
| 6 | 32.43G |

- パチマガスロマガの「1000円あたりのゲーム数」を直接採用。
- パチスロ救急車の31.5/31.7/31.8/32.0/32.2/32.4Gと丸め整合。
confidence: **ANALYSIS_HIGH_CROSSCHECKED**

## netIncrease

- ART「無敵な夜」: **1セット40G+α / 約+1.4枚/G**。
- 上乗せゾーン「強行突破」: **1セット4G、最大7セット（最大28G滞在）**。
- 強行突破中は毎ゲーム **5 / 10 / 20 / 30 / 50 / 100G**の上乗せ抽選。
- 後年回顧資料に約+1.3枚/G表記があるが、グリーンべると、P-WORLD、HAZUSE、パチマガスロマガが約+1.4枚/Gで一致するため、主値は+1.4枚/G。
confidence: **INDUSTRY_AND_ANALYSIS_HIGH_CROSSCHECKED**

## basicPayout

- X BONUS: **約204枚**（297枚払い出しで終了）
- BIG: **約204枚**（297枚払い出しで終了）
- REG: **約60〜61枚**（81枚払い出しで終了）
- X BONUS成立でART+「強行突破」確定。
confidence: **INDUSTRY_AND_DATABASE_HIGH_CROSSCHECKED**

## modeSpecificMinimumData

- 通常時は低確/高確等の内部状態を持ち、状態に応じてART抽選。
- BIG中「紅チャンス」は12G継続し、毎G約1/9でART抽選。
- ART「無敵な夜」はセットストック+ゲーム数上乗せ型。
- 通常天井は **ボーナス間1199G消化**。到達時は **ART5セット以上**確定。
- 実機完全再現用の全モード移行率・小役別全抽選・上乗せ全振り分けは収集対象外。

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_PARTIAL**。パチスロ救急車の本機専用解析で、**天井RT数は設定変更でリセット**と明記。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の1199G天井進捗・内部状態・ARTストック等の保持について、本機固有の直接本文を確定できず。一般則で補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定を変更しない単純電源OFF→ON時の天井進捗、内部状態、表示状態を本機固有資料で確定できず。

gameCounterReset: **RESET_ON_SETTING_CHANGE_CONFIRMED**。設定変更で天井RT数がリセットされるため、前日ボーナス間ゲーム数の天井進捗は消失。

ceilingAfterReset: **NORMAL_CEILING_1199G_CONFIRMED / RESET_SHORTENING_NONE_CONFIRMED_AFTER_RESEARCH**。通常天井1199Gは確認済み。設定変更専用の短縮天井数値は再探索後も確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。低確/高確など通常時モード・状態の存在は確認できるが、設定変更時の開始モード再抽選内容・振り分けは直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確/超高確、前兆、ART関連状態の設定変更時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。短縮天井、高確保証、ART付与、朝一特定G以内の当選率など、設定変更専用の公開恩恵数値は確認できず。

resetPenalties: **CONFIRMED**。設定変更で天井RT数がリセットされるため、前日の1199G天井到達までの進捗を失う。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ等を使った本機固有の変更判別は、機種名/型式/SANKYO/設定変更/リセット/朝一/据え置き/ガックンで再探索したが直接確定できず。

numericResetData:
- 通常天井: **ボーナス間1199G**
- 天井恩恵: **ART5セット以上**
- 設定変更時天井カウンタ: **RESET**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内ART当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_HIGH_FOR_GAME_COUNTER_RESET / HIGH_FOR_NORMAL_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_CARRYOVER_POWER_CYCLE_MODE_STATE_AND_DETECTION**

## conflicts

- releaseDate: グリーンべると **2011-10-02納品開始** vs HAZUSE **2011-10-03導入開始**。`DATE_DEFINITION_DIFFERENCE`として両方保持。
- netIncrease: 主要4系統は **約+1.4枚/G**で一致。後年回顧1資料のみ約+1.3枚/G。主要同時代資料を主値とし、`MINOR_RETROSPECTIVE_DIFFERENCE`として注記。
- REG獲得: 約60枚 / 約61枚は丸め差として扱う。

## missingFields

- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. SANKYOオンライン博物館 — パチスロ X JAPAN～強行突破～
   - https://www.sankyo-fever.jp/collection/540/
   - 2011.10導入、A+ART構造、40G ART、強行突破最大7セット。
   - reliability: **OFFICIAL**
2. グリーンべると — 専用筐体で最高音質を実現『パチスロX JAPAN』
   - https://web-greenbelt.jp/00002211/
   - 2011-10-02納品開始、ART40G+α・約+1.4枚/G、X/BIG約204枚、RB約60枚、ART合成端値。
   - reliability: **INDUSTRY_HIGH**
3. HAZUSE — パチスロ X JAPAN 強行突破
   - https://hazuse.com/machine/pachislot/1S0652/
   - 型式名、検定番号1S0652、2011-10-03導入開始、設定別BIG/REG、整数丸めPAY OUT、ART構造。
   - reliability: **DATABASE_HIGH**
4. P-WORLD — パチスロ X JAPAN
   - https://www.p-world.co.jp/machine/database/6473
   - ART約+1.4枚/G、各ボーナス獲得枚数、ボーナス間1199G天井、天井ART5セット。
   - reliability: **DATABASE_HIGH**
5. パチマガスロマガ — パチスロ X JAPAN 強行突破
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/26/sankyo_slot_26.php
   - 朝イチ・設定変更解析項目の存在、各種解析導線。
   - reliability: **ANALYSIS_HIGH**
6. パチマガスロマガ — 小役確率/1000円あたりG数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/26/c.php
   - 設定別31.44〜32.43G/1000円。
   - reliability: **ANALYSIS_HIGH**
7. パチスロ救急車 — X JAPAN～強行突破～
   - https://www.eightbeat.com/slot99/kishu/a_gyou/e/Xjapan/page_menu.html
   - 機械割96.1〜112.1%、ART初当り1/388〜1/241、天井1199G、**設定変更で天井RT数リセット**、50枚ベース丸め値。
   - reliability: **ANALYSIS_SINGLE_DIRECT_RESET_TEXT**
