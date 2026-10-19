# 小野真弓のかわいい日本昔話

machineName: 小野真弓のかわいい日本昔話
manufacturer: オーイズミ
releaseDate: 2006-11-06
generation: 5号機初期
systemType: ボーナス主体（BIG / MIDDLE / REG）
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_QA

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.05% |
| 2 | 99.12% |
| 3 | 101.22% |
| 4 | 104.01% |
| 5 | 106.87% |
| 6 | 109.20% |

信頼度: ANALYSIS_HIGH（pacnk精密値、5号機クロニクル/HAZUSE丸め値で整合）

## initialHitBySetting

### BIG
| 設定 | BIG |
|---|---:|
| 1 | 1/348.6 |
| 2 | 1/334.4 |
| 3 | 1/324.4 |
| 4 | 1/312.1 |
| 5 | 1/300.6 |
| 6 | 1/292.6 |

### MIDDLE
| 設定 | MIDDLE |
|---|---:|
| 1 | 1/780.2 |
| 2 | 1/728.2 |
| 3 | 1/655.4 |
| 4 | 1/585.1 |
| 5 | 1/546.1 |
| 6 | 1/528.5 |

### REG
全設定 1/936.2

信頼度: ANALYSIS_HIGH（HAZUSE + pacnk BIG照合）

## baseGamesPer50

UNVERIFIED。

「小野真弓 / 日本昔話 / 日本昔話5」「1000円 / 50枚 / ベース / コイン持ち」で再探索したが、今回比較可能な数値を確定できず。

## netIncrease

増加型RTは物差し必須性能として確認せず。BIG/MIDDLE終了後に10Gの「花咲かGAME」へ移行する資料あり。

## basicPayout

- BIG: 346枚超払い出し終了、平均約275枚
- MIDDLE: 254枚以上払い出しまたはREG成立で終了、平均約200枚
- REG: 12Gまたは8回入賞で終了、平均約100枚

信頼度: ANALYSIS_HIGH（当時業界記事 + HAZUSEで基本獲得目安整合）

## modeSpecificMinimumData

- BIG / MIDDLE / REGの3種ボーナス
- BIG/MIDDLE後10G「花咲かGAME」
- 型式名: 日本昔話5

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機名・型式名を用いて「設定変更 / 朝一 / リセット / 天井 / 花咲かGAME」を再探索したが、本機固有の設定変更時内部状態・花咲かGAME残G・演出状態処理を直接記した資料を確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の内部状態・花咲かGAME関連状態の持越しを直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時の内部状態、液晶、花咲かGAME残G等を直接確定できず。

gameCounterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。HAZUSE当時解析・業界記事・後年解析DBを再探索したが、通常時のゲーム数天井・規定G数当選を確認できず。非存在を仕様書で断定できる直接資料までは回収できないため、NOT_APPLICABLEへ強制せずNONE_CONFIRMED_AFTER_RESEARCHとする。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。通常天井および設定変更後専用短縮天井の公開数値を確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に長期ゲーム数モードがあることは確認できず、設定変更時の演出状態等も直接資料なし。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。BIG/MIDDLE後10Gの「花咲かGAME」は確認済みだが、設定変更時にその残G/状態をどう扱うかは未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用天井短縮、朝一ボーナス/RT確定などの本機固有恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。本機固有の設定変更時不利挙動を確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶状態など本機固有の設定変更判別要素を直接確定できず。

numericResetData:
- 通常ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更後短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時状態振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 変更判別公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**
- BIG/MIDDLE後「花咲かGAME」: **10G（通常性能として確認、reset時処理はUNVERIFIED）**

resetBehaviorConfidence: **PARTIAL; NO GAME-COUNT CEILING/RESET BENEFIT CONFIRMED AFTER MULTI-QUERY RESEARCH, SETTING-CHANGE/CARRYOVER/POWER-CYCLE/DETECTION REMAIN UNVERIFIED**

## sources

取得日: 2026-08-31（性能コア） / 2026-09-04（resetBehavior QA）

1. グリーンべると — オーイズミ、5号機第1弾は注目の「セパレート筐体」
   - https://web-greenbelt.jp/00004886/
   - 発表、納品11月6日開始、BIG約275枚/MIDDLE約200枚/REG約100枚
   - reliability: INDUSTRY
2. HAZUSE — 小野真弓のかわいい日本昔話 解析・機種情報
   - https://hazuse.com/i/data/onomayuminokawaiinihonmukashibanashi/top.htm
   - 設定別BIG/MIDDLE/REG、機械割、払い出し/平均獲得枚数、BIG/MIDDLE後10G花咲かGAME
   - reliability: CONTEMPORARY_ANALYSIS
3. pacnk — 小野真弓のかわいい日本昔話 設定判別ツール
   - https://pacnk.com/slot/tools/sh_onomayuminokayinihonmukashibanashi.html
   - BIG、機械割精密値。reset QA時にも天井/設定変更関連記載を再確認
   - reliability: RETROSPECTIVE_ANALYSIS
4. 5号機クロニクル — オーイズミ5号機全機種一覧
   - https://5goki.com/oizumi
   - 2006/11、設定別機械割
   - reliability: RETROSPECTIVE_ANALYSIS

## missingFields

- 50枚あたりゲーム数 / ベース
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- 花咲かGAME中の設定変更/電源断処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

機械割は97.05/99.12/101.22/104.01/106.87/109.20%と、丸め資料97.0/99.1/101.2/104.0/106.8〜106.9/109.2%があるが、実質的に丸め差と判断しCONFLICT扱いしない。
