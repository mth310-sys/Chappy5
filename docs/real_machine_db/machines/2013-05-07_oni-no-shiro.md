# 鬼の城

machineName: 鬼の城
manufacturer: メーシー
releaseDate: 2013-05-07
releaseDatePrecision: exact_day
generation: 5号機
systemType: ART
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-05-07**。HAZUSE、K-Navi、パチビーで一致。
- ユニバーサルエンターテインメント公式は発売月を **2013年5月** と掲載。
- formalModelName: **鬼の城T**。
- inspectionNumber: **2S1145**。
- confidence: OFFICIAL_MONTH_AND_MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

`CONFLICT`。平均せず双方を保持する。

### HAZUSE系列

| 設定 | 機械割 |
|---|---:|
| 1 | 98.2% |
| 2 | 99.4% |
| 3 | 102.2% |
| 4 | 106.5% |
| 5 | 110.6% |
| 6 | 116.2% |

### P-WORLD系列

| 設定 | 機械割 |
|---|---:|
| 1 | 98.2% |
| 2 | 99.4% |
| 3 | 102.4% |
| 4 | 106.5% |
| 5 | 110.6% |
| 6 | 116.1% |

- 設定1/2/4/5は一致、設定3と6に0.2pt/0.1pt差があるため丸め差と断定せず `CONFLICT_MINOR_SOURCE_DIFFERENCE` として保持。
- 後年実機販売DBにもP-WORLD系列（設定3 102.4%、設定6 116.1%）が掲載される。

## initialHitBySetting

ART「殲鬼の刻」初当たり:

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/327.4 |
| 2 | 1/298.8 |
| 3 | 1/291.4 |
| 4 | 1/244.3 |
| 5 | 1/247.6 |
| 6 | 1/199.6 |

- HAZUSE、P-WORLDで一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## baseGamesPer50

- **約31.7G/50枚**。
- HAZUSEと当時機種スペック整理で一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## netIncrease

- ART「殲鬼の刻」: **約2.2枚/G**。
- ユニバーサル公式系発表、K-Navi、P-WORLD、パチビー、パチマガスロマガで一致。
- confidence: OFFICIAL_INDUSTRY_AND_MULTI_SOURCE_HIGH

## basicPayout

- ART当選後は「鬼狩RUSH」で初期ゲーム数を決定。
- 赤7揃い1回につき **30G or 100G** 上乗せ。
- 赤7揃いは **最低2回保証**のため、ART初期ゲーム数は **最低60G**。
- ART「殲鬼の刻」は最低60G以上から開始し、純増約2.2枚/G。
- 擬似ボーナスは30G固定、純増約2.2枚/G。

## modeSpecificMinimumData

通常時の主要モードは **通常A / 通常B / 天国**。

- 天国滞在時は **99G以内**のART当選が濃厚。
- 通常Aは100G・300G・700G台、通常Bは400G・800G・1000G台が規定ゲーム数として選択されやすい。
- ART終了から最大 **1299G** で天井到達。最大40Gの前兆を経由してARTへ突入。
- 鬼神界戦発展演出には別系統の「失敗回数天井」が存在し、設定変更後とそれ以外で振り分けが異なる。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__DIRECT_NUMERIC_RESET_TABLES_FIXED__CARRYOVER_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- HAZUSEで **設定変更時専用の規定ゲーム数振り分け**と **設定変更時の通常モード移行率**を直接確認。
- 設定変更時は前日の規定G進捗をそのまま継続するのではなく、設定変更用テーブルから新たな規定Gが選択される構造として扱う。
- 設定変更後の規定G振り分けには設定差があり、設定1～3では1000G以上が選択されず、設定4～6のみ1000～1299Gの振り分けを持つ。
- パチマガスロマガも「リセット後1000G超は設定4以上」と明記。
- 通常モードも設定変更時専用振り分けで再抽選される。

### carryOverBehavior

- 宵越し天井到達を示す実戦・回顧資料は存在し、据え置きで前日ゲーム数が有効だった運用例は確認できる。
- ただし、純据え置き時の **規定G・通常モード・鬼神界戦失敗回数天井・内部状態** をすべてどの粒度で保持するかを直接列挙した本機固有解析表は十分再探索後も固定できず、完全契約は `UNVERIFIED_AFTER_RESEARCH`。
- settingChange専用テーブルの反対推定だけで全要素の据え置き保持を確定しない。

### powerCycleBehavior

- 設定変更を伴わない単純な電源OFF→ONのみで、規定G・通常モード・鬼神界戦失敗回数・内部状態・液晶表示がどう扱われるかを直接示す本機固有資料は、表記揺れ・型式名・メーカー名・「電源OFF ON」「電断」「朝一」等を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- settingChange: **RESET_AND_RESELECT_FROM_SETTING_CHANGE_GAME_TABLE**。
- carryOver: **PARTIAL_EVIDENCE_OF_CARRYOVER_FROM_YOIKOSHI_USE__FULL_CONTRACT_UNVERIFIED**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

設定変更時の規定ゲーム数振り分け（HAZUSE、当時解析系）:

| G数帯 | 設定1～3 | 設定4～6 |
|---|---:|---:|
| 0～99G | 14.55% | 14.55% |
| 100～199G | 12.21% | 12.21% |
| 200～299G | 13.73% | 15.26% |
| 300～399G | 3.05% | 3.05% |
| 400～499G | 19.84% | 15.26% |
| 500～599G | 3.05% | 3.05% |
| 600～699G | 3.05% | 3.05% |
| 700～799G | 6.10% | 6.10% |
| 800～899G | 9.16% | 7.63% |
| 900～999G | 15.26% | 10.68% |
| 1000～1099G | 0% | 3.01% |
| 1100～1199G | 0% | 3.01% |
| 1200～1299G | 0% | 3.01% |

- よって **設定変更後に1000G以上ハマれば設定4以上が濃厚/実質的な変更判別材料**。
- 「設定変更で一律○Gに短縮」ではなく、専用の規定G再抽選テーブル型。

### modeAfterReset

設定変更時の通常モード振り分け:

| 設定 | 通常A | 通常B | 天国 |
|---|---:|---:|---:|
| 1 | 90.80% | 9.20% | 0% |
| 2 | 60.30% | 9.20% | 30.50% |
| 3 | 90.80% | 9.20% | 0% |
| 4 | 60.30% | 9.20% | 30.50% |
| 5 | 90.80% | 9.20% | 0% |
| 6 | 60.30% | 9.20% | 30.50% |

- 偶数設定は設定変更時に **天国30.50%**、奇数設定は天国振り分けなし。
- 通常Bは全設定 **9.20%**。
- confidence: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

### stateAfterReset

- 通常モード以外に、鬼神界戦の発生率・勝率を管理するバトルモードや通常時状態が存在する。
- 設定変更時のこれら全内部状態の初期振り分けを、ホール経営シミュレーションで必要な粒度の直接資料として固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 偶数設定では設定変更時の通常モード振り分けで **天国30.50%**。
- 設定変更後0～99Gの規定G選択率は全設定 **14.55%**、100～199Gは **12.21%**。
- 設定変更時専用の規定G再抽選があるため、朝一ゾーン挙動が通常時とは異なる。

### resetPenalties

- 設定1～3では設定変更時の規定Gに1000G以上の選択肢がなく、設定4～6だけ1000～1299G振り分けを持つため、高設定側だけ極端な深い規定Gが選ばれるケースがある。
- これを一般的な「不利」と断定せず、公開朝一挙動として保持する。

### resetDetection

- **設定変更後にART間1000Gを超えた場合、設定4以上が濃厚**。HAZUSEとパチマガスロマガで確認。
- ガックン、初期出目、液晶ステージ等による本機固有の設定変更/据え置き判別は十分再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers

- settingChangeModeDistribution:
  - odd settings 1/3/5: 通常A 90.80% / 通常B 9.20% / 天国 0%
  - even settings 2/4/6: 通常A 60.30% / 通常B 9.20% / 天国 30.50%
- settingChangeGameTable:
  - 0～99G: 14.55%（全設定）
  - 100～199G: 12.21%（全設定）
  - 1000～1299G: 設定1～3は0%、設定4～6のみ各100G帯3.01%
- morningDetection: **設定変更後1000G超で設定4以上**。

### numericResetData

- settingChangeGameCounter: RESET_AND_RESELECT
- settingChangeMode: RESELECT
- settingChangeOddHeaven: 0%
- settingChangeEvenHeaven: 30.50%
- settingChangeNormalBAllSettings: 9.20%
- settingChange0to99G: 14.55%
- settingChange100to199G: 12.21%
- settingChange1000to1299GSettings1to3: 0%
- settingChange1000to1299GSettings4to6: 3.01% per 100G band
- carryOverGameCounter: PARTIAL_EVIDENCE_ONLY
- powerCycleGameCounter: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_SETTING_CHANGE_NUMERIC_TABLES__PARTIAL_FOR_CARRYOVER__UNVERIFIED_FOR_POWER_CYCLE_AND_GACKUN

## missingFields

- pureCarryOverFullContract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleContract: `UNVERIFIED_AFTER_RESEARCH`
- resetBattleModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- gakkunOrInitialDisplayDetection: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- payoutRateBySetting: `CONFLICT_MINOR_SOURCE_DIFFERENCE`
  - HAZUSE: 98.2 / 99.4 / 102.2 / 106.5 / 110.6 / 116.2%
  - P-WORLD: 98.2 / 99.4 / 102.4 / 106.5 / 110.6 / 116.1%
- ART基本G数の表現:
  - P-WORLDは「1セット60G+α」と表現。
  - K-Navi/パチマガスロマガは「鬼狩RUSHで初期G数決定、最低60G保証」と表現。
  - 実態の比較用コアは **最低60G保証** とし、固定60Gセットと誤解しないよう保持。

## sources

retrievedAt: 2026-09-06

- ユニバーサルエンターテインメント公式（発売2013年5月、ART、メーカー、鬼狩RUSH/桃源の記録再生）: `https://www.universal-777.com/product/slot/onino_shiro/`
- HAZUSE（型式、検定番号、導入日、ART初当たり、31.7G/50枚、機械割、1299G天井、設定変更時規定G/モード数値）: `https://hazuse.com/machine/pachislot/2S1145/`
- P-WORLD（ART初当たり、機械割、ART最低60G級仕様、純増2.2枚/G）: `https://www.p-world.co.jp/machine/database/7039`
- K-Navi（2013-05-07、最低60G保証、純増2.2枚/G、設定変更後解析メニュー）: `https://p-kn.com/slot/1837/`
- K-Navi 展示会速報（2013-03-15、ユニバーサル発表、5月上旬導入予定）: `https://p-kn.com/topics/exhibition/1061/`
- パチビー（2013-05-07、5号機ART、純増約2.2枚/G）: `https://www.pachibee.jp/movies/index/9329`
- パチマガスロマガ（純増2.2枚/G、最低60G、朝イチ/設定変更「リセット後1000G超は設定4以上」）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/41/macy_slot_41.php`
- パチマガスロマガ ゲーム性解説（最低2回赤7、最低60G、純増2.2枚/G）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/41/01.php`
- 当時スペック整理（約31.7G/千円、ART間1299G）: `https://ameblo.jp/slostar/entry-11486053077.html`
- 当時解析整理（設定変更時規定Gテーブルの別系統再掲）: `https://www.slopachi-quest.com/article/368560214-html/`
- 宵越し実戦例（据え置き側の補助証拠。完全契約には使用しない）: `https://moge-site.com/archives/5610`
- 後年番組紹介（鬼の城の宵越し天井到達例。補助証拠のみ）: `https://www.videomarket.jp/title/041358/A041358050999H01`
