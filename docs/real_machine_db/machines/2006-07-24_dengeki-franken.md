# 電撃フランケン

machineName: 電撃フランケン
manufacturer: エレコ / ユニバーサル系
releaseDate: 2006-07-24
generation: 5号機初期
systemType: A+RT / BIG + FRANKEN CHANCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.7% |
| 4 | 100.0% |
| 6 | 103.9% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

| 設定 | BIG | REG/FRANKEN CHANCE | 合成 |
|---|---:|---:|---:|
| 1 | 1/340 | 1/649 | 1/223 |
| 4 | 1/326 | 1/601 | 1/211 |
| 6 | 1/303 | 1/537 | 1/194 |

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

UNVERIFIED

## netIncrease

- RT「GHOST GAME」: 150G消化で約85枚増加（公式）
- 1Gあたり換算の目安は約0.57枚だが、本DBでは公式記載の150G/約85枚を正本値として保持し、計算値を元データには採用しない。

## basicPayout

- BIG CHANCE: 345枚を超える払い出しで終了（公式）
- FRANKEN CHANCE: 144枚を超える払い出しで終了（公式）
- 二次資料の実獲得目安: BIG約230枚、FRANKEN CHANCE約104枚

## modeSpecificMinimumData

- BIG終了後は必ずRT「GHOST GAME」へ突入
- GHOST GAMEは150G
- 150G消化時の増加目安は約85枚
- GHOST GAME中のボーナス当選率約50%とメーカー公式が説明
- パチマガスロマガはGHOST GAMEについて、ボーナス成立後も揃えない限り150Gを完走するタイプと説明。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `電撃フランケン / スーパーデラックス1 / エレコ` と `設定変更 / リセット / 朝一 / RT / GHOST GAME / ガックン` を組み替え、メーカー公式・当時解析系・旧DB・後年回顧を再探索したが、設定変更時にGHOST GAME残Gや内部RT状態をどう処理するかを直接示す本機固有資料は確認できず `UNVERIFIED`。
- 設定変更時の成立済みボーナス、初期出目、リール初動処理も `UNVERIFIED`。

carryOverBehavior:
- 据え置き時のGHOST GAME残G・内部RT状態について直接資料を確認できず `UNVERIFIED`。
- 通常時ゲーム数天井は後年解析DBで「非搭載」とされるため、通常時ハマリゲーム数の宵越し天井は `NOT_APPLICABLE`。

powerCycleBehavior:
- 電源OFF→ONのみでGHOST GAME残G・内部RT状態・成立済みボーナスをどう扱うかは、本機固有資料を確認できず `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井は `NOT_APPLICABLE`。
- BIG後RTは150G固定だが、これは通常時ハマリ天井ではなくRT継続ゲーム数として分離する。

ceilingAfterReset:
- 通常時ゲーム数天井非搭載のため、設定変更後の短縮天井は `NOT_APPLICABLE / NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、設定変更専用モード振り分けは `NONE_CONFIRMED`。

stateAfterReset:
- BIG後GHOST GAMEは150GのRT状態。
- 設定変更・据え置き・電源OFF→ON時のRT残G/内部RT状態の扱いは `UNVERIFIED`。
- SUPER GHOST GAME等の演出ステージを設定変更時にどう扱うかも `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（2006年の5号機初期。有利区間制度導入前）。

resetBenefits:
- 朝一RT、短縮天井、初当たり優遇、設定変更専用CZ等の本機固有恩恵は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更に伴う本機固有の不利要素は `NONE_CONFIRMED`。

resetDetection:
- `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 出目 / 液晶 / RT` を組み替えて再探索したが、本機固有のガックン・初期出目・液晶表示等による変更判別は `UNVERIFIED`。

numericResetData:
- 公開朝一専用数値: `NONE_CONFIRMED`
- リセット短縮天井G数: `NOT_APPLICABLE`
- 設定変更時モード振り分け: `NONE_CONFIRMED`
- 朝一RT当選率/恩恵率: `NONE_CONFIRMED`

## sources

取得日: 2026-09-01

1. ユニバーサルエンターテインメント公式 — 電撃フランケン
   - https://www.universal-777.com/product/slot/dengeki_franken/
   - BIG/FRANKEN CHANCE払い出し終了条件、BIG後GHOST GAME、150Gで約85枚増加、同時抽選方式、発売2006年7月。
   - reliability: OFFICIAL
2. みんスロ — 電撃フランケン
   - https://minslo.com/%E9%9B%BB%E6%92%83%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B1%E3%83%B3/
   - 導入日2006-07-24、設定1/4/6のBIG・REG・合成・出玉率、RT純増0.6枚/G、通常時ゲーム数天井非搭載。
   - reliability: ANALYSIS_SINGLE
3. パチマガスロマガ — 電撃フランケン 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/63/a.php
   - 5号機/3枚掛け、BIG後150P RT、ボーナス成立後も揃えない限りRTを完走する仕様、実獲得目安。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — 電撃フランケン
   - https://www.p-world.co.jp/machine/database/4267
   - 型式名スーパーデラックス1、BIG後GHOST GAME 150G、約85枚増加。
   - reliability: DATABASE

## missingFields

- 50枚あたりゲーム数
- 設定2/3/5の有無または非採用の正式確認
- 設定別数値の別ソース照合
- 設定変更時のGHOST GAME残G/内部RT状態
- 据え置き・電源OFF→ON時のRT状態処理
- 本機固有の設定変更判別（ガックン/初期出目等）
- 公開朝一専用数値

## conflicts

- 二次資料にはRT純増0.6枚/Gとの表記があるが、公式は「150Gで約85枚増加」と記載。丸め差の可能性があるため、物差し元データでは公式の150G/約85枚を優先する。
- ボーナス規定払い出し枚数には公式表記と一部解析表記の差があるため、既存性能コアは不用意に変更せず、公式値を優先して保持する。