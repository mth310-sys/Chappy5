# 煩悩BREAKER禅

machineName: 煩悩BREAKER禅
manufacturer: 山佐
releaseDate: 2015-08-03
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: K-Naviはホール導入開始2015-08-03、山佐発表文転載および当日記事も2015-08-03稼働/ホールデビューで一致。2015-08-02は納品開始資料があるため、納品と全国実ホール導入を分離しcanonicalは2015-08-03。
generation: 5号機
systemType: AT / 疑似ボーナス連打型 / 旧基準AT
formalModelName: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_PUBLIC_DATA

## identity

- メーカー: **山佐**。
- canonical導入日: **2015-08-03**。K-Naviのホール導入開始日、メーカー発表文転載、導入当日のゲーム媒体記事が一致。
- 一部当時資料の2015-08-02は納品開始日として扱い、実ホール導入開始とは混同しない。
- 正式型式名/検定番号は「煩悩BREAKER禅 / 煩悩ブレーカー禅 / 山佐」等の表記揺れで再探索したが、安全に固定できる一次・高信頼資料を今回確保できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE_RELEASE / UNVERIFIED_FORMAL_MODEL

## payoutRateBySetting

| 設定 | 機械割 / PAYOUT |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.9% |
| 3 | 100.1% |
| 4 | 103.0% |
| 5 | 107.2% |
| 6 | 112.0% |

- 当時解析/後年整理の複数資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

主要初当たりは疑似ボーナス初当たり。

| 設定 | ボーナス初当たり |
|---:|---:|
| 1 | 1/270.7 |
| 2 | 1/267.1 |
| 3 | 1/261.3 |
| 4 | 1/249.9 |
| 5 | 1/230.6 |
| 6 | 1/210.5 |

- 一部資料は1/271、1/267、1/261、1/250、1/230、1/210と丸め表記。精密値と定義競合するものではないため、精密値をcanonicalとして保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30G/50枚**。
- 当時新台資料、後年解析の複数系統で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT純増: **約3.0枚/G**。
- K-Navi、当時新台資料、後年解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **約200枚**。
- REG: **約50枚**。
- AT「煩悩BASH」: **1セット20G+α**。この区間で疑似ボーナスを高確率抽選し、ボーナス当選後は再度20Gへ再セットするST型の連チャン構造。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常A最大天井: **999G**。到達時はBIG当選。
- 通常B最大天井: **763G**。ボーナス当選。
- 天国系/通常C最大天井: **108G**。
- 本DBでは通常時全モード移行テーブルは収集せず、朝一/天井比較へ必要な最大規定Gのみ保持。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_UNVERIFIED_CARRYOVER_AND_POWER_CYCLE_INTERNAL_CONTRACT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 後年の機種別天井整理資料で本機は **設定変更時「リセット」** と明記されており、前日の天井/規定G進捗を設定変更後もそのまま保持する契約ではないと判断する。
- ただし設定変更後の専用モード振り分け、専用初期状態、固定のリセット専用短縮天井を直接示す公開テーブルは、検索語・資料系統を変更しても今回固定できず `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 「設定変更でリセット」を、モード/内部状態の全項目が同一方法で再抽選されるという意味へ拡張しない。

### carryOverBehavior

- 据え置き時に天井G/モード/内部状態を営業日跨ぎで具体的にどう保持するかを直接明記した本機固有資料は、当時解析・古いDB・後年整理を再探索しても今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時リセットの逆を自動的に据え置きCARRYOVERとはしない。

### powerCycleBehavior

- ちょんぼりすたの朝一設定判別資料は、**朝一最初のCZキャラクター選択法則について「電源のOFFでもこの法則は適応される」**と記載している。
- これは純電源OFF→ON後にも朝一最初のCZキャラ振り分けによる設定推測が使えることを支持する。
- ただし純電断時の天井G、内部モード、状態、前兆、リール初動までリセット/引継ぎのどちらかを示す資料ではないため、それらは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更時: **RESET_SUPPORTED_BY_LATER_MACHINE_SPECIFIC_SUMMARY**。
- 据え置き時: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常時の最大天井はモード別に **999G / 763G / 108G**。
- 設定変更時にゲーム数進捗をリセットする整理資料はあるが、**リセット専用の固定短縮天井**や専用天井振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 「朝一は必ず108G」等の固定契約として扱わない。

### modeAfterReset

- 設定変更時の通常A/B/C等への具体的なモード振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時の高確/前兆/CZ関連内部状態の再抽選・初期化契約: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用の天井短縮保証、朝一特定G以内当選率優遇、CZ優遇など、定量化できる本機固有恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一最初のCZキャラクター振り分けには設定差があるが、これは設定変更恩恵ではなく朝一の設定推測材料として分離する。

### resetPenalties

- 設定変更時は前日天井/規定G進捗がリセットされる整理資料があるため、前日ハマリ進捗を期待する客側には不利になり得る。
- それ以外の設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 「煩悩BREAKER禅 / 煩悩ブレーカー禅 / 山佐」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / 初期出目 / ランプ」を変えて再探索。
- 本機固有のガックン、初期出目、液晶/ランプによる設定変更・据え置きの確定/濃厚判別契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一最初のCZキャラクターは設定推測材料だが、設定変更判別そのものではない。

### numericResetData

#### 朝一最初のCZキャラクター振り分け

公開朝一数値として保存する。資料はこの法則が電源OFFでも適用されるとしている。

| 設定 | 千手 | 救斎 | 天音 | ジョブツ |
|---:|---:|---:|---:|---:|
| 1 | 55% | 33% | 8% | 4% |
| 2 | 33% | 55% | UNVERIFIED_TABLE_RENDERING | UNVERIFIED_TABLE_RENDERING |
| 3 | 55% | 33% | UNVERIFIED_TABLE_RENDERING | UNVERIFIED_TABLE_RENDERING |
| 4 | 30% | 46% | 20% | 4% |
| 5 | 45% | 23% | 20% | 12% |
| 6 | 25% | 25% | 25% | 25% |

- 設定2/3の天音・ジョブツ欄は現存ページのテーブル表示で安全に値を固定できないため、合計100%から逆算せず `UNVERIFIED_TABLE_RENDERING`。
- これは「設定変更時専用振り分け」ではなく **朝一最初のCZによる設定推測用数値**。
- リセット専用モード振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 朝一特定G以内当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- リセット恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- `RELEASE_DATE_DEFINITION_2015_08_02_DELIVERY_VS_2015_08_03_HALL_START`:
  - 当時新台資料: 2015-08-02から納品。
  - K-Navi / メーカー発表文転載 / 導入当日媒体: 2015-08-03ホール導入/稼働開始。
  - イベント定義差として分離し、canonicalは2015-08-03。
- 性能コアの1/270.7等と1/271等は丸め差として扱い、実質的CONFLICTにはしない。

## missingFields

- 正式型式名/検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井G/モード/内部状態の営業日跨ぎ契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の天井G/モード/内部状態契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時のモード/内部状態の具体振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- リセット専用短縮天井/特定G以内当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有のガックン等変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一CZ設定2/3の一部キャラ振り分け: `UNVERIFIED_TABLE_RENDERING`。

## sources

取得日: 2026-09-07

1. K-Navi「煩悩BREAKER禅」 — https://p-kn.com/slot/2288/
   - 山佐、ホール導入開始2015-08-03、AT、煩悩BASH 20G+α、純増約3.0枚/Gを確認。
2. オタク産業通信「山佐『煩悩BREAKER禅』」メーカー発表文転載 — https://otakuindustry.biz/archives/9863
   - 山佐発表として2015-08-03稼働開始を確認。
3. Gamer 2015-08-03「煩悩BREAKER禅」 — https://www.gamer.ne.jp/news/201508030069/
   - 2015-08-03ホールデビューを確認。
4. パチスロガイド「煩悩BREAKER禅 設定判別・解析」 — https://pachislot-guide.net/2015/bonnou-breaker/
   - 設定別ボーナス初当たり1/270.7〜1/210.5、機械割97.2〜112.0%、BIG約200枚、REG約50枚を確認。
5. ちょんぼりすた「煩悩BREAKER禅 スロット｜天井・解析・スペック」 — https://chonborista.com/slot/yamasa-slot/9602/
   - 機械割/初当たり丸め値、約30G/50枚、純増約3.0枚/G、20G ST、モード別最大天井、朝一最初のCZキャラ振り分け、電源OFFでも朝一CZ法則適用を確認。
6. スロ速「煩悩BREAKER禅 スペック詳細」 — https://slosoku.com/archives/45031099.html
   - 2015-08-02納品、約30G/千円、初当たり・機械割精密値、純増約3.0枚/G、BIG約200枚/REG約50枚を確認。
7. パチマガスロマガ「煩悩BREAKER禅」基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/204/a.php
   - 疑似ボーナスAT、基本獲得性能等を照合。
8. パチマガスロマガ「煩悩BREAKER禅」ゲームフロー — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/204/l.php
   - 煩悩BASH/ボーナス構造を照合。
9. 2ndsight「パチスロ天井一覧」 — https://2ndsight.xyz/1768
   - 本機の通常最大999G/BIG、108G・763Gのゾーン/天井、および設定変更時「リセット」の整理記録を確認。
10. ALL7「2015年8月 新台導入予定」 — https://www.all7.jp/plans/index/2015/08/10
   - 2015-08-03同日群候補の横断監査に使用。

## researchNotes

- 欠損については「煩悩BREAKER禅 / 煩悩ブレーカー禅 / 山佐 / 型式 / 検定 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / ガックン」等へ検索語を変更し、当時解析、業界系、古いDB、後年整理を横断した。
- 設定変更・据え置き・純電断は同義扱いせず、直接確認できた契約だけを保存。
- 朝一CZキャラ振り分けは公開朝一数値として価値があるため保存したが、設定変更専用抽選とは扱わない。
