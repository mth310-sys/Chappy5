# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **591**
- latestMachineAdded: **ペガサスNEO**（エマ / releaseDate 2011-07-11）
- latestRecord: `docs/real_machine_db/machines/2011-07-11_pegasus-neo.md`
- chronologicalFrontier: **2011-07-11**
- frontierLatestExactDateMachine: **ペガサスNEO**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — ペガサスNEO

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコードを再取得して開始。
- 開始時main正本は recordCount 590 / chronologicalFrontier 2011-07-04。
- 2011-07-04同日群および2011-07-05〜07-10境界を再監査し、具体日を安全に確定できる未登録機を確認できなかったため、次の具体日アンカー **2011-07-11「ペガサスNEO」**へ進行。
- repo内重複確認後、591件目として `docs/real_machine_db/machines/2011-07-11_pegasus-neo.md` を追加。

### 性能コア

- 機械割: **97.5 / 99.0 / 100.5 / 103.0 / 107.0 / 111.0%**。
- BIG: **1/264.3 / 1/260.1 / 1/258.0 / 1/246.4 / 1/244.5 / 1/230.8**。
- REG: **1/528.5 / 1/512.0 / 1/394.8 / 1/368.2 / 1/303.4 / 1/321.3**。
- ボーナス合算: **1/176.2 / 1/172.5 / 1/156.0 / 1/147.6 / 1/135.4 / 1/134.3**。
- BIG最大 **311枚**、REG最大 **111枚**。
- 型式名: **ペガサスNEO** / 検定番号: **1S0456**。
- ノーマルAタイプ。完全告知モードと演出モードを選択可能。
- 50枚ベースは資料系統・検索語を変えて再探索したが比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7

- 通常ゲーム数天井・規定G数当選・長期ゲーム数モードは複数資料再探索後も確認できず、ゲーム数天井リセット比較は **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の低レベル内部状態・演出モード、据え置き、単純電源OFF→ON時の演出モード/出目/ランプ状態は **UNVERIFIED_AFTER_RESEARCH**。
- 朝一専用短縮天井、リセット専用ボーナス優遇、朝一特定G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ガックン、初期出目、PEGASUSランプ等による変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- ノーマル機であることを理由に、未確認の電源・設定変更挙動を一般論から補完していない。

## 主要出典 — ペガサスNEO（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1457/`
- グリーンべると: `https://web-greenbelt.jp/00002120/`
- P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4751/greenbelt`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6424`
- 5号機クロニクル: `https://5goki.com/ema`
- pacnk: `https://pacnk.com/slot/tools/sh_pegasusneo.html`

## 今回の遡及QA — 美川〜さそり座のサラリーマン〜

- 対象: `docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`
- 既存COMPLETE_CORE相当の性能完了判定を崩さず、`resetQaStatus: PARTIAL_RESET_QA`としてリセットQAを別管理。
- パチマガスロマガ当時解析から、従来未回収だった1000円あたりプレイ数を直接回収:
  - 設定1 **32.98P**
  - 設定2 **33.36P**
  - 設定3 **33.59P**
  - 設定4 **33.75P**
  - 設定5 **34.47P**
  - 設定6 **35.23P**
- BIG後RT **100G**、MID/MB後RT **50G**を再確認。
- RT純増はパチマガスロマガ **+0.76枚/G** と、回顧/Pachinko Vista **約+0.6〜0.7枚/G** があるため平均化せず **CONFLICT / 定義・丸め差候補**として保持。
- 通常ゲーム数天井・規定G数当選・長期G数モードは再探索後も確認できず、gameCounterReset / ceilingAfterReset は **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時RT残G、据え置き時RT残G、単純電源OFF→ON時RT残G、ガックン/出目等の変更判別は本機固有の直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一短縮天井・設定変更専用初当たり優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。

## 主要出典 — 美川〜さそり座のサラリーマン〜（QA取得日 2026-09-04）

- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/01/a.php`
- パチマガスロマガ RT解析: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/01/h-z1.php`
- パチマガスロマガ 通常時小役/1000円プレイ数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/01/c.php`
- pacnk: `https://pacnk.com/slot/tools/sh_mikawasasorizanosarariman.html`
- 5号機クロニクル: `https://5goki.com/oizumi`
- パチ7 / 佐々木真回顧: `https://pachiseven.jp/articles/detail/18117`
- 悠遊道 / 佐々木真回顧: `https://www.pachinko-road.com/column/22968/`
- Pachinko Vista: `https://www.pachinkovista.com/pfactory/model.php?dsp=1&gc=0&km=2&nid=016015`

## source QA note

- ペガサスNEOはK-Naviの2011-07-11ホール導入開始を主日付とする。グリーンべるとの「7月中旬納品予定」、P-WORLD/5号機クロニクルの2011年7月表記とは矛盾しない。
- ペガサスNEOの性能コアはK-Navi、業界記事、P-WORLD、pacnk、5号機クロニクルで高一致。baseのみ未確認。
- 美川のRT純増は複数資料値を平均しない。定義/丸めの可能性を注記したままCONFLICTとして保持。
- `COMPLETE_CORE`系の既存性能完了状態とreset QA状態を分離する。リセット欠損を理由に不用意に性能コアをPARTIALへ落とさない。

## 直前までの重要重複監査情報

- `docs/real_machine_db/machines/2011-06-17_onihama-gaiden-hayato-shippuden.md`
- `docs/real_machine_db/machines/2011-06-20_riospa-rio-no-dai-onsen.md`
- `docs/real_machine_db/machines/2011-06-20_progolfer-saru.md`
- `docs/real_machine_db/machines/2011-06-27_skylove3.md`
- `docs/real_machine_db/machines/2011-06-27_daigyakuten.md`
- `docs/real_machine_db/machines/2011-06_warau-salesman.md`
- `docs/real_machine_db/machines/2011-07-03_ryoma-kakeru.md`
- `docs/real_machine_db/machines/2011-07-04_cyberdragon2.md`
- `docs/real_machine_db/machines/2011-07-04_sengoku-kaidouki.md`
- `docs/real_machine_db/machines/2011-07-11_pegasus-neo.md`
- 以後もrecursive tree / contents実パス確認を重複判定の優先手順とし、code search未ヒットだけで未登録判定しない。

## 遡及QA継続地点

- **美川〜さそり座のサラリーマン〜 (`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`) までresetBehavior v0.7補完済み**。
- `docs/real_machine_db/machines/2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため、次回のQAでは重複更新せずスキップする。
- その後は **recursive tree / contentsの実パス順に進み、Thunder V SPECIALの次に存在する最初のresetBehavior欠損レコードを直接fetchして確定**してから遡及QAを再開する。code searchの未ヒットやファイル名推測だけでQA前線を動かさない。

## 本線の次回再開地点

1. **recordCount 591 / chronologicalFrontier 2011-07-11**から開始。
2. **2011-07-11同日群の残存監査**を先に行い、tree実パス/contentsと外部導入カレンダーを照合。未登録があれば同日群を優先。
3. 同日群が閉じたら **2011-07-12〜07-14境界を監査**。
4. その間により古い未登録機がなければ、次の強い候補 **トリプルクラウン25φ（2011-07-15納品予定）**を重複確認後に処理する。
5. 続く候補は **ミルキーマーチ（7/18納品予定）→ GRADIUS THE SLOT（7/22導入開始 / 7/24納品 / 7/25導入の資料差）**。毎回、より古い未登録機を先に監査する。
6. `GRADIUS THE SLOT` 到達時は **2011-07-22 / 07-24 / 07-25 の日付定義差・CONFLICT** を保持する。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから確定する。競合は平均せずCONFLICT。
