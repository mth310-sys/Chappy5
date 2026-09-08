# パチスロ 機動警察パトレイバー

machineName: パチスロ 機動警察パトレイバー
manufacturer: 北電子
releaseDate: 2016-04-04
recordNumber: 968
generation: 5号機
systemType: AT / ゲーム数上乗せ+セットストック / ガチャガチャンス
formalModelName: 機動警察パトレイバー／KH
certificationNumber: 5S1199
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 北電子公式製品ページで本機を確認。
- HAZUSE当時機種DBで **北電子 / 型式 機動警察パトレイバー／KH / 検定番号5S1199 / 導入開始日2016-04-04** を直接確認。
- P-Summa当時記事も2016-04-04全国導入と記載。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 99.2% |
| 3 | 100.7% |
| 4 | 104.2% |
| 5 | 107.4% |
| 6 | 110.1% |

- HAZUSEと当時解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
AT初当たり（ガチャ権利を獲得後すぐ使用する条件）:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/222.1（別解析丸め1/222） |
| 2 | 1/212.5（1/213） |
| 3 | 1/203.9（1/204） |
| 4 | 1/187.5（1/188） |
| 5 | 1/175.5（1/176） |
| 6 | 1/164.9（1/165） |

- HAZUSE精密値をcanonical。ちょんぼりすたの整数値は丸め差。
- ガチャ不使用時は別定義で 1/430 / 394 / 365 / 313 / 279 / 252。主要物差しには通常想定のガチャ使用系列を採用し、混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約37G/50枚**。
- 当時解析で確認。
reliability: ANALYSIS_HIGH

## netIncrease
- AT「バベルモード」純増: **約2.1枚/G**。
- 北電子系紹介、P-WORLD、パチマガスロマガで一致。
reliability: OFFICIAL_CONTEXT_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- AT「バベルモード」: **1セット50G+α**、純増約2.1枚/G。
- AT専用疑似ボーナス: **20G固定**、純増約2.1枚/G。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時内部状態は **低確 / 高確**。
- 本機に通常の「AT間天井」はなく、ガチャガチャンス権利を獲得する **ガチャ間天井** が存在。
- 公開振り分け: 98G 12.5% / 198G 6.3% / 298G 6.3% / 398G 6.3% / 498G 68.7% とする解析がある一方、本文・別資料では最大496G表記。表示/カウント定義差の可能性があるためCONFLICT保持。
- ガチャ権利は通常時約1/150で獲得し、最大32個ストック可能。通常時にガチャ使用するとバベル図柄揃い（約1/6）ならAT直撃、レア小役経由抽選も含む。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_PARTIAL_POWER_CYCLE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は内部状態を再抽選。
- 公開表では設定1・3・5は **低確50.0% / 高確50.0%**、設定2・4・6は **低確66.4% / 高確33.6%**。
- ガチャ間天井について、後年天井整理資料に **設定変更: リセット** と明記あり。ただし当時一次/高信頼解析で設定変更時のガチャ間カウンタ処理を直接表にした資料を今回固定できなかったため、信頼度を分離して保持。

### carryOverBehavior
- 据え置き時のガチャ間ゲーム数・ガチャストック・内部状態について、「据え置き」を独立条件で直接明記した当時資料を今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更側のRESET情報だけから据え置きCARRYOVERを自動推定しない。

### powerCycleBehavior
- 設定変更なしの純電源OFF→ONについて、ガチャ間ゲーム数・ガチャストック・低確/高確状態の引継ぎ/初期化を直接固定できる本機固有資料を今回確認できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 対象はAT間ではなく **ガチャ間カウンタ**。
- 設定変更: **RESET_SUPPORTED_BY_RETROSPECTIVE_CEILING_DATABASE**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset
- 通常AT間天井は **NOT_APPLICABLE**。ガチャ間天井のみ。
- 設定変更時に専用の短縮天井数値・専用振り分けがあるという確定資料は見つからず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 98/198/298/398/最大496〜498Gの通常ガチャ天井振り分けを、設定変更専用値としては扱わない。

### modeAfterReset
- 独立したゲーム数モード/朝一専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 低確/高確はstateAfterResetへ分離。

### stateAfterReset
設定変更時:
| 設定群 | 低確 | 高確 |
|---|---:|---:|
| 1・3・5 | 50.0% | 50.0% |
| 2・4・6 | 66.4% | 33.6% |

- HAZUSEとすろぱちくえすとで一致。
- 奇数設定は朝一高確スタート率50.0%、偶数設定は33.6%で、朝一挙動に直接影響する公開数値。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後は高確スタートが設定1・3・5で **50.0%**、設定2・4・6で **33.6%**。
- 高確はAT当選率に影響するため朝一の短期挙動に実用的な差がある。
- リセット専用短縮ガチャ天井など、これ以外の固定恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- ガチャ間カウンタが設定変更でRESETされる整理資料があるため、前日ガチャ間ハマリを把握していた場合はその進捗価値を失う可能性がある。
- ただし据え置き/純電断側の直接契約が未固定なので、宵越し成立条件まで断定しない。
- その他の設定変更固有不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有の **ガックン / 初期出目 / ランプ / ステージ** による設定変更確定契約は、表記揺れ・「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」等へ検索語を変えても安全に固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一の高確示唆ステージ挙動は設定変更時の高確率と関連しうるが、状態移行が通常時にも起こるため設定変更確定判別にはしない。

### numericResetData
- resetHighStateRate settings1/3/5: **50.0%**。
- resetHighStateRate settings2/4/6: **33.6%**。
- resetLowStateRate settings1/3/5: **50.0%**。
- resetLowStateRate settings2/4/6: **66.4%**。
- resetSpecificCeilingDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。

## missingFields
- 据え置き時のガチャ間カウンタ / ガチャストック / 内部状態の直接契約。
- 純電源OFF→ON時のガチャ間カウンタ / ガチャストック / 内部状態の直接契約。
- 本機固有の確定的設定変更判別（ガックン等）。

## conflicts
- **GACHA_CEILING_COUNT_PRESENTATION_CONFLICT_496_VS_498**: P-Summa・ちょんぼりすた本文等はガチャ間最大496G、ちょんぼりすた振り分け表は98/198/298/398/498G。平均せず双方保持。AT間天井ではなくガチャ権利獲得天井である点は一致。
- AT初当たりの小数値と整数値は丸め差であり重大CONFLICT扱いしない。

## sources
取得日: 2026-09-08

1. 北電子公式 — パチスロ 機動警察パトレイバー
   - https://www.kitadenshi.co.jp/slot/patlabor/
   - 製品本人性・ゲーム性・配当/リール情報。
   - reliability: OFFICIAL
2. HAZUSE — パチスロ 機動警察パトレイバー
   - https://hazuse.com/machine/pachislot/5S1199/
   - 型式KH、検定5S1199、導入2016-04-04、AT初当たり、機械割、設定変更時高確率。
   - reliability: PERIOD_DATABASE_HIGH
3. ちょんぼりすた — 機動警察パトレイバー スロット解析
   - https://chonborista.com/slot/kitadenshi/17087/
   - 導入日、機械割、AT初当たり、約37G/50枚、純増2.1枚/G、AT50G+α、ガチャ天井振り分け。
   - reliability: ANALYSIS_HIGH_PERIOD
4. パチマガスロマガ — パチスロ 機動警察パトレイバー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/99/a.php
   - AT機、ガチャシステム、純増約2.1枚/G、1セット50G+α。
   - reliability: ANALYSIS_HIGH_PERIOD
5. P-WORLD — パチスロ 機動警察パトレイバー
   - https://www.p-world.co.jp/machine/database/7971
   - 5号機AT、純増約2.1枚/G、1セット50G+α、ガチャ仕様。
   - reliability: DATABASE_HIGH
6. P-Summa — 2016-05-01記事
   - https://psumma.jp/pachislo/21724/
   - 2016-04-04全国導入、ガチャ間496G、AT間天井なし。
   - reliability: PERIOD_SECONDARY
7. すろぱちくえすと — 設定判別・高設定確定演出
   - https://www.slopachi-quest.com/article/patlabor-settei/
   - 設定変更時の低確/高確振り分けを直接表で掲載。
   - reliability: ANALYSIS_HIGH_PERIOD_DIRECT_TABLE
8. 2ndsight — 機種別天井一覧
   - https://2ndsight.xyz/1768
   - ガチャガチャンス間496G、設定変更「リセット」。当時直接表ではないため補助ソース扱い。
   - reliability: RETROSPECTIVE_ANALYSIS_SINGLE

## confidence
- identity/release/formalModel/certification: **OFFICIAL_PLUS_PERIOD_DATABASE_HIGH**
- performanceCore: **ANALYSIS_HIGH_MULTI_SOURCE**
- reset state numeric table: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- setting-change gacha counter reset: **RETROSPECTIVE_ANALYSIS_SINGLE**
- carryOver/powerCycle: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
