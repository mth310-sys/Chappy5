# パチスロ グラップラー刃牙 ～最大トーナメント編～

machineName: パチスロ グラップラー刃牙 ～最大トーナメント編～
aliases: グラップラー刃牙 / パチスログラップラー刃牙～最大トーナメント編～
manufacturer: ニューギン
releaseDate: 2014-03-03
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: ボーナス+ART / ループ型ゲーム数上乗せART / CZ
recordStatus: PARTIAL_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- ニューギンが2014-01-10に新機種として発表。企業プレスリリースで製品名を確認。
- PiDEAの当時発表会記事で導入開始予定 **2014-03-03**、K-Naviでもホール導入開始 **2014-03-03** を確認したため、本DBのhall startを同日に固定。
- 型式名 / 検定番号は、機種名表記揺れ・メーカー名・「型式」「検定」「3S」等で再探索したが今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 後年5号機一覧には2014/2表記もあるが、当時の具体日資料を優先し、月次表記差として保持する。
- confidence: OFFICIAL_FOR_IDENTITY / INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE_FOR_DATE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.8% |
| 3 | 101.5% |
| 4 | 103.9% |
| 5 | 106.3% |
| 6 | 111.6% |

- 2014年当時のスロパチクエスト解析と後年5号機DBで同系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス合成

| 設定 | ボーナス |
|---|---:|
| 1 | 1/1489.5 |
| 2 | 1/1424.7 |
| 3 | 1/1365.3 |
| 4 | 1/1310.7 |
| 5 | 1/1260.3 |
| 6 | 1/1213.6 |

### ART「グラップラーバトル」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/265.4 |
| 2 | 1/255.8 |
| 3 | 1/246.5 |
| 4 | 1/235.3 |
| 5 | 1/221.2 |
| 6 | 1/191.3 |

### ボーナス+ART合成初当たり

| 設定 | 合成 |
|---|---:|
| 1 | 1/225.3 |
| 2 | 1/216.9 |
| 3 | 1/208.8 |
| 4 | 1/199.5 |
| 5 | 1/188.2 |
| 6 | 1/165.2 |

- 2014年当時スロパチクエスト解析を基準値として保存。
- 後年5号機DBではART設定6を **1/165.2** とする表があり、これは当時資料の「ボーナス+ART合成」設定6と完全一致する。列定義/転記差の可能性があるため平均せず conflicts に保持する。
- confidence: PERIOD_ANALYSIS_HIGH / CONFLICT_FOR_RETROSPECTIVE_SETTING6_ART_COLUMN

## baseGamesPer50

- 「グラップラー刃牙 / 最大トーナメント / ニューギン / 2014」に「50枚 / 1000円 / ベース / コイン持ち」を組み合わせ、当時解析・古いDB・回顧資料を再探索したが、比較可能な高信頼の明示値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 掲示板/個人実戦由来の約23G/1000円級の言及は確認したが、単一ユーザー観測であるため性能コアには採用しない。

## netIncrease

- ART「グラップラーバトル」: **約2.0枚/G**。
- 1セット **50G+α**。
- ART継続率は約 **50～90%**。
- 娯楽産業の当時業界記事、K-Navi、P-WORLDで同系統を確認。
- confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout

- ボーナス「強者への試練」/「超グラップラーバトル」: **約80枚**級。
- ART「グラップラーバトル」: **1セット50G+α × 純増約2.0枚/G**。
- ART基本50G部分の純増レート換算は約100枚相当だが、これは比較用のレート×G数であり保証獲得枚数として扱わない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 主軸はART「グラップラーバトル」。ラスト10Gの継続バトルに勝利するとループ。
- 継続率は約50～90%。
- ゲーム数上乗せ特化ゾーン「刃牙RUSH」「オーガインパクト」を搭載。
- CZを搭載するが、完全再現用のCZ内部抽選・上乗せ振り分けは本DB対象外。

## ceiling

- 通常最大天井: **ボーナス・ART間1280G**。
- 天井恩恵: ART「グラップラーバトル」**90%ループ確定**とする当時解析。
- confidence: PERIOD_ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_G_RESET_CONFIRMED__OTHER_RESET_FIELDS_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **ボーナス・ART間ハマリゲーム数RESET**。
- 当時解析で直接確認。
- 設定変更時のモード/内部状態再抽選契約は、本機固有の直接資料を十分固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: PERIOD_ANALYSIS_HIGH_FOR_GAME_COUNTER_RESET

### carryOverBehavior

- 純据え置き時の天井ゲーム数・モード・内部状態の引継ぎを、本機固有で直接記述した高信頼資料を、検索語・資料系統を変えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時RESETの反対挙動を自動推定していない。

### powerCycleBehavior

- 設定変更なしの単純な電源OFF→ONについて、天井G・モード・状態の本機固有直接契約を確認できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で天井進捗はリセットされる。
- 2014年ニューギン版について、設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時天井 **1280G** と、設定変更専用短縮値を混同しない。
- 2017年七匠版「パチスロ グラップラー刃牙」のリセット時800G天井は別機種のため明示的に除外する。

### modeAfterReset

- 設定変更時の朝一専用モード、モード再抽選、公開振り分け率: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時の低確/高確等の内部状態再抽選・初期振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 2014年導入5号機のため、有利区間制度は非該当。

### resetBenefits

- 設定変更専用の短縮天井、朝一高確、専用優遇モード等の主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 1280G到達時90%ループは通常天井恩恵であり、リセット専用恩恵として扱わない。

### resetPenalties

- 設定変更で前日までの天井進捗が消滅するため、前日深ハマリを前提とした宵越し価値は失われる。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期出目、固定朝一ステージ、特定ゲーム数挙動等について、本機固有の高信頼変更判別情報を十分な再探索後も固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一般的な5号機の判別法を本機へ自動転記しない。

### publicMorningNumbers

- 設定変更時ハマリG: **0から再計数（RESET_CONFIRMED）**。
- 設定変更専用モード振り分け / 朝一当選率 / 固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常最大天井1280Gは朝一専用数値ではないため別管理。

## conflicts / safeguards

- ART初当たり設定6: 当時解析 **1/191.3** vs 後年5号機DB **1/165.2**。後者は当時解析のボーナス+ART合成設定6と一致するため列定義/転記差の可能性があるが、推測で修正せず **CONFLICT** として保持。
- 導入時期: 当時具体日資料 **2014-03-03** vs 後年一覧の **2014/2** 月次表記。hall startは具体日複数資料を優先。
- 2017年七匠版「パチスロ グラップラー刃牙」のベース41G/50枚、通常天井1300G、リセット800G等を2014年ニューギン版へ混入させない。
- 上乗せ特化ゾーン内部の詳細抽選値は実機完全再現用のため性能コアへ入れない。

## sources

取得日: **2026-09-06**

1. ニューギン / PR TIMES「パチスログラップラー刃牙〜最大トーナメント編〜 新機種プレス発表会」2014-01-10
   - https://prtimes.jp/main/html/rd/p/000000001.000009222.html
   - ニューギンによる機種発表・製品identity。
   - confidence: OFFICIAL_CORPORATE_RELEASE

2. PiDEA X「パチスロ グラップラー刃牙～最大トーナメント編～ 発表会」
   - https://www.pidea.jp/articles/%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%20%E3%82%B0%E3%83%A9%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%88%83%E7%89%99%EF%BD%9E%E6%9C%80%E5%A4%A7%E3%83%88%E3%83%BC%E3%83%8A%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BD%9E%E3%80%8D%E7%99%BA%E8%A1%A8%E4%BC%9A
   - 導入2014-03-03スタート予定。
   - confidence: INDUSTRY

3. 娯楽産業「ニューギン 新機種『パチスロ グラップラー刃牙』発表」2014-01-22
   - https://www.goraku-sangyo.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B0%E3%83%A9%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%88%83%E7%89%99/
   - ART50G+α、純増2.0枚/G、継続率約50～90%。
   - confidence: INDUSTRY

4. K-Navi「パチスロ グラップラー刃牙 ～最大トーナメント編～」
   - https://p-kn.com/slot/1996/
   - ホール導入開始2014-03-03、ART基本仕様、ボーナス仕様。
   - confidence: ANALYSIS_HIGH_DATABASE

5. P-WORLD「パチスロ グラップラー刃牙～最大トーナメント編～」
   - https://www.p-world.co.jp/machine/database/7296
   - 5号機ART/CZ、ART50G+α・純増約2.0枚/G、ボーナス約80枚。
   - confidence: DATABASE_HIGH

6. スロパチクエスト「グラップラー刃牙～最大トーナメント編～ 機種別解析まとめ」
   - https://www.slopachi-quest.com/kisyubetsu/baki/
   - 設定別ボーナス/ART/合成初当たり、機械割、1280G天井、90%ループ恩恵、設定変更時ハマリGリセット。
   - confidence: PERIOD_ANALYSIS_HIGH

7. 5号機クロニクル — ニューギン機種一覧/本機項目
   - https://5goki.com/
   - 機械割系列の照合。ART設定6列1/165.2は当時解析1/191.3と競合するためconflict管理。
   - confidence: RETROSPECTIVE_ANALYSIS_SINGLE

## missingFields

- 型式名 / 検定番号
- baseGamesPer50
- 据え置き時の本機固有G数/モード/状態引継ぎ契約
- 電源OFF→ONのみの本機固有挙動
- 設定変更時のモード/状態振り分け
- 設定変更判別の本機固有高信頼情報

coreStatus: PARTIAL
resetBehaviorQA: RESEARCHED_PARTIAL
