# パチスロ輪廻のラグランジェ

machineName: パチスロ輪廻のラグランジェ
aliases: 輪廻のラグランジェ / ラグランジェ / ラグりん
manufacturer: Sammy / サミー
modelName: ラグランジェZR
approvalNumber: 3S0984
releaseDate: 2014-02-03
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: 差枚数管理型AT / 擬似ボーナスAT
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- ALL7、K-Navi、HAZUSEはいずれもホール導入日を **2014-02-03** とする。
- グリーンべるとは2013-12-18の発表記事で「2月上旬納品予定」と報道しており整合する。
- HAZUSEで型式名 **ラグランジェZR**、検定番号 **3S0984** を確認。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.6% |
| 3 | 101.2% |
| 4 | 105.1% |
| 5 | 110.3% |
| 6 | 115.6% |

- CrankySeven、みんスロ等で上記系列が一致。
- スロパチクエストには 97.44 / 98.56 / 101.19 / 105.05 / 110.34 / 115.63% の精密系列があり、標準系列と実質的に丸め整合するため別系列として注記し、平均化しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ラグランジェボーナス（LB）

| 設定 | 確率 |
|---|---:|
| 1 | 1/298.2 |
| 2 | 1/290.1 |
| 3 | 1/275.6 |
| 4 | 1/248.0 |
| 5 | 1/223.9 |
| 6 | 1/197.3 |

### REG

| 設定 | 確率 |
|---|---:|
| 1 | 1/596.7 |
| 2 | 1/586.1 |
| 3 | 1/584.3 |
| 4 | 1/555.0 |
| 5 | 1/537.0 |
| 6 | 1/495.4 |

### AT/擬似ボーナス合算

| 設定 | 確率 |
|---|---:|
| 1 | 1/198.8 |
| 2 | 1/194.1 |
| 3 | 1/187.3 |
| 4 | 1/171.4 |
| 5 | 1/158.0 |
| 6 | 1/141.1 |

- K-Navi、P-WORLD、CrankySeven、みんスロで合算を照合。LB/REG個別値はCrankySeven・みんスロで照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31G/50枚**。
- みんスロの機種整理値を採用。今回、当時一次資料で同値そのものの直接照合は固定できなかったため `ANALYSIS_SINGLE_RETROSPECTIVE` とする。
- confidence: ANALYSIS_SINGLE

## netIncrease

- 擬似ボーナスAT共通で **約2.5枚/G**。
- グリーンべると、P-WORLD、必勝本、みんスロで一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- REG: **50枚**で終了。P-WORLD、必勝本で一致。
- LB: 差枚数管理型AT。開始時に「ウォクスドライブ」で初期獲得枚数を決定するため固定枚数ではない。
- ウォクスドライブVer.アウラは最低100枚保証とする後年整理資料があるが、物差し本体では固定LB獲得枚数として扱わない。
- confidence: ANALYSIS_HIGH_FOR_REG / VARIABLE_FOR_LB

## modeSpecificMinimumData

- 通常時は低確・高確・超高確の内部状態と、通常A / 通常B / 通常C / 天国A / 天国Bのモードを持つ。
- 通常A/B/Cは最大1100G、天国A/Bは116G天井。
- 通常時の全モード移行表は実機完全再現用途となるため本DBでは収集対象外。設定変更専用の挙動だけresetBehaviorに残す。

## ceiling

- 通常モードは **900 / 950 / 1000 / 1050G**で段階的にCZ「ラグランジェチャンス」が確定し、最大 **1100G**。
- 900G以上でボーナス当選時LB以上、1000G/1050Gでは超ウォクスドライブ選択が約1/2、1100Gでは無限CZを経由し輪廻発動確定。
- 天国A/Bは **116G**で天井到達、無限LCへ。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_MODE_STATE_GAME_OFFSET_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **モード・内部状態を再抽選**。
- 単純に内部ゲーム数を0Gへクリアするだけではなく、設定変更後専用の開始ゲーム数（内部ハマリG数）を再抽選する仕様を当時攻略資料で確認。
- 設定変更時は専用の「設定変更モード」へ移行するとする解析資料も確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 純据え置き時の天井ゲーム数・モード・状態の完全な直接契約は、機種名/型式名/メーカー名と「据え置き」「宵越し」「朝一」「天井」を組み替えて再探索したが、今回高信頼本文を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 実戦ブログに据え置き濃厚判別事例はあるが、仕様契約の根拠には採用しない。
- confidence: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ**の場合の内部ゲーム数・モード・状態の本機専用直接記述は、「電源OFF」「電源ON」「電断」「据え置き」「朝一」を含めて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動から推定補完しない。
- confidence: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset

- 設定変更時: **REROLLED_INTERNAL_GAME_OFFSET_CONFIRMED**。
- 0G開始が固定ではなく、0Gまたは変則的な内部開始G数へ再抽選される。
- 後年の整理資料では0G選択25%、変則G数選択75%とされる。変則G数は100/10/1の位を個別抽選する方式。
- confidence: ANALYSIS_MULTI_SOURCE_FOR_REROLL / ANALYSIS_SINGLE_RETROSPECTIVE_FOR_EXACT_25_75_TABLE

### ceilingAfterReset

- 設定変更で前日の天井ハマリ進捗はそのまま利用できず、内部開始G数を再抽選するため朝一の実質残り天井が変化する。
- 通常最大1100Gという天井構造そのものを、設定変更専用の固定短縮天井へ置き換える仕様ではない。
- 攻略資料では設定変更後狙い目500G等の記述があるが、これは期待値上の狙い目であり固定天井値ではない。
- confidence: ANALYSIS_HIGH

### modeAfterReset

- 設定変更時はモードを再抽選し、**設定変更専用モード**を経由する解析が存在。
- 設定変更専用モードからの詳細モード移行表は現存ページでは画像化されており、今回数値を安全に抽出できなかったため `EXACT_TABLE_UNVERIFIED_AFTER_RESEARCH`。
- 通常時モード移行表を朝一値として流用しない。
- confidence: ANALYSIS_HIGH_FOR_SPECIAL_RESET_MODE / UNVERIFIED_FOR_EXACT_TABLE

### stateAfterReset

- 設定変更時の状態振り分けを確認。
- 高確は **全設定共通12.5%**。
- 超高確は設定1～3 **0.8%**、設定4 **1.6%**、設定5・6 **3.1%**。残りが通常（設定1～3 86.7%、設定4 85.9%、設定5・6 84.4%）。
- 超高確はレア役成立まで転落しにくいとされ、朝一の夜背景は高設定期待を上げる判別材料。
- confidence: ANALYSIS_SINGLE_DIRECT_TABLE + RETROSPECTIVE_PROGRAM_SUPPORT

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時は内部開始G数を再抽選するため、0G固定開始より深い内部ゲーム数から始まるケースがある。
- 後年整理では **0G 25% / 変則G数75%**。変則G数の100の位は1が84.4%で、全体として110～130G付近が選ばれやすいとされる。
- 設定変更時の超高確スタート率は高設定ほど優遇（設定1～3 0.8% → 設定5・6 3.1%）。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE_FOR_EXACT_OFFSET_NUMBERS + ANALYSIS_SINGLE_DIRECT_FOR_STATE

### resetPenalties

- 前日天井進捗をそのまま宵越しとして利用できない点は朝一狙い上の主要な不利要素。
- その他の設定変更専用ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 設定変更後の内部開始G数が0G固定ではないため、液晶/データカウンタ上の単純なG数だけで変更判別しにくい。
- 設定変更後に何も引かず夜背景（超高確）へ移行した場合、高設定期待が上がる。パチスロ最強伝説Gの番組概要でも「設定変更後、夜背景なら高設定濃厚!?」という判別要素として扱われている。
- ガックンについては実戦ブログに「ガックンなし＋CZゲーム数のズレ」を据え置き濃厚材料とした例があるが、本機仕様としての高信頼な直接契約を固定できず **UNVERIFIED_FOR_GACKUN_CONTRACT**。
- confidence: ANALYSIS_HIGH_FOR_RESET_OFFSET_AND_NIGHT_BACKGROUND / UNVERIFIED_FOR_GACKUN

### publicMorningNumbers

#### 設定変更時 状態振り分け

| 設定 | 通常 | 高確 | 超高確 |
|---|---:|---:|---:|
| 1 | 86.7% | 12.5% | 0.8% |
| 2 | 86.7% | 12.5% | 0.8% |
| 3 | 86.7% | 12.5% | 0.8% |
| 4 | 85.9% | 12.5% | 1.6% |
| 5 | 84.4% | 12.5% | 3.1% |
| 6 | 84.4% | 12.5% | 3.1% |

#### 設定変更時 内部開始G数

- 0G: **25%**。
- 変則G数: **75%**。
- 変則G数の100の位: 100G 84.4% / 200G 12.5% / 300G 1.6% / 400G 1.2% / 800G 0.4%。
- 10の位: 10G 50.0% / 20G 25.0% / 30G 12.5% / 40G 6.3% / 50G 6.3%。
- 1の位: 0～9G 各10%。
- この詳細表は2015年の後年攻略整理で回収。2014年当時記事でも「ゲーム数まで再抽選」「大半が110～140G」と整合するため、exact tableは `ANALYSIS_SINGLE_RETROSPECTIVE_WITH_CONTEMPORARY_BEHAVIOR_SUPPORT` とする。

## missingFields

- 純据え置き時の内部ゲーム数・モード・状態の完全な直接契約。
- 電源OFF→ONのみ時の本機専用内部契約。
- 設定変更専用モードからの具体的モード移行率表（現存資料は画像中心で安全抽出できず）。
- ガックンのメーカー/高信頼解析による変更・据え置き判別契約。

## conflicts / safeguards

- 機械割97.4～115.6%系列と97.44～115.63%系列は実質丸め整合。平均化せず両表記の存在を注記。
- 設定変更時の内部G数は「0Gへ単純リセット」と記述する資料もあるが、当時詳細記事では内部ハマリG数を再抽選することが明記される。DBでは **前日進捗消失 + 内部開始G数再抽選**として定義を分離する。
- 「設定変更後500G」は攻略上の狙い目であり、固定短縮天井500Gではない。
- 116Gは天国モード天井であり、設定変更時固定天井ではない。

## sources

取得日: 2026-09-06

- グリーンべると（発表/純増/納品時期）: https://web-greenbelt.jp/00006859/
- ALL7 2014年2月導入一覧: https://www.all7.jp/plans/index/2014/02/10
- K-Navi: https://p-kn.com/slot/1989/
- HAZUSE: https://hazuse.com/machine/pachislot/3S0984/
- P-WORLD: https://www.p-world.co.jp/machine/database/7275
- CrankySeven: https://crankyseven.com/rinnenolagrange-pc.htm
- みんスロ: https://minslo.com/%E8%BC%AA%E5%BB%BB%E3%81%AE%E3%83%A9%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B8%E3%82%A7/
- スロパチクエスト 機種まとめ: https://www.slopachi-quest.com/rinnenoraguranzye/
- スロパチクエスト 天井解析: https://www.slopachi-quest.com/article/reincarnation-lagrangian/
- パチ＆スロ必勝本 ボーナス概要: https://p.hisshobon.jp/machine/2330/1/44210
- パチ＆スロ必勝本 狙いドコロ: https://p.hisshobon.jp/machine/2330/1/46642
- 完全告知（設定変更時状態振り分け）: https://kanzenkokuchi.jp/78/set.php
- メタボ教授（2014-02-09、設定変更時G数再抽選）: https://metabopro.com/raguranjyetorimu/
- 楽スロ（設定変更時内部開始G数詳細）: https://rakuslo.com/blog-entry-237.html
- 期待値見える化（モード構造）: https://slotjin.com/slot/rinnenolagrange-mode/
- LackLuckLife（設定変更専用モードの存在）: https://l-l-life.com/36851466/
- ビデオマーケット パチスロ最強伝説G #602（朝一夜背景の設定判別要素）: https://www.videomarket.jp/title/082220/A082220070999H01

## relayNote

- 2014-01-28～02-02について、ALL7 2014年2月一覧と既存handoffの先行候補を照合し、今回具体日付き未登録パチスロを固定できず `CLOSED_FOR_CURRENT_RESEARCH`。
- 2014-02-03同日群のパチスロはALL7で **「パチスロ輪廻のラグランジェ」「主役は銭形2」** を確認。
- 本レコードは02-03群の先頭として登録。群はまだOPEN。
- next: **2014-02-03「主役は銭形2」（オリンピア）**。
