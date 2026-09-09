machineName: パチスロ ベン・トー～半額弁当争奪戦!!～
manufacturer: バルテック
releaseDate: 2017-06-19
recordNumber: 1092
generation: 5号機 / 5.5号機
systemType: A+ART / リアルボーナス / ゲーム数上乗せART
formalModelName: パチスロベントー／AB
certificationNumber: 7S0170
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- バルテック公式製品ページで本機を確認。
- HAZUSEで型式 `パチスロベントー／AB`、検定番号 `7S0170`、導入開始日2017-06-19、メーカーを直接確認。
- PiDEA Xの2017-05-10発表記事では納品日2017-06-18予定。これはホール導入開始日2017-06-19と矛盾せず、物流日/稼働開始日の定義差として保持。
- 2018年の別機種「ベン・トー～狼たちの夜～」とは混同しない。
reliability: OFFICIAL_PLUS_INDUSTRY_AND_OLD_DB

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|96.57%|
|2|98.07%|
|3|99.88%|
|4|101.44%|
|5|104.58%|
|6|110.32%|
- すろぱちくえすとの精密値をcanonical採用。
- ちょんぼりすたの96.6 / 98.1 / 99.9 / 101.4 / 104.6 / 110.3%は丸め値として整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
|設定|確率|
|---:|---:|
|1|1/364.09|
|2|1/360.09|
|3|1/356.17|
|4|1/352.34|
|5|1/348.60|
|6|1/344.93|

### REG
|設定|確率|
|---:|---:|
|1|1/682.67|
|2|1/655.36|
|3|1/630.15|
|4|1/606.81|
|5|1/585.14|
|6|1/528.52|

### ボーナス合算
- 1/237.45 / 1/232.40 / 1/227.56 / 1/222.91 / 1/218.45 / 1/208.71。

### ART「ベン・トーRUSH」初当たり
- 1/433.45 / 1/418.22 / 1/398.80 / 1/383.42 / 1/348.17 / 1/298.67。
- すろぱちくえすとの同一記事内スペック表に設定6のみ1/297.67表記が1箇所あるが、同記事内別表・HAZUSE・P-WORLDは1/298.67で一致するため、単独転記誤差/誤植扱いとしてcanonicalは1/298.67。平均しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約37G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ベン・トーRUSH」: 約1.3枚/G。
reliability: OFFICIAL_INDUSTRY_PLUS_ANALYSIS

## basicPayout
- BIG BONUS: 約160枚。
- REG BONUS: 最大40枚。
- ART「ベン・トーRUSH」: 初期30G以上 / 1セット30G+α、ゲーム数上乗せ型。
reliability: OFFICIAL_INDUSTRY_PLUS_ANALYSIS

## modeSpecificMinimumData
- 通常時内部状態: 低確 / 高確 / 超高確。
- ボーナス・ART間天井: 最大999GでART当選。
- 天井振り分け: 555G 1.56% / 777G 10.94% / 999G 87.50%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_COUNTER_AND_STATE_NUMERIC_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ボーナス・ART間ゲーム数/天井: RESETし、天井ゲーム数を再抽選。
- 内部状態: RESELECT。
- 設定変更時の状態振り分けは公開数値あり。
- 朝一専用の固定モードは確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き専用の直接比較契約は、機種名/型式/メーカー名と「据え置き」「朝一」「天井」「状態」「電源OFF ON」を組み替えて再探索したが、十分な直接資料を固定できず `UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH`。
- 一般的5号機挙動からの推測転記は行わない。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ON時の天井ゲーム数・内部状態の直接契約は、当時解析/古いDB/回顧資料を検索語変更して再探索したが本機固有の明示資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更挙動や据え置き一般論から補完しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- settingChange: RESET / ceiling reselection。
- carryOver/stay-setting: UNVERIFIED_DIRECT_AFTER_RESEARCH。
- powerOffOn: UNVERIFIED_AFTER_RESEARCH。

### ceilingAfterReset
- settingChange: 通常時と同じ天井振り分けで再抽選。
  - 555G: 1.56%
  - 777G: 10.94%
  - 999G: 87.50%
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。ただし555/777Gの短い振り分け自体は通常時にも存在するため、リセット専用恩恵とは扱わない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 本機の朝一専用ゲーム数モードは確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 比較に必要な主要リセット要素は内部状態振り分けとして扱う。

### stateAfterReset
- 設定変更時内部状態振り分け:
  - 設定1・3・5: 低確75.00% / 高確23.44% / 超高確1.56%。
  - 設定2・4・6: 低確50.00% / 高確49.61% / 超高確0.39%。
- HAZUSEの丸め表記は奇数75.0/23.4/1.6%、偶数50.0/49.6/0.4%で整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_NUMERIC

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 偶数設定は設定変更後、高確以上スタートが約50.00%（49.61%+0.39%）。
- 奇数設定は高確以上約25.00%（23.44%+1.56%）。
- 設定変更後も天井は555/777/999Gで再抽選され、短い天井が選択される可能性はあるが通常時と同一振り分けなので専用優遇とは扱わない。

### resetPenalties
- 設定変更により前日までの天井進捗は消失し、0から再計数となる。
- その他の設定変更専用冷遇は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時状態振り分けの違いは朝一挙動の統計的推測材料になり得るが、単発挙動での確定判別ではない。
- 555G/777G天井は通常時にも同一振り分けがあるため、そこから設定変更を確定できない。
- 本機固有の確定ガックン、ランプ、初期出目契約は検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_STATE_CLUE; UNVERIFIED_FOR_DETERMINISTIC_DETECTION

### numericResetData
- resetCeilingDistribution: 555G 1.56% / 777G 10.94% / 999G 87.50%。
- resetStateDistributionOdd: low75.00 / high23.44 / superHigh1.56%。
- resetStateDistributionEven: low50.00 / high49.61 / superHigh0.39%。
- resetHighOrBetterOdd: 25.00%。
- resetHighOrBetterEven: 50.00%。

## conflicts
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED for canonical performance core/reset values.
- すろぱちくえすと同一記事の設定6 ART初当たり `1/297.67` 1箇所は、同記事内別表およびHAZUSE/P-WORLDの `1/298.67` と一致しない。単独誤植と判断し、canonical 1/298.67を採用。値は平均しない。
- PiDEA Xの2017-06-18は「納品日予定」、HAZUSE/K-Navi/解析サイトの2017-06-19は「導入開始日」で定義差のためreleaseDate CONFLICTではない。

## missingFields
- direct independent stay-setting behavior: UNVERIFIED_AFTER_RESEARCH
- pure power OFF→ON counter/state behavior: UNVERIFIED_AFTER_RESEARCH
- deterministic gakkun/lamp/initial-reel reset detection: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. バルテック公式製品ページ — https://www.baltec.co.jp/product/nb1.html
2. PiDEA X 発表記事 — https://www.pidea.jp/articles/%E6%96%B0%E7%94%9F%E7%AC%AC1%E5%BC%BE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%20%E3%83%99%E3%83%B3%E3%83%BB%E3%83%88%E3%83%BC%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%90%E3%83%AB%E3%83%86%E3%83%83%E3%82%AF
3. HAZUSE 基本/型式/検定番号 — https://hazuse.com/machine/pachislot/7S0170/
4. HAZUSE 天井 — https://hazuse.com/machine/pachislot/7S0170/genre/207/
5. HAZUSE 設定推測/設定変更時状態 — https://hazuse.com/machine/pachislot/7S0170/genre/208/
6. HAZUSE ART/内部状態 — https://hazuse.com/machine/pachislot/7S0170/genre/209/
7. すろぱちくえすと — https://www.slopachi-quest.com/article/ben-toh/
8. ちょんぼりすた — https://chonborista.com/slot/baltec/38396/
9. P-WORLD — https://www.p-world.co.jp/machine/database/8382
10. K-Navi — https://p-kn.com/slot/2798/
