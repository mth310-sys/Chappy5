# ハワイっ娘

machineName: ハワイっ娘
manufacturer: IGTジャパン
releaseDate: 2007-07-23
generation: 5号機初期
systemType: ノーマル / ボーナス主体 / 準完全告知
coreStatus: COMPLETE_CORE
qaResetBehavior: PARTIAL

## releaseDateEvidence
- ALL7.jpでIGT `ハワイっ娘` の導入予定を `2007-07-23` と確認。
- 5号機クロニクル、後年回顧資料でも2007年7月のIGT機として一致。

信頼度: ANALYSIS_HIGH

## payoutRateBySetting
パチマガスロマガ（シミュレート値）:
- 設定1 96.67%
- 設定2 98.23%
- 設定3 99.80%
- 設定4 103.19%
- 設定5 105.73%
- 設定6 108.25%

5号機クロニクル:
- 設定1 96.7%
- 設定2 98.3%
- 設定3 99.9%
- 設定4 103.3%
- 設定5 105.8%
- 設定6 108.4%

丸め差の範囲で整合。
信頼度: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG | 合成 |
|---|---:|---:|---:|
| 1 | 1/327.68 | 1/546.13 | 1/204.80 |
| 2 | 1/312.08 | 1/546.13 | 1/198.59 |
| 3 | 1/297.89 | 1/546.13 | 1/192.75 |
| 4 | 1/282.48 | 1/468.11 | 1/176.17 |
| 5 | 1/271.93 | 1/425.56 | 1/165.91 |
| 6 | 1/262.14 | 1/390.10 | 1/156.78 |

パチマガスロマガと5号機クロニクルで一致。
信頼度: ANALYSIS_HIGH

## baseGamesPer50
パチマガスロマガ `1000円あたりのゲーム数`:
- 設定1 39.82G
- 設定2 39.81G
- 設定3 39.80G
- 設定4 40.15G
- 設定5 40.49G
- 設定6 40.85G

信頼度: ANALYSIS_HIGH

## netIncrease
- RT/ART非搭載のノーマル機として整理。
- 純増/GはNOT_APPLICABLE。

## basicPayout
- BIG: 346枚超払い出し終了。
- REG: 120枚超払い出し終了。
- パチマガスロマガ基本システムで確認。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData
- ノーマル / 同時成立あり。
- ハイビスカス点灯による準完全告知。
- パチマガスロマガの攻略導線は `攻め時・ヤメ時→特にナシ`。
- 通常時ゲーム数天井、CZ、RT、ART、ゲーム数モードは確認されず `NONE_CONFIRMED`。

## resetBehavior
resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `ハワイっ娘 / IGT / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井` を組み替え、パチマガスロマガ、5号機クロニクル、IGT回顧資料、古いDB・残存資料を再探索。
- 設定変更時の本機固有内部状態/成立済みボーナス状態/リール挙動は `UNVERIFIED`。

carryOverBehavior:
- 通常時ゲーム数天井・モードは `NONE_CONFIRMED`。
- 据え置き時の本機固有内部状態引継ぎは `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみの本機固有リール/ハイビスカス/内部状態挙動は `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井は確認されず、天井カウンタは `NOT_APPLICABLE` 寄りの `NONE_CONFIRMED`。

ceilingAfterReset:
- リセット時短縮天井・朝一天井は `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用/変更専用ゲーム数モードは `NONE_CONFIRMED`。

stateAfterReset:
- 朝一専用高確・RT状態等は `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（有利区間制度導入前）。

resetBenefits:
- 設定変更固有の主要朝一恩恵は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更固有の主要不利要素は `NONE_CONFIRMED`。

resetDetection:
- 本機固有のガックン、告知ランプ、表示などによる変更/据え置き判別は十分再探索後も `UNVERIFIED`。

numericResetData:
- 朝一当選率、短縮G数、変更時モード振り分け等の公開数値は `UNVERIFIED`。

## sources
取得日: 2026-08-31

1. ALL7.jp — 2007年7月導入予定一覧
   - https://www.all7.jp/plans/index/2007/07
   - IGT `ハワイっ娘`、2007-07-23
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/46/a.php
   - ノーマル/同時成立、BIG346枚超・REG120枚超払い出し終了
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/46/h.php
   - 設定別BIG/REG/合成、シミュレート機械割
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/46/c.php
   - 39.80〜40.85G/50枚
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/46/igt_slot_46.php
   - 攻め時・ヤメ時→特にナシ
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル — IGTジャパン一覧
   - https://5goki.com/igt
   - 2007/7、設定別BIG/MID/合成、機械割
   - reliability: RETROSPECTIVE_SUPPORT
7. パチ7 — IGT Japan全機種回顧
   - https://pachiseven.jp/articles/detail/13009
   - 2007年IGT機として `ハワイっ娘` を確認
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields
- 設定変更時の本機固有内部状態/リール挙動
- 据え置き・電源OFF→ON時の本機固有挙動
- 本機固有のガックン/変更判別
- 設定変更時の公開朝一数値

## conflicts
- なし。機械割は資料間で小数丸め差の範囲。

## notes
- NET `ハワイ` / `ハワイ-30` と混同しない。
- 5号機クロニクル表記の `MID` はパチマガスロマガの `REG` と同確率で、本レコードではREG表記へ統一。
