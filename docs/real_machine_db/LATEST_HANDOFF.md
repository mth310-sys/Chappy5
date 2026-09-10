更新日: 2026-09-11

## 現在地点
- recordCount: **1258**
- latestRecordAdded: **戦国BASARA HEROES PARTY**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-01-21_sengoku-basara-heroes-party.md`
- chronologicalFrontier: **2019-01-21**
- frontierLatestMachine: **戦国BASARA HEROES PARTY — No.1258**
- schema: **resetBehavior v0.7**
- status: **2019-01-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1257を再取得して開始。
- INDEXは旧スナップショットのため、LATEST_HANDOFF + main実レコードを正本として継続。
- 開始時mainは1257件、No.1257 `ぱちスロAKB48 エンジェル`、2019-01-21群OPEN。
- handoff指定の未処理先頭 No.1258 `戦国BASARA HEROES PARTY` を性能コア + resetBehavior v0.7で登録。
- 2019-01-21群は未処理候補が残るためOPENを維持。

## No.1258 — 戦国BASARA HEROES PARTY
- manufacturer: **エンターライズ / Enterrise**
- releaseDateCanonical: **2019-01-21**
- generation/system: **5.9号機 / A+ART / リアルボーナス+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- 機械割 canonical: **97.9 / 99.1 / 101.0 / 103.2 / 104.8 / 108.4%**
- 設定5のみ **104.8% vs 104.2%** の資料競合があるため `CONFLICT_SETTING5_PAYOUT_104_8_VS_104_2` を保持。
- BE/BC合算: **1/186.2 → 1/151.0**
- BB: **全設定1/1598.4**
- ボーナス合算: **1/166.8 → 1/138.0**
- ART初当たり: **1/311.7 → 1/271.9**
- ボーナス+ART合算: **1/108.6 → 1/91.5**
- baseGamesPer50: **約29.9G**
- ART純増: **約1.4枚/G（ART単体）** / **約1.7枚/G（ボーナス込み）**。定義差なのでCONFLICTではない。
- BASARA BONUS: **154枚**、BASARA CHALLENGE / BASARA EPISODE: **42枚**。
- Let's PARTY: **初期40G+α**、HEROES PARTY: **1セット30G / 実質継続期待度約75%**。
- 通常ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- settingChangeBehavior: 本機専用朝一資料で**内部状態再抽選**。ただし別資料は「リセット?」表記のため `ANALYSIS_SINGLE_MACHINE_SPECIFIC` として保持。
- powerCycleBehavior: 本機専用朝一資料で**内部状態引継ぎ**。別資料も「引き継ぎ?」で方向性一致。ステージは調査中。
- carryOverBehavior: 据え置きを純電源OFF→ONと分離した本機固有契約は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounterReset / ceilingAfterReset: 通常天井非搭載につき `NOT_APPLICABLE_NORMAL_GAME_CEILING`。短縮天井なし。
- modeAfterReset: 設定変更専用のモード/状態振り分け公開値は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: 5.9号機A+ARTとして有利区間を使用。ただし設定変更/純電断時に有利区間そのものをどう処理するかを直接示した本機固有資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。一般仕様から類推しない。
- resetBenefits / resetPenalties: 朝一専用短縮天井、専用当選率、ART/CZ優遇・不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機固有ガックンは推測記事のみで確定情報なし。発生条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- commonAdvantageousSectionEntryStateDistribution: **通常54.7% / 高確30.1% / 超高確15.2%**。設定変更専用値ではなく、有利区間移行時共通値として分離保存。
- commonAdvantageousSectionEntryRate: **約1/47〜1/47.6**。設定変更専用値ではない。

### quality notes
- 導入日は公式特設サイト更新履歴、業界記事、複数解析で2019-01-21を固定。
- 設定5機械割は一撃・モゲスロ104.8%、ちょんぼりすた104.2%。平均せずCONFLICT。
- ART純増1.4枚/Gと1.7枚/GはART単体 / ボーナス込みの定義差として分離。
- 正式型式名・検定番号は機種名表記揺れ、型式名、検定番号、検定通過、メーカー名等で公式・業界・解析・旧DB系を再探索したが高信頼固定できずUNVERIFIED。

## 2019-01-21群
### 登録済み
- No.1257 ぱちスロAKB48 エンジェル
- No.1258 戦国BASARA HEROES PARTY

### 未処理候補
1. **パチスロ フィーバークィーンII**（SANKYO）— No.1259第一候補
2. **S島漢 25Φ / 30Φ**（平和/アムテックス系。別型式・独立レコード要否を個別確認）
3. **Sゲッターロボ**（京楽系）

### 群判定
- **2019-01-21_GROUP_OPEN**。
- 残り候補を処理後、全メーカー/別型式/別スペック/PB/地域差監査で追加なしを確認してからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`**。
- lastRetroQaResult: **モエる まりんバトる — PARTIAL_RESEARCH_EXHAUSTED**。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`（アクアビーナス）**。
- 今回は新規時系列群処理を優先し、QAカーソルは変更なし。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1258を再取得。
2. **1258件 / chronologicalFrontier 2019-01-21 / `2019-01-21_GROUP_OPEN`** を正本として継続。並行更新があれば最新HEAD優先。
3. **No.1259候補 `パチスロ フィーバークィーンII`** を性能コア + resetBehavior v0.7で収集。
4. 島漢25Φ/30Φ → ゲッターロボを個別照合。
5. 1/21群を全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定。
6. 遡及QAは **`docs/real_machine_db/machines/2006-12_aqua-venus.md`** から再開。

## 主要出典 — 取得日 2026-09-11
### No.1258 戦国BASARA HEROES PARTY
- エンターライズ公式: https://www.enterrise.co.jp/slot/sbh/
- エンターライズ公式スペック: https://www.enterrise.co.jp/slot/sbh/spec.php
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000912/
- P-WORLD: https://www.p-world.co.jp/machine/database/8828
- 一撃: https://1geki.jp/slot/s_basara_hp/
- 一撃 ART概要: https://1geki.jp/slot/s_basara_hp/81/
- パチマガスロマガ 有利区間/内部状態: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/19/l07.php
- パチマガスロマガ HEROES PARTY: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/19/l06.php
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/70813/
- モゲスロ: https://moge-site.com/archives/19735
- すろぱちくえすと: https://www.slopachi-quest.com/article/sengokubasara-heroes-party-settei/

### 2019-01新台群監査
- すろぱちくえすと 2019年1月新台一覧: https://www.slopachi-quest.com/article/erunote-shindai-2019-1/
