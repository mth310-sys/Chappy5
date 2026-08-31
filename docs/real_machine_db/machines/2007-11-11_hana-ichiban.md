# 華一番

machineName: 華一番
manufacturer: パイオニア
generation: 5号機
releaseDate: 2007-11-11（納品開始予定） / 2007-11-12（導入カレンダー）
systemType: ノーマル / ボーナス主体 + 7GプチRT
medalDiameter: 25φ
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## release / identity

- パイオニア公式製品一覧は `ハナイチバン` と `ハナイチバン-30` を別製品として掲載し、25φ・30φをデザイン違いで同時発表、2007年11月発売とする。
- グリーンべると2007-10-12記事は『華一番』の納品を `2007-11-11` から開始予定と報道。
- パチビー導入カレンダーは `2007-11-12` 導入機種として掲載。納品開始とホール導入日の定義差として双方保持し、競合扱いにはしない。
- パチマガスロマガは `華一番&30` として25φ/30φ共通ページで性能値を掲載しているため、性能コアは両仕様共通値として採用できる根拠がある。

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

K-Naviも同値を掲載。

信頼度: ANALYSIS_HIGH（メーカー発表値の転載 + 別系統照合）

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/334 | 1/381 | 1/178 |
| 2 | 1/315 | 1/364 | 1/168 |
| 3 | 1/309 | 1/348 | 1/163 |
| 4 | 1/297 | 1/341 | 1/159 |
| 5 | 1/287 | 1/334 | 1/154 |
| 6 | 1/273 | 1/315 | 1/146 |

パチマガスロマガ（メーカー発表値）とK-Naviで一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

1000円あたりのゲーム数（パチマガスロマガ）:
- 設定1: `36.37G`
- 設定2: `36.37G`
- 設定3: `37.40G`
- 設定4: `38.14G`
- 設定5: `39.01G`
- 設定6: `39.12G`

グリーンべると当時記事の「約37G/1000円」と整合。

信頼度: ANALYSIS_HIGH

## netIncrease

- 本機はボーナス主体で、巻物またはチェリー成立後に7Gの演出用プチRT「おかわりタイム」へ移行。
- パチマガスロマガ掲載のプチRT中リプレイ確率は設定1/2 `1/1.39`、設定3 `1/1.40`、設定4/5 `1/1.41`、設定6 `1/1.42`。
- 比較用の純増枚/Gとして明示された高信頼値は確認できず、長期RT/ARTではないため `NOT_PRIMARY_METRIC`。

信頼度: ANALYSIS_HIGH（RT構造）

## basicPayout

- BIG: 348枚を超える払い出しで終了、純増約300枚。
- REG: 108枚を超える払い出しで終了、純増約100枚。
- グリーンべると当時記事でもBB約300枚・RB約100枚と一致。

信頼度: ANALYSIS_HIGH / INDUSTRY

## modeSpecificMinimumData

- 同時成立あり。
- 巻物またはチェリー成立後、最低7Gの演出用RT「おかわりタイム」。
- 「並」「超」の演出差があるが、実機完全再現用の詳細振り分けは収集対象外。
- 通常時ゲーム数天井、ART/AT、CZ型初当たり管理は確認されない。

## resetBehavior

### settingChangeBehavior

- 設定変更時に通常状態/7GプチRT残状態がどう処理されるか、本機固有の直接資料は `UNVERIFIED_AFTER_RESEARCH`。
- `華一番 / ハナイチバン / 華一番30 / ハナイチバン-30 / パイオニア` と `設定変更 / リセット / 朝一 / 据え置き / 電源 / ガックン` を組み替えて再探索した。

### carryOverBehavior

- 据え置き時のプチRT残G・内部状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみでのプチRT残G・内部状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常時ゲーム数天井は `NONE_CONFIRMED`。

### ceilingAfterReset

- リセット短縮天井/設定変更専用天井は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時モード再抽選、公開モード振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- 7GプチRT中の設定変更/据え置き/電断時残状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- 通常時に別途管理される高低状態は `NONE_CONFIRMED`。

### advantageousSectionReset

- `NOT_APPLICABLE`（5号機初期、有利区間制度前）。

### resetBenefits

- 設定変更/朝一固有の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更/朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、ランプ/役物等による設定変更・据え置き判別は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 公開された設定変更時専用の朝一数値は確認できず。

## sources

取得日: 2026-09-01

1. パイオニア公式 — パチスロ機種情報2001年~2009年
   - https://www.slot-pioneer.co.jp/products/2009.html
   - ハナイチバン / ハナイチバン-30を別製品として掲載、25φ・30φデザイン違い同時発表、2007年11月発売。
   - reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース — パイオニア、新筐体の『華一番』を発表（2007-10-12）
   - https://news.p-world.co.jp/articles/2426/greenbelt
   - 11月11日納品開始予定、合算1/178〜1/146、出玉率97〜107%、約37G/1000円、BB約300枚/RB約100枚、7G以上のおかわりタイム。
   - reliability: INDUSTRY
3. パチビー — 2007年11月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-11
   - 2007-11-12導入機種として華一番を掲載。
   - reliability: PERIOD_ARCHIVE
4. パチマガスロマガ — 華一番&30 ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/h.php
   - 25φ/30φ共通ページ、設定別BIG/REG/合算、メーカー発表機械割。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 華一番&30 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/a-1.php
   - 同時成立/プチRT、BIG約300枚、REG約100枚。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 華一番&30 小役確率/ベース
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/84/c-1.php
   - 設定別1000円ベース、7GプチRTとRT中リプレイ確率。
   - reliability: ANALYSIS_HIGH
7. K-Navi — 華一番
   - https://p-kn.com/slot/723/
   - 設定別BIG/REG/合算、機械割、348/108枚超払い出し終了、7Gおかわりタイム。
   - reliability: ANALYSIS_HIGH

## missingFields

- 設定変更時の7GプチRT残状態処理
- 据え置き時のプチRT残G・内部状態引継ぎ
- 電源OFF→ON時のプチRT残G・内部状態引継ぎ
- 本機固有の設定変更判別要素

## conflicts

- 主要性能値の実質的競合は今回確認せず。
- `2007-11-11` は納品開始予定、`2007-11-12` は導入カレンダーで定義が異なるためCONFLICTにはしない。
