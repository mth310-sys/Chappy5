# S 地獄少女 あとはあなたが決めることよ

No: 1338
machineName: S 地獄少女 あとはあなたが決めることよ
machineNameVariants: S地獄少女 あとはあなたが決めることよ / 地獄少女3 あとはあなたが決めることよ / S地獄少女 宵伽 あとはあなたが決めることよ
manufacturer: 藤商事
releaseDate: 2020-03-02
formalModelName: S地獄少女 あとはあなたが決めることよFD
certificationNumber: 9S1436
generation: 6号機
systemType: AT / 擬似ボーナス＋セット数管理AT

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.44% |
| 2 | 99.01% |
| 3 | 101.12% |
| 4 | 104.12% |
| 5 | 109.27% |
| 6 | 114.99% |

- 複数解析資料および発表会記事の設定6値114.99%と整合。
- reliability: INDUSTRY_AND_ANALYSIS_HIGH

## initialHitBySetting
| 設定 | ボーナス合算 | AT初当たり | 初当たり合算 |
|---|---:|---:|---:|
| 1 | 1/398.5 | 1/795.9 | 1/303.3 |
| 2 | 1/378.3 | 1/733.6 | 1/286.7 |
| 3 | 1/344.2 | 1/652.4 | 1/260.5 |
| 4 | 1/294.2 | 1/560.8 | 1/227.6 |
| 5 | 1/255.6 | 1/445.5 | 1/192.5 |
| 6 | 1/228.2 | 1/366.6 | 1/167.0 |

- 藤商事公式はボーナス合算・AT確率を公開。初当たり合算は当時解析資料で補完。
- reliability: OFFICIAL_AND_ANALYSIS_HIGH

## baseGamesPer50
- 約50.5G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- 約3.0枚/G。
- 藤商事発表資料・パチビー・HAZUSE・当時解析で一致。
- reliability: INDUSTRY_HIGH

## basicPayout
- 怨み晴らしボーナス: 約90枚。
- きくり姫ボーナス: 約40枚。
- AT「地獄廻廊」: 1セット30G+α、純増約3.0枚/G。
- reliability: INDUSTRY_HIGH

## modeSpecificMinimumData
- 高頻度CZ「あとはあなたが決めることよ」を経由してボーナス/ATを目指す。
- AT「地獄廻廊」はセットストック型、1セット30G+α。
- 通常時は有利区間800G到達時につぐみフリーズ抽選。非当選時は有利区間リセット後、128G消化でボーナス超高確へ移行。
- 有利区間移行後128G消化でもボーナス超高確へ移行する公開解析あり。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井ゲーム数、CZスルー回数、内部状態をRESET。
- 非有利区間へ移行し、有利区間ランプは消灯。
- 設定変更後は有利区間移行から128G消化でボーナス超高確状態へ移行し、以後は約1/25でボーナス当選とする当時解析が複数一致。
- 液晶ステージはカフェ/電気街の50:50。
- 時計は白発光。

### carryOverBehavior
- 据え置きでは天井ゲーム数、CZスルー回数、内部状態、有利区間ランプ状態を引き継ぐ。
- 前兆中据え置き時は朝一「朱の河原」に滞在している可能性あり。

### powerCycleBehavior
- 純電源OFF→ONでは天井ゲーム数、CZスルー回数、内部状態をCARRY_OVER。
- ステージ表示自体はカフェ/電気街へ移るが、あい探索/CZ/ボーナス/AT前兆中は朱の河原となる可能性あり。
- 時計は白発光。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 通常時は有利区間800G到達でつぐみフリーズ抽選。
- 非当選時は有利区間をリセットし、その後128G消化でボーナス超高確状態へ移行。
- 設定変更後は800Gルートではなく、有利区間移行から128G消化でボーナス超高確へ移行するため、朝一の実質的な大幅短縮挙動として保存。
- 超高確中は約1/25でボーナス当選。

### modeAfterReset
- 設定変更後に朝一専用モード名として固定された公開モード振り分け表は確認できず。
- ただし設定変更/有利区間リセット直後は128G経過後にボーナス超高確へ移る専用挙動が公開されている。
- 通常時全モード移行率は物差し用途外のため収集しない。

### stateAfterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- CZスルー回数も同様に変更時RESET、据え置き/電断時CARRY_OVER。

### advantageousSectionReset
- 設定変更: RESETし非有利区間へ移行。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- AT終了後、800G到達時のつぐみフリーズ非当選時などでも有利区間リセット契機あり。

### resetBenefits
- 有利区間移行後128Gでボーナス超高確へ移行。
- 超高確中は約1/25でボーナス当選。
- 非有利区間中のレア役成立時はボーナス確定とする当時攻略あり。

### resetPenalties
- 実戦値系解析では、有利区間リセット直後は1〜128Gの初当たりが重く、低設定ではリセット直後0Gからの期待値はマイナス評価。
- これはメーカー公表性能値ではなく攻略実戦値であり、朝一客AI用の補足に限定する。
- 前日天井/CZスルー進行は設定変更で消去されるため、宵越し狙いには不利。

### resetDetection
- 通常時は有利区間ランプが基本的に点灯。
- 朝一ランプ点灯 = 据え置き濃厚、消灯 = 設定変更濃厚とする当時解析あり。
- ただし店側の対策、前日最終が非有利区間など例外があるため確定扱いしない。
- 朝一の時計は設定変更/電断とも白発光で判別不能。
- ステージも双方カフェ/電気街が基本で、ステージ単独では判別不能。
- `S地獄少女 / 地獄少女3 / S地獄少女 あとはあなたが決めることよ / 型式FD / 9S1436 / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / 状態 / ガックン / 有利区間` を組み替えて再探索したが、本機固有のリールガックン発生条件・発生率を直接固定できる資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更後: 有利区間移行後128Gでボーナス超高確へ移行。
- ボーナス超高確中: 約1/25でボーナス当選。
- 通常時: 有利区間800Gでつぐみフリーズ抽選。
- 800G時つぐみフリーズ当選率（残り図柄数別）: 4つ 3.9% / 3つ 7.0% / 2つ 28.9% / 1つ 53.9%。
- 800G時非当選後: 有利区間リセット → 128G後ボーナス超高確。
- 設定変更専用のモード振り分け数値: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11に `S地獄少女 あとはあなたが決めることよ / 地獄少女3 / S地獄少女宵伽 / S地獄少女 あとはあなたが決めることよFD / 9S1436 / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / CZスルー / モード / 内部状態 / 有利区間 / ランプ / 時計 / ガックン` を組み替え、藤商事公式、パチビー、HAZUSE、1geki、ちょんぼりすた、期待値見える化、K-Navi、パチマガスロマガ等を横断。設定変更/据え置き/純電断の主要契約は複数解析で一致。ガックンと設定変更専用モード振り分けは十分な再探索後も固定できず推測補完していない。

## sources
取得日: 2026-09-11

1. 藤商事公式 — S 地獄少女 あとはあなたが決めることよ
   - https://www.fujimarukun.co.jp/products/s_jigoku3/
   - 設定別ボーナス合算・AT確率を確認。
   - reliability: OFFICIAL
2. パチビー — S 地獄少女 あとはあなたが決めることよ
   - https://www.pachibee.jp/machines/about/220010009
   - 導入日2020-03-02、AT純増約3.0枚/G、怨み晴らし約90枚、きくり姫約40枚、AT1セット30G+αを確認。
   - reliability: INDUSTRY_DATABASE
3. パチビー発表会記事 — 新機種発表会
   - https://www.pachibee.jp/pparticles/view/1225
   - 設定6機械割114.99%、純増3.0枚/G、AT30G、2020年3月導入予定を確認。
   - reliability: INDUSTRY
4. HAZUSE — S地獄少女 あとはあなたが決めることよ
   - https://hazuse.com/machine/pachislot/9S1436/
   - 型式 `S地獄少女 あとはあなたが決めることよFD`、検定番号 `9S1436`、出玉率97.44〜114.99%、導入2020-03-02、設定変更時128G超高確、電断時表示挙動を確認。
   - reliability: ANALYSIS_HIGH
5. HAZUSE — 天井/設定変更
   - https://hazuse.com/machine/pachislot/9S1436/genre/207/
   - 設定変更後128G→超高確、通常800Gつぐみフリーズ抽選、残り図柄別当選率、設定変更/電断時ステージ・時計を確認。
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた — 地獄少女3解析
   - https://chonborista.com/slot/fuji-slot/102559/
   - 約50.5G/50枚、純増3.0枚/G、設定別ボーナス/AT/機械割、800G天井を照合。
   - reliability: ANALYSIS_HIGH
7. 期待値見える化 — 朝一リセット挙動
   - https://slotjin.com/slot/jigoku3-reset/
   - 設定変更時: 天井/CZスルー/内部状態RESET・ランプ消灯、電断据え置き時: 引継ぎ、通常時ランプ常時点灯、朝一ランプ判別、有利区間リセット後128G挙動を確認。
   - reliability: ANALYSIS_HIGH
8. K-Navi — S地獄少女 あとはあなたが決めることよ
   - https://p-kn.com/slot/3400/
   - ホール導入2020-03-02、基本スペックを照合。
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ — S地獄少女 宵伽 あとはあなたが決めることよ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/30/a.php
   - 6号機AT、純増約3枚/G、高頻度CZ構造を照合。
   - reliability: ANALYSIS_HIGH
10. 1geki — 2020年3月新台スケジュール
   - https://1geki.jp/newmachinecalender/202003/
   - 2020-03-02群6機種の一つとして本機を確認。
   - reliability: ANALYSIS_DATABASE

## missingFields
- 本機固有のリールガックン発生条件/発生率: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 現時点で性能コアの主要数値に重大CONFLICTなし。
- 朝一有利区間ランプ判別は例外条件があるため確定判別ではなく「濃厚」として保持。

## status
COMPLETE_CORE_RESET_V07
