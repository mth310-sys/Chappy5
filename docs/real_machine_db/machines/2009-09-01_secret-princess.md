# シークレット・プリンセス

machineName: シークレット・プリンセス
manufacturer: IGTジャパン
formalModelName: シークレットプリンセスT
inspectionNumber: 9S0279
releaseDate: CONFLICT_2009-09-01_KNAVI_VS_2009-09-07_CONTEMPORARY_INTRODUCTION_LIST（P-WORLDは2009年09月の月精度）
generation: 5号機
systemType: ボーナス非搭載 / ARTメイン / CZ / パンク回避
coreStatus: PARTIAL_BASE_GAMES_PER_50_AND_CEILING_NUMERIC_UNVERIFIED_WITH_RELEASE_DAY_CONFLICT

## payoutRateBySetting

P-WORLD掲載値を主表とする。当時系スペック記事のヒロイン別シミュレート値は微差があるため別定義としてconflictsに保持。

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 99.3% |
| 3 | 101.4% |
| 4 | 104.4% |
| 5 | 107.7% |
| 6 | 110.3% |

confidence: DATABASE_HIGH_WITH_CONTEMPORARY_STYLE_CROSSCHECK

## initialHitBySetting

ART「デートタイム」初当たり確率。

| 設定 | デートタイム |
|---:|---:|
| 1 | 1/401.96 |
| 2 | 1/380.49 |
| 3 | 1/357.93 |
| 4 | 1/324.81 |
| 5 | 1/290.89 |
| 6 | 1/271.76 |

confidence: ANALYSIS_SINGLE_WITH_SYSTEM_CROSSCHECK

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

- P-WORLDは「コイン持ち良し」と分類するが、設定別または共通の直接比較可能な50枚/1000円ゲーム数を今回の再探索では確定できず。
- 小役確率からの逆算や後年の一般値で補間しない。

## netIncrease

ART「デートタイム」:
- 約+2.1枚/G
- スペシャルリプレイ成立時は50〜200GのART+αが確定
- ART開始時に3ヒロインから選択し、継続特性が異なる
- 規定ゲーム数消化後に連続演出へ移行し、失敗するまでARTがループする構造

confidence: DATABASE_HIGH_MULTI_SOURCE

## basicPayout

- ボーナス非搭載。
- 出玉は主にART「デートタイム」で増加。

## modeSpecificMinimumData

- 通常時は特訓絵柄からCZ「特訓ステージ」へ移行し、ハート絵柄/ミッションを経由してARTを目指す。
- ART中は選択ヒロインにより継続ゲーム数特性が変化。
- P-WORLDは「天井」搭載機として分類するが、今回の再探索では天井の具体的ゲーム数・発動条件を確定できず。
- 実機完全再現用のヒロイン別詳細内部抽選・ストック振り分けは本DBの必須範囲外。

## resetBehavior — v0.7

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更時の天井カウンタ、CZ/ART内部状態、ARTストック/継続状態、内部モードの初期化・保持について本機固有の直接資料を回収できず。後年AT/ART機の一般論から補完しない。

carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時に前日天井ゲーム数・CZ/ART状態・内部ストックを保持するか、直接資料を確定できず。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井ゲーム数、CZ/ART状態、台枠点滅等の表示状態の復帰仕様を直接確定できず。P-WORLD掲示板には電源ON/OFFに関する質問が残るが、確定解析値として採用しない。

gameCounterReset: UNVERIFIED_AFTER_RESEARCH。P-WORLDは天井搭載を示すが、そのゲーム数・カウンタ条件と設定変更時clear/retainを直接確定できず。

ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更後の短縮天井/再抽選天井/朝一専用天井の公開数値を確認できず。

modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時のCZ/状態管理は存在するが、設定変更時の開始状態・朝一モード振り分けを直接確定できず。

stateAfterReset: UNVERIFIED_AFTER_RESEARCH。CZ/ART/ストック状態の設定変更時処理を本機固有資料で確定できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更専用のART当選優遇、短縮天井、CZ優遇、公開朝一恩恵率は今回確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更によるART/CZ/ストック消滅等は直接資料未回収のため断定しない。

resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、台枠/液晶、CZ挙動等による設定変更/据え置き判別の本機固有確定資料を確認できず。

numericResetData:
  publishedMorningModeDistribution: UNVERIFIED_AFTER_RESEARCH
  publishedResetHitRate: UNVERIFIED_AFTER_RESEARCH
  resetSpecificCeiling: UNVERIFIED_AFTER_RESEARCH
  resetBenefitRate: NONE_CONFIRMED
  normalArtInitialHitSetting1: 1/401.96
  normalArtInitialHitSetting6: 1/271.76

resetBehaviorQA: PARTIAL_WITH_SYSTEM_STRUCTURE_CONFIRMED_RESET_AND_CEILING_NUMERICS_UNVERIFIED_AFTER_RESEARCH

resetBehaviorResearchNote:
- `シークレットプリンセス / シークレット・プリンセス / シープリ / IGT / シークレットプリンセスT` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ART / CZ / ストック / ガックン / 50枚 / 1000円` を組み替えて再探索。
- P-WORLD、K-Navi、2009年当時導入一覧、当時系スペック記事、旧実機DBを横断。
- ART純増約2.1枚/G、50〜200G+α、設定別ART初当たり、設定別機械割、天井搭載という構造までは確認。天井数値・設定変更/据え置き/単純電断処理・公開朝一数値は確定できず推測しない。

## sources

取得日: 2026-09-03

1. K-Navi「シークレット・プリンセス」 — https://p-kn.com/slot/1017/ — IGTジャパン、ホール導入開始2009-09-01、ボーナス非搭載ART機、ART約+2.1枚/G、CZ→ミッション→ART構造 — reliability: OLD_ANALYSIS_HIGH
2. P-WORLD「シークレットプリンセス」 — https://www.p-world.co.jp/machine/database/5639 — 5号機ART/BR非搭載/CZ/パンク回避/天井、機械割97.5〜110.3%、ART約+2.1枚/G、50〜200G+α、型式シークレットプリンセスT、検定9S0279 — reliability: DATABASE_HIGH
3. pachinko’s blog「IGT Japan パチスロ シークレットプリンセスの筺体＆スペック＆情報」2009-09-01 — https://pachinko.hatenablog.jp/entry/2009/09/secretPrincess — ヒロイン別出玉率、設定別デートタイム初当たり1/401.96〜1/271.76、ART約2.1枚/G — reliability: CONTEMPORARY_STYLE_ANALYSIS_SINGLE
4. 最新5号機パチスロ無料攻略解析情報ブログ「最新スロットホール導入日掲載」2009-08-31 — https://slotkaiseki777.blog102.fc2.com/blog-entry-547.html — シークレットプリンセスを2009-09-07導入として掲載 — reliability: CONTEMPORARY_INTRODUCTION_LIST_SINGLE
5. 中一商事「IGT シークレットプリンセス」 — https://www.nakaiti.com/html/igt003.html — 型式シークレットプリンセスT、ART、5号機の補助照合 — reliability: RETROSPECTIVE_MACHINE_DB

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- exact ceiling games / activation condition: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior for ceiling/CZ/ART/stock: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- published morning reset numeric values: UNVERIFIED_AFTER_RESEARCH

## conflicts

- releaseDate: K-Naviは2009-09-01ホール導入開始、2009-08-31時点の当時導入一覧は2009-09-07。P-WORLDは2009年09月の月精度。平均・一方への丸めを行わずCONFLICT保持。
- payoutRate: P-WORLDは97.5/99.3/101.4/104.4/107.7/110.3%。当時系スペック記事では選択ヒロイン別シミュレートとして設定1約97.39〜97.56%、設定6約110.10〜110.29%など微差がある。定義差として保持し、主表はP-WORLD掲載値。
