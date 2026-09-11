# パチスロひぐらしのなく頃に祭2

No: 1382
machineName: パチスロひぐらしのなく頃に祭2
machineNameVariants: ひぐらし祭2 / Sひぐらしのなく頃に祭2
manufacturer: オーイズミ
releaseDate: 2020-12-21
formalModelName: Sパチスロひぐらしのなく頃に祭2PX
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6.1号機
systemType: A+ART / 技術介入 / リアルボーナス+完走型ART

## identity / release
- 遊技日本、K-Navi、1geki、複数解析資料で2020-12-21導入を一致確認。
- 型式 `Sパチスロひぐらしのなく頃に祭2PX` は中古機DB・検定通過一覧で確認。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 市場予測機械割 | 完全攻略時 |
|---:|---:|---:|
| 1 | 96.5% | 103.0% |
| 2 | 97.6% | 104.1% |
| 3 | 99.1% | 105.5% |
| 4 | 101.2% | 107.4% |
| 5 | 102.8% | 109.0% |
| 6 | 103.9% | 110.0% |
- 技術介入機のため市場予測値と完全攻略値を分離保持。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/197.4 |
| 2 | 1/193.9 |
| 3 | 1/188.3 |
| 4 | 1/182.0 |
| 5 | 1/177.6 |
| 6 | 1/173.8 |
- reliability: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約34.9G/50枚（設定1基準）。
- reliability: ANALYSIS_HIGH

## netIncrease
- ART「運命の解」: 約1.0枚/G。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- オヤシロボーナス: 最大202枚。
- ひぐらしボーナス: 最大160枚。
- 富竹ボーナス: 最大56枚。
- ART「運命の解」: 1セット30G / 50G / 90Gの完走型。

## modeSpecificMinimumData
- CZ「運命分岐モード」はART転落後200Gまたは400Gで到達。
- 前回運命分岐モード転落時の技術介入成功で次回200G、失敗で400G。
- CZ到達G数は設定変更でも引き継ぐ。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時、有利区間はRESET。
- 一方でCZ「運命分岐モード」までの天井G数はCARRY_OVER。
- 液晶ステージは鬼隠し編ステージから開始。

### carryOverBehavior
- 据え置きではCZ天井G数・有利区間を引き継ぐ。
- 前回運命分岐モード転落時の技術介入結果に基づく200G/400G条件も内部的に維持される扱い。

### powerCycleBehavior
- 電源OFF→ONのみではCZ天井G数・有利区間ともにCARRY_OVER。
- 液晶ステージは鬼隠し編ステージから開始。

### gameCounterReset
- 設定変更: CARRY_OVER（CZ天井G数）。
- 据え置き/純電断: CARRY_OVER。
- 6号機AT機で一般的な「設定変更＝天井RESET」と異なるため重要特性として保持。

### ceilingAfterReset
- リセット専用短縮なし。
- ART転落後200Gまたは400GでCZ「運命分岐モード」。設定変更でも既存の天井G数を引き継ぐ。

### modeAfterReset
- 通常/天国等のゲーム数モードは本機の主要物差しではない。
- 設定変更専用モード振り分けの公開表は確認できず `NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時のART/CZ内部状態の全契約は公開資料で固定できず `PARTIAL_UNVERIFIED`。
- ただしCZ天井G数の引継ぎ、有利区間RESETは直接確認済み。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。

### resetBenefits
- 設定変更専用の天井短縮はなし。
- 一部攻略資料では設定変更後に内部的にCZスタートの可能性が示されるが、発生率・確定契約を高信頼資料で固定できないため定量恩恵へ格上げしない。

### resetPenalties
- 設定変更専用の定量的不利要素は直接公開確認なし。

### resetDetection
- 本機固有のガックン確定条件・朝一有利区間ランプ単独判別契約は、検索語・資料系統を変えても高信頼で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 液晶が鬼隠し編ステージ開始になる点は設定変更・電源OFF→ON双方に共通するため単独判別不可。

### numericResetData / publicMorningNumbers
- 設定変更専用の短縮天井、モード振り分け、特定G以内当選率などの直接公開数値は `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FIXED_AFTER_RESEARCH`。
- CZ天井値そのものは200G / 400Gで、設定変更後も引継ぎ。

## resetBehavior 再探索メモ
2026-09-11。`ひぐらし祭2 / Sひぐらしのなく頃に祭2 / Sパチスロひぐらしのなく頃に祭2PX / オーイズミ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 有利区間 / ガックン / ランプ` を組み替え、1geki、なな徹、スロパチクエスト、当時業界記事、機種DBを横断。CZ天井G引継ぎ・有利区間RESET/CARRYは複数資料で固定。本機固有ガックン/ランプによる変更確定条件は固定できず推測補完しない。

## conflicts
- 世代表記は一部DBが「6号機」、解析資料が「6.1号機」とする。型式導入時期と当時解析に基づきgenerationは6.1号機とし、DB上の広義6号機表記は定義差として保持。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更時のCZ内部スタート発生率: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン/有利区間ランプによる変更判別契約: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://yugi-nippon.com/pachinko-new-machine/post-39967/ — 2020-12-21導入、基本スペック、純増、ボーナス獲得枚数 / INDUSTRY
- https://1geki.jp/slot/higurashi_2/3/ — 天井、設定変更時の天井引継ぎ・有利区間RESET、電断時引継ぎ / ANALYSIS_HIGH
- https://www.slopachi-quest.com/article/higurasimaturi2-tenjou/ — 200/400G CZ天井、34.9G/50枚 / ANALYSIS_SINGLE
- https://www.slopachi-quest.com/article/higurasimaturi2-settei/ — 設定別ボーナス、機械割、市場予測/完全攻略、34.9G/50枚 / ANALYSIS_HIGH
- https://chonborista.com/slot/oizumi-slot/119798/ — 型式世代、導入日、基本性能 / ANALYSIS_HIGH
- https://p-kn.com/slot/3498/ — 導入日・機種DB / DATABASE_HIGH
- https://www.nakaiti.com/html/sOizumi104.html — 型式名、ART基本性能、獲得枚数 / DATABASE
- https://kaiseki.sulopachinews.com/archives/2352 — 検定通過型式名 / DATABASE
