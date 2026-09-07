# スーパービンゴNEO-30

machineName: スーパービンゴNEO-30
alternateName: スーパービンゴネオS2-30 / SUPER BINGO NEO 30φ
manufacturer: ベルコ
releaseDate: 2015-02-23
releaseDatePrecision: analysis_database_exact_hall_start
releaseDateNote: HAZUSEの30φ固有ページで2015-02-23導入開始。K-Naviは2015年2月下旬として掲載。2014年10月導入の25φ「スーパービンゴNEO」と区別する。
generation: 5号機
systemType: AT / CZ / 周期抽選 / 30φ
modelName: スーパービンゴネオS2-30
inspectionNumber: 4S0463
settingConfiguration: 1 / 2 / 3 / 4 / 5 / 6
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_UNVERIFIED

## identity

- HAZUSEの30φ固有ページで型式名 `スーパービンゴネオS2-30`、検定番号 `4S0463`、導入開始日2015-02-23を直接確認。
- P-WORLDの同型式30φページでメーカーをベルコ、5号機AT・沖スロ・CZ・天井搭載として確認。
- K-Navi 2015年2月導入カレンダーはベルコ「スーパービンゴNEO-30」を「2015年2月下旬」と掲載し、HAZUSEの具体日と整合。
- 2014-10-20導入の25φ「スーパービンゴNEO」は別導入・別型式系統として扱い、本レコードは30φ型式に限定する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_IDENTITY

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.8% |
| 3 | 100.2% |
| 4 | 104.3% |
| 5 | 108.6% |
| 6 | 113.1% |

- HAZUSE 30φ固有ページで直接確認。
- pacnkの30φ型式ページにも同系列が掲載されるが、同ページの導入年月は25φと混同した可能性があるため、性能値の補助照合にのみ使用。
- confidence: ANALYSIS_HIGH_DIRECT_30PHI_WITH_SECONDARY_MATCH

## initialHitBySetting

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/337.6 |
| 2 | 1/321.4 |
| 3 | 1/302.1 |
| 4 | 1/277.6 |
| 5 | 1/252.9 |
| 6 | 1/230.0 |

- HAZUSE 30φ固有ページで直接確認。pacnk 30φページも同系列。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- `50枚 / 1000円 / ベース / コイン持ち / 回転数`、型式名、ベルコ名、30φ表記を組み替えて探索したが、30φ型式に直接ひも付く安全な一次・当時解析値を固定できなかった。
- 25φ側で流通する約29G前後の値は、本レコードへ自動転記しない。

## netIncrease

- AT「ビンゴチャンス」: **約2.8枚/G**。
- HAZUSE 30φ固有ページおよびP-WORLD 30φページで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「ビンゴチャンス」: **初期33G以上+α**。
- 継続抽選型、最大継続率95%とされる。
- 「Hooah!」発生で111G以上の大きな初期ゲーム数へ伸びる契機を持つ。
- P-WORLD 30φページ、HAZUSE 30φ固有ページで基本33G以上+αを照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は周期到達でAT抽選。CZ「THEセグ」を搭載。
- 内部モードA/Bを持ち、天井は **A:999G / B:444G(+前兆)**。
- AT終了後の最大天井は999G。
- 設定変更時・AT終了時にモード移行抽選。
- confidence: ANALYSIS_HIGH_DIRECT_30PHI

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DIRECT_RESET_MODE_DATA_AND_UNVERIFIED_POWER_CARRYOVER
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- HAZUSE 30φ固有解析で **設定変更時に内部モード移行抽選**を直接確認。
- 設定変更時モード振り分けは **モードA 約65% / モードB 約35%**。
- モードAの天井は999G、モードBは444G(+前兆)。
- 設定変更時の内部高確/低確状態の初期振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_DIRECT_30PHI_FOR_MODE

### carryOverBehavior

- 純据え置き時の天井ゲーム数、内部モードA/B、高確/低確、周期進捗の保持契約は `UNVERIFIED_AFTER_RESEARCH`。
- 25φの朝一攻略記事に据え置き判別情報は存在するが、30φ型式へ無条件転記しない。

### powerCycleBehavior

- 設定変更なしの電源OFF→ONでの天井G、モード、内部状態、周期進捗の保持/再抽選契約は `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機慣例から補完しない。

### gameCounterReset

- 設定変更時にモード抽選が行われ、その選択モードに応じた天井値が公開されていることは確認。
- ただし30φ固有資料で「内部ゲーム数カウンタが0へクリア」と明記した直接文言は固定できず、厳密なフラグは `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更時モードA選択時: **999G**。
- 設定変更時モードB選択時: **444G(+前兆)**。
- 設定変更時のモードB選択率が約35%のため、約35%で444G側の短い天井が選ばれる公開朝一要素として保存。
- 固定一律のリセット短縮天井ではなく、モード抽選結果依存。

### modeAfterReset

- **モードA 約65% / モードB 約35%**。
- HAZUSE 30φ固有解析による直接値。
- confidence: ANALYSIS_HIGH_DIRECT_30PHI

### stateAfterReset

- 通常時に低確/高確の内部状態が存在することは30φ固有解析で確認。
- 設定変更直後の低確/高確初期振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時に約35%でモードBが選択される場合、天井が444G(+前兆)となるため、999GのモードAに対して朝一の短縮恩恵となる。
- それ以外の朝一CZ確定・高確確定等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更に固有の主要な公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 25φ「スーパービンゴNEO」では朝一BETランプによる変更推測（消灯でリセット、点灯で据え置き）を扱う当時K-Navi記事が存在する。
- ただし30φ `スーパービンゴネオS2-30 / 4S0463` 固有資料で同じ契約を直接確認できなかったため、本レコードでは **転記せず `UNVERIFIED_AFTER_RESEARCH`**。
- 30φ固有のリールガックン契約も `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時モードA: **約65%**。
- 設定変更時モードB: **約35%**。
- モードA天井: **999G**。
- モードB天井: **444G(+前兆)**。
- 朝一専用の内部高確率・CZ突入率などは `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- **設定変更時 A約65% / B約35%**。
- **Bなら444G(+前兆)、Aなら999G**。
- 本DBの朝一客AIで利用できる公開リセット数値として採用。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `スーパービンゴNEO-30 / スーパービンゴネオS2-30 / SUPER BINGO NEO 30φ / ビンゴネオ30 / 4S0463 / ベルコ`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 444G / 999G / モードA / モードB / 高確 / 周期 / ガックン / BETランプ / 3BET / 変更判別 / 50枚 / 1000円 / ベース`。
- 資料系統: HAZUSE 30φ固有DB、P-WORLD 30φ固有DB、K-Navi導入カレンダー、K-Navi 25φ当時攻略記事、当時/後年解析DB。
- 25φ「スーパービンゴNEO」、後継「スーパービンゴネオクラシック」等は別機種として区別。

## release-boundary audit

- K-Navi 2015年2月カレンダーは02/23に「ハナビ」、2月下旬に「スーパービンゴNEO-30」を掲載。
- HAZUSE 30φ固有DBが導入開始日を **2015-02-23** と具体化するため、本DBのqueueDate/releaseDateは2015-02-23で処理。
- 2014-10-20の「スーパービンゴNEO」は25φ側の導入であり、本30φ型式の日付競合としては扱わない。
- 02/23群についてK-Navi掲載パチスロはハナビと本機で、現時点で追加の具体日付き未処理機を固定できず `2015-02-23_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とする。
- 次は2015-02-24～03-01境界監査後、2015-03-02群を全メーカー横断で洗い出す。強い次アンカーとしてK-Naviで **戦国コレクション2（KPE）**、**パチスロサイバーブルー（三洋物産）**の2015-03-02導入を確認。

## sources

取得日: 2026-09-07

1. HAZUSE スーパービンゴネオS2-30: https://hazuse.com/machine/pachislot/4S0463/
2. HAZUSE 30φ AT/ART: https://hazuse.com/machine/pachislot/4S0463/genre/209/
3. HAZUSE 30φ 設定推測: https://hazuse.com/machine/pachislot/4S0463/genre/208/
4. P-WORLD スーパービンゴネオS2-30: https://www.p-world.co.jp/machine/database/7564
5. K-Navi 2015年2月導入カレンダー: https://p-kn.com/calendar/201502/
6. K-Navi 25φ スーパービンゴNEO（30φへ転記せず比較資料のみ）: https://p-kn.com/slot/2106/
7. pacnk スーパービンゴネオS2-30（性能補助照合、導入年月は採用せず）: https://pacnk.com/slot/tools/sh_superbingoneos2.html
8. K-Navi 戦国コレクション2（次アンカー）: https://p-kn.com/slot/2201/
9. K-Navi パチスロサイバーブルー（次アンカー）: https://p-kn.com/slot/2215/

## missingFields

- baseGamesPer50Direct30Phi
- exactGameCounterClearWordingOnSettingChange
- carryOverGameCounterModeStateCycleProgress
- powerCycleGameCounterModeStateCycleProgress
- resetInitialLowHighStateDistribution
- direct30PhiBetLampOrGakkunResetDetectionContract

## conflicts

- `SOURCE_DATE_SCOPE_WARNING_PACNK_2014_10_LIKELY_25PHI_BASE_DATE_ON_30PHI_PAGE`: pacnkの30φ型式ページは2014年10月導入とするが、HAZUSEの30φ固有型式は2015-02-23、K-Naviは30φを2015年2月下旬とする。25φの2014-10-20導入日混入可能性が高いため、30φreleaseDateはHAZUSE+K-Navi側を採用し、pacnk日付は採用しない。
