# キングオブジャック

No: 1342
machineName: キングオブジャック
machineNameVariants: KING OF JACK / キングジャック（業界記事見出し表記あり）
manufacturer: ベルコ
releaseDate: 2020-03-02
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
generation: 6号機
systemType: AT / 擬似ボーナス / 周期抽選 + CZ

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 110.0% |

- ベルコ公式はAT初当りを掲載。出玉率はK-Navi、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | ボーナス（AT初当り） |
|---|---:|
| 1 | 1/271.3 |
| 2 | 1/269.1 |
| 3 | 1/260.9 |
| 4 | 1/240.8 |
| 5 | 1/223.0 |
| 6 | 1/206.5 |

- ベルコ公式・K-Navi・1geki等で一致。
- グリーンべるとの記事本文に設定1 1/273.3表記が1件あるが、公式および複数解析が1/271.3で一致するため `CONFLICT_SETTING1_INITIAL_HIT_1_271_3_VS_1_273_3_SINGLE_INDUSTRY_ARTICLE` として保持し、公式値1/271.3をcanonicalとする。
- reliability: OFFICIAL_AND_ANALYSIS_HIGH / CONFLICT noted

## baseGamesPer50
- 41.5G/50枚。
- reliability: INDUSTRY_AND_ANALYSIS_HIGH

## netIncrease
- 擬似ボーナスAT純増: 約3.0枚/G。
- reliability: OFFICIAL_AND_INDUSTRY

## basicPayout
- DOUBLE BIG BONUS: 約600枚 / 1G連期待度約75%。
- BIG BONUS: 約300枚 / 1G連期待度約50%。
- REGULAR BONUS: 約100枚 / 1G連期待度約17%。
- reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は周期抽選。周期到達平均約70.4G、最大111GでCZ。
- CZはJACK / QUEEN / KINGの3種。
- 通常最大天井777G+αでボーナス当選。
- 有利区間移行後122Gは仮天井扱いとする後年解析があり、122G以内のボーナス当選率は約50%（1G連除く）。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_FIRST_CYCLE_BENEFIT
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- **設定変更後1周期目はJACKが選ばれず、QUEEN以上濃厚/確定扱い**とする当時・後年解析が一致。
- 設定変更時の777G天井、内部高確、周期内部G、全有利区間状態がRESETされるかを直接表にした本機固有資料は、検索語・資料系統を変えても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時の天井G・周期進行・内部高確・有利区間の本機固有CARRY_OVER契約は `UNVERIFIED_AFTER_RESEARCH`。
- 一般的6号機挙動から補完しない。

### powerCycleBehavior
- 電源OFF→ONのみの場合の天井G・周期・内部状態・有利区間の本機固有挙動は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更 / 据え置き / 純電断それぞれの777G天井内部GのRESET/CARRY_OVERは `UNVERIFIED_AFTER_RESEARCH`。
- 周期は通常最大111G、平均70.4G。

### ceilingAfterReset
- 通常最大天井: 777G+α。
- 有利区間移行後122Gを仮天井とする解析あり。
- 設定変更専用の777G天井短縮値は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更後1周期目は **QUEEN以上**。
- 通常時の全周期/CZ選択テーブルは物差し用途外。

### stateAfterReset
- 設定変更/純電断時の高確率状態の初期化・引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 6号機ATのため有利区間あり。
- 設定変更・据え置き・純電断時の本機固有ランプ/区間契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- **設定変更後1周期目はQUEENまたはKING（JACK非選択）**。
- QUEEN/KINGのCZ成功期待度は設定別に公開されているが、設定変更専用の抽選率ではないため通常CZ性能として分離。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン条件/発生率、有利区間ランプによる変更判別、朝一出目による確定判別は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更後1周期目: **QUEEN以上**。
- QUEEN成功期待度: 設定1〜6 約25.1 / 25.2 / 25.3 / 25.5 / 25.6 / 25.8%。
- KING成功期待度: 設定1〜6 約50.1 / 50.2 / 51.2 / 53.2 / 54.9 / 56.5%。
- 上記成功期待度は設定変更専用値ではなく、朝一で選ばれるCZ自体の通常性能として定義分離。

## resetBehavior 再探索メモ
2026-09-11に `キングオブジャック / KING OF JACK / キングジャック / ベルコ / 型式名 / 検定 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / モード / 高確 / ガックン / 有利区間 / ランプ` を組み替え、ベルコ公式、P-WORLD、グリーンべると、PiDEA、K-Navi、1geki、ちょんぼりすた、パチマガスロマガ、なな徹、スロパチクエスト等を横断。設定変更後1周期目QUEEN以上は複数一致。設定変更/純電断の天井・内部状態・有利区間の直接契約、型式名・検定番号、本機固有ガックンは十分な資料を固定できず推測補完していない。

## conflicts
- 設定1ボーナス初当り: ベルコ公式・複数解析 `1/271.3` vs グリーンべると本文 `1/273.3`。公式・複数一致をcanonical、単一記事値をCONFLICTとして保持。
- 導入について、業界記事は3月1日納品開始予定、攻略DBは2020-03-02ホール導入開始。DBのreleaseDateはホール導入基準で2020-03-02。

## sources
取得日: 2026-09-11

1. BELLCO公式 — キングオブジャック
   - https://www.s-bellco.co.jp/products/slot/kingofjack/
   - 2020年3月、6号機AT、設定別AT初当りを確認。
   - reliability: OFFICIAL
2. P-WORLD
   - https://www.p-world.co.jp/machine/database/9134
   - 6号機AT、純増約3.0枚/G、ボーナス獲得性能、周期/CZ構造を確認。
   - reliability: INDUSTRY_DB
3. グリーンべると / P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/12743/greenbelt
   - 純増、600/300/100枚、122G以内約50%、平均周期70.4G、最大111G、天井777G+α、41.5G/50枚を確認。
   - reliability: INDUSTRY
4. K-Navi
   - https://p-kn.com/slot/3396/
   - 2020-03-02、設定別初当り/機械割、41.5G/50枚を確認。
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた
   - https://chonborista.com/slot/belko-slot/104312/
   - スペック、777G天井、設定変更後1周期目上位CZを確認。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ CZ基本概要
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/104/czk02.php
   - ボーナス後/設定変更後1周期目QUEEN以上、CZ別設定別期待度を確認。
   - reliability: ANALYSIS_HIGH
7. なな徹 天井/ヤメ時
   - https://nana-press.com/kaiseki/machine/27/411/
   - 777G天井、有利区間移行後122G仮天井を確認。
   - reliability: ANALYSIS_HIGH

## missingFields
- 正式型式名 / 検定番号
- 設定変更/据え置き/純電断時の天井内部G RESET/CARRY_OVER
- 内部高確/有利区間のRESET/CARRY_OVER契約
- 本機固有ガックン/ランプ/出目変更判別

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_FIRST_CYCLE_BENEFIT
