# ハイスクールD×D

machineName: ハイスクールD×D
manufacturer: KPE
releaseDate: 2015-11-02
releaseDatePrecision: exact_hall_start_official_and_analysis
recordNumber: 931
generation: 5号機
systemType: ART / 周期CZ・疑似ボーナス経由 / セット継続型+ゲーム数上乗せ型ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity
- KONAMI/KPE公式アーカイブで2015年11月稼働の5号機ARTとして確認。
- KONAMI公式ブログは **2015-11-02より全国ホール稼働開始** と明記。K-Navi、当時解析でも同日一致。
- 2022年「ハイスクールD×D2 ハーレム王に俺はなる」、パチンコ版等とは分離し、それらの有利区間/設定変更情報を初代へ流用しない。
- 型式名・検定番号は「ハイスクールD×D / ハイスクールDD / KPE / 高砂電器産業 / 型式 / 検定 / 検定通過 / 5S」を組み替えて再探索したが、初代5号機固有で安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.1% |
| 3 | 99.9% |
| 4 | 104.1% |
| 5 | 107.1% |
| 6 | 112.7% |

- K-Navi、ちょんぼりすた、すろぱちくえすと、pacnkで系列一致。

## initialHitBySetting
主要初当たりとしてST+ART初当たりを採用。

| 設定 | ST+ART初当たり |
|---:|---:|
| 1 | 1/324.8 |
| 2 | 1/312.7 |
| 3 | 1/298.2 |
| 4 | 1/265.8 |
| 5 | 1/246.1 |
| 6 | 1/223.4 |

- すろぱちくえすとは 1/324.7 / 312.6 / 298.2 / 265.8 / 246.0 / 223.4 と表記。差は丸め精度として保持し、別系列CONFLICTとはしない。
- K-NaviのCZ突入率: 1/109.1 / 108.0 / 108.7 / 105.6 / 106.2 / 105.4（初当たり構造の補助値）。

## baseGamesPer50
- canonical: **約48G/50枚**。
- ちょんぼりすた、すろぱちくえすとで一致。

## netIncrease
- ART「ディアボロスドライブ」: **約2.0枚/G**。
- 上乗せ型ART「エクステンドドライブ」も約2.0枚/G。

## basicPayout
- 疑似ボーナス「サービスタイム」: **30G**、ART期待度約50%。
- ART「ディアボロスドライブ」: **1セット40G+α**、継続期待度約70%。
- ART「エクステンドドライブ」: ゲーム数上乗せ型。固定基本枚数ではない。
- 実機完全再現用のART継続/上乗せ詳細抽選は収集対象外。

## modeSpecificMinimumData
- 通常時は **50～190Gの周期**でCZを抽選。
- 天井: **純ハズレ573回成立（実ゲーム数目安 約1000G）**。
- 天井到達後は次回周期CZで疑似ボーナス「サービスタイム」当選が確定する整理をcanonicalとする。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_MULTI_QUERY_RESEARCH
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **設定変更後の最初の周期のみ専用周期G数振り分け**が適用されることを当時解析で確認。
- 1周期目のCZ振り分けは設定変更後だけでなくサービスタイム/ディアボロスドライブ終了後にも共通する「1周期目」テーブルで、通常の2周期目以降より上位CZが優遇される。
- 純ハズレ573回の天井カウンタを設定変更時にRESETするかについて、初代固有の直接比較資料を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。後継D×D2の「天井RESET」を流用しない。

### carryOverBehavior
- 設定変更後の専用1周期目では出現しない周期G数帯があり、朝一第1周期の実G数から**据え置き濃厚**と推測できる当時解析を確認。
- ただし、据え置き時の純ハズレ天井カウンタ・CZ内部状態・周期進捗を個別に完全引継ぎすると明示した初代固有直接表は固定できず、各項目は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- **UNVERIFIED_AFTER_RESEARCH**。
- 「ハイスクールD×D / ハイスクールDD / KPE / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 宵越し / ハズレ573回 / ガックン」で再探索したが、初代5号機で純電源OFF→ONだけを設定変更・据え置きと直接比較する資料を固定できなかった。
- 2022年D×D2の電源OFF→ON引継ぎ表は別世代・別機種のため採用しない。

### gameCounterReset
- settingChange: **UNVERIFIED_AFTER_RESEARCH**（純ハズレ573回天井カウンタの直接資料不足）。
- carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- purePowerCycle: **UNVERIFIED_AFTER_RESEARCH**。
- reset後第1周期G数は専用テーブルへ再抽選されることのみDIRECT確認。

### ceilingAfterReset
- normalCeilingTrigger: **純ハズレ573回成立（約1000G目安）**。
- resetSpecificShortenedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更で573回カウンタがRESET/CARRYOVERのどちらかは初代固有直接資料不足のため `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一設定変更後の **第1周期G数は専用振り分けへ再抽選**。
- 通常時の全モード移行テーブルに相当する詳細は収集対象外。
- 別個の長期「モード」概念について設定変更/据え置き比較を直接固定できる資料は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- **UNVERIFIED_AFTER_RESEARCH**。
- CZ内部ランクや高確/ステージ状態を設定変更・据え置き・電断でどう処理するかの初代固有直接比較資料を固定できず、通常時の1周期目CZ振り分けとは分離する。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後の最初の周期は専用G数テーブル。
- 第1周期のCZは通常の2周期目以降より上位CZが選ばれやすい。設定別でCZ2/CZ3合算は、設定1 **28%**、2 **22%**、3 **37%**、4 **28%**、5 **46%**、6 **46%**（これは設定変更専用ではなく「1周期目」共通テーブル）。
- 設定変更専用の短縮天井、AT直撃保証等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更固有の公開不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更後第1周期の専用周期G数テーブルを利用した変更判別が可能。
- 当時解析では第1周期が **90G以下 / 111～120G / 131～140G / 171～180G** のいずれかなら **据え置き濃厚** とされる。
- リールガックン等の初代固有確定判別は、検索語を変えた再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
設定変更後・最初の周期の基準G数振り分け:
- 90G: **10%**
- 120G: **20%**
- 140G: **20%**
- 150G: **10%**
- 160G: **20%**
- 180G: **20%**
- 基準G数決定後、**+1～10Gを均等振り分け**して実周期G数を決定。
- ちょんぼりすた掲載表の「120G | 20G」は文脈上の単位誤記とみられるが、推測で原表を書き換えず、同表の合計構造と記事本文に基づき本レコードでは **20%** として扱い、原資料表記注記を残す。

第1周期CZ振り分け（設定変更後/ST後/DD後共通の1周期目）:
| 設定 | CZ1 | CZ2 | CZ3 |
|---:|---:|---:|---:|
| 1 | 72% | 18% | 10% |
| 2 | 78% | 15% | 7% |
| 3 | 63% | 24% | 13% |
| 4 | 72% | 18% | 10% |
| 5 | 54% | 30% | 16% |
| 6 | 54% | 30% | 16% |

## conflicts
- `INITIAL_HIT_ROUNDING`: K-Navi 1/324.8・312.7・298.2・265.8・246.1・223.4 vs すろぱちくえすと 1/324.7・312.6・298.2・265.8・246.0・223.4。丸め精度差として双方注記、K-Navi系列をcanonical。
- `RESET_FIRST_CYCLE_SOURCE_TYPO`: ちょんぼりすたの朝一周期表で120G行が「20G」表記。周辺行・百分率合計・説明文から割合欄の誤植と判断できるが、原資料表記を注記して透明性を保持。

## missingFields
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeCeilingCounterReset: `UNVERIFIED_AFTER_RESEARCH`
- carryOverCeilingCounter: `UNVERIFIED_AFTER_RESEARCH`
- purePowerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- reelGakkun: `NONE_CONFIRMED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. KONAMIアミューズメント — 機種アーカイブ 2015年 ハイスクールD×D
   - https://www.konami.com/amusement/psm/archive/ps/2015/haremking/
   - 2015年11月、5号機ART、KPEを公式確認。reliability: OFFICIAL
2. KONAMI/KPE公式ブログ — KPE・TAKASAGOマンスリートピックス
   - https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_151124.html
   - 2015-11-02より全国ホール稼働開始を明記。reliability: OFFICIAL
3. グリーンべると — 専用筐体を装い“最胸”アニメがパチスロに登場
   - https://web-greenbelt.jp/00008063/
   - 2015-09-08発表会、KPE製、2種類のART構成を確認。reliability: INDUSTRY
4. K-Navi — ハイスクールD×D
   - https://p-kn.com/slot/2352/
   - 2015-11-02導入、CZ/ST+ART初当たり、機械割、ART40G+α・純増2.0枚/G。reliability: ANALYSIS_HIGH
5. ちょんぼりすた — ハイスクールD×D スロット解析
   - https://chonborista.com/slot/kpe-slot/11948/
   - 機械割、初当たり、約48G/50枚、天井、朝一設定変更後第1周期専用振り分け、据え置き判別、第1周期CZ振り分け。reliability: ANALYSIS_HIGH
6. パチマガスロマガ — ハイスクールD×D
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/40/kpe_slot_40.php
   - KPE/2015年11月、朝イチ・設定変更解析メニュー、周期/CZ解析の存在を照合。reliability: ANALYSIS_HIGH
7. パチマガスロマガ — チャンスゾーン抽選
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/40/02-1.php
   - 設定変更/ST/DD終了時を「1周期目」と定義し、設定別CZ1～3振り分けを掲載。reliability: ANALYSIS_HIGH
8. すろぱちくえすと — ハイスクールD×D 天井・スペック解析
   - https://www.slopachi-quest.com/article/highschool-dd/
   - 約48G/50枚、純増2.0枚/G、機械割/ART初当たり、純ハズレ573回天井を相互照合。reliability: ANALYSIS_HIGH
9. P-WORLD — ハイスクールD×D
   - https://www.p-world.co.jp/machine/database/7846
   - KPE、5号機ART、純増2.0枚/G、ST30G、DD40G+αを照合。reliability: HIGH
10. pacnk — ハイスクールD×D 設定判別
   - https://pacnk.com/slot/tools/sh_highschooldd.html
   - 機械割・主要初当たり系列を後年DBで照合。reliability: ANALYSIS_SECONDARY

## confidence
- identityManufacturer: OFFICIAL
- exactReleaseDate: OFFICIAL_EXACT
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE
- initialHit: ANALYSIS_HIGH_MULTI_SOURCE_ROUNDING_VARIANCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease: OFFICIAL_CONTEXT_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- resetFirstCycleDedicatedDistribution: ANALYSIS_HIGH_DIRECT_PERIOD_SOURCE
- resetFirstCycleCzDistribution: ANALYSIS_HIGH_DIRECT
- resetDetectionByFirstCycleGames: ANALYSIS_HIGH_SINGLE_DIRECT
- settingChangeCeilingCounterReset: UNVERIFIED_AFTER_RESEARCH
- carryOverCeilingCounter: UNVERIFIED_AFTER_RESEARCH
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
