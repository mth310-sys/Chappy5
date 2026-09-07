# パチスロ銀と金2

machineName: パチスロ銀と金2
manufacturer: タイヨーエレック
releaseDate: 2015-11-16
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 941
generation: 5号機
systemType: A+ART / 周期シナリオ管理 / ART
formalModelName: パチスロ銀と金2ZA
inspectionNumber: 5S0539
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCH_EXHAUSTED_PARTIAL

## identity
- K-Naviはホール導入開始を2015-11-16と記載。
- PiDEAの2015-10-31機械選定記事は「納品11/16～」と記載し、実導入DBと整合する。
- P-WORLDで型式名「パチスロ銀と金2ZA」、検定番号「5S0539」、5号機ART機として確認。
- p-mediaの検定通過記事でも型式名「パチスロ銀と金2ZA」、メーカー「タイヨーエレック」を確認。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.5% |
| 3 | 101.1% |
| 4 | 103.6% |
| 5 | 106.5% |
| 6 | 110.2% |

- スロパチクエスト、pacnk、クマぱぱで一致。
- PiDEA当時機械選定記事でも設定1〜5の97.0/98.5/101.1/103.6/106.5%を確認。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_PERIOD_INDUSTRY

## initialHitBySetting
主要比較値としてART「ヘルエッジロード」初当たりを採用。BIGは全設定共通1/809.1。

| 設定 | BIG | ART初当たり |
|---:|---:|---:|
| 1 | 1/809.1 | 1/412.1 |
| 2 | 1/809.1 | 1/381.9 |
| 3 | 1/809.1 | 1/332.9 |
| 4 | 1/809.1 | 1/295.1 |
| 5 | 1/809.1 | 1/266.2 |
| 6 | 1/809.1 | 1/242.8 |

- K-Navi、スロパチクエスト、pacnkで一致。
- PiDEA当時記事は整数丸めでBIG 1/809、ART 1/412〜1/242と記載。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **34.73〜35.03G/50枚**。
- パチマガスロマガ公式攻略の解析値。スロパチクエスト約34.8G、クマぱぱ約35.0Gはこの範囲の丸め表現として整合。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PERIOD_OFFICIAL_MEDIA

## netIncrease
- ART「ヘルエッジロード」: **約1.6枚/G**。
- P-WORLD、パチマガスロマガ、スロパチクエストで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: **312枚**。
- ART「ヘルエッジロード」: **初期50G+α / 約1.6枚/G**。
- P-WORLD、PiDEA、スロパチクエスト、パチマガスロマガで照合。

## modeSpecificMinimumData
- 通常時は全7話の「マルチシナリオシステム」で1シナリオ=1周期。1周期は短縮なしで最大約100〜104G+α。
- 通常シナリオ3種 / 好機シナリオ2種 / 絶好機シナリオ2種。
- 天井: **ボーナス or ART間で12周期消化後、13周期目にART当選**。ゲーム数目安は約1060〜1100G。
- スロパチクエストは「周期シナリオ13周期到達（約1060G）」、man-soft天井一覧は「シナリオ13回目（約1100G）」、pacnkは「12周期消化後、13周期目」と表記。周期条件は一致し、ゲーム数は短縮抽選等による目安差として分離。
- スロパチクエストはBIG成立で周期天井がリセットされる実挙動報告を追記している。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCH_EXHAUSTED_PARTIAL_NO_DIRECT_RESET_CONTRACT_RECOVERED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機専用の「リセット・設定変更」解析ページが当時系解析DBに存在することは確認できる。
- ただし現存検索キャッシュではその個別本文が取得不能で、設定変更時の周期数、滞在シナリオ、内部ランク/状態をRESET/RESELECTと直接固定できる本文を復元できなかった。
- 型式「パチスロ銀と金2ZA」、メーカー「タイヨーエレック」、機種名表記揺れを用い、「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/周期/シナリオ/ガックン」を組み替えて、当時解析・旧DB・業界記事・後年回顧まで再探索したが追加直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 据え置き時の周期数・シナリオ・内部状態を直接比較した本機固有資料は今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機A+ARTや同メーカー機の挙動は流用しない。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONについて、周期数・シナリオ・内部状態を本機固有で直接記述した資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと純電断を自動同義扱いしない。

### gameCounterReset
- 通常時の周期天井は「12周期消化後→13周期目ART」で存在。
- BIG成立で周期天井がリセットされる実挙動報告は確認。
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常天井: **13周期目（約1060〜1100G目安）**。
- 設定変更専用の短縮天井、周期短縮、固定朝一天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 「リセット期待度☆☆☆☆☆」とする後年立ち回り整理は存在するが、具体的な内部契約の根拠には用いない。

### modeAfterReset
- 本機は通常シナリオ/好機シナリオ/絶好機シナリオの周期管理を持つ。
- 設定変更時の専用シナリオ振り分け、朝一専用モード、特定シナリオ固定を示す直接公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 通常時の周期内ランクA〜CやART中状態は存在するが、設定変更時の開始内部状態を直接固定できる資料は今回確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常時全ランク移行率等の実機完全再現向け詳細は収集対象外。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時だけに適用される短縮天井、専用高確、専用シナリオ、初当たり優遇など、朝一客AIへ入れられる確定的公開恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更時固有の不利要素として直接公開された数値・契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、液晶表示、ランプ、周期表示等で設定変更/据え置きを確定級に判別する直接資料は、検索語を変えて再探索しても固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 滞在シナリオや周期数は通常の立ち回り材料だが、設定変更確定契約とは扱わない。

### numericResetData
- resetDedicatedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitProbability: **NONE_CONFIRMED_AFTER_RESEARCH**
- settingChangeGameCounterContract: **UNVERIFIED_AFTER_RESEARCH**
- carryOverGameCounterContract: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleGameCounterContract: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- 天井のゲーム数目安は約1060G / 約1100G表記があるが、双方とも本体条件は「12周期消化後の13周期目」。周期短縮の有無で実ゲーム数が動くため、固定ゲーム数CONFLICTではなく目安表記差として保持。
- 2015年の事前内覧会系資料に納品11/1予定とする古い予定情報がある一方、後発のPiDEA機械選定記事は納品11/16〜、K-Navi/スロパチクエストはホール導入2015-11-16。実導入基準では2015-11-16を採用し、事前予定の変遷はreleaseDateの競合値として採用しない。

## missingFields
- settingChange cycle/scenario/state contract: `UNVERIFIED_AFTER_RESEARCH`
- carryOver cycle/scenario/state contract: `UNVERIFIED_AFTER_RESEARCH`
- purePowerCycle cycle/scenario/state contract: `UNVERIFIED_AFTER_RESEARCH`
- reset-specific numeric benefit/penalty: `NONE_CONFIRMED_AFTER_RESEARCH`
- machine-specific resetDetection: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. K-Navi — パチスロ銀と金2
   - https://p-kn.com/slot/2359/
   - ホール導入開始2015-11-16、BIG/ART確率、ゲーム性。
   - reliability: ANALYSIS_HIGH_PERIOD_DB
2. PiDEA — 三木流「パチスロ銀と金2の評価は？」（2015-10-31）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E9%8A%80%E3%81%A8%E9%87%912%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F%E3%80%8D%20
   - 納品11/16〜、A+ART、BIG312枚、BIG/ART確率、設定1〜5出玉率。
   - reliability: INDUSTRY_PERIOD
3. P-WORLD — パチスロ銀と金2
   - https://www.p-world.co.jp/machine/database/7850
   - 型式パチスロ銀と金2ZA、検定5S0539、5号機ART、BIG312枚、ART50G+α/約1.6枚G。
   - reliability: INDUSTRY_DB
4. p-media — タイヨーエレックから2機種検定通過
   - https://p-media.info/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%82%A8%E3%83%AC%E3%83%83%E3%82%AF%E3%81%8B%E3%82%892%E6%A9%9F%E7%A8%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%EF%BC%8F%E3%80%8C%E9%BE%8D%E3%81%8C%E5%A6%82%E3%81%8F/
   - 型式パチスロ銀と金2ZA、メーカー確認。
   - reliability: INDUSTRY_PERIOD
5. パチマガスロマガ公式 — パチスロ銀と金2
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/20/a.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/20/c.php
   - ART約1.6枚/G、BIG1/809.09、50枚34.73〜35.03Gほか。
   - reliability: ANALYSIS_HIGH_PERIOD
6. スロパチクエスト — パチスロ 銀と金2 天井・スペック
   - https://www.slopachi-quest.com/article/gin-kin2/
   - 導入2015-11-16、設定別機械割/ART、約34.8G/50枚、ART約1.6枚/G、13周期約1060G、BIGで周期天井リセットの実挙動追記。
   - reliability: ANALYSIS_HIGH_PERIOD
7. pacnk — パチスロ 銀と金2 設定判別ツール
   - https://pacnk.com/slot/tools/sh_kintogin2.html
   - 設定別ART初当たり/機械割、天井12周期消化後13周期目。
   - reliability: ANALYSIS_HIGH_SECONDARY
8. man-soft — リセット・設定変更一覧 / 天井一覧
   - https://smaslo.man-soft.com/slot-reset/
   - https://smaslo.man-soft.com/slot-tenzyou-itiran/
   - 本機専用リセット解析ページの存在、導入日、13周期目天井を確認。専用本文は現存キャッシュから復元不能だったため、具体reset契約の根拠には使用せず。
   - reliability: ANALYSIS_PERIOD_INDEX_ONLY_FOR_RESET
9. ちょんぼりすた — 銀と金2 スロット解析
   - https://chonborista.com/slot/taiyo-slot/13285/
   - 導入2015-11-16、12周期後約1060G、ART性能等。
   - reliability: ANALYSIS_HIGH_SECONDARY
10. クマぱぱ — パチスロ銀と金2 天井・スペック解析
   - https://xn--x9ja8p0go69l5jtgfm.com/gin-kin2-805
   - 導入2015-11-16、約35.0G/50枚、ART約1.6枚/G、リセット期待度整理。
   - reliability: ANALYSIS_SECONDARY_RETROSPECTIVE

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_PERIOD_INDUSTRY
- formalModelName/inspectionNumber: INDUSTRY_DB_HIGH
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PERIOD_SOURCE
- netIncrease/basicPayout: ANALYSIS_HIGH_MULTI_SOURCE
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: NONE_CONFIRMED_AFTER_RESEARCH
