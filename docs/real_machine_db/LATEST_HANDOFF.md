更新日: 2026-09-08

## 現在地点
- recordCount: **986**
- latestRecordAdded: **ぱちスロ テラフォーマーズ**（京楽産業.）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-06-20_pachislot-terraformars.md`
- chronologicalFrontier: **2016-06-20**
- frontierLatestMachine: **ぱちスロ テラフォーマーズ**
- schema: **resetBehavior v0.7**
- status: **2016-06-20_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの README、mission v0.7、INDEX、LATEST_HANDOFF、No.985ドリームハナハナ-30、遡及QA対象「平成カツヲ伝説」を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり LATEST_HANDOFF + 実レコード + 最新main を進捗正本として使用。
- 06/06最終監査で一見未登録に見えたコクッチーブラックを検出したが、最新コミット列と実ファイルを照合し **No.982として既登録**と確認。重複追加しなかった。
- ALL7/HAZUSE等の境界監査では06/13はパチンコ候補のみで、パチスロ本線の確実な未処理機を固定できず06/20へ進行。

## No.986 — ぱちスロ テラフォーマーズ
- manufacturer: **京楽産業.**
- releaseDate: **2016-06-20**（京楽公式全国導入開始）
- formalModelName: **ぱちスロ テラフォーマーズ**
- certification/model identifier: **6S0317**
- generation/system: **5号機 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.9 / 99.0 / 100.3 / 104.1 / 107.8 / 112.0%**。
- ボーナス合算: **1/149.6 / 144.7 / 138.3 / 132.4 / 124.8 / 119.4**。
- ART初当たり: **1/443.2 / 425.1 / 407.2 / 363.9 / 328.4 / 294.4**。
- 50枚ベース: **約37G**。
- ART「MARS RUSH」: **1セット40G / 純増約1.6枚/G / 継続率76〜97% / 平均約80%**。
- ゲーム数天井: **ボーナス/ART間777G消化後、次回ボーナスでART確定**。
- ARTスルー天井: **10連続非当選後の次回ボーナスでART確定**。
- チャンスリプレイ天井: 規定回数到達後のボーナスでART確定。

### resetBehavior v0.7
- 設定変更: **ゲーム数天井RESET / 内部状態再抽選 / チャンスリプレイ天井残り回数を専用テーブルで再セット**。
- 電源OFF→ONのみ: **天井・内部状態・ステージを引き継ぎ**。
- 設定変更時内部状態: **通常69.80 / 高確29.80 / 超高確0.39%**。
- 設定変更時チャンスリプレイ天井残り回数: **0回10.2 / 5回10.2 / 10回10.2 / 25回19.9 / 50回19.9 / 75回29.7%**。
- 固定ゲーム数の短縮天井は確認せず。朝一恩恵は状態再抽選とCR天井再セットとして別管理。
- ARTスルー回数進捗の設定変更/据え置き/純電断時の個別処理は直接資料不足のため **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-06-20群 — 継続事項
- No.986 **ぱちスロ テラフォーマーズ**登録済み。
- 次の未処理候補: **パチスロ バルタン星人** → **元祖ハネスロ再び**。
- Big Dreamの06/20表記資料はNo.984で06/06 canonicalとして既登録。重複しない。
- 06/20群を上記候補処理後にメーカー/HAZUSE/ALL7横断監査し、追加がなければCLOSED。
- その後06/27群の **沖ドキ!パラダイス / 沖ドキ!パラダイス-30 / 南国物語 SPECIAL** を監査。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaNextInspection: **2006-03-06_be-bop.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**

### 平成カツヲ伝説 QA結果
- 性能側 `status: PARTIAL` は維持。
- reset側のみ **PARTIAL_RESEARCH_EXHAUSTED**へ更新。
- 特殊リプレイ後3G RT自体は既存HAZUSE根拠を維持。
- 設定変更/据え置き/純電源OFF→ON時の3G RT残G処理、成立済み特殊状態、本機固有ガックン等を表記揺れ・型式・メーカー・朝一・電断語まで拡張して再探索したが、直接固定できる追加資料なし。
- 通常時天井/長期モード/AT・ARTストックは NONE_CONFIRMED / NOT_APPLICABLE相当。推測補完しない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.986を再取得。
2. **2016-06-20「パチスロ バルタン星人」**から性能コア+resetBehavior v0.7を収集。
3. 次に **元祖ハネスロ再び**を処理し、06/20群を最終監査。
4. 追加がなければ06/20群CLOSED → 06/27群へ。
5. 遡及QAは **`2006-03-06_be-bop.md`** から継続。
6. PARTIAL/UNVERIFIEDは検索語・資料系統を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ確定。
7. 競合は平均せずCONFLICT。設定変更/据え置き/純電断/RAMクリアを混同しない。

## 主要出典 — 取得日 2026-09-08
### No.986 テラフォーマーズ
- 京楽公式: https://www.kyoraku.co.jp/news/20160620.php
- パチビー: https://www.pachibee.jp/machines/movie/216050005
- HAZUSE: https://hazuse.com/machine/pachislot/6S0317/
- HAZUSE ART: https://hazuse.com/machine/pachislot/6S0317/genre/209/
- スロ確.com: https://slotkaku.com/terraformars
- pachinavi: https://pachinavi.net/machines/terraformars/
- pacnk: https://pacnk.com/slot/tools/sh_terafuomazu.html

### boundary audit
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
