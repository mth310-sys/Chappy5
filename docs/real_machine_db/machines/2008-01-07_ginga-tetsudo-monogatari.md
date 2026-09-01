# 銀河鉄道物語

machineName: 銀河鉄道物語
manufacturer: SANKYO
releaseDate: 2008-01-07
generation: 5号機
systemType: ボーナス主体 + RT
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## identification

- SANKYO公式オンライン博物館で導入年月 `2008.01`、販売名/型式名ともに「銀河鉄道物語」と確認。
- 2007-11-28にSANKYOが「インディ・ジョーンズS」と同時発表。当時グリーンべるとは両機を「1月上旬の納品予定」と記録。
- 当時系旧DB「パチスロ業界初まとめ」は両機を `2008/1/7発売` と記録しているため、本DBでは日精度候補として `2008-01-07` を採用する。
- 全面液晶に業界初のタッチパネルを採用。

## payoutRateBySetting

パチマガスロマガのシミュレート値を主系列とする。

| 設定 | 機械割 |
|---|---:|
| 1 | 96.91% |
| 2 | 99.80% |
| 3 | 103.01% |
| 4 | 105.83% |
| 5 | 107.95% |
| 6 | 111.24% |

- ハズセ掲載の丸め値は `97 / 100 / 103 / 105 / 107 / 110%`。
- 設定4〜6は単純丸めでは一致しないため `CONFLICT_PAYOUT_SOURCE` として双方保持する。
- reliability: ANALYSIS_HIGH / CONFLICT。

## initialHitBySetting

SANKYO公式、P-WORLD、パチマガスロマガ、ハズセで主要値が整合。

| 設定 | BIG | MB合成 | MC | 全ボーナス合成 |
|---|---:|---:|---:|---:|
| 1 | 1/528.52 | 1/368.18 | 1/381.02 | 1/138.26 |
| 2 | 1/512.00 | 1/327.68 | 1/352.34 | 1/127.50 |
| 3 | 1/478.36 | 1/309.13 | 1/344.93 | 1/121.59 |
| 4 | 1/461.52 | 1/287.44 | 1/319.69 | 1/113.98 |
| 5 | 1/436.91 | 1/284.94 | 1/304.82 | 1/110.14 |
| 6 | 1/420.10 | 1/264.26 | 1/327.68 | 1/108.50 |

- SANKYO公式は整数丸めで `BB 1/528〜1/420 / MB 1/368〜1/264 / MC 1/381〜1/327 / 合算 1/138〜1/108`。
- reliability: OFFICIAL + ANALYSIS_HIGH。

## baseGamesPer50

パチマガスロマガ掲載の1000円あたりゲーム数。

| 設定 | 50枚あたり |
|---|---:|
| 1 | 36.52G |
| 2 | 37.28G |
| 3 | 37.05G |
| 4 | 37.57G |
| 5 | 37.36G |
| 6 | 38.17G |

reliability: ANALYSIS_HIGH。

## netIncrease

- RT「ビッグワンタイム」を搭載。
- BIG後は50G、ミッションバトルを3回クリアした場合は100GのRTが付与されることをSANKYO公式/ハズセ/P-WORLDで照合。
- 比較可能な `1Gあたり純増枚数` は、機種名・RT名・純増・コイン持ち等で当時解析/旧DBを再探索したが今回確定できず `UNVERIFIED_AFTER_RESEARCH`。

## basicPayout

当時業界記事、パチマガスロマガ、P-WORLDで確認。

- BIG: 純増約260枚（349枚を超える払い出しで終了）。
- ミッションバトル: 4種類。規定払い出しは254/254/193/133枚超で終了し、当時業界記事では獲得約100〜200枚。
- ミッションチャンス: 49枚を超える払い出しで終了、当時業界記事では獲得約50枚。
- ミッションバトル最大クラスは約200枚 + RT100G。

reliability: INDUSTRY + ANALYSIS_HIGH。

## modeSpecificMinimumData

- 通常時はストーリーモード/ギャラクシーモードをタッチパネルで選択可能だが、これは演出上のモードであり、ホール経営用の内部モード移行データとは区別する。
- RT「ビッグワンタイム」はBIG後50G、ミッションバトル3回クリア後100G。
- 通常時ゲーム数天井、ART/AT、天井CZは確認されない。

## resetBehavior

### settingChangeBehavior
`UNVERIFIED_AFTER_RESEARCH`。

`銀河鉄道物語 SANKYO 設定変更 / リセット / 朝一 / RAM / RT / 初期化`、型式名・RT名を組み替え、公式、当時業界、パチマガスロマガ、ハズセ、P-WORLD、旧5号機DBを横断したが、本機固有の設定変更時内部処理を直接説明する資料を確定できなかった。

### carryOverBehavior
`UNVERIFIED_AFTER_RESEARCH`。

通常時天井/蓄積型モードは確認されないが、据え置き時のRT残Gや成立済み状態の扱いを本機固有に説明する資料は確認できず、一般的5号機挙動から推定しない。

### powerCycleBehavior
`UNVERIFIED_AFTER_RESEARCH`。

電源OFF→ONのみの場合のRT残G、液晶/タッチパネル表示状態、初期出目等を直接説明する現存資料を確定できなかった。

### gameCounterReset
- 通常時ゲーム数天井: `NONE_CONFIRMED`。
- 天井用ゲーム数カウンタ: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。

### ceilingAfterReset
- リセット短縮天井: `NONE_CONFIRMED`。
- 朝一専用天井: `NONE_CONFIRMED`。

### modeAfterReset
- 設定変更専用モード/朝一専用モード/公開モード振り分け: `NONE_CONFIRMED`。
- 液晶のストーリーモード/ギャラクシーモードはプレイヤー選択式の演出モードであり、リセット恩恵用内部モードとして扱わない。

### stateAfterReset
- RT「ビッグワンタイム」中の設定変更/据え置き/電断時処理: `UNVERIFIED_AFTER_RESEARCH`。
- 通常時に比較可能な高確/ART/AT状態: `NONE_CONFIRMED`。

### advantageousSectionReset
`NOT_APPLICABLE`（2008年5号機、有利区間制度前）。

### resetBenefits
朝一/設定変更専用の天井短縮、当選率優遇、専用CZ/RT恩恵: `NONE_CONFIRMED`。

### resetPenalties
設定変更時のみの主要な公開不利要素: `NONE_CONFIRMED`。

### resetDetection
ガックン、初期出目、液晶/タッチパネル表示、ボーナス履歴表示等を用いた本機固有の設定変更/据え置き判別法: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
公開された朝一専用数値、設定変更専用振り分け、短縮天井G数、リセット恩恵発生率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. SANKYOオンライン博物館 — 銀河鉄道物語
   - https://www.sankyo-fever.jp/collection/524/
   - 公式。導入年月、型式、BB/MB/MC/合算、RT50G/100G、機種同定。
   - reliability: OFFICIAL
2. グリーンべると — SANKYOの『銀河鉄道物語』、タッチパネルを搭載
   - https://web-greenbelt.jp/00004376/
   - 2007-11-28発表、1月上旬納品予定、BIG約260枚、MB約100〜200枚、MC約50枚。
   - reliability: INDUSTRY
3. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 当時系保存DB。銀河鉄道物語/インディ・ジョーンズを2008/1/7発売と記録。
   - reliability: ARCHIVE_SECONDARY
4. パチマガスロマガ公式 — 銀河鉄道物語 基本/確率/PAYOUT/小役
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/12/sankyo_slot_12.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/12/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/12/c.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/12/h.php
   - 設定別精密確率、シミュレート機械割、1000円ベース、規定払い出し/純増目安。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — 銀河鉄道物語
   - https://www.p-world.co.jp/machine/database/5008
   - BIG/MB/MC/合算、BIG約260枚+RT50、MB最大約200枚+RT100を照合。
   - reliability: INDUSTRY_DB
6. ハズセ — 銀河鉄道物語
   - https://hazuse.com/machine/pachislot/7S0559/
   - 設定別確率、機械割丸め値、MB最大約200枚+RT100Gを照合。
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — SANKYO 5号機一覧
   - https://5goki.com/sankyo
   - 同名欄に公式/当時解析と大きく異なるBIG/REG、RT仕様を掲載。機種同定誤りの可能性があるため性能値の主系列には不採用し、CONFLICT_SOURCE_IDENTITYとして保存。
   - reliability: CONFLICT

## missingFields

- RT「ビッグワンタイム」の1Gあたり純増枚数
- 本機固有の設定変更/据え置き/電源OFF→ON時内部挙動
- RT中の設定変更/据え置き/電断時処理
- 本機固有の設定変更判別法

## conflicts

- `CONFLICT_PAYOUT_SOURCE`: パチマガスロマガのシミュレート機械割 `96.91/99.80/103.01/105.83/107.95/111.24%` と、ハズセ `97/100/103/105/107/110%` は設定4〜6で単純丸め以上の差がある。平均せず双方保持。
- `CONFLICT_SOURCE_IDENTITY`: 5号機クロニクルの同名欄は `BIG 1/399.6〜1/348.6 / REG 1/655.4〜1/595.8 / 合算1/248.2〜1/220.1 / BIG後100G RT「ギャラクシーラッシュ」` とするが、SANKYO公式、当時グリーンべると、パチマガスロマガ、P-WORLD、ハズセが一致する本機仕様（BIG 1/528.52〜1/420.10、MB/MC搭載、BIG後50G RT）と根本的に一致しない。別機種データ混入の可能性を疑うが、原因は断定せず当該系列を物差し値から除外。
