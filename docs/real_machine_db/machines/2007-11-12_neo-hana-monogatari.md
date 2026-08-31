# NEO花物語

machineName: NEO花物語
manufacturer: オーイズミ / オーイズミNEO
releaseDate: 2007-11-12
generation: 5号機
systemType: A+RT / 完全告知
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.0% |
| 3 | 100.5% |
| 4 | 103.5% |
| 5 | 105.9% |
| 6 | 108.5% |

信頼度: RETROSPECTIVE_SINGLE

## initialHitBySetting

| 設定 | 青7BIG | 赤7BIG | REG | 合成 |
|---|---:|---:|---:|---:|
| 1 | 1/1260.3 | 1/771.1 | 1/474.9 | 1/238.3 |
| 2 | 1/1236.5 | 1/744.7 | 1/474.9 | 1/234.9 |
| 3 | 1/1213.6 | 1/720.2 | 1/474.9 | 1/231.6 |
| 4 | 1/1191.6 | 1/689.9 | 1/458.3 | 1/223.7 |
| 5 | 1/1129.9 | 1/642.5 | 1/458.3 | 1/216.3 |
| 6 | 1/1040.3 | 1/601.3 | 1/458.3 | 1/208.1 |

- P-WORLDの合成確率丸め値（1/238, 1/235, 1/232, 1/224, 1/216, 1/208）と整合。
- 個別ボーナス確率は回顧資料1系統のため、別資料照合待ち。

信頼度: MIXED / PARTIAL_CROSSCHECK

## baseGamesPer50

UNVERIFIED

- `NEO花物語 50枚 / 千円 / コイン持ち / ベース / 通常時` を当時業界・解析・旧DB・後年回顧で再探索したが、設定別比較に使える値を確定できず。

## netIncrease

- RT「NEO花タイム」: 約+0.3枚/G（当時業界記事・後年回顧が一致）
- RT中の特殊リプレイから「SUPER NEO花タイム」へ移行し、150Gへ延長する仕様が確認できる。

信頼度: HIGH_FOR_RT

## basicPayout

- Premium BIG（青7）: 350枚を超える払い出しで終了 + RT111G（P-WORLD）
- BIG（赤7）: 350枚を超える払い出しで終了 + RT77G（P-WORLD）
- REG: 253枚を超える払い出しで終了 + RT33G（P-WORLD）
- 当時実戦系資料ではBIG純増約252枚、REG純増約182枚との記載があるため、規定払い出しと実獲得目安を混同しない。

## modeSpecificMinimumData

- 完全告知A+RT機。
- 全ボーナス終了後にRT「NEO花タイム」へ突入。
- 青7BIG後111G、赤7BIG後77G、REG後33G。
- RT純増約+0.3枚/G。
- RT中の特殊リプレイ成立で150Gの「SUPER NEO花タイム」へ移行する仕様が回顧資料で確認できる。
- 当時業界記事でも「RT中の150ゲーム昇格」「1Gあたり純増約0.3枚」を確認。

## resetBehavior

settingChangeBehavior:
- `NEO花物語 / オーイズミNEO / 設定変更 / リセット / 朝一 / RT / NEO花タイム / SUPER NEO花タイム` を組み替え、当時業界記事・旧DB・後年回顧を再探索したが、設定変更時のRT残G、内部RT状態、成立済みボーナスの扱いを直接示す本機固有資料は確認できず `UNVERIFIED`。

carryOverBehavior:
- 据え置き時のNEO花タイム/SUPER NEO花タイム残G・内部RT状態について直接資料を確認できず `UNVERIFIED`。
- 通常時ゲーム数天井は公開資料で確認できず、天井を存在すると推定しない。`NONE_CONFIRMED`。

powerCycleBehavior:
- 電源OFF→ONのみでRT残G・内部RT状態・告知/成立済みボーナスをどう扱うかは `UNVERIFIED`。

gameCounterReset:
- 通常時ハマリゲーム数天井の公開値は `NONE_CONFIRMED`。
- 111G/77G/33G/150Gはボーナス後RTの継続ゲーム数であり、通常時天井とは分離する。

ceilingAfterReset:
- リセット短縮天井、朝一専用天井の公開値は `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、設定変更専用モード振り分けは `NONE_CONFIRMED`。

stateAfterReset:
- ボーナス後RT状態は公開されているが、設定変更・据え置き・電源OFF→ON時にRT状態をどう扱うかは `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（2007年5号機。有利区間制度導入前）。

resetBenefits:
- 朝一RT、短縮天井、初当たり優遇などの本機固有リセット恩恵は `NONE_CONFIRMED`。

resetPenalties:
- 設定変更に伴う本機固有の不利要素は `NONE_CONFIRMED`。

resetDetection:
- ガックン、初期出目、パトライト/ランプ、液晶等を使った本機固有の変更判別資料は確認できず `UNVERIFIED`。

numericResetData:
- 公開朝一専用数値: `NONE_CONFIRMED`
- リセット短縮天井G数: `NONE_CONFIRMED`
- 設定変更時モード振り分け: `NONE_CONFIRMED`
- 朝一RT当選率/恩恵率: `NONE_CONFIRMED`

## sources

取得日: 2026-09-01

1. Pマンズ / プレイグラフ転載 — オーイズミネオ第3弾は完全告知＋RT（2007-10-16）
   - https://p-mans.blogspot.com/2007/10/
   - 2007-10-10発表展示会、全大当たり終了後RT、RT純増約0.3枚/G、150G昇格。
   - reliability: CONTEMPORARY_INDUSTRY
2. パチビー — 2007年11月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2007-11
   - 2007-11-12導入機種としてNEO花物語を掲載。
   - reliability: INDUSTRY_DATABASE
3. P-WORLD — NEO花物語
   - https://www.p-world.co.jp/machine/database/4959
   - 合成確率の設定別丸め値、青7BIG+RT111G、赤7BIG+RT77G、REG+RT33G、払い出し終了条件。
   - reliability: DATABASE
4. ヲタの記憶箱 — NEO花物語（2026-06-06）
   - https://kiokubako.blog.shinobi.jp/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/neo%E8%8A%B1%E7%89%A9%E8%AA%9E
   - 設定別個別ボーナス確率・機械割、RTゲーム数、RT純増約0.3枚/G、SUPER NEO花タイム150G。
   - reliability: RETROSPECTIVE_SECONDARY
5. 5号機クロニクル — オーイズミ5号機一覧
   - https://5goki.com/oizumi
   - 2007年オーイズミ機としてNEO花物語を確認。
   - reliability: RETROSPECTIVE_DATABASE

## missingFields

- 50枚あたりゲーム数
- 設定別個別ボーナス確率・機械割の当時解析系による第二ソース照合
- 設定変更時のRT残G/内部RT状態
- 据え置き・電源OFF→ON時のRT状態処理
- 本機固有の変更判別（ガックン/初期出目/ランプ）
- 公開朝一専用数値

## conflicts

- 現時点で明確な数値競合は確認していない。
- 導入日はパチビーの2007-11-12を採用。当時10月記事は発表展示会日であり、導入日と混同しない。