machineName: デビル メイ クライ クロス
manufacturer: エンターライズ
releaseDate: 2016-08-01
recordNumber: 998
generation: 5号機 / 5.5号機期
systemType: A+ART / ボーナス+ART
formalModelName: デビルメイクライクロス/ZY
certificationNumber: 6S0161
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- K-Navi機種ページはホール導入開始を2016-08-01と明記。
- 2016-06-24のP-Summa発表会レポートも全国ホール導入予定2016-08-01と記録しており、当時資料同士で一致。
- P-WORLDは型式名 `デビルメイクライクロス/ZY`、検定番号 `6S0161` を掲載。
- 一方、スロ確.comには導入日2016-08-22、P-WORLDには導入開始月2016年07月という別表記がある。日付の具体性と当時導入予定資料の一致を優先し、canonicalは2016-08-01、差異はCONFLICTとして保持する。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 canonical |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.4% |
| 3 | 101.0% |
| 4 | 104.1% |
| 5 | 108.4% |
| 6 | 111.4% |
- ちょんぼりすた、スロ確.com等でほぼ一致。
- 一部解析に設定4 104.0%表記があるため、104.1%をcanonicalとし丸め/転記差候補のCONFLICTを保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT

## initialHitBySetting
### ART「DEVIL RUSH」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/357.2 |
| 2 | 1/338.1 |
| 3 | 1/305.3 |
| 4 | 1/261.6 |
| 5 | 1/225.1 |
| 6 | 1/194.4 |

### CZ「Devil Mission」初当たり
| 設定 | CZ初当たり |
|---:|---:|
| 1 | 1/129.0 |
| 2 | 1/129.0 |
| 3 | 1/120.2 |
| 4 | 1/105.5 |
| 5 | 1/90.6 |
| 6 | 1/80.2 |

### リアルボーナス
- BIG: 全設定1/1365.3。
- DEVIL ZONE(REG): 全設定1/2048.0。
- ボーナス合算: 約1/819.2。
reliability: INDUSTRY_DATABASE_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約41.3G/50枚。資料によって約41G表記。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「DEVIL RUSH」: 約1.7枚/G。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 約204枚。
- DEVIL ZONE / HYPER DEVIL ZONE: 約48枚。
- ART「DEVIL RUSH」: 初期50G+α。開始時のビューティーズジャッジで50〜300Gを決定。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ゲーム数天井: ボーナス&ART間999GでART確定。
- CZスルー天井: Devil Missionを6連続でART非当選にすると、次回CZのART抽選が優遇。
- 通常時は低確/高確の内部状態を持つ。高確はCZ当選率が優遇。
- 実機完全再現用の通常時全状態移行率、CZ内部抽選等は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時はゲーム数天井をRESET。
- CZスルー天井もRESET。
- 内部状態は再抽選。
- 朝一ステージはフォルトゥナ。

### carryOverBehavior
- 据え置き時は前日ゲーム数天井進捗、CZスルー回数、内部状態を基本的にCARRYOVERとして扱う。
- 据え置き単独の別挙動を示す本機固有資料は確認できず、純電源OFF→ON資料と整合する営業跨ぎ引継ぎ契約として整理。

### powerCycleBehavior
- 純電源OFF→ONではゲーム数天井を引き継ぐ。
- CZスルー天井を引き継ぐ。
- 内部状態を引き継ぐ。
- ステージは設定変更時と同じくフォルトゥナ開始のため、朝一ステージ単独では設定変更判別不可。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRYOVER**。
- 対象はボーナス&ART間999G天井進捗。

### ceilingAfterReset
- 設定変更後も最大天井は通常同様 **999G**。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- CZスルー回数天井は設定変更で0回相当へRESET。

### modeAfterReset
- 通常A/B/天国のようなゲーム数解除モードは本機の主要管理方式ではない。
- 設定変更専用の朝一ゲーム数モード/短縮モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- CZ高確率系の長期内部状態としてLHM等は存在するが、設定変更時のLHM直接振り分けは収集範囲内の公開資料で固定していない。

### stateAfterReset
- 設定変更時の低確/高確振り分け:
  - 設定1: 低確75.00% / 高確25.00%
  - 設定2: 低確68.75% / 高確31.25%
  - 設定3: 低確71.88% / 高確28.13%
  - 設定4: 低確65.63% / 高確34.38%
  - 設定5: 低確68.75% / 高確31.25%
  - 設定6: 低確62.50% / 高確37.50%
- 純電源OFF→ONは内部状態CARRYOVER。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後は25.00〜37.50%で高確スタート。高設定ほど概ね高確選択率が高い。
- 固定天井短縮や朝一専用CZ確定等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 前日から進んだ999G天井ゲーム数は設定変更で失われる。
- 前日のCZスルー回数も設定変更で失われるため、客側から見ると宵越し狙いには不利。

### resetDetection
- 設定変更/純電源OFF→ONの双方で朝一ステージがフォルトゥナのため、ステージ単独では判別不能。
- 本機固有の確定的ガックン、初期出目、ランプ表示等による変更判別は、`デビルメイクライクロス / DMC X / デビルメイクライクロス/ZY / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / 高確` で資料系統を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 宵越しゲーム数やCZスルー挙動は実用的な据え置き推測材料になり得るが、確定判別ではない。

### numericResetData
- 設定変更時高確スタート率: **25.00 / 31.25 / 28.13 / 34.38 / 31.25 / 37.50%**（設定1→6）。
- 設定変更時低確スタート率: **75.00 / 68.75 / 71.88 / 65.63 / 68.75 / 62.50%**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開朝一特定G以内専用当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- ホール導入日はK-Naviと2016年当時発表会レポートの2016-08-01をcanonical。8/22表記およびP-WORLDの2016年07月月次表記は削除せずCONFLICT保持。
- 型式名・検定番号はP-WORLDで直接確認できるためUNVERIFIEDではない。
- 設定変更/電源OFF→ON比較表は複数解析で一致し、ゲーム数天井・CZスルー天井・内部状態の主要契約をv0.7へ採用。
- ゆうべるの設定2高確率に67.8%という表記があるが、同ページの合計が99.1%となるため転記誤りの可能性が高い。スロ確.comおよび楽スロの68.75/31.25%をcanonicalとし、誤記候補としてCONFLICT注記する。

## sources
取得日: 2026-09-08

1. K-Navi — デビル メイ クライ クロス
   - https://p-kn.com/slot/2545/
   - ホール導入開始2016-08-01、エンターライズ、A+ART、ART約1.7枚/G、初期50G+α、BIG約204枚、DEVIL ZONE約48枚。
   - reliability: PERIOD_ANALYSIS_HIGH
2. P-Summa — 発表会レポ（2016-06-24）
   - https://psumma.jp/pachislo/23656/
   - 2016-08-01全国ホール導入予定、A+ART、純増約1.7枚/G、BIG約204枚、REG約48枚。
   - reliability: PERIOD_INDUSTRY_REPORT
3. グリーンべると / P-WORLD業界ニュース — クロス図柄がゲーム数の上乗せを呼ぶ（2016-06-16）
   - https://news.p-world.co.jp/articles/8455/greenbelt
   - フィールズがエンターライズ製新機種を発表、ART約1.7枚/G、初期50G+α。
   - reliability: INDUSTRY
4. P-WORLD — デビル メイ クライ クロス
   - https://www.p-world.co.jp/machine/database/8109
   - メーカー、型式デビルメイクライクロス/ZY、検定6S0161、BIG1/1365.3、REG1/2048、ART初当たり、獲得枚数、純増、5号機A+ART。
   - reliability: INDUSTRY_DATABASE
5. ちょんぼりすた — デビルメイクライクロス
   - https://chonborista.com/slot/enta-slot/20593/
   - 2016-08-01、約41G/50枚、ART初当たり、機械割97.3〜111.4%。
   - reliability: ANALYSIS_HIGH
6. スロットガーデン — デビルメイクライ クロス
   - https://xn--mckza4ard4ttb2d.com/devilmaycry-x
   - 2016-08-01、約41G/50枚、999G天井、CZ6スルー天井、ART初当たり、機械割。
   - reliability: PERIOD_ANALYSIS
7. スロ確.com — デビルメイクライクロス スペック・演出・解析
   - https://slotkaku.com/devil_may_cry_x
   - ART初当たり、CZ初当たり、機械割、約41.3G/50枚、999G天井、設定変更/電源OFFON比較、設定変更時低確/高確振り分け。導入日8/22表記はCONFLICTとして保持。
   - reliability: PERIOD_ANALYSIS_HIGH
8. 楽スロ — 朝一設定変更時の恩恵と見抜き方
   - https://rakuslo.com/dmclast-henkougo.html
   - 設定変更でゲーム天井・CZスルー天井RESET、内部状態再抽選、電源OFFONで各引継ぎ、設定変更時低確/高確振り分け。
   - reliability: ANALYSIS_SECONDARY
9. ゆうべる — デビルメイクライクロス 新台解析
   - https://yuberu-777.com/devilmaycry-x-kaiseki/
   - 朝一設定変更/電源OFFON挙動、999G天井、CZ6スルー、CZ初当たり等。設定2状態振り分けに67.8%表記があり他資料とCONFLICT。
   - reliability: ANALYSIS_SECONDARY_WITH_TYPO_CONFLICT
10. パチスロ解析ガイド — デビル メイ クライ クロス
   - https://pachislot-guide.net/2016/devil-may-cry-x/
   - BIG/REG確率と獲得枚数、ART/CZ概要、999G天井。
   - reliability: RETROSPECTIVE_ANALYSIS

## missingFields
- 設定変更専用固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 本機固有の確定的設定変更判別: NONE_CONFIRMED_AFTER_RESEARCH
- 公開朝一特定G以内専用当選率: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `CONFLICT_RELEASE_DATE_2016_08_01_VS_2016_08_22_VS_2016_07_MONTH`: K-Naviと2016年当時発表会資料は8/1、スロ確.comは8/22、P-WORLDは導入開始月2016年07。具体的当時資料が一致する8/1をcanonical。
- `CONFLICT_SETTING4_PAYOUT_104_1_VS_104_0`: 主流解析104.1%、一部解析104.0%。平均せず104.1%をcanonical。
- `CONFLICT_RESET_STATE_SETTING2_68_75_31_25_VS_67_8_31_3`: スロ確.com/楽スロは68.75/31.25%、ゆうべるは67.8/31.3%。合計不整合を考慮し前者をcanonical、後者を転記誤り候補として保持。

## QA note
- 新規時点からresetBehavior v0.7を収録。
- No.997セブンスビートに続く2016-08-01群の未処理先頭としてNo.998登録。
- 次候補は `パチスロ ルパン三世 消されたルパン`。同日導入のメーカー/型式/検定番号/性能コア/resetBehaviorを再固定してから08/01群を最終監査する。
