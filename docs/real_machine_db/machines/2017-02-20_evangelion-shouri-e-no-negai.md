machineName: ヱヴァンゲリヲン・勝利への願い
manufacturer: Bisty
releaseDate: 2017-02-20
recordNumber: 1050
generation: 5号機 / 5.5号機期
systemType: A+ART
formalModelName: ヱヴァンゲリヲン・勝利への願いS
certificationNumber: 6S1325
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- SANKYOオンライン博物館（ビスティブランド）は導入年月2017.02、販売名「ヱヴァンゲリヲン～勝利への願い～」、型式名「ヱヴァンゲリヲン・勝利への願いＳ」を掲載。
- HAZUSE、K-Navi、一撃、複数解析資料でホール導入開始日2017-02-20が一致。
- HAZUSEは型式名 `ヱヴァンゲリヲン・勝利への願いS`、検定番号 `6S1325` を掲載。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.5% |
| 3 | 101.6% |
| 4 | 104.7% |
| 5 | 108.6% |
| 6 | 112.5% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG / IMPACT CHANCE / ボーナス合算 / ART初当たり
| 設定 | BIG | IMPACT CHANCE | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/963.8 | 1/162.2 | 1/138.9 | 1/557.1 |
| 2 | 1/963.8 | 1/160.6 | 1/137.7 | 1/544.2 |
| 3 | 1/963.8 | 1/157.5 | 1/135.4 | 1/501.7 |
| 4 | 1/936.2 | 1/154.6 | 1/132.7 | 1/467.7 |
| 5 | 1/910.2 | 1/151.7 | 1/130.0 | 1/404.7 |
| 6 | 1/910.2 | 1/149.6 | 1/128.5 | 1/378.7 |
reliability: OFFICIAL_FOR_PROBABILITIES_PLUS_ANALYSIS_HIGH

## baseGamesPer50
- 約33G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「IMPACT RUSH」単体純増: 約1.5枚/G。
- ボーナス込み実効表記: 約2.0枚/G。
- 単体ART純増とボーナス込み表記を定義分離して保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 150枚。
- IMPACT CHANCE: 60枚。
- ART「IMPACT RUSH」: ストックパート40G + 使徒殲滅バトル。
- BIGからのART突入期待度約50%、IMPACT CHANCEから約20%はSANKYO公式機種紹介でも確認。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- A+ART。通常時の主なART契機はボーナス、自力CZ「緊Q迎撃作戦」、天井。
- CZ「緊Q迎撃作戦」は20G、ART期待度約50%。レスQポイント10000pt到達で突入。
- 通常ゲーム数天井はボーナス間777GでART当選。
- 別系統としてART非当選ボーナスのスルー回数天井を持ち、通常A/通常B/天国準備=10回、特殊=5回、天国=3回、超天国=1回。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_RESET_NUMERIC_DATA_AVAILABLE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時はボーナス間777G天井のゲーム数をRESET。
- ARTスルー回数に関わるモードを再抽選し、上位モードへ大幅優遇。
- 内部状態を再抽選。LOWは選択されず、MID25% / HI50% / SP25%。
- レスQポイントは液晶表示上0ptだが、内部的に2500ptまたは5000ptから開始。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 設定変更しない据え置きは、ボーナス間天井ゲーム数、モード、内部状態、レスQポイントを引き継ぐ扱い。
- 純電源OFF→ONの直接比較資料でこれら4項目すべてCARRYOVERが明記されるため、据え置き時の主要朝一進捗も同系統として保持。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE; ANALYSIS_DERIVED_CONSISTENT_FOR_HOLDOVER

### powerCycleBehavior
- 電源OFF→ONのみ: 天井ゲーム数CARRYOVER。
- モードCARRYOVER。
- 内部状態CARRYOVER。
- レスQポイントCARRYOVER。
- 液晶ステージは当時解析で「現在調査中」のため `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電断: CARRYOVER。

### ceilingAfterReset
- 通常ゲーム数天井: ボーナス間777G。
- 設定変更専用の固定短縮ゲーム数天井は `NONE_CONFIRMED_AFTER_RESEARCH`。777Gゲーム数天井自体はリセットされ0Gから再計測。
- 一方、スルー回数天井は設定変更時のモード再抽選により大きく優遇される。

### modeAfterReset
- 設定変更時に再抽選。
- 通常A / 通常B / 天国準備 / 特殊 / 天国 / 超天国の6モード。
- 設定変更時は特殊以上が約90%、天国以上が60%以上となる解析値で、朝一ART初当たりが優遇される。

### stateAfterReset
- 設定変更時: LOW 0% / MID 25% / HI 50% / SP 25%。高状態（HI+SP）は75%。
- 電源OFF→ON: CARRYOVER。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後はスルー回数モードが強く、特殊以上約90%。特殊なら最大5回、天国なら最大3回、超天国なら1回でART当選となる構造。
- 解析資料は設定変更時「約90%が5回以内のボーナスでARTに当選」と整理。
- 内部状態はHI+SP合計75%で朝一高状態優遇。
- レスQポイントは内部2500pt 75% / 5000pt 25%から開始し、CZ10000pt到達までの距離が通常0pt相当より短い。

### resetPenalties
- 前日のボーナス間天井ゲーム数、ARTスルー進捗、内部状態、レスQポイントは設定変更で消失するため、前日深いハマリや高ポイントを狙う宵越し客には不利。
- その他の主要な設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一レスQ表示は設定変更でも純電断でも見た目上0になる資料があり、表示0のみでは変更確定に使えない。
- レスQポイントの獲得表示法則から内部2000pt以上/5000pt以上を推測できるケースがあり、設定変更由来の内部ポイント優遇を事後推測する材料にはなり得るが確定変更判別ではない。
- 機種固有の確定的ガックン/初期出目/ランプ判別は、機種名表記揺れ・ガックン・朝一・変更判別で再探索後も直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
#### レスQポイント振り分け
| 内部開始pt | 振り分け |
|---:|---:|
| 2500pt | 75% |
| 5000pt | 25% |

#### 設定変更時内部状態
| 状態 | 振り分け |
|---|---:|
| LOW | 0% |
| MID | 25% |
| HI | 50% |
| SP | 25% |

#### 設定変更時モード振り分け
- 通常A 3.1% / 通常B 3.1% / 天国準備 6.3% は全設定共通。
| 設定 | 特殊 | 天国 | 超天国 |
|---:|---:|---:|---:|
| 1 | 25.0% | 56.3% | 6.3% |
| 2 | 25.0% | 56.3% | 6.3% |
| 3 | 21.9% | 56.3% | 9.4% |
| 4 | 15.6% | 62.5% | 9.4% |
| 5 | 12.5% | 62.5% | 12.5% |
| 6 | 12.5% | 62.5% | 12.5% |
- 丸め表示のため行合計が100.0%からわずかにずれる場合がある。平均・再正規化はしない。

## dataQualityNotes
- SANKYO公式機種コレクションが販売名・型式名・設定別BIG/IMPACT CHANCE/合算/ART確率とゲーム構造を直接掲載しており、性能コアの主要確率は公式優先。
- 機械割はHAZUSE、ちょんぼりすた、期待値見える化等の複数解析で一致。
- 50枚ベース約33G、ART単体約1.5枚/G、ボーナス込み約2.0枚/Gも複数解析で一致。
- 一撃2017-03-14更新の設定変更/電源OFF-ON直接比較をresetBehaviorの主根拠とし、ちょんぼりすた/HAZUSEで数値補完・照合。
- ちょんぼりすたの古い朝一表には天井/モードが「調査中」と残る一方、一撃の後発更新ではリセット/引継ぎが確定表記されている。更新時点差と判断し、数値CONFLICTにはしない。

## conflicts
- `NONE_MATERIAL_CONFIRMED`。

## missingFields
- power-cycle LCD stage behavior: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific deterministic gakkun/initial-reel/lamp reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- setting-change fixed shortened game-count ceiling: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の通常時全ランク/状態移行・小役別抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / SANKYOオンライン博物館 機種コレクション: https://www.sankyo-fever.jp/collection/885/
- ANALYSIS_DB / HAZUSE 基本・天井・設定推測: https://hazuse.com/machine/pachislot/6S1325/
- ANALYSIS_DB / HAZUSE 止め時・狙い目: https://hazuse.com/machine/pachislot/6S1325/genre/205/
- ANALYSIS / 一撃 天井・設定変更（2017-03-14更新）: https://1geki.jp/slot/s_eva_syori/3/
- ANALYSIS / 一撃 機種トップ: https://1geki.jp/slot/s_eva_syori/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/bisty-slot/30833/
- ANALYSIS / 期待値見える化: https://slotjin.com/zone/eva-shouri/
- ANALYSIS / K-Navi: https://p-kn.com/slot/2727/
- RETROSPECTIVE_ANALYSIS / Pachinavi: https://pachinavi.net/machines/eva-shouri-e-negai/

## retrievalHistory
- identity/release: `ヱヴァンゲリヲン・勝利への願い / エヴァンゲリオン 勝利への願い / ヱヴァンゲリヲン・勝利への願いS / 6S1325 / ビスティ / 導入日 / 2017年2月20日`。
- performance: `機械割 / BIG / IMPACT CHANCE / ART初当たり / 50枚 / コイン持ち / 純増 / 150枚 / 60枚 / IMPACT RUSH`。
- reset: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / スルー回数 / モード振り分け / 状態移行 / レスQポイント / ガックン / 変更判別`。
