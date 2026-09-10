# ぱちスロ 冬のソナタ

recordNo: 1286
machineName: ぱちスロ 冬のソナタ
manufacturer: 京楽産業．
formalModel: パチスロ冬のソナタKJ
certificationNumber: 7S1507
releaseDate: 2019-05-20
generation: 5.9号機
systemType: A+RT / ボーナス+CZ+RT

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 98.6% |
| 2 | 99.0% |
| 3 | 101.3% |
| 4 | 102.2% |
| 5 | 104.1% |
| 6 | 107.2% |

パチナビ、モゲスロ等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | MIDDLE | REG | ボーナス合算 |
|---|---:|---:|---:|---:|
| 1 | 1/492.8 | 1/636.3 | 1/508.0 | 1/179.6 |
| 2 | 1/492.8 | 1/612.5 | 1/508.0 | 1/177.6 |
| 3 | 1/485.5 | 1/590.4 | 1/500.3 | 1/173.8 |
| 4 | 1/485.5 | 1/560.1 | 1/500.3 | 1/171.1 |
| 5 | 1/478.4 | 1/532.8 | 1/471.5 | 1/164.3 |
| 6 | 1/445.8 | 1/524.3 | 1/458.3 | 1/157.9 |

グリーンべると/P-WORLDニュース、K-Navi、パチナビ、モゲスロで照合。

信頼度: INDUSTRY_ANALYSIS_MULTI_SOURCE

## baseGamesPer50

| 設定 | 50枚あたりG数 |
|---|---:|
| 1 | 35.3G |
| 2 | 36.1G |
| 3 | 37.6G |
| 4 | 38.0G |
| 5 | 38.6G |
| 6 | 40.0G |

パチナビ、ちょんぼりすたで一致。設定1の35.3Gはすろぱちくえすとも一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- RT「恋愛モード」: 約0.3枚/G
- 1セット30G
- RT終了後は再びCZへ移行し、CZ成功でRTへ再突入するループ構造。

信頼度: ANALYSIS_MULTI_SOURCE_CORE / INDUSTRY_STRUCTURE_CONFIRMED

## basicPayout

- BIG BONUS: 最大304枚
- MIDDLE BONUS: 最大206枚
- REG BONUS: canonical 最大110枚
- ボーナス終了後は種類を問わずCZへ移行。
- CZからRT「恋愛モード」への突入期待度は約50%。

信頼度: INDUSTRY_MULTI_SOURCE_WITH_CONFLICT_NOTE

## modeSpecificMinimumData

- 5.9号機A+RT。
- ボーナス後CZ → 約50%で30G RT「恋愛モード」 → RT終了後CZ、というループ構造。
- 通常ゲーム数天井は非搭載。
- ボーナス単独当選なしとする解析資料があり、主要当選契機はチャンス役同時当選。ただし物差し用途では全小役別詳細抽選を収集対象外とする。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_CORE_PARTIAL_RESET_RESEARCH_EXHAUSTED

- settingChangeBehavior: 設定変更時は内部状態を再抽選する、と2019年当時のモゲスロ解析表で直接確認。
- carryOverBehavior: 据え置き単独を純電源OFF→ONと完全に分離した機種固有契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。設定変更なしの電源OFF→ONでは内部状態引継ぎと直接記載があるため、通常の据え置き運用ではその挙動が主要参考となるが、独立条件を推測で固定しない。
- powerCycleBehavior: 電源OFF→ONのみでは内部状態を引き継ぐ、と当時解析表で直接確認。
- gameCounterReset: 通常ゲーム数天井非搭載のため、天井ゲーム数カウンタのRESET/CARRY_OVERはNOT_APPLICABLE。
- ceilingAfterReset: 天井非搭載。短縮天井なし / NOT_APPLICABLE。
- modeAfterReset: 本機固有の朝一専用モード、設定変更時モード振り分けは確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。通常時の全モード移行表はミッション対象外。
- stateAfterReset: 設定変更=内部状態再抽選、純電源OFF→ON=内部状態引継ぎ。液晶ステージについては当時解析が設定変更/電断とも「調査中」で、追加横断後も確定できずUNVERIFIED。
- advantageousSectionReset: 5.9号機A+RTであり、6号機型の有利区間管理はNOT_APPLICABLE。
- resetBenefits: 朝一リセット恩恵は「特に無し」と解析資料に明記。
- resetPenalties: 設定変更専用の主要な不利要素は確認なし。前状態が内部状態再抽選となる点は状態契約として分離保持。
- resetDetection: 本機固有のガックン発生条件・発生率、朝一表示だけで設定変更/据え置きを確定できる公開数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 短縮天井・朝一特定G以内当選率・設定変更専用モード振り分け・リセット恩恵発生率はNOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND。公開朝一数値として固定できる専用値なし。

### resetBehavior 再探索メモ

「ぱちスロ 冬のソナタ / パチスロ冬のソナタ / 冬ソナ / 冬のソナタKJ / パチスロ冬のソナタKJ / 7S1507 / 京楽 / KYORAKU」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / RT / CZ / 内部状態 / ステージ / ガックン / 変更判別 / 有利区間」を組み合わせ、KYORAKU公式、業界記事、K-Navi、パチナビ、モゲスロ、ちょんぼりすた、すろぱちくえすと、当時攻略誌目次/回顧資料を横断。設定変更=内部状態再抽選、純電断=内部状態引継ぎ、朝一リセット恩恵なしを固定。ステージ、据え置き独立契約、ガックン固有条件は十分な再探索後も直接固定できず推測補完しない。

## qualityNotes / conflicts

- 全国導入/稼働開始日は資料定義差あり。K-Navi、パチナビ、ちょんぼりすた、すろぱちくえすと、モゲスロおよびグリーンべるとの「納品5月20日より」で2019-05-20をcanonical導入日とする。一方、KYORAKU公式NEWSは2019-05-21を「全国導入スタート」、遊技通信/Amusement Japanも5月21日予定としており、`CONFLICT_RELEASE_SCOPE_2019_05_20_DELIVERY_OR_HALL_START_VS_2019_05_21_NATIONAL_START` として定義差を保持。
- REG最大獲得枚数はグリーンべると、遊技通信、K-Navi、パチナビ、ちょんぼりすた等が110枚で一致。一方Amusement Japan記事のみ120枚表記。多数の同時期資料一致を優先してcanonical=110枚とし、`CONFLICT_REG_MAX_110_MULTI_SOURCE_VS_120_SINGLE_INDUSTRY_ARTICLE` を保持。
- formalModel `パチスロ冬のソナタKJ` / certificationNumber `7S1507` はパチナビ機種DBで確認。追加検索でも矛盾する別型式を固定できなかった。

## sources

取得日: 2026-09-11

1. KYORAKU公式 機種サイト
   - https://www.kyoraku.co.jp/product_site/2019/fuyusona_s/
   - 公式機種、ノーマルタイプ、ゲーム性確認。
   - reliability: OFFICIAL
2. KYORAKU公式 2019 NEWS
   - https://www.kyoraku.co.jp/news/year/2019
   - 2019-05-21「全国導入スタート」。
   - reliability: OFFICIAL
3. グリーンべると / P-WORLDニュース（2019-04-08）
   - https://news.p-world.co.jp/articles/10931/greenbelt
   - BIG/MIDDLE/REG確率、合算、最大304/206/110枚、CZ約50%、RT30G、5/20納品開始予定。
   - reliability: INDUSTRY
4. 遊技通信 / P-WORLDニュース（2019-04-11）
   - https://news.p-world.co.jp/articles/10942/yugitsushin
   - A+RT、最大304/206/110枚、CZ約50%、RT30G、5/21ホール導入予定。
   - reliability: INDUSTRY
5. Amusement Japan（2019-04-11）
   - https://amusement-japan.co.jp/article/detail/10001131/
   - A+RT、合算1/179.6〜1/157.9、5/21導入予定。REG120枚表記は他資料と競合。
   - reliability: INDUSTRY_WITH_CONFLICT
6. パチナビ
   - https://pachinavi.net/machines/winter-sonata/
   - 導入日2019-05-20、5.9号機A+RT、型式パチスロ冬のソナタKJ、検定番号7S1507、最大304/206/110枚、天井非搭載。
   - reliability: ANALYSIS_DATABASE
7. パチナビ 設定判別
   - https://pachinavi.net/machines/winter-sonata/settei/
   - 設定別合算/出玉率、設定別50枚G数。
   - reliability: ANALYSIS_DATABASE
8. K-Navi
   - https://p-kn.com/slot/3233/
   - 2019-05-20導入、設定別BIG/MIDDLE/REG/合算、最大304/206/110枚、CZ約50%、RT30G。
   - reliability: ANALYSIS_DATABASE
9. モゲスロ（2019-05-26 / 2019-07-15更新）
   - https://moge-site.com/archives/21870
   - 設定別ボーナス、機械割。朝一表で設定変更=内部状態再抽選、電源OFF/ON=内部状態引継ぎ、ステージは両方調査中。
   - reliability: ANALYSIS_CONTEMPORARY
10. ちょんぼりすた
   - https://chonborista.com/slot/kyoraku-slot/80705/
   - 5.9号機A+RT、2019-05-20、35.3G/50枚、最大304/206/110枚、天井非搭載、朝一リセット恩恵「特に無し」。設定別50枚G数。
   - reliability: ANALYSIS_HIGH
11. すろぱちくえすと
   - https://www.slopachi-quest.com/article/fuyunosonata-settei/
   - 2019-05-20、A+RT、設定1 35.3G/50枚、RT純増約0.3枚。
   - reliability: ANALYSIS_SECONDARY
12. 日刊スポーツ 導入カレンダー（2019-05-10）
   - https://www.nikkansports.com/amusement/pachislot/news/201905100000340.html
   - 5/20群に天晴！モグモグ風林火山 全国制覇版、ぱちスロ冬のソナタを掲載。6/3群も確認。
   - reliability: INDUSTRY_CALENDAR
13. パチスロ必勝ガイドMAX 2019年7月号 目次（Fujisan）
   - https://www.fujisan.co.jp/product/1219887/b/1837277/
   - 当時「リセット狙い攻略」特集対象に冬のソナタを掲載していたことを確認。本文数値は取得できないため補助資料に留める。
   - reliability: CONTEMPORARY_ARCHIVE_INDEX

## missingFields

- 据え置き単独を純電源OFF→ONから分離した内部状態/RT/CZ状態の直接契約: UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION
- 設定変更時/純電断時の液晶ステージ: UNVERIFIED_AFTER_RESEARCH（当時資料も調査中）
- 本機固有ガックン発生条件・発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用の朝一モード振り分け/当選率等: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts

- CONFLICT_RELEASE_SCOPE_2019_05_20_DELIVERY_OR_HALL_START_VS_2019_05_21_NATIONAL_START
- CONFLICT_REG_MAX_110_MULTI_SOURCE_VS_120_SINGLE_INDUSTRY_ARTICLE
