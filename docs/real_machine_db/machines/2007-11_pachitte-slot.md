# パチってスロット

machineName: パチってスロット
manufacturer: スパイキー
generation: 5号機
releaseDate: 2007-11
systemType: ノーマル / ボーナス主体 + 3GプチRT
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## release / identity

- 5号機クロニクルはスパイキーの2007年導入機として本機を掲載し、導入時期を `2007/11` とする。
- K-Naviにはスパイキーの新機種「パチってスロット」プレス説明会記録が残る。
- P-WORLDの型式名は `パチッテスロットA`。
- 日単位のホール導入日は、機種名・型式名・スパイキー・プレス説明会・導入・納品等を組み替えて再探索したが確定できなかったため、月精度 `2007-11` を採用する。

信頼度: ANALYSIS_HIGH（月精度） / UNVERIFIED（日精度）

## payoutRateBySetting

### パチマガスロマガ（シミュレート値）

| 設定 | 機械割 |
|---|---:|
| 1 | 96.21% |
| 2 | 97.98% |
| 3 | 99.71% |
| 4 | 101.46% |
| 5 | 103.26% |
| 6 | 108.56% |

### 5号機クロニクル

| 設定 | 機械割 |
|---|---:|
| 1 | 96.0% |
| 2 | 98.1% |
| 3 | 100.0% |
| 4 | 102.0% |
| 5 | 104.0% |
| 6 | 110.0% |

設定6で1.44pt差があり、単純な丸めだけとは断定しない。平均せず `CONFLICT` として双方保持。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガとP-WORLDで丸め範囲内に一致。

| 設定 | BIG | REG | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/257.00 | 1/387.79 | 1/154.57 |
| 2 | 1/246.38 | 1/370.26 | 1/147.94 |
| 3 | 1/219.92 | 1/489.07 | 1/151.70 |
| 4 | 1/227.56 | 1/341.33 | 1/136.53 |
| 5 | 1/203.53 | 1/451.97 | 1/140.33 |
| 6 | 1/227.56 | 1/225.99 | 1/113.38 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- 設定1〜5: `36.27G/1000円`
- 設定6: `37.96G/1000円`
- パチマガスロマガは「プチRTは考慮せず」と明記。
- K-Naviにも同じ数値が掲載されており、別系統で照合できる。

信頼度: ANALYSIS_HIGH

## netIncrease

- 本機はノーマル/ボーナス主体。
- 白BAR入賞後3G間はプチRT。
- パチマガスロマガではプチRT中リプレイ確率が設定1〜5 `1/1.27`、設定6 `1/1.28`。
- K-NaviではプチRT中リプレイ確率を全設定共通 `1/1.25` と掲載しており細部に差がある。
- 物差し用途で比較可能な「純増枚/G」の公開値は確認できず、ボーナス後長期RT/ARTではないため `NOT_PRIMARY_METRIC` とする。

信頼度: CONFLICT_DETAIL（RT中リプレイ確率）

## basicPayout

パチマガスロマガ:
- BIG: 規定払い出し252枚、純増約247枚。
- REG: 規定払い出し98枚、純増約104枚。
- 上記規定枚数を超える払い出しで終了。

P-WORLDもBIG 252枚超、REG 98枚超の払い出し終了条件を掲載。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 新規参入メーカー・スパイキーの第1弾。
- ノーマル/同時成立あり/プチRT。
- 4種類のリプレイがボーナス同時当選契機。
- 白BAR入賞後3GのプチRTを搭載。
- 通常時ゲーム数天井、CZ、ART、長期RT、モード管理を示す高信頼資料は確認できず。

## resetBehavior

### settingChangeBehavior

- 設定変更時の3GプチRT状態、成立済みボーナス状態、リール初期挙動について本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- `パチってスロット / パチッテスロットA / スパイキー` と `設定変更 / リセット / 朝一 / ガックン / 据え置き` を組み替えて再探索済み。

### carryOverBehavior

- 据え置き時のプチRT残G・内部状態の扱いを示す直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみの場合のプチRT残G・内部状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常時ゲーム数天井を確認できず、天井ゲーム数カウンタは `NONE_CONFIRMED`。

### ceilingAfterReset

- リセット短縮天井、設定変更後専用天井は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時モード再抽選、公開モード振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- 3GプチRT中に設定変更/電断した場合の残状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- 通常時に別途管理される高低状態は今回確認できず。

### advantageousSectionReset

- `NOT_APPLICABLE`（5号機初期、有利区間制度前）。

### resetBenefits

- 設定変更/朝一固有の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更/朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、液晶/ランプ等による設定変更・据え置き判別は、資料系統と検索語を変えても直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 公開された設定変更時専用の朝一数値は今回確認できず。

## sources

取得日: 2026-09-01

1. パチマガスロマガ — パチってスロット 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/01/a.php
   - ノーマル/同時成立/プチRT、BIG規定252枚・純増247枚、REG規定98枚・純増104枚。
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/01/h.php
   - 設定別BIG/REG/合成、シミュレート機械割96.21〜108.56%。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 小役確率/1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/01/c.php
   - 3GプチRT、設定1〜5 36.27G、設定6 37.96G、プチRT中リプレイ確率。
   - reliability: ANALYSIS_HIGH
4. K-Navi — パチってスロット 小役確率
   - https://p-kn.com/slot/661/4091/
   - 1000円あたり設定1〜5 36.27G、設定6 37.96G、プチRT中リプレイ確率。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — パチってスロット
   - https://www.p-world.co.jp/machine/database/4950
   - 型式名パチッテスロットA、設定別BIG/REG/合成、BIG/REG規定払い出し終了条件。
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル — スパイキー5号機全機種一覧
   - https://5goki.com/spiky
   - 導入2007/11、別系列機械割96.0〜110.0%。
   - reliability: ANALYSIS_SINGLE
7. K-Navi — パチってスロット 演出情報 / 展示会導線
   - https://p-kn.com/slot/661/direct/
   - スパイキーの新機種「パチってスロット」プレス説明会記録。
   - reliability: PERIOD_ARCHIVE

## missingFields

- 日単位の具体的ホール導入/納品開始日
- 設定変更時の3GプチRT状態処理
- 据え置き時のプチRT残G・内部状態引継ぎ
- 電源OFF→ON時のプチRT残G・内部状態引継ぎ
- 本機固有の変更判別要素

## conflicts

- 設定別機械割: パチマガスロマガのシミュレート `96.21/97.98/99.71/101.46/103.26/108.56%` と5号機クロニクル `96.0/98.1/100.0/102.0/104.0/110.0%`。平均せず双方保持。
- プチRT中リプレイ確率: パチマガスロマガは設定1〜5 `1/1.27`・設定6 `1/1.28`、K-Naviは全設定共通 `1/1.25`。物差しの主要純増値ではないが詳細競合として保持。
