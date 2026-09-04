# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **586**
- latestMachineAdded: **蝶々乱舞**（オリンピア / releaseDate主値2011-06-10 / BACKFILL / 日付CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2011-06-10_chouchou-ranbu.md`
- chronologicalFrontier: **2011-06-27**
- frontierLatestExactDateMachine: **大逆転**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、既存machine treeを再取得して開始。
- `INDEX.md` は旧情報のためREADME規約どおり最新handoffと実machineレコードを進捗正本として使用。
- **重要修正**: 直前handoffでは「鬼浜外伝 ハヤト疾風伝」「リオスパ Rioの大温泉」をrepo未登録としていたが、recursive machine treeと実ファイル直取得で既存登録を確認した。GitHub code searchの未ヒットを未登録根拠にしてはいけない。
- 既存確認済み:
  - `docs/real_machine_db/machines/2011-06-17_onihama-gaiden-hayato-shippuden.md`
  - `docs/real_machine_db/machines/2011-06-20_riospa-rio-no-dai-onsen.md`
  - `docs/real_machine_db/machines/2011-06-20_progolfer-saru.md`
  - `docs/real_machine_db/machines/2011-06-27_daigyakuten.md`
  - その他6月後半レコードもtree上に存在するため、以後は**tree実パス確認→fetch_file**を重複判定の優先手順とする。
- このため本線では既存レコードを587件目として重複作成せず、recordCount 586 / frontier 2011-06-27を維持した。

## 今回の遡及QA — めぞん一刻（2006）

対象: `docs/real_machine_db/machines/2006-11_mezon-ikkoku.md`

- 長く未確定だった「怪胴王直後の最初の実在resetBehavior欠損path」をrecursive machine tree順で確定。
- tree順は `2006-11_kaidouou.md` → **`2006-11_mezon-ikkoku.md`** → `2006-11_mikawa-sasoriza-no-salaryman.md`。
- `めぞん一刻` にはresetBehaviorが存在しなかったため、v0.7を追加してQA前線を**めぞん一刻まで補完済み**へ進めた。
- 既存性能コアのPARTIAL要素（機械割CONFLICT、50枚ベース、RT純増等）はreset QAと混同せず維持。

### 性能再監査で補強した点

- HAZUSE当時解析で初代2006年機を再確認。
- 赤7スーパーBIG: **平均約265枚 / 終了後159G RT（一刻タイム）**。
- 白7ノーマルBIG: **平均約200枚 / 終了後51G RT（五代タイム）**。
- REG: **平均約100枚**。
- 後年まとめ資料のSBB/NBB別仕様と整合。一方、5号機クロニクルの「BIG約260枚+50G RT」は表現差が大きいためCONFLICTを維持し、平均化しない。

### resetBehavior v0.7 — めぞん一刻

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のRT、キャラクター増加状態、出目等の本機固有処理を直接確定できず。
- `carryOverBehavior`: **NO_GAME_COUNT_OR_LONG_TERM_HIT_MODE_FEATURE_CONFIRMED; OTHER_STATE_UNVERIFIED**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NOT_APPLICABLE_TO_CEILING_AFTER_RESEARCH**。通常時に蓄積するゲーム数天井/規定G数当選は確認なし。
- `ceilingAfterReset`: **NOT_APPLICABLE; NO_STANDARD_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **NOT_APPLICABLE_TO_LONG_TERM_HIT_MODE_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_FOR_ACTIVE_RT_AND_DISPLAY_STATE**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。ただしRT/表示状態の変更処理は未確認なので不利なしと一般化しない。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一数値として確定できるreset専用値はなし。通常仕様の固定RT値 **159G / 51G** をnumericResetDataの比較基準として保存。
- reset QA状態: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

## 主要出典 — めぞん一刻 QA（取得日 2026-09-04）

- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/1916/greenbelt`
- HAZUSE初代解析: `https://hazuse.com/i/data/maisonikkoku/top.htm`
- pacnk設定判別DB: `https://pacnk.com/slot/tools/sh_mezonikkoku.html`
- 5号機クロニクル: `https://5goki.com/heiwa-olympia`
- めぞん一刻シリーズ回顧: `https://www.marimo0925.net/pachislot-kikaiwariranking-mezonikkoku-ban/`

## 遡及QA継続地点

- **めぞん一刻 (`docs/real_machine_db/machines/2006-11_mezon-ikkoku.md`) まで補完済み**。
- 次のtree実パスは **`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`**。
- 次回はまず同ファイルをfetchし、resetBehavior欠損ならそこから補完。既に収集済みならtree順で次の欠損へ進む。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。

## 本線の次回再開地点

1. **recordCount 586 / chronologicalFrontier 2011-06-27**から開始。
2. 6月漏れ候補はcode searchだけで未登録判定せず、recursive tree / contents実パスを先に確認する。
3. 既存確認済みの鬼浜外伝・リオスパ・プロゴルファー猿・大逆転等は重複作成しない。
4. **パチスロ 笑ゥせぇるすまん（三洋物産）**はP-WORLDで初代2011年機・A+ART（約+1.8枚/G）まで再確認したが、具体的な2011年6月導入日を今回の検索では安全に確定できなかった。次回はSANYO旧公式、K-Navi初代ページ、当時業界記事、旧新台スケジュール/アーカイブへ検索系統を変えて6/27以前・同日・以後を決める。
5. 6/27以前の漏れが閉じたら6/27同日群を再監査し、その後6/28以降の最古未処理機へ前進。
6. PARTIAL/UNVERIFIEDとreset欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで十分再探索し、競合はCONFLICTとして分離する。
