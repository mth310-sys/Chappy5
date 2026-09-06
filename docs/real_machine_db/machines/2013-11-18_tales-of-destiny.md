# パチスロ テイルズ オブ デスティニー

machineName: パチスロ テイルズ オブ デスティニー
aliases: テイルズ オブ デスティニー / テイルズオブデスティニー / Tales of Destiny
manufacturer: 北電子
releaseDate: 2013-11-18
releaseDatePrecision: exact_day
modelName: テイルズオブデスティニーN

generation: 5号機
systemType: ART / 擬似ボーナス / CZ / ゲーム数管理 / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- バンダイナムコゲームスと北電子の当時共同発表で、本作を「テイルズ オブ」シリーズ初のパチスロ化として2013年秋から全国ホール導入予定と確認。
- K-Naviでホール導入開始 **2013-11-18** を確認。
- 当時販売系資料では2013-11-17から納品予定とされ、ホール導入日の2013-11-18と整合する。
- 旧実機販売DBで型式名 **テイルズオブデスティニーN** を確認。
- confidence: OFFICIAL_PLUS_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 98.8% |
| 3 | 100.4% |
| 4 | 103.3% |
| 5 | 106.4% |
| 6 | 111.4% |

- P-WORLD / すろぱちくえすと / 後年解析整理で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 擬似ボーナス初当たり / ボーナス合算（初当たり定義）

| 設定 | 初当たり |
|---|---:|
| 1 | 1/194.5 |
| 2 | 1/184.0 |
| 3 | 1/177.1 |
| 4 | 1/163.1 |
| 5 | 1/148.7 |
| 6 | 1/134.2 |

- P-WORLDとすろぱちくえすとで一致。
- すろぱちくえすとには別指標として「ボーナス出現率」1/108.0〜1/71.2も掲載される。ストック連などを含む出現率と初当たりは定義が異なるため、同じ指標として混ぜない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 後年実機資料で **約33G/50枚**。
- パチマガスロマガには「1000円あたりのゲーム数」解析項目が現存するが、今回取得できた検索本文から数値部分を直接回収できなかった。
- 別系統の当時高信頼数値まで固定できないため **ANALYSIS_SINGLE_RETROSPECTIVE** として保持。
- confidence: ANALYSIS_SINGLE_RETROSPECTIVE

## netIncrease

- 擬似ボーナスARTの純増は **約2.2枚/G**。
- P-WORLD / K-Navi / 旧実機DBで整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- SUPER BIG BONUS: **100G**、後年解析で約220枚。
- BIG BONUS: **40〜100G**、後年解析で約90〜220枚。
- REGULAR BONUS: **20G**、後年解析で約20枚。
- ゲーム数はP-WORLD / K-Navi / 旧実機DBで一致。枚数は純増約2.2枚/Gとも概ね整合するが、直接の枚数表は後年単一解析のため概算扱い。
- confidence: ANALYSIS_HIGH_FOR_GAMES__ANALYSIS_SINGLE_FOR_APPROX_COINS

## modeSpecificMinimumData

- 通常時はゲーム数解除モード管理。
- モード別最大ゲーム数:
  - 通常A: **512G**
  - 通常B: **999G**
  - 天国A: **128G**
  - 天国B: **128G**
- 通常Aは同モードをループしやすく天国移行が低め、通常Bは通常Aへ降格せず天国Aへ移行しやすい。天国A/Bは50%で同モードループ、天国B転落後は天国A。
- ホール経営上のゾーン・天井特性を把握するための最低限のみ保存し、通常時の全モード移行テーブルは収集しない。
- confidence: ANALYSIS_HIGH

## ceiling

- 最大天井は **ボーナス間999G**。ただしモード別では通常A 512G、通常B 999G、天国A/B 128G。
- 999Gを全モード共通天井とは扱わない。
- 天井到達時は擬似ボーナス当選。
- confidence: ANALYSIS_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__CONTEMPORARY_RESET_PAGES_CONFIRMED__EXACT_RESET_CONTRACT_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- パチマガスロマガの当時機種ページに **「朝イチ・設定変更 設定変更時は大チャンス!」** という専用解析項目が現存する。
- K-Naviにも本機専用の **「設定変更後の挙動」** 項目が存在することを確認。
- しかし今回取得可能な現存本文・検索キャッシュから、その具体的なゲーム数リセット契約、モード振り分け、状態振り分けの本文を回収できなかった。
- 機種名・表記揺れ・型式名・北電子・設定変更・リセット・朝一・据え置き・宵越し・電源OFF ON・天井・モード・ガックンを組み替えて再探索したが、具体値を安全に固定できず **EXACT_CONTRACT_UNVERIFIED_AFTER_RESEARCH**。
- 「設定変更時は大チャンス」という当時解析の存在だけを根拠に、128G天国確定や特定モード振り分けを推測しない。

### carryOverBehavior

- 当時の実戦記事には宵越し/据え置きを前提に狙う事例があるが、これはプレイヤー側の実戦判断であり、本機固有の内部保持仕様を直接証明する資料ではない。
- 純据え置き時の天井G、モード、内部状態の保持契約は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない単純な電源OFF→ON時のゲーム数、天井、モード、内部状態の保持/初期化は、直接仕様を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きと電源OFF→ONを同義扱いしない。

### gameCounterReset

- setting change: **UNVERIFIED_AFTER_RESEARCH**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。
- 通常時のモード別天井512/999/128Gから、設定変更時のゲーム数挙動を逆算しない。

### ceilingAfterReset

- 通常時のモード別最大ゲーム数は通常A 512G / 通常B 999G / 天国A・B 128G。
- **設定変更専用の短縮天井値は NONE_CONFIRMED_AFTER_RESEARCH**。
- これは「短縮なし確定」ではなく、「専用数値を現存資料から確認できなかった」の意味。

### modeAfterReset

- 本機に内部モードと設定変更専用解析項目が存在することは確認できるが、設定変更後の具体モード再抽選契約・振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- 通常時のモード移行率を朝一へ流用しない。

### stateAfterReset

- 設定変更時の内部状態初期値/再抽選、据え置き時の状態保持は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 当時パチマガスロマガは設定変更を **「大チャンス」** と明示しており、朝一に何らかの有利要素を解析対象としていたことは確認できる。
- 具体的なモード率、当選率、短縮天井等は回収できないため **BENEFIT_EXISTS_IN_CONTEMPORARY_ANALYSIS__DETAIL_UNVERIFIED_AFTER_RESEARCH**。

### resetPenalties

- 本機固有の設定変更時不利要素・公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガックン、初期出目、液晶、ランプなどによる本機固有の高信頼な設定変更/据え置き判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時のみ適用される具体的な朝一モード振り分け、128G以内当選率、短縮天井、恩恵発生率等の公開数値は、十分な再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常モードの天国A/B 128Gを「設定変更後128G」と誤転記しない。

## missingFields

- baseGamesPer50: 約33G/50枚はANALYSIS_SINGLE_RETROSPECTIVE。
- 設定変更時のゲーム数リセット契約: UNVERIFIED_AFTER_RESEARCH。
- 設定変更後モード/状態の具体振り分け: UNVERIFIED_AFTER_RESEARCH。
- 純据え置き時の天井/モード/状態保持: UNVERIFIED_AFTER_RESEARCH。
- 単純電源OFF→ON時の天井/モード/状態: UNVERIFIED_AFTER_RESEARCH。
- 変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- P-WORLD等の初当たり1/194.5〜1/134.2と、すろぱちくえすとの「ボーナス出現率」1/108.0〜1/71.2は定義差として分離し、CONFLICT扱いにはしない。
- 最大999Gと通常A 512G / 天国128Gを混同しない。
- 天国A/Bの通常時128Gを設定変更専用値へ流用しない。
- 当時解析の「設定変更時は大チャンス」という見出しから具体値を推測しない。

## sources

取得日: 2026-09-06

- バンダイナムコゲームス / 北電子 当時共同プレスリリース: https://www.bandainamcoent.co.jp/corporate/press/release/59/pdf/20130827.pdf — シリーズ初パチスロ、北電子との共同開発、2013年秋全国導入予定。
- K-Navi: https://p-kn.com/slot/1928/ — ホール導入2013-11-18、純増約2.2枚/G、設定変更後の挙動/解除ゲーム数振り分け解析項目の存在。
- P-WORLD: https://www.p-world.co.jp/machine/database/7187 — 機械割、擬似ボーナス合算、純増約2.2枚/G、SUPER BIG 100G / BIG 40〜100G / REG 20G。
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/88/kitac_slot_88.php — 2013年11月、ゲーム数解除、朝イチ・設定変更「設定変更時は大チャンス!」専用解析項目。
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/tales-of-destiny/ — モード別天井512/999/128/128G、初当たり、機械割、モード特徴。
- 中一商事旧実機DB: https://www.nakaiti.com/html/sKitadenshi077.html — 型式名テイルズオブデスティニーN、ART、擬似ボーナスゲーム数、純増約2.2枚/G。
- CrankySeven後年解析: https://crankyseven.com/talesofdestiny-pc.htm — 擬似ボーナス概算獲得枚数、機械割系列。
- slotto実機資料PDF: https://slotto.com.tw/data/attachment/product/202210/geltrak8ct.pdf — 約33G/50枚、最大999G天井。
- スロスター当時記事: https://ameblo.jp/slostar/entry-11600931154.html — 2013-11-17納品予定。

## provenance

- collectedBy: Relay1
- collectedAt: 2026-09-06
- coreConfidence: HIGH_WITH_BASE_SINGLE_RETROSPECTIVE
- resetConfidence: PARTIAL__CONTEMPORARY_RESET_ANALYSIS_EXISTS_BUT_EXACT_BODY_UNRECOVERED
- resetQaSeparatedFromCoreStatus: true
