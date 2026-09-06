# バビロン(with桜丘ショコラ)

machineName: バビロン(with桜丘ショコラ)
manufacturer: タイヨー
releaseDate: 2014-09-29
releaseDatePrecision: DATE_CONFLICT_EARLIEST_LISTED_HALL_START
alternativeHallStart: 2014-10-06
plannedDeliveryDateConflict: 2014-09-28 / 2014-10-05
generation: 5号機
systemType: ノーマル / Aタイプ / 技術介入ボーナス
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS_AND_RELEASE_DATE_CONFLICT

## identity

- 型式名: **バビロンA**。
- 検定番号: **4S0663**。
- HAZUSEは導入開始日を **2014-09-29** と掲載。
- 2014-11-07のP-MEDIA「9月29日〜リリース機種」定点観測にも本機が含まれ、9/29系統の当時資料を補強する。
- 一方、2014-08-25グリーンべるとの発表会記事は **2014-10-05より納品開始**、2014-08-27ニッカンアミューズメント/PiDEAも **10月5日納品予定** と明記。
- 後年のP-Summaは **2014-10-06から導入開始**、pacnkは **2014年10月導入** とする。
- さらにP-Summaが引用する2014-08-25当時の販売会社投稿には **9/28納品予定** とあり、発表時点でも納品予定日情報が割れている。
- 地域先行を直接明記するメーカー一次資料は今回固定できなかったため、9/29を無条件に全国導入日とはせず `DATE_CONFLICT_2014-09-29_VS_2014-10-06_WITH_DELIVERY_09-28_VS_10-05` として保持。時系列漏れ防止のためreleaseDate主値は確認できる最古の導入掲載日9/29を採用し、代替日を明示する。
- confidence: CONFLICT_DATE / INDUSTRY_PLUS_ANALYSIS_HIGH_FOR_IDENTITY

## payoutRateBySetting

### 市場掲載 / 解析値

| 設定 | PAYOUT |
|---:|---:|
| 1 | 96.4% |
| 2 | 98.4% |
| 3 | 99.3% |
| 4 | 101.5% |
| 5 | 103.4% |
| 6 | 106.1% |

- HAZUSE、パチマガスロマガ通常PAYOUT表、pacnkで一致。

### パチマガスロマガ シミュレート値

| 設定 | PAYOUT simulation |
|---:|---:|
| 1 | 95.71% |
| 2 | 97.66% |
| 3 | 98.52% |
| 4 | 100.68% |
| 5 | 102.65% |
| 6 | 105.16% |

- 市場掲載PAYOUTとシミュレート値は条件/定義が異なるため平均せず `DEFINITION_DIFFERENCE_MARKET_PAYOUT_VS_SIMULATION` として分離保存。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG

| 設定 | BIG |
|---:|---:|
| 1 | 1/292.6 |
| 2 | 1/281.3 |
| 3 | 1/281.3 |
| 4 | 1/275.4 |
| 5 | 1/270.8 |
| 6 | 1/267.5 |

### REG

| 設定 | REG |
|---:|---:|
| 1 | 1/439.8 |
| 2 | 1/420.1 |
| 3 | 1/376.6 |
| 4 | 1/321.3 |
| 5 | 1/307.7 |
| 6 | 1/271.9 |

### ボーナス合成

| 設定 | 合算 |
|---:|---:|
| 1 | 1/175.7 |
| 2 | 1/168.5 |
| 3 | 1/161.0 |
| 4 | 1/148.3 |
| 5 | 1/144.0 |
| 6 | 1/134.8 |

- HAZUSE、パチマガスロマガ、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約33.9〜35.2G/50枚**（設定差を含むレンジ）。
- HAZUSEの小役解析ページから取得。
- confidence: ANALYSIS_SINGLE

## netIncrease

- 非該当。RT/ART/AT等の付加機能なし。

## basicPayout

- BIG: 技術介入成功時 **最大335枚**。
- REG: 技術介入成功時 **最大103枚**。
- BIGは344枚超、REGは104枚超の払い出しで終了。
- BIG/REGともボーナス中に14枚役を1度取得する手順で最大枚数へ到達。
- 2014年当時のグリーンべると、ニッカンアミューズメント/PiDEA、HAZUSE、パチマガスロマガで整合。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 5号機ノーマルタイプ。BIG/REGのみで出玉を増やす。
- ボーナスの約30%が単独当選とする当時発表。
- **天井機能非搭載**。
- 通常時ゲーム数解除/規定Gモードなし。
- AT/ART/RT/CZなし。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 天井・規定Gモード・AT/ART/RT/CZ状態を搭載しないノーマル機のため、それらの設定変更時リセットは `NOT_APPLICABLE`。
- 本機固有の設定変更時リール初期化、ボーナス成立状態、演出内部状態等の直接契約は、設定変更/リセット/朝一/ガックン/初期出目を再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時に引き継ぐ天井・規定Gモード・AT/ART/RT/CZ・有利区間は `NOT_APPLICABLE`。
- リール初期位置/演出内部状態など、本機固有の据え置き契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 設定変更なしの単純電源OFF→ONについて、リール初期位置・ボーナス成立状態・演出内部状態を直接比較した本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_RELEASE`。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset

- `NOT_APPLICABLE_NO_GAME_NUMBER_MODE`。

### stateAfterReset

- 朝一に再抽選対象となるAT/ART/RT/CZの内部状態は `NOT_APPLICABLE`。
- 演出用内部処理まで実機再現する必要はなく、本機固有の設定変更契約が未確認な部分は推測しない。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 朝一/設定変更固有の主要出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、初期出目、液晶表示等による設定変更/据え置き判別を直接説明する高信頼資料は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 他のタイヨー機・ノーマル機一般のガックン情報を流用しない。

### numericResetData

- 設定変更時専用の比較可能な公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `バビロン / バビロンwith桜丘ショコラ / バビロン(with桜丘ショコラ) / バビロンA / タイヨー`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / ガックン / 初期出目 / リール`。
- 資料系統: 当時業界発表、HAZUSE、旧パチマガスロマガ、pacnk、当時系まとめ、検定/公式公開記録。
- ノーマル機としての非該当項目は固定できたが、リール初期化やガックンの本機固有直接契約は見つからず推測しない。

## sources

取得日: 2026-09-07

1. グリーンべると — 激安第2弾、液晶機で16万8000円のパチスロが登場
   - https://web-greenbelt.jp/00007176/
   - 2014-08-25、ノーマル機、BIG最大335枚/REG最大103枚、2014-10-05より納品開始
   - reliability: INDUSTRY
2. ニッカンアミューズメント / PiDEA — タイヨー「バビロン」桜丘ショコラが応援
   - https://www.nikkansports.com/amusement/pachinko/news/f-pp-tp0-20140827-1357347.html
   - 2014-08-27、BIG/REG仕様、納品日10月5日予定
   - reliability: INDUSTRY
3. HAZUSE — バビロン(with桜丘ショコラ)
   - https://hazuse.com/machine/pachislot/4S0663/
   - 導入2014-09-29、型式バビロンA、検定番号4S0663、PAYOUT、BIG/REG/合算、ベース33.9〜35.2G、天井非搭載
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/81/h.php
   - BIG/REG/合算、市場掲載PAYOUT
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — シミュレートPAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/81/h-1.php
   - シミュレート値95.71〜105.16%
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — ボーナス中の打ち方
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/81/e.php
   - BIG最大335枚、REG最大103枚の技術介入手順
   - reliability: ANALYSIS_HIGH
7. pacnk — バビロン（with 桜丘ショコラ）
   - https://pacnk.com/slot/2014/babiron/top.php
   - 2014年10月導入、PAYOUT/BIG/REG照合
   - reliability: ANALYSIS_SINGLE
8. P-Summa — 限定300台導入の衝撃
   - https://psumma.jp/pachislo/3711/
   - 2014-10-06導入開始表記、2014-08-25販売会社投稿の9/28納品予定情報を引用
   - reliability: ANALYSIS_SINGLE_RETROSPECTIVE_WITH_CONTEMPORARY_QUOTE
9. P-MEDIA — 9月29日〜リリース機種中古価格定点観測
   - https://p-media.info/9%E6%9C%8829%E6%97%A5%E3%80%9C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E6%A9%9F%E7%A8%AE%E4%B8%AD%E5%8F%A4%E4%BE%A1%E6%A0%BC%E5%AE%9A%E7%82%B9%E8%A6%B3%E6%B8%AC%EF%BC%8F%E3%82%B9%E3%83%BC%E3%83%91/
   - 2014-11-07、9/29〜リリース機種群にバビロンを掲載
   - reliability: INDUSTRY_MEDIA

## missingFields

- 9/29と10/6の差が地域先行/予定変更/DB誤差のどれかを直接説明するメーカー一次資料
- 設定変更/純電断時の本機固有リール初期化契約
- ガックン等の本機固有変更判別

## conflicts

- `DATE_CONFLICT_2014-09-29_VS_2014-10-06_WITH_DELIVERY_09-28_VS_10-05`。
- 機械割は市場掲載96.4〜106.1%とパチマガスロマガのシミュレート95.71〜105.16%が存在。定義差として分離し平均しない。

coreStatus: COMPLETE_CORE_WITH_RELEASE_DATE_CONFLICT
resetBehaviorQA: COMPLETE_WITH_SOURCE_LIMITS
