# ちょいスゴ!!アリババインファンタジア

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: ちょいスゴ!!アリババインファンタジア
manufacturer: エレコ / ユニバーサル系
releaseDate: 2007-09（具体導入日UNVERIFIED）
generation: 5号機
systemType: ボーナス + 天井RT

## payoutRateBySetting

パチマガスロマガ シミュレート値:

| 設定 | 機械割 |
|---|---:|
| 1 | 98.71% |
| 4 | 102.90% |
| 6 | 106.74% |
| H | 111.32% |

信頼度: ANALYSIS_HIGH

## initialHitBySetting

赤7BIG、モルジアナBIG、REGは各設定で同一確率。

| 設定 | 赤7BIG | モルジアナBIG | REG | ボーナス合算 |
|---|---:|---:|---:|---:|
| 1 | 1/682.67 | 1/682.67 | 1/682.67 | 1/227.56 |
| 4 | 1/630.15 | 1/630.15 | 1/630.15 | 1/210.05 |
| 6 | 1/585.14 | 1/585.14 | 1/585.14 | 1/195.05 |
| H | 1/541.62 | 1/541.62 | 1/541.62 | 1/180.54 |

パチマガスロマガとHAZUSEで一致。
信頼度: ANALYSIS_HIGH

## baseGamesPer50

1000円あたりゲーム数:

| 設定 | G数 |
|---|---:|
| 1 | 39.01G |
| 4 | 39.65G |
| 6 | 40.14G |
| H | 40.89G |

信頼度: ANALYSIS_HIGH

## netIncrease

天井RT「アリババゾーン」中の1Gあたり純増:

| 設定 | 純増 |
|---|---:|
| 1 | +0.09枚/G |
| 4 | +0.11枚/G |
| 6 | +0.12枚/G |
| H | +0.13枚/G |

パチマガスロマガ解析。
信頼度: ANALYSIS_HIGH

## basicPayout

- BIG（ビッグチャンス）: 345枚超払い出しで終了、純増約312枚
- REG / アリババチャンス: 253枚超払い出しで終了、純増約221枚

メーカー公式とパチマガスロマガで純増目安一致。
信頼度: OFFICIAL + ANALYSIS_HIGH

## modeSpecificMinimumData

- メーカー公式で「ボーナス+RT」、2007年9月発売。
- BIG後1200G、アリババチャンス後1000G消化で天井RT「アリババゾーン」へ突入。
- アリババゾーンは次回ボーナスまで継続するハマリ救済RT。
- RT中リプレイ確率は設定1 1/1.68、設定4/6 1/1.69、設定H 1/1.70。
- 設定構成は1・4・6・Hの4段階。

## resetBehavior

resetBehaviorQA: PARTIAL

`ちょいスゴ!!アリババインファンタジア / アリババインファンタジア / エレコ / アルゼ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1200G / 1000G / アリババゾーン / RT / ガックン` を組み替え、メーカー公式、当時解析、旧DB、後年資料を再探索。

### settingChangeBehavior

- 設定変更時にBIG後1200G / REG後1000Gの天井RT進行ゲーム数をリセットするか: UNVERIFIED。
- 設定変更時にアリババゾーン滞在状態をどう処理するか: UNVERIFIED。
- 設定変更専用モード/朝一専用状態: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時の天井RTまでのゲーム数引継ぎ: UNVERIFIED。
- 据え置き時のアリババゾーン状態引継ぎ: UNVERIFIED。

### powerCycleBehavior

- 電源OFF→ONのみの場合の天井RTゲーム数・RT状態処理: UNVERIFIED。
- 設定変更挙動から電断挙動を推定しない。

### gameCounterReset

- 通常時のハマリ救済は、BIG後1200G / アリババチャンス後1000GでRTへ突入する明示的なボーナス後ゲーム数条件。
- 設定変更時の当該ゲーム数初期化/引継ぎ: UNVERIFIED。

### ceilingAfterReset

- 通常条件: BIG後1200G / アリババチャンス後1000Gでアリババゾーン突入。
- リセット専用短縮天井: NONE_CONFIRMED。
- 設定変更時に通常天井条件自体が変化するという公開数値: NONE_CONFIRMED。

### modeAfterReset

- 朝一専用モード、設定変更専用モード再抽選: NONE_CONFIRMED。

### stateAfterReset

- 設定変更時のRT内部状態処理: UNVERIFIED。
- 据え置き/電断時のRT内部状態引継ぎ: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機・有利区間制度導入前）。

### resetBenefits

- 設定変更専用短縮天井、朝一RT優遇、設定変更専用ボーナス優遇: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のガックン、出目、液晶等による設定変更/据え置き判別: 十分再探索後もUNVERIFIED。

### numericResetData

- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- リセット後短縮天井G数: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. ユニバーサルエンターテインメント公式 — ちょいスゴ!!アリババインファンタジア
   - https://www.universal-777.com/product/slot/alibabainfantasia/
   - 2007年9月発売、ボーナス+RT、BIG約312枚、アリババチャンス約221枚、BIG後1200G/アリババチャンス後1000Gでアリババゾーン突入。
   - reliability: OFFICIAL
2. ユニバーサルエンターテインメント公式 — 2007年パチスロ一覧
   - https://www.universal-777.com/product/slot/2007/
   - 2007年9月発売を再確認。
   - reliability: OFFICIAL
3. パチマガスロマガ — ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/71/h.php
   - 設定別赤7BIG・モルジアナBIG・REG・合算、シミュレート機械割。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 小役/1000円ゲーム数/RT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/71/c.php
   - 設定別1000円ゲーム数、天井RT中リプレイ確率、RT純増。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/71/a.php
   - ノーマル/天井RT、BIG・REGの払い出し終了条件と純増目安。
   - reliability: ANALYSIS_HIGH
6. HAZUSE — ちょいスゴ!!アリババインファンタジア解析
   - https://hazuse.com/i/data/choisugo_aribabainfantazia/top.htm
   - 設定別ボーナス確率・通常時小役等を別系統照合。
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — ユニバーサル系一覧
   - https://5goki.com/universal
   - 2007年9月、BIG約312枚/ALIBABA CHANCE約221枚、RT構造の後年照合。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 2007年9月内の具体ホール導入日
- 設定変更時のBIG後/REG後天井RTゲーム数処理
- 据え置き時の天井RTゲーム数・RT状態引継ぎ
- 電源OFF→ON時の天井RTゲーム数・RT状態処理
- 本機固有の設定変更判別
- 公開朝一専用数値

## conflicts

- 現時点で性能コアの重大CONFLICTなし。
- releaseDateはメーカー公式で2007年9月まで確定。日単位は十分な再探索後も確定できないため推測しない。
