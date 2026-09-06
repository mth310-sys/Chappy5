# サムライスピリッツ～剣豪八番勝負～

machineName: サムライスピリッツ～剣豪八番勝負～
formalModelName: サムライスピリッツ剣豪八番勝負AC
manufacturer: SNKプレイモア
releaseDate: 2014-04-07
releaseDatePrecision: exact_hall_start_and_industry_delivery_date
generation: 5号機
systemType: AT / 擬似ボーナス / 差枚数管理 / CZ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT_AND_PAYOUT_CONFLICT

## identity

- K-Navi・HAZUSEでホール導入開始 **2014-04-07** を確認。
- グリーンべると当時記事（2014-02-12）はSNKプレイモアの新機種として、**4月7日納品予定**と報道。
- HAZUSEで型式名 **サムライスピリッツ剣豪八番勝負AC**、検定番号 **3S1214** を確認。
- 一部後年DBに「2014年3月」表記があるが、具体日付きの当時/解析資料を優先し本DB時系列キーは2014-04-07。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE_EXACT_DATE

## payoutRateBySetting

### series A — 主採用系列

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.6% |
| 3 | 99.9% |
| 4 | 104.0% |
| 5 | 108.3% |
| 6 | 113.6% |

- P-WORLD系整理値、5号機クロニクル、当時実機配信資料・後年複数整理資料で一致。

### series B — 競合系列

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.9% |
| 3 | 100.3% |
| 4 | 104.4% |
| 5 | 108.8% |
| 6 | 114.1% |

- すろぱちくえすとに掲載。
- 定義/算出条件差を現存資料から確定できないため平均せず **CONFLICT_PAYOUT_SERIES_A_VS_B** として保持。
- confidence: CONFLICT

## initialHitBySetting

### 擬似ボーナス初当たり

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/249.9 |
| 2 | 1/240.2 |
| 3 | 1/228.1 |
| 4 | 1/216.1 |
| 5 | 1/201.3 |
| 6 | 1/185.0 |

### 擬似ボーナス出現率（1G連・剣豪八番勝負引き戻し含む）

| 設定 | 出現率 |
|---:|---:|
| 1 | 1/115.7 |
| 2 | 1/111.1 |
| 3 | 1/104.0 |
| 4 | 1/94.8 |
| 5 | 1/83.9 |
| 6 | 1/74.2 |

- HAZUSEで両定義を明確に分離して掲載。K-Naviも設定1の出現率1/115.7を掲載。
- 物差しの主要初当たりには上段の「ボーナス初当たり」を採用し、連荘込み出現率と混同しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「50枚」「1000円」「ベース」「コイン持ち」「通常時回転数」等へ検索語を変更し、K-Navi、HAZUSE、パチマガスロマガ、P-WORLD、当時攻略、後年DBを横断したが、比較可能な数値を安全に固定できなかった。

## netIncrease

- AT擬似ボーナス: **約2.8枚/G**。
- グリーンべると当時記事、パチマガスロマガ、P-WORLD、K-Navi系で一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- REG: **約40枚**（ベルナビ8回）。
- 剣豪ボーナス: **期待獲得約200枚**。P-WORLDでは初期枚数100枚の差枚数管理。
- 天下無双ボーナス: **期待獲得約400枚**。P-WORLDでは初期枚数200枚の差枚数管理。
- グリーンべると当時記事、パチマガスロマガ、P-WORLDで一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 出玉増加の中心は純増約2.8枚/GのAT擬似ボーナス。
- 通常時の主要契機はCZ「剣豪八番勝負」「練気モード」「尋常チャンス」等。
- 「練気モード」は15G+αの白7高確率ゾーンとして解析資料に掲載。
- 剣豪ボーナス/天下無双ボーナスは差枚数管理、REGはベル回数管理。
- ボーナス終了後は剣豪八番勝負へ移行し、勝利でボーナス連荘。7人連続撃破後は天草バトル（80%ループ）。

## ceiling

- ボーナス間 **999G + 最大前兆約32G** でボーナス確定CZ「練気モード」へ。
- 天井到達時はBIG以上確定とする後年解析があり、天覇神滅ノ刻抽選優遇も掲載。
- K-Navi/複数攻略系で999G天井を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_CONFIRMED_GAME_COUNTER_RESET_AND_PUBLIC_128G_CZ_NUMBER
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更で天井ゲーム数リセット**を確認。
- 設定変更後は規定G数による「練気モード」が朝一側へ優遇される解析が存在する。
- 設定変更時の通常状態/高確状態などの具体的な再抽選契約は、検索語・資料系統を変えた再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 据え置き時の天井G数・規定G数・内部状態の具体的引継ぎ契約を、本機固有の高信頼資料で安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 「設定変更で天井G数リセット」という事実から据え置き契約を逆推定しない。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ON時に、天井G数・規定G数・CZテーブル・内部状態がどう扱われるかは **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- **RESET_CONFIRMED_ON_SETTING_CHANGE**。
- 解析資料に「設定変更で天井G数リセット」と明記。

### ceilingAfterReset

- 通常天井自体は **999G + 前兆**。
- 設定変更専用の短縮「天井」数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更後は別管理のCZ「練気モード」が128G以内に25%で当選するため、朝一狙い上の恩恵として別項目に保持。

### modeAfterReset

- 設定変更後の練気モード規定G振り分けが通常時と異なることを示す公開解析あり。
- モード名/全振り分け表としての直接契約は今回固定できず **PARTIAL_CONFIRMED_RESET_SPECIFIC_REGULATED_GAME_BEHAVIOR**。

### stateAfterReset

- 低確/高確等の具体的初期状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更後は**128G以内に練気モード当選25%**という公開解析値あり。
- 朝一96〜128Gで練気モード前兆が出れば設定変更濃厚とする攻略資料があり、客側の朝一変更推測に利用可能。
- これはAT直撃率ではなく **CZ「練気モード」当選率**。定義を混同しない。

### resetPenalties

- 設定変更時固有の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **CONFIRMED_PROBABILISTIC_GAME_COUNT_BEHAVIOR_SIGNAL**。
- 朝一設定変更後 **96〜128G** に「怒ノ道ステージ」「桜役物開花」「好機アイコン」等の練気モード前兆が発生すれば、設定変更濃厚とする当時攻略資料あり。
- ガックン等の本機固有確定判別: **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更後 **128G以内の練気モード当選率: 25%**。
- 96〜128Gの練気モード前兆: 設定変更推測シグナル（「濃厚」扱い）。
- 設定変更後AT/擬似ボーナスの128G以内総当選率としては扱わない。

## conflicts / safeguards

- 機械割は **96.9〜113.6%系列** と **97.2〜114.1%系列** が競合。平均せず双方保持。
- 「ボーナス初当たり1/249.9〜1/185.0」と「1G連/引き戻し込み出現率1/115.7〜1/74.2」は異なる定義なので分離。
- 一部後年DBの導入「2014年3月」と、具体日付き2014-04-07資料の差を保持。本DB時系列は具体日資料を優先。
- すろぱちくえすと記事にメーカー表記「KPE」が見られるが、本機メーカーはSNKプレイモア。identityには採用しない。
- 設定変更後128G以内25%はCZ練気モードの値であり、擬似ボーナス直撃率ではない。

## sources

取得日: **2026-09-06**

1. グリーンべると「W液晶搭載『サムスピ』が専用筐体で新登場」
   - https://web-greenbelt.jp/00000083/
   - 2014-02-12記事。メーカー、AT純増2.8枚/G、REG約40枚、剣豪BONUS期待200枚、天下無双期待400枚、4月7日納品予定。
   - reliability: INDUSTRY_PERIOD

2. K-Navi「サムライスピリッツ～剣豪八番勝負～」
   - https://p-kn.com/slot/2013/
   - ホール導入開始2014-04-07、AT機、ボーナス出現率、ゲーム性。
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE

3. HAZUSE「サムライスピリッツ～剣豪八番勝負～」
   - https://hazuse.com/machine/pachislot/3S1214/
   - 型式名、検定番号、2014-04-07導入、ボーナス出現率と初当たり率の定義分離。
   - reliability: ANALYSIS_HIGH

4. パチマガスロマガ「サムライスピリッツ～剣豪八番勝負～」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/47/a.php
   - 2014年4月、AT、純増2.8枚/G、REGベル8回、剣豪BONUS平均200枚、天下無双平均400枚。
   - reliability: ANALYSIS_HIGH_PERIOD_DATABASE

5. P-WORLD「サムライスピリッツ～剣豪八番勝負～」
   - https://www.p-world.co.jp/machine/database/7321
   - 5号機AT、純増約2.8枚/G、各擬似ボーナス基本性能、CZ/ゲームフロー。
   - reliability: INDUSTRY_DATABASE_RETROSPECTIVE

6. 目指せ月収20万！パチスロ天井解析攻略ブログ「サムライスピリッツ 天井・ゾーン・スペック解析」
   - https://mezase20.com/samuraispirits.html
   - 2014-04-07掲載。999G+前兆天井、設定変更後128G以内の練気モード25%、96〜128G前兆による変更判別。
   - reliability: ANALYSIS_PERIOD_SINGLE

7. スロットコレクション 2-9伝説まとめ「サムライスピリッツ〜剣豪八番勝負〜」
   - https://29den.com/samuraispirits2/
   - 2014-04-07導入、純増2.8枚/G、999G天井、設定変更で天井G数リセット、機械割96.9〜113.6%。
   - reliability: ANALYSIS_RETROSPECTIVE

8. 5号機クロニクル「SNKプレイモア 5号機全機種一覧」
   - https://5goki.com/snkplaymore
   - 機械割96.9 / 98.6 / 99.9 / 104.0 / 108.3 / 113.6%。導入月表記は2014/3で具体日資料と差あり。
   - reliability: RETROSPECTIVE_DATABASE

9. すろぱちくえすと「サムライスピリッツ2～剣豪八番勝負～」
   - https://www.slopachi-quest.com/kisyubetsu/samurai-spirits/
   - 999G+前兆32G、天井恩恵、機械割97.2〜114.1%の競合系列。
   - reliability: ANALYSIS_RETROSPECTIVE

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior specific contract: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset numeric distribution: UNVERIFIED_AFTER_RESEARCH
- full reset-mode/regulation-game distribution: UNVERIFIED_AFTER_RESEARCH
