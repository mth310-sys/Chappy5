# バリバリ伝説

machineName: バリバリ伝説
manufacturer: 平和
releaseDate: 2007-09-09
generation: 5号機初期
systemType: ボーナス+RT / 完走型RT
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | パチマガスロマガ（シミュレート） | 5号機クロニクル |
|---|---:|---:|
| 1 | 96.95% | 97.2% |
| 2 | 98.97% | 99.0% |
| 3 | 100.69% | 100.9% |
| 4 | 103.23% | 103.5% |
| 5 | 104.57% | 104.5% |
| 6 | 107.32% | 107.7% |

資料間に小差があるため平均せず両系列を保持する。設定6などは丸めだけでは断定しにくいため `CONFLICT` 扱い。

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ掲載値:

| 設定 | 赤7 BIG（バリバリBIG） | 青7 BIG | REG | 全ボーナス合成 |
|---|---:|---:|---:|---:|
| 1 | 1/2427.26 | 1/407.06 | 1/601.25 | 1/220.66 |
| 2 | 1/2427.26 | 1/381.02 | 1/601.25 | 1/212.78 |
| 3 | 1/2427.26 | 1/366.13 | 1/579.96 | 1/205.44 |
| 4 | 1/2427.26 | 1/346.75 | 1/532.81 | 1/193.32 |
| 5 | 1/2427.26 | 1/339.56 | 1/512.00 | 1/188.32 |
| 6 | 1/2427.26 | 1/315.08 | 1/492.75 | 1/178.09 |

後年スペック整理資料でも同値系列を確認。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガの1000円あたりゲーム数:

| 設定 | 50枚あたりゲーム数 |
|---|---:|
| 1 | 37.68G |
| 2 | 38.07G |
| 3 | 38.47G |
| 4 | 38.86G |
| 5 | 39.30G |
| 6 | 39.72G |

信頼度: ANALYSIS_HIGH

## netIncrease

- 完走型RT「バリバリチャンス」を搭載。
- 赤7のバリバリBIG終了後は120G RTへ突入。
- 通常BIG/REG後は32Gのチャンスゾーンへ入り、特殊リプレイ「リプ・ベル・リプ」成立でRTへ突入する。
- グリーンべると当時記事はRT120Gで純増約70枚としており、平均すると約+0.58枚/G相当だが、本DBではこの平均換算を主値にしない。
- パチマガスロマガ解析ではRT中1Gあたり増加枚数を設定別 `+0.74 / +0.73 / +0.75 / +0.76 / +0.77 / +0.77枚` と掲載。
- 定義/測定条件差があるため、業界発表の「120Gで約70枚」と解析値の純増/Gを両方保持する。

信頼度: CONFLICT / INDUSTRY + ANALYSIS_HIGH

## basicPayout

2007年当時のグリーンべると記事:
- バリバリBIG: 純増234枚 + 120G RT
- BIG: 純増234枚
- REG: 純増120枚

K-NaviではバリバリBIG/BIGは345枚超払い出しで終了、REGは132枚超払い出しで終了と掲載。払い出し終了条件と純増枚数は定義を分けて保持する。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- 赤7バリバリBIG後は120G完走型RT「バリバリチャンス」。
- 通常BIG/REG後は32G CZ。特殊リプレイ成立でRTへ移行。
- 当時業界記事ではRT中のボーナス引き戻し率42%。
- 通常時ゲーム数天井は確認されない。
- 有利区間制度前の5号機初期。

## releaseDateEvidence

- グリーンべると2007-08-10記事で新機種リリースを報じ、「納品は最短で9月9日の予定」と明記。
- P-WORLD/5号機クロニクル等も2007年9月導入で整合。
- 本DBでは具体日を取得できた業界一次資料に従い `2007-09-09` を採用する。

## resetBehavior

settingChangeBehavior: UNVERIFIED。本機固有の設定変更時に通常/CZ/RT状態をどう処理するか直接確定できる資料を確認できず。
carryOverBehavior: UNVERIFIED。据え置き時のCZ/RT残Gおよび内部状態の扱いを直接確定できず。
powerCycleBehavior: UNVERIFIED。電源OFF→ONのみの場合のCZ/RT残G・内部状態処理を直接確定できず。
gameCounterReset: NOT_APPLICABLE / NONE_CONFIRMED。通常時ゲーム数天井は確認されない。
ceilingAfterReset: NONE_CONFIRMED。設定変更時の短縮天井・変更天井は確認されない。
modeAfterReset: NONE_CONFIRMED。朝一専用モードや設定変更時専用モード振り分けは確認されない。
stateAfterReset: UNVERIFIED。CZ32G/RT120G中の設定変更・据え置き・電断時の残状態処理は確定できず。
advantageousSectionReset: NOT_APPLICABLE。5号機初期で有利区間制度前。
resetBenefits: NONE_CONFIRMED。公開された朝一専用恩恵・設定変更専用優遇は確認されない。
resetPenalties: NONE_CONFIRMED。公開された設定変更専用不利要素は確認されない。
resetDetection: UNVERIFIED。本機固有のガックン、初期出目、液晶/ランプ状態等による設定変更判別を直接裏付ける資料を確認できず。
numericResetData: NONE_CONFIRMED。設定変更時モード振り分け、朝一当選率、短縮天井等の公開数値は確認されない。

### resetBehavior QA note

`バリバリ伝説 / 平和 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / RT / バリバリチャンス / バリバリチャレンジ / 32G / 天井` を組み替え、当時業界記事、パチマガスロマガ、K-Navi、P-WORLD、5号機クロニクル、後年スペック保存資料まで再探索した。RT/CZ構造と天井非搭載相当までは確認できる一方、本機固有の設定変更・据え置き・電断時状態処理と変更判別は直接資料を確定できず推測しない。

## sources

取得日: 2026-09-01

1. P-WORLD / グリーンべると — 80年代のあの伝説漫画がパチスロで復活（2007-08-10）
   - https://news.p-world.co.jp/articles/2334/greenbelt
   - 最短2007-09-09納品、3種ボーナス純増、120G RT、通常BIG/REG後32G CZ、特殊リプレイ契機、RT中引き戻し率42%
   - reliability: INDUSTRY
2. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/34/h.php
   - 設定別赤7BIG/青7BIG/REG/合算、シミュレート機械割
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 小役/1000円G数/RT純増
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/34/c.php
   - 50枚あたり37.68〜39.72G、RT純増+0.73〜+0.77枚/G
   - reliability: ANALYSIS_HIGH
4. K-Navi — バリバリ伝説
   - https://p-kn.com/slot/632/
   - 払い出し終了条件、120G完走型RT、通常BIG/REG後32G内の特殊リプレイ契機
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — 平和＆オリンピア5号機一覧
   - https://5goki.com/heiwa-olympia
   - 2007年9月導入、機械割97.2〜107.7%
   - reliability: ANALYSIS_SINGLE
6. pachinko’s blog — 平和「パチスロ バリバリ伝説」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/09/baribari-densetsu
   - 2007年9月、設定別ボーナス確率の照合
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更時のCZ/RT状態処理
- 据え置き時のCZ/RT残G・内部状態引継ぎ
- 電源OFF→ONのみのCZ/RT状態処理
- 本機固有の設定変更判別挙動
- 公開朝一数値

## conflicts

1. 機械割:
   - パチマガスロマガ（シミュレート）: 96.95 / 98.97 / 100.69 / 103.23 / 104.57 / 107.32%
   - 5号機クロニクル: 97.2 / 99.0 / 100.9 / 103.5 / 104.5 / 107.7%
   - 平均せず両系列保持。
2. RT増加性能:
   - 2007年グリーンべると: 120Gで約70枚増（平均約0.58枚/G相当）
   - パチマガスロマガ: +0.73〜+0.77枚/G
   - 定義/測定条件差の可能性があるため平均化しない。
3. 後年5号機クロニクルの本文には「BIG約250枚+50G RT」等、当時業界記事/K-Naviの120G RT仕様と整合しない記述があるため、ゲーム性説明は当時資料を優先し後年本文は採用しない。
