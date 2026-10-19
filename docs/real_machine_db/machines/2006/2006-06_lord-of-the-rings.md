# ロード・オブ・ザ・リング

machineName: ロード・オブ・ザ・リング
manufacturer: ビスティ
releaseDate: 2006-06
generation: 5号機初期
systemType: ボーナス主体 / BIG + CB
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.3% |
| 2 | 97.8% |
| 3 | 100.5% |
| 4 | 102.6% |
| 5 | 105.8% |
| 6 | 109.1% |

信頼度: ANALYSIS_HIGH

## initialHitBySetting

### BIG

| 設定 | 確率 |
|---|---:|
| 1 | 1/344.9 |
| 2 | 1/324.4 |
| 3 | 1/309.1 |
| 4 | 1/295.2 |
| 5 | 1/277.6 |
| 6 | 1/262.1 |

### CB

| 設定 | 確率 |
|---|---:|
| 1 | 1/689.8 |
| 2 | 1/648.8 |
| 3 | 1/618.2 |
| 4 | 1/590.4 |
| 5 | 1/564.9 |
| 6 | 1/541.6 |

### ボーナス合成

| 設定 | 合成 |
|---|---:|
| 1 | 1/229.9 |
| 2 | 1/216.2 |
| 3 | 1/206.0 |
| 4 | 1/196.8 |
| 5 | 1/186.1 |
| 6 | 1/176.6 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

## netIncrease

該当なし。

## basicPayout

- BIG: 346枚以上の払い出しで終了 / 既存解析では平均純増約308枚
- パチマガスロマガ旧ページ: BIG規定払い出し345枚、純増約292枚
- CB/CT: 254枚以上の払い出しで終了 / 純増238枚固定
- パチマガスロマガ旧ページ: CT規定払い出し253枚、純増約238枚

BIG純増は既存HAZUSE系約308枚とパチマガ旧ページ約292枚で差があるためCONFLICT。平均化しない。

信頼度: ANALYSIS_HIGH / BIG net CONFLICT

## modeSpecificMinimumData

- 型式名: フィーバーロード・オブ・ザ・リングS
- メーカー公式では2006年6月導入
- 2種類のBIGと1種類のチャレンジボーナスを搭載
- 目押しはほとんど不要
- 当時解析資料ではBIG+CBの2種区分で設定別確率を掲載
- RT/ART/ATを主ゲーム性として持つ公開仕様は確認できない。

## resetBehavior
schemaVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- `ロード・オブ・ザ・リング / ロードオブザリング / フィーバーロード・オブ・ザ・リングS / ビスティ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン` を組み替え、メーカー公式、P-WORLD、K-Navi、パチマガスロマガ旧ページ、旧解析資料、回顧DBを再探索。
- 本機は公開仕様上ボーナス主体のBIG+CB機で、通常時ゲーム数天井、RT/ART/AT、朝一専用CZ、ゲーム数モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時に専用高確/モード/恩恵が発生する本機固有情報は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更操作そのものによる成立済みボーナス等の低レベル内部契約は、実機完全再現範囲かつ機種固有資料なしのため推測しない。
reliability: RESEARCH_EXHAUSTED_NO_CONFIRMED_MACHINE_SPECIFIC_BEHAVIOR

### carryOverBehavior
- 通常時天井/周期/モード管理がNONE_CONFIRMEDのため、ホール経営物差し上のゲーム数持越し対象は **NOT_APPLICABLE**。
- ボーナス成立後など特殊な内部状態の据え置き挙動は本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_LOW_LEVEL_STATE

### powerCycleBehavior
- 電源OFF→ONのみで朝一専用恩恵や天井短縮が発生する情報は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 本機固有の細かな内部状態保持/初期化契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_LOW_LEVEL_STATE

### gameCounterReset
- 通常時ゲーム数天井・周期天井は **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**。

### ceilingAfterReset
- リセット時短縮天井・変更後専用天井は **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**。

### modeAfterReset
- 朝一専用モード、設定変更専用モード、モード振り分け公開値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 通常時にホール経営/朝一客AIへ影響する公開高確状態やART状態は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 細かな内部成立状態は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_ADVANTAGEOUS_SECTION**。

### resetBenefits
- 設定変更専用の短縮天井、朝一CZ/RT/ART、初当たり優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更専用の公開不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、リール初動、液晶表示による設定変更/据え置き判別情報は、検索語・資料系統変更後も高信頼資料を確認できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 公開朝一関連数値: **NONE_CONFIRMED_AFTER_RESEARCH**
- 短縮天井: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード/状態振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**

## sources

取得日: 2026-09-09

1. SANKYOオンライン博物館 — ロード・オブ・ザ・リング
   - https://www.sankyo-fever.jp/collection/860/
   - 2006.06導入、ビスティ、型式名、2種類BIG+1種類CB
   - reliability: OFFICIAL
2. HAZUSE — ロードオブザリング解析・機種情報
   - https://www.hazuse.com/i/data/lord_of_the_ring/top.htm
   - 5号機、BIG/CB設定別確率、合成、機械割、基本獲得性能
   - reliability: ANALYSIS_HIGH
3. P-WORLD — ロード・オブ・ザ・リング
   - https://www.p-world.co.jp/machine/database/4225
   - パチスロ種別、型式名、機種存在の補助照合
   - reliability: OLD_DB_HIGH
4. K-Navi — ロード・オブ・ザ・リング
   - https://p-kn.com/slot/721/
   - ビスティ、基本ゲーム性の補助照合
   - reliability: ANALYSIS_SUPPORT
5. パチマガスロマガ旧ページ — ロード・オブ・ザ・リング
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/05/a.php
   - 5号機/8ライン/3枚掛け専用、BIG/CT規定払い出し・純増
   - reliability: ANALYSIS_HIGH
6. pacnk — ロード・オブ・ザ・リング設定判別ツール
   - https://pacnk.com/slot/tools/sh_rodoobuzaringu.html
   - 設定別BIG/CB/機械割の後年照合
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields

- 50枚あたりゲーム数
- 設定別数値の別系統完全照合
- 本機固有の設定変更/据え置き/電源OFF→ON時の細かな内部状態: UNVERIFIED_AFTER_RESEARCH
- 本機固有のガックン/設定変更判別: UNVERIFIED_AFTER_RESEARCH
- 公開朝一関連数値: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

1. 導入月はメーカー公式2006-06に対し、HAZUSE見出しでは2006年7月表記があるためCONFLICT。DBのreleaseDateはメーカー公式の2006-06を採用し、ホール導入実時期の差として保持。
2. BIG純増: 既存HAZUSE系約308枚 / パチマガスロマガ旧ページ約292枚。定義差または資料差の可能性があるため平均化せずCONFLICT。

status: PARTIAL
