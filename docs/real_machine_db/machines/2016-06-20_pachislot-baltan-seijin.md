machineName: パチスロ バルタン星人
manufacturer: 七匠
releaseDate: 2016-06-20
recordNumber: 987
generation: 5号機
systemType: ノーマル / リノ仕様 / リアルボーナス連続タイプ
formalModelName: パチスロ ウルトラマンＴ
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 七匠公式製品ページで『パチスロ バルタン星人』、型式名 `パチスロ ウルトラマンＴ` を確認。
- K-Navi、パチビー、ALL7で2016-06-20ホール導入を照合。グリーンべると当時記事は2016-06-19納品開始予定。
- 事前の5/30予定表記は発売前予定として保持し、実導入canonicalは2016-06-20。
reliability: OFFICIAL_INDUSTRY_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.3% |
| 3 | 99.2% |
| 4 | 102.3% |
| 5 | 104.8% |
| 6 | 107.0% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 | バルタンモード突入 |
|---:|---:|---:|---:|---:|
| 1 | 1/156.0 | 1/312.0 | 1/104 | 1/234.9 |
| 2 | 1/153.2 | 1/306.3 | 1/102 | 1/230.0 |
| 3 | 1/150.4 | 1/300.9 | 1/100 | 1/225.2 |
| 4 | 1/147.9 | 1/295.7 | 1/99 | 1/220.7 |
| 5 | 1/143.0 | 1/285.9 | 1/95 | 1/212.1 |
| 6 | 1/137.3 | 1/274.7 | 1/92 | 1/202.3 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約32G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- NOT_APPLICABLE。ART/AT非搭載のリアルボーナス連続タイプ。

## basicPayout
- BIG: **約185枚**。
- REG canonical: **約95枚**（P-WORLD、グリーンべると等）。
- 後年整理資料にREG約110枚表記があるため `CONFLICT_REG_PAYOUT_95_VS_110` として分離。
- バルタンモード中ボーナス確率: **約1/9.7**。
- 転落確率: **約1/25**、ボーナスループ率 **約72%**、平均連続回数 **約3.6回**。
reliability: INDUSTRY_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時のコイン図柄揃い、またはボーナス終了後にボーナス高確率状態「バルタンモード」へ移行。
- バルタンモード中は約1/9.7でボーナス、約1/25の転落契機。
- 天井: **非搭載**。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **設定変更を行ってもバルタンモード状態を引き継ぐ**。
- 一般的な設定変更＝内部状態初期化として扱わない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時はバルタンモードを **CARRYOVER**。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- **電源OFF→ONのみでもバルタンモードを引き継ぐ**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- 天井/通常時ゲーム数カウンタは非搭載のため **NOT_APPLICABLE**。

### ceilingAfterReset
- 天井非搭載。短縮天井も **NOT_APPLICABLE**。

### modeAfterReset
- 設定変更: バルタンモード **CARRYOVER**。
- 据え置き: **CARRYOVER**。
- 電源OFF→ON: **CARRYOVER**。
- **RAMクリア後はバルタンモードSTART** とする当時解析あり。設定変更・純電断・RAMクリアを区別して保存。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- 本機で朝一客行動に影響する主要状態はバルタンモード。上記の通り設定変更・電断で維持。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 前日閉店時にバルタンモード滞在なら、設定変更されても翌朝モードが残るため朝一狙いが成立しうる。
- RAMクリア後はバルタンモード開始とされ、新台初日等では明確な朝一恩恵になりうる。

### resetPenalties
- 天井進捗消失はN/A。
- 設定変更そのものによる主要不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更そのものを確定する本機固有ガックン/表示は、型式名・メーカー名・朝一・設定変更・据え置き・電源OFF ON・ガックンまで再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一にチェリー出現率上昇などからバルタンモード残存を推測できるが、これは「変更判別」ではなく「状態判別」として分離。

### numericResetData
- 設定変更後の専用モード振り分け: **NONE / CARRYOVER**。
- 電源OFF→ON後の専用モード振り分け: **NONE / CARRYOVER**。
- RAMクリア後: **バルタンモードSTART**（割合の公開数値なし）。

## dataQualityNotes
- 型式名は七匠公式で確認済み。検定番号は検索語・資料系統を変えて再探索したが今回直接固定できず、推測しない。
- REG獲得枚数は当時P-WORLD/業界記事の約95枚をcanonical、後年資料約110枚をCONFLICTとして保持。
- resetBehaviorは設定変更・電源OFF→ON・RAMクリアを明確に分離。リノ系一般論から補完していない。

## sources
取得日: 2026-09-08

1. 七匠公式 — 製品情報
   - https://www.nanashow.co.jp/product/
   - 機種名、型式名 `パチスロ ウルトラマンＴ`、バルタンモード概要。
   - reliability: OFFICIAL
2. グリーンべると — 幅広い層に訴求、遊びやすいボーナス連続タイプ
   - https://web-greenbelt.jp/00008665/
   - 2016-06-19納品予定、バルタンモード約72%、設定1突入1/234.9、BIG約185枚/REG約95枚、平均3.6連。
   - reliability: INDUSTRY_PERIOD
3. K-Navi — パチスロ バルタン星人
   - https://p-kn.com/slot/2527/
   - 2016-06-20導入、設定別BIG/REG。
   - reliability: PERIOD_DATABASE
4. ALL7 — 2016年6月導入予定一覧
   - https://www.all7.jp/plans/index/2016/06
   - 2016-06-20導入予定。
   - reliability: PERIOD_DATABASE
5. P-WORLD — パチスロ バルタン星人
   - https://www.p-world.co.jp/machine/database/8069
   - 5号機ノーマル、BIG約185枚/REG約95枚、バルタンモード約1/9.7、転落挙動。
   - reliability: INDUSTRY_DATABASE
6. すろぱちくえすと — バルタン星人 狙い目・ヤメ時・MB出目・ピンチ目解析
   - https://www.slopachi-quest.com/article/baltan/
   - 約32G/50枚、設定別性能、天井非搭載、設定変更/電源ON-OFFでバルタンモード引継ぎ、RAMクリア後バルタンモード開始。
   - reliability: ANALYSIS_HIGH
7. スロがち.COM — バルタン星人 解析まとめ
   - https://slogati.com/barutan/
   - 約32G/50枚、設定変更/電源入切でバルタンモード引継ぎ、天井非搭載。REG約110枚表記はCONFLICT資料として保持。
   - reliability: SECONDARY_ANALYSIS
8. 5号機クロニクル — 七匠5号機全機種一覧
   - https://5goki.com/nanashow
   - 2016/6、機械割97.4〜107.0%。
   - reliability: RETROSPECTIVE_DATABASE

## missingFields
- 検定番号
- 本機固有の確定的設定変更判別

## conflicts
- `CONFLICT_REG_PAYOUT_95_VS_110`: 当時P-WORLD/業界記事 約95枚 vs 後年整理 約110枚。平均しない。
- 導入前資料の5/30予定表記 vs 実導入6/20は、予定変更として区別しcanonical 2016-06-20。
