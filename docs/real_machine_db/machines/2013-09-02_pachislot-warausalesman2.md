# パチスロ笑ゥせぇるすまん2

machineName: パチスロ笑ゥせぇるすまん2
manufacturer: 三洋物産 / SANYO
releaseDate: 2013-09-02
releaseDatePrecision: exact_day__pachibee__contemporary_delivery_start_2013-09-01
releaseDateStatus: VERIFIED_EXACT_DAY_WITH_CONTEMPORARY_DELIVERY_DAY_SUPPORT

generation: 5号機
systemType: ART / 擬似ボーナス / ゲーム数上乗せ+セットストック
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- 三洋物産の5号機「パチスロ笑ゥせぇるすまん2」。初代「パチスロ笑ゥせぇるすまん」、2017年の「3」、後年の「絶笑」「4」と混同しない。
- パチビーはホール導入日を **2013-09-02** と明記。当時グリーンべるとは **2013-09-01納品開始予定** と報道しており、時系列上整合する。
- 三洋公式の製品ページ残存も確認。
- confidence: INDUSTRY_HIGH + OFFICIAL_IDENTITY_SUPPORT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.73% |
| 2 | 98.51% |
| 3 | 100.33% |
| 4 | 103.27% |
| 5 | 106.96% |
| 6 | 112.18% |

- パチマガスロマガ系の設定別PAYOUT表を採用。
- confidence: ANALYSIS_HIGH

## initialHitBySetting

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/325.6 |
| 2 | 1/316.4 |
| 3 | 1/300.4 |
| 4 | 1/279.1 |
| 5 | 1/243.5 |
| 6 | 1/198.7 |

### ドーンボーナス

- 全設定共通: **1/21845.33**。
- 擬似BIGは通常時の小役等を契機に抽選されるため、一般的なリアルボーナス確率表と同列には扱わない。
- confidence: ANALYSIS_HIGH

## baseGamesPer50

- **約34.3～34.4G / 1000円**。
- パチマガスロマガ系の通常時小役確率ページに直接掲載。
- confidence: ANALYSIS_HIGH

## netIncrease

- ART「フクゾーラッシュ」: **1セット40G+α / 純増約2.3枚/G**。
- ゲーム数上乗せ+セットストック型。
- 「笑フクゾーラッシュ」は10G継続の毎ゲーム上乗せ特化ゾーン。
- 当時グリーンべると、P-WORLD、パチビー、パチマガスロマガ系で約2.3枚/Gを照合。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE + ANALYSIS_HIGH

## basicPayout

- 基本ART: **40G+α、約2.3枚/G**。
- 擬似BIG: **ベルナビ20回**。赤7揃いでART突入確定。
- ドーンボーナス: BAR揃いのプレミアム擬似ボーナス。赤7揃いによるARTストック高確率状態。
- 擬似BIGの平均獲得枚数を比較可能な直接値として今回は固定しない。
- confidence: INDUSTRY_DATABASE_HIGH + ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は規定ゲーム数消化、福ZONE、擬似BIG等を契機にARTを目指す。
- 最大規定ゲーム数天井は **1500G**。
- パチマガスロマガ系インデックスに「モード別の規定ゲーム数」「モード移行率」が存在することを確認。
- 通常時の全モード移行テーブルはミッション範囲外のため収集しない。

## ceiling

- **最大1500GでART突入**。
- パチマガスロマガ系のART突入フローで直接確認。
- 同インデックスには「1000Gハマリ以上に特典あり」とあるが、現存取得本文から特典内容を直接回収できないため推定しない。
- confidence: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__DEDICATED_MORNING_PAGE_EXISTS__SPECIFIC_RESET_CONTRACT_NOT_RECOVERED_AFTER_MULTI_QUERY_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- パチマガスロマガ系の本機インデックスに「朝イチ・設定変更」専用項目が存在することは確認した。
- ただし今回アクセス可能な現存本文/検索キャッシュから、そのページの具体的な設定変更契約（天井GのCLEAR、モード再抽選、内部状態初期化等）を回収できなかった。
- 「笑ゥせぇるすまん」「笑ゥせぇるすまん2」「笑うせえるすまん2」「SANYO/三洋」と「設定変更」「リセット」「朝一」「据え置き」「宵越し」「電源OFF ON」「天井」「モード」「ガックン」を組み替えて再探索した。
- 初代、3、絶笑、4の設定変更仕様は本機へ転用しない。

### carryOverBehavior

- 純据え置き時の規定G進捗、天井進捗、モード、内部状態の保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動や後継機仕様から補完しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** の規定G進捗、天井、モード、内部状態、液晶表示: **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- setting change: **UNVERIFIED_AFTER_RESEARCH**。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常最大天井: **1500G → ART突入**。
- 設定変更専用の短縮天井/固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更で前日進捗がCLEARされるかは直接根拠を回収できないため推定しない。

### modeAfterReset

- 本機にモード別規定ゲーム数・モード移行解析が存在することは確認。
- 設定変更時のモード再抽選契約、および設定変更専用のモード振り分け数値: **UNVERIFIED_AFTER_RESEARCH**。
- 検索で頻出する「通常A/B/天国、設定変更時天国5%」は **2011年の初代**の資料であり、本機2へ混入させない。

### stateAfterReset

- 設定変更、据え置き、純電源OFF→ON時の福ZONE抽選状態等の初期化/引継ぎ: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の数値付き朝一恩恵、短縮天井、ART/CZ優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 専用朝一ページの存在だけから恩恵を推定しない。

### resetPenalties

- 設定変更専用の数値付き不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井進捗消去を直接確認できていないため、宵越し不利とは断定しない。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、ランプ、規定G挙動等による設定変更/据え置き判別: **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時モード振り分け、朝一特定G以内の当選率、短縮天井G数、リセット恩恵発生率: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 初代・3・絶笑・4の公開朝一数値は採用しない。

## conflicts / safeguards

- 初代「パチスロ笑ゥせぇるすまん」の設定変更時モード振り分け（通常A/B/天国）を本機2へ転用しない。
- 2017年「笑ゥせぇるすまん3～笑撃のドーン～」の設定変更時天国移行率、2020年「絶笑」、2022年「4」の有利区間/リセット仕様も別機種として除外。
- パチマガスロマガ系インデックスの「1000Gハマリ以上に特典あり」は存在を保存するが、具体恩恵本文を回収できていないため内容を推定しない。
- 導入日はパチビーの2013-09-02、納品開始予定は当時グリーンべるとの2013-09-01で、定義を分けて保持。

## sources

取得日: **2026-09-06**

1. SANYO公式「パチスロ 笑ゥせぇるすまん2」
   - https://www.sanyobussan.co.jp/products/slot_warausalesman2/sp/about.html
   - 公式製品ページ残存。作品/機種同定の補助。
   - confidence: OFFICIAL

2. グリーンべると「三洋がパチンコ、パチスロの新機種を同時リリース」
   - https://web-greenbelt.jp/00001016/
   - 2013-07-10掲載。9月1日納品開始予定、ART 40G+α、純増1.8枚から2.3枚へ向上、笑フクゾーラッシュ10G毎ゲーム上乗せ。
   - confidence: INDUSTRY_HIGH_CONTEMPORARY

3. パチビー「パチスロ笑ゥせぇるすまん2」
   - https://www.pachibee.jp/movies/index/9730
   - 導入日2013-09-02、三洋物産、5号機ART、約2.3枚/G。
   - confidence: INDUSTRY_DATABASE_HIGH

4. パチマガスロマガ系「ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/19/h-1.php
   - ART初当たり 1/325.6～1/198.7、PAYOUT 97.73～112.18%、ドーンボーナス1/21845.33。
   - confidence: ANALYSIS_HIGH

5. パチマガスロマガ系「小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/19/c.php
   - 1000円あたり約34.3～34.4G。
   - confidence: ANALYSIS_HIGH

6. パチマガスロマガ系「ART突入フロー」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/19/l.php
   - 最大天井1500G、ART 40G+α、純増約2.3枚/G、主要ART構造。
   - confidence: ANALYSIS_HIGH

7. パチマガスロマガ系「パチスロ笑ゥせぇるすまん2」インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/19/sanyo_slot_19.php
   - 「モード別の規定ゲーム数」「モード移行率」「天井・ヤメ時」「朝イチ・設定変更」専用項目の存在を確認。「1000Gハマリ以上に特典あり」表記あり。今回の取得経路では朝一本文/1000G特典本文を回収できず内容推定には使わない。
   - confidence: ANALYSIS_HIGH_INDEX_ONLY

8. P-WORLD「パチスロ 笑ゥせぇるすまん 2」
   - https://www.p-world.co.jp/machine/database/7131
   - 三洋物産、5号機ART、CZ、ART40G+α、約2.3枚/G、擬似BIGベルナビ20回等を照合。
   - confidence: INDUSTRY_DATABASE_HIGH
