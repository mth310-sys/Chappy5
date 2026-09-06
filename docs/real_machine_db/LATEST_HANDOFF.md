# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **842**
- latestRecordAdded: **ニューキングハナハナ-30**（パイオニア）— 2014-09-16
- latestRecord: `docs/real_machine_db/machines/2014-09-16_new-king-hanahana-30.md`
- chronologicalFrontier: **2014-09-16**
- frontierLatestMachine: **ニューキングハナハナ-30**
- schema: **resetBehavior v0.7**
- status: **2014-09-16_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、841件目 `2014-09-08_osu-salaryman-bancho.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **841件 / 2014-09-08 / 09-08_GROUP_OPEN**。
- 2014-09-08同日群を日付・新台・導入開始・ホール導入・メーカー別表記で再監査。今回の探索範囲では「押忍！サラリーマン番長」以外の具体日付き未登録5号機を固定できなかったため **09-08_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 09-09〜09-15も境界監査し、具体日付き未登録5号機を今回固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い具体日アンカーとしてパイオニア公式が **2014-09-16「ニューキングハナハナ-30 導入開始」** と明示。HAZUSE・必勝本も09-16で一致したためNo.842として登録。
- machine record commit: `721f1cfaaff7f2a6fbc63550d4da67af5c395f5c`。

## 今回追加 — ニューキングハナハナ-30

### identity / 性能コア

- manufacturer: **パイオニア**。
- hall start primary: **2014-09-16**（パイオニア公式導入開始、HAZUSE、必勝本）。
- 型式: **ニューキングハナハナDX-30**。
- 検定番号: **4S0458**。
- type: **5号機 / ノーマル / ボーナス主体 / 完全告知 / 30Φ**。
- 機械割: **96.0 / 98.0 / 101.0 / 104.0 / 107.0 / 112.0%**。
- BIG: **1/303 / 293 / 281 / 268 / 255 / 234**。
- REG: **1/504 / 474 / 439 / 407 / 374 / 336**。
- 合算主表記: **1/189 / 181 / 171 / 161 / 151 / 138**。
- 50枚ベース: **約38G**（パチマガスロマガ当時実戦値。メーカー公表値ではない）。
- BIG: **約312枚**。
- REG: **約130枚**。
- 天井: **非搭載**。
- coreStatus: **COMPLETE_CORE_WITH_SOURCE_LIMITS**。

### CONFLICT

- 導入日はパイオニア公式・HAZUSE・必勝本が **2014-09-16**、K-Naviが **2014-10-06**。
- 公式の明示的「導入開始」をreleaseDate主値に採用し、K-Navi値は地域先行/全国展開基準差の可能性として `CONFLICT_RELEASE_DATE_SECONDARY` で保持。
- 合算確率は一部二次資料で設定2〜5が1G程度異なる丸め表記。BIG/REG個別確率は主要資料で一致しているため主系列は必勝本/HAZUSE。

## resetBehavior v0.7 — ニューキングハナハナ-30

- 天井・AT/ART・CZ・規定G解除モード非搭載のノーマル機。
- `gameCounterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `modeAfterReset`: **NOT_APPLICABLE_NO_GAME_NUMBER_MODE**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更時だけの短縮天井、朝一専用モード、CZ/AT優遇など: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電源OFF→ONで持越しが収益上意味を持つ天井G・規定G・AT状態は **NOT_APPLICABLE**。
- 本機固有ガックン/リール初動は、2014年機と2026年「ニューキングハナハナV-30」を明確に分離して再探索したが、解析確定資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 公開リセット専用数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 2014-09-08〜09-15境界監査

- 09-08は押忍！サラリーマン番長以外の具体日付き未登録5号機を今回固定できず **GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 09-09〜09-15も具体日付き未登録5号機を今回固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 09-16はニューキングハナハナ-30を登録したが、同日群の全メーカー横断最終監査前なので **GROUP_OPEN** を維持。

## 2014-09-16群

- **ニューキングハナハナ-30** 登録済み。
- 次回は `2014-09-16 / 9月16日 / パチスロ / 新台 / 導入開始 / ホール導入 / 納品` とメーカー別一覧を再照合し、同日未登録機があれば先に処理。
- 同日群CLOSED後は09-17以降を時系列監査。
- 既知の次候補: **2014-09-22「スロット バットマン」**（K-Naviで09-22確認済み）。ただし09-17〜09-21の漏れ監査を先に行う。
- さらに後続既知候補: **2014-09-29「ドリームジャンボ」**、**「バビロン(with桜丘ショコラ)」**。バビロンは09-29/10-06の導入日競合があるため到達時に再精査。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）。
- 新規収集を止めず、本線と並行して1件ずつ前進する。

## safeguard

- 2014年「ニューキングハナハナ-30」と2026年「ニューキングハナハナV-30」を混同しない。検索結果は2026年機が強く混入するため、型式 **ニューキングハナハナDX-30 / 4S0458** で同定する。
- K-Naviの2014-10-06表記を公式2014-09-16導入開始より優先しない。地域/全国展開基準差として競合保持。
- ノーマル機で天井・モードが存在しないことを、一般論だけで「設定変更時挙動確定」と拡張しない。ガックン/物理リール挙動は本機固有資料がなければUNVERIFIED。
- 2026年ニューキングハナハナVのガックン/BT/スマスロ情報を2014年機へ転記しない。
- P-WORLD等の最終更新日を導入日に使用しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 842 / chronologicalFrontier 2014-09-16 / 09-16_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 842件目を再確認。
3. **2014-09-16同日群を全メーカー横断で再監査**し、未登録機があれば先に処理。
4. 同日群CLOSED後、**09-17〜09-21境界監査**へ進む。
5. 漏れがなければ次の強い候補 **2014-09-22「スロット バットマン」** を処理する。
6. 遡及QAは **`2007-02_new-hanahana-30.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### ニューキングハナハナ-30
- パイオニア公式 更新履歴: `https://www.slot-pioneer.co.jp/news.html`
- パイオニア公式 2014製品: `https://www.slot-pioneer.co.jp/products/2014.html`
- パイオニア公式 ハナハナシリーズ: `https://www.slot-pioneer.co.jp/products/hanahana.html`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0458/`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/2462/1/48037`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/111/01.php`
- K-Navi: `https://p-kn.com/slot/2115/`
- みんスロ: `https://minslo.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E2%80%9030/`
- けんのスロットシミュレーション: `https://kenslo65536.com/kaiseki/new-king-hanahana-30.html`

### 次候補/境界
- スロット バットマン K-Navi: `https://p-kn.com/slot/2110/`
