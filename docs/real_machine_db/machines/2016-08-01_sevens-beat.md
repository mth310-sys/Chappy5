machineName: セブンスビート
manufacturer: KPE
releaseDate: 2016-08-01
recordNumber: 997
generation: 5号機 / 5.5号機期
systemType: A+C / ボーナス+集中（アクセルレイブタイム）
formalModelName: セブンスビート/ZS
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESEARCH_EXHAUSTED

## identity
- K-Naviの2016-06-03業界ニュースでKPEが本機を発表し、ホール導入予定2016-08-01と明記。
- K-Navi機種ページ、P-WORLD、パチセブン、当時/後年解析でも2016-08-01で一致。
- 型式名 `セブンスビート/ZS` は後年回顧資料で確認。検定番号は表記揺れ/KPE/ZS/検定番号/6S等で再探索したが今回直接固定できずUNVERIFIED。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 canonical |
|---:|---:|
| 1 | 97.2% |
| 2 | 97.2% |
| 3 | 99.9% |
| 4 | 102.0% |
| 5 | 107.1% |
| 6 | 111.2% |
- ちょんぼりすた系列をcanonical。P-WORLDは設定3のみ99.5%で、他設定は一致するためCONFLICTとして分離。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SINGLE_SETTING_CONFLICT

## initialHitBySetting
| 設定 | 集中CT | ボーナス+CT合算 |
|---:|---:|---:|
| 1 | 1/200 | 1/100 |
| 2 | 1/178 | 1/90 |
| 3 | 1/199 | 1/100 |
| 4 | 1/178 | 1/90 |
| 5 | 1/199 | 1/99 |
| 6 | 1/158 | 1/79 |
- P-WORLDの精密合算表記は1/99.9・1/89・1/99.6・1/89・1/99.3・1/79.2。丸め定義差として併記し、平均化しない。
- 通常時初当たり時のボーナスゲーム:集中は概ね1:1とP-WORLDが説明。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約23G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 集中「アクセルレイブタイム」: 約1.6枚/G。
- 次回ボーナスゲーム成立まで継続。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ボーナスゲーム: 54枚。
- アクセルレイブタイム: 平均獲得約350枚。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 天井: 非搭載として扱う。少なくとも主要当時/解析資料でゲーム数天井の記載なし。
- アクセルレイブタイム中はベル出現率が通常比約22倍、次回ボーナス成立まで継続。
- 通常時の全モード移行等、実機完全再現用の細部は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_CONCENTRATION_STATE_POWER_CONTRACT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ゲーム数天井/天井カウンタを持たないため、そのリセット契約はNOT_APPLICABLE。
- 設定変更時にアクセルレイブタイム等の集中内部状態がどう処理されるかを示す本機固有の直接資料は、設定変更/リセット/朝一/集中/据え置き/電源OFF ON等へ検索語を変えても固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 宵越しゲーム数天井はNOT_APPLICABLE。
- 営業跨ぎで集中内部状態を保持するかは **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 純電源OFF→ONのみでゲーム数天井へ影響する要素はNOT_APPLICABLE。
- アクセルレイブタイム中または集中内部状態の純電断契約は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更と純電断を一般論で同一扱いしない。

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_CEILING**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- リセット専用短縮天井なし。

### modeAfterReset
- 通常A/B/天国等のゲーム数管理モードは **NOT_APPLICABLE / NONE_CONFIRMED**。
- 朝一専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 集中状態の設定変更/据え置き/純電断契約は **UNVERIFIED_AFTER_RESEARCH**。
- 通常時の長期高低状態について設定変更専用振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- リセット天井短縮、高確優遇、朝一専用CZ/当選率などは **NONE_CONFIRMED / NOT_APPLICABLE**。

### resetPenalties
- 前日天井進捗消失はNOT_APPLICABLE。
- 公開された設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- `セブンスビート / SEVENS BEAT / セブンスビート/ZS / KPE / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 集中` を組み替えて再探索。
- 本機固有のガックン、初期出目、表示等による確定的な変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- 短縮天井: **NOT_APPLICABLE**。
- リセット時モード振り分け: **NONE / NOT_APPLICABLE**。
- 朝一特定G以内専用当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用公開数値恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 2016-08-01導入はKPE発表を伝える当時業界ニュース、K-Navi機種ページ、複数解析で一致。
- A+CはAT/ARTではなく、押し順ナビ不要の小役集中状態を利用する特殊スペックとして分類。
- 設定3機械割のみ99.9%対99.5%の資料差をCONFLICT保持。
- resetBehaviorについて、天井非搭載部分は明確だが集中内部状態の設定変更/電断契約は資料不足を一般論で埋めていない。

## sources
取得日: 2026-09-08

1. K-Navi — セブンスビート
   - https://p-kn.com/slot/2532/
   - ホール導入開始2016-08-01、KPE、A+Cタイプ。
   - reliability: PERIOD_ANALYSIS_HIGH
2. K-Navi 業界ニュース — KPE新機種発表（2016-06-03）
   - https://p-kn.com/topics/news/2023/
   - KPE発表、ホール導入予定2016-08-01、A+C、アクセルレイブタイムの概要。
   - reliability: INDUSTRY
3. P-WORLD — セブンスビート
   - https://www.p-world.co.jp/machine/database/8073
   - KPE、5号機集中、約1.6枚/G、54枚ボーナス、ART平均約350枚、設定別初当たり合算、機械割。
   - reliability: INDUSTRY_DATABASE
4. ちょんぼりすた — セブンスビート
   - https://chonborista.com/slot/kpe-slot/22270/
   - 2016-08-01、A+CT、約23G/50枚、設定別CT/合算/機械割。
   - reliability: ANALYSIS_HIGH
5. パチビー — セブンスビート
   - https://www.pachibee.jp/movies/index/12798
   - 導入日2016-08-01、5号機集中、約1.6枚/G。
   - reliability: PERIOD_ANALYSIS
6. パチセブン — ボーナス
   - https://pachiseven.jp/machines/4866/cutout/5
   - 導入日2016-08-01、KPE、ボーナス54枚。
   - reliability: PERIOD_ANALYSIS
7. スロパチクエスト — 2016年導入日順
   - https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
   - 8月1日群にセブンスビート、デビルメイクライX、ルパン三世 消されたルパンを掲載。
   - reliability: PERIOD_SECONDARY
8. さーくる。のスロ雑談 — セブンスビート回顧
   - https://circle92555782.hatenablog.com/entry/2024/10/31/180708
   - 型式名セブンスビート/ZS、導入2016-08-01、機械割97.2〜111.2%、23G/50枚。
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 集中内部状態の設定変更/据え置き/純電源OFF→ON契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有の確定変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `CONFLICT_SETTING3_PAYOUT_99_9_VS_99_5`: ちょんぼりすた等99.9%に対しP-WORLDは99.5%。他設定は一致。平均せず99.9%をcanonical、99.5%を競合値として保持。
- 初当たり合算の1/100等とP-WORLDの1/99.9等は丸め精度差として保持し、実質別定義のCONFLICTにはしない。

## QA note
- 新規時点からresetBehavior v0.7を収録。
- 07/26〜07/31境界を導入日順資料で監査し、次の明確な全国導入日群は2016-08-01。
- 08/01群はセブンスビートをNo.997として先行登録。デビルメイクライX、ルパン三世 消されたルパンを次候補として継続監査する。
