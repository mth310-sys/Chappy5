更新日: 2026-09-09

## 現在地点
- recordCount: **1094**
- latestRecordAdded: **ドリームジャンボ あの興奮をもう一度**（JPS）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-19_dream-jumbo-ee.md`
- chronologicalFrontier: **2017-06-19**
- frontierLatestMachine: **ドリームジャンボ あの興奮をもう一度 — No.1094**
- schema: **resetBehavior v0.7**
- status: **2017-06-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1093「ケロロ軍曹」実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1093件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN**。
- handoff指定の次未処理 **「ドリームジャンボ あの興奮をもう一度」** をNo.1094として登録。
- P-WORLD、ちょんぼりすた、すろぱちくえすと、5号機クロニクル、pacnk、検定通過一覧、2017年導入カレンダーを横断し、メーカー、型式、導入日、設定別機械割、BIG/REG、PREMIUM BIG、RT純増、獲得枚数を固定。
- 導入日は2017-06-19をcanonical化。一部の6/12表記はCONFLICTとして保持。
- 50枚ベース、検定番号、設定変更/据え置き/純電断時の一時RT・成立済みボーナス・CZ状態、本機固有の確定ガックン等は検索語・資料系統を変えて再探索したが十分な直接資料を固定できずUNVERIFIEDとして保存。

## No.1094 — ドリームジャンボ あの興奮をもう一度
- manufacturer: **JPS**
- releaseDate: **2017-06-19**
- formalModelName: **ドリームあの興奮をもう一度ジャンボEE**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマル / A+RT / 無限RT**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.7 / 99.2 / 101.7 / 103.7 / 105.9 / 108.4%**。
- BIG合算（PREMIUM BIG含む）: **1/307.7 / 1/300.6 / 1/292.6 / 1/280.1 / 1/266.4 / 1/253.0**。
- REG: **1/303.4 / 1/302.0 / 1/299.3 / 1/291.3 / 1/287.4 / 1/275.4**。
- PREMIUM BIG: **全設定1/2114.06**。
- ベース: **UNVERIFIED_AFTER_RESEARCH**。
- RT純増: **約0.1枚/G**、PREMIUM BIG後から次回ボーナスまで継続。
- BIG/PREMIUM BIG: **最大311枚**、REG: **104枚**。
- 通常ゲーム数天井: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### resetBehavior v0.7
- 設定変更: 通常天井/ゲーム数モードがないためゲーム数リセット恩恵はNOT_APPLICABLE。RT/成立済みボーナス/CZ一時状態の本機固有契約は **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き独立契約: **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。
- 純電源OFF→ON: 一時RT/成立済みボーナス/CZ状態は **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: ゲーム数解除モードなし。朝一専用モード/短縮天井/特定G以内当選優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: AT/ART型の低確/高確状態はNOT_APPLICABLE。一時RT/CZ状態はUNVERIFIED。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 当時解析でガックン判別は「調査中」。確定ガックン/初期出目/ランプ契約は **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- releaseDate: 複数資料は2017-06-19。同一解析記事冒頭に6/12表記が残るためCONFLICT保持。canonicalは6/19。
- 一部古い表にREG設定6 1/387と読める表記があるが、精密値1/275.4および合算整合性を優先し、誤記疑いとしてcanonicalに採用しない。
- missing: certificationNumber; baseGamesPer50; direct transient RT/bonus/CZ reset contract; deterministic reset detection.

## 2017-06-19群 — 継続中
- status: **OPEN**。
- 登録済み:
  1. ぱちスロ PSYCHO-PASS サイコパス — No.1089
  2. SLOTギルティクラウン — No.1090
  3. パチスロ リング 終焉ノ刻 — No.1091
  4. パチスロ ベン・トー～半額弁当争奪戦!!～ — No.1092
  5. ケロロ軍曹 — No.1093
  6. ドリームジャンボ あの興奮をもう一度 — No.1094
- 次の確認済み候補:
  1. **スーパーミラクルジャグラー** — No.1095候補
  2. ハイパーリノ
- すろぱちくえすと2017年導入一覧では6/19群にサイコパス / ギルティクラウン / リング / ベン・トー / ケロロ / ドリームジャンボ / スーパーミラクルジャグラー / ハイパーリノを掲載。残り2機を処理後、K-Navi・メーカー別一覧等で全メーカー横断監査しCLOSE判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1094を再取得。
2. **1094件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN** を正本として継続。
3. 次の未処理 **「スーパーミラクルジャグラー」** をNo.1095候補として性能コア + resetBehavior v0.7で処理。
4. 続いて **ハイパーリノ** を処理し、2017-06-19群を全メーカー横断監査してCLOSE判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1094 ドリームジャンボ あの興奮をもう一度
- P-WORLD: https://www.p-world.co.jp/machine/database/8377
- ちょんぼりすた: https://chonborista.com/slot/jps-slot/38091/
- すろぱちくえすと解析: https://www.slopachi-quest.com/article/dreamjumbo-anokouhun/
- すろぱちくえすと2017導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 5号機クロニクル JPS全機種: https://5goki.com/jps
- pacnk: https://pacnk.com/slot/tools/sh_dorimujamboii.html
- すろ・ぱち(解)検定通過一覧: https://kaiseki.sulopachinews.com/archives/2352
- P-Summa 2017年6月新台まとめ: https://psumma.jp/trend/35081/
