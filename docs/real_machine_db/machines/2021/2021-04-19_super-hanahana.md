# スーパーハナハナ

No: 1408
machineName: スーパーハナハナ
machineNameVariants: Sスーパーハナハナ / スーパーハナハナ25 / スーパーハナハナ-25 / SスーパーハナハナV1
manufacturer: パイオニア
releaseDate: 2021-04-19
formalModelName: SスーパーハナハナV1
certificationNumber: 0S1624

generation: 6.1号機 / 25Φ
systemType: AT / 完全告知 / 擬似ボーナス連チャンタイプ

## identity / release
- パイオニアのハナハナシリーズ20周年機。シリーズ初のAT機として25Φ「スーパーハナハナ」と30Φ「スーパーハナハナ-30」を同時展開。
- 業界発表で納品2021-04-18、稼働開始2021-04-19予定。HAZUSEでも導入開始日2021-04-19、型式 `SスーパーハナハナV1`、検定番号 `0S1624` を確認。
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
- HAZUSE、一撃、必勝本系、複数解析資料で一致。
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
- 複数解析資料で一致。
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
- スーハナ / 超スーハナ / 極スーハナの3段階。モード突入時の振り分けは約70% / 20% / 10%、ループ率50% / 60% / 70%、平均ボーナス期待回数3.5 / 6.0 / 9.5回とする解析値あり。
- 初当たり後には最大96Gの引き戻しゾーンがあり、引き戻し中の自力当選はスーハナモード移行が優遇される。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITHOUT_RESET_MODE_RATE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井進行・内部モード・内部状態・有利区間をRESET。
- 設定変更後にもスーパーハナハナモードへ突入するチャンスがあることをメーカー発表会系業界記事・複数解析で確認。
- reliability: INDUSTRY（設定変更後のスーハナチャンス） / ANALYSIS_HIGH（RESET項目）

### carryOverBehavior
- 据え置きで通常の電源OFF→ONを行った場合、天井進行・内部モード・内部状態・有利区間をCARRY_OVER。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみ: 天井 / 内部モード / 内部状態 / 有利区間を引き継ぐ。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更時: 天井G数RESET。
- 電源OFF→ONのみ: 天井G数CARRY_OVER。
- 通常時天井は最大999G。別解析では有利区間開始から967G消化相当を「表示999G」と整理しているため、カウンタ定義を分離して保持する。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更による固定短縮天井は確認できない。通常モード天井は最大999G。
- スーハナ系モードに移行している場合は32G天井だが、これはモード選択によるもので「設定変更後は必ず32G」ではない。
- 設定変更専用のスーハナ系モード選択率は十分な再探索後も公開値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### modeAfterReset
- 設定変更時は内部モードを再抽選。電源OFF→ONのみでは引き継ぐ。
- 設定変更後もスーハナモード突入のチャンスがある。
- 設定変更専用の通常 / 引き戻し / スーハナ系各モードの正確な初期振り分け率は、機種名・型式・25Φ/30Φ・メーカー名・設定変更/リセット/朝一/モード振り分けを変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: INDUSTRY / ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### stateAfterReset
- 設定変更時は内部状態RESET、電源OFF→ONのみではCARRY_OVER。
- 設定変更専用の内部状態初期振り分け率は `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時は有利区間RESET。電源OFF→ONのみではCARRY_OVER。
- 有利区間ランプは払い出し表示右下（WINセグ右下）のドット。
- ランプは基本的に通常時消灯型。ボーナス開始時に点灯し、初当たりボーナス終了時または有利区間引継ぎパターンではボーナス後32G消化時に消灯する。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は新規有利区間・モード再抽選となり、スーハナモードへ直接移行するチャンスがある。
- 朝一リセット狙いについて0〜64Gを対象とする当時立ち回り資料があるが、これは期待値判断であり、設定変更専用の当選率を示す公式数値ではないためnumericResetDataへ確率として転記しない。
- reliability: INDUSTRY / ANALYSIS_SINGLE

### resetPenalties
- 設定変更により前日の天井進行・内部モード・内部状態・有利区間は持ち越さない。
- 設定変更専用の定量的な不利率は十分な再探索後も確認できず `NO_PUBLIC_RESET_SPECIFIC_PENALTY_RATE_FOUND_AFTER_RESEARCH`。

### resetDetection
- 通常時は有利区間ランプが基本消灯するため、朝一消灯だけでは設定変更判別不可。
- 朝一からランプが点灯していれば据え置き濃厚かつ前日の有利区間引継ぎ状態を示す材料になるが、ランプ状況だけの単純判別には不向き。
- 本機固有のリールガックン条件/発生率は、機種名・型式・25Φ/30Φ・「ガックン / リール始動 / 朝一 / 設定変更」で再探索しても高信頼情報を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 設定変更後にもスーハナモード移行チャンスあり: 発生率 `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の各モード初期振り分け率: `UNVERIFIED_AFTER_RESEARCH`。
- 通常天井: 最大999G。スーハナ / 超スーハナ / 極スーハナ滞在時天井: 32G。
- 朝一リセット狙いの当時立ち回り目安: 0〜64G（期待値攻略上の目安であり設定変更専用当選率ではない）。

## conflicts
- 天井表記は「通常時最大999G」と「有利区間開始から967G（表示999G）」がある。カウンタ起点の定義差として保持し、数値を平均しない。
- 一撃の後年ページでは設定変更/電源OFF・ONの天井欄が「調査中」のまま残る一方、HAZUSE・なな徹・当時立ち回り解析はRESET/CARRY契約を具体的に掲載する。後者を複数一致のANALYSIS_HIGHとして採用し、前者は未更新欄とみなす。

## missingFields
- 設定変更専用の各モード初期振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の内部状態初期振り分け率: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-12
- https://www.pidea.jp/articles/1612761356
- https://news.p-world.co.jp/articles/16319/nippon
- https://hazuse.com/machine/pachislot/0S1624/
- https://hazuse.com/machine/pachislot/0S1624/genre/207/
- https://1geki.jp/slot/s_s_hanahana/
- https://1geki.jp/slot/s_s_hanahana/3/
- https://nana-press.com/kaiseki/machine/118/3433/
- https://nana-press.com/kaiseki/machine/118/3325/
- https://nana-press.com/kaiseki/machine/118/3329/
- https://hisshobon.news/analyze/911/
- https://chonborista.com/slot/pionia-slot/131943/
- https://slotjin.com/tenjoukitaichi/superhana/

recordStatus: COMPLETE_CORE_RESET_V07
