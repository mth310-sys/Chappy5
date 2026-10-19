# セブンボンバーA

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: セブンボンバーA
manufacturer: バルテック
releaseDate: 2007-08-27
generation: 5号機
systemType: ノーマル / 完全告知 / 小役同時成立

## releaseDate evidence

- バルテック公式で3号機「7BOMBER」の遺伝子を継承した5号機「セブンボンバーA」と確認。
- ALL7.jpは `7BOMBER`（バルテック）を `2007-08-27` 導入予定と掲載。
- パチビーも `セブンボンバーA` を `2007-08-27` 導入として掲載。
- HAZUSE当時ページは2007年7月作成の先行解析ページで、一般導入日とは分離して扱う。

本DBの時系列本線は、具体的な一般導入日が複数導入DBで一致する `2007-08-27` を採用する。

信頼度: OFFICIAL / OLD_DB

## payoutRateBySetting

資料間で設定4〜6を中心に差があるため平均せずCONFLICTとして保持する。

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT |
|---|---:|
| 1 | 96.85% |
| 2 | 98.67% |
| 3 | 100.52% |
| 4 | 102.08% |
| 5 | 103.48% |
| 6 | 104.68% |

### 5号機クロニクル / HAZUSE整理値

| 設定 | 機械割 |
|---|---:|
| 1 | 96.7% |
| 2 | 98.4% |
| 3 | 100.2% |
| 4 | 102.5% |
| 5 | 104.2% |
| 6 | 106.1% |

設定1〜3は近いが、設定4〜6は丸め差以上の差があるためCONFLICT。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ掲載値:

| 設定 | BIG | REG | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/399.61 | 1/689.85 | 1/253.03 |
| 2 | 1/387.79 | 1/624.15 | 1/239.18 |
| 3 | 1/376.64 | 1/569.88 | 1/226.77 |
| 4 | 1/366.12 | 1/546.13 | 1/219.18 |
| 5 | 1/362.08 | 1/524.29 | 1/214.17 |
| 6 | 1/358.12 | 1/524.29 | 1/212.78 |

HAZUSEおよび5号機クロニクルの丸め値とも主要レンジが整合する。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガの通常時1000円あたり平均ゲーム数:

| 設定 | G/50枚 |
|---|---:|
| 1 | 43.49G |
| 2 | 43.92G |
| 3 | 44.37G |
| 4 | 44.82G |
| 5 | 45.76G |
| 6 | 46.84G |

信頼度: ANALYSIS_SINGLE

## netIncrease

- バルテック公式はオーソドックスな完全告知タイプとしており、出玉増加RT/ART/ATは確認されない。
- 物差し用の純増枚数/Gは `NOT_APPLICABLE`。

信頼度: OFFICIAL / ANALYSIS_HIGH

## basicPayout

パチマガスロマガ掲載値:

- BIG: 405枚超払い出し終了 / 純増約364枚
- REG: 105枚超払い出し終了 / 純増約104枚

P-WORLDの基本スペックもBIG405枚以上・REG105枚以上として規定面を確認できる。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- バルテック公式: 3号機「7BOMBER」の遺伝子を継承した5号機。オーソドックスな完全告知タイプ。
- パチマガスロマガでは小役同時成立あり。
- HAZUSE当時解析では特殊リプレイ成立時のボーナス期待度が約30%と掲載されるが、物差し用途では補助情報に留め、全小役同時当選テーブルまでは収集しない。
- 天井・CZ・RT/ARTによるゲーム数管理を主要ゲーム性とする資料は確認されない。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `セブンボンバーA / 7BOMBER / 7 BOMBER / バルテック / 2007` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン` を組み替え、メーカー公式、当時解析、導入DB、後年5号機DB・回顧資料を横断した。
- 本機固有の設定変更時内部処理を明記した高信頼資料は確認できず `UNVERIFIED`。

carryOverBehavior:
- 据え置き時に引き継ぐ公開ゲーム数・周期・モードは `NONE_CONFIRMED`。
- 本機固有の成立済みボーナス等を含む内部状態処理は `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみの場合の本機固有内部状態処理は `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井、周期CZ、スルー回数天井は `NONE_CONFIRMED`。
- 設定変更時にリセット対象となる公開天井ゲーム数は `NOT_APPLICABLE / NONE_CONFIRMED`。

ceilingAfterReset:
- 通常時天井そのものを確認できず、設定変更時の短縮天井・朝一天井変更値は `NONE_CONFIRMED`。

modeAfterReset:
- 通常時モード管理、設定変更時専用モード、朝一専用モード、専用振り分けは `NONE_CONFIRMED`。

stateAfterReset:
- ボーナス主体ノーマル機で長期高確/低確やART状態を主要ゲーム性とする公開資料は `NONE_CONFIRMED`。
- 設定変更/電断時の本機固有内部状態処理は `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機・有利区間制度導入前）。

resetBenefits:
- リセット短縮天井、朝一専用高確/RT、設定変更時専用当選率など主要な朝一恩恵は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の主要不利要素は `NONE_CONFIRMED`。

resetDetection:
- 本機固有のリールガックン、ランプ/表示、ゲーム数挙動等による設定変更/据え置き判別は十分再探索後も `UNVERIFIED`。

numericResetData:
- 通常時天井: NONE_CONFIRMED
- リセット短縮天井: NONE_CONFIRMED
- 設定変更時専用モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 公開朝一数値: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. バルテック公式 — セブンボンバーA
   - https://www.baltec.co.jp/product/product06.html
   - 3号機7BOMBERの遺伝子を継承する5号機、完全告知タイプ
   - reliability: OFFICIAL
2. ALL7.jp — 2007年8月新台導入予定一覧
   - https://www.all7.jp/plans/index/2007/08
   - `7BOMBER` / バルテック / 2007-08-27導入予定
   - reliability: OLD_DB
3. パチビー — 2007年8月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-08
   - `セブンボンバーA` / 2007-08-27
   - reliability: OLD_DB
4. パチマガスロマガ — セブンボンバーA ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/50/h.php
   - 設定別BIG/REG/合算、シミュレートPAYOUT
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — セブンボンバーA 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/50/a.php
   - 完全告知、小役同時成立、BIG/REG規定払い出し・純増
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — セブンボンバーA 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/50/c.php
   - 1000円あたりゲーム数43.49〜46.84G
   - reliability: ANALYSIS_HIGH
7. HAZUSE — セブンボンバーA 当時解析
   - https://hazuse.com/i/data/sevenbomber/top.htm
   - 5号機、3号機セブンボンバー後継、BIG/REG、完全告知、機械割レンジ
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY
8. 5号機クロニクル — バルテック5号機全機種一覧
   - https://5goki.com/baltec
   - 2007年導入、設定別ボーナス確率・機械割96.7〜106.1%
   - reliability: RETROSPECTIVE
9. P-WORLD — セブンボンバーA 機種情報
   - https://www.p-world.co.jp/machine/database/4844
   - 5号機ノーマル、BIG405枚以上・REG105枚以上、2007年8月
   - reliability: OLD_DB

## missingFields

- 本機固有の設定変更時処理
- 据え置き/電源OFF→ON時の内部状態処理
- 本機固有の設定変更判別/ガックン
- 設定変更専用の朝一恩恵・公開数値

## conflicts

- 機械割: パチマガスロマガのシミュレート値 `96.85 / 98.67 / 100.52 / 102.08 / 103.48 / 104.68%` に対し、5号機クロニクル/HAZUSE系 `96.7 / 98.4 / 100.2 / 102.5 / 104.2 / 106.1%`。平均せず保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
