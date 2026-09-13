# スマスロ北斗の拳

recordNo: 1557
machineName: スマスロ北斗の拳
manufacturer: サミー（製造: タイヨーエレック）
formalModel: L パチスロ北斗の拳AD XR
inspectionCode: 2S1502
releaseDate: 2023-04-03
generation: 6.5号機 / スマスロ
systemType: AT / 継続率管理型BATTLE BONUS
settings: 1 / 2 / 4 / 5 / 6（設定Lあり・通常営業用数値非掲載）

## payoutRateBySetting
- 設定1: 98.0%
- 設定2: 98.9%
- 設定4: 105.7%
- 設定5: 110.0%
- 設定6: 113.0%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BATTLE BONUS初当り（合算）
- 設定1: 1/383.4
- 設定2: 1/370.5
- 設定4: 1/297.8
- 設定5: 1/258.7
- 設定6: 1/235.1
- 北斗揃い: 1/7274.0（全設定共通）

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約34.7G/50枚。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- BATTLE BONUS小役パート: 約4.1枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BATTLE BONUSは小役パート30G+α＋バトルパート8Gを1セットとする継続率管理AT。
- 1セットの獲得目安: 約110枚。
- 基礎継続率: 66% / 79% / 84% / 89%（Vストック除外）。
- 上位AT「無想転生バトル」: 平均約94%ループ。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は地獄 / 通常 / 天国 / 本前兆の4モード。
- 通常時天井: 1268G+αでBATTLE BONUS。
- 通常時300G / 777G / 800G到達時に天井短縮抽選が存在。
- 通常天井到達時は継続率抽選優遇・北斗揃い期待度UP。
- 777Gの短縮当選時は北斗揃い濃厚とする解析あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_DISTRIBUTION
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET。
- 通常時モードRESET・再抽選。
- 内部状態はRESET扱い。
- 設定変更後は通常1268G+αの天井が800G+αへ短縮。
- 設定変更後の開始モードには設定差があり、高設定ほど天国/本前兆開始率が高い。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 通常時モード/内部状態CARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 通常時モード/内部状態CARRY_OVER。
- 設定変更と純電源OFF→ONは挙動が異なる。

### gameCounterReset
- 設定変更: RESET。設定変更後は800G+α天井へ移行。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更後1G目は有利区間移行Gとなるため、公開解析上は天井発動の見かけが1Gずれる点に注意。

### ceilingAfterReset
- 通常天井: 1268G+α。
- 設定変更時: 800G+αへ短縮。
- 設定変更後800Gでの天井短縮抽選は当選濃厚とされる。
- 朝一800G天井到達時にも通常天井同様の継続率優遇/北斗揃い期待度UPがあるとする複数解析を採用。

### modeAfterReset
- 設定変更時は地獄 / 通常 / 天国 / 本前兆へ再抽選。
- 設定別公開振り分けはnumericResetDataに保存。
- 据え置き/純電源OFF→ON: CARRY_OVER。

### stateAfterReset
- 設定変更: RESET・再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 朝一開始ステージと内部モードは一致しない。高信頼解析では設定変更後のシン/サウザー/ジャギ開始は各33.3%。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- BB中の有利区間切断はシームレスに処理され、朝一変更判別用の表示要素としては使えない。

### resetBenefits
- 最大天井が1268G+αから800G+αへ短縮。
- 設定変更後は設定に応じてモード再抽選され、高設定ほど天国/本前兆スタート率が上昇。
- 800G天井到達時は継続率優遇・北斗揃い期待度UPの天井恩恵が確認されている。

### resetPenalties
- 前日の天井ゲーム数・モード/内部状態・有利区間を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- スマスロのため本機はリールガックンしないとする複数解析あり。
- 設定変更後の開始ステージは内部モードと無関係にシン/サウザー/ジャギ各33.3%とする高信頼解析があり、朝一ステージ単独で変更判別不可。
- 800G+α付近での天井発動は設定変更期待度UP材料。ただし通常時にも800G短縮抽選が存在するため、単独で100%変更確定とは扱わない。
- 見た目だけでの確実な設定変更/据え置き判別法は `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
#### 設定変更後モード振り分け
| 設定 | 地獄 | 通常 | 天国 | 本前兆 |
|---:|---:|---:|---:|---:|
| 1 | 48.73% | 33.07% | 17.57% | 0.63% |
| 2 | 47.59% | 33.45% | 18.32% | 0.64% |
| 4 | 39.15% | 36.32% | 23.47% | 1.07% |
| 5 | 34.95% | 37.78% | 26.07% | 1.20% |
| 6 | 30.01% | 40.75% | 27.92% | 1.32% |

- 設定変更後開始ステージ: シン33.3% / サウザー33.3% / ジャギ33.3%。
- 設定変更時天井: 800G+α。
- 通常時天井: 1268G+α。

### publicMorningNumbers
- 設定変更後天国以上開始率（天国+本前兆）:
  - 設定1: 18.20%
  - 設定2: 18.96%
  - 設定4: 24.54%
  - 設定5: 27.27%
  - 設定6: 29.24%
- 設定変更後開始ステージ: 各33.3%。
- 設定変更後天井: 800G+α。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `スマスロ北斗の拳 / L北斗の拳 / L パチスロ北斗の拳AD XR / タイヨーエレック / サミー / 2S1502` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 地獄 / 通常 / 天国 / 本前兆 / ガックン / 有利区間 / 判別 / ステージ` を組み替えて検索。
- P-WORLD/遊技日本、グリーンべると、北斗の拳公式、なな徹、パチマガスロマガ、一撃、K-Navi、当時攻略・後年解析を横断。

## conflicts
- 設定変更時の「開始ステージ」について、なな徹/パチマガスロマガ系はシン・サウザー・ジャギを各33.3%で再抽選とする一方、一部後年まとめ資料には「ステージ引き継ぎ」とする記載がある。内部モードと開始ステージを分離し、複数高信頼解析が一致する各33.3%をcanonical、後年単一系記述を `CONFLICT_DISPLAY_STAGE_DESCRIPTION` として保持。

## sources
取得日: 2026-09-13

- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9786
  - 製造タイヨーエレック、型式 `L パチスロ北斗の拳AD XR`、検定番号2S1502、2023-04-03、純増約4.1枚/G、機械割、AT初当り。
- 遊技日本 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/22776
  - サミー販売発表、タイヨーエレック製、正式型式、設定別AT、1セット約110枚、継続率。
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/22756/greenbelt
  - 約34.7G/50枚、AT初当り、北斗揃い、BATTLE BONUS仕様。
- 北斗の拳 OFFICIAL WEB SITE: https://hokuto-no-ken.jp/3340
  - 2023-04-03全国順次導入、1セット約110枚、継続率66/79/84/89%、無想転生バトル94%。
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/514/
  - AT/機械割、約34.7G/50枚、純増約4.1枚/G、通常/設定変更後天井。
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/514/13776/
  - 800G+α短縮、設定変更後モード振り分け、開始ステージ各33.3%。
- パチマガスロマガ 設定変更時モード抽選: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/203/tj09.php
  - 設定変更時の地獄/通常/天国/本前兆振り分けをなな徹と照合。
- 一撃 天井・朝一: https://1geki.jp/slot/s_sma_hokutonoken/3/
  - 1268G+α、300/777/800G短縮抽選、設定変更時800G短縮、有利区間切断挙動。
- Altema 朝一: https://altema.jp/pachimo/lhokutoasaiti
  - 設定変更と純電源OFF→ONの天井/モード/有利区間のRESET/CARRY_OVER比較。
- 一撃 2023年4月新台スケジュール: https://1geki.jp/newmachinecalender/202304/
  - 2023-04-03のパチスロ新台はスマスロ北斗の拳1機のみ。4/17にハーデス/ゴブリンスレイヤーを確認。

missingFields:
- 設定変更/据え置きを外観だけで100%確定できる本機固有判別法: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更専用の追加不利抽選: NONE_CONFIRMED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
