# インディ・ジョーンズS

machineName: インディ・ジョーンズS
manufacturer: SANKYO
releaseDate: 2008-01-07
generation: 5号機
systemType: ボーナス主体 + RT
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## identification

- SANKYO公式オンライン博物館で導入年月 `2008.01`、販売名「インディ・ジョーンズ」、型式名「インディ・ジョーンズ S」と確認。
- 2007-11-28にSANKYOが「銀河鉄道物語」と同時発表。当時グリーンべるとは両機とも「1月上旬の納品予定」と記録。
- 直前の銀河鉄道物語調査で確認済みの当時系旧DB「パチスロ業界初まとめ」は両機を `2008/1/7発売` と記録しているため、本DBでは日精度候補として `2008-01-07` を採用する。
- 全面液晶、8ライン/洞窟ステージ、小役3連続をRT契機として見せる構成。

## payoutRateBySetting

当時解析・K-Navi・後年整理DBで一致。

| 設定 | 機械割 |
|---|---:|
| 1 | 95.3% |
| 2 | 98.2% |
| 3 | 101.4% |
| 4 | 103.2% |
| 5 | 105.5% |
| 6 | 108.0% |

reliability: ANALYSIS_HIGH。

## initialHitBySetting

SANKYO公式、P-WORLD、K-Navi、当時解析で主要値が整合。

| 設定 | BIG | REG | アドベンチャータイム | BIG/REG/RT込み合成 |
|---|---:|---:|---:|---:|
| 1 | 1/682.67 | 1/728.18 | 1/661 | 1/230 |
| 2 | 1/590.41 | 1/728.18 | 1/661 | 1/218 |
| 3 | 1/520.13 | 1/728.18 | 1/668 | 1/208 |
| 4 | 1/485.45 | 1/728.18 | 1/712 | 1/206 |
| 5 | 1/455.11 | 1/728.18 | 1/682 | 1/198 |
| 6 | 1/428.34 | 1/728.18 | 1/618 | 1/187 |

- 公式は整数丸めで BIG `1/682〜1/428`、REG `1/728`、RT `1/661〜1/618`、合成 `1/230〜1/187`。
- ここで公式/K-Naviの「合成」はBIG+REGのみの合算ではなく、RT契機を含む表示値として扱う。
- BIG+REGのみのボーナス合算は後年DBで設定1約1/352.3〜設定6約1/269.0と整理されるが、定義を分けて保持する。
- reliability: OFFICIAL + ANALYSIS_HIGH。

## baseGamesPer50

- 当時グリーンべるとの発表記事: `1000円あたり44G`（代表値）。
- 2008年当時の解析ブログ: 設定1〜6 `43.0 / 43.5 / 44.8 / 45.7 / 46.9 / 47.9G`。
- 設定別値は単一当時解析のため `ANALYSIS_SINGLE`、44G代表値は `INDUSTRY`。

| 設定 | 50枚あたり |
|---|---:|
| 1 | 43.0G |
| 2 | 43.5G |
| 3 | 44.8G |
| 4 | 45.7G |
| 5 | 46.9G |
| 6 | 47.9G |

## netIncrease

- RT「アドベンチャータイム」は `約+0.9枚/G`。
- 当時グリーンべると、K-Navi、後年5号機クロニクルで一致。
- RTは `100G` または `次回BIG/RB当選まで` の2系統。
- reliability: INDUSTRY + ANALYSIS_HIGH。

## basicPayout

当時グリーンべると、パチマガスロマガ、P-WORLDを主系列とする。

- BIG: 466枚超払い出しで終了、純増約330枚。
- REG: 146枚超払い出しで終了、純増約106枚。
- ミニボーナス1: 3回入賞または3G消化で終了 + RT100G。
- ミニボーナス2: 3回入賞または3G消化で終了 + 次回ボーナスまでRT。
- 後年5号機クロニクルはBIG約210枚/REG約60枚とするが、SANKYO公式のゲーム構造、当時グリーンべると、パチマガスロマガ、P-WORLDの払い出し条件/純増と整合しないため `CONFLICT_BASIC_PAYOUT_SOURCE` として平均せず別保持し、物差し主系列から除外する。

reliability: INDUSTRY + ANALYSIS_HIGH / CONFLICT。

## modeSpecificMinimumData

- RT「アドベンチャータイム」: 約+0.9枚/G。
- 小役3連続が液晶上の主なRTチャンス。内部的には3回入賞で終了するボーナス役を経由してRTへ入ると当時グリーンべるとが説明。
- RTは100G終了タイプと次回BIG/RBまで継続タイプが存在。
- RT初当たり/出現率: 設定1〜6 `1/661 / 1/661 / 1/668 / 1/712 / 1/682 / 1/618`。
- 通常時ゲーム数天井、周期CZ、AT/ART、有利区間は確認されない。

## resetBehavior

### settingChangeBehavior
`UNVERIFIED_AFTER_RESEARCH`。

`インディ・ジョーンズS / インディジョーンズS / インディ・ジョーンズ S / SANKYO / アドベンチャータイム` に `設定変更 / リセット / 朝一 / RAM / 初期化 / RT` を組み合わせ、公式、当時業界、当時解析、K-Navi、P-WORLD、後年5号機DBを横断したが、本機固有の設定変更時内部処理を直接説明する資料を確定できなかった。

### carryOverBehavior
`UNVERIFIED_AFTER_RESEARCH`。

通常時の天井/蓄積型ゲーム数管理は確認されないが、据え置き時のRT残G、ミニボーナス成立状態等を本機固有に説明する資料は確認できず、一般的5号機挙動から推定しない。

### powerCycleBehavior
`UNVERIFIED_AFTER_RESEARCH`。

`電源OFF→ON / 電断 / 復帰 / 朝一出目` も追加して再探索したが、電源OFF→ONのみの場合のRT残G、成立状態、液晶ステージ/初期出目等の直接資料を確定できなかった。

### gameCounterReset
- 通常時ゲーム数天井: `NONE_CONFIRMED`。
- 天井用ゲーム数カウンタ: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。

### ceilingAfterReset
- リセット短縮天井: `NONE_CONFIRMED`。
- 朝一専用天井: `NONE_CONFIRMED`。

### modeAfterReset
- 設定変更専用モード/朝一専用モード/公開モード振り分け: `NONE_CONFIRMED`。
- 「8ラインステージ」「洞窟ステージ」は液晶演出上の滞在ステージとして扱い、リセット恩恵用内部モードと混同しない。

### stateAfterReset
- RT「アドベンチャータイム」中の設定変更/据え置き/電断時処理: `UNVERIFIED_AFTER_RESEARCH`。
- 通常時に比較可能な高確/ART/AT状態: `NONE_CONFIRMED`。

### advantageousSectionReset
`NOT_APPLICABLE`（2008年5号機、有利区間制度前）。

### resetBenefits
朝一/設定変更専用の天井短縮、当選率優遇、専用CZ/RT恩恵: `NONE_CONFIRMED`。

### resetPenalties
設定変更時のみの主要な公開不利要素: `NONE_CONFIRMED`。

### resetDetection
`UNVERIFIED_AFTER_RESEARCH`。

`ガックン / 初期出目 / 液晶 / RT判別 / 据え置き判別` を含めて再探索したが、本機固有の設定変更/据え置き判別法を直接示す現存資料を確定できなかった。

### numericResetData
公開された朝一専用数値、設定変更専用振り分け、短縮天井G数、リセット恩恵発生率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. SANKYOオンライン博物館 — インディ・ジョーンズ
   - https://www.sankyo-fever.jp/collection/525/
   - 導入年月、型式名、BIG/REG/RT/合成、RT100Gまたは次回ボーナスまで、機種同定。
   - reliability: OFFICIAL
2. グリーンべると — SANKYOの『銀河鉄道物語』、タッチパネルを搭載
   - https://web-greenbelt.jp/00004376/
   - 2007-11-28発表、1月上旬納品予定、RT約0.9枚/G、BIG約330枚、REG約106枚、1000円約44G、内部RT契機の説明。
   - reliability: INDUSTRY
3. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 当時系保存DB。銀河鉄道物語/インディ・ジョーンズSを2008/1/7発売と記録。直前レコード調査で確認済み。
   - reliability: ARCHIVE_SECONDARY
4. パチマガスロマガ公式 — インディ・ジョーンズS
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/13/a.php
   - BIG466枚超/約330枚、REG146枚超/約106枚、2種ミニボーナスとRT仕様。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — インディ・ジョーンズS
   - https://www.p-world.co.jp/machine/database/5006
   - BIG/REG/RT出現率、BIG466枚以上/REG146枚以上の払い出し終了条件を照合。
   - reliability: INDUSTRY_DB
6. K-Navi — インディ・ジョーンズ
   - https://p-kn.com/slot/740/
   - 設定別BIG/REG/RT/合成、機械割95.3〜108.0%、RT純増約0.9枚/Gを照合。
   - reliability: ANALYSIS_HIGH
7. 天井ハイエナ生活 — インディ・ジョーンズS パチスロ解析攻略
   - https://macerate.seesaa.net/article/78021405.html
   - 2008年当時解析。設定別BIG/REG/RT/機械割、通常時コイン持ち43.0〜47.9G。
   - reliability: ANALYSIS_SINGLE
8. 5号機クロニクル — SANKYO 5号機一覧
   - https://5goki.com/sankyo
   - 機械割・主要確率・RT約0.9枚/Gは他資料と整合。一方BIG約210枚/REG約60枚は当時主系列と競合するため、その2値は物差し主系列から除外。
   - reliability: SECONDARY / CONFLICT

## missingFields

- 本機固有の設定変更/据え置き/電源OFF→ON時内部挙動
- RT中の設定変更/据え置き/電断時処理
- 本機固有の設定変更判別法

## conflicts

- `CONFLICT_BASIC_PAYOUT_SOURCE`: 当時グリーンべると/パチマガスロマガ/P-WORLDはBIG約330枚（466枚超払い出し）、REG約106枚（146枚超払い出し）で整合。一方5号機クロニクルはBIG約210枚/REG約60枚とする。平均せず双方を保持し、時代近接性と複数照合から約330/106枚系列を物差し主系列とする。
- `TERMINOLOGY_NOTE_RT_ART`: SANKYO公式、当時グリーンべると、パチマガスロマガ、K-Naviは「RT」と表現。後年5号機クロニクルは「ART」と表現する。本DBでは当時一次/近接資料を優先し `RT` と分類する。
