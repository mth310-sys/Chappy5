# パチスロ ダイナマイトキング極

No: 1354
machineName: パチスロ ダイナマイトキング極
machineNameVariants: パチスロ ダイナマイトキング極 / ダイナマイトキング極 / Sパチスロダイナマイトキング極JJT
manufacturer: D-light（ディ・ライト / Daiichi系）
releaseDate: 2020-05-11
formalModelName: Sパチスロダイナマイトキング極JJT
certificationNumber: 9S1214
generation: 6号機
systemType: AT / ゲーム数・GO回数管理 / 高純増AT

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.1% |
| 3 | 101.3% |
| 4 | 104.9% |
| 5 | 108.2% |
| 6 | 110.1% |

- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | カウントダウンセブン | ダイナマイトタイム初当り |
|---|---:|---:|
| 1 | 1/271.5 | 1/759.3 |
| 2 | 1/264.7 | 1/711.0 |
| 3 | 1/253.3 | 1/647.5 |
| 4 | 1/242.7 | 1/579.5 |
| 5 | 1/233.6 | 1/518.2 |
| 6 | 1/177.3 | 1/370.3 |

- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約53G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- カウントダウンセブン / ダイナマイトタイム: 約6.7枚/G。
- reliability: ANALYSIS_HIGH

## basicPayout
- カウントダウンセブン: 7G固定、純増約6.7枚/G。初当り時のメインAT昇格期待度は設定1で約35%。
- ダイナマイトタイム: 1セット33G以上、ストック管理。純増約6.7枚/G。
- 初期ゲーム数は33Gを基本に66/99/111G等へランクアップする可能性あり。

## modeSpecificMinimumData
- 通常ゲーム数天井: 777G+αでカウントダウンセブン。
- 111Gの倍数でCZ「ダイナマイトチャンス」へ突入する構造。
- GO揃い回数天井あり。有利区間移行時に規定回数を抽選。
- GO回数天井振り分け: 20〜30回 17.97〜18.0% / 40〜50回 15.63〜15.6% / 60〜70回 17.19〜17.2% / 80〜90回 2.34〜2.3% / 100回以上 46.88〜46.9%。丸め差として扱う。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_WITH_CONFIRMED_SHORTENED_CEILING
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更でゲーム数天井、GO回数天井、内部状態をRESET。
- 通常777G+αのゲーム数天井が設定変更後は666G+αへ短縮。
- GO回数天井はリセット後、新たな規定回数抽選となる。

### carryOverBehavior
- 据え置き時は純電源OFF→ONと同様に、ゲーム数天井、GO回数天井、内部状態を引き継ぐとする当時解析を採用。

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONではゲーム数天井、GO回数天井、内部状態をCARRY_OVER。
- HAZUSEも天井までのゲーム数は電源ON/OFFで引き継ぐと明記。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電断: CARRY_OVER。
- 通常天井は777G+αだが、設定変更時は666G+α。

### ceilingAfterReset
- **666G+αへ短縮**。
- 通常時最大777G+αから111G分短縮される公開リセット恩恵。

### modeAfterReset
- GO回数天井の規定回数は有利区間移行時に新規抽選される。
- 設定変更専用の別モード名・専用モード振り分けは、機種名/型式/メーカー/リセット/朝一/モードで再探索したが公開固定情報を確認できずUNVERIFIED_AFTER_RESEARCH。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電断: 内部状態CARRY_OVER。
- ただし内部状態の全詳細や設定変更専用振り分けは本DB範囲外かつ公開固定値不足のため収集しない。

### advantageousSectionReset
- GO回数天井が「有利区間移行時に規定回数抽選」とされることは確認。
- 設定変更時のゲーム数/GO回数/内部状態RESETは固定できたが、設定変更・純電断時の有利区間ランプおよび有利区間そのものの朝一契約を直接表形式で明記する高信頼本機資料は今回固定できず、一般的6号機仕様から補完せずUNVERIFIED_AFTER_RESEARCH。

### resetBenefits
- 設定変更時はゲーム数天井が777G+α → 666G+αへ短縮。
- これが公開情報上の主要朝一恩恵。

### resetPenalties
- 設定変更で前日のゲーム数天井進行、GO回数天井進行、内部状態が消失するため、前日蓄積が大きい場合は状態消失となる。
- 独立した設定変更ペナルティとして公表された追加不利要素は確認されていない。

### resetDetection
- 当時スロパチクエストでは有利区間ランプ・リセット判別とも「調査中」。
- 本機固有のガックン、初期出目、ランプ点灯/消灯を用いた高信頼の設定変更確定条件は、表記揺れ・型式・メーカーを含め再探索しても固定できずUNVERIFIED_AFTER_RESEARCH。
- 天井が666G+αへ短縮されるため、事後的な挙動はリセット推測材料になり得るが、朝一0G時点の確定判別には使えない。

### numericResetData / publicMorningNumbers
- 通常ゲーム数天井: 777G+α。
- 設定変更後ゲーム数天井: **666G+α**。
- GO回数天井（有利区間移行時抽選）: 20〜30回 17.97% / 40〜50回 15.63% / 60〜70回 17.19% / 80〜90回 2.34% / 100回以上 46.88%（HAZUSE精密表記）。
- 設定変更専用GO回数天井振り分けが通常の有利区間移行時と異なることを示す公開値は確認できず、同一と推測固定しない。

## resetBehavior 再探索メモ
2026-09-11に `パチスロ ダイナマイトキング極 / ダイナマイトキング極 / Sパチスロダイナマイトキング極JJT / 9S1214 / D-light / ディライト / Daiichi / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 666G / GO回数 / モード / ガックン / 有利区間 / 有利区間ランプ` を組み替え、HAZUSE、1geki、なな徹、SLOT HACK、スロパチクエスト、ちょんぼりすた、旧解析DB、当時導入カレンダーを横断。設定変更時666G+α、ゲーム数/GO回数/内部状態RESET、純電断CARRY_OVERは別系統で固定。ランプ・ガックン等の変更判別は当時資料が調査中のままで、後発高信頼資料でも直接契約を固定できず推測補完していない。

## conflicts
- 性能コアに重大CONFLICTなし。
- GO回数天井振り分けの17.97/18.0等は同一値の丸め精度差として扱う。

## missingFields
- 設定変更/純電断時の本機固有有利区間ランプ挙動の直接契約。
- 本機固有ガックン/初期出目等の変更判別契約。
- 設定変更専用モード振り分け（存在する場合）。

## coreStatus
- **COMPLETE_CORE**

## overallReliability
- **ANALYSIS_HIGH_WITH_PARTIAL_RESET_DETECTION**

## sources
取得日: 2026-09-11

1. HAZUSE「パチスロダイナマイトキング極」
   - https://hazuse.com/machine/pachislot/9S1214/
   - 型式Sパチスロダイナマイトキング極JJT、検定番号9S1214、2020-05-11、純増、天井、設定変更後666G+α、電源ON/OFF引継ぎ、GO回数天井を確認。
   - reliability: ANALYSIS_HIGH
2. ちょんぼりすた「ダイナマイトキング極」
   - https://chonborista.com/slot/d-light/107131/
   - 設定別性能、約53G/50枚、純増6.7枚/G、通常777G+αを確認。
   - reliability: ANALYSIS_HIGH
3. SLOT HACK「ダイナマイトキング極」
   - https://slothack.net/matome/7625/
   - 2020-05-11導入、777G+α、設定変更後666G+αを別系統で照合。
   - reliability: ANALYSIS_HIGH
4. SLOT HACK「設定差まとめ」
   - https://slothack.net/matome/6958/
   - 設定別CD7/AT初当り、機械割、約53G/50枚、純増を照合。
   - reliability: ANALYSIS_HIGH
5. スロパチクエスト「天井解析」
   - https://www.slopachi-quest.com/article/dynamiteking-kiwami-tennjou/
   - 設定変更でゲーム数天井/GO回数天井/内部状態RESET、据え置き電断で引継ぎ、666G+α短縮を確認。ランプ/変更判別は調査中。
   - reliability: ANALYSIS_HIGH
6. なな徹「天井/ヤメ時」
   - https://nana-press.com/kaiseki/machine/38/673/
   - 通常777G+α、設定変更後666G+α、GO回数天井振り分けを照合。
   - reliability: ANALYSIS_HIGH
7. 1geki「ダイナマイトタイム中の抽選」
   - https://1geki.jp/slot/s_dking/63/
   - 純増約6.7枚/G、1セット33G以上、初期ゲーム数構造を確認。
   - reliability: ANALYSIS_HIGH
8. 1geki「カウントダウンセブン」
   - https://1geki.jp/slot/s_dking/62/
   - 7G固定、設定1初回成功期待度約35%を確認。
   - reliability: ANALYSIS_HIGH
9. パチンコ・パチスロ.com「新台導入日カレンダー2020」
   - https://pachinkopachisro.com/archives/53951811.html
   - 2020-05-11導入群を確認。
   - reliability: INDUSTRY_CALENDAR_SECONDARY
