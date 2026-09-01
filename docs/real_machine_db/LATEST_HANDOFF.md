# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは258件地点 `キングガッパ（2008-05、日単位UNVERIFIED）` まで完了。
- 今回、2008年5月末境界を再監査し、ユニバーサル公式が **2008年5月発売** と明記する未登録機 `アルティメットブレイク拳` を確認。具体的ホール設置は後年実機回顧で2008-06-02のため、発売と設置の定義を混ぜず月精度で**259件地点**へ前進。
- 同時監査で `MAX448` 候補は、2008-06-05グリーンべると記事が7月納品予定と明記しており、5月列から除外。7月時点で未処理なら再確認する。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回は新規収集を優先し遡及QAは進めていない。

## 259. アルティメットブレイク拳（ミズホ）

- record: `docs/real_machine_db/machines/2008-05_ultimate-break-ken.md`
- commit: `0f42192509fcc57c981cf08db90643f72019b3e1`
- releaseDate: `2008-05`（メーカー公式発売月。後年実機回顧の設置時期は2008-06-02）
- systemType: ボーナス+完走型RT（RIDE on TIME）
- coreStatus: `PARTIAL_CORE_WITH_CONFLICTS_BASE_UNVERIFIED`
- resetBehaviorQA: `PARTIAL_STRUCTURE_CONFIRMED_RESET_PROCESS_UNVERIFIED`

### 主要性能

設定構成は当時解析系で `1 / 4 / 6 / H`。

- BIG合成: `1/385.51 / 1/341.33 / 1/306.24 / 1/275.36`
- REG合成: `1/655.36 / 1/595.78 / 1/546.13 / 1/468.11`
- ボーナス合成: `1/242.73 / 1/217.01 / 1/196.22 / 1/173.38`
- パチマガスロマガ・シミュレート機械割: `97.94 / 102.40 / 107.00 / 112.57%`
- BIG: 約312枚
- REG相当/Punching Chance: 約108枚
- RT純増: 約`+0.5枚/G`
- RTゲーム数は資料競合あり（30G vs 34G）。
- 50枚ベースは検索語・資料系統を変えて再探索したが比較可能値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### CONFLICT

- `CONFLICT_PAYOUT_DEFINITION`
  - パチマガスロマガ: `97.94 / 102.40 / 107.00 / 112.57%`
  - 2008年更新5号機まとめwiki: `98.0 / 102.8 / 107.2 / 112.2%`
  - 後年実機回顧（全六引用）: `98.6 / 102.8 / 107.2 / 112.2%`
  - 算出/攻略条件差または資料差を疑い平均化せず全系列保持。
- `CONFLICT_RT_GAME_LENGTH`
  - 2008年5月グリーンべると: 30Gワンセット。
  - 2008年7月更新5号機まとめwiki・後年実機回顧: 34G完走型。
  - 純増約+0.5枚/Gは整合。ゲーム数だけ平均・補間せず競合保持。
- `RELEASE_DEFINITION_MONTH_VS_INSTALLATION`
  - ユニバーサル公式: 2008年5月発売。
  - 後年実機回顧: 2008-06-02設置時期。
  - 発売/設置の定義差として両方保持。

### v0.7 resetBehavior

- 2008年更新資料からCZ/RTフロー、99G低確RT周期を含む構造は確認。
- `settingChangeBehavior`: 設定変更時にCZ/RT状態・周期カウンタを初期化/引継ぎする本機固有本文を取得できず `UNVERIFIED_AFTER_RESEARCH`。
- `carryOverBehavior`: 据え置き時のCZ/RT状態・周期カウンタ引継ぎは直接資料未確定。
- `powerCycleBehavior`: 電源OFF→ONのみの場合のCZ/RT状態・周期ゲーム数・初期出目は未確定。
- `gameCounterReset`: 周期構造は確認済みだが設定変更/電断時処理は `UNVERIFIED_AFTER_RESEARCH`。
- `ceilingAfterReset`: 設定変更時のみ短縮される公開天井値は `NONE_CONFIRMED`。通常天井は後年実機回顧で「無し」だが、当時一次本文による直接照合は未取得。
- `modeAfterReset` / `stateAfterReset`: 朝一専用モードやCZ/RT残状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`。
- 朝一専用恩恵/不利・公開朝一数値: `NONE_CONFIRMED`。
- `resetDetection`: ガックン、初期出目、液晶/ランプ、周期挙動による本機固有の変更判別は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## 今回の主要出典

取得日: 2026-09-01

### アルティメットブレイク拳
- https://www.universal-777.com/product/slot/ultimate_break/
- https://web-greenbelt.jp/00006496/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/28/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/28/mizuho_slot_28.php
- https://w.atwiki.jp/5gouki/pages/90.html
- https://ameblo.jp/ultimate-coffee/entry-10760540725.html

### 5月境界監査
- https://web-greenbelt.jp/00003685/ (`MAX448`系の『スーパールーレット』は2008-06-05発表、7月納品予定。5月列に置かない)
- https://p-mans.blogspot.com/2008/05/ (`ヒミコスタイル` 2008-05-15発表会、5/20記事)
- https://pachisuro100.com/2008slot/ (月別候補の補助監査。単独で具体日確定には使わない)

## 重複防止

- 既存258件の再追加禁止。
- 259 `アルティメットブレイク拳` も再追加禁止。
- `アルティメットブレイク拳` は公式発売月2008-05で登録。具体ホール設置時期2008-06-02は別定義の補助情報であり、6月に重複登録しない。
- `キングガッパ` は日付を推測せず `2008-05` の月精度で遡及追加済み。
- `ニューパルサーエボリューション` は **5/25納品開始予定** として処理済み。
- `MAX448` は5月候補から除外。現時点の強い当時記事では7月納品予定。
- `犬キングX` はP-WORLDで **2008年8月導入** と確認済みのため8月時点で未処理なら登録する。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準259件地点。2008年5月境界で `アルティメットブレイク拳` まで追加済み。**
2. 2008-05-20〜31の残監査を続行。`ヒミコスタイル`、`ファイアーヒーロー2`、`ミュージックボックス五木ひろし` 等の月精度候補について、具体導入/納品日または5月発売の強い根拠を優先して確定する。
3. `ヒミコスタイル` は2008-05-15発表会・5/20業界記事までは確定。6/19時点の導入実戦記も既確認。5月末か6月かを型式・旧DB・当時ホール導入記録で詰め、時系列位置確定後に登録する。
4. `ファイアーヒーロー2` は後年月別一覧で2008年5月扱いを確認したが、単独二次資料のため当時記事/旧DBで具体日または発売月を再照合してから登録する。
5. 5月残漏れが閉じたら6月列へ進む。`ソニックライブ` 等を具体日順に並べ直し、同日他メーカー漏れを横断監査する。
6. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
7. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
