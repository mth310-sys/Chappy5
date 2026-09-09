更新日: 2026-09-09

## 現在地点
- recordCount: **1089**
- latestRecordAdded: **ぱちスロ PSYCHO-PASS サイコパス**（KYORAKU / 京楽産業.）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-06-19_psycho-pass.md`
- chronologicalFrontier: **2017-06-19**
- frontierLatestMachine: **ぱちスロ PSYCHO-PASS サイコパス — No.1089**
- schema: **resetBehavior v0.7**
- status: **2017-06-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1088実レコードを再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時点でmainはNo.1088「パチスロ 信長の野望-創造-」まで進行済みだったため、旧会話上のNo.1083候補へ戻らず、正本上の次の未処理「ぱちスロ PSYCHO-PASS サイコパス」をNo.1089として処理。
- 性能コア + resetBehavior v0.7を同時収集。設定変更時の内部状態振り分け、ART間ボーナス回数天井のRESET、純電源OFF→ON時のCARRYOVERを当時解析から直接固定。
- 50枚ベース、検定番号、本機固有の据え置き単独契約、確定ガックンは検索語・資料系統を変えて再探索後も直接固定できず、推測せずUNVERIFIEDとして保存。

## No.1089 — ぱちスロ PSYCHO-PASS サイコパス
- manufacturer: **KYORAKU（京楽産業.）**
- releaseDate: **2017-06-19**
- formalModelName: **パチスロサイコパスK**（中古実機流通資料で複数確認、公的検定資料直接固定なし）
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機世代 / A+ART / CZ / リアルボーナス**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_BASE_UNVERIFIED**

### performanceCore
- 機械割: **97.0 / 98.4 / 100.8 / 103.5 / 106.6 / 111.5%**。
- ART初当たり: **1/523.8 / 465.6 / 411.2 / 358.2 / 321.5 / 264.0**。
- リアルボーナス合算: **全設定共通 約1/99.9**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。一撃当時ページも「現在調査中」で、別系統再探索でも直接値を固定できず。
- ART「執行RUSH」: **初期100G以上、約1.9枚/G（ボーナス/特化ゾーン込み）**。
- リアルボーナス実獲得: **約49枚**（60枚超払い出しで終了）。
- 天井: **ART間ボーナス11～14回目後はCZ、15回目でART**。

### resetBehavior v0.7
- 設定変更: **ART間ボーナス回数RESET / 内部状態RESET・再抽選 / 通常3ステージからランダム / ぱちログクリア**。
- 電源OFF→ON: **ART間ボーナス回数CARRYOVER / 内部状態CARRYOVER / 通常3ステージからランダム / ぱちログクリア**。
- 据え置き単独契約: **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。純電断の直接契約から勝手に同一視しない。
- 設定変更時状態振り分け:
  - 設定1: 低82.8 / 高15.6 / 超高1.6%（高確以上17.2%）
  - 設定2: 80.9 / 17.2 / 2.0%（19.2%）
  - 設定3: 78.9 / 18.8 / 2.3%（21.1%）
  - 設定4: 76.6 / 20.3 / 3.1%（23.4%）
  - 設定5: 74.6 / 21.9 / 3.5%（25.4%）
  - 設定6: 72.7 / 23.4 / 3.9%（27.3%）
- 設定変更専用の固定天井短縮: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: ステージは設定変更/電断ともランダム、ぱちログも両者でクリア。本機固有の確定ガックン/初期出目契約は **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / missing
- MATERIAL_NUMERIC_CONFLICT: **NONE_CONFIRMED** for canonical core/reset values.
- 純増約1.9枚/Gは「ボーナス/特化ゾーン込み」の定義であり、ART区間単体純増へ読み替えない。
- missing: `baseGamesPer50`, `certificationNumber`, direct stay-setting contract, deterministic gakkun/initial-reel reset clue.

## 2017-06-19群 — 継続中
- status: **OPEN**。
- 登録済み:
  1. ぱちスロ PSYCHO-PASS サイコパス — No.1089
- 次の確認済み候補:
  1. **SLOTギルティクラウン** — No.1090候補
  2. パチスロ リング 終焉ノ刻
  3. パチスロ ベン・トー～半額弁当争奪戦!!～
  4. ケロロ軍曹
  5. ドリームジャンボ あの興奮をもう一度
  6. スーパーミラクルジャグラー
  7. ハイパーリノ
- 同日順は全メーカー監査で再確認し、漏れ防止を優先。群全件処理後にCLOSE判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05-15_looney-tunes-bia.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_the-king-of-fighters.md`。
- 新規本線優先のため今回未更新。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1089を再取得。
2. **1089件 / chronologicalFrontier 2017-06-19 / 6/19群OPEN** を正本として継続。
3. 次の未処理 **「SLOTギルティクラウン」** をNo.1090候補として性能コア + resetBehavior v0.7で処理。
4. 続いて6/19同日群を一本の時系列キューとして処理し、全メーカー監査後にCLOSE判定。
5. 遡及QAは `2006-05_the-king-of-fighters.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1089 ぱちスロ PSYCHO-PASS サイコパス
- グリーンべると: https://web-greenbelt.jp/00009567/
- 一撃 基本: https://1geki.jp/slot/s_psychopass/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_psychopass/3/
- 一撃 状態移行: https://1geki.jp/slot/s_psychopass/44/
- 一撃 ART: https://1geki.jp/slot/s_psychopass/81/
- 一撃 ボーナス: https://1geki.jp/slot/s_psychopass/61/
- 一撃 小役/ベース未調査: https://1geki.jp/slot/s_psychopass/4/
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/40119/
- P-WORLD: https://www.p-world.co.jp/machine/database/8391
- すろぱちくえすと: https://www.slopachi-quest.com/article/psycho-pass/
- 中一商事（型式名確認）: https://item.rakuten.co.jp/auc-nakaiti/terahu01/

### 6月導入境界 / 6月19日群
- K-Navi 2017年6月導入カレンダー: https://p-kn.com/calendar/201706/
- 2017年導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
