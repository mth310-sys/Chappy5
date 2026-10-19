machineName: パチスロ ロード オブ ヴァーミリオン / LOAD of VERMILION
manufacturer: 七匠 / NANASHOW
releaseDate: 2016-10-11
recordNumber: 1016
generation: 5号機 / 5.5号機期
systemType: ART / ゲーム数上乗せ型ART
formalModelName: パチスロ ロードオブヴァーミリオンY
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RELEASE_DATE_CONFLICT_IDENTITY_PARTIAL

## identity
- 七匠公式製品一覧で「パチスロ ロード オブ ヴァーミリオン」を確認。
- 型式名 `パチスロ ロードオブヴァーミリオンY` は中古実機流通資料で確認。
- 導入日はK-Navi、パチセブン、ちょんぼりすた等が2016-10-11で一致。一方、2016-08-19時点のP-Summaは2016-10-03予定と記録しているため、canonicalは実導入側の2016-10-11とし、10/03は `CONFLICT_RELEASE_DATE_2016_10_03_PLAN_VS_2016_10_11_ACTUAL` として保持。
- 2016-09-30のグリーンべるとは「10月より稼働開始予定」と報道し、10/11実導入系列と矛盾しない。
- 検定番号は機種名/型式名/七匠/NANASHOW/検定/6S系/公安委員会等へ検索語を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE_WITH_IDENTITY_PARTIAL_AND_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 99.6% |
| 3 | 101.5% |
| 4 | 104.7% |
| 5 | 108.8% |
| 6 | 112.1% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/481.6 |
| 2 | 1/457.2 |
| 3 | 1/421.3 |
| 4 | 1/353.5 |
| 5 | 1/297.4 |
| 6 | 1/252.2 |
- 皇帝揃い: 1/8192、全設定共通。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約45.0G/50枚。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ROAD to VERMILION」: 約1.9枚/G。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ARTはゲーム数上乗せ型。固定獲得枚数ではない。
- ART開始時は上乗せ特化ゾーン「ULTIMATE BURST」を経由。
- 業界資料ではART期待継続ゲーム数を約300Gと紹介。
- 皇帝揃い時はART100G+特化ゾーン3個が付与されると業界資料で紹介。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時モード: 低確 / 通常 / 高確 / 天国（解析サイト上ではモードA〜D表記もあり、対応関係を混同しない）。
- 天井: ART間1568G+最大前兆32G、実質最大約1600GでART当選。
- CZ「トライブチャンス」: 10G or 20G。
- 朝一/設定変更時のモード振り分けは公開値あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ART間天井ゲーム数: RESET。後年天井一覧でも「設定変更:リセット」と明記。
- 通常モード: RESELECT。
- 液晶右側の種族エンブレムと紅印数: RESELECT。
- 朝一1回目のチャンス目まではエンブレム表示が `UNKNOWN`。

### carryOverBehavior
- 据え置き時は前日の種族エンブレム/紅印状態が内部的に引き継がれ、朝一最初の対応チャンス目後に比較材料となる。
- ART間天井進捗は、設定変更時リセットとの対比および宵越し攻略文脈から据え置きCARRYOVERとして扱う。
- 据え置き専用の天井短縮は NONE_CONFIRMED_AFTER_RESEARCH。

### powerCycleBehavior
- 電源OFF→ONのみでも朝一エンブレム表示は消え、最初のチャンス目までは `UNKNOWN`。
- 純電源OFF→ON時のART間天井ゲーム数・通常モードの保持について、本機固有の直接比較表は検索語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。一般論では補完しない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRYOVER。
- 純電源OFF→ON: UNVERIFIED_AFTER_RESEARCH。
- 通常天井: ART間1568G+前兆32G。

### ceilingAfterReset
- リセット専用固定短縮天井は NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更後も公開上の最大天井はART間1568G+前兆32G。

### modeAfterReset
- 設定変更時は設定別に低確/通常/高確/天国をRESELECT。
- 据え置きは前日状態の継続可能性あり。
- 純電源OFF→ON時の内部モード保持は UNVERIFIED_AFTER_RESEARCH。

### stateAfterReset
- 設定変更時の主要な朝一状態は公開モード振り分けで表現できるため、別の細分化内部状態テーブルは収集対象外。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 設定変更時は高設定ほど通常/高確/天国スタートが優遇される。
- 設定6は高確12.5%、天国6.3%。
- エンブレム/紅印再抽選により朝一変更判別の材料が生まれる。
- リセット専用天井短縮・初当たり保証は NONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 設定変更で前日のART間天井進捗を失う。
- 良い通常モードやエンブレム/紅印状態の据え置き価値も失う可能性がある。

### resetDetection
- 朝一最初のチャンス目後、前日の種族エンブレム/紅印状態と一致・不一致を比較して据え置き/変更を推測可能。
- 設定変更時のエンブレム振り分け: 人獣50% / 海種25% / 不死25%。
- 設定変更時の紅印数: 1個62.5% / 2個25.0% / 3個12.5%。
- 電源OFF→ONだけでも朝一表示は `UNKNOWN` になるため、液晶を見ただけでは変更判別不可。
- 本機固有のガックン確定判別は NONE_CONFIRMED_AFTER_RESEARCH。

### numericResetData
| 設定 | 低確 | 通常 | 高確 | 天国 |
|---:|---:|---:|---:|---:|
| 1 | 71.1% | 25.0% | 3.1% | 0.8% |
| 2 | 42.2% | 50.0% | 6.3% | 1.6% |
| 3 | 70.3% | 25.0% | 3.1% | 1.6% |
| 4 | 40.6% | 50.0% | 6.3% | 3.1% |
| 5 | 68.8% | 25.0% | 3.1% | 3.1% |
| 6 | 31.3% | 50.0% | 12.5% | 6.3% |

設定変更時エンブレム:
- 人獣 50.0%
- 海種 25.0%
- 不死 25.0%

設定変更時紅印数:
- 1個 62.5%
- 2個 25.0%
- 3個 12.5%

## dataQualityNotes
- 性能コアは複数解析および業界資料で高一致。
- 2016-10-03は発売予定系の早期資料、2016-10-11は複数の導入後機種DB・解析の実導入日系列として扱い、平均せずCONFLICT保持。
- 設定変更時モード、エンブレム、紅印の公開数値は複数解析で一致。
- 純電源OFF→ON時は「表示がUNKNOWNになる」ことは直接確認できるが、天井/内部モードそのものの保持を直接比較した本機固有資料は固定できないため、そこだけUNVERIFIED。

## conflicts
- CONFLICT_RELEASE_DATE_2016_10_03_PLAN_VS_2016_10_11_ACTUAL
  - 2016-10-03: P-Summaの2016-08-19時点予定資料。
  - 2016-10-11: K-Navi / パチセブン / ちょんぼりすた等の導入後機種DB・解析。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の天井/内部モード保持: UNVERIFIED_AFTER_RESEARCH
- メーカー保証ガックン: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. 七匠 公式製品一覧 — パチスロ ロード オブ ヴァーミリオン
   - https://www.nanashow.co.jp/product/
2. グリーンべると — 新基準ART機随一の平均継続ゲーム数に期待（2016-09-30）
   - https://web-greenbelt.jp/00008989/
3. K-Navi — パチスロ ロード オブ ヴァーミリオン（2016-10-11導入、設定別初当たり）
   - https://p-kn.com/slot/2606/
4. パチセブン — パチスロ ロード オブ ヴァーミリオン（2016-10-11導入、ART純増）
   - https://pachiseven.jp/machines/4955/cutout/4
   - https://pachiseven.jp/machines/4955/cutout/6
5. ちょんぼりすた — ロードオブヴァーミリオン（性能、天井、朝一、設定変更時モード）
   - https://chonborista.com/slot/nanashow/24144/comment-page-3/
6. すろぱちくえすと — 設定判別・設定差・リセット判別
   - https://www.slopachi-quest.com/article/lord-of-vermilion-settei/
7. 2ndsight.xyz — 天井/設定変更一覧（ART間1568G、設定変更リセット）
   - https://2ndsight.xyz/1768
8. P-Summa — 2016年10月販売予定資料（10/03予定側CONFLICT）
   - https://psumma.jp/pachinko/25874/
9. 中古実機流通 — 型式名 `パチスロ ロードオブヴァーミリオンY`
   - https://store.shopping.yahoo.co.jp/nakaiticom/60004.html
