# ジャンジャン飯店

machineName: ジャンジャン飯店
manufacturer: コルモ
releaseDate: 2007-07-23
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: COMPLETE_CORE
qaResetBehavior: PARTIAL

## releaseDateEvidence

- ALL7.jpの2007年7月導入予定一覧で、コルモ `ジャンジャン飯店` を `2007-07-23` 導入予定として掲載。
- 5号機クロニクルのコルモ一覧でも導入時期 `2007/7` を確認。
- K-Navi、パチマガスロマガ、PachinkoVistaでコルモの5号機 `ジャンジャン飯店` と独立確認。

信頼度: ANALYSIS_HIGH

## payoutRateBySetting

パチマガスロマガ（シミュレート値）:

| 設定 | 機械割 |
|---|---:|
| 1 | 96.80% |
| 2 | 98.86% |
| 3 | 101.34% |
| 4 | 103.83% |
| 5 | 106.59% |
| 6 | 110.35% |

K-Navi:

| 設定 | 機械割 |
|---|---:|
| 1 | 95.4% |
| 2 | 97.6% |
| 3 | 100.5% |
| 4 | 103.2% |
| 5 | 106.3% |
| 6 | 110.1% |

5号機クロニクル:

| 設定 | 機械割 |
|---|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 103.0% |
| 5 | 106.0% |
| 6 | 110.0% |

- 同一設定で資料差があり、設定1/2では最大1.4pt/1.26pt差。平均化せず `CONFLICT` として全系統を保持。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ / K-Naviで一致:

| 設定 | 赤7BIG | 青7BIG | BIG合成 | REG | ボーナス合成 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/809.09 | 1/809.09 | 1/404.54 | 1/1024.00 | 1/289.98 |
| 2 | 1/762.05 | 1/762.05 | 1/381.02 | 1/1024.00 | 1/277.69 |
| 3 | 1/712.35 | 1/712.35 | 1/356.17 | 1/1024.00 | 1/264.26 |
| 4 | 1/668.73 | 1/668.73 | 1/334.37 | 1/1024.00 | 1/252.06 |
| 5 | 1/630.15 | 1/630.15 | 1/315.08 | 1/910.22 | 1/234.06 |
| 6 | 1/585.14 | 1/585.14 | 1/292.57 | 1/819.20 | 1/215.58 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ `1000円あたりのゲーム数`:

| 設定 | 50枚あたり |
|---|---:|
| 1 | 46.65G |
| 2 | 47.05G |
| 3 | 47.57G |
| 4 | 48.16G |
| 5 | 48.76G |
| 6 | 49.95G |

- 5号機初期として比較可能な設定別ベースを取得。

信頼度: ANALYSIS_HIGH

## netIncrease

- 赤7BIG後に100G RTを搭載。
- PachinkoVistaは「RT中はコイン減少を抑えてボーナス当選を待つ」と説明。
- RTの比較可能な純増枚数/Gは、`ジャンジャン飯店 / コルモ / RT100G / 純増 / 枚/G / 増加枚数`、当時解析・古いDB・回顧資料まで再探索したが確定できず `UNVERIFIED`。

信頼度: ANALYSIS_HIGH（RT100G） / UNVERIFIED（純増/G）

## basicPayout

- 赤7BIG: 465枚超払い出し終了、実純増目安 約350枚。
- 青7BIG: 330枚超払い出し終了、実純増目安 約250枚。
- REG: 12Gまたは8回入賞で終了。PachinkoVistaでは実獲得目安 約70枚。
- K-Navi、パチマガスロマガ、PachinkoVistaで主要仕様を照合。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

### RT

- 赤7BIG終了後に100GのRTへ突入。
- 青7BIG / REG後の100G RT付与は確認されない。
- RTは出玉増加を主目的とする高純増ARTではなく、コイン減少を抑えながら次ボーナスを待つ初期5号機RT。

### 天井

- パチマガスロマガの攻略導線では `攻め時・ヤメ時→特にナシ`。
- K-Navi/PachinkoVista/5号機DB、`天井 / ハマリ / 朝一 / リセット` も含めて再探索したが、本機固有の通常時ゲーム数天井は確認できず `NONE_CONFIRMED`。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `ジャンジャン飯店 / コルモ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / RT100G / 天井` を組み替え、K-Navi、パチマガスロマガ、PachinkoVista、5号機クロニクル、当時/後年の残存資料を横断。
- 設定変更時にRT残ゲーム数、内部ボーナス成立状態、通常時内部状態をどう処理するかの本機固有公開資料は十分再探索後も `UNVERIFIED`。

carryOverBehavior:
- 通常時ゲーム数天井は `NONE_CONFIRMED`。
- 据え置き時に赤7BIG後RTの残ゲーム数を電断越しに保持するか、本機固有資料では `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみの場合のRT残G、液晶/のれん表示、内部成立状態の本機固有挙動は `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井は確認されないため、天井カウンタは `NOT_APPLICABLE` 寄りの `NONE_CONFIRMED`。
- RT100Gはボーナス後状態だが、設定変更/電断時の残G処理は `UNVERIFIED`。

ceilingAfterReset:
- 設定変更時の短縮天井・朝一天井は `NONE_CONFIRMED`。

modeAfterReset:
- 通常時ゲーム数モード、朝一専用モード、設定変更専用モードは `NONE_CONFIRMED`。

stateAfterReset:
- 設定変更時のRT状態/残G処理は `UNVERIFIED`。
- 朝一専用高確等の公開情報は `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更時の天井短縮、専用モード、ボーナス/CZ優遇などの主要恩恵は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更固有の主要不利要素は `NONE_CONFIRMED`。

resetDetection:
- 本機固有のリールガックン、16コマリール/液晶/のれん表示等による設定変更・据え置き判別は、検索語・資料系統を変えて再探索後も `UNVERIFIED`。

numericResetData:
- 設定変更時の朝一当選率、モード振り分け、短縮G数、RT移行率など比較可能な公開朝一数値は `UNVERIFIED`。

## sources

取得日: 2026-08-31

1. ALL7.jp — 2007年7月導入予定一覧
   - https://www.all7.jp/plans/index/2007/07
   - コルモ `ジャンジャン飯店`、導入予定 `2007-07-23`
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — ジャンジャン飯店 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/01/a.php
   - 同時成立あり/RT、赤7BIG約350枚、青7BIG約250枚、REG終了条件
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/01/h.php
   - 設定別赤7/青7/REG/合成、シミュレート機械割
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/01/c.php
   - 50枚あたり46.65〜49.95G
   - reliability: ANALYSIS_HIGH
5. K-Navi — ジャンジャン飯店
   - https://p-kn.com/slot/607/
   - 設定別赤7/青7/REG、機械割、赤7BIG後RT100G
   - reliability: ANALYSIS_HIGH
6. PachinkoVista — ジャンジャン飯店
   - https://www.pachinkovista.com/pfactory/model.php?dsp=1&gc=0&km=2&nid=016678
   - 16コマ1ライン、赤7約350枚/青7約250枚/REG約70枚、赤7BIG後RT100G
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — コルモ5号機一覧
   - https://5goki.com/colmo
   - 2007/7、設定別機械割96.0〜110.0%
   - reliability: RETROSPECTIVE_SUPPORT
8. スロリスクタイム — 5号機一覧
   - https://pachisuro100.com/sagyo/
   - ジャンジャン飯店をA+RT / コルモ / 2007/7として整理
   - reliability: RETROSPECTIVE_SUPPORT

## missingFields

- RT100Gの比較可能な純増枚数/G
- 設定変更時のRT残G/内部状態処理
- 据え置き時・電源OFF→ON時のRT残G/内部状態処理
- 本機固有の設定変更判別（ガックン等）
- 設定変更時の公開朝一数値

## conflicts

1. 機械割: パチマガスロマガ `96.80 / 98.86 / 101.34 / 103.83 / 106.59 / 110.35%`、K-Navi `95.4 / 97.6 / 100.5 / 103.2 / 106.3 / 110.1%`、5号機クロニクル `96.0 / 98.0 / 101.0 / 103.0 / 106.0 / 110.0%`。定義/シミュレーション条件差の可能性があり平均化しない。

## notes

- 前作 `ジャンジャン年中猛特訓`（SNKプレイモア）や後作 `ジャンジャンカーニバル` と混同しない。
- 本機はコルモ製で、巨大16コマ・1ラインリールが特徴。
