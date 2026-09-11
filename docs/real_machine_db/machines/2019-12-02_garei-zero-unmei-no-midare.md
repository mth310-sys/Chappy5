# 喰霊-零- 運命乱～うんめいのみだれ～

recordNo: 1318
machineName: 喰霊-零- 運命乱～うんめいのみだれ～
machineNameVariants: 喰霊-零- 運命乱 / 喰霊零2 / 喰霊2 / S喰霊零 運命乱JJ
manufacturer: JFJ
formalModel: S喰霊零 運命乱JJ
certificationNumber: 9S0621
releaseDate: 2019-12-02
generation: 6号機
systemType: AT / 周期CZ→疑似ボーナスAT / 引き戻しゾーン

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.2% |
| 3 | 100.9% |
| 4 | 102.9% |
| 5 | 105.2% |
| 6 | 108.8% |

HAZUSEで設定別値を確認。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/349.7 |
| 2 | 1/315.7 |
| 3 | 1/290.3 |
| 4 | 1/252.1 |
| 5 | 1/213.1 |
| 6 | 1/168.3 |

JFJ公式は丸め値として 1/349 / 1/315 / 1/290 / 1/252 / 1/213 / 1/168 を掲載。HAZUSEの精密値と整合するため、精密値をcanonicalとする。

信頼度: OFFICIAL + ANALYSIS_HIGH

## baseGamesPer50

- 設定1～6: **約49.9～51.4G/50枚**。
- 朝一・天井攻略資料では代表値 **約49.9G/50枚**。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナスAT: **約4.0枚/G**。
- 引き戻しゾーン「共鳴ZONE零」等のナビ有り微増区間: **約0.8枚/G**。
- 定義の異なる2区間を単一純増へ混ぜない。

信頼度: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 赤7 喰霊BONUS: **20G / 約80枚**。
- 青7 喰霊BONUS: **30G / 約120枚**。
- EPISODE BONUS: **30G / 約120枚**。
- 疑似ボーナス後は引き戻しゾーンへ移行するゲーム性。

信頼度: OFFICIAL + ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は零カウンター周期でCZを抽選。
- 零カウンター1周期は平均約38G。
- 最大 **20周期** が天井。実ゲーム換算は資料上おおむね **約750～760G**。
- 20周期目の零カウンター発動成功時: 上位CZ「復讐行方」。失敗時: CZ「零チャレンジ / 喰霊チャンス」系の救済CZ表記。
- HAZUSEでは零カウンターシナリオを有利区間セット時に抽選することを確認。
- シナリオ振り分けは設定別に公開されているが、通常時全モード表は実機完全再現用となるため本DBでは省略。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_INTERNAL_STATE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- **天井 / 周期進行はRESET** とする解析が複数資料で一致。
- **有利区間RESET** とする解析あり。
- 朝一液晶ステージは **学校ステージ**。
- 零カウンターは朝一 **非表示**で、内部的に初回判定タイミングへ到達すると「零」表示。
- 設定変更時の内部状態そのもの（低確/高確等）の直接契約は、当時1gekiが「現在調査中」としており、複数資料で固定できないため `UNVERIFIED_AFTER_RESEARCH`。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE / internal state部分はUNVERIFIED

### carryOverBehavior

- 据え置きでは **天井 / 周期進行をCARRY_OVER** とする解析。
- **有利区間もCARRY_OVER** とする解析あり。
- 朝一の見た目は学校ステージ・零カウンター非表示で設定変更時と共通のため、見た目だけでは据え置き判別不可。
- 据え置き時の低確/高確など内部状態の直接契約は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

信頼度: ANALYSIS_HIGH / internal state部分はUNVERIFIED

### powerCycleBehavior

- 純電源OFF→ON時は **天井 / 周期進行をCARRY_OVER**。
- **有利区間CARRY_OVER** とする解析あり。
- 液晶ステージは学校ステージ、零カウンターは非表示へ戻るため、設定変更時と外見が共通。
- 1gekiの2019年11月時点資料では天井G数・状態を「現在調査中」としていたが、後年のちょんぼりすた整理では天井/有利区間の引継ぎを明記。後者を現時点のcanonicalとし、内部状態詳細のみ未固定。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE / state詳細はUNVERIFIED

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き / 純電断: **CARRY_OVER**。
- 管理単位は単純なゲーム数だけではなく、零カウンター周期。最大20周期。
- 朝一は零カウンター非表示となるため、表示だけで内部周期進行を判断しない。

### ceilingAfterReset

- 設定変更後も最大天井は **20周期**。
- 20周期の実ゲーム目安は **約750～760G**（1周期平均約38G）。
- 設定変更専用の短縮天井は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井到達時はAT確定ではなくCZ救済。発動成功なら上位CZ「復讐行方」、失敗なら通常側CZ。

### modeAfterReset

- 零カウンターシナリオは **有利区間セット時に抽選**される公開解析あり。
- 設定変更で有利区間RESETとする解析と組み合わせるとシナリオ再セットになるが、本DBでは推論ではなく「有利区間セット時抽選」という公開契約として保存。
- 設定変更専用の朝一モード振り分け値は確認できず `PUBLIC_RESET_ONLY_MODE_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時の低確/高確等の内部状態は、1geki当時資料で「現在調査中」。
- 据え置き / 純電断時の状態引継ぎについても直接固定できる機種固有資料を十分に確保できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時の成立役別状態移行率は公開されているが、リセット専用ではなく実機完全再現寄りなので本DBでは収集対象外。

### advantageousSectionReset

- 設定変更: **RESET** とする解析あり。
- 据え置き / 純電断: **CARRY_OVER** とする解析あり。
- 通常時は有利区間ランプが消灯しているタイプとする当時攻略資料があり、朝一ランプ単独の設定変更判別には使えない。

### resetBenefits

- 当時攻略資料では **リセット後の特別な恩恵なし**。
- 設定変更専用の天井短縮、初当たり優遇、CZ確率優遇などの公開数値は確認できない。
- 有利区間セット時に零カウンターシナリオ抽選があるが、設定変更専用値とは扱わない。

### resetPenalties

- 設定変更では前日の天井 / 周期進行を失うため、深い周期まで進んだ台を朝一で狙う観点では不利要素。
- それ以外の設定変更専用ペナルティは公開資料で固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一の学校ステージは設定変更・電源OFF→ONで共通。
- 零カウンター非表示も共通。
- 当時攻略資料は **「リセット判別は不可」** と整理。
- 通常時有利区間ランプ消灯タイプのため、ランプ単独判別も不可。
- 本機固有ガックン発生条件・発生率は機種名 / 型式 / メーカー / 「設定変更」「ガックン」「朝一」等で再探索したが直接資料を固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 朝一天井: **最大20周期**（短縮なし確認）。
- 1周期平均: **約38G**。
- 最大20周期の実ゲーム目安: **約750～760G**。
- 朝一ステージ: **学校ステージ**。
- 零カウンター: **非表示 → 初回判定タイミングで表示**。
- 設定変更専用モード振り分け / 初当たり優遇率 / CZ優遇率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

`喰霊-零- 運命乱 / 喰霊零2 / 喰霊2 / S喰霊零 運命乱JJ / 9S0621 / JFJ / 藤商事` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / 零カウンター / モード / 状態 / 有利区間 / 有利区間ランプ / ガックン` を組み合わせ、JFJ公式、HAZUSE、1geki、ちょんぼりすた、スロパチくえすと、当時解析・回顧資料を横断。天井/周期・有利区間・朝一表示は複数資料で照合。内部状態の設定変更/電断契約とガックンは直接固定できないため推測補完しない。

## qualityNotes / conflicts

- 導入日 **2019-12-02** はHAZUSE、ちょんぼりすた、スロパチくえすと、当時導入カレンダーで一致。
- 初当たりはJFJ公式が整数丸め値（1/349→1/168）、HAZUSEが精密値（1/349.7→1/168.3）。定義競合ではなく丸め精度差と判断し、精密値をcanonical。
- 天井の実ゲーム換算は約750G / 約760Gで資料差がある。管理単位の本体は **20周期** で一致するため、20周期をcanonical、ゲーム数は参考レンジとして保持。
- 天井失敗時CZ名称に「零チャレンジ」「喰霊チャンス」の表記差がある。当時サイト内の呼称差を保持し、AT確定とはしない。

## sources

取得日: 2026-09-11

1. JFJ公式「S 喰霊-零- 運命乱～うんめいのみだれ～」
   - https://www.fujimarukun.co.jp/products/s-garei0/
   - 初当り丸め値、通常AT純増約4.0枚/G、赤7 20G約80枚、青7 30G約120枚。
2. HAZUSE 基本スペック / 解析
   - https://hazuse.com/machine/pachislot/9S0621/
   - https://hazuse.com/machine/pachislot/9S0621/genre/201/
   - https://hazuse.com/machine/pachislot/9S0621/genre/209/
   - 型式、検定番号、導入日、設定別機械割、初当り、ベース、純増、零カウンターシナリオ。
3. 1geki 天井・設定変更
   - https://1geki.jp/slot/s_garei0/3/
   - 20周期天井、学校ステージ、零カウンター非表示、2019年11月時点の設定変更/電断時内部状態「現在調査中」。
4. ちょんぼりすた 喰霊 零-運命乱-
   - https://chonborista.com/slot/fuji-slot/95569/
   - 設定変更時天井/有利区間RESET、電源OFF→ON時引継ぎ、20周期天井、朝一表示。
5. スロパチくえすと 喰霊零2 運命乱 天井解析
   - https://www.slopachi-quest.com/article/gareizero2-unnmei-tennjou/
   - 最大20周期、1周期平均約38G、約760G、朝一学校ステージ、零カウンター非表示、リセット恩恵なし、リセット判別不可、通常時有利区間ランプ消灯。

## status

- performanceCore: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_INTERNAL_STATE
- missingFields:
  - 設定変更時の内部状態（低確/高確等）の直接契約
  - 据え置き/純電断時の内部状態引継ぎ直接契約
  - 設定変更専用モード振り分け数値
  - 本機固有ガックン契約/率
- conflicts:
  - 20周期の実ゲーム換算 約750G vs 約760G（管理単位20周期は一致）
  - 天井失敗時CZ呼称 零チャレンジ vs 喰霊チャンス
