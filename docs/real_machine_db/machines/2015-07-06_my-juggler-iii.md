# マイジャグラーIII

machineName: マイジャグラーIII
manufacturer: 北電子
releaseDate: 2015-07-06
releaseDatePrecision: exact_hall_start_with_conflict
releaseDateNote: K-Navi機種ページ/2015年7月導入カレンダーは全国一斉導入開始2015-07-06。HAZUSEおよび複数後年解析資料は2015-07-21を掲載するためCONFLICTとして両方保持し、本線キュー上はK-Naviの全国一斉導入日2015-07-06をcanonicalに採用。
generation: 5号機
systemType: ノーマル / 完全告知 / BIG+REG
formalModelName: マイジャグラーIII KD
inspectionNumber: 5S0094
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_CONFLICTS

## payoutRateBySetting

メーカー発表値として流通する系列:

| 設定 | 機械割 |
|---:|---:|
| 1 | 95.7% |
| 2 | 97.9% |
| 3 | 99.9% |
| 4 | 102.8% |
| 5 | 105.3% |
| 6 | 109.4% |

- K-Navi、当時/後年解析資料で一致。
- チェリー狙い/フル攻略時は別定義の高い系列が公開されているため、メーカー発表値と混ぜない。
- チェリー狙い: 96.68 / 98.99 / 101.04 / 103.94 / 106.55 / 110.62%。
- フル攻略: 97.35 / 99.71 / 101.98 / 105.13 / 110.93 / 112.48%。
- 一部資料の96.6/99.0/101.2/104.3/107.1/111.6%はシミュレート条件の異なる別系列として扱い、メーカー発表値へ統合しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_CONTROL

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/287.4 | 1/431.2 | 1/172.5 |
| 2 | 1/282.5 | 1/364.1 | 1/159.1 |
| 3 | 1/273.1 | 1/341.3 | 1/151.7 |
| 4 | 1/264.3 | 1/292.6 | 1/138.9 |
| 5 | 1/252.1 | 1/277.7 | 1/132.1 |
| 6 | 1/240.9 | 1/240.9 | 1/120.5 |

- K-Navi、複数解析資料で一致。後年DBにREG1/431.1、合算設定3 1/151.8等の丸め差あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

チェリー狙い時の比較可能値:

| 設定 | G/50枚 |
|---:|---:|
| 1 | 約35.0G |
| 2 | 約35.2G |
| 3 | 約35.4G |
| 4 | 約35.6G |
| 5 | 約35.8G |
| 6 | 約36.4G |

- ジャグラー系解析集約でマイジャグラーI〜IV共通系列として掲載。
- 一般的な概算資料の「約35〜37G」と整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FAMILY_SPEC

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。AT/ART純増の概念なし。

## basicPayout

- BIG: **約312枚**（345枚を超える払い出しで終了）。
- REG: **約104枚**（105枚を超える払い出しで終了）。
- P-WORLD、K-Navi、複数解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 完全告知ノーマルタイプ。AT/ART/CZ、ゲーム数解除モード、高確/低確状態、ゲーム数天井は非搭載。
- ボーナスは毎ゲームの抽選によるため、AT機型の朝一モード狙い/天井狙いは `NOT_APPLICABLE`。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_UNVERIFIED_PURE_POWER_CYCLE
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更でAT/ART機型のゲーム数天井・モード・内部高確状態が再抽選される構造は `NOT_APPLICABLE`。
- 朝一1G目のリール始動時にガックンが発生することがあり、当時のマイジャグラーIII攻略資料で設定変更推測に利用されている。
- ボーナス後100G以内のゾロ目G BIGで発生するスペシャルBGMの成立条件に関わる内部経過は、設定変更でリセットされるとする解析資料がある。
- confidence: ANALYSIS_SINGLE_PERIOD_FOR_RESET_DETECTION

### carryOverBehavior

- 天井G/モード/内部高確状態は非搭載のため、それらの引継ぎは `NOT_APPLICABLE`。
- 前日ボーナス後からの内部経過が残る場合、朝一に前日ヤメG数を加味した「100G以内のゾロ目G」でBIG成立時にスペシャルBGMが流れることがあり、据え置き推測材料とされる。
- ただしホール側の事前消化、ボーナス消化等で条件は崩せるため確定契約として扱わない。

### powerCycleBehavior

- 「マイジャグラーIII / マイジャグラー3 / マイジャグラーIII KD / 5S0094 / 北電子」と「電源OFF ON / 電断 / 電源オンオフ / 朝一 / 据え置き / 設定変更」を組み替えて再探索したが、**設定変更を伴わない純電源OFF→ONのみ**を独立条件とした本機固有の内部契約は固定できなかった。
- `UNVERIFIED_AFTER_RESEARCH`。
- 後継マイジャグラーV等の6号機仕様は流用しない。

### gameCounterReset

- ゲーム数天井/規定G解除カウンタは非搭載のため `NOT_APPLICABLE`。
- データカウンタ表示と内部ボーナス後経過/BGM条件を混同しない。

### ceilingAfterReset

- 天井自体が非搭載。
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset

- AT/ART型の通常A/B・天国等のモード非搭載。
- `NOT_APPLICABLE_NO_GAME_MODE`。

### stateAfterReset

- AT/ART型の低確/高確/超高確状態非搭載。
- `NOT_APPLICABLE_NO_INTERNAL_STATE`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更そのものによる短縮天井、朝一高確、優遇モード、初当たり優遇などの出玉上のリセット恩恵は `NONE_CONFIRMED / STRUCTURALLY_NOT_APPLICABLE`。
- 客側の主要価値は「設定が変更された可能性」をガックン/BGM条件から推測する点。

### resetPenalties

- 設定変更専用の出玉上の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日から継続していたBGM変化条件がリセットされる点は変更判別上の変化であり、出玉ペナルティとは扱わない。

### resetDetection

- **ガックン**: 朝一1G目のリール始動でブレが出れば設定変更の有力推測材料。当時の本機攻略資料で有効とされる。
- ただし「同一設定打ち直し」でも設定変更操作をすればガックンし得る。またホール側の1G回し/リール対策で消せるため、ガックン=設定UP、非ガックン=据え置きとは断定しない。
- **BGM条件**: ボーナス後100G以内のゾロ目GでBIG成立時にスペシャルBGMが流れる仕様を利用し、前日ヤメG数との合算で条件を満たしてBGM変化すれば据え置き濃厚、変化しなければ設定変更濃厚とする解析がある。ただし対策・前処理の影響を受ける。
- confidence: ANALYSIS_SINGLE_PERIOD_PLUS_PERIOD_PRACTICE_CORROBORATION

### numericResetData

- 固定短縮天井G: `NOT_APPLICABLE`。
- リセット時モード振り分け: `NOT_APPLICABLE`。
- リセット時高確移行率: `NOT_APPLICABLE`。
- 朝一初当たり優遇率: `NONE_CONFIRMED`。
- 朝一比較可能数値として、設定変更専用の当選率/恩恵発生率は確認できない。

## conflicts

1. `CONFLICT_RELEASE_DATE_2015_07_06_VS_2015_07_21`
   - K-Navi機種ページ/2015年7月導入カレンダー: **2015-07-06**（カレンダーは全国一斉導入開始日と明記）。
   - HAZUSE・複数解析/回顧資料: **2015-07-21**。
   - 本線キューではK-Naviの具体的「全国一斉導入開始」表記をcanonicalに採用するが、07-21系列を削除・平均しない。
2. `FORMAL_MODEL_NAME_CONFLICT_KD_VS_KK`
   - HAZUSE: **マイジャグラーIII KD / 検定番号5S0094**。
   - 一部後年攻略資料: **マイジャグラーIII KK** と記載。
   - ホール実績表記・中古実機表記でもIIIKDを確認できるためKDをcanonicalとし、KKは競合表記として残す。
3. `PAYOUT_DEFINITION_MULTIPLE_SERIES`
   - メーカー発表系列95.7〜109.4%、チェリー狙い系列96.68〜110.62%、フル攻略系列97.35〜112.48%は打ち方定義差。平均しない。

## missingFields

- 設定変更を伴わない純電源OFF→ONのみの本機固有内部契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の出玉上の公開朝一恩恵数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. K-Navi「マイジャグラーIII」 — https://p-kn.com/slot/2291/
   - 2015-07-06ホール導入開始、BIG/REG/合算、メーカー発表機械割、払い出し条件。
   - confidence: ANALYSIS_HIGH
2. K-Navi 2015年7月導入カレンダー — https://p-kn.com/calendar/201507/
   - 2015-07-06枠、全国一斉導入開始日表記。
   - confidence: INDUSTRY/DB
3. HAZUSE「マイジャグラーⅢ」 — https://hazuse.com/machine/pachislot/5S0094/
   - 型式マイジャグラーIII KD、検定番号5S0094、導入2015-07-21。
   - confidence: ANALYSIS_HIGH
4. P-WORLD「マイジャグラーIII」 — https://www.p-world.co.jp/machine/database/7753
   - 5号機ノーマル/完全告知、BIG約312枚、REG約104枚。
   - confidence: INDUSTRY_DB
5. juggler7「マイジャグラー3」 — https://juggler7.com/my3/
   - ボーナス確率、打ち方別機械割、約312/104枚、ガックン、BGM据え置き/変更判別、天井なし。
   - confidence: ANALYSIS_SINGLE_PERIOD
6. パチナビ 設定判別 — https://pachinavi.net/machines/my-juggler-iii/settei/
   - メーカー発表/チェリー狙い/フル攻略の機械割定義別系列、ボーナス確率。
   - confidence: ANALYSIS_SECONDARY
7. SLOT HACK ジャグラーコイン持ち一覧 — https://slothack.net/matome/17149/
   - マイジャグラー系チェリー狙い時50枚ベース35.0〜36.4G。
   - confidence: ANALYSIS_SECONDARY
8. 同一設定打ち直し実戦資料 — https://pachi778.com/myjuggler-post4.html
   - 同一設定打ち直し/1G回しによるガックン判別対策の実例。
   - confidence: PERIOD_PRACTICE_SECONDARY
