machineName: パチスロ ビッグドリーム in ロストアイランド2
manufacturer: タイヨーエレック（Sammy系）
releaseDate: 2016-06-06
recordNumber: 984
generation: 5号機
systemType: ノーマル / リアルボーナス連チャン型（リノタイプ）
formalModelName: ロストアイランド2/ZS
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- タイヨーエレック製。業界一次記事は2016-04-14内覧会、2016-06-05納品開始予定を報道。
- パチビー、スロ確、2-9伝説、当時解析複数は2016-06-06導入で一致。
- K-Naviはホール導入開始2016-06-20とするため、地域展開/集計基準差として `CONFLICT_RELEASE_DATE_2016_06_06_VS_2016_06_20` を保持。6/5納品開始予定を伴う業界記事が6/6実導入開始を支持するため、本DB時系列canonicalは2016-06-06。
- 型式 `ロストアイランド2/ZS` は中古実機流通、当時業界ブログ、ゴト事例資料で複数確認。
- 検定番号は「ロストアイランド2 ZS / タイヨーエレック / 検定 / 5S」等へ検索語と資料系統を変えて再探索したが直接固定できず推測しない。
reliability: INDUSTRY_ANALYSIS_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.4% |
| 3 | 100.8% |
| 4 | 104.2% |
| 5 | 107.1% |
| 6 | 110.0% |

- スロ確、2-9伝説、当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
ボーナス初当たり:
| 設定 | 初当たり |
|---:|---:|
| 1 | 1/568.9 |
| 2 | 1/543.4 |
| 3 | 1/520.1 |
| 4 | 1/340.6 |
| 5 | 1/444.0 |
| 6 | 1/275.2 |

- グリーンべるとがレンジ1/568.9〜1/275.2を公表、スロ確・2-9伝説が全設定表を掲載。
- K-Naviのみ設定5を1/440.0とするため `CONFLICT_INITIAL_HIT_SETTING5_1_444_0_VS_1_440_0`。平均しない。
- 連チャン込みボーナス出現率は設定1→6: 1/63.8 / 61.3 / 59.0 / 55.0 / 51.4 / 48.2。初当たりとは定義を分離。
reliability: INDUSTRY_ANALYSIS_HIGH_WITH_MINOR_CONFLICT

## baseGamesPer50
- **約28G/50枚**。
- 期待値見える化、スロ確、複数当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- **NOT_APPLICABLE_AS_AT_ART_NET_INCREASE**。
- リアルボーナスのみで増やすノーマルタイプ。解析資料に「純増約4.5枚/G」等の表記もあるが、AT/ART純増の共通物差しとは定義が異なるため本項へ混ぜない。

## basicPayout
- HYPERハイビスカスBONUS（BIG）: **約250枚**。
- ハイビスカスBONUS（REG）: **約100枚**。
- グリーンべると業界記事、P-WORLD、複数解析で一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常モード / 天国モード（ボーナス高確率状態）を持つ。
- 天国モード中ボーナス合算: **約1/7.0**。
- 天国モードの実質連チャン率: 設定1〜3 90.0% / 設定4 85.9% / 設定5 90.0% / 設定6 85.0%。
- 通常ゲーム数天井: **非搭載**。
- 通常時の全内部抽選・全移行率はミッション範囲外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時も **内部状態を引き継ぐ**。
- ボーナス高確率状態（天国モード）で閉店していた場合、設定変更だけではその状態を消去できない挙動として当時解析が一致。
- 液晶は昼ステージへ。
reliability: PERIOD_ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時は当然ながら内部状態CARRYOVER。
- 天井ゲーム数は非搭載。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみ: **内部状態CARRYOVER**。
- 液晶は昼ステージへ。ただしボーナス中は表示も引き継ぎ、確定画面ならBETまたは次レバーONで確定画面へ戻ると必勝本が明記。
reliability: PERIOD_ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- 通常ゲーム数天井: **NOT_APPLICABLE / CEILING_NONE**。
- 設定変更・据え置き・純電源OFF→ONで天井ゲーム数の比較対象なし。

### ceilingAfterReset
- **NOT_APPLICABLE / CEILING_NONE**。
- リセット専用短縮天井なし。

### modeAfterReset
- 通常/天国という主要内部状態は **CARRYOVER**。
- 設定変更専用モード再抽選・朝一専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 設定変更: **CARRYOVER**。
- 据え置き: **CARRYOVER**。
- 電源OFF→ON: **CARRYOVER**。
- RAMクリア時の天国開始説は当時資料に存在するが不明/推測表記が混在するため、設定変更挙動と混同せず `UNVERIFIED_RAM_CLEAR_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更そのものが新たな天国を付与するという確定恩恵は確認できない。
- ただし前日が天国状態で終了していれば、設定変更でも状態を引き継ぐため朝一に高期待状態が残る可能性がある。ホール側は回して通常状態へ落とす等の対策が可能。
- 天井短縮等の固定リセット恩恵はなし。

### resetPenalties
- 設定変更固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更・電源OFF→ONの双方で液晶が昼ステージへ移るため、朝一ステージだけでは判別不能。
- ガックン、初期出目、ランプ等の本機固有確定契約は「ガックン/設定変更/朝一/リセット/据え置き」へ検索語を変えて再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日天国状態の持越しは設定変更/据え置き双方で起こり得るため、それ自体は変更判別にならない。

### numericResetData
- 設定変更専用モード振り分け、短縮天井、朝一当選率などの公開確定数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天国中性能（通常性能値）: ボーナス約1/7、連チャン率設定1〜3 90.0% / 4 85.9% / 5 90.0% / 6 85.0%。これはリセット専用数値ではないため区別して保持。

## dataQualityNotes
- releaseDateは6/6と6/20で競合。2016-04-15グリーンべるとが6/5納品開始予定を報道し、複数当時解析・パチビーが6/6導入のためcanonicalは6/6。
- 設定5初当たりは1/444.0と1/440.0の軽微競合。
- 「純増4〜4.5枚/G」はリアルボーナス消化を含む表現で、AT/ART純増とは別定義としてperformance coreへ混ぜない。
- RAMクリア後の天国開始は当時記事で「不明」「?」表記を伴うためUNVERIFIED。設定変更=RAMクリアとは扱わない。

## sources
取得日: 2026-09-08

1. グリーンべると — 約90％でリアルボーナスがループ！
   - https://web-greenbelt.jp/00008588/
   - 2016-04-14内覧会、BIG約250枚/REG約100枚、初当たり1/568.9〜1/275.2、6/5納品開始予定。
   - reliability: INDUSTRY
2. パチビー — パチスロ ビッグドリーム in ロストアイランド2
   - https://www.pachibee.jp/movies/index/12686
   - 導入日2016-06-06、5号機ノーマルタイプ。
   - reliability: PERIOD_DATABASE
3. スロ確.com — 基本情報・スペック・機械割解析
   - https://slotkaku.com/lostisland2
   - 6/6導入、全設定機械割/初当たり、28G/50枚、天井なし、設定変更/電源OFF→ONとも状態引継ぎ・昼ステージ。
   - reliability: PERIOD_ANALYSIS_HIGH
4. パチ＆スロ必勝本 — 天井&設定変更
   - https://p.hisshobon.jp/machine/2771/1/58094
   - 天井なし、設定変更=状態引継ぎ/昼、電源OFF→ON=状態引継ぎ/昼、ボーナス中表示契約。
   - reliability: PERIOD_ANALYSIS_HIGH
5. パチ＆スロ必勝本 — システム概要
   - https://p.hisshobon.jp/machine/2771/1/58095
   - 通常/天国モード、天国中1/7、設定1転落率1/62.8、BIG/REG枚数。
   - reliability: PERIOD_ANALYSIS_HIGH
6. 期待値見える化 — ビッグドリームinロストアイランド2
   - https://slotjin.com/slot/bigdream/
   - 6/6導入、機械割、28G/50枚、設定変更でも状態引継ぎ、朝一の高確持越し。
   - reliability: PERIOD_ANALYSIS_HIGH
7. 2-9伝説 — ビッグドリーム in ロストアイランド2 スペック解析
   - https://2-9densetsu.com/bigdream/
   - 全設定機械割、初当たり、連チャン込出現率、BIG/REG枚数、天井なし。
   - reliability: PERIOD_ANALYSIS
8. P-WORLD — パチスロ ビッグドリームinロストアイランド2
   - https://www.p-world.co.jp/machine/database/8032
   - タイヨーエレック、5号機ノーマル、初当たり、BIG/REG枚数。
   - reliability: DATABASE
9. K-Navi — パチスロ ビッグドリーム in ロストアイランド2
   - https://p-kn.com/slot/2493/
   - 6/20導入表記、設定5初当たり1/440.0。releaseDate/setting5初当たりCONFLICT根拠。
   - reliability: PERIOD_DATABASE_CONFLICT
10. 中一商事 Yahoo!実機販売 — ロストアイランド2/ZS
   - https://store.shopping.yahoo.co.jp/nakaiticom/692.html
   - 型式ロストアイランド2/ZS、性能値補助確認。
   - reliability: USED_MACHINE_DATABASE
11. 真パチスロ備忘録 — リノ系台の連チャンモード狙い目まとめ
   - https://sin-surobi.com/reno/16630/
   - RAMクリア挙動を「不明（天国?）」として記録。推測値を確定値へ昇格させない根拠。
   - reliability: PERIOD_EMPIRICAL_SINGLE

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- RAMクリア固有状態: UNVERIFIED_AFTER_RESEARCH
- setting-change-specific numeric reset distribution: NONE_CONFIRMED_AFTER_RESEARCH
- machine-specific confirmed gakkun/initial-reel/lamp reset detection: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- CONFLICT_RELEASE_DATE_2016_06_06_VS_2016_06_20
- CONFLICT_INITIAL_HIT_SETTING5_1_444_0_VS_1_440_0
