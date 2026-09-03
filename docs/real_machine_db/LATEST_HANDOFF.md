# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **460**
- latestMachineAdded: **新世紀エヴァンゲリオン～魂の軌跡～**（2010-03-01ホール導入開始 / 2010-02-28納品予定 / 公式月表記2010.02を併記）
- latestRecord: `docs/real_machine_db/machines/2010-03-01_evangelion-tamashii-no-kiseki.md`
- chronologicalFrontier: **2010-03-01**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2010-02-22_midori-no-makibao.md` を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実レコードを優先。
- 開始時点は **459件 / latestMachineAdded みどりのマキバオー / chronologicalFrontier 2010-02-22**。
- 2010-02-22同日群と2010-02-23〜月末境界を再監査。
- KPE「スパイガール」はK-Naviだけ2010-02-22ホール導入開始表記がある一方、パチビー2010-04-19、他複数DBも2010-04導入で一致。2月機としては採用せず、日付CONFLICT候補として4月境界で再監査する。
- 2月23日〜月末に、3月1日の本機より前へ固定できる新たな未登録パチスロを今回の検索範囲では確定できず、次の具体日確認済み機として「新世紀エヴァンゲリオン～魂の軌跡～」を460件目へ追加。
- 本機はグリーンべるとが2010-02-28納品予定、K-Naviが2010-03-01ホール導入開始、SANKYO公式オンラインミュージアムが2010.02表記。物流開始/ホール導入/月粒度の定義差として保持し、releaseDateは2010-03-01を採用。

## 460 — 新世紀エヴァンゲリオン～魂の軌跡～ 要約

- メーカー: **ビスティ**
- 正式型式: **新世紀エヴァンゲリオン・魂の軌跡A**
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入: **2010-03-01**（K-Naviホール導入開始。グリーンべると2010-02-28納品予定、SANKYO公式2010.02）
- 世代: **5号機**
- タイプ: **ボーナス主体 / ノーマル + 天井RT / 技術介入**
- 機械割: **CONFLICT**。P-WORLD `96.5 / 98.8 / 102.2 / 105.3 / 107.9 / 112.6%`、kenslo `97.6 / 99.4 / 102.1 / 105.0 / 107.5 / 112.1%`。
- BIG合算: **1/370.3 → 1/291.3**
- REG: **1/744.7 → 1/580.0**
- ボーナス合算: **1/247.3 → 1/193.9**
- 50枚ベース: **42.24 / 43.49 / 45.13 / 47.21 / 49.16 / 51.45G**（単一旧解析）
- SUPER BIG: **最大415枚**
- NORMAL BIG: **最大259枚**
- REG: **約104枚**
- 天井: **BIG後1000G+α / REG後800G+α**で次回ボーナスまでのRT。
- RT純増: **CONFLICT**。P-WORLD詳細は暴走約+0.3、覚醒/カヲル覚醒約+0.5枚/G。旧解析には暴走約+0.2、覚醒約+0.35枚/G系列あり。

## resetBehavior v0.7 — 新世紀エヴァンゲリオン～魂の軌跡～

- **設定変更**: `PARTIAL_CONFIRMED`。パチ＆スロ必勝本の本機専用解析で、**天井までのゲーム数は設定変更してもリセットされず引き継ぐ**。
- **据え置き**: `PARTIAL_CONFIRMED_CEILING_PROGRESS`。K-Naviの「宵越アリ」と設定変更時天井引継ぎ解析を根拠に、天井進捗の範囲だけ確認済み。内部状態全般へは拡張しない。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。単純電断と設定変更/据え置きを区別する本機固有本文を確定できず。
- **gameCounterReset**: `CARRY_OVER_ON_SETTING_CHANGE_CONFIRMED_MULTI_SOURCE`。
- **ceilingAfterReset**: 設定変更専用短縮なし。前日進捗を保持したままBIG後1000G+α / REG後800G+α。
- **modeAfterReset**: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`。
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵**: 前日深いハマリ台は設定変更されても天井進捗が残るため、宵越し天井狙い価値を残しうる。
- **朝一不利**: 設定変更固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、出目変化、リール、液晶、ランプまで再探索済み。
- **公開朝一数値**: BIG後1000G+α / REG後800G+αの天井値と設定変更時CARRY_OVERを保存。専用朝一当選率・モード振分・恩恵発生率は確認なし。

## 主要出典（取得日 2026-09-03）

- SANKYO公式オンラインミュージアム: `https://www.sankyo-fever.jp/collection/871/`
- グリーンべると: `https://web-greenbelt.jp/00002540/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5818`
- K-Navi: `https://p-kn.com/slot/1161/`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1534/1/23257`
- eva.man-soft: `https://eva.man-soft.com/04/decision.html`
- kenslo: `https://kenslo65536.com/kaiseki/eva-tamashii.html`
- FutureScope / Fields告知: `https://prtimes.jp/main/html/rd/p/000000007.000001932.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は2010年3月本線前進を優先。
- 次の遡及QA対象は、スロ原人直後の実ファイル順を確認し、最初の `resetBehavior` 欠損機を一意特定してから補完する。

## 次回再開地点

1. **recordCount 460 / chronologicalFrontier 2010-03-01**。最新追加は「新世紀エヴァンゲリオン～魂の軌跡～」。
2. **2010-03-01同日群を最終監査**。同日候補として未登録の **「麻雀王利一」（タイヨー）**を最優先で当時資料まで掘り、導入日を確定してから処理する。
3. 月精度で既登録の **「真田純勇士」**も2010-03-01候補資料が見えるが、既存releaseDateを日精度へ昇格するのは当時業界/メーカー等の高信頼具体日を追加確認できた場合のみ。
4. 3月1日同日群を閉じたら、**2010-03-02以降**を具体導入日順に監査し、最古の未処理機種から追加する。
5. **スパイガール日付CONFLICT監査を保持**: K-Navi `2010-02-22` vs パチビー `2010-04-19` / 複数DB `2010-04`。現時点では4月側を優勢とし、2月前線へ遡及追加しない。4月境界で当時業界資料を再確認する。
6. 本機の電源OFF→ON、RT状態処理、変更判別は後続QAで新たな当時資料/アーカイブ本文を回収できた場合のみ更新する。
7. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
