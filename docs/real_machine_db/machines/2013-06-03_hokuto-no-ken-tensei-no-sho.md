# パチスロ北斗の拳 転生の章

machineName: パチスロ北斗の拳 転生の章
manufacturer: Sammy
releaseDate: 2013-06-03
releaseDatePrecision: exact_day
generation: 5号機
systemType: AT（規定あべし管理 / セット継続型）
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-06-03**。K-Navi、パチビー、HAZUSEで一致。
- 型式名: **パチスロ北斗の拳 転生の章ZA**。
- 検定番号: **3S0088**。
- 2026年導入のスマスロ「北斗の拳 転生の章2」とは別機種。resetBehavior・天井短縮等を混入しない。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.8% |
| 3 | 100.8% |
| 4 | 105.6% |
| 5 | 110.1% |
| 6 | 113.1% |

- HAZUSE、アタリ7、複数後年整理資料で一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## initialHitBySetting

AT「闘神演舞」初当たり:

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/355.7 |
| 2 | 1/341.6 |
| 3 | 1/320.9 |
| 4 | 1/279.3 |
| 5 | 1/251.1 |
| 6 | 1/237.6 |

- HAZUSE、アタリ7で全設定一致。
- 一部後年回顧資料に設定2～5で異なる数値系列があるため、主系列を当時DB一致値とし、競合欄へ保持。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH_WITH_RETROSPECTIVE_CONFLICT

## baseGamesPer50

- **約31G/50枚**。
- HAZUSEで全設定約31G。複数整理資料でも約31G/1k。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## netIncrease

- AT「闘神演舞」: **約2.8枚/G**。
- K-Navi、パチビー、HAZUSE、アタリ7で一致。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

## basicPayout

- AT「闘神演舞」: **1セット40G**。
- 40G消化後は保有する勝舞魂を使う「神拳勝舞」で継続抽選。残った勝舞魂は次セットへ持ち越し。
- 物差し用の基本性能は `40G × 約2.8枚/G` を保持し、実機完全再現用の勝舞魂・ATレベル全抽選は収集対象外。

## modeSpecificMinimumData

- 通常時は「あべしカウンタ」を蓄積し、規定あべし到達でAT当選。
- 内部モードは **通常A / 通常B / 天国 / 超天国**。
- 最大規定あべし:
  - 通常A: **1536あべし**
  - 通常B: **896あべし**（HAZUSEの一部ページに892表記あり。後述CONFLICT）
  - 天国: **128あべし**
  - 超天国: **32あべし**
- 規定あべしとは別に最大16Gの前兆を経由する場合がある。
- 「天破の刻」はあべし加算ゾーン。7/14/21G等で毎ゲームあべしを上乗せし、終了後は伝承モードに滞在する可能性がある。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_MODE_RESET_NUMERIC_CONFIRMED__SETTING_CHANGE_ABESHI_RESET_SUPPORTED__PURE_POWER_CYCLE_FULL_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更時は内部モードを再抽選**。K-Navi/HAZUSEに設定変更専用のモード移行表がある。
- 設定変更時のモード振り分けはAT終了時より通常Bが大幅に選択されやすく、朝一の主要恩恵となる。
- 当時～後年の旧機種攻略資料では、設定変更時以外は内部あべし数がリセットされない旨、およびリセット台専用ゾーン期待値が公開されている。これらを合わせ、**設定変更では前日規定あべし進捗をリセットして新規抽選へ移行する仕様**として記録する。
- 2026年スマスロ版の「1280あべし短縮」「50%高確」「6.3%伝承ショート」は別機種仕様のため混入禁止。

### carryOverBehavior

- K-Naviの実戦記事には、前日558あべし＋当日360あべしを「据え置き918あべし」、前日511あべし＋当日281あべしを「据え置き799あべし」として狙った実例が残る。
- 旧機種朝一攻略資料にも「設定変更時以外は内部的にあべし数はリセットされない」との記載があり、**純据え置きでは規定あべし進捗を引き継ぐ**証拠として採用。
- ただし据え置き時の内部状態・伝承モードまで含む全要素の完全保持契約は直接資料を固定できず、その部分は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 「北斗転生 / 転生の章 / ZA / Sammy」×「電源OFF ON / 電断 / 電源入切 / 朝一 / 据え置き」を組み替えて再探索したが、**設定変更を伴わない純電源OFF→ONのみ**について、あべし・モード・内部状態・伝承モードを列挙する本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き実戦例のみから純電断仕様まで外挿しない。

### gameCounterReset

- settingChange: **RESET_SUPPORTED_BY_OLD_MACHINE_STRATEGY_AND_RESET_ZONE_DATA**。
- carryOver: **CARRY_OVER_CONFIRMED_FOR_ABESHI_PROGRESS**。
- powerCycleOnly: **UNVERIFIED_AFTER_RESEARCH**。
- 本機は通常の「ゲーム数天井」より **規定あべし進捗**を主要カウンタとして扱う。

### ceilingAfterReset

- 設定変更専用の固定「短縮天井」は旧2013年機では確認できない。
- ただし設定変更時は内部モードを専用比率で再抽選するため、通常B以上の選択率が高く、結果として通常運用より浅い規定あべしが選ばれやすい。
- `fixedShortenedCeiling`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 2026年スマスロ版の1280あべし短縮は `NOT_THIS_MACHINE`。

### modeAfterReset

設定変更時内部モード振り分け:

| 設定 | 通常A | 通常B | 天国 | 超天国 |
|---|---:|---:|---:|---:|
| 1 | 33.0% | 55.0% | 10.0% | 2.0% |
| 2 | 33.0% | 55.0% | 10.0% | 2.0% |
| 3 | 33.0% | 55.0% | 10.0% | 2.0% |
| 4 | 30.5% | 55.0% | 12.5% | 2.0% |
| 5 | 28.0% | 55.0% | 15.0% | 2.0% |
| 6 | 28.0% | 55.0% | 15.0% | 2.0% |

- K-Navi、HAZUSEで一致。
- 朝一は全設定で通常B **55.0%**。設定4以上は天国移行率も12.5～15.0%に上昇。
- confidence: MULTI_SOURCE_ANALYSIS_HIGH

### stateAfterReset

- 通常時に低～高の内部状態が存在し、天破の刻抽選に影響することは確認。
- 2013年機について、設定変更時の内部状態初期振り分けを安全に固定できる直接資料は再探索後も見つからず `UNVERIFIED_AFTER_RESEARCH`。
- 2026年スマスロ版の「低確25/通常25/高確50%」は別機種なので使用禁止。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 最大の公開朝一恩恵は **設定変更時の通常B 55.0%**。
- 天国は設定1～3で10.0%、設定4で12.5%、設定5・6で15.0%、超天国は全設定2.0%。
- 当時攻略ではリセット台の **129～256あべし**が強いゾーンとして扱われ、設定1シミュレーションで129～256あべし開始の期待収支 **+2303円**という資料もある。ただしこれは打ち手期待値であり、実機内部抽選値とは分離して参考値扱い。
- 設定変更専用の固定短縮天井は確認なし。

### resetPenalties

- 設定変更により前日の規定あべし進捗を失うため、深い据え置き天井狙い価値は消える。
- その他の設定変更固有の不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一のあべし表示/前日最終あべしと当日の進行を利用した据え置き推測が実戦上行われていた。
- 一方、本機固有の **リールガックン / 初期出目 / ランプだけで設定変更を直接判別する契約**は再探索後も確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 「浅いゾーンでの前兆・当選」は設定変更時モード優遇の間接材料だが、単独では変更確定要素ではない。

### publicMorningNumbers

- settingChangeModeDistribution: **CONFIRMED**（上表）。
- settingChangeNormalBRate: **55.0% all settings**。
- settingChangeHeavenRate: **10.0 / 10.0 / 10.0 / 12.5 / 15.0 / 15.0%**。
- settingChangeSuperHeavenRate: **2.0% all settings**。
- fixedShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetZoneStrategyReference: **129～256あべしが強い**（攻略期待値資料。内部当選率ではない）。

### numericResetData

- settingChangeModeA: 33.0 / 33.0 / 33.0 / 30.5 / 28.0 / 28.0%
- settingChangeModeB: 55.0 / 55.0 / 55.0 / 55.0 / 55.0 / 55.0%
- settingChangeHeaven: 10.0 / 10.0 / 10.0 / 12.5 / 15.0 / 15.0%
- settingChangeSuperHeaven: 2.0% all settings
- normalAMax: 1536 abeshi
- normalBMax: 896 abeshi (892 notation conflict exists)
- heavenMax: 128 abeshi
- superHeavenMax: 32 abeshi
- carryOverAbeshi: CONFIRMED_FOR_SETTING_UNCHANGED_OPERATION
- powerCycleOnly: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: HIGH_FOR_MODE_DISTRIBUTION__MEDIUM_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER_ABESHI_CONTRACT__UNVERIFIED_FOR_PURE_POWER_CYCLE_AND_RESET_INTERNAL_STATE

## missingFields

- purePowerCycleFullContract: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeInternalStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- gakkunOrInitialReelDetection: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- normalBMaximumAbeshi:
  - K-Navi: **896あべし**。
  - HAZUSEの本文内に **892あべし**表記がある一方、一般的解析系列では896あべしが主流。
  - 平均せず `CONFLICT_896_VS_892_NOTATION`。本線比較値はK-Navi/一般解析系列の896。
- atInitialHitRetrospective:
  - HAZUSE / アタリ7: **355.7 / 341.6 / 320.9 / 279.3 / 251.1 / 237.6**。
  - 一部後年回顧: **355.8 / 339.4 / 320.1 / 288.7 / 263.1 / 237.5**。
  - 当時DB一致系列を本線とし、後年系列は `CONFLICT_RETROSPECTIVE_AT_INITIAL_HIT`。

## sources

retrievedAt: 2026-09-06

- K-Navi 機種トップ: https://p-kn.com/slot/1853/
  - 2013-06-03導入、AT40G、純増約2.8枚/G、あべしステム、朝一攻略項目、据え置き実戦例。
- K-Navi 内部モード移行抽選: https://p-kn.com/slot/1853/45151/
  - 設定変更時/AT当選時のモード振り分け。
- K-Navi 内部モードと最大あべし: https://p-kn.com/slot/1853/44796/
  - 通常A/B/天国/超天国、最大1536/896/128/32あべし。
- HAZUSE: https://hazuse.com/machine/pachislot/3S0088/
  - 型式名、検定番号、導入日、AT初当たり、約31G/50枚、機械割、AT40G・純増約2.8枚/G、モード移行、天井。
- パチビー: https://www.pachibee.jp/movies/index/9455
  - 2013-06-03導入、5号機AT、純増約2.8枚/G。
- アタリ7: https://www.atari7.com/slot/date1227864378.php
  - 2013-06-03、設定別AT初当たり、機械割、40G・2.8枚/G。
- 朝一台選び（旧機種回顧）: https://asaichidaierabi.seesaa.net/article/438878973.html
  - 設定変更時以外は内部あべし数がリセットされない旨、朝一表示0から前日進捗を推測する立ち回り。
- スロパチクエスト リセット期待値: https://www.slopachi-quest.com/article/379073091-html/
  - 2013-11-02公開、リセット台0～256/129～256あべしの期待収支シミュレーション。
- スロパチクエスト 天井・朝一まとめ: https://www.slopachi-quest.com/article/hokuto-tensei-kitaiti/
  - リセット台129～256あべし等の朝一ゾーン評価。
- ALL7 2013年5月: https://www.all7.jp/plans/index/2013/05
  - 05-20以降の5月末導入候補監査。
- K-Navi 2013年6月導入カレンダー: https://p-kn.com/calendar/201306/
  - 06-03のパチスロは北斗の拳 転生の章を掲載。

## researchNotes

- 表記揺れ: 「パチスロ北斗の拳 転生の章」「北斗の拳 転生の章」「北斗転生」「転生の章ZA」「3S0088」「Sammy」。
- reset再探索語: 設定変更、リセット、朝一、据え置き、宵越し、電源OFF ON、電断、天井、あべし、モード、通常B、伝承、内部状態、ガックン、初期出目。
- 2026年スマスロ「北斗の拳 転生の章2」が検索結果を強く汚染するため、2013/5号機/ZA/3S0088を併用し旧機種情報だけを採用。
- 実機完全再現に必要な全規定あべし振り分け、勝舞魂抽選、ATレベル詳細はミッション範囲外として未収集。
