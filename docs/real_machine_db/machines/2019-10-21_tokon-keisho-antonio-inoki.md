# 闘魂継承 アントニオ猪木という名のパチスロ機

recordNo: 1313
machineName: 闘魂継承 アントニオ猪木という名のパチスロ機
machineNameVariants: 闘魂継承アントニオ猪木 / 猪木6号機 / S闘魂継承アントニオ猪木
manufacturer: オリンピア
formalModel: S闘魂継承アントニオ猪木L3
certificationNumber: 9S0824
releaseDate: 2019-10-21
generation: 6号機
systemType: AT / ベルナビ回数管理型AT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.6% |
| 2 | 98.7% |
| 3 | 100.2% |
| 4 | 104.1% |
| 5 | 108.8% |
| 6 | 114.9% |

遊技日本、HAZUSE、2-9伝説、スロパチくえすと、当時試打動画記載値で整合。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY_CORROBORATED

## initialHitBySetting

| 設定 | CZ「闘魂GP」 | AT「闘魂CHANCE」 |
|---|---:|---:|
| 1 | 1/442.6 | 1/680.6 |
| 2 | 1/418.8 | 1/646.9 |
| 3 | 1/380.0 | 1/597.5 |
| 4 | 1/324.5 | 1/513.0 |
| 5 | 1/274.1 | 1/433.9 |
| 6 | 1/215.2 | 1/340.6 |

複数当時解析・試打資料で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- canonical: 約51G/50枚。
- 別当時解析には約51〜55G/50枚という幅表記あり。定義/算出条件差の可能性があるため平均化せず注記として保持。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「闘魂CHANCE」: 約4.0枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「闘魂CHANCE」: ベルナビ回数管理型。
- ベルナビ平均: 約17.3回。
- AT終了後は原則50Gの「超通常時」へ移行し、ATストック抽選を行う。
- ATの細かなストック振り分け・6択抽選等は実機完全再現用のため本DBでは収集対象外。

## modeSpecificMinimumData

- 通常時はCZ「闘魂GP」経由でAT「闘魂CHANCE」を目指す構造。
- CZ天井: 通常時700G+前兆で闘魂GP当選。AT確定天井ではない。
- 有利区間移行時に闘魂GP天井を100G / 300G / 700Gから抽選。
- 100G天井は100G到達後、レア小役成立を契機に発動する仕様。
- 300G天井振り分けは全設定共通12.5%。
- 100G天井振り分けは設定差あり（numericResetData参照）。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_STATE_CONTRACT
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は天井ゲーム数RESET。
- 設定変更後は有利区間移行時の天井抽選対象となる資料を確認。
- 設定変更直後の内部状態（通常/高確）の再抽選契約、液晶開始ステージの確定資料は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

信頼度: ANALYSIS_HIGH for game counter / ANALYSIS_SINGLE for advantageous-section wording / UNVERIFIED for state-stage details

### carryOverBehavior

- 据え置き時は設定変更による天井リセットが発生しないため、内部天井進行はCARRY_OVERとして扱う。
- ただし本機固有資料で「据え置き」と明記したモード/内部状態の全契約は今回固定できず、`PUBLIC_DIRECT_CARRYOVER_STATE_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- 表示上の100G毎演出だけで設定変更を確定できない。

信頼度: ANALYSIS_HIGH for ceiling continuity / UNVERIFIED for full state contract

### powerCycleBehavior

- 純電源OFF→ON時は天井G数を引き継ぐ。
- 内部状態・液晶ステージは一撃の当時解析でも「現在調査中」で、別系統を再探索しても固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。

信頼度: ANALYSIS_HIGH for game counter / UNVERIFIED for state-stage details

### gameCounterReset

- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: CARRY_OVER。
- CZ天井は最大700G+前兆。AT確定ではなくCZ当選。

### ceilingAfterReset

- 「設定変更専用の固定短縮天井」は確認できない。
- 設定変更後は有利区間移行時の通常契約として100G / 300G / 700G天井を抽選。
- 100G天井振り分けには設定差があり、設定1 6.3%〜設定6 25.0%。
- 300G天井は全設定共通12.5%。
- これらは設定変更だけの専用抽選ではなく、有利区間移行時共通の公開値として区別する。

### modeAfterReset

- 有利区間移行時に天井ゲーム数を再設定することは確認。
- 設定変更専用の朝一モード名・朝一専用モード振り分けは `PUBLIC_RESET_EXCLUSIVE_MODE_TABLE_NOT_FOUND_AFTER_RESEARCH`。
- CZ内部モードや通常時全モードの詳細テーブルは物差し用途外。

### stateAfterReset

- 設定変更時の内部状態は当時一撃資料でも「現在調査中」。
- 機種名、正式型式、メーカー名に「設定変更 / リセット / 朝一 / 状態 / 高確 / 据え置き / 電源OFF ON」を組み替え、当時解析・後年整理資料を横断したが高信頼値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- 有利区間移行時に100G / 300G / 700GのCZ天井を抽選。
- 設定変更後も有利区間移行時抽選の対象とする解析を確認しており、設定変更後は新しい有利区間契約へ入る扱い。
- 通常時は有利区間ランプが点灯しないタイプとする朝一検証資料があり、朝一ランプ消灯だけでは変更判別不可。
- 据え置き/純電断時の有利区間ランプ状態だけでの確定判別契約は固定できない。

### resetBenefits

- 設定変更後は天井ゲーム数がRESETされ、有利区間移行時の100G / 300G / 700G天井抽選を新たに受ける。
- 設定1でも100G天井6.3%、設定6では25.0%。300G天井は全設定12.5%。
- 朝一即前兆から約25G前後でのゲーム数契機CZ当選は、前日状況次第でリセット推測材料になるとする実戦検証あり。ただし確定判別ではない。

### resetPenalties

- 天井ゲーム数がRESETされるため、前日のハマリG数は引き継がれず、宵越し天井狙いの進行は失われる。
- これ以外の設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 通常時に有利区間ランプが点灯しないタイプのため、朝一ランプ消灯だけでは変更判別不可。
- 100Gごとの「怒ポイント獲得演出」は設定変更時/電源OFF→ON時の双方で発生し得るため、演出発生だけでは変更濃厚にならない。
- 前日が即ヤメ以外で、朝一即前兆からゲーム数契機で約25G前後のCZ当選となればリセット推測材料。ただし強レア役等の自力当選と競合するため `STRONG_CLUE_NOT_DETERMINISTIC`。
- 本機固有のガックン発生条件・発生率を、検索語と資料系統を変えた再探索でも固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

有利区間移行時共通の100G天井振り分け（設定変更専用ではない）:

| 設定 | 100G天井 |
|---|---:|
| 1 | 6.3% |
| 2 | 7.0% |
| 3 | 7.8% |
| 4 | 10.2% |
| 5 | 16.4% |
| 6 | 25.0% |

- 300G天井: 全設定共通12.5%。
- 残りは700G天井側となるが、元資料の公開表を優先し、本DBでは推算値を新規正値として作らない。
- 朝一即前兆の実戦検証目安: ゲーム数契機なら約25G前後が中心とする攻略検証あり。メーカー公表値ではなく `ANALYSIS_SINGLE_OBSERVATIONAL_CLUE`。
- 設定変更専用の0〜特定G以内実CZ/AT当選率、ガックン率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

`闘魂継承 アントニオ猪木という名のパチスロ機 / 闘魂継承アントニオ猪木 / S闘魂継承アントニオ猪木L3 / オリンピア` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 高確 / ガックン / 有利区間 / 有利区間ランプ` を組み合わせ、一撃、HAZUSE、2-9伝説、スロパチくえすと、期待値見える化、当時試打資料、業界記事、後年解析DBを横断した。

## qualityNotes / conflicts

- 導入日は業界記事・複数解析・HAZUSEで2019-10-21一致。
- 型式 `S闘魂継承アントニオ猪木L3`、検定番号 `9S0824` はHAZUSEで確認。
- ベースは複数資料が約51G/50枚、別当時整理資料は約51〜55G/50枚。約51Gをcanonicalとし幅表記を定義差候補として保持。
- 一撃は設定変更時/電源OFF→ON時の「状態」「液晶ステージ」を当時時点で調査中としており、その後の別系統再探索でも直接契約を高信頼に固定できなかったため推測補完しない。
- 有利区間移行時天井振り分けは設定変更専用ではない。朝一数値として利用可能だが、通常の有利区間移行時にも適用される共通値として分離した。

## sources

取得日: 2026-09-11

1. 遊技日本 — 10/21導入 闘魂継承 アントニオ猪木という名のパチスロ機
   - https://yugi-nippon.com/pachinko-news/post-30527/
   - 2019-10-21全国導入、オリンピア製、6号機AT、純増約4.0枚/Gを確認。
   - reliability: INDUSTRY / CONTEMPORARY
2. HAZUSE — 闘魂継承 アントニオ猪木という名のパチスロ機
   - https://hazuse.com/machine/pachislot/9S0583/genre/201/
   - 型式S闘魂継承アントニオ猪木L3、検定番号9S0824、導入2019-10-21、出玉率レンジを確認。
   - reliability: ANALYSIS_HIGH / DATABASE
3. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_tk_inoki/3/
   - 700G+前兆CZ天井、設定変更時天井RESET、純電源OFF→ON時天井CARRY_OVER、100G毎演出は双方で発生するため判別不可を確認。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY
4. HAZUSE — 設定推測
   - https://hazuse.com/machine/pachislot/9S0583/genre/208/
   - 有利区間移行時100/300/700G天井、100G天井設定別6.3〜25.0%、300G天井12.5%を確認。
   - reliability: ANALYSIS_HIGH
5. 2-9伝説 — 天井恩恵・スペック解析
   - https://2-9densetsu.com/inoki6/
   - 設定別CZ/AT/機械割、700G CZ天井、設定変更時天井G RESETを照合。
   - reliability: ANALYSIS_HIGH / CONTEMPORARY
6. スロパチくえすと — 設定差まとめ
   - https://www.slopachi-quest.com/article/toukonnkeishou-settei/
   - 約51G/50枚、純増約4.0枚/G、設定別CZ/AT/機械割を照合。
   - reliability: ANALYSIS_HIGH
7. 期待値見える化 — 朝一リセット挙動
   - https://slotjin.com/slot/inoki-reset/
   - 通常時有利区間ランプ非点灯型、朝一即前兆約25G前後をリセット推測材料とする検証を確認。
   - reliability: ANALYSIS_SINGLE / OBSERVATIONAL
8. しまんくすチャンネル — 遊技解説/試打資料
   - https://www.youtube.com/watch?v=nZ1u-14j5rQ
   - 10/21週導入予定、純増4.0枚/G、約51G/50枚、設定別CZ/AT/出玉率、平均ベルナビ約17.3回を照合。
   - reliability: INDUSTRY_ADJACENT / CONTEMPORARY DEMO
9. スロット解析情報~すろかい~ — S闘魂継承アントニオ猪木解析
   - https://slotkaiseki.hatenablog.com/entry/inoki
   - 導入2019-10-21、純増4枚、約51〜55G/50枚、設定別スペックを照合。
   - reliability: ANALYSIS_SINGLE / CONTEMPORARY

## missingFields

- 設定変更直後の内部状態（通常/高確）の直接振り分け: UNVERIFIED_AFTER_RESEARCH
- 据え置き時のモード/内部状態を純電断と分離した全契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の内部状態・液晶開始ステージ: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用のCZ/AT実当選率（有利区間移行時共通天井振り分け以外）: UNVERIFIED_AFTER_RESEARCH

## conflicts

- `BASE_GAMES_PER_50_REPRESENTATION_APPROX_51_VS_APPROX_51_TO_55`: 多数資料の約51G/50枚に対し、一部当時解析は約51〜55G/50枚。平均化せずcanonical約51Gと幅表記を併記。

status: COMPLETE_CORE
