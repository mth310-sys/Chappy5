# スーパーハナハナ-30

No: 1409
machineName: スーパーハナハナ-30
machineNameVariants: スーパーハナハナ30 / Sスーパーハナハナ-30 / SスーパーハナハナV1-30
manufacturer: パイオニア
releaseDate: 2021-04-19
formalModelName: SスーパーハナハナV1-30
certificationNumber: 0S0985

generation: 6.1号機 / 30Φ
systemType: AT / 沖スロ / 完全告知 / 擬似ボーナス連チャンタイプ

## identity / release
- 25Φ「スーパーハナハナ」と同時展開された30Φ仕様。業界発表で2021-04-19稼働開始予定、HAZUSEで型式 `SスーパーハナハナV1-30`、検定番号 `0S0985`、導入開始日2021-04-19を確認。
- 25Φとは別型式・別検定番号のため全機種方針に従い独立レコード化する。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 98.0% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 106.0% |
| 6 | 108.0% |
- 25Φ/30Φ共通性能として複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | ボーナス初当り | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/218 | 1/196 | 1/380 | 1/129 |
| 2 | 1/209 | 1/183 | 1/356 | 1/121 |
| 3 | 1/193 | 1/169 | 1/329 | 1/111 |
| 4 | 1/179 | 1/157 | 1/308 | 1/104 |
| 5 | 1/166 | 1/145 | 1/286 | 1/96 |
| 6 | 1/148 | 1/134 | 1/265 | 1/89 |
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約49.8G/50枚（全設定共通表記）。
- reliability: ANALYSIS_HIGH

## netIncrease
- 擬似ボーナス純増 約3.0枚/G。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG CHANCE: 50G継続、平均約150枚。
- REG CHANCE: 20G継続、平均約60枚。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時最大999Gでボーナス当選、天井到達はBIG濃厚。
- スーパーハナハナモードは初当たり後の約4回に1回で突入機会。滞在中はボーナス約1/10、天井32G。
- スーハナ / 超スーハナ / 極スーハナの3段階。解析上の突入時振り分け約70% / 20% / 10%、ループ率50% / 60% / 70%、平均ボーナス期待回数3.5 / 6.0 / 9.5回。
- 最大96Gの引き戻しゾーンを持ち、同ゾーン中の自力当選はスーハナモード移行が優遇される。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITHOUT_RESET_MODE_RATE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井進行・内部モード・内部状態・有利区間をRESET。
- 設定変更後にもスーパーハナハナモードへ突入するチャンスがあることを業界発表・解析で確認。
- reliability: INDUSTRY / ANALYSIS_HIGH

### carryOverBehavior
- 据え置きで電源OFF→ONのみの場合は、天井進行・内部モード・内部状態・有利区間をCARRY_OVER。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみ: 天井 / 内部モード / 内部状態 / 有利区間を引き継ぐ。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更時: 天井G数RESET。
- 電源OFF→ONのみ: 天井G数CARRY_OVER。
- 通常天井は最大999G。別解析の「有利区間開始から967G（表示999G）」はカウンタ起点差として分離保持。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認できない。通常モード天井は最大999G。
- スーハナ / 超スーハナ / 極スーハナに移行している場合は32G天井。ただし設定変更後に必ず32Gになる仕様ではない。
- 設定変更専用のスーハナ系モード移行率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### modeAfterReset
- 設定変更時は内部モードを再抽選、電源OFF→ONのみでは引き継ぐ。
- 設定変更後もスーハナモード突入チャンスあり。
- 設定変更専用の各モード初期振り分け率は、正式型式・30Φ表記・メーカー名・朝一/設定変更/リセット/モード振り分け等で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: INDUSTRY / ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### stateAfterReset
- 設定変更時は内部状態RESET、電源OFF→ONのみではCARRY_OVER。
- 設定変更専用の内部状態初期振り分け率は `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時は有利区間RESET、電源OFF→ONのみではCARRY_OVER。
- 有利区間ランプは払い出し表示右下のドット。通常時は基本消灯型で、ボーナス開始時に点灯し、初当たりボーナス終了時または有利区間引継ぎパターンではボーナス後32G消化時に消灯する。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は新規有利区間・モード再抽選となり、スーハナモードへ直接移行するチャンスがある。
- 当時攻略では朝一0〜64Gをリセット狙い目とする資料があるが、設定変更専用当選率ではないため数値定義を分離する。
- reliability: INDUSTRY / ANALYSIS_SINGLE

### resetPenalties
- 設定変更で前日の天井進行・内部モード・内部状態・有利区間を持ち越さない。
- 設定変更専用の定量的不利率は `NO_PUBLIC_RESET_SPECIFIC_PENALTY_RATE_FOUND_AFTER_RESEARCH`。

### resetDetection
- 通常時は有利区間ランプ基本消灯型のため、朝一消灯だけでは設定変更判別不可。
- 朝一からランプ点灯なら据え置き濃厚かつ前日の有利区間引継ぎ状態の可能性が高いが、通常状態ではランプ判別に不向き。
- 本機固有ガックン条件/発生率は、型式・30Φ表記を含めて検索語を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 設定変更後にもスーハナモード移行チャンスあり: 正確な発生率 `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の各モード初期振り分け率: `UNVERIFIED_AFTER_RESEARCH`。
- 通常天井: 最大999G。スーハナ系3モード滞在時天井: 32G。
- 当時攻略上の朝一リセット狙い目: 0〜64G（攻略目安であり設定変更専用当選率ではない）。

## conflicts
- 「最大999G」と「有利区間開始から967G（表示999G）」はカウンタ起点の定義差として双方を保持。
- 一撃の後年ページは設定変更/電源OFF・ON天井欄が調査中のままだが、HAZUSE・なな徹・当時立ち回り解析がRESET/CARRY契約で一致するため、後者をANALYSIS_HIGHとして採用。

## missingFields
- 設定変更専用の各モード初期振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の内部状態初期振り分け率: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-12
- https://www.pidea.jp/articles/1612761356
- https://news.p-world.co.jp/articles/16319/nippon
- https://hazuse.com/machine/pachislot/0S0985/
- https://1geki.jp/slot/s_s_hanahana30/
- https://1geki.jp/slot/s_s_hanahana30/3/
- https://nana-press.com/kaiseki/machine/118/3433/
- https://hisshobon.news/analyze/911/
- https://chonborista.com/slot/pionia-slot/131943/
- https://slotjin.com/tenjoukitaichi/superhana/

recordStatus: COMPLETE_CORE_RESET_V07
