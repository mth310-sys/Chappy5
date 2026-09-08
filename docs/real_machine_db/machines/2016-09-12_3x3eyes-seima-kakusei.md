machineName: 3×3EYES ～聖魔覚醒～
manufacturer: 大都技研
releaseDate: 2016-09-12
recordNumber: 1008
generation: 5号機 / 5.5号機期
systemType: ノーマルA / 技術介入機
formalModelName: 3×3EYES／A7
certificationNumber: 5S0936
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 大都技研公式製品ページが2016-09-12「全国導入開始！」と明記。K-Navi・複数解析も2016-09-12で一致するため、releaseDateを同日で固定。
- P-WORLD機種DBで型式名 `3×3EYES／A7`、検定番号 `5S0936` を確認。
- 設定構成は通常の1・2・5・6に加え、技術介入頻度が極端に高い特殊設定Cを搭載する5段階構成。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
### 市場掲載 / 通常遊技値
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 99.5% |
| C | 98.5% |
| 5 | 102.7% |
| 6 | 105.7% |

### 完全攻略時
| 設定 | 機械割 |
|---:|---:|
| 1 | 100.6% |
| 2 | 102.6% |
| C | 109.7% |
| 5 | 106.5% |
| 6 | 110.2% |
- 通常値と完全攻略値は定義を分離して保持する。P-WORLDは完全攻略系列を掲載し、当時解析複数は通常値と完全攻略値の双方を掲載。
- グリーンべると業界記事も設定Cについて技術介入度により98.5%〜109.7%と報道しており、両系列の差が技術介入によることを裏付ける。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | 3×3EYES BIG | チャレンジBONUS | 合算 |
|---:|---:|---:|---:|
| 1 | 1/337.8 | 1/489.1 | 1/199.8 |
| 2 | 1/321.3 | 1/461.5 | 1/189.4 |
| C | 1/682.7 | 1/99.9 | 1/87.1 |
| 5 | 1/306.2 | 1/397.2 | 1/172.9 |
| 6 | 1/303.4 | 1/313.6 | 1/154.2 |
- P-WORLD・複数当時解析で同系列一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 代表値: 約41G/50枚。
- 詳細整理資料では約40.8〜43.5G/50枚の設定差レンジ。
- canonical比較値は約41G/50枚とし、40.8〜43.5Gは設定差レンジとして併記する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- NOT_APPLICABLE。AT/ART/RT非搭載の純ボーナス主体ノーマルタイプ。

## basicPayout
- 3×3EYES BIG: 最大350枚。グリーンべると試打会記事では平均344枚。
- チャレンジBONUS: 最大112枚。グリーンべると試打会記事では平均82枚。
- 技術介入成否で実獲得枚数が変動するため、最大値と平均値を混同しない。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 技術介入機として通常/市場掲載機械割と完全攻略時機械割を双方保持。
- 設定CはBIGを重くし、チャレンジBONUSを約1/99.9まで高頻度化した特殊設定。技術介入成功度による出玉率差が大きい。
- 通常時ゲーム数天井: 非搭載。
- RT/ART: 非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 当時解析で設定変更時は「特に影響なし」「恩恵は特になし」と明記。
- 天井・通常時ゲーム数モード・ART/AT状態を持たないため、それらのリセット/再抽選は **NOT_APPLICABLE**。
- 設定変更専用の朝一高確、短縮天井、専用当選テーブルは **NONE_CONFIRMED_AFTER_RESEARCH**。

### carryOverBehavior
- 天井・周期・通常時モード等の累積進捗項目は非搭載のため **NOT_APPLICABLE**。
- 据え置きによる宵越し天井価値・朝一モード価値はない。

### powerCycleBehavior
- 天井・周期・通常時モード等の累積進捗項目は非搭載のため **NOT_APPLICABLE**。
- 純電源OFF→ONだけで客側に確定的な設定変更判別を与える本機固有挙動は、機種名/型式/メーカーと「電源OFF ON」「朝一」「設定変更」「据え置き」「ガックン」等へ検索語を変えて再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なノーマル機の電断挙動から推定補完しない。

### gameCounterReset
- CEILING_COUNTER_NOT_APPLICABLE。
- 通常ゲーム数は天井抽選に用いない。

### ceilingAfterReset
- 通常時ゲーム数天井: **NOT_APPLICABLE / 天井非搭載**。
- 設定変更専用短縮天井: **NOT_APPLICABLE**。

### modeAfterReset
- 天井管理モード、朝一専用モード: **NOT_APPLICABLE / NONE_CONFIRMED**。

### stateAfterReset
- AT/ART/CZの持続状態は非搭載。
- 客の朝一立ち回りへ影響する設定変更専用内部状態は **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 固定短縮天井、朝一高確、朝一専用モード、設定変更専用CZ等の主要恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 天井進捗・周期進捗の喪失は **NOT_APPLICABLE**。
- その他の公開された設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 設定変更そのものを確定/推測する本機固有ガックン・初期出目・ランプ・液晶挙動は、表記揺れ・型式名 `3×3EYES／A7`・大都技研・サザンアイズを用い、「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」へ検索語を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定CはチャレンジBONUSが1/99.9と極端に軽いため稼働後のデータから設定C自体を推測しやすいが、これは「設定変更/据え置き判別」ではなく「設定内容推測」なので別概念として扱う。

### numericResetData
- 設定変更時モード振り分け: **NOT_APPLICABLE**。
- 朝一一定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 短縮天井G数: **NOT_APPLICABLE**。
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 設定1/2/C/5/6という特殊設定構成のため、通常の6段階設定機と同列平均しない。
- 機械割は「通常/市場掲載」と「完全攻略」で差が大きく、とくに設定Cは98.5%→109.7%。物差しDBでは必ず別定義で比較する。
- ちょんぼりすた本文の設定1通常機械割が表示上 `97.%` と欠ける箇所があるが、他の複数解析・回顧資料で97.2%が一致しているため97.2%をcanonicalとした。
- BIG/REGの最大獲得と業界記事の平均獲得は定義分離。

## conflicts
- 数値競合として確定する主要項目なし。
- `PAYOUT_DEFINITION_VARIANT_NORMAL_VS_FULL攻略`: 通常値 97.2/99.5/98.5/102.7/105.7% と完全攻略値 100.6/102.6/109.7/106.5/110.2% は競合ではなく遊技精度による別定義。

## missingFields
- powerCycle display/reel-specific behavior: UNVERIFIED_AFTER_RESEARCH
- setting-change-specific gakkun/initial-display evidence: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. 大都技研公式 — 3×3EYES〈サザンアイズ〉聖魔覚醒
   - https://www.daitogiken.com/contents/product/slot/33eyes/
   - 2016-09-12「全国導入開始！」。
2. グリーンべると / P-WORLD業界ニュース — 「設定C」は目押し力で出玉率最大11.2％アップ！（2016-08-23）
   - https://news.p-world.co.jp/articles/8606/greenbelt
   - 大都技研発表、設定1完全攻略100%超、設定C 98.5〜109.7%、BIG平均344枚/最大350枚、REG平均82枚/最大112枚。
3. P-WORLD — 3×3EYES～聖魔覚醒～
   - https://www.p-world.co.jp/machine/database/8138
   - 型式名3×3EYES／A7、検定番号5S0936、BIG/REG/合算精密値、完全攻略機械割、最大獲得枚数。
4. K-Navi — 3×3EYES ～聖魔覚醒～
   - https://p-kn.com/slot/2589/
   - 2016-09-12ホール導入開始、ノーマルタイプ、最大獲得性能。
5. ちょんぼりすた — サザンアイズ(3×3EYES) 聖魔覚醒
   - https://chonborista.com/slot/daito-slot/23517/
   - 導入日、設定別ボーナス、通常/完全攻略機械割、約41G/50枚、天井非搭載。
6. パチマガスロマガ — 3×3EYES ～聖魔覚醒～
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/66/a.php
   - ノーマルタイプ、BIG最大350枚、チャレンジBONUS最大112枚/平均82枚、技術介入専用設定の存在。
7. けんのスロットシミュレーション — 3×3EYES聖魔覚醒 解析情報
   - https://kenslo65536.com/kaiseki/eyes3x3.html
   - 通常/攻略時機械割、設定別ボーナス、40.8〜43.5G/50枚、天井なし。
8. CRANKY SEVEN — 3×3EYES（サザンアイズ）聖魔覚醒
   - https://crankyseven.com/sazaneyes-pc.htm
   - 天井なし、設定変更時「特に影響なし」、設定別ボーナス/完全攻略機械割。
9. 必勝期待値クマぱぱ — 3×3EYES聖魔覚醒
   - https://xn--x9ja8p0go69l5jtgfm.com/33eyes-sazaneyes-2918
   - 天井非搭載、設定変更恩恵なし、約41G/50枚、設定別スペック。
10. スロパチクエスト — サザンアイズ 設定判別・設定差
   - https://www.slopachi-quest.com/article/3x3eyes-settei/
   - 通常/完全攻略機械割、ボーナス確率、設定Cの技術介入特性。
