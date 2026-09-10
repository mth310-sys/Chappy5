# 咲桜弁慶

recordNo: 1290
machineName: 咲桜弁慶
manufacturer: ボーダー（Border）
formalModel: サクラベンケイ2
certificationNumber: 8S0064
releaseDate: 2019-06-17
generation: 5.9号機
systemType: ノーマル / Aタイプ / BIG+REG

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.17% |
| 2 | 99.02% |
| 3 | 100.58% |
| 4 | 103.13% |
| 5 | 106.03% |
| 6 | 110.36% |

一撃の精密値を主値とし、ちょんぼりすたの丸め値97.2 / 99.0 / 100.6 / 103.1 / 106.0 / 110.4%と整合。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/452.0 | 1/485.5 | 1/234.1 |
| 2 | 1/439.8 | 1/474.9 | 1/228.3 |
| 3 | 1/434.0 | 1/458.3 | 1/222.9 |
| 4 | 1/417.4 | 1/436.9 | 1/213.5 |
| 5 | 1/385.5 | 1/407.1 | 1/198.0 |
| 6 | 1/362.1 | 1/362.1 | 1/181.0 |

HAZUSE、ちょんぼりすた、モゲスロで一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約41.9〜47.1G/50枚（設定差を含む公開レンジ）
- 設定別の完全な対応表は今回固定できず、レンジを各設定へ算術配分しない。

信頼度: INDUSTRY_HIGH_MULTI_SOURCE_RANGE

## netIncrease

- 非該当。ボーナスのみで出玉を増やす5.9号機ノーマルタイプ。

## basicPayout

- BIG: 最大402枚（技術介入で14枚役を1度獲得）
- REG: 104枚

グリーンべると、HAZUSE、ちょんぼりすたで一致。

信頼度: INDUSTRY_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 中段1ラインのノーマルタイプ。
- ボーナスはBIG / REGの2種類。
- 天井・ゲーム数ゾーンは非搭載。
- BIG中の顔目停止時ボイス、REG中の顔目停止回数、REG終了時の桜フラッシュに設定示唆あり。
- ART/AT/RTによる出玉増加機能は今回の主要資料で確認されない。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 本機固有の設定変更時内部契約を、当時解析・業界資料・機種DB・回顧資料で再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 天井・ゲーム数モードを持たないノーマル機。設定据え置き時の成立済みボーナス等を含む本機固有内部状態契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycleBehavior: 電源OFF→ONのみの本機固有内部状態契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。据え置き一般論から推定しない。
- gameCounterReset: 天井非搭載のため公開天井ゲーム数カウンターは `NOT_APPLICABLE`。
- ceilingAfterReset: 天井・ゾーン非搭載のため `NOT_APPLICABLE`。設定変更専用短縮天井なし。
- modeAfterReset: ゲーム数モード/朝一専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: 設定変更時の朝一高確等の優遇状態は `NONE_CONFIRMED_AFTER_RESEARCH`。成立済みボーナス等の内部契約は未固定。
- advantageousSectionReset: ボーナスのみで出玉を増やす5.9号機ノーマルタイプとして確認。有利区間を用いるAT/ART機能は主要資料で確認されず `NOT_USED_CONFIRMED_BY_SYSTEM_CLASSIFICATION`。
- resetBenefits: モゲスロは天井・ゾーン・リセット性能を整理し「リセット恩恵なし」と明記。`NONE_CONFIRMED`。
- resetPenalties: 設定変更専用の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 「朝一リセット判別」を含む当時解析を再探索したが、本機固有のガックン・初期出目・ランプ等による変更確定条件/発生率は固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更時のみの公開朝一数値は `PUBLIC_NUMERIC_RESET_DATA_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「咲桜弁慶 / サクラベンケイ / サクラベンケイ2 / 8S0064 / Border / ボーダー」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / 天井 / ゾーン / 恩恵」を組み合わせ、遊技通信の検定通過情報、グリーンべると、HAZUSE、一撃、ちょんぼりすた、モゲスロ、当時攻略誌目次まで横断。天井・ゾーン・リセット恩恵なしは固定できたが、設定変更/据え置き/純電断の機種固有内部状態契約および変更判別数値は固定できず、一般ノーマル機から推測しない。

## qualityNotes / conflicts

- 導入日は当初2019-05-13予定とする資料があるが、その後2019-06-17へ延期。HAZUSE・一撃・ちょんぼりすた・導入カレンダーが2019-06-17で一致するため実導入日をcanonical採用。
- グリーンべるとの2019-03-27記事は納品を5月12日予定としており、延期前の計画値として保持。実導入日とはCONFLICT扱いにせず `SCHEDULE_CHANGED_BEFORE_RELEASE`。
- 型式 `サクラベンケイ2` / 検定番号 `8S0064` は遊技通信の東京都公安委員会検定通過情報とHAZUSEで一致。

## sources

取得日: 2026-09-11

1. 遊技通信web — 東京都公安委員会検定通過状況（2019-02-12）
   - https://www.yugitsushin.jp/news/gyousei/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%882%E6%9C%8812%E6%97%A5%EF%BC%89-2/
   - サクラベンケイ2、ボーダー、検定番号8S0064。
   - reliability: INDUSTRY_HIGH / OFFICIAL_NOTICE_RELAY
2. HAZUSE — 咲桜弁慶
   - https://hazuse.com/machine/pachislot/8S0064/
   - 型式、検定番号、2019-06-17導入、5号機ノーマル、BIG/REG/合算、天井非搭載、最大獲得枚数。
   - reliability: ANALYSIS_HIGH
3. 一撃 — 咲桜弁慶
   - https://1geki.jp/slot/s_sb/
   - 2019-06-17導入、設定別合算・精密出玉率、5.9号機ノーマル、BIG最大402枚。
   - reliability: ANALYSIS_HIGH
4. ちょんぼりすた — 咲桜弁慶
   - https://chonborista.com/slot/border/81327/
   - 導入予定5/13から6/17への訂正、設定別BIG/REG/合算/丸め機械割、41.9〜47.1G/50枚、天井非搭載。
   - reliability: ANALYSIS_HIGH
5. グリーンべると — 『弁慶』シリーズ第3弾は400枚BIG搭載機
   - https://web-greenbelt.jp/00011192/
   - 2019-03-27当時業界発表、BIG最大402枚、REG104枚、合算1/234.1〜1/181.0、ベース41.9〜47.1G。
   - reliability: INDUSTRY_HIGH
6. モゲスロ — 咲桜弁慶 打ち方/勝ち方/狙い目まとめ
   - https://moge-site.com/archives/21994
   - 2019-06-17導入、設定別ボーナス確率、天井なし/ゾーンなし/リセット恩恵なし。
   - reliability: ANALYSIS_SINGLE
7. パチスロ立ち回り講座 — 新台導入予定日
   - https://crankyseven.com/newmachine-info.htm
   - 2019-06-17群をスーパードラゴン/咲桜弁慶の2機種として掲載。次のスロット導入日を2019-07-08ガールズ＆パンツァーGとして掲載。
   - reliability: HISTORICAL_CALENDAR_SINGLE

## missingFields

- 設定別baseGamesPer50の完全表
- 設定変更/据え置き/純電源OFF→ON時の本機固有内部状態契約
- resetDetectionの機種固有確定条件・発生率
- 設定変更時のみの公開朝一数値

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
