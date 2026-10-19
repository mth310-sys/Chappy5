# ミリオンゴッド-神々の凱旋-

machineName: ミリオンゴッド-神々の凱旋-
manufacturer: ユニバーサルブロス
releaseDate: 2015-04-06
releaseDatePrecision: exact_nationwide_hall_start
releaseDateNote: ユニバーサル公式製品ページは2015年4月発売。メーカー発表文転載（4Gamer/オタク産業通信）が2015-04-06全国ホール導入開始を明記し、HAZUSE・K-Naviも同日で一致。
generation: 5号機
systemType: AT / セット数管理AT / CZ搭載
modelName: ミリオンゴッド-神々の凱旋-BD
inspectionNumber: 4S0861
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **ユニバーサルブロス**。
- 導入開始: **2015-04-06**。
- ユニバーサル公式: 5号機 / AT / 2015年4月発売。
- HAZUSE: 型式 **ミリオンゴッド-神々の凱旋-BD**、検定番号 **4S0861**、2015-04-06導入開始。
- メーカー発表文転載（4Gamer/オタク産業通信）: **2015年4月6日全国ホール導入開始**。
- confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

canonical market/analysis values:

| 設定 | 機械割 |
|---:|---:|
| 1 | 98.3% |
| 2 | 99.5% |
| 3 | 102.0% |
| 4 | 106.6% |
| 5 | 112.1% |
| 6 | 119.5% |

- ちょんぼりすた、スロ確、複数解析系で一致。
- 一部資料（パチスロ解析ガイド）は **98.0 / 99.0 / 103.3 / 106.3 / 111.6 / 118.0%** と異なるため平均せずCONFLICTとして保持。
- アタリ7は設定6を119.6%表記。119.5%系列と丸め差の可能性はあるが同一化せず別表記として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_SOURCE_VARIANT

## initialHitBySetting

AT「GOD GAME」には、確定役を除くGG初当たりと、GOD/赤7を含むGG合算が公開されているため定義を分離する。

| 設定 | GG初当たり（GOD/赤7除く） | GG合算（GOD/赤7含む） |
|---:|---:|---:|
| 1 | 1/525.4 | 1/452.8 |
| 2 | 1/476.0 | 1/415.6 |
| 3 | 1/487.5 | 1/424.4 |
| 4 | 1/370.7 | 1/333.0 |
| 5 | 1/361.8 | 1/325.9 |
| 6 | 1/274.7 | 1/253.5 |

- GOD揃い: **1/8192**（全設定共通）。
- 赤7揃い（SGG）: **1/5461**（全設定共通）。
- 一撃・なな徹・スロ確・パチスロ解析ガイドで定義付き数値が一致。
- 一部後年整理資料でGG合算と確定役除外値を「AT初当たり」と混在させる例があるため、canonicalでは二列に分離し平均しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約25G/50枚**。
- K-Navi、スロ確、アタリ7で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「GOD GAME」: **約3.0枚/G**。
- 1セット **100G**。
- ユニバーサル公式はセット数特化型ATであることを確認。純増数値はK-Navi・一撃・複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE + OFFICIAL_SYSTEM_CONFIRMATION

## basicPayout

- GOD GAME: **1セット100G × 約3.0枚/G**を基本性能とする。
- PGG（GOD揃い）はGG複数セットを伴うが、本DBは完全再現用詳細抽選を対象外とするため、最低セット数・ループ詳細は補助情報扱い。
- SGGは赤7高確率のセット上乗せ特化ゾーン。比較用コアにはGG基本100Gを採用。

## modeSpecificMinimumData

- CZ「G-STOP」: 最大5G、通常時のGG期待度約50%とK-Naviが掲載。
- 通常天井: **GG後1480G + 前兆**。
- 天井到達恩恵: GG当選。ループストックは **1% / 80% = 各50%**。
- 設定変更後は510G / 1000G / 1480Gの専用天井振り分けあり（詳細はresetBehavior）。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_MULTI_SOURCE
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数リセット**。
- **内部モード再抽選**。
- 一撃は **状態も再抽選** と明記。
- 液晶ステージは **ペイレネの泉**、液晶出目は **012**。
- 天井は510G / 1000G / 1480Gから設定別に選択。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き（設定変更なし）は、設定変更による天井・モード再抽選が発生しないため、朝一攻略上は **天井G・内部モード/状態を引き継ぐ**扱い。
- 電源OFF→ONのみの直接対照表が一撃・なな徹・アタリ7で一致しており、据え置き運用の実用契約を支持。
- 液晶表示は朝一012・ペイレネの泉へ揃うため、表示だけでは内部引継ぎを直接読めない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

設定変更なしの純電源OFF→ON:

- 天井ゲーム数: **引き継ぐ**。
- 内部モード: **引き継ぐ**。
- 状態: **引き継ぐ**（一撃）。
- 液晶ステージ: **ペイレネの泉**。
- 液晶出目: **012**。
- 電断時にGG / SGG / G-STOP / G-ZONE中だった場合は **そのまま引き継ぐ**（一撃）。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRYOVER**。
- 通常天井: **1480G + 前兆**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

設定変更時天井振り分け:

| 設定 | 510G | 1000G | 1480G |
|---:|---:|---:|---:|
| 1 | 10.00% | 90.00% | 0% |
| 2 | 10.00% | 90.00% | 0% |
| 3 | 10.00% | 90.00% | 0% |
| 4 | 10.00% | 89.61% | 0.39% |
| 5 | 10.00% | 87.66% | 2.34% |
| 6 | 10.00% | 85.32% | 4.69% |

- なな徹、一撃、HAZUSE、アタリ7で一致（丸め差のみ）。
- パチ7検索スニペットには表崩れで510G欄が欠落して見える箇所があるため、表構造が明確な資料をcanonicalとした。
- 1度でもGG当選後の天井は一律1480G。
- 天井到達時の恩恵は通常天井と同様。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset

設定変更時・表モード振り分け:

| モード | 設定1 | 設定2 | 設定3 | 設定4 | 設定5 | 設定6 |
|---|---:|---:|---:|---:|---:|---:|
| 低確1 | 60.00% | 60.00% | 50.00% | 50.00% | 40.00% | 40.00% |
| 低確2 | 7.81% | 6.25% | 12.50% | 9.38% | 15.63% | 12.50% |
| 通常 | 22.60% | 25.72% | 23.22% | 29.47% | 26.97% | 33.22% |
| 天国準備 | 7.81% | 6.25% | 12.50% | 9.38% | 15.63% | 12.50% |
| Vモード | 0.01% | 0.01% | 0.01% | 0.01% | 0.01% | 0.01% |
| 天国ショート | 1.56% | 1.56% | 1.56% | 1.56% | 1.56% | 1.56% |
| 天国ロング | 0.20% | 0.20% | 0.20% | 0.20% | 0.20% | 0.20% |
| 超天国 | 0.01% | 0.01% | 0.01% | 0.01% | 0.01% | 0.01% |

- なな徹と2-9伝説で一致。
- リセット時は低確寄りで、モード面そのものは強い朝一優遇ではない。
- 裏モードのリセット全振り分けは本DBの必要粒度を超えるため取得対象外。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

- 一撃: 設定変更時 **状態再抽選**、電源OFF→ONは **状態引継ぎ**。
- 完全再現用の全状態振り分けは取得対象外。
- confidence: ANALYSIS_HIGH

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 最大の朝一恩恵は **天井短縮**。
- 設定1〜3は設定変更後、**100%で1000G以下**（510G 10% / 1000G 90%）。
- 設定4〜6も大半が1000G以下だが、1480G選択が少量存在。
- 510G天井は全設定約10%。
- 天井到達時のループストック恩恵（80%ループ50%）はリセット天井でも同様。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties

- 表モード振り分けは低確1が40〜60%と高く、2-9伝説は「朝一モードは低め」と評価。固定の高モード優遇ではない。
- ただし天井短縮という明確な恩恵があるため、これを単純な「リセット不利」とは分類しない。
- 数値化された専用ペナルティは `NONE_CONFIRMED`。

### resetDetection

- 設定変更時も純電源OFF→ON時も **ペイレネの泉 / 012** から始まるため、液晶初期画面単体では変更判別不可。
- 本機固有の「ガックンで確定判別」という高信頼契約は、機種名＋ガックン/変更判別/朝一/据え置き等で再探索したが今回固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一1000G+前兆を超えてGG非当選なら、設定1〜3のリセット天井契約とは両立しないため、設定4以上リセットの1480G選択または据え置きを疑う材料になる。ただしホール運用・前兆/データ表示差があるため単独確定判別にはしない。

### numericResetData

- 設定変更時天井: 上表（510/1000/1480G）。
- 設定変更時表モード: 上表。
- 天井恩恵: **80%ループ 50% / 1%ループ 50%**。

### publicMorningNumbers

- 510G天井選択: **全設定10.00%**。
- 設定1〜3: 1000G **90.00%**、1480G **0%**。
- 設定4: 1000G **89.61%**、1480G **0.39%**。
- 設定5: 1000G **87.66%**、1480G **2.34%**。
- 設定6: 1000G **85.32%**、1480G **4.69%**。
- 設定変更時表モードの全公開値はmodeAfterReset表を参照。

## conflicts

1. **機械割**
   - 主流解析: 98.3 / 99.5 / 102.0 / 106.6 / 112.1 / 119.5%。
   - パチスロ解析ガイド: 98.0 / 99.0 / 103.3 / 106.3 / 111.6 / 118.0%。
   - アタリ7: 設定6 119.6%。
   - `CONFLICT_PAYOUT_SOURCE_VARIANT_NOT_AVERAGED`。
2. **AT初当たり表記**
   - 一部後年資料が、確定役除外GG初当たり（1/525.4〜1/274.7）とGG合算（1/452.8〜1/253.5）を同じ「AT初当たり」名で扱う。
   - 数値競合ではなく定義差として二列保存。`DEFINITION_DIFFERENCE_NOT_AVERAGED`。
3. **後年スマスロ版混入防止**
   - 2026年「スマスロ ミリオンゴッド-神々の軌跡-」にも510/1000/1480Gリセット天井が存在するが、振り分け・有利区間仕様は別物。2015年凱旋へ一切転記しない。

## missingFields

- resetDetection definitive physical/reel tell: `NONE_CONFIRMED_AFTER_RESEARCH`。
- メーカー公式の設定別機械割/初当たり表は現行製品ページ上では確認できないため、数値は複数解析一致を採用。

## sources

取得日: 2026-09-07

1. ユニバーサルエンターテインメント公式「ミリオンゴッド-神々の凱旋-」 — https://www.universal-777.com/product/slot/milliongod_gaisen/
   - ユニバーサルブロス、5号機、AT、2015年4月発売、セット数特化型、G-STOP/SGGの公式概要。
2. 4Gamer（メーカー発表文転載） — https://www.4gamer.net/games/157/G015795/20150330041/
   - 2015-04-06全国ホール導入開始。
3. オタク産業通信（メーカー発表文転載） — https://otakuindustry.biz/archives/7353
   - 2015-04-06全国ホール導入開始。
4. HAZUSE — https://hazuse.com/machine/pachislot/4S0861/
   - 型式、検定番号、2015-04-06導入、通常/設定変更天井、天井恩恵。
5. K-Navi — https://p-kn.com/slot/2243/
   - 2015-04-06導入、AT/GG概要。
6. K-Navi 簡単ワンポイント — https://p-kn.com/slot/2243/53746/
   - 約25G/50枚、GG 100G、純増約3.0枚/G、G-STOP概要。
7. 一撃「ボーナス確率」 — https://1geki.jp/slot/milliongodgaisen/1/
   - GG初当たり、GG合算、GOD/赤7確率。
8. 一撃「天井/設定変更」 — https://1geki.jp/slot/milliongodgaisen/3/
   - 通常天井、設定変更天井振り分け、設定変更/電断の天井・モード・状態・表示契約。
9. なな徹「ボーナス確率/機械割」 — https://nana-press.com/kaiseki/machine/49/846/
   - GG初当たり、GG合算、GOD/赤7確率。
10. なな徹「朝イチ/設定変更」 — https://nana-press.com/kaiseki/machine/49/851/
    - 設定変更/電源ON-OFF比較、天井振り分け。
11. なな徹「設定推測要素」 — https://nana-press.com/kaiseki/machine/49/849/
    - 設定変更時表モード振り分け。
12. 2-9伝説「朝一変更後のモード移行率」 — https://2-9densetsu.com/milliongodgaisen-asaichi/
    - 表モード振り分けクロスチェック、朝一モード評価。
13. スロ確.com — https://slotkaku.com/milliongodkamigaminogaisen
    - 機械割、GG初当たり/合算、約25G/50枚、通常天井。
14. ちょんぼりすた — https://chonborista.com/%E6%9C%AA%E5%88%86%E9%A1%9E/6778/
    - 主流機械割、GG合算、導入日。
15. パチスロ解析ガイド — https://pachislot-guide.net/2015/million-god-gaisen/
    - GG初当たり/合算、別系列機械割（CONFLICT保持）、AT基本性能。
16. アタリ7 — https://www.atari7.com/column/20171487765487.php
    - 朝一設定変更/電源OFF-ON比較、表モード、天井振り分け、機械割別表記。
