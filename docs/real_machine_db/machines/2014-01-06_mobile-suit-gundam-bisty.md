# パチスロ 機動戦士ガンダム

machineName: パチスロ 機動戦士ガンダム
aliases: 機動戦士ガンダム / ガンダム2014 / ガンダムFW
manufacturer: ビスティ
modelName: パチスロ 機動戦士ガンダムFW
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2014-01-06
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: ART / CZ / 疑似ボーナス / 規定ゲーム数モード
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- SANKYO公式オンライン博物館でビスティ製、導入年月2014.01、型式 `パチスロ 機動戦士ガンダムFW` を確認。
- GUNDAM.INFOの2013-11-06発表は全国ホールへ2014年1月から導入予定と明記。
- 2014-01-06当日の初日実戦報告、および後年天井DBの導入日2014/01/06表記が一致するため、時系列キーは2014-01-06を採用。
- 後年の「機動戦士ガンダム 覚醒」「ユニコーン」「SEED」は別機種として混入させない。
- confidence: OFFICIAL_FOR_MONTH_AND_MODEL + ANALYSIS_MULTI_SOURCE_FOR_EXACT_DATE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.3% |
| 3 | 100.6% |
| 4 | 103.4% |
| 5 | 107.6% |
| 6 | 113.3% |

- pacnk、後年ガンダムシリーズ整理、保存攻略資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/293.60 |
| 2 | 1/287.50 |
| 3 | 1/270.20 |
| 4 | 1/246.30 |
| 5 | 1/217.90 |
| 6 | 1/185.00 |

- pacnkで設定別値を確認。パチマガスロマガにも当時機種専用の「ボーナス確率・PAYOUT」「設定推測」解析項目が現存する。
- confidence: ANALYSIS_SINGLE_NUMERIC + PERIOD_ANALYSIS_INDEX_SUPPORT

## baseGamesPer50

- 「機動戦士ガンダム / ガンダムFW / ビスティ」と「50枚 / 1000円 / ベース / コイン持ち / 1K」を組み替え、当時解析・古い攻略DB・後年回顧を再探索したが、2014年版を明示した比較可能な直接値を安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 2016年「覚醒」や2023年「ユニコーン」、2025年「SEED」の約32G前後を流用しない。

## netIncrease

- P-WORLD: ART「ニュータイプBONUS」 **約2.3枚/G**。
- 保存攻略PDFには **約2.2枚/G** 表記があり、同資料内の主要仕様は当時日本攻略情報由来とされる。
- 2.2と2.3を平均せず **CONFLICT_NET_INCREASE_APPROX_2_2_VS_2_3** として保持し、P-WORLDの2.3枚/Gを比較本線値とする。
- confidence: CONFLICT_ANALYSIS_SOURCES

## basicPayout

- ART「ニュータイプBONUS」: **1セット33G+α + 継続バトル8G**。
- ART継続率: **約51～91%帯**（保存攻略資料）。
- BIG BONUS: ART中に成立する疑似ボーナス、**50～200G**。50Gごとに継続抽選。
- P-WORLD / パチマガスロマガ / 保存攻略資料で基本構造を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は規定ゲーム数消化、自力CZ「ガンダム索敵モード」等からARTを目指す。
- CZ「ガンダム索敵モード」: 最大10G、ART期待度約30%。
- 規定ゲーム数系モードは資料表記に揺れがあるが、天井の異なる4系統（通常 / 準備相当 / 連中・天国相当 / ニュータイプ）が存在。
- 全モード移行率や小役別抽選など、実機完全再現用の細部は収集対象外。

## ceiling

- 保存攻略資料では最大到達を **1035G** とし、モード別上限を以下のように掲載。
  - 通常A相当: **999G**
  - 通常B/準備相当: **782G**
  - 天国/連中相当: **100G**
  - ニュータイプ相当: **1035G**
- 別箇所に1030G表記もあるため、ニュータイプモードについて **CONFLICT_ROUNDING_OR_DESCRIPTION_1030_VS_1035** を保持。天井全体の最大値は1035Gとして扱う。
- 天井到達恩恵: ART当選。
- 後年天井DBも「ART間最大1035G」で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_MAX_CEILING

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_SECTION_EXISTS_AND_YOIKOSHI_UNSUPPORTED_INDIRECTLY_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- パチマガスロマガの2014年版機種ページに本機専用 **「朝イチ・設定変更」** 攻略項目、およびQ&A **「設定変更時の特典は有りますか?」** が現存することを確認。
- ただし現存検索キャッシュでは具体本文を復元できず、設定変更時のモード・状態・天井再選択の完全契約は **UNVERIFIED_AFTER_RESEARCH**。
- 後年天井狙いDBでは本機を **「宵越し×」** と分類しており、設定変更を挟んだ前日天井進捗が利用できないことを支持する間接資料として保持。
- confidence: PERIOD_ANALYSIS_INDEX_CONFIRMS_DEDICATED_RESET_INFO / ANALYSIS_SINGLE_RETROSPECTIVE_FOR_YOIKOSHI_X / UNVERIFIED_FOR_EXACT_CONTRACT

### carryOverBehavior

- 純据え置き時に前日規定G数、内部モード、低確/高確状態をどこまで保持するかは、「据え置き / 宵越し / 朝一 / モード / 天井」を組み替えて再探索したが本機専用の直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 「宵越し×」を据え置き時もCLEARという意味には拡張しない。

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ON時の規定G数、モード、内部状態の扱いは、「電源OFF ON / 電断 / 朝一 / 据え置き」を追加して再探索したが直接仕様を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更時: **RESET_SUPPORTED_INDIRECTLY_BY_YOIKOSHI_X**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常時モード別天井は100 / 782 / 999 / 1035G系。
- 設定変更専用の固定短縮天井や具体的な朝一規定G数振り分けは、十分再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時の100G天国系モードを「設定変更後100G固定」と解釈しない。

### modeAfterReset

- 通常時に4系統の規定ゲーム数モードがあることは確認。
- 設定変更時の具体的モード振り分け / 再抽選契約は **UNVERIFIED_AFTER_RESEARCH**。
- 通常時・ART後のモード移行テーブルを朝一へ流用しない。

### stateAfterReset

- 通常時に低確 / 高確等の内部状態が存在することは確認。
- 設定変更時の初期状態振り分け、据え置き・電源再投入時の状態保持契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の確定的短縮天井、CZ/ART確定、具体的優遇率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- パチマガスロマガに設定変更専用解析項目/Q&Aが存在するため、本文復元可能になった場合はQA再訪対象。

### resetPenalties

- 「宵越し×」の資料から、設定変更を挟んだ前日ハマリ進捗を狙いに利用できない点を朝一不利要素として保持。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 機種名 / 型式 `FW` / ビスティと「ガックン / 初期出目 / 朝一 / 設定変更 / 据え置き」を組み替えて再探索したが、本機固有の確定的変更判別要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 早い100G以内当選は通常時にも天国系モードが存在するため、単独で変更判別に使わない。

### publicMorningNumbers

- 設定変更専用の公開朝一数値: **UNVERIFIED_AFTER_RESEARCH**。
- 比較用の通常時モード天井値として 100 / 782 / 999 / 最大1035Gを保持するが、朝一専用値ではない。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH。
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の正確なモード/状態/天井再選択契約: UNVERIFIED_AFTER_RESEARCH。
- 純据え置き・電源OFF→ONのみの内部保持契約: UNVERIFIED_AFTER_RESEARCH。
- 本機固有の変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- ART純増: P-WORLD等の約2.3枚/G vs 保存攻略資料の約2.2枚/G。平均せずCONFLICT。
- ニュータイプ系最大天井: 1030G説明と1035G最大天井表記が同資料内にあり、1035Gを最大値本線とし差異を保持。
- 2014年版ビスティ機と、2007/2009年山佐ガンダム、2016年覚醒、2023年ユニコーン、2025年SEEDを混同しない。
- 「宵越し×」は設定変更を挟んだ前日進捗不可の支持にのみ使用し、据え置き・単純電源OFF→ONのCLEARを推定しない。

## sources

取得日: 2026-09-06

- SANKYO公式オンライン博物館: https://www.sankyo-fever.jp/collection/881/
- GUNDAM.INFO 2013-11-06: https://www.gundam.info/news/hot-topics/news_hot-topics_20131106_9645p.html
- P-WORLD: https://www.p-world.co.jp/machine/database/7266
- パチマガスロマガ 機種TOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/25/bisty_slot_25.php
- pacnk 設定判別: https://pacnk.com/slot/tools/sh_gundam2014.html
- スロパチクエスト 2014年版まとめ: https://www.slopachi-quest.com/kisyubetsu/gundam/
- 後年天井DB（導入日 / 最大1035G）: https://smaslo.man-soft.com/slot-tenzyou-itiran/
- 天井ハイエナ生活（宵越し×）: https://macerate.seesaa.net/article/226196713.html
- 保存攻略PDF（日本攻略情報由来中国語版）: https://www.8tw.com.tw/rwd1540/store/F2/S0186%20%E6%A9%9F%E5%8B%95%E6%88%B0%E5%A3%AB%E9%8B%BC%E5%BD%88%20%E4%B8%AD%E6%96%87%E7%89%88%E6%94%BB%E7%95%A5.compressed.pdf
- 初日実戦報告まとめ（2014-01-06）: https://pachinkopachisro.com/archives/35488849.html
