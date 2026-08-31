# 華一番-30

machineName: 華一番-30
manufacturer: パイオニア
generation: 5号機
releaseDate: 2007-11-11（25φ同時納品開始予定） / 2007-11（メーカー公式発売月）
systemType: ノーマル / ボーナス主体 + 7GプチRT
medalDiameter: 30φ
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## release / identity

- パイオニア公式製品一覧は `ハナイチバン` と `ハナイチバン-30` を別製品として掲載し、25φ・30φをデザイン違いで同時発表、2007年11月発売とする。
- グリーンべると2007-10-12記事は『華一番』の納品を2007-11-11開始予定と報道し、K-Navi展示会情報も『華一番』『華一番-30』同時発表を記録。
- パチマガスロマガは `華一番&30` として25φ/30φ共通ページで性能値を掲載。兄弟機の推定流用ではなく、同一解析ページによる共通性能確認として採用する。

信頼度: OFFICIAL / INDUSTRY

## payoutRateBySetting

メーカー発表値（パチマガスロマガ掲載）:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 103.0% |
| 5 | 105.0% |
| 6 | 107.0% |

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/334 | 1/381 | 1/178 |
| 2 | 1/315 | 1/364 | 1/168 |
| 3 | 1/309 | 1/348 | 1/163 |
| 4 | 1/297 | 1/341 | 1/159 |
| 5 | 1/287 | 1/334 | 1/154 |
| 6 | 1/273 | 1/315 | 1/146 |

`華一番&30` 共通解析値。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

1000円あたりのゲーム数:
- 設定1: `36.37G`
- 設定2: `36.37G`
- 設定3: `37.40G`
- 設定4: `38.14G`
- 設定5: `39.01G`
- 設定6: `39.12G`

信頼度: ANALYSIS_HIGH

## netIncrease

- 巻物またはチェリー成立後に7Gの演出用プチRT「おかわりタイム」へ移行。
- プチRT中リプレイ確率は設定1/2 `1/1.39`、設定3 `1/1.40`、設定4/5 `1/1.41`、設定6 `1/1.42`。
- 長期RT/ARTではなく、比較用の純増枚/G公開値は確認できないため `NOT_PRIMARY_METRIC`。

信頼度: ANALYSIS_HIGH（RT構造）

## basicPayout

- BIG: 348枚を超える払い出しで終了、純増約300枚。
- REG: 108枚を超える払い出しで終了、純増約100枚。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 30φ仕様。
- 同時成立あり。
- 巻物またはチェリー成立後、最低7Gの演出用RT「おかわりタイム」。
- 通常時ゲーム数天井、ART/AT、CZ型初当たり管理は確認されない。

## resetBehavior

### settingChangeBehavior

- 設定変更時の通常状態/7GプチRT残状態処理は、本機30φ固有または25/30共通の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時のプチRT残G・内部状態は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみでのプチRT残G・内部状態は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常時ゲーム数天井は `NONE_CONFIRMED`。

### ceilingAfterReset

- リセット短縮天井/設定変更専用天井は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時モード再抽選、公開モード振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- 7GプチRT中の設定変更/据え置き/電断時残状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（5号機初期、有利区間制度前）。

### resetBenefits

- 設定変更/朝一固有の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更/朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 30φ版固有または25/30共通のガックン、初期出目、ランプ/役物等による設定変更・据え置き判別は、表記揺れ・型式・メーカー・設定変更/リセット/朝一/据え置き/電断/ガックンを組み替えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 公開された設定変更時専用朝一数値は確認できず。

## sources

取得日: 2026-09-01

1. パイオニア公式 — パチスロ機種情報2001年~2009年
   - https://www.slot-pioneer.co.jp/products/2009.html
   - ハナイチバン / ハナイチバン-30を別製品として掲載、25φ・30φデザイン違い同時発表、2007年11月発売。
   - reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース — パイオニア、新筐体の『華一番』を発表（2007-10-12）
   - https://news.p-world.co.jp/articles/2426/greenbelt
   - 11月11日納品開始予定、主要性能概要。
   - reliability: INDUSTRY
3. パチマガスロマガ — 華一番&30 ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/h.php
   - 25φ/30φ共通ページ、設定別BIG/REG/合算、メーカー発表機械割。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 華一番&30 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/a-1.php
   - 同時成立/プチRT、BIG約300枚、REG約100枚。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 華一番&30 小役確率/ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/c-1.php
   - 設定別1000円ベース、7GプチRTとRT中リプレイ確率。
   - reliability: ANALYSIS_HIGH
6. K-Navi — 華一番
   - https://p-kn.com/slot/723/
   - 展示会導線に『華一番』『華一番-30』同時発表記録、共通主要スペック。
   - reliability: ANALYSIS_HIGH

## missingFields

- 30φ版について日単位のホール導入実績日
- 設定変更時の7GプチRT残状態処理
- 据え置き時のプチRT残G・内部状態引継ぎ
- 電源OFF→ON時のプチRT残G・内部状態引継ぎ
- 本機固有の設定変更判別要素

## conflicts

- 主要性能値の実質的競合は今回確認せず。
