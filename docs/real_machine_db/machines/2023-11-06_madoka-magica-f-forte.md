# スマスロ劇場版 魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語f-フォルテ-

recordNo: 1597
machineName: スマスロ劇場版 魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語f-フォルテ-
manufacturer: メーシー
formalModel: L／前後編f／UU
inspectionCode: 3S0536
releaseDate: 2023-11-06
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + CZ + イベントマス攻略型AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 99.0%
- 設定3: 102.0%
- 設定4: 105.0%
- 設定5: 109.0%
- 設定6: 113.1%
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当り
- 設定1: 1/251.2
- 設定2: 1/243.9
- 設定3: 1/223.4
- 設定4: 1/210.2
- 設定5: 1/197.7
- 設定6: 1/187.5
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### AT初当り
- 設定別の公式/主要解析固定値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機はボーナス後のCZ「舞台装置の魔女」を主経路としてATへ突入するため、ボーナス初当りを主要比較値として採用。
信頼度: UNVERIFIED

## baseGamesPer50
- 約33.5G/50枚（設定1掲載値）
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「マギカフェスティバル」: 約2.0〜4.0枚/G
- BIG / エピソードボーナス: 約4.0枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIGボーナス: 20G、純増約4.0枚/G（約80枚相当の基本区間）。終了後はCZ「舞台装置の魔女」へ。
- プチボーナス: ベルナビ5回成立まで継続。
- エピソードボーナス: 40G、純増約4.0枚/G（約160枚）。当選時点でAT濃厚。
- AT「マギカフェスティバル」: 1セット最大18G+α。AT終了後はCZ「舞台装置の魔女」へ移行。
- AT突入時の期待枚数は業界紹介で1000枚以上、別当時資料でTY約1001枚とされるが、物差しDBでは参考値扱い。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- BIG間の規定ゲーム数は100G / 500G / 999G。+αの前兆後にBIG当選。
- 最大天井はBIG間999G+α。プチボーナスではBIG間ゲーム数はリセットされない。
- 設定変更後とAT終了後では規定G振り分けが異なり、設定変更後は500Gが明確に優遇される。
- CZ「舞台装置の魔女」はセット継続率50〜99%。累計5ダメージでAT突入濃厚。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更でBIG間の規定ゲーム数 / 天井カウントをRESETし、100G / 500G / 999Gから再抽選。
- 有利区間はRESETとする複数二次解析を確認。
- 設定変更後はBIG間規定Gの500G選択率が通常のAT終了後より優遇される。
- 設定変更後は最初のCZ「舞台装置の魔女」の基礎継続率振り分けも専用抽選で優遇される。
- 本機で「通常モード」として独立命名された朝一モード体系は確認できず、規定G振り分けを朝一の主要モード相当値として扱う。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間およびBIG間天井進行をCARRY_OVERとする解析を確認。
- 規定Gテーブルの内部選択、穢れ、マギカポイント、ソウルジェムシステム内部状態等を一括して「すべて引継ぎ」と明記する高信頼な機種固有比較表は固定できず、個別項目は UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_SINGLE / UNVERIFIED（個別内部要素）

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONではBIG間天井ゲーム数をCARRY_OVERとする当時攻略資料を確認。
- 純電断単独時の有利区間、規定G内部選択、CZ継続率予約、穢れ、マギカポイント、独立内部状態について、機種固有で直接比較した高信頼資料を複数系統から固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_SINGLE / UNVERIFIED

### gameCounterReset
- 設定変更: BIG間ゲーム数 / 規定GをRESETして再抽選。
- 据え置き: BIG間ゲーム数をCARRY_OVER。
- 純電源OFF→ON: BIG間ゲーム数をCARRY_OVER。
- プチボーナス当選ではBIG間天井カウントはリセットされない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更専用の「最大天井そのもの」の固定短縮はない。最大候補は通常同様999G+α。
- ただし500Gの規定G振り分けがAT終了後より明確に優遇されるため、平均的には朝一の天井到達が浅くなる。
信頼度: ANALYSIS_HIGH

### modeAfterReset
- 独立した名称付き通常モードの設定変更振り分けは NOT_SEPARATELY_DEFINED_AFTER_RESEARCH。
- 朝一客行動に直結する代替値として、設定変更後のBIG間規定G振り分け100G / 500G / 999Gを採用。
- 据え置き・純電断時の「モード」独立契約は UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH（規定G） / UNVERIFIED（独立モード）

### stateAfterReset
- 設定変更時の独立内部状態（低確/高確等）について、朝一専用振り分けを固定できる高信頼資料は確認できず UNVERIFIED_AFTER_RESEARCH。
- ソウルジェムシステムは通常時にも存在するが、設定変更時だけの開始状態固定値は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: UNVERIFIED

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- 純電源OFF→ON単独: 機種固有の直接比較を十分に固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_SINGLE / MULTI_SOURCE_SUPPORT

### resetBenefits
- 設定変更後はBIG間規定Gの500G振り分けがAT終了後より大幅に優遇。
- 設定変更後の最初の「舞台装置の魔女」は基礎継続率振り分けが優遇される。
- したがって朝一は「天井最大値短縮型」ではなく、「中間規定G＋CZ性能優遇型」の明確なリセット恩恵を持つ。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日からのBIG間ゲーム数進行を失う。
- 前日深ハマリ台では、据え置きと比較して宵越し天井価値を失う点が客側の不利要素。
- 穢れ・マギカポイント等の設定変更時処理は直接契約を固定できないため、消失すると断定しない。
信頼度: ANALYSIS_HIGH / UNVERIFIED（個別蓄積要素）

### resetDetection
- 設定変更後は500G規定G選択率と最初のCZ継続率が優遇されるため、複数挙動の統計的な推測材料にはなるが単独台での確定判別要素ではない。
- 有利区間ランプなど、朝一に固定的に変更/据え置きを判別できる公開ランプ情報は確認できず。
- 本機固有のリールガックン条件 / 発生率は「まどマギf / 前後編f / L前後編fUU / メーシー / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF / ガックン」等で再探索したが高信頼資料を固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（ガックン）

### numericResetData
#### 設定変更後 BIG間規定G振り分け
| 設定 | 100G | 500G | 999G |
|---:|---:|---:|---:|
| 1 | 25.0% | 12.5% | 62.5% |
| 2 | 25.4% | 13.3% | 61.3% |
| 3 | 26.2% | 14.1% | 59.8% |
| 4 | 27.0% | 17.6% | 55.5% |
| 5 | 28.1% | 21.9% | 50.0% |
| 6 | 29.3% | 25.0% | 45.7% |

#### 設定変更後「舞台装置の魔女」基礎継続率振り分け
- 50%: 設定1 12.5% / 2 11.7% / 3 10.9% / 4 9.4% / 5 7.8% / 6 6.3%
- 60%: 全設定25.0%
- 70%: 全設定35.9%
- 80%: 設定1 25.0% / 2 25.4% / 3 25.8% / 4 26.6% / 5 27.3% / 6 28.1%
- 90%: 設定1 1.6% / 2 2.0% / 3 2.3% / 4 3.1% / 5 3.9% / 6 4.7%
- 公開値は四捨五入表示を含む。

### publicMorningNumbers
- 設定変更後の100G / 500G / 999G規定G振り分けを全設定分取得済み。
- 設定変更後のCZ「舞台装置の魔女」基礎継続率50 / 60 / 70 / 80 / 90%の全設定分公開値を取得済み。
- 最大天井999G+α自体は設定変更でも維持され、固定短縮ではない。

## conflicts
- payoutRateについて今回採用した主要解析値は97.6 / 99.0 / 102.0 / 105.0 / 109.0 / 113.1%で複数高信頼解析が一致し、実用上のCONFLICTなし。
- AT初当り設定別確率は主要解析で固定値非掲載のため、推測や実戦逆算値を採用しない。

## missingFields
- 設定別AT初当り確率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 純電源OFF→ON単独時の有利区間 / 規定G内部選択 / CZ継続率予約 / 穢れ / マギカポイント / 独立内部状態: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時の独立内部状態振り分け: UNVERIFIED_AFTER_RESEARCH。
- 据え置き時の穢れ / マギカポイント等個別蓄積値の完全契約: UNVERIFIED_AFTER_RESEARCH。
- 本機固有ガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH。

coreStatus: COMPLETE_CORE

## sources
取得日: 2026-09-13
- ユニバーサルエンターテインメント発表 / 一撃転載: https://1geki.jp/repo/20230821uni_01/
  - メーシー製、シリーズ新作発表。
  - 信頼度: OFFICIAL_REPRINT / INDUSTRY
- 遊技日本 新台発表: https://yugi-nippon.com/pachinko-new-machine/post-60209/
  - 製造元メーシー、正式型式 L/前後編f/UU、AT期待枚数1000枚以上。
  - 信頼度: INDUSTRY
- 遊技通信 / 東京都公安委員会検定通過情報（P-WORLD転載）: https://news.p-world.co.jp/articles/25162/yugitsushin
  - L／前後編f／UU、メーシー、検定番号3S0536。
  - 信頼度: INDUSTRY / PUBLIC_SAFETY_SOURCE_REPRINT
- グリーンべると / P-WORLD 2023-11-06新台スケジュール: https://news.p-world.co.jp/articles/25893/greenbelt
  - 2023-11-06導入群。
  - 信頼度: INDUSTRY
- 一撃 機種概要: https://1geki.jp/slot/l_madomagimov_forte/
  - 設定別機械割、ボーナス初当り、ベース、純増、天井。
  - 信頼度: ANALYSIS_HIGH
- 一撃 通常時・規定G振り分け: https://1geki.jp/slot/l_madomagimov_forte/41/
  - 設定変更後 / AT終了後の100G・500G・999G振り分け。
  - 信頼度: ANALYSIS_HIGH
- 一撃 天井・設定変更: https://1geki.jp/slot/l_madomagimov_forte/3/
  - 設定変更後の規定G振り分け、CZ基礎継続率振り分け。
  - 信頼度: ANALYSIS_HIGH
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/626/
  - BIG / プチ / エピソード、AT基本性能。
  - 信頼度: ANALYSIS_HIGH
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9896
  - 規定G振り分け、基本仕様、ボーナス / AT構成。
  - 信頼度: INDUSTRY_DATABASE / ANALYSIS
- イチカツ 設定変更・リセット: https://ichikatsu.com/madomagif/
  - 設定変更で天井リセット、電源ON/OFFで天井引継ぎ。当時実戦系のリセット評価。
  - 信頼度: ANALYSIS_SINGLE
- パチナビ リセット整理: https://pachinavi.net/machines/smasloth-madoka-magica-4/tenjo/
  - 有利区間RESET / 据え置きCARRY_OVER等。後年整理資料のため補助扱い。
  - 信頼度: ANALYSIS_SINGLE
